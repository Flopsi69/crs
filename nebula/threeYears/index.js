console.log('initExp');

/********* Settings **********/
const settings = {
  dir: 'https://flopsi69.github.io/crs/nebula/threeYears',
  clarity: false,
  observe: true,
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
  let type = 'Desktop';
  if (window.innerWidth < 768) {
    type = 'Mobile';
  }

  if (!label) {
    label = '';
  }
  try {
    var objData = {
      event: 'event-to-ga',
      eventCategory: 'Exp: Lifetime 3 years copy. ' + type,
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
  .lav-brief {
    position: relative;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .lav-brief-toggle {
    font-family: SpaceGrotesk-Bold;
    // position: absolute;
    right: 0;
    bottom: 0;
    background-color: #fff;
    font-weight: 700;
    font-size: 14px;
    line-height: 140%;
    color: #3F4CEC;
    cursor: pointer;
    white-space: nowrap;
    background-color: #fff;
    display: inline-block;
  }
  .lav-brief-toggle:hover {
    text-decoration: underline;
  }
  .subscr__descr, .order__info-list {
    max-width: 350px;
  }
  .lav-plan-tip {
    position: relative;
    text-align: left;
    top: -5px;
    flex-shrink: 0;
  }
  .lav-plan-tip-info {
    opacity: 0;
    pointer-events: none;
    position: absolute;
    width: 355px;
    z-index: 50;
    transform: translate(-50%,-100%);
    top: -10px;
    left: -70px;
    right: 0;
    margin: auto;
    background: #fff;
    border-radius: 5px;
    font-size: 16px;
    line-height: 140%;
    color: #505985;
    transition: .3s;
    padding: 20px;
    -webkit-filter: drop-shadow(0 0 12px rgba(0,0,0,.08));
    filter: drop-shadow(0 0 12px rgba(0,0,0,.08));
  }
  .lav-plan-tip-info:before {
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    left: 0;
    bottom: 0;
    margin: auto;
    right: 0;
    transform: translateY(50%) translateX(75px) rotate(45deg);
    background: #fff;
  }
  .lav-plan-tip__descr {
    font-size: 14px;
    line-height: 140%;
    color: #505985;
  }
  .lav-plan-tip__descr a {
    text-decoration: underline;
    cursor: pointer;
    color: #505985;
  }
  .lav-plan-tip__info-inner {
    position: absolute;
    left: -20px;
    right: -20px;
    top: -20px;
    bottom: -30px;
    z-index: -1;
  }
  .lav-plan-tip__title {
    font-family: SpaceGrotesk-Bold;
    margin-bottom: 10px;
    font-size: 24px;
    line-height: 130%;
    color: #0b0f41;
  }
  .lav-plan-tip__info span {
    text-decoration: underline;
    transition: .3s;
    cursor: pointer;
  }
  .lav-plan-tip:hover .lav-plan-tip-info {
    opacity: 1;
    pointer-events: auto;
  }
 .lav-append-text a {
    white-space: nowrap;
    color: inherit;
    border-bottom: 1px solid #505985;
    cursor: pointer;
    transition: .3s;
    cursor: pointer;
 }
 .lav-append-text a:hover {
   border-color: transparent;
   text-decoration: none;
 }
  @media(max-width: 768px) {
    .lav-plan-tip-info {
      width: 320px;
      left: -50px
    }
    .subscr__info, .order__info {
      text-align: left!important;
    }
    .lav-plan-tip-info:before {
      transform: translateY(50%) translateX(55px) rotate(45deg);
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
  gaEvent('loaded');

  setInterval(initTips, 100);

  if (location.href.includes('/whole-genome-sequencing-dna-test/')) {
    initHomepage();
  } else if (location.href.includes('/cart')) {
    initCheckout();
  }

  document.addEventListener('click', function (e) {
    if (e.target.closest('.lav-append-text')) {
      gaEvent('Click on Refund Policy. Checkout');
    }
    if (e.target.closest('.lav-plan-tip__descr')) {
      gaEvent('Click on Refund Policy. Homepage');
    }
  });
}

function initHomepage() {
  // plan__option-value_tip
}

function initTips() {
  let elTip = `
    <span class="plan-tip lav-plan-tip">
      <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxMCAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUgMEMyLjI0IDAgMCAyLjI0IDAgNUMwIDcuNzYgMi4yNCAxMCA1IDEwQzcuNzYgMTAgMTAgNy43NiAxMCA1QzEwIDIuMjQgNy43NiAwIDUgMFpNNS41IDguNUg0LjVWNy41SDUuNVY4LjVaTTYuNTM1IDQuNjI1TDYuMDg1IDUuMDg1QzUuNzI1IDUuNDUgNS41IDUuNzUgNS41IDYuNUg0LjVWNi4yNUM0LjUgNS43IDQuNzI1IDUuMiA1LjA4NSA0LjgzNUw1LjcwNSA0LjIwNUM1Ljg5IDQuMDI1IDYgMy43NzUgNiAzLjVDNiAyLjk1IDUuNTUgMi41IDUgMi41QzQuNDUgMi41IDQgMi45NSA0IDMuNUgzQzMgMi4zOTUgMy44OTUgMS41IDUgMS41QzYuMTA1IDEuNSA3IDIuMzk1IDcgMy41QzcgMy45NCA2LjgyIDQuMzQgNi41MzUgNC42MjVaIiBmaWxsPSIjNTA1OTg1Ii8+Cjwvc3ZnPgo=">
      <div class="plan-tip__info lav-plan-tip-info">
        <div class="plan-tip__info-inner lav-plan-tip__info-inner"></div>
        <div class="plan-tip__title lav-plan-tip__title"> Nebula Explore™ Reporting Membership </div>
        <div class="plan-tip__descr lav-plan-tip__descr">
          <p>
            Lifetime access to your personalized reports and exploration tools .
          </p>
         <p>
          Receive continuous updates to your genomics report for 3 years, and $19.99/year thereafter. Cancel auto-renewal anytime. <a href='https://nebulagenomics.zendesk.com/hc/en-us/articles/360028257612-Refund-Policy-' target="_blank">Refund policy</a>
         </p>
         </div>
      </div>
    </span>
  `;

  if (location.href.includes('whole-genome-sequencing-dna-test')) {
    for (let item of document.querySelectorAll(
      '.plan__options .plan__option:nth-child(14)'
    )) {
      if (
        item.innerText.includes('Lifetime membership included') &&
        !item.querySelector('.lav-plan-tip')
      ) {
        item
          .querySelector('.plan__option-value')
          .insertAdjacentHTML('beforeend', elTip);

        item
          .querySelector('.lav-plan-tip')
          .addEventListener('mouseenter', function () {
            gaEvent('Hover on tooltip Lifetime plan');
          });
      } else if (
        !item.innerText.includes('Lifetime membership included') &&
        item.querySelector('.lav-plan-tip')
      ) {
        item.querySelector('.lav-plan-tip').remove();
      }
    }
  } else if (location.href.includes('/cart')) {
    let checkoutText =
      '<div class="lav-append-text"></br>Receive continuous updates to your genomics report for 3 years, and $19.99/year thereafter. Cancel auto-renewal anytime. <a href="https://nebulagenomics.zendesk.com/hc/en-us/articles/360028257612-Refund-Policy-" target="_blank">Refund policy</a></div>';

    for (let item of document.querySelectorAll('.order__wrap')) {
      let descrEl = item.querySelector('.subscr__descr');
      if (
        descrEl.innerText.includes('Lifetime access to your') &&
        !descrEl.innerText.includes('Receive continuous')
      ) {
        descrEl.insertAdjacentHTML('beforeend', checkoutText);
      } else if (
        !descrEl.innerText.includes('Lifetime access to your') &&
        item.querySelector('.lav-append-text')
      ) {
        item.querySelector('.lav-append-text').remove();
      }
    }
  }
}

function initCheckout() {
  for (let item of document.querySelectorAll('.subscr__descr')) {
    item.classList.add('lav-brief');
    item.insertAdjacentHTML(
      'afterend',
      '<div class="lav-brief-toggle">See more</div>'
    );

    item.nextElementSibling.addEventListener('click', function () {
      item.classList.remove('lav-brief');
      gaEvent('Click on "See more". Subscription Description');
      item.nextElementSibling.remove();
    });
  }

  for (let item of document.querySelectorAll('.order__info-list')) {
    item.classList.add('lav-brief');
    item.insertAdjacentHTML(
      'afterend',
      '<div class="lav-brief-toggle">See more</div>'
    );
    item.nextElementSibling.addEventListener('click', function () {
      item.classList.remove('lav-brief');
      gaEvent('Click on "See more". Product Description');
      item.nextElementSibling.remove();
    });
  }
}
