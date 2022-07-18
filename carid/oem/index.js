console.log('initExp');

/********* Settings **********/
const settings = {
  dir: 'https://flopsi69.github.io/crs/carid/oem',
  clarity: true,
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
  .head-dd-main {
    padding-left: 12px;
    padding-right: 12px;
  }
  .lav-main .ptype-grid.-col-9 {
    min-width: 85%;
  }
  .ptype-grid .lav-oem-link, .lav-label-oem {
    positon: reliative;
    overflow: visible;
  }
  .ptype-grid .lav-oem-link:after, .lav-label-oem:after {
    content: 'OEM';
    transform: translateY(-40%);
    position: absolute;
    right: 0;
    top: 0;
    background: #62AE50;
    border-radius: 4px;
    padding: 2px 4px;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #fff;
  }
  .lav-label-oem:after {
    transform: none;
    right: 8px;
    top: 10px;
  }
  .lav-oem-parts .main-select-bar-h .my-garage-line-vehicles.hide-arrow::after {
    display: none;
  }

  .lav-oem-parts .main-select-bar-h .js-my-garage-dd-content .history-add-vehicle-block.js-mygarage-open-create-popup, .lav-oem-parts .main-select-bar-h .js-my-garage-dd-content .my-garage-btn-holder {
    display: none;
  }

  .lav-modal {
    position: fixed;
    display: none;
    align-items: center;
    justify-content: center;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 99999;
    background: rgba(17, 17, 17, 0.75);
    padding: 15px;
  }

  .lav-modal.active {
    display: flex;
    cursor: pointer;
  }

  .lav-modal__inner {
    position: relative;
    background: #FFFFFF;
    text-align: center;
    padding: 40px 60px;
    max-width: 770px;
    width: 100%;
    box-sizing: border-box;
    color: #111111;
    cursor: auto;
  }

  .lav-modal__title { 
    font-weight: 500;
    font-size: 24px;
    line-height: 34px;
   }
  .lav-modal__title span { 
    white-space: nowrap;
  }
  .lav-modal__caption { 
    margin-top: 20px;
    font-size: 15px;
    line-height: 24px;
   }
  .lav-modal__actions { 
    display: flex;
    margin-top: 30px;
  }
  .lav-modal__btn { 
    flex: 1;
    transition: 0.35s;
  }
  .lav-modal__market { 
    background: #068922;
  }
  .lav-modal__choose { 
    background: #363D47;
    margin-left: 20px
  }
  .lav-modal__close {
    position: absolute;
    top: -48px;
    right: 0;
    cursor: pointer;
    transition: 0.35s;
  }
  .lav-modal__close:hover {
    opacity: 0.65;
  }
  .lav-oem-parts .main-select-bar-h .mygarage-dd-container.-empty {
    display: none;
  }
  @media(max-width: 992px) {
    .lav-modal__title br {
      display: none;
    }
    .gbox .js-mygarage-open-create-popup {
      display: none;
    }
    .lav-modal__title span {
      white-space: normal;
    }
    .lav-modal__inner {
      padding: 20px;
    }
    .lav-modal__caption {
      margin-top: 10px;
    }
    .lav-modal__actions {
      margin-top: 20px;
      display: block;
    }
    .lav-modal__btn {
      width: 100%;
      font-weight: 600;
    }
    .lav-modal {
      padding: 30px;
    }
    .lav-modal__choose {
      margin-left: 0;
      margin-top: 20px;
    }
  }
`;

const stylesEl = document.createElement('style');
stylesEl.innerHTML = styles;
document.body.appendChild(stylesEl);
/*** STYLES / end ***/

/********* Custom Code **********/
init();
var isAddedVehicleEvents = false;
function init() {
  gaEvent('loaded');
  if (location.pathname == '/oem-parts.html') {
    initModal();
    document.querySelector('body').classList.add('lav-oem-parts');
    if (localStorage.getItem('isNotOem')) {
      openModal(localStorage.getItem('isNotOem'));
      localStorage.removeItem('isNotOem');
    }

    addGarageEvents();

    setTimeout(() => {
      document
        .querySelector('.select-vehicle-button.-after-selects')
        .addEventListener('click', function () {
          gaEvent('Clicks on the YMM GO button');
        });

      for (let item of document.querySelectorAll('.select-vehicle-col')) {
        item.addEventListener('click', function () {
          const value =
            item.querySelector('.marker').innerText == '1'
              ? 'Year'
              : item.querySelector('.marker').innerText == '2'
              ? 'Make'
              : 'Model';
          gaEvent('Clicks on the YMM input', value);
        });
      }

      for (let item of document.querySelectorAll('.ptype-grid .li')) {
        item.addEventListener('click', function () {
          gaEvent('Clicks on product categories OEM ' + item.innerText);
        });
      }
    }, 1500);
  }

  if (location.pathname == '/') {
    document.querySelector('body').classList.add('lav-main');
  }
  console.log('init');

  addNavItems();

  for (let item of document.querySelectorAll('.lav-oem-link')) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      if (item.closest('.header-menu-wrapper')) {
        gaEvent('Clicks on the OEM parts section', 'Header menu');
      }

      if (item.closest('.ptype-grid')) {
        gaEvent('Clicks on the OEM parts section', 'Product categories block');
      }

      handleOemRouter();
    });
  }

  setTimeout(() => {
    if (document.querySelector('.main-select-bar-h .my-garage-line-vehicles')) {
      if (
        location.pathname == '/oem-parts.html' &&
        (document.querySelector('.main-select-bar-h .my-garage-line-vehicles')
          .innerText == '0' ||
          !document.querySelector('.main-select-bar-h .my-garage-line-vehicles')
            .innerText)
      ) {
        document
          .querySelector('.main-select-bar-h .my-garage-line-vehicles')
          .classList.add('hide-arrow');
      } else {
        document
          .querySelector('.main-select-bar-h .my-garage-line-vehicles')
          .classList.remove('hide-arrow');
      }
    }
  }, 1000);

  if (
    location.pathname.includes('-oem-parts') &&
    document.querySelector('.ptype-inner-wrap .item i') &&
    document
      .querySelector('.ptype-inner-wrap .item i')
      .getAttribute('style')
      .includes('oem-parts.svg')
  ) {
    if (window.outerWidth > 992) {
      document
        .querySelector('.ptype-inner-wrap .item i')
        .setAttribute(
          'style',
          "background-image:url('/images/pages/dep-icons/repair-parts.png'),url('/images/pages/dep-icons/auto-repair-parts.svg')"
        );

      document
        .querySelector('.ptype-inner-wrap .item')
        .classList.add('lav-label-oem');

      document.querySelector('.ptype-inner-wrap .item').innerHTML = document
        .querySelector('.ptype-inner-wrap .item')
        .innerHTML.replace('Oem', 'OEM');
    }
  }
}

function addGarageEvents() {
  if (isAddedVehicleEvents) return false;

  if (document.querySelectorAll('.my-garage-line .js-link-opener').length) {
    isAddedVehicleEvents = true;

    if (window.outerWidth < 992) {
      document.addEventListener('click', function (e) {
        if (
          e.target.closest('.mygarage-dd-container') &&
          e.target.closest('.gbox') &&
          e.target.classList.contains('js-link-opener') &&
          !e.target.classList.contains('lav-link-intercept')
        ) {
          e.preventDefault();

          e.target.classList.add('lav-link-intercept');

          var link = e.target.href.replace('accessories', 'oem-parts');

          fetch(link)
            .then((res) => res.text())
            .then((data) => {
              if (data.includes('<title>404 Not Found</title>')) {
                openModal(e.target);
              } else {
                location.href = link;
              }
            });
        }
      });
    } else {
      for (let item of document.querySelectorAll(
        '.my-garage-line .js-link-opener'
      )) {
        item.addEventListener('click', function (e) {
          if (!item.classList.contains('lav-link-intercept')) {
            e.preventDefault();

            item.classList.add('lav-link-intercept');

            var link = item.href.replace('accessories', 'oem-parts');

            fetch(link)
              .then((res) => res.text())
              .then((data) => {
                if (data.includes('<title>404 Not Found</title>')) {
                  openModal(item);
                } else {
                  location.href = link;
                }
              });
          }
        });
      }
    }

    return false;
  }

  setTimeout(addGarageEvents, 1000);
  setTimeout(addGarageEvents, 1500);
  setTimeout(addGarageEvents, 2000);
  setTimeout(addGarageEvents, 2500);
}

function handleOemRouter() {
  if (
    document.querySelector('.header-top .js-my-garage-counter').innerText ==
      '0' ||
    !document.querySelector('.header-top .js-my-garage-counter').innerText
  ) {
    location.href = '/oem-parts.html';
    return false;
  }

  var link = document
    .querySelector('.js-link-opener.-main')
    .href.replace('accessories', 'oem-parts');

  fetch(link)
    .then((res) => res.text())
    .then((data) => {
      if (data.includes('<title>404 Not Found</title>')) {
        localStorage.setItem(
          'isNotOem',
          document.querySelector('.js-link-opener.-main').innerText
        );
        location.href = '/oem-parts.html';
      } else {
        location.href = link;
      }
      console.log();
    });
}

function addNavItems() {
  document
    .querySelector('.js-head-depts')
    .insertAdjacentHTML(
      'afterbegin',
      '<li class="item lav-oem-link"><a class="head-dd-main" href="#">OEM Parts</a></li>'
    );

  if (location.pathname == '/') {
    document
      .querySelector('.body-bg-type1 .ptype-grid')
      .insertAdjacentHTML(
        'afterbegin',
        '<li class="li lav-oem-link"><img class="ptype-grid-img -departments lazy-loaded -no-touch" src="https://images.carid.com/pages/dep-icons/repair-parts.png"><a class="ptype-grid-a -simple-title -departments" href="#">OEM Parts</a></li>'
      );
  }

  document.addEventListener('click', function (e) {
    if (e.target.classList.contains('js-panel-back')) {
      handleSidebar();
    }
  });

  document
    .querySelector('.js-hamburger')
    .addEventListener('click', handleSidebar);

  var oemPartsCategories = `
    <div class="tab">
      <ul class="ptype-grid -col-5 -tile"><li class="li" data-qty="(62,583)" data-lazy-load-enabled="1"><img class="ptype-grid-img lazy-loaded -no-touch" src="https://ic.carid.com/icons/oem-engine-components_ic_5.jpg" data-src="https://ic.carid.com/icons/oem-engine-components_ic_5.jpg" alt="OEM Engine &amp; Components" style="opacity: 1;"><a class="ptype-grid-a -descr-outer" href="/oem-engine-components.html" data-descr="Turbos, Camshafts, Air Filters"><b class="ptype-grid-title">OEM Engine &amp; Components</b></a></li><li class="li" data-qty="(9,145)" data-lazy-load-enabled="1"><img class="ptype-grid-img lazy-loaded -no-touch" src="https://ic.carid.com/icons/oem-transmission-drivetrain_ic_5.jpg" data-src="https://ic.carid.com/icons/oem-transmission-drivetrain_ic_5.jpg" alt="OEM Transmission &amp; Drivetrain" style="opacity: 1;"><a class="ptype-grid-a -descr-outer" href="/oem-transmission-drivetrain.html" data-descr="Clutches, Pumps, Axles, Hubs"><b class="ptype-grid-title">OEM Transmission &amp; Drivetrain</b></a></li><li class="li" data-qty="(48,389)" data-lazy-load-enabled="1"><img class="ptype-grid-img lazy-loaded -no-touch" src="https://ic.carid.com/icons/oem-brakes-steering-suspension_ic_5.jpg" data-src="https://ic.carid.com/icons/oem-brakes-steering-suspension_ic_5.jpg" alt="OEM Brakes, Steering &amp; Suspension" style="opacity: 1;"><a class="ptype-grid-a -descr-outer" href="/oem-brakes-steering-suspension.html" data-descr="Brakes, Pumps, Tie Rods, Struts"><b class="ptype-grid-title">OEM Brakes, Steering &amp; Suspension</b></a></li><li class="li" data-qty="(11,955)" data-lazy-load-enabled="1"><img class="ptype-grid-img lazy-loaded -no-touch" src="https://ic.carid.com/icons/oem-lighting_ic_5.jpg" data-src="https://ic.carid.com/icons/oem-lighting_ic_5.jpg" alt="OEM Lighting" style="opacity: 1;"><a class="ptype-grid-a -descr-outer" href="/oem-lighting.html" data-descr="Headlights, Tail &amp; Fog Lights"><b class="ptype-grid-title">OEM Lighting</b></a></li><li class="li" data-qty="(43,866)" data-lazy-load-enabled="1"><img class="ptype-grid-img lazy-loaded -no-touch" src="https://ic.carid.com/icons/oem-ignition-electrical_ic_5.jpg" data-src="https://ic.carid.com/icons/oem-ignition-electrical_ic_5.jpg" alt="OEM Ignition &amp; Electrical" style="opacity: 1;"><a class="ptype-grid-a -descr-outer" href="/oem-ignition-electrical.html" data-descr="Spark Plugs, Starters, Switches"><b class="ptype-grid-title">OEM Ignition &amp; Electrical</b></a></li><li class="li" data-qty="(5,328)" data-lazy-load-enabled="1"><img class="ptype-grid-img lazy-loaded -no-touch" src="https://ic.carid.com/icons/oem-wheels-tires_ic_5.jpg" data-src="https://ic.carid.com/icons/oem-wheels-tires_ic_5.jpg" alt="OEM Wheels &amp; Tires" style="opacity: 1;"><a class="ptype-grid-a -descr-outer" href="/oem-wheels-tires.html" data-descr="Wheels, Covers, Lug Nuts"><b class="ptype-grid-title">OEM Wheels &amp; Tires</b></a></li><li class="li" data-qty="(261,521)" data-lazy-load-enabled="1"><img class="ptype-grid-img lazy-loaded -no-touch" src="https://ic.carid.com/icons/oem-interior-parts_ic_5.jpg" data-src="https://ic.carid.com/icons/oem-interior-parts_ic_5.jpg" alt="OEM Interior Parts" style="opacity: 1;"><a class="ptype-grid-a -descr-outer" href="/oem-interior-parts.html" data-descr="Floor Mats, Seats, Pedals, Audio"><b class="ptype-grid-title">OEM Interior Parts</b></a></li><li class="li" data-qty="(232,755)" data-lazy-load-enabled="1"><img class="ptype-grid-img lazy-loaded -no-touch" src="https://ic.carid.com/icons/oem-exterior-body-parts_ic_5.jpg" data-src="https://ic.carid.com/icons/oem-exterior-body-parts_ic_5.jpg" alt="OEM Exterior &amp; Body Parts" style="opacity: 1;"><a class="ptype-grid-a -descr-outer" href="/oem-exterior-body-parts.html" data-descr="Doors, Fenders, Roofs, Grilles"><b class="ptype-grid-title">OEM Exterior &amp; Body Parts</b></a></li></ul>
    </div>
  `;

  if (location.pathname == '/') {
    document
      .querySelector('.js-nav-category-spoiler .link:first-child')
      .insertAdjacentHTML('afterend', '<div class="link">OEM Parts</div>');

    document
      .querySelector('.js-nav-category-spoiler .link:nth-child(2)')
      .addEventListener('click', function () {
        gaEvent(
          'Clicks on the OEM parts section',
          'Product categories block of the home page menu'
        );
      });

    document
      .querySelector('.js-nav-category-spoiler + .content .tab:first-child')
      .insertAdjacentHTML('afterend', oemPartsCategories);
  }
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
          handleOemRouter();
        });
    }
  }, 100);
}

function initModal() {
  const modalEl = `
  <div class='lav-modal'>
    <div class='lav-modal__inner'>
      <div class='lav-modal__close'>
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.6001 9.5001L18.8001 1.3001C19.1001 1.0001 19.1001 0.500098 18.8001 0.200098C18.5001 -0.0999023 18.0001 -0.0999023 17.7001 0.200098L9.5001 8.4001L1.3001 0.200098C1.0001 -0.0999023 0.500098 -0.0999023 0.200098 0.200098C-0.0999023 0.500098 -0.0999023 1.0001 0.200098 1.3001L8.4001 9.5001L0.200098 17.7001C-0.0999023 18.0001 -0.0999023 18.5001 0.200098 18.8001C0.400098 18.9001 0.600098 19.0001 0.700098 19.0001C0.800098 19.0001 1.1001 18.9001 1.2001 18.8001L9.4001 10.6001L17.6001 18.8001C17.7001 18.9001 17.9001 19.0001 18.1001 19.0001C18.3001 19.0001 18.5001 18.9001 18.6001 18.8001C18.9001 18.5001 18.9001 18.0001 18.6001 17.7001L10.6001 9.5001Z" fill="#ABABAB"/>
        </svg>
      </div>
      <div class='lav-modal__title'>Unfortunately we have no OEM parts for the <span></span></div>
      <div class='lav-modal__caption'>We add new products on a daily basis though, so please check again in the near future</div>
      <div class='lav-modal__actions'>
        <button class='simple-btn lav-modal__btn lav-modal__market'>Shop aftermarket products</button>
        <button class='simple-btn lav-modal__btn lav-modal__choose'>Choose other vehicle </button>
      </div>
    </div>
  </div>
`;

  document.querySelector('body').insertAdjacentHTML('beforeend', modalEl);

  if (document.querySelector('.js-link-opener.-main')) {
    document.querySelector('.lav-modal__title span').innerText =
      document.querySelector('.js-link-opener.-main').innerText;
  }

  document
    .querySelector('.lav-modal__choose')
    .addEventListener('click', function (e) {
      e.preventDefault();
      closeModal();
      gaEvent("Clicks on buttons 'Choose other vehicle'");
      // if (
      //   document.querySelector(
      //     '.lav-oem-parts .select-vehicle-content-spacer .select-vehicle-col .value'
      //   ).innerText
      // ) {
      // for (let item of document.querySelectorAll(
      //   '.lav-oem-parts .select-vehicle-content-spacer .select-vehicle-col'
      // )) {
      //   item.querySelector('.main-selector').classList.remove('-selected');
      //   item.querySelector('.value').innerText = '';
      // }
      // }
    });

  document
    .querySelector('.lav-modal__market')
    .addEventListener('click', function (e) {
      e.preventDefault();
      gaEvent('Clicks on buttons Shop aftermarket products');
      if (document.querySelector('.lav-link-intercept')) {
        document.querySelector('.lav-link-intercept').click();
      } else {
        document.querySelector('.js-link-opener.-main').click();
      }
      closeModal();
    });

  document.querySelector('.lav-modal').addEventListener('click', function (e) {
    if (e.target.classList.contains('lav-modal')) {
      closeModal();
    }
  });

  document
    .querySelector('.lav-modal__close')
    .addEventListener('click', function () {
      closeModal();
    });
}

function openModal(item) {
  document.querySelector('.lav-modal').classList.add('active');
  if (item) {
    document.querySelector('.lav-modal__title span').innerText =
      typeof item == 'string' ? item : item.innerText;
  }
}

function closeModal() {
  document.querySelector('.lav-modal').classList.remove('active');
  if (document.querySelector('.lav-link-intercept')) {
    document
      .querySelector('.lav-link-intercept')
      .classList.remove('lav-link-intercept');
  }
}
