console.log('initExp');

/********* Settings **********/
const settings = {
  dir: 'https://flopsi69.github.io/crs/carid/search',
  clarity: true,
  observe: true,
};

//Hotjar
if (settings.clarity) {
  try {
    clarity('set', 'site_search', 'variant_1');
  } catch (e) {}
}

// Alalytic
function gaEvent(action, label) {
  if (!label) {
    label = '';
  }
  let device = 'Desktop';
  if (window.innerWidth < 992) {
    device = 'Mobile';
  }
  try {
    var objData = {
      event: 'event-to-ga',
      eventCategory: 'Exp: Site search ' + device,
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

        // console.log(node);

        if (node.classList.contains('mygarage-dd-container')) {
          if (node.querySelector('.mygarage-vehicle-title')) {
            localStorage.setItem('showSearch', 'yes');
          }
        }

        if (
          node.classList.contains('select-vehicle') &&
          node.closest('.gbox_portal')
        ) {
          setTimeout(() => {
            node.closest('.gbox_portal').classList.add('lav-add-popup');

            document
              .querySelector('.lav-add-popup .gbox_close')
              .addEventListener('click', function () {
                gaEvent(
                  'Clicks on the cross pictogramme',
                  'First select popup'
                );
              });

            for (let item of document.querySelectorAll(
              '.lav-add-popup .nav .link'
            )) {
              item.addEventListener('click', function () {
                gaEvent(
                  `Click on ${item.innerText} navigation button`,
                  'Popup: Select vehicle'
                );
              });
            }

            for (let item of document.querySelectorAll(
              '.lav-add-popup .select-vehicle-col'
            )) {
              item.addEventListener('click', function () {
                if (item.querySelector('.marker').innerText == '1') {
                  gaEvent(`Click on Year select`, 'Popup: Select vehicle');
                } else if (item.querySelector('.marker').innerText == '2') {
                  gaEvent(`Click on Make select`, 'Popup: Select vehicle');
                } else if (item.querySelector('.marker').innerText == '3') {
                  gaEvent(`Click on Model select`, 'Popup: Select vehicle');
                }
              });
            }

            document
              .querySelector('.lav-add-popup .select-vehicle-button')
              .addEventListener('click', function () {
                gaEvent(`Click on Go button`, 'Popup: Select vehicle');
              });
          }, 600);
        }
      }
    }
  });

  let demoElem = document.body;

  observer.observe(demoElem, { childList: true, subtree: true });
}

// Styles
const styles = `
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
    height: 32px;
    border: 1px solid rgba(54, 61, 71, 0.6);
    border-radius: 3px;
    box-sizing: border-box;
  }
  .lav-side__search-btn {
    width: 32px;
    height: 32px;
    min-width: 32px;
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
    padding-left: 44px;
    padding-right: 12px;
    flex-grow: 1;
    overflow: hidden;
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
    border: none;
    flex-shrink: 0;
    align-items: center;
    background: #d4252a;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    display: flex;
    justify-content: center;
    min-width: 40px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    width: 124px;
    margin-left: 5px;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    padding: 5px;
  }
  .lav-search__btn-brief {
    display: none;
  }
  .gbox_portal .select-vehicle {
    background: rgba(0,0,0,0.65);
    border-radius: 5px;
    padding: 30px;
  }
  .lav-add__caption {
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    margin-bottom: 20px;
    color: #FFFFFF;
    letter-spacing: 0.4px;
  }
  .lav-add-popup .gbox_close {
    top: 20px;
    right: 20px;
    opacity: 1;
  }
  @media(max-width: 1024px) {
    .lav-search__btn-brief {
      display: block;
    }
    .lav-search__btn-full {
      display: none;
    }
    .lav-search__btn-top {
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 0;
      width: 36px;
      height: 36px;
    }
    #dummy-search-input-for-preact-render .header-search-label {
      padding-left: 12px;
      height: 36px;
      padding-top: 5px;
      padding-bottom: 5px;
    }
    #dummy-search-input-for-preact-render .header-search-label:after {
      display: none;
    }
  }
  @media(max-width: 740px) {
    #dummy-search-input-for-preact-render {
      margin-top: 0;
      padding: 5px;
    }
    .lav-add__caption {
      font-size: 20px;
      line-height: 24px;
      padding: 50px 5px 0;
      margin-bottom: 10px;
    }
    .gbox_portal .select-vehicle {
      padding: 5px 7px;
    }
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
  if (localStorage.getItem('showSearch') == 'yes') {
    localStorage.removeItem('showSearch');
    document.querySelector('.header-search-label').click();
  }
  if (!localStorage.getItem('loadedFiredSearch')) {
    localStorage.setItem('loadedFiredSearch', 'yes');
    gaEvent('loaded');
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
      `<button class='lav-search__btn lav-search__btn-top'>
        <span class='lav-search__btn-full'>Search</span>
        <span class='lav-search__btn-brief'>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9659 11.2549H12.7559L17.7459 16.2549L16.2559 17.7449L11.2559 12.7549V11.9649L10.9859 11.6849C9.84586 12.6649 8.36586 13.2549 6.75586 13.2549C3.16586 13.2549 0.255859 10.3449 0.255859 6.75488C0.255859 3.16488 3.16586 0.254883 6.75586 0.254883C10.3459 0.254883 13.2559 3.16488 13.2559 6.75488C13.2559 8.36488 12.6659 9.84488 11.6859 10.9849L11.9659 11.2549ZM2.25586 6.75488C2.25586 9.24488 4.26586 11.2549 6.75586 11.2549C9.24586 11.2549 11.2559 9.24488 11.2559 6.75488C11.2559 4.26488 9.24586 2.25488 6.75586 2.25488C4.26586 2.25488 2.25586 4.26488 2.25586 6.75488Z" fill="#ffffff"/>
          </svg>
        </span>
      </button > `
    );

  setTimeout(() => {
    if (!document.querySelector('.lav-search__btn-top')) {
      document
        .querySelector('#dummy-search-input-for-preact-render')
        .insertAdjacentHTML(
          'beforeend',
          `<button class='lav-search__btn lav-search__btn-top'>
          <span class='lav-search__btn-full'>Search</span>
          <span class='lav-search__btn-brief'>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9659 11.2549H12.7559L17.7459 16.2549L16.2559 17.7449L11.2559 12.7549V11.9649L10.9859 11.6849C9.84586 12.6649 8.36586 13.2549 6.75586 13.2549C3.16586 13.2549 0.255859 10.3449 0.255859 6.75488C0.255859 3.16488 3.16586 0.254883 6.75586 0.254883C10.3459 0.254883 13.2559 3.16488 13.2559 6.75488C13.2559 8.36488 12.6659 9.84488 11.6859 10.9849L11.9659 11.2549ZM2.25586 6.75488C2.25586 9.24488 4.26586 11.2549 6.75586 11.2549C9.24586 11.2549 11.2559 9.24488 11.2559 6.75488C11.2559 4.26488 9.24586 2.25488 6.75586 2.25488C4.26586 2.25488 2.25586 4.26488 2.25586 6.75488Z" fill="#ffffff"/>
            </svg>
          </span>
        </button > `
        );
    }
  }, 1200);

  document
    .querySelector('.lav-search__btn-top')
    .addEventListener('click', function (e) {
      e.preventDefault();
      handleSearch();
    });

  document
    .querySelector('#dummy-search-input-for-preact-render')
    .addEventListener('click', function (e) {
      e.preventDefault();
      gaEvent('Click on Search input', 'Header. Search menu');
      handleSearch();
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
          gaEvent('Clicks on the search field', 'hamburger menu');
          handleSearch();
        });
    }
  }, 100);
}

function handleSearch() {
  // document.querySelector('.js-garage-header-menu .title').innerText ==
  //   'Select vehicle'
  if (!document.querySelector('.mygarage-vehicle-title')) {
    document
      .querySelector('.js-garage-header-menu .js-mygarage-open-create-popup')
      .click();
    let addNewInterval = setInterval(() => {
      if (!document.querySelector('.gbox_portal .select-vehicle')) return false;

      if (!document.querySelector('.lav-add__caption')) {
        document
          .querySelector('.gbox_portal .select-vehicle')
          .insertAdjacentHTML(
            'afterbegin',
            "<div class='lav-add__caption'>First select the vehicle that you need a part for</div>"
          );
      }

      clearInterval(addNewInterval);
    }, 400);
  } else {
    document.querySelector('.header-search-label').click();
  }
}
