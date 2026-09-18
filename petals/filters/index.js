console.debug('*** Experiment started: Collection Filters Redesign ***')

// Config for Experiment
const config = {
  clarity: ['set', 'collection_filters_redesign', 'variant_1'],
  debug: true
}

;(function () {
  // Price bucket thresholds, defined in the shop's own currency (whatever the
  // merchant prices products in — typically its default/base currency). At
  // runtime these get multiplied by Shopify's own presentment conversion rate
  // (window.Shopify.currency.rate) so a shopper who switches currency still
  // sees equivalent buckets, compared against prices from products.json which
  // Shopify already returns in that same presentment currency.
  const BASE_CURRENCY_CODE = 'USD'
  const PRICE_RANGE_DEFS = [
    { id: 'under-100', max: 100 },
    { id: '100-200', min: 100, max: 200 },
    { id: '200-300', min: 200, max: 300 },
    { id: '300-400', min: 300, max: 400 },
    { id: '400-500', min: 400, max: 500 },
    { id: 'above-500', min: 500, max: Infinity }
  ]
  let PRICE_RANGES = []

  // Stone Shape has no real data source in Shopify (no tag/metafield/variant
  // option) so it's inferred by matching these words against each product's
  // title. Order here also controls display order in the pill.
  const SHAPE_KEYWORDS = [
    'Round', 'Princess', 'Cushion', 'Oval', 'Emerald',
    'Pear', 'Asscher', 'Heart', 'Radiant', 'Marquise'
  ]

  // Material canonical labels + regexes to normalize the differently-named
  // variant options across products ("Material" vs "Finish", "Yellow Gold
  // Filled" vs "Gold Filled", etc.) onto one shared vocabulary.
  const MATERIAL_ORDER = [
    'Sterling Silver', 'Gold Filled', 'Rose Gold Filled',
    '14k White Gold', '14k Yellow Gold', '14k Rose Gold'
  ]
  const MATERIAL_RULES = [
    [/sterling\s*silver/i, 'Sterling Silver'],
    [/rose\s*gold\s*filled/i, 'Rose Gold Filled'],
    [/(yellow\s*)?gold\s*filled/i, 'Gold Filled'],
    [/14k?\s*white\s*gold/i, '14k White Gold'],
    [/14k?\s*yellow\s*gold/i, '14k Yellow Gold'],
    [/14k?\s*rose\s*gold/i, '14k Rose Gold']
  ]

  const SHAPE_ICONS = {
    Round: '<circle cx="10" cy="10" r="7"/><circle cx="10" cy="10" r="3"/>',
    Princess: '<rect x="3" y="3" width="14" height="14"/><path d="M3 3L17 17M17 3L3 17"/>',
    Cushion: '<rect x="3" y="3" width="14" height="14" rx="5"/><rect x="6.5" y="6.5" width="7" height="7" rx="2.5"/>',
    Oval: '<ellipse cx="10" cy="10" rx="5.2" ry="7.2"/>',
    Emerald: '<polygon points="6,3 14,3 17,6 17,14 14,17 6,17 3,14 3,6"/>',
    Pear: '<path d="M10 2.5c3 3 6 6.7 6 10.3a6 6 0 1 1-12 0c0-3.6 3-7.3 6-10.3Z"/>',
    Asscher: '<polygon points="7,3 13,3 17,7 17,13 13,17 7,17 3,13 3,7"/>',
    Heart: '<path d="M10 17S3 12.5 3 7.8A4.3 4.3 0 0 1 10 5a4.3 4.3 0 0 1 7 2.8C17 12.5 10 17 10 17Z"/>',
    Radiant: '<polygon points="5,3 15,3 17,5 17,15 15,17 5,17 3,15 3,5"/>',
    Marquise: '<path d="M10 2c4 4 7 6.5 7 8s-3 4-7 8c-4-4-7-6.5-7-8s3-4 7-8Z"/>'
  }

  const MATERIAL_SWATCH = {
    'Sterling Silver': { css: 'linear-gradient(135deg,#eceeef,#b9bcc0)' },
    'Gold Filled': { css: 'linear-gradient(135deg,#f4d989,#c9a227)' },
    'Rose Gold Filled': { css: 'linear-gradient(135deg,#f4c3b0,#d98a72)' },
    '14k White Gold': { css: 'linear-gradient(135deg,#f2f2f2,#cfd0d2)', badge: '14k' },
    '14k Yellow Gold': { css: 'linear-gradient(135deg,#f6da8b,#caa22e)', badge: '14k' },
    '14k Rose Gold': { css: 'linear-gradient(135deg,#f0c4b3,#d68b74)', badge: '14k' }
  }

  const selected = { shape: new Set(), material: new Set(), price: new Set() }
  const byHandle = new Map()
  let fullyLoaded = false
  let loadingPromise = null

  initExp()

  async function initExp() {
    await waitFor(() => document.querySelector('#product-grid') && document.querySelector('#FacetsWrapperDesktop'), { ms: 25})

    const grid = document.querySelector('#product-grid')
    const desktopWrap = document.querySelector('#FacetsWrapperDesktop')
    if (!grid || !desktopWrap) return

    startClarityTag()

    const collectionHandle = (location.pathname.match(/\/collections\/([^/]+)/) || [])[1]
    if (!collectionHandle) return

    let catalog
    try {
      catalog = await fetchCatalog(collectionHandle)
    } catch (e) {
      console.warn('[crs-filters] could not load product catalog, leaving native filters in place', e)
      return
    }

    PRICE_RANGES = buildPriceRanges()
    const state = buildFilterState(catalog)

    document.head.appendChild(buildStyles())
    hideNativeFilters(desktopWrap)
    renderFilterBar(desktopWrap, grid, state)

    console.debug('** InitExp: Collection Filters Redesign **', state)
  }

  // *** Data *** //

  async function fetchCatalog(handle) {
    const res = await fetch(`/collections/${handle}/products.json?limit=250`)
    if (!res.ok) throw new Error(`products.json responded ${res.status}`)
    const data = await res.json()
    return Array.isArray(data.products) ? data.products : []
  }

  function buildFilterState(catalog) {
    const materialCounts = new Map()
    const shapeCounts = new Map()

    catalog.forEach((product) => {
      const materials = getMaterials(product)
      const shapes = getShapes(product)
      const price = getMinPrice(product)

      byHandle.set(product.handle, { materials, shapes, price })

      materials.forEach((m) => materialCounts.set(m, (materialCounts.get(m) || 0) + 1))
      shapes.forEach((s) => shapeCounts.set(s, (shapeCounts.get(s) || 0) + 1))
    })

    const availableMaterials = MATERIAL_ORDER
      .filter((m) => materialCounts.has(m))
      .concat([...materialCounts.keys()].filter((m) => !MATERIAL_ORDER.includes(m)))

    const availableShapes = SHAPE_KEYWORDS.filter((s) => shapeCounts.has(s))

    return { availableMaterials, availableShapes, total: catalog.length }
  }

  function getPresentmentCurrency() {
    const active = window.Shopify && window.Shopify.currency && window.Shopify.currency.active
    if (active) return active
    const priceText = (document.querySelector('.price-item, .money') || {}).textContent || ''
    const match = priceText.match(/\b[A-Z]{3}\b/)
    return match ? match[0] : BASE_CURRENCY_CODE
  }

  function getPresentmentRate() {
    const rate = window.Shopify && window.Shopify.currency && Number(window.Shopify.currency.rate)
    return rate && !isNaN(rate) && rate > 0 ? rate : 1
  }

  function buildPriceRanges() {
    const rate = getPresentmentRate()
    const currency = getPresentmentCurrency()

    let fmt
    try {
      fmt = new Intl.NumberFormat(document.documentElement.lang || 'en', {
        style: 'currency', currency, maximumFractionDigits: 0
      })
    } catch (e) {
      fmt = { format: (n) => `${currency} ${Math.round(n)}` }
    }

    return PRICE_RANGE_DEFS.map((def) => {
      const min = (def.min || 0) * rate
      const max = def.max === Infinity ? Infinity : def.max * rate
      const label = !def.min
        ? `Under ${fmt.format(max)}`
        : def.max === Infinity
          ? `Above ${fmt.format(min)}`
          : `${fmt.format(min)} — ${fmt.format(max)}`
      return { id: def.id, label, min, max }
    })
  }

  function getMinPrice(product) {
    // Unlike the /products/<handle>.js Ajax API (which reports prices x100),
    // the /collections/<handle>/products.json endpoint used in fetchCatalog()
    // already returns price in major currency units — no /100 here.
    const prices = (product.variants || []).map((v) => Number(v.price)).filter((n) => !isNaN(n))
    return prices.length ? Math.min(...prices) : 0
  }

  function getMaterials(product) {
    const values = new Set()
    ;(product.variants || []).forEach((v) => {
      ;[v.option1, v.option2, v.option3].forEach((val) => { if (val) values.add(val) })
    })

    const found = new Set()
    values.forEach((val) => {
      const rule = MATERIAL_RULES.find(([re]) => re.test(val))
      if (rule) found.add(rule[1])
    })
    return [...found]
  }

  function getShapes(product) {
    const title = product.title || ''
    return SHAPE_KEYWORDS.filter((word) => new RegExp(`\\b${word}\\b`, 'i').test(title))
  }

  function getHandleFromCard(li) {
    const a = li.querySelector('a[href*="/products/"]')
    if (!a) return null
    const path = a.getAttribute('href').split('?')[0]
    return path.split('/products/')[1]?.split('/')[0] || null
  }

  // *** Filtering *** //

  function matchesFilters(meta) {
    if (!meta) return true
    if (selected.shape.size && !meta.shapes.some((s) => selected.shape.has(s))) return false
    if (selected.material.size && !meta.materials.some((m) => selected.material.has(m))) return false
    if (selected.price.size) {
      const inRange = [...selected.price].some((id) => {
        const range = PRICE_RANGES.find((r) => r.id === id)
        return range && meta.price >= range.min && meta.price < range.max
      })
      if (!inRange) return false
    }
    return true
  }

  function applyFilters(grid, emptyState) {
    const cards = grid.querySelectorAll('li.grid__item')
    let visible = 0

    cards.forEach((li) => {
      const meta = byHandle.get(getHandleFromCard(li))
      const match = matchesFilters(meta)
      li.classList.toggle('crs-hide', !match)
      if (match) visible++
    })

    updateProductCount(visible)
    emptyState.classList.toggle('is-visible', visible === 0)
  }

  function updateProductCount(visible) {
    // Each .product-count div wraps an <h2>/<span id="ProductCount(Desktop)">
    // plus a loading-spinner div that Shopify's own theme JS reads back after
    // its native AJAX facet/sort flow — overwriting the whole div's
    // textContent (as this used to do) destroys those ids and the spinner,
    // which then breaks Shopify's own code with a null-element error. Only
    // the inner span's text should change.
    const label = `${visible} product${visible === 1 ? '' : 's'}`
    const spans = [document.getElementById('ProductCount'), document.getElementById('ProductCountDesktop')]
      .filter(Boolean)
    if (spans.length) {
      spans.forEach((span) => { span.textContent = label })
    } else {
      document.querySelectorAll('.product-count__text').forEach((el) => { el.textContent = label })
    }
  }

  function ensureFullCatalogLoaded(grid, bar) {
    if (fullyLoaded) return Promise.resolve()
    if (loadingPromise) return loadingPromise

    loadingPromise = (async () => {
      bar.classList.add('is-loading')
      try {
        const perPage = grid.querySelectorAll('li.grid__item').length || 16
        const totalPages = Math.max(1, Math.ceil(byHandle.size / perPage))

        if (totalPages > 1) {
          const pages = await Promise.all(
            Array.from({ length: totalPages - 1 }, (_, i) => i + 2).map(fetchPage)
          )
          pages.filter(Boolean).forEach(({ items }) => {
            items.forEach((li) => grid.appendChild(li))
          })
        }

        const pagination = document.querySelector('nav.pagination')
        if (pagination) pagination.classList.add('crs-hide')

        fullyLoaded = true
      } finally {
        bar.classList.remove('is-loading')
      }
    })()

    return loadingPromise
  }

  async function fetchPage(page) {
    try {
      const res = await fetch(`${location.pathname}?page=${page}`)
      if (!res.ok) return null
      const html = await res.text()
      const doc = new DOMParser().parseFromString(html, 'text/html')
      const items = Array.from(doc.querySelectorAll('#product-grid > li.grid__item'))
      items.forEach((li) => li.querySelectorAll('link,script,style').forEach((el) => el.remove()))
      return { page, items }
    } catch (e) {
      console.warn('[crs-filters] failed to load page', page, e)
      return null
    }
  }

  // *** UI: native filters *** //

  function hideNativeFilters(desktopWrap) {
    const heading = desktopWrap.querySelector('.facets__heading')
    if (heading) heading.classList.add('crs-hide')
    desktopWrap.querySelectorAll('details.facets__disclosure').forEach((d) => d.classList.add('crs-hide'))

    // The mobile "Filter and sort" drawer (and its own duplicate sort control
    // + product count) is fully superseded by the unified row we build below,
    // which stays visible at every breakpoint — so hide Dawn's mobile UI
    // entirely instead of trying to relabel/partially reuse it.
    const container = document.querySelector('.facets-container')
    if (container) {
      container.querySelectorAll(':scope > menu-drawer.mobile-facets__wrapper, :scope > .active-facets-mobile, :scope > .product-count')
        .forEach((el) => el.classList.add('crs-hide'))
    }
  }

  // *** UI: new filter bar *** //

  function renderFilterBar(desktopWrap, grid, state) {
    const row = document.createElement('div')
    row.className = 'crs-filters-row'

    const bar = document.createElement('div')
    bar.className = 'crs-filters'

    const label = document.createElement('span')
    label.className = 'crs-filters__label'
    label.textContent = 'Filter by:'
    bar.appendChild(label)

    const backdrop = document.createElement('div')
    backdrop.className = 'crs-backdrop'
    document.body.appendChild(backdrop)

    const groups = []
    if (state.availableShapes.length) {
      groups.push({
        key: 'shape',
        title: 'Stone Shape',
        options: state.availableShapes.map((v) => ({ value: v, label: v }))
      })
    }
    if (state.availableMaterials.length) {
      groups.push({
        key: 'material',
        title: 'Material',
        options: state.availableMaterials.map((v) => ({ value: v, label: v, swatch: true }))
      })
    }
    groups.push({
      key: 'price',
      title: 'Price',
      options: PRICE_RANGES.map((r) => ({ value: r.id, label: r.label }))
    })

    const emptyState = document.createElement('div')
    emptyState.className = 'crs-empty-state'
    emptyState.innerHTML = 'No products match your filters. <button type="button" class="crs-empty-state__clear">Clear all</button>'
    grid.insertAdjacentElement('afterend', emptyState)
    emptyState.querySelector('.crs-empty-state__clear').addEventListener('click', () => clearAll())

    groups.forEach((g) => bar.appendChild(buildPill(g)))

    const status = document.createElement('span')
    status.className = 'crs-filters__status'
    status.textContent = 'Loading all products…'
    bar.appendChild(status)

    const clearBtn = document.createElement('button')
    clearBtn.type = 'button'
    clearBtn.className = 'crs-filters__clear'
    clearBtn.textContent = 'Clear all'
    clearBtn.hidden = true
    clearBtn.addEventListener('click', () => clearAll())
    bar.appendChild(clearBtn)

    row.appendChild(bar)
    row.appendChild(buildMetaRow())
    desktopWrap.appendChild(row)

    document.addEventListener('click', (e) => { if (!row.contains(e.target)) closeAllPanels() })
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeAllPanels() })
    backdrop.addEventListener('click', () => closeAllPanels())

    function buildMetaRow() {
      // Re-parent (not clone) Shopify's real sort control + product count so
      // native sorting keeps working, while both stay visible at every
      // breakpoint instead of only on desktop / inside the mobile drawer.
      const meta = document.createElement('div')
      meta.className = 'crs-meta'
      const count = document.querySelector('#FacetFiltersForm > .product-count')
      const sorting = document.querySelector('#FacetFiltersForm > .facet-filters.sorting')
      if (count) meta.appendChild(count)
      if (sorting) meta.appendChild(sorting)
      return meta
    }

    function clearAll() {
      Object.values(selected).forEach((s) => s.clear())
      bar.querySelectorAll('input[type=checkbox]').forEach((cb) => { cb.checked = false })
      updatePillActiveState()
      applyFilters(grid, emptyState)
    }

    function closeAllPanels() {
      bar.querySelectorAll('.crs-pill.is-open').forEach((p) => {
        p.classList.remove('is-open')
        p.querySelector('.crs-pill__btn').setAttribute('aria-expanded', 'false')
      })
      backdrop.classList.remove('is-visible')
      document.body.classList.remove('crs-filters-lock')
    }

    function updatePillActiveState() {
      let any = false
      bar.querySelectorAll('.crs-pill').forEach((pillEl) => {
        const on = selected[pillEl.dataset.crsPill].size > 0
        pillEl.classList.toggle('is-active', on)
        any = any || on
      })
      clearBtn.hidden = !any
    }

    function buildPill(g) {
      const pill = document.createElement('div')
      pill.className = 'crs-pill'
      pill.dataset.crsPill = g.key

      const btn = document.createElement('button')
      btn.type = 'button'
      btn.className = 'crs-pill__btn'
      btn.setAttribute('aria-expanded', 'false')
      btn.innerHTML = `<span>${g.title}</span>` +
        `<svg class="crs-pill__chevron" xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.35365 0.645917C9.30721 0.599354 9.25203 0.562411 9.19129 0.537205C9.13054 0.511998 9.06542 0.499023 8.99965 0.499023C8.93389 0.499023 8.86877 0.511998 8.80802 0.537205C8.74728 0.562411 8.6921 0.599354 8.64565 0.645917L4.99966 4.29292L1.35365 0.645917C1.25977 0.552031 1.13243 0.499286 0.999655 0.499286C0.866879 0.499286 0.739542 0.552031 0.645655 0.645917C0.551768 0.739804 0.499023 0.867141 0.499023 0.999917C0.499023 1.13269 0.551768 1.26003 0.645655 1.35392L4.64566 5.35392C4.6921 5.40048 4.74728 5.43742 4.80802 5.46263C4.86877 5.48784 4.93389 5.50081 4.99966 5.50081C5.06542 5.50081 5.13054 5.48784 5.19129 5.46263C5.25203 5.43742 5.30721 5.40048 5.35366 5.35392L9.35365 1.35392C9.40022 1.30747 9.43716 1.2523 9.46237 1.19155C9.48757 1.13081 9.50055 1.06568 9.50055 0.999917C9.50055 0.93415 9.48757 0.869029 9.46237 0.808284C9.43716 0.747538 9.40022 0.692363 9.35365 0.645917Z" fill="#121212"/>
        </svg>
      `;
      btn.addEventListener('click', () => {
        const isOpen = pill.classList.contains('is-open')
        closeAllPanels()
        if (!isOpen) {
          pill.classList.add('is-open')
          btn.setAttribute('aria-expanded', 'true')
          backdrop.classList.add('is-visible')
          document.body.classList.add('crs-filters-lock')
        }
      })

      const panel = document.createElement('div')
      panel.className = 'crs-pill__panel'
      panel.innerHTML = `<button type="button" class="crs-pill__close" aria-label="Close">` +
        '<svg viewBox="0 0 20 20" width="18" height="18"><path stroke="currentColor" stroke-width="1.4" fill="none" d="M4 4l12 12M16 4L4 16"/></svg></button>' +
        `<div class="crs-pill__panel-eyebrow">Filter by:</div><div class="crs-pill__panel-title">${g.title}</div>`
      panel.querySelector('.crs-pill__close').addEventListener('click', () => closeAllPanels())

      const list = document.createElement('ul')
      list.className = 'crs-pill__list'

      g.options.forEach((opt) => {
        const li = document.createElement('li')
        const optLabel = document.createElement('label')

        const textWrap = document.createElement('span')
        textWrap.className = 'crs-pill__text'

        const cb = document.createElement('input')
        cb.type = 'checkbox'
        cb.value = opt.value
        // These checkboxes live inside Shopify's native <facet-filters-form>
        // (via #FacetsWrapperDesktop) so the sort control's native AJAX
        // wiring keeps working. That same custom element listens for
        // input/change bubbling from ANY descendant to auto-submit its own
        // facet refresh — which would silently replace our filtered/loaded
        // grid with a fresh unfiltered one and can crash its own count-update
        // code. Stop both events at the source so only our handler runs.
        cb.addEventListener('input', (e) => e.stopPropagation())
        cb.addEventListener('change', async (e) => {
          e.stopPropagation()
          if (cb.checked) selected[g.key].add(opt.value); else selected[g.key].delete(opt.value)
          updatePillActiveState()
          await ensureFullCatalogLoaded(grid, bar)
          applyFilters(grid, emptyState)
          pushDataLayer('filter_apply', `${g.key}:${opt.value}`, cb.checked ? 'select' : 'deselect', 'collection_filters')
        })

        const textSpan = document.createElement('span')
        textSpan.textContent = opt.label

        textWrap.appendChild(cb)
        textWrap.appendChild(textSpan)
        optLabel.appendChild(textWrap)

        if (opt.swatch) {
          optLabel.appendChild(buildSwatch(opt.value))
        } else if (g.key === 'shape') {
          const iconWrap = document.createElement('span')
          iconWrap.className = 'crs-pill__icon'
          iconWrap.innerHTML = `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.2">${SHAPE_ICONS[opt.value] || SHAPE_ICONS.Round}</svg>`
          optLabel.appendChild(iconWrap)
        }

        li.appendChild(optLabel)
        list.appendChild(li)
      })

      panel.appendChild(list)
      pill.appendChild(btn)
      pill.appendChild(panel)
      return pill
    }
  }

  function buildSwatch(materialName) {
    const swatch = MATERIAL_SWATCH[materialName] || { css: 'linear-gradient(135deg,#ddd,#aaa)' }
    const el = document.createElement('span')
    el.className = 'crs-swatch'
    el.style.background = swatch.css
    if (swatch.badge) {
      el.classList.add('crs-swatch--badge')
      el.textContent = swatch.badge
    }
    return el
  }

  // *** Styles *** //

  function buildStyles() {
    const styles = /* css */ `
      #ProductCountDesktop {
        color: #121212;
        text-align: right;
        font-size: 14px;
        font-weight: 400;
        line-height: 21px;
        letter-spacing: 0.28px;
      }
      .facets-container {
        padding-top: 0!important;
      }
      .facets__form {
        margin-bottom: 0!important;
        grid-template-columns: 1fr!important;
      }
      .crs-hide { display: none !important; }

      /* Dawn hides the entire desktop filter form below 750px via .small-hide;
         we keep it mounted at every breakpoint since .crs-filters-row now
         provides its own responsive layout (row on desktop, stacked on mobile).
         The extra element+class specificity here reliably wins over the
         theme's bare .small-hide rule regardless of stylesheet order. */
      facet-filters-form.facets.small-hide { display: block !important; }

      .crs-filters-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 16px;
        width: 100%;
      }
      .crs-meta {
        display: flex;
        align-items: center;
        gap: 32px;
        font-size: 14px;
        flex: none;
      }
      .crs-meta .facet-filters.sorting {
        padding-left: 0!important;
      }
      .crs-meta .product-count,
      .crs-meta .facet-filters__label,
      .crs-meta .facet-filters__field { white-space: nowrap; }
      .crs-meta .facet-filters.sorting { display: flex; align-items: center; }
      .crs-meta .facet-filters__field { display: flex; align-items: center; gap: 20px; }
      .crs-meta .product-count {
        opacity: 1;
      }

      .crs-meta .facet-filters__label label {
        color: rgba(18, 18, 18, 0.85);
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 21px;
        letter-spacing: 0.28px;
      }
      .crs-meta .facet-filters__field .select .icon-caret {
        right: 0;
        color: #121212;
      }

      .facet-filters__sort {
        padding-right: 0!important;
      }

      .facet-filters__sort {
        color: #000;
        font-size: 14px;
        font-weight: 500;
        line-height: 12px;
        letter-spacing: 0.28px;
      }

      .facet-filters__label {
        margin-right: 0!important;
      }

      .crs-filters {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 12px;
        font-size: 14px;
      }
      .crs-filters__label {
        color: rgba(18, 18, 18, 0.85);
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 21px;
        letter-spacing: 0.28px;
      }
      .crs-filters__status {
        display: none;
        color: rgba(18,18,18,.6);
        font-size: 13px;
      }
      .crs-filters.is-loading .crs-filters__status { display: inline; }
      .crs-filters.is-loading .crs-pill__btn { opacity: .6; pointer-events: none; }
      .crs-filters__clear {
        background: none;
        border: 0;
        padding: 0;
        color: rgba(18,18,18,.6);
        font-size: 13px;
        text-decoration: underline;
        cursor: pointer;
      }
      .crs-filters__clear:hover { color: #121212; }

      .crs-pill { position: relative; }
      .crs-pill__btn {
        display: flex;
        align-items: center;
        gap: 12px;
        background: #fff;
        border: 1px solid #121212;
        border-radius: 999px;
        padding: 9px 16px;
        font-size: 14px;
        cursor: pointer;
        transition: border-color .15s, background-color .15s;
        color: #000;
        line-height: 12px;
        letter-spacing: 0.28px;
        min-height: 44px;
      }
      .crs-pill__btn:hover { border-color: #121212; }
      .crs-pill.is-active .crs-pill__btn {
        border-color: #121212;
        background: rgba(18,18,18,.05);
      }
      .crs-pill.is-open .crs-pill__btn { border-color: #121212; }
      .crs-pill__chevron { transition: transform .2s; flex: none; }
      .crs-pill.is-open .crs-pill__chevron { transform: rotate(180deg); }

      .crs-pill__panel {
        display: none;
        position: absolute;
        top: calc(100% + 8px);
        left: 0;
        z-index: 20;
        background: #fff;
        border: 1px solid rgba(18,18,18,.12);
        border-radius: 8px;
        box-shadow: 0 12px 28px rgba(0,0,0,.14);
        padding: 18px 20px;
        width: max-content;
        min-width: 260px;
        max-width: min(360px, calc(100vw - 32px));
        max-height: 70vh;
        overflow-y: auto;
      }
      .crs-pill.is-open .crs-pill__panel { display: block; }
      .crs-pill__panel-eyebrow {
        display: none;
        color: rgba(18,18,18,.6);
        font-size: 13px;
        margin-bottom: 4px;
      }
      .crs-pill__panel-title {
        font-weight: 600;
        font-size: 15px;
        margin-bottom: 12px;
      }
      .crs-pill__close {
        display: none;
        position: absolute;
        top: 16px;
        right: 16px;
        background: none;
        border: 0;
        padding: 8px;
        margin: -8px;
        color: #121212;
        cursor: pointer;
        line-height: 0;
      }
      .crs-pill__list {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
      }
      .crs-pill__list li label {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 9px 0;
        cursor: pointer;
      }
      .crs-pill__text {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 14px;
        color: #121212;
      }
      .crs-pill__text input[type="checkbox"] {
        width: 17px;
        height: 17px;
        accent-color: #121212;
        flex: none;
      }
      .crs-pill__icon svg { width: 20px; height: 20px; flex: none; }

      .crs-swatch {
        flex: none;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        box-shadow: inset 0 0 0 1px rgba(0,0,0,.15);
      }
      .crs-swatch--badge {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 7px;
        font-weight: 700;
        color: rgba(0,0,0,.55);
        letter-spacing: .2px;
      }

      .crs-empty-state {
        display: none;
        padding: 48px 16px;
        text-align: center;
        color: rgba(18,18,18,.7);
        font-size: 15px;
      }
      .crs-empty-state.is-visible { display: block; }
      .crs-empty-state__clear {
        background: none;
        border: 0;
        padding: 0;
        color: #121212;
        text-decoration: underline;
        cursor: pointer;
        font: inherit;
      }

      .crs-backdrop {
        display: none;
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,.4);
        z-index: 2147483000;
      }
      .card__inner.gradient {
        overflow: hidden;
        border-radius: 12px 12px 0 0 !important;
      }

      @media screen and (max-width: 749px) {
        .collection-hero__title {
          text-align: center;
        }
        .crs-filters-row { flex-direction: column; align-items: stretch; gap: 18px; }
        .crs-filters { gap: 10px; justify-content: center; }
        .crs-filters__label { display: none; }
        .crs-meta { justify-content: space-between; }
        .crs-pill__btn { padding: 8px 12px; }
        #product-grid {
          margin-top: 20px;
        }

        .crs-pill__panel {
          position: fixed;
          inset: 0;
          top: 0;
          left: 0;
          width: 100%;
          max-width: 100%;
          height: 100%;
          max-height: 100%;
          border: 0;
          border-radius: 0;
          box-shadow: none;
          padding: 24px 20px;
          z-index: 2147483001;
        }
        .crs-pill__panel-eyebrow { display: block; }
        .crs-pill__close { display: flex; align-items: center; justify-content: center; }
        .crs-backdrop.is-visible { display: block; }
        body.crs-filters-lock { overflow: hidden; }
      }
    `
    const el = document.createElement('style')
    el.classList.add('crs-filters-styles')
    el.innerHTML = styles
    return el
  }

  // *** Analytics helpers (repo convention) *** //

  function pushDataLayer(name = '', desc = '', type = '', loc = '') {
    window.dataLayer = window.dataLayer || []
    try {
      const event = { event: 'event-to-ga4', event_name: name, event_desc: desc, event_type: type, event_loc: loc }
      console.debug('** GA4 Event **', event)
      if (!config.debug) dataLayer.push(event)
    } catch (e) {
      console.log('** GA4 Error **', e)
    }
  }

  function startClarityTag() {
    if (config.debug || !Array.isArray(config.clarity) || config.clarity.length !== 3) return
    waitFor(() => typeof clarity === 'function').then(() => clarity(...config.clarity))
  }

  async function waitFor(condition, customConfig = {}) {
    const cfg = { ms: 200, limit: 10, ...customConfig }
    if (condition()) return
    return new Promise((resolve) => {
      let limit = cfg.limit * 1000
      const interval = setInterval(() => {
        if (condition() || limit <= 0) {
          clearInterval(interval)
          resolve()
        }
        limit -= cfg.ms
      }, cfg.ms)
    })
  }
})()
