console.log('initExp');

/********* Settings **********/
const settings = {
  dir: 'https://flopsi69.github.io/crs/carid/oem',
  clarity: false,
  observe: false,
};

//Hotjar
if (settings.clarity) {
  try {
    clarity('set', 'new_navigation_flow_desktop', 'variant_1');
  } catch (e) {}
}

// Alalytic
function gaEvent(action, label) {
  if (!label) {
    label = '';
  }
  try {
    var objData = {
      event: 'event-to-ga',
      eventCategory: 'Exp: New navigation flow',
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
  .lav-benefits {
    display: flex;
    margin-bottom: 40px;
  }
  .lav-benefits__item {
    position: relative;
    padding-left: 30px;
  }
  .lav-benefits__item + .lav-benefits__item {
    margin-left: 50px;
  }
  .lav-benefits__item:before {
    content: '';
    position: absolute;
    left: 0;
    width: 20px;
    height: 20px;
    
  }
  .lav-benefits__item {
  }
  .lav-benefits__item {
  }
  .lav-jumb {
    background: #24282F;
    border-radius: 5px;
    max-width: 1100px;
    margin: auto;
    padding: 40px;
    box-sizing: border-box;
  }
  .head-nav-inner .lav-jumb .select-vehicle-spacer {
    margin-bototm: 0;
  }
  .lav-toggler {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  }
  .lav-toggler__item {
    position: relative;
    transition: 0.35s;
    padding-left: 27px;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: #A4A4A4;
  }
  .lav-toggler__item.active {
    font-weight: 700;
    color: #FFFFFF;
  }
  .lav-toggler__item +  .lav-toggler__item {
    margin-left: 30px;
  }
  .lav-toggler__item:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(50%);
    width: 17px;
    height: 17px;
    transition: 0.35s;
    border-radius: 50%;
    border: 1px solid #D9D9D9;
  }
  .lav-toggler__item.active:before {
    border-color: #fff;
  }
  .lav-toggler__item:after {
    content: '';
    position: absolute;
    left: 4px;
    top: 50%;
    transform: translate(50%);
    width: 9px;
    height: 9px;
    transition: 0.35s;
    border-radius: 50%;
    backgorund-color: 50%;
    opacity: 0;
  }
  .lav-toggler__item.active:after {
    opacity: 1;
  }
  .lav-toggler__item {
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
  // if (!localStorage.getItem('loadedFired')) {
  //   localStorage.setItem('loadedFired', 'yes');
  //   gaEvent('loaded');
  // }

  if (location.pathname == '/') {
    document.querySelector('body').classList.add('lav-front');
  }

  handleJumb();
  addSidebarSearch();
}

function handleJumb() {
  let togglerEl = `
    <div class='lav-toggler'>
      <div class='lav-toggler__item active'>Search</div>
      <div class='lav-toggler__item'>Select a vehicle</div>
    </div>
  `;

  let benefitsEl = `
    <div class='lav-benefits'>
      <div class='lav-benefits__item'>
        Guaranteed fitment <br> to your car
      </div>
      <div class='lav-benefits__item'>
      17 Million <br>listed products
      </div>
      <div class='lav-benefits__item'>
      Free US shipping
      </div>
    </div>
  `;

  document
    .querySelector('.js-main-select-bar-holder')
    .insertAdjacentHTML('beforebegin', `<div class='lav-jumb'></div>`);

  document
    .querySelector('.lav-jumb')
    .insertAdjacentHTML('beforeend', togglerEl);

  document
    .querySelector('.lav-jumb')
    .insertAdjacentElement(
      'beforeend',
      document.querySelector('.js-main-select-bar-holder')
    );

  document.querySelector('.lav-front .head-nav-title').innerText =
    'The biggest assortment of car details';

  document
    .querySelector('.lav-front .head-nav-title')
    .insertAdjacentElement('afterend', benefitsEl);
}

function addSidebarSearch() {
  document.addEventListener('click', function (e) {
    if (e.target.classList.contains('js-panel-back')) {
      handleSidebar();
    }
  });

  document
    .querySelector('.js-hamburger')
    .addEventListener('click', handleSidebar);
}

function handleSidebar() {
  var hambInterval = setInterval(() => {
    if (document.querySelector('.lav-oem-side-link')) return false;

    if (
      document.querySelectorAll('.panel-content .panel-content-spacing ul li')
        .length
    ) {
      clearInterval(hambInterval);

      document
        .querySelector('.panel-content .panel-content-spacing ul')
        .insertAdjacentHTML(
          'afterbegin',
          '<li><span class="lav-oem-link lav-oem-side-link js-left-dd-ajax left-dd-title -arrow -icon" style="background-image: url(/images/pages/dep-icons/auto-repair-parts.svg);"><span class="left-dd-main hover-item">OEM Parts</span></span></li>'
        );

      document
        .querySelector('.panel-content .panel-content-spacing ul .lav-oem-link')
        .addEventListener('click', function (e) {
          e.preventDefault();
          gaEvent('Clicks on the OEM parts section', 'Hamburger menu');
        });
    }
  }, 100);
}
