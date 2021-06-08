try {
  (function (h, o, t, j, a, r) {
    h.hj =
      h.hj ||
      function () {
        (h.hj.q = h.hj.q || []).push(arguments);
      };
    h._hjSettings = { hjid: 410340, hjsv: 6 };
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
  hj('trigger', 'multiple_steps_checkout');
} catch (e) {}

function gaEvent(action, label = '', value = '') {
  window.dataLayer = window.dataLayer || [];
  if (!label) {
    label = '';
  }
  if (!value) {
    value = '';
  }

  try {
    let eventObj = {
      event: 'event-to-ga',
      eventCategory: 'Experiment — multiple steps checkout',
      eventAction: action,
      eventLabel: label,
      eventValue: value
    };
    console.log('fireEvent', eventObj);
    dataLayer.push(eventObj);
  } catch (e) {}
}

var isInitExp = false;

// gaEvent('loaded');

let observer = new MutationObserver(mutations => {
  for (let mutation of mutations) {
    for (let node of mutation.removedNodes) {
      if (!(node instanceof HTMLElement)) continue;
      console.log(node);
      // if (node.classList.contains('modal-popup') && !initExp) {
      if (node.id == 'checkout-loader' && !isInitExp) {
        gaEvent('loaded');
        isInitExp = !isInitExp;
        initExp();
        observer.disconnect();
      }
    }
  }
});

let demoElem = document.body;

observer.observe(demoElem, { childList: true, subtree: true });

/* STYLES insert start */
let stylesList = `
.lav-header {
  background: #f7f7f7;
  border-bottom: 1px solid #e5e5e5;
  padding: 10px 0;
  margin: 0 -20px;
}
.lav-header__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 15px;
}
.lav-header__left {
  
}
.lav-header__center:before {
  content: '';
  width: 26px;
  height: 18px;
  margin: 0 20px 0 0;
  display: inline-block;
  vertical-align: middle;
  background: url(https://www.zizzz.com/pub/static/version1621240719/frontend/BelVG/zizzz/en_US/images/xicon-car.png.pagespeed.ic.R0ycMpWiOC.webp) 0 0 no-repeat;
}
.lav-header__right {
  color: #515151;
}
.authentication-wrapper {
  display: none;
}
.lav-header__sub-wrap {
  margin-top: 15px;
  margin-bottom: 15px;
  text-align: center;
}
.lav-header__sub-wrap img {
  width: 80px;
}
.checkout-index-index .opc-wrapper .form-login {
  margin-bottom: 0!important;
}
.authentication-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  overflow: initial!important;
}
.lav-header__sub-wrap a {
  display: inline-block;
  line-height: 0;
}
.checkout-index-index .am-checkout {
  margin: 0;
  padding: 0;
}
.checkout-index-index .am-checkout:not(.-modern) {
  background: #fff;
  padding: 0 20px;
}
.checkout-index-index .opc-wrapper.am-opc-wrapper {
  border: 1px solid #E3E3E3;
  max-width: 900px;
  margin: auto auto 70px;
  opacity: 0.15;
}
.checkout-index-index .opc-block-summary .minicart-items-wrapper {
  padding: 0;
  max-height: none;
}
.column.main .opc-block-summary .product-item {
  padding: 20px 0;
}
.checkout-index-index .opc-block-summary {
  margin: 0;
  padding: 0;
  background: #fff;
}
.lav-summary {
  border-left: 1px solid #E3E3E3;
  background: #fff;
  width: 315px;
  padding: 30px 30px 10px;;
  flex-shrink: 0;
}
.lav-summary .step-title, .opc-block-summary .items-in-cart>.title {
  display: none
}
.checkout-index-index .opc-block-summary .minicart-items .product-image-container {
  width: 100%!important;
  height: 100%!important;
  float: none;
  margin-left: 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.opc-block-summary .product-item .product-item-inner {
  display: block;
  margin-bottom: 0;
}
.items-in-cart {
  margin-bottom: 0!important;
}
.table>tbody>tr>th, .table>tbody>tr>td {
  padding: 0;
  font-weight: bold;
  font-size: 18px;
  line-height: 18px;
  text-align: right;
  color: #515151;
}
.checkout-index-index .opc-block-summary .minicart-items .product-item-details {
  margin-top: 15px;
}
.minicart-items .product-item-name {
  font-weight: bold;
  font-size: 13px;
  line-height: 19px;
  color: #616666;
  margin-bottom: 0;
  padding-right: 15px;
}
.checkout-index-index .opc-block-summary .minicart-items .product-item-details {
  padding-left: 0;
  margin-bottom: 0;
}
.opc-block-summary .product-item .product-item-name-block {
  padding-right: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.minicart-items .product-item-details .details-qty .label span, .minicart-items .details-qty .label:after {
  display: none;
}
.minicart-items .product-item-details .price-including-tax {
  margin:
}
.opc-block-summary .product-item .price {
  font-weight: bold;
  font-size: 18px;
  line-height: 1;
  white-space: nowrap;
  color: #515151;
}
.minicart-items .product-item-details .details-qty {
  margin-top: 0;
  margin-left: 20px;
  font-size: 13px;
  line-height: 1;
  color: #333333;
  border: 1px solid lightgray;
  padding: 10px;
}
.checkout-header, .opc-wrapper .step-title {
  display: none;
}
input[type="text"], input[type="password"], input[type="url"], input[type="tel"], input[type="search"], input[type="number"], input[type="datetime"], input[type="email"] {
  background: #F7F7F7;
  border: 1px solid #E3E3E3;
  height: 39px;
}
.opc-wrapper .form-login .fieldset .field .label, .opc-wrapper .form-shipping-address .fieldset .field .label {
  color: #616666;
  font-size: 12px;
  line-height: 1;
  margin-bottom: 5px;
}
.product-image-wrapper {
  max-height: 100%;
}
.product-image-wrapper img {
  object-fit: contain;
  width: 80px;
  height: 80px;
}
.lav-title {
  font-family: 'Varela Round';
  font-size: 18px;
  line-height: 18px;
  text-transform: uppercase;
  color: #616666;
}
.lav-link, .lav-link:visited {
  font-size: 12px;
  line-height: 17px;
  color: #0088CC;
  transition: 0.3s;
}
.lav-wrap {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.lav-summary__head {
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 2px solid #E3E3E3;
}
.lav-steps {
  flex-grow: 1;
  padding: 30px;
}
.lav-steps__body li {
  list-style: none;
}
.opc-wrapper .form-login, .opc-wrapper .form-shipping-address {
  margin: 0;
  max-width: 100%;
}
.lav-steps__nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 0;
  font-size: 16px;
  line-height: 23px;
  color: #A1A1A1;
}
@media (max-width: 1200px) {
  .lav-steps__nav {
    font-size: 11px;
  }
  .lav-steps__nav-num {
    width: 20px;
    height: 20px;
  }
}
.fieldset.address [name$=".company"] {
  display: none;
}
.lav-steps__nav-current, .lav-steps__nav-next {
  display: flex;
  align-items: center;
}
.lav-steps__nav-num {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-right: 5px;
  line-height: 1;
  width: 24px;
  height: 24px;
  border: 1px solid #A1A1A1;
}
.lav-steps__nav-current {
  color: #E32128;
}
.checkout-index-index .opc-wrapper.am-opc-wrapper .discount-code .payment-option-title {
  display: none;
}
.lav-steps__nav-current .lav-steps__nav-num {
  border-color: #E32128;
}
.fieldset:last-child {
  margin: 0;
}
.opc-wrapper .form-login .fieldset .note, .opc-wrapper .form-shipping-address .fieldset .note {
  display: none;
}
.opc-wrapper .form-login {
  padding-bottom: 0;
  border: none;
}
.fieldset.address>.field {
  padding: 0;
}
.lav-steps__control {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 25px
}
.lav-steps__control-back {
  font-size: 16px;
  line-height: 1.2;
  color: #E32128!important;
  border-bottom: 1px solid #E32128;
  text-decoration: none!important;
  transition: 0.35s;
}
.lav-steps__control-back:hover {
  border-color: transparent;
}
.lav-steps__control-next {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #FFFFFF!important;
  background: #E32128!important;
  border-radius: 2px;
  padding: 15px 20px;
  border: none!important;
  transition: 0.35s;
  max-width: 240px;
  width: 100%;
}
.lav-steps__control-next:hover {
  background-color: #bf0a11!important;
}
.opc-block-summary .table-totals tbody .mark {
  text-align: left;
}
.totals-tax * {
  font-size: 13px!important;
  line-height: 19px!important;
  color: #515151!important;
  font-weight: bold!important;
  white-space: nowrap;
  border: none!important;
}
.grand.totals * {
  font-size: 18px!important;
  line-height: 1!important;
  color: #515151!important;
  font-weight: bold!important;
  border-top: none!important;
}
.opc-block-summary .table-totals {
  border: none;
}
.minicart-items {
  max-height: 450px;
  margin-bottom: 20px;
  overflow-y: auto;
  padding-right: 5px;
}
.minicart-items ::-webkit-scrollbar {
  width: 2px;
}

/* Track */
.minicart-items ::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
.minicart-items ::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
.minicart-items ::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
.minicart-items .product-item:last-child {
  border-bottom: 1px solid #ccc;
}
.checkout-index-index .additional-options {
  margin: 0;
  display: none;
  margin-top: 25px; 
}
#payment {
  display: none!important;
}
.checkout-payment-method .payment-option-title {
  padding: 0;
  margin-top: 20px;
}
.checkout-index-index .opc-wrapper.am-opc-wrapper .payment-option-content {
  padding: 0;
  margin-top: 20px;
}
.opc-wrapper .form-discount {
  max-width: 100%;
}
.checkout-payment-method .payment-option-title .action-toggle {
  font-weight: bold;
  font-size: 13px;
  line-height: 1.3;
  color: #616666;
}
.fieldset>.field, .fieldset>.fields>.field {
  margin-bottom: 15px;
}
.checkout-payment-method .payment-option-title .action-toggle:after {
  font-size: 12px;
  font-weight: bold;
  margin-top: -2px;
}
#checkout-shipping-method-load {
  margin-top: 20px;
}
.checkout-index-index .opc-wrapper.am-opc-wrapper .field.amcheckout-comment {
  margin-bottom: 0;
  margin-top: 15px;
}
.admin__field-label {
  font-size: 13px;
  line-height: 13px;
  color: #616666;
}
input[type="checkbox"] {
  width: 16px;
  height: 16px;
  margin-top: -5px
}
.checkout-agreement input[type="checkbox"] {
  margin-top: 0;
}
.amcheckout-checkboxes {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}
.fieldset>br {
  display: none!important;
}
.payment-group .amcheckout-wrapper {
  display: grid;
  gap: 10px;
}
.checkout-index-index .opc-wrapper.am-opc-wrapper .payment-method-content, .checkout-index-index .opc-wrapper.am-opc-wrapper .payment-option-content {
  padding: 0;
}
.payment-method {
  border: 1px solid lightgray;
}
.checkout-payment-method .payment-method-title {
  padding: 0;
  display: flex;
}
.checkout-payment-method .payment-method+.payment-method .payment-method-title {
  border-top: none;
}
.payment-method {
  padding: 12px;
}
.checkout-payment-method .payment-method._active .payment-method-content {
  margin-top: 30px;
  font-size: 12px;
  line-height: 1.4;
}
.checkout-index-index .opc-wrapper.am-opc-wrapper .checkout-agreement {
  margin-top: 25px;
}
.am-submit-summary + .am-submit-summary {
  display: none!important;
}
.lav-header__logo {
  display: none;
}
@media (max-width: 768px) {
  .select, .toolbar select {
    heigth: 39px;
  }
  #shipping-new-address-form {
    display: block!important;
  }
  #shipping-new-address-form > .field {
    width: 100%!important;
  }
  .lav-wrap {
    display: block;
  }
  .lav-steps {
    padding: 0;
  }
  .checkout-index-index .opc-wrapper.am-opc-wrapper {
    border: none;
  }
  .lav-summary {
    padding: 0;
    width: 100%;
    border-left: none;
  }
  .checkout-index-index .opc-wrapper .form-login {
    margin: 0;
  }
  .opc-wrapper .form-login, .opc-wrapper .form-shipping-address, .opc-wrapper .methods-shipping {
    background: none!important;
  }
  .lav-link {
    font-size: 16px;
  }
  .opc-wrapper .form-login .fieldset .field .label, .opc-wrapper .form-shipping-address .fieldset .field .label {
    margin-bottom: 10px;
  }
  .checkout-index-index .opc-wrapper .form-login {
    padding-top: 0;
    margin-bottom: 20px
  }
  .opc-wrapper .form-login, .opc-wrapper .form-shipping-address, .opc-wrapper .methods-shipping {
    padding: 0;
  }
  .checkout-payment-method .payment-option-title {
    margin: 0px;
  }
  .checkout-payment-method .payment-option {
    margin: 0;
  }
  .lav-steps__control {
    margin-top: 25px;
    display: block;
  }
  .lav-steps__control-next {
    max-width: 100%;
  }
  .opc-wrapper .form-login+.form-shipping-address {
    margin-top: 0!important;
  }
  .opc-wrapper .methods-shipping {
    margin: 20px 0 12px;
  }
  .checkout-index-index .opc-estimated-wrapper {
    margin: 0;
    position: fixed;
    z-index: 999;
    bottom: 0;
    left: 0;
    right: 0;
    background: #333333;
    color: #fff;
    border: none;
    padding: 10px 20px;
  }
  .minicart-wrapper {
    position: absolute;
  }
  .opc-estimated-wrapper .estimated-block {
    display: flex;
    width: 100%;
    justify-content: space-between;
    float: none;
  }
  .lav-summary__head {
    border-width: 1px;
  }
  .lav-steps__control {
    margin-top: 25px;
  }
  .lav-steps__control-back {
    display: none;
  }
  .lav-summary {
    margin-top: 50px;
  }
  .lav-header__sub-wrap {
    display: none;
  }
  .lav-wrap {
    padding-top: 90px;
  }
  .lav-header__logo {
    display: block;
    line-height: 0;
  }
  .lav-header__logo img {
    height: 38px;
    width: auto;
  }
  .lav-header__center {
    display: none;
  }
  .lav-header {
    padding: 5px 0;
    z-index: 10;
    background: #FFFFFF;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05); 
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    margin: 0;
  }
  .lav-header__right, .lav-header__left {
    font-size: 12px;
  }
}

// font-family: 'Varela Round';
`;

// connect to DOM
let styles = document.createElement('style');
styles.id = 'go-phone-styles';
styles.innerHTML = stylesList;
document.body.appendChild(styles);

/* STYLES insert end */

window.activeStep = 1;

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
  console.log('initExp');
  let initBlock = `
    <div class="opc-wrapper layout-2-columns am-opc-wrapper am-submit-summary" data-bind="css: $data.additionalClasses">
      <div class='lav-wrap'>
        <div class='lav-steps'>
          <div class='lav-summary__head'>
            <div class='lav-title lav-summary__title'>New client</div>
            <a class='lav-link lav-link-auth' href='#'>Log in</a>
          </div>
          <div class='lav-steps__body'>
            <div class='lav-steps__nav'>
              <div class='lav-steps__nav-current'>
                <div class='lav-steps__nav-num'>1</div>
                <div class='lav-steps__nav-caption'>Personal Information</div>
              </div>
              <div class='lav-steps__nav-next'>
                <div class='lav-steps__nav-num'>2</div>
                <div class='lav-steps__nav-caption'>Shipping information</div>
              </div>
            </div>

            <div class='lav-steps__control'>
              <a class='lav-steps__control-back' href='#'>Back</a>
              <button class='lav-steps__control-next'><span class='lav-steps__control-next-text'>Choose Shipping Method</span><span class='lav-steps__control-next-arrow'>&nbsp;&nbsp;&rarr;</span></button>
            </div>
          </div>
        </div>
        <div class='lav-summary'>
          <div class='lav-summary__head'>
            <div class='lav-title lav-summary__title'>Your order</div>
            <a class='lav-summary__back lav-link' href=''>Back to shopping</a>
          </div>
        </div>
      </div>
    </div>
  `;

  document
    .querySelector('.opc-wrapper')
    .insertAdjacentHTML('beforebegin', initBlock);

  document
    .querySelector('.lav-summary__head')
    .insertAdjacentElement(
      'afterbegin',
      document.querySelector('.authentication-dropdown')
    );

  document
    .querySelector('.lav-link-auth')
    .addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector('.action-auth-toggle').click();
    });

  document
    .querySelector('.lav-summary__back')
    .addEventListener('click', function (e) {
      e.preventDefault();
      location.href = 'https://www.zizzz.com/';
    });

  document
    .querySelector('.lav-steps__control-back')
    .addEventListener('click', function (e) {
      e.preventDefault();
      gaEvent('button click', 'back button');
      activeStep--;
      if (activeStep == 2) {
        initStepTwo(true);
      } else if (activeStep == 1) {
        initStepOne(true);
      }
    });

  document
    .querySelector('.lav-steps__control-next')
    .addEventListener('click', function (e) {
      e.preventDefault();
      // document.querySelector('.payment-methods .checkout.amasty').click();
      // setTimeout(() => {
      if (activeStep == 1) {
        gaEvent('button click', 'shiping method');
        if (
          document.querySelector('[name="firstname"] + .field-error') ||
          document.querySelector('[name="lastname"] + .field-error') ||
          (document.querySelector('#customer-email + .mage-error') &&
            document.querySelector('#customer-email + .mage-error').style
              .display == 'block')
        ) {
          console.log('error step 1');
        } else {
          activeStep++;
          initStepTwo();
        }
      } else if (activeStep == 2) {
        gaEvent('button click', 'next button');
        if (
          document.querySelector('[name="street[0]"] + .field-error') ||
          document.querySelector('[name="city"] + .field-error') ||
          document.querySelector('[name="telephone"] ~ .field-error') ||
          document.querySelector('[name="postcode"] + .field-error') ||
          document.querySelector('[name="country_id"] + .field-error') ||
          document.querySelector('#shipping-new-address-form .message.warning')
        ) {
          console.log('error step 2');
        } else {
          activeStep++;
          initStepThree();
        }
      } else if (activeStep == 3) {
        // if (document.querySelectorAll('.field-error').length) {
        //   console.log('error step 3');
        // } else {
        document.querySelector('.payment-methods .checkout.amasty').click();
        setTimeout(() => {
          if (
            document.querySelector('[name="firstname"] + .field-error') ||
            document.querySelector('[name="lastname"] + .field-error') ||
            (document.querySelector('#customer-email + .mage-error') &&
              document.querySelector('#customer-email + .mage-error').style
                .display == 'block')
          ) {
            console.log('ye1s');
            activeStep = 2;
            initStepTwo(true);
            activeStep = 1;
            initStepOne(true);
          } else if (
            document.querySelector('[name="street[0]"] + .field-error') ||
            document.querySelector('[name="city"] + .field-error') ||
            document.querySelector('[name="telephone"] + .field-error') ||
            document.querySelector('[name="postcode"] + .field-error') ||
            document.querySelector('[name="country_id"] + .field-error') ||
            document.querySelector(
              '#shipping-new-address-form .message.warning'
            )
          ) {
            console.log('ye2s');
            activeStep = 2;
            initStepTwo(true);
          }
        }, 800);
        // }
      }
      // }, 800);
    });

  document.querySelector('.opc-estimated-wrapper .estimated-label').innerText =
    'Grand Total';

  initHeader();
  initSummary();
  initStepOne();

  document.querySelector(
    '.checkout-index-index .opc-wrapper.am-opc-wrapper'
  ).style.opacity = 1;

  document.querySelector('.payment-method').click();
}

function validateInputs() {
  document.querySelectorAll('.field _required');
}

function initHeader() {
  let headerEl = `
    <header class='lav-header'>
      <div class='lav-header__container'>
        <div class='lav-header__left'>Try for 30 nights</div>
        <div class='lav-header__center'>Free shipping</div>
        <a href='/' class='lav-header__logo'>
          <img data-pagespeed-high-res-src="https://www.zizzz.ch/de/pub/media/logo/default/xlogo.png.pagespeed.ic.Lv6ne9Q2CA.webp" title="Zizzz - Babyschlafsäcke und Duvets" alt="Zizzz - Babyschlafsäcke und Duvets" width="147" height="97" src="https://www.zizzz.ch/de/pub/media/logo/default/xlogo.png.pagespeed.ic.Lv6ne9Q2CA.webp"></img>
        </a>
        <a href='tel:+41225752474' class='lav-header__right'>+41 22 575 24 74</a>
      </div>
    </header>
    <div class='lav-header__sub-wrap'>
    <a href='/' class='lav-header__sub'>
      <img data-pagespeed-high-res-src="https://www.zizzz.ch/de/pub/media/logo/default/xlogo.png.pagespeed.ic.Lv6ne9Q2CA.webp" title="Zizzz - Babyschlafsäcke und Duvets" alt="Zizzz - Babyschlafsäcke und Duvets" width="147" height="97" src="https://www.zizzz.ch/de/pub/media/logo/default/xlogo.png.pagespeed.ic.Lv6ne9Q2CA.webp"></img>
    </a>
  </div>
  `;

  document
    .querySelector('#checkout')
    .insertAdjacentHTML('afterbegin', headerEl);
}

function initStepOne(isAgain) {
  document.querySelector(
    '.lav-steps__nav-current .lav-steps__nav-num'
  ).innerText = '1';
  document.querySelector(
    '.lav-steps__nav-current .lav-steps__nav-caption'
  ).innerText = 'Personal information';
  document.querySelector('.lav-steps__nav-next .lav-steps__nav-num').innerText =
    '2';
  document.querySelector(
    '.lav-steps__nav-next .lav-steps__nav-caption'
  ).innerText = 'Shipping information';
  document.querySelector('.lav-steps__control-next-text').innerText =
    'Choose Shipping Method';

  if (isAgain) {
    document.querySelector('#stepTwo').remove();
  }

  let stepOne = document.createElement('style');
  stepOne.id = 'stepOne';
  stepOne.innerHTML = `
    .field.street, .street ~ .field {
      display: none!important;
    }
    .lav-steps__control-back {
      opacity: 0;
      pointer-events: none;
    }
    #checkout-step-shipping_method {
      display: none;
    }
  `;
  document.body.appendChild(stepOne);

  if (!isAgain) {
    document
      .querySelector('.lav-steps__control')
      .insertAdjacentElement(
        'beforebegin',
        document.querySelector('#shipping')
      );

    document
      .querySelector('.lav-steps__control')
      .insertAdjacentElement(
        'beforebegin',
        document.querySelector('#checkout-step-shipping_method')
      );

    document
      .querySelector('.lav-steps__control')
      .insertAdjacentElement('beforebegin', document.querySelector('#payment'));

    document.addEventListener('click', function (e) {
      if (
        e.target.classList.contains('payment-method') ||
        e.target.classList.contains('payment-method-title')
      ) {
        e.target.querySelector('label').click();
      }
    });

    document
      .querySelector('.lav-steps__control')
      .insertAdjacentElement(
        'beforebegin',
        document.querySelector('.amcheckout-additional-options')
      );

    document
      .querySelector('.lav-steps__control')
      .insertAdjacentElement(
        'beforebegin',
        document.querySelector('.discount-code').parentElement
      );
  }
}

function initStepTwo(isAgain) {
  if (isAgain) {
    document.querySelector('#stepThree').remove();
  } else {
    document.querySelector('#stepOne').remove();
  }

  document.querySelector(
    '.lav-steps__nav-current .lav-steps__nav-num'
  ).innerText = '2';
  document.querySelector(
    '.lav-steps__nav-current .lav-steps__nav-caption'
  ).innerText = 'Shipping information';
  document.querySelector('.lav-steps__nav-next .lav-steps__nav-num').innerText =
    '3';
  document.querySelector(
    '.lav-steps__nav-next .lav-steps__nav-caption'
  ).innerText = 'Payment method';
  document.querySelector('.lav-steps__control-next-text').innerText = 'Next';

  let stepTwo = document.createElement('style');
  stepTwo.id = 'stepTwo';
  stepTwo.innerHTML = `
    .opc-wrapper .form-login, #shipping-new-address-form .field, #shipping-new-address-form .field ~ .field  {
      display: none!important;
    }
    #shipping-new-address-form>.field.street, #shipping-new-address-form>.field.street .field, #shipping-new-address-form>.field.street ~ .field {
      display: block!important;
    }
    #shipping-new-address-form {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 100%;
    }
    .checkout-index-index .opc-wrapper.am-opc-wrapper .discount-code .payment-option-title {
      display: block;
    }
    #shipping-new-address-form > .field {
      width: 48%;
    }
    .table-checkout-shipping-method tbody td {
      padding-bottom: 10px;
      padding-top: 10px;
    }
    .lav-steps__control-back {
      opacity: 1;
      pointer-events: auto;
    }
  `;

  document.body.appendChild(stepTwo);
}

function initStepThree() {
  document.querySelector('#stepTwo').remove();

  document.querySelector(
    '.lav-steps__nav-current .lav-steps__nav-num'
  ).innerText = '3';
  document.querySelector(
    '.lav-steps__nav-current .lav-steps__nav-caption'
  ).innerText = 'Payment method';
  document.querySelector('.lav-steps__control-next-text').innerText =
    'Place an order';

  let stepThree = document.createElement('style');
  stepThree.id = 'stepThree';
  stepThree.innerHTML = `
    .lav-steps__nav-next {
      display: none;
    }
    #payment {
      display: block!important;
    }
    .checkout-index-index .additional-options {
      display: block;
    }
    #shipping-new-address-form>.field, .opc-wrapper .form-login {
      display: none!important;
    }
    #checkout-step-shipping_method {
      display: none;
    }
  `;

  document.body.appendChild(stepThree);
}

function initSummary() {
  let orderSummaryEl = document.querySelector(
    '.checkout-index-index .opc-block-summary'
  );

  document
    .querySelector('.lav-summary')
    .insertAdjacentElement('beforeend', orderSummaryEl);

  document.querySelectorAll('.product-item').forEach(function (el) {
    if (el.querySelector('.price')) {
      el.querySelector('.product-image-container').insertAdjacentElement(
        'beforeend',
        el.querySelector('.price')
      );
    }
  });
}
