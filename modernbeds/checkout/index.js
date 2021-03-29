/*** Analytics insert start ***/

try {
  (function (h, o, t, j, a, r) {
    h.hj =
      h.hj ||
      function () {
        (h.hj.q = h.hj.q || []).push(arguments);
      };
    h._hjSettings = { hjid: 2196497, hjsv: 6 };
    a = o.getElementsByTagName('head')[0];
    r = o.createElement('script');
    r.async = 1;
    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
    a.appendChild(r);
  })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
  window.hj =
    window.hj ||
    function () {
      (hj.q = hj.q || []).push(arguments);
    };
  hj('trigger', 'Cart_Clearpay');
} catch (e) {}

function gaEvent(action) {
  try {
    dataLayer.push({
      event: 'event-to-ga',
      eventCategory: 'Exp - Cart Clearpay',
      eventAction: action
    });
  } catch (e) {}
}
gaEvent('loaded');

/*** Analytics insert -end- ***/

/*** STYLES insert start ***/

let stylesList = `
.hs-sticky-cart-cart-drawer {
  display: none;
}
.page.section-header h1 {
  font-size: 24px;
  text-transform: none;
  padding-bottom: 5px;
}
.cart table {
  display: none;
}
.go-cart {
  margin-bottom: 30px;
}
.go-product {
  display: flex;
  margin: 0 -8px;
}
.go-product + .go-product {
  padding-top: 15px;
  margin-top: 15px;
  border-top: 1px solid rgba(0,0,0,0.1);
}
.go-product__image {
  padding: 0 8px;
  flex: 1;
  display: flex;
  border-radius: 4px;
  overflow: hidden;
  min-width: 0;
  max-height: 100%;
}
.go-product__image img {
  object-fit: cover;
  border-radius: 4px;
  height: 100%;
}
.go-product__info {
  padding: 0 8px;
  flex: 1;
}
.go-product__title {
  font-weight: bold;
  font-size: 14px;
  line-height: 1.5;
  color: #000000;
  display: block;
}
.go-product__meta {
  font-size: 12px;
  line-height: 1.5;
  color: #000000;
  opacity: 0.5;
  padding: 4px 0 12px;
}
.go-product__price {
  font-size: 14px;
  line-height: 1.5;
  color: #000000;
  padding-bottom: 4px;
}
.go-product__preview {
  font-size: 14px;
  line-height: 1.5;
  border-bottom: 1px solid rgba(0,0,0,0.5);
  color: rgba(0,0,0,0.5);
}
.go-product__count {
  display: flex;
}
.go-product__foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
}
.go-product__remove {
  line-height: 1.05;
  opacity: 0.5;
}
.go-product__remove:hover {
  opacity: 1;
}
.go-product__count-btn {
  border: 1px solid rgb(150, 150, 150, 0.2);
  box-sizing: border-box;
  border-radius: 3px;
  width: 24px;
  height: 24px;
  font-size: 20px;
  background: none;
}
.go-product__count-value {
  font-size: 14px;
  display: flex;
  align-items: center;
  padding: 0 15px;
  color: #000000;
  font-weight: bold;
}
.go-product__count-minus {
  background: url('https://flopsi69.github.io/crs/modernbeds/checkout/minus.svg') center no-repeat;
}
.go-product__count-plus {
  background: url('https://flopsi69.github.io/crs/modernbeds/checkout/plus.svg') center no-repeat;
}
.cart__footer .checkout .solid-border {
  padding: 0;
  border: 0;
}
body #hs-additional-buttons .shopify-cleanslate ._2zarRkvJ2j83NID3Q3t0Ix, .shopify-cleanslate ._1M9S34W-UyhhDRRQQiV3RH {
  height: 55px!important;
}
.shopify-cleanslate .kEwctmM5pguv6XkPR8mx6, .shopify-cleanslate ._2PfRg7DFvcstLFRNRf5W1e {
  height: auto!important;
  margin-top: 14px!important;
}
.checkout input[type="submit"] {
  margin-bottom: 0;
  height: 55px;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #FFFFFF;
}
.additional-checkout-buttons {
  margin-top: 0;
}
.clearpay-paragraph {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-bottom: 15px;
  margin-top: 20px;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  border-top: 1px solid rgba(0,0,0,0.1);
}

.clearpay-text1, .clearpay-instalments, .clearpay-text2 {
  font-size: 12px;
  line-height: 1.5;
  color: rgba(0,0,0,0.6);
  font-weight: 400;
}
.clearpay-text3 {
  display: none;
}
.clearpay-link {
  color: #000000;
}
.cart-note {
  float: none;
}
.cart-note h5 {
  margin: 0;
}
.cart-note .cart-note__label {
  position: relative;
  text-align: left!important;
  font-size: 14px;
  color: #000000;
  line-height: 1.5;
  text-transform: none;
  font-weight: 400;
  text-align: left!important;
  padding: 15px;
  margin-bottom: 0;
}
.cart-note .cart-note__label:before {
    content: '';
    position: absolute;
    right: 10px;
    top: 50%;
    margin-top: -8px;
    width: 16px;
    height: 16px;
    background: url("https://flopsi69.github.io/crs/modernbeds/checkout/angel.svg") center no-repeat;
}
.cart-note .solid-border {
  background: #FAFAFA;
  padding: 0;
}
.cart-note .cart-note__input {
  display: none;
  margin-bottom: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 0;
}
.clearpay-row-el {
  text-align: left;
  line-height: 1.3;
}
.go-subtotal-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.go-subtotal-wrap .cart__subtotal-title {
  text-transform: none;
  font-weight: 400;
  font-size: 16px;
}
.go-subtotal-wrap .cart__subtotal {
  color: black;
}

.go-modal__wrap {
  position: fixed;
  dipslay: none;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: rgba(0,0,0,.7);
  z-index: 9999999999;
  margin: auto;
  display: none;
}

.go-modal__wrap.go-modal__wrap-active {
  display: flex;
}

.go-modal {
  position: relative;
  display: none;
  background-color: #fff;
  max-width: 90%;
  max-height: 90%;
  padding: 25px 15px 15px;
  box-shadow: 0px 4px 24px rgb(55 55 55 / 10%);
  border-radius: 4px;
  overflow-y: auto;
  margin: auto;
  padding-bottom: 30px;
}
.go-modal-close {
  position: absolute;
  right: 10px;
  top: 7px;
}
.go-modal.go-modal-active {
  display: block;
}
.go-modal-trigger {

}
.go-modal__step {
  color: black;
  font-size: 14px;
  line-height: 1.5;
}
.go-modal__step .go-cl-logo {
  display: inline-block;
  vertical-align: middle;
  margin: 0 5px;
}
.go-modal__step .go-instr {
  margin-top: 16px;
  margin-bottom: 8px;
}
.go-modal__step + .go-modal__step {
  margin-top: 16px;
}
.go-modal-title {
  font-weight: bold;
}
.go-modal__close-guide {
  border: 2px solid #0B2B6F;
  border-radius: 2px;
  font-weight: 500;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #0B2B6F;
  padding: 12px;
  margin-top: 24px;
}
.go-modal__close-guide img {
  margin-right: 12px;
  width: 16px;
  height: 16px;
  filter: invert(99%) sepia(65%) saturate(3279%) hue-rotate(218deg) brightness(84%) contrast(42%)
}
.pre-guide {
  background: #FAFAFA;
  margin-bottom: 40px;
  margin-top: 4px;
  padding: 16px;
  margin-left: 15px;
}

.pre-guide__title {
  font-size: 14px;
  line-height: 1.5;
  color: black;
  font-weight: bold;
}

.pre-guide__descr {
  margin: 16px 0;
  font-size: 14px;
  line-height: 1.5;
  color: black;
}

.pre-guide__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.pre-guide-quik {
  font-size: 14px;
  line-height: 1.5;
  display: flex;
  align-items: center;
  color: #000000;
  border-bottom: 1px solid black;
}

.pre-guide-logo {
  line-height: 0;
}

.go-modal-char__name {
  font-size: 16px;
  line-height: 1.5;
  color: #000000;
  margin-bottom: 24px;
  font-weight: bold;
}

.go-modal-char__image {
 line-height: 0;
 border-radius: 5px;
 margin-bottom: 20px;
}

.go-modal-char__image img {
  border-radius: 5px;
}

.go-product__chars {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
}

.option-cart-title {
  margin: 0;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(0,0,0,0.5);
  font-weight: normal;
  display: block;
}

.option-cart-title-content {
  display: block;
  font-size: 14px;
  line-height: 1.35;
  color: #000000;
  display: block;
  text-transform: lowercase;
}

.go-product__option {
  padding: 0 10px;
  margin-top: 16px;
  width: 50%;
}

.go-checkout-btn-clone {
  width: 100%;
  margin-bottom: 20px;
  height: 55px;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #FFFFFF;
  animation: none;
}
.go-checkout-btn-clone-wrap {
  padding: 0 15px;
}
`;
const REPO_DIR = 'https://flopsi69.github.io/crs/modernbeds/checkout/';
// connect to DOM
let styles = document.createElement('style');
styles.innerHTML = stylesList;

/*** STYLES insert -end- ***/

/*** HTML insert start ***/

/*** HTML insert -end- ***/
document.addEventListener('DOMContentLoaded', function () {
  alert('load');
  setTimeout(init, 1200);
});

function init() {
  document.body.appendChild(styles);

  changeMinor();
  initModal();
  quickGuideBlock();

  document.querySelectorAll('.mw_cart_line').forEach((product, index) => {
    document
      .querySelector('.go-cart')
      .insertAdjacentElement('afterbegin', createPseudoCartEl(product, index));
  });
}

function changeMinor() {
  // let cloneSubmitBtn = document
  //   .querySelector('.checkout input[type="submit"]')
  //   .cloneNode();
  // cloneSubmitBtn.classList.add('go-checkout-btn-clone');
  // cloneSubmitBtn.type = 'button';
  // cloneSubmitBtn.addEventListener('click', function (e) {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   gaEvent('click on checkout top');
  //   document.querySelector('.checkout input[type="submit"]').click();
  // });

  // document
  //   .querySelector('.page.section-header')
  //   .insertAdjacentHTML(
  //     'afterend',
  //     "<div class='go-checkout-btn-clone-wrap'></div>"
  //   );

  // document
  //   .querySelector('.go-checkout-btn-clone-wrap')
  //   .insertAdjacentElement('afterbegin', cloneSubmitBtn);

  // document.addEventListener('click', function (e) {
  //   if (e.target.classList.contains('go-modal__wrap-active')) {
  //     document
  //       .querySelector('.go-modal__wrap-active')
  //       .classList.remove('go-modal__wrap-active');
  //     document
  //       .querySelector('.go-modal-active')
  //       .classList.remove('go-modal-active');
  //   }
  // });

  document
    .querySelector('.grid__item table')
    .insertAdjacentHTML('beforebegin', "<div class='go-cart'></div>");

  document
    .querySelector('.cart__subtotal-title')
    .insertAdjacentHTML('beforebegin', "<div class='go-subtotal-wrap'></div>");
  document
    .querySelector('.go-subtotal-wrap')
    .insertAdjacentElement(
      'beforeend',
      document.querySelector('.cart__subtotal-title')
    );
  document
    .querySelector('.go-subtotal-wrap')
    .insertAdjacentElement(
      'beforeend',
      document.querySelector('.cart__subtotal')
    );

  let clearpayRowEl = document.createElement('div');
  clearpayRowEl.classList.add('clearpay-row-el');
  document
    .querySelector('.clearpay-paragraph')
    .insertAdjacentElement('afterbegin', clearpayRowEl);
  clearpayRowEl.insertAdjacentElement(
    'beforeend',
    document.querySelector('.clearpay-paragraph .clearpay-text1')
  );
  clearpayRowEl.insertAdjacentElement(
    'beforeend',
    document.querySelector('.clearpay-paragraph .clearpay-text2')
  );
  clearpayRowEl.insertAdjacentElement(
    'beforeend',
    document.querySelector('.clearpay-paragraph .clearpay-instalments')
  );
  document
    .querySelector('.clearpay-row-el')
    .insertAdjacentHTML('afterend', "<div class='clearpay-logo-wrap'></div>");
  document
    .querySelector('.clearpay-logo-wrap')
    .insertAdjacentElement(
      'beforeend',
      document.querySelector('.clearpay-paragraph .clearpay-logo')
    );

  document.querySelector('.clearpay-link-inner').innerText = 'Learn more';

  document.querySelector('.cart-note .cart-note__input').style.display = 'none';
  document
    .querySelector('.cart-note .cart-note__label')
    .addEventListener('click', function () {
      if (
        document.querySelector('.cart-note .cart-note__input').style.display ==
        'none'
      ) {
        document.querySelector('.cart-note .cart-note__input').style.display =
          'block';
      } else {
        document.querySelector('.cart-note .cart-note__input').style.display =
          'none';
      }
    });
}

function createPseudoCartEl(product, index) {
  let indexEl = index + 1;
  let productInfo = {
    title: product.querySelector('.list-view-item__title a').innerText,
    imageSrc: product
      .querySelector('.cart__image')
      .src.replace('100x.jpg', '500x.jpg'),
    link: product.querySelector('.list-view-item__title a').href,
    meta: product.querySelector('.cart__meta-text')?.innerText || '',
    price:
      product.querySelector('.cart__price-wrapper .money')?.innerText || '',
    quantity: product.querySelector('.cart__qty-input').value
  };
  let newProduct = `
    <div class='go-product__image'>
      <img src='${productInfo.imageSrc}'>
    </div>
    <div class='go-product__info'>
      <a href='${productInfo.link}' class='go-product__title'>${productInfo.title}</a>
      <div class='go-product__meta'>${productInfo.meta}</div>
      <div class='go-product__price'>${productInfo.price}</div>
      <a class='go-product__preview' data-modal-target='${indexEl}' href='#'>Preview</a>
      <div class='go-product__foot'>
        <div class='go-product__count'>
          <button class='go-product__count-btn go-product__count-minus'>
          </button>
          <div class='go-product__count-value'>${productInfo.quantity}</div>
          <button class='go-product__count-btn go-product__count-plus'>
          </button>
        </div>
        <div class='go-product__remove'><img src='${REPO_DIR}delete.svg'></div>
      </div>
    </div>
  `;

  let originalProduct = document.querySelector(
    '.cart table tbody tr:nth-child(' + indexEl + ')'
  );
  let newProductEl = document.createElement('div');
  newProductEl.classList.add('go-product');
  console.log(index);
  newProductEl.dataset.productIndex = index;
  newProductEl.insertAdjacentHTML('afterbegin', newProduct);
  newProductEl
    .querySelector('.go-product__remove')
    .addEventListener('click', function () {
      originalProduct.querySelector('.cart__remove').click();
    });

  newProductEl
    .querySelector('.go-product__preview')
    .addEventListener('click', function (e) {
      e.preventDefault();
      gaEvent('click on Preview link');
      document
        .querySelector('.go-modal__wrap')
        .classList.add('go-modal__wrap-active');
      document
        .querySelector('.go-modal-chars-' + this.dataset.modalTarget)
        .classList.add('go-modal-active');
    });

  newProductEl
    .querySelector('.go-product__count-minus')
    .addEventListener('click', function () {
      originalProduct.querySelector('.qtyBtn.minus').click();
      originalProduct.querySelector('.cart__update').click();
    });
  // newProductEl
  //   .querySelector('.go-product__image')
  //   .addEventListener('click', function () {
  //     newProductEl.querySelector('.go-product__preview').click();
  //   });
  newProductEl
    .querySelector('.go-product__count-plus')
    .addEventListener('click', function () {
      originalProduct.querySelector('.qtyBtn.plus').click();
      originalProduct.querySelector('.cart__update').click();
    });
  createProductModal(product, productInfo, indexEl);
  return newProductEl;
}

function createProductModal(product, productInfo, modalIndex) {
  let modalEl = document.createElement('div');
  modalEl.classList.add(
    'go-modal',
    'go-modal-chars',
    'go-modal-chars-' + modalIndex
  );
  let modalStart = `
    <div class='go-modal-close go-close-modal-trigger'>
      <img src='${REPO_DIR}close.svg'>
    </div>
    <div class='go-modal-char__name'>${productInfo.title}</div>
    <div class='go-modal-char__image'><img src='${productInfo.imageSrc}'></div>
  `;
  modalEl.insertAdjacentHTML('beforeend', modalStart);

  let charsEl = createChar(product);
  modalEl.insertAdjacentElement('beforeend', charsEl);

  modalEl
    .querySelector('.go-modal-close')
    .addEventListener('click', function () {
      gaEvent('click on X on Preview pop up');
      document
        .querySelector('.go-modal__wrap')
        .classList.remove('go-modal__wrap-active');
      if (document.querySelector('.go-modal-active')) {
        document
          .querySelector('.go-modal-active')
          .classList.remove('go-modal-active');
      }
    });

  document
    .querySelector('.go-modal__wrap')
    .insertAdjacentElement('afterbegin', modalEl);
}

function createChar(product) {
  let charsEl = document.createElement('div');
  charsEl.classList.add('go-product__chars');

  product.querySelectorAll('.option-cart-title').forEach(option => {
    let optionEl = createOptionChar(option);
    charsEl.insertAdjacentElement('afterbegin', optionEl);
  });

  return charsEl;
}

function createOptionChar(option) {
  let optionEl = document.createElement('div');
  optionEl.classList.add('go-product__option');
  optionEl.insertAdjacentElement('afterbegin', option.nextElementSibling);
  optionEl.insertAdjacentElement('afterbegin', option);
  return optionEl;
}

function quickGuideBlock() {
  let guideEl = `
    <div class='pre-guide'>
      <div class='pre-guide__title'>Going to pay with Clearpay?</div>
      <div class='pre-guide__descr'>Choose Clearpay option at the final stage of the Checkout</div>
      <div class='pre-guide__bottom'>
        <div class='pre-guide-quik'>Open Quick guide</div>
        <div class='pre-guide-logo'>
          <img src="https://static.afterpay.com/integration/product-page/logo-clearpay-colour.png" srcset="https://static.afterpay.com/integration/product-page/logo-clearpay-colour.png 1x, https://static.afterpay.com/integration/product-page/logo-clearpay-colour@2x.png 2x, https://static.afterpay.com/integration/product-page/logo-clearpay-colour@3x.png 3x" width="120" alt="Clearpay">
        </div>
      </div>
    </div>
  `;

  document.querySelector('.cart-note').insertAdjacentHTML('afterend', guideEl);

  document
    .querySelector('.pre-guide-quik')
    .addEventListener('click', function () {
      gaEvent('click on Open Quick Guide link');
      document
        .querySelector('.go-modal-clearpay')
        .classList.add('go-modal-active');
      document
        .querySelector('.go-modal__wrap')
        .classList.add('go-modal__wrap-active');
    });
}

function initModal() {
  document.body.insertAdjacentHTML(
    'beforeend',
    "<div class='go-modal__wrap'></div>"
  );

  let modalClearpayEl = `
  <div class="go-modal go-modal-clearpay">
    <div class='go-modal-close go-close-modal-trigger'>
      <img src='${REPO_DIR}close.svg'>
    </div>
    <div class='go-modal-title go-modal__step'>Going to pay with <img class='go-cl-logo' src="https://static.afterpay.com/integration/product-page/logo-clearpay-colour.png" srcset="https://static.afterpay.com/integration/product-page/logo-clearpay-colour.png 1x, https://static.afterpay.com/integration/product-page/logo-clearpay-colour@2x.png 2x, https://static.afterpay.com/integration/product-page/logo-clearpay-colour@3x.png 3x" width="90" alt="Clearpay" >?</div>
    <div class="go-modal__step">
    1. Procceed to the checkout (or use quick payment buttons).
    <img class='go-instr' src='${REPO_DIR}сlearpay-instr1.png'>
    </div>
    <div class="go-modal__step">2. Fill in all the information.</div>
    <div class="go-modal__step">3. Choose delivery method.</div>
    <div class="go-modal__step">4. At the payment stage choose Clearpay:
      <img class='go-instr' src='${REPO_DIR}сlearpay-instr2.png'>
    </div>
    <div class="go-modal__step">5. You will be redirected to <img class='class='go-cl-logo' src="https://static.afterpay.com/integration/product-page/logo-clearpay-colour.png" srcset="https://static.afterpay.com/integration/product-page/logo-clearpay-colour.png 1x, https://static.afterpay.com/integration/product-page/logo-clearpay-colour@2x.png 2x, https://static.afterpay.com/integration/product-page/logo-clearpay-colour@3x.png 3x" width="90" alt="Clearpay" > to complete the payment.</div>
    <div class="go-modal__close-guide go-close-modal-trigger">
      <img class='go-instr' src='${REPO_DIR}close.svg'> Close Quick guide
    </div>
  </div>
  `;

  document
    .querySelector('.go-modal__wrap')
    .insertAdjacentHTML('afterbegin', modalClearpayEl);

  document.querySelectorAll('.go-close-modal-trigger').forEach(el => {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      if (el.classList.contains('go-modal-close')) {
        gaEvent('click on X on Quick Guide pop up');
      } else {
        gaEvent('click on Close Quick Guide button on Quick Guide pop up');
      }
      document
        .querySelector('.go-modal__wrap')
        .classList.remove('go-modal__wrap-active');
      if (document.querySelector('.go-modal-active')) {
        document
          .querySelector('.go-modal-active')
          .classList.remove('go-modal-active');
      }
    });
  });
}
