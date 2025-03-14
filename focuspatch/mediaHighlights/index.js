console.debug('*** Experiment started ***')

// Config for Experiment
const config = {
  // dir: 'http://127.0.0.1:5500/focuspatch/mediaHighlights',
  dir: 'https://flopsi69.github.io/crs/focuspatch/mediaHighlights',
  clarity: ['set', 'focuspatch_authority', 'variant_1'],
  debug: false
}

// const orig = console.log
// console.log = function (...args) {
//   orig.apply(console, ['Debug:', ...args])
// }

// Styles for Experiment
const styles = /* css */ `
  .lp-fp--hero-description {
    color: #FFF;
    text-align: center;
    font-family: Barlow;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    margin-bottom: 0;
  }
  .lp-fp--benefits {
    margin: 24px auto;
  }
  .lp-fp--benefits li:nth-child(1), .lp-fp--benefits li {
    margin-left: 0;
    align-items: flex-start;
    gap: 15px;
  }
  .lp-fp--green-box {
    position: relative;
    border-radius: 30px;
    background: #BC3C0C;
    padding: 9px 12px 10px;
    display: inline-block;
    margin: 30px auto 12px;
    font-weight: 600!important;
    transform: translateX(-50%);
    left: 50%;
  }
  .lp-fp--green-box:before {
    content: '';
    position: absolute;
    left: -39px;
    top: 19px;
    width: 49px;
    height: 48px;;
    background: url('${config.dir}/img/hero-arrow.svg') center no-repeat;
    background-size: contain;
  }
  .lp-fp--hero-rating {
    display: none;
  }
  .lp-fp--hero-btn {
    margin-top: 24px;
  }
  .lp-fp--hero-btn a {
    opacity: 0;
    pointer-events: none;
    visibility: hidden;
  }
  .ff-r {
    font-family: Roboto, sans-serif !important;
  }
  .ff-b {
    font-family: Barlow;
  }
  [class*='lav-'] {
    letter-spacing: 0;
  }
  .lav-trustpilot {
    background: #FFF;
    margin: 22px -27px;
  }
  .lav-trustpilot__header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    color: #000;
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    line-height: 18px;
    padding: 16px 12px 12px;
  }
  .lav-trustpilot__footer {
    padding: 12px;
    color: #000;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
    border-top: 1px solid rgba(240, 90, 39, 0.22);
  }
  .lav-trustpilot__footer span {
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  .lav-news {
    position: relative;
    background: #003387;
    color: #fff;
    padding: 75px 20px 60px;
  }
  .lav-news:before {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 0;
    right: 0;
    height: 161px;
    background: url('${config.dir}/img/waves-dark.png') center repeat-x;
    background-size: 100% auto;
  }
  .lav-news__slider {
    position: relative;
    z-index: 1;
    margin-bottom: 0!important;
  }
  .lav-news__slider .slick-track {
      display: flex !important;
  }
  .lav-news__slider .slick-slide {
      height: inherit !important;
  }
  .lav-news__slider .slick-dots li {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    transition: .3s;
    background: #4D6FAE;
  }
  .lav-news__slider .slick-dots li.slick-active {
    width: 12px;
    height: 12px;
    background: #fff;
  }
  .lav-news__slider .slick-dots button {
    width: 0;
    height: 0;
  }
  .lav-news__slider li button:before {
    display: none;
  }
  .lav-news__slider .slick-dots {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    bottom: -33px;
    height: 12px;
  }
  .lav-news__slide {
    display: flex!important;
    align-items: center;
    flex-flow: column;
  }
  .lav-news__title {
    text-align: center;
    font-family: "Bebas", 'Bebas Fallback', sans-serif;
    font-size: 36px;
    font-weight: 400;
    line-height: 42px;
    margin-bottom: 24px;
  }
  .lav-news__caption {
    text-align: center;
    font-family: Barlow;
    font-size: 18px;
    font-weight: 600;
    line-height: 26px;
    margin-bottom: 24px;
  }
  .lav-news__logo {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: auto;
    line-height: 0;
    text-align: center;
  }
  .lav-news__logo img {
    max-height: 35px;
    max-width: 280px;
  }
  .lp-fp--as-seen-section {
    background: #F1F3F4;
  }
  .lp-fp--as-seen-section h2 {
    color: #0C0B0B;
    text-align: center;
    font-family: "Bebas", 'Bebas Fallback', sans-serif!important;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: 42px;
    text-transform: uppercase;
    letter-spacing: 0;
  }

  .lav-trusted {
    padding: 24px 0 0;
    background: linear-gradient(180deg, #F1F3F4 0%, #FFF 100%);
  }
  .lav-trusted__widget {
    margin-bottom: -20px;
  }
  .lav-trusted__title {
    color: #0C0B0B;
    text-align: center;
    font-family: "Bebas", 'Bebas Fallback', sans-serif;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: 42px;
    text-transform: uppercase;
    letter-spacing: 0;
    padding: 0 15px;
  }
  .lav-trusted__list {
    margin-top: 15px;
  }
  .lav-global {
    position: relative;
    background: #0050D4;
    padding: 40px 27px 30px;
    color: #fff;
    margin-bottom: 50px;
  }
  .lav-global:before {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 0;
    right: 0;
    height: 161px;
    background: url('${config.dir}/img/waves.png') center repeat-x;
    background-size: 100% auto;
    z-index: -1;
  }
  .lav-global {}
`

const stylesEl = document.createElement('style')
stylesEl.classList.add('exp-styles')
stylesEl.innerHTML = styles

// *** Logic *** //
initExp()

async function initExp() {
  await waitFor(() => document.head && document.body, false, { ms: 20 })

  document.body.appendChild(stylesEl)

  console.debug('** InitExp **')

  waitFor('.lp-fp--green-box', handleHero)
  waitFor('.lp-fp--main-title', addTrustpilot)
  addModal()
  waitFor('.lp-fp--main-review-section', addNews)
  waitFor('.lp-fp--as-seen-section', addTrusted)
  addGlobal()

  _$$('.lav-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (_$('.lav-modal__inner.active')) {
        window.Modal.close()
      }

      if (btn.closest('.lav-modal')) {
        pushDataLayer(
          'exp_focuspatch_click_03',
          'Get it now',
          'click',
          'Pop up In over 5000 stores globally'
        )
      }

      if (btn.closest('.lav-global')) {
        pushDataLayer(
          'exp_focuspatch_click_06',
          'Get it now',
          'click',
          'In over 5000 stores globally'
        )
      }

      if (btn.classList.contains('lav-hero-btn')) {
        pushDataLayer(
          'exp_focuspatch_click_04',
          'Get started today',
          'click',
          'First screen'
        )
      }

      _$('#purchase').scrollIntoView({ behavior: 'smooth' })
    })
  })
}

function handleHero() {
  _$('.lp-fp--green-box').insertAdjacentHTML(
    'afterend',
    /* html */ `<div class="lav-hero-btn lav-btn">Get Started Today</div>`
  )
}

function addGlobal() {
  const markup = /* html */ `
    <div class='lav-global'>
      <div class='lavm-trustpilot__title'>In over 5000 stores globally</div>
      <div class='lavm-trustpilot__images'>
        <img src='${config.dir}/img/lavm-1.svg' />
        <img src='${config.dir}/img/lavm-2.svg' />
      </div>
      <div class='lavm-trustpilot__map'>
        <img src='${config.dir}/img/lavm-3.png' />
      </div>
      <div class='lavm-trustpilot__button lav-btn'>Get IT NOW</div>
      <div class='lavm-trustpilot__caption ff-b'>
        <strong>30 Day Money Back Guarantee:</strong> If our stickers don’t help your active child, we’ll give you a full refund.
      </div>
      <div class='lavm-trustpilot__benefits'>
        <img src='${config.dir}/img/benefits.png' />
      </div>
    </div>
  `

  _$('.lp-fp--original-focus-section').insertAdjacentHTML('beforebegin', markup)

  visibilityEvent('.lav-global', () => {
    pushDataLayer(
      'exp_focuspatch_view_03',
      'In over 5000 stores globally',
      'view',
      'In over 5000 stores globally'
    )
  })
}

function addTrusted() {
  _$('.lp-fp--as-seen-section').insertAdjacentElement(
    'beforebegin',
    _$('.lp-fp--how-to-section')
  )

  const markup = /* html */ `
    <div class='lav-trusted'>
      <div class='lav-trusted__title'>
        Trusted by over<br/> 1 million customers
      </div>
      <div class='lav-trusted__list'>
        <div style="display: block !important;">
          <script type="module">
                  // container query polyfill
            if (!("container" in document.documentElement.style)) {
              import("https://unpkg.com/container-query-polyfill@^0.2.0");
            }
          </script>
          
          <div class='lav-trusted__widget' data-widget-host="habitat-static-feed" style="display: block !important;">
            <script type="text/props">
              {
                "feedId": "4dfaec56-3c8b-4f89-b2d6-982b52fae243",
                "platformType": "standalone"
              }
            </script>
          </div>
        </div>
      </div>
    </div>
  `

  _$('.lp-fp--as-seen-section').insertAdjacentHTML('afterend', markup)

  visibilityEvent('.lav-trusted__widget', () => {
    pushDataLayer(
      'exp_focuspatch_view_02',
      'Trusted by over 1 million customers',
      'view',
      'Trusted by over 1 million customers'
    )
  })

  // Create script element
  const script = document.createElement('script')
  script.src = 'https://shoppables.archive.com/ugc_feed.js'
  script.defer = true
  script.type = 'module'

  // Append script to the document head
  document.head.appendChild(script)

  // Create link element for stylesheet
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = 'https://shoppables.archive.com/ugc_feed.css'
  link.as = 'style'

  waitFor(
    () =>
      _$('.lav-trusted__widget').shadowRoot?.querySelector(
        'a[href^="https://archive.com?domain=natpat"]'
      ),
    () => {
      const shadowRootEl = _$('.lav-trusted__widget').shadowRoot

      shadowRootEl
        .querySelector('a[href^="https://archive.com?domain=natpat"]')
        .remove()

      shadowRootEl.addEventListener('click', (e) => {
        console.log(e.target)
        if (e.target.closest('figure')) {
          pushDataLayer(
            'exp_focuspatch_click_05',
            e.target.closest('[tabindex="0"]')?.ariaLabel || 'Video',
            'click',
            'Trusted by over 1 million customers'
          )
        }
      })
    }
  )

  // Append link to the document head
  document.head.appendChild(link)
}

function addTrustpilot() {
  const markup = /* html */ `
    <div class='lav-trustpilot'>
      <div class='lav-trustpilot__header ff-r'>
        <span class='lav-trustpilot__caption'>Excellent</span>
        <img src='${config.dir}/img/stars.svg' class='lav-trustpilot__stars' />
        <span class='lav-trustpilot__caption'>based on 3763  reviews</span>
      </div>
      <div class='lav-trustpilot__footer ff-b'>
        <span data-modal=".lavm-trustpilot">Trusted by top retailers and 5000+ stores worldwide</span>
      </div>
    </div>
  `

  _$('h1.lp-fp--main-title').insertAdjacentHTML('afterend', markup)
}

function addNews() {
  const markup = /* html */ `
    <div class='lav-news'>
      <div class='lav-news__title'>
        We're in the news...<br/>for good reasons
      </div>
      <div class='lav-news__slider'>
        <div class='lav-news__slide'>
          <div class='lav-news__caption'>
            “NATPAT Receives 2024 Innovation Award at City of Glen Eira Business Excellence Awards”
          </div>
          <div class='lav-news__logo'>
            <img height='33' src='${config.dir}/img/news-1.png' />
          </div>
        </div>

        <div class='lav-news__slide'>
          <div class='lav-news__caption'>
            “Revolutionizing family wellness, one sticker at a time, this year’s e-Revolutionaries Special category winner”
          </div>
          <div class='lav-news__logo'>
            <img src='${config.dir}/img/news-2.svg' />
          </div>
        </div>

        <div class='lav-news__slide'>
          <div class='lav-news__caption'>
            “The first thing I noticed when I opened the package were that these smelled seriously amazing. They're citrusy without being overpowering.”
          </div>
          <div class='lav-news__logo'>
            <img src='${config.dir}/img/news-3.svg' />
          </div>
        </div>

        <div class='lav-news__slide'>
          <div class='lav-news__caption'>
            “The textured surfaces activate skin receptors, triggering a calming response in the nervous system and providing an immediate way to shift attention from stressors”
          </div>
          <div class='lav-news__logo'>
            <img src='${config.dir}/img/news-4.png' />
          </div>
        </div>

        <div class='lav-news__slide'>
          <div class='lav-news__caption'>
            NATPAT is introducing a revolutionary approach to family wellness with their Stickers, designed to offer instant relief from anxiety and stress for both kids and adults 
          </div>
          <div class='lav-news__logo'>
            <img src='${config.dir}/img/news-5.png' />
          </div>
        </div>
      </div>
    </div>
  `

  _$('.lp-fp--main-review-section').insertAdjacentHTML('beforebegin', markup)

  visibilityEvent('.lav-news', () => {
    pushDataLayer(
      'exp_focuspatch_view_03',
      "We're in the news...for good reasons",
      'view',
      "We're in the news...for good reasons"
    )
  })

  waitFor(
    () => typeof $?.fn?.slick === 'function',
    () => {
      $('.lav-news__slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 1
        // adaptiveHeight: true
      })
    }
  )
}

function addModal() {
  initModal()

  const markup = /* html */ `
    <div class='lav-modal__close'>
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M17 1.00024L1.00024 17" stroke="white" stroke-width="2" stroke-linecap="round"/>
        <path d="M17 16.9998L1.00025 0.999999" stroke="white" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </div>
    <div class='lavm-trustpilot__title'>In over 5000 stores globally</div>
    <div class='lavm-trustpilot__images'>
      <img src='${config.dir}/img/lavm-1.svg' />
      <img src='${config.dir}/img/lavm-2.svg' />
    </div>
    <div class='lavm-trustpilot__map'>
      <img src='${config.dir}/img/lavm-3.png' />
    </div>
    <div class='lavm-trustpilot__button lav-btn'>Get IT NOW</div>
    <div class='lavm-trustpilot__caption ff-b'>
      <strong>30 Day Money Back Guarantee:</strong> If our stickers don’t help your active child, we’ll give you a full refund.
    </div>
    <div class='lavm-trustpilot__benefits'>
      <img src='${config.dir}/img/benefits.png' />
    </div>
  `

  new window.Modal('lavm-trustpilot', markup)

  // window.Modal.open('.lavm-trustpilot')
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
        ) {
          pushDataLayer(
            'exp_focuspatch_click_02',
            'Close',
            'click',
            'Pop up In over 5000 stores globally'
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
      pushDataLayer(
        'exp_focuspatch_click_01',
        'Trusted by top retailers and 5000+ stores worldwide',
        'click',
        'First screen'
      )
      pushDataLayer(
        'exp_focuspatch_view_01',
        'In over 5000 stores globally',
        'view',
        'Pop up In over 5000 stores globally'
      )
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
        z-index: 999999999999999999999;
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
        padding: 94px 0 0;
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
        position: absolute;
        right: 16px;
        top: -62px;
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
      .lavm-trustpilot {
        color: #fff;
        background: #0050D4;
        padding: 40px 27px;
        max-width: 100%;
      }
      .lavm-trustpilot:before {
        content: '';
        position: absolute;
        top: -20px;
        left: 0;
        right: 0;
        bottom: 0;
        height: 161px;
        background: url('${config.dir}/img/waves.png') center repeat-x;
        background-size: 100% auto;
        z-index: -1;
      }
      .lav-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50px;
        background: #11A821;
        color: #FFF;
        text-align: center;
        font-family: "DIN Next", sans-serif;
        font-size: 24px;
        font-weight: 500;
        line-height: 36px;
        text-transform: uppercase;
        height: 64px;
      }
      .lavm-trustpilot__title {
        color: #FFF;
        text-align: center;
        font-family: "Bebas", 'Bebas Fallback', sans-serif;
        font-size: 36px;
        font-style: normal;
        font-weight: 400;
        line-height: 42px;
        text-transform: uppercase;
      }
      .lavm-trustpilot__images {
        display: grid;
        gap: 24px;
        margin-top: 24px;
      }
      .lavm-trustpilot__images img {
        width: 100%;
      }
      .lavm-trustpilot__map {
        margin: 24px -27px 0;
      }
      .lavm-trustpilot__button {
        margin-top: 32px;
      }
      .lavm-trustpilot__caption {
        margin-top: 32px;
        font-size: 13px;
        font-weight: 500;
        line-height: 19px;
        text-align: center;
      }
      .lavm-trustpilot__benefits {
        margin-top: 12px;
        text-align: center;
      }
      .lavm-trustpilot__benefits img {
        max-width: 251px;
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
  const svgObj = {}

  return svgObj[name]
}
