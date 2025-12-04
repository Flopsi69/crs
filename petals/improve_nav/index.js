(function(){
  console.debug('*** Experiment started ***')

  // Config for Experiment
  const config = {
    // dir: 'http://127.0.0.1:5500/petals/improve_nav',
    dir: 'https://flopsi69.github.io/crs/petals/improve_nav',
    clarity: ['set', 'exp_nav', 'variant_1'],
    debug: false
  }

  // Styles for Experiment
  const styles = /* css */ `
    .lav-nav-select {
      position: relative;
    }
    .lav-nav-select span {
      color: #A72561!important;
      text-decoration: none!important;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .header__inline-menu li span {
      font-size: 16px;
    }
    @media(max-width: 1050px) {
      .header__inline-menu li span {
        font-size: 14px;
      }
    }
    .lav-dropdown__wrap {
      width: 335px;
      position: absolute;
      top: 100%;
      left: -35px;
      padding-top: 21px;
    }
    .lav-nav-select>a svg {
      transition: .3s;
    }
    @media(min-width: 990px) {
      .lav-dropdown__wrap {
        opacity: 0;
        visibility: hidden;
        transition: .3s;
        z-index: -1;
        pointer-events: none;
      }
      .lav-nav-select:hover .lav-dropdown__wrap {
        opacity: 1;
        visibility: visible;
        z-index: 10;
        pointer-events: auto;
      }
      .lav-nav-select:hover>a svg {
        transform: rotate(180deg);
      }
    }
    .lav-dropdown {
      display: grid;
      background: #fff;
      border-right: 1px solid rgba(18, 18, 18, 0.08);
      border-bottom: 1px solid rgba(18, 18, 18, 0.08);
      border-left: 1px solid rgba(18, 18, 18, 0.08);
    }
    .lav-dropdown__link {
      padding: 10px 48px;
      color: #121212;
      font-family: Assistant;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 23.4px;
      letter-spacing: 0.6px;
      text-decoration: none;
    }
    @media (hover:hover) {
      .lav-dropdown__link:hover {
        background: #F9F9F9;
      }
    }
    @media(max-width: 989px) {
      .lav-nav-select>a {
        gap: 10px;
        color: #A72561!important;
        justify-content: space-between;
        background: none!important;
        outline: none!important;
      }
      .lav-nav-select>a svg {
        transition: .3s;
      }
      .lav-nav-select.active>a svg {
        transform: rotate(180deg);
      }
      .lav-dropdown__wrap {
        display: none;
        width: auto;
        position: static;
        padding-top: 0;
      }
      .lav-dropdown {
        gap: 2px;
      }
      .menu-drawer__navigation {
        padding-top: 32px!important;
        padding-bottom: 32px!important;
      }
    }
  `

  const stylesEl = document.createElement('style')
  stylesEl.classList.add('exp-styles')
  stylesEl.innerHTML = styles

  // *** Logic *** //
  initExp()

  async function initExp() {
    await waitFor(() => document.head && document.body, false, { ms: 20 })

    document.head.appendChild(stylesEl)

    console.debug('** InitExp **')

    handleDesktopNav()
    handleMobileNav()
  }

  async function handleDesktopNav() {
    await waitFor('.header__inline-menu', null, { ms: 25 })
    _$$('.header__inline-menu li>a').forEach((linkEl) => {
      linkEl.addEventListener('click', () => {
        pushDataLayer('exp_nav_lvl1', linkEl.textContent.trim(), 'click', 'Navigation');
      });
    })
    
    const navEl = _$('.header__inline-menu')
    const firstItemEl = _$('li', navEl)
    firstItemEl.classList.add('lav-nav-select')


    _$('span', firstItemEl).innerHTML = `Shop ${getSvg('chevronDown')}`

    firstItemEl.addEventListener('mouseenter', () => {
      pushDataLayer('exp_nav_shop_dd_view', 'Shop Drop-down', 'view', 'Navigation - Shop');
    })

    const dropdownHtml = getDropdownHtml()
    firstItemEl.insertAdjacentHTML('beforeend', dropdownHtml)

    firstItemEl.addEventListener('click', (e) => {
      if (e.target.closest('#HeaderMenu-home')) {
        e.preventDefault();
      }
      if (e.target.closest('.lav-dropdown__link')) {
        const subCategory = e.target.textContent.trim();
        pushDataLayer('exp_nav_lvl2', subCategory, 'click', 'Navigation - Shop');
      }
    })
  }

  async function handleMobileNav() {
    await waitFor('.menu-drawer__menu', null, { ms: 25 })
    _$$('.menu-drawer__menu li>a').forEach((linkEl) => {
      linkEl.addEventListener('click', () => {
        pushDataLayer('exp_nav_lvl1', linkEl.textContent.trim(), 'click', 'Navigation');
      });
    })

    const navEl = _$('.menu-drawer__menu')
    const firstItemEl = _$('li', navEl)
    firstItemEl.classList.add('lav-nav-select')


    _$('a', firstItemEl).innerHTML = `Shop ${getSvg('chevronDown')}`

    const dropdownHtml = getDropdownHtml()
    firstItemEl.insertAdjacentHTML('beforeend', dropdownHtml)

    firstItemEl.addEventListener('click', (e) => {
      if (e.target.closest('#HeaderDrawer-home')) {
        e.preventDefault();
        firstItemEl.classList.toggle('active')
        const dropdown = _$('.lav-dropdown__wrap', firstItemEl)
        $(dropdown).slideToggle()

        if (firstItemEl.classList.contains('active')) {
          pushDataLayer('exp_nav_shop_dd_view', 'Shop Drop-down', 'view', 'Navigation - Shop');
        }
      }
      if (e.target.closest('.lav-dropdown__link')) {
        const subCategory = e.target.textContent.trim();
        pushDataLayer('exp_nav_lvl2', subCategory, 'click', 'Navigation - Shop');
      }
    })
  }

  function getDropdownHtml() {
    const navConfig = [
      {
        name: 'Bestsellers',
        url: '/collections/all-memorial-jewelry'
      },
      {
        name: 'Necklaces',
        url: '/collections/cremation-necklaces'
      },
      {
        name: 'Rings',
        url: '/collections/cremation-rings'
      },
      {
        name: 'Bracelets',
        url: '/collections/cremation-bracelets'
      },
      {
        name: 'Mens',
        url: '/collections/mens'
      },
      {
        name: 'Earrings',
        url: '/collections/earring-collection'
      },
      {
        name: 'Misc Items',
        url: '/collections/cremation-extras'
      },
      {
        name: 'DIY Kits',
        url: '/collections/diy-kits'
      }
    ]
    
    let html = '<div class="lav-dropdown__wrap"><div class="lav-dropdown">'

    navConfig.forEach((item) => {
      html += `
        <a class="lav-dropdown__link" href="${item.url}">${item.name}</a>
      `
    })

    html += '</div></div>'
    return html
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

  // Svg objects
  function getSvg(name) {
    const svgObj = {
      chevronDown: `
        <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0.775199 0.753408C0.830934 0.699084 0.897144 0.655984 0.970039 0.626577C1.04293 0.597169 1.12108 0.582032 1.2 0.582032C1.27892 0.582032 1.35706 0.597169 1.42996 0.626577C1.50285 0.655984 1.56906 0.699084 1.6248 0.753408L6 5.00824L10.3752 0.753407C10.4879 0.643873 10.6407 0.582337 10.8 0.582337C10.9593 0.582337 11.1121 0.643873 11.2248 0.753407C11.3375 0.862942 11.4008 1.0115 11.4008 1.16641C11.4008 1.32131 11.3375 1.46987 11.2248 1.57941L6.4248 6.24607C6.36906 6.3004 6.30285 6.3435 6.22996 6.37291C6.15707 6.40231 6.07892 6.41745 6 6.41745C5.92108 6.41745 5.84293 6.40231 5.77004 6.37291C5.69714 6.3435 5.63093 6.3004 5.5752 6.24607L0.775199 1.57941C0.719323 1.52522 0.674992 1.46085 0.644744 1.38998C0.614496 1.31911 0.598927 1.24314 0.598927 1.16641C0.598927 1.08968 0.614496 1.01371 0.644744 0.942836C0.674992 0.871966 0.719323 0.807595 0.775199 0.753408Z" fill="#A72561"/>
        </svg>
      `,
    }

    return svgObj[name]
  }
})()