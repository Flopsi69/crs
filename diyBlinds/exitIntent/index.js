console.debug('*** Experiment started ***');

// Config for Experiment
const config = {
  // dir: 'http://127.0.0.1:5500/diyBlinds/exitIntent',
  dir: 'https://flopsi69.github.io/crs/diyBlinds/exitIntent',
  clarity: ['set', 'exp_exi_int_poplp', 'variant_1'],
  debug: false,
};

// *** Logic *** //
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
      "<div class='lav-modal'></div>"
    );

    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('lav-modal')) {
        this.close();
      }

      if (e.target.closest('.lav-modal__close')) {
        this.close();

        if (e.target.closest('.lav-offer')) {
          pushDataLayer(
            'exp_exit_intent_pop_but_jusempt_clos',
            'Close',
            'Button',
            'Pop up. Don’t leave just yet! Empty cart'
          );
        } else if (e.target.closest('.lav-almost')) {
          pushDataLayer(
            'exp_exit_intent_pop_but_almfill_clos',
            'Close',
            'Button',
            'Pop up. It’s almost yours! Filled cart'
          );
        }
      }

      if (e.target.dataset.modal) {
        this.open(e.target.dataset.modal);
      } else if (e.target.closest('[data-modal]')) {
        this.open(e.target.closest('[data-modal]').dataset.modal);
      }
    });

    this.addStyles();
  }

  static open(modalName, cb) {
    document.querySelector('html').classList.add('lav-modal-open');
    document.body.classList.add('lav-modal-open');

    document.body.classList.add(modalName.replace('.', '') + '_shown');

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
    this.list.forEach((modal) => {
      document.body.classList.remove(modal.name + '_shown');
    });

    document.body.classList.remove('lav-modal-open');
    document.querySelector('html').classList.remove('lav-modal-open');

    $('.lav-modal')?.classList.remove('active');

    if (typeof cb === 'function') cb();

    setTimeout(() => {
      $('.lav-modal__inner.active')?.classList.remove('active');
    }, 400);
  }

  static addStyles() {
    const styles = /* css */ `
      .lav-progress {
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        background: #DDDEE9;
        border-radius: 4px;
        overflow: hidden;
      }
      .lav-progress__bar {
        height: 0;
        transition: 0.4s ease;
        width: 4px;
        background-color: #444C5F;
      }
      #fullpageFormat9 {
        display: none!important;
      }
      .lav-btn {
        outline: none;
        margin-top: 24px;
        border-radius: 2px;
        border: none;
        background: linear-gradient(269deg, #9D6B29 0%, #BD8432 4.43%, #EBB858 43.36%, #BD8432 86.26%, #835721 100%), linear-gradient(140deg, #02102F 16.4%, #12162F 28.44%, #12162F 36.41%, #11132B 53.66%, #020B22 73.88%, #11132B 85.38%);
        width: 100%;
        color: #0E2242;
        font-family: "Avenir";
        font-size: 16px;
        font-weight: 800;
        line-height: 24px;
        text-transform: uppercase;
        height: 56px;
        cursor: pointer;
        transition: 0.2s;
      }
      @media(hover:hover) {
        .lav-btn:hover {
          color: #fff;
          opacity: 0.9;
        }
      }

      .lav-modal {
        position: fixed;
        display: flex;
        z-index: 999;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(39, 48, 56, 0.65);
        backdrop-filter: blur(5px);
        transition: 0.35s;
        opacity: 0;
        pointer-events: none;
        padding: 15px;
        overflow-y: auto;
        max-height: 100%;
      }
      .lav-modal.active {
        opacity: 1;
        pointer-events: auto;
      }
      .lav-modal__inner {
        position: relative;
        background: #fff;
        max-width: 485px;
        width: 100%;
        display: none;
        margin: auto;
      }
      .lav-modal__inner.active {
        display: block;
      }
      .lav-modal__close {
        position: absolute;
        right: 20px;
        top: 18px;
        cursor: pointer;
        transition: 0.35s;
        line-height: 0;
      }
      [data-modal] {
        cursor: pointer;
      }
      .lav-modal img {
        max-width: 100%;
      }
      @media(hover:hover) {
        .lav-modal__close:hover {
          opacity: 0.5;
        }
      }
      .lav-modal-open {
        overflow: hidden;
      }
      .lav-modal__head {
        text-align: center;
        background: var(--Black, #313B52);
        padding: 12px;
        color: #fff;
      }
      .lav-modal__title {
        font-size: 20px;
        font-weight: 700;
        line-height: 28px;
      }
      .lav-modal__caption {
        margin-top: 6px;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px;
      }
      .lav-modal__text {
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
      }

      .lav-coupon {
        margin: 20px 0;
        display: flex;
        height: 48px;
        width: 100%;
        transition: 0.3s;
      }
      .lav-coupon__value {
        padding: 5px 13px;
        border-radius: 100px 0px 0px 100px;
        border: 2px dashed #DDDEE9;
        border-right: 0;
        color: var(--Primary, #E83B68);
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
        letter-spacing: 1.4px;
        flex-grow: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.3s;
      }
      .lav-coupon_copied .lav-coupon__value {
        color: var(--Text, #444C5F);
      }
      .lav-coupon__copy {
        border-radius: 0px 100px 100px 0px;
        background: var(--Graient-1, linear-gradient(45deg, #E83B68 0%, #EA567C 100%));
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 5px;
        color: var(--White, #FFF);
        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
        min-width: 107px;
      }
      .lav-coupon__copy img {
        max-width: 16px;
        max-height: 16px;
      }
      .lav-coupon__copy span {
        white-space: nowrap;
        transition: 0.3s;
      }
      .lav-coupon_copied {
        pointer-events: none;
      }
      .lav-coupon_copied .lav-coupon__copy {
        background: var(--Text, #444C5F);
      }

      .lav-offer {
        text-align: center;
      }
      .lav-offer__preview {
        object-fit: contain;
      }
      .lav-offer__body {
        padding: 30px 64px 26px;
        color: var(--Text, #444C5F);
      }
      .lav-offer__get {
        font-size: 30px;
        font-weight: 500;
        line-height: 133%;
      }
      .lav-offer__get span {
        color: #E83B68;
      }
      .lav-offer__divider {
        margin: 20px auto;
      }
      .lav-offer__unlock {
        font-size: 16px;
        font-weight: 700;
        line-height: 22px;
      }
      
      .lav-almost {
        text-align: center;
      }
      .lav-almost__title {
        font-size: 24px;
        line-height: 32px;
      }
      .lav-cart {
        border-bottom: 2px solid #DDDEE9;
        padding: 26px 64px 20px;
      }
      .lav-almost__body {
        padding: 0 64px 26px;
      }
      .lav-almost__note {
        margin-top: 30px;
      }
      .lav-almost__caption {
        color: var(--Text, #444C5F);
        text-align: center;
        font-size: 16px;
        font-weight: 400;
        line-height: 22px;
      }
      .lav-almost__caption span {
        color: var(--Primary, #E83B68);
        font-weight: 700;
        white-space: nowrap;
      }
      .lav-almost__complete {
        margin-top: 20px;
        color: var(--White, #FFF);
        text-align: center;
        font-size: 20px;
        font-weight: 700;
        line-height: 1;
        height: 56px;
        width: 100%;
        padding: 5px 15px 8px;
      }
      .lav-almost__complete.lav-loading {
        pointer-events: none;
        background: #DDDEE9;

      }
      .lav-products {
        padding-right: 40px;
      }
      .splide_destroyed.lav-products {
        padding-right: 0;
      }
      .splide_destroyed .lav-progress {
        display: none;
      }
      .lav-product {
        display: flex;
        align-items: center;
      }
      .splide_destroyed .lav-product + .lav-product {
        margin-top: 20px;
      }
      .lav-product__image {
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 0;
        width: 60px;
        flex-shrink: 0;
      }
      .lav-product__image img {
        max-height: 60px;
        max-width: 100%;
        object-fit: contain;
      }
      .lav-product__title {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        margin: 0 16px 0 12px;
        color: var(--Text, #444C5F);
        font-size: 16px;
        font-weight: 700;
        line-height: 22px;
        text-align: left;
        flex-grow: 1;
      }
      .lav-product__price {
        text-align: right;
      }
      .lav-product__price-old {
        color: var(--Text, #444C5F);
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        text-decoration: line-through;
      }
      .lav-product__price-new {
        color: var(--Primary, #E83B68);
        font-size: 16px;
        font-weight: 700;
        line-height: 22px;
      }
      .lav-almost__note-mob {
        display: none;
      }
      @media(max-width: 520px) {
        .lav-products {
          padding-right: 0;
          padding-bottom: 24px;
        }
        .splide_destroyed.lav-products {
          padding-bottom: 0;
        }
        .lav-progress {
          left: 20px;
          right: 20px;
          top: initial;
        }
        .lav-progress__bar {
          height: 4px;
          width: 100%;
        }
        .lav-offer__body {
          padding: 24px 20px;
        }
        .lav-offer__unlock {
          max-width: 250px;
          margin: auto;
        }
        .lav-offer__coupon {
          margin-bottom: 12px;
        }
        .lav-modal__caption {
          font-size: 14px;
          line-height: 20px;
        }
        .lav-almost__title {
          font-size: 20px;
          line-height: 28px;
        }
        .lav-cart {
          padding: 20px 0 10px;
          border-bottom: none;
        }
        .lav-almost__body {
          padding: 20px;
        }
        .lav-almost__complete {
          margin-top: 16px;
        }
        .lav-almost__coupon {
          margin-top: 0;
          margin-bottom: 16px;
        }
        .lav-almost__note-desk {
          display: none;
        }
        .lav-almost__note-mob {
          display: block;
          margin-top: 16px;
        }
        .lav-product {
          flex-flow: column;
        }
        .lav-product__price {
          text-align: center;
        }
        .lav-product__image {
          width: 120px;
        }
        .lav-product__image img {
          max-height: 120px;
          height: 120px;
        }
        .lav-product__title {
          margin: 6px 0 0;
          font-size: 14px;
          line-height: 20px;
          -webkit-line-clamp: 1;
          flex-grow: initial;
        }
      }
    `;

    const stylesEl = document.createElement('style');
    stylesEl.classList.add('exp-modal');
    stylesEl.innerHTML = styles;
    document.head.appendChild(stylesEl);
  }
}

initExp();

async function initExp() {
  console.debug('** InitExp **');
  await waitFor(() => document.head && document.body, false, { ms: 100 });

  // if (isPopupShown()) {
  //   console.log('Popup already shown');
  //   return;
  // }

  connectSplide();
  addModals();
  addHandlers();
  // handlePopupTriggers();

  openModal();
  // Modal.open('.lav-almost');
}

function addModals() {
  const modalOffer = /* html */ `
    <div class="lav-modal__close">
      <img src="${config.dir}/img/cross.svg" />
    </div>

    <div class="lav-modal__head">
      <div class="lav-modal__title lav-offer__title">Don't Leave Just Yet!</div>
    </div>

    <img class="lav-offer__preview" src='${config.dir}/img/offer-preview.png' />

    <div class='lav-offer__body'>
      <div class="lav-offer__get">
        <span>Get 10%</span> OFF Your Order Now!
      </div>

      <img class="lav-offer__divider" src='${
        config.dir
      }/img/offer-divider.svg' />

      <div class="lav-offer__unlock">Unlock your unique discount code before you go</div>

      <div class="lav-coupon lav-offer__coupon">
        <div class="lav-coupon__value">${getDiscount()}</div>
        <button class="lav-coupon__copy button">
          <img src='${config.dir}/img/copy.svg' />
          <span>Copy</span>
        </button>
      </div>

      <div class="lav-offer__note lav-modal__text">
        Enter this code at checkout to apply your discount. Act quickly – this exclusive offer expires at midnight!
      </div>
    </div>
  `;

  // <div class='lav-product'>
  //   <div class='lav-product__image'>
  //     <img src="${config.dir}/img/sample.png" />
  //   </div>
  //   <div class='lav-product__title'>Loire Waterproof Riding very long indeed maybe like 200 symbols</div>
  //   <div class='lav-product__price'>
  //     <div class='lav-product__price-old'>$175</div>
  //     <div class='lav-product__price-new'>$158</div>
  //   </div>
  // </div>
  const modalAlmost = /* html */ `
    <div class="lav-modal__close">
      <img src="${config.dir}/img/cross.svg" />
    </div>

    <div class="lav-modal__head">
      <div class="lav-modal__title lav-almost__title">It’s almost yours!</div>
      <div class="lav-modal__caption">Only 1 step left</div>
    </div>

    <div class='lav-cart'>
      <div class='lav-products splide'>
        <div class='splide__track'>
          <div class="splide__list"></div>
        </div>

        <div class="lav-progress">
          <div class="lav-progress__bar"></div>
        </div>
      </div>

      <div class="lav-almost__note lav-almost__note-desk lav-modal__text">
        The price is reserved for you – don't miss out on the savings! Secure your items now before the deal ends at&nbsp;midnight
      </div>
    </div>

    <div class="lav-almost__body">
      <div class="lav-coupon lav-almost__coupon">
        <div class="lav-coupon__value">${getDiscount()}</div>
        <button class="lav-coupon__copy button">
          <img src='${config.dir}/img/copy.svg' />
          <span>Copy</span>
        </button>
      </div>

      <div class="lav-almost__caption">Use this code at checkout and enjoy a 
      <span>10% discount</span> on your entire order.</div>

      <button class="lav-almost__complete button">
        <span>Complete my order</span>
      </button>

      <div class="lav-almost__note lav-almost__note-mob lav-modal__text">
        The price is reserved for you – don't miss out on the savings! Secure your items now before the deal ends at&nbsp;midnight
      </div>
    </div>
  `;

  new Modal('lav-offer', modalOffer);
  new Modal('lav-almost', modalAlmost);

  addVisibilityEvents();
}

function addVisibilityEvents() {
  visibilityEvent('.lav-offer', () => {
    pushDataLayer(
      'exp_exit_intent_pop_vis_jusempt_bloc',
      'Block view',
      'Visibility ',
      'Pop up. Don’t leave just yet! Empty cart'
    );
  });

  visibilityEvent('.lav-almost', () => {
    pushDataLayer(
      'exp_exit_intent_pop_vis_almfill_bloc',
      'Block view',
      'Visibility ',
      'Pop up. It’s almost yours! Filled cart'
    );
  });
}

function handlePopupTriggers() {
  const isMob = window.innerWidth <= 768;
  let isAction = false;
  let timer = 0;
  const timerInterval = setInterval(() => {
    timer += 0.5;

    if (timer % 2 === 0) console.log('timer:', timer + 's');

    if (isPopupShown()) {
      clearInterval(timerInterval);
      return;
    }

    if (timer >= 20) {
      clearInterval(timerInterval);
      console.log('fire ' + timer + 'sec withoutAction');
      openModal();
    }
  }, 500);

  document.addEventListener('click', (e) => {
    if (!isAction) isAction = true;

    if (!isPopupShown()) {
      console.log('Click: reset timer');
      timer = 0;
    }
  });

  document.addEventListener('scroll', () => {
    if (!isAction) isAction = true;

    if (!isPopupShown()) {
      console.log('Scroll: reset timer');
      timer = 0;
    }
  });

  document.addEventListener('visibilitychange', function () {
    if (!isAction && !document.hidden && !isPopupShown()) {
      console.log('Visibility Trigger');

      openModal();
    }
  });

  if (!isMob) {
    document.addEventListener('mouseout', (e) => {
      if (!isAction && !e.toElement && !e.relatedTarget && !isPopupShown()) {
        console.log('MouseOut Trigger');
        openModal();
      }
    });

    return;
  }

  const checkScrollSpeed = (function (settings) {
    settings = settings || {};

    let lastPos;
    let newPos;
    let timer;
    let delta,
      delay = settings.delay || 50;

    clear();

    return function () {
      newPos = window.scrollY;
      if (lastPos != null) {
        delta = newPos - lastPos;
      }
      lastPos = newPos;
      clearTimeout(timer);
      timer = setTimeout(clear, delay);
      return delta;
    };

    function clear() {
      lastPos = null;
      delta = 0;
    }
  })();

  window.onscroll = function () {
    if (!isPopupShown()) {
      const scrollSpeed = checkScrollSpeed();

      if (+scrollSpeed < -70 || +scrollSpeed > 70) {
        console.log('FastScroll Trigger');

        openModal();
      }
    }
  };
}

function getDiscount() {
  const startDate = '2024-02-21';
  const coupons = [
    'DIYB02_NGZ',
    'DIYB02_VPC',
    'DIYB02_HHM',
    'DIYB02_KCE',
    'DIYB02_VPZ',
    'DIYB02_FWU',
    'DIYB02_PDT',
    'DIYB02_XQQ',
    'DIYB02_VYT',
    'DIYB02_GJL',
    'DIYB02_TPS',
  ];

  const currentDate = new Date().toLocaleString('en-US', {
    timeZone: 'Australia/Sydney',
  });

  const diffInTime = new Date(currentDate) - new Date(startDate);

  const diffInDays = Math.floor(diffInTime / (1000 * 60 * 60 * 24));

  if (diffInDays < 0 || diffInDays >= coupons.length) {
    return 'Coupon Not Available';
  }

  const currentCoupon = coupons[diffInDays % coupons.length];

  return currentCoupon;
}

async function openModal() {
  sessionStorage.setItem('isPopupShown', 'true');

  const res = await apiCall('order');
  // console.log('apiCall', res, res?.order?.items?.length);

  if (res?.order?.items?.length) {
    Modal.open('.lav-almost');
    fillCart(res.order.items);
  } else {
    Modal.open('.lav-offer');
  }
}

function fillCart(items) {
  $('.lav-products .splide__list').innerHTML = '';
  // items.push(items[1], items[1]);
  // items.push(...items, ...items, ...items);
  // items.pop();

  $('.lav-products .splide__list').insertAdjacentHTML(
    'beforeend',
    items
      .map((item) => {
        const imageUrl = getImageUrl(item);
        return `
          <div class='lav-product splide__slide'>
            <div class='lav-product__image'>
              <img src="/assets/images/cart/products/${imageUrl}.jpg" />
            </div>
            <div class='lav-product__title'>${item.name}</div>
            <div class='lav-product__price'>
              <div class='lav-product__price-old'>$${item.total}</div>
              <div class='lav-product__price-new'>$${(
                item.total -
                item.total * 0.1
              ).toFixed(2)}</div>
            </div>
          </div>
        `;
      })
      .join('')
  );

  const slides = $$('.lav-product').length;

  // if (slides > 3) {
  initSplide(slides);
  // }

  function getImageUrl(item) {
    let url = item.type;

    if (item.fabric?.group?.name && !item.fabric.group.status) {
      url += ' ' + item.fabric.group.name;
    } else {
      url += ' ' + item.fabric.name;
    }

    if (item.variations?.secondFabric?.group?.name) {
      url += ' and ' + item.variations.secondFabric.group.name;
    }

    // console.log('url1', url);

    url = url.replace(/ /g, '-').toLowerCase();

    // console.log('url2', url);
    return url;
  }
}

function initSplide(slides) {
  const options = {
    // perPage: 3,
    gap: 20,
    direction: 'ttb',
    wheel: true,
    releaseWheel: true,
    autoHeight: true,
    height: '210px',
    arrows: false,
    pagination: false,
    // dragMinThreshold: 130,
    // wheelMinThreshold: 0.5,
    wheelSleep: 100,
    perMove: 1,
    breakpoints: {
      520: {
        height: 'auto',
        autoHeight: false,
        perPage: 1,
        wheel: false,
        direction: 'ltr',
        gap: 24,
        focus: 'center',
        wheelSleep: 20,
        fixedWidth: '160px',
        trimSpace: false,
      },
    },
  };

  if (
    (slides <= 3 && window.innerWidth > 520) ||
    (slides === 1 && window.innerWidth <= 520)
  ) {
    options.destroy = true;
    $('.splide').classList.add('splide_destroyed');
  } else if (slides === 1) {
  }

  const splide = new Splide('.lav-products', options);
  const bar = splide.root.querySelector('.lav-progress__bar');

  // Updates the bar width whenever the carousel moves:
  splide.on('mounted move', function () {
    const isMob = window.innerWidth <= 520;

    var end = splide.Components.Controller.getEnd() + 1;
    var rate = Math.min((splide.index + (isMob ? 1 : 3)) / end, 1);

    bar.style[isMob ? 'width' : 'height'] = String(100 * rate) + '%';

    // var end  = splide.Components.Controller.getEnd() + 1;
    // var rate = Math.min( ( splide.index + 1 ) / end, 1 );
    // bar.style.width = String( 100 * rate ) + '%';
  });

  splide.mount();
}

function addHandlers() {
  for (const copyBtn of $$('.lav-coupon__copy')) {
    copyBtn.addEventListener('click', function () {
      if (this.closest('.lav-coupon').classList.contains('lav-coupon_copied'))
        return;

      if (copyBtn.closest('.lav-offer')) {
        pushDataLayer(
          'exp_exit_intent_pop_but_jusempt_copy',
          'Copy',
          'Button',
          'Pop up. Don’t leave just yet! Empty cart'
        );
      } else if (copyBtn.closest('.lav-almost')) {
        pushDataLayer(
          'exp_exit_intent_pop_but_almfill_copy',
          'Copy',
          'Button',
          'Pop up. It’s almost yours! Filled cart'
        );
      }

      this.closest('.lav-coupon').classList.add('lav-coupon_copied');
      this.querySelector('span').textContent = 'Copied';
      this.querySelector('img').src = config.dir + '/img/copied.svg';
      copyToClipboard(copyBtn.previousElementSibling.textContent);

      setTimeout(() => {
        this.closest('.lav-coupon').classList.remove('lav-coupon_copied');
        this.querySelector('span').textContent = 'Copy';
        this.querySelector('img').src = config.dir + '/img/copy.svg';
      }, 3000);
    });
  }

  $('.lav-almost__complete').addEventListener('click', async function () {
    if (this.classList.contains('lav-loading')) return;

    pushDataLayer(
      'exp_exit_intent_pop_but_almfill_compl',
      'Complete my order',
      'Button',
      'Pop up. It’s almost yours! Filled cart'
    );

    $('.lav-almost__complete').classList.add('lav-loading');
    $('.lav-almost__complete span').textContent = 'Redirecting...';

    const res = await apiCall('getDiscount', getDiscount());

    console.log('res', res);

    if (res.success) {
      window.location.href = 'https://www.diyblinds.com.au/cart';
      setTimeout(() => {
        $('.lav-almost__complete span').textContent = 'Complete my order';
        $('.lav-almost__complete').classList.remove('lav-loading');
      }, 2000);
    } else {
      $('.lav-almost__complete span').textContent = 'Complete my order';
      $('.lav-almost__complete').classList.remove('lav-loading');
      alert(res.message);
    }
  });
}

function copyToClipboard(text) {
  const el = document.createElement('textarea');
  el.value = text;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

async function apiCall(type, promocode) {
  const orderId = getCookie('orderid');
  let url = `https://api.diyblinds.com.au/${type}/`;

  if (type === 'order') {
    url += orderId;
  }

  const options = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=utf-8',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRlc3QiLCJpYXQiOjE2OTk1MDM1NTd9.vVUlccE9RT0JkEPRGOeX78v6P16pdl-zQkH4HmZnA9k',
    },
  };

  if (type === 'getDiscount') {
    options.method = 'POST';
    options.body = JSON.stringify({ promocode, orderID: orderId });
  }

  const res = await fetch(url, options);

  const data = await res.json();

  return data;

  console.log('response', data);
}

function isPopupShown() {
  if (sessionStorage.getItem('isPopupShown')) {
    return true;
  }

  return false;
}
// *** Utils *** //

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
  const el = typeof observeEl === 'string' ? $(observeEl) : observeEl;

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

// Artificial delay
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Check if element in viewport
function isElementInViewport(selector) {
  const el = typeof selector === 'string' ? $(selector) : selector;

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

// Svg objects
function getSvg(name) {
  const svgObj = {};

  return svgObj[name];
}
