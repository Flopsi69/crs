console.debug('*** Experiment started ***')

// Config for Experiment
const config = {
  // dir: 'http://127.0.0.1:5500/zenpat/steps',
  dir: 'https://flopsi69.github.io/crs/zenpat/steps',
  clarity: ['set', 'exp_zen_slider_c', 'variant_1'],
  debug: false
}

// const orig = console.log
// console.log = function (...args) {
//   orig.apply(console, ['Debug:', ...args])
// }

// Styles for Experiment
const styles = /* css */ `
[class*='lav-'] {
  letter-spacing: 0;
}
.scientific {
  display: none;
}
.lav-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 500px;
  background: #2A7B72;
  box-shadow: 0px 4px 15px 0px rgba(72, 67, 69, 0.51);
  height: 65px;
  color: #FFF;
  text-align: center;
  font-family: DINEngschrift LT, Roboto, sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.27px;
  text-transform: uppercase;
}
.trust-rating {
  text-align: center;
}
.trust-rating .stars {
  margin-top: 8px;
  justify-content: center;
  gap: 12px;
  align-items: center;
}
.trust-rating .rate img {
  margin-top: 0;
  width: 103px;
}
#ScienceBased {
  margin-top: 0;
  padding-top: 52px;
}

.lav-calms {
  position: relative;
  z-index: 1;
  margin-top: -30%;
  padding: 12px 20px 16px;
  background: #ECEEF0;
}
.lav-calms__head {
  display: flex;
  gap: 14px;
}
.lav-calms__image {
  flex-shrink: 0;
  line-height: 0;
  width: 112px;
}
.lav-calms__image img {
  max-width: 100%;
  margin-top: -4px;
  margin-left: -2px;
}
.lav-calms__caption {
  color: #000;
  font-family: Bebas,Bebas Fallback,Roboto,sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0.6px;
}
.lav-calms__title {
  color: #212529;
  font-family: Roboto;
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  margin-top: 6px;
}
.lav-calms__descr {
  margin-top: 16px;
  color: #515151;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
}

.lav-acc {
  position: relative;
  background-color: #ECEEF0;
  padding: 16px 20px;
}
.lav-acc .slick-dotted.slick-slider {
  margin-bottom: 0;
}
.lav-acc .slick-list {
  // overflow: visible;
  margin: 0 -6px;
}
.lav-acc__arrow {
  line-height: 0;
  cursor: pointer;
}
.lav-acc__control {
  position: absolute;
  z-index: 10;
  left: 50%;
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  top: 10px;
  transform: translate(-50%, 100%);
  padding: 5px 10px;
  border-radius: 15px;
  background: #fff;
}
.lav-acc__next {
  order: 1;
}
.lav-acc__pagination {
  display: flex;
  padding: 0;
  margin: 0;
  justify-content: center;
  align-items: center;
  gap: 4px;
  list-style: none;
}
.lav-acc__dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #E0F2E3;
  line-height: 0;
  transition: .3s;
  display: block!important;
}
.slick-active .lav-acc__dot {
  background-color: #2A7B72;
}
.lav-acc__list {
  padding: 0 8px;
}
.lav-acc__item {
  border-radius: 32px;
  background: #FFF;
  box-shadow: 0px 2px 4px 0px rgba(12, 11, 11, 0.10);
  padding: 48px 0 24px;
  margin: 0 6px 5px;
}
.lav-acc__head {
  position: relative;
  padding: 0 24px;
  text-align: center;
}
.lav-acc__step {
  color: #2A7B72;
  font-family: Bebas,Bebas Fallback,Roboto,sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0.6px;
}
.lav-acc__title {
  color: #000;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.6px;
  margin-top: 4px;
}
.lav-acc__body {
  border-top: 1px solid #E0F2E3;
  padding: 0 24px;
  margin-top: 3px;
}
.lav-acc__how {
  text-align: center;
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 12px;
  padding: 16px 0;
}
.lav-acc__how-title {
  display: inline-block;
  background: #E0F2E3;
  padding: 2px 6px;
  color: #141313;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
}
.lav-acc__how-title span {
  color: #2A7B72;
}
.lav-acc__how-first, .lav-acc__how-second {
  color: #515151;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
}
.lav-acc__how-divider {
  line-height: 0;
}
.lav-acc__image {
  text-align: center;
}
.lav-acc__image img {
  max-width: 100%;
}
.lav-acc__scientific {
  padding: 16px 24px 24px;
  margin: 20px -24px -24px;
  border-radius: 0px 0px 32px 32px;
  background: rgba(224, 242, 227, 0.50);
}
.lav-acc__scientific-title {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #141313;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
}
.lav-acc__scientific-title img {
  width: 32px;
  flex-shrink: 0;
}
.lav-acc__scientific-descr {
  color: #515151;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  line-height: 22px;
  margin-top: 12px;
}
.lav-acc-scientific-descr strong {
  font-weight: 600;
}
.lav-acc__scientific-btn {
  margin-top: 16px;
}

.lav-key {
  font-family: Roboto;
  background: #ECEEF0;
  padding-top: 16px;
}
.lav-key__title {
  color: #000;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  padding: 0 20px;
}
.lav-key__inner {
  padding: 24px;
  background: #D6F0DA;
  margin-top: 16px;
}
.lav-key__list {
  display: grid;
  gap: 24px;
}
.lav-key__item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}
.lav-key__icon {
  flex-shrink: 0;
  width: 36px;
  line-height: 0;
}
.lav-key__caption {
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
}
.lav-key__note {
  margin-top: 24px;
  color: #000;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 21px;
}
.lav-key__btn {
  margin-top: 16px;
}
@media(min-width: 768px) {
  .lav-calms {
    margin-top: 0;
    padding-top: 25px;
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

  document.body.appendChild(stylesEl)

  console.debug('** InitExp **')
  waitFor('.trust-rating', handleTrust)
  addCalms()
  addAccordion()
  addKeys()
}

function addCalms() {
  const markup = /* html */ `
    <div class='lav-calms'>
      <div class='lav-calms__head'>
        <div class='lav-calms__image'>
          <img src='${config.dir}/img/calms.png' alt=''>
        </div>
        <div class='lav-calms__info'>
          <div class='lav-calms__caption'>
            Behind the Science
          </div>
          <div class='lav-calms__title'>
            How our patch calms the nervous system
          </div>
        </div>
      </div>
   
      <div class='lav-calms__descr'>
        Herbal oils are one of the few natural remedies backed by science. We've combined the most researched oils into a special blend and engineered them into a sticker patch
      </div>
    </div>
  `

  _$('#ScienceBased').insertAdjacentHTML('beforebegin', markup)
}

function addAccordion() {
  const accList = [
    {
      title: 'Slow-Release Technology',
      descr: [
        'The patch is infused with essential oils that are <strong>gradually released</strong> when exposed to air and body warmth.',
        'This controlled diffusion prevents rapid evaporation, ensuring a steady release of active compounds <strong>over 6-8 hours</strong>.'
      ],
      image: 'acc-1',
      scientific: `
        Studies confirm that microencapsulation technology extends the active duration of essential oils, making them more effective than direct application. <br/>
        <strong>Source: Journal of Essential Oil Research, 2021</strong>
      `
    },
    {
      title: 'Inhalation & Absorption',
      descr: [
        'As oils evaporate, their aromatic molecules are inhaled, reaching the <strong>olfactory receptors in the nose.</strong>',
        'These receptors send signals directly to the limbic system, which <strong>controls emotions, stress levels, and cognitive function.</strong>'
      ],
      image: 'acc-2',
      scientific: `Inhalation of Lavender Oil has been shown to reduce cortisol levels (the stress hormone) within 15 minutes.<br/><strong>Source: Neuroscience & Behavior Studies, 2020</strong>`
    },
    {
      title: 'Brain & Nervous System Response',
      descr: [
        'Once inhaled, the essential oil molecules activate the amygdala and hippocampus—the brain regions responsible for emotion regulation and memory.',
        'The oils interact with neurotransmitters (like serotonin and dopamine), helping to balance mood, reduce anxiety, and promote relaxation.'
      ],
      image: 'acc-3',
      scientific: `
        Atlas Cedarwood Oil contains sesquiterpenes, which help increase oxygen delivery to the brain, improving focus and reducing mental fatigue. <strong>Source: Journal of Alternative Medicine, 2018</strong>
        <br/><br/>
        Mandarin Oil has been found to significantly lower heart rate and blood pressure, creating a natural calming effect. <strong>Source: International Journal of Aromatherapy, 2019</strong>
      `
    },
    {
      title: 'Long-Lasting & Consistent Effects',
      descr: [
        'The patch maintains a steady state of diffusion for up to 8 hours, ensuring a prolonged therapeutic effect.',
        'Unlike oils applied directly to the skin, which absorb quickly and fade, the patch’s sustained release keeps you feeling balanced throughout the day.'
      ],
      image: 'acc-4',
      scientific: `Slow diffusion of essential oils has been found to be more effective than one-time inhalation in sustaining relaxation and cognitive benefits. <strong>Source: Journal of Natural Therapies, 2022</strong>`
    }
  ]
  const markup = /* html */ `
    <div class='lav-acc'>
      <div class='lav-acc__control'>
        <div class='lav-acc__prev lav-acc__arrow'>
          <img src='${config.dir}/img/arrow-prev.svg'>
        </div>
        <div class='lav-acc__next lav-acc__arrow'>
          <img src='${config.dir}/img/arrow-next.svg'>
        </div>
      </div>
      <div class='lav-acc__list'></div>
    </div>
  `

  _$('#ScienceBased').insertAdjacentHTML('beforebegin', markup)

  accList.forEach((item, index) => {
    _$('.lav-acc__list').appendChild(fillList(item, index + 1))
  })

  waitFor(
    () => typeof $?.fn?.slick === 'function',
    () => {
      $('.lav-acc__list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        prevArrow: '.lav-acc__prev',
        nextArrow: '.lav-acc__next',
        dots: true,
        fade: false,
        dotsClass: 'lav-acc__pagination',
        appendDots: '.lav-acc__control',
        customPaging: function (slider, i) {
          return `<div class='lav-acc__dot'></div>`
        }
      })
    }
  )

  function fillList(item, index) {
    const el = document.createElement('div')
    el.classList.add('lav-acc__item')

    el.innerHTML = /* html */ `
      <div class='lav-acc__head'>
        <div class='lav-acc__step'>Step ${index}</div>
        <div class='lav-acc__title'>${item.title}</div>
      </div>
      <div class='lav-acc__body'>
        <div class='lav-acc__how'>
          <div class='lav-acc__how-title'>How It <span>Works</span>:</div>

          <div class='lav-acc__how-first'>${item.descr[0]}</div>

          <div class='lav-acc__how-divider'>
            ${getSvg('divider')}
          </div>

          <div class='lav-acc__how-second'>${item.descr[1]}</div>
        </div>

        <div class='lav-acc__image'>
          <img src='${config.dir}/img/${item.image}.png' alt=''>
        </div>

        <div class='lav-acc__scientific'>
          <div class='lav-acc__scientific-title'>
            <img src='${config.dir}/img/science.png' alt=''>
            Scientific Backing
          </div>

          <div class='lav-acc__scientific-descr'>${item.scientific}</div>

          <div class='lav-btn lav-acc__scientific-btn'>Get it now!</div>
        </div>
      </div>
    `

    el.querySelector('.lav-acc__scientific-btn').addEventListener(
      'click',
      () => {
        _$('#open').click()

        pushDataLayer(
          'exp_zenpatch_slider_click_06',
          'Get it now',
          'Button',
          `How it works - Steps ${index}: ${item.title}`
        )
      }
    )

    visibilityEvent(el, () => {
      console.log(33)
      pushDataLayer(
        'exp_zenpatch_slider_view_03',
        'Visibility',
        'Pop up',
        `How it works - Steps ${index}: ${item.title}`
      )
    })

    return el
  }
}

function addKeys() {
  const markup = /* html */ `
    <div class='lav-key'>
      <div class='lav-key__title'>
        Key Takeaways & Why It Works for You
      </div>
      <div class='lav-key__inner'>
        <div class='lav-key__list'>
          <div class='lav-key__item'>
            <div class='lav-key__icon'>
              <img src='${config.dir}/img/key-1.svg' alt=''>
            </div>
            <div class='lav-key__caption'>
              100% Natural & Backed by Science – No synthetic chemicals, just the power of botanical extracts.
            </div>
          </div>
          <div class='lav-key__item'>
            <div class='lav-key__icon'>
              <img src='${config.dir}/img/key-2.svg' alt=''>
            </div>
            <div class='lav-key__caption'>
              No Direct Skin Contact – Safe for sensitive skin, applied to clothing.
            </div>
          </div>
          <div class='lav-key__item'>
            <div class='lav-key__icon'>
              <img src='${config.dir}/img/key-3.svg' alt=''>
            </div>
            <div class='lav-key__caption'>
              Scientifically Proven Effects – Ingredients carefully selected for stress relief, focus, and mood enhancement.
            </div>
          </div>
          <div class='lav-key__item'>
            <div class='lav-key__icon'>
              <img src='${config.dir}/img/key-4.svg' alt=''>
            </div>
            <div class='lav-key__caption'>
              Lasts Up to 8 Hours – Unlike traditional diffusers, the patch provides continuous benefits throughout the day.
            </div>
          </div>
        </div>

        <div class='lav-key__note'>Ready to experience science-backed relaxation?</div>

        <div class='lav-btn lav-key__btn'>Try it now!</div>
      </div>
    </div>
  `

  _$('#ScienceBased').insertAdjacentHTML('beforebegin', markup)

  visibilityEvent('.lav-key__inner', () => {
    pushDataLayer(
      'exp_zenpatch_slider_view_04',
      'Visibility',
      'Section',
      'Key Takeaways & Why It Works for You'
    )
  })

  _$('.lav-key__btn').addEventListener('click', () => {
    _$('#open').click()

    pushDataLayer(
      'exp_zenpatch_slider_click_07',
      'Try it now',
      'Button',
      'Key Takeaways & Why It Works for You'
    )
  })
}

function handleTrust() {
  _$('.trust-rating .rate img').src = `${config.dir}/img/trustpilot-stars.svg`

  _$('.trust-rating .stars .text').innerText =
    _$('.trust-rating .stars .text').innerText.trim().split(' ')[0] + ' 3763'
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
    threshold: 0.35,
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
        }, 1000)
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
    divider: /* html */ `
      <svg xmlns="http://www.w3.org/2000/svg" width="70" height="51" viewBox="0 0 70 51" fill="none">
        <path d="M63.0596 50.5657C63.372 50.8781 63.8785 50.8781 64.1909 50.5657L69.282 45.4744C69.5944 45.162 69.5944 44.6555 69.282 44.343C68.9696 44.0306 68.463 44.0306 68.1506 44.3431L63.6252 48.8686L59.0997 44.3432C58.7872 44.0308 58.2807 44.0308 57.9683 44.3432C57.6559 44.6557 57.6559 45.1622 57.9683 45.4746L63.0596 50.5657ZM16.3864 25.5L16.3864 26.3L16.3864 25.5ZM39.6252 25.5L39.6252 24.7L39.6252 25.5ZM4.90607 0.463821C4.65433 0.742584 4.41502 1.02629 4.18795 1.31446L5.44471 2.3047C5.64946 2.04484 5.86565 1.78851 6.09353 1.53617L4.90607 0.463821ZM2.93444 3.15647C2.55379 3.81141 2.22862 4.48177 1.95699 5.16263L3.44308 5.75552C3.68576 5.14724 3.97661 4.54745 4.31777 3.96045L2.93444 3.15647ZM1.28629 7.29281C1.11468 8.02462 0.999969 8.76177 0.939598 9.49855L2.53425 9.62922C2.58824 8.97031 2.69078 8.31162 2.84403 7.65811L1.28629 7.29281ZM0.92065 11.7295C0.968578 12.4739 1.07026 13.212 1.22295 13.9377L2.78867 13.6083C2.65151 12.9563 2.56031 12.294 2.51734 11.6267L0.92065 11.7295ZM1.83392 16.0794C2.08738 16.7777 2.38964 17.458 2.73805 18.1141L4.15119 17.3638C3.83781 16.7736 3.56591 16.1617 3.33792 15.5335L1.83392 16.0794ZM3.91806 20.003C4.35434 20.6027 4.83394 21.1728 5.35431 21.7073L6.50074 20.5912C6.03427 20.1121 5.60384 19.6005 5.21191 19.0617L3.91806 20.003ZM7.02271 23.1885C7.60998 23.6375 8.23395 24.0464 8.89209 24.4095L9.665 23.0086C9.07728 22.6843 8.5197 22.3189 7.9945 21.9174L7.02271 23.1885ZM10.9225 25.3394C11.6099 25.5942 12.3254 25.8021 13.0665 25.9586L13.397 24.3931C12.7327 24.2528 12.0926 24.0667 11.4785 23.8391L10.9225 25.3394ZM15.2738 26.2628C15.6398 26.2874 16.0107 26.3 16.3864 26.3L16.3864 24.7C16.0464 24.7 15.7112 24.6886 15.3811 24.6664L15.2738 26.2628ZM16.3864 26.3L17.3546 26.3L17.3546 24.7L16.3864 24.7L16.3864 26.3ZM19.2912 26.3L21.2278 26.3L21.2278 24.7L19.2912 24.7L19.2912 26.3ZM23.1644 26.3L25.1009 26.3L25.1009 24.7L23.1644 24.7L23.1644 26.3ZM27.0375 26.3L28.9741 26.3L28.9741 24.7L27.0375 24.7L27.0375 26.3ZM30.9106 26.3L32.8472 26.3L32.8472 24.7L30.9106 24.7L30.9106 26.3ZM34.7838 26.3L36.7204 26.3L36.7204 24.7L34.7838 24.7L34.7838 26.3ZM38.6569 26.3L39.6252 26.3L39.6252 24.7L38.6569 24.7L38.6569 26.3ZM39.6252 26.3C39.9649 26.3 40.3028 26.3073 40.6388 26.3217L40.7075 24.7232C40.3486 24.7078 39.9878 24.7 39.6252 24.7L39.6252 26.3ZM42.6563 26.4961C43.3303 26.584 43.9951 26.7008 44.6495 26.8453L44.9944 25.2829C44.2946 25.1284 43.5838 25.0035 42.8633 24.9095L42.6563 26.4961ZM46.6039 27.3677C47.2505 27.5714 47.8848 27.8026 48.5056 28.06L49.1185 26.5821C48.4546 26.3068 47.7762 26.0595 47.0846 25.8417L46.6039 27.3677ZM50.3394 28.9166C50.9392 29.2294 51.5236 29.5678 52.0913 29.9302L52.9522 28.5815C52.3454 28.1942 51.7206 27.8325 51.0793 27.498L50.3394 28.9166ZM53.7485 31.0926C54.2841 31.5042 54.8013 31.9388 55.2986 32.3947L56.3799 31.2153C55.8485 30.7281 55.2958 30.2638 54.7234 29.8239L53.7485 31.0926ZM56.7303 33.8263C57.1862 34.3235 57.6207 34.8408 58.0323 35.3764L59.301 34.4015C58.8611 33.829 58.3968 33.2764 57.9096 32.745L56.7303 33.8263ZM59.1948 37.0336C59.5572 37.6012 59.8956 38.1857 60.2084 38.7855L61.627 38.0455C61.2925 37.4042 60.9308 36.7794 60.5434 36.1726L59.1948 37.0336ZM61.065 40.6192C61.3224 41.24 61.5537 41.8743 61.7574 42.5209L63.2834 42.0401C63.0656 41.3486 62.8183 40.6702 62.543 40.0063L61.065 40.6192ZM62.2798 44.4753C62.4243 45.1296 62.5411 45.7945 62.6291 46.4685L64.2156 46.2615C64.1216 45.541 63.9967 44.8302 63.8422 44.1304L62.2798 44.4753ZM62.8035 48.486C62.8179 48.822 62.8252 49.1599 62.8252 49.4996L64.4252 49.4995C64.4252 49.137 64.4174 48.7762 64.402 48.4173L62.8035 48.486ZM62.8252 49.4996L62.8252 49.6247L64.4252 49.6246L64.4252 49.4995L62.8252 49.4996ZM62.8252 49.8749L62.8252 50L64.4252 50L64.4252 49.8749L62.8252 49.8749Z" fill="#2A7B72"/>
      </svg>
    `
  }

  return svgObj[name]
}
