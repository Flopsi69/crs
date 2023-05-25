console.log('initExp');

/********* Settings **********/
const settings = {
  dir: 'https://flopsi69.github.io/crs/nebula/slideIn/',
  clarity: true,
  observe: true,
};

//Clarity
if (settings.clarity) {
  const clarityInterval = setInterval(function () {
    if (typeof clarity == 'function') {
      clearInterval(clarityInterval);
      clarity('set', 'slide_in_pricing_block', 'variant_1');
    }
  }, 1000);
}

// Alalytic 3
function gaEvent(action, label) {
  if (!label) {
    label = '';
  }
  try {
    var objData = {
      event: 'event-to-ga',
      eventCategory: 'Exp: Slide-in pricing block',
      eventAction: action,
      eventLabel: label,
      eventValue: '',
    };
    console.log('EventFire:', objData);
    dataLayer.push(objData);
  } catch (e) {
    console.log('Event Error:', e);
  }
}

// Observe
if (settings.observe) {
  let observer = new MutationObserver((mutations) => {
    for (let mutation of mutations) {
      for (let node of mutation.addedNodes) {
        if (!(node instanceof HTMLElement)) continue;

        if (
          !location.href.includes(
            'nebula.org/whole-genome-sequencing-dna-test/'
          )
        ) {
          location.reload();
        }

        if (
          node.classList.contains('mobile-nav') &&
          node.querySelector('.mobile-navbar-links')
        ) {
          node
            .querySelector('.mobile-navbar-links')
            .insertAdjacentHTML(
              'beforeend',
              `<button class='lav-btn lav-btn__header lav-slidein-trigger'>Shop DNA Test</button>`
            );

          document.querySelector('#app').classList.add('lav-menu-open');

          document
            .querySelector('.lav-btn__header')
            .addEventListener('click', function () {
              document.querySelector('.mobile-menu-button').click();
              openSlideIn();
              gaEvent(`Shop DNA Test button`, 'Burger menu');
            });

          document
            .querySelector('.mobile-menu-button')
            .addEventListener('click', function () {
              document.querySelector('#app').classList.remove('lav-menu-open');
            });
        }
      }
    }
  });

  const awaitBody = setInterval(() => {
    if (document.body) {
      clearInterval(awaitBody);
      observer.observe(document.body, { childList: true, subtree: true });
    }
  }, 100);
}

// Styles
const styles = `
  .lav-overflow {
    overflow: hidden;
  }
  .shoppingCart svg, .shoppingCart svg path {
    fill: #0b0f41;
  }
  .lav-hide {
    display: none!important;
  }
  .lav-preloader #__nuxt:before{
    position: fixed;
    left: 0;
    content: '';
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 99999999;
    background-color: rgba(0,0,0,.5);
  }
  .lds-roller {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-roller div {
    animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    transform-origin: 40px 40px;
  }
  .lds-roller div:after {
    content: " ";
    display: block;
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #fff;
    margin: -4px 0 0 -4px;
  }
  .lds-roller div:nth-child(1) {
    animation-delay: -0.036s;
  }
  .lds-roller div:nth-child(1):after {
    top: 63px;
    left: 63px;
  }
  .lds-roller div:nth-child(2) {
    animation-delay: -0.072s;
  }
  .lds-roller div:nth-child(2):after {
    top: 68px;
    left: 56px;
  }
  .lds-roller div:nth-child(3) {
    animation-delay: -0.108s;
  }
  .lds-roller div:nth-child(3):after {
    top: 71px;
    left: 48px;
  }
  .lds-roller div:nth-child(4) {
    animation-delay: -0.144s;
  }
  .lds-roller div:nth-child(4):after {
    top: 72px;
    left: 40px;
  }
  .lds-roller div:nth-child(5) {
    animation-delay: -0.18s;
  }
  .lds-roller div:nth-child(5):after {
    top: 71px;
    left: 32px;
  }
  .lds-roller div:nth-child(6) {
    animation-delay: -0.216s;
  }
  .lds-roller div:nth-child(6):after {
    top: 68px;
    left: 24px;
  }
  .lds-roller div:nth-child(7) {
    animation-delay: -0.252s;
  }
  .lds-roller div:nth-child(7):after {
    top: 63px;
    left: 17px;
  }
  .lds-roller div:nth-child(8) {
    animation-delay: -0.288s;
  }
  .lds-roller div:nth-child(8):after {
    top: 56px;
    left: 12px;
  }
  @keyframes lds-roller {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }  
  .lav-prel {
    display: none;
  }
  .lav-preloader .lav-prel {
    display: block;
    position: fixed;
    left: 50%;
    top: 50%;
    z-index: 999999999999999999999;
    transform: translate(-50%, -50%);
  }

  .navbar-links .link {
    font-weight: 500;
    font-family: SpaceGrotesk-Medium;
    letter-spacing: 0.04em;
    color: #0B0F41!important;
  }
  @media(min-width: 992px) {
    .navbar-links .link:not(.nuxt-link-exact-active):hover {
      color: #2e3aca!important;
    }
  }
  .navbar-links a.nuxt-link-exact-active {
    font-weight: 700;
    font-family: SpaceGrotesk-Bold;
  }
  .lav-caption {
    font-weight: 500;
    font-family: SpaceGrotesk-Medium;
    font-size: 12px;
    line-height: 130%;
    color: #0B0F41;
    margin-top: 3px;
  }
  .navbar-image {
    flex: initial!important;
  }
  .navbar {
    padding-left: 4.167vw;
    padding-right: 4.167vw;
  }
  .navbar-login-button {
    display: none!important;
  }
  .navbar-logo-links-button {
    align-items: center;
  }
  .lav-btn {
    background-color: #3f4cec;
    border: none;
    border-radius: 5px;
    padding: 5px 20px;
    text-align: center;
    font: 16px SpaceGrotesk-Bold;
    color: #fff;
    cursor: pointer;
    transition: .3s;
    outline: 0;
    width: 100%;
    height: 40px;
  }
  .lav-btn__header {
    margin-left: 40px;
    max-width: 160px;
  }
  @media(min-width: 992px) {
    .lav-btn:hover {
      background-color: #1e2bb3;
    }
  }
  .shoppingCart {
    position: relative;
    padding-top: 0!important;
  }
  .cartBadge {
    position: absolute!important;
    right: -7px!important;
    bottom: initial!important;
    top: -5px!important;
  }
  .lav-login {
    cursor: pointer;
    text-align: center;
    transition: 0.35s;
    text-align: center;
    margin-right: 28px;
  }

  .lav-login__icon {
    line-height: 0;
  }
  .shoppingCart {
    text-align: center;
    transition: 0.35s;
  }
  @media(min-width: 992px) {
    .shoppingCart:hover {
      opacity: 0.7;
    }
    .lav-login:hover {
      opacity: 0.7;
    }
  }
  .jumb__btn:not(.jumb__btn_new) {
    display: none;
  }

  .lav-slide {
    position: fixed;
    z-index: 9999999999;
    padding-left: 25px;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgb(11 15 65 / 50%);
    opacity: 0;
    transition: opacity 0.35s;
  }
  .lav-slide.active {
    opacity: 1;
  }
  .lav-slide__inner {
    display: flex;
    flex-flow: column;
    background: #F9F9F9;
    max-width: 500px;
    width: 100%;
    height: 100%;
    margin-left: auto;
    transition: transform 0.35s;
    transform: translateX(100%);
  }
  .lav-slide.active .lav-slide__inner {
    transform: translateX(0);
  }
  .lav-slide__head {
    display: flex;
    align-items: center;
    font-family: SpaceGrotesk-Bold;
    font-weight: 700;
    font-size: 18px;
    line-height: 130%;
    color: #0B0F41;
    padding: 20px 20px 11px 20px;;
  }
  .lav-slide__head img {
    margin-right: 16px;
    flex-shrink: 0;
  }

  .lav-slide__list {
    padding: 11px 20px 20px;
    overflow-y: auto;
    flex-grow: 1;
  }

  .lav-slide__summary {
    text-align: center;
    padding: 20px;
    margin-top: auto;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.08);
  }
  .lav-slide__total {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .lav-quantity {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 50px;
    background: #F5F5F5;
    border: 1px solid #ECECEC;
    width: 140px;
    font-weight: 700;
    font-size: 18px;
    line-height: 1.45;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #3F4CEC;
    font-family: SpaceGrotesk-Bold;
  }
  .lav-quantity_disabled {
    filter: grayscale(1);
    pointer-events: none;
  }
  .lav-quantity__plus, .lav-quantity__minus {
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 0;
    width: 24px;
    height: 24px;
    cursor: pointer;
    transition: 0.35s;
  }
  @media(min-width: 992px) {
    .lav-quantity__plus:hover, .lav-quantity__minus:hover {
      opacity: 0.7;
    }
  }
  .lav-price {
    font-weight: 700;
    font-size: 24px;
    line-height: 120%;
    font-family: SpaceGrotesk-Bold;
    color: #0B0F41;
    margin-left: 10px;
  }

  .lav-slide__btn {
    font: 18px SpaceGrotesk-Bold;
    height: 54px;
    margin: 16px 0;
  }
  .lav-product {
    position: relative;
    border: 1px solid #ECECEC;
    border-radius: 10px;
    padding: 20px 20px 20px;
    transition: background 0.35s;
    background-color: #fff;
  }
  @media(min-width: 992px) {
    .lav-product:not(.active):hover {
      background-color: #ECF7FD;
      cursor: pointer;
    }
  }
  .lav-product.active {
    background: #ECF7FD;
    border: 2px solid #3F4CEC;
    padding-bottom: 16px;
  }
  .lav-product + .lav-product {
    margin-top: 24px;
  }
  .lav-product__row {
    display: flex;
  }
  .lav-product__price {
    align-self: center;
    text-align: right;
    flex-shrink: 0;
    max-width: 50px;
    width: 100%;
    margin-left: 16px;
  }
  .lav-product__price-old {
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    text-decoration-line: line-through;
    color: #505985;
  }
  .lav-product__price-new {
    font-weight: 700;
    font-size: 16px;
    line-height: 140%;
    color: #0B0F41;
    font-family: SpaceGrotesk-Bold;
  }
  .lav-product__labels {
    position: absolute;
    display: flex;
    right: 12px;
    top: 0;
    transform: translateY(-50%);
  }
  .lav-product__label {
    background: #FFFFFF;
    border: 1px solid #3F4CEC;
    border-radius: 24px;
    padding: 4px 16px;
    font-size: 12px;
    line-height: 120%;
    font-family: SpaceGrotesk-Bold;
    color: #3F4CEC;
  }
  .lav-product__label_mark {
    background: #3F4CEC;
    color: #fff;
  }
  .lav-product__label + .lav-product__label {
    margin-left: 8px;
  }
  .lav-product__image {
    max-width: 120px;
    width: 100%;
    flex-shrink: 0;
    margin-right: 12px;
    text-align: center;
  }
  .lav-product__image-caption {
    display: flex;
    justify-content: center;
    text-align: center;
    margin-bottom: 8px;
  }
  .lav-product__image-x {
    font-family: SpaceGrotesk-Bold;
    font-weight: 700;
    font-size: 16px;
    line-height: 140%;
    color: #3F4CEC;
  }
  .lav-tip {
    position: relative;
    margin-left: 2.5px;
  }
  .lav-tip__body {
    position: absolute;
    z-index: 99;
    background: #FFFFFF;
    border-radius: 5px;
    padding: 20px;
    font-size: 16px;
    line-height: 140%;
    color: #505985;
    bottom: -8px;
    left: -60px;
    transform: translateY(100%);
    width: 290px;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.08);
    text-align: left;
    transition: opacity 0.35s;
    opacity: 0;
    pointer-events: none;
  }
  @media(min-width: 992px) {
    .lav-tip:hover .lav-tip__body {
      opacity: 1;
    }
  }
  @media(max-width: 992px) {
    .lav-tip.active .lav-tip__body {
      opacity: 1;
    }
  }
  .lav-tip__body:before {
    content: '';
    position: absolute;
    background-color: #fff;
    width: 14px;
    height: 14px;
    left: 60.5px;
    top: -5px;
    transform: rotate(45deg);
  }
  .lav-product__image-caption svg {
    width: 12px!important;
    height: 12px;
    fill: #505985;
    color: #505985;
    position: static!important;
  }
  .lav-product__title {
    font-weight: 700;
    font-size: 16px;
    line-height: 140%;
    color: #3F4CEC;
    font-family: SpaceGrotesk-Bold;
  }
  .lav-product__caption {
    font-weight: 500;
    font-family: SpaceGrotesk-Medium;
    margin-top: 4px;
    font-size: 14px;
    line-height: 140%;
    color: #505985;
  }
  .lav-product__get {
    margin-top: 4px;
  }
  .lav-product__member {
    margin-top: 6px;
  }
  .lav-product__toggler {
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 12px;
    line-height: 130%;
    font-family: SpaceGrotesk-Medium;
    text-decoration-line: underline;
    color: #505985;
    cursor: pointer;
    transition: 0.35s;
  }
  @media(min-width: 992px) {
    .lav-product__toggler:hover {
      opacity: 0.7;
    }
  }
  .lav-product__toggler.active img {
    transform: rotate(180deg);
  }
  .lav-product__toggler img {
    margin-left: 6px;
    transition: 0.35s;
    margin-top: 2px;
  }
  .lav-product__list {
    display: none;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: #505985;   
    margin-top: 4px; 
  }
  .lav-product__list.active {
    display: block;
  }
  .lav-product__item {
    position: relative;
    padding-left: 15px;
  }
  .lav-product__item:before {
    content: '';
    position: absolute;
    top: 8px;
    left: 6px;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background-color: #505985;
  }
  .lav-product__footer {
    display: none;
    padding-top: 16px;
    margin-top: 16px;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #3F4CEC;
  }
  .lav-product.active .lav-product__footer {
    display: flex;
  }
  .lav-product__footer-logo {
    display: flex;
    font-family: SpaceGrotesk-Bold;
    align-items: center;
    font-weight: 700;
    font-size: 14px;
    line-height: 130%;
    color: #0B0F41;
  }
  .lav-product__footer-logo img {
    flex-shrink: 0;
    margin-right: 8px;
  }

  .lav-slide__compare {
    display: inline-block;
    font-family: SpaceGrotesk-Bold;
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    color: #3F4CEC;
    cursor: pointer;
    transition: 0.35s;
  }
  .lav-slide__close {
    transition: 0.35s;
    cursor: pointer;
  }
  @media(min-width: 992px) {
    .lav-slide__compare:hover {
      opacity: 0.7;
    }
    .lav-slide__close:hover {
      opacity: 0.7;
    }
  }
  .lav-product__dropdown-list {
    display: none;
    position: absolute;
    background: #fff;
    left: 20px;
    right: 20px;
    padding: 12px;
    box-shadow: 0px 2px 8px rgba(73, 73, 73, 0.13);
    border-radius: 5px;
    font-weight: 500;
    font-size: 14px;
    font-family: SpaceGrotesk-Medium;
    line-height: 140%;
    color: #505985;
    bottom: 60px;
  }
  .lav-product__dropdown.active .lav-product__dropdown-list {
    display: block;
  }
  .lav-product__dropdown-value {
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.35s;
  }
  .lav-product__dropdown-value img {
    width: 12px;
    max-width: 12px;
    margin-left: 6px;
    margin-top: 3px;
    transition: 0.35s;
  }
  .lav-product__dropdown.active .lav-product__dropdown-value img {
    transform: rotate(180deg);
  }
  .lav-product__dropdown-value span {
    font-weight: 500;
    font-family: SpaceGrotesk-Medium;
    font-size: 14px;
    line-height: 20px;
    color: #505985;
    border-bottom: 1px dashed #505985;
    transition: 0.35s;
    white-space: nowrap;
  }
  .lav-product__dropdown.active .lav-product__dropdown-value span {
    color: #3F4CEC;
    border-color: #3F4CEC;
  }
  .lav-product__dropdown-item {
    padding: 8px 12px;
    cursor: pointer;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.35s;
  }
  .lav-product__dropdown-item + .lav-product__dropdown-item {
    border-top: 1px solid #fff;
  }
  .lav-product__dropdown-item.active {
    background-color: #ECF7FD;
  }
  @media(min-width: 992px) {
    .lav-product__dropdown-item:not(.active):hover {
      background-color: #eee;
    }
    .lav-product__dropdown-value:hover {
      opacity: 0.7;
    }
  }
  @media(max-width: 992px) {
    .lav-slide__head {
      padding: 16px 16px 10px;
    }
    .lav-product + .lav-product {
      margin-top: 20px;
    }
    .lav-product__label {
      font-size: 11px;
    }
    .lav-product {
      padding: 20px 12px 16px;
    }
    .lav-product.active {
      padding-bottom: 12px;
    }
    .lav-product__image {
      max-width: 53px;
    }
    .lav-product__image-x {
      font-size: 16px; 
      line-height; 1.3;
    }
    .lav-product__footer-logo {
      font-size: 11px;
      line-height: 120%;
      max-width: 160px;
      margin-right: 10px;
    }
    .lav-product__footer-logo img {
      width: 22px;
      margin-right: 6px;
    }
    .lav-product__footer {
      margin-top: 12px;
      padding-top: 12px;
    }
    .lav-product__caption {
      color: #0B0F41;
      font-size: 13px;
    }
    .lav-product__price {
      align-self: start;
      margin-left: 10px;
    }
    .lav-tip__body {
      left: -40px;
    }
    .lav-tip__body:before {
      left: 40px;
    }
    .lav-product__footer-logo br {
      display: none;
    }
    .lav-product__list {
      font-size: 11px;
      line-height: 1.4;
    }
    .lav-slide__list {
      padding: 10px 16px 16px;
    }
    .lav-tip__body {
      font-size: 14px;
    }
    .lav-product__dropdown-list {
      left: 12px;
      right: 12px;
    }
  }
  @media (max-width: 1150px) {
    .navbar-links .link {
      font-size: 12px;
      letter-spacing: 0;
    }
    .lav-btn__header {
      margin-left: 25px;
    }
  }
  @media (max-width: 767.98px) {
    .mobile-navbar-link.shoppingCart {
      margin-bottom: 0!important;
    }
    .lav-caption {
      display: none;
    }
    .mobile-menu-button-div {
      flex: initial!important;
    }
    .navbar-image {
      flex: 1!important;
    }
    .mobile-navbar-link.shoppingCart {
      margin-right: 30px;
    }
    .navbar {
      padding: 0!important;
    }
    .navbar-logo-links-button {
      padding-top: 15px!important;
      padding-bottom: 15px!important;
    }
    .lav-btn__header {
      margin-left: 0;
    }
    .lav-menu-open:before {
      content: '';
      position: fixed;
      z-index: 9;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background: #0B0F41;
      opacity: 0.5;
    }
  }
`;

const stylesEl = document.createElement('style');
stylesEl.innerHTML = styles;

/*** STYLES / end ***/

/********* Custom Code **********/
let count = 1;

const awaitBody = setInterval(() => {
  if (document.body) {
    document.body.appendChild(stylesEl);
    clearInterval(awaitBody);
    init();
  }
}, 100);

function init() {
  gaEvent('loaded');
  console.log('init');

  document.addEventListener('click', function (e) {
    if (e.target.closest('.plan__btn')) {
      // if (e.target.closest('.plan__summary') && window.innerWidth > 768) {
      //   gaEvent(
      //     'Buy ' +
      //       e.target.closest('.plan').querySelector('.plan__title').innerText +
      //       ' DNA Test Bottom CTA click'
      //   );
      // } else {
      //   gaEvent(
      //     'Buy ' +
      //       e.target.closest('.plan').querySelector('.plan__title').innerText +
      //       ' DNA Test CTA click'
      //   );
      // }

      addPreloader();
      document.querySelector('.shoppingCart').click();
    }
  });

  handleHeader();
  initSlideIn();
}

function addPreloader() {
  document.body.classList.add('lav-preloader');
  document
    .querySelector('#__nuxt')
    .insertAdjacentHTML(
      'beforebegin',
      '<div class="lds-roller lav-prel"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>'
    );

  setTimeout(() => {
    if (document.body) {
      document.body.classList.remove('lav-preloader');
    }

    if (document.querySelector('.lav-prel')) {
      document.querySelector('.lav-prel').remove();
    }
  }, 1000);
}

function handleHeader() {
  const oldBtn = document.querySelector('.jumb__btn');
  const newBtn = oldBtn.cloneNode();
  newBtn.innerText = 'Shop DNA Test';
  newBtn.classList.add('jumb__btn_new');

  oldBtn.insertAdjacentElement('afterend', newBtn);

  newBtn.addEventListener('click', function (e) {
    e.preventDefault();
    openSlideIn();
    gaEvent('Shop DNA Test button', 'First screen');

    return false;
  });

  if (window.innerWidth > 992) {
    document
      .querySelector('.navbar-login-button')
      .insertAdjacentHTML(
        'afterend',
        `<button class='lav-btn lav-btn__header lav-slidein-trigger'>Buy now</button>`
      );
  }

  // setTimeout(() => {
  document
    .querySelector('.shoppingCart')
    .insertAdjacentHTML('beforeend', `<div class='lav-caption'>Cart</div>`);

  document.querySelector('.shoppingCart').insertAdjacentHTML(
    'beforebegin',
    `
    <div class='lav-login'>
      <div class='lav-login__icon'>
        <img src='${settings.dir}/img/login.svg' />
      </div>
      <div class='lav-login__caption lav-caption'>Login</div>
    </div>
    `
  );

  document.querySelector('.shoppingCart svg').classList.add('lav-hide');
  document
    .querySelector('.shoppingCart')
    .insertAdjacentHTML(
      'afterbegin',
      `<div class='lav-login__icon'><img src='${settings.dir}/img/cart.svg' /></div>`
    );

  document.querySelector('.lav-login').addEventListener('click', function () {
    gaEvent('Login icon', 'Header');
    document.querySelector('.navbar-login-button .link').click();
  });
  // }, 500);

  for (let item of document.querySelectorAll('.lav-slidein-trigger')) {
    item.addEventListener('click', function () {
      openSlideIn();
      if (item.classList.contains('lav-btn__header')) {
        const height = Math.max(
          document.body.scrollHeight,
          document.body.offsetHeight,
          document.documentElement.clientHeight,
          document.documentElement.scrollHeight,
          document.documentElement.offsetHeight
        );
        gaEvent(
          `Buy now button - ${parseInt((window.pageYOffset * 100) / height)}%`,
          'Header'
        );
      }
    });
  }
}

function initSlideIn() {
  const el = `
    <div class='lav-slide' style='display: none;'>
      <div class='lav-slide__inner'>
        <div class='lav-slide__head'>
          <img src='${settings.dir}/img/slide-close.svg' class='lav-slide__close' />
          <div class='lav-slide__title'>Choose Your Genome Sequencing Bundle</div>
        </div>

        <div class='lav-slide__list'>
        </div>

        <div class='lav-slide__summary'>
          <div class='lav-slide__total'>
            <div class='lav-quantity'>
              <div class='lav-quantity__minus'>
                <img src='${settings.dir}/img/minus.svg' />
              </div>
              <div class='lav-quantity__value'>1</div>
              <div class='lav-quantity__plus'>
                <img src='${settings.dir}/img/plus.svg' />
              </div>
            </div>
            <div class='lav-price'>Total: <span> $524</span></div>
          </div>

          <button class='lav-btn lav-slide__btn'>Checkout</button>
          <div class='lav-slide__compare'>Compare tests</div>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', el);

  document
    .querySelector('.lav-quantity__minus')
    .addEventListener('click', function (e) {
      e.preventDefault();

      if (this.closest('.lav-quantity_disabled')) return false;

      if (count > 1) {
        document.querySelector('.lav-quantity__value').innerText = --count;
      }

      countTotal();
    });

  document
    .querySelector('.lav-quantity__plus')
    .addEventListener('click', function (e) {
      e.preventDefault();

      if (this.closest('.lav-quantity_disabled')) return false;

      if (count < 10) {
        document.querySelector('.lav-quantity__value').innerText = ++count;
      }

      countTotal();
    });

  fillProducts();
  countTotal();

  document.querySelector('.lav-slide').addEventListener('click', function (e) {
    if (
      e.target.classList.contains('lav-slide') &&
      e.target.classList.contains('active')
    ) {
      closeSlideIn(true);
    }
  });

  document
    .querySelector('.lav-slide__compare')
    .addEventListener('click', function () {
      document.querySelector('#choose')?.scrollIntoView({ behavior: 'smooth' });
      gaEvent('Compare tests', 'Slide-in cart');
      document.querySelector('.lav-slide').classList.remove('active');
      setTimeout(() => {
        document.querySelector('.lav-slide').style.display = 'none';
      }, 350);
    });

  document
    .querySelector('.lav-slide__btn')
    .addEventListener('click', function (e) {
      e.preventDefault();
      gaEvent('Checkout CTA button', 'Slide-in cart');

      let btn = document.querySelector('.plan.plan_best .plan__btn');

      if (
        document
          .querySelector('.lav-product.active .lav-product__title')
          .innerText.includes('Ultra')
      ) {
        btn = document.querySelector('.plan.plan_ultra .plan__btn');
      } else if (
        document
          .querySelector('.lav-product.active .lav-product__title')
          .innerText.includes('Standard')
      ) {
        btn = document.querySelector('.plan.plan_basic .plan__btn');
      }

      if (
        document
          .querySelector(
            '.lav-product.active .lav-product__dropdown-value span'
          )
          .innerText.trim()
          .includes('Lifetime')
      ) {
        btn
          .closest('.plan')
          .querySelector('.plan__subscr-list .plan__subscr-item:last-child')
          .click();
      } else {
        if (
          document
            .querySelector('.lav-product.active .lav-product__title')
            .innerText.includes('Standard')
        ) {
          if (
            document
              .querySelector(
                '.lav-product.active .lav-product__dropdown-value span'
              )
              .innerText.trim()
              .includes('Yearly')
          ) {
            btn
              .closest('.plan')
              .querySelector(
                '.plan__subscr-list .plan__subscr-item:first-child'
              )
              .click();
          } else {
            btn
              .closest('.plan')
              .querySelector(
                '.plan__subscr-list .plan__subscr-item:nth-child(2)'
              )
              .click();
          }
        } else {
          btn
            .closest('.plan')
            .querySelector('.plan__subscr-list .plan__subscr-item:first-child')
            .click();
        }
      }

      for (let i = 0; i < count; i++) {
        btn.click();
      }

      // closeSlideIn();
    });

  document
    .querySelector('.lav-slide__close')
    .addEventListener('click', function () {
      closeSlideIn();
    });
}

function fillProducts() {
  for (let product of document.querySelectorAll(
    '.plan__main:not(.plan__placeholder)'
  )) {
    const parentEl = product.closest('.plan');

    if (!parentEl) {
      setTimeout(fillProducts, 1000);
      console.log('Refill');
      return false;
    }

    let el = document.createElement('div');
    el.classList.add('lav-product');

    let type = 'standart';
    let tip =
      'We decode a large portion of your genome at 0.4x coverage using next-generation DNA sequencing technology.';
    let valueX = '0.4x';

    let dropdownList = '';

    for (let plan of parentEl.querySelectorAll(
      '.plan__subscr-list .plan__subscr-item'
    )) {
      if (plan.innerText.includes('Lifetime')) {
        dropdownList += `<div class='lav-product__dropdown-item active'>${plan.innerText.trim()}</div>`;
      } else {
        dropdownList += `<div class='lav-product__dropdown-item'>${plan.innerText.trim()}</div>`;
      }
    }
    // let dropdownList = `
    //   <div class='lav-product__dropdown-item'>Yearly Membership ($12.49/mo)</div>
    //   <div class='lav-product__dropdown-item active' data-price='275'>Lifetime Membership ($275)</div>
    // `;

    if (product.querySelector('.plan__title').innerText.trim() === 'Deep') {
      type = 'deep';
      valueX = '30x';
      tip =
        'Every letter of your DNA is read, on average, 30 times thus providing high accuracy.';
    } else if (
      product.querySelector('.plan__title').innerText.trim() === 'Ultra Deep'
    ) {
      valueX = '100x';
      type = 'ultra';
      tip =
        'Every letter of your DNA is read, on average, 100 times thus providing even higher accuracy.';
    } else {
      // dropdownList = `
      //   <div class='lav-product__dropdown-item'>Yearly Membership ($10.83/mo)</div>
      //   <div class='lav-product__dropdown-item active' data-price='200'>Lifetime Membership ($200)</div>
      // `;
    }

    el.innerHTML = `
      <div class='lav-product__labels'>
        <div class='lav-product__label'></div>
      </div>
      <div class='lav-product__row'>
        <div class='lav-product__image'>
          <div class='lav-product__image-caption'>
            <span class='lav-product__image-x'>${valueX}</span>
            <div class='lav-tip'>
              <svg data-v-1793c6df="" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="info-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="info-icon info-decoded svg-inline--fa fa-info-circle fa-w-16"><path data-v-1793c6df="" fill="currentColor" d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z" class=""></path></svg>

              <div class='lav-tip__body'>${tip}</div>
            </div>
          </div>

          <img src='${product.querySelector('.plan__img').src}' />
        </div>
        <div class='lav-product__info'>
          <div class='lav-product__title'>${parentEl
            .querySelector('.plan__title')
            .innerText.trim()} DNA test</div>
          <div class='lav-product__caption'>We decode 100% of your DNA 
          at&nbsp;${valueX}&nbsp;coverage</div>
          <div class='lav-product__get'>
            <div class='lav-product__toggler'>
              ${
                window.innerWidth > 992
                  ? 'View full list of what you’ll get'
                  : 'View what you’ll get'
              }
              <img src='${settings.dir}/img/chevron.svg' >
            </div>
            <div class='lav-product__list'>
              <div class='lav-product__item'>${
                type === 'ultra' ? 'Ultra' : ''
              } Deep ancestry report</div>
              <div class='lav-product__item'>Detects all predispositions</div>
              <div class='lav-product__item'>Detect rare genetic mutations</div>
              <div class='lav-product__item'>${
                type === 'ultra' ? 'Ultra hight' : 'Hight'
              } accuracy</div>
            </div>
          </div>
          <div class='lav-product__member'>
            <div class='lav-product__toggler'>
            ${
              window.innerWidth > 992
                ? 'Requires Nebula Membership'
                : 'Requires Membership'
            }
              <img src='${settings.dir}/img/chevron.svg' >
            </div>
            <div class='lav-product__list'>
              <div class='lav-product__item'>Provides access your personalized reports and exploration tools</div>
              <div class='lav-product__item'>Begins when sequencing is completed, cancel anytime.</div>
            </div>
          </div>
        </div>
        <div class='lav-product__price'>
          <div class='lav-product__price-old'>$${parentEl
            .querySelector('.plan__price__old_price_text')
            .innerText.trim()}</div>
          <div class='lav-product__price-new'>$${parseInt(
            parentEl
              .querySelector('.plan__price')
              .innerText.trim()
              .replace('$', '')
          )}</div>
        </div>
      </div>
      <div class='lav-product__footer'>
        <div class='lav-product__footer-logo'>
          <img src='${settings.dir}/img/member-logo.svg' />
          Nebula Explore™ Reporting </br> Membership
        </div>
          
        <div class='lav-product__dropdown'>
          <div class='lav-product__dropdown-value'>
            <span>Lifetime ($275)</span>
            <img src='${settings.dir}/img/chevron.svg' >
          </div>
          <div class='lav-product__dropdown-list'>
            ${dropdownList}
          </div>
        </div>
      </div>
    `;

    document
      .querySelector('.lav-slide__list')
      .insertAdjacentElement('beforeend', el);

    if (product.querySelector('.plan__title').innerText.trim() === 'Deep') {
      el.querySelector('.lav-product__label').innerText = 'Save 62%';
      el.querySelector('.lav-product__labels').insertAdjacentHTML(
        'afterbegin',
        `<div class='lav-product__label lav-product__label_mark'>Best value</div>`
      );
    } else if (
      product.querySelector('.plan__title').innerText.trim() === 'Ultra Deep'
    ) {
      el.querySelector('.lav-product__label').innerText = 'Save 59%';
      el.querySelector('.lav-product__labels').insertAdjacentHTML(
        'afterbegin',
        `<div class='lav-product__label lav-product__label_mark'>Ultra high accuracy</div>`
      );
    } else {
      el.querySelector('.lav-product__label').innerText = 'Save 67%';
      el.querySelector('.lav-product__list').innerHTML = `
        <div class='lav-product__item'>Basic ancestry report</div>
        <div class='lav-product__item'>Detects common predispositions</div>
      `;
    }
  }

  document.querySelector('.lav-product').classList.add('active');

  for (let el of document.querySelectorAll('.lav-product__toggler')) {
    el.addEventListener('click', function () {
      if (el.closest('.lav-product__get')) {
        gaEvent(`View full list of what you’ll get`, 'Slide-in cart');
      } else if (el.closest('.lav-product__member')) {
        gaEvent('Requires Nebula Membership', 'Slide-in cart');
      }

      let activeEl = el
        .closest('.lav-product')
        .querySelector('.lav-product__toggler.active');

      if (!el.classList.contains('active') && activeEl) {
        activeEl.nextElementSibling.classList.remove('active');
        activeEl.classList.remove('active');
      }

      el.classList.toggle('active');
      el.nextElementSibling.classList.toggle('active');
    });
  }

  for (let el of document.querySelectorAll('.lav-product__dropdown')) {
    el.addEventListener('click', function (e) {
      if (e.target.closest('.lav-product__dropdown-value')) {
        gaEvent('Dropdown', 'Slide-in cart');
      }

      el.classList.toggle('active');
    });
  }

  for (let el of document.querySelectorAll('.lav-product__dropdown-item')) {
    el.addEventListener('click', function () {
      const value = el.innerText.trim().replace('Membership', '');

      gaEvent(value, 'Slide-in cart');

      if (el.classList.contains('active')) return false;

      el
        .closest('.lav-product__dropdown')
        .querySelector('.lav-product__dropdown-value span').innerText = value;

      el.closest('.lav-product__dropdown-list')
        .querySelector('.active')
        .classList.remove('active');

      el.classList.add('active');

      if (el.innerText.includes('Lifetime')) {
        document
          .querySelector('.lav-quantity')
          .classList.remove('lav-quantity_disabled');
      } else {
        document
          .querySelector('.lav-quantity')
          .classList.add('lav-quantity_disabled');
        count = 1;
        document.querySelector('.lav-quantity__value').innerText = count;
      }

      countTotal();
    });
  }

  for (let el of document.querySelectorAll('.lav-product')) {
    el.querySelector('.lav-tip').addEventListener('mouseenter', function () {
      if (window.innerWidth > 992) {
        gaEvent(
          `Tooltip - ${el
            .querySelector('.lav-product__title')
            .innerText.trim()}`,
          'Slide-in cart'
        );
      }
    });

    el.addEventListener('click', function () {
      if (el.classList.contains('active')) return false;

      gaEvent(
        `Click on Pack - ${el
          .querySelector('.lav-product__title')
          .innerText.trim()}`,
        'Slide-in cart'
      );

      if (document.querySelector('.lav-product.active')) {
        for (let activeEl of document.querySelectorAll(
          '.lav-product.active .active:not(.lav-product__dropdown-item)'
        )) {
          activeEl.classList.remove('active');
        }
        document
          .querySelector('.lav-product.active')
          .classList.remove('active');
      }

      el.classList.add('active');

      if (
        el
          .querySelector('.lav-product__dropdown-value span')
          .innerText.includes('Lifetime')
      ) {
        document
          .querySelector('.lav-quantity')
          .classList.remove('lav-quantity_disabled');
      } else {
        document
          .querySelector('.lav-quantity')
          .classList.add('lav-quantity_disabled');
        count = 1;
        document.querySelector('.lav-quantity__value').innerText = count;
      }

      countTotal();
    });
  }

  for (let el of document.querySelectorAll('.lav-tip')) {
    el.addEventListener('click', function () {
      if (window.innerWidth > 992) return false;

      gaEvent(
        `Tooltip - ${el
          .closest('.lav-product')
          .querySelector('.lav-product__title')
          .innerText.trim()}`,
        'Slide-in cart'
      );

      if (
        !el.classList.contains('active') &&
        document.querySelector('.lav-tip.active')
      ) {
        document.querySelector('.lav-tip.active').classList.remove('active');
      }
      el.classList.toggle('active');
    });
  }

  document.addEventListener('click', function (e) {
    if (
      !e.target.closest('.lav-tip') &&
      document.querySelector('.lav-tip.active')
    ) {
      document.querySelector('.lav-tip.active').classList.remove('active');
    }
  });
}

function countTotal() {
  // let quantity = parseInt(
  //   document.querySelector('.lav-quantity__value').innerText
  // );
  let total = parseInt(
    document
      .querySelector('.lav-product.active .lav-product__price-new')
      .innerText.replace('$', '')
  );

  if (
    document
      .querySelector('.lav-product.active .lav-product__dropdown-value')
      .innerText.includes('Lifetime')
  ) {
    total += parseInt(
      document
        .querySelector('.lav-product.active .lav-product__dropdown-item.active')
        .innerText.match(/\d+/)[0]
    );
  }

  if (count > 1 && !document.querySelector('.lav-quantity_disabled')) {
    total *= count;
  }

  document.querySelector('.lav-price span').innerText = `$${total}`;
}

function closeSlideIn(isOverlay) {
  document.body.classList.remove('lav-overflow');
  if (isOverlay) {
    gaEvent('Click outside the pop-up', 'Slide-in cart');
  } else {
    gaEvent('Close', 'Slide-in cart');
  }

  document.querySelector('.lav-slide').classList.remove('active');
  setTimeout(() => {
    document.querySelector('.lav-slide').style.display = 'none';
  }, 350);
}

function openSlideIn() {
  document.body.classList.add('lav-overflow');
  gaEvent('Visibility', 'Slide-in cart');
  document.querySelector('.lav-slide').style.display = 'block';
  setTimeout(() => {
    document.querySelector('.lav-slide').classList.add('active');
  }, 350);
}
