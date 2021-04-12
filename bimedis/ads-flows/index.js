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

if (document.body) {
  let styles = document.createElement('style');
  styles.id = 'go-flow-styles';
  styles.innerHTML = stylesList;
  document.body.appendChild(styles);
} else {
  setTimeout(() => {
    let styles = document.createElement('style');
    styles.id = 'go-flow-styles';
    styles.innerHTML = stylesList;
    document.body.appendChild(styles);
  }, 1000);
}
