(function () {
  function gaEvent(action, label, value) {
    if (!action) {
      action = '';
    }
    if (!label) {
      label = '';
    }
    if (!value) {
      value = '';
    }
    window.dataLayer = window.dataLayer || [];
    try {
      let eventObj = {
        event: 'event-to-ga',
        eventCategory: 'Exp - Checkout_more_info',
        eventAction: action,
        eventLabel: label,
        eventValue: value,
      };
      dataLayer.push(eventObj);
      console.log('FireEvent', eventObj);
    } catch (e) {
      console.log(e);
    }
  }

  /* STYLES insert start */
  const REPO_DIR = 'https://flopsi69.github.io/crs/uplead/pricing';

  let stylesList = `
    .uael-rbs-switch:checked+.uael-rbs-slider {
      background-color: #00A2BB!important;
    }
    .uael-rbs-slider {
      border: 1px solid #00A2BB!important;
      background: transparent!important;
    }
    .uael-rbs-slider:before {
      background-color: #00A2BB!important;
      bottom: 50%!important;
      transform: translateY(50%)!important;
    }
    .uael-rbs-switch:checked+.uael-rbs-slider:before {
      transform: translate(2.1em, 50%)!important;
      background-color: #fff!important;
    }
    .lav-annually {
      margin-top: -16px;
      margin-bottom: 16px;
      font-size: 20px;
      line-height: 22px;
      font-weight: 200;
    }
    .lav-annually span {
      font-weight: 700;
      color: #00A2BB;
    }
    .lav-annually_white {
      color: #fff;
    }
    .lav-annually_white span {
      color: #fff;
    }

  `;

  let stylesEl = document.createElement('style');
  stylesEl.id = 'lav-styles';
  stylesEl.innerHTML = stylesList;
  document.body.appendChild(stylesEl);

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
  initExp();
  function initExp() {
    document.querySelector('.uael-rbs-switch').checked = 'checked';
    document.querySelector('.uael-rbs-section-1').stylesEl.display = 'none';
    document.querySelector('.uael-rbs-section-2').stylesEl.display = 'block';
    var tableEl = document.querySelector('.uael-rbs-section-2');
    var priceCaption = document.querySelector(
      '.uael-rbs-section-1 .month-subtext'
    ).innerText;
    tableEl
      .querySelectorAll('.elementor-widget-wrap')
      .forEach(function (colEl, index) {
        if (colEl.querySelector('.month-subtext')) {
          colEl.querySelector('.month-subtext').innerText = priceCaption;
        }

        if (index == 0) {
          colEl
            .querySelector('.elementor-button-wrapper')
            .insertAdjacentHTML(
              'beforebegin',
              '<div class="lav-annually lav-annually_white"><span>$0</span> Annually</div>'
            );

          if (colEl.querySelector('.month-white')) {
            colEl.querySelector('.month-white').innerText = priceCaption;
          }
        } else if (index == 1) {
          colEl
            .querySelector('.elementor-button-wrapper')
            .insertAdjacentHTML(
              'beforebegin',
              '<div class="lav-annually"><span>$890</span> Annually</div>'
            );
          colEl.querySelector('.month-subtext').parentElement.innerText;

          colEl.querySelector(
            '.month-subtext'
          ).parentElement.parentElement.innerHTML = colEl
            .querySelector('.month-subtext')
            .parentElement.parentElement.innerHTML.trim()
            .replace(/\$[\d,]+/, '$74');
        } else if (index == 2) {
          colEl
            .querySelector('.elementor-button-wrapper')
            .insertAdjacentHTML(
              'beforebegin',
              '<div class="lav-annually"><span>$1,790</span> Annually</div>'
            );
          colEl.querySelector(
            '.month-subtext'
          ).parentElement.parentElement.innerHTML = colEl
            .querySelector('.month-subtext')
            .parentElement.parentElement.innerHTML.trim()
            .replace(/\$[\d,]+/, '$149');
        } else {
          colEl
            .querySelector('.elementor-button-wrapper')
            .insertAdjacentHTML(
              'beforebegin',
              '<div class="lav-annually"><span>$3,590</span> Annually</div>'
            );
          colEl.querySelector(
            '.month-subtext'
          ).parentElement.parentElement.innerHTML = colEl
            .querySelector('.month-subtext')
            .parentElement.parentElement.innerHTML.trim()
            .replace(/\$[\d,]+/, '$299');
        }
      });
  }
})();
