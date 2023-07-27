console.log('initExp');

(function () {
  /********* exp **********/
  const exp = {
    dir: 'https://flopsi69.github.io/crs/sparkpaws/redesign-pdp',
    observer: {
      mutation: false,
      intersection: false,
    },
    clarity: {
      enable: true,
      params: ['set', 'improve_upgrade_popup_v2', 'variant_1'],
    },
    debug: true,
  };

  // Observers
  if (exp.observer.mutation) {
    initMutation((el) => {
      console.log(el);
    });
  }

  if (exp.observer.intersection) {
    initIntersection((el) => {
      console.log(el);
      if (isElementInViewport(el)) {
        // pushDataLayer(...event);
        el.classList.add('in-view');
      }
    });
  }

  /*** STYLES / Start ***/
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
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.35s;
  }
  .lav-modal:not(.active ){
    opacity: 0;
    pointer-events: none;
  }
  .lav-modal.active {
    opacity: 1;
  }
  .lav-modal__inner:not(.active) {
    display: none;
  }
  .lav-modal__inner {
    background: #fff;
    position: relative;
    max-width: 380px;
    width: 100%;
    max-height: 90%;
    overflow-y: auto;
    border-radius: 8px;
  }
  .lav-modal__close {
    cursor: pointer;
    transition: 0.35s;
  }
  @media(hover:hover) {
    .lav-modal__close:hover {
      opacity: 0.5;
      transform: scale(1.1);
    }
  }
  .lav-modal-open {
    position: relative;
    overflow: hidden;
  }
  .size-guide__link {
    opacity: 0.5;
  }
  .lav-option-value {
    color: var(--grey-800, #383A3D);
    font-size: 13px;
    font-weight: 700;
    line-height: 1;
    margin-right: auto;
    margin-left: 4px;
  }
  .template-product .ProductForm__Label {
    align-items: center;
  }

  .lav-delivery {
    margin: 28px 0;
  }
  .lav-delivery__item {
    display: flex;
    align-items: flex-start;
    margin-top: 16px;
  }
  .lav-delivery__icon {
    width: 24px;
    flex-shrink: 0;
    line-height: 0;
    margin-right: 16px;
    margin-top: -4px;
  }
  .lav-delivery__info {
    flex-grow: 1;
  }
  .lav-delivery__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 10px;
    line-height: 16px;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  .lav-delivery__title {
    color: var(--grey-800, #383A3D);
    font-weight: 700;
  }
  .lav-delivery__link {
  }
  .lav-link {
    font-size: 10px;
    white-space: nowrap;
    color: var(--primary, #344D79);
    font-weight: 400;
    text-decoration-line: underline;
    text-transform: uppercase;
    cursor: pointer;
    letter-spacing: 1px;
  }
  @media(hover:hover) {
    .lav-link:hover {
      text-decoration-line: none;
      opacity: 0.7;
    }
  }
  .lav-delivery__plate {
    margin-top: 4px;
    background: var(--grey-010, #FAFAFA);
    padding: 4px 12px;
    color: var(--grey-700, #5C5555);
    font-size: 13px;
    line-height: 22px;
  }
  .lav-delivery__plate {
  }
  .lav-delivery__plate-line + .lav-delivery__plate-line {
    margin-top: 4px;
  }
  .lav-delivery__plate span {
    font-weight: 700;
  }

  .lav-benefits {
    margin: 28px 0;
  }
  .lav-benefits__icon {
    flex-shrink: 0;
  }
  .lav-benefits__item {
    display: flex;
    align-items: center;
  }
  .lav-benefits__item + .lav-benefits__item {
    margin-top: 12px;
  }
  .lav-benefits__title {
    color: #383A3D;
    font-size: 10px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 1px;
    text-transform: uppercase;
    flex-grow: 1;
    padding: 0 16px;
  }

  .product-size-guide-title p {
    display: none;
  }

  .product-size-guide-title h2 {
    font-size: 18px;
    font-weight: 600;
    line-height: 26px;
  }
  .size-guide-wrapper {
    margin-top: 20px!important;
  }
  .size-guide-wrapper .tabs__button {
    color: #5C5C5C;
    font-size: 14px;
    font-weight: 700;
    line-height: 24px; 
    padding: 11px 15px;
  }
  .size-guide-wrapper  .tabs__button:not(.is-active) {
    border: 1px solid #E6E6E6;
    border-top: none;
    background: #F0F4F5;
  }

  .size-table-wrapper tr:first-child td {
    color: #5C5C5C;
    font-size: 13px;
    font-weight: 600;
    line-height: 19px; 
    vertical-align: bottom;
  }

  .size-table-wrapper tr:first-child td img {
    display: block;
    margin: 0 auto 9px;
  }
  .size-table-wrapper table tbody tr:first-child td {
    padding-top: 0!important;
  }
  .size-table-wrapper {
    margin-top: 0!important;
  }

  .lav-watch-measure {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin: 28px auto;
  }
  .lav-watch-measure img {
    margin-left: 4px;
  }

  .lav-note {
    display: flex;
    align-items: center;
    color: #5C5555;
    font-size: 13px;
    font-weight: 400;
    margin-top: 20px;
    padding: 0 40px;
  }
  .lav-note span {
    display: flex;
    color: #3CBE1A;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-right: 4px;
  }
  .lav-note span img {
    margin-right: 6px;
  }
  .lav-note__plate {
    display: flex;
    align-items: center;
    padding: 12px 40px;
    border-top: 1px solid var(--grey-300, #E7E7E7);
    border-bottom: 1px solid var(--grey-300, #E7E7E7);
    background: var(--grey-010, #FAFAFA);
    margin-top: 16px;
  }
  .lav-note__plate img {
    width: 36px;
    height: 36px;
    flex-shrink: 0;
  }
  .lav-note__title {
    margin: 0 16px;
    color: var(--grey-700, #5C5555);
    font-size: 13px;
    font-weight: 400;
    line-height: 18px;
  }
  .lav-note__title span {
    font-weight: 700;
  }
  .lav-note__link {
    margin-left: auto;
  }
  .size-guide-wrapper {
    max-width: 810px!important;
  }

  .lav-option-guide {
    display: flex;
    align-items: center;
    margin-left: auto;
  }
  .lav-option-guide img {
    margin-right: 5px;
  }
  .tabs__body {
    padding: 0!important;
  }
  #tab-content-measurements {
    padding: 37px 30px 0;
  }
  .size-toggle-wrapper {
    padding-bottom: 0!important;
    margin-bottom: 0!important;
  }
  .search-breed__note {
    color: #5C5C5C;
    font-size: 13px;
    font-weight: 300;
    line-height: 19px;
    margin-bottom: 16px;
  }
  .search-breed {
    max-width: 320px!important;
  }
  #tab-content-breeds .sub-tabs__body {
    margin-bottom: 0!important;
  }
  .size-table-wrapper table thead th {
    border-bottom: 0!important;
    padding: 0!important;
  }
  .tabs__panel-body-breeds .size-table-wrapper {
    border-top: 1px solid var(--grey-200, #E6E6E6);
    padding-top: 12px;
    margin-top: 12px!important;
    padding-bottom: 0!important;
  }
  .tabs__panel-body-breeds .size-toggle-wrapper {
    margin-top: 10px;
  }
  .size-table-wrapper table thead th {
    padding: 7px 0!important;
  }
`;

  const stylesEl = document.createElement('style');
  stylesEl.innerHTML = styles;
  waitFor(
    () => document.head,
    () => {
      document.head.appendChild(stylesEl);
    },
    100
  );
  /*** STYLES / End ***/

  /********* Custom Code **********/
  init();
  function init() {
    console.log('init');
    handleOptions();

    handleDelivery();
    handleBenefits();

    handleTables();
    handleUnderTable();
    initModals();

    // handleColors();
  }

  function handleUnderTable() {
    const el = `
      <div class="lav-note">
        <span><img src='${exp.dir}/img/green-note.svg' /> NOTE:</span> Finding the right size for your dog can be tricky and thats why we offer:
      </div>

      <div class="lav-note__plate">
        <img src="${exp.dir}/img/icon-return.svg">
        <div class="lav-note__title"><span>30-day free return & exchange</span> on your first purchase for all dog apparel items</div>
        <div class="lav-note__link lav-link">LEARN MORE</div>
      </div>
    `;

    $('.size-guide__content').insertAdjacentHTML('afterend', el);
  }

  function handleTables() {
    if ($('.product-size-guide-title h2')) {
      $('.product-size-guide-title h2').innerText = $(
        '.product-size-guide-title h2'
      ).innerText.replace('Guide', 'Charts');
    }

    // Change text
    $$('.size-table-wrapper tr:first-child td:first-child').forEach((item) => {
      const text = item.innerText.trim();

      if (['CM', 'Inches'].includes(text)) {
        item.innerText = 'Size';
        item.classList.add('lav-col-size');
      }
    });

    // Add icons
    $$(
      '.size-table-wrapper tr:first-child td, .size-table-wrapper tr:first-child th'
    ).forEach((item) => {
      const text = item.innerText.trim();

      if (text === 'Chest') {
        item.insertAdjacentHTML(
          'afterbegin',
          `<img src="${exp.dir}/img/dog-chest.svg" />`
        );
      }

      if (text === 'Neck') {
        item.insertAdjacentHTML(
          'afterbegin',
          `<img src="${exp.dir}/img/dog-neck.svg" />`
        );
      }

      if (text === 'Back') {
        item.insertAdjacentHTML(
          'afterbegin',
          `<img src="${exp.dir}/img/dog-back.svg" />`
        );
      }
    });

    $('.tabs__body').insertAdjacentHTML(
      'beforeend',
      `<div class="lav-watch-measure">
        <span class="lav-link">WATCH VIDEO ON HOW TO MEASURE</span>
        <img src="${exp.dir}/img/icon-play.svg" ></div>`
    );
  }

  function handleDelivery() {
    const el = `
      <div class='lav-delivery'>
        <div class='lav-delivery__item'>
          <div class='lav-delivery__icon'>
            <img src="${exp.dir}/img/icon-truck.svg" />
          </div>

          <div class='lav-delivery__info'>
            <div class='lav-delivery__head'>
              <div class='lav-delivery__title'>Delivery</div>
              <div class='lav-delivery__link lav-link'>Learn more</div>
            </div>

            <div class='lav-delivery__plate'>
              <div class='lav-delivery__plate-line'>Free shipping on orders over <span>$50</span></div>
              <div class='lav-delivery__plate-line'>Est. Delivery: <span>20 Jun - 22 Jun</span></div>
            </div>
          </div>
        </div>

        <div class='lav-delivery__item'>
          <div class='lav-delivery__icon'>
            <img src="${exp.dir}/img/icon-return.svg" />
          </div>

          <div class='lav-delivery__info'>
            <div class='lav-delivery__head'>
              <div class='lav-delivery__title'>Return policy</div>
              <div class='lav-delivery__link lav-link'>Learn more</div>
            </div>

            <div class='lav-delivery__plate'>
              <div class='lav-delivery__plate-line'>30-day free return & exchange on your first purchase for all dog apparel items</div>
            </div>
          </div>
        </div>
      </div>
    `;

    $('.ProductForm__BuyButtons').insertAdjacentHTML('afterend', el);
  }

  function handleOptions() {
    $$('.ProductForm__Option, .ProductForm__QuantitySelector').forEach(
      (optionEl) => {
        const labelEl = $('.ProductForm__Label', optionEl);

        if (labelEl?.innerText.includes('Color')) {
          optionEl.classList.add('lav-colors');

          if (
            $('.SizeSwatch__Radio:checked + .SizeSwatch', optionEl)?.innerText
          ) {
            labelEl.insertAdjacentHTML(
              'beforeend',
              `<span class="lav-option-value">${
                $('.SizeSwatch__Radio:checked + .SizeSwatch', optionEl)
                  .innerText
              }</span>`
            );
          }
        }

        if (labelEl?.innerText.includes('Size')) {
          optionEl.classList.add('lav-size');

          if (
            $('.SizeSwatch__Radio:checked + .SizeSwatch', optionEl)?.innerText
          ) {
            labelEl.insertAdjacentHTML(
              'beforeend',
              `
              <span class="lav-option-value">${
                $('.SizeSwatch__Radio:checked + .SizeSwatch', optionEl)
                  .innerText
              }</span>
              <span class='lav-option-guide'>
                <img src="${exp.dir}/img/icon-ruler.svg" />
                <span class="lav-link">View Size Guide</span>
              </span>
              `
            );
          }
        }

        if (labelEl?.innerText.includes('Quantity')) {
          optionEl.classList.add('lav-quantity');

          console.log($('[name="quantity"]', optionEl));
          if ($('[name="quantity"]', optionEl)?.value) {
            labelEl.insertAdjacentHTML(
              'beforeend',
              `<span class="lav-option-value">${
                $('[name="quantity"]', optionEl).value
              }</span>`
            );
          }
        }
      }
    );
  }

  function handleBenefits() {
    const el = `
      <div class='lav-benefits'>
        <div class='lav-benefits__item'>
          <img src="${exp.dir}/img/benefit-cloth.svg" />
          <div class='lav-benefits__title'>Fit Tested on 100.000+ Dogs</div>
          <div class='lav-benefits__link lav-link'>LEARN MORE</div>
        </div>

        <div class='lav-benefits__item'>
          <img src="${exp.dir}/img/benefit-dog.svg" />
          <div class='lav-benefits__title'>Premium Quality Materials</div>
          <div class='lav-benefits__link lav-link'>LEARN MORE</div>
        </div>

        <div class='lav-benefits__item'>
          <img src="${exp.dir}/img/benefit-material.svg" />
          <div class='lav-benefits__title'>Color retention materials</div>
          <div class='lav-benefits__link lav-link'>LEARN MORE</div>
        </div>
      </div>
    `;

    $('.ProductMeta__Description').insertAdjacentHTML('beforebegin', el);
  }

  function handleColors() {
    $$('.ProductForm__Option').forEach((optionEl) => {
      console.log(optionEl);
      console.log($('.ProductForm__Label', optionEl));
      if ($('.ProductForm__Label', optionEl)?.innerText.includes('Color')) {
        optionEl.classList.add('lav-colors');
      }
    });

    if (!$('.lav-colors')) return false;
  }

  // *** Utils *** //

  // Waiting for loading by condition
  function waitFor(condition, cb, ms = 1000) {
    if (condition()) {
      if (typeof cb == 'function') cb();
      return;
    }

    let interval = setInterval(function () {
      if (condition()) {
        clearInterval(interval);
        if (typeof cb == 'function') cb();
      }
    }, ms);
  }

  // Alalytic 4
  function pushDataLayer(name = '', desc = '', type = '', loc = '') {
    try {
      var objData = {
        event: 'event-to-ga4',
        event_name: name,
        event_desc: desc,
        event_type: type,
        event_loc: loc,
      };
      console.log('eventFire', objData);
      if (!exp.debug) {
        dataLayer.push(objData);
      }
    } catch (e) {
      console.log('Event Error:', e);
    }
  }
  // Mutation Observer
  function initMutation(cb) {
    let observer = new MutationObserver((mutations) => {
      for (let mutation of mutations) {
        for (let node of mutation.addedNodes) {
          if (!(node instanceof HTMLElement)) continue;

          cb(node);
        }
      }
    });

    waitFor(
      () => document.body,
      () => {
        observer.observe(document.body, { childList: true, subtree: true });
      },
      100
    );
  }

  // Intersection Observer
  function initIntersection(cb, observeEl) {
    const observerOptions = {
      root: null,
      threshold: 0,
      // rootMargin: '-40%',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          cb(entry.target);
        }
      });
    }, observerOptions);

    if (observeEl) {
      observer.observe(observeEl);
    } else {
      for (let el of Array.from(document.querySelectorAll('.lav-observe'))) {
        observer.observe(el);
      }
    }
  }

  async function isElementInViewport(el, event, timeout = 5) {
    if (el.classList.contains('in-view')) return false;

    setTimeout(() => {
      const rect = el.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      if (
        rect.top + rect.height * 0.3 < windowHeight &&
        rect.bottom > rect.height * 0.3
      ) {
        return true;
      }

      return false;
    }, timeout * 1000);
  }

  //Clarity
  if (!exp.debug && exp.clarity.enable) {
    waitFor(
      () => typeof clarity == 'function',
      () => {
        clarity(...exp.clarity.params);
      }
    );
  }

  function $(selector, context = document) {
    return context.querySelector(selector);
  }

  function $$(selector, context = document) {
    return context.querySelectorAll(selector);
  }

  function initModals() {
    const modalEl = `
      <div class='lav-modal' style='display: none;'>
        <div class='lav-modal__inner lav-modal__test'>
        asdf
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalEl);

    document
      .querySelector('.lav-modal')
      .addEventListener('click', function (e) {
        if (e.target.classList.contains('lav-modal')) {
          closeModal();
        }
      });

    for (let el of document.querySelectorAll('.lav-modal__close')) {
      el.addEventListener('click', function () {
        closeModal();
      });
    }
  }

  function openModal(type) {
    document.body.classList.add('lav-modal-open');
    document.querySelector('html').classList.add('lav-modal-open');
    document.querySelector('.lav-modal__' + type).classList.add('active');
    document.querySelector('.lav-modal').style.display = 'flex';
    setTimeout(() => {
      document.querySelector('.lav-modal').classList.add('active');
    }, 100);
  }

  function closeModal() {
    document.body.classList.remove('lav-modal-open');
    document.querySelector('html').classList.remove('lav-modal-open');
    document.querySelector('.lav-modal').classList.remove('active');
    setTimeout(() => {
      document.querySelector('.lav-modal').style.display = 'none';
      document
        .querySelector('.lav-modal__inner.active')
        .classList.remove('active');
    }, 400);
  }
})();
