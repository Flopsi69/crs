/*** Analytics insert start ***/

// try {
//   (function (h, o, t, j, a, r) {
//     h.hj =
//       h.hj ||
//       function () {
//         (h.hj.q = h.hj.q || []).push(arguments);
//       };
//     h._hjSettings = { hjid: 2196497, hjsv: 6 };
//     a = o.getElementsByTagName('head')[0];
//     r = o.createElement('script');
//     r.async = 1;
//     r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
//     a.appendChild(r);
//   })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
//   window.hj =
//     window.hj ||
//     function () {
//       (hj.q = hj.q || []).push(arguments);
//     };
//   hj('trigger', 'Cart_Clearpay');
// } catch (e) {}

// function gaEvent(action) {
//   try {
//     dataLayer.push({
//       event: 'event-to-ga',
//       eventCategory: 'Exp - Cart Clearpay',
//       eventAction: action
//     });
//   } catch (e) {}
// }
// gaEvent('loaded');

/*** Analytics insert -end- ***/

const REPO_DIR = 'https://flopsi69.github.io/crs/depositPhotos/licenses';

/*** STYLES insert start ***/

let stylesList = `
 
  @media screen and (min-width: 1441px) {
    .file-thumb__image-box_label .file-thumb__image_h {
      max-height: 430px!important;
    }
    .file-view-upgrade__info-box .file-view-info {
      margin: 12px auto;
    }
    .file-view-upgrade__purchase-box {
      padding-left: 20px!important;
      padding-right: 20px!important;
    }
    .file-view-page-upgrade_vertical .file-view-upgrade__content-box {
      grid-template-rows: 1fr auto;
    }
    .file-view-upgrade__top-box { padding: 0!important; }
    .file-view-page-upgrade_image .file-view-upgrade__content-box {
      max-width: 100%;
    }
    .file-view-upgrade__content-box {
      grid-template-areas:
          'thumb purchase'
          'info purchase'!important;
    }
    .file-view-upgrade__thumb-box {
      max-width: 100%;
      margin-bottom: 5px;
    }
    .file-view-upgrade__purchase-box {
      border-radius: 0;
    }
  }

  .price-table-upgrade__content {
    display: none;
  }
  .lav-licenses {
    margin-bottom: 30px;
  }
  .lav-license {
    position: relative;
    display: flex;
    padding: 16px 25px 20px 35px;
    border-radius: 6px;
    border: 3px solid transparent;
    transition: 0.35s;
    cursor: pointer;
  }
  .lav-license:before {
    content: '';
    position: absolute;
    left: 10px;
    top: 42px;
    border-radius: 50%;
    width: 11px;
    height: 11px;
    border: 2px solid #5499F5
  }
  .lav-license_active:after {
    content: '';
    position: absolute;
    left: 15px;
    top: 47px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #5499F5;
  }
  .lav-license_active {
    background: #E8F0F9;
    border: 3px solid #B7D9FF;
    // pointer-events: none;
  }
  .lav-license__label img {
    width: 50px;
    margin-top: 18px;
  }
  .lav-license__info {
    margin-left: 18px;
  }
  .lav-license__title {
    font-weight: 800;
    font-size: 15px;
    margin-bottom: 7px;
    line-height: 1.2;
    color: #3C3C3C;
  }
  .lav-license__list {
    font-size: 12px;
    line-height: 1.2;
    color: #3C3C3C;
  }
  .lav-license__item {
    position: relative;
    padding-left: 18px;
  }
  .lav-license__item + .lav-license__item {
    margin-top: 7px;
  }
  .lav-license__item:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -7px;
    width: 12px;
    height: 12px;
  }
  .lav-license__item.lav-license__item_include:before {
    background: url(${REPO_DIR}/icon-include.svg) center no-repeat;
    background-size: cover;
  }
  .lav-license__item.lav-license__item_exclude:before {
    background: url(${REPO_DIR}/icon-exclude.svg) center no-repeat;
    background-size: cover;
  }
  .lav-license__modal-trigger {
    font-size: 12px;
    line-height: 1;
    color: #9C9C9C;
    margin-top: 12px;
    display: inline-block;
    border-bottom: 1px solid rgb(156, 156, 156, 50%);
  }
  .lav-size {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    line-height: 1.2;
    color: #565656;
    padding: 16px 20px;
    transition: 0.35s;
    cursor: pointer;
  }
  .lav-size:hover {
    background-color: antiquewhite;
  }
  .lav-size__info {
    display: flex;
    align-items: center;
    margin: 0 12px;
  }
  .lav-size__dim {
    margin-right: 10px;
  }
  .lav-size__abr {
    display: flex;
    align-items: center;
    font-size: 12px;
    line-height: 14px;  
    color: #565656;
    font-weight: 700;
    width: 45px;
    text-align: center;
    text-transform: uppercase;
  }
  .lav-sizes__value .lav-size {
    border-top: 1px solid #C9C9C9;
    border-bottom: 1px solid #C9C9C9;
  }
  .lav-sizes {
    position: relative;
    margin: 0 -20px 25px;
  }
  .lav-sizes__list {
    position: absolute;
    left: 0;
    right: 0;
    /* box-shadow: 0 0 20px; */
    background: white;
    z-index: 1;
    border-bottom: 3px solid #d4d4d4;
    box-shadow: 5px 5px 10px rgb(0, 0, 0, 80%);
    display: none;
  }
  .lav-sizes__list .lav-size {
    border-bottom: 1px dashed #C9C9C9;
  }
  .lav-sizes__list .lav-size_active {
    background-color: #e6e2df;
    font-weight: bold;
    pointer-events: none;
  }
  .lav-size__icon {
    display: none;
  }
  .lav-sizes__value .lav-size__icon {
    display: block;
  }
  .lav-sizes__list .lav-size_extended {
    display: none;
  }
  .lav-sizes_extended .lav-sizes__list .lav-size {
    display: none;
  }
  .lav-sizes_extended .lav-sizes__list .lav-size_extended {
    display: flex;
  }
  .lav-sizes_extended .lav-sizes__value .lav-size__icon {
    display: none;
  }
  .lav-sizes_extended .lav-sizes__list {
    display: none!important;
  }
  .go-modal__wrap {
    position: fixed;
    display: none;
    align-items: center;
    justify-content: center;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 999;
    background: rgba(60, 60, 60, 0.43);
  }
  .go-modal {
    position: relative;
    background: #E6EEF9;
    border-radius: 20px;
    max-width: 1000px;
    width: 100%;
    padding: 60px;
    box-sizing: border-box;
    max-height: 100vh;
    overflow: auto;
  }
  .go-modal__body {
    display: flex;
    margin: 0 -10px;
    font-size: 12px;
    line-height: 14px;
    color: #565656;
  }
  .go-modal__block {
    background: #fff;
    border-radius: 20px;
    margin: 0 10px;
    flex: 1;
    padding: 30px;
  }
  .go-modal__title {
    font-size: 24px;
    line-height: 28px;
    color: #3C3C3C;
    font-weight: 700;
    font-family: Arial Black, Arial;
    margin-bottom: 17px;
  }
  .go-modal__list {
    font-size: 12px;
    line-height: 14px;
    color: #565656;
  }
  .go-modal__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .go-modal__item + .go-modal__item {
    margin-top: 20px;
  }
  .go-modal__descr {
    flex-grow: 1;
    line-height: 1.35;
  }
  .go-modal__close {
    position: absolute;
    top: 25px;
    right: 25px;
    width: 22px;
    height: 22px;
    cursor: pointer;
    transition: 0.35s;
  }
  .go-modal__close:hover {
    opacity: 0.6;
  }
  .go-modal__close img {
    width: 100%;
    height: 100%;
    filter: contrast(0);
  }
  .go-modal__status {
    position: relative;
    width: 105px;
    margin-left: 30px;
    color: #8AC770;
    flex-shrink: 0;
    box-sizing: border-box;
    padding-left: 28px;
  }
  .go-modal__status:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -10px;
    width: 18px;
    height: 18px;
    background: url(${REPO_DIR}/icon-include.svg) center no-repeat;
    background-size: cover;
  }
  .go-modal__status.go-modal__status_note, .go-modal__status.go-modal__status_exclude {
    color: #f04f4f;
  }
  .go-modal__status.go-modal__status_note:before {
    background: url(${REPO_DIR}/icon-exclude.svg) center no-repeat;
    background-size: cover;
  }
  .go-modal__status.go-modal__status_exclude:before {
    background: url(${REPO_DIR}/icon-exclude2.svg) center no-repeat;
    background-size: cover;
  }
  .price-table-upgrade__content {
    display: none;
  }
  .go-modal__caption {
    color: #9E9E9E;
    font-size: 12px;
    margin-top: 25px;
  }
  .go-modal__caption a {
    line-height: 1.2;
    color: #5991D8;
    border-bottom: 1px solid #5991D8;
    transition: 0.35s;
  }
  .go-modal__caption a:hover {
    opacity: 0.6;
    text-decoration: none;
  }
  .lav-size__abr a {
    margin-right: 5px;
  }
`;

// connect to DOM
if (!document.querySelector('.auth-box')) {
  let styles = document.createElement('style');
  styles.innerHTML = stylesList;
  document.body.appendChild(styles);
}

/*** STYLES insert -end- ***/

/*** HTML insert start ***/
let licensesEl = `
  <div class='lav-licenses'>
    <div class='lav-license lav-license_standart lav-license_active'>
      <div class='lav-license__label'>
        <img src='${REPO_DIR}/label-sl.svg'>
      </div>
      <div class='lav-license__info'>
        <div class='lav-license__title'>Standard license</div>
        <div class='lav-license__list'>
          <div class='lav-license__item lav-license__item_include'>Unlimited web usage</div>
          <div class='lav-license__item lav-license__item_exclude'>Limited usage for resale, print, advertising</div>
        </div>
      </div>
    </div>

    <div class='lav-license lav-license_extended'>
      <div class='lav-license__label'>
        <img src='${REPO_DIR}/label-el.svg'>
      </div>
      <div class='lav-license__info'>
        <div class='lav-license__title'>Extended license</div>
        <div class='lav-license__list'>
          <div class='lav-license__item lav-license__item_include'>Unlimited web usage</div>
          <div class='lav-license__item lav-license__item_include'>Unlimited usage for resale, print, advertising</div>
        </div>
        <div class='lav-license__modal-trigger'>What’s an extended lisence?</div>
      </div>
    </div>
  </div>
`;
/*** HTML insert -end- ***/

let observer = new MutationObserver(mutations => {
  for (let mutation of mutations) {
    // проверим новые узлы, есть ли что-то, что надо подсветить?
    for (let node of mutation.addedNodes) {
      // отслеживаем только узлы-элементы, другие (текстовые) пропускаем
      if (!(node instanceof HTMLElement)) continue;

      console.log(node);

      if (
        node.classList.contains('wrapper') &&
        node.querySelector('.file-view-upgrade')
      ) {
        let setIntervalEl = setInterval(() => {
          if (node.querySelectorAll('.price-table-upgrade__item').length > 1) {
            clearInterval(setIntervalEl);
            if (document.querySelector('.auth-box')) {
              document.querySelector('#root>.wrapper').style.opacity = 1;
            } else {
              init();
            }
          }
        }, 300);
      } else if (
        node.parentElement.classList.contains('plans-component') &&
        localStorage.getItem('lavLicenseType') == 'extended'
      ) {
        setTimeout(() => {
          document.querySelectorAll('[data-key]')[1].click();
          document.querySelector('#root>.wrapper').style.opacity = 1;
        }, 300);
      } else {
        // document.querySelector('#root>.wrapper').style.opacity = 1;
      }
    }
  }
});

let demoElem = document.querySelector('#root');

observer.observe(demoElem, { childList: true, subtree: true });

setTimeout(() => {
  document.querySelector('#root>.wrapper').style.opacity = 1;
}, 3500);

function init() {
  localStorage.setItem('lavLicenseType', 'none');
  createModal();
  let sizesEl = createSizes();
  document
    .querySelector('.price-table-upgrade')
    .insertAdjacentElement('beforebegin', sizesEl);

  createLicenses();

  document
    .querySelector('.lav-sizes__value')
    .addEventListener('click', function () {
      if (document.querySelector('.lav-sizes__list').style.display == 'block') {
        document.querySelector('.lav-sizes__list').style.display = 'none';
      } else {
        document.querySelector('.lav-sizes__list').style.display = 'block';
      }
    });

  document.querySelector('#root').addEventListener('click', function (e) {
    if (
      document.querySelector('.lav-sizes__list') &&
      document.querySelector('.lav-sizes__list').style.display == 'block' &&
      !e.target.closest('.lav-sizes')
    ) {
      document.querySelector('.lav-sizes__list').style.display = 'none';
    }
  });
}

function createLicenses() {
  document
    .querySelector('.price-table-upgrade')
    .insertAdjacentHTML('beforebegin', licensesEl);

  setTimeout(() => {
    document.querySelector('#root>.wrapper').style.opacity = 1;
  }, 300);

  document
    .querySelector('.lav-license__modal-trigger')
    .addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector('.go-modal__wrap').style.display = 'flex';
    });

  document.querySelectorAll('.lav-license').forEach(license => {
    license.addEventListener('click', function (e) {
      e.preventDefault();
      document
        .querySelector('.lav-license_active')
        .classList.remove('lav-license_active');
      this.classList.add('lav-license_active');

      if (this.classList.contains('lav-license_extended')) {
        localStorage.setItem('lavLicenseType', 'extended');

        document
          .querySelector('.lav-sizes')
          .classList.add('lav-sizes_extended');
        document.querySelector('.lav-sizes__list .lav-size_extended').click();
      } else if (document.querySelector('.lav-sizes_extended')) {
        localStorage.setItem('lavLicenseType', 'none');

        document
          .querySelector('.lav-sizes')
          .classList.remove('lav-sizes_extended');
        document.querySelector('.lav-sizes__list .lav-size_init').click();
      }
    });
  });
}

function createSizes() {
  let sizesEL = document.createElement('div');
  sizesEL.classList.add('lav-sizes');
  let sizesListEl = document.createElement('div');
  sizesListEl.classList.add('lav-sizes__list');
  let sizesValueEl = document.createElement('div');
  sizesValueEl.classList.add('lav-sizes__value');

  document
    .querySelectorAll('.price-table-upgrade__content ._row')
    .forEach(sizeEl => {
      let newSizeEl = createSizeItem(sizeEl);
      if (newSizeEl.classList.contains('lav-size_active')) {
        sizesValueEl.insertAdjacentElement(
          'beforeend',
          newSizeEl.cloneNode(true)
        );
      }
      sizesListEl.insertAdjacentElement('beforeend', newSizeEl);
    });

  sizesEL.insertAdjacentElement('beforeend', sizesValueEl);
  sizesEL.insertAdjacentElement('beforeend', sizesListEl);

  return sizesEL;
}

function createSizeItem(sizeEl) {
  let newSizeEl = document.createElement('div');
  newSizeEl.classList.add('lav-size');
  let abr = sizeEl.querySelector('.price-table-upgrade__size-box').innerText;
  let dim = sizeEl.querySelector('.price-table-upgrade__text-size').innerText;
  let params = sizeEl.querySelector('.price-table-upgrade__text').innerText;

  if (abr.toLocaleLowerCase() == 'el') {
    newSizeEl.classList.add('lav-size_extended');
  }
  if (sizeEl.classList.contains('price-table-upgrade__item_active')) {
    newSizeEl.classList.add('lav-size_active', 'lav-size_init');
  }

  let innerElHTML = `
      <div class='lav-size__abr'>${abr}</div>
      <div class='lav-size__info'>
        <div class='lav-size__dim'>${dim}</div>
        <div class='lav-size__params'>${params}</div>
      </div>
      <img class='lav-size__icon' src='${REPO_DIR}/icon-dropdown.svg' >
  `;

  newSizeEl.insertAdjacentHTML('afterbegin', innerElHTML);

  if (sizeEl.querySelector('.price-table-upgrade__ind-item_ok')) {
    newSizeEl
      .querySelector('.lav-size__abr')
      .insertAdjacentElement(
        'afterbegin',
        sizeEl
          .querySelector('.price-table-upgrade__ind-item_ok')
          .cloneNode(true)
      );
  }

  newSizeEl.addEventListener('click', function (e) {
    e.preventDefault();
    let elIndex = Array.from(
      document.querySelectorAll('.lav-sizes__list .lav-size')
    ).indexOf(this);
    elIndex += 1;
    document
      .querySelector(
        '.price-table-upgrade__content ._row:nth-child(' + elIndex + ')'
      )
      .click();
    document
      .querySelector('.lav-sizes__list .lav-size_active')
      .classList.remove('lav-size_active');
    this.classList.add('lav-size_active');
    document.querySelector('.lav-sizes__list').style.display = 'none';
    document.querySelector('.lav-sizes__value').innerHTML = '';
    document
      .querySelector('.lav-sizes__value')
      .insertAdjacentElement('beforeend', this.cloneNode(true));
  });

  return newSizeEl;
}

function createModal() {
  let modalHTML = `
  <div class='go-modal__wrap'>
    <div class="go-modal">
      <div class='go-modal__close'>
        <img src='${REPO_DIR}/close.svg'>
      </div>
      <div class='go-modal__body'>
        <div class='go-modal__block'>
          <div class='go-modal__title'>Standard license</div>
          <div class='go-modal__list'>
            <div class='go-modal__item'>
              <div class='go-modal__descr'>The quantity of website visitors</div>
              <div class='go-modal__status go-modal__status_include'>Unlimited</div>
            </div>
            <div class='go-modal__item'>
              <div class='go-modal__descr'>The quantity of copies or impressions</div>
              <div class='go-modal__status go-modal__status_note'>Up to 500,000</div>
            </div>
            <div class='go-modal__item'>
              <div class='go-modal__descr'>The quantity of copies or displays for electronic use</div>
              <div class='go-modal__status go-modal__status_include'>Unlimited</div>
            </div>
            <div class='go-modal__item'>
              <div class='go-modal__descr'>The maximum allowed size (resolution) of the unmodified File for electronic use</div>
              <div class='go-modal__status go-modal__status_include'>Allowed</div>
            </div>
            <div class='go-modal__item'>
              <div class='go-modal__descr'>Creation of Items for Resale or Items for Free Distribution where the File plays a minor role in the item	</div>
              <div class='go-modal__status go-modal__status_include'>Allowed</div>
            </div>
            <div class='go-modal__item'>
              <div class='go-modal__descr'>Creation of Items for Resale or Items for Free Distribution where the File plays a major role in the item and adds value to it	</div>
              <div class='go-modal__status go-modal__status_exclude'>Prohibited</div>
            </div>
          </div>
        </div>
        
        <div class='go-modal__block'>
          <div class='go-modal__title'>Extended license</div>
          <div class='go-modal__list'>
            <div class='go-modal__item'>
              <div class='go-modal__descr'>The quantity of website visitors</div>
              <div class='go-modal__status go-modal__status_include'>Unlimited</div>
            </div>
            <div class='go-modal__item'>
              <div class='go-modal__descr'>The quantity of copies or impressions</div>
              <div class='go-modal__status go-modal__status_include'>Unlimited</div>
            </div>
            <div class='go-modal__item'>
              <div class='go-modal__descr'>The quantity of copies or displays for electronic use</div>
              <div class='go-modal__status go-modal__status_include'>Unlimited</div>
            </div>
            <div class='go-modal__item'>
              <div class='go-modal__descr'>The maximum allowed size (resolution) of the unmodified File for electronic use</div>
              <div class='go-modal__status go-modal__status_include'>Unlimited</div>
            </div>
            <div class='go-modal__item'>
              <div class='go-modal__descr'>Creation of Items for Resale or Items for Free Distribution where the File plays a minor role in the item	</div>
              <div class='go-modal__status go-modal__status_include'>Unlimited</div>
            </div>
            <div class='go-modal__item'>
              <div class='go-modal__descr'>Creation of Items for Resale or Items for Free Distribution where the File plays a major role in the item and adds value to it	</div>
              <div class='go-modal__status go-modal__status_include'>Unlimited</div>
            </div>
          </div>
          <div class='go-modal__caption'>You can read more about licenses <a href='https://depositphotos.com/license.html'>here</a></div>
        </div>
      </div>
    </div>
  </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHTML);

  document
    .querySelector('.go-modal__close')
    .addEventListener('click', function () {
      document.querySelector('.go-modal__wrap').style.display = 'none';
    });
}
