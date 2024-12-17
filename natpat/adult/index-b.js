console.debug('*** Experiment started ***')

// Config for Experiment
const config = {
  // dir: 'http://127.0.0.1:5500/natpat/adult',
  dir: 'https://flopsi69.github.io/crs/natpat/adult',
  clarity: ['set', 'adult_2_b', 'variant_1'],
  debug: false
}

// const orig = console.log
// console.log = function (...args) {
//   orig.apply(console, ['Debug:', ...args])
// }

// Styles for Experiment
const styles = /* css */ `
.js-heading ul {
  display: grid;
  gap: 6px;
}

.lav-info {
  padding: 22px 15px 42px;
}
.lav-info__title {
  color: #0C0B0B;
  text-align: center;
  font-family: DINEngschrift LT, Roboto, sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: 0.6px;
}
.lav-info__image {
  position: relative;
  margin-top: 15px;
  line-height: 0;
}
.lav-info__image:before {
  content: '';
  position: absolute;
  top: 42vw;
  left: 0;
  right: 0;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 28%);
  height: 307px;
}
.lav-info__image img {
  max-width: 100%!important;
}
.lav-info__descr {
  position: relative;
  z-index: 1;
  margin-top: -14vw;
}
.lav-info__descr p:last-child {
  margin-bottom: 0;
}
.lav-label__wrap {
  position: relative;
  display: inline-block;
}
.lav-label {
  position: absolute;
  top: 0;
  left: 0;
  width: 87px;
}
#getNow .form-horizontal .form-group .js-packs {
  margin: 10px 5px;
}
#getNow .form-horizontal .form-group {
  margin-top: -5px;
  margin-bottom: 0!important;
}

.lav-collapse {
  margin: 5px auto 0;
  border-radius: 6px;
  border: 2px solid #D9D9D9;
  background: #FFF;
  max-width: 320px;
}
.lav-collapse__image {
  line-height: 0;
  border-radius: 3px;
  border: 1px solid #ECEEF0;
  padding: 2px 4px;
}
.lav-collapse__image img {
  width: 28px;
  margin-bottom: 0!important;
}
.lav-collapse__head {
  padding: 8px 15px 8px 8px;
  cursor: pointer;
  display: flex;
  gap: 12px;
  align-items: center;
}
.lav-collapse__title {
  color:#0C0B0B;
  font-family: DINEngschrift LT, Roboto, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0.36px;
  text-transform: uppercase;
  margin-bottom: -4px;
}
.lav-collapse__arrow {
  margin-left: auto;
  transition: .3s;
}
.lav-collapse__head.active  .lav-collapse__arrow {
  transform: rotate(180deg);
}
.lav-collapse__body {
  border-top: 1px solid #D9D9D9;
  padding: 8px 0 15px;
  margin: 0 15px;
  text-align: left;
  display: none;
}
.lav-collapse__subtitle {
  color: #181717;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0.5px;
}
.lav-collapse__descr {
  margin-top: 4px;
  color: #181717;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.5px;
}
.lav-collapse__packages {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-top: 8px;
}
#addToCart {
  transition: .3s;
}
.lav-add-disabled {
  opacity: 0.5;
  pointer-events: none;
  filter: grayscale(1);
}
.lav-collapse__package {
  border-radius: 4px;
  color: #181717;
  border: 2px solid var(--Primary, #FF3C7F);
  background: #FFF;
  padding: 12px 15px;
  text-align: center;
  cursor: pointer;
  transition: .3s;
}
.lav-collapse__package.active {
  background: var(--Primary, #FF3C7F);
  color: #FFF;
}
.lav-collapse__package-title {
  font-family: DIN Condensed, roboto, sans-serif;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.6px;
  text-transform: uppercase;
}
.lav-collapse__package-price {
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0.6px;
  margin-top: 4px;
}
.lav-package-caption {
  display: none;
  color: #6F6F6F;
  text-align: center;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5px;
}
.prices .js-regular {
  margin-top: 5px;
}
.prices .js-total {
  margin-bottom: 0!important;
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

  waitFor('.js-heading.js-mobile h1', updateHero)
  waitFor('#LoveBuzzPatch', addInfoBlock)
  waitFor('#getNow', updatePackages)
}

function updateHero() {
  _$('.js-heading.js-mobile h1').innerHTML =
    "100% Mosquito Protection <br/> for the whole family. <br/>Guaranteed or It's Free!"

  _$('.js-heading ul li:first-child').innerHTML = `
      <img src="${config.dir}/img/adult-icon.svg">Safe for kids (0+) and adults
    `

  _$('.hand-banner img').src = `${config.dir}/img/hero-banner.png`
}

function addInfoBlock() {
  const markup = /* html */ `
    <div class='lav-info'>
      <div class='lav-info__title'>For Kids and Adults Alike: Because Mosquitoes Don’t Play Favorites!</div>
      <div class='lav-info__image'>
        <img src='${config.dir}/img/info-banner.png' />
      </div>
      <div class='lav-info__descr'>
        <p>Introducing mosquito repellent stickers specifically for adults.</p>
        <p>BuzzPatch offers a natural, safe solution for those who are tired of the discomfort from mosquito bites.</p>
        <p>With its specially blended essential oils, say goodbye to swollen, itchy skin and hello to worry-free outdoor adventure.</p>
      </div>
    </div>
  `

  _$('#LoveBuzzPatch').insertAdjacentHTML('afterend', markup)

  visibilityEvent('.lav-info', () => {
    pushDataLayer(
      'exp_adult2_element_01',
      'For Kids and Adults Alike',
      'view',
      'For Kids and Adults Alike'
    )
  })
}

function updatePackages() {
  _$('#getNow img').insertAdjacentHTML(
    'beforebegin',
    `
    <div class="lav-label__wrap">
      <img class="lav-label" src="${config.dir}/img/label-kids.png" />
    </div>
  `
  )

  _$('.lav-label__wrap').insertAdjacentElement('beforeend', _$('#getNow > img'))
  _$('.js-packs input[type=radio]:checked').classList.add('active')
  addCollapse()

  function addCollapse() {
    const markup = /* html */ `
      <div class="lav-collapse">
        <div class="lav-collapse__head">
          <div class="lav-collapse__image">
            <img src="${config.dir}/img/adults-mini.png" />
          </div>
          <div class="lav-collapse__title">Patches For Adults</div>

          <svg class="lav-collapse__arrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M16.8402 9.49366L16.5126 9.16382C16.4095 9.06081 16.2724 9.00407 16.1258 9.00407C15.9793 9.00407 15.8419 9.06081 15.7389 9.16382L12.0022 12.9006L8.26131 9.15968C8.15838 9.05667 8.02107 9 7.87456 9C7.72805 9 7.59066 9.05667 7.48765 9.15968L7.16 9.48748C6.94667 9.70066 6.94667 10.0479 7.16 10.2611L11.614 14.7311C11.7169 14.834 11.8541 14.9066 12.0019 14.9066H12.0036C12.1502 14.9066 12.2874 14.8339 12.3903 14.7311L16.8402 10.2732C16.9433 10.1703 16.9998 10.029 17 9.88245C17 9.73586 16.9433 9.59651 16.8402 9.49366Z" fill="#0C0B0B"/>
          </svg>
        </div>
        <div class="lav-collapse__body">
          <div class="lav-collapse__subtitle">For Kids and Adults Alike: Because Mosquitoes Don’t Play Favorites! </div>
          <div class="lav-collapse__descr">Pack of 40 adult sized neutral colours BuzzPatch mosquito repellent stickers</div>
          <div class="lav-collapse__packages">
            <div class="lav-collapse__package" data-id='41195285053484' data-price='${productAdultsVariants['3pack'].fullPrice}' data-discount='59'>
              <div class="lav-collapse__package-title">3 Packs</div>
              <div class="lav-collapse__package-price">
                <span>${productAdultsVariants['3pack'].price}</span> Each
              </div>
            </div>
            
            <div class="lav-collapse__package" data-id='41195285184556' data-price='${productAdultsVariants['2pack'].fullPrice}' data-discount='54'>
              <div class="lav-collapse__package-title">2 Packs</div>
              <div class="lav-collapse__package-price">
                <span>${productAdultsVariants['2pack'].price}</span> Each
              </div>
            </div>

            <div class="lav-collapse__package" data-id='41195285119020' data-price='${productAdultsVariants['1pack'].fullPrice}' data-discount='0'>
              <div class="lav-collapse__package-title">1 Pack</div>
              <div class="lav-collapse__package-price">
                <span>${productAdultsVariants['1pack'].price}</span> Each
              </div>
            </div>

            <div class="lav-collapse__package" data-id='41195285250092' data-price='${productAdultsVariants['4pack'].fullPrice}' data-discount='64'>
              <div class="lav-collapse__package-title">4 Packs</div>
              <div class="lav-collapse__package-price">
                <span>${productAdultsVariants['4pack'].price}</span> Each
              </div>
            </div>
          </div>
        </div>
      </div>
    `

    _$('#getNow .form-horizontal .form-group').insertAdjacentHTML(
      'afterend',
      markup
    )

    _$('.lav-collapse__head').addEventListener('click', function () {
      pushDataLayer(
        'exp_adult2_click_01',
        'Patches For Adults',
        'click',
        'SELECT PACKAGE'
      )
      this.classList.toggle('active')
      $('.lav-collapse__body').slideToggle()
    })

    _$$('.lav-collapse__package').forEach((item) => {
      item.addEventListener('click', function () {
        pushDataLayer(
          'exp_adult2_click_02',
          item.querySelector('.lav-collapse__package-title').textContent.trim(),
          'click',
          'SELECT PACKAGE'
        )
        if (this.classList.contains('active')) {
          _$('.lav-collapse__package.active').classList.remove('active')

          checkCaptionShow()
          handleAddToCart()
          updatePrice()

          return
        }

        _$('.lav-collapse__package.active')?.classList.remove('active')

        this.classList.add('active')

        if (_$('#radios-4').checked) {
          _$('#radios-4').checked = false
          _$('.js-packs input[type=radio].active')?.classList.remove('active')
        }

        checkCaptionShow()
        handleAddToCart()
        updatePrice()
      })
    })

    _$('.prices .js-total').insertAdjacentHTML(
      'afterend',
      `
        <div class='lav-package-caption'>This price for Adults and Kids packs</div>
      `
    )

    _$$('.js-packs input[type=radio]').forEach((item) => {
      item.addEventListener('click', function () {
        if (item.classList.contains('active')) {
          item.classList.remove('active')
          item.checked = false
          updatePrice()
        }

        handleAddToCart()
      })

      item.addEventListener('change', function () {
        if (!item.classList.contains('active')) {
          _$('.js-packs input[type=radio].active')?.classList.remove('active')
          item.classList.add('active')
        }
        // if (_$('#radios-4').checked) {
        //   _$('.lav-collapse__packages').classList.add('lav-disabled')
        // } else {
        //   _$('.lav-collapse__packages').classList.remove('lav-disabled')
        // }
        if (_$('#radios-4').checked && _$('.lav-collapse__package.active')) {
          _$('.lav-collapse__package.active').classList.remove('active')
        }

        checkCaptionShow()
        updatePrice()
      })
    })

    const parsePrice = (price) =>
      parseFloat(
        price
          .replace(/[^\d.,-]/g, '')
          .replace(',', '.')
          .replace(/(?<=\d)\.(?=\d{3})/g, '')
      )
    const formatPrice = (price) => {
      const [integer, decimal] = price.toFixed(2).split('.')
      // If decimal is 00, return the integer only, else return integer with decimal
      return integer.length > 5 && decimal === '00'
        ? integer.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        : integer.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + `.${decimal}`
    }

    function checkCaptionShow() {
      if (
        _$('.js-packs input[type=radio]:checked') &&
        _$('.lav-collapse__package.active')
      ) {
        $('.lav-package-caption').slideDown()
      } else {
        $('.lav-package-caption').slideUp()
      }
    }

    function handleAddToCart() {
      if (
        _$('#getNow input[name="radios"]:checked') ||
        _$('.lav-collapse__package.active')
      ) {
        _$('#addToCart').classList.remove('lav-add-disabled')
        _$('#getNow .prices').removeAttribute('style')
      } else {
        _$('#getNow .prices').style.display = 'none'
        _$('#addToCart').classList.add('lav-add-disabled')
      }
    }

    function updatePrice() {
      const discountEl = _$('.js-total .ps')
      const priceEl = _$('.js-total .pr')

      const origDiscount = _$('#radios-0').checked
        ? getpack3OffPrice / 100
        : _$('#radios-1').checked
        ? getpack4OffPrice / 100
        : _$('#radios-2').checked
        ? getpack2OffPrice / 100
        : _$('#radios-4').checked
        ? getpack5OffPrice / 100
        : getpack1OffPrice / 100

      const origPrice = !_$('#getNow input[name="radios"]:checked')
        ? 0
        : parsePrice(
            _$('#getNow input[name="radios"]:checked').dataset.fullPrice
          )

      const additionalPrice = !_$('.lav-collapse__package.active')
        ? 0
        : parsePrice(_$('.lav-collapse__package.active').dataset.price)
      const additionDiscount = !_$('.lav-collapse__package.active')
        ? 0
        : parseInt(_$('.lav-collapse__package.active').dataset.discount) / 100

      const averageDiscount = Math.round(
        ((origPrice * origDiscount + additionalPrice * additionDiscount) /
          (origPrice + additionalPrice)) *
          100
      )

      // console.log(
      //   'Orig -',
      //   origPrice,
      //   origDiscount,
      //   'Add -',
      //   additionalPrice,
      //   additionDiscount,
      //   '=',
      //   origPrice + additionalPrice
      // )

      // console.log(averageDiscount)

      priceEl.textContent = formatPrice(origPrice + additionalPrice)
      discountEl.textContent = _$('.lav-collapse__package.active')
        ? averageDiscount
        : Math.round(origDiscount * 100)

      setTimeout(() => {
        discountEl.textContent = _$('.lav-collapse__package.active')
          ? averageDiscount
          : Math.round(origDiscount * 100)
      }, 400)

      modifyCartUrl()
    }

    function modifyCartUrl() {
      const item1 = _$('#getNow input[name="radios"]:checked')
        ? _$('#getNow input[name="radios"]:checked').value + ':1'
        : ''
      const item2 = _$('.lav-collapse__package.active')
        ? _$('.lav-collapse__package.active').dataset.id + ':1'
        : ''

      _$('#getNow .js-btn').setAttribute(
        'href',
        `/cart/${item1}${item1 && item2 ? ',' : ''}${item2}${
          _$('#getNow .js-btn').dataset.currency
        }`
      )
    }
  }
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
        // config.timer = setTimeout(() => {
        if (isElementInViewport(target)) {
          cb()
          observer.disconnect()
        }
        // }, 3000)
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
