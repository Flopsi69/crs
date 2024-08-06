;(function () {
  console.debug('*** Experiment started ***')

  // Config for Experiment
  const config = {
    // dir: 'http://127.0.0.1:5500/<dir>/<project>',
    dir: 'https://flopsi69.github.io/crs/geeni/hotOffer',
    clarity: ['set', '', 'variant_1'],
    debug: true
  }

  const orig = console.log
  console.log = function (...args) {
    orig.apply(console, ['Debug:', ...args])
  }

  // Styles for Experiment
  const styles = /* css */ `
    .lav-offers {
      margin-top: 32px;
      margin-bottom: 24px;
      border-radius: 16px;
      background: #F2F7F8;
    }
    .lav-offers__wrap {
      margin-top: 40px;
    }
    .lav-offers__title {
      text-align: center;
    }

    .lav-timer {
      text-align: center;
      padding: 24px 20px;
    }
    .lav-timer__title {
      font-size: 20px;
      font-weight: 600;
      line-height: 24px;
    }
    .lav-timer__inner {
      margin-top: 16px;
      display: flex;
      justify-content: center;
      gap: 17px;
    }
    .lav-timer__item {
      position: relative
    }
    .lav-timer__item + .lav-timer__item:before {
      content: '';
      position: absolute;
      left: -11px;
      top: 13px;
      background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNiIgaGVpZ2h0PSIyOCIgdmlld0JveD0iMCAwIDYgMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI1IiBoZWlnaHQ9IjI4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjUpIiBmaWxsPSIjRjJGN0Y4Ii8+CjxjaXJjbGUgY3g9IjMiIGN5PSIxNC41IiByPSIyLjUiIGZpbGw9IiMwMjNGODgiIGZpbGwtb3BhY2l0eT0iMC4xNiIvPgo8Y2lyY2xlIGN4PSIzIiBjeT0iMjUuNSIgcj0iMi41IiBmaWxsPSIjMDIzRjg4IiBmaWxsLW9wYWNpdHk9IjAuMTYiLz4KPC9zdmc+Cg==");
      width: 5px;
      height: 15px;
      background-size: cover;
      background-position: bottom;
    }
    .lav-timer__value {
      display: flex;
      gap: 4px;
    }
    .lav-timer__digit {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 43px;
      border-radius: 4px;
      background: #FFF;
      box-shadow: 0px 1px 0px 0px rgba(2, 63, 136, 0.08);
      color: #D22432;
      font-size: 32px;
      font-weight: 700;
      line-height: 40px;
      text-transform: uppercase;
    }
    .lav-timer__caption {
      color: #4A4A4A;
      font-size: 12px;
      font-weight: 700;
      line-height: 18px;
      letter-spacing: 1.08px;
      text-transform: uppercase;
      margin-top: 8px;
    }

    .lav-offers__list {
      border: 1px solid rgba(2, 63, 136, 0.08);
      display: flex;
      border-radius: 0 0 16px 16px;
      overflow: hidden;
    }

    .lav-offer {
      flex: 1;
      background: linear-gradient(353deg, #E8F8FE 8%, #FFF 33%);
      padding: 24px;
      display: flex;
      gap: 24px;
    }
    .lav-offer + .lav-offer {
      border-left: 1px solid rgba(2, 63, 136, 0.08);
    }
    .lav-offer__image {
      overflow: hidden;
      width: 232px;
      height: 232px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 12px;
      background: url('https://mygeeni.com/cdn/shop/products/GN-CW033Mainupdate.jpg?v=1680186358&width=720') 50% / contain no-repeat;
      line-height: 0;
      // flex-shrink: 0;
    }
    .lav-offer__image img {
      max-width: 100%;
      max-height: 100%;
    }
    .lav-offer__info {
      display: flex;
      // justify-content: space-between;
      align-items: center;
      flex-flow: column;
      text-align: center;
      margin: 5px 0;
    }
    .lav-offer__title {
      font-size: 26px;
      font-weight: 600;
      line-height: 40px;
      margin-bottom: 20px;
    }
    .lav-offer__discount {
      border-radius: 4px;
      background: #D22432;
      display: inline-flex;
      color: #FFF;
      font-size: 13px;
      font-weight: 600;
      line-height: 18px;
      text-transform: uppercase;
      padding: 2px 6px;
      margin-top: auto;
    }
    .lav-offer__price {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 4px;
      margin: 12px 0;
    }
    .lav-offer__price-new {
      color: #222;
      font-size: 24px;
      font-weight: 700;
      line-height: 24px;
    }
    .lav-offer__price-old {
      color: #333;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      text-decoration: line-through;
    }
    .lav-offer__link {
      display: block;
      border-radius: 100px;
      background: #023F88;
      padding: 12px 24px;
      max-width: 155px;
      width: 100%;
      color: #FFF;
      text-align: center;
      font-size: 14px;
      font-weight: 600;
      line-height: 24px;
      text-transform: uppercase;
      cursor: pointer;
    }
    @media(max-width: 992px) {
      .lav-offer {
        flex-direction: column;
        align-items: center;
        gap: 4px;
        padding: 8px 12px 16px;
      }
    }
    @media(max-width: 768px) {
      .lav-offers__title {
        text-align: left;
      }
      .lav-offer {
        background: linear-gradient(180deg, #FFF 68%, #E8F8FE 79%);
      }
      .lav-offers {
        margin-top: 12px;
      }
      .lav-timer {
        padding: 12px 20px;
      }
      .lav-timer__title {
        font-size: 14px;
        line-height: 20px;
      }
      .lav-timer__inner {
        margin-top: 8px;
      }
      .lav-timer__digit {
        width: 18px;
        height: 24px;
        border-radius: 4px;
        box-shadow: 0px 1px 0px 0px rgba(2, 63, 136, 0.08);
        font-size: 16px;
        line-height: 18px;
      }
      .lav-timer__caption {
        font-size: 8px;
        line-height: 1;
        letter-spacing: 0.72px;
      }
      .lav-timer__item + .lav-timer__item:before {
        width: 3px;
        height: 11px;
        left: -9px;
        top: 5px;
      }
      .lav-timer__inner {
        gap: 15px;
      }
      .lav-offer__info {
        margin: 0;
      }
      .lav-offer__title {
        font-size: 12px;
        font-weight: 700;
        line-height: 18px;
        margin-bottom: 12px;
      }
      .lav-offer__image {
        width: 102px;
        height: 102px;
      }
      .lav-offer__discount {
        font-size: 12px;
        line-height: 14px;
      }
      .lav-offer__price {
        margin-top: 4px;
      }
      .lav-offer__price-new {
        font-size: 14px;
      }
      .lav-offer__price-old {
        font-size: 12px;
      }
      .lav-offer__link {
        padding: 6px 24px;
      }
    }
  `

  const stylesEl = document.createElement('style')
  stylesEl.classList.add('exp-styles')
  stylesEl.innerHTML = styles

  // *** Logic *** //
  initExp()

  async function initExp() {
    await waitFor(() => document.head && document.body, false, { ms: 50 })

    console.debug('** InitExp **')
    document.head.appendChild(stylesEl)

    waitFor('.warranty-sale-custom', addOffersBlock)

    function addOffersBlock() {
      const markup = /* html */ `
        <div class='lav-offers__wrap'>
          <div class='container'>
            <h2 class='lav-offers__title heading-2'>Weekly Deals</h2>

            <div class='lav-offers'>
              <div class='lav-offers__timer lav-timer'>
                <div class='lav-timer__title'>Sales ends in:</div>
                <div class='lav-timer__inner'>
                  <div class='lav-timer__item'>
                    <div class='lav-timer__value' id='days'>
                      <span class='lav-timer__digit'>0</span>
                      <span class='lav-timer__digit'>0</span>
                    </div>
                    <div class='lav-timer__caption'>Days</div>
                  </div>
                  
                  <div class='lav-timer__item'>
                    <div class='lav-timer__value' id='hours'>
                      <span class='lav-timer__digit'>0</span>
                      <span class='lav-timer__digit'>0</span>
                    </div>
                    <div class='lav-timer__caption'>Hours</div>
                  </div>

                  <div class='lav-timer__item'>
                    <div class='lav-timer__value' id='minutes'>
                      <span class='lav-timer__digit'>0</span>
                      <span class='lav-timer__digit'>0</span>
                    </div>
                    <div class='lav-timer__caption'>Min</div>
                  </div>

                  <div class='lav-timer__item'>
                    <div class='lav-timer__value' id='seconds'>
                      <span class='lav-timer__digit'>0</span>
                      <span class='lav-timer__digit'>0</span>
                    </div>
                    <div class='lav-timer__caption'>Sec</div>
                  </div>
                </div>
              </div>

              <div class='lav-offers__list'>
                <div class='lav-offer'>
                  <div class='lav-offer__image'></div>
                  <div class='lav-offer__info'>
                    <div class='lav-offer__title'>Geeni Hawk 3 1080p Outdoor Camera</div>
                    <div class='lav-offer__discount'>save 12%</div>
                    <div class='lav-offer__price'>
                      <div class='lav-offer__price-new'>$29.99</div>
                      <div class='lav-offer__price-old'>$34.99</div>
                    </div>
                    <a href='#' class='lav-offer__link'>Shop Now</a>
                  </div>
                </div>
                
                <div class='lav-offer'>
                  <div class='lav-offer__image'></div>
                  <div class='lav-offer__info'>
                    <div class='lav-offer__title'>Geeni Hawk 3 1080p Outdoor Camera</div>
                    <div class='lav-offer__discount'>save 12%</div>
                    <div class='lav-offer__price'>
                      <div class='lav-offer__price-new'>$29.99</div>
                      <div class='lav-offer__price-old'>$34.99</div>
                    </div>
                    <a href='#' class='lav-offer__link'>Shop Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `

      $('.warranty-sale-custom').insertAdjacentHTML('beforebegin', markup)

      startTimer('2024, Aug 1')
    }

    function startTimer(endDate) {
      const daysElem = document.getElementById('days')
      const hoursElem = document.getElementById('hours')
      const minutesElem = document.getElementById('minutes')
      const secondsElem = document.getElementById('seconds')

      function updateTimer() {
        const now = new Date().getTime()
        const distance = new Date(endDate).getTime() - now

        if (distance < 0) {
          clearInterval(timerInterval)
          daysElem.innerHTML =
            '<span class="lav-timer__digit">0</span><span class="lav-timer__digit">0</span>'
          hoursElem.innerHTML =
            '<span class="lav-timer__digit">0</span><span class="lav-timer__digit">0</span>'
          minutesElem.innerHTML =
            '<span class="lav-timer__digit">0</span><span class="lav-timer__digit">0</span>'
          secondsElem.innerHTML =
            '<span class="lav-timer__digit">0</span><span class="lav-timer__digit">0</span>'
          return
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24))
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        )
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distance % (1000 * 60)) / 1000)

        daysElem.innerHTML = `<span class="lav-timer__digit">${
          String(days).padStart(2, '0')[0]
        }</span><span class="lav-timer__digit">${
          String(days).padStart(2, '0')[1]
        }</span>`
        hoursElem.innerHTML = `<span class="lav-timer__digit">${
          String(hours).padStart(2, '0')[0]
        }</span><span class="lav-timer__digit">${
          String(hours).padStart(2, '0')[1]
        }</span>`
        minutesElem.innerHTML = `<span class="lav-timer__digit">${
          String(minutes).padStart(2, '0')[0]
        }</span><span class="lav-timer__digit">${
          String(minutes).padStart(2, '0')[1]
        }</span>`
        secondsElem.innerHTML = `<span class="lav-timer__digit">${
          String(seconds).padStart(2, '0')[0]
        }</span><span class="lav-timer__digit">${
          String(seconds).padStart(2, '0')[1]
        }</span>`
      }

      const timerInterval = setInterval(updateTimer, 1000)
      updateTimer()
    }

    // Example usage:
    // startTimer('2024-12-31T23:59:59');
  }

  // *** Utils *** //
  class Modal {
    static list = []
    constructor(name, html) {
      if (!$('.lav-modal')) {
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

      $('.lav-modal').insertAdjacentElement('beforeend', this.el)

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

      if ($('.lav-modal__inner.active')) {
        $('.lav-modal__inner.active').classList.remove('active')
      }

      $(modalName).classList.add('active')

      if (typeof cb === 'function') cb()

      setTimeout(() => {
        $('.lav-modal').classList.add('active')
      }, 100)
    }

    static close(cb) {
      document.body.classList.remove('lav-modal-open')

      $('.lav-modal')?.classList.remove('active')

      if (typeof cb === 'function') cb()

      setTimeout(() => {
        $('.lav-modal__inner.active')?.classList.remove('active')
      }, 400)
    }

    static addStyles() {
      const styles = `
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
