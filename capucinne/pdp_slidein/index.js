console.log('initExp');

(function () {
  /********* exp **********/
  const exp = {
    dir: 'https://flopsi69.github.io/crs/capucinne/pdp_slidein',
    observer: false,
    clarity: {
      enable: true,
      params: ['set', 'improve_upgrade_popup_v2', 'variant_1'],
    },
    debug: true,
  };

  // Observer
  if (exp.observer) {
    initObserver((el) => {
      console.log(el);
    });
  }

  /*** STYLES / Start ***/
  const styles = `
    .product-block--sales-point, .grid--product-images--partial .full-bleed--mobile.small--hide {
      display: none!important;
    }
    .product-single__title, .product-block--header {
      margin-bottom: 0;
    }
    .product-block--price {
      margin-bottom: 0;
    }

    .lav-btn {
      background: #1C1D1D;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 48px;
      color: #fff;
      text-align: center;
      font-size: 12px;
      font-weight: 700;
      line-height: 12px;
      letter-spacing: 0.8px;
      text-transform: uppercase;
      transition: all 0.3s ease;
      border: 1px solid #1C1D1D;
    }
    .lav-btn:hover {
      color: #1C1D1D;
      background-color: #fff;
    }
    .lav-btn img {
      transition: 0.35s;
    }
    .lav-btn:hover img {
      filter: invert(106%) sepia(5%) saturate(360%) hue-rotate(131deg) brightness(92%) contrast(88%);
    }
    .lav-btn img {
      margin-right: 8px;
    }

    .lav-sticky {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 99999;
      background-color: #fff;
      border-top: 1px solid #E8E8E1;
      padding: 0 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .lav-sticky__info {
      display: flex;
      align-items: center;
    }
    .lav-sticky__img {
      margin-right: 12px;
      line-height: 0;
      margin-top: -1px;
    }
    .lav-sticky__img img {
      max-width: 100px;
      max-height: 100px;
    }
    .lav-sticky__title {
      color: #1C1D1D;
      font-size: 14px;
      font-weight: 600;
      line-height: 1;
    }
    .lav-sticky__price {
      position: relative;
      display: flex;
      padding-left: 20px;
      margin-left: 20px;
    }
    .lav-sticky__price:before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 1px;
      height: 60px;
      background-color: #E8E8E1;
      event-pointer: none;
    }
    .lav-sticky__price-old {
      color: #565656;
      font-size: 22px;
      letter-spacing: -0.308px;
      text-decoration: line-through;
    }
    .lav-sticky__price-new {
      color: #1C1D1D;
      font-size: 22px;
      font-weight: 600;
      letter-spacing: -0.308px;
      margin: 0 8px;
    }
    .lav-sticky__price-discount {
      display: flex;
      align-items: center;
      color: #C1856F;
      font-size: 14px;
      font-weight: 600;
      line-height: 1;
    }
    .lav-sticky__price-discount img {
      margin-right: 4px;
      flex-shrink: 0;0
    }
    .lav-sticky__btn {
      max-width: 280px;
      width: 100%;
    }

    .lav-reviews {
      margin-top: 8px;
      margin-bottom: 20px;
    }
    .lav-reviews > div {
      padding-top: 0!important;
      display: flex;
      align-items: center;
    }
    .lav-reviews > div a {
      line-height: 0;
      margin-right: 8px;
    }
    .lav-reviews > div a svg {
      width: 16px;
    }
    .lav-reviews > div span {
      color: #000;
      font-size: 14px;
      border-bottom: 1px solid #000;
      line-height: 1;
      transiton: 0.35s;
      cursor: pointer;
      padding-top: 1px;
      transition: 0.35s;
    }
    .lav-reviews:hover > div span {
      opacity: 0.5;
    }
    [data-product-price] {
      display: flex;
    }
    .lav-discount {
      display: flex;
      align-items: center;
      color: #C1856F;
      font-size: 16px;
      line-height: 1;
      margin-left: 10px;
      cursor: pointer;
      transition: 0.35s;
    }
    .lav-discount:hover {
      opacity: 0.6;
    }
    .lav-discount__caption {
      font-weight: 600;
      border-bottom: 1px solid #C1856F;
      margin: 0 4px;
    }

    .lav-point__wrap {
      position: relative;
      margin-bottom: -2px;
      padding: 16px;
      margin-top: 20px;
      background-color: #F6F5F5;
      color: #565656;
      font-size: 14px;
      line-height: 25px;
    }
    .lav-point {
      display: flex;
      align-items: center;
    }
    .lav-point span {
      font-weight: 600;
      color: #1C1D1D;
    }
    .lav-point:last-child {
      text-transform: uppercase;
      font-weight: 600;
      cursor: pointer;
      transition: all .3s ease;
      color: #1C1D1D;
    }
    .lav-point:last-child:hover {
      opacity: 0.7;
    }
    .lav-point__icon {
      margin-right: 8px;
    }
    .lav-point + .lav-point {
      margin-top: 8px;
    }

    .lav-options {
      margin-bottom: 0;
    }
    .lav-earn {
      display: flex;
      align-items: center;
      margin-top: 6px;
      padding: 12px;
      background-color: #F6ECEA;
      margin-bottom: 18px;
    }
    .lav-earn__img {
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 12px;
      line-height: 0;
    }
    .lav-earn__img img {
      max-width: 52px;
    }
    .lav-earn__caption {
      color: #565656;
      font-size: 12px;
      line-height: 18px;
    }
    .lav-earn__caption span {
      font-weight: 600;
      color: #1C1D1D;
    }

    .product-single__form .add-to-cart {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #1C1D1D;
      min-height: 48px;
      color: #fff;
      text-align: center;
      font-size: 12px;
      font-weight: 700;
      line-height: 12px;
      letter-spacing: 0.8px;
      text-transform: uppercase;
    }
    .product-single__form .add-to-cart img {
      margin-right: 8px;
    }

    .lav-benefits {
      display: flex;
      justify-content: center;
      background-color: #F6F5F5;
      padding: 16px;
      line-height: 1;
      text-transform: capitalize;
      color: #1C1D1D;
      margin-top: 16px;
    }
    .lav-benefits img {
      margin-right: 8px;
      flex-shrink: 0;
    }
    .lav-benefits__item {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .lav-benefits__item + .lav-benefits__item {
      border-left: 1px solid #fff;
      margin-left: 16px;
      padding-left: 16px;
    }
    .lav-benefits__slide {
      padding: 12px;
      font-size: 12px;
      color: #565656;
      margin-top: 0;
    }
    .lav-benefits__slide img {
      width: 20px;
      margin-right: 4px;
    }
    .lav-benefits__slide .lav-benefits__item + .lav-benefits__item {
      margin-left: 8px;
      padding-left: 8px;
    }
    .drawer__footer {
      padding-top: 16px;
      padding-bottom: 12px;
    }
    [for="CartTermsDrawer"] {
      color: #565656!important;
      font-size: 12px!important;
      line-height: 18px!important;
      font-weight: 400!important;
    }
    [for="CartTermsDrawer"] a {
      text-decoration: underline!important;
      color: #1C1D1D!important;
    }
    #CartTermsDrawer {
      margin-right: 5px;
      accent-color: #1C1D1D;
    }

    .lav-extend {
      margin-top: 12px;
      background-color: #F6F5F5;
      padding: 16px;
      color: #1C1D1D;
    }
    .lav-extend__head {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .lav-extend__covered {
      display: flex;
      align-items: center;
      color: #000;
      font-size: 14px;
      cursor: pointer;
      transition: 0.35s;
    }
    .lav-extend__covered:hover {
      opacity: 0.5;
    }
    .lav-extend__caption {
      color: #1C1D1D;
      font-size: 14px;
    }
    .lav-extend__covered span {
      border-bottom: 1px solid #000;
      padding-top: 1px;
      line-height: 1;
    }
    .lav-extend__covered img {
      margin-left: 3px;
    }
    .lav-extend__body {
      margin-top: 12px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 12px;
    }
    .lav-extend__item {
      border: 2px solid #D4A298;
      background: #FFF;
      padding: 8px;
      text-align: center;
      cursor: pointer;
      transition: 0.35s;
    }
    .lav-extend__item:hover {
    }
    .lav-extend__item-caption {
      color: #1C1D1D;
      font-size: 12px;
      line-height: 18px;
      text-transform: capitalize;
    }
    .lav-extend__item-price {
      margin-top: 4px;
      color: #1C1D1D;
      font-size: 14px;
      font-weight: 600;
      line-height: 21px;
      letter-spacing: -0.308px;
    }

    .lav-shipping__caption {
      color: #565656;
      font-size: 12px;
      line-height: 18px;
      margin-bottom: 0!important;
    }
    .lav-shipping__date {
      margin-top: 6px;
      color: #1C1D1D;
      font-size: 18px;
      font-weight: 600;
      line-height: 19px;
    }
    .lav-shipping__rush {
      margin: 16px 0;
      padding: 12px;
      background-color: #F6F5F5;
    }
    .lav-shipping__rush-head {
      display: flex;
      align-items: center;
      font-size: 12px;
      font-weight: 600;
      line-height: 19px;
    }
    .lav-shipping__rush-head img {
      margin-right: 6px;
      flex-shrink: 0;
    }
    .lav-shipping__rush-body {
      color: #565656;
      font-size: 11px;
      line-height: 18px;
      margin-top: 4px;
    }
    .lav-timeline {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }
    .lav-timeline:before {
      content: '';
      position: absolute;
      width: 100%;
      top: 14px;
      left: 0;
      right: 0;
      background-color: #E8E8E1;
      height: 1px;
    }
    .lav-timeline__item {
      position: relative;
    }
    .lav-timeline__item:first-child {
      text-align: left;
    }
    .lav-timeline__item:nth-child(2) {
      text-align: center;
    }
    .lav-timeline__item:last-child {
      text-align: right;
    }
    .lav-timeline__item-icon {
      line-height: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100px;
      background-color: #EEDAD6;
      width: 28px;
      height: 28px;
    }
    .lav-timeline__item:nth-child(2) .lav-timeline__item-icon {
      margin-left: auto;
      margin-right: auto;
    }
    .lav-timeline__item:nth-child(3) .lav-timeline__item-icon {
      margin-left: auto;
    }
    .lav-timeline__item-date {
      color:  #1C1D1D;
      font-size: 12px;
      font-weight: 600;
      line-height: 19px;
      margin-top: 8px;
    }
    .lav-timeline__item-caption {
      margin-top: 4px;
      color: #565656;
      font-size: 12px;
      line-height: 18px;
    }

    .drawer__header {
      height: auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 15px 0;
    }
    .drawer__close, .drawer__title {
      display: block;
      margin: 0;
    }
    .cart__item-name {
      color: #1C1D1D;
      font-size: 15px;
      font-weight: 600;
      line-height: 120%;
    }
    .drawer__close {
      width: auto;
    }

    .lav-gift {
      border-top: 1px solid #E8E8E1;
      border-bottom: 1px solid #E8E8E1!important;
      background: #F6F5F5;
      padding: 17px 30px;
      margin: 0 -30px 16px!important;
      align-items: center;
    }
    .lav-gift .cart__item-name {
      color: #1C1D1D;
      font-size: 13px;
      font-weight: 600;
      line-height: 120%;
      margin: 0;
    }
    .lav-gift .cart__item--variants {
      margin: 8px 0;
    }
    .lav-gift .cart__item--variants + .cart__item--variants {
      display: none;
    }
    .lav-gift .cart__item--variants div {
      color: #565656;
      font-size: 12px;
      line-height: 18px;
      text-transform: capitalize;
    }
    .lav-gift .cart__item-details {
      display: block;
    }
    .lav-gift .cart__item--variants span {
      font-weight: 400;
    }
    .lav-gift .cart__item-sub br {
      display: none;
    }
    .lav-gift .cart__price {
      color: #1C1D1D;
      font-size: 14px;
      font-weight: 600;
      line-height: 21px;
      letter-spacing: -0.308px;
    }

    .cart__checkout-wrapper .lav-btn {
      background: #1C1D1D;
    }
    .cart__checkout-wrapper .lav-btn:hover {
      background: #fff!important;
      animation: none!important;
      transition-delay: 0s!important;
    }
    .cart__checkout-wrapper .lav-btn__price:after {
      display: none;
    }
    .cart__checkout-wrapper .lav-btn__price {
      display: flex;
      align-items: center;
      line-height: 0;
      text-align: center;
      font-size: 12px;
      font-weight: 700;
      line-height: 12px;
      letter-spacing: 0.8px;
      text-transform: uppercase;
    }
    .cart__checkout-wrapper .lav-btn__price img {
      margin-right: 8px;
    }
    .cart__checkout-wrapper .lav-btn__checkout {
      position: relative;
      padding-left: 28px;
      margin-left: 24px;
      text-align: center;
      font-size: 12px;
      font-weight: 700;
      line-height: 1;
      letter-spacing: 0.8px;
      text-transform: uppercase;
    }
    .cart__checkout-wrapper .lav-btn__checkout:before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      border-radius: 100px;
      background-color: #fff;
      width: 4px;
      height: 4px;
      transition: 0.2s;
    }
    .cart__terms {
      margin-bottom: 12px!important;
    }
    .cart__checkout-wrapper {
      margin-top: 0!important;
    }

    .cart__checkout-wrapper .lav-btn:hover .lav-btn__checkout:before {
      background-color: #1C1D1D;
    }

    .lav-notes {
      display: flex;
      align-items: center;
      line-height: 1;
      cursor: pointer;
      transition: 0.35s;
      color: #000;
      font-size: 12px;
    }
    .lav-notes span {
      text-decoration: underline;
    }
    .lav-notes img {
      margin-right: 4px;
    }
    .lav-notes:hover {
      opacity: 0.6;
    }
    [for="CartNoteDrawer"] {
      color: #000!important;
      font-size: 12px!important;
      line-height: 22px!important;
      font-weight: 400!important;
      margin: 0!important;
    }
    .input-full.cart-notes {
      margin: 4px 0 0;
      min-height: 60px;
      border: 1px solid #E8E8E1;
      font-size: 12px;
      line-height: 1.3;
    }
    .lav-summary {
      margin-top: 16px;
      padding-top: 8px;
      padding-bottom: 16px;
      border-top: 1px solid #E8E8E1;
      color: #565656;
      font-size: 12px;
      line-height: 18px;
    }
    .lav-summary__item {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .lav-summary__item:last-child {
      color: #1C1D1D;
      font-size: 14px;
      font-weight: 600;
      line-height: 21px;
      letter-spacing: -0.308px;
    }
    .lav-summary__item + .lav-summary__item {
      margin-top: 8px;
    }
    .lav-summary__value {
      margin-left: 12px;
    }
    .lav-summary {}
  `;

  const stylesEl = document.createElement('style');
  stylesEl.innerHTML = styles;
  waitFor(
    () => document.head,
    () => {
      document.head.appendChild(stylesEl);
    },
    100
  );
  /*** STYLES / End ***/

  /********* Custom Code **********/
  init();
  function init() {
    console.log('init');

    $el('[href="#reviews"]')
      .closest('.product-block')
      .classList.add('lav-reviews');

    $el('.lav-reviews > div span').innerText =
      'Over ' + $el('.lav-reviews > div span').innerText.match(/\d+\s\w+/)[0];

    $el('.lav-reviews > div span').addEventListener('click', () => {
      $el('.lav-reviews > div a').click();
    });

    $el('[data-product-blocks]').insertAdjacentElement(
      'afterbegin',
      $el('[href="#reviews"]').closest('.product-block')
    );

    const getDiscount = `
      <div class='lav-discount'>
        <div class='lav-discount__icon'>
          <img src='${exp.dir}/img/discount-icon.svg' />
        </div>
        <div class='lav-discount__caption'>Get Your 10% Off</div>
        <div class='lav-discount__arrow'>
          <img src='${exp.dir}/img/discount-arrow.svg' />
        </div>
      </div>
    `;

    $el('[data-product-price]').insertAdjacentHTML('beforeend', getDiscount);

    const points = `
      <div class='lav-point__wrap'>
        <div class='lav-point'>
          <img class='lav-point__icon' src='${exp.dir}/img/point1.svg' />
          <div class='lav-points__caption'><span>14 days Free</span> Returns & Exchange </div>
        </div>

        <div class='lav-point'>
          <img class='lav-point__icon' src='${exp.dir}/img/point2.svg' />
          <div class='lav-points__caption'><span>Free</span> worldwide insured <span>shipping</span></div>
        </div>

        <div class='lav-point'>
          <img class='lav-point__icon' src='${exp.dir}/img/point3.svg' />
          <div class='lav-points__caption'>See it live - schedule a meeting</div>
        </div>
      </div>
    `;

    $el('.product-block--sales-point').insertAdjacentHTML(
      'beforebegin',
      points
    );

    $el('.lav-point:last-child').addEventListener('click', () => {
      $el('.product-block--sales-point span[onclick]').click();
    });

    const earn = `
      <div class='lav-earn'>
        <div class='lav-earn__img'>
          <img src='${exp.dir}/img/earn.png' />
        </div>
        <div class='lav-earn__caption'><span>A free pair</span> of Moon Shaped Capucinne earrings is included in your order of <span>$1500 or more</span>, they can be find in your cart</div>
      </div>
    `;

    $el('.one-whole').closest('.product-block').classList.add('lav-options');

    $el('.lav-options').insertAdjacentHTML('afterend', earn);

    $el('.product-single__form .add-to-cart').insertAdjacentHTML(
      'afterbegin',
      `<img src='${exp.dir}/img/bag.svg' />`
    );

    const benefits = `
      <div class='lav-benefits'>
        <div class='lav-benefits__item'>
          <img src='${exp.dir}/img/delivery.svg' />
          Free insured shipping
        </div>

        <div class='lav-benefits__item'>
          <img src='${exp.dir}/img/shield.svg' />
          14 days Free Returns & Exchange 
        </div>
      </div>
    `;

    $el('.product-single__form .add-to-cart').insertAdjacentHTML(
      'afterend',
      benefits
    );

    const extend = `
      <div class='lav-extend'>
        <div class='lav-extend__head'>
          <div class='lav-extend__caption'>
            Add accident protection offered by
            <img src='${exp.dir}/img/extend.svg' />
          </div>
          <div class='lav-extend__covered'>
            <span>What is covered?</span>
            <img src='${exp.dir}/img/black-arrow.svg' />
          </div>
        </div>
        <div class='lav-extend__body'>
          <div class='lav-extend__item'>
            <div class='lav-extend__item-caption'>2 Years</div>
            <div class='lav-extend__item-price'>$43.99</div>
          </div>

          <div class='lav-extend__item'>
            <div class='lav-extend__item-caption'>3 Years</div>
            <div class='lav-extend__item-price'>$54.99</div>
          </div>

          <div class='lav-extend__item'>
            <div class='lav-extend__item-caption'>5 Years</div>
            <div class='lav-extend__item-price'>$69.99</div>
          </div>
        </div>
      </div>
    `;

    $el(
      '.product-single__form .add-to-cart + .lav-benefits'
    ).insertAdjacentHTML('afterend', extend);

    handleShipping(benefits);
    handleSlideIn(benefits);
    // addSticky();
  }

  function handleShipping(benefits) {
    const el = $el('.product-block.product-block--tab + div + div');

    el.querySelector('.label').innerHTML = el
      .querySelector('.label')
      .innerHTML.replace(
        'Shipping and Production',
        'Shipping, returns and exechnges'
      );

    el.querySelector('.collapsible-content__inner').classList.remove('rte');
    el.querySelector('.collapsible-content__inner').innerHTML = `
        <div class='lav-shipping__caption'>Estimated arrival</div>
        <div class='lav-shipping__date'>20 Jul-16 Aug</div>

        <div class='lav-shipping__rush'>
          <div class='lav-shipping__rush-head'>
            <img src='${exp.dir}/img/rush.svg' />
            Rush order is activated!
          </div>
          <div class='lav-shipping__rush-body'>
            Your product will arrive much faster.
          </div>
        </div>

        <div class='lav-timeline'>
          <div class='lav-timeline__item'>
            <div class='lav-timeline__item-icon'>
              <img src='${exp.dir}/img/shipping1.svg' />
            </div>
            <div class='lav-timeline__item-date'>15 Jun</div>
            <div class='lav-timeline__item-caption'>Order placed</div>
          </div>

          <div class='lav-timeline__item'>
            <div class='lav-timeline__item-icon'>
              <img src='${exp.dir}/img/shipping2.svg' />
            </div>
            <div class='lav-timeline__item-date'>19 Jul-02 Aug</div>
            <div class='lav-timeline__item-caption'>Order dispatches</div>
          </div>

          <div class='lav-timeline__item'>
            <div class='lav-timeline__item-icon'>
              <img src='${exp.dir}/img/shipping3.svg' />
            </div>
            <div class='lav-timeline__item-date'>20 Jul-16 Aug</div>
            <div class='lav-timeline__item-caption'>Delivered!</div>
          </div>
        </div>

        ${benefits}
    `;
  }

  function addSticky() {
    const el = `
      <div class='lav-sticky'>
        <div class='lav-sticky__info'>
          <div class='lav-sticky__img'>
            <img src='${item.ImageURL}' />
          </div>
          <div class='lav-sticky__title'>
            ${$el('.product-single__title').innerText}
          </div>
          <div class='lav-sticky__price'>
            <div class='lav-sticky__price-old'>$2,110.00</div>
            <div class='lav-sticky__price-new'>$1,899.00</div>
            <div class='lav-sticky__price-discount'>
              <img src='${exp.dir}/img/discount-apply.svg' />
              You save 10%
            </div>
          </div>
        </div>

        <button class='lav-sticky__btn lav-btn'>
          <img src='${exp.dir}/img/bag.svg' />
          <span>Add to cart</span>
        </button>
      </div>
    `;

    $el('body').insertAdjacentHTML('beforeend', el);
  }

  function handleSlideIn(benefits) {
    const el = $el('#CartDrawer');

    const summary = `
      <div class='lav-notes'>
        <img src='${exp.dir}/img/notes.svg' />
        <span class='lav-notes__caption'>Leave order notes</span>
      </div>

      <div class='lav-summary'>
        <div class='lav-summary__item'>
          <div class='lav-summary__caption'>Maria Kite Moss Agate...</div>
          <div class='lav-summary__value'>$1,899.00</div>
        </div>

        <div class='lav-summary__item'>
          <div class='lav-summary__caption'>Maria Kite Moss Agate...</div>
          <div class='lav-summary__value'>$1,899.00</div>
        </div>

        <div class='lav-summary__item'>
          <div class='lav-summary__caption'>Subtotal</div>
          <div class='lav-summary__value'>$1,899.00</div>
        </div>
      </div>
    `;

    $el('[for="CartNoteDrawer"]', el).style.display = 'none';
    $el('[for="CartNoteDrawer"]', el).innerText = 'Order notes:';
    $el('.input-full.cart-notes', el).style.display = 'none';

    $el('.cart-notes', el).insertAdjacentHTML('afterend', summary);
    $el('.lav-notes', el).addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      $el('.lav-notes', el).remove();
      $el('[for="CartNoteDrawer"]', el).style.display = 'block';
      $el('.input-full.cart-notes', el).style.display = 'block';
    });

    $el('.drawer__inner', el).insertAdjacentHTML('beforeend', benefits);
    $el('.lav-benefits', el).classList.add('lav-benefits__slide');
    $el('[for="CartTermsDrawer"] a', el).innerText = 'Terms and Conditions';

    $el('.cart__checkout-wrapper button', el).innerHTML = `
      <span class='lav-btn__price'>
        <img src='${exp.dir}/img/bag.svg' />
        <span>$1,899.00</span>
      </span>
      <span class='lav-btn__checkout'>CHECK OUT</span>
    `;
    $el('.cart__checkout-wrapper button', el).classList.add('lav-btn');

    findGift(el);
  }

  function findGift(el) {
    let gift = Array.from($$el('.cart__item', el)).find((pr) => {
      return pr.querySelector('.cart__item-name').innerText.trim() == 'Gift';
    });

    if (gift) {
      gift.classList.add('lav-gift');
      gift.querySelector('.cart__image').innerHTML = `
        <img src='${exp.dir}/img/gift.png' />
      `;
      gift.querySelector('.cart__item-name').innerText = 'Free Gift';
      gift.querySelector('.cart__price').innerText = '$0.00';
    }
  }

  // *** Utils *** //
  // Waiting for loading by condition
  function waitFor(condition, cb, ms = 1000) {
    if (condition()) {
      if (typeof cb == 'function') cb();
      return;
    }

    let interval = setInterval(function () {
      if (condition()) {
        clearInterval(interval);
        if (typeof cb == 'function') cb();
      }
    }, ms);
  }

  // Alalytic 3
  function gaEvent(action, label) {
    if (!label) {
      label = '';
    }
    try {
      var objData = {
        event: 'gaEv',
        eventCategory: 'Experiment — also like',
        eventAction: action,
        eventLabel: label,
        eventValue: '',
      };
      console.log('EventFire:', objData);
      if (!exp.debug) {
        dataLayer.push(objData);
      }
    } catch (e) {
      console.log('Event Error:', e);
    }
  }

  // Alalytic 4
  function gaEvent(name = '', desc = '', type = '', loc = '') {
    try {
      var objData = {
        event: 'event-to-ga4',
        event_name: name,
        event_desc: desc,
        event_type: type,
        event_loc: loc,
      };
      console.log('eventFire', objData);
      if (!settings.debug) {
        dataLayer.push(objData);
      }
    } catch (e) {
      console.log('Event Error:', e);
    }
  }
  // Mutation Observer
  function initObserver(cb) {
    let observer = new MutationObserver((mutations) => {
      for (let mutation of mutations) {
        for (let node of mutation.addedNodes) {
          if (!(node instanceof HTMLElement)) continue;

          cb(node);
        }
      }
    });

    waitFor(
      () => document.body,
      () => {
        observer.observe(document.body, { childList: true, subtree: true });
      },
      100
    );
  }

  //Clarity
  if (!exp.debug && exp.clarity.enable) {
    waitFor(
      () => typeof clarity == 'function',
      () => {
        clarity(...exp.clarity.params);
      }
    );
  }

  function $el(selector, context = document) {
    return context.querySelector(selector);
  }

  function $$el(selector, context = document) {
    return context.querySelectorAll(selector);
  }
})();
