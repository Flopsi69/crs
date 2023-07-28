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
      background: var(--pop-up-transparency, rgba(0, 0, 0, 0.70));
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.35s;
      overflow-y: scroll;
      padding: 20px;
      max-height: 100vh;
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
      max-width: 340px;
      width: 100%;
      overflow: hidden;
      padding: 24px;
      margin: auto;
    }
    .lav-modal__close {
      position: absolute;
      right: 24px;
      top: 24px;
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
    .lav-modal__icon {
      line-height: 0;
    }
    .lav-modal__icon img {
      width: 36px;
      height: 36px;
    }
    .lav-modal__title {
      color: #5C5555;
      margin-top: 12px;
      font-size: 18px;
      font-weight: 600;
      line-height: 1.3;
      text-transform: capitalize;
    }
    .lav-modal__text {
      margin-top: 20px;
      color: #383A3D;
      font-size: 13px;
      font-weight: 400;
      line-height: 21px;
      list-style: none;
    }
    .lav-modal__text .mark-red {
      color: #FF2A00;
    }
    .lav-modal__text a {
      color: inherit;
      text-decoration-line: underline;
      transition: 0.35s;
    }
    @media(hover:hover) {
      .lav-modal__text a:hover {
        opacity: 0.7;
      }
    }
    .lav-modal__text p {
      margin: 0;
    }
    .lav-modal__text p + p {
      margin-top: 15px;
    }
    .lav-modal__text li + li {
      margin-top: 10px;
    }
    .lav-modal__text li {
      position: relative;
      padding-left: 16px;
    }
    .lav-modal__text li:before {
      content: '';
      position: absolute;
      top: 8px;
      left: 2px;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: #383A3D;
    }
    .lav-modal__table {
      width: 100%;
      margin-top: 20px;
      text-align: center;
    }
    .lav-modal__table td {
      padding: 15px 10px
    }
    .lav-modal__table tr:not(:last-child) {
      border-bottom: 1px solid var(--border-color);
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

    #tab-content-measurements .size-table-wrapper tr:first-child td, .size-table-wrapper tr:first-child th {
      color: #5C5C5C;
      font-size: 13px;
      font-weight: 600;
      line-height: 19px; 
      vertical-align: bottom;
    }

    .size-table-wrapper tr:first-child td img, .size-table-wrapper tr:first-child th img {
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
      text-align: left;
      color: #5C5555;
      font-size: 13px;
      font-weight: 400;
      margin-top: 20px;
      padding: 0 40px;
      line-height: 1.3;
    }
    .lav-note span {
      display: inline-flex;
      align-items: center;
      color: #3CBE1A;
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
      text-align: left;
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
    .lav-modal__guide .lav-note__link {
      display: none;
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

    .ship-to {
      color: var(--grey-700, #5C5555);
      font-size: 13px;
      font-weight: 400;
    }
    .ship-to__caption {
      margin-right: 4px;
    }
    .ship-to__value {
      position: relative;
      font-weight: 700;
      padding-right: 20px;
      cursor: pointer;
      transition: 0.35s;
    }
    @media(hover: hover) {
      .ship-to__value:hover {
        opacity: 0.7;
      }
    }
    .ship-to__value:after {
      content: '';
      transition: 0.35s;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 14px;
      height: 8px;
      background: url('${exp.dir}/img/icon-dropdown.svg') no-repeat center;
      background-size: contain;
    }
    .ship-to__dropdown {
      position: relative;
      transition: 0.35s;
    }
    .ship-to__dropdown.active .ship-to__value:after {
      transform: translateY(-50%) rotate(180deg);
    }
    .ship-to__list {
      display: none;
      position: absolute;
      left: -10px;
      width: 160px;
      padding: 10px;
      top: calc(100% + 5px);
      font-size: 12px;
      z-index: 1;
      background: white;
      border-radius: 10px;
      box-shadow: 0 0 10px 0 rgb(87 87 87 / 40%);
    }
    .ship-to__dropdown.active .ship-to__list {
      display: block;
    }
    .ship-to__item + .ship-to__item {
      margin-top: 1px;
    }
    .ship-to__item {
      cursor: pointer;
      transition: 0.35s;
      padding: 4px 10px;
      border-radius: 5px;
    }
    .ship-to__item.active {
      background-color: #ebecf2;
    }
    @media(hover:hover) {
      .ship-to__item:hover {
        background: #f7f7f7;
      }
    }

    .below_add_to_cart {
      display: none;
    }

    .lav-modal__guide {
      max-width: 700px;;
      padding: 50px 72px;
    }
    .lav-modal__guide .Container {
      padding: 0;
    }
    .lav-modal__guide  .size-guide-wrapper {
      padding: 0;
    }
    .lav-modal__guide [data-section-type="product-size-guide"] {
      margin: 0;
    }
    .lav-modal__guide .lav-note, .lav-modal__guide .lav-note__plate {
      font-size: 12px;
    }
    .lav-modal__guide .tabs__body .lav-watch-measure {
      display: none;
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

    const shippingOptions = handleDelivery();
    console.log(shippingOptions);
    handleBenefits();

    handleTables();
    handleUnderTable();
    initModals();
    handleShippingTable();

    // handleColors();
  }

  function handleShippingTable() {}
  function handleUnderTable() {
    const el = `
        <div class="lav-note">
          <span><img src='${exp.dir}/img/green-note.svg' /> NOTE:</span> Finding the right size for your dog can be tricky and thats why we offer:
        </div>

        <div class="lav-note__plate">
          <img src="${exp.dir}/img/icon-return.svg">
          <div class="lav-note__title"><span>30-day free return & exchange</span> on your first purchase for all dog apparel items</div>
          <div class="lav-note__link lav-link lav-trigger-return">LEARN MORE</div>
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

      if (text === 'Breed') {
        item.insertAdjacentHTML(
          'afterbegin',
          `<img src="${exp.dir}/img/dog-breed.svg" />`
        );
      }

      if (text.includes('Weight')) {
        item.insertAdjacentHTML(
          'afterbegin',
          `<img src="${exp.dir}/img/dog-weight.svg" />`
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
          <div class='lav-delivery__item ship-to'>
            <div class='ship-to__caption'>Ship to:</div>
            <div class='ship-to__dropdown'>
              <div class='ship-to__value'>United States</div>
              <div class='ship-to__list'></div>
            </div>
          </div>

          <div class='lav-delivery__item'>
            <div class='lav-delivery__icon'>
              <img src="${exp.dir}/img/icon-truck.svg" />
            </div>

            <div class='lav-delivery__info'>
              <div class='lav-delivery__head'>
                <div class='lav-delivery__title'>Delivery</div>
                <div class='lav-delivery__link lav-link lav-trigger-delivery'>Learn more</div>
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
                <div class='lav-delivery__link lav-link lav-trigger-return'>Learn more</div>
              </div>

              <div class='lav-delivery__plate'>
                <div class='lav-delivery__plate-line'>30-day free return & exchange on your first purchase for all dog apparel items</div>
              </div>
            </div>
          </div>
        </div>
      `;

    $('.ProductForm__BuyButtons').insertAdjacentHTML('afterend', el);

    if ($('.Product__Tabs .Heading').innerText.trim() !== 'Shipping Info')
      return false;

    const options = [];

    for (let item of $$('.Product__Tabs .Collapsible__Inner table tr')) {
      if (item.querySelector('td:first-child').textContent === 'Location')
        continue;

      const date = item
        .querySelector('td:last-child')
        .textContent.trim()
        .split(' to ');

      options.push({
        title: item.querySelector('td:first-child').textContent.trim(),
        value: date,
      });
    }

    options.forEach((item, index) => {
      const el = `
          <div class='ship-to__item ${index === 0 ? 'active' : ''}'>${
        item.title
      }</div>
        `;
      $('.ship-to__list').insertAdjacentHTML('beforeend', el);
    });

    $('.ship-to__value').addEventListener('click', () => {
      $('.ship-to__dropdown').classList.toggle('active');
    });

    for (let item of $$('.ship-to__item')) {
      item.addEventListener('click', (e) => {
        if (item.classList.contains('active')) return false;

        $('.ship-to__item.active')?.classList.remove('active');
        item.classList.add('active');

        $('.ship-to__value').textContent = item.textContent;
        $('.ship-to__dropdown').classList.remove('active');
      });
    }

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.ship-to__dropdown')) {
        $('.ship-to__dropdown').classList.remove('active');
      }
    });

    return options;
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
                <span class='lav-option-guide lav-trigger-guide'>
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
            <div class='lav-benefits__title'>Premium Quality Materials</div>
            <div class='lav-benefits__link lav-link lav-trigger-premium'>LEARN MORE</div>
          </div>

          <div class='lav-benefits__item'>
            <img src="${exp.dir}/img/benefit-dog.svg" />
            <div class='lav-benefits__title'>Fit Tested on 100.000+ Dogs</div>
            <div class='lav-benefits__link lav-link lav-trigger-fit'>LEARN MORE</div>
          </div>

          <div class='lav-benefits__item'>
            <img src="${exp.dir}/img/benefit-material.svg" />
            <div class='lav-benefits__title'>Color retention materials</div>
            <div class='lav-benefits__link lav-link lav-trigger-retention'>LEARN MORE</div>
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
          <div class='lav-modal__inner lav-modal__return'>
            <div class='lav-modal__close'>
              <img src="${exp.dir}/img/icon-close.svg" />
            </div>

            <div class="lav-modal__icon">
              <img src="${exp.dir}/img/icon-return.svg" />
            </div>

            <div class="lav-modal__title">30-day free return & exchange</div>

            <div class="lav-modal__text">
              <p>
                Finding the right size for your dog can be tricky and thats why we offer <strong class='mark-red'>free exchange on your 1st purchase for all dog apparel items!</strong>
              </p>

              <p>
                We will gladly help you exchange our products within <strong>30&nbsp;days</strong> of receiving the items as long as the items are in brand new condition, in original tags and packaging, and free of odor and dog hair.
              </p>

              <p>
                To initiate a return, just shoot us an email <a href='mailto:service@sparkpaws.com'>service@sparkpaws.com</a> with your order # and our customer service team will help you out. We will respond to your <strong>request within 24 hours Mon-Fri</strong>.
              </p>
            </div>
          </div>

          <div class='lav-modal__inner lav-modal__retention'>
            <div class='lav-modal__close'>
              <img src="${exp.dir}/img/icon-close.svg" />
            </div>

            <div class="lav-modal__icon">
              <img src="${exp.dir}/img/benefit-material.svg" />
            </div>

            <div class="lav-modal__title">Color retention materials</div>

            <div class="lav-modal__text">
              <p>
                Color retention material used for our dog apparel involves innovative dyeing techniques, UV protection coatings, and/or fabric treatments that minimize color fading caused by sunlight exposure, frequent washing, and general wear and tear, allowing the garments to retain their original brightness and vividness over an extended period of time.
              </p>
            </div>
          </div>

          <div class='lav-modal__inner lav-modal__fit'>
            <div class='lav-modal__close'>
              <img src="${exp.dir}/img/icon-close.svg" />
            </div>

            <div class="lav-modal__icon">
              <img src="${exp.dir}/img/benefit-dog.svg" />
            </div>

            <div class="lav-modal__title">Fit Tested on 100.000+ Dogs</div>

            <div class="lav-modal__text">
              <p>
                Experience unmatched quality and peace of mind with our dog walking sets and apparel.
              </p>
              <p>
                Each product has undergone testing on over 100,000 dogs, ensuring optimal comfort, safety, and a flawless fit. 
              </p>
              <p><strong>Give your dog the best walking experience they deserve.</strong></p>
            </div>
          </div>

          <div class='lav-modal__inner lav-modal__premium'>
            <div class='lav-modal__close'>
              <img src="${exp.dir}/img/icon-close.svg" />
            </div>

            <div class="lav-modal__icon">
              <img src="${exp.dir}/img/benefit-cloth.svg" />
            </div>

            <div class="lav-modal__title">Premium Quality Materials</div>

            <ul class="lav-modal__text">
              <li>Premium human grade teddy sherpa exterior</li>
              <li>Soft polar fleece interior</li>
              <li>Double breasted front buttons for perfect fit</li>
              <li>Dual buttons at the back of the neck to stabilize oversized hood</li>
              <li>Hole opening back of the neck for leash</li>
              <li>Ribbed knit bottom hem & sleeve cuffs</li>
              <li>Adjustable drawstring</li>
              <li>Perfect for indoor and outdoor wear</li>
              <li>Machine wash cold, tumble dry cold, avoid softener</li>
            </ul>
          </div>

          <div class='lav-modal__inner lav-modal__delivery'>
            <div class='lav-modal__close'>
              <img src="${exp.dir}/img/icon-close.svg" />
            </div>

            <div class="lav-modal__icon">
              <img src="${exp.dir}/img/icon-truck.svg" />
            </div>

            <div class="lav-modal__title">Shipping info</div>

            <div class="lav-modal__text">
              <p>
                We will process your order within 3 business days and provide step by step tracking for the package through email and SMS.
              </p>
            </div>

            <table class="lav-modal__table">
              <tbody>
                <tr>
                  <td>Location</td>
                  <td>Business Days</td>
                </tr>
                <tr>
                  <td>United States</td>
                  <td>6 to 12</td>
                </tr>
                <tr>
                  <td>Canada</td>
                  <td>8 to 12</td>
                </tr>
                <tr>
                  <td>Australia &amp; NZ</td>
                  <td>4 to 10</td>
                </tr>
                <tr>
                  <td>United Kingdom</td>
                  <td>5 to 10</td>
                </tr>
                <tr>
                  <td>Germany</td>
                  <td>5 to 10</td>
                </tr>
                <tr>
                  <td>Italy</td>
                  <td>5 to 10</td>
                </tr>
                <tr>
                  <td>France</td>
                  <td>5 to 10</td>
                </tr>
                <tr>
                  <td>Japan</td>
                  <td>5 to 10</td>
                </tr>
                <tr>
                  <td>Rest of EU</td>
                  <td>5 to 12</td>
                </tr>
                <tr>
                  <td>Rest of World</td>
                  <td>10 to 20</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class='lav-modal__inner lav-modal__guide'>
            <div class='lav-modal__close'>
              <img src="${exp.dir}/img/icon-close.svg" />
            </div>

            
          </div>
        </div>
      `;

    document.body.insertAdjacentHTML('beforeend', modalEl);

    // const sizeClone = $('[data-section-type="product-size-guide"]').cloneNode(
    //   true
    // );
    // const sizeClone = $('[data-section-type="product-size-guide"]').outerHTML;
    // $('.lav-modal__guide').insertAdjacentElement('beforeend', sizeClone);
    // $('.lav-modal__guide').insertAdjacentHTML('beforeend', sizeClone);
    // $('.lav-modal__guide').insertAdjacentElement(
    //   'beforeend',
    //   $('[data-section-type="product-size-guide"]')
    // );

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

    for (let el of $$('.lav-trigger-return')) {
      el.addEventListener('click', function () {
        openModal('return');
      });
    }

    for (let el of $$('.lav-trigger-retention')) {
      el.addEventListener('click', function () {
        openModal('retention');
      });
    }

    for (let el of $$('.lav-trigger-fit')) {
      el.addEventListener('click', function () {
        openModal('fit');
      });
    }

    for (let el of $$('.lav-trigger-premium')) {
      el.addEventListener('click', function () {
        openModal('premium');
      });
    }

    for (let el of $$('.lav-trigger-delivery')) {
      el.addEventListener('click', function () {
        openModal('delivery');
      });
    }

    for (let el of $$('.lav-trigger-guide')) {
      el.addEventListener('click', function () {
        $(
          '[data-section-type="product-size-guide"]'
        ).nextElementSibling.classList.add('to-add-back');

        $('.lav-modal__guide').insertAdjacentElement(
          'beforeend',
          $('[data-section-type="product-size-guide"]')
        );
        openModal('guide');
      });
    }

    // openModal('guide');
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
    if (document.querySelector('.lav-modal__guide.active')) {
      $('.to-add-back').insertAdjacentElement(
        'beforebegin',
        $('[data-section-type="product-size-guide"]')
      );
    }
    setTimeout(() => {
      document.querySelector('.lav-modal').style.display = 'none';
      document
        .querySelector('.lav-modal__inner.active')
        .classList.remove('active');
    }, 400);
  }
})();
