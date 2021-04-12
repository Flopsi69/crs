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

// gaEvent('loaded');

// connect to DOM

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
  hj('trigger', 'place_ad_sell');
} catch (e) {}

let stylesList = `
  .sjs-place-ad-toggle-mode {
    pointer-events: none;
    opacity: 0;
  }
`;

if (location.href.includes('place-ad/selectmodel')) {
  console.log('yes');
  location.href = 'https://bimedis.com/place-ad/sell';
}

let styles = document.createElement('style');
styles.id = 'go-flow-styles';
styles.innerHTML = stylesList;
document.body.appendChild(styles);
