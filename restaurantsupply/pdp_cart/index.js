console.debug('*** Experiment started ***');

// Config for Experiment
const config = {
  // dir: 'http://127.0.0.1:5500/restaurantsupply/pdp_cart',
  dir: 'https://flopsi69.github.io/crs/restaurantsupply/pdp_cart',
  clarity: ['set', '', 'variant_1'],
  debug: true,
};

// const orig = console.log;
// console.log = function (...args) {
//   orig.apply(console, ['Debug:', ...args]);
// };

// Styles for Experiment
const stylesPdp = /* css */ `
  [class^='lav-'] {
    box-sizing: border-box;
  }
  .lav-btn {
    outline: none;
    transition: 0.3s;
    border: none;
    height: 36px;
    color: #fff;
    text-align: center;
    font-weight: 700;
    line-height: 20px;
    width: 100%;
    font-size: 14px;
    border-radius: 5px;
    background: linear-gradient(180deg, #009CC7 0%, #006396 100%);
    text-transform: uppercase;
  }

  .lav-cart__wrap {
    margin: -12px auto 12px;
    max-width: 1440px;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    transition: 0.3s;
  }
  .lav-cart__inner {
    display: flex;
    border-radius: 10px;
    border: 1px solid #EBECED;
    background: #fff;
    transition: 0.3s;
  }
  .lav-cart__wrap_loader .lav-cart__inner {
    opacity: 0.5;
  }

  .lav-cart {
    flex-grow: 1;
    min-width: 0;
  }
  .lav-cart .owl-item  + .owl-item .lav-product{
    border-left: 1px solid #EBECED;
  }
  .lav-cart__products {
    display: flex;
  }
  .lav-product {
    display: flex;
    gap: 15px;
    padding: 20px;
  }

  .lav-product__image {
    line-height: 0;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90px;
    height: 90px;
  }
  .lav-product__info {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    line-height: 22px;
    gap: 4px;
  }
  .lav-product__image img {
    max-width: 100%;
    max-height: 100%;
  }
  .lav-product__added {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #4F9E34;;
    font-weight: 600;
  }
  .lav-product__added svg {
    flex-shrink: 0;
  }
  .lav-product .lav-product__title {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #536D80;
    font-weight: 600;
  }
  .lav-product__quantity {
    color: #536D80;
    font-size: 12px;
    line-height: 16px;
    margin-top: auto;
  }
  .lav-product__quantity span {
    font-weight: 600;
  }

  .lav-summary {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 14px;
    padding: 20px 2vw;
    flex-shrink: 0;
    border-left: 1px solid #EBECED;
  }
  .lav-total {
    color: #536D80;
    font-size: 18px;
    text-align: center;
    line-height: 26px;
    font-weight: 700;
    white-space: nowrap;
  }
  .lav-total span {
    margin-left: 7px;
    color: #B51F23;
    font-size: 20px;
    font-weight: 600;
    line-height: 22px;
  }
  .lav-summary__btn.lav-btn {
    box-shadow: 0px 0.5px 1px 0px rgba(0, 0, 0, 0.24);
  }
  
  .lav-rating.p-w-r {
    position: relative;
    top: 1px;
    margin-right: 20px;
    display: inline-flex!important;
    align-items: center;
    gap: 9px;
  }
  .lav-rating .pr-rating-stars  {
    line-height: 0;
  }
  .lav-rating .pr-rating-stars > div {
    width: 14px;
    height: 14px;
    margin-right: 1px;
  }
  .lav-rating span {
    color: #536D80;
    font-family: "Open Sans";
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    text-decoration: underline;
    cursor: pointer;
    transition: 0.2s;
  }
  @media(hover:hover) {
    .lav-rating span:hover {
      opacity: 0.8;
      text-decoration: none
    }
  }

  .lav-recommend {
    position: absolute;
    background: #fff;
    border-radius: 10px;
    padding: 5px;
    right: -5px;
    top: -5px;
    display: flex;
    align-items: center;
    gap: 7px;
    z-index: 1;
  }
  .lav-recommend svg {
    width: 18px;
    height: 18px;
    margin-right: -2px;
  }
  .lav-recommend__value {
    color: #536d80;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.2;
  }
  .lav-recommend__caption {
    font-size: 11px;
    color: #536d80;
    line-height: 1.4;
  }

  .lav-quick__wrap {
    margin-bottom: 16px;
    overflow-x: auto;
  }
  .lav-quick {
    border-radius: 8px;
    background: #FFF;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.08);
    display: flex;
    padding: 0 5px;
  }
  .lav-quick__item {
    position: relative;
    flex-shrink: 0;
    color: #536D80;
    font-size: 18px;
    font-weight: 600;
    line-height: 26px;
    transition: 0.2s;
    cursor: pointer;
    padding: 20px 15px;
  }
  .lav-quick__item:before {
    content: '';
    position: absolute;
    left: 15px;
    right: 15px;
    bottom: 0;
    height: 2px;
    background: transparent;
    transition: 0.2s;
  }
  @media(hover:hover) {
    .lav-quick__item:hover {
      color: #006BB4;
    }
    .lav-quick__item:hover:before {
      background: #006BB4;
    }
  }

  .product-slider.related .product-slider-title {
    display: flex;
    align-items: center;
    gap: 7px;
  }

  .lav-sticky {
    position: fixed;
    display: none;
    bottom: -74px;
    left: 0;
    right: 0;
    padding: 12px 16px;
    border-radius: 8px 8px 0px 0px;
    background: #fff;
    z-index: 99;
    box-shadow: 0px -2px 16px 0px rgba(0, 0, 0, 0.16);
    transition: 0.35s;
  }
  .lav-sticky.active {
    bottom: 0;
  }
  .lav-sticky .lav-sticky__sub-btn {
    border-radius: 4px 0px 0px 4px;
    border: 1px solid #EBECED;
    background: #fff;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .lav-sticky .lav-sticky__btn {
    height: 50px;
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    border-radius: 0
  }
  .lav-sticky .lav-sticky__btn.disabled {
    opacity: .5;
    cursor: default;
    pointer-events: none;
  }
  .lav-sticky .lav-sticky__amount {
    border-radius: 8px 0px 0px 8px;
    color: #536D80;
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    outline: none;
  }
  .lav-sticky .lav-sticky__amount:focus {
    box-shadow: none!important;
  }
  .lav-sticky__favorite {
    border-radius: 0px 8px 8px 0px;
    cursor: pointer;
    transition: 0.2s;
  }
  @media(hover:hover) {
    .lav-sticky__favorite:hover {
      background: linear-gradient(0deg,rgba(0,0,0,.07) 0%,rgba(0,0,0,.07) 100%),#fff;
    }
  }
  @media(max-width: 1250px) {
    .lav-summary {
      padding: 15px;
      gap: 8px;
    }
  }
  @media(max-width: 1100px) {
    .lav-quick__item {
      font-size: 14px;
      padding: 14px 8px;
      line-height: 22px;
    }
    .lav-quick {
      padding: 0 8px;
    }
    .lav-total span {
      margin-left: 0;
    }
  }
  @media(min-width: 768px) {
    .lav-summary {
      width: 263px;
    }
    .lav-quick__wrap {
      background: var(--Main-White, #FFF);
      box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.08);
    }
    .lav-cart .owl-nav button.owl-next {
      right: 0;
      border-radius: 0;
    }
    .lav-cart .owl-nav button.owl-prev {
      left: 0;
      border-radius: 10px 0 0 10px;
    }
    .lav-cart .owl-nav button.owl-prev, .lav-cart .owl-nav button.owl-next {
      top: 0;
      bottom: 0;
      -webkit-transform: none;
      -ms-transform: none;
      transform: none;
      width: 48px;
      height: auto;
      box-shadow: 0 2px 8px 0 rgba(0,0,0,.08);
    }
  }
  @media screen and (min-width: 1024px) {
    .lav-summary {
      width: 23.71%;
    }
  }
  @media(max-width: 880px) {
    .lav-cart__products {
      padding-right: 60px;
    }
    .lav-cart__products .owl-stage-outer {
      overflow: visible;
    }
    .lav-cart {
      overflow: hidden;
    }
  }
  @media(max-width: 768px) {
    .lav-sticky {
      display: flex;
    }
    .page-footer {
      padding-bottom: 74px;
    }
    .rp-micro-app-dummy-icon-container {
      transition: bottom 0.35s;
    }
    #richpanel_messenger_iframe {
      transition: bottom 0.35s;
    }

    .lav-rating.p-w-r {
      display: flex!important;
      margin: 12px 0;
    }

    .lav-quick__wrap {
      margin: -6px -15px 10px;
      padding: 6px 15px;
    }
    .lav-quick {
      min-width: 100%;
      width: max-content;
    }
    .lav-recommend {
      display: none;
    }

    .lav-cart__inner {
      display: block;
    }
    .lav-cart__wrap {
      margin: -24px 0 24px;
      padding: 0;
    }
    .lav-cart__inner {
      border-radius: 0;
      border: none;
      border-bottom: 1px solid #EBECED;
      background: #fff;
    }
    .lav-summary {
      padding: 13px 15px 12px;
      border-top: 1px solid #EBECED;
      gap: 16px;
    }
    .lav-total {
      text-align: left;
    }
    .lav-total span {
      margin-left: 7px;
    }
    .lav-product {
      padding: 12px;
    }
    .lav-cart .owl-nav button.owl-next {
      right: 14px;
    }
    .lav-cart .owl-nav button.owl-prev {
      left: 14px;
    }
    .lav-cart .owl-item + .owl-item .lav-product {
      border-left: none;
    }
  }
`;

const stylesCart = /* css */ `
  [class^='lav-'] {
    box-sizing: border-box;
  }
  .lav-security__caption {
    color: #818181;
    text-align: center;
    font-size: 12px;
    font-weight: 500;
    line-height: 14px;
    margin-top: 16px;
  }
  .totals-wrapper .checkout-methods-items ul[data-methods-list] li:not(.active) {
    display: block;
  }
  .totals-wrapper .checkout-methods-items .select-wrapper {
    display: none;
  }
  .totals-wrapper .cart-discount {
    top: 0;
    order: -1;
    margin-top: 16px;
  }
  .cart-container .cart-summary {
    display: flex;
    flex-flow: column;
  }
  .totals-wrapper .cart-discount .coupon {
    margin-bottom: 0;
  }
  .totals-wrapper .checkout-methods-items .pay-with-wrapper {
    margin-bottom: 0;
  }
  [data-opt="spark.checkout.button"] {
    margin-bottom: 0;
  }
  .cart-info {
    margin-top: 20px;
  }
  .cart-info.active .cart-info-title:after {
    display: none;
  }
  .cart-info .cart-info-wrapper [data-role=content] {
    display: flex;
    justify-content: space-between;
    gap: 16px;
  }
  .cart-info [data-role=content] .cart-info-item {
    flex-grow: 1;
  }
  .cart-info [data-role=content] .cart-info-item-title {
    margin-bottom: 5px;
  }

  .lav-warranty {
    grid-template-columns: 72px 1fr!important;
    padding-top: 0!important;
    padding-bottom: 0!important;
    margin-top: -10px;
    background: #fff;
  }
  .lav-warranty__inner {
    display: flex;
    gap: 16px;
    padding-top: 14px;
    padding-bottom: 13px;
    border-top: 1px solid #EBECED;
    flex-grow: 1;
  }
  .lav-warranty__title {
    color: #536D80;
    font-size: 14px;
    font-weight: 600;
    line-height: 22px;
  }
  .lav-warranty__list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px 16px;
  }
  .lav-warranty__item {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #536D80;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
  }
  
  .product-related-wrap {
    min-width: 0;
    background: #F5F5F5;
  }
  .product-related-wrap .product-slider-title {
    color: #536E80;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    border-bottom: 1px solid #EBECED;
    padding: 10px 16px 6px;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .product-related-wrap .owl-carousel-products .owl-nav button.owl-prev, .product-related-wrap .owl-carousel-products .owl-nav button.owl-next {
    box-shadow: none;
    background-color: #F5F5F5;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.08);
  }
  .product-related-wrap .owl-carousel-products .owl-nav button.owl-prev {
    display: none;
  }
  .product-related-wrap .product-slider .product-slider-content {
    border-radius: 0;
    box-shadow: none;
    background: transparent;
  }
  .product-related-wrap .product-slider {
    margin-bottom: 0;
  }
  .product-slider-list {
    min-width: 0%;
    overflow: hidden;
    padding-right: 150px;
    box-sizing: border-box;
  }
  .checkout-cart-index .cart.table-wrapper .product-related-wrap  span.price {
    color:  #B51F23;
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
  }
  .checkout-cart-index .cart.table-wrapper .product-related-wrap  .sale-unit {
    color: #595959;
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
  }
  .product-related-wrap .product-slider .product-slider-item .product-slider-item-title a {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .product-related-wrap .owl-carousel .owl-stage-outer {
    overflow: visible;
  }
  @media(max-width: 768px) {
    .lav-warranty td:first-child {
      display: none;
    }
    .lav-warranty {
      margin-top: -1px;
      grid-template-columns: 1fr!important;
    }
    .lav-warranty__item {
      font-size: 12px;
    }
    .lav-warranty__item svg {
      max-width: 20px;
      max-height: 20px;
    }
    .lav-warranty__list {
      gap: 8px;
      margin-top: 8px;
    }
    .lav-warranty__inner {
      padding-top: 13px;
      padding-bottom: 12px;
      display: block;
    }
    .product-related-wrap .owl-carousel-products .owl-nav button.owl-next {
      right: 0;
      background-color: #fff;
    }
    .product-slider-list {
      padding-right: 95px;
    }
    .cart-info .cart-info-wrapper [data-role=content] {
      flex-flow: column;
    }
    .cart-info:not(.active) .cart-info-wrapper [data-role=content] {
      display: none;
    }
    .cart-info.active .cart-info-title:after {
      display: block;
    }
    .product-slider .product-slider-item .product-slider-item-title {
      font-weight: 600;
    }
  }
`;

const stylesEl = document.createElement('style');
stylesEl.classList.add('exp-styles');

// *** Logic *** //
initExp();

async function initExp() {
  console.debug('** InitExp **');
  await waitFor(() => document.head && document.body, false, { ms: 100 });

  if (location.href.includes('/search/')) {
    handleNewTabLinks('search');
  } else if (
    location.href.includes('/everest-refrigeration') &&
    $('body.category-everest-refrigeration')
  ) {
    handleNewTabLinks('everest');
  }

  if ($('.catalog-product-view')) {
    handleNewTabLinks('pdp');
    stylesEl.innerHTML = stylesPdp;
    document.head.appendChild(stylesEl);
    initPdp();
  } else if ($('.checkout-cart-index')) {
    stylesEl.innerHTML = stylesCart;
    document.head.appendChild(stylesEl);
    initCart();
  }
}

function handleNewTabLinks(loc) {
  if (loc === 'search') {
    document.addEventListener('click', (e) => {
      const link =
        e.target.closest('.kuTrackRecentView') ||
        e.target.closest('.item-card-upper')?.querySelector('a');
      if (link && link.href) {
        console.log('fire', link.href);
        e.preventDefault();
        window.open(link.href, '_blank');
      }
    });
  }

  if (loc === 'everest') {
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a');
      if (e.target.closest('.category-product-data') && link && link.href) {
        console.log('fire', link.href);
        e.preventDefault();
        window.open(link.href, '_blank');
      }
    });
  }

  if (loc === 'pdp') {
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a');
      if (
        (e.target.closest('.product-slider-item') ||
          e.target.closest('.item-card-upper') ||
          e.target.closest('.instock-similar-products-item')) &&
        link &&
        link.href
      ) {
        console.log('fire', link.href);
        e.preventDefault();
        window.open(link.href, '_blank');
      }
    });
  }
}

function initPdp() {
  addMiniCart();
  // waitFor(
  //   '.product-reviews .pr-snippet .pr-snippet-review-count',
  handleRating();
  // );
  handleUpsell();
  handleSimilar();
  addQuickLinks();
  addSticky();

  checkQuickLinks();

  initMutation(document.body, (node) => {
    if (
      node.classList.contains('klevuWrap') &&
      node.closest('.product-interested-in')
    ) {
      $("[data-target='.product-interested-in']").style.display = 'block';
      handleSimilar();
    }

    if (
      node.classList.contains('pr-qa-display') &&
      node.closest('#pr-questiondisplay')
    ) {
      $("[data-target='#pr-questiondisplay']").style.display = 'block';
    }

    if (
      node.classList.contains('pr-review-snapshot') &&
      node.closest('#product-reviews')
    ) {
      handleRating();
    }

    if (
      node.classList.contains('product-slider') &&
      node.closest('.product-other-line')
    ) {
      // We have other products
      $("[data-target='.product-other-line']").style.display = 'block';
    }

    if (
      node.classList.contains('notify-addcart-wrapper') &&
      node.closest('.notify-addcart')
    ) {
      $('.lav-sticky__btn').innerText = 'Added';
      setTimeout(() => {
        $('.lav-sticky__btn').innerText = 'ADD TO CART';
        $('.lav-sticky__btn').classList.remove('disabled');
      }, 1000);
    }

    if (
      node.classList.contains('notify-addcart-wrapper') &&
      node.closest('.notify-addcart')
    ) {
      $('.lav-cart__wrap')?.classList.add('lav-cart__wrap_loader');

      const href = $('.name a', node).href;

      waitFor(
        () =>
          JSON.parse(localStorage['mage-cache-storage'])?.cart.items[0]
            ?.product_image,
        () => {
          console.log(
            'test2',
            href,
            JSON.parse(localStorage['mage-cache-storage'])
          );
          addMiniCart(href);
        }
      );
    }
    // console.log('added', node);
  });

  function checkQuickLinks() {
    if ($('.product-interested-in .klevuWrap')) {
      $("[data-target='.product-interested-in']").style.display = 'block';
    }

    if ($('#pr-questiondisplay .pr-qa-display')) {
      $("[data-target='#pr-questiondisplay']").style.display = 'block';
    }

    if ($('.product-other-line .product-slider')) {
      $("[data-target='.product-other-line']").style.display = 'block';
    }
  }

  function handleRating() {
    handleRecommendCaption();
    if (!$('.product-reviews .pr-snippet') || $('.lav-rating')) return;

    const countReview = parseInt(
      $('.product-reviews .pr-snippet .pr-snippet-review-count')?.innerText
    );

    if (!countReview || countReview < 3) return;

    const markup = /*html*/ `
      <div class='lav-rating p-w-r'>
        ${$('.product-reviews .pr-rating-stars')?.outerHTML}
        <span>View ${countReview} reviews</span>
      </div>
    `;

    $('.product-view-sku-wrap')?.insertAdjacentHTML('afterbegin', markup);

    $('.lav-rating span').addEventListener('click', () => {
      jQuery('html, body').animate(
        {
          scrollTop:
            jQuery('.product-reviews').offset().top -
            (jQuery(window).width() < 768 ? 10 : 60),
        },
        500
      );
    });

    function handleRecommendCaption() {
      if (
        !$('.product-reviews .pr-snippet-reco-to-friend') ||
        $('.lav-recommend')
      )
        return;

      const markup = /*html*/ `
        <div class='lav-recommend'>
          ${getSvg('greenCheck')}
          <div class='lav-recommend__value'>100%</div>
          <div class='lav-recommend__caption'>of respondents would<br/> recommend this to a friend</div>
        </div>
      `;

      $('.product.media').insertAdjacentHTML('afterbegin', markup);
    }
  }

  function addMiniCart(href) {
    if ($('.lav-cart__wrap')) {
      $('.lav-cart__wrap').remove();
    }
    const cart = JSON.parse(localStorage['mage-cache-storage'])?.cart;

    if (!cart || !cart.items.length) return false;

    // <div class='lav-product'>
    //   <div class='lav-product__image'>
    //     <img src='https://via.placeholder.com/90' alt=''>
    //   </div>
    //   <div class='lav-product__info'>
    //     <div class='lav-product__added'>
    //       ${getSvg('greenCheck')}
    //       Added to Cart!
    //     </div>

    //     <div class='lav-product__title'>
    //       Scotsman HID312A-1 Meridian Countertop 16 1/4" Wide Nugget Scotsman HID312A-1 Meridian Countertop 16 1/4" Wide Nugget
    //     </div>

    //     <div class='lav-product__quantity'>Quantity: <span>1</span></div>
    //   </div>
    // </div>
    const markup = /*html*/ `
      <div class="lav-cart__wrap">
        <div class='lav-cart__inner'>
          <div class='lav-cart'>
            <div class='lav-cart__products owl-carousel'></div>
          </div>

          <div class='lav-summary'>
            <div class='lav-total'>
              Cart Subtotal: <span>$0</span>
            </div>
            <button class='lav-btn lav-summary__btn'>View cart (${cart.summary_count})</button>
          </div>
        </div>
      </div>
    `;

    $('header.page-header').insertAdjacentHTML('afterend', markup);

    for (const item of cart.items) {
      console.log('product', item, href);
      addProduct(item, href);
    }

    if (!$('.lav-cart__products .lav-product')) {
      $('.lav-cart__wrap').remove();
      return false;
    }

    $('.lav-total span').innerHTML = cart.subtotal;
    $('.lav-total span').innerHTML = $('.lav-total span span').innerText;

    $('.lav-summary__btn').addEventListener('click', () => {
      $('.action.showcart').click();
    });

    initCarousel();

    function addProduct(
      { product_url, product_name, qty, product_image },
      href
    ) {
      if (!product_image?.src) return false;

      const product = /*html*/ `
        <div class='lav-product'>
          <a target='_blank' href='${product_url}' class='lav-product__image'>
            <img src='${product_image?.src}' alt=''>
          </a>
          <div class='lav-product__info'>
            ${
              href === product_url
                ? /*html*/ `
              <div class='lav-product__added'>
                ${getSvg('greenCheck')}
                Added to Cart!
              </div>
            `
                : ''
            }

            <a target='_blank' href='${product_url}' class='lav-product__title'>
              ${product_name}
            </a>

            <div class='lav-product__quantity'>Quantity: <span>${qty}</span></div>
          </div>
        </div>
      `;

      $('.lav-cart__products').insertAdjacentHTML('beforeend', product);
    }

    function initCarousel() {
      waitFor(
        () =>
          typeof jQuery === 'function' &&
          typeof jQuery('body').owlCarousel === 'function',
        () => {
          jQuery('.lav-cart__products').owlCarousel({
            items: 4,
            dots: false,
            nav: true,
            responsive: {
              0: {
                items: 1,
              },
              880: {
                items: 2,
              },
              1250: {
                items: 3,
              },
              // 1200: {
              //   items: 4,
              // },
            },
          });
        }
      );
    }
  }

  function handleUpsell() {
    addTipStyles();
    const parent = $('.product-related-wrap .product-slider');

    if (!parent) return;

    $('#block-related-heading', parent).innerText =
      'Works great together with:';

    const tip = /*html*/ `
      <div class='lav-tip'>
        ${getSvg('tip')}
        <div class='lav-tip__popup'>
          ✨ Perfect Match: Elevate your choice with complementary items designed to enhance performance and experience!
        </div>
      </div>
    `;

    $('#block-related-heading', parent).insertAdjacentHTML('afterend', tip);
  }

  function handleSimilar() {
    const parent = $('.product-interested-in .product-slider-title');

    if (!parent) return;

    $('span', parent).innerText = 'Similar products';
  }

  function addQuickLinks() {
    const markup = /*html*/ `
      <div class='lav-quick__wrap'>
        <div class='lav-quick'>
          <div class='lav-quick__item' data-target='#product-description'>Description</div>
          <div class='lav-quick__item' data-target='#product-reviews'>Reviews</div>
          <div class='lav-quick__item' data-target='#pr-questiondisplay' style='display: none;'>Q&A</div>
          <div class='lav-quick__item' data-target='.product-interested-in' style='display: none;'>Similar products</div>
          <div class='lav-quick__item' data-target='.product-other-line' style='display: none;'>Other products from this line</div>
        </div>
      </div>
    `;

    $('#product-description').insertAdjacentHTML('beforebegin', markup);

    for (const anchor of $$('.lav-quick__item')) {
      anchor.addEventListener('click', () => {
        const target = anchor.dataset.target;

        jQuery('html, body').animate(
          {
            scrollTop:
              jQuery(target).offset().top -
              (jQuery(window).width() < 768 ? 10 : 60),
          },
          500
        );
      });
    }
  }

  function addSticky() {
    const markup = /*html*/ `
      <div class='lav-sticky'>
        <input class='lav-sticky__amount lav-sticky__sub-btn' type="number" min="0" value="1">
        <div class='lav-sticky__btn action primary'>Add to Cart</div>
        <div class='lav-sticky__favorite lav-sticky__sub-btn'>${getSvg(
          'heart'
        )}</div>
      </div>
    `;

    $('body').insertAdjacentHTML('beforeend', markup);

    $('.lav-sticky__amount').addEventListener('input', () => {
      $('.lav-sticky__amount').value = $('.lav-sticky__amount').value.replace(
        /\D/g,
        ''
      );
    });

    $('.lav-sticky__amount').addEventListener('change', () => {
      $('.lav-sticky__amount').value = $('.lav-sticky__amount').value.replace(
        /\D/g,
        ''
      );

      if (!$('.lav-sticky__amount').value) {
        $('.lav-sticky__amount').value = 1;
      }
    });

    $('.lav-sticky__btn').addEventListener('click', function () {
      $('#qty').value = $('.lav-sticky__amount').value;
      this.innerText = 'Adding...';
      this.classList.add('disabled');
      $('#product-addtocart-button').click();
    });

    $('.lav-sticky__favorite').addEventListener('click', () => {
      $('#qty').value = $('.lav-sticky__amount').value;
      $('[data-action="add-to-wishlist"]').click();
    });

    waitFor(
      () => typeof jQuery === 'function',
      () => {
        jQuery(window).scroll(function () {
          if (window.innerWidth >= 768) return;

          if (
            jQuery(window).scrollTop() >
            jQuery('.product-add-form').offset().top + 50
          ) {
            jQuery('.lav-sticky').addClass('active');
            jQuery('.rp-micro-app-dummy-icon-container').css({
              bottom: '74px',
            });
            jQuery('#richpanel_messenger_iframe').css({
              bottom: '74px',
            });
          } else {
            jQuery('.lav-sticky').removeClass('active');
            jQuery('.rp-micro-app-dummy-icon-container').css({
              bottom: '0',
            });
            jQuery('#richpanel_messenger_iframe').css({
              bottom: '0',
            });
          }
        });
      }
    );
  }
}

function initCart() {
  addSecurity();
  waitFor('.cart-info', handleHelp);
  waitFor(
    () =>
      $('#shopping-cart-table .item-info .product-item-name')?.innerText.trim(),
    handleProducts
  );

  function handleProducts() {
    addTipStyles();
    const parser = new DOMParser();

    for (const product of $$('#shopping-cart-table .item-info')) {
      updateProduct(product);
    }

    async function updateProduct(pr) {
      const link = $('.product-item-name a', pr).href;

      const res = await fetch(link);
      const html = await res.text();
      const doc = parser.parseFromString(html, 'text/html');

      if (!$('.item-options', pr).children.length) {
        $('.item-options', pr).remove();
      }

      // Add warranty
      waitFor(
        () => $$('.product-warranty-info-content li', doc).length,
        () => {
          const warrantyElements = $$('.product-warranty-info-content li', doc);
          console.log('fire', warrantyElements);

          const warrantyEl = document.createElement('tr');
          warrantyEl.classList.add('lav-warranty');
          warrantyEl.innerHTML = /*html*/ `
            <td></td>
            <td class='lav-warranty__content'>
              <div class='lav-warranty__inner'>
                <div class='lav-warranty__title'>Warranty:</div>
                <div class='lav-warranty__list'></div>
              </div>
            </td>
          `;

          warrantyElements.forEach((el) => {
            const item = /*html*/ `
            <div class='lav-warranty__item'>
              ${getSvg('warranty')}
              ${el.innerText}
            </div>
          `;

            $('.lav-warranty__list', warrantyEl).insertAdjacentHTML(
              'beforeend',
              item
            );
          });

          pr.insertAdjacentElement('afterend', warrantyEl);
        }
      );

      // Add related
      waitFor(
        () => $$('.product-related-wrap .product-slider-item', doc).length,
        () => {
          // .product-slider-list
          const target = $('.product-related-wrap', doc).cloneNode(true);
          const tip = /*html*/ `
          <div class='lav-tip'>
          ${getSvg('tip')}
            <div class='lav-tip__popup'>
              ✨ Perfect Match: Elevate your choice with complementary items designed to enhance performance and experience!
            </div>
          </div>
        `;

          $('.product-slider-title span', target).removeAttribute('id');
          $(
            '.product-slider-title span',
            target
          ).innerText = `Works great together with:`;
          $('.product-slider-title', target).insertAdjacentHTML(
            'beforeend',
            tip
          );

          if (pr.nextElementSibling?.classList.contains('lav-warranty')) {
            pr.nextElementSibling.insertAdjacentElement('afterend', target);
          } else {
            pr.insertAdjacentElement('afterend', target);
          }

          for (const addToCart of $$('.tocart', target)) {
            addToCart.addEventListener('click', (e) => {
              e.preventDefault();
              const form = addToCart.closest('form');
              const id = $('[name="product"]', form).value;
              const key = $('.main.column > [name="form_key"]').value;
              const href = addToCart
                .closest('.product-slider-item')
                .querySelector('a').href;

              addProduct(id, key, href);
              // console.log('addToCart');
              // console.log(addToCart.closest('form'));
              // $('.tocart', target).click();
              // addToCart.closest('form').submit();
            });
          }

          waitFor(
            () =>
              typeof jQuery === 'function' &&
              typeof jQuery('body').owlCarousel === 'function',
            () => {
              jQuery($('.product-slider-list', target)).owlCarousel({
                items: 3,
                dots: false,
                nav: true,
                loop: true,
                responsive: {
                  0: {
                    items: 1,
                  },
                  768: {
                    items: 2,
                  },
                  1024: {
                    items: 1,
                  },
                  1150: {
                    items: 2,
                  },
                  1350: {
                    items: 3,
                  },
                },
              });
            }
          );
        }
      );
    }
  }

  function addSecurity() {
    const markup = /*html*/ `
      <div class='lav-security__caption'>All payments are secured through a 256 bit SSL Encryption software to ensure your personal details are kept safe.</div>
    `;

    waitFor('.totals-wrapper', () => {
      $('.totals-wrapper').insertAdjacentHTML('beforeend', markup);
    });
  }

  function handleHelp() {
    $('.cart-container').insertAdjacentElement('afterend', $('.cart-info'));

    $('.cart-info .cart-info-title').addEventListener('click', (e) => {
      if (window.innerWidth > 768) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    });
  }

  function addProduct(id, key, href) {
    console.log(id, key, href);

    if (id && key) {
      $('#form-validate .loader').classList.add('show');
    } else {
      window.open(href);
      return false;
    }

    const url = `https://www.restaurantsupply.com/rest/V1/gomage-guest-carts/addtocart/items/${id}`;
    const data = {
      productIds: id,
      productInfo: [
        {
          id: id,
        },
      ],
      params: [
        {
          name: 'qty',
          value: '1',
        },
        {
          name: 'product',
          value: id,
        },
        {
          name: 'form_key',
          value: key,
        },
      ],
    };

    postData(url, data).then((data) => {
      if (data && JSON.parse(data)?.success) {
        location.reload();
      }
      console.log(JSON.parse(data)); // JSON data parsed by `data.json()` call
    });
  }

  async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json();
  }
}

function addTipStyles() {
  const styles = /* css */ `
    .lav-tip {
      position: relative;
      display: inline-flex;
      cursor: pointer;
      padding: 10px;
      margin-left: -10px;
    }
    .lav-tip svg {
      transition: 0.2s;
    }
    .lav-tip__popup {
      position: absolute;
      z-index: -9999;
      opacity: 0;
      pointer-events: none;
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%);
      padding: 10px;
      background: var(--Main-White, #FFF);
      // box-shadow: 0px 0.5px 1px 0px rgba(0, 0, 0, 0.24);
      box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.08);
      border-radius: 8px;
      color: #000;
      font-size: 14px;
      line-height: 20px;
      width: 240px;
      font-weight: 400;
    }
    .lav-tip:hover svg {
      opacity: 0.8;
    }
    .lav-tip:hover .lav-tip__popup {
      opacity: 1;
      z-index: 1;
      transition: opacity 0.2s;
      pointer-events: auto;
    }
    @media(max-width: 768px) {
      .lav-tip__popup {
        left: -100%;
      }
    }
  `;

  const stylesTipEl = document.createElement('style');
  stylesTipEl.classList.add('exp-styles');
  stylesTipEl.innerHTML = styles;
  document.head.appendChild(stylesTipEl);
}

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
    `;

    const stylesEl = document.createElement('style');
    stylesEl.classList.add('exp-modal');
    stylesEl.innerHTML = styles;
    document.head.appendChild(stylesEl);
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
        for (let node of mutation.addedNodes) {
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

// Artificial delay
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Check if element in viewport
function isElementInViewport(selector) {
  const el = typeof selector === 'string' ? $(selector) : selector;

  if (!el) return false;

  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
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
    tip: `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
        <path d="M10 0.0200195C4.48 0.0200195 0 4.50002 0 10.02C0 15.54 4.48 20.02 10 20.02C15.52 20.02 20 15.54 20 10.02C20 4.50002 15.52 0.0200195 10 0.0200195ZM11 17.02H9V15.02H11V17.02ZM13.07 9.27002L12.17 10.19C11.45 10.92 11 11.52 11 13.02H9V12.52C9 11.42 9.45 10.42 10.17 9.69002L11.41 8.43002C11.78 8.07002 12 7.57002 12 7.02002C12 5.92002 11.1 5.02002 10 5.02002C8.9 5.02002 8 5.92002 8 7.02002H6C6 4.81002 7.79 3.02002 10 3.02002C12.21 3.02002 14 4.81002 14 7.02002C14 7.90002 13.64 8.70002 13.07 9.27002Z" fill="#536D80"/>
      </svg>
    `,
    greenCheck: `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <g clip-path="url(#clip0_3651_14487)">
        <path d="M7.9987 1.3335C4.3187 1.3335 1.33203 4.32016 1.33203 8.00016C1.33203 11.6802 4.3187 14.6668 7.9987 14.6668C11.6787 14.6668 14.6654 11.6802 14.6654 8.00016C14.6654 4.32016 11.6787 1.3335 7.9987 1.3335ZM6.66536 11.3335L3.33203 8.00016L4.27203 7.06016L6.66536 9.44683L11.7254 4.38683L12.6654 5.3335L6.66536 11.3335Z" fill="#4F9E34"/>
        </g>
        <defs>
        <clipPath id="clip0_3651_14487">
        <rect width="16" height="16" fill="white"/>
        </clipPath>
        </defs>
      </svg>
    `,
    heart: `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10.1 16.9481L10 17.0572L9.89 16.9481C5.14 12.2507 1.99999 9.1444 1.99999 5.99453C1.99999 3.81471 3.5 2.17984 5.5 2.17984C7.04 2.17984 8.54 3.26975 9.07 4.75203L10.93 4.75203C11.4599 3.26975 12.96 2.17984 14.5 2.17984C16.5 2.17984 18 3.81471 18 5.99454C18 9.1444 14.86 12.2507 10.1 16.9481ZM14.5 2.53527e-06C12.76 2.23103e-06 11.09 0.882833 10 2.26702C8.91001 0.882833 7.24 1.26588e-06 5.5 9.61651e-07C2.41999 4.23125e-07 -4.59266e-07 2.62669 -1.04812e-06 5.99453C-1.76656e-06 10.1035 3.4 13.4714 8.55 18.5613L10 20L11.45 18.5613C16.6 13.4714 20 10.1035 20 5.99454C20 2.6267 17.58 3.07378e-06 14.5 2.53527e-06Z" fill="#666666"/>
      </svg>
    `,
    warranty: `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.288 10.9665L20.588 8.96652C20.3726 8.71286 20.2421 8.39814 20.2146 8.06652C20.168 7.39985 20.068 6.33318 20.0013 5.45985C19.972 5.08125 19.8079 4.72573 19.5388 4.45783C19.2696 4.18993 18.9134 4.02744 18.5346 3.99985L15.928 3.78652C15.5964 3.7591 15.2816 3.62855 15.028 3.41318C14.548 2.99985 13.6947 2.28652 13.028 1.71318C12.7403 1.4663 12.3737 1.33057 11.9946 1.33057C11.6156 1.33057 11.249 1.4663 10.9613 1.71318L8.96132 3.41318C8.70766 3.62855 8.39294 3.7591 8.06132 3.78652L5.46798 3.99985C5.0882 4.02764 4.73108 4.19108 4.46181 4.46035C4.19255 4.72961 4.0291 5.08673 4.00132 5.46652C3.92798 6.34652 3.84132 7.46652 3.78798 8.07318C3.76057 8.40481 3.63002 8.71953 3.41465 8.97318C3.00798 9.45985 2.28798 10.3065 1.71465 10.9732C1.46776 11.2609 1.33203 11.6274 1.33203 12.0065C1.33203 12.3856 1.46776 12.7522 1.71465 13.0399L3.41465 15.0399C3.63002 15.2935 3.76057 15.6082 3.78798 15.9399C3.84132 16.6065 3.93465 17.6732 4.00132 18.5465C4.03215 18.9239 4.19693 19.2779 4.46591 19.5444C4.73488 19.8109 5.09031 19.9725 5.46798 19.9999L8.07465 20.2132C8.40627 20.2406 8.72099 20.3711 8.97465 20.5865L10.9746 22.2865C11.2623 22.5334 11.6289 22.6691 12.008 22.6691C12.3871 22.6691 12.7536 22.5334 13.0413 22.2865C13.708 21.7132 14.5546 20.9999 15.0413 20.5865C15.295 20.3711 15.6097 20.2406 15.9413 20.2132L18.5346 19.9999C18.9144 19.9721 19.2716 19.8086 19.5408 19.5394C19.8101 19.2701 19.9735 18.913 20.0013 18.5332C20.0746 17.6532 20.168 16.5332 20.2146 15.9265C20.2421 15.5949 20.3726 15.2802 20.588 15.0265C21.0013 14.5465 21.7147 13.6932 22.288 13.0265C22.5331 12.7393 22.6677 12.3741 22.6677 11.9965C22.6677 11.6189 22.5331 11.2537 22.288 10.9665ZM11.208 15.1199L8.24798 12.1599L9.37465 11.0332L11.208 12.8599L14.628 9.43985L15.7546 10.5665L11.208 15.1199Z" fill="#4F9E34"/>
      </svg>
    `,
  };

  return svgObj[name];
}
