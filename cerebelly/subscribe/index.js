console.log('initExp');
var isIniting = false;
/********* Settings **********/
if (!settings) {
  var isModalInit = false;
  var settings = {
    dir: 'https://flopsi69.github.io/crs/cerebelly/subscribe',
    hj: true,
    observe: false,
  };

  //Hotjar
  if (settings.hj) {
    var clarityInterval = setInterval(() => {
      if (typeof clarity == 'function') {
        clearInterval(clarityInterval);
        clarity('set', 'subscription_impr', 'variant_1');
      }
    }, 200);
    gaEvent('loaded');
  }

  // Alalytic
  function gaEvent(action) {
    try {
      var objData = {
        event: 'event-to-ga',
        eventCategory: 'Exp: Subscription improvements',
        eventAction: action,
      };
      console.log('EventFire:', objData);
      dataLayer.push(objData);
    } catch (e) {}
  }

  // Observe
  if (settings.observe) {
    let observer = new MutationObserver((mutations) => {
      for (let mutation of mutations) {
        for (let node of mutation.addedNodes) {
          if (!(node instanceof HTMLElement)) continue;

          // document.body.insertAdjacentText('beforeend', JSON.stringify(node));
          // document.body.insertAdjacentText('beforeend', '===============');
          // console.dir(node.parentElement);
          // console.dir(node.classList);
          console.warning(node);
          console.dir(node);
          // alert(node);
        }
      }
    });

    let demoElem = document.body;

    observer.observe(demoElem, { childList: true, subtree: true });
  }

  // Styles
  var styles = `
  .css-1gs8fg8 .summary-table .sum-row.total.coupon .total, 
  .css-x4jdip .box .wrapper .total, .box .wrapper .lines .content .sum-row .total.with-discount span:last-child, .css-xf71d4 .text-green {
    color: #FC4D38!important;
  }
  .box .wrapper .lines .content .sum-row .total:not(.with-discount) span {
    color: #3856A7!important;
  }

  // .summary-table .sum-row.order-total .total {
  //   color: #3856A7!important;
  // }

  .subscribe-all, .box .wrapper .subscribe-delivery .subscribe,.box .wrapper .subscribe-delivery .delivery {
    display: none!important;
  }
  .box .cart-total-mobile {
    margin-top: 0!important;
  }
  // .subscribe-all *:not(.test),
  // .action .subscribe {
  //   display: none !important;
  // }
  .box .wrapper .lines {
    margin-bottom: 22px!important;
    margin-top: 22px!important;
  }

  .lav-caption {
    color: #3856A7;
    font-size: 12px;
    font-weight: 700;
    line-height: 1;
    border-bottom: 1px solid
  }
  .box .wrapper .info h3 {
    font-weight: 700!important;
    line-height: 1.2!important;
  }
  .remove-box.mobile {
    margin-right: 0!important;
  }
  .remove-box.mobile img {
    border: 1px solid #3856A7;
    border-radius: 50%;
    padding: 2px;
    width: 20px;
  }
  .box .wrapper .total {
    font-size: 14px!important;
  }
  .e-page-content-wrap .box .image img {
    width: 121px!important;
  }
  .e-page-content-wrap .box .image {
    margin-right: 8px!important;
  }
  .e-page-content-wrap .box {
    padding: 0!important;
    margin: 32px 0 15px!important;
  }
  .e-page-content-wrap .box .wrapper .info {
    margin-bottom: 15px!important;
    order: -2;
  }
  .box .wrapper .lines .toggle .items-count {
    font-size: 12px;
    line-height: 12px;
  }
  .box .wrapper .lines .toggle .items-count img {
    width: 9px;
  }
  .box .wrapper .subtotal {
    font-size: 14px!important;
  }
  .box .wrapper {
    display: flex;
    flex-flow: column;
  }
  .tm-text {
    display: none;
  }
  .lav-caption__cancel-wrap {
    padding: 0 15px;
    text-align: center;
    width: 100%;
    margin-top: 15px;
    order: -1;
  }
  .lav-caption__cancel-wrap div {
    display: inline;
  }
  .css-tucdor .summary-table {
    padding-top: 42px;
  }
  .css-tucdor .summary-table .checkout-title {
    margin-bottom: 12px;
    font-size: 14px;
    letter-spacing: 0.15em;
  }
  .summary-table .sum-row .caption, .summary-table .sum-row .total {
    font-size: 14px!important;
  }
  .summary-table .sum-row.total + .summary-table .sum-row.total {
    margin-top: 14px!important;
    margin-bottom: 0!important;
  }
  .summary-table .sum-row.promo-code {
    margin: 26px 0;
  }
  .summary-table .sum-row.promo-code p {
    font-size: 12px!important;
    font-weight: 700!important;
  }
  .summary-table .sum-row.order-total .caption {
    font-size: 16px!important;
    font-weight: 700!important;
  }
  .summary-table .sum-row.order-total .total {
    font-weight: 700!important;
    font-size: 16px!important;
  }
  .summary-table .sum-row.order-total .total .total {
    font-size: 13px!important;
    color: #3856A7!important;
  }
  .summary-table .sum-row .caption, .summary-table .sum-row .total {
    font-weight: 700!important;
  }
  .lav-subscribe {
    position: relative;
    order: -1;
  }
  .lav-subscribe__value {
    font-weight: 700;
    font-size: 12px;
    line-height: 12px;
    color: #3856A7;
  }
  .lav-subscribe__value img {
    margin-left: 7px;
    width: 9px;
  }
  .lav-subscribe__list {
    position: absolute;
    bottom: -15px;
    transform: translateY(100%);
    background: #FFFFFF;
    border-radius: 10px;
    z-index: 99;
    filter: drop-shadow(0px 2px 3px rgba(21, 32, 107, 0.1));
    display: none;
  }
  .lav-subscribe__list.active {
    display: block;
  }
  .lav-subscribe__item {
    padding: 10px;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    color: #3856A7;
  }
  .lav-subscribe__item.active {
    color: #15206B;
    background: #F3F4FB;
  }
  .col-12.col-md-8:not(.custom-column) {
    order: -2;
  }
`;

  var modalEl = `
  <div class='lav-modal-wrapper'>
    <style>
      .lav-modal {
        padding-top: 48px;
        display: none;
        position: fixed;
        z-index: 999999;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        transition: 0.3s;
        background: rgba(206, 211, 242, 0.94);
        margin-top: auto;
        opacity: 0;
      }
      .lav-modal.active {
        display: flex;
      }
      .lav-modal__inner {
        background: #E3EAFD;
        border-radius: 10px 10px 0 0;
        margin-top: auto;
        padding: 30px 25px 17px;
        max-height: 100%;
        overflow: auto;
        transition: 0.5s;
        transform: translateY(100%);
      }
      .lav-modal__inner.active {
        transform: translateY(0);
      }
      .lav-modal__title {
        font-weight: 700;
        font-size: 26px;
        line-height: 34px;
        color: #3856A7;
      }
      .lav-modal__title span {
        color: #FC4D38;
      }
      .lav-confirm__image {
        margin: 18px 0 32px;
        line-height: 0;
      }
      .lav-confirm__image img {
        max-width: 100%;
      }
      .lav-cancel__image {
        text-align: center;
        margin: 32px 0;
        line-height: 0;
      }
      .lav-cancel__list {
        margin-bottom: 32px;
      }
      .lav-modal__list {
        margin-left: 22px;
        font-size: 14px;
        line-height: 140%;
        color: #3856A7;      
      }
      .lav-modal__list li {

      }
      .lav-modal__list li + li {
        margin-top: 5px;
      }
      .lav-confirm__note {
        padding: 30px 18px;
        margin: 24px 0 44px;
        background: #FFFFFF;
        border-radius: 20px;
        font-weight: 300;
        font-size: 16px;
        line-height: 140%;
        text-align: center;
        color: #3856A7;
      }
      .lav-confirm__caption-wrap {
        text-align: center;
        margin-bottom: 20px;
      }
      .lav-confirm__caption-wrap div {
        display: inline;
      }
      .lav-modal__btn {
        background: #E95B44;
        border-radius: 20px;
        width: 100%;
        height: 44px;
        outline: none;
        font-weight: 700;
        font-size: 14px;
        line-height: 14px;
        letter-spacing: 0.2em;
        color: #FFFFFF;
        border: none;
        text-transform: uppercase;
      }
      .lav-modal__close {
        position: absolute;
        top: 17px;
        right: 30px;
      }
      .lav-modal strong {
        font-weight: 900;
      }
    </style>
    <div class='lav-modal'>
      <div class='lav-modal__close'>
        <img src='${settings.dir}/img/close.svg'>
      </div>
      <div class='lav-confirm__inner lav-modal__inner'>
        <div class='lav-confirm__title lav-modal__title'>A flexible subscription adjusted <span>to your needs</span></div>
        <div class='lav-confirm__image'>
          <img src='${settings.dir}/img/confirm.png'>
        </div>
        <ul class='lav-confirm__list lav-modal__list'>
          <li class='lav-confirm__item'><strong>15% OFF</strong> our science-backed baby food.</li>
          <li class='lav-confirm__item'>Easily customize each order exactly how you'd like.</li>
          <li class='lav-confirm__item'>Never run out of baby food with flexible shipping options.</li>
          <li class='lav-confirm__item'>Complete control over confirmlation or rescheduling. </li>
        </ul>
        <div class='lav-confirm__note'>
          Subscribers can get <strong>28 more days</strong> of our baby food <strong>for FREE</strong> each year by taking advantage of the 15% discounted
        </div>
        <div class='lav-confirm__caption-wrap'>
          <div class='lav-confirm__caption lav-caption'>Skip offer and choose one-time purchase</div>
        </div>
        <button class="button primary red lav-confirm__btn lav-modal__btn">Continue</button>
      </div>

      <div class='lav-cancel__inner lav-modal__inner'>
        <div class='lav-cancel__title lav-modal__title'>Cancel or reschedule your subscription <span>anytime</span></div>
        <div class='lav-cancel__image'>
          <img src='${settings.dir}/img/calendar.svg'>
        </div>
        <ul class='lav-cancel__list lav-modal__list'>
          <li class='lav-cancel__item'>Need to reschedule a shipment? Just click 'My subscriptions' and select the next shipment date.</li>
          <li class='lav-cancel__item'>No longer interested in Clean Label Certified food? Leave us by heading to 'Account settings' and clicking on 'Cancel'.</li>
        </ul>
        <button class="button primary red lav-cancel__btn lav-modal__btn">Got it</button>
      </div>
    </div>
  </div>
`;

  var stylesEl = document.createElement('style');
  stylesEl.innerHTML = styles;

  if (document.body) {
    document.body.appendChild(stylesEl);
  } else {
    setTimeout(() => {
      if (document.body) {
        document.body.appendChild(stylesEl);
      } else {
        setTimeout(() => {
          document.body.appendChild(stylesEl);
        }, 2200);
      }
    }, 1000);
  }

  /*** STYLES / end ***/
}

/********* Custom Code **********/
init();
function init() {
  isIniting = true;
  console.log('init');
  if (!document.querySelector('.subscribe-all')) {
    setTimeout(init, 1000);
    return false;
  }
  if (
    !document.querySelector(
      '.subscribe-all .container-checkbox .hidden-checkbox'
    ).checked
  ) {
    document.querySelector('.subscribe-all .container-checkbox').click();
  }

  document
    .querySelector('.subscribe-all')
    .insertAdjacentHTML(
      'beforebegin',
      `<div class="lav-caption lav-caption__head">Why subscribing is better?</div>`
    );

  document.querySelector('.custom-column').insertAdjacentHTML(
    'beforebegin',
    `
    <div class='lav-caption__cancel-wrap'>
      <div class="lav-caption lav-caption__cancel">How to cancel subscription?</div>
    </div>
    `
  );

  initModal();
  initSubscr();

  document.addEventListener('click', function (e) {
    if (
      document.querySelector('.lav-subscribe__list.active') &&
      !e.target.classList.contains('lav-subscribe') &&
      !e.target.closest('.lav-subscribe')
    ) {
      document
        .querySelector('.lav-subscribe__list.active')
        .classList.remove('active');
    }
  });
  isIniting = false;
}

function initSubscr() {
  let subscribeEl = `
    <div class='lav-subscribe'>
      <div class='lav-subscribe__value'><span>2 weeks</span><img src="/wp-content/themes/cerebelly/build/static/media/arrow-down.8b5f8633c844e2c5e5e4c918aec0443b.svg" class="arrow" alt="Arrow"></div>
      <div class='lav-subscribe__list'>
        <div class='lav-subscribe__item active'>2 weeks</div>
        <div class='lav-subscribe__item'>1 month</div>
        <div class='lav-subscribe__item'>One-time purchase</div>
      </div>
    </div>
  `;

  document.querySelectorAll('.e-page-content-wrap .box').forEach((item) => {
    item.querySelector('.info').insertAdjacentHTML('afterend', subscribeEl);

    item.querySelector('.remove-box').addEventListener('click', function () {
      gaEvent('Item deleted');
    });

    // if (!item.querySelector('.delivery')) {
    //   item.querySelector('.lav-subscribe__item:nth-child(2)').remove();
    // }

    item.querySelectorAll('.lav-subscribe__item').forEach((subEl) => {
      gaEvent(subEl.innerText + ' selected');
      subEl.addEventListener('click', function () {
        if (subEl.classList.contains('active')) {
          return false;
        }

        if (subEl.innerText.includes('purchase')) {
          item.classList.add('box_confirm');
          openModal('.lav-confirm__inner');
        } else {
          if (!item.querySelector('.container-checkbox input').checked) {
            item.querySelector('.container-checkbox').click();
          }
          if (item.querySelector('.lav-subscribe__item.active')) {
            item
              .querySelector('.lav-subscribe__item.active')
              .classList.remove('active');
          }

          subEl.classList.add('active');
          item.querySelector('.lav-subscribe__value span').innerText =
            subEl.innerText;
          setTimeout(() => {
            if (
              item.querySelectorAll('.lav-subscribe__item').length == 3 &&
              item.querySelector('.select__input')
            ) {
              if (subEl.innerText.includes('1')) {
                item.querySelector('.select__input').value = 'every 4 weeks';
              } else {
                item.querySelector('.select__input').value = 'every 2 weeks';
              }
              item
                .querySelector('.select__input')
                .dispatchEvent(new Event('input'));
              setTimeout(() => {
                item.querySelector('.select__option').click();
              }, 100);
            }
          }, 150);
        }
      });
    });

    item.querySelector('.lav-subscribe').addEventListener('click', function () {
      item.querySelector('.lav-subscribe__list').classList.toggle('active');
    });
  });
}

function openModal(modal) {
  document.querySelector('.lav-modal__inner:not(' + modal + ')').style.display =
    'none';
  if (document.querySelector('.lav-modal__inner.active')) {
    document
      .querySelector('.lav-modal__inner.active')
      .classList.remove('active');
  }
  document.querySelector('.lav-modal').classList.add('active');
  setTimeout(() => {
    document.querySelector('.lav-modal').style.opacity = '1';
    document.querySelector(modal).classList.add('active');
  }, 200);
}

function closeModal() {
  if (document.querySelector('.box_confirm')) {
    document.querySelector('.box_confirm').classList.remove('box_confirm');
  }
  document.querySelector('.lav-modal__inner.active').classList.remove('active');
  document.querySelector('.lav-modal').style.opacity = '0';
  setTimeout(() => {
    document.querySelector('.lav-modal').classList.remove('active');
  }, 500);
  setTimeout(() => {
    document.querySelector('.lav-modal__inner[style]').removeAttribute('style');
  }, 550);
}

function initModal() {
  if (document.querySelector('.lav-modal-wrapper')) {
    document.querySelector('.lav-modal-wrapper').remove();
  }

  document.querySelector('body').insertAdjacentHTML('beforeend', modalEl);

  document
    .querySelector('.lav-modal__close')
    .addEventListener('click', function () {
      if (
        document
          .querySelector('.lav-confirm__inner')
          .classList.contains('active')
      ) {
        gaEvent('Subscription value pop up closed');
      } else {
        gaEvent('Reschedule subscription pop up closed');
      }
      closeModal();
    });

  document
    .querySelector('.lav-cancel__btn')
    .addEventListener('click', function (e) {
      e.preventDefault();
      gaEvent('Tap on the Go It button');
      closeModal();
    });

  document
    .querySelector('.lav-confirm__btn')
    .addEventListener('click', function (e) {
      e.preventDefault();
      closeModal();
      // if (
      //   !document.querySelector('.box_confirm') &&
      //   !document.querySelector(
      //     '.subscribe-all .container-checkbox .hidden-checkbox'
      //   ).checked
      // ) {
      //   document.querySelector('.subscribe-all .container-checkbox').click();
      // }
    });

  document
    .querySelector('.lav-confirm__caption')
    .addEventListener('click', function () {
      gaEvent('Skip offer tapped');
      if (document.querySelector('.box_confirm')) {
        document
          .querySelector('.box_confirm .lav-subscribe__item.active')
          .classList.remove('active');

        document.querySelector(
          '.box_confirm .lav-subscribe__value span'
        ).innerText = 'One-time purchase';
        document
          .querySelector('.box_confirm .lav-subscribe__item:last-child')
          .classList.add('active');

        if (document.querySelector('.box_confirm .hidden-checkbox').checked) {
          document.querySelector('.box_confirm .container-checkbox').click();
        }
      } else {
        if (
          document.querySelector(
            '.subscribe-all .container-checkbox .hidden-checkbox'
          ).checked
        ) {
          document.querySelector('.subscribe-all .container-checkbox').click();
        }

        document
          .querySelectorAll('.e-page-content-wrap .box')
          .forEach((item) => {
            if (item.querySelector('.hidden-checkbox').checked) {
              item.querySelector('.hidden-checkbox').click();
            }
            item.querySelector('.lav-subscribe__value span').innerText =
              'One-time purchase';
            item
              .querySelector('.lav-subscribe__list .active')
              .classList.remove('active');
            item
              .querySelector('.lav-subscribe__item:last-child')
              .classList.add('active');
          });
      }

      closeModal();
    });

  document
    .querySelector('.lav-caption__head')
    .addEventListener('click', function () {
      gaEvent('Why subscribing is better tapped');
      openModal('.lav-confirm__inner');
    });

  document
    .querySelector('.lav-caption__cancel')
    .addEventListener('click', function () {
      gaEvent('How to cancel subscription tapped');
      openModal('.lav-cancel__inner');
    });
}

setInterval(() => {
  if (
    !isIniting &&
    location.href == 'https://cerebelly.com/cart' &&
    !document.querySelector('.lav-caption__head') &&
    document.querySelector('.cart-menu')
  ) {
    init();
  }
}, 1250);
