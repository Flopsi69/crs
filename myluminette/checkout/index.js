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
    max-width: 632px;
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
    max-width: 632px;
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
  .lav-coupon-text {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5;
    color: #A9B7C8;
    padding-left: 24px;
    margin-bottom: -15px;
    transition: 0.35s;
    opacity: 0;
  }
  .order-coupon--filled .lav-coupon-text {
    opacity: 1;
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
  .lav-tip__value {
    display: flex;
    align-items: center;
  }
  .lav-tip__value img {
    margin-left: 4px;
  }
  .lav-tip__body {
    pointer-events: none;
    visibility: hidden;
    opacity: 0;
    transition: 0.35s;
    position: absolute;
    right: 0;
    top: 100%;
    transform: translateY(10px);
    padding: 24px;
    width: 350px;
    background: #FFFFFF;
    border-radius: 8px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #517193;
    z-index: 11;
    box-shadow: 0px 11px 22px rgba(81, 113, 147, 0.44);
  }
  @media(min-width: 768px) {
    .lav-tip:hover .lav-tip__body {
      pointer-events: auto;
      visibility: visible;
      opacity: 1;
    }
  }
  .lav-tip.active .lav-tip__body {
    pointer-events: auto;
    visibility: visible;
    opacity: 1;
  }
  .lav-tip__body:before {
    content: '';
    position: absolute;
    left: 80%;
    transform: translate(-50%, -85%);
    top: 0;
    width: 25px;
    height: 8px;
    background: url('${settings.dir}/img/icon-tip-arrow.svg') center no-repeat;
    background-size: contain;
  }
  .lav-tip__body strong { 
    font-weight: 600;
  }
  .lav-tip__body p {
    margin: 0;
  }
  .lav-tip__body p + p {
    margin-top: 12px;
  }
  @media (max-width: 768px) {
    .order-pages.order-summary .payment-methods .forms-wrapper .form-block .payment-icon .image {
      box-shadow: 0 0 66px rgb(0 0 0 / 0.2%);
    }
    .order-pages.order-summary .payment-methods .forms-wrapper .form-block:nth-child(2) {
      order: 6;
    }
    .order-pages.order-summary .payment-methods .forms-wrapper .form-block:nth-child(3) {
      order: 3;
    }
    .order-pages.order-summary .payment-methods .forms-wrapper .form-block:nth-child(5) {
      order: 4;
    }
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
    .lav-tip__body {
      width: auto;
      left: -20px;
      right: -20px;
    }
    .lav-tip__body:before {
      left: 25%;
    }
  }
`;

const stylePDP = `
  .section-while-wearing, .pin-spacer {
    display: none!important;
  }
  .block-how-to-use, .section-how-it-works .btn-download-doc, .section-safety, .section-main  {
    display: none;
  }
  .lum-page {
    background-color: #fff;
  }
  .lav-jumb {
    background: #F3F5F9;
    padding: 222px 0 0;
    // 244px // 124px
  }
  .lav-jumb__inner {
    display: flex;
  }
  .lav-jumb__slider-wrap {
    max-width: 560px;
    width: 100%;
    flex-shrink: 0;
  }
  .lav-jumb__video {
    cursor: pointer;
  }
  .lav-jumb__info {
    flex-grow: 1;
    margin-left: 45px;
    color: #517193;
  }
  .lav-jumb__title {
    font-weight: 700;
    font-size: 36px;
    line-height: 1;
    margin-bottom: 12px;
  }
  .lav-jumb__feedbacks {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    transition: 0.35s;
  }
  .lav-jumb__feedbacks:hover {
    opacity: 0.7;
  }
  .lav-jumb__feedbacks-star {
    line-height: 0;
  }
  .lav-jumb__feedbacks-caption {
    font-weight: 600;
    font-size: 14px;
    line-height: 1;
    margin-top: 2px;
    letter-spacing: 0.01em;
    color: #517193;
    margin-left: 8px;
  }
  .lav-jumb__effects {
    margin-top: 19px;
    background: linear-gradient(106.63deg, #F8F9FA 38.5%, #FDFDFD 100.78%);
    border-radius: 16px;
    text-align: center;
  }
  .lav-jumb__effects-title {
    background: linear-gradient(135deg, #74E6FF 0%, #5D9EFF 100%);
    padding: 7px;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    border-radius: 16px 16px 0 0;
  }
  .lav-jumb__effects-list {
    display: flex;
    justify-content: space-between;
    padding: 22px 40px 20px;
  }
  .lav-jumb__effects-item {
    max-width: 160px;
    width: 100%;
  }
  .lav-jumb__effects-icon {
    line-height: 0;
  }
  .lav-jumb__effects-icon img {
    width: 40px;
  }
  .lav-jumb__effects-text {
    margin-top: 6px;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
  }
  .lav-count {
    margin-top: 24px;
  }
  .lav-count__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .lav-count__head-title {
    font-weight: 700;
    font-size: 22px;
    line-height: 28px;
  }
  .lav-count__head-inside {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
  }
  .lav-count__list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 17px;
    margin-top: 11px;
  }
  .lav-count__item {
    position: relative;
    padding: 24px;
    background: #F9FAFC;
    border-radius: 16px;
    transition: 0.35s;
    cursor: pointer;
  }
  .lav-count__item:hover {
    background: #fff;
  }
  .lav-count__item.active {
    background: #fff;
    box-shadow: 0px 22px 33px rgba(59, 83, 108, 0.25);
  }
  .lav-count__item:before {
    content: '';
    right: 24px;
    bottom: 24px;
    position: absolute;
    width: 24px;
    height: 24px;
    border: 2px solid #517193;
    border-radius: 123px;
    box-sizing: border-box; 
  }
  .lav-count__item.active:before {
    background: linear-gradient(180deg, #74E6FF 0%, #5D9EFF 100%);
    border: none;
  }
  .lav-count__item.active:after {
    content: '';
    right: 32px;
    bottom: 32px;
    position: absolute;
    width: 8px;
    background-color: #fff;
    height: 8px;
    border-radius: 123px;
  }
  .lav-count__image {
    line-height: 0;
    text-align: center;
    margin-bottom: 7px;
  }
  .lav-count__image img {
    height: 90px;
  }
  .lav-count__title {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #517193;
    opacity: 0.8;
  }
  .lav-count__discount {
    background: linear-gradient(135deg, #74E6FF 0%, #5D9EFF 100%);
    border-radius: 123px;
    min-width: 46px;
    text-align: center;
    margin-left: 10px;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    color: #FFFFFF;
  }
  .lav-count__price {
    font-weight: 800;
    font-size: 28px;
    line-height: 28px;
    color: #517193;
    margin-top: 5px;
  }
  .lav-count__price sup {
    font-size: 18px;
    margin-left: 2px;
  }
  .lav-count__caption {
    font-size: 14px;
    margin-top: 5px;
    color: #517193;
    opacity: 0.5;
  }
  .lav-count__pay {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-top: 24px;
  }
  .lav-count__pay .lav-jumb__btn {
    min-height: 62px;
    font-size: 20px;
    padding: 12px;
  }
  .lav-jumb__thumbs img {
    max-width: 100%;
    width: 44px;
  }
  .lav-jumb__slider .splide__slide {
    border-radius: 16px;
  }
  .lav-jumb__slider img {
    max-width: 100%;
    border-radius: 16px;
  }
  .lav-jumb__thumbs {
    display: flex;
    margin-top: 12px;
  }
  .lav-jumb__thumb {
    position: relative;
    overflow: hidden;
    border-radius: 4px;
    line-height: 0;
    cursor: pointer;
  }
  .lav-jumb__thumb + .lav-jumb__thumb {
    margin-left: 8px;
  }
  .lav-jumb__thumb:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: #D9D9D9;
    opacity: 0.5;
    transition: 0.35s;
  }
  .lav-jumb__thumb.is-active:before {
    opacity: 0;
  }

  /* fonts */
  .fw-bold {
    font-weight: 700;
  }
  .fw-semi {
    font-weight: 600;
  }
  .fw-medium {
    font-weight: 500;
  }
  .fs-22 {
    font-size: 22px;
    line-height: 28px;
  }
  .fs-18 {
    font-size: 18px;
    line-height: 24px;
  }
  .fs-16 {
    font-size: 16px;
    line-height: 24px;
  }
  .op-07 {
    opacity: 0.7;
  }
  .bb-1 {
    border-bottom: 1px solid #517193;
  }
  .b-1 {
    border: 1px solid #EFF2F5;
  }
  .c-blue {
    color: #517193;
  }

  .lav-test__wrap {
    background: #F3F5F9;
    padding: 60px 0;
  }
  .days-test {
    background: #406184;
    border-radius: 16px;
    padding: 32px 0;
    color: #FFFFFF;
    position: relative;
  }
  .days-test:before, .days-test:after {
    content: '';
    position: absolute;
    top: 0;
    height: 100%;
    width: 150px;
    z-index: 3;
    pointer-events: none;
    border-radius: 16px;
  }
  .days-test:before {
    left: 0;
    background: linear-gradient(90deg, #406184, rgba(64, 97, 132, 0.1));
  }
  .days-test:after {
    right: 0;
    background: linear-gradient(-90deg, #406184, rgba(64, 97, 132, 0.1));
  }
  .line-dashed {
    position: relative;
    margin-top: 32px;
  }
  .line-dashed:before {
    content: '';
    position: absolute;
    top: 62px;
    left: 0;
    width: 100%;
    height: 2px;
    background: url(https://conversionratestore.github.io/projects/luminette/img/line-desk.svg) center / 100%;
  }
  .days-test .row {
    max-width: 1045px;
    margin: 0 auto;
    padding: 0;
  }
  .circle {
    background: linear-gradient(90deg, #74E6FF 0%, #5D9EFF 851.75%);
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin: 22px 0 8px;
  }
  .days-test_list {
    list-style-type: none;
  }
  .lav-info-invert {
    filter: invert(43%) sepia(44%) saturate(407%) hue-rotate(170deg) brightness(69%) contrast(87%)
  }
  .tooltip {
    position: relative;
  }
  .tooltip-include {
    max-width: 100%;
  }
  .tooltip:hover .tooltip-dropdown, .lav-tooltip-wrap:hover .tooltip-dropdown {
    opacity: 1;
    pointer-events: auto;
  }
  .tooltip-dropdown {
    color: #517193;
    position: absolute;
    padding-top: 32px;
    top: 0;
    right: -15px;
    width: 351px;
    pointer-events: none;
    opacity: 0;
    z-index: 4;
    transition: 0.35s;
    filter: drop-shadow(0px 11px 22px rgba(81, 113, 147, 0.44));
    // box-shadow: 0px 11px 22px rgba(81, 113, 147, 0.44);
  }
  .tooltip-item {
    border-radius: 8px;
    background: #FFFFFF;
    padding: 24px;
    position: relative;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  .tooltip-item:before {
    content: '';
    position: absolute;
    bottom: 100%;
    right: 10px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 12.5px 8px 12.5px;
    border-color: transparent transparent #fff transparent;
  }
  .tooltip_free {
    background: rgba(218, 225, 232, 0.3);
    border-radius: 8px;
    padding: 24px;
  }
  .tooltip-text {
    color: #517193;
  }
  .tooltip-text + .tooltip-text {
    margin-top: 8px;
  }

  .compare-section {
    padding: 80px 0;
    background: url(https://conversionratestore.github.io/projects/luminette/img/stripes_features.png) no-repeat center bottom / cover;
  }
  .compare {
    background: #F8F9FA;
    border: 1px solid #F8F9FA;
    box-shadow: 0px 44px 66px rgba(59, 83, 108, 0.25);
    border-radius: 16px;
    max-width: 718px;
    overflow: hidden;
  }
  .compare .col-6:nth-child(3n+1) {
    background: linear-gradient(98.6deg, #EEF1F4 43.43%, #EEF1F4 58.16%, #F3F5F7 100%);
  }

  .technical__wrap {
    padding: 60px 0;
  }
  .technical {
    color: #517193;
    box-shadow: 0px 44px 66px rgba(59, 83, 108, 0.25);
    background: #FFFFFF;
    border-radius: 16px;
    overflow: hidden;
  }
  .technical h2 {
    line-height: 54px;
  }
  .safety-block {
    background: linear-gradient(101.51deg, #F8F9FA 0%, #FDFDFD 100%, #FDFDFD 100%);
  }
  .technical-block, .safety-block .row {
    padding: 60px 16px;
    max-width: 992px;
    margin: 0 auto;
  }

  .lav-recharge {
    margin-top: 60px;
  }
  .lav-recharge__inner {
    background: url('${settings.dir}/img/women.jpeg') left center no-repeat;
    background-size: auto 100%;
    display: flex;
    align-items: center;
    background-color: #f9fafc;
    // background: linear-gradient(106.63deg, #F8F9FA 38.5%, #FDFDFD 100.78%);
    box-shadow: 0px 44px 66px rgba(59, 83, 108, 0.22);
    border-radius: 16px;
  }
  .lav-recharge__inner>div {
    flex: 1;
  }
  .lav-recharge__preview {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 400px;
    cursor: pointer;
    line-height: 0;
  }
  .lav-recharge__preview:before {
    content: '';
    background: #517193;
    opacity: 0.5;
    filter: blur(25px);
    width: 156px;
    height: 156px;
    border-radius: 50%;
  }
  .lav-recharge__preview img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: 0.35s;
    width: 125px;
    height: 125px;
  }
  .lav-recharge__preview img + img {
    opacity: 0;
  }
  .lav-recharge__preview:hover img  {
    opacity: 0;
  }
  .lav-recharge__preview:hover img + img {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.1);
  }
  .lav-recharge__info {
    padding: 48px;
    max-width: 584px;
  }

  .lav-title {
    font-weight: 700;
    font-size: 48px;
    line-height: 48px;
    color: #517193;
    margin-bottom: 24px;
  }
  .lav-text {
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #517193;
  }

  .lav-transforms {
    padding-bottom: 60px;
  }
  .lav-transform {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .lav-transform__more {
    display: flex;
    justify-content: center;
    text-align: center;
    margin-top: 60px;
  }
  .lav-transform__more-btn {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.01em;
    color: #517193;
    padding: 19px 32px;
    border: 1px solid rgba(81, 113, 147, 0.2);
    border-radius: 100px;
    cursor: pointer;
    transition: 0.35s;
  }
  .lav-transform__more-btn:hover {
    border-color: #517193;
    opacity: 0.7;
  }
  .lav-transform__more-btn svg {
    margin-left: 8px;
    transform: rotate(180deg);
    transition: 0.35s;
  }
  .lav-transform__more-btn.active svg {
    transform: rotate(0deg);
  }
  .block-on-the-go .title {
    margin-bottom: 37px;
    font-weight: 700;
  }
  .lav-transform__info {
    max-width: 500px;
    // margin-bottom: 50px;
  }
  .lav-transform__title-mob {
    display: none;
  }
  lav-transform__image {
    margin-left: -50px;
  }
  .block-on-the-go:not(.active) {
    display: none;
  }
  #discover-block {
    background: linear-gradient(106.63deg, #F8F9FA 38.5%, #FDFDFD 100.78%);
    box-shadow: 0px 30px 66px rgb(59 83 108 / 22%);
    border-radius: 16px;
    margin-top: 24px;
  }
  .splide__pagination {
    padding: 0;
    margin-top: 20px;
  }
  .splide__pagination__page {
    width: 8px;
    height: 8px;
    padding: 0;
    border-radius: 50px;
    background: none;
    border: 1px solid #4E4F51;
    transition: 0.35s;
  }
  .splide__pagination__page.is-active {
    background-color: #4E4F51;
  }
  .splide__pagination li + li {
    margin-left: 32px;
  }
  .splide__pagination li {
    line-height: 0;
    cursor: pointer;
  }
  .splide__pagination__page {
    cursor: pointer;
  }

  .lav-study__wrap {
    text-align: center;
    margin: 60px auto;
  }
  .lav-study {
    display: flex;
    align-items: center;
    padding: 40px;
    margin: auto;
    background: rgba(255,255,255,0.12);
    border: 1px solid #517193;
    border-radius: 16px;
    max-width: 960px;
    text-align: left;
  }
  .lav-study__icon {
    line-height: 0;
  }
  .lav-study__icon svg {
    width: 40px;
  }
  .lav-study__info {
    font-weight: 300;
    font-size: 18px;
    line-height: 24px;
    color: #517193;
    margin-left: 12px;
    margin-right: 40px;
  }
  .lav-study__info strong {
    font-weight: 700;
  }
  .lav-study__btn {
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    border: 1px solid rgba(81, 113, 147, 0.12);
    border-radius: 123px;
    padding: 13px 65px;
    transition: 0.35s;
    white-space: nowrap;
    cursor: pointer;
  }
  .lav-study__btn:hover {
    background-color: #fff;
    border: 1px solid #517193;
    cursor: pointer;
  }
  .lav-study__btn img {
    margin-left: 16px;
    width: 30px;
  }
  .lav-study {}
  .lav-can {
    margin-bottom: 60px;
  }
  .lav-can__inner {
    padding: 65px 120px;
    background: #F3F5F9;
    border-radius: 16px;
    overflow: hidden;
    // background: #C4C4C4;
    background: url('${settings.dir}/img/bg-man.jpeg') center no-repeat;
    box-shadow: 0px 44px 66px rgb(59 83 108 / 22%);
    background-size: cover;
  }
  .lav-can__icon {
    line-height: 0;
  }
  .lav-can__title {
    margin-bottom: 40px;
    margin-top: 16px;
  }
  .lav-can__item {
    position: relative;
    padding-left: 30px;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.5;
    color: #517193;
  }
  .lav-can__item + .lav-can__item {
    margin-top: 12px;
  }
  .lav-can__item:before {
    content: '';
    position: absolute;
    left: 0;
    top: 3px;
    width: 20px;
    height: 20px;
    background: url(${settings.dir}/img/check.svg) center no-repeat;
    background-size: contain;
  }
  .lav-tooltip-list {
    margin-top: 15px;
  }
  .lav-list__item {
    position: relative;
    padding-left: 27px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #517193;
  }
  .lav-list__item:before {
    content: '';
    position: absolute;
    left: 0;
    top: 3px;
    width: 17px;;
    height: 17px;;
    background: url(${settings.dir}/img/check.svg) center no-repeat;
    background-size: contain;
  }
  .lav-list__item + .lav-list__item {
      margin-top: 12px;
  }
  .lav-perfect {
    text-align: center;
    padding-top: 60px;
  }
  .lav-perfect__title {

  }
  .lav-perfect__icon {
    line-height: 0;
  }
  .lav-perfect__icon img {
    width: 108px;
  }
  .lav-perfect__list {
    margin-top: 60px;
    margin-left: auto;
    margin-right: auto;
    max-width: 1100px;
    display: flex;
    justify-content: space-between;
  }
  .lav-perfect__subtitle {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.01em;
    color: #517193;
    margin-top: 16px;
  }
  .lav-perfect__descr {
    margin-top: 16px;
  }
  .lav-perfect__item {
    max-width: 340px;
    width: 100%;
  }
 
  .lav-trial {
    position: relative;
    padding: 60px 0;
  }
  .lav-trial__row {
    display: flex;
    align-items: center;
    background: linear-gradient(96.91deg, #F8F9FA 0%, #FDFDFD 100.36%);
    box-shadow: 0px 30px 66px rgba(59, 83, 108, 0.22);
    border-radius: 16px;
    padding: 32px 40px;
  }
  .lav-trial__image {
    width: 55%;
  }
  .lav-trial__info {
    max-width: 430px;
    margin-left: 50px;
  }
  .lav-trial__descr {
    margin-top: 16px;
  }
  .lav-trial__buttons {
    margin-top: 24px;
    margin-bottom: 32px;
    display: flex;
  }
  .lav-trial__buttons .lav-trial__btn span {
    // border-bottom: 1px solid #517193;
  }
  .lav-trial__btn {
    display: flex;
    align-items: center;
    font-size: 16px;
    line-height: 1;
    font-weight: bold;
    padding: 15px 10px;
    flex-grow: 1;
    justify-content: center;
    border: 1px solid rgba(81, 113, 147, 15%);
    border-radius: 36px;
    transition: 0.35s;
    cursor: pointer;
  }
  .lav-trial__btn .tooltip-dropdown {
    top: 35px;
    padding-top: 10px;
  }
  .lav-trial__btn:hover {
    border-color: #517193;
  }
  .lav-trial__btn>img {
    margin-right: 8px;
  }
  .lav-trial__btn + .lav-trial__btn {
    margin-left: 12px;
  }
  .lav-trial__inside {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.01em;
    transition: 0.35s;
    cursor: pointer;
    margin-top: 20px;
  }

  .lav-trial__actions {
    text-align: center;
    width: 260px;
  }
  .lav-trials__btn.btn-primary {
    padding-left: 40px;
    padding-right: 40px;
  }
  .lav-trial__learn {
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.01em;
    margin-top: 28px;
    transition: 0.35s;
    cursor: pointer;
  }
  .lav-trial__learn:hover {
    opacity: 0.7;
  }

  .lum-page .section-features {
    padding: 80px 0 0;
    margin: 0;
  }
  .lum-page .section-features .title br {
    display: none;
  }
  .lav-feat {
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #FFFFFF;
  }
  .lum-page .section-features .gradient-group .gradient-linear, .lum-page .section-features .gradient-group .gradient-radial-wrapper {
    width: 110%;
  }
  .lum-page .section-features .gradient-group .gradient-radial {
    width: 100%;
    height: 300px;
  }
  .lum-page .section-features .image-stripes {
    top: -50px;
  }
  .lum-page .section-how-it-works .main-content .column .subtitle {
    padding-bottom: 20px;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #517193;
  }
  .lum-page .section-how-it-works .main-content .column .fw-medium {
    line-height: 24px;
    font-size: 18px;
  }
  .lum-page .section-how-it-works .main-content .column .title {
    font-weight: 700;
    max-width: 100%;
  }
  .lum-page .section-how-it-works .main-content {
    padding: 0 0 60px;
    max-width: 1000px;
    margin: auto;
  }
  .lum-page .section-how-it-works .main-content .column > .image {
    margin-top: -70px;
  }
  .lum-page .section-how-it-works {
    background: none;
    padding-top: 60px;
  }
  .studies-component .heading-wrapper {
    background: linear-gradient(107.16deg, #F8F9FA 38.2%, #FDFDFD 100%);
  }
  .lum-page .section-studies .studies-component {
    // box-shadow: 0px 44px 66px rgb(59 83 108 / 25%);
    margin-top: 0;
    border-radius: 20px;
    overflow: hidden;
  }
  .studies-component .list-of-studies {
    display: flex;
    flex-flow: column;
  }
  .lav-research-reorder {
    order: -1;
    background: linear-gradient(98.6deg, #EEF1F4 43.43%, #F3F5F7 100%);
  }
  .lav-research-reorder  + div {
    background: none!important;
  }
  .lav-research-reorder + div + div {
    background: linear-gradient(98.6deg, #EEF1F4 43.43%, #F3F5F7 100%);
  }
  .studies-component .study-item .title-description-wrapper .title {
    margin-bottom: 15px;
  }

  .lav-users {
    text-align: center;
    position: relative;
  }
  .lav-users__image {
    max-width: 100%;
  }
  .lav-users__title {
    position: absolute;
    bottom: 100px;
    left: 0;
    right: 0;
    margin: auto;
    font-size: 80px;
    line-height: 80px;
    letter-spacing: 1px;
    padding: 0 15px;
  }
  .lav-users__title span {
    font-weight: 800;
  }
  .lav-users__image-mob, .lav-users__title-mob {
    display: none;
  }
  .lav-reviews {
    padding: 64px 0 90px;
    background: #406184;
    color: #fff;
  }
  .lav-reviews__title {
    text-align: center;
    color: #fff;
  }
  .lav-reviews__list {
    margin-top: 64px;
  }
  .lav-review {
    position: relative;
    overflow: hidden;
    box-shadow: 0px 11px 22px rgba(59, 83, 108, 0.88);
    // background: linear-gradient(106.63deg, #F8F9FA 38.5%, #FDFDFD 100.78%);
    background: #F8F9FA;
    border-radius: 16px;
    padding: 24px;
    color: #517193;
  }
  .lav-modal {
    position: fixed;
    z-index: 99991;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(8, 29, 50, 0.4);
    transition: 0.35s;
    opacity: 1;
    padding: 20px;
  }
  .lav-modal__close {
    position: absolute;
    top: 14px;
    right: 14px;
    cursor: pointer;
    line-height: 0;
    padding: 3px;
    transition: 0.3s;
  }

  .lav-modal__close:hover {
    opacity: 0.7;
    transform: scale(1.3);
  }
  .lav-open-modal {
    cursor: pointer;
  }
  .lav-modal:not(.active) {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }
  .lav-modal__inner {
    max-height: 95vh;
    overflow: auto;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: #FFFFFF;
    border-radius: 8px;
    padding: 72px 48px 48px;
    max-width: 400px;
    transition: 0.4s;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transform: translate(-50%, -100%);
  }
  .lav-modal__inner.active {
    transform: translate(-50%, -50%);
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }
  .lav-review-modal {
    line-height: 0;
    padding: 0;
    max-width: 90%;
    background: transparent;
  }
  .lav-review-modal iframe {
    border: none;
  }
  .lav-modal__title {
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 12px;
  }
  @media (min-width: 992px) {
    .lav-reviews__list .splide__list {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .lav-reviews__list .splide__track {
      overflow: visible;
    }
    .lav-review {
      width: 29%;
    }
    .lav-review:nth-child(2) {
      width: 35%;
      min-height: 460px;
    }
  }
  .lav-review_expand:after {
    content: "";
    position: absolute;
    // bottom: 35px;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    pointer-events: none;
    background: linear-gradient(180deg,hsla(0,0%,100%,0),#fbfbfb 70%);
    z-index: 1;
  }
  .lav-review__image {
    line-height: 0;
    text-align: center;
  }
  .lav-review__name {
    margin-top: 8px;
    text-align: center;
    font-size: 18px;
    line-height: 24px;
    font-weight: bold;
  }
  .lav-review__text {
    position: relative;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    margin-top: 12px;
    max-height: 168px;
    overflow-y: auto;
  }
  @media(max-width: 1400px) {
    .days-test:before, .days-test:after {
      width: 36px;
    }
    .lav-review__text {
      max-height: auto;
      min-height: 195px;
      max-height: 195px;
    }
  }

  .lav-review__text + .lav-review__text {
    padding-bottom: 20px;
  }

  .lav-review__text:not(.active) {
    display: none;
  }
  .lav-review__link {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: rgb(64 97 132 / 50%);
  }
  .lav-review__link span {
    font-weight: bold;
    padding: 0 5px;
  }
  .lav-review__trigger {
    position: relative;
    z-index: 10;
    font-size: 16px;
    line-height: 24px;
    font-weight: bold;
    margin-top: 4px;
    cursor: pointer;
    transition: 0.35s;
  }
  .lav-review__trigger:hover {
    opacity: 0.8;
  }
  .lav-reviews__total {
    display: flex;
    margin: 64px auto 0;
    text-align: center;
    max-width: 1000px;
  }
  .lav-reviews__total-col {
    position: relative;
    flex: 1;
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .lav-reviews__total-col:last-child:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: .1;
    background: radial-gradient(82% 55% at 0 48%,#000 0,rgba(0,0,0,.85) 18%,rgba(0,0,0,.7) 38%,rgba(0,0,0,.45) 65%,transparent 100%);
    mix-blend-mode: normal;
    z-index: 0;
    pointer-events: none;
  }
  .lav-reviews__total-caption {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #FFFFFF;
    opacity: 0.9;
  }
  .lav-reviews__total-caption span {
    font-weight: 500;
  }
  .lav-reviews__total__caption span {
    font-weight: bold;
  }
  .lav-reviews__total-stars {
    margin: 12px 0 17px;
    line-height: 0;
    text-align: center;
  }
  .lav-reviews__total-score {
    font-size: 24px;
    line-height: 32px;
    color: #FFAA02;
    font-weight: bold;
  }
  .lav-reviews__total-image {
    line-height: 0;
    height: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 36px;
  }
  .lav-reviews__total-image img {
    max-width: 100%;
    max-height: 100%;
  }
  .lav-reviews__btn.btn-primary {
    min-width: 200px;
    min-height: 62px;
    padding: 10px 15px;
  }
  .lav-reviews__btn .btn-bg-wrapper {
    background: #fff;
  }
  .lav-reviews__btn .btn-text {
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 0.01em;
    color: #517193;
  }
  .lav-reviews__preview-list {
    margin-top: 80px;
    display: grid;
    gap: 32px;
    grid-template-columns: 1fr 1fr;
  }
  .lav-reviews__preview {
    position: relative;
    overflow: hidden;
    line-height: 0;
    border-radius: 16px;
    text-align: center;
    height: 340px;
    background-color: black;
    background-size: auto 100%;
    background-position: center;
    background-repeat: no-repeat;
  }
  .lav-reviews__placeholder {
    max-width: 100%;
    min-height: 100%;
  }
  .lav-reviews__play-btn {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 130px;
    height: 130px;
    line-height: 0;
    transition: 0.3s;
  }
  .lav-reviews__play-btn + .lav-reviews__play-btn {
    opacity: 0;
  }
  .lav-reviews__play {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 130px;
    height: 130px;
    line-height: 0;
    cursor: pointer;
  }
  .lav-reviews__play:hover .lav-reviews__play-btn {
    opacity: 0;
  }
  .lav-reviews__play:hover .lav-reviews__play-btn + .lav-reviews__play-btn {
    opacity: 1;
  }
  @media (max-width: 1320px) {
    .lav-count__discount {
      position: absolute;
      right: 4px;
      top: 4px;
    }
    .lav-jumb__effects-list {
      padding: 20px;
    }
  }
  @media (max-width: 1199px) {
    .container, .container-lg, .container-fluid, .container-sm, .container-md, .container-xl {
      max-width: 700px;
    }
    .lav-count__list {
      gap: 12px;
      margin-top: 17px;
    }
    .lav-count__item {
      text-align: center;
      padding: 12px 12px 48px;
    }
    .lav-count__item:before {
      bottom: 12px;
      left: 0;
      right: 0;
      margin: auto;
    }
    .lav-count__title {
      font-size: 14px;
      font-weight: 600;
    }
    .lav-count__price {
      font-size: 24px;
    }
    .lav-jumb__slider-wrap {
      margin-top: 24px;
    }
    .lav-jumb__effects-list {
      display: block;
      padding: 12px;
    }
    .lav-jumb__effects-item {
      max-width: 100%;
      display: flex;
      align-items: center;
    }
    .lav-jumb__effects-item + .lav-jumb__effects-item {
      margin-top: 16px;
    }
    .lav-jumb__effects-icon {
      margin-right: 8px;
    }
    .lav-jumb__effects-list {
      border-radius; 8px;
      margin-top: 24px;
    }
    .lav-count__item.active:after {
      left: 0;
      right: 0;
      margin: auto;
      bottom: 20px;
    }
    .lav-jumb__thumbs {
      margin-top: 8px;
    }
    .lav-jumb__effects {
      margin-top: 16px;
    }
    .lav-jumb__effects-title {
      background: linear-gradient(135deg, #74E6FF 0%, #5D9EFF 100%);
      border-radius: 40px;
    }
    .lav-jumb__effects-icon img {
      width: 24px;
    }
    .lav-jumb__title {
      font-size: 28px;
      line-height: 32px;
      margin-bottom: 14px;
    }
    .lav-jumb__effects-text {
      margin-top: 0;
      font-size: 18px;
      line-height: 24px;
    }
    .lav-count__title {
      display: block;
    }
    .lav-jumb__inner {
      display: block;
    }
    .lav-jumb__slider img {
      max-width: 100%;
    }
    .lav-jumb__info {
      margin-left: 0;
    }
    .days-test:before, .days-test:after {
      width: 36px;
    }
    .days-test_date, .days-test_head  {
      width: calc(50% - 28px);
    }
    .days-test_date {
      text-align: right;
    }
    .line-dashed:before {
      top: 7px;
      left: 50%;
      width: 1px;
      height: calc(100% - 35px);
      transform: translateX(-50%);
      background-image: url(https://conversionratestore.github.io/projects/luminette/img/line-mob.svg);
    }
    .days-test_list li {
      align-items: flex-start;
    }
    .days-test_list li:not(:last-child) {
      margin-bottom: 24px;
    }
    .days-test_list li:last-child .circle {
      background: #5D9EFF;
    }
    .circle {
      margin: 0 16px;
    }
  }
  @media (max-width: 991px) {
    .technical-block h2 {
      margin-bottom: 25px;
    }
    .safety-block h2 {
      margin-bottom: 0;
      padding-bottom: 0;
    }
  }
  @media (max-width: 768px) {
    .lav-users__title, .lav-users__image {
      display: none;
    }
    .lav-users__title-mob {
      display: block;
      transform: translateY(-50%);
      font-weight: 300;
      font-size: 32px;
      line-height: 36px;
    }
    .lav-users__title-mob span {
      letter-spacing: 1px;
      font-size: 96px;
      line-height: 96px; 
      font-weight: 700;        
    }
    .lav-users__image-mob {
      display: block;
      max-width: 100%;
    }
    .lav-modal__inner {
      max-width: 93%;
      width: 100%;
      padding: 48px 24px 24px;
    }
    .lav-modal__close {
      top: 12px;
      right: 12px;
    }
    .lav-modal {
      padding: 12px;
    }
    .days-test:before, .days-test:after {
      content: none;
    }
    .tooltip > img {
      width: 14px;
      height: 22px;
    }
    .days-test h3 {
      font-size: 22px;
      line-height: 28px;
    }
    .days-test {
      padding: 24px 0;
    }
    .line-dashed {
      margin-top: 16px;
    }
    .fs-22 {
      font-size: 18px;
      line-height: 24px;
    }
    .compare .fs-18, .days-test .fs-18, .technical-block .fs-18 {
      font-size: 16px;
      line-height: 24px;
    }
    .days-test_date .fs-16 {
      font-size: 14px;
      line-height: 20px;
    }
    .days-test_head .fs-22.mr-2 {
      margin-right: 4px;
    }
    .circle {
      margin: 7px 16px;
      width: 12px;
      height: 12px;
    }
    .tooltip {
      position: initial;
    }
    .days-test_date {
      width: calc(44% - 22px);
    }
    .days-test_head {
      width: calc(56% - 22px);
    }
    .line-dashed:before {
      left: calc(44% + 1px);
    }
    .days-test_list li {
      position: relative;
    }
    .tooltip-dropdown {
      right: 0;
      width: 100%;
    }
    .tooltip-item:before {
      right: auto;
      left: calc(50% + 63px);
    }
    .days-test_list li:not(:nth-child(2)) .tooltip-dropdown {
      top: calc(100% - 23px);
    }
    /* Section 2*/
    .compare img {
      width: 60px;
      height: 60px;
    }
    /* Section 3*/
    .safety-block img {
      width: 64px;
      height: 64px;
      margin-right: 12px;
      margin-left: 0;
    }
    .technical-block, .safety-block .row {
      padding: 16px;
    }
    .technical h2 {
      font-size: 32px;
      line-height: 36px;
    }
  }
`;
/*** STYLES / end ***/

/********* Custom Code **********/
init();
function init() {
  console.log('init');
  const stylesEl = document.createElement('style');
  stylesEl.innerHTML = stylePDP;
  if (location.href.includes('/luminette')) {
    let pdpInterval = setInterval(() => {
      if (document.querySelector('.section-main')) {
        clearInterval(pdpInterval);
        initPdp();
      }
    }, 500);

    document.body.appendChild(stylesEl);
    return false;
  }

  stylesEl.innerHTML = styles;
  document.body.appendChild(stylesEl);

  if (
    location.href.includes('order?product=4') ||
    /order\/\d+\/edit/.test(location.href) ||
    location.href.includes('order?product=5') ||
    location.href.includes('order?product=both')
  ) {
    document.body.classList.add('lav-body-checkout');
    let checkoutInterval = setInterval(() => {
      if (document.querySelector('.products-info')) {
        clearInterval(checkoutInterval);
        initCheckout();
        initTips();
      }
    }, 500);
  } else if (/order\/details\/\d+/.test(location.href)) {
    document.body.classList.add('lav-body-confirm');
    let checkoutInterval = setInterval(() => {
      if (document.querySelector('.order-info .column.order-5')) {
        clearInterval(checkoutInterval);
        initCheckoutDetails();
      }
    }, 500);
  }
}

function initPdp() {
  const sliderStyles = document.createElement('link');
  sliderStyles.rel = 'stylesheet';
  sliderStyles.href =
    'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.1/dist/css/splide-core.min.css';
  document.body.appendChild(sliderStyles);

  let sliderScript = document.createElement('script');
  sliderScript.src =
    'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.1/dist/js/splide.min.js';
  document.body.append(sliderScript);

  setInterval(() => {
    if (window.pageYOffset > 50) return false;
    document.querySelector('.header').classList.remove('dark-theme');
    document.querySelector('.header').classList.add('light-theme');
  }, 400);

  const newLayout = `
    <section class='lav-jumb'>
      <div class='container-fluid container--size--lg'>
        <div class='lav-jumb__inner'>
          <div class='lav-jumb__slider-wrap'>
            <div class="splide lav-jumb__slider">
              <div class="splide__track">
                <ul class="splide__list">
                  <li class="splide__slide">
                    <img src="${settings.dir}/img/slide1.jpeg" alt="">
                  </li>
                  <li class="splide__slide">
                    <img src="${settings.dir}/img/slide2.jpeg" alt="">
                  </li>
                  <li class="splide__slide lav-open-modal"      
                    data-target='.lav-review-modal' data-src='https://www.youtube.com/embed/O83h2CcQAHQ?autoplay=0&start=0&showinfo=0&rel=0'
                  >
                    <img src="${settings.dir}/img/slide3.jpeg" alt="">
                  </li>
                  <li class="splide__slide">
                    <img src="${settings.dir}/img/slide4.jpeg" alt="">
                  </li>
                  <li class="splide__slide">
                    <img src="${settings.dir}/img/slide5.jpeg" alt="">
                  </li>
                  <li class="splide__slide">
                    <img src="${settings.dir}/img/slide6.jpeg" alt="">
                  </li>
                  <li class="splide__slide">
                    <img src="${settings.dir}/img/slide7.jpeg" alt="">
                  </li>
                </ul>
              </div>
            </div>
          
            <div class="lav-jumb__thumbs">
              <div class="lav-jumb__thumb">
                <img src="${settings.dir}/img/slide1.jpeg" alt="">
              </div>
              <div class="lav-jumb__thumb">
                <img src="${settings.dir}/img/slide2.jpeg" alt="">
              </div>
              <div class="lav-jumb__thumb">
                <img src="${settings.dir}/img/slide3.jpeg" alt="">
              </div>
              <div class="lav-jumb__thumb">
                <img src="${settings.dir}/img/slide4.jpeg" alt="">
              </div>
              <div class="lav-jumb__thumb">
                <img src="${settings.dir}/img/slide5.jpeg" alt="">
              </div>
              <div class="lav-jumb__thumb">
                <img src="${settings.dir}/img/slide6.jpeg" alt="">
              </div>
              <div class="lav-jumb__thumb">
                <img src="${settings.dir}/img/slide7.jpeg" alt="">
              </div>
            </div>
          </div>
          <div class='lav-jumb__info'>
            <div class='lav-jumb__title'>Luminette 3 Light Therapy Glasses</div>
            <div class='lav-jumb__feedbacks'>
              <div class='lav-jumb__feedbacks-star'>
                <img src='${settings.dir}/img/stars.svg' />
              </div>
              <div class='lav-jumb__feedbacks-caption'>(<u>Over 900+ positive reviews</u>)</div>
            </div>
            <div class='lav-jumb__effects'>
              <div class='lav-jumb__effects-title lav-tooltip-wrap'>
              Feel beneficial effects in 4 to 6 days
                <div class="tooltip d-flex ml-1">
                  <img src="https://conversionratestore.github.io/projects/luminette/img/info.svg" alt="info"/>
                  <div class="tooltip-dropdown text-left fs-16">
                    <div class="tooltip-item">
                      <div class='tooltip-text fw-semi'>
                        Luminette®’s sleep rebalancing effect is almost immediate.
                      </div>
                      <div class='tooltip-text'>
                        After a few sessions, you’ll feel your sleep schedule improving, energy returning, and your mood getting better.
                      </div>
                      <div class='tooltip-text'>
                        If you are using Luminette to rectify a <span class='fw-semi'>sleep phase disorder</span> the results will become noticeable between <span class='fw-semi'>4 to 5 days.</span>
                      </div>
                    </div> 
                  </div>
                </div>
              </div>
              <div class='lav-jumb__effects-list'>
                <div class='lav-jumb__effects-item'>
                  <div class='lav-jumb__effects-icon'>
                    <img src='${settings.dir}/img/benefit1.svg' />
                  </div>
                  <div class='lav-jumb__effects-text'>Say goodbye 
                  to winter blues</div>
                </div>
                <div class='lav-jumb__effects-item'>
                  <div class='lav-jumb__effects-icon'>
                    <img src='${settings.dir}/img/benefit2.svg' />
                  </div>
                  <div class='lav-jumb__effects-text'>Rebalance your sleep schedules</div>
                </div>
                <div class='lav-jumb__effects-item'>
                  <div class='lav-jumb__effects-icon'>
                    <img src='${settings.dir}/img/benefit3.svg' />
                  </div>
                  <div class='lav-jumb__effects-text'>Restore your natural energy levels</div>
                </div>
              </div>
            </div>

            <div class='lav-count'>
              <div class='lav-count__head'>
                <div class='lav-count__head-title'>Quantity</div>
                <div class='lav-count__head-inside lav-tooltip-wrap'>
                  What’s in the box?
                  <div class="tooltip d-flex ml-1">
                    <img class='lav-info-invert' src="https://conversionratestore.github.io/projects/luminette/img/info.svg" alt="info"/>
                    <div class="tooltip-dropdown text-left fs-16">
                      <div class="tooltip-item">
                        <img class='tooltip-include' src="${settings.dir}/img/tooltip-include.png" />
                        <div class='lav-list lav-tooltip-list'>
                          <div class='lav-list__item'>Your Luminette</div>
                          <div class='lav-list__item'>A protective case</div>
                          <div class='lav-list__item'>A micro USB wall charger</div>
                          <div class='lav-list__item'>A microfiber cleaning cloth</div>
                          <div class='lav-list__item'>Guarantee certificate</div>
                          <div class='lav-list__item'>Your instruction manual </div>
                        </div>
                      </div> 
                    </div>
                  </div>
                </div>
              </div>
              <div class='lav-count__list'>
                <div class='lav-count__item active' data-count='1'>
                  <div class='lav-count__image'>
                    <img src='${settings.dir}/img/pr-1.png' />
                  </div>
                  <div class='lav-count__title'>1 Luminette</div>
                  <div class='lav-count__price'>$199</div>
                  <div class='lav-count__caption'>per unit</div>
                </div>
                <div class='lav-count__item' data-count='2'>
                  <div class='lav-count__image'>
                    <img src='${settings.dir}/img/pr-2.png' />
                  </div>
                  <div class='lav-count__title'>
                    2 Luminettes
                    <span class='lav-count__discount'>-10%</span>
                  </div>
                  <div class='lav-count__price'>$179<sup>10</sup></div>
                  <div class='lav-count__caption'>per unit</div>
                </div>
                <div class='lav-count__item' data-count='3'>
                  <div class='lav-count__image'>
                    <img src='${settings.dir}/img/pr-3.png' />
                  </div>
                  <div class='lav-count__title'>
                    3 Luminettes
                    <span class='lav-count__discount'>-15%</span>
                  </div>
                  <div class='lav-count__price'>$169<sup>15</sup></div>
                  <div class='lav-count__caption'>per unit</div>
                </div>
              </div>
            </div>

            <div class='lav-count__pay'>
              <button class="lav-jumb__btn btn-primary btn-lg flipped lav-btn-buy">
                <span class="btn-text">
                  Buy $199
                </span>
                <span class="btn-bg-wrapper"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class='lav-test__wrap'>
      <div class='container-fluid container--size--lg'>
        <div class="days-test">
          <h3 class="text-center">You have 30 days to test Luminette</h3>
          <div class="line-dashed">
            <ul class="row days-test_list">
              <li class="col-xl-4 d-xl-block d-flex flex-row-reverse justify-content-center lav-test__first">
                <p class="fs-22 fw-bold days-test_head">Buy Luminette3</p>
                <div class="circle"></div>
                <div class="days-test_date">
                  <p class="fs-18 fw-bold">Today</p>
                  <p class="fs-16 op-07">Sep 26, 2022</p>
                </div>
              </li>
              <li class="col-xl-4 d-xl-block d-flex flex-row-reverse justify-content-center lav-test__second">
                <div class="d-flex align-items-center days-test_head lav-tooltip-wrap">
                  <p class="fs-22 fw-bold mr-2">Free shipping</p>
                  <div class="tooltip d-flex">
                    <img src="https://conversionratestore.github.io/projects/luminette/img/info.svg" alt="info"/>
                    <div class="tooltip-dropdown fs-16">
                      <div class="tooltip-item">
                        <div class="tooltip_free text-center mb-2">
                          <div class="d-flex align-items-center justify-content-center mb-2 pb-1">
                            <img class="mr-2" src="https://conversionratestore.github.io/projects/luminette/img/EN.svg" alt="EN">
                            <img class="ml-1" src="https://conversionratestore.github.io/projects/luminette/img/CA.svg" alt="CA">
                          </div>
                          <p> Free for USA and Canada: <span class="fw-bold d-block">3 to 5 working days</span></p>
                        </div>
                        <div class="d-flex align-items-center justify-content-center mb-2 py-1">
                          <img class="mr-2" src="https://conversionratestore.github.io/projects/luminette/img/bpost.png" alt="bpost">
                          <img class="ml-1" src="https://conversionratestore.github.io/projects/luminette/img/colissimo.png" alt="colissimo">
                        </div>
                        <p class="">Orders are shipped from our logistics center located in Boise, Idaho. We use the services of Fedex Ground or USPS. Before they deliver your package, the carrier sends you a email warning you of the day of its passage.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="circle"></div>
                <div class="days-test_date">
                  <p class="fs-18 fw-bold">3-5 days</p>
                  <p class="fs-16 op-07">Sep 29-Oct 1, 2022</p>
                </div>
              </li>
              <li class="col-xl-4 d-xl-block d-flex flex-row-reverse justify-content-center lav-test__third">
                <div class="d-flex align-items-md-center align-items-end days-test_head lav-tooltip-wrap">
                  <div class="fs-22 fw-bold mr-2">100% money<div class="d-md-inline d-block">back guarantee</div> </div>
                  <div class="tooltip d-flex">
                    <img src="https://conversionratestore.github.io/projects/luminette/img/info.svg" alt="info"/>
                    <div class="tooltip-dropdown fs-16">
                      <div class="tooltip-item">
                        <p class="mb-2">
                          <b class="fw-semi">You have a whole month to trial your Luminette.</b> We recommend that you use Luminette consistently for a minimum of 10 consecutive days.
                        </p>
                        <p>However, if you’re dissatisfied, you can choose to be refunded for your Luminette within 30 days of purchase. See more details on our <a href="/delivery#returns-block" class="fw-semi bb-1 c-blue">Refunds page</a>.</p>
                      </div> 
                    </div>
                  </div>
                </div>
                <div class="circle"></div>
                <div class="days-test_date">
                  <p class="fs-18 fw-bold">After 30 days</p>
                  <p class="fs-16 op-07">Oct 29-Nov 1, 2022</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class='lav-recharge'>
      <div class='container-fluid container--size--lg lav-jumb__container'>
        <div class='lav-recharge__inner'>
          <div class='lav-recharge__preview lav-open-modal' data-target='.lav-review-modal' data-src='https://www.youtube.com/embed/O83h2CcQAHQ?autoplay=0&start=0&showinfo=0&rel=0'>
            <img src='${settings.dir}/img/play.svg' />
            <img src='${settings.dir}/img/play-hover.svg' />
          </div>
          <div class='lav-recharge__info'>
            <div class='lav-recharge__title lav-title'>Recharge with Luminette</div>
            <div class='lav-recharge__caption lav-text'>Breakthrough technology allows Luminette® glasses to rebalance your biological circadian body clock; restoring 
            your sleep cycles, mood, and energy levels.</div>
          </div>
        </div>
      </div>
    </section>

    <section class='lav-transforms'>
      <div class='container-fluid container--size--lg lav-transforms__container'>
        <div class='lav-transforms__slider splide'>
          <div class="splide__track">
            <div class="splide__list">
              <div class='lav-transform lav-transform_first splide__slide'>
                <div class='lav-transform__info'>
                  <div class='lav-transform__title lav-title'>How Luminette transforms your days</div>
                  <div class='lav-transform__descr lav-text'>Luminette's rays act like a replacement for natural sunlight. Your body can use it to optimize melatonin levels, allowing you reduce fatigue, sleep better at night, and have more energy during the day.</div>
                </div>
                <div class='lav-transform__image'>
                  <img src='${settings.dir}/img/transform-smile.png' />
                </div>
                <div class='lav-transform__title-mob lav-title'>How Luminette transforms your days</div>
              </div>

              <div class='lav-transform lav-transform_second splide__slide'>
                <div class='lav-transform__info'>
                  <div class='lav-transform__title lav-title'>How Luminette transforms your days</div>
                  <div class='lav-transform__descr lav-text'>When there's not enough sun, the brain starts overproducing melatonin which makes us weak and throws us off our sleep cycles.</div>
                </div>
                <div class='lav-transform__image'>
                <img src='${settings.dir}/img/transform-sad.png' />
                </div>
                <div class='lav-transform__title-mob lav-title'>How Luminette transforms your days</div>
              </div>
            </div>
          </div>
        </div>

        <div class='lav-transform__more'>
          <div class='lav-transform__more-btn'>
            Learn more about Light Therapy
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_2152_65635)">
              <path d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill="#517193" fill-opacity="0.1"/>
              <path d="M8.175 14.1758L12 10.3591L15.825 14.1758L17 13.0008L12 8.00078L7 13.0008L8.175 14.1758Z" fill="#517193"/>
              </g>
              <defs>
              <clipPath id="clip0_2152_65635">
              <rect width="24" height="24" fill="white"/>
              </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>

    <section class='compare-section'>
      <div class='container-fluid container--size--lg'>
        <div class="row fs-16 text-center compare mx-auto">
          <div class="col-6 py-5">
            <img class="my-1" src="https://conversionratestore.github.io/projects/luminette/img/glasses.svg" alt="glasses icon"/>
            <p class="fs-22 fw-bold py-1">Luminette3</p>
          </div>
          <div class="col-6 py-5">
            <img class="my-1" src="https://conversionratestore.github.io/projects/luminette/img/box.svg" alt="box icon"/>
            <p class="fs-22 fw-bold py-1">Light Box</p>
          </div>
          <div class="col-12 py-2 fs-18 fw-bold b-1">Portable</div>
          <div class="col-6 py-5 fw-medium"><p class="py-1">Wear while <span class="text-ellipsis"> on-the-go</span></p></div>
          <div class="col-6 py-5 fw-medium"><p class="py-1">Requires you to stop and sit still for <span class="text-ellipsis">30 mins</span></p></div>
          <div class="col-12 py-2 fs-18 fw-bold b-1">Light colour spectrum</div>
          <div class="col-6 py-5 fw-medium"><p class="py-1">Blue-enriched <span class="text-ellipsis">white light</span></p></div>
          <div class="col-6 py-5 fw-medium"><p class="py-1">Full spectrum <span class="text-ellipsis">white light</span></p></div>
          <div class="col-12 py-2 fs-18 fw-bold b-1">Therapy effectiveness</div>
          <div class="col-6 py-5 fw-medium"><p class="py-1">Provides effective therapy using <br>
              a less intense light source</p></div>
          <div class="col-6 py-5 fw-medium"><p class="py-1">Requires at least 10,000 lux to provide effective light therapy</p></div>
          <div class="col-12 py-2 fs-18 fw-bold b-1">Size</div>
          <div class="col-6 py-5 fw-medium"><p class="pt-1 pb-5">Small/ ultralight <br>
              only 51g (1.83 ounces)</p></div>
          <div class="col-6 py-5 fw-medium"><p class="pt-1 pb-5">	Large/ bulky</p></div>
        </div>
      </div>
    </section>

    <section class='lav-study__wrap'>
      <div class='container-fluid container--size--lg'>
        <div class='lav-study'>
          <div class='lav-study__icon'>
            <svg class="icon icon-xxl">
              <use xlink:href="#lamp"></use>
            </svg>
          </div>
          <div class='lav-study__info'>
            An <strong>independent study</strong> has shown that the Luminette gives the same results as a 10,000 lux light box
          </div>
          <div class='lav-study__btn'>
            Read the study
            <img src='/images/icons/adobe-reader.svg' />
          </div>
        </div>
      </div>
    </section>

    <section class='lav-can'>
      <div class='container-fluid container--size--lg'>
        <div class='lav-can__inner'>
          <div class='lav-can__icon'>
            <img src='/images/icons/clock.svg' />
          </div>
          <div class='lav-can__title lav-title'>While wearing <br/> Luminette, you can:</div>
          <div class='lav-can__list'>
            <div class='lav-can__item'>Get breakfast ready</div>
            <div class='lav-can__item'>Brush your teeth</div>
            <div class='lav-can__item'>Read your favorite magazine</div>
            <div class='lav-can__item'>Watch television</div>
            <div class='lav-can__item'>Work on your computer</div>
            <div class='lav-can__item'>Perform light exercise</div>
            <div class='lav-can__item'>e.g. walking, using an indoor exercise bicycle, yoga</div>
          </div>
        </div>
      </div>
    </section>

    <section class='lav-perfect'>
      <div class='container-fluid container--size--lg'>
        <div class='lav-perfect__title lav-title'>Perfect for your morning routine</div>
        <div class='lav-perfect__list'>
          <div class='lav-perfect__item'>
            <div class='lav-perfect__icon'>
              <img src='/images/pages/device-landings/luminette/how_to_use_icon_1.svg' />
            </div>
            <div class='lav-perfect__subtitle'>Wear for 20-45 mins
            to get a complete therapy session</div>
            <div class='lav-perfect__descr lav-text'>Varies according to light intensity level: (From 20-minutes at maximum intensity to 45-minutes at minimum intensity.)</div>
          </div>

          <div class='lav-perfect__item'>
            <div class='lav-perfect__icon'>
              <img src='/images/pages/device-landings/luminette/how_to_use_icon_2.svg' />
            </div>
            <div class='lav-perfect__subtitle'>Use 1x per day
            </div>
            <div class='lav-perfect__descr lav-text'>We recommend using the Luminette 
            once a day.</div>
          </div>

          <div class='lav-perfect__item'>
            <div class='lav-perfect__icon'>
              <img src='/images/pages/device-landings/luminette/how_to_use_icon_3.svg' />
            </div>
            <div class='lav-perfect__subtitle'>Begin restoring your energy levels within 4 to 6 days</div>
            <div class='lav-perfect__descr lav-text'>Luminette®’s sleep rebalancing effect is almost immediate. Within just a few sessions, you’ll feel your sleep schedule improving, energy returning, and your mood getting better.</div>
          </div>
        </div>
      </div>
    </section>

    <section class='lav-trial lav-section'>
      <div class='container-fluid container--size--lg lav-trial__container'>
        <div class='lav-trial__row'>
          <img class='lav-trial__image' src='${settings.dir}/img/trial.png' />

          <div class='lav-trial__info'>
            <div class='lav-trial__title lav-title'>30 Day <br/> Light Therapy Trial</div>
            <div class='lav-trial__descr lav-text'>Test out Luminette's patented Light Therapy for an entire 30 days, and if you aren't satisfied, send it back and we'll refund you!</div>

            <div class='lav-trial__buttons'>
              <div class='lav-trial__btn lav-trial__btn-refresh lav-tooltip-wrap'>
                <img src='${settings.dir}/img/icon-refresh.svg' />
                <span>30-day trial</span>
                <div class="tooltip d-flex ml-2">
                  <img class='lav-info-invert' src="https://conversionratestore.github.io/projects/luminette/img/info.svg" alt="info"/>
                  <div class="tooltip-dropdown text-left fs-16">
                    <div class="tooltip-item">
                      <p class="mb-2">
                        <b class="fw-semi">You have a whole month to trial your Luminette.</b> We recommend that you use Luminette consistently for a minimum of 10 consecutive days.
                      </p>
                      <p>
                        However, if you’re dissatisfied, you can choose to be refunded for your Luminette within 30 days of purchase. See more details on our <a href="/delivery#returns-block" class="fw-semi bb-1 c-blue">Refunds page</a>.
                      </p>
                    </div> 
                  </div>
                </div>
              </div>
              <div class='lav-trial__btn lav-trial__btn-box lav-tooltip-wrap'>
                <img src='${settings.dir}/img/icon-box-2.svg' />
                <span>Free shipping</span>
                <div class="tooltip d-flex ml-2">
                  <img class='lav-info-invert' src="https://conversionratestore.github.io/projects/luminette/img/info.svg" alt="info"/>
                  <div class="tooltip-dropdown text-left fs-16">
                    <div class="tooltip-item">
                      <div class="tooltip_free text-center mb-2">
                        <div class="d-flex align-items-center justify-content-center mb-2 pb-1">
                          <img class="mr-2" src="https://conversionratestore.github.io/projects/luminette/img/EN.svg" alt="EN">
                          <img class="ml-1" src="https://conversionratestore.github.io/projects/luminette/img/CA.svg" alt="CA">
                        </div>
                        <p> Free for USA and Canada: <span class="fw-bold d-block">3 to 5 working days</span></p>
                      </div>
                      <div class="d-flex align-items-center justify-content-center mb-2 py-1">
                        <img class="mr-2" src="https://conversionratestore.github.io/projects/luminette/img/bpost.png" alt="bpost">
                        <img class="ml-1" src="https://conversionratestore.github.io/projects/luminette/img/colissimo.png" alt="colissimo">
                      </div>
                      <p class="">Orders are shipped from our logistics center located in Boise, Idaho. We use the services of Fedex Ground or USPS. Before they deliver your package, the carrier sends you a email warning you of the day of its passage.</p>
                    </div> 
                  </div>
                </div>
              </div>
            </div>

            <div class='lav-trial__actions'>
              <button class='lav-trial__btn btn-primary btn-lg flipped lav-btn-buy'>
                <span class="btn-text">
                  Try it $199
                </span>
                <span class="btn-bg-wrapper"></span>
              </button>

              <div class='lav-trial__inside lav-tooltip-wrap'>
                What’s in the box?
                <div class="tooltip d-flex ml-1">
                  <img class='lav-info-invert' src="https://conversionratestore.github.io/projects/luminette/img/info.svg" alt="info"/>
                  <div class="tooltip-dropdown text-left fs-16">
                    <div class="tooltip-item">
                      <img class='tooltip-include' src="${settings.dir}/img/tooltip-include.png" />
                      <div class='lav-list lav-tooltip-list'>
                        <div class='lav-list__item'>Your Luminette</div>
                        <div class='lav-list__item'>A protective case</div>
                        <div class='lav-list__item'>A micro USB wall charger</div>
                        <div class='lav-list__item'>A microfiber cleaning cloth</div>
                        <div class='lav-list__item'>Guarantee certificate</div>
                        <div class='lav-list__item'>Your instruction manual </div>
                      </div>
                    </div> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class='technical__wrap'>
      <div class='container-fluid container--size--lg'>
        <div class="technical">
          <div class="row technical-block">
            <div class="col-lg-6 pl-0">
              <h2>Technical <br>
              Details</h2>
            </div>
            <div class="col-lg-6 fs-18">
              <div class="row pb-2 bb-1">
                <div class="col-sm-7 col-6 pl-0">Product Dimensions</div>
                <div class="col-sm-5 col-6 fw-semi pr-0 pl-1">3"D x 9.06"W x6.26"H</div>
              </div>
              <div class="row py-2 bb-1">
                <div class="col-sm-7 col-6 pl-0">Light Source Type</div>
                <div class="col-sm-5 col-6 fw-semi pr-0 pl-1">LED</div>
              </div>
              <div class="row py-2 bb-1">
                <div class="col-sm-7 col-6 pl-0">Number of Light Sources</div>
                <div class="col-sm-5 col-6 fw-semi pr-0 pl-1">3</div>
              </div>
              <div class="row py-2 bb-1">
                <div class="col-sm-7 col-6 pl-0">Item Weight</div>
                <div class="col-sm-5 col-6 fw-semi pr-0 pl-1">1.83 ounces (51g)</div>
              </div>
            </div>
          </div>
          <div class="safety-block">
            <div class="row">
              <div class="col-lg-6 pl-0">
                <h2 class="pb-4">Safety</h2>
                <div class="d-flex mt-5">
                  <img class="mr-5 mb-3" src="https://conversionratestore.github.io/projects/luminette/img/safety-1.svg" alt="safety icon" />
                  <img class="mr-5 ml-2 mb-3" src="https://conversionratestore.github.io/projects/luminette/img/safety-2.svg" alt="safety icon" />
                  <img class="ml-2 mb-3" src="https://conversionratestore.github.io/projects/luminette/img/safety-3.svg" alt="safety icon" />
                </div>
              </div>
              <div class="col-lg-6 fs-18 px-0">
                <p class="fw-bold mb-3">Since 2007 Luminette®  carries the European 
                CE classification. </p>
                <p class="mb-3">Luminette® is classified as a device that is safe for the eyes in accordance with the international standard CEI 62471. In addition, the light emitted by Luminette®  is free from UV, infrared rays and does not contain short wavelength below 450 nm</p>
                <p>There are no Light Therapy lamps in the USA that carry FDA approval. Therefore the efficacy and safety of this electronic device - and all other light therapy devices on the US market - will be unregulated by the FDA. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class='lav-users lav-section'>
      <img class='lav-users__image' src='${settings.dir}/img/users-bg.png' />
      <img class='lav-users__image-mob' src='${settings.dir}/img/users-bg-mob.png' />
      <div class='lav-users__title-mob container'><span>150k+</span> Luminette users</div>
      <div class='lav-users__title container'><span>150 000</span> Luminette users</div>
    </section>

    <section class='lav-reviews'>
      <div class='container-fluid container--size--lg lav-reviews__container'>
        <div class='lav-reviews__title lav-title'>Customer reviews</div>

        <div class='lav-reviews__list splide'>
          <div class="splide__track">
            <div class="splide__list">
              <div class='lav-review splide__slide'>
                <div class='lav-review__image'>
                  <img src='${settings.dir}/img/review1.png' />
                </div>
                <div class='lav-review__name'>Aurélie</div>
                <a href='https://www.amazon.fr/gp/customer-reviews/RWZSN5SZJF573/ref=cm_cr_getr_d_rvw_ttl?ie=UTF8&amp;ASIN=B07VMRRB9Y' target='_blank' class='lav-review__link'>
                  View review on <span>Amazon</span>
                  <img src='${settings.dir}/img/rate.svg' />
                </a>
                <div class='lav-review__text active'>
                  “For years, I have suffered from seasonal depression. I have been advised by health professionals (general practitioner, psychiatrist, psychologist and pharmacist) have advised me to use light therapy to improve my state in the fall and winter. I hesit...”
                </div>

                <div class='lav-review__text'>
                  “For years, I have suffered from seasonal depression. I have been advised by health professionals (general practitioner, psychiatrist, psychologist and pharmacist) have advised me to use light therapy to improve my state in the fall and winter. I hesitated for a long time and then I discovered the Luminette. I use it in the morning, either while going about my business (breakfast, brushing my teeth brushing...) or when I'm reading. After the session, I have much more energy and motivation to face the day. It is very practical because it can be worn at the same time as my glasses or computer glasses. They are made of a rather rigid plastic, but they seem to be strong. They charge quite quickly. A charging indicator lets you know when it is finished. Once charged, they can be used about 10 times. There are 3 modes. The more powerful the light, the shorter the exposure time. What is very practical is that you don't have to watch the time because they turn off by themselves once the the session is over. The only small ""downside"" is that the most powerful mode can be glaring when the surrounding light is weak. I would recommend this product without hesitation, since it gives me a real moral boost during short days.”
                </div>
                
                <div class='lav-review__trigger'>Show more</div>
              </div>
              
              <div class='lav-review splide__slide'>
                <div class='lav-review__image'>
                  <img src='${settings.dir}/img/review2.png' />
                </div>
                <div class='lav-review__name'>Arnaud T.</div>
                <a href='https://www.google.com/maps/contrib/111655687148446401076/reviews/@50.5779487,5.2610511,16z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=fr-BE' target='_blank' class='lav-review__link'>
                  View review on <span>Google</span>
                  <img src='${settings.dir}/img/rate.svg' />
                </a>
                <div class='lav-review__text active'>
                  "Every year I notice the lack of light and it affects my mood. This year I found the solution to remedy this with the Luminette. The advantage is that you are not stuck in front of a screen while you use it, so and you can get ready in the morning or eat breakfast with the glasses on. It is very practical :)"
                </div>
              </div>

              <div class='lav-review splide__slide'>
                <div class='lav-review__image'>
                  <img src='${settings.dir}/img/review3.png' />
                </div>
                <div class='lav-review__name'>Laura S.</div>
                <a href='https://www.amazon.com/gp/customer-reviews/R37M192JK2SORZ/ref=cm_cr_getr_d_rvw_ttl?ie=UTF8&ASIN=B07VMRRB9Y' target='_blank' class='lav-review__link'>
                  View review on <span>Amazon</span>
                  <img src='${settings.dir}/img/rate.svg' />
                </a>
                <div class='lav-review__text active'>
                  “I use Luminettes since the beginning of October 2020 to deal with my Seasonal Affective Disorder (SAD). So far, I have no symptoms of SAD, despite the time changing (winter time) and the sun disappearing at 4:30 PM. It is a first. I am amazed.my energy level has increased...”
                </div>
                <div class='lav-review__text'>
                  “I use Luminettes since the beginning of October 2020 to deal with my Seasonal Affective Disorder (SAD). So far, I have no symptoms of SAD, despite the time changing (winter time) and the sun disappearing at 4:30 PM. It is a first. I am amazed.my energy level has increased and I feel free and joyous most of the time. I also sleep much better. I must add that I stopped caffeine, which helps as well. Luminettes are far, far better than the lamps. I wear them every morning without being obliged to stare at the lamp. My mood has really improved. They are very convenient and easy to use. I put them onto the top of my glasses. They recharge easily and they can be used without plugging them every day. Everyone who sees me wearing them (when I attend online meetings, when I go to the dentist, etc) are asking me if it works. People think it is pretty and they are very interested because they always have someone in their family with SAD, or they are afflicted by that disorder themselves. So really, no complaints, only good things to say about my Luminettes which are as precious now as my cell phone. Merci!" caffeine, which helps as well. Luminettes are far, far better than the lamps. I wear them every morning without being obliged to stare at the lamp. My mood has really improved. They are very convenient and easy to use. I put them onto the top of my glasses. They recharge easily and they can be used without plugging them every day. Everyone who sees me wearing them (when I attend online meetings, when I go to the dentist, etc) are asking me if it works. People think it is pretty and they are very interested because they always have someone in their family with SAD, or they are afflicted by that disorder themselves. So really, no complaints, only good things to say about my Luminettes which are as precious now as my cell phone. Merci!”
                </div>
                <div class='lav-review__trigger'>Show more</div>
              </div>
            </div>
          </div>
        </div>

        <div class='lav-reviews__total'>
          <div class='lav-reviews__total-col'>
            <div class='lav-reviews__total-image'>
              <img src='${settings.dir}/img/reviews-trusted.svg' />
            </div>
            <div class='lav-reviews__total-info'>
              <div class='lav-reviews__total-score'>4.3</div>
              <div class='lav-reviews__total-stars'>
                <img src='${settings.dir}/img/reviews-stars.svg' />
              </div>
              <div class='lav-reviews__total-caption'><span>See reviews on</span> Trusted shops</div>
            </div>
          </div>
          <div class='lav-reviews__total-col'>
            <div class='lav-reviews__total-image'>
              <img src='${settings.dir}/img/reviews-amazon.svg' />
            </div>
            <div class='lav-reviews__total-info'>
              <div class='lav-reviews__total-score'>4.4</div>
              <div class='lav-reviews__total-stars'>
                <img src='${settings.dir}/img/reviews-stars.svg' />
              </div>
              <div class='lav-reviews__total-caption'><span>See reviews on</span> Amazon</div>
            </div>
          </div>
        </div>

        <div class='lav-reviews__preview-list'>
          <div class='lav-reviews__preview' style='background-image: url(${settings.dir}/img/en-preview-review1.png);'>
            <div class="lav-reviews__play lav-open-modal" data-target='.lav-review-modal' data-src='https://www.youtube.com/embed/ye4x3DkSbvA?autoplay=0&start=0&showinfo=0&rel=0'>
              <img class='lav-reviews__play-btn' src='${settings.dir}/img/play.svg' />
              <img class='lav-reviews__play-btn' src='${settings.dir}/img/play-hover.svg' />
            </div>
          </div>

          <div class='lav-reviews__preview' style='background-image: url(${settings.dir}/img/en-preview-review2.png);'>
            <div class="lav-reviews__play lav-open-modal" data-target='.lav-review-modal' data-src='https://www.youtube.com/embed/hZpBFn_YKMY?autoplay=0&start=0&showinfo=0&rel=0'>
              <img class='lav-reviews__play-btn' src='${settings.dir}/img/play.svg' />
              <img class='lav-reviews__play-btn' src='${settings.dir}/img/play-hover.svg' />
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class='lav-modal'>
      <div class='lav-modal__inner lav-review-modal'>
        <div class='lav-modal__close'>
          <img src='${settings.dir}/img/modal-close.svg'>
        </div>

        <iframe width="840" height="480" src="https://www.youtube.com/embed/ye4x3DkSbvA?autoplay=0&start=0&showinfo=0&rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  `;

  document
    .querySelector('.section-main')
    .insertAdjacentHTML('afterend', newLayout);

  document
    .querySelector('.lav-transform__more-btn')
    .addEventListener('click', function () {
      this.classList.toggle('active');
      document.querySelector('.block-on-the-go').classList.toggle('active');
    });

  document.querySelector('.block-on-the-go .title').innerHTML =
    'Light therapy <br /> on the go';

  document
    .querySelector('.lav-transforms')
    .insertAdjacentElement(
      'beforeend',
      document.querySelector('.block-on-the-go')
    );

  document
    .querySelector('.section-safety')
    .insertAdjacentElement('beforebegin', document.querySelector('.lav-users'));

  document
    .querySelector('.section-safety')
    .insertAdjacentElement(
      'beforebegin',
      document.querySelector('.lav-reviews')
    );

  let initSplideInterval = setInterval(() => {
    if (typeof Splide == 'function') {
      clearInterval(initSplideInterval);
      initSliders();
    }
  }, 500);

  document
    .querySelector('.lav-study__btn')
    .addEventListener('click', function () {
      document.querySelector('.btn-download-doc').click();
    });

  document
    .querySelector('.lav-trial')
    .insertAdjacentElement(
      'afterend',
      document.querySelector('.lum-page .section-features')
    );

  document.querySelector('.lum-page .section-features .title').innerText =
    document
      .querySelector('.lum-page .section-features .title')
      .innerText.replace('Luminette', '');

  document
    .querySelector(
      '.lum-page .section-features .device-wrapper .heading-wrapper .title'
    )
    .insertAdjacentHTML(
      'afterend',
      '<div class="lav-feat">Move your cursor over the buttons to zoom in</div>'
    );

  handleJumb();
  initHowItWorks();
  initReserch();
  initDeliveryDates();
  initModals();
  initReviews();

  function handleJumb() {
    for (let item of document.querySelectorAll('.lav-count__item')) {
      item.addEventListener('click', function () {
        if (this.classList.contains('active')) return false;

        const price = item.querySelector('.lav-count__price').innerHTML;

        localStorage.setItem('lavCount', item.dataset.count);

        document
          .querySelector('.lav-count__item.active')
          .classList.remove('active');
        this.classList.add('active');

        document.querySelector('.lav-jumb__btn .btn-text').innerHTML =
          'Buy ' + price;

        document.querySelector('.lav-trial__btn .btn-text').innerHTML =
          'Try it ' + price;
      });
    }

    for (let item of document.querySelectorAll('.lav-btn-buy')) {
      item.addEventListener('click', function () {
        location.href =
          location.href.split('/luminette')[0] + '/order?product=4';
      });
    }

    document
      .querySelector('.modal-footer .btn-order')
      .addEventListener('click', function (e) {
        if (
          document.querySelector('[data-target="lum"].selected') &&
          !document.querySelector('[data-target="drive"].selected')
        ) {
          e.preventDefault();
          location.href =
            location.href.split('/luminette')[0] + '/order?product=4';
        }
      });

    document
      .querySelector('.lav-jumb__feedbacks')
      .addEventListener('click', function () {
        document
          .querySelector('.lav-reviews')
          .scrollIntoView({ block: 'start', behavior: 'smooth' });
      });

    if (window.innerWidth < 1200) {
      document
        .querySelector('.lav-jumb__slider-wrap')
        .insertAdjacentElement(
          'beforebegin',
          document.querySelector('.lav-jumb__title')
        );
      document
        .querySelector('.lav-jumb__slider-wrap')
        .insertAdjacentElement(
          'beforebegin',
          document.querySelector('.lav-jumb__feedbacks')
        );
      document
        .querySelector('.lav-jumb__slider-wrap')
        .insertAdjacentElement(
          'beforebegin',
          document.querySelector('.lav-jumb__effects-title')
        );
    }

    // document.querySelector('.lav-jumb__video')
  }

  function initHowItWorks() {
    document.querySelector(
      '.lum-page .section-how-it-works .main-content .column .title'
    ).innerHTML = 'The Science <br /> Behind Luminette®';
  }

  function initReserch() {
    document.querySelector(
      '.lum-page .section-studies .studies-component .heading-wrapper .title'
    ).innerHTML =
      '4 years of <br/> research <br/> at the <strong>University <br/> of Liege</strong>';

    document
      .querySelector('.studies-component .study-item:nth-child(3)')
      .classList.add('lav-research-reorder');
    document
      .querySelector('.studies-component .study-item:nth-child(3)')
      .classList.remove('last-visible-item');

    document
      .querySelector('.studies-component .study-item:nth-child(2)')
      .classList.add('last-visible-item');

    document.querySelector(
      '.studies-component .study-item:nth-child(3) .number'
    ).innerText = '1';
    document.querySelector(
      '.studies-component .study-item:nth-child(1) .number'
    ).innerText = '2';
    document.querySelector(
      '.studies-component .study-item:nth-child(2) .number'
    ).innerText = '3';
  }

  function initDeliveryDates() {
    document.querySelector(
      '.lav-test__first .days-test_date p:last-child'
    ).innerText = setStringFromDate(new Date(), true);

    document.querySelector(
      '.lav-test__second .days-test_date p:last-child'
    ).innerText =
      setStringFromDate(new Date().setDate(new Date().getDate() + 3)) +
      '-' +
      setStringFromDate(new Date().setDate(new Date().getDate() + 5), true);

    document.querySelector(
      '.lav-test__third .days-test_date p:last-child'
    ).innerText =
      setStringFromDate(new Date().setDate(new Date().getDate() + 33)) +
      '-' +
      setStringFromDate(new Date().setDate(new Date().getDate() + 35), true);
  }

  function initReviews() {
    for (let item of document.querySelectorAll('.lav-review__trigger')) {
      item.addEventListener('click', function (e) {
        e.preventDefault();
        this.closest('.lav-review').classList.add('lav-review_expand');
        this.closest('.lav-review')
          .querySelector('.lav-review__text')
          .classList.remove('active');
        this.closest('.lav-review')
          .querySelector('.lav-review__text + .lav-review__text')
          .classList.add('active');

        item.remove();

        return false;
      });
    }
  }

  function setStringFromDate(date, isYear) {
    date = new Date(date);
    let month = date.toLocaleString('en-us', { month: 'short' });
    let day = date.getDate();
    let year = date.getUTCFullYear();

    if (isYear) {
      return `${month} ${day}, ${year}`;
    }

    return `${month} ${day}`;
  }

  function initSliders() {
    let jumbSlider = new Splide('.lav-jumb__slider', {
      pagination: false,
      arrows: false,
    });

    var thumbnails = document.querySelectorAll('.lav-jumb__thumb');
    var current;

    for (var i = 0; i < thumbnails.length; i++) {
      initThumbnail(thumbnails[i], i);
    }

    function initThumbnail(thumbnail, index) {
      thumbnail.addEventListener('click', function () {
        jumbSlider.go(index);
      });
    }

    jumbSlider.on('mounted move', function () {
      var thumbnail = thumbnails[jumbSlider.index];

      if (thumbnail) {
        if (current) {
          current.classList.remove('is-active');
        }

        thumbnail.classList.add('is-active');
        current = thumbnail;
      }
    });

    jumbSlider.mount();

    let splideTransforms = new Splide('.lav-transforms__slider', {
      type: 'fade',
      rewind: true,
      arrows: false,
    }).mount();

    let splideReview = new Splide('.lav-reviews__list', {
      arrows: false,
      perPage: 3,
      pagination: false,
      autoWidth: true,
      breakpoints: {
        768: {
          perPage: 1,
          pagination: true,
          autoWidth: false,
          gap: 15,
        },
      },
    }).mount();
  }

  function initModals() {
    for (let item of document.querySelectorAll('.lav-open-modal')) {
      item.addEventListener('click', function (e) {
        e.preventDefault();
        openModal(
          document.querySelector(item.dataset.target),
          item.dataset.src
        );
      });
    }

    document
      .querySelector('.lav-modal')
      .addEventListener('click', function (e) {
        if (e.target.classList.contains('lav-modal')) {
          closeModal();
        }
      });

    for (let item of document.querySelectorAll('.lav-modal__close')) {
      item.addEventListener('click', function (e) {
        e.preventDefault();
        closeModal();
      });
    }

    function openModal(selector, src) {
      if (src) {
        selector.querySelector('iframe').src = src;
      }
      document.querySelector('.lav-modal').classList.add('active');
      setTimeout(() => {
        selector.classList.add('active');
      }, 400);

      if (selector.querySelector('iframe')) {
        selector.querySelector('iframe').src = selector
          .querySelector('iframe')
          .src.replace('autoplay=0', 'autoplay=1');
      }
    }

    function closeModal() {
      if (document.querySelector('.lav-modal__inner.active iframe')) {
        document.querySelector('.lav-modal__inner.active iframe').src = document
          .querySelector('.lav-modal__inner.active iframe')
          .src.replace('autoplay=1', 'autoplay=0');
      }
      document
        .querySelector('.lav-modal__inner.active')
        .classList.remove('active');
      setTimeout(() => {
        document.querySelector('.lav-modal.active').classList.remove('active');
      }, 400);
    }
  }
}

function initTips() {
  for (let tip of document.querySelectorAll('.lav-tip')) {
    tip.addEventListener('click', function () {
      if (window.innerWidth < 768) {
        this.classList.toggle('active');
      }
    });
  }
}

function initCheckout() {
  console.log('fire1');
  handleTop();
  handleAddress();
  handleSummary();
  setInterval(() => {
    fillProduct();
  }, 500);

  for (let item of document.querySelectorAll('.logo-link')) {
    item.href = '#';
    item.style = 'pointer-events: none;';
  }

  let count = localStorage.getItem('lavCount');

  if (count) {
    if (count == '2') {
      document.querySelector('.lav-product__count-value').innerText = count;
      document
        .querySelector('.product-list .product-list-item:nth-child(2)')
        .click();
    } else if (count == '3') {
      document.querySelector('.lav-product__count-value').innerText = count;
      document
        .querySelector('.product-list .product-list-item:nth-child(3)')
        .click();
    }
  }

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
        document.querySelector('.lav-coupon').style.display = 'none';
        setTimeout(() => {
          document.querySelector('.lav-coupon').removeAttribute('style');
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
                  Opt in <strong>for maximum manufacturer protection using our extended warranty</strong> that covers your Luminette for 4 years from the purchase date.
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
        <img src='/images/pages/order/quantity/lum1.png'> ${document
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
    if (localStorage.getItem('lavCount')) {
      localStorage.removeItem('lavCount');
    }

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

      let initDeliveryTimer = setInterval(() => {
        if (document.querySelector('.lav-address__item.active')) {
          clearInterval(initDeliveryTimer);
        } else {
          initDelivery('mob');
        }
      }, 500);

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

      let initDeliveryTimer = setInterval(() => {
        if (document.querySelector('.lav-address__item.active')) {
          clearInterval(initDeliveryTimer);
        } else {
          initDelivery('desk');
        }
      }, 500);

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

    document
      .querySelector('.lav-coupon')
      .insertAdjacentHTML(
        'afterbegin',
        ' <div class="lav-coupon-text">Enter coupon code</div>'
      );

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

  function initDelivery(type) {
    if (type == 'desk') {
      if (
        document.querySelector(
          '#scroll-spy-item-3 .radio-btn-column:first-child .label.active'
        )
      ) {
        document
          .querySelector('.lav-address__item:first-child')
          .classList.add('active');
      } else if (
        document.querySelector(
          '#scroll-spy-item-3 .radio-btn-column:last-child .label.active'
        )
      ) {
        document
          .querySelector('.lav-address__item:last-child')
          .classList.add('active');
        document.querySelector('#scroll-spy-item-3').classList.add('active');
      }
    } else {
      if (
        document.querySelector('[for="billing_address_exists_same"].active')
      ) {
        document
          .querySelector('.lav-address__item:first-child')
          .classList.add('active');
      } else if (
        document.querySelector('[for="billing_address_exists_another"].active')
      ) {
        document
          .querySelector('.lav-address__item:last-child')
          .classList.add('active');
        document
          .querySelector(
            '.details-section + .details-section[data-toggle="buttons"]'
          )
          .classList.remove('active');
      }
    }
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

  for (let item of document.querySelectorAll('.logo-link')) {
    item.href = '#';
    item.style = 'pointer-events: none;';
  }
}
