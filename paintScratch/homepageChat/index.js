console.debug('*** Experiment started ***');

let isDisableEvents = false;
// Config for Experiment
const config = {
  // dir: 'http://127.0.0.1:5500/paintScratch/homepageChat',
  dir: 'https://flopsi69.github.io/crs/paintScratch/homepageChat',
  clarity: ['set', 'exp_conv_mech', 'variant_1'],
  debug: false,
};

// const orig = console.log;
// console.log = function (...args) {
//   orig.apply(console, ['Debug:', ...args]);
// };

// Styles for Experiment
const styles = /* css */ `
  .lav-car select {
    color: #555;
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
  }
  .lav-car select[disabled] {
    color: #aaa;
  }
  .lav-wrap + .row {
    display: none;
  }
  .ps-logo {
    top: 30px;
  }
  .page .container-fluid {
    padding-left: 24px;
    padding-right: 24px;
  }
  .lav-wrap {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    margin-top: 24px;
    padding-bottom: 40px;
  }
  .lav-info {
    position: relative;
    max-width: 380px;
    margin-top: 50px;
    bottom: -7px;
  }
  .lav-title {
    color: #0373BD;
    font-size: 28px;
    font-weight: 700;
    line-height: 32px;
  }
  .lav-descr {
    margin-top: 16px;
    color: #333;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    margin-right: 12px;
  }
  .lav-mustang {
    line-height: 0;
    margin: 24px 0 32px;
  }
  .lav-mustang img {
    max-width: 380px;
    width: 100%;
  }
  .lav-benefits {
    display: flex;
    justify-content: space-between;
    gap: 40px;
    align-items: center;
  }
  .lav-benefits img {
    max-height: 80px;
    max-width: 115px;
    min-width: 0;
    cursor: pointer;
    transition: 0.2s;
  }
  @media(hover:hover) {
    .lav-benefits img:hover {
      opacity: 0.8;
    }
  }
  .lav-chat {
    display: flex;
    flex-direction: column;
    max-width: 402px;
    border: 1px solid #0373DB;
    background: #FFF;
    height: 560px;
  }
  .lav-chat__header {
    background: #0373BD;
    display: flex;
    padding: 9px 12px;
    align-items: center;
    gap: 8px;
    color: #FFF;
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
  }
  .lav-chat__header-logo {
    line-height: 0;
  }
  .lav-chat__header-logo img {
    max-width: 45px;
  }
  .lav-chat__header-title {
    font-weight: 700;
  }
  .lav-chat__header-caption {
    font-size: 13px;
  }
  .lav-chat__review {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding: 7px 14px;
    background: #FECC22;
  }
  .lav-chat__review-jabber {
    max-width: 74px;
  }
  .lav-chat__review-stars {
    max-width: 60px;
  }
  .lav-chat__review-info {
    display: flex;
    gap: 8px;
    color: #333;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    align-items: center;
    white-space: nowrap;
  }
  .lav-chat__body {
    display: flex;
    flex-direction: column;
    gap: 18px;
    flex-grow: 1;
    padding: 16px 16px 25px;
    overflow: auto;
  }
  .lav-chat__footer {
    background: #0373BD;
    display: flex;
    padding: 9px 16px;
    align-items: center;
    gap: 8px;
    color: #FFF;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
  }
  .lav-message {
    display: flex;
    gap: 9px;
    max-width: 315px;
    transition: 0.35s;
  }

  .lav-message__logo {
    line-height: 0;
  }
  .lav-message__logo img {
    max-width: 24px;
  }
  .lav-message__name {
    color: #555;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    padding: 0 3px;
  }
  .lav-message__info {
    margin-top: 2px;
  }
  .lav-message__text {
    position: relative;
    padding: 8px 7px;
    color: #4A4A4A;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    border-radius: 2px;
    background: #DAE7F8;
    margin-top: 4px;
  }
  .lav-message__text:before {
    content: '';
    width: 4px;
    height: 8px;
    position: absolute;
    top: 8px;
    left: -4px;
    background: url('${config.dir}/img/arrow-left.svg') no-repeat;
  }
  .lav-control {
    display: flex;
    align-items: center;
    opacity: 0;
    gap: 20px;
    margin-top: 10px;
    order: 1;
    transition: 0.35s;
    transition-delay: 0.35s;
  }
  .lav-control:not(.active) {
    opacity: 0;
    display: none;
  }
  .lav-another {
    color: #337AB7;
    font-size: 13px;
    font-weight: 400;
    line-height: 18px; /* 138.462% */
    text-decoration-line: underline;
    display: inline-flex;
    cursor: pointer;
    transition: 0.2s;
    margin: 0 auto;
  }
  .lav-select {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    border-radius: 4px;
    border: 2px solid #E68626;
    background: linear-gradient(180deg, #FFC842 0%, #F48818 100%);
    color: var(--H-Main, #333);
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px; 
    height: 36px;
    max-width: 200px;
    width: 100%;
    cursor: pointer;
    transition: 0.2s;
  }
  @media(hover:hover) {
    .lav-another:hover {
      opacity: 0.5;
    }
    .lav-select:hover {
      background: linear-gradient(180deg, #FFC842 0%, #FFC842 100%);
    }
  }
  .lav-car {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-left: auto;
    max-width: 200px;
    width: 100%;
    transition: 0.35s;
    transition-delay: 0.35s;
  }
  .lav-car .search-select {
    margin-bottom: 0;
  }
  .lav-car_disabled {
    opacity: 0.8;
    pointer-events: none;
  }
  .lav-car_disabled:before {
    content: '';
    z-index: 99;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    #atu_header {
      margin-top: 20px;
    }
    .ps-logo {
      top: 10px;
    }
    .lav-info {
      min-width: 0;
      margin-top: 30px;
    }
  }
  @media screen and (max-width: 768px) {
    .lav-wrap {
      flex-direction: column;
      gap: 16px;
    }
    .lav-info {
      max-width: 100%;
      margin-top: 0;
      bottom: 0;
    }
    .lav-chat {
      max-width: inherit;
      margin-left: -12px;
      margin-right: -12px;
    }
    .ps-logo {
      top: 0;
    }
    .page .container-fluid {
      padding-left: 16px;
      padding-right: 16px;
    }
    .lav-title {
      color: #0373BD;
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
    }
    .lav-descr {
      margin-right: 0;
      margin-top: 8px;
    }
    .lav-mustang {
      display: none;
    }
    .lav-benefits {
      gap: 30px;
      margin-top: 10px;
    }
    .lav-chat__header-caption {
      font-size: 12px;
      line-height: 16px;
    }
    .lav-chat__header {
      padding: 12px;
    }
    .lav-chat__review {
      padding: 7px 10px;
      gap: 4px;
    }
    .lav-chat__review-info {
      gap: 4px;
    }
    .lav-chat__footer {
      padding: 8px 12px;
    }
    .lav-wrap {
      padding-bottom: 32px;
    }
  }
`;

const stylesEl = document.createElement('style');
stylesEl.classList.add('exp-styles');
stylesEl.innerHTML = styles;

// *** Logic *** //
initExp();

async function initExp() {
  console.debug('** InitExp **');

  await waitFor(() => document.head && document.body, false, { ms: 100 });

  waitFor('#find_colors_button', initSubmitButton);

  document.head.appendChild(stylesEl);

  const newLayout = document.createElement('div');
  newLayout.classList.add('lav-wrap');
  newLayout.innerHTML = /* html */ `
    <div class='lav-info'>
      <div class='lav-title'>PaintScratch sells original factory&nbsp;touch&nbsp;up&nbsp;paint for your car, truck or SUV.</div>
      <div class='lav-descr'>Order the same touch up paint used by auto industry professionals in Spray Cans, Paint Pens, Brush Cap Bottles, and larger sizes.</div>
      <div class='lav-mustang'>
        <img src='${config.dir}/img/car.png' alt='' />
      </div>
      <div class='lav-benefits'>
        <img alt="PaintScratch Color Match Guarantee Badge" src="https://www.paintscratch.com/content/images/color-match-guarantee.jpg" title="Paint guaranteed to match original manufacturer color chip or we send new order free!" class="img-responsive center-block">
        <img alt="PaintScratch is an American Business" src="https://www.paintscratch.com/content/images/paintscratch-american-business.jpg" title="All PaintScratch products are manufactured in the USA!" class="img-responsive center-block">
        <img alt="PaintScratch offers free shipping on all orders over $99!" src="https://www.paintscratch.com/content/images/free-shipping-over-99.jpg" title="Free shipping on all orders over $99!" class="img-responsive center-block">
      </div>
    </div>

    <div class='lav-chat'>
      <div class='lav-chat__header'>
        <div class='lav-chat__header-logo'>
          <img src='${config.dir}/img/logo.png' alt='' />
        </div>
        <div class='lav-chat__header-info'>
          <div class='lav-chat__header-title'>PaintScratch Assistant</div>
          <div class='lav-chat__header-caption'>We’ve helped more than 1,000,000 people fix their cars!</div>
        </div>
      </div>
      <div class='lav-chat__review'>
        <img class='lav-chat__review-jabber' src='${config.dir}/img/sitejabber.png' alt='' />
        <div class='lav-chat__review-info'>
          <b>Excellent</b>
          <img class='lav-chat__review-stars' src='${config.dir}/img/stars.png' alt='' />
          <b>4.7</b> out of 5 (6,090 reviews)
        </div>
      </div>

      <div class='lav-chat__body'>
        <div class='lav-control'>
          <div class='lav-another'>another vehicle</div>
          <div class='lav-select'>
            Select color
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="12" viewBox="0 0 10 12" fill="none">
              <path d="M0.5 11.5V0.5L9.5 6L0.5 11.5Z" fill="#333333"/>
            </svg>
          </div>
        </div>
      </div>

      <div class='lav-chat__footer'>
        <img src='${config.dir}/img/guarantee.svg' alt='' />
        <div class='lav-chat__footer-descr'>
          We guarantee our paint will match the original color chip provided by the paint manufacturer for your vehicle
        </div>
      </div>
    </div>
  `;

  _$('.page .container-fluid').insertAdjacentElement('afterbegin', newLayout);

  checkBenefitsPos();
  window.addEventListener('resize', checkBenefitsPos);

  addListeners();

  createMessage('welcome');
  setTimeout(() => {
    createMessage('select');
    createCarSelector();
  }, 4000);

  function checkBenefitsPos() {
    if (window.innerWidth < 768) {
      _$('.lav-chat').insertAdjacentElement('afterend', _$('.lav-benefits'));
    } else {
      _$('.lav-info').insertAdjacentElement('beforeend', _$('.lav-benefits'));
    }
  }
}

function addListeners() {
  _$('.lav-benefits img:nth-child(1)').addEventListener('click', (e) => {
    e.preventDefault();
    _$('#color_match_guarantee_text-closeonly2').click();
  });
  _$('.lav-benefits img:nth-child(2)').addEventListener('click', (e) => {
    e.preventDefault();
    _$('#American_company-closeonly2').click();
  });
  _$('.lav-benefits img:nth-child(3)').addEventListener('click', (e) => {
    e.preventDefault();
    _$('#free_shipping-closeonly2').click();
  });

  _$('.lav-select').addEventListener('click', () => {
    pushDataLayer(
      'exp_conv_mech_but_assit_color',
      'Select color',
      'Button',
      'PaintScratch Assistant'
    );
    $('#find_colors_button').click();
  });

  _$('.lav-another').addEventListener('click', () => {
    pushDataLayer(
      'exp_conv_mech_link_assit_vehicle',
      'Another vehicle',
      'Link',
      'PaintScratch Assistant'
    );
    isDisableEvents = true;
    $('#select_year').val('').change();
    isDisableEvents = false;
    _$('.lav-car').classList.remove('lav-car_disabled');
  });
}

function initSubmitButton() {
  const submitBtn = _$('#find_colors_button');

  const observer = new MutationObserver((mutations) => {
    for (let mutation of mutations) {
      if (mutation.attributeName !== 'disabled') return;

      handleReadyStatus();
    }
  });

  observer.observe(submitBtn, { attributes: true });
}

function handleReadyStatus() {
  if (_$('#find_colors_button').hasAttribute('disabled')) {
    _$('.lav-control').classList.remove('active');
    _$('.lav-control').style.opacity = 0;
    _$('[data-message="color"]')?.remove();
    return false;
  }

  // TODO
  // _$('.lav-car').classList.add('lav-car_disabled');
  _$('.lav-control').classList.add('active');

  if (!_$('[data-message="color"]')) {
    createMessage('color');
  }
  setTimeout(() => {
    _$('.lav-control').style.opacity = 1;
    _$('.lav-chat__body').scrollTo({
      top: _$('.lav-chat__body').scrollHeight,
      behavior: 'smooth',
    });
  }, 250);
}

function createCarSelector() {
  const el = document.createElement('div');
  el.classList.add('lav-car');
  el.style.opacity = 0;

  el.insertAdjacentElement('beforeend', _$('#select_year_div').cloneNode(true));
  el.insertAdjacentElement('beforeend', _$('#select_make_div').cloneNode(true));
  el.insertAdjacentElement(
    'beforeend',
    _$('#select_model_div').cloneNode(true)
  );

  _$('.lav-chat__body').insertAdjacentElement('beforeend', el);

  setTimeout(() => {
    el.style.opacity = 1;

    setTimeout(() => {
      handleReadyStatus();
      _$('.lav-chat__body').scrollTo({
        top: _$('.lav-chat__body').scrollHeight,
        behavior: 'smooth',
      });
    }, 350);
  }, 250);

  $('.lav-car select').on('change', function () {
    if ($(this).attr('id') === 'select_year' && !isDisableEvents) {
      pushDataLayer(
        'exp_conv_mech_inpu_assit_year',
        'Year',
        'Input',
        'PaintScratch Assistant'
      );
    }

    if ($(this).attr('id') === 'select_make') {
      pushDataLayer(
        'exp_conv_mech_inpu_assit_make',
        'Сar Make ',
        'Input',
        'PaintScratch Assistant'
      );
    }

    if ($(this).attr('id') === 'select_model') {
      pushDataLayer(
        'exp_conv_mech_inpu_assit_model',
        'Сar Model',
        'Input',
        'PaintScratch Assistant'
      );
    }

    if (_$('[data-message="color"]')) {
      let car = _$('#select_year').value + ' ' + _$('#select_make').value;

      if (_$('#select_model').value !== 'All Models') {
        car += ' ' + _$('#select_model').value;
      }

      _$('[data-message="color"] .lav-message__text b').innerHTML = car.replace(
        /-/g,
        '&#8209;'
      );
    }
  });

  if (!_$('#select_model').value) {
    _$('#select_model').value = '';
    // _$('#select_model').insertAdjacentHTML(
    //   'beforeend',
    //   '<option selected>Select Model...</option>'
    // );
  }

  // return el;
}

function createMessage(type) {
  let message = `Welcome! Find your car paint in 3 easy steps: select your vehicle, pick a color, choose a product. Start now for a flawless repair!`;

  if (type === 'select') {
    message = `To begin with select your vehicle year, make and model. It helps us finding the right paint color for you`;
  } else if (type === 'color') {
    let car = _$('#select_year').value + ' ' + _$('#select_make').value;

    if (_$('#select_model').value !== 'All Models') {
      car += ' ' + _$('#select_model').value;
    }

    message = `Now please select the color of your <b>${car.replace(
      /-/g,
      '&#8209;'
    )}</b> or choose another vehicle`;

    console.log('mess', message);
  }

  const el = document.createElement('div');
  el.classList.add('lav-message');
  el.dataset.message = type;
  el.style.opacity = 0;
  el.innerHTML = /* html */ `
    <div class='lav-message__logo'>
      <img src='${config.dir}/img/chat-logo.png' alt='' />
    </div>
    <div class='lav-message__info'>
      <div class='lav-message__name'>PaintScrath Assistant</div>
      <div class='lav-message__text'>${message}</div>
    </div>
  `;

  _$('.lav-chat__body').insertAdjacentElement('beforeend', el);

  setTimeout(() => {
    el.style.opacity = 1;
    _$('.lav-chat__body').scrollTo({
      top: _$('.lav-chat__body').scrollHeight,
      behavior: 'smooth',
    });
  }, 250);

  if (type === 'welcome') {
    visibilityEvent('[data-message="welcome"]', () => {
      pushDataLayer(
        'exp_conv_mech_vis_assimes1_elem',
        'Element view',
        'Visibility',
        'PaintScratch Assistant. Message 1'
      );
    });
  } else if (type === 'select') {
    visibilityEvent('[data-message="select"]', () => {
      pushDataLayer(
        'exp_conv_mech_vis_assimes2_elem',
        'Element view',
        'Visibility',
        'PaintScratch Assistant. Message 2'
      );
    });
  } else if (type === 'color') {
    visibilityEvent('[data-message="color"]', () => {
      pushDataLayer(
        'exp_conv_mech_vis_assimes3_elem',
        'Element view',
        'Visibility',
        'PaintScratch Assistant. Message 3'
      );
    });
  }
}

// *** Utils *** //
class Modal {
  static list = [];
  constructor(name, html) {
    if (!_$('.lav-modal')) {
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

    _$('.lav-modal').insertAdjacentElement('beforeend', this.el);

    this.constructor.list.push(this);
  }

  static init() {
    document.body.insertAdjacentHTML(
      'beforeend',
      "<div class='lav-modal'></div>"
    );

    document.addEventListener('click', (e) => {
      if (
        e.target.classList.contains('lav-modal') ||
        e.target.closest('.lav-modal__close')
      )
        this.close();

      if (e.target.dataset.modal) {
        this.open(e.target.dataset.modal);
      } else if (e.target.closest('[data-modal]')) {
        this.open(e.target.closest('[data-modal]').dataset.modal);
      }
    });

    this.addStyles();
  }

  static open(modalName, cb) {
    document.body.classList.add('lav-modal-open');

    if (_$('.lav-modal__inner.active')) {
      _$('.lav-modal__inner.active').classList.remove('active');
    }

    _$(modalName).classList.add('active');

    if (typeof cb === 'function') cb();

    setTimeout(() => {
      _$('.lav-modal').classList.add('active');
    }, 100);
  }

  static close(cb) {
    document.body.classList.remove('lav-modal-open');

    _$('.lav-modal')?.classList.remove('active');

    if (typeof cb === 'function') cb();

    setTimeout(() => {
      _$('.lav-modal__inner.active')?.classList.remove('active');
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
        background: rgba(0,0,0,.1);
        backdrop-filter: blur(3px);
        -webkit-backdrop-filter: blur(3px);
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
        background: #fff;
        max-width: 380px;
        width: 100%;
        display: none;
        margin: auto;
      }
      .lav-modal__inner.active {
        display: block;
      }
      .lav-modal__close {
        cursor: pointer;
        transition: 0.35s;
        line-height: 0;
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
    `;

    const stylesEl = document.createElement('style');
    stylesEl.classList.add('exp-modal');
    stylesEl.innerHTML = styles;
    document.head.appendChild(stylesEl);
  }
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
    if (_$(condition)) {
      if (typeof cb === 'function') cb(_$(condition));
      return;
    }

    return new Promise((resolve) => {
      const observer = new MutationObserver((mutations, observer) => {
        if (_$(condition)) {
          if (typeof cb === 'function') cb(_$(condition));
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
  const el = typeof observeEl === 'string' ? _$(observeEl) : observeEl;

  if (!el) return;

  let observer = new MutationObserver((mutations, observer) => {
    for (let mutation of mutations) {
      if (typeof cbAdded === 'function') {
        for (let node of mutation.addedNodes) {
          if (!(node instanceof HTMLElement)) continue;
          cbAdded(node, observer);
        }
      }

      if (typeof cbRemoved === 'function') {
        for (let node of mutation.removedNodes) {
          if (!(node instanceof HTMLElement)) continue;
          cbRemoved(node, observer);
        }
      }
    }
  });

  observer.observe(el, { childList: true, subtree: true });

  return observer;
}

// Intersection Observer
function initIntersection(observeEl, cb, customConfig) {
  const el = typeof observeEl === 'string' ? _$(observeEl) : observeEl;

  if (!el || typeof cb !== 'function') return;

  const config = {
    root: null,
    threshold: 0.3, // 0 - 1 | A threshold of 1.0 means that when 100% of the target is visible within the element specified by the root option, the callback is invoked.
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

function focusTimeEvent(el, cb, viewElementProcent = 0.1) {
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
    { threshold: viewElementProcent }
  );
}

function visibilityEvent(el, cb, customConfig = {}) {
  const config = {
    threshold: 0.3,
    ...customConfig,
  };
  initIntersection(
    el,
    ({ isIntersecting, target }) => {
      // console.log(target, isIntersecting);
      if (isIntersecting) {
        setTimeout(() => {
          if (isElementInViewport(target)) {
            cb();
          }
        }, 3000);
      }
    },
    config
  );
}

// Artificial delay
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Check if element in viewport
function isElementInViewport(selector) {
  const el = typeof selector === 'string' ? _$(selector) : selector;

  if (!el) return false;

  const rect = el.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;

  return (
    rect.top + rect.height * 0.3 < windowHeight &&
    rect.bottom > rect.height * 0.3
  );
  // return (
  //   rect.top >= 0 &&
  //   rect.left >= 0 &&
  //   rect.bottom <=
  //     (window.innerHeight || document.documentElement.clientHeight) &&
  //   rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  // );
}

// Shordcode for selectors
function _$(selector, context = document) {
  return context.querySelector(selector);
}
function _$$(selector, context = document, toSimpleArray = false) {
  const arr = context.querySelectorAll(selector);

  return toSimpleArray ? Array.from(arr) : arr;
}

// GA 4 events
function pushDataLayer(name = '', desc = '', type = '', loc = '') {
  window.dataLayer = window.dataLayer || [];

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

// Svg objects
function getSvg(name) {
  const svgObj = {};

  return svgObj[name];
}
