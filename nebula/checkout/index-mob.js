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
    text-align: left!important;
    text-transform: none!important;
    margin-bottom: 15px!important;
    margin-top: 15px!important;
  }
  .order__quantity {
    color: #2e3aca;
    font-family: 'SpaceGrotesk-SemiBold';
  }
  .order__images {
    justify-content: space-between!important;
  }
  .order__title {
    font-size: 24px!important;
    margin-bottom: 30px;
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
  .order__wrap {
    padding: 30px 12px!important;
  }
  .plan-selection__item {
    background-color: #ffffff!important;
    margin-bottom: 15px!important;
  }
  .plan-selection__item_active {
    background-color:  #3F4CEC!important;
  }
  .checkmark {
    border-radius:  50%!important;
  }
  .checkbox input:checked~.checkmark[data-v-6a3956f5]:after {
    background: white!important;
    height: 10px!important;
    width: 10px!important;
    border-radius: 50%!important;
    top: 2px!important;
    left: 2px!important;
  }
  .lav-report__link {
    text-align: center;
    margin-top: 20px;
  }
  .lav-report {
    margin-top: 30px;
    margin-bottom: 18px;
    font-size: 16px;
    line-height: 1.4;
    font-family: 'SpaceGrotesk-SemiBold';
    color: #0B0F41;
  }
  .lav-report a {
    font-size: 16px;
    text-decoration: underline;
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
  .lav-summary {
    margin-top: 30px;
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
  .order__subtotal {
    margin-top: 15px!important;
  }
  .order__subtotal {
    flex-wrap: nowrap!important;
    display: flex;
  }
  .plan-selection__caption {
    border: 1px solid #ECF7FD!important;
  }
  .order__price-current {
    font-size: 24px!important;
    font-family: "Roboto"!important;
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
    background-color: #ECECEC;
    padding: 50px 10px 35px;
  }
  
  .modal__close {
    position: absolute;
    top: 10px;
    right: 10px;
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
    background: #ffffff;
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
    margin-top: 15px;
  }
  .modal__image {
    max-width: 430px;
    width: 100%;
    flex-shrink: 0;
    text-align: center;
  }
  .modal__image img {
    max-width: 90%;
  }

  .modal__title {
    font-family: 'Roboto';
    margin-top: 10px;
    font-weight: bold;
    font-size: 24px;
    line-height: 1.5;
    text-align: center;
    color: #0B0F41;
    margin-bottom: 15px;
  }
  .order__subtotal-caption span {
    padding-left: 7px;
    font-size: 14px;
    white-space: nowrap;
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
      }
    }
  });

  observer.observe(document.querySelector('body'), {
    childList: true,
    subtree: true
  });

  /* STYLES insert end */
  gaEvent('loaded');
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

    order
      .querySelector('.order__images')
      .insertAdjacentElement(
        'beforebegin',
        order.querySelector('.order__title')
      );

    order.querySelector('.lav-remove').addEventListener('click', function (e) {
      e.preventDefault();
      order.querySelector('.order_remove a').click();
    });

    order
      .querySelector('.order__images')
      .insertAdjacentHTML(
        'beforeend',
        "<div class='lav-diff'><div class='lav-diff__normal'>Normally: <span></span></div><div class='lav-diff__now'>Now: <span></span></div></div>"
      );

    let reportBlock = `
      <div class='lav-report'>
        Get the full benefit of this test by subscribing to Nebula Explore™ Reporting
        <div class='lav-report__link'>
          <a class='modal-trigger' href='#'>Why subscribe?</a>
        </div>
      </div>
    `;

    order
      .querySelector('.reporting')
      .insertAdjacentHTML('beforebegin', reportBlock);

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
        "<div class='order__subtotal-caption'>Total<span></span></div>"
      );

    order.querySelector('.order__subtotal-caption span').innerText =
      'by ' +
      order
        .querySelector('.order__title')
        .innerText.replace('Whole Genome Sequencing', 'WGS')
        .trim() +
      ':';
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
          
          <div class='modal__image'>
            <img src='${REPO_DIR}/img/modal-image.svg' />
          </div>
          <div class='modal__title'>Why subscribe to Nebula Explore™ Reporting?</div>
          <div class='modal__descr'>
            <p>1. New DNA reports every week that are based on the latest genomic research and learn how they apply to your DNA results.</p>
            <p>2. Access to exploration tools that will enable you to examine any of your ~20,000 genes and generate your personalized reports.</p>
            <p>3. Access to deep ancestry analysis that will enable you to do your full genealogical research. Get deeper insights than with any other DNA test on the market.</p>
            <p>4. Access to premium support provided by geneticists at Nebula Genomics.</p>
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
