(function () {
  console.debug('*** Experiment started ***')

  // Config for Experiment
  const config = {
    // dir: 'http://127.0.0.1:5500/houseofworktops/sizeSelector',
    dir: 'https://flopsi69.github.io/crs/houseofworktops/sizeSelector',
    clarity: ['set', '', 'variant_1'],
    debug: true
  }

  // const orig = console.log
  // console.log = function (...args) {
  //   orig.apply(console, ['Debug:', ...args])
  // }

  // Styles for Experiment
  const styles = /* css */ `
    .lav-selector {
      position: relative;
      clear: both;
      margin-bottom: 16px;
      margin-top: 28px;
    }
    .lav-selector__head {
      border-radius: 4px 4px 0 0;
      border: 1px solid #DEE2E6;
      border-top: 2px solid #DEE2E6;
      background: #F8F9FA;
      min-height: 41px;
      display: flex;
      gap: 16px;
      align-items: center;
      padding: 8px 16px;
    }
    .lav-selector__title {
      margin-right: auto;
    }
    .lav-option {
      display: flex;
      gap: 6px;
      white-space: nowrap;
      align-items: center;
      transition: .3s;
      cursor: pointer;
    }
    .lav-option.active {
      color: #007BFF;
    }
    @media(hover:hover) {
      .lav-option:hover {
        opacity: .85;
      }
    }
    .lav-option__arrow {
      transition: .3s;
      margin-top: -1px;
    }
    .lav-option.active .lav-option__arrow {
      transform: rotate(180deg);
    }
    .lav-option__label {
    }
    .lav-option__value {
      line-height: 1;
      border-radius: 4px;
      padding: 5px 0;
      border: 1px solid transparent;
    }
    .lav-option__value.active {
      padding: 5px 6px;
      border-color: #007BFF;
      background: #007BFF;
      color: #fff;
    }
    .lav-selector__dropdown {
      border-bottom: 1px solid #DEE2E6;
      border-left: 1px solid #DEE2E6;
      border-right: 1px solid #DEE2E6;
      background: #F8F9FA;
      display: none;
    }
    .lav-option__list {
      display: flex;
      overflow-x: auto;
      padding: 6px 14px;
      gap: 8px;
    }
    .lav-option__list:not(.active) {
      display: none;
    }
    .lav-option__item {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      user-select: none;
      transition: .3s;
      border-radius: 4px;
      border: 1px solid #ADB5BD;
      background: #FFF;
      min-width: 65px;
      min-height: 35px;
      padding: 5px 10px;
    }
    .lav-option__item.active {
      background: #007BFF;
      border-color: #007BFF;
      color: #FFF;
    }
    .lav-option__item--disabled {
      opacity: 0.4;
      pointer-events: none;
      cursor: not-allowed;
    }
    @media(hover:hover) {
      .lav-option__item:hover {
        opacity: .85;
      }
    }
    .lav-selector__body {
      position: relative;
      display: flex;
      flex-flow: column;
      gap: 2px;
      height: 255px;
      overflow-y: auto;
      border-radius: 0 0 4px 4px;
      padding: 6px;
      border: 1px solid #DEE2E6;
      border-top: none;
      transition: .3s;
    }
    .lav-selector--compact .lav-selector__body {
      max-height: 255px;
      height: auto;
    }
    .lav-selector--highlight .lav-selector__body {
      border: 1px solid #F34545;
      border-radius: 4px;
      background: #FFF;
      box-shadow: 0 0 0 3px #EEC9C9;
      margin-bottom: 48px;
    }
    .lav-selector--highlight:before {
      content: 'Please select worktop size';
      position: absolute;
      top: 100%;
      left: 0;
      padding-top: 10px;
      color: #F34545;
      font-family: Archivo;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px;
    }

    .lav-size {
      padding: 8px;
      border: 1px solid transparent;
      border-radius: 4px;
      transition: .3s;
    }
    .lav-size--hide {
      display: none!important;
    }
    .lav-size.active {
      border-color: #1F8964;
      background: #E1F7EF;
    }
    .lav-size__body {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .lav-size__counter {
      display: flex;
      align-items: center;
      gap: 6px;
      line-height: 0;
    }
    .lav-size__counter.lav-out-of-stock {
      width: 116px;
      background: #f34545;
      border-radius: 4px;
      padding: 4px 10px;
      line-height: 1.4;
      color: #fff;
      text-align: center;
      justify-content: center;
    }
    .lav-size__counter-btn {
      border-radius: 4px;
      border: 1px solid #DEE2E6;
      background: #FFF;
      width: 32px;
      height: 34px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      user-select: none;
      transition: .3s;
      line-height: 1;
    }
    @media(hover:hover) {
      .lav-size__counter-btn:hover {
        opacity: .85;
        background: #F8F9FA;
      }
    }
    .lav-size__counter-btn.lav-disabled {
      pointer-events: none;
      color: #CAD0D6;
    }
    .lav-size__counter-value {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
      border: 1px solid #DEE2E6;
      background: #FFF;
      font-weight: 500;
      min-width: 40px;
      padding: 5px 3px;
      height: 34px;
      line-height: 1;
      user-select: none;
    }
    .lav-size__dimensions {
      flex-grow: 1;
      padding: 0 16px;
      font-weight: 500;
      line-height: 1.4;
    }
    .lav-size__price {
      display: flex;
      align-items: center;
      gap: 11px;
    }
    .lav-size__price-new {
      color: #D89654;
      font-weight: 500;
    }
    .lav-size__price-old {
      font-weight: 500;
      text-decoration-line: line-through;
    }
    .lav-size__footer {
      padding-top: 12px;
      line-height: 1.1;
    }
    .lav-size__customize {
      color: #1F8964;
      font-size: 12px;
      font-weight: 400;
      line-height: 14.4px;
      text-decoration: underline;
      text-underline-offset: 2px;
      transition: .3;
      cursor: pointer;
    }
    .lav-size__customize:hover {
      opacity: .8;
      text-decoration: none;
    }

    .lav-sticky {
      position: fixed;
      z-index: 101;
      bottom: 0;
      left: 0;
      right: 0;
      background: #1F8964;
      color: #fff;
      font-size: 16px;
      font-weight: 700;
      line-height: 21px;
      min-height: 53px;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: .3s;
      transform: translateY(100%);
      display: none;
    }
    .lav-sticky.lav-disabled {
      filter: grayscale(1);
      pointer-events: none;
    }
    .lav-sticky.active {
      transform: translateY(0);
    }
    .select-size-mobile.fixed-bottom {
      display: none!important;
    }
    @media(hover:hover) {
      .lav-sticky:hover {
        background: #186a4d;
      }
    }

    #select-size {
      display: none!important;
      opacity: 0.4;
    }
    #product .mb-3.h6 {
      margin-bottom: 8px!important;
    }
    .lav-add-to-cart {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      border: 1px solid #1F8964;
      background: #1F8964;
      min-height: 70px;
      color: #FFF;
      font-size: 24px;
      font-weight: 700;
      line-height: 36px;
      cursor: pointer;
      transition: .3s;
      margin-bottom: 8px;
    }
    .lav-add-to-cart.lav-disabled {
      filter: grayscale(1);
      pointer-events: none;
    }
    @media(hover:hover) {
      .lav-add-to-cart:hover {
        border: 1px solid #186a4d;
        background: #186a4d;
      }
    }

    .added-modal-accessories .modal-header {
      background: #CDF4E6;
      margin: 0!important;
      padding: 20px 24px 12px!important;
    }
    .added-modal-accessories .modal-header .h4 {
      padding-left: 8px;
    }
    .added-modal-accessories .variants-container {
      margin: 0 !important;
      padding: 0 !important;
    }
    .added-modal-accessories .variants-container>div {
      padding: 16px 24px;
      border-bottom: 1px solid #DEE2E6;
      background: #CDF4E6;
    }
    .added-modal-accessories .variants-container>div>.container {
      padding: 0;
      margin: 0 !important;
    }
    .added-modal-accessories .variants-container>div>.container .row {
      align-items: center!important;
      flex-wrap: nowrap;
      margin: 0;
    }
    .added-modal-accessories .variants-container>div>.container>.row {
      margin: 0;
      gap: 14px;
      padding: 0!important;
    }
    .added-modal-accessories .variants-container>div>.container .row.mb-lg-3 {
      margin-bottom: 0!important;
      min-height: 33px;
    }
    .added-modal-accessories .variants-container>div>.container .row.mt-3 {
      margin-top: 0!important;
    }
    .added-modal-accessories .variants-container>div>.container .row.confirm-oiling-addon .col-7 {
      padding-left: 0!important;
      margin-top: 0!important;
    }
    .added-modal-accessories .variants-container>div>.container .row.confirm-oiling-addon .oiling-price-display {
      color: #D89654;
      font-size: 16px;
      font-weight: 500!important;
      line-height: 24px;
      order: -1;
    }
    .added-modal-accessories .variants-container>div>.container .row.confirm-oiling-addon .o-oiling-price-display {
      font-weight: 500;
      line-height: 24px;
      color: #212529!important;
      margin-right: 0!important;
      margin-left: 11px;
    }
    .added-modal-accessories .variants-container>div>.container + hr {
      display: none;
    }
    .added-modal-accessories .variants-container .position-relative>img {
      width: 80px;
      height: 80px;
      object-fit: contain;
    }
    .added-modal-accessories .variants-container .image-block {
      width: 80px;
      flex-grow: 0;
    }
    .added-modal-accessories .variants-container .content-block {
      flex: auto;
      max-width: 100%;
      padding: 0;
      gap: 8px;
      margin-top: 0!important;
    }
    .added-modal-accessories .variants-container .content-block .quantity-display {
      font-weight: 500!important;
    }
    .added-modal-accessories .variants-container .content-block .og-price-display {
      font-weight: 500;
      line-height: 24px;
      color: #212529!important;
      margin-right: 0!important;
    }
    .added-modal-accessories .variants-container .content-block .price-display {
      color: #D89654;
      font-size: 16px;
      font-weight: 500!important;
      line-height: 24px;
      order: -1;
    }
    .added-modal-accessories .variants-container .content-block .col-5 {
      gap: 11px;
    }
    .added-modal-accessories .variants-container .variant-title {
      font-size: 18px!important;
      font-weight: 500;
      line-height: 24px;
      // margin-right: -30px;
    }
    .added-modal-accessories .variants-container .dimensions-info {
      padding: 0 !important;
    }
    .added-modal-accessories .variants-container .dimension {
      display: none;
    }
    .added-modal-accessories .variants-container .dimension + div {
      display: flex;
      align-items: center;
    }
    .added-modal-accessories .variants-container .dimension + div>h6 {
      margin: 0!important;
      font-weight: 500;
    }
    .added-modal-accessories .variants-container .dimension + div>h6.variant-length {
      text-transform: uppercase;
    }
    .added-modal-accessories .variants-container .dimension + div>h6 + h6:before {
      content: 'x';
      color: #212529;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      padding: 0 3px;
    }
    #added-modal-with-accessories-2 .discount-ribbon {
      line-height: 1;
      padding: 0px 6px 4px !important;
      border-bottom-right-radius: .25rem;
    }
    #added-modal-with-accessories-2 .discount-ribbon small {
      font-size: 9px!important;
    }
    .added-modal-accessories .subtotal-bottom {
      margin: 0 !important;
      padding: 24px !important;
      background: #F8F9FA!important;
      box-shadow: 0 -4px 8px 0 rgba(0, 0, 0, 0.10);
    }
    .added-modal-accessories .subtotal-bottom .footer-buttons {
      margin: 0!important;
    }
    .added-modal-accessories .subtotal-bottom .footer-buttons .col-6:first-child {
      display: none!important;
    }
    .added-modal-accessories .subtotal-bottom .footer-buttons .col-6:nth-child(2) {
      flex: 0 0 100%;
      max-width: 100%;
    }
    .added-modal-accessories .subtotal-bottom .footer-buttons .col-6:nth-child(2) h6 {
      position: relative;
      font-size: 24px!important;
      font-weight: 700;
      line-height: 36px;
    }
    .added-modal-accessories .subtotal-bottom .footer-buttons .col-6:nth-child(2) .btn {
      min-height: 70px;
      border-radius: 4px;
    }
    .added-modal-accessories .subtotal-bottom .row-subtotal + .row {
      margin-top: 0!important;
      padding-bottom: 0!important;
    }
    .added-modal-accessories .subtotal-bottom .row-subtotal + .row .h6 + img {
      top: -1px!important;
    }
    .added-modal-accessories .subtotal-bottom .row-subtotal .total-text-display {
      color: #D89654;
      font-size: 18px!important;
      font-weight: 500 !important;
      line-height: 24px;
      order: -1;
    }
    .added-modal-accessories .subtotal-bottom .row-subtotal .o-total-text-display {
      font-weight: 500;
      line-height: 24px;
      font-size: 18px!important;
      color: #212529!important;
      margin-right: 0!important;
      margin-left: 11px;
    }
    .added-modal-accessories .subtotal-bottom .row-subtotal h6 {
      margin-bottom: 0;
    }
    .added-modal-accessories .subtotal-bottom .row-subtotal h6:after {
      content: ':';
    }
    .added-modal-accessories .subtotal-bottom .row-subtotal h6 strong {
      color: #343A40;
      font-family: Archivo;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 24px;
    }
    .added-modal-accessories .subtotal-bottom .row + .row {
      margin-top: 8px!important;
      margin-bottom: 12px!important;
    }
    .added-modal-accessories .subtotal-bottom .row + .row .h6, .added-modal-accessories .subtotal-bottom .row + .row .h6 + img {
      display: none;
    }
    .added-modal-accessories .subtotal-bottom .row + .row .estimate {
      font-size: 0!important;
      white-space: nowrap;
    }
    .added-modal-accessories .subtotal-bottom .row + .row .estimate:before {
      content: '(excl. shipping)';
      color: #212529;
      font-family: Archivo;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;';
    }
    
    .added-modal-accessories .subtotal-bottom .border {
      display: none;
    }
    #added-modal-with-accessories-2 .modal-content {
      max-width: 480px;
      width: 100%;
      // min-height: 80vh;
      height: 95%;
      max-height: 900px;
    }
    .added-modal-accessories .modal-header .close {
      opacity: 1;
      margin: -6px -16px 0 0;
    }

    .lav-essentials {
      padding: 24px;
    }
    .lav-essentials__title {
      font-size: 24px;
      line-height: 1;
      margin-bottom: 8px;
    }
    .lav-upsell {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      border-bottom: 1px solid #DEE2E6;
      padding: 16px 0;
    }
    .lav-upsell__title {
      color: #212529;
      font-size: 16px;
      font-weight: 500;
      line-height: 1.5;
    }
    .lav-upsell__image {
      line-height: 0;
    }
    .lav-upsell__info {
      flex-grow: 1;
    }
    .lav-upsell__image img {
      max-width: 80px;
      max-height: 80px;
    }
    .lav-upsell__price {
      display: flex;
      align-items: center;
      gap: 11px;
      margin-top: 11px;
    }
    .lav-upsell__price-new {
      color: #D89654;
      font-size: 16px;
      font-weight: 500;
      line-height: 1.5;
    }
    .lav-upsell__price-old {
      color: #212529;
      font-size: 16px;
      font-weight: 500;
      line-height: 1.5;
      text-decoration-line: line-through;
    }
    .lav-upsell__add {
      color: #1F8964;
      text-align: center;
      font-size: 14px;
      font-weight: 400;
      line-height: 1.5;
      border-radius: 4px;
      border: 1px solid #1F8964;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 6px 12px;
      min-width: 90px;
      min-height: 46px;
      cursor: pointer;
      transition: .3s;
    }
    .lav-upsell.active .lav-upsell__add {
      display: none;
    }
    @media(hover:hover) {
      .lav-upsell__add:hover {
        background: #E1F7EF;
        border-color: #186a4d;
        color: #186a4d;
      }
    }
    .lav-upsell:not(.active) .lav-upsell__counter {
      display: none;
    }
    .lav-upsell__counter {
      display: flex;
      border-radius: 4px;
      border: 1px solid #1F8964;
      background: #1F8964;
      color: #fff;
      min-width: 90px;
      min-height: 46px;
      user-select: none;
    }
    .lav-upsell__counter-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      transition: .3s;
      cursor: pointer;
    }
    @media(hover:hover) {
      .lav-upsell__counter-btn:hover {
        opacity: .85;
      }
    }
    .lav-upsell__counter-value {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-grow: 1;
      display: flex;
      justify-content: center;
      font-size: 14px;
      line-height: 21px;
    }
    #added-modal-with-accessories-2.lav-atc-handle {
      pointer-events: none;
    }
    #added-modal-with-accessories-2.lav-atc-handle .modal-dialog-scrollable .modal-body {
      // overflow: hidden;
    }
    #added-modal-with-accessories-2.lav-atc-handle .modal-content {
      height: auto;
    }
    #added-modal-with-accessories-2.lav-atc-handle .modal-header, #added-modal-with-accessories-2.lav-atc-handle .modal-body, #added-modal-with-accessories-2.lav-atc-handle .subtotal-bottom>.row {
      display: none!important;
    }
    #added-modal-with-accessories-2.lav-atc-handle .subtotal-bottom .footer-buttons .col-6:nth-child(2) .btn h6 {
      font-size: 0!important;
    }
    #added-modal-with-accessories-2.lav-atc-handle .subtotal-bottom .footer-buttons .col-6:nth-child(2) .btn h6:before {
      position: relative;
      bottom: -3px;
      content: 'Proceeding to checkout...';
      font-size: 24px;
    }
    .added-modal-accessories .subtotal-bottom .footer-buttons .col-6:nth-child(2) .btn:before {
      position: absolute;
      content: '';
      bottom: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: #106758;
    }
    .lav-btn-progress {
      position: relative;
      overflow: hidden;
      background-color: #093b32!important
    }
    .lav-btn-progress:before {
      width: 100%!important;
      transition: width 3s linear;
    }
    @media(max-width: 992px) {
      .lav-size__price {
        flex-flow: column;
        line-height: 1.3;
      }
      .lav-add-to-cart {
        min-height: 64px;
      }
      .lav-size__dimensions {
        padding: 0 12px;
      }
      .lav-size__counter-btn {
        width: 30px;
        height: 36px;
      }
      .lav-size__counter-value {
        min-width: 32px;
        height: 36px;
        padding: 0;
      }
      .lav-size__counter {
        gap: 4px;
      }
      .lav-size__counter.lav-out-of-stock {
        width: 100px;
      }
      .lav-selector {
        margin-bottom: 18px;
      }
      .lav-option__value.active {
        padding: 3px;
      }
      .lav-option {
        gap: 4px;
      }
      .lav-selector__head {
        gap: 12px;
      }
      .lav-selector__body {
        border-top-width: 2px;
      }
    }
    @media(max-width: 767.98px) {
      .lav-essentials {
        padding: 16px 12px;
      }
      .lav-essentials__title {
        font-size: 18px;
        line-height: 24px;
        margin-bottom: 0;
      }
      .lav-size__price {
        gap: 7px;
      }
      .lav-sticky {
        display: flex;
      }
      .lav-add-to-cart {
        font-size: 20px;
      }
      #added-modal-with-accessories-2 .image-block img {
        width: auto;
      }
      #added-modal-with-accessories-2 .variants-container>div {
        padding: 16px 12px;
      }
      #added-modal-with-accessories-2 .modal-content {
        height: 100%;
      }
      #added-modal-with-accessories-2 {
        padding-right: 0!important;
      }
      #added-modal-with-accessories-2 .modal-header .h4 {
        font-size: 20px!important;
      }
      #added-modal-with-accessories-2 .modal-header {
        padding: 20px 12px 12px!important;
      }
      #added-modal-with-accessories-2 .modal-dialog {
        max-height: 100%;
        margin: 0;
      }
      #added-modal-with-accessories-2 .modal-header img {
        width: 32px;
      }
      .added-modal-accessories .variants-container .content-block .col-5 {
        gap: 3px;
      }
      .added-modal-accessories .variants-container .content-block {
        gap: 3px;
      }
      .added-modal-accessories .variants-container .content-block .quantity-display {
        font-size: 14px!important;
      }
      .added-modal-accessories .variants-container .content-block .og-price-display, .added-modal-accessories .variants-container .content-block .price-display {
        font-size: 14px!important;
      }
      .added-modal-accessories .variants-container .dimension + div>h6 {
        font-size: 14px!important;
      }
      .added-modal-accessories .variants-container>div>.container .row.mb-lg-3 {
        align-items: flex-start!important;
      }
      .added-modal-accessories .variants-container .dimensions-info {
        // margin-top: -40px;
      }
      .added-modal-accessories .variants-container>div>.container>.row {
        align-items: flex-start!important;
      }
      .added-modal-accessories .subtotal-bottom {
        padding: 16px 12px 12px!important;
      }
      .added-modal-accessories .subtotal-bottom .row .align-items-sm-baseline {
        flex-direction: row!important;
      }
      .added-modal-accessories .subtotal-bottom .row-subtotal h6 {
        font-size: 12px!important;
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

    document.head.appendChild(stylesEl)

    console.debug('** InitExp **')

    if (!_$('#select-size')) return

    createSizeSelector()
    addSticky()
    addNewButton()
    handleAtcModal()
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

    _$('.modal-header .h4', modalEl).textContent = 'Your Worktop Added to cart';

    _$('.added-modal-accessories .subtotal-bottom .footer-buttons .col-6:nth-child(2) .btn', modalEl).addEventListener('click', (e) => {
      if (_$('.lav-upsell.active')) {
        e.preventDefault()
        const redirectUrl = e.target.href;
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
              location.href = redirectUrl;
              
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

  function addNewButton() {
    _$('#select-size').insertAdjacentHTML('afterend', /* html */ `
      <div class="lav-add-to-cart">
        Add to Cart
      </div>
    `)

    _$('.lav-add-to-cart').addEventListener('click', () => {
      if (_$('.lav-size.active')) {
        addToCart();
      } else {
        _$('.lav-selector').scrollIntoView({ behavior: 'smooth', block: 'center' });
        _$('.lav-selector').classList.add('lav-selector--highlight');
      }
    });
  }

  function addToCart() {
    if (_$('.lav-sticky.lav-disabled') || _$('.lav-add-to-cart.lav-disabled')) return;

    _$('.button-cart').click();
    _$('.lav-add-to-cart').classList.add('lav-disabled');
    _$('.lav-sticky').classList.add('lav-disabled');

    const previousText = _$('.lav-add-to-cart').textContent;
    const previousStickyText = _$('.lav-sticky').textContent;

    _$('.lav-add-to-cart').textContent = 'Adding...';
    _$('.lav-sticky').textContent = 'Adding...';
    setTimeout(() => {
      if (_$('.lav-add-to-cart').classList.contains('lav-disabled')) {
        _$('.lav-add-to-cart').classList.remove('lav-disabled');
        _$('.lav-sticky').classList.remove('lav-disabled');
        _$('.lav-add-to-cart').textContent = previousText;
        _$('.lav-sticky').textContent = previousStickyText;
      }
    }, 5000);

    waitFor(() => _$('#added-modal-with-accessories-2.show'), () => {
      _$('.lav-add-to-cart').classList.remove('lav-disabled');
      _$('.lav-sticky').classList.remove('lav-disabled');
      _$('.lav-add-to-cart').textContent = previousText;
      _$('.lav-sticky').textContent = previousStickyText;

      const observer = new MutationObserver((mutationsList, observer) => {
        for (const mutation of mutationsList) {
          if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            if (!mutation.target.classList.contains('show')) {
              resetExpSelector();
              observer.disconnect();
            }
          }
        }
      });

      observer.observe(_$('#added-modal-with-accessories-2'), {   attributes: true });
      }, { ms: 100 })
  }

  function addUpsellToCart(count) {
    const $data = new FormData();
    $data.append('product_id', '68');
    $data.append('option[7]', '258')
    $data.append('opqty[7][258]',count ? count : '1');

    $.ajax({
      url: 'index.php?route=checkout/cart/add',
      type: 'post',
      data: $data,
      dataType: 'json',
      processData: false,
      contentType: false,
      complete: function () {
        //_this.button('reset');
        // setTimeout(function () {
        //   _this.attr('disabled', false);
        
        //   $('.button-sample').attr('disabled', true).removeClass('active-progress');
        //   $('.button-sample').find('.submit').html('Added to Cart');
        //   $('.button-sample, .btn-acc').removeClass('active-progress');
        //   if ($('.button-sample').attr('disabled', true)) {
        //     $(".button-sample").attr("title", "You have already added this sample");
        //   }
        //   else {
        //     $(".button-sample").removeAttr("title");
        //   }
        //   //_this.button('reset');
        // }, 1000);
      },
      success: function (json) {
        console.log('json', json)
        return
        if (json['error'] && false) {
          if (json['error']['option']) {
            for (i in json['error']['option']) {
              var element = $('#input-option' + i.replace('_', '-'));

              if (element.parent().hasClass('input-group')) {
                element.parent().after('<div class="text-danger">' + json['error']['option'][i] + '</div>');
              } else {
                element.after('<div class="text-danger">' + json['error']['option'][i] + '</div>');
              }
            }
          }

          if (json['error']['qty']) {
            _this.button('reset');
            _this.removeClass('finished');
            // $('.check').text('Failed');
            $('.table-responsive>.optionqty').after('<div class="alert alert-danger alert-dismissible">Please fill the Quantity<button type="button" class="close" data-dismiss="alert">&times;</button></div>');
            _this.before('<div class="errorMsg mr-2 alert alert-danger d-none d-sm-block alert-dismissible mb-0">Please fill the Quantity</div>')
            $('.error-msg').after('<div class="errorMsg mt-3 mt-sm-0 mr-2 alert alert-danger d-block d-sm-none alert-dismissible mb-0">Please fill the Quantity</div>')
          }

          if (json['error']['recurring']) {
            $('select[name=\'recurring_id\']').after('<div class="text-danger">' + json['error']['recurring'] + '</div>');
          }
        }

        if (json['success']) {
          let existingProductIDs = JSON.parse(localStorage.getItem('productIDs')) || [];
          existingProductIDs.push('68');
          sendacc()
          setTimeout(function () {
            // _this.toggleClass("active-progress").addClass("finished");
            $('#cart > button').html('<img src = "catalog/view/theme/houseofworktops/image/svg-icons/cart.svg" title = "" alt = "" class= "img-responsive mb-1" width = "20" loading = "lazy"/><div class="d-xl-inline" ><span class="px-1">Cart</span><span id="cart-total" class="badge badge-danger rounded-circle"> ' + json['total'] + '</span></div></span>');
            $('#cart > ul').load('index.php?route=common/cart/info ul li');
            $('#nav-cart-mobile ul').load('index.php?route=common/cart_menu/info ul li');

          }, 1000);

          proceedCheckoutObj = {}
          proceedCheckoutObj['label'] = $('.proceed-checkout-content').data('label');
          if (proceedCheckoutObj['label'] != undefined) {
            dataLayer.push({
              'event': 'checkoutpopupimpression',
              'category': 'userInteraction',
              'action': 'checkoutpopupimpression',
              'label': proceedCheckoutObj.label
            })
          }

          checkoutObj = {}
          checkoutObj['label'] = $('.content-block').data('label');
          if (checkoutObj['label'] != undefined) {
            dataLayer.push({
              'event': 'checkoutpopupimpression',
              'category': 'userInteraction',
              'action': 'checkoutpopupimpression',
              'label': checkoutObj.label
            })
          }          
      
          /*
          $('.breadcrumb').after('<div class="alert alert-success alert-dismissible">' + json['success'] + '<button type="button" class="close" data-dismiss="alert">&times;</button></div>');
          $('html, body').animate({ scrollTop: 0 }, 'slow');
          */
          //_this.closest(".modal").modal('hide');
          //$('#added-to-cart-modal').modal('show').find('.modal-body .text').html('<div>' + json['success'] + '</div>');

        }
      },
      error: function (xhr, ajaxOptions, thrownError) {
        alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
      }
    });
  }

  async function addSticky() {
    await waitFor('.select-size-mobile', false, { ms: 20 }) 

    const text = _$('.lav-size.active') ? 'Add to Cart' : 'Choose Size';

    const markup = /* html */ `
      <div class="lav-sticky">
        ${text}
      <div>
    `;

    _$('body').insertAdjacentHTML('beforeend', markup);

    _$('.lav-sticky').addEventListener('click', () => {
      if (_$('.lav-size.active')) {
        addToCart();
      } else {
        _$('.lav-selector').scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
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

  function createSizeSelector() {
    if (_$$('#product-options-modal .select-size-row').length === 0) return;

    const markup = /* html */ `
      <div class="lav-selector">
        <div class="lav-selector__head">
          <div class="lav-selector__title">Size</div>
          <div class="lav-option">
            <div class="lav-option__label">Length :</div>
            <div class="lav-option__value">All</div>
            <div class="lav-option__arrow">${getSvg('dropdown')}</div>
          </div>
          <div class="lav-option">
            <div class="lav-option__label">Length :</div>
            <div class="lav-option__value">All</div>
            <div class="lav-option__arrow">${getSvg('dropdown')}</div>
          </div>
        </div>
        <div class="lav-selector__dropdown">

        </div>
        <div class="lav-selector__body"></div>
      </div>
    `

    _$("#product").insertAdjacentHTML('beforebegin', markup)

    _$('.lav-selector').addEventListener('click', function(e) {
      if (this.classList.contains('lav-selector--highlight')) {
        this.classList.remove('lav-selector--highlight');
      }
    });

    updateSizes();
    handleEssentials()
    createFilter();
    applyFilters();

    function createFilter() {
      _$$('.lav-option').forEach(option => {
        option.remove();
      });

      Array.from(_$$('#select-size-model .container .filters')).reverse().forEach((filter, index) => {
        const option = document.createElement('div');
        option.classList.add('lav-option');
        option.dataset.triggerDropdown = index;

        const label = filter.previousElementSibling?.textContent.trim() || '';
        const value = filter.querySelector('.selected-value')?.textContent.trim() || 'All';

        option.innerHTML = /* html */ `
          <div class="lav-option__label">${label}&nbsp;:</div>
          <div class="lav-option__value">${value}</div>
          <div class="lav-option__arrow">${getSvg('dropdown')}</div>
        `;

        const optionList = document.createElement('div');
        optionList.classList.add('lav-option__list');
        optionList.dataset.dropdownList = index;

        filter.querySelectorAll('.dimension-filter-btn').forEach(filterOption => {
          const optionItem = document.createElement('div');
          optionItem.classList.add('lav-option__item');
          optionItem.textContent = filterOption.textContent.trim();
          Object.entries(filterOption.dataset).map(([key, value]) => {
            optionItem.dataset[key] = value;
          })

          optionItem.addEventListener('click', () => {
            const valueEl = option.querySelector('.lav-option__value');
            if (optionItem.classList.contains('active')) {
              optionItem.classList.remove('active');
              valueEl.textContent = 'All';
              valueEl.classList.remove('active');
            } else {
              _$('.lav-option__item.active', optionList)?.classList.remove('active');
              optionItem.classList.add('active');
              valueEl.textContent = filterOption.textContent.trim();
              valueEl.classList.add('active');
            }

            _$('.lav-option.active')?.classList.remove('active');
            $('.lav-selector__dropdown').slideUp(300, () => {
              _$('.lav-option__list.active')?.classList.remove('active');
            })

            applyFilters();
          });

          optionList.insertAdjacentElement('beforeend', optionItem);
        });

        _$('.lav-selector__dropdown').insertAdjacentElement('beforeend', optionList);

        option.addEventListener('click', () => {
          const dropdownEl = _$('.lav-selector__dropdown');

          if (option.classList.contains('active')) {
            option.classList.remove('active');
            $(dropdownEl).slideUp(300, () => {
              _$('.lav-option__list.active')?.classList.remove('active');
            })
          } else {
            _$('.lav-option__list.active')?.classList.remove('active');
            _$('.lav-option.active')?.classList.remove('active');
            option.classList.add('active');
            const list = _$(`[data-dropdown-list="${option.dataset.triggerDropdown}"]`, dropdownEl);
            list.classList.add('active');
            $(dropdownEl).slideDown();
          }
        });

        _$('.lav-selector__head').insertAdjacentElement('beforeend', option);
      });
    }

    function updateSizes() {
      const sizeRows = _$$('#product-options-modal .select-size-row[data-type="worktop"]');

      if (!sizeRows?.length) return;

      if (sizeRows.length <= 3) {
        _$('.lav-selector').classList.add('lav-selector--compact');
      }

      _$('.lav-selector__body').innerHTML = '';

      sizeRows.forEach(row => {
        if (row.dataset.type !== 'worktop') return;

        let size = row.querySelector('.h6')?.textContent.trim() || '';
        if (size) {
          size = size.replace(/\((\d+)\sPiece\)/g, '($1\u00A0Piece)')
        }
        const priceNew = row.querySelector('.worktop-price .price-new')?.textContent.trim() || row.querySelector('.worktop-price .h6')?.textContent.trim() || '';
        const priceOld = row.querySelector('.worktop-price .price-old')?.textContent.trim() || '';
        const quantity = row.querySelector('.quantity-field')?.value.trim() || '0';

        const sizeEl = document.createElement('div');
        sizeEl.classList.add('lav-size');
        Object.entries(row.dataset).map(([key, value]) => {
          sizeEl.dataset[key] = value;
        })

        sizeEl.innerHTML = /* html */ `
          <div class="lav-size__body">
            <div class="lav-size__counter">
              <div class="lav-size__counter-minus lav-size__counter-btn ${quantity === '0' ? 'lav-disabled' : ''}">
                ${getSvg('minus')}
              </div>
              <div class="lav-size__counter-value">${quantity}</div>
              <div class="lav-size__counter-plus lav-size__counter-btn">
                ${getSvg('plus')}
              </div>
            </div>
            <div class="lav-size__dimensions">${size}</div>
            <div class="lav-size__price">
              <div class="lav-size__price-new">${priceNew}</div>
              <div class="lav-size__price-old">${priceOld}</div>
            </div>
          </div>
          <div class="lav-size__footer" style="${quantity === '0' ? 'display: none;' : ''}">
            <span class="lav-size__customize">
              Customise this worktop
            </span>
          </div>
        `;

        const isOutOfStock = row.querySelector('.badge.bg-danger')?.textContent.trim().toLowerCase() === 'out of stock';

        if (!row.querySelector('a.small')) {
          _$('.lav-size__footer', sizeEl).remove();
        }

        if (isOutOfStock) {
          _$('.lav-size__counter', sizeEl).innerHTML = 'Out of Stock';
          _$('.lav-size__counter', sizeEl).classList.add('lav-out-of-stock');
        }

        _$('.lav-size__counter-plus', sizeEl)?.addEventListener('click', () => {
          if (row.querySelector('.add-button:not(.d-none)')) {
            row.querySelector('.add-button').click();
          } else {
            row.querySelector('.button-plus').click();
          }

          _$('.lav-size__counter-value', sizeEl).textContent = row.querySelector('.quantity-field')?.value.trim() || '0';
          sizeEl.classList.add('active');
          _$('.lav-size__counter-minus', sizeEl).classList.remove('lav-disabled');
          $('.lav-size__footer', sizeEl)?.slideDown();
          _$('.lav-sticky').textContent = 'Add to Cart'
        });

        _$('.lav-size__counter-minus', sizeEl)?.addEventListener('click', () => {
          const currentQty = row.querySelector('.quantity-field')?.value.trim() || '0';
          if (currentQty == '0') return;

          if (currentQty == '1') {
            _$('.lav-size__counter-minus', sizeEl).classList.add('lav-disabled');
            sizeEl.classList.remove('active');
            $('.lav-size__footer', sizeEl)?.slideUp();
            if (!_$('.lav-size.active')) {
              _$('.lav-sticky').textContent = 'Choose Size'
            }
          }

          row.querySelector('.button-minus').click();
          _$('.lav-size__counter-value', sizeEl).textContent = row.querySelector('.quantity-field')?.value.trim() || '0';
        });

        _$('.lav-size__customize', sizeEl)?.addEventListener('click', () => {
          row.querySelector('a.small').click();
        });

        _$('.lav-selector__body').insertAdjacentElement('beforeend', sizeEl);
      });
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
        const quantity = row.querySelector('.quantity-field')?.value.trim() || '0';

        const upsellEl = document.createElement('div');
        upsellEl.classList.add('lav-upsell');
        if (quantity !== '0') {
          upsellEl.classList.add('active');
        }
        Object.entries(row.dataset).map(([key, value]) => {
          upsellEl.dataset[key] = value;
        })

        upsellEl.innerHTML = /* html */ `
          <div class="lav-upsell__image">
            <img src="https://houseofworktops.s3.eu-west-2.amazonaws.com/image/cache/catalog/laminate-worktops/black-walnut-laminate-worktop/black-walnut-lamiante-side-500x500.jpg" itemprop="image" class="position-relative rounded" alt="Black Walnut Laminate Worktop" title="Black Walnut Laminate Worktop" width="209">
          </div>
          <div class="lav-upsell__info">
            <div class="lav-upsell__title">${size}</div>
            <div class="lav-upsell__price">
              <div class="lav-upsell__price-new">${priceNew}</div>
              <div class="lav-upsell__price-old">${priceOld}</div>
            </div>
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
        `;

        _$('.lav-upsell__add', upsellEl)?.addEventListener('click', () => {
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
          if (row.querySelector('.add-button:not(.d-none)')) {
            row.querySelector('.add-button').click();
          } else {
            row.querySelector('.button-plus').click();
          }

          _$('.lav-upsell__counter-value', upsellEl).textContent = row.querySelector('.quantity-field')?.value.trim() || '0';
          upsellEl.classList.add('active');
          _$('.lav-upsell__counter-minus', upsellEl).classList.remove('lav-disabled');
        });

        _$('.lav-upsell__counter-minus', upsellEl)?.addEventListener('click', () => {
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
    }

    function applyFilters() {
      updateFilterAvailability();

      const items = _$$('.lav-size');
      
      items.forEach(item => {
        item.classList.remove('lav-size--hide');
      });

      if (!_$$('.lav-option__item.active').length) return;

      const filter = []

      _$$('.lav-option__item.active').forEach(activeOption => {
        const filterType = activeOption.dataset.filterType;
        const filterValue = activeOption.dataset.filterValue;

        filter.push([filterType, filterValue]);
      });

      items.forEach(item => {
        filter.forEach(([type, value]) => {
          if (item.dataset['filter' + type.charAt(0).toUpperCase() + type.slice(1)] !== value) {
            item.classList.add('lav-size--hide');
          }
        });
      });
    }

    function updateFilterAvailability() {
      _$$('.lav-option__item').forEach(option => {
        option.classList.remove('lav-option__item--disabled');
      });

      const allSizes = Array.from(_$$('.lav-size'));

      _$$('.lav-option__item').forEach(option => {
        const optionFilterType = option.dataset.filterType;
        const optionFilterValue = option.dataset.filterValue;

        const activeFiltersFromOtherGroups = [];
        _$$('.lav-option__item.active').forEach(activeOption => {
          if (activeOption.dataset.filterType !== optionFilterType) {
            activeFiltersFromOtherGroups.push({
              type: activeOption.dataset.filterType,
              value: activeOption.dataset.filterValue
            });
          }
        });

        const hasMatchingSize = allSizes.some(size => {
          const filterKey = 'filter' + optionFilterType.charAt(0).toUpperCase() + optionFilterType.slice(1);
          if (size.dataset[filterKey] !== optionFilterValue) {
            return false;
          }

          return activeFiltersFromOtherGroups.every(filter => {
            const key = 'filter' + filter.type.charAt(0).toUpperCase() + filter.type.slice(1);
            return size.dataset[key] === filter.value;
          });
        });

        if (!hasMatchingSize) {
          option.classList.add('lav-option__item--disabled');
        }
      });
    }
  }

  function resetExpSelector() {
    _$$('.lav-size').forEach(sizeEl => {
      if (_$('.lav-size__counter-value', sizeEl)) {
        _$('.lav-size__counter-value', sizeEl).textContent = '0';
        _$('.lav-size__counter-minus', sizeEl).classList.add('lav-disabled');
      }
      sizeEl.classList.remove('active');
      $('.lav-size__footer', sizeEl)?.slideUp();
    });

    _$$('.lav-upsell').forEach(upsellEl => {
      if (_$('.lav-upsell__counter-value', upsellEl)) {
        _$('.lav-upsell__counter-value', upsellEl).textContent = '0';
      }
      upsellEl.classList.remove('active');
    });

    _$('.lav-sticky').textContent = 'Choose Size'

    _$$('#product-options-modal .select-size-row .checkbox-check [type="checkbox"]:checked').forEach(checkbox => {
      if (checkbox?.checked) {
        checkbox.click();
      }
    });
  }

  // *** Utils *** //
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
      `

        const stylesEl = document.createElement('style')
        stylesEl.classList.add('exp-modal')
        stylesEl.innerHTML = styles
        document.head.appendChild(stylesEl)
      }
    }

    window.Modal = Modal
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
  function pushDataLayer(name = '', desc = '', type = '', loc = '') {
    window.dataLayer = window.dataLayer || []

    try {
      const event = {
        event: 'event-to-ga4',
        event_name: name,
        event_desc: desc,
        event_type: type,
        event_loc: loc
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
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
          <rect x="4.5" width="8" height="1" transform="rotate(90 4.5 0)" fill="currentColor"/>
          <rect y="3.5" width="8" height="1" fill="currentColor"/>
        </svg>
      `,
      'minus': /* svg */ `
        <svg width="8" height="1" viewBox="0 0 8 1" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="8" height="1" fill="currentColor"/>
        </svg>
      `,
      'dropdown': /* svg */ `
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
          <path d="M2.05078 2.91016C1.81641 2.67578 1.5332 2.55859 1.20117 2.55859C0.869141 2.55859 0.585938 2.67578 0.351563 2.91016C0.117188 3.14453 5.9608e-07 3.42773 5.67053e-07 3.75977C5.38026e-07 4.0918 0.117188 4.375 0.351563 4.60938L6 10.2461L11.6484 4.60938C11.8828 4.375 12 4.0918 12 3.75977C12 3.42774 11.8828 3.14453 11.6484 2.91016C11.4141 2.67578 11.1309 2.55859 10.7988 2.55859C10.4668 2.55859 10.1836 2.67578 9.94922 2.91016L6 6.85938L2.05078 2.91016Z" fill="currentColor"/>
        </svg>
      `
    }

    return svgObj[name]
  }
})()