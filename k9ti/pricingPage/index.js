console.log('initExp');

/********* Settings **********/
const settings = {
  dir: 'https://flopsi69.github.io/crs/k9ti/pricingPage',
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

// Styles
const styles = `
  .payment_inform_box p.subtitle_text {
    text-transform: uppercase;
  }

  .reviews_box li p {
    color: #525252!important;
  }

  .reviews_box li p:not(:first-child) {
    font-style: normal;
    line-height: 1.5;
  }

  .lav__choose p.lav__choose-title {
    margin-bottom: 40px;
  }
  .lav__choose-table {
    display: flex;
    padding: 0!important;
    border: 0!important;
  }

  .lav__variant {
    padding: 12px 16px;
    text-align: center;
    flex-grow: 1;
    width: 33%;
    display: flex;
    flex-flow: column;
    cursor: pointer;
    transition: 0.35s;
    border: 1px solid #DFE8F0;
  }
  .lav__variant.active {
    position: relative;
    z-index: 1;
    background: #F9FCFF;
    border-color: #1D3871;
  }
  .lav__variant:first-child {
    border-radius: 10px 0px 0px 10px;
  }
  .lav__variant:last-child {
    border-radius: 0px 10px 10px 0px;
  }
  .lav__variant:nth-child(2) {
    position: relative;
  }
  .lav__variant:nth-child(2):before {
    content: 'Best value';
    background: #1D3871;
    border-radius: 5px 5px 0px 0px;
    position: absolute;
    top: 0;
    transform: translateY(-100%);
    left: -1px;
    right: -1px;
    padding: 2px 8px;
    font-weight: 600;
    font-size: 10px;
    line-height: 14px;
    letter-spacing: -0.01em;
    text-transform: uppercase;
    color: #fff;
  }
  .lav__variant-title {
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
    letter-spacing: -0.01em;
    text-transform: uppercase;
    color: #794E15;
  }
  .lav__variant-info {
    display: flex;
    flex-grow: 1;
    flex-flow: column;
    justify-content: space-between;
    border-top: 1px solid #DFE8F0;
    border-bottom: 1px solid #DFE8F0;
    margin-top: 4px;
    margin-bottom: 8px;
    padding-top: 12px;
  }
  .lav__variant-descr {
    font-size: 14px;
    line-height: 23px;
    color: #1D3871;
  }
  .lav__variant-descr span {
    font-weight: bold;
  }
  .lav__variant-descr {
  }
  .lav__variant-view {
    font-size: 14px;
    line-height: 23px;
    text-align: center;
    text-decoration-line: underline;
    color: #1D3871;
    padding: 12px 0;
  }
  .lav__variant-price-inner {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
  }
  .lav__variant-price-old {
    font-size: 14px;
    line-height: 21px;
    text-decoration-line: line-through;
    color: #525252;
    margin-right: 5px;
  }
  .lav__variant-price-new {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #1D3871;
  }
  .lav__variant-price-caption {
    margin-top: 8px;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5;
    color: #1D3871;
  }
  .lav__variant-price {
    position: relative;
    padding-bottom: 32px;
  }
  .lav__variant-price:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    bottom: 0;
    border: 2px solid #525252;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    transition: 0.35s;
  }
  .lav__variant.active .lav__variant-price:before {
    border-color: #1D3871;
  }
  .lav__variant-price:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    bottom: 5px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #1D3871;
    opacity: 0;
    transition: 0.35s;
  }
  .lav__variant.active .lav__variant-price:after {
    opacity: 1;
  }

  .lav-tip {
    position: relative;
  }
  .lav-tip__body {
    position: absolute;
    z-index: 99;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 8px;
    box-shadow: 0px 2px 6px 2px rgba(0, 0, 0, 0.15);
    filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2));
    width: 335px;
    padding: 16px;
    text-align: left;
  }
  .lav-tip__item {
    position: relative;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #1D3871;
    padding-left: 32px;
  }
  .lav-tip__item:before {
    content: '';
    position: absolute;
    left: 0;
    top: 4px;
    width: 24px;
    height: 24px;
    background: url('${settings.dir}/img/paw.svg') center no-repeat;
    background-size: contain;
  }
  .lav-tip__item + .lav-tip__item {
    margin-top: 12px;
  }
  .lav-tip__item span {
    font-weight: bold;
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

  initPaymentPlan();
}

function initPaymentPlan() {
  let el = `
    <li class='lav__choose'>
      <p class="subtitle_text lav__choose-title">Choose your plan</p>
      <div class='lav__choose-table'>
        <div class='lav__variant'>
          <div class='lav__variant-title'>Basic</div>
          <div class='lav__variant-info'>
            <div class='lav__variant-descr'>Lifetime access to <span>Masterclass</span></div>
            <div class='lav__variant-view lav-tip'>
              view full info
              <div class='lav-tip__body'>
                <div class='lav-tip__item'>Lifetime access to <span>Total Transformation Masterclass + 3 bonus classes</span></div>
                <div class='lav-tip__item'>10-week access to an updated library of <span>past weekly Q&A call recordings</span></div>
              </div>
            </div>
          </div>
          <div class='lav__variant-price'>
            <div class='lav__variant-price-inner'>
              <div class='lav__variant-price-old'>$497</div>
              <div class='lav__variant-price-new'>$297</div>
            </div>
            <div class='lav__variant-price-caption'>or $99/month for&nbsp;3&nbsp;months</div>
          </div>
        </div>

        <div class='lav__variant active'>
          <div class='lav__variant-title'>Premium</div>
          <div class='lav__variant-info'>
            <div class='lav__variant-descr'>Lifetime access to <span>Masterclass</span><br/>+<br/><span>10 weeks</span> of personalized <span>coaching & support</span></div>
            
            <div class='lav__variant-view'>view full info</div>
          </div>
          <div class='lav__variant-price'>
            <div class='lav__variant-price-inner'>
              <div class='lav__variant-price-old'>$587</div>
              <div class='lav__variant-price-new'>$387</div>
            </div>
            <div class='lav__variant-price-caption'>or $129/month for&nbsp;3&nbsp;months</div>
          </div>
        </div>

        <div class='lav__variant'>
          <div class='lav__variant-title'>Delux</div>
          <div class='lav__variant-info'>
          <div class='lav__variant-descr'>Lifetime access to <span>Masterclass</span><br/>+<br/><span>1 year</span> of personalized <span>coaching & support</span></div>
            <div class='lav__variant-view'>view full info</div>
          </div>
          <div class='lav__variant-price'>
            <div class='lav__variant-price-inner'>
              <div class='lav__variant-price-old'>$887</div>
              <div class='lav__variant-price-new'>$687</div>
            </div>
            <div class='lav__variant-price-caption'>or $229/month for&nbsp;3&nbsp;months</div>
          </div>
        </div>
      </div>
    </li>
  `;

  document
    .querySelector('#payment_inform_wrapp_id')
    .insertAdjacentHTML('afterend', el);

  for (let item of document.querySelectorAll('.lav__variant ')) {
    item.addEventListener('click', function (e) {
      console.log(e.target);
      e.preventDefault();

      if (e.target.classList.contains('lav__variant-view')) {
        return false;
      }

      if (item.classList.contains('active')) return false;

      if (document.querySelector('.lav__variant.active')) {
        document
          .querySelector('.lav__variant.active')
          .classList.remove('active');
      }

      item.classList.add('active');
    });
  }
}
