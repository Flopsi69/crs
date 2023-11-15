(async function () {
  console.debug('*** Experiment started ***');
  await waitFor(() => document.head && document.body, false, { ms: 100 });

  // Config for Experiment
  const config = {
    dir: 'https://flopsi69.github.io/crs/socialboost/plans',
    clarity: ['set', 'exp_pric_pag_imp', 'variant_1'],
    debug: true,
  };

  let isMutationInit = false;

  // *** Utils *** //
  class Modal {
    static list = [];
    constructor(name, html) {
      if (!$('.lav-modal')) {
        this.constructor.init();
      }

      if (this.constructor.list.find((item) => item.name === name)) {
        console.warn('Modal with this name already exists');
        return;
      }

      this.el = document.createElement('div');
      this.el.classList.add('lav-modal__inner', name);
      this.name = name;
      this.el.innerHTML = html;

      $('.lav-modal').insertAdjacentElement('beforeend', this.el);

      this.constructor.list.push(this);
    }

    static init() {
      document.body.insertAdjacentHTML(
        'beforeend',
        `<div class='lav-modal'>
        <div class='lav-modal__close'>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M0.879054 17.9998C0.705203 17.9998 0.535246 17.9483 0.390683 17.8517C0.246121 17.7551 0.133446 17.6179 0.0669111 17.4573C0.000376487 17.2966 -0.0170287 17.1199 0.016897 16.9494C0.0508227 16.7789 0.134555 16.6223 0.257503 16.4993L16.4994 0.257455C16.6642 0.0926093 16.8878 0 17.1209 0C17.3541 0 17.5777 0.0926093 17.7425 0.257455C17.9073 0.4223 18 0.645879 18 0.879006C18 1.11213 17.9073 1.33571 17.7425 1.50056L1.50061 17.7424C1.41906 17.8242 1.32217 17.889 1.2155 17.9331C1.10884 17.9773 0.9945 17.9999 0.879054 17.9998Z" fill="white"/>
          <path d="M17.1209 17.9998C17.0055 17.9999 16.8911 17.9773 16.7844 17.9331C16.6778 17.889 16.5809 17.8242 16.4993 17.7424L0.257455 1.50056C0.0926093 1.33571 0 1.11213 0 0.879006C0 0.645879 0.0926093 0.4223 0.257455 0.257455C0.4223 0.0926093 0.645879 0 0.879006 0C1.11213 0 1.33571 0.0926093 1.50056 0.257455L17.7424 16.4993C17.8654 16.6223 17.9491 16.7789 17.9831 16.9494C18.017 17.1199 17.9996 17.2966 17.933 17.4573C17.8665 17.6179 17.7538 17.7551 17.6093 17.8517C17.4647 17.9483 17.2947 17.9998 17.1209 17.9998Z" fill="white"/>
          </svg>
        </div>
      </div>`
      );

      document.addEventListener('click', (e) => {
        if (
          e.target.classList.contains('lav-modal') ||
          e.target.closest('.lav-modal__close')
        ) {
          if (e.target.closest('.lav-modal__close')) {
            pushDataLayer(
              'exp_pric_pag_imp_but_popup_close',
              'Close',
              'Button',
              'Pop up did you now'
            );
          }
          this.close();
        }

        if (e.target.dataset.modal) {
          this.open(e.target.dataset.modal);
        }

        if (e.target.closest('[data-modal]')) {
          this.open(e.target.closest('[data-modal]').dataset.modal);
        }
      });

      this.addStyles();
    }

    static open(modalName, cb) {
      document.body.classList.add('lav-modal-open');

      if ($('.lav-modal__inner.active')) {
        $('.lav-modal__inner.active').classList.remove('active');
      }

      $(modalName).classList.add('active');

      if (typeof cb === 'function') cb();

      setTimeout(() => {
        $('.lav-modal').classList.add('active');
      }, 100);
    }

    static close(cb) {
      document.body.classList.remove('lav-modal-open');

      $('.lav-modal')?.classList.remove('active');

      $('.lav-video iframe').src = $('.lav-video iframe').src.replace(
        'autoplay=1',
        'autoplay=0'
      );

      if (typeof cb === 'function') cb();

      setTimeout(() => {
        $('.lav-modal__inner.active')?.classList.remove('active');
      }, 400);
    }

    static addStyles() {
      const styles = `
      .lav-modal {
        position: fixed;
        z-index: 999;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(22, 30, 46, 0.90);
        transition: 0.35s;
        opacity: 0;
        pointer-events: none;
        padding: 15px;
        overflow-y: auto;
        max-height: 100%;
        display: flex;
      }
      .lav-modal.active {
        opacity: 1;
        pointer-events: auto;
      }
      .lav-modal__inner {
        position: relative;
        width: 100%;
        max-width: 900px;
        display: none;
        margin: auto;
      }
      .lav-modal__inner.active {
        display: block;
      }
      .lav-modal__close {
        position: absolute;
        cursor: pointer;
        transition: 0.35s;
        line-height: 0;
        padding: 3px;
        right: 24px;
        top: 24px;
      }
      [data-modal] {
        cursor: pointer;
      }
      @media(hover:hover) {
        .lav-modal__close:hover {
          opacity: 0.5;
        }
      }
      .lav-modal-open {
        overflow: hidden;
      }
      .lav-video__learn {
        text-align: center;
        margin-top: 32px;
      }
      .lav-video__learn a {
        color: var(--White, #FFF);
        font-size: 18px;
        line-height: 26px;
        text-decoration: underline;
        text-underline-offset: 2px;
        transition: 0.3s;
        cursor: pointer;
      }
      @media(hover:hover) {
        .lav-video__learn a:hover {
          text-decoration: none;
          opacity: 0.8;
        }
      }
      .lav-video {
        display: flex;
        justify-content: center;
        position: relative;
        border-radius: 25px;
        overflow: hidden;
        height: 508px;
        line-height: 0;
      }
      .lav-video img {
        max-height: 100%;
      }
      .lav-video__preview {
        opacity: .8;
        transition: 0.3s;
        border-radius: 25px;
        background: red;
      }
      .lav-video__preview iframe {
        height: 100%;
      }
      .lav-video__play {
        cursor: pointer;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        transition: 0.3s;
        cursor: pointer;
      }
      @media(hover:hover) {
        .lav-video__play:hover {
          transform: translate(-50%, -50%) scale(1.1);
        }
        .lav-video__preview:hover {
          opacity: .7;
        }
      }
      @media(max-width: 992px) {
        .lav-video {
          height: 52vw;
        }
        .lav-modal__close {
          top: 16px;
          right: 16px;
        }
      }
      .lav-video {}
      .lav-video {}
    `;

      const stylesEl = document.createElement('style');
      stylesEl.classList.add('exp-modal');
      stylesEl.innerHTML = styles;
      document.head.appendChild(stylesEl);
    }
  }

  const orig = console.log;
  console.log = function (...args) {
    orig.apply(console, ['Debug:', ...args]);
  };

  // Styles for Experiment
  const stylePricing = `
  .lav-trust {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 28px;
  }
  .lav-trust__caption {
    color: #fff;
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }
  .lav-trust__caption span {
    font-weight: 600;
  }
  .lav-trust__stars {
    margin: 0 12px;
  }

  .lav-learn {
    margin-top: 24px;
    color: var(--blue-links-2, #76A9FA);
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    text-decoration-line: underline;
    text-underline-offset: 3px;
    cursor: pointer;
    transition: 0.3s;
  }
  @media(hover:hover) {
    .lav-learn:hover {
      opacity: 0.7;
    }
  }

  .lav-switch__title {
    color: var(--White, #FFF);
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    margin-bottom: 44px;
    margin-top: -16px;
  }

  .space-x-4[for="switch"]>:not([hidden])~:not([hidden]) {
    margin-left: 10px;
  }
  [for="switch"]  {
    margin-bottom: -10px;
  }
  [for="switch"] .text-xs {
    display: flex;
    flex-flow: row-reverse;
    position: absolute;
    white-space: nowrap;
    left: -52px;
    bottom: 110%;
    padding: 2px 7px;
  }
  [for="switch"] .text-xs svg {
    margin-left: 0;
    margin-right: 4px;
  }

  .lg\\:grid.lg\\:grid-cols-7 {
    // grid-template-columns: 1fr 1fr 1fr;
    // gap: 24px;
  }
  .lg\\:grid.lg\\:grid-cols-7>div {
    // grid-column-end: auto;
    // grid-column-start: auto;
    // grid-row-start: auto;
    // grid-row-end: auto;
  }
  .lg\\:grid.lg\\:grid-cols-7 {
    display: none;
  }

  .lav-plans {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 24px;
  }
  .lav-plan {
    position: relative;
    border-radius: 8px;
    background: var(--blue-blue-100, #F9FAFB);
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.10);
    display: flex;
    flex-flow: column;
  }
  .lav-plan_popular {
    border: 2px solid var(--blue-blue-btn, #1C64F2);
  }
  .lav-plan_popular:before {
    content: 'Most popular';
    position: absolute;
    z-index: 1;
    left: 50%;
    top: 0;
    transform: translate(-50%, -50%);
    border-radius: 100px;
    background: var(--blue-blue-btn, #1C64F2);
    padding: 6px 16px;
    color: var(--White, #FFF);
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0.7px;
    text-transform: uppercase;

  }
  .lav-plan__head {
    padding: 32px 24px 16px;
    border-bottom: 2px solid var(--blue-blue-200, #F3F4F6);
    background: #FFF;
    text-align: center;
    border-radius: 8px 8px 0 0;
  }
  .lav-plan__title {
    color: #111827;
    font-size: 32px;
    line-height: 40px;
  }
  .lav-plan_popular .lav-plan__title {
    font-weight: 700;
  }
  .lav-plan__price {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 4px;
  }
  .lav-plan__currency {
    color: var(--blue-dark, #161E2E);
    font-size: 32px;
    line-height: 40px;
    align-self: flex-start;
  }
  .lav-plan__value {
    margin: 0 8px 0 4px;
    color: var(--blue-dark, #161E2E);
    font-size: 56px;
    font-weight: 700;
    line-height: 56px;
  }
  .lav-plan__value-old {
    font-size: 30px;
    color: rgb(156, 163, 175);
    text-decoration: line-through;
    font-weight: 300;
  }
  .lav-plan__yearly {
    background: #d9d9d9;
    border-radius: 50px;
    font-size: 12px;
    margin-top: 4px;
    padding: 3px 16px;
    display: none;
  }
  .lav-plan__yearly.active {
    display: inline-block;
  }
  .lav-plan__term {
    color: var(--blue-blue-500, #6B7280);
    font-size: 20px;
    line-height: 28px; 
  }
  .lav-plan__offer {
    margin: 8px -24px 0;
    background: var(--Green, #31C48D);
    padding: 5px;
    color: var(--White, #FFF);
    font-size: 18px;
    font-weight: 500;
    line-height: 26px;
  }
  .lav-plan__offer span {
    font-weight: 700;
  }
  .lav-plan__caption {
    margin: 16px auto 0;
    color: var(--blue-dark, #161E2E);
    font-size: 15px;
    line-height: 20px;
    max-width: 320px;
  }
  .lav-plan__caption span {
    font-weight: 700;
    color: var(--blue-blue-btn, #1C64F2);
  }
  .lav-plan__list {
    text-align: left;
    color: var(--blue-blue-500, #6B7280);
    font-size: 16px;
    line-height: 24px;
    flex-flow: column;
    align-items: flex-start;
    display: flex
  }
  .lav-plan__item + .lav-plan__item {
    margin-top: 12px;
  }
  .lav-plan__body {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    padding: 24px 24px 32px;
    flex-grow: 1;
  }
  .lav-plan__item {
    padding-left: 32px;
    position: relative;
  }
  .lav-plan__item_mark span {
    font-weight: 700;
  }
  .lav-plan__item_tip {
    position: relative;
    display: inline-flex;
  }
  .lav-plan__item_tip span {
    text-decoration-line: underline;
    text-underline-offset: 2px;
    cursor: default;
  }

  .lav-plan__item:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 24px;
    height: 24px;
    background: url(${config.dir}/img/check.svg) center no-repeat;
    background-size: contain;
  }
  .lav-plan__btn {
    border-radius: 6px;
    border: 1px solid var(--blue-blue-200, #F3F4F6);
    background: var(--White, #FFF);
    box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.10);
    padding: 16px 32px;
    color: var(--blue-blue-btn, #1C64F2);
    text-align: center;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px; 
    transition: 0.3s;
    cursor: pointer;
    margin-top: 24px;
  }
  @media(hover:hover) {
    .lav-plan__btn:hover {
      opacity: 0.8;
      transform: translateY(-0.125rem);
    }
  }
  .lav-plan_popular .lav-plan__btn {
    background: var(--blue-blue-btn, #1C64F2);
    border: 1px solid #1C64F2;
    color: var(--social-boost-co-pricing-3903999938964844-x-844-default-nero, #FFF);
  }
  .lav-tip {
    position: relative;
    top: -2px;
    display: inline-block;
    margin-left: 8px;
  }
  .lav-tip__body {
    display: none;
    position: absolute;
    left: 50%;
    top: calc(100% + 6px);
    transform: translateX(-50%);
    width: 220px;
    z-index: 1;
    padding: 4px 8px;
    color: var(--blue-dark, #161E2E);
    font-size: 13px;
    font-weight: 400;
    line-height: 18px;
    border-radius: 1px;
    border: 1px solid var(--blue-blue-200, #F3F4F6);
    background: #fff;
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.10);
  }
  .lav-plan__item_tip:hover .lav-tip__body {
    display: block;
  }
  .lav-tip__body:before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    width: 12px;
    height: 7px;
    transform: translate(-50%, -100%);
    background: url(${config.dir}/img/tip-arrow.svg) center no-repeat;
    background-size: contain;
  }
  .lav-trust__logo_black {
    display: none;
  }
  #login {
    background: rgba(22, 30, 46, 0.90);
  }
  #login > div {
    max-width: 500px;
    width: 100%;
  }
  #login button {
    transition: 0.3s;
  }
  #login h3 {
    text-align: center;
    color: var(--blue-dark, #161E2E);
    opacity: .9;
    font-size: 20px;
    font-weight: 700;
    line-height: 28px;
  }
  #login h3 + p {
    text-align: center;
    margin-top: 8px;
    color: var(--blue-blue-500, #6B7280);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
  .lav-email-form:not(.active) {
    display: none;
  }
  #login form + span.text-sm {
    display: none;
  }
  #login form [type="submit"]:not(.active) {
    display: none;
  }
  #login form button {
    margin-bottom: 0;
    cursor: pointer;
  }
  #login [type="email"] + span {
    font-size: 13px;
    bottom: 105%;
    margin-top: 0;
    right: 0;
  }
  .lav-form-caption {
    color: var(--blue-blue-500, #6B7280);
    font-size: 13px;
    font-weight: 400;
    line-height: 18px;
    margin-top: 12px;
    padding-left: 10px;
  }
  .lav-form-logo {
    display: none;
  }
  @media(max-width: 1023px) {
    .lav-plans {
      margin-top: 50px;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      flex-flow: column;
    }
    .lav-plan_popular {
      order: -2;
    }
    .lav-plan:nth-child(3) {
      order: -1;
    }
    .lav-switch__title {
      margin-top: 0;
    }
    .lav-plan:not(.lav-plan_popular) .lav-plan__head {
      padding-top: 24px;
    }
    .lav-plan__btn {
      background: var(--blue-blue-btn, #1C64F2);
      border: 1px solid #1C64F2;
      color: var(--social-boost-co-pricing-3903999938964844-x-844-default-nero, #FFF);
    }
  }
  @media(max-width: 767px) {
    .lav-trust {
      margin: 0 -24px 0;
      background: #FFF;
      padding: 5px 15px;
    }
    #pricing {
      padding-top: 48px;
    }
    .mb-\\[140px\\] {
      margin-bottom: 0;
    }
    .pb-12 {
      padding-bottom: 0;
    }
    .mb-\\[140px\\] .mt-6:not(.mb-8) {
      margin-top: 0;
    }
    #navbar {
      border-bottom: 1px solid var(--blue-blue-100, #F9FAFB);
    }
    #navbar .border-gray-100 {
      border: none;
    }
    .px-4.pt-12 {
      padding-top: 0;
    }
    .lav-trust__caption {
      color: var(--Text, #212529);
    }
    .lav-trust__logo {
      display: none;
    }
    .lav-trust__logo_black {
      display: block;
    }
  }
  @media(max-width: 639px) {
    #navbar .py-6 {
      margin: 0;
    }
    #navbar .px-4.max-w-7xl {
      padding: 0;
    }
    .lav-trust {
      margin-left: -16px;
      margin-right: -16px;
    }
    .lav-trust__caption {
      font-size: 12px;
      line-height: 16px;
    }
    .lav-trust__caption span {
      font-size: 13px;
    }
    #navbar .get-started-head {
      margin-right: 0;
    }
    #navbar .get-started-head button {
      width: 130px;
    }
    #pricing .leading-6 {
      font-size: 18px;
      line-height: 26px;
    }
    #pricing .leading-9 {
      font-size: 32px;
      line-height: 36px;
    }
    #pricing .leading-7 {
      margin-top: 12px;
      line-height: 26px;
      font-size: 18px;
      padding: 0 16px;
    }
    #pricing .leading-7 br {
      display: none;
    }
    .lav-learn {
      margin-top: 20px;
    }
    .lav-switch__title {
      margin-bottom: 40px;
    }
    .lav-plan_popular:before {
      padding-top: 4px;
      padding-bottom: 4px;
    }
    .lav-plan__body {
      padding-bottom: 24px;
    }
    .lav-plans {
      gap: 16px;
    }
    .lav-plan__title {
      font-size: 24px;
      line-height: 32px;
    }
    .lav-plan__value {
      font-size: 48px;
      line-height: 1;
    }
    .lav-plan__value-old {
      font-size: 28px;
    }
    .lav-plan__term {
      font-size: 18px;
      line-height: 25px;
    }
    .lav-plan__offer {
      margin-top: 12px;
      font-size: 16px;
      line-height: 24px;
    }
    .lav-plan__caption {
      margin-top: 12px;
      font-size: 14px;
    }
    .lav-form-logo {
      display: block;
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;
      top: 32px;
    }
  }
  @media(max-width: 450px) {
    .lav-trust img {
      min-width: 0;
      max-width: 100%;
      width: 100%;
    }
    .lav-trust__stars {
      margin: 0 8px;
    }
    .lav-tip__body {
      transform: translateX(-70%);
    }
    #login > div {
      padding-left: 32px;
      padding-right: 32px;
    }
    .lav-form-caption {
      font-size: 12px;
    }
  }
`;

  const stylePricingEl = document.createElement('style');
  stylePricingEl.classList.add('exp-styles', 'exp-styles-pricing');
  stylePricingEl.innerHTML = stylePricing;

  const stylesHow = `
  .lav-back {
    display: inline-flex;
    align-items: center;
    color: var(--blue-dark, #161E2E);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    margin-left: 56px;
    margin-top: -24px;
    position: relative;
    top: -50px;
    cursor: pointer;
    transition: 0.3s;
  }
  .lav-back svg {
    margin-right: 8px;
  }
  @media(hover:hover) {
    .lav-back:hover {
      opacity: 0.7;
    }
  }
  @media(max-width: 767px) {
    .lav-back {
      margin-left: 15px;
    }
  }
`;

  const styleHowEl = document.createElement('style');
  styleHowEl.classList.add('exp-styles', 'exp-styles-how');
  styleHowEl.innerHTML = stylesHow;

  const stylesCheckout = `
  .fixed.overflow-hidden, .fixed.overflow-hidden>.overflow-hidden {
    position: static;
    overflow: initial;
  }
  .fixed.overflow-hidden>.overflow-hidden {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0 15px 40px;
  }
  .lav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1310px;
    padding: 40px 0;
    width: 100%;
  }
  .lav-header .absolute {
    position: static;
    margin: 0;
  }
  .lav-header .mt-8 {
    display: none;
  }
  .lav-header .pt-10 {
    padding-top: 0;
  }
  .lav-payment {
    position: static;
    padding: 0;
    max-width: 628px;
    flex-basis: 628px;
    border-radius: 8px;
    overflow: hidden;
  }
  .lav-payment__wrap {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 0 15px 40px;
  }
  .lav-payment .bg-white.flex {
    padding: 40px;
  }
  .lav-payment header, .lav-payment form {
    padding: 0;
  }
  .lav-payment header .flex {
    display: none;
  }
  .lav-title {
    color: var(--blue-dark, #161E2E);
    opacity: 0.9;
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
  }
  .lav-caption {
    margin-top: 12px;
    color: var(--blue-blue-500, #6B7280);
    font-size: 16px;
    line-height: 24px;
  }
  .lav-payment form label {
    color: #374151;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }
  .lav-payment form input.\\!border-green-400 {
    background: var(--blue-blue-100, #F9FAFB);
  }
  #email, #instagramName {
    height: 48px;
  }
  #email {
    padding-left: 36px;
  }
  #email + svg {
    position: absolute;
    top: 50%;
    left: 12px;
    transform: translateY(-50%);
  }
  .lav-payment button {
    transition: 0.3s;
    margin-bottom: 0;
  }

  .lav-summary {
    padding: 40px;
    border-radius: 8px;
    background: #FFF;
    margin-left: 24px;
    max-width: 410px;
    flex-basis: 410px;
    width: 100%;
  }
  .lav-summary__title {
    color: var(--blue-dark, #161E2E);
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
  }
  .lav-summary__list {
    margin-top: 32px;
  }
  .lav-summary__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .lav-summary__item:first-child .lav-summary__item-value {
    font-weight: 600;
  }
  .lav-summary__item + .lav-summary__item {
    margin-top: 8px;
  }
  .lav-summary__item-caption {
    color: var(--blue-blue-500, #6B7280);
    font-size: 16px;
    line-height: 24px;
  }
  .lav-summary__item-value {
    color: var(--blue-dark, #161E2E);
    text-align: right;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
  }
  .lav-summary__total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 26px;
    margin-top: 20px;
    border-top: 1px solid #D1D5DB;
  }
  .lav-summary__total-caption {
    color: var(--blue-blue-500, #6B7280);
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }
  .lav-summary__total-value {
    text-align: right;
    color: var(--blue-dark, #161E2E);
    font-size: 14px;
    font-weight: 400;
    line-height: 26px;
  }
  .lav-summary__total-value span {
    font-weight: 600;
    font-size: 24px;
  }
  #email-description {
    color: var(--blue-blue-400, #9CA3AF);
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    margin-top: 20px;
    margin-bottom: 0;
  }
  .lav-coupon {
    margin-top: 24px;
    color: var(--blue-links, #4969B2);
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    text-decoration-line: underline;
    text-align: left;
    text-underline-offset: 2px;
    cursor: pointer;
  }
  [type="submit"] .pl-4 {
    display: none;
  }
  [type="submit"] span {
    padding: 0;
    border: none;
  }
  .lav-header__logo {
    display: none;
  }
  .lav-header__close {
    display: none;
  }
  @media(max-width: 1100px) {
    .lav-summary {
      flex-basis: calc(45% - 24px);
      width: auto;
    }
    .lav-payment {
      flex-basis: 55%;
    }
  }
  @media(max-width: 767px) {
    .lav-payment .bg-white.flex, .lav-summary {
      padding: 15px;
    }
  }

  @media(max-width: 639px) {
    .lav-payment__wrap {
      display: block;
      padding: 24px 32px 58px;
      background: #FFF;
    }
    .fixed.overflow-hidden>.overflow-hidden {
      padding: 0 32px 58px;
      background: #fff;
    }
    .lav-payment {
      max-width: 100%;
      flex-basis: 100%;
      margin-top: 24px;
    }
    .lav-payment .bg-white.flex {
      padding: 0;
    }
    .lav-summary {
      flex-basis: 100%;
      margin: 0;
      padding: 0;
      max-width: 100%;
      margin-top: 40px;
    }
    .lav-summary__total {
      padding-top: 20px;
    }
    .lav-summary__total-value span {
      font-size: 22px;
    }
    .lav-summary__list {
      margin-top: 24px;
    }
    .lav-summary__title {
      font-size: 20px;
      line-height: 28px;
      text-align: center;
    }
    .lav-title {
      font-size: 20px;
      line-height: 28px;
      text-align: center;
    }
    .lav-caption {
      margin-top: 8px;
      text-align: center;
    }
    .lav-header {
      background: #FFF;
      padding: 32px 24px;
      justify-content: center;
    }
    .lav-header> .pt-10, .lav-header > .absolute {
      display: none;
    }
    .lav-header__logo {
      display: block;
      width: 125px;
    }
    .lav-header__close {
      position: absolute;
      right: 19px;
      top: 19px;
      display: block;
    }
    
  }
`;

  const styleCheckoutEl = document.createElement('style');
  styleCheckoutEl.classList.add('exp-styles', 'exp-styles-checkout');
  styleCheckoutEl.innerHTML = stylesCheckout;

  // *** Logic *** //
  console.debug('** InitExp **');

  init();
  function init() {
    if (
      location.href.includes('/pricing') ||
      location.pathname === '/' ||
      location.href.includes('/growth')
    ) {
      console.log('init Pricing');
      initPricing();
      if (!document.querySelector('.exp-styles-pricing')) {
        document.head.appendChild(stylePricingEl);
      }
    } else if (location.href.includes('/how-it-works')) {
      console.log('init HowItWorks');
      initHowItWorks();
      if (!document.querySelector('.exp-styles-how')) {
        document.head.appendChild(styleHowEl);
      }
    } else if (location.href.includes('/checkout')) {
      console.log('init Checkout');
      if (!$('.lav-header')) {
        waitFor(() => $('section.absolute'), initCheckout, { ms: 50 });
      }
      if (!document.querySelector('.exp-styles-checkout')) {
        document.head.appendChild(styleCheckoutEl);
      }
    }
  }

  navigation.addEventListener('navigate', (e) => {
    if (e.navigationType === 'push') {
      console.log('fireNavigate', e);
      setTimeout(init, 300);
    }
  });
  window.addEventListener('popstate', (e) => {
    console.log('firePopState', e);
    setTimeout(init, 300);
  });

  function initCheckout() {
    $('section').classList.add('lav-header');
    $('section.absolute').classList.add('lav-payment');

    $('.lav-header').insertAdjacentHTML(
      'beforeend',
      `
        <img class='lav-header__logo' src="/assets/sb-logo-blue.svg" alt="social-boost-logo">
        <svg class='lav-header__close' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M0.879054 17.9998C0.705203 17.9998 0.535246 17.9483 0.390683 17.8517C0.246121 17.7551 0.133446 17.6179 0.0669111 17.4573C0.000376487 17.2966 -0.0170287 17.1199 0.016897 16.9494C0.0508227 16.7789 0.134555 16.6223 0.257503 16.4993L16.4994 0.257455C16.6642 0.0926093 16.8878 0 17.1209 0C17.3541 0 17.5777 0.0926093 17.7425 0.257455C17.9073 0.4223 18 0.645879 18 0.879006C18 1.11213 17.9073 1.33571 17.7425 1.50056L1.50061 17.7424C1.41906 17.8242 1.32217 17.889 1.2155 17.9331C1.10884 17.9773 0.9945 17.9999 0.879054 17.9998Z" fill="#161E2E"/>
          <path d="M17.1209 17.9998C17.0055 17.9999 16.8911 17.9773 16.7844 17.9331C16.6778 17.889 16.5809 17.8242 16.4993 17.7424L0.257455 1.50056C0.0926093 1.33571 0 1.11213 0 0.879006C0 0.645879 0.0926093 0.4223 0.257455 0.257455C0.4223 0.0926093 0.645879 0 0.879006 0C1.11213 0 1.33571 0.0926093 1.50056 0.257455L17.7424 16.4993C17.8654 16.6223 17.9491 16.7789 17.9831 16.9494C18.017 17.1199 17.9996 17.2966 17.933 17.4573C17.8665 17.6179 17.7538 17.7551 17.6093 17.8517C17.4647 17.9483 17.2947 17.9998 17.1209 17.9998Z" fill="#161E2E"/>
        </svg>
      `
    );

    $('.lav-header__close').addEventListener('click', function (e) {
      e.preventDefault();
      // window.history.back();
      location.href = '/pricing';
    });

    handlePaymentForm();

    function handlePaymentForm() {
      // $('.lav-payment').insertAdjacentHTML(
      //   'beforebegin',
      //   '<div class="lav-payment__wrap"></div>'
      // );
      // $('.lav-payment__wrap').insertAdjacentElement(
      //   'beforeend',
      //   $('.lav-payment')
      // );

      const summaryEl = `
        <div class='lav-summary'>
          <div class='lav-summary__title'>Order summary:</div>
          <div class='lav-summary__list'>
            <div class='lav-summary__item'>
              <div class='lav-summary__item-caption'>Plan:</div>
              <div class='lav-summary__item-value'>Premium</div>
            </div>
            <div class='lav-summary__item'>
              <div class='lav-summary__item-caption'>Growth:</div>
              <div class='lav-summary__item-value'>300+ organic followers /month</div>
            </div>
          </div>
          <div class='lav-summary__total'>
            <div class='lav-summary__total-caption'>Total:</div>
            <div class='lav-summary__total-value'><span>€99</span> /month</div>
          </div>
        </div>
      `;

      if (window.innerWidth < 639) {
        $('.lav-payment form .hidden')?.insertAdjacentHTML(
          'afterend',
          summaryEl
        );
      } else {
        // $('.lav-payment__wrap')?.insertAdjacentHTML('beforeend', summaryEl);
        $('.fixed.overflow-hidden>.overflow-hidden')?.insertAdjacentHTML(
          'beforeend',
          summaryEl
        );
      }

      focusTimeEvent($('.lav-summary'), (time) => {
        pushDataLayer(
          'exp_pric_pag_imp_vis_paymord_foc',
          time,
          'Visibility',
          'Payment. Order summary'
        );
      });

      $('.lav-payment form>.cursor-pointer').classList.add('lav-coupon');
      $('.lav-summary').insertAdjacentElement('beforeend', $('.lav-coupon'));

      const price = $('.tracking-normal').textContent.trim().replace(' ', '');

      const term = $('.lav-header .tracking .leading-0').textContent;
      $(
        '.lav-summary__total-value'
      ).innerHTML = `<span>${price}</span> ${term}`;

      const planName = $('.lav-header h3 + p').textContent;

      $('.lav-summary__item:first-child .lav-summary__item-value').innerText =
        planName;

      $('.lav-summary__item:nth-child(2) .lav-summary__item-value').innerText =
        planName === 'Turbocharged'
          ? 'up to 1000 organic followers /month'
          : planName === 'Basic'
          ? '200+ organic followers /month'
          : '300+ organic followers /month';

      $('.lav-summary').insertAdjacentElement(
        'beforeend',
        $('#email-description')
      );

      $('[typeof="email"] + div').insertAdjacentHTML(
        'beforeend',
        `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
        <path d="M8.46281 7.91503C8.31169 8.00948 8.14168 8.04726 7.99056 8.04726C7.83943 8.04726 7.66942 8.00948 7.5183 7.91503L0 3.32471V9.42624C0 10.7297 1.05785 11.7875 2.36128 11.7875H13.6387C14.9421 11.7875 16 10.7297 16 9.42624V3.32471L8.46281 7.91503Z" fill="#9CA3AF"/>
        <path d="M13.6388 0H2.3614C1.24688 0 0.302366 0.793388 0.0756836 1.85124L8.00957 6.68713L15.9246 1.85124C15.6979 0.793388 14.7534 0 13.6388 0Z" fill="#9CA3AF"/>
      </svg>
    `
      );

      $('.lav-payment header').insertAdjacentHTML(
        'beforeend',
        `
      <div class='lav-title'>Payment</div>
      <div class='lav-caption'>Finish setup and start growing your Instagram&nbsp;today!</div>
      `
      );
    }
  }

  function initHowItWorks() {
    if ($('.lav-back')) return false;
    waitFor(
      () => $('section.px-4 .container .grid > .col-span-12'),
      async () => {
        await delay(500);
        $('section.px-4 .container .grid').insertAdjacentHTML(
          'beforebegin',
          `
        <div class='lav-back'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M0.212937 7.29511L5.3039 2.20416C5.44106 2.07168 5.62477 1.99837 5.81546 2.00003C6.00616 2.00168 6.18857 2.07817 6.32341 2.21302C6.45825 2.34786 6.53474 2.53027 6.5364 2.72096C6.53806 2.91165 6.46475 3.09536 6.33227 3.23253L2.48278 7.08202H15.2727C15.4656 7.08202 15.6506 7.15865 15.787 7.29504C15.9234 7.43143 16 7.61641 16 7.8093C16 8.00219 15.9234 8.18717 15.787 8.32357C15.6506 8.45996 15.4656 8.53658 15.2727 8.53658H2.48278L6.33227 12.3861C6.40173 12.4532 6.45714 12.5334 6.49525 12.6221C6.53337 12.7109 6.55343 12.8063 6.55427 12.9029C6.55511 12.9994 6.53671 13.0952 6.50014 13.1846C6.46357 13.274 6.40957 13.3552 6.34128 13.4235C6.273 13.4917 6.1918 13.5457 6.10242 13.5823C6.01304 13.6189 5.91727 13.6373 5.8207 13.6364C5.72413 13.6356 5.6287 13.6155 5.53997 13.5774C5.45124 13.5393 5.37099 13.4839 5.3039 13.4144L0.212937 8.32349C0.0765934 8.1871 0 8.00215 0 7.8093C0 7.61645 0.0765934 7.4315 0.212937 7.29511Z" fill="black"/>
          </svg>
          Back
        </div>
        `
        );

        document
          .querySelector('.lav-back')
          .addEventListener('click', function () {
            pushDataLayer(
              'exp_pric_pag_imp_but_howit_back',
              'Back',
              'Button',
              'How it worsk'
            );
            // window.history.back();
            location.href = '/pricing';
          });
      }
    );
  }

  function initPricing() {
    if ($('.lav-plans')) return false;

    if (!isMutationInit) {
      isMutationInit = true;
      initMutation(document.body, (el) => {
        if (el.id === 'login') {
          // console.log(el);
          handleLogin(el);

          focusTimeEvent($('#login'), (time) => {
            pushDataLayer(
              'exp_pric_pag_imp_vis_popupreguse_foc',
              time,
              'Visibility',
              'Pop up did you now. Registration. Your Username'
            );
          });
        }
      });
    }

    if (location.href.includes('/pricing')) {
      addTrustWallet();
    }
    changeCopy();

    $('#pricing').insertAdjacentHTML(
      'afterend',
      `<div class='lav-learn'><span data-modal='.howItWork'>Learn how we do it</span></div>`
    );

    $('[for="switch"]').insertAdjacentHTML(
      'beforebegin',
      `<div class='lav-switch__title'>Choose your plan</div>`
    );

    handlePlans();

    new Modal(
      'howItWork',
      `
      <div class='lav-video'>
        <iframe style='display:none;' frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="How Social Boost Works | How We grow Real Instagram followers for you" width="100%" height="100%" src="" data-gtm-yt-inspected-11="true"></iframe>
        <img class='lav-video__preview' src="/assets/how-it-works/how-it-works-poster.webp" />
        <img class='lav-video__play' src="/assets/how-it-works/play-icon.svg" alt="play" />
      </div>
      <div class='lav-video__learn'>
        <a href='/how-it-works'>Learn more</a>
      </div>
      `
    );

    if (!$('.lav-video.lav-handled')) {
      focusTimeEvent($('.lav-video'), (time) => {
        pushDataLayer(
          'exp_pric_pag_imp_vis_popup_foc',
          time,
          'Visibility',
          'Pop up did you now'
        );
      });

      $('.lav-video').classList.add('lav-handled');
      $('.lav-video__play').addEventListener('click', function () {
        pushDataLayer(
          'exp_pric_pag_imp_but_popup_play',
          'Play',
          'Button',
          'Pop up did you now'
        );
        $('.lav-video iframe').src =
          'https://www.youtube.com/embed/85jyo_pTwhw?autoplay=1&amp;mute=0&amp;controls=1&amp;origin=https%3A%2F%2Fsocial-boost.co&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;enablejsapi=1&amp;widgetid=1';

        $('.lav-video iframe').style.display = 'block';
        $('.lav-video__preview').style.display = 'none';
        $('.lav-video__play').style.display = 'none';
      });

      $('.lav-video__learn a').addEventListener('click', function (e) {
        pushDataLayer(
          'exp_pric_pag_imp_lin_popup_learn',
          'Learn more',
          'Link',
          'Pop up did you now'
        );
      });
    }
  }

  function handleLogin(el) {
    $('h3', el).innerText = 'Your Email';
    $('h3 + p', el).innerHTML =
      'Finish setup and start growing<br/>your Instagram today!';

    $('#login .relative').insertAdjacentHTML(
      'afterbegin',
      `<img src="/assets/sb-logo-blue.svg" alt="social-boost-logo" class="lav-form-logo w-[140px]">`
    );

    $('#login [type="email"]')
      .closest('.relative')
      .insertAdjacentHTML(
        'afterend',
        '<div class="lav-form-caption">Your data is secured. We never spam or share your email with third parties</div>'
      );

    $('#login [type="email"]').addEventListener('click', () => {
      if ($('.lav-email-form.active')) {
        pushDataLayer(
          'exp_pric_pag_imp_inp_popupreguse_emai',
          'Email',
          'Input',
          'Pop up did you now. Registration. Your Username'
        );
      } else {
        pushDataLayer(
          'exp_pric_pag_imp_inp_popupregem_ema',
          'Email',
          'Input',
          'Pop up did you now. Registration. Your Email'
        );
      }
    });

    $('#login [type="email"]').addEventListener('click', () => {});

    $('#login .mantine-Input-wrapper').addEventListener('click', () => {
      pushDataLayer(
        'exp_pric_pag_imp_inp_popupreguse_inst',
        'Instagram Username',
        'Input',
        'Pop up did you now. Registration. Your Username'
      );
    });

    $('#login form button').addEventListener('click', function () {
      pushDataLayer(
        'exp_pric_pag_imp_but_popupreguse_cont',
        'Continue',
        'Button',
        'Pop up did you now. Registration. Your Username'
      );
    });

    $('#login .my-6').classList.add('lav-email-form');
    $('#login form [type="submit"]').innerText = 'Continue';
    const cloneBtn = $('#login form [type="submit"]').cloneNode(false);
    cloneBtn.innerText = 'Continue';
    cloneBtn.classList.add('lav-clone-login');
    cloneBtn.removeAttribute('type');
    cloneBtn.removeAttribute('disabled');
    $('#login form [type="submit"]').insertAdjacentElement(
      'beforebegin',
      cloneBtn
    );

    $('.lav-clone-login').addEventListener('click', function (e) {
      console.log('click');
      e.preventDefault();

      pushDataLayer(
        'exp_pric_pag_imp_but_popupregem_cont',
        'Continue',
        'Button',
        'Pop up did you now. Registration. Your Email'
      );

      if (
        !$('#login [type="email"]').value ||
        !$('[type="email"].\\!border-green-400')
      ) {
        $('#login [type="email"]').focus();
        return false;
      }

      $('h3', el).innerText = 'Your Username';
      $('#login .lav-email-form').insertAdjacentHTML(
        'beforeend',
        '<div class="lav-form-caption">By creating an account, you authorize Social Boost marketing team to perform marketing activity on your Instagram Account</div>'
      );
      $('.lav-email-form', el).classList.add('active');
      $('[type="submit"]', el).classList.add('active');
      this.remove();
      $('.lav-form-caption', el).remove();
      // $('.mantine-Input-input', el).focus();
    });
  }

  function handlePlans() {
    const el = `
      <div class='lav-plans'>
        <div class='lav-plan'>
          <div class='lav-plan__head'>
            <div class='lav-plan__title'>Basic</div>
            <div class='lav-plan__price lav-plan__price_month'>
              <div class='lav-plan__currency'>€</div>
              <div class='lav-plan__value'>69</div>
              <div class='lav-plan__term'>/month</div>
            </div>
            <div class='lav-plan__price lav-plan__price_year' style='display: none;'>
              <div class='lav-plan__value lav-plan__value-old'>€69</div>
              <div class='lav-plan__currency'>€</div>
              <div class='lav-plan__value lav-plan__value-new'>57</div>
              <div class='lav-plan__term'>/month</div>
            </div>
            <div class='lav-plan__yearly'>$690 billed yearly</div>
            <div class='lav-plan__offer'><span>200+</span> organic followers /month</div>
            <div class='lav-plan__caption'>
              <span>Real people</span> who like, comment, share and&nbsp;engage with your page
            </div>
          </div>
          <div class='lav-plan__body'>
            <div class='lav-plan__list'>
              <div class='lav-plan__item lav-plan__item_tip'>
                <span>Niche targeting</span>
                <div class='lav-tip'>
                  <img src='${config.dir}/img/quest.svg' />
                  <div class='lav-tip__body'>Target followers that share your interests</div>
                </div>
              </div>
              <div class='lav-plan__item'><span>24/7 live support</span></div>
              <div class='lav-plan__item'><span>Cancel Anytime</span></div>
            </div>
            <div class='lav-plan__btn'>Get Started</div>
          </div>
        </div>

        <div class='lav-plan lav-plan_popular'>
          <div class='lav-plan__head'>
            <div class='lav-plan__title'>Premium</div>
            <div class='lav-plan__price lav-plan__price_month'>
              <div class='lav-plan__currency'>€</div>
              <div class='lav-plan__value'>99</div>
              <div class='lav-plan__term'>/month</div>
            </div>
            <div class='lav-plan__price lav-plan__price_year' style='display: none;'>
              <div class='lav-plan__value lav-plan__value-old'>€99</div>
              <div class='lav-plan__currency'>€</div>
              <div class='lav-plan__value lav-plan__value-new'>82</div>
              <div class='lav-plan__term'>/month</div>
            </div>
            <div class='lav-plan__yearly'>$990 billed yearly</div>
            <div class='lav-plan__offer'><span>300+</span> organic followers /month</div>
            <div class='lav-plan__caption'>
              <span>Real people</span> who like, comment, share and&nbsp;engage with your page
            </div>
          </div>
          <div class='lav-plan__body'>
            <div class='lav-plan__list'>
              <div class='lav-plan__item lav-plan__item_mark lav-plan__item_tip'>
                <span>Dedicated Manager</span>
                <div class='lav-tip'>
                  <img src='${config.dir}/img/quest.svg' />
                  <div class='lav-tip__body'>A dedicated Campaign Manager, who will assist you with your Instagram growth. Available Mon-Fri by email or video call</div>
                </div>
              </div>
              <div class='lav-plan__item lav-plan__item_tip'>
                <span>Niche targeting</span>
                <div class='lav-tip'>
                  <img src='${config.dir}/img/quest.svg' />
                  <div class='lav-tip__body'>Target followers that share your interests</div>
                </div>
              </div>
              <div class='lav-plan__item lav-plan__item_tip'>
                <span>Location targeting</span>
                <div class='lav-tip'>
                  <img src='${config.dir}/img/quest.svg' />
                  <div class='lav-tip__body'>Target followers in a country or city of your choice</div>
                </div>
              </div>
              <div class='lav-plan__item lav-plan__item_tip'>
                <span>Gender-based targeting</span>
                <div class='lav-tip'>
                  <img src='${config.dir}/img/quest.svg' />
                  <div class='lav-tip__body'>Target males or females</div>
                </div>
              </div>
              <div class='lav-plan__item lav-plan__item_tip'>
                <span>Profile optimization</span>
                <div class='lav-tip'>
                  <img src='${config.dir}/img/quest.svg' />
                  <div class='lav-tip__body'>Our team will help you to optimize your profile for faster growth and higher engagement</div>
                </div>
              </div>
              <div class='lav-plan__item'><span>24/7 live support</span></div>
              <div class='lav-plan__item'><span>Cancel Anytime</span></div>
            </div>
            <div class='lav-plan__btn'>Get Started</div>
          </div>
        </div>

        <div class='lav-plan'>
          <div class='lav-plan__head'>
            <div class='lav-plan__title'>Turbocharged</div>
            <div class='lav-plan__price lav-plan__price_month'>
              <div class='lav-plan__currency'>€</div>
              <div class='lav-plan__value'>249</div>
              <div class='lav-plan__term'>/month</div>
            </div>
            <div class='lav-plan__price lav-plan__price_year' style='display: none;'>
              <div class='lav-plan__value lav-plan__value-old'>€249</div>
              <div class='lav-plan__currency'>€</div>
              <div class='lav-plan__value lav-plan__value-new'>207</div>
              <div class='lav-plan__term'>/month</div>
            </div>
            <div class='lav-plan__yearly'>$2,490 billed yearly</div>
            <div class='lav-plan__offer'><span>up to 1000</span> organic followers /month</div>
            <div class='lav-plan__caption'>
              <span>Real people</span> who like, comment, share and&nbsp;engage with your page
            </div>
          </div>
          <div class='lav-plan__body'>
            <div class='lav-plan__list'>
              <div class='lav-plan__item lav-plan__item_mark lav-plan__item_tip'>
                <span>Monthly content coaching</span>
                <div class='lav-tip'>
                  <img src='${config.dir}/img/quest.svg' />
                  <div class='lav-tip__body'>Monthly content coaching calls from your Dedicated Campaign Manager</div>
                </div>
              </div>
              <div class='lav-plan__item lav-plan__item_mark lav-plan__item_tip'>
                <span>Dedicated Senior Manager</span>
                <div class='lav-tip'>
                  <img src='${config.dir}/img/quest.svg' />
                  <div class='lav-tip__body'>A dedicated Senior Campaign Manager, who will assist you with your Instagram growth. Available Mon-Fri by email or video call.</div>
                </div>
              </div>
              <div class='lav-plan__item lav-plan__item_tip'>
                <span>Niche targeting</span>
                <div class='lav-tip'>
                  <img src='${config.dir}/img/quest.svg' />
                  <div class='lav-tip__body'>Target followers that share your interests</div>
                </div>
              </div>
              <div class='lav-plan__item lav-plan__item_tip'>
                <span>Location targeting</span>
                <div class='lav-tip'>
                  <img src='${config.dir}/img/quest.svg' />
                  <div class='lav-tip__body'>Target followers in a country or city of your choice</div>
                </div>
              </div>
              <div class='lav-plan__item lav-plan__item_tip'>
                <span>Gender-based targeting</span>
                <div class='lav-tip'>
                  <img src='${config.dir}/img/quest.svg' />
                  <div class='lav-tip__body'>Target males or females</div>
                </div>
              </div>
              <div class='lav-plan__item lav-plan__item_tip'>
                <span>Profile optimization</span>
                <div class='lav-tip'>
                  <img src='${config.dir}/img/quest.svg' />
                  <div class='lav-tip__body'>Our team will help you to optimize your profile for faster growth and higher engagement</div>
                </div>
              </div>
              <div class='lav-plan__item'><span>24/7 live support</span></div>
              <div class='lav-plan__item'><span>Cancel Anytime</span></div>
            </div>
            <div class='lav-plan__btn'>Get Started</div>
          </div>
        </div>
      </div>
    `;

    $('.lg\\:grid.lg\\:grid-cols-7').insertAdjacentHTML('beforebegin', el);

    $('.table-fixed tr:first-child td:nth-child(2) .leading-5').innerHTML =
      'Start building your audience organically, ideal for personal accounts eager to grow.';
    $('.table-fixed tr:first-child td:nth-child(3) .leading-5').innerHTML =
      'Enhance your online presence with targeted engagement, suited for influencers and small businesses.';
    $('.table-fixed tr:first-child td:nth-child(4) .leading-5').innerHTML =
      'Accelerate your reach quickly and effectively, perfect for prominent profiles and established businesses.';

    $('[for="switch"]').addEventListener('click', function () {
      setTimeout(() => {
        if (this.querySelector('.translate-x-0')) {
          $$('.lav-plan__price_year').forEach((item) => {
            item.style.display = 'none';
          });

          $$('.lav-plan__price_month').forEach((item) => {
            item.style.display = 'flex';
          });

          $$('.lav-plan__yearly').forEach((item) => {
            item.classList.remove('active');
          });
        } else {
          $$('.lav-plan__price_year').forEach((item) => {
            item.style.display = 'flex';
          });

          $$('.lav-plan__price_month').forEach((item) => {
            item.style.display = 'none';
          });

          $$('.lav-plan__yearly').forEach((item) => {
            item.classList.add('active');
          });
        }
      }, 100);
    });

    $$('.lav-plan__btn').forEach((item, i) => {
      const index = i + 1;
      item.addEventListener('click', function () {
        $(
          '.lg\\:grid.lg\\:grid-cols-7>div:nth-child(' +
            index +
            ') button.checkout'
        ).click();
      });
    });

    // updatePrice();

    // function updatePrice() {
    //   $('.lg\\:grid.lg\\:grid-cols-7>div').forEach((item, i) => {
    //     const price = item.querySelector
    //   });
    // }
  }

  function changeCopy() {
    $('#pricing .leading-9').innerHTML = 'Unlock Your Instagram&nbsp;Potential';
    $('#pricing .leading-7').innerHTML =
      'Choose a plan that best fits your growth goals. Get ready to<br/>see real results within hours!';
  }

  function addTrustWallet() {
    const el = `
    <div class='lav-trust'>
      <div class='lav-trust__caption'><span>Excellent</span> 227&nbsp;Reviews</div>
      <img class='lav-trust__stars' src='${config.dir}/img/trust-stars.svg' alt='' />
      <img class='lav-trust__logo' src='${config.dir}/img/trust-logo.svg' alt='' />
      <img class='lav-trust__logo_black' src='${config.dir}/img/trust-logo-black.svg' alt='' />
    </div>
  `;

    $('#pricing').insertAdjacentHTML('beforebegin', el);
  }

  // *** HELPERS *** //

  // Waiting for loading by condition
  async function waitFor(condition, cb = false, customConfig = {}) {
    const config = {
      ms: 500, // repeat each 0.5 second if condition is false
      limit: 10, // limit in second seconds

      ...customConfig,
    };

    if (typeof condition === 'function') {
      if (condition()) {
        if (typeof cb === 'function') cb();
        return;
      }

      return new Promise((resolve) => {
        let limit = config.limit * 1000;
        const interval = setInterval(function () {
          if (condition() || limit <= 0) {
            clearInterval(interval);
            if (limit > 0 && typeof cb === 'function') cb();
            resolve();
          }
          limit -= config.ms;
        }, config.ms);
      });
    }

    if (condition.startsWith('.') || condition.startsWith('#')) {
      if ($(condition)) {
        if (typeof cb === 'function') cb($(condition));
        return;
      }

      return new Promise((resolve) => {
        const observer = new MutationObserver((mutations, observer) => {
          if ($(condition)) {
            if (typeof cb === 'function') cb($(condition));
            observer.disconnect();
            resolve();
          }
        });

        observer.observe(document, { childList: true, subtree: true });
      });
    }
  }

  // Mutation Observer
  function initMutation(observeEl = document.body, cbAdded, cbRemoved) {
    const el = typeof observeEl === 'string' ? $(observeEl) : observeEl;

    if (!el) return;

    let observer = new MutationObserver((mutations) => {
      for (let mutation of mutations) {
        if (typeof cbAdded === 'function') {
          for (let node of mutation.addedNodes) {
            if (!(node instanceof HTMLElement)) continue;
            cbAdded(node);
          }
        }

        if (typeof cbRemoved === 'function') {
          for (let node of mutation.addedNodes) {
            if (!(node instanceof HTMLElement)) continue;
            cbRemoved(node);
          }
        }
      }
    });

    observer.observe(el, { childList: true, subtree: true });

    return observer;
  }

  // Intersection Observer
  function initIntersection(observeEl, cb, customConfig) {
    const el = typeof observeEl === 'string' ? $(observeEl) : observeEl;

    if (!el || typeof cb !== 'function') return;

    const config = {
      root: null,
      threshold: 0.3, // 0 - 1
      ...customConfig,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        cb(entry);
      });
    }, config);

    observer.observe(el);

    return observer;
  }

  function focusTimeEvent(el, cb) {
    let entryTime = 0;
    initIntersection(
      el,
      ({ isIntersecting, time }) => {
        if (isIntersecting) {
          entryTime = time;
        } else if (entryTime) {
          const diffTime = +((time - entryTime) / 1000).toFixed(1);
          cb(diffTime + 's');
          entryTime = 0;
        }
      },
      { threshold: 0.1 }
    );
  }

  // Artificial delay
  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // Check if element in viewport
  function isElementInViewport(selector) {
    const el = typeof selector === 'string' ? $(selector) : selector;

    if (!el) return false;

    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Shordcode for selectors
  function $(selector, context = document) {
    return context.querySelector(selector);
  }
  function $$(selector, context = document, toSimpleArray = false) {
    const arr = context.querySelectorAll(selector);

    return toSimpleArray ? Array.from(arr) : arr;
  }

  // GA 4 events
  function pushDataLayer(name = '', desc = '', type = '', loc = '') {
    try {
      const event = {
        event: 'event-to-ga4',
        event_name: name,
        event_desc: desc,
        event_type: type,
        event_loc: loc,
      };

      console.debug('** GA4 Event **', event);

      if (!config.debug) {
        dataLayer.push(event);
      }
    } catch (e) {
      console.log('** GA4 Error **', e);
    }
  }

  // Slider
  function connectSplide() {
    const sliderStyles = document.createElement('link');
    sliderStyles.rel = 'stylesheet';
    sliderStyles.href =
      'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide-core.min.css';
    document.head.appendChild(sliderStyles);

    let sliderScript = document.createElement('script');
    sliderScript.src =
      'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js';
    document.head.appendChild(sliderScript);
  }

  // *** Exp BG process *** //

  //Clarity
  if (
    !config.debug &&
    Array.isArray(config.clarity) &&
    config.clarity.length === 3
  ) {
    waitFor(
      () => typeof clarity == 'function',
      () => {
        clarity(...config.clarity);
      }
    );
  }
})();
