console.log('initExp');

/********* Settings **********/
const settings = {
  dir: 'https://flopsi69.github.io/crs/able/payment/',
  clarity: false,
  observe: true,
};

//Clarity
if (settings.clarity) {
  const clarityInterval = setInterval(function () {
    if (typeof clarity == 'function') {
      clearInterval(clarityInterval);
      clarity('set', '', 'variant_1');
    }
  }, 1000);
}

// Alalytic 3
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

// Alalytic 4
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
// [class*=paypal-overlay-]
// Observe
if (settings.observe) {
  let observer = new MutationObserver((mutations) => {
    for (let mutation of mutations) {
      for (let node of mutation.addedNodes) {
        if (!(node instanceof HTMLElement)) continue;

        console.log('Added', node);
        // if (node.classList.contains('paypal-checkout-sandbox')) {
        //   let awaitClosePaypal = setInterval(() => {
        //     if (!document.querySelector('.paypal-checkout-sandbox')) {
        //       clearInterval(awaitClosePaypal);
        //       openModal();
        //     }
        //   }, 100);
        // }

        if (
          node.getAttribute('class') &&
          node.getAttribute('class').includes('modalWindowWrapper') &&
          node.querySelector('[class*=cardList]')
        ) {
          console.log('Open pay modal');

          node.addEventListener('click', function (e) {
            console.log(e.target);
            if (
              e.target.getAttribute('class') &&
              e.target.getAttribute('class').includes('modalWindowWrapper')
            ) {
              console.log('Close pay modal');
              e.target.querySelector('[class*=close-]').click();
              openModal();
            }
          });

          node
            .querySelector('[class*=close-]')
            .addEventListener('click', function (e) {
              openModal();
            });

          setTimeout(() => {
            initTip();
          }, 500);
        }
      }

      for (let node of mutation.addedNodes) {
        if (!(node instanceof HTMLElement)) continue;

        console.log('Removed', node);
      }
    }
  });

  let demoElem = document.body;

  observer.observe(demoElem, { childList: true, subtree: true });
}

// Styles
const styles = `
  .lav-hide {
    display: none!important;
  }
  button[type='submit'] {
    background: #EB731A;
  }
  .chargebeeInputLabel-0-2-316 {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #010101;
    top: -23px;
    left: 0;
    transform: none;
  }
  input::placeholder {
    color: #5E626B!important;;
  }
  .chargebeeInput-0-2-312.focus ~ .chargebeeInputLabel-0-2-316 {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #010101;
    top: -23px;
    left: 0;
    transform: none;
  }
  [class*='paymentInfoWrapper'] h1 {
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
    color: #202B47;
    margin-bottom: 16px;
    text-align: left;
  }
  [class*='paymentInfoWrapper'] [class*='checkPointsListItem'] h3 {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #202B47;
  }
  [class*='paymentInfoWrapper'] [class*='checkPointsListItem']:last-child h3 {
    margin-bottom: 0;
  }
  [class*='paymentInfoWrapper'] [class*='infoBlockWrapper'] {
    margin-top: 16px;
  }
  [class*='paymentInfoWrapper'] [class*='checkPointsWrapper'] {
    margin-bottom: 16px;
  }
  [class*='paymentInfoWrapper'] [class*='infoBlockText'] {
    margin-bottom: 16px;
    color: #202B47;
  }
  [class*='paymentInfoWrapper'] [class*='checkPointsListItem'] svg {
    // min-width: 16px;
  }
  [class*='paymentInfoWrapper'] [class*='couponWrapper'] {
    margin-bottom: 12px;
    background: #FFFFFF;
    border-radius: 8px;
  }
  [class*='paymentInfoWrapper'] div[class^=divider] {
    border-color: #E0E3EB;
  }
  [class*='paymentInfoWrapper'] [class*='couponApplyButton'] {
    padding: 0;
    height: 32px;
    margin-top: 5px;
    margin-right: 5px;
    max-width: 70px;
  }
  [class*='paymentInfoWrapper'] [class*='couponInput-'] {
    padding-top: 9px;
    padding-bottom: 9px;
  }
  [class*='paymentInfoWrapper'] [class*='couponInput-']::placeholder {
    font-size: 14px;
    line-height: 18px;
    color: #5E626B;
  }
  [class*='paymentInfoWrapper'] [class*='infoBlockTitle'] {
    margin-top: 0;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    color: #202B47;
  }

  .lav-guarantee {
    display: flex;
    align-items: center;
    background: #E0E6F7;
    border-radius: 12px;
    padding: 16px;
    margin-top: 24px;
    font-family: SF Pro Text;
  }
  .lav-guarantee__icon {
    margin-right: 12px;
    flex-shrink: 0;
    line-height: 0;
  }
  .lav-guarantee__title {
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
    color: #202B47;
  }
  .lav-guarantee__caption {
    margin-top: 4px;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #202B47;
  }

  .lav-offer_activated [class*=infoBlockWrapper-][class*= wrappableBlock] {
    display: none!important;
  }
  .lav-offer {
    display: none;
    align-items: center;
    background: #FFE9D2;
    border-radius: 12px;
    padding: 16px;
    margin: 16px 0;
    font-family: SF Pro Text;
  }
  .lav-offer.active {
    display: flex;
  }
  .lav-offer__icon {
    margin-right: 12px;
    flex-shrink: 0;
    line-height: 0;
  }
  .lav-offer__info {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #202B47;
  }
  .lav-offer__info span {
    font-weight: 700;
    color: #EB731A;
    white-space: nowrap;
  }
  .lav-modal {
    display: none;
    position: fixed;
    z-index: 999999;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    transition: 0.3s;
    background: rgba(0, 0, 0, 0.8);
    margin-top: auto;
    opacity: 0;
    padding: 15px;
    font-family: SF Pro Text;
  }
  .lav-modal.active {
    display: flex;
  }
  .lav-modal__inner {
    position: relative;
    max-height: 100%;
    width: 100%;
    max-width: 418px;
    background: #fff;
    border-radius: 12px;
    overflow: auto;
    transition: 0.5s;
    padding: 30px;
    margin: auto;
  }

  .lav-overflow {
    overflow: hidden;
  }
  .lav-btn {
    background: #EB731A;
    border-radius: 8px;
    height: 48px;
    outline: none;
    font-weight: 600;
    font-size: 18px;
    padding: 8px 16px;
    line-height: 1;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: 0.3s;
  }
  .lav-modal__close {
    position: absolute;
    top: 32px;
    right: 32px;
    cursor: pointer;
    transition: 0.3s;
    line-height: 0;
  }
  .lav-modal__close:hover {
    opacity: 0.8;
  }
  .lav-disc__title {
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
    color: #202B47;
    text-align: center;
  }
  .lav-disc__caption {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #202B47;
    margin-top: 12px;
    text-align: center;
  }
  .lav-disc__image {
    line-height: 0;
    margin-top: 12px;
  }
  .lav-disc__image img {
    max-width: 100%;
    width: 100%;
  }
  .lav-disc__note {
    margin-top: 16px;
    padding: 16px;
    background: #E0E6F7;
    border-radius: 12px;
    display: flex;
  }
  .lav-disc__note-img {
    margin-right: 12px;
    line-height: 0;
    flex-shrink: 0;
  }
  .lav-disc__note-info {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #202B47;
  }
  .lav-disc__note-info span {
    color: #1375D6;
    font-weight: 700;
  }
  .lav-disc__btn {
    margin-top: 20px;
    width: 100%;
  }
  .lav-tip {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    transition: 0.35s;
  }
  .lav-tip__trigger {
    line-height: 0;
  }
  @media(min-width: 851px) {
    .lav-tip:hover {
      opacity: 0.7;
    }
  }

  @media(max-width: 850px) {
    [class*='paymentInfoWrapper'] [class*='couponInput-'] {
      font-size: 14px;
    }
    [class*='modalWindowForm'] {
      max-width: 90%;
    }
    [class*='close'] + [class*='header-'] {
      border-color: #E0E3EB;
      margin-bottom: 24px;
    }
    [class*='continueButton'] {
      margin-top: 24px;
    }
    [class*='paymentInfoWrapper'] h1 {
      letter-spacing: -0.004em;
      font-size: 24px;
      line-height: 34px;
    }
    [class*='paymentInfoWrapper'] {
      background: #F6F6F6;
      border-radius: 10px;
      padding: 16px;
    }
    [class*='infoBlockCouponButton-'] {
      margin-bottom: 12px;
    }
    header + [class*='banner'] {
      margin-bottom: 12px;
    }
    [class*='paymentInfoWrapper'] [class*='checkPointsListItem'] h3 {
      margin-bottom: 0;
    }
    [class*='paymentInfoWrapper'] [class*='checkPointsListItem'] + [class*='checkPointsListItem'] {
      margin-top: 8px;
    }
    [class*='footerContent'] {
      background: #fff;
      padding-top: 0;
      padding-bottom: 28px;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      color: #202B47;
    }
    [class*='paymentWrapper'] {
      padding-bottom: 33px;
    }
    [class*='paymentButtonsWrapper'] div[class^=divider] {
      background-color: #E0E3EB;
      margin-top: 28px;
      margin-bottom: 28px;
    }
    [class*='paymentButtonsWrapper'] div[class^=divider]:after {
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      color: #202B47;
      padding-left: 20px;
      padding-right: 20px;
    }
    [class*='companyInfo'] span + span {
      font-weight: 700;
      margin-top: 2px;
    }
    [class*='creditCardBtnClass'] {
      background-color: #EB731A;
    }
    .lav-modal {
      padding: 20px 0 0 0;
    }
    .lav-modal__inner {
      transform: translateY(100%);
      margin-top: auto;
      border-radius: 16px 16px 0 0;
    }
    .lav-modal__inner.active {
      transform: translateY(0);
    }
    .lav-disc {
      padding: 16px;
      margin-bottom: 0;
    }
    .lav-disc__title {
      font-size: 24px;
      line-height: 34px;
      letter-spacing: -0.004em;
    }
    .lav-disc__caption {
      margin-top: 16px;
    }
    .lav-disc__image {
      margin-top: 16px;
    }
    .lav-modal__close {
      top: 16px;
      right: 16px;
    }
  }
`;

const stylesEl = document.createElement('style');
stylesEl.innerHTML = styles;
document.body.appendChild(stylesEl);
/*** STYLES / end ***/

/********* Custom Code **********/
let logs = '';

console.defaultLog = console.log.bind(console);
console.defaultError = console.log.bind(console);

console.log = function () {
  console.defaultLog.apply(console, arguments);

  try {
    checkErrors(JSON.stringify(arguments));
  } catch (e) {}
};

console.error = function () {
  console.defaultError.apply(console, arguments);

  try {
    checkErrors(JSON.stringify(arguments));
  } catch (e) {}
};

const errosForModal = [
  'PayPal error',
  'PayPal payment canceled',
  'Error! PayPal',
];

init();
function init() {
  console.log('init');
  initPaymentForm();
  initOffer();
  initGuarantee();
  initModal();
  if (window.innerWidth > 850) {
    initTip();
  }

  const awaitCardError = setInterval(() => {
    if (
      document
        .querySelector('[class*=errorWrapper] h3')
        ?.innerText.includes('error occurred while processing')
    ) {
      clearInterval(awaitCardError);
      openModal();
    }
  }, 500);
  // if (
  //   node.getAttribute('class') &&
  //   node.getAttribute('class').includes('errorWrapper') &&
  //   node
  //     .querySelector('h3')
  //     ?.innerText.includes('error occurred while processing')
  // ) {
  // }
}

function checkErrors(val) {
  for (let item of errosForModal) {
    if (val.includes(item)) {
      openModal();
    }
  }
}

function initPaymentForm() {
  // document
  //   .querySelector("input[class*='chargebeeInput']")
  //   .closest('div')
  //   .classList.add('lav-hide');
  // setTimeout(() => {
  //   console.log('fire');
  //   document.querySelector('#cardnumber').placeholder = 'XXXX-XXXX-XXXX-XXXX';
  // }, 4000);
}

function initTip(target = "[id*='card-cvv-']") {
  let el = `
    <div class='lav-tip'>
      <div class='lav-tip__trigger'>
        <img src="${settings.dir}/img/tip.svg" />
      </div>
    </div>
  `;

  if (!document.querySelector(target)) return false;

  document.querySelector(target).insertAdjacentHTML('afterbegin', el);
}

function initOffer() {
  const el = `
  <div class='lav-offer'>
    <div class='lav-offer__icon'>
      <img src="${settings.dir}/img/icon-gift.svg" />
    </div>
    <div class='lav-offer__info'>Get a <span>51%</span> discount on your personalized <span>7-day trial plan</span></div>
  </div>
  `;

  document
    .querySelector("[class*='paymentInfoWrapper'] [class*='infoBlockText']")
    .insertAdjacentHTML('beforebegin', el);
}

function initGuarantee() {
  const el = `
  <div class='lav-guarantee'>
    <div class='lav-guarantee__icon'>
      <img src="${settings.dir}/img/icon-guarantee.svg" />
    </div>
    <div class='lav-guarantee__info'>
      <div class='lav-guarantee__title'>30-Day Money-Back Guarantee</div>
      <div class='lav-guarantee__caption'>We will remind you 2 days before your trial ends</div>
    </div>
  </div>
  `;

  if (window.innerWidth < 850) {
    document
      .querySelector("[class*='paymentWrapper']")
      .insertAdjacentHTML('beforeend', el);
  } else {
    document
      .querySelector("[class*='paymentInfoWrapper']")
      .insertAdjacentHTML('beforeend', el);
  }
}

function initModal() {
  const el = `
  <div class='lav-modal-wrapper'>
    <div class='lav-modal'>
      <div class='lav-modal__inner lav-disc'>
        <div class='lav-modal__close'>
          <img src='${settings.dir}/img/icon-close.svg'>
        </div>
        <div class='lav-disc__title'>Did you know?</div>
        <div class='lav-disc__caption'>A Columbia University study showed that 73% of dieters have lost weight and then gained it back at least once.</div>
        <div class='lav-disc__image'>
          <img src='${settings.dir}/img/graph.svg'>
        </div>
        <div class='lav-disc__note'>
          <div class='lav-disc__note-img'>
            <img src='${settings.dir}/img/icon-disc.svg'>
          </div>
          <div class='lav-disc__note-info'>
            We want you to reach your goal and maintain it, so we are offerning a <span>special discount</span> on your <span>weight-loss program</span>.
          </div>
        </div>
        <button class='lav-disc__btn lav-btn lav-btn_orange'>Get my discount</button
      </div>
    </div>
  </div>
  `;

  document.querySelector('body').insertAdjacentHTML('beforeend', el);

  document
    .querySelector('.lav-guarantee')
    .addEventListener('click', function () {
      openModal();
    });

  document.querySelector('.lav-modal').addEventListener('click', function (e) {
    if (e.target.classList.contains('lav-modal')) {
      e.preventDefault();
      closeModal();
    }
  });

  for (let btn of document.querySelectorAll('.lav-modal__close')) {
    btn.addEventListener('click', function () {
      closeModal();
    });
  }

  document
    .querySelector('.lav-disc__btn')
    .addEventListener('click', function () {
      closeModal();
    });
}

function openModal() {
  // todo uncomment
  // if (sessionStorage.getItem('isDiscountActivated')) return false;

  sessionStorage.setItem('isDiscountActivated', 'yes');
  document.body.classList.add('lav-overflow');
  document.body.classList.add('lav-offer_activated');
  document.querySelector('.lav-offer').classList.add('active');

  if (document.querySelector('.lav-modal__inner.active')) {
    document
      .querySelector('.lav-modal__inner.active')
      .classList.remove('active');
  }

  document.querySelector('.lav-modal').classList.add('active');

  setTimeout(() => {
    document.querySelector('.lav-modal').style.opacity = '1';
    document.querySelector('.lav-modal__inner').classList.add('active');
  }, 200);
}

function closeModal() {
  document.body.classList.remove('lav-overflow');

  if (!document.querySelector('.lav-modal__inner.active')) return false;

  document.querySelector('.lav-modal__inner.active').classList.remove('active');

  document.querySelector('.lav-modal').style.opacity = '0';

  setTimeout(() => {
    document.querySelector('.lav-modal').classList.remove('active');
    if (document.querySelector('.lav-modal__inner[style]')) {
      setTimeout(() => {
        document
          .querySelector('.lav-modal__inner[style]')
          .removeAttribute('style');
      }, 50);
    }
  }, 300);
}

// setInterval(() => {
//   console.log(document.querySelector('[class^=timer]').innerText.split(':'));
//   if (
//     document.querySelector('[class^=timer]').innerText.split(':')[0] === '0'
//   ) {
//     location.reload();
//   }
// }, 1000);

// localStorage.setItem('subscribe-timer-minutes', '99999')
