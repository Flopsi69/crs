console.debug('*** Experiment started ***')

// Config for Experiment
const config = {
  // dir: 'http://127.0.0.1:5500/natpat/adult',
  dir: 'https://flopsi69.github.io/crs/natpat/adult',
  clarity: ['set', 'adult_2_c"', 'variant_1'],
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

.lav-collapse {
  margin: 10px auto 0;
  border-radius: 6px;
  border: 2px solid #D9D9D9;
  border-radius: 6px;
  background: #F9F8F6;
  padding: 15px;
}
.lav-collapse__image {
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  width: 80px;
  height: 80px;
  border-radius: 3px;
  border: 1px solid #ECEEF0;
}
.lav-collapse__image img {
  width: 63px;
  margin-bottom: 0!important;
}
.lav-collapse__head {
  cursor: pointer;
  display: flex;
  gap: 16px;
  align-items: center;
}
.lav-collapse__title {
  color:#0C0B0B;
  font-family: DINEngschrift LT, Roboto, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0.48px;
  text-transform: uppercase;
  margin-bottom: -4px;
}
.lav-collapse__body {
  border-top: 1px solid #D9D9D9;
  padding: 8px 0 15px;
  margin: 0 15px;
  text-align: left;
  display: none;
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
  line-height: 18px;
  letter-spacing: 0.6px;
  margin-top: 4px;
}
.lav-summary__caption {
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
      if (e.target.closest('.lav-modal__close')) {
        this.close()
        pushDataLayer(
          'exp_adult2_click_021',
          'Change',
          'click',
          'SELECT PACKAGE'
        )
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
        z-index: 9999999999;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: #fff;
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
        background: #fff;
        width: 100%;
        display: none;
        margin: 0 auto;
        padding: 15px 20px 0;
      }
      .lav-modal__inner.active {
        display: block;
      }
      [data-modal] {
        cursor: pointer;
      }
      .lav-modal-open {
        overflow: hidden;
      }

      .lav-selected {
        padding: 12px;
        border-radius: 6px;
        background: #ECEEF0;
      }
      .lav-selected__head {
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: space-between;
      }
      .lav-selected__title {
        color: #212529;
        font-family: Roboto;
        font-size: 15px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-transform: uppercase;
      }
      .lav-selected__change {
        color: #212529;
        font-family: Roboto;
        font-size: 15px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-decoration-line: underline;
        text-decoration-style: solid;
        text-transform: uppercase;
      }
      .lav-pack {
        display: flex;
        align-items: center;
        padding: 8px;
        border-radius: 6px;
        border: 1px solid #ECEEF0;
        background: #FFF;
        margin-top: 8px;
        gap: 8px;
      }
      .lav-pack__image {
        line-height: 0;
        width: 36px;
        height: 36px;
        flex-shrink: 0;
        border-radius: 3px;
        border: 1px solid #ECEEF0;
        padding: 2px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      }
      .lav-pack__image img {
        max-width: 160%;
      }
      .lav-pack__price {
        color: #0C0B0B;
        font-family: DINEngschrift LT, Roboto, sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 110%;
        letter-spacing: 0.32px;
        text-transform: uppercase;
      }
      .lav-pack__amount {
        color: #6F6F6F;
        font-family: Roboto;
        font-size: 12px;
        font-weight: 400;
        line-height: 130%;
      }
      .lav-pack__total {
        margin-left: auto;
        color: #0C0B0B;
        font-family: Roboto;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;
      }
      .lav-modal__title {
        color: #0C0B0B;
        font-family: DINEngschrift LT, Roboto, sans-serif;
        font-size: 30px;
        font-weight: 400;
        line-height: 36px;
        letter-spacing: 0.6px;
        margin-top: 12px;
      }
      .lav-modal__subtitle {
        margin-top: 8px;
        color: #181717;
        font-family: Roboto;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 22px;
        letter-spacing: 0.5px;
      }
      .lav-modal__descr {
        margin-top: 4px;
        color: #181717;
        font-family: Roboto;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0.5px;
      }
      .lav-summary {
        position: sticky;
        bottom: 0;
        padding: 15px 20px;
        text-align: center;
        background: #FFF;
        box-shadow: 12px 0px 32px 0px rgba(0, 0, 0, 0.08);
        margin: 28px -20px 0;
      }
      .lav-summary__price {
        color: #181717;
        font-family: Roboto;
        font-size: 25px;
        font-style: normal;
        font-weight: 700;
        line-height: 35px;
        letter-spacing: 0.6px;
      }
      .lav-summary__descr {
        color: #181717;
        font-family: Roboto;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: 0.5px;
        margin-top: 2px;
      }
      .lav-summary__btn {
        margin-top: 10px;
        border-radius: 500px;
        background: #FF3C81;
        color: #FFF;
        text-align: center;
        font-family: DINEngschrift LT, Roboto, sans-serif;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: 1px;
        text-transform: uppercase;
        height: 56px;
        width: 100%;
        border: none;
        outline: none;
      }
    `

    const stylesEl = document.createElement('style')
    stylesEl.classList.add('exp-modal')
    stylesEl.innerHTML = styles
    document.head.appendChild(stylesEl)
  }
}

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
  addModal()
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

function addModal() {
  const markup = /* html */ `
    <div class="lav-selected">
      <div class="lav-selected__head">
        <div class="lav-selected__title">SELECTED Package</div>
        <div class="lav-selected__change lav-modal__close">Change</div>
      </div>
      <div class="lav-pack">
        <div class="lav-pack__image">
          <img src="/cdn/shop/files/natpat-mosquito-patches-for-kids-happy-outings-with-bite-free-fun-38958486847532.jpg?v=1727762349&width=416" />
        </div>
        <div class="lav-pack__info">
          <div class="lav-pack__price">$12.00/pack</div>
          <div class="lav-pack__amount">3 Packs</div>
        </div>
        <div class="lav-pack__total">$36.00</div>
      </div>
    </div>

    <div class="lav-modal__title">TRY Patches For Adults</div>
    <div class="lav-modal__subtitle">For Kids and Adults Alike: Because Mosquitoes Don’t Play Favorites! </div>
    <div class="lav-modal__descr">Pack of 40 adult sized neutral colours BuzzPatch mosquito repellent stickers</div>

    <div class="lav-collapse">
      <div class="lav-collapse__head">
        <div class="lav-collapse__image">
          <img src="${config.dir}/img/adults-mini.png" />
        </div>
        <div class="lav-collapse__title">Patches For Adults</div>
      </div>

      <div class="lav-collapse__packages">
        <div class="lav-collapse__package" data-id='41195285053484' data-price='${productAdultsVariants['3pack'].fullPrice}' data-discount='51'>
          <div class="lav-collapse__package-title">3 Packs</div>
          <div class="lav-collapse__package-price">
            <span>${productAdultsVariants['3pack'].price}</span> Each
          </div>
        </div>
        
        <div class="lav-collapse__package" data-id='41195285184556' data-price='${productAdultsVariants['2pack'].fullPrice}' data-discount='45'>
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

        <div class="lav-collapse__package" data-id='41195285250092' data-price='${productAdultsVariants['4pack'].fullPrice}' data-discount='57'>
          <div class="lav-collapse__package-title">4 Packs</div>
          <div class="lav-collapse__package-price">
            <span>${productAdultsVariants['4pack'].price}</span> Each
          </div>
        </div>
      </div>
    </div>

    <div class="lav-summary">
      <div class="lav-summary__price">$36.00 (51% OFF)</div>
      <div class='lav-summary__caption'>This price for Adults and Kids packs</div>
      <div class="lav-summary__descr">
        Try BuzzPatch Risk-Free Today <br/>If It Doesn’t Work For You, It’s Free!
      </div>
      <button class="lav-summary__btn">Continue CHECKOUT</button>
    </div>
  `

  new Modal('lav-adult', markup)

  _$$('.lav-collapse__package').forEach((item) => {
    item.addEventListener('click', function () {
      pushDataLayer(
        'exp_adult2_click_03',
        item.querySelector('.lav-collapse__package-title').textContent.trim(),
        'click',
        'TRY Patches For Adults'
      )
      if (this.classList.contains('active')) {
        _$('.lav-collapse__package.active').classList.remove('active')

        updatePrice()

        return
      }

      _$('.lav-collapse__package.active')?.classList.remove('active')

      this.classList.add('active')

      updatePrice()
    })
  })

  _$$('.js-packs input[type=radio]').forEach((item) => {
    item.addEventListener('change', function () {
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
    if (_$('.lav-collapse__package.active')) {
      $('.lav-summary__caption').slideDown()
    } else {
      $('.lav-summary__caption').slideUp()
    }
  }

  function updatePrice() {
    checkCaptionShow()
    const priceEl = _$('.lav-summary__price')

    const origDiscount = _$('#radios-0').checked
      ? getpack3OffPrice / 100
      : _$('#radios-1').checked
      ? getpack4OffPrice / 100
      : _$('#radios-2').checked
      ? getpack2OffPrice / 100
      : _$('#radios-4').checked
      ? getpack5OffPrice / 100
      : 0

    const origPrice = !_$('#getNow input[name="radios"]:checked')
      ? 0
      : parsePrice(_$('#getNow input[name="radios"]:checked').dataset.fullPrice)

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

    const symbol = _$('#addToCart').dataset.symbol

    setPrice()

    function setPrice() {
      const discountTotal = _$('.lav-collapse__package.active')
        ? averageDiscount
        : Math.round(origDiscount * 100)

      priceEl.textContent =
        symbol +
        formatPrice(origPrice + additionalPrice) +
        ((_$('#radios-3').checked &&
          _$('.lav-collapse__package.active[data-id="41195285119020"]')) ||
        discountTotal === 0
          ? ''
          : ' (' + discountTotal + '% OFF)')
    }

    modifyCartUrl()
  }

  function modifyCartUrl() {
    const item1 = _$('#getNow input[name="radios"]:checked')
      ? _$('#getNow input[name="radios"]:checked').value + ':1'
      : ''
    const item2 =
      _$('.lav-collapse__package.active') && !_$('#radios-4').checked
        ? _$('.lav-collapse__package.active').dataset.id + ':1'
        : ''

    _$('#getNow .js-btn').setAttribute(
      'href',
      `/cart/${item1}${item1 && item2 ? ',' : ''}${item2}${
        _$('#getNow .js-btn').dataset.currency
      }`
    )
  }

  _$('#addToCart').addEventListener('click', (e) => {
    if (!_$('#radios-4').checked) {
      e.preventDefault()
      openModal()
    }
  })

  _$('.lav-summary__btn').addEventListener('click', () => {
    pushDataLayer(
      'exp_adult2_click_05',
      'Continue checkout',
      'click',
      'TRY Patches For Adults'
    )
    location.href = _$('#getNow .js-btn').href
  })

  function openModal() {
    updatePrice()
    const amount = parseInt(
      _$('.js-packs input[type=radio]:checked + label').textContent
    )

    let image = ''
    let caption = `${amount} Packs`
    let price = _$('.js-packs input[type=radio]:checked + label span').innerText

    if (amount === 1) {
      image =
        '/cdn/shop/files/natpat-mosquito-patches-for-kids-happy-outings-with-bite-free-fun-38958486650924.jpg?v=1727762170&width=416'
      caption = `${amount} Pack`
    } else if (amount === 2) {
      image =
        '/cdn/shop/files/natpat-mosquito-patches-for-kids-happy-outings-with-bite-free-fun-38958486716460.jpg?v=1727762355&width=416'
    } else if (amount === 3) {
      image =
        '/cdn/shop/files/natpat-mosquito-patches-for-kids-happy-outings-with-bite-free-fun-38958486781996.jpg?v=1727762175&width=416'
    } else if (amount === 4) {
      image =
        '/cdn/shop/files/natpat-mosquito-patches-for-kids-happy-outings-with-bite-free-fun-38958486847532.jpg?v=1727762349&width=416'
    } else {
      image = '/cdn/shop/files/lp-buzzpatch-4bp-1bpa.png?v=4419660517383918384'
      caption = 'Bundle'
    }

    _$('.lav-pack__amount').textContent = caption
    _$('.lav-pack__image img').src = image
    _$('.lav-pack__price').textContent = price.replace(' Each', '/pack')
    _$('.lav-pack__total').innerHTML = _$('#getNow .js-total').innerHTML

    Modal.open('.lav-adult')

    pushDataLayer(
      'exp_adult2_element_02',
      'TRY Patches For Adults',
      'view',
      'SELECT PACKAGE'
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
