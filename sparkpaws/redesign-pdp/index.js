console.log('initExp');

(function () {
  /********* exp **********/
  const exp = {
    dir: 'https://flopsi69.github.io/crs/sparkpaws/redesign-pdp',
    observer: {
      mutation: false,
      intersection: true,
    },
    clarity: {
      enable: true,
      params: ['set', 'new_info_pdp', 'variant_1'],
    },
    debug: false,
  };

  // Observers
  if (exp.observer.mutation) {
    initMutation((el) => {
      console.log(el);
    });
  }

  /*** STYLES / Start ***/
  const styles = `
      .lav-modal {
        position: fixed;
        z-index: 999999999999;
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
      .select2-container {
        z-index: 99999999999;
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
        display: none;
      }
      .lav-option-value {
        color: var(--grey-800, #383A3D);
        font-size: 13px;
        font-weight: 700;
        line-height: 1;
        margin-right: auto;
        margin-left: 4px;
      }
      .lav-quantity-stock {
        font-size: 13px;
        font-weight: 500;
        letter-spacing: 1px;
        text-transform: uppercase;
        margin-left: auto;
        color: var(--green, #3CBE1A);
      }
      .lav-quantity-stock_out {
        color: #FF2A00;
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
        text-underline-offset: 2px;
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
        max-height: 40px;
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
      .lav-note span span {
        color: #3CBE1A;
        font-weight: 500;
        letter-spacing: 1px;
        text-transform: uppercase;
      }
      .lav-note img {
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
      .lav-modal__guide #tab-content-breeds .size-toggle-wrapper {
        margin-bottom: 20px!important;
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
      .lav-modal__guide .size-guide-wrapper {
        padding: 0;
        margin: 0;
      }
      .Section[data-section-type="product-size-guide"] {
        margin-bottom: 120px;
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
      .lav-modal__guide #tab-content-measurements {
        padding-bottom: 28px;
      }

      .template-product .ProductMeta__Description {
        margin-top: 28px;
      }
      .lav-product__title {
        color: #5C5555;
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: 21px;
        margin-bottom: 16px;
      }
      .template-product .ProductMeta__Description ul {
        margin-left: 16px;
      }

      .lav-contact {
        margin-top: 20px;
        padding-top: 20px;
        border-top: 1px solid #E7E7E7;
        text-align: center;
      }

      .lav-contact__caption {
        color: #5C5C5C;
        text-align: center;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px; 
      }

      .lav-contact__btn {
        padding: 8px 24px;
        cursor: pointer;
        border: 1px solid #344D79;
        text-align: center;
        max-width: 260px;
        width: 100%;
        margin: 12px auto 0;
        color: var(--primary, #344D79);
        font-size: 11px;
        font-weight: 400;
        line-height: 13px;
        letter-spacing: 2.2px;
        text-transform: uppercase;
        transition: 0.35s;
        min-height: 42px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      @media(hover: hover) {
        .lav-contact__btn:hover {
          background-color: var(--primary, #344D79);
          color: #fff;
        }
      }

      .lav-product-collapse {
        display: none;
      }
      .lav-mob {
        display: none;
      }
      .lav-how {
        text-align: center;
        margin-top: 20px;
      }
      .lav-how__title {
        color: #5C5555;
        font-size: 14px;
        font-weight: 700;
        line-height: 24px
      }
      .lav-how__image {
        line-height: 0;
        margin-top: 20px;
      }
      .lav-how__image img {
        max-width: 160px;
        width: 100%;
      }
      .lav-how__link {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        margin-top: 20px;
      }
      .lav-how__link img {
        margin-left: 4px;
      }
      .size-guide__video {
        height: 0!important;
        overflow: hidden!important; 
        padding: 0!important;
      }
      .lav-ach {
        margin-top: 15px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
      }
      .lav-ach__item {
        width: 33.33%;
        padding: 0 15px 15px;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        align-items: center;
      }
      .cross-banner__widget {
        display: none;
      }
      .size-table-wrapper > p {
        display: none;
      }
      .lav-colors .HorizontalList__Item {
        margin-top: 0;
        margin-left: 5px;
        margin-right: 5px;
      }
      .lav-colors .lav-colors__item {
        width: 39px;
        height: 39px;
        border-radius: 50%;
        font-size: 0;
        line-height: 0;
        border: 2px solid #fff!important;
      }
      .lav-colors .disabled .lav-colors__item {
        outline: 1px solid red;
      }
      .SizeSwatch__Radio:checked + .lav-colors__item {
        outline: 1px solid;
      }
      .lav-colors .lav-colors__item:before {
      }
      .lav-color-black {
        background:;
      }
      .lav-ach__item img {
        margin-top: 0!important;
        margin-bottom: 5px!important;
      }
      @media(max-width: 767px) {
        .lav-desk {
          display: none;
        }
        .lav-mob {
          display: block;
        }
        .ProductForm__Option {
          margin-bottom: 16px;
          padding-bottom: 18px;
          border-bottom: 1px solid #E6E6E6;
        }
        .ProductForm__Variants {
          margin-top: 16px;
          margin-bottom: 16px;
        }
        .ProductMeta {
          margin-bottom: 16px;
        }
        .lav-delivery {
          margin: 20px 0 5px;
        }
        .lav-benefits {
          margin: 10px 0 0;
        }
        .single-product-size-guide {
          margin-top: 50px;
        }
        .size-guide-wrapper .tabs__button {
          white-space: nowrap;
          padding: 10px;
        }
        .tabs__button:first-child {
          width: 60%;
        }
        .tabs__button:last-child {
          width: 40%;
        }
        #tab-content-measurements {
          padding-left: 16px;
          padding-right: 15px;
        }
        .lav-note {
          padding: 0;
        }
        .lav-note__plate {
          align-items: flex-start;
          margin-left: -14px;
          margin-right: -14px;
          padding-left: 14px;
          padding-right: 14px;
        }
        .lav-note__plate img {
          width: 24px;
          height: 24px;
        }
        .lav-note {
          align-items: flex-start;
        }
        .lav-note img {
          margin-top: 1px;
        }
        .search-breed {
          min-height: auto!important;
        }
        #tab-content-breeds .sub-tabs__body {
          min-height: 100px!important;
        }
        .tabs__panel-body-breeds .size-toggle-wrapper {
          margin-top: 0;
        }
        .search-breed {
          padding: 0 10px;
        }
        .lav-product-collapse {
          display: block;
          margin: 20px -24px 0;
          padding: 0 24px;
        }
        .Product__Tabs {
          margin-top: -1px!important;
        }
        .lav-product-collapse ul {
          margin-left: 16px;
        }
        .ProductMeta__Description {
          display: none;
        }
        .lav-modal__guide {
          padding: 32px 12px;
        }
        .lav-modal {
          padding: 12px;
        }
        .lav-modal__guide [data-section-type="product-size-guide"] {
          padding-top: 0!important;
          margin-top: 0!important;
        }
        .lav-modal__guide #tab-content-breeds {
          padding-bottom: 20px;
        }
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
    waitFor(
      () => $('.ProductForm__QuantitySelector'),
      () => {
        handleOptions();
      }
    );

    waitFor(
      () => $('.ProductForm__BuyButtons'),
      () => {
        handleDelivery();
      }
    );

    waitFor(
      () => $('.cbb-frequently-bought-container'),
      () => {
        handleBenefits();
        setTimeout(initModals, 800);
      }
    );

    waitFor(
      () => $('[data-section-type="product-recommendations"]'),
      () => {
        if ($('.size-guide__content')) {
          handleTables();
          handleUnderTable();
        }
      }
    );

    waitFor(
      () => $('.ProductMeta__Description'),
      () => {
        handleProductInfo();
      }
    );
  }

  function handleProductInfo() {
    if (!$('.ProductMeta__Description')) return false;

    $('.ProductMeta__Description').insertAdjacentHTML(
      'afterbegin',
      `
        <div class='lav-product__title'>Product info</div>
      `
    );

    const mobileCollapse = `
        <div class="Collapsible Collapsible--large lav-product-collapse">
          <button class="Collapsible__Button Heading u-h6" data-action="toggle-collapsible" aria-expanded="false">Product info<span class="Collapsible__Plus"></span>
          </button>

          <div class="Collapsible__Inner">
            <div class="Collapsible__Content">
              <div class="Rte"></div>
              </div>
            </div>
          </div>
        </div>
      `;

    $('.ProductMeta__Description').insertAdjacentHTML(
      'afterend',
      mobileCollapse
    );

    // todo check product info icons
    if ($('.cross-banners .cross-banner')) {
      const parent = document.createElement('div');
      parent.classList.add('lav-ach');

      $$('.ProductForm .cross-banners .cross-banner').forEach((el) => {
        const child = document.createElement('div');
        child.classList.add('lav-ach__item');

        const text = el.querySelector('p').innerText.trim().toLowerCase();
        if (text.includes('fit tested')) {
          $('.lab-benefit__fit').classList.add('active');
        }

        if (text.includes('color retention')) {
          $('.lab-benefit__retention').classList.add('active');
        }

        child.innerHTML = el.innerHTML;

        parent.insertAdjacentElement('beforeend', child);
      });

      $('.ProductMeta__Description .Rte').insertAdjacentElement(
        'beforeend',
        parent
      );
    }

    $('.lav-product-collapse .Rte').innerHTML = $(
      '.ProductMeta__Description .Rte'
    ).innerHTML;
  }

  function handleUnderTable() {
    const el = `
          <div class="lav-note">
            <img src='${exp.dir}/img/green-note.svg' /><span>  <span>NOTE:</span> Finding the right size for your dog can be tricky and thats why we offer:</span>
          </div>

          <div class="lav-note__plate lav-observe">
            <img src="${exp.dir}/img/icon-return.svg">
            <div class="lav-note__title"><span>30-day free return & exchange</span> on your first purchase for all dog apparel items</div>
            <div class="lav-note__link lav-link lav-trigger-return">LEARN MORE</div>
          </div>
        `;

    $('.size-guide__content').insertAdjacentHTML('afterend', el);
  }

  function handleTables() {
    $('[data-section-type="product-size-guide"]').classList.add('lav-observe');

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

    document.addEventListener('click', function (e) {
      const el = e.target;
      const tabEl = el.closest('.tabs__button');
      if (tabEl) {
        handleImageForPopUp(tabEl.dataset.tab);

        if (
          tabEl.innerText === 'Size by Breed' &&
          $('.lav-modal__guide.active')
        ) {
          pushDataLayer(
            'exp_new_info_pdp_pp_v_breed',
            'Pop up Size charts',
            'Visibility',
            'Pop up Size charts - Size by Breed'
          );
        }

        if ($('.lav-modal__guide.active')) {
          pushDataLayer(
            'exp_new_info_pdp_pp_tab',
            `${tabEl.innerText}`,
            'Tab',
            'Pop up Size charts'
          );
        } else {
          pushDataLayer(
            'exp_new_info_pdp_tab',
            `${tabEl.innerText}`,
            'Tab',
            'Size chart'
          );
        }
      }

      if (el.closest('.select2') && el.closest('.search-breed')) {
        setTimeout(() => {
          $$('.select2-container .select2-results__option').forEach((item) => {
            item.addEventListener('click', function () {
              if ($('.lav-modal__guide.active')) {
                pushDataLayer(
                  'exp_new_info_pdp_pp_breed_mydog',
                  `My dog is like a - ${item.innerText}`,
                  'Dropdown',
                  'Pop up Size charts - Size by Breed'
                );
              } else {
                pushDataLayer(
                  'exp_new_info_pdp_breed_mydog',
                  `My dog is like a - ${item.innerText}`,
                  'Dropdown',
                  'Size chart'
                );
              }
            });
          });
        }, 300);
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

      if (text === 'Paw Width') {
        item.insertAdjacentHTML(
          'afterbegin',
          `<img src="${exp.dir}/img/dog-paw-width.svg" />`
        );
      }

      if (text.includes('Weight')) {
        item.insertAdjacentHTML(
          'afterbegin',
          `<img src="${exp.dir}/img/dog-weight.svg" />`
        );
      }
    });

    // todo video what to do
    // and .size-guide__video remove
    if ($('.measurements__cell-link')) {
      $('.tabs__body')?.insertAdjacentHTML(
        'beforeend',
        `
            <div class="lav-watch-measure">
              <span class="lav-link lav-link-measure">WATCH VIDEO ON HOW TO MEASURE</span>
              <img src="${exp.dir}/img/icon-play.svg" >
            </div>
          `
      );

      $('.lav-link-measure').addEventListener('click', () => {
        pushDataLayer(
          'exp_new_info_pdp_wvideo',
          'Watch video on how to measure',
          'Button',
          'Size chart'
        );
        $('.measurements__cell-link')?.click();
      });
    } else {
      $('.tabs__body')?.insertAdjacentHTML(
        'beforeend',
        `
          <div class="lav-watch-measure"></div>
        `
      );
    }

    let isFireToggler = false;
    $$('.toggle-button__switch').forEach((item) => {
      item.addEventListener('click', function () {
        if (!isFireToggler) {
          isFireToggler = true;
          if (item.closest('.lav-modal__guide')) {
            pushDataLayer(
              'exp_new_info_pdp_pp_toggle_in',
              `${$('input:checked + label', item).innerText}`,
              'Toggle',
              'Pop up Size charts - Size by Measurements'
            );
          } else {
            pushDataLayer(
              'exp_new_info_pdp_toggle_in',
              `${$('input:checked + label', item).innerText}`,
              'Toggle',
              'Size chart'
            );
          }

          setTimeout(() => {
            isFireToggler = false;
          }, 500);
        }
      });
    });
  }

  function handleDelivery() {
    const el = `
          <div class='lav-delivery lav-observe'>
            <div class='lav-delivery__item ship-to'>
              <div class='ship-to__caption'>Ship to:</div>
              <div class='ship-to__dropdown'>
                <div class='ship-to__value'></div>
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
                  <div class='lav-delivery__plate-line'>Free shipping on orders over <span>50$</span></div>
                  <div class='lav-delivery__plate-line'>Est. Delivery: <span>20 Jun - 22 Jun</span></div>
                </div>
              </div>
            </div>

            <div class='lav-delivery__item lav-observe'>
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

      const title = item.querySelector('td:first-child').textContent.trim();

      let price = null;
      switch (title) {
        case 'United States':
          price = '50$';
          break;
        case 'Canada':
          price = '$60 CAD';
          break;
        case 'Australia & NZ':
          price = '$65 AUD';
          break;
        case 'United Kingdom':
          price = '£40';
          break;
        case 'Germany':
          price = '€50';
          break;
        case 'Italy':
          price = '€50';
          break;
        case 'France':
          price = '€50';
          break;
        case 'Japan':
          price = '¥6500';
          break;
        case 'Rest of EU':
          price = '€50';
          break;
        case 'Rest of World':
          price = '50$';
          break;
      }

      options.push({
        title: title,
        value: date,
        deliveryFrom: price,
      });
    }

    $('.ship-to__value').textContent = options[0].title;
    $('.lav-delivery__plate-line:last-child span').textContent = countDelivery(
      options[0].value
    );

    options.forEach((option, index) => {
      const el = document.createElement('div');
      el.classList.add('ship-to__item');
      if (index === 0) el.classList.add('active');

      el.textContent = option.title;

      el.addEventListener('click', () => {
        if (el.classList.contains('active')) return false;

        const delivery = countDelivery(option.value);
        $('.lav-delivery__plate-line:last-child span').textContent = delivery;
        $('.lav-delivery__plate-line:first-child span').textContent =
          option.deliveryFrom;

        $('.ship-to__item.active')?.classList.remove('active');
        el.classList.add('active');

        $('.ship-to__value').textContent = option.title;
        $('.ship-to__dropdown').classList.remove('active');
      });

      $('.ship-to__list').insertAdjacentElement('beforeend', el);
    });

    $('.ship-to__value').addEventListener('click', () => {
      $('.ship-to__dropdown').classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.ship-to__dropdown')) {
        $('.ship-to__dropdown').classList.remove('active');
      }
    });

    function countDelivery([fromRange, toRange]) {
      const today = new Date();
      const firstDate = new Date(today);
      firstDate.setDate(today.getDate() + parseInt(fromRange));

      const secondDate = new Date(today);
      secondDate.setDate(today.getDate() + parseInt(toRange));

      const formatDate = (date) =>
        `${date.getDate()} ${
          [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
          ][date.getMonth()]
        }`;

      return `${formatDate(firstDate)} - ${formatDate(secondDate)}`;
    }

    return options;
  }

  function handleOptions() {
    $$('.ProductForm__Option, .ProductForm__QuantitySelector').forEach(
      (optionEl) => {
        const labelEl = $('.ProductForm__Label', optionEl);

        if (labelEl?.innerText.includes('Color')) {
          optionEl.classList.add('lav-colors', 'lav-observe');

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

          $$('.SizeSwatch__Radio', optionEl).forEach((item) => {
            handleColors(item.closest('.HorizontalList__Item'));

            item.addEventListener('change', () => {
              const value = item.nextElementSibling.textContent;

              pushDataLayer(
                'exp_new_info_pdp_c_color',
                `${value}`,
                'Option',
                'Color'
              );

              $('.lav-option-value', optionEl).textContent = value;
            });
          });
        }

        if (labelEl?.innerText.includes('Size')) {
          optionEl.classList.add('lav-size', 'lav-observe');

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
                  `
            );

            setTimeout(() => {
              if ($('.size-guide__content')) {
                labelEl.insertAdjacentHTML(
                  'beforeend',
                  `
                      <span class='lav-option-guide lav-trigger-guide'>
                        <img src="${exp.dir}/img/icon-ruler.svg" />
                        <span class="lav-link">View Size Guide</span>
                      </span>
                      `
                );
              }
            }, 1000);
          }

          $$('.SizeSwatch__Radio', optionEl).forEach((item) => {
            item.addEventListener('change', () => {
              $('.lav-option-value', optionEl).textContent =
                item.nextElementSibling.textContent;
            });
          });
        }

        if (labelEl?.innerText.includes('Quantity')) {
          optionEl.classList.add('lav-quantity');

          // TODO another variant
          // out of stock
          if ($('[name="quantity"]', optionEl)?.value) {
            let text = 'In stock';
            if ($('.ProductForm__AddToCart[disabled]')) {
              text = 'Out of stock';
            }
            labelEl.insertAdjacentHTML(
              'beforeend',
              `
                <span class="lav-option-value">${
                  $('[name="quantity"]', optionEl).value
                }</span>
                <span class="lav-quantity-stock">${text}</span>
                `
            );

            setInterval(() => {
              if (
                $('.ProductForm__AddToCart[disabled]') &&
                !$('.lav-quantity-stock_out')
              ) {
                text = 'Out of stock';
                $('.lav-quantity-stock').classList.add(
                  'lav-quantity-stock_out'
                );
              } else if (
                !$('.ProductForm__AddToCart[disabled]') &&
                $('.lav-quantity-stock_out')
              ) {
                $('.lav-quantity-stock').textContent = 'In stock';
                $('.lav-quantity-stock').classList.remove(
                  'lav-quantity-stock_out'
                );
              }
            }, 500);
          }

          $('.QuantitySelector', optionEl).addEventListener('click', (e) => {
            setTimeout(() => {
              $('.lav-option-value', optionEl).textContent = $(
                '[name="quantity"]',
                optionEl
              ).value;
            }, 100);
          });
        }
      }
    );
  }

  function handleBenefits() {
    const el = `
          <div class='lav-benefits lav-observe'>
            <div class='lav-benefits__item lab-benefit__premium'>
              <img src="${exp.dir}/img/benefit-cloth.svg" />
              <div class='lav-benefits__title'>Premium Quality Materials</div>
              <div class='lav-benefits__link lav-link lav-trigger-premium'>LEARN MORE</div>
            </div>

            <div class='lav-benefits__item lab-benefit__fit'>
              <img src="${exp.dir}/img/benefit-dog.svg" />
              <div class='lav-benefits__title'>Fit Tested on 100.000+ Dogs</div>
              <div class='lav-benefits__link lav-link lav-trigger-fit'>LEARN MORE</div>
            </div>

            <div class='lav-benefits__item lab-benefit__retention'>
              <img src="${exp.dir}/img/benefit-material.svg" />
              <div class='lav-benefits__title'>Color retention materials</div>
              <div class='lav-benefits__link lav-link lav-trigger-retention'>LEARN MORE</div>
            </div>
          </div>
        `;

    // $('.ProductMeta__Description').insertAdjacentHTML('beforebegin', el);
    $('.cbb-frequently-bought-container').insertAdjacentHTML('afterend', el);
  }

  function handleImageForPopUp(tab) {
    if (tab === 'tab-content-measurements') {
      const arrHeadingCol = Array.from(
        document.querySelectorAll(
          '.size-table-wrapper tr:first-child td, .size-table-wrapper tr:first-child th'
        )
      ).map((el) => el.innerText.trim().toLowerCase());

      let src = '';
      if (arrHeadingCol.includes('neck')) {
        src += 'neck';
      }

      if (arrHeadingCol.includes('chest')) {
        src += src.length ? '-chest' : 'chest';
      }

      if (arrHeadingCol.includes('back')) {
        src += src.length ? '-back' : 'back';
      }

      if (arrHeadingCol.includes('paw width')) {
        src += 'paw-width';
      }

      $('.lav-how__image img').src = `${exp.dir}/img/dog-${src}.svg`;
    } else if (tab === 'tab-content-breeds') {
      $('.lav-how__image img').src = `${exp.dir}/img/dog-weight.svg`;
    }
  }

  function handleColors(el) {
    const colors = {
      black: '#1F2125',
      grey: '#938F99',
      pink: '#CF9996',
      brown: '#B97553',
      'pine-green': '#011F20',
      maroon: '#40161B',
      red: '#681414',
      lilac: '#C0A9D5',
      teal: '#688F8B',
      green: '#AEA78D',
      'pastel-icing':
        'linear-gradient(180deg, #D77DC9 0%, #FFB6AC 50%, #AEDBFC 100%)',
      'snow-cone':
        'linear-gradient(180deg, #A99EE9 0%, #FE376F 50%, #738DE6 100%)',
      kaleidoscope:
        'linear-gradient(180deg, #6566B3 0%, #F095A5 30.21%, #FFC0A6 66.67%, #5AA2B6 100%)',
      '90s-retro':
        'linear-gradient(180deg, #C0EAFC 29.69%, #3D2777 59.90%, #E9B6E5 100%)',
      'lime-wave':
        'linear-gradient(180deg, #4E52AE 0%, #7698C8 37.58%, #95E58C 100%)',
      'purple-lavender': 'linear-gradient(180deg, #884DAF 0%, #879CD9 100%)',
      'red-&-black': 'linear-gradient(180deg, #E14365 0%, #141921 100%)',
      chestnut: 'linear-gradient(180deg, #C68D99 0%, #091019 100%)',
      'ice-blue':
        'linear-gradient(180deg, #7E8DA1 0%, #A7B6C7 50.52%, #416C88 100%)',
      'tropical-storm': 'linear-gradient(180deg, #C3C58B 0%, #ACE8F3 100%)',
      'pink-purple':
        'linear-gradient(180deg, #E4D3CD 0%, #EEC3B9 49.48%, #A5A1D9 100%)',
      'navy-turquoise-pink':
        'linear-gradient(180deg, #2F70B3 0%, #FBCDCD 49.48%, #71C7C1 100%)',
      'black-green-pink':
        'linear-gradient(180deg, #27212A 0%, #FB4D8A 49.48%, #019365 100%)',
      'cotton-candy':
        'linear-gradient(180deg, #A9CFE4 0%, #E6D4EA 49.48%, #EFCFC5 100%)',
      'purple-green-yellow':
        'linear-gradient(180deg, #BBB7DD 0%, #F7E6D3 49.48%, #BDE7D5 100%)',
      'yellow-blue-pink':
        'linear-gradient(180deg, #96DAE9 0%, #FDECCD 49.48%, #FFC6E5 100%)',
      'multi-plaid-teal':
        'linear-gradient(180deg, #2A4B60 0%, #E5DFBF 25%, #934E4F 47.92%, #22686E 75.52%, #DCA389 100%)',
      'multi-plaid-purple':
        'linear-gradient(180deg, #4A4381 0%, #A8A5CA 25%, #E27FBE 47.92%, #B16460 75.52%, #5B5D95 100%)',
      'green-&-red-plaid': 'linear-gradient(180deg, #045F57 0%, #DC3132 100%)',
    };

    const labelEl = el.querySelector('label');

    const label = el
      .querySelector('label')
      .innerText.trim()
      .toLowerCase()
      .replaceAll(' ', '-');

    if (colors[label]) {
      labelEl.classList.add(`lav-colors__item`);
      labelEl.style.background = colors[label];
    }

    console.log('labelColor', label);
  }

  // *** Utils *** //

  if (exp.observer.intersection) {
    initIntersection(async (el) => {
      if (!el.classList.contains('in-view')) {
        // console.log('intersactin', el);
      }

      if (await isElementInViewport(el)) {
        if (el.classList.contains('lav-colors')) {
          el.classList.add('in-view');

          pushDataLayer(
            'exp_new_info_pdp_v_color',
            'Color section',
            'Visibility',
            'Color'
          );
        }

        if (el.classList.contains('lav-size')) {
          el.classList.add('in-view');

          pushDataLayer(
            'exp_new_info_pdp_v_sguide',
            'Size',
            'Visibility',
            'Size guide'
          );
        }

        if (el.classList.contains('lav-note__plate')) {
          if (
            document.querySelector('.lav-modal__guide.active') &&
            !el.classList.contains('in-view-popup')
          ) {
            el.classList.add('in-view-popup');
            pushDataLayer(
              'exp_new_info_pdp_pp_30',
              '30-day free return',
              'Visibility',
              'Pop up Size charts'
            );
          } else if (!el.classList.contains('in-view-normal')) {
            el.classList.add('in-view-normal');
            pushDataLayer(
              'exp_new_info_pdp_v_30',
              '30-day free return',
              'Visibility',
              'Size chart'
            );
          }

          if (
            el.classList.contains('in-view-normal') &&
            el.classList.contains('in-view-popup')
          ) {
            el.classList.add('in-view');
          }
        }

        if (el.classList.contains('lav-contact__btn')) {
          el.classList.add('in-view');

          pushDataLayer(
            'exp_new_info_pdp_pp_v_chat',
            'Chat with a specialist',
            'Visibility',
            'Pop up Size charts'
          );
        }

        if (el.classList.contains('lav-delivery')) {
          el.classList.add('in-view');

          pushDataLayer(
            'exp_new_info_pdp_v_del',
            'Delivery',
            'Visibility',
            'Ship to'
          );
        }

        if (el.classList.contains('lav-delivery__item')) {
          el.classList.add('in-view');

          pushDataLayer(
            'exp_new_info_pdp_pp_v_ret',
            'Return policy',
            'Visibility',
            'Ship to'
          );
        }

        if (el.classList.contains('lav-modal__return')) {
          el.classList.add('in-view');

          pushDataLayer(
            'exp_new_info_pdp_pp_v_30',
            'Pop up 30-day free return & exchange',
            'Visibility',
            '30-day free return & exchange'
          );
        }

        if (el.classList.contains('lav-benefits')) {
          el.classList.add('in-view');

          pushDataLayer(
            'exp_new_info_pdp_v_ainfo',
            'Aadditional information',
            'Visibility',
            'additional information'
          );
        }

        if (
          el.dataset.sectionType === 'product-size-guide' &&
          !$('.to-add-back')
        ) {
          pushDataLayer(
            'exp_new_info_pdp_v_schart',
            'Size charts table',
            'Visibility',
            'Size chart'
          );

          el.classList.add('in-view');
        }
      }
    });
  }

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

  async function isElementInViewport(el, timeout = 3) {
    if (el.classList.contains('in-view')) return false;
    await new Promise((r) => setTimeout(r, timeout * 1000));
    if (el.classList.contains('in-view')) return false;

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
            <div class='lav-modal__inner lav-modal__return lav-observe'>
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
              <div class="lav-modal__text">
                <p>Every product that Spark Paws creates undergoes a <strong>rigorous material selection process,</strong> along with multiple rounds of sampling and prototyping, ensuring the <strong>final product and its sizing are perfected for you and your dog.</strong></p>
                <p>Indulge your furry friend in unparalleled comfort and style with our premium quality dog apparel, walk sets, and other products. Meticulously crafted from soft, durable materials, they <strong>guarantee a cozy fit for endless play and picture-perfect moments.</strong></p>
              </div>
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
              <div class='lav-how'>
                <div class='lav-how__title'>How to Measure</div>
                <div class='lav-how__image'>
                  <img src='' />
                </div>
                <div class='lav-how__link'>
                  <span class="lav-link lav-link-measure">WATCH VIDEO ON HOW TO MEASURE</span>
                  <img src="${exp.dir}/img/icon-play.svg" >
                </div>
              </div>

              <div class='lav-contact'>
                <div class='lav-contact__caption'>Are you still uncertain about the size?</div>
                <div class='lav-contact__btn lav-observe'>
                  <span class='lav-desk'>Contact us</span>
                  <span class='lav-mob'>CHAT WITH A SPECIALIST</span>
                </div>
              </div>

              <div class='lav-modal__close'>
                <img src="${exp.dir}/img/icon-close.svg" />
              </div>
            </div>
          </div>
        `;

    document.body.insertAdjacentHTML('beforeend', modalEl);

    if ($('.tabs__button.is-active')) {
      handleImageForPopUp($('.tabs__button.is-active').dataset.tab);
    }

    if ($('.measurements__cell-link')) {
      $('.lav-how__link').addEventListener('click', function () {
        closeModal();
        pushDataLayer(
          'exp_new_info_pdp_pp_wvideo',
          'Watch video on how to measure',
          'Button',
          'Pop up Size charts'
        );
        $('.measurements__cell-link')?.click();
      });
    } else {
      $('.lav-how__link').remove();
    }

    $('.lav-contact__btn').addEventListener('click', async function () {
      pushDataLayer(
        'exp_new_info_pdp_pp_chat',
        'Chat with a specialist',
        'Button',
        'Pop up Size charts'
      );

      if ('.olark-launch-button') {
        $('.olark-launch-button')?.click();
      } else {
        const chat = await window.GorgiasChat.init();

        chat.open();
      }
    });

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
        if (el.classList.contains('lav-delivery__link')) {
          pushDataLayer(
            'exp_new_info_pdp_lm_ret',
            'Learn more',
            'Button',
            'Ship to - Return policy'
          );
        }

        if (
          el.classList.contains('lav-note__link') &&
          !document.querySelector('.lav-modal__guide.active')
        ) {
          pushDataLayer(
            'exp_new_info_pdp_lm_size',
            'Learn more',
            'Button',
            'Size chart'
          );
        }
        openModal('return');
      });
    }

    for (let el of $$('.lav-trigger-retention')) {
      el.addEventListener('click', function () {
        pushDataLayer(
          'exp_new_info_pdp_lm_col',
          'Learn more',
          'Button',
          'Color retention materials'
        );

        openModal('retention');

        pushDataLayer(
          'exp_new_info_pdp_pp_v_col',
          'Pop up Color retention materials',
          'Visibility',
          'Color retention materials'
        );
      });
    }

    for (let el of $$('.lav-trigger-fit')) {
      el.addEventListener('click', function () {
        pushDataLayer(
          'exp_new_info_pdp_lm_fit',
          'Learn more',
          'Button',
          'Fit tested on over 100000 dogs'
        );

        openModal('fit');

        pushDataLayer(
          'exp_new_info_pdp_pp_v_fit',
          'Pop up Fit tested on over 100000 dogs',
          'Visibility',
          'Fit tested on over 100000 dogs'
        );
      });
    }

    for (let el of $$('.lav-trigger-premium')) {
      el.addEventListener('click', function () {
        pushDataLayer(
          'exp_new_info_pdp_lm_prem',
          'Learn more',
          'Button',
          'Premium quality materials'
        );

        openModal('premium');

        pushDataLayer(
          'exp_new_info_pdp_pp_v_prem',
          'Pop up Premium quality materials',
          'Visibility',
          'Premium quality materials'
        );
      });
    }

    for (let el of $$('.lav-trigger-delivery')) {
      el.addEventListener('click', function () {
        pushDataLayer(
          'exp_new_info_pdp_lm_del',
          'Learn more',
          'Button',
          'Ship to - Delivery'
        );
        pushDataLayer(
          'exp_new_info_pdp_pp_v_ship',
          'Pop up Shipping Info',
          'Visibility',
          'Shipping Info'
        );
        openModal('delivery');
      });
    }

    document.addEventListener('click', function (e) {
      if (e.target.closest('.lav-trigger-guide')) {
        pushDataLayer(
          'exp_new_info_pdp_b_sguide',
          'Size',
          'Button',
          'Size guide'
        );

        pushDataLayer(
          'exp_new_info_pdp_pp_v_meas',
          'Pop up Size charts',
          'Visibility',
          'Pop up Size charts - Size by Measurements'
        );

        $(
          '[data-section-type="product-size-guide"]'
        ).nextElementSibling.classList.add('to-add-back');

        $('.lav-modal__guide').insertAdjacentElement(
          'afterbegin',
          $('[data-section-type="product-size-guide"]')
        );

        openModal('guide');
      }
    });
    // for (let el of $$('.lav-trigger-guide')) {
    //   el.addEventListener('click', function () {});
    // }
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
    if ($('.lav-modal__delivery.active')) {
      pushDataLayer(
        'exp_new_info_pdp_pp_cl_ship',
        'Close',
        'Button',
        'Pop up Shipping Info'
      );
    }

    if ($('.lav-modal__return.active')) {
      pushDataLayer(
        'exp_new_info_pdp_pp_cl_30',
        'Close',
        'Button',
        'Pop up 30-day free return & exchange'
      );
    }

    if ($('.lav-modal__premium.active')) {
      pushDataLayer(
        'exp_new_info_pdp_pp_cl_prem',
        'Close',
        'Button',
        'Pop up Premium quality materials'
      );
    }

    if ($('.lav-modal__fit.active')) {
      pushDataLayer(
        'exp_new_info_pdp_pp_cl_fit',
        'Close',
        'Button',
        'Pop up Fit tested on over 100000 dogs'
      );
    }

    if ($('.lav-modal__retention.active')) {
      pushDataLayer(
        'exp_new_info_pdp_pp_cl_col',
        'Close',
        'Button',
        'Pop up Color retention materials'
      );
    }

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
