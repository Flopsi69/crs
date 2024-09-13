console.debug('*** Experiment started ***')

// Config for Experiment
const config = {
  dir: 'http://127.0.0.1:5500/geeni/discount10Off',
  // dir: 'https://flopsi69.github.io/crs/geeni/discount10Off',
  clarity: ['set', '', 'variant_1'],
  debug: true
}

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
        z-index: 9999;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.50);
        transition: 0.35s;
        opacity: 0;
        pointer-events: none;
        padding: 15px 8px;
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
        max-width: 360px;
        width: 100%;
        display: none;
        margin: auto;
      }
      .lav-modal__inner.active {
        display: block;
      }
      .lav-modal__close {
        position: absolute;
        z-index: 10;
        top: 0;
        right: 9px;
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

      .lav-discount {
        padding-top: 45px;
        padding-bottom: 30px;

      }
      .lav-discount__head {
        position: relative;
        background: linear-gradient(90deg, #C50717 17%, #F71D2F 44.5%, #DC1122 100%);
        color: #fff;
        padding: 24px 16px 24px 120px;
        border-radius: 16px 16px 0 0;
        font-size: 24px;
        font-weight: 700;
        line-height: 32px;
        text-transform: uppercase;
      }
      .lav-discount__body {
        background: #fff;
        border-radius: 0 0 16px 16px;
      }
      .lav-discount__head:before {
        content: '';
        position: absolute;
        left: 18px;
        bottom: 0;
        background: url('${config.dir}/img/modal-phone.png') no-repeat;
        background-size: contain;
        width: 96px;
        height: 101px;
      }
      .lav-discount__head span {
        position: relative;
      }
      .lav-discount__head span:before {
        content: '';
        position: absolute;
        left: 0px;
        bottom: -2px;
        background: url('${config.dir}/img/blue-underline.svg') no-repeat;
        background-size: contain;
        width: 105px;
        height: 6px;
      }
      .lav-discount__coupon {
        position: relative;
        padding: 24px 8px;
      }
      .lav-discount__coupon:before {
        content: '';
        position: absolute;
        top: 30px;
        left: -26px;
        width: 88px;
        height: 75px;
        background: url('${config.dir}/img/modal-conf1.svg') no-repeat;
        background-size: contain;
        pointer-events: none;
      }
      .lav-discount__coupon:after {
        content: '';
        position: absolute;
        top: 3px;
        right: -8px;
        width: 46px;
        height: 75px;
        background: url('${config.dir}/img/modal-conf2.svg') no-repeat;
        background-size: contain;
        pointer-events: none;
      }
      .lav-discount__clip {
        position: absolute;
        top: 48%;
        transform: translateY(-50%);
        left: 0;
      }
      .lav-discount__clip-after {
        transform: translateY(-50%) rotate(180deg);
        right: 0;
        left: initial;
      }

      .lav-timer {
        padding: 24px 12px;
        background: url('${config.dir}/img/modal-divider.svg') top no-repeat;
      }
      .lav-timer__title {
        color: #000;
        text-align: center;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 18px;
        text-transform: uppercase;
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
        top: 18px;
        background-image: url("${config.dir}/img/timer-dots.svg");
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
        width: 42px;
        height: 51px;
        color: #023F88;
        text-align: center;
        font-size: 48px;
        font-weight: 700;
        line-height: 18px;
        text-transform: uppercase;
        border-radius: 8px;
        background: #fff;
        box-shadow: 0px 1px 2px 0px rgba(2, 63, 136, 0.16);
      }
      .lav-timer__caption {
        color: #000;;
        font-size: 12px;
        font-weight: 700;
        line-height: 1;
        letter-spacing: 1.08px;
        text-transform: uppercase;
        margin-top: 8px;
        text-align: center;
      }
      .lav-discount__control {
        padding: 0 16px 16px;
      }
      .lav-discount__btn {
        border-radius: 30px;
        background: #023F88;
        color: #fff;
        text-align: center;
        font-size: 16px;
        font-weight: 700;
        line-height: 22px;
        letter-spacing: 0.8px;
        text-transform: uppercase;
        height: 54px;
        padding: 5px 15px;
        width: 100%;
        transition: .3s;
      }
      .lav-discount {}
      .lav-discount {}
      .lav-discount {}
      .lav-discount {}

    `

    const stylesEl = document.createElement('style')
    stylesEl.classList.add('exp-modal')
    stylesEl.innerHTML = styles
    document.head.appendChild(stylesEl)
  }
}

// Styles for Experiment
const styles = /* css */ `
  iframe#launcher {
    margin-right: 10px!important;
  }
  .lav-sticky-wrapper .additional-functional {
    bottom: 90px!important;
  }
  .lav-sticky-wrapper iframe#launcher  {
    bottom: 100px!important;
  }
  .lav-sticky-pdp-wrapper .additional-functional {
    bottom: 140px!important;
  }
  .lav-sticky-pdp-wrapper iframe#launcher  {
    bottom: 150px!important;
  }
  .btn--scroll-top {
    display: none!important
  }
  .hero, .warranty-sale, .trusted-reviews {
    display: none!important;
  }
  .shop-all__heading .heading-2 {
    font-size: 18px;
  }
  .shop-all {
    margin: 24px 0!important;
  }
  .lav-matches {
    padding: 16px;
    background-color: #FEF2CF;
  }
  .lav-matches__header {
    color: #000;
    font-size: 18px;
    font-weight: 600;
    line-height: 28px;
  }
  .lav-matches__header-mark {
    color: #F71D2F;
  }
  .lav-device {
    border-top: 1px solid rgba(0, 0, 0, 0.16);
    margin-top: 12px;
    padding-top: 13px;
  }
  .lav-device__title {
    color: #1B1B1B;
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
  }
  .lav-device__list {
    margin-top: 12px;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
  .lav-device__item {
    border-radius: 16px;
    width: 64px;
    height: 64px;
    border: 2px solid transparent;
    background: lightgray;
    box-shadow: 0px 22px 6px 0px rgba(0, 0, 0, 0.00), 0px 14px 6px 0px rgba(0, 0, 0, 0.01), 0px 8px 5px 0px rgba(0, 0, 0, 0.02), 0px 3px 3px 0px rgba(0, 0, 0, 0.03), 0px 1px 2px 0px rgba(0, 0, 0, 0.04);
    cursor: pointer;
    transition: .3s;
  }
  .lav-device__item.active {
    border-color: #00B0EE;
  }

  .lav-fit {
    margin-top: 8px;
  }
  .lav-fit__header {
    display: flex;
    gap: 8px;
    justify-content: space-between;
    align-items: flex-end;
  }
  .lav-fit__title {
    color: #000;
    font-size: 14px;
    font-weight: 600;
    line-height: 22px;
  }
  .lav-fit__gift {
    color: #000;
    text-align: right;
    font-size: 14px;
    font-weight: 800;
    line-height: 20px;
    max-width: 170px;
  }
  .lav-fit__gift span {
    color: #F71D2F;
  }
  .lav-fit__slider {
    margin-top: 12px;
  }
  .lav-fit__slide {
    padding: 8px;
    width: 156px;
    height: 160px;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0px 22px 6px 0px rgba(0, 0, 0, 0.00), 0px 14px 6px 0px rgba(0, 0, 0, 0.01), 0px 8px 5px 0px rgba(0, 0, 0, 0.02), 0px 3px 3px 0px rgba(0, 0, 0, 0.03), 0px 1px 2px 0px rgba(0, 0, 0, 0.04);
  }
  .lav-fit {}
  .lav-fit {}
  .lav-fit {}

  .lav-more__title {
    padding: 24px 16px 16px;
    color: #000;
    font-size: 18px;
    font-weight: 600;
    line-height: 28px;
  }
  .lav-more__list {
    background: #F2F7F8;
    padding: 36px 16px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px 16px;
  }
  .lav-more__icon {
    line-height: 0;
    text-align: center;
  }
  .lav-more__caption {
    color: #000;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    margin-top: 8px;
  }

  .lav-sticky {
    display: flex;
    position: fixed;
    z-index: 999999999999;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 8px 8px 0px 0px;
    background: linear-gradient(90deg, #C50717 17%, #F71D2F 44.5%, #DC1122 100%);
    color: #fff;
    padding: 12px 16px;
    transition: .5s;
    transform: translateY(0);
  }
  .lav-sticky_hide {
    transform: translateY(300%);
  }
  .lav-sticky_pdp {
    bottom: 52px;
  }
  .lav-sticky__close {
    line-height: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 15px;
    position: absolute;
    top: 0;
    transform: translateY(-100%);
    width: 25px;
    height: 20px;
    transition: .3s;
    border-radius: 4px 4px 0px 0px;
    background: #DE1223;
    cursor: pointer;
  }
  @media(hover:hover) {
    .lav-sticky__close:hover {
      opacity: 0.7;
    }
  }
  .lav-sticky__icon {
    line-height: 0;
    flex-shrink: 0;
    margin-right: 4px;
  }
  .lav-sticky__info {
    position: relative;
    font-size: 17px;
    font-weight: 700;
    line-height: 22px;
  }
  .lav-sticky__info:before {
    content: '';
    position: absolute;
    left: 0px;
    top: 20px;
    background: url('${config.dir}/img/blue2-underline.svg') no-repeat;
    background-size: contain;
    width: 108px;
    height: 4px;
  }
  .lav-sticky__info span {
    font-weight: 800;
    white-space: nowrap;
  }
  .lav-timer2 {
    text-align: center;
    margin-left: auto;
  }
  .lav-timer2__title {
    font-size: 14px;
    font-weight: 700;
    line-height: 1;
  }
  .lav-timer2__inner {
    display: flex;
    justify-content: center;
    gap: 19px;
    margin-top: 6px;
  }
  .lav-timer2__value {
    position: relative;
    display: flex;
    gap: 4px;
  }
  .lav-timer2__digit {
    border-radius: 4px;
    background: #fff;
    box-shadow: 0px 1px 2px 0px rgba(2, 63, 136, 0.16);
    color: #000;
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    text-transform: uppercase;
    width: 20px;
    height: 26px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .lav-timer2__value + .lav-timer2__value:before {
    content: '';
    position: absolute;
    left: -8px;
    transform: translateX(-100%);
    top: 7px;
    background-image: url("${config.dir}/img/timer2-dots.svg");
    width: 3px;
    height: 11px;
    background-size: cover;
    background-position: bottom;
  }

  .lav-pdp-discount {
    gap: 6px;
    margin-top: 6px;
    border-radius: 4px;
    background: linear-gradient(90deg, #C50717 17%, #F71D2F 44.5%, #DC1122 100%);
    display: inline-flex;
    align-items: center;
    padding-left: 4px;
    padding-right: 4px;
  }
  .lav-pdp-discount__icon {
    line-height: 0;
    flex-shrink: 0;
  }
  .lav-pdp-discount__icon svg {
    width: 9px;
  }
  .lav-pdp-discount__caption {
    color: #fff;
    font-size: 12px;
    font-weight: 800;
    line-height: 14px;
    text-transform: uppercase;
  }
  .product__price-and-badge .product__price {
    padding-top: 5px!important;
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

  // await (() => window._dy_customer_logged_in.email, false, { ms: 20 })

  const userEmail = window._dy_customer_logged_in?.email
  console.log('User email:', userEmail)

  console.debug('** InitExp **')
  if (location.pathname === '/') {
    connectSplide()
    addMatches()
  }

  if (_$('body.template-product')) {
    addPdpDiscount()
  }

  addSticky()
  addModal()
  initTimer()
}

function addPdpDiscount() {
  if (_$('.product__price-and-badge')) {
    _$('.product__price-and-badge').insertAdjacentHTML(
      'beforebegin',
      /* html */ `
      <div class='lav-pdp-discount'>
        <div class='lav-pdp-discount__icon'>
          ${getSvg('spark')}
        </div>
        <div class='lav-pdp-discount__caption'>Get -10 % off with code APPUSER10</div>
      </div>
    `
    )
  }
}

function addSticky() {
  if (sessionStorage.getItem('stickyClosed')) return

  const markup = /* html */ `
    <div class='lav-sticky'>
      <div class='lav-sticky__close'>
        ${getSvg('stickyClose')}
      </div>

      <div class='lav-sticky__icon'>
        <img src='${config.dir}/img/spark.svg' />
      </div>
      <div class='lav-sticky__info'>
        Get <span>-10 % off</span> <br/> with code <span>APPUSER10</span>
      </div>

      <div class='lav-sticky__timer lav-timer2'>
        <div class='lav-timer2__title'>Limited time offer</div>

        <div class='lav-timer2__inner'>
          <div class='lav-timer2__value lav-minutes'>
            <span class='lav-timer2__digit'>0</span>
            <span class='lav-timer2__digit'>0</span>
          </div>

          <div class='lav-timer2__value lav-seconds'>
            <span class='lav-timer2__digit'>0</span>
            <span class='lav-timer2__digit'>0</span>
          </div>
        </div>
      </div>
    </div>
  `

  _$('body').insertAdjacentHTML('beforeend', markup)

  _$('body').classList.add('lav-sticky-wrapper')

  if (_$('.sticky-btn-wrapper')) {
    _$('.lav-sticky').classList.add('lav-sticky_pdp')
    _$('body').classList.add('lav-sticky-pdp-wrapper')
  }

  _$('.lav-sticky__close').addEventListener('click', (e) => {
    e.preventDefault()
    sessionStorage.setItem('stickyClosed', true)

    _$('.lav-sticky').classList.add('lav-sticky_hide')
    _$('body').classList.remove('lav-sticky-wrapper')
    _$('body').classList.remove('lav-sticky-pdp-wrapper')

    setTimeout(() => {
      _$('.lav-sticky').remove()
    }, 600)
  })
}

function addMatches() {
  const markup = /* html */ `
    <div class='lav-matches'>
      <div class='lav-matches__header'>
        Hey, {Name}! <br/>
        Get perfect matches for your device with&nbsp;<span class='lav-matches__header-mark'>max&nbsp;savings</span>
      </div>

      <div class='lav-matches__device lav-device'>
        <div class='lav-device__title'>Your device: Geeni Hawk 3 1080p Outdoor...</div>
        <div class='lav-device__list'>
          <div class='lav-device__item'></div>
          <div class='lav-device__item'></div>
          <div class='lav-device__item'></div>
        </div>
      </div>

      <div class='lav-matches__fit lav-fit'>
        <div class='lav-fit__header'>
          <div class='lav-fit__title'>Great fit products</div>
          <div class='lav-fit__gift'>
            Get <span>-10 % off</span> with code <span>APPUSER10</span>
          </div>
        </div>

        <div class='lav-fit__slider splide'>
          <div class="splide__track">
            <ul class="splide__list">
              <li class="splide__slide lav-fit__slide">Slide 01</li>
              <li class="splide__slide lav-fit__slide">Slide 02</li>
              <li class="splide__slide lav-fit__slide">Slide 03</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class='lav-more'>
      <div class='lav-more__title'>
        Get More with Every Purchase at Geeni&nbsp;Store
      </div>
      <div class='lav-more__list'>
        <div class='lav-more__item'>
          <div class='lav-more__icon'>
            <img src='${config.dir}/img/icon-truck.svg' />
          </div>
          <div class='lav-more__caption'>
            Free Shipping <br/> over $69
          </div>
        </div>
        <div class='lav-more__item'>
          <div class='lav-more__icon'>
            <img src='${config.dir}/img/icon-envelope.svg' />
          </div>
          <div class='lav-more__caption'>
            30-Day easy <br/> returns
          </div>
        </div>
        <div class='lav-more__item'>
          <div class='lav-more__icon'>
            <img src='${config.dir}/img/icon-gear.svg' />
          </div>
          <div class='lav-more__caption'>
            Direct from <br/> manufacturer
          </div>
        </div>
        <div class='lav-more__item'>
          <div class='lav-more__icon'>
            <img src='${config.dir}/img/icon-warranty.svg' />
          </div>
          <div class='lav-more__caption'>
            1-Year <br/> Warranty
          </div>
        </div>
      </div>
    </div>
  `

  _$('.shop-all').insertAdjacentHTML('beforebegin', markup)

  waitFor(
    () => typeof Splide == 'function',
    () => {
      new Splide('.lav-fit__slider', {
        autoWidth: true,
        gap: 8
      }).mount()
    }
  )

  _$$('.lav-device__item').forEach((item) => {
    item.addEventListener('click', () => {
      if (item.classList.contains('active')) return

      _$('.lav-device__item.active')?.classList.remove('active')
      item.classList.add('active')
    })
  })
}

function addModal() {
  const markup = /* html */ `
    <div class='lav-modal__close'>${getSvg('closeModal')}</div>

    <div class='lav-discount__head'>
        ONLY <span>New app</span> user deal
    </div>

    <div class='lav-discount__body'>
      <div class='lav-discount__coupon'>
        <img class='lav-discount__coupon-main' src='${
          config.dir
        }/img/coupon.png' alt='Coupon' />
        <img class='lav-discount__clip lav-discount__clip-before' src='${
          config.dir
        }/img/coupon-clip.svg' />
        <img class='lav-discount__clip lav-discount__clip-after' src='${
          config.dir
        }/img/coupon-clip.svg' />
      </div>

      <div class='lav-timer'>
        <div class='lav-timer__title'>ENDS IN</div>

        <div class='lav-timer__inner'>
          <div class='lav-timer__item'>
            <div class='lav-timer__value lav-minutes'>
              <span class='lav-timer__digit'>0</span>
              <span class='lav-timer__digit'>0</span>
            </div>
            <div class='lav-timer__caption'>Min</div>
          </div>

          <div class='lav-timer__item'>
            <div class='lav-timer__value lav-seconds'>
              <span class='lav-timer__digit'>0</span>
              <span class='lav-timer__digit'>0</span>
            </div>
            <div class='lav-timer__caption'>Sec</div>
          </div>
        </div>
      </div>

      <div class='lav-discount__control'>
        <button class='lav-discount__btn'>START SHOPPING</button>
      </div>
    </div>
  `

  new Modal('lav-discount', markup)

  // Modal.open('.lav-discount')
}

function initTimer() {
  const totalTime = 20 * 60

  const minutesEls = _$$('.lav-minutes')
  const secondsEls = _$$('.lav-seconds')

  console.log(minutesEls, secondsEls)

  let timeLeft = sessionStorage.getItem('timeLeft')
    ? parseInt(sessionStorage.getItem('timeLeft'))
    : totalTime

  function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60)
    const seconds = timeLeft % 60

    minutesEls.forEach((el) => {
      el.children[0].textContent = Math.floor(minutes / 10)
      el.children[1].textContent = minutes % 10
    })

    secondsEls.forEach((el) => {
      el.children[0].textContent = Math.floor(seconds / 10)
      el.children[1].textContent = seconds % 10
    })
  }

  function countdown() {
    if (timeLeft > 0) {
      timeLeft--
      sessionStorage.setItem('timeLeft', timeLeft)
      updateTimerDisplay()
    } else {
      clearInterval(timerInterval) // Stop the timer when it reaches zero
    }
  }

  updateTimerDisplay()
  const timerInterval = setInterval(countdown, 1000)
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
    stickyClose: `
      <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
        <path d="M5.32465 4.50007L8.82914 0.995468C9.0572 0.767508 9.0572 0.398929 8.82914 0.17097C8.60118 -0.0569899 8.2326 -0.0569899 8.00464 0.17097L4.50004 3.67557L0.995548 0.17097C0.767482 -0.0569899 0.399009 -0.0569899 0.17105 0.17097C-0.0570166 0.398929 -0.0570166 0.767508 0.17105 0.995468L3.67554 4.50007L0.17105 8.00467C-0.0570166 8.23263 -0.0570166 8.6012 0.17105 8.82916C0.284656 8.94288 0.434031 9 0.583299 9C0.732567 9 0.881835 8.94288 0.995548 8.82916L4.50004 5.32456L8.00464 8.82916C8.11835 8.94288 8.26762 9 8.41689 9C8.56616 9 8.71542 8.94288 8.82914 8.82916C9.0572 8.6012 9.0572 8.23263 8.82914 8.00467L5.32465 4.50007Z" fill="white"/>
      </svg>
    `,
    closeModal: `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M11.8325 10.0001L19.6203 2.21215C20.1271 1.70557 20.1271 0.88651 19.6203 0.379933C19.1137 -0.126644 18.2947 -0.126644 17.7881 0.379933L10.0001 8.16793L2.21233 0.379933C1.70552 -0.126644 0.886688 -0.126644 0.380111 0.379933C-0.126704 0.88651 -0.126704 1.70557 0.380111 2.21215L8.16787 10.0001L0.380111 17.7881C-0.126704 18.2947 -0.126704 19.1138 0.380111 19.6204C0.632569 19.8731 0.964513 20 1.29622 20C1.62793 20 1.95963 19.8731 2.21233 19.6204L10.0001 11.8324L17.7881 19.6204C18.0408 19.8731 18.3725 20 18.7042 20C19.0359 20 19.3676 19.8731 19.6203 19.6204C20.1271 19.1138 20.1271 18.2947 19.6203 17.7881L11.8325 10.0001Z" fill="white"/>
      </svg>
    `,
    spark: `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="24" viewBox="0 0 16 24" fill="none">
        <path d="M14.7519 9.00055H9.34554L10.2457 1.39791C10.2487 1.36825 10.2516 1.27962 10.2516 1.25105C10.2516 0.561069 9.69053 0 9.00201 0C8.61051 0 8.23695 0.187512 7.98059 0.531038L0.250504 12.0007C0.0900934 12.2153 0 12.4823 0 12.7508C0 13.4408 0.561069 14.0004 1.24959 14.0004H5.66599L4.75371 22.6215C4.75078 22.6482 4.74931 22.7233 4.74931 22.7504C4.74931 23.4404 5.31038 24 5.9989 24C6.3904 24 6.76396 23.8125 7.013 23.4796L15.7495 10.9987C15.9099 10.7841 16 10.5171 16 10.2487C16.0015 9.56162 15.4419 9.00055 14.7519 9.00055Z" fill="white"/>
      </svg>
    `
  }

  return svgObj[name]
}