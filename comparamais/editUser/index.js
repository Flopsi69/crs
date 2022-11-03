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
  .container--listing .in__grid .page__title .header-list {
    display: none;
  }
  
  .lav-list__wrap {
    margin: 45px auto 0;
    text-align: left;
    max-width: 512px;
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
    width: auto;
    margin-left: 40px;
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

  // TODO setinterval
  initTopInfo();
  changeCardView();

  document.addEventListener('click', function (e) {});
}

function initTopInfo() {
  return false;
  let el = `
    <div class='lav-list__wrap'>
      <div class='lav-list__title'>Click <strong>Learn how to apply</strong> and our expert team will guide you through the following:</div>
      <ol class='lav-list'>
        <li class='lav-list__item'>We'll explain how you can maximise your chances of securing a good loan offer.</li>
        <li class='lav-list__item'>We'll give you the list of documents needed for a successful loan application.</li>
        <li class='lav-list__item'>We'll let you know about the best loans offers available to you.</li>
      </ol>
    </div>
  `;

  document
    .querySelector('.container--listing .reviews-counter')
    .insertAdjacentHTML('afterend', el);
}

function changeCardView() {
  document.querySelectorAll('#simulation-results .card').forEach((item) => {
    item.classList.add('lav-card');

    if (item.classList.contains('card--featured')) {
      item.querySelector('.card__badge').innerText = 'Mais recomendado';
    }

    item.querySelector('.card__apply a').innerText = 'Learn how to apply';
  });

  for (let card of document.querySelectorAll('.card')) {
    for (let bank of banks) {
      if (
        bank.img &&
        card
          .querySelector('.card__logo img')
          .alt.includes(bank.value ? bank.value : bank.name)
      ) {
        console.log('change image', bank.img);
        card.querySelector('.card__logo img').src =
          settings.dir + '/img/' + bank.img;
      }
    }
  }
}
