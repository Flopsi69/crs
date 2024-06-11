;(function () {
  console.debug('*** Experiment started ***')

  // Config for Experiment
  const config = {
    // dir: 'http://127.0.0.1:5500/restaurantsupply/delivery',
    dir: 'https://flopsi69.github.io/crs/restaurantsupply/delivery',
    // clarity: ['set', 'exp_shipping_info', 'variant_1'],
    debug: false
  }

  // const orig = console.log;
  // console.log = function (...args) {
  //   orig.apply(console, ['Debug:', ...args]);
  // };

  class Modal {
    static list = []
    constructor(name, html) {
      if (!$('.lavd-modal')) {
        this.constructor.init()
      }

      if (this.constructor.list.find((item) => item.name === name)) {
        console.warn('Modal with this name already exists')
        return
      }

      this.el = document.createElement('div')
      this.el.classList.add('lavd-modal__inner', name)
      this.name = name
      this.el.innerHTML = html

      $('.lavd-modal').insertAdjacentElement('beforeend', this.el)

      this.constructor.list.push(this)
    }

    static init() {
      document.body.insertAdjacentHTML(
        'beforeend',
        "<div class='lavd-modal'></div>"
      )

      document.addEventListener('click', (e) => {
        if (e.target.closest('.lavd-modal__close')) {
          pushDataLayer(
            'exp_shipping_info_popup_button_03',
            'Close',
            'Button',
            'Popup. Shipping and Delivery at RestaurantSupply.com'
          )
        }

        if (
          e.target.classList.contains('lavd-modal') ||
          e.target.closest('.lavd-modal__close')
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
      document.body.classList.add('lavd-modal-open')

      if ($('.lavd-modal__inner.active')) {
        $('.lavd-modal__inner.active').classList.remove('active')
      }

      $(modalName).classList.add('active')

      if (typeof cb === 'function') cb()

      setTimeout(() => {
        $('.lavd-modal').classList.add('active')
      }, 100)
    }

    static close(cb) {
      document.body.classList.remove('lavd-modal-open')

      $('.lavd-modal')?.classList.remove('active')

      if (typeof cb === 'function') cb()

      setTimeout(() => {
        $('.lavd-modal__inner.active')?.classList.remove('active')
      }, 400)
    }

    static addStyles() {
      const styles = /* css */ `
      .lavd-modal {
        position: fixed;
        z-index: 99999999999;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.50);
        transition: 0.35s;
        opacity: 0;
        pointer-events: none;
        padding: 64px 15px;
        overflow-y: auto;
        max-height: 100%;
        display: flex;
      }
      .lavd-modal.active {
        opacity: 1;
        pointer-events: auto;
      }
      .lavd-modal__inner {
        position: relative;
        background: #fff;
        max-width: 380px;
        width: 100%;
        display: none;
        margin: auto;
      }
      .lavd-modal__inner.active {
        display: block;
      }
      .lavd-modal__close {
        cursor: pointer;
        transition: 0.35s;
        line-height: 0;
      }
      [data-modal] {
        cursor: pointer;
      }
      @media(hover:hover) {
        .lavd-modal__close:hover {
          opacity: 0.5;
        }
      }
      .lavd-modal-open {
        overflow: hidden!important;
      }

      .lavd-shipping {
        padding: 32px 8px 0 32px;
        max-width: 664px;
        border-radius: 8px;
        max-height: 100%;
      }
      .lavd-shipping.active {
        display: flex;
        flex-flow: column;
      }
      .lavd-shipping__title {
        color: #536D80;
        font-size: 20px;
        font-weight: 700;
        line-height: 28px;
        padding-right: 24px;
      }
      .lavd-modal__close {
        position: absolute;
        top: 16px;
        right: 16px;
      }
      .lavd-shipping__content {
        margin-top: 24px;
        padding-bottom: 32px;
        padding-right: 24px;
      }
      @media(min-width: 768px) {
        .lavd-shipping__content {
          overflow: auto;
        }
        .lavd-shipping__content::-webkit-scrollbar {
          width: 1px;
          background: #DADADA;
          border-bottom: 20px white solid;
        }
        
        .scroll-container::-webkit-scrollbar-track {
          border-radius: 1px;
          background: #DADADA;
          margin-bottom: 20px;
        }
        
        .lavd-shipping__content::-webkit-scrollbar-thumb {
          height: 80px;
          border-radius: 1px;
          background: #165389;
        }
      }
      .lavd-shipping__text {
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        margin: 0;
      }
      .lavd-shipping__text a {
        color: #1F6699;
        text-decoration: underline;
        transition: 0.2s;
      }
      @media(hover:hover) {
        .lavd-shipping__text a:hover {
          color: #0056B3;
          opacity: .7;
        }
      }
      .lavd-shipping__text_bold {
        font-weight: 600;
        margin-top: 20px;
      }
      .lavd-shipping__subtitle {
        color: #536D80;
        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
        margin-top: 24px;
      }
      .lavd-shipping__subtitle + .lavd-shipping__text {
        margin-top: 16px;
      }

      .lavd-tabs {
        margin-top: 16px;
      }
      .lavd-tabs__header {
        display: flex;
        gap: 16px;
      }
      .lavd-tabs__item {
        border-radius: 4px;
        border: 1px solid #EBECED;
        background: var(--Main-White, #FFF);
        padding; 8px 16px;
        color: #70818C;
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
        transition: 0.2s;
        padding: 8px 16px;
      }
      .lavd-tabs__item:not(.active) {
        cursor: pointer;
      }
      @media(hover:hover) {
        .lavd-tabs__item:not(.active):hover {
          background: #F7F8F9;
        }
      }
      .lavd-tabs__item.active {
        background: #EDF3F7;
        color: #1F6699;
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
      }
      .lavd-tabs__content {
        margin-top: 24px;
      }
      .lavd-tabs__pane {
        line-height: 0;
      }
      .lavd-tabs__pane img {
        max-width: 100%;
        height: 235px;
      }
      .lavd-tabs__pane:not(.active) {
        display: none;
      }
      .lavd-ground {
        padding-bottom: 25px;
        border-bottom: 1px solid #EBECED;
      }
      .lavd-ground__subtitle {
        margin-top: 16px;
      }
      .lavd-ground__list {
        margin-top: 12px;
        display: flex;
        gap: 2px;
        font-size: 12px;
        font-weight: 600;
        line-height: 16px;
      }
      .lavd-ground__item {
        padding: 4px 12px;
        font-size: 12px;
        font-weight: 600;
        line-height: 16px;
        border-radius: 4px;
      }
      .lavd-ground__item:nth-child(1) {
        background: #FF007F;
        color: #fff;
      }
      .lavd-ground__item:nth-child(2) {
        background: #0FF;
      }
      .lavd-ground__item:nth-child(3) {
        background: #FF7F00;
        color: #fff;
      }
      .lavd-ground__item:nth-child(4) {
        background: #0F0;
      }
      .lavd-ground__item:nth-child(5) {
        background: #4C148C;
        color: #fff;
      }
      .lavd-ground__item:nth-child(6) {
        background: #FFF200;
      }
      .lavd-ground__item:nth-child(7) {
        background: #00F;
        color: #fff;
      }
      .lavd-shipping__faq {
        margin-top: 32px;
        margin-bottom: 24px;
      }

      @media(max-width: 768px) {
        .lavd-shipping__title {
          font-size: 18px;
          line-height: 26px;
          padding: 0;
        }
        .lavd-shipping__content {
          margin-top: 16px;
          padding: 0;
        }
        .lavd-shipping__subtitle + .lavd-shipping__text {
          margin-top: 12px;
        }
        .lavd-tabs__item {
          padding: 8px 12px;
        }
        .lavd-tabs__header {
          gap: 8px;
          flex-wrap: wrap;
        }
        .lavd-tabs {
          margin-top: 12px;
        }
        .lavd-tabs__pane img {
          height: auto;
          max-height: 225px;
        }
        .lavd-ground__list {
          flex-wrap: wrap;
        }
        .lavd-shipping__faq {
          margin-top: 24px;
          margin-bottom: 16px;
        }
        .lavd-shipping__text_bold {
          margin-top; 16px;
        }
        .lavd-shipping {
          padding: 32px 20px 48px;
          border-radius: 8px 0px 0px 8px;
          max-height: initial;
          margin-right: initial;
        }
        .lavd-modal {
          padding: 0;
          padding-left: 20px;
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
  const styles = /* css */ `
  [class*='lavd-'] {
    box-sizing: border-box;
  }
  .lavd-faq__title {
    color: #536D80;
    font-size: 20px;
    font-weight: 700;
    line-height: 28px;
  }
  .lavd-faq__list {
    margin-top: 24px;
  }
  .lavd-faq__item + .lavd-faq__item {
    margin-top: 4px;
  }
  .lavd-faq__question {
    position: relative;
    color: #70818C;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    padding-right: 24px;
    transition: 0.3s;
  }
  .lavd-faq__question::before {
    content: '';
    position: absolute;
    top: 50%;
    right: 0;
    width: 16px;
    height: 16px;
    transform: translateY(-50%);
    background-image: url('${config.dir}/img/faq-plus.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    transition: 0.3s;
  }

  .lavd-faq__item {
    border-radius: 8px;
    border: 1px solid #EBECED;
    background: #FAFAFA;
    transition: 0.3s;
    padding: 10px 16px;
    cursor: pointer;
  }
  .lavd-faq__answer {
    display: none;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
  }
  .lavd-faq__item.active {
    padding-top: 16px;
    padding-bottom: 20px;
    background: var(--Main-White, #FFF);
  }
  .lavd-faq__item.active .lavd-faq__question {
    color: #1F6699;
    margin-bottom: 16px;
  }
  .lavd-faq__item.active .lavd-faq__question::before {
    background-image: url('${config.dir}/img/faq-minus.svg');
  }
    
  .lavd-faq__item.active .lavd-faq__answer {
    display: block;
  }

  .lavd-faq__item:not(.active) {
    cursor: pointer;
  }
  @media(hover:hover) {
    .lavd-faq__item:not(.active):hover {
      background: #F7F8F9;
    }
  }
  @media(max-width: 768px) {
    .lavd-faq__title {
      font-size: 18px;
      line-height: 26px;
    }
    .lavd-faq__list {
      margin-top: 16px;
    }
    .lavd-faq__item.active {
      padding-top: 10px;
      padding-bottom: 16px;
    }
    .lavd-faq__item.active .lavd-faq__question::before {
      // opacity: 0;
    }
  }

  .shipping-info .shipping-info-item {
    background: #4F9E34;
  }

  .lavd-wait {
    border-radius: 8px;
    background: var(--Main-White, #FFF);
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 2px 8px 0px rgba(0, 0, 0, 0.08);
    padding: 18px 16px 16px;
    margin-bottom: 16px;
  }
  .lavd-wait__title {
    display: flex;
    align-items: center;
    gap: 12px;
    color: #536D80;
    font-size: 18px;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: 0.5px;
    margin-bottom: 12px;
  }
  .lavd-wait__link {
    color: #1F6699;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    transition: 0.3s;
    cursor: pointer;
  }
  .lavd-wait__link span {
    text-decoration-line: underline;
  }
  @media(hover:hover) {
    .lavd-wait__link:hover {
      opacity: 0.7;
    }
  }

  .product-shipping-time .product-shipping-time-text {
    padding-top: 4px;
    color: #4F9E34;
    font-weight: 600;
  }
  .product-shipping-time .product-shipping-time-title {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  #block-shipping .shipping-title {
    // font-size: 16px;
    // font-style: normal;
    // font-weight: 700;
    // line-height: 24px;
    // letter-spacing: 0.5px;
  }
  .lavd-delivery__text {
    color: #536D80;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px; 
  }

  #block-summary .title .shipping-title {
    display: block;
    color: #536D80;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.5px;
    margin-bottom: 8px;
  }

  #block-summary .shipping-address-form {
    margin-top: 12px;
  }

  #block-summary .pac-target-input {
    border-radius: 4px;
    border: 1px solid #D9D9D9;
    height: 42px;
    background: #fff;
    padding: 8px 12px 8px 44px;
  }

  #block-summary .street-wrapper {
    position: relative
  }
  
  .lavd-delivery__text + .street-wrapper {
    margin-top: 12px;
  }

  #block-summary .visible-form .heading {
    display: none;
  }

  #block-summary .visible-form[style]:not([style='display: none;']) + .shipping-rates {
    display: none;
  }

  #block-summary .shipping-rates .title {
    display: none;
  }

  #block-summary .shipping-rates {
    color: #536D80;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
  }

  #block-summary .visible-information .heading span:first-child {
    display: none;
  }

  #block-summary .visible-information .heading span {
    padding-left: 0;
    color: #1F6699;
    font-size: 14px;
    font-weight: 600;
    line-height: 24px;
    text-decoration-line: underline;
    transition: 0.3s;
  }

  #block-summary .visible-information .heading span:hover {
    opacity: 0.7;
  }

  #block-summary .shipping-rates [data-bind="text: $parent.formatPrice(shippingRate.price)"] {
    font-weight: 700;
  }

  #block-summary .visible-information {
    flex-flow: column-reverse;
    gap: 12px;
  }
  #block-summary .shipping-address-form .visible-information .heading {
    padding-bottom: 0;
  }

  #block-summary .street-wrapper svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 12px;
  }

  #block-summary .pac-target-input::placeholder {
    color: #9B9B9B;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }

  .lavd-calc {
    margin: 16px 0;
    padding: 12px 0;
    border-top: 1px solid #EBECED;
    border-bottom: 1px solid #EBECED;
  }

  #block-summary .shipping-rates .lavd-delivery__text {
    border-top: 1px solid #EBECED;
    margin-top: 12px;
    padding-top: 12px;
  }

  .lavd-policy {
    color: #1F6699;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    transition: 0.3s;
    cursor: pointer;
  }
  .lavd-policy span {
    text-decoration-line: underline;
  }
`

  const stylesEl = document.createElement('style')
  stylesEl.classList.add('exp-styles')
  stylesEl.innerHTML = styles

  // *** Logic *** //
  initExp()

  async function initExp() {
    await waitFor(() => document.head && document.body, false, { ms: 50 })
    console.debug('** InitExp **')

    addHeaderLink()

    if (
      location.href.includes('checkout/cart') ||
      ($('.catalog-product-view') && !$('.cart-empty'))
    ) {
      document.head.appendChild(stylesEl)
    } else {
      return false
    }

    if (location.href.includes('checkout/cart')) {
      waitFor(() => $('.cart-container>.cart-summary'), initFAQ)
    } else if ($('.catalog-product-view') && !$('.cart-empty')) {
      waitFor('.product-shipping-time.stock-status-logic', handleShipping)

      waitFor(
        () =>
          $('.product-shipping-time.stock-status-logic') &&
          $('.product-interested-in') &&
          $('.product-add-form .action.tocart')?.innerText.toLowerCase() ===
            'out of stock',
        handleWait
      )

      initModal()
    }
  }

  function handleShipping() {
    if (!$('.product-shipping-time.stock-status-logic')) return

    visibilityEvent('.product-shipping-time.stock-status-logic', () => {
      pushDataLayer(
        'exp_shipping_info_pdp_section_01',
        'Section',
        'Visibility',
        'PDP. Shipping '
      )
    })

    const waitHtml = /* html */ `
    <div class="lavd-calc"></div>
    <div class="lavd-policy" data-modal='.lavd-shipping'>
        <span>Shipping and Delivery policy</span>&nbsp;&nbsp;>
    </div>
  `

    $('.product-shipping-time.stock-status-logic')

    $('.product-shipping-time.stock-status-logic').insertAdjacentHTML(
      'beforeend',
      waitHtml
    )

    $('.lavd-policy').addEventListener('click', () => {
      pushDataLayer(
        'exp_shipping_info_pdp_link_01',
        'Shipping and Delivery policy',
        'Link',
        'PDP. Shipping and Delivery policy'
      )
    })

    if (
      $(
        '.product-shipping-time.stock-status-logic .product-shipping-time-title'
      )
    ) {
      $(
        '.product-shipping-time.stock-status-logic .product-shipping-time-title'
      ).innerHTML =
        getSvg('truck') +
        $(
          '.product-shipping-time.stock-status-logic .product-shipping-time-title'
        ).innerHTML
    }

    if ($('#block-shipping')) {
      waitFor('#block-shipping .street-wrapper', handleCalc)
    }

    if (window.innerWidth < 768) {
      initMutation('.product-view-left', (el) => {
        if (
          el.classList.contains('stock-status-logic') &&
          window.innerWidth < 768
        ) {
          $('.product-view-left').insertAdjacentElement(
            'afterend',
            $('.product-shipping-time.stock-status-logic')
          )

          if ($('.product-shipping-time:not(.stock-status-logic)')) {
            $(
              '.product-shipping-time.stock-status-logic'
            ).insertAdjacentElement('afterend', $('.product-shipping-time'))
          }
        }
      })

      $('.product-view-left').insertAdjacentElement(
        'afterend',
        $('.product-shipping-time.stock-status-logic')
      )

      if ($('.product-shipping-time:not(.stock-status-logic)')) {
        $('.product-shipping-time.stock-status-logic').insertAdjacentElement(
          'afterend',
          $('.product-shipping-time')
        )
      }
    }
  }

  function handleCalc() {
    const el = $('#block-shipping')

    $('.shipping-title', el).innerText = 'Estimate Shipping Cost and Tax'
    // $('.shipping-title', el).insertAdjacentHTML(
    //   'afterend',
    //   ``
    // )

    $('#block-summary .shipping-rates', el).insertAdjacentHTML(
      'beforeend',
      `<div class='lavd-delivery__text'>Choose the shipping method for all selected products at checkout</div>`
    )

    $('#block-summary .street-wrapper').insertAdjacentHTML(
      'afterbegin',
      `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M18.7857 6.36242C18.217 5.24114 17.3756 4.28082 16.3387 3.56975C15.3019 2.85867 14.1029 2.41966 12.852 2.29307C12.2862 2.23629 11.7161 2.23629 11.1502 2.29307C9.89936 2.41974 8.70042 2.85874 7.66353 3.56973C6.62664 4.28072 5.78506 5.2409 5.21613 6.36204C4.50032 7.79256 4.22383 9.4029 4.42149 10.9902C4.61915 12.5776 5.28211 14.071 6.32688 15.2822L11.4216 21.4763C11.4919 21.5619 11.5804 21.6309 11.6805 21.6782C11.7807 21.7255 11.8901 21.7501 12.0009 21.7501C12.1117 21.7501 12.2211 21.7255 12.3213 21.6782C12.4215 21.6309 12.5099 21.5619 12.5803 21.4763L17.675 15.2822C18.7197 14.071 19.3827 12.5777 19.5803 10.9904C19.778 9.40315 19.5015 7.79287 18.7857 6.36242ZM16.5163 14.3294L12.0009 19.8192L7.48593 14.3292C6.63947 13.3405 6.09949 12.1266 5.93202 10.8359C5.76455 9.54521 5.97685 8.23368 6.54295 7.06172C6.99807 6.1603 7.67246 5.38773 8.50415 4.81503C9.33584 4.24233 10.2981 3.88787 11.3026 3.78422C11.5346 3.76092 11.7677 3.74946 12.0009 3.74987C12.2344 3.74967 12.4677 3.76153 12.7 3.78542C13.7044 3.88894 14.6666 4.24329 15.4982 4.81588C16.3299 5.38847 17.0042 6.16093 17.4593 7.06224C18.0253 8.23416 18.2376 9.54562 18.0701 10.8362C17.9026 12.1269 17.3627 13.3407 16.5163 14.3294Z" fill="#9B9B9B"/>
      <path d="M12 6C11.2583 6 10.5333 6.21993 9.91661 6.63199C9.29993 7.04404 8.81928 7.62971 8.53545 8.31494C8.25162 9.00016 8.17736 9.75416 8.32206 10.4816C8.46675 11.209 8.8239 11.8772 9.34835 12.4017C9.8728 12.9261 10.541 13.2833 11.2684 13.4279C11.9958 13.5726 12.7498 13.4984 13.4351 13.2145C14.1203 12.9307 14.706 12.4501 15.118 11.8334C15.5301 11.2167 15.75 10.4917 15.75 9.75C15.7488 8.7558 15.3534 7.80265 14.6504 7.09964C13.9474 6.39664 12.9942 6.00117 12 6ZM12 12C11.555 12 11.12 11.868 10.75 11.6208C10.38 11.3736 10.0916 11.0222 9.92127 10.611C9.75098 10.1999 9.70642 9.7475 9.79323 9.31105C9.88005 8.87459 10.0943 8.47368 10.409 8.15901C10.7237 7.84434 11.1246 7.63005 11.561 7.54323C11.9975 7.45642 12.4499 7.50097 12.861 7.67127C13.2722 7.84157 13.6236 8.12996 13.8708 8.49997C14.118 8.86998 14.25 9.30499 14.25 9.75C14.2493 10.3465 14.0121 10.9185 13.5903 11.3403C13.1685 11.7621 12.5965 11.9993 12 12Z" fill="#9B9B9B"/>
    </svg>
    `
    )

    $('#block-summary .visible-information .heading .change').addEventListener(
      'click',
      function () {
        $('#block-summary .pac-target-input').value = ''
        $('#block-summary .pac-target-input').focus()
      }
    )

    $('#block-summary .street-wrapper').insertAdjacentHTML(
      'beforebegin',
      `
      <div class='lavd-delivery__text'>Start typing your address here for shipping estimations</div>
    `
    )

    if (
      $('[placeholder="Start typing your address for shipping estimate..."]')
    ) {
      $(
        '[placeholder="Start typing your address for shipping estimate..."]'
      ).addEventListener('focus', () => {
        pushDataLayer(
          'exp_shipping_info_pdp_input_01',
          'Shipping',
          'Input',
          'PDP. Delivery address'
        )
      })

      $(
        '[placeholder="Start typing your address for shipping estimate..."]'
      ).placeholder = 'Delivery address'
    }

    $('.lavd-calc').insertAdjacentElement('beforeend', $('#block-summary', el))
    // el.style.display = 'block'
  }

  function handleWait() {
    const waitHtml = /* html */ `
    <div class="lavd-wait">
      <div class="lavd-wait__title">
        ${getSvg('clock')}
        Don’t want to wait?
      </div>
      <div class="lavd-wait__link">
        <span>View similar products ready for shipping</span>&nbsp;&nbsp;>
      </div>
    </div>
  `

    $('.product-shipping-time.stock-status-logic').insertAdjacentHTML(
      'afterend',
      waitHtml
    )

    visibilityEvent('.lavd-wait', () => {
      pushDataLayer(
        'exp_shipping_info_pdp_section_02',
        'Section',
        'Visibility',
        'PDP. Don’t want to wait?'
      )
    })

    $('.lavd-wait__link').addEventListener('click', () => {
      pushDataLayer(
        'exp_shipping_info_pdp_link_02',
        'View similar products ready for shipping',
        'Link',
        'PDP. Don’t want to wait?'
      )

      if (!$('.product-interested-in')) return

      jQuery('html, body').animate(
        {
          scrollTop:
            jQuery('.product-interested-in').offset().top -
            (jQuery(window).width() < 768 ? 10 : 60)
        },
        500
      )
    })
  }

  function addHeaderLink() {
    waitFor('.page-header .links-container ul', () => {
      $('.page-header .links-container ul')?.insertAdjacentHTML(
        'beforeend',
        /* html */ `
      <li class="link lavd-link-delivery">
        <a href="https://www.restaurantsupply.com/terms-and-conditions/shipping-and-delivery">Shipping and handling</a>
      </li>
    `
      )

      $('.lavd-link-delivery').addEventListener('click', (e) => {
        pushDataLayer(
          'exp_shipping_info_sitewide_button_01',
          'Shipping and handling',
          'Button',
          'Sitewide Header'
        )
      })
    })

    waitFor('.you-may-be-interested-in .item', () => {
      $('.you-may-be-interested-in .item')?.insertAdjacentHTML(
        'beforebegin',
        /* html */ `
      <p class="item lavd-link-delivery-mob" role="menuitem"><a href="https://www.restaurantsupply.com/terms-and-conditions/shipping-and-delivery">Shipping and handling</a></p>
    `
      )

      $('.lavd-link-delivery-mob').addEventListener('click', (e) => {
        pushDataLayer(
          'exp_shipping_info_sitewide_button_01',
          'Shipping and handling',
          'Button',
          'Sitewide Header'
        )
      })
    })
  }

  function initFAQ() {
    console.log('init FAQ')

    const cartStyles = /* css */ `
    .lavd-faq {
      border-radius: 8px;
      background: var(--Main-White, #FFF);
      box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.08);
      padding: 32px;
      margin-top: -9px;
    }
    .lavd-faq__title {
      font-size: 18px;
      line-height: 26px;
      letter-spacing: 0.5px;
    }
    .lavd-faq__list {
      margin-top: 16px;
      max-width: 600px;
    }
    @media(max-width: 1023px) {
      .cart-info {
        order: 1;
      }
      .lavd-faq {
        padding: 16px;
      }
      .lavd-faq__title {
        font-size: 16px;
        line-height: 24px;
      }
    }
  `

    const cartStylesEl = document.createElement('style')
    cartStylesEl.classList.add('exp-cart-styles')
    cartStylesEl.innerHTML = cartStyles
    document.head.appendChild(cartStylesEl)

    const faqHtml = /* html */ `
    <div class='lavd-faq'>
      <div class="lavd-faq__title">Shipping and returns F.A.Q</div>

      <div class="lavd-faq__list">
        <div class="lavd-faq__item">
          <div class="lavd-faq__question">When will I receive my order?</div>
          <div class="lavd-faq__answer">The delivery timeframe for your order depends on the selected shipping method and the warehouse location from which your item is dispatched. You will receive a confirmation email shortly after placing your order, which will include an estimated delivery date. For the most accurate delivery information, please contact us via email before placing your order.</div>
        </div>

        <div class="lavd-faq__item">
          <div class="lavd-faq__question">How can I return an item?</div>
          <div class="lavd-faq__answer">To return an item, kindly visit our Returns Policy page for step-by-step instructions. Returns should be initiated within 90 days of receipt, with the item in its original condition and packaging. Note that some items may incur restocking fees. Contact our customer service to obtain an RMA (Return Merchandise Authorization) number and further instructions.</div>
        </div>

        <div class="lavd-faq__item">
          <div class="lavd-faq__question">Where can I find warranty information?</div>
          <div class="lavd-faq__answer">You can find detailed warranty information on each product's detail page (PDP). This includes the manufacturer's warranty terms, such as the duration and what's covered. If you have further questions about warranties or need assistance with a claim, our customer service team is here to help.</div>
        </div>
      </div>
    </div>
  `

    if (window.innerWidth > 1024) {
      $('.cart-container>.cart-summary').insertAdjacentHTML('afterend', faqHtml)
    } else {
      $('.cart-right-col').insertAdjacentHTML('beforeend', faqHtml)
    }

    for (const item of $$('.lavd-faq__item')) {
      item.addEventListener('click', function () {
        pushDataLayer(
          'exp_shipping_info_cart_accordion_02',
          `${item.querySelector('.lavd-faq__question').innerText} - F.A.Q`,
          'Accordion',
          'Shopping cart. Shipping and returns'
        )
        if (this.classList.contains('active')) {
          this.classList.remove('active')
        } else {
          $('.lavd-faq__item.active')?.classList.remove('active')
          this.classList.add('active')
        }
      })
    }
  }

  function initModal() {
    const modalHtml = /* html */ `
    <div class="lavd-modal__close" title="Close">
      ${getSvg('closeModal')}
    </div>

    <div class="lavd-shipping__title">Shipping and Delivery at RestaurantSupply.com</div>

    <div class='lavd-shipping__content'>
      <div class="lavd-shipping__text">
        We at RestaurantSupply.com are committed to making your purchasing experience as smooth and transparent as possible. Below, you'll find an overview of our shipping and delivery policies, designed to address your main concerns and streamline your shopping process. For more detailed information, please refer to the full text of our shipping and delivery policy.
      </div>

      <div class="lavd-shipping__subtitle">When will I receive my order?</div>

      <div class="lavd-shipping__text">
        Most orders are dispatched within 1-2 business days. However, during peak times or due to supply issues, there might be delays. For urgent needs, specify your required date in the customer comment box at checkout, and we'll inform you promptly of any potential delays. Delivery times vary based on your location. For faster delivery, you can select Second Day or Next Day shipping in your cart, ensuring same-day dispatch for in-stock items and delivery within 1 or 2 days, respectively.
      </div>

      <div class="lavd-shipping__subtitle">Select a Warehouse Tab Below to View Estimated Delivery Times to <br/>  Your Area on the Map</div>

      <div class="lavd-tabs">
        <div class="lavd-tabs__header">
          <div class="lavd-tabs__item active" data-tab="tab1">Connecticut (CT)</div>
          <div class="lavd-tabs__item" data-tab="tab2">Florida (FL)</div>
          <div class="lavd-tabs__item" data-tab="tab3">Tennessee (TN)</div>
        </div>

        <div class="lavd-tabs__content">
          <div class="lavd-tabs__pane active" data-tab="tab1">
            <img src="${config.dir}/img/map1.png" alt="Connecticut (CT)" />
          </div>
          <div class="lavd-tabs__pane" data-tab="tab2">
            <img src="${config.dir}/img/map2.png" alt="Florida (FL)" />
          </div>
          <div class="lavd-tabs__pane" data-tab="tab3">
            <img src="${config.dir}/img/map3.png" alt="Tennessee (TN)" />
          </div>
        </div>
      </div>

      <div class='lavd-ground'>
        <div class="lavd-shipping__subtitle lavd-ground__subtitle">When will your FedEx Ground shipment be scheduled for delivery? </div>

        <div class="lavd-ground__list">
          <div class="lavd-ground__item">1 Day</div>
          <div class="lavd-ground__item">2 Days</div>
          <div class="lavd-ground__item">3 Days</div>
          <div class="lavd-ground__item">4 Days</div>
          <div class="lavd-ground__item">5 Days</div>
          <div class="lavd-ground__item">6 Days</div>
          <div class="lavd-ground__item">7+ Days</div>
        </div>
      </div>

      <div class='lavd-shipping__faq'>
        <div class="lavd-faq__title">Frequently Asked Questions (F.A.Q)</div>

        <div class="lavd-faq__list">
          <div class="lavd-faq__item active">
            <div class="lavd-faq__question">How are shipping charges calculated?</div>
            <div class="lavd-faq__answer">Shipping charges are based on dimensions, weight, freight class, and destination zip code. Our system finds the lowest rates by comparing multiple freight carriers, including our volume discounts.</div>
          </div>

          <div class="lavd-faq__item">
            <div class="lavd-faq__question">Is there an option for free shipping?</div>
            <div class="lavd-faq__answer">Yes, we offer free freight on select items, which is applicable only within the 48 continental states and includes basic delivery charges.</div>
          </div>

          <div class="lavd-faq__item">
            <div class="lavd-faq__question">What does standard delivery include?</div>
            <div class="lavd-faq__answer">Standard shipments are curbside deliveries, meaning the driver will bring the equipment to the nearest entrance of your property. Liftgate services for lowering items from the truck are available at an additional cost.</div>
          </div>

          <div class="lavd-faq__item">
            <div class="lavd-faq__question">What are the options and conditions for expedited shipping?</div>
            <div class="lavd-faq__answer">We offer 2nd Day AM Delivery and Priority Overnight Delivery. Orders must be placed before 1PM EST from Monday to Friday for timely delivery. The delivery times and conditions vary based on the destination and type of service.</div>
          </div>

          <div class="lavd-faq__item">
            <div class="lavd-faq__question">Can I pick up my order locally?</div>
            <div class="lavd-faq__answer">Local pickup is available near our distribution centers. We'll notify you when your order is ready. Pickup times are between 9:00 am - 5:00 pm, Monday to Friday.</div>
          </div>

          <div class="lavd-faq__item">
            <div class="lavd-faq__question">Are there any special considerations for residential customers?</div>
            <div class="lavd-faq__answer">Yes, additional charges apply for liftgate service and deliveries to residential or limited access areas. It's important to correctly identify your shipping address during checkout. Also, note that installing commercial equipment in homes may void warranties and not meet residential expectations.</div>
          </div>

          <div class="lavd-faq__item">
            <div class="lavd-faq__question">What should I do upon receiving my order?</div>
            <div class="lavd-faq__answer">Inspect your order upon delivery. Note any damages or missing items on the delivery receipt and report them to our Customer Service immediately at Toll-Free 1-855-838-1010.</div>
          </div>

          <div class="lavd-faq__item">
            <div class="lavd-faq__question">What are the policies on refused shipments and cancelled orders?</div>
            <div class="lavd-faq__answer">You will be responsible for roundtrip freight charges and restocking fees for refused shipments, except in cases of damage or our shipping error. Cancellation fees also apply once an order has shipped.</div>
          </div>
        </div>
      </div>

      <div class="lavd-shipping__text">
        For more details on our shipping and delivery policies, including information on international shipping, processing times, and damage policies, please <a href='https://www.restaurantsupply.com/terms-and-conditions/shipping-and-delivery'>click here to read the full text</a>. Our goal is to ensure that your experience with us is efficient, clear, and satisfactory.
      </div>

      <div class='lavd-shipping__text lavd-shipping__text_bold'>
        If you have any further questions or need assistance, feel free to contact our Customer Service Team at: Toll Free 1-855-838-1010
      </div>
    </div>
  `

    new Modal('lavd-shipping', modalHtml)

    visibilityEvent('.lavd-shipping', () => {
      pushDataLayer(
        'exp_shipping_info_popup_section_03',
        'Section',
        'Visibility',
        'Popup. Shipping and Delivery at RestaurantSupply.com'
      )
    })

    for (const tab of $$('.lavd-tabs__item')) {
      tab.addEventListener('click', function () {
        pushDataLayer(
          'exp_shipping_info_popup_button_02',
          `${tab.innerText} - tab`,
          'Button',
          'Popup. Shipping and Delivery. Your Area on the Map'
        )

        if (this.classList.contains('active')) return

        $('.lavd-tabs__item.active').classList.remove('active')
        this.classList.add('active')

        const tabName = this.dataset.tab
        $('.lavd-tabs__pane.active').classList.remove('active')
        $(`.lavd-tabs__pane[data-tab="${tabName}"]`).classList.add('active')
      })
    }

    for (const item of $$('.lavd-faq__item')) {
      item.addEventListener('click', function () {
        pushDataLayer(
          'exp_shipping_info_popup_accordion_01',
          `${item.querySelector('.lavd-faq__question').innerText} - F.A.Q`,
          'Accordion',
          'Popup. Shipping and Delivery. Frequently Asked Questions'
        )
        if (this.classList.contains('active')) {
          this.classList.remove('active')
        } else {
          $('.lavd-faq__item.active')?.classList.remove('active')
          this.classList.add('active')
        }
      })
    }

    // Modal.open('.lavd-shipping');
  }

  // *** Utils *** //

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
        console.log(target, isIntersecting)
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

  //Hotjar
  if (!config.debug) {
    waitFor(
      () => typeof hj == 'function',
      () => {
        hj('event', 'exp_shipping_info')
      }
    )
  }

  // Svg objects
  function getSvg(name) {
    const svgObj = {
      closeModal: /* html */ `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <g clip-path="url(#clip0_5833_2615)">
      <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#006396"/>
      </g>
      <defs>
      <clipPath id="clip0_5833_2615">
      <rect width="24" height="24" fill="white"/>
      </clipPath>
      </defs>
      </svg>
    `,
      clock: /* html */ `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <g clip-path="url(#clip0_5903_1242)">
        <path d="M15.5303 14.4697C15.8235 14.763 15.8235 15.237 15.5303 15.5303C15.384 15.6765 15.192 15.75 15 15.75C14.808 15.75 14.616 15.6765 14.4697 15.5303L11.4698 12.5303C11.3288 12.3893 11.25 12.1987 11.25 12V7.5C11.25 7.086 11.586 6.75 12 6.75C12.414 6.75 12.75 7.086 12.75 7.5V11.6895L15.5303 14.4697ZM23.25 12C23.25 18.2033 18.2033 23.25 12 23.25C5.79675 23.25 0.75 18.2033 0.75 12C0.75 5.79675 5.79675 0.75 12 0.75C18.2033 0.75 23.25 5.79675 23.25 12ZM21.7118 12.75H21C20.586 12.75 20.25 12.414 20.25 12C20.25 11.586 20.586 11.25 21 11.25H21.7118C21.549 9.12525 20.706 7.19175 19.3958 5.66475L18.894 6.1665C18.7477 6.31275 18.5557 6.38625 18.3638 6.38625C18.1718 6.38625 17.9797 6.31275 17.8335 6.1665C17.5403 5.87325 17.5403 5.39925 17.8335 5.106L18.3353 4.60425C16.8083 3.294 14.874 2.451 12.75 2.28825V3C12.75 3.414 12.414 3.75 12 3.75C11.586 3.75 11.25 3.414 11.25 3V2.28825C9.12525 2.451 7.19175 3.294 5.66475 4.60425L6.1665 5.106C6.45975 5.39925 6.45975 5.87325 6.1665 6.1665C6.02025 6.31275 5.82825 6.38625 5.63625 6.38625C5.44425 6.38625 5.25225 6.31275 5.106 6.1665L4.60425 5.66475C3.294 7.19175 2.451 9.126 2.28825 11.25H3C3.414 11.25 3.75 11.586 3.75 12C3.75 12.414 3.414 12.75 3 12.75H2.28825C2.451 14.8748 3.294 16.8083 4.60425 18.3353L5.106 17.8335C5.39925 17.5403 5.87325 17.5403 6.1665 17.8335C6.45975 18.1267 6.45975 18.6007 6.1665 18.894L5.66475 19.3958C7.19175 20.706 9.126 21.549 11.25 21.7118V21C11.25 20.586 11.586 20.25 12 20.25C12.414 20.25 12.75 20.586 12.75 21V21.7118C14.8748 21.549 16.8083 20.706 18.3353 19.3958L17.8335 18.894C17.5403 18.6007 17.5403 18.1267 17.8335 17.8335C18.1267 17.5403 18.6007 17.5403 18.894 17.8335L19.3958 18.3353C20.706 16.8083 21.549 14.874 21.7118 12.75Z" fill="#536D80"/>
        </g>
        <defs>
        <clipPath id="clip0_5903_1242">
        <rect width="24" height="24" fill="white"/>
        </clipPath>
        </defs>
      </svg>
    `,
      truck: /* html */ `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M18.1268 14.2686C16.4586 14.2686 15.1016 15.6256 15.1016 17.2938C15.1016 18.9619 16.4586 20.319 18.1268 20.319C19.7952 20.319 21.152 18.9619 21.152 17.2938C21.152 15.6256 19.7949 14.2686 18.1268 14.2686ZM18.1268 18.8064C17.2926 18.8064 16.6142 18.128 16.6142 17.2938C16.6142 16.4596 17.2926 15.7812 18.1268 15.7812C18.961 15.7812 19.6394 16.4596 19.6394 17.2938C19.6394 18.128 18.961 18.8064 18.1268 18.8064Z" fill="#536D80"/>
        <path d="M7.79084 14.2686C6.1227 14.2686 4.76562 15.6256 4.76562 17.2938C4.76562 18.9619 6.1227 20.319 7.79084 20.319C9.45898 20.319 10.8161 18.9619 10.8161 17.2938C10.8161 15.6256 9.45898 14.2686 7.79084 14.2686ZM7.79084 18.8064C6.95666 18.8064 6.27823 18.128 6.27823 17.2938C6.27823 16.4596 6.95666 15.7812 7.79084 15.7812C8.6248 15.7812 9.30345 16.4596 9.30345 17.2938C9.30345 18.128 8.62503 18.8064 7.79084 18.8064Z" fill="#536D80"/>
        <path d="M20.163 5.60984C20.0344 5.35447 19.773 5.19336 19.4871 5.19336H15.5039V6.70597H19.0207L21.0801 10.8021L22.4319 10.1224L20.163 5.60984Z" fill="#536D80"/>
        <path d="M15.8555 16.563H10.1328V18.0756H15.8555V16.563Z" fill="#536D80"/>
        <path d="M5.52262 16.563H2.90081C2.48306 16.563 2.14453 16.9016 2.14453 17.3193C2.14453 17.737 2.48311 18.0756 2.90081 18.0756H5.52267C5.94042 18.0756 6.27895 17.737 6.27895 17.3193C6.27895 16.9015 5.94038 16.563 5.52262 16.563Z" fill="#536D80"/>
        <path d="M23.8428 11.9395L22.3552 10.0235C22.2123 9.83896 21.9917 9.73105 21.758 9.73105H16.2622V4.43695C16.2622 4.0192 15.9236 3.68066 15.5059 3.68066H2.90081C2.48306 3.68066 2.14453 4.01924 2.14453 4.43695C2.14453 4.85465 2.48311 5.19323 2.90081 5.19323H14.7495V10.4873C14.7495 10.9051 15.0881 11.2436 15.5058 11.2436H21.3876L22.489 12.6624V16.5629H20.3966C19.9788 16.5629 19.6403 16.9015 19.6403 17.3192C19.6403 17.737 19.9789 18.0755 20.3966 18.0755H23.2453C23.6631 18.0755 24.0016 17.7369 24.0016 17.3192V12.4034C24.0016 12.2354 23.9457 12.0721 23.8428 11.9395Z" fill="#536D80"/>
        <path d="M5.46967 12.7314H1.99066C1.57291 12.7314 1.23438 13.07 1.23438 13.4877C1.23438 13.9055 1.57295 14.244 1.99066 14.244H5.46962C5.88737 14.244 6.22591 13.9054 6.22591 13.4877C6.22595 13.07 5.88737 12.7314 5.46967 12.7314Z" fill="#536D80"/>
        <path d="M7.21008 9.75635H0.756281C0.338578 9.75635 0 10.0949 0 10.5127C0 10.9304 0.338578 11.269 0.756281 11.269H7.21008C7.62783 11.269 7.96636 10.9304 7.96636 10.5127C7.96636 10.095 7.62783 9.75635 7.21008 9.75635Z" fill="#536D80"/>
        <path d="M8.44445 6.78125H1.99066C1.57291 6.78125 1.23438 7.11983 1.23438 7.53753C1.23438 7.95528 1.57295 8.29381 1.99066 8.29381H8.44445C8.8622 8.29381 9.20073 7.95523 9.20073 7.53753C9.20078 7.11983 8.8622 6.78125 8.44445 6.78125Z" fill="#536D80"/>
      </svg>
    `
    }

    return svgObj[name]
  }
})()
