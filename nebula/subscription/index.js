console.log('initExp');

/********* Settings **********/
const settings = {
  dir: 'https://flopsi69.github.io/crs/nebula/subscription',
  hj: false,
  observe: false,
};

// Alalytic
function gaEvent(action, label) {
  if (!label) {
    label = '';
  }
  try {
    var objData = {
      event: 'event-to-ga',
      eventCategory: 'Exp: New pricing strategy',
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
  @media (min-width: 992px) and (max-width: 1430px) {
    .plan__subscr-val {
      display: block!important;
    }
    .plan__subscr-val span {
      display: block!important;
    }
    .plan__subscr-val span:first-child {
      margin-bottom: 5px;
    }
    .plan__summary {
      padding-left: 15px!important;
      padding-right: 15px!important;
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
  (function (h, o, t, j, a, r) {
    h.hj =
      h.hj ||
      function () {
        (h.hj.q = h.hj.q || []).push(arguments);
      };
    h._hjSettings = { hjid: 1209457, hjsv: 6 };
    a = o.getElementsByTagName('head')[0];
    r = o.createElement('script');
    r.async = 1;
    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
    a.appendChild(r);
  })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
  hj('event', 'new_pricing');

  gaEvent('loaded');

  if (location.href.includes('/whole-genome-sequencing-dna-test')) {
    initMainPage();
  } else if (location.href.includes('portal.nebula.org/cart')) {
    initCartPage();
  } else if (
    location.href.includes('nebula.org/order-status') &&
    localStorage.getItem('gaPlans')
  ) {
    JSON.parse(localStorage.getItem('gaPlans')).forEach((planName) => {
      gaEvent('buy subcription plan', planName);
    });
    localStorage.removeItem('gaPlans');
  }
}

function initMainPage() {
  var mainInterval = setInterval(() => {
    if (document.querySelector('.plans__wrap')) {
      clearInterval(mainInterval);
      document.querySelector('.plans__wrap').remove();
      document.querySelector('.plans__wrap').style.display = 'block';

      for (let item of document.querySelectorAll(
        '.plan__subscr-list .plan__subscr-item:last-child'
      )) {
        console.log(item.click());
      }

      document
        .querySelector('.plans .plans__caption span')
        .addEventListener('click', function () {
          gaEvent('click on link', 'Nebula Explore™ Reporting Membership link');
        });

      for (let item of document.querySelectorAll('.plan__descr span')) {
        item.addEventListener('click', function () {
          gaEvent('click on link', 'Nebula Explore™ Reporting Membership link');
        });
      }

      for (let item of document.querySelectorAll('.plan__details')) {
        item.addEventListener('click', function () {
          gaEvent('click on block', 'More details under CTA selected');
        });
      }

      if (false && window.innerWidth > 992) {
        for (let item of document.querySelectorAll('.plan_basic .plan__btn')) {
          item.addEventListener('click', function () {
            gaEvent('click on CTA', 'Buy Standard DNA Bundle');
          });
        }

        for (let item of document.querySelectorAll('.plan_best .plan__btn')) {
          item.addEventListener('click', function () {
            gaEvent('click on CTA', 'Buy Deep DNA Bundle');
          });
        }

        for (let item of document.querySelectorAll('.plan_ultra .plan__btn')) {
          item.addEventListener('click', function () {
            gaEvent('click on CTA', 'Buy UltraDeep DNA Bundle');
          });
        }
      }

      document.addEventListener('click', function (e) {
        if (e.target.classList.contains('plan__option_modal')) {
          gaEvent('click on link', 'Nebula Membership info');
        }

        // if (window.innerWidth < 992) {
        if (
          e.target.classList.contains('plan__btn') ||
          e.target.closest('.plan__btn')
        ) {
          if (e.target.closest('.plan_basic ')) {
            gaEvent('click on CTA', 'Buy Standard DNA Bundle');
          }

          if (e.target.closest('.plan_best')) {
            gaEvent('click on CTA', 'Buy Deep DNA Bundle');
          }

          if (e.target.closest('.plan_ultra ')) {
            gaEvent('click on CTA', 'Buy UltraDeep DNA Bundle');
          }
        }
        // }

        if (e.target.closest('.plan-tip')) {
          if (
            e.target.classList.contains('plan-tip__info-inner') &&
            window.innerWidth <= 992
          ) {
            gaEvent('click on link', 'Membership info link clicked');
          }
          if (
            e.target.closest('.plan-tip__descr') &&
            e.target.tagName == 'SPAN'
          )
            gaEvent('click on link', 'Return policy on tooltip');
        }
      });

      for (let item of document.querySelectorAll('.plan__subscr-item')) {
        item.addEventListener('click', function () {
          gaEvent('subscription selected', item.innerText.split(' ')[0]);
        });
      }

      document
        .querySelector('.infoblock__descr-btn')
        .addEventListener('click', function () {
          gaEvent('click on CTA', 'Learn more (subscription) CTA');
        });

      if (window.innerWidth > 992) {
        for (let item of document.querySelectorAll('.plan__option-value_tip')) {
          item.addEventListener('mouseover', function (e) {
            if (
              e.target.classList.contains('plan-tip') ||
              (e.target.nextElementSibling &&
                e.target.nextElementSibling.classList.contains(
                  'plan-tip__info'
                ))
            ) {
              gaEvent('click on link', 'Membership info link clicked');
            }
          });
        }
      }

      document
        .querySelector('.modal__close')
        .addEventListener('click', function () {
          gaEvent('pop-up closed', 'Membership info pop up closed');
        });
    }
  }, 500);
}

function initCartPage() {
  var cartInterval = setInterval(() => {
    if (document.querySelector('.order-summary-page')) {
      clearInterval(cartInterval);

      if (
        document.querySelector('.order-summary-page').querySelectorAll('.order')
          .length
      ) {
        let cartItems = [];
        for (let item of document
          .querySelector('.order-summary-page')
          .querySelectorAll('.order')) {
          cartItems.push(item.querySelector('.order__title').innerText);
        }
        localStorage.setItem('gaPlans', JSON.stringify(cartItems));
      }

      document.querySelector('.order-summary-page').remove();
      document.querySelector('.order-summary-page').style.display = 'block';

      for (let item of document.querySelectorAll('.order__remove')) {
        item.addEventListener('click', function () {
          gaEvent('item removed', 'Item removed from checkout');
        });
      }

      for (let item of document.querySelectorAll('.order__quantity-btn')) {
        item.addEventListener('click', function () {
          gaEvent('quantity changed', 'Item quantity changed on checkout');
        });
      }

      for (let item of document.querySelectorAll('.plans__item')) {
        item.addEventListener('click', function () {
          gaEvent('subscription changed', 'Subscription changed on checkout');
        });
      }
    }
  }, 500);
}
