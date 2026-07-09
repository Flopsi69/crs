(function () {
  console.debug('*** Experiment started ***')

  // Config for Experiment
  const config = {
    // dir: 'http://127.0.0.1:5500/gameboost/plp-row',
    dir: 'https://flopsi69.github.io/crs/gameboost/plp-row',
    clarity: ['set', 'exp_5_cards_autoloader', 'variant_1'],
    observerEl: null,
    isClarityStarted: false,
    debug: false
  }

  // const orig = console.log
  // console.log = function (...args) {
  //   orig.apply(console, ['Debug:', ...args])
  // }

  // Styles for Experiment
  const styles = /* css */ `
    @media(min-width: 768px) {
      .relative .pt-36 .col-span-1 .min-w-0 .grid.gap-4.mt-4.xl\\:grid-cols-4 > .flex.min-w-0 .truncate .text-3xl.font-bold {
        font-size: 24px;
        line-height: 32px;
        letter-spacing: -0.75px;
      }
      .relative .pt-36 .col-span-1 .min-w-0 .grid.gap-4.mt-4.xl\\:grid-cols-4 > .flex.min-w-0 .truncate .text-3xl.font-bold  + .text-sm {
        font-size: 13px;
      }
      .relative .pt-36 .col-span-1 .min-w-0 .grid.gap-4.mt-4.xl\\:grid-cols-4 > .flex.min-w-0 .sm\\:px-5 {
        padding-left: 16px;
        padding-right: 16px;
      }
      .relative .pt-36 .col-span-1 .min-w-0 .grid.gap-4.mt-4.xl\\:grid-cols-4 > .flex.min-w-0 .sm\\:px-5 .gap-1 button.px-4 {
        padding-left: 10px;
        padding-right: 10px;
      }
      .relative .pt-36 .col-span-1 .min-w-0 .grid.gap-4.mt-4.xl\\:grid-cols-4 > .flex.min-w-0 .sm\\:px-5 .gap-1.pt-1 {
        gap: 0;
      }
      .lav-sold {
        font-size: 12px;
        line-height: 16px;
      }
      .lav-avatar__info {
        text-align: left;
        min-width: 0;
      }
    }
    @media (width >= 80rem) {
      .relative .pt-36 .col-span-1 .min-w-0 .grid.gap-4.mt-4.xl\\:grid-cols-4 {
        grid-template-columns: repeat(5, minmax(0, 1fr));
        gap: 16px;
      }
    }
  `

  const stylesEl = document.createElement('style')
  stylesEl.classList.add('exp-plp-row-v1-styles');
  stylesEl.innerHTML = styles;

  // *** Logic *** //
  (function () {
    const urlsTarget = [
      '/fortnite/accounts',
      '/steal-a-brainrot/accounts',
      '/valorant/accounts',
      '/grand-theft-auto-v/accounts',
      '/call-of-duty/accounts',
      '/league-of-legends/accounts',
      '/clash-of-clans/accounts',
      '/brawl-stars/accounts',
      '/pubg-mobile/accounts',
      // '/raid-shadow-legends/accounts',
      '/roblox/accounts',
    ]

    function urlChangeHandler() {
      if (!urlsTarget.some(url => location.href.includes(url))) {
        _$('.exp-plp-row-v1-styles')?.remove()
        return;
      }

      initExp();
    }

    document.addEventListener('inertia:navigate', () => {
      console.log('navigate')
      urlChangeHandler();
    })

    urlChangeHandler()
  })()

  async function initExp() {
    startClarity()
    await waitFor(() => document.head && document.body, false, { ms: 20 })

    if (!_$('.exp-plp-row-v1-styles')) {
      document.head.appendChild(stylesEl)
    }

    console.debug('** InitExp **')

    changeListing();

    await waitFor('.relative .pt-36 .col-span-1 .min-w-0 .grid.gap-4.mt-4', {ms: 25})

    const observerEl = _$('.relative .pt-36 .col-span-1 .min-w-0 .grid.gap-4.mt-4').closest('.min-w-0')

    observerEl.classList.add('lav-observer-el');

    if (config.observerEl) {
      config.observerEl.disconnect()
    }

    config.observerEl = initMutation(
      observerEl,
      (node, observer) => {
        if (node.tagName === 'A' && node.classList.contains('overflow-clip') && node.closest('.xl\\:grid-cols-4')) {
          console.log('** Product Changed **', node)
          handleProduct(node);
        }
        // if (_$('.relative .pt-36 .col-span-1 .min-w-0 .grid.gap-4.mt-4.xl\\:grid-cols-4')) {
        //   console.log('** PLP Row Changed **', node)
        //   changeListing();
        // }
        // handleProduct(node);
      }
    )

    addAutoloadLogic();
  }

  function changeListing() {
    const products = _$$('.relative .pt-36 .col-span-1 .min-w-0 .grid.gap-4.mt-4.xl\\:grid-cols-4 > .flex.min-w-0');

    products.forEach(product => {
      handleProduct(product);
    });
  }

  function addAutoloadLogic() {
    let intersectionObserver = null;
    let btnObserver = null;
    let autoloadCount = 0;

    function attachToLastProduct() {
      if (intersectionObserver) {
        intersectionObserver.disconnect();
        intersectionObserver = null;
      }
      if (btnObserver) {
        btnObserver.disconnect();
        btnObserver = null;
      }

      const products = _$$('.relative .pt-36 .col-span-1 .min-w-0 .grid.gap-4.mt-4.xl\\:grid-cols-4 > .flex.min-w-0');
      const lastProduct = products[products.length - 2] || products[products.length - 1];
      const showMoreBtn = _$('.lav-observer-el .mt-2.mb-6 [type="button"]');

      if (!showMoreBtn) {
        if (getCookie('crsoptimize').includes('bXzhQmj14y_1')) {
          // Guard against a reload loop in case the button is genuinely gone for good (e.g. end of catalog).
          const reloadKey = 'lav_plp_row_reload_count';
          const reloadCount = Number(sessionStorage.getItem(reloadKey) || 0);

          if (reloadCount < 1) {
            sessionStorage.setItem(reloadKey, reloadCount + 1);
            location.reload();
          }
        }

        return;
      }

      sessionStorage.removeItem('lav_plp_row_reload_count');

      if (!lastProduct) return;

      const prevCount = products.length;

      const triggerLoad = () => {
        if (intersectionObserver) {
          intersectionObserver.disconnect();
          intersectionObserver = null;
        }
        if (btnObserver) {
          btnObserver.disconnect();
          btnObserver = null;
        }

        const btn = _$('.lav-observer-el .mt-2.mb-6 [type="button"]');
        if (!btn || btn.disabled) return;

        btn.click();

        autoloadCount += 1;
        pushDataLayer('exp_plp_autoload', `${autoloadCount}`, 'other', 'Autoload');

        waitFor(
          () => _$$('.relative .pt-36 .col-span-1 .min-w-0 .grid.gap-4.mt-4.xl\\:grid-cols-4 > .flex.min-w-0').length > prevCount,
          () => attachToLastProduct()
        );
      };

      intersectionObserver = initIntersection(lastProduct, ({ isIntersecting }) => {
        if (!isIntersecting) return;
        triggerLoad();
      }, { threshold: 0.5 });

      // On mobile the grid has fewer columns per row, so the button can enter
      // the viewport before the pre-last product does — watch it too.
      if (window.innerWidth < 768) {
        btnObserver = initIntersection(showMoreBtn, ({ isIntersecting }) => {
          if (!isIntersecting) return;
          triggerLoad();
        }, { threshold: 0.5 });
      }
    }

    attachToLastProduct();
  }

  function handleProduct(product) {
    if (_$('.lav-sold', product)) return;

    const soldEl = _$('.gap-x-2 .gap-x-2.text-xs .text-muted-foreground', product);
    const avatarEl = _$('.gap-x-2 .truncate.cursor-pointer', product);
    const nameEl = _$('.cursor-default.truncate', avatarEl);

    if (!soldEl) return;

    soldEl.classList.add('lav-sold', 'ml-1\.5');

    if (avatarEl) {
      avatarEl.classList.add('lav-avatar');
      avatarEl.insertAdjacentHTML('beforeend', /* html */ `
        <span class="lav-avatar__info"></span>
      `);
      _$('.lav-avatar__info', avatarEl).insertAdjacentElement('afterbegin', soldEl);
      if (nameEl) {
        _$('.lav-avatar__info', avatarEl).insertAdjacentElement('afterbegin', nameEl);
      }
    }
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