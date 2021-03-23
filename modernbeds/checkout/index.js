/*** Analytics insert start ***/

// try {
//   (function(h,o,t,j,a,r){
//       h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
//       h._hjSettings={hjid:2196497,hjsv:6};
//       a=o.getElementsByTagName('head')[0];
//       r=o.createElement('script');r.async=1;
//       r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
//       a.appendChild(r);
//   })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
//   window.hj = window.hj || function(){(hj.q = hj.q || []).push(arguments)};
//   hj('trigger', 'pdp_product_options');
// }
// catch (e) { }

// function gaEvent(action, label = "") {
//   try {
//       dataLayer.push({
//           "event": "event-to-ga",
//           "eventCategory":  "Exp - PDP product options",
//           "eventAction": action,
//           "eventLabel": label
//       });
//   } catch (e) {}
// };

/*** Analytics insert -end- ***/

/*** STYLES insert start ***/

let stylesList = `
.go-product {
  display: flex;
  margin: 0 -8px;
}
.go-product__image {
  padding: 0 8px;
  flex: 1;
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
  padding-bottom: 8px;
}
.go-product__preview {
  font-size: 14px;
  line-height: 1.5;
  border-bottom: 1px solid rgba(0,0,0,0.5);
  color: rgba(0,0,0,0.5);
  opacity: 0.5;
}
.go-product__count {
  display: flex;
  margin-top: 12px;
}
.go-product__count-btn {
  border: 1px solid rgb(150, 150, 150, 0.2);
  box-sizing: border-box;
  border-radius: 3px;
  width: 30px;
  font-size: 20px;
  background: none;
}
.go-product__count-value {
  font-size: 14px;
  display: flex;
  align-items: center;
  padding: 5px 15px;
  color: #000000;
  font-weight: bold;
}
.go-product__count-minus {
  background: url('https://flopsi69.github.io/crs/modernbeds/checkout/minus.svg');
}
.go-product__count-plus {
  background: url('https://flopsi69.github.io/crs/modernbeds/checkout/plus.svg');
}

`;
const REPO_DIR = 'https://flopsi69.github.io/crs/modernbeds/checkout/';
// connect to DOM
let styles = document.createElement('style');
styles.innerHTML = stylesList;
document.body.appendChild(styles);

/*** STYLES insert -end- ***/

/*** HTML insert start ***/

/*** HTML insert -end- ***/

init();
function init() {
  document
    .querySelector('.grid__item table')
    .insertAdjacentHTML('beforebegin', "<div class='go-cart'></div>");

  document.querySelectorAll('.mw_cart_line').forEach(product => {
    document
      .querySelector('.go-cart')
      .insertAdjacentElement('afterbegin', createPseudoCartEl(product));
    // console.log(createChar(product));
  });
}

function createPseudoCartEl(product) {
  let productInfo = {
    title: product.querySelector('.list-view-item__title a').innerText,
    imageSrc: product
      .querySelector('.cart__image')
      .src.replace('100x.jpg', '500x.jpg'),
    link: product.querySelector('.list-view-item__title a').href,
    meta: product.querySelector('.cart__meta-text').innerText,
    price: product.querySelector('.cart__price-wrapper .money').innerText,
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
      <a class='go-product__preview' href='#'>Preview</a>
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

  let newProductEl = document.createElement('div');
  newProductEl.classList.add('go-product');
  newProductEl.insertAdjacentHTML('afterbegin', newProduct);
  return newProductEl;
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
