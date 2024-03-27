console.debug('*** Experiment started ***');

// Config for Experiment
const config = {
  // dir: 'http://127.0.0.1:5500/restaurantSupply/exitIntent',
  dir: 'https://flopsi69.github.io/crs/restaurantsupply/exitIntent',
  debug: false,
};

// *** Utils *** //
class Modal {
  static list = [];
  constructor(name, html) {
    if (!$('.lav-modal')) {
      this.constructor.init();
    }

    if (this.constructor.list.find((item) => item.name === name)) {
      console.warn('Modal with this name already exists');
      return;
    }

    this.el = document.createElement('div');
    this.el.classList.add('lav-modal__inner', name);
    this.name = name;
    this.el.innerHTML = html;

    $('.lav-modal').insertAdjacentElement('beforeend', this.el);

    this.constructor.list.push(this);
  }

  static init() {
    document.body.insertAdjacentHTML(
      'beforeend',
      "<div class='lav-modal'></div>"
    );

    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('lav-modal')) {
        this.close();
        pushDataLayer(
          'exp_scarcity_click_01',
          'Close behind the pop-up area',
          'Click',
          'Pop-up. Filled cart. Reserve Now, Limited Supply'
        );
      }

      if (e.target.closest('.lav-modal__close')) {
        this.close();
        pushDataLayer(
          'exp_scarcity_button_01',
          'Close',
          'Button',
          'Pop-up. Filled cart. Reserve Now, Limited Supply'
        );
      }

      if (e.target.dataset.modal) {
        this.open(e.target.dataset.modal);
      } else if (e.target.closest('[data-modal]')) {
        this.open(e.target.closest('[data-modal]').dataset.modal);
      }
    });

    this.addStyles();
  }

  static open(modalName, cb) {
    document.body.classList.add('lav-modal-open');

    if ($('.lav-modal__inner.active')) {
      $('.lav-modal__inner.active').classList.remove('active');
    }

    $(modalName).classList.add('active');

    if (typeof cb === 'function') cb();

    setTimeout(() => {
      $('.lav-modal').classList.add('active');
    }, 100);
  }

  static close(cb) {
    document.body.classList.remove('lav-modal-open');

    $('.lav-modal')?.classList.remove('active');

    if (typeof cb === 'function') cb();

    setTimeout(() => {
      $('.lav-modal__inner.active')?.classList.remove('active');
    }, 400);
  }

  static addStyles() {
    const styles = /* css */ `
      [class*='lav'] {
        box-sizing: border-box;
      }
      .lav-modal {
        position: fixed;
        z-index: 99999999999;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(39, 48, 56, 0.65);

        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        transition: 0.35s;
        opacity: 0;
        pointer-events: none;
        padding: 15px;
        overflow-y: auto;
        max-height: 100%;
        display: flex;
      }
      .lav-intent__no-qty .lav-product__qty {
        display: none!important;
      }
      .lav-modal.active {
        opacity: 1;
        pointer-events: auto;
      }
      .lav-modal__inner {
        position: relative;
        background: #fff;
        max-width: 540px;
        width: 100%;
        display: none;
        margin: auto;
        border-radius: 2px;
      }
      .lav-modal__inner.active {
        display: block;
      }
      .lav-modal__close {
        position: absolute;
        right: 12px;
        top: 12px;
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
        overflow: hidden!important;
      }

      
      .lavm__header {
        padding: 12px;
        background: #175389;
        text-align: center;
        color: #fff;
      }
      .lavm__header-title {
        font-size: 24px;
        font-weight: 700;
        line-height: 32px;
      }
      .lavm__header-caption {
        margin-top: 4px;
        font-size: 16px;
        font-weight: 400;
        line-height: 22px;
      }
      .lavm__hot {
        background: rgba(0, 99, 150, 0.17);
        padding: 8px 20px;
        color: #536D80;
        text-align: center;
        font-size: 13px;
        font-weight: 700;
        line-height: 16px;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
      }
      .lavm__body {
        padding: 16px 24px 24px;
        overflow: hidden;
        background-color: #F8F9FD;
      }
      .lavm__slider {
        max-height: 225px;
        overflow: hidden;
      }
      .lavm__slider .owl-item + .owl-item:before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: -17px;
        width: 1px;
        background: #EBECED;
      }
      .lavm__slider.owl-loaded .owl-stage-outer {
        overflow: visible;
      }
      .lavm__slider.owl-carousel .owl-nav button.owl-prev, .lavm__slider.owl-carousel .owl-nav button.owl-next {
        top: 46%;
      }
      .lavm__slider.owl-carousel .owl-nav button.owl-prev {
        left: 2px;
      }
      .lavm__slider.owl-carousel .owl-nav button.owl-next {
        right: 2px;
      }
      .lavm__note {
        margin-top: 16px;
        display: flex;
        align-items: center;
        gap: 8px;
        justify-content: center;
        padding: 8px 16px;
        border-radius: 4px;
        background: #F5F5F5;
        color: #536D80;
        font-size: 12px;
        font-weight: 600;
        line-height: 20px;
      }
      .lavm__note svg {
        flex-shrink: 0;
      }
      .lavm__complete {
        margin-top: 16px;
        width: 100%;
        min-height: 50px;
        font-size: 16px!important;
      }

      .lav-product {
        text-align: center;
        // width: 180px;
      }
      .lav-product__image {
        display: flex;
        justify-content: center;
        align-items: center;
        line-height: 0;
        padding: 5px;
        border-radius: 4px;
        background: #fff;
        width: 120px;
        height: 120px;
        overflow: hidden;
        margin: auto;
      }
      .lav-product__title {
        color: #006396;
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-top: 8px;
      }
      .lav-product__meta {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #536D80;
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
        margin-top: 8px;
      }
      .lav-product__price {
        display: flex;
        align-items: center;
        gap: 3px;
      }
      .lav-product__price span {
        color: #B51F23;
        font-size: 20px;
        font-weight: 700;
        line-height: 22px;
      }
      .lav-product__qty {
        padding-left: 7px;
        margin-left: 6px;
        border-left: 1px solid #536D80;
        white-space: nowrap;
      }
      .lav-product__caption {
        display: none!important;
        justify-content: center;
        align-items: center;
        gap: 6px;
        color: #536D80;
        font-size: 12px;
        font-weight: 400;
        line-height: 18px;
        margin-top: 8px;
      }
      .lav-product__caption svg {
        width: 12px;
        flex-shrink: 0;
      }
      .lavm__slider .owl-dots {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
        margin-top: 16px;
      }
      .lavm__slider.owl-carousel .owl-dot span {
        margin: 0;
        width: 8px;
        height: 8px;
        opacity: 1;
        background-color: #EBECED;
      }
      .lavm__slider.owl-carousel .owl-dot.active span {
        background-color: #35638E;
      }

      .lav-satisfied {
        gap: 8px;
        display: flex;
        align-items: center;
      }
      .logo-menu-container .lav-satisfied {
        position: relative;
        // border-left: 2px solid #00528E;
        padding-left: 18px;
        margin-left: -2px;
      }
      .logo-menu-container .lav-satisfied:before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        left: 0;
        max-height: 34px;
        width: 2px;
        background-color: #00528E;
      }
      .logo-menu-container .phone-container {
        order: 1;
      }
      .mobile-nav-before .lav-satisfied {
        margin-top: 12px;
        border-radius: 4px;
        background: var(--Main-White, #FFF);
        padding: 6px 8px;
      }
    
      .lav-satisfied__image {
        line-height: 0;
        flex-shrink: 0;
      }
      .lav-satisfied__info {
        color: #006396;
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
      }
      .lav-satisfied__info span {
        color: #B51F23;
      }

      @media(min-width: 1024px) and (max-width: 1470px) {
        body .logo-menu-container .logo img {
          max-width: 135px;
        }
        .phone-container .header-link-phone span {
          white-space: nowrap;
          font-size: 1.2rem;
        }
        .page-header .authorisation-cart-container {
          justify-content: flex-end;
        }
        .lav-satisfied__info {
          white-space: nowrap;
          font-size: 12px;
          line-height: 1.5;
          margin-right: 7px;
        }
        .page-header .authorization-wrapper .auth-button, .page-header .wishlist-tab-container .wishlist-tab, .page-header .authorisation-cart-container .minicart-wrapper .action.showcart {
          padding: 10px 8px;
        }
      }
      @media(max-width: 1024px) {
        .logo-menu-container .lav-satisfied {
          display: none;
        }
      }

      @media(max-width: 768px) {
        .lav-modal {
          padding: 55px 20px 50px;
        }
        .lav-modal__close {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          background: #fff;
          border-radius: 50%;
          top: -8px;
          transform: translateY(-100%);
          right: 0;
        }
        .lav-modal__close svg path {
          fill: #175389;
        }
        .lavm__header-title {
          font-size: 18px;
          line-height: 26px;
        }
        .lavm__header-caption {
          font-size: 14px;
          line-height: 20px;
        }
        .lavm__body {
          padding: 20px;
          background: #fff;
        }
        .lavm__note {
          gap: 12px;
        }
        .lavm__complete {
          margin-top: 20px;
        }
        .lav-product__image {
          border-bottom: 1px solid #EDEDED;
        }
        .lav-product__qty {
          padding-left: 5px;
          margin-left: 4px;
        }
        .lavm__slider.owl-carousel .owl-nav button.owl-prev, .lavm__slider.owl-carousel .owl-nav button.owl-next {
          display: none;
        }
      }
    `;

    const stylesEl = document.createElement('style');
    stylesEl.classList.add('exp-modal');
    stylesEl.innerHTML = styles;
    document.head.appendChild(stylesEl);
  }
}

// Styles for Experiment
const styles = /* css */ `
  .lav-accredited {
    border-radius: 4px;
    background: var(--Main-White, #FFF);
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.08);
    margin-bottom: 10px;
    padding: 8px 12px;
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .lav-accredited img {
    max-width: 125px;
  }
  .lav-accredited__caption {
    color: #006396;
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
  }

  .lav-trusted {
    border-radius: 8px;
    background: var(--Main-White, #FFF);
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 2px 8px 0px rgba(0, 0, 0, 0.08);
    padding: 16px;
    margin-bottom: 16px;
  }
  .lav-trusted__title {
    text-align: center;
    color: #536D80;
    font-size: 18px;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: 0.5px;
  }
  .lav-trusted__logos {
    line-height: 0;
    margin-top: 16px;
  }
  .lavt-slider__wrap {
    margin-top: 16px;
    border-top: 1px solid #EBECED;
    padding-top: 17px;
  }
  .lavt-slider__title {
    text-align: left;
    line-height: 20px;
  }
  .lavt-slider {
    margin-top: 16px;
  }
  .lavt-slider .owl-stage {
    display: flex;
  }
  .lavt-slider .owl-item {
    display: flex;
  }
  .lavt-slider__slide {
    display: flex;
    flex-flow: column;
  }
  .lavt-slider__position {
    line-height: 1.3;
  }
  .lavt-slider__text {
    color:  #536D80;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    margin-bottom: 16px;
  }
  .lavt-slider__author {
    margin-top: auto;
    display: flex;
    gap: 9px;
    align-items: center;
  }
  .lavt-slider__photo {
    line-height: 0;
  }
  .lavt-slider__photo img {
    border-radius: 50%;
    max-width: 50px;
    max-height: 50px;
  }
  .lavt-slider__info {
    color: #536D80;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.5px;
  }
  .lavt-slider__name {
    font-weight: 700;
  }
  .lavt-slider .owl-dots {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    margin-top: 16px;
  }
  .lavt-slider .owl-dots {
    min-height: 30px;
  }
  .lavt-slider.owl-carousel .owl-dot span {
    margin: 0;
    width: 8px;
    height: 8px;
    opacity: 1;
    background-color: #EBECED;
  }
  .lavt-slider.owl-carousel .owl-dot.active span {
    background-color: #35638E;
  }
  .lavt-slider .owl-nav button.owl-prev, .lavt-slider .owl-nav button.owl-next {
    bottom: 0;
    top: initial;
    transform: none;
    width: 30px;
    height: 30px;
    background-size: 80%;
    box-shadow: 0 2px 12px 2px rgba(0,0,0,.1);
  }
  .lavt-slider .owl-nav button.owl-prev {
    left: 30%;
  }
  .lavt-slider .owl-nav button.owl-next {
    right: 30%;
  }

  @media(max-width: 768px) {
    .lav-trusted__title {
      text-align: left;
      letter-spacing: 0;
    }
    .lav-accredited {
      display: none;
    }
  }
`;

const stylesEl = document.createElement('style');
stylesEl.classList.add('exp-styles');
stylesEl.innerHTML = styles;

// *** Logic *** //
initExp();

async function initExp() {
  await waitFor(() => document.head && document.body, false, { ms: 100 });
  // connectSplide();

  console.debug('** InitExp **');
  if ($('.catalog-product-view')) {
    handlePdp();
    document.head.appendChild(stylesEl);
  }

  handleExitIntent();
}

function isPopupShown() {
  if (sessionStorage.getItem('isPopupShown')) {
    return true;
  }

  return false;
}

// *** Experiments *** //
function handleExitIntent() {
  addSatisfied();
  addModal();
  if (isPopupShown()) {
    console.log('Popup already shown');
    return;
  }

  addProducts();

  function addSatisfied() {
    const html = /* html */ `
      <div class="lav-satisfied"> 
        <div class="lav-satisfied__image">
          <img src="${config.dir}/img/quality.svg" alt="Satisfied">
        </div>
        <div class="lav-satisfied__info">
          <span>22</span> years in business <br/>
          Over <span>100,000</span> satisfied clients 
        </div>
      </div>
    `;

    waitFor(
      () => $('.mobile-nav-before'),
      () => {
        $('.mobile-nav-before').insertAdjacentHTML('beforeend', html);
      }
    );

    waitFor(
      () => $('.logo-menu-container .logo'),
      () => {
        $('.logo-menu-container .logo').insertAdjacentHTML('afterend', html);
      }
    );
  }

  // let cartTimeout = null;
  // let isCartTrack = false;

  // if (location.href.includes('/checkout/cart/')) {
  //   waitFor('#form-validate', () => {
  //     $('#form-validate').addEventListener('click', () => {
  //       isCartTrack = true;
  //     });
  //   });
  // }

  initMutation(
    document.body,
    (node) => {
      if (node.closest('.notify-addcart')) {
        waitFor(
          () =>
            localStorage['mage-cache-storage'] &&
            JSON.parse(localStorage['mage-cache-storage'])?.cart.items[0]
              ?.product_image,
          () => {
            addProducts();
          }
        );
      }
    }
    // (node) => {
    //   if (
    //     location.href.includes('/checkout/cart/') &&
    //     node.classList.contains('loading-mask') &&
    //     isCartTrack &&
    //     !isPopupShown()
    //   ) {
    //     // console.log('gfire reload');
    //     location.reload();
    //   }
    // }
  );

  handlePopupTriggers();

  function addProducts() {
    if ($('.lavm__slider')) {
      $('.lavm__slider').remove();
    }

    if (!localStorage['mage-cache-storage']) return false;

    const cart = JSON.parse(localStorage['mage-cache-storage'])?.cart;

    console.log('cart', cart);

    if (!cart || !cart.items.length) return false;

    $('.lavm__body').insertAdjacentHTML(
      'afterbegin',
      `<div class='lavm__slider owl-carousel'></div>`
    );

    for (const item of cart.items) {
      console.log('product', item);
      addProduct(item);
    }

    waitFor(
      () =>
        typeof jQuery === 'function' &&
        typeof jQuery('body').owlCarousel === 'function',
      initSlider
    );

    visibilityEvent('.lavm__slider', () => {
      pushDataLayer(
        'exp_scarcity_section_02',
        document.querySelectorAll('.lav-product').length + ' - section',
        'Visibility ',
        'Pop-up. Filled cart. Reserve Now, Limited Supply'
      );
    });

    function addProduct({
      product_name,
      qty,
      product_image,
      product_price_value,
    }) {
      if (!product_image?.src) return false;

      const product = /*html*/ `
        <div class='lavm__slide lav-product'>
          <div class='lav-product__image'>
            <img src='${product_image?.src.replace(
              'b1c4e2a2745b8099e234fed43dccc07b',
              'acb79d03af3da2b97c59ded0fca57b36'
            )}' alt='Product'>
          </div>

          <div class='lav-product__title'>
            ${product_name}
          </div>

          <div class='lav-product__meta'>
            <div class='lav-product__price'><span>${product_price_value.toLocaleString(
              'en-US',
              { style: 'currency', currency: 'USD' }
            )}</span> /Each</div>
            <div class='lav-product__qty'>Qty: ${qty}</div>
          </div>

          <div class='lav-product__caption'>
            ${getSvg('fire')}
            Only 3pcs left in stock
          </div>
        </div>
      `;

      $('.lavm__slider').insertAdjacentHTML('beforeend', product);
    }

    function initSlider() {
      console.log('initSlider');
      const options = {
        nav: true,
        center: true,
        items: 1.55,
        margin: 33,
        dots: true,
        responsive: {
          600: {
            items: 2.4,
          },
        },
      };

      if (document.querySelectorAll('.lavm__slide').length === 2) {
        options.responsive[600].items = 2;
        options.items = 1;
        options.center = false;
      }

      jQuery('.lavm__slider').owlCarousel(options);
    }
  }

  function addModal() {
    const markup = /* html */ `
      <div class='lavm__header'>
        <div class='lavm__header-title'>Reserve Now, Limited Supply</div>
        <div class='lavm__header-caption'>Only one step left:</div>

        <div class='lav-modal__close'>
          ${getSvg('close')}
        </div>
      </div>
      <div class='lavm__hot'>
        ${getSvg('fire')}
        Popular choice, stocks are limited!
      </div>
      <div class='lavm__body'>
        <div class='lavm__note'>
          ${getSvg('note')}
          We can’t guarantee its availability if you don't complete the purchase now
        </div>

        <button class="action primary lavm__complete">
          <span>Complete my order</span>
        </button>
      </div>
    `;

    new Modal('lav-intent', markup);

    $('.lavm__complete').addEventListener('click', () => {
      if ($('.lavm__complete_loading')) return;

      $('.lavm__complete').classList.add('lavm__complete_loading');

      pushDataLayer(
        'exp_scarcity_button_02',
        'Complete my order',
        'Button',
        'Pop-up. Filled cart. Reserve Now, Limited Supply'
      );
      location.href = 'https://www.restaurantsupply.com/checkout/cart/';
    });

    visibilityEvent('.lav-intent', () => {
      pushDataLayer(
        'exp_scarcity_section_01',
        'Section',
        'Visibility',
        'Pop-up. Filled cart. Reserve Now, Limited Supply'
      );
    });

    // Modal.open('.lav-intent');
  }

  function handlePopupTriggers() {
    const isMob = window.innerWidth <= 768;
    let isAction = false;
    let timer = 0;

    const timerInterval = setInterval(() => {
      timer += 0.5;

      if (timer % 2 === 0) console.log('timer:', timer + 's');

      if (isPopupShown()) {
        clearInterval(timerInterval);
        return;
      }

      if (timer === 20) {
        console.log('fire ' + timer + 'sec withoutAction');
        openModal();
        if (isPopupShown()) {
          clearInterval(timerInterval);
        } else {
          timer = 0;
        }
      }
    }, 500);

    document.addEventListener('click', (e) => {
      if (!isAction) isAction = true;

      if (!isPopupShown()) {
        console.log('Click: reset timer');
        timer = 0;
      }
    });

    document.addEventListener('scroll', () => {
      if (!isAction) isAction = true;

      if (!isPopupShown()) {
        console.log('Scroll: reset timer');
        timer = 0;
      }
    });

    document.addEventListener('visibilitychange', function () {
      if (!isAction && !document.hidden && !isPopupShown()) {
        console.log('Visibility Trigger');

        openModal();
      }
    });

    if (!isMob) {
      document.addEventListener('mouseout', (e) => {
        if (!e.toElement && !e.relatedTarget && !isPopupShown()) {
          console.log('MouseOut Trigger');
          openModal();
        }
      });

      return;
    }

    const checkScrollSpeed = (function (settings) {
      settings = settings || {};

      let lastPos;
      let newPos;
      let timer;
      let delta,
        delay = settings.delay || 50;

      clear();

      return function () {
        newPos = window.scrollY;
        if (lastPos != null) {
          delta = newPos - lastPos;
        }
        lastPos = newPos;
        clearTimeout(timer);
        timer = setTimeout(clear, delay);
        return delta;
      };

      function clear() {
        lastPos = null;
        delta = 0;
      }
    })();

    window.onscroll = function () {
      if (!isPopupShown()) {
        const scrollSpeed = checkScrollSpeed();

        if (+scrollSpeed < -70 || +scrollSpeed > 70) {
          console.log('FastScroll Trigger');

          openModal();
        }
      }
    };
  }

  function openModal() {
    if (isPopupShown()) {
      console.log('Popup already shown');
      return;
    }

    if (JSON.parse(localStorage['mage-cache-storage'])?.cart?.items?.length) {
      const cart = JSON.parse(localStorage['mage-cache-storage'])?.cart;
      const qty = cart?.items.reduce((acc, item) => {
        return acc + item.qty;
      }, 0);

      console.log('qty', qty);

      if (qty !== cart?.summary_count) {
        $('.lav-intent')?.classList.add('lav-intent__no-qty');
      } else {
        $('.lav-intent')?.classList.remove('lav-intent__no-qty');
      }
      if (location.href.includes('/checkout/cart/')) {
        addProducts();
      }
      sessionStorage.setItem('isPopupShown', true);
      Modal.open('.lav-intent');
    } else {
      console.log('Trigger fire but cart empty!');
    }
  }
}

function handlePdp() {
  waitFor('.product-view-right', addAccredited);
  waitFor('.product-shipping-time', addTrusted);
  // waitFor('.logo-menu-container', addSatisfied(true));

  function addAccredited() {
    const html = /* html */ `
      <div class="lav-accredited">
        <img src="${config.dir}/img/accredited.png" alt="Accredited">
        <div class='lav-accredited__caption'>Accredited since: <br />2/13/2011</div>
      </div>
    `;

    $('.product-view-right').insertAdjacentHTML('afterbegin', html);
  }

  function addTrusted() {
    const html = /* html */ `
      <div class="lav-trusted">
        <div class="lav-trusted__title">Restaurant Supply is trusted by</div>
        <div class="lav-trusted__logos">
          <img src="${config.dir}/img/trusted.png">
        </div>

        <div class="lavt-slider__wrap">
          <div class="lav-trusted__title lavt-slider__title">What our clients say about us</div>

          <div class="lavt-slider owl-carousel">
            <div class="lavt-slider__slide">
              <div class="lavt-slider__text">
                "Quick shipping and quality equipment have always been consistent with RestaurantSupply. The latest fridge we got was delivered ahead of schedule, and it's been perfect for our fast-paced environment. Truly remarkable service!"
              </div>

              <div class="lavt-slider__author">
                <div class="lavt-slider__photo">
                  <img src="${config.dir}/img/author-1.png" alt="Avatar">
                </div>

                <div class="lavt-slider__info">
                  <div class="lavt-slider__name">Jamie Smith,</div>
                  <div class="lavt-slider__position">Head Chef, Downtown Bistro</div>
                </div>
              </div>
            </div>

            <div class="lavt-slider__slide">
              <div class="lavt-slider__text">
                "The prompt service from RestaurantSupply has made our kitchen's hectic schedules more manageable. Their ranges are dependable, supporting our goal to deliver culinary excellence every day."
              </div>

              <div class="lavt-slider__author">
                <div class="lavt-slider__photo">
                  <img src="${config.dir}/img/author-2.png" alt="Avatar">
                </div>

                <div class="lavt-slider__info">
                  <div class="lavt-slider__name">Tom Sullivan,</div>
                  <div class="lavt-slider__position">Chef/Owner, Greenfield’s Gastropub</div>
                </div>
              </div>
            </div>

            <div class="lavt-slider__slide">
              <div class="lavt-slider__text">
                "Every order from RestaurantSupply has been spot on, helping us keep our kitchen running smoothly. Their commitment to quality and fast delivery is why they're our first call for new equipment."
              </div>

              <div class="lavt-slider__author">
                <div class="lavt-slider__photo">
                  <img src="${config.dir}/img/author-3.png" alt="Avatar">
                </div>

                <div class="lavt-slider__info">
                  <div class="lavt-slider__name">Rohit Kumar,</div>
                  <div class="lavt-slider__position">Director of Operations, Modern Bistro</div>
                </div>
              </div>
            </div>

            <div class="lavt-slider__slide">
              <div class="lavt-slider__text">
                "Quick orders and reliable gear have been a game changer for us. The latest freezer unit we received from RestaurantSupply not only arrived early but has been a powerhouse for our storage needs. It's companies like this that make a difference."
              </div>

              <div class="lavt-slider__author">
                <div class="lavt-slider__photo">
                  <img src="${config.dir}/img/author-4.png" alt="Avatar">
                </div>

                <div class="lavt-slider__info">
                  <div class="lavt-slider__name">Anita Peterson,</div>
                  <div class="lavt-slider__position">General Manager, The Brunch Spot</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    `;

    if (window.innerWidth < 768) {
      $('#product-description').insertAdjacentHTML('beforebegin', html);
    } else {
      $('.product-shipping-time').insertAdjacentHTML('afterend', html);
    }

    visibilityEvent('.lav-trusted', () => {
      pushDataLayer(
        'exp_scarcity_section_04',
        'Section',
        'Visibility',
        'PDP. Restaurant Supply is trusted by'
      );
    });

    visibilityEvent('.lavt-slider__wrap', () => {
      pushDataLayer(
        'exp_scarcity_section_05',
        'Section',
        'Visibility',
        'PDP. What our clients say about us'
      );
    });

    waitFor(
      () =>
        typeof jQuery === 'function' &&
        typeof jQuery('body').owlCarousel === 'function',
      initSlider
    );

    function initSlider() {
      const slider = jQuery('.lavt-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 1,
        dots: true,
      });

      $('.lavt-slider .owl-prev').addEventListener('click', () => {
        pushDataLayer(
          'exp_scarcity_arrows_01',
          'left',
          'Click',
          'PDP. What our clients say about us'
        );
      });
      $('.lavt-slider .owl-next').addEventListener('click', () => {
        pushDataLayer(
          'exp_scarcity_arrows_01',
          'right',
          'Click',
          'PDP. What our clients say about us'
        );
      });
      jQuery('.lavt-slider .owl-dot').on('click', function () {
        pushDataLayer(
          'exp_scarcity_pagination_01',
          'Select',
          'Pagination',
          'PDP. What our clients say about us'
        );
      });

      window.dispatchEvent(new Event('resize'));
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 1000);
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 2000);
    }
  }
}

// *** HELPERS *** //

// Waiting for loading by condition
async function waitFor(condition, cb = false, customConfig = {}) {
  const config = {
    ms: 500, // repeat each 0.5 second if condition is false
    limit: 10, // limit in second seconds

    ...customConfig,
  };

  if (typeof condition === 'function') {
    if (condition()) {
      if (typeof cb === 'function') cb();
      return;
    }

    return new Promise((resolve) => {
      let limit = config.limit * 1000;
      const interval = setInterval(function () {
        if (condition() || limit <= 0) {
          clearInterval(interval);
          if (limit > 0 && typeof cb === 'function') cb();
          resolve();
        }
        limit -= config.ms;
      }, config.ms);
    });
  }

  if (condition.startsWith('.') || condition.startsWith('#')) {
    if ($(condition)) {
      if (typeof cb === 'function') cb($(condition));
      return;
    }

    return new Promise((resolve) => {
      const observer = new MutationObserver((mutations, observer) => {
        if ($(condition)) {
          if (typeof cb === 'function') cb($(condition));
          observer.disconnect();
          resolve();
        }
      });

      observer.observe(document, { childList: true, subtree: true });
    });
  }
}

// Mutation Observer
function initMutation(observeEl = document.body, cbAdded, cbRemoved) {
  const el = typeof observeEl === 'string' ? $(observeEl) : observeEl;

  if (!el) return;

  let observer = new MutationObserver((mutations, observer) => {
    for (let mutation of mutations) {
      if (typeof cbAdded === 'function') {
        for (let node of mutation.addedNodes) {
          if (!(node instanceof HTMLElement)) continue;
          cbAdded(node, observer);
        }
      }

      if (typeof cbRemoved === 'function') {
        for (let node of mutation.removedNodes) {
          if (!(node instanceof HTMLElement)) continue;
          cbRemoved(node, observer);
        }
      }
    }
  });

  observer.observe(el, { childList: true, subtree: true });

  return observer;
}

// Intersection Observer
function initIntersection(observeEl, cb, customConfig) {
  const el = typeof observeEl === 'string' ? $(observeEl) : observeEl;

  if (!el || typeof cb !== 'function') return;

  const config = {
    root: null,
    threshold: 0.3, // 0 - 1 | A threshold of 1.0 means that when 100% of the target is visible within the element specified by the root option, the callback is invoked.
    ...customConfig,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      cb(entry);
    });
  }, config);

  observer.observe(el);

  return observer;
}

function focusTimeEvent(el, cb, viewElementProcent = 0.1) {
  let entryTime = 0;
  initIntersection(
    el,
    ({ isIntersecting, time }) => {
      if (isIntersecting) {
        entryTime = time;
      } else if (entryTime) {
        const diffTime = +((time - entryTime) / 1000).toFixed(1);
        cb(diffTime + 's');
        entryTime = 0;
      }
    },
    { threshold: viewElementProcent }
  );
}

function visibilityEvent(el, cb, customConfig = {}) {
  const config = {
    threshold: 0.3,
    ...customConfig,
  };
  initIntersection(
    el,
    ({ isIntersecting, target }) => {
      // console.log(target, isIntersecting);
      if (isIntersecting) {
        // setTimeout(() => {
        // if (isElementInViewport(target)) {
        cb();
        // }
        // }, 3000);
      }
    },
    config
  );
}

// Artificial delay
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Check if element in viewport
function isElementInViewport(selector) {
  const el = typeof selector === 'string' ? $(selector) : selector;

  if (!el) return false;

  const rect = el.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;

  return (
    rect.top + rect.height * 0.3 < windowHeight &&
    rect.bottom > rect.height * 0.3
  );
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
  return context.querySelector(selector);
}

function _$$(selector, context = document, toSimpleArray = false) {
  const arr = context.querySelectorAll(selector);

  return toSimpleArray ? Array.from(arr) : arr;
}

// GA 4 events
function pushDataLayer(name = '', desc = '', type = '', loc = '') {
  window.dataLayer = window.dataLayer || [];

  try {
    const event = {
      event: 'event-to-ga4',
      event_name: name,
      event_desc: desc,
      event_type: type,
      event_loc: loc,
    };

    console.debug('** GA4 Event **', event);

    if (!config.debug) {
      dataLayer.push(event);
    }
  } catch (e) {
    console.log('** GA4 Error **', e);
  }
}

// Slider
function connectSplide() {
  const sliderStyles = document.createElement('link');
  sliderStyles.rel = 'stylesheet';
  sliderStyles.href =
    'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide-core.min.css';
  document.head.appendChild(sliderStyles);

  let sliderScript = document.createElement('script');
  sliderScript.src =
    'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js';
  document.body.appendChild(sliderScript);
}

// *** Exp BG process *** //

//Clarity
if (!config.debug) {
  waitFor(
    () => typeof hj == 'function',
    () => {
      hj('event', 'exit_int_p');
    }
  );
}

// Svg objects
function getSvg(name) {
  const svgObj = {
    fire: /* html */ `
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="17" viewBox="0 0 14 17" fill="none">
        <path d="M13.463 9.86777C13.2644 7.48156 12.0608 5.98621 10.999 4.66665C10.0158 3.44503 9.16667 2.39009 9.16667 0.833904C9.16667 0.708904 9.09083 0.594654 8.97058 0.537373C8.84996 0.479748 8.70503 0.489186 8.59538 0.562748C7.00071 1.61606 5.67018 3.39134 5.20539 5.08521C4.88273 6.2645 4.84004 7.59024 4.83404 8.46584C3.36139 8.17549 3.02779 6.14212 3.02427 6.11996C3.00768 6.0145 2.93787 5.92271 2.83631 5.87259C2.7337 5.82312 2.61308 5.81953 2.50904 5.86706C2.43182 5.90156 0.613547 6.75437 0.507752 10.1594C0.500338 10.2727 0.5 10.3863 0.5 10.4999C0.5 13.8079 3.41603 16.4995 7 16.4995C7.00494 16.4998 7.01022 16.5005 7.01446 16.4995C7.01588 16.4995 7.01727 16.4995 7.01903 16.4995C10.5942 16.49 13.5 13.8021 13.5 10.4999C13.5 10.3336 13.463 9.86777 13.463 9.86777ZM7 15.8329C5.80522 15.8329 4.83333 14.8772 4.83333 13.7025C4.83333 13.6625 4.83299 13.6221 4.83614 13.5726C4.8506 13.0772 4.95253 12.739 5.06432 12.5141C5.27381 12.9294 5.6483 13.3112 6.25663 13.3112C6.45623 13.3112 6.61775 13.1621 6.61775 12.9779C6.61775 12.5034 6.62835 11.9559 6.75635 11.4617C6.87027 11.0236 7.14249 10.5575 7.4874 10.1838C7.64079 10.6688 7.93986 11.0614 8.23185 11.4445C8.64975 11.9926 9.08173 12.5593 9.15756 13.5257C9.16213 13.583 9.16674 13.6406 9.16674 13.7025C9.16667 14.8772 8.19478 15.8329 7 15.8329Z" fill="#006396"/>
      </svg>
    `,
    note: /* html */ `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
        <path d="M11.9997 1.70021C10.1313 1.69747 8.29428 2.18017 6.6686 3.10101C5.04292 4.02185 3.68436 5.34925 2.72605 6.95313C1.76774 8.55701 1.24256 10.3823 1.20196 12.2503C1.16136 14.1182 1.60674 15.9646 2.49446 17.6086L1.25006 21.7546C1.19616 21.9339 1.18493 22.1232 1.21727 22.3076C1.24962 22.4919 1.32465 22.6662 1.43636 22.8164C1.54806 22.9666 1.69336 23.0885 1.86062 23.1726C2.02789 23.2566 2.21249 23.3003 2.39966 23.3002C2.51668 23.3 2.63307 23.2831 2.74526 23.2498L6.89126 22.0054C8.33836 22.786 9.94458 23.2259 11.5875 23.2916C13.2304 23.3572 14.8666 23.0469 16.3714 22.3842C17.8761 21.7216 19.2097 20.7241 20.2705 19.4678C21.3313 18.2116 22.0912 16.7297 22.4924 15.1352C22.8935 13.5406 22.9253 11.8756 22.5853 10.2669C22.2453 8.65821 21.5425 7.1484 20.5304 5.85256C19.5184 4.55672 18.2238 3.50907 16.7454 2.78946C15.267 2.06986 13.6439 1.69731 11.9997 1.70021ZM11.9997 6.50021C12.237 6.50021 12.469 6.57059 12.6663 6.70245C12.8637 6.83431 13.0175 7.02172 13.1083 7.24099C13.1991 7.46026 13.2229 7.70154 13.1766 7.93432C13.1303 8.1671 13.016 8.38092 12.8482 8.54874C12.6804 8.71656 12.4665 8.83085 12.2338 8.87715C12.001 8.92346 11.7597 8.89969 11.5404 8.80887C11.3212 8.71804 11.1338 8.56423 11.0019 8.3669C10.87 8.16956 10.7997 7.93755 10.7997 7.70021C10.7997 7.38195 10.9261 7.07673 11.1511 6.85168C11.3762 6.62664 11.6814 6.50021 11.9997 6.50021ZM13.1997 18.5002H11.9997C11.6814 18.5002 11.3762 18.3738 11.1511 18.1487C10.9261 17.9237 10.7997 17.6185 10.7997 17.3002V12.5002C10.4814 12.5002 10.1762 12.3738 9.95113 12.1487C9.72609 11.9237 9.59966 11.6185 9.59966 11.3002C9.59966 10.982 9.72609 10.6767 9.95113 10.4517C10.1762 10.2266 10.4814 10.1002 10.7997 10.1002H11.9997C12.3179 10.1002 12.6231 10.2266 12.8482 10.4517C13.0732 10.6767 13.1997 10.982 13.1997 11.3002V16.1002C13.5179 16.1002 13.8231 16.2266 14.0482 16.4517C14.2732 16.6767 14.3997 16.982 14.3997 17.3002C14.3997 17.6185 14.2732 17.9237 14.0482 18.1487C13.8231 18.3738 13.5179 18.5002 13.1997 18.5002Z" fill="#006396"/>
      </svg>
    `,
    close: /* html */ `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
        <path d="M16.0375 3.8059C15.6432 3.41152 15.0061 3.41152 14.6117 3.8059L9.66667 8.7408L4.72165 3.79579C4.32727 3.4014 3.69018 3.4014 3.29579 3.79579C2.9014 4.19018 2.9014 4.82727 3.29579 5.22165L8.2408 10.1667L3.29579 15.1117C2.9014 15.5061 2.9014 16.1432 3.29579 16.5375C3.69018 16.9319 4.32727 16.9319 4.72165 16.5375L9.66667 11.5925L14.6117 16.5375C15.0061 16.9319 15.6432 16.9319 16.0375 16.5375C16.4319 16.1432 16.4319 15.5061 16.0375 15.1117L11.0925 10.1667L16.0375 5.22165C16.4218 4.83738 16.4218 4.19018 16.0375 3.8059Z" fill="white"/>
      </svg>
    `,
  };

  return svgObj[name];
}
