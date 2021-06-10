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
    #main-product-image {
      position: relative;
    }
    .lav-zoom {
      position: absolute;
      pointer-events: none;
      right: 13px;
      bottom: 18px;
    }
    .items-info > img {
      display: none;
    }
    .prod_class .title h1 {
      text-align: center;
      font-weight: bold;
      font-size: 22px;
      line-height: 26px;
      color: #231F20;
      margin-top: 15px;
      margin-bottom: 35px;
    }
    .text-center.two-pic {
      display: none; 
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
      margin-top: 40px;
      margin-bottom: 37px;
    }
    .lav-info__block-title {
      font-weight: bold;
      font-size: 22px;
      line-height: 26px;
      text-align: center;
      color: #000000;
      margin-bottom: 40px;
    }
    .lav-feautures {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 50px 55px;
    }
    .lav-feautures__wrap {
      max-width: 510px;
      width: 100%;
      text-align: center;
    }
    .lav-combo {
      display: flex;
    }
    .lav-combo__wrap {
      max-width: 335px;
      width: 100%;
    }
    .lav-combo__info {
      padding-left: 20px;
      font-size: 16px;
      line-height: 19px;
      color: #231F20;
    }
    .lav-combo__title {
      font-weight: bold;
    }
    .lav-combo__green {
      margin: 10px 0;
      font-weight: bold;
      color: #7CB305;
    }
    .lav-combo__list-caption {
      font-weight: bold;
      margin-bottom: 5px;
      margin-top: 10px;
    }
    .lav-combo__list li + li {
      margin-top: 3px;
    }
    .lav-combo__zoom {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      line-height: 21px;
      color: #096DD9;
      border: 1px solid #DFDFDF;
      border-radius: 6px;
      padding: 8px 12px;
      cursor: pointer;
      transition: 0.2s;
    }
    .lav-combo__zoom img {
      margin-right: 8px;
      width: 20px;
      height: 20px;
    }
    .lav-combo__zoom:hover {
      background: #e6e2e2;
    }
    .lav-feautures__icon {
      margin-bottom: 15px;
      height: 65px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .lav-feautures__icon img {
      max-width: 100%;
      max-height: 100%;
    }
    .lav-feautures__caption {
      font-size: 15px;
      line-height: 18px;
      color: #5F6262;      
    }
    .lav-static img {
      width: auto;
    }
    .lav-compability {
      border: 1px solid #DFDFDF;
      border-radius: 6px;
      padding: 18px;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    .lav-compability__caption {
      font-weight: bold;
      font-size: 22px;
      line-height: 1;
      color: #000000;
    }
    .lav-compability__call {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 10px 18px 8px;
      font-weight: bold;
      font-size: 16px;
      line-height: 1;
      color: #096DD9;
      border: 1px solid #096DD9;
      border-radius: 6px;
      transition: 0.2s;
    }
    .lav-compability__call:hover {
      background: #e4e4e4;
    }
    .lav-compability__call img {
      margin-left: 20px;
      width: 28px;
    }
    .lav-pluses {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 38px;
      margin: 48px 0;
      font-size: 20px;
      line-height: 23px;
      color: #000000;
    }
    .lav-pluses__item {
      max-width: 340px;
      display: flex;
      align-items: center;
    }
    .lav-pluses img {
      margin-right: 32px;
    }
    .lav-spec {
      border-top: 1px solid #DFDFDF;
      padding-top: 47px;
    }
    .lav-spec__title {
      margin-bottom: 40px;
      font-weight: bold;
      font-size: 22px;
      line-height: 26px;
      text-align: center;
      color: #000000;
    }
    .lav-spec__table {
      border-radius: 6px;
      text-align: center;
      width: 100%;
    }
    .lav-spec__table-wrap {
      // overflow: hidden;
      padding-left: 40px;
    }
    .lav-spec__table td {
      font-size: 14px;
      line-height: 16px;
      color: #4C4F4F;
      padding: 12px;
      text-align: center;
      border: 1px solid #C4C4C4;
    }

    .lav-spec__table tr:first-child td {
      background-color: #333333;
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
      color: #FFFFFF;
      padding: 10px;
      text-align: center;
    }
    
    .lav-spec__table td:first-child {
      font-weight: bold;
    }
    .lav-spec-sub {
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      color: #333333;
      margin-top: 40px;  
    }
    .lav-quest {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-top: 40px;
    }
    .lav-quest__form-wrap {
      max-width: 420px;
      width: 100%;
    }
    .lav-quest__label {
      display: inline-block;
      background: #333;
      border-radius: 6px 6px 0 0;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      color: #fff;
      padding: 9px 10px 7px;
    }
    #content .lav-quest__area {
      border: 1px solid #333;
      border-top-left-radius: 0;
      border-radius: 0 6px 6px 6px;
      min-height: 91px;
      height: auto;
      font-size: 16px;
      line-height: 19px;
      color: #575757;
      margin: 0 0 11px;
      resize: none;
    }
    .lav-quest__form input {
      border: 1px solid #333;
      border-radius: 6px;
      width: 100%;
      height: 42px;
      padding: 0 14px;
      font-size: 16px;
      line-height: 19px;
      color: #575757;
      margin-bottom: 11px;
    }
    .lav-quest__btn {
      background: #5b9400;
      border: 1px solid #c4c4c4;
      border-radius: 6px;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      color: #fff;
    }
    .lav-quest__call {
      border: 1px solid #DFDFDF;
      border-radius: 6px;
      padding: 19px;
      max-width: 380px;
      width: 100%;
    }
    .lav-quest__call-title {
      text-align: center;
      margin-bottom: 12px;
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
      color: #333333;
      max-width: 260px;
      margin-left: auto;
      margin-right: auto;
    }
    .lav-quest__call-btn {
      border: 1px solid #333;
      border-radius: 6px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 50px;
      padding: 0 15px;
      font-size: 16px;
      line-height: 19px;
      color: #333333;
      transition: 0.2s;
    }
    .lav-quest__call-btn:hover {
      background: #e4e4e4;
    }
    .lav-quest__call-btn img {
      filter: brightness(0);
    }
    .lav-inc {
      display: flex;
      justify-content: space-between;
      padding: 40px 0;
      border-top: 1px solid #DFDFDF;
      border-bottom: 1px solid #DFDFDF;
      margin-top: 40px;
    }
    .lav-inc__block {
      width: 48%;
    }
    .lav-inc__block-title {
      font-weight: bold;
      font-size: 18px;
      line-height: 21px;
      text-transform: uppercase;
      color: #5B9400;
      margin-bottom: 15px;
    }
    .lav-inc__list {
      font-size: 16px;
      line-height: 1;
      color: #000000;
      list-style: disc;
      line-height: 1.5;
      padding-left: 22px;
    }
    .lav-inc__list li {
      list-style: disc;
      max-width: 350px;
    }
    .lav-inc__list-blue {
      color: #096DD9;
    }
    .lav-inc__list a:hover {
      opacity: 0.5;
    }
    .lav-inc__list li + li{
      margin-top: 10px;
    }
    .lav-descr {
      font-size: 16px;
      line-height: 28px;
      color: #333;
    }
    .lav-descr p {
      margin-top: 5px;
    }
    .lav-descr__title {
      font-weight: bold;
      font-size: 22px;
      line-height: 26px;
      text-align: center;
      color: #333333;
      margin-bottom: 20px;
    }
    .lav-descr img {
      max-width: 100%;
      margin: 12px 0;
    }
    .lav-descr__block + .lav-descr__block {
      padding-top: 40px;
      margin-top: 25px;
      border-top: 1px solid #DFDFDF;
    }
    .lav-spec__table td {
      position: relative;
    }
    .lav-spec__tip {
      position: absolute;
      top: 50%;
      left: -35px;
      transform: translateY(-50%);
      z-index: 99;
    }
    .lav-spec__icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 19px;
      height: 19px;
      border-radius: 50%;
      background: #5b9400;
      color: #fff;
      z-index: 9;
      transition: 0.2s;
      cursor: pointer;
    }
    .lav-spec__icon:hover {
      opacity: 0.5;
    }
    .lav-spec__tip-title {
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
      color: #5B9400;
    }
    .lav-spec__tip-descr {
      font-size: 16px;
      line-height: 19px;
      color: #000000;
      font-weight: 400;
      margin-top: 10px;
    }
    .lav-spec__tip-body {
      display: none;
      border: 1px solid #7cb305;
      box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.11);
      border-radius: 6px;
      position: absolute;
      left: 35px;
      top: 50%;
      color: #000;
      background: #fff;
      width: 330px;
      padding: 13px;
      transform: translateY(-50%);
      text-align: left;
      font-size: 16px;
      font-weight: 400;
      line-height: 19px;
    }
    .lav-spec__tip-body:before, .lav-spec__tip-body:after {
      content: "";
      position: absolute;
      left: -20px;
      top: 39%;
      border: 10px solid transparent;
      border-top: 10px solid #7cb305;
      transform: rotate(90deg);
    }
    .lav-spec__tip-body::after {
      border-top: 10px solid #fff;
      left: -19px;
    }
    .lav-spec__tip-close {
      color: #7cb305;
      position: absolute;
      top: 2px;
      right: 8px;
      opacity: 1;
      display: block;
      z-index: 9;
      cursor: pointer;
      font-size: 21px;
      font-weight: 700;
      line-height: 1;
      text-shadow: 0 1px 0 #fff;
      transition: 0.2s;
      cursor: pointer;
    }
    .lav-spec__tip-close:hover {
      opacity: 0.4;
    }
    .lav-option__wrap {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .lav-option__caption {
      font-size: 15px;
      line-height: 18px;
      color: #096DD9;
      cursor: pointer;
      transition: 0.2s;
    }
    .lav-option__caption:hover {
      color: #0b54a2;
      opacity: 0.7;
    }
    .selector-wrapper .selector-wrapper + .selector-wrapper {
      margin-top: 20px!important;
    }
    .modal {
      position: fixed;
      display: flex;
      padding: 15px;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1050;
      outline: 0;
      overflow: hidden;
      overflow-x: hidden;
      overflow-y: auto;
      background: rgba(22, 22, 22, 0.39);
      transition: 0.3s;
      pointer-events: none;
      opacity: 0;
    }
    .modal_active {
      opacity: 1;
      pointer-events: auto;
    }
    .modal__body {
      position: relative;
      margin: auto;
      display: none;
      max-width: 350px;
      width: 100%;
      background-color: #FFFFFF;
      box-shadow: 0px 4px 21px rgba(0, 0, 0, 0.07);
      border-radius: 6px;
    }
    .modal__close {
      border-radius: 50%;
      background-color: #fff;
      outline: none;
      line-height: 0;
      cursor: pointer;
      padding: 5px;
      transition: 0.2s;
      border: none;
    }
    .modal__close-icon {
      width: 10px;
      height: 10px;
      fill: #333333;
    }
    .modal__close:hover {
      background: red;
    }
    .modal__head {
      background: #333333;
      padding: 13px 18px;
      font-weight: bold;
      font-size: 15px;
      line-height: 18px;
      color: #FFFFFF;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 6px 6px 0 0;
    }
    .modal__inner-block {
      padding: 17px 30px 17px 20px;
      font-size: 16px;
      line-height: 24px;
    }
    .modal__inner-block span {
      color: #7CB305;
      font-weight: 700;
    }
    .modal__inner-block + .modal__inner-block {
      border-top: 1px solid #C4C4C4;
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
  initDescr();
  initOptions();
  initModal();
}

function changeDom() {
  $('#main-product-image')
    .parent()
    .removeClass('col-lg-8')
    .next()
    .removeClass('col-lg-4');

  $('#main-product-image').append(
    `<img class='lav-zoom' src='${REPO_DIR}/img/ico-4.svg'>`
  );
}

function setDiscount() {
  let discountVal = $('#comparePrice-manual').text().trim().replace('$', '');

  discountVal =
    100 -
    ($('#productPrice-manual .money').text().trim().replace('$', '') * 100) /
      discountVal;

  console.log(discountVal);
  discountVal = Math.round(discountVal);
  console.log(discountVal);

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

  $('.qty a').on('click', setTotalPrice);
  $('.form-add-to-cart .text-center img').css('max-width', '350px');
}

function setTotalPrice() {
  let totalPrice =
    $('#productPrice-manual .money').text().trim().replace('$', '') *
    $('#quantity').val();

  $('.lav-total__value').text('$' + totalPrice.toFixed(2));
}

function initStaticBlock() {
  let blockEl = `
    <div class='lav-static'>
      <div class='lav-options'>
        <div class='lav-options__caption'>See other options</div>
        <div class='lav-options__list'>
          <a href='https://www.blackoakled.com/collections/20-inch-led-light-bars/20-Inch' class='lav-options__item'>20 inch <br> double row</a>
          <a href='https://www.blackoakled.com/collections/30-inch-led-light-bars/30-Inch' class='lav-options__item'>30 inch <br> double row</a>
          <a href='https://www.blackoakled.com/collections/40-inch-led-light-bars/40-Inch' class='lav-options__item'>40 inch <br> double row</a>
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
          <div class='lav-info__block-title'>Max performance with <br> Combo optics and 5W</div>
          <div class='lav-combo'>
            <div class='lav-combo__image'>
              <img src='${REPO_DIR}/img/combo-light.png' />
            </div>
            <div class='lav-combo__info'>
              <div class='lav-combo__title'>COMBO with 5Wprovides:</div>
              <div class='lav-combo__green'>Over 75 % more  <br> Light & Visibility</div>
              <div class='lav-combo__vis'>Visibility up to <strong>780m</strong></div>
              <div class='lav-combo__list-caption'>Best for:</div>
              <ul class='lav-combo__list'>
                <li>- Marine</li>
                <li>- Hunting</li>
                <li>- Off-road</li>
                <li>- Heavy Machinery</li>
                <li>- Military</li>
              </ul>
              <div class='lav-combo__zoom modal-trigger' data-modal-target='.modal-zoom'><img src='${REPO_DIR}/img/icon-zoom.svg'>Click to zoom</div>
            </div>
          </div>
        </div>
      </div>

      <div class='lav-compability'>
        <div class='lav-compability__caption'>Compatibility</div>
        <a href='tel:18003481287' class='lav-compability__call'>
          Call us 800-348-1287 to assist
          <img src='${REPO_DIR}/img/ico-3.svg'>
        </a>
      </div>

      <div class='lav-pluses'>
        <div class='lav-pluses__item'>
          <img src='${REPO_DIR}/img/production-1.svg'>
          Owned and operated in Sarasota FL
        </div>
        <div class='lav-pluses__item'>
          <img src='${REPO_DIR}/img/production-3.svg'>
          Limited Lifetime Warranty
        </div>
        <div class='lav-pluses__item'>
          <img src='${REPO_DIR}/img/production-2.svg'>
          Limited Lifetime Warranty
        </div>
        <div class='lav-pluses__item'>
          <img src='${REPO_DIR}/img/production-4.svg'>
         In Stock and Ready to Ship
        </div>
      </div>
      
      <div class='lav-spec'>
        <div class='lav-spec__title'>Specifications</div>
        <div class='lav-spec__table-wrap'>
          <table class='lav-spec__table'>
            <thead>
              <tr>
                <th>5 Watt / Osram</th>
                <th>5 Watt / Osram</th>
                <th>5 Watt / Osram</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Total Wattage</td>
                <td>100w</td>
                <td>60w</td>
              </tr>
              <tr>
                <td>Total Wattage</td>
                <td>100w</td>
                <td>60w</td>
              </tr>
              <tr>
                <td>Total Wattage</td>
                <td>100w</td>
                <td>60w</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div class='lav-spec-sub'>Our lights are built to run off of 9-36V DC, but we offer power converters for 110V AC</div>

      <div class='lav-quest'>
        <div class="lav-quest__form-wrap">
          <div class='lav-quest__label'>Have a question?</div>

          <form class="lav-quest__form">
            <textarea class='lav-quest__area' name="lav-quest__area" placeholder="Type here and we’ll contact you the same day" required=""></textarea>
            <input type="email" name="question-email" placeholder="Email to respond" required="">
            <button class="btn btn-success lav-quest__btn" type="submit" value="Submit">Submit</button>
          </form>
        </div>

        <div class='lav-quest__call'>
          <div class='lav-quest__call-title'>We are here to assist in choosing the best fit </div>
          <a href='tel:18003481287' class='lav-quest__call-btn'>
            <span>Call us <b>800-348-1287</b> to assist</span>
            <img src='${REPO_DIR}/img/ico-3.svg'>
          </a>
        </div>
      </div>

      <div class='lav-inc'>
        <div class='lav-inc__block'>
          <div class='lav-inc__block-title'>What is included in the package?</div>
          <ul class='lav-inc__list lav-inc__list-blue'>
            <li>Mounting Hardware</li>
            <li>Black Powder Coated, L-Shape </li>
            <li>Brackets</li>
            <li>Dash Controller & Under Dash Module with Wiring Harness and Hardware</li>
          </ul>
        </div>
        <div class='lav-inc__block'>
          <div class='lav-inc__block-title'>SOLD SEPARATELY</div>
          <ul class='lav-inc__list'>
            <li>Underside Low-Profile Mounts</li>
            <li>Light Covers</li>
          </ul>
        </div>
      </div>
    </div>
  `;

  $('.items-info').prepend(blockEl);
}

function initDescr() {
  $('.prod_desc')
    .before('<div class="lav-descr"></div>')
    .parent()
    .removeClass('col-lg-10')
    .addClass('col-lg-12')
    .next()
    .remove();
  let tabTitle;
  $('.prod_desc .ui-tabs-nav .ui-tabs-anchor').each((i, el) => {
    tabTitle = $(el).text().trim();
    if (
      tabTitle.toLowerCase() == 'overview' ||
      tabTitle.toLowerCase() == 'video' ||
      tabTitle.toLowerCase() == 'product q+a'
    ) {
      let descrBlock = $(document.createElement('div'))
        .addClass('lav-descr__block')
        .append(
          '<div class="lav-descr__title">' + $(el).text().trim() + '</div>'
        )
        .append($($(el).attr('href')).html());
      $('.lav-descr').append(descrBlock);
    }

    if (
      tabTitle.toLowerCase() == 'specs' &&
      $($(el).attr('href')).find('.product-spec').length
    ) {
      $('.lav-spec__table-wrap')
        .html('')
        .append(
          $($(el).attr('href'))
            .find('.product-spec')
            .addClass('lav-spec__table')
            .removeClass('product-spec')
        );

      $('.lav-spec__table tr td:first-child').each((i, el) => {
        setRowSpec(i, el);
      });
    }
  });

  $('.prod_desc').remove();
}

function setRowSpec(index, el) {
  let textTitle;
  let textTip = false;
  switch ($(el).text().trim().toLowerCase()) {
    case 'total wattage':
      textTip = 'Is the power produced or used per second';
      break;
    case 'amp draw':
      textTip =
        'Amp Draw Correlates to the amount of amperage drawn from a 12V, 24V or 36V system.';
      break;
    case 'weight':
      textTip = 'Total weight of the product';
      break;
    case 'raw lumens':
      textTip = 'This is a measure of the theoretical output of a light.';
      break;
    case 'guarantee':
      textTip =
        'Provide a formal assurance, especially that certain conditions will be fulfilled relating to a product, service, or transaction.';
      break;
    case 'ip rating':
      textTip =
        'Is the measurement of protection that LED light will have against liquid (water) and solid (dirt, dust etc.) objects.';
      break;
    case 'e-mark':
      textTip =
        'The e-mark is an EU mark for approved vehicles and vehicle components sold into the EU.';
      break;
  }

  if (textTip) {
    textTitle = $(el).text().trim();
    $(el).append(
      `<div class="lav-spec__tip"><span span class="lav-spec__icon" >!</span><div class="lav-spec__tip-body"><div class="lav-spec__tip-title">${textTitle}</div><div class="lav-spec__tip-descr">${textTip}</div><span class="lav-spec__tip-close">×</span></div></div>`
    );

    $(el)
      .find('.lav-spec__icon')
      .on('click', function () {
        $('.lav-spec__tip-body').hide();
        $(this).siblings('.lav-spec__tip-body').show();
      });

    $(el)
      .find('.lav-spec__tip-close')
      .on('click', function () {
        $(this).parent().hide();
      });
  }
}

function initOptions() {
  let optionName;
  $('.selector-wrapper .selector-wrapper').each((i, el) => {
    optionName = $(el).find('label').text().trim().toLowerCase();
    if (optionName == 'optics' || optionName == 'led') {
      $(el).prepend(
        $(document.createElement('div'))
          .addClass('lav-option__wrap')
          .append(
            '<span class="lav-option__caption modal-trigger" data-modal-target=".modal-' +
              optionName +
              '">What’s the difference?</span>'
          )
      );

      $(el).find('.lav-option__wrap').prepend($(el).find('label'));
    }
  });
}

function initModal() {
  let modalEl = `
  <div class="modal">
    <div class="modal__body modal-zoom">
      <img src="https://cdn.shopify.com/s/files/1/0761/3599/files/Truck_Overhead_Blue_1024x1024.jpg?v=1572884778" alt="Flood lights">
    </div>
    <div class="modal__body modal-optics">
      <div class='modal__head'>
        <div class='modal__head-title'>What’s the difference?</div>
        <button class="modal__close">
          <svg class="modal__close-icon" fill='white' xmlns="http://www.w3.org/2000/svg" width="357" height="357" viewBox="0 0 357 357"><path d="M357 35.7L321.3 0 178.5 142.8 35.7 0 0 35.7l142.8 142.8L0 321.3 35.7 357l142.8-142.8L321.3 357l35.7-35.7-142.8-142.8z"/></svg>
        </button>
      </div>
      <div class='modal__inner'>
        <div class='modal__inner-block'>
          <span>Combo</span> - Best of both worlds, the floods sit on the outside giving you the side blow-out of light while still shooting far with the Spots piercing far ahead.
        </div>
        <div class='modal__inner-block'>
          <span>Spot</span> - Great for those who need those piercing beams of light that seem to travel forever.
        </div>
        <div class='modal__inner-block'>
          <span>Flood</span> - Wide-spread light to illuminate the side and front of your rig. Perfect for those who want a wider cone of light than a spot.
        </div>
      </div>
    </div>

    <div class="modal__body modal-led">
      <div class='modal__head'>
        <div class='modal__head-title'>What’s the difference?</div>
        <button class="modal__close">
          <svg class="modal__close-icon" fill='white' xmlns="http://www.w3.org/2000/svg" width="357" height="357" viewBox="0 0 357 357"><path d="M357 35.7L321.3 0 178.5 142.8 35.7 0 0 35.7l142.8 142.8L0 321.3 35.7 357l142.8-142.8L321.3 357l35.7-35.7-142.8-142.8z"/></svg>
        </button>
      </div>
      <div class='modal__inner'>
        <div class='modal__inner-block'>
        Our <span>5W</span> LEDs produce over 75% better light output than our <span>3W</span> and are way more efficient, keeping the power draw very low.
        </div>
      </div>
    </div>
  </div>
  `;

  $('body').append(modalEl);
  $('.modal__close').click(function (e) {
    e.preventDefault();
    modalClose();
  });

  $('.modal').click(function (e) {
    if ($(e.target).hasClass('modal_active')) {
      modalClose();
    }
  });

  function modalClose() {
    $('.modal').removeClass('modal_active');
    $('.modal__body').slideUp();
  }

  $('.modal-trigger').click(function (e) {
    e.preventDefault();
    let target = $(this).data('modal-target');
    $('.modal').addClass('modal_active');
    $(target).slideDown();
  });
}
