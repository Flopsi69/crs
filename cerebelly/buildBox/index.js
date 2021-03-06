function gaEvent(action, label = '') {
  window.dataLayer = window.dataLayer || [];
  try {
    let eventObj = {
      event: 'event-to-ga',
      eventCategory: 'Exp: Bundle Builder',
      eventAction: action
    };
    if (label) {
      eventObj['eventLabel'] = label;
    }
    dataLayer.push(eventObj);
  } catch (e) {}
}

(function (h, o, t, j, a, r) {
  h.hj =
    h.hj ||
    function () {
      (h.hj.q = h.hj.q || []).push(arguments);
    };
  h._hjSettings = { hjid: 2171597, hjsv: 6 };
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
hj('trigger', 'bundle_builder');

let isInitExp = false;
const REPO_DIR = 'https://flopsi69.github.io/crs/cerebelly/buildBox';

let observerGlobal = new MutationObserver(mutations => {
  for (let mutation of mutations) {
    for (let node of mutation.addedNodes) {
      // отслеживаем только узлы-элементы, другие (текстовые) пропускаем
      if (!(node instanceof HTMLElement)) continue;
      // console.log(node);
      if (
        node.querySelector('.pageContainer .container') &&
        node.querySelector('.products') &&
        node.querySelector('.category') &&
        !isInitExp
      ) {
        if (
          (document.querySelector('.e-right .e-nav-link') &&
            document.querySelector('.e-right .e-nav-link').innerText.trim() ==
              'Log in') ||
          !parseInt(localStorage.getItem('ajs_user_id'))
        ) {
          initExp();
        } else {
          if (document.querySelector('#go-phone-styles')) {
            document.querySelector('#go-phone-styles').remove();
          }
          console.log('User authed!');
        }
        // observerGlobal.disconnect();
      }
    }
  }
});

observerGlobal.observe(document.body, { childList: true, subtree: true });

function initStyles() {
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
      position: sticky;
      max-height: 85vh;
      z-index: 99;
      top: 75px;
      text-align: center;
      width: 400px;
      background-color: #EBEEF6;
      border-radius: 15px;
      padding: 40px 45px 45px;
      margin-top: 110px;
      // overflow-y: auto;
    }

    .lav-build::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
      border-radius: 10px;
      background-color: #F5F5F5;
    }

    .lav-build::-webkit-scrollbar {
      width: 3px;
      background-color: #F5F5F5;
    }

    .lav-build::-webkit-scrollbar-thumb {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
      background-color: #555;
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
      padding-left: 45px;
      margin: 30px -25px 40px;
    }
    .lav-build__discount {
      font-size: 15px;
      line-height: 23px;
      letter-spacing: 0.003em;
      color: #3856A5;
      display: flex;
      text-align: left;
    }
    .lav-build__discount_active {
      position: relative;
      color: #018659;
    }
    .lav-build__discount_active:before {
      content: '';
      position: absolute;
      left: -32px;
      top: 50%;
      transform: translateY(-50%);
      width: 20px;
      height: 20px;
      background: url(${REPO_DIR}/icon-check.svg) center no-repeat;
      background-size: contain;
    }
    .lav-build__discount-value {
      font-weight: 900;
    }
    .lav-build__discount-caption {
      font-weight: 600;
      margin-left: 3px;
    }
    .lav-build__discount {
      position: relative;
    }
    .lav-build__discount + .lav-build__discount {
      margin-top: 5px;
    }
    .lav-build__discount-tip {
      position: absolute;
      display: none;
      left: -55px;
      top: 50%;
      transform: translate(-100%, -54%);
      width: 180px;
      background: #FD4E39;
      box-shadow: 0px 0px 17px rgba(0, 0, 0, 0.25);
      font-weight: 500;
      font-size: 12px;
      line-height: 14px;
      text-align: center;
      letter-spacing: 0.002em;
      color: #FFFFFF;
      z-index: 10;
      padding: 15px 10px;
      border-radius: 7px;
    }
    .lav-build__discount-tip span {
      font-weight: bold;
    }
    .lav-build__discount-tip img {
      position: absolute;
      top: 5px;
      left: 5px;
      cursor: pointer;
      transition: 0.2s;
    }
    .lav-build__discount-tip img:hover {
      opacity: 0.5;
    }
    .lav-build__discount-tip:before {
      content: '';
      background: #FD4E39;
      width: 16px;
      height: 16px;
      position: absolute;
      right: 0;
      top: 50%;
      transform: rotate(45deg) translateY(-50%);
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
    .lav-build__item>img {
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
      opacity: 0;
      position: absolute;
      bottom: 5px;
      left: 5px;
      right: 5px;
      display: flex;
      background: #FC4E38;
      border-radius: 12px;
      padding: 1px;
      transition: 0.2s
    }
    .lav-build__item:hover .lav-build__control {
      opacity: 1;
    }
    .lav-build__control-btn {
      display: flex;
      align-items: center;
      background: none;
      border: none;
      outline: none;
      color: #fff;
      cursor: pointer;
      transition: .2s;
      padding: 2px 4px;
    }
    .lav-build__control-btn img + img {
      display: none;
    }
    .lav-build__control-btn:hover {
      transform: scale(1.5);
    }
    .lav-build__control-input {
      background: none;
      outline: none;
      color: #fff;
      text-align: center;
      width: 10px;
      border: none;
      font-size: 10px;
      line-height: 1;
      flex: 1;
      font-weight: 900;
      padding: 0;
      margin-top: -2px;
      pointer-events: none;
    }
    .css-1rupe80 button:disabled {
      background-color: rgb(255, 255, 255);
      color: rgb(21, 32, 107);
    }
    .not-added-container circle {
      fill: #3856A7;
    }
    .e-page-content-wrap {
      transition: 0.3s;
    }
    `;

  let styles = document.createElement('style');
  styles.id = 'go-phone-styles';
  styles.innerHTML = stylesList;
  document.body.appendChild(styles);
}

// connect to DOM
// setTimeout(() => {

// }, 300);

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
// initExp();
function initExp() {
  gaEvent('loaded');

  if (document.querySelector('.lav-build')) {
    return false;
  }

  console.log('initExp');
  // isInitExp = true;

  if (!document.querySelector('#go-phone-styles')) {
    document.addEventListener('click', function (e) {
      if (
        e.target.closest('.added-container') ||
        e.target.closest('.not-added-container') ||
        (e.target.closest('.main') &&
          document.querySelector('.products .added-container'))
      ) {
        if (e.target.closest('.add') || e.target.classList.contains('add')) {
          clickControl(true, e.target);
        } else if (e.target.closest('.not-added-container')) {
          clickControl(
            true,
            e.target.closest('.quantity').querySelector('.add')
          );
        } else if (
          e.target.closest('.remove') ||
          e.target.classList.contains('remove')
        ) {
          if (e.target.closest('.remove')) {
            clickControl(true, e.target.closest('.remove'), true);
          } else {
            clickControl(true, e.target.classList.contains('remove'), true);
          }
        } else {
          setTimeout(() => {
            clickControl();
          }, 300);
        }
      }
    });
  }

  if (!document.querySelector('#go-phone-styles')) {
    initStyles();
  }

  let lavBuild = `
    <div class='lav-build'>
      <div class='lav-build__title'>Your order</div>
      <div class='lav-build__caption'>Add <span class='lav-build__caption-value'>-</span> products to your box</div>
      <div class='lav-build__caption lav-build__caption-sub'>to get <span>Free Shipping + <span class='lav-build__caption-sub-value'>10</span>% OFF</span></div>

      <div class='lav-build__discounts'>
        <div class='lav-build__discount'>
          <div class='lav-build__discount-tip'>
            <img src='${REPO_DIR}/icon-close.svg' />
            Congratulations! <br>
            You've unlocked <span>10% OFF</span> and <span>Free Shipping</span>
          </div>
          <div class='lav-build__discount-value'>14-27 items → 10% OFF</div>
          <div class='lav-build__discount-caption'>+ Free Shipping</div>
        </div>
        <div class='lav-build__discount'>
          <div class='lav-build__discount-tip'>
            <img src='${REPO_DIR}/icon-close.svg' />
            Congratulations! <br>
            You've unlocked <span>15% OFF</span> and <span>Free Shipping</span>
          </div>
          <div class='lav-build__discount-value'>28-41 items → 15% OFF</div>
          <div class='lav-build__discount-caption'>+ Free Shipping</div>
        </div>
        <div class='lav-build__discount'>
          <div class='lav-build__discount-tip'>
            <img src='${REPO_DIR}/icon-close.svg' />
            Congratulations! <br>
            You've unlocked <span>20% OFF</span> and <span>Free Shipping</span>
          </div>
          <div class='lav-build__discount-value'>42-55 items → 20% OFF</div>
          <div class='lav-build__discount-caption'>+ Free Shipping</div>
        </div>
        <div class='lav-build__discount'>
          <div class='lav-build__discount-tip'>
            <img src='${REPO_DIR}/icon-close.svg' />
            Congratulations! <br>
            You've unlocked <span>25% OFF</span> and <span>Free Shipping</span>
          </div>
          <div class='lav-build__discount-value'>56 + items → 25% OFF</div>
          <div class='lav-build__discount-caption'>+ Free Shipping</div>
        </div>
      </div>

      <div class='lav-build__list'></div>

      <div class='lav-build__checkout-wrap'>
        <button class='button primary blue lav-build__checkout'>Proceed to Checkout</button>
      </div>
    </div>
  `;

  document
    .querySelector('.pageContainer')
    .insertAdjacentHTML('beforeend', lavBuild);

  document.querySelectorAll('.lav-build__discount-tip img').forEach(element => {
    element.addEventListener('click', function () {
      gaEvent('congratulation tooltip closed');
      element.parentElement.style.display = 'none';
    });
  });

  document
    .querySelector('.lav-build__checkout')
    .addEventListener('click', function (e) {
      gaEvent('Proceed to Checkout clicked');
      e.preventDefault();
      location.href = 'https://cerebelly.com/checkout';
      //   document.querySelector('.e-nav .button.primary.red').click();
      //   let observer = new MutationObserver(mutations => {
      //     for (let mutation of mutations) {
      //       for (let node of mutation.addedNodes) {
      //         if (!(node instanceof HTMLElement)) continue;
      //         if (node.querySelector('.action-button-wrapp .action')) {
      //           document.querySelector('.action-button-wrapp .action').click();
      //           observer.disconnect();
      //         }
      //       }
      //     }
      //   });
      //   observer.observe(document.body, { childList: true, subtree: true });
    });

  if (document.querySelector('.info-text .reset')) {
    document
      .querySelector('.info-text .reset')
      .addEventListener('click', function () {
        clickControl();
      });
  }

  createBuildItemsRow(3);
  setItems();
  if (document.querySelector('.e-nav .button.primary.red')) {
    setBasketDiscount(
      parseInt(
        document
          .querySelector('.e-nav .button.primary.red')
          .innerText.split('(')[1]
      )
    );
  }
}

function clickControl(isToggleClick, targetClick, isDown) {
  setTimeout(() => {
    let inBasket = parseInt(
      document
        .querySelector('.e-nav .button.primary.red')
        .innerText.split('(')[1]
    );
    console.log('inBasket', inBasket);

    if (inBasket <= 6) {
      document
        .querySelector('.lav-build__checkout')
        .classList.add('lav-build__checkout_disabled');
    } else {
      document
        .querySelector('.lav-build__checkout')
        .classList.remove('lav-build__checkout_disabled');
    }
    if (
      ((isToggleClick &&
        document.querySelector('.progress-text .action-button') &&
        document.querySelector('.e-header-inner.box-full')) ||
        isDown) &&
      (inBasket == 13 || inBasket == 27 || inBasket == 41 || inBasket == 55)
    ) {
      document.querySelector('.e-page-content-wrap + div').style.opacity = 0;
      // document.querySelector('.e-page-content-wrap').style.opacity = 0.4;

      let observerPlans = new MutationObserver(mutations => {
        for (let mutation of mutations) {
          for (let node of mutation.addedNodes) {
            if (!(node instanceof HTMLElement)) continue;
            if (node.querySelector('.box-blueprint-title .action-button')) {
              node.querySelector('.box-blueprint-title .action-button').click();
            }
            if (node.querySelector('.plans')) {
              toggleBox(isDown);
              observerPlans.disconnect();
              setTimeout(() => {
                if (!isDown) {
                  targetClick.click();
                }
                // document.querySelector(
                //   '.e-page-content-wrap'
                // ).style.opacity = 1;
                document.querySelector(
                  '.e-page-content-wrap + div'
                ).style.opacity = 1;
              }, 400);
            }
          }
        }
      });
      observerPlans.observe(document.body, { childList: true, subtree: true });

      if (!isDown) {
        document.querySelector('.progress-text .action-button').click();
      } else {
        document.querySelector('.e-nav .button.primary.red').click();
      }
    } else {
      setItems();
    }
    setBasketDiscount(inBasket);
  }, 200);
}

function setItems() {
  setTimeout(() => {
    let addedItems = [];
    let productArr = Array.from(
      document.querySelectorAll('.products .product.with-amount')
    );
    let i = 0;

    for (let product of productArr) {
      if (
        addedItems.includes(product.querySelector('.title').innerText.trim())
      ) {
        continue;
      }
      if (!document.querySelectorAll('.lav-build__item')[i]) {
        createBuildItemsRow();
      }
      addedItems.push(product.querySelector('.title').innerText.trim());

      let targetItem = document.querySelectorAll('.lav-build__item')[i];
      targetItem.innerHTML = '';

      let productCount = product.querySelector('.added-container input').value;

      targetItem.insertAdjacentElement(
        'afterbegin',
        product.querySelector('.image img').cloneNode(true)
      );

      targetItem.insertAdjacentHTML(
        'afterbegin',
        `
          <div class='lav-build__item-count'>${productCount}</div>
          <div class='lav-build__control'>
            <button class='lav-build__control-btn lav-build__control-minus'>
              <img class='lav-build__icon-minus' src='${REPO_DIR}/icon-minus.svg'>
              <img class='lav-build__icon-basket' src='${REPO_DIR}/icon-basket.svg'>
            </button>
            <input class='lav-build__control-input' value='${productCount}' disabled>
            <button class='lav-build__control-btn lav-build__control-plus'>
              <img src='${REPO_DIR}/icon-plus.svg'>
            </button>
          </div>`
      );

      checkCountInput(targetItem, productCount);

      targetItem
        .querySelector('.lav-build__control-plus')
        .addEventListener('click', function (e) {
          e.preventDefault();
          gaEvent('+ clicked');
          product.querySelector('.add .notification').click();
        });

      targetItem
        .querySelector('.lav-build__control-minus')
        .addEventListener('click', function (e) {
          e.preventDefault();
          if (product.querySelector('.added-container input').value == '1') {
            console.log(
              'qty:',
              product.querySelector('.added-container input').value
            );
            gaEvent('Item deleted');
          } else {
            gaEvent('- clicked');
          }
          product.querySelector('.remove').click();
        });

      i++;
    }

    while (document.querySelectorAll('.lav-build__item').length > i) {
      document.querySelectorAll('.lav-build__item')[i].innerHTML = '';
      i++;
    }
  }, 100);
}

function setBasketDiscount(count) {
  let ind = '';
  if (count >= 56) {
    ind = 4;
  } else if (count >= 42) {
    ind = 3;
  } else if (count >= 28) {
    ind = 2;
  } else if (count >= 14) {
    ind = 1;
  }
  if (document.querySelector('.lav-build__discount-tip.active')) {
    document.querySelector('.lav-build__discount-tip.active').style.display =
      'none';
    document
      .querySelector('.lav-build__discount-tip.active')
      .classList.remove('active');
  }
  if (ind) {
    document
      .querySelector(
        '.lav-build__discount:nth-child(' + ind + ') .lav-build__discount-tip'
      )
      .classList.add('active');
    document.querySelector(
      '.lav-build__discount:nth-child(' + ind + ') .lav-build__discount-tip'
    ).style.display = 'block';
  }
  setCaption(count);
  if (count >= 14) {
    controlDiscount(true, 1);
  } else {
    controlDiscount(false, 1);
  }
  if (count >= 28) {
    controlDiscount(true, 2);
  } else {
    controlDiscount(false, 2);
  }
  if (count >= 42) {
    controlDiscount(true, 3);
  } else {
    controlDiscount(false, 3);
  }
  if (count >= 56) {
    controlDiscount(true, 4);
    document.querySelector('.lav-build__caption').style.display = 'none';
    document.querySelector('.lav-build__caption-sub').style.display = 'none';
    if (!document.querySelector('.lav-build__caption-temp2')) {
      document.querySelector('.lav-build__discounts').insertAdjacentHTML(
        'beforebegin',
        `<div class='lav-build__caption lav-build__caption-temp1'>Congratulations!</div>
    <div class="lav-build__caption lav-build__caption-sub lav-build__caption-temp2"><span>You got Free Shipping + 25% OFF</span></div>`
      );
    }
  } else {
    controlDiscount(false, 4);
    document.querySelector('.lav-build__caption').style.display = 'block';
    document.querySelector('.lav-build__caption-sub').style.display = 'block';
    if (document.querySelector('.lav-build__caption-temp2')) {
      document.querySelector('.lav-build__caption-temp2').remove();
      document.querySelector('.lav-build__caption-temp1').remove();
    }
  }
}

function setCaption(count) {
  let countEl = document.querySelector('.lav-build__caption-value');
  let percentEl = document.querySelector('.lav-build__caption-sub-value');

  if (count < 14) {
    countEl.innerText = 14 - count;
    percentEl.innerText = 10;
  } else if (count < 28) {
    countEl.innerText = 28 - count;
    percentEl.innerText = 15;
  } else if (count < 42) {
    countEl.innerText = 42 - count;
    percentEl.innerText = 20;
  } else if (count < 56) {
    countEl.innerText = 56 - count;
    percentEl.innerText = 25;
  }
}

function controlDiscount(isActive, i) {
  if (isActive) {
    document
      .querySelector('.lav-build__discount:nth-child(' + i + ')')
      .classList.add('lav-build__discount_active');
  } else {
    document
      .querySelector('.lav-build__discount:nth-child(' + i + ')')
      .classList.remove('lav-build__discount_active');
  }
}

function toggleBox(isDown) {
  console.log(document.querySelectorAll('.plan'));
  let indx = Array.from(document.querySelectorAll('.plan')).findIndex(function (
    el
  ) {
    return el.classList.contains('active');
  });

  if (isDown) {
    indx = parseInt(indx) - 1;
  } else {
    indx = parseInt(indx) + 1;
  }

  console.log(indx, document.querySelectorAll('.plan')[indx], isDown);

  if (document.querySelectorAll('.plan')[indx]) {
    document.querySelectorAll('.plan')[indx].click();
    document.querySelector('.default-close').click();
  } else {
    console.log('max el');
  }

  setItems();
}

function checkCountInput(item, count) {
  if (parseInt(count) == 1) {
    item.querySelector('.lav-build__item-count').style.opacity = 0;
    item.querySelector('.lav-build__icon-minus').style.display = 'none';
    item.querySelector('.lav-build__icon-basket').style.display = 'block';
  } else {
    item.querySelector('.lav-build__icon-minus').style.display = 'block';
    item.querySelector('.lav-build__icon-basket').style.display = 'none';
  }
}

function createBuildItemsRow(rows) {
  let count = 1 * 5;
  if (rows) {
    count = rows * 5;
  }

  while (count > 0) {
    count--;
    document
      .querySelector('.lav-build__list')
      .insertAdjacentHTML('beforeend', "<div class='lav-build__item'></div>");
  }
}
