;(function () {
  console.debug('*** Experiment started ***')

  // Config for Experiment
  const config = {
    // dir: 'http://127.0.0.1:5500/dsbp/cta',
    dir: 'https://flopsi69.github.io/crs/dsbp/cta',
    clarity: ['set', '', 'variant_1'],
    debug: true
  }

  // Styles for Experiment
  const styles = /* css */ ``

  const stylesEl = document.createElement('style')
  stylesEl.classList.add('exp-styles')
  stylesEl.innerHTML = styles

  const expConfig = {
    com: {
      desk: {
        old: 'vynwmaq7',
        new: '0vg6ni09'
      },
      mob: {
        old: 'n7l3oh11',
        new: '9vg94i2v'
      }
    },
    net: {
      desk: {
        old: '4v824i7x',
        new: '8vg34ipk'
      },
      mob: {
        old: '7vm64ik2',
        new: 'oyz98a94'
      }
    }
  }

  // *** Logic *** //
  initExp()

  async function initExp() {
    await waitFor(() => document.head && document.body, false, { ms: 20 })

    document.head.appendChild(stylesEl)

    console.debug('** InitExp **')

    const isValidUrl = checkUrl()

    if (!isValidUrl) {
      console.warn('Invalid URL. Exp not running')
      return
    }

    const expHash = expConfig[isValidUrl]
    console.log(expHash)

    changeButtons(expHash)

    loadScript(expHash.desk.new, () => {
      console.log('Desktop Script loaded successfully')
    })

    loadScript(expHash.mob.new, () => {
      console.log('Mobile Script loaded successfully')
    })

    // // Example usage:
    // loadScript('https://example.com/your-script.js', () => {
    //   console.log('Script loaded successfully')
    // })
  }

  function checkUrl() {
    const url = location.href
    let urlArray = []
    let type = 'com'

    if (location.host.includes('dropservicingblueprint.com')) {
      urlArray = [
        'https://www.dropservicingblueprint.com/training',
        'https://www.dropservicingblueprint.com/training-1',
        'https://www.dropservicingblueprint.com/training-3',
        'https://www.dropservicingblueprint.com/training-5'
      ]
    }

    if (location.host.includes('dropservicing.net')) {
      urlArray = ['https://www.dropservicing.net/training-1']
      type = 'net'
    }

    if (!urlArray.length) return false

    // Normalize a URL by removing the trailing slash, query parameters, and hash
    const normalizeUrl = (url) => {
      try {
        const { origin, pathname } = new URL(url)
        return `${origin}${pathname.replace(/\/$/, '')}`
      } catch (error) {
        return null // Handle invalid URLs gracefully
      }
    }

    // Normalize the input URL and compare it to normalized array URLs
    const normalizedUrl = normalizeUrl(url)

    const isInArray = urlArray.some(
      (arrayUrl) => normalizeUrl(arrayUrl) === normalizedUrl
    )

    if (!isInArray) return false

    return type
  }

  function loadScript(hash, callback) {
    const script = document.createElement('script')
    script.src = `https://event.webinarjam.com/register/${hash}/embed-button`
    // script.async = true;
    script.onload = callback
    script.onerror = () => console.error(`Failed to load script: ${url}`)

    document.head.appendChild(script) // Add to <head> or document.body
  }

  function changeButtons(hashes) {
    $$(
      `[data-webinarhash="${hashes.desk.old}"], [data-webinarhash="${hashes.mob.old}"]`
    ).forEach((el) => {
      const cloneEl = el.cloneNode(true)

      cloneEl.setAttribute(
        'data-webinarhash',
        el.dataset.webinarhash === hashes.desk.old
          ? hashes.desk.new
          : hashes.mob.new
      )

      el.insertAdjacentElement('afterend', cloneEl)

      el.style.display = 'none'
    })
  }

  // *** HELPERS *** //

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
      if ($(condition)) {
        if (typeof cb === 'function') cb($(condition))
        return
      }

      return new Promise((resolve) => {
        const observer = new MutationObserver((mutations, observer) => {
          if ($(condition)) {
            if (typeof cb === 'function') cb($(condition))
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
    const el = typeof observeEl === 'string' ? $(observeEl) : observeEl

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
    const el = typeof observeEl === 'string' ? $(observeEl) : observeEl

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
          }, 3000)
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
    const el = typeof selector === 'string' ? $(selector) : selector

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
  function $(selector, context = document) {
    return context.querySelector(selector)
  }
  function $$(selector, context = document, toSimpleArray = false) {
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
  // if (
  //   !config.debug &&
  //   Array.isArray(config.clarity) &&
  //   config.clarity.length === 3
  // ) {
  //   waitFor(
  //     () => typeof clarity == 'function',
  //     () => {
  //       clarity(...config.clarity)
  //     }
  //   )
  // }

  // Svg objects
  function getSvg(name) {
    const svgObj = {}

    return svgObj[name]
  }
})()
