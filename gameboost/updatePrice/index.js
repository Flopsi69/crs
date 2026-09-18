(function () {
  console.debug('*** Experiment started ***')

  // Config for Experiment
  const config = {
    // dir: 'http://127.0.0.1:5500/gameboost/updatePrice',
    dir: 'https://flopsi69.github.io/crs/gameboost/updatePrice',
    clarity: ['set', 'exp_update_price', 'variant_1'],
    isClarityStarted: false,
    debug: true
  }

  // const orig = console.log
  // console.log = function (...args) {
  //   orig.apply(console, ['Debug:', ...args])
  // }

  // Styles for Experiment
  const styles = /* css */ ``

  const stylesEl = document.createElement('style')
  stylesEl.classList.add('exp-update-price-v1-styles');
  stylesEl.innerHTML = styles;

  // *** Logic *** //
  // Applies to any "Accounts" product card (PLP grid, hub "Recently Viewed"/
  // "Recommended" widgets, PDP related-products widgets) and to the main PDP
  // price. Cards are identified by their link pointing to an /accounts/ PDP,
  // not by page URL, since account cards can appear on many page types
  // (eg. game hub pages like /league-of-legends).
  let observer = null

  document.addEventListener('inertia:navigate', () => {
    console.log('navigate')
    initExp()
  })

  initExp()

  async function initExp() {
    startClarity()
    await waitFor(() => document.head && document.body, false, { ms: 20 })

    if (!_$('.exp-update-price-v1-styles')) {
      document.head.appendChild(stylesEl)
    }

    console.debug('** InitExp **')

    updateAllPrices()
    startObserver()
  }

  // Watches both new cards being added (childList - eg. autoload, filters,
  // Inertia swapping in a new widget) and existing price text being patched
  // in place (characterData - eg. the framework reactively re-rendering a
  // price on a currency switch without replacing the DOM node). A plain
  // childList-only observer would miss that second case since the node
  // never gets added/removed, only its text content changes.
  function startObserver() {
    if (observer) observer.disconnect()

    observer = new MutationObserver((mutations) => {
      if (mutations.some(isRelevantMutation)) scheduleRescan()
    })
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true
    })
  }

  // The page has plenty of unrelated churn (chat widget, notifications,
  // timers, tooltips), so a rescan is only worth triggering when a mutation
  // actually touches something price-related - otherwise every unrelated
  // text change on the page schedules a full-page rescan.
  const PDP_PRICE_WRAP_SELECTOR = '.flex.flex-wrap.gap-y-1.gap-x-1\\.5.items-baseline.mt-6'
  function isRelevantMutation(mutation) {
    // mutation.target is the node whose children changed (childList) or the
    // text node itself (characterData). For a currency switch this site
    // swaps the price span's Text node wholesale (remove + add a new Text
    // node) rather than patching Text.data in place - a childList mutation
    // whose target is the price <span> itself. Checking target first covers
    // that directly, since closest() matches the element itself too.
    const targetEl = mutation.type === 'characterData' ? mutation.target.parentElement : mutation.target
    if (targetEl instanceof Element && (targetEl.closest('a[href*="/accounts/"]') || targetEl.closest(PDP_PRICE_WRAP_SELECTOR))) {
      return true
    }

    // Covers a whole new card (or PDP price block) being inserted somewhere
    // else on the page (eg. autoload, filters) where the mutation target
    // itself isn't price-related but one of the added nodes is or contains
    // one - target alone wouldn't catch that, only the added node would.
    // Also covers a Tippy.js tooltip mounting: the price also shows in a
    // tooltip on hover, and Tippy unmounts the popper on hide and mounts a
    // fresh one (as a direct child of <body>) on every show, with its
    // content already populated synchronously by the time it's inserted -
    // so this single check is enough to catch it every time it's shown,
    // with no separate hover listener needed.
    if (mutation.type === 'childList') {
      for (const node of mutation.addedNodes) {
        if (!(node instanceof HTMLElement)) continue
        if (node.matches('a[href*="/accounts/"]') || node.querySelector('a[href*="/accounts/"]')) return true
        if (node.matches(PDP_PRICE_WRAP_SELECTOR) || node.querySelector(PDP_PRICE_WRAP_SELECTOR)) return true
        if (node.matches('[data-tippy-root]') || node.querySelector('[data-tippy-root]')) return true
      }
    }
    return false
  }

  // rAF while the tab is visible (batches the DOM write right before paint,
  // same as before). But rAF can be throttled or paused entirely once the
  // tab is hidden, which would leave rescanScheduled stuck true forever and
  // silently swallow every later mutation (eg. missing a currency switch
  // while the tab is in the background) - so fall back to setTimeout there,
  // and catch up immediately if a rAF-based rescan was still pending when
  // the tab becomes visible again (rAF can be mid-flight when it's hidden).
  let rescanScheduled = false
  function scheduleRescan() {
    if (rescanScheduled) return
    rescanScheduled = true

    if (document.hidden) {
      setTimeout(runRescan, 150)
    } else {
      requestAnimationFrame(runRescan)
    }
  }

  function runRescan() {
    rescanScheduled = false
    updateAllPrices()
  }

  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && rescanScheduled) runRescan()
  })

  function updateAllPrices() {
    _$$('a[href*="/accounts/"]', document, true).forEach(updateCardPrice)
    updatePdpPrice()
  }

  // Some products show a struck-through "was" price alongside the current
  // one (the seller's own discount). Both need the formula applied, not
  // just the current price, so the markup and the checkout total agree.
  function updateCardPrice(cardEl) {
    const wrap = _$('.flex.gap-x-1.items-baseline.truncate', cardEl)
    const priceEl = wrap?.firstElementChild
    if (priceEl) applyPriceFormula(priceEl)

    const oldPriceEl = _$('.absolute.left-1.-top-4', cardEl)?.firstElementChild
    if (oldPriceEl) applyPriceFormula(oldPriceEl)

    updateTooltipPrice(wrap)
  }

  function updatePdpPrice() {
    if (!/\/accounts\//.test(location.pathname)) return

    const priceWrap = _$('.flex.flex-wrap.gap-y-1.gap-x-1\\.5.items-baseline.mt-6')
    if (!priceWrap) return

    const priceEl = priceWrap.firstElementChild
    if (priceEl) applyPriceFormula(priceEl)

    const oldPriceEl = _$('.flex.gap-x-2.items-center', priceWrap)?.firstElementChild
    if (oldPriceEl) applyPriceFormula(oldPriceEl)

    updateTooltipPrice(priceWrap)
  }

  // The price also shows in a Tippy.js tooltip on hover - a separate popup
  // with its own content node, unrelated to the visible price markup. Scoped
  // to this exact wrapper's own tippy instance (never a page-wide tooltip
  // selector), so it can never touch an unrelated tooltip (eg. a seller
  // rating or cashback one) even if its content also starts with a currency
  // symbol. No-ops harmlessly if the tooltip has never been shown yet
  // (nothing to fix) - it'll get caught by the observer once it is.
  function updateTooltipPrice(wrapEl) {
    const tooltipPriceEl = wrapEl?._tippy?.popper?.querySelector('.tippy-content > span')
    if (tooltipPriceEl) applyPriceFormula(tooltipPriceEl)
  }

  // Re-derives the price from whatever is currently rendered, so it reacts
  // correctly to currency switches or live price updates instead of just
  // running once. Skips when the text already matches our own last output.
  // The original price is kept on the element (data-lav-original) for QA -
  // it lets you inspect any card/PDP price and see exactly what X was.
  function applyPriceFormula(el) {
    const current = el.textContent.trim()
    if (el.dataset.lavComputed === current) return

    const updated = getUpdatedPriceText(current)
    if (updated === null) return

    el.dataset.lavOriginal = current
    el.textContent = updated
    el.dataset.lavComputed = updated
  }

  function getUpdatedPriceText(text) {
    const isEuro = text.startsWith('€')
    const isUsd = text.startsWith('$')
    if (!isEuro && !isUsd) return null

    const value = parsePrice(text, isEuro)
    if (isNaN(value)) return null

    const updatedValue = isEuro
      ? (value * 1.07) + 0.20
      : (value * 1.07) + 0.23

    return formatPrice(updatedValue, isEuro)
  }

  // EUR on this site: "€3.951,78" ("." thousands, "," decimal)
  // USD on this site: "$4,560.19" ("," thousands, "." decimal)
  function parsePrice(text, isEuro) {
    const numStr = text.replace(/[€$]/g, '').trim()
    return isEuro
      ? parseFloat(numStr.replace(/\./g, '').replace(',', '.'))
      : parseFloat(numStr.replace(/,/g, ''))
  }

  function formatPrice(value, isEuro) {
    const rounded = Math.round(value * 100) / 100
    const formatted = rounded.toLocaleString(isEuro ? 'de-DE' : 'en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
    return (isEuro ? '€' : '$') + formatted
  }

  // *** HELPERS *** //
  function formatNumber(num) {
    return num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') || '0'
  }

  function getCookie(name) {
    const match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'))
    return match ? decodeURIComponent(match[1]) : ''
  }

  // Waiting for loading by condition
  async function waitFor(condition, cb = false, customConfig = {}) {
    const config = {
      ms: 500, // repeat each 0.5 second if condition is false
      limit: 10, // limit in second seconds

      ...customConfig
    }

    if (typeof condition === 'function') {
      if (condition()) {
        if (typeof cb === 'function') cb()
        return
      }

      return new Promise((resolve) => {
        let limit = config.limit * 1000
        const interval = setInterval(function () {
          if (condition() || limit <= 0) {
            clearInterval(interval)
            if (limit > 0 && typeof cb === 'function') cb()
            resolve()
          }
          limit -= config.ms
        }, config.ms)
      })
    }

    if (condition.startsWith('.') || condition.startsWith('#')) {
      if (_$(condition)) {
        if (typeof cb === 'function') cb(_$(condition))
        return
      }

      return new Promise((resolve) => {
        const observer = new MutationObserver((mutations, observer) => {
          if (_$(condition)) {
            if (typeof cb === 'function') cb(_$(condition))
            observer.disconnect()
            resolve()
          }
        })

        observer.observe(document, { childList: true, subtree: true })
      })
    }
  }

  // Mutation Observer
  function initMutation(observeEl = document.body, cbAdded, cbRemoved) {
    const el = typeof observeEl === 'string' ? _$(observeEl) : observeEl

    if (!el) return

    let observer = new MutationObserver((mutations, observer) => {
      for (let mutation of mutations) {
        if (typeof cbAdded === 'function') {
          for (let node of mutation.addedNodes) {
            if (!(node instanceof HTMLElement)) continue
            cbAdded(node, observer)
          }
        }

        if (typeof cbRemoved === 'function') {
          for (let node of mutation.removedNodes) {
            if (!(node instanceof HTMLElement)) continue
            cbRemoved(node, observer)
          }
        }
      }
    })

    observer.observe(el, { childList: true, subtree: true })

    return observer
  }

  // Intersection Observer
  function initIntersection(observeEl, cb, customConfig) {
    const el = typeof observeEl === 'string' ? _$(observeEl) : observeEl

    if (!el || typeof cb !== 'function') return

    const config = {
      root: null,
      threshold: 0.3, // 0 - 1 | A threshold of 1.0 means that when 100% of the target is visible within the element specified by the root option, the callback is invoked.
      ...customConfig
    }

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        cb(entry, observer)
      })
    }, config)

    observer.observe(el)

    return observer
  }

  function focusTimeEvent(el, cb, viewElementProcent = 0.1) {
    let entryTime = 0
    initIntersection(
      el,
      ({ isIntersecting, time }) => {
        if (isIntersecting) {
          entryTime = time
        } else if (entryTime) {
          const diffTime = +((time - entryTime) / 1000).toFixed(1)
          cb(diffTime + 's')
          entryTime = 0
        }
      },
      { threshold: viewElementProcent }
    )
  }

  function visibilityEvent(el, cb, customConfig = {}) {
    const config = {
      threshold: 0.3,
      ...customConfig,
      timer: null
    }
    initIntersection(
      el,
      ({ isIntersecting, target }, observer) => {
        // console.log(target, isIntersecting);
        if (isIntersecting) {
          config.timer = setTimeout(() => {
            if (isElementInViewport(target)) {
              cb()
              observer.disconnect()
            }
          }, 1500)
        } else {
          clearTimeout(config.timer)
        }
      },
      config
    )
  }

  // Artificial delay
  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  // Check if element in viewport
  function isElementInViewport(selector) {
    const el = typeof selector === 'string' ? _$(selector) : selector

    if (!el) return false

    const rect = el.getBoundingClientRect()
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight

    return (
      rect.top + rect.height * 0.3 < windowHeight &&
      rect.bottom > rect.height * 0.3
    )
    // return (
    //   rect.top >= 0 &&
    //   rect.left >= 0 &&
    //   rect.bottom <=
    //     (window.innerHeight || document.documentElement.clientHeight) &&
    //   rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    // );
  }

  // Shordcode for selectors
  function _$(selector, context = document) {
    return context.querySelector(selector)
  }
  function _$$(selector, context = document, toSimpleArray = false) {
    const arr = context.querySelectorAll(selector)

    return toSimpleArray ? Array.from(arr) : arr
  }

  // GA 4 events
  function pushDataLayer(name = '', desc = '', type = '', loc = '') {
    window.dataLayer = window.dataLayer || []

    try {
      const event = {
        event: 'event-to-ga4',
        event_name: name,
        event_desc: desc,
        event_type: type,
        event_loc: loc
      }

      console.debug('** GA4 Event **', event)

      if (!config.debug) {
        dataLayer.push(event)
      }
    } catch (e) {
      console.log('** GA4 Error **', e)
    }
  }

  // Slider
  function connectSplide() {
    if (typeof Splide === 'function') return
    const sliderStyles = document.createElement('link')
    sliderStyles.rel = 'stylesheet'
    sliderStyles.href =
      'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide-core.min.css'
    document.head.appendChild(sliderStyles)

    let sliderScript = document.createElement('script')
    sliderScript.src =
      'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js'
    document.head.appendChild(sliderScript)
  }
  // *** Exp BG process *** //

  //Clarity
  function startClarity() {
    if (config.isClarityStarted) return
    config.isClarityStarted = true

    if (
      !config.debug &&
      Array.isArray(config.clarity) &&
      config.clarity.length === 3
    ) {
      waitFor(
        () => typeof clarity == 'function',
        () => {
          clarity(...config.clarity)
        }
      )
    }
  }

  // Svg objects
  function getSvg(name) {
    const svgObj = {}

    return svgObj[name]
  }
})()
