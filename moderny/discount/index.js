;(function () {
  console.debug('*** Experiment started ***')

  // Config for Experiment
  const config = {
    // dir: 'http://127.0.0.1:5500/moderny/discount',
    dir: 'https://flopsi69.github.io/crs/moderny/discount',
    clarity: ['set', 'exp_discount', 'variant_1'],
    debug: false
  }

  // const orig = console.log
  // console.log = function (...args) {
  //   orig.apply(console, ['Debug:', ...args])
  // }

  // Styles for Experiment
  const styles = /* css */ `
  #fnd-in-store-wrapper {display: none!important;}
  .lav-label {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: #FFF;
    font-size: 14px;
    font-weight: 700;
    line-height: 22px;
    background: #F00;
    padding: 10px 12px;
    margin-bottom: 22px;
  }
  .product-meta__title {
    margin-bottom: 8px;
  }
  .lav-label span {
    border-bottom: 1px solid #fff;
    line-height: 1;
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

    waitFor('.product-meta__title', addLabel)

    const interval = setInterval(() => {
      if (!_$('.lav-label')) return

      const coupon = getCoupon()

      if (coupon && coupon === 'mystery10') {
        _$('.lav-label').classList.add('activated')
        _$('.lav-label span').textContent =
          'You’ve got an extra 10% off your first order!'
        clearInterval(interval)
      }

      if (
        _$('#fnd-in-store-wrapper') ||
        (coupon && coupon?.includes('welcome20'))
      ) {
        _$('.lav-label').classList.add('activated')
        _$('.lav-label span').textContent =
          'You’ve got 20% back on your first order!'
        clearInterval(interval)
      }
    }, 500)
  }

  async function addLabel() {
    const getIp = await fetch('https://ipwho.is/')
    const getIpParsed = await getIp.json()
    window.lavCountry = getIpParsed.country_code
    if (lavCountry === 'US') {
      console.log('User is from the US')
    }
    console.log('User is from the', lavCountry)

    const coupon = getCoupon()
    let text

    if (
      lavCountry !== 'US' ||
      _$('#kl-shopLogin-component-SpYzNU' || coupon === 'mystery10')
    ) {
      text = coupon
        ? 'You’ve got an extra 10% off your first order!'
        : 'Get an extra 10% off your first order!'
    } else {
      text =
        _$('#fnd-in-store-wrapper') || (coupon && coupon?.includes('welcome20'))
          ? 'You’ve got 20% back on your first order!'
          : 'Get an extra 20% back on your first order!'
    }

    const markup = /* html */ `
    <div class="lav-label ${
      coupon || _$('#fnd-in-store-wrapper') ? 'activated' : ''
    }">
      ${getSvg('coupon')} <span>${text}</span>
    </div>
  `

    _$('.product-meta__title').insertAdjacentHTML('afterend', markup)

    _$('.lav-label').addEventListener('click', (e) => {
      e.preventDefault()
      pushDataLayer(
        'exp_discount_click_01',
        _$('.lav-label span').textContent,
        'click',
        'Product info'
      )
      if (_$('.lav-label.activated')) return

      openForm()
    })
  }

  function openForm() {
    // <div class="klaviyo-form-XYZ123"></div>
    // id="kl-shopLogin-component-Xpk4XR"
    // klaviyo.openForm('Xpk4XR')

    window._klOnsite = window._klOnsite || []
    if (_$('#kl-shopLogin-component-SpYzNU') || lavCountry !== 'US') {
      window._klOnsite.push(['openForm', 'SpYzNU'])
    } else {
      window._klOnsite.push(['openForm', 'UEQFBf'])
    }
  }

  function getCoupon() {
    let localCode
    let parsedCart = localStorage.getItem('loomi-cart')
    if (parsedCart) {
      parsedCart = JSON.parse(parsedCart)
    }
    if (parsedCart?.discount_codes?.[0]?.code) {
      localCode = parsedCart.discount_codes[0].code
    }

    let coupon =
      getCookie('discount_code') ||
      localCode ||
      localStorage.getItem('fondue-promotion-code')

    if (typeof coupon === 'string' && coupon) {
      return coupon.toLowerCase()
    }
    return false
  }

  function getCookie(name) {
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}=`)
    if (parts.length === 2) return parts.pop().split(';').shift()
  }

  function applyDiscountCode(discountCode) {
    fetch('/cart.js')
      .then((res) => res.json())
      .then((data) => console.log(data))
    // 'MYSTERY10'
    fetch(`/discount/${discountCode}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        console.log('Response:', response)
        if (response.redirected) {
          // Redirect to the checkout page where the discount is applied
          // window.location.href = response.url;
        } else {
          // Handle failure to apply the discount
          console.log('Invalid discount code or could not apply the discount.')
        }
      })
      .catch((error) => console.error('Error:', error))
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
          if (
            e.target.classList.contains('lav-modal') ||
            e.target.closest('.lav-modal__close')
          )
            this.close()

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
        z-index: 999;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(0,0,0,.1);
        backdrop-filter: blur(3px);
        -webkit-backdrop-filter: blur(3px);
        transition: 0.35s;
        opacity: 0;
        pointer-events: none;
        padding: 15px;
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
        max-width: 380px;
        width: 100%;
        display: none;
        margin: auto;
      }
      .lav-modal__inner.active {
        display: block;
      }
      .lav-modal__close {
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
      coupon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
        <path d="M8.62283 0.0341797L16.5023 0.64018L17.1083 8.51893L8.90933 16.7179L0.423828 8.23243L8.62283 0.0341797ZM9.19583 1.58218L2.54558 8.23243L8.90933 14.5969L15.5596 7.94593L15.1051 2.03668L9.19583 1.58218ZM12.0908 5.05018C12.0216 4.97855 11.9389 4.92141 11.8474 4.8821C11.7559 4.8428 11.6575 4.82211 11.5579 4.82124C11.4583 4.82038 11.3595 4.83935 11.2674 4.87706C11.1752 4.91477 11.0915 4.97046 11.021 5.04088C10.9506 5.1113 10.8949 5.19504 10.8572 5.28721C10.8195 5.37939 10.8005 5.47815 10.8014 5.57773C10.8023 5.67732 10.8229 5.77573 10.8623 5.86723C10.9016 5.95874 10.9587 6.04149 11.0303 6.11068C11.1718 6.2473 11.3612 6.32289 11.5579 6.32119C11.7545 6.31948 11.9426 6.2406 12.0817 6.10154C12.2207 5.96249 12.2996 5.77438 12.3013 5.57773C12.303 5.38108 12.2274 5.19163 12.0908 5.05018ZM9.96983 3.98968C10.1781 3.77793 10.4263 3.60951 10.6999 3.49414C10.9736 3.37878 11.2675 3.31874 11.5645 3.31749C11.8615 3.31625 12.1558 3.37382 12.4305 3.48689C12.7051 3.59997 12.9547 3.7663 13.1647 3.9763C13.3748 4.18629 13.5411 4.4358 13.6543 4.71042C13.7674 4.98505 13.8251 5.27936 13.8239 5.57637C13.8227 5.87338 13.7627 6.16722 13.6474 6.44095C13.5321 6.71467 13.3638 6.96285 13.1521 7.17118C12.729 7.58751 12.1586 7.8198 11.565 7.81746C10.9715 7.81511 10.4029 7.57831 9.9831 7.15865C9.56334 6.73899 9.32641 6.17046 9.32393 5.5769C9.32144 4.98334 9.5536 4.41285 9.96983 3.98968Z" fill="white"/>
      </svg>
    `
    }

    return svgObj[name]
  }
})()
