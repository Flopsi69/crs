(function () {
  console.log('Optimize activated!');
  // Vars
  const REPO_DIR = 'https://flopsi69.github.io/crs/depositPhotos/trial';

  /***  HotJar ***/

  /***  END_HotJar ***/

  /***  GaEvents ***/
  function gaEvent(action, label, value) {
    if (!action) {
      action = '';
    }
    if (!label) {
      labael = '';
    }
    if (!value) {
      value = '';
    }
    window.dataLayer = window.dataLayer || [];
    try {
      let eventObj = {
        event: 'event-to-ga',
        eventCategory: 'Experiment - Recently Viewed Block',
        eventAction: action,
        eventLabel: label,
        eventValue: value,
      };
      dataLayer.push(eventObj);
      // console.log('FireEvent', eventObj);
    } catch (e) {
      // console.log(e);
    }
  }
  /***  END_GaEvents ***/

  /***  Translates ***/

  // let recentlyText = 'Recently viewed';
  // let lang = document.querySelector('html').lang;

  // if (lang == 'ru') {
  //   recentlyText = 'Недавно просмотренные';
  // } else if (lang == 'es-es') {
  //   recentlyText = 'Visto recientemente';
  // } else if (lang == 'pt-br') {
  //   recentlyText = 'Visualizado recentemente';
  // } else if (lang == 'it') {
  //   recentlyText = 'Visualizzato recentemente';
  // } else if (lang == 'pl') {
  //   recentlyText = 'Ostatnio oglądane';
  // } else if (lang == 'nl') {
  //   recentlyText = 'Recent bekeken';
  // } else if (lang == 'de') {
  //   recentlyText = 'Zuletzt angesehen';
  // } else if (lang == 'fr') {
  //   recentlyText = 'Vu récemment';
  // } else if (lang == 'tr') {
  //   recentlyText = 'Son Görüntülenen';
  // }

  /***  END_Translates ***/

  /***  InitStyles ***/
  let stylesList = `
  .fields-group__part .field-box {
    margin-left: 0;
  }
  .billing-trial__wrap {
    padding: 0;
    background: transparent;
    border-radius: 0;
    box-shadow: none;
    align-items: flex-start;
  }
  .billing-trial__order-info, .billing-trial__cell-title {
    display: none;
  }
  .lav-info {
    width: 780px;
    max-width: 100%;
    flex-shrink: 0;
    box-sizing: border-box;
    padding: 40px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 40px 0 rgb(0 0 0 / 8%);
    margin-right: 27px;
  }
  .billing-trial__cell {
    padding: 40px;
    padding-top: 64px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 40px 0 rgb(0 0 0 / 8%);
  }
  .billing-trial__cell_benefits {
    display: none;
  }
  .lav-head {
    margin-bottom: 50px;
  }
  .lav-head__title {
    font-weight: bold;
    font-size: 32px;
    line-height: 37px;
    color: #3C3C3C;
  }
  .lav-timeline {
    display: flex;
  }
  .lav-timeline__block {
    flex: 1;
  }
  .lav-timeline__block + .lav-timeline__block {
    margin-left: 15px;
  }
  .lav-timeline__title {
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    margin-bottom: 3px;
  }
  .lav-timeline__title_blue {
    color: #4792DE;
  }
  .lav-timeline__title_green {
    color: #21C35D;
  }
  .lav-timeline__date {
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    color: #696969;
  }
  .lav-timeline__image {
    margin: 24px 0 35px;
    height: 24px;
    display: flex;
    align-items: center;
    margin-left: -7px;
  }
  .lav-timeline__image-right {
    margin-left: -15px;
  }
  .lav-timeline__subtitle {
    margin-bottom: 26px;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: #3C3C3C;
  }
  .lav-timeline__list {
    font-size: 12px;
    line-height: 14px;
    color: #3C3C3C;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .lav-timeline__item {
    position: relative;
    padding-left: 22px;
  }
  .lav-timeline__item:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    margin-right: 10px;
    width: 13px;
    height: 9px;
    background: url(${REPO_DIR}/img/timeline-check.svg) center no-repeat;
    background-size: contain;
  }
  .lav-timeline__item + .lav-timeline__item {
    margin-top: 20px;
  }
  .lav-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 40px;
    padding-top: 30px;
    border-top: 1px solid #DBDBDB;
  }
  .lav-footer__caption {
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: #3C3C3C;
  }
  .lav-footer__info {
    display: flex;
    align-items: center;
    margin-left: 40px;
  }
  .lav-footer__price {
    margin-right: 36px;
    font-weight: bold;
    font-size: 32px;
    line-height: 37px;
    text-align: center;
    color: #3C3C3C;
  }
  .lav-footer__cancel {
    font-size: 12px;
    line-height: 20px;
    text-transform: capitalize;
    color: #4792DE;
    transition: 0.2s;
  }
  .lav-footer__cancel:hover {
    opacity: 0.7;
  }
  .lav-hat {
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    background: #0E2A54;
    border-radius: 8px 8px 0px 0px;
    padding: 5px;
    text-align: center;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    text-transform: uppercase;
    color: #FFFFFF;
  }
  .billing-process {
    background: #F0F1F3;
    border-radius: 8px;
    padding: 20px 20px 30px;
  }
  @media screen and (min-width: 991px) {
    .billing-trial {
      max-width: 1260px;
    }
  }
  .billing-process_trial .billing-process__btn {
    background-color: #4792de;
    border-color: #4792de;
  }
  .billing-process_trial .billing-process__btn:hover {
    background-color: #2482e2;
  }
  .lav-summary {
    margin-bottom: 20px;
    text-align: left;
  }
  .lav-summary__title {
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    color: #3C3C3C;
  }
  .lav-summary__caption {
    font-size: 16px;
    line-height: 18px;
    color: #3C3C3C;
    margin-top: 20px;
  }
  .lav-summary__subprice {
    font-weight: bold;
    font-size: 36px;
    line-height: 41px;
    color: #3C3C3C;
    margin-top: 5px;
  }
  .lav-summary__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: bold;
    color: #3C3C3C;
    padding-top: 16px;
    border-top: 1px solid #DBDBDB;
    margin-top: 33px;
  }
  .lav-summary__footer-caption {
    font-size: 18px;
    line-height: 21px;
  }
  .lav-summary__footer-value {
    font-size: 20px;
    line-height: 23px;
  }
  .billing-trial__form .fields-group__wrap {
    height: auto;
  }
  .fields-group__wrap {
    display: block;
  }
  .fields-group__part_half {
    width: 100%;
  }
  .fields-group.focus .fields-group__wrap {
    border-width: 1px;
  }
  .lav-modal {
    position: fixed;
    display: flex;
    padding: 15px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1050;
    outline: 0;
    overflow: hidden;
    overflow-x: hidden;
    overflow-y: auto;
    background: rgba(66, 66, 66, 0.73);
    transition: 0.35s;
    pointer-events: none;
    opacity: 0;
  }
  
  .lav-modal_active {
    opacity: 1;
    pointer-events: auto;
  }
  
  .lav-modal__body {
    position: relative;
    margin: auto;
    max-width: 780px;
    width: 100%;
    box-shadow: 0 5px 15px rgba(0,0,0,.5);
    padding: 20px 100px 45px;
    background: #F4F4F5;
    border-radius: 10px;
    text-align: center;
    box-sizing: border-box;
  }
  
  .lav-modal__close {
    position: absolute;
    top: 17px;
    width: 25px;
    height: 25px;
    right: 17px;
    padding: 0;
    border: 0;
    outline: none;
    line-height: 0;
    cursor: pointer;
    transition: 0.35s;
  }
  .lav-modal__title {
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    color: #000000;
  }
  .lav-modal__step-title {
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #1F53C9;
    margin-bottom: 8px;
  }
  .lav-modal__step {
    padding: 0 15px;
    max-width: 202px;
    width: 100%;
  }
  .lav-modal__step-caption {
    font-size: 14px;
    line-height: 17px;
    color: #000000;
  }
  .lav-modal__steps {
    display: flex;
    justify-content: space-between;
    margin: 0 -15px 20px;
  }
  .lav-modal__video {
    background: #C4C4C4;
    border-radius: 7px;
  }
  .lav-modal__video video {
    max-width: 100%;
    height: 55vh;
    max-height: 320px;
  }
  `;

  let stylesEl = document.createElement('style');
  stylesEl.id = 'lav-styles-trial';
  stylesEl.innerHTML = stylesList;
  document.body.appendChild(stylesEl);
  /***  END_InitStyles ***/

  /***  Observer ***/
  let observer = new MutationObserver((mutations) => {
    for (let mutation of mutations) {
      for (let node of mutation.addedNodes) {
        if (!(node instanceof HTMLElement)) continue;

        if (node.classList.contains('wrapper')) {
          initExp();
        }
        console.log(node);
      }
    }
  });

  observer.observe(document.querySelector('body'), {
    childList: true,
    subtree: true,
  });
  /***  END_Observer ***/

  // Start Script
  initExp();
  function initExp() {
    console.log('initExp');
    if (!document.querySelector('.lav-hat')) {
      document
        .querySelector('.billing-trial__cell')
        .insertAdjacentHTML(
          'afterbegin',
          '<div class="lav-hat">Start Free Trial</div>'
        );
      document.querySelector('.billing-trial__payment-title').innerText =
        'Payment Method';
    }

    if (!document.querySelector('.lav-info')) {
      buildInfoBlock();
    }
    if (!document.querySelector('.lav-summary')) {
      buildSummaryBlock();
    }
    if (!document.querySelector('.lav-modal')) {
      initModal();
    }
  }

  function buildInfoBlock() {
    var infoBlock = `
    <div class="lav-info">
      <div class="lav-head">
        <div class="lav-head__title">Let’s Start your 7 Days Trial!</div>
      </div>

      <div class="lav-timeline">
        <!-- Left col -->
        <div class="lav-timeline__block">
          <div class="lav-timeline__title lav-timeline__title_blue ">Start Free trial</div>
          <div class="lav-timeline__date">04.05.2021</div>
          <div class="lav-timeline__image">
            <img src="${REPO_DIR}/img/timeline-left.svg" alt="">
          </div>
          <div class="lav-timeline__subtitle">What will you get now:</div>
          <ul class="lav-timeline__list">
            <li class="lav-timeline__item">Search and save images you like</li>
            <li class="lav-timeline__item">Download any 10 images or vectors for free</li>
            <li class="lav-timeline__item">No billing today</li>
            <li class="lav-timeline__item">Free to cancel any time before trial ends</li>
          </ul>
        </div>

        <!-- Right col -->
        <div class="lav-timeline__block">
          <div class="lav-timeline__title lav-timeline__title_green">You pay here</div>
          <div class="lav-timeline__date">11.05.2021</div>
          <div class="lav-timeline__image lav-timeline__image-right">
            <img src="${REPO_DIR}/img/timeline-right.svg" alt="">
          </div>
          <div class="lav-timeline__subtitle">And much more after paid subscription</div>
          <ul class="lav-timeline__list">
            <li class="lav-timeline__item">Flexible Plan activation for $99 per year</li>
            <li class="lav-timeline__item">Download any images or vectors according to your plan
              (10 images or vectors each month) </li>
            <li class="lav-timeline__item">Unused download transfer to the next month</li>
            <li class="lav-timeline__item">Additional images are $1 each</li>
          </ul>
        </div>
      </div>

      <div class="lav-footer">
        <div class="lav-footer__caption">Amount due today</div>

        <div class="lav-footer__info">
          <div class="lav-footer__price">$0.00</div>
          <a href="#" class="lav-footer__cancel">How do I cancel?</a>
        </div>
      </div>
    </div>
    `;

    document
      .querySelector('.billing-trial__wrap')
      .insertAdjacentHTML('afterbegin', infoBlock);
  }

  function buildSummaryBlock() {
    var summaryBlock = `
    <div class="lav-summary">
      <div class="lav-summary__title">Order Summary</div>
      <div class="lav-summary__caption">Free Trial</div>
      <div class="lav-summary__subprice">$0.00</div>
    
      <div class="lav-summary__footer">
        <div class="lav-summary__footer-caption">Total</div>
        <div class="lav-summary__footer-value">$0.00</div>
      </div>
    </div>
    `;

    document
      .querySelector('.billing-process')
      .insertAdjacentHTML('afterbegin', summaryBlock);
  }

  function initModal() {
    let modal = `
    <div class="lav-modal">
      <div class="lav-modal__body">
        <!-- Close modal -->
        <button class="lav-modal__close">
          <img src='${REPO_DIR}/img/icon-close.svg'>
        </button>

        <div class="lav-modal__title">How do I cancel?</div>

        <div class="lav-modal__steps">
          <div class="lav-modal__step">
            <div class="lav-modal__step-title">Step 1</div>
            <div class="lav-modal__step-caption">Go to your account settings</div>
          </div>
          <div class="lav-modal__step">
            <div class="lav-modal__step-title">Step 2</div>
            <div class="lav-modal__step-caption">Billing details</div>
          </div>
          <div class="lav-modal__step">
            <div class="lav-modal__step-title">Step 3</div>
            <div class="lav-modal__step-caption">Click “Cancel Trial”</div>
          </div>
        </div>

        <div class="lav-modal__video">
          <video controls>
            <source src="${REPO_DIR}/video.mov" type="video/mp4">
          </video>
        </div>
      </div>
    </div>
  `;
    document.querySelector('body').insertAdjacentHTML('beforeend', modal);

    let modalEl = document.querySelector('.lav-modal');

    document
      .querySelector('.lav-modal__close')
      .addEventListener('click', function (e) {
        e.preventDefault();
        modalClose();
      });

    modalEl.addEventListener('click', function (e) {
      if (e.target.classList.contains('lav-modal_active')) {
        modalClose();
      }
    });

    function modalClose() {
      modalEl.classList.remove('lav-modal_active');
    }

    document
      .querySelector('.lav-footer__cancel')
      .addEventListener('click', function (e) {
        e.preventDefault();
        modalEl.classList.add('lav-modal_active');
      });
  }
})();
