// function gaEvent(action, label = '') {
//   window.dataLayer = window.dataLayer || [];

//   try {
//     let eventObj = {
//       event: 'ga_event',
//       eventCategory: 'Exp — PDP: add phone number',
//       eventAction: action
//     };

//     if (label) {
//       eventObj['eventLabel'] = label;
//     }

//     dataLayer.push(eventObj);
//   } catch (e) {}
// }

// (function (h, o, t, j, a, r) {
//   h.hj =
//     h.hj ||
//     function () {
//       (h.hj.q = h.hj.q || []).push(arguments);
//     };
//   h._hjSettings = { hjid: 2174050, hjsv: 6 };
//   a = o.getElementsByTagName('head')[0];
//   r = o.createElement('script');
//   r.async = 1;
//   r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
//   a.appendChild(r);
// })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
// window.hj =
//   window.hj ||
//   function () {
//     (hj.q = hj.q || []).push(arguments);
//   };
// if (window.innerWidth < 992) {
//   hj('trigger', 'pdp__add_phone_number_mob');
// } else {
//   hj('trigger', 'pdp__add_phone_number_des');
// }

/* STYLES insert start */
// height40;x

const REPO_DIR = 'https://flopsi69.github.io/crs/crello/tips';

let stylesList = `
  .lav-tip {
    display: flex;
    justify-content: space-between;
    background: #2053C9;
    border-radius: 8px;
    padding: 8px 15px;
    color: #fff;
  }
  .lav-tip__label {
    background: #F5EEE7;
    border-radius: 5px;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    color: #2053C9;
    padding: 1px 8px;
  }
  .lav-tip__title {
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #FFFFFF;
  }
  .lav-tip__caption {
    font-size: 10px;
    line-height: 12px;
    color: #FFFFFF;
  }
`;

let stylesEl = document.createElement('style');
stylesEl.id = 'go-phone-styles';
stylesEl.innerHTML = stylesList;
document.body.appendChild(stylesEl);

/* STYLES insert end */
function bannerInit() {
  let bannerEl = `
      <div class='lav-tip'>
        <div class='lav-tip__label'>Tip</div>
        <div class='lav-tip__info>
          <div class='lav-tip__title>How to remove backgrounds from images</div>
          <div class='lav-tip__caption>1:22 min view</div>
        </div>
        <div class='lav-tip__play>
          <img src='${REPO_DIR}/icon-play.svg'
        </div>
      </div>
  `;

  document
    .querySelector('#sidebar .typography-display-s')
    .insertAdjacentHTML('afterend', bannerEl);
}
bannerInit();
