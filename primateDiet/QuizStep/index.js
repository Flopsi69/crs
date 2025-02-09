console.log('initExp');
gaEvent('loaded');

// document.addEventListener('click', function (e) {
//   if (e.target.classList.contains('next')) {
//     gaEvent('Click on Lecimy Dalej (Go on)');
//   }
// });

/********* Settings **********/
const settings = {
  dir: 'https://flopsi69.github.io/crs/primateDiet/QuizStep',
  hj: true,
  observe: true,
};

var isHjInit = false;

// Alalytic
function gaEvent(action, label) {
  if (!label) {
    label = '';
  }
  try {
    var objData = {
      event: 'event-to-ga',
      eventCategory: 'Exp: Menu flow',
      eventAction: action,
      eventLabel: label,
      eventValue: '',
    };
    console.log('EventFire:', objData);
    dataLayer.push(objData);
  } catch (e) {}
}

// Variables
var isPassed = false;
var menu;

fetch('https://primate.diet/api/v1/content-menu')
  .then((data) => data.json())
  .then((res) => {
    menu = res.menu;
  });

// Observe
if (settings.observe) {
  let observer = new MutationObserver((mutations) => {
    for (let mutation of mutations) {
      for (let node of mutation.addedNodes) {
        if (!(node instanceof HTMLElement)) continue;

        // console.log(node);
        if (
          node.classList.contains('excluder') ||
          node.querySelector('.excluder')
        ) {
          if (!isHjInit && settings.hj) {
            isHjInit = true;
            try {
              (function (h, o, t, j, a, r) {
                h.hj =
                  h.hj ||
                  function () {
                    (h.hj.q = h.hj.q || []).push(arguments);
                  };
                h._hjSettings = { hjid: 1350427, hjsv: 6 };
                a = o.getElementsByTagName('head')[0];
                r = o.createElement('script');
                r.async = 1;
                r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
                a.appendChild(r);
              })(
                window,
                document,
                'https://static.hotjar.com/c/hotjar-',
                '.js?sv='
              );
              hj('event', 'menu_flow');
            } catch (e) {}
          }

          document
            .querySelector('.buttons-wrapper .col-ternary')
            .addEventListener('click', function (e) {
              if (!isPassed) {
                e.preventDefault();
                e.stopPropagation();
                init();
              }
            });

          if (isPassed) {
            isPassed = false;
            init();
          }
        }
        // Code Here
      }
    }
  });

  let demoElem = document.querySelector('#js-app');

  observer.observe(demoElem, { childList: true, subtree: true });
}

// Styles
const styles = `
  .lav-list {
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 28px;
    list-style: none;
    margin-top: 28px;
    margin-bottom: 0;
  }
  .lav-card {
    display: flex;
    border: 1px solid #F6F6F6;
    filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.1));
    border-radius: 5px;
    overflow: hidden;
    min-height: 270px;
    transition: 0.3s;
  }
  .lav-card_active {
    border: 1px solid #EAB713;
    filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.1));
  }
  .lav-card__image {
    width: 33%;
    flex-shrink: 0;
    line-height: 0;
  }
  .lav-card__image img {
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
  }
  .lav-card__info {
    padding: 18px;
    display: flex;
    flex-flow: column;
    width: 100%;
  }
  .lav-card__title {
    color: #1A1A17;
    font-weight: bold;
    font-size: 19px;
    line-height: 23px;
  }
  .lav-card__tags {
    display: flex;
    flex-wrap: wrap;
    margin-left: -2px;
    margin-right: -2px;
    margin-top: 24px;
    font-weight: bold;
    font-size: 11px;
    line-height: 1;
    text-transform: uppercase;
    margin-bottom: 18px;
  }
  .lav-card__tag {
    border-radius: 100px;
    padding: 4px 10px;
    margin: 2px;
    border-width: 1px;
    border-style: solid;
  }
  .lav-card__control {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #D1D1D1;
    padding-top: 18px;
    margin-top: auto;
  }
  .lav-card__choose {
    background: #26673E;
    border-radius: 100px;
    font-weight: bold;
    font-size: 13px;
    line-height: 1;
    text-transform: uppercase;
    color: #fff;
    padding: 7px 18px;
    border: none;
    outline: none;
    transition: 0.3s;
    cursor: pointer;
  }
  .lav-card__choose img {
    margin-right: 6px;
  }
  .lav-card__choose:hover {
    opacity: 0.7;
  }
  .lav-card__choose span {
    align-items: center;
  }
  .lav-card__choose-default {
    display: flex;
  }
  .lav-card__choose-active {
    display: none;
  }
  .lav-card__choose_active {
    background: #EAB713;
    color: #1A1A17;
  }
  .lav-card__choose_active .lav-card__choose-default {
    display: none;
  }
  .lav-card__choose_active .lav-card__choose-active {
    display: flex;
  }
  .lav-card__kcal {
    font-weight: bold;
    font-size: 15px;
    color: #1A1A17;
  }
  .header-step_original {
    display: none;
  }
  .buttons-wrapper_copy {
    margin-top: 20px;
    padding-top: 30px;
    border-top: 1px solid #D1D1D1;
  }
  .buttons-wrapper_copy + div {
    display: none;
  }
  @media (max-width: 1050px) {
    .lav-card {
      display: flex;
      flex-flow: column;
    }
    .lav-card__image {
      width: 100%;
    }
    .lav-card__tags {
      margin-top: 18px;
    }
  }
  @media (max-width: 992px) {
    .lav-card__title {
      font-size: 14px;
      line-height: 19px;
    }
    .lav-card__tags {
      font-size: 8px;
      line-height: 12px;
      margin-top: 12px;
      margin-bottom: 12px;
    }
  }
  @media (max-width: 580px) {
    .lav-list {
      grid-template-columns: 1fr;
      gap: 20px;
    }
  }
`;

const stylesEl = document.createElement('style');
stylesEl.innerHTML = styles;
document.body.appendChild(stylesEl);
/*** STYLES / end ***/

/********* Custom Code **********/
function init() {
  console.log('init func');
  if (!menu) {
    setTimeout(() => {
      init();
    }, 500);
    return false;
  }
  buildCards(menu[Object.keys(menu)[0]]);
  replaceHeader();
  replaceFooter();
  window.scrollTo(0, 0);
}

function countExclude() {
  let excludeList = [];
  document.querySelectorAll('.exclusion-item.active').forEach(function (item) {
    switch (item.innerText.trim()) {
      case 'Nie jem mięsa':
        excludeList = excludeList.concat([
          'M',
          'DR',
          'BR',
          'WW',
          'WP',
          'CL',
          'KN',
        ]);
        break;
      case 'Nie jem ryb':
        excludeList = excludeList.concat(['R', 'SK', 'MC']);
        break;
      case 'Nie jem produktów odzwierzęcych':
        excludeList = [
          ...excludeList,
          'M',
          'DR',
          'BR',
          'WW',
          'WP',
          'CL',
          'KN',
          'R',
          'SK',
          'MC',
          'L',
          'ML',
          'ZW',
          'J',
        ];
        break;
      case 'Nie jem produktów mlecznych':
        excludeList = excludeList.concat(['N', 'L', 'ML']);
        break;
      case 'Ograniczam gluten':
        excludeList = excludeList.concat(['G']);
        break;
      case 'Nie jem laktozy':
        excludeList = excludeList.concat(['L', 'ML']);
        break;
      default:
        break;
    }
  });

  console.log('excludeList', excludeList);

  return excludeList;
}

function buildCards(list) {
  const cardParentEl = document.createElement('ul');
  cardParentEl.classList.add('lav-list');
  document
    .querySelector('.creator-step.payment-step')
    .insertAdjacentElement('beforebegin', cardParentEl);

  const excludeList = countExclude();
  list.forEach((card) => {
    const cardEl = createCardEl(card, excludeList);
    if (cardEl) {
      document
        .querySelector('.lav-list')
        .insertAdjacentElement('beforeend', cardEl);
    }
  });
}

function createCardEl(item, excludeList) {
  const el = document.createElement('li');
  const isExludeItem = item.composition.tags.some((tag) => {
    return excludeList.includes(tag);
  });
  if (
    !item.image ||
    document.querySelectorAll('.lav-card').length >= 25 ||
    isExludeItem
  ) {
    return false;
  }
  el.classList.add('lav-card');
  el.innerHTML = `
    <div class='lav-card__image'>
      <img src='${item.image.medium}' />
    </div>
    <div class='lav-card__info'>
      <div class='lav-card__title'>${item.name}</div>
      <div class='lav-card__tags'></div>
      <div class='lav-card__control'>
        <div class='lav-card__kcal'>${
          item.macronutrients[Object.keys(item.macronutrients)[0]].kcal
        }&nbsp;kcal</div>
        <button class='lav-card__choose'>
          <span class='lav-card__choose-default'><img src='${
            settings.dir
          }/img/icon-plus.svg'> WYBIERAM</span>
          <span class='lav-card__choose-active'><img src='${
            settings.dir
          }/img/icon-check.svg'> WYBRANY</span>
        </button>
      </div>
    </div>
  `;

  item.tags.forEach((tag) => {
    const tagEl = document.createElement('div');
    tagEl.classList.add('lav-card__tag');
    tagEl.innerHTML = tag.name;
    tagEl.style.borderColor = tag.color;
    tagEl.style.color = tag.color;
    el.querySelector('.lav-card__tags').insertAdjacentElement(
      'beforeend',
      tagEl
    );
  });

  el.querySelector('.lav-card__choose').addEventListener('click', function (e) {
    e.preventDefault();
    if (!this.closest('.lav-card').classList.contains('lav-card_active')) {
      gaEvent('Click on Wybieram (Choose)');
    }
    this.closest('.lav-card').classList.toggle('lav-card_active');
    this.classList.toggle('lav-card__choose_active');
  });

  return el;
}

function replaceHeader() {
  const copyEl = document.querySelector('.header-step').cloneNode(true);
  document.querySelector('.header-step').classList.add('header-step_original');
  copyEl.classList.add('header-step_copy');
  copyEl.querySelector('img').src = settings.dir + '/img/header-monkey.png';
  copyEl.querySelector('h2').innerText = 'Wybierz dania, które lubisz';
  copyEl.querySelector('p').innerText =
    'Pomoże mi to zoptymalizować menu dla Ciebie';
  if (copyEl.querySelector('h3')) {
    copyEl.querySelector('h3').remove();
  }

  document
    .querySelector('.header-step')
    .insertAdjacentElement('beforebegin', copyEl);
}

function replaceFooter() {
  const copyEl = document.querySelector('.buttons-wrapper').cloneNode(true);
  document
    .querySelector('.buttons-wrapper')
    .classList.add('buttons-wrapper_original');
  copyEl.classList.add('buttons-wrapper_copy');
  copyEl.querySelector('.btn.prev').addEventListener('click', function (e) {
    e.preventDefault();
    removeCopy();
    // document
    //   .querySelector('.buttons-wrapper .col-ternary')
    //   .addEventListener('click', function (e) {
    //     if (!isPassed) {
    //       console.log('click prevent');
    //       e.preventDefault();
    //       e.stopPropagation();
    //       init();
    //     }
    //   });
  });
  copyEl.querySelector('.btn.next').addEventListener('click', function (e) {
    e.preventDefault();
    gaEvent('Click on Lecimy Dalej (Go on)');
    isPassed = true;
    document.querySelector('.buttons-wrapper_original .btn.next').click();
    removeCopy();
  });
  document
    .querySelector('.creator-step.payment-step')
    .insertAdjacentElement('afterbegin', copyEl);
}

function removeCopy() {
  if (document.querySelector('.buttons-wrapper_copy')) {
    document.querySelector('.buttons-wrapper_copy').remove();
  }
  if (document.querySelector('.header-step_copy')) {
    document.querySelector('.header-step_copy').remove();
  }
  if (document.querySelector('.lav-list')) {
    document.querySelector('.lav-list').remove();
  }
  if (document.querySelector('.header-step_original')) {
    document
      .querySelector('.header-step_original')
      .classList.remove('header-step_original');
    document
      .querySelector('.buttons-wrapper_original')
      .classList.remove('buttons-wrapper_original');
  }
}
