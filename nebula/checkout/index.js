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
        eventCategory: 'Exp - Checkout_more_inf',
        eventAction: action,
        eventLabel: label,
        eventValue: value
      };
      dataLayer.push(eventObj);
      console.log('FireEvent', eventObj);
    } catch (e) {
      console.log(e);
    }
  }

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
  hj('trigger', 'checkout_more_info');

  /* STYLES insert start */

  const REPO_DIR = 'https://flopsi69.github.io/crs/nebula/checkout';

  let stylesList = `
  .order__label {
    padding-bottom: 20px;
    padding-top: 30px;
    border-bottom: 1px solid #EBECF3;
  }
  .order__quantity {
    color: #2e3aca;
    font-family: 'SpaceGrotesk-SemiBold';
  }
  .order_remove {
    display: none;
  }
  .order__info-list {
    display: none;
  }
  .plan-label-wrap {
    display: none;
  }
  .plan-offers {
    display: none;
  }
  .reporting {
    border: 1px solid #ECECEC;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 30px;
    margin-top: 25px;
  }
  .plan-selection__item {
    display: flex;
    align-items: center;
    justify-content: center;
    float: none!important;
    width: 100%;
    margin-left: 0!important;
    flex: 1;
    margin-bottom: 0!important;
  }
  .plan-selection__item .checkbox {
    float: none!imoprtant;
    padding-left: 0!important;
  }
  .plan-selection__item .checkmark {
    right: 0;
    margin: auto;
    border-radius: 50%!important;
    height: 20px!important;
    width: 20px!important;
    border-color: #505985!important;
  }

  .plan-selection__item .checkbox .checkmark:after {
    background: #505985!important;
    border-radius: 50%;
    width: 10px!important;
    height: 10px!important;
    left: 3px!important;
    top: 3px!important;
  }
  
  .plan-selection-cart {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .lav-report {
    margin-bottom: 22px;
    font-size: 18px;
    line-height: 1.4;
    font-family: 'SpaceGrotesk-SemiBold';
    color: #0B0F41;
  }
  .lav-report a {
    font-size: 14px;
    text-decoration: underline;
    padding-left: 10px;
  }
  .choose-plan-check-label {
    position: static!important;
    padding-top: 35px!important;
  }
  .order__info {
    padding-left: 35px!important;
  }
  .order__images {
    max-width: 140px!important;
  }
  .lav-diff {
    margin-top: 30px;
    text-align: left;
  }
  .lav-diff__normal {
    font-size: 16px;
    line-height: 1.4;
    color: #505985;
  }
  .lav-diff__normal span {
    font-family: "Roboto";
    text-decoration: line-through;
    color: #EC1C1D;
  }
  .lav-diff__now {
    margin-top: 5px;
    font-weight: bold;
    font-size: 18px;
    line-height: 1.4;
    color: #0B0F41;
    font-family: 'SpaceGrotesk-Bold';
  }
  .lav-diff__now span {
    font-family: "Roboto";
  }
  .order__images-main {
    position: relative;
    padding-top: 10px;
  }
  .lav-remove {
    position: absolute;
    left: 0;
    top: -5px;
    transition: 0.25s;
    cursor: pointer;
  }
  .lav-remove:hover {
    transform: scale(1.07);
    opacity: 0.75;
  }
  .order__label {
    margin-bottom: 0!important;
  }
  .order__wrap {
    margin-top: 0!important;
    padding: 30px 0;
  }
  .choose-plan-check-label .plan-name {
    font-size: 16px!important;
    font-family: 'Roboto';
    font-weight: 400!important;
  }
  .choose-plan-check-label .chosen-plan-price {
    font-family: 'Roboto';
    font-size: 16px!important;
    margin-top: 10px;
  }
  .plan-tooltip {
    top: -5px;
    margin-left: 7px;
    padding-right: 10px;
  }
  .fa-exclamation-circle:before {
    color: #505985;
  }
  .choose-plan-check-label .chosen-plan-name {
    position: relative;
    display: flex;
    margin-left: 7px;
    margin-right: -10px;
  }
  .order__subtotal {
    padding-left: 175px;
    margin-top: 10px!important;
  }
  .lav-summary {
    margin-top: 30px;
    padding-left: 175px;
    font-family: "Roboto";
  }
  .lav-summary__row {
    display: flex;
    justify-content: space-between;
  }
  .lav-summary__row + .lav-summary__row {
    margin-top: 10px;
  }
  .lav-summary__caption {
    color: #505985;
    font-size: 14px;
    line-height: 1.4;
    margin-right: 10px;
  }
  .lav-summary__value {
    font-weight: bold;
    text-align: right;
  }
  .lav-summary__price {
    display: flex;
    align-items: center;
  }
  .lav-summary__price-old {
    color: #EC1C1D;
    font-size: 12px;
    margin-right: 13px;
    font-weight: 400;
    text-decoration-line: line-through;
  }
  .lav-summary__price-save {
    font-size: 14px;
    font-weight: bold;
    color: #EC1C1D;
  }
  .order__save-wrap {
    display: none!important;
  }
  .order__subtotal-caption {
    font-family: 'Roboto';
    font-size: 24px;
    line-height: 1.4;
    color: #0B0F41;
  }
  .modal {
    position: fixed;
    display: flex;
    padding: 15px;
    top: 0;
    right: 150%;
    bottom: 0;
    left: 0;
    z-index: 1050;
    outline: 0;
    overflow: hidden;
    overflow-x: hidden;
    overflow-y: auto;
    background: rgb(11 15 65 / 50%);
    transition: opacity 0.35s;
    pointer-events: none;
    opacity: 0;
  }

  .modal_active {
    right: 0;
    opacity: 1;
    pointer-events: auto;
  }
  
  .modal__body {
    position: relative;
    margin: auto;
    max-width: 1040px;
    width: 100%;
    box-shadow: 0 5px 15px rgba(0,0,0,.5);
    background-color: #f5f7fa;
    border-radius: 20px;
    padding: 60px;
  }
  
  .modal__close {
    position: absolute;
    top: 35px;
    right: 35px;
    font-size: 24px;
    outline: none;
    line-height: 0;
    cursor: pointer;
    transition: 0.35s;
    border-radius: 50%;
    border: 1px solid #EBECF3;
    height: 30px;
    width: 30px;
    color: #505985;
    transition: 0.2s;
    cursor: pointer;
    background: none;
  }
  .modal__close:hover {
    border-color: red;
  }
  .modal__row {
    display: flex;
    align-items: center;
  }
  .modal__descr {
    font-family: 'Roboto';
    font-size: 18px;
    line-height: 1.5;
    color: #505985;
  }
  .modal__descr p {
    margin: 0;
  }
  .modal__descr p + p {
    margin-top: 20px;
  }
  .modal__image {
    max-width: 430px;
    width: 100%;
    flex-shrink: 0;
    margin-left: 12px;
  }

  .modal__title {
    font-family: 'Roboto';
    font-weight: bold;
    font-size: 24px;
    line-height: 1.5;
    text-align: center;
    color: #0B0F41;
    margin-bottom: 40px;
  }
  `;

  let stylesEl = document.createElement('style');
  stylesEl.id = 'lav-styles';
  stylesEl.innerHTML = stylesList;
  document.body.appendChild(stylesEl);

  let observer = new MutationObserver(mutations => {
    for (let mutation of mutations) {
      for (let node of mutation.addedNodes) {
        if (!(node instanceof HTMLElement)) continue;
        if (node.classList.contains('cart-page')) {
          initExp();
          observer.disconnect();
        }
        console.log(node);
      }
    }
  });

  let demoElem = document.querySelector('body');
  observer.observe(demoElem, { childList: true, subtree: true });

  document.addEventListener('DOMContentLoaded', function (event) {
    console.log('DOM fully loaded and parsed');
  });

  /* STYLES insert end */
  gaEvent('loaded');
  // initExp();
  function initExp() {
    console.log('Exp init!');
    document.querySelectorAll('.order_main_wrap').forEach(function (orderEl) {
      initOrderStyle(orderEl);
    });
    initModal();
  }

  function initOrderStyle(order) {
    order
      .querySelector('.order__images-main')
      .insertAdjacentHTML(
        'afterbegin',
        `<img class='lav-remove' src='${REPO_DIR}/img/icon-close.svg' />`
      );

    order.querySelector('.lav-remove').addEventListener('click', function (e) {
      e.preventDefault();
      order.querySelector('.order_remove a').click();
    });

    order
      .querySelector('.order_remove')
      .insertAdjacentHTML(
        'afterend',
        "<div class='lav-diff'><div class='lav-diff__normal'>Normally: <span></span></div><div class='lav-diff__now'>Now: <span></span></div></div>"
      );

    let reportBlock = `
      <div class='lav-report'>
        Get the full benefit of this test by subscribing to Nebula Explore™ Reporting <a class='modal-trigger' href='#'>Why subscribe?</a>
      </div>
    `;

    order
      .querySelector('.reporting')
      .insertAdjacentHTML('afterbegin', reportBlock);

    order.querySelectorAll('.choose-plan-check-label').forEach(function (el) {
      el.querySelector('.chosen-plan-name').insertAdjacentElement(
        'beforeend',
        el.querySelector('.plan-tooltip')
      );
      el.querySelector('.plan-tooltip').addEventListener(
        'mouseenter',
        function () {
          if (el.classList.contains('yearly-label')) {
            gaEvent('click on info for Yearly Subscription');
          } else if (el.classList.contains('monthly-label')) {
            gaEvent('click on info for Monthly Subscription');
          } else if (el.classList.contains('lifetime-label')) {
            gaEvent('click on info for ULA Subscription');
          }
        }
      );
    });

    let summaryEl = `
      <div class='lav-summary'>
        <div class='lav-summary__row'>
          <div class='lav-summary__caption'>Ultra Deep Whole Genome Sequencing:</div>
          <div class='lav-summary__value lav-summary__price'>
            <div class='lav-summary__price-old'>$2999</div>
            <div class='lav-summary__price-new'>$999</div>
          </div>
        </div>
        <div class='lav-summary__row'>
          <div class='lav-summary__caption'>You save:</div>
          <div class='lav-summary__value lav-summary__price-save'>$0</div>
        </div>
      </div>
    `;

    order
      .querySelector('.order__subtotal')
      .insertAdjacentHTML('beforebegin', summaryEl);

    order
      .querySelector('.order__subtotal-quantity')
      .addEventListener('click', function () {
        setPrices(order);
      });

    order
      .querySelector('.order__subtotal')
      .insertAdjacentHTML(
        'afterbegin',
        "<div class='order__subtotal-caption'>Total:</div>"
      );
    setPrices(order);
  }

  function setPrices(parent) {
    parent.querySelector('.lav-diff__now span').innerText = parent
      .querySelector('.order__price-original + span')
      .innerText.replace(',', '');

    parent.querySelector('.lav-diff__normal span').innerText = parent
      .querySelector('.order__price-original')
      .innerText.replace(',', '');

    parent.querySelector('.lav-summary__price-old').innerText = parent
      .querySelector('.order__price-original')
      .innerText.replace(',', '');
    parent.querySelector('.lav-summary__price-new').innerText = parent
      .querySelector('.order__price-original + span')
      .innerText.replace(',', '');

    parent.querySelector('.lav-summary__price-save').innerText =
      '$' +
      (parseInt(
        parent
          .querySelector('.lav-summary__price-old')
          .innerText.replace('$', '')
      ) -
        parseInt(
          parent
            .querySelector('.lav-summary__price-new')
            .innerText.replace('$', '')
        ));
  }

  function initModal() {
    let modal = `
      <div class="modal">
        <div class="modal__body modal-subscribe">
          <!-- Close modal -->
          <button class="modal__close">&times;</button>
          
          <div class='modal__title'>Why subscribe to Nebula Explore™ Reporting?</div>
          <div class='modal__row'>
            <div class='modal__descr'>
              <p>1. New DNA reports every week that are based on the latest genomic research and learn how they apply to your DNA results.</p>
              <p>2. Access to exploration tools that will enable you to examine any of your ~20,000 genes and generate your personalized reports.</p>
              <p>3. Access to deep ancestry analysis that will enable you to do your full genealogical research. Get deeper insights than with any other DNA test on the market.</p>
              <p>4. Access to premium support provided by geneticists at Nebula Genomics.</p>
            </div>
            <div class='modal__image'>
              <img src='${REPO_DIR}/img/modal-image.svg' />
            </div>
          </div>
        </div>
      </div>
    `;

    document.querySelector('body').insertAdjacentHTML('beforeend', modal);

    let modalEl = document.querySelector('.modal');

    document
      .querySelector('.modal__close')
      .addEventListener('click', function (e) {
        e.preventDefault();
        modalClose();
      });

    modalEl.addEventListener('click', function (e) {
      if (e.target.classList.contains('modal_active')) {
        modalClose();
      }
    });

    document.querySelectorAll('.modal-trigger').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        gaEvent('click on Why subscribe');
        modalEl.classList.add('modal_active');
      });
    });

    function modalClose() {
      gaEvent('close Subscription info pop-up');
      modalEl.classList.remove('modal_active');
    }
  }
})();
