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
        eventCategory: 'Experiment — Tips',
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
  `;

  let stylesEl = document.createElement('style');
  stylesEl.id = 'lav-styles';
  stylesEl.innerHTML = stylesList;
  document.body.appendChild(stylesEl);

  /* STYLES insert end */
  initExp();
  function initExp() {
    document.querySelectorAll('.order_main_wrap').forEach(function (orderEl) {
      initOrderStyle(orderEl);
    });
    console.log('Exp init!');
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
        Get the full benefit of this test by subscribing to Nebula Explore™ Reporting <a href='#'>Why subscribe?</a>
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
})();
