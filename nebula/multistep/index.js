console.log('initExp');

/********* Settings **********/
const settings = {
  dir: 'https://flopsi69.github.io/crs/nebula/multistep',
  clarity: false,
  observe: false,
};

//Hotjar
if (settings.clarity) {
  const clarityInterval = setInterval(function () {
    if (typeof clarity == 'function') {
      clearInterval(clarityInterval);
      clarity('set', '', 'variant_1');
    }
  }, 1000);
}

// Alalytic
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
    dataLayer.push(objData);
  } catch (e) {
    console.log('Event Error:', e);
  }
}

// Alalytic
function gaEvent(name = '', desc = '', type = '', loc = '') {
  try {
    var objData = {
      event: 'event-to-ga4',
      event_name: name,
      event_desc: desc,
      event_type: type,
      event_loc: loc,
    };
    console.dir('eventFire', objData.eventAction);
    dataLayer.push(objData);
  } catch (e) {
    console.log('Event Error:', e);
  }
}

// Observe
if (settings.observe) {
  let observer = new MutationObserver((mutations) => {
    for (let mutation of mutations) {
      for (let node of mutation.addedNodes) {
        if (!(node instanceof HTMLElement)) continue;

        // Code Here
      }
    }
  });

  let demoElem = document.body;

  observer.observe(demoElem, { childList: true, subtree: true });
}

// Styles
const styles = `
  .advantages, #backPage, .lav-hide, .payment-label-options, .payment__buttons, .paylater-wrap {
    display: none!important;
  }
  .payment-label-options {
    display: none;
  }
  .lav-top {
    padding: 24px 15px;
    font-family: Spacegrotesk-Bold;
    font-size: 28px;
    line-height: 1.4;
    text-align: center;
    color: #0B0F56;
    background: #ECF7FD;
  }
  .cart-page {
    padding-top: 0!important;
  }
  .right-component > .error-message {
    display: none!important;
  }
  .order-summary-page {
    margin-top: 0!important;
  }
  .cart-page .cart-page-component {
    margin-top: 0!important;
    padding-top: 25px!important;
  }
  .order__label {
    color: #0B0F56!important;
  }
  .lav-breadcrumbs {
    margin-top: 10px;
    display: flex;
    align-items: center;
    font-size: 16px;
    line-height: 1.4;
    color: #505985;
    transition: 0.35s;
    margin-bottom: 28px;
  }
  .lav-breadcrumbs__item {
    position: relative;
  }
  .lav-breadcrumbs__item.active {
    color: #0B0F41;
    font-family: Spacegrotesk-Bold;
  }
  .lav-breadcrumbs__item + .lav-breadcrumbs__item {
    padding-left: 32px;
  }
  .lav-breadcrumbs__item + .lav-breadcrumbs__item:before {
    content: '';
    position: absolute;
    background: url(${settings.dir}/img/icon-arrow.svg) center no-repeat;
    background-size: contain;
    left: 10px;
    top: 52%;
    transform: translateY(-50%);
    width: 12px;
    height: 12px;
  }
  .seperator-container-checkout {

  }
  .lav-breadcrumbs + div {
    border: 1px solid #ECECEC;
    border-radius: 8px;
  }
  .lav-express {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    position: relative;
    padding: 16px;
    line-height: 0;
  }
  .lav-express .error-message {
    line-height: 1.2;
    position: absolute;
    font-size: 10px;
  }
  .gpay-button-fill {
    height: 100%;
  }
  .lav-express .seperator {
    display: none;
  }
  .lav-express .seperator-container-checkout {
    position: absolute;
    top: -8px;
    left: 0;
    right: 0;
    margin: auto;
  }
  .lav-express .seperator-container-checkout span {
    background: white;
    top: 0;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    color: #0B0F41;
  }
  .express-separator {
    margin-top: 25px!important;
    margin-bottom: 5px;
  }
  .express-separator .seperator {
    border-top: 1px solid #ECECEC!important;
    width: 60%!important;
  }
  .express-separator span {
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    color: #0B0F41;
    top: -8px!important;
  }
  .right-component .label {
    font-size: 18px!important;
    line-height: 1.3!important;
    margin-bottom: 12px!important;
  }
  .right-component select, .right-component input  {
    height: 47px!important;
  }
  .shipping-address-component {
    margin-top: 8px;
  }
  .shipping-address-component .input-div {
    padding-bottom: 12px!important;
  }
  .shipping-address-component .name-div .input-div {
    width: 49.2%!important;
  }
  .shipping-address-component .location-div .input-div:not(.zipcode-div) {
    width: 35.5%!important;
  }
  .lav-apartament, .lav-address {
    width: 49.2%;
  }
  .lav-apartament {
    float: left;
  }
  .lav-address {
    float: right;
  }
  .location-div {
    clear: both;
  }

  .lav-control {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 35px;
  }
  .lav-control__back {
    display: flex;
    align-items: center;
    font-family: Spacegrotesk-Bold;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    color: #3F4CEC;
    cursor: pointer;
    transition: 0.35s;
  }
  .lav-control__back:hover {
    opacity: 0.7;
  }
  .lav-control__back img {
    margin-right: 13px;
  }
  .lav-control__next {
    font-family: Spacegrotesk-Bold;
    font-weight: 700;
    font-size: 16px!important;
    line-height: 22px!important;
    color: #FDFDFD!important;
    letter-spacing: 0.5px;
    height: 54px;
    max-width: 380px;
    width: 100%;
    margin-left: 20px;
  }

  .lav-summary {
    border: 1px solid #ECECEC;
    border-radius: 4px;
    padding: 0 11px;
  }

  .lav-summary__line {
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5;
    color: #0B0F41;
    padding: 13px 0;
  }

  .lav-summary__line + .lav-summary__line {
    border-top: 1px solid #ECECEC;
  }

  .lav-summary__item:nth-child(1) {
    color: #737373;
    width: 60px;
    flex-shrink: 0;
  }

  .lav-summary__item:nth-child(2) {
    margin: 0 35px;
    flex-grow: 1;
  }

  .lav-summary__item:nth-child(3) {
    font-family: Spacegrotesk-Bold;
    width: 55px;
    flex-shrink: 0;
    text-align: right;
  }

  .lav-summary__item:not(.lav-free):nth-child(3) {
    font-weight: 700;
    color: #3F4CEC;
    cursor: pointer;
    transition: 0.35s;
  }

  .lav-summary__item:not(.lav-free):nth-child(3):hover {
    opacity: 0.7;
  }

  .lav-summary__item.lav-free {
    color: #0B0F41;
  }

  .lav-label {
    font-family: Spacegrotesk-Bold;
    font-weight: 700;
    font-size: 18px;
    line-height: 1.3;
    color: #0B0F41;
    margin-bottom: 24px;
  }

  .lav-label_caption {
    margin-bottom: 4px;
  }

  .lav-label__caption {
    font-size: 12px;
    line-height: 1.5;
    color: #505985;
  }

  .lav-choose {
    border: 1px solid #ECECEC;
    border-radius: 4px;
  }

  .lav-choose__add {
    display: flex;
    align-items: center;
    font-size: 12px;
    line-height: 150%;
    color: #505985;
  }

  .lav-choose__head {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 12px 15px 45px;
  }

  .lav-choose__body {
    padding: 20px;
    border-top: 1px solid #ECECEC;
  }

  .lav-choose__head:before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 15px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #505985;
  }

  .lav-choose.active .lav-choose__head:after {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 20px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #505985;
  }

  .lav-choose__mark {
    font-family: Spacegrotesk-Bold;
    font-weight: 700;
    font-size: 14px;
    line-height: 1.5;
    color: #0B0F41;
  }
  .lav-choose__caption {
    font-size: 14px;
    line-height: 1.5;
    color: #0B0F41;
  }

  .lav-shipping {
    margin-top: 28px;
  }

  .lav-payment {
    margin-top: 28px;
  }

  .lav-payment__choose {
    margin-top: 16px;
  }

  .lav-payment__choose .lav-choose__body {
    background: #F9F9F9;
    display: none;
  }

  .lav-payment__choose.active .lav-choose__body {
    display: block;
  }

  .stripe-card-div .stripe-card .card-expiration-cvc .input-div {
    margin-bottom: 0!important;
  }
  
  .StripeElement {
    max-height: 47px;
    padding-top: 0.9rem!important;
    padding-bottom: 0.9rem!important;
  }

  .stripe-card-div .stripe-card .input-div {
    margin-bottom: 12px!important;
  }

  .stripe-card-div {
    margin-bottom: 0!important;
  }

  .stripe-card-div .stripe-card .card-expiration-cvc .input-div {
    width: 49.2%!important;
  }

  .card-number {
    position: relative;
  }

  .card-number:after {
    content: '';
    position: absolute;
    right: 14px;
    top: 50%;
    transform: translateY(-50%);
    width: 18px;
    height: 18px;
    background: url('${settings.dir}/img/icon-lock.svg') center no-repeat;
    background-size: contain;
  }

  .card-cvc {
    position: relative;
  }

  .lav-quest {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 13px;
    cursor: pointer;
    transition: 0.35s;
    z-index: 9999;
  }

  .lav-quest:hover {
    opacity: 0.7
  }

  .lav-later .lav-choose__body  {
    padding: 23px;
    display: flex;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #737373;
  }

  .lav-later .lav-choose__body img {
    margin-right: 20px;
  }

  .lav-later {
    margin-top: 20px;
  }
  .lav-later__label {
    font-family: Spacegrotesk-Bold;
    font-weight: 700;
    font-size: 14px;
    line-height: 1.3;
    color: #0B0F41;
  }
  .lav-later__choose, .lav-payment__choose {
    overflow: hidden;
  }
  .lav-later__choose {
    margin-top: 12px;
  }
  .lav-later__choose .lav-choose__head, .lav-payment__choose .lav-choose__head {
    cursor: pointer;
    transition: 0.3s;
  }
  .lav-later__choose .lav-choose__head:hover, .lav-payment__choose .lav-choose__head:hover {
    opacity: 0.7;
  }
  .lav-tip__klarna, .lav-afterpay {
    cursor: pointer;
    transition: 0.35s;
  }
  .lav-tip__klarna:hover, .lav-afterpay:hover {
    opacity: 0.7;
  }
  .lav-later__choose.active .lav-choose__head, .lav-payment__choose.active .lav-choose__head {
    cursor: auto;
  }
  .lav-later__choose.active .lav-choose__head:hover, .lav-payment__choose.active .lav-choose__head:hover {
   opacity: 1;
  }
  .lav-later__choose .lav-choose__body {
    display: none;
  }
  .lav-later__choose.active .lav-choose__body {
    display: flex;
    border-top: 1px solid #0B0F41;
  }
  .lav-later__choose.active {
    border: 1px solid #0B0F41;
  }
  .lav-payment__choose.active .lav-choose__body {
    border-top: 1px solid #0B0F41;
  }
  .lav-payment__choose.active {
    border: 1px solid #0B0F41;
  }
  .lav-later__choose .lav-choose__body span {
    max-width: 450px;
  }
  .lav-modal {
    position: fixed;
    z-index: 999;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0,0,0,.1);
    backdrop-filter: blur(1px);
  }
  .lav-modal__inner {
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .lav-modal__pay {
    max-width: 380px;
    width: 100%;
  }
  .lav-modal__body {
    padding: 20px 30px 24px;
  }
  .lav-modal__title {
    font-family: Spacegrotesk-Bold;
    font-weight: 700;
    font-size: 24px;
    line-height: 1.2;
    color: #0B0F41;
  }
  .lav-modal__caption {
    font-size: 24px;
    line-height: 1.2;
    color: #0B0F41;
  }
  .lav-modal__footer {
    font-size: 10px;
    line-height: 1.5;
    color: #505985;
    padding: 12px 0;
    margin: 0 34px;
    border-top: 1px solid #ECF7FD;
  }
  .lav-modal {}
  .lav-modal {}
  .lav-modal {}

`;

const stylesEl = document.createElement('style');
stylesEl.innerHTML = styles;
document.body.appendChild(stylesEl);
/*** STYLES / end ***/

/********* Custom Code **********/
let step = 1;

init();
function init() {
  console.log('initFn');
  initHead();
  initFirstStep();
  initSummary();
  initShipping();
  initPayment();
  initControl();
  initModals();
}

function initHead() {
  let topEl = `
    <div class="lav-top">You are one step away from getting the most sophisticated <br/> test that decodes 100% of your DNA</div>
  `;

  document.querySelector('#app').insertAdjacentHTML('afterbegin', topEl);

  let breadcrumbsEl = `
    <div class='lav-breadcrumbs'>
      <div class='lav-breadcrumbs__item active'>Information</div>
      <div class='lav-breadcrumbs__item'>Shipping</div>
      <div class='lav-breadcrumbs__item'>Payment</div>
    </div>
  `;

  document
    .querySelector('.right-component')
    .insertAdjacentHTML('afterbegin', breadcrumbsEl);

  document.querySelector('.lav-breadcrumbs + div').classList.add('lav-express');

  document
    .querySelector('.lav-express > .seperator-container')
    .classList.add('express-separator');

  document
    .querySelector('.email-address-component')
    .insertAdjacentElement(
      'beforebegin',
      document.querySelector('.express-separator')
    );

  document
    .querySelector('.lav-express #google-pay-container')
    .insertAdjacentElement(
      'beforebegin',
      document.querySelector('.payment__buttons > div')
    );
}

function initFirstStep() {
  document.querySelector('.email-address-component .label').innerText =
    'Contact information';

  document.querySelector('.shipping-address-component .label').innerText =
    'Shipping information';

  document
    .querySelector('.shipping-address-component>.input-div:last-child')
    .classList.add('lav-country');

  document
    .querySelector('.shipping-address-component>.input-div')
    .insertAdjacentElement('afterend', document.querySelector('.lav-country'));

  document
    .querySelector('.lav-country + .input-div')
    .classList.add('lav-address');

  document
    .querySelector('.lav-country + .input-div + .input-div')
    .classList.add('lav-apartament');
}

function initControl() {
  const controlEl = `
    <div class="lav-control">
      <div class="lav-control__back">
        <img src='${settings.dir}/img/icon-back.svg' />
        <span>Back to product options</span>
      </div>
      <button class="lav-control__next btn btn-primary">Continue to shipping</button>
    </div>
  `;

  document
    .querySelector('.right-component')
    .insertAdjacentHTML('beforeend', controlEl);

  document
    .querySelector('.lav-control__back')
    .addEventListener('click', function () {
      if (step === 1) {
        location.href =
          'https://nebula.org/whole-genome-sequencing-dna-test#choose';
      } else {
        step--;
        moveToStep();
      }
    });

  document
    .querySelector('.lav-control__next')
    .addEventListener('click', function () {
      if (
        document.querySelector('.shipping-address-component .error-message') ||
        document.querySelector('.email-address-component .error-message')
      ) {
        step = 1;
        moveToStep();
      } else if (step !== 3) {
        if (step + 1 === 2 && !validateStepOne()) return false;
        step++;
        moveToStep();
      } else {
        if (document.querySelector('.lav-payment__choose.active')) {
          document.querySelector('.pay-btn').click();
        } else if (document.querySelector('.lav-choose__klarna.active')) {
          document.querySelector('.payLaterBtn.klarna').click();
        } else if (document.querySelector('.lav-choose__afterpay.active')) {
          document.querySelector('.payLaterBtn.afterpay').click();
        }

        setTimeout(() => {
          if (
            document.querySelector(
              '.shipping-address-component .error-message'
            ) ||
            document.querySelector('.email-address-component .error-message')
          ) {
            step = 1;
            moveToStep();
          }
        }, 100);
      }
    });
}

function initSummary() {
  const summaryEl = `
    <div class='lav-summary lav-hide'>
      <div class='lav-summary__line'>
        <div class='lav-summary__item'>Contact</div>
        <div class='lav-summary__item'>user@gmail.com</div>
        <div class='lav-summary__item'>Change</div>
      </div>
      <div class='lav-summary__line'>
        <div class='lav-summary__item'>Ship to</div>
        <div class='lav-summary__item'>10 Kenworthy Rise, LS16 7QW Leeds, UK</div>
        <div class='lav-summary__item'>Change</div>
      </div>
      <div class='lav-summary__line lav-hide'>
        <div class='lav-summary__item'>Method</div>
        <div class='lav-summary__item'>International Express Shipping (3-6 business days)</div>
        <div class='lav-summary__item lav-free'>Free</div>
      </div>
    </div>
  `;

  document
    .querySelector('.right-component')
    .insertAdjacentHTML('beforeend', summaryEl);

  for (let item of document.querySelectorAll(
    '.lav-summary__item:not(.lav-free)'
  )) {
    item.addEventListener('click', function () {
      console.log('back to step 1');
      step = 1;
      moveToStep();
    });
  }
}

function initShipping() {
  const shippingEl = `
    <div class='lav-shipping lav-hide'>
      <div class='lav-shipping__label lav-label'>Shipping method</div>
      <div class='lav-shipping__choose lav-choose active'>
        <div class='lav-choose__head'>
          <span class='lav-choose__caption'>Free shipping</span>
          <span class='lav-choose__mark'>Free</span>
        </div>
      </div>
    </div>
  `;

  document
    .querySelector('.right-component')
    .insertAdjacentHTML('beforeend', shippingEl);
}

function initPayment() {
  const paymentEl = `
    <div class='lav-payment lav-hide'>
      <div class='lav-payment__label lav-label lav-label_caption'>Payment</div>
      <div class='lav-payment__label lav-label__caption'>All transactions are secure and encrypted.</div>
      <div class='lav-payment__choose lav-choose active'>
        <div class='lav-choose__head'>
          <span class='lav-choose__caption'>Credit card</span>
          <span class='lav-choose__add'>
            <img src='${settings.dir}/img/payments.svg' />
          </span>
        </div>
        <div class='lav-choose__body'></div>
      </div>
    </div>

    <div class='lav-later lav-hide'>
      <div class='lav-later__label'>Buy now pay later with:</div>

      <div class='lav-later__list'>
        <div class='lav-later__choose lav-choose lav-choose__klarna'>
          <div class='lav-choose__head'>
            <span class='lav-choose__caption'>Klarna</span>
            <img class='lav-tip__klarna' src='${settings.dir}/img/klarna.svg' />
          </div>
          <div class='lav-choose__body'>
            <img src='${settings.dir}/img/icon-redirect.svg' />

            <span>
              After clicking “Complete order”, you will be redirected to Klarna  to complete your purchase securely
            </span>
          </div>
        </div>

        <div class='lav-later__choose lav-choose lav-choose__afterpay'>
          <div class='lav-choose__head'>
            <span class='lav-choose__caption'>Afterpay</span>
            <img class='lav-tip__afterpay'  class='lav-afterpay' src='${settings.dir}/img/afterpay.svg' />
          </div>
          <div class='lav-choose__body'>
            <img src='${settings.dir}/img/icon-redirect.svg' />

            <span>
              After clicking “Complete order”, you will be redirected to Afterpay  to complete your purchase securely
            </span>
          </div>
        </div>
      </div>

    </div>
  `;

  document
    .querySelector('.right-component')
    .insertAdjacentHTML('beforeend', paymentEl);

  document
    .querySelector('.lav-payment__choose .lav-choose__body')
    .insertAdjacentElement(
      'afterbegin',
      document.querySelector('.payment-component')
    );

  document
    .querySelector('.card-cvc')
    .insertAdjacentHTML(
      'afterbegin',
      `<img class='lav-quest' src="${settings.dir}/img/icon-quest.svg" />`
    );

  let items = ['.lav-later__choose', '.lav-payment__choose'];

  for (let item of items) {
    document.querySelectorAll(item).forEach((el) => {
      el.addEventListener('click', function (e) {
        console.log(e.target);
        if (e.target.classList.contains('lav-tip__klarna')) {
          openModal('klarna');
          return false;
        }
        if (e.target.classList.contains('lav-tip__afterpay')) {
          openModal('afterpay');
          return false;
        }
        if (this.classList.contains('active')) return false;

        if (document.querySelector('.lav-payment__choose.active')) {
          document
            .querySelector('.lav-payment__choose.active')
            .classList.remove('active');
        }

        if (document.querySelector('.lav-later__choose.active')) {
          document
            .querySelector('.lav-later__choose.active')
            .classList.remove('active');
        }

        this.classList.add('active');
      });
    });
  }

  // for (let el of document.querySelectorAll('.lav-choose__caption')) {
  //   el.addEventListener('click', function (e) {
  //     e.preventDefault();
  //     console.log('test');
  //   });
  // }
}

function moveToStep() {
  const hideArr = [
    '.lav-express',
    '.lav-summary__line:nth-child(3)',
    '.lav-summary',
    '.lav-shipping',
    '.right-component>.error-message+div',
    '.lav-later',
    '.lav-payment',
    '.lav-choose__klarna',
    '.lav-choose__afterpay',
  ];

  for (let el of hideArr) {
    document.querySelector(el).classList.add('lav-hide');
  }

  document
    .querySelector('.lav-breadcrumbs__item.active')
    .classList.remove('active');

  if (step === 1) {
    document.querySelector('.lav-express').classList.remove('lav-hide');
    document
      .querySelector('.right-component>.error-message+div')
      .classList.remove('lav-hide');

    document
      .querySelector('.lav-breadcrumbs__item:nth-child(1)')
      .classList.add('active');

    document.querySelector('.lav-control__back span').innerText =
      'Back to product options';
    document.querySelector('.lav-control__next').innerText =
      'Continue to shipping';
  }

  if (step === 2) {
    document
      .querySelector('.lav-breadcrumbs__item:nth-child(2)')
      .classList.add('active');
    document.querySelector('.lav-shipping').classList.remove('lav-hide');
    document.querySelector('.lav-summary').classList.remove('lav-hide');

    document.querySelector('.lav-control__back span').innerText =
      'Back to information';
    document.querySelector('.lav-control__next').innerText =
      'Continue to payment';
  }

  if (step === 3) {
    document
      .querySelector('.lav-breadcrumbs__item:nth-child(3)')
      .classList.add('active');
    document
      .querySelector('.lav-summary__line:nth-child(3)')
      .classList.remove('lav-hide');
    document.querySelector('.lav-summary').classList.remove('lav-hide');

    document.querySelector('.lav-control__back span').innerText =
      'Back to shipping';
    document.querySelector('.lav-control__next').innerText = 'Complete order';

    document.querySelector('.lav-payment').classList.remove('lav-hide');

    if (!document.querySelector('.payLaterBtn.klarna').disabled) {
      document.querySelector('.lav-later').classList.remove('lav-hide');
      document
        .querySelector('.lav-choose__klarna')
        .classList.remove('lav-hide');
    }

    if (!document.querySelector('.payLaterBtn.afterpay').disabled) {
      document.querySelector('.lav-later').classList.remove('lav-hide');
      document
        .querySelector('.lav-choose__afterpay')
        .classList.remove('lav-hide');
    }

    if (
      document.querySelector('.payLaterBtn.afterpay').disabled &&
      document.querySelector('.payLaterBtn.klarna').disabled
    ) {
      document.querySelector('.lav-payment__choose').click();
    }
  }

  document
    .querySelector('.cart-page-component')
    .scrollIntoView({ behavior: 'smooth' });
}

function validateStepOne() {
  return true;
  let checkArr = [
    'email',
    'fname',
    'lname',
    'shipping-city',
    'country',
    'shipping-address',
  ];

  for (let inp of checkArr) {
    if (!document.querySelector('[name="' + inp + '"]').value) {
      document.querySelector('.pay-btn').click();
      document
        .querySelector('.email-address-component')
        .scrollIntoView({ behavior: 'smooth' });

      return false;
    }
  }

  return true;
}

function initModals() {
  const modalEl = `
    <div class='lav-modal'>
      <div class='lav-modal__inner lav-modal__pay  lav-modal__klarna'>
        <div class='lav-modal__head'>
          <img src='${settings.dir}/img/klarna-text.svg' />
          <img class='lav-modal__close' src='${settings.dir}/img/icon-close.svg' />
        </div>
        <div class='lav-modal__body'>
          <div class='lav-modal__title'>Pay in 3</div>
          <div class='lav-modal__caption'>Interest free</div>
          <div class='lav-modal__list'>
            <div class='lav-modal__item'>
              <img src='${settings.dir}/img/icon-basket.svg' />
              <span>Add DNA test bundle to your basket</span>
            </div>
            <div class='lav-modal__item'>
              <img src='${settings.dir}/img/icon-select.svg' />
              <span>Select Klarna at checkout</span>
            </div>
            <div class='lav-modal__item'>
              <img src='${settings.dir}/img/icon-login.svg' />
              <span>Log into or create your account</span>
            </div>
            <div class='lav-modal__item'>
              <img src='${settings.dir}/img/icon-pie.svg' />
              <span>Your purchase will be split into 3 equal card payments. The first payment is collected when the order is shipped. The remaining two will be automatically collected in 30 and 60 days.</span>
            </div>
          </div>
          <div class='lav-modal__footer'>
            Available on purchases up to 1,000.00
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalEl);
}

function openModal(type) {
  console.log(type);
}
