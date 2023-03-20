console.log('initExp');
if (location.href.includes('/buy?product=4')) {
  location.href = '/luminette';
}

/********* Settings **********/
const settings = {
  dir: 'https://flopsi69.github.io/crs/myluminette/checkout',
  clarity: true,
  observe: false,
};

if (
  ['/en-us', '/en-ca', '/uk', '/fr', '/fr-be', '/fr-ca'].includes(
    location.pathname
  )
) {
  settings.dir = 'https://flopsi69.github.io/crs/myluminette/newhome2';
}

//Hotjar
if (settings.clarity) {
  const clarityInterval = setInterval(function () {
    if (typeof clarity == 'function') {
      clearInterval(clarityInterval);
      clarity('set', 'new_pdp_video_reviews', 'variant_1');
    }
  }, 1000);
}

// Alalytic
function gaEvent(name, desc, type, loc) {
  if (!name) {
    name = '';
  }
  if (!desc) {
    desc = '';
  }
  if (!type) {
    type = '';
  }
  if (!loc) {
    loc = '';
  }
  try {
    var objData = {
      event: 'event-to-ga4',
      event_name: name,
      event_desc: desc,
      event_type: type,
      event_loc: loc,
    };
    console.log('DEBUG:: EventFire:', objData);
    dataLayer.push(objData);
  } catch (e) {
    console.log('Event Error:', e);
  }
}

// Styles
const styles = `
  .lav-coupon .primary-input-wrapper.has-error .input {
    border-color: inherit;
    color: inherit;
  }
  .header .links-wrapper, .header .additional-block-wrapper, .burger-menu-btn {
    display: none!important;
  }
  .lav-coupon .primary-input-wrapper .error-block {
    display: none;
  }
  .lav-coupon .primary-input-wrapper.has-error .input::-moz-placeholder {
    color: inherit;
  }

  .lav-coupon .primary-input-wrapper.has-error .input:-ms-input-placeholder {
    color: inherit;
  }

  .order-pages {
    background-color: #fff;
  }

  .lav__wrapper {
    display: flex;
    margin-top: 40px;
  }

  @media (max-width: 1100px) {
    .lav__wrapper {
      flex-flow: column-reverse;
    }
  }

  @media(max-width: 768px) {
    .lav__wrapper {
      margin-top: 0;
    }
  }


  .lav-coupon .primary-input-wrapper.has-error .input::placeholder {
    color: inherit;
  }
  .order-pages.order-summary .section:not(:first-child):after {
    display: none;
  }
  .order-pages .products-info {
    display: none;
  }
  .order-pages .component-order-steps {
    display: none!important;
  }
  .lav-body-checkout .container--size--lg, .lav-body-checkout .container-fluid--size--lg, .lav-body-checkout .container-lg--size--lg {
    max-width: 1318px;
  }
  .lav-body-confirm .container--size--lg, .lav-body-confirm .container-fluid--size--lg, .lav-body-confirm .container-lg--size--lg {
    max-width: 1318px;
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
    position: static;
    transform: none;
    line-height: 1;
  }
  .lav-body-confirm .details-block .wrapper {
    background: #FCFDFE ;
    border-radius: 8px;
    box-shadow: 0px 44px 66px rgba(59, 83, 108, 0.22);
    padding: 24px 48px 30px;
    // margin-top: 40px;
  }

  .lav-plate__details {
    margin-top: 0;
  }
  .order-pages.order-summary .order-info .columns {
    background: #F3F5F9;
    padding: 16px 48px 24px;
    margin: 0 -48px;
  }
  .order-pages.order-summary .order-info .flex-column p {
    word-break: break-word;
  }
  .order-pages.order-summary .order-info .columns .column.order-4,  .order-pages.order-summary .order-info .columns .column.order-5,  .order-pages.order-summary .order-info .columns .column.order-3 {
    display: none;
  }
  .lav-fedex {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 35px;
  }
  .lav-fedex svg {
    margin-bottom: 0!important;
    margin-right: 8px;
  }
  .lav-fedex br {
    display: none;
  }
  .lav-fedex > img {
    height: 50px;
    margin-right: 3px;
  }
  .order-pages.order-summary .payment-methods .title {
    padding-bottom: 35px;
    text-align: left;
  }
  @media(max-width: 1100px) {
    .order-pages.order-summary .payment-methods .title {
      text-align: center;
    }
  }
  .order-pages.order-summary .section:not(:first-child) {
    margin-top: 30px;
  }
  .lav-total {
    padding-top: 24px; 
    margin-top: 24px;
    border-top: 1px solid #DDE3E9;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #517193;
  }
  .lav-total__price br {
    display: none;
  }
  .order-pages.order-summary .order-info>.title, .order-pages.order-summary .payment-methods .title {
    font-size: 24px;
    line-height: 28px;
  }
  .order-pages.order-summary .payment-methods .payment-info {
    font-weight: 500;
  }
  .order-pages.order-summary .section:not(:first-child) {
    padding-top: 0;
  }
  .order-pages .details-section, .order-pages.order-details .details-block .details-section:not(:first-child) {
    background: none;
    padding: 24px 48px 48px;
    margin-top: 12px!important;
    box-shadow: 0px 44px 66px rgba(59, 83, 108, 0.22);
    background: linear-gradient(106.63deg, #F8F9FA 38.5%, #FDFDFD 100.78%);
    border-radius: 8px;
  }
  .order-pages .details-section, .order-pages.order-details .details-block .details-section:not(:first-child) {
    margin-top: 24px!important;
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
    // margin-top: 40px;
  }

  .lav-body-confirm .details-block {
    margin-top: 40px;
  }

  @media(max-width: 1100px) {
    .lav-body-confirm .details-block {
      flex-flow: column-reverse;
    }
  }

  @media(max-width: 768px) {
    .lav-body-confirm .details-block {
      margin-top: 0;
    }

  }

  .order-pages.order-summary .payment-methods .forms-wrapper .form-block .payment-icon .image {
    width: 87px;
    height: 50px;
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

  #scroll-spy-item-3 .fields-another-address .fields {
    flex-direction: column;
  }
  #scroll-spy-item-3 .fields-another-address .fields>div:last-child {
    order: -2;
    max-width: 60%;
  }
  #scroll-spy-item-3 .fields-another-address .fields>div:first-child {
    display: none;
  }
  #scroll-spy-item-3 .fields-another-address .fields>div:nth-child(4) {
    max-width: 60%;
  }
  #scroll-spy-item-3 .fields-another-address .fields>div:nth-child(3) {
    order: -1;
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

  .lav-trial { 
    display: flex;
    align-items: center;
    margin-top: 30px;
    max-width: 530px;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }

  .lav-trial__image { 
    margin-right: 30px;
    flex-shrink: 0;
  }

  @media(max-width: 768px) {
    .lav-trial__image {
      margin-right: 15px;
    }
  }


  .lav-trial__title { 
    font-size: 24px;
    line-height: 30px;
    color: #517193;
  }


  @media(max-width: 768px) {
    .lav-trial__title { 
      font-size: 18px;
      line-height: 1;
    }
  }

  .lav-trial__title span { 
    font-weight: 700;
  }

  .lav-trial__descr { 
    font-size: 18px;
    line-height: 24px;
    color: #517193;
    margin-top: 12px;
  }

  @media(max-width: 768px) {
    .lav-trial__descr { 
      font-size: 15px;
      line-height: 1.5;
    }
  }

  .lav-trial { 
  }


  .lav-path__item {
    display: flex;
    align-items: center;
  }

  @media(max-width: 768px) {
    .lav-path__item {
      position: relative;
      z-index: 1;
    }
  }

  .lav-path__active {
    font-weight: 700;
    color: #517193;
  }

  .lav-path__complete {
    font-weight: 700;
    line-height: 24px;
    color: #9FAFC3;
  }

  .lav-path__complete .lav-step__num {
    position: relative;
    background: #9FAFC3;
  }

  .lav-path__complete .lav-step__num:before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -59%) rotate(-45deg);
    border-radius: 1px;
    border-bottom: 2px solid #fff;
    border-left: 2px solid #fff;
    width: 9px;
    height: 5px;
  }

  .details-block {
    display: flex;
  }

  .lav-step__num {
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    width: 32px;
    border-radius: 50%;
    background-color: #ffffff;
    font-weight: 400;
    line-height: 14px;
    text-align: center;
    letter-spacing: 0.01em;
    color: rgba(81, 113, 147, 0.5);
    transition: 0.4s ease-in-out;
    background: linear-gradient(95.3deg, #F8F9FA 27.98%, #FDFDFD 95.76%);
    border: 1px solid #DDE3E9;
    color: #9FAFC3;
    flex-shrink: 0;
  }

  .lav-path__divider {
    margin: 0 12px;
    flex-shrink: 0;
  }

  @media(max-width: 768px) {
    .lav-path__divider {
      transform: rotate(90deg);
      margin: 7px 3px;
    }
  }

  .lav-path__active .lav-step__num {
    background: #1b7fe7;
    color: #ffffff;
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
    line-height: 1.3;
    color: #517193;
    flex: 1;
  }
  .lav-france .lav-labels__item {
    font-size: 14px;
  }
  .lav-labels__item + .lav-labels__item {
    border-left: 1px solid #fff;
  }
  .lav-labels__item img {
    margin-right: 10px;
  }

  .lav-jumb__wrap {
    width: 600px;
    flex-shrink: 0;
    margin-left: 40px;
  }

  @media (max-width: 1280px) {
    .lav-jumb__wrap {
      width: 560px;
      margin-left: 20px;
    }
  }

  @media (max-width: 1200px) {
    .lav-jumb__wrap {
      width: 50%;
      margin-left: 20px;
    }
  }


  @media (max-width: 1100px) {
    .lav-jumb__wrap {
      width: 100%;
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 15px;

    }
  }

  .lav-plate {
    padding: 24px 48px;
    background: linear-gradient(106.63deg, #F8F9FA 38.5%, #FDFDFD 100.78%);
    border-radius: 8px;
    margin-top: 12px;
    box-shadow: 0px 44px 66px rgba(59, 83, 108, 0.22);
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
    margin-top: 10px;
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
  .lav-product__image img {
    margin-top: -10px;
    margin-left: -10px;
  }
  .lav-protect {
    margin-top: 24px;
  }
  .lav-protect__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .lav-france .lav-protect__head {
    display: block;
  }
  .lav-france .lav-protect__tip {
    margin-top: 5px;
  }
  @media (min-width: 768px) {
    .lav-france .lav-protect__tip .lav-tip__body:before {
      left: 15%;
    }
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
  .lav-product__price br {
    display: none;
  }
  .lav-product__price sup, .lav-summary__price sup {
    top: 3px;
    left: 2px;
    font-size: 12px;
  }
  .lav-product__price sup {
    top: -0.8em;
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
  .lav-body-confirm .lav-protect__body .warranty--option {
    pointer-events: none;
  }
  .lav-protect__body .warranty--option + .warranty--option {
    margin-top: 18px;
  }
  .lav-protect__body .warranty--option + .warranty--option path:first-child {
    fill: #fec475;
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
  .lav-accept__check {
    position: relative;
    display: inline-block;
    margin-right: 12px;
    border: 2px solid #517193;
    border-radius: 4px;
    width: 24px;
    height: 24px;
    transition: 0.3s;
  }
  .lav-accept.active .lav-accept__check {
    border: none;
    background: linear-gradient(135deg, #74E6FF 0%, #5D9EFF 100%);
  }
  .lav-accept.active .lav-accept__check:before {
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
    // max-width: 320px;
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
    // margin-bottom: -15px;
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
  .order-pages.order-summary .order-info > .title {
    margin-bottom: 24px;
  }
  @media (max-width: 768px) {
    .order-pages.order-summary .payment-methods .forms-wrapper .form-block .payment-icon .image {
      box-shadow: 0 0 66px rgb(0 0 0 / 0.2%);
    }
    .order-pages.order-details .details-block .payments-block {
      // justify-content: center;
    }
    .lav-coupon-text {
      margin-bottom: 2px;
    }
    .lav-france .lav-accept {
      font-size: 12px;
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
      flex-flow: column;
      margin-top: 10px;
      margin-bottom: 10px;
      align-items: flex-start;
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
      text-align: center;
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
    .lav-france .order-pages.order-summary .order-info > .title .btn-edit-order {
      position: relative;
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
      background: transparent;
      margin: 0;
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
  .lav-trial__btn-mob {
    display: none;
  }
  .block-how-to-use, .section-how-it-works .btn-download-doc, .section-safety, .section-main  {
    display: none;
  }
  .lav-alma {
    justify-content: flex-start;
    margin-top: 16px;
  }
  .lum-page {
    background-color: #fff;
  }
  .lav-jumb {
    background: #F3F5F9;
    padding: 222px 0 0;
    // 244px // 124px
  }
  .lav-jumb__mob {
    display: none;
  }
  .lav-jumb_clear {
    padding-top: 124px;
  }
  .lav-jumb__inner {
    display: flex;
  }
  .lav-jumb__slider-wrap {
    max-width: 560px;
    width: 100%;
    flex-shrink: 0;
  }
  .lav-fabric {
    position: absolute;
    z-index: 2;
    background: #517193;
    border-radius: 8px 0px;
    font-weight: 700;
    font-size: 14px;
    line-height: 1.1;
    padding: 10px 12px;
    color: #fff;
    align-items: center;
    display: flex;
  }
  .lav-fabric img {
    margin-right: 8px;
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
  .bb-2 {
    border-bottom: 1px solid rgba(81, 113, 147, 0.12);
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
    z-index: 4;
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
  @media(min-width: 1200px) {
    .tooltip:hover .tooltip-dropdown, .lav-tooltip-wrap:hover .tooltip-dropdown {
      opacity: 1;
      pointer-events: auto;
    }
  }
  @media(max-width: 1199px) {
    .tooltip.active .tooltip-dropdown, .lav-tooltip-wrap.active .tooltip-dropdown {
      opacity: 1;
      pointer-events: auto;
    }
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
    // filter: drop-shadow(0px 11px 22px rgba(81, 113, 147, 0.44));
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
    box-shadow: 0px 11px 22px rgb(81 113 147 / 44%);
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
    position: relative;
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

  .lav-shorts {
    background: #F4F6FA;
    box-shadow: 0px 22px 33px rgba(59, 83, 108, 0.22);
    border-radius: 16px;
    padding: 48px 74px 64px;
  }

  @media(max-width: 1200px) {
    .lav-shorts {
      padding: 40px 35px 28px;
    }
  }

  .lav-shorts .splide__pagination {
    margin-top: 26px;
  }

  .lav-shorts__preview {
    position: relative;
    line-height: 0;
    overflow: hidden;
    border-radius: 8px;
    background: #ccc;
    // min-height: 425px;
    border: 3px solid #fff;
  }

  .lav-shorts__preview:before {
    content: '';
    position: absolute;
    width: 90px;
    height: 90px;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    background: url(${settings.dir}/img/play.svg) center no-repeat;
    background-size: 90px;
    transition: 0.35s;
  }

  @media(max-width: 768px) {
    .lav-shorts__preview:before {
      width: 72px;
      height: 72px;
      background-size: 72px;
      transition: none;
    }
    .lav-shorts__preview:hover:before {
      background-size: 72px;
    }
  }

  @media(min-width: 769px) {
    .lav-shorts__preview:hover:before {
      background: url(${settings.dir}/img/play-hover.svg) center no-repeat;
      background-size: 90px;
    }
  }

  .lav-shorts__preview img {
    height: 418px;
    object-fit: cover;
    min-width: 100%;
  }
  @media(max-width: 768px) {
    .lav-shorts__preview img {
      height: 340px;
    }
  }

  .lav-shorts__info {
    margin-top: 16px;
  }

  .lav-shorts__stars {
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #ffaa07;
  }

  .lav-shorts__stars span {
    margin-bottom: -1px;
  }
  
  .lav-shorts__stars img {
    margin-right: 6px;
  }

  .lav-shorts__wrap {
    padding: 60px 0 30px;
  }

  .lav-shorts__title {
    font-weight: 700;
    font-size: 32px;
    line-height: 36px;
    color: #517193;
  }

  .lav-shorts__caption {
    font-weight: 500;
    font-size: 22px;
    line-height: 28px;
    color: #517193;
    margin-top: 16px;
  }

  .lav-shorts__splide {
    margin-top: 30px;
  }

  .lav-shorts__quote {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    margin-top: 9px;
    color: #517193;
    margin-bottom: 10px;
  }

  .lav-shorts__inst {
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
  }

  .lav-shorts__inst img {
    margin-right: 8px;
  }

  @media(max-width: 768px) {
    .lav-shorts {
      padding: 30px 20px;
      // padding-right: 0;
    }
    .lav-shorts__splide {
      margin-right: -20px;
    }
    .lav-shorts__wrap {
      padding-top: 30px;
      padding-bottom: 0;
    }
    .lav-shorts__title {
      font-size: 24px;
      line-height: 28px;
      letter-spacing: 0.01em;
    }
    .lav-shorts__caption {
      font-size: 18px;
      line-height: 24px;
      font-weight: 400;
    }
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
  @media(min-width: 769px) {
    .lav-recharge__preview:hover img + img {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1.1);
    }
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
  @media(min-width: 1199px) {
    .lav-transform__more-btn:hover {
      border-color: #517193;
      opacity: 0.7;
    }
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
    border: 1px solid rgba(81, 113, 147, 0.12);
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
  .lav-can__item:last-child:before {
    display: none;
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
    cursor: default;
  }
  .lav-trial__btn.btn-primary {
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
    cursor: default;
    margin-top: 20px;
  }

  .lav-trial__actions {
    text-align: center;
    width: 260px;
  }
  .lav-france .lav-trial__actions .btn-text {
    font-size: 17px;
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
  .lav-france .lav-users__title {
    bottom: 50px;
  }
  .lav-users__title span {
    font-weight: 800;
  }
  .lav-users__image-mob, .lav-users__title-mob {
    display: none;
  }
  @media (min-width: 992px) {
    .lav-reviews .slider-outer {
      overflow: hidden;
    }
  }

  .lav-reviews .slider .expand {
    display: none;
  }
  
  .lav-reviews .slider-wrapper {
    // width: 375px;
    max-width: 100%;
    margin: 0 auto;
    z-index: 3;
    padding-top: 10px;
  }
  
  @media (min-width: 992px) {
    .lav-reviews .slider-wrapper {
      max-width: none;
      padding: 60px 28px 130px;
    }
  }
  
  .lav-reviews .slider .os-scrollbar {
    z-index: 2;
  }
  
  .lav-reviews .slider .os-scrollbar .os-scrollbar-handle {
    background: rgba(81, 113, 147, 0.2);
  }
  
  .lav-reviews .slider .slide:not(:last-child) {
    margin-bottom: 20px;
  }
  
  @media (min-width: 992px) {
    .lav-reviews .slider .slide {
      padding: 0 20px;
      margin-bottom: 0;
    }
  }
  
  .lav-reviews .slider .slick-slide {
    outline: none;
    transition: all 0.3s ease-out;
    transform: scale(0.95);
    opacity: 0;
    will-change: transform;
    -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
    pointer-events: none;
  }
  
  .lav-reviews .slider .slick-list {
    overflow: visible;
  }
  
  .lav-reviews .slider .slick-active {
    position: relative;
    opacity: 1;
    z-index: 1;
    pointer-events: auto;
  }
  
  .lav-reviews .slider .slick-current {
    z-index: 2;
    transform: scale(1.08);
  }
  
  .lav-reviews .slider .slick-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 56px;
    height: 56px;
    background-color: rgba(147, 169, 192, 0.5);
    background-image: url("/images/icons/arrow-right.svg");
    background-repeat: no-repeat;
    background-position: 44% 49%;
    transition: background 0.25s ease-out;
    cursor: pointer;
    font-size: 0;
    border: none;
    border-radius: 50%;
    color: #ffffff;
    z-index: 1;
  }
  
  .lav-reviews .slider .slick-arrow.slick-prev {
    transform: translateY(-50%) rotate(180deg);
    left: -50px;
  }
  
  .lav-reviews .slider .slick-arrow.slick-next {
    right: -50px;
  }
  
  .lav-reviews .slider .slick-arrow:hover {
    background-color: rgba(147, 169, 192, 0.8);
  }
  
  .lav-reviews .slider .slick-dots {
    width: 200px;
    height: 8px;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin: 82px 0 0;
    padding: 0;
    list-style-type: none;
    font-size: 0;
  }
  
  .lav-reviews .slider .slick-dots li {
    position: absolute;
    transition-property: left, opacity;
    transition-duration: 375ms;
    transition-timing-function: ease-out;
  }
  
  .lav-reviews .slider .slick-dots li.slick-prev-max {
    opacity: 0;
    left: -12px;
  }
  
  .lav-reviews .slider .slick-dots li.slick-next-max {
    opacity: 0;
    left: 202px;
  }
  
  .lav-reviews .slider .slick-dots li.slick-prev-prev {
    left: 12px;
  }
  
  .lav-reviews .slider .slick-dots li.slick-next-next {
    left: 180px;
  }
  
  .lav-reviews .slider .slick-dots li.slick-prev {
    left: 55px;
    display: block;
    opacity: 1;
  }
  
  .lav-reviews .slider .slick-dots li.slick-prev button {
    background-color: #ffffff;
  }
  
  .lav-reviews .slider .slick-dots li.slick-next {
    left: 137px;
    display: block;
    opacity: 1;
  }
  
  .lav-reviews .slider .slick-dots li.slick-next button {
    background-color: #ffffff;
  }
  
  .lav-reviews .slider .slick-dots li.slick-active {
    left: calc(50% - 4px);
    margin: 0 auto;
  }
  
  .lav-reviews .slider .slick-dots li.slick-active button {
    background-color: #ffffff;
  }
  
  .lav-reviews .slider .slick-dots button {
    cursor: pointer;
    padding: 0;
    border: none;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.2);
    transition: background-color 0.25s ease-out;
  }
  
  .lav-reviews .slider .card {
    background: linear-gradient(106.63deg, #F8F9FA 38.5%, #FDFDFD 100.78%);
    border-radius: 16px;
    color: #517193;
    overflow: hidden;
  }
  
  @media (min-width: 992px) {
    .lav-reviews .slider .card {
      // box-shadow: 0 33px 44px rgba(27, 57, 95, 0.44);
      // transform: translateZ(0);
      // -webkit-font-smoothing: subpixel-antialiased;
    }
  }
  
  .lav-reviews .slider .card-header {
    padding: 24px 24px 10px;
  }
  
  .lav-reviews .slider .avatar {
    width: 105px;
    height: 105px;
    border-radius: 50%;
    background-color: #B7B7B7;
    margin: 0 auto 20px;
    transition: all 0.3s ease-out;
  }
  
  .lav-reviews .slider .avatar img {
    width: 100%;
    height: 100%;
  }
  
  .lav-reviews .slider .name {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 5px;
  }
  
  @media (max-width: 991px) {
    .lav-reviews .slider .name {
      font-size: 22px;
    }
  }
  
  .lav-reviews .slider .link {
    display: inline-flex;
    align-items: center;
    font-size: 16px;
    line-height: 24px;
    color: rgba(64, 97, 132, 0.5);
    font-weight: 500;
  }
  
  @media (min-width: 992px) {
    .lav-reviews .slider .link {
      font-size: 12px;
      line-height: 18px;
    }
  }
  
  .lav-reviews .slider .link img {
    margin-left: 6px;
  }
  
  @media (min-width: 992px) {
    .lav-reviews .slider .link img {
      width: 35px;
      height: 25px;
    }
  }
  
  .lav-reviews .slider .card-body-wrapper {
    position: relative;
    max-height: 250px;
    min-height: 250px;
    overflow-y: auto;
  }
  
  @media (min-width: 992px) {
    .lav-reviews .slider .card-body-wrapper {
      // max-height: 281px;
      // min-height: 281px;
    }
  }
  
  .lav-reviews .slider .card-body-wrapper::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70px;
    opacity: 0;
    pointer-events: none;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, white 70%);
    z-index: 1;
  }
  
  .lav-reviews .slider .card-body-wrapper.is-visible .review {
    height: auto;
    -webkit-line-clamp: initial;
  }
  
  .lav-reviews .slider .card-body-wrapper.is-visible .review::after {
    display: none;
  }
  
  .lav-reviews .slider .card-body {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 24px 36px;
  }
  
  .lav-reviews .slider .review {
    margin-bottom: auto;
    position: relative;
    font-weight: 500;
    height: 144px;
    // -webkit-line-clamp: 6;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    overflow: auto;
  }
  
  @media (min-width: 992px) {
    .lav-reviews .slider .review {
      height: 168px;
      margin: 0 -24px;
      padding: 0 24px;
      width: auto;
      // -webkit-line-clamp: 7;
    }
  }
  
  .lav-reviews .slider .expand {
    padding: 0;
    margin: 0;
    border: none;
    background: none;
    color: #517193;
    cursor: pointer;
  }
  
  .lav-reviews .slider .date {
    margin-top: 18px;
    color: rgba(64, 97, 132, 0.5);
    font-size: 15px;
    line-height: 24px;
    font-style: normal;
  }
  
  @media (min-width: 992px) {
    .lav-reviews .slider .date {
      margin-top: 24px;
      font-size: 12px;
      line-height: 18px;
    }
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
  .lav-sticky-mob {
    display: none!important;
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
  @media (min-width: 769px) {
    .lav-modal__video .lav-modal__inner {
      max-width: 840px;
      width: 100%;
      max-height: 480px;
      height: 100%;
      background: #000;
    }
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
    min-height: 480px;
    background: black;
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
  .lav-show-reviews {
    display: none;
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
    .lav-reviews__preview-list {
      grid-template-columns: 1fr;
      gap: 12px;
    }
    .lav-reviews__preview-list {
      margin-top: 48px;
    }
    .lav-users__title {
      bottom: 20px;
    }
    .safety-block img {
      width: 64px;
      height: 64px;
      margin-right: 12px;
    }
    .lum-page .section-how-it-works .main-content .column {
      max-width: 100%;
    }
    .technical__wrap {
      padding: 48px 0;
    }
    .lav-study {
      flex-wrap: wrap;
    }
    .lav-study__icon {
      flex-basis: 40px;
      margin-top: -7px;
    }
    .lav-study__info {
      margin-right: 0;
      flex-basis: 50%;
      flex-grow: 1;
    }
    .lav-study__btn {
      width: 100%;
      justify-content: center;
      margin-top: 24px;
    }
    #discover-block {
      margin-top: 12px;
      padding: 24px;
    }
    .block-on-the-go .title {
      margin-bottom: 24px;
    }
    #discover-block img {
      max-width: 100%;
      margin-top: 24px;
    }
    .lav-transforms {
      margin-top: 48px;
      padding-bottom: 48px;
    }
    .compare-section {
      padding: 40px 0;
    }
    .lav-study__wrap {
      margin-top: 10px;
      margin-bottom: 48px;
    }
    .lav-transforms .splide__pagination {
      margin-top: 24px;
    }
    .lav-transform {
      flex-flow: column-reverse;
      text-align: center;
    }
    .lav-transform__title-mob {
      display: block;
    }
    .lav-transform__title:not( .lav-transform__title-mob) {
      display: none;
    }
    .lav-transform__descr {
      margin-top: 20px;
    }
    .lav-transform__image {
      margin-top: -100px;
      max-width: 380px;
    }
    .lav-transform__image img {
      max-width: 100%;
    }
    .lav-recharge__inner {
      display: block;
      background-size: auto 340px;
      background-position: left top;
    }
    .lav-recharge__info {
      max-width: 100%;
      padding: 24px;
      padding-top: 40px;
      border-radius: 0 0 12px 12px;
      text-align: center;
      background: linear-gradient(0deg, rgba(255,255,255,1) 66%, rgba(255,255,255,0.0) 100%);

    }
    .lav-recharge__preview {
      height: 230px;
    }
    .lav-title {
      margin-bottom: 16px;
      font-size: 32px;
      line-height: 36px;
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
      background: linear-gradient(106.63deg, #F8F9FA 38.5%, #FDFDFD 100.78%); 
      border-radius: 8px;
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
      margin-top: 24px;
    }
    .lav-count__pay {
      grid-template-columns: 1fr;
    }
    .lav-test__wrap {
      padding: 48px 0 24px;
    }
    .lav-jumb__effects-title {
      background: linear-gradient(135deg, #74E6FF 0%, #5D9EFF 100%);
      border-radius: 40px;
      margin-top: 20px;
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
    .lav-jumb__slider-wrap {
      max-width: 100%;
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
    .lav-can__inner {
      padding: 180px 24px 24px;
    }
    .lav-perfect__list {
      margin-top: 32px;
      display: block;
    }
    .lav-perfect__item {
      max-width: 100%;
    }
    .lav-perfect__item + .lav-perfect__item {
      margin-top: 48px;
    }
    .lav-trial {
      text-align: center;
    }
    .lav-trial__actions {
      width: 100%;
    }
    .lav-trial__info {
      max-width: 100%;
      margin: 0;
    }
    .lav-trial__btn {
      width: 100%;
    }
    .lav-trial__image {
      width: 100%;
    }
    .lum-page .section-how-it-works .main-content .column .zoom-image-wrapper {
      display: none!important;
    }
    .lum-page .section-features {
      padding-bottom: 80px;
    }
    .lum-page .section-how-it-works .main-content .column.first-column {
      padding-right: 0;
    }
    .lum-page .section-studies .studies-component .heading-wrapper .image {
      max-width: 100%; 
    }
    .lav-reviews .slider .slide:nth-child(1n+4){
      display: none;
    }
    .lav-reviews_all .slider .slide:nth-child(1n+4){
      display: block;
    }
  }
  @media (max-width: 992px) {
    .technical-block h2 {
      margin-bottom: 25px;
    }
    .lav-review-modal iframe {
      width: 100%;
      min-height: 75vh;
      height: auto;
    }
    .safety-block h2 {
      margin-bottom: 0;
      padding-bottom: 0;
    }
    .lav-feat {
      display: none;
    }
    .lav-reviews .slider .card-body-wrapper {
      max-height: none;
      min-height: auto;
    }
  }
  @media (max-width: 450px) {
    .lav-trial__btn-mob {
      display: block;
    }
  }
  @media (max-width: 768px) {
    .lav-france .lav-jumb__effects-title {
      padding-left: 15px;
      padding-right: 15px;
      line-height: 1.15;
    }
    .lav-france .lav-test__third .days-test_head {
      align-items: center!important;
    }
    .lav-reviews__play {
      width: 100%;
      height: 100%;
    }
    .lav-reviews__play-btn {
      pointer-events: none;
    }
    .footer {
      padding-bottom: 120px;
    }
    .lav-alma {
      justify-content: center;
      text-align: center;
    }
    .lav-jumb__effects-list {
      box-shadow: 0px 11px 22px rgba(59, 83, 108, 0.22);
    }
    .lav-cookie button.needsclick {

    }
    .compare:before {
      content: 'vs';
      font-weight: 700;
      font-size: 32px;
      line-height: 36px;
      color: #517193;
      position: absolute;
      left: 0;
      top: 37px;
      right: 0;
      margin: auto;
      z-index: 1;
    }
    .lav-jumb__mob {
      display: block;
    }
    .lav-jumb__desc {
      display: none;
    }
    .header, .header.header-scrolled-up {
      background-color: rgba(64, 97, 132, 0.92);
    }
    .lav-trial__row {
      padding: 24px 24px 28px;
    }
    .lav-france .lav-jumb__title {
      font-size: 26px;
    }
    .lav-sticky-mob {
      // display: block;
      // position: fixed;
      // z-index: 999;
      // bottom: 0;
      // left: 0;
      // right: 0;
      // background: rgba(255,255,255,.8);
      // padding: 16px 24px;
    }
    .lav-sticky__btn {
      width: 100%;
    }
    .lav-reviews .slider .review {
      overflow: hidden;
    }
    .lav-reviews .slider .review.review_expand {
      -webkit-line-clamp: unset;
      overflow: auto;
      padding-bottom: 20px;
    }
    .lav-reviews .slider .card-body-wrapper.active::after {
      opacity: 1;
      bottom: 70px;
      background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #f9fbfb 70%);
      z-index: 1;

    }
    .lav-reviews .slider .card-body {
      padding-bottom: 24px;
    }
    .lav-show-reviews {
      display: block;
      margin: auto;
      margin-top: 24px;
      border: 1px solid rgba(255,255,255,.2);
      border-radius: 123px;
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;
      text-align: center;
      letter-spacing: 0.01em;
      color: #FFFFFF;
      padding: 16px 12px;
      width: 230px;
    }

    .lav-reviews .slider .review {
      height: 168px;
      margin: 0 -24px;
      padding: 0 24px;
      -webkit-line-clamp: 7;
    }

    .lav-reviews .slider .expand {
      display: block;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      margin-top: 5px;
    }

    .customer-reviews-page .slider .date {
      margin-top: 16px;
    }
  
    .lav-reviews .slider .avatar {
      width: 96px;
      height: 96px;
      margin-bottom: 10px;
    }
    .lav-reviews .slider .name {
      font-size: 18px;
      margin: 0;
    }
    .lav-reviews .slider .link {
      font-size: 14px;
    }
    .lav-jumb__effects-title, .lav-count__head, .lav-trial__inside {
      position: relative;
    }
    .lav-trial__buttons {
      position: relative;
    }
    .lav-trial__btn .tooltip-dropdown {
      left: -24px;
      right: -24px;
      width: auto;
      top: 70px;
    }
    .lav-test__second .tooltip-dropdown {
      top: 10px;
    }
    .lav-trial__inside .tooltip-dropdown {
      left: -24px;
      right: -24px;
      width: auto;
    }
    .lav-trial__inside .tooltip-item:before {
      left: 0;
      right: 0;
      margin: auto;
    }
    .lav-trial__buttons .lav-trial__btn:first-child .tooltip-item:before {
      left: 25%;
    }
    .tooltip-dropdown {
      top: 40%;
    }
    .lav-jumb__thumb {
      flex: 1;
    }
    .lav-reviews {
      padding: 24px 0 36px;
    }
    .lum-page .section-studies .studies-component .heading-wrapper .image {
      max-width: 88px;
    }
    .lav-reviews__preview {
      height: 190px;
    }
    .lav-reviews__play-btn {
      width: 80px;
      height: 80px;
    }
    .lav-reviews__total {
      margin-top: 48px;
      display: block;
    }
    .lav-reviews__total-col {
      display: flex;
      justify-content: space-around;
      padding: 0;
    }
    .lav-reviews__total-col + .lav-reviews__total-col {
      padding-top: 26px;
      margin-top: 28px;
    }
    .lav-reviews__total-col:last-child:after {
      background: radial-gradient(81.5% 54.14% at 0% 47.87%, #000000 0%, rgba(0, 0, 0, 0.869792) 17.19%, rgba(0, 0, 0, 0.70021) 38.02%, rgba(0, 0, 0, 0.441309) 65.1%, rgba(0, 0, 0, 0) 100%);
      transform: rotate(90deg);
      height: 100vw;
      top: -12px;
    }
    .lav-reviews__total-image {
      height: auto;
      width: 44%;
    }
    .lav-reviews__total-info {
      width: 44%;
    }
    .lav-reviews__total-image img {
      max-height: 100%;
      max-height: 90px;
    }
    .lav-reviews__total-caption span {
      display: block;
    }
    .lav-reviews__total-image {
      margin-bottom: 0;
    }
    .lum-page .section-how-it-works {
      padding-top: 0;
    }
    .studies-component .heading-wrapper {
      padding: 42px 12px;
    }
    .studies-component .study-item {
      padding: 42px 12px;
    }
    .studies-component .study-item .btn-wrapper, .studies-component .study-item .btn-wrapper .btn-download-doc {
      width: 100%;
    }
    .studies-component .study-item .title-description-wrapper .title {
      margin-bottom: 12px;
    }
    .studies-component .study-item .number {
      display: block;
      position: static;
      transform: none;
      font-size: 72px;
      line-height: 72px;
      margin-bottom: 8px;
      color: rgb(81 113 147 / 30%);
      font-weight: 200;
    }
    
    .lum-page .section-studies .studies-component .heading-wrapper .title {
      font-size: 24px;
      line-height: 28px;
      padding-bottom: 16px;
    }
    .lum-page .section-studies .studies-component .heading-wrapper .title br {
      display: none;
    }
    .lum-page .section-how-it-works .main-content .column > .image {
      margin-top: -10px;
      max-width: 65%;
    }
    .lum-page .section-how-it-works .main-content {
      padding-bottom: 48px;
    }
    .lum-page .section-how-it-works .main-content .column .fw-medium {
      font-weight: 400;
    }
    .lum-page .section-how-it-works .main-content .mobile-content {
      display: none!important;
    }
    .lum-page .section-how-it-works .main-content .column .group-text {
      text-align: left;
      padding-left: 28px;
      position: relative;
    }
    .lum-page .section-how-it-works .main-content .column .group-text:before {
      content: '';
      position: absolute;
      left: 0;
      top: 3px;
      width: 20px;
      height: 20px;
      background: url(${settings.dir}/img/check.svg) center no-repeat;
      background-size: contain;
    }
    .lum-page .section-how-it-works .main-content .column .subtitle {
      font-size: 18px;
      line-height: 24px;
      padding-bottom: 8px;
    }
    .lum-page .section-how-it-works .main-content .column .title {
      font-size: 32px;
      line-height: 36px;
      padding-bottom: 0;
    }
    .lum-page .section-how-it-works {
      color: #406184;
    }
    .section-features .heading-wrapper .title {
      font-size: 48px;
      line-height: 1;
      font-weight: 700;
    }
    .bb-2:last-child {
      border-bottom: none;
    }
    .lum-page .section-features .gradient-group .gradient-radial {
      height: 150px;
    }
    .technical br {
      display: none;
    }
    .lum-page .section-features {
      padding-top: 40px;
      padding-bottom: 40px;
      overflow: hidden;
    }
    .technical__wrap {
      padding: 48px 0;
    }
    .lum-page .section-features .image-stripes {
      top: -100px;
    }
    .lav-trial__buttons {
      margin-top: 6px;
      margin-bottom: 16px;
    }
    .lav-trial__buttons .lav-trial__btn span {
      text-align: left;
    }
    .lav-trial__descr {
      margin-top: 12px;
    }
    .lav-perfect__icon img {
      width: 80px;
    }
    .lav-trial {
      padding: 48px 0;
    }
    .lav-recharge__inner {
      background: url('${settings.dir}/img/women-mob.png') left top no-repeat;
      background-size: 100% auto;
    }
    .lav-can__inner {
      background: url('${settings.dir}/img/bg-man-mob.png') top center no-repeat;
      background-size: 100% auto;
    }
    .lav-can {
      margin-bottom: 24px;
    }
    .lav-perfect {
      padding-top: 24px;
    }
    .lav-can__icon {
      text-align: center;
    }
    .lav-can__title {
      text-align: center;
      margin-top: 0;
    }
    .lav-study {
      padding: 24px;
      align-items: flex-start;
    }
    .lav-transform__image {
      margin-top: -85px;
      max-width: 80%;
    }
    .lav-transform__more-btn {
      padding: 15px 8px;
      width: 100%;
      justify-content: center;
    }
    .lav-transform__more {
      margin-top: 48px;
    }
    .lav-recharge__preview img {
      width: 80px;
      height: 80px;
    }
    .lav-recharge {
      margin-top: 24px;
    }
    .lav-recharge__info {
      padding-top: 0;
    }
    // .lav-recharge__preview {
    //   height: 40vw;
    // }
    .lav-count__item {
      padding-left: 5px;
      padding-right: 5px;
    }
    .lav-jumb__thumbs {
      justify-content: space-between;
    }
    .lav-jumb__thumbs img {
      width: auto;
    }
    .lav-jumb {
      padding-top: 90px;
    }
    .lav-users__title, .lav-users__image {
      display: none;
    }
    .lav-users__title-mob {
      display: block;
      transform: translateY(-50%);
      font-weight: 500;
      font-size: 32px;
      line-height: 36px;
    }
    .lav-france .lav-users__title-mob {
      transform: translateY(-30%);
    }
    .lav-users__title-mob span {
      letter-spacing: 1px;
      font-size: 72px;
      line-height: 1; 
      font-weight: 700;        
      display: block;
    }
    .lav-users__image-mob {
      display: block;
      margin: -25px auto 0;
      max-width: 90%;
    }
    .lav-modal__inner {
      max-width: 93%;
      width: 100%;
      padding: 48px 24px 24px;
    }
    .lav-modal__inner.lav-review-modal {
      padding: 0;
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
    .lav-trial__btn .tooltip > img {
      height: 14px;
      margin-bottom: -2px;
    }
    lav-trial__btn .tooltip {
      display: inline-block;
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

const stylesMain = `
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

  .lav-shorts {
    background: #F4F6FA;
    box-shadow: 0px 22px 33px rgba(59, 83, 108, 0.22);
    border-radius: 16px;
    padding: 48px 74px 64px;
  }

  @media(max-width: 1200px) {
    .lav-shorts {
      padding: 40px 35px 28px;
    }
  }

  .lav-shorts .splide__pagination {
    margin-top: 26px;
    padding-left: 0;
  }

  .lav-shorts__preview {
    position: relative;
    line-height: 0;
    overflow: hidden;
    border-radius: 8px;
    background: #ccc;
    // min-height: 425px;
    border: 3px solid #fff;
  }

  .lav-shorts__preview:before {
    content: '';
    position: absolute;
    width: 90px;
    height: 90px;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    background: url(${settings.dir}/img/play.svg) center no-repeat;
    background-size: 90px;
    transition: 0.35s;
  }

  @media(max-width: 768px) {
    .lav-shorts__preview:before {
      width: 72px;
      height: 72px;
      background-size: 72px;
    }
    .lav-shorts__preview:hover:before {
      background-size: 72px;
    }
  }

  @media(min-width: 769px) {
    .lav-shorts__preview:hover:before {
      background: url(${settings.dir}/img/play-hover.svg) center no-repeat;
      background-size: 90px;
    }
  }

  .lav-shorts__preview img {
    height: 418px;
    object-fit: cover;
    min-width: 100%;
  }

  @media(max-width: 768px) {
    .lav-shorts__preview img {
      height: 340px;
    }
  }

  .lav-shorts__info {
    margin-top: 16px;
  }

  .lav-shorts__stars {
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #ffaa07;
  }

  .lav-shorts__stars span {
    margin-bottom: -1px;
  }

  .lav-shorts__stars img {
    margin-right: 6px;
  }

  .lav-shorts__wrap {
    padding: 45px 0;
  }

  .lav-shorts__title {
    font-weight: 700;
    font-size: 32px;
    line-height: 36px;
    color: #517193;
  }

  .lav-shorts__caption {
    font-weight: 500;
    font-size: 22px;
    line-height: 28px;
    color: #517193;
    margin-top: 16px;
  }

  .lav-shorts__splide {
    margin-top: 30px;
  }

  .lav-shorts__quote {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    margin-top: 9px;
    color: #517193;
    margin-bottom: 10px;
  }

  .lav-shorts__inst {
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
  }

  .lav-shorts__inst img {
    margin-right: 8px;
  }

  @media(max-width: 768px) {
    .lav-shorts {
      padding: 30px 20px;
      // padding-right: 0;
    }
    .lav-shorts__splide {
      margin-right: -20px;
    }
    .lav-shorts__wrap {
      padding-top: 30px;
      padding-bottom: 60px;
    }
    .lav-shorts__title {
      font-size: 24px;
      line-height: 28px;
      letter-spacing: 0.01em;
    }
    .lav-shorts__caption {
      font-size: 18px;
      line-height: 24px;
      font-weight: 400;
    }
  }

  .lav-section {
    padding: 45px 0;
  }
  .home-page {
    background-color: #fff;
  }

  .pin-spacer, [id^=trustbadge-container] {
    display: none!important;
  }
  .home-page > *:not(.lav-wrap) {
    display: none;
  }
  .lav-wrap {
    color: #517193;
  }
  .lav-plate {
    background: #F4F6FA;
    box-shadow: 0px 22px 33px rgba(59, 83, 108, 0.22);
    border-radius: 8px;
    padding: 40px 125px;
  }
  @media(max-width: 768px) {
    .lav-desk {
      display: none!important;
    }
  }
  @media(min-width: 769px) {
    .lav-mob {
      display: none!important;
    }
  }
  .lav-title {
    font-weight: 500;
    font-size: 48px;
    line-height: 48px;
  }
  .lav-descr {
    font-size: 18px;
    line-height: 24px;
  }
  @media(max-width: 768px) {
    .lav-title {
      font-size: 32px;
      line-height: 36px;
    }
    .container, .container-lg, .container-fluid, .container-sm, .container-md, .container-xl {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
  .lav-btn {
    max-width: 356px;
    width: 100%;
  }
  @media(max-width: 768px) {
    .btn-primary.btn-lg .btn-text {
      font-size: 21px;
    }
    .lav-france .btn-primary.btn-lg .btn-text {
      font-size: 19px;
      line-height: 1.3;
    }
  }

  .lav-jumb {
    padding: 200px 0 250px;
    display: flex;
    align-items: center;
    min-height: 100vh;
    background: #fff url('${settings.dir}/img/jumb-bg.jpeg') top right no-repeat;
    background-size: cover;
  }
  @media(min-height: 1200px) {
    .lav-jumb {
      min-height: auto;
      padding: 250px 0 400px;
    }
  }
  .lav-jumb__info {
    max-width: 644px;
  }
  .lav-jumb__title {
    font-weight: 500;
    font-size: 54px;
    line-height: 58px;
  }
  .lav-jumb__descr {
    margin: 24px 0 42px;
  }
  .lav-jumb__actions {
    display: flex;
    align-items: center;
  }
  .lav-jumb__learn {
    margin-left: 42px;
    letter-spacing: 1px;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    transition: 0.35s;
    cursor: pointer;
  }
  .lav-jumb__learn:hover {
    opacity: 0.8;
  }
  @media(max-width: 1199px) {
    .lav-jumb {
      background-position: top center;
    }
    .lav-jumb__info {
      max-width: 60%;
    }
  }
  @media(max-width: 992px) {
    .lav-jumb {
      min-height: auto;
      padding-top: 0;
      padding-bottom: 0;
      background-position: 100% -50px;
    }
    .lav-jumb__info {
      max-width: 100%;
    }
    .lav-jumb__actions {
      flex-flow: column;
    }
    .lav-jumb__learn {
      margin-left: 0;
      margin-top: 17px;
    }
    .lav-jumb__container {
      padding-top: 255px;
      background: linear-gradient(360deg, white 30%, transparent 60%);
    }
  }
  @media(max-width: 768px) {
    .lav-jumb__title {
      font-size: 36px;
      line-height: 1;
    }
    .lav-jumb__descr {
      margin: 16px 0;
    }
    .lav-jumb__learn {
      font-weight: 500;
      font-size: 18px;
      line-height: 24px;
      letter-spacing: 0.01em;
    }
    .lav-jumb {
      background: #fff url('${settings.dir}/img/jumb-wooman-mob.png') top center no-repeat;
      background-size: cover;
    }
    .header .logo-wrapper {
      padding-left: 0!important;
    }
  }

  .lav-boost {
    padding: 0;
    transform: translateY(-50%);
  }
  .lav-boost__inner {
    display: flex;
    align-items: center;
  }
  .lav-boost__image {
    flex-shrink: 0;
    margin-right: 75px;
    line-height: 0;
  }
  .lav-boost__title {
    font-weight: 700;
    font-size: 32px;
    line-height: 36px;
    margin-bottom: 24px;
  }
  .lav-boost__stars {}
  .lav-boost__caption {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    margin-top: 8px;
  }
  @media(max-width: 992px) {
    .lav-boost {
      padding: 30px 0 60px;
    }
    .lav-boost__inner {
      padding: 24px;
    }
    .lav-boost {
      transform: none;
    }
  }
  @media(max-width: 768px) {
    .lav-boost__container {
      padding-left: 20px;
      padding-right: 20px;
    }
    .lav-boost__inner {
      text-align: center;
      justify-content: center;
    }
    .lav-boost__image {
      display: none;
    }
    .lav-boost__title {
      font-size: 18px;
      line-height: 24px;
      margin-bottom: 16px;
    }
    .lav-boost__caption {
      font-size: 16px;
      line-height: 24px;
      margin-top: 2px;
    }
    .lav-boost {
      padding-bottom: 30px;
      padding-top: 30px;
      transform: none;
    }
  }

  .lav-problems {
    padding: 0 0 75px;
  }
  .lav-problems__title {
    text-align: center;
  }
  .lav-problems__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    margin-top: 90px;
  }
  .lav-problem {
    display: flex;
    flex-flow: column;
    background-color: #F4F6FA;
    background-position: top center;
    background-size: 100% auto;
    background-repeat: no-repeat;
    box-shadow: 0px 44px 66px rgba(59, 83, 108, 0.22);
    padding-top: 152px;
    border-radius: 8px;
  }
  .lav-problem:nth-child(2) {
    margin: -28px 0;
  }
  .lav-problem:nth-child(5) {
    margin-top: 28px;
    margin-bottom: -28px;
  }
  .lav-problem__info {
    width: 100%;
    margin-top: auto;
    padding: 32px;
  }
  .lav-problem__title {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.01em;
  }
  .lav-problem__list {
    margin-top: 20px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }
  .lav-problem__item {
    position: relative;
    padding-left: 20px;
  }
  .lav-problem__item:before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 7px;
    width: 4px;
    height: 4px;
    background-color: #517193;
    border-radius: 50%;
  }
  .lav-problem__item + .lav-problem__item {
    margin-top: 3px;
  }
  @media(max-width: 1199px) {
    .lav-problems__grid {
      gap: 30px;
    }
  }
  @media(max-width: 992px) {
    .lav-problems__grid {
      grid-template-columns: 1fr 1fr;
    }
    .lav-problem__item + .lav-problem__item {
      margin-top: 5px;
    }
    .lav-problem:nth-child(2) {
      margin: 0;
    }
    .lav-problem:nth-child(5) {
      margin: 0;
    }
    .lav-problems__grid {
      margin-top: 60px;
    }
    .lav-problems__title br {
      display: none;
    }
  }
  @media(max-width: 768px) {
    .lav-problems {
      padding: 30px 0;
    }
    .lav-problems__grid {
      grid-template-columns: 1fr;
    }
    .lav-problems__grid {
      margin-top: 30px;
    }
    .lav-problem__info {
      padding: 32px 24px;
    }
    .lav-problems__title {
      text-align: left;
    }
  }

  .lav-drinks {
    position: relative;
  }
  .lav-drinks:before {
    content: '';
    position: absolute;
    bottom: -4vw;;
    left: 0;
    right: 0;
    height: 737px;
    background: url('${settings.dir}/img/drinks-bg.png') left bottom no-repeat;
    background-size: cover;
    pointer-events: none;
  }
  .lav-drinks__inner {
    display: flex;
    align-items: center;
    padding: 40px 96px;
    background: #F4F6FA;
    box-shadow: 0px 44px 66px rgba(59, 83, 108, 0.22);
    border-radius: 8px;
    margin-bottom: 50px;
  }
  .lav-drinks__image {
    flex-shrink: 0;
    line-height: 0;
    margin-right: 50px;
    margin-left: 20px;
    max-width: 130px;
  }
  .lav-drinks__image img {
    max-width: 100%;
    max-height: 102px;
  }
  .lav-drinks__title {
    font-weight: 700;
    font-size: 32px;
    line-height: 36px;
    margin-bottom: 16px;
  }
  .lav-drinks__caption {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }
  .lav-drinks__container {
    position: relative;
  }
  .lav-drinks__btn-wrap {
    text-align: center;
  }
  @media(max-width: 992px) {
    .lav-drinks {
      padding-top: 30px;
      padding-bottom: 60px;
    }
    .lav-drinks:before {
      display: none;
    }
    .lav-drinks__inner {
      padding: 24px;
    }
    .lav-drinks__image {
      margin-left: 0;
    }
  }
  @media(max-width: 768px) {
    .lav-drinks {
      padding-bottom: 30px;
    }
    .lav-drinks__inner {
      display: block;
      margin-bottom: 30px;
    }
    .lav-drinks__title {
      font-size: 24px;
      line-height: 28px;
      letter-spacing: 0.01em;
      margin-bottom: 10px;
    }
    .lav-drinks__image {
      text-align: center;
      margin: auto;
    }
    .lav-drinks__image img {
      width: 150px;
    }
    .lav-drinks__info {
      margin-right: 0;
      margin-top: 24px;
    }
  }

  .lav-wears {
    padding-top: 0px;
    position: relative;
    z-index: 1;
  }
  .lav-wears__title {
    text-align: center;
    font-weight: 700;
  }
  .lav-wears__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    margin-top: 40px;
  }
  .lav-wear {
    border-radius: 8px;
    background-color: #F3F6FA;
    padding-top: 187px;
    background-position: top center;
    background-size: 100% auto;
    background-repeat: no-repeat;
    box-shadow: 0px 44px 66px rgba(59, 83, 108, 0.22);
  }
  .lav-wear__info {
    padding: 32px;
  }
  .lav-wear__icon {
    line-height: 0;
  }
  .lav-wear__title {
    margin-top: 24px;
    font-weight: 700;
    font-size: 28px;
    line-height: 32px;
  }
  .lav-wear__list {
    margin-top: 16px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    max-width: 270px;
  }
  .lav-wear__item {
    position: relative;
    padding-left: 32px;
  }
  .lav-wear__item:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background: url(${settings.dir}/img/check.svg) center no-repeat;
    background-size: contain;
  }
  .lav-wear__item + .lav-wear__item {
    margin-top: 12px;
  }
  @media(max-width: 1199px) {
    .lav-wears__grid {
      gap: 16px;
    }
  }
  @media(max-width: 992px) {
    .lav-wears__grid {
      grid-template-columns: 1fr;
      gap: 16px;
    }
  }
  @media(max-width: 768px) {
    .lav-wears {
      padding: 30px 0;
    }
    .lav-wears__title {
      text-align: left;
    }
    .lav-wears__grid {
      margin-top: 30px;
    }
    .lav-wear__icon {
      text-align: center;
    }
    .lav-wear__title {
      text-align: center;
    }
    .lav-wear__icon img {
      width: 120px;
    }
  }

  .lav-lucimed {
    padding-top: 115px;
    padding-bottom: 80px;
  }
  .lav-lucimed__inner {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .lav-lucimed__info {
    width: 50%;
  }
  .lav-lucimed__image {
    // width: 50%;
    line-height: 0;
    width: 100%;
    max-width: 435px;
  }
  .lav-lucimed__image img {
    max-width: 100%;
  }
  .lav-lucimed__descr {
    margin-top: 40px;
    margin-bottom: 28px;
    max-width: 480px;
  }
  .lav-lucimed__link {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #1B7FE7;
    transition: 0.3s;
    cursor: pointer;
  }
  .lav-lucimed__link:hover {
    opacity: 0.8;
  }
  .lav-lucimed__link svg {
    width: 14px;
    position: relative; 
    top: 3px;
  }
  @media(max-width: 992px) {
    .lav-lucimed__image {
      max-width: 40%;
      margin-left: 20px;
    }
  }
  @media(max-width: 768px) {
    .lav-lucimed {
      padding: 60px 0 30px;
    }
    .lav-lucimed__info {
      width: 100%;
    }
    .lav-lucimed__image {
      max-width: 380px;
      margin: 20px auto 30px;
    }
    .lav-lucimed__descr {
      margin-top: 0;
      margin-bottom: 30px;
    }
  }


  .lav-morning__plate {
    display: flex;
    background: #f9fafc  url('${settings.dir}/img/morning.png') left no-repeat;
    background-size: auto 101%;
    padding: 80px;
    // background: linear-gradient(106.63deg, #F8F9FA 38.5%, #FDFDFD 100.78%);
    box-shadow: 0px 44px 66px rgba(59, 83, 108, 0.22);
    border-radius: 16px;
  }
  .lav-morning__preview {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    line-height: 0;
    flex-grow: 1;
  }
  .lav-morning__preview:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    background: #517193;
    opacity: 0.5;
    filter: blur(25px);
    width: 156px;
    height: 156px;
  }
  .lav-morning__preview img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: 0.35s;
    width: 125px;
    height: 125px;
  }
  .lav-morning__preview:hover img {
    opacity: 0;
  }
  .lav-morning__preview img + img {
    opacity: 0;
  }
  .lav-morning__preview:hover img + img {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.1);
  }
  .lav-morning__info {
    max-width: 536px;
    margin-left: auto;
  }
  .lav-morning__descr {
    margin: 24px 0;
  }
  .lav-morning__list {}
  .lav-morning__item {
    display: flex;
    align-items: center;
  }
  .lav-morning__item + .lav-morning__item {
    margin-top: 32px;
  }
  .lav-morning__caption {
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.01em;
  }
  .lav-morning__caption span {
    font-weight: 700;
  }
  .lav-morning__image {
    line-height: 0;
    margin-right: 24px;
  }
  .lav-morning__image img {
    width: 80px;
    height: 80px;
  }
  @media(max-width: 1320px) {
    .lav-morning__plate {
      background-position-x: -40%;
    }
  }
  @media(max-width: 1100px) {
    .lav-morning__plate {
      background-position-x: -15vw;
    }
    .lav-morning__info {
      max-width: 400px;
    }
  }
  @media(max-width: 992px) {
    .lav-morning__plate {
      background: linear-gradient(106.63deg, #F8F9FA 38.5%, #FDFDFD 100.78%);
      display: block;
      padding: 0;
      box-shadow: none;
    }
    .lav-morning__container {
      padding: 0;
    }
    .lav-morning__info {
      max-width: 100%;
      padding: 22px 32px 30px;

    }
    .lav-morning__preview {
      background: #f9fafc  url('${settings.dir}/img/morning-mob.jpeg') center no-repeat;
      background-size: 100%;
      height: 81.5vw;
    }
  }
  @media(max-width: 768px) {
    .lav-morning {
      padding: 0;
    }
    .lav-morning__preview img {
      width: 72px;
      height: 72px;
    }
    .lav-morning__preview:before {
      width: 90px;
      height: 90px;
    }
    .lav-morning__info {
      padding-left: 20px;
      padding-right: 20px;
    }
    .lav-morning__descr {
      margin-top: 16px;
    }
    .lav-morning__container {
      width: auto;
    }
    .lav-morning__plate {
    }
    .lav-morning__image img {
      width: 69px;
      height: 69px;
    }
    .lav-morning__caption {
      font-size: 18px;
    }
    .lav-morning__image {
      margin-right: 16px;
    }
  }


  .lav-results__title {
    text-align: center;
  }
  .lav-results__row {
    position: relative;
    display: flex;
    margin-top: 74px;
    justify-content: center;
  }
  .lav-results__row:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 2px;
    bottom: 47px;
    background: url(${settings.dir}/img/results-line.png) center no-repeat;
  }
  .lav-results__item {
    position: relative;
  }
  .lav-results__item + .lav-results__item {
    margin-left: 123px;
  }
  .lav-results__item-title {
    font-weight: 700;
    font-size: 22px;
    line-height: 28px;
  }
  .lav-france .lav-results__item-title {
    max-width: 300px;
    min-height: 56px;
  }
  .lav-results__item-caption {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px; 
  }
  .lav-results__circle {
    margin-top: 20px;
    width: 24px;
    height: 24px;
    margin-bottom: 12px;
    background: linear-gradient(6.75deg, #3797F1 5.31%, #1B7FE7 94.73%);
    border-radius: 50%;
  }
  @media(max-width: 1100px) {
    .lav-france .lav-results__item {
      display: flex;
      flex-flow: column;
    }
    .lav-france .lav-results__item-title {
      margin-bottom: auto;
    }
  }
  @media(max-width: 992px) {
    .lav-results__row {
      display: block;
      max-width: 500px;
      margin-left: auto;
      margin-right: auto;
    }
    .lav-results__item {
      display: flex;
      flex-flow: row-reverse;
    }
    .lav-france .lav-results__item {
      flex-flow: row-reverse;
    }
    .lav-results__item-caption {
      width: 50%;
      text-align: right;
    }
    .lav-france .lav-results__row:before {
      background-size: cover;
      margin: 0 auto;
      height: 66%;
    }
    .lav-results__item-title {
      width: 50%;
    }
    .lav-results__item + .lav-results__item {
      margin-left: 0;
      margin-top: 24px;
    }
    .lav-results__circle {
      margin: 0 12px;
      flex-shrink: 0;
    }
    .lav-results__row:before {
      background: url(${settings.dir}/img/results-line-mob.svg) center no-repeat;
      top: 7px;
      left: 0;
      right: 0;
      margin: auto;
      width: 2px;
      height: 75%;
      pointer-events: none;
    }
    .lav-results__circle {
      background: #74E6FF;
    }
    .lav-results__item:last-child .lav-results__circle {
      background: #66B8FF;
    }
  }
  @media(max-width: 768px) {
    .lav-results {
      padding-top: 30px;
      padding-bottom: 60px;
    }
    .lav-france .lav-results__row:before {
      height: 63%;
    }
    .lav-results__row:before {
      top: 23px;
    }
    .lav-results__row {
      margin-top: 30px;
    }
    .lav-results__title {
      text-align: left;
    }
    .lav-results__item-caption {
      font-weight: 500;
      font-size: 18px;
      line-height: 24px;
      width: 45%;
    }
    .lav-results__row:before {
      right: 5%;
      height: 77%;
    }
    .lav-results__item-title {
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;
    }
    .lav-results__btn {
      max-width: 100%;
      margin-top: 30px;
    }
    .lav-results__circle {
      width: 12px;
      height: 12px;
      margin-top: 7px;
    }
  }

  .lav-benefits {
    text-align: center;
  }
  .lav-benefits__inner {
    padding: 80px 48px 0;
    box-shadow: 0px 44px 66px rgba(59, 83, 108, 0.22);
    border-radius: 16px;
    background: #517193;
    color: #fff;
  }
  .lav-benefits__list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 48px;
    margin-top: 48px;
  }
  .lav-benefit__icon {
    line-height: 0;
  }
  .lav-benefit__title {
    font-size: 24px;
    line-height: 28px;
    margin-top: 12px;
    margin-bottom: 8px;
    font-weight: 700;
  }
  .lav-benefit__btn {
    transform: translateY(50%);
    margin-top: 20px;
  }
  @media(max-width: 992px) {
    .lav-benefits__list {
      grid-template-columns: 1fr;
    }
  }
  @media(max-width: 768px) {
    .lav-benefits__inner {
      margin: 0 -20px;
      border-radius: 0;
      box-shadow: none;
      padding: 30px 20px;
    }
    .lav-benefits {
      padding: 0;
    }
    .lav-benefit__btn {
      transform: none;
      margin-top: 30px;
    }
    .lav-benefit__icon img {
      width: 92px;
      height: 92px;
    }
    .lav-benefits__list {
      margin-top: 24px;
    }
  }


  .lav-cases__title {
    text-align: center;
  }
  .lav-cases__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-top: 42px;
  }
  .lav-case {
    background: linear-gradient(95.3deg, #F8F9FA 27.98%, #FDFDFD 95.76%);
    box-shadow: 0px 22px 33px rgba(59, 83, 108, 0.22);
    border-radius: 8px;
    overflow: hidden;
  }
  .lav-case__image {
    line-height: 0;
  }
  .lav-case__image img {
    max-width: 100%;
  }
  .lav-case__caption {
    position: relative;
    font-weight: 700;
    padding: 25px 15px;
    text-align: center;
  }
  .lav-case__caption:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    top: 0;
    transform: translateY(-50%);
    width: 32px;
    height: 32px;
    background: #fff url(${settings.dir}/img/check.svg) center no-repeat;
    background-size: contain;
    border-radius: 50%;
  }
  @media(max-width: 768px) {
    .lav-cases {
      padding: 30px 0;
    }
    .lav-cases__title {
      text-align: left;
      margin-right: -20px;
    }
    .lav-cases__list {
      margin-top: 24px;
      display: block;
      margin-left: -20px;
      margin-right: -20px;
      padding-left: 20px;
    }
    .lav-cases .slick-slide {
      width: 246px;
      margin: 0 10px;
    }
    .lav-cases .slick-list {
      overflow: visible;
    }
    .lav-case__caption {
      padding-left: 10px;
      padding-right: 10px;
    }
    .lav-france .lav-case__caption {
      font-size: 16px;
    }
    .lav-cases .slick-dots {
      display: flex;
      list-style: none;
      justify-content: center;
      margin: 0;
      margin-top: 30px;
      padding: 0;
    }
    .lav-cases .slick-dots button {
      background: #FFFFFF;
      border: 1px solid #4E4F51;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      font-size: 0;
      padding: 0;
      transition: 0.2s;
    }
    .lav-cases .slick-dots li + li {
      margin-left: 26px;
      
    }
    .lav-cases .slick-dots .slick-active button {
      background-color: #4E4F51;
    }
  }

  .lav-recharge__inner {
    background: url('${settings.dir}/img/women.jpeg') left center no-repeat;
    background-size: auto 100%;
    display: flex;
    align-items: center;
    background-color: #f9fafc;
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
    width: 125px;
    height: 125px;
  }
  .lav-recharge__preview img + img {
    opacity: 0;
  }
  .lav-recharge__preview:hover img  {
    opacity: 0;
  }
  @media(min-width: 769px) {
    .lav-recharge__preview img {
      transition: 0.35s;
    }
    .lav-recharge__preview:hover img + img {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1.1);
    }
  }
  .lav-recharge__info {
    margin: 48px 80px;
    max-width: 536px;
    width: 100%;
  }
  .lav-recharge__caption {
    margin-top: 24px;
  }
  @media(max-width: 1199px) {
    .lav-recharge__inner {
      display: block;
      background-size: auto 340px;
      background-position: left top;
    }
    .lav-recharge__info {
      max-width: 100%;
      margin: 0;
      padding: 24px;
      padding-top: 40px;
      border-radius: 0 0 12px 12px;
      text-align: center;
      background: linear-gradient(0deg, rgba(255,255,255,1) 66%, rgba(255,255,255,0.0) 100%);
    }
    .lav-recharge__preview {
      height: 230px;
    }
  }
  @media(max-width: 768px) {
     .lav-recharge__inner {
      background: url('${settings.dir}/img/women-mob.png') left top no-repeat;
      background-size: 100% auto;
    }
    .lav-recharge__preview img {
      width: 80px;
      height: 80px;
    }
    .lav-recharge {
      padding: 30px 0;
    }
    .lav-recharge__info {
      padding-top: 0;
    }
    .lav-recharge__preview:before {
      opacity: 0.3;
      filter: blur(20px);
    }
  }

  .lav-works {
    padding-bottom: 20px;
  }
  .lav-works__row {
    display: flex;
    justify-content: space-between;
  }
  .lav-works__title {
    line-height: 56px;
  }
  .lav-works__info {
    max-width: 504px;
    width: 100%;
  }
  .lav-works__item {
    position: relative;
    margin-top: 24px;
    max-width: 416px;
    padding-left: 32px;
  }
  .lav-works__item:before {
    content: '';
    position: absolute;
    left: 0;
    top: 2px;
    width: 20px;
    height: 20px;
    background: #fff url(${settings.dir}/img/check.svg) center no-repeat;
    background-size: contain;
    border-radius: 50%;
  }
  .lav-works__item-title {
    position: relative;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 8px;
  }
  .lav-works__item-title span {
    color: #6AC6FF;
  }
  .lav-works__image {
    line-height: 0;
    max-width: 525px;
    width: 100%;
    margin-top: -25px;
  }
  .lav-works__image img {
    max-width: 100%;
  }
  @media(max-width: 768px) {
    .lav-works__title {
      line-height: 36px;
    }
    .lav-works__info {
      max-width: 100%;
    }
    .lav-works__item {
      max-width: 100%;
    }
    .lav-works__image {
      margin-top: -5px;
      text-align: center;
      padding-left: 28px;
    }
    .lav-works {
      padding-bottom: 15px;
    }
    .lav-works__image img {
      max-width: 70%;
      margin-left: -30px;
    }
    .lav-works__image + .lav-works__item {
      margin-top: 8px;
    }
  }

  .lav-study__wrap {
    padding-top: 20px;
  }
  .lav-study {
    display: flex;
    align-items: center;
    padding: 42px;
    background: linear-gradient(101.51deg, #F8F9FA 0%, #FDFDFD 100%, #FDFDFD 100%);
    box-shadow: 0px 22px 33px rgba(59, 83, 108, 0.25);
    border-radius: 8px;
  }
  .lav-study__icon {
    line-height: 0;
  }
  .lav-study__icon svg {
    width: 42px;
  }
  .lav-study__info {
    font-weight: 300;
    font-size: 18px;
    line-height: 24px;
    color: #517193;
    margin-left: 12px;
    margin-right: 40px;
    max-width: 560px;
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
    color: inherit;
    margin-left: auto;
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
  @media(max-width: 768px) {
    .lav-study__wrap {
      padding-top: 15px;
      padding-bottom: 21px;
    }
    .lav-study {
      padding: 24px 16px;
      flex-wrap: wrap;
    }
    .lav-study__btn {
      width: 100%;
      margin-top: 20px;
      justify-content: center;
    }
    .lav-study__info {
      margin-right: 0;
      flex-grow: 1;
      flex-basis: 50%;
    }
    .lav-study__icon svg {
      width: 40px;
    }
  }


  .lav-safety__row {
    background: linear-gradient(101.51deg, #F8F9FA 0%, #FDFDFD 100%, #FDFDFD 100%);
    box-shadow: 0px 44px 66px rgba(59, 83, 108, 0.25);
    padding: 60px 164px;
    display: flex;
    justify-content: space-between;
    border-radius: 8px;
  }
  .lav-safety__title {
    margin-bottom: 40px;
  }
  .lav-safety__icons {
    display: flex;
  }
  .lav-safety__icons img {
    max-width: 100%;
    width: 94px;
  }
  .lav-safety__icons img + img {
    margin-left: 38px;
  }
  .lav-safety__right {
    max-width: 480px;
    margin-left: 20px;
    width: 100%;
  }
  .lav-safety__descr:first-child {
    font-weight: 700;
  }
  .lav-safety__descr + .lav-safety__descr {
    margin-top: 20px;
  }
  @media(max-width: 1340px) {
    .lav-safety__row {
      padding: 40px;
    }
    .lav-safety__icons img {
      width: 80px;
    }
  }
  @media(max-width: 992px) {
    .lav-safety__row {
      display: block;
    }
    .lav-safety__right {
      max-width: 100%;
      margin-left: 0;
      margin-top: 16px;
    }
  }
  @media(max-width: 768px) {
    .lav-safety {
      padding-top: 21px;
    }
    .lav-safety__row {
      padding: 20px;
    }
    .lav-safety__title {
      margin-bottom: 16px;
    }
    .lav-safety__icons img {
      width: 64px;
    }
    .lav-safety__icons img + img {
      margin-left: 12px;
    }
    .lav-safety__descr {
      font-size: 16px;
      font-weight: 400;
    }
    .lav-safety__descr + .lav-safety__descr {
      display: none;
    }
    .lav-safety__right.active .lav-safety__descr + .lav-safety__descr {
      display: block;
    }
    .lav-safety__toggler {
      margin-top: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      color: #1B7FE7;
    }
    .lav-safety__toggler svg {
      width: 10px;
      height: 10px;
      transform: rotate(90deg);
      margin-left: 5px;
    }
  }


  .lav-compare {
    padding: 60px 0 100px;
    background: url(https://conversionratestore.github.io/projects/luminette/img/stripes_features.png) no-repeat center bottom / cover;
  }
  .lav-compare__title-head {
    color: #fff;
    text-align: center;
  }
  .lav-compare__inner {
    position: relative;
    background: #F8F9FA;
    border: 1px solid #F8F9FA;
    box-shadow: 0px 44px 66px rgba(59, 83, 108, 0.25);
    border-radius: 16px;
    max-width: 718px;
    overflow: hidden;
    margin-top: 42px;
  }
  .lav-compare__inner:before {
    content: 'vs';
    font-weight: 700;
    font-size: 32px;
    line-height: 36px;
    pointer-events: none;
    color: #517193;
    position: absolute;
    left: 0;
    top: 65px;
    right: 0;
    margin: auto;
    z-index: 1;
  }
  .lav-compare__image {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 94px;
    width: 157px;
    margin: 0 auto 8px;
  }
  .lav-compare__image img {
    max-height: 94px;
    max-width: 100%;
  }
  .lav-compare__box {
    // width: 67px;
  }
  .lav-compare__lum {
    margin-left: -20px;
    // width: 157px;
  }
  .lav-compare__inner .col-6:nth-child(3n+1) {
    background: linear-gradient(98.6deg, #EEF1F4 43.43%, #EEF1F4 58.16%, #F3F5F7 100%);
  }
  .lav-compare__inner .col-12 {
    border: 1px solid #EFF2F5;
  }
  .lav-compare__inner .fw-medium {
    font-size: 16px;
    font-weight: 500;
  }
  .lav-compare__inner .py-1 {
    max-width: 272px;
    margin: auto;
  }
  .lav-compare__title {
    font-size: 22px;
    line-height: 28px;
    font-weight: bold;
  }
  @media(max-width: 768px) {
    .lav-compare {
      padding-top: 30px;
      padding-bottom: 60px;
    }
    .lav-compare__inner {
      margin-top: 24px;
    }
    .lav-compare__image {
      height: 69px;
      width: 122px;
    }
    .lav-compare__image img {
      max-height: 100%;
      max-width: 100%;
    }
    .lav-compare__title {
      font-size: 18px;
      line-height: 24px;
    }
    .lav-compare__inner .col-12 {
      font-size: 16px;
      line-height: 24px;
    }
    .lav-compare__inner:before {
      top: 57px;
    }
  }


  .lav-faq {
    padding-top: 0;
    padding-bottom: 90px;
  }
  .lav-faq__plate {
    padding: 90px;
    display: flex;
    justify-content: center;
    background: #F4F6FA;
    box-shadow: 0px 22px 33px rgba(59, 83, 108, 0.22);
    border-radius: 16px;
  }
  .lav-faq__info {
    max-width: 600px;
    width: 100%;
  }
  .lav-faq__image {
    line-height: 0;
    margin-left: 60px;
    max-width: 335px;
    width: 100%;
  }
  .lav-faq__image img {
    max-width: 100%;
  }
  .lav-faq__list {
    margin-top: 48px;
  }
  .lav-faq__btn-wrap {
    margin-top: 50px;
    text-align: center;
  }

  .question-row + .question-row {
    margin-top: 16px;
  }
  .accordion-primary {
    cursor: auto;
  }
  .accordion-primary .accordion-title .question {
    font-weight: 700;
  }
  .accordion-toggle {
    cursor: pointer;
  }

  .accordion-primary .accordion-toggle[data-toggle] {
    background: #FFFFFF;
    border: 1px solid #D5DAE2;
    box-shadow: 0px 15px 44px rgba(59, 83, 108, 0.1);
    border-radius: 8px;
    padding: 14px 24px;
  }
  .accordion-primary .accordion-toggle[data-toggle] .icon {
    transform: rotate(90deg);
  }
  .accordion-primary .accordion-toggle[data-toggle][aria-expanded=true] .icon {
    transform: rotate(-90deg);
  }
   .accordion-content {
    font-size: 15px;
    font-weight: 300;
    line-height: 1.4;
    padding-left: 7px;
    padding-top: 15px!important;
  }
  .accordion-content ul {
    list-style: none;
    margin-bottom: 0;
    padding-left: 15px;
  }
  .accordion-content li + li {
    margin-top: 7px;
  }
  @media(max-width: 1199px) {
    .lav-faq__plate {
      padding: 50px 35px;
    }
  }
  @media(max-width: 992px) {
    .lav-faq__image {
      display: none;
    }
    .accordion-content {
      font-size: 14px;
    }
  }
  @media(max-width: 768px) {
    .lav-faq {
      padding-bottom: 60px;
    }
    .lav-faq__btn-wrap {
      margin-top: 30px;
    }
    .lav-faq__plate {
      background: none;
      filter: none;
      border-radius: 0;
      box-shadow: none;
      padding: 0;
    }
    .lav-faq__list {
      margin-top: 24px;
    }
    .accordion-primary .accordion-toggle.collapsed[data-toggle]:hover {
      background-color: inherit;
    }
    .accordion-primary .accordion-toggle.collapsed[data-toggle]:hover .accordion-title {
      color: inherit;
    }
  }


  .lav-reviews .slider .expand {
    display: none;
  }
  .lav-reviews .slider-wrapper {
    max-width: 100%;
    margin: 0 auto;
    z-index: 3;
    padding-top: 10px;
  }
  .lav-reviews .slider .os-scrollbar {
    z-index: 2;
  }
  .lav-reviews .slider .os-scrollbar .os-scrollbar-handle {
    background: rgba(81, 113, 147, 0.2);
  }
  
  .lav-reviews .slider .slide:not(:last-child) {
    margin-bottom: 20px;
  }
  
  .lav-reviews .slider .slick-slide {
    outline: none;
    transition: all 0.3s ease-out;
    transform: scale(0.95);
    opacity: 0;
    will-change: transform;
    -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
    pointer-events: none;
  }
  
  .lav-reviews .slider .slick-list {
    overflow: visible;
  }
  
  .lav-reviews .slider .slick-active {
    position: relative;
    opacity: 1;
    z-index: 1;
    pointer-events: auto;
  }
  
  .lav-reviews .slider .slick-current {
    z-index: 2;
    transform: scale(1.08);
  }
  
  .lav-reviews .slider .slick-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 56px;
    height: 56px;
    background-color: rgba(147, 169, 192, 0.5);
    border: 1px solid rgb(106, 133, 162);
    background-image: url("/images/icons/arrow-right.svg");
    background-repeat: no-repeat;
    background-position: 44% 49%;
    transition: background 0.25s ease-out;
    cursor: pointer;
    font-size: 0;
    border-radius: 50%;
    color: #ffffff;
    z-index: 1;
  }
  
  .lav-reviews .slider .slick-arrow.slick-prev {
    transform: translateY(-50%) rotate(180deg);
    left: -50px;
  }
  
  .lav-reviews .slider .slick-arrow.slick-next {
    right: -50px;
  }
  
  .lav-reviews .slider .slick-arrow:hover {
    background-color: rgba(147, 169, 192, 0.8);
  }
  
  .lav-reviews .slider .slick-dots {
    width: 200px;
    height: 8px;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin: 55px 0 0;
    padding: 0;
    list-style-type: none;
    font-size: 0;
  }
  
  .lav-reviews .slider .slick-dots li {
    position: absolute;
    transition-property: left, opacity;
    transition-duration: 375ms;
    transition-timing-function: ease-out;
  }
  
  .lav-reviews .slider .slick-dots li.slick-prev-max {
    opacity: 0;
    left: -12px;
  }
  
  .lav-reviews .slider .slick-dots li.slick-next-max {
    opacity: 0;
    left: 202px;
  }
  
  .lav-reviews .slider .slick-dots li.slick-prev-prev {
    left: 12px;
  }
  
  .lav-reviews .slider .slick-dots li.slick-next-next {
    left: 180px;
  }
  
  .lav-reviews .slider .slick-dots li.slick-prev {
    left: 55px;
    display: block;
    opacity: 1;
  }
  
  .lav-reviews .slider .slick-dots li.slick-prev button {
    background-color: #ffffff;
  }
  
  .lav-reviews .slider .slick-dots li.slick-next {
    left: 137px;
    display: block;
    opacity: 1;
  }
  
  .lav-reviews .slider .slick-dots li.slick-next button {
    background-color: #ffffff;
  }
  
  .lav-reviews .slider .slick-dots li.slick-active {
    left: calc(50% - 4px);
    margin: 0 auto;
  }
  
  .lav-reviews .slider .slick-dots li.slick-active button {
    background-color: #ffffff;
  }
  
  .lav-reviews .slider .slick-dots button {
    cursor: pointer;
    padding: 0;
    border: none;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.2);
    transition: background-color 0.25s ease-out;
  }
  
  .lav-reviews .slider .card {
    background: linear-gradient(106.63deg, #F8F9FA 38.5%, #FDFDFD 100.78%);
    border-radius: 16px;
    color: #517193;
    overflow: hidden;
  }

  .lav-reviews .slider .card-header {
    padding: 24px 24px 10px;
  }
  
  .lav-reviews .slider .avatar {
    width: 105px;
    height: 105px;
    border-radius: 50%;
    background-color: #B7B7B7;
    margin: 0 auto 20px;
    transition: all 0.3s ease-out;
  }
  
  .lav-reviews .slider .avatar img {
    width: 100%;
    height: 100%;
  }
  
  .lav-reviews .slider .name {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 5px;
  }
  
  .lav-reviews .slider .link {
    display: inline-flex;
    align-items: center;
    font-size: 16px;
    line-height: 24px;
    color: rgba(64, 97, 132, 0.5);
    font-weight: 500;
  }
  
  .lav-reviews .slider .link img {
    margin-left: 6px;
  }
  
  .lav-reviews .slider .card-body-wrapper {
    position: relative;
    max-height: 250px;
    min-height: 250px;
    overflow-y: auto;
  }
  
  .lav-reviews .slider .card-body-wrapper::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70px;
    opacity: 0;
    pointer-events: none;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, white 70%);
    z-index: 1;
  }
  
  .lav-reviews .slider .card-body-wrapper.is-visible .review {
    height: auto;
    -webkit-line-clamp: initial;
  }
  
  .lav-reviews .slider .card-body-wrapper.is-visible .review::after {
    display: none;
  }
  
  .lav-reviews .slider .card-body {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 24px 36px;
  }
  
  .lav-reviews .slider .review {
    margin-bottom: auto;
    position: relative;
    font-weight: 500;
    height: 144px;
    // -webkit-line-clamp: 6;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    overflow: auto;
  }
  
  .lav-reviews .slider .expand {
    padding: 0;
    margin: 0;
    border: none;
    background: none;
    color: #517193;
    cursor: pointer;
  }
  
  .lav-reviews .slider .date {
    margin-top: 18px;
    color: rgba(64, 97, 132, 0.5);
    font-size: 15px;
    line-height: 24px;
    font-style: normal;
  }
  
  .lav-reviews {
    padding: 90px 0;
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
    margin: 25px auto 0;
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
    font-weight: 400;
    font-size: 18px;
    line-height: 1.35;
    color: #FFFFFF;
    opacity: 0.9;
  }
  .lav-france .lav-reviews__total-caption {
    font-size: 16px;
  }
  .lav-reviews__total-caption span {
    font-weight: 700;
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
    // background-color: black;
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
    width: 90px;
    height: 90px;
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
    width: 90px;
    height: 90px;
    line-height: 0;
    cursor: pointer;
  }
  .lav-reviews__play:hover .lav-reviews__play-btn {
    opacity: 0;
  }
  .lav-reviews__play:hover .lav-reviews__play-btn + .lav-reviews__play-btn {
    opacity: 1;
  }
  .lav-show-reviews {
    display: none;
  }

  @media(max-width: 1400px) {
    .lav-review__text {
      max-height: auto;
      min-height: 195px;
      max-height: 195px;
    }
    .lav-reviews .slider-wrapper {
      max-width: 90%;
    }
  }

  @media (max-width: 1199px) {
    .lav-reviews__preview-list {
      grid-template-columns: 1fr;
      gap: 12px;
    }
    .lav-reviews__preview-list {
      margin-top: 48px;
    }
    .lav-reviews .slider .slide:nth-child(1n+4){
      display: none;
    }
    .lav-reviews_all .slider .slide:nth-child(1n+4){
      display: block;
    }
  }

  @media (min-width: 992px) {
    .lav-reviews .slider-outer {
      overflow: hidden;
    }
    .lav-reviews .slider-wrapper {
      // max-width: none;
      padding: 84px 0 100px;
    }
    .lav-reviews .slider .slide {
      padding: 0 20px;
      margin-bottom: 0;
    }
    .lav-reviews .slider .link {
      font-size: 12px;
      line-height: 18px;
    }
    .lav-reviews .slider .link img {
      width: 35px;
      height: 25px;
    }
    .lav-reviews .slider .review {
      height: 168px;
      margin: 0 -24px;
      padding: 0 24px;
      width: auto;
      // -webkit-line-clamp: 7;
    }
    .lav-reviews .slider .date {
      margin-top: 24px;
      font-size: 12px;
      line-height: 18px;
    }
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

  @media (max-width: 992px) {
    .lav-reviews .slider .name {
      font-size: 22px;
    }
    .lav-reviews .slider .card-body-wrapper {
      max-height: none;
      min-height: auto;
    }
    .lav-reviews .slider-wrapper {
      padding-top: 30px;
    }
  }

  @media (max-width: 768px) {
    .lav-reviews .slider-wrapper {
      max-width: 100%;
    }
    .lav-reviews__play {
      width: 100%;
      height: 100%;
    }
    .lav-reviews__play-btn {
      pointer-events: none;
    }
    .lav-reviews .slider .review {
      overflow: hidden;
    }
    .lav-reviews .slider .review.review_expand {
      -webkit-line-clamp: unset;
      overflow: auto;
      padding-bottom: 20px;
    }
    .lav-reviews .slider .card-body-wrapper.active::after {
      opacity: 1;
      bottom: 70px;
      background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #f9fbfb 70%);
      z-index: 1;

    }
    .lav-reviews .slider .card-body {
      padding-bottom: 24px;
    }
    .lav-show-reviews {
      display: block;
      margin: auto;
      margin-top: 24px;
      border: 1px solid rgba(255,255,255,.2);
      border-radius: 123px;
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;
      text-align: center;
      letter-spacing: 0.01em;
      color: #FFFFFF;
      padding: 16px 12px;
      width: 230px;
    }

    .lav-reviews .slider .review {
      height: 168px;
      margin: 0 -24px;
      padding: 0 24px;
      -webkit-line-clamp: 7;
    }

    .lav-reviews .slider .expand {
      display: block;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      margin-top: 5px;
    }
    .customer-reviews-page .slider .date {
      margin-top: 16px;
    }
  
    .lav-reviews .slider .avatar {
      width: 96px;
      height: 96px;
      margin-bottom: 10px;
    }
    .lav-reviews .slider .name {
      font-size: 18px;
      margin: 0;
    }
    .lav-reviews .slider .link {
      font-size: 14px;
    }
    .lav-reviews {
      padding: 30px 0;
    }
    .lav-reviews__preview {
      height: 190px;
    }
    .lav-reviews__play-btn {
      width: 80px;
      height: 80px;
    }
    .lav-reviews__total {
      margin-top: 48px;
      display: block;
    }
    .lav-reviews__total-col {
      display: flex;
      justify-content: space-around;
      padding: 0;
    }
    .lav-reviews__total-col + .lav-reviews__total-col {
      padding-top: 26px;
      margin-top: 28px;
    }
    .lav-reviews__total-col:last-child:after {
      background: radial-gradient(81.5% 54.14% at 0% 47.87%, #000000 0%, rgba(0, 0, 0, 0.869792) 17.19%, rgba(0, 0, 0, 0.70021) 38.02%, rgba(0, 0, 0, 0.441309) 65.1%, rgba(0, 0, 0, 0) 100%);
      transform: rotate(90deg);
      height: 100vw;
      top: -12px;
    }
    .lav-reviews__total-image {
      height: auto;
      width: 44%;
    }
    .lav-reviews__total-info {
      width: 44%;
    }
    .lav-reviews__total-image img {
      max-height: 100%;
      max-height: 90px;
    }
    .lav-reviews__total-caption span {
      display: block;
    }
    .lav-reviews__total-image {
      margin-bottom: 0;
    }
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

  .lav-trial__btn-mob {
    display: none;
  }
  .lav-trial {
    position: relative;
    padding: 90px 0;
  }
  .lav-trial__title span {
    font-weight: 400;
  }
  .lav-trial__row {
    display: flex;
    align-items: center;
    background: linear-gradient(96.91deg, #F8F9FA 0%, #FDFDFD 100.36%);
    box-shadow: 0px 44px 66px rgba(59, 83, 108, 0.22);
    border-radius: 16px;
    padding: 74px 40px 100px;
  }
  .lav-trial__image {
    position: relative;
    width: 52%;
  }
  .lav-trial__image > img {
    max-width: 100%;
  }
  .lav-trial__info {
    max-width: 430px;
    margin-left: 50px;
  }
  .lav-trial__descr {
    margin-top: 16px;
  }
  .lav-trial__buttons {
    margin: 24px auto;
    display: flex;
    justify-content: center;
    // max-width: 355px;
  }
  .lav-trial__btn {
    display: flex;
    align-items: center;
    font-size: 14px;
    line-height: 1;
    font-weight: bold;
    padding: 12px 24px;
    justify-content: center;
    transition: 0.35s;
    background: #F4F6FA;
    cursor: default;
  }
  .lav-trial__btn:first-child {
    border-bottom-left-radius: 16px;
    border-top-left-radius: 16px;
  }
  .lav-trial__btn:last-child {
    border-bottom-right-radius: 16px;
    border-top-right-radius: 16px;
  }
  .lav-trial__btn.btn-primary {
    cursor: pointer;
  }
  .lav-trial__btn .tooltip-dropdown {
    top: 20px;
    padding-top: 10px;
  }
  .lav-trial__btn>img {
    margin-right: 6px;
    width: 20px;
  }
  .lav-trial__btn + .lav-trial__btn {
    margin-left: 1px;
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
    cursor: default;
    margin-top: -35px;
  }

  .lav-trial__action {
    text-align: center;
    background-color: #F4F6FA;
    border-radius: 45px 45px 16px 16px;
    padding-bottom: 12px;
  }
  .lav-trial__guarantee {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 12px;
    padding: 0 12px;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
  }
  .lav-trial__guarantee img {
    margin-right: 6px;
  }
  .lav-trial__refund {
    margin-top: 8px;
    font-size: 14px;
    padding: 0 12px;
  }
  .lav-trial__get {
    max-width: 100%;
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
  .lav-info-invert {
    filter: invert(43%) sepia(44%) saturate(407%) hue-rotate(170deg) brightness(69%) contrast(87%)
  }
  .tooltip {
    position: relative;
  }
  .tooltip__link {
    border-bottom: 1px solid #517193;
    color: #517193;
    font-weight: 600;
    transition: 0.35s;
  }
  .tooltip__link:hover {
    opacity: 0.8;
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
  }
  .tooltip-item {
    border-radius: 8px;
    background: #FFFFFF;
    padding: 24px;
    position: relative;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    box-shadow: 0px 11px 22px rgb(81 113 147 / 44%);
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

  @media(max-width: 1199px) {
    .lav-trial {
      // text-align: center;
    }
    .lav-trial__action {
      width: 100%;
    }
    .lav-trial__info {
      max-width: 100%;
      margin: 0;
    }
    .lav-trial__btn {
      width: 100%;
    }
    .lav-trial__image {
      width: 100%;
    }
  }
  
  @media(max-width: 992px) {
  }

  @media (max-width: 768px) {
    .tooltip_free {
      padding: 24px 12px;
    }
    .lav-trial__row {
      padding: 30px 0;
      box-shadow: none;
      background: none;
    }
    .lav-trial__inside {
      position: relative;
    }
    .lav-trial__buttons {
      position: relative;
    }
    .lav-trial__btn .tooltip-dropdown {
      left: 0;
      right: 0;
      width: auto;
      top: 45px;
    }
    .lav-trial__refund {
      line-height: 22px;
    }

    .lav-trial__title {
      line-height: 40px;
    }
    .lav-trial__inside .tooltip-dropdown {
      left: 0;
      right: 0;
      width: auto;
    }
    .lav-trial__inside .tooltip-item:before {
      left: 0;
      right: 0;
      margin: auto;
    }
    .lav-trial__buttons .lav-trial__btn:first-child .tooltip-item:before {
      left: 25%;
    }
    .tooltip-dropdown {
      top: 40%;
    }
    .lav-trial {
      padding: 0;
    }
    .lav-trial__buttons {
      margin-top: 6px;
      margin-bottom: 16px;
    }
    .lav-trial__buttons .lav-trial__btn span {
      text-align: left;
    }
    .lav-trial__descr {
      margin-top: 12px;
    }
    .lav-trial__inside {
      margin-top: -15px;
      margin-bottom: 15px;
    }
    .lav-trial__btn {
      padding-left: 12px;
      padding-right: 12px;
    }
    .tooltip > img {
      width: 14px;
      height: 22px;
    }
    .lav-trial__btn .tooltip > img {
      height: 14px;
      margin-bottom: -2px;
    }
    .lav-trial__btn .tooltip {
      display: inline-block;
    }
    .tooltip {
      position: initial;
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
  }

  @media (max-width: 450px) {
    .lav-trial__btn-mob {
      display: block;
    }
  }


  .lav-drive {
    color: #FFFFFF;
    padding-top: 80px;
    padding-bottom: 0;
    background: #34475B;
  }
  .lav-drive__caption {
    font-size: 32px;
    line-height: 36px;
    text-align: center;
    color: #fff;
    opacity: 0.9;
    font-weight: 700;
  }
  .lav-drive__title {
    position: relative;
    font-size: 144px;
    line-height: 1;
    text-align: center;
    font-weight: bold;
    margin-top: 32px;
  }
  .lav-drive__bg {
    background: url(${settings.dir}/img/drive.jpeg) bottom no-repeat;
    background-size: contain;
    max-width: 1324px;
  }
  .lav-drive__bg-title {
    max-width: 475px;
    padding: 440px 0 160px;
    margin-left: auto;
    font-size: 64px;
    line-height: 64px;
    font-weight: bold;
    margin-right: 40px;
  }
  @media(max-width: 1275px) {
    .lav-drive__bg-title {
      padding: 460px 0 100px;
    }
  }
  .lav-drive__actions {
    text-align: center;
    padding-bottom: 80px;
  }
  .lav-drive__learn {
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.01em;
    margin-top: 28px;
    transition: 0.35s;
    cursor: pointer;
  }
  .lav-drive__learn:hover {
    opacity: 0.7;
  }
  .lav-drive__device {
    width: 850px;
    display: block;
    margin: -40px auto -150px;
    padding-left: 75px;
  }
  @media(max-width: 768px) {
    .lav-drive {
      border-radius: 0;
      padding-top: 35px;
      // background: #34475B url(${settings.dir}/img/drive-mob.png) 0 53vw no-repeat;
      background: #34475B url(${settings.dir}/img/drive-mob.png) 0 bottom no-repeat;
      background-size: 100% auto;
    }
    .lav-drive__actions {
      padding-bottom: 34px;
    }
    .lav-drive__caption {
      font-weight: 500;
      font-size: 22px;
      line-height: 28px;
      opacity: 0.9;
    }
    .lav-drive__title {
      margin-top: 16px;
      font-weight: 500;
      font-size: 92px;
      line-height: 64px;
    }
    .lav-drive__device {
      margin: 0 0 -20px;
      padding: 0;
      width: 121vw;
      margin-left: -5vw;
    }
    .lav-drive__bg-title {
      font-size: 32px;
      line-height: 36px;
      text-align: center;
      // padding-top: 360px;
      padding-top: 90vw;
      font-weight: 500;
      padding-bottom: 56px;
      margin: auto;
      max-width: 100%;
    }
    .lav-drive__bg {
      background: none;
    }
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
    background: black;
  }
  .lav-modal__title {
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 12px;
  }
  @media(max-width: 992px) {
    .lav-review-modal iframe {
      width: 100%;
      min-height: 75vh;
      height: auto;
    }
  }
  @media(max-width: 768px) {
    .lav-modal__inner {
      max-width: 93%;
      width: 100%;
      padding: 48px 24px 24px;
    }
    .lav-modal__inner.lav-review-modal {
      padding: 0;
    }
    .lav-modal__close {
      top: 5px;
      right: 5px;
    }
    .lav-modal {
      padding: 12px;
    }
  }
`;
/*** STYLES / end ***/

/********* Custom Code **********/
let intervalInit = setInterval(() => {
  if (document.body) {
    clearInterval(intervalInit);
    // gaEvent('exp_new_pdp_checkout_loaded');

    if (
      ['/en-us', '/en-ca', '/uk', '/fr', '/fr-be', '/fr-ca'].includes(
        location.pathname
      )
    ) {
      initHP();
      const removeSlider = setInterval(() => {
        if (document.querySelector('.pin-spacer')) {
          document.querySelector('.pin-spacer').remove();
          clearInterval(removeSlider);
        }
      }, 300);
    } else {
      init();
    }
  }
}, 200);

function initHP() {
  if (!document.querySelector('.home-page')) {
    setTimeout(() => {
      initHP();
    }, 200);
    return false;
  }

  const sliderStyles = document.createElement('link');
  sliderStyles.rel = 'stylesheet';
  sliderStyles.href =
    'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.1/dist/css/splide-core.min.css';
  document.body.appendChild(sliderStyles);

  let sliderScript = document.createElement('script');
  sliderScript.src =
    'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.1/dist/js/splide.min.js';
  document.body.append(sliderScript);

  let newPage = `
    <main class='lav-wrap'>
      <section class='lav-jumb lav-section'>
        <div class='container-fluid container--size--md lav-jumb__container'>
          <div class='lav-jumb__info'>
            <div class='lav-jumb__title'>Beat the winter blues and optimize your sleep</div>

            <div class='lav-jumb__descr lav-descr'>
              Luminette glasses are scientifically proven to beat the winter blues, restoring your mood and energy levels in just 30 minutes a day
            </div>

            <div class='lav-jumb__actions'>
              <button class='lav-jumb__btn btn-primary btn-lg flipped lav-btn lav-btn-buy'>
                <span class="btn-text">
                  Get Luminette3 Now
                </span>
                <span class="btn-bg-wrapper"></span>
              </button>

              <div class='lav-jumb__learn'>Learn More</div>
            </div>
          </div>
        </div>
      </section>

      <section class='lav-boost lav-section'>
        <div class='container-fluid container--size--md lav-boost__container'>
          <div class='lav-boost__inner lav-plate'>
            <div class='lav-boost__image'>
              <img class='lav-boost__stars' src='${settings.dir}/img/boost-person.svg' />
            </div>

            <div class='lav-boost__info'>
              <div class='lav-boost__title'>150,000+ people boost their energy with Luminette</div>
              <img class='lav-boost__stars' src='${settings.dir}/img/stars.svg' />
              <div class='lav-boost__caption'>1049 Amazon & Trustedshop reviews</div>
            </div>
          </div>
        </div>
      </section>

      <section class='lav-wears lav-section'>
        <div class='container-fluid container--size--lg lav-wears__container'>
          <div class='lav-wears__title lav-title'>Wear for 30 mins a day to...</div>

          <div class='lav-wears__grid'>
            <div class='lav-wear' style='background-image: url("${settings.dir}/img/benefit1-bg.jpeg")'>
              <div class='lav-wear__info'>
                <div class='lav-wear__icon'>
                  <img src='${settings.dir}/img/benefit1.svg' />
                </div>
                <div class='lav-wear__title'>Beat winter blues</div>
                <div class='lav-wear__list'>
                  <div class='lav-wear__item'>Cope with winter blues and seasonal changes</div>
                  <div class='lav-wear__item'>Manage a healthier lifestyle with circadian rhythms</div>
                  <div class='lav-wear__item'>Boost overall health</div>
                </div>
              </div>
            </div>

            <div class='lav-wear' style='background-image: url("${settings.dir}/img/benefit2-bg.jpeg")'>
              <div class='lav-wear__info'>
                <div class='lav-wear__icon'>
                  <img src='${settings.dir}/img/benefit3.svg' />
                </div>
                <div class='lav-wear__title'>Boost your energy level</div>
                <div class='lav-wear__list'>
                  <div class='lav-wear__item'>Reduce fatigue and irritability</div>
                  <div class='lav-wear__item'>Feel more energized</div>
                  <div class='lav-wear__item'>Elevate mental and physical performance</div>
                </div>
              </div>
            </div>

            <div class='lav-wear' style='background-image: url("${settings.dir}/img/benefit3-bg.jpeg")'>
              <div class='lav-wear__info'>
                <div class='lav-wear__icon'>
                  <img src='${settings.dir}/img/benefit2.svg' />
                </div>
                <div class='lav-wear__title'>Improve your sleep</div>
                <div class='lav-wear__list'>
                  <div class='lav-wear__item'>Wake up less frequently at night</div>
                  <div class='lav-wear__item'>Fall asleep easier</div>
                  <div class='lav-wear__item'>Wake up refreshed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class='lav-drinks lav-section'>
        <div class='container-fluid container--size--sm lav-drinks__container'>
          <div class='lav-drinks__inner lav-plate'>
            <div class='lav-drinks__image'>
              <img src='${settings.dir}/img/cup.svg' />
            </div>
            <div class='lav-drinks__info'>
              <div class='lav-drinks__title'>Natural substitute for caffeine & energy drinks</div>
              <div class='lav-drinks__caption'>You can also use light therapy to support healthy energy levels during the day.</div>
            </div>
          </div>

          <div class='lav-drinks__btn-wrap'>
            <button class='lav-drinks__btn btn-primary btn-lg flipped lav-btn lav-btn-buy'>
              <span class="btn-text">
                Get Luminette3 Now
              </span>
              <span class="btn-bg-wrapper"></span>
            </button>
          </div>
        </div>
      </section>

      <section class='lav-shorts__wrap lav-section'>
        <div class='container-fluid container--size--lg'>
          <div class="lav-shorts lav-observe">
            <div class="lav-shorts__title text-center">150,000+ people boost their energy with Luminette</div>
            <div class="lav-shorts__caption text-center">Here’s what our users are saying after using Luminette</div>

            <div class="splide lav-shorts__splide">
              <div class="splide__track">
                <div class="lav-shorts__list splide__list">
                  <div class='lav-shorts__item splide__slide'>
                    <div class='lav-shorts__preview lav-open-modal' data-target='.lav-review-modal' data-name='Brooke' data-src='https://www.youtube.com/embed/7GVQUjaxrwU?autoplay=1'>
                      <img  src="https://flopsi69.github.io/crs/myluminette/checkout/video/brook.png" />
                    </div>
                    <div class='lav-shorts__info'>
                      <div class='lav-shorts__stars'>
                        <img  src="https://flopsi69.github.io/crs/myluminette/checkout/img/stars-shorts.svg" />
                      </div>
                      <div class='lav-shorts__quote'>
                        “20 minutes a day has been an absolute game changer for me”
                      </div>
                      <div class='lav-shorts__inst'>
                        <img  src="https://flopsi69.github.io/crs/myluminette/checkout/img/icon-inst.svg" />
                        </span>Brooke G.</span>
                      </div>
                    </div>
                  </div>
                  
                  <div class='lav-shorts__item splide__slide'>
                    <div class='lav-shorts__preview lav-open-modal' data-target='.lav-review-modal' data-name='Lily' data-src='https://www.youtube.com/embed/GWxMqWoE4CU?autoplay=1'>
                      <img  src="https://flopsi69.github.io/crs/myluminette/checkout/video/guilty.png" />
                    </div>
                    <div class='lav-shorts__info'>
                      <div class='lav-shorts__stars'>
                        <img  src="https://flopsi69.github.io/crs/myluminette/checkout/img/stars-shorts.svg" />
                      </div>
                      <div class='lav-shorts__quote'>
                        “Luminette glasses gave me my energy back”
                      </div>
                      <div class='lav-shorts__inst'>
                        <img  src="https://flopsi69.github.io/crs/myluminette/checkout/img/icon-inst.svg" />
                        </span>The guilty mom</span>
                      </div>
                    </div>
                  </div>

                  <div class='lav-shorts__item splide__slide'>
                    <div class='lav-shorts__preview lav-open-modal' data-target='.lav-review-modal' data-name='Theodora' data-src='https://www.youtube.com/embed/GE-FPNrR1rY?autoplay=1'>
                      <img  src="https://flopsi69.github.io/crs/myluminette/checkout/video/elsa.png" />
                    </div>
                    <div class='lav-shorts__info'>
                      <div class='lav-shorts__stars'>
                        <img  src="https://flopsi69.github.io/crs/myluminette/checkout/img/stars-shorts.svg" />
                      </div>
                      <div class='lav-shorts__quote'>
                        “After first week my mood has definitely improved”
                      </div>
                      <div class='lav-shorts__inst'>
                        <img  src="https://flopsi69.github.io/crs/myluminette/checkout/img/icon-inst.svg" />
                        </span>Elsa</span>
                      </div>
                    </div>
                  </div>

                  <div class='lav-shorts__item splide__slide'>
                    <div class='lav-shorts__preview lav-open-modal' data-target='.lav-review-modal' data-name='Cassandra' data-src='https://www.youtube.com/embed/zsgDuSXgNYc?autoplay=1'>
                      <img  src="https://flopsi69.github.io/crs/myluminette/checkout/video/cass.png" />
                    </div>
                    <div class='lav-shorts__info'>
                      <div class='lav-shorts__stars'>
                        <img  src="https://flopsi69.github.io/crs/myluminette/checkout/img/stars-shorts.svg" />
                      </div>
                      <div class='lav-shorts__quote'>
                        “Super simple and easy way to fight seasonal blues”
                      </div>
                      <div class='lav-shorts__inst'>
                        <img  src="https://flopsi69.github.io/crs/myluminette/checkout/img/icon-inst.svg" />
                        </span>Cass</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section class='lav-morning lav-section'>
        <div class='container-fluid container--size--lg lav-morning__container'>
          <div class='lav-morning__plate'>
            <div class='lav-morning__preview lav-open-modal' data-target='.lav-review-modal' data-src='https://www.youtube.com/embed/O83h2CcQAHQ?autoplay=0&start=0&showinfo=0&rel=0'>
              <img src='${settings.dir}/img/play.svg' />
              <img src='${settings.dir}/img/play-hover.svg' />
            </div>
            <div class='lav-morning__info'>
              <div class='lav-morning__title lav-title'>The perfect addition to&nbsp;your morning routine:</div>
              
              <div class='lav-morning__descr lav-descr'>Wear Luminette while brushing your teeth, eating breakfast or working on your computer - the perfect addition to any morning&nbsp;routine</div>

              <div class='lav-morning__list'>
                <div class='lav-morning__item'>
                  <div class='lav-morning__image'>
                    <img src='${settings.dir}/img/morning1.svg' />
                  </div>
                  <div class='lav-morning__caption'>
                    Therapy sessions last <br /><span>20-45 minutes</span>
                  </div>
                </div>
                <div class='lav-morning__item'>
                  <div class='lav-morning__image'>
                    <img src='${settings.dir}/img/morning2.svg' />
                  </div>
                  <div class='lav-morning__caption'>Use <span>1x per day</span></div>
                </div>
                <div class='lav-morning__item'>
                  <div class='lav-morning__image'>
                    <img src='${settings.dir}/img/morning3.svg' />
                  </div>
                  <div class='lav-morning__caption'>
                    Feel the benefits within <br /><span>4 to 6 days</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class='lav-cases lav-section'>
        <div class='container-fluid container--size--lg lav-cases__container'>
          <div class='lav-cases__title lav-title'>Wear Luminette while...</div>

          <div class='lav-cases__list'>
            <div class='lav-case'>
              <div class='lav-case__image'>
                <img src='${settings.dir}/img/case1.jpeg' />
              </div>
              <div class='lav-case__caption lav-descr'>Preparing breakfast</div>
            </div>

            <div class='lav-case'>
              <div class='lav-case__image'>
                <img src='${settings.dir}/img/case2.jpeg' />
              </div>
              <div class='lav-case__caption lav-descr'>Brushing your teeth</div>
            </div>

            <div class='lav-case'>
              <div class='lav-case__image'>
                <img src='${settings.dir}/img/case3.jpeg' />
              </div>
              <div class='lav-case__caption lav-descr'>Working on your computer</div>
            </div>

            <div class='lav-case'>
              <div class='lav-case__image'>
                <img src='${settings.dir}/img/case4.jpeg' />
              </div>
              <div class='lav-case__caption lav-descr'>Performing light exercise</div>
            </div>
          </div>
        </div>
      </section>

      <section class='lav-results lav-section'>
        <div class='container-fluid container--size--lg lav-results__container'>
          <div class='lav-results__title lav-title'>Get results in just 7&nbsp;days</div>

          <div class='lav-results__row'>
            <div class="lav-results__item">
              <div class="lav-results__item-title">Order Luminette3</div>
              <div class="lav-results__circle"></div>
              <div class="lav-results__item-caption">Today</div>
            </div>

            <div class="lav-results__item">
              <div class="lav-results__item-title">Wear Luminette3</div>
              <div class="lav-results__circle"></div>
              <div class="lav-results__item-caption">20 minutes x 7&nbsp;days</div>
            </div>

            <div class="lav-results__item">
              <div class="lav-results__item-title">Feel energized and fix your sleep</div>
              <div class="lav-results__circle"></div>
              <div class="lav-results__item-caption">After 4-7&nbsp;days</div>
            </div>
          </div>

          <button class='lav-results__btn btn-primary lav-mob btn-lg flipped lav-btn lav-btn-buy'>
            <span class="btn-text">
              Get Luminette3 Now
            </span>
            <span class="btn-bg-wrapper"></span>
          </button>
        </div>
      </section>

      <section class='lav-benefits lav-section'>
        <div class='container-fluid container--size--lg lav-benefits__container'>
          <div class='lav-benefits__inner'>
            <div class='lav-benefits__title lav-title'>What are the benefits?</div>

            <div class='lav-benefits__list'>
              <div class='lav-benefit'>
                <div class='lav-benefit__icon'>
                  <img src='${settings.dir}/img/benefit2-1.svg' />
                </div>
                <div class='lav-benefit__title'>Lightweight and comfortable</div>
                <div class='lav-benefit__caption lav-descr'>Weighing only 51g and built with a comfy ergonomic nose fit</div>
              </div>
              <div class='lav-benefit'>
                <div class='lav-benefit__icon'>
                  <img src='${settings.dir}/img/benefit2-2.svg' />
                </div>
                <div class='lav-benefit__title'>Doesn't hinder your vision</div>
                <div class='lav-benefit__caption lav-descr'>The special patented light system lets you experience light therapy without any disruption to your vision</div>
              </div>
              <div class='lav-benefit'>
                <div class='lav-benefit__icon'>
                  <img src='${settings.dir}/img/benefit2-3.svg' />
                </div>
                <div class='lav-benefit__title'>Compatible with glasses</div>
                <div class='lav-benefit__caption lav-descr'>Wear Luminette on top of your glasses</div>
              </div>
            </div>

            <button class='lav-benefit__btn lav-btn btn-primary btn-lg flipped lav-btn-buy'>
              <span class="btn-text">
                Get Luminette3 Now
              </span>
              <span class="btn-bg-wrapper"></span>
            </button>
          </div>
        </div>
      </section>

      <section class='lav-lucimed lav-section'>
        <div class='container-fluid container--size--sm lav-lucimed__container'>
          <div class='lav-lucimed__inner'>
            <div class='lav-lucimed__info'>
              <div class='lav-lucimed__title lav-title'>Lucimed - Pioneers in Light Therapy</div>
              <div class='lav-lucimed__image lav-mob'>
                <img src='${settings.dir}/img/lucimed.png' />
              </div>
              <div class='lav-lucimed__descr lav-descr'>
                Belgian health tech company Lucimed has pioneered a way for you to bring wearable light therapy into your home. <br class='lav-mob' /><br />Years of research by optical engineers, sleep disorder specialists have created the Luminette3 - a device that helps you optimize your sleep & mental wellbeing through the power of light therapy.
              </div>
              <a href="/clinical-study" class='lav-lucimed__link'>
                Learn more about Luminette scientific research<svg class="icon icon-xs"><use xlink:href="#arrow-right"></use></svg>
              </a>
            </div>

            <div class='lav-lucimed__image lav-desk'>
              <img src='${settings.dir}/img/lucimed.png' />
            </div>
          </div>
        </div>
      </section>

      <section class='lav-works lav-section'>
        <div class='container-fluid container--size--sm lav-works__container'>
          <div class='lav-works__row'>
            <div class='lav-works__info'>
              <div class='lav-works__title lav-title'>The Science Behind Luminette</div>

              <div class='lav-works__image lav-mob'>
                <img src='${settings.dir}/img/works.png' />
              </div>

              <div class='lav-works__item'>
                <div class='lav-works__item-title'>A patented, innovative light therapy system, for optimal comfort.</div>
                <div class='lav-works__item-descr lav-descr'>Innovative Luminette technology emits a gentle beam of light towards the eyes from just above eye level. This mimics the natural light from blue skies, without interrupting vision.</div>
              </div>

              <div class='lav-works__item'>
                <div class='lav-works__item-title'>Blue enriched white light for greater effectiveness.</div>
                <div class='lav-works__item-descr lav-descr'>Luminette 3 emits a blue-enriched white light, peaked at 468 nm. This wavelength is proven to be the most effective at triggering the body’s positive response to sunlight.</div>
              </div>
            </div>
            
            <div class='lav-works__image lav-desk'>
              <img src='${settings.dir}/img/works.png' />
            </div>
          </div>
        </div>
      </section>

      <section class='lav-study__wrap lav-section'>
        <div class='container-fluid container--size--sm'>
          <div class='lav-study'>
            <div class='lav-study__icon'>
              <svg class="icon icon-xxl">
                <use xlink:href="#lamp"></use>
              </svg>
            </div>
            <div class='lav-study__info'>
              An independent study has shown that Luminette gives the same results as a 10,000 lux light box
            </div>
            <a href='https://d3sq5glv6xow4l.cloudfront.net/docs/Light_therapy_with_boxes_or_glasses_to_counteract_.pdf' target="_blank" class='lav-study__btn'>
              Read the study
              <img src='/images/icons/adobe-reader.svg' />
            </a>
          </div>
        </div>
      </section>

      <section class='lav-safety lav-section'>
        <div class='container-fluid container--size--lg'>
          <div class='lav-safety__row'>
            <div class='lav-safety__left'>
              <div class='lav-safety__title lav-title'>Safety</div>

              <div class='lav-safety__icons'>
                <img src="https://conversionratestore.github.io/projects/luminette/img/safety-1.svg" alt="safety icon" />
                <img src="https://conversionratestore.github.io/projects/luminette/img/safety-2.svg" alt="safety icon" />
                <img src="https://conversionratestore.github.io/projects/luminette/img/safety-3.svg" alt="safety icon" />
              </div>
            </div>
            <div class='lav-safety__right'>
              <div class='lav-safety__descr lav-descr'>Since 2007 Luminette carries the European CE classification.</div>

              <div class='lav-safety__descr lav-descr'>Luminette is classified as a device that is safe for the eyes in accordance with the international standard CEI 62471.</div>

              <div class='lav-safety__descr lav-safety__descr-country lav-descr'>There are no Light Therapy lamps in the USA that carry FDA approval. Therefore the efficacy and safety of this electronic device - and all other light therapy devices on the US market - will be unregulated by the FDA.</div>

              <div class='lav-safety__toggler lav-mob'>
                See more
                <svg class="icon icon-xs"><use xlink:href="#arrow-right"></use></svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class='lav-compare lav-section lav-observe'>
        <div class='container-fluid container--size--xs'>

          <div class="lav-compare__title-head lav-title">Why to choose wearable light therapy</div>

          <div class="row fs-16 text-center lav-compare__inner mx-auto">
            <div class="col-6 py-5">
              <div class='lav-compare__image'>
                <img class="lav-compare__lum" src="${settings.dir}/img/compare-lum.png"/>
              </div>
        
              <p class="fs-22 fw-bold py-1 lav-compare__title">Luminette3</p>
            </div>
            <div class="col-6 py-5">
              <div class='lav-compare__image'>
                <img class="lav-compare__box" src="${settings.dir}/img/lightbox.png"/>
              </div>
              <p class="fs-22 fw-bold py-1 lav-compare__title">Light Box</p>
            </div>
            <div class="col-12 py-2 fs-18 fw-bold b-1">Portable</div>
            <div class="col-6 py-5 fw-medium"><p class="py-1">Wear while <span class="text-ellipsis"> on-the-go</span></p></div>
            <div class="col-6 py-5 fw-medium"><p class="py-1">Requires you to stop and sit still for <span class="text-ellipsis">30 mins</span></p></div>
            <div class="col-12 py-2 fs-18 fw-bold b-1">Light colour spectrum</div>
            <div class="col-6 py-5 fw-medium"><p class="py-1">Blue-enriched <span class="text-ellipsis">white light</span></p></div>
            <div class="col-6 py-5 fw-medium"><p class="py-1">Full spectrum <span class="text-ellipsis">white light</span></p></div>
            <div class="col-12 py-2 fs-18 fw-bold b-1">Therapy effectiveness</div>
            <div class="col-6 py-5 fw-medium"><p class="py-1">Provides effective therapy using a less intense light source</p></div>
            <div class="col-6 py-5 fw-medium"><p class="py-1">Requires at least 10,000 lux to provide effective light therapy</p></div>
            <div class="col-12 py-2 fs-18 fw-bold b-1">Size</div>
            <div class="col-6 py-5 fw-medium"><p class="pt-1 pb-5">Small/ ultralight <br />
            only 51g (1.83 oz)</p></div>
            <div class="col-6 py-5 fw-medium"><p class="pt-1 pb-5">Large, bulky</p></div>
          </div>
        </div>
      </section>

      <section class='lav-faq lav-section'>
        <div class='container-fluid container--size--lg'>
          <div class='lav-faq__plate'>
            <div class='lav-faq__info'>
              <div class='lav-faq__title lav-title'>FAQs</div>
              <div class='lav-faq__list accordion-primary'>
                <div class="question-row">
                  <div class="accordion-toggle collapsed" data-target="#question-1" aria-expanded="false" data-toggle="collapse">
                    <div class="accordion-title d-flex align-items-center align-items-lg-center justify-content-between">
                      <div class="question">What problems can Luminette help to solve?</div>

                      <div class="d-flex align-items-center justify-content-center">
                        <svg class="icon icon-xs">
                          <use xlink:href="#arrow-right"></use>
                        </svg>
                      </div>
                    </div>

                    <div id="question-1" class="collapse" style="">
                      <div class="accordion-content answer fw-medium ">
                        <p>Luminette is for you if: </p>
                        <ul>
                          <li>- You lack energy at this time, you feel temporary morale drops.</li>
                          <li>- You are concerned by the winter depression (over-sensitivity to the fall in brightness in the autumn-winter period).</li>
                          <li>- You know sleep problems, insomnia, etc. </li>
                          <li>- You know episodes of chronic fatigue. </li>
                          <li>- You travel a lot and are regularly subjected to jet lag.</li>
                          <li>- You work at night and wish to have a longer sleep.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="question-row">
                  <div class="accordion-toggle collapsed" data-target="#question-2" aria-expanded="false" data-toggle="collapse">
                    <div class="accordion-title d-flex align-items-center align-items-lg-center justify-content-between">
                      <div class="question">Is wearing Luminette dangerous for the eyes?</div>

                      <div class="d-flex align-items-center justify-content-center">
                        <svg class="icon icon-xs">
                          <use xlink:href="#arrow-right"></use>
                        </svg>
                      </div>
                    </div>

                    <div id="question-2" class="collapse" style="">
                      <div class="accordion-content answer fw-medium ">
                        <p>No.</p>
                        <ul>
                          <li>1) The light emitted by Luminette is white light enhanced with blue light. It is low intensity (1,500 lux). By way of comparison, most light therapy boxes emit light at 10,000 lux.</li>
                          <li>2) The spectrum has been specially chosen to exclude potentially dangerous wavelengths (short blue wavelenght, near UV and UV). </li>
                          <li>3) Luminette has been assessed in terms of the standard IEC 62471. It is classified as a product without danger for the eyes.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="question-row">
                  <div class="accordion-toggle collapsed" data-target="#question-3" aria-expanded="false" data-toggle="collapse">
                    <div class="accordion-title d-flex align-items-center align-items-lg-center justify-content-between">
                      <div class="question">How to use Luminette glasses?</div>

                      <div class="d-flex align-items-center justify-content-center">
                        <svg class="icon icon-xs">
                          <use xlink:href="#arrow-right"></use>
                        </svg>
                      </div>
                    </div>

                    <div id="question-3" class="collapse" style="">
                      <div class="accordion-content answer fw-medium ">
                        <p>Wear your Luminette once a day in the morning. Choose from three different light intensities: 20/30/60 minutes per day. When the session is finished Luminette will turn off automatically.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="question-row">
                  <div class="accordion-toggle collapsed" data-target="#question-4" aria-expanded="false" data-toggle="collapse">
                    <div class="accordion-title d-flex align-items-center align-items-lg-center justify-content-between">
                      <div class="question">How long before I start to feel better?</div>

                      <div class="d-flex align-items-center justify-content-center">
                        <svg class="icon icon-xs">
                          <use xlink:href="#arrow-right"></use>
                        </svg>
                      </div>
                    </div>

                    <div id="question-4" class="collapse" style="">
                      <div class="accordion-content answer fw-medium ">
                        <p>The “boosting” effect of Luminette is almost immediate. From the very first days, you will feel your energy returning and your mood will start to improve. The improvements of your biological clock takes between 4 to 7 days.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="question-row">
                  <div class="accordion-toggle collapsed" data-target="#question-5" aria-expanded="false" data-toggle="collapse">
                    <div class="accordion-title d-flex align-items-center align-items-lg-center justify-content-between">
                      <div class="question">Can I use Luminette with contact lenses or glasses?</div>

                      <div class="d-flex align-items-center justify-content-center">
                        <svg class="icon icon-xs">
                          <use xlink:href="#arrow-right"></use>
                        </svg>
                      </div>
                    </div>

                    <div id="question-5" class="collapse" style="">
                      <div class="accordion-content answer fw-medium ">
                        <p>Yes, the Luminette allows use with contact lenses and a pair of glasses. Just place the Luminette over your normal pair of glasses.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="question-row">
                  <div class="accordion-toggle collapsed" data-target="#question-6" aria-expanded="false" data-toggle="collapse">
                    <div class="accordion-title d-flex align-items-center align-items-lg-center justify-content-between">
                      <div class="question">Can I use the Luminette if I have cataracts?</div>

                      <div class="d-flex align-items-center justify-content-center">
                        <svg class="icon icon-xs">
                          <use xlink:href="#arrow-right"></use>
                        </svg>
                      </div>
                    </div>

                    <div id="question-6" class="collapse" style="">
                      <div class="accordion-content answer fw-medium ">
                        <p>Wearing Luminette if you have cataract is without danger. Your crystalline has become opaque and lets in less light, so the Luminette might prove to be less effective and might need to be worn a little longer. In case of any doubt, please refer to your opthalmologist.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="question-row">
                  <div class="accordion-toggle collapsed" data-target="#question-7" aria-expanded="false" data-toggle="collapse">
                    <div class="accordion-title d-flex align-items-center align-items-lg-center justify-content-between">
                      <div class="question">Is Luminette suitable for children?</div>

                      <div class="d-flex align-items-center justify-content-center">
                        <svg class="icon icon-xs">
                          <use xlink:href="#arrow-right"></use>
                        </svg>
                      </div>
                    </div>

                    <div id="question-7" class="collapse" style="">
                      <div class="accordion-content answer fw-medium ">
                        <p>Beacause their crystallines are still growing, Luminette is not advised for children under 12 years of age</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="question-row">
                  <div class="accordion-toggle collapsed" data-target="#question-8" aria-expanded="false" data-toggle="collapse">
                    <div class="accordion-title d-flex align-items-center align-items-lg-center justify-content-between">
                      <div class="question">Where is Luminette manufactured?</div>

                      <div class="d-flex align-items-center justify-content-center">
                        <svg class="icon icon-xs">
                          <use xlink:href="#arrow-right"></use>
                        </svg>
                      </div>
                    </div>

                    <div id="question-8" class="collapse" style="">
                      <div class="accordion-content answer fw-medium ">
                        <p>Luminette is manufactured and assembled in China.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="question-row">
                  <div class="accordion-toggle collapsed" data-target="#question-9" aria-expanded="false" data-toggle="collapse">
                    <div class="accordion-title d-flex align-items-center align-items-lg-center justify-content-between">
                      <div class="question">How long is the Luminette guarantee?</div>

                      <div class="d-flex align-items-center justify-content-center">
                        <svg class="icon icon-xs">
                          <use xlink:href="#arrow-right"></use>
                        </svg>
                      </div>
                    </div>

                    <div id="question-9" class="collapse" style="">
                      <div class="accordion-content answer fw-medium ">
                        <p>Your Luminette is guaranteed for 2 years. This guarantee covers manufacturing faults and any other fault that may occur in the context of normal use of the device.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="question-row">
                  <div class="accordion-toggle collapsed" data-target="#question-10" aria-expanded="false" data-toggle="collapse">
                    <div class="accordion-title d-flex align-items-center align-items-lg-center justify-content-between">
                      <div class="question">Are there any side effects?</div>

                      <div class="d-flex align-items-center justify-content-center">
                        <svg class="icon icon-xs">
                          <use xlink:href="#arrow-right"></use>
                        </svg>
                      </div>
                    </div>

                    <div id="question-10" class="collapse" style="">
                      <div class="accordion-content answer fw-medium ">
                        <p>Undesirable side-effects linked to the Luminette are always relatively slight and transitory. They may include: Headaches / Eye fatigue / Nausea. In order to avoid, reduce or attenuate these undesirable effects: Use Luminette in a well lit room / Reduce Luminette's intensity setting (there are 3 levels of light intensities) / Do not use the device for a few days until the side-effects disappear, then try again.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
            <div class='lav-faq__image'>
              <img src='${settings.dir}/img/faq.svg' />
            </div>
          </div>

          <div class='lav-faq__btn-wrap'>
            <button class='lav-faq__btn btn-primary btn-lg flipped lav-btn lav-btn-buy'>
              <span class="btn-text">
                Get Luminette3 Now
              </span>
              <span class="btn-bg-wrapper"></span>
            </button>
          </div>
      
        </div>
      </section>

      <section class='lav-reviews lav-observe'>
        <div class='container-fluid container--size--lg lav-reviews__container'>
          <div class='lav-reviews__title lav-title'>150,000 Luminette&nbsp;users</div>

          <div class="slider-wrapper position-relative">
            <div class="slider">
              <div class="slide">
                <div class="card">
                  <div class="card-header text-center">
                    <picture class="avatar d-block">
                      <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/16@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/16.png 1x"/>
                      <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/16.png" alt="Customer avatar">
                    </picture>
                    <div class="h4 name fw-bolder">Arnaud T.</div>
                    <a href="https://www.google.com/maps/contrib/111655687148446401076/reviews/@50.5779487,5.2610511,16z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                      <span>
                        Read the review on <b>Google</b>
                      </span>
                      <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                    </a>
                  </div>
                  <div class="card-body-wrapper">
                    <div class="card-body">
                      <p class="review">"Every year I notice the lack of light and it affects my mood.
                        This year I found the solution to remedy this with the Luminette. The advantage is that
                        you are not stuck in front of a screen while you use it, so and you can get ready in the morning or eat
                        breakfast
                        with the glasses on. It is very practical&nbsp;:)"
                      </p>
                      <button class="fw-bolder expand">Show more</button>
                      <div class="date">4 March 2021</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="slide">
                <div class="card">
                  <div class="card-header text-center">
                    <picture class="avatar d-block">
                      <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/4@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/4.png 1x"/>
                      <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/4.png" alt="Customer avatar">
                    </picture>
                    <div class="h4 name fw-bolder">Laura S.</div>
                    <a href="https://www.amazon.com/gp/customer-reviews/R37M192JK2SORZ/ref=cm_cr_getr_d_rvw_ttl?ie=UTF8&ASIN=B07VMRRB9Y" target="_blank" class="link">
                      <span>
                        Read the review on <b>Amazon</b>
                      </span>
                      <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                    </a>
                  </div>
                  <div class="card-body-wrapper">
                    <div class="card-body">
                      <p class="review">I use Luminettes since the beginning of October 2020 to deal with my Seasonal Affective
                        Disorder
                        (SAD). So far, I have no symptoms of SAD, despite the time changing (winter time) and the sun
                        disappearing at 4:30 PM. It is a first. I am amazed.my energy level has increased and I feel
                        free and joyous most of the time. I also sleep much better. I must add that I stopped
                        caffeine,
                        which helps as well.
                        Luminettes are far, far better than the lamps. I wear them every morning without being obliged
                        to stare at the lamp. My mood has really improved.
                        They are very convenient and easy to use. I put them onto the top of my glasses. They recharge
                        easily and they can be used without plugging them every day.
                        Everyone who sees me wearing them (when I attend online meetings, when I go to the dentist,
                        etc)
                        are asking me if it works. People think it is pretty and they are very interested because they
                        always have someone in their family with SAD, or they are afflicted by that disorder
                        themselves.
                        So really, no complaints, only good things to say about my Luminettes which are as precious
                        now
                        as my cell phone.
                        Merci!"
                        caffeine,
                        which helps as well.
                        Luminettes are far, far better than the lamps. I wear them every morning without being obliged
                        to stare at the lamp. My mood has really improved.
                        They are very convenient and easy to use. I put them onto the top of my glasses. They recharge
                        easily and they can be used without plugging them every day.
                        Everyone who sees me wearing them (when I attend online meetings, when I go to the dentist,
                        etc)
                        are asking me if it works. People think it is pretty and they are very interested because they
                        always have someone in their family with SAD, or they are afflicted by that disorder
                        themselves.
                        So really, no complaints, only good things to say about my Luminettes which are as precious
                        now
                        as my cell phone.
                        Merci!
                      </p>
                      <button class="fw-bolder expand">Show more</button>
                      <div class="date">21 December 2020</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="slide">
                <div class="card">
                  <div class="card-header text-center">
                    <picture class="avatar d-block">
                      <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/1@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/1.png 1x"/>
                      <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/1.png" alt="Customer avatar">
                    </picture>
                    <div class="h4 name fw-bolder">Rémy Z.</div>
                    <a href="https://www.google.com/maps/contrib/112247709787810698381/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@50.5779487,5.2632398,17z/data=!4m6!1m5!8m4!1e2!2s112247709787810698381!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                      <span>
                        Read the review on <b>Google </b>
                      </span>
                      <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                    </a>
                  </div>
                  <div class="card-body-wrapper">
                    <div class="card-body">
                      <p class="review">Excellent light therapy glasses.  I use them every morning when I wake up. I
                        have been
                        suffering
                        from
                        seasonal depression for several years, but thanks to Luminettes I have been feeling
                        the
                        effects
                        of my
                        mood disorders much less in autumn and winter. I use them from mid-fall until the end of March. I used to
                        have
                        a
                        light therapy 
                        lamp, but it was quite restrictive to stay in front of it all the time.
                        With
                        my
                        Luminettes I can go about my business without any problem.
                        I am very satisfied!
                      </p>
                      <button class="fw-bolder expand">Show more</button>
                      <div class="date">21 December 2020</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="slide">
                <div class="card">
                  <div class="card-header text-center">
                    <picture class="avatar d-block">
                      <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/2@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/2.png 1x"/>
                      <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/2.png" alt="Customer avatar">
                    </picture>
                    <div class="h4 name fw-bolder">Dominique M.</div>
                    <a href="https://www.amazon.fr/gp/customer-reviews/R2TECJ5KRJG2TC/ref=cm_cr_getr_d_rvw_ttl?ie=UTF8&ASIN=B07VMRRB9Y" target="_blank" class="link">
                      <span>
                        Read the review on <b>Amazon</b>
                      </span>
                      <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                    </a>
                  </div>
                  <div class="card-body-wrapper">
                    <div class="card-body">
                      <p class="review">Every year, the coming of autumn for me means depression, tiredness, long sleeps and
                        and exhaustion in the afternoon! I spoke about it to the doctor who advised me to try
                        the Luminette. I decided to buy it and use it every morning. So , I
                        eat
                        my breakfast with the Luminette on, without any discomfort, for 20 minutes. It allows me to
                        move around and see what I'm doing, unlike the old devices that
                        stayed
                        on the table, and which, according to the studies carried out, were useless because the luminosity of the
                        the leds did not come from higher than head level and thus did not reach the
                        eye's sensors...
                        Now, I feel fit and healthy during the day, and if during winter I feel tired after lunch, I do a
                        I do a session again. This way, my body stops producing melatonin and my energy
                        comes back, I feel better about myself and I'm in a better mood!
                      </p>
                      <button class="fw-bolder expand">Show more</button>
                      <div class="date">21 December 2020</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="slide">
                <div class="card">
                  <div class="card-header text-center">
                    <picture class="avatar d-block">
                      <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/3@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/3.png 1x"/>
                      <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/3.png" alt="Customer avatar">
                    </picture>
                    <div class="h4 name fw-bolder">Maïté T.</div>
                    <a href="https://www.amazon.fr/gp/customer-reviews/R1GSLSI9OTO56U/ref=cm_cr_arp_d_rvw_ttl?ie=UTF8&ASIN=B07VMRRB9Y" target="_blank" class="link">
                      <span>
                        Review on <b>Amazon</b>
                      </span>
                      <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                    </a>
                  </div>
                  <div class="card-body-wrapper">
                    <div class="card-body">
                      <p class="review">"I have fibromyalgia, major sleep problems, and an obvious lack of energy when the
                        sun
                        goes away. My neurologist recommended your glasses. I am delighted, I have
                        more energy, but unfortunately this does not affect my pain. But since I'm in better shape, I think it's really great!
                        Autumn and winter no longer scare me thanks to these glasses.
                        I am ready to face them! I really recommend it and I can't stop talking about it to everyone
                        around me."
                      </p>
                      <button class="fw-bolder expand">Show more</button>
                      <div class="date">21 December 2020</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="slide">
                <div class="card">
                  <div class="card-header text-center">
                    <picture class="avatar d-block">
                      <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/5@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/5.png 1x"/>
                      <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/5.png" alt="Customer avatar">
                    </picture>
                    <div class="h4 name fw-bolder">Muriel V.</div>
                    <a href="https://www.google.com/maps/contrib/107266988971890423777/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@50.5779487,5.2632398,17z/data=!4m6!1m5!8m4!1e2!2s107266988971890423777!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                      <span>
                        Review on <b>Google maps</b>
                      </span>
                      <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                    </a>
                  </div>
                  <div class="card-body-wrapper">
                    <div class="card-body">
                      <p class="review">"I was prescribed it by my neurologist for my sleep disorders and epilepsy, and now I
                        can't
                        do without it anymore. The fact that they are glasses is very practical because you can do
                        things (like brushing your teeth, eating lunch, reading or even starting work).
                        start working). They are delivered with a very practical cover for storage
                        and/or for travelling.
                        I just don't recommend using them in a dark room.
                        "
                      </p>
                      <button class="fw-bolder expand">Show more</button>
                      <div class="date">21 December 2020</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="slide">
                <div class="card">
                  <div class="card-header text-center">
                    <picture class="avatar d-block">
                      <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/6@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/6.png 1x"/>
                      <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/6.png" alt="Customer avatar">
                    </picture>
                    <div class="h4 name fw-bolder">Rita R.</div>
                    <a href="https://www.google.com/maps/contrib/100137502211655470427/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@50.6323126,5.3985949,11z/data=!4m6!1m5!8m4!1e1!2s100137502211655470427!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                      <span>
                        Review on <b>Google maps</b>
                      </span>
                      <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                    </a>
                  </div>
                  <div class="card-body-wrapper is-visible">
                    <div class="card-body">
                      <p class="review">"After 5 days of using my luminette, I already feel better...
                        Try it and you'll never stop using it.
                        I've been wearing it for 3 years in autumn for 20 minutes a day ... while having breakfast"
                      </p>
                      <div class="date">21 December 2020</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="slide">
                <div class="card">
                  <div class="card-header text-center">
                    <picture class="avatar d-block">
                      <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/7@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/7.png 1x"/>
                      <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/7.png" alt="Customer avatar">
                    </picture>
                    <div class="h4 name fw-bolder">Audrey B.</div>
                    <a href="https://www.google.com/maps/contrib/105110317360703574808/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@50.5779487,5.2632398,17z/data=!4m6!1m5!8m4!1e2!2s105110317360703574808!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                      <span>
                        Review on <b>Google maps</b>
                      </span>
                      <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                    </a>
                  </div>
                  <div class="card-body-wrapper is-visible">
                    <div class="card-body">
                      <p class="review">"I am very happy with the luminette! (I have the luminette 3). I have better sleep cycles
                        and they help me to wake up in the morning (as well as a coffee). Plus they are
                        easy to wear. Every morning I tell myself that I did the right thing by buying them! I
                        recommend them!
                        "
                      </p>
                      <div class="date">21 December 2020</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="slide">
                <div class="card">
                  <div class="card-header text-center">
                    <picture class="avatar d-block">
                      <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/8@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/8.png 1x"/>
                      <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/8.png" alt="Customer avatar">
                    </picture>
                    <div class="h4 name fw-bolder">Christopher T.</div>
                    <a href="https://www.google.com/maps/contrib/105475160819624793335/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@50.5779487,5.2632398,17z/data=!4m6!1m5!8m4!1e2!2s105475160819624793335!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                      <span>
                        Review on <b>Google maps</b>
                      </span>
                      <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                    </a>
                  </div>
                  <div class="card-body-wrapper is-visible">
                    <div class="card-body">
                      <p class="review">"I am delighted with model 2.
                        The Luminette is easy to use and allows me to be active in the morning and makes it easier
                        to fall asleep. My neurologist gave me good advice!
                        I will probably switch to model 3 in the future...
                        "
                      </p>
                      <div class="date">21 December 2020</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="slide">
                <div class="card">
                  <div class="card-header text-center">
                    <picture class="avatar d-block">
                      <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/9@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/9.png 1x"/>
                      <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/9.png" alt="Customer avatar">
                    </picture>
                    <div class="h4 name fw-bolder">Gregory E.</div>
                    <a href="https://www.google.com/maps/contrib/117879807108998873428/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@50.3197246,6.3556338,7.58z/data=!4m4!1m3!8m2!1e1!2s117879807108998873428?hl=fr-BE" target="_blank" class="link">
                      <span>
                        Review on <b>Google maps</b>
                      </span>
                      <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                    </a>
                  </div>
                  <div class="card-body-wrapper is-visible">
                    <div class="card-body">
                      <p class="review">"I have had my luminettes 3 since March 2020 and I can't do without them anymore, they are perfect
                        for
                        jet lag or sleep disorders.
                        "
                      </p>
                      <div class="date">21 December 2020</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="slide">
                <div class="card">
                  <div class="card-header text-center">
                    <picture class="avatar d-block">
                      <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/10@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/10.png 1x"/>
                      <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/10.png" alt="Customer avatar">
                    </picture>
                    <div class="h4 name fw-bolder">Florence M.</div>
                    <a href="https://www.google.com/maps/contrib/114308199652100072679/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@50.5779487,5.2632398,17z/data=!4m6!1m5!8m4!1e2!2s114308199652100072679!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                      <span>
                        Review on <b>Google maps</b>
                      </span>
                      <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                    </a>
                  </div>
                  <div class="card-body-wrapper is-visible">
                    <div class="card-body">
                      <p class="review">I have had them for a year now. They were recommended to me by my therapist, and I feel a real improvement in my mood and fatigue.
                      </p>
                      <div class="date">21 December 2020</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="slide">
                <div class="card">
                  <div class="card-header text-center">
                    <picture class="avatar d-block">
                      <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/11@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/11.png 1x"/>
                      <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/11.png" alt="Customer avatar">
                    </picture>
                    <div class="h4 name fw-bolder">Guillaume M.</div>
                    <a href="https://www.google.com/maps/contrib/101195112554299989422/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@4.6513087,89.2730014,3z/data=!4m6!1m5!8m4!1e2!2s101195112554299989422!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                      <span>
                        Review on <b>Google maps</b>
                      </span>
                      <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                    </a>
                  </div>
                  <div class="card-body-wrapper">
                    <div class="card-body">
                      <p class="review">"I have been suffering from seasonal depression for years, so I decided to try light therapy
                        to compensate for the lack of winter sunshine, and I chose the ""glasses"" model
                        for the convenience of being able to do my morning routine and not having to stay glued
                        to
                        a light panel.
                        The results were quick, the usual sluggishness and general tiredness have almost disappeared and
                        and another benefit that I had not foreseen was that my tendency to have trouble falling asleep
                        in the evening vanished too, probably due to a readjustment of the
                        circadian rhythm...
                        All in all, it's an investment, but I don't regret it at all, and my
                        wife has also started using it too!
                        "
                      </p>
                      <button class="fw-bolder expand">Show more</button>
                      <div class="date">21 December 2020</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="slide">
                <div class="card">
                  <div class="card-header text-center">
                    <div class="avatar"></div>
                    <div class="h4 name fw-bolder">Andi Philip</div>
                    <a href="#" target="_blank" class="link">
                      <span>
                        Review on <b>Facebook</b>
                      </span>
                      <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                    </a>
                  </div>
                  <div class="card-body-wrapper">
                    <div class="card-body">
                      <p class="review">"I had a small Phillips light box previously, and it was a hassle to sit at the right angle,
                        distance, and time. With these, I don’t have to worry about any of those things. I just put
                        them
                        on, push the button, and wear them until they turn off. Easy to use whether I’m wearing my
                        glasses or contacts. Also, these don’t give me headaches like the Phillips light box did!
                        We have almost 4 people in my household wearing these every day — I will be buying a second
                        pair
                        soon! (Two of us have sleep past disorder and everyone seems to get a mood boost!)"
                      </p>
                      <button class="fw-bolder expand">Show more</button>
                      <div class="date">21 December 2020</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="slide">
                <div class="card">
                  <div class="card-header text-center">
                    <picture class="avatar d-block">
                      <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/13@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/13.png 1x"/>
                      <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/13.png" alt="Customer avatar">
                    </picture>
                    <div class="h4 name fw-bolder">Patricia</div>
                    <a href="#" target="_blank" class="link">
                      <span>
                        Review on <b>Facebook</b>
                      </span>
                      <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                    </a>
                  </div>
                  <div class="card-body-wrapper is-visible">
                    <div class="card-body">
                      <p class="review">"Used medically for depression. These glasses have brought me a significant
                        improvement. Not awkward to wear, the light improves my mood, brings me
                        comfort,
                        and they are very useful.
                        "
                      </p>
                      <div class="date">21 December 2020</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="slide">
                <div class="card">
                  <div class="card-header text-center">
                    <picture class="avatar d-block">
                      <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/14@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/14.png 1x"/>
                      <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/14.png" alt="Customer avatar">
                    </picture>
                    <div class="h4 name fw-bolder">Hélène</div>
                    <a href="https://www.google.com/maps/contrib/116715457571293643665/reviews/@49.9994005,2.560789,8z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                      <span>
                        Review on <b>Google maps</b>
                      </span>
                      <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                    </a>
                  </div>
                  <div class="card-body-wrapper">
                    <div class="card-body">
                      <p class="review">"You should do this as soon as you get up, the Luminette is quickly forgotten and you can go about your
                        your business. From the very first time you use it, you'll quickly feel
                        more awake and the mid-morning or afternoon slumps disappear quickly.
                        Really impressed.
                        "
                      </p>
                      <button class="fw-bolder expand">Show more</button>
                      <div class="date">21 December 2020</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="slide">
                <div class="card">
                  <div class="card-header text-center">
                    <div class="avatar"></div>
                    <div class="h4 name fw-bolder">Anthony</div>
                    <a href="https://www.google.com/maps/contrib/103414070215570066252/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@50.5779487,5.2632398,17z/data=!4m6!1m5!8m4!1e2!2s103414070215570066252!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                      <span>
                        Review on <b>Google maps</b>
                      </span>
                      <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                    </a>
                  </div>
                  <div class="card-body-wrapper is-visible">
                    <div class="card-body">
                      <p class="review">"I have been a user for more than ten years... the luminette has always helped me to get ""balanced"" during my night or early morning shifts
                        at work ... you feel better very quickly.
                        Reliable product and easy to use.
                        "
                      </p>
                      <div class="date">21 December 2020</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="slide">
                <div class="card">
                  <div class="card-header text-center">
                    <picture class="avatar d-block">
                      <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/15@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/15.png 1x"/>
                      <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/15.png" alt="Customer avatar">
                    </picture>
                    <div class="h4 name fw-bolder">Muriel T.</div>
                    <a href="https://www.google.com/maps/contrib/105183132711717313101/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@50.5779487,5.2610511,17z/data=!4m6!1m5!8m4!1e2!2s105183132711717313101!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                      <span>
                        Read the review on <b>Google </b>
                      </span>
                      <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                    </a>
                  </div>
                  <div class="card-body-wrapper">
                    <div class="card-body">
                      <p class="review">"I bought the Luminette to help me fight the winter blues. I use it every morning
                        when
                        I get up. What I like about the Luminette is that I can choose the length of the session (20, 30 or 60 minutes)
                        depending on my availability, and that I can go about my business during the session
                        (no need to stay in front of a lamp placed on the table). After
                        a few
                        days of use, I already noticed the result: no more depression on grey and rainy days.
                        Over time, I have felt less tired and have more energy. I really
                        recommend
                        the Luminette.
                        "
                      </p>
                      <button class="fw-bolder expand">Show more</button>
                      <div class="date">21 December 2020</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="slide">
                <div class="card">
                  <div class="card-header text-center">
                    <picture class="avatar d-block">
                      <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/12@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/12.png 1x"/>
                      <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/12.png" alt="Customer avatar">
                    </picture>
                    <div class="h4 name fw-bolder">Aurélie</div>
                    <a href="https://www.amazon.fr/gp/customer-reviews/RWZSN5SZJF573/ref=cm_cr_getr_d_rvw_ttl?ie=UTF8&ASIN=B07VMRRB9Y" target="_blank" class="link">
                      <span>
                        Review on <b>Amazon</b>
                      </span>
                      <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                    </a>
                  </div>
                  <div class="card-body-wrapper">
                    <div class="card-body">
                      <p class="review">"For years, I have suffered from seasonal depression. I have been advised by health professionals
                        (general practitioner, psychiatrist, psychologist and pharmacist) have advised me to
                        use
                        light therapy to improve my state in the fall and winter.
                        I hesitated for a long time and then I discovered the Luminette.
                        I use it in the morning, either while going about my business (breakfast, brushing my
                        teeth brushing...) or when I'm reading. After the session, I have much more energy and
                        motivation to face the day.
                        It is very practical because it can be worn at the same time as my glasses or
                        computer glasses.
                        They are made of a rather rigid plastic, but they seem to be strong.
                        They charge quite quickly. A charging indicator lets you know when it is finished.
                        Once charged, they can be used about 10 times.
                        There are 3 modes. The more powerful the light, the shorter the exposure time.
                        What is very practical is that you don't have to watch the time because they turn off by themselves once the
                        the session is over. The only small ""downside"" is that the most powerful mode
                        can be glaring when the surrounding light is weak.
                        I would recommend this product without hesitation, since it gives me a real moral boost
                        during short days.
                        "
                      </p>
                      <button class="fw-bolder expand">Show more</button>
                      <div class="date">21 December 2020</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class='lav-show-reviews lav-observe'>Show more</div>
          </div>

          <div class='lav-reviews__total'>
            <div class='lav-reviews__total-col'>
              <div class='lav-reviews__total-image'>
                <img src='${settings.dir}/img/reviews-trusted.svg' />
              </div>
              <div class='lav-reviews__total-info'>
                <div class='lav-reviews__total-score'>4.5</div>
                <div class='lav-reviews__total-stars'>
                  <img src='${settings.dir}/img/reviews-stars.svg' />
                </div>
                <a href='https://www.trustedshops.be/fr/evaluation/info_X5CFE61C0E26F14D751206ABEDADF025D.html&amp;utm_source=shop&amp;utm_medium=link&amp;utm_content=trustcard&amp;utm_campaign=trustbadge' target="_blank" class='lav-reviews__total-caption'>See reviews on <span>Trusted shops</span></a>
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
                <a href='https://www.amazon.com/New-Model-Luminette-Therapy-Glasses/dp/B07VMRRB9Y?ref_=ast_bbp_dp' target="_blank" class='lav-reviews__total-caption'>See reviews on <span>Amazon</span></a>
              </div>
            </div>
          </div>

          <div class='lav-reviews__preview-list lav-observe'>
            <div class='lav-reviews__preview' style='background-image: url(https://flopsi69.github.io/crs/myluminette/checkout/img/en-preview-review1.png);'>
              <div class="lav-reviews__play lav-open-modal" data-target='.lav-review-modal' data-name='Video before footer, first' data-src='https://www.youtube.com/embed/ye4x3DkSbvA?autoplay=0&start=0&showinfo=0&rel=0'>
                <img class='lav-reviews__play-btn' src='${settings.dir}/img/play.svg' />
                <img class='lav-reviews__play-btn' src='${settings.dir}/img/play-hover.svg' />
              </div>
            </div>

            <div class='lav-reviews__preview' style='background-image: url(https://flopsi69.github.io/crs/myluminette/checkout/img/en-preview-review2.png);'>
              <div class="lav-reviews__play lav-open-modal" data-target='.lav-review-modal' data-name='Video before footer, second' data-src='https://www.youtube.com/embed/hZpBFn_YKMY?autoplay=0&start=0&showinfo=0&rel=0'>
                <img class='lav-reviews__play-btn' src='${settings.dir}/img/play.svg' />
                <img class='lav-reviews__play-btn' src='${settings.dir}/img/play-hover.svg' />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class='lav-trial lav-section'>
        <div class='container-fluid container--size--lg lav-trial__container'>
          <div class='lav-trial__row lav-observe'>
            <div class='lav-trial__image'>
              <img src='${settings.dir}/img/trial.png' />
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

            <div class='lav-trial__info'>
              <div class='lav-trial__title lav-title'>30 Day <br/> <span>Light Therapy Trial</span></div>
              <div class='lav-trial__descr lav-descr'>Test out Luminette's patented light therapy for an entire 30 days, and if you aren't satisfied, send it back and we'll refund you!</div>

              <div class='lav-trial__buttons'>
                <div class='lav-trial__btn lav-trial__btn-refresh lav-tooltip-wrap'>
                  <img src='${settings.dir}/img/icon-refresh.svg' />
                  <span>
                    30-day trial
                  </span>
                  <div class="tooltip d-sm-flex ml-2">
                    <img class='lav-info-invert' src="https://conversionratestore.github.io/projects/luminette/img/info.svg" alt="info"/>
                    <div class="tooltip-dropdown text-left fs-16">
                      <div class="tooltip-item">
                        <p class="mb-2">
                          <b class="fw-semi">You have a whole month to trial your Luminette.</b> We recommend that you use Luminette consistently for a minimum of 10 consecutive days.
                        </p>
                        <p>
                          However, if you’re dissatisfied, you can choose to be refunded for your Luminette within 30 days of purchase. See more details on our <a href="/delivery#returns-block" class="tooltip__link">Refunds page</a>.
                        </p>
                      </div> 
                    </div>
                  </div>
                </div>
                <div class='lav-trial__btn lav-trial__btn-box lav-tooltip-wrap'>
                  <img src='${settings.dir}/img/icon-box-2.svg' />
                  <span>
                    Free shipping
                  </span>
                  <div class="tooltip d-sm-flex ml-2">
                    <img class='lav-info-invert' src="https://conversionratestore.github.io/projects/luminette/img/info.svg" alt="info"/>
                    <div class="tooltip-dropdown text-left fs-16">
                      <div class="tooltip-item lav-delivery__plate">
                        <div class="tooltip_free text-center mb-2">
                          <div class="d-flex align-items-center justify-content-center mb-2 pb-1">
                            <img class='lav-delivery__plate-flags' height='24' src="${settings.dir}/img/flags.png" alt="">
                          </div>
                          <div class='lav-delivery__plate-caption'> Free for USA and Canada: <div class="fw-bold d-block">3 to 5 working days</div></div>
                        </div>
                        <div class="d-flex align-items-center justify-content-center mb-2 py-1">
                          <img class="mr-2 lav-delivery__plate-service" src="${settings.dir}/img/delivery-methods.png" />
                        </div>
                        <p class="lav-delivery__descr">Orders are shipped from our logistics center located in Boise, Idaho. We use the services of FedEx Ground or USPS. Before they deliver your package, the carrier sends you an email warning you of the day of its passage.</p>
                      </div> 
                    </div>
                  </div>
                </div>
              </div>

              <div class='lav-trial__action'>
                <button class='lav-trial__get lav-btn btn-primary btn-lg flipped lav-btn-buy'>
                  <span class="btn-text">Buy $199</span>
                  <span class="btn-bg-wrapper"></span>
                </button>

                <div class='lav-trial__guarantee'>
                  <img src='${settings.dir}/img/guarantee.svg' />
                  30 days money-back guarantee
                </div>
                <div class='lav-trial__refund'>If you don’t get any results, we will refund you&nbsp;100%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class='lav-drive lav-section'>
        <div class='lav-drive__caption'>Discover our new product</div>
        <div class='lav-drive__title'>Drive</div>
        <img class='lav-drive__device' src='${settings.dir}/img/drive-device.png' />
        <div class='lav-drive__bg container'>
          <div class='lav-drive__bg-title'>Benefit from light therapy while driving</div>

          <div div class='lav-drive__actions'>
            <button class='lav-drive__btn btn-primary btn-lg flipped lav-btn-buy-drive'>
              <span class="btn-text">
                Buy $149
              </span>
              <span class="btn-bg-wrapper"></span>
            </button>

            <div class='lav-drive__learn'>Learn more</div>
          </div>
        </div>
      </section>

      <div class='lav-modal'>
        <div class='lav-modal__inner lav-review-modal'>
          <div class='lav-modal__close'>
            <img src='${settings.dir}/img/modal-close.svg'>
          </div>

          <iframe width="840" height="480" src="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </main>
  `;

  if (detectLang() == 'fr') {
    newPage = `
    <main class='lav-wrap'>
      <section class='lav-jumb lav-section'>
        <div class='container-fluid container--size--md lav-jumb__container'>
          <div class='lav-jumb__info'>
            <div class='lav-jumb__title'>Combattez le blues hivernal et optimisez votre sommeil</div>

            <div class='lav-jumb__descr lav-descr'>
              Il est scientifiquement prouvé que la Luminette permet de vaincre le blues de l'hiver en rétablissant votre humeur et votre énergie en seulement 30 minutes par jour.
            </div>

            <div class='lav-jumb__actions'>
              <button class='lav-jumb__btn btn-primary btn-lg flipped lav-btn lav-btn-buy'>
                <span class="btn-text">
                  Commandez la Luminette3&nbsp;maintenant
                </span>
                <span class="btn-bg-wrapper"></span>
              </button>

              <div class='lav-jumb__learn'>En savoir plus</div>
            </div>
          </div>
        </div>
      </section>

      <section class='lav-boost lav-section'>
        <div class='container-fluid container--size--md lav-boost__container'>
          <div class='lav-boost__inner lav-plate'>
            <div class='lav-boost__image'>
              <img class='lav-boost__stars' src='${settings.dir}/img/boost-person.svg' />
            </div>

            <div class='lav-boost__info'>
              <div class='lav-boost__title'>Plus de 150 000 personnes ont retrouvé leur énergie avec la Luminette</div>
              <img class='lav-boost__stars' src='${settings.dir}/img/stars.svg' />
              <div class='lav-boost__caption'>1049 avis sur Amazon et Trustedshop</div>
            </div>
          </div>
        </div>
      </section>

      <section class='lav-wears lav-section'>
        <div class='container-fluid container--size--lg lav-wears__container'>
          <div class='lav-wears__title lav-title'>Portez la Luminette 30 minutes par jour pour...</div>

          <div class='lav-wears__grid'>
            <div class='lav-wear' style='background-image: url("${settings.dir}/img/benefit1-bg.jpeg")'>
              <div class='lav-wear__info'>
                <div class='lav-wear__icon'>
                  <img src='${settings.dir}/img/benefit1.svg' />
                </div>
                <div class='lav-wear__title'>Combattre le blues hivernal</div>
                <div class='lav-wear__list'>
                  <div class='lav-wear__item'>Faire face au blues hivernal et aux changements de saison</div>
                  <div class='lav-wear__item'>Réguler vos rythmes circadiens</div>
                  <div class='lav-wear__item'>Améliorer sa santé</div>
                </div>
              </div>
            </div>

            <div class='lav-wear' style='background-image: url("${settings.dir}/img/benefit2-bg.jpeg")'>
              <div class='lav-wear__info'>
                <div class='lav-wear__icon'>
                  <img src='${settings.dir}/img/benefit3.svg' />
                </div>
                <div class='lav-wear__title'>Booster votre niveau d'énergie</div>
                <div class='lav-wear__list'>
                  <div class='lav-wear__item'>Réduire la fatigue et l'irritabilité</div>
                  <div class='lav-wear__item'>Se sentir plus énergique</div>
                  <div class='lav-wear__item'>Améliorer les performances mentales et physiques</div>
                </div>
              </div>
            </div>

            <div class='lav-wear' style='background-image: url("${settings.dir}/img/benefit3-bg.jpeg")'>
              <div class='lav-wear__info'>
                <div class='lav-wear__icon'>
                  <img src='${settings.dir}/img/benefit2.svg' />
                </div>
                <div class='lav-wear__title'>Améliorer votre sommeil</div>
                <div class='lav-wear__list'>
                  <div class='lav-wear__item'>Se réveiller moins souvent la nuit</div>
                  <div class='lav-wear__item'>S'endormir plus facilement</div>
                  <div class='lav-wear__item'>Se réveiller en pleine forme</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class='lav-drinks lav-section'>
        <div class='container-fluid container--size--sm lav-drinks__container'>
          <div class='lav-drinks__inner lav-plate'>
            <div class='lav-drinks__image'>
              <img src='${settings.dir}/img/cup.svg' />
            </div>
            <div class='lav-drinks__info'>
              <div class='lav-drinks__title'>Substitut naturel de la caféine et des boissons énergisantes</div>
              <div class='lav-drinks__caption'>Vous pouvez également utiliser la luminothérapie pour rester en forme pendant la journée.</div>
            </div>
          </div>

          <div class='lav-drinks__btn-wrap'>
            <button class='lav-drinks__btn btn-primary btn-lg flipped lav-btn lav-btn-buy'>
              <span class="btn-text">
                Commandez la Luminette3&nbsp;maintenant
              </span>
              <span class="btn-bg-wrapper"></span>
            </button>
          </div>
        </div>
      </section>

      <section class='lav-shorts__wrap lav-section'>
        <div class='container-fluid container--size--lg'>
          <div class="lav-shorts lav-observe">
            <div class="lav-shorts__title text-center">Plus de 150 000 personnes ont augmenté leur énergie grâce à Luminette</div>
            <div class="lav-shorts__caption text-center">Voici ce que nos utilisateurs disent après avoir utilisé Luminette</div>

            <div class="splide lav-shorts__splide">
              <div class="splide__track">
                <div class="lav-shorts__list splide__list">
                  <div class='lav-shorts__item splide__slide'>
                    <div class='lav-shorts__preview lav-open-modal' data-name='Nathalie' data-target='.lav-review-modal' data-src='https://www.youtube.com/embed/RxwTebJqdYY?autoplay=1'>
                      <img  src="https://flopsi69.github.io/crs/myluminette/checkout/video/1.jpg" />
                    </div>
                    <div class='lav-shorts__info'>
                      <div class='lav-shorts__stars'>
                        <img  src="https://flopsi69.github.io/crs/myluminette/checkout/img/stars-shorts.svg" />
                      </div>
                      <div class='lav-shorts__quote'>
                        “Après 6 jours, je n’avais déjà plus de réveils nocturnes”
                      </div>
                      <div class='lav-shorts__inst'>
                        <img  src="https://flopsi69.github.io/crs/myluminette/checkout/img/icon-inst.svg" />
                        </span>Nathalie</span>
                      </div>
                    </div>
                  </div>
                  
                  <div class='lav-shorts__item splide__slide'>
                    <div class='lav-shorts__preview lav-open-modal' data-target='.lav-review-modal' data-name='Audrey' data-src='https://www.youtube.com/embed/r7GLkPblufc?autoplay=1'>
                      <img  src="https://flopsi69.github.io/crs/myluminette/checkout/video/2.jpg" />
                    </div>
                    <div class='lav-shorts__info'>
                      <div class='lav-shorts__stars'>
                        <img  src="https://flopsi69.github.io/crs/myluminette/checkout/img/stars-shorts.svg" />
                      </div>
                      <div class='lav-shorts__quote'>
                        “Je dors mieux, mes cycles de sommeil sont recalés”
                      </div>
                      <div class='lav-shorts__inst'>
                        <img  src="https://flopsi69.github.io/crs/myluminette/checkout/img/icon-inst.svg" />
                        </span>Audrey</span>
                      </div>
                    </div>
                  </div>

                  <div class='lav-shorts__item splide__slide'>
                    <div class='lav-shorts__preview lav-open-modal' data-target='.lav-review-modal' data-name='Louis' data-src='https://www.youtube.com/embed/T3hD1MZlmuU?autoplay=1'>
                      <img  src="https://flopsi69.github.io/crs/myluminette/checkout/video/3.jpg" />
                    </div>
                    <div class='lav-shorts__info'>
                      <div class='lav-shorts__stars'>
                        <img  src="https://flopsi69.github.io/crs/myluminette/checkout/img/stars-shorts.svg" />
                      </div>
                      <div class='lav-shorts__quote'>
                        “La Luminette est légère, design et facile d’utilisation”
                      </div>
                      <div class='lav-shorts__inst'>
                        <img  src="https://flopsi69.github.io/crs/myluminette/checkout/img/icon-inst.svg" />
                        </span>Louis</span>
                      </div>
                    </div>
                  </div>

                  <div class='lav-shorts__item splide__slide'>
                    <div class='lav-shorts__preview lav-open-modal' data-name='Alexia' data-target='.lav-review-modal' data-src='https://www.youtube.com/embed/0NZRHK722-E?autoplay=1'>
                      <img  src="https://flopsi69.github.io/crs/myluminette/checkout/video/4.jpg" />
                    </div>
                    <div class='lav-shorts__info'>
                      <div class='lav-shorts__stars'>
                        <img  src="https://flopsi69.github.io/crs/myluminette/checkout/img/stars-shorts.svg" />
                      </div>
                      <div class='lav-shorts__quote'>
                        “Au bout de 10 jours, je me sentais beaucoup plus en forme pendant la journée.”
                      </div>
                      <div class='lav-shorts__inst'>
                        <img  src="https://flopsi69.github.io/crs/myluminette/checkout/img/icon-inst.svg" />
                        </span>Alexia</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section class='lav-morning lav-section'>
        <div class='container-fluid container--size--lg lav-morning__container'>
          <div class='lav-morning__plate'>
            <div class='lav-morning__preview lav-open-modal' data-target='.lav-review-modal' data-src='https://www.youtube.com/embed/rnpVhWWRUDI?autoplay=0&start=0&showinfo=0&rel=0'>
              <img src='${settings.dir}/img/play.svg' />
              <img src='${settings.dir}/img/play-hover.svg' />
            </div>
            <div class='lav-morning__info'>
              <div class='lav-morning__title lav-title'>Le complément parfait à votre routine matinale&nbsp;:</div>
              
              <div class='lav-morning__descr lav-descr'>Portez la Luminette pendant que vous vous brossez les dents, prenez votre petit-déjeuner ou travaillez sur votre ordinateur - le complément parfait à toute routine matinale</div>

              <div class='lav-morning__list'>
                <div class='lav-morning__item'>
                  <div class='lav-morning__image'>
                    <img src='${settings.dir}/img/morning1.svg' />
                  </div>
                  <div class='lav-morning__caption'>
                    Les séances durent entre <br /><span> 20 et 45 minutes</span>
                  </div>
                </div>
                <div class='lav-morning__item'>
                  <div class='lav-morning__image'>
                    <img src='${settings.dir}/img/morning2.svg' />
                  </div>
                  <div class='lav-morning__caption'>
                    À utiliser <span>une fois par jour</span>
                  </div>
                </div>
                <div class='lav-morning__item'>
                  <div class='lav-morning__image'>
                    <img src='${settings.dir}/img/morning3.svg' />
                  </div>
                  <div class='lav-morning__caption'>
                    Ressentez les bienfaits dans les <br /><span>4 à 6 jours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class='lav-cases lav-section'>
        <div class='container-fluid container--size--lg lav-cases__container'>
          <div class='lav-cases__title lav-title'>Portez la Luminette tout en...</div>

          <div class='lav-cases__list'>
            <div class='lav-case'>
              <div class='lav-case__image'>
                <img src='${settings.dir}/img/case1.jpeg' />
              </div>
              <div class='lav-case__caption lav-descr'>Préparant le petit-déjeuner</div>
            </div>

            <div class='lav-case'>
              <div class='lav-case__image'>
                <img src='${settings.dir}/img/case2.jpeg' />
              </div>
              <div class='lav-case__caption lav-descr'>Vous brossant les dents</div>
            </div>

            <div class='lav-case'>
              <div class='lav-case__image'>
                <img src='${settings.dir}/img/case3.jpeg' />
              </div>
              <div class='lav-case__caption lav-descr'>Travaillant à l'ordinateur</div>
            </div>

            <div class='lav-case'>
              <div class='lav-case__image'>
                <img src='${settings.dir}/img/case4.jpeg' />
              </div>
              <div class='lav-case__caption lav-descr'>Faisant des exercices légers</div>
            </div>
          </div>
        </div>
      </section>

      <section class='lav-results lav-section'>
        <div class='container-fluid container--size--lg lav-results__container'>
          <div class='lav-results__title lav-title'>Obtenez des résultats en seulement 7&nbsp;jours</div>

          <div class='lav-results__row'>
            <div class="lav-results__item">
              <div class="lav-results__item-title">Commandez la Luminette&nbsp;3</div>
              <div class="lav-results__circle"></div>
              <div class="lav-results__item-caption">Aujourd'hui</div>
            </div>

            <div class="lav-results__item">
              <div class="lav-results__item-title">Portez la Luminette&nbsp;3</div>
              <div class="lav-results__circle"></div>
              <div class="lav-results__item-caption">20 minutes x 7 jours</div>
            </div>

            <div class="lav-results__item">
              <div class="lav-results__item-title">Sentez-vous en pleine forme et améliorez votre sommeil</div>
              <div class="lav-results__circle"></div>
              <div class="lav-results__item-caption">Après 4-7 jours</div>
            </div>
          </div>

          <button class='lav-results__btn btn-primary lav-mob btn-lg flipped lav-btn lav-btn-buy'>
            <span class="btn-text">
              Commandez la Luminette3&nbsp;maintenant
            </span>
            <span class="btn-bg-wrapper"></span>
          </button>
        </div>
      </section>

      <section class='lav-benefits lav-section'>
        <div class='container-fluid container--size--lg lav-benefits__container'>
          <div class='lav-benefits__inner'>
            <div class='lav-benefits__title lav-title'>Quels sont les avantages&nbsp;?</div>

            <div class='lav-benefits__list'>
              <div class='lav-benefit'>
                <div class='lav-benefit__icon'>
                  <img src='${settings.dir}/img/benefit2-1.svg' />
                </div>
                <div class='lav-benefit__title'>Légèreté et confort</div>
                <div class='lav-benefit__caption lav-descr'>Ne pèse que 51 g et est doté d'un support nasal ergonomique.</div>
              </div>
              <div class='lav-benefit'>
                <div class='lav-benefit__icon'>
                  <img src='${settings.dir}/img/benefit2-2.svg' />
                </div>
                <div class='lav-benefit__title'>N'entrave pas votre vision</div>
                <div class='lav-benefit__caption lav-descr'>Le système d'éclairement breveté vous permet de bénéficier de la luminothérapie sans perturber votre vision.</div>
              </div>
              <div class='lav-benefit'>
                <div class='lav-benefit__icon'>
                  <img src='${settings.dir}/img/benefit2-3.svg' />
                </div>
                <div class='lav-benefit__title'>Compatible avec les lunettes</div>
                <div class='lav-benefit__caption lav-descr'>Portez la Luminette par-dessus vos lunettes</div>
              </div>
            </div>

            <button class='lav-benefit__btn lav-btn btn-primary btn-lg flipped lav-btn-buy'>
              <span class="btn-text">
                Commandez la Luminette3&nbsp;maintenant
              </span>
              <span class="btn-bg-wrapper"></span>
            </button>
          </div>
        </div>
      </section>

      <section class='lav-lucimed lav-section'>
        <div class='container-fluid container--size--sm lav-lucimed__container'>
          <div class='lav-lucimed__inner'>
            <div class='lav-lucimed__info'>
              <div class='lav-lucimed__title lav-title'>Lucimed - Pionniers de la luminothérapie</div>
              <div class='lav-lucimed__image lav-mob'>
                <img src='${settings.dir}/img/lucimed.png' />
              </div>
              <div class='lav-lucimed__descr lav-descr'>
              La société belge Lucimed, spécialisée dans les technologies de la santé, a été la première à mettre au point une lampe de luminothérapie portable. <br class='lav-mob' /><br />Des années de recherche menées par des chercheurs en optique et un professeur des troubles du sommeil ont donné naissance à la Luminette 3 - un dispositif qui vous aide à optimiser votre sommeil et votre bien-être mental grâce au pouvoir de la luminothérapie.
              </div>
              <a href="/clinical-study" class='lav-lucimed__link'>
                En savoir plus sur la recherche scientifique sur les Luminette<svg class="icon icon-xs"><use xlink:href="#arrow-right"></use></svg>
              </a>
            </div>

            <div class='lav-lucimed__image lav-desk'>
              <img src='${settings.dir}/img/lucimed.png' />
            </div>
          </div>
        </div>
      </section>

      <section class='lav-works lav-section'>
        <div class='container-fluid container--size--sm lav-works__container'>
          <div class='lav-works__row'>
            <div class='lav-works__info'>
              <div class='lav-works__title lav-title'>La science derrière la Luminette</div>

              <div class='lav-works__image lav-mob'>
                <img src='${settings.dir}/img/works.png' />
              </div>

              <div class='lav-works__item'>
                <div class='lav-works__item-title'>Un système de luminothérapie innovant et breveté, pour un confort optimal.</div>
                <div class='lav-works__item-descr lav-descr'>La technologie innovante de la Luminette émet un doux faisceau de lumière vers les yeux, juste au-dessus du niveau des yeux. Cela imite la lumière naturelle du soleil, sans gêner la vue.</div>
              </div>

              <div class='lav-works__item'>
                <div class='lav-works__item-title'>Une lumière blanche enrichie en bleue pour une plus grande efficacité.</div>
                <div class='lav-works__item-descr lav-descr'>La Luminette 3 émet une lumière blanche enrichie en bleu, avec un pic à 468 nm. Il est prouvé que cette longueur d'onde est la plus efficace pour déclencher la réponse positive du corps à la lumière du soleil.</div>
              </div>
            </div>
            
            <div class='lav-works__image lav-desk'>
              <img src='${settings.dir}/img/works.png' />
            </div>
          </div>
        </div>
      </section>

      <section class='lav-study__wrap lav-section'>
        <div class='container-fluid container--size--sm'>
          <div class='lav-study'>
            <div class='lav-study__icon'>
              <svg class="icon icon-xxl">
                <use xlink:href="#lamp"></use>
              </svg>
            </div>
            <div class='lav-study__info'>
              Une étude indépendante a montré que la Luminette donne les mêmes résultats qu'une lampe de luminothérapie de 10 000 lux.
            </div>
            <a href='https://d3sq5glv6xow4l.cloudfront.net/docs/Light_therapy_with_boxes_or_glasses_to_counteract_.pdf' target="_blank" class='lav-study__btn'>
              Lire l'étude
              <img src='/images/icons/adobe-reader.svg' />
            </a>
          </div>
        </div>
      </section>

      <section class='lav-safety lav-section'>
        <div class='container-fluid container--size--lg'>
          <div class='lav-safety__row'>
            <div class='lav-safety__left'>
              <div class='lav-safety__title lav-title'>Sécurité</div>

              <div class='lav-safety__icons'>
                <img src="https://conversionratestore.github.io/projects/luminette/img/safety-1.svg" alt="safety icon" />
                <img src="https://conversionratestore.github.io/projects/luminette/img/safety-2.svg" alt="safety icon" />
                <img src="https://conversionratestore.github.io/projects/luminette/img/safety-3.svg" alt="safety icon" />
              </div>
            </div>
            <div class='lav-safety__right'>
              <div class='lav-safety__descr lav-descr'>Depuis 2007, Luminette porte la classification européenne CE.</div>

              <div class='lav-safety__descr lav-descr'>La Luminette est classée comme un dispositif sûr pour les yeux, conformément à la norme internationale CEI 62471.</div>

              <div class='lav-safety__descr lav-safety__descr-country lav-descr'>Il n'y a pas de lampes de luminothérapie aux États-Unis qui portent l'approbation de la FDA. Par conséquent, l'efficacité et la sécurité de cet appareil électronique - et de tous les autres appareils de luminothérapie sur le marché américain - ne seront pas réglementées par la FDA.</div>

              <div class='lav-safety__toggler lav-mob'>
                Afficher plus
                <svg class="icon icon-xs"><use xlink:href="#arrow-right"></use></svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class='lav-compare lav-section lav-observe'>
        <div class='container-fluid container--size--xs'>
          <div class="lav-compare__title-head lav-title">Pourquoi choisir la luminothérapie portable</div>

          <div class="row fs-16 text-center lav-compare__inner mx-auto">
            <div class="col-6 py-5">
              <div class='lav-compare__image'>
                <img class="lav-compare__lum" src="${settings.dir}/img/compare-lum.png"/>
              </div>
        
              <p class="fs-22 fw-bold py-1 lav-compare__title">Luminette3</p>
            </div>
            <div class="col-6 py-5">
              <div class='lav-compare__image'>
                <img class="lav-compare__box" src="${settings.dir}/img/lightbox.png"/>
              </div>
              <p class="fs-22 fw-bold py-1 lav-compare__title">Lampe de luminothérapie</p>
            </div>
            <div class="col-12 py-2 fs-18 fw-bold b-1">Portable</div>
            <div class="col-6 py-5 fw-medium"><p class="py-1">Vaquez à vos occupations tout en portant les lunettes</p></div>
            <div class="col-6 py-5 fw-medium"><p class="py-1">Vous oblige à vous arrêter et à rester assis pendant <span class="text-ellipsis">30 minutes</span></p></div>
            <div class="col-12 py-2 fs-18 fw-bold b-1">Spectre de la lumière</div>
            <div class="col-6 py-5 fw-medium"><p class="py-1">Lumière blanche enrichie en bleu</p></div>
            <div class="col-6 py-5 fw-medium"><p class="py-1">Lumière blanche à spectre complet</p></div>
            <div class="col-12 py-2 fs-18 fw-bold b-1">Efficacité thérapeutique</div>
            <div class="col-6 py-5 fw-medium"><p class="py-1">Efficacité garantie tout en utilisant une source de lumière moins intense</p></div>
            <div class="col-6 py-5 fw-medium"><p class="py-1">Nécessite au moins 10 000 lux pour être efficace</p></div>
            <div class="col-12 py-2 fs-18 fw-bold b-1">Taille</div>
            <div class="col-6 py-5 fw-medium"><p class="pt-1 pb-5">Petit/ ultraléger, seulement 51g sur le nez (1,83 onces)</p></div>
            <div class="col-6 py-5 fw-medium"><p class="pt-1 pb-5">Grand/ encombrant</p></div>
          </div>
        </div>
      </section>

      <section class='lav-faq'>
        <div class='container-fluid container--size--lg'>
          <div class='lav-faq__plate'>
            <div class='lav-faq__info'>
              <div class='lav-faq__title lav-title'>FAQs</div>
              <div class='lav-faq__list accordion-primary'>
                <div class="question-row">
                  <div class="accordion-toggle collapsed" data-target="#question-1" aria-expanded="false" data-toggle="collapse">
                    <div class="accordion-title d-flex align-items-center align-items-lg-center justify-content-between">
                      <div class="question">Quels problèmes la Luminette peut-elle aider à résoudre&nbsp;?</div>

                      <div class="d-flex align-items-center justify-content-center">
                        <svg class="icon icon-xs">
                          <use xlink:href="#arrow-right"></use>
                        </svg>
                      </div>
                    </div>

                    <div id="question-1" class="collapse" style="">
                      <div class="accordion-content answer fw-medium ">
                        <p>Luminette est pour vous si&nbsp;: </p>

                        <ul>
                          <li>- Vous manquez d'énergie en cette période, vous ressentez des baisses de moral passagères.</li>
                          <li>- Vous êtes concerné par la dépression hivernale (hypersensibilité à la baisse de luminosité de la période automne-hiver). </li>
                          <li>- Vous connaissez des problèmes de sommeil, des insomnies, etc.</li>
                          <li>- Vous connaissez des épisodes de fatigue chronique.</li>
                          <li>- Vous voyagez beaucoup et êtes régulièrement soumis au décalage horaire.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="question-row">
                  <div class="accordion-toggle collapsed" data-target="#question-2" aria-expanded="false" data-toggle="collapse">
                    <div class="accordion-title d-flex align-items-center align-items-lg-center justify-content-between">
                      <div class="question">Le port de Luminette est-il dangereux pour les yeux&nbsp;?</div>

                      <div class="d-flex align-items-center justify-content-center">
                        <svg class="icon icon-xs">
                          <use xlink:href="#arrow-right"></use>
                        </svg>
                      </div>
                    </div>

                    <div id="question-2" class="collapse" style="">
                      <div class="accordion-content answer fw-medium ">
                        <p>Non.</p>
                        <ul>
                          <li>1) La lumière émise par la Luminette est une lumière blanche enrichie en bleu. Elle est de faible intensité (1 500 lux). A titre de comparaison, la plupart des lampes de luminothérapie émettent une lumière de 10 000 lux. </li>
                          <li>2) Le spectre a été spécialement choisi pour exclure les longueurs d'onde potentiellement dangereuses (courte longueur d'onde bleue, UV proche et UV). </li>
                          <li>3) La Luminette a été évaluée au regard de la norme IEC 62471. Elle est classée comme un produit sans danger pour les yeux.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="question-row">
                  <div class="accordion-toggle collapsed" data-target="#question-3" aria-expanded="false" data-toggle="collapse">
                    <div class="accordion-title d-flex align-items-center align-items-lg-center justify-content-between">
                      <div class="question">Comment utiliser les lunettes Luminette&nbsp;?</div>

                      <div class="d-flex align-items-center justify-content-center">
                        <svg class="icon icon-xs">
                          <use xlink:href="#arrow-right"></use>
                        </svg>
                      </div>
                    </div>

                    <div id="question-3" class="collapse" style="">
                      <div class="accordion-content answer fw-medium ">
                        <p>Portez la Luminette une fois par jour, généralement le matin. Choisissez parmi trois intensités lumineuses différentes&nbsp;: 20/30/60 minutes par jour. Lorsque la séance est terminée, la Luminette s'éteint automatiquement.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="question-row">
                  <div class="accordion-toggle collapsed" data-target="#question-4" aria-expanded="false" data-toggle="collapse">
                    <div class="accordion-title d-flex align-items-center align-items-lg-center justify-content-between">
                      <div class="question">Combien de temps avant que je ne commence à sentir les effets&nbsp;?</div>

                      <div class="d-flex align-items-center justify-content-center">
                        <svg class="icon icon-xs">
                          <use xlink:href="#arrow-right"></use>
                        </svg>
                      </div>
                    </div>

                    <div id="question-4" class="collapse" style="">
                      <div class="accordion-content answer fw-medium ">
                        <p>L'effet "boostant" de la Luminette est presque immédiat. Dès les premiers jours, vous sentirez votre énergie revenir et votre humeur commencera à s'améliorer. La régulation de votre horloge biologique prendra entre 4 et 7 jours.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="question-row">
                  <div class="accordion-toggle collapsed" data-target="#question-5" aria-expanded="false" data-toggle="collapse">
                    <div class="accordion-title d-flex align-items-center align-items-lg-center justify-content-between">
                      <div class="question">Puis-je utiliser la Luminette avec des lentilles de contact ou des lunettes&nbsp;?</div>

                      <div class="d-flex align-items-center justify-content-center">
                        <svg class="icon icon-xs">
                          <use xlink:href="#arrow-right"></use>
                        </svg>
                      </div>
                    </div>

                    <div id="question-5" class="collapse" style="">
                      <div class="accordion-content answer fw-medium ">
                        <p>Oui, la Luminette peut s'utiliser avec des lentilles ou des lunettes de vue. Il suffit de placer la Luminette par-dessus votre paire de lunettes normale.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="question-row">
                  <div class="accordion-toggle collapsed" data-target="#question-6" aria-expanded="false" data-toggle="collapse">
                    <div class="accordion-title d-flex align-items-center align-items-lg-center justify-content-between">
                      <div class="question">Puis-je utiliser la Luminette si j'ai la cataracte&nbsp;?</div>

                      <div class="d-flex align-items-center justify-content-center">
                        <svg class="icon icon-xs">
                          <use xlink:href="#arrow-right"></use>
                        </svg>
                      </div>
                    </div>

                    <div id="question-6" class="collapse" style="">
                      <div class="accordion-content answer fw-medium ">
                        <p>Porter la Luminette en cas de cataracte est sans danger. Votre cristallin étant plus opaque et laissant passer moins de lumière, la Luminette peut donc s'avérer moins efficace et il faudra peut-être la porter un peu plus longtemps. En cas de doute, veuillez vous référer à votre ophtalmologue.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="question-row">
                  <div class="accordion-toggle collapsed" data-target="#question-7" aria-expanded="false" data-toggle="collapse">
                    <div class="accordion-title d-flex align-items-center align-items-lg-center justify-content-between">
                      <div class="question">Luminette convient-elle aux enfants&nbsp;?</div>

                      <div class="d-flex align-items-center justify-content-center">
                        <svg class="icon icon-xs">
                          <use xlink:href="#arrow-right"></use>
                        </svg>
                      </div>
                    </div>

                    <div id="question-7" class="collapse" style="">
                      <div class="accordion-content answer fw-medium ">
                        <p>En raison de la croissance de leurs cristallins, Luminette n'est pas conseillée aux enfants de moins de 12 ans.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="question-row">
                  <div class="accordion-toggle collapsed" data-target="#question-8" aria-expanded="false" data-toggle="collapse">
                    <div class="accordion-title d-flex align-items-center align-items-lg-center justify-content-between">
                      <div class="question">Où est fabriquée la Luminette&nbsp;?</div>

                      <div class="d-flex align-items-center justify-content-center">
                        <svg class="icon icon-xs">
                          <use xlink:href="#arrow-right"></use>
                        </svg>
                      </div>
                    </div>

                    <div id="question-8" class="collapse" style="">
                      <div class="accordion-content answer fw-medium ">
                        <p>La Luminette est fabriqué et assemblée en Belgique.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="question-row">
                  <div class="accordion-toggle collapsed" data-target="#question-9" aria-expanded="false" data-toggle="collapse">
                    <div class="accordion-title d-flex align-items-center align-items-lg-center justify-content-between">
                      <div class="question">Quelle est la durée de la garantie de la Luminette&nbsp;?</div>

                      <div class="d-flex align-items-center justify-content-center">
                        <svg class="icon icon-xs">
                          <use xlink:href="#arrow-right"></use>
                        </svg>
                      </div>
                    </div>

                    <div id="question-9" class="collapse" style="">
                      <div class="accordion-content answer fw-medium ">
                        <p>Votre Luminette est garantie pendant 2 ans. Cette garantie couvre les défauts de fabrication et tout autre défaut pouvant survenir dans le cadre d'une utilisation normale de l'appareil.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="question-row">
                  <div class="accordion-toggle collapsed" data-target="#question-10" aria-expanded="false" data-toggle="collapse">
                    <div class="accordion-title d-flex align-items-center align-items-lg-center justify-content-between">
                      <div class="question">Existe-t-il des effets secondaires&nbsp;?</div>

                      <div class="d-flex align-items-center justify-content-center">
                        <svg class="icon icon-xs">
                          <use xlink:href="#arrow-right"></use>
                        </svg>
                      </div>
                    </div>

                    <div id="question-10" class="collapse" style="">
                      <div class="accordion-content answer fw-medium ">
                        <p>Les effets secondaires indésirables liés à la Luminette sont relativement légers et transitoires. Ils peuvent inclure&nbsp;: Maux de tête / Fatigue oculaire / Nausées. Afin d'éviter, de réduire ou d'atténuer ces effets indésirables&nbsp;: Utilisez la Luminette dans une pièce bien éclairée / Réduisez le réglage de l'intensité de la Luminette (il existe 3 niveaux d'intensités lumineuses) / N'utilisez pas le dispositif pendant quelques jours jusqu'à ce que les effets secondaires disparaissent, puis réessayez.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
            <div class='lav-faq__image'>
              <img src='${settings.dir}/img/faq.svg' />
            </div>
          </div>

          <div class='lav-faq__btn-wrap'>
            <button class='lav-faq__btn btn-primary btn-lg flipped lav-btn lav-btn-buy'>
              <span class="btn-text">
                Commandez la Luminette3&nbsp;maintenant
              </span>
              <span class="btn-bg-wrapper"></span>
            </button>
          </div>
      
        </div>
      </section>

      <section class='lav-reviews lav-observe'>
        <div class='container-fluid container--size--lg lav-reviews__container'>
          <div class='lav-reviews__title lav-title'>Plus de 150&nbsp;000 utilisateurs de la Luminette</div>

          <div class="slider-wrapper position-relative">
            <div class="slider">
              <div class="slide">
                <div class="card">
                  <div class="card-header text-center">
                    <picture class="avatar d-block">
                      <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/16@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/16.png 1x"/>
                      <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/16.png" alt="Customer avatar">
                    </picture>
                    <div class="h4 name fw-bolder">Arnaud T.</div>
                    <a href="https://www.google.com/maps/contrib/111655687148446401076/reviews/@50.5779487,5.2610511,16z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                      <span>
                        Lire l'avis sur <b>Google</b>
                      </span>
                      <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                    </a>
                  </div>
                  <div class="card-body-wrapper">
                    <div class="card-body">
                      <p class="review">Chaque année je ressens un manque de lumière et cela se ressent sur le moral.
                        Cette année j'ai trouvé la solution pour palier à cela avec la Luminette. L'avantage c'est que
                        tu ne restes pas bloqué devant un écran et que tu peux te préparer le matin ou prendre le
                        petit
                        déjeuner avec les lunettes sur le nez. C'est très pratique&nbsp;:)
                      </p>
                      <button class="fw-bolder expand">Afficher plus</button>
                      <div class="date">4 mars 2021</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="slide">
                <div class="card">
                  <div class="card-header text-center">
                    <picture class="avatar d-block">
                      <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/4@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/4.png 1x"/>
                      <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/4.png" alt="Customer avatar">
                    </picture>
                    <div class="h4 name fw-bolder">Laura S.</div>
                    <a href="https://www.amazon.com/gp/customer-reviews/R37M192JK2SORZ/ref=cm_cr_getr_d_rvw_ttl?ie=UTF8&ASIN=B07VMRRB9Y" target="_blank" class="link">
                      <span>
                        Lire l'avis sur <b>Amazon</b>
                      </span>
                      <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                    </a>
                  </div>
                  <div class="card-body-wrapper">
                    <div class="card-body">
                      <p class="review">J'utilise les Luminettes depuis début octobre 2020 pour faire face à ma dépression saisonnière (SAD). Jusqu'à présent, je n'ai aucun symptôme de dépression saisonnière, malgré le changement d'heure (heure d'hiver) et la disparition du soleil à 16h30. C'est une première. Je suis étonné. Mon niveau d'énergie a augmenté et je me sens libre et joyeux la plupart du temps. Je dors aussi beaucoup mieux. Je dois ajouter que j'ai arrêté la caféine, ce qui aide aussi.
                        Les Luminettes sont bien, bien meilleure que les lampes. Je les porte tous les matins sans être obligé de fixer la lampe. Mon humeur s'est vraiment améliorée.
                        Elles sont très pratiques et faciles à utiliser. Je les mets sur le dessus de mes lunettes. Elles se rechargent facilement et on peut les utiliser sans les brancher tous les jours.
                        Tous ceux qui me voient les porter (quand je participe à des réunions en ligne, quand je vais chez le dentiste, etc.) me demandent si ça marche. Les gens trouvent que c'est joli et ils sont très intéressés parce qu'il y a toujours quelqu'un dans leur famille qui souffre de dépression saisonnière, ou bien ils sont eux-mêmes atteints de ce trouble.
                        Donc, vraiment, je ne me plains pas, je n'ai que des bonnes choses à dire sur mes Luminettes qui sont aussi précieuses maintenant que mon téléphone portable.
                      </p>
                      <button class="fw-bolder expand">Afficher plus</button>
                      <div class="date">21 décembre 2020</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="slide">
                <div class="card">
                  <div class="card-header text-center">
                    <picture class="avatar d-block">
                      <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/1@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/1.png 1x"/>
                      <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/1.png" alt="Customer avatar">
                    </picture>
                    <div class="h4 name fw-bolder">Rémy Z.</div>
                    <a href="https://www.google.com/maps/contrib/112247709787810698381/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@50.5779487,5.2632398,17z/data=!4m6!1m5!8m4!1e2!2s112247709787810698381!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                      <span>
                        Lire l'avis sur <b>Google</b>
                      </span>
                      <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                    </a>
                  </div>
                  <div class="card-body-wrapper">
                    <div class="card-body">
                      <p class="review">Excellentes lunettes de luminothérapie. Je les utilise tous les matins dès mon réveil. Je
                        souffre
                        en
                        effet
                        de dépression saisonnière depuis plusieurs années et grâce à mes Luminettes je ressens moins
                        mes
                        troubles
                        de
                        l'humeur en automne-hiver. Je les utilise dès la mi-automne jusqu'à fin mars. Je disposais
                        avant
                        d'une
                        lampe
                        de luminothérapie mais c'était assez contraignant de devoir rester devant de manière continue.
                        Avec
                        mes
                        Luminettes je peux vaquer à mes occupations sans problème.
                        J'en suis très satisfait !
                      </p>
                      <button class="fw-bolder expand">Afficher plus</button>
                      <div class="date">21 décembre 2020</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="slide">
                <div class="card">
                  <div class="card-header text-center">
                    <picture class="avatar d-block">
                      <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/2@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/2.png 1x"/>
                      <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/2.png" alt="Customer avatar">
                    </picture>
                    <div class="h4 name fw-bolder">Dominique M.</div>
                    <a href="https://www.amazon.fr/gp/customer-reviews/R2TECJ5KRJG2TC/ref=cm_cr_getr_d_rvw_ttl?ie=UTF8&ASIN=B07VMRRB9Y" target="_blank" class="link">
                      <span>
                        Lire l'avis sur <b>Amazon</b>
                      </span>
                      <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                    </a>
                  </div>
                  <div class="card-body-wrapper">
                    <div class="card-body">
                      <p class="review">Chaque année, l'arrivée de l'automne est pour moi synonyme de déprime, fatigue, endormissement
                        très long et coups de pompe durant l'après-midi ! J'en ai parlé au docteur qui m'a conseillé
                        d'essayer la Luminette. J'ai décidé de l'acheter pour l'utiliser tous les matins. Je prends
                        donc
                        mon déjeuner avec la Luminette sur le nez, sans aucun désagrément, pendant 20 minutes. Elle me
                        permet de me déplacer et de voir ce que je fais, contrairement aux anciens appareils qui
                        étaient
                        à poser sur la table, et qui, d'après les études réalisées, ne servaient à rien puisque la
                        luminosité des leds ne venaient pas de plus haut que la tête et n'atteignaient donc pas les
                        capteurs de l'oeil...
                        Je me sens en forme pour la journée, et si pendant l'hiver je ressens de la fatigue après le
                        repas de midi, je refais une séance. Ainsi j'arrête de produire de la mélatonine et l'énergie
                        revient, je suis mieux dans ma peau et de meilleure humeur!
                      </p>
                      <button class="fw-bolder expand">Afficher plus</button>
                      <div class="date">21 décembre 2020</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="slide">
                <div class="card">
                  <div class="card-header text-center">
                    <picture class="avatar d-block">
                      <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/3@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/3.png 1x"/>
                      <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/3.png" alt="Customer avatar">
                    </picture>
                    <div class="h4 name fw-bolder">Maïté T.</div>
                    <a href="https://www.amazon.fr/gp/customer-reviews/R1GSLSI9OTO56U/ref=cm_cr_arp_d_rvw_ttl?ie=UTF8&ASIN=B07VMRRB9Y" target="_blank" class="link">
                      <span>
                        Lire l'avis sur <b>Amazon</b>
                      </span>
                      <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                    </a>
                  </div>
                  <div class="card-body-wrapper">
                    <div class="card-body">
                      <p class="review">J’ai la fibromyalgie et des gros problème de sommeil. Un manque de pêche évident quand le
                        soleil
                        n’est plus là. Mon neurologue m’a conseillé vos lunettes. Je suis ravie j’ai
                        plus de pêche, ça ne joue malheureusement rien sur mes douleurs. Mais vu que je suis plus en
                        forme je trouve ça vraiment positif! L’automne et l’hiver ne me font plus peur grâce à ses
                        lunettes je suis prête à les affronter! Je recommande vraiment et je n’arrête pas d’en parler
                        autour de moi.
                      </p>
                      <button class="fw-bolder expand">Afficher plus</button>
                      <div class="date">21 décembre 2020</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="slide">
                <div class="card">
                  <div class="card-header text-center">
                    <picture class="avatar d-block">
                      <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/5@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/5.png 1x"/>
                      <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/5.png" alt="Customer avatar">
                    </picture>
                    <div class="h4 name fw-bolder">Muriel V.</div>
                    <a href="https://www.google.com/maps/contrib/107266988971890423777/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@50.5779487,5.2632398,17z/data=!4m6!1m5!8m4!1e2!2s107266988971890423777!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                      <span>
                        Avis de <b>Facebook</b>
                      </span>
                      <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                    </a>
                  </div>
                  <div class="card-body-wrapper">
                    <div class="card-body">
                      <p class="review">Prescrite par mon neurologue dans le cadre de mes troubles du sommeil et de mon épilepsie, je
                        ne
                        peux maintenant plus m'en passer. Le fait qu'il s'agisse de lunettes est très pratique car on
                        sait faire ses activités sans soucis (comme se brosser les dents, déjeuner, lire ou même
                        commencer à travailler). Elles sont livrées avec une housse très pratique pour le rangement
                        et/ou les déplacements.
                        Je vous déconseille juste de les utiliser dans une pièce sombre.
                      </p>
                      <button class="fw-bolder expand">Afficher plus</button>
                      <div class="date">21 décembre 2020</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="slide">
                <div class="card">
                  <div class="card-header text-center">
                    <picture class="avatar d-block">
                      <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/6@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/6.png 1x"/>
                      <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/6.png" alt="Customer avatar">
                    </picture>
                    <div class="h4 name fw-bolder">Rita R.</div>
                    <a href="https://www.google.com/maps/contrib/100137502211655470427/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@50.6323126,5.3985949,11z/data=!4m6!1m5!8m4!1e1!2s100137502211655470427!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                      <span>
                        Avis de <b>Facebook</b>
                      </span>
                      <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                    </a>
                  </div>
                  <div class="card-body-wrapper is-visible">
                    <div class="card-body">
                      <p class="review">5 jours que j’emploie ma luminette ,je me sens déjà mieux ...
                        L’essayer c’est l’adopter.
                        Il y a 3 ans que je la porte en saison automnale 20 minutes par jour ... en déjeunant
                      </p>
                      <div class="date">21 décembre 2020</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="slide">
                <div class="card">
                  <div class="card-header text-center">
                    <picture class="avatar d-block">
                      <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/7@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/7.png 1x"/>
                      <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/7.png" alt="Customer avatar">
                    </picture>
                    <div class="h4 name fw-bolder">Audrey B.</div>
                    <a href="https://www.google.com/maps/contrib/105110317360703574808/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@50.5779487,5.2632398,17z/data=!4m6!1m5!8m4!1e2!2s105110317360703574808!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                      <span>
                        Avis de <b>Facebook</b>
                      </span>
                      <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                    </a>
                  </div>
                  <div class="card-body-wrapper is-visible">
                    <div class="card-body">
                      <p class="review">Je suis très satisfaite de la luminette! (j'ai la luminette 3). J'ai de meilleurs cycles de
                        sommeil et elles m'aident à bien me réveiller le matin (aussi bien qu'un café). En plus elles
                        sont faciles à porter. Tous les matins je me dis que j'ai bien fait de les acheter! Je
                        recommande!
                      </p>
                      <div class="date">21 décembre 2020</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="slide">
                <div class="card">
                  <div class="card-header text-center">
                    <picture class="avatar d-block">
                      <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/8@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/8.png 1x"/>
                      <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/8.png" alt="Customer avatar">
                    </picture>
                    <div class="h4 name fw-bolder">Christopher T.</div>
                    <a href="https://www.google.com/maps/contrib/105475160819624793335/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@50.5779487,5.2632398,17z/data=!4m6!1m5!8m4!1e2!2s105475160819624793335!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                      <span>
                        Avis de <b>Facebook</b>
                      </span>
                      <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                    </a>
                  </div>
                  <div class="card-body-wrapper is-visible">
                    <div class="card-body">
                      <p class="review">Je suis ravi du modèle 2.
                        Faciles d'usage, les Luminette me permettent d'être dynamique dès le matin et facilite
                        l'endormissement. Ma neurologue a été de bon conseil !
                        Je passerai probablement au modèle 3 dans le futur…
                      </p>
                      <div class="date">21 décembre 2020</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="slide">
                <div class="card">
                  <div class="card-header text-center">
                    <picture class="avatar d-block">
                      <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/9@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/9.png 1x"/>
                      <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/9.png" alt="Customer avatar">
                    </picture>
                    <div class="h4 name fw-bolder">Gregory E.</div>
                    <a href="https://www.google.com/maps/contrib/117879807108998873428/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@50.3197246,6.3556338,7.58z/data=!4m4!1m3!8m2!1e1!2s117879807108998873428?hl=fr-BE" target="_blank" class="link">
                      <span>
                        Avis de <b>Facebook</b>
                      </span>
                      <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                    </a>
                  </div>
                  <div class="card-body-wrapper is-visible">
                    <div class="card-body">
                      <p class="review">J'ai mes luminettes 3 depuis mars 2020 et je ne sais plus m'en passer, elles sont parfaites
                        pour
                        combattre le décalage horaire ou les troubles du sommeil.
                      </p>
                      <div class="date">21 décembre 2020</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="slide">
                <div class="card">
                  <div class="card-header text-center">
                    <picture class="avatar d-block">
                      <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/10@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/10.png 1x"/>
                      <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/10.png" alt="Customer avatar">
                    </picture>
                    <div class="h4 name fw-bolder">Florence M.</div>
                    <a href="https://www.google.com/maps/contrib/114308199652100072679/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@50.5779487,5.2632398,17z/data=!4m6!1m5!8m4!1e2!2s114308199652100072679!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                      <span>
                        Avis de <b>Facebook</b>
                      </span>
                      <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                    </a>
                  </div>
                  <div class="card-body-wrapper is-visible">
                    <div class="card-body">
                      <p class="review">Je les ai depuis un an, elles m’ont été conseillées par ma thérapeute, je ressens une vraie
                        amélioration de mon humeur et de ma fatigue.
                      </p>
                      <div class="date">21 décembre 2020</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="slide">
                <div class="card">
                  <div class="card-header text-center">
                    <picture class="avatar d-block">
                      <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/11@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/11.png 1x"/>
                      <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/11.png" alt="Customer avatar">
                    </picture>
                    <div class="h4 name fw-bolder">Guillaume M.</div>
                    <a href="https://www.google.com/maps/contrib/101195112554299989422/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@4.6513087,89.2730014,3z/data=!4m6!1m5!8m4!1e2!2s101195112554299989422!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                      <span>
                        Avis de <b>Facebook</b>
                      </span>
                      <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                    </a>
                  </div>
                  <div class="card-body-wrapper">
                    <div class="card-body">
                      <p class="review">Sujet depuis des années à la "dépression saisonnière", j'ai décidé d'essayer la luminothérapie
                        pour palier à ce manque de soleil hivernale, et j'ai opté pour ce modèle en format "lunettes"
                        pour le côté pratique de pouvoir faire sa préparation du matin et ne pas avoir à rester collé
                        à
                        un panneau lumineux.
                        Les résultats ne se sont pas fait attendre, les coups de mou et la fatigue générale habituels
                        ont quasiment disparu et autre point positif que je n'avais pas prévu, ma tendance à avoir du
                        mal à trouver le sommeil le soir a aussi disparu, sans doute dû à un réajustement du rythme
                        circadien...
                        En bref, c'est un investissement au départ, mais je ne le regrette absolument pas, et ma
                        conjointe s'y est aussi mise !
                      </p>
                      <button class="fw-bolder expand">Afficher plus</button>
                      <div class="date">21 décembre 2020</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="slide">
                <div class="card">
                  <div class="card-header text-center">
                    <div class="avatar"></div>
                    <div class="h4 name fw-bolder">Andi Philip</div>
                    <a href="#" target="_blank" class="link">
                      <span>
                        Avis de <b>Facebook</b>
                      </span>
                      <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                    </a>
                  </div>
                  <div class="card-body-wrapper">
                    <div class="card-body">
                      <p class="review">"J'avais une petite lampe Phillips auparavant, et c'était une galère de s'asseoir au bon angle,
                        la distance, et le temps. Avec cet appareil je n'ai pas à me soucier de ces choses. Je mets simplement
                        les
                        mets, j'appuie sur le bouton et je les porte jusqu'à ce qu'elles s'éteignent. Facile à utiliser même lorsque je porte mes
                        lunettes ou mes lentilles. De plus, elles ne me donnent pas de maux de tête comme le faisait la lampe Phillips !
                        Il y a presque 4 personnes dans mon foyer qui les portent tous les jours. Je vais bientôt acheter une seconde paire! 
                        (Deux d'entre nous ont des troubles du sommeil et tout le monde semble avoir une meilleure humeur)."
                      </p>
                      <button class="fw-bolder expand">Afficher plus</button>
                      <div class="date">21 décembre 2020</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="slide">
                <div class="card">
                  <div class="card-header text-center">
                    <picture class="avatar d-block">
                      <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/13@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/13.png 1x"/>
                      <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/13.png" alt="Customer avatar">
                    </picture>
                    <div class="h4 name fw-bolder">Patricia</div>
                    <a href="#" target="_blank" class="link">
                      <span>
                        Avis de <b>Facebook</b>
                      </span>
                      <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                    </a>
                  </div>
                  <div class="card-body-wrapper is-visible">
                    <div class="card-body">
                      <p class="review">Utilisée médicalement pour problème dépressif. Ces lunettes m'ont apportés une nette
                        amélioration. Pas gênantes à porter, la luminosité agit sur mon humeur, m'apporte un
                        réconfort,
                        elle me sont très utiles.
                      </p>
                      <div class="date">21 décembre 2020</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="slide">
                <div class="card">
                  <div class="card-header text-center">
                    <picture class="avatar d-block">
                      <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/14@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/14.png 1x"/>
                      <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/14.png" alt="Customer avatar">
                    </picture>
                    <div class="h4 name fw-bolder">Hélène</div>
                    <a href="https://www.google.com/maps/contrib/116715457571293643665/reviews/@49.9994005,2.560789,8z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                      <span>
                        Avis de <b>Facebook</b>
                      </span>
                      <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                    </a>
                  </div>
                  <div class="card-body-wrapper">
                    <div class="card-body">
                      <p class="review">C'est un réflexe à prendre dès le lever, la Luminette se fait vite oublier et on peut vaquer à
                        ses occupations. Avec ou sans, il n'y a pas photo&nbsp;: dès la première utilisation, on se sent
                        vite
                        mieux réveillé et les coups de mou de milieu de matinée ou d'après-midi disparaissent vite.
                        Vraiment conquise.
                      </p>
                      <button class="fw-bolder expand">Afficher plus</button>
                      <div class="date">21 décembre 2020</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="slide">
                <div class="card">
                  <div class="card-header text-center">
                    <div class="avatar"></div>
                    <div class="h4 name fw-bolder">Anthony</div>
                    <a href="https://www.google.com/maps/contrib/103414070215570066252/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@50.5779487,5.2632398,17z/data=!4m6!1m5!8m4!1e2!2s103414070215570066252!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                      <span>
                        Avis de <b>Facebook</b>
                      </span>
                      <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                    </a>
                  </div>
                  <div class="card-body-wrapper is-visible">
                    <div class="card-body">
                      <p class="review">Utilisateur depuis plus de dix ans ... la luminette m’a toujours aidé à me « régler » lors de
                        mes travails en horaires de nuit ou tres tot le matin...on se sent rapidement plus en forme.
                        Produit sérieux et facile a utiliser.
                      </p>
                      <div class="date">21 décembre 2020</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="slide">
                <div class="card">
                  <div class="card-header text-center">
                    <picture class="avatar d-block">
                      <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/15@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/15.png 1x"/>
                      <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/15.png" alt="Customer avatar">
                    </picture>
                    <div class="h4 name fw-bolder">Muriel T.</div>
                    <a href="https://www.google.com/maps/contrib/105183132711717313101/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@50.5779487,5.2610511,17z/data=!4m6!1m5!8m4!1e2!2s105183132711717313101!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                      <span>
                        Lire l'avis sur <b>Google</b>
                      </span>
                      <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                    </a>
                  </div>
                  <div class="card-body-wrapper">
                    <div class="card-body">
                      <p class="review">J'ai acheté la Luminette pour m'aider contre la déprime hivernale. Je l'utilise chaque matin
                        au
                        réveil. Ce que j'apprécie avec la Luminette, c'est que je peux choisir la durée de la séance
                        (20, 30 ou 60 min) en fonction de ma disponibilité, et que je peux vaquer à mes occupations
                        pendant la séance (pas besoin de rester en face d'une lampe posée sur la table). Après
                        quelques
                        jours d'utilisation seulement, je notais déjà un résultat positif: fini la déprime les jours
                        gris et pluvieux. Avec le temps, je me sens moins fatiguée et j'ai plus d'énergie. Je
                        recommande
                        vivement la Luminette.
                      </p>
                      <button class="fw-bolder expand">Afficher plus</button>
                      <div class="date">21 décembre 2020</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="slide">
                <div class="card">
                  <div class="card-header text-center">
                    <picture class="avatar d-block">
                      <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/12@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/12.png 1x"/>
                      <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/12.png" alt="Customer avatar">
                    </picture>
                    <div class="h4 name fw-bolder">Aurélie</div>
                    <a href="https://www.amazon.fr/gp/customer-reviews/RWZSN5SZJF573/ref=cm_cr_getr_d_rvw_ttl?ie=UTF8&ASIN=B07VMRRB9Y" target="_blank" class="link">
                      <span>
                        Avis de <b>Facebook</b>
                      </span>
                      <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                    </a>
                  </div>
                  <div class="card-body-wrapper">
                    <div class="card-body">
                      <p class="review">Depuis des années, je souffre de dépression saisonnière. Des professionnels de la santé
                        (médecin généraliste, psychiatre, psychologue et pharmacienne) m'ont conseillé d'avoir recours
                        à
                        la luminothérapie pour améliorer mon état en automne et en hiver.
                        J'ai hésité longuement et puis j'ai découvert les Luminette.
                        Je les utilise le matin, soit en vaquant à mes occupations (petit déjeuner, brossage de
                        dents...) soit pendant que je lis. Après la séance, j'ai beaucoup plus d'énergie et de
                        motivation pour faire face à la journée.
                        Elles sont très pratiques car elles peuvent se porter en même temps que des lunettes de vue ou
                        d'ordinateur.
                        Elles sont constituées de plastique, assez rigide, mais paraissent solides.
                        Le chargement est assez rapide. Un indicateur de chargement permet de savoir quand ce dernier
                        est terminé. Une fois chargées, elles peuvent être utilisées environ 10 fois.
                        Il y a 3 modes possibles. Plus la lumière est puissante, plus le temps d'exposition est
                        réduit.
                        Ce qui est très pratique c'est qu'il ne faut pas surveiller le temps car elles s'éteignent
                        toutes seules une fois la séance terminée. Le seul mini « bémol » est que le mode le plus
                        puissant peut être éblouissant quand la luminosité environnante est faible.
                        C'est donc un accessoire que je recommanderais sans hésitation, car il me donne un vrai coup
                        de
                        pouce moralement pendant les courtes journées.
                      </p>
                      <button class="fw-bolder expand">Afficher plus</button>
                      <div class="date">21 décembre 2020</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class='lav-show-reviews lav-observe'>Afficher plus</div>
          </div>

          <div class='lav-reviews__total'>
            <div class='lav-reviews__total-col'>
              <div class='lav-reviews__total-image'>
                <img src='${settings.dir}/img/reviews-trusted.svg' />
              </div>
              <div class='lav-reviews__total-info'>
                <div class='lav-reviews__total-score'>4.5</div>
                <div class='lav-reviews__total-stars'>
                  <img src='${settings.dir}/img/reviews-stars.svg' />
                </div>
                <a href='https://www.trustedshops.be/fr/evaluation/info_X5CFE61C0E26F14D751206ABEDADF025D.html&amp;utm_source=shop&amp;utm_medium=link&amp;utm_content=trustcard&amp;utm_campaign=trustbadge' target="_blank" class='lav-reviews__total-caption'>Découvrez les commentaires sur <span>Trusted shops</span></a>
              </div>
            </div>
            <div class='lav-reviews__total-col'>
              <div class='lav-reviews__total-image'>
                <img src='${settings.dir}/img/reviews-amazon.svg' />
              </div>
              <div class='lav-reviews__total-info'>
                <div class='lav-reviews__total-score'>4.5</div>
                <div class='lav-reviews__total-stars'>
                  <img src='${settings.dir}/img/reviews-stars.svg' />
                </div>
                <a href='https://www.amazon.com/New-Model-Luminette-Therapy-Glasses/dp/B07VMRRB9Y?ref_=ast_bbp_dp' target="_blank" class='lav-reviews__total-caption'>Découvrez les commentaires sur <span>Amazon</span></a>
              </div>
            </div>
          </div>

          <div class='lav-reviews__preview-list lav-observe'>
            <div class='lav-reviews__preview' style='background-image: url(${settings.dir}/img/fr-preview-review1.png);'>
              <div class="lav-reviews__play lav-open-modal" data-target='.lav-review-modal' data-name='Myriam' data-src='https://www.youtube.com/embed/vekX4k9dssY?autoplay=0&start=0&showinfo=0&rel=0'>
                <img class='lav-reviews__play-btn' src='${settings.dir}/img/play.svg' />
                <img class='lav-reviews__play-btn' src='${settings.dir}/img/play-hover.svg' />
              </div>
            </div>

            <div class='lav-reviews__preview' style='background-image: url(${settings.dir}/img/fr-preview-review2.png);'>
              <div class="lav-reviews__play lav-open-modal" data-target='.lav-review-modal' data-name='Sonia' data-src='https://www.youtube.com/embed/JcnfVN5iswE?autoplay=0&start=0&showinfo=0&rel=0'>
                <img class='lav-reviews__play-btn' src='${settings.dir}/img/play.svg' />
                <img class='lav-reviews__play-btn' src='${settings.dir}/img/play-hover.svg' />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class='lav-trial lav-section'>
        <div class='container-fluid container--size--lg lav-trial__container'>
          <div class='lav-trial__row lav-observe'>
            <div class='lav-trial__image'>
              <img src='${settings.dir}/img/trial.png' />
              <div class='lav-trial__inside lav-tooltip-wrap'>
                Que contient la boîte?
                <div class="tooltip d-flex ml-1">
                  <img class='lav-info-invert' src="https://conversionratestore.github.io/projects/luminette/img/info.svg" alt="info"/>
                  <div class="tooltip-dropdown text-left fs-16">
                    <div class="tooltip-item">
                      <img class='tooltip-include' src="${settings.dir}/img/tooltip-include.png" />
                      <div class='lav-list lav-tooltip-list'>
                        <div class='lav-list__item'>Votre Luminette</div>
                        <div class='lav-list__item'>Un étui de protection</div>
                        <div class='lav-list__item'>Un chargeur mural micro-USB</div>
                        <div class='lav-list__item'>Un tissu nettoyant en microfibres</div>
                        <div class='lav-list__item'>Votre certificat de garantie de 2 ans</div>
                        <div class='lav-list__item'>Le manuel d'utilisation</div>
                      </div>
                    </div> 
                  </div>
                </div>
              </div>
            </div>

            <div class='lav-trial__info'>
              <div class='lav-trial__title lav-title'><span>Essayez-la</span> <br/> pendant 30 jours</div>
              <div class='lav-trial__descr lav-descr'>Testez la luminothérapie brevetée de Luminette pendant 30 jours et si vous n'êtes pas satisfait, renvoyez-la et nous vous rembourserons !</div>

              <div class='lav-trial__buttons'>
                <div class='lav-trial__btn lav-trial__btn-refresh lav-tooltip-wrap'>
                  <img src='${settings.dir}/img/icon-refresh.svg' />
                  <span>
                    Essai de 30 jours
                  </span>
                  <div class="tooltip d-sm-flex ml-2">
                    <img class='lav-info-invert' src="https://conversionratestore.github.io/projects/luminette/img/info.svg" alt="info"/>
                    <div class="tooltip-dropdown text-left fs-16">
                      <div class="tooltip-item">
                        <p class="mb-2">
                          Vous avez un mois pour tester votre Luminette. Nous recommandons d'utiliser la Luminette pendant au moins 10 jours consécutifs.
                        </p>
                        <p>
                          Toutefois, si vous n'êtes pas satisfait, vous pouvez choisir d'être remboursé dans les 30 jours suivant l'achat. Vous trouverez plus de détails sur notre page <a href="/delivery#returns-block" class="tooltip__link">Remboursements</a>.
                        </p>
                      </div> 
                    </div>
                  </div>
                </div>
                <div class='lav-trial__btn lav-trial__btn-box lav-tooltip-wrap'>
                  <img src='${settings.dir}/img/icon-box-2.svg' />
                  <span>
                    Livraison gratuite
                  </span>
                  <div class="tooltip d-sm-flex ml-2">
                    <img class='lav-info-invert' src="https://conversionratestore.github.io/projects/luminette/img/info.svg" alt="info"/>
                    <div class="tooltip-dropdown text-left fs-16">
                      <div class="tooltip-item lav-delivery__plate">
                        <div class="tooltip_free text-center mb-2">
                          <div class="d-flex align-items-center justify-content-center mb-2 pb-1">
                            <img class='lav-delivery__plate-flags' height='24' src="${settings.dir}/img/flags-fr.png" alt="">
                          </div>
                          <div class='lav-delivery__plate-caption'> Livraison gratuite en Europe: <div class="fw-bold d-block">2 à 5 jours ouvrables</div></div>
                        </div>
                        <div class="d-flex align-items-center justify-content-center mb-2 py-1">
                          <img class="mr-2 lav-delivery__plate-service" src="${settings.dir}/img/delivery-methods.png" />
                        </div>
                        <p class="lav-delivery__descr">Orders are shipped from our logistics center located in Boise, Idaho. We use the services of FedEx Ground or USPS. Before they deliver your package, the carrier sends you an email warning you of the day of its passage.</p>
                      </div> 
                    </div>
                  </div>
                </div>
              </div>

              <div class='lav-trial__action'>
                <button class='lav-trial__get lav-btn btn-primary btn-lg flipped lav-btn-buy'>
                  <span class="btn-text">Achat $199</span>
                  <span class="btn-bg-wrapper"></span>
                </button>

                <div class='lav-trial__guarantee'>
                  <img src='${settings.dir}/img/guarantee.svg' />
                  Satisfait ou remboursé de 30 jours
                </div>
                <div class='lav-trial__refund'>Si vous n'obtenez aucun résultat, nous vous remboursons&nbsp;à&nbsp;100&nbsp;%.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class='lav-drive lav-section'>
        <div class='lav-drive__caption'>Découvrez notre nouveau produit</div>
        <div class='lav-drive__title'>Drive</div>
        <img class='lav-drive__device' src='${settings.dir}/img/drive-device.png' />
        <div class='lav-drive__bg container'>
          <div class='lav-drive__bg-title'>Bénéficiez de la luminothérapie tout en conduisant</div>

          <div div class='lav-drive__actions'>
            <button class='lav-drive__btn btn-primary btn-lg flipped lav-btn-buy-drive'>
              <span class="btn-text">
                Buy $149
              </span>
              <span class="btn-bg-wrapper"></span>
            </button>

            <div class='lav-drive__learn'>En savoir plus</div>
          </div>
        </div>
      </section>

      <div class='lav-modal'>
        <div class='lav-modal__inner lav-review-modal'>
          <div class='lav-modal__close'>
            <img src='${settings.dir}/img/modal-close.svg'>
          </div>

          <iframe width="840" height="480" src="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </main>
    `;
  }

  if (detectLang() === 'fr') {
    document.body.classList.add('lav-france');
  }

  const stylesEl = document.createElement('style');
  stylesEl.innerHTML = stylesMain;
  document.body.appendChild(stylesEl);

  setTimeout(() => {
    observerView();
  }, 100);

  function observerView() {
    const observerOptions = {
      root: null,
      threshold: 0,
      rootMargin: '-40%',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('lav-problems')) {
            const event = [
              'exp_new_hp_12_vis',
              'Visibility',
              'Section',
              'Light therapy can help',
            ];

            isElementInViewport(entry.target, event);
          }

          if (entry.target.classList.contains('lav-wears')) {
            const event = [
              'exp_new_hp_13_vis',
              'Visibility',
              'Section',
              'Wear for 30 min',
            ];

            isElementInViewport(entry.target, event);
          }

          if (entry.target.classList.contains('lav-morning')) {
            const event = [
              'exp_new_hp_14_vis',
              'Visibility',
              'Section',
              'lum glasses video',
            ];

            isElementInViewport(entry.target, event);
          }

          if (entry.target.classList.contains('lav-benefits')) {
            const event = [
              'exp_new_hp_15_vis',
              'Visibility',
              'Section',
              'What are the benefits',
            ];

            isElementInViewport(entry.target, event);
          }

          if (entry.target.classList.contains('lav-compare')) {
            const event = [
              'exp_new_hp_16_vis',
              'Visibility',
              'Section',
              'Why to choose',
            ];

            isElementInViewport(entry.target, event);
          }

          if (entry.target.classList.contains('lav-faq')) {
            const event = ['exp_new_hp_17_vis', 'Visibility', 'Section', 'FAQ'];

            isElementInViewport(entry.target, event);
          }

          if (entry.target.classList.contains('lav-trial')) {
            const event = [
              'exp_new_hp_18_vis',
              'Visibility',
              'Section',
              '30 day',
            ];

            isElementInViewport(entry.target, event);
          }

          if (entry.target.classList.contains('lav-shorts__wrap')) {
            const event = [
              'exp_new_pdp_video_reviews_vrs',
              'Video review',
              'Review section',
              'Review section',
            ];

            isElementInViewport(entry.target, event);
          }

          // observer.unobserve(entry.target); //
        }
      });
    }, observerOptions);

    for (let section of Array.from(document.querySelectorAll('.lav-section'))) {
      observer.observe(section);
    }

    function isElementInViewport(el, event) {
      setTimeout(() => {
        const rect = el.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;

        if (
          rect.top + rect.height * 0.3 < windowHeight &&
          rect.bottom > rect.height * 0.3
        ) {
          el.classList.add('in-view');
          observer.unobserve(el);

          gaEvent(...event);
        }
      }, 3000);
    }
  }

  function addScrollEvents() {
    let isScrolled20,
      isScrolled40,
      isScrolled60,
      isScrolled80,
      isScrolled100 = false;

    window.addEventListener('scroll', () => {
      let scrollTop = window.scrollY;
      let docHeight = document.body.offsetHeight;
      let winHeight = window.innerHeight;
      let scrollPercent = scrollTop / (docHeight - winHeight);
      let scrollPercentRounded = Math.round(scrollPercent * 100);
      if (scrollPercentRounded >= 20 && !isScrolled20) {
        // gaEvent2('scroll depth', scrollPercentRounded + '%');
        isScrolled20 = true;
      }
      if (scrollPercentRounded >= 40 && !isScrolled40) {
        // gaEvent2('scroll depth', scrollPercentRounded + '%');
        isScrolled40 = true;
      }
      if (scrollPercentRounded >= 60 && !isScrolled60) {
        // gaEvent2('scroll depth', scrollPercentRounded + '%');
        isScrolled60 = true;
      }
      if (scrollPercentRounded >= 80 && !isScrolled80) {
        // gaEvent2('scroll depth', scrollPercentRounded + '%');
        isScrolled80 = true;
      }
      if (scrollPercentRounded >= 99 && !isScrolled100) {
        // gaEvent2('scroll depth', '100%');
        isScrolled100 = true;
      }
    });
  }

  if (window.pageYOffset < 50) {
    document.querySelector('.header').classList.remove('dark-theme');
    document.querySelector('.header').classList.add('light-theme');
  }

  window.onscroll = function () {
    setTimeout(() => {
      if (window.pageYOffset < 50) {
        document.querySelector('.header').classList.remove('dark-theme');
        document.querySelector('.header').classList.add('light-theme');
      }
    }, 150);
  };

  document
    .querySelector('.home-page')
    .insertAdjacentHTML('afterbegin', newPage);

  initSliders();
  initModals();

  for (let item of document.querySelectorAll('.accordion-toggle')) {
    item.addEventListener('click', function () {
      gaEvent(
        'exp_new_hp_7_faq',
        'Click on FAQ',
        'Item',
        item.querySelector('.question').innerText.trim()
      );
    });
  }

  setTimeout(() => {
    for (let slide of document.querySelectorAll('.lav-reviews .slider .card')) {
      slide.addEventListener('click', function () {
        gaEvent(
          'exp_new_hp_8_text_rev',
          'Click on text reviews',
          'Section',
          slide.querySelector('.name').innerText.trim()
        );
      });
    }
  }, 2000);

  for (let tip of document.querySelectorAll('.lav-tooltip-wrap')) {
    tip.addEventListener('mouseenter', function () {
      if (window.innerWidth < 992) return false;

      gaEvent(
        'exp_new_hp_11_tips',
        'Tips 30 day',
        'Tips',
        tip.innerText.split('\n')[0]
      );
    });

    tip.addEventListener('click', function () {
      if (window.innerWidth > 992) return false;

      gaEvent(
        'exp_new_hp_11_tips',
        'Tips 30 day',
        'Tips',
        tip.innerText.split('\n')[0]
      );
    });
  }

  document
    .querySelector('.lav-show-reviews')
    .addEventListener('click', function () {
      this.remove();
      document.querySelector('.lav-reviews').classList.add('lav-reviews_all');
    });

  for (let item of document.querySelectorAll('.lav-reviews .slider .expand')) {
    item.addEventListener('click', function () {
      // this.remove();
      this.closest('.card-body-wrapper').classList.add('active');
      this.closest('.card-body')
        .querySelector('.review')
        .classList.add('review_expand');
    });
  }

  document
    .querySelector('.lav-safety__toggler')
    .addEventListener('click', function () {
      document.querySelector('.lav-safety__right').classList.add('active');
      this.remove();
    });

  renderTrialImage();
  setTimeout(renderTrialImage, 700);

  function renderTrialImage() {
    if (
      window.innerWidth <= 992 &&
      !document.querySelector('.lav-trial__info .lav-trial__image')
    ) {
      document
        .querySelector('.lav-trial__descr')
        .insertAdjacentElement(
          'afterend',
          document.querySelector('.lav-trial__image')
        );
    } else if (
      window.innerWidth > 992 &&
      !document.querySelector('.lav-trial__row>.lav-trial__image')
    ) {
      document
        .querySelector('.lav-trial__row')
        .insertAdjacentElement(
          'afterbegin',
          document.querySelector('.lav-trial__image')
        );
    }
  }

  window.onresize = renderTrialImage;

  document
    .querySelector('.lav-jumb__learn')
    .addEventListener('click', function () {
      document
        .querySelector('.lav-wears')
        .scrollIntoView({ behavior: 'smooth' });
    });

  for (let btn of document.querySelectorAll('.lav-btn-buy')) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      if (this.classList.contains('lav-jumb__btn')) {
        gaEvent(
          'exp_new_hp_1_CTA',
          'Click on Get Luminette3 Now',
          'Button',
          'First screen'
        );
      }

      if (this.classList.contains('lav-drinks__btn')) {
        gaEvent(
          'exp_new_hp_2_CTA',
          'Click on Get Luminette3 Now',
          'Button',
          'Natural substitute'
        );
      }

      if (this.classList.contains('lav-benefit__btn')) {
        gaEvent(
          'exp_new_hp_3_CTA',
          'Click on Get Luminette3 Now',
          'Button',
          'What are the benefits'
        );
      }

      if (this.classList.contains('lav-results__btn')) {
        gaEvent(
          'exp_new_hp_4_CTA',
          'Click on Get Luminette3 Now',
          'Button',
          'Get results in just 7 days'
        );
      }

      if (this.classList.contains('lav-faq__btn')) {
        gaEvent(
          'exp_new_hp_5_CTA',
          'Click on Get Luminette3 Now',
          'Button',
          'under FAQ'
        );
      }

      if (this.classList.contains('lav-trial__get')) {
        gaEvent(
          'exp_new_hp_10_trial',
          'Click on buy ' +
            this.querySelector('.btn-text').innerText +
            ' button',
          'Button',
          '30 day'
        );
      }

      document.querySelector('.glasses-item .btn-primary').click();
    });
  }

  for (let btn of document.querySelectorAll('.lav-btn-buy-drive')) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      // gaEvent2('Try it', 'Benefit from light therapy while driving');
      document.querySelector('.drive-item .btn-primary').click();
    });
  }

  let lang = detectLang();
  if (lang == 'fr') {
    initTranslateMain(lang);
  }
  initCountryTranslate();

  document
    .querySelector('.lav-drive__learn')
    .addEventListener('click', function (e) {
      e.preventDefault();
      location.href += '/drive';
      // gaEvent2('Learn more', 'Benefit from light therapy while driving');
    });

  function initSliders() {
    let initSplideInterval = setInterval(() => {
      if (typeof Splide == 'function') {
        clearInterval(initSplideInterval);
        let shortsSlider = new Splide('.lav-shorts__splide', {
          pagination: false,
          flickPower: 100,
          speed: 1000,
          arrows: false,
          perPage: 4,
          gap: '60px',
          breakpoints: {
            1200: {
              perPage: 2,
              type: 'loop',
              pagination: true,
            },
            768: {
              fixedWidth: '200px',
              gap: '24px',
              perPage: 1,
            },
          },
        }).mount();

        shortsSlider.on('moved', function () {
          gaEvent(
            'exp_new_pdp_video_reviews_hs',
            'Horizontal scrolling video reviews section',
            'Review section',
            'Review section'
          );
        });
      }
    }, 500);

    var thumbnails = document.querySelectorAll('.lav-jumb__thumb');
    var current;

    for (var i = 0; i < thumbnails.length; i++) {
      initThumbnail(thumbnails[i], i);
    }

    function initThumbnail(thumbnail, index) {
      thumbnail.addEventListener('click', function () {
        // gaEvent2(
        //   'exp_new_pdp_checkout_21',
        //   'Carousel',
        //   'Click on photo',
        //   'First screen with image slider'
        // );
        jumbSlider.go(index);
      });
    }

    let jqueryInterval = setInterval(() => {
      if (typeof $ === 'function') {
        clearInterval(jqueryInterval);

        const $sliderMob = $('.lav-cases__list');
        let isActiveMobSlider = false;

        $(window).resize(handleMobSlider);
        handleMobSlider();

        function handleMobSlider() {
          if ($(window).width() > 768 && isActiveMobSlider) {
            isActiveMobSlider = false;
            $sliderMob.slick('unslick');
          } else if (!isActiveMobSlider && $(window).width() <= 768) {
            isActiveMobSlider = true;
            $sliderMob.slick({
              dots: true,
              arrows: false,
              infinite: true,
              speed: 300,
              slidesToShow: 1,
              // centerMode: true,
              variableWidth: true,
            });
          }
        }

        $sliderMob.on('swipe', function () {
          gaEvent(
            'exp_new_hp_19_swipe',
            'Swipe',
            'Section',
            'Wear Luminette while'
          );
        });

        // JS Slider
        const $slider = $('.slider');
        // $showMore = $section.find('.show-more');

        let sliderActivated = false;
        let showMoreActivated = false;
        const options = {
          centerMode: true,
          centerPadding: 0,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          speed: 375,
          dots: true,
        };

        const resizeHandler = () => {
          const isMobile = window.matchMedia('(max-width: 1199.98px)').matches;

          if (isMobile) {
            if (sliderActivated) {
              $slider.slick('unslick');
              sliderActivated = false;
            }
          } else if (!sliderActivated) {
            try {
              const classificateDots = (prevDotIndex) => {
                const prevPrevDotIndex = prevDotIndex - 1;
                const nextDotIndex = prevDotIndex + 2;
                const nextNextDotIndex = prevDotIndex + 3;

                const $dots = $slider.find('.slick-dots > li').removeClass(`
                  slick-prev 
                  slick-next 
                  slick-prev-prev 
                  slick-next-next 
                  slick-prev-max 
                  slick-next-max
                `);

                for (let i = 0; i < prevPrevDotIndex; i++) {
                  $slider.find(`li:nth-child(${i})`).addClass('slick-prev-max');
                }

                for (let i = $dots.length; i > nextNextDotIndex; i--) {
                  $slider.find(`li:nth-child(${i})`).addClass('slick-next-max');
                }

                $slider
                  .find(
                    `li:nth-child(${
                      prevDotIndex > 0 ? prevDotIndex : $dots.length
                    })`
                  )
                  .addClass('slick-prev');

                $slider
                  .find(`li:nth-child(${prevPrevDotIndex ?? 0}`)
                  .addClass('slick-prev-prev');

                $slider
                  .find(
                    `li:nth-child(${
                      nextDotIndex > $dots.length ? 1 : nextDotIndex
                    })`
                  )
                  .addClass('slick-next');

                $slider
                  .find(`li:nth-child(${nextNextDotIndex ?? 0})`)
                  .addClass('slick-next-next');
              };

              $slider.slick(options);
              sliderActivated = true;

              classificateDots(0);

              $slider.on('beforeChange', (_e, _slick, _curr, next) =>
                classificateDots(next)
              );

              $('.lav-reviews .slick-prev').on('click', function () {
                gaEvent(
                  'exp_new_hp_8_text_rev',
                  'Click on arrow reviews',
                  'Section',
                  'Left'
                );
              });
              $('.lav-reviews .slick-next').on('click', function () {
                gaEvent(
                  'exp_new_hp_8_text_rev',
                  'Click on arrow reviews',
                  'Section',
                  'Right'
                );
              });
            } catch (error) {
              console.log(error);
            }
          }
        };

        $(window).resize(resizeHandler);
        resizeHandler();
      }
    }, 200);
  }

  function initModals() {
    for (let item of document.querySelectorAll('.lav-open-modal')) {
      item.addEventListener('click', function (e) {
        e.preventDefault();

        if (item.classList.contains('lav-shorts__preview')) {
          gaEvent(
            'exp_new_pdp_video_reviews_cvr',
            item.dataset.name,
            'Review section',
            'Review section'
          );
        }

        if (item.classList.contains('lav-morning__preview')) {
          gaEvent(
            'exp_new_hp_6_glasses_video',
            'Click on lum glasses video',
            'Button',
            'video'
          );
        }

        if (item.classList.contains('lav-reviews__play')) {
          gaEvent(
            'exp_new_hp_9_video_rev',
            'Click on video reviews',
            'Section',
            item.dataset.name
          );
        }

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
  }

  function openModal(selector, src) {
    if (src) {
      selector.querySelector('iframe').src = src;
    }

    if (src.includes('/video/')) {
      document.querySelector('.lav-modal').classList.add('lav-modal__video');
    } else {
      document.querySelector('.lav-modal').classList.remove('lav-modal__video');
    }

    document.querySelector('.lav-modal').classList.add('active');

    setTimeout(() => {
      selector.classList.add('active');
    }, 400);

    if (
      selector.querySelector('iframe') &&
      selector.querySelector('iframe').src.includes('youtube')
    ) {
      selector.querySelector('iframe').src = selector
        .querySelector('iframe')
        .src.replace('autoplay=0', 'autoplay=1');
    }
  }

  function closeModal() {
    // if (document.querySelector('.lav-modal__inner.active iframe')) {
    //   document.querySelector('.lav-modal__inner.active iframe').src = document
    //     .querySelector('.lav-modal__inner.active iframe')
    //     .src.replace('autoplay=1', 'autoplay=0');
    // }
    setTimeout(() => {
      // if (document.querySelector('.lav-modal__inner.active iframe')) {
      document.querySelector('.lav-modal__inner iframe').src = '';
      // }
    }, 500);

    document
      .querySelector('.lav-modal__inner.active')
      .classList.remove('active');

    setTimeout(() => {
      document.querySelector('.lav-modal.active').classList.remove('active');
    }, 400);
  }

  function detectLang() {
    let lang = 'eng';
    // en-us / en-ca / en-gb
    // fr / fr-be / fr-ca
    if (location.href.includes('com/fr')) {
      lang = 'fr';
    }

    return lang;
  }

  function initTranslateMain(lang) {
    console.log('init translate', lang);
  }

  function initCountryTranslate(lang) {
    console.log('initCountryTranslate');

    if (location.href.includes('com/fr')) {
      document.querySelector('.lav-lucimed__link').href = '/etudes-cliniques';
    }

    if (
      location.href.includes('com/en-us') ||
      location.href.includes('com/en-ca')
    ) {
      if (location.href.includes('com/en-ca')) {
        document.querySelector('.lav-trial__get .btn-text').innerText =
          'Buy $249';
        document.querySelector('.lav-drive__btn .btn-text').innerText =
          'Buy $189';
      }
      return false;
    }

    if (
      location.href.includes('com/uk') &&
      !location.href.includes('com/uk-')
    ) {
      document.querySelector('.lav-lucimed__link').href =
        'https://www.myluminette.com/uk/clinical-study';

      for (let item of document.querySelectorAll('.tooltip__link')) {
        item.href = 'https://www.myluminette.com/uk/delivery#returns-block';
      }

      document.querySelector('.lav-trial__get .btn-text').innerText =
        'Buy £169';
      document.querySelector('.lav-drive__btn .btn-text').innerText =
        'Buy £129';

      document.querySelector('.lav-delivery__plate-flags').src =
        settings.dir + '/img/flags-gb.png';
      document.querySelector('.lav-delivery__plate-caption').innerHTML =
        'Free for United Kingdom:<div class="fw-bold d-block">1 to 3 working days</div>';
      document.querySelector('.lav-delivery__plate-service').src =
        settings.dir + '/img/delivery-methods2.png';
      document.querySelector('.lav-delivery__descr').innerText =
        "For any orders from the UK, the parcels are shipped from Amazon's warehouses located in the UK with Amazon's selected carrier. Before delivering your order, the carrier will send you a SMS or Email, informing you of the day it will be delivered. You have the option of delaying delivery for up to 3 days. If you do not reply, the delivery date will be that proposed by the transporter.";
      return false;
    }

    if (
      location.href.includes('com/fr') &&
      !location.href.includes('com/fr-')
    ) {
      document.querySelector('.lav-safety__descr-country').remove();
      document.querySelector('.lav-trial__get .btn-text').innerText =
        'Achat 229€';
      document.querySelector('.lav-drive__btn .btn-text').innerText =
        'Achat 179€';

      document.querySelector('.lav-delivery__plate-flags').src =
        settings.dir + '/img/flags-fr.png';
      document.querySelector('.lav-delivery__plate-caption').innerHTML =
        'Livraison gratuite en France:<div class="fw-bold d-block">2 à 5 jours ouvrables</div>';
      document.querySelector('.lav-delivery__plate-service').src =
        settings.dir + '/img/delivery-methods2.png';
      document.querySelector('.lav-delivery__descr').innerText =
        'Nous travaillons le plus souvent avec Colissimo. Avant de vous livrer votre colis, le transporteur vous enverra un email avec un lien vous permettant de suivre le colis.';
      return false;
    }

    if (location.href.includes('com/fr-be')) {
      document.querySelector('.lav-safety__descr-country').remove();
      document.querySelector('.lav-trial__get .btn-text').innerText =
        'Achat 229€';
      document.querySelector('.lav-drive__btn .btn-text').innerText =
        'Achat 179€';

      document.querySelector('.lav-delivery__plate-flags').src =
        settings.dir + '/img/flags-be.png';
      document.querySelector('.lav-delivery__plate-caption').innerHTML =
        'Livraison gratuite en Belgique:<div class="fw-bold d-block">1 à 3 jours ouvrables</div>';
      document.querySelector('.lav-delivery__plate-service').src =
        settings.dir + '/img/delivery-methods2.png';
      document.querySelector('.lav-delivery__descr').innerText =
        'Nous travaillons le plus souvent avec Bpost. Avant de vous livrer votre colis, le transporteur vous enverra un email avec un lien vous permettant de suivre le colis.';
      return false;
    }

    if (location.href.includes('com/fr-ca')) {
      document.querySelector('.lav-trial__get .btn-text').innerText =
        'Achat $249';
      document.querySelector('.lav-drive__btn .btn-text').innerText =
        'Achat $189';

      document.querySelector('.lav-delivery__plate-flags').src =
        settings.dir + '/img/flags.png';
      document.querySelector('.lav-delivery__plate-caption').innerHTML =
        'Pour les États-Unis et le Canada:<div class="fw-bold d-block">3 à 5 jours ouvrables</div>';
      document.querySelector('.lav-delivery__plate-service').src =
        settings.dir + '/img/delivery-methods.png';
      document.querySelector('.lav-delivery__descr').innerText =
        "Nous travaillons le plus souvent avec la logistique Fulfilled-by-Amazon (FBA) qui dispose d'entrepôts au Canada. Nous utilisons généralement le transporteur Purolator pour envoyer les colis. Avant de livrer votre colis, le transporteur vous envoie un email vous avertissant du jour de son passage.";
      return false;
    }
  }
}

function init() {
  if (detectLang() === 'fr') {
    document.body.classList.add('lav-france');
  }
  console.log('init');
  const stylesEl = document.createElement('style');
  stylesEl.innerHTML = stylePDP;
  if (location.href.includes('/luminette')) {
    let pdpInterval = setInterval(() => {
      if (document.querySelector('.section-main')) {
        clearInterval(pdpInterval);
        initPdp();
        if (detectLang() === 'fr') {
          initTranslate('pdp');
        }
        initObserver();
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
        initTranslate('checkout');
        initObserverCheckout();
      }
    }, 100);
  } else if (/order\/details\/\d+/.test(location.href)) {
    document.body.classList.add('lav-body-confirm');
    let checkoutInterval = setInterval(() => {
      if (document.querySelector('.order-info .column.order-5')) {
        clearInterval(checkoutInterval);
        initCheckoutDetails();
        initTranslate('details');
        initObserverCheckout();
      }
    }, 100);
  }
}

function detectLang() {
  let lang = 'eng';
  // en-us / en-ca / en-gb
  // fr / fr-be / fr-ca
  if (location.href.includes('com/fr')) {
    lang = 'fr';
  }

  return lang;
}

function initTranslate(page) {
  return false;
  if (page == 'pdp') {
    document.querySelector('.lav-jumb__title').innerText =
      'Lunettes de luminothérapie Luminette 3';
    document.querySelector('.lav-jumb__effects-title>span').innerText =
      'Ressentez les effets bénéfiques en 4 à 7 jours';
    document.querySelector(
      '.lav-jumb__effects-title .tooltip-item'
    ).innerHTML = `Les effets bénéfiques de la Luminette® sont presque immédiats.
    Après quelques séances, vous sentirez votre énergie revenir, vos cycles de sommeil s'améliorer et votre humeur s'améliorer.
    Si vous utilisez Luminette pour corriger un trouble des rythmes du sommeil, les résultats seront perceptibles après 7 jours.`;
    document.querySelector('.lav-jumb__title').innerText =
      'Lunettes de luminothérapie Luminette 3';
    document.querySelector('.lav-jumb__title').innerText =
      'Lunettes de luminothérapie Luminette 3';
    ('Ressentez les effets bénéfiques en 4 à 7 jours');
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

  let newLayout = `
    <section class='lav-jumb'>
      <div class='container-fluid container--size--lg'>
        <div class='lav-jumb__inner'>
          <div class='lav-jumb__slider-wrap'>
            <div class="splide lav-jumb__slider">
              <div class="splide__track">
                <ul class="splide__list">
                  <li class="splide__slide">
                    <img class='lav-jumb__desc' src="${settings.dir}/img/slide1.jpeg" alt="">
                    <img class='lav-jumb__mob' src="${settings.dir}/img/slide1-mob.jpeg" alt="">
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
                    <img class='lav-jumb__desc' src="${settings.dir}/img/slide4.jpeg" alt="">
                    <img class='lav-jumb__mob' src="${settings.dir}/img/slide4-mob.jpeg" alt="">
                  </li>
                  <li class="splide__slide">
                    <img src="${settings.dir}/img/slide5.jpeg" alt="">
                  </li>
                  <li class="splide__slide">
                    <img class='lav-jumb__desc' src="${settings.dir}/img/slide6.jpeg" alt="">
                    <img class='lav-jumb__mob' src="${settings.dir}/img/slide6-mob.jpeg" alt="">
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
            <div class='lav-jumb__title'>Luminette 3 Light&nbsp;Therapy&nbsp;Glasses</div>
            <div class='lav-jumb__feedbacks'>
              <div class='lav-jumb__feedbacks-star'>
                <img src='${settings.dir}/img/stars.svg' />
              </div>
              <div class='lav-jumb__feedbacks-caption'>(<u>Over 900+ positive reviews</u>)</div>
            </div>
            <div class='lav-jumb__effects'>
              <div class='lav-jumb__effects-title'>
                <span>Feel beneficial effects in 4 to 6 days</span>
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

            <div class='lav-count lav-observe'>
              <div class='lav-count__head'>
                <div class='lav-count__head-title'>Quantity</div>
                <div class='lav-count__head-inside'>
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
                    <span class='lav-count__discount'>-20%</span>
                  </div>
                  <div class='lav-count__price'>$159<sup>20</sup></div>
                  <div class='lav-count__caption'>per unit</div>
                </div>
                <div class='lav-count__item' data-count='3'>
                  <div class='lav-count__image'>
                    <img src='${settings.dir}/img/pr-3.png' />
                  </div>
                  <div class='lav-count__title'>
                    3 Luminettes
                    <span class='lav-count__discount'>-25%</span>
                  </div>
                  <div class='lav-count__price'>$149<sup>25</sup></div>
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
        <div class="days-test lav-observe">
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
                <div class="d-flex align-items-center days-test_head">
                  <p class="fs-22 fw-bold mr-2">Free shipping</p>
                  <div class="tooltip d-flex">
                    <img src="https://conversionratestore.github.io/projects/luminette/img/info.svg" alt="info"/>
                    <div class="tooltip-dropdown fs-16">
                      <div class="tooltip-item">
                        <div class="tooltip_free text-center mb-2">
                          <div class="d-flex align-items-center justify-content-center mb-2 pb-1">
                            <img height='24' src="${settings.dir}/img/flags.png" alt="">
                          </div>
                          <p> Free for USA and Canada: <div class="fw-bold d-block">3 to 5 working days</div></p>
                        </div>
                        <div class="d-flex align-items-center justify-content-center mb-2 py-1">
                          <img class="mr-2" src="${settings.dir}/img/delivery-methods.png" />
                        </div>
                        <p class="">Orders are shipped from our logistics center located in Boise, Idaho. We use the services of FedEx Ground or USPS. Before they deliver your package, the carrier sends you an email warning you of the day of its passage.</p>
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
                <div class="d-flex align-items-md-center align-items-end days-test_head">
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

    <section class='lav-shorts__wrap'>
      <div class='container-fluid container--size--lg'>
        <div class="lav-shorts lav-observe">
          <div class="lav-shorts__title text-center">150,000+ people boost their energy with Luminette</div>
          <div class="lav-shorts__caption text-center">Here’s what our users are saying after using Luminette</div>

          <div class="splide lav-shorts__splide">
            <div class="splide__track">
              <div class="lav-shorts__list splide__list">
                <div class='lav-shorts__item splide__slide'>
                  <div class='lav-shorts__preview lav-open-modal' data-target='.lav-review-modal' data-name='Brooke' data-src='https://www.youtube.com/embed/7GVQUjaxrwU?autoplay=1'>
                    <img  src="https://flopsi69.github.io/crs/myluminette/checkout/video/brook.png" />
                  </div>
                  <div class='lav-shorts__info'>
                    <div class='lav-shorts__stars'>
                      <img  src="https://flopsi69.github.io/crs/myluminette/checkout/img/stars-shorts.svg" />
                    </div>
                    <div class='lav-shorts__quote'>
                      “20 minutes a day has been an absolute game changer for me”
                    </div>
                    <div class='lav-shorts__inst'>
                      <img  src="https://flopsi69.github.io/crs/myluminette/checkout/img/icon-inst.svg" />
                      </span>Brooke G.</span>
                    </div>
                  </div>
                </div>
                
                <div class='lav-shorts__item splide__slide'>
                  <div class='lav-shorts__preview lav-open-modal' data-target='.lav-review-modal' data-name='Lily' data-src='https://www.youtube.com/embed/GWxMqWoE4CU?autoplay=1'>
                    <img  src="https://flopsi69.github.io/crs/myluminette/checkout/video/guilty.png" />
                  </div>
                  <div class='lav-shorts__info'>
                    <div class='lav-shorts__stars'>
                      <img  src="https://flopsi69.github.io/crs/myluminette/checkout/img/stars-shorts.svg" />
                    </div>
                    <div class='lav-shorts__quote'>
                      “Luminette glasses gave me my energy back”
                    </div>
                    <div class='lav-shorts__inst'>
                      <img  src="https://flopsi69.github.io/crs/myluminette/checkout/img/icon-inst.svg" />
                      </span>The guilty mom</span>
                    </div>
                  </div>
                </div>

                <div class='lav-shorts__item splide__slide'>
                  <div class='lav-shorts__preview lav-open-modal' data-target='.lav-review-modal' data-name='Theodora' data-src='https://www.youtube.com/embed/GE-FPNrR1rY?autoplay=1'>
                    <img  src="https://flopsi69.github.io/crs/myluminette/checkout/video/elsa.png" />
                  </div>
                  <div class='lav-shorts__info'>
                    <div class='lav-shorts__stars'>
                      <img  src="https://flopsi69.github.io/crs/myluminette/checkout/img/stars-shorts.svg" />
                    </div>
                    <div class='lav-shorts__quote'>
                      “After first week my mood has definitely improved”
                    </div>
                    <div class='lav-shorts__inst'>
                      <img  src="https://flopsi69.github.io/crs/myluminette/checkout/img/icon-inst.svg" />
                      </span>Elsa</span>
                    </div>
                  </div>
                </div>

                <div class='lav-shorts__item splide__slide'>
                  <div class='lav-shorts__preview lav-open-modal' data-target='.lav-review-modal' data-name='Cassandra' data-src='https://www.youtube.com/embed/zsgDuSXgNYc?autoplay=1'>
                    <img  src="https://flopsi69.github.io/crs/myluminette/checkout/video/cass.png" />
                  </div>
                  <div class='lav-shorts__info'>
                    <div class='lav-shorts__stars'>
                      <img  src="https://flopsi69.github.io/crs/myluminette/checkout/img/stars-shorts.svg" />
                    </div>
                    <div class='lav-shorts__quote'>
                      “Super simple and easy way to fight seasonal blues”
                    </div>
                    <div class='lav-shorts__inst'>
                      <img  src="https://flopsi69.github.io/crs/myluminette/checkout/img/icon-inst.svg" />
                      </span>Cass</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section class='lav-recharge lav-observe'>
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

    <section class='lav-transforms lav-observe'>
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

    <section class='compare-section lav-observe'>
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

    <section class='lav-can lav-observe'>
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
            <div class='lav-can__item'>(e.g. walking, using an indoor exercise bicycle, yoga)</div>
          </div>
        </div>
      </div>
    </section>

    <section class='lav-perfect lav-observe'>
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
        <div class='lav-trial__row lav-observe'>
          <img class='lav-trial__image' src='${settings.dir}/img/trial.png' />

          <div class='lav-trial__info'>
            <div class='lav-trial__title lav-title'>30 Day <br/> Light Therapy Trial</div>
            <div class='lav-trial__descr lav-text'>Test out Luminette's patented Light Therapy for an entire 30 days, and if you aren't satisfied, send it back and we'll refund you!</div>

            <div class='lav-trial__buttons'>
              <div class='lav-trial__btn lav-trial__btn-refresh lav-tooltip-wrap'>
                <img src='${settings.dir}/img/icon-refresh.svg' />
                <span>
                  30-day <br class='lav-trial__btn-mob'/>trial
                  <span class="tooltip d-inline-block d-sm-none">
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
                  </span>
                </span>
                <div class="tooltip d-sm-flex d-none ml-2">
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
                <span>
                  Free <br class='lav-trial__btn-mob'/>shipping
                  <span class="tooltip d-inline-block d-sm-none">
                    <img class='lav-info-invert' src="https://conversionratestore.github.io/projects/luminette/img/info.svg" alt="info"/>
                    <div class="tooltip-dropdown text-left fs-16">
                      <div class="tooltip-item">
                        <div class="tooltip_free text-center mb-2">
                          <div class="d-flex align-items-center justify-content-center mb-2 pb-1">
                            <img height='24' src="${settings.dir}/img/flags.png" alt="">
                          </div>
                          <p> Free for USA and Canada: <div class="fw-bold d-block">3 to 5 working days</div></p>
                        </div>
                        <div class="d-flex align-items-center justify-content-center mb-2 py-1">
                          <img class="mr-2" src="${settings.dir}/img/delivery-methods.png" />
                        </div>
                        <p class="">Orders are shipped from our logistics center located in Boise, Idaho. We use the services of FedEx Ground or USPS. Before they deliver your package, the carrier sends you an email warning you of the day of its passage.</p>
                      </div> 
                    </div>
                  </span>
                </span>
                <div class="tooltip d-sm-flex d-none ml-2">
                  <img class='lav-info-invert' src="https://conversionratestore.github.io/projects/luminette/img/info.svg" alt="info"/>
                  <div class="tooltip-dropdown text-left fs-16">
                    <div class="tooltip-item">
                      <div class="tooltip_free text-center mb-2">
                        <div class="d-flex align-items-center justify-content-center mb-2 pb-1">
                          <img height='24' src="${settings.dir}/img/flags.png" alt="">
                        </div>
                        <p> Free for USA and Canada: <div class="fw-bold d-block">3 to 5 working days</div></p>
                      </div>
                      <div class="d-flex align-items-center justify-content-center mb-2 py-1">
                        <img class="mr-2" src="${settings.dir}/img/delivery-methods.png" />
                      </div>
                      <p class="">Orders are shipped from our logistics center located in Boise, Idaho. We use the services of FedEx Ground or USPS. Before they deliver your package, the carrier sends you an email warning you of the day of its passage.</p>
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

              <div class='lav-trial__inside'>
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
        <div class="technical lav-observe">
          <div class="row technical-block">
            <div class="col-lg-6 pl-0">
              <h2>Technical <br>
              Details</h2>
            </div>
            <div class="col-lg-6 fs-18">
              <div class="row pb-2 bb-2">
                <div class="col-sm-7 col-6 pl-0">Product Dimensions</div>
                <div class="col-sm-5 col-6 fw-semi pr-0 pl-1">3"D x 9.06"W x6.26"H</div>
              </div>
              <div class="row py-2 bb-2">
                <div class="col-sm-7 col-6 pl-0">Light Source Type</div>
                <div class="col-sm-5 col-6 fw-semi pr-0 pl-1">LED</div>
              </div>
              <div class="row py-2 bb-2">
                <div class="col-sm-7 col-6 pl-0">Number of Light Sources</div>
                <div class="col-sm-5 col-6 fw-semi pr-0 pl-1">3</div>
              </div>
              <div class="row py-2 bb-2">
                <div class="col-sm-7 col-6 pl-0">Item Weight</div>
                <div class="col-sm-5 col-6 fw-semi pr-0 pl-1">1.83 ounces (51g)</div>
              </div>
            </div>
          </div>
          <div class="safety-block lav-observe">
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

    <section class='lav-users lav-section lav-observe'>
      <img class='lav-users__image' src='${settings.dir}/img/users-bg.png' />
      <img class='lav-users__image-mob' src='${settings.dir}/img/users-bg-mob.png' />
      <div class='lav-users__title-mob container'><span>150k+</span> Luminette users</div>
      <div class='lav-users__title container'><span>150 000</span> Luminette users</div>
    </section>

    <section class='lav-reviews lav-observe'>
      <div class='container-fluid container--size--lg lav-reviews__container'>
        <div class='lav-reviews__title lav-title'>Customer reviews</div>

        <div class='lav-reviews__list splide' style='display: none;'>
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

        <div class="slider-wrapper position-relative">
          <div class="slider">
            <div class="slide">
              <div class="card">
                <div class="card-header text-center">
                  <picture class="avatar d-block">
                    <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/16@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/16.png 1x"/>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/16.png" alt="Customer avatar">
                  </picture>
                  <div class="h4 name fw-bolder">Arnaud T.</div>
                  <a href="https://www.google.com/maps/contrib/111655687148446401076/reviews/@50.5779487,5.2610511,16z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                    <span>
                      Read the review on <b>Google</b>
                    </span>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                  </a>
                </div>
                <div class="card-body-wrapper">
                  <div class="card-body">
                    <p class="review">"Every year I notice the lack of light and it affects my mood.
                      This year I found the solution to remedy this with the Luminette. The advantage is that
                      you are not stuck in front of a screen while you use it, so and you can get ready in the morning or eat
                      breakfast
                      with the glasses on. It is very practical :)"
                    </p>
                    <button class="fw-bolder expand">Show more</button>
                    <div class="date">4 March 2021</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="card">
                <div class="card-header text-center">
                  <picture class="avatar d-block">
                    <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/4@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/4.png 1x"/>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/4.png" alt="Customer avatar">
                  </picture>
                  <div class="h4 name fw-bolder">Laura S.</div>
                  <a href="https://www.amazon.com/gp/customer-reviews/R37M192JK2SORZ/ref=cm_cr_getr_d_rvw_ttl?ie=UTF8&ASIN=B07VMRRB9Y" target="_blank" class="link">
                    <span>
                      Read the review on <b>Amazon</b>
                    </span>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                  </a>
                </div>
                <div class="card-body-wrapper">
                  <div class="card-body">
                    <p class="review">I use Luminettes since the beginning of October 2020 to deal with my Seasonal Affective
                      Disorder
                      (SAD). So far, I have no symptoms of SAD, despite the time changing (winter time) and the sun
                      disappearing at 4:30 PM. It is a first. I am amazed.my energy level has increased and I feel
                      free and joyous most of the time. I also sleep much better. I must add that I stopped
                      caffeine,
                      which helps as well.
                      Luminettes are far, far better than the lamps. I wear them every morning without being obliged
                      to stare at the lamp. My mood has really improved.
                      They are very convenient and easy to use. I put them onto the top of my glasses. They recharge
                      easily and they can be used without plugging them every day.
                      Everyone who sees me wearing them (when I attend online meetings, when I go to the dentist,
                      etc)
                      are asking me if it works. People think it is pretty and they are very interested because they
                      always have someone in their family with SAD, or they are afflicted by that disorder
                      themselves.
                      So really, no complaints, only good things to say about my Luminettes which are as precious
                      now
                      as my cell phone.
                      Merci!"
                      caffeine,
                      which helps as well.
                      Luminettes are far, far better than the lamps. I wear them every morning without being obliged
                      to stare at the lamp. My mood has really improved.
                      They are very convenient and easy to use. I put them onto the top of my glasses. They recharge
                      easily and they can be used without plugging them every day.
                      Everyone who sees me wearing them (when I attend online meetings, when I go to the dentist,
                      etc)
                      are asking me if it works. People think it is pretty and they are very interested because they
                      always have someone in their family with SAD, or they are afflicted by that disorder
                      themselves.
                      So really, no complaints, only good things to say about my Luminettes which are as precious
                      now
                      as my cell phone.
                      Merci!
                    </p>
                    <button class="fw-bolder expand">Show more</button>
                    <div class="date">21 December 2020</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="card">
                <div class="card-header text-center">
                  <picture class="avatar d-block">
                    <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/1@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/1.png 1x"/>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/1.png" alt="Customer avatar">
                  </picture>
                  <div class="h4 name fw-bolder">Rémy Z.</div>
                  <a href="https://www.google.com/maps/contrib/112247709787810698381/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@50.5779487,5.2632398,17z/data=!4m6!1m5!8m4!1e2!2s112247709787810698381!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                    <span>
                      Read the review on <b>Google </b>
                    </span>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                  </a>
                </div>
                <div class="card-body-wrapper">
                  <div class="card-body">
                    <p class="review">Excellent light therapy glasses.  I use them every morning when I wake up. I
                      have been
                      suffering
                      from
                      seasonal depression for several years, but thanks to Luminettes I have been feeling
                      the
                      effects
                      of my
                      mood disorders much less in autumn and winter. I use them from mid-fall until the end of March. I used to
                      have
                      a
                      light therapy 
                      lamp, but it was quite restrictive to stay in front of it all the time.
                      With
                      my
                      Luminettes I can go about my business without any problem.
                      I am very satisfied!
                    </p>
                    <button class="fw-bolder expand">Show more</button>
                    <div class="date">21 December 2020</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="card">
                <div class="card-header text-center">
                  <picture class="avatar d-block">
                    <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/2@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/2.png 1x"/>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/2.png" alt="Customer avatar">
                  </picture>
                  <div class="h4 name fw-bolder">Dominique M.</div>
                  <a href="https://www.amazon.fr/gp/customer-reviews/R2TECJ5KRJG2TC/ref=cm_cr_getr_d_rvw_ttl?ie=UTF8&ASIN=B07VMRRB9Y" target="_blank" class="link">
                    <span>
                      Read the review on <b>Amazon</b>
                    </span>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                  </a>
                </div>
                <div class="card-body-wrapper">
                  <div class="card-body">
                    <p class="review">Every year, the coming of autumn for me means depression, tiredness, long sleeps and
                      and exhaustion in the afternoon! I spoke about it to the doctor who advised me to try
                      the Luminette. I decided to buy it and use it every morning. So , I
                      eat
                      my breakfast with the Luminette on, without any discomfort, for 20 minutes. It allows me to
                      move around and see what I'm doing, unlike the old devices that
                      stayed
                      on the table, and which, according to the studies carried out, were useless because the luminosity of the
                      the leds did not come from higher than head level and thus did not reach the
                      eye's sensors...
                      Now, I feel fit and healthy during the day, and if during winter I feel tired after lunch, I do a
                      I do a session again. This way, my body stops producing melatonin and my energy
                      comes back, I feel better about myself and I'm in a better mood!
                    </p>
                    <button class="fw-bolder expand">Show more</button>
                    <div class="date">21 December 2020</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="card">
                <div class="card-header text-center">
                  <picture class="avatar d-block">
                    <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/3@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/3.png 1x"/>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/3.png" alt="Customer avatar">
                  </picture>
                  <div class="h4 name fw-bolder">Maïté T.</div>
                  <a href="https://www.amazon.fr/gp/customer-reviews/R1GSLSI9OTO56U/ref=cm_cr_arp_d_rvw_ttl?ie=UTF8&ASIN=B07VMRRB9Y" target="_blank" class="link">
                    <span>
                      Review on <b>Amazon</b>
                    </span>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                  </a>
                </div>
                <div class="card-body-wrapper">
                  <div class="card-body">
                    <p class="review">"I have fibromyalgia, major sleep problems, and an obvious lack of energy when the
                      sun
                      goes away. My neurologist recommended your glasses. I am delighted, I have
                      more energy, but unfortunately this does not affect my pain. But since I'm in better shape, I think it's really great!
                      Autumn and winter no longer scare me thanks to these glasses.
                      I am ready to face them! I really recommend it and I can't stop talking about it to everyone
                      around me."
                    </p>
                    <button class="fw-bolder expand">Show more</button>
                    <div class="date">21 December 2020</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="card">
                <div class="card-header text-center">
                  <picture class="avatar d-block">
                    <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/5@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/5.png 1x"/>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/5.png" alt="Customer avatar">
                  </picture>
                  <div class="h4 name fw-bolder">Muriel V.</div>
                  <a href="https://www.google.com/maps/contrib/107266988971890423777/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@50.5779487,5.2632398,17z/data=!4m6!1m5!8m4!1e2!2s107266988971890423777!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                    <span>
                      Review on <b>Google maps</b>
                    </span>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                  </a>
                </div>
                <div class="card-body-wrapper">
                  <div class="card-body">
                    <p class="review">"I was prescribed it by my neurologist for my sleep disorders and epilepsy, and now I
                      can't
                      do without it anymore. The fact that they are glasses is very practical because you can do
                      things (like brushing your teeth, eating lunch, reading or even starting work).
                      start working). They are delivered with a very practical cover for storage
                      and/or for travelling.
                      I just don't recommend using them in a dark room.
                      "
                    </p>
                    <button class="fw-bolder expand">Show more</button>
                    <div class="date">21 December 2020</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="card">
                <div class="card-header text-center">
                  <picture class="avatar d-block">
                    <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/6@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/6.png 1x"/>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/6.png" alt="Customer avatar">
                  </picture>
                  <div class="h4 name fw-bolder">Rita R.</div>
                  <a href="https://www.google.com/maps/contrib/100137502211655470427/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@50.6323126,5.3985949,11z/data=!4m6!1m5!8m4!1e1!2s100137502211655470427!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                    <span>
                      Review on <b>Google maps</b>
                    </span>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                  </a>
                </div>
                <div class="card-body-wrapper is-visible">
                  <div class="card-body">
                    <p class="review">"After 5 days of using my luminette, I already feel better...
                      Try it and you'll never stop using it.
                      I've been wearing it for 3 years in autumn for 20 minutes a day ... while having breakfast"
                    </p>
                    <div class="date">21 December 2020</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="card">
                <div class="card-header text-center">
                  <picture class="avatar d-block">
                    <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/7@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/7.png 1x"/>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/7.png" alt="Customer avatar">
                  </picture>
                  <div class="h4 name fw-bolder">Audrey B.</div>
                  <a href="https://www.google.com/maps/contrib/105110317360703574808/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@50.5779487,5.2632398,17z/data=!4m6!1m5!8m4!1e2!2s105110317360703574808!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                    <span>
                      Review on <b>Google maps</b>
                    </span>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                  </a>
                </div>
                <div class="card-body-wrapper is-visible">
                  <div class="card-body">
                    <p class="review">"I am very happy with the luminette! (I have the luminette 3). I have better sleep cycles
                      and they help me to wake up in the morning (as well as a coffee). Plus they are
                      easy to wear. Every morning I tell myself that I did the right thing by buying them! I
                      recommend them!
                      "
                    </p>
                    <div class="date">21 December 2020</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="card">
                <div class="card-header text-center">
                  <picture class="avatar d-block">
                    <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/8@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/8.png 1x"/>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/8.png" alt="Customer avatar">
                  </picture>
                  <div class="h4 name fw-bolder">Christopher T.</div>
                  <a href="https://www.google.com/maps/contrib/105475160819624793335/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@50.5779487,5.2632398,17z/data=!4m6!1m5!8m4!1e2!2s105475160819624793335!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                    <span>
                      Review on <b>Google maps</b>
                    </span>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                  </a>
                </div>
                <div class="card-body-wrapper is-visible">
                  <div class="card-body">
                    <p class="review">"I am delighted with model 2.
                      The Luminette is easy to use and allows me to be active in the morning and makes it easier
                      to fall asleep. My neurologist gave me good advice!
                      I will probably switch to model 3 in the future...
                      "
                    </p>
                    <div class="date">21 December 2020</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="card">
                <div class="card-header text-center">
                  <picture class="avatar d-block">
                    <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/9@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/9.png 1x"/>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/9.png" alt="Customer avatar">
                  </picture>
                  <div class="h4 name fw-bolder">Gregory E.</div>
                  <a href="https://www.google.com/maps/contrib/117879807108998873428/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@50.3197246,6.3556338,7.58z/data=!4m4!1m3!8m2!1e1!2s117879807108998873428?hl=fr-BE" target="_blank" class="link">
                    <span>
                      Review on <b>Google maps</b>
                    </span>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                  </a>
                </div>
                <div class="card-body-wrapper is-visible">
                  <div class="card-body">
                    <p class="review">"I have had my luminettes 3 since March 2020 and I can't do without them anymore, they are perfect
                      for
                      jet lag or sleep disorders.
                      "
                    </p>
                    <div class="date">21 December 2020</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="card">
                <div class="card-header text-center">
                  <picture class="avatar d-block">
                    <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/10@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/10.png 1x"/>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/10.png" alt="Customer avatar">
                  </picture>
                  <div class="h4 name fw-bolder">Florence M.</div>
                  <a href="https://www.google.com/maps/contrib/114308199652100072679/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@50.5779487,5.2632398,17z/data=!4m6!1m5!8m4!1e2!2s114308199652100072679!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                    <span>
                      Review on <b>Google maps</b>
                    </span>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                  </a>
                </div>
                <div class="card-body-wrapper is-visible">
                  <div class="card-body">
                    <p class="review">I have had them for a year now. They were recommended to me by my therapist, and I feel a real improvement in my mood and fatigue.
                    </p>
                    <div class="date">21 December 2020</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="card">
                <div class="card-header text-center">
                  <picture class="avatar d-block">
                    <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/11@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/11.png 1x"/>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/11.png" alt="Customer avatar">
                  </picture>
                  <div class="h4 name fw-bolder">Guillaume M.</div>
                  <a href="https://www.google.com/maps/contrib/101195112554299989422/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@4.6513087,89.2730014,3z/data=!4m6!1m5!8m4!1e2!2s101195112554299989422!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                    <span>
                      Review on <b>Google maps</b>
                    </span>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                  </a>
                </div>
                <div class="card-body-wrapper">
                  <div class="card-body">
                    <p class="review">"I have been suffering from seasonal depression for years, so I decided to try light therapy
                      to compensate for the lack of winter sunshine, and I chose the ""glasses"" model
                      for the convenience of being able to do my morning routine and not having to stay glued
                      to
                      a light panel.
                      The results were quick, the usual sluggishness and general tiredness have almost disappeared and
                      and another benefit that I had not foreseen was that my tendency to have trouble falling asleep
                      in the evening vanished too, probably due to a readjustment of the
                      circadian rhythm...
                      All in all, it's an investment, but I don't regret it at all, and my
                      wife has also started using it too!
                      "
                    </p>
                    <button class="fw-bolder expand">Show more</button>
                    <div class="date">21 December 2020</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="card">
                <div class="card-header text-center">
                  <div class="avatar"></div>
                  <div class="h4 name fw-bolder">Andi Philip</div>
                  <a href="#" target="_blank" class="link">
                    <span>
                      Review on <b>Facebook</b>
                    </span>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                  </a>
                </div>
                <div class="card-body-wrapper">
                  <div class="card-body">
                    <p class="review">"I had a small Phillips light box previously, and it was a hassle to sit at the right angle,
                      distance, and time. With these, I don’t have to worry about any of those things. I just put
                      them
                      on, push the button, and wear them until they turn off. Easy to use whether I’m wearing my
                      glasses or contacts. Also, these don’t give me headaches like the Phillips light box did!
                      We have almost 4 people in my household wearing these every day — I will be buying a second
                      pair
                      soon! (Two of us have sleep past disorder and everyone seems to get a mood boost!)"
                    </p>
                    <button class="fw-bolder expand">Show more</button>
                    <div class="date">21 December 2020</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="card">
                <div class="card-header text-center">
                  <picture class="avatar d-block">
                    <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/13@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/13.png 1x"/>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/13.png" alt="Customer avatar">
                  </picture>
                  <div class="h4 name fw-bolder">Patricia</div>
                  <a href="#" target="_blank" class="link">
                    <span>
                      Review on <b>Facebook</b>
                    </span>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                  </a>
                </div>
                <div class="card-body-wrapper is-visible">
                  <div class="card-body">
                    <p class="review">"Used medically for depression. These glasses have brought me a significant
                      improvement. Not awkward to wear, the light improves my mood, brings me
                      comfort,
                      and they are very useful.
                      "
                    </p>
                    <div class="date">21 December 2020</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="card">
                <div class="card-header text-center">
                  <picture class="avatar d-block">
                    <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/14@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/14.png 1x"/>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/14.png" alt="Customer avatar">
                  </picture>
                  <div class="h4 name fw-bolder">Hélène</div>
                  <a href="https://www.google.com/maps/contrib/116715457571293643665/reviews/@49.9994005,2.560789,8z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                    <span>
                      Review on <b>Google maps</b>
                    </span>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                  </a>
                </div>
                <div class="card-body-wrapper">
                  <div class="card-body">
                    <p class="review">"You should do this as soon as you get up, the Luminette is quickly forgotten and you can go about your
                      your business. From the very first time you use it, you'll quickly feel
                      more awake and the mid-morning or afternoon slumps disappear quickly.
                      Really impressed.
                      "
                    </p>
                    <button class="fw-bolder expand">Show more</button>
                    <div class="date">21 December 2020</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="card">
                <div class="card-header text-center">
                  <div class="avatar"></div>
                  <div class="h4 name fw-bolder">Anthony</div>
                  <a href="https://www.google.com/maps/contrib/103414070215570066252/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@50.5779487,5.2632398,17z/data=!4m6!1m5!8m4!1e2!2s103414070215570066252!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                    <span>
                      Review on <b>Google maps</b>
                    </span>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                  </a>
                </div>
                <div class="card-body-wrapper is-visible">
                  <div class="card-body">
                    <p class="review">"I have been a user for more than ten years... the luminette has always helped me to get ""balanced"" during my night or early morning shifts
                      at work ... you feel better very quickly.
                      Reliable product and easy to use.
                      "
                    </p>
                    <div class="date">21 December 2020</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="card">
                <div class="card-header text-center">
                  <picture class="avatar d-block">
                    <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/15@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/15.png 1x"/>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/15.png" alt="Customer avatar">
                  </picture>
                  <div class="h4 name fw-bolder">Muriel T.</div>
                  <a href="https://www.google.com/maps/contrib/105183132711717313101/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@50.5779487,5.2610511,17z/data=!4m6!1m5!8m4!1e2!2s105183132711717313101!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                    <span>
                      Read the review on <b>Google </b>
                    </span>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                  </a>
                </div>
                <div class="card-body-wrapper">
                  <div class="card-body">
                    <p class="review">"I bought the Luminette to help me fight the winter blues. I use it every morning
                      when
                      I get up. What I like about the Luminette is that I can choose the length of the session (20, 30 or 60 minutes)
                      depending on my availability, and that I can go about my business during the session
                      (no need to stay in front of a lamp placed on the table). After
                      a few
                      days of use, I already noticed the result: no more depression on grey and rainy days.
                      Over time, I have felt less tired and have more energy. I really
                      recommend
                      the Luminette.
                      "
                    </p>
                    <button class="fw-bolder expand">Show more</button>
                    <div class="date">21 December 2020</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="card">
                <div class="card-header text-center">
                  <picture class="avatar d-block">
                    <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/12@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/12.png 1x"/>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/12.png" alt="Customer avatar">
                  </picture>
                  <div class="h4 name fw-bolder">Aurélie</div>
                  <a href="https://www.amazon.fr/gp/customer-reviews/RWZSN5SZJF573/ref=cm_cr_getr_d_rvw_ttl?ie=UTF8&ASIN=B07VMRRB9Y" target="_blank" class="link">
                    <span>
                      Review on <b>Amazon</b>
                    </span>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                  </a>
                </div>
                <div class="card-body-wrapper">
                  <div class="card-body">
                    <p class="review">"For years, I have suffered from seasonal depression. I have been advised by health professionals
                      (general practitioner, psychiatrist, psychologist and pharmacist) have advised me to
                      use
                      light therapy to improve my state in the fall and winter.
                      I hesitated for a long time and then I discovered the Luminette.
                      I use it in the morning, either while going about my business (breakfast, brushing my
                      teeth brushing...) or when I'm reading. After the session, I have much more energy and
                      motivation to face the day.
                      It is very practical because it can be worn at the same time as my glasses or
                      computer glasses.
                      They are made of a rather rigid plastic, but they seem to be strong.
                      They charge quite quickly. A charging indicator lets you know when it is finished.
                      Once charged, they can be used about 10 times.
                      There are 3 modes. The more powerful the light, the shorter the exposure time.
                      What is very practical is that you don't have to watch the time because they turn off by themselves once the
                      the session is over. The only small ""downside"" is that the most powerful mode
                      can be glaring when the surrounding light is weak.
                      I would recommend this product without hesitation, since it gives me a real moral boost
                      during short days.
                      "
                    </p>
                    <button class="fw-bolder expand">Show more</button>
                    <div class="date">21 December 2020</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class='lav-show-reviews lav-observe'>Show more</div>
        </div>

        <div class='lav-reviews__total'>
          <div class='lav-reviews__total-col'>
            <a href='#' class='lav-reviews__total-image'>
              <img src='${settings.dir}/img/reviews-trusted.svg' />
            </a>
            <div class='lav-reviews__total-info'>
              <div class='lav-reviews__total-score'>4.4</div>
              <div class='lav-reviews__total-stars'>
                <img src='${settings.dir}/img/reviews-stars.svg' />
              </div>
              <div class='lav-reviews__total-caption'>Trusted shops</div>
            </div>
          </div>
          <div class='lav-reviews__total-col'>
            <a href='#' class='lav-reviews__total-image'>
              <img src='${settings.dir}/img/reviews-amazon.svg' />
            </a>
            <div class='lav-reviews__total-info'>
              <div class='lav-reviews__total-score'>4.4</div>
              <div class='lav-reviews__total-stars'>
                <img src='${settings.dir}/img/reviews-stars.svg' />
              </div>
              <div class='lav-reviews__total-caption'>Amazon</div>
            </div>
          </div>
        </div>

        <div class='lav-reviews__preview-list lav-observe'>
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

        <iframe width="840" height="480" src="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>

    <div class='lav-sticky-mob'>
      <button class="lav-sticky__btn btn-primary btn-lg flipped lav-btn-buy">
        <span class="btn-text">
          Buy $199
        </span>
        <span class="btn-bg-wrapper"></span>
      </button>
    </div>
  `;

  if (detectLang() == 'fr') {
    newLayout = `
    <section class='lav-jumb'>
      <div class='container-fluid container--size--lg'>
        <div class='lav-jumb__inner'>
          <div class='lav-jumb__slider-wrap'>
            <div class="splide lav-jumb__slider">
              <div class="splide__track">
                <ul class="splide__list">
                  <li class="splide__slide">
                    <img class='lav-jumb__desc' src="${settings.dir}/img/slide1-fr.jpeg" alt="">
                    <img class='lav-jumb__mob' src="${settings.dir}/img/slide1-fr-mob.jpeg" alt="">
                  </li>
                  <li class="splide__slide">
                    <img src="${settings.dir}/img/slide2.jpeg" alt="">
                  </li>
                  <li class="splide__slide lav-open-modal"      
                  data-target='.lav-review-modal' data-src='https://www.youtube.com/embed/rnpVhWWRUDI?autoplay=0&start=0&showinfo=0&rel=0'
                  >
                  <img src="${settings.dir}/img/slide3.jpeg" alt="">
                </li>
                <li class="splide__slide">
                  <img class='lav-jumb__desc' src="${settings.dir}/img/slide4-fr.jpeg" alt="">
                  <img class='lav-jumb__mob' src="${settings.dir}/img/slide4-fr-mob.jpeg" alt="">
                </li>
                <li class="splide__slide">
                  <img src="${settings.dir}/img/slide5.jpeg" alt="">
                </li>
                <li class="splide__slide">
                  <img class='lav-jumb__desc' src="${settings.dir}/img/slide6-fr.jpeg" alt="">
                  <img class='lav-jumb__mob' src="${settings.dir}/img/slide6-fr-mob.jpeg" alt="">
                </li>
                <li class="splide__slide">
                  <img src="${settings.dir}/img/slide7.jpeg" alt="">
                </li>
              </ul>
            </div>
          </div>
    
          <div class="lav-jumb__thumbs">
            <div class="lav-jumb__thumb">
              <img class='lav-jumb__desc' src="${settings.dir}/img/slide1-fr.jpeg" alt="">
              <img class='lav-jumb__mob' src="${settings.dir}/img/slide1-fr-mob.jpeg" alt="">
            </div>
            <div class="lav-jumb__thumb">
              <img src="${settings.dir}/img/slide2.jpeg" alt="">
            </div>
            <div class="lav-jumb__thumb">
              <img src="${settings.dir}/img/slide3.jpeg" alt="">
            </div>
            <div class="lav-jumb__thumb">
              <img class='lav-jumb__desc' src="${settings.dir}/img/slide4-fr.jpeg" alt="">
              <img class='lav-jumb__mob' src="${settings.dir}/img/slide4-fr-mob.jpeg" alt="">
            </div>
            <div class="lav-jumb__thumb">
              <img src="${settings.dir}/img/slide5.jpeg" alt="">
            </div>
            <div class="lav-jumb__thumb">
              <img class='lav-jumb__desc' src="${settings.dir}/img/slide6-fr.jpeg" alt="">
              <img class='lav-jumb__mob' src="${settings.dir}/img/slide6-fr-mob.jpeg" alt="">
            </div>
            <div class="lav-jumb__thumb">
              <img src="${settings.dir}/img/slide7.jpeg" alt="">
            </div>
          </div>
        </div>
        <div class='lav-jumb__info'>
          <div class='lav-jumb__title'>Lunettes de luminothérapie&nbsp;Luminette&nbsp;3</div>
          <div class='lav-jumb__feedbacks'>
            <div class='lav-jumb__feedbacks-star'>
              <img src='${settings.dir}/img/stars.svg' />
            </div>
            <div class='lav-jumb__feedbacks-caption'>(<u>Plus de 900+ avis positifs</u>)</div>
          </div>
          <div class='lav-jumb__effects'>
            <div class='lav-jumb__effects-title'>
              <span>Ressentez les effets bénéfiques en 4 à 7 jours</span>
              <div class="tooltip d-flex ml-1">
                <img src="https://conversionratestore.github.io/projects/luminette/img/info.svg" alt="info"/>
                <div class="tooltip-dropdown text-left fs-16">
                  <div class="tooltip-item">
                    <div class='tooltip-text fw-semi'>
                      Les effets bénéfiques de la Luminette® sont presque immédiats.
                    </div>
                    <div class='tooltip-text'>
                      Après quelques séances, vous sentirez votre énergie revenir, vos cycles de sommeil s'améliorer et votre humeur s'améliorer.
                    </div>
                    <div class='tooltip-text'>
                      Si vous utilisez Luminette pour corriger un trouble des rythmes du sommeil, les résultats seront perceptibles après 7 jours.
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
                <div class='lav-jumb__effects-text'>Dites adieu au blues de l'hiver</div>
              </div>
              <div class='lav-jumb__effects-item'>
                <div class='lav-jumb__effects-icon'>
                  <img src='${settings.dir}/img/benefit2.svg' />
                </div>
                <div class='lav-jumb__effects-text'>Rééquilibrez vos cycles de sommeil</div>
              </div>
              <div class='lav-jumb__effects-item'>
                <div class='lav-jumb__effects-icon'>
                  <img src='${settings.dir}/img/benefit3.svg' />
                </div>
                <div class='lav-jumb__effects-text'>Restaurez votre niveau d'énergie</div>
              </div>
            </div>
          </div>
    
          <div class='lav-count lav-observe'>
            <div class='lav-count__head'>
              <div class='lav-count__head-title'>Quantité</div>
              <div class='lav-count__head-inside'>
                Que contient la boîte?
                <div class="tooltip d-flex ml-1">
                  <img class='lav-info-invert' src="https://conversionratestore.github.io/projects/luminette/img/info.svg" alt="info"/>
                  <div class="tooltip-dropdown text-left fs-16">
                    <div class="tooltip-item">
                      <img class='tooltip-include' src="${settings.dir}/img/tooltip-include.png" />
                      <div class='lav-list lav-tooltip-list'>
                        <div class='lav-list__item'>Votre Luminette</div>
                        <div class='lav-list__item'>Un étui de protection</div>
                        <div class='lav-list__item'>Un chargeur mural micro-USB</div>
                        <div class='lav-list__item'>Un tissu nettoyant en microfibres</div>
                        <div class='lav-list__item'>Votre certificat de garantie de 2 ans</div>
                        <div class='lav-list__item'>Le manuel d'utilisation</div>
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
                <div class='lav-count__caption'>par unité</div>
              </div>
              <div class='lav-count__item' data-count='2'>
                <div class='lav-count__image'>
                  <img src='${settings.dir}/img/pr-2.png' />
                </div>
                <div class='lav-count__title'>
                  2 Luminette
                  <span class='lav-count__discount'>-20%</span>
                </div>
                <div class='lav-count__price'>$159<sup>20</sup></div>
                <div class='lav-count__caption'>par unité</div>
              </div>
              <div class='lav-count__item' data-count='3'>
                <div class='lav-count__image'>
                  <img src='${settings.dir}/img/pr-3.png' />
                </div>
                <div class='lav-count__title'>
                  3 Luminette
                  <span class='lav-count__discount'>-25%</span>
                </div>
                <div class='lav-count__price'>$149<sup>25</sup></div>
                <div class='lav-count__caption'>par unité</div>
              </div>
            </div>
          </div>
    
          <div class='lav-count__pay'>
            <button class="lav-jumb__btn btn-primary btn-lg flipped lav-btn-buy">
              <span class="btn-text">
                Achat 229 €
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
        <div class="days-test lav-observe">
          <h3 class="text-center">Vous avez 30 jours pour tester la Luminette</h3>
          <div class="line-dashed">
            <ul class="row days-test_list">
              <li class="col-xl-4 d-xl-block d-flex flex-row-reverse justify-content-center lav-test__first">
                <p class="fs-18 pt-1 fw-bold days-test_head">Acheter la Luminette3</p>
                <div class="circle"></div>
                <div class="days-test_date">
                  <p class="fs-18 fw-bold">Aujourd'hui</p>
                  <p class="fs-16 op-07">Sep 26, 2022</p>
                </div>
              </li>
              <li class="col-xl-4 d-xl-block d-flex flex-row-reverse justify-content-center lav-test__second">
                <div class="d-flex align-items-center days-test_head">
                  <p class="fs-18 pt-1 fw-bold mr-2">Livraison gratuite</p>
                  <div class="tooltip d-flex">
                    <img src="https://conversionratestore.github.io/projects/luminette/img/info.svg" alt="info"/>
                    <div class="tooltip-dropdown fs-16">
                      <div class="tooltip-item">
                        <div class="tooltip_free text-center mb-2">
                          <div class="d-flex align-items-center justify-content-center mb-2 pb-1">
                            <img height='24' src="${settings.dir}/img/flags-fr.png" alt="">
                          </div>
                          <p> Livraison gratuite en Europe:  <div class="fw-bold d-block">2 à 5 jours ouvrables</div></p>
                        </div>
                        <div class="d-flex align-items-center justify-content-center mb-2 py-1">
                          <img class="mr-2" src="${settings.dir}/img/delivery-methods.png" />
                        </div>
                        <p class="">Orders are shipped from our logistics center located in Boise, Idaho. We use the services of FedEx Ground or USPS. Before they deliver your package, the carrier sends you an email warning you of the day of its passage.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="circle"></div>
                <div class="days-test_date">
                  <p class="fs-18 fw-bold">3-5 jours</p>
                  <p class="fs-16 op-07">Sep 29-Oct 1, 2022</p>
                </div>
              </li>
              <li class="col-xl-4 d-xl-block d-flex flex-row-reverse justify-content-center lav-test__third">
                <div class="d-flex align-items-md-center align-items-end days-test_head">
                  <div class="fs-16 pt-1 fw-bold mr-2">Garantie de remboursement à 100%</div>
                  <div class="tooltip d-flex">
                    <img src="https://conversionratestore.github.io/projects/luminette/img/info.svg" alt="info"/>
                    <div class="tooltip-dropdown fs-16">
                      <div class="tooltip-item">
                        <p class="mb-2">
                          Vous avez un mois pour tester votre Luminette. Nous recommandons d'utiliser la Luminette pendant au moins 10 jours consécutifs.
                        </p>
                        <p>Toutefois, si vous n'êtes pas satisfait, vous pouvez choisir d'être remboursé dans les 30 jours suivant l'achat. Vous trouverez plus de détails sur notre page <a href="/delivery#returns-block" class="fw-semi bb-1 c-blue">Remboursements</a>.</p>
                      </div> 
                    </div>
                  </div>
                </div>
                <div class="circle"></div>
                <div class="days-test_date">
                  <p class="fs-18 fw-bold">Après 30 jours</p>
                  <p class="fs-16 op-07">Oct 29-Nov 1, 2022</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class='lav-shorts__wrap'>
      <div class='container-fluid container--size--lg'>
        <div class="lav-shorts lav-observe">
          <div class="lav-shorts__title text-center">Plus de 150 000 personnes ont augmenté leur énergie grâce à Luminette</div>
          <div class="lav-shorts__caption text-center">Voici ce que nos utilisateurs disent après avoir utilisé Luminette</div>

          <div class="splide lav-shorts__splide">
            <div class="splide__track">
              <div class="lav-shorts__list splide__list">
                <div class='lav-shorts__item splide__slide'>
                  <div class='lav-shorts__preview lav-open-modal' data-target='.lav-review-modal' data-name='Nathalie' data-src='https://www.youtube.com/embed/RxwTebJqdYY?autoplay=1'>
                    <img  src="https://flopsi69.github.io/crs/myluminette/checkout/video/1.jpg" />
                  </div>
                  <div class='lav-shorts__info'>
                    <div class='lav-shorts__stars'>
                      <img  src="https://flopsi69.github.io/crs/myluminette/checkout/img/stars-shorts.svg" />
                    </div>
                    <div class='lav-shorts__quote'>
                      “Après 6 jours, je n’avais déjà plus de réveils nocturnes”
                    </div>
                    <div class='lav-shorts__inst'>
                      <img  src="https://flopsi69.github.io/crs/myluminette/checkout/img/icon-inst.svg" />
                      </span>Nathalie</span>
                    </div>
                  </div>
                </div>
                
                <div class='lav-shorts__item splide__slide'>
                  <div class='lav-shorts__preview lav-open-modal' data-target='.lav-review-modal' data-name='Audrey' data-src='https://www.youtube.com/embed/r7GLkPblufc?autoplay=1'>
                    <img  src="https://flopsi69.github.io/crs/myluminette/checkout/video/2.jpg" />
                  </div>
                  <div class='lav-shorts__info'>
                    <div class='lav-shorts__stars'>
                      <img  src="https://flopsi69.github.io/crs/myluminette/checkout/img/stars-shorts.svg" />
                    </div>
                    <div class='lav-shorts__quote'>
                      “Je dors mieux, mes cycles de sommeil sont recalés”
                    </div>
                    <div class='lav-shorts__inst'>
                      <img  src="https://flopsi69.github.io/crs/myluminette/checkout/img/icon-inst.svg" />
                      </span>Audrey</span>
                    </div>
                  </div>
                </div>

                <div class='lav-shorts__item splide__slide'>
                  <div class='lav-shorts__preview lav-open-modal' data-target='.lav-review-modal' data-name='Louis' data-src='https://www.youtube.com/embed/T3hD1MZlmuU?autoplay=1'>
                    <img  src="https://flopsi69.github.io/crs/myluminette/checkout/video/3.jpg" />
                  </div>
                  <div class='lav-shorts__info'>
                    <div class='lav-shorts__stars'>
                      <img  src="https://flopsi69.github.io/crs/myluminette/checkout/img/stars-shorts.svg" />
                    </div>
                    <div class='lav-shorts__quote'>
                      “La Luminette est légère, design et facile d’utilisation”
                    </div>
                    <div class='lav-shorts__inst'>
                      <img  src="https://flopsi69.github.io/crs/myluminette/checkout/img/icon-inst.svg" />
                      </span>Louis</span>
                    </div>
                  </div>
                </div>

                <div class='lav-shorts__item splide__slide'>
                  <div class='lav-shorts__preview lav-open-modal' data-target='.lav-review-modal' data-name='Alexia' data-src='https://www.youtube.com/embed/0NZRHK722-E?autoplay=1'>
                    <img  src="https://flopsi69.github.io/crs/myluminette/checkout/video/4.jpg" />
                  </div>
                  <div class='lav-shorts__info'>
                    <div class='lav-shorts__stars'>
                      <img  src="https://flopsi69.github.io/crs/myluminette/checkout/img/stars-shorts.svg" />
                    </div>
                    <div class='lav-shorts__quote'>
                      “Au bout de 10 jours, je me sentais beaucoup plus en forme pendant la journée.”
                    </div>
                    <div class='lav-shorts__inst'>
                      <img  src="https://flopsi69.github.io/crs/myluminette/checkout/img/icon-inst.svg" />
                      </span>Alexia</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    
    <section class='lav-recharge lav-observe'>
      <div class='container-fluid container--size--lg lav-jumb__container'>
        <div class='lav-recharge__inner'>
          <div class='lav-recharge__preview lav-open-modal' data-target='.lav-review-modal' data-src='https://www.youtube.com/embed/rnpVhWWRUDI?autoplay=0&start=0&showinfo=0&rel=0'>
            <img src='${settings.dir}/img/play.svg' />
            <img src='${settings.dir}/img/play-hover.svg' />
          </div>
          <div class='lav-recharge__info'>
            <div class='lav-recharge__title lav-title'>Retrouver votre énergie avec la Luminette</div>
            <div class='lav-recharge__caption lav-text'>Une technologie brevetée permet aux Luminette® de rééquilibrer votre horloge biologique circadienne, rétablissant ainsi vos cycles de sommeil, votre humeur et vos niveaux d'énergie.</div>
          </div>
        </div>
      </div>
    </section>
    
    <section class='lav-transforms lav-observe'>
      <div class='container-fluid container--size--lg lav-transforms__container'>
        <div class='lav-transforms__slider splide'>
          <div class="splide__track">
            <div class="splide__list">
              <div class='lav-transform lav-transform_first splide__slide'>
                <div class='lav-transform__info'>
                  <div class='lav-transform__title lav-title'>Comment Luminette transforme vos journées</div>
                  <div class='lav-transform__descr lav-text'>La lumière émise par la Luminette reproduit les effets bénéfiques du soleil. En stoppant la sécrétion de mélatonine et en agissant directement sur le cerveau, la lumière permet de réguler les cycles de sommeil et d'optimiser son niveau d'énergie en hiver.</div>
                </div>
                <div class='lav-transform__image'>
                  <img src='${settings.dir}/img/transform-smile.png' />
                </div>
                <div class='lav-transform__title-mob lav-title'>Comment Luminette transforme vos journées</div>
              </div>
    
              <div class='lav-transform lav-transform_second splide__slide'>
                <div class='lav-transform__info'>
                  <div class='lav-transform__title lav-title'>Comment Luminette transforme vos journées</div>
                  <div class='lav-transform__descr lav-text'>Lorsque nous ne recevons pas assez de lumière le matin, le cerveau continue à produire de la mélatonine après le réveil, ce qui augmente notre fatigue et perturbe notre sommeil.</div>
                </div>
                <div class='lav-transform__image'>
                  <img src='${settings.dir}/img/transform-sad.png' />
                </div>
                <div class='lav-transform__title-mob lav-title'>Comment Luminette transforme vos journées</div>
              </div>
            </div>
          </div>
        </div>
    
        <div class='lav-transform__more'>
          <div class='lav-transform__more-btn'>
            En savoir plus sur la luminothérapie
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
    
    <section class='compare-section lav-observe'>
      <div class='container-fluid container--size--lg'>
        <div class="row fs-16 text-center compare mx-auto">
          <div class="col-6 py-5">
            <img class="my-1" src="https://conversionratestore.github.io/projects/luminette/img/glasses.svg" alt="glasses icon"/>
            <p class="fs-22 fw-bold py-1">Luminette3</p>
          </div>
          <div class="col-6 py-5">
            <img class="my-1" src="https://conversionratestore.github.io/projects/luminette/img/box.svg" alt="box icon"/>
            <p class="fs-22 fw-bold py-1">Lampe de luminothérapie</p>
          </div>
          <div class="col-12 py-2 fs-18 fw-bold b-1">Portable</div>
          <div class="col-6 py-5 fw-medium"><p class="py-1">Vaquez à vos occupations tout en portant les lunettes</p></div>
          <div class="col-6 py-5 fw-medium"><p class="py-1">Vous oblige à vous arrêter et à rester assis pendant <span class="text-ellipsis">30 minutes</span></p></div>
          <div class="col-12 py-2 fs-18 fw-bold b-1">Spectre de la lumière</div>
          <div class="col-6 py-5 fw-medium"><p class="py-1">Lumière blanche enrichie en bleu</p></div>
          <div class="col-6 py-5 fw-medium"><p class="py-1">Lumière blanche à spectre complet</p></div>
          <div class="col-12 py-2 fs-18 fw-bold b-1">Efficacité thérapeutique</div>
          <div class="col-6 py-5 fw-medium"><p class="py-1">Efficacité garantie tout en utilisant une source de lumière moins intense</p></div>
          <div class="col-6 py-5 fw-medium"><p class="py-1">Nécessite au moins 10 000 lux pour être efficace</p></div>
          <div class="col-12 py-2 fs-18 fw-bold b-1">Taille</div>
          <div class="col-6 py-5 fw-medium"><p class="pt-1 pb-5">Petit/ ultraléger, seulement 51g sur le nez (1,83 onces)</p></div>
          <div class="col-6 py-5 fw-medium"><p class="pt-1 pb-5">Grand/ encombrant</p></div>
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
            Une étude indépendante a montré que la Luminette donne les mêmes résultats qu'une lampe de 10 000 lux.
          </div>
          <div class='lav-study__btn'>
            Lire l'étude
            <img src='/images/icons/adobe-reader.svg' />
          </div>
        </div>
      </div>
    </section>
    
    <section class='lav-can lav-observe'>
      <div class='container-fluid container--size--lg'>
        <div class='lav-can__inner'>
          <div class='lav-can__icon'>
            <img src='/images/icons/clock.svg' />
          </div>
          <div class='lav-can__title lav-title'>En portant vos Luminettes,<br/> vous pourrez:</div>
          <div class='lav-can__list'>
            <div class='lav-can__item'>Préparer le petit-déjeuner</div>
            <div class='lav-can__item'>Vous brosser les dents</div>
            <div class='lav-can__item'>Lire un livre</div>
            <div class='lav-can__item'>Regarder la télévision</div>
            <div class='lav-can__item'>Travailler sur l’ordinateur</div>
            <div class='lav-can__item'>Avoir une activité physique calme</div>
            <div class='lav-can__item'>(marche, vélo d’appartement)</div>
          </div>
        </div>
      </div>
    </section>
    
    <section class='lav-perfect lav-observe'>
      <div class='container-fluid container--size--lg'>
        <div class='lav-perfect__title lav-title'>Parfait pour votre routine matinale</div>
        <div class='lav-perfect__list'>
          <div class='lav-perfect__item'>
            <div class='lav-perfect__icon'>
              <img src='/images/pages/device-landings/luminette/how_to_use_icon_1.svg' />
            </div>
            <div class='lav-perfect__subtitle'>Porter la pendant 20-45 min</div>
            <div class='lav-perfect__descr lav-text'>Varie en fonction du niveau d'intensité lumineuse : (de 20 minutes à l'intensité maximale à 60 minutes à l'intensité minimale).</div>
          </div>
    
          <div class='lav-perfect__item'>
            <div class='lav-perfect__icon'>
              <img src='/images/pages/device-landings/luminette/how_to_use_icon_2.svg' />
            </div>
            <div class='lav-perfect__subtitle'>Utiliser une fois par jour</div>
            <div class='lav-perfect__descr lav-text'>Nous recommandons d'utiliser la Luminette une fois par jour.</div>
          </div>
    
          <div class='lav-perfect__item'>
            <div class='lav-perfect__icon'>
              <img src='/images/pages/device-landings/luminette/how_to_use_icon_3.svg' />
            </div>
            <div class='lav-perfect__subtitle'>Retablissez vos niveaux d'énergie en 4 à 6 jours</div>
            <div class='lav-perfect__descr lav-text'>Les effets bénéfiques de la Luminette® sont presque immédiats. En quelques séances seulement, vous sentirez votre niveau d'énergie augmenter, votre sommeil s'allonger et votre humeur s'améliorer.</div>
          </div>
        </div>
      </div>
    </section>
    
    <section class='lav-trial lav-section'>
      <div class='container-fluid container--size--lg lav-trial__container'>
        <div class='lav-trial__row lav-observe'>
          <img class='lav-trial__image' src='${settings.dir}/img/trial.png' />
    
          <div class='lav-trial__info'>
            <div class='lav-trial__title lav-title'>Essai de 30 jours</div>
            <div class='lav-trial__descr lav-text'>Testez les lunettes de luminothérapie Luminette pendant 30 jours, et si vous n'êtes pas satisfait, renvoyez-la nous et nous vous rembourserons !</div>
    
            <div class='lav-trial__buttons'>
              <div class='lav-trial__btn lav-trial__btn-refresh lav-tooltip-wrap'>
                <img src='${settings.dir}/img/icon-refresh.svg' />
                <span>
                  Essai de 30 jours&nbsp;<span class="tooltip d-inline-block d-sm-none">
                    <img class='lav-info-invert' src="https://conversionratestore.github.io/projects/luminette/img/info.svg" alt="info"/>
                    <div class="tooltip-dropdown text-left fs-16">
                      <div class="tooltip-item">
                        <p class="mb-2">
                          Vous avez un mois pour tester votre Luminette. Nous recommandons d'utiliser la Luminette pendant au moins 10 jours consécutifs.
                        </p>
                        <p>
                          Toutefois, si vous n'êtes pas satisfait, vous pouvez choisir d'être remboursé dans les 30 jours suivant l'achat. Vous trouverez plus de détails sur notre page <a href="/delivery#returns-block" class="fw-semi bb-1 c-blue">Remboursements</a>.
                        </p>
                      </div>
                    </div>
                  </span>
                </span>
                <div class="tooltip d-sm-flex d-none ml-2">
                  <img class='lav-info-invert' src="https://conversionratestore.github.io/projects/luminette/img/info.svg" alt="info"/>
                  <div class="tooltip-dropdown text-left fs-16">
                    <div class="tooltip-item">
                      <p class="mb-2">
                        Vous avez un mois pour tester votre Luminette. Nous recommandons d'utiliser la Luminette pendant au moins 10 jours consécutifs.
                      </p>
                      <p>
                        Toutefois, si vous n'êtes pas satisfait, vous pouvez choisir d'être remboursé dans les 30 jours suivant l'achat. Vous trouverez plus de détails sur notre page <a href="/delivery#returns-block" class="fw-semi bb-1 c-blue">Remboursements</a>.
                      </p>
                    </div> 
                  </div>
                </div>
              </div>
    
              <div class='lav-trial__btn lav-trial__btn-box lav-tooltip-wrap'>
                <img src='${settings.dir}/img/icon-box-2.svg' />
                <span>
                  Livraison gratuite&nbsp;<span class="tooltip d-inline-block d-sm-none">
                    <img class='lav-info-invert' src="https://conversionratestore.github.io/projects/luminette/img/info.svg" alt="info"/>
                    <div class="tooltip-dropdown text-left fs-16">
                      <div class="tooltip-item">
                        <div class="tooltip_free text-center mb-2">
                          <div class="d-flex align-items-center justify-content-center mb-2 pb-1">
                            <img height='24' src="${settings.dir}/img/flags-fr.png" alt="">
                          </div>
                          <p> Livraison gratuite en Europe: <div class="fw-bold d-block">2 à 5 jours ouvrables</div></p>
                        </div>
                        <div class="d-flex align-items-center justify-content-center mb-2 py-1">
                          <img class="mr-2" src="${settings.dir}/img/delivery-methods.png" />
                        </div>
                        <p class="">Orders are shipped from our logistics center located in Boise, Idaho. We use the services of FedEx Ground or USPS. Before they deliver your package, the carrier sends you an email warning you of the day of its passage.</p>
                      </div> 
                    </div>
                  </span>
                </span>
                <div class="tooltip d-sm-flex d-none ml-2">
                  <img class='lav-info-invert' src="https://conversionratestore.github.io/projects/luminette/img/info.svg" alt="info"/>
                  <div class="tooltip-dropdown text-left fs-16">
                    <div class="tooltip-item">
                      <div class="tooltip_free text-center mb-2">
                        <div class="d-flex align-items-center justify-content-center mb-2 pb-1">
                          <img height='24' src="${settings.dir}/img/flags-fr.png" alt="">
                        </div>
                        <p> Livraison gratuite en Europe: <div class="fw-bold d-block">2 à 5 jours ouvrables</div></p>
                      </div>
                      <div class="d-flex align-items-center justify-content-center mb-2 py-1">
                        <img class="mr-2" src="${settings.dir}/img/delivery-methods.png" />
                      </div>
                      <p class="">Orders are shipped from our logistics center located in Boise, Idaho. We use the services of FedEx Ground or USPS. Before they deliver your package, the carrier sends you an email warning you of the day of its passage.</p>
                    </div> 
                  </div>
                </div>
              </div>
            </div>
    
            <div class='lav-trial__actions'>
              <button class='lav-trial__btn btn-primary btn-lg flipped lav-btn-buy'>
                <span class="btn-text">
                  Essayez-les pour 229 €
                </span>
                <span class="btn-bg-wrapper"></span>
              </button>
    
              <div class='lav-trial__inside'>
                Que contient la boîte?
                <div class="tooltip d-flex ml-1">
                  <img class='lav-info-invert' src="https://conversionratestore.github.io/projects/luminette/img/info.svg" alt="info"/>
                  <div class="tooltip-dropdown text-left fs-16">
                    <div class="tooltip-item">
                      <img class='tooltip-include' src="${settings.dir}/img/tooltip-include.png" />
                      <div class='lav-list lav-tooltip-list'>
                        <div class='lav-list__item'>Votre Luminette</div>
                        <div class='lav-list__item'>Un étui de protection</div>
                        <div class='lav-list__item'>Un chargeur mural micro-USB</div>
                        <div class='lav-list__item'>Un tissu nettoyant en microfibres</div>
                        <div class='lav-list__item'>Votre certificat de garantie de 2 ans</div>
                        <div class='lav-list__item'>Le manuel d'utilisation</div>
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
        <div class="technical lav-observe">
          <div class="row technical-block">
            <div class="col-lg-6 pl-0">
              <h2>Détails techniques</h2>
            </div>
            <div class="col-lg-6 fs-18">
              <div class="row pb-2 bb-2">
                <div class="col-sm-7 col-6 pl-0">Dimensions du produit</div>
                <div class="col-sm-5 col-6 fw-semi pr-0 pl-1">17 x 16 x 3 cm</div>
              </div>
              <div class="row py-2 bb-2">
                <div class="col-sm-7 col-6 pl-0">Type de source lumineuse</div>
                <div class="col-sm-5 col-6 fw-semi pr-0 pl-1">LED</div>
              </div>
              <div class="row py-2 bb-2">
                <div class="col-sm-7 col-6 pl-0">Nombre de sources lumineuses</div>
                <div class="col-sm-5 col-6 fw-semi pr-0 pl-1">3</div>
              </div>
              <div class="row py-2 bb-2">
                <div class="col-sm-7 col-6 pl-0">Poids de l'article</div>
                <div class="col-sm-5 col-6 fw-semi pr-0 pl-1">51g</div>
              </div>
            </div>
          </div>
          <div class="safety-block lav-observe">
            <div class="row">
              <div class="col-lg-6 pl-0">
                <h2 class="pb-4">Sécurité</h2>
                <div class="d-flex mt-5">
                  <img class="mr-5 mb-3" src="https://conversionratestore.github.io/projects/luminette/img/safety-1.svg" alt="safety icon" />
                  <img class="mr-5 ml-2 mb-3" src="https://conversionratestore.github.io/projects/luminette/img/safety-2.svg" alt="safety icon" />
                  <img class="ml-2 mb-3" src="https://conversionratestore.github.io/projects/luminette/img/safety-3.svg" alt="safety icon" />
                </div>
              </div>
              <div class="col-lg-6 fs-18 px-0">
                <p class="fw-bold mb-3">Depuis 2007, Luminette® porte la classification européenne CE.</p>
                <p class="mb-3">Luminette® est classée comme un dispositif sans danger pour les yeux, conformément à la norme internationale CEI 62471. En outre, la lumière émise par la Luminette® est exempte d'UV, de rayons infrarouges et ne contient pas de courte longueur d'onde inférieure à 450 nm.</p>
                <p>Aux États-Unis, aucune lampe de luminothérapie n'a reçu l'approbation de la FDA. Par conséquent, l'efficacité et la sécurité de cet appareil électronique - et de tous les autres appareils de luminothérapie sur le marché américain - ne sont pas réglementées par la FDA.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class='lav-users lav-section lav-observe'>
      <img class='lav-users__image' src='${settings.dir}/img/users-bg.png' />
      <img class='lav-users__image-mob' src='${settings.dir}/img/users-bg-mob.png' />
      <div class='lav-users__title-mob container'><span>150k+</span> utilisateurs de la Luminette</div>
      <div class='lav-users__title container'>Plus de <span>150 000</span> utilisateurs de la Luminette</div>
    </section>
    
    <section class='lav-reviews lav-observe'>
      <div class='container-fluid container--size--lg lav-reviews__container'>
        <div class='lav-reviews__title lav-title'>Avis des utilisateurs</div>
    
        <div class='lav-reviews__list splide' style='display: none;'>
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
    
                <div class='lav-review__trigger'>Afficher plus</div>
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
                <div class='lav-review__trigger'>Afficher plus</div>
              </div>
            </div>
          </div>
        </div>
    
        <div class="slider-wrapper position-relative">
          <div class="slider">
            <div class="slide">
              <div class="card">
                <div class="card-header text-center">
                  <picture class="avatar d-block">
                    <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/16@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/16.png 1x"/>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/16.png" alt="Customer avatar">
                  </picture>
                  <div class="h4 name fw-bolder">Arnaud T.</div>
                  <a href="https://www.google.com/maps/contrib/111655687148446401076/reviews/@50.5779487,5.2610511,16z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                    <span>
                      Lire l'avis sur <b>Google</b>
                    </span>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                  </a>
                </div>
                <div class="card-body-wrapper">
                  <div class="card-body">
                    <p class="review">Chaque année je ressens un manque de lumière et cela se ressent sur le moral.
                      Cette année j'ai trouvé la solution pour palier à cela avec la Luminette. L'avantage c'est que
                      tu ne restes pas bloqué devant un écran et que tu peux te préparer le matin ou prendre le
                      petit
                      déjeuner avec les lunettes sur le nez. C'est très pratique :)
                    </p>
                    <button class="fw-bolder expand">Afficher plus</button>
                    <div class="date">4 mars 2021</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="card">
                <div class="card-header text-center">
                  <picture class="avatar d-block">
                    <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/4@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/4.png 1x"/>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/4.png" alt="Customer avatar">
                  </picture>
                  <div class="h4 name fw-bolder">Laura S.</div>
                  <a href="https://www.amazon.com/gp/customer-reviews/R37M192JK2SORZ/ref=cm_cr_getr_d_rvw_ttl?ie=UTF8&ASIN=B07VMRRB9Y" target="_blank" class="link">
                    <span>
                      Lire l'avis sur <b>Amazon</b>
                    </span>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                  </a>
                </div>
                <div class="card-body-wrapper">
                  <div class="card-body">
                    <p class="review">J'utilise les Luminettes depuis début octobre 2020 pour faire face à ma dépression saisonnière (SAD). Jusqu'à présent, je n'ai aucun symptôme de dépression saisonnière, malgré le changement d'heure (heure d'hiver) et la disparition du soleil à 16h30. C'est une première. Je suis étonné. Mon niveau d'énergie a augmenté et je me sens libre et joyeux la plupart du temps. Je dors aussi beaucoup mieux. Je dois ajouter que j'ai arrêté la caféine, ce qui aide aussi.
                      Les Luminettes sont bien, bien meilleure que les lampes. Je les porte tous les matins sans être obligé de fixer la lampe. Mon humeur s'est vraiment améliorée.
                      Elles sont très pratiques et faciles à utiliser. Je les mets sur le dessus de mes lunettes. Elles se rechargent facilement et on peut les utiliser sans les brancher tous les jours.
                      Tous ceux qui me voient les porter (quand je participe à des réunions en ligne, quand je vais chez le dentiste, etc.) me demandent si ça marche. Les gens trouvent que c'est joli et ils sont très intéressés parce qu'il y a toujours quelqu'un dans leur famille qui souffre de dépression saisonnière, ou bien ils sont eux-mêmes atteints de ce trouble.
                      Donc, vraiment, je ne me plains pas, je n'ai que des bonnes choses à dire sur mes Luminettes qui sont aussi précieuses maintenant que mon téléphone portable.
                    </p>
                    <button class="fw-bolder expand">Afficher plus</button>
                    <div class="date">21 décembre 2020</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="card">
                <div class="card-header text-center">
                  <picture class="avatar d-block">
                    <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/1@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/1.png 1x"/>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/1.png" alt="Customer avatar">
                  </picture>
                  <div class="h4 name fw-bolder">Rémy Z.</div>
                  <a href="https://www.google.com/maps/contrib/112247709787810698381/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@50.5779487,5.2632398,17z/data=!4m6!1m5!8m4!1e2!2s112247709787810698381!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                    <span>
                      Lire l'avis sur <b>Google</b>
                    </span>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                  </a>
                </div>
                <div class="card-body-wrapper">
                  <div class="card-body">
                    <p class="review">Excellentes lunettes de luminothérapie. Je les utilise tous les matins dès mon réveil. Je
                      souffre
                      en
                      effet
                      de dépression saisonnière depuis plusieurs années et grâce à mes Luminettes je ressens moins
                      mes
                      troubles
                      de
                      l'humeur en automne-hiver. Je les utilise dès la mi-automne jusqu'à fin mars. Je disposais
                      avant
                      d'une
                      lampe
                      de luminothérapie mais c'était assez contraignant de devoir rester devant de manière continue.
                      Avec
                      mes
                      Luminettes je peux vaquer à mes occupations sans problème.
                      J'en suis très satisfait !
                    </p>
                    <button class="fw-bolder expand">Afficher plus</button>
                    <div class="date">21 décembre 2020</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="card">
                <div class="card-header text-center">
                  <picture class="avatar d-block">
                    <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/2@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/2.png 1x"/>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/2.png" alt="Customer avatar">
                  </picture>
                  <div class="h4 name fw-bolder">Dominique M.</div>
                  <a href="https://www.amazon.fr/gp/customer-reviews/R2TECJ5KRJG2TC/ref=cm_cr_getr_d_rvw_ttl?ie=UTF8&ASIN=B07VMRRB9Y" target="_blank" class="link">
                    <span>
                      Lire l'avis sur <b>Amazon</b>
                    </span>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                  </a>
                </div>
                <div class="card-body-wrapper">
                  <div class="card-body">
                    <p class="review">Chaque année, l'arrivée de l'automne est pour moi synonyme de déprime, fatigue, endormissement
                      très long et coups de pompe durant l'après-midi ! J'en ai parlé au docteur qui m'a conseillé
                      d'essayer la Luminette. J'ai décidé de l'acheter pour l'utiliser tous les matins. Je prends
                      donc
                      mon déjeuner avec la Luminette sur le nez, sans aucun désagrément, pendant 20 minutes. Elle me
                      permet de me déplacer et de voir ce que je fais, contrairement aux anciens appareils qui
                      étaient
                      à poser sur la table, et qui, d'après les études réalisées, ne servaient à rien puisque la
                      luminosité des leds ne venaient pas de plus haut que la tête et n'atteignaient donc pas les
                      capteurs de l'oeil...
                      Je me sens en forme pour la journée, et si pendant l'hiver je ressens de la fatigue après le
                      repas de midi, je refais une séance. Ainsi j'arrête de produire de la mélatonine et l'énergie
                      revient, je suis mieux dans ma peau et de meilleure humeur!
                    </p>
                    <button class="fw-bolder expand">Afficher plus</button>
                    <div class="date">21 décembre 2020</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="card">
                <div class="card-header text-center">
                  <picture class="avatar d-block">
                    <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/3@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/3.png 1x"/>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/3.png" alt="Customer avatar">
                  </picture>
                  <div class="h4 name fw-bolder">Maïté T.</div>
                  <a href="https://www.amazon.fr/gp/customer-reviews/R1GSLSI9OTO56U/ref=cm_cr_arp_d_rvw_ttl?ie=UTF8&ASIN=B07VMRRB9Y" target="_blank" class="link">
                    <span>
                      Lire l'avis sur <b>Amazon</b>
                    </span>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                  </a>
                </div>
                <div class="card-body-wrapper">
                  <div class="card-body">
                    <p class="review">J’ai la fibromyalgie et des gros problème de sommeil. Un manque de pêche évident quand le
                      soleil
                      n’est plus là. Mon neurologue m’a conseillé vos lunettes. Je suis ravie j’ai
                      plus de pêche, ça ne joue malheureusement rien sur mes douleurs. Mais vu que je suis plus en
                      forme je trouve ça vraiment positif! L’automne et l’hiver ne me font plus peur grâce à ses
                      lunettes je suis prête à les affronter! Je recommande vraiment et je n’arrête pas d’en parler
                      autour de moi.
                    </p>
                    <button class="fw-bolder expand">Afficher plus</button>
                    <div class="date">21 décembre 2020</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="card">
                <div class="card-header text-center">
                  <picture class="avatar d-block">
                    <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/5@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/5.png 1x"/>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/5.png" alt="Customer avatar">
                  </picture>
                  <div class="h4 name fw-bolder">Muriel V.</div>
                  <a href="https://www.google.com/maps/contrib/107266988971890423777/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@50.5779487,5.2632398,17z/data=!4m6!1m5!8m4!1e2!2s107266988971890423777!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                    <span>
                      Avis de <b>Facebook</b>
                    </span>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                  </a>
                </div>
                <div class="card-body-wrapper">
                  <div class="card-body">
                    <p class="review">Prescrite par mon neurologue dans le cadre de mes troubles du sommeil et de mon épilepsie, je
                      ne
                      peux maintenant plus m'en passer. Le fait qu'il s'agisse de lunettes est très pratique car on
                      sait faire ses activités sans soucis (comme se brosser les dents, déjeuner, lire ou même
                      commencer à travailler). Elles sont livrées avec une housse très pratique pour le rangement
                      et/ou les déplacements.
                      Je vous déconseille juste de les utiliser dans une pièce sombre.
                    </p>
                    <button class="fw-bolder expand">Afficher plus</button>
                    <div class="date">21 décembre 2020</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="card">
                <div class="card-header text-center">
                  <picture class="avatar d-block">
                    <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/6@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/6.png 1x"/>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/6.png" alt="Customer avatar">
                  </picture>
                  <div class="h4 name fw-bolder">Rita R.</div>
                  <a href="https://www.google.com/maps/contrib/100137502211655470427/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@50.6323126,5.3985949,11z/data=!4m6!1m5!8m4!1e1!2s100137502211655470427!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                    <span>
                      Avis de <b>Facebook</b>
                    </span>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                  </a>
                </div>
                <div class="card-body-wrapper is-visible">
                  <div class="card-body">
                    <p class="review">5 jours que j’emploie ma luminette ,je me sens déjà mieux ...
                      L’essayer c’est l’adopter.
                      Il y a 3 ans que je la porte en saison automnale 20 minutes par jour ... en déjeunant
                    </p>
                    <div class="date">21 décembre 2020</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="card">
                <div class="card-header text-center">
                  <picture class="avatar d-block">
                    <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/7@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/7.png 1x"/>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/7.png" alt="Customer avatar">
                  </picture>
                  <div class="h4 name fw-bolder">Audrey B.</div>
                  <a href="https://www.google.com/maps/contrib/105110317360703574808/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@50.5779487,5.2632398,17z/data=!4m6!1m5!8m4!1e2!2s105110317360703574808!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                    <span>
                      Avis de <b>Facebook</b>
                    </span>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                  </a>
                </div>
                <div class="card-body-wrapper is-visible">
                  <div class="card-body">
                    <p class="review">Je suis très satisfaite de la luminette! (j'ai la luminette 3). J'ai de meilleurs cycles de
                      sommeil et elles m'aident à bien me réveiller le matin (aussi bien qu'un café). En plus elles
                      sont faciles à porter. Tous les matins je me dis que j'ai bien fait de les acheter! Je
                      recommande!
                    </p>
                    <div class="date">21 décembre 2020</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="card">
                <div class="card-header text-center">
                  <picture class="avatar d-block">
                    <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/8@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/8.png 1x"/>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/8.png" alt="Customer avatar">
                  </picture>
                  <div class="h4 name fw-bolder">Christopher T.</div>
                  <a href="https://www.google.com/maps/contrib/105475160819624793335/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@50.5779487,5.2632398,17z/data=!4m6!1m5!8m4!1e2!2s105475160819624793335!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                    <span>
                      Avis de <b>Facebook</b>
                    </span>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                  </a>
                </div>
                <div class="card-body-wrapper is-visible">
                  <div class="card-body">
                    <p class="review">Je suis ravi du modèle 2.
                      Faciles d'usage, les Luminette me permettent d'être dynamique dès le matin et facilite
                      l'endormissement. Ma neurologue a été de bon conseil !
                      Je passerai probablement au modèle 3 dans le futur…
                    </p>
                    <div class="date">21 décembre 2020</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="card">
                <div class="card-header text-center">
                  <picture class="avatar d-block">
                    <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/9@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/9.png 1x"/>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/9.png" alt="Customer avatar">
                  </picture>
                  <div class="h4 name fw-bolder">Gregory E.</div>
                  <a href="https://www.google.com/maps/contrib/117879807108998873428/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@50.3197246,6.3556338,7.58z/data=!4m4!1m3!8m2!1e1!2s117879807108998873428?hl=fr-BE" target="_blank" class="link">
                    <span>
                      Avis de <b>Facebook</b>
                    </span>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                  </a>
                </div>
                <div class="card-body-wrapper is-visible">
                  <div class="card-body">
                    <p class="review">J'ai mes luminettes 3 depuis mars 2020 et je ne sais plus m'en passer, elles sont parfaites
                      pour
                      combattre le décalage horaire ou les troubles du sommeil.
                    </p>
                    <div class="date">21 décembre 2020</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="card">
                <div class="card-header text-center">
                  <picture class="avatar d-block">
                    <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/10@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/10.png 1x"/>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/10.png" alt="Customer avatar">
                  </picture>
                  <div class="h4 name fw-bolder">Florence M.</div>
                  <a href="https://www.google.com/maps/contrib/114308199652100072679/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@50.5779487,5.2632398,17z/data=!4m6!1m5!8m4!1e2!2s114308199652100072679!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                    <span>
                      Avis de <b>Facebook</b>
                    </span>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                  </a>
                </div>
                <div class="card-body-wrapper is-visible">
                  <div class="card-body">
                    <p class="review">Je les ai depuis un an, elles m’ont été conseillées par ma thérapeute, je ressens une vraie
                      amélioration de mon humeur et de ma fatigue.
                    </p>
                    <div class="date">21 décembre 2020</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="card">
                <div class="card-header text-center">
                  <picture class="avatar d-block">
                    <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/11@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/11.png 1x"/>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/11.png" alt="Customer avatar">
                  </picture>
                  <div class="h4 name fw-bolder">Guillaume M.</div>
                  <a href="https://www.google.com/maps/contrib/101195112554299989422/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@4.6513087,89.2730014,3z/data=!4m6!1m5!8m4!1e2!2s101195112554299989422!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                    <span>
                      Avis de <b>Facebook</b>
                    </span>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                  </a>
                </div>
                <div class="card-body-wrapper">
                  <div class="card-body">
                    <p class="review">Sujet depuis des années à la "dépression saisonnière", j'ai décidé d'essayer la luminothérapie
                      pour palier à ce manque de soleil hivernale, et j'ai opté pour ce modèle en format "lunettes"
                      pour le côté pratique de pouvoir faire sa préparation du matin et ne pas avoir à rester collé
                      à
                      un panneau lumineux.
                      Les résultats ne se sont pas fait attendre, les coups de mou et la fatigue générale habituels
                      ont quasiment disparu et autre point positif que je n'avais pas prévu, ma tendance à avoir du
                      mal à trouver le sommeil le soir a aussi disparu, sans doute dû à un réajustement du rythme
                      circadien...
                      En bref, c'est un investissement au départ, mais je ne le regrette absolument pas, et ma
                      conjointe s'y est aussi mise !
                    </p>
                    <button class="fw-bolder expand">Afficher plus</button>
                    <div class="date">21 décembre 2020</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="card">
                <div class="card-header text-center">
                  <div class="avatar"></div>
                  <div class="h4 name fw-bolder">Andi Philip</div>
                  <a href="#" target="_blank" class="link">
                    <span>
                      Avis de <b>Facebook</b>
                    </span>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                  </a>
                </div>
                <div class="card-body-wrapper">
                  <div class="card-body">
                    <p class="review">"J'avais une petite lampe Phillips auparavant, et c'était une galère de s'asseoir au bon angle,
                      la distance, et le temps. Avec cet appareil je n'ai pas à me soucier de ces choses. Je mets simplement
                      les
                      mets, j'appuie sur le bouton et je les porte jusqu'à ce qu'elles s'éteignent. Facile à utiliser même lorsque je porte mes
                      lunettes ou mes lentilles. De plus, elles ne me donnent pas de maux de tête comme le faisait la lampe Phillips !
                      Il y a presque 4 personnes dans mon foyer qui les portent tous les jours. Je vais bientôt acheter une seconde paire! 
                      (Deux d'entre nous ont des troubles du sommeil et tout le monde semble avoir une meilleure humeur)."
                    </p>
                    <button class="fw-bolder expand">Afficher plus</button>
                    <div class="date">21 décembre 2020</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="card">
                <div class="card-header text-center">
                  <picture class="avatar d-block">
                    <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/13@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/13.png 1x"/>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/13.png" alt="Customer avatar">
                  </picture>
                  <div class="h4 name fw-bolder">Patricia</div>
                  <a href="#" target="_blank" class="link">
                    <span>
                      Avis de <b>Facebook</b>
                    </span>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                  </a>
                </div>
                <div class="card-body-wrapper is-visible">
                  <div class="card-body">
                    <p class="review">Utilisée médicalement pour problème dépressif. Ces lunettes m'ont apportés une nette
                      amélioration. Pas gênantes à porter, la luminosité agit sur mon humeur, m'apporte un
                      réconfort,
                      elle me sont très utiles.
                    </p>
                    <div class="date">21 décembre 2020</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="card">
                <div class="card-header text-center">
                  <picture class="avatar d-block">
                    <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/14@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/14.png 1x"/>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/14.png" alt="Customer avatar">
                  </picture>
                  <div class="h4 name fw-bolder">Hélène</div>
                  <a href="https://www.google.com/maps/contrib/116715457571293643665/reviews/@49.9994005,2.560789,8z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                    <span>
                      Avis de <b>Facebook</b>
                    </span>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                  </a>
                </div>
                <div class="card-body-wrapper">
                  <div class="card-body">
                    <p class="review">C'est un réflexe à prendre dès le lever, la Luminette se fait vite oublier et on peut vaquer à
                      ses occupations. Avec ou sans, il n'y a pas photo : dès la première utilisation, on se sent
                      vite
                      mieux réveillé et les coups de mou de milieu de matinée ou d'après-midi disparaissent vite.
                      Vraiment conquise.
                    </p>
                    <button class="fw-bolder expand">Afficher plus</button>
                    <div class="date">21 décembre 2020</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="card">
                <div class="card-header text-center">
                  <div class="avatar"></div>
                  <div class="h4 name fw-bolder">Anthony</div>
                  <a href="https://www.google.com/maps/contrib/103414070215570066252/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@50.5779487,5.2632398,17z/data=!4m6!1m5!8m4!1e2!2s103414070215570066252!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                    <span>
                      Avis de <b>Facebook</b>
                    </span>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                  </a>
                </div>
                <div class="card-body-wrapper is-visible">
                  <div class="card-body">
                    <p class="review">Utilisateur depuis plus de dix ans ... la luminette m’a toujours aidé à me « régler » lors de
                      mes travails en horaires de nuit ou tres tot le matin...on se sent rapidement plus en forme.
                      Produit sérieux et facile a utiliser.
                    </p>
                    <div class="date">21 décembre 2020</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="card">
                <div class="card-header text-center">
                  <picture class="avatar d-block">
                    <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/15@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/15.png 1x"/>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/15.png" alt="Customer avatar">
                  </picture>
                  <div class="h4 name fw-bolder">Muriel T.</div>
                  <a href="https://www.google.com/maps/contrib/105183132711717313101/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@50.5779487,5.2610511,17z/data=!4m6!1m5!8m4!1e2!2s105183132711717313101!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                    <span>
                      Lire l'avis sur <b>Google</b>
                    </span>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                  </a>
                </div>
                <div class="card-body-wrapper">
                  <div class="card-body">
                    <p class="review">J'ai acheté la Luminette pour m'aider contre la déprime hivernale. Je l'utilise chaque matin
                      au
                      réveil. Ce que j'apprécie avec la Luminette, c'est que je peux choisir la durée de la séance
                      (20, 30 ou 60 min) en fonction de ma disponibilité, et que je peux vaquer à mes occupations
                      pendant la séance (pas besoin de rester en face d'une lampe posée sur la table). Après
                      quelques
                      jours d'utilisation seulement, je notais déjà un résultat positif: fini la déprime les jours
                      gris et pluvieux. Avec le temps, je me sens moins fatiguée et j'ai plus d'énergie. Je
                      recommande
                      vivement la Luminette.
                    </p>
                    <button class="fw-bolder expand">Afficher plus</button>
                    <div class="date">21 décembre 2020</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="card">
                <div class="card-header text-center">
                  <picture class="avatar d-block">
                    <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/12@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/12.png 1x"/>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/12.png" alt="Customer avatar">
                  </picture>
                  <div class="h4 name fw-bolder">Aurélie</div>
                  <a href="https://www.amazon.fr/gp/customer-reviews/RWZSN5SZJF573/ref=cm_cr_getr_d_rvw_ttl?ie=UTF8&ASIN=B07VMRRB9Y" target="_blank" class="link">
                    <span>
                      Avis de <b>Facebook</b>
                    </span>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                  </a>
                </div>
                <div class="card-body-wrapper">
                  <div class="card-body">
                    <p class="review">Depuis des années, je souffre de dépression saisonnière. Des professionnels de la santé
                      (médecin généraliste, psychiatre, psychologue et pharmacienne) m'ont conseillé d'avoir recours
                      à
                      la luminothérapie pour améliorer mon état en automne et en hiver.
                      J'ai hésité longuement et puis j'ai découvert les Luminette.
                      Je les utilise le matin, soit en vaquant à mes occupations (petit déjeuner, brossage de
                      dents...) soit pendant que je lis. Après la séance, j'ai beaucoup plus d'énergie et de
                      motivation pour faire face à la journée.
                      Elles sont très pratiques car elles peuvent se porter en même temps que des lunettes de vue ou
                      d'ordinateur.
                      Elles sont constituées de plastique, assez rigide, mais paraissent solides.
                      Le chargement est assez rapide. Un indicateur de chargement permet de savoir quand ce dernier
                      est terminé. Une fois chargées, elles peuvent être utilisées environ 10 fois.
                      Il y a 3 modes possibles. Plus la lumière est puissante, plus le temps d'exposition est
                      réduit.
                      Ce qui est très pratique c'est qu'il ne faut pas surveiller le temps car elles s'éteignent
                      toutes seules une fois la séance terminée. Le seul mini « bémol » est que le mode le plus
                      puissant peut être éblouissant quand la luminosité environnante est faible.
                      C'est donc un accessoire que je recommanderais sans hésitation, car il me donne un vrai coup
                      de
                      pouce moralement pendant les courtes journées.
                    </p>
                    <button class="fw-bolder expand">Afficher plus</button>
                    <div class="date">21 décembre 2020</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    
          <div class='lav-show-reviews lav-observe'>Afficher plus</div>
        </div>
    
        <div class='lav-reviews__total'>
          <div class='lav-reviews__total-col'>
            <a href='#' class='lav-reviews__total-image'>
              <img src='${settings.dir}/img/reviews-trusted.svg' />
            </a>
            <div class='lav-reviews__total-info'>
              <div class='lav-reviews__total-score'>4.4</div>
              <div class='lav-reviews__total-stars'>
                <img src='${settings.dir}/img/reviews-stars.svg' />
              </div>
              <div class='lav-reviews__total-caption'>Trusted shops</div>
            </div>
          </div>
          <div class='lav-reviews__total-col'>
            <a href='#' class='lav-reviews__total-image'>
              <img src='${settings.dir}/img/reviews-amazon.svg' />
            </a>
            <div class='lav-reviews__total-info'>
              <div class='lav-reviews__total-score'>4.4</div>
              <div class='lav-reviews__total-stars'>
                <img src='${settings.dir}/img/reviews-stars.svg' />
              </div>
              <div class='lav-reviews__total-caption'>Amazon</div>
            </div>
          </div>
        </div>
    
        <div class='lav-reviews__preview-list lav-observe'>
          <div class='lav-reviews__preview' style='background-image: url(${settings.dir}/img/fr-preview-review1.png);'>
            <div class="lav-reviews__play lav-open-modal" data-target='.lav-review-modal' data-src='https://www.youtube.com/embed/vekX4k9dssY?autoplay=0&start=0&showinfo=0&rel=0'>
              <img class='lav-reviews__play-btn' src='${settings.dir}/img/play.svg' />
              <img class='lav-reviews__play-btn' src='${settings.dir}/img/play-hover.svg' />
            </div>
          </div>
    
          <div class='lav-reviews__preview' style='background-image: url(${settings.dir}/img/fr-preview-review2.png);'>
            <div class="lav-reviews__play lav-open-modal" data-target='.lav-review-modal' data-src='https://www.youtube.com/embed/z_QK3VZCS6U?autoplay=0&start=0&showinfo=0&rel=0'>
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
    
        <iframe width="840" height="480" src="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
    
    <div class='lav-sticky-mob'>
      <button class="lav-sticky__btn btn-primary btn-lg flipped lav-btn-buy">
        <span class="btn-text">
          Achat 229 €
        </span>
        <span class="btn-bg-wrapper"></span>
      </button>
    </div>
    `;
  }

  setTimeout(() => {
    observerView();
  }, 100);

  function observerView() {
    console.log('ovserve init');
    const observerOptions = {
      root: null,
      threshold: 0,
      rootMargin: '-40%',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // console.log(entry);
        if (entry.isIntersecting) {
          console.log(entry.target);

          if (entry.target.classList.contains('lav-shorts__wrap')) {
            const event = [
              'exp_new_pdp_video_reviews_vrs',
              'Video review',
              'Review section',
              'Review section',
            ];

            isElementInViewport(entry.target, event);
          }

          // observer.unobserve(entry.target); //
        }
      });
    }, observerOptions);

    for (let section of Array.from(
      document.querySelectorAll('.lav-shorts__wrap')
    )) {
      observer.observe(section);
    }

    function isElementInViewport(el, event) {
      setTimeout(() => {
        const rect = el.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;

        if (
          rect.top + rect.height * 0.3 < windowHeight &&
          rect.bottom > rect.height * 0.3
        ) {
          el.classList.add('in-view');
          observer.unobserve(el);

          gaEvent(...event);
        }
      }, 3000);
    }
  }

  document
    .querySelector('.section-main')
    .insertAdjacentHTML('afterend', newLayout);

  if (detectLang() == 'fr' && document.querySelector('.timer-tooltip')) {
    let cloneAlma = document.querySelector('.timer-tooltip').cloneNode(true);
    cloneAlma.classList.add('lav-alma');
    document
      .querySelector('.lav-count__pay')
      .insertAdjacentElement('afterend', cloneAlma);

    cloneAlma.addEventListener('click', function (e) {
      e.preventDefault();
      this.classList.toggle('active');
      gaEvent(
        'exp_new_pdp_checkout_43',
        'Alma',
        'Click on tooltip',
        'Quantity (french version)'
      );
    });
  }

  document
    .querySelector('.lav-transform__more-btn')
    .addEventListener('click', function () {
      this.classList.toggle('active');
      gaEvent(
        'exp_new_pdp_checkout_32',
        'Learn more about Light Therapy',
        'Click on button',
        'How Luminette transforms your days'
      );
      if (this.classList.contains('active')) {
        gaEvent(
          'exp_new_pdp_checkout_05',
          'Section',
          'View on screen',
          'Light therapy on the go'
        );
      }
      document.querySelector('.block-on-the-go').classList.toggle('active');
    });

  if (detectLang() === 'fr') {
    document.querySelector(
      '.block-on-the-go .title'
    ).innerHTML = `La luminothérapie <br /> en toute liberté`;
  } else {
    document.querySelector('.block-on-the-go .title').innerHTML =
      'Light therapy <br /> on the go';
  }

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

  setInterval(() => {
    if (window.innerWidth < 768) {
      if (
        document.querySelector('.cookies-bar:not(.accepted)') &&
        document.querySelector('.cookies-bar').style.display == 'block'
        // !document.body.classList.contains('lav-cookie')
      ) {
        document.body.classList.add('lav-cookie');
        if (document.querySelector('.lav-cookie .widget-visible iframe')) {
          document.querySelector(
            '.lav-cookie .widget-visible iframe'
          ).style.bottom = '170px';
          document.querySelector(
            '.lav-cookie .widget-visible iframe'
          ).style.right = '10px';
        }

        if (document.querySelector('.lav-cookie button.needsclick')) {
          document.querySelector('.lav-cookie button.needsclick').style.bottom =
            '150px';
          document.querySelector(
            '.lav-cookie button.needsclick'
          ).style.marginLeft = '10px';
        }
      }

      if (
        document.querySelector('.cookies-bar.accepted') ||
        document.querySelector('.cookies-bar').style.display !== 'block'
        // !document.body.classList.contains('lav-cookie-accepted')
      ) {
        document.body.classList.remove('lav-cookie');
        document.body.classList.add('lav-cookie-accepted');
        if (
          document.querySelector('.lav-cookie-accepted .widget-visible iframe')
        ) {
          document.querySelector(
            '.lav-cookie-accepted .widget-visible iframe'
          ).style.bottom = '100px';
          document.querySelector(
            '.lav-cookie-accepted .widget-visible iframe'
          ).style.right = '10px';
        }
        if (document.querySelector('.lav-cookie-accepted button.needsclick')) {
          document.querySelector(
            '.lav-cookie-accepted button.needsclick'
          ).style.bottom = '80px';
          document.querySelector(
            '.lav-cookie-accepted button.needsclick'
          ).style.marginLeft = '10px';
        }
      }
    }
    if (window.innerWidth > 768 && window.pageYOffset < 50) {
      document.querySelector('.header').classList.remove('dark-theme');
      document.querySelector('.header').classList.add('light-theme');
    }
    if (
      window.innerWidth > 1199 &&
      document.querySelector('.lav-trial__info .lav-trial__image')
    ) {
      document
        .querySelector('.lav-trial__info')
        .insertAdjacentElement(
          'beforebegin',
          document.querySelector('.lav-trial__image')
        );
    } else if (
      window.innerWidth <= 1199 &&
      document.querySelector('.lav-trial__row>.lav-trial__image')
    ) {
      document
        .querySelector('.lav-trial__descr')
        .insertAdjacentElement(
          'afterend',
          document.querySelector('.lav-trial__image')
        );
    }

    if (!document.querySelector('.banner-fixed')) {
      document.querySelector('.lav-jumb').classList.add('lav-jumb_clear');
    } else {
      document.querySelector('.lav-jumb').classList.remove('lav-jumb_clear');
    }
  }, 400);

  let initSplideInterval = setInterval(() => {
    if (typeof Splide == 'function') {
      clearInterval(initSplideInterval);
      initSliders();
    }
  }, 500);

  document
    .querySelector('.lav-study__btn')
    .addEventListener('click', function () {
      gaEvent(
        'exp_new_pdp_checkout_33',
        'Read the study',
        'Click on button',
        'Read the study: An independent study has shown'
      );
      gaEvent(
        'Click on button. Read the study',
        'Read the study: An independent study has shown'
      );
      document.querySelector('.btn-download-doc').click();
    });

  document.querySelector('.section-features').classList.add('lav-observe');

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

  if (detectLang() === 'fr') {
    document
      .querySelector(
        '.lum-page .section-features .device-wrapper .heading-wrapper .title'
      )
      .insertAdjacentHTML(
        'afterend',
        '<div class="lav-feat">Survolez les boutons pour zoomer</div>'
      );
  } else {
    document
      .querySelector(
        '.lum-page .section-features .device-wrapper .heading-wrapper .title'
      )
      .insertAdjacentHTML(
        'afterend',
        '<div class="lav-feat">Move your cursor over the buttons to zoom in</div>'
      );
  }

  if (window.innerWidth <= 1199) {
    document
      .querySelector(
        '.lum-page .section-how-it-works .main-content .column .title'
      )
      .insertAdjacentElement(
        'afterend',
        document.querySelector(
          '.lum-page .section-how-it-works .main-content .column.d-none img'
        )
      );
  }

  handleJumb();
  initHowItWorks();
  initReserch();
  initDeliveryDates();
  initModals();
  initReviews();
  initDeliveryAndPrice();

  if (
    document
      .querySelector(
        '.lav-reviews__total-col:first-child .lav-reviews__total-image'
      )
      .getAttribute('href') == '#'
  ) {
    document
      .querySelector(
        '.lav-reviews__total-col:first-child .lav-reviews__total-image'
      )
      .addEventListener('click', function (e) {
        e.preventDefault();
      });
    document
      .querySelector(
        '.lav-reviews__total-col:last-child .lav-reviews__total-image'
      )
      .addEventListener('click', function (e) {
        e.preventDefault();
      });
  }

  function initDeliveryAndPrice() {
    console.log('initDelivery');
    if (
      location.href.includes('com/en-us') ||
      location.href.includes('com/en-ca')
    ) {
      if (location.href.includes('com/en-ca')) {
        document.querySelector(
          '.lav-count__item:first-child .lav-count__price'
        ).innerHTML = '$249';
        document.querySelector(
          '.lav-count__item:nth-child(2) .lav-count__price'
        ).innerHTML = '$199<sup>20</sup>';
        document.querySelector(
          '.lav-count__item:nth-child(3) .lav-count__price'
        ).innerHTML = '$186<sup>75</sup>';
        document.querySelector('.lav-jumb__btn .btn-text').innerText =
          'Buy $249';
        document.querySelector('.lav-trial__btn .btn-text').innerHTML =
          'Try it $249';
        document.querySelector('.lav-sticky__btn .btn-text').innerHTML =
          'Buy $249';
      } else {
        document.querySelector(
          '.lav-reviews__total-col:first-child .lav-reviews__total-image'
        ).href =
          'https://www.trustedshops.eu/buyerrating/info_X8DEF39E8C2F5D2AF445D6C0C1C734A1E.html';
        document.querySelector(
          '.lav-reviews__total-col:last-child .lav-reviews__total-image'
        ).href =
          'https://www.amazon.com/New-Model-Luminette-Therapy-Glasses/dp/B07VMRRB9Y/?_encoding=UTF8&pd_rd_w=Ren8u&content-id=amzn1.sym.b4f172f0-a2ab-4ffa-ac9d-22e96231ca8e&pf_rd_p=b4f172f0-a2ab-4ffa-ac9d-22e96231ca8e&pf_rd_r=22W8ZBHD84CXN9HM2SWK&pd_rd_wg=fh6wd&pd_rd_r=700a2f85-482f-42bb-b488-232d8ad3dce3&ref_=pd_gw_ci_mcx_mr_hp_atf_m#customerReviews';
      }
      return false;
    }

    if (
      location.href.includes('com/uk') &&
      !location.href.includes('com/uk-')
    ) {
      let htmlDelivery = `
        <div class="tooltip_free text-center mb-2">
          <div class="d-flex align-items-center justify-content-center mb-2 pb-1">
            <img height='24' src="${settings.dir}/img/flags-gb.png" alt="">
          </div>
          <p> Free for United Kingdom: <div class="fw-bold d-block">1 to 3 working days</div></p>
        </div>
        <div class="d-flex align-items-center justify-content-center mb-2 py-1">
          <img class="mr-2" src="${settings.dir}/img/delivery-methods2.png" />
        </div>
        <p class="">For any orders from the UK, the parcels are shipped from Amazon's warehouses located in the UK with Amazon's selected carrier. Before delivering your order, the carrier will send you a SMS or Email, informing you of the day it will be delivered. You have the option of delaying delivery for up to 3 days. If you do not reply, the delivery date will be that proposed by the transporter.</p>
      `;
      document.querySelector('.lav-test__second .tooltip-item').innerHTML =
        htmlDelivery;
      for (let item of document.querySelectorAll(
        '.lav-trial__btn-box .tooltip-item'
      )) {
        item.innerHTML = htmlDelivery;
      }

      document.querySelector(
        '.lav-count__item:first-child .lav-count__price'
      ).innerHTML = '£169';
      document.querySelector(
        '.lav-count__item:nth-child(2) .lav-count__price'
      ).innerHTML = '£135<sup>20</sup>';
      document.querySelector(
        '.lav-count__item:nth-child(3) .lav-count__price'
      ).innerHTML = '£126<sup>75</sup>';
      document.querySelector('.lav-jumb__btn .btn-text').innerText = 'Buy £169';
      document.querySelector('.lav-trial__btn .btn-text').innerHTML =
        'Try it £169';
      document.querySelector('.lav-sticky__btn .btn-text').innerHTML =
        'Buy £169';
      return false;
    }

    if (
      location.href.includes('com/fr') &&
      !location.href.includes('com/fr-')
    ) {
      document.querySelector(
        '.lav-reviews__total-col:first-child .lav-reviews__total-image'
      ).href =
        'https://www.trustedshops.be/fr/evaluation/info_X5CFE61C0E26F14D751206ABEDADF025D.html';
      document.querySelector(
        '.lav-reviews__total-col:last-child .lav-reviews__total-image'
      ).href =
        'https://www.amazon.fr/Nouveau-mod%C3%A8le-Luminette-luminoth%C3%A9rapie-Augmentez/dp/B07VMRRB9Y/ref=sr_1_5?crid=2J2JZSNQ8WEQJ&keywords=luminette&qid=1674741692&sprefix=luminett%2Caps%2C114&sr=8-5';

      let htmlDelivery = `
        <div class="tooltip_free text-center mb-2">
          <div class="d-flex align-items-center justify-content-center mb-2 pb-1">
            <img height='24' src="${settings.dir}/img/flags-fr.png" alt="">
          </div>
          <p> Livraison gratuite en France: <div class="fw-bold d-block">2 à 5 jours ouvrables</div></p>
        </div>
        <div class="d-flex align-items-center justify-content-center mb-2 py-1">
          <img class="mr-2" src="${settings.dir}/img/delivery-methods2.png" />
        </div>
        <p class="">Nous travaillons le plus souvent avec Colissimo. Avant de vous livrer votre colis, le transporteur vous enverra un email avec un lien vous permettant de suivre le colis.</p>
      `;

      document.querySelector('.lav-test__second .tooltip-item').innerHTML =
        htmlDelivery;
      for (let item of document.querySelectorAll(
        '.lav-trial__btn-box .tooltip-item'
      )) {
        item.innerHTML = htmlDelivery;
      }

      document.querySelector(
        '.lav-count__item:first-child .lav-count__price'
      ).innerHTML = '229€';
      document.querySelector(
        '.lav-count__item:nth-child(2) .lav-count__price'
      ).innerHTML = '183<sup>20</sup>€';
      document.querySelector(
        '.lav-count__item:nth-child(3) .lav-count__price'
      ).innerHTML = '171<sup>75</sup>€';
      document.querySelector('.lav-jumb__btn .btn-text').innerText =
        'Achat 229€';
      document.querySelector('.lav-trial__btn .btn-text').innerHTML =
        'Essayez-la pour it 229€';
      document.querySelector('.lav-sticky__btn .btn-text').innerHTML =
        'Achat 229€';

      document
        .querySelector('.lav-jumb__slider-wrap')
        .insertAdjacentHTML(
          'afterbegin',
          `<div class='lav-fabric'><img height='15' src="${settings.dir}/img/flags-be.png" alt=""> Fabriqué en Belgique</div>`
        );
      return false;
    }

    if (location.href.includes('com/fr-be')) {
      document.querySelector(
        '.lav-reviews__total-col:first-child .lav-reviews__total-image'
      ).href =
        'https://www.trustedshops.be/fr/evaluation/info_X5CFE61C0E26F14D751206ABEDADF025D.html';
      document.querySelector(
        '.lav-reviews__total-col:last-child .lav-reviews__total-image'
      ).href =
        'https://www.amazon.fr/Nouveau-mod%C3%A8le-Luminette-luminoth%C3%A9rapie-Augmentez/dp/B07VMRRB9Y/ref=sr_1_5?crid=2J2JZSNQ8WEQJ&keywords=luminette&qid=1674741692&sprefix=luminett%2Caps%2C114&sr=8-5';

      let htmlDelivery = `
        <div class="tooltip_free text-center mb-2">
          <div class="d-flex align-items-center justify-content-center mb-2 pb-1">
            <img height='24' src="${settings.dir}/img/flags-be.png" alt="">
          </div>
          <p> Livraison gratuite en Belgique: <div class="fw-bold d-block">1 à 3 jours ouvrables</d></p>
        </div>
        <div class="d-flex align-items-center justify-content-center mb-2 py-1">
          <img class="mr-2" src="${settings.dir}/img/delivery-methods2.png" />
        </div>
        <p class="">Nous travaillons le plus souvent avec Bpost. Avant de vous livrer votre colis, le transporteur vous enverra un email avec un lien vous permettant de suivre le colis.</p>
      `;

      document.querySelector('.lav-test__second .tooltip-item').innerHTML =
        htmlDelivery;
      for (let item of document.querySelectorAll(
        '.lav-trial__btn-box .tooltip-item'
      )) {
        item.innerHTML = htmlDelivery;
      }

      document.querySelector(
        '.lav-count__item:first-child .lav-count__price'
      ).innerHTML = '229€';
      document.querySelector(
        '.lav-count__item:nth-child(2) .lav-count__price'
      ).innerHTML = '183<sup>20</sup>€';
      document.querySelector(
        '.lav-count__item:nth-child(3) .lav-count__price'
      ).innerHTML = '171<sup>75</sup>€';
      document.querySelector('.lav-jumb__btn .btn-text').innerText =
        'Achat 229€';
      document.querySelector('.lav-trial__btn .btn-text').innerHTML =
        'Essayez-la pour it 229€';
      document.querySelector('.lav-sticky__btn .btn-text').innerHTML =
        'Achat 229€';

      document
        .querySelector('.lav-jumb__slider-wrap')
        .insertAdjacentHTML(
          'afterbegin',
          `<div class='lav-fabric'><img height='15' src="${settings.dir}/img/flags-be.png" alt=""> Fabriqué en Belgique</div>`
        );
      return false;
    }

    if (location.href.includes('com/fr-ca')) {
      let htmlDelivery = `
        <div class="tooltip_free text-center mb-2">
          <div class="d-flex align-items-center justify-content-center mb-2 pb-1">
            <img height='24' src="${settings.dir}/img/flags.png" alt="">
          </div>
          <p> Pour les États-Unis et le Canada: <div class="fw-bold d-block">3 à 5 jours ouvrables</div></p>
        </div>
        <div class="d-flex align-items-center justify-content-center mb-2 py-1">
          <img class="mr-2" src="${settings.dir}/img/delivery-methods.png" />
        </div>
        <p class="">Nous travaillons le plus souvent avec la logistique Fulfilled-by-Amazon (FBA) qui dispose d'entrepôts au Canada. Nous utilisons généralement le transporteur Purolator pour envoyer les colis. Avant de livrer votre colis, le transporteur vous envoie un email vous avertissant du jour de son passage.</p>
      `;

      document.querySelector('.lav-test__second .tooltip-item').innerHTML =
        htmlDelivery;
      for (let item of document.querySelectorAll(
        '.lav-trial__btn-box .tooltip-item'
      )) {
        item.innerHTML = htmlDelivery;
      }

      document.querySelector(
        '.lav-count__item:first-child .lav-count__price'
      ).innerHTML = '$249';
      document.querySelector(
        '.lav-count__item:nth-child(2) .lav-count__price'
      ).innerHTML = '$199<sup>20</sup>';
      document.querySelector(
        '.lav-count__item:nth-child(3) .lav-count__price'
      ).innerHTML = '$186<sup>75</sup>';
      document.querySelector('.lav-jumb__btn .btn-text').innerText =
        'Achat $249';
      document.querySelector('.lav-trial__btn .btn-text').innerHTML =
        'Essayez-la pour it $249';
      document.querySelector('.lav-sticky__btn .btn-text').innerHTML =
        'Achat $249';
      return false;
    }
  }

  function handleJumb() {
    for (let item of document.querySelectorAll('.lav-count__item')) {
      item.addEventListener('click', function () {
        if (this.classList.contains('active')) return false;

        if (item.dataset.count == '1') {
          gaEvent(
            'exp_new_pdp_checkout_23',
            '1 Luminette',
            'Choose pack',
            'Quantity'
          );

          if (detectLang() == 'fr' && document.querySelector('.lav-alma')) {
            if (
              (location.href.includes('com/fr') &&
                !location.href.includes('com/fr-')) ||
              location.href.includes('com/fr-be')
            ) {
              document.querySelector(
                '.lav-alma .timer-tooltip__base b'
              ).innerText = ' 76.33 €';
            }
          }
        } else if (item.dataset.count == '2') {
          gaEvent(
            'exp_new_pdp_checkout_24',
            '2 Luminette',
            'Choose pack',
            'Quantity'
          );

          if (detectLang() == 'fr' && document.querySelector('.lav-alma')) {
            if (
              (location.href.includes('com/fr') &&
                !location.href.includes('com/fr-')) ||
              location.href.includes('com/fr-be')
            ) {
              document.querySelector(
                '.lav-alma .timer-tooltip__base b'
              ).innerText = ' 61 €';
            }
          }
        } else if (item.dataset.count == '3') {
          gaEvent(
            'exp_new_pdp_checkout_25',
            '3 Luminette',
            'Choose pack',
            'Quantity'
          );

          if (detectLang() == 'fr' && document.querySelector('.lav-alma')) {
            if (
              (location.href.includes('com/fr') &&
                !location.href.includes('com/fr-')) ||
              location.href.includes('com/fr-be')
            ) {
              document.querySelector(
                '.lav-alma .timer-tooltip__base b'
              ).innerText = ' 57,25 €';
            }
          }
        }

        const price = item.querySelector('.lav-count__price').innerHTML;

        localStorage.setItem('lavCount', item.dataset.count);

        document
          .querySelector('.lav-count__item.active')
          .classList.remove('active');
        this.classList.add('active');

        if (detectLang() == 'fr') {
          document.querySelector('.lav-jumb__btn .btn-text').innerHTML =
            'Achat ' + price;

          document.querySelector('.lav-sticky__btn .btn-text').innerHTML =
            'Achat ' + price;

          document.querySelector('.lav-trial__btn .btn-text').innerHTML =
            'Essayez-la pour ' + price;
        } else {
          document.querySelector('.lav-jumb__btn .btn-text').innerHTML =
            'Buy ' + price;

          document.querySelector('.lav-sticky__btn .btn-text').innerHTML =
            'Buy ' + price;

          document.querySelector('.lav-trial__btn .btn-text').innerHTML =
            'Try it ' + price;
        }
      });
    }

    for (let item of document.querySelectorAll('.lav-btn-buy')) {
      item.addEventListener('click', function () {
        let price = document
          .querySelector('.lav-count__item.active .lav-count__price')
          .innerHTML.replace('<sup>', '.')
          .replace('</sup>', '');

        if (item.classList.contains('lav-sticky__btn')) {
          gaEvent(
            'exp_new_pdp_checkout_42',
            'Buy ' + price,
            'Click on button',
            'Sticky button'
          );
        }
        if (item.classList.contains('lav-jumb__btn')) {
          gaEvent(
            'exp_new_pdp_checkout_26',
            'Buy ' + price,
            'Click on button',
            'Buy ' + price
          );
        }
        if (item.classList.contains('lav-trial__btn')) {
          gaEvent(
            'exp_new_pdp_checkout_37',
            'Try it ' + price,
            'Click on button',
            'Try it ' + price
          );
        }
        location.href =
          location.href.split('/luminette')[0] + '/order?product=4';
      });
    }

    for (let item of document.querySelectorAll(
      '.order-button, .header .additional-block-wrapper .btn-primary'
    )) {
      item.addEventListener('click', function (e) {
        if (item.tagName === 'A') {
          e.preventDefault();
          document.body.classList.add('modal-open');
        }
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
        gaEvent(
          'exp_new_pdp_checkout_19',
          'Reviews',
          'Click on link',
          'Title of page'
        );
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
    } else {
    }

    // document.querySelector('.lav-jumb__video')
  }

  function initHowItWorks() {
    document
      .querySelector('.section-how-it-works')
      .classList.add('lav-observe');

    if (detectLang() == 'fr') {
      document.querySelector(
        '.lum-page .section-how-it-works .main-content .column .title'
      ).innerHTML = 'La science derrière la Luminette';
    } else {
      document.querySelector(
        '.lum-page .section-how-it-works .main-content .column .title'
      ).innerHTML = 'The Science <br /> Behind Luminette®';
    }
  }

  function initReserch() {
    document.querySelector('.section-studies').classList.add('lav-observe');

    if (detectLang() == 'fr') {
      document.querySelector(
        '.lum-page .section-studies .studies-component .heading-wrapper .title'
      ).innerHTML = `4 ans de recherche à <strong>l'Université de Liège</strong>`;

      document.querySelector(
        '.studies-component .wrapper-show-more .btn-show-more .btn-text'
      ).innerText = 'Afficher plus';
    } else {
      document.querySelector(
        '.lum-page .section-studies .studies-component .heading-wrapper .title'
      ).innerHTML =
        '4 years of <br/> research <br/> at the <strong>University <br/> of Liege</strong>';
    }

    document
      .querySelector('.studies-component .study-item:nth-child(3)')
      .classList.add('lav-research-reorder');
    document
      .querySelector('.studies-component .study-item:nth-child(3)')
      .classList.remove('last-visible-item');

    setTimeout(() => {
      document
        .querySelector('.studies-component .study-item:nth-child(3)')
        .classList.remove('last-visible-item');
    }, 3500);

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

    document
      .querySelector('.lav-show-reviews')
      .addEventListener('click', function () {
        this.remove();
        gaEvent(
          'exp_new_pdp_checkout_39',
          'Show more',
          'Click on button',
          'Customer reviews. Show more'
        );
        document.querySelector('.lav-reviews').classList.add('lav-reviews_all');
      });

    for (let item of document.querySelectorAll(
      '.lav-reviews .slider .expand'
    )) {
      item.addEventListener('click', function () {
        // this.remove();
        this.closest('.card-body-wrapper').classList.add('active');
        this.closest('.card-body')
          .querySelector('.review')
          .classList.add('review_expand');
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

    let shortsSlider = new Splide('.lav-shorts__splide', {
      pagination: false,
      arrows: false,
      flickPower: 100,
      speed: 1000,
      perPage: 4,
      gap: '60px',
      breakpoints: {
        1200: {
          perPage: 2,
          type: 'loop',
          pagination: true,
        },
        768: {
          fixedWidth: '200px',
          gap: '24px',
          perPage: 1,
        },
      },
    }).mount();

    shortsSlider.on('moved', function () {
      gaEvent(
        'exp_new_pdp_video_reviews_hs',
        'Horizontal scrolling video reviews section',
        'Review section',
        'Review section'
      );
    });

    var thumbnails = document.querySelectorAll('.lav-jumb__thumb');
    var current;

    for (var i = 0; i < thumbnails.length; i++) {
      initThumbnail(thumbnails[i], i);
    }

    function initThumbnail(thumbnail, index) {
      thumbnail.addEventListener('click', function () {
        gaEvent(
          'exp_new_pdp_checkout_21',
          'Carousel',
          'Click on photo',
          'First screen with image slider'
        );
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

    // let splideReview = new Splide('.lav-reviews__list', {
    //   arrows: false,
    //   perPage: 3,
    //   pagination: false,
    //   autoWidth: true,
    //   breakpoints: {
    //     768: {
    //       perPage: 1,
    //       pagination: true,
    //       autoWidth: false,
    //       gap: 15,
    //     },
    //   },
    // }).mount();

    let jqueryInterval = setInterval(() => {
      if (typeof $ === 'function') {
        clearInterval(jqueryInterval);

        // JS Slider
        const $slider = $('.slider');
        // $showMore = $section.find('.show-more');

        let sliderActivated = false;
        let showMoreActivated = false;
        const options = {
          centerMode: true,
          centerPadding: 0,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          speed: 375,
          dots: true,
        };

        const resizeHandler = () => {
          const isMobile = window.matchMedia('(max-width: 1199.98px)').matches;

          if (isMobile) {
            if (sliderActivated) {
              $slider.slick('unslick');
              sliderActivated = false;
            }
          } else if (!sliderActivated) {
            try {
              const classificateDots = (prevDotIndex) => {
                const prevPrevDotIndex = prevDotIndex - 1;
                const nextDotIndex = prevDotIndex + 2;
                const nextNextDotIndex = prevDotIndex + 3;

                const $dots = $slider.find('.slick-dots > li').removeClass(`
                      slick-prev 
                      slick-next 
                      slick-prev-prev 
                      slick-next-next 
                      slick-prev-max 
                      slick-next-max
                    `);

                for (let i = 0; i < prevPrevDotIndex; i++) {
                  $slider.find(`li:nth-child(${i})`).addClass('slick-prev-max');
                }

                for (let i = $dots.length; i > nextNextDotIndex; i--) {
                  $slider.find(`li:nth-child(${i})`).addClass('slick-next-max');
                }

                $slider
                  .find(
                    `li:nth-child(${
                      prevDotIndex > 0 ? prevDotIndex : $dots.length
                    })`
                  )
                  .addClass('slick-prev');

                $slider
                  .find(`li:nth-child(${prevPrevDotIndex ?? 0}`)
                  .addClass('slick-prev-prev');

                $slider
                  .find(
                    `li:nth-child(${
                      nextDotIndex > $dots.length ? 1 : nextDotIndex
                    })`
                  )
                  .addClass('slick-next');

                $slider
                  .find(`li:nth-child(${nextNextDotIndex ?? 0})`)
                  .addClass('slick-next-next');
              };

              $slider.slick(options);
              sliderActivated = true;

              classificateDots(0);

              $slider.on('beforeChange', (_e, _slick, _curr, next) =>
                classificateDots(next)
              );
            } catch (error) {
              console.log(error);
            }
          }
        };

        $(window).resize(resizeHandler);
        resizeHandler();
      }
    }, 200);
  }

  function initModals() {
    for (let item of document.querySelectorAll('.lav-open-modal')) {
      item.addEventListener('click', function (e) {
        e.preventDefault();

        if (item.classList.contains('lav-shorts__preview')) {
          gaEvent(
            'exp_new_pdp_video_reviews_cvr',
            item.dataset.name,
            'Review section',
            'Review section'
          );
        }

        if (item.closest('.lav-recharge')) {
          gaEvent(
            'exp_new_pdp_checkout_31',
            'Video',
            'Click on video',
            'Recharge with Luminette'
          );
        }

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

      if (src.includes('/video/')) {
        document.querySelector('.lav-modal').classList.add('lav-modal__video');
      } else {
        document
          .querySelector('.lav-modal')
          .classList.remove('lav-modal__video');
      }

      document.querySelector('.lav-modal').classList.add('active');

      setTimeout(() => {
        selector.classList.add('active');
      }, 400);

      if (
        selector.querySelector('iframe') &&
        selector.querySelector('iframe').src.includes('youtube')
      ) {
        selector.querySelector('iframe').src = selector
          .querySelector('iframe')
          .src.replace('autoplay=0', 'autoplay=1');
      }
    }

    function closeModal() {
      setTimeout(() => {
        // if (document.querySelector('.lav-modal__inner.active iframe')) {
        document.querySelector('.lav-modal__inner iframe').src = '';
        // }
      }, 500);
      // if (document.querySelector('.lav-modal__inner.active iframe')) {
      //   document.querySelector('.lav-modal__inner.active iframe').src = '';

      // document
      //   .querySelector('.lav-modal__inner.active iframe')
      //   .src.replace('autoplay=1', 'autoplay=0');
      // }
      document
        .querySelector('.lav-modal__inner.active')
        .classList.remove('active');
      setTimeout(() => {
        document.querySelector('.lav-modal.active').classList.remove('active');
      }, 400);
    }
  }

  document.querySelector('.section-how-it-works .subtitle span').style.color =
    '#1B7FE7';
}

function initObserver() {
  const observerOptions = {
    root: null,
    threshold: 0,
    rootMargin: '0px 0px -70% 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // console.log(entry);
      if (entry.isIntersecting) {
        if (entry.target.classList.contains('lav-count')) {
          gaEvent(
            'exp_new_pdp_checkout_01',
            'Section',
            'View on screen',
            'Quantity'
          );
        }

        if (entry.target.classList.contains('days-test')) {
          gaEvent(
            'exp_new_pdp_checkout_02',
            'Section',
            'View on screen',
            'You have 30 days to test Luminette'
          );
        }

        if (entry.target.classList.contains('lav-recharge')) {
          gaEvent(
            'exp_new_pdp_checkout_03',
            'Video',
            'View on screen',
            'Recharge with Luminette'
          );
        }

        if (entry.target.classList.contains('lav-transforms')) {
          gaEvent(
            'exp_new_pdp_checkout_04',
            'Section',
            'View on screen',
            'How Luminette transforms your days'
          );
        }

        if (entry.target.classList.contains('compare-section')) {
          gaEvent(
            'exp_new_pdp_checkout_06',
            'Section',
            'View on screen',
            'Luminette 3 vs Light Box'
          );
        }

        if (entry.target.classList.contains('lav-can')) {
          gaEvent(
            'exp_new_pdp_checkout_07',
            'Section',
            'View on screen',
            'While wearing Luminette, you can'
          );
        }

        if (entry.target.classList.contains('lav-perfect')) {
          gaEvent(
            'exp_new_pdp_checkout_08',
            'Section',
            'View on screen',
            'Perfect for your morning routine'
          );
        }

        if (entry.target.classList.contains('lav-trial__row')) {
          gaEvent(
            'exp_new_pdp_checkout_09',
            'Section',
            'View on screen',
            '30 Day Light Therapy Trial'
          );
        }

        if (entry.target.classList.contains('section-features')) {
          gaEvent(
            'exp_new_pdp_checkout_10',
            'Section',
            'View on screen',
            'Features'
          );
        }

        if (entry.target.classList.contains('technical')) {
          gaEvent(
            'exp_new_pdp_checkout_11',
            'Section',
            'View on screen',
            'Technical details'
          );
        }

        if (entry.target.classList.contains('safety-block')) {
          gaEvent(
            'exp_new_pdp_checkout_12',
            'Section',
            'View on screen',
            'Safety'
          );
        }

        if (entry.target.classList.contains('section-how-it-works')) {
          gaEvent(
            'exp_new_pdp_checkout_13',
            'Section',
            'View on screen',
            'The Science Behind Luminette'
          );
        }

        if (entry.target.classList.contains('section-studies')) {
          gaEvent(
            'exp_new_pdp_checkout_14',
            'Section',
            'View on screen',
            '4 years of research at the University of Liege'
          );
        }

        if (entry.target.classList.contains('lav-users')) {
          gaEvent(
            'exp_new_pdp_checkout_15',
            'Section',
            'View on screen',
            '50k+ Luminette users'
          );
        }

        if (entry.target.classList.contains('lav-reviews')) {
          gaEvent(
            'exp_new_pdp_checkout_16',
            'Section',
            'View on screen',
            'Customer reviews'
          );
        }

        if (entry.target.classList.contains('lav-show-reviews')) {
          gaEvent(
            'exp_new_pdp_checkout_17',
            'Section',
            'View on screen',
            'Customer reviews. Show more'
          );
        }

        if (entry.target.classList.contains('lav-reviews__preview-list')) {
          gaEvent(
            'exp_new_pdp_checkout_18',
            'Video',
            'View on screen',
            'Video before footer'
          );
        }

        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  for (let section of Array.from(document.querySelectorAll('.lav-observe'))) {
    observer.observe(section);
  }

  let eventType = 'mouseenter';
  if (window.innerWidth < 1199) {
    eventType = 'click';
  }

  document.addEventListener('click', function (e) {
    for (let item of document.querySelectorAll(
      '.tooltip.active, .lav-tooltip-wrap.active'
    )) {
      if (
        window.innerWidth < 1199 &&
        e.target.closest('.tooltip') !== item &&
        e.target.closest('.lav-tooltip-wrap') !== item
      ) {
        item.classList.remove('active');
      }
    }
  });

  let typeName = eventType == 'mouseenter' ? 'Hover' : 'Click';

  document
    .querySelector('.lav-jumb__effects-title .tooltip')
    .addEventListener(eventType, function () {
      this.classList.toggle('active');
      gaEvent(
        'exp_new_pdp_checkout_20',
        'Feel beneficial effects in 4 to 6 days',
        typeName + ' on tooltip',
        'Title of page'
      );
    });

  document
    .querySelector('.lav-count__head-inside .tooltip')
    .addEventListener(eventType, function () {
      this.classList.toggle('active');
      gaEvent(
        'exp_new_pdp_checkout_22',
        'What`s in the box',
        typeName + ' on tooltip',
        'Quantity'
      );
    });

  document
    .querySelector('.lav-test__second .days-test_head .tooltip')
    .addEventListener(eventType, function () {
      this.classList.toggle('active');
      gaEvent(
        'exp_new_pdp_checkout_28',
        'Free shipping',
        typeName + ' on tooltip',
        'You have 30 days to test Luminette'
      );
    });

  document
    .querySelector('.lav-test__third .days-test_head .tooltip')
    .addEventListener(eventType, function () {
      this.classList.toggle('active');
      gaEvent(
        'exp_new_pdp_checkout_29',
        '100% money back guarantee',
        typeName + ' on tooltip',
        'You have 30 days to test Luminette'
      );
    });

  document
    .querySelector('.lav-test__third .tooltip-item a')
    .addEventListener('click', function () {
      gaEvent(
        'exp_new_pdp_checkout_30',
        'Refunds page',
        'Click on link',
        'Tooltip: 100% money back guarantee. You have 30 days to test Luminette'
      );
    });

  document
    .querySelector('.lav-trial__btn-refresh .tooltip-item a')
    .addEventListener('click', function () {
      gaEvent(
        'exp_new_pdp_checkout_36',
        'Refunds page',
        'Click on link',
        'Tooltip: Free shipping. 30 Day Light Therapy Trial'
      );
    });

  document
    .querySelector('.lav-trial__btn-refresh')
    .addEventListener(eventType, function () {
      this.classList.toggle('active');
      gaEvent(
        'exp_new_pdp_checkout_34',
        '30-day trial',
        typeName + ' on tooltip',
        '30 Day Light Therapy Trial'
      );
    });

  document
    .querySelector('.lav-trial__btn-box')
    .addEventListener(eventType, function () {
      this.classList.toggle('active');
      gaEvent(
        'exp_new_pdp_checkout_35',
        'Free shipping',
        typeName + ' on tooltip',
        '30 Day Light Therapy Trial'
      );
    });

  document
    .querySelector('.lav-trial__inside .tooltip')
    .addEventListener(eventType, function () {
      this.classList.toggle('active');
      gaEvent(
        'exp_new_pdp_checkout_38',
        "What's in the box",
        typeName + ' on tooltip',
        '30 Day Light Therapy Trial'
      );
    });

  document
    .querySelector(
      '.lav-reviews__preview-list .lav-reviews__preview:first-child .lav-reviews__play'
    )
    .addEventListener('click', function () {
      gaEvent(
        'exp_new_pdp_checkout_40',
        'First video',
        'Click on video',
        'Video before footer, first (picture of men)'
      );
    });

  document
    .querySelector(
      '.lav-reviews__preview-list .lav-reviews__preview:last-child .lav-reviews__play'
    )
    .addEventListener('click', function () {
      gaEvent(
        'exp_new_pdp_checkout_41',
        'Second video',
        'Click on video',
        'Video before footer, second (girl with oranges)'
      );
    });
}

function initObserverCheckout() {
  const observerOptions = {
    root: null,
    threshold: 0,
    rootMargin: '-60%',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // console.log(entry);
      if (entry.isIntersecting) {
        if (entry.target.classList.contains('lav-labels')) {
          gaEvent(
            'exp_new_pdp_checkout_44',
            'Section',
            'View on screen',
            'Non-interaction elements in header'
          );
        }

        if (entry.target.classList.contains('lav-jumb')) {
          gaEvent(
            'exp_new_pdp_checkout_45',
            'Section',
            'View on screen',
            'Step 1. Your order'
          );
        }

        if (
          entry.target.id == 'scroll-spy-item-1' ||
          entry.target.dataset.stepForm == '2'
        ) {
          gaEvent(
            'exp_new_pdp_checkout_46',
            'Section',
            'View on screen',
            'Step 1. Contact details'
          );
        }

        if (
          entry.target.id == 'scroll-spy-item-2' ||
          entry.target.dataset.stepForm == '3'
        ) {
          gaEvent(
            'exp_new_pdp_checkout_47',
            'Section',
            'View on screen',
            'Step 1. Delivery address'
          );
        }

        if (entry.target.classList.contains('lav-address')) {
          gaEvent(
            'exp_new_pdp_checkout_48',
            'Section',
            'View on screen',
            'Step 1. Billing address'
          );
        }

        if (
          entry.target.classList.contains('btn-send-form') &&
          entry.target.closest('.details-section')
        ) {
          gaEvent(
            'exp_new_pdp_checkout_49',
            'Button',
            'View on screen',
            'Step 1. Continue'
          );
        }

        if (entry.target.classList.contains('order-info')) {
          gaEvent(
            'exp_new_pdp_checkout_55',
            'Section',
            'View on screen',
            'Step 2. Order summary'
          );
        }

        if (entry.target.classList.contains('payment-methods')) {
          gaEvent(
            'exp_new_pdp_checkout_56',
            'Section',
            'View on screen',
            'Step 2. Order payment method'
          );
        }

        if (entry.target.classList.contains('lav-observe-details')) {
          gaEvent(
            'exp_new_pdp_checkout_57',
            'Button',
            'View on screen',
            'Step 2. To payment'
          );
        }

        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  for (let section of Array.from(document.querySelectorAll('.lav-observe'))) {
    observer.observe(section);
  }

  let eventType = 'mouseenter';
  if (window.innerWidth < 1199) {
    eventType = 'click';
  }

  let typeName = eventType == 'mouseenter' ? 'Hover' : 'Click';

  if (document.querySelector('.lav-protect__tip')) {
    document
      .querySelector('.lav-protect__tip')
      .addEventListener(eventType, function () {
        gaEvent(
          'exp_new_pdp_checkout_54',
          "What's covered",
          typeName + ' on tooltip.',
          'Step 1. Your order'
        );
      });
  }

  if (document.querySelector('.lav-labels__item:first-child')) {
    document
      .querySelector('.lav-labels__item:first-child')
      .addEventListener('click', function () {
        gaEvent(
          'exp_new_pdp_checkout_50',
          'Free shipping',
          'Click on button',
          'Non-interaction elements in header'
        );
      });
  }

  if (document.querySelector('.lav-labels__item:last-child')) {
    document
      .querySelector('.lav-labels__item:last-child')
      .addEventListener('click', function () {
        gaEvent(
          'exp_new_pdp_checkout_51',
          '100% money back guarantee',
          'Click on button',
          'Non-interaction elements in header'
        );
      });
  }
}

function initTips() {
  document.addEventListener('click', function (e) {
    if (
      window.innerWidth < 768 &&
      document.querySelector('.lav-tip.active') &&
      !e.target.closest('.lav-protect__tip') &&
      !e.target.classList.contains('lav-protect__tip')
    ) {
      document.querySelector('.lav-tip.active').classList.remove('active');
    }
  });
  for (let tip of document.querySelectorAll('.lav-tip')) {
    tip.addEventListener('click', function () {
      if (window.innerWidth < 768) {
        this.classList.add('active');
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
      document
        .querySelector('.lav-product__count-minus')
        .classList.remove('lav-disable');
    } else if (count == '3') {
      document.querySelector('.lav-product__count-value').innerText = count;
      document
        .querySelector('.product-list .product-list-item:nth-child(3)')
        .click();
      document
        .querySelector('.lav-product__count-minus')
        .classList.remove('lav-disable');
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
        <span class='lav-path__item lav-path__active'>
          <span class="lav-step__num">1</span>
          Contact details and delivery address
        </span>
        <svg class="lav-path__divider" width="26" height="2" viewBox="0 0 26 2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" fill="currentColor" d="M8.74228e-08 1C3.91405e-08 0.447715 0.447715 -3.91405e-08 1 -8.74228e-08L1.04918 -9.17222e-08C1.60147 -1.40005e-07 2.04918 0.447715 2.04918 1C2.04918 1.55228 1.60147 2 1.04918 2L1 2C0.447715 2 1.35705e-07 1.55228 8.74228e-08 1ZM5.95082 0.999999C5.95082 0.447715 6.39854 -5.59378e-07 6.95082 -6.0766e-07L7.04918 -6.16259e-07C7.60146 -6.64541e-07 8.04918 0.447715 8.04918 0.999999C8.04918 1.55228 7.60146 2 7.04918 2L6.95082 2C6.39854 2 5.95082 1.55228 5.95082 0.999999ZM11.9508 0.999999C11.9508 0.447714 12.3985 -1.08391e-06 12.9508 -1.1322e-06L13.0492 -1.1408e-06C13.6015 -1.18908e-06 14.0492 0.447714 14.0492 0.999999C14.0492 1.55228 13.6015 2 13.0492 2L12.9508 2C12.3985 2 11.9508 1.55228 11.9508 0.999999ZM17.9508 0.999998C17.9508 0.447714 18.3985 -1.60845e-06 18.9508 -1.65673e-06L19.0492 -1.66533e-06C19.6015 -1.71361e-06 20.0492 0.447713 20.0492 0.999998C20.0492 1.55228 19.6015 2 19.0492 2L18.9508 2C18.3985 2 17.9508 1.55228 17.9508 0.999998ZM23.9508 0.999998C23.9508 0.447713 24.3985 -2.13299e-06 24.9508 -2.18127e-06L25 -2.18557e-06C25.5523 -2.23385e-06 26 0.447713 26 0.999998C26 1.55228 25.5523 2 25 2L24.9508 2C24.3985 2 23.9508 1.55228 23.9508 0.999998Z"></path>
        </svg>
        <span class='lav-path__item'>
          <span class="lav-step__num">2</span>
          Payment
        </span>
      </div>
    `;

    let infoEl = `
      <div class='lav-jumb__wrap'>
        <div class='lav-plate lav-jumb lav-observe'>
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

        <div class='lav-labels lav-observe'>
          <div class='lav-labels__item'>
            <img src='${settings.dir}/img/icon-box.svg' />
            Free shipping
          </div>
          <div class='lav-labels__item'>
            <img src='${settings.dir}/img/icon-guranteed.svg' />
            100% money back guarantee
          </div>
        </div>

        <div class='lav-trial'>
          <img class='lav-trial__image' src='${settings.dir}/img/trial-icon.svg' />

          <div class='lav-trial__info'>
            <div class='lav-trial__title'><span>30 Day</span> Light Therapy Trial</div>
            <div class='lav-trial__descr'>Test out Luminette for 30 days, and if you aren't satisfied, send it back and we'll refund you!</div>
          </div>
        </div>
      </div>
    `;

    if (detectLang() == 'fr') {
      el = `
        <div class='lav-path'>
          <span class='lav-path__item lav-path__active'>
            <span class="lav-step__num">1</span>
            Coordonnées et adresse de livraison
          </span>
          <svg class="lav-path__divider" width="26" height="2" viewBox="0 0 26 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" fill="currentColor" d="M8.74228e-08 1C3.91405e-08 0.447715 0.447715 -3.91405e-08 1 -8.74228e-08L1.04918 -9.17222e-08C1.60147 -1.40005e-07 2.04918 0.447715 2.04918 1C2.04918 1.55228 1.60147 2 1.04918 2L1 2C0.447715 2 1.35705e-07 1.55228 8.74228e-08 1ZM5.95082 0.999999C5.95082 0.447715 6.39854 -5.59378e-07 6.95082 -6.0766e-07L7.04918 -6.16259e-07C7.60146 -6.64541e-07 8.04918 0.447715 8.04918 0.999999C8.04918 1.55228 7.60146 2 7.04918 2L6.95082 2C6.39854 2 5.95082 1.55228 5.95082 0.999999ZM11.9508 0.999999C11.9508 0.447714 12.3985 -1.08391e-06 12.9508 -1.1322e-06L13.0492 -1.1408e-06C13.6015 -1.18908e-06 14.0492 0.447714 14.0492 0.999999C14.0492 1.55228 13.6015 2 13.0492 2L12.9508 2C12.3985 2 11.9508 1.55228 11.9508 0.999999ZM17.9508 0.999998C17.9508 0.447714 18.3985 -1.60845e-06 18.9508 -1.65673e-06L19.0492 -1.66533e-06C19.6015 -1.71361e-06 20.0492 0.447713 20.0492 0.999998C20.0492 1.55228 19.6015 2 19.0492 2L18.9508 2C18.3985 2 17.9508 1.55228 17.9508 0.999998ZM23.9508 0.999998C23.9508 0.447713 24.3985 -2.13299e-06 24.9508 -2.18127e-06L25 -2.18557e-06C25.5523 -2.23385e-06 26 0.447713 26 0.999998C26 1.55228 25.5523 2 25 2L24.9508 2C24.3985 2 23.9508 1.55228 23.9508 0.999998Z"></path>
          </svg>
          <span class='lav-path__item'>
            <span class="lav-step__num">2</span>
            Paiement
          </span>
        </div>
      `;

      infoEl = `
        <div class='lav-jumb__wrap'>
          <div class='lav-plate lav-jumb lav-observe'>
            <div class='lav-product'>
              <div class='lav-title lav-product__title'>Votre commande</div>
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
                <div class='lav-title lav-protect__title'>Protégez votre Luminette</div>
                <div class='lav-protect__tip lav-tip'>
                  <div class='lav-tip__value'>Qu'est-ce qui est compris&nbsp;? <img src='${settings.dir}/img/icon-info.svg' /></div>
                  <div class='lav-tip__body'>
                    <p>
                      Votre achat de Luminette est garanti pendant 2 ans contre les défauts de fabrication.
                    </p>

                    <p>
                      Optez pour une protection maximale en commandant l'extension de garantie qui couvre votre Luminette pendant 4 ans.
                    </p>
                  </div>
                </div>
              </div>
              <div class='lav-protect__body'>
              </div>
            </div>
          </div>

          <div class='lav-labels lav-observe'>
            <div class='lav-labels__item'>
              <img src='${settings.dir}/img/icon-box.svg' />
              Livraison gratuite
            </div>
            <div class='lav-labels__item'>
              <img src='${settings.dir}/img/icon-guranteed.svg' />
              Garantie de remboursement à 100%
            </div>
          </div>

          <div class='lav-trial'>
            <img class='lav-trial__image' src='${settings.dir}/img/trial-icon.svg' />

            <div class='lav-trial__info'>
              <div class='lav-trial__title'>Essai <span>de 30 jours</span> satisfait ou remboursé</div>
              <div class='lav-trial__descr'>Testez la Luminette pendant 30 jours, et si vous n'êtes pas satisfait, renvoyez-la et nous vous rembourserons&nbsp;!</div>
            </div>
          </div>
        </div>
      `;
    }

    if (document.querySelector('#scroll-spy-item-1')) {
      document.querySelector('#scroll-spy-item-1').classList.add('lav-observe');
      document.querySelector('#scroll-spy-item-2').classList.add('lav-observe');
    } else {
      document
        .querySelector('[data-step-form="2"]')
        .classList.add('lav-observe');
      document
        .querySelector('[data-step-form="3"]')
        .classList.add('lav-observe');
    }

    document
      .querySelector('.products-info')
      .insertAdjacentHTML('beforebegin', el);

    document
      .querySelector('.order-pages .container + .container')
      .classList.add('lav__wrapper');

    document
      .querySelector('.lav__wrapper')
      .insertAdjacentHTML('beforeend', infoEl);

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

      if (
        item
          .querySelector('.warranty-description .type')
          .innerText.toLowerCase()
          .includes('extended')
      ) {
        if (detectLang() == 'fr') {
          itemCloneEl.querySelector('.warranty-description .title').innerText =
            item.querySelector('.warranty-description .type').innerText;
        } else {
          itemCloneEl.querySelector('.warranty-description .title').innerText =
            item.querySelector('.warranty-description .type').innerText +
            ' warranty';
        }
      } else {
        itemCloneEl.querySelector('.warranty-description .title').innerText =
          item.querySelector('.warranty-description .type').innerText;
      }

      itemCloneEl.querySelector('.warranty-description .type').innerText = item
        .querySelector('.warranty-description .title')
        .innerText.trim()
        .replace('warranty', '');

      if (itemCloneEl.querySelector('[data-warranty-price]')) {
        itemCloneEl.innerHTML = itemCloneEl.innerHTML.replace(
          /<span data-warranty-price="">\d+<\/span>/,
          parseInt(itemCloneEl.querySelector('[data-warranty-price]').innerText)
        );
      }

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

    // document.querySelector('.lav-product__price').innerHTML =
    //   document.querySelector('.total-price').innerHTML;
    document.querySelector('.lav-product__price').innerHTML =
      document.querySelector('#quantity-more .product-price .price').innerHTML;

    document
      .querySelector('.lav-product__count-plus')
      .addEventListener('click', function (e) {
        e.preventDefault();
        handleCount('plus');
        gaEvent(
          'exp_new_pdp_checkout_52',
          'Increase quantity',
          'Click on button',
          'Step 1. Your order'
        );
      });

    document
      .querySelector('.lav-product__count-minus')
      .addEventListener('click', function (e) {
        e.preventDefault();
        handleCount('minus');
        gaEvent(
          'exp_new_pdp_checkout_53',
          'Decrease quantity',
          'Click on button',
          'Try it $199',
          'Step 1. Your order'
        );
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
      document
        .querySelector('.counter__button--decrease')
        .removeAttribute('disabled');
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
            .replace('£', '')
            .replace('€', '')
        );

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

      // document.querySelector('.lav-product__price').innerHTML =
      //   document.querySelector('.total-price').innerHTML;

      // document.querySelector('.lav-product__price').innerHTML =
      //   document.querySelector(
      //     '#quantity-more .product-price .price'
      //   ).innerHTML;
    }

    let warrantyText = detectLang() == 'fr' ? ', ' : ' warranty, ';

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
      warrantyText +
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
      <div class='lav-address lav-observe'>
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
    if (detectLang() == 'fr') {
      document.querySelector(
        '.order-pages.order-details .details-block .btn-send-form .btn-text'
      ).innerText = 'Continuer';
    } else {
      document.querySelector(
        '.order-pages.order-details .details-block .btn-send-form .btn-text'
      ).innerText = 'Continue';
    }

    document
      .querySelector('.order-pages.order-details .details-block .btn-send-form')
      .classList.add('lav-observe');

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
        <span class='lav-accept__check'></span> <span>I accept the <a href='#'>General Sales Conditions.</a></span>
      </div>

      <div class="error-block lav-accept-error">Please accept the General sales conditions</div>
    `;

    if (detectLang() === 'fr') {
      summaryEl = `
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
          <span class='lav-accept__check'></span> <span>J'accepte les <a href='#'>conditions générales de vente.</a></span>
        </div>

        <div class="error-block lav-accept-error">Veuillez accepter les conditions générales de vente</div>
      `;
    }

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

    if (detectLang() == 'fr') {
      document
        .querySelector('.lav-coupon')
        .insertAdjacentHTML(
          'afterbegin',
          ' <div class="lav-coupon-text">Entrez le code du coupon</div>'
        );
    } else {
      document
        .querySelector('.lav-coupon')
        .insertAdjacentHTML(
          'afterbegin',
          ' <div class="lav-coupon-text">Enter coupon code</div>'
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
  // let shippingEl = `
  //   <div class='lav-delivery-summary'>
  //     <img src='${settings.dir}/img/icon-box.svg' />
  //     Free shipping
  //   </div>
  // `;

  // if (detectLang() == 'fr') {
  //   shippingEl = `
  //   <div class='lav-delivery-summary'>
  //     <img src='${settings.dir}/img/icon-box.svg' />
  //     Livraison gratuite
  //   </div>
  //   `;
  // }

  document.querySelector('.order-info').classList.add('lav-observe');

  document.querySelector('.payment-methods').classList.add('lav-observe');

  // ADD DELIVERY
  // document
  //   .querySelector('.order-info .column.order-5')
  //   .insertAdjacentHTML('beforeend', shippingEl);

  let infoEl = `
    <div class='lav-jumb__wrap'>
      <div class='lav-plate lav-plate__details lav-jumb lav-observe'>
        <div class='lav-product'>
          <div class='lav-title lav-product__title'>Your order</div>
          <div class='lav-product__info'>
            <div class='lav-product__image'>
              <img src="/images/pages/order/quantity/lum1.png">
              Luminette
            </div>
            <div class='lav-product__price'>$199</div>
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
          <div class="lav-protect__body">
            <div class="warranty--option active" data-warranty="0">
              <div class="d-flex align-items-start">
                <svg width="33" height="37" viewBox="0 0 33 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M15.4557 0.177993C11.9194 2.01793 6.98822 4.44702 2.16406 4.44702C1.33564 4.44702 0.664062 5.11859 0.664062 5.94702C0.664062 13.0953 1.5492 19.2763 3.85656 24.4515C6.17896 29.6603 9.90532 33.7664 15.4211 36.8036C15.4601 36.8258 15.5001 36.8462 15.5408 36.8648C15.9123 37.0342 16.3493 37.0511 16.7481 36.882C16.7893 36.8647 16.8298 36.8454 16.8694 36.8244C22.7518 33.8015 26.7429 29.7068 29.2363 24.4872C31.7142 19.3001 32.6641 13.1048 32.6641 5.94702C32.6641 5.11859 31.9925 4.44702 31.1641 4.44702C25.9386 4.44702 20.6159 1.99472 16.8355 0.158879C16.806 0.144133 16.776 0.130371 16.7456 0.117614C16.5496 0.0349705 16.3448 -0.00278838 16.1433 0.000159959C15.9418 0.00279042 15.7381 0.0462043 15.5445 0.134243C15.5145 0.14784 15.4849 0.16243 15.4557 0.177993ZM16.1871 3.1777C13.0337 4.80117 8.45791 6.98239 3.67684 7.38258C3.79076 13.6752 4.67336 18.9163 6.59656 23.2298C8.54894 27.6088 11.606 31.1055 16.1895 33.7903C21.1475 31.0891 24.4365 27.5751 26.5293 23.1941C28.5835 18.8938 29.5276 13.669 29.6502 7.39011C24.5194 7.01081 19.5902 4.81396 16.1871 3.1777Z" fill="#DDE3E9"></path><path opacity="0.6" d="M21.3292 23.1582H12.7612V21.0702L16.9912 16.6782C17.8432 15.7902 18.2692 15.0462 18.2692 14.4462C18.2692 14.0502 18.1492 13.7322 17.9092 13.4922C17.6692 13.2402 17.3392 13.1142 16.9192 13.1142C16.0792 13.1142 15.4612 13.5702 15.0652 14.4822L12.6352 13.0602C13.0192 12.1842 13.5892 11.5062 14.3452 11.0262C15.1012 10.5462 15.9472 10.3062 16.8832 10.3062C18.0712 10.3062 19.0732 10.6722 19.8892 11.4042C20.7292 12.1242 21.1492 13.0962 21.1492 14.3202C21.1492 15.6522 20.4952 16.9722 19.1872 18.2802L17.0992 20.3862H21.3292V23.1582Z" fill="#517193"></path></svg>

                <div class="d-flex warranty-content">
                  <div class="warranty-description">
                    <h4 class="title"> basic </h4>
                    <p class="type">2 years </p>
                  </div>

                  <div class="warranty-price d-flex flex-row">
                    <span class="price">Free </span>
                    <div class="radio-icon"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="warranty--option " data-warranty="1">
              <div class="d-flex align-items-start">
                <svg width="33" height="37" viewBox="0 0 33 37" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.8"><path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M18.9137 0.200987C22.2074 2.04642 26.7451 4.44705 31.1641 4.44705C31.9925 4.44705 32.6641 5.11862 32.6641 5.94705C32.6641 20.2314 29.3595 30.6045 18.9489 36.7789C18.9104 36.8025 18.8708 36.8243 18.8304 36.8443C18.3971 37.0597 17.902 37.0463 17.4925 36.8419C11.2451 33.8322 6.9913 29.7493 4.32756 24.5217C1.67898 19.3237 0.664062 13.1146 0.664062 5.94705C0.664062 5.11862 1.33564 4.44705 2.16406 4.44705C7.78742 4.44705 13.4998 1.9757 17.5255 0.142954C17.5565 0.128388 17.588 0.1149 17.6199 0.102504C17.8186 0.0249606 18.0249 -0.00725047 18.2268 0.00135569C18.4282 0.0096192 18.6306 0.0587315 18.8217 0.15216C18.8529 0.167357 18.8836 0.183641 18.9137 0.200987ZM18.0871 33.7887C26.3304 28.5649 29.4413 20.0949 29.6524 7.37351C25.2205 6.95027 20.998 4.78753 18.0944 3.17899C14.4419 4.82627 9.15957 7.03612 3.67899 7.39644C3.81028 13.662 4.81549 18.8714 7.00056 23.1596C9.2338 27.5424 12.7554 31.0727 18.0871 33.7887Z" fill="url(#paint0_linear_2950_3951)"></path><path opacity="0.85" d="M19.9434 18.3224H21.2034V20.9864H19.9434V23.0024H17.0274V20.9864H11.3034V18.3224L15.3174 10.4024H18.4134L14.3994 18.3224H17.0274V15.6224H19.9434V18.3224Z" fill="#FFAA25"></path></g><defs><linearGradient id="paint0_linear_2950_3951" x1="12.3654" y1="-1.09047" x2="47.708" y2="29.4925" gradientUnits="userSpaceOnUse"><stop stop-color="#FFE074"></stop><stop offset="1" stop-color="#FFB45D"></stop></linearGradient></defs></svg>

                <div class="d-flex warranty-content">
                  <div class="warranty-description">
                    <h4 class="title"> extended  warranty</h4>
                    <p class="type">4 years </p>
                  </div>
                  <div class="warranty-price d-none flex-row">
                    <span data-insert-currency-sign="" class="price"><span class="currency-sign position-left align-self-end">$</span>19</span>
                    <div class="radio-icon"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class='lav-total'>
          <div class='lav-total__caption'>Total</div>
          <div class='lav-total__price'>$218</div>
        </div>
      </div>

      <div class='lav-labels lav-observe'>
        <div class='lav-labels__item'>
          <img src='${settings.dir}/img/icon-box.svg' />
          Free shipping
        </div>
        <div class='lav-labels__item'>
          <img src='${settings.dir}/img/icon-guranteed.svg' />
          100% money back guarantee
        </div>
      </div>

      <div class='lav-trial'>
        <img class='lav-trial__image' src='${settings.dir}/img/trial-icon.svg' />

        <div class='lav-trial__info'>
          <div class='lav-trial__title'><span>30 Day</span> Light Therapy Trial</div>
          <div class='lav-trial__descr'>Test out Luminette for 30 days, and if you aren't satisfied, send it back and we'll refund you!</div>
        </div>
      </div>
    </div>
  `;

  if (detectLang() == 'fr') {
    infoEl = `
      <div class='lav-jumb__wrap'>
        <div class='lav-plate lav-plate__details lav-jumb lav-observe'>
          <div class='lav-product'>
            <div class='lav-title lav-product__title'>Votre commande</div>
            <div class='lav-product__info'>
              <div class='lav-product__image'>
                <img src="/images/pages/order/quantity/lum1.png">
                Luminette
              </div>
              <div class='lav-product__price'>$199</div>
            </div>
          </div>
          <div class='lav-protect'>
            <div class='lav-protect__head'>
              <div class='lav-title lav-protect__title'>Protégez votre Luminette</div>
              <div class='lav-protect__tip lav-tip'>
                <div class='lav-tip__value'>Qu'est-ce qui est compris&nbsp;?  <img src='${settings.dir}/img/icon-info.svg' /></div>
                <div class="lav-tip__body">
                  <p>
                    Votre achat de Luminette est garanti pendant 2 ans contre les défauts de fabrication.
                  </p>

                  <p>
                    Optez pour une protection maximale en commandant l'extension de garantie qui couvre votre Luminette pendant 4 ans.
                  </p>
                </div>
              </div>
            </div>
            <div class="lav-protect__body">
              <div class="warranty--option active" data-warranty="0">
                <div class="d-flex align-items-start">
                  <svg width="33" height="37" viewBox="0 0 33 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M15.4557 0.177993C11.9194 2.01793 6.98822 4.44702 2.16406 4.44702C1.33564 4.44702 0.664062 5.11859 0.664062 5.94702C0.664062 13.0953 1.5492 19.2763 3.85656 24.4515C6.17896 29.6603 9.90532 33.7664 15.4211 36.8036C15.4601 36.8258 15.5001 36.8462 15.5408 36.8648C15.9123 37.0342 16.3493 37.0511 16.7481 36.882C16.7893 36.8647 16.8298 36.8454 16.8694 36.8244C22.7518 33.8015 26.7429 29.7068 29.2363 24.4872C31.7142 19.3001 32.6641 13.1048 32.6641 5.94702C32.6641 5.11859 31.9925 4.44702 31.1641 4.44702C25.9386 4.44702 20.6159 1.99472 16.8355 0.158879C16.806 0.144133 16.776 0.130371 16.7456 0.117614C16.5496 0.0349705 16.3448 -0.00278838 16.1433 0.000159959C15.9418 0.00279042 15.7381 0.0462043 15.5445 0.134243C15.5145 0.14784 15.4849 0.16243 15.4557 0.177993ZM16.1871 3.1777C13.0337 4.80117 8.45791 6.98239 3.67684 7.38258C3.79076 13.6752 4.67336 18.9163 6.59656 23.2298C8.54894 27.6088 11.606 31.1055 16.1895 33.7903C21.1475 31.0891 24.4365 27.5751 26.5293 23.1941C28.5835 18.8938 29.5276 13.669 29.6502 7.39011C24.5194 7.01081 19.5902 4.81396 16.1871 3.1777Z" fill="#DDE3E9"></path><path opacity="0.6" d="M21.3292 23.1582H12.7612V21.0702L16.9912 16.6782C17.8432 15.7902 18.2692 15.0462 18.2692 14.4462C18.2692 14.0502 18.1492 13.7322 17.9092 13.4922C17.6692 13.2402 17.3392 13.1142 16.9192 13.1142C16.0792 13.1142 15.4612 13.5702 15.0652 14.4822L12.6352 13.0602C13.0192 12.1842 13.5892 11.5062 14.3452 11.0262C15.1012 10.5462 15.9472 10.3062 16.8832 10.3062C18.0712 10.3062 19.0732 10.6722 19.8892 11.4042C20.7292 12.1242 21.1492 13.0962 21.1492 14.3202C21.1492 15.6522 20.4952 16.9722 19.1872 18.2802L17.0992 20.3862H21.3292V23.1582Z" fill="#517193"></path></svg>

                  <div class="d-flex warranty-content">
                    <div class="warranty-description">
                      <h4 class="title"> basic </h4>
                      <p class="type">2 ans de garantie </p>
                    </div>

                    <div class="warranty-price d-flex flex-row">
                      <span class="price">Free </span>
                      <div class="radio-icon"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="warranty--option " data-warranty="1">
                <div class="d-flex align-items-start">
                  <svg width="33" height="37" viewBox="0 0 33 37" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.8"><path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M18.9137 0.200987C22.2074 2.04642 26.7451 4.44705 31.1641 4.44705C31.9925 4.44705 32.6641 5.11862 32.6641 5.94705C32.6641 20.2314 29.3595 30.6045 18.9489 36.7789C18.9104 36.8025 18.8708 36.8243 18.8304 36.8443C18.3971 37.0597 17.902 37.0463 17.4925 36.8419C11.2451 33.8322 6.9913 29.7493 4.32756 24.5217C1.67898 19.3237 0.664062 13.1146 0.664062 5.94705C0.664062 5.11862 1.33564 4.44705 2.16406 4.44705C7.78742 4.44705 13.4998 1.9757 17.5255 0.142954C17.5565 0.128388 17.588 0.1149 17.6199 0.102504C17.8186 0.0249606 18.0249 -0.00725047 18.2268 0.00135569C18.4282 0.0096192 18.6306 0.0587315 18.8217 0.15216C18.8529 0.167357 18.8836 0.183641 18.9137 0.200987ZM18.0871 33.7887C26.3304 28.5649 29.4413 20.0949 29.6524 7.37351C25.2205 6.95027 20.998 4.78753 18.0944 3.17899C14.4419 4.82627 9.15957 7.03612 3.67899 7.39644C3.81028 13.662 4.81549 18.8714 7.00056 23.1596C9.2338 27.5424 12.7554 31.0727 18.0871 33.7887Z" fill="url(#paint0_linear_2950_3951)"></path><path opacity="0.85" d="M19.9434 18.3224H21.2034V20.9864H19.9434V23.0024H17.0274V20.9864H11.3034V18.3224L15.3174 10.4024H18.4134L14.3994 18.3224H17.0274V15.6224H19.9434V18.3224Z" fill="#FFAA25"></path></g><defs><linearGradient id="paint0_linear_2950_3951" x1="12.3654" y1="-1.09047" x2="47.708" y2="29.4925" gradientUnits="userSpaceOnUse"><stop stop-color="#FFE074"></stop><stop offset="1" stop-color="#FFB45D"></stop></linearGradient></defs></svg>

                  <div class="d-flex warranty-content">
                    <div class="warranty-description">
                      <h4 class="title"> extended </h4>
                      <p class="type">4 ans de garantie </p>
                    </div>
                    <div class="warranty-price d-none flex-row">
                      <span data-insert-currency-sign="" class="price"><span class="currency-sign position-left align-self-end">$</span>19</span>
                      <div class="radio-icon"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class='lav-total'>
            <div class='lav-total__caption'>Total</div>
            <div class='lav-total__price'>$218</div>
          </div>
        </div>

        <div class='lav-labels lav-observe'>
          <div class='lav-labels__item'>
            <img src='${settings.dir}/img/icon-box.svg' />
            Livraison gratuite
          </div>
          <div class='lav-labels__item'>
            <img src='${settings.dir}/img/icon-guranteed.svg' />
            Garantie de remboursement à 100%
          </div>
        </div>

        <div class='lav-trial'>
          <img class='lav-trial__image' src='${settings.dir}/img/trial-icon.svg' />

          <div class='lav-trial__info'>
            <div class='lav-trial__title'>Essai <span>de 30 jours</span> satisfait ou remboursé</div>
            <div class='lav-trial__descr'>Testez la Luminette pendant 30 jours, et si vous n'êtes pas satisfait, renvoyez-la et nous vous rembourserons&nbsp;!</div>
          </div>
        </div>
      </div>
    `;
  }

  document
    .querySelector('.lav-body-confirm .details-block .wrapper')
    .insertAdjacentHTML('afterend', infoEl);

  let pieces = document.querySelector(
    '.order-pages.order-summary .order-info .columns .column.order-5 .fz-secondary'
  ).innerText;

  let price = document.querySelector(
    '.order-pages.order-summary .order-info .columns .column.order-5 .price'
  ).innerText;

  if (
    document.querySelector(
      '.order-pages.order-summary .order-info .columns .column.order-5  div.mt-2.fw-bold'
    )
  ) {
    document.querySelector('.warranty--option:first-child').remove();
    document.querySelector('.warranty--option').classList.add('active');
  } else {
    document.querySelector('.warranty--option:last-child').remove();
  }

  document.querySelector('.lav-product__price').innerText = pieces;
  document.querySelector('.lav-total__price').innerText = price;

  let delivery = document.querySelector('.column.order-3 .sub-block').innerHTML;

  document
    .querySelector('.order-pages.order-summary .payment-methods .forms-wrapper')
    .insertAdjacentHTML('afterend', "<div class='lav-fedex'></div>");

  document
    .querySelector('.lav-fedex')
    .insertAdjacentHTML('afterbegin', delivery);

  handleTop();
  if (window.innerWidth < 768) {
    toggleButton();
  }

  document.querySelector('.btn-send-form .d-none').remove();
  document
    .querySelector('.btn-send-form .d-lg-none')
    .classList.remove('d-lg-none');
  document.querySelector('.btn-send-form .d-block').innerText = document
    .querySelector('.btn-send-form .d-block')
    .innerText.replace('To payment', 'To Payment');

  document.querySelector(
    '.order-pages.order-summary .order-info>.title'
  ).innerHTML = document
    .querySelector('.order-pages.order-summary .order-info>.title')
    .innerHTML.replace('Order summary', '')
    .replace('Résumé de la commande', '');

  function handleTop() {
    let el = `
      <div class='lav-path'>
        <span class='lav-path__item lav-path__complete'>
          <span class="lav-step__num">1</span>
          Contact details and delivery address
        </span>
        <svg class="lav-path__divider" width="26" height="2" viewBox="0 0 26 2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" fill="currentColor" d="M8.74228e-08 1C3.91405e-08 0.447715 0.447715 -3.91405e-08 1 -8.74228e-08L1.04918 -9.17222e-08C1.60147 -1.40005e-07 2.04918 0.447715 2.04918 1C2.04918 1.55228 1.60147 2 1.04918 2L1 2C0.447715 2 1.35705e-07 1.55228 8.74228e-08 1ZM5.95082 0.999999C5.95082 0.447715 6.39854 -5.59378e-07 6.95082 -6.0766e-07L7.04918 -6.16259e-07C7.60146 -6.64541e-07 8.04918 0.447715 8.04918 0.999999C8.04918 1.55228 7.60146 2 7.04918 2L6.95082 2C6.39854 2 5.95082 1.55228 5.95082 0.999999ZM11.9508 0.999999C11.9508 0.447714 12.3985 -1.08391e-06 12.9508 -1.1322e-06L13.0492 -1.1408e-06C13.6015 -1.18908e-06 14.0492 0.447714 14.0492 0.999999C14.0492 1.55228 13.6015 2 13.0492 2L12.9508 2C12.3985 2 11.9508 1.55228 11.9508 0.999999ZM17.9508 0.999998C17.9508 0.447714 18.3985 -1.60845e-06 18.9508 -1.65673e-06L19.0492 -1.66533e-06C19.6015 -1.71361e-06 20.0492 0.447713 20.0492 0.999998C20.0492 1.55228 19.6015 2 19.0492 2L18.9508 2C18.3985 2 17.9508 1.55228 17.9508 0.999998ZM23.9508 0.999998C23.9508 0.447713 24.3985 -2.13299e-06 24.9508 -2.18127e-06L25 -2.18557e-06C25.5523 -2.23385e-06 26 0.447713 26 0.999998C26 1.55228 25.5523 2 25 2L24.9508 2C24.3985 2 23.9508 1.55228 23.9508 0.999998Z"></path>
        </svg>
        <span class='lav-path__item lav-path__active'>
          <span class="lav-step__num">2</span>
          Payment
        </span>
      </div>
    `;

    if (detectLang() == 'fr') {
      el = `
        <div class='lav-path'>
          <span class='lav-path__item lav-path__complete'>
            <span class="lav-step__num">1</span>
            Coordonnées et adresse de livraison
          </span>
          <svg class="lav-path__divider" width="26" height="2" viewBox="0 0 26 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" fill="currentColor" d="M8.74228e-08 1C3.91405e-08 0.447715 0.447715 -3.91405e-08 1 -8.74228e-08L1.04918 -9.17222e-08C1.60147 -1.40005e-07 2.04918 0.447715 2.04918 1C2.04918 1.55228 1.60147 2 1.04918 2L1 2C0.447715 2 1.35705e-07 1.55228 8.74228e-08 1ZM5.95082 0.999999C5.95082 0.447715 6.39854 -5.59378e-07 6.95082 -6.0766e-07L7.04918 -6.16259e-07C7.60146 -6.64541e-07 8.04918 0.447715 8.04918 0.999999C8.04918 1.55228 7.60146 2 7.04918 2L6.95082 2C6.39854 2 5.95082 1.55228 5.95082 0.999999ZM11.9508 0.999999C11.9508 0.447714 12.3985 -1.08391e-06 12.9508 -1.1322e-06L13.0492 -1.1408e-06C13.6015 -1.18908e-06 14.0492 0.447714 14.0492 0.999999C14.0492 1.55228 13.6015 2 13.0492 2L12.9508 2C12.3985 2 11.9508 1.55228 11.9508 0.999999ZM17.9508 0.999998C17.9508 0.447714 18.3985 -1.60845e-06 18.9508 -1.65673e-06L19.0492 -1.66533e-06C19.6015 -1.71361e-06 20.0492 0.447713 20.0492 0.999998C20.0492 1.55228 19.6015 2 19.0492 2L18.9508 2C18.3985 2 17.9508 1.55228 17.9508 0.999998ZM23.9508 0.999998C23.9508 0.447713 24.3985 -2.13299e-06 24.9508 -2.18127e-06L25 -2.18557e-06C25.5523 -2.23385e-06 26 0.447713 26 0.999998C26 1.55228 25.5523 2 25 2L24.9508 2C24.3985 2 23.9508 1.55228 23.9508 0.999998Z"></path>
          </svg>
          <span class='lav-path__item lav-path__active'>
            <span class="lav-step__num">2</span>
            Paiement
          </span>
        </div>
      `;
    }

    document
      .querySelector('.component-order-steps')
      .insertAdjacentHTML('afterend', el);
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

    if (detectLang() == 'fr') {
      el = `
        <div class='lav-toggler-info__wrap'>
          <div class='lav-toggler-info'>
            <span>Plus de détails</span>
            <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.26287 6C5.07423 6 4.88561 5.92797 4.74178 5.78422L0.215928 1.25832C-0.0719759 0.970413 -0.0719759 0.503627 0.215928 0.21584C0.503715 -0.0719468 0.970408 -0.0719468 1.25833 0.21584L5.26287 4.22061L9.26743 0.21598C9.55533 -0.0718069 10.022 -0.0718069 10.3097 0.21598C10.5978 0.503767 10.5978 0.970553 10.3097 1.25846L5.78396 5.78436C5.64006 5.92814 5.45144 6 5.26287 6Z" fill="#517193"/>
            </svg>
          </div>
        </div>
      `;
    }

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
          if (detectLang() == 'fr') {
            this.querySelector('span').innerText = 'Moins de détails';
          } else {
            this.querySelector('span').innerText = 'Less details';
          }
          gaEvent(
            'exp_new_pdp_checkout_59',
            'More details',
            'Click on button',
            'Step 2. Order summary'
          );
          gaEvent('Click on button. More details', 'Step 2. Order summary');
        } else {
          document
            .querySelector('.order-pages.order-summary .order-info .columns')
            .classList.add('lav-brief');
          this.classList.remove('active');
          if (detectLang() == 'fr') {
            this.querySelector('span').innerText = 'Plus de détails';
          } else {
            this.querySelector('span').innerText = 'More details';
          }
          gaEvent(
            'exp_new_pdp_checkout_60',
            'Less details',
            'Click on button',
            'Step 2. Order summary'
          );
        }
      });
  }

  for (let item of document.querySelectorAll('.logo-link')) {
    item.href = '#';
    item.style = 'pointer-events: none;';
  }

  document.querySelector('.btn-send-form').classList.add('lav-observe');
  document.querySelector('.btn-send-form').classList.add('lav-observe-details');

  document
    .querySelector('.btn-edit-order')
    .addEventListener('click', function () {
      gaEvent(
        'exp_new_pdp_checkout_58',
        'Back to previous step',
        'Click on button',
        'Step 2. Order summary'
      );
    });

  document
    .querySelector('.btn-send-form')
    .addEventListener('click', function () {
      gaEvent(
        'exp_new_pdp_checkout_61',
        'To Payment',
        'Click on button',
        'Step 2. Choose payment method'
      );
    });
}

setTimeout(() => {
  if (document.querySelector('.lav-preloader')) {
    document.querySelector('.lav-preloader').classList.add('hide');
    setTimeout(() => {
      if (
        document.querySelector('.lav-preloader') &&
        document.querySelector('#preloader-styles')
      ) {
        document.querySelector('#preloader-styles').remove();
        document.querySelector('.lav-preloader').remove();
      }
    }, 450);
  }
}, 1000);
