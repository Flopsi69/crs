console.log('initExp');

/********* Settings **********/
const settings = {
  dir: 'https://flopsi69.github.io/crs/nebula/improvePayment',
  clarity: true,
  observe: false,
};

//Hotjar
if (settings.clarity) {
  const clarityInterval = setInterval(function () {
    if (typeof clarity == 'function') {
      clearInterval(clarityInterval);
      clarity('set', 'Imp payment flow', 'variant_1');
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
      eventCategory: 'Exp: Imp payment flow',
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
  .go-to-cart {
    display: none!important;
  }
  .lav-preloader #__nuxt:before{
    position: fixed;
    left: 0;
    content: '';
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 99999999;
    background-color: rgba(0,0,0,.5);
  }
  .lds-roller {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-roller div {
    animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    transform-origin: 40px 40px;
  }
  .lds-roller div:after {
    content: " ";
    display: block;
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #fff;
    margin: -4px 0 0 -4px;
  }
  .lds-roller div:nth-child(1) {
    animation-delay: -0.036s;
  }
  .lds-roller div:nth-child(1):after {
    top: 63px;
    left: 63px;
  }
  .lds-roller div:nth-child(2) {
    animation-delay: -0.072s;
  }
  .lds-roller div:nth-child(2):after {
    top: 68px;
    left: 56px;
  }
  .lds-roller div:nth-child(3) {
    animation-delay: -0.108s;
  }
  .lds-roller div:nth-child(3):after {
    top: 71px;
    left: 48px;
  }
  .lds-roller div:nth-child(4) {
    animation-delay: -0.144s;
  }
  .lds-roller div:nth-child(4):after {
    top: 72px;
    left: 40px;
  }
  .lds-roller div:nth-child(5) {
    animation-delay: -0.18s;
  }
  .lds-roller div:nth-child(5):after {
    top: 71px;
    left: 32px;
  }
  .lds-roller div:nth-child(6) {
    animation-delay: -0.216s;
  }
  .lds-roller div:nth-child(6):after {
    top: 68px;
    left: 24px;
  }
  .lds-roller div:nth-child(7) {
    animation-delay: -0.252s;
  }
  .lds-roller div:nth-child(7):after {
    top: 63px;
    left: 17px;
  }
  .lds-roller div:nth-child(8) {
    animation-delay: -0.288s;
  }
  .lds-roller div:nth-child(8):after {
    top: 56px;
    left: 12px;
  }
  @keyframes lds-roller {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }  
  .lav-prel {
    display: none;
  }
  .lav-preloader .lav-prel {
    display: block;
    position: fixed;
    left: 50%;
    top: 50%;
    z-index: 999999999999999999999;
    transform: translate(-50%, -50%);

  }
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

  .plan.plan_ultra:before {
    content: 'Best seller'!important;
    color: #fff!important;
    background: #FE7062!important;
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
    .plan.plan_ultra:before {
      top: 15px!important;
      right: 15px!important;
    }
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
      if (e.target.closest('.plan__summary') && window.innerWidth > 768) {
        gaEvent(
          'Buy ' +
            e.target.closest('.plan').querySelector('.plan__title').innerText +
            ' DNA Test Bottom CTA click'
        );
      } else {
        gaEvent(
          'Buy ' +
            e.target.closest('.plan').querySelector('.plan__title').innerText +
            ' DNA Test CTA click'
        );
      }

      document.querySelector('.shoppingCart').click();
      addPreloader();
    }
  });

  setTimeout(observerView, 1000);
}

function observerView() {
  const observerOptions = {
    root: null,
    threshold: 0,
    rootMargin: '-20%',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // console.log(entry);
      if (entry.isIntersecting) {
        if (entry.target.closest('.plan__summary') && window.innerWidth > 768) {
          gaEvent(
            'Buy ' +
              entry.target.closest('.plan').querySelector('.plan__title')
                .innerText +
              ' DNA Test Bottom CTA visibility'
          );

          observer.unobserve(entry.target);
        } else {
          gaEvent(
            'Buy ' +
              entry.target.closest('.plan').querySelector('.plan__title')
                .innerText +
              ' DNA Test CTA visibility'
          );

          observer.unobserve(entry.target);
        }
      }
    });
  }, observerOptions);

  for (let section of Array.from(document.querySelectorAll('.plan__btn'))) {
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

function addPreloader() {
  document.body.classList.add('lav-preloader');
  document
    .querySelector('#__nuxt')
    .insertAdjacentHTML(
      'beforebegin',
      '<div class="lds-roller lav-prel"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>'
    );
}
