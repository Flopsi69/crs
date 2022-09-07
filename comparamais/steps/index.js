console.log('initExp');

/********* Settings **********/
const settings = {
  dir: 'https://flopsi69.github.io/crs/comparamais/steps',
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
  .container--hero .page__title {
    display: none;
  }

  .container--hero {
    padding-bottom: 75px;
  }

  .lav-intro {
    display: grid;
    grid-template-columns: 1fr 1fr
    gap: 40px;
  }
  .lav-container {
    max-width: 1128px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  .lav-info {
    margin-top: 100px;
    // align-self: center;
    // width: 580px;
  }
  .lav-info__title {
    font-weight: 700;
    font-size: 48px;
    line-height: 56px;
    color: #229F55;
  }
  .lav-info__caption {
    font-weight: 500;
    font-size: 27px;
    line-height: 32px;
    color: #1F1F1F;
    margin-top: 8px;
  }
  .lav-info__review {
    display: inline-flex;
    align-items: center;
    margin-top: 28px;
    cursor: pointer;
  }
  .review__star {
    display: flex;
    align-items: center;
    margin: 0 7px;
  }
  .review__star img {
    margin-top: -2px;
  }
  .review__count {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #0071EB;
  }
  .review__star span {
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    color: #1F1F1F;
    margin-left: 4px;
  }
  .lav-info__list {
    margin-top: 45px;
  }
  .lav-info__item {
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 40px;
    min-height: 28px;
  }
  .lav-info__item + .lav-info__item {
    margin-top: 20px;
  }
  .lav-info__item:before {
    content: '';
    position: absolute;
    width: 28px;
    height: 28px;
    left: 0;
    top: 0;
    background: url(${settings.dir}/img/green-arrow.svg) center no-repeat;
    background-size: contain;
  }

  .lav-preloader {
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    color: #262626;
    margin-top: 40px;
  }

  .lav-preloader__item {
    position: relative;
    padding-left: 30px;
    transition: 0.3s;
    opacity: 0;
  }

  .lav-preloader__item:before {
    content: '';
    position: absolute;
    left: 0;
    top: 6px;
    transform-origin: center;
    line-height: 0;
    width: 14px;
    height: 14px;
    background: url(${settings.dir}/img/load.svg) center no-repeat;
    background-size: contain;
  }

  .lav-preloader__item.active, .lav-preloader__item.finish {
    opacity: 1;
  }

  @-webkit-keyframes infinite-spinning {
    from {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes infinite-spinning {
    from {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  .lav-preloader__item.active:before {
    -webkit-animation: infinite-spinning 2s infinite linear;
    animation: infinite-spinning 2s infinite linear;
  }

  .lav-preloader__item.finish:before {
    background: url(${settings.dir}/img/green-check.svg) center no-repeat;
    background-size: contain;
  }

  .lav-preloader__item + .lav-preloader__item {
    margin-top: 16px;
  }

  .lav-final {
    // display: none;
  }

  .lav-final.active {
    display: block;
  }

  .lav-final__group {
    margin-top: 28px;
  }

  .lav-final__group-wrap {
    margin-bottom: 40px;
  }

  .lav-final__check {
    position: relative;
    display: block;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #1F1F1F;
    padding-left: 32px;
    min-height: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .lav-final__check:before, .lav-final__check.active:after  {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    background: #FFFFFF;
    border: 1px solid #E6E7E7;
    border-radius: 4px;
    width: 20px;
    height: 20px;
  }

  .lav-final__check.active:after {
    background: url('${settings.dir}/img/check.svg') center no-repeat;
    background-size: cover;
    border-color: #0071EB;
  }

  .lav-final__check a {
    color: #0071EB;
    transition: 0.35s;
    cursor: pointer;
  }

  .lav-final__check a:hover {
    opacity: 0.6;
  }

  .lav-final__check + .lav-final__check  {
    margin-top: 16px;
  }

  .lav-report {
    display: flex;
    text-align: center;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 0 -15px 40px;
  }

  .lav-report__item {
    margin: 28px 15px 0;
  }

  // .lav-report__item:nth-child(3n+1) {
  //   width: 160px;
  // }

  // .lav-report__item:nth-child(3n+2) {
  //   width: 100px;
  // }

  // .lav-report__item:nth-child(3n+3) {
  //   width: 145px;
  // }

  .lav-report__key {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #1F1F1F;
  }

  .lav-report__value {
    font-weight: 700;
    font-size: 22px;
    line-height: 30px;
    color: #229F55;
    margin-top: 8px;
  }

  .lav-step__title-final {
    font-weight: 700;
    font-size: 24px;
    line-height: 26px;
    color: #1F1F1F;
    margin-top: 8px;
  }

  .lav-step__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .lav-step__back {
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    color: #0071EB;
    transition: 0.35s;
  }
  .lav-step__back img {
    margin-right: 7px;
    transition: 0.35s;
  }
  .lav-step__back.disabled {
    color: #9F9F9F;
    pointer-events: none;
  }
  .lav-step__back.disabled img {
    filter: grayscale(100%);
  }
  .lav-step__num {
    color: #1F1F1F;
    font-weight: 700;
    font-size: 14px;
    line-height: 14px;
    white-space: nowrap;
    letter-spacing: 1.5px;
  }
  .lav-step__num span {
    color: #229F55;
    font-size: 18px;
    line-height: 18px;
  }
  .lav-step__title {
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
  }
  .lav-step__radio {
    position: relative;
    display: flex;
    align-items: center;
    margin-top: 16px;
    background: #F9F9F9;
    border: 1px solid #E6E7E7;
    border-radius: 8px;
    min-height: 58px;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #1F1F1F;
    padding: 16px;
    padding-left: 56px;
    transition: 0.35s;
    cursor: pointer;
  }
  .lav-step__radio-list {
    margin-bottom: 40px;
  }
  .lav-step__radio:not(.active):hover {
    opacity: 0.6;
  }
  .lav-step__radio.active {
    border: 1px solid #0071EB;
  }
  .lav-step__radio:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 16px;
    width: 24px;
    height: 24px;
    transform: translateY(-50%);
    border-radius: 50px;
    border: 1px solid #1F1F1F;
    background-color: #fff;
  }

  .lav-step__radio.active:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 20px;
    width: 16px;
    height: 16px;
    transform: translateY(-50%);
    border-radius: 50px;
    background-color: #0071EB;
  }

  .lav-step + .lav-step {
    margin-top: 20px;
  }

  .lav-step__caption {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #474A48;
    margin-top: 28px;
    margin-bottom: 40px;
  }

  .lav-step .lav-input {
    background: #F9F9F9;
    border: 1px solid #E6E7E7;
    border-radius: 8px;
    height: 52px;
    font-weight: 700;
    font-size: 16px;
    line-height: 26px;
    color: #1F1F1F;
    padding: 12px 20px;
    width: 100%;
  }

  .lav-final__group .lav-input {
    margin-top: 10px;
    font-weight: 400;
    padding-left: 10px;
    padding-right: 10px;
  }

  .lav-step__salary {
    position: relative;
    margin-top: 16px;
  }
  
  .lav-step__salary input {
    padding-right: 40px;
  }

  .container--hero .page__simulator {
    width: 48%;
  }

  .lav-step__salary:after {
    content: '€';
    position: absolute;
    right: 13px;
    top: 50%;
    transform: translateY(-50%);
    font-weight: 400;
    font-size: 26px;
    line-height: 26px;
    color: #9F9F9F;
  }

  .lav-step__next {
    background: #0071EB;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2), 0px 2px 6px 2px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    font-weight: 700;
    font-size: 16px;
    line-height: 26px;
    height: 48px;
    width: 100%;
    border: none;
    color: #fff;
    cursor: pointer;
    outline: none;
    margin-top: auto;
    transition: 0.35s;
  }

  .lav-step__next.disabled {
    pointer-events: none;
    filter: grayscale(100%);
  }

  .lav-step__next:hover {
    background-color: #0056b3;
  }

  .page__simulator .capture-overlay {
    opacity: 0.4;
  }

  .lav-step {
    display: flex;
    // display: none;
    flex-flow: column;
    padding: 56px;
    background: #FFFFFF;
    box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3);
    border-radius: 24px;
    border: none;
    min-height: 474px;
  }

  .lav-step.active {
    display: flex;
  }

  .lav-step label {
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    color: #1F1F1F;
    margin-top: 0;
    padding-right: 0;
  }

  .lav-step .hls-simulator__amount-range {
    margin-bottom: -5px;
  }

  .lav-step .hls-simulator__field-box {
    background: #F9F9F9;
    border: 1px solid #E6E7E7;
    border-radius: 8px;
    margin-top: 8px;
  }

  .lav-step .hls-simulator__field-box input {
    box-shadow: none;
    font-weight: 700;
    font-size: 16px;
    line-height: 26px;
    color: #1F1F1F;
    padding: 13px 0 13px 5px;
  }

  .lav-step .hls-simulator__field-box--sm {
    margin-right: 10px;
    margin-left: 0;
  }

  .lav-step .hls-simulator__field-box span {
    border-left: 0;
    font-weight: 400;
    font-size: 26px;
    line-height: 26px;
    color: #9F9F9F;
  }

  .lav-step .hls-simulator__field-box--md span {
    font-size: 20px;
    padding-right: 15px;
    margin-top: -2px;
  }

  .lav-step .hls-simulator__form-group:not(:last-child) {
    margin-bottom: 28px;
  }

  .lav-step a.hls-simulator__button {
    margin-top: 40px;
  }

  .reviews__widget-container {
    display: none;
  }

  .filters {
    padding-right: 40px;
  }

  .hits__filters {
    border-radius: 0;
    box-shadow: none;
  }

  .refinement__list {
    padding: 0;
  }

  .lav-filter__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .lav-filter__head-title {
    font-weight: 500;
    font-size: 27px;
    line-height: 32px;
    color: #1F1F1F;
  }
  .lav-filter__head-reset {
    outline: none;
    background: none;
    transition: 0.35s;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: #0071EB;
    padding: 8px 16px;
    background: #FFFFFF;
    border: 1px solid #0071EB;
    border-radius: 8px;
    cursor: pointer;
  }
  .lav-filter__head-reset:hover {
    background-color: #0071EB;
    color: #fff;
  }

  .hits__filters__header, .filter-reset, .hits__filters__body {
    display: none;
  }

  .lav-sort {
    position: relative;
    margin: 32px 0;
  }

  .lav-sort__value {
    position: relative;
    background: #F9F9F9;
    border: 1px solid #E6E7E7;
    border-radius: 8px;
    padding: 8px 20px;
    padding-right: 35px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #1F1F1F;
    transition: 0.35s;
    cursor: pointer;
  }

  .lav-sort__value:hover {
    opacity: 0.7;
  }

  .lav-sort__value:after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    top: 50%;
    right: 15px;
    background: url('${settings.dir}/img/dropdown-chevron.svg') center no-repeat;
    background-size: contain;
    transition: 0.35s;
    transform: translateY(-50%) rotate(180deg);
  }

  .lav-sort.active .lav-sort__value:after {
    transform: translateY(-50%) rotate(0deg);
  }

  .lav-sort__dropdown {
    display: none;
    position: absolute;
    margin-top: 4px;
    z-index: 99;
    left: 0;
    right: 0;
    top: 100%;
    padding: 12px 20px;
    background: #FFFFFF;
    border: 1px solid #EEEEEE;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2), 0px 2px 6px 2px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    font-weight: 400;
    font-size: 14px;
    line-height: 26px;
    color: #1F1F1F;
  }

  .lav-sort.active .lav-sort__dropdown {
    display: block;
  }

  .lav-sort__item {
    transition: 0.35s;
    cursor: pointer;
  }

  .lav-sort__item:hover {
    opacity: 0.5;
  }

  .lav-sort__item.active {
    color: #0071EB;
    font-weight: 700;
  }

  .lav-sort__item + .lav-sort__item {
    margin-top: 8px;
  }

  .lav-filter__choosen {
    margin: 20px -4px 0;
    display: flex;
    flex-wrap: wrap;
  }

  .lav-filter__choosen-item {
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #1F1F1F;
    padding: 8px 12px;
    background: #FFFFFF;
    border: 1px solid #E6E7E7;
    border-radius: 100px;
    margin: 4px;
    transition: 0.35s;
    cursor: pointer;
  }

  .lav-filter__choosen-item:hover {
    opacity: 0.5;
  }

  .lav-filter__choosen-item img {
    margin-left: 7px;
    margin-top: 1px;
    width: 9px;
  }

  .lav-filter__body-title {
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    color: #1F1F1F;
  }

  .lav-filter__list {
    margin-top: 22px;
  }

  .lav-filter__item {
    position: relative;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #1F1F1F;
    padding-left: 33px;
    cursor: pointer;
    transition: 0.35s;
  }

  .lav-filter__item:hover {
    opacity: 0.65;
  }

  .lav-filter__item:before, .lav-filter__item:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 18px;
    height: 18px;
    border: 2px solid #1F1F1F;
    border-radius: 3px;
    transition: 0.35s;
  }
  .lav-filter__item.active:after {
    background: url('${settings.dir}/img/check.svg') center no-repeat;
    background-size: cover;
    border-color: #0071EB;
  }
  .lav-filter__item + .lav-filter__item {
    margin-top: 20px;
  }

  .card__product-details label {
    color: #0071EB;
  }

  a.hls-simulator__button {
    height: 48px;
    font-weight: 700;
    font-size: 16px;
    line-height: 48px;
    color: #FFFFFF;
  }
`;

let banks = [
  { name: 'ABanca', value: '', isActive: false },
  { name: 'ActivoBank', value: '', isActive: false },
  { name: 'Banco Best', value: '', isActive: false },
  { name: 'Bankinter', value: '', isActive: false },
  { name: 'BPI', value: '', isActive: false },
  { name: 'Caixa Agrícola', value: '', isActive: false },
  { name: 'CGD', value: '', isActive: false },
  { name: 'CTT', value: '', isActive: false },
  { name: 'Eurobic', value: '', isActive: false },
  { name: 'Millennium BCP', value: '', isActive: false },
  { name: 'Montepio', value: '', isActive: false },
  { name: 'Novo Banco', value: '', isActive: false },
  { name: 'Santander', value: '', isActive: false },
  { name: 'UCI - Unión de Créditos Inmobiliários', value: '', isActive: false },
];

const stylesEl = document.createElement('style');
stylesEl.innerHTML = styles;
document.body.appendChild(stylesEl);
/*** STYLES / end ***/

let introInfoEl = `
    <div class='lav-info'>
      <div class='lav-info__title'>Mortgage loans</div>
      <div class='lav-info__caption'>Compare and apply for the best home loan</div>
      <a href='https://www.reviews.co.uk/company-reviews/store/www-comparamais-pt?utm_source=www-comparamais-pt&utm_medium=widget&utm_campaign=text-banner' class='lav-info__review'>
        <img class='review__site' src='${settings.dir}/img/review.svg'>

        <div class='review__star'>
          <img src='${settings.dir}/img/star.svg'>

          <span>4.6</span>
        </div>

        <div class='review__count'></div>
      </a>
      <div class='lav-info__list'>
        <div class='lav-info__item'>Receive exclusive and personalized proposals from all banks</div>
        <div class='lav-info__item'>Compare all charges and approval criteria for your credit</div>
        <div class='lav-info__item'>Save thousands of euros with the lowest installments</div>
      </div>
    </div>
`;

let filtersEl = `
  <div class="lav-filter__head">
    <div class='lav-filter__head-title'>Filters</div>
    <button class='lav-filter__head-reset'>Reset filters</button>
  </div>

  <div class="lav-filter__choosen"></div>

  <div class="lav-sort">
    <div class="lav-sort__value">Sort by: <span>Featured</span></div>
    <div class="lav-sort__dropdown">
      <div class="lav-sort__item active">Featured</div>
      <div class="lav-sort__item">Monthly Installment</div>
      <div class="lav-sort__item">TAN</div>
      <div class="lav-sort__item">APR</div>
      <div class="lav-sort__item">Euribor 12M</div>
      <div class="lav-sort__item">Spread</div>
    </div>
  </div>

  <div class="lav-filter__body">
    <div class="lav-filter__body-title">Banks</div>
    <div class="lav-filter__list"></div>
  </div>
`;

let stepsEl = `
  <div class='lav-steps'>
    <div class='lav-step' data-step='1'>
      <div class='lav-step__head'>
        <div class='lav-step__back'><img src='${settings.dir}/img/back.svg'>Back</div>
        <div class='lav-step__num'><span>1</span>/4</div>
      </div>

      <div class='lav-step__title'>Nationality</div>

      <div class='lav-step__radio-list lav-nation'>
        <div class='lav-step__radio' data-idx='1'>Portugues</div>
        <div class='lav-step__radio' data-idx='2'>Permanent Resident</div>
        <div class='lav-step__radio' data-idx='3'>Temporary Resident</div>
        <div class='lav-step__radio' data-idx='4'>Non-Resident</div>
      </div>

      <button class='lav-step__next disabled'>Continue</button>
    </div>

    <div class='lav-step' data-step='2'>
      <div class='lav-step__head'>
        <div class='lav-step__back'><img src='${settings.dir}/img/back.svg'>Back</div>
        <div class='lav-step__num'><span>2</span>/4</div>
      </div>

      <div class='lav-step__title'>Work Situation</div>

      <div class='lav-step__radio-list lav-situation'>
        <div class='lav-step__radio' data-idx='1'>Effective</div>
        <div class='lav-step__radio' data-idx='2'>Own Account</div>
        <div class='lav-step__radio' data-idx='3'>Term Contract</div>
        <div class='lav-step__radio' data-idx='4'>Retired</div>
        <div class='lav-step__radio' data-idx='5'>Unemployed</div>
      </div>

      <button class='lav-step__next disabled'>Continue</button>
    </div>

    <div class='lav-step' data-step='3'>
      <div class='lav-step__head'>
        <div class='lav-step__back'><img src='${settings.dir}/img/back.svg'>Back</div>
        <div class='lav-step__num'><span>3</span>/4</div>
      </div>

      <div class='lav-step__title'>Net Sallary</div>

      <div class='lav-step__salary'>
        <input type='tel' placeholder='10,000' class='lav-input' />
      </div>

      <div class='lav-step__caption'>Please exclude child benefits and make sure that health insurance and debt payments are deducted from your gross income.</div>


      <button class='lav-step__next disabled'>Continue</button>
    </div>

    <div class='lav-step' data-step='4'>
      <div class='lav-step__head'>
        <div class='lav-step__back disabled'><img src='${settings.dir}/img/back.svg'>Back</div>
        <div class='lav-step__num'><span>4</span>/4</div>
      </div>

      <div class="lav-preloader">
        <div class="lav-preloader__item">Evaluating  your input</div>
        <div class="lav-preloader__item">Scanning the market</div>
        <div class="lav-preloader__item">Processing available mortgage offers</div>
        <div class="lav-preloader__item">Creating your personal mortgage report...</div>
      </div>

      <div class='lav-final'>
        <div class='lav-step__title-final'>Great! Your mortgage offer is ready!</div>

        <div class='lav-final__group-wrap'>
          <div class='lav-final__group'>
            <div class='lav-step__title'>Your name</div>
            <input type='text' class='lav-input' placeholder='John Doe' />
          </div>

          <div class='lav-final__group'>
            <div class='lav-step__title'>Leave your email to view the report</div>
            <input value='' type='text' class='lav-input' placeholder='forexample@gmail.com' />
          </div>

          <div class='lav-final__group'>
            <div class='lav-step__title'>Your name</div>
            <input type='text' class='lav-input' placeholder='+351 102 204 305' />
          </div>

          <div class='lav-final__group'>
            <div class='lav-final__check lav-terms'>
              I declare that I have read and accepted the <a href='https://www.comparamais.pt/termos-e-condicoes' target='_blank'>&nbsp;Terms and Conditions</a>.
            </div>
            <div class='lav-final__check lav-personal'>
              I consent to Comparamais processing my personal data for marketing purposes.
            </div>
          </div>
        </div>

        <button class='lav-step__next lav-show-report'>View the Report</button>
      </div>
    </div>

    <div class='lav-step' data-step='5'>
      <div class='lav-step__title-final'>Report</div>

      <div class='lav-report'></div>

      <button class='lav-step__next'>View Banks</button>
    </div>
  </div>
`;

/********* Custom Code **********/
let imaskScript = document.createElement('script');
imaskScript.src = 'https://unpkg.com/imask';
document.body.append(imaskScript);

init();
function init() {
  console.log('init');
  initTopInfo();
  initFilters();
  initSteps();

  document
    .querySelector('.lav-step .hls-simulator__button')
    .addEventListener('click', function (e) {
      e.preventDefault();
      document
        .querySelector('.lav-step[data-step="1"]')
        .classList.add('active');
    });
}

function initTopInfo() {
  document
    .querySelector('.page__title')
    .insertAdjacentHTML('beforebegin', introInfoEl);

  document
    .querySelector('.hls-simulator__form-group.hls--inline')
    .insertAdjacentElement(
      'afterbegin',
      document.querySelector(
        '.hls-simulator__field-box + .hls-simulator__field-box--sm'
      )
    );

  document
    .querySelector('.simulator-container')
    .classList.add('lav-step', 'active');

  document.querySelector('.review__count').innerHTML =
    '(' +
    document.querySelector('.reviews-score strong:last-child').innerText +
    ' Reviews)';

  for (let item of document.querySelectorAll(
    '.hls-simulator__amount-range span'
  )) {
    item.innerText = item.innerText + '€';
  }
}

function initFilters() {
  document
    .querySelector('.hits__filters__body')
    .insertAdjacentHTML('afterend', filtersEl);

  document
    .querySelector('.lav-filter__head-reset')
    .addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector('.filter-reset').click();
    });

  for (let bank of banks) {
    let el = document.createElement('div');
    el.innerText = bank.name;
    el.classList.add('lav-filter__item');
    if (bank.isActive) {
      el.classList.add('active');
    }

    el.addEventListener('click', function (e) {
      e.preventDefault();
      bank.isActive = bank.isActive ? false : true;
      el.classList.toggle('active');
      addChoosen();
    });

    document
      .querySelector('.lav-filter__list')
      .insertAdjacentElement('beforeend', el);
  }

  document
    .querySelector('.lav-sort__value')
    .addEventListener('click', function () {
      document.querySelector('.lav-sort').classList.toggle('active');
    });

  for (let item of document.querySelectorAll('.lav-sort__item')) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      if (item.classList.contains('active')) return false;

      document
        .querySelector('.lav-sort__item.active')
        .classList.remove('active');

      document.querySelector('.lav-sort').classList.remove('active');

      item.classList.add('active');

      document.querySelector('.lav-sort__value span').innerText =
        item.innerText;
    });
  }
}

function addChoosen() {
  document.querySelector('.lav-filter__choosen').innerHTML = '';
  for (let bank of banks) {
    if (bank.isActive) {
      let el = document.createElement('div');
      el.classList.add('lav-filter__choosen-item');
      el.innerHTML = `<span>${bank.name}</span><img src='${settings.dir}/img/close.svg'>`;

      document
        .querySelector('.lav-filter__choosen')
        .insertAdjacentElement('beforeend', el);

      el.addEventListener('click', function (e) {
        e.preventDefault();
        el.remove();
        bank.isActive = false;
        for (let item of document.querySelectorAll('.lav-filter__item')) {
          if (item.innerText == bank.name) item.classList.remove('active');
        }
      });
    }
  }
}

function initSteps() {
  document
    .querySelector('.page__simulator')
    .insertAdjacentHTML('beforeend', stepsEl);

  for (let item of document.querySelectorAll('.lav-final__check')) {
    item.addEventListener('click', function (e) {
      if (e.target.tagName != 'A') {
        e.preventDefault();
        item.classList.toggle('active');
        if (item.classList.contains('lav-terms')) {
          document.querySelector('#termsAgreement').click();
        } else if (item.classList.contains('lav-personal')) {
          document.querySelector('#communicationAgreement').click();
        }
      }
    });
  }

  for (let item of document.querySelectorAll('.lav-step__radio')) {
    item.addEventListener('click', function () {
      if (item.classList.contains('active')) return false;

      if (item.closest('.lav-step__radio-list').querySelector('.active')) {
        item
          .closest('.lav-step__radio-list')
          .querySelector('.active')
          .classList.remove('active');
      }
      item.classList.add('active');

      let idx = parseInt(item.dataset.idx) + 1;

      if (item.closest('.lav-nation')) {
        document.querySelector(
          '.page__simulator .capture-overlay .capture-form .form-group:nth-child(6) select'
        ).value = document.querySelector(
          `.page__simulator .capture-overlay .capture-form .form-group:nth-child(6) option:nth-child(${idx})`
        ).value;
      } else if (item.closest('.lav-situation')) {
        document.querySelector(
          '.page__simulator .capture-overlay .capture-form .form-group:nth-child(4) select'
        ).value = document.querySelector(
          `.page__simulator .capture-overlay .capture-form .form-group:nth-child(4) option:nth-child(${idx})`
        ).value;
      }

      document
        .querySelector('.lav-step.active .lav-step__next')
        .classList.remove('disabled');
    });
  }

  document
    .querySelector('.lav-show-report')
    .addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector('.lav-report').innerHTML = '';
      for (let item of document.querySelectorAll(
        '.page__simulator .capture-info__numbers tr'
      )) {
        let el = `
        <div class='lav-report__item'>
          <div class='lav-report__key'>
            ${item.querySelector('th').innerText}
          </div>
          <div class='lav-report__value'>
           ${item.querySelector('td').innerText}
          </div>
        </div>
      `;
        document
          .querySelector('.lav-report')
          .insertAdjacentHTML('beforeend', el);
      }
    });

  for (let item of document.querySelectorAll('.lav-step__next')) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      if (item.classList.contains('disabled')) return false;

      if (document.querySelector('.lav-step.active').dataset.step == '3') {
        nextPage(true);
      } else {
        nextPage();
      }
    });
  }

  let intervalMask = setInterval(() => {
    if (!IMask) return false;
    clearInterval(intervalMask);
    IMask(document.querySelector('.lav-step__salary input'), {
      mask: Number,
      thousandsSeparator: ',',
    });

    IMask(
      document.querySelector(
        '.lav-final__group-wrap .lav-final__group:nth-child(2) input'
      ),
      {
        mask: /^\S*@?\S*$/,
      }
    );

    IMask(
      document.querySelector(
        '.lav-final__group-wrap .lav-final__group:nth-child(3) input'
      ),
      {
        mask: '+{351} 000 000 000',
      }
    );
  }, 300);

  document
    .querySelector('.lav-step__salary input')
    .addEventListener('input', function () {
      if (this.value) {
        document.querySelector(
          '.page__simulator .capture-overlay .capture-form .form-group:nth-child(5) input'
        ).value = this.value.replaceAll(',', '');

        document
          .querySelector('.lav-step[data-step="3"] .lav-step__next')
          .classList.remove('disabled');
      } else {
        document.querySelector(
          '.page__simulator .capture-overlay .capture-form .form-group:nth-child(5) input'
        ).value = '';

        document
          .querySelector('.lav-step[data-step="3"] .lav-step__next')
          .classList.add('disabled');
      }
    });

  document
    .querySelector('.lav-final__group-wrap .lav-final__group:first-child input')
    .addEventListener('input', function () {
      if (this.value) {
        document.querySelector(
          '.page__simulator .capture-overlay .capture-form .form-group:nth-child(1) input'
        ).value = this.value;
      } else {
        document.querySelector(
          '.page__simulator .capture-overlay .capture-form .form-group:nth-child(1) input'
        ).value = '';
      }
    });

  document
    .querySelector(
      '.lav-final__group-wrap .lav-final__group:nth-child(2) input'
    )
    .addEventListener('input', function () {
      if (this.value) {
        document.querySelector(
          '.page__simulator .capture-overlay .capture-form .form-group:nth-child(2) input'
        ).value = this.value;
      } else {
        document.querySelector(
          '.page__simulator .capture-overlay .capture-form .form-group:nth-child(2) input'
        ).value = '';
      }
    });

  document
    .querySelector(
      '.lav-final__group-wrap .lav-final__group:nth-child(3) input'
    )
    .addEventListener('input', function () {
      if (this.value) {
        document.querySelector(
          '.page__simulator .capture-overlay .capture-form .form-group:nth-child(3) input'
        ).value = this.value;
      } else {
        document.querySelector(
          '.page__simulator .capture-overlay .capture-form .form-group:nth-child(3) input'
        ).value = '';
      }
    });
}

function startPreloader() {
  console.log('startPreloader');
  let idx = 0;
  var delay = 2.3;

  for (let item of document.querySelectorAll('.lav-preloader__item')) {
    setTimeout(() => {
      let el = document.querySelector('.lav-preloader__item.active');
      if (el) {
        el.classList.remove('active');
        el.classList.add('finish');
      }

      item.classList.add('active');
    }, idx * delay * 1000);

    idx++;

    if (idx == 3) {
      setTimeout(() => {
        let el = document.querySelector('.lav-preloader__item.active');

        el.classList.remove('active');
        el.classList.add('finish');

        setTimeout(() => {
          document
            .querySelector('.lav-step__back.disabled')
            .classList.remove('disabled');
          document.querySelector('.lav-preloader').remove();
          document.querySelector('.lav-final').classList.add('active');
        }, 500);
      }, idx * delay * 1000 + 3000);
    }
  }
}

function nextPage(isPreloader) {
  let currentStep = document.querySelector('.lav-step.active');
  currentStep.classList.remove('active');

  if (currentStep.nextElementSibling) {
    currentStep.nextElementSibling.classList.add('active');
  }

  if (isPreloader) {
    startPreloader();
  }
}
