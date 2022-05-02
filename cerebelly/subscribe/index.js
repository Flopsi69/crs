console.log('initExp');

/********* Settings **********/
const settings = {
  dir: 'https://flopsi69.github.io/crs/cerebelly/subscribe',
  hj: false,
  observe: false,
};

//Hotjar
if (settings.hj) {
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
    hj('trigger', 'also_like');
  } catch (e) {}
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
  } catch (e) {}
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
  .css-1gs8fg8 .summary-table .sum-row.total.coupon .total, 
  .css-x4jdip .box .wrapper .total, .box .wrapper .lines .content .sum-row .total.with-discount span:last-child, .css-xf71d4 .text-green {
    color: #FC4D38!important;
  }

  .subscribe-all {
    display: none!important;
  }

  // .subscribe-all *:not(.test),
  // .action .subscribe {
  //   display: none !important;
  // }

  .lav-caption {
    color: #3856A7;
    font-size: 12px;
    font-weight: 700;
    line-height: 1;
    border-bottom: 1px solid
  }
  .box .wrapper .info h3 {
    font-weight: 700!important;
    line-height: 1.2!important;
  }
  .remove-box.mobile {
    margin-right: 0!important;
  }
  .remove-box.mobile img {
    border: 1px solid #3856A7;
    border-radius: 50%;
    padding: 2px;
    width: 20px;
  }
  .box .wrapper .total {
    font-size: 14px!important;
  }
  .e-page-content-wrap .box .image img {
    width: 121px!important;
  }
  .e-page-content-wrap .box .image {
    margin-right: 8px!important;
  }
  .e-page-content-wrap .box {
    padding: 0!important;
    margin: 32px 0 15px!important;
  }
  .e-page-content-wrap .box .wrapper .info {
    margin-bottom: 8px!important;
  }
  .box .wrapper .lines .toggle .items-count {
    font-size: 12px;
    line-height: 12px;
  }
  .box .wrapper .lines .toggle .items-count img {
    width: 9px;
  }
  .box .wrapper .subtotal {
    font-size: 14px!important;
  }
  .tm-text {
    display: none;
  }
  .lav-caption__cancel-wrap {
    padding: 0 15px;
    text-align: center;
    width: 100%;
  }
  .lav-caption__cancel-wrap div {
    display: inline;
  }
  .css-tucdor .summary-table {
    padding-top: 42px;
  }
  .css-tucdor .summary-table .checkout-title {
    margin-bottom: 12px;
    font-size: 14px;
    letter-spacing: 0.15em;
  }
  .summary-table .sum-row .caption, .summary-table .sum-row .total {
    font-size: 14px!important;
  }
  .summary-table .sum-row.total + .summary-table .sum-row.total {
    margin-top: 14px!important;
    margin-bottom: 0!important;
  }
  .summary-table .sum-row.promo-code {
    margin: 26px 0;
  }
  .summary-table .sum-row.promo-code p {
    font-size: 12px!important;
    font-weight: 700!important;
  }
  .summary-table .sum-row.order-total .caption {
    font-size: 16px!important;
    font-weight: 700!important;
  }
  .summary-table .sum-row.order-total .total {
    font-weight: 700!important;
    font-size: 16px!important;
  }
  .summary-table .sum-row.order-total .total .total {
    font-size: 13px!important;
  }
  .summary-table .sum-row .caption, .summary-table .sum-row .total {
    font-weight: 700!important;
  }
`;

const modalEl = `
  <style>
    .lav-modal {
      position: relative;
      display: flex;
      position: fixed;
      z-index: 999999;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background: rgba(206, 211, 242, 0.94);
      margin-top: auto;
    }
    .lav-modal__inner {
      background: #E3EAFD;
      border-radius: 10px 10px 0 0;
      margin-top: auto;
      padding: 30px 25px 17px;
    }
    .lav-modal__title {
      font-weight: 700;
      font-size: 28px;
      line-height: 34px;
      color: #3856A7;
      span {
        color: #FC4D38;
      }
    }
    .lav-confirm__image {
      margin: 16px 0 32px;
      line-height: 0;
    }
    .lav-cancel__image {
      text-align: center;
      margin: 32px 0;
      line-height: 0;
    }
    .lav-modal__list {
      font-weight: 700;
      font-size: 14px;
      line-height: 140%;
      color: #3856A7;      
    }
    .lav-modal__list li {

    }
    .lav-modal__list li + li {
      margin-top: 5px;
    }
    .lav-confirm__note {
      padding: 30px 18px;
      margin: 24px 0 44px;
      background: #FFFFFF;
      border-radius: 20px;
      font-weight: 300;
      font-size: 16px;
      line-height: 140%;
      text-align: center;
      color: #3856A7;
    }
    .lav-confirm__caption-wrap {
      text-align: center;
      margin-bottom: 20px;
    }
    .lav-confirm__caption-wrap div {
      display: inline;
    }
  </style>
  <div class='lav-confirm lav-modal'>
    <div class='lav-modal__close'>
      <img src='${settings.dir}/img/close.svg'>
    </div>
    <div class='lav-confirm__inner lav-modal__inner'>
      <div class='lav-confirm__title lav-modal__title'>A flexible subscription adjusted <span>to your needs</span></div>
      <div class='lav-confirm__image'>
        <img src='${settings.dir}/img/confirm.png'>
      </div>
      <ul class='lav-confirm__list lav-modal__list'>
        <li class='lav-confirm__item'><strong>15% OFF</strong> our science-backed baby food.</li>
        <li class='lav-confirm__item'>Easily customize each order exactly how you'd like.</li>
        <li class='lav-confirm__item'>Never run out of baby food with flexible shipping options.</li>
        <li class='lav-confirm__item'>Complete control over confirmlation or rescheduling. </li>
      </ul>
      <div class='lav-confirm__note'>
        Subscribers can get 2<strong>8 more days</strong> of our baby food <strong>for FREE</strong> each year by taking advantage of the 15% discounted
      </div>
      <div class='lav-confirm__caption-wrap'>
        <div class='lav-confirm__caption lav-caption'>Skip offer and choose one-time purchase</div>
      </div>
      <button class="button primary red lav-confirm__btn lav-modal__btn">Continue</button>
    </div>

    <div class='lav-cancel__inner lav-modal__inner' style='display: none;'>
      <div class='lav-cancel__title lav-modal__title'>A flexible subscription adjusted <span>to your needs</span></div>
      <div class='lav-cancel__image'>
        <img src='${settings.dir}/img/calendar.svg'>
      </div>
      <ul class='lav-cancel__list lav-modal__list'>
        <li class='lav-cancel__item'>Need to reschedule a shipment? Just click 'My subscriptions' and select the next shipment date.</li>
        <li class='lav-cancel__item'>No longer interested in Clean Label Certified food? Leave us by heading to 'Account settings' and clicking on 'Cancel'.</li>
      </ul>
      <button class="button primary red lav-cancel__btn lav-modal__btn">Got it</button>
    </div>
  </div>
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
    !document.querySelector(
      '.subscribe-all .container-checkbox .hidden-checkbox'
    ).checked
  ) {
    document.querySelector('.subscribe-all .container-checkbox').click();
  }

  initModal();

  document
    .querySelector('.subscribe-all')
    .insertAdjacentHTML(
      'beforebegin',
      `<div class="lav-caption lav-caption__head">Why subscribing is better?</div>`
    );

  document.querySelector('.custom-column').insertAdjacentHTML(
    'beforebegin',
    `
      <div class='lav-caption__cancel-wrap'>
        <div class="lav-caption lav-caption__cancel">How to cancel subscription?</div>
      </div>
      `
  );

  // let inputEvent = new Event('input');

  // document.querySelector('.select__input').dispatchEvent(inputEvent);
}

function initModal() {
  document.querySelector('body').insertAdjacentHTML('beforeend', modalEl);
}
