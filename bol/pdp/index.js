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

let isInitExp = false;
const REPO_DIR = 'https://flopsi69.github.io/crs/bol/pdp';

// let observerGlobal = new MutationObserver(mutations => {
//   for (let mutation of mutations) {
//     for (let node of mutation.addedNodes) {
//       // отслеживаем только узлы-элементы, другие (текстовые) пропускаем
//       if (!(node instanceof HTMLElement)) continue;
//       console.log(node);
//       if (
//         node.querySelector('.pageContainer .container') &&
//         node.querySelector('.products') &&
//         node.querySelector('.category') &&
//         !isInitExp
//       ) {
//         initExp();
//         // observerGlobal.disconnect();
//       }
//     }
//   }
// });

// observerGlobal.observe(document.body, { childList: true, subtree: true });

function initStyles() {
  /* STYLES insert start */
  let stylesList = `
    .prod_class .title h1 {
      text-align: center;
      font-weight: bold;
      font-size: 22px;
      line-height: 26px;
      color: #231F20;
      margin-top: 15px;
      margin-bottom: 35px;
    }
    .form-add-to-cart .price {
      position: relative;
      padding-right: 90px;
    }
    .form-add-to-cart .rte {
      margin-top: 30px;
    }
    .money {
      white-space: nowrap;
    }
    #productPrice-manual {
      padding-top: 5px;
      display: inline-block;
    }
    .quantity {
      padding-right: 0;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .quantity>span {
      display: block;
      float: none;
      width: 100%;
    }
    .quantity>.qty {
      float: none;
    }
    .lav-free-shipping {
      font-weight: bold;
      font-size: 14px;
      line-height: 1;
      text-align: center;
      color: #333333;
      border: 1px solid #7CB305;
      border-radius: 12px;
      padding: 2px 7px;
    }
    .lav-discount {
      position: absolute;
      right: -15px;
      top: 0;
    }
    .lav-discount__value {
      background: #A8071A;
      border-radius: 3px;
      padding: 8px 10px;
      font-weight: bold;
      font-size: 16px;
      line-height: 1;
      text-align: center;
      color: #FFFFFF;
      margin-bottom: 8px;
    }
    .lav-discount__shipping {
      font-weight: bold;
      font-size: 13px;
      line-height: 1;
      text-align: center;
      color: #7CB305;
    }
    .lav-total {
      display: flex;
      align-items: center;
    }
    .lav-total__caption {
      margin-right: 11px;
      font-weight: bold;
      font-size: 14px;
      line-height: 1;
      color: #5F6262;
    }
    .lav-total__value {
      font-weight: bold;
      font-size: 24px;
      color: #AB2216;
    }
    .lav-options {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 32px 5px;
      border-top: 1px solid #DFDFDF;
      border-bottom: 1px solid #DFDFDF;
    }
    .lav-options__list {
      display: flex;
    }
    .lav-options__caption {
      font-size: 22px;
      line-height: 26px;
      color: #333333;
    }
    .lav-options__item {
      text-align: center;
      padding: 12px 18px;
      background: #FAFAFA;
      border: 1px solid #096DD9;
      border-radius: 6px;
      font-size: 16px;
      line-height: 19px;
      color: #096DD9;
      width: 195px;
      max-width: 100%;
      transition: 0.35s;
    }
    .lav-options__item:hover {
      background-color: #eae8e8;
    }
    .lav-options__item + .lav-options__item {
      margin-left: 30px;
    }
    .lav-info {
      display: flex;
      justify-content: space-between;
    }
    .lav-info__block {

    }
    .lav-info__block-title {
      font-weight: bold;
      font-size: 22px;
      line-height: 26px;
      text-align: center;
      color: #000000;
    }
    .lav-feautures__wrap {
      max-width: 460px;
      width: 100%;
    }
    .lav-combo {
      max-width: 335px;
      width: 100%;
    }
  `;

  let styles = document.createElement('style');
  styles.id = 'go-phone-styles';
  styles.innerHTML = stylesList;
  document.body.appendChild(styles);
}

// connect to DOM
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
  initStyles();
  changeDom();
  if ($('#comparePrice-manual').length) {
    setDiscount();
    $('#productPrice-manual').html(
      $('#productPrice-manual')
        .html()
        .replace(
          '&amp; Free Shipping',
          '<span class="lav-free-shipping">Free Shipping</span>'
        )
    );
  }
  initStaticBlock();
}

function changeDom() {
  $('#main-product-image')
    .parent()
    .removeClass('col-lg-8')
    .next()
    .removeClass('col-lg-4');
}

function setDiscount() {
  let discountVal = $('#comparePrice-manual').text().trim().replace('$', '');

  discountVal =
    100 -
    ($('#productPrice-manual .money .money').text().trim().replace('$', '') *
      100) /
      discountVal;
  let disocuntEl = `
   <div class='lav-discount'>
     <div class='lav-discount__value'>${discountVal}% OFF</div>
     <div class='lav-discount__shipping'>Ready to ship</div>
   </div>
  `;

  $('.form-add-to-cart .price').append(disocuntEl);

  let totalEl = `
    <div class="lav-total">
      <div class="lav-total__caption">Total price :</div>
      <div class="lav-total__value">$0</div>
    </div>
  `;
  $('.quantity').append(totalEl);
  setTotalPrice();

  $('.qty').on('click', setTotalPrice);
  $('.form-add-to-cart .text-center img').css('max-width', '350px');
}

function setTotalPrice() {
  let totalPrice =
    $('#productPrice-manual .money .money').text().trim().replace('$', '') *
    $('#quantity').val();

  $('.lav-total__value').text('$' + totalPrice.toFixed(2));
}

function initStaticBlock() {
  let blockEl = `
    <div class='lav-static'>
      <div class='lav-options'>
        <div class='lav-options__caption'>See other options</div>
        <div class='lav-options__list'>
          <div class='lav-options__item'>20 inch <br> double row</div>
          <div class='lav-options__item'>30 inch <br> double row</div>
          <div class='lav-options__item'>40 inch <br> double row</div>
        </div>
      </div>

      <div class='lav-info'>
        <div class='lav-info__block lav-feautures__wrap'>
          <div class='lav-info__block-title'>Key Features</div>
          <div class='lav-feautures'>
            <div class='lav-feautures__item'>
              <div class='lav-feautures__icon'>
                <img src='${REPO_DIR}/img/features-1.svg' />
              </div>
              <div class='lav-feautures__caption'>50,000+ Hour Lifespan</div>
            </div>
            <div class='lav-feautures__item'>
              <div class='lav-feautures__icon'>
                <img src='${REPO_DIR}/img/features-2.svg' />
              </div>
              <div class='lav-feautures__caption'>9-36  V DC Voltage Range</div>
            </div>
            <div class='lav-feautures__item'>
              <div class='lav-feautures__icon'>
                <img src='${REPO_DIR}/img/features-3.png' />
              </div>
              <div class='lav-feautures__caption'>Durable UV Polyester Poweder Coat</div>
            </div>
            <div class='lav-feautures__item'>
              <div class='lav-feautures__icon'>
                <img src='${REPO_DIR}/img/features-4.svg' />
              </div>
              <div class='lav-feautures__caption'>Integrated Thermal Mgmt. System</div>
            </div>
            <div class='lav-feautures__item'>
              <div class='lav-feautures__icon'>
                <img src='${REPO_DIR}/img/features-5.svg' />
              </div>
              <div class='lav-feautures__caption'>Impact Resistant Polycarbonate Lens</div>
            </div>
            <div class='lav-feautures__item'>
              <div class='lav-feautures__icon'>
                <img src='${REPO_DIR}/img/features-6.svg' />
              </div>
              <div class='lav-feautures__caption'>IP68 & IP69 Compliant Dust / Water Ingress</div>
            </div>
          </div>
        </div>

        <div class='lav-info__block lav-combo__wrap'>
          <div class='lav-info__block-title'>Max performance with Combo optics and 5W</div>
          <div class='lav-combo'>
            <div class='lav-combo__image'>
              <img src='${REPO_DIR}/img/combo-light.png' />
            </div>
            <div class='lav-combo__info'>
              <div class='lav-combo__title'>COMBO with 5Wprovides:</div>
              <div class='lav-combo__green'>Over 75 % more 
              Light & Visibility</div>
              <div class='lav-combo__vis'>Visibility up to <strong>780m</strong></div>
              <div class='lav-combo__list-caption'>Best for:</div>
              <ul class='lav-combo__list'>
                <li>- Marine</li>
                <li>- Hunting</li>
                <li>- Off-road</li>
                <li>- Heavy Machinery</li>
                <li>- Military</li>
              </ul>
              <div class='lav-combo__zoom'><img src='${REPO_DIR}/img/ico-4.svg'>Click to zoom</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  `;

  $('.items-info').prepend(blockEl);
}
