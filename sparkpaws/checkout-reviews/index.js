console.log('initExp');

/********* Settings **********/
const settings = {
  dir: 'https://flopsi69.github.io/crs/sparkpaws/checkout-reviews',
  clarity: false,
  observe: false,
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
  .lav-benefits {
    color: #5C5555;
  }
  .lav-benefit + .lav-benefit {
    border-top: 1px solid #E7E7E7;
  }
  .lav-benefit {
    padding: 12px 0;
  }
  .lav-benefit__title {
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
  }
  .lav-benefit__caption {
    margin-top: 4px;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
  }
  .lav-benefit {}
  .lav-benefit {}
  .lav-benefit {}
`;

const stylesEl = document.createElement('style');
stylesEl.innerHTML = styles;
document.body.appendChild(stylesEl);
/*** STYLES / end ***/

/********* Custom Code **********/
init();
function init() {
  console.log('init');
  initBenefits();
}

function initBenefits() {
  let el = `
    <div class='lav-benefits'>
      <div class='lav-benefit'>
        <div class='lav-benefit__icon'>
          <img src="${settings.dir}/img/benefit1.svg" />
        </div>
        <div class='lav-benefit__info'>
          <div class='lav-benefit__title'>30 Day Return & Exchange</div>
          <div class='lav-benefit__caption'>You may return or exchange purchased items within 30 days, hassle free</div>
        </div>
      </div>

      <div class='lav-benefit'>
        <div class='lav-benefit__icon'>
          <img src="${settings.dir}/img/benefit2.svg" />
        </div>
        <div class='lav-benefit__info'>
          <div class='lav-benefit__title'>Full Coverage Shipping Worldwide</div>
          <div class='lav-benefit__caption'>We will replace your package for FREE if it gets lost during shipping</div>
        </div>
      </div>

      <div class='lav-benefit'>
        <div class='lav-benefit__icon'>
          <img src="${settings.dir}/img/benefit3.svg" />
        </div>
        <div class='lav-benefit__info'>
          <div class='lav-benefit__title'>Premium Quality & Safety Tested</div>
          <div class='lav-benefit__caption'>All of our products are premium quality and tested under strict standards</div>
        </div>
      </div>
    </div>
  `;
}
