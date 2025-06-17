;(function () {
  console.debug('*** Experiment started ***')

  // Config for Experiment
  const config = {
    // dir: 'http://127.0.0.1:5500/ashlen/triggerPopup',
    dir: 'https://flopsi69.github.io/crs/ashlen/triggerPopup',
    clarity: ['set', 'exp_exit_intent_popup', 'variant_1'],
    debug: false
  }

  // const orig = console.log
  // console.log = function (...args) {
  //   orig.apply(console, ['Debug:', ...args])
  // }

  // Styles for Experiment
  const styles = /* css */ ``

  const stylesEl = document.createElement('style')
  stylesEl.classList.add('exp-styles')
  stylesEl.innerHTML = styles

  // *** Logic *** //
  initExp()

  async function initExp() {
    await waitFor(() => document.head && document.body, false, { ms: 20 })

    document.head.appendChild(stylesEl)

    console.debug('** InitExp **')

    if (location.href.includes('/cart') || location.href.includes('/checkout'))
      return

    addModal()
    addTriggers()
  }

  function addTriggers() {
    // Close cart
    document.addEventListener('click', (e) => {
      if (
        e.target.closest('#rebuy-cart-close') ||
        e.target.classList.contains('rebuy-cart__background')
      ) {
        setTimeout(() => {
          openModal()
        }, 30 * 1000)
      }
    })

    // 40 seconds inactivity
    function initDelayTrigger(delay) {
      let timer
      let isTriggered = false

      function initTimer() {
        if (isTriggered) return

        clearTimeout(timer)
        timer = setTimeout(() => {
          if (
            localStorage.getItem('lav_almost_showed') ||
            !_$$('#rebuy-cart [data-smartcart-items] li').length
          )
            return

          isTriggered = true
          _$('.site-header__cart.head_cart').click()
          setTimeout(() => {
            openModal()
          }, 200)
        }, delay * 1000)
      }

      ;['scroll', 'click', 'touchstart'].forEach(
        (event) => {
          window.addEventListener(event, () => {
            if (!isTriggered) {
              initTimer()
            }
          })
        },
        { passive: true }
      )

      initTimer()
    }

    initDelayTrigger(40)

    // Toggle tab
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        openModal()
      }
    })

    // Revisit

    // Revisit trigger: show modal if user has visited before
    const revisitKey = 'lav_almost_revisit'
    const time = localStorage.getItem(revisitKey)
    if (time && new Date().getTime() > +time) {
      if (
        !localStorage.getItem('lav_almost_showed') &&
        _$$('#rebuy-cart [data-smartcart-items] li').length
      ) {
        openModal()
      }
    }

    if (!time) {
      const date = new Date().getTime() + 3600000
      localStorage.setItem(revisitKey, String(date))
    }
  }

  function openModal() {
    if (
      localStorage.getItem('lav_almost_showed') ||
      !_$$('#rebuy-cart [data-smartcart-items] li').length
    )
      return

    pushDataLayer(
      'exp_exit_intent_view_01',
      'Visibility',
      'view',
      'Almost pop up'
    )
    localStorage.setItem('lav_almost_showed', '1')
    fillCards()
    Modal.open('.lav-almost')
  }

  function addModal() {
    initModal()

    const markup = /* html */ `
      <div class='lav-almost__title'>It’s almost yours!</div>
      <div class='lav-almost__caption'>Finish your order before it’s too late:</div>
      <div class='lav-almost__popular'>Popular choice, <br/>we may run out of stock soon</div>
      <div class='lav-almost__list lav-products'></div>
      <div class='lav-almost__looking'>
        <div class='lav-almost__looking-icon'>
          ${getSvg('humans')}
        </div>
        <div class='lav-almost__looking-info'>
          <span>15 people</span> are currently looking at this product — complete your purchase now to secure it!
        </div>
      </div>
      <div class='lav-almost__btn'>Complete my order now</div>
      <div class='lav-almost__skip'>
        Skip for now
      </div>
    `

    new Modal('lav-almost', markup)

    _$('.lav-almost__btn').addEventListener('click', () => {
      Modal.close()
      pushDataLayer(
        'exp_exit_intent_click_01',
        'Complete my order now',
        'click',
        'Almost pop up'
      )
      if (!_$('#rebuy-cart').classList.contains('is-visible')) {
        _$('.site-header__cart.head_cart').click()
      }
    })

    _$('.lav-almost__skip').addEventListener('click', () => {
      Modal.close()
      pushDataLayer(
        'exp_exit_intent_click_04',
        'Skip for now',
        'click',
        'Almost pop up'
      )
    })
  }

  function fillCards() {
    _$('.lav-products').innerHTML = ''

    const items = _$$('#rebuy-cart [data-smartcart-items] li')

    console.log('items', items)
    if (!items || items.length === 0) return

    items.forEach((item) => {
      const el = document.createElement('div')
      el.classList.add('lav-product')
      el.innerHTML = item.innerHTML

      el.querySelector('.rebuy-cart__flyout-item-remove').remove()
      el.querySelector('.rebuy-cart__flyout-item-quantity').remove()

      _$('.lav-products').insertAdjacentElement('beforeend', el)
    })
  }

  // *** Utils *** //
  function initModal() {
    class Modal {
      static list = []
      constructor(name, html) {
        if (!_$('.lav-modal')) {
          this.constructor.init()
        }

        if (this.constructor.list.find((item) => item.name === name)) {
          console.warn('Modal with this name already exists')
          return
        }

        this.el = document.createElement('div')
        this.el.classList.add('lav-modal__inner', name)
        this.name = name
        this.el.innerHTML = html

        _$('.lav-modal').insertAdjacentElement('beforeend', this.el)

        this.constructor.list.push(this)
      }

      static init() {
        document.body.insertAdjacentHTML(
          'beforeend',
          "<div class='lav-modal'></div>"
        )

        document.addEventListener('click', (e) => {
          if (e.target.classList.contains('lav-modal')) {
            pushDataLayer(
              'exp_exit_intent_click_03',
              'Overlay close',
              'click',
              'Almost pop up'
            )

            this.close()
          }
          if (e.target.closest('.lav-modal__close')) {
            pushDataLayer(
              'exp_exit_intent_click_02',
              'Close',
              'click',
              'Almost pop up'
            )
            this.close()
          }

          if (e.target.dataset.modal) {
            this.open(e.target.dataset.modal)
          } else if (e.target.closest('[data-modal]')) {
            this.open(e.target.closest('[data-modal]').dataset.modal)
          }
        })

        this.addStyles()
      }

      static open(modalName, cb) {
        document.body.classList.add('lav-modal-open')

        if (_$('.lav-modal__inner.active')) {
          _$('.lav-modal__inner.active').classList.remove('active')
        }

        _$(modalName).classList.add('active')

        if (typeof cb === 'function') cb()

        setTimeout(() => {
          _$('.lav-modal').classList.add('active')
        }, 100)
      }

      static close(cb) {
        document.body.classList.remove('lav-modal-open')

        _$('.lav-modal')?.classList.remove('active')

        if (typeof cb === 'function') cb()

        setTimeout(() => {
          _$('.lav-modal__inner.active')?.classList.remove('active')
        }, 400)
      }

      static addStyles() {
        const styles = /* css */ `
          .lav-modal {
            position: fixed;
            z-index: 99999999999999;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background: rgba(0,0,0,.4);
            transition: 0.35s;
            opacity: 0;
            pointer-events: none;
            padding: 20px;
            overflow-y: auto;
            max-height: 100%;
            display: flex;
          }
          .lav-modal.active {
            opacity: 1;
            pointer-events: auto;
          }
          .lav-modal__inner {
            position: relative;
            background: #fff;
            max-width: 335px;
            width: 100%;
            display: none;
            margin: auto;
            padding: 20px 14px;
          }
          .lav-modal__inner.active {
            display: block;
          }
          .lav-modal__close {
            position: absolute;
            top: 8px;
            right: 8px;
            cursor: pointer;
            transition: 0.35s;
            line-height: 0;
          }
          [data-modal] {
            cursor: pointer;
          }
          @media(hover:hover) {
            .lav-modal__close:hover {
              opacity: 0.5;
            }
          }
          .lav-modal-open {
            overflow: hidden;
          }

          .lav-almost__title {
            color: #232323;
            text-align: center;
            font-size: 28px;
            font-style: normal;
            font-weight: 600;
            line-height: 30px;
          }
          .lav-almost__caption {
            color: #232323;
            text-align: center;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: 20px;
            margin-top: 8px;
          }
          .lav-almost__popular {
            position: relative;
            color: #232323;
            text-align: center;
            font-size: 14px;
            font-style: normal;
            font-weight: 600;
            line-height: 20px;
            padding: 7px 15px 9px;
            background: #E8F5FB;
            margin-top: 8px;
          }
          .lav-almost__popular:before {
            content: "";
            position: absolute;
            left: 50%;
            bottom: 0;
            transform: translateX(-50%) translateY(50%) rotate(45deg);
            display: block;
            width: 10px;
            height: 10px;
            background-color: #E8F5FB;
          }
          .lav-almost__looking {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            margin-top: 16px;
            padding: 10px;
            background: #eee;
          }
          .lav-almost__looking-icon {
            flex-shrink: 0;
            line-height: 0;
          }
          .lav-almost__looking-info {
            color: #232323;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: 18px;
          }
          .lav-almost__looking-info span {
            font-weight: 600;
          }
          .lav-almost__btn {
            margin-top: 12px;
            background: #C28046;
            text-align: center;
            padding: 15px 15px;
            color: #FFF;
            text-align: center;
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            line-height: 18px;
            text-transform: uppercase;
          }
          .lav-almost__skip {
            color: #232323;
            text-align: center;
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
            margin-top: 12px;
          }

          .lav-products {
            display: grid;
            margin-top: 25px;
            gap: 20px;
            max-height: 160px;
            overflow: auto;
            line-height: 0;
          }

          .lav-product {
            display: flex;
            gap: 14px;
          }
          .lav-product .rebuy-cart__flyout-item-media a {
            display: flex;
            line-height: 0;
          }
          .lav-product .rebuy-cart__flyout-item-media {
            width: 90px;
            height: 90px;
            flex-shrink: 0;
          }
          .lav-product .rebuy-cart__flyout-item-product-title {
            color: #232323;
            font-size: 14px;
            font-style: normal;
            font-weight: 700;
            line-height: 20.8px;
          }
          .lav-product .rebuy-cart__flyout-item-variant-title {
            font-size: 12px;
            margin-top: 4px;
            line-height: 18px;
            color: #535353;
          }
          .lav-product .rebuy-cart__flyout-item-info {
            flex-grow: 1;
          }
          .lav-product .rebuy-cart__flyout-item-price {
            margin-top: auto;
            padding-top: 5px;
          }
          .lav-product .rebuy-cart__flyout-item-discount-message {
            display: none;
            font-size: 12px;
            font-weight: bold;
            line-height: 1.3;
            margin-top: 4px;
          }
          .lav-product .rebuy-cart__flyout-item-price .rebuy-money.sale {
            color: #BD8554;
            font-size: 13px;
            font-style: normal;
            font-weight: 700;
          }
          .lav-product .rebuy-cart__flyout-item-price .rebuy-money.compare-at {
            font-size: 11px;
            color: #777;
          }
          .lav-product .rebuy-cart__flyout-item-price > div {
            display: flex;
            gap: 12px;
            align-items: center;
            line-height: 1;
            margin-top: 6px;
          }
        `

        const stylesEl = document.createElement('style')
        stylesEl.classList.add('exp-modal')
        stylesEl.innerHTML = styles
        document.head.appendChild(stylesEl)
      }
    }

    window.Modal = Modal
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
      modalClose: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <g clip-path="url(#clip0_154_96)">
          <path d="M18.3007 5.70973C17.9107 5.31973 17.2807 5.31973 16.8907 5.70973L12.0007 10.5897L7.1107 5.69973C6.7207 5.30973 6.0907 5.30973 5.7007 5.69973C5.3107 6.08973 5.3107 6.71973 5.7007 7.10973L10.5907 11.9997L5.7007 16.8897C5.3107 17.2797 5.3107 17.9097 5.7007 18.2997C6.0907 18.6897 6.7207 18.6897 7.1107 18.2997L12.0007 13.4097L16.8907 18.2997C17.2807 18.6897 17.9107 18.6897 18.3007 18.2997C18.6907 17.9097 18.6907 17.2797 18.3007 16.8897L13.4107 11.9997L18.3007 7.10973C18.6807 6.72973 18.6807 6.08973 18.3007 5.70973Z" fill="#B3B3B3"/>
        </g>
        <defs>
          <clipPath id="clip0_154_96">
            <rect width="24" height="24" fill="white"/>
          </clipPath>
        </defs>
      </svg>`,
      humans: `<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
        <mask id="mask0_154_124" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="3" y="3" width="32" height="32">
          <path d="M34.8333 3.16666H3.16663V34.8333H34.8333V3.16666Z" fill="white"/>
        </mask>
        <g mask="url(#mask0_154_124)">
          <mask id="mask1_154_124" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="3" y="3" width="32" height="32">
            <path d="M3.16663 3.16665H34.8333V34.8333H3.16663V3.16665Z" fill="white"/>
          </mask>
          <g mask="url(#mask1_154_124)">
            <path d="M11.8255 9.35154C11.8255 7.98518 10.7179 6.87758 9.35152 6.87758C7.98515 6.87758 6.87756 7.98518 6.87756 9.35154C6.87756 10.7179 7.98515 11.8255 9.35152 11.8255C10.7179 11.8255 11.8255 10.7179 11.8255 9.35154Z" stroke="#232323" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M26.1744 9.35154C26.1744 7.98518 27.282 6.87758 28.6484 6.87758C30.0148 6.87758 31.1224 7.98518 31.1224 9.35154C31.1224 10.7179 30.0148 11.8255 28.6484 11.8255C27.282 11.8255 26.1744 10.7179 26.1744 9.35154Z" stroke="#232323" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M28.8958 15.4746H31.1223C32.4887 15.4746 33.5963 16.5822 33.5963 17.9486V23.3913C33.5963 24.7576 32.4887 25.8652 31.1223 25.8652V33.5963" stroke="#232323" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M26.1744 33.5963V25.8652C24.808 25.8652 23.7004 24.7576 23.7004 23.3913" stroke="#232323" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.10408 15.4746H6.87752C5.51116 15.4746 4.40356 16.5822 4.40356 17.9486V23.3913C4.40356 24.7576 5.51116 25.8652 6.87752 25.8652V33.5963" stroke="#232323" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11.8254 33.5963V25.8652C13.1918 25.8652 14.2994 24.7576 14.2994 23.3913" stroke="#232323" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21.4739 33.5963V24.6901C22.8402 24.6901 23.9478 23.5825 23.9478 22.2161V15.4746C23.9478 14.1082 22.8402 13.0006 21.4739 13.0006H16.526C15.1596 13.0006 14.052 14.1082 14.052 15.4746V22.2161C14.052 23.5825 15.1596 24.6901 16.526 24.6901V33.5963" stroke="#232323" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.526 6.8776C16.526 5.51124 17.6336 4.40365 19 4.40365C20.3663 4.40365 21.4739 5.51124 21.4739 6.8776C21.4739 8.24397 20.3663 9.35156 19 9.35156C17.6336 9.35156 16.526 8.24397 16.526 6.8776Z" stroke="#232323" stroke-width="1.4" stroke-miterlimit="10"/>
          </g>
        </g>
      </svg>`
    }

    return svgObj[name]
  }
})()
