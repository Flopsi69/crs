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
    align-self: center;
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

  .lav-steps {

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
  }
  .lav-step__back img {
    margin-right: 7px;
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
  }

  .lav-input {
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
  }

  .lav-step__next:hover {
    background-color: #0056b3;
  }

  .lav-step {
    display: flex;
    flex-flow: column;
    padding: 56px;
    background: #FFFFFF;
    box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3);
    border-radius: 24px;
    border: none;
    min-height: 474px;
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

      <div class='lav-step__radio-list'>
        <div class='lav-step__radio active'>Portugues</div>
        <div class='lav-step__radio'>Permanent Resident</div>
        <div class='lav-step__radio'>Temporary Resident</div>
        <div class='lav-step__radio'>Non-Resident</div>
      </div>

      <button class='lav-step__next'>Continue</button>
    </div>

    <div class='lav-step' data-step='2'>
      <div class='lav-step__head'>
        <div class='lav-step__back'><img src='${settings.dir}/img/back.svg'>Back</div>
        <div class='lav-step__num'><span>2</span>/4</div>
      </div>

      <div class='lav-step__title'>Work Situation</div>

      <div class='lav-step__radio-list'>
        <div class='lav-step__radio active'>Effective</div>
        <div class='lav-step__radio'>Own Account</div>
        <div class='lav-step__radio'>Term Contract</div>
        <div class='lav-step__radio'>Retired</div>
        <div class='lav-step__radio'>Unemployed</div>
      </div>

      <button class='lav-step__next'>Continue</button>
    </div>

    <div class='lav-step' data-step='3'>
      <div class='lav-step__head'>
        <div class='lav-step__back'><img src='${settings.dir}/img/back.svg'>Back</div>
        <div class='lav-step__num'><span>3</span>/4</div>
      </div>

      <div class='lav-step__title'>Net Sallary</div>

      <div class='lav-step__salary'>
        <input value='10,000' class='lav-input' />
      </div>

      <div class='lav-step__caption'>Please exclude child benefits and make sure that health insurance and debt payments are deducted from your gross income.</div>


      <button class='lav-step__next'>Continue</button>
    </div>

    <div class='lav-step' data-step='2'></div>
    <div class='lav-step' data-step='3'></div>
    <div class='lav-step' data-step='4'></div>
    <div class='lav-step' data-step='5'></div>
  </div>
`;

/********* Custom Code **********/
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
      e.stopPropagation();
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

  document.querySelector('.simulator-container').classList.add('lav-step');

  document.querySelector('.review__count').innerHTML =
    '(' +
    document.querySelector('.reviews-score strong:last-child').innerText +
    ' Reviews)';
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
}
