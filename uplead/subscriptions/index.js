(function () {
  (function (h, o, t, j, a, r) {
    h.hj =
      h.hj ||
      function () {
        (h.hj.q = h.hj.q || []).push(arguments);
      };
    h._hjSettings = { hjid: 864509, hjsv: 6 };
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
  hj('trigger', 'pricing_page_buy_annual_plan_app');

  function gaEvent(action, label, value) {
    if (!action) {
      action = '';
    }
    window.dataLayer = window.dataLayer || [];
    try {
      let eventObj = {
        event: 'event-to-ga',
        eventCategory: 'Exp - Pricing page buy annual plan_app',
        eventAction: action,
      };
      dataLayer.push(eventObj);
      console.log('FireEvent', eventObj);
    } catch (e) {
      console.log(e);
    }
  }

  /* STYLES insert start */
  const REPO_DIR = 'https://flopsi69.github.io/crs/uplead/subscriptions';

  let stylesList = `
    .react-switch-bg {
      background: transparent!important;
      border: 1px solid #00A2BB!important;
      height: 30px!important;
    }

    .react-switch-handle {
      background: #00A2BB!important;
      top: 5px!important;
    }
    .lav-annually {
      color: #69727A;
      margin-top: 16px;
      margin-bottom: 16px;
      font-size: 20px;
      line-height: 22px;
      font-weight: 300;
    }
    .lav-annually span {
      font-weight: 500;
      color: #00A2BB;
    }
    .accountPlans__freeUser-container {
      opacity: 0;
      transition: 0.35s;
    }
  `;

  let tempStyles = `
    .react-switch-bg {
      background: #00A2BB!important;
    }

    .react-switch-handle {
      background: #fff!important;
    }
  `;

  let isFlagSwitcher = false;

  let stylesEl = document.createElement('style');
  stylesEl.id = 'lav-styles';
  stylesEl.innerHTML = stylesList;
  document.body.appendChild(stylesEl);

  let tempStylesEl = document.createElement('style');
  tempStylesEl.id = 'lav-styles-temp';
  tempStylesEl.innerHTML = tempStyles;

  let observer = new MutationObserver((mutations) => {
    for (let mutation of mutations) {
      for (let node of mutation.addedNodes) {
        if (!(node instanceof HTMLElement)) continue;
        console.log(node);

        if (node.classList.contains('accountPlans__freeUser-container')) {
          initExp();
        }

        if (node.classList.contains('enterpriseSuggestion')) {
          if (isFlagSwitcher) {
            gaEvent('Clicks on switcher');
          }
          if (document.querySelector('#billing-switch').checked) {
            document.body.appendChild(tempStylesEl);
          } else {
            document.querySelector('#lav-styles-temp').remove();
          }

          if (
            node
              .querySelector('.product-card__price-note')
              .innerText.includes('year')
          ) {
            changePrices();
          }
        }
      }
    }
  });

  observer.observe(document.querySelector('body'), {
    childList: true,
    subtree: true,
  });

  function initExp() {
    gaEvent('loaded');
    document
      .querySelector('.accountPlans__freeUser-switch-labelAnnual')
      .click();

    document
      .querySelector('.uael-rbs-switch')
      .addEventListener('change', function () {
        gaEvent('Clicks on switcher');
      });
    setTimeout(() => {
      document.querySelector(
        '.accountPlans__freeUser-container'
      ).style.opacity = '1';
      isFlagSwitcher = true;
    }, 400);
  }

  function changePrices() {
    document
      .querySelectorAll('.product-card')
      .forEach(function (product, index) {
        if (product.querySelector('.month-subtext')) {
          product.querySelector('.month-subtext').innerText = priceCaption;
        }

        product.querySelector('.product-card__price-note').innerText = '/month';

        if (index == 0) {
          product
            .querySelector('.product-card__advantages-wrap')
            .insertAdjacentHTML(
              'beforeend',
              '<div class="lav-annually"><span>$890</span> Annually</div>'
            );

          product.querySelector('.product-card__price').innerText = '$74';
        } else if (index == 1) {
          product
            .querySelector('.product-card__advantages-wrap')
            .insertAdjacentHTML(
              'beforeend',
              '<div class="lav-annually"><span>$1790</span> Annually</div>'
            );

          product.querySelector('.product-card__price').innerText = '$149';
        } else if (index == 2) {
          product
            .querySelector('.product-card__advantages-wrap')
            .insertAdjacentHTML(
              'beforeend',
              '<div class="lav-annually"><span>$3590</span> Annually</div>'
            );

          product.querySelector('.product-card__price').innerText = '$299';
        } else {
          product
            .querySelector('.product-card__advantages-wrap')
            .insertAdjacentHTML(
              'beforeend',
              '<div class="lav-annually"><span>$5390</span> Annually</div>'
            );

          product.querySelector('.product-card__price').innerText = '$449';
        }
      });
  }
})();
