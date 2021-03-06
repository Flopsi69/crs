/*** Analytics insert start ***/
// check
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
  hj('trigger', 'el_pdp');
} catch (e) {}

function gaEvent(action, label = '', value = '') {
  window.dataLayer = window.dataLayer || [];
  dataLayer.push({
    event: 'event-to-ga',
    eventCategory: 'Experiment — EL',
    eventAction: action,
    eventLabel: label,
    eventValue: value
  });
}

setTimeout(() => {
  console.log('loaded');
  gaEvent('loaded');
}, 1500);

/*** Analytics insert -end- ***/

const REPO_DIR = 'https://flopsi69.github.io/crs/depositPhotos/licenses';
var blockEvents = false;
/*** STYLES insert start ***/

let stylesList = `
  @media screen and (min-width: 1441px) {
    .file-thumb__image {
      --step-large-image-max-height: 400px;
    }
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
    line-height: 1.2;
    color: #3C3C3C;
    margin-bottom: 4px;
    text-transform: lowercase;
  }
  .lav-license__title:first-letter {
    text-transform: uppercase;
  }
  .lav-license__title-price {
    font-size: 12px;
    line-height: 1.2;
    color: #9E9E9E;
    margin-bottom: 7px;
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
  .lav-size.lav-size_extended:hover {
    background: transparent;
    cursor: auto;
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
    text-transform: lowercase;
  }
  .go-modal__title:first-letter {
    text-transform: uppercase;
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
    display: none!important;
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
  .plans-component form button[type='submit'] {
    background: var(--accent-primary);
    transition: .35s;
    color: #fff;
  }
  .plans-component form button[type='submit']:hover {
    background: #1b5c9e;
  }
  .lav-size__abr a {
    margin-left: 5px; 
  }
`;

// connect to DOM
if (!document.querySelector('.auth-box')) {
  let styles = document.createElement('style');
  styles.innerHTML = stylesList;
  document.body.appendChild(styles);
}

/*** HTML insert start ***/
let licensesEl;
let lang = document.querySelector('html').lang;

if (lang == 'ru') {
  licensesEl = `
      <div class='lav-licenses'>
        <div class='lav-license lav-license_standard lav-license_active'>
          <div class='lav-license__label'>
            <img src='${REPO_DIR}/label-sl.svg'>
          </div>
          <div class='lav-license__info'>
            <div class='lav-license__title'>Стандартная лицензия</div>
            <div class='lav-license__title-price'>от $2,39 / за изображение</div>
            <div class='lav-license__list'>
              <div class='lav-license__item lav-license__item_include'>неограниченное использование  в сети</div>
              <div class='lav-license__item lav-license__item_exclude'>Ограниченное использование для перепродажи, печати и рекламы </div>
            </div>
          </div>
        </div>

        <div class='lav-license lav-license_extended'>
          <div class='lav-license__label'>
            <img src='${REPO_DIR}/label-el.svg'>
          </div>
          <div class='lav-license__info'>
            <div class='lav-license__title'>Расширенная лицензия</div>
            <div class='lav-license__title-price'>от $51 / за изображение</div>
            <div class='lav-license__list'>
              <div class='lav-license__item lav-license__item_include'>Неограниченное использование  в сети</div>
              <div class='lav-license__item lav-license__item_include'>неограниченное использование для перепродажи, печати и рекламы </div>

            </div>
            <div class='lav-license__modal-trigger'>Что такое расширенная лицензия?</div>
          </div>
        </div>
      </div>
  `;
} else if (lang == 'es-es') {
  licensesEl = `
    <div class='lav-licenses'>
      <div class='lav-license lav-license_standard lav-license_active'>
        <div class='lav-license__label'>
          <img src='${REPO_DIR}/label-sl.svg'>
        </div>
        <div class='lav-license__info'>
          <div class='lav-license__title'>LICENCIA ESTÁNDAR</div>
          <div class='lav-license__title-price'>$2,39 / ad immagine</div>
          <div class='lav-license__list'>
            <div class='lav-license__item lav-license__item_include'>Uso ilimitado de la web</div>
            <div class='lav-license__item lav-license__item_exclude'>Uso limitado para reventa, impresión, publicidad.</div>
          </div>
        </div>
      </div>

      <div class='lav-license lav-license_extended'>
        <div class='lav-license__label'>
          <img src='${REPO_DIR}/label-el.svg'>
        </div>
        <div class='lav-license__info'>
          <div class='lav-license__title'>LICENCIA AMPLIADA</div>
          <div class='lav-license__title-price'>$51 / ad immagine</div>
          <div class='lav-license__list'>
            <div class='lav-license__item lav-license__item_include'>Uso ilimitado de la web</div>
            <div class='lav-license__item lav-license__item_include'>Uso ilimitado para reventa, impresión, publicidad.</div>

          </div>
          <div class='lav-license__modal-trigger'>¿Qué es una licencia ampliada?</div>
        </div>
      </div>
    </div>
  `;
} else if (lang == 'pt-br') {
  licensesEl = `
    <div class='lav-licenses'>
      <div class='lav-license lav-license_standard lav-license_active'>
        <div class='lav-license__label'>
          <img src='${REPO_DIR}/label-sl.svg'>
        </div>
        <div class='lav-license__info'>
          <div class='lav-license__title'>LICENÇA PADRÃO</div>
          <div class='lav-license__title-price'>$2,39 / por imagem</div>
          <div class='lav-license__list'>
            <div class='lav-license__item lav-license__item_include'>Uso ilimitado da web</div>
            <div class='lav-license__item lav-license__item_exclude'>Uso limitado para revenda, impressão, publicidade</div>
          </div>
        </div>
      </div>

      <div class='lav-license lav-license_extended'>
        <div class='lav-license__label'>
          <img src='${REPO_DIR}/label-el.svg'>
        </div>
        <div class='lav-license__info'>
          <div class='lav-license__title'>LICENÇA ESTENDIDA</div>
          <div class='lav-license__title-price'>$51 / por imagem</div>
          <div class='lav-license__list'>
            <div class='lav-license__item lav-license__item_include'>Uso ilimitado da web</div>
            <div class='lav-license__item lav-license__item_include'>Uso ilimitado para revenda, impressão, publicidade</div>

          </div>
          <div class='lav-license__modal-trigger'>O que é uma licença estendida?</div>
        </div>
      </div>
    </div>
  `;
} else if (lang == 'it') {
  licensesEl = `
    <div class='lav-licenses'>
      <div class='lav-license lav-license_standard lav-license_active'>
        <div class='lav-license__label'>
          <img src='${REPO_DIR}/label-sl.svg'>
        </div>
        <div class='lav-license__info'>
          <div class='lav-license__title'>LA LICENZA STANDARD</div>
          <div class='lav-license__title-price'>$2,39 / ad immagine</div>
          <div class='lav-license__list'>
            <div class='lav-license__item lav-license__item_include'>Utilizzo web illimitato</div>
            <div class='lav-license__item lav-license__item_exclude'>Utilizzo limitato per rivendita, stampa, pubblicità</div>
          </div>
        </div>
      </div>

      <div class='lav-license lav-license_extended'>
        <div class='lav-license__label'>
          <img src='${REPO_DIR}/label-el.svg'>
        </div>
        <div class='lav-license__info'>
          <div class='lav-license__title'>LA LICENZA ESTESA</div>
          <div class='lav-license__title-price'>$51 / ad immagine</div>
          <div class='lav-license__list'>
            <div class='lav-license__item lav-license__item_include'>Utilizzo web illimitato</div>
            <div class='lav-license__item lav-license__item_include'>Utilizzo illimitato per rivendita, stampa, pubblicità</div>

          </div>
          <div class='lav-license__modal-trigger'>Cos'è una licenza estesa?</div>
        </div>
      </div>
    </div>
  `;
} else if (lang == 'pl') {
  licensesEl = `
    <div class='lav-licenses'>
      <div class='lav-license lav-license_standard lav-license_active'>
        <div class='lav-license__label'>
          <img src='${REPO_DIR}/label-sl.svg'>
        </div>
        <div class='lav-license__info'>
          <div class='lav-license__title'>LICENCJA STANDARDOWA</div>
          <div class='lav-license__title-price'>$2,39 / za obraz</div>
          <div class='lav-license__list'>
            <div class='lav-license__item lav-license__item_include'>Nieograniczone korzystanie z sieci</div>
            <div class='lav-license__item lav-license__item_exclude'>Ograniczone wykorzystanie do odsprzedaży, druku, reklamy</div>
          </div>
        </div>
      </div>

      <div class='lav-license lav-license_extended'>
        <div class='lav-license__label'>
          <img src='${REPO_DIR}/label-el.svg'>
        </div>
        <div class='lav-license__info'>
          <div class='lav-license__title'>LICENCJA ROZSZERZONA</div>
          <div class='lav-license__title-price'>$51 / za obraz</div>
          <div class='lav-license__list'>
            <div class='lav-license__item lav-license__item_include'>Nieograniczone korzystanie z sieci</div>
            <div class='lav-license__item lav-license__item_include'>Nieograniczone wykorzystanie do odsprzedaży, druku, reklamy</div>

          </div>
          <div class='lav-license__modal-trigger'>Co to jest licencja rozszerzona?</div>
        </div>
      </div>
    </div>
  `;
} else if (lang == 'nl') {
  licensesEl = `
    <div class='lav-licenses'>
      <div class='lav-license lav-license_standard lav-license_active'>
        <div class='lav-license__label'>
          <img src='${REPO_DIR}/label-sl.svg'>
        </div>
        <div class='lav-license__info'>
          <div class='lav-license__title'>DE STANDAARD LICENTIE</div>
          <div class='lav-license__title-price'>$2,39 / per afbeelding</div>
          <div class='lav-license__list'>
            <div class='lav-license__item lav-license__item_include'>Onbeperkt internetgebruik</div>
            <div class='lav-license__item lav-license__item_exclude'>Beperkt gebruik voor wederverkoop, print, reclame</div>
          </div>
        </div>
      </div>

      <div class='lav-license lav-license_extended'>
        <div class='lav-license__label'>
          <img src='${REPO_DIR}/label-el.svg'>
        </div>
        <div class='lav-license__info'>
          <div class='lav-license__title'>DE UITGEBREIDE LICENTIE</div>
          <div class='lav-license__title-price'>$51 / per afbeelding</div>
          <div class='lav-license__list'>
            <div class='lav-license__item lav-license__item_include'>Onbeperkt internetgebruik</div>
            <div class='lav-license__item lav-license__item_include'>Onbeperkt gebruik voor wederverkoop, print, reclame</div>

          </div>
          <div class='lav-license__modal-trigger'>Wat is een uitgebreide licentie?</div>
        </div>
      </div>
    </div>
  `;
} else if (lang == 'de') {
  licensesEl = `
    <div class='lav-licenses'>
      <div class='lav-license lav-license_standard lav-license_active'>
        <div class='lav-license__label'>
          <img src='${REPO_DIR}/label-sl.svg'>
        </div>
        <div class='lav-license__info'>
          <div class='lav-license__title'>DIE STANDARDLIZENZ</div>
          <div class='lav-license__title-price'>$2,39 / pro Bild</div>
          <div class='lav-license__list'>
            <div class='lav-license__item lav-license__item_include'>Unbegrenzte Webnutzung</div>
            <div class='lav-license__item lav-license__item_exclude'>Eingeschränkte Nutzung für Weiterverkauf, Druck, Werbung</div>
          </div>
        </div>
      </div>

      <div class='lav-license lav-license_extended'>
        <div class='lav-license__label'>
          <img src='${REPO_DIR}/label-el.svg'>
        </div>
        <div class='lav-license__info'>
          <div class='lav-license__title'>DIE ERWEITERTE LIZENZ</div>
          <div class='lav-license__title-price'>$51 / pro Bild</div>
          <div class='lav-license__list'>
            <div class='lav-license__item lav-license__item_include'>Unbegrenzte Webnutzung</div>
            <div class='lav-license__item lav-license__item_include'>Unbegrenzte Nutzung für Weiterverkauf, Druck, Werbung</div>

          </div>
          <div class='lav-license__modal-trigger'>Was ist eine erweiterte Lizenz?</div>
        </div>
      </div>
    </div>
  `;
} else if (lang == 'fr') {
  licensesEl = `
    <div class='lav-licenses'>
      <div class='lav-license lav-license_standard lav-license_active'>
        <div class='lav-license__label'>
          <img src='${REPO_DIR}/label-sl.svg'>
        </div>
        <div class='lav-license__info'>
          <div class='lav-license__title'>LA LICENCE STANDARD</div>
          <div class='lav-license__title-price'>$2,39 / par image</div>
          <div class='lav-license__list'>
            <div class='lav-license__item lav-license__item_include'>Utilisation Internet illimitée</div>
            <div class='lav-license__item lav-license__item_exclude'>Utilisation limitée pour la revente, l'impression, la publicité</div>
          </div>
        </div>
      </div>

      <div class='lav-license lav-license_extended'>
        <div class='lav-license__label'>
          <img src='${REPO_DIR}/label-el.svg'>
        </div>
        <div class='lav-license__info'>
          <div class='lav-license__title'>LA LICENCE ÉTENDUE</div>
          <div class='lav-license__title-price'>$51 / par image</div>
          <div class='lav-license__list'>
            <div class='lav-license__item lav-license__item_include'>Utilisation Internet illimitée</div>
            <div class='lav-license__item lav-license__item_include'>Utilisation illimitée pour la revente, l'impression, la publicité</div>

          </div>
          <div class='lav-license__modal-trigger'>Qu'est-ce qu'une licence étendue?</div>
        </div>
      </div>
    </div>
  `;
} else if (lang == 'tr') {
  licensesEl = `
    <div class='lav-licenses'>
      <div class='lav-license lav-license_standard lav-license_active'>
        <div class='lav-license__label'>
          <img src='${REPO_DIR}/label-sl.svg'>
        </div>
        <div class='lav-license__info'>
          <div class='lav-license__title'>STANDART LİSANS</div>
          <div class='lav-license__title-price'>$2,39 / görüntü başına</div>
          <div class='lav-license__list'>
            <div class='lav-license__item lav-license__item_include'>Sınırsız web kullanımı</div>
            <div class='lav-license__item lav-license__item_exclude'>Yeniden satış, baskı, reklam için sınırlı kullanım</div>
          </div>
        </div>
      </div>

      <div class='lav-license lav-license_extended'>
        <div class='lav-license__label'>
          <img src='${REPO_DIR}/label-el.svg'>
        </div>
        <div class='lav-license__info'>
          <div class='lav-license__title'>GENİŞLETİLMİŞ LİSANS</div>
          <div class='lav-license__title-price'>$51 / görüntü başına</div>
          <div class='lav-license__list'>
            <div class='lav-license__item lav-license__item_include'>Sınırsız web kullanımı</div>
            <div class='lav-license__item lav-license__item_include'>Yeniden satış, baskı, reklam için sınırsız kullanım</div>

          </div>
          <div class='lav-license__modal-trigger'>Genişletilmiş lisans nedir?</div>
        </div>
      </div>
    </div>
  `;
} else {
  licensesEl = `
    <div class='lav-licenses'>
      <div class='lav-license lav-license_standard lav-license_active'>
        <div class='lav-license__label'>
          <img src='${REPO_DIR}/label-sl.svg'>
        </div>
        <div class='lav-license__info'>
          <div class='lav-license__title'>Standard license</div>
          <div class='lav-license__title-price'>from $2,39 / per image</div>
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
          <div class='lav-license__title-price'>from $51 / per image</div>
          <div class='lav-license__list'>
            <div class='lav-license__item lav-license__item_include'>Unlimited web usage</div>
            <div class='lav-license__item lav-license__item_include'>Unlimited usage for resale, print, advertising</div>

          </div>
          <div class='lav-license__modal-trigger'>What’s an extended lisence?</div>
        </div>
      </div>
    </div>
  `;
}

/*** HTML insert -end- ***/

let observer = new MutationObserver(mutations => {
  for (let mutation of mutations) {
    // проверим новые узлы, есть ли что-то, что надо подсветить?
    for (let node of mutation.addedNodes) {
      // отслеживаем только узлы-элементы, другие (текстовые) пропускаем
      if (!(node instanceof HTMLElement)) continue;

      console.log(node);

      if (node.classList.contains('price-table-upgrade')) {
        node
          .querySelectorAll('.price-table-upgrade__item')
          .forEach(function (el, index) {
            if (el.querySelector('.price-table-upgrade__ind-item')) {
              let ind = index + 1;
              if (
                !document.querySelector(
                  '.lav-sizes__list .lav-size:nth-child(' +
                    ind +
                    ') .price-table-upgrade__ind-item'
                )
              ) {
                document
                  .querySelector(
                    '.lav-sizes__list .lav-size:nth-child(' +
                      ind +
                      ') .lav-size__abr'
                  )
                  .insertAdjacentElement(
                    'beforeend',
                    el
                      .querySelector('.price-table-upgrade__ind-item')
                      .cloneNode(true)
                  );

                document
                  .querySelector('.lav-size_active  .lav-size__abr')
                  .insertAdjacentElement(
                    'beforeend',
                    el
                      .querySelector('.price-table-upgrade__ind-item')
                      .cloneNode(true)
                  );
              }
            }
          });
      }

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
        // setTimeout(() => {
        document.querySelectorAll('[data-key]')[1].click();
        if (
          document
            .querySelector('.plans-component')
            .querySelector('form[name="1024"]')
        ) {
          document
            .querySelector('.plans-component')
            .querySelector('form[name="1024"]').style.display = 'none';
        }
        if (document.querySelector("form[data-label='BEST VALUE']")) {
          document.querySelector(
            "form[data-label='BEST VALUE']"
          ).style.display = 'none';
        }
        if (document.querySelector("form[name='2']")) {
          document.querySelector("form[name='2']").style.display = 'none';
        }
        document.querySelector('#root>.wrapper').style.opacity = 1;
        // }, 300);
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

init();
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
      gaEvent('image size selector click', 'Size selector C');
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
    if (
      document.querySelector('.price-table-upgrade__download-btn') &&
      document.querySelector('.price-table-upgrade__download-btn').dataset
        .label &&
      document
        .querySelector('.price-table-upgrade__download-btn')
        .dataset.label.toLowerCase() == 'price: free'
    ) {
      document
        .querySelector('.lav-license_standard .lav-license__title-price')
        .remove();
    }

    document.querySelector('#root>.wrapper').style.opacity = 1;
  }, 300);

  document
    .querySelector('.price-table-upgrade__download-btn')
    .addEventListener('click', function () {
      gaEvent('download button click', 'download button click C');
    });

  document
    .querySelector('.lav-license__modal-trigger')
    .addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
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
        gaEvent('click on checkbox C', 'EL license C');
        localStorage.setItem('lavLicenseType', 'extended');
        blockEvents = true;

        document
          .querySelector('.lav-sizes')
          .classList.add('lav-sizes_extended');
        document.querySelector('.lav-sizes__list .lav-size_extended').click();
      } else if (document.querySelector('.lav-sizes_extended')) {
        gaEvent('click on checkbox C', 'Standart license C');
        localStorage.setItem('lavLicenseType', 'none');
        blockEvents = true;

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

  if (abr.toLowerCase() == 'el') {
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
        'beforeend',
        sizeEl
          .querySelector('.price-table-upgrade__ind-item_ok')
          .cloneNode(true)
      );
  }

  newSizeEl.addEventListener('click', function (e) {
    e.preventDefault();
    // lav-size_init
    if (!blockEvents) {
      gaEvent('size click', 'image size clicked C');
    }
    blockEvents = false;

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
  let modalHTML;

  if (lang == 'ru') {
    modalHTML = `
      <div class='go-modal__wrap'>
        <div class="go-modal">
          <div class='go-modal__close'>
            <img src='${REPO_DIR}/close.svg'>
          </div>
          <div class='go-modal__body'>
            <div class='go-modal__block'>
              <div class='go-modal__title'>Стандартная лицензия</div>
              <div class='go-modal__list'>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Посетители веб-сайта</div>
                  <div class='go-modal__status go-modal__status_include'>Без ограничений</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Количество копий или отпечатков продукта</div>
                  <div class='go-modal__status go-modal__status_note'>До 500 000</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Количество копий или показов продукта для электронного использования</div>
                  <div class='go-modal__status go-modal__status_include'>Без ограничений</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Максимальный размер (разрешение) не измененного Файла для электронного использования</div>
                  <div class='go-modal__status go-modal__status_include'>Разрешено</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Создание продукта для перепродажи или свободного распространения, в котором Файл играет второстепенную роль для продукта	</div>
                  <div class='go-modal__status go-modal__status_include'>Разрешено</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Создание продукта для перепродажи или свободного распространения, в котором Файл играет главную роль для продукта и придает ему ценность	</div>
                  <div class='go-modal__status go-modal__status_exclude'>Запрещено</div>
                </div>
              </div>
            </div>
            
            <div class='go-modal__block'>
              <div class='go-modal__title'>Расширенная лицензия</div>
              <div class='go-modal__list'>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Посетители веб-сайта</div>
                  <div class='go-modal__status go-modal__status_include'>Без ограничений</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Количество копий или отпечатков продукта</div>
                  <div class='go-modal__status go-modal__status_include'>Без ограничений</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Количество копий или показов продукта для электронного использования</div>
                  <div class='go-modal__status go-modal__status_include'>Без ограничений</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Максимальный размер (разрешение) не измененного Файла для электронного использования</div>
                  <div class='go-modal__status go-modal__status_include'>Без ограничений</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Создание продукта для перепродажи или свободного распространения, в котором Файл играет второстепенную роль для продукта	</div>
                  <div class='go-modal__status go-modal__status_include'>Без ограничений</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Создание продукта для перепродажи или свободного распространения, в котором Файл играет главную роль для продукта и придает ему ценность	</div>
                  <div class='go-modal__status go-modal__status_include'>Без ограничений</div>
                </div>
              </div>
              <div class='go-modal__caption'>Вы можете узнать больше о лицензиях <a href='https://ru.depositphotos.com/license.html'>здесь</a></div>
            </div>
          </div>
        </div>
      </div>
    `;
  } else if (lang == 'es-es') {
    modalHTML = `
      <div class='go-modal__wrap'>
        <div class="go-modal">
          <div class='go-modal__close'>
            <img src='${REPO_DIR}/close.svg'>
          </div>
          <div class='go-modal__body'>
            <div class='go-modal__block'>
              <div class='go-modal__title'>LICENCIA ESTÁNDAR</div>
              <div class='go-modal__list'>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Cantidad de visitantes al sitio web</div>
                  <div class='go-modal__status go-modal__status_include'>Ilimitada</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Cantidad de copias o impresiones</div>
                  <div class='go-modal__status go-modal__status_note'>Hasta 500.000</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Cantidad de copias o publicaciones para uso electrónico</div>
                  <div class='go-modal__status go-modal__status_include'>Ilimitada</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Máximo tamaño (resolución) permitido para el archivo sin modificar en uso electrónico</div>
                  <div class='go-modal__status go-modal__status_include'>Permitido</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Creación de todo tipo de artículos (excepto artículos para reventa o para distribución gratuita, donde el Archivo juegue un papel principal y añada valor al mismo)	</div>
                  <div class='go-modal__status go-modal__status_include'>Permitido</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Creación de artículos para reventa o para distribución gratuita donde el Archivo juegue un papel secundario en el artículo	</div>
                  <div class='go-modal__status go-modal__status_exclude'>Prohibido</div>
                </div>
              </div>
            </div> 
            
            <div class='go-modal__block'>
              <div class='go-modal__title'>LICENCIA AMPLIADA</div>
              <div class='go-modal__list'>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Cantidad de visitantes al sitio web</div>
                  <div class='go-modal__status go-modal__status_include'>Ilimitada</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Cantidad de copias o impresiones</div>
                  <div class='go-modal__status go-modal__status_include'>Ilimitada</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Cantidad de copias o publicaciones para uso electrónico</div>
                  <div class='go-modal__status go-modal__status_include'>Ilimitada</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Máximo tamaño (resolución) permitido para el archivo sin modificar en uso electrónico</div>
                  <div class='go-modal__status go-modal__status_include'>Ilimitada</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Creación de todo tipo de artículos (excepto artículos para reventa o para distribución gratuita, donde el Archivo juegue un papel principal y añada valor al mismo)	</div>
                  <div class='go-modal__status go-modal__status_include'>Ilimitada</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Creación de artículos para reventa o para distribución gratuita donde el Archivo juegue un papel secundario en el artículo	</div>
                  <div class='go-modal__status go-modal__status_include'>Ilimitada</div>
                </div>
              </div>
              <div class='go-modal__caption'>Puede leer más sobre las licencias <a href='https://sp.depositphotos.com/license.html'>aquí</a></div>
            </div>
          </div>
        </div>
      </div>
    `;
  } else if (lang == 'pt-br') {
    modalHTML = `
      <div class='go-modal__wrap'>
        <div class="go-modal">
          <div class='go-modal__close'>
            <img src='${REPO_DIR}/close.svg'>
          </div>
          <div class='go-modal__body'>
            <div class='go-modal__block'>
              <div class='go-modal__title'>LICENÇA PADRÃO</div>
              <div class='go-modal__list'>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>A quantidade de visitantes no site</div>
                  <div class='go-modal__status go-modal__status_include'>Ilimitado</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>A quantidade de cópias ou impressões</div>
                  <div class='go-modal__status go-modal__status_note'>Até 500.000</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>TA quantidade de cópias ou exibições para uso eletrônico</div>
                  <div class='go-modal__status go-modal__status_include'>Ilimitado</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>O tamanho máximo permitido (resolução) do Arquivo não modificado para uso eletrônico</div>
                  <div class='go-modal__status go-modal__status_include'>Permitido</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Criação de Itens para Revenda ou Itens para Distribuição Gratuita, caso o Arquivo desempenhe um papel secundário no item	</div>
                  <div class='go-modal__status go-modal__status_include'>Permitido</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Criação de Itens para Revenda ou Itens para Distribuição Gratuita, caso o Arquivo desempenhe um papel principal no item e acrescente valor ao mesmo	</div>
                  <div class='go-modal__status go-modal__status_exclude'>Proibido</div>
                </div>
              </div>
            </div>
            
            <div class='go-modal__block'>
              <div class='go-modal__title'>LICENÇA ESTENDIDA</div>
              <div class='go-modal__list'>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>A quantidade de visitantes no site</div>
                  <div class='go-modal__status go-modal__status_include'>Ilimitado</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>The quantity of copies or impressions</div>
                  <div class='go-modal__status go-modal__status_include'>Ilimitado</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>The quantity of copies or displays for electronic use</div>
                  <div class='go-modal__status go-modal__status_include'>Ilimitado</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>The maximum allowed size (resolution) of the unmodified File for electronic use</div>
                  <div class='go-modal__status go-modal__status_include'>Ilimitado</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Criação de Itens para Revenda ou Itens para Distribuição Gratuita, caso o Arquivo desempenhe um papel secundário no item	</div>
                  <div class='go-modal__status go-modal__status_include'>Ilimitado</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Criação de Itens para Revenda ou Itens para Distribuição Gratuita, caso o Arquivo desempenhe um papel principal no item e acrescente valor ao mesmo	</div>
                  <div class='go-modal__status go-modal__status_include'>Ilimitado</div>
                </div>
              </div>
              <div class='go-modal__caption'>Você pode ler mais sobre licenças <a href='https://pt.depositphotos.com/license.html'>aqui</a></div>
            </div>
          </div>
        </div>
      </div>
    `;
  } else if (lang == 'it') {
    modalHTML = `
      <div class='go-modal__wrap'>
        <div class="go-modal">
          <div class='go-modal__close'>
            <img src='${REPO_DIR}/close.svg'>
          </div>
          <div class='go-modal__body'>
            <div class='go-modal__block'>
              <div class='go-modal__title'>LA LICENZA STANDARD</div>
              <div class='go-modal__list'>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Il numero di visitatori del sito web</div>
                  <div class='go-modal__status go-modal__status_include'>Illimitato</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Il numero di copie o impressioni</div>
                  <div class='go-modal__status go-modal__status_note'>Fino a 500,000</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Numero di copie o visualizzazioni per uso elettronico</div>
                  <div class='go-modal__status go-modal__status_include'>Illimitato</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Dimensione massima consentita (risoluzione) del File non modificato per uso elettronico</div>
                  <div class='go-modal__status go-modal__status_include'>Permesso</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Creazione di elementi per la Rivendita o elementi per la Distribuzione Gratuita dove il File ricopra un ruolo minore nell’elemento	</div>
                  <div class='go-modal__status go-modal__status_include'>Permesso</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Creazione di elementi per la Rivendita o elementi per la Distribuzione Gratuita dove il File ricopra un ruolo principale nell’elemento	</div>
                  <div class='go-modal__status go-modal__status_exclude'>Proibito</div>
                </div>
              </div>
            </div>
            
            <div class='go-modal__block'>
              <div class='go-modal__title'>LA LICENZA ESTESA</div>
              <div class='go-modal__list'>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Il numero di visitatori del sito web</div>
                  <div class='go-modal__status go-modal__status_include'>Illimitato</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Il numero di copie o impressioni</div>
                  <div class='go-modal__status go-modal__status_include'>Illimitato</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Numero di copie o visualizzazioni per uso elettronico</div>
                  <div class='go-modal__status go-modal__status_include'>Illimitato</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Dimensione massima consentita (risoluzione) del File non modificato per uso elettronico</div>
                  <div class='go-modal__status go-modal__status_include'>Illimitato</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Creazione di elementi per la Rivendita o elementi per la Distribuzione Gratuita dove il File ricopra un ruolo minore nell’elemento	</div>
                  <div class='go-modal__status go-modal__status_include'>Illimitato</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Creazione di elementi per la Rivendita o elementi per la Distribuzione Gratuita dove il File ricopra un ruolo principale nell’elemento	</div>
                  <div class='go-modal__status go-modal__status_include'>Illimitato</div>
                </div>
              </div>
              <div class='go-modal__caption'>Puoi leggere di più sulle licenze <a href='https://it.depositphotos.com/license.html'>qui</a></div>
            </div>
          </div>
        </div>
      </div>
    `;
  } else if (lang == 'pl') {
    modalHTML = `
      <div class='go-modal__wrap'>
        <div class="go-modal">
          <div class='go-modal__close'>
            <img src='${REPO_DIR}/close.svg'>
          </div>
          <div class='go-modal__body'>
            <div class='go-modal__block'>
              <div class='go-modal__title'>LICENCJA STANDARDOWA</div>
              <div class='go-modal__list'>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Ilość gości na stronie internetowej</div>
                  <div class='go-modal__status go-modal__status_include'>Bez ograniczeń</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Ilość kopii lub odbitek</div>
                  <div class='go-modal__status go-modal__status_note'>Do 500 000</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Ilość kopii lub wyświetleń w użyciu elektronicznym</div>
                  <div class='go-modal__status go-modal__status_include'>Bez ograniczeń</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Maksymalny dozwolony rozmiar (rozdzielczość) niezmodyfikowanego Pliku w użyciu elektronicznym</div>
                  <div class='go-modal__status go-modal__status_include'>Dozwolone</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Tworzenie rzeczy do odsprzedaży lub rzeczy do darmowej dystrybucji gdzie Plik odgrywa podrzędną w rzeczy	</div>
                  <div class='go-modal__status go-modal__status_include'>Dozwolone</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Tworzenie rzeczy do odsprzedaży lub rzeczy do darmowej dystrybucji gdzie plik odgrywa główną rolę w rzeczy i dodaje mu wartości.	</div>
                  <div class='go-modal__status go-modal__status_exclude'>Zabronione</div>
                </div>
              </div>
            </div>
            
            <div class='go-modal__block'>
              <div class='go-modal__title'>LICENCJA ROZSZERZONA</div>
              <div class='go-modal__list'>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Ilość gości na stronie internetowej</div>
                  <div class='go-modal__status go-modal__status_include'>Bez ograniczeń</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Ilość kopii lub odbitek</div>
                  <div class='go-modal__status go-modal__status_include'>Bez ograniczeń</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Ilość kopii lub wyświetleń w użyciu elektronicznym</div>
                  <div class='go-modal__status go-modal__status_include'>Bez ograniczeń</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Maksymalny dozwolony rozmiar (rozdzielczość) niezmodyfikowanego Pliku w użyciu elektronicznym</div>
                  <div class='go-modal__status go-modal__status_include'>Bez ograniczeń</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Tworzenie rzeczy do odsprzedaży lub rzeczy do darmowej dystrybucji gdzie Plik odgrywa podrzędną w rzeczy	</div>
                  <div class='go-modal__status go-modal__status_include'>Bez ograniczeń</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Tworzenie rzeczy do odsprzedaży lub rzeczy do darmowej dystrybucji gdzie plik odgrywa główną rolę w rzeczy i dodaje mu wartości.	</div>
                  <div class='go-modal__status go-modal__status_include'>Bez ograniczeń</div>
                </div>
              </div>
              <div class='go-modal__caption'>Więcej o licencjach przeczytasz <a href='https://pl.depositphotos.com/license.html'>tutaj</a></div>
            </div>
          </div>
        </div>
      </div>
    `;
  } else if (lang == 'nl') {
    modalHTML = `
      <div class='go-modal__wrap'>
        <div class="go-modal">
          <div class='go-modal__close'>
            <img src='${REPO_DIR}/close.svg'>
          </div>
          <div class='go-modal__body'>
            <div class='go-modal__block'>
              <div class='go-modal__title'>DE STANDAARD LICENTIE</div>
              <div class='go-modal__list'>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Het aantal bezoekers van de website</div>
                  <div class='go-modal__status go-modal__status_include'>Onbeperkt</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Het aantal exemplaren of vertoningen</div>
                  <div class='go-modal__status go-modal__status_note'>Maximaal 500.000</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Het aantal exemplaren of weergaven voor elektronisch gebruik</div>
                  <div class='go-modal__status go-modal__status_include'>Onbeperkt</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>De maximaal toegestane grootte (resolutie) van het ongewijzigde</div>
                  <div class='go-modal__status go-modal__status_include'>Toegestaan</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Het maken van Producten voor de Verkoop of Producten voor Gratis Verspreiding, waarbij het Bestand een ondergeschikte rol speelt voor het product	</div>
                  <div class='go-modal__status go-modal__status_include'>Toegestaan</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Het maken van Producten voor de Verkoop of Producten voor Gratis Verspreiding, waarbij het Bestand een belangrijke rol speelt voor het product en er een toegevoegde waarde aan geeft	</div>
                  <div class='go-modal__status go-modal__status_exclude'>Niet toegestaan</div>
                </div>
              </div>
            </div>
            
            <div class='go-modal__block'>
              <div class='go-modal__title'>DE UITGEBREIDE LICENTIE</div>
              <div class='go-modal__list'>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Het aantal bezoekers van de website</div>
                  <div class='go-modal__status go-modal__status_include'>Onbeperkt</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Het aantal exemplaren of vertoningen</div>
                  <div class='go-modal__status go-modal__status_include'>Onbeperkt</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Het aantal exemplaren of weergaven voor elektronisch gebruik</div>
                  <div class='go-modal__status go-modal__status_include'>Onbeperkt</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>De maximaal toegestane grootte (resolutie) van het ongewijzigde</div>
                  <div class='go-modal__status go-modal__status_include'>Onbeperkt</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Het maken van Producten voor de Verkoop of Producten voor Gratis Verspreiding, waarbij het Bestand een ondergeschikte rol speelt voor het product	</div>
                  <div class='go-modal__status go-modal__status_include'>Onbeperkt</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Het maken van Producten voor de Verkoop of Producten voor Gratis Verspreiding, waarbij het Bestand een belangrijke rol speelt voor het product en er een toegevoegde waarde aan geeft	</div>
                  <div class='go-modal__status go-modal__status_include'>Onbeperkt</div>
                </div>
              </div>
              <div class='go-modal__caption'>U kunt hier meer lezen over <a href='https://depositphotos.com/nl/license.html'>licenties</a></div>
            </div>
          </div>
        </div>
      </div>
    `;
  } else if (lang == 'de') {
    modalHTML = `
      <div class='go-modal__wrap'>
        <div class="go-modal">
          <div class='go-modal__close'>
            <img src='${REPO_DIR}/close.svg'>
          </div>
          <div class='go-modal__body'>
            <div class='go-modal__block'>
              <div class='go-modal__title'>DIE STANDARDLIZENZ</div>
              <div class='go-modal__list'>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Die Anzahl von Website-Besuchern</div>
                  <div class='go-modal__status go-modal__status_include'>unbegrenzt</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Die Anzahl von Kopien oder Drucken</div>
                  <div class='go-modal__status go-modal__status_note'>Bis 500.000</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Die Anzahl von Kopien oder Displays für die elektronische Verwendung</div>
                  <div class='go-modal__status go-modal__status_include'>unbegrenzt</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Die maximal zulässige Größe (Auflösung) der nicht-modifizierten Datei für die elektronische Verwendung</div>
                  <div class='go-modal__status go-modal__status_include'>zulässig</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Erstellung von Artikeln für den Wiederverkauf oder von Artikeln zur kostenlosen Verteilung, wobei die Datei eine untergeordnete Rolle in dem Artikel spielt	</div>
                  <div class='go-modal__status go-modal__status_include'>zulässig</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Erstellung von Artikeln für den Wiederverkauf oder von Artikeln zur kostenlosen Verteilung, wobei die Datei eine wesentliche Rolle in dem Artikel spielt und den Wert des Artikels erhöht	</div>
                  <div class='go-modal__status go-modal__status_exclude'>unzulässig</div>
                </div>
              </div>
            </div>
            
            <div class='go-modal__block'>
              <div class='go-modal__title'>DIE ERWEITERTE LIZENZ</div>
              <div class='go-modal__list'>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Die Anzahl von Website-Besuchern</div>
                  <div class='go-modal__status go-modal__status_include'>unbegrenzt</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Die Anzahl von Kopien oder Drucken</div>
                  <div class='go-modal__status go-modal__status_include'>unbegrenzt</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Die Anzahl von Kopien oder Displays für die elektronische Verwendung</div>
                  <div class='go-modal__status go-modal__status_include'>unbegrenzt</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Die maximal zulässige Größe (Auflösung) der nicht-modifizierten Datei für die elektronische Verwendung</div>
                  <div class='go-modal__status go-modal__status_include'>unbegrenzt</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Erstellung von Artikeln für den Wiederverkauf oder von Artikeln zur kostenlosen Verteilung, wobei die Datei eine untergeordnete Rolle in dem Artikel spielt	</div>
                  <div class='go-modal__status go-modal__status_include'>unbegrenzt</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Erstellung von Artikeln für den Wiederverkauf oder von Artikeln zur kostenlosen Verteilung, wobei die Datei eine wesentliche Rolle in dem Artikel spielt und den Wert des Artikels erhöht	</div>
                  <div class='go-modal__status go-modal__status_include'>unbegrenzt</div>
                </div>
              </div>
              <div class='go-modal__caption'>Weitere Informationen zu Lizenzen finden Sie <a href='https://de.depositphotos.com/license.html'>hier</a></div>
            </div>
          </div>
        </div>
      </div>
    `;
  } else if (lang == 'fr') {
    modalHTML = `
      <div class='go-modal__wrap'>
        <div class="go-modal">
          <div class='go-modal__close'>
            <img src='${REPO_DIR}/close.svg'>
          </div>
          <div class='go-modal__body'>
            <div class='go-modal__block'>
              <div class='go-modal__title'>LA LICENCE STANDARD</div>
              <div class='go-modal__list'>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>La quantité de visiteurs de site Web</div>
                  <div class='go-modal__status go-modal__status_include'>Illimitée</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>La quantité de copies ou d'impressions</div>
                  <div class='go-modal__status go-modal__status_note'>Jusqu'à 500 000</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>La quantité de copies ou d'affichages pour un usage électronique</div>
                  <div class='go-modal__status go-modal__status_include'>Illimitée</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>La quantité de copies ou d'affichages pour un usage électronique</div>
                  <div class='go-modal__status go-modal__status_include'>Autorisé</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Création d'articles destinés à la revente ou distribution gratuite lorsque le fichier joue un rôle mineur dans l'article	</div>
                  <div class='go-modal__status go-modal__status_include'>Autorisé</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Création d'articles destinés à la revente ou à une distribution gratuite lorsque le Fichier tient un rôle majeur dans le produit et lui ajoute de la valeur	</div>
                  <div class='go-modal__status go-modal__status_exclude'>Non autorisé</div>
                </div>
              </div>
            </div>
            
            <div class='go-modal__block'>
              <div class='go-modal__title'>LA LICENCE ÉTENDUE</div>
              <div class='go-modal__list'>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>La quantité de visiteurs de site Web</div>
                  <div class='go-modal__status go-modal__status_include'>Illimitée</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>La quantité de copies ou d'impressions</div>
                  <div class='go-modal__status go-modal__status_include'>Illimitée</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>La quantité de copies ou d'affichages pour un usage électronique</div>
                  <div class='go-modal__status go-modal__status_include'>Illimitée</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>La quantité de copies ou d'affichages pour un usage électronique</div>
                  <div class='go-modal__status go-modal__status_include'>Illimitée</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Création d'articles destinés à la revente ou distribution gratuite lorsque le fichier joue un rôle mineur dans l'article	</div>
                  <div class='go-modal__status go-modal__status_include'>Illimitée</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Création d'articles destinés à la revente ou à une distribution gratuite lorsque le Fichier tient un rôle majeur dans le produit et lui ajoute de la valeur	</div>
                  <div class='go-modal__status go-modal__status_include'>Illimitée</div>
                </div>
              </div>
              <div class='go-modal__caption'>Vous pouvez en savoir plus sur les licences <a href='https://fr.depositphotos.com/license.html'>ici</a></div>
            </div>
          </div>
        </div>
      </div>
    `;
  } else if (lang == 'tr') {
    modalHTML = `
      <div class='go-modal__wrap'>
        <div class="go-modal">
          <div class='go-modal__close'>
            <img src='${REPO_DIR}/close.svg'>
          </div>
          <div class='go-modal__body'>
            <div class='go-modal__block'>
              <div class='go-modal__title'>STANDART LİSANS</div>
              <div class='go-modal__list'>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Web sitesinin ziyaretçi sayısı</div>
                  <div class='go-modal__status go-modal__status_include'>Sınırsız</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Kopya veya baskı sayısı</div>
                  <div class='go-modal__status go-modal__status_note'>500.000'e kadar</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Elektronik kullanım için kopya ve gösterim sayısı</div>
                  <div class='go-modal__status go-modal__status_include'>Sınırsız</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Elektronik kullanım için modifiye edilmemiş Dosyanın izin verilen maksimum boyutu (çözünürlüğü)</div>
                  <div class='go-modal__status go-modal__status_include'>İzin Verilir</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Dosyanın öğelerde küçük rol oynadığı Tekrardan Satış veya Bedava Dağıtımı için Öğe Oluşturma	</div>
                  <div class='go-modal__status go-modal__status_include'>İzin Verilir</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Dosyanın öğelerde büyük rol oynadığı ve öğeye değer kattığı Tekrardan Satış veya Bedava Dağıtımı için Öğe Oluşturma	</div>
                  <div class='go-modal__status go-modal__status_exclude'>Yasaktır</div>
                </div>
              </div>
            </div>
            
            <div class='go-modal__block'>
              <div class='go-modal__title'>GENİŞLETİLMİŞ LİSANS</div>
              <div class='go-modal__list'>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Web sitesinin ziyaretçi sayısı</div>
                  <div class='go-modal__status go-modal__status_include'>Sınırsız</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Kopya veya baskı sayısı</div>
                  <div class='go-modal__status go-modal__status_include'>Sınırsız</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Elektronik kullanım için kopya ve gösterim sayısı</div>
                  <div class='go-modal__status go-modal__status_include'>Sınırsız</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Elektronik kullanım için modifiye edilmemiş Dosyanın izin verilen maksimum boyutu (çözünürlüğü)</div>
                  <div class='go-modal__status go-modal__status_include'>Sınırsız</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Dosyanın öğelerde küçük rol oynadığı Tekrardan Satış veya Bedava Dağıtımı için Öğe Oluşturma	</div>
                  <div class='go-modal__status go-modal__status_include'>Sınırsız</div>
                </div>
                <div class='go-modal__item'>
                  <div class='go-modal__descr'>Dosyanın öğelerde büyük rol oynadığı ve öğeye değer kattığı Tekrardan Satış veya Bedava Dağıtımı için Öğe Oluşturma	</div>
                  <div class='go-modal__status go-modal__status_include'>Sınırsız</div>
                </div>
              </div>
              <div class='go-modal__caption'>Burada lisanslar hakkında daha fazla bilgi <a href='https://tr.depositphotos.com/license.html'>edinebilirsiniz</a></div>
            </div>
          </div>
        </div>
      </div>
    `;
  } else {
    modalHTML = `
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
  }

  document.body.insertAdjacentHTML('beforeend', modalHTML);

  document
    .querySelector('.go-modal__close')
    .addEventListener('click', function () {
      document.querySelector('.go-modal__wrap').style.display = 'none';
    });
}
