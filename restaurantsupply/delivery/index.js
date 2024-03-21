console.debug('*** Experiment started ***');

// Config for Experiment
const config = {
  dir: 'http://127.0.0.1:5500/restaurantsupply/delivery',
  // dir: 'https://flopsi69.github.io/crs/restaurantsupply/delivery',
  clarity: ['set', '', 'variant_1'],
  debug: true,
};

// const orig = console.log;
// console.log = function (...args) {
//   orig.apply(console, ['Debug:', ...args]);
// };

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
      if (
        e.target.classList.contains('lav-modal') ||
        e.target.closest('.lav-modal__close')
      )
        this.close();

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
      .lav-modal {
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
        overflow: hidden!important;
      }

      .lav-shipping {
        padding: 32px 8px 0 32px;
        max-width: 664px;
        border-radius: 8px;
        max-height: 100%;
      }
      .lav-shipping.active {
        display: flex;
        flex-flow: column;
      }
      .lav-shipping__title {
        color: #536D80;
        font-size: 20px;
        font-weight: 700;
        line-height: 28px;
        padding-right: 24px;
      }
      .lav-modal__close {
        position: absolute;
        top: 16px;
        right: 16px;
      }
      .lav-shipping__content {
        margin-top: 24px;
        padding-bottom: 32px;
        padding-right: 24px;
      }
      @media(min-width: 768px) {
        .lav-shipping__content {
          overflow: auto;
        }
        .lav-shipping__content::-webkit-scrollbar {
          width: 1px;
          background: #DADADA;
          border-bottom: 20px white solid;
        }
        
        .scroll-container::-webkit-scrollbar-track {
          border-radius: 1px;
          background: #DADADA;
          margin-bottom: 20px;
        }
        
        .lav-shipping__content::-webkit-scrollbar-thumb {
          height: 80px;
          border-radius: 1px;
          background: #165389;
        }
      }
      .lav-shipping__text {
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        margin: 0;
      }
      .lav-shipping__text a {
        color: #1F6699;
        text-decoration: underline;
        transition: 0.2s;
      }
      @media(hover:hover) {
        .lav-shipping__text a:hover {
          color: #0056B3;
          opacity: .7;
        }
      }
      .lav-shipping__text_bold {
        font-weight: 600;
        margin-top: 20px;
      }
      .lav-shipping__subtitle {
        color: #536D80;
        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
        margin-top: 24px;
      }
      .lav-shipping__subtitle + .lav-shipping__text {
        margin-top: 16px;
      }

      .lav-tabs {
        margin-top: 16px;
      }
      .lav-tabs__header {
        display: flex;
        gap: 16px;
      }
      .lav-tabs__item {
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
      .lav-tabs__item:not(.active) {
        cursor: pointer;
      }
      @media(hover:hover) {
        .lav-tabs__item:not(.active):hover {
          background: #F7F8F9;
        }
      }
      .lav-tabs__item.active {
        background: #EDF3F7;
        color: #1F6699;
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
      }
      .lav-tabs__content {
        margin-top: 24px;
      }
      .lav-tabs__pane {
        line-height: 0;
      }
      .lav-tabs__pane img {
        max-width: 100%;
        height: 235px;
      }
      .lav-tabs__pane:not(.active) {
        display: none;
      }
      .lav-ground {
        padding-bottom: 25px;
        border-bottom: 1px solid #EBECED;
      }
      .lav-ground__subtitle {
        margin-top: 16px;
      }
      .lav-ground__list {
        margin-top: 12px;
        display: flex;
        gap: 2px;
        font-size: 12px;
        font-weight: 600;
        line-height: 16px;
      }
      .lav-ground__item {
        padding: 4px 12px;
        font-size: 12px;
        font-weight: 600;
        line-height: 16px;
        border-radius: 4px;
      }
      .lav-ground__item:nth-child(1) {
        background: #FF007F;
        color: #fff;
      }
      .lav-ground__item:nth-child(2) {
        background: #0FF;
      }
      .lav-ground__item:nth-child(3) {
        background: #FF7F00;
        color: #fff;
      }
      .lav-ground__item:nth-child(4) {
        background: #0F0;
      }
      .lav-ground__item:nth-child(5) {
        background: #4C148C;
        color: #fff;
      }
      .lav-ground__item:nth-child(6) {
        background: #FFF200;
      }
      .lav-ground__item:nth-child(7) {
        background: #00F;
        color: #fff;
      }
      .lav-shipping__faq {
        margin-top: 32px;
        margin-bottom: 24px;
      }

      @media(max-width: 768px) {
        .lav-shipping__title {
          font-size: 18px;
          line-height: 26px;
          padding: 0;
        }
        .lav-shipping__content {
          margin-top: 16px;
          padding: 0;
        }
        .lav-shipping__subtitle + .lav-shipping__text {
          margin-top: 12px;
        }
        .lav-tabs__item {
          padding: 8px 12px;
        }
        .lav-tabs__header {
          gap: 8px;
          flex-wrap: wrap;
        }
        .lav-tabs {
          margin-top: 12px;
        }
        .lav-tabs__pane img {
          height: auto;
          max-height: 225px;
        }
        .lav-ground__list {
          flex-wrap: wrap;
        }
        .lav-shipping__faq {
          margin-top: 24px;
          margin-bottom: 16px;
        }
        .lav-shipping__text_bold {
          margin-top; 16px;
        }
        .lav-shipping {
          padding: 32px 20px 48px;
          border-radius: 8px 0px 0px 8px;
          max-height: initial;
          margin-right: initial;
        }
        .lav-modal {
          padding: 0;
          padding-left: 20px;
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
  [class*='lav-'] {
    box-sizing: border-box;
  }
  .lav-faq__title {
    color: #536D80;
    font-size: 20px;
    font-weight: 700;
    line-height: 28px;
  }
  .lav-faq__list {
    margin-top: 24px;
  }
  .lav-faq__item + .lav-faq__item {
    margin-top: 4px;
  }
  .lav-faq__question {
    position: relative;
    color: #70818C;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    padding-right: 24px;
    transition: 0.3s;
  }
  .lav-faq__question::before {
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

  .lav-faq__item {
    border-radius: 8px;
    border: 1px solid #EBECED;
    background: #FAFAFA;
    transition: 0.3s;
    padding: 10px 16px;
    cursor: pointer;
  }
  .lav-faq__answer {
    display: none;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
  }
  .lav-faq__item.active {
    padding-top: 16px;
    padding-bottom: 20px;
    background: var(--Main-White, #FFF);
  }
  .lav-faq__item.active .lav-faq__question {
    color: #1F6699;
    margin-bottom: 16px;
  }
  .lav-faq__item.active .lav-faq__question::before {
    background-image: url('${config.dir}/img/faq-minus.svg');
  }
    
  .lav-faq__item.active .lav-faq__answer {
    display: block;
  }

  .lav-faq__item:not(.active) {
    cursor: pointer;
  }
  @media(hover:hover) {
    .lav-faq__item:not(.active):hover {
      background: #F7F8F9;
    }
  }
  @media(max-width: 768px) {
    .lav-faq__title {
      font-size: 18px;
      line-height: 26px;
    }
    .lav-faq__list {
      margin-top: 16px;
    }
    .lav-faq__item.active {
      padding-top: 10px;
      padding-bottom: 16px;
    }
    .lav-faq__item.active .lav-faq__question::before {
      opacity: 0;
    }
  }

  .shipping-info .shipping-info-item {
    background: #4F9E34;
  }

  .lav-wait {
    border-radius: 8px;
    background: var(--Main-White, #FFF);
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 2px 8px 0px rgba(0, 0, 0, 0.08);
    padding: 18px 16px 16px;
    margin-bottom: 16px;
  }
  .lav-wait__title {
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
  .lav-wait__link {
    color: #1F6699;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    transition: 0.3s;
    cursor: pointer;
  }
  .lav-wait__link span {
    text-decoration-line: underline;
  }
  @media(hover:hover) {
    .lav-wait__link:hover {
      opacity: 0.7;
    }
  }

  .product-shipping-time .product-shipping-time-text {
    padding-top: 4px;
    color: #4F9E34;
    font-weight: 600;
    margin-bottom: 16px;
  }
  .product-shipping-time .product-shipping-time-title {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .lav-delivery__text {
    color: #536D80;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px; 
  }

  .lav-choose {
    padding: 12px 0;
    border-top: 1px solid #EBECED;
    border-bottom: 1px solid #EBECED;
  }
  .lav-policy {
    color: #1F6699;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    transition: 0.3s;
    cursor: pointer;
    margin-top: 16px;
  }
  .lav-policy span {
    text-decoration-line: underline;
  }
`;

const stylesEl = document.createElement('style');
stylesEl.classList.add('exp-styles');
stylesEl.innerHTML = styles;

// *** Logic *** //
initExp();

async function initExp() {
  await waitFor(() => document.head && document.body, false, { ms: 100 });
  console.debug('** InitExp **');

  if (
    location.href.includes('checkout/cart') ||
    ($('.catalog-product-view') && !$('.cart-empty'))
  ) {
    document.head.appendChild(stylesEl);
  } else {
    return false;
  }

  if (location.href.includes('checkout/cart')) {
    waitFor(() => $('.cart-container>.cart-summary'), initFAQ);
  } else if ($('.catalog-product-view') && !$('.cart-empty')) {
    addHeaderLink();

    waitFor('.product-shipping-time.stock-status-logic', handleShipping);

    waitFor(
      () =>
        $('.product-shipping-time.stock-status-logic') &&
        $('.product-interested-in') &&
        $('.product-add-form .action.tocart')?.innerText.toLowerCase() ===
          'out of stock',
      handleWait
    );
    initModal();
  }
}

function handleShipping() {
  if (!$('.product-shipping-time.stock-status-logic')) return;

  const waitHtml = /* html */ `
    <div class='lav-choose lav-delivery__text'>Choose the shipping method for all selected products at checkout</div>
    <div class="lav-policy" data-modal='.lav-shipping'>
        <span>Shipping and Delivery policy</span>&nbsp;&nbsp;>
      </div>
    </div>
  `;

  $('.product-shipping-time.stock-status-logic').insertAdjacentHTML(
    'beforeend',
    waitHtml
  );

  if (
    $('.product-shipping-time.stock-status-logic .product-shipping-time-title')
  ) {
    $(
      '.product-shipping-time.stock-status-logic .product-shipping-time-title'
    ).innerHTML =
      getSvg('truck') +
      $(
        '.product-shipping-time.stock-status-logic .product-shipping-time-title'
      ).innerHTML;
  }

  if (window.innerWidth < 768) {
    $('.product-view-left').insertAdjacentElement(
      'afterend',
      $('.product-shipping-time.stock-status-logic')
    );

    if ($('.product-shipping-time:not(.stock-status-logic)')) {
      $('.product-shipping-time.stock-status-logic').insertAdjacentElement(
        'afterend',
        $('.product-shipping-time')
      );
    }
  }
}

function handleWait() {
  const waitHtml = /* html */ `
    <div class="lav-wait">
      <div class="lav-wait__title">
        ${getSvg('clock')}
        Don’t want to wait?
      </div>
      <div class="lav-wait__link">
        <span>View similar products ready for shipping</span>&nbsp;&nbsp;>
      </div>
    </div>
  `;

  $('.product-shipping-time.stock-status-logic').insertAdjacentHTML(
    'afterend',
    waitHtml
  );

  $('.lav-wait__link').addEventListener('click', () => {
    if (!$('.product-interested-in')) return;

    jQuery('html, body').animate(
      {
        scrollTop:
          jQuery('.product-interested-in').offset().top -
          (jQuery(window).width() < 768 ? 10 : 60),
      },
      500
    );
  });
}

function addHeaderLink() {
  waitFor('.page-header .links-container ul', () => {
    $('.page-header .links-container ul')?.insertAdjacentHTML(
      'beforeend',
      /* html */ `
      <li class="link lav-link-delivery">
        <a href="https://www.restaurantsupply.com/terms-and-conditions/shipping-and-delivery">Shipping and handling</a>
      </li>
    `
    );
  });

  waitFor('.you-may-be-interested-in .item', () => {
    $('.you-may-be-interested-in .item')?.insertAdjacentHTML(
      'beforebegin',
      /* html */ `
      <p class="item lav-link-delivery-mob" role="menuitem"><a href="https://www.restaurantsupply.com/terms-and-conditions/shipping-and-delivery">Shipping and handling</a></p>
    `
    );
  });
}

function initFAQ() {
  console.log('init FAQ');

  const cartStyles = /* css */ `
    .lav-faq {
      border-radius: 8px;
      background: var(--Main-White, #FFF);
      box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.08);
      padding: 32px;
      margin-top: -9px;
    }
    .lav-faq__title {
      font-size: 18px;
      line-height: 26px;
      letter-spacing: 0.5px;
    }
    .lav-faq__list {
      margin-top: 16px;
      max-width: 600px;
    }
  `;

  const cartStylesEl = document.createElement('style');
  cartStylesEl.classList.add('exp-cart-styles');
  cartStylesEl.innerHTML = cartStyles;
  document.head.appendChild(cartStylesEl);

  const faqHtml = /* html */ `
    <div class='lav-faq'>
      <div class="lav-faq__title">Shipping and returns F.A.Q</div>

      <div class="lav-faq__list">
        <div class="lav-faq__item">
          <div class="lav-faq__question">When will I receive my order?</div>
          <div class="lav-faq__answer">The delivery timeframe for your order depends on the selected shipping method and the warehouse location from which your item is dispatched. You will receive a confirmation email shortly after placing your order, which will include an estimated delivery date. For the most accurate delivery information, please contact us via email before placing your order.</div>
        </div>

        <div class="lav-faq__item">
          <div class="lav-faq__question">How can I return an item?</div>
          <div class="lav-faq__answer">To return an item, kindly visit our Returns Policy page for step-by-step instructions. Returns should be initiated within 90 days of receipt, with the item in its original condition and packaging. Note that some items may incur restocking fees. Contact our customer service to obtain an RMA (Return Merchandise Authorization) number and further instructions.</div>
        </div>

        <div class="lav-faq__item">
          <div class="lav-faq__question">Where can I find warranty information?</div>
          <div class="lav-faq__answer">You can find detailed warranty information on each product's detail page (PDP). This includes the manufacturer's warranty terms, such as the duration and what's covered. If you have further questions about warranties or need assistance with a claim, our customer service team is here to help.</div>
        </div>
      </div>
    </div>
  `;

  $('.cart-container>.cart-summary').insertAdjacentHTML('afterend', faqHtml);

  for (const item of $$('.lav-faq__item')) {
    item.addEventListener('click', function () {
      if (this.classList.contains('active')) {
        this.classList.remove('active');
      } else {
        $('.lav-faq__item.active')?.classList.remove('active');
        this.classList.add('active');
      }
    });
  }
}

function initModal() {
  const modalHtml = /* html */ `
    <div class="lav-modal__close" title="Close">
      ${getSvg('closeModal')}
    </div>

    <div class="lav-shipping__title">Shipping and Delivery at RestaurantSupply.com</div>

    <div class='lav-shipping__content'>
      <div class="lav-shipping__text">
        We at RestaurantSupply.com are committed to making your purchasing experience as smooth and transparent as possible. Below, you'll find an overview of our shipping and delivery policies, designed to address your main concerns and streamline your shopping process. For more detailed information, please refer to the full text of our shipping and delivery policy.
      </div>

      <div class="lav-shipping__subtitle">When will I receive my order?</div>

      <div class="lav-shipping__text">
        Most orders are dispatched within 1-2 business days. However, during peak times or due to supply issues, there might be delays. For urgent needs, specify your required date in the customer comment box at checkout, and we'll inform you promptly of any potential delays. Delivery times vary based on your location. For faster delivery, you can select Second Day or Next Day shipping in your cart, ensuring same-day dispatch for in-stock items and delivery within 1 or 2 days, respectively.
      </div>

      <div class="lav-shipping__subtitle">Select a Warehouse Tab Below to View Estimated Delivery Times to <br/>  Your Area on the Map</div>

      <div class="lav-tabs">
        <div class="lav-tabs__header">
          <div class="lav-tabs__item active" data-tab="tab1">Connecticut (CT)</div>
          <div class="lav-tabs__item" data-tab="tab2">Florida (FL)</div>
          <div class="lav-tabs__item" data-tab="tab3">Tennessee (TN)</div>
        </div>

        <div class="lav-tabs__content">
          <div class="lav-tabs__pane active" data-tab="tab1">
            <img src="${config.dir}/img/map1.png" alt="Connecticut (CT)" />
          </div>
          <div class="lav-tabs__pane" data-tab="tab2">
            <img src="${config.dir}/img/map2.png" alt="Florida (FL)" />
          </div>
          <div class="lav-tabs__pane" data-tab="tab3">
            <img src="${config.dir}/img/map3.png" alt="Tennessee (TN)" />
          </div>
        </div>
      </div>

      <div class='lav-ground'>
        <div class="lav-shipping__subtitle lav-ground__subtitle">When will your FedEx Ground shipment be scheduled for delivery? </div>

        <div class="lav-ground__list">
          <div class="lav-ground__item">1 Day</div>
          <div class="lav-ground__item">2 Days</div>
          <div class="lav-ground__item">3 Days</div>
          <div class="lav-ground__item">4 Days</div>
          <div class="lav-ground__item">5 Days</div>
          <div class="lav-ground__item">6 Days</div>
          <div class="lav-ground__item">7+ Days</div>
        </div>
      </div>

      <div class='lav-shipping__faq'>
        <div class="lav-faq__title">Frequently Asked Questions (F.A.Q)</div>

        <div class="lav-faq__list">
          <div class="lav-faq__item active">
            <div class="lav-faq__question">How are shipping charges calculated?</div>
            <div class="lav-faq__answer">Shipping charges are based on dimensions, weight, freight class, and destination zip code. Our system finds the lowest rates by comparing multiple freight carriers, including our volume discounts.</div>
          </div>

          <div class="lav-faq__item">
            <div class="lav-faq__question">Is there an option for free shipping?</div>
            <div class="lav-faq__answer">Yes, we offer free freight on select items, which is applicable only within the 48 continental states and includes basic delivery charges.</div>
          </div>

          <div class="lav-faq__item">
            <div class="lav-faq__question">What does standard delivery include?</div>
            <div class="lav-faq__answer">Standard shipments are curbside deliveries, meaning the driver will bring the equipment to the nearest entrance of your property. Liftgate services for lowering items from the truck are available at an additional cost.</div>
          </div>

          <div class="lav-faq__item">
            <div class="lav-faq__question">What are the options and conditions for expedited shipping?</div>
            <div class="lav-faq__answer">We offer 2nd Day AM Delivery and Priority Overnight Delivery. Orders must be placed before 1PM EST from Monday to Friday for timely delivery. The delivery times and conditions vary based on the destination and type of service.</div>
          </div>

          <div class="lav-faq__item">
            <div class="lav-faq__question">Can I pick up my order locally?</div>
            <div class="lav-faq__answer">Local pickup is available near our distribution centers. We'll notify you when your order is ready. Pickup times are between 9:00 am - 5:00 pm, Monday to Friday.</div>
          </div>

          <div class="lav-faq__item">
            <div class="lav-faq__question">Are there any special considerations for residential customers?</div>
            <div class="lav-faq__answer">Yes, additional charges apply for liftgate service and deliveries to residential or limited access areas. It's important to correctly identify your shipping address during checkout. Also, note that installing commercial equipment in homes may void warranties and not meet residential expectations.</div>
          </div>

          <div class="lav-faq__item">
            <div class="lav-faq__question">What should I do upon receiving my order?</div>
            <div class="lav-faq__answer">Inspect your order upon delivery. Note any damages or missing items on the delivery receipt and report them to our Customer Service immediately at Toll-Free 1-855-838-1010.</div>
          </div>

          <div class="lav-faq__item">
            <div class="lav-faq__question">What are the policies on refused shipments and cancelled orders?</div>
            <div class="lav-faq__answer">You will be responsible for roundtrip freight charges and restocking fees for refused shipments, except in cases of damage or our shipping error. Cancellation fees also apply once an order has shipped.</div>
          </div>
        </div>
      </div>

      <div class="lav-shipping__text">
        For more details on our shipping and delivery policies, including information on international shipping, processing times, and damage policies, please <a href='https://www.restaurantsupply.com/terms-and-conditions/shipping-and-delivery'>click here to read the full text</a>. Our goal is to ensure that your experience with us is efficient, clear, and satisfactory.
      </div>

      <div class='lav-shipping__text lav-shipping__text_bold'>
        If you have any further questions or need assistance, feel free to contact our Customer Service Team at: Toll Free 1-855-838-1010
      </div>
    </div>
  `;

  new Modal('lav-shipping', modalHtml);

  for (const tab of $$('.lav-tabs__item')) {
    tab.addEventListener('click', function () {
      if (this.classList.contains('active')) return;

      $('.lav-tabs__item.active').classList.remove('active');
      this.classList.add('active');

      const tabName = this.dataset.tab;
      $('.lav-tabs__pane.active').classList.remove('active');
      $(`.lav-tabs__pane[data-tab="${tabName}"]`).classList.add('active');
    });
  }

  for (const item of $$('.lav-faq__item')) {
    item.addEventListener('click', function () {
      if (this.classList.contains('active')) {
        this.classList.remove('active');
      } else {
        $('.lav-faq__item.active')?.classList.remove('active');
        this.classList.add('active');
      }
    });
  }

  // Modal.open('.lav-shipping');
}

// *** Utils *** //

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
        setTimeout(() => {
          if (isElementInViewport(target)) {
            cb();
          }
        }, 3000);
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
function $$(selector, context = document, toSimpleArray = false) {
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
  document.head.appendChild(sliderScript);
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
      clarity(...config.clarity);
    }
  );
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
    `,
  };

  return svgObj[name];
}
