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
  .css-1gs8fg8 .summary-table .sum-row.total.coupon .caption,
  .css-1gs8fg8 .summary-table .sum-row.total.coupon .total, 
  .css-x4jdip .box .wrapper .total {
    color: #FC4D38;
  }

  .css-xf71d4 .text-green {
    color: #FC4D38 !important;
  }

  .subscribe-all *:not(.test),
  .action .subscribe {
    display: none !important;
  }

  p.test {
    margin-bottom: 0;
    text-decoration: underline;
    color: #3856A7;
    font-size: 12px;
  }

  .tm-text {
    color: #3856A7 !important;
    font-size: 12px !important;
    font-weight: 700;
    text-decoration: underline;
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
  document
    .querySelector('.subscribe-all')
    .insertAdjacentHTML(
      'afterbegin',
      `<p class="test">Why subscribing is better?</p>`
    );
  document.querySelector('.tm-text').innerText = 'How to cancel subscription?';

  let inputEvent = new Event('input');

  document.querySelector('.select__input').dispatchEvent(inputEvent);
}
