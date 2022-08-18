console.log('initExp');

/********* Settings **********/
const settings = {
  dir: 'https://flopsi69.github.io/crs/carid/search',
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
  .lav-front #dummy-search-input-for-preact-render {
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
  }
  .lav-front .head-nav-subtitle.-with-mmy {
    display: none;
  }
  .lav-front .head-nav.-with-mmy, .lav-front .head-nav.-with-mmy .simple-slider-wrap, .simple-slider>.slide.-loaded img {
    height: 460px;
  }
  .lav-benefits {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
    font-size: 16px;
    line-height: 19px;
    color: #fff;
    text-align: left;
    padding-top: 7px;
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
    top: 0;
    width: 20px;
    height: 20px;
    background: url(${settings.dir}/img/comment.svg) center no-repeat;
    background-size: contain;
  }
  .lav-search {
    display: flex;
    height: 62px;
    position: relative;
  }
  .lav-search:before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 22px;
    width: 17.5px;
    height: 17.5px;
    background: url(${settings.dir}/img/search.svg) center no-repeat;
    background-size: contain;
  }
  .lav-search__input {
    background: #fff;
    border: 1px solid #757575;
    border-radius: 4px;
    box-sizing: border-box;
    cursor: pointer;
    flex-grow: 1;
    text-align: left;
    width: 100%;
    padding: 5px 56px;
    font-size: 15px;
    outline: none;
  }
  .lav-search__btn {
    padding: 22px 10px;
    width: 165px;
    border: none;
    flex-shrink: 0;
    align-items: center;
    background: #d4252a;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    display: flex;
    font: 500 18px/1.2 "Roboto","Arial","Helvetica",sans-serif;
    justify-content: center;
    min-width: 40px;
    text-align: center;
    text-transform: uppercase;
    margin-left: 10px;
    letter-spacing: 0.5px;
  }
  .lav-search__btn:hover {
    background: #be2126;
    text-decoration: none;
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
    margin-bottom: 0;
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
    cursor: pointer;
    transition: 0.35s;
  }
  .lav-toggler__item:not(.active):hover {
    opacity: 0.7;
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
    transform: translateY(-50%);
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
    left: 5px;
    top: 50%;
    transform: translateY(-50%);
    width: 9px;
    height: 9px;
    transition: 0.35s;
    border-radius: 50%;
    background-color: #fff;
    opacity: 0;
  }
  .lav-toggler__item.active:after {
    opacity: 1;
  }
  .lav-toggler__item {
  }
  .lav-search {
    display: none;
    cursor: pointer;
  }
  .lav-search.active {
    display: flex;
  }
  .lav-vehicle {
    display: none;
  }
  .lav-vehicle.active {
    display: block;
  }
  .lav-side__search {
    margin: 0 20px;
    border-top: 1px solid #f0f0f0;
    padding-top: 10px;
    margin-top: 5px;
  }
  .lav-side__search-inner {
    background: #E8E8E8;
    border-radius: 5px;
    padding: 5px;
    display: flex;
    cursor: pointer;
  }
  .lav-side__search-input {
    flex-grow: 1;
    padding: 5px 9px;
    font-size: 14px;
    line-height: 16px;
    height: 36px;
    border: 1px solid rgba(54, 61, 71, 0.6);
    border-radius: 3px;
    box-sizing: border-box;
  }
  .lav-side__search-btn {
    width: 36px;
    height: 36px;
    border: none;
    line-height: 0;
    background: #D4252A;
    border-radius: 5px;
    margin-left: 2px;
    flex-shrink: 0;
    cursor: pointer;
  }
  .lav-side__search-btn:hover {
    background: #be2126;
    text-decoration: none;
  }
  .left-dd-vehicle-spacer.js-left-menu-garage {
    margin-top: 0;
  }
  .left-dd-vehicle-spacer.js-left-menu-garage:before {
    display: none;
  }
  #dummy-search-input-for-preact-render {
    display: flex;
    position: relative;
    background: #EAEAEA;
    border-radius: 5px;
    padding: 10px;
    margin-top: -5px;
  }
  #dummy-search-input-for-preact-render .header-search-label {
    // padding-top: 10px;
    // padding-bottom: 10px;
    padding-left: 44px;
    padding-right: 0;
    flex-grow: 1;
  }
  #dummy-search-input-for-preact-render .header-search-label:before {
    font-size: 14px;
    line-height: 16px;
  }
  #dummy-search-input-for-preact-render .header-search-label:after {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 13px;
    right: initial;
    width: 17.5px;
    height: 17.5px;
    background: url(${settings.dir}/img/search.svg) center no-repeat;
    background-size: contain;
  }
  .lav-search__btn-top {
    width: 124px;
    margin-left: 5px;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    padding: 5px;
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
    handleJumb();
  }

  addSidebarSearch();
  changeSearch();
}

function changeSearch() {
  if (!document.querySelector('#dummy-search-input-for-preact-render'))
    return false;

  document
    .querySelector('#dummy-search-input-for-preact-render')
    .insertAdjacentHTML(
      'beforeend',
      "<button class='lav-search__btn lav-search__btn-top'>Search</button>"
    );

  document
    .querySelector('.lav-search__btn-top')
    .addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector('.header-search-label').click();
    });
}

function handleJumb() {
  let togglerEl = `
    <div class='lav-jumb'>
      <div class='lav-toggler'>
        <div class='lav-toggler__item active'>Search</div>
        <div class='lav-toggler__item'>Select a vehicle</div>
      </div>

      <div class='lav-search active'>
        <input class='lav-search__input' type='text' placeholder='Search by Make Model Year, Product Type, Part Number, or Brand...' />
        <button class='lav-search__btn'>Search</button>
      </div>

      <div class='lav-vehicle'></div>
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
    .insertAdjacentHTML('beforebegin', togglerEl);

  document
    .querySelector('.lav-vehicle')
    .insertAdjacentElement(
      'beforeend',
      document.querySelector('.js-main-select-bar-holder')
    );

  document.querySelector('.lav-front .head-nav-title').innerText =
    'The biggest assortment of car details';

  document
    .querySelector('.lav-front .head-nav-title')
    .insertAdjacentHTML('afterend', benefitsEl);

  for (let item of document.querySelectorAll('.lav-toggler__item')) {
    item.addEventListener('click', function () {
      if (item.classList.contains('active')) {
        return false;
      }

      if (item.innerText == 'Search') {
        document.querySelector('.lav-search').classList.add('active');
        document.querySelector('.lav-vehicle').classList.remove('active');
      } else {
        document.querySelector('.lav-vehicle').classList.add('active');
        document.querySelector('.lav-search').classList.remove('active');
      }
      document
        .querySelector('.lav-toggler__item.active')
        .classList.remove('active');
      item.classList.add('active');
    });
  }

  document.querySelector('.lav-search').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.header-search-label').click();
  });
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
    if (document.querySelector('.lav-side__search')) return false;

    if (
      document.querySelectorAll('.panel-content .panel-content-spacing ul li')
        .length
    ) {
      clearInterval(hambInterval);

      document.querySelector('.js-left-menu-garage').insertAdjacentHTML(
        'beforebegin',
        `<li class="lav-side__search">
          <div class='lav-side__search-inner'>
            <input class='lav-side__search-input' type='text' placeholder='Search...' />
            <button class='lav-side__search-btn'>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9659 11.2549H12.7559L17.7459 16.2549L16.2559 17.7449L11.2559 12.7549V11.9649L10.9859 11.6849C9.84586 12.6649 8.36586 13.2549 6.75586 13.2549C3.16586 13.2549 0.255859 10.3449 0.255859 6.75488C0.255859 3.16488 3.16586 0.254883 6.75586 0.254883C10.3459 0.254883 13.2559 3.16488 13.2559 6.75488C13.2559 8.36488 12.6659 9.84488 11.6859 10.9849L11.9659 11.2549ZM2.25586 6.75488C2.25586 9.24488 4.26586 11.2549 6.75586 11.2549C9.24586 11.2549 11.2559 9.24488 11.2559 6.75488C11.2559 4.26488 9.24586 2.25488 6.75586 2.25488C4.26586 2.25488 2.25586 4.26488 2.25586 6.75488Z" fill="#ffffff"/>
                </svg>
              </button>
            </div>
          </li>`
      );

      document
        .querySelector('.lav-side__search-inner')
        .addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector('.header-search-label').click();
        });

      // document
      //   .querySelector('.panel-content .panel-content-spacing ul .lav-oem-link')
      //   .addEventListener('click', function (e) {
      //     e.preventDefault();
      //     gaEvent('Clicks on the OEM parts section', 'Hamburger menu');
      //   });
    }
  }, 100);
}
