(function () {
  (function (h, o, t, j, a, r) {
    h.hj =
      h.hj ||
      function () {
        (h.hj.q = h.hj.q || []).push(arguments);
      };
    h._hjSettings = { hjid: 1209457, hjsv: 6 };
    a = o.getElementsByTagName('head')[0];
    r = o.createElement('script');
    r.async = 1;
    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
    a.appendChild(r);
  })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
  hj('trigger', 'hp_9_cta');

  console.log('initExp');
  function gaEvent(action, label, value) {
    if (!action) {
      action = '';
    }
    if (!label) {
      label = '';
    }
    window.dataLayer = window.dataLayer || [];
    try {
      let eventObj = {
        event: 'event-to-ga',
        eventCategory: 'Exp - HP with 9 CTAs',
        eventAction: action,
        eventLabel: label,
      };
      dataLayer.push(eventObj);
      console.log('FireEvent', eventObj);
    } catch (e) {
      console.log(e);
    }
  }

  /* STYLES insert start */
  const REPO_DIR = 'https://flopsi69.github.io/crs/nebula/landings';

  let stylesList = `
  .learn {
    display: block!important;
  }
  `;

  let stylesEl = document.createElement('style');
  stylesEl.id = 'lav-styles';
  stylesEl.innerHTML = stylesList;
  document.body.appendChild(stylesEl);

  gaEvent('loaded');

  document.addEventListener('click', function (e) {
    if (
      e.target.classList.contains('learn__item') ||
      e.target.closest('.learn__item')
    ) {
      if (e.target.classList.contains('learn__item')) {
        gaEvent(
          'click on the new CTA',
          e.target.querySelector('.learn__item-caption').innerText
        );
      } else {
        gaEvent(
          'click on the new CTA',
          e.target.closest('.learn__item').querySelector('.learn__item-caption')
            .innerText
        );
      }
    }
  });

  // let observer = new MutationObserver(mutations => {
  //   for (let mutation of mutations) {
  //     for (let node of mutation.addedNodes) {
  //       if (!(node instanceof HTMLElement)) continue;
  //       if (node.classList.contains('cart-page')) {
  //         initExp();
  //         observer.disconnect();
  //       }
  //     }
  //   }
  // });

  // observer.observe(document.querySelector('body'), {
  //   childList: true,
  //   subtree: true
  // });
  /* STYLES insert end */

  function initExp() {
    console.log('Exp init!');
    document.querySelectorAll('.order_main_wrap').forEach(function (orderEl) {
      initOrderStyle(orderEl);
    });
    initModal();
  }
})();
