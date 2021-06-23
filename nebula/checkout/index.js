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
    text-decoration: line-through;
  }
  .lav-diff__now {
    margin-top: 5px;
    font-weight: bold;
    font-size: 18px;
    line-height: 1.4;
    color: #0B0F41;
    font-family: 'SpaceGrotesk-Bold';
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
        `<img src='${REPO_DIR}/img/icon-close.svg' />`
      );

    order
      .querySelector('.order_remove')
      .insertAdjacentHTML(
        'afterend',
        "<div class='lav-diff'><div class='lav-diff__normal'>Normally: <span></span></div><div class='lav-diff__now'>Now: <span></span></div></div>"
      );

    order
      .querySelector('.lav-diff__now span')
      .insertAdjacentHTML(
        'afterbegin',
        order
          .querySelector('.order__price-original + span')
          .innerText.replace(','),
        ''
      );

    order
      .querySelector('.lav-diff__normal span')
      .insertAdjacentHTML(
        'afterbegin',
        order.querySelector('.order__price-original').innerText.replace(',', '')
      );

    // order
    //   .querySelector('.order_remove')
    //   .insertAdjacentElement(
    //     'afterend',
    //     order.querySelector('.order__price-original-wrap')
    //   );

    let reportBlock = `
      <div class='lav-report'>
        Get the full benefit of this test by subscribing to Nebula Explore™ Reporting <a href='#'>Why subscribe?</a>
      </div>
    `;

    order
      .querySelector('.reporting')
      .insertAdjacentHTML('afterbegin', reportBlock);
  }

  function getReportBlock() {
    return;
  }
})();
