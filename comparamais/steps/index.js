console.log('initExp');

/********* Settings **********/
const settings = {
  dir: 'https://flopsi69.github.io/crs/comparamais/steps',
  clarity: false,
  observe: false,
};

//Hotjar
if (settings.clarity) {
  const clarityInterval = setInterval(function () {
    if (typeof clarity == 'function') {
      clearInterval(clarityInterval);
      clarity('set', 'new_flow', 'variant_1');
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
      eventCategory: 'Exp: Simulator - New flow',
      eventAction: action,
      eventLabel: label,
    };
    console.log('crsEvent', objData);
    dataLayer.push(objData);
  } catch (e) {
    console.log(e);
  }
}

function gaEventClient(event, quality) {
  try {
    var objData = {
      event: event,
      form_page: 'Listing',
      vertical: 'HL',
    };
    if (quality) {
      objData.lead_quality = quality;
    }
    console.log('clientEvent', objData);
    dataLayer.push(objData);
  } catch (e) {
    console.log(e);
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
  .container--hero .page__title {
    display: none;
  }

  .container--hero {
    padding-bottom: 50px;
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
  }
  .lav-info__complete {
    margin-top: 15px;
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
  }
  #results {
    padding-top: 25px;
  }
  .page__simulator__complete {
    display: none;
  }
  .lav-info__title {
    font-weight: 700;
    font-size: 48px;
    line-height: 56px;
    color: #229F55;
  }
  .lav-info__caption {
    font-weight: 500;
    font-size: 25px;
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

  .lav-preloader__hidden {
    display: none;
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
    display: none;
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
    cursor: pointer;
  }
  .lav-step__back:hover {
    opacity: 0.6;
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

  .lav-step .lav-input.lav-error {
    border-color: red;
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
    // opacity: 0.4;
    display: none;
  }

  .lav-step {
    display: none;
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
    margin: 28px 0 32px;;
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

  .lav-filter__choosen-hide {
    display: none;
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

  .lav-terms-error {
    display: none;
    color: red;
    font-style: italic;
    text-align: center;
    font-size: 14px;
    margin-top: 15px;
  }

  .lav-terms-error.active {
    display: block;
  }
  .lav-filter-close {
    display: none;
    position: absolute;
    top: 28px;
    right: 28px;
  }
  .lav-result-hide {
    display: none;
  }
  .lav-mob-filter__actions {
    display: none;
  }
  @media(max-width: 580px) {
    .lav-filter-close {
      display: block;
    }
    .filters {
      padding: 75px 24px;
      width: 93%;
    }
    .filters__trigger:checked+.filters {
      left: initial;
      right: 0;
    }
    .lav-info {
      display: block;
      padding: 0 10px;
      margin-top: 35px;
    }
    .lav-info__title {
      font-size: 40px;
      line-height: 30px;
    }
    .lav-info__caption {
      margin-top: 12px;
      font-size: 17px;
      line-height: 23px;
    }
    .lav-info__review {
      margin-top: 16px;
    }
    .lav-info__list {
      margin-top: 24px;
    }
    .container--hero .page__simulator {
      width: 100%;
    }
    .lav-step {
      margin: 25px;
      margin-left: 10px;
      margin-right: 10px;
      padding: 20px;
      min-height: auto;
    }
    .hls-simulator__amount-range {
      color: #1F1F1F;
    }
    .hls-simulator__field-box--md {
      width: 100%;
    }
    .lav-final__check {
      display: block;
    }
    .container--listing {
        padding-bottom: 20px;
    }
    .filters__trigger:checked~.col-9.col-md-12.col-sm-12:before {
      content: '';
      position: fixed;
      z-index: 99;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      background-color: rgba(0,0,0,.7);
    }
    .hits__filters {
      min-height: 0;
    }
    .lav-filter__head-title {
      font-size: 20px;
      line-height: 32px;
      font-weight: 600;
      padding-top: 4px;
    }
    .lav-filter__head-reset {
      font-weight: 500;
    }
    .lav-filter__choosen {
      margin-top: 12px;
    }
    .hits__filters .lav-filter__head, .hits__filters .lav-filter__choosen, .hits__filters .lav-sort {
      display: none;
    }
    .lav-mob-filter__actions {
      display: grid;
      gap: 12px;
      grid-template-columns: 1fr 1fr;
      margin-top: 20px;
    }
    .lav-open-filter {

    }
    .lav-mob-filter__actions .lav-sort {
      margin: 0;
    }
    .lav-open-filter {
      background: #0071EB;
      border: 1px solid #0071EB;
      border-radius: 8px;
      color: #fff;
      cursor: pointer;
      outline: none;
      padding: 8px 16px;
      font-weight: 600;
      font-size: 14px;
      line-height: 18px;
    }
    .filters__trigger {
      display: none!important;
    }
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
      <div class='lav-info__title'>Crédito Habitação</div>
      <div class='lav-info__caption'>Compare e adira ao melhor Crédito Habitação</div>
      <a href='https://www.reviews.co.uk/company-reviews/store/www-comparamais-pt?utm_source=www-comparamais-pt&utm_medium=widget&utm_campaign=text-banner' class='lav-info__review'>
        <img class='review__site' src='${settings.dir}/img/review.svg'>

        <div class='review__star'>
          <img src='${settings.dir}/img/star.svg'>

          <span>4.6</span>
        </div>

        <div class='review__count'></div>
      </a>
      <div class='lav-info__list'>
        <div class='lav-info__item'>Receba propostas exclusivas e personalizadas de todos os bancos</div>
        <div class='lav-info__item'>Compare todos os custos e critérios de aprovação para o seu crédito</div>
        <div class='lav-info__item'>Poupe milhares de euros com os juros mais baixos</div>
      </div>
    </div>
`;

let filtersEl = `
  <div class="lav-filter__head">
    <div class='lav-filter__head-title'>Filtros</div>
    <button class='lav-filter__head-reset'>Remover filtros</button>
  </div>

  <div class="lav-filter__choosen lav-filter__choosen-hide"></div>

  <div class="lav-sort">
    <div class="lav-sort__value">Escolher por: <span>Recomendado</span></div>
    <div class="lav-sort__dropdown">
      <div class="lav-sort__item active">Recomendado</div>
      <div class="lav-sort__item">Prestação Mensal</div>
      <div class="lav-sort__item">TAN</div>
      <div class="lav-sort__item">TAEG</div>
      <div class="lav-sort__item">Euribor 6M</div>
      <div class="lav-sort__item">Spread</div>
    </div>
  </div>

  <div class="lav-filter__body">
    <div class="lav-filter__body-title">Bancos</div>
    <div class="lav-filter__list"></div>
  </div>
`;

let filtersMobEl = `
  <div class='lav-mob-filter'>
    <div class="lav-filter__head">
      <div class='lav-filter__head-title'>Filtros</div>
      <button class='lav-filter__head-reset'>Remover filtros</button>
    </div>

    <div class="lav-filter__choosen lav-filter__choosen-hide"></div>

    <div class='lav-mob-filter__actions'>
      <button class='lav-open-filter'>Bancos</button>
      <div class="lav-sort">
        <div class="lav-sort__value">Recomendado</div>
        <div class="lav-sort__dropdown">
          <div class="lav-sort__item active">Recomendado</div>
          <div class="lav-sort__item">Prestação Mensal</div>
          <div class="lav-sort__item">TAN</div>
          <div class="lav-sort__item">TAEG</div>
          <div class="lav-sort__item">Euribor 6M</div>
          <div class="lav-sort__item">Spread</div>
        </div>
      </div>
    </div>
  </div>
`;

let stepsEl = `
  <div class='lav-steps'>
    <div class='lav-step' data-step='1'>
      <div class='lav-step__head'>
        <div class='lav-step__back'></div>
        <div class='lav-step__num'><span>1</span>/4</div>
      </div>

      <div class='lav-step__title'>Nacionalidade</div>

      <div class='lav-step__radio-list lav-nation'>
        <div class='lav-step__radio' data-idx='1'>Português</div>
        <div class='lav-step__radio' data-idx='2'>Residente Permanente</div>
        <div class='lav-step__radio' data-idx='3'>Residente Temporário</div>
        <div class='lav-step__radio' data-idx='4'>Não-Residente</div>
      </div>

      <button class='lav-step__next disabled'>Continuar</button>
    </div>

    <div class='lav-step' data-step='2'>
      <div class='lav-step__head'>
        <div class='lav-step__back'><img src='${settings.dir}/img/back.svg'>Voltar</div>
        <div class='lav-step__num'><span>2</span>/4</div>
      </div>

      <div class='lav-step__title'>Situação Laboral</div>

      <div class='lav-step__radio-list lav-situation'>
        <div class='lav-step__radio' data-idx='1'>Efetivo</div>
        <div class='lav-step__radio' data-idx='2'>Trabalhador Independente</div>
        <div class='lav-step__radio' data-idx='3'>Contrato a Termo Certo</div>
        <div class='lav-step__radio' data-idx='4'>Reformado</div>
        <div class='lav-step__radio' data-idx='5'>Desempregado</div>
      </div>

      <button class='lav-step__next disabled'>Continuar</button>
    </div>

    <div class='lav-step' data-step='3'>
      <div class='lav-step__head'>
        <div class='lav-step__back'><img src='${settings.dir}/img/back.svg'>Voltar</div>
        <div class='lav-step__num'><span>3</span>/4</div>
      </div>

      <div class='lav-step__title'>Salário Líquido</div>

      <div class='lav-step__salary'>
        <input type='tel' placeholder='10,000' class='lav-input' />
      </div>

      <div class='lav-step__caption'>Por favor, exclua pagamentos de apoios sociais e confirme o salário líquido após todos os descontos e deduções do seu vencimento bruto.</div>


      <button class='lav-step__next lav-step-sallary disabled'>Continuar</button>
    </div>

    <div class='lav-step' data-step='4'>
      <div class='lav-step__head'>
        <div class='lav-step__back disabled'><img src='${settings.dir}/img/back.svg'>Voltar</div>
        <div class='lav-step__num'><span>4</span>/4</div>
      </div>

      <div class="lav-preloader">
        <div class="lav-preloader__item">A avaliar o seu pedido</div>
        <div class="lav-preloader__item">A analisar o mercado</div>
        <div class="lav-preloader__item">A processar as ofertas disponíveis</div>
        <div class="lav-preloader__item">A criar o seu quadro de ofertas de crédito habitação...</div>
      </div>

      <div class='lav-final'>
        <div class='lav-step__title-final'>Excelente. O seu crédito Habitação está pronto!</div>

        <div class='lav-final__group-wrap'>
          <div class='lav-final__group'>
            <div class='lav-step__title'>O seu nome</div>
            <input type='text' class='lav-input' placeholder='John Doe' />
          </div>

          <div class='lav-final__group'>
            <div class='lav-step__title'>Indique o seu email para ver os resultados</div>
            <input value='' type='text' class='lav-input' placeholder='forexample@gmail.com' />
          </div>

          <div class='lav-final__group'>
            <div class='lav-step__title'>O seu contacto telefónico</div>
            <input type='text' class='lav-input' placeholder='+351 102 204 305' />
          </div>

          <div class='lav-final__group'>
            <div class='lav-final__check lav-terms'>
            Declaro ter tomado conhecimento e aceito os <a href='https://www.comparamais.pt/termos-e-condicoes' target='_blank'>&nbsp;Termos e Condições</a>.
            </div>
            <div class='lav-final__check lav-personal'>
              Consinto que a Comparamais trate os meus dados pessoais para efeitos de marketing.
            </div>
          </div>
        </div>

        <button class='lav-step__next lav-show-report'>Ver as Ofertas</button>

        <p class='lav-terms-error'>Você deve concordar com nossos termos.</p>
      </div>
    </div>

    <div class='lav-step' data-step='5'>
      <div class='lav-step__title-final'>Proposta</div>

      <div class='lav-report'></div>

      <button class='lav-step__next lav-view-banks'>Ver os Bancos</button>
    </div>
  </div>
`;

/********* Custom Code **********/
let imaskScript = document.createElement('script');
imaskScript.src = 'https://unpkg.com/imask';
document.body.append(imaskScript);

let intrevalInit = setInterval(() => {
  if (document.querySelector('.container--hero')) {
    clearInterval(intrevalInit);
    init();
  }
}, 300);

function init() {
  console.log('init');
  initTopInfo();
  initFilters();
  if (document.querySelector('.container--listing')) {
    document.querySelector('.lav-info').classList.add('lav-info__complete');
    document
      .querySelector('.page__simulator')
      .classList.add('page__simulator__complete');
    return false;
  }

  setTimeout(() => {
    if (document.querySelector('.container--listing')) {
      document.querySelector('.lav-info').classList.add('lav-info__complete');
      document
        .querySelector('.page__simulator')
        .classList.add('page__simulator__complete');
      return false;
    }
  }, 1000);

  initSteps();

  document
    .querySelector('.lav-step .hls-simulator__button')
    .addEventListener('click', function (e) {
      e.preventDefault();
      gaEvent('click button', 'step: Calculator');
      document
        .querySelector('.container--hero + .container')
        .classList.add('lav-result-hide');
      document
        .querySelector('.lav-step[data-step="1"]')
        .classList.add('active');
    });
}

function initTopInfo() {
  document
    .querySelector('.page__title')
    .insertAdjacentHTML('beforebegin', introInfoEl);

  if (!document.querySelector('.container--listing')) {
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
  }

  document.querySelector('.review__count').innerHTML =
    '(' +
    document.querySelector('.reviews-score strong:last-child').innerText +
    ' Avaliações)';

  for (let item of document.querySelectorAll(
    '.hls-simulator__amount-range span'
  )) {
    item.innerText = item.innerText + '€';
  }
}

function initFilters() {
  document
    .querySelector('.hits__filters__body')
    .insertAdjacentHTML(
      'afterend',
      `<img class='lav-filter-close' src="${settings.dir}/img/filter-close.svg">`
    );

  document
    .querySelector('.lav-filter-close')
    .addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector('.filters__closer--button').click();
    });

  document
    .querySelector('.hits__filters__body')
    .insertAdjacentHTML('afterend', filtersEl);

  document
    .querySelector('#results')
    .insertAdjacentHTML('afterbegin', filtersMobEl);

  document
    .querySelector('.lav-open-filter')
    .addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector('.filters__trigger').click();
    });
  // document
  //   .querySelector('.lav-filter__head-reset')
  //   .addEventListener('click', function (e) {
  //     e.preventDefault();
  //     document.querySelector('.filter-reset').click();
  //   });

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

  for (let item of document.querySelectorAll('.lav-sort__value')) {
    item.addEventListener('click', function () {
      item.closest('.lav-sort').classList.toggle('active');
    });
  }

  for (let item of document.querySelectorAll('.lav-sort__item')) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      if (item.classList.contains('active')) return false;

      item
        .closest('.lav-sort__dropdown')
        .querySelector('.lav-sort__item.active')
        .classList.remove('active');

      item.closest('.lav-sort').classList.remove('active');

      item.classList.add('active');

      document.querySelector('.hits__filters .lav-sort__value span').innerText =
        item.innerText;

      document.querySelector('.lav-mob-filter .lav-sort__value').innerText =
        item.innerText;
    });
  }
}

function addChoosen() {
  document.querySelector('.lav-filter__choosen').innerHTML = '';
  document
    .querySelector('.lav-filter__choosen')
    .classList.add('lav-filter__choosen-hide');

  for (let bank of banks) {
    if (bank.isActive) {
      document
        .querySelector('.lav-filter__choosen')
        .classList.remove('lav-filter__choosen-hide');
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
          gaEvent('click checkbox terms', 'step: Form');
          document.querySelector('#termsAgreement').checked = 'checked';
          let event = new Event('change');
          document.querySelector('#termsAgreement').dispatchEvent(event);
        } else if (item.classList.contains('lav-personal')) {
          gaEvent('click checkbox agreement', 'step: Form');
          document.querySelector('#communicationAgreement').checked = 'checked';
          let event = new Event('change');
          document
            .querySelector('#communicationAgreement')
            .dispatchEvent(event);
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
        gaEvent('click radio', 'step: Nationality');

        document.querySelector(
          '.page__simulator .capture-overlay .capture-form .form-group:nth-child(6) select'
        ).value = document.querySelector(
          `.page__simulator .capture-overlay .capture-form .form-group:nth-child(6) option:nth-child(${idx})`
        ).value;

        let event = new Event('change');
        document
          .querySelector(
            '.page__simulator .capture-overlay .capture-form .form-group:nth-child(6) select'
          )
          .dispatchEvent(event);
      } else if (item.closest('.lav-situation')) {
        gaEvent('click radio', 'step: Work Status');

        document.querySelector(
          '.page__simulator .capture-overlay .capture-form .form-group:nth-child(4) select'
        ).value = document.querySelector(
          `.page__simulator .capture-overlay .capture-form .form-group:nth-child(4) option:nth-child(${idx})`
        ).value;

        let event = new Event('change');
        document
          .querySelector(
            '.page__simulator .capture-overlay .capture-form .form-group:nth-child(4) select'
          )
          .dispatchEvent(event);
      }

      document
        .querySelector('.lav-step.active .lav-step__next')
        .classList.remove('disabled');
    });
  }
  for (let item of document.querySelectorAll('.lav-step__back')) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      if (this.classList.contains('disabled')) return false;

      let currentStep = document.querySelector('.lav-step.active');
      currentStep.classList.remove('active');

      if (currentStep.previousElementSibling) {
        currentStep.previousElementSibling.classList.add('active');
      }

      document
        .querySelector('.lav-preloader')
        .classList.remove('lav-preloader__hidden');

      document.querySelector('.lav-final').classList.remove('active');

      for (let item of document.querySelectorAll('.lav-preloader__item')) {
        item.classList.remove('finish', 'active');
      }
    });
  }

  for (let item of document.querySelectorAll('.lav-step__next')) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      if (item.classList.contains('disabled')) return false;

      if (item.closest('.lav-step').dataset.step == '1') {
        gaEvent('click button', 'step: Nationality');
      }

      if (item.closest('.lav-step').dataset.step == '2') {
        gaEvent('click button', 'step: Work Status');
      }

      if (item.closest('.lav-step').dataset.step == '3') {
        gaEvent('click button', 'step: Sallary');
      }

      if (item.classList.contains('lav-show-report')) {
        if (!validateForm()) return false;
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

        document
          .querySelector(
            '.page__simulator .capture-overlay .capture-form button'
          )
          .click();

        gaEventClient('submitCaptureForm', '50');
        gaEvent('click button', 'step: Form');
      }

      if (item.classList.contains('lav-view-banks')) {
        document.querySelector('.lav-info').classList.add('lav-info__complete');
        document
          .querySelector('.page__simulator')
          .classList.add('page__simulator__complete');
        nextPage();
        document
          .querySelector('.container--hero + .container')
          .classList.remove('lav-result-hide');
        if (document.querySelector('#results')) {
          document.querySelector('#results').scrollIntoView();
        } else {
          setTimeout(() => {
            if (document.querySelector('#results')) {
              document.querySelector('#results').scrollIntoView();
            }
          }, 1000);
        }
        gaEvent('click button', 'step: Report');
        gaEventClient('viewProductList');
        return false;
      }

      if (document.querySelector('.lav-step.active').dataset.step == '3') {
        nextPage(true);
      } else {
        nextPage();
      }
    });
  }

  let intervalMask = setInterval(() => {
    if (typeof IMask !== 'function') return false;
    clearInterval(intervalMask);
    IMask(document.querySelector('.lav-step__salary input'), {
      mask: Number,
      thousandsSeparator: ',',
    });

    // IMask(
    //   document.querySelector(
    //     '.lav-final__group-wrap .lav-final__group:nth-child(2) input'
    //   ),
    //   {
    //     mask: /^\S*@?\S*$/,
    //   }
    // );

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
    .addEventListener('click', function () {
      gaEvent('click input', 'step: Sallary');
    });

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

      let event = new Event('change');
      document
        .querySelector(
          '.page__simulator .capture-overlay .capture-form .form-group:nth-child(5) input'
        )
        .dispatchEvent(event);
    });

  document
    .querySelector('.lav-final__group-wrap .lav-final__group:first-child input')
    .addEventListener('input', function () {
      if (this.classList.contains('lav-error')) {
        this.classList.remove('lav-error');
      }
      if (this.value) {
        document.querySelector(
          '.page__simulator .capture-overlay .capture-form .form-group:nth-child(1) input'
        ).value = this.value;
      } else {
        document.querySelector(
          '.page__simulator .capture-overlay .capture-form .form-group:nth-child(1) input'
        ).value = '';
      }

      let event = new Event('change');
      document
        .querySelector(
          '.page__simulator .capture-overlay .capture-form .form-group:nth-child(1) input'
        )
        .dispatchEvent(event);
    });

  document
    .querySelector(
      '.lav-final__group-wrap .lav-final__group:nth-child(2) input'
    )
    .addEventListener('input', function () {
      if (this.classList.contains('lav-error')) {
        this.classList.remove('lav-error');
      }
      if (this.value) {
        document.querySelector(
          '.page__simulator .capture-overlay .capture-form .form-group:nth-child(2) input'
        ).value = this.value;
      } else {
        document.querySelector(
          '.page__simulator .capture-overlay .capture-form .form-group:nth-child(2) input'
        ).value = '';
      }

      let event = new Event('change');
      document
        .querySelector(
          '.page__simulator .capture-overlay .capture-form .form-group:nth-child(2) input'
        )
        .dispatchEvent(event);
    });

  document
    .querySelector(
      '.lav-final__group-wrap .lav-final__group:nth-child(3) input'
    )
    .addEventListener('input', function () {
      if (this.classList.contains('lav-error')) {
        this.classList.remove('lav-error');
      }
      if (this.value) {
        document.querySelector(
          '.page__simulator .capture-overlay .capture-form .form-group:nth-child(3) input'
        ).value = this.value;
      } else {
        document.querySelector(
          '.page__simulator .capture-overlay .capture-form .form-group:nth-child(3) input'
        ).value = '';
      }

      let event = new Event('change');
      document
        .querySelector(
          '.page__simulator .capture-overlay .capture-form .form-group:nth-child(3) input'
        )
        .dispatchEvent(event);
    });

  document
    .querySelector('.lav-final__group-wrap .lav-final__group:first-child input')
    .addEventListener('click', function () {
      gaEvent('click input name', 'step: Form');
    });

  document
    .querySelector(
      '.lav-final__group-wrap .lav-final__group:nth-child(2) input'
    )
    .addEventListener('click', function () {
      gaEvent('click input email', 'step: Form');
    });

  document
    .querySelector(
      '.lav-final__group-wrap .lav-final__group:nth-child(3) input'
    )
    .addEventListener('click', function () {
      gaEvent('click input phone', 'step: Form');
    });
}

function startPreloader() {
  console.log('startPreloader');
  let idx = 0;
  var delay = 0.7;

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
          if (document.querySelector('.lav-step__back.disabled')) {
            document
              .querySelector('.lav-step__back.disabled')
              .classList.remove('disabled');
          }
          document
            .querySelector('.lav-preloader')
            .classList.add('lav-preloader__hidden');
          document.querySelector('.lav-final').classList.add('active');
          gaEventClient('viewCaptureForm');
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

function validateForm() {
  let isError = false;
  let name = document.querySelector(
    '.lav-final__group-wrap .lav-final__group:nth-child(1) input'
  ).value;

  let email = document.querySelector(
    '.lav-final__group-wrap .lav-final__group:nth-child(2) input'
  ).value;

  let phone = document.querySelector(
    '.lav-final__group-wrap .lav-final__group:nth-child(3) input'
  ).value;

  if (!name) {
    isError = true;
    document
      .querySelector(
        '.lav-final__group-wrap .lav-final__group:nth-child(1) input'
      )
      .classList.add('lav-error');
  }

  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    isError = true;
    document
      .querySelector(
        '.lav-final__group-wrap .lav-final__group:nth-child(2) input'
      )
      .classList.add('lav-error');
  }

  if (!phone || phone.length != 16) {
    isError = true;
    document
      .querySelector(
        '.lav-final__group-wrap .lav-final__group:nth-child(3) input'
      )
      .classList.add('lav-error');
  }

  if (!document.querySelector('.lav-terms.active')) {
    isError = true;
    document.querySelector('.lav-terms-error').classList.add('active');
  } else {
    document.querySelector('.lav-terms-error').classList.remove('active');
  }

  return !isError;
}
