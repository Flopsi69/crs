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

    observer = new MutationObserver(() => scheduleRescan())
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true
    })
  }

  let rescanScheduled = false
  function scheduleRescan() {
    if (rescanScheduled) return
    rescanScheduled = true
    requestAnimationFrame(() => {
      rescanScheduled = false
      updateAllPrices()
    })
  }

  function updateAllPrices() {
    _$$('a[href*="/accounts/"]', document, true).forEach(updateCardPrice)
    updatePdpPrice()
  }

  // Some products show a struck-through "was" price alongside the current
  // one (the seller's own discount). Both need the formula applied, not
  // just the current price, so the markup and the checkout total agree.
  function updateCardPrice(cardEl) {
    const priceEl = _$('.flex.gap-x-1.items-baseline.truncate', cardEl)?.firstElementChild
    if (priceEl) applyPriceFormula(priceEl)

    const oldPriceEl = _$('.absolute.left-1.-top-4', cardEl)?.firstElementChild
    if (oldPriceEl) applyPriceFormula(oldPriceEl)
  }

  function updatePdpPrice() {
    if (!/\/accounts\//.test(location.pathname)) return

    const priceWrap = _$('.flex.flex-wrap.gap-y-1.gap-x-1\\.5.items-baseline.mt-6')
    if (!priceWrap) return

    const priceEl = priceWrap.firstElementChild
    if (priceEl) applyPriceFormula(priceEl)

    const oldPriceEl = _$('.flex.gap-x-2.items-center', priceWrap)?.firstElementChild
    if (oldPriceEl) applyPriceFormula(oldPriceEl)
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
