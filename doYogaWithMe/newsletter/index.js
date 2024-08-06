console.debug('*** Experiment started ***')

// Config for Experiment
const config = {
  dir: 'http://127.0.0.1:5500/doYogaWithMe/newsletter/',
  // dir: 'https://flopsi69.github.io/crs/doYogaWithMe/newsletter/',
  clarity: ['set', '', 'variant_1'],
  debug: true
}

const orig = console.log
console.log = function (...args) {
  orig.apply(console, ['Debug:', ...args])
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
    document.documentElement.classList.add('lav-modal-open')

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
    document.documentElement.classList.remove('lav-modal-open')

    $('.lav-modal')?.classList.remove('active')

    if (typeof cb === 'function') cb()

    setTimeout(() => {
      $('.lav-modal__inner.active')?.classList.remove('active')
    }, 400)
  }

  static addStyles() {
    const styles = /* css */ `
      .lav-modal {
        font-family: "Manrope", sans-serif;
        position: fixed;
        z-index: 999;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: #F6F6F6;
        transition: 0.35s;
        opacity: 0;
        pointer-events: none;
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
        width: 100%;
        height: 100%;
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
      .lav-modal__header {
        padding: 9px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid #E0E0E0;
        line-height: 0;
      }
      .lav-modal__header img {
        width: 244px;
      }
      .lav-modal__body {
        position: relative;
        padding: 48px;
      }
      .lav-plate {
        position: relative;
        z-index: 1;
        max-width: 494px;
        margin: auto;
        border-radius: 12px;
        background: #FFF;
        box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.15);
        padding: 42px;
        color: #272727;
        display: grid;
        box-sizing: border-box;
      }
      .lav-plate:before, .lav-plate:after {
        content: '';
        display: block;
        height: 100%;
        width: 10em;
        position: absolute;
        background-repeat: no-repeat;
        top: 0;
        background-position-y: center;
      }
      .lav-plate:before {
        left: -14em;
        background-image: url(/themes/custom/samsara/assets/img/register/left.svg);
      }
      .lav-plate:after {
        right: -15em;
        background-image: url(/themes/custom/samsara/assets/img/register/right.svg);
      }
      .lav-plate__title {
        font-size: 30px;
        font-weight: 700;
        line-height: 42px;
      }
      .lav-plate__caption {
        font-size: 20px;
        font-weight: 600;
        line-height: 30px;
        margin-top: 20px;
      }
      .lav-plate__list {
        margin-top: 20px;
      }
      .lav-plate__list-item {
        display: flex;
        gap: 16px;
        padding: 8px 0;
        font-size: 14px;
        font-weight: 400;
        line-height: 22px
      }
      .lav-plate__list-text {
        min-height: 28px;
        display: flex;
        align-items: center;
      }
      .lav-plate__list-item svg {
        flex-shrink: 0;
      }
      .lav-plate__list li + li {
        margin-top: 10px;
      }
      .lav-plate__btn {
        margin-top: 24px;
        width: 100%;
        min-height: 50px;
        font-size: 18px;
        font-weight: 700;
        text-transform: capitalize;
      }
      .lav-plate__decline {
        text-align: center;
        color: #555;
        font-size: 18px;
        font-weight: 600;
        line-height: 24px;
        margin-top: 18px;
      }
      .lav-plate__decline span {
        cursor: pointer;
        transition: .3s;
      }
      @media(hover:hover) {
        .lav-plate__decline:hover span {
          opacity: .8;
        }
        .lav-modal__close:hover {
          opacity: 0.5;
        }
      }
      .lav-modal-open {
        overflow: hidden;
      }

      @media(max-width: 1050px) {
        .lav-plate:before {
          left: -9em;
        }
        .lav-plate:after {
          right: -11em;
        }
      }
      @media(max-width: 768px) {
        .lav-plate:before {
          display: none;
        }
        .lav-plate:after {
          display: none;
        }
        .lav-modal__body {
          padding: 48px 20px 20px;
        }
        .lav-modal__header img {
          width: 150px;
        }
        .lav-plate {
          padding: 20px;
        }
        .lav-plate__title {
          font-size: 22px;
          line-height: normal;
        }
        .lav-plate__caption {
          font-size: 16px;
          line-height: 24px;
          margin-top: 16px;
        }
        .lav-plate__list {
          margin-top: 16px;
        }
        .lav-plate__btn {
          margin-top: 16px;
        }
        .lav-plate__decline {
          margin-top: 16px;
          font-size: 14px;
        }
      }
    `

    const stylesEl = document.createElement('style')
    stylesEl.classList.add('exp-modal')
    stylesEl.innerHTML = styles
    document.head.appendChild(stylesEl)
  }
}

// Styles for Experiment
const styles = ``

const stylesEl = document.createElement('style')
stylesEl.classList.add('exp-styles')

// *** Logic *** //
initExp()

async function initExp() {
  await waitFor(() => document.head && document.body, false, { ms: 50 })

  document.head.appendChild(stylesEl)

  console.debug('** InitExp **')

  if (location.href.includes('/yogi/register')) {
    const styles = `.field--name-field-ac-newsletter-reg { display: none; } .captcha { margin-top: 1rem; } `

    stylesEl.innerHTML = styles
    document.head.appendChild(stylesEl)

    return
  }

  createModal()
  waitFor('.sfc-newsletterSignup__section', addCta)
}

function createModal() {
  const markup = /*html*/ `
    <div class='lav-modal__header'>
      <img alt="DoYogaWithMe Logo" width="192px" src="/themes/custom/samsara/logo.png">
    </div>
    <div class='lav-modal__body'>
      <div class='lav-plate lav-modal__plate'>
        <div class='lav-plate__title'>Enhance Your Yoga Journey with Our Weekly Newsletter</div>
        <div class='lav-plate__caption'>Join a community of XX,XXX yogis.</div>
      
        <div class='lav-plate__list'>
          <div class='lav-plate__list-item'>
            ${getSvg('play2')}
            <div class='lav-plate__list-text'>
              <span>Discover new <strong>classes</strong> and <strong>challenges</strong></span>
            </div>
          </div>
          <div class='lav-plate__list-item'>
            ${getSvg('heart2')}
            <div class='lav-plate__list-text'>
              <span>Engage with vibrant <strong>community forums</strong></span>
            </div>
          </div>
          <div class='lav-plate__list-item'>
            ${getSvg('calendar2')}
            <div class='lav-plate__list-text'>
              <span>Participate in <strong>exclusive events</strong></span>
            </div>
          </div>
          <div class='lav-plate__list-item'>
            ${getSvg('envelope2')}
            <div class='lav-plate__list-text'>
              <span>Receive the monthly <strong>'Reflect and Connect'</strong> newsletter to deepen your practice!</span>
            </div>
          </div>
        </div>

        <button class="lav-plate__btn sfc-button">Yes, sign me up</button>

        <div class='lav-plate__decline'>
          <span class='lav-modal__close'>No, I’m not interested</span>
        </div>
      </div>
    </div>
  `

  new Modal('lav-subscribe', markup)

  Modal.open('.lav-subscribe')
}

function addCta() {
  const styles = /*css*/ `
    .sfc-newsletterSignup__section {
      // display: none!important;
    }
    .lav-cta {
      padding: 66px 0;
      background: linear-gradient(180deg, #144176 0%, #002D62 100%), #003A67;
      color: #fff;
      text-align: center;
    }
    .lav-cta__container {
      max-width: 1072px;
      padding: 0 16px;
      margin: auto;
      box-sizing: border-box;
    }
    .lav-cta__title {
      font-size: 28px;
      font-weight: 700;
      line-height: 32px;
    }
    .lav-cta__caption {
      font-size: 18px;
      font-weight: 500;
      line-height: 28px;
      margin-top: 10px;
    }
    .lav-cta__toggler {
      margin-top: 40px;
    }
    .lav-items {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.08);
    }
    .lav-item {
      padding: 30px 14px;
    }
    .lav-item + .lav-item {
      background: url('${config.dir}/img/divider.svg') left no-repeat;
    }
    .lav-cta__grid {
      display: grid;
      gap: 22px;
      grid-template-columns: repeat(4, 1fr);
    }
    .lav-col {
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.08);
      padding: 20px 14px;
    }
    .lav-col__icon, .lav-item__icon {
      line-height: 0;
    }
    .lav-item__icon svg {
      width: 38px;
      height: 38px;
    }
    .lav-col__caption, .lav-item__caption {
      font-size: 14px;
      line-height: 22px;
      margin-top: 16px;
      padding: 0 10px;
    }
    .lav-auth__btn {
      margin: 40px auto 0;
      max-width: 410px;
      padding: 4px 10px;
      min-height: 48px;
      width: 100%;
      font-size: 18px;
      font-weight: 700;
      text-transform: capitalize;
    }
    .lav-form {
      color: #fff;
      padding: 20px 24px 30px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 20px;
      align-items: flex-end;
      margin-top: 22px;
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.08);
      text-align: left;
    }
    .lav-form__label {
      font-size: 14px;
      font-weight: 600;
      line-height: 1;
      color: #fff;
    }
    .lav-form__input {
      border-radius: 30px!important;
      border: 1px solid #E0E0E0;
      background: #FFF;
      height: 48px;
      padding: 8px 16px!important;
      margin-top: 6px;
      width: 100%;
      transition: .3s;
      font-family: Manrope;
      font-size: 14px;
      font-weight: 500;
      line-height: 24px;
    }
    .lav-form__input::placeholder {
      color: #A5A5A5;
    }
    .lav-form__btn {
      font-size: 18px;
      font-weight: 700;
      text-transform: capitalize;
      padding: 4px;
      min-height: 48px;
    }

    @media(max-width: 992px) {
      .lav-cta__grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media(max-width: 768px) {
      .lav-cta {
        text-align: left;
        padding: 40px 0;
      }
      .lav-cta__title {
        line-height: 36px;
      }
      .lav-cta__toggler {
        margin-top: 32px;
      }
      .lav-cta__grid {
        gap: 24px;
        grid-template-columns: 1fr;
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.08);
        padding: 24px 12px;
      }
      .lav-items {
        gap: 24px;
        grid-template-columns: 1fr;
        padding: 24px 12px;
      }
      .lav-item {
        padding: 0;
        background: none!important;
        display: flex;
        align-items: flex-start;
        gap: 22px;
      }
      .lav-col {
        background: none;
        border-radius: 0;
        display: flex;
        align-items: flex-start;
        gap: 22px;
        padding: 0;
      }
      .lav-col__icon {
        flex-shrink: 0;
      }
      .lav-col__icon svg, .lav-item__icon svg {
        width: 26px;
        height: 26px;
      }
      .lav-col__caption,  .lav-item__caption {
        padding: 0;
        margin-top: 0;
      }
      .lav-auth__btn {
        margin-top: 32px;
        min-height: 50px;
      }
      .lav-form {
        margin-top: 32px;
        padding: 0;
        border-radius: 0;
        background: none;
        grid-template-columns: 1fr;
        gap: 10px;
      }
      .lav-form__label {
        line-height: 24px;
      }
      .lav-form__btn {
        margin-top: 30px;
        min-height: 50px;
      }
    }
  `

  stylesEl.innerHTML = styles
  document.head.appendChild(stylesEl)

  const markup = /*html*/ `
    <div class="lav-cta">
      <div class='lav-cta__container'>
        <div class="lav-cta__title">Enhance Your Yoga Journey with Our Weekly Newsletter</div>
        <div class="lav-cta__caption">Join a community of XX,XXX yogis.</div>

        <div class='lav-auth lav-cta__toggler'>
          <div class="lav-cta__grid">
            <div class="lav-cta__col lav-col">
              <div class="lav-col__icon">
                ${getSvg('play')}
              </div>
              <div class="lav-col__caption">Discover new <strong>classes</strong> and <strong>challenges</strong></div>
            </div>

            <div class="lav-cta__col lav-col">
              <div class="lav-col__icon">
                ${getSvg('heart')}
              </div>
              <div class="lav-col__caption">Engage with vibrant <strong>community forums</strong></div>
            </div>

            <div class="lav-cta__col lav-col">
              <div class="lav-col__icon">
                ${getSvg('calendar')}
              </div>
              <div class="lav-col__caption">Participate in <strong>exclusive events</strong></div>
            </div>

            <div class="lav-cta__col lav-col">
              <div class="lav-col__icon">
                ${getSvg('envelope')}
              </div>
              <div class="lav-col__caption">Receive the monthly <strong>'Reflect and Connect'</strong> newsletter to deepen your practice!</div>
            </div>
          </div>

          <button class="lav-auth__btn sfc-button">Sign me up</button>
        </div>

        <div class='lav-no-auth lav-cta__toggler'>
          <div class='lav-items'>
            <div class="lav-item">
              <div class="lav-item__icon">
                ${getSvg('play')}
              </div>
              <div class="lav-item__caption">Discover new <strong>classes</strong> and <strong>challenges</strong></div>
            </div>

            <div class="lav-item">
              <div class="lav-item__icon">
                ${getSvg('heart')}
              </div>
              <div class="lav-item__caption">Engage with vibrant <strong>community forums</strong></div>
            </div>

            <div class="lav-item">
              <div class="lav-item__icon">
                ${getSvg('calendar')}
              </div>
              <div class="lav-item__caption">Participate in <strong>exclusive events</strong></div>
            </div>

            <div class="lav-item">
              <div class="lav-item__icon">
                ${getSvg('envelope')}
              </div>
              <div class="lav-item__caption">Receive the monthly <strong>'Reflect and Connect'</strong> newsletter to deepen your practice!</div>
            </div>
          </div>

          <form class='lav-form'>
            <div class='lav-form__group'>
              <label for='lav-name' class='lav-form__label'>Full name</label>
              <input class='lav-form__input' id='lav-name' type='text' required placeholder='Full name'>
            </div>

            <div class='lav-form__group'>
              <label for='lav-email' class='lav-form__label'>Email address</label>
              <input class='lav-form__input' id='lav-email' type='email' required placeholder='Your email'>
            </div>

            <button type='submit' class="lav-form__btn lav-no-auth__btn sfc-button">Sign me up</button>
          </form>
        </div>

      <div>
    </div>
  `

  $('.sfc-newsletterSignup__section').insertAdjacentHTML('beforebegin', markup)

  if (isAuth()) {
    $('.lav-cta .lav-no-auth').remove()
  } else {
    $('.lav-cta .lav-auth').remove()
  }

  $('.lav-form')?.addEventListener('submit', function (e) {
    e.preventDefault()

    if (this.checkValidity()) {
      $('.lav-form__btn').disabled = true
      const name = $('#lav-name').value
      const email = $('#lav-email').value

      $('.sfc-newsletterSignup__section #edit-first-name').value = name
      $('.sfc-newsletterSignup__section #edit-email').value = email

      console.log('valid')
      // $('.sfc-newsletterSignup__section .js-form-submit').click()
    } else {
      this.reportValidity()
    }
  })
}

function isAuth() {
  return !!$('.user-logged-in')
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
    play: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M45.8398 16.6367C45.8398 15.0102 44.5218 13.6914 42.8945 13.6914H4.60547C2.97818 13.6914 1.66016 15.0102 1.66016 16.6367V43.1445C1.66016 44.7711 2.97818 46.0898 4.60547 46.0898H42.8945C44.5218 46.0898 45.8398 44.7711 45.8398 43.1445V16.6367ZM31.8938 31.1394C32.3209 30.8707 32.5859 30.3987 32.5859 29.8906C32.5859 29.3826 32.3209 28.9106 31.8938 28.6418L20.1126 21.2785C19.6561 20.995 19.0891 20.9796 18.6178 21.2395C18.1466 21.4987 17.8594 21.992 17.8594 22.5273V37.2539C17.8594 37.7892 18.1466 38.2826 18.6178 38.5417C19.0891 38.8017 19.6561 38.7862 20.1126 38.5027L31.8938 31.1394Z" fill="white"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.02344 10.7461H38.4766C39.2895 10.7461 39.9492 10.0863 39.9492 9.27344C39.9492 8.46053 39.2895 7.80078 38.4766 7.80078H9.02344C8.21053 7.80078 7.55078 8.46053 7.55078 9.27344C7.55078 10.0863 8.21053 10.7461 9.02344 10.7461Z" fill="white"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4413 4.85547H34.0585C34.8713 4.85547 35.5311 4.19572 35.5311 3.38281C35.5311 2.56991 34.8713 1.91016 34.0585 1.91016H13.4413C12.6285 1.91016 11.9688 2.56991 11.9688 3.38281C11.9688 4.19572 12.6285 4.85547 13.4413 4.85547Z" fill="white"/>
</svg>`,
    play2: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.6641 10.4453C24.6641 9.66008 24.0278 9.02344 23.2422 9.02344H4.75781C3.97223 9.02344 3.33594 9.66008 3.33594 10.4453V23.2422C3.33594 24.0274 3.97223 24.6641 4.75781 24.6641H23.2422C24.0278 24.6641 24.6641 24.0274 24.6641 23.2422V10.4453ZM17.9315 17.4466C18.1377 17.3169 18.2656 17.089 18.2656 16.8438C18.2656 16.5985 18.1377 16.3706 17.9315 16.2409L12.244 12.6862C12.0236 12.5493 11.7499 12.5419 11.5224 12.6673C11.2949 12.7925 11.1562 13.0306 11.1562 13.2891V20.3984C11.1562 20.6569 11.2949 20.895 11.5224 21.0202C11.7499 21.1456 12.0236 21.1382 12.244 21.0013L17.9315 17.4466Z" fill="#027DB8"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.89062 7.60156H21.1094C21.5018 7.60156 21.8203 7.28306 21.8203 6.89062C21.8203 6.49819 21.5018 6.17969 21.1094 6.17969H6.89062C6.49819 6.17969 6.17969 6.49819 6.17969 6.89062C6.17969 7.28306 6.49819 7.60156 6.89062 7.60156Z" fill="#027DB8"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.0234 4.75781H18.9765C19.3689 4.75781 19.6874 4.43931 19.6874 4.04688C19.6874 3.65444 19.3689 3.33594 18.9765 3.33594H9.0234C8.631 3.33594 8.3125 3.65444 8.3125 4.04688C8.3125 4.43931 8.631 4.75781 9.0234 4.75781Z" fill="#027DB8"/>
</svg>
`,
    heart: `<svg xmlns="http://www.w3.org/2000/svg" width="55" height="54" viewBox="0 0 55 54" fill="none">
  <g clip-path="url(#clip0_1079_82140)">
    <path d="M9.62109 36.0356C12.1183 38.2264 15.0405 40.6067 17.7799 42.7723V40.3136C17.7799 37.0908 19.3985 34.2393 21.8651 32.5281C20.9391 30.1261 18.6011 28.4725 15.9541 28.4725C12.4621 28.4725 9.62109 31.3135 9.62109 34.8054V36.0356Z" fill="white"/>
    <path d="M54.0189 20.2977C54.0189 11.2853 46.713 3.97925 37.7006 3.97925C33.724 3.97925 30.0809 5.40314 27.2497 7.76699C24.4185 5.40325 20.7754 3.97925 16.7988 3.97925C7.78638 3.97935 0.480469 11.2854 0.480469 20.2977C0.480469 24.1445 1.90687 27.607 4.03827 30.47C4.61747 31.2481 5.50817 32.2052 6.60843 33.2737C7.0611 30.5026 8.72016 28.132 11.0274 26.7208C9.26151 25.2852 8.13061 23.0971 8.13061 20.6492C8.13061 16.3354 11.6401 12.826 15.9539 12.826C19.7788 12.826 22.9692 15.5858 23.6437 19.2183C24.7237 18.6547 25.9496 18.3341 27.2497 18.3341C28.5498 18.3341 29.7757 18.6547 30.8557 19.2183C31.5303 15.5859 34.7206 12.826 38.5455 12.826C42.8592 12.826 46.3687 16.3354 46.3687 20.6492C46.3687 23.0971 45.2378 25.285 43.472 26.7208C45.7792 28.1319 47.4383 30.5026 47.891 33.2737C48.9912 32.2053 49.8819 31.2481 50.4611 30.47C52.5925 27.607 54.0189 24.1445 54.0189 20.2977Z" fill="white"/>
    <path d="M20.6402 20.6493C20.6402 18.0654 18.5379 15.9631 15.9539 15.9631C13.3698 15.9631 11.2676 18.0654 11.2676 20.6493C11.2676 23.2334 13.3698 25.3356 15.9539 25.3356C18.5379 25.3356 20.6402 23.2334 20.6402 20.6493Z" fill="white"/>
    <path d="M44.8788 36.0357V34.8056C44.8788 31.3135 42.0379 28.4727 38.5459 28.4727C35.8987 28.4727 33.5607 30.1261 32.6348 32.5283C35.1014 34.2395 36.72 37.091 36.72 40.3139V42.7725C39.4594 40.6069 42.3816 38.2265 44.8788 36.0357Z" fill="white"/>
    <path d="M38.5457 15.963C35.9617 15.963 33.8594 18.0652 33.8594 20.6492C33.8594 23.2333 35.9616 25.3355 38.5457 25.3355C41.1297 25.3355 43.2318 23.2333 43.2318 20.6492C43.2318 18.0653 41.1296 15.963 38.5457 15.963Z" fill="white"/>
    <path d="M33.5829 45.224V40.3137C33.5829 36.8216 30.742 33.9807 27.25 33.9807C23.758 33.9807 20.917 36.8217 20.917 40.3137V45.2239C24.5267 48.0145 27.2499 50.0206 27.2499 50.0206C27.2499 50.0206 29.973 48.0145 33.5829 45.224Z" fill="white"/>
    <path d="M27.9921 30.7851C30.5467 30.371 32.2818 27.9645 31.8677 25.4101C31.4536 22.8556 29.0471 21.1205 26.4926 21.5346C23.938 21.9487 22.2029 24.3552 22.617 26.9097C23.0311 29.4642 25.4376 31.1993 27.9921 30.7851Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_1079_82140">
      <rect width="53.5385" height="53.5385" fill="white" transform="translate(0.480469 0.230713)"/>
    </clipPath>
  </defs>
</svg>`,
    heart2: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
<g clip-path="url(#clip0_1078_52543)">
<path d="M5.49023 18.3622C6.69577 19.4198 8.1065 20.5689 9.42895 21.6144V20.4275C9.42895 18.8716 10.2103 17.495 11.4011 16.6689C10.9541 15.5093 9.82542 14.7111 8.54755 14.7111C6.86175 14.7111 5.49023 16.0826 5.49023 17.7683V18.3622Z" fill="#027DB8"/>
<path d="M26.9233 10.7645C26.9233 6.41364 23.3963 2.8866 19.0455 2.8866C17.1257 2.8866 15.367 3.57399 14.0002 4.71516C12.6335 3.57404 10.8747 2.8866 8.95498 2.8866C4.60414 2.88665 1.07715 6.41369 1.07715 10.7645C1.07715 12.6216 1.76576 14.2931 2.79471 15.6752C3.07432 16.0509 3.50431 16.5129 4.03547 17.0287C4.254 15.691 5.05493 14.5465 6.16879 13.8653C5.31627 13.1722 4.77032 12.1159 4.77032 10.9341C4.77032 8.85166 6.46456 7.15742 8.54709 7.15742C10.3936 7.15742 11.9338 8.48976 12.2594 10.2434C12.7808 9.97132 13.3726 9.81655 14.0002 9.81655C14.6279 9.81655 15.2197 9.97132 15.7411 10.2434C16.0667 8.48981 17.6069 7.15742 19.4534 7.15742C21.5358 7.15742 23.2301 8.85166 23.2301 10.9341C23.2301 12.1159 22.6841 13.1722 21.8317 13.8653C22.9455 14.5465 23.7464 15.691 23.965 17.0287C24.4961 16.513 24.9261 16.0509 25.2057 15.6752C26.2347 14.2931 26.9233 12.6216 26.9233 10.7645Z" fill="#027DB8"/>
<path d="M10.8098 10.9343C10.8098 9.68686 9.79498 8.672 8.5475 8.672C7.30002 8.672 6.28516 9.68686 6.28516 10.9343C6.28516 12.1818 7.30002 13.1966 8.5475 13.1966C9.79498 13.1966 10.8098 12.1818 10.8098 10.9343Z" fill="#027DB8"/>
<path d="M22.5105 18.3621V17.7682C22.5105 16.0824 21.139 14.7109 19.4532 14.7109C18.1753 14.7109 17.0466 15.5091 16.5996 16.6688C17.7904 17.495 18.5718 18.8715 18.5718 20.4274V21.6143C19.8942 20.5688 21.305 19.4197 22.5105 18.3621Z" fill="#027DB8"/>
<path d="M19.4538 8.67175C18.2063 8.67175 17.1914 9.68662 17.1914 10.934C17.1914 12.1815 18.2063 13.1964 19.4538 13.1964C20.7012 13.1964 21.716 12.1815 21.716 10.934C21.716 9.68667 20.7012 8.67175 19.4538 8.67175Z" fill="#027DB8"/>
<path d="M17.0579 22.7978V20.4273C17.0579 18.7415 15.6865 17.37 14.0007 17.37C12.3149 17.37 10.9434 18.7415 10.9434 20.4273V22.7977C12.686 24.1449 14.0006 25.1134 14.0006 25.1134C14.0006 25.1134 15.3152 24.1449 17.0579 22.7978Z" fill="#027DB8"/>
<path d="M14.3592 15.8273C15.5924 15.6274 16.4301 14.4656 16.2302 13.2324C16.0303 11.9993 14.8685 11.1616 13.6353 11.3615C12.4021 11.5614 11.5644 12.7232 11.7643 13.9564C11.9642 15.1896 13.126 16.0272 14.3592 15.8273Z" fill="#027DB8"/>
</g>
<defs>
<clipPath id="clip0_1078_52543">
<rect width="25.8462" height="25.8462" fill="white" transform="translate(1.07715 1.0769)"/>
</clipPath>
</defs>
</svg>`,
    calendar: `<svg xmlns="http://www.w3.org/2000/svg" width="59" height="58" viewBox="0 0 59 58" fill="none">
  <path d="M28.626 42.195C28.626 48.9194 34.0816 54.3751 40.8059 54.3751C47.5122 54.3751 52.9678 48.9194 52.9678 42.195C52.9678 35.4887 47.5122 30.0332 40.8059 30.0332C34.0816 30.0332 28.626 35.4887 28.626 42.195ZM45.7178 38.4069C46.4247 39.1137 46.4066 40.2556 45.6816 40.9625L40.4615 46.0375C40.1353 46.3637 39.6822 46.5451 39.2109 46.5451H39.0116C38.4678 46.4726 37.9784 46.1825 37.6885 45.7294L35.6585 42.6481C35.1148 41.7963 35.3504 40.6726 36.1841 40.1288C37.0179 39.585 38.1416 39.8206 38.6853 40.6544L39.5191 41.9051L43.1623 38.3707C43.8691 37.6638 45.0291 37.6819 45.7178 38.4069Z" fill="white"/>
  <path d="M6.53223 16.1312V17.9618H47.4041V16.1312C47.4041 11.5999 43.7248 7.92062 39.2115 7.92062H37.0464V5.4375C37.0464 4.43655 36.2357 3.625 35.2339 3.625C34.232 3.625 33.4214 4.43655 33.4214 5.4375V7.92062H20.5126V5.4375C20.5126 4.43655 19.7019 3.625 18.7001 3.625C17.6983 3.625 16.8876 4.43655 16.8876 5.4375V7.92062H14.7248C10.2115 7.92062 6.53223 11.5999 6.53223 16.1312Z" fill="white"/>
  <path d="M6.53223 40.6C6.53223 45.1313 10.2115 48.8107 14.7248 48.8107H26.4697C25.5272 46.7989 25.0016 44.5513 25.0016 42.195C25.0016 33.4951 32.0884 26.4082 40.8066 26.4082C43.1629 26.4082 45.3922 26.9338 47.4041 27.8582V21.5869H6.53223V40.6ZM26.9772 27.7495H26.9953C28.0103 27.7495 28.8078 28.5651 28.8078 29.562C28.8078 30.5588 28.0103 31.3745 26.9953 31.3745C25.9985 31.3745 25.1828 30.5588 25.1828 29.562C25.1828 28.5651 25.9803 27.7495 26.9772 27.7495ZM17.6066 27.7495H17.6247C18.6216 27.7495 19.4372 28.5651 19.4372 29.562C19.4372 30.5588 18.6216 31.3745 17.6247 31.3745C16.6279 31.3745 15.8122 30.5588 15.8122 29.562C15.8122 28.5651 16.6097 27.7495 17.6066 27.7495ZM17.6066 35.38H17.6247C18.6216 35.38 19.4372 36.1957 19.4372 37.1925C19.4372 38.2075 18.6216 39.005 17.6247 39.005C16.6279 39.005 15.8122 38.2075 15.8122 37.1925C15.8122 36.1957 16.6097 35.38 17.6066 35.38Z" fill="white"/>
</svg>`,
    calendar2: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <path d="M13.457 20.37C13.457 23.6163 16.0908 26.25 19.337 26.25C22.5745 26.25 25.2083 23.6163 25.2083 20.37C25.2083 17.1325 22.5745 14.4988 19.337 14.4988C16.0908 14.4988 13.457 17.1325 13.457 20.37ZM21.7083 18.5413C22.0495 18.8825 22.0408 19.4337 21.6908 19.775L19.1708 22.225C19.0133 22.3825 18.7945 22.47 18.567 22.47H18.4708C18.2083 22.435 17.972 22.295 17.832 22.0763L16.852 20.5887C16.5895 20.1775 16.7033 19.635 17.1058 19.3725C17.5083 19.11 18.0508 19.2237 18.3133 19.6263L18.7158 20.23L20.4745 18.5238C20.8158 18.1825 21.3758 18.1913 21.7083 18.5413Z" fill="#027DB8"/>
  <path d="M2.79102 7.78747V8.67123H22.5223V7.78747C22.5223 5.59997 20.746 3.82375 18.5672 3.82375H17.522V2.625C17.522 2.14178 17.1306 1.75 16.647 1.75C16.1633 1.75 15.772 2.14178 15.772 2.625V3.82375H9.54017V2.625C9.54017 2.14178 9.14881 1.75 8.66517 1.75C8.18153 1.75 7.79017 2.14178 7.79017 2.625V3.82375H6.74603C4.56724 3.82375 2.79102 5.59997 2.79102 7.78747Z" fill="#027DB8"/>
  <path d="M2.79102 19.6C2.79102 21.7875 4.56724 23.5638 6.74603 23.5638H12.416C11.961 22.5925 11.7073 21.5075 11.7073 20.37C11.7073 16.17 15.1285 12.7488 19.3372 12.7488C20.4748 12.7488 21.551 13.0025 22.5223 13.4488V10.4213H2.79102V19.6ZM12.661 13.3963H12.6697C13.1597 13.3963 13.5447 13.79 13.5447 14.2713C13.5447 14.7525 13.1597 15.1463 12.6697 15.1463C12.1885 15.1463 11.7947 14.7525 11.7947 14.2713C11.7947 13.79 12.1797 13.3963 12.661 13.3963ZM8.13725 13.3963H8.14601C8.62725 13.3963 9.02101 13.79 9.02101 14.2713C9.02101 14.7525 8.62725 15.1463 8.14601 15.1463C7.66477 15.1463 7.27101 14.7525 7.27101 14.2713C7.27101 13.79 7.65601 13.3963 8.13725 13.3963ZM8.13725 17.08H8.14601C8.62725 17.08 9.02101 17.4738 9.02101 17.955C9.02101 18.445 8.62725 18.83 8.14601 18.83C7.66477 18.83 7.27101 18.445 7.27101 17.955C7.27101 17.4738 7.65601 17.08 8.13725 17.08Z" fill="#027DB8"/>
</svg>`,
    envelope: `<svg xmlns="http://www.w3.org/2000/svg" width="59" height="58" viewBox="0 0 59 58" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M47.9107 21.1625L51.083 18.4821C50.9197 18.3546 50.7498 18.2357 50.5741 18.1259L47.9107 16.4295V21.1625ZM47.9107 25.6071L52.8643 21.417C52.9439 21.745 52.9893 22.0804 53 22.4179V47.6607C53 49.0105 52.4638 50.305 51.5094 51.2594C50.555 52.2138 49.2605 52.75 47.9107 52.75H10.5893C9.23952 52.75 7.94504 52.2138 6.99062 51.2594C6.03619 50.305 5.5 49.0105 5.5 47.6607V22.4179C5.51066 22.0804 5.55614 21.745 5.63571 21.417L10.5893 25.6071L25.9929 38.6527C26.567 39.1176 27.2313 39.4584 27.9437 39.6536C28.229 39.7209 28.5179 39.7719 28.8089 39.8063H29.6911C29.9821 39.7719 30.271 39.7209 30.5562 39.6536C31.275 39.4527 31.9448 39.1063 32.5241 38.6357L47.9107 25.6071ZM13.9821 24.0295L28.1643 36.0402C28.4691 36.2941 28.8533 36.4331 29.25 36.4331C29.6467 36.4331 30.0309 36.2941 30.3357 36.0402L44.5179 24.0295V10.3393C44.5179 8.98952 43.9817 7.69504 43.0272 6.74062C42.0728 5.78619 40.7783 5.25 39.4286 5.25H19.0714C17.7217 5.25 16.4272 5.78619 15.4728 6.74062C14.5183 7.69504 13.9821 8.98952 13.9821 10.3393V24.0295ZM7.90893 18.1259L10.5893 16.4295V21.1625L7.41696 18.533C7.57322 18.3882 7.73746 18.2523 7.90893 18.1259ZM29.2497 12.0356C29.2497 12.0356 22.8199 17.5387 29.2497 23.9106C35.6796 17.5387 29.2497 12.0356 29.2497 12.0356ZM31.1852 23.7683C38.2508 22.665 37.7229 15.5137 37.7229 15.5137C37.7229 15.5137 35.4713 15.3505 33.2895 16.4267C33.3721 16.8373 33.4263 17.2661 33.4427 17.7114C33.4861 18.8902 33.262 20.0641 32.7764 21.2004C32.4027 22.0753 31.8693 22.935 31.1852 23.7683ZM25.723 21.2005C26.0968 22.0753 26.6301 22.935 27.3142 23.7683C20.2486 22.665 20.7765 15.5138 20.7765 15.5138C20.7765 15.5138 23.0281 15.3505 25.2099 16.4267C25.1273 16.8373 25.0732 17.2661 25.0568 17.7115C25.0134 18.8902 25.2375 20.0641 25.723 21.2005Z" fill="white"/>
</svg>`,
    envelope2: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M23.625 9.9575L25.2613 8.575C25.177 8.50921 25.0894 8.44788 24.9987 8.39125L23.625 7.51625V9.9575ZM23.625 12.25L26.18 10.0887C26.221 10.258 26.2445 10.431 26.25 10.605V23.625C26.25 24.3212 25.9734 24.9889 25.4812 25.4812C24.9889 25.9734 24.3212 26.25 23.625 26.25H4.375C3.67881 26.25 3.01113 25.9734 2.51884 25.4812C2.02656 24.9889 1.75 24.3212 1.75 23.625V10.605C1.7555 10.431 1.77896 10.258 1.82 10.0887L4.375 12.25L12.32 18.9788C12.6161 19.2185 12.9588 19.3943 13.3263 19.495C13.4734 19.5297 13.6224 19.556 13.7725 19.5738H14.2275C14.3776 19.556 14.5266 19.5297 14.6737 19.495C15.0445 19.3914 15.39 19.2127 15.6888 18.97L23.625 12.25ZM6.125 11.4362L13.44 17.6312C13.5972 17.7622 13.7954 17.8339 14 17.8339C14.2046 17.8339 14.4028 17.7622 14.56 17.6312L21.875 11.4362V4.375C21.875 3.67881 21.5984 3.01113 21.1062 2.51884C20.6139 2.02656 19.9462 1.75 19.25 1.75H8.75C8.05381 1.75 7.38613 2.02656 6.89384 2.51884C6.40156 3.01113 6.125 3.67881 6.125 4.375V11.4362ZM2.9925 8.39125L4.375 7.51625V9.9575L2.73875 8.60125C2.81934 8.52656 2.90406 8.45645 2.9925 8.39125ZM14 5.25C14 5.25 10.6835 8.08843 14 11.375C17.3165 8.08843 14 5.25 14 5.25ZM14.9983 11.3016C18.6426 10.7325 18.3704 7.04396 18.3704 7.04396C18.3704 7.04396 17.209 6.95975 16.0837 7.51484C16.1263 7.72666 16.1542 7.9478 16.1627 8.1775C16.1851 8.78551 16.0695 9.39098 15.819 9.97711C15.6263 10.4283 15.3512 10.8718 14.9983 11.3016ZM12.181 9.97713C12.3738 10.4283 12.6488 10.8718 13.0017 11.3016C9.35734 10.7325 9.6296 7.04399 9.6296 7.04399C9.6296 7.04399 10.7909 6.95977 11.9163 7.51486C11.8737 7.72666 11.8458 7.9478 11.8373 8.17753C11.8149 8.78553 11.9305 9.391 12.181 9.97713Z" fill="#027DB8"/>
</svg>`
  }

  return svgObj[name]
}
