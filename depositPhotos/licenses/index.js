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

/*** STYLES insert start ***/

let stylesList = ``;
const REPO_DIR = 'https://flopsi69.github.io/crs/depositPhotos/licenses';

// connect to DOM
let styles = document.createElement('style');
styles.innerHTML = stylesList;
document.body.appendChild(styles);

/*** STYLES insert -end- ***/

/*** HTML insert start ***/
let licensEl = `
  <div class='lav-licenses'>
    <div class='lav-license'>
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

    <div class='lav-license'>
      <div class='lav-license__label'>
        <img src='${REPO_DIR}/label-el.svg'>
      </div>
      <div class='lav-license__info'>
        <div class='lav-license__title'>Extended license</div>
        <div class='lav-license__list'>
          <div class='lav-license__item lav-license__item_include'>Unlimited web usage</div>
          <div class='lav-license__item lav-license__item_exclude'>Limited usage for resale, print, advertising</div>
        </div>
        <div class='lav-license__modal-trigger'></div>
      </div>
    </div>
  </div>
`;
/*** HTML insert -end- ***/

function init() {
  document
    .querySelector('.price-table-upgrade')
    .insertAdjacentHTML('beforebegin', licensEl);
}
