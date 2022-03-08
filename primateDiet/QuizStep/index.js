console.log('initExp');

/********* Settings **********/
const settings = {
  dir: 'https://flopsi69.github.io/crs/primateDiet/QuizStep',
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
  
`;

const stylesEl = document.createElement('style');
stylesEl.innerHTML = styles;
document.body.appendChild(stylesEl);
/*** STYLES / end ***/

/********* Custom Code **********/
init();
function init() {
  console.log('init func');

  fetch('https://primate.diet/api/v1/content-menu')
    .then((data) => data.json())
    .then((res) => {
      buildCards(res.menu[Object.keys(res.menu)[0]]);
    });
}

function buildCards(list) {
  const cardParentEl = document.createElement('div');
  cardParentEl.classList.add('lav-list');
  document
    .querySelector('.creator-step.payment-step')
    .insertAdjacentElement('beforebegin', cardParentEl);

  list.forEach((card) => {
    const cardEl = createCardEl(card);
    document
      .querySelector('.lav-list')
      .insertAdjacentElement('beforeend', cardEl);
  });
}

function createCardEl(item) {
  const el = document.createElement('li');
  el.classList.add('lav-card');
  el.innerHTML = `
    <div class='lav-card__image'>
      <img src='${item.image.medium}' />
    </div>
    <div class='lav-card__info'>
      <div class='lav-card__title'>${item.name}</div>
      <div class='lav-card__tags'></div>
      <div class='lav-card__control'>
        <div class='lav-card__kcal'></div>
        <button class='lav-card__choose'>
          <span class='lav-card__choose-default'><img src='${settings.dir}/img/icon-plus.svg'> Choose</span>
          <span class='lav-card__choose-active'><img src='${settings.dir}/img/icon-check.svg'> Chosen</span>
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
    this.closest('lav-card').classList.toggle('lav-card_active');
    this.classList.toggle('lav-card__choose_active');
  });

  return el;
}
