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
price-table-upgrade__content
  .lav-licenses {
    margin-bottom: 30px;
  }
  .lav-license {
    position: relative;
    display: flex;
    padding: 16px 25px 20px 40px;
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
    pointer-events: none;
  }
  .lav-license__label img {
    width: 60px;
    margin-top: 15px;
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
    font-size: 10px;
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
    font-size: 10px;
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
    font-size: 10px;
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
    font-size: 12px;
    line-height: 14px;  
    color: #565656;
    font-weight: 700;
    width: 45px;
    text-align: center;
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
    background-color: #f5f5f5;
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
    display: flex;
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
    background: #E6EEF9;
    border-radius: 20px;
    max-width: 1000px;
    width: 100%;
    padding: 60px;
    box-sizing: border-box;
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
    margin-bottom: 12px;
  }
  .go-modal__list {
    font-size: 12px;
    line-height: 14px;
    color: #565656;
  }
  .go-modal__item {
    display: flex;
  }
  .go-modal__item + .go-modal__item {
    margin-top: 20px;
  }
  .go-modal__descr {
    flex-grow: 1;
  }
  .go-modal__status {
    position:
    width: 120px;
    margin-left: 25px;
    color: #8AC770;
    padding-left: 18px;
  }
  .go-modal__status:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -12px;
    width: 22px;
    height: 22px;
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
    background: url(${REPO_DIR}/icon-cancel.svg) center no-repeat;
    background-size: cover;
  }

`;

// <div class='lav-size__abr'>${abr}</div>
//       <div class='lav-size__info'>
//         <div class='lav-size__dim'>${dim}</div>
//         <div class='lav-size__params'>${params}</div>
//       </div>
//       <img src='${REPO_DIR}/icon-dropdown.svg' ></img>

// connect to DOM
let styles = document.createElement('style');
styles.innerHTML = stylesList;
document.body.appendChild(styles);

/*** STYLES insert -end- ***/

/*** HTML insert start ***/
let licensEl = `
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
init();
function init() {
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
}

function createLicenses() {
  document
    .querySelector('.price-table-upgrade')
    .insertAdjacentHTML('beforebegin', licensEl);

  document.querySelectorAll('.lav-license').forEach(license => {
    license.addEventListener('click', function (e) {
      e.preventDefault();
      document
        .querySelector('.lav-license_active')
        .classList.remove('lav-license_active');
      this.classList.add('lav-license_active');
      if (this.classList.contains('lav-license_extended')) {
        document
          .querySelector('.lav-sizes')
          .classList.add('lav-sizes_extended');
        document.querySelector('.lav-sizes__list .lav-size_extended').click();
      } else if (document.querySelector('.lav-sizes_extended')) {
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
      <div class='go-modal-close'>
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
        </div>
      </div>
    </div>
  </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHTML);
}
