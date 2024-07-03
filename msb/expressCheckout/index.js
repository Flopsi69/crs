console.debug('*** Experiment started ***')

// Config for Experiment
const config = {
  // dir: 'http://127.0.0.1:5500/msb/expressCheckout/',
  dir: 'https://flopsi69.github.io/crs/msb/expressCheckout/',
  clarity: ['set', '', 'variant_1'],
  debug: false
}

const orig = console.log
console.log = function (...args) {
  orig.apply(console, ['Debug:', ...args])
}

// Styles for Experiment
const styles = /* css */ `
.scom-klarna-checkout-buttons-wrapper {
  display: block!important;
}
.scExpressSeparator h6 {
  margin-top: 7px;
}
.lav-title {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 700;
  color: #212121;
  margin-bottom: 16px;
  font-size: 19px;
  line-height: 1;
}
.scom-klarna-checkout-buttons-content {
  display: grid!important;
  grid-template-columns: 1fr 1fr;
  gap: 9px;
  margin-bottom: 16px;
}
.scom-klarna-checkout-buttons-content > div {
  width: auto!important;
}
.scom-klarna-checkout-buttons-content label {
  margin-bottom: 0;
}
.checkout-klarna-index .scom-klarna-checkout-buttons-wrapper .scom-klarna-checkout-buttons-content .klarna-button-left {
  padding-right: 0;
}
`

const stylesEl = document.createElement('style')
stylesEl.classList.add('exp-styles')
stylesEl.innerHTML = styles

// *** Logic *** //
initExp()

async function initExp() {
  await waitFor(() => document.head && document.body, false, { ms: 50 })
  document.head.appendChild(stylesEl)

  if (!location.href.includes('checkout')) return

  console.debug('** InitExp **')

  await waitFor('.scom-klarna-checkout-buttons-wrapper', false, { ms: 50 })

  addTitle()
  function addTitle() {
    const html = /* html */ `
      <div class='lav-title'>
        ${getSvg('cart')}
        Express checkout
      </div>
    `

    $('.scom-klarna-checkout-buttons-content').insertAdjacentHTML(
      'beforebegin',
      html
    )
  }
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
  const svgObj = {
    cart: `
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
      <g clip-path="url(#clip0_37_7572)">
      <path d="M21.609 4.16073C21.324 3.82377 20.9248 3.61795 20.4849 3.58122L4.9923 2.2876C4.55239 2.25086 4.12468 2.38763 3.78768 2.67264C3.45205 2.95654 3.24653 3.3537 3.20864 3.79142L2.89694 6.71569H1.65236C0.741251 6.71569 0 7.45694 0 8.36804V18.0661C0 18.9772 0.741251 19.7185 1.65236 19.7185H17.1989C18.1101 19.7185 18.8513 18.9772 18.8513 18.0661V16.4929L19.403 16.539C19.4496 16.5429 19.4958 16.5448 19.5417 16.5448C20.3911 16.5448 21.1152 15.8913 21.1872 15.0299L21.9942 5.3654C22.0309 4.92553 21.8941 4.49773 21.609 4.16073ZM1.65236 7.57506H17.1989C17.6362 7.57506 17.992 7.9308 17.992 8.36804V9.25174H0.859372V8.36804C0.859372 7.9308 1.21511 7.57506 1.65236 7.57506ZM0.859372 10.1111H17.992V11.8938H0.859372V10.1111ZM17.1989 18.8591H1.65236C1.21511 18.8591 0.859372 18.5034 0.859372 18.0661V12.7532H17.992V18.0661C17.992 18.5034 17.6362 18.8591 17.1989 18.8591ZM21.1377 5.29386L20.3308 14.9583C20.2944 15.3941 19.9102 15.7191 19.4745 15.6826L18.8513 15.6306V8.36804C18.8513 7.45694 18.1101 6.71569 17.1989 6.71569H3.76121L4.06367 3.87804C4.06401 3.87478 4.06431 3.87155 4.06457 3.86825C4.10096 3.4325 4.48493 3.10749 4.9208 3.14401L20.4135 4.43762C20.6246 4.45524 20.8162 4.55402 20.9529 4.71576C21.0897 4.87749 21.1554 5.08275 21.1377 5.29386Z" fill="#212121"/>
      <path d="M16.194 14.0308H12.0586C11.8213 14.0308 11.6289 14.2231 11.6289 14.4604V17.1584C11.6289 17.3957 11.8213 17.5881 12.0586 17.5881H16.194C16.4313 17.5881 16.6237 17.3957 16.6237 17.1584V14.4604C16.6237 14.2231 16.4313 14.0308 16.194 14.0308ZM15.7643 16.7287H12.4883V14.8901H15.7643V16.7287Z" fill="#212121"/>
      </g>
      <defs>
      <clipPath id="clip0_37_7572">
      <rect width="22" height="22" fill="white"/>
      </clipPath>
      </defs>
      </svg>
    `
  }

  return svgObj[name]
}
