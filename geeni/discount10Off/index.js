// const origLog = console.log
// console.log = function () {
//   origLog.apply(console, arguments)
//   navigator.sendBeacon(
//     'https://console.wiredgeese.com/log/geeni',
//     JSON.stringify(arguments)
//   )
// }

// const origLogError = console.error
// console.error = function () {
//   origLogError.apply(console, arguments)
//   if (arguments[0]?.message) {
//     console.log('error: ' + arguments[0].message)
//   } else {
//     console.log('error: ' + JSON.stringify(arguments))
//   }
// }

console.log('*** Experiment started ***')
// console.log(location.href)

// Config for Experiment
const config = {
  // dir: 'http://127.0.0.1:5500/geeni/discount10Off',
  dir: 'https://flopsi69.github.io/crs/geeni/discount10Off',
  clarity: ['set', 'exp_promo', 'variant_1'],
  debug: false
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
      ) {
        pushDataLayer('exp_promo_button_02', 'Close', 'click', 'Pop up Get 10')
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
        z-index: 999999;
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
        padding: 24px 14px 24px 118px;
        border-radius: 16px 16px 0 0;
        font-size: 21px;
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
        left: -5px;
        bottom: -5px;
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
  .go1272136950 + [role="dialog"], .needsclick [style="display: flex; z-index: 90000; position: fixed; left: 0px; top: 0px; width: 100%; height: 100%; justify-content: center; align-items: center; overflow: auto; background-color: rgba(0, 0, 0, 0.41); animation-timing-function: ease; animation-play-state: running; animation-iteration-count: 1; animation-fill-mode: forwards; animation-delay: 0s; animation-duration: 0.35s; animation-name: klaviyo-fadein;"] {
    display: none!important;
  }
  iframe#launcher {
    margin-right: 10px!important;
  }
  .lav-modal.active + .lav-sticky {
    opacity: 0;
    pointer-events: none;
  }
  .additional-functional {
    display: none!important;
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
  .crs-products {
    display: none!important;
  }
  .crs-products_exp {
    display: block!important;
    margin-bottom: 100px!important;
  }
  .crs-products_exp .product__shop-now {
    display: none!important;
  }
  .crs-products_exp .heading-2 {
    color: #000;
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px;
    margin-bottom: 16px;
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
    overflow: hidden;
  }
  .lav-matches__preload {
    padding: 16px;
    background-color: #FEF2CF;
    overflow: hidden;
    display: flex;
    justify-content: center;
  }
  .lav-matches__loader {
    width: 50px;
    padding: 8px;
    aspect-ratio: 1;
    border-radius: 50%;
    background: #00b4f1;
    --_m:
      conic-gradient(#0000 10%,#000),
      linear-gradient(#000 0 0) content-box;
    -webkit-mask: var(--_m);
            mask: var(--_m);
    -webkit-mask-composite: source-out;
            mask-composite: subtract;
    animation: l3 1s infinite linear;
  }
  @keyframes l3 {to{transform: rotate(1turn)}}
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
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
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
    background-color: #fff;
    background-size: contain;
    box-shadow: 0px 22px 6px 0px rgba(0, 0, 0, 0.00), 0px 14px 6px 0px rgba(0, 0, 0, 0.01), 0px 8px 5px 0px rgba(0, 0, 0, 0.02), 0px 3px 3px 0px rgba(0, 0, 0, 0.03), 0px 1px 2px 0px rgba(0, 0, 0, 0.04);
    cursor: pointer;
    transition: .3s;
  }
  .lav-device__item.active {
    border-color: #00B0EE;
  }

  .crs-products_exp .product-grid-item {
    position: relative;
  }
  .crs-products_exp .product-grid-item:before, .lav-fit .product-grid-item:before  {
    content: '';
    display: block;
    position: absolute;
    z-index: 1;
    right: 4px;
    top: 4px;
    width: 40px;
    height: 40px;
    background: url('${config.dir}/img/prime.svg') no-repeat;
  }
  .lav-fit {
    margin-top: 12px;
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
    // height: 160px;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0px 22px 6px 0px rgba(0, 0, 0, 0.00), 0px 14px 6px 0px rgba(0, 0, 0, 0.01), 0px 8px 5px 0px rgba(0, 0, 0, 0.02), 0px 3px 3px 0px rgba(0, 0, 0, 0.03), 0px 1px 2px 0px rgba(0, 0, 0, 0.04);
  }
  .lav-fit .product-grid-item__title {
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px;
  }
  .lav-fit .product-grid-item__price {
    flex-direction: row;
    color: #000;
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    font-weight: 800;
    line-height: 20px;
    margin-right: 4px;
    margin-top: auto;
  }
  .lav-fit .product-grid-item {
    display: flex;
    height: 100%;
  }
  .lav-fit .product-grid-item__inner {
    display: flex;
    flex-flow: column;
  }
  .lav-fit .product-grid-item__info {
    display: flex;
    flex-flow: column;
    gap: 12px;
    flex-grow: 1;
  }
  .lav-fit .product-grid-item__price__new {
    color: #000;
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    font-weight: 800;
    line-height: 20px;
    margin-right: 4px;
  }
  .lav-fit .product-grid-item__price s {
    color: var(--Grey-800, #4A4A4A);
    font-family: Manrope;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
  }
  .lav-fit .btn--quick {
    display: none;
  }
  .lav-fit .yotpo-widget-instance {
    display: none;
  }
  .lav-fit .splide__track {
    overflow: visible;
  }
  .lav-fit .alternative-options {
    margin: 0;
  }
  .lav-fit .product-grid-item__alternates .alternative-options__item-label {
    min-width: 56px;
    text-align: center;
    color: var(--Blue-dark, #122231);
    border: 1px solid var(--Grey-500, #DEDEDE);
    font-size: 11px;
  }
  .lav-fit .product-grid-item__alternates .alternative-options__item--active .alternative-options__item-label {
    border-color: #00B0EE
  }
  .lav-fit .splide__pagination__page {
    background: #fff;
    display: flex;
    width: 100%;
    border-radius: 100px;
    transition: .3s;
  }
  .lav-fit .splide__pagination__page.is-active {
    background: #000;
  }
  .lav-fit .splide__pagination {
    border-radius: 100px;
    margin-top: 12px;
    background: #fff;
    height: 4px;
    box-shadow: 0px 22px 6px 0px rgba(0, 0, 0, 0.00), 0px 14px 6px 0px rgba(0, 0, 0, 0.01), 0px 8px 5px 0px rgba(0, 0, 0, 0.02), 0px 3px 3px 0px rgba(0, 0, 0, 0.03), 0px 1px 2px 0px rgba(0, 0, 0, 0.04);
  }
  .lav-fit .splide__pagination li {
    display: flex;
    flex-grow: 1;
    height: 100%;
  }
  .lav-fit__progress {
    border-radius: 100px;
    background: #fff;
    margin-top: 12px;
    box-shadow: 0px 22px 6px 0px rgba(0, 0, 0, 0.00), 0px 14px 6px 0px rgba(0, 0, 0, 0.01), 0px 8px 5px 0px rgba(0, 0, 0, 0.02), 0px 3px 3px 0px rgba(0, 0, 0, 0.03), 0px 1px 2px 0px rgba(0, 0, 0, 0.04);
  }
  .lav-fit__bar {
    background: #000;
    border-radius: 100px;
    height: 4px;
    transition: width 400ms ease, left 400ms ease;
    width: 0;
    transform: translateX(-100%);
    position: relative;
  }
  .template-index .top-amazon, .template-index .warranty-sale-custom{
    margin-bottom: 0;
    display: none!important;
  }

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
    align-items: center;
    position: fixed;
    z-index: 120;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 8px 8px 0px 0px;
    background: linear-gradient(90deg, #C50717 17%, #F71D2F 44.5%, #DC1122 100%);
    color: #fff;
    padding: 12px 12px 12px 5px;
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
    margin-right: 5px;
  }
  .lav-sticky__info {
    position: relative;
    font-size: 16px;
    font-weight: 700;
    line-height: 22px;
  }
  .lav-sticky__info:before {
    content: '';
    position: absolute;
    left: -3px;
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
    white-space: nowrap;
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
    padding-left: 6px;
    padding-right: 6px;
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
  .lav-pdp-discount__caption span {
    font-weight: 400;
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

const deviceMap = {
  bewrshc1jvlfavl5: {
    id: '8136411611388',
    name: 'Geeni Prisma A21 Smart Bulb - Multicolor and Warm White',
    related: [
      { productId: '4384644989007', variantId: '31352740675663' },
      { productId: '6628294262863', variantId: '39649036206159' },
      { productId: '8088106828028', variantId: '44449445314812' },
      { productId: '4821841969231', variantId: '32691873808463' },
      { productId: '8305370693884', variantId: '45138686771452' },
      { productId: '4850401181775', variantId: '32807658782799' }
    ]
  },
  odrhfd5d0ak2fp3b: {
    id: '7752466858236',
    name: 'Merkury Innovations 720P Camera',
    type: 'webp',
    related: [
      { productId: '4381945921615', variantId: '31341859930191' },
      { productId: '4384644989007', variantId: '31352740675663' },
      { productId: '8215276650748', variantId: '44844077777148' },
      { productId: '8210956222716', variantId: '44829321330940' },
      { productId: '8094250369276', variantId: '44472366858492' }
    ]
  },
  '7xdihijnnuambnr2': {
    id: '7607581016316',
    name: 'Merkury Innovations 1080p Camera',
    related: [
      { productId: '4850401181775', variantId: '32807658782799' },
      { productId: '4384644989007', variantId: '31352740675663' },
      { productId: '8215276650748', variantId: '44844077777148' },
      { productId: '8210956222716', variantId: '44829321330940' },
      { productId: '8094250369276', variantId: '44472366858492' }
    ]
  },
  bawdr6hlvis7yixw: {
    id: '7607581442300',
    name: 'Merkury Innovations A19 Light Bulb, 60W White (1-Pack)',
    related: [
      { productId: '4384644989007', variantId: '31352740675663' },
      { productId: '6628294262863', variantId: '39649036206159' },
      { productId: '8088106828028', variantId: '44449445314812' },
      { productId: '4821841969231', variantId: '32691873808463' },
      { productId: '8136411611388', variantId: '44629116879100' },
      { productId: '4850401181775', variantId: '32807658782799' }
    ]
  },
  clczbpnx3yimjbcw: {
    id: '4680310063183',
    name: 'Geeni Dot Smart Plug',
    related: [
      { productId: '4821841969231', variantId: '32691873808463' },
      { productId: '2434904391759', variantId: '21552685711439' },
      { productId: '6628294262863', variantId: '39649036206159' },
      { productId: '4660020936783', variantId: '32297298329679' },
      { productId: '8088246157564', variantId: '44449774993660' }
    ]
  },
  G4jwjOhQBYx5b5nw: {
    id: '7607582228732',
    name: 'Merkury Innovations A21 Multicolor Light Bulb',
    related: [
      { productId: '6628294262863', variantId: '39649036206159' },
      { productId: '8088106828028', variantId: '44449445314812' },
      { productId: '4821841969231', variantId: '32691873808463' },
      { productId: '8136411611388', variantId: '44629116879100' },
      { productId: '4850401181775', variantId: '32807658782799' }
    ]
  },
  k1okbbubwccmdcaq: {
    id: '4850423136335',
    name: 'Geeni Glimpse 1080p Camera',
    related: [
      { productId: '4821841969231', variantId: '32691873808463' },
      { productId: '8094251385084', variantId: '44472367775996' },
      { productId: '8305370693884', variantId: '45138686771452' },
      { productId: '4680370815055', variantId: '32334053310543' },
      { productId: '4850401181775', variantId: '32807658782799' },
      { productId: '8071365787900', variantId: '44401167565052' }
    ]
  },
  yk5dijqoa2oy341i: {
    id: '7607579148540',
    name: 'Merkury Innovations Indoor/Outdoor Symphony Light Strip (16 ft.)',
    related: [
      { productId: '4384644989007', variantId: '31352740675663' },
      { productId: '6628294262863', variantId: '39649036206159' },
      { productId: '8088106828028', variantId: '44449445314812' },
      { productId: '4821841969231', variantId: '32691873808463' },
      { productId: '8305370693884', variantId: '45138686771452' },
      { productId: '4850401181775', variantId: '32807658782799' }
    ]
  },
  szqueo9p61yifscy: {
    id: '7607578558716',
    name: 'Merkury Innovations Plug',
    related: [
      { productId: '4821841969231', variantId: '32691873808463' },
      { productId: '2434904391759', variantId: '21552685711439' },
      { productId: '6628294262863', variantId: '39649036206159' },
      { productId: '4660020936783', variantId: '32297298329679' },
      { productId: '8088246157564', variantId: '44449774993660' }
    ]
  },
  EeJJEptgHhZDScTD: {
    id: '485103206440',
    name: 'Geeni Spot Plug',
    related: [
      { productId: '4821841969231', variantId: '32691873808463' },
      { productId: '2434904391759', variantId: '21552685711439' },
      { productId: '6628294262863', variantId: '39649036206159' },
      { productId: '4660020936783', variantId: '32297298329679' },
      { productId: '8088246157564', variantId: '44449774993660' }
    ]
  },
  bwolocfvtdy3w2mk: {
    id: '7607580721404',
    name: 'Merkury Innovations 1080P Auto-Tracking Security Camera',
    related: [
      { productId: '4381945921615', variantId: '31341859930191' },
      { productId: '4384644989007', variantId: '31352740675663' },
      { productId: '8215276650748', variantId: '44844077777148' },
      { productId: '8210956222716', variantId: '44829321330940' },
      { productId: '8094250369276', variantId: '44472366858492' }
    ]
  },
  eysxtzvaflhxyzyf: {
    id: '4836701864015',
    name: 'Geeni Hawk 3 1080p Outdoor Camera',
    related: [
      { productId: '8607220203772', variantId: '45966877753596' },
      { productId: '8619661132028', variantId: '45995967611132' },
      { productId: '8088106828028', variantId: '44449445314812' },
      { productId: '4821841969231', variantId: '32691873808463' },
      { productId: '8305370693884', variantId: '45138686771452' },
      { productId: '4850401181775', variantId: '32807658782799' }
    ]
  },
  kcfw92tv9nworwl7: {
    id: '4836701864015',
    name: 'Geeni Hawk 3 1080p Outdoor Camera',
    related: [
      { productId: '8607220203772', variantId: '45966877753596' },
      { productId: '8619661132028', variantId: '45995967611132' },
      { productId: '8088106828028', variantId: '44449445314812' },
      { productId: '4821841969231', variantId: '32691873808463' },
      { productId: '8305370693884', variantId: '45138686771452' },
      { productId: '4850401181775', variantId: '32807658782799' }
    ]
  },
  // bewrshc1jvlfavl5: {
  //   id: '8212624900348',
  //   name: 'Hawk 2 Outdoor Camera',
  //   related: [
  //     { productId: '8607220203772', variantId: '45966877753596' },
  //     { productId: '8619661132028', variantId: '45995967611132' },
  //     { productId: '8088106828028', variantId: '44449445314812' },
  //     { productId: '4821841969231', variantId: '32691873808463' },
  //     { productId: '8305370693884', variantId: '45138686771452' },
  //     { productId: '4850401181775', variantId: '32807658782799' }
  //   ]
  // },
  a9wag4xbx6nhrxwy: {
    id: '2451361300559',
    name: 'Geeni Look - Indoor Camera',
    related: [
      { productId: '2451361300559', variantId: '21666897330255' },
      { productId: '6628294262863', variantId: '39649036206159' },
      { productId: '8088106828028', variantId: '44449445314812' },
      { productId: '4821841969231', variantId: '32691873808463' },
      { productId: '8305370693884', variantId: '45138686771452' },
      { productId: '4850401181775', variantId: '32807658782799' }
    ]
  },
  fp9pho5zcgw2harc: {
    id: '4850425430095',
    name: 'Geeni Scope 1080p Auto-Tracking Camera',
    related: [
      { productId: '8215276650748', variantId: '44844077777148' },
      { productId: '4384644989007', variantId: '31352740675663' },
      { productId: '4381945921615', variantId: '31341859930191' },
      { productId: '8210956222716', variantId: '44829321330940' },
      { productId: '8094250369276', variantId: '44472366858492' }
    ]
  }
}

let fitSplide

let allProducts = null

async function initExp() {
  await waitFor(() => document.head && document.body, false, { ms: 100 })

  // await (() => window._dy_customer_logged_in.email, false, { ms: 20 })

  // const customerEmail = window._dy_customer_logged_in?.email
  // await waitFor(() => window.userEmail, false, { ms: 20 })

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'instant' // or just omit the behavior property
  })

  console.log('** InitExp **')
  document.head.appendChild(stylesEl)

  applyDiscountCode('APPEXCLUSIVE10')

  if (location.pathname === '/' || location.pathname === '/index') {
    // const allProductsReq = await fetch('/products.json?limit=2000')
    // allProducts = await allProductsReq.json()
    // allProducts = allProducts.products

    // allProducts =
    getAllProductsMarkup()

    await waitFor('.shop-all', false, { ms: 100 })
    connectSplide()
    addMatches()
    addAdvantages()

    setTimeout(() => {
      visibilityEvent('.crs-products_exp .product-grid-item', (el) => {
        pushDataLayer(
          'exp_promo_view_05',
          'Section',
          'view',
          'Discover Our Top-Selling Products'
        )
      })
    }, 1000)
  }

  if (_$('body.template-product')) {
    waitFor(
      '.product__price-and-badge',
      () => {
        addPdpDiscount()
      },
      { ms: 100 }
    )
  }

  let initTime = localStorage.getItem('initTime5')
  if (initTime) {
    const currentTime = Math.floor(Date.now() / 1000)
    let timeLeft = 20 * 60 - (currentTime - initTime)

    if (timeLeft <= 0) {
      return
    }
  }

  initTimer()
  // addModal()
  addSticky()
}

async function getAllProductsMarkup() {
  const productsArr = await Promise.all([
    parseHTML(1),
    parseHTML(2),
    parseHTML(3)
  ])

  const productElements = [
    ...productsArr[0],
    ...productsArr[1],
    ...productsArr[2]
  ]

  allProducts = productElements

  return productElements

  async function parseHTML(page) {
    const res = await fetch(`https://mygeeni.com/collections/all?page=${page}`)
    const data = await res.text()

    const parser = new DOMParser()
    const doc = parser.parseFromString(data, 'text/html')

    const products = doc.querySelectorAll('#AjaxinateLoop .product-grid-item')

    return products
  }
}

function addPdpDiscount() {
  _$('.product__price-and-badge').insertAdjacentHTML(
    'beforebegin',
    /* html */ `
      <div class='lav-pdp-discount'>
        <div class='lav-pdp-discount__icon'>
          ${getSvg('spark')}
        </div>
        <div class='lav-pdp-discount__caption'>Get -10 % off with code <span>APPEXCLUSIVE10</span></div>
      </div>
    `
  )

  visibilityEvent('.lav-pdp-discount', () => {
    pushDataLayer('exp_promo_view_07', 'Get 09', 'view', 'Promo cod section')
  })

  // _$('.lav-pdp-discount').addEventListener('click', () => {
  //   pushDataLayer(
  //     'exp_promo_button_04',
  //     'Get 10',
  //     'click',
  //     'Promo cod section'
  //   )
  // })
}

function addSticky() {
  if (localStorage.getItem('stickyClosed5')) return

  const markup = /* html */ `
    <div class='lav-sticky'>
      <div class='lav-sticky__close'>
        ${getSvg('stickyClose')}
      </div>

      <div class='lav-sticky__icon'>
        <img src='${config.dir}/img/spark.svg' />
      </div>
      <div class='lav-sticky__info'>
        Get <span>-10 % off</span> with code <span>APPEXCLUSIVE10</span>
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

  setTimeout(() => {
    if (_$('.sticky-btn-wrapper')) {
      _$('.lav-sticky').classList.add('lav-sticky_pdp')
      _$('body').classList.add('lav-sticky-pdp-wrapper')
    }
  }, 3500)

  _$('.lav-sticky__close').addEventListener('click', (e) => {
    e.preventDefault()
    localStorage.setItem('stickyClosed5', true)

    pushDataLayer('exp_promo_button_03', 'Close', 'click', 'Slide block')

    _$('.lav-sticky')?.classList.add('lav-sticky_hide')
    _$('body').classList.remove('lav-sticky-wrapper')
    _$('body').classList.remove('lav-sticky-pdp-wrapper')

    setTimeout(() => {
      _$('.lav-sticky')?.remove()
    }, 600)
  })
}

function applyDiscountCode(discountCode) {
  fetch(`/discount/${discountCode}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response) => {
      console.log('Response:', response)
      if (response.redirected) {
        // Redirect to the checkout page where the discount is applied
        // window.location.href = response.url;
      } else {
        // Handle failure to apply the discount
        console.log('Invalid discount code or could not apply the discount.')
      }
    })
    .catch((error) => console.error('Error:', error))
}

async function addMatches() {
  if (typeof userEmail !== 'string') return false

  _$('.shop-all').insertAdjacentHTML(
    'beforebegin',
    `<div class='lav-matches__preload'>
      <div class='lav-matches__loader'></div>
    </div>`
  )
  const devices = await getDeviceList(userEmail)
  // const devices = []

  const userDevices = []

  Object.keys(deviceMap).forEach((key) => {
    if (devices.includes(key)) {
      deviceMap[key].pid = key
      userDevices.push(deviceMap[key])
    }
  })

  if (!userDevices.length) {
    _$('.lav-matches__preload')?.remove()
    return
  }

  // for (const device of devices) {
  //   if (deviceMap[device.id]) {
  //     deviceMap[device.id].pid = device
  //     userDevices.push(deviceMap[device.id])
  //   }
  // }

  // const relatedUniq = []

  // console.log('userDevices', userDevices)

  // let allRelated = userDevices.reduce((acc, device) => {
  //   return [...acc, ...device.related]
  // }, [])

  // allRelated = allRelated.filter((item) => {
  //   if (!relatedUniq.includes(item.productId)) {
  //     relatedUniq.push(item.productId)
  //     return true
  //   }
  //   return false
  // })

  // console.log('relatedUnique', relatedUniq)

  // allRelated = allRelated.map((product) => {
  //   const findEl = allProducts.find((item) => item.id == product.productId)

  //   if (!findEl) return null

  //   return {
  //     ...findEl,
  //     variantId: product.variantId
  //   }
  // })

  // allRelated = allRelated.filter((item) => item)

  // console.log('allRelated', allRelated)
  // const related = deviceMap[device.id].related

  // const relatedProducts = await getRelatedProducts(related)
  // console.log('relatedProducts', relatedProducts)

  // if (!devices?.length) return

  const markup = /* html */ `
    <div class='lav-matches'>
      <div class='lav-matches__header'>
        ${customerName ? `Hey, ${customerName}! <br/>` : ''} 
        Get perfect matches for your device with&nbsp;<span class='lav-matches__header-mark'>max&nbsp;savings</span>
      </div>

      <div class='lav-matches__device lav-device'>
        <div class='lav-device__title'>
          Your device: 
          <span>-</span>
        </div>
        <div class='lav-device__list'></div>
      </div>

      <div class='lav-matches__fit lav-fit'>
        <div class='lav-fit__header'>
          <div class='lav-fit__title'>Great fit products</div>
          <div class='lav-fit__gift'>
            Get <span>-10 % off</span> with code <span>APPEXCLUSIVE10</span>
          </div>
        </div>

        <div class='lav-fit__slider splide'>
          <div class="splide__track">
            <ul class="splide__list">
              <li class="splide__slide lav-fit__slide"></li>
            </ul>
          </div>

          <div class="lav-fit__progress">
            <div class="lav-fit__bar"></div>
          </div>
        </div>
      </div>
    </div>
  `

  if (_$('.lav-more')) {
    _$('.lav-more').insertAdjacentHTML('beforebegin', markup)
  } else {
    _$('.shop-all').insertAdjacentHTML('beforebegin', markup)
  }

  visibilityEvent('.lav-fit__slider', () => {
    pushDataLayer(
      'exp_promo_view_01',
      'Section fit products',
      'view',
      'First screen'
    )
  })

  let isFirstRender = true
  let isInit = true

  await waitFor(() => allProducts, false, { ms: 20 })

  _$('.lav-matches__preload')?.remove()

  for (const device of userDevices) {
    if (_$$('.lav-device__item').length >= 4) break
    const el = document.createElement('div')
    el.classList.add('lav-device__item')
    el.dataset.productId = device.pid
    el.style.backgroundImage = `url(${config.dir}/img/products/${device.id}.${
      device.type || 'jpg'
    })`

    el.addEventListener('click', () => {
      if (el.classList.contains('active')) return

      sessionStorage.setItem('choosenFitDevice', device.pid)

      if (!isInit) {
        pushDataLayer(
          'exp_promo_section_01',
          `Your device - ${device.name}`,
          'click',
          'First screen'
        )
      }

      _$('.lav-fit__slider .splide__list').innerHTML = ''

      _$('.lav-device__title span').textContent = device.name

      _$('.lav-device__item.active')?.classList.remove('active')
      el.classList.add('active')

      device.related.forEach((product) => {
        const findEl = allProducts.find(
          (item) => item.dataset.productId == product.productId
        )

        if (!findEl) return

        const el = document.createElement('li')
        el.classList.add('splide__slide', 'lav-fit__slide')
        // el.textContent = findEl.title
        el.innerHTML = findEl.outerHTML

        _$('.lav-fit__slider .splide__list').insertAdjacentElement(
          'beforeend',
          el
        )

        el.addEventListener('click', () => {
          pushDataLayer(
            'exp_promo_section_02',
            `Fit product - ${
              el.querySelector('.product-grid-item__title')?.innerText.trim() ||
              '-'
            }`,
            'click',
            'First screen'
          )
        })

        if (!isFirstRender && fitSplide) {
          fitSplide.refresh()
        }
      })
    })

    _$('.lav-device__list').insertAdjacentElement('beforeend', el)
  }

  const choosenFitDeviceEl = _$(
    `.lav-device__item[data-product-id="${sessionStorage.getItem(
      'choosenFitDevice'
    )}"]`
  )

  if (choosenFitDeviceEl) {
    choosenFitDeviceEl.click()
  } else {
    sessionStorage.removeItem('choosenFitDevice')
    _$('.lav-device__item').click()
  }
  isInit = false

  waitFor(
    () => typeof Splide == 'function',
    () => {
      fitSplide = new Splide('.lav-fit__slider', {
        autoWidth: true,
        arrows: false,
        pagination: false,
        gap: 8
      })

      const bar = fitSplide.root.querySelector('.lav-fit__bar')

      fitSplide.on('mounted move refresh', function () {
        var end = fitSplide.Components.Controller.getEnd() + 1
        var rate = Math.min((fitSplide.index + 1) / end, 1)
        bar.style.left = String(100 * rate) + '%'
        bar.style.width =
          parseInt(100 / fitSplide.Components.Slides.get().length) + '%'
      })

      fitSplide.on('move', function () {
        var end = fitSplide.Components.Controller.getEnd() + 1
        var rate = Math.min((fitSplide.index + 1) / end, 1)

        pushDataLayer(
          'exp_promo_view_02',
          parseInt(String(100 * rate)) + '%',
          'other',
          'First screen'
        )
      })

      fitSplide.mount()

      isFirstRender = false
    }
  )
}

function addAdvantages() {
  const markup = /* html */ `
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

  setTimeout(() => {
    visibilityEvent('.lav-more', () => {
      pushDataLayer('exp_promo_view_03', 'Advantages', 'view', 'Get more')
    })

    visibilityEvent('.shop-all', (el) => {
      pushDataLayer('exp_promo_view_04', 'Section', 'view', 'Shop by category')
    })
  }, 5000)

  document.addEventListener('click', (e) => {
    // console.log(e.target)
    if (
      e.target.closest('.product-grid-item__inner') &&
      e.target.closest('.crs-products_exp')
    ) {
      const title = e.target
        .closest('.product-grid-item__inner')
        .querySelector('.product-grid-item__title')
        ?.innerText.trim()
      pushDataLayer(
        'exp_promo_section_03',
        title,
        'click',
        'Discover Our Top-Selling Products'
      )
    }
  })
}

function addModal() {
  if (localStorage.getItem('modalShown5')) return

  localStorage.setItem('modalShown5', true)

  const markup = /* html */ `
    <div class='lav-modal__close'>${getSvg('closeModal')}</div>

    <div class='lav-discount__head'>
      Limited-Time Deal for <span>New app</span> users 
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

  Modal.open('.lav-discount')

  pushDataLayer('exp_promo_view_06', 'Pop up', 'view', 'Pop up Get 10')

  _$('.lav-discount__btn').addEventListener('click', () => {
    Modal.close()
    pushDataLayer(
      'exp_promo_button_01',
      'Start shopping',
      'click',
      'Pop up Get 10'
    )
  })
}

function initTimer() {
  const totalTime = 20 * 60

  let initTime = localStorage.getItem('initTime5')
  const currentTime = Math.floor(Date.now() / 1000)

  if (!initTime) {
    initTime = currentTime
    localStorage.setItem('initTime5', initTime)
  }

  let timeLeft = totalTime - (currentTime - initTime)

  function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60)
    const seconds = timeLeft % 60

    _$$('.lav-minutes').forEach((el) => {
      el.children[0].textContent = Math.floor(minutes / 10)
      el.children[1].textContent = minutes % 10
    })

    _$$('.lav-seconds').forEach((el) => {
      el.children[0].textContent = Math.floor(seconds / 10)
      el.children[1].textContent = seconds % 10
    })
  }

  function countdown() {
    if (timeLeft > 0) {
      timeLeft--
      updateTimerDisplay()
    } else {
      clearInterval(timerInterval) // Stop the timer when it reaches zero
      _$('.lav-modal.active')?.classList.add('lav-sticky_hide')
      _$('.lav-modal__inner.active')?.classList.add('lav-sticky_hide')
      _$('.lav-sticky')?.classList.add('lav-sticky_hide')
      _$('body').classList.remove('lav-sticky-wrapper')
      _$('body').classList.remove('lav-sticky-pdp-wrapper')
      setTimeout(() => {
        _$('.lav-sticky')?.remove()
      }, 600)
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
    threshold: 0.45,
    ...customConfig,
    timer: null
  }
  // console.log(el)
  initIntersection(
    el,
    ({ isIntersecting, target }, observer) => {
      // console.log(target, isIntersecting)
      if (isIntersecting) {
        // config.timer = setTimeout(() => {
        // if (isElementInViewport(target)) {
        cb()
        observer.disconnect()
        // }
        // }, 3000)
      } else {
        // clearTimeout(config.timer)
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

    console.log('** GA4 Event **', event)

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
