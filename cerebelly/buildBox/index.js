function gaEvent(action, label = '') {
  window.dataLayer = window.dataLayer || [];
  try {
    let eventObj = {
      event: 'ga_event',
      eventCategory: 'Exp — PDP: add phone number',
      eventAction: action
    };
    if (label) {
      eventObj['eventLabel'] = label;
    }
    dataLayer.push(eventObj);
  } catch (e) {}
}

const REPO_DIR = 'https://flopsi69.github.io/crs/cerebelly/buildBox';

/* STYLES insert start */
let stylesList = `
  .css-tbsmoq .boxmenuContainer {
    display: none;
  }
  .mainContainer .pageContainer {
    display: flex;
    padding-right: 35px;
    align-items: flex-start;
  }
  .lav-build {
    // position: sticky;
    top: 80px;
    text-align: center;
    width: 400px;
    background-color: #EBEEF6;
    border-radius: 15px;
    padding: 40px 45px 45px;
    margin-top: 100px;
  }
  .lav-build__title {
    font-weight: 600;
    font-size: 32px;
    line-height: 43px;
    letter-spacing: 0.006em;
    color: #15206B;
    margin-bottom: 5px;
  }
  .lav-build__caption {
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    letter-spacing: 0.007em;
    color: #3856A7;
  }
  .lav-build__caption-sub {
    color: #15226A;
  }
  .lav-build__caption span {
    font-weight: 900;
  }
  .lav-build__discounts {
    background: #F4F8FC;
    border-radius: 5px;
    padding: 15px 12px;
    margin-top: 30px;
    margin-bottom: 40px;
  }
  .lav-build__discount {
    font-size: 15px;
    line-height: 23px;
    letter-spacing: 0.003em;
    color: #3856A5;
    display: flex;
    text-align: left;
  }
  .lav-build__discount-value {
    font-weight: 900;
  }
  .lav-build__discount-caption {
    font-weight: 600;
    margin-left: 3px;
  }
  .lav-build__discount + .lav-build__discount {
    margin-top: 5px;
  }
  .lav-build__list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 12px;
    margin-bottom: 25px;
  }
  .lav-build__item {
    position: relative;
    background: #FFFFFF;
    border-radius: 3px;
    width: 51px;
    height: 51px;
    transition: 0.2s;
    overflow: hidden;
    line-height: 0;
  }
  .lav-build__item-count {
    position: absolute;
    left: -5px;
    top: -5px;
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    background: #FC4D38;
    color: #fff;
    font-weight: bold;
    font-size: 10px;
    border-radius: 50%;
  }
  .lav-build__item img {
    object-fit: cover;
    width: 51px;
    height: 51px;
    border-radius: 3px;
  }
  .lav-build__item:hover {
    filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.25));
    transform: scale(1.1);
  }
  .lav-build__checkout {
    padding-top: 12px!important;
    padding-bottom: 12px!important;
    letter-spacing: 0.09em!important;
  }
  .lav-build__checkout_disabled {
    background-color: #B9C4E0!important;
    border-color: #B9C4E0!important;
    pointer-events: none;
  }
  .lav-build__control {
    position: absolute;
    bottom: 5px;
    left: 5px;
    right: 5px;
    display: flex;
    background: #FC4E38;
    border-radius: 12px;
  }
  .lav-build__control-btn {
    background: none;
    border: none;
    outline: none;
    color: #fff;
    padding: 0;
  }
  .lav-build__control-input {
    background: none;
    outline: none;
    color: #fff;
    text-align: center;
    width: 30px;
    border: none;
    font-size: 10px;
    line-height: 1;
    font-weight: 900;
  }
  
`;

// connect to DOM
setTimeout(() => {
  let styles = document.createElement('style');
  styles.id = 'go-phone-styles';
  styles.innerHTML = stylesList;
  document.body.appendChild(styles);
}, 300);

/* STYLES insert end */

// CODE START ***
// var intervalInit = setInterval(() => {
//   if (typeof advertId !== 'undefined') {
//     console.log('success..');
//     clearInterval(intervalInit);
//     init();
//   } else {
//     console.log('try one more..');
//   }
// }, 500);

initExp();
function initExp() {
  let lavBuild = `
    <div class='lav-build'>
      <div class='lav-build__title'>Your order</div>
      <div class='lav-build__caption'>Add 14 products to your box</div>
      <div class='lav-build__caption lav-build__caption-sub'>Get <span>Free Shipping + 10% OFF</span></div>

      <div class='lav-build__discounts'>
        <div class='lav-build__discount'>
          <div class='lav-build__discount-value'>14-27 items → 10% OFF</div>
          <div class='lav-build__discount-caption'>+ Free Shipping</div>
        </div>
        <div class='lav-build__discount'>
          <div class='lav-build__discount-value'>28-41 items → 15% OFF</div>
          <div class='lav-build__discount-caption'>+ Free Shipping</div>
        </div>
        <div class='lav-build__discount'>
          <div class='lav-build__discount-value'>42-55 items → 20% OFF</div>
          <div class='lav-build__discount-caption'>+ Free Shipping</div>
        </div>
        <div class='lav-build__discount'>
          <div class='lav-build__discount-value'>56 + items → 25% OFF</div>
          <div class='lav-build__discount-caption'>+ Free Shipping</div>
        </div>
      </div>

      <div class='lav-build__list'>
        <div class='lav-build__item'></div>
        <div class='lav-build__item'></div>
        <div class='lav-build__item'></div>
        <div class='lav-build__item'></div>
        <div class='lav-build__item'></div>
        <div class='lav-build__item'></div>
        <div class='lav-build__item'></div>
        <div class='lav-build__item'></div>
        <div class='lav-build__item'></div>
        <div class='lav-build__item'></div>
        <div class='lav-build__item'></div>
        <div class='lav-build__item'></div>
        <div class='lav-build__item'></div>
        <div class='lav-build__item'></div>
        <div class='lav-build__item'></div>
      </div>

      <div class='lav-build__checkout-wrap'>
        <button class='button primary blue lav-build__checkout'>Proceed to Checkout</button>
      </div>
    </div>
  `;

  document
    .querySelector('.pageContainer')
    .insertAdjacentHTML('beforeend', lavBuild);

  setItems();
}

function setItems() {
  document
    .querySelectorAll('.products .product.with-amount')
    .forEach(function (product, i) {
      if (document.querySelector('.lav-build__item:nth-child(' + i + ')')) {
        let productCount = product.querySelector(
          '.added-container input'
        ).value;
        let targetItem = document.querySelector(
          '.lav-build__item:nth-child(' + i + ')'
        );
        targetItem.insertAdjacentElement(
          'afterbegin',
          product.querySelector('.image img').cloneNode(true)
        );

        targetItem.insertAdjacentHTML(
          'afterbegin',
          "<div class='lav-build__item-count'>" + productCount + '</div>'
        );

        targetItem.insertAdjacentHTML(
          'afterbegin',
          `<div class='lav-build__control'>
            <button class='lav-build__control-btn lav-build__control-minus'>
              <img src='${REPO_DIR}/icon-minus.svg'>
              <img src='${REPO_DIR}/icon-basket.svg'>
            </button>
            <input class='lav-build__control-input'>
            <button class='lav-build__control-btn lav-build__control-plus'>
              <img src='${REPO_DIR}/icon-plus.svg'>
            </button>
          </div>`
        );
      }
    });
}
