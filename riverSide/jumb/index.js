console.debug('*** Experiment started ***')

// Config for Experiment
const config = {
  // dir: 'http://127.0.0.1:5500/riverSide/jumb',
  dir: 'https://flopsi69.github.io/crs/riverSide/jumb',
  clarity: ['set', 'exp_hero_pers', 'variant_1'],
  debug: false
}

// Styles for Experiment
const styles = /* css */ `
.hero-video__wrapper {
  display: none;
}
.home-hero__content .rs-button {
  max-width: 360px;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 17px;
  font-size: 16px;
  font-weight: 600;
  line-height: 17px;
}
.home-hero__content .rs-button.lav-animate-btn {
  animation: lav-animate-btn 1s;
}
@keyframes lav-animate-btn {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

@media(hover:hover) {
  .home-hero__content .rs-button:hover {
    background: #8864FC;
  }
}
.home-hero__content {
  max-width: 640px;
  flex-shrink: 0;
  margin-top: 40px;
}
.home-hero_title-xs {
  display: none;
}
.home-hero__checkbox {
  grid-column-gap: 10px;
  padding: 7px 10px;
  padding-right: 17px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid transparent;
  color: #FFF;
  font-size: 14px;
  font-weight: 300;
  line-height: 22px;
  transition: .3s;
}
.home-hero__checkbox.is--checked {
  border-color: rgba(150, 113, 255, 0.70);
  background: rgba(150, 113, 255, 0.20);
}
.home-hero__checkbox-icon {
  width: 16px;
  height: 16px;
  max-width: 16px;
}
.home-hero_title-sm {
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
}
.home-hero__checkbox-wrapper {
  gap: 14px;
  margin-top: 16px;
  margin-bottom: 40px;
}
.home-hero__intro {
  margin-bottom: 32px;
  margin-top: 24px;
  color: #FFF;
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
}
.home-hero__content .h1--80 {
  font-size: 72px;
  font-weight: 800;
  line-height: 80px;
}
.home-hero {
  position: relative;
}
.r-home-brands-section.rs-brands-section.home-v2-brands-section, .rs-section.is--made-with, .rs-section.is--made-with + .rs-section, .home-hero {
  background: #101010;
}
body > div:not([class]) {
  overflow: hidden;
}
.home-hero {
  padding-bottom: 150px;
}
.lav-circle-bg {
  pointer-events: none;
  position: absolute;
  top: -202px;
  right: -210px;
  left: 57vw;
  border-radius: 860px;
  width: 860px;
  height: 860px;
  opacity: 0.5;
  background: #9671FF;
  filter: blur(177px);
}
.lav-glitch-bg {
  pointer-events: none;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  height: 1170px;
  width: 100%;
  background: url('${config.dir}/img/bg.png') 100% top;
}
.home-hero .w-layout-blockcontainer {
  display: flex;
}
.lav-jumb__image {
  position: relative;
  line-height: 0;
}
.lav-jumb__image-main {
  position: absolute;
  left: 0;
  top: -62px;
  max-width: 924px;
  opacity: 0;
  transition: .5s;
}
.lav-jumb__image {
  pointer-events: none;
}
.lav-jumb__image-main:not(.lav-jumb__image-caption) {
  top: -72px;
}
.lav-jumb__image-caption {
  max-width: 940px;
  left: -19px;
  top: -70px;
  transform: scale(0.5);
  transition: 0s;
}
.lav-jumb__image-caption[src*="jumb-webinars-text"] {
  left: 0;
}
.lav-jumb__image-caption[src*="jumb-captions-text"] {
  left: 0;
  top: -74px;
}
.lav-jumb__image-caption[src*="jumb-marketing-text"] {
  left: 0;
}
.lav-jumb__image-caption[src*="jumb-notes-text"] {
  left: 0;
}
.lav-jumb__image-caption.active {
  transition-duration: .5s;
  transition-delay: .4s;
  transform: scale(1);
}
.lav-jumb__image-main.active {
  opacity: 1;
}
@media(min-width: 1200px) {
  .container-1160 {
    max-width: 1320px;
  }
}
@media(max-width: 1400px) {
  .home-hero__content {
    max-width: 600px;
  }
  .lav-jumb__image {
    transform: scale(0.85);
  }
}
@media(max-width: 1320px) {
  .home-hero__content {
    max-width: 550px;
  }
}
@media(min-width: 1800px) {
  .nav-wrap-a {
    max-width: 1360px;
  }
  .container-1160 {
    max-width: 1360px;
  }
}
.c-updated-nav-button.get-started-start.c-nav-buttom-getstarted {
  min-width: 166px;
}
`

const stylesEl = document.createElement('style')
stylesEl.classList.add('exp-styles')
stylesEl.innerHTML = styles

// *** Logic *** //
initExp()

async function initExp() {
  await waitFor(() => document.head && document.body, false, { ms: 100 })

  document.head.appendChild(stylesEl)
  console.debug('** InitExp **')

  if (location.pathname !== '/') return

  handleImages()
  handleInfo()
  handleOptions()
  handleCTA()
}

function handleImages() {
  _$('.home-hero .w-layout-blockcontainer').insertAdjacentHTML(
    'beforeend',
    /* html */ `
    <div class='lav-jumb__image'>
      <img class='lav-jumb__image-main active' src="${config.dir}/img/jumb-podcast.png" />
      <img class='lav-jumb__image-main lav-jumb__image-caption active' src="${config.dir}/img/jumb-podcast-text.svg" />
      <img class='lav-jumb__image-main' src="${config.dir}/img/jumb-transcriptions.png" />
      <img class='lav-jumb__image-main lav-jumb__image-caption' src="${config.dir}/img/jumb-transcriptions-text.svg" />
      <img class='lav-jumb__image-main' src="${config.dir}/img/jumb-interviews.png" />
      <img class='lav-jumb__image-main lav-jumb__image-caption' src="${config.dir}/img/jumb-interviews-text.svg" />
      <img class='lav-jumb__image-main' src="${config.dir}/img/jumb-social.png" />
      <img class='lav-jumb__image-main lav-jumb__image-caption' src="${config.dir}/img/jumb-social-text.svg" />
      <img class='lav-jumb__image-main' src="${config.dir}/img/jumb-webinars.png" />
      <img class='lav-jumb__image-main lav-jumb__image-caption' src="${config.dir}/img/jumb-webinars-text.svg" />
      <img class='lav-jumb__image-main' src="${config.dir}/img/jumb-captions.png" />
      <img class='lav-jumb__image-main lav-jumb__image-caption' src="${config.dir}/img/jumb-captions-text.svg" />
      <img class='lav-jumb__image-main' src="${config.dir}/img/jumb-marketing.png" />
      <img class='lav-jumb__image-main lav-jumb__image-caption' src="${config.dir}/img/jumb-marketing-text.svg" />
      <img class='lav-jumb__image-main' src="${config.dir}/img/jumb-notes.png" />
      <img class='lav-jumb__image-main lav-jumb__image-caption' src="${config.dir}/img/jumb-notes-text.svg" />
    </div>
  `
  )
}

function handleInfo() {
  _$('.home-hero__intro').innerHTML = _$('.home-hero__intro').innerHTML.replace(
    'edit',
    'edit<br/>'
  )

  _$('.home-hero__content .h1--80 span')?.remove()
  _$('.home-hero__content .h1--80').innerHTML = _$(
    '.home-hero__content .h1--80'
  ).innerHTML.replace('tothe', 'to the<br/>')

  _$('.home-hero').insertAdjacentHTML(
    'afterbegin',
    '<div class="lav-circle-bg"></div><div class="lav-glitch-bg"></div>'
  )
}

function handleOptions() {
  window.historyImages = []

  _$$('.home-hero__checkbox').forEach((el) => {
    const text = el.innerText.trim()

    if (text === 'Podcasts') {
      el.style.order = '-1'
      el.dataset.image = 'jumb-podcast'
      window.historyImages.push('jumb-podcast')
      el.click()
    } else if (text === 'Transcriptions') {
      el.style.order = '0'
      el.dataset.image = 'jumb-transcriptions'
    } else if (text === 'Video interviews') {
      el.style.order = '1'
      el.dataset.image = 'jumb-interviews'
    } else if (text === 'Social media clips') {
      el.style.order = '2'
      el.dataset.image = 'jumb-social'
    } else if (text === 'Webinars') {
      el.style.order = '3'
      el.dataset.image = 'jumb-webinars'
    } else if (text === 'Captions') {
      el.style.order = '4'
      el.dataset.image = 'jumb-captions'
    } else if (text === 'Video marketing') {
      el.style.order = '5'
      el.dataset.image = 'jumb-marketing'
    } else if (text === 'AI show notes') {
      el.style.order = '6'
      el.dataset.image = 'jumb-notes'
    }

    el.addEventListener('click', () => {
      if (el.classList.contains('is--checked')) {
        console.log('fire1')
        window.historyImages.push(el.dataset.image)
      } else {
        console.log('fire2')
        window.historyImages = historyImages.filter(
          (item) => item !== el.dataset.image
        )
      }

      console.log(window.historyImages)

      const image =
        window.historyImages[window.historyImages.length - 1] ||
        el.dataset.image

      _$$('.lav-jumb__image-main.active').forEach((el) =>
        el.classList.remove('active')
      )
      _$$('.lav-jumb__image-main[src*="' + image + '"]').forEach((el) =>
        el.classList.add('active')
      )

      if (!_$('.lav-animate-btn')) {
        _$('.home-hero__content .rs-button').classList.add('lav-animate-btn')

        setTimeout(() => {
          _$('.home-hero__content .rs-button').classList.remove(
            'lav-animate-btn'
          )
        }, 1000)
      }
    })
  })
}

function handleCTA() {
  waitFor('.c-nav-buttom-getstarted', () => {
    _$('.c-nav-buttom-getstarted').innerText = 'Get Started for Free'
  })

  waitFor('.home-hero__content .rs-button', () => {
    _$('.home-hero__content .rs-button').innerText = 'Get Started for Free'
  })
}

// *** Utils *** //
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
