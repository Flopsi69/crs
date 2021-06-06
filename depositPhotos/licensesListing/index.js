/*** Analytics insert start ***/
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

// setTimeout(() => {
//   console.log('loaded');
//   gaEvent('loaded');
// }, 1500);

/*** Analytics insert -end- ***/

const REPO_DIR = 'https://flopsi69.github.io/crs/depositPhotos/licensesListing';
/*** STYLES insert start ***/

let stylesList = `
  .price-table-classic__content {
    display: none!important;
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
    text-transform: lowercase;
  }
  .lav-license__title:first-letter {
    text-transform: uppercase;
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
    margin-left: 5px;
  }
`;

/*** STYLES insert -end- ***/

/*** HTML insert start ***/
let licensesEl;
// ToDO
// let lang = document.querySelector('html').lang;
let lang = 'engl';

if (lang == 'ru') {
  licensesEl = `
      <div class='lav-licenses'>
        <div class='lav-license lav-license_standard lav-license_active'>
          <div class='lav-license__label'>
            <img src='${REPO_DIR}/label-sl.svg'>
          </div>
          <div class='lav-license__info'>
            <div class='lav-license__title'>Стандартная лицензия</div>
            <div class='lav-license__list'>
              <div class='lav-license__item lav-license__item_include'>Неограниченное использование  в сети</div>
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
            <div class='lav-license__list'>
              <div class='lav-license__item lav-license__item_include'>Неограниченное использование  в сети</div>
              <div class='lav-license__item lav-license__item_include'>Неограниченное использование для перепродажи, печати и рекламы </div>

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
        </div>
      </div>
    </div>
  `;
}

/*** HTML insert -end- ***/

// TODO
let observer = new MutationObserver(mutations => {
  for (let mutation of mutations) {
    // проверим новые узлы, есть ли что-то, что надо подсветить?
    for (let node of mutation.addedNodes) {
      // отслеживаем только узлы-элементы, другие (текстовые) пропускаем
      if (!(node instanceof HTMLElement)) continue;

      console.log(node);

      // TODO
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
            // TODO
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
      }
    }
  }
});

let demoElem = document.querySelector('#root');

// observer.observe(demoElem, { childList: true, subtree: true });

// setTimeout(() => {
//   document.querySelector('#root>.wrapper').style.opacity = 1;
// }, 3500);

function init() {
  localStorage.setItem('lavLicenseType', 'none');
  let sizesEl = createSizes();

  document
    .querySelector('.price-table-classic__content')
    .insertAdjacentElement('beforebegin', sizesEl);

  createLicenses();

  document
    .querySelector('.lav-sizes__value')
    .addEventListener('click', function () {
      // gaEvent('image size selector click', 'Size selector B');
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
    .querySelector('.price-table-classic__content')
    .insertAdjacentHTML('beforebegin', licensesEl);

  // document
  //   .querySelector('.price-table-upgrade__download-btn')
  //   .addEventListener('click', function () {
  //     gaEvent('download button click', 'download button click B');
  //   });

  // setTimeout(() => {
  //   document.querySelector('#root>.wrapper').style.opacity = 1;
  // }, 300);

  document.querySelectorAll('.lav-license').forEach(license => {
    license.addEventListener('click', function (e) {
      e.preventDefault();
      document
        .querySelector('.lav-license_active')
        .classList.remove('lav-license_active');
      this.classList.add('lav-license_active');

      if (this.classList.contains('lav-license_extended')) {
        // gaEvent('click on checkbox B', 'EL license B');
        localStorage.setItem('lavLicenseType', 'extended');
        blockEvents = true;

        document
          .querySelector('.lav-sizes')
          .classList.add('lav-sizes_extended');
        document.querySelector('.lav-sizes__list .lav-size_extended').click();
      } else if (document.querySelector('.lav-sizes_extended')) {
        // gaEvent('click on checkbox B', 'Standart license B');
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

let sizesEl = createSizes();
function createSizes() {
  let sizesEL = document.createElement('div');
  sizesEL.classList.add('lav-sizes');
  let sizesListEl = document.createElement('div');
  sizesListEl.classList.add('lav-sizes__list');
  let sizesValueEl = document.createElement('div');
  sizesValueEl.classList.add('lav-sizes__value');

  document.querySelectorAll('.price-table-classic__row').forEach(sizeEl => {
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
  let abr = sizeEl.querySelector('.price-table-classic__size').innerHTML;
  let dim =
    sizeEl.querySelector('.price-table-classic__text-size').innerText +
    sizeEl.querySelector('.price-table-classic__text-type').innerText;
  let params = sizeEl.querySelector(
    '.price-table-classic__text-size-details'
  ).innerText;

  if (sizeEl.querySelector('.icon-size-extended')) {
    newSizeEl.classList.add('lav-size_extended');
  }
  if (sizeEl.classList.contains('price-table-classic__row_active')) {
    newSizeEl.classList.add('lav-size_active', 'lav-size_init');
  }

  let innerElHTML = `
      <div class='lav-size__abr'>${abr}</div>
      <div class='lav-size__info'>
        <div class='lav-size__dim'>${dim}</div>
        <div class='lav-size__params'>${params}</div>
      </div>
      <img class='lav-size__icon' src='/icon-dropdown.svg' >
  `;

  newSizeEl.insertAdjacentHTML('afterbegin', innerElHTML);

  // TODO
  // if (sizeEl.querySelector('.price-table-upgrade__ind-item_ok')) {
  //   newSizeEl
  //     .querySelector('.lav-size__abr')
  //     .insertAdjacentElement(
  //       'beforeend',
  //       sizeEl
  //         .querySelector('.price-table-upgrade__ind-item_ok')
  //         .cloneNode(true)
  //     );
  // }

  newSizeEl.addEventListener('click', function (e) {
    e.preventDefault();
    // TODO
    // if (!blockEvents) {
    //   gaEvent('size click', 'image size clicked B');
    // }
    blockEvents = false;

    let elIndex =
      Array.from(
        document.querySelectorAll('.lav-sizes__list .lav-size')
      ).indexOf(this) + 1;

    document
      .querySelector('.price-table-classic__row:nth-child(' + elIndex + ')')
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
