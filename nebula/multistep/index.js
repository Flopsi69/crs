console.log('initExp');

/********* Settings **********/
const settings = {
  dir: 'https://flopsi69.github.io/crs/nebula/multistep',
  clarity: true,
  observe: true,
};

let step = 1;

//Hotjar
if (settings.clarity) {
  const clarityInterval = setInterval(function () {
    if (typeof clarity == 'function') {
      clearInterval(clarityInterval);
      clarity('set', 'multistep_checkout', 'variant_1');
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
      event: 'event-to-ga',
      eventCategory: 'Experiment. Multistep checkout',
      eventAction: action,
      eventLabel: label,
      eventValue: '',
    };
    console.log('EventFire:', objData);
    dataLayer.push(objData);
  } catch (e) {}
}

// Observe
if (settings.observe) {
  let observer = new MutationObserver((mutations) => {
    for (let mutation of mutations) {
      for (let node of mutation.addedNodes) {
        if (!(node instanceof HTMLElement)) continue;

        console.log(node);
        if (node.name === 'state' && node.tagName === 'SELECT') {
          let el = document.querySelector(node);

          el.addEventListener('click', function () {
            gaEvent(
              `Select. ${el.querySelector('option').innerText}`,
              'Step: Information. Shipping information'
            );
          });

          el.addEventListener('change', function () {
            gaEvent(
              `Selected option. ${el.querySelector('option').innerText} . ${
                el.value
              }`,
              'Step: Information. Shipping information'
            );
          });
        }

        if (
          node.classList.contains('modal-mask') &&
          node.querySelector('.card-header') &&
          node.querySelector('.edit-btn')
        ) {
          node
            .querySelector('.edit-btn')
            .addEventListener('click', function () {
              step = 1;
              moveToStep();
            });
        }
      }
    }
  });

  let demoElem = document.body;

  observer.observe(demoElem, { childList: true, subtree: true });
}

// Styles
const styles = `
  .lav-modal-open {
    overflow: hidden;
  }
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
    margin-bottom: 30px!important;
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
    cursor: pointer;
  }
  .lav-breadcrumbs__item.active ~ .lav-breadcrumbs__item {
    // cursor: auto;
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
    // display: grid!important;
    // grid-template-columns: 1fr 1fr;
    // gap: 12px;
    position: relative;
    padding: 16px;
    line-height: 0;
  }
  .lav-express.lav-hide {
    display: none!important;
  }
  @media(max-width: 1100px) {
    .lav-express {
      gap: 16px;
      grid-template-columns: 1fr;
    }
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
    float: right;
  }
  .lav-address {
    float: left;
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
  .lav-paypal-btn {
    margin-left: 20px;
  }

  @media(max-width: 1100px) {
    .lav-control__next {
      max-width: 250px;
    }
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

  .lav-paypal__choose {
    margin-top: 12px;
  }

  .lav-paypal__choose .lav-choose__body {
    display: none;
  }

  .lav-paypal__choose.active  {
    border: 1px solid #0B0F41;
  }
  .lav-paypal__choose.active .lav-choose__body {
    display: flex;
    border-top: 1px solid #0B0F41;
  }
  .lav-paypal__choose .lav-choose__body span {
    max-width: 450px;
  }

  .lav-payment__choose .lav-choose__body {
    background: #F9F9F9;
    display: none;
  }

  .lav-payment__choose.active .lav-choose__body{
    display: block;
  }

  .stripe-card-div .stripe-card .card-expiration-cvc .input-div {
    margin-bottom: 0!important;
  }
  
  .lav-payment .StripeElement {
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

  .lav-later .lav-choose__body, .lav-paypal__choose .lav-choose__body  {
    padding: 23px;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #737373;
  }

  .lav-later .lav-choose__body img, .lav-paypal__choose .lav-choose__body img {
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
    display: flex;
    justify-content: space-between;
  }
  .lav-later__choose, .lav-payment__choose {
    overflow: hidden;
  }
  .lav-later__choose {
    margin-top: 12px;
  }
  .lav-later__choose .lav-choose__head, .lav-payment__choose .lav-choose__head, .lav-paypal__choose .lav-choose__head {
    cursor: pointer;
    transition: 0.3s;
  }
  .lav-later__choose .lav-choose__head:hover, .lav-payment__choose .lav-choose__head:hover, .lav-paypal__choose .lav-choose__head:hover {
    opacity: 0.7;
  }
  .lav-tip__klarna, .lav-tip__afterpay {
    cursor: pointer;
    transition: 0.35s;
  }
  .lav-tip__klarna:hover, .lav-tip__afterpay:hover {
    opacity: 0.7;
  }
  .lav-later__choose.active .lav-choose__head, .lav-payment__choose.active .lav-choose__head, .lav-paypal__choose.active .lav-choose__head, .lav-lock .lav-choose__head {
    cursor: auto;
  }
  .lav-later__choose.active .lav-choose__head:hover, .lav-payment__choose.active .lav-choose__head:hover, .lav-paypal__choose.active .lav-choose__head:hover, .lav-lock .lav-choose__head:hover {
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
    // border-top: 1px solid #0B0F41;
  }
  .lav-payment__choose.active {
    // border: 1px solid #0B0F41;
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
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.35s;
  }
  .lav-modal:not(.active ){
    opacity: 0;
    pointer-events: none;
  }
  .lav-modal.active {
    opacity: 1;
  }
  .lav-modal__inner:not(.active) {
    display: none;
  }
  .lav-modal__inner {
    background: #fff;
    position: relative;
    max-width: 380px;
    width: 100%;
    max-height: 90%;
    overflow-y: auto;
    border-radius: 8px;
  }
  .lav-modal__cvc-descr {
    font-size: 18px;
    text-align: center;
    line-height: 1.4;
    color: #0B0F41;
  }
  .lav-modal__close {
    cursor: pointer;
    transition: 0.35s;
  }
  .lav-modal__close:hover {
    opacity: 0.5;
    transform: scale(1.1);
  }
  .lav-modal__head {
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 30px;
  }
  .lav-modal__klarna .lav-modal__head {
    background-color: #FEB4C7;
  }
  .lav-modal__afterpay .lav-modal__head {
    background-color: #C2FAE5;
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
    line-height: 1.4;
    color: #505985;
    padding: 12px 0;
    margin: 0 34px;
    border-top: 1px solid #ECF7FD;
  }
  .lav-modal__list {
    margin-top: 24px;
  }
  .lav-modal__item {
    font-family: SpaceGrotesk-Medium;
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.4;
    color: #0B0F41;
  }
  .lav-modal__item:last-child {
    align-items: flex-start;
  }
  .lav-modal__item-icon {
    width: 30px;
    display: flex;
    justify-content: center;
    margin-right: 16px;
    flex-shrink: 0;
  }
  .lav-modal__item + .lav-modal__item {
    margin-top: 24px;
  }
  .lav-modal__cvc .lav-modal__close {
    position: absolute;
    right: 12px;
    top: 12px;
  }
  .lav-modal__cvc .lav-modal__body {
    padding-top: 30px;
  }
  .lav-collapse {
    border-bottom: 1px solid #F9F9F9;
    display: none;
    align-items: center;
    padding: 18px 20px;
    background: #fff;
  }
  .lav-collapse img {
    transition: 0.35s;
  }
  .lav-collapse.active img {
    transform: rotate(180deg);
  }
  .lav-collapse__caption {
    font-size: 16px;
    line-height: 140%;
    color: #3F4CEC;
    margin-right: auto;
    font-family: Spacegrotesk-Bold;
  }
  .lav-collapse__price {
    margin: 0 22px;
    font-family: Spacegrotesk-Bold;
    font-size: 18px;
    line-height: 1.3;
    color: #0B0F41;
  }
  .left-component.lav-hide {
    display: block!important;
  }
  .lav-brief {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .subscr__descr.lav-brief p,  .subscr__descr.lav-brief div {
    display: inline;
  }
  .subscr__descr.lav-brief br {
    display: none;
  }
  .lav-brief-toggle {
    font-family: SpaceGrotesk-Bold;
    // position: absolute;
    right: 0;
    bottom: 0;
    background-color: #fff;
    font-weight: 700;
    font-size: 14px;
    line-height: 140%;
    color: #3F4CEC;
    cursor: pointer;
    white-space: nowrap;
    background-color: #fff;
    display: inline-block;
  }
  .lav-brief-toggle:hover {
    text-decoration: underline;
  }
  .subscr__descr, .order__info-list {
    max-width: 75%;
  }
  .lav-lock .lav-choose__caption {
    color: #CED4D9;
  }
  .lav-lock .lav-choose__head:before {
    background: url(${settings.dir}/img/icon-lock-gray.svg) center no-repeat;
    border: none;
    width: 18px;
    height: 18px;
  }
  .lav-pay__error {
    display: flex;
    justify-content: flex-end;
    font-family: SpaceGrotesk-Regular;
    align-items: center;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    color: #EC1C1D;
  }
  .lav-payment .lav-pay__error {
    margin-top: 8px;
    margin-bottom: -4px;
  }
  .lav-pay__error img {
    margin-right: 6px;
  }
  .lav-paypal-btn {
    max-width: 380px;
    width: 100%;
  }
  @media(max-width: 1130px) {
    .lav-pay__error {
      justify-content: flex-start;
    }
    .lav-later__label {
      flex-flow: column;
    }
    .lav-later__label .lav-pay__error {
      margin-top: 8px;
    }
  }
  @media (max-width: 1700px) {
    .subscr__descr, .order__info-list {
      max-width: 90%;
    }
  }
  @media(max-width: 768px) {
    .shipping-address-component .name-div, .shipping-address-component .location-div {
      flex-flow: column;
    }
    .shipping-address-component .name-div .input-div, .shipping-address-component .location-div .input-div, .shipping-address-component .location-div .input-div:not(.zipcode-div) {
      width: 100%!important;
    }
    .subscr__descr, .order__info-list {
      max-width: 100%;
    }
    .subscr__info, .order__info {
      text-align: left!important;
    }
  }
  .cart-page {
    max-width: 1850px;
    margin: auto;
  }
  @media(max-width: 1024px) {
    .lav-collapse {
      display: flex;
    }
    .subscr__info {
      order: 3;
    }
    .order__wrap {
      padding-top: 25px!important;
    }
    footer {
      padding-bottom: 0!important;
    }
    .lav-express .seperator-container-checkout span {
      background: #F9F9F9;
    }
    .lav-top {
      font-size: 16px;
      padding: 16px 24px;
    }
    .lav-top br {
      display: none;
    }
    .right-component {
      background: #F9F9F9;
      margin: 0 -20px;
      padding: 20px 20px 35px!important;
    }
    .lav-breadcrumbs {
      margin-top: 0;
    }
    .order-summary-page {
      margin-bottom: 48px!important;
    }
    .left-component {
      padding-top: 30px!important;
    }
    .left-component.lav-hide {
      display: none!important;;
    }
    .cart-page .cart-page-component {
      padding-top: 0!important;
      padding-bottom: 0!important;
    }
    .cart-page {
      padding-bottom: 0!important;
    }
    .lav-breadcrumbs__item + .lav-breadcrumbs__item:before {
      filter: invert(90%) sepia(30%) saturate(612%) hue-rotate(192deg) brightness(98%) contrast(92%);
    }
    .lav-express {
      margin-top: 35px;
    }
    .express-separator {
      margin-bottom: 15px;
    }
    .lav-apartament, .lav-address {
      float: none;
      width: 100%;
    }
    .lav-control {
      margin-top: 32px;
      flex-flow: column-reverse;
    }
    .lav-control__next, .lav-paypal-btn {
      margin-left: 0;
      max-width: 100%;
      margin-bottom: 20px;
    }
    .lav-summary__item:not(.lav-free):nth-child(3) {
      font-family: SpaceGrotesk-Regular;
    }

    .lav-summary__line {
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .lav-summary__item:nth-child(2) {
      order: 3;
      width: 100%;
      margin: 4px 0 0;
    }
    .lav-summary {
      background-color: #fff;
    }
    .lav-label {
      margin-bottom: 12px;
    }
    .lav-label_caption {
      margin-bottom: 4px;
    }
    .lav-choose {
      background-color: #fff;
    }
    .lav-choose__add img {
      max-width: 100%;
    }
    .lav-choose__add {
      max-width: 70%;
    }
    .lav-payment__choose.active {
      border: 2px solid #fff;
    }
    .lav-payment__choose.active .lav-choose__body {
      border-color: #fff;
    }
  }
  @media(max-width: 420px) {
    .lav-modal__inner {
      max-width: 92%;
    }
    .lav-modal__cvc-descr {
      font-size: 16px;
    }
    .lav-later .lav-choose__body, .lav-paypal__choose .lav-choose__body {
      line-height: 20px;
      padding: 15px;
      font-size: 13px;
    }
  }
`;

const stylesEl = document.createElement('style');
stylesEl.innerHTML = styles;
document.body.appendChild(stylesEl);
/*** STYLES / end ***/

/********* Custom Code **********/
const initInterval = setInterval(() => {
  if (document.querySelector('.right-component')) {
    clearInterval(initInterval);
    init();
  }
}, 200);

let intrevalPaypal;

function init() {
  console.log('initFn');
  gaEvent('loaded');

  const collapseIntervl = setInterval(function () {
    if (document.querySelector('.total__value')) {
      clearInterval(collapseIntervl);

      initCollapse();
    }
  }, 200);
  initHead();
  initFirstStep();
  initSummary();
  initShipping();
  initPayment();
  initControl();
  initModals();
  initProductListener();
  observerView();
  initEvents();
}

function initCollapse() {
  const el = `
    <div class='lav-collapse'>
      <div class='lav-collapse__caption'>
        <span>Hide</span> order summary
      </div>
      <div class='lav-collapse__price'></div>
      <img class='lav-modal__close' src='${settings.dir}/img/icon-arrow-blue.svg' />
    </div>
  `;

  document.querySelector('.cart-page').insertAdjacentHTML('beforebegin', el);

  document.querySelector('.lav-collapse__price').innerText =
    document.querySelector('.total__value').textContent;

  setInterval(() => {
    if (document.querySelector('.total__value')) {
      document.querySelector('.lav-collapse__price').innerText =
        document.querySelector('.total__value').textContent;
      document.querySelector('.lav-control').classList.remove('lav-hide');
    } else if (!document.querySelector('.lav-control.lav-hide')) {
      document.querySelector('.lav-control').classList.add('lav-hide');
    }
  }, 800);

  document
    .querySelector('.lav-collapse')
    .addEventListener('click', function () {
      this.classList.toggle('active');
      if (this.classList.contains('active')) {
        document.querySelector('.lav-collapse__caption span').innerText =
          'Show';
        document.querySelector('.left-component').classList.add('lav-hide');

        gaEvent(
          'Button. Hide order summary',
          'Step: ' + getStepCaption() + '. Header'
        );
      } else {
        document.querySelector('.lav-collapse__caption span').innerText =
          'Hide';
        document.querySelector('.left-component').classList.remove('lav-hide');

        gaEvent(
          'Button. Show order summary',
          'Step: ' + getStepCaption() + '. Header'
        );
      }
    });
}

function initHead() {
  let topEl = `
    <div class="lav-top lav-watch">You are one step away from getting the most sophisticated <br/> test that decodes 100%&nbsp;of your&nbsp;DNA</div>
  `;

  document.querySelector('#app').insertAdjacentHTML('afterbegin', topEl);

  let breadcrumbsEl = `
    <div class='lav-breadcrumbs'>
      <div class='lav-breadcrumbs__item active' data-step='1'>Information</div>
      <div class='lav-breadcrumbs__item' data-step='2'>Shipping</div>
      <div class='lav-breadcrumbs__item' data-step='3'>Payment</div>
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

  // document
  //   .querySelector('.lav-express #google-pay-container')
  //   .insertAdjacentElement(
  //     'beforebegin',
  //     document.querySelector('.payment__buttons > div')
  //   );

  for (let el of document.querySelectorAll('.lav-breadcrumbs__item')) {
    el.addEventListener('click', function () {
      const parseStep = parseInt(el.dataset.step);

      gaEvent(
        `Button ${el.innerText}`,
        `Step: ${getStepCaption()}. Navigation`
      );

      if (parseStep < step || step == 2) {
        step = parseStep;
        moveToStep();
      } else if (step === 1 && validateStepOne()) {
        step = parseStep;
        moveToStep();
      }
    });
  }

  document.querySelector('.lav-top').addEventListener('click', function () {
    gaEvent(
      'Click. You are one step away from getting...',
      'Step: ' + getStepCaption() + '. Header'
    );
  });

  document
    .querySelector('.lav-top')
    .addEventListener('mouseenter', function () {
      if (window.innerWidth > 768) {
        gaEvent(
          'Hover. You are one step away from getting...',
          'Step: ' + getStepCaption() + '. Header'
        );
      }
    });
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
        gaEvent('Button. Back to product options', 'Step: Information');
      } else if (step === 2) {
        gaEvent('Button. Back to information', 'Step: Shipping');
      } else {
        gaEvent('Button. Back to shipping', 'Step: Payment');
      }

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
      if (step === 1) {
        gaEvent('Button. Continue to shipping', 'Step: Information');
      } else if (step === 2) {
        gaEvent('Button. Continue to payment', 'Step: Shipping');
      } else {
        // todo
        gaEvent('Button. Complete Order', 'Step: Payment');
      }
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
        } else if (document.querySelector('.lav-paypal__choose.active')) {
          document.querySelector('.payLaterBtn.afterpay').click();
        }
        // todo

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
        <div class='lav-summary__item'>International Express Shipping (3–6&nbsp;business&nbsp;days)</div>
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
      if (
        item
          .closest('.lav-summary__line')
          .querySelector('.lav-summary__item')
          .innerText.trim() === 'Contact'
      ) {
        gaEvent('Button. Change', `Step: ${getStepCaption()}. Contact`);
      } else {
        gaEvent('Button. Change', `Step: ${getStepCaption()}. Ship to`);
      }

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

      <div class='lav-paypal__choose lav-choose'>
        <div class='lav-choose__head'>
          <span class='lav-choose__caption'>PayPal</span>
          <img src='${settings.dir}/img/paypal.svg' />
        </div>
        <div class='lav-choose__body'>
          <img src='${settings.dir}/img/icon-redirect.svg' />

          <span>
            After clicking “Complete order”, you will be redirected to PayPal to complete your purchase securely
          </span>
        </div>
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

  let items = [
    '.lav-later__choose',
    '.lav-payment__choose',
    '.lav-paypal__choose',
  ];

  for (let item of items) {
    document.querySelectorAll(item).forEach((el) => {
      el.addEventListener('click', function (e) {
        if (e.target.classList.contains('lav-tip__klarna')) {
          openModal('klarna');
          return false;
        }
        if (e.target.classList.contains('lav-tip__afterpay')) {
          openModal('afterpay');
          return false;
        }

        if (
          this.classList.contains('active') ||
          this.classList.contains('lav-lock')
        )
          return false;

        if (document.querySelector('.lav-payment__choose.active')) {
          document
            .querySelector('.lav-payment__choose.active')
            .classList.remove('active');
        }

        if (document.querySelector('.lav-paypal__choose.active')) {
          document
            .querySelector('.lav-paypal__choose.active')
            .classList.remove('active');
        }

        if (document.querySelector('.lav-later__choose.active')) {
          document
            .querySelector('.lav-later__choose.active')
            .classList.remove('active');
        }

        this.classList.add('active');

        if (el.classList.contains('lav-paypal__choose')) {
          if (!document.querySelector('.lav-control .lav-paypal-btn')) {
            document
              .querySelector('.payment__buttons>div')
              .classList.add('lav-paypal-btn');

            document
              .querySelector('.lav-control')
              .insertAdjacentElement(
                'beforeend',
                document.querySelector('.lav-paypal-btn')
              );
          }
          document.querySelector('.lav-control .lav-paypal-btn').style.display =
            'block';
          document.querySelector('.lav-control__next').style.display = 'none';
        } else if (document.querySelector('.lav-control .lav-paypal-btn')) {
          document.querySelector('.lav-control .lav-paypal-btn').style.display =
            'none';
          document.querySelector('.lav-control__next').style.display = 'block';
        }

        if (el.classList.contains('lav-payment__choose')) {
          gaEvent('Payment method. Credit card', 'Step: Payment');
        } else if (el.classList.contains('lav-choose__klarna')) {
          gaEvent('Payment method. Klarna', 'Step: Payment');
        } else if (el.classList.contains('lav-paypal__choose')) {
          gaEvent('Payment method. Paypal', 'Step: Payment');
        } else if (el.classList.contains('lav-choose__afterpay')) {
          gaEvent('Payment method. Afterpay', 'Step: Payment');
        }
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

function moveToStep(isScroll = true) {
  if (intrevalPaypal) {
    clearInterval(intrevalPaypal);
  }
  if (!document.querySelector('.lav-collapse.active') && isScroll) {
    document.querySelector('.lav-collapse').classList.add('active');

    document.querySelector('.lav-collapse__caption span').innerText = 'Show';
    document.querySelector('.left-component').classList.add('lav-hide');
  }

  if (
    document.querySelector('.lav-paypal-btn') ||
    document.querySelector('.lav-control>div:not(.lav-control__back)')
  ) {
    if (document.querySelector('.lav-control>div:not(.lav-control__back)')) {
      document
        .querySelector('.lav-control>div:not(.lav-control__back)')
        .classList.add('lav-paypal-btn');
    }
    document.querySelector('.lav-control .lav-paypal-btn').style.display =
      'none';
    document.querySelector('.lav-control__next').style.display = 'block';
  }

  const hideArr = [
    '.lav-express',
    '.lav-summary__line:nth-child(3)',
    '.lav-summary',
    '.lav-shipping',
    '.right-component>.error-message+div',
    '.lav-later',
    '.lav-payment',
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
  } else {
    const email = document.querySelector('[name="email"]').value;
    let address =
      document.querySelector('[name="country"]').value +
      ', ' +
      document.querySelector('[name="shipping-city"]').value +
      ', ' +
      document.querySelector(
        '[name="shipping-address"][autocomplete="address-line1"]'
      ).value +
      ' ' +
      document.querySelector(
        '[name="shipping-address"][autocomplete="address-line2"]'
      ).value;

    if (document.querySelector('[name="state"]')) {
      address += ' ' + document.querySelector('[name="state"]').value;
    }

    if (document.querySelector('[name="shipping-zip"]')) {
      address += ' ' + document.querySelector('[name="shipping-zip"]').value;
    }

    document.querySelector(
      '.lav-summary__line:nth-child(1) .lav-summary__item:nth-child(2)'
    ).innerText = email;
    document.querySelector(
      '.lav-summary__line:nth-child(2) .lav-summary__item:nth-child(2)'
    ).innerText = address;
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
    intrevalPaypal = setInterval(() => {
      if (
        document.querySelector('.shipping-address-component .error-message') ||
        document.querySelector('.email-address-component .error-message')
      ) {
        if (intrevalPaypal) {
          clearInterval(intrevalPaypal);
        }
        step = 1;
        moveToStep();
      }
    }, 400);
    if (
      document.querySelector('.lav-paypal__choose.active') &&
      document.querySelector('.lav-paypal-btn')
    ) {
      document.querySelector('.lav-control .lav-paypal-btn').style.display =
        'block';
      document.querySelector('.lav-control__next').style.display = 'none';
    }
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
    document.querySelector('.lav-later').classList.remove('lav-hide');

    if (!document.querySelector('.payLaterBtn.klarna').disabled) {
      document
        .querySelector('.lav-choose__klarna')
        .classList.remove('lav-lock');
    } else {
      document.querySelector('.lav-choose__klarna').classList.add('lav-lock');
      if (document.querySelector('.lav-choose__klarna.active')) {
        document.querySelector('.lav-payment__choose').click();
      }
    }

    if (
      document.querySelector('.paylater-wrap .paylater-error') &&
      document.querySelector('.paylater-wrap .paylater-error').style.display !==
        'none' &&
      document
        .querySelector('.paylater-wrap .paylater-error')
        .innerText.trim() === 'Lifetime purchases only'
    ) {
      let textEl = `<span class='lav-pay__error'><img src='${settings.dir}/img/icon-note.svg' /> Only available for Lifetime Subscription purchases.</span>`;

      if (!document.querySelector('.lav-pay__error')) {
        document
          .querySelector('.lav-paypal__choose')
          .insertAdjacentHTML('beforebegin', textEl);

        document
          .querySelector('.lav-later__label')
          .insertAdjacentHTML('beforeend', textEl);
      }
    } else if (document.querySelector('.lav-pay__error')) {
      for (let item of document.querySelectorAll('.lav-pay__error')) {
        item.remove();
      }
    }

    if (
      !document.querySelector('.payment__buttons .disable-element') &&
      !document.querySelector('.lav-control .disable-element')
    ) {
      document
        .querySelector('.lav-paypal__choose')
        .classList.remove('lav-lock');
    } else {
      document.querySelector('.lav-paypal__choose').classList.add('lav-lock');
      if (document.querySelector('.lav-paypal__choose.active')) {
        document.querySelector('.lav-payment__choose').click();
      }
    }

    if (
      !document.querySelector('.lav-paypal-btn') &&
      document.querySelector('.lav-control>div:not(.lav-control__back')
    ) {
      document
        .querySelector('.lav-control>div:not(.lav-control__back')
        .classList.add('lav-paypal-btn');
    }

    if (!document.querySelector('.payLaterBtn.afterpay').disabled) {
      document
        .querySelector('.lav-choose__afterpay')
        .classList.remove('lav-lock');
    } else {
      document.querySelector('.lav-choose__afterpay').classList.add('lav-lock');
      if (document.querySelector('.lav-choose__afterpay.active')) {
        document.querySelector('.lav-payment__choose').click();
      }
    }

    if (
      document.querySelector('.payLaterBtn.afterpay').disabled &&
      document.querySelector('.payLaterBtn.klarna').disabled
    ) {
      document.querySelector('.lav-payment__choose').click();
    }
  }

  if (isScroll) {
    document
      .querySelector('.right-component')
      .scrollIntoView({ behavior: 'smooth' });
  }
}

function validateStepOne() {
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
    <div class='lav-modal' style='display: none;'>
      <div class='lav-modal__inner lav-modal__pay lav-modal__klarna'>
        <div class='lav-modal__head'>
          <img src='${settings.dir}/img/klarna-text.svg' />
          <img class='lav-modal__close' src='${settings.dir}/img/icon-close.svg' />
        </div>
        <div class='lav-modal__body'>
          <div class='lav-modal__title'>Pay in 3</div>
          <div class='lav-modal__caption'>Interest free</div>
          <div class='lav-modal__list'>
            <div class='lav-modal__item'>
              <div class='lav-modal__item-icon'>
                <img src='${settings.dir}/img/icon-basket.svg' />
              </div>
              <span>Add DNA test bundle to your basket</span>
            </div>
            <div class='lav-modal__item'>
              <div class='lav-modal__item-icon'>
                <img src='${settings.dir}/img/icon-select.svg' />
              </div>
              <span>Select Klarna at checkout</span>
            </div>
            <div class='lav-modal__item'>
              <div class='lav-modal__item-icon'>
                <img src='${settings.dir}/img/icon-login.svg' />
              </div>
              <span>Log into or create your account</span>
            </div>
            <div class='lav-modal__item'>
              <div class='lav-modal__item-icon'>
                <img src='${settings.dir}/img/icon-pie.svg' />
              </div>
              <span>Your purchase will be split into 3 equal card payments. The first payment is collected when the order is shipped. The remaining two will be automatically collected in 30 and 60 days</span>
            </div>
          </div>
        </div>
        <div class='lav-modal__footer' style='text-align: center'>
          Available on purchases up to 1,000.00
        </div>
      </div>

      <div class='lav-modal__inner lav-modal__pay  lav-modal__afterpay'>
        <div class='lav-modal__head'>
          <img src='${settings.dir}/img/afterpay-text.svg' />
          <img class='lav-modal__close' src='${settings.dir}/img/icon-close.svg' />
        </div>
        <div class='lav-modal__body'>
          <div class='lav-modal__title'>Pay in 4</div>
          <div class='lav-modal__caption'>Always interest-free</div>
          <div class='lav-modal__list'>
            <div class='lav-modal__item'>
              <div class='lav-modal__item-icon'>
                <img src='${settings.dir}/img/icon-basket.svg' />
              </div>
              <span>Add DNA test bundle to your basket</span>
            </div>
            <div class='lav-modal__item'>
              <div class='lav-modal__item-icon'>
                <img src='${settings.dir}/img/icon-select.svg' />
              </div>
              <span>Select Afterpay at checkout</span>
            </div>
            <div class='lav-modal__item'>
              <div class='lav-modal__item-icon'>
                <img src='${settings.dir}/img/icon-login.svg' />
              </div>
              <span>Log into or create your account</span>
            </div>
            <div class='lav-modal__item'>
              <div class='lav-modal__item-icon'>
                <img src='${settings.dir}/img/icon-pie.svg' />
              </div>
              <span>Your purchase will be split into 4 payments, payable every 2 weeks</span>
            </div>
          </div>
        </div>
        <div class='lav-modal__footer'>
          You must be over 18, a resident of the U.S. and meet additional eligibility criteria to qualify. Late fees may apply. Estimated payment amounts show on product pages exclude taxes and shipping charges, which are added at checkout. Click here for complete terms. Loans to California residents made or arranged pursuant to a California Finance Lenders Law license ©2020 Afterpay
        </div>
      </div>

      <div class='lav-modal__inner lav-modal__cvc'>
        <div class='lav-modal__body'>
          <img class='lav-modal__close' src='${settings.dir}/img/icon-close.svg' />
          
          <div class='lav-modal__cvc-descr'>3-digit security code usually found on the back of your card. American Express cards have a 4-digit code located on the front.</div>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalEl);

  document.querySelector('.lav-modal').addEventListener('click', function (e) {
    if (e.target.classList.contains('lav-modal')) {
      if (document.querySelector('.lav-modal__klarna.active')) {
        gaEvent(
          'Out of popup. Close popup',
          'Step: Payment. Billing address. Popup: Klarna'
        );
      } else if (document.querySelector('.lav-modal__afterpay.active')) {
        gaEvent(
          'Out of popup. Close popup',
          'Step: Payment. Billing address. Popup: Afterpay'
        );
      } else if (document.querySelector('.lav-modal__cvc.active')) {
        gaEvent(
          'Out of popup. Close popup',
          'Step: Payment. Billing address. Popup: Step: CVC'
        );
      }

      closeModal();
    }
  });

  for (let el of document.querySelectorAll('.lav-modal__close')) {
    el.addEventListener('click', function () {
      closeModal();

      if (el.closest('.lav-modal__klarna')) {
        gaEvent(
          'Cross icon. Close popup',
          'Step: Payment. Billing address. Popup: Klarna'
        );
      } else if (el.closest('.lav-modal__afterpay')) {
        gaEvent(
          'Cross icon. Close popup',
          'Step: Payment. Billing address. Popup: Afterpay'
        );
      } else if (el.closest('.lav-modal__cvc')) {
        gaEvent(
          'Cross icon. Close popup',
          'Step: Payment. Billing address. Popup: Step: CVC'
        );
      }
    });
  }

  document.querySelector('.lav-quest').addEventListener('click', function (e) {
    e.preventDefault();
    openModal('cvc');
  });
}

function openModal(type) {
  document.body.classList.add('lav-modal-open');
  document.querySelector('.lav-modal__' + type).classList.add('active');
  document.querySelector('.lav-modal').style.display = 'flex';
  setTimeout(() => {
    document.querySelector('.lav-modal').classList.add('active');
  }, 100);
}

function closeModal() {
  document.body.classList.remove('lav-modal-open');
  document.querySelector('.lav-modal').classList.remove('active');
  setTimeout(() => {
    document.querySelector('.lav-modal').style.display = 'none';
    document
      .querySelector('.lav-modal__inner.active')
      .classList.remove('active');
  }, 400);
}

function initProductListener() {
  let items = ['.order__quantity-btn, .order__remove, .plans'];

  for (let els of items) {
    document.querySelectorAll(els).forEach((el) => {
      el.addEventListener('click', function () {
        if (el.classList.contains('order__remove')) {
          gaEvent(
            'Cross icon. Delete product',
            `Step: ${getStepCaption()}. ${
              el.closest('.order').querySelector('.order__title').innerText
            }`
          );

          if (
            document.querySelector('#text') &&
            document.querySelector('#text').innerText === 'Your cart is empty!'
          ) {
            document
              .querySelector('.lav-breadcrumbs')
              .classList.add('lav-hide');

            document.querySelector('.lav-top').classList.add('lav-hide');

            document.querySelector('.lav-control').classList.add('lav-hide');
          }
        }
        if (el.classList.contains('order__quantity-btn')) {
          if (el.querySelector('.fa-plus')) {
            gaEvent(
              'Plus icon. Increase quantity',
              `Step: ${getStepCaption()}. ${
                el.closest('.order').querySelector('.order__title').innerText
              }`
            );
          } else {
            gaEvent(
              'Minus icon. Decrease quantity',
              `Step: ${getStepCaption()}. ${
                el.closest('.order').querySelector('.order__title').innerText
              }`
            );
          }
        }
        if (step === 3) {
          moveToStep(false);
        }
      });
    });
  }

  for (let item of document.querySelectorAll('.subscr__descr')) {
    item.classList.add('lav-brief');
    item.insertAdjacentHTML(
      'afterend',
      '<div class="lav-brief-toggle">See more</div>'
    );

    item.nextElementSibling.addEventListener('click', function () {
      item.classList.remove('lav-brief');
      gaEvent(
        `Click. See more - membership`,
        `Step: ${getStepCaption()}. Header`
      );
      item.nextElementSibling.remove();
    });
  }

  for (let item of document.querySelectorAll('.order__info-list')) {
    item.classList.add('lav-brief');
    item.insertAdjacentHTML(
      'afterend',
      '<div class="lav-brief-toggle">See more</div>'
    );
    item.nextElementSibling.addEventListener('click', function () {
      item.classList.remove('lav-brief');
      gaEvent(
        `Click. See more ${
          item.closest('.order__info').querySelector('.order__title').innerText
        }`,
        `Step: ${getStepCaption()}. Header`
      );
      item.nextElementSibling.remove();
    });
  }
}

function getStepCaption() {
  if (step === 1) {
    return 'Information';
  }

  if (step === 2) {
    return 'Shipping';
  }

  return 'Payment';
}

function observerView() {
  const observerOptions = {
    root: null,
    threshold: 0,
    // rootMargin: '-40%',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains('lav-top')) {
          console.log(entry.target);
          const event = [
            'View element (5 seconds on screen). You are one step away from getting...',
            'Step: ' + getStepCaption() + '. Header',
          ];

          isElementInViewport(entry.target, event);
        }
      }
    });
  }, observerOptions);

  for (let el of Array.from(document.querySelectorAll('.lav-watch'))) {
    observer.observe(el);
  }

  function isElementInViewport(el, event, timeout = 5) {
    setTimeout(() => {
      const rect = el.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      if (
        rect.top + rect.height * 0.3 < windowHeight &&
        rect.bottom > rect.height * 0.3
      ) {
        observer.unobserve(el);
        if (!el.classList.contains('in-view')) {
          gaEvent(...event);
          el.classList.add('in-view');
        }
      }
    }, timeout * 1000);
  }
}

function initEvents() {
  document
    .querySelector('#google-pay-container')
    .addEventListener('click', function () {
      gaEvent('Button. GooglePay', 'Step: Information. Express checkout');
    });

  document
    .querySelector('#apple-pay-container')
    .addEventListener('click', function () {
      gaEvent('Button. ApplePay', 'Step: Information. Express checkout');
    });

  for (let item of document.querySelectorAll(
    '.shipping-address-component input, .email-address-component input'
  )) {
    item.addEventListener('focus', function () {
      gaEvent(
        `Input. ${item.placeholder}`,
        'Step: Information. Shipping information'
      );
    });
  }

  for (let item of document.querySelectorAll(
    '.shipping-address-component select'
  )) {
    item.addEventListener('click', function () {
      gaEvent(
        `Select. ${item.querySelector('option').innerText}`,
        'Step: Information. Shipping information'
      );
    });

    item.addEventListener('change', function () {
      gaEvent(
        `Selected option. ${item.querySelector('option').innerText} . ${
          item.value
        }`,
        'Step: Information. Shipping information'
      );
    });
  }
}
