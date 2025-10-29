console.debug('*** Experiment started ***')

// Config for Experiment
const config = {
  // dir: 'http://127.0.0.1:5500/gameboost/checkoutImprove',
  dir: 'https://flopsi69.github.io/crs/gameboost/checkoutImprove',
  clarity: ['set', 'checkout_improve', 'variant_1'],
  debug: false
}

// const orig = console.log
// console.log = function (...args) {
//   orig.apply(console, ['Debug:', ...args])
// }

// Styles for Experiment
const styles = /* css */ `
  .lav-protected {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0 24px;
    color: #FF9166;
    font-size: 12px;
    line-height: 16px;
  }
  .lav-protected--mobile {
    display: none;
  }
  .lav-protected svg {
    flex-shrink: 0;
  }
  [aria-labelledby="section-two-heading"] .pt-6  .text-foreground .text-base {
    font-size: 18px;
  }
  .lav-warranty > span {
    border-radius: 12px 12px 0 0;
    border-top: 1px solid rgba(156, 163, 175, 0.20);
    border-right: 1px solid rgba(156, 163, 175, 0.20);
    border-left: 1px solid rgba(156, 163, 175, 0.20);
    background: #353941;
    box-shadow: 0 0 0 0 #FFF inset, 0 0 0 0 rgba(156, 163, 175, 0.20) inset;
    border-bottom: none;
    padding: 12px 18px;
  }
  .lav-warranty + .border-t {
    border-top: none;
  }
  .lav-warranty > a {
    display: none;
  }
  .lav-warranty > span label .ring-primary-ring {
    margin-left: 7px;
  }
  .lav-warranty__footer {
    border-radius: 0 0 12px 12px;
    border: 1px solid rgba(156, 163, 175, 0.20);
    background: #272A30;
    padding: 8px 18px;
  }
  .lav-warranty__caption {
    display: inline;
    color: #F68717;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
    margin-right: 4px;
  }
  .lav-warranty__learn {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    color: #FAFAFA;
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    cursor: pointer;
  }
  .lav-warranty__learn i {
    opacity: 0.7;
    transition: .2s;
    font-size: 14px;
  }
  .lav-warranty__learn:hover i {
    opacity: 1;
  }
  [aria-labelledby="section-one-heading"] .mx-auto a[href="https://gameboost.com/"] {
    flex-shrink: 0;
  }
  .lav-summary-title {
    color: #FAFAFA;
    font-size: 30px;
    font-weight: 600;
    line-height: 36px;
    letter-spacing: -0.75px;
  }
  .lav-summary-title + dl {
    display: none;
  }
  [aria-labelledby="section-two-heading"] ul li p.flex-none {
    color: #FAFAFA;
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
    align-self: start;
    padding-top: 24px;
  }
  [aria-labelledby="section-two-heading"] ul li h3 {
    font-size: 16px;
    line-height: 24px;
  }
  [aria-labelledby="section-two-heading"] ul li .flex-auto.space-y-1 {
    margin-left: 24px;
  }
  .lav-product {
    align-items: flex-start;
  }
  .lav-product > img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }
  .lav-benefits {
    display: grid;
    gap: 8px;
    padding-top: 4px;
    margin-right: -15vw;
  }
  .lav-benefit {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #A1A1AA;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
  }
  .lav-benefit--product {
    font-weight: 500;
  }
  .lav-benefit img, .lav-benefit svg {
    flex-shrink: 0;
  }
  .lav-benefit--product .bg-secondary {
    width: 22px;
    height: 22px;
  }
  .lav-benefit--product .bg-secondary i {
    font-size: 12px;
  }
  .lav-benefit img {
    width: 22px;
    height: 22px;
    object-fit: contain;
  }
  .lav-benefit--warranty i {
    margin-left: 4px;
  }

  .lav-tooltip-wrapper {
    position: relative;
  }
  .lav-tooltip-wrapper:hover .lav-tooltip {
    opacity: 1;
    transform: translateY(0) translateX(-50%);
    pointer-events: auto;
  }

  .lav-tooltip {
    position: absolute;
    top: 100%;
    left: 50%;
    margin-top: 5px;
    z-index: 9;
    width: 280px;
    border-radius: 6px;
    border: 1px solid #1F2328;
    background: #181B20;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    padding: 6px 10px;
    transform: translateY(10px) translateX(-50%);
    opacity: 0;
    transition: .3s;
    pointer-events: none;
  }
  .lav-tooltip__title {
    color: #FAFAFA;
    font-size: 12px;
    font-weight: 600;
    line-height: 20px;
  }
  .lav-tooltip__content {
    color: #FAFAFA;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    margin-top: 10px;
  }
  .lav-tooltip__content--marked {
    font-weight: 600;
  }
  @media(max-width: 768px) {
    .lav-protected--desktop {
      display: none;
    }
    .lav-protected--mobile {
      display: flex;
    }
    .lav-protected {
      margin-top: 10px;
      margin-bottom: -4px;
      padding: 0;
    }
    .lav-product > img {
      width: 68px;
      height: 68px;
    }
    [aria-labelledby="section-two-heading"] ul li .flex-auto.space-y-1 {
      margin-left: 1rem;
    }
    [aria-labelledby="section-two-heading"] ul li h3 {
      font-size: 14px;
      line-height: 20px;
    }
    [aria-labelledby="section-two-heading"] ul li p.flex-none {
      margin-left: 12px!important;
      font-size: 18px;
      padding-top: 16px;
    }
    .lav-benefit {
      font-size: 12px;
      line-height: 20px;
    }
    .lav-benefit img, .lav-benefit svg {
      width: 18px;
      height: 18px;
    }
    .lav-warranty + .border-t {
      border-top: 1px solid #1F2328;
      margin-top: 36px;
    }
    .lav-tooltip {
      width: 240px;
      right: -30px;
      left: initial;
      transform: translateY(10px);
    }
    .lav-tooltip-wrapper:hover .lav-tooltip {
      transform: translateY(0);
    }
  }
  @media(max-width: 498px) {
    .lav-warranty__learn .lav-tooltip {
      right: initial;
      left: -20px;
      transform: translateY(10px);
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
  if (location.pathname.includes('/checkout/') === false) return

  _$('#app>div').appendChild(stylesEl)

  console.debug('** InitExp **')

  addProtectedCaption();
  addSummaryHeader();
  updateProducts();
  updateWarranty();
}

function addProtectedCaption() {
  const userLogoEl = _$('[id*="reka-dropdown-menu-trigger-v-"]')

  userLogoEl.insertAdjacentHTML('beforebegin', getMarkup('lav-protected--desktop'));
  userLogoEl.parentElement.insertAdjacentHTML('afterend', getMarkup('lav-protected--mobile'));

  function getMarkup(extraClass) {
    return /* html */ `
      <div class='lav-protected ${extraClass || ''}'>
        ${getSvg('orangeShield')}
        Your purchase is protected by Gameboost’s Comprehensive Warranty.
      </div>
    `
  }
}  

function addSummaryHeader() {
  const summaryHeader = `
    <div class='lav-summary-title'>Your Order</div>
  `;

 _$('[aria-labelledby="section-two-heading"] h2.sr-only').insertAdjacentHTML('afterend', summaryHeader);
}

function updateProducts() {
  const containerEl = _$('[aria-labelledby="section-two-heading"] ul');

  _$$('li', containerEl).forEach((productEl) => {
    handleProduct(productEl);
  });
  

  function handleProduct(productEl) {
    productEl.classList.add('lav-product');
    // const price = _$('p.flex-none', productEl).innerText;
    // console.log('productEl', productEl);

    const benefitsMarkup = /* html */ `
      <div class="lav-benefits">
        <div class="lav-benefit lav-benefit--product"></div>
        <div class="lav-benefit lav-benefit--instant">${getSvg('benefitInstant')} Instant delivery after payment</div>
        <div class="lav-benefit lav-benefit--warranty" data-tippy-content="hello">
          ${getSvg('benefitWarranty')}
          14-days Warranty Included 
          <div class='lav-tooltip-wrapper'>
            <i class="fa-duotone fa-circle-question"></i>
            <div class='lav-tooltip'>
              <div class='lav-tooltip__title'>14-day Warranty included</div>
              <div class='lav-tooltip__content lav-tooltip__content--marked'>If your account is banned or compromised within 14 days for reasons outside your control, we will replace it or issue store credit for the full amount.</div>
            </div>
          </div>
        </div>
      </div>
    `;

    _$('.space-y-1', productEl).insertAdjacentHTML('beforeend', benefitsMarkup);

    const productInfo = getCheckoutData()
    console.log('productInfo', productInfo);

    if (["Currency", "Item"].includes(productInfo.order_type)) {
      _$('.lav-benefit--warranty .lav-tooltip__content', productEl).innerText = 'You’re eligible for a refund or replacement if the seller fails to deliver, doesn’t disclose RWT risks, or causes penalties to your account.';
    } else if (productInfo.order_type !== "Account") {
      _$('.lav-benefit--warranty', productEl).remove();
    }

    if (_$('p', productEl)) {
      const productName = _$('p', productEl).innerText;
      const productLogo = productInfo.first_image_url ? _$('img', productEl)?.outerHTML || _$('i', productEl).closest('.bg-secondary').outerHTML : '';
      _$('.lav-benefit--product').innerHTML = productLogo + productName;
      _$('p', productEl).remove();
    } else {
      _$('.lav-benefit--product')?.remove();
    }


    if (productInfo.first_image_url && _$('.lav-product > img')) { 
      _$('.lav-product > img').src = productInfo.first_image_url;
    }

    if (!productInfo.is_instant_delivery) {
       _$('.lav-benefit--instant')?.remove();
    }
  }
}

function updateWarranty() {
  if (!_$('[aria-labelledby="section-two-heading"] .space-y-0')) return

  _$('[aria-labelledby="section-two-heading"] .space-y-0').classList.add('lav-warranty');

  const warrantyCpationHTML = /* html */ `
    <div class="lav-warranty__footer">
      <div class="lav-warranty__caption">
        Lifetime Warranty — you’re covered for any problem, anytime.
      </div>
      <div class="lav-warranty__learn lav-tooltip-wrapper">
        Learn more
        <i class="fa-duotone fa-circle-question"></i>
        <div class='lav-tooltip'>
          <div class='lav-tooltip__title'>Lifetime Warranty</div>
          <div class='lav-tooltip__content'>If your account is banned or compromised for reasons outside your control or does not match the description at purchase, we’ll replace it or issue full store credit. Open a support ticket and we’ll handle the rest.</div>
        </div>
      </div>
    </div>
  `

  _$('.lav-warranty').insertAdjacentHTML('beforeend', warrantyCpationHTML);
}

function getCheckoutData() {
  return window.exposedData
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
    orangeShield: /* html */ `
      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
        <path d="M5.49991 0.352869C5.60017 0.352869 5.69327 0.374928 5.77921 0.419045L9.83975 2.18375C10.0832 2.28669 10.2766 2.44846 10.4198 2.66905C10.5774 2.88963 10.6562 3.14699 10.6562 3.4411C10.6705 4.1911 10.5487 5.07346 10.2909 6.08816C10.0331 7.10287 9.56762 8.08816 8.89444 9.04405C8.23559 10.0146 7.29027 10.8161 6.0585 11.4485C5.68611 11.6249 5.31371 11.6249 4.94132 11.4485C3.70955 10.8161 2.76423 10.0146 2.10538 9.04405C1.4322 8.08816 0.966707 7.10287 0.708894 6.08816C0.451082 5.07346 0.329337 4.1911 0.34366 3.4411C0.34366 3.14699 0.422436 2.88963 0.579988 2.66905C0.723217 2.44846 0.916577 2.28669 1.16007 2.18375L5.22061 0.419045C5.30655 0.374928 5.39965 0.352869 5.49991 0.352869ZM5.49991 1.83081V10.169C6.47387 9.65434 7.24014 8.99993 7.79874 8.20581C8.34301 7.41169 8.72973 6.59552 8.95889 5.75728C9.17374 4.90434 9.28116 4.13963 9.28116 3.46316L5.49991 1.83081Z" fill="#FF9166"/>
      </svg>
    `,
    benefitInstant: /* html */ `
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.3305 3.69004C15.5383 3.15883 15.4229 2.70846 14.984 2.33892C14.499 2.03867 14.0371 2.06176 13.5983 2.40821L4.72935 10.1685C4.35982 10.5149 4.25588 10.9191 4.41756 11.3811C4.62542 11.843 4.97186 12.0855 5.45688 12.1086H9.33703L6.66943 18.3099C6.46156 18.8411 6.57705 19.2915 7.01587 19.661C7.50089 19.9613 7.96281 19.9382 8.40164 19.5917L17.2706 11.8314C17.6401 11.485 17.744 11.0808 17.5824 10.6189C17.3976 10.157 17.0511 9.91445 16.543 9.89135H12.6975L15.3305 3.69004Z" fill="#FF9166"/>
      </svg>
    `,
    benefitWarranty: /* html */ `
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.9999 2.52943C11.1458 2.52943 11.2812 2.56252 11.4062 2.62869L17.3124 5.27575C17.6666 5.43016 17.9479 5.67281 18.1562 6.00369C18.3854 6.33457 18.4999 6.7206 18.4999 7.16178C18.5208 8.28678 18.3437 9.61031 17.9687 11.1324C17.5937 12.6544 16.9166 14.1324 15.9374 15.5662C14.9791 17.0221 13.6041 18.2243 11.8124 19.1728C11.2708 19.4375 10.7291 19.4375 10.1874 19.1728C8.39577 18.2243 7.02077 17.0221 6.06244 15.5662C5.08327 14.1324 4.40619 12.6544 4.03119 11.1324C3.65619 9.61031 3.4791 8.28678 3.49994 7.16178C3.49994 6.7206 3.61452 6.33457 3.84369 6.00369C4.05202 5.67281 4.33327 5.43016 4.68744 5.27575L10.5937 2.62869C10.7187 2.56252 10.8541 2.52943 10.9999 2.52943ZM10.9999 4.74634V17.2537C12.4166 16.4816 13.5312 15.5 14.3437 14.3088C15.1354 13.1177 15.6979 11.8934 16.0312 10.636C16.3437 9.35663 16.4999 8.20957 16.4999 7.19487L10.9999 4.74634Z" fill="#FF9166"/>
      </svg>
    `
  }

  return svgObj[name]
}
