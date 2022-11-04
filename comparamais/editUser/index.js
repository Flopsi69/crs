console.log('initExp');

/********* Settings **********/
const settings = {
  dir: 'https://flopsi69.github.io/crs/comparamais/editUser',
  clarity: false,
  observe: true,
};

// Clarity
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

        console.log(node);
        if (
          node.classList.contains('simulator-container') &&
          node.querySelector('.hls-simulator__button') &&
          node.querySelector('.hls-simulator__button').innerText ==
            'Ver os bancos'
        ) {
          node.querySelector('.hls-simulator__button').click();
          init();
        }

        // Code Here
      }
    }
  });

  let demoElem = document.querySelector('.page__simulator');

  observer.observe(demoElem, { childList: true, subtree: true });
}

// Styles
const styles = `
  .container--listing .in__grid .page__title .header-list, .container--edit .in__grid .page__title .header-list {
    display: none;
  }
  .container--hero.container--edit .page__title {
    padding-top: 50px;
  }
  .lav-list__wrap-change {
    display: none;
  }
  .container--edit .lav-list__wrap-change {
    display: block;
  }
  .container--edit .lav-list__wrap-single {
    display: none;
  }
  .container--hero.container--listing {
    padding-bottom: 120px;
  }
  .lav-list__wrap {
    margin: 45px auto 0;
    text-align: left;
    max-width: 510px;
  }
  .lav-approval {
    text-align: center;
    background: #E6EDF0;
    border-radius: 8px;
    padding: 20px 15px;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #1F1F1F;
    margin-bottom: 16px;
  }
  .lav-approval__caption {
    color: #229F55;
  }
  .lav-list__wrap-change {
    margin: 0;
    margin-top: 30px;
  }
  .lav-list__title {
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    color: #1F1F1F;
  }
  .lav-list {
    margin: 16px auto 0;
    max-width: 496px;
    font-size: 16px;
    line-height: 1.5;
    color: #474A48;
    margin-top: 16px;
    padding-left: 16px;
  }
  .lav-list__item {
    list-style-type: inherit;
  }
  .lav-list__item + .lav-list__item {
    margin-top: 2px;
  }
  .card {
    padding: 20px;
    background: #FFFFFF;
    box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3);
    border-radius: 12px;
    align-items: center;
  }
  .card--featured, .card {
    border: none;
  }
  .card--featured .card__badge {
    position: absolute;
    right: 20px;
    width: auto;
    top: 20px;
    border-radius: 100px;
    padding: 4px 8px;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #FFFFFF;
    text-transform: none;
  }
  .card__logo {
    background: #E6EDF0;
    border: 1px solid #E6E7E7;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    height: 100px;
  }
  .card__logo img {
    max-height: 90%;
    max-width: 90%;
    width: auto;
  }
  .card--3d .card__data-holder--icon strong {
    font-weight: 700;
    font-size: 24px;
    line-height: 1.5;
    color: #229F55;
  }
  .card--featured .card__footer, .card__footer {
    padding: 16px 0 0 0;
    background: none;
    margin-top: 14px;
    border-top: 1px solid #E6E7E7;
  }
  .card--mobile-style .card__product-highlight {
    font-size: 16px;
    line-height: 1.5;
    color: #474A48;
  }
  .card__apply {
    position: relative;
    width: auto;
    margin-left: 40px;
  }
  .card__apply:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 1;
    cursor: pointer;
  }
  .card__apply .btn {
    font-weight: 700;
    font-size: 16px;
    line-height: 26px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 1px 2px rgb(0 0 0 / 20%), 0px 2px 6px 2px rgb(0 0 0 / 15%);
    border-radius: 8px;
  }
  .card--featured .btn {
    padding: 10px 28px;
  }
  .card--3d .card__items-wrapper>.card__additional-info {
    display: none;
  }
  .card--3d .card__items-wrapper>div {
    width: auto;
    margin-right: 40px;
  }
  // .card--3d .card__items-wrapper>div:nth-child(3) {
  //   order: 2;
  // }
  .card--3d .card__items-wrapper>div:nth-child(2) {
    order: 3;
  }
  .card__product-details--left label {
    padding: 0;
    font-size: 14px;
    line-height: 20px;
    color: #0071EB;
  }
  .card__product-details {
    position: relative;
  }
  .content-toggler~.toggle--on, .content-toggler:checked~.toggle--off {
    position: absolute;
    right: 0;
    top: 0;
    transform: translateY(-100%);
  }
  .content-toggler:checked~.product-promotion {
    padding-top: 16px;
    margin-bottom: -15px;
    margin-left: -20px;
    margin-right: -20px;
    min-width: 100%;
    width: auto;
  }
  .lav-edit {
    background: #fff;
    box-shadow: 0px 4px 8px 3px rgb(0 0 0 / 15%), 0px 1px 3px rgb(0 0 0 / 30%);
    border-radius: 24px;
  }
  .lav-edit__top {
    background: #E6EDF0;
    padding: 56px 56px 28px;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
  }
  .lav-edit__top-title {
    font-weight: 700;
    font-size: 24px;
    line-height: 26px;
    color: #229F55;
  }
  .lav-edit__top-caption {
    font-size: 18px;
    line-height: 22px;
    color: #474A48;
    margin-top: 8px;
  }
  .lav-edit__bottom {
    padding: 28px 56px 56px;
  }
  .lav-preview {
    position: relative;
    font-size: 14px;
    line-height: 20px;
    color: #474A48;
  }
  .lav-preview__edit {
    position: absolute;
    top: 28px;
    right: 56px;
    font-size: 14px;
    line-height: 20px;
    color: #0071EB;
    display: flex;
    align-items: center;
    transition: 0.35s;
    cursor: pointer;
  }
  .lav-preview__edit:hover {
    color: #0056b3;
    opacity: 0.7;
  }
  .lav-preview__edit img {
    margin-right: 4px;
  }
  
  .lav-preview__group + .lav-preview__group {
    margin-top: 12px;
  }
  .lav-preview__caption {
    font-size: 14px;
    line-height: 20px;
    color: #474A48;
  }
  .lav-preview__value {
    font-weight: 700;
    font-size: 16px;
    line-height: 26px;
    color: #1F1F1F;
  }
  .lav-preview__btn {
    margin-top: 40px;
  }
  .lav-btn {
    font-weight: 700;
    font-size: 16px;
    line-height: 1;
    color: #FFFFFF;
    background: #0071EB;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2), 0px 2px 6px 2px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    height: 48px;
    padding: 5px 20px;
    outline: none;
    transition: 0.35s;
    border: none;
    width: 100%;
    cursor: pointer;
  }
  .lav-btn:hover {
    background-color: #0056b3;
  }
  .lav-form {
    display: none;
  }
  .lav-form__caption {
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    color: #1F1F1F;
    margin-bottom: 16px;
  }
  .lav-form__value {
    background: #F9F9F9;
    border: 1px solid #E6E7E7;
    border-radius: 8px;
    width: 100%;
    height: 52px;
    padding: 5px 20px;
    font-size: 16px;
    line-height: 26px;
    color: #1F1F1F;
  }
  .lav-form__group + .lav-form__group {
    margin-top: 28px;
  }
  .lav-form__btn {
    margin-top: 40px;
  }
  
`;

const stylesEl = document.createElement('style');
stylesEl.innerHTML = styles;
document.body.appendChild(stylesEl);
/*** STYLES / end ***/

let banks = [
  { name: 'ABanca', value: '', img: false },
  { name: 'ActivoBank', value: '', img: 'ActivoBank.png' },
  { name: 'Banco Best', value: '', img: 'best.svg' },
  { name: 'Bankinter', value: '', img: 'bankinter.svg' },
  { name: 'BPI', value: '', img: 'BPI.svg' },
  { name: 'Caixa Agrícola', value: '', img: 'CA.png' },
  { name: 'CGD', value: 'Caixa Geral', img: 'CGD.png' },
  { name: 'CTT', value: '', img: false },
  { name: 'Eurobic', value: '', img: 'EuroBic.png' },
  { name: 'Millennium BCP', value: '', img: 'millennium.png' },
  { name: 'Montepio', value: '', img: '' },
  { name: 'Novo Banco', value: '', img: 'novobanco.svg' },
  { name: 'Santander', value: '', img: 'santander.svg' },
  { name: 'UCI - Unión de Créditos Inmobiliários', value: '', img: '' },
];

/********* Custom Code **********/
// let imaskScript = document.createElement('script');
// imaskScript.src = 'https://unpkg.com/imask';
// document.body.append(imaskScript);

let formData = {};

// let intrevalInit = setInterval(() => {
//   if (
//     (document.querySelector('.container--hero') &&
//       document.querySelector('.hls-simulator__form-group.hls--inline')) ||
//     document.querySelector('.container--listing')
//   ) {
//     clearInterval(intrevalInit);
//     init();
//     gaEvent('loaded');
//   }
// }, 300);

init();

function init() {
  console.log('init');
  // gaEvent('loaded');

  const initTopChange = setInterval(() => {
    if (document.querySelector('.container--listing .reviews-counter')) {
      clearInterval(initTopChange);
      initTopInfo();
    }
  }, 500);

  // changeCardView();

  // document.addEventListener('click', function (e) {
  // if (
  //   e.target.classList.contains('btn__load-more') ||
  //   e.target.closest('.btn__load-more')
  // ) {
  let initChangeCard = setInterval(() => {
    if (
      document.querySelector('.card') &&
      !document.querySelector('.card').classList.contains('lav-card') &&
      document.querySelector('.card')
    ) {
      changeCardView();
    }
  }, 150);
  // }
  // });
}

function initTopInfo() {
  let el = `
    <div class='lav-list__wrap lav-list__wrap-single'>
      <div class='lav-list__title'>Click <strong>Learn how to apply</strong> and our expert team will guide you through the following:</div>
      <ol class='lav-list'>
        <li class='lav-list__item'>We'll explain how you can maximise your chances of securing a good loan offer.</li>
        <li class='lav-list__item'>We'll give you the list of documents needed for a successful loan application.</li>
        <li class='lav-list__item'>We'll let you know about the best loans offers available to you.</li>
      </ol>
    </div>

    <div class='lav-list__wrap lav-list__wrap-change'>
      <div class='lav-approval'>
        <div class='lav-approval__title'>We have a market-leading</div>
        <div class='lav-approval__caption'>90% loan approval rate</div>
      </div>
      <div class='lav-list__title'>You'll be given the following information when our team contacts you:</div>
      <ol class='lav-list'>
        <li class='lav-list__item'>How to secure a good loan offer from <strong class='lav-list__item-bank'>[bank name]</strong>.</li>
        <li class='lav-list__item'>The documents you'll need to secure a good loan offer.</li>
        <li class='lav-list__item'>Information on the best loan offers available to you.</li>
      </ol>
    </div>
  `;

  if (!document.querySelector('.lav-list__wrap')) {
    document
      .querySelector('.container--listing .reviews-counter')
      .insertAdjacentHTML('afterend', el);
  }
}

function changeCardView() {
  document
    .querySelectorAll('#simulation-results .card:not(.lav-card)')
    .forEach((card) => {
      card.classList.add('lav-card');

      if (card.classList.contains('card--featured')) {
        card.querySelector('.card__badge').innerText = 'Mais recomendado';
      }

      card.querySelector('.card__apply a').innerText = 'Learn how to apply';

      card
        .querySelector('.card__apply')
        .addEventListener('click', function (e) {
          e.preventDefault();
          const bank = card
            .querySelector('.card__logo img')
            .alt.replace('Crédito Habitação ', '');

          if (
            !document.querySelector('.container--hero.container--listing') &&
            !document.querySelector('.container--edit')
          ) {
            this.querySelector('a').click();
            return false;
          }

          document.querySelector('.lav-list__item-bank').innerText = bank;
          toggleTopInfo();
        });

      for (let bank of banks) {
        if (
          bank.img &&
          card
            .querySelector('.card__logo img')
            .alt.includes(bank.value ? bank.value : bank.name)
        ) {
          const url = settings.dir + '/img/' + bank.img;

          card.querySelector('.card__logo img').setAttribute('data-src', url);
          card.querySelector('.card__logo img').src = url;
        }
      }

      card.querySelector(
        '.card__items-wrapper>div:first-child strong'
      ).innerText = card
        .querySelector(
          '.promotional-content__body>div>table:first-child tr:nth-child(3) td:last-child'
        )
        .innerText.replace('€', '€ ');
      card.querySelector(
        '.card__items-wrapper>div:first-child span'
      ).innerText = 'Prestação Mensal';

      card.querySelector(
        '.card__items-wrapper>div:nth-child(2) strong'
      ).innerText = card
        .querySelector(
          '.promotional-content__body>div>table:first-child tr:first-child td:last-child'
        )
        .innerText.replace('€', '€ ');
      card.querySelector(
        '.card__items-wrapper>div:nth-child(2) span'
      ).innerText = 'Valor do Pedido';
    });
}

function toggleTopInfo() {
  const el = `
    <div class='lav-edit'>
      <div class='lav-edit__top'>
        <div class='lav-edit__top-title'>Almost done! Double-check your details are correct.</div>
        <div class='lav-edit__top-caption'>Otherwise you'll miss out on the best loan offers.</div>
      </div>
      <div class='lav-edit__bottom lav-preview'>
        <div class='lav-preview__edit'>
          <img src='${settings.dir}/img/edit-icon.svg' />
          Edit
        </div>
        <div class='lav-preview__group'>
          <div class='lav-preview__caption'>Name</div>
          <div class='lav-preview__value lav-preview__name'>-</div>
        </div>
        <div class='lav-preview__group'>
          <div class='lav-preview__caption'>Email</div>
          <div class='lav-preview__value lav-preview__email'>-</div>
        </div>
        <div class='lav-preview__group'>
          <div class='lav-preview__caption'>Phone</div>
          <div class='lav-preview__value lav-preview__phone'>-</div>
        </div>
        <button class='lav-btn lav-preview__btn'>Confirm my contact details</button>
      </div>
      <div class='lav-edit__bottom lav-form'>
        <div class='lav-form__group'>
          <div class='lav-form__caption'>Enter your name</div>
          <input class='lav-form__value lav-form__name' />
        </div>
        <div class='lav-form__group'>
          <div class='lav-form__caption'>Enter your email</div>
          <input class='lav-form__value lav-form__email' />
        </div>
        <div class='lav-form__group'>
          <div class='lav-form__caption'>Enter your phone</div>
          <input class='lav-form__value lav-form__phone' />
        </div>
        <button class='lav-btn lav-form__btn'>Confirm my contact details</button>
      </div>
    </div>
  `;

  if (document.querySelector('.container--listing')) {
    document
      .querySelector('.container--listing')
      .classList.add('container--edit');
    document
      .querySelector('.container--listing')
      .classList.remove('container--listing');

    // todo
  }

  if (!document.querySelector('.lav-edit')) {
    document
      .querySelector('.page__simulator')
      .insertAdjacentHTML('afterbegin', el);

    document
      .querySelector('.lav-preview__edit')
      .addEventListener('click', function () {
        document.querySelector('.lav-preview').style.display = 'none';
        document.querySelector('.lav-form').style.display = 'block';
      });

    for (let item of document.querySelectorAll('.lav-btn')) {
      item.addEventListener('click', function (e) {
        e.preventDefault();
        finishForm();
      });
    }
  }
}

function finishForm() {
  // TODO send update data
  if (document.querySelector('.container--edit')) {
    document
      .querySelector('.container--edit')
      .classList.add('container--listing');
    document
      .querySelector('.container--edit')
      .classList.toggle('container--edit');

    if (document.querySelector('.lav-edit')) {
      document.querySelector('.lav-edit').remove();
    }
  }
}
