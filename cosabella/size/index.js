;(function () {
  console.debug('*** Experiment started ***')

  // Config for Experiment
  const config = {
    // dir: 'http://127.0.0.1:5500/<dir>/<project>',
    dir: 'https://flopsi69.github.io/crs/<dir>/<project>',
    clarity: ['set', 'exp_size', 'variant_1'],
    debug: false
  }

  // const orig = console.log
  // console.log = function (...args) {
  //   orig.apply(console, ['Debug:', ...args])
  // }

  // Styles for Experiment
  const styles = /* css */ `
  .radio--quantity span {
    font-family: 'Calibre';
  }
  .lav-discount {
    position: relative;
    color: #CC142B;
    font-family: Calibri;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    padding-left: 10px;
    margin-left: 10px;
  }
  .lav-discount:before {
    content: '';
    width: 1px;
    height: 11px;
    background: #000;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  .radio--quantity[data-value="qty-3"] label {
    display: flex;
  }
  .template-product .pack_save {
    color: #AFAFAF;
    font-family: Cambon;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 21.32px;
  }
  .template-product .js-product-info .form--product__field--Size {
    margin-bottom: 6px;
  }
  @media(min-width: 992px) {
    .template-product .js-product-info .form--product__field--Size {
      margin-bottom: 12px;
      margin-top: 24px;
    }
  }
  .template-product .js-product-info .form--product__field--Size + .form--product__add-to-cart {
    margin-top: 6px;
  }
  #mobileSizeSelector span.form--product__dropdown-label.js-dropdown-label {
    color: #0A0A12;
    font-size: 14.125px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    text-transform: none;
    letter-spacing: 0;
  }

  .lav-free {
    padding: 16px;
    border: 2px solid rgba(219, 133, 127, 0.20);
    background: rgba(215, 133, 122, 0.07);
    text-align: center;
    margin-top: 18px;
  }
  .lav-free__icon {
    line-height: 0;
  }
  .lav-free__title {
    color: #4F1B2D;
    text-align: center;
    font-family: Cambon;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    margin-top: 6px;
  }
  @media(max-width: 767px) {
    #mobileSizeSelector {
      padding-right: 0;
      padding-left: 160px;
    }
  }
  #mobileAddToCartBtn {
    padding-left: 0;
  }
  .template-product .form--product__actions.form--product__add-to-cart2 button {
    // width: 100px;
  }
  .template-product .js-product-field-size .form--product__dropdown-toggle-wrapper2 {
    width: 70%!important;
  }
  .template-product .js-product-field-size .form--product__dropdown-toggle-wrapper2 button {
    // position: relative;
  }
  .template-product .js-product-field-size .form--product__dropdown-toggle-wrapper2 button:before {
  }
  .template-product #mobileAddToCartBtn.form--product__actions.form--product__add-to-cart2 {
    width: 30%!important;
    left: 70%!important;
  }
  .template-product #mobileAddToCartBtn.form--product__actions.form--product__add-to-cart2 button {
    position: relative;
  }
  .template-product #mobileAddToCartBtn.form--product__actions.form--product__add-to-cart2 button[disabled]:before {
    content: '';
    position: absolute;
    height: 16px;
    width: 1px;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: #aeaebb;
  }
  #mobileAddToCartBtn .atc-label {
    display: none;
  }

  .lav-sticky {
    position: fixed;
    transform: translateY(100%);
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 6;
    display: none;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgba(215, 133, 122, 0.20);
    background: #FFF;
    padding: 12px 80px;
    transition: .2s;
  }
  .lav-sticky--show {
    transform: translateY(0%);
  }
  @media(min-width: 768px) {
    .lav-sticky {
      display: flex;
    }
  }
  .lav-sticky__info {}
  .lav-sticky__title {
    color: #000;
    font-family: Cambon;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: 35.98px;
    letter-spacing: -0.4px;
  }
  .lav-sticky__rate {
    margin-top: 4px;
  }
  @media(min-width: 768px) {
    .template-product .lav-sticky__size .form--product__dropdown-toggle-wrapper2 {
      display: flex!important;
    }
  }
  .lav-sticky__btn  {
    position: relative;
  }
  .lav-sticky__btn .btn {
    flex-wrap: nowrap;
    min-width: 320px;
    padding-left: 0;
    padding-right: 0;
  }
  .lav-sticky__btn-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background-color: transparent;
    cursor: pointer;
  }
  .lav-sticky__actions {
    display: flex;
    align-items: center;
    gap: 18px;
  }
  .lav-sticky__size {
    width: 280px;
  }
  .lav-sticky__size #mobileSizeSelector {
    max-width: 280px!important;
  }
  .lav-sticky__size .form--product__dropdown-wrapper {
    bottom: calc(100% - 1px);
    top: initial;
    width: 100%;
  }
  .lav-sticky__size .form--product__dropdown-label-wrapper.select-error {
    -webkit-animation: shake .2s ease-in-out 0s 2;
    animation: shake .2s ease-in-out 0s 2;
    -webkit-box-shadow: 0 0 .5em red;
    box-shadow: 0 0 .5em red;
  }
  .lav-sticky--show-wrap #attentive_creative {
    left: 100px!important;
    bottom: 100px!important;
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

    waitFor('.radio--quantity[data-value="qty-3"]', addDiscount)
    waitFor('.form--product__field--Size', handleSize)
    waitFor('.product__wishlist-button', addFreeReturn)
    waitFor('#mobileSizeSelector', handleSticky)
    waitFor(
      () => _$('.form--product__title') && _$('.stamped-product-reviews-badge'),
      () => {
        setTimeout(() => {
          addDesktopSticky()
        }, 1000)
      }
    )
  }

  function addDesktopSticky() {
    if (window.innerWidth < 768) return

    const title = _$('.form--product__title').innerText
    const el = document.createElement('div')
    el.classList.add('lav-sticky')

    el.innerHTML = /*html*/ `
      <div class='lav-sticky__info'>
        <div class='lav-sticky__title'>${title}</div>
        <div class='lav-sticky__rate'></div>
      </div>
      <div class="lav-sticky__actions">
        <div class="lav-sticky__size"></div>
        <div class="lav-sticky__btn"></div>
      </div>
    `

    const reviewsEl = _$(
      '.form--product .stamped-product-reviews-badge'
    ).cloneNode(true)

    el.querySelector('.lav-sticky__rate').appendChild(reviewsEl)

    _$('#mobileAddToCartBtn').insertAdjacentElement('afterend', el)

    el.querySelector('.lav-sticky__size').appendChild(_$('#mobileSizeSelector'))

    updateDesktopStickyButton()

    initMutation(
      '.form--product__actions.form--product__add-to-cart:not(#mobileAddToCartBtn)',
      (node) => {
        updateDesktopStickyButton()
      }
    )

    const handleStickyVisibility = () => {
      const productForm = _$(
        '.template-product .js-product-info .form--product'
      )
      if (!productForm) return

      const boundary = productForm.getBoundingClientRect()
      const isFormVisible = boundary.top + boundary.height < 0

      el.classList.toggle('lav-sticky--show', isFormVisible)
      document.body.classList.toggle('lav-sticky--show-wrap', isFormVisible)
    }

    let scrollTimeout = null
    window.addEventListener(
      'scroll',
      () => {
        if (scrollTimeout) {
          clearTimeout(scrollTimeout)
        }

        scrollTimeout = setTimeout(handleStickyVisibility, 10)
      },
      { passive: true }
    )
  }

  function updateDesktopStickyButton() {
    const addToCartEl = _$('#mobileAddToCartBtn [type="button"]').outerHTML

    _$(
      '.lav-sticky__size .form--product__dropdown-label-wrapper.select-error'
    )?.classList.remove('select-error')

    _$('.lav-sticky__btn').innerHTML = addToCartEl
    if (_$('#pre-select-atc:not(.hide)')) {
      _$('.lav-sticky__btn').insertAdjacentHTML(
        'beforeend',
        '<div class="lav-sticky__btn-overlay"></div>'
      )
    }

    if (_$('.lav-sticky__size .js-dropdown-label')) {
      _$('.lav-sticky__size .js-dropdown-label').innerText = _$(
        '.template-product .form--product__field--Size span.form--product__dropdown-label.js-dropdown-label'
      )?.innerText
    }

    _$('.lav-sticky__btn-overlay')?.addEventListener('click', () => {
      if (_$('#pre-select-atc:not(.hide)')) {
        _$(
          '.lav-sticky__size .form--product__dropdown-label-wrapper'
        )?.classList.add('select-error')

        return
      }
    })

    _$('.lav-sticky__btn button').addEventListener('click', () => {
      console.log('clicked')
      // _$('.form--product__actions .js_product_btn').click()
    })
  }

  function handleSticky() {
    const el = _$('#mobileAddToCartBtn')

    if (!el) return
  }

  function addFreeReturn() {
    const el = _$('.product__wishlist-button')

    if (!el) return

    el.insertAdjacentHTML(
      'afterend',
      /*html*/ `
      <div class="lav-free">
        <div class="lav-free__icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
            <path d="M16.6311 20.38L15.5264 19.2754L17.507 17.2948H7.53143C4.51645 17.2948 2.06357 14.8419 2.06357 11.8269V10.38H3.62582V11.8269C3.62582 13.9805 5.37787 15.7325 7.53143 15.7325H17.507L15.5264 13.752L16.6311 12.6473L20.4974 16.5136L16.6311 20.38ZM18.9358 10.38H17.3736V8.93309C17.3736 6.7795 15.6215 5.02748 13.468 5.02748H3.4924L5.47297 7.00802L4.36831 8.11272L0.501953 4.24636L4.36831 0.380005L5.47297 1.48463L3.4924 3.46524H13.468C16.4829 3.46524 18.9358 5.91812 18.9358 8.93309V10.38Z" fill="#4F1B2D"/>
          </svg>
        </div>
        <div class="lav-free__title">
          Free returns and exchanges<br/>
          If size doesn't match
        </div>
      </div>
    `
    )
  }

  function handleSize() {
    let isProcessing = false
    const el = _$('.form--product__field--Size')

    if (!el) return

    _$('.form--product__add-to-cart').insertAdjacentElement('beforebegin', el)

    _$(
      '.form--product__dropdown-toggle-wrapper:not(#mobileSizeSelector) .form--product__dropdown-toggle',
      el
    ).addEventListener('click', () => {
      pushDataLayer('exp_size_click_01', 'Dropdown', 'click', 'Product info')
    })

    _$(
      '.form--product__dropdown-toggle-wrapper#mobileSizeSelector .form--product__dropdown-toggle',
      el
    ).addEventListener('click', () => {
      pushDataLayer(
        'exp_size_click_03',
        'Select size',
        'click',
        'Sticky button'
      )
    })

    _$$(
      '.form--product__dropdown-toggle-wrapper:not(#mobileSizeSelector) .radio.radio--size',
      el
    ).forEach((radio) => {
      radio.addEventListener('click', () => {
        const itemName = _$('.form--product__label-size', radio).innerText
        if (!itemName) return
        if (isProcessing) return

        isProcessing = true
        pushDataLayer('exp_size_click_02', itemName, 'click', 'Product info')

        setTimeout(() => {
          isProcessing = false
        }, 500)
      })
    })

    _$$(
      '.form--product__dropdown-toggle-wrapper#mobileSizeSelector .radio.radio--size',
      el
    ).forEach((radio) => {
      radio.addEventListener('click', () => {
        const itemName = _$('.form--product__label-size', radio).innerText
        if (!itemName) return
        if (isProcessing) return

        isProcessing = true
        pushDataLayer('exp_size_click_04', itemName, 'click', 'Sticky button')

        setTimeout(() => {
          isProcessing = false
        }, 500)
      })
    })
  }

  function addDiscount() {
    const el = _$('.radio--quantity[data-value="qty-3"]')
    if (!el || !_$('.product__bundle--cta')) return

    console.log('fire', _$('span', el))

    if (_$('.productBundleInfo')?.innerText.includes('20%')) {
      _$('span', el).insertAdjacentHTML(
        'afterend',
        `<span class="lav-discount">save 20%</span>`
      )
    }
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
            // console.log('muta added:', node)
            // if (!(node instanceof HTMLElement)) continue
            cbAdded(node, observer)
          }
        }

        if (typeof cbRemoved === 'function') {
          for (let node of mutation.removedNodes) {
            // console.log('muta removed:', node)
            // if (!(node instanceof HTMLElement)) continue
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
    const svgObj = {}

    return svgObj[name]
  }
})()
