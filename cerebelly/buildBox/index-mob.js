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
    console.log('eventFire:', eventObj);
  } catch (e) {}
}

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
  .css-11qaux4 .header-progress-wrap {
    display: none;
  }
    .e-nav .e-right-quiz {
      flex-flow: row-reverse;
      justify-content: flex-start!important;
      margin-right: -10px;
    }
    .lav-build {
      position: fixed;
      display: none;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      max-height: 100vh;
      margin-top: 30px;
      z-index: 99;
      text-align: center;
      background-color: #EBF0FF;
      padding: 40px 25px 25px;
      overflow-y: auto;
    }
    .lav-build__close {
      right: 5px;
      top: 30px;
      position: absolute;
      padding: 10px;
    }
    .lav-build__title {
      font-weight: 600;
      font-size: 22px;
      line-height: 30px;
      letter-spacing: 0.004em;
      color: #15206B;
      margin-bottom: 20px;
    }
    .lav-build__caption {
      font-weight: 500;
      font-size: 15px;
      line-height: 20px;
      letter-spacing: 0.002em;
      color: #15226A;
    }
    .lav-build__caption span {
      font-weight: 900;
    }
    .lav-build__discounts {
      margin-bottom: 20px;
    }
    .lav-build__discount {
      font-size: 14px;
      line-height: 22px;
      letter-spacing: 0.003em;
      color: #3856A5;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .lav-build__discount_active {
      position: relative;
      color: #018659;
    }
    .lav-build__discount_active:before {
      content: '';
      width: 20px;
      height: 20px;
      margin-right: 8px;
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
    .lav-build__list-wrap {
      position: relative;
      margin-bottom: 20px;
      margin-top: 20px;
      transition: 0.3s;
    }
    .lav-build__list-wrap.lav-blured:before {
      content: '';
      position: absolute;
      left: -15px;
      right: -15px;
      top: -15px;
      bottom: -15px;
      z-index: 10;
      background: #EBF0FF;
      opacity: 0.7;
      border-radius: 5px;
    }
    .lav-build__list {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      gap: 10px;
    }
    .lav-build__item {
      position: relative;
      background: #FFFFFF;
      border-radius: 3px;
      height: 53px;
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
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 3px;
    }
    .lav-build__modal {
      position: absolute;
      z-index: 10;
      height: 175px;
      width: 175px;
      left: 0;
      right: 0;
      top: 0;
      margin: auto;
      filter: drop-shadow(0px 7px 21px rgba(56, 86, 167, 0.25));
      border-radius: 3px;
    }
    .lav-header__caption {
      position: absolute;
      top: 100%;
      left: 50%;
      width: 160px;
      transform: translateX(-55%) translateY(13px);
      padding: 10px;
      background: #3856A7;
      border-radius: 4px;
      color: #fff;
      font-size: 12px;
      line-height: 1.3;
      letter-spacing: -0.01em;
      text-align: center;
    }
    .lav-header__caption:before {
      content: '';
      position: absolute;
      top: -5px;
      left: 55%;
      transform: translateX(-50%) rotate(45deg);
      border: 5px solid #3856a7;
    }
    .lav-header__caption span {
      font-weight: bold;
    }
    .lav-header__discount-wrap {
      position: relative;
      margin-right: 25px;
    }
    .lav-header__discount-num {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      font-weight: bold;
      font-size: 10px;
      line-height: 12px;
      color: #fff;
    }
    .lav-build__modal>img {
      height: 175px;
      width: 175px;
      border-radius: 3px;
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
      display: none;
      position: absolute;
      bottom: 30px;
      z-index: 1;
      left: 50%;
      transform: translateX(-50%);
      background: #FC4E38;
      border-radius: 31px;
      padding: 6px 12px;
      transition: 0.2s
    }
    .lav-build__modal .lav-build__control {
      display: flex;
    }
    .lav-build__item-close {
      position: absolute;
      right: 17px;
      top: 17px;
      width: 14px!important;
      height: 14px!important;
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
      padding: 1px;
    }
    .lav-build__control-btn img {
      width: 17px;
    }
    .lav-build__control-btn img + img {
      display: none;
    }
    .lav-build__tip {
      display: flex;
      background: rgba(157, 215, 240, 0.2);
      border-radius: 5px;
      padding: 5px 10px;
      text-align: left;
      margin-bottom: 20px;
    }
    .lav-build__tip-caption {
      font-weight: bold;
      font-size: 16px;
      line-height: 23px;
      letter-spacing: 0.005em;
      color: #15226A;
      margin-right: 8px;
    }
    .lav-build__tip-value {
      font-weight: 600;
      font-size: 15px;
      line-height: 23px;
      letter-spacing: 0.003em;
      color: #3856A5;
    }
    .lav-build__control-input {
      background: none;
      outline: none;
      color: #fff;
      text-align: center;
      border: none;
      font-size: 18px;
      width: 60px;
      line-height: 1;
      font-weight: 900;
      padding: 0;
      pointer-events: none;
    }
    // TODO
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

// CODE START ***

// initExp();
function initExp() {
  if (document.querySelector('.lav-build')) {
    return false;
  }
  console.log('initExp');
  gaEvent('loaded');

  if (!document.querySelector('#go-phone-styles')) {
    initStyles();

    // TODO
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
            clickControl(true, e.target, true);
          }
        } else {
          setTimeout(() => {
            clickControl();
          }, 300);
        }
      }
    });
  }

  let lavBuild = `
    <div class='lav-build'>
      <img class='lav-build__close' src='${REPO_DIR}/icon-close2.svg' />
      <div class='lav-build__title'>Your order</div>
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

      <div class='lav-build__caption'>Add <span class='lav-build__caption-value'>0</span> products -</div>
      <div class='lav-build__caption lav-build__caption-sub'>Get <span>Free Shipping + <span class='lav-build__caption-sub-value'>10</span>% OFF</span></div>

      <div class='lav-build__list-wrap'>
        <div class='lav-build__list'></div>
      </div>

      <div class='lav-build__tip'>
        <div class='lav-build__tip-caption'>Tip: </div>
        <div class='lav-build__tip-value'>Your quantity selected should last your baby 14 days.</div>
      </div>


      <div class='lav-build__checkout-wrap'>
        <button class='button primary red lav-build__checkout'>Proceed to Checkout</button>
      </div>
    </div>
  `;

  document
    .querySelector('.pageContainer')
    .insertAdjacentHTML('beforeend', lavBuild);

  document
    .querySelector('.lav-build__close')
    .addEventListener('click', function () {
      document.querySelector('.lav-build').style.display = 'none';
      document.querySelector('.e-header-modal').style.display = 'block';
      setCaption(
        parseInt(
          document
            .querySelector('.e-nav .button.primary.red')
            .innerText.split('(')[1]
        )
      );
    });

  document
    .querySelector('.lav-build__checkout')
    .addEventListener('click', function (e) {
      gaEvent('Proceed to Checkout tapped');
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

  let headerDiscountEl = `
  <div class='lav-header__discount-wrap'>
    <img class='lav-header__discount' src='${REPO_DIR}/icon-discount.svg' />
    <img class='lav-header__discount-value' src='${REPO_DIR}/icon-discount-value.svg' />
    <span class='lav-header__discount-num'>-</span>
    <div class='lav-header__caption'>
      <div class='lav-header__caption-process'>
        Add <span class='lav-header__caption-value'>13</span> more products <br> to your order to get <br> <span class='lav-header__caption-sub'>Free Shipping + <span class='lav-header__caption-sub-value'>10</span>% OFF</span>
      </div>
      <div class='lav-header__caption-full'>
        Congratulations! <br> <span class='lav-header__caption-sub'>You got Free Shipping + 25% OFF</span>
      </div>
    </div>
  </div>
`;

  document
    .querySelector('.e-nav .e-right-quiz')
    .insertAdjacentHTML('beforeend', headerDiscountEl);

  checkHeaderDiscount();

  document
    .querySelector('.lav-header__discount-wrap')
    .addEventListener('click', function () {
      if (document.querySelector('.lav-build__modal')) {
        document.querySelector('.lav-build__modal').remove();
      }
      document
        .querySelector('.lav-build__list-wrap')
        .classList.remove('lav-blured');
      document.querySelector('.lav-build').style.display = 'block';
      document.querySelector('.e-header-modal').style.display = 'none';
      setCaption(
        parseInt(
          document
            .querySelector('.e-nav .button.primary.red')
            .innerText.split('(')[1]
        )
      );
    });

  if (document.querySelector('.e-nav .button.primary.red')) {
    setBasketDiscount(
      parseInt(
        document
          .querySelector('.e-nav .button.primary.red')
          .innerText.split('(')[1]
      )
    );

    if (
      parseInt(
        document
          .querySelector('.e-nav .button.primary.red')
          .innerText.split('(')[1]
      ) <= 6
    ) {
      document
        .querySelector('.lav-build__checkout')
        .classList.add('lav-build__checkout_disabled');
    } else {
      document
        .querySelector('.lav-build__checkout')
        .classList.remove('lav-build__checkout_disabled');
    }
  }
}

function checkHeaderDiscount() {
  if (
    parseInt(
      document
        .querySelector('.e-nav .button.primary.red')
        .innerText.split('(')[1]
    )
  ) {
    document.querySelector('.lav-header__discount-value').style.display =
      'block';
    document.querySelector('.lav-header__discount-num').style.display = 'block';
    document.querySelector('.lav-header__discount-num').innerText = parseInt(
      document
        .querySelector('.e-nav .button.primary.red')
        .innerText.split('(')[1]
    );
    document.querySelector('.lav-header__discount').style.display = 'none';
  } else {
    document.querySelector('.lav-header__discount-value').style.display =
      'none';
    document.querySelector('.lav-header__discount-num').style.display = 'none';
    document.querySelector('.lav-header__discount').style.display = 'block';
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
    checkHeaderDiscount();
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

      targetItem.addEventListener('click', function () {
        if (document.querySelector('.lav-build__modal')) {
          document.querySelector('.lav-build__modal').remove();
          document
            .querySelector('.lav-build__list-wrap')
            .classList.remove('lav-blured');
        }
        gaEvent('Item selected (Edit controls)');
        document
          .querySelector('.lav-build__list-wrap')
          .classList.add('lav-blured');

        let cloneItem = targetItem.cloneNode(true);

        cloneItem.classList.add('lav-build__modal');
        cloneItem.classList.remove('lav-build__item');

        cloneItem.querySelector('.lav-build__item-count').remove();

        cloneItem.insertAdjacentHTML(
          'afterbegin',
          ` <img class='lav-build__item-close' src='${REPO_DIR}/icon-close2.svg' />`
        );

        cloneItem
          .querySelector('.lav-build__item-close')
          .addEventListener('click', function () {
            document.querySelector('.lav-build__modal').remove();
            document
              .querySelector('.lav-build__list-wrap')
              .classList.remove('lav-blured');
          });

        document
          .querySelector('.lav-build__list-wrap')
          .insertAdjacentElement('afterbegin', cloneItem);

        cloneItem
          .querySelector('.lav-build__control-plus')
          .addEventListener('click', function (e) {
            e.preventDefault();
            gaEvent('+ tapped');
            product.querySelector('.add .notification').click();
            let timeoutTime;
            if (
              document.querySelector('.lav-build__caption-value').innerText ==
              '1'
            ) {
              timeoutTime = 1200;
              console.log('big timeout');
            } else {
              timeoutTime = 150;
            }
            setTimeout(() => {
              if (product.querySelector('input')) {
                console.log('get input');
                cloneItem.querySelector('.lav-build__control-input').value =
                  product.querySelector('input').value;
              } else {
                console.log('remove item need');
              }

              if (
                cloneItem.querySelector('.lav-build__control-input').value == 1
              ) {
                document.querySelector(
                  '.lav-build__modal .lav-build__control-btn img'
                ).style.display = 'none';
                document.querySelector(
                  '.lav-build__modal .lav-build__control-btn img + img'
                ).style.display = 'block';
              } else {
                document.querySelector(
                  '.lav-build__modal .lav-build__control-btn img'
                ).style.display = 'block';
                document.querySelector(
                  '.lav-build__modal .lav-build__control-btn img + img'
                ).style.display = 'none';
              }
            }, timeoutTime);
          });

        cloneItem
          .querySelector('.lav-build__control-minus')
          .addEventListener('click', function (e) {
            e.preventDefault();
            if (product.querySelector('.added-container input').value == '1') {
              document.querySelector('.lav-build__modal').remove();
              document
                .querySelector('.lav-build__list-wrap')
                .classList.remove('lav-blured');
              console.log(
                'qty:',
                product.querySelector('.added-container input').value
              );
              gaEvent('Item deleted');
            } else {
              gaEvent('- tapped');
            }
            product.querySelector('.remove').click();
            setTimeout(() => {
              if (product.querySelector('input')) {
                cloneItem.querySelector('.lav-build__control-input').value =
                  product.querySelector('input').value;

                if (
                  cloneItem.querySelector('.lav-build__control-input').value ==
                  1
                ) {
                  document.querySelector(
                    '.lav-build__modal .lav-build__control-btn img'
                  ).style.display = 'none';
                  document.querySelector(
                    '.lav-build__modal .lav-build__control-btn img + img'
                  ).style.display = 'block';
                } else {
                  document.querySelector(
                    '.lav-build__modal .lav-build__control-btn img'
                  ).style.display = 'block';
                  document.querySelector(
                    '.lav-build__modal .lav-build__control-btn img + img'
                  ).style.display = 'none';
                }
              } else {
                console.log('remove item need');
              }
            }, 150);
          });
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
    document.querySelector('.lav-header__caption-process').style.display =
      'none';
    document.querySelector('.lav-header__caption-full').style.display = 'block';

    if (!document.querySelector('.lav-build__caption-temp2')) {
      document.querySelector('.lav-build__discounts').insertAdjacentHTML(
        'afterend',
        `<div class='lav-build__caption lav-build__caption-temp1'>Congratulations!</div>
         <div class="lav-build__caption lav-build__caption-sub lav-build__caption-temp2"><span>You got Free Shipping + 25% OFF</span></div>`
      );
    } else {
      document.querySelector('.lav-build__caption-temp1').style.display =
        'block';
      document.querySelector('.lav-build__caption-temp2').style.display =
        'block';
    }
  } else {
    controlDiscount(false, 4);
    document.querySelector('.lav-build__caption').style.display = 'block';
    document.querySelector('.lav-build__caption-sub').style.display = 'block';
    document.querySelector('.lav-header__caption-process').style.display =
      'block';
    document.querySelector('.lav-header__caption-full').style.display = 'none';
    if (document.querySelector('.lav-build__caption-temp2')) {
      document.querySelector('.lav-build__caption-temp2').remove();
      document.querySelector('.lav-build__caption-temp1').remove();
    }
  }
}

function setCaption(count) {
  let countEl = document.querySelector('.lav-build__caption-value');
  let percentEl = document.querySelector('.lav-build__caption-sub-value');
  let countTwoEl = document.querySelector('.lav-header__caption-value');
  let percentTwoEl = document.querySelector('.lav-header__caption-sub-value');
  if (
    count == 0 ||
    document.querySelector('.lav-build').style.display == 'block'
  ) {
    document.querySelector('.lav-header__caption').style.display = 'none';
  } else {
    document.querySelector('.lav-header__caption').style.display = 'block';
  }

  if (count < 14) {
    countEl.innerText = 14 - count;
    countTwoEl.innerText = 14 - count;
    percentEl.innerText = 10;
    percentTwoEl.innerText = 10;
  } else if (count < 28) {
    countEl.innerText = 28 - count;
    countTwoEl.innerText = 28 - count;
    percentEl.innerText = 15;
    percentTwoEl.innerText = 15;
  } else if (count < 42) {
    countEl.innerText = 42 - count;
    countTwoEl.innerText = 42 - count;
    percentEl.innerText = 20;
    percentTwoEl.innerText = 20;
  } else if (count < 56) {
    countEl.innerText = 56 - count;
    countTwoEl.innerText = 56 - count;
    percentEl.innerText = 25;
    percentTwoEl.innerText = 25;
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
