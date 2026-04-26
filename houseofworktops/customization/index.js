(function () {
  console.debug('*** Experiment started ***')

  // Config for Experiment
  const config = {
    // dir: 'http://127.0.0.1:5500/houseofworktops/sizeSelector',
    dir: 'https://flopsi69.github.io/crs/houseofworktops/customization',
    clarity: ['set', 'exp_custom_size_flow', 'variant_1'],
    debug: true,
    isDisableLayer: false,
    atcConfig: {
      price: '',
      oldPrice: '', 
      products: ''
    }
  }

  const targetUrls = [
    '/beige-gold-compact',
    '/bella-bianche-compact',
    '/lucida-white-compact',
    '/pure-black-compact',
    '/crystal-spark-compact',
    '/magma-rodolit-compact',
    '/black-gold-compact',
    '/cloudy-cement-compact-laminate',
    '/carrera-marble-compact-',
    '/carrara-solid-surface',
    '/oak-worktop',
    '/walnut-worktop',
    '/prime-oak-worktop',
    '/full-stave-deluxe-oak-worktop',
    '/full-stave-deluxe-rustic-oak-worktop',
    '/prime-beech-worktop',
    '/iroko-worktop',
    '/black-oak-worktop'
  ]

  const upsellConfig = {
    'Compact Laminate Installation Kit': config.dir + '/img/laminate.jpg',
    'Spectra Seal 290ml - Colour Matched': config.dir + '/img/spectra.jpg',
    'Upstand - 3M x 95mm x 12mm': config.dir + '/img/upstand.jpg',
    'Upstand 3M x 100mm x 12mm': config.dir + '/img/upstand.jpg',
    'Upstand - 3M x 80mm x 20mm': config.dir + '/img/upstand.jpg',
    'Upstand - 4.2M x 95mm x 12mm': config.dir + '/img/upstand.jpg',
    'Splashback - 3M x 600 x 6mm': config.dir + '/img/splashback600.jpg',
    'Splashback - 3M x 600mm x 6mm': config.dir + '/img/splashback600.jpg',
    'Splashback - 3M x 600 x 12mm': config.dir + '/img/splashback600.jpg',
    'Splashback - 3M x 600mm x 12mm': config.dir + '/img/splashback600.jpg',
    'Splashback - 3M x 1300 x 2mm': config.dir + '/img/splashback1300.jpg',
    'Splashback - 3M x 1300mm x 2mm': config.dir + '/img/splashback1300.jpg',
    'Splashback - 3M x 645 x 2mm': config.dir + '/img/splashback600.jpg',
    'Splashback - 3M x 645mm x 2mm': config.dir + '/img/splashback600.jpg',
    'Plinth - 3M x 150mm x 12mm': config.dir + '/img/plinth.jpg',
    'Plinth - 3M x 150mm x 20mm': config.dir + '/img/plinth.jpg',
  }


  // const orig = console.log
  // console.log = function (...args) {
  //   orig.apply(console, ['Debug:', ...args])
  // }

  // Styles for Experiment
  const styles = /* css */ `
    #CookiebotWidget:not(.CookiebotWidget-inactive) {
      bottom: 60px!important;
    }
    .lav-btn-accessories {
      border-radius: 4px;
      background: #0E6857;
      height: 70px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #FFF;
      text-align: center;
      font-size: 24px;
      font-weight: 700;
      line-height: 36px;
      cursor: pointer;
      transition: .2s;
      margin-bottom: 8px;
      margin-top: -8px;
    }
    @media(hover:hover) {
      .lav-btn-accessories:hover {
        background-color: #0b4d42;
      }
    }
    .lavm-header__close {
      position: absolute;
      pointer-events: auto;
      z-index: 99999999999999;
      cursor: pointer;
      padding: 6px;
      right: -53px;
      top: -3px;
      transition: .3s;
    }
    .lavm-header__close-desk {
      width: 24px;
    }
    .lavm-header__close-mob {
      width: 31px;
      display: none;
    }
    @media(hover:hover) {
      .lavm-header__close:hover {
        opacity: .85;
      }
    }
    .lavm-header {
      border-bottom: 1px solid #DEE2E6!important;
      background: #F8F9FA;
      padding: 11px 22px;
    }
    .lavm-tabs {
      display: flex;
      height: 78px;
      flex-shrink: 0;
      overflow: auto;
    }

    .lavm-banner {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      align-self: flex-start;
      white-space: nowrap;
      gap: 8px;
      text-decoration: none;
      margin-left: auto;
      margin-top: 8px;
    }

    .lavm-banner svg {
      flex-shrink: 0;
    }

    .lavm-banner-text {
      line-height: 20px;
      font-size: 14px;
      font-weight: 500;
      color: #212529;
    }

    .lavm-banner-link {
      color: #1f8964;
      text-decoration: underline;
      text-underline-offset: 2px;
      cursor: pointer;
      white-space: nowrap;
    }

    .lavm-banner-link svg {
      vertical-align: sub;
      margin-left: 6px;
    }

    .lavm-tab {
      position: relative;
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      padding: 16px 20px;
      border-bottom: 1px solid #D3E9DF;
      cursor: default;
      font-size: 20px;
      line-height: 28px;
      color: #495057;
      white-space: nowrap;
      font-weight: 500;
    }
    .lavm-tab.done {
      color: #1f8964;
      gap: 8px;
      cursor: pointer;
    }

    @media(hover:hover) {
      .lavm-tab.done:hover {
        opacity: .85;
      }
    }

    .lavm-tab.active {
      background: #D3E9DF;
      color: #1f8964;
    }

    .lavm-tab.active + .lavm-tab .lavm-tab-divider {
      fill: #D3E9DF;
    }
    .lavm-tab.active .lavm-tab-divider {
      fill: white;
    }

    .lavm-tab-divider {
      position: absolute;
      fill: transparent;
      left: -1px;
    }
    .lavm-tab-divider-prev {
      left: -1px;
    }
    .lavm-tab-divider-next {
      right: 0;
    }

    .lavm-tab-num {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      line-height: 1;
    }
    .lavm-header .filter-header {
      display: none!important;
    }
    .lavm-header>.text-center {
      display: none!important;
    }
    .lavm-filters {
      flex-grow: 1;
    }
    .lavm-filters__item {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .lavm-filters__item + .lavm-filters__item {
      margin-top: 12px;
    }
    .lavm-filters__info {
      line-height: 1.3;
      white-space: nowrap;
      width: 68px;
    }
    .lavm-filters__caption {
      color: #8F8F8F;
      font-size: 12px;
      font-weight: 500;
    }
    .lavm-filters__title {
      font-size: 14px;
      font-weight: 500;
    }
    .lavm-filters__list {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    .lavm-filters__option {
      border-radius: 4px;
      border: 1px solid #C2C7CB;
      background: #FFF;
      padding: 0 16px;
      color: #212529;
      text-align: center;
      font-size: 13px;
      height: 34px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      cursor: pointer;
      transition: background .2s, color .2s, border-color .2s;
    }
    .lavm-filters__option.disabled {
      color: #adb5bd !important;
      pointer-events: none;
      background-color: #dee2e6 !important;
    }
    .lavm-filters__option.active {
      background-color: #007bff;
      border-color: #007bff;
      color: #fff;
      padding: 0 12px;
    }
    @media(hover:hover) {
      .lavm-filters__option:not(.active):hover {
        background-color: rgba(0, 123, 255, .1);
      }
    }

    .lav-out-of-stock {
      display: flex;
      align-items: center;
      background: #f34545;
      height: 46px;
      border-radius: 4px;
      padding: 4px 10px;
      line-height: 1.4;
      color: #fff;
      font-size: 1rem;
      font-weight: 500;
      text-align: center;
      justify-content: center;
    }
    #select-size-model {
      // z-index: 10459999999 !important;
    }
    #select-size-model .modal-dialog {
      max-width: 952px;
    }
    #select-size-model .modal-content {
      border-radius: 12px;
    }
    #select-size-model .modal-body > .container-fluid .border-bottom {
      display: none!important;
    }
    #select-size-model .select-size-row {
      padding: 18px!important;
      margin: 0 -16px;
      flex-wrap: nowrap;
      min-height: 86px;
    }
    #select-size-model .select-size-row[data-type="accessory"] {
      align-items: center;
      flex-wrap: nowrap;
    }
    #select-size-model .select-size-row[data-type="accessory"] .worktop-price {
      flex: 1;
      white-space: nowrap;
    }
    #select-size-model .select-size-row[data-type="accessory"] .checkbox-check > .d-flex {
      display: block !important;
    }
    #select-size-model .select-size-row:not(.selected):hover {
      background: #F6F9F8;
      border-color: transparent;
    }
    #select-size-model .select-size-row>[class*="col-"] {
      padding: 0!important;
      margin: 0;
      flex: auto;
      max-width: none;
    }
    #select-size-model .select-size-row .badge.bg-danger {
      display: none;
    }
    #select-size-model .select-size-row .check {
      display: none;
    }
    #select-size-model .select-size-row .check + .h6 {
      font-size: 20px;
      letter-spacing: 1px;
      line-height: 24px;
      white-space: nowrap;
    }
    #select-size-model .select-size-row[data-type="accessory"] .check + .h6 {
      margin-right: 0!important;
      white-space: normal;
    }
    #select-size-model .select-size-row .select-size-counter {
      width: 144px;
      flex-shrink: 0;
    }
    #select-size-model .select-size-row .checkbox-check .small {
      font-size: 14px!important;
      text-underline-position: from-font;
      // opacity: 0!important;
      // pointer-events: none!important;
      white-space: nowrap;
      transition: .3s;
      cursor: pointer;
    }
    #select-size-model .select-size-row.selected .checkbox-check .small {
      opacity: 1!important;
      pointer-events: auto!important;
    }
    @media(hover:hover) {
      #select-size-model .select-size-row.selected .checkbox-check .small:hover {
        opacity: .7!important;
      }
    }
    #select-size-model .select-size-row .price-new {
      font-weight: 500;
    }
    #select-size-model .select-size-row .price-old {
      font-weight: 500;
    }
    #select-size-model .select-size-row .worktop-price {
      text-align: right;
      margin-right: 12px;
    }
    #select-size-model .select-size-row .add-button {
      padding-top: 10px;
      padding-bottom: 10px;
    }
    #select-size-model .select-size-row .add-button .h6 {
      font-weight: 500;
    }
    #select-size-model .select-size-row.selected-row-style {
      border: 1px solid #99CFBC !important;
      background: #E1F7EF;
    }
    #select-size-model .select-size-row .select-size-popup {
      gap: 6px;
      background: none!important;
    }
    #select-size-model .select-size-row .select-size-popup .btn {
      border-radius: 4px;
      border: 1px solid #1F8964;
      background: #1F8964;
      flex: 1;
    }
    #select-size-model .select-size-row .select-size-popup input {
      border-radius: 4px;
      border: 1px solid #1F8964 !important;
      background: #1F8964 !important;
      flex: 1.6;
      font-size: 18px;
      font-weight: 500;
    }
    #select-size-model .select-size-row .select-size-popup .form-control {
      height: 46px;
    }
    #select-size-model .select-size-row .collapse {
      display: none!important;
    }
    #select-size-model #mobileFilters + .container-fluid {
      display: none;
    }
    #select-size-model #product-options-modal {
      padding-top: 12px!important;
      padding-bottom: 12px!important;
    }

    #select-size-model .modal-footer > * {
      margin: 0;
    }
    #select-size-model .modal-footer {
      box-shadow: 0 -4px 6px 0 rgba(0, 0, 0, 0.08);
      padding: 18px 20px;
      gap: 16px;
    }
    #select-size-model .modal-footer > .error-msg {
      display: none!important;
    }
    #select-size-model .modal-footer > .mb-3 {
      display: none;
    }
    .lavm-back {
      display: none;
      align-items: center;
      gap: 10px;
      background: none;
      border: none;
      cursor: pointer;
      font-size: 18px;
      font-weight: 600;
      color: #1f8964;
      padding: 0;
      flex-shrink: 0;
    }
    .lavm-back:hover {
      text-decoration: underline;
    }
    .lavm-product {
      display: flex;
      align-items: center;
      gap: 14px;
      margin: 0;
    }
    .lavm-product-img {
      width: 70px;
      height: 70px;
      border-radius: 4px;
      object-fit: cover;
      flex-shrink: 0;
    }
    .lavm-product-name {
      font-size: 18px;
      font-weight: 500;
      color: #212529;
    }
    .lavm-product-caption {
      display: none;
      margin-top: 4px;
      color: #1F8964;
      font-size: 14px;
      font-weight: 600;
      line-height: 20px;
    }

    .lavm-btn-continue {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      border: 1px solid #1F8964;
      background: #1F8964;
      height: 70px;
      color: #FFF;
      font-size: 24px;
      font-weight: 700;
      line-height: 36px;
      max-width: 320px;
      width: 100%;
      cursor: pointer;
      transition: .3s;
      margin: 0;
    }
    .lavm-btn-continue.disabled {
      filter: grayscale(100%);
      opacity: 0.8;
      pointer-events: none;
    }
    .lavm-btn-continue.loading {
      position: relative;
      color: transparent!important;
      pointer-events: none;
      filter: grayscale(100%);
    }
    .lavm-btn-continue.loading::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 24px;
      height: 24px;
      border: 3px solid #fff;
      border-top-color: transparent;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }
    @keyframes spin {
      to {
        transform: translate(-50%, -50%) rotate(360deg);
      }
    }
    @media(hover:hover) {
      .lavm-btn-continue:hover {
        color: #fff;
        background-color: #186a4d;
        border-color: #165f46;
      }
    }

    .lavm-summary {
      text-align: right;
      margin-left: auto!important;
    }
    .lavm-summary__total {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 8px;
    }
    .lavm-summary__caption {
      color: #6C757D;
      font-size: 14px;
      font-weight: 400;
      line-height: 13.75px;
    }
    .lavm-summary__price {
      color: #212529;
      font-size: 24px;
      font-weight: 800;
      line-height: 30px;
    }
    .lavm-summary__price-old {
      color: #212529;
      font-size: 24px;
      font-weight: 500;
      line-height: 30px;
      text-decoration-line: line-through;
    }
    .lavm-summary__selected {
      color: #1F8964;
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
      margin-top: 4px;
    }
    .lavm-summary__count {
      display: inline;
    }
    .lavm-summary__oiling {
      display: none;
    }

    .lavm-s3 {
      display: none;
      padding: 20px;
    }
    .lavm-radio {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      border: 1.5px solid #adb5bd;
      background: #fff;
      flex-shrink: 0;
      transition: border-color 0.15s, border-width 0.15s;
    }

    .lavm-plan-card.selected .lavm-radio {
      border-width: 8px;
      border-color: #1f8964;
    }
    .lavm-s3-heading {
      font-size: 16px;
      font-weight: 600;
      color: #212529;
      line-height: 26px;
      text-align: center;
    }

    .lavm-s3-options {
      display: flex;
      gap: 18px;
      align-items: stretch;
      margin-top: 16px;
    }

    .lavm-oiling-card {
      flex: 1;
      min-width: 0;
      border: 2px solid #dee2e6;
      border-radius: 14px;
      padding: 18px;
      cursor: pointer;
      transition: border-color 0.15s, box-shadow 0.15s;
      display: flex;
      flex-direction: column;
      gap: 16px;
      background: #fff;
    }

    .lavm-oiling-card.selected {
      border-color: #1f8964;
      box-shadow: 0 0 0 5px #f1f8f5;
    }

    .lavm-oiling-card-header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 16px;
    }

    .lavm-oiling-card-header .lavm-radio {
      margin-top: 3px;
    }

    .lavm-oiling-title {
      font-size: 18px;
      font-weight: 700;
      color: #212529;
      line-height: 28px;
    }

    .lavm-oiling-price {
      font-size: 24px;
      font-weight: 800;
      color: #212529;
      line-height: 32px;
    }

    .lavm-oiling-desc {
      font-size: 14px;
      color: #495057;
      line-height: 22px;
      flex: 1;
    }

    .lavm-oiling-badges {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .lavm-oiling-badge {
      display: inline-flex;
      align-items: center;
      padding: 2px 8px;
      border-radius: 100px;
      font-size: 12px;
      font-weight: 600;
      line-height: 16px;
      border: 1px solid;
    }

    .lavm-oiling-badge-green  {
      background: #e6f4f0;
      border-color: #c6e8dc;
      color: #1f8964;
    }
    .lavm-oiling-badge-yellow {
      background: #fff4e5;
      border-color: #fde68a;
      color: #d97706;
    }
    .lavm-oiling-badge-red    {
      background: #fee2e2;
      border-color: #fecaca;
      color: #dc2626;
    }

    #select-size-model[data-step="2"] .lavm-back {
      display: flex;
    }

    #select-size-model[data-step="2"] .lavm-summary__oiling {
      display: inline;
    }

    #select-size-model[data-step="2"] .lavm-s3 {
      display: block;
    }
    #select-size-model[data-step="2"] #mobileFilters, #select-size-model[data-type="accessory"] #mobileFilters {
      display: none!important;
    }
    #select-size-model[data-step="2"] #product-options-modal {
      display: none;
    }
    #select-size-model[data-step="2"] .lavm-header, #select-size-model[data-type="accessory"] .lavm-header {
      display: none!important;
    }
    #select-size-model[data-step="2"] .lavm-product {
      display: none;
    }
    #select-size-model[data-type="accessory"] .lavm-tab-num {
      display: none;
    }
    #select-size-model[data-type="accessory"] .lavm-tab[data-step="2"] {
      display: none;
    }
    #select-size-model[data-type="accessory"] .lavm-summary__selected {
      display: none;
    }
    #select-size-model[data-type="accessory"] .lavm-product-caption {
      display: block;
    }

    .lav-accessory__image {
      border-radius: 4px;
      margin: 0;
      width: 70px;
      height: 70px;
      object-fit: cover;
      flex-shrink: 0;
      margin-right: 24px;
    }
    .lav-accessory__caption {
      color: #6C757D;
      font-size: 14px;
      font-weight: 400;
      line-height: 22px;
      margin-top: 4px;
    }
    .lav-sticky {
      position: fixed;
      z-index: 101;
      bottom: 0;
      left: 0;
      right: 0;
      background: #fff;
      transition: .3s;
      transform: translateY(100%);
      display: none;
    }
    .lav-sticky.active {
      transform: translateY(0);
    }
    .select-size-mobile.fixed-bottom {
      display: none!important;
    }
    .lav-sticky__upsell, .lav-sticky__size {
      flex: 1;
      min-height: 52px;
      display: flex;
      flex-flow: column;
      align-items: flex-start;
      gap: 2px;
      padding: 5px 22px;
      justify-content: center;
    }
    .lav-sticky__size {
      background: #1F8964;
    }
    .lav-sticky--single .lav-sticky__size {
      align-items: center;
    }
    .lav-sticky--single .lav-sticky__size .lav-sticky__step {
      display: none;
    }
    .lav-sticky__upsell {
      background: #0E6857;
    }
    .lav-sticky__step {
      color: rgba(255, 255, 255, 0.71);
      font-size: 11px;
      font-weight: 400;
      line-height: 11px;
    }
    .lav-sticky__text {
      color: #FFF;
      font-size: 14px;
      font-weight: 700;
      line-height: 21px;
    }
    

    @media(max-width: 992px) {
      #select-size-model .modal-content {
        margin-top: 40px;
      }
      .lavm-header__close-mob {
        display: block;
      }
      .lavm-header__close-desk {
        display: none;
      }
      .lavm-header__close {
        right: 0;
        top: -7px;
      }
      #select-size-model .select-size-row .checkbox-check .small {
        opacity: 0!important;
        pointer-events: none!important;
      }
      .lav-sticky {
        display: flex;
      }
      #select-size-model #product-options-modal > .container-fluid {
        padding-left: 6px;
        padding-right: 6px;
      }
      #select-size-model #product-options-modal > .container-fluid > .row {
        margin-left: -6px;
        margin-right: -6px;
      }
      #select-size-model #product-options-modal > .container-fluid > .row > .col {
        padding-left: 6px;
        padding-right: 6px;
      }
      .lav-btn-accessories {
        font-size: 20px;
        height: 64px;
      }
      #select-size-model[data-step="2"] .lavm-back {
        display: none;
      }
      #select-size-model {
        padding-right: 0!important;
      }
      .lavm-s3-heading br {
        display: none;
      }
      .lavm-s3-heading {
        font-size: 14px;
      }
      .lavm-s3-options {
        gap: 8px;
        flex-flow: column;
      }
      .lavm-oiling-desc {
        line-height: 24px;
      }
      .lavm-footer-back  {
        display: none;
      }
      .lavm-tabs {
        height: 56px;
      }
      .lavm-tab {
        font-size: 14px;
        line-height: 24px;
        padding: 10px 4px 10px 5px;
        gap: 4px;
      }
      .lavm-tab-divider {
        height: 56px;
        left: -4px;
      }
      .lavm-tab + .lavm-tab {
        padding-left: 25px;
      }
      .lavm-tab-num svg {
        width: 16px;
        line-height: 16px;
      }
      .lavm-tab.done {
        gap: 4px;
      }
      .lavm-tab[data-step="3"] {
        padding-right: 12px;
      }
      .lavm-s3 {
        padding: 16px 14px 20px;
      }
      .lavm-product {
        display: none;
      }
      .lavm-summary__caption {
        display: none;
      }
      .lavm-summary__selected {
        font-size: 12px;
        line-height: 18px;
        margin-top: 2px;
      }
      .lavm-summary__total {
        gap: 6px;
      }
      .lavm-summary__price {
        font-size: 18px;
        line-height: 24px;
      }
      .lavm-summary__price-old {
        font-size: 16px;
        line-height: 24px;
      }
      .lavm-btn-continue {
        height: 56px;
        font-size: 16px;
        font-weight: 500;
        line-height: 36px;
        width: auto;
        padding-left: 16px;
        padding-right: 16px;
        white-space: nowrap;
      }
      #select-size-model .modal-footer {
        flex-wrap: nowrap!important;
        gap: 12px;
        padding: 14px;
      }
      #select-size-model .select-size-row {
        position: relative;
        padding: 16px 8px!important;
        flex-wrap: wrap;
        min-height: 110px;
        justify-content: space-between;
      }
      #select-size-model .select-size-row .check + .h6 {
        font-size: 15px!important;
        letter-spacing: 0.4px;
        margin-right: 0!important;
        white-space: normal;
      }
      #select-size-model .select-size-row>.product-option-name {
        max-width: 53%;
        align-self: flex-start!important;
      }
      #select-size-model .select-size-row[data-type="accessory"]>.product-option-name {
        flex: 1;
        max-width: 33%;
      }
      #select-size-model .select-size-row>.worktop-price {
        display: flex;
        justify-content: flex-end;
        gap: 7px;
        margin-right: 0!important;
        max-width: 45%;
        align-self: flex-start !important;
      }
      #select-size-model .select-size-row .price-new {
        margin-right: 0!important;
      }
      #select-size-model .select-size-row .checkbox-check .stock-badge-container {
        display: none;
      }
      #select-size-model .select-size-row .select-size-counter {
        position: absolute;
        right: 8px;
        top: 46px;
        max-width: 131px;
        width: 100%;
      }
      #select-size-model .select-size-row .select-size-popup input {
        flex: 1.9;
      }
      #select-size-model .select-size-row .checkbox-check .small {
        margin-top: 20px;
        margin-left: 0!important;
      }
      .lavm-banner {
        text-align: right;
        margin-top: 0;
      }
      .lavm-header {
        padding: 12px;
        border-bottom: none!important;
        background: transparent;
      }
      .lavm-banner-link svg {
        display: none;
      }
      .lavm-banner > svg {
        display: none;
      }
      .lavm-banner-text {
        font-size: 12px;
      }
      .lavm-filters__info {
        display: none;
      }
      .lavm-filters__list {
        display: none;
      }
      .lavm-filters__item + .lavm-filters__item {
        margin-top: 0;
      }
      #mobileFilters {
        margin-top: 0!important;
      }
      #mobileFilters .card {
        border-radius: 4px!important;
        border: 1px solid #C2C7CB!important;
        background: #F8F9FA!important;
      }
      #mobileFilters .card-header {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        font-weight: 500;
      }
      #mobileFilters .card-header #mobileFilterCount.invisible {
        display: none;
        margin-left: 8px!important;
      }
      #mobileFilterCount {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #FFF;
        text-align: center;
        font-size: 12px;
        font-weight: 500;
        line-height: 1;
        border-radius: 111px;
        background: #007BFF;
        min-width: 20px;
        height: 20px;
      }
      #mobileFilters .card-header:after {
        margin-top: 0;
        margin-left: 16px;
      }
      #filter-collapse > .px-3 {
        padding: 10px 12px!important;
      }
      #filter-collapse > .px-3 > .d-flex {
        flex-flow: column-reverse;
        gap: 16px;
      }
      #filter-collapse > .px-3 > .text-center {
        display: none;
      }
      #filter-collapse > .px-3 > .d-flex > .mb-2 {
        margin-bottom: 0!important;
      }
      #filter-collapse > .px-3 > .d-flex > .mb-2 .font-weight-medium {
        font-size: 14px;
        font-weight: 400;
        line-height: 24px;
      }
      #filter-collapse > .px-3 > .d-flex > .mb-2 > .mb-2 {
        margin-bottom: 12px!important;
      }
      #filter-collapse .dimension-filter-btn {
        margin: 0!important;
      }
      #filter-collapse .dimension-filter-btn span {
        font-size: 13px;
        font-weight: 400;
      }
      #filter-collapse .filters {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }
      #filter-collapse {
        position: relative;
      }
      #resetFiltersMobile {
        position: absolute;
        right: 12px;
        top: 15px;
        color: #BB0A0D;
        font-size: 13px;
        line-height: 1;
      }
      #filter-collapse .dimension-filter-btn.active:after {
        content: '';
        width: 10px;
        height: 10px;
        background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none"><rect width="12.4775" height="1.38639" transform="matrix(0.692633 0.72129 -0.692633 0.72129 1.35767 0)" fill="white"/><rect width="12.4775" height="1.38639" transform="matrix(-0.692633 0.72129 -0.692633 -0.72129 9.60266 1)" fill="white"/></svg>') no-repeat center center;
        margin-left: 2px;
        display: inline-block;
      }
      .lav-accessory__image {
        margin-right: 12px;
      }
      .lav-accessory__caption {
        margin-top: 8px;
        color: rgba(0, 0, 0, 0.50);
        font-size: 12px;
        line-height: 14px;
      }
    }
  `

  const stylesEl = document.createElement('style')
  stylesEl.classList.add('exp-styles')
  stylesEl.innerHTML = styles

  // *** Logic *** //
  initExp()

  async function initExp() {
    await waitFor(() => document.head && document.body, false, { ms: 20 })
    if (location.href.includes('route=checkout/checkout')) {
      handleCheckoutImages();
      return;
    } else if (location.href.includes('route=checkout/cart')) {
      handleCheckoutCartImages();
      return;
    }

    const isValidProduct = targetUrls.some(targetUrl => {
      return location.href.includes(targetUrl)
    })

    if (!isValidProduct) {
      handleCartImages();
      return;
    }

    await waitFor(() => _$('#product-options-modal .select-size-row'), false, { ms: 20 })

    if (!_$('#product-options-modal .select-size-row')) return

    document.head.appendChild(stylesEl)

    console.debug('** InitExp **')

    if (!_$('#select-size')) return

    _$$('#select-size span').forEach(el => {
      el.innerText = 'Step1: Choose Worktop Size'
    })


    if (_$('#select-size')) {
      _$('#select-size').addEventListener('click', () => {
        if (!config.isDisableLayer) {
          pushDataLayer('exp_pdp_cta', _$('#select-size').innerText, 'click', 'Static');
        }
        resetModalSizeSelectorModal();
      });
      updateSizeSelectorModal();
      addNewButton();
      handleAtcImages();
      addSticky()
    }


    handleCartImages();

    return

    handleEssentials();
    // TODO ask about sticky and what it should do
    // TODO remove
    handleAtcModal()
  }

  function addNewButton() {
    const isUpsell = !!_$('#select-size-model .select-size-row[data-type="accessory"]')

    if (!isUpsell) return;

    _$('#select-size').insertAdjacentHTML('afterend', /* html */ `
      <div class="lav-btn-accessories">
        Step2: Choose Accessories
      </div>
    `)

    _$('.lav-btn-accessories').addEventListener('click', () => {
      pushDataLayer('exp_pdp_cta', _$('.lav-btn-accessories').innerText, 'click', 'Static');
      config.isDisableLayer = true;
      _$('#select-size').click();
      config.isDisableLayer = false;
      resetModalSizeSelectorModal(true);
    });
  }

  function resetModalSizeSelectorModal(isAccessory) {
    const modal = _$('#select-size-model')
    if (!modal) return

    if (isAccessory) {
      modal.setAttribute('data-type', 'accessory')
      _$('.nav-item [data-tab="accessory"]').click();
      _$('.lavm-tab[data-step="1"] .lavm-tab-label').innerText = 'Choose Accessories & Essentials'
    } else {
      modal.removeAttribute('data-type')
      _$('.lavm-tab[data-step="1"] .lavm-tab-label').innerText = 'Choose worktop size'
    }

    const isOiling = isEnableSecondStep()

    modal.removeAttribute('data-step')
    modal.querySelectorAll('.lavm-tab').forEach((tab, index) => {
      if (index === 0) {
        tab.classList.add('active')
        tab.classList.remove('done')
      } else {
        tab.classList.remove('active', 'done')
      }
    })

    if (_$('.lavm-summary__price-old')) {
      _$('.lavm-summary__price-old').innerText = '';
    }

    _$('.lavm-btn-continue').innerText = isOiling ? 'Continue' : 'Add to Basket';
    
    _$$('.lavm-filters__option').forEach(el => {
      el.classList.remove('active', 'disabled')
      _$('svg', el)?.remove()
    })
  }

  function updateSizeSelectorModal() {
    updateAccessoryOptions();
    updateOptionsUi()
    updateHeaders();
    updateFooter();
    updateFooterInfo();

    if (isEnableSecondStep()) {
      addSecondStep();
    }

    moveToStep(1);

    function updateAccessoryOptions() {
      const accessoryOptions = _$$('.select-size-row[data-type="accessory"]');

      if (!accessoryOptions.length) return;


      const isValidProduct = targetUrls.some(targetUrl => {
        return location.href.includes(targetUrl)
      });

      accessoryOptions.forEach(option => {
        const title = option.querySelector('.h6')?.textContent.trim() || '';
        const imageSrc = isValidProduct && upsellConfig[title] ? upsellConfig[title] : null;

        if (imageSrc) {
          _$('.product-option-name', option).insertAdjacentHTML('beforebegin', /* html */ `
          <img src="${imageSrc}" alt="${title}" class="lav-accessory__image">
        `)
        }

        if (imageSrc.includes('upstand.jpg') || imageSrc.includes('plinth') || imageSrc.includes('splashback')) {
          _$('.checkbox-check > .d-flex', option).insertAdjacentHTML('beforeend', /* html */ `
            <div class="lav-accessory__caption">
              Made from the same material as your worktop
            </div>
          `)
        }
      });
    }
    
    function updateHeaders() {
       const parentEl = _$('#select-size-model .modal-content > .d-flex')

      if (!parentEl) return

      const observer = new MutationObserver((mutationsList, observer) => {
        if (_$('#mobileFilterCount').innerText.includes('(')) {
          _$('#mobileFilterCount').innerText = _$('#mobileFilterCount').innerText.replace('(', '').replace(')', '');
        }
      });

      observer.observe(_$('#mobileFilterCount'), { attributes: true, childList: true, subtree: true });

      parentEl?.classList.add('lavm-header')
      _$('.d-none.d-md-block:not(.filter-header)', parentEl)?.classList.add('lavm-header__filters')

      _$('#select-size-model .modal-content').insertAdjacentHTML('beforebegin', /* html */ `
        <div class="lavm-header__close">
          <svg class="lavm-header__close-desk" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M14.7059 12.102L23.2249 20.621C23.6057 21.0017 23.796 21.4776 23.796 22.0487C23.796 22.5881 23.6057 23.0482 23.2249 23.4289C22.8442 23.8096 22.3683 24 21.7972 24C21.2578 24 20.7977 23.8096 20.417 23.4289L11.898 14.9099L3.37904 23.4289C2.9983 23.8096 2.52238 24 1.95128 24C1.4119 24 0.951842 23.8096 0.571105 23.4289C0.190368 23.0482 0 22.5881 0 22.0487C0 21.4776 0.190368 21.0017 0.571105 20.621L9.09008 12.102L0.571105 3.58307C0.253825 3.17061 0.111047 2.72642 0.142775 2.2505C0.174503 1.74285 0.364872 1.31452 0.71388 0.965515C1.09462 0.584779 1.52295 0.378547 1.99887 0.346819C2.50652 0.315091 2.96657 0.457868 3.37904 0.775148L11.898 9.2941L20.417 0.775148C20.6708 0.457868 20.9722 0.235692 21.3212 0.108781C21.6703 -0.0181312 22.0351 -0.0339936 22.4159 0.0611902C22.7966 0.156374 23.1139 0.346819 23.3677 0.632371C23.6533 0.886194 23.8436 1.20347 23.9388 1.58421C24.034 1.96495 24.0181 2.32982 23.8912 2.67882C23.7643 3.02783 23.5422 3.32925 23.2249 3.58307L14.7059 12.102Z" fill="white"/>
          </svg>
          <svg class="lavm-header__close-mob" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <g clip-path="url(#clip0_1786_1895)">
              <path d="M17.416 15.4683L21.712 19.6341C21.904 19.8203 22 20.053 22 20.3323C22 20.596 21.904 20.821 21.712 21.0072C21.52 21.1933 21.28 21.2864 20.992 21.2864C20.72 21.2864 20.488 21.1933 20.296 21.0072L16 16.8413L11.704 21.0072C11.512 21.1933 11.272 21.2864 10.984 21.2864C10.712 21.2864 10.48 21.1933 10.288 21.0072C10.096 20.821 10 20.596 10 20.3323C10 20.053 10.096 19.8203 10.288 19.6341L14.584 15.4683L10.288 11.3024C10.128 11.1007 10.056 10.8835 10.072 10.6508C10.088 10.4026 10.184 10.1931 10.36 10.0224C10.552 9.83625 10.768 9.7354 11.008 9.71989C11.264 9.70437 11.496 9.77419 11.704 9.92934L16 14.0952L20.296 9.92934C20.424 9.77419 20.576 9.66555 20.752 9.60349C20.928 9.54143 21.112 9.53367 21.304 9.58022C21.496 9.62676 21.656 9.71989 21.784 9.85953C21.928 9.98365 22.024 10.1388 22.072 10.325C22.12 10.5112 22.112 10.6896 22.048 10.8603C21.984 11.0309 21.872 11.1783 21.712 11.3024L17.416 15.4683Z" fill="white"/>
              <path d="M28 0.825684H4C2.067 0.825684 0.5 2.3452 0.5 4.21962V27.4923C0.5 29.3668 2.067 30.8863 4 30.8863H28C29.933 30.8863 31.5 29.3668 31.5 27.4923V4.21962C31.5 2.3452 29.933 0.825684 28 0.825684Z" stroke="white" stroke-width="0.75"/>
            </g>
            <defs>
              <clipPath id="clip0_1786_1895">
                <rect width="32" height="32" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </div>
      `);

      _$('.lavm-header__close').addEventListener('click', () => {
        pushDataLayer('exp_pdp_ss_close', 'close', 'click', 'Custom Size Flow', _$('.lavm-tab.active .lavm-tab-label').innerText.trim());
        _$('#select-size-model .btn.cancel[data-dismiss="modal"]').click();
      });

      addNavigation()
      addNewFilters();

      function addNavigation() {
        const isOiling = isEnableSecondStep();

        const html = /* html */ `
          <div class="lavm-tabs">
            <div class="lavm-tab active" data-step="1">
              <div class="lavm-tab-num">${isOiling ? '1.' : ''}</div>
              <div class="lavm-tab-label">Choose worktop size</div>
            </div>

            <div class="lavm-tab" data-step="2">
              <svg class="lavm-tab-divider" width="22" height="79" viewBox="0 0 22 79" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.440186 0L21.4402 39.0002L0.440186 78" stroke="#D3E9DF"/>
              </svg>
              <div class="lavm-tab-num">2.</div>
              <div class="lavm-tab-label">Choose worktop finish</div>
            </div>
          </div>
        `;

        _$('.lavm-header').insertAdjacentHTML('beforebegin', html);

        if (!isOiling) {
          _$('.lavm-tab[data-step="2"]').remove();
        }

        _$$('.lavm-tab').forEach(tab => {
          tab.addEventListener('click', () => {
            pushDataLayer('exp_pdp_ss_step', tab.querySelector('.lavm-tab-label').innerText.trim(), 'click', 'Custom Size Flow', _$('.lavm-tab.active .lavm-tab-label').innerText.trim());
            if (!tab.classList.contains('done')) return;

            const step = tab.dataset.step;
            moveToStep(parseInt(step));
          })
        })
      }

      function addNewFilters() {
        const thicknessOptions = _$$('.lavm-header__filters [data-filter-type="thickness"]', parentEl, true);
        const lengthOptions = _$$('.lavm-header__filters [data-filter-type="length"]', parentEl, true);

        const allOptions = [...thicknessOptions, ...lengthOptions];

        if (!allOptions.length) return;

        const el = document.createElement('div');
        el.classList.add('lavm-filters');

        if (thicknessOptions.length) {
          const filterEl = getFilterOptions('thickness', thicknessOptions, allOptions, el); 
          el.appendChild(filterEl);
        }

        if (lengthOptions.length) {
          const filterEl = getFilterOptions('length', lengthOptions, allOptions, el); 
          el.appendChild(filterEl);
        }

        _$('.lavm-header').insertAdjacentElement('afterbegin', el);

        _$('.lavm-filters__item')?.insertAdjacentHTML('beforeend', /* html */ `
          <div class="lavm-banner">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M14 5.33333V3.33333C14 2.97971 13.8595 2.64057 13.6095 2.39052C13.3594 2.14048 13.0203 2 12.6667 2H3.33333C2.97971 2 2.64057 2.14048 2.39052 2.39052C2.14048 2.64057 2 2.97971 2 3.33333V5.33333" stroke="#212529" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M14 10.6667V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10.6667" stroke="#212529" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M2.66683 8H1.3335" stroke="#212529" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M6.66683 8H5.3335" stroke="#212529" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M10.6668 8H9.3335" stroke="#212529" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M14.6668 8H13.3335" stroke="#212529" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
            
            <span class="lavm-banner-text">
              Need a pre-cut worktop? 
              <span class="lavm-banner-link">
                Choose your exact worktop size<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 12L10 8L6 4" stroke="#212529" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </span>
            </span>
          </div>
        `)

        _$('.lavm-banner-link').addEventListener('click', () => {
          pushDataLayer('exp_pdp_ss_1_choose_exact_size', 'Choose your exact worktop size', 'click', 'Standard Size Flow');
          _$('.cancel[data-dismiss="modal"]')?.click();
          Modal.open('.lav-cutting');
        });
      }

      function getFilterOptions(type, options, allOptions, parentEl) {
        const filterItemEl = document.createElement('div');
        filterItemEl.classList.add('lavm-filters__item');
        filterItemEl.dataset.type = type;
        filterItemEl.innerHTML = /* html */ `
          <div class="lavm-filters__info">
            <div class="lavm-filters__caption">Filter by:</div>
            <div class="lavm-filters__title">${type.charAt(0).toUpperCase() + type.slice(1)}</div>
          </div>
          <div class="lavm-filters__list"></div>
        `;

        options.forEach((option) => {
          const newOption = document.createElement('div');
          newOption.classList.add('lavm-filters__option');
          newOption.innerText = option.innerText.trim();
          newOption.dataset.value = option.dataset.filterValue

          newOption.addEventListener('click', () => {
            pushDataLayer('exp_pdp_ss_filter_option', option.innerText.trim(), 'click', 'Standard Size Flow', type.charAt(0).toUpperCase() + type.slice(1));
            option.click();

            allOptions.forEach(opt => {
              const correspondingNewOption = _$(`[data-value="${opt.dataset.filterValue}"]`, parentEl);
              if (opt.classList.contains('bg-gray-300')) {
                correspondingNewOption.classList.add('disabled');
              } else {
                correspondingNewOption.classList.remove('disabled');
              }
              if (opt.classList.contains('active')) {
                correspondingNewOption.classList.add('active');
                if (!correspondingNewOption.querySelector('svg')) {
                  correspondingNewOption.insertAdjacentHTML('beforeend', /* html */ `
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <rect width="12.4775" height="1.38639" transform="matrix(0.692633 0.72129 -0.692633 0.72129 1.35767 0)" fill="white"/>
                      <rect width="12.4775" height="1.38639" transform="matrix(-0.692633 0.72129 -0.692633 -0.72129 9.60266 1)" fill="white"/>
                    </svg>
                  `)
                }
              } else {
                correspondingNewOption.classList.remove('active');
                correspondingNewOption.querySelector('svg')?.remove();
              }
            })
          })

          _$('.lavm-filters__list', filterItemEl).appendChild(newOption);
        }) 

        return filterItemEl;
      }
    }

    function updateFooter() {
      const footerEl = _$('#select-size-model .modal-footer');
      if (!footerEl) return;

      const isOiling = isEnableSecondStep();

      footerEl.insertAdjacentHTML('afterbegin', /* html */ `
        <div class="lavm-back">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 13.3145L5 8.31445L10 3.31445" stroke="#1F8964" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Back
        </div>

        <div class="lavm-product">
          <img class="lavm-product-img" src="${_$('.image-popup:not(.images-see-more) a')?.href}">
          <div class="lavm-product-info">
            <div class="lavm-product-name">
              ${_$('h1.h4')?.innerText}
            </div>
            <div class="lavm-product-caption">
              Accessories & Essentials
            </div>
          </div>
        </div>

        <div class="lavm-summary">
          <div class="lavm-summary__total">
            <div class="lavm-summary__caption">Total:</div>
            <div class="lavm-summary__price">£0.00</div>
            <div class="lavm-summary__price-old"></div>
          </div>
          <div class="lavm-summary__selected">
            <div class="lavm-summary__count"></div>
            <div class="lavm-summary__oiling"></div>
          </div>
        </div>

        <div class="lavm-btn-continue">
          ${isOiling ? 'Continue' : 'Add to Basket'}
        </div>
      `);

      _$('.lavm-btn-continue').addEventListener('click', (e) => {
        const activeStep = _$('.lavm-tab.active .lavm-tab-label').innerText.trim();
        pushDataLayer('exp_pdp_ss_cta', _$('.lavm-btn-continue').innerText.trim(), 'click', 'Standard Size Flow', activeStep);

        if (!_$('.select-size-row.selected')) {
          alert('Please select at least one worktop size to continue');
          return;
        }

        if (isEnableSecondStep() && _$('.lavm-tab.active').dataset.step === '1') {
          moveToStep(2);
        } else {
          _$('.lavm-btn-continue').classList.add('loading');
          _$('#select-size-model .btn-primary')?.click();
          setTimeout(() => {
            _$('.lavm-btn-continue').classList.remove('loading');
          }, 3500);
        }
      });

      _$('.lavm-back').addEventListener('click', () => {
        pushDataLayer('exp_pdp_ss_2_back', 'Back', 'click', 'Standard Size Flow');
        moveToStep(1);
      })

      const observer = new MutationObserver((mutationsList, observer) => {
        updateFooterInfo();
        return
      });

      observer.observe(_$('#select-size-model .modal-footer .cart-total'), { childList: true, subtree: true });
    }

    function updateFooterInfo() {
      const qty = _$$('.select-size-row.selected').length;
      const price = _$('#select-size-model .modal-footer .cart-total').innerText
      const oilingSelected = _$('.lavm-oiling-card.selected');

      _$('.lavm-btn-continue').classList.toggle('disabled', !qty);

      if (oilingSelected && ['oiling', 'smoothguard'].includes(oilingSelected?.dataset.option)) {
        _$('.lavm-summary__oiling').innerText = '· With ' + (_$('.lavm-oiling-title', oilingSelected)?.innerText || '');
      } else {
        _$('.lavm-summary__oiling').innerText = '';
      }

      _$('.lavm-summary__price').innerText = price;
      _$('.lavm-summary__price-old').innerText = _$('.added-modal-accessories .subtotal-bottom .row-subtotal .o-total-text-display').innerText;
      _$('.lavm-summary__count').innerText = `${qty}x worktop${qty > 1 ? 's' : ''}`;

      if (_$('.added-modal-accessories .subtotal-bottom .row-subtotal .o-total-text-display').style.display == 'none' || _$('.lavm-summary__price')?.innerText.includes('£0')) {
        _$('.lavm-summary__price-old').style.display = 'none';
      } else {
        _$('.lavm-summary__price-old').removeAttribute('style');
      }
    }

    function addSecondStep() {
      const markup = /* html */ `
        <div class="lavm-s3 modal-body">
          <div class="lavm-s3-heading">Save hours of messy DIY. <br> Get your worktops professionally oiled and sealed before delivery.</div>

          <div class="lavm-s3-options">
            <!-- UNTREATED -->
            <div class="lavm-oiling-card selected" data-option="untreated" data-price="0">
              <div class="lavm-oiling-card-header">
                <div class="lavm-oiling-title">Untreated</div>
                <div class="lavm-radio" style="border-width: 8px; border-color: rgb(31, 137, 100);"></div>
              </div>
              <div class="lavm-oiling-price">£0.00</div>
              <div class="lavm-oiling-desc">Arrives sanded and completely natural. You will need to apply at least 3 coats of oil within 24 hours of installation.</div>
            </div>

            <!-- 3-COAT OILING -->
            <div class="lavm-oiling-card" data-option="oiling" data-price="75">
              <div class="lavm-oiling-card-header">
                <div class="lavm-oiling-title">3-Coat Oiling</div>
                <div class="lavm-radio" style="border-width: 1.5px; border-color: rgb(173, 181, 189);"></div>
              </div>
              <div class="lavm-oiling-price"></div>
              <div class="lavm-oiling-desc">A 6-step process of sanding and oiling that leaves your worktop beautifully protected and ready to use straight away - no maintenance hassle. If the worktop fails the water test*, we'll refund 100% of the oiling fee.</div>
            </div>

            <!-- SMOOTHGUARD 5X -->
            <div class="lavm-oiling-card" data-option="smoothguard" data-price="108">
              <div class="lavm-oiling-card-header">
                <div class="lavm-oiling-title">SmoothGuard 5X Oiling System</div>
                <div class="lavm-radio" style="border-width: 1.5px; border-color: rgb(173, 181, 189);"></div>
              </div>
              <div class="lavm-oiling-price"></div>
              <div class="lavm-oiling-desc">Engineered through a precise 12-step sequence alternating between detailed sanding and five distinct oil layers. Perfects the surface texture and sheen, backed by an 18-month maintenance warranty.</div>
              <div class="lavm-oiling-badges">
                <span class="lavm-oiling-badge lavm-oiling-badge-green">
                  18 Months Maintenance Free
                </span>
                <span class="lavm-oiling-badge lavm-oiling-badge-yellow">
                  Longevity+
                </span>
                <span class="lavm-oiling-badge lavm-oiling-badge-red">
                  Stain Resistance
                </span>
              </div>
            </div>
          </div>
        </div>
      `;

      _$('#select-size-model #product-options-modal').insertAdjacentHTML('afterend', markup);

      _$$('.lavm-oiling-card').forEach(card => {
        card.addEventListener('click', () => {
          const text = _$('.lavm-oiling-title', card).innerText.trim();
          pushDataLayer('exp_pdp_ss_2_oiling', text, 'click', 'Standard Size Flow');
          if (card.classList.contains('selected')) return;

          const option = card.dataset.option;

          _$$('.lavm-oiling-card').forEach(c => {
            const radio = _$('.lavm-radio', c);
            if (c.dataset.option === option) {
              c.classList.add('selected');
              radio.style.borderWidth = '8px';
              radio.style.borderColor = '#1f8964';
            } else {
              c.classList.remove('selected');
              radio.style.borderWidth = '1.5px';
              radio.style.borderColor = '#adb5bd';
            }
          });

          updateOilingPrices(2)
          updateFooterInfo();
        })
      })
    }

    function updateOptionsUi() {
      _$$('#product-options-modal .select-size-row').forEach(rowEl => {
        const isOutOfStock = rowEl.querySelector('.badge.bg-danger')?.textContent.trim().toLowerCase() === 'out of stock';

        if (isOutOfStock) {
          _$('.select-size-counter', rowEl).innerText = 'Out of Stock';
          _$('.select-size-counter', rowEl).classList.add('lav-out-of-stock');
        }
      })
    }

    function moveToStep(step) {
      const isOiling = isEnableSecondStep();
      
      _$('#select-size-model').dataset.step = step;
      updateOilingPrices(step);
      if (step === 2) {
        if (!_$('.lavm-oiling-card[data-option="untreated"]').classList.contains('selected')) {
          _$('.lavm-oiling-card[data-option="untreated"]').click();
        }
        _$('.lavm-btn-continue').innerText = 'Add to Basket';
      } else {
        _$('.lavm-btn-continue').innerText = isOiling ? 'Continue' : 'Add to Basket';
      }

      _$$('.lavm-tab').forEach(tab => {
        const tabStep = parseInt(tab.dataset.step);
        _$('.lavm-tab-num', tab).innerHTML = isOiling ? tabStep + '.' : '';
        
        if (tabStep === step) {
          tab.classList.add('active');
          tab.classList.remove('done')
        } else {
          tab.classList.remove('active');
          if (tabStep < step) {
            tab.classList.add('done');
            _$('.lavm-tab-num', tab).innerHTML = /* html */ `
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#1F8964" stroke="#1F8964" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.83325 12L10.8333 15L16.8333 9" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            `
          } else {
            tab.classList.remove('done');
          }
        }
      })
    }

    function updateOilingPrices(step) {
      const isOiling = isEnableSecondStep();
      if (!isOiling) return;

      let oilingPrice = 0;
      let smoothGuardPrice = 0;
      const is3Oiling = !!_$('.lavm-oiling-card[data-option="oiling"].selected');
      const isSmoothGuard = !!_$('.lavm-oiling-card[data-option="smoothguard"].selected');
      const isDefault = !is3Oiling && !isSmoothGuard;

      _$$('#select-size-model .select-size-row.selected').forEach(row => {
        oilingPrice += parsePrice(_$('.collapse .row:nth-child(1) .oiling-card .text-secondary', row).innerText);
        smoothGuardPrice += parsePrice(_$('.collapse .row:nth-child(2) .oiling-card .text-secondary', row).innerText);
        const oilingEl = _$('[for*="customCheckOiling3_"]', row)
        const smoothGuardEl = _$('[for*="customCheckOiling5_"]', row)

        if (isDefault || step !== 2) {
          if (_$('.add-coat-text', oilingEl).innerText === 'Remove') {
            oilingEl.click();
          }
          if (_$('.add-coat-text', smoothGuardEl).innerText === 'Remove') {
            smoothGuardEl.click();
          }
        } else if (is3Oiling) {
          if (_$('.add-coat-text', smoothGuardEl).innerText === 'Remove') {
            smoothGuardEl.click();
          }
          if (_$('.add-coat-text', oilingEl).innerText !== 'Remove') {
            oilingEl.click();
          }
        } else if (isSmoothGuard) {
          if (_$('.add-coat-text', oilingEl).innerText === 'Remove') {
            oilingEl.click();
          }
          if (_$('.add-coat-text', smoothGuardEl).innerText !== 'Remove') {
            smoothGuardEl.click();
          }
        }
      });

      
      if (_$('.lavm-oiling-card')) {
        _$('.lavm-oiling-card[data-option="oiling"] .lavm-oiling-price').innerText = `£${oilingPrice.toFixed(2)}`;
        _$('.lavm-oiling-card[data-option="smoothguard"] .lavm-oiling-price').innerText = `£${smoothGuardPrice.toFixed(2)}`;
      }
    }

    function parsePrice(priceStr) {
      const match = priceStr.match(/[\d.]+/);
      const num = match ? parseFloat(match[0]) : null;
      return num;
    }
  }

  function isEnableSecondStep() {
    return !!_$('#select-size-model .oiling-card') && !_$('#select-size-model[data-type="accessory"]');
  }

  function handleCartImages() {
    initMutation('#cart .dropdown-menu', (node) => {
      if (node.classList?.contains('no-border-last')) {
        updateImages();
      }
    })

    waitFor(() => {
      return _$$('#cart .dropdown-menu .row.border-bottom').length || _$$('#cart-panel .row.border-bottom').length
    }, updateImages )
    updateImages();

    function updateImages() {
      const desktopItems = _$$('#cart .dropdown-menu .row.border-bottom');
      const mobileItems = _$$('#cart-panel .row.border-bottom');
      const allItems = [...desktopItems, ...mobileItems];
      if (!allItems.length) return;

      allItems.forEach(item => {
        const imageEl = _$('a>img', item);
        const link = _$('a', item)?.href;
        const isValidProduct = targetUrls.some(targetUrl => {
          return link?.includes(targetUrl)
        });
        if (!imageEl || !isValidProduct) return;

        let type = _$('.cart-product-name small', item).innerText?.split('|')[0].trim();
        const imgSrc = upsellConfig[type];
        // console.log('Updating cart image for type:', type, imgSrc);
        if (imgSrc && imageEl.src !== imgSrc) {
          imageEl.src = imgSrc;
        }
      })
    }
  }

  function handleAtcModal() {
    const modalEl = _$('.added-modal-accessories');

    _$('.added-modal-accessories .modal-header .close').innerHTML = /* html */ `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
      <g clip-path="url(#clip0_184_48126)">
        <path d="M13.062 11.9637L16.284 15.1857C16.428 15.3297 16.5 15.5097 16.5 15.7257C16.5 15.9297 16.428 16.1037 16.284 16.2477C16.14 16.3917 15.96 16.4637 15.744 16.4637C15.54 16.4637 15.366 16.3917 15.222 16.2477L12 13.0257L8.778 16.2477C8.634 16.3917 8.454 16.4637 8.238 16.4637C8.034 16.4637 7.86 16.3917 7.716 16.2477C7.572 16.1037 7.5 15.9297 7.5 15.7257C7.5 15.5097 7.572 15.3297 7.716 15.1857L10.938 11.9637L7.716 8.74171C7.596 8.58571 7.542 8.41771 7.554 8.23771C7.566 8.04571 7.638 7.88371 7.77 7.75171C7.914 7.60771 8.076 7.52971 8.256 7.51771C8.448 7.50571 8.622 7.55971 8.778 7.67971L12 10.9017L15.222 7.67971C15.318 7.55971 15.432 7.47568 15.564 7.42768C15.696 7.37968 15.834 7.37368 15.978 7.40968C16.122 7.44568 16.242 7.51771 16.338 7.62571C16.446 7.72171 16.518 7.84171 16.554 7.98571C16.59 8.12971 16.584 8.26771 16.536 8.39971C16.488 8.53171 16.404 8.64571 16.284 8.74171L13.062 11.9637Z" fill="#212529"/>
        <path d="M21 0.638672H3C1.55025 0.638672 0.375 1.81392 0.375 3.26367V21.2637C0.375 22.7134 1.55025 23.8887 3 23.8887H21C22.4497 23.8887 23.625 22.7134 23.625 21.2637V3.26367C23.625 1.81392 22.4497 0.638672 21 0.638672Z" stroke="#212529" stroke-width="0.75"/>
      </g>
      <defs>
        <clipPath id="clip0_184_48126">
          <rect width="24" height="24.75" fill="white"/>
        </clipPath>
      </defs>
    </svg>
    `

    _$('.subtotal-bottom .footer-buttons .col-6:nth-child(2) h6', modalEl).textContent = 'Checkout';

    _$('.modal-header .h4', modalEl).textContent = 'Your Worktop Added to Cart';

    _$('.added-modal-accessories .modal-header .close').addEventListener('click', () => {
      pushDataLayer('exp_pdp_cart_modal_close', 'Close', 'click', 'Cart Modal');
    });

    _$('.added-modal-accessories .subtotal-bottom .footer-buttons .col-6:nth-child(2) .btn', modalEl).addEventListener('click', (e) => {
      pushDataLayer('exp_pdp_cart_modal_checkout', 'Checkout', 'click', 'Cart Modal');
      if (_$('.lav-upsell.active')) {
        e.preventDefault()
        _$$('#product-options-modal .select-size-row[data-type="worktop"] .checkbox-check [type="checkbox"]:checked ').forEach(checkbox => {
          if (checkbox?.checked) {
            checkbox.click();
          }
        });

        _$('#added-modal-with-accessories-2').classList.add('lav-atc-handle');

        _$('.added-modal-accessories .subtotal-bottom .footer-buttons .col-6:nth-child(2) .btn').classList.add('lav-btn-progress');

        // $('.added-modal-accessories .modal-header').slideUp();
        const observer = new MutationObserver((mutationsList, observer) => {
          for (const mutation of mutationsList) {
            if (mutation.addedNodes.length) {
              observer.disconnect();
              location.href = 'https://houseofworktops.co.uk/index.php?route=checkout/checkout';
              
              resetExpSelector();

              setTimeout(() => {
                _$('.lav-atc-handle')?.classList.remove('lav-atc-handle');
                _$('.lav-btn-progress')?.classList.remove('lav-btn-progress');
              }, 3000);
            }
          }
        });

        observer.observe(_$('#cart>button'), { attributes: true, childList: true, subtree: true });
        _$('.button-cart').click();
      }
    });
  }

  function handleCheckoutCartImages() {
    const summaryItems = _$$('#accordion-summary .product-info');
    const editorItems = _$$('.product-wrapper>.product-info');
    // const mobileItems = _$$('#cart-panel .row.border-bottom');
    // const allItems = [...desktopItems, ...mobileItems];
    summaryItems.forEach(item => {
      const imageEl = _$('a>img', item);
      const link = _$('a', item)?.href;
      const isValidProduct = targetUrls.some(targetUrl => {
        return link?.includes(targetUrl)
      });
      if (!imageEl || !isValidProduct) return;

      let type = _$('.text-gray-600.small', item)?.innerText?.replace(/\s*\([^)]*\)/g, '').trim();
      const imgSrc = upsellConfig[type];

      if (imgSrc && imageEl.src !== imgSrc) {
        imageEl.src = imgSrc;
      }
    })

    editorItems.forEach(item => {
      const imageEl = _$('a>img', item);
      const link = _$('a', item)?.href;
      const isValidProduct = targetUrls.some(targetUrl => {
        return link?.includes(targetUrl)
      });
      if (!imageEl || !isValidProduct) return;

      let type = _$('.prod-description .text-gray-600', item)?.innerText?.replace('Worktop Size: ', '').trim();
      const imgSrc = upsellConfig[type];

      if (imgSrc && imageEl.src !== imgSrc) {
        imageEl.src = imgSrc;
      }
    })
  }

  function handleCheckoutImages() {
    const items = _$$('.product-info');
    if (!items.length) return;

    items.forEach(item => {
      const imageEl = _$('.product-info a>img', item);
      const link = _$('.product-info a', item)?.href;
      const isValidProduct = targetUrls.some(targetUrl => {
        return link?.includes(targetUrl)
      });
      if (!imageEl || !isValidProduct) return;

      let type = _$('.text-gray-600.small', item)?.innerText?.replace(/\s*\([^)]*\)/g, '').trim();
      const imgSrc = upsellConfig[type];
      if (imgSrc && imageEl.src !== imgSrc) {
        imageEl.src = imgSrc;
      }
    })
  }

  function handleAtcImages() {
    const isValidProduct = targetUrls.some(targetUrl => {
      return location.href.includes(targetUrl)
    });

    if (!isValidProduct) return;

    update();

    const observer = new MutationObserver((mutationsList, observer) => {
      for (const mutation of mutationsList) {
        console.log('mutation', mutation)
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          if (mutation.target.classList.contains('show')) {
            update();
          }
        }
      }
    });

    observer.observe(_$('#added-modal-with-accessories-2'), { attributes: true })

    function update() {
      _$$(`.added-modal-accessories .variants-container>div`).forEach(el => {
        const img = _$('.position-relative>img', el);
        let productName = _$('.variant-name-type', el)?.textContent?.trim();
        if (!productName) {
          const type = _$('.variant-title', el)?.textContent?.trim().split(' - ')[1];
          productName = type + ' - ' +_$('.dimension + div', el)?.innerText?.trim().replaceAll('\n', ' x ').replace(/(\d)m\b/g, (_, n) => n + 'M')
        }

        const imagesSrc = upsellConfig[productName];

        if (imagesSrc && productName && img && img.src !== imagesSrc) {
          img.src = imagesSrc;
        }
      });
    }
  }


  async function addSticky() {
    await waitFor('.select-size-mobile', false, { ms: 20 }) 

    const markup = /* html */ `
      <div class="lav-sticky">
        <div class='lav-sticky__size'>
          <div class='lav-sticky__step'>
            Step 1
          </div>
          <div class='lav-sticky__text'>
            Choose Worktop Size
          </div>
        </div>
        <div class='lav-sticky__upsell'>
          <div class='lav-sticky__step'>
            Step 2
          </div>
          <div class='lav-sticky__text'>
            Choose Accessories
          </div>
        </div>
      <div>
    `;

    _$('body').insertAdjacentHTML('beforeend', markup);

    const isUpsell = !!_$('#select-size-model .select-size-row[data-type="accessory"]')

    if (!isUpsell) {
      _$('.lav-sticky__upsell').remove();
      _$('.lav-sticky').classList.add('lav-sticky--single');
    }

    _$('.lav-sticky__size').addEventListener('click', () => {
      pushDataLayer('exp_pdp_cta', _$('.lav-sticky__size .lav-sticky__text').innerText, 'click', 'Fixed');
      config.isDisableLayer = true;
      _$('#select-size').click();
      config.isDisableLayer = false;
    });

    _$('.lav-sticky__upsell')?.addEventListener('click', () => {
      pushDataLayer('exp_pdp_cta', _$('.lav-sticky__upsell .lav-sticky__text').innerText, 'click', 'Fixed');
      config.isDisableLayer = true;
      _$('#select-size').click();
      resetModalSizeSelectorModal(true);
      config.isDisableLayer = false;
    });
    
    const observer = new MutationObserver((mutations, observer) => {
      for (let mutation of mutations) {
        if (mutation.target.style.visibility === 'visible') {
          _$('.lav-sticky').classList.add('active');
        } else {
          _$('.lav-sticky').classList.remove('active');
        }
      }
    })

    observer.observe(_$('.select-size-mobile'), { attributes: true, attributeFilter: ['style'] })
  }

  function handleEssentials() {
    const sizeRows = _$$('#product-options-modal .select-size-row[data-type="accessory"]');

    if (!sizeRows?.length) return;

    const markup = /* html */ `
      <div class='lav-essentials'>
        <div class='lav-essentials__title'>Choose your Essentials</div>
        <div class='lav-essentials__list'></div>
      </div>
    `;

    _$('#variant-card-template').insertAdjacentHTML('beforebegin', markup);

    _$('.lav-essentials__list').innerHTML = '';

    sizeRows.forEach(row => {
      if (row.dataset.type !== 'accessory') return;
      
      const isOutOfStock = row.querySelector('.badge.bg-danger')?.textContent.trim().toLowerCase() === 'out of stock';

      if (isOutOfStock) return

      let size = row.querySelector('.h6')?.textContent.trim() || '';
      if (size) {
        size = size.replace(/\((\d+)\sPiece\)/g, '($1\u00A0Piece)')
      }
      const priceNew = row.querySelector('.worktop-price .price-new')?.textContent.trim() || '';
      const priceOld = row.querySelector('.worktop-price .price-old')?.textContent.trim() || '';
      const priceDefault = row.querySelector('.worktop-price .h6.text-gray-900')?.textContent.trim() || '';
      const quantity = row.querySelector('.quantity-field')?.value.trim() || '0';

      const upsellEl = document.createElement('div');
      upsellEl.classList.add('lav-upsell');
      if (quantity !== '0') {
        upsellEl.classList.add('active');
      }
      Object.entries(row.dataset).map(([key, value]) => {
        upsellEl.dataset[key] = value;
      })

      const isValidProduct = targetUrls.some(targetUrl => {
        return location.href.includes(targetUrl)
      });

      const image = isValidProduct && upsellConfig[size] ? upsellConfig[size] : null;

      upsellEl.innerHTML = /* html */ `
        <div class="lav-upsell__image">
          <img src="" class="position-relative rounded" />
        </div>
        <div class="lav-upsell__info">
          <div class="lav-upsell__title">${size}</div>
          <div class="lav-upsell__description">Made from the same material as your worktop</div>
        </div>
        <div class="lav-upsell__summary">
          <div class="lav-upsell__price">
            <div class="lav-upsell__price-new ${!priceNew ? 'lav-upsell__price-new--default' : ''}">${priceNew || priceDefault}</div>
            <div class="lav-upsell__price-old">${priceOld}</div>
          </div>
          <div class="lav-upsell__add">Add</div>
          <div class="lav-upsell__counter">
            <div class="lav-upsell__counter-minus lav-upsell__counter-btn ${quantity === '0' ? 'lav-disabled' : ''}">
              ${getSvg('minus')}
            </div>
            <div class="lav-upsell__counter-value">${quantity}</div>
            <div class="lav-upsell__counter-plus lav-upsell__counter-btn">
              ${getSvg('plus')}
            </div>
          </div>
        </div>
      `;

      if (!image) {
        _$('.lav-upsell__image', upsellEl).remove();
        _$(".lav-upsell__description", upsellEl).remove();
      } else {
        _$('.lav-upsell__image img', upsellEl).src = image;
        if (!image.includes('upstand.jpg') && !image.includes('plinth') && !image.includes('splashback')) {
          _$(".lav-upsell__description", upsellEl).remove();
        }
      }

      _$('.lav-upsell__add', upsellEl)?.addEventListener('click', () => {
        pushDataLayer('exp_pdp_cart_modal_upsell_add', 'Add', 'click', size);
        if (row.querySelector('.add-button:not(.d-none)')) {
          row.querySelector('.add-button').click();
        } else {
          row.querySelector('.button-plus').click();
        }

        _$('.lav-upsell__counter-value', upsellEl).textContent = row.querySelector('.quantity-field')?.value.trim() || '0';
        upsellEl.classList.add('active');
        _$('.lav-upsell__counter-minus', upsellEl).classList.remove('lav-disabled');
      });

      _$('.lav-upsell__counter-plus', upsellEl)?.addEventListener('click', () => {
        pushDataLayer('exp_pdp_cart_modal_upsell_qty', 'Plus', 'click', size);
        if (row.querySelector('.add-button:not(.d-none)')) {
          row.querySelector('.add-button').click();
        } else {
          row.querySelector('.button-plus').click();
        }

        _$('.lav-upsell__counter-value', upsellEl).textContent = row.querySelector('.quantity-field')?.value.trim() || '0';
        upsellEl.classList.add('active');
        _$('.lav-upsell__counter-minus', upsellEl).classList.remove('lav-disabled');
      });

      _$('.lav-upsell__counter-value', upsellEl)?.addEventListener('click', () => {
        pushDataLayer('exp_pdp_cart_modal_upsell_qty', 'Input', 'click', size);
      });

      _$('.lav-upsell__counter-minus', upsellEl)?.addEventListener('click', () => {
        pushDataLayer('exp_pdp_cart_modal_upsell_qty', 'Minus', 'click', size);
        const currentQty = row.querySelector('.quantity-field')?.value.trim() || '0';
        if (currentQty == '0') return;

        if (currentQty == '1') {
          _$('.lav-upsell__counter-minus', upsellEl).classList.add('lav-disabled');
          upsellEl.classList.remove('active');
        }

        row.querySelector('.button-minus').click();
        _$('.lav-upsell__counter-value', upsellEl).textContent = row.querySelector('.quantity-field')?.value.trim() || '0';
      });

      _$('.lav-essentials__list').insertAdjacentElement('beforeend', upsellEl);
    });

    let isHandled = false;

    _$('.button-cart').addEventListener('click', () => {
      if (isHandled) return;
      isHandled = true

      waitFor(() => _$('#added-modal-with-accessories-2.show'), () => {
        _$$(`.added-modal-accessories .variants-container>div`).forEach(el => { 
          el.classList.add('lav-product--added');
        });

        const savedConfig = {
          price: _$('.added-modal-accessories .subtotal-bottom .row-subtotal .total-text-display')?.innerText.trim() || '',
          oldPrice: _$('.added-modal-accessories .subtotal-bottom .row-subtotal .o-total-text-display')?.innerText.trim() || '',
          products: _$('.added-modal-accessories .variants-container').innerHTML,
          isOldActive: _$('.added-modal-accessories .subtotal-bottom .row-subtotal .o-total-text-display')?.style.display !== 'none'
        }

        _$('.added-modal-accessories .variants-container').dataset.added = _$$('.added-modal-accessories .variants-container>div').length
        pushDataLayer('exp_pdp_cart_modal_view', 'Cart Modal', 'view', 'Cart Modal');

        const isValidProduct = targetUrls.some(targetUrl => {
          return location.href.includes(targetUrl)
        });
        let observerUpselss;

        if (isValidProduct) {
          observerUpselss = initMutation('.variants-container', (node, obs) => {
            handleAtcProducts(savedConfig, 'added modal mutation');
          }, () => {
            handleAtcProducts(savedConfig, 'removed modal mutation');
          })
        }

        const observer = new MutationObserver((mutationsList, observer) => {
          for (const mutation of mutationsList) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
              if (!mutation.target.classList.contains('show')) {
                resetExpSelector();
                observerUpselss?.disconnect();
                observer.disconnect();
              }
            }
          }
        });

        observer.observe(_$('#added-modal-with-accessories-2'), {   attributes: true });
      }, { ms: 100 })

      setTimeout(() => {
        isHandled = false;
      }, 2000);
    });

    function handleAtcProducts(savedConfig, type) {
      const startFrom = parseInt(_$('.added-modal-accessories .variants-container').dataset.added) || 0;

      if (!_$(".lav-product--added")) {
        _$('.added-modal-accessories .variants-container').insertAdjacentHTML('afterbegin', savedConfig.products);
      }

      _$$(`.added-modal-accessories .variants-container>div:nth-child(n+${startFrom + 1})`).forEach(el => {
        const img = _$('.position-relative>img', el);
        let productName = _$('.variant-name-type', el)?.textContent?.trim();
        if (!productName) {
          const type = _$('.variant-title', el)?.textContent?.trim().split(' - ')[1];
          productName = type + ' - ' +_$('.dimension + div', el)?.innerText?.trim().replaceAll('\n', ' x ');
        }

        const imagesSrc = upsellConfig[productName];
        if (imagesSrc && productName && img && img.src !== imagesSrc) {
          img.src = imagesSrc;
          if (imagesSrc.includes('upstand.jpg') || imagesSrc.includes('plinth') || imagesSrc.includes('splashback')) {
            el.classList.add('lav-upsell-accessory');
          }
        }
      });

      const currentPrice = Array.from(_$$('.added-modal-accessories .variants-container .content-block .price-display')).reduce((acc, priceEl) => {
        const priceText = priceEl.innerText.trim();
        const priceValue = formatPrice(priceText);
        const qty = priceEl.closest('.content-block').querySelector('.quantity-display')?.innerText?.trim().replace(/\D/g, '') || '1';

        if (isNaN(priceValue)) return acc;

        return acc + priceValue * parseInt(qty);
      }, 0);

      const currentOldPrice = Array.from(_$$('.added-modal-accessories .variants-container .content-block .og-price-display')).reduce((acc, priceEl) => {
        const priceText = priceEl.innerText.trim();
        const priceValue = formatPrice(priceText);
        const qty = priceEl.closest('.content-block').querySelector('.quantity-display')?.innerText?.trim().replace(/\D/g, '') || '1';

        if (isNaN(priceValue)) return acc;

        return acc + priceValue * parseInt(qty);
      }, 0);

      _$('.added-modal-accessories .subtotal-bottom .row-subtotal .total-text-display').innerText = formatPrice(currentPrice, true);

      _$('.added-modal-accessories .subtotal-bottom .row-subtotal .o-total-text-display').innerText = formatPrice(currentOldPrice, true);

      if (savedConfig.isOldActive && !_$('.lav-upsell-accessory')) {
        _$('.added-modal-accessories .subtotal-bottom .row-subtotal .o-total-text-display').style.display = 'block';
      }
    }
  }


  function resetExpSelector() {
    // _$$('.lav-size').forEach(sizeEl => {
    //   if (_$('.lav-size__counter-value', sizeEl)) {
    //     _$('.lav-size__counter-value', sizeEl).textContent = '0';
    //     _$('.lav-size__counter-minus', sizeEl).classList.add('lav-disabled');
    //   }
    //   sizeEl.classList.remove('active');
    //   $('.lav-size__footer', sizeEl)?.slideUp();
    // });

    updateFooterInfo();

    _$$('.lav-upsell').forEach(upsellEl => {
      if (_$('.lav-upsell__counter-value', upsellEl)) {
        _$('.lav-upsell__counter-value', upsellEl).textContent = '0';
      }
      upsellEl.classList.remove('active');
    });

    // _$('.lav-sticky').textContent = 'Choose Size'

    // _$$('#product-options-modal .select-size-row .checkbox-check [type="checkbox"]:checked').forEach(checkbox => {
    //   if (checkbox?.checked) {
    //     checkbox.click();
    //   }
    // });
  }

  // *** Utils *** //
  function formatPrice(price, isGetMoneyFormat = false) {
    if (!price) return '';

    // If it's already a number, keep it
    let numericPrice;

    if (typeof price === 'number') {
      numericPrice = price;
    } else {
      // Remove everything except digits, dot, and comma
      const cleaned = price.replace(/[^\d.,-]/g, '');

      // Convert comma thousands → remove commas
      numericPrice = parseFloat(cleaned.replace(/,/g, ''));
    }

    if (isNaN(numericPrice)) return '';

    // Return formatted money if needed
    if (isGetMoneyFormat) {
      return new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP',
      }).format(numericPrice);
    }

    return numericPrice;
  }
  
  // *** HELPERS *** //

  // Waiting for loading by condition
  async function waitFor(condition, cb = false, customConfig = {}) {
    const config = {
      ms: 500, // repeat each 0.5 second if condition is false
      limit: 10, // limit in second seconds

      ...customConfig
    }

    if (typeof condition === 'function') {
      if (condition()) {
        if (typeof cb === 'function') cb()
        return
      }

      return new Promise((resolve) => {
        let limit = config.limit * 1000
        const interval = setInterval(function () {
          if (condition() || limit <= 0) {
            clearInterval(interval)
            if (limit > 0 && typeof cb === 'function') cb()
            resolve()
          }
          limit -= config.ms
        }, config.ms)
      })
    }

    if (condition.startsWith('.') || condition.startsWith('#')) {
      if (_$(condition)) {
        if (typeof cb === 'function') cb(_$(condition))
        return
      }

      return new Promise((resolve) => {
        const observer = new MutationObserver((mutations, observer) => {
          if (_$(condition)) {
            if (typeof cb === 'function') cb(_$(condition))
            observer.disconnect()
            resolve()
          }
        })

        observer.observe(document, { childList: true, subtree: true })
      })
    }
  }

  // Mutation Observer
  function initMutation(observeEl = document.body, cbAdded, cbRemoved) {
    const el = typeof observeEl === 'string' ? _$(observeEl) : observeEl

    if (!el) return

    let observer = new MutationObserver((mutations, observer) => {
      for (let mutation of mutations) {
        if (typeof cbAdded === 'function') {
          for (let node of mutation.addedNodes) {
            if (!(node instanceof HTMLElement)) continue
            cbAdded(node, observer)
          }
        }

        if (typeof cbRemoved === 'function') {
          for (let node of mutation.removedNodes) {
            if (!(node instanceof HTMLElement)) continue
            cbRemoved(node, observer)
          }
        }
      }
    })

    observer.observe(el, { childList: true, subtree: true })

    return observer
  }

  // Intersection Observer
  function initIntersection(observeEl, cb, customConfig) {
    const el = typeof observeEl === 'string' ? _$(observeEl) : observeEl

    if (!el || typeof cb !== 'function') return

    const config = {
      root: null,
      threshold: 0.3, // 0 - 1 | A threshold of 1.0 means that when 100% of the target is visible within the element specified by the root option, the callback is invoked.
      ...customConfig
    }

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        cb(entry, observer)
      })
    }, config)

    observer.observe(el)

    return observer
  }

  function focusTimeEvent(el, cb, viewElementProcent = 0.1) {
    let entryTime = 0
    initIntersection(
      el,
      ({ isIntersecting, time }) => {
        if (isIntersecting) {
          entryTime = time
        } else if (entryTime) {
          const diffTime = +((time - entryTime) / 1000).toFixed(1)
          cb(diffTime + 's')
          entryTime = 0
        }
      },
      { threshold: viewElementProcent }
    )
  }

  function visibilityEvent(el, cb, customConfig = {}) {
    const config = {
      threshold: 0.3,
      ...customConfig,
      timer: null
    }
    initIntersection(
      el,
      ({ isIntersecting, target }, observer) => {
        // console.log(target, isIntersecting);
        if (isIntersecting) {
          config.timer = setTimeout(() => {
            if (isElementInViewport(target)) {
              cb()
              observer.disconnect()
            }
          }, 3000)
        } else {
          clearTimeout(config.timer)
        }
      },
      config
    )
  }

  // Artificial delay
  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  // Check if element in viewport
  function isElementInViewport(selector) {
    const el = typeof selector === 'string' ? _$(selector) : selector

    if (!el) return false

    const rect = el.getBoundingClientRect()
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight

    return (
      rect.top + rect.height * 0.3 < windowHeight &&
      rect.bottom > rect.height * 0.3
    )
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
    return context.querySelector(selector)
  }
  function _$$(selector, context = document, toSimpleArray = false) {
    const arr = context.querySelectorAll(selector)

    return toSimpleArray ? Array.from(arr) : arr
  }

  // GA 4 events
  function pushDataLayer(name = '', desc = '', type = '', loc = '', loc2 = undefined) {
    window.dataLayer = window.dataLayer || []

    try {
      const event = {
        event: 'event-to-ga4',
        event_name: name,
        event_desc: desc,
        event_type: type,
        event_loc: loc,
        event_loc2: loc2
      }

      console.debug('** GA4 Event **', event)

      if (!config.debug) {
        dataLayer.push(event)
      }
    } catch (e) {
      console.log('** GA4 Error **', e)
    }
  }

  // Slider
  function connectSplide() {
    const sliderStyles = document.createElement('link')
    sliderStyles.rel = 'stylesheet'
    sliderStyles.href =
      'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide-core.min.css'
    document.head.appendChild(sliderStyles)

    let sliderScript = document.createElement('script')
    sliderScript.src =
      'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js'
    document.head.appendChild(sliderScript)
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
        clarity(...config.clarity)
      }
    )
  }

  // Svg objects
  function getSvg(name) {
    const svgObj = {
      'plus': /* svg */ `
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
          <rect x="6.1875" width="11" height="1.375" transform="rotate(90 6.1875 0)" fill="white"/>
          <rect y="4.8125" width="11" height="1.375" fill="white"/>
        </svg>
      `,
      'minus': /* svg */ `
        <svg width="11" height="1" viewBox="0 0 11 1" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="11" height="1" fill="white"/>
        </svg>
      `,
      'dropdown': /* svg */ `
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
          <path d="M2.05078 2.91016C1.81641 2.67578 1.5332 2.55859 1.20117 2.55859C0.869141 2.55859 0.585938 2.67578 0.351563 2.91016C0.117188 3.14453 5.9608e-07 3.42773 5.67053e-07 3.75977C5.38026e-07 4.0918 0.117188 4.375 0.351563 4.60938L6 10.2461L11.6484 4.60938C11.8828 4.375 12 4.0918 12 3.75977C12 3.42774 11.8828 3.14453 11.6484 2.91016C11.4141 2.67578 11.1309 2.55859 10.7988 2.55859C10.4668 2.55859 10.1836 2.67578 9.94922 2.91016L6 6.85938L2.05078 2.91016Z" fill="currentColor"/>
        </svg>
      `,
      'close-popup': `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
          <g clip-path="url(#clip0_993_815)">
            <path d="M13.062 11.9636L16.284 15.1856C16.428 15.3296 16.5 15.5096 16.5 15.7256C16.5 15.9296 16.428 16.1036 16.284 16.2476C16.14 16.3916 15.96 16.4636 15.744 16.4636C15.54 16.4636 15.366 16.3916 15.222 16.2476L12 13.0256L8.778 16.2476C8.634 16.3916 8.454 16.4636 8.238 16.4636C8.034 16.4636 7.86 16.3916 7.716 16.2476C7.572 16.1036 7.5 15.9296 7.5 15.7256C7.5 15.5096 7.572 15.3296 7.716 15.1856L10.938 11.9636L7.716 8.74165C7.596 8.58565 7.542 8.41765 7.554 8.23765C7.566 8.04565 7.638 7.88365 7.77 7.75165C7.914 7.60765 8.076 7.52965 8.256 7.51765C8.448 7.50565 8.622 7.55965 8.778 7.67965L12 10.9016L15.222 7.67965C15.318 7.55965 15.432 7.47562 15.564 7.42762C15.696 7.37962 15.834 7.37362 15.978 7.40962C16.122 7.44562 16.242 7.51765 16.338 7.62565C16.446 7.72165 16.518 7.84165 16.554 7.98565C16.59 8.12965 16.584 8.26765 16.536 8.39965C16.488 8.53165 16.404 8.64565 16.284 8.74165L13.062 11.9636Z" fill="#212529"/>
            <path d="M21 0.638672H3C1.55025 0.638672 0.375 1.81392 0.375 3.26367V21.2637C0.375 22.7134 1.55025 23.8887 3 23.8887H21C22.4497 23.8887 23.625 22.7134 23.625 21.2637V3.26367C23.625 1.81392 22.4497 0.638672 21 0.638672Z" stroke="#212529" stroke-width="0.75"/>
          </g>
          <defs>
            <clipPath id="clip0_993_815">
              <rect width="24" height="24.75" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      `
    }

    return svgObj[name]
  }

  const markup = /* html */ `
    <style>
      #worktop-customizer {
        overflow: hidden;
        display: flex;
        flex-direction: column;
      }

      /* ── TABS ── */
      .lawc-tabs {
        display: flex;
        height: 78px;
        flex-shrink: 0;
        overflow: auto;
      }

      .lawc-tab {
        position: relative;
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        padding: 16px 20px;
        border-bottom: 1px solid #D3E9DF;
        cursor: default;
        font-size: 20px;
        line-height: 28px;
        color: #495057;
        white-space: nowrap;
        font-weight: 500;
      }
      .lawc-tab.done {
        color: #1f8964;
        gap: 8px;
        cursor: pointer;
      }

      @media(hover:hover) {
        .lawc-tab.done:hover {
          opacity: .85;
        }
      }

      .lawc-tab.active {
        background: #D1EBDF;
        color: #1f8964;
      }

      .lawc-tab.active + .lawc-tab .lawc-tab-divider {
        fill: #D1EBDF;
      }
      .lawc-tab.active .lawc-tab-divider {
        fill: white;
      }

      .lawc-tab-divider {
        position: absolute;
        fill: transparent;
        left: -1px;
        /* height: 100%; */
        /* margin-left: -1px; */
      }
      .lawc-tab-divider-prev {
        left: -1px;
        /* transform: translateX(-50%); */
      }
      .lawc-tab-divider-next {
        right: 0;
        /* transform: translateX(50%); */
      }

      .lawc-tab-num {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        line-height: 1;
      }

      /* ── STEPS ── */
      .lawc-body {
        overflow-y: auto;
        padding:  20px;
      }
      .lawc-step {
        display: none;
        flex-direction: column;
      }
      .lawc-step.active {
        display: flex;
      }

      @media(max-width: 992px) {
        .lawc-tabs {
          height: 56px;
        }
        .lawc-body {
          padding: 16px 14px 20px;
          flex-grow: 1;
        }
        .lawc-tab {
          font-size: 14px;
          line-height: 24px;
          padding: 10px 4px 10px 10px;
          gap: 4px;
        }
        .lawc-tab-divider {
          height: 100%;
          left: -5px;
        }
        .lawc-tab + .lawc-tab {
          padding-left: 25px;
        }
        .lawc-tab-num svg {
          width: 16px;
          line-height: 16px;
        }
        .lawc-tab.done {
          gap: 4px;
        }
        .lawc-tab[data-step="3"] {
          padding-right: 12px;
        }
      }

      /* ── STEP 1 ── */
      .lawc-banner {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 8px;
        text-decoration: none;
      }

      .lawc-banner-text {
        line-height: 20px;
        font-size: 14px;
        font-weight: 500;
        color: #212529;
      }

      .lawc-banner-link {
        color: #1f8964;
        text-decoration: underline;
        text-underline-offset: 2px;
        cursor: pointer;
        white-space: nowrap;
      }

      .lawc-banner-link svg {
        vertical-align: sub;
        margin-left: 6px;
      }

      .lawc-worktops-list {
        margin-top: 16px;
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      .lawc-card {
        background: #f5f5f7;
        border-radius: 16px;
      }

      .lawc-card-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 45px;
        padding: 0 32px;
        border-bottom: 1px solid rgba(0,0,0,0.1);
      }

      .lawc-card-title {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .lawc-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #1f8964;
        flex-shrink: 0;
      }

      .lawc-card-name {
        font-size: 14px;
        font-weight: 600;
        color: #212529;
      }

      .lawc-remove-btn {
        background: none;
        border: none;
        cursor: pointer;
        color: #6c757d;
        font-size: 20px;
        line-height: 1;
        padding: 0;
        display: none;
        transition: .2s;
      }

      @media(hover:hover) {
        .lawc-remove-btn:hover {
          opacity: 0.7;
        }
      }

      .lawc-card-fields {
        display: flex;
        gap: 16px;
        padding: 12px 32px;
      }

      .lawc-field {
        display: flex;
        flex-direction: column;
        gap: 6px;
        flex: 1;
        min-width: 0;
      }

      .lawc-field.lawc-field-thickness, .lawc-field-qty {
        max-width: 160px;
      }

      .lawc-field-label {
        font-size: 14px;
        font-weight: 500;
        color: #212529;
        line-height: 24px;
      }

      .lawc-input-wrap {
        display: flex;
        align-items: stretch;
      }

      .lawc-input-wrap input {
        flex: 1;
        min-width: 0;
        height: 45px;
        padding: 0 8px;
        border: 1px solid #6c757d;
        border-right: none;
        border-radius: 4px 0 0 4px;
        font-size: 14px;
        color: #495057;
        background: #fff;
        font-family: 'Archivo', sans-serif;
      }

      .lawc-input-wrap input:focus {
        outline: none;
        border-color: #1f8964;
        z-index: 1;
        position: relative;
      }

      /* Remove number input arrows */
      input[type=number]::-webkit-inner-spin-button,
      input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      input[type=number] {
        -moz-appearance: textfield;
      }

      .lawc-input-wrap.lawc-field-error input,
      .lawc-input-wrap.lawc-field-error .lawc-unit {
        border-color: #dc3545;
      }
      
      .lawc-input-wrap.lawc-field-error + .lawc-hint {
        display: none;
      }

      .lawc-input-wrap.lawc-field-error .lawc-unit {
        color: #DC3545;
      }

      .lawc-select-wrap.lawc-field-error select {
        border-color: #dc3545;
      }

      .lawc-field-error-msg {
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 10px;
        color: #dc3545;
        line-height: 15px;
      }
      .lawc-field-error-msg svg {
        flex-shrink: 0;
      }

      .lawc-unit {
        height: 45px;
        width: 39px;
        background: #fff;
        border: 1px solid #6c757d;
        border-radius: 0 4px 4px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        color: #495057;
        flex-shrink: 0;
      }

      .lawc-hint {
        font-size: 10px;
        color: #495057;
        line-height: 15px;
      }

      /* Quantity hybrid control (input + arrow button + hidden select) */
      .lawc-qty-hybrid {
        position: relative;
        display: flex;
        width: 100%;
      }

      .lawc-qty-hybrid .lawc-qty-input {
        flex: 1;
        height: 45px;
        padding: 0 8px;
        border: 1px solid #6c757d;
        border-radius: 4px 0 0 4px;
        font-size: 14px;
        color: #495057;
        background: #fff;
        font-family: 'Archivo', sans-serif;
        border-right: none;
        min-width: 0;
      }

      .lawc-qty-hybrid .lawc-qty-input:focus {
        outline: none;
        border-color: #1f8964;
        z-index: 1;
        position: relative;
      }

      .lawc-qty-hybrid .lawc-qty-arrow-btn {
        width: 45px;
        height: 45px;
        border: 1px solid #6c757d;
        border-radius: 0 4px 4px 0;
        background: #fff;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        pointer-events: none;
      }

      .lawc-qty-hybrid .lawc-qty-arrow-btn:hover {
        background: #f8f9fa;
      }

      .lawc-qty-hybrid .lawc-qty-select {
        position: absolute;
        top: 0;
        right: 0;
        width: 45px;
        height: 45px;
        opacity: 0;
        cursor: pointer;
        z-index: 2;
        appearance: none;
        border: none;
        background: transparent;
      }

      .lawc-qty-hybrid.lawc-field-error .lawc-qty-input,
      .lawc-qty-hybrid.lawc-field-error .lawc-qty-arrow-btn {
        border-color: #dc3545;
      }

      .lawc-select-wrap {
        position: relative;
        display: inline-flex;
      }

      .lawc-select-wrap::after {
        content: '';
        position: absolute;
        right: 38px;
        top: 0;
        bottom: 0;
        width: 1px;
        background: #6c757d;
        pointer-events: none;
        z-index: 1;
      }

      .lawc-select-wrap select {
        flex-grow: 1;
        height: 45px;
        padding: 0 38px 0 8px;
        border: 1px solid #6c757d;
        border-radius: 4px;
        font-size: 14px;
        color: #495057;
        background: #fff;
        font-family: 'Archivo', sans-serif;
        cursor: pointer;
        appearance: none;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23495057' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right 11px center;
      }

      .lawc-select-wrap select:focus {
        outline: none;
        border-color: #1f8964;
      }

      /* ── ADD BUTTON ── */
      .lawc-add-btn {
        margin: 20px 0;
        width: 100%;
        height: 165px;
        border: 2px dashed #c9cfd6;
        border-radius: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        background: none;
        font-size: 16px;
        font-weight: 500;
        color: #6c757d;
        font-family: 'Archivo', sans-serif;
        cursor: pointer;
        transition: border-color 0.15s, background 0.15s, color 0.15s;
      }

      .lawc-add-btn:hover { border-color: #1f8964; background: #f0f8f4; color: #1f8964; }
      .lawc-add-btn:hover svg path { stroke: #1f8964; }

      @media(max-width: 992px) {
        .lawc-worktops-list {
          margin-top: 22px;
        }
        .lawc-card-header {
          padding-left: 12px;
          padding-right: 12px;
        }
        .lawc-card-fields {
          padding-left: 12px;
          padding-right: 12px;
          flex-wrap: wrap;
          gap: 12px;
        }
        .lawc-card-fields .lawc-field {
          flex: 1;
          min-width: calc(33.333% - 8px);
        }
        .lawc-card-fields .lawc-field-qty {
          flex: 1 1 100%;
          max-width: 100%;
        }
        .lawc-add-btn {
          margin: 14px 0;
          height: 140px;
          font-size: 14px;
        }
        .lawc-banner svg {
          display: none;
        }
        .lawc-banner-text {
          font-size: 12px;
        }
        .lawc-unit {
          width: 33px;
        }
        .lawc-select-wrap select {
          width: 100%;
        }
      }

      /* ── HOW IT WORKS ── */
      .lawc-how {
        background: #F8F9FA;
        padding: 23px 35px 35px;
        margin: 0 -20px -20px;
      }

      .lawc-info-heading {
        display: flex;
        align-items: center;
        padding-bottom: 12px;
        border-bottom: 1px solid #E9ECEF;
        font-size: 16px;
        line-height: 20px;
        font-weight: 600;
        color: #212529;
      }

      .lawc-info-list {
        display: flex;
        flex-direction: column;
        gap: 16px;
        margin-top: 28px;
      }

      .lawc-info-item {
        border-left: 2px solid #1f8964;
        padding-left: 14px;
      }

      .lawc-info-item-title {
        font-size: 14px;
        font-weight: 600;
        color: #212529;
        line-height: 20px;
      }

      .lawc-info-item-desc {
        font-size: 12px;
        color: #6c757d;
        line-height: 19.5px;
        margin-top: 3px;
      }

      .lawc-offcuts {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 14px;
        font-weight: 500;
        color: #1f8964;
        line-height: 20px;
        margin-top: 12px;
      }
      
      @media(max-width: 992px) {
        .lawc-how {
          padding: 23px 15px 14px;
          margin: 0 -14px -20px;
        }
        .lawc-info-heading {
          padding-bottom: 8px;
        }
        .lawc-info-list {
          margin-top: 16px;
        }
        .lawc-offcuts {
          font-size: 12px;
        }
      }

      /* ── BOTTOM BAR ── */
      .lawc-footer {
        background: #f8f9fa;
        border-top: 1px solid #dee2e6;
        border-radius: 0 0 12px 12px;
        padding: 18px 20px;
        box-shadow: 0 -4px 6px 0 rgba(0,0,0,0.08);
      }

      .lawc-footer__inner {
        display: flex;
        align-items: center;
        gap: 20px;
        width: 100%;
      }

      .lawc-product {
        display: flex;
        align-items: center;
        gap: 14px;
        flex: 1;
        min-width: 0;
      }

      .lawc-product-img {
        width: 70px;
        height: 70px;
        border-radius: 4px;
        object-fit: cover;
        flex-shrink: 0;
      }

      .lawc-product-text {
        display: flex;
        align-items: center;
        flex-grow: 1;
        justify-content: space-between;
        gap: 12px;
        min-width: 0;
      }

      .lawc-product-name {
        font-size: 18px;
        font-weight: 500;
        color: #212529;
      }

      .lawc-count {
        font-size: 18px;
        font-weight: 600;
        color: #1f8964;
        white-space: nowrap;
      }

      .lawc-cta {
        background: #1f8964;
        color: #fff;
        border: 1px solid #1f8964;
        border-radius: 4px;
        height: 70px;
        padding: 0 80px;
        font-size: 24px;
        font-weight: 700;
        cursor: pointer;
        white-space: nowrap;
        font-family: 'Archivo', sans-serif;
        transition: background 0.15s;
      }
      .lawc-cta#lawc-cta-btn {
        min-width: 320px;
      }

      .lawc-cta:hover { background: #197a55; }

      .lawc-cta.is-loading {
        opacity: 0.75;
        cursor: wait;
        pointer-events: none;
      }

      @media(max-width: 992px) {
        .lawc-footer {
          padding: 14px;
        }
        .lawc-footer__inner {
          gap: 16px;
        }
        .lawc-product {
          gap: 8px;
        }
        .lawc-product-text {
          display: block;
        }
        .lawc-product-img {
          width: 44px;
          height: 44px;
        }
        .lawc-cta#lawc-cta-btn {
          min-width: auto;
        }
        .lawc-cta {
          height: 56px;
          font-size: 16px;
          font-weight: 500;
          padding: 10px 17px;
        }
        .lawc-cta#s2-continue-btn {
          min-width: 142px;
        }
        .lawc-product-name {
          font-size: 14px;
          line-height: 22px;
          text-wrap: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .lawc-count {
          font-size: 14px;
          font-weight: 500;
          line-height: 18px;
          margin-top: 3px;
        }
      }

      /* ── STEP 2 ── */
      .lawc-s2-body {
        display: flex;
        gap: 18px;
      }

      /* Left sidebar */
      .lawc-s2-sidebar {
        width: 242px;
        padding-bottom: 24px;
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        gap: 0;
        overflow: hidden;
      }

      .lawc-s2-sidebar-title {
        color: #212529;
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
      }

      .lawc-s2-product {
        display: flex;
        align-items: center;
        gap: 14px;
        margin-top: 16px;
      }

      .lawc-s2-product-img {
        width: 70px;
        height: 70px;
        border-radius: 4px;
        object-fit: cover;
        flex-shrink: 0;
      }

      .lawc-s2-product-name {
        font-size: 16px;
        line-height: 24px;
        font-weight: 600;
        color: #212529;
      }

      #s2-sizes-list {
        display: grid;
        gap: 16px;
        margin-top: 16px;
      }

      .lawc-s2-size-item {
        display: flex;
        gap: 8px;
        align-items: flex-start;
      }

      .lawc-s2-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #1f8964;
        flex-shrink: 0;
        margin-top: 6px;
      }

      .lawc-s2-size-info {
        flex: 1;
        min-width: 0;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 12px;
      }

      .lawc-s2-size-label {
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
        color: #212529;
        white-space: nowrap;
      }

      .lawc-s2-size-qty {
        font-size: 14px;
        color: #212529;
        line-height: 20px;
      }

      .lawc-s2-size-dims {
        font-size: 14px;
        color: #212529;
        margin-top: 8px;
        line-height: 20px;
      }

      .lawc-s2-edit-btn {
        border: 1px solid #1f8964;
        border-radius: 8px;
        height: 38px;
        display: flex;
        align-self: flex-start;
        align-items: center;
        justify-content: center;
        gap: 4px;
        background: none;
        font-size: 14px;
        font-weight: 600;
        color: #1f8964;
        cursor: pointer;
        transition: background 0.15s;
        margin-top: 16px;
        padding: 5px 10px;
      }

      .lawc-s2-edit-btn:hover { background: #f0f8f4; }

      /* Right main area */
      .lawc-s2-main {
        flex: 1;
        min-width: 0;
        display: flex;
        flex-direction: column;
        gap: 18px;
      }

      .lawc-s2-question {
        font-size: 16px;
        font-weight: 600;
        color: #212529;
        text-align: center;
        line-height: 26px;
      }

      /* Option cards */
      .lawc-s2-options {
        display: flex;
        gap: 18px;
        align-items: stretch;
      }

      .lawc-plan-card {
        flex: 1;
        min-width: 0;
        border: 2px solid #dee2e6;
        border-radius: 14px;
        padding: 24px;
        cursor: pointer;
        transition: border-color 0.15s, box-shadow 0.15s;
        display: flex;
        flex-direction: column;
        gap: 16px;
        background: #fff;
      }

      .lawc-plan-card.selected {
        border-color: #1f8964;
        box-shadow: 0 0 0 5px #f1f8f5;
      }

      .lawc-plan-card-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .lawc-plan-label-wecutforyou {
        font-size: 12px;
        font-weight: 700;
        color: #1f8964;
        letter-spacing: 0.3px;
        line-height: 16px;
      }

      .lawc-plan-label-youcutyourself {
        font-size: 12px;
        font-weight: 700;
        color: #d89654;
        letter-spacing: 0.3px;
        line-height: 16px;
      }

      .lawc-radio {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        border: 1.5px solid #adb5bd;
        background: #fff;
        flex-shrink: 0;
        transition: border-color 0.15s, border-width 0.15s;
      }

      .lawc-plan-card.selected .lawc-radio {
        border-width: 8px;
        border-color: #1f8964;
      }

      .lawc-plan-title {
        font-size: 18px;
        font-weight: 700;
        color: #212529;
        line-height: 28px;
        min-height: 56px;
      }

      .lawc-plan-desc {
        font-size: 14px;
        color: #212529;
        line-height: 22.75px;
        margin-top: -8px;
      }

      .lawc-plan-desc strong {
        font-weight: 700;
      }

      .lawc-plan-price {
        font-size: 36px;
        font-weight: 800;
        color: #212529;
        line-height: 40px;
      }

      .lawc-plan-price-breakdown {
        display: flex;
        align-items: center;
        gap: 6px;
        flex-wrap: wrap;
        margin-top: 3px;
      }

      .lawc-plan-price-muted {
        font-size: 12px ;
        line-height: 15px;
        color: #627181;
      }

      .lawc-plan-price-muted span {
        font-size: 14px;
        line-height: 20px;
      }

      .lawc-plan-price-sep {
      }

      .lawc-plan-price-note {
        font-size: 14px;
        color: #6c757d;
        line-height: 20px;
        margin-top: 3px;
      }

      /* "You'll receive" section */
      .lawc-plan-receive {
        border-top: 1px solid #e9ecef;
        padding-top: 16px;
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .lawc-plan-receive-heading {
        font-size: 16px;
        color: #212529;
        line-height: 24px;
      }

      .lawc-plan-receive-tag {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .lawc-plan-receive-tag-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        flex-shrink: 0;
      }

      .lawc-plan-receive-tag-text {
        font-size: 14px;
        font-weight: 500;
        line-height: 22.75px;
      }

      .lawc-piece-list { display: flex; flex-direction: column; gap: 8px; }

      .lawc-piece-row {
        background: #f5faf8;
        border: 1px solid #d9eee6;
        border-radius: 8px;
        min-height: 38px;
        display: flex;
        align-items: center;
        padding: 0 10px;
        gap: 8px;
      }

      .lawc-piece-divider {
        text-align: center;
        line-height: 0;
      }

      .lawc-piece-row-orange {
        background: #faf7f5;
        border: 1px solid #eee0d9;
      }

      .lawc-piece-qty {
        font-size: 12px;
        font-weight: 700;
        color: #1f8964;
        flex-shrink: 0;
        line-height: 16px;
      }

      .lawc-piece-qty-orange { color: #be7933; }

      .lawc-piece-dims {
        flex: 1;
        font-size: 14px;
        font-weight: 600;
        color: #212529;
        line-height: 20px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .lawc-piece-price {
        font-size: 12px;
        font-weight: 600;
        color: #be7933;
        flex-shrink: 0;
        line-height: 16px;
      }

      .lawc-piece-offcut {
        font-size: 14px;
        font-weight: 600;
        color: #212529;
      }

      /* View Cutting Diagram banner */
      .lawc-diagram-banner {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-top: auto;
        border-radius: 14px;
        border: 1px solid #DEE2E6;
        background: #FFF;
        padding: 18px 20px;
        cursor: pointer;
        transition: .2s;
      }

      @media(hover:hover) {
        .lawc-diagram-banner:hover {
          border-color: #D9EEE6;
          background-color: #F5FAF8;
        }
      }

      .lawc-diagram-banner--mob {
        display: none;
      }

      .lawc-diagram-icon {
        width: 44px;
        height: 44px;
        border-radius: 14px;
        background: #e6f4f0;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        line-height: 0;
      }

      .lawc-diagram-text {
        text-align: left;
        flex: 1;
      }

      .lawc-diagram-title {
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
      }
      @media(hover:hover) {
        .lawc-diagram-title:hover {
          opacity: .7;
        }
      }

      .lawc-diagram-sub {
        font-size: 12px;
        font-weight: 500;
        color: #6c757d;
        line-height: 16px;
        margin-top: 3px;
      }

      @media(max-width: 992px) {
        .lawc-diagram-banner--desk {
          display: none;
        }
        .lawc-diagram-banner--mob {
          display: flex;
          gap: 5px;
          padding: 0;
          border-radius: 0;
          border: none;
        }
        .lawc-diagram-title {
          font-size: 14px;
          line-height: 22px;
          color: #1F8964;
          text-decoration: underline;
        }
        .lawc-diagram-sub {
          margin-top: 5px;
        }
        .lawc-s2-sidebar {
          position: relative;
          width: 100%;
          padding-top: 6px;
          padding-bottom: 0;
        }
        .lawc-s2-body {
          display: block;
        }
        .lawc-s2-product {
          margin-top: 14px;
          gap: 8px;
        }
        .lawc-s2-product-name {
          font-size: 14px;
          font-weight: 500;
          line-height: 22px;
        }
        .lawc-s2-size-desc {
          display: flex;
          gap: 12px;
        }
        .lawc-s2-size-dims {
          margin-top: 0;
        }
        .lawc-s2-edit-btn {
          position: absolute;
          margin: 0;
          right: 0;
          top: 0;
        }
        #s2-sizes-list {
          gap: 12px;
        }
        .lawc-s2-main {
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid #E9ECEF;
        }
        .lawc-s2-question {
          font-size: 14px;
        }
        .lawc-s2-main {
          gap: 16px;
        }
        .lawc-s2-options {
          flex-flow: column;
          gap: 14px;
        }
        .lawc-plan-title {
          min-height: auto;
          font-size: 16px;
        }
        .lawc-plan-desc {
          line-height: 24px;
          margin-top: -8px;
        }
        .lawc-plan-price {
          font-size: 32px;
          line-height: 38px;
        }
      }

      /* ── STEP 2B — CUTTING DIAGRAM ── */
      .lawc-diag-back-bar {
        position: sticky;
        top: -20px;
        background: #f8f9fa;
        border-bottom: 1px solid #dee2e6;
        height: 78px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: -20px -20px 0;
        cursor: pointer;
      }

      .lawc-diag-back-btn {
        display: flex;
        align-items: center;
        gap: 12px;
        background: none;
        border: none;
        cursor: pointer;
        font-size: 22px;
        font-weight: 500;
        color: #1f8964;
        font-family: 'Archivo', sans-serif;
        padding: 0;
      }

      .lawc-diag-header {
        margin-top: 20px;
        text-align: center;
      }

      .lawc-diag-title {
        font-size: 22px;
        font-weight: 500;
        color: #495057;
        line-height: 36px;
      }

      .lawc-diag-subtitle {
        font-size: 16px;
        font-weight: 700;
        color: #212529;
        line-height: 26px;
        margin-top: 8px;
      }

      .lawc-diag-stats {
        background: #f5faf8;
        border-radius: 14px;
        padding: 16px;
        display: flex;
        justify-content: space-between;
        margin-top: 24px;
      }

      .lawc-diag-stat {
        display: flex;
        flex: 1;
        align-items: center;
        gap: 8px;
      }

      .lawc-diag-stat-icon {
        width: 16px;
        height: 16px;
        flex-shrink: 0;
      }

      .lawc-diag-stat-info { display: flex; flex-direction: column; }

      .lawc-diag-stat-label {
        font-size: 14px;
        color: #6c757d;
        line-height: 17.5px;
      }

      .lawc-diag-stat-value {
        font-size: 20px;
        font-weight: 700;
        color: #212529;
        line-height: 28px;
      }

      /* Worktop slab section */
      .lawc-slab-section {
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin-top: 32px;
      }

      .lawc-slab-info { display: flex; flex-direction: column; gap: 6px; }

      .lawc-slab-name {
        font-size: 16px;
        font-weight: 600;
        color: #212529;
        line-height: 24px;
      }

      .lawc-slab-dims {
        font-size: 16px;
        color: #6c757d;
        line-height: 24px;
      }

      .lawc-slab-badge {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 7px;
        background: #e6f4f0;
        border-radius: 8px;
        font-size: 12px;
        font-weight: 600;
        color: #1f8964;
        line-height: 16px;
        align-self: flex-start;
      }

      .lawc-slab-diag-wrap {
        background: #f5faf8;
        border: 1px solid #e6f4f0;
        border-radius: 10px;
        padding: 12px;
        overflow: hidden;
      }

      .lawc-slab-legend {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 16px;
      }

      .lawc-slab-legend-item {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 14px;
        font-weight: 500;
        color: #5c6b77;
        line-height: 16px;
        white-space: nowrap;
      }

      .lawc-slab-legend-dot {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        flex-shrink: 0;
        border: 1px solid transparent;
      }

      .lawc-slab-legend-dot.offcut {
        background: #FEF3E8 !important;
      }

      .lawc-slab-canvas {
        border: 1px solid #dee2e6;
        border-radius: 10px;
        overflow: hidden;
        width: 100%;
      }

      .lawc-slab-row { display: flex; width: 100%; }

      .lawc-slab-segment {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        font-weight: 500;
        color: #fff;
        white-space: nowrap;
        overflow: hidden;
        padding: 4px;
        min-width: 0;
      }

      .lawc-slab-segment.offcut {
        color: #99a1af;
        font-weight: 400;
      }

      .lawc-diag-legend {
        display: flex;
        align-items: center;
        gap: 16px;
        flex-wrap: wrap;
      }

      .lawc-legend-item {
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 12px;
        color: #6c757d;
      }

      .lawc-legend-dot {
        width: 12px;
        height: 12px;
        border-radius: 3px;
        flex-shrink: 0;
      }

      @media(max-width: 992px) {
        .lawc-diag-title {
          font-size: 20px;
          line-height: 28px;
        }
        .lawc-diag-subtitle {
          font-size: 14px;
        }
        .lawc-diag-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px
        }
        .lawc-diag-back-bar {
          top: -16px;
          height: 56px;
          justify-content: flex-start;
          padding: 0 14px;
        }
        .lawc-diag-back-btn {
          font-size: 14px;
          gap: 8px;
        }
      }

      /* ── LOADING SPINNER ── */
      .lawc-loading {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 60px 20px;
        gap: 16px;
      }

      .lawc-spinner {
        width: 40px;
        height: 40px;
        border: 3px solid #e6f4f0;
        border-top-color: #1f8964;
        border-radius: 50%;
        animation: lawc-spin 0.8s linear infinite;
      }

      @keyframes lawc-spin { to { transform: rotate(360deg); } }

      .lawc-loading-text {
        font-size: 16px;
        color: #6c757d;
      }

      .lawc-s2-error {
        display: none;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 32px;
        padding: 60px 0;
        text-align: center;
      }

      .lawc-s2-error-copy {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
        max-width: 466px;
      }

      .lawc-s2-error-icon {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #ffeaed;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      .lawc-s2-error-title {
        font-size: 24px;
        font-weight: 500;
        line-height: 28px;
        color: #DC3545;
      }

      .lawc-s2-error-desc {
        font-size: 18px;
        line-height: 28px;
        color: #495057;
      }

      .lawc-s2-error-btn {
        height: 56px;
        padding: 4px 20px;
        border: 1px solid #1f8964;
        border-radius: 8px;
        background: #fff;
        color: #1f8964;
        font-family: 'Archivo', sans-serif;
        font-size: 18px;
        font-weight: 600;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        cursor: pointer;
        transition: background 0.15s;
      }

      .lawc-s2-error-btn:hover {
        background: #f0f8f4;
      }

      /* ── STEP 2 FOOTER ── */
      .lawc-footer-back {
        display: flex;
        align-items: center;
        gap: 10px;
        background: none;
        border: none;
        cursor: pointer;
        font-family: 'Archivo', sans-serif;
        font-size: 18px;
        font-weight: 600;
        color: #1f8964;
        padding: 0;
        flex-shrink: 0;
      }

      .lawc-footer-back:hover { text-decoration: underline; }

      .lawc-footer-total {
        flex: 1;
        text-align: right;
      }

      .lawc-footer-total-inner {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 8px;
      }

      .lawc-footer-total-label {
        font-size: 14px;
        color: #6c757d;
        line-height: 1;
      }

      .lawc-footer-total-price {
        font-size: 24px;
        font-weight: 800;
        color: #212529;
        line-height: 30px;
      }

      .lawc-footer-total-desc {
        font-size: 14px;
        font-weight: 600;
        color: #1f8964;
        line-height: 20px;
        margin-top: 4px;
      }

      @media(max-width: 992px) {
        .lawc-s2-error {
          padding-top: 45px;
          padding-bottom: 45px;
        }
        .lawc-s2-error-icon {
          width: 44px;
          height: 44px;
        }
        .lawc-s2-error-copy {
          max-width: 320px;
        }
        .lawc-s2-error-title {
          font-size: 20px;
          line-height: 24px;
        }
        .lawc-s2-error-desc br {
          display: none;
        }
        .lawc-s2-error-desc {
          font-size: 16px;
          line-height: 26px;
        }
        .lawc-s2-error-btn {
          height: 48px;
          font-size: 16px;
        }      
        .lawc-footer-total-label {
          display: none;
        }
        .lawc-footer-total-price {
          font-size: 20px;
          line-height: 24px;
        }
        .lawc-footer-total-desc {
          margin-top: 2px;
          font-weight: 500;
          line-height: 18px;
        }
      }

      /* ── STEP 3 ── */
      .lawc-s3-body {
      }

      .lawc-s3-heading {
        font-size: 16px;
        font-weight: 600;
        color: #212529;
        line-height: 26px;
        text-align: center;
      }

      .lawc-s3-options {
        display: flex;
        gap: 18px;
        align-items: stretch;
        margin-top: 16px;
      }

      .lawc-oiling-card {
        flex: 1;
        min-width: 0;
        border: 2px solid #dee2e6;
        border-radius: 14px;
        padding: 18px;
        cursor: pointer;
        transition: border-color 0.15s, box-shadow 0.15s;
        display: flex;
        flex-direction: column;
        gap: 16px;
        background: #fff;
      }

      .lawc-oiling-card.selected {
        border-color: #1f8964;
        box-shadow: 0 0 0 5px #f1f8f5;
      }

      .lawc-oiling-card-header {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 16px;
      }

      .lawc-oiling-card-header .lawc-radio {
        margin-top: 3px;
      }

      .lawc-oiling-title {
        font-size: 18px;
        font-weight: 700;
        color: #212529;
        line-height: 28px;
      }

      .lawc-oiling-price {
        font-size: 24px;
        font-weight: 800;
        color: #212529;
        line-height: 32px;
      }

      .lawc-oiling-desc {
        font-size: 14px;
        color: #495057;
        line-height: 22px;
        flex: 1;
      }

      .lawc-oiling-badges {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }

      .lawc-oiling-badge {
        display: inline-flex;
        align-items: center;
        padding: 2px 8px;
        border-radius: 100px;
        font-size: 12px;
        font-weight: 600;
        line-height: 16px;
        border: 1px solid;
      }

      .lawc-oiling-badge-green  { 
        background: #e6f4f0; 
        border-color: #c6e8dc; 
        color: #1f8964; 
      }
      .lawc-oiling-badge-yellow { 
        background: #fff4e5; 
        border-color: #fde68a; 
        color: #d97706; 
      }
      .lawc-oiling-badge-red    { 
        background: #fee2e2; 
        border-color: #fecaca; 
        color: #dc2626; 
      }

      @media(max-width: 992px) {
        .lawc-s3-heading br {
          display: none;
        }
        .lawc-s3-heading {
          font-size: 14px;
        }
        .lawc-s3-options {
          gap: 8px;
          flex-flow: column;
        }
        .lawc-oiling-desc {
          line-height: 24px;
        }
        .lawc-footer-back  {
          display: none;
        }
      }
    </style>
    
    <!-- TABS -->
    <div class="lawc-tabs">
      <div class="lawc-tab active" data-step="1">
        <div class="lawc-tab-num">1.</div>
        <div class="lawc-tab-label">Choose worktop size</div>
      </div>

      <div class="lawc-tab" data-step="2">
        <svg class="lawc-tab-divider" width="22" height="79" viewBox="0 0 22 79" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.440186 0L21.4402 39.0002L0.440186 78" stroke="#D3E9DF"/>
        </svg>
        <div class="lawc-tab-num">2.</div>
        <div class="lawc-tab-label">Choose cutting plan</div>
      </div>

      <div class="lawc-tab" data-step="3">
        <svg class="lawc-tab-divider" width="22" height="79" viewBox="0 0 22 79" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.440186 0L21.4402 39.0002L0.440186 78" stroke="#D3E9DF"/>
        </svg>
        <div class="lawc-tab-num">3.</div>
        <div class="lawc-tab-label">Choose Oiling</div>
      </div>
    </div>

    <div class="lawc-body">

      <!-- STEP 1 -->
      <div class="lawc-step active" id="step-1">

        <div class="lawc-banner">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M14 5.33333V3.33333C14 2.97971 13.8595 2.64057 13.6095 2.39052C13.3594 2.14048 13.0203 2 12.6667 2H3.33333C2.97971 2 2.64057 2.14048 2.39052 2.39052C2.14048 2.64057 2 2.97971 2 3.33333V5.33333" stroke="#212529" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14 10.6667V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10.6667" stroke="#212529" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2.66683 8H1.3335" stroke="#212529" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.66683 8H5.3335" stroke="#212529" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.6668 8H9.3335" stroke="#212529" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14.6668 8H13.3335" stroke="#212529" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          
          <span class="lawc-banner-text">
            Need full, un-cut worktops? 
            <span class="lawc-banner-link">
              Check our standard size list<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 12L10 8L6 4" stroke="#212529" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
          </span>
        </div>

        <div class="lawc-worktops-list" id="worktops-container"></div>

        <button class="lawc-add-btn" id="add-worktop-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M3.5 9.41992H15.5" stroke="#6C757D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.5 3.41992V15.4199" stroke="#6C757D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Add another worktop
        </button>

        <div class="lawc-how">
          <div class="lawc-info-heading">How it works</div>
          <div class="lawc-info-list">
            <div class="lawc-info-item">
              <div class="lawc-info-item-title">1. Measure each section</div>
              <div class="lawc-info-item-desc">Length = along the wall. Width = front to back. If you need more than one worktop, add them below.</div>
            </div>
            <div class="lawc-info-item">
              <div class="lawc-info-item-title">2. We find the best price</div>
              <div class="lawc-info-item-desc">We work out which standard worktops your sizes can be cut from, so you only pay for what you need.</div>
            </div>
            <div class="lawc-info-item">
              <div class="lawc-info-item-title">3. Cut or uncut - your choice</div>
              <div class="lawc-info-item-desc">Choose our cutting service and receive exactly what you need, or buy the standard worktops and cut them yourself.</div>
            </div>
          </div>
          <div class="lawc-offcuts">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <g clip-path="url(#clip0_1351_13353)">
                <path d="M8.00016 14.6654C11.6821 14.6654 14.6668 11.6806 14.6668 7.9987C14.6668 4.3168 11.6821 1.33203 8.00016 1.33203C4.31826 1.33203 1.3335 4.3168 1.3335 7.9987C1.3335 11.6806 4.31826 14.6654 8.00016 14.6654Z" stroke="#1F8964" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6 8.0013L7.33333 9.33464L10 6.66797" stroke="#1F8964" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
                <clipPath id="clip0_1351_13353">
                  <rect width="16" height="16" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            All offcuts included - we send every piece, nothing wasted.
          </div>
        </div>

      </div><!-- /step-1 -->

      <!-- STEP 2 — CHOOSE CUTTING PLAN -->
      <div class="lawc-step" id="step-2">
        <!-- Loading state -->
        <div class="lawc-loading" id="s2-loading">
          <div class="lawc-spinner"></div>
          <div class="lawc-loading-text">Finding the best cutting plan for you&hellip;</div>
        </div>

        <div class="lawc-s2-error" id="s2-error" style="display:none;">
          <div class="lawc-s2-error-copy">
            <div class="lawc-s2-error-icon">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="50" height="50" rx="25" fill="#FFE5E8"/>
                <path d="M24.985 28.9549C24.0066 28.9549 23.1914 28.2052 23.1096 27.2302L22.1818 16.1671C22.0839 15.0007 23.0043 14 24.1748 14H25.8203C26.9926 14 27.9135 15.0037 27.8129 16.1716L26.8601 27.2344C26.7762 28.2076 25.9618 28.9549 24.985 28.9549ZM24.7492 36C23.3432 36 22.2034 34.8602 22.2034 33.4541C22.2034 32.0481 23.3432 30.9083 24.7492 30.9083H25.2508C26.6568 30.9083 27.7966 32.0481 27.7966 33.4541C27.7966 34.8602 26.6568 36 25.2508 36H24.7492Z" fill="#DC3545"/>
              </svg>
            </div>
            <div class="lawc-s2-error-title">Something went wrong</div>
            <div class="lawc-s2-error-desc">We couldn't process your worktop configuration.<br> Please check your dimensions and try again.</div>
          </div>
          <button class="lawc-s2-error-btn" id="s2-error-edit-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 13.314L5 8.31396L10 3.31396" stroke="#1F8964" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Edit sizes
          </button>
        </div>

        <!-- Results (hidden until API returns) -->
        <div id="s2-results" style="display:none; flex-direction:column; gap:0;">
          <div class="lawc-s2-body">
            <!-- Left sidebar -->
            <div class="lawc-s2-sidebar">
              <div class="lawc-s2-sidebar-title">Your worktop sizes:</div>

              <div class="lawc-s2-product">
                <img class="lawc-s2-product-img" src="">
                <div class="lawc-s2-product-name"></div>
              </div>
              <div id="s2-sizes-list"></div>
              <button class="lawc-s2-edit-btn" id="s2-edit-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M9.99228 11.9908L5.99536 7.99384L9.99228 3.99692" stroke="#1F8964" stroke-width="1.33231" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Edit sizes
              </button>
            </div>
            <!-- Right main area -->
            <div class="lawc-s2-main">
              <div class="lawc-s2-question">
                Would you like us to <span style="color:#1F8964;">cut them for you</span>, or would you prefer to <span style="color:#D89654;">cut them yourself</span>?
              </div>
              <div class="lawc-s2-options">
                <!-- WE CUT FOR YOU -->
                <div class="lawc-plan-card selected" id="card-wecut" data-plan="wecut">
                  <div class="lawc-plan-card-header">
                    <div class="lawc-plan-label-wecutforyou">WE CUT FOR YOU</div>
                    <div class="lawc-radio"></div>
                  </div>
                  <div class="lawc-plan-title">Buy pre-cut to your exact sizes</div>
                  <div class="lawc-plan-desc">We cut your <strong>x pieces</strong> from x standard worktops and deliver them <strong>ready to install</strong>. All offcuts are included.</div>
                  <div class="lawc-plan-price-block">
                    <div class="lawc-plan-price" id="s2-wecut-price"></div>
                    <div class="lawc-plan-price-breakdown">
                      <span class="lawc-plan-price-muted" id="s2-wecut-material"></span>
                      <svg class="lawc-plan-price-sep" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M0.666748 4.66667H8.66675" stroke="#627181" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M4.66675 0.666672V8.66667" stroke="#627181" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      <span class="lawc-plan-price-muted" id="s2-wecut-cutting"></span>
                    </div>
                  </div>
                  <div class="lawc-plan-receive">
                    <div class="lawc-plan-receive-heading">You&rsquo;ll receive:</div>
                    <div class="lawc-plan-receive-tag">
                      <div class="lawc-plan-receive-tag-dot" style="background:#1f8964;"></div>
                      <div class="lawc-plan-receive-tag-text" style="color:#1f8964;">Pre-cut &middot; Ready to install worktops</div>
                    </div>
                    <div class="lawc-piece-list" id="s2-wecut-pieces"></div>
                  </div>
                  <!-- Open diagram Mobile -->
                  <div class="lawc-diagram-banner lawc-diagram-banner--mob">
                    <div class="lawc-diagram-text">
                      <div class="lawc-diagram-title" >View Cutting Diagram</div>
                      <div class="lawc-diagram-sub">See how we will cut your worktop</div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M7.49414 14.9884L12.4903 9.99224L7.49414 4.99609" stroke="#6C757D" stroke-width="1.66538" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                </div>
                <!-- YOU CUT YOURSELF -->
                <div class="lawc-plan-card" id="card-selfcut" data-plan="selfcut">
                  <div class="lawc-plan-card-header">
                    <div class="lawc-plan-label-youcutyourself">YOU CUT YOURSELF</div>
                    <div class="lawc-radio"></div>
                  </div>
                  <div class="lawc-plan-title">Buy standard worktops &amp; cut at home</div>
                  <div class="lawc-plan-desc">We send you <strong>2 standard worktops</strong> that all your sizes fit from. You cut them at home using the cutting diagram we provide.</div>
                  <div class="lawc-plan-price-block">
                    <div class="lawc-plan-price" id="s2-selfcut-price"></div>
                    <div class="lawc-plan-price-note">Material only</div>
                  </div>
                  <div class="lawc-plan-receive">
                    <div class="lawc-plan-receive-heading">You&rsquo;ll receive:</div>
                    <div class="lawc-plan-receive-tag">
                      <div class="lawc-plan-receive-tag-dot" style="background:#D97706;"></div>
                      <div class="lawc-plan-receive-tag-text" style="color:#D97706;">Uncut standard worktops</div>
                    </div>
                    <div class="lawc-piece-list" id="s2-selfcut-slabs"></div>
                  </div>

                  <!-- Open diagram Mobile -->
                  <div class="lawc-diagram-banner lawc-diagram-banner--mob">
                    <div class="lawc-diagram-text">
                      <div class="lawc-diagram-title">View Cutting Diagram</div>
                      <div class="lawc-diagram-sub">See exactly how you should cut your worktop(s)</div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M7.49414 14.9884L12.4903 9.99224L7.49414 4.99609" stroke="#6C757D" stroke-width="1.66538" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              <!-- Open diagram Desktop -->
              <div class="lawc-diagram-banner lawc-diagram-banner--desk" id="s2-view-diagram-btn">
                <div class="lawc-diagram-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <g clip-path="url(#clip0_1238_6336)">
                      <path d="M8.327 18.3192C7.88532 18.3192 7.46172 18.1437 7.1494 17.8314C6.83708 17.5191 6.66162 17.0955 6.66162 16.6538" stroke="#1F8964" stroke-width="1.66538" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M11.6577 1.66541C12.0994 1.66541 12.523 1.84086 12.8353 2.15318C13.1476 2.4655 13.3231 2.8891 13.3231 3.33079" stroke="#1F8964" stroke-width="1.66538" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M13.3231 18.3192H11.6577" stroke="#1F8964" stroke-width="1.66538" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M1.66528 8.32694V6.66156" stroke="#1F8964" stroke-width="1.66538" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M1.66528 3.33079C1.66528 2.8891 1.84074 2.4655 2.15306 2.15318C2.46538 1.84086 2.88898 1.66541 3.33067 1.66541" stroke="#1F8964" stroke-width="1.66538" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M16.6538 6.66156C17.0955 6.66156 17.5191 6.83702 17.8314 7.14934C18.1437 7.46166 18.3192 7.88526 18.3192 8.32694" stroke="#1F8964" stroke-width="1.66538" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M18.3191 11.6577V13.323" stroke="#1F8964" stroke-width="1.66538" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M18.3192 16.6538C18.3192 17.0955 18.1437 17.5191 17.8314 17.8314C17.5191 18.1437 17.0955 18.3192 16.6538 18.3192" stroke="#1F8964" stroke-width="1.66538" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M3.33067 13.323C2.88898 13.323 2.46538 13.1476 2.15306 12.8353C1.84074 12.5229 1.66528 12.0993 1.66528 11.6577" stroke="#1F8964" stroke-width="1.66538" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M6.66162 8.32694C6.66162 7.88526 6.83708 7.46166 7.1494 7.14934C7.46172 6.83702 7.88532 6.66156 8.327 6.66156H12.4905C12.7113 6.66156 12.9231 6.74929 13.0793 6.90545C13.2354 7.06161 13.3232 7.27341 13.3232 7.49425V11.6577C13.3232 12.0994 13.1477 12.523 12.8354 12.8353C12.5231 13.1476 12.0995 13.3231 11.6578 13.3231H7.49431C7.27347 13.3231 7.06167 13.2354 6.90551 13.0792C6.74935 12.923 6.66162 12.7112 6.66162 12.4904V8.32694Z" stroke="#1F8964" stroke-width="1.66538" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M6.66162 1.66541H8.327" stroke="#1F8964" stroke-width="1.66538" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_1238_6336">
                        <rect width="19.9846" height="19.9846" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div class="lawc-diagram-text">
                  <div class="lawc-diagram-title">View Cutting Diagram</div>
                  <div class="lawc-diagram-sub">See how we will cut your worktop</div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.49414 14.9884L12.4903 9.99224L7.49414 4.99609" stroke="#6C757D" stroke-width="1.66538" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div><!-- /step-2 -->

      <!-- STEP 2B — CUTTING DIAGRAM -->
      <div class="lawc-step" id="step-2b">
        <div class="lawc-diag-back-bar" id="diag-back-bar">
          <button class="lawc-diag-back-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 13.314L5 8.31396L10 3.31396" stroke="#1F8964" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Back to cutting plans
          </button>
        </div>
        <div class="lawc-diag-body">
          <div class="lawc-diag-header">
            <div class="lawc-diag-title">Cutting Diagram</div>
            <div class="lawc-diag-subtitle">We&rsquo;ve mapped out the cheapest and most efficient way to cut your worktops</div>
          </div>
          <div class="lawc-diag-stats" id="diag-stats"></div>
          <div id="diag-slabs"></div>
        </div>
      </div><!-- /step-2b -->

      <!-- STEP 3 — Choose Oiling -->
      <div class="lawc-step" id="step-3">
        <div class="lawc-s3-body">
          <div class="lawc-s3-heading">Save hours of messy DIY. <br> Get your worktops professionally oiled and sealed before delivery.</div>
          <div class="lawc-s3-options">

            <!-- UNTREATED -->
            <div class="lawc-oiling-card selected" id="card-untreated" data-finish="untreated" data-price="0">
              <div class="lawc-oiling-card-header">
                <div class="lawc-oiling-title">Untreated</div>
                <div class="lawc-radio"></div>
              </div>
              <div class="lawc-oiling-price">&pound;0.00</div>
              <div class="lawc-oiling-desc">Arrives sanded and completely natural. You will need to apply at least 3 coats of oil within 24 hours of installation.</div>
            </div>

            <!-- 3-COAT OILING -->
            <div class="lawc-oiling-card" id="card-oiling" data-finish="oiling" data-price="75">
              <div class="lawc-oiling-card-header">
                <div class="lawc-oiling-title">3-Coat Oiling</div>
                <div class="lawc-radio"></div>
              </div>
              <div class="lawc-oiling-price">&pound;75.00</div>
              <div class="lawc-oiling-desc">A 6-step process of sanding and oiling that leaves your worktop beautifully protected and ready to use straight away - no maintenance hassle. If the worktop fails the water test*, we'll refund 100% of the oiling fee.</div>
            </div>

            <!-- SMOOTHGUARD 5X -->
            <div class="lawc-oiling-card" id="card-smoothguard" data-finish="smoothguard" data-price="108">
              <div class="lawc-oiling-card-header">
                <div class="lawc-oiling-title">SmoothGuard 5X Oiling System</div>
                <div class="lawc-radio"></div>
              </div>
              <div class="lawc-oiling-price">&pound;108.00</div>
              <div class="lawc-oiling-desc">Engineered through a precise 12-step sequence alternating between detailed sanding and five distinct oil layers. Perfects the surface texture and sheen, backed by an 18-month maintenance warranty.</div>
              <div class="lawc-oiling-badges">
                <span class="lawc-oiling-badge lawc-oiling-badge-green">
                  18 Months Maintenance Free
                </span>
                <span class="lawc-oiling-badge lawc-oiling-badge-yellow">
                  Longevity+
                </span>
                <span class="lawc-oiling-badge lawc-oiling-badge-red">
                  Stain Resistance
                </span>
              </div>
            </div>

          </div>
        </div>
      </div><!-- /step-3 -->

    </div><!-- /lawc-body -->

    <!-- FOOTER -->
    <div class="lawc-footer" id="lawc-footer">
      <!-- Step 1 footer -->
      <div id="footer-s1" class="lawc-footer__inner">
        <div class="lawc-product">
          <img class="lawc-product-img" src="">
          <div class="lawc-product-text">
            <div class="lawc-product-name"></div>
            <div class="lawc-count" id="lawc-count-label">0 worktop added</div>
          </div>
        </div>
        <button class="lawc-cta" id="lawc-cta-btn">Find best price</button>
      </div>
      <!-- Step 2 footer -->
      <div id="footer-s2" class="lawc-footer__inner" style="display:none;">
        <button class="lawc-footer-back" id="s2-back-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 13.314L5 8.31396L10 3.31396" stroke="#1F8964" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Back
        </button>
        <div class="lawc-footer-total">
          <div class="lawc-footer-total-inner">
            <div class="lawc-footer-total-label">Total:</div>
            <div class="lawc-footer-total-price" id="s2-footer-price"></div>
          </div>
          <div class="lawc-footer-total-desc" id="s2-footer-desc"></div>
        </div>
        <button class="lawc-cta" id="s2-continue-btn">Continue</button>
      </div>
      <!-- Step 3 footer -->
      <div id="footer-s3" class="lawc-footer__inner" style="display:none;">
        <button class="lawc-footer-back" id="s3-back-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 13.314L5 8.31396L10 3.31396" stroke="#1F8964" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Back
        </button>
        <div class="lawc-footer-total">
          <div class="lawc-footer-total-inner">
            <div class="lawc-footer-total-label">Total:</div>
            <div class="lawc-footer-total-price" id="s3-footer-price"></div>
          </div>
          <div class="lawc-footer-total-desc" id="s3-footer-desc"></div>
        </div>
        <button class="lawc-cta" id="s3-add-to-basket-btn">Add to Basket</button>
      </div>
    </div>
  `;

  initModal();

  new Modal('lav-cutting', markup);

  _$('.lav-cutting').insertAdjacentHTML('beforebegin', /* html */`
    <div class="lav-cutting__close">
      <svg class="lav-cutting__close-desk" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M14.7059 12.102L23.2249 20.621C23.6057 21.0017 23.796 21.4776 23.796 22.0487C23.796 22.5881 23.6057 23.0482 23.2249 23.4289C22.8442 23.8096 22.3683 24 21.7972 24C21.2578 24 20.7977 23.8096 20.417 23.4289L11.898 14.9099L3.37904 23.4289C2.9983 23.8096 2.52238 24 1.95128 24C1.4119 24 0.951842 23.8096 0.571105 23.4289C0.190368 23.0482 0 22.5881 0 22.0487C0 21.4776 0.190368 21.0017 0.571105 20.621L9.09008 12.102L0.571105 3.58307C0.253825 3.17061 0.111047 2.72642 0.142775 2.2505C0.174503 1.74285 0.364872 1.31452 0.71388 0.965515C1.09462 0.584779 1.52295 0.378547 1.99887 0.346819C2.50652 0.315091 2.96657 0.457868 3.37904 0.775148L11.898 9.2941L20.417 0.775148C20.6708 0.457868 20.9722 0.235692 21.3212 0.108781C21.6703 -0.0181312 22.0351 -0.0339936 22.4159 0.0611902C22.7966 0.156374 23.1139 0.346819 23.3677 0.632371C23.6533 0.886194 23.8436 1.20347 23.9388 1.58421C24.034 1.96495 24.0181 2.32982 23.8912 2.67882C23.7643 3.02783 23.5422 3.32925 23.2249 3.58307L14.7059 12.102Z" fill="white"/>
      </svg>
      <svg class="lav-cutting__close-mob" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <g clip-path="url(#clip0_1786_1895)">
          <path d="M17.416 15.4683L21.712 19.6341C21.904 19.8203 22 20.053 22 20.3323C22 20.596 21.904 20.821 21.712 21.0072C21.52 21.1933 21.28 21.2864 20.992 21.2864C20.72 21.2864 20.488 21.1933 20.296 21.0072L16 16.8413L11.704 21.0072C11.512 21.1933 11.272 21.2864 10.984 21.2864C10.712 21.2864 10.48 21.1933 10.288 21.0072C10.096 20.821 10 20.596 10 20.3323C10 20.053 10.096 19.8203 10.288 19.6341L14.584 15.4683L10.288 11.3024C10.128 11.1007 10.056 10.8835 10.072 10.6508C10.088 10.4026 10.184 10.1931 10.36 10.0224C10.552 9.83625 10.768 9.7354 11.008 9.71989C11.264 9.70437 11.496 9.77419 11.704 9.92934L16 14.0952L20.296 9.92934C20.424 9.77419 20.576 9.66555 20.752 9.60349C20.928 9.54143 21.112 9.53367 21.304 9.58022C21.496 9.62676 21.656 9.71989 21.784 9.85953C21.928 9.98365 22.024 10.1388 22.072 10.325C22.12 10.5112 22.112 10.6896 22.048 10.8603C21.984 11.0309 21.872 11.1783 21.712 11.3024L17.416 15.4683Z" fill="white"/>
          <path d="M28 0.825684H4C2.067 0.825684 0.5 2.3452 0.5 4.21962V27.4923C0.5 29.3668 2.067 30.8863 4 30.8863H28C29.933 30.8863 31.5 29.3668 31.5 27.4923V4.21962C31.5 2.3452 29.933 0.825684 28 0.825684Z" stroke="white" stroke-width="0.75"/>
        </g>
        <defs>
          <clipPath id="clip0_1786_1895">
            <rect width="32" height="32" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </div>
  `)

  _$('.lav-cutting__close').addEventListener('click', () => {
    pushDataLayer('exp_pdp_cs_close', 'close', 'click', 'Custom Size Flow', _$('.lawc-tab.active .lawc-tab-label').innerText.trim());
    Modal.close();
  })

  function initModal() {
    class Modal {
      static list = []
      constructor(name, html) {
        if (!_$('.lav-modal')) {
          this.constructor.init()
        }

        if (this.constructor.list.find((item) => item.name === name)) {
          console.warn('Modal with this name already exists')
          return
        }

        this.el = document.createElement('div')
        this.el.classList.add('lav-modal__inner', name)
        this.name = name
        this.el.innerHTML = html

        _$('.lav-modal').insertAdjacentElement('beforeend', this.el)

        this.constructor.list.push(this)
      }

      static init() {
        document.body.insertAdjacentHTML(
          'beforeend',
          "<div class='lav-modal'></div>"
        )

        document.addEventListener('click', (e) => {
          if (
            e.target.classList.contains('lav-modal') ||
            e.target.closest('.lav-modal__close')
          )
            this.close()

          if (e.target.dataset.modal) {
            this.open(e.target.dataset.modal)
          } else if (e.target.closest('[data-modal]')) {
            this.open(e.target.closest('[data-modal]').dataset.modal)
          }
        })

        this.addStyles()
      }

      static open(modalName, cb) {
        document.body.classList.add('lav-modal-open')

        if (_$('.lav-modal__inner.active')) {
          _$('.lav-modal__inner.active').classList.remove('active')
        }

        _$(modalName).classList.add('active')

        if (typeof cb === 'function') cb()

        setTimeout(() => {
          _$('.lav-modal').classList.add('active')
        }, 100)
      }

      static close(cb) {
        document.body.classList.remove('lav-modal-open')

        _$('.lav-modal')?.classList.remove('active')

        if (typeof cb === 'function') cb()

        setTimeout(() => {
          _$('.lav-modal__inner.active')?.classList.remove('active')
        }, 400)
      }

      static addStyles() {
        const styles = /* css */ `
        .lav-modal {
          position: fixed;
          z-index: 9999;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          background: rgba(2,15,13,.5);
          transition: 0.35s;
          opacity: 0;
          pointer-events: none;
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
          max-width: 952px;
          border-radius: 12px;
          border: 1px solid #dee2e6;
          width: 100%;
          display: none;
          margin: auto;
          max-height: calc(100% - 3.5rem);
          overflow: hidden;
        }
        .lav-modal__inner.active {
          display: flex;
          flex-flow: column;
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
        .lav-cutting__close {
          position: absolute;
          pointer-events: auto;
          z-index: 99999999999999;
          cursor: pointer;
          padding: 6px;
          left: calc(50% + 510px);
          transform: translateX(-50%);
          top: 23px;
          transition: .3s;
        }
        .lav-cutting__close-desk {
          width: 24px;
        }
        .lav-cutting__close-mob {
          width: 31px;
          display: none;
        }
        @media(hover:hover) {
          .lav-cutting__close:hover {
            opacity: .85;
          }
        }
        @media(max-width: 992px) {
          .lav-cutting__close {
            left: initial;
            right: 8px;
            top: 2px;
          }
          .lav-modal.active .lav-cutting__close {
            display: block;
          }
          .lav-cutting__close-mob {
            display: block;
          }
          .lav-cutting__close-desk {
            display: none;
          }
          .lav-modal__inner {
            max-height: calc(100% - 1rem);
            margin: 48px 0.5rem 0.5rem;
          }
        }
      `

        const stylesEl = document.createElement('style')
        stylesEl.classList.add('exp-modal')
        stylesEl.innerHTML = styles
        document.head.appendChild(stylesEl)
      }
    }

    window.Modal = Modal
  }

  class WorktopCustomizer {
    // ─────────────────────────────────────────────────────────────────
    // CONSTRUCTOR
    // ─────────────────────────────────────────────────────────────────
    constructor(config) {
      config = config || {};

      // ── API config ──
      this.api = {
        url: 'https://cutter.houseofworktops.co.uk/optimize',
        base: 'https://cutter.houseofworktops.co.uk/',
        key: '#B719j@qwx&x',
        productId: config.productId || 68,
        apiUrl: 'https://houseofworktops.co.uk/index.php',
        loginRoute: 'api/login',
        loginUsername: 'cutter',
        loginToken: 'AecAT1DcODAECq634BN5pXe0luOnCZpCp7D2KJVQi4dP3cXwqqRxwzOTcUBtNEM7R1hF3cF2JNu7lqNaGqGeYtEOleY6Yr6AyjRY1ADJMCtH6x5ES8WmYhUUIThujkOPBVXNKphTFyuXzMHZUMHJc3Zr1FO5kEbm4WTh7F4g2HqkskEcxUyqTx5WauIKh2JoCsYvSDNUsKuEQcXs8IQZJJN3ijmX4Sku42bAv5SdQfxTilAAEQF3GDgNFP1yQeSI',
        cartRoute: 'api/cart/add',
        cartToken: ''
      };

      // ── State ──
      this.isDebug = config.isDebug === true;
      var debugNav = document.getElementById('wc-debug-nav');
      if (debugNav) debugNav.style.display = this.isDebug ? 'flex' : 'none';

      this.worktops = [
        { id: 1, length: 1200, width: 620, thickness: 40, qty: 1 },
        { id: 2, length: 1100, width: 800, thickness: 40, qty: 2 },
        { id: 3, length: 2000, width: 900, thickness: 40, qty: 1 },
        { id: 4, length: 2200, width: 900, thickness: 40, qty: 4 },
        { id: 5, length: 1500, width: 720, thickness: 40, qty: 1 }
      ];
      this.nextId = Math.max(...this.worktops.map(w => w.id)) + 1;
      this.currentStep = 1;
      this.planData = null;
      this.productConfig = null;
      this.availableThickness = []; // Default fallback
      this.maxDimensions = {}; // Will be populated from API
      this.isOiling = true; // Default fallback
      this.selectedPlan = 'wecut';
      this.selectedOiling = 'untreated';
      this.isCartSubmitting = false;
      this.OILINGS = {
        untreated: { name: 'Untreated', price: 0 },
        oiling: { name: '3-Coat Oiling', price: 0 },
        smoothguard: { name: 'SmoothGuard 5X Oiling System', price: 0 }
      };

      // this.fetchCartToken();
      this._bindEvents();
      this.prerenderProductInfo();
      this.renderWorktops();
      this.updateTabs(1);
      this.fetchPrepareConfig();

      // Debug bridge
      if (this.isDebug) {
        window.__wcdebug = this;
      } else {
        window.__wcdebug = undefined;
      }

      // Auto-step on load
      var s = this.isDebug ? (config.debugStep || window.__wcDebugStep) : null;
      if (s && s !== 'step-1') {
        if (s === 'step-2' || s === 'step-2b') {
          this.goToStep2();
          if (s === 'step-2b') {
            var poll = setInterval(() => { 
              if (this.planData) { clearInterval(poll); this.openDiagram(); }
            }, 50);
          }
        } else if (s === 'step-3') {
          this.goToStep2();
          var p3 = setInterval(() => { 
            if (this.planData) { clearInterval(p3); this.goToStep3(); } 
          }, 50);
        }
      }
    }

    debugLog() {
      if (!this.isDebug) return;
      console.log.apply(console, arguments);
    }

    debugWarn() {
      if (!this.isDebug) return;
      console.warn.apply(console, arguments);
    }

    // ─────────────────────────────────────────────────────────────────
    // RESET
    // ─────────────────────────────────────────────────────────────────
    reset() {
      var defaultThickness = this.getDefaultThickness();
      this.worktops = [{ id: 1, length: 0, width: 0, thickness: defaultThickness, qty: 1 }];
      this.nextId = Math.max(...this.worktops.map(w => w.id)) + 1;
      this.currentStep = 1;
      this.planData = null;
      this.selectedPlan = 'wecut';
      this.selectedOiling = 'untreated';
      this.OILINGS.oiling.price = 75;
      this.OILINGS.smoothguard.price = 108;
      // Reset finish price labels
      var oilingPrice = document.querySelector('#card-oiling .lawc-oiling-price');
      if (oilingPrice) oilingPrice.textContent = this.fmt(75);
      var sgPrice = document.querySelector('#card-smoothguard .lawc-oiling-price');
      if (sgPrice) sgPrice.textContent = this.fmt(108);
      // Go back to step 1
      this.renderWorktops();
      this.updateTabs(1);
      this.showStep('step-1');
      this.showFooter('footer-s1');
      document.querySelector('.lawc-tabs').style.display = '';
    }

    // ─────────────────────────────────────────────────────────────────
    // PREPARE CONFIG
    // ─────────────────────────────────────────────────────────────────
    prerenderProductInfo() {
      const productNameEl = document.querySelector('.lawc-product-name')
      const productImageEl = document.querySelector('.lawc-product-img')
      const productNameStep2El = document.querySelector('.lawc-s2-product-name')
      const productImageStep2El = document.querySelector('.lawc-s2-product-img')

      const title = document.querySelector('h1.h4')?.innerText || 'Worktop';
      const imgSrc = document.querySelector('.image-popup:not(.images-see-more) a')?.href || 'https://i0.wp.com/unleash-gods-dream.com/wp-content/uploads/2023/03/placeholder-image-blue-square.png?fit=500%2C500&ssl=1&w=640';

      if (productNameEl) {
        productNameEl.innerText = title
        productNameStep2El.innerText = title
      }

      if (productImageEl) {
        productImageEl.src = imgSrc
        productImageStep2El.src = imgSrc
      }
    }

    fetchPrepareConfig() {
      fetch('https://cutter.houseofworktops.co.uk/prepare', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-api-key': this.api.key },
        body: JSON.stringify({ product_id: this.api.productId })
      })
        .then(res => res.ok ? res.json() : Promise.reject('Prepare API error'))
        .then(data => {
          this.productConfig = data;
          
          // Extract available thickness values
          if (data.available_thickness) {
            this.availableThickness = Object.values(data.available_thickness).map(v => parseInt(v));
          }

          this.worktops.forEach(wt => {
            wt.thickness = this.normalizeWorktopThickness(wt);
          });
          
          // Store max dimensions
          if (data.max_dimensions) {
            this.maxDimensions = data.max_dimensions;
          }
          
          // Store oiling availability
          if (data.hasOwnProperty('isOiling')) {
            this.isOiling = data.isOiling;
          }
          
          // Update UI based on oiling availability
          this.updateOilingUI();
          
          // Re-render worktops with new thickness options
          this.renderWorktops();
        })
        .catch(err => {
          this.debugWarn('Failed to fetch prepare config:', err);
          // Continue with defaults
        });
    }

    updateOilingUI() {
      var step3Tab = document.querySelector('.lawc-tab[data-step="3"]');
      var continueBtn = document.getElementById('s2-continue-btn');
      
      if (!this.isOiling) {
        if (step3Tab) step3Tab.style.display = 'none';
        if (continueBtn) continueBtn.textContent = 'Add to basket';
      } else {
        if (step3Tab) step3Tab.style.display = '';
        if (continueBtn) continueBtn.textContent = 'Continue';
      }
    }

    getDefaultThickness() {
      return this.availableThickness.length ? this.availableThickness[0] : null;
    }

    normalizeWorktopThickness(worktop) {
      var thickness = parseInt(worktop && worktop.thickness);
      if (!this.availableThickness.length) {
        return Number.isFinite(thickness) ? thickness : null;
      }

      return this.availableThickness.includes(thickness)
        ? thickness
        : this.getDefaultThickness();
    }

    // ─────────────────────────────────────────────────────────────────
    // STEP 1 — RENDER WORKTOPS
    // ─────────────────────────────────────────────────────────────────
    validateStep1() {
      var container = document.getElementById('worktops-container');
      var firstError = null;
      var valid = true;

      // Sync all input values to worktop data before validation
      this.worktops.forEach(wt => {
        var card = container.querySelector(`[data-id="${wt.id}"]`);
        if (!card) return;
        
        var lengthInput = card.querySelector('input[data-field="length"]');
        var widthInput = card.querySelector('input[data-field="width"]');
        var qtyInput = card.querySelector('.lawc-qty-input');
        
        if (lengthInput) this.updateField(wt.id, 'length', lengthInput.value);
        if (widthInput) this.updateField(wt.id, 'width', widthInput.value);
        if (qtyInput) this.updateField(wt.id, 'qty', qtyInput.value);
      });

      // Clear previous errors
      container.querySelectorAll('.lawc-field-error').forEach(el => el.classList.remove('lawc-field-error'));
      container.querySelectorAll('.lawc-field-error-msg').forEach(el => el.remove());

      this.worktops.forEach(wt => {
        var card = container.querySelector(`[data-id="${wt.id}"]`);
        if (!card) return;

        // Get max dimensions for current thickness
        var thicknessSelect = card.querySelector('select[data-field="thickness"]');
        var currentThickness = thicknessSelect ? parseInt(thicknessSelect.value) : wt.thickness;
        var thicknessKey = currentThickness + 'mm';
        var maxDims = this.maxDimensions[thicknessKey] || { max_length: 0, max_width: 0 };

        [['length', 'Length', 10, maxDims.max_length], ['width', 'Width', 10, maxDims.max_width]].forEach(([field, label, min, max]) => {
          var input = card.querySelector(`input[data-field="${field}"]`);
          var wrap = input.closest('.lawc-input-wrap');
          var val = parseFloat(input.value);
          var msg = '';
          const icon = this.getSvg('field-error');
          if (!input.value || isNaN(val)) {
            msg = `Input worktop ${label} • Max ${max}mm`;
          } else if (val < min) {
            msg = `${label} must be at least ${min}mm`;
          } else if (val > max) {
            // msg = `${label} must be at most ${max}mm`;
            msg = `Enter a value up to ${max}mm`;
          }
          if (msg) {
            pushDataLayer('exp_pdp_cs_error_view', msg, 'view', 'Custom Size Flow', 'Choose worktop size');
            wrap.classList.add('lawc-field-error');
            var err = document.createElement('div');
            err.className = 'lawc-field-error-msg';
            err.innerHTML = icon + ' ' + msg;
            wrap.closest('.lawc-field').appendChild(err);
            if (!firstError) firstError = wrap;
            valid = false;
          }
        });

        // Validate thickness select
        var thicknessSelect = card.querySelector('select[data-field="thickness"]');
        var thickness = parseInt(thicknessSelect.value);
        const icon = this.getSvg('field-error');
        if (!thickness) {
          pushDataLayer('exp_pdp_cs_error_view', 'Thickness is required', 'view', 'Custom Size Flow', 'Choose worktop size');
          var thicknessWrap = thicknessSelect.closest('.lawc-select-wrap');
          thicknessWrap.classList.add('lawc-field-error');
          var err = document.createElement('div');
          err.className = 'lawc-field-error-msg';
          err.innerHTML = icon + ` Thickness is required`;
          thicknessWrap.closest('.lawc-field').appendChild(err);
          if (!firstError) firstError = thicknessWrap;
          valid = false;
        }

        // Validate qty input
        var qtyInput = card.querySelector('.lawc-qty-input');
        var qty = parseInt(qtyInput.value);
        if (!qty || qty < 1) {
          pushDataLayer('exp_pdp_cs_error_view', 'Qty is required', 'view', 'Custom Size Flow', 'Choose worktop size');
          var qtyHybrid = qtyInput.closest('.lawc-qty-hybrid');
          qtyHybrid.classList.add('lawc-field-error');
          var err = document.createElement('div');
          err.className = 'lawc-field-error-msg';
          err.innerHTML = cion + ` Qty is required`;
          qtyHybrid.closest('.lawc-field').appendChild(err);
          if (!firstError) firstError = qtyHybrid;
          valid = false;
        }
      });

      if (firstError) {
        firstError.closest('.lawc-card').scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return valid;
    }

    renderWorktops() {
      var container = document.getElementById('worktops-container');
      container.innerHTML = '';
      var canRemove = this.worktops.length >= 2;

      this.worktops.forEach((wt, index) => {
        wt.thickness = this.normalizeWorktopThickness(wt);

        var card = document.createElement('div');
        card.className = 'lawc-card';
        card.dataset.id = wt.id;

        var qtyOptions = '';
        for (var n = 1; n <= 10; n++) {
          qtyOptions += `<option value="${n}"${wt.qty === n ? ' selected' : ''}>${n}</option>`;
        }

        var thicknessOptions = '';
        this.availableThickness.forEach(t => {
          thicknessOptions += `<option value="${t}"${wt.thickness === t ? ' selected' : ''}>${t}mm</option>`;
        });

        // Get max dimensions for current thickness
        var thicknessKey = wt.thickness + 'mm';
        var maxDims = this.maxDimensions[thicknessKey] || { max_length: 0, max_width: 0 };

        card.innerHTML = /*html*/`
          <div class="lawc-card-header">
            <div class="lawc-card-title">
              <div class="lawc-dot"></div>
              <div class="lawc-card-name">Worktop ${index + 1}</div>
            </div>
            <button class="lawc-remove-btn" aria-label="Remove worktop ${index + 1}">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6.66675 7.3335V11.3335" stroke="#DC3545" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9.33325 7.3335V11.3335" stroke="#DC3545" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.6666 4V13.3333C12.6666 13.687 12.5261 14.0261 12.2761 14.2761C12.026 14.5262 11.6869 14.6667 11.3333 14.6667H4.66659C4.31296 14.6667 3.97382 14.5262 3.72378 14.2761C3.47373 14.0261 3.33325 13.687 3.33325 13.3333V4" stroke="#DC3545" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2 4H14" stroke="#DC3545" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.33325 4.00016V2.66683C5.33325 2.31321 5.47373 1.97407 5.72378 1.72402C5.97383 1.47397 6.31296 1.3335 6.66659 1.3335H9.33325C9.68687 1.3335 10.026 1.47397 10.2761 1.72402C10.5261 1.97407 10.6666 2.31321 10.6666 2.66683V4.00016" stroke="#DC3545" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
          <div class="lawc-card-fields">
            <div class="lawc-field">
              <div class="lawc-field-label">Length</div>
              <div class="lawc-input-wrap">
                <input type="text" inputmode="numeric" pattern="[0-9]*" value="${wt.length || ''}" min="1" max="${maxDims.max_length}" placeholder="0" data-field="length">
                <div class="lawc-unit">mm</div>
              </div>
              <div class="lawc-hint">Max ${maxDims.max_length}mm</div>
            </div>
            <div class="lawc-field">
              <div class="lawc-field-label">Width</div>
              <div class="lawc-input-wrap">
                <input type="text" inputmode="numeric" pattern="[0-9]*" value="${wt.width || ''}" min="1" max="${maxDims.max_width}" placeholder="0" data-field="width">
                <div class="lawc-unit">mm</div>
              </div>
              <div class="lawc-hint">Max ${maxDims.max_width}mm</div>
            </div>
            <div class="lawc-field lawc-field-thickness">
              <div class="lawc-field-label">Thickness</div>
              <div class="lawc-select-wrap">
                <select data-field="thickness">${thicknessOptions}</select>
              </div>
            </div>
            <div class="lawc-field lawc-field-qty">
              <div class="lawc-field-label">Qty</div>
              <div class="lawc-qty-hybrid">
                <input type="text" inputmode="numeric" pattern="[0-9]*" value="${wt.qty || 1}" min="1" max="100" data-field="qty" class="lawc-qty-input">
                <button type="button" class="lawc-qty-arrow-btn" tabindex="-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#495057" stroke-width="2">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </button>
                <select class="lawc-qty-select" tabindex="-1">${qtyOptions}</select>
              </div>
            </div>
          </div>`;

        var removeBtn = card.querySelector('.lawc-remove-btn');
        if (canRemove) {
          removeBtn.style.display = 'block';
        }
        removeBtn.addEventListener('click', () => {
          pushDataLayer('exp_pdp_cs_1_worktop_remove', 'Remove', 'click', 'Custom Size Flow', wt.id);
          this.removeWorktop(wt.id)
        });

        var keepOnlyDigits = function (inputEl) {
          inputEl.value = String(inputEl.value || '').replace(/\D+/g, '');
        };

        // Handle length/width inputs
        card.querySelectorAll('input[data-field="length"], input[data-field="width"]').forEach(input => {
          input.addEventListener('input', () => {
            keepOnlyDigits(input);
            var wrap = input.closest('.lawc-input-wrap');
            wrap.classList.remove('lawc-field-error');
            var msg = wrap.closest('.lawc-field').querySelector('.lawc-field-error-msg');
            if (msg) msg.remove();
          });

          input.addEventListener('click', () => {
            const type = input.dataset.field === 'length' ? 'Length' : 'Width';
            pushDataLayer('exp_pdp_cs_1_worktop_input', type, 'input', 'Custom Size Flow', wt.id);
          });
          
          input.addEventListener('blur', () => {
            this.updateField(wt.id, input.dataset.field, input.value);
          });
          
          input.addEventListener('change', () => {
            this.updateField(wt.id, input.dataset.field, input.value);
          });
        });

        // Handle quantity hybrid control
        var qtyInput = card.querySelector('.lawc-qty-input');
        var qtySelect = card.querySelector('.lawc-qty-select');
        var qtyHybrid = card.querySelector('.lawc-qty-hybrid');

        qtyInput.addEventListener('click', () => {
          const type = 'Quantity';
          pushDataLayer('exp_pdp_cs_1_worktop_input', type, 'input', 'Custom Size Flow', wt.id);
        });

        qtyInput.addEventListener('input', () => {
          keepOnlyDigits(qtyInput);
          qtyHybrid.classList.remove('lawc-field-error');
          var msg = qtyHybrid.closest('.lawc-field').querySelector('.lawc-field-error-msg');
          if (msg) msg.remove();
          var value = parseInt(qtyInput.value) || 1;
          this.updateField(wt.id, 'qty', value);
          // Sync select if value is in range 1-10
          if (value >= 1 && value <= 10) {
            qtySelect.value = value;
          }
        });

        qtySelect.addEventListener('change', () => {
          var value = parseInt(qtySelect.value);
          qtyInput.value = value;
          this.updateField(wt.id, 'qty', value);
          qtyHybrid.classList.remove('lawc-field-error');
          var msg = qtyHybrid.closest('.lawc-field').querySelector('.lawc-field-error-msg');
          if (msg) msg.remove();
        });

        let isDisableOpen = false;

        card.querySelectorAll('select').forEach(sel => {
          const fieldName = sel.dataset.field === 'thickness' ? 'Thickness' : 'Quantity';
          sel.addEventListener('change', () => {
            isDisableOpen = true;
            setTimeout(() => {
              isDisableOpen = false;
            }, 500);
            pushDataLayer('exp_pdp_cs_1_worktop_dropdown_select', fieldName, 'click', 'Custom Size Flow', wt.id);
            var selectWrap = sel.closest('.lawc-select-wrap');
            if (!selectWrap) return; // Skip if not in select-wrap (e.g., qty select)
            selectWrap.classList.remove('lawc-field-error');
            var msg = selectWrap.closest('.lawc-field').querySelector('.lawc-field-error-msg');
            if (msg) msg.remove();
            var field = sel.dataset.field;
            this.updateField(wt.id, field, parseInt(sel.value));
            
            // Re-render if thickness changed (to update max dimensions)
            if (field === 'thickness') {
              this.renderWorktops();
            }
          });
          sel.addEventListener('click', () => {
            if (isDisableOpen) return;
            pushDataLayer('exp_pdp_cs_1_worktop_dropdown_open', fieldName, 'click', 'Custom Size Flow', wt.id);
          });
        });

        container.appendChild(card);
      });

      this.updateCountLabel();
    }

    updateField(id, field, value) {
      var wt = this.worktops.find(w => w.id === id);
      if (!wt) return;
      wt[field] = field === 'qty' ? parseInt(value) : parseFloat(value);
      this.updateCountLabel();
    }

    removeWorktop(id) {
      this.worktops = this.worktops.filter(w => w.id !== id);
      this.renderWorktops();
    }

    addWorktop() {
      var defaultThickness = this.getDefaultThickness();
      // Ensure nextId is always ahead of max existing id
      var maxId = Math.max(...this.worktops.map(w => w.id), 0);
      if (this.nextId <= maxId) {
        this.nextId = maxId + 1;
      }
      this.worktops.push({ id: this.nextId++, length: '', width: '', thickness: defaultThickness, qty: 1 });
      this.renderWorktops();
      var container = document.getElementById('worktops-container');
      var last = container.lastElementChild;
      if (last) last.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    updateCountLabel() {
      var total = this.worktops.reduce((sum, w) => sum + (parseInt(w.qty) || 1), 0);
      document.getElementById('lawc-count-label').textContent =
        total === 1 ? '1 worktop added' : total + ' worktops added';
    }

    // ─────────────────────────────────────────────────────────────────
    // TAB STATE
    // ─────────────────────────────────────────────────────────────────
    updateTabs(activeStep) {
      var activeTab = null;
      document.querySelectorAll('.lawc-tab').forEach(tab => {
        var n = parseInt(tab.dataset.step);
        var numEl = tab.querySelector('.lawc-tab-num');
        tab.classList.remove('active', 'done');
        if (n === activeStep) {
          tab.classList.add('active');
          numEl.innerHTML = n + '.';
          activeTab = tab;
        } else if (n < activeStep) {
          tab.classList.add('done');
          numEl.innerHTML = this.getSvg('check');
        } else {
          numEl.innerHTML = n + '.';
        }
      });
      
      // Scroll active tab into view on mobile
      if (activeTab) {
        setTimeout(() => {
          activeTab.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        }, 50);
      }
    }

    // ─────────────────────────────────────────────────────────────────
    // STEP / FOOTER VISIBILITY
    // ─────────────────────────────────────────────────────────────────
    showStep(stepId) {
      document.querySelectorAll('.lawc-step').forEach(el => el.classList.remove('active'));
      document.getElementById(stepId).classList.add('active');
    }

    showFooter(footerId) {
      if (footerId) {
        document.getElementById('lawc-footer').removeAttribute('style')
      } else {
        document.getElementById('lawc-footer').style.display = 'none'
      }

      ['footer-s1', 'footer-s2', 'footer-s3'].forEach(id => {
        document.getElementById(id).style.display = footerId && id === footerId ? 'flex' : 'none';
      });
    }

    resetStep2State() {
      document.getElementById('s2-loading').style.display = 'flex';
      document.getElementById('s2-results').style.display = 'none';
      document.getElementById('s2-error').style.display = 'none';
    }

    // ─────────────────────────────────────────────────────────────────
    // API — FETCH CUTTING PLANS
    // ─────────────────────────────────────────────────────────────────
    fetchCuttingPlans(onSuccess, onError) {
      var payload = {
        product_id: this.api.productId,
        pieces: this.worktops.map(w => ({ length: w.length, width: w.width, thickness: w.thickness, qty: w.qty }))
      };

      fetch(this.api.url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-api-key': this.api.key },
        body: JSON.stringify(payload)
      })
        .then(res => {
          if (!res.ok) throw new Error('API error ' + res.status);
          return res.json();
        })
        .then(json => {
          var mapped = this.mapApiResponse(json);
          if (!mapped) throw new Error('Invalid optimize response');
          onSuccess(mapped);
        })
        .catch(err => {
          this.debugWarn('Failed to fetch optimize plans:', err);
          if (typeof onError === 'function') onError(err);
        });
    }

    mapApiResponse(apiData) {
      var results = apiData.results;
      if (!results || !results.length) return null;

      var totalSlabCost = 0, totalCutCost = 0, totalCutCount = 0;
      var allSlabs = [], allPieces = [];
      var oiling3Total = 0, oiling5Total = 0;

      results.forEach(r => {
        var cost = r.cost || {};
        totalSlabCost += cost.slab_cost || 0;
        totalCutCost  += cost.cut_cost  || 0;
        totalCutCount += cost.total_cuts || 0;

        (r.slabs || []).forEach((s, si) => {
          var layout = (r.layouts || [])[si];
          var slabPieces = Array.isArray(s.pieces)
            ? s.pieces.map(piece => ({
                length: piece.length || piece.length_mm || null,
                width: piece.width || piece.width_mm || null,
                thickness: piece.thickness || piece.thickness_mm || s.thickness_mm || null,
                qty: parseInt(piece.qty) || 1
              }))
            : [];

          slabPieces.forEach(piece => {
            for (var i = 0; i < piece.qty; i++) {
              allPieces.push({
                length: piece.length,
                width: piece.width,
                thickness: piece.thickness
              });
            }
          });

          allSlabs.push({
            productOptionId: s.product_option_id || null,
            productOptionValueId: s.product_option_value_id || null,
            label: s.name,
            length: s.length_mm,
            width: s.width_mm,
            thickness: s.thickness_mm,
            pieces: slabPieces,
            price: s.price,
            cutCount: s.cut_count || 0,
            svgUrl: layout ? (this.api.base + layout.svg_url) : null,
            legendPieces: layout && Array.isArray(layout.pieces)
              ? layout.pieces.map(piece => ({
                  legend: piece.legend || '',
                  color: piece.color || '#1F8964'
                }))
              : []
          });
        });

        ((r.addons && r.addons.breakdown) || []).forEach(b => {
          var qty = b.quantity || 1;
          oiling3Total += (b.oiling_3_cost || 0) * qty;
          oiling5Total += (b.oiling_5_cost || 0) * qty;
        });
      });

      totalSlabCost = parseFloat(totalSlabCost.toFixed(2));
      totalCutCost = parseFloat(totalCutCost.toFixed(2));

      return {
        wecut: { totalPrice: parseFloat((totalSlabCost + totalCutCost).toFixed(2)), materialPrice: totalSlabCost, cuttingTotal: totalCutCost, totalCuts: totalCutCount, pieces: allPieces },
        selfcut: { totalPrice: totalSlabCost, slabs: allSlabs },
        diagram: { materialPrice: totalSlabCost, cuttingTotal: totalCutCost, slabCount: allSlabs.length, totalCuts: totalCutCount, slabs: allSlabs },
        oiling3Total: parseFloat(oiling3Total.toFixed(2)),
        oiling5Total: parseFloat(oiling5Total.toFixed(2))
      };
    }

    fmt(num) {
      return '\u00a3' + parseFloat(num).toFixed(2);
    }

    // ─────────────────────────────────────────────────────────────────
    // SVG LIBRARY
    // ─────────────────────────────────────────────────────────────────
    getSvg(name) {
      var svgs = {
        'field-error': `
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="13" height="13" rx="6.5" fill="#FFCED3"/>
            <path d="M6.49495 7.93814C6.16944 7.93814 5.89881 7.68752 5.87386 7.36297L5.57657 3.49603C5.53527 2.95874 5.96009 2.5 6.49896 2.5C7.03859 2.5 7.46368 2.95997 7.42121 3.49793L7.11593 7.36425C7.09035 7.68825 6.81996 7.93814 6.49495 7.93814ZM6.5 10.5C5.98871 10.5 5.5678 10.0855 5.5678 9.57424C5.5678 9.06295 5.98871 8.64847 6.5 8.64847C7.01129 8.64847 7.4322 9.06295 7.4322 9.57424C7.4322 10.0855 7.01129 10.5 6.5 10.5Z" fill="#DC3545"/>
          </svg>
          `,
        // Checkmark used on completed tabs
        'check': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#1F8964" stroke="#1F8964" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.8335 12L10.8335 15L16.8335 9" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

        // Left chevron — back buttons & edit btn (16×16, green)
        'chevron-left': '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 13.314L5 8.31396L10 3.31396" stroke="#1F8964" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',

        // Right chevron — diagram banner arrow (20×20, grey)
        'chevron-right': '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.49414 14.9884L12.4903 9.9923L7.49414 4.99615" stroke="#6C757D" stroke-width="1.66538" stroke-linecap="round" stroke-linejoin="round"/></svg>',

        // Plus icon — "Add another worktop" button (18×18, grey) and selfcut divider
        'plus': '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3.5 9.41992H15.5" stroke="#212529" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.5 3.41992V15.4199" stroke="#212529" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/></svg>',

        // Plus icon — small separator in wecut price breakdown (10×10, muted)
        'plus-small': '<svg class="lawc-plan-price-sep" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M0.666748 4.66667H8.66675" stroke="#627181" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.66675 0.666672V8.66667" stroke="#627181" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/></svg>',

        // Circle with checkmark — "All offcuts included" note (16×16, green)
        'check-circle': '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="#1f8964" stroke-width="1.5"/><path d="M5 8l2.5 2.5L11 5.5" stroke="#1f8964" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',

        // Panel/worktop icon — banner (16×16, dark)
        'banner-panel': '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M14 5.33333V3.33333C14 2.97971 13.8595 2.64057 13.6095 2.39052C13.3594 2.14048 13.0203 2 12.6667 2H3.33333C2.97971 2 2.64057 2.14048 2.39052 2.39052C2.14048 2.64057 2 2.97971 2 3.33333V5.33333" stroke="#212529" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 10.6667V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10.6667" stroke="#212529" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.66683 8H1.3335" stroke="#212529" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.66683 8H5.3335" stroke="#212529" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.6668 8H9.3335" stroke="#212529" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.6668 8H13.3335" stroke="#212529" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/></svg>',

        // Cutting diagram icon — green, used in "View Cutting Diagram" button (20×20)
        'cutting-diagram-green': '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><g clip-path="url(#lawc-cdg)"><path d="M8.327 18.3192C7.88532 18.3192 7.46172 18.1437 7.1494 17.8314C6.83708 17.5191 6.66162 17.0955 6.66162 16.6538" stroke="#1F8964" stroke-width="1.66538" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.6577 1.66541C12.0994 1.66541 12.523 1.84086 12.8353 2.15318C13.1476 2.4655 13.3231 2.8891 13.3231 3.33079" stroke="#1F8964" stroke-width="1.66538" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.3231 18.3192H11.6577" stroke="#1F8964" stroke-width="1.66538" stroke-linecap="round" stroke-linejoin="round"/><path d="M1.66528 8.32694V6.66156" stroke="#1F8964" stroke-width="1.66538" stroke-linecap="round" stroke-linejoin="round"/><path d="M1.66528 3.33079C1.66528 2.8891 1.84074 2.4655 2.15306 2.15318C2.46538 1.84086 2.88898 1.66541 3.33067 1.66541" stroke="#1F8964" stroke-width="1.66538" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.6538 6.66156C17.0955 6.66156 17.5191 6.83702 17.8314 7.14934C18.1437 7.46166 18.3192 7.88526 18.3192 8.32694" stroke="#1F8964" stroke-width="1.66538" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.3191 11.6577V13.323" stroke="#1F8964" stroke-width="1.66538" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.3192 16.6538C18.3192 17.0955 18.1437 17.5191 17.8314 17.8314C17.5191 18.1437 17.0955 18.3192 16.6538 18.3192" stroke="#1F8964" stroke-width="1.66538" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.33067 13.323C2.88898 13.323 2.46538 13.1476 2.15306 12.8353C1.84074 12.5229 1.66528 12.0993 1.66528 11.6577" stroke="#1F8964" stroke-width="1.66538" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.66162 8.32694C6.66162 7.88526 6.83708 7.46166 7.1494 7.14934C7.46172 6.83702 7.88532 6.66156 8.327 6.66156H12.4905C12.7113 6.66156 12.9231 6.74929 13.0793 6.90545C13.2354 7.06161 13.3232 7.27341 13.3232 7.49425V11.6577C13.3232 12.0994 13.1477 12.523 12.8354 12.8353C12.5231 13.1476 12.0995 13.3231 11.6578 13.3231H7.49431C7.27347 13.3231 7.06167 13.2354 6.90551 13.0792C6.74935 12.923 6.66162 12.7112 6.66162 12.4904V8.32694Z" stroke="#1F8964" stroke-width="1.66538" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.66162 1.66541H8.327" stroke="#1F8964" stroke-width="1.66538" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="lawc-cdg"><rect width="19.9846" height="19.9846" fill="white"/></clipPath></defs></svg>',

        // Cutting diagram icon — orange, used in selfcut "You\'ll receive" section (20×20)
        'cutting-diagram-orange': '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><g clip-path="url(#lawc-cdo)"><path d="M8.327 18.3192C7.88532 18.3192 7.46172 18.1437 7.1494 17.8314C6.83708 17.5191 6.66162 17.0955 6.66162 16.6538" stroke="#BE7933" stroke-width="1.66538" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.6577 1.66537C12.0994 1.66537 12.523 1.84083 12.8353 2.15315C13.1476 2.46547 13.3231 2.88907 13.3231 3.33076" stroke="#BE7933" stroke-width="1.66538" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.3231 18.3192H11.6577" stroke="#BE7933" stroke-width="1.66538" stroke-linecap="round" stroke-linejoin="round"/><path d="M1.66528 8.32691V6.66153" stroke="#BE7933" stroke-width="1.66538" stroke-linecap="round" stroke-linejoin="round"/><path d="M1.66528 3.33076C1.66528 2.88907 1.84074 2.46547 2.15306 2.15315C2.46538 1.84083 2.88898 1.66537 3.33067 1.66537" stroke="#BE7933" stroke-width="1.66538" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.6538 6.66153C17.0955 6.66153 17.5191 6.83699 17.8314 7.14931C18.1437 7.46163 18.3192 7.88523 18.3192 8.32691" stroke="#BE7933" stroke-width="1.66538" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.3191 11.6577V13.3231" stroke="#BE7933" stroke-width="1.66538" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.3192 16.6538C18.3192 17.0955 18.1437 17.5191 17.8314 17.8314C17.5191 18.1437 17.0955 18.3192 16.6538 18.3192" stroke="#BE7933" stroke-width="1.66538" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.33067 13.3231C2.88898 13.3231 2.46538 13.1476 2.15306 12.8353C1.84074 12.523 1.66528 12.0994 1.66528 11.6577" stroke="#BE7933" stroke-width="1.66538" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.66162 8.32691C6.66162 7.88523 6.83708 7.46163 7.1494 7.14931C7.46172 6.83699 7.88532 6.66153 8.327 6.66153H12.4905C12.7113 6.66153 12.9231 6.74926 13.0793 6.90542C13.2354 7.06158 13.3232 7.27338 13.3232 7.49422V11.6577C13.3232 12.0994 13.1477 12.523 12.8354 12.8353C12.5231 13.1476 12.0995 13.3231 11.6578 13.3231H7.49431C7.27347 13.3231 7.06167 13.2353 6.90551 13.0792C6.74935 12.923 6.66162 12.7112 6.66162 12.4904V8.32691Z" stroke="#BE7933" stroke-width="1.66538" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.66162 1.66537H8.327" stroke="#BE7933" stroke-width="1.66538" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="lawc-cdo"><rect width="19.9846" height="19.9846" fill="white"/></clipPath></defs></svg>',

        // Stat: Material cost — layers/stack icon (16×16, green)
        'stat-material': '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><g clip-path="url(#lawc-sm)"><path d="M8.54685 1.45218C8.37328 1.373 8.18472 1.33203 7.99395 1.33203C7.80317 1.33203 7.61461 1.373 7.44104 1.45218L1.73211 4.05017C1.6139 4.1023 1.5134 4.18767 1.44284 4.29589C1.37228 4.40411 1.33472 4.53051 1.33472 4.6597C1.33472 4.78889 1.37228 4.9153 1.44284 5.02352C1.5134 5.13174 1.6139 5.21711 1.73211 5.26923L7.4477 7.87389C7.62127 7.95306 7.80983 7.99404 8.00061 7.99404C8.19139 7.99404 8.37994 7.95306 8.55351 7.87389L14.2691 5.27589C14.3873 5.22377 14.4878 5.1384 14.5584 5.03018C14.6289 4.92196 14.6665 4.79556 14.6665 4.66636C14.6665 4.53717 14.6289 4.41077 14.5584 4.30255C14.4878 4.19433 14.3873 4.10896 14.2691 4.05683L8.54685 1.45218Z" stroke="#1F8964" stroke-width="1.33231" stroke-linecap="round" stroke-linejoin="round"/><path d="M1.33228 7.99377C1.33196 8.12119 1.36819 8.24602 1.43668 8.35346C1.50516 8.46091 1.60302 8.54646 1.71865 8.59997L7.44756 11.2046C7.62023 11.2828 7.80759 11.3233 7.99714 11.3233C8.18668 11.3233 8.37405 11.2828 8.54671 11.2046L14.2623 8.60664C14.3802 8.55364 14.4802 8.46747 14.55 8.35865C14.6197 8.24983 14.6564 8.12305 14.6553 7.99377" stroke="#1F8964" stroke-width="1.33231" stroke-linecap="round" stroke-linejoin="round"/><path d="M1.33228 11.3246C1.33196 11.452 1.36819 11.5768 1.43668 11.6843C1.50516 11.7917 1.60302 11.8773 1.71865 11.9308L7.44756 14.5354C7.62023 14.6136 7.80759 14.6541 7.99714 14.6541C8.18668 14.6541 8.37405 14.6136 8.54671 14.5354L14.2623 11.9374C14.3802 11.8844 14.4802 11.7983 14.55 11.6895C14.6197 11.5806 14.6564 11.4539 14.6553 11.3246" stroke="#1F8964" stroke-width="1.33231" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="lawc-sm"><rect width="15.9877" height="15.9877" fill="white"/></clipPath></defs></svg>',

        // Stat: Cutting cost — price tag icon (16×16, green)
        'stat-cutting': '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><g clip-path="url(#lawc-sc)"><path d="M2.56462 5.74219C2.46739 5.30422 2.48232 4.84878 2.60802 4.41811C2.73373 3.98744 2.96614 3.59548 3.28371 3.27857C3.60128 2.96167 3.99372 2.73008 4.42466 2.60528C4.85559 2.48047 5.31106 2.4665 5.74883 2.56464C5.98978 2.1878 6.32172 1.87768 6.71405 1.66286C7.10638 1.44805 7.54647 1.33545 7.99376 1.33545C8.44105 1.33545 8.88115 1.44805 9.27348 1.66286C9.66581 1.87768 9.99775 2.1878 10.2387 2.56464C10.6771 2.46607 11.1334 2.47998 11.565 2.60509C11.9966 2.7302 12.3896 2.96243 12.7074 3.28019C13.0251 3.59796 13.2574 3.99093 13.3825 4.42255C13.5076 4.85417 13.5215 5.31041 13.4229 5.74886C13.7998 5.98981 14.1099 6.32175 14.3247 6.71408C14.5395 7.10641 14.6521 7.5465 14.6521 7.99379C14.6521 8.44108 14.5395 8.88117 14.3247 9.2735C14.1099 9.66583 13.7998 9.99777 13.4229 10.2387C13.5211 10.6765 13.5071 11.132 13.3823 11.5629C13.2575 11.9938 13.0259 12.3863 12.709 12.7038C12.3921 13.0214 12.0001 13.2538 11.5694 13.3795C11.1388 13.5052 10.6833 13.5202 10.2454 13.4229C10.0047 13.8012 9.67252 14.1127 9.27952 14.3285C8.88653 14.5442 8.44543 14.6574 7.9971 14.6574C7.54876 14.6574 7.10767 14.5442 6.71467 14.3285C6.32167 14.1127 5.98947 13.8012 5.74883 13.4229C5.31106 13.5211 4.85559 13.5071 4.42466 13.3823C3.99372 13.2575 3.60128 13.0259 3.28371 12.709C2.96614 12.3921 2.73373 12.0001 2.60802 11.5695C2.48232 11.1388 2.46739 10.6834 2.56462 10.2454C2.18488 10.0051 1.8721 9.67261 1.65535 9.27894C1.43861 8.88527 1.32495 8.44318 1.32495 7.99379C1.32495 7.5444 1.43861 7.10231 1.65535 6.70864C1.8721 6.31497 2.18488 5.98251 2.56462 5.74219Z" stroke="#1F8964" stroke-width="1.33231" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.32935 7.99377H7.99396" stroke="#1F8964" stroke-width="1.33231" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.66162 10.6585V6.32847C6.66162 5.88678 6.83708 5.46318 7.1494 5.15087C7.46172 4.83855 7.88532 4.66309 8.327 4.66309C8.76869 4.66309 9.19229 4.83855 9.50461 5.15087C9.81693 5.46318 9.99239 5.88678 9.99239 6.32847" stroke="#1F8964" stroke-width="1.33231" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.32935 10.6584H9.99242" stroke="#1F8964" stroke-width="1.33231" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="lawc-sc"><rect width="15.9877" height="15.9877" fill="white"/></clipPath></defs></svg>',

        // Stat: Worktops (slabs) — copy/overlap icon (16×16, green)
        'stat-worktops': '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><g clip-path="url(#lawc-sw)"><path d="M6.66165 14.6554C6.3083 14.6554 5.96943 14.5151 5.71957 14.2652C5.46971 14.0153 5.32935 13.6765 5.32935 13.3231" stroke="#1F8964" stroke-width="1.33231" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.6585 14.6554H9.32617" stroke="#1F8964" stroke-width="1.33231" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.6584 2.66458C10.6584 2.31123 10.518 1.97235 10.2682 1.7225C10.0183 1.47264 9.67946 1.33228 9.32611 1.33228H2.66458C2.31123 1.33228 1.97235 1.47264 1.7225 1.7225C1.47264 1.97235 1.33228 2.31123 1.33228 2.66458V9.32611C1.33228 9.67946 1.47264 10.0183 1.7225 10.2682C1.97235 10.518 2.31123 10.6584 2.66458 10.6584H4.66304C4.83971 10.6584 5.00915 10.5882 5.13408 10.4633C5.25901 10.3384 5.32919 10.1689 5.32919 9.99226V6.6615C5.32919 6.30815 5.46956 5.96927 5.71942 5.71942C5.96927 5.46956 6.30815 5.32919 6.6615 5.32919H9.99226C10.1689 5.32919 10.3384 5.25901 10.4633 5.13408C10.5882 5.00915 10.6584 4.83971 10.6584 4.66304V2.66458Z" stroke="#1F8964" stroke-width="1.33231" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.323 5.32922C13.6763 5.32922 14.0152 5.46959 14.2651 5.71945C14.5149 5.9693 14.6553 6.30818 14.6553 6.66153" stroke="#1F8964" stroke-width="1.33231" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.6553 9.32617V10.6585" stroke="#1F8964" stroke-width="1.33231" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.6553 13.3231C14.6553 13.6765 14.5149 14.0153 14.2651 14.2652C14.0152 14.5151 13.6763 14.6554 13.323 14.6554" stroke="#1F8964" stroke-width="1.33231" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="lawc-sw"><rect width="15.9877" height="15.9877" fill="white"/></clipPath></defs></svg>',

        // Stat: Total cuts — dashes/lines icon (16×16, green)
        'stat-cuts': '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><g clip-path="url(#lawc-stc)"><path d="M13.9893 5.32918V3.33072C13.9893 2.97737 13.8489 2.63849 13.5991 2.38864C13.3492 2.13878 13.0103 1.99841 12.657 1.99841H3.33084C2.97749 1.99841 2.63861 2.13878 2.38876 2.38864C2.1389 2.63849 1.99854 2.97737 1.99854 3.33072V5.32918" stroke="#1F8964" stroke-width="1.33231" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.9893 10.6584V12.6569C13.9893 13.0103 13.8489 13.3491 13.5991 13.599C13.3492 13.8488 13.0103 13.9892 12.657 13.9892H3.33084C2.97749 13.9892 2.63861 13.8488 2.38876 13.599C2.1389 13.3491 1.99854 13.0103 1.99854 12.6569V10.6584" stroke="#1F8964" stroke-width="1.33231" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.66458 7.99377H1.33228" stroke="#1F8964" stroke-width="1.33231" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.66141 7.99377H5.3291" stroke="#1F8964" stroke-width="1.33231" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.6585 7.99377H9.32617" stroke="#1F8964" stroke-width="1.33231" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.6553 7.99377H13.323" stroke="#1F8964" stroke-width="1.33231" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="lawc-stc"><rect width="15.9877" height="15.9877" fill="white"/></clipPath></defs></svg>'
      };
      return svgs[name] || '';
    }

    // ─────────────────────────────────────────────────────────────────
    // STEP 2 — RENDER
    // ─────────────────────────────────────────────────────────────────
    renderStep2(data) {
      this.planData = data;

      if (data.oiling3Total) {
        this.OILINGS.oiling.price = data.oiling3Total;
        document.querySelector('#card-oiling .lawc-oiling-price').textContent = this.fmt(data.oiling3Total);
      }
      if (data.oiling5Total) {
        this.OILINGS.smoothguard.price = data.oiling5Total;
        document.querySelector('#card-smoothguard .lawc-oiling-price').textContent = this.fmt(data.oiling5Total);
      }

      var sizesList = document.getElementById('s2-sizes-list');
      sizesList.innerHTML = '';
      this.worktops.forEach((wt, i) => {
        var item = document.createElement('div');
        item.className = 'lawc-s2-size-item';
        item.innerHTML = /*html*/`
          <div class="lawc-s2-dot"></div>
          <div class="lawc-s2-size-info">
            <div class="lawc-s2-size-desc">
              <div class="lawc-s2-size-label">Worktop ${i + 1}:</div>
              <div class="lawc-s2-size-dims">${wt.length || '?'} × ${wt.width || '?'} × ${wt.thickness || '?'}mm</div>
            </div>
            <div class="lawc-s2-size-qty">Qty: ${parseInt(wt.qty) || 1}</span>
          </div>`;
        sizesList.appendChild(item);
      });

      var wc = data.wecut;
      document.getElementById('s2-wecut-price').textContent = this.fmt(wc.totalPrice);
      document.getElementById('s2-wecut-material').innerHTML = `<span>${this.fmt(wc.materialPrice)}</span>` + ' Material';
      document.getElementById('s2-wecut-cutting').innerHTML = `<span>${this.fmt(wc.cuttingTotal)}</span>` + ' Cutting (' + wc.totalCuts + ' cuts)';

      var wecutPieces = document.getElementById('s2-wecut-pieces');
      wecutPieces.innerHTML = '';
      
      // Group pieces by dimensions
      var groupedPieces = {};
      (wc.pieces || []).forEach(p => {
        var key = `${p.length}×${p.width}×${p.thickness}`;
        if (!groupedPieces[key]) {
          groupedPieces[key] = { length: p.length, width: p.width, thickness: p.thickness, qty: 0 };
        }
        groupedPieces[key].qty++;
      });
      
      Object.values(groupedPieces).forEach(p => {
        var row = document.createElement('div');
        row.className = 'lawc-piece-row';
        row.innerHTML = /*html*/`<span class="lawc-piece-qty">${p.qty}×</span><span class="lawc-piece-dims">${p.length} × ${p.width} × ${p.thickness}mm</span>`;
        wecutPieces.appendChild(row);
      });
      var offcutRow = document.createElement('div');
      offcutRow.className = 'lawc-piece-row';
      offcutRow.innerHTML = '<span class="lawc-piece-offcut">+ offcuts</span>';
      wecutPieces.appendChild(offcutRow);

      var sc = data.selfcut;
      document.getElementById('s2-selfcut-price').textContent = this.fmt(sc.totalPrice);

      // Update dynamic descriptions
      var totalSlabCount = sc.slabs.length;
      var uniqueSlabCount = new Set(sc.slabs.map(s => s.label)).size;
      var pieceCount = wc.pieces.length;
      var slabWord = totalSlabCount === 1 ? 'standard worktop' : 'standard worktops';
      var pieceWord = pieceCount === 1 ? 'piece' : 'pieces';
      
      var wecutDesc = document.querySelector('#card-wecut .lawc-plan-desc');
      wecutDesc.innerHTML = `We cut your <strong>${pieceCount} ${pieceWord}</strong> from ${totalSlabCount} ${slabWord} and deliver them <strong>ready to install</strong>. All offcuts are included.`;
      
      var selfcutDesc = document.querySelector('#card-selfcut .lawc-plan-desc');
      selfcutDesc.innerHTML = `We send you <strong>${totalSlabCount} ${slabWord}</strong> that all your sizes fit from. You cut them at home using the cutting diagram we provide.`;

      var selfcutSlabs = document.getElementById('s2-selfcut-slabs');
      selfcutSlabs.innerHTML = '';
      
      // Group slabs by label
      var groupedSlabs = {};
      sc.slabs.forEach(slab => {
        if (!groupedSlabs[slab.label]) {
          groupedSlabs[slab.label] = { label: slab.label, qty: 0, price: slab.price, totalPrice: 0 };
        }
        groupedSlabs[slab.label].qty++;
        groupedSlabs[slab.label].totalPrice += slab.price;
      });
      
      Object.values(groupedSlabs).forEach(slab => {
        var row = document.createElement('div');
        row.className = 'lawc-piece-row lawc-piece-row-orange';
        row.innerHTML = /*html*/`<span class="lawc-piece-qty lawc-piece-qty-orange">${slab.qty}×</span><span class="lawc-piece-dims">${slab.label}</span><span class="lawc-piece-price">${this.fmt(slab.totalPrice)}</span>`;
        selfcutSlabs.appendChild(row);
      });

      selfcutSlabs.insertAdjacentHTML('beforeend', /*html*/`
        <div class="lawc-piece-divider">${this.getSvg('plus')}</div>
        <div class="lawc-piece-row lawc-piece-row-diagram lawc-piece-row-orange">
          ${this.getSvg('cutting-diagram-orange')}
          <span class="lawc-piece-dims">Cutting Diagram</span>
        </div>`);

      this.refreshStep2Footer();
      document.getElementById('s2-loading').style.display = 'none';
      document.getElementById('s2-error').style.display = 'none';
      document.getElementById('s2-results').style.display = 'flex';
      this.showFooter('footer-s2');
      this.updatePlanSelection();
    }

    renderStep2Error() {
      pushDataLayer('exp_pdp_cs_error_view', 'Something went wrong', 'view', 'Custom Size Flow', 'Choose cutting plan');
      this.planData = null;
      document.querySelector('.lawc-tabs').style.display = '';
      document.getElementById('s2-loading').style.display = 'none';
      document.getElementById('s2-results').style.display = 'none';
      document.getElementById('s2-error').style.display = 'flex';
      this.showFooter(null);
    }

    refreshStep2Footer() {
      if (!this.planData) return;
      var price = this.selectedPlan === 'wecut' ? this.planData.wecut.totalPrice : this.planData.selfcut.totalPrice;
      var desc = '';
      if (this.selectedPlan === 'wecut') {
        var pieceCount = this.planData.wecut.pieces.length;
        desc = `${pieceCount}x Pre-cut worktops`;
      } else {
        var slabCount = this.planData.selfcut.slabs.length;
        desc = `${slabCount}x Uncut worktops`;
      }
      document.getElementById('s2-footer-price').textContent = this.fmt(price);
      document.getElementById('s2-footer-desc').textContent = desc;
    }

    updatePlanSelection() {
      var wecutCard = document.getElementById('card-wecut');
      var selfcutCard = document.getElementById('card-selfcut');
      // var viewDiagramBtn = document.getElementById('s2-view-diagram-btn');
      if (this.selectedPlan === 'wecut') {
        wecutCard.classList.add('selected');
        selfcutCard.classList.remove('selected');
        // viewDiagramBtn.style.display = 'flex';
      } else {
        wecutCard.classList.remove('selected');
        selfcutCard.classList.add('selected');
        // viewDiagramBtn.style.display = 'none';
      }
      this.refreshStep2Footer();
    }

    selectPlan(plan) {
      this.selectedPlan = plan;
      this.updatePlanSelection();
    }

    // ─────────────────────────────────────────────────────────────────
    // STEP 2B — CUTTING DIAGRAM RENDER
    // ─────────────────────────────────────────────────────────────────
    renderDiagram() {
      if (!this.planData) return;
      var d = this.planData.diagram;

      var statsEl = document.getElementById('diag-stats');
      statsEl.innerHTML = '';
      
      var stats = [
        { icon: this.getSvg('stat-material'), label: 'Material', value: this.fmt(d.materialPrice), show: true },
        { icon: this.getSvg('stat-cutting'), label: 'Cutting', value: this.fmt(d.cuttingTotal), show: this.selectedPlan === 'wecut' },
        { icon: this.getSvg('stat-worktops'), label: 'Worktops', value: d.slabCount, show: true },
        { icon: this.getSvg('stat-cuts'), label: 'Total Cuts', value: d.totalCuts, show: this.selectedPlan === 'wecut' }
      ];
      
      stats.filter(stat => stat.show).forEach(stat => {
        var div = document.createElement('div');
        div.className = 'lawc-diag-stat';
        div.innerHTML = /*html*/`
          <div class="lawc-diag-stat-icon">${stat.icon}</div>
          <div class="lawc-diag-stat-info">
            <div class="lawc-diag-stat-label">${stat.label}</div>
            <div class="lawc-diag-stat-value">${stat.value}</div>
          </div>`;
        statsEl.appendChild(div);
      });

      var slabsEl = document.getElementById('diag-slabs');
      slabsEl.innerHTML = '';

      d.slabs.forEach((slab, si) => {
        var section = document.createElement('div');
        section.className = 'lawc-slab-section';

        // ${slab.cuts ? `<span class="lawc-slab-badge">${slab.cuts} cut${slab.cuts !== 1 ? 's' : ''}</span>` : ''}
        
        var infoHtml = /*html*/`
          <div class="lawc-slab-info">
            <span class="lawc-slab-name">Standard Worktop ${si + 1}</span>
            <span class="lawc-slab-dims">${slab.label} &middot; ${this.fmt(slab.price)}</span>
            <span class="lawc-slab-badge">${slab.cutCount} cut${slab.cutCount !== 1 ? 's' : ''}</span>
          </div>`;

        var legendHtml = '';
        if (slab.legendPieces && slab.legendPieces.length) {
          var legendPieces = slab.legendPieces.filter(piece => !/offcut/i.test(piece.legend || ''));
          legendPieces.push({ legend: 'Offcut', color: '#F5EFE6' });
          legendHtml = '<div class="lawc-slab-legend">';
          legendPieces.forEach(piece => {
            var isOffcut = /offcut/i.test(piece.legend || '');
            var dotClass = isOffcut ? 'lawc-slab-legend-dot offcut' : 'lawc-slab-legend-dot';
            var dotStyle = isOffcut ? '' : ` style="background:${piece.color};"`;
            legendHtml += `<div class="lawc-slab-legend-item"><span class="${dotClass}"${dotStyle}></span>${piece.legend}</div>`;
          });
          legendHtml += '</div>';
        }

        var canvasHtml = slab.svgUrl
          ? `<div class="lawc-slab-diag-wrap"><img src="${slab.svgUrl}" alt="Cutting layout for ${slab.label}" style="width:100%;display:block;border-radius:6px;"></div>`
          : '<div class="lawc-slab-diag-wrap lawc-slab-diag-placeholder">Cutting diagram not available in preview mode.</div>';

        section.innerHTML = infoHtml + legendHtml + canvasHtml;
        slabsEl.appendChild(section);
      });
    }

    // ─────────────────────────────────────────────────────────────────
    // NAVIGATION
    // ─────────────────────────────────────────────────────────────────
    goToStep2() {
      this.currentStep = 2;
      this.updateTabs(2);
      this.showStep('step-2');
      this.showFooter('footer-s2');
      // Clear footer during loading
      document.getElementById('s2-footer-price').textContent = '';
      document.getElementById('s2-footer-desc').textContent = '';
      this.resetStep2State();
      this.fetchCuttingPlans(
        data => this.renderStep2(data),
        () => this.renderStep2Error()
      );
    }

    goBackToStep1() {
      this.currentStep = 1;
      this.updateTabs(1);
      this.showStep('step-1');
      this.showFooter('footer-s1');
    }

    openDiagram() {
      this.renderDiagram();
      this.showStep('step-2b');
      this.showFooter('footer-s2');
      document.getElementById('s2-back-btn').lastChild.textContent = ' Back to cutting plans';
      document.querySelector('.lawc-tabs').style.display = 'none';
      document.querySelector('#step-2b').scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    closeDiagram() {
      this.showStep('step-2');
      this.showFooter('footer-s2');
      document.getElementById('s2-back-btn').lastChild.textContent = ' Back';
      document.querySelector('.lawc-tabs').style.display = '';
    }

    goToStep3() {
      this.currentStep = 3;
      this.updateTabs(3);
      this.showStep('step-3');
      this.showFooter('footer-s3');
      this.selectedOiling = 'untreated';
      this.updateOilingSelection();
    }

    goBackToStep2() {
      this.currentStep = 2;
      this.updateTabs(2);
      this.showStep('step-2');
      this.showFooter('footer-s2');
    }

    goToStep(stepNum) {
      if (stepNum === 1 && this.currentStep > 1) {
        this.goBackToStep1();
      } else if (stepNum === 2 && this.currentStep > 2) {
        this.goBackToStep2();
      }
    }

    // ─────────────────────────────────────────────────────────────────
    // STEP 3 — Oiling SELECTION
    // ─────────────────────────────────────────────────────────────────
    selectOiling(oilingType) {
      this.selectedOiling = oilingType;
      this.updateOilingSelection();
    }

    updateOilingSelection() {
      ['untreated', 'oiling', 'smoothguard'].forEach(f => {
        var card = document.getElementById('card-' + f);
        var radio = card.querySelector('.lawc-radio');
        if (f === this.selectedOiling) {
          card.classList.add('selected');
          radio.style.borderWidth = '8px';
          radio.style.borderColor = '#1f8964';
        } else {
          card.classList.remove('selected');
          radio.style.borderWidth = '1.5px';
          radio.style.borderColor = '#adb5bd';
        }
      });
      this.refreshStep3Footer();
    }

    refreshStep3Footer() {
      if (!this.planData) return;
      var basePrice = this.selectedPlan === 'wecut' ? this.planData.wecut.totalPrice : this.planData.selfcut.totalPrice;
      var oilingCost = this.OILINGS[this.selectedOiling].price || 0;
      document.getElementById('s3-footer-price').textContent = this.fmt(parseFloat((basePrice + oilingCost).toFixed(2)));
      var planDesc = '';
      if (this.selectedPlan === 'wecut') {
        var pieceCount = this.planData.wecut.pieces.length;
        planDesc = `${pieceCount}x Pre-cut worktops`;
      } else {
        var slabCount = this.planData.selfcut.slabs.length;
        planDesc = `${slabCount}x Uncut worktops`;
      }
      var oilingDesc = this.selectedOiling !== 'untreated' ? ` · With ${this.OILINGS[this.selectedOiling].name}` : '';
      document.getElementById('s3-footer-desc').textContent = planDesc + oilingDesc;
    }

    _getCartSlabGroups() {
      if (!this.planData || !this.planData.selfcut || !Array.isArray(this.planData.selfcut.slabs)) {
        return [];
      }

      var grouped = {};
      this.planData.selfcut.slabs.forEach(slab => {
        if (!slab.productOptionId || !slab.productOptionValueId) return;
        var key = slab.productOptionId + ':' + slab.productOptionValueId;
        if (!grouped[key]) {
          grouped[key] = {
            productOptionId: slab.productOptionId,
            productOptionValueId: slab.productOptionValueId,
            qty: 0,
            pieces: []
          };
        }
        grouped[key].qty += 1;

        var slabPieces = Array.isArray(slab.pieces) ? slab.pieces : [];
        slabPieces.forEach(piece => {
          grouped[key].pieces.push({
            length: piece.length || null,
            width: piece.width || null,
            thickness: piece.thickness || slab.thickness || null,
            qty: piece.qty
          });
        });
      });

      return Object.values(grouped);
    }

    async fetchCartToken() {
      var loginParams = new URLSearchParams({
        route: this.api.loginRoute
      });
      var loginUrl = this.api.apiUrl + '?' + loginParams.toString();
      var loginKey = this.api.loginToken;
      if (!loginKey) {
        throw new Error('Missing loginToken for API login');
      }

      var body = new URLSearchParams({
        username: this.api.loginUsername,
        key: loginKey
      });

      var res = await fetch(loginUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
        body: body.toString()
      });

      var text = await res.text();
      var json = null;
      try { json = JSON.parse(text); } catch (_) {}

      if (!res.ok) {
        var statusMsg = (json && (json.error || json.message)) || ('Login API error ' + res.status);
        throw new Error(statusMsg);
      }

      var token = json && json.api_token;
      if (!token) {
        var errMsg = (json && (json.error || json.message)) || 'Login API did not return api_token';
        throw new Error(errMsg);
      }

      this.api.cartToken = token;
      return token;
    }

    setAddToCartLoading(isLoading) {
      var buttons = [
        document.getElementById('s3-add-to-basket-btn'),
        document.getElementById('s2-continue-btn')
      ].filter(Boolean);

      buttons.forEach(btn => {
        btn.disabled = isLoading;
        btn.classList.toggle('is-loading', isLoading);
        if (isLoading) {
          btn.dataset.loadingRestoreLabel = btn.textContent;
          btn.textContent = 'Adding...';
        } else {
          btn.textContent = btn.dataset.loadingRestoreLabel || btn.textContent;
        }
      });
    }

    async addToBasket() {
      if (!this.planData || this.isCartSubmitting) return;

      this.isCartSubmitting = true;
      this.setAddToCartLoading(true);

      try {
        var apiToken = this.api.cartToken;
        if (!apiToken) {
          apiToken = await this.fetchCartToken();
        }

        var basePrice = this.selectedPlan === 'wecut' ? this.planData.wecut.totalPrice : this.planData.selfcut.totalPrice;
        var oilingCost = this.OILINGS[this.selectedOiling].price || 0;
        var total = parseFloat((basePrice + oilingCost).toFixed(2));
        var cartSlabGroups = this._getCartSlabGroups();
        console.log('cartSlabGroups', cartSlabGroups)

        if (!cartSlabGroups.length) {
          throw new Error('Missing product option data in /optimize response.');
        }

        var params = new URLSearchParams();
        var totalQty = cartSlabGroups.reduce((sum, item) => sum + item.qty, 0);
        params.append('product_id', String(this.api.productId));
        params.append('quantity', String(totalQty));

        cartSlabGroups.forEach(group => {
          params.append(`option[${group.productOptionId}]`, String(group.productOptionValueId));
          params.append(`opqty[${group.productOptionId}][${group.productOptionValueId}]`, String(group.qty));

          if (this.selectedOiling === 'oiling') {
            params.append(`oiling_3_[${group.productOptionValueId}]`, 'yes');
          } else if (this.selectedOiling === 'smoothguard') {
            params.append(`oiling_5_[${group.productOptionValueId}]`, 'yes');
          }

          if (this.selectedPlan === 'wecut') {
            let currentIndex = 0;
            group.pieces.forEach((piece, pieceIndex) => {
              const isMain = pieceIndex === 0;
              const keyName = isMain ? 'cut_to_size_' : 'offcut_';

              for (let i = 0; i < piece.qty; i++) {
                if (i > 0) {
                  currentIndex++;
                }
                const index = isMain ? '' : `[${currentIndex}]`

                params.append(`${keyName}[${group.productOptionValueId}]${index}[size][length]`, String(piece.length || 0));
                params.append(`${keyName}[${group.productOptionValueId}]${index}[size][width]`, String(piece.width || 0));
                params.append(`${keyName}[${group.productOptionValueId}]${index}[size][thickness]`, String(piece.thickness || 0));
            
                if (!isMain) {
                  if (this.selectedOiling === 'oiling') {
                    params.append(`offcut_oiling_3_[${group.productOptionValueId}]${index}`, 'yes');
                  } else if (this.selectedOiling === 'smoothguard') {
                    params.append(`offcut_oiling_5_[${group.productOptionValueId}]${index}`, 'yes');
                  }
                }
              }

              currentIndex++;
            })
          }
        });

        var requestUrlParams = new URLSearchParams({
          route: this.api.cartRoute,
          api_token: apiToken
        });
        var requestUrl = this.api.apiUrl + '?' + requestUrlParams.toString();

        var res = await fetch(requestUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
          body: params.toString()
        });

        var text = await res.text();
        var json = null;
        try { json = JSON.parse(text); } catch (_) {}

        if (!res.ok || (json && json.error)) {
          var errMsg = (json && (json.error || json.message)) || ('Cart API error ' + res.status);
          throw new Error(errMsg);
        }

        var successMsg = (json && json.success) || ('Added to basket successfully. Total: ' + this.fmt(total));
        alert(successMsg);
        this.reset();
      } catch (err) {
        console.error(err)
        alert('Failed to add to basket: ' + err.message);
      } finally {
        this.isCartSubmitting = false;
        this.setAddToCartLoading(false);
      }
    }

    // ─────────────────────────────────────────────────────────────────
    // EVENT LISTENERS
    // ─────────────────────────────────────────────────────────────────
    _bindEvents() {
      document.querySelector('.lawc-banner-link').addEventListener('click', (e) => {
        pushDataLayer('exp_pdp_cs_1_check_standard_sizes', 'Check our standard size list', 'click', 'Custom Size Flow');

        e.preventDefault();
        Modal?.close()
        config.isDisableLayer = true;
        _$('#select-size')?.click()
        config.isDisableLayer = false;
      })
      document.getElementById('add-worktop-btn').addEventListener('click', () => {
        pushDataLayer('exp_pdp_cs_1_worktop_add', 'Add another worktop', 'click', 'Custom Size Flow');

        this.addWorktop()
      });

      document.getElementById('lawc-cta-btn').addEventListener('click', () => {
        const activeStep = _$('.lawc-tab.active .lawc-tab-label').innerText.trim();
        pushDataLayer('exp_pdp_cs_cta', document.getElementById('lawc-cta-btn').innerText.trim(), 'click', 'Custom Size Flow', activeStep);
        if (!this.validateStep1()) return;
        this.goToStep2();
      });

      document.getElementById('card-wecut').addEventListener('click', () => {
        pushDataLayer('exp_pdp_cs_2_cutting_plan', 'Cut for you', 'click', 'Custom Size Flow');
        this.selectPlan('wecut')
      });
      document.getElementById('card-selfcut').addEventListener('click', () => {
        pushDataLayer('exp_pdp_cs_2_cutting_plan', 'Cut yourself', 'click', 'Custom Size Flow');
        this.selectPlan('selfcut')
      });
      document.getElementById('s2-view-diagram-btn').addEventListener('click', () => {
        pushDataLayer('exp_pdp_cs_2_view_diagram', 'View cutting diagram', 'click', 'Custom Size Flow', 'Single');
        this.openDiagram()
      });
      document.querySelectorAll('.lawc-diagram-banner--mob').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation(); // Prevent triggering parent card click
          // Determine which plan based on parent card and select it before opening diagram
          var parentCard = btn.closest('.lawc-plan-card');
          if (parentCard) {
            var planType = parentCard.dataset.plan;
            if (planType) {
              const type = planType === 'wecut' ? 'Cut for you' : 'Cut yourself';
              pushDataLayer('exp_pdp_cs_2_view_diagram', 'View cutting diagram', 'click', 'Custom Size Flow', type);
              this.selectedPlan = planType;
              this.updatePlanSelection();
            }
          }
          this.openDiagram();
        });
      });
      document.getElementById('s2-edit-btn').addEventListener('click', () => {
        pushDataLayer('exp_pdp_cs_2_edit_sizes', 'Edit sizes', 'click', 'Custom Size Flow');
        this.goBackToStep1()
      });
      document.getElementById('s2-error-edit-btn').addEventListener('click', () => {
        pushDataLayer('exp_pdp_cs_2_edit_sizes', 'Edit sizes', 'click', 'Custom Size Flow', 'error state');
        this.goBackToStep1()
      });

      document.getElementById('s2-back-btn').addEventListener('click', () => {
        if (this.currentStep === 2 && document.getElementById('step-2b').classList.contains('active')) {
          pushDataLayer('exp_pdp_cs_2_diagram_back_to_cutting', 'Back to cutting plans', 'click', 'Custom Size Flow', 'Bottom');
          this.closeDiagram();
        } else {
          pushDataLayer('exp_pdp_cs_back', 'Back', 'click', 'Custom Size Flow', _$('.lawc-tab.active .lawc-tab-label').innerText.trim());
          this.goBackToStep1();
        }
      });
      document.getElementById('s2-continue-btn').addEventListener('click', () => {
        const activeStep = _$('.lawc-tab.active .lawc-tab-label').innerText.trim();

        if (document.querySelector('#step-2b').classList.contains('active')) {
          pushDataLayer('exp_pdp_cs_2_diagram_continue', 'Continue', 'click', 'Custom Size Flow');
        } else {
          pushDataLayer('exp_pdp_cs_cta', document.getElementById('s2-continue-btn').innerText.trim(), 'click', 'Custom Size Flow', activeStep);
        }

        document.querySelector('.lawc-tabs').style.display = '';

        if (this.isOiling) {
          this.goToStep3();
        } else {
          this.addToBasket();
        }
      });

      document.getElementById('diag-back-bar').addEventListener('click', () => {
        pushDataLayer('exp_pdp_cs_2_diagram_back_to_cutting', 'Back to cutting plans', 'click', 'Custom Size Flow', 'Top');
        this.closeDiagram()
      });

      ['untreated', 'oiling', 'smoothguard'].forEach(f => {
        document.getElementById('card-' + f).addEventListener('click', () => {
          const text = f === 'untreated' ? 'Untreated' : (f === 'oiling' ? '3-Coat Oiling' : 'SmoothGuard 5X Oiling System');
          pushDataLayer('exp_pdp_cs_3_oiling', text, 'click', 'Custom Size Flow');
          this.selectOiling(f)
        });
      });

      document.getElementById('s3-back-btn').addEventListener('click', () => {
        pushDataLayer('exp_pdp_cs_back', 'Back', 'click', 'Custom Size Flow', _$('.lawc-tab.active .lawc-tab-label').innerText.trim());
        this.goBackToStep2()
      });
      document.getElementById('s3-add-to-basket-btn').addEventListener('click', () => {
        const activeStep = _$('.lawc-tab.active .lawc-tab-label').innerText.trim();
        pushDataLayer('exp_pdp_cs_cta', document.getElementById('s3-add-to-basket-btn').innerText.trim(), 'click', 'Custom Size Flow', activeStep);
        this.addToBasket()
      });

      // Tab click navigation (only backwards)
      document.querySelectorAll('.lawc-tab').forEach(tab => {
        tab.addEventListener('click', () => {
          pushDataLayer('exp_pdp_cs_step', tab.querySelector('.lawc-tab-label').innerText.trim(), 'click', 'Custom Size Flow', _$('.lawc-tab.active .lawc-tab-label').innerText.trim());
          var targetStep = parseInt(tab.dataset.step);
          if (targetStep < this.currentStep) {
            this.goToStep(targetStep);
          }
        });
      });
    }
  }

  const productId = _$('#product [name="product_id"]')?.value;

  if (productId) {
    new WorktopCustomizer({ productId: parseInt(productId), debugStep: 'step-1', isDebug: false });
  }

  // Modal.open('.lav-cutting')


  // // Shordcode for selectors
  // function _$(selector, context = document) {
  //   return context.querySelector(selector)
  // }

  //   // GA 4 events
  // function pushDataLayer(name = '', desc = '', type = '', loc = '') {
  //   window.dataLayer = window.dataLayer || []

  //   try {
  //     const event = {
  //       event: 'event-to-ga4',
  //       event_name: name,
  //       event_desc: desc,
  //       event_type: type,
  //       event_loc: loc
  //     }

  //     console.debug('** GA4 Event **', event)

  //     if (!config.debug) {
  //       dataLayer.push(event)
  //     }
  //   } catch (e) {
  //     console.log('** GA4 Error **', e)
  //   }
  // }
})()