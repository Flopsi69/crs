console.log('initExp');

/********* Settings **********/
const settings = {
  dir: 'https://flopsi69.github.io/crs/myluminette/checkout',
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

// Observe
if (settings.observe) {
  let observer = new MutationObserver((mutations) => {
    for (let mutation of mutations) {
      for (let node of mutation.addedNodes) {
        if (!(node instanceof HTMLElement)) continue;

        console.log(node);

        // Code Here
      }
    }
  });

  let demoElem = document.body;

  observer.observe(demoElem, { childList: true, subtree: true });
}

// Styles
const styles = `
  .order-pages.order-summary .section:not(:first-child):after {
    display: none;
  }
  .order-pages .products-info {
    display: none;
  }
  .order-pages .component-order-steps {
    display: flex!important;
  }
  .component-order-steps .step-item:nth-child(1n + 3) {
    display: none;
  }
  .lav-body-checkout .container--size--lg, .lav-body-checkout .container-fluid--size--lg, .lav-body-checkout .container-lg--size--lg {
    max-width: 600px;
  }
  .lav-body-confirm .container--size--lg, .lav-body-confirm .container-fluid--size--lg, .lav-body-confirm .container-lg--size--lg {
    max-width: 824px;
  }
  .order-pages.order-summary .payment-methods .btn-send-form {
    margin-top: 16px;
  }
  .lav-body-confirm .btn-send-form {
    min-height: 0;
    height: 60px!important;
    min-width: auto;
    width: 300px!important;
  }
  .lav-body-confirm .btn-send-form .btn-text {
    font-size: 22px;
    letter-spacing: 1px;
  }
  .order-pages.order-summary .order-info>.title .btn-edit-order {
    left: 0;
    font-size: 16px;
  }
  .lav-body-confirm .details-block .wrapper {
    background: #FBFCFD;
    border-radius: 8px;
    box-shadow: 0px 44px 66px rgba(59, 83, 108, 0.22);
    padding: 48px;
    margin-top: 12px;
  }
  .order-pages.order-summary .order-info .columns {
    padding: 0;
  }
  .order-pages.order-summary .payment-methods .title {
    padding-bottom: 50px;
  }
  .order-pages.order-summary .order-info>.title, .order-pages.order-summary .payment-methods .title {
    font-size: 32px;
    line-height: 36px;
  }
  .order-pages.order-summary .section:not(:first-child) {
    padding-top: 0;
  }
  .order-pages .details-section, .order-pages.order-details .details-block .details-section:not(:first-child) {
    background: none;
    padding: 24px 48px 48px;
    margin-top: 12px!important;
    box-shadow: 0px 44px 66px rgb(59 83 108 / 22%);
    border-radius: 8px;
    background: #FBFCFD;
  }
  .order-pages.order-summary .payment-methods .forms-wrapper .form-block {
    padding: 0 15px;
  }
  .order-pages .details-block .gradient-1 {
    display: none;
  }
  .order-pages .details-block {
    padding: 0;
    background: none;
    box-shadow: none;
  }
  .order-pages.order-details .details-block .wrapper {
    display: block;
    padding: 0;
  }
  .order-pages.order-details .details-block .scroll-spy {
    display: none!important;
  }
  .order-pages.order-details .details-block .details-section .title {
    padding: 0;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
  }
  .order-pages.order-details .details-block .details-section .col-md-6, .order-pages.order-details .details-block .details-section .col-xl-8  {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .primary-input-wrapper .input {
    height: 60px;
    padding: 16px 24px;
  }
  .primary-input-wrapper .error-block, .primary-input-wrapper .label {
    padding-left: 24px;
    padding-right: 24px;
  }
  #scroll-spy-item-2 .fields {
    flex-direction: column;
    margin-bottom: 40px;
  }
  #scroll-spy-item-2 .fields>div:last-child {
    order: -2;
    max-width: 60%;
  }
  #scroll-spy-item-2 .fields>div:first-child {
    display: none;
  }
  #scroll-spy-item-2 .fields>div:nth-child(4) {
    max-width: 60%;
  }
  #scroll-spy-item-2 .fields>div:nth-child(3) {
    order: -1;
  }
  #scroll-spy-item-3 .title, #scroll-spy-item-3>.fields {
    display: none;
  }
  [data-step-form="3"] .fields {
    flex-direction: column;
  }
  [data-step-form="3"] .fields>div:last-child {
    order: -2;
  }
  [data-step-form="3"] .details-section:first-child .fields>div:first-child {
    display: none;
  }
  [data-step-form="3"] .fields>div:nth-child(3) {
    order: -1;
  }
  #scroll-spy-item-3 .title, #scroll-spy-item-3>.fields {
    display: none;
  }
  #scroll-spy-item-3:not(.active) {
    height: 0;
    padding: 0;
    overflow: hidden;
  }
  #scroll-spy-item-3.active{
    display: block;
  }
  #scroll-spy-item-4 .fields + .fields {
    flex-direction: column-reverse;
    margin-top: 24px;
  }
  #scroll-spy-item-4 .lav-accept-error + .fields {
    display: none;
  }
  #scroll-spy-item-4 .fields + .fields .col-xl-6 {
    flex: 0 0 100%;
    max-width: 100%;
    justify-content: center;
    text-align: center;
  }
  #scroll-spy-item-4 .payments-block {
    margin-top: 24px;
  }
  .lav-delivery-summary {
    display: flex;
    margin-top: 16px;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
  }
  .lav-delivery-summary img {
    margin-right: 12px;
  }
  .order-pages.order-details .details-block .payments-block .payment-icon:not(:last-child) {
    margin-right: 12px;
  }
  .order-pages.order-details .details-block .payments-block .payment-icon:not(:last-child) {
    width: 50px;
  }
  .btn-send-form svg {
    display: none;
  }
  .order-pages.order-details .details-block .btn-send-form .btn-text {
    padding-right: 0;
    font-weight: 700;
    font-size: 22px;
    line-height: 28px;
    letter-spacing: 1px;
  }
  .order-pages.order-details .details-block .btn-send-form {
    min-height: 60px;
    max-width: 300px;
    padding-top: 8px;
    padding-bottom: 8px;
  }

  .lav-path {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    font-size: 18px;
    line-height: 24px;
    color: #9FAFC3;
  }
  .lav-path__active {
    font-weight: 700;
    color: #517193;
  }

  .lav-labels {
    display: flex;
    border-radius: 12px;
    overflow: hidden;
    margin-top: 32px;
    display: flex;
    justify-content: center;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
  .lav-labels__item {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 17px 15px;
    background: #DDE3E9;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.5;
    color: #517193;
    flex: 1;
  }
  .lav-labels__item + .lav-labels__item {
    border-left: 1px solid #fff;
  }
  .lav-labels__item img {
    margin-right: 10px;
  }

  .lav-plate {
    padding: 24px 48px;
    background: #FBFCFD;
    border-radius: 8px;
    margin-top: 12px;
    box-shadow: 0px 44px 66px rgb(59 83 108 / 22%);
  }
  .lav-title {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #517193;
  }
  .lav-product__info {
    display: flex;
    align-items: center;
  }
  .lav-product__image {
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    color: #517193;
    margin-right: auto;
  }
  .lav-protect {
    margin-top: 24px;
  }
  .lav-protect__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .lav-protect__tip {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    color: #517193;
  }
  .lav-product__count {
    display: flex;
    border: 1px solid #D8DFE8;
    padding: 2px;
    overflow: hidden;
    margin: 0 24px;
    border-radius: 40px;
  }
  .lav-product__count-value {
    text-align: center;
    min-width: 32px;
    padding: 0 2px;
    font-weight: 600;
    font-size: 18px;
    color: #517193;
    line-height: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
  }
  .lav-product__count-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 0;
    background: linear-gradient(6.75deg, #3797F1 5.31%, #1B7FE7 94.73%);
    width: 30px;
    height: 30px;
    cursor: pointer;
    transition: 0.35s;
    outline: none;
  }
  .lav-product__count-btn.lav-disable {
    background: linear-gradient(6.75deg, rgba(55, 151, 241, 0.5) 5.31%, rgba(27, 127, 231, 0.5) 94.73%);
    pointer-events: none;
  }
  @media(min-width: 768px) {
    .lav-product__count-btn:not(.lav-disable):hover {
      opacity: 0.7;
    }
  }
  .lav-product__price {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: right;
    color: #517193;
  }
  .lav-product__price sup, .lav-summary__price sup {
    top: 3px;
    left: 2px;
    font-size: 12px;
  }
  .lav-product__count-minus {
    border-radius: 30px 0 0 30px;
  }
  .lav-product__count-plus {
    border-radius: 0 30px 30px 0;
  }
  .lav-protect__body {
    margin-top: 24px;
  }
  .lav-protect__body .warranty-content {
    flex-grow: 1;
  }
  .lav-protect__body .warranty-price {
    margin-left: auto;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.5;
    color: #517193;
  }
  .lav-protect__body svg {
    margin-right: 10px;
  }
  .lav-protect__body .warranty--option + .warranty--option {
    margin-top: 18px;
  }
  .lav-protect__body .warranty--option {
    position: relative;
    padding-left: 41px;
    cursor: pointer;
  }
  .lav-protect__body .warranty--option:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    border: 2px solid #517193;
    border-radius: 50%;
    box-sizing: border-box;
  }
  .lav-protect__body .warranty--option.active:before {
    background: linear-gradient(180deg,#74e6ff,#5d9eff);
    border: none;
  }
  .lav-protect__body .warranty--option.active:after {
    content: '';
    position: absolute;
    left: 8px;
    top: 50%;
    transform: translateY(-50%);
    width: 8px;
    height: 8px;
    background-color: #fff;
    border-radius: 50%;
    box-sizing: border-box;
  }
  .lav-protect__body .warranty-description .type {
    font-size: 16px;
    line-height: 20px;
    color: #517193;
  }
  .lav-protect__body .warranty-description .title {
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #517193;
    text-transform: capitalize;
  }
  .lav-address__items {
    margin-top: 28px;
    margin-bottom: 20px;
  }
  .lav-address__item {
    position: relative;
    padding-left: 36px;
    cursor: pointer;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    color: #517193;
    padding-top: 2px;
    padding-bottom: 2px;
  }
  .lav-address__item + .lav-address__item {
    margin-top: 32px;
  }
  .lav-address__item:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    border: 2px solid #517193;
    border-radius: 50%;
    box-sizing: border-box;
  }
  .lav-address__item.active:before {
    background: linear-gradient(180deg,#74e6ff,#5d9eff);
    border: none;
  }
  .lav-address__item.active:after {
    content: '';
    position: absolute;
    left: 8px;
    top: 50%;
    transform: translateY(-50%);
    width: 8px;
    height: 8px;
    background-color: #fff;
    border-radius: 50%;
    box-sizing: border-box;
  }
  .lav-summary__item {
    display: flex;
    justify-content: space-between;
    color: #517193;
  }
  .lav-summary__item + .lav-summary__item {
    margin-top: 12px;
  }
  .lav-summary__price {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
  }
  .lav-summary__info {
    font-size: 18px;
    line-height: 24px;
  }
  .lav-summary__info span {
    color: #9FAFC3;
  }
  .lav-summary__final {
    position: relative;
    padding-top: 13px;
    border-top: 1px solid rgba(175, 190, 205, 0.5);
  }
  .lav-summary__final .lav-summary__info {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
  }
  .lav-summary__final .lav-summary__price {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
  }
  .lav-summary__exlude {
    position: absolute;
    top: 100%;
    right: -5px;
    padding-top: 5px;
    font-size: 14px;
    line-height: 1;
    color: #517193;
    opacity: 0.6;
  }
  .lav-accept {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.01em;
    color: #517193;
    margin-top: 45px;
    cursor: pointer;
  }
  .lav-accept_error {
    background: #ffd7e4;
    padding: 5px;
    margin-bottom: 5px;
  }
  .lav-accept-error {
    display: none;
    color: #1b7fe7;
    font-size: 14px;
    padding-top: 8px;
    pointer-events: none;
    font-style: normal;
    text-align: center;
  }
  .lav-accept_error + .lav-accept-error {
    display: block;
  }
  .lav-accept a {
    font-weight: 600;
    border-bottom: 1px solid #517193;
    color: inherit;
    margin-left: 5px;
    line-height: 1.1;
    transition: 0.3s;
  }
  @media(min-width: 768px) {
    .lav-accept a:hover {
      opacity: 0.7;
    }
  }
  .lav-accept span {
    position: relative;
    display: inline-block;
    margin-right: 12px;
    border: 2px solid #517193;
    border-radius: 4px;
    width: 24px;
    height: 24px;
    transition: 0.3s;
  }
  .lav-accept.active span {
    border: none;
    background: linear-gradient(135deg, #74E6FF 0%, #5D9EFF 100%);
  }
  .lav-accept.active span:before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -60%) rotate(45deg);
    width: 5px;
    height: 11px;
    display: block;
    border-bottom: 3px solid #fff;
    border-right: 3px solid #fff;
    border-radius: 1px;
  }
  .lav-coupon {
    display: block;
    max-width: 320px;
    width: 100%;
    margin-bottom: 32px;
    margin-left: 0;
  }
  .lav-coupon .order-coupon__button {
    display: none;
  }
  .lav-coupon .primary-input-wrapper input {
    padding-right: 90px!important;
  }
  .lav-coupon .order-coupon__apply-btn {
    background: linear-gradient(6.75deg, #3797F1 5.31%, #1B7FE7 94.73%);
    font-size: 16px;
    color: #fff;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 5px 17px;
    border-radius: 0 60px 60px 0;
    border: none;
    transition: 0.35s;
  }
  @media(min-width: 768px) {
    .lav-coupon .order-coupon__apply-btn:hover {
      opacity: 0.7;
    }
  }
  .lav-coupon .order-coupon__content {
    padding: 4px 4px 4px 24px;
  }
  .lav-coupon .order-coupon__action-block {
    height: 100%;
  }
  .lav-tip {
    position: relative;
  }

  .lav-tip__body {
    position: absolute;
    left: 0;
    right: 0;
    top: 100%
    background: #FFFFFF;
    border-radius: 8px;
  }
  @media (max-width: 768px) {
    .lav-path {
      font-size: 14px;
      line-height: 1;
    }
    .lav-labels {
      margin-top: 15px;
    }
    .lav-labels__item {
      font-size: 14px;
      line-height: 16px;
      padding: 10px 8px;
    }
    .lav-plate {
      margin-top: 10px;
    }
    .lav-product__image img {
      width: 60px;
      margin-left: -15px;
    }
    .lav-plate {
      padding: 24px;
    }
    .lav-product__count {
      margin: 0 12px;
    }
    .lav-product__price {
      font-size: 18px;
    }
    .lav-product__count-value {
      min-width: 28px;
      font-size: 16px;
    }
    .lav-product__count-btn {
      width: 26px;
      height: 26px;
    }
    .lav-product__count-btn svg {
      width: 11px;
    }
    .lav-protect__head {
      display: block;
    }
    .lav-protect__tip {
      margin-top: 10px;
    }
    .lav-protect__body {
      margin-top: 18px;
    }
    .lav-protect__body svg {
      width: 30px;
    }
    .lav-protect__body .warranty--option {
      padding-left: 35px;
    }
    .details-block-mobile {
      visibility: visible!important;
      position: static!important;
      height: auto!important;
      pointer-events: auto!important;
      z-index: 5!important;
      display: block!important;
    }
    .mobile {
      display: block!important;
    }
    .btn-prev-step {
      display: none;
    }
    .order-pages .details-block .title {
      text-align: left;
    }
    .order-pages .details-section, .order-pages.order-details .details-block .details-section:not(:first-child) {
      padding: 24px;
    }
    .order-pages.order-details .details-block .details-section .title {
      margin-bottom: 0px;
    }
    .order-pages .details-block {
      margin-bottom: 0;
    }
    .primary-input-wrapper.float-label, .primary-input-wrapper.float-label .additional-content {
      margin-top: 39px;
    }
    .order-pages.order-details .products-info {
      display: none!important;
    }
    .btn-next-step {
      display: none;
    }
    .lav-address {
      margin-top: 45px;
    }
    .details-section + .details-section[data-toggle="buttons"]:not(.active) {
      height: 0;
      padding: 0!important;
      overflow: hidden;
    }
    .details-section + .details-section[data-toggle="buttons"] > * {
      display: none;
    }
    [data-step-form="3"] .main-content .details-section:last-child .fields + .fields {
      flex-direction: column-reverse;
      margin-top: 24px;
    }
    .lav-accept-error + .fields {
      display: none;
    }
    .order-pages.order-details .details-block .payments-block {
      margin-top: 12px;
    }
    #kek {
      margin-bottom: 25px;
    }
    .lav-body-confirm .details-block .wrapper {
      padding: 20px 20px 24px;
    }
    .lav-body-confirm .details-block .wrapper .title {
      text-align: center;
    }
    .order-pages.order-summary .payment-methods .payment-info {
      text-align: left;
      margin-top: 24px;
    }
    .order-pages.order-summary .order-info>.title, .order-pages.order-summary .payment-methods .title {
      font-size: 24px;
      line-height: 28px;
    }
    .lav-body-confirm .details-block .wrapper h2.title {
      margin-bottom: 24px;
    }
    .order-pages.order-summary .order-info .columns .column .title {
      padding-bottom: 5px;
    }
    .lav-delivery-summary {
      justify-content: center;
      margin-top: 24px;
    }
    .order-pages.order-summary .payment-methods .title {
      text-align: left;
      // margin-bottom: 12px!important;
      padding-bottom: 0;
    }
    .primary-radio-wrapper {
      margin-top: 0;
    }
    .order-pages.order-summary .payment-methods .forms-wrapper {
      max-width: inherit;
      margin: 0 -15px;
    }
    .order-pages.order-summary .payment-methods .forms-wrapper .form-block .primary-radio-wrapper .label {
      flex-direction: row-reverse;
    }
    .order-pages.order-summary .payment-methods .forms-wrapper .form-block .primary-radio-wrapper .state-icon {
      margin: 0 13px 0 0;
    }
    .order-pages.order-summary .payment-methods .forms-wrapper .form-block .payment-icon {
      line-height: 0;
      margin: 0;
    }
    .order-pages.order-summary .payment-methods .forms-wrapper .form-block .primary-radio-wrapper .label {
      justify-content: flex-end;
    }
    .order-pages.order-summary .payment-methods .forms-wrapper .form-block .payment-icon .image {
      width: auto;
      height: 50px;
    }
    .order-pages.order-summary .payment-methods .forms-wrapper .form-block .primary-radio-wrapper  {
      width: 100%;
    }
    .order-pages.order-summary .payment-methods .forms-wrapper .form-block {
      margin-bottom: 16px;
    }
    .order-pages.order-summary .order-info .columns.lav-brief {

    }
    .order-pages.order-summary .order-info .columns.lav-brief .order-4, .order-pages.order-summary .order-info .columns.lav-brief .order-1, .order-pages.order-summary .order-info .columns.lav-brief .order-2 {
      display: none;
    }
    .order-pages.order-summary .order-info .columns.lav-brief .order-3 {
      order: 6;
    }
    .order-pages.order-summary .order-info .columns.lav-brief .order-5 {
      margin-bottom: 15px!important;
    }
    .order-pages.order-summary .order-info .columns.lav-brief .order-0 {
      position: relative;
      margin-bottom: 17px;
      z-index: -1;
    }
    .order-pages.order-summary .order-info .columns.lav-brief .order-0:before {
      content: '';
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(180deg, rgba(251, 252, 253, 0) 0%, #FBFCFD 100%);
      position: absolute;
    }
    .lav-toggler-info {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: #EAEEF2;
      border-radius: 123px;
      padding: 18px 50px;
      font-size: 18px;
      line-height: 24px;
      letter-spacing: 0.02em;
      color: #517193;
      font-weight: bold;
      margin-top: 15px;
    }
    .lav-toggler-info.active {
      margin-top: 0;
    }
    .lav-toggler-info svg {
      transition: 0.35s;
      margin-left: 9px;
    }
    .lav-toggler-info.active svg {
      transform: rotate(180deg);
    }
    .lav-toggler-info__wrap {
      text-align: center;
    }
  }
`;

const stylesEl = document.createElement('style');
stylesEl.innerHTML = styles;
document.body.appendChild(stylesEl);
/*** STYLES / end ***/

/********* Custom Code **********/
init();
function init() {
  console.log('init');

  if (
    location.href.includes('order?product=4') ||
    /order\/\d+\/edit/.test(location.href)
  ) {
    document.body.classList.add('lav-body-checkout');
    initCheckout();
  } else if (/order\/details\/\d+/.test(location.href)) {
    document.body.classList.add('lav-body-confirm');
    initCheckoutDetails();
  }
}

function initCheckout() {
  handleTop();
  handleAddress();
  handleSummary();
  setInterval(() => {
    fillProduct();
  }, 500);

  document
    .querySelector('.btn-send-form')
    .addEventListener('click', function (e) {
      if (!document.querySelector('.lav-accept').classList.contains('active')) {
        e.preventDefault();
        e.stopPropagation();
        document.querySelector('.lav-accept').classList.add('lav-accept_error');
      }

      if (
        !document.querySelector('.order-coupon--success') &&
        document.querySelector('.lav-accept.active')
      ) {
        document.querySelector('.lav-coupon input').style.display = 'none';
        setTimeout(() => {
          document.querySelector('.lav-coupon input').removeAttribute('style');
        }, 1000);
      }
    });

  function handleTop() {
    let el = `
      <div class='lav-path'>
        <span class='lav-path__active'>Contact details and delivery address</span>
        <span>&nbsp;/ Payment</span>
      </div>

      <div class='lav-labels'>
        <div class='lav-labels__item'>
          <img src='${settings.dir}/img/icon-box.svg' />
          Free shipping
        </div>
        <div class='lav-labels__item'>
          <img src='${settings.dir}/img/icon-guranteed.svg' />
          100% money back guarantee
        </div>
      </div>

      <div class='lav-plate lav-jumb'>
        <div class='lav-product'>
          <div class='lav-title lav-product__title'>Your order</div>
          <div class='lav-product__info'>
            <div class='lav-product__image'>
            
            </div>
            <div class='lav-product__count'>
              <div class='lav-product__count-btn lav-product__count-minus lav-disable'>
                <svg width="15" height="2" viewBox="0 0 15 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.71875" y="0.0625" width="13.5625" height="1.875" rx="0.9375" fill="white"/>
                </svg>
              </div>
              <div class='lav-product__count-value'>1</div>
              <div class='lav-product__count-btn lav-product__count-plus'>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect y="6" width="14" height="2" rx="1" fill="white"/>
                  <rect x="6" y="14" width="14" height="2" rx="1" transform="rotate(-90 6 14)" fill="white"/>
                </svg>
              </div>
            </div>
            <div class='lav-product__price'></div>
          </div>
        </div>
        <div class='lav-protect'>
          <div class='lav-protect__head'>
            <div class='lav-title lav-protect__title'>Protect your Luminette</div>
            <div class='lav-protect__tip lav-tip'>
              <div class='lav-tip__value'>What’s covered? <img src='${settings.dir}/img/icon-info.svg' /></div>
              <div class='lav-tip__body'>
                <p>
                  Your Luminette purchase automatically comes with a 2 year warranty against manufacturer defects.
                </p>

                <p>
                  Opt in for maximum manufacturer protection using our extended warranty that covers your Luminette for 4 years from the purchase date.
                </p>
              </div>
            </div>
          </div>
          <div class='lav-protect__body'>
          </div>
        </div>
      </div>
    `;

    document
      .querySelector('.products-info')
      .insertAdjacentHTML('beforebegin', el);

    let imgSrc = document.querySelector(
      '.product-list-item .product-list-item__image'
    ).src;

    if (
      document.querySelector(
        '.product-list-item.product-list-item--active .product-list-item__image'
      )
    ) {
      imgSrc = document.querySelector(
        '.product-list-item.product-list-item--active .product-list-item__image'
      ).src;
    }

    document.querySelector('.lav-product__image').innerHTML = `
        <img src='${imgSrc}'> ${document
      .querySelector('.product-list-item .product-list-item__text')
      .innerText.replace(/[\s\d]+/, '')}
      `;

    for (let item of document.querySelectorAll(
      '.warranty-desktop.warranty-row .warranty--option'
    )) {
      let itemCloneEl = item.cloneNode(true);

      itemCloneEl.querySelector('.warranty-description .title').innerText =
        item.querySelector('.warranty-description .type').innerText;

      itemCloneEl.querySelector('.warranty-description .type').innerText = item
        .querySelector('.warranty-description .title')
        .innerText.trim()
        .replace('warranty', '');

      document
        .querySelector('.lav-protect__body')
        .insertAdjacentElement('beforeend', itemCloneEl);
    }

    document.querySelector('.lav-product__count-value').innerText = document
      .querySelector('.counter__count')
      .innerText.trim();

    if (
      parseInt(document.querySelector('.counter__count').innerText.trim()) > 1
    ) {
      document
        .querySelector('.lav-product__count-minus')
        .classList.remove('lav-disable');
    }

    document.querySelector('.lav-product__price').innerHTML =
      document.querySelector('.total-price').innerHTML;

    document
      .querySelector('.lav-product__count-plus')
      .addEventListener('click', function (e) {
        e.preventDefault();
        handleCount('plus');
      });

    document
      .querySelector('.lav-product__count-minus')
      .addEventListener('click', function (e) {
        e.preventDefault();
        handleCount('minus');
      });
  }

  function handleCount(type) {
    let currentValue = parseInt(
      document.querySelector('.counter__count').innerText
    );

    let newValue = type == 'plus' ? currentValue + 1 : currentValue - 1;

    if (newValue < 2) {
      document
        .querySelector('.lav-product__count-minus')
        .classList.add('lav-disable');
    }

    if (type == 'plus') {
      document.querySelector('.counter__button--increase').click();
      document
        .querySelector('.lav-product__count-minus')
        .classList.remove('lav-disable');
    } else {
      document.querySelector('.counter__button--decrease').click();
    }

    document.querySelector('.lav-product__count-value').innerText =
      document.querySelector('.counter__count').innerText;
  }

  function fillProduct() {
    if (document.querySelector('.btn-send-form.invalid')) {
      document
        .querySelector('.btn-send-form.invalid')
        .classList.remove('invalid');
    }
    if (
      document.querySelector('.lav-coupon') &&
      !document.querySelector('.lav-coupon input').value
    ) {
      document
        .querySelector('.lav-coupon')
        .classList.remove('order-coupon--filled');
    }

    document.querySelector(
      '.lav-summary__item:first-child .lav-summary__info'
    ).innerText =
      document.querySelector('.lav-product__count-value').innerText.trim() +
      ' Luminette';

    let checkAdditionalPrice = /\d/.test(
      document.querySelector(
        '.product-warranty .warranty--option.active .price'
      ).innerText
    );

    if (checkAdditionalPrice) {
      let currentPrice = document
        .querySelector('.total-price')
        .innerText.trim()
        .split('\n')[1]
        .trim();
      if (document.querySelector('.total-price sup')) {
        currentPrice = parseInt(
          document.querySelector('.total-price .align-items-start').innerHTML
        );
      }

      currentPrice = parseInt(currentPrice);
      let clearPrice =
        currentPrice -
        parseInt(
          document
            .querySelector('.product-warranty .warranty--option.active .price')
            .innerText.replace('$', '')
        );

      console.log(currentPrice, clearPrice);

      // console.log(
      //   document
      //     .querySelector('.total-price')
      //     .innerText.trim()
      //     .split('\n')[1]
      //     .trim(),
      //   clearPrice
      // );

      document.querySelector(
        '.lav-summary__item:first-child .lav-summary__price'
      ).innerHTML = document
        .querySelector('.total-price')
        .innerHTML.replace(currentPrice, clearPrice);

      // document.querySelector('.lav-product__price').innerHTML = document
      //   .querySelector('.total-price')
      //   .innerHTML.replace(
      //     document
      //       .querySelector('.total-price')
      //       .innerText.trim()
      //       .split('\n')[1]
      //       .trim(),
      //     clearPrice
      //   );
    } else {
      document.querySelector(
        '.lav-summary__item:first-child .lav-summary__price'
      ).innerHTML = document.querySelector('.total-price').innerHTML;

      document.querySelector('.lav-product__price').innerHTML =
        document.querySelector('.total-price').innerHTML;
    }

    document.querySelector(
      '.lav-summary__item:nth-child(2) .lav-summary__info'
    ).innerHTML =
      document
        .querySelector('.product-warranty .warranty--option.active .type')
        .innerText.trim()[0]
        .toUpperCase() +
      document
        .querySelector('.product-warranty .warranty--option.active .type')
        .innerText.trim()
        .substr(1) +
      ' warranty, ' +
      '<span>' +
      document.querySelector('.lav-protect__body .active .type').innerText +
      '</span>';

    document.querySelector(
      '.lav-summary__item:nth-child(2) .lav-summary__price'
    ).innerText = document.querySelector(
      '.product-warranty .warranty--option.active .price'
    ).innerText;

    document.querySelector(
      '.lav-summary__item:last-child .lav-summary__price'
    ).innerHTML = document.querySelector('.total-price').innerHTML;
  }

  function handleAddress() {
    let chooseAdressEl = `
      <div class='lav-address'>
        <div class='lav-title lav-address__title'></div>
        <div class='lav-address__items'>
          <div class='lav-address__item' data-value='same'></div>
          <div class='lav-address__item' data-value='another'></div>
        </div>
      </div>
    `;

    if (window.innerWidth < 768) {
      document
        .querySelector('[data-step-form="3"] .fields')
        .insertAdjacentHTML('afterend', chooseAdressEl);
    } else {
      document
        .querySelector('#scroll-spy-item-2 .fields')
        .insertAdjacentHTML('afterend', chooseAdressEl);
    }

    if (window.innerWidth < 768) {
      document.querySelector('.lav-address__title').innerText = document
        .querySelector(
          '[data-step-form="3"] .details-section + .details-section .title'
        )
        .innerText.trim();
    } else {
      document.querySelector('.lav-address__title').innerText = document
        .querySelector('#scroll-spy-item-3 .title')
        .innerText.trim();
    }

    if (window.innerWidth < 768) {
      document.querySelector('.lav-address__item:first-child').innerText =
        document
          .querySelector('#billing_address_exists_same + .content')
          .innerText.trim();

      document.querySelector('.lav-address__item:last-child').innerText =
        document
          .querySelector('#billing_address_exists_another + .content')
          .innerText.trim();

      if (
        document.querySelector('[for="billing_address_exists_same"].active')
      ) {
        document
          .querySelector('.lav-address__item:first-child')
          .classList.add('active');
      } else {
        document
          .querySelector('.lav-address__item:last-child')
          .classList.add('active');
        document
          .querySelector(
            '.details-section + .details-section[data-toggle="buttons"]'
          )
          .classList.remove('active');
      }

      for (let item of document.querySelectorAll('.lav-address__item')) {
        item.addEventListener('click', function () {
          if (item.classList.contains('active')) return false;

          document
            .querySelector('.lav-address__item.active')
            .classList.remove('active');

          item.classList.add('active');

          if (item.dataset.value == 'same') {
            document
              .querySelector('[for="billing_address_exists_same"]')
              .click();
            document
              .querySelector(
                '.details-section + .details-section[data-toggle="buttons"]'
              )
              .classList.remove('active');
          } else {
            document
              .querySelector('[for="billing_address_exists_another"]')
              .click();
            document
              .querySelector(
                '.details-section + .details-section[data-toggle="buttons"]'
              )
              .classList.add('active');
          }
        });
      }
    } else {
      document.querySelector('.lav-address__item:first-child').innerText =
        document
          .querySelector(
            '#scroll-spy-item-3 .radio-btn-column:first-child .content'
          )
          .innerText.trim();

      document.querySelector('.lav-address__item:last-child').innerText =
        document
          .querySelector(
            '#scroll-spy-item-3 .radio-btn-column:last-child .content'
          )
          .innerText.trim();

      if (
        document.querySelector(
          '#scroll-spy-item-3 .radio-btn-column:first-child .label.active'
        )
      ) {
        document
          .querySelector('.lav-address__item:first-child')
          .classList.add('active');
      } else {
        document
          .querySelector('.lav-address__item:last-child')
          .classList.add('active');
        document.querySelector('#scroll-spy-item-3').classList.add('active');
      }

      for (let item of document.querySelectorAll('.lav-address__item')) {
        item.addEventListener('click', function () {
          if (item.classList.contains('active')) return false;

          document
            .querySelector('.lav-address__item.active')
            .classList.remove('active');

          item.classList.add('active');

          if (item.dataset.value == 'same') {
            document.querySelector('#billing_address_exists_same').click();
            document
              .querySelector('#scroll-spy-item-3')
              .classList.remove('active');
          } else {
            document.querySelector('#billing_address_exists_another').click();
            document
              .querySelector('#scroll-spy-item-3')
              .classList.add('active');
          }
        });
      }
    }
  }

  function handleSummary() {
    document.querySelector(
      '.order-pages.order-details .details-block .btn-send-form .btn-text'
    ).innerText = 'Continue';

    let summaryEl = `
      <div class='lav-summary'>
        <div class='lav-summary__list'>
          <div class='lav-summary__item'>
            <div class='lav-summary__info'>1 Luminette</div>
            <div class='lav-summary__price'>$199</div>
          </div>
          <div class='lav-summary__item'>
            <div class='lav-summary__info'>Extended warranty, <span>4 years</span></div>
            <div class='lav-summary__price'>$19</div>
          </div>
          <div class='lav-summary__item lav-summary__final'>
            <div class='lav-summary__info'>Total</div>
            <div class='lav-summary__price'>$218</div>
            <div class='lav-summary__exlude'></div>
          </div>
        </div>
      </div>

      <div class='lav-accept'>
        <span></span> I accept the <a href='#'>General Sales Conditions.</a>
      </div>

      <div class="error-block lav-accept-error">Please accept the General sales conditions</div>
    `;

    if (window.innerWidth < 768) {
      document
        .querySelector(
          '[data-step-form="3"] .main-content .details-section:last-child .fields'
        )
        .insertAdjacentHTML('beforebegin', summaryEl);
    } else {
      document
        .querySelector('#scroll-spy-item-4 .fields')
        .insertAdjacentHTML('beforebegin', summaryEl);
    }

    document
      .querySelector('.lav-accept')
      .addEventListener('click', function (e) {
        e.preventDefault();
        if (e.target.tagName == 'A') {
          document.querySelector('[data-target=".cgv-modal"]').click();
          return false;
        }

        if (document.querySelector('.lav-accept_error')) {
          document
            .querySelector('.lav-accept_error')
            .classList.remove('lav-accept_error');
        }
        // if (this.classList.contains('active')) {
        this.classList.add('active');
        // } else {
        //   this.classList.remove('active');
        // }
        document.querySelector('[for="checkbox_1"]').click();
        document.querySelector('[for="checkbox_2"]').click();
      });

    document
      .querySelector('.modal-body .accept-button')
      .addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('.lav-accept').click();
      });

    document.querySelector('.lav-summary__exlude').innerText = document
      .querySelector('.total-tax>span:last-child')
      .innerText.trim();

    if (window.innerWidth < 768) {
      document
        .querySelector('.order-coupon--mobile')
        .classList.add('lav-coupon', 'order-coupon--active');

      document
        .querySelector('.lav-summary')
        .insertAdjacentElement(
          'beforebegin',
          document.querySelector('.order-coupon--mobile')
        );
    } else {
      document
        .querySelector('.order-coupon')
        .classList.add('lav-coupon', 'order-coupon--active');

      document
        .querySelector('.lav-summary')
        .insertAdjacentElement(
          'beforebegin',
          document.querySelector('.order-coupon')
        );
    }

    // let cloneCoupon = document
    //   .querySelector('.order-coupon__wrapper')
    //   .cloneNode(true);

    // cloneCoupon.classList.add('lav-coupon');
    // cloneCoupon.classList.remove('w-100');

    // document
    //   .querySelector('.lav-summary')
    //   .insertAdjacentElement('beforebegin', cloneCoupon);

    // document
    //   .querySelector('.lav-coupon .order-coupon__apply-btn')
    //   .addEventListener('click', function () {
    //     document
    //       .querySelector('.order-coupon .order-coupon__apply-btn')
    //       .click();
    //   });

    // cloneCoupon.querySelector('input').addEventListener('input', function () {
    //   let value = this.value;

    //   if (value) {
    //     cloneCoupon.classList.add('order-coupon--filled');
    //     if (
    //       !document
    //         .querySelector('.order-coupon')
    //         .classList.contains('order-coupon--active')
    //     ) {
    //       document
    //         .querySelector('.order-coupon')
    //         .classList.add('order-coupon--active');
    //     }
    //   } else {
    //     cloneCoupon.classList.remove('order-coupon--filled');
    //     if (
    //       document
    //         .querySelector('.order-coupon')
    //         .classList.contains('order-coupon--active')
    //     ) {
    //       document
    //         .querySelector('.order-coupon')
    //         .classList.remove('order-coupon--active');
    //     }
    //   }

    //   document.querySelector('#search-input').value = value;
    //   console.log(value);
    // });
  }
}

function initCheckoutDetails() {
  let shippingEl = `
    <div class='lav-delivery-summary'>
      <img src='${settings.dir}/img/icon-box.svg' />
      Free shipping
    </div>
  `;

  // ADD DELIVERY
  document
    .querySelector('.order-info .column.order-5')
    .insertAdjacentHTML('beforeend', shippingEl);

  handleTop();
  if (window.innerWidth < 768) {
    toggleButton();
  }

  function handleTop() {
    let el = `
      <div class='lav-path'>
        <span class='lav-path__active'>Contact details and delivery address</span>
        <span>&nbsp;/ Payment</span>
      </div>

      <div class='lav-labels'>
        <div class='lav-labels__item'>
          <img src='${settings.dir}/img/icon-box.svg' />
          Free shipping
        </div>
        <div class='lav-labels__item'>
          <img src='${settings.dir}/img/icon-guranteed.svg' />
          100% money back guarantee
        </div>
      </div>
    `;

    document
      .querySelector('.component-order-steps')
      .insertAdjacentHTML('afterend', el);

    document.querySelector('.step-item.active').classList.remove('active');
    document.querySelector('.step-item:nth-child(2)').classList.add('active');
  }

  function toggleButton() {
    document
      .querySelector('.order-pages.order-summary .order-info .columns')
      .classList.add('lav-brief');

    let el = `
    <div class='lav-toggler-info__wrap'>
      <div class='lav-toggler-info'>
        <span>More details</span>
        <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.26287 6C5.07423 6 4.88561 5.92797 4.74178 5.78422L0.215928 1.25832C-0.0719759 0.970413 -0.0719759 0.503627 0.215928 0.21584C0.503715 -0.0719468 0.970408 -0.0719468 1.25833 0.21584L5.26287 4.22061L9.26743 0.21598C9.55533 -0.0718069 10.022 -0.0718069 10.3097 0.21598C10.5978 0.503767 10.5978 0.970553 10.3097 1.25846L5.78396 5.78436C5.64006 5.92814 5.45144 6 5.26287 6Z" fill="#517193"/>
        </svg>
      </div>
      </div>
    `;

    document
      .querySelector('.order-pages.order-summary .order-info .columns')
      .insertAdjacentHTML('afterend', el);

    document
      .querySelector('.lav-toggler-info')
      .addEventListener('click', function () {
        if (
          document.querySelector(
            '.order-pages.order-summary .order-info .columns.lav-brief'
          )
        ) {
          document
            .querySelector(
              '.order-pages.order-summary .order-info .columns.lav-brief'
            )
            .classList.remove('lav-brief');
          this.classList.add('active');
          this.querySelector('span').innerText = 'Less details';
        } else {
          document
            .querySelector('.order-pages.order-summary .order-info .columns')
            .classList.add('lav-brief');
          this.classList.remove('active');
          this.querySelector('span').innerText = 'More details';
        }
      });
  }
}
