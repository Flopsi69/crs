console.log('initExp');

/********* Settings **********/
const settings = {
  dir: 'https://flopsi69.github.io/crs/nebula/btnCopy',
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

// Alalytic
function gaEvent(action, label) {
  if (!label) {
    label = '';
  }
  try {
    var objData = {
      event: 'gaEv',
      eventCategory: 'Experiment — HP button text',
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
const jumbInterval = setInterval(() => {
  if (
    document.querySelector('.jumb__btn') &&
    document.querySelector('.plan__btn')
  ) {
    clearInterval(jumbInterval);
    init();
  }
}, 120);

function init() {
  console.log('init');
  document.querySelector('.jumb__btn').innerText = 'Shop DNA Tests';

  document.addEventListener('click', function (e) {
    if (e.target.classList.contains('jumb__btn')) {
      gaEvent('Click button "Shop DNA Tests"');
    }
    if (e.target.cloest.contains('plan__btn')) {
      gaEvent(
        'Add to cart',
        btn.closest('.plan').querySelector('.plan__title').innerText
      );
    }
  });
}
