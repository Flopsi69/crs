console.log('initExp');

/********* Settings **********/
const settings = {
  dir: 'https://flopsi69.github.io/crs/nebula/improvePayment',
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
      event: 'event-to-ga',
      eventCategory: 'Exp: Improve payment flow',
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

        // Code Here
      }
    }
  });

  let demoElem = document.body;

  observer.observe(demoElem, { childList: true, subtree: true });
}

// Styles
const styles = `
  .pay-btn {
    min-height: 45px;
    font-weight: 700;
  }
  .payment__buttons {
    margin: 0 -6px!important;
  }
  .lav-payments-wrap {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    flex-wrap: wrap;
    margin-top: -7px;
    margin-bottom: 23px;
  }
  .paypal-button-row {
    // height: 37px;
  }
  .lav-paypal-wrap {
    line-height: 0;
  }
  .lav-paypal-wrap .paypal-buttons {
    max-height: 40px!important;
  }

  @media(min-width: 768px) {
    #google-pay-container .gpay-button-fill, #apple-pay-container .gpay-button-fill {
      height: 100%!important;
    }
    #google-pay-container button, #apple-pay-container button {
      min-height: 35px!important;
    }
  }
  @media(max-width: 767px) {
    .payment__buttons>* {
      margin-bottom: 0!important;
    }
    .payment__buttons {
      margin: -15px 0 0!important;
      flex-flow: column!important;
    }
    .paylater-wrap .col-3.paylater-innerwrap{
      -ms-flex: 0 0 50%;
      flex: 0 0 50%;
      max-width: 50%;
    }
    .paylater-wrap>div:first-child {
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
      max-width: 100%;
    }
    .paylater-head {
      font-size: 14px!important;
      margin-bottom: 15px;
    }
    .payment__buttons .lav-paypal-wrap {
      margin-bottom: 12px!important;
    }
    .lav-payments-wrap {
      margin: 0;
    }
  }
`;

const stylesEl = document.createElement('style');
stylesEl.innerHTML = styles;
document.body.appendChild(stylesEl);
/*** STYLES / end ***/

/********* Custom Code **********/
/********* Custom Code **********/
const expInterval = setInterval(() => {
  if (
    location.href.includes('portal.nebula.org/cart') &&
    document.querySelector('.payment__buttons ')
  ) {
    clearInterval(expInterval);
    gaEvent('loaded');
    initCart();
  }
  if (
    location.href.includes('nebula.org/whole-genome-sequencing-dna-test') &&
    document.querySelector('.jumb__btn') &&
    document.querySelector('.plan__btn')
  ) {
    gaEvent('loaded');
    clearInterval(expInterval);
    initHP();
  }
}, 120);

function initHP() {
  console.log('initHP');
  document.querySelector('.jumb__btn').innerText = 'Shop DNA Tests';

  document.addEventListener('click', function (e) {
    if (e.target.closest('.plan__btn')) {
      gaEvent(
        'Add to cart btn',
        e.target.closest('.plan').querySelector('.plan__title').innerText
      );

      document.querySelector('.shoppingCart').click();
    }
  });
}

function initCart() {
  console.log('initCart');

  document
    .querySelector('.payment__buttons > div')
    .classList.add('lav-paypal-wrap');

  if (window.innerWidth < 768) return false;

  document
    .querySelector('.seperator-container-checkout')
    .insertAdjacentHTML('afterend', '<div class="lav-payments-wrap"></div>');

  document
    .querySelector('.lav-payments-wrap')
    .insertAdjacentElement(
      'beforeend',
      document.querySelector('.lav-paypal-wrap')
    );

  if (document.querySelector('#google-pay-container')) {
    document
      .querySelector('.lav-payments-wrap')
      .insertAdjacentElement(
        'beforeend',
        document.querySelector('#google-pay-container')
      );
  }

  if (document.querySelector('#apple-pay-container')) {
    document
      .querySelector('.lav-payments-wrap')
      .insertAdjacentElement(
        'beforeend',
        document.querySelector('#apple-pay-container')
      );
  }

  if (document.querySelector('.paypal-buttons')) {
    // document.querySelector('.paypal-buttons').style.height = '40px';
  }
}