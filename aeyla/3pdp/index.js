console.debug('*** Experiment started ***')

// Config for Experiment
const config = {
  // dir: 'http://127.0.0.1:5500/aeyla/3pdp',
  dir: 'https://flopsi69.github.io/crs/aeyla/3pdp',
  clarity: ['set', 'exp_pdp_slide_cart', 'variant_1'],
  debug: false
}

// const orig = console.log;
// console.log = function (...args) {
//   orig.apply(console, ['Debug:', ...args]);
// };

// Styles for Experiment
const styles = /* css */ `
    #MainProductSection > nav.breadcrumb {
      display: none;
    }
    .lav-page-dual [id*="MainPhoto"] .flag.absolute {
      display: none!important;
    }
    .lav-breadcrumbs {
      color: var(--Dark-Green, #2B4632);
      font-family: 'Inter';
      font-size: 14px;
      font-weight: 400;
      line-height: 24px;
      padding: 32px 0 23px;
    }
    .lav-breadcrumbs span:last-child {
      font-weight: 600;
    }
    .lav-breadcrumbs a {
      cursor: pointer;
      transition: 0.2s;
      color: var(--Dark-Green, #2B4632);
      font-family: 'Inter';
      font-size: 14px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: -0.25px;
    }
    @media(hover:hover) {
      .lav-breadcrumbs a:hover {
        opacity: .7;
      }
    }
    .lav-off {
      position: absolute;
      z-index: 9999;
      top: 30px;
      right: 0;
      padding: 7px 8px 5px;
      color: var(--Dark-Green, #2B4632);
      font-family: 'Inter';
      font-size: 20px;
      font-weight: 700;
      line-height: 1;
      border-radius: 6px 0px 0px 6px;
      background: #FAF000;
    }
    .lav-approved {
      position: absolute;
      display: flex;
      gap: 8px;
      align-items: center;
      z-index: 9999;
      top: 30px;
      left: 0;
      color: var(--White, #FFF);
      font-family: 'Inter';
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 1;
      padding: 6px 8px;
      border-radius: 0px 6px 6px 0px;
      background: var(--Dark-Green, #2B4632);
    }
    .product-carousel .on-sale {
      display: none;
    }
    .tp_widget_wrapper {
      margin-bottom: 12px;
    }
    div#MainProductForm p.var_meta {
      display: none;
    }
    div#MainProductForm .lav-title__wrap h1 {
      display: flex;
      align-items: flex-end;
      gap: 6px;
      font-size: 24px;
      margin-bottom: 0;
      color: #2B4632;
      line-height: 1.25;
    }
    .junip-product-summary-review-count {
      font-size: 14px;
    }
    .junip-product-summary-clickable {
      margin-top: -10px;
      margin-bottom: 10px;
    }
    .lav-title__size {
      white-space: nowrap;
      color: var(--Dark-Green, #2B4632);
      font-family: 'Inter';
      font-size: 14px;
      font-weight: 400;
      line-height: 22px;
    }
    .lav-title__caption {
      color: var(--Dark-Green, #2B4632);
      font-family: 'Inter';
      font-size: 14px;
      margin-top: 6px;
      font-weight: 600;
      line-height: 20px;
    }
    .lav-title__caption-sup {
      color: var(--Dark-Green, #2B4632);
      font-family: 'Inter';
      font-size: 14px;
      font-weight: 400;
      line-height: 22px;
      margin-top: 6px;
    }
    .lav-page-blanket .lav-title__caption {
      max-width: 356px;
    }
    .pro_price .pricing, .pro_price {
      margin: 0;
    }

    .lav-options {
      display: grid;
      gap: 10px;
      margin-top: 16px;
      margin-bottom: 25px;
      transition: 0.2s;
    }
    .lav-options_load {
      pointer-events: none;
      opacity: 0.5;
    }
    .lav-option {
      display: flex;
      align-items: center;
      position: relative;
      overflow: hidden;
      border-radius: 6px;
      border: 2px solid #E3DFE3;
      background: var(--White, #FFF);
      box-shadow: 0px 6px 15px 0px rgba(0, 0, 0, 0.04);
      transition: 0.3s;
      cursor: pointer;
    }
    .lav-option:not(.active):hover {
      background-color: #F4FAF6;
    }
    .lav-option.active {
      border-color: #2B4632;
      background-color: #F4FAF6;
    }
    .lav-option__image {
      line-height: 0;
      width: 68px;
    }
    .lav-option__image img {
      max-height: 68px;
      max-width: 68px;
    }
    .lav-option__info {
      padding: 5px 16px;
    }
    .lav-option__title {
      color: var(--Dark-Green, #2B4632);
      font-family: 'Inter';
      font-size: 16px;
      font-weight: 700;
      line-height: 24px; /* 150% */
      letter-spacing: 0.32px;
    }
    .lav-option__price {
      margin-top: 3px;
      color: var(--Dark-Green, #2B4632);
      font-family: 'Inter';
      font-size: 14px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0.28px;
    }
    .lav-option__discount {
      position: absolute;
      right: 0;
      top: 0;
      display: flex;
      color: var(--Dark-Green, #2B4632);
      font-family: 'Inter';
      font-size: 14px;
      font-weight: 700;
      line-height: 20px;
      border-radius: 0px 4px;
      overflow: hidden;
    }
    .lav-option__discount div {
      border-bottom-left-radius: 4px;
      padding: 5px 12px;
      background: #FAF000;
    }
    .lav-option__discount .lav-option__discount-seller {
      background: var(--Dark-Green, #2B4632);
      color: #fff;
      padding-right: 15px;
      margin-right: -3px;
    }
    .lav-option__discount .lav-option__discount-value {
      background: var(--Dark-Green, #CE603A);
      color: #fff;
      padding-right: 15px;
      margin-right: -3px;
    }
    .lav-size {
      margin-top: 16px;
      margin-bottom: 20px;
      font-family: 'Inter';
      font-size: 16px;
      line-height: 24px;
    }
    .lav-size__toggler {
      position: relative;
      display: flex;
      text-align: center;
      border-radius: 6px;
      border: 1px solid #DAE5D9;
      background: #FFF;
    }
    .lav-size__toggle {
      position: relative;
      color: #2B4632;
      padding: 5px;
      width: 50%;
      cursor: pointer;
      transition: 0.3s;
      border-radius: 6px;
    }
    @media(hover:hover) {
      .lav-size__toggle:not(.active):hover {
        background: #F4FAF6;
      }
    }
    .lav-size__toggle.active {
      background: #2B4632;
      color: #fff;
    }
    .lav-size__toggle-title {
      font-weight: 700;
    }
    .lav-size__toggle-caption {
      font-size: 14px;
      font-weight: 600;
      line-height: 22px;
      font-family: "Open Sans";
    }
    .lav-size__drop {
      margin-top: 14px;
      border-radius: 6px;
      border: 1px solid #DAE5D9;
      background: #FFF;
      cursor: pointer;
      transition: 0.3s;
    }
    @media(hover:hover) {
      .lav-size__drop:not(.active):hover {
        background-color: #F4FAF6;
      }
    }
    .lav-size__value {
      position: relative;
      padding: 10px 12px;
      color: #2B4632;
      font-family: 'Inter';
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
    }
    .lav-size__value:before {
      content: '';
      position: absolute;
      right: 19px;
      top: 45%;
      transform: translateY(-50%);
      width: 16px;
      height: 16px;
      line-height: 0;
      background: url('${config.dir}/img/dropdown.svg') no-repeat;
      background-size: contain;
      transition: 0.3s;
    }
    .lav-size__drop.active .lav-size__value:before {
      transform: translateY(-50%) rotate(180deg);
      top: 55%;
    }
    .lav-size__list {
      border-top: 1px solid #DAE5D9;
    }
    .lav-size__item {
      padding: 8px 12px;
      transition: 0.3s;
      cursor: pointer;
    }
    .lav-size__item.active {
      background: #2B4632;
      color: #fff;
    }
    @media(hover:hover) {
      .lav-size__item:not(.active):hover {
        background-color: #F4FAF6;
      }
    }
    .lav-size__item + .lav-size__item {
      border-top: 1px solid #eee;
    }
    
    .pro_price .pricing {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 6px;
    }
    span#CurrentVariantOriginalPrice {
      color: var(--Orange-2, #A84A23);
    }
    span#CurrentVariantPrice {
      color: var(--Dark-Green, #2B4632);
      font-weight: 700;
      order: -1;
    }
    span#CurrentVariantOriginalPrice, span#CurrentVariantPrice {
      min-width: 0;
      margin: 0;
      height: auto;
      font-family: 'Inter';
      font-size: 24px;
      line-height: 32px;
    }
    .lav-saved {
      border-radius: 6px;
      background: #F4F4F4;
      padding: 5px 8px 3px;
      color: var(--Dark-Green, #2B4632);
      font-family: 'Inter';
      font-size: 14px;
      font-style: normal;
      line-height: 22px;
    }
    .pricing + .usave {
      display: none;
    }

    .kl_wrapper span.kl{
      color: var(--Dark-Green, #2B4632);
      font-family: 'Inter';
      font-size: 14px;
      font-weight: 400;
      line-height: 22px;
    }
    .kl_wrapper span.kl .font-bold:before {
      content: '£';
      margin-right: -4px;
      margin-left: 5px;
    }
    .kl_wrapper {
      border-bottom: 0;
      padding-bottom: 0;
      margin-top: 7px;
    }
    .prod_desc {
      display: none;
    }
    .pro_form .qq {
      display: none;
    }
    .lav-page-blanket .pro_form .qq {
      display: flex;
      height: auto;
    }
    .pro_form .qw {
      margin: 12px 0;
    }
    .pro_form .money_back {
      justify-content: center;
    }
    .pro_form .money_back>div {
      color: var(--Dark-Green, #2B4632);
      text-align: center;
      font-family: 'Inter';
      font-size: 14px;
      font-weight: 600;
      line-height: 1.3;
    }
    .pro_form .money_back .warranty {
      margin-left: 6px;
      padding-left: 6px;
      border-left: 2px solid #2B4632;
    }
    .paymnt_icns {
      display: none;
    }

    .lav-batch {
      border-radius: 6px;
      background: #F4F4F4;
      padding: 20px 30px 0;
      margin-top: 20px;
      overflow: hidden;
    }
    .lav-batch__title {
      color: var(--Dark-Green, #2B4632);
      font-family: 'Inter';
      font-size: 14px;
      font-weight: 700;
      line-height: 22px;
    }
    .lav-batch__progress {
      border-radius: 30px;
      background: #E2E2E2;
      box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.05) inset;
      height: 4px;
      margin: 10px 0;
    }
    .lav-batch__progress span {
      border-radius: 30px;
      display: flex;
      background-image: linear-gradient(135deg, #d16946 25%, #db896d 25%, #db896d 50%, #d16946 50%, #d16946 75%, #db896d 75%, #db896d 100%);
      background-size: 42.43px 42.43px;
      height: 100%;
    }
    .lav-batch__line {
      display: flex;
      gap: 15px;
      align-items: center;
      justify-content: space-between;
      color: var(--Dark-Green, #2B4632);
      font-family: 'Inter';
      font-size: 14px;
      font-weight: 500;
      line-height: 22px;
    }
    .lav-batch__line-value span {
      font-weight: 700;
      color: var(--Orange-2, #A84A23);
      height: 100%;
    }
    .lav-batch__caption {
      color: var(--Dark-Green, #2B4632);
      font-family: 'Inter';
      font-size: 12px;
      font-weight: 400;
      line-height: 22px;
      text-align: center;
      margin-top: 14px;
      padding-top: 15px;
      border-top: 1px dashed #C7C7C7;
    }
    .lav-batch__sub {
      border-radius: 0px 0px 6px 6px;
      background: #FFE5D3;
      padding: 10px;
      text-align: center;
      color: var(--Dark-Green, #2B4632);
      font-family: 'Inter';
      font-size: 12px;
      line-height: normal;
      margin: 14px -30px 0;
    }
    .lav-batch__sub span {
      font-weight: 700;
    }
    [action="/cart/add"] .ol {
      display: none;
    }
    [action="/cart/add"] > .flex.flex-col.mt-4, [action="/cart/add"] .ol {
      // display: block!important;
    }
    [action="/cart/add"] > .flex.flex-col.mt-4 {
      display: none;
    }
    .below_vs {
      display: none;
    }
    .pro_form .my-5.aa, .pro_form .upsell_wrapper {
      display: none;
    }
    .pre_order_wrapper {
      display: none;
    }
    .btn-cw-cta[name="add"] {
      border-radius: 6px;
      height: 64px;
      gap: 10px;
    }
    .lav-page-blanket .btn-cw-cta[name="add"] {
      height: 56px;
    }
    button.btn-cw-cta[name="add"] span {
      color: #FFF;
      font-family: 'Inter';
      font-size: 20px;
      font-weight: 700;
      line-height: 28px;
      text-transform: none;
    }
    button.btn-cw-cta[name="add"] span.ml-2 {
      display: none;
    }
    .bg-main-tertiary-100 {
      margin: 24px -2.5rem 0;
    }
    #MainProductForm {
      padding-bottom: 0;
      overflow: hidden;
      position: relative;
      top: 0!important;
    }

    .lav-similar {
      margin: 24px -2.5rem 0;;
      padding: 32px 40px;
      color: #fff;
      background: var(--Liner-1, linear-gradient(180deg, #293454 0%, #3F5846 100%));
    }
    .main_img_col + .mg + div {
      min-width: 0;
    }
    .lav-similar__head {
      display: flex;
      justify-content: space-between;
      gap: 15px;
    }
    .lav-similar__title {
      color: #FFF;
      font-family: 'Inter';
      font-size: 27px;
      font-weight: 700;
      line-height: 28px;
      letter-spacing: -0.25px;
    }
    .lav-similar__control {
      display: flex;
      align-items: center;
      gap: 15px;
    }
    .lav-page-blanket .lav-similar__control {
      display: none;
    }
    .lav-page-blanket  .lav-pr__image {
      border: none;
    }
    .lav-similar__arrow {
      cursor: pointer;
      transition: 0.2s;
    }
    .lav-similar__arrow.slick-disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    .lav-similar__prev {
      transform: rotate(180deg);
    }
    @media(hover:hover) {
      .lav-similar__arrow:hover {
        transform: scale(1.1);
      }
      .lav-similar__prev:hover {
        transform: rotate(180deg) scale(1.1);
      }
    }
    .lav-similar__slider {
      margin: 26px -8px 0;
    }
    .lav-similar__slider .slick-list {
      overflow: visible;
    }
    .lav-page-blanket .lav-pr {
      max-width: 175px;
    }
    .lav-pr {
      position: relative;
      margin: 0 8px;
      cursor: pointer;
    }
    .lav-pr__image {
      border-radius: 6px;
      border: 1px solid #FFF;
      background-color: lightgray;
      overflow: hidden;
      line-height: 0;
    }
    .lav-pr__image img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: bottom;
    }
    .lav-pr__title {
      color: var(--White, #FFF);
      font-family: 'Inter';
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
      letter-spacing: -0.25px;
      margin-top: 8px;
    }
    .lav-pr__off {
      position: absolute;
      top: 1px;
      right: 1px;
      border-radius: 0px 4px;
      background: #FAF000;
      padding: 5px 7px;
      color: var(--Dark-Green, #2B4632);
      text-align: center;
      font-family: 'Inter';
      font-size: 14px;
      font-weight: 700;
      line-height: 20px;
    }
    .lav-pr__price {
      display: flex;
      gap: 8px;
      font-family: 'Inter';
      font-size: 14px;
      font-weight: 400;
      line-height: 22px;
      margin-top: 2px;
    }
    .lav-pr__price-new {
      color: #FAF000;
      font-weight: 700;
    }
    .lav-pr__price-old {
      color: rgba(255, 255, 255, 0.60);
      text-decoration: line-through;
    }

    #MainProductForm .lav-setup {
      padding: 24px 40px;
      background: #E7EAF2;
      margin: 18px -2.5rem 0;
      transition: 0.2s;
    }
    #MainProductForm .lav-setup_load {
      pointer-events: none;
      opacity: 0.5;
    }
    #MainProductForm .lav-setup__title {
      color: var(--Blue, #1B437E);
      font-family: 'Inter';
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
      text-transform: uppercase;
    }
    #MainProductForm .lav-setup__list {
      margin-top: 8px;
    }
    #MainProductForm .lav-setup__plate {
      border-radius: 6px;
      border: 1.5px solid #B0BFD4;
      background: #FFF;
      display: flex;
      align-items: flex-start;
      gap: 18px;
      padding: 16px;
    }
    #MainProductForm .lav-setup__plate + .lav-setup__plate {
      margin-top: 8px;
    }
    #MainProductForm .lav-setup__image {
      position: relative;
      line-height: 0;
      flex-shrink: 0;
    }
    #MainProductForm .lav-setup__image svg {
      position: absolute;
      bottom: 8px;
      right: 0;
      left: 0;
      padding: 0 8px;
      width: 100%;
      z-index: 1;
    }
    #MainProductForm .lav-setup__info {
      flex-grow: 1;
    }
    #MainProductForm .lav-setup__image img {
      width: 80px;
      height: 80px;
      flex-shrink: 0;
      border-radius: 6px;
      overflow: hidden;
    }
    #MainProductForm .lav-setup__name {
      color: var(--Blue, #1B437E);
      font-family: 'Inter';
      font-size: 14px;
      font-weight: 800;
      line-height: 24px;
    }
    #MainProductForm .lav-setup__caption {
      color: var(--Blue, #1B437E);
      font-family: 'Inter';
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      margin-top: 4px;
    }
    #MainProductForm .lav-setup__control {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 15px;
      margin-top: 4px;
    }
    #MainProductForm .lav-setup__price {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    #MainProductForm .lav-setup__price-new {
      color: var(--Blue, #1B437E);
      font-family: 'Inter';
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
    }
    #MainProductForm .lav-setup__price-old {
      color: #646464;
      font-family: 'Inter';
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      text-decoration: line-through;
    }
    #MainProductForm .lav-setup__btn {
      border-radius: 6px;
      background: var(--Blue, #1B437E);
      padding: 6px 14px;
      color: #FFF;
      font-family: 'Inter';
      font-size: 14px;
      font-weight: 700;
      line-height: 20px;
      transition: 0.3s;
      cursor: pointer;
    }
    @media(hover:hover) {
      #MainProductForm .lav-setup__btn:hover {
        background-color: #0b2d61;
      }
    }

    .lavs-buy {
      opacity: 0;
      display: none;
      position: sticky;
      top: 115px;
      background: #fff;
      z-index: 9;
      border-radius: 12px;
      padding: 30px 42px;
      box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.10);
      transition: 0.3s;
      transform: translateY(-100%);
    }
    .lavs-buy_load {
      pointer-events: none;
      filter: grayscale(1);
    }
    .lavs-buy.active {
      display: block;
      transform: translateY(0);
    }
    .lavs-buy .lav-option.active {
      pointer-events: none;
      cursor: auto;
    }
    .lavs-buy .pricing {
      display: flex;
      align-items: center;
      gap: 10px;
      margin: 16px 0;
    }
    .lavs-buy .btn-cw-cta {
      width: 100%;
    }
    .pro_wrapper + .fixed + .fixed, .pro_wrapper + .fixed {
      display: none;
    }

    .lavs-fit {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      position: fixed;
      z-index: 25;
      bottom: 20px;
      left: 0;
      right: 0;
      margin: auto;
      border-radius: 16px;
      border: 1px solid #DAE5D9;
      background: #FFF;
      box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.10);
      padding: 20px 40px;
      max-width: 900px;
      width: 100%;
      transition: 0.3s;
    }
    .lav-page-blanket .lavs-fit__info {
      flex-shrink: 0;
    }
    .lavs-fit:not(.active) {
      opacity: 0;
      pointer-events: none;
      transform: translateY(100%);
    }
    .lavs-fit__btn {
      border-radius: 6px;
      border: 1px solid var(--Black, #000);
      background: var(--Yellow, #FAF000);
      box-shadow: 3px 3px 3px 0px rgba(40, 52, 85, 0.65);
      padding: 14px;
      max-width: 300px;
      width: 100%;
      color: #000;
      text-align: center;
      font-family: 'Inter';
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: 22px;
      cursor: pointer;
      transition: 0.2s;
    }
    .lavs-fit__btn.active {
      pointer-events: none;
      cursor: auto;
      filter: grayscale(1);
    }
    @media(hover:hover) {
      .lavs-fit__btn:hover {
        background: #FFD700;
      }
    }
    .lavs-fit__head {
      display: flex;
      gap: 12px;
    }
    .lavs-fit__similar {
      display: none;
    }
    .lavs-fit__title {
      color: var(--Dark-Green, #2B4632);
      font-family: 'Inter';
      font-size: 24px;
      font-weight: 700;
      line-height: 32px;
    }
    .lavs-fit__trust {
      display: flex;
      align-items: center;
      gap: 6px;
      color: var(--Dark-Green, #2B4632);
      font-family: "Open Sans";
      font-size: 13px;
      font-weight: 600;
      line-height: 13px;
      white-space: nowrap;
    }
    .lavs-fit__caption {
      margin-top: 4px;
      color: #2B4632;
      font-family: 'Inter';
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
    }

    .featured-products-section h2 {
      color: #2B4632;
      text-align: center;
      font-family: 'Inter';
      font-size: 36px;
      font-weight: 700;
      line-height: 49px;
      letter-spacing: -0.25px;
    }
    .featured-products-section .tabs-component ul {
      gap: 60px;
    }
    .featured-products-section .tabs-component ul li {
      margin-left: 0;
    }
    .featured-products-section .flag {
      color: var(--Dark-Green, #2B4632);
      text-align: center;
      font-family: 'Inter';
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 20px;
      border-radius: 0px 4px;
      padding: 5px 7px;
      top: 0;
      right: 0;
    }
    .featured-products-section .flag.on-sale:not(.sold-out) {
      background: #FAF000;
    }

    .lav-trusted {
      border-top: 24px solid #DCE6DA;
      border-bottom: 24px solid #DCE6DA;
      padding: 100px 0 110px;
    }
    .lav-trusted .slick-track {
      display: flex !important;
    }
    .lav-trusted .slick-slide {
      height: inherit
    }
    .lav-trusted-clone {
      border-top: 0;
    }
    .lav-trusted-clone .lav-trusted__title {
      display: none;
    }
    .lav-trusted__container {
      max-width: 1330px;
      padding: 0 32px;
      margin: auto;
      width: 100%;
    }
    .lav-trusted__logo {
      line-height: 0;
      text-align: center;
    }
    .lav-trusted__logo img {
      margin: auto;
      max-width: 100%;
    }
    .lav-trusted__title {
      text-align: center;
      margin-top: 28px;
      color: #2B4632;
      font-family: "Inter";
      font-size: 36px;
      font-weight: 700;
      line-height: 32px;
    }
    .lav-trusted__list {
      margin: 42px -8px 0;
    }
    .lav-trusted__item {
      display: flex!important;
      flex-direction: column;
      margin: 0 8px;
      border-radius: 10px;
      border: 1px solid #DBE8F4;
      background: #FFF;
      font-family: "Inter";
      padding: 15px 32px;
    }
    .lav-trusted__item-title {
      color: #2B4632;
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
      transition: 0.2s;
      cursor: pointer;
    }
    @media(hover: hover) {
      .lav-trusted__item-title:hover {
        text-decoration: underline;
        opacity: .7;
      }
    }
    .lav-trusted__item-descr {
      margin-top: 5px;
      color: #3E3E3E;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
    }
    .lav-trusted__item-descr:before, .lav-trusted__item-descr:after {
      content: '"';
    }
    .lav-trusted__item-author {
      color: #2B4632;
      font-size: 14px;
      font-weight: 600;
      line-height: 20px;
      padding-top: 5px;
      margin-top: auto;
    }
    .lav-trusted .slick-arrow {
      width: auto;
      height: auto;
      top: 40%;
      z-index: 9;
    }
    .lav-trusted .slick-prev {
      left: -20px;
    }
    .lav-trusted .slick-next {
      right: -20px;
    }
    .shopify-section.banner-section {
      display: none;
    }
    .crs_cta {
      display: none;
    }
    .lav-page-foamo #MainPhoto1 .flag, .lav-page-foamo  .pro_wrapper .mg .flag, .lav-page-blanket #MainPhoto1 .flag, .lav-page-blanket  .pro_wrapper .mg .flag  {
      display: none;
    }
    .tp_widget_wrapper .tp_wid {
      display: none;
    }
    .lav-batch__caption br {
      display: none;
    }
    .shipped_within_wrapper {
      margin: 0 0 4px;
    }
    .shippd_w_inner {
      justify-content: center;
    }
    .shippd_w_inner .sw_svg {
      display: none;
    }
    .shippd_w_inner .sw_text {
      margin-left: 0;
      display: flex;
      gap: 7px;
    }
    .shippd_w_inner .sw_text h3 {
      color: var(--Dark-Green, #2B4632);
      font-family: 'Inter';
      font-size: 13px;
      font-weight: 400;
      line-height: 22px;
    }
    .lav-stock {
      position: relative;
      color: #15AA0B;
      font-family: "Open Sans";
      font-size: 14px;
      font-weight: 800;
      line-height: 17px;
      margin-top: 12px;
      padding-left: 20px;
    }
    .lav-stock:before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 11px;
      height: 11px;
      border-radius: 50%;
      background: #15AA0B;
    }
    .lav-stock_out {
      color: #d21c1c;
    }
    .lav-stock_out:before {
      background: #d21c1c;
    }
    .lavs-buy__title {
      color: #2B4632;
      font-family: 'Inter';
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
    }
    [action="/cart/add"] .customKlaviyoSubmitted {
      display: none!important;
    }
    #MainProductSection .customKlaviyo {
      margin: 0;
      margin-top: 16px;
      border-radius: 5px;
      border: 1px dashed #A7A5A5;
      background: #FFF;
      color: var(--Dark-Green, #2B4632);
      font-family: 'Inter';
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 22px;
      padding: 3px 8px;
      gap: 4px;
      text-transform: none;
      transition: 0.2s;
    }
    @media (hover:hover) {
       #MainProductSection .customKlaviyo:hover {
        opacity: 0.8;
      }
    }
     #MainProductSection .customKlaviyo svg * {
      fill: #2B4632;
    }
     #MainProductSection .customKlaviyo svg:last-child {
      margin-left: 6px;
    }
    @media(max-width: 1023px) {
      .pro_wrapper .mg {
        padding-top: 0;
      }
      #MainProductSection .customKlaviyo {
        margin-left: 17px;
        margin-right: 17px;
      }
      .lav-breadcrumbs {
        padding: 5px 16px;
      }
      .lav-batch__caption br {
        display: block;
      }
      .crs_cta {
        display: flex;
      }
      .lav-approved, .lav-off {
        top: 20px;
        font-size: 16px;
      }
      .lav-off {
        margin-top: 1px;
        right: 1px;
        padding: 8px 8px 6px;
      }
      div#MainProductForm .lav-title__wrap h1 {
        padding-left: 17px;
        padding-right: 17px;
      }
      .junip-product-summary-clickable {
        margin-top: 0;
        padding: 0 17px;
      }
      .lav-title__caption {
        padding: 0 17px;
      }
      .lav-title__caption-sup {
        padding: 0 17px;
      }
      .lav-size {
        padding: 0 17px;
      }
      .lav-stock {
        margin-left: 17px;
        margin-right: 17px;
      }
      .shipped_within_wrapper {
        margin-bottom: 8px;
      }
      .lav-options {
        padding: 0 17px;
        gap: 8px;
      }
      .lav-option__discount div {
        padding: 5px 8px;
        order: -1;
      }
      .lav-option__discount {
        bottom: 0;
        flex-flow: column;
        justify-content: space-between;
        align-items: flex-end;
        border-radius: 0;
      }
      .lav-option__discount .lav-option__discount-seller, .lav-option__discount .lav-option__discount-value {
        order: 1;
        margin-right: 0;
        padding: 5px 12px;
        border-radius: 4px 0px;
      }
      .lav-batch {
        padding: 10px 16px 0;
        margin-left: 17px;
        margin-right: 17px;
      }
      .lav-batch__caption {
        font-size: 14px;
      }
      .lav-batch__sub {
        font-size: 14px;
      }
      #MainProductForm .lav-setup {
        margin-left: 0;
        margin-right: 0;
        padding: 24px 17px;
      }
      #MainProductForm .lav-setup__plate {
        padding: 13px 12px;
        gap: 16px;
      }
      #MainProductForm .lav-setup__name {
        line-height: 21px;
      }
      #MainProductForm .lav-setup__control {
        gap: 10px;
      }
      .bg-main-tertiary-100 {
        margin: 24px 0 0;
        padding: 0;
      }
      .bg-main-tertiary-100 li, .bg-main-tertiary-100 .tabs-component-panel .relative, section#why-you-need-it-pane p, section#features-pane p, section#giving-back-pane p {
        color: var(--Dark-Grey, #646464);
        font-family: 'Inter';
        font-size: 14px;
        font-weight: 400;
        line-height: 24px;
        margin-bottom: 0;
      }
      a.tabs-component-tab-a {
        font-size: 14px!important;
      }
      .section-main-product .tabs-component>.tabs-component-tabs>.tabs-component-tab {
        padding: 10px 17px;
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .bg-main-tertiary-100 li + li, .bg-main-tertiary-100 .tabs-component-panel .relative + .relative {
        margin-top: 16px;
      }
      .bg-main-tertiary-100 .mx-5 {
        margin-left: 0;
        margin-right: 14px;
        margin-top: 6px;
      }
      .bg-main-tertiary-100 .tabs-component {
        padding-bottom: 30px;
      }
      section#why-you-need-it-pane, section#features-pane, section#giving-back-pane {
        padding: 0 17px;
      }
      .bg-main-tertiary-100 .tabs-component .tabs-component-panel {
        padding: 0 17px;
      }
      .lav-similar {
        margin: 24px 0 0;
        padding: 32px 17px;
        overflow: hidden;
      }
      .lav-similar__head {
        justify-content: center;
      }
      .lav-similar__control {
        display: none;
      }
      .featured-products-section h2 {
        color: var(--Dark-Blue, #283455);
        font-size: 27px;
        font-style: normal;
        line-height: 28px;
      }
      .featured-products-section .flag {
        z-index: 1;
      }
      .featured-products-section .tabs-component-panels {
        padding: 0 17px;
      }
      .featured-products-section .swiper {
        overflow: visible;
      }
      .featured-products-section {
        overflow: hidden;
      }
      .featured-products-section .tabs-component ul {
        gap: 55px;
      }
      .lav-trusted {
        padding: 30px 0;
        border: none;
        background: linear-gradient(270deg, #E2E9DC 5.9%, #FCF5E6 106.79%);
      }
      .lav-trusted__title {
        color: #2B4632;
        font-family: "Open Sans";
        font-size: 26px;
        font-weight: 700;
        line-height: 32px;
        margin-top: 16px;
      }
      .lav-trusted__list {
        margin-top: 16px;
        margin-bottom: 0!important;
      }
      .lav-trusted .slick-next [fill="#F4B184"] {
        stroke: #e3e9dc;
      }
      .lav-trusted .slick-prev [fill="#F4B184"] {
        stroke: #f8f4e4;
      }
      .lav-trusted .slick-dots {
        position: static;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 16px;
        gap: 8px;
      }
      .lav-trusted .slick-dots li {
        margin: 0;
        width: auto;
        height: auto;
      }
      .lav-trusted .slick-dots li button {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #B9B9B9;
        transition: 0.2s;
      }
      .lav-trusted .slick-dots li.slick-active button {
        background-color: #2B4632;
      }
      .lav-trusted .slick-dots li button:before {
        display: none;
      }
      .lav-trusted-clone {
        margin-top: 28px;
      }
      .img_txt_wrapp .gap-y-5.crs_cta {
        flex-direction: row!important;
        column-gap: normal!important;
        width: 100%;
        padding: 0 8px;
        order: 2;
        justify-content: center;
      }
      .img_txt_wrapp .crs_cta a,
      .img_txt_wrapp .crs_cta .google-rating {
          display: flex!important;
          margin: 26px 8px 0 8px!important;
      }
      .crs_cta-origin {
        display: none!important;
      }
      .btn-section-cta {
          width: 100%;
          max-width: 240px;
      }
      .lavs-buy {
        display: none!important;
      }
      .lavs-fit {
        padding: 11px 17px;
        bottom: initial;
        top: 70px;
        left: 0;
        right: 0;
        z-index: 49;
        box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
        border-radius: 0;
        border-top: 1px solid #F9F9F9;
      }
      .lavs-fit__info {
        display: none;
      }
      .lavs-fit:not(.active) {
        transform: translateY(-100%);
      }
      .lavs-fit__btn {
        max-width: 205px;
        font-size: 18px;
        padding: 13px 8px;
      }
      .lavs-fit__similar {
        display: block;
        color: var(--Dark-Green, #2B4632);
        font-family: 'Inter';
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        text-decoration-line: underline;
        white-space: nowrap;
        transition: 0.2s;
      }
      .lavs-fit__similar.active {
        pointer-events: none;
        cursor: auto;
        filter: grayscale(1);
      }
      .lav-size__value {
        padding-right: 40px;
        white-space: nowrap;
      }
      .lav-size__value:before {
        right: 10px;
      }
    }
    @media(max-width: 389px) {
      .kl_wrapper span.kl {
        font-size: 12px;
      }
      .lav-size__drop {
        font-size: 13px;
      }
      .lav-size__value {
        font-size: 14px;
        padding-right: 30px;
      }
      .lavs-fit {
        gap: 12px;
      }
      .lavs-fit__btn {
        font-size: 16px;
        padding: 12px 7px;
      }
      span#CurrentVariantOriginalPrice, span#CurrentVariantPrice {
        font-size: 22px;
        line-height: 30px;
      }
      .pro_form .money_back>div {
        font-size: 12px;
      }
      #MainProductForm .lav-setup__btn {
        padding: 6px 8px;
      }
      a.tabs-component-tab-a {
        font-size: 13px!important;
      }
      .lav-pr__title {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      .lav-pr__title, .lav-pr__price {
        font-size: 13px;
      }
      .featured-products-section .tabs-component ul {
        gap: 50px;
      }
      .lav-trusted__item-descr {
        font-size: 15px;
      }
    }

  `

const stylesEl = document.createElement('style')
stylesEl.classList.add('exp-styles')
stylesEl.innerHTML = styles

// *** Logic *** //
let lavType = null
let isFireExpand = false
const eventsFireList = []

initExp()

async function initExp() {
  await waitFor(() => document.head && document.body, false, { ms: 100 })

  console.debug('** InitExp **')

  handleMiniCart()
  addMiniCartEvents()

  initMutation('#shopify-section-minicart', (el) => {
    if (!(el instanceof HTMLElement)) return
    if (el.classList.contains('minicart_inner')) {
      _$('#MainProductForm .lav-setup.lav-setup_load')?.classList.remove(
        'lav-setup_load'
      )

      handleMiniCart()

      if (_$('.cart_count') && _$('.minicart_items')) {
        _$('.cart_count').innerText = parseInt(
          _$('.minicart_items').textContent
        )
      }
    }
  })

  if (location.href.includes('/the-dual-pillow')) {
    _$('body').classList.add('lav-page-dual')
    lavType = 'dual'
  } else if (location.href.includes('/the-foamo')) {
    _$('body').classList.add('lav-page-foamo')
    lavType = 'foamo'
  } else if (location.href.includes('/mela-weighted-blanket')) {
    _$('body').classList.add('lav-page-blanket')
    lavType = 'blanket'
  } else {
    return false
  }

  document.body.appendChild(stylesEl)

  addBreadcrumbs()
  handleGallery()
  handleProductInfo()
  handleAdditionalInfo()

  waitFor('.img_txt_wrapp > .txt_sec > .flex', addCta)
  waitFor('.customKlaviyo', () => {
    _$$('.customKlaviyo').forEach((node) => {
      if (node.textContent.includes('Additional')) {
        node.innerHTML = node.innerHTML.replace('Additional', 'additional')
      }
    })
  })
}

function addMiniCartEvents() {
  visibilityEvent('#shopify-section-minicart', () => {
    pushDataLayer(
      'exp_pdp_slide_cart_section_15',
      'Section',
      'Visibility',
      'Slide-in cart'
    )
  })

  document.addEventListener('click', (e) => {
    // console.log('clickMini', e.target);
    if (
      e.target.closest('#shopify-section-minicart') &&
      e.target.innerText?.includes('Get additional')
    ) {
      pushDataLayer(
        'exp_pdp_slide_cart_button_11',
        'Get additional 15% Off',
        'Button',
        'Slide-in cart'
      )
    }

    if (e.target.closest('.chckout') && e.target.closest('.checkout_wrapper')) {
      pushDataLayer(
        'exp_pdp_slide_cart_button_12',
        'Proceed to secure checkout',
        'Button',
        'Slide-in cart'
      )
    }

    if (e.target.closest('.minicart_head') && e.target.closest('svg')) {
      pushDataLayer(
        'exp_pdp_slide_cart_button_13',
        'Close',
        'Button',
        'Slide-in cart'
      )
    }

    if (
      e.target.closest('.trash') &&
      e.target.closest('svg') &&
      e.target.closest('#shopify-section-minicart')
    ) {
      pushDataLayer(
        'exp_pdp_slide_cart_button_14',
        'Delete',
        'Button',
        'Slide-in cart'
      )
    }

    // if (
    //   e.target.closest('.slide_cart_quantity') &&
    //   e.target.closest('#shopify-section-minicart')
    // ) {
    //   pushDataLayer(
    //     'exp_pdp_slide_cart_button_15',
    //     'Quantity',
    //     'Button',
    //     'Slide-in cart'
    //   );
    // }
  })
}

function handleMiniCart() {
  if (_$('#shopify-section-minicart .empty_cart')) return

  console.log('updateMiniCart')

  if (!_$('#lav-minicart-style')) {
    addStyles()
  }

  handleFree()
  handleBody()
  handleFooter()
  addUpsell()
  updateHeight()

  window.addEventListener('resize', updateHeight)

  if (_$('#shopify-section-minicart .customKlaviyo')) {
    _$('#shopify-section-minicart .customKlaviyo').innerHTML = _$(
      '#shopify-section-minicart .customKlaviyo'
    ).innerHTML.replace('Additional', 'additional')
  }

  if (_$('#shopify-section-minicart .customKlaviyo')) {
    visibilityEvent('#shopify-section-minicart .customKlaviyo', () => {
      pushDataLayer(
        'exp_pdp_slide_cart_section_16',
        'Section',
        'Visibility',
        'Slide-in cart. Get additional 15% Off'
      )
    })
  }

  if (_$('.minicart_inner .chckout')) {
    visibilityEvent('.minicart_inner .chckout', () => {
      pushDataLayer(
        'exp_pdp_slide_cart_section_17',
        'Section',
        'Visibility',
        'Slide-in cart. Proceed to secure checkout'
      )
    })
  }

  if (_$('.lavc-guarantee')) {
    visibilityEvent('.lavc-guarantee', () => {
      pushDataLayer(
        'exp_pdp_slide_cart_section_18',
        'Section',
        'Visibility',
        'Slide-in cart. 30-Day Money Back Guarantee | 365-Day Warranty'
      )
    })
  }

  _$$('.minicart_inner [name="quantity"]').forEach((item) => {
    item.addEventListener('change', () => {
      pushDataLayer(
        'exp_pdp_slide_cart_button_15',
        'Quantity',
        'Button',
        'Slide-in cart'
      )
    })
  })

  function addStyles() {
    const style = /* html */ `
    <style id='lav-minicart-style'>
      .minicart_header {
        padding: 8px 16px;
        justify-content: left;
      }
      .minicart_head h3 {
        margin-left: 0;
        color: #2B4632;
        font-family: 'Inter';
        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
        letter-spacing: 0;
      }
      .minicart_head svg {
        position: absolute;
        right: 16px;
      }
      .minicart_items {
        margin-left: 5px;
        color: #2B4632;
        font-family: 'Inter';
        font-size: 14px;
        line-height: 20px;
      }
      .minicart_items:before {
        content: '(';
      }
      .minicart_items:after {
        content: ')';
      }
      .lavc-shipping {
        background: #E2EEE8;
        padding: 6px 16px;
        display: flex;
        align-items: center;
        gap: 6px;
        justify-content: center;
        color: #2B4632;
        font-family: 'Inter';
        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
      }
      .choice_wrapper, .free_shipping_wrapper {
        display: none;
      }
      .secure_checkout .cs, .secure_checkout .scpi {
        display: none;
      }
      .secure_checkout {
        margin: 8px 16px 10px;
      }
      .checkout_wrapper .klarna_wrapper {
        margin-top: 8px;
      }
      .checkout_wrapper .klarna_wrapper p {
        margin-bottom: 0;
        font-size: 14px;
        font-weight: 500;
      }
      .lavc-guarantee {
        color: var(--Dark-Green, #2B4632);
        font-family: 'Inter';
        font-size: 12px;
        font-weight: 700;
        line-height: 22px;
        text-align: center;
        margin-top: 6px;
      }
      .lavc-guarantee span {
        font-weight: normal;
      }
      .secure_checkout a.chckout {
        height: 50px;
        border-radius: 6px;
        border: 1px solid var(--Black, #000);
        background: var(--Yellow, #FAF000);
        box-shadow: 3px 3px 3px 0px rgba(40, 52, 85, 0.65);
        transition: 0.3s;
      }
      .secure_checkout a.chckout span {
        color: var(--Black, #000);
        text-align: center;
        font-family: 'Inter';
        font-size: 16px;
        font-weight: 700;
        line-height: 22px;
      }
      .secure_checkout a.chckout svg {
        margin-right: 14px;
      }
      @media(hover:hover) {
        .secure_checkout a.chckout:hover {
          background-color: #FFD700
        }
      }
      .minicart_inner .shipping_wrapper {
        display: none;
      }
      .minicart_inner .checkout_wrapper {
        box-shadow: 0px 0px 16px 0px rgba(43, 70, 50, 0.20);
      }
      .minicart_inner .cart_total {
        padding: 10px 16px;
        display: grid;
        gap: 4px;
      }
      .minicart_inner .cart_total span.shp,  .minicart_inner .cart_total span.st,  .minicart_inner .cart_total span.tot {
        color: var(--Dark-Green, #2B4632);
        font-family: 'Inter';
        font-size: 14px;
        font-weight: 600;
        line-height: 24px;
        letter-spacing: 0;
      }
      .minicart_inner .cart_total .total + .total span.tot {
        color: #A84A23;
      }
      .minicart_inner span.free, .minicart_inner span.stt, .minicart_inner span.tot_val, .minicart_inner span.tot_val_save {
        color: var(--Dark-Green, #2B4632);
        font-weight: 700;
        font-family: 'Inter';
        font-size: 14px;
        line-height: 24px;
        letter-spacing: 0;
      }
      .minicart_inner span.tot_val_save {
        color: #A84A23;
      }
      .minicart_inner .shipping, .minicart_inner .total {
        margin-bottom: 0;
      }
      .minicart_inner .cart_total .sub_total {
        order: -1;
      }
      .minicart_inner .cart_total .sub_total > span {
        font-size: 16px!important;
      }
      .lavc-disc {
        color: var(--Dark-Grey, #646464);
        font-family: 'Inter';
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        text-decoration: line-through;
        margin-right: 9px;
      }
      .minicart_inner .customKlaviyoSubmitted {
        margin-top: 0;
      }
      .minicart_inner .item_title h3 {
        color: #2B4632;
        font-family: Inter;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 20px;
        letter-spacing: 0;
      }
      .minicart_inner .item_title {
        margin-right: 5px;
      }
      .minicart_inner .item_price span:not(.compare) {
        color: #2B4632;
        font-family: 'Inter';
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
        letter-spacing: 0;
      }
      .minicart_inner .item_price span.compare {
        color: #646464;
        font-family: 'Inter';
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        text-decoration: line-through;
      }
      .minicart_inner:not(.lav-mini-expand) .item_block + .item_block {
        display: none;
      }
      .minicart_inner .items_wrapper {
        padding: 16px;
      }
      .lavc-expand__toggler {
        color: #2B4632;
        font-family: 'Inter';
        font-size: 14px;
        font-weight: 600;
        line-height: normal;
        text-decoration-line: underline;
        margin-top: 16px;
        transition: 0.3s;
        cursor: pointer;
      }
      @media(hover:hover) {
        .lavc-expand__toggler:hover {
          opacity: 0.7;
        }
      }
      #shopify-section-minicart .lav-setup {
        margin-top: 16px;
        transition: 0.2s;
      }
      #shopify-section-minicart .lav-setup_load {
        pointer-events: none;
        opacity: 0.5;
      }
      #shopify-section-minicart .lav-setup_disable {
        display: none!important;
      }
      #shopify-section-minicart .lav-setup__title {
        color: var(--Blue, #1B437E);
        font-family: 'Inter';
        font-size: 14px;
        font-weight: 700;
        line-height: 24px;
        text-transform: uppercase;
      }
      #shopify-section-minicart .lav-setup__list {
        margin-top: 4px;
      }
      #shopify-section-minicart .lav-setup__plate {
        border-radius: 6px;
        border: 1.5px solid #B0BFD4;
        background: #FFF;
        display: flex;
        align-items: flex-start;
        gap: 10px;
        padding: 10px;
      }
      #shopify-section-minicart .lav-setup__plate + .lav-setup__plate {
        margin-top: 4px;
      }
      #shopify-section-minicart .lav-setup__image {
        position: relative;
        line-height: 0;
        flex-shrink: 0;
      }
      #shopify-section-minicart .lav-setup__image svg {
        position: absolute;
        bottom: 8px;
        right: 0;
        left: 0;
        padding: 0 8px;
        width: 100%;
        z-index: 1;
      }
      #shopify-section-minicart .lav-setup__info {
        flex-grow: 1;
      }
      #shopify-section-minicart .lav-setup__image img {
        width: 80px;
        height: 80px;
        flex-shrink: 0;
        border-radius: 6px;
        overflow: hidden;
      }
      #shopify-section-minicart .lav-setup__name {
        color: var(--Blue, #1B437E);
        font-family: 'Inter';
        font-size: 14px;
        font-weight: 800;
        line-height: 21px;
      }
      #shopify-section-minicart .lav-setup__control {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        margin-top: 8px;
      }
      #shopify-section-minicart .lav-setup__price {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      #shopify-section-minicart .lav-setup__price-new {
        color: var(--Blue, #1B437E);
        font-family: 'Inter';
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
      }
      #shopify-section-minicart .lav-setup__price-old {
        color: #646464;
        font-family: 'Inter';
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        text-decoration: line-through;
      }
      #shopify-section-minicart .lav-setup__btn {
        border-radius: 6px;
        background: var(--Blue, #1B437E);
        padding: 6px 20px;
        color: #FFF;
        font-family: 'Inter';
        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
        transition: 0.3s;
        cursor: pointer;
      }
      @media(hover:hover) {
        #shopify-section-minicart .lav-setup__btn:hover {
          background-color: #0b2d61;
        }
      }
      #shopify-section-minicart .customKlaviyo {
        margin: 0 auto;
        border-radius: 5px;
        border: 1px dashed #A7A5A5;
        background: #FFF;
        color: var(--Dark-Green, #2B4632);
        font-family: 'Inter';
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 22px;
        padding: 3px 8px;
        gap: 4px;
        text-transform: none;
        padding-left: 8px;
        padding-right: 8px;
        width: calc(100% - 28px);
        transition: 0.2s;
      }
      @media (hover:hover) {
         #shopify-section-minicart .customKlaviyo:hover {
          opacity: 0.8;
        }
      }
       #shopify-section-minicart .customKlaviyo svg * {
        fill: #2B4632;
      }
      #shopify-section-minicart .customKlaviyo svg:last-child {
        margin-left: 6px;
      }
      #shopify-section-minicart .customKlaviyo svg:last-child {
        margin-left: 0;
      }
      #shopify-section-minicart .customKlaviyo>div {
        width: 100%;
      }
      #shopify-section-minicart .customKlaviyo>div svg:last-child {
        margin-left: auto;
      }
      @media(max-width: 1023px) {
         #shopify-section-minicart .customKlaviyo {
          margin-left: 17px;
          margin-right: 17px;
        }
      }
      @media(max-width: 640px) {
        .minicart_inner, .minicart.activated, .opnd {
          height: 100vh;
          height: 100dvh;
        }
        .minicart {
          max-width: 96%;
        }
        .minicart_inner {
        }
        .needsclick.kl-private-reset-css-Xuajs1[tabindex="0"] {
          z-index: 99999!important;
        }
      }
      @media(max-width: 389px) {
        #shopify-section-minicart .lav-setup__btn {
          padding: 6px 8px;
        }
      }
    </style>
  `

    document.body.insertAdjacentHTML('beforeend', style)
  }

  function handleFree() {
    if (!_$('.free_shipping_wrapper')) return

    const freeEl = /* html */ `<div class='lavc-shipping'>${getSvg(
      'freeShipping'
    )} You've qualified for FREE UK shipping!</div>`

    _$('.minicart_header').insertAdjacentHTML('afterend', freeEl)
  }

  function handleBody() {
    if (isFireExpand) {
      _$('.minicart_inner').classList.add('lav-mini-expand')
      return
    }

    const items = _$$('.minicart_inner .item_block')

    if (items.length > 1) {
      _$('.items_wrapper').insertAdjacentHTML(
        'beforeend',
        `<div class='lavc-expand__toggler'>Show all products (${
          items.length - 1
        })</div>`
      )

      _$('.lavc-expand__toggler').addEventListener('click', function () {
        pushDataLayer(
          'exp_pdp_slide_cart_link_02',
          'Show all products',
          'Link',
          'Slide-in cart'
        )
        this.remove()
        isFireExpand = true
        _$('.minicart_inner').classList.add('lav-mini-expand')
      })
    }
  }

  function handleFooter() {
    // Checkout button
    _$('.secure_checkout a.chckout span').innerText =
      'Proceed to secure checkout'
    _$('.secure_checkout a.chckout svg').remove()
    _$('.secure_checkout a.chckout').insertAdjacentHTML(
      'afterbegin',
      getSvg('lock')
    )

    // Checkout button caption
    const guarantee = /* html */ `
      <div class='lavc-guarantee'>30-Day Money Back Guarantee <span>|</span> 365-Day Warranty</div>
    `
    _$('.secure_checkout').insertAdjacentHTML('beforeend', guarantee)

    // Klaviyo
    if (_$('.minicart_wrapper .customKlaviyo')) {
      _$('.minicart_wrapper .customKlaviyo > svg').remove()
      _$('.minicart_wrapper .customKlaviyo > div').insertAdjacentHTML(
        'beforeend',
        getSvg('arrowRight')
      )
    }

    // Subtotal
    if (_$('.minicart_inner .total + .total .tot')) {
      _$('.minicart_inner .total + .total .tot').innerText = 'You just saved'
    }

    if (_$('.minicart_inner .shipping .shp')) {
      _$('.minicart_inner .shipping .shp').innerText = _$(
        '.minicart_inner .shipping .shp'
      ).innerText.replace(':', '')
    }

    if (_$('.minicart_inner .cart_total .sub_total')) {
      _$('.minicart_inner .cart_total .sub_total .st').textContent = 'Subtotal'
    }

    if (_$('.minicart_inner .total .lineth')) {
      _$('.minicart_inner .total .lineth').closest('.total').style.display =
        'none'
      const price = _$('.minicart_inner .total .lineth').innerText

      _$('.minicart_inner .sub_total span.stt').insertAdjacentHTML(
        'afterbegin',
        `<span class="lavc-disc">${price.trim()}</span>`
      )
    }
  }

  function updateHeight() {
    if (!_$('.items_wrapper')) return

    const offset =
      _$('.checkout_wrapper').offsetHeight +
      _$('.minicart_header').offsetHeight +
      _$('.lavc-shipping').offsetHeight

    height = _$(
      '.items_wrapper'
    ).style.maxHeight = `calc(${window.innerHeight}px - ${offset}px`

    if (window.innerWidth < 640) {
      _$('.minicart_inner').style.maxHeight = window.innerHeight + 'px'
    }
  }

  function addUpsell() {
    const upsellList = [
      {
        title: 'Eucalyptus Silk Pillowcases (2&#160;Pack) White',
        src: '//www.aeyla.co.uk/cdn/shop/products/Euclayptussilkpillowcase_white.webp?crop=center&height=300&v=1704709097&width=300',
        url: 'https://www.aeyla.co.uk/products/eucalyptus-silk-pillow-cases',
        oldPrice: '£65.00',
        newPrice: '£39.00',
        alias: 'Eucalyptus Silk Pillow Cases - 2 Pack',
        id: '44467942981918'
      },
      {
        title: 'Eucalyptus Sleep Mask White',
        src: 'https://www.aeyla.co.uk/cdn/shop/products/MEL2923-MelaComfortWHITE.webp?crop=center&height=300&v=1677417887&width=300',
        url: 'https://www.aeyla.co.uk/products/eucalyptus-silk-eye-mask',
        oldPrice: '£25.00',
        newPrice: '£15.00',
        alias: 'Eucalyptus Silk Eye Mask',
        id: '44467937280286'
      },
      {
        title: 'Sleep Enhancer Pillow Spray (50ml)',
        src: '//www.aeyla.co.uk/cdn/shop/products/MEL2923-MelaComfort7438.webp?crop=center&height=300&v=1677452179&width=300',
        url: 'https://www.aeyla.co.uk/products/sleep-enhancing-spray',
        oldPrice: '£19.99',
        newPrice: '£14.99',
        alias: 'Sleep Enhancer Pillow Spray',
        id: '44467910967582'
      }
    ]

    const productInCart = Array.from(_$$('.minicart_inner .item_block')).map(
      (el) => _$('h3', el).textContent.trim()
    )

    upsellListFiltered = upsellList.filter(({ alias }) => {
      return productInCart.every((name) => {
        // return true;
        return !name.includes(alias)
      })
    })

    if (!upsellListFiltered.length) return

    const setupWrapper = document.createElement('div')
    setupWrapper.classList.add('lav-setup')
    setupWrapper.classList.add('lav-setup_disable')
    setupWrapper.innerHTML = /* html */ `
      <div class="lav-setup__title">Complete your ultimate sleep setup</div>
      <div class="lav-setup__list"></div>
    `

    upsellListFiltered.forEach((item) => {
      const pr = document.createElement('div')
      pr.classList.add('lav-setup__plate')
      pr.innerHTML = /* html */ `
          <div class="lav-setup__image">
            <img src='${item.src}' />
            ${getSvg('trust')}
          </div>
  
          <div class="lav-setup__info">
            <div class="lav-setup__name">${item.title}</div>
  
            <div class="lav-setup__control">
              <div class="lav-setup__price">
                <div class="lav-setup__price-new">${item.newPrice}</div>
                <div class="lav-setup__price-old">${item.oldPrice}</div>
              </div>
              <div class="lav-setup__btn">Add</div>
            </div>
          </div>
        `

      pr.querySelector('.lav-setup__btn').addEventListener('click', () => {
        // window.open(item.url, '_blank');
        // return;
        pushDataLayer(
          'exp_pdp_slide_cart_button_16',
          `${item.title} - Add to cart`,
          'Button',
          'Slide-in cart. Complete your ultimate sleep setup'
        )

        _$('#shopify-section-minicart .lav-setup')?.classList.add(
          'lav-setup_load'
        )

        addToCartByAjax(item.id)
      })

      const handle = item.url.split('/').pop()

      $.ajax({
        type: 'GET',
        url: '/products/' + handle + '.js',
        dataType: 'json',
        success: function (product) {
          const variant = product.variants.find((v) => v.id == item.id)

          if (variant && !variant.available) {
            pr.remove()
            console.log('Product is out of stock.', product)
            if (!_$('#shopify-section-minicart .lav-setup__plate')) {
              _$('#shopify-section-minicart .lav-setup')?.classList.add(
                'lav-setup_disable'
              )
            }
          } else {
            _$('#shopify-section-minicart .lav-setup').classList.remove(
              'lav-setup_disable'
            )

            setupWrapper
              .querySelector('.lav-setup__list')
              .insertAdjacentElement('beforeend', pr)
          }
        },
        error: function (xhr, status, error) {
          console.log('Error fetching product data:', error)
        }
      })
    })

    _$('#shopify-section-minicart  .items_wrapper').insertAdjacentElement(
      'beforeend',
      setupWrapper
    )

    visibilityEvent('#shopify-section-minicart .lav-setup', () => {
      pushDataLayer(
        'exp_pdp_slide_cart_section_19',
        'Section',
        'Visibility',
        'Slide-in cart. Complete your ultimate sleep setup'
      )
    })
  }
}

function addToCartByAjax(id) {
  $.ajax({
    url: '/cart/add.js',
    type: 'POST',
    data: {
      items: [
        {
          id: id,
          quantity: 1
        }
      ]
    },
    dataType: 'json',
    error: function (err) {
      console.log(err)
    }
  }).done(function (item) {
    addToCartOK()
    // _$('#shopify-section-minicart .lav-setup')?.classList.remove(
    //   'lav-setup_load'
    // );

    // $.getJSON('/cart.js', function (c) {
    //   $('.ic').find('.cart_count').text(c.item_count)
    //   $('#AddToCart').text('ADD TO CART')
    // })
  })
}

function addBreadcrumbs() {
  const breadcrumbs = /* html */ `
      <div class="lav-breadcrumbs">
        <a href="${_$('.breadcrumb .text-base:first-child').href}">
          ${_$('.breadcrumb .text-base:first-child').textContent}
        </a>
        <span> / </span>
        <a href="/collections/${
          lavType === 'blanket' ? 'weighted-blanket-blanket-covers' : 'pillows'
        }">${lavType === 'blanket' ? 'Blankets' : 'Pillows'}</a>
        <span> / </span>
        <span>${_$('.breadcrumb .text-base:last-child').textContent}</span>
      </div>
    `

  _$('#MainProductSection').insertAdjacentHTML('afterbegin', breadcrumbs)

  _$$('.lav-breadcrumbs a').forEach((link) => {
    link.addEventListener('click', function (e) {
      pushDataLayer(
        'exp_pdp_breadcrumbs_link',
        link.innerText.trim(),
        'Link',
        'PDP breadcrumbs'
      )
    })
  })
}

function handleGallery() {
  if (lavType === 'dual') {
    _$('[href="#MainPhoto1"] img').removeAttribute('srcset')
    _$('[href="#MainPhoto1"] img').src = `${config.dir}/img/new-dual.png`
    _$('#MainPhoto1 img').removeAttribute('srcset')
    _$('#MainPhoto1 img').src = `${config.dir}/img/new-dual.png`

    _$('.product-carousel .swiper-slide img').removeAttribute('srcset')
    _$(
      '.product-carousel .swiper-slide img'
    ).src = `${config.dir}/img/new-dual.png`

    _$('.product-carousel .swiper-slide .relative').insertAdjacentHTML(
      'beforeend',
      /* html */ `<div class='lav-approved'>${getSvg(
        'approved'
      )} Osteopath-approved</div>`
    )

    _$('#MainPhoto1').insertAdjacentHTML(
      'beforeend',
      /* html */ `<div class='lav-approved'>${getSvg(
        'approved'
      )} Osteopath-approved</div><div class='lav-off'>20-50% Off</div>`
    )

    _$('.product-carousel').insertAdjacentHTML(
      'beforeend',
      /* html */ `<div class='lav-off'>20-50% Off</div>`
    )
  } else if (lavType === 'foamo') {
    _$('.product-carousel .swiper-slide .relative').insertAdjacentHTML(
      'beforeend',
      /* html */ `<div class='lav-approved'>${getSvg(
        'approved'
      )} Osteopath-approved</div>`
    )

    _$('#MainPhoto1').insertAdjacentHTML(
      'beforeend',
      /* html */ `<div class='lav-approved'>${getSvg(
        'approved'
      )} Osteopath-approved</div><div class='lav-off'>New</div>`
    )

    _$('.product-carousel').insertAdjacentHTML(
      'beforeend',
      /* html */ `<div class='lav-off'>New</div>`
    )
  } else if (lavType === 'blanket') {
    _$('.product-carousel .swiper-slide .relative').insertAdjacentHTML(
      'beforeend',
      /* html */ `<div class='lav-approved'>${getSvg(
        'approved'
      )} Top-Rated Blanket</div>`
    )

    _$('#MainPhoto1').insertAdjacentHTML(
      'beforeend',
      /* html */ `<div class='lav-approved'>${getSvg(
        'approved'
      )} Top-Rated Blanket</div><div class='lav-off'>35% Off</div>`
    )

    _$('.product-carousel').insertAdjacentHTML(
      'beforeend',
      /* html */ `<div class='lav-off'>35% Off</div>`
    )
  }
}

function handleProductInfo() {
  handleHead()
  if (lavType !== 'blanket') {
    handleOptions()
  }
  if (lavType === 'blanket') {
    waitFor('.shadow-product-option', handleSize)
  }
  addSaved()
  initMutation(_$('.pricing + .usave'), addSaved)
  moveKlaviyo()
  waitFor(() => _$('.pre_order_wrapper .pre_order_info>h3'), handleNextBatch)
  waitFor('.upsell_wrapper', addSetup)
  addSimilar()
  handleAddToCart()
  handleSticky()
  addEvents()

  function handleAddToCart() {
    _$('#AddToCart').insertAdjacentHTML('afterbegin', getSvg('basket'))

    const innerHtmlAddToCart = _$('#AddToCart').innerHTML

    initMutation(_$('#AddToCart'), (node) => {
      if (
        node.textContent.toLowerCase().includes('add to cart') &&
        !_$('#AddToCart span')
      ) {
        _$('#AddToCart').innerHTML = innerHtmlAddToCart
      }
    })

    if (lavType === 'blanket' && _$('.shipped_within_wrapper')) {
      _$('.pro_form .money_back').insertAdjacentElement(
        'beforebegin',
        _$('.shipped_within_wrapper')
      )
    }
  }

  function handleHead() {
    _$('div#MainProductForm h1').closest('div').classList.add('lav-title__wrap')

    if (lavType === 'dual' || lavType === 'foamo') {
      let size = '50cm x 75cm'
      _$('.lav-title__wrap h1').insertAdjacentHTML(
        'beforeend',
        /* html */ `<span class='lav-title__size'>${size}</span>`
      )
    }

    let caption =
      'From the first sleep, say goodbye to morning pain and grogginess'

    if (lavType === 'foamo') {
      caption =
        'Adjustable pillow for custom comfort, reducing neck and back pain'
    }
    if (lavType === 'blanket') {
      caption = 'Discover relaxation in the comforting clasp of a gentle hug'

      _$('.lav-title__wrap').insertAdjacentHTML(
        'beforeend',
        /* html */ `<div class='lav-title__caption-sup'>Weighted Blanket with Integrated Cover</div>`
      )
    }

    _$('.lav-title__wrap').insertAdjacentHTML(
      'beforeend',
      /* html */ `<div class='lav-title__caption'>${caption}</div>`
    )
  }

  function handleOptions() {
    const options = {
      dual: [
        {
          title: '1 Pillow',
          price: '69.00',
          caption: 'pillow',
          img: 'new-dual.png',
          discount: 20,
          isBestSeller: false,
          isBestValue: false,
          target: '8133597004062-1-0'
        },
        {
          title: '2 Pillows',
          price: '49.50',
          caption: 'pillow',
          img: '2pillow.jpg',
          discount: 45,
          isBestSeller: true,
          isBestValue: false,
          target: '8133597004062-1-1'
        },
        {
          title: '4 Pillows',
          price: '44.50',
          caption: 'pillow',
          img: '4pillow.jpg',
          discount: 50,
          isBestSeller: false,
          isBestValue: true,
          target: '8133597004062-1-2'
        }
      ],
      foamo: [
        {
          title: '1 Pillow',
          price: '79.00',
          caption: 'pillow',
          img: 'new-dual.png',
          discount: 10,
          isBestSeller: false,
          isBestValue: false,
          target: '8133596217630-1-0'
        },
        {
          title: '2 Pillows',
          price: '49.50',
          caption: 'pillow',
          img: '2pillow.jpg',
          discount: 45,
          isBestSeller: true,
          isBestValue: false,
          target: '8133596217630-1-1'
        },
        {
          title: '4 Pillows',
          price: '44.50',
          caption: 'pillow',
          img: '4pillow.jpg',
          discount: 50,
          isBestSeller: false,
          isBestValue: true,
          target: '8133596217630-1-2'
        }
      ]
    }

    if (!options[lavType]) return

    const optionsEl = document.createElement('div')
    optionsEl.classList.add('lav-options')

    options[lavType]?.forEach((option) => {
      const optionEl = document.createElement('div')
      optionEl.classList.add('lav-option')
      optionEl.innerHTML = /* html */ `
          <div class='lav-option__image'>
            <img src='${config.dir}/img/${option.img}' alt='${option.title}' />
          </div>
          <div class='lav-option__info'>
            <div class='lav-option__title'>${option.title}</div>
            <div class='lav-option__price'>
              <strong>£${option.price}</strong>/${option.caption}
            </div>
          </div>
          <div class='lav-option__discount'>
            <div class='lav-option__discount-seller'>Best Seller</div>
            <div class='lav-option__discount-value'>Best Value</div>
            <div>Save ${option.discount}%</div>
          </div>
        `

      if (!option.isBestSeller) {
        optionEl.querySelector('.lav-option__discount-seller').remove()
      }

      if (!option.isBestValue) {
        optionEl.querySelector('.lav-option__discount-value').remove()
      }

      if (document.getElementById(option.target).checked) {
        optionEl.classList.add('active')
      }

      optionEl.addEventListener('click', (e) => {
        e.preventDefault()
        pushDataLayer(
          'exp_pdp_slide_cart_button_06',
          `${option.title} - Select`,
          'Button',
          'PDP. The product section (1pillow/2pillows/4pillows)'
        )
        if (optionEl.classList.contains('active')) {
          clickAddToCart()
          return
        }

        _$('.lavs-buy').innerHTML = ''

        _$('.lav-option.active', optionsEl)?.classList.remove('active')

        _$(`[for="${option.target}"]`).click()
        optionEl.classList.add('active')

        setTimeout(() => {
          fillStickyBuy()
        }, 500)
      })

      optionsEl.insertAdjacentElement('beforeend', optionEl)
    })

    _$('.lav-title__wrap').insertAdjacentElement('afterend', optionsEl)

    visibilityEvent('.lav-options', () => {
      pushDataLayer(
        'exp_pdp_slide_cart_section_10',
        'Section',
        'Visibility',
        'PDP. The product section (1pillow/2pillows/4pillows)'
      )
    })
  }

  function handleSize() {
    const sizeEl = document.createElement('div')
    sizeEl.classList.add('lav-size')

    sizeEl.innerHTML = /* html */ `
        <div class='lav-size__toggler'>
          <div class='lav-size__toggle' data-value='standart'>
            <div class='lav-size__toggle-title'>Standard</div>
            <div class='lav-size__toggle-caption'>190 cm x 100 cm</div>
          </div>
          <div class='lav-size__toggle' data-value='large'>
            <div class='lav-size__toggle-title'>Large</div>
            <div class='lav-size__toggle-caption'>190 cm x 135 cm</div>
          </div>
        </div>

        <div class='lav-size__drop'>
          <div class='lav-size__value'><strong>4kg -</strong> for bodyweight between <span>30-45kg</span></div>
          <div class='lav-size__list' style='display: none'>
            <div class='lav-size__item' data-item='0'><strong>4kg -</strong> for bodyweight between <span>30-45kg</span></div>
            <div class='lav-size__item' data-item='1'><strong>5.5kg -</strong> for bodyweight between <span>45-65kg</span></div>
            <div class='lav-size__item' data-item='2'><strong>7kg -</strong> for bodyweight between <span>65-80kg</span></div>
            <div class='lav-size__item' data-item='3'><strong>9kg -</strong> for bodyweight between <span>80kg+</span></div>
          </div>
        </div>
      `

    _$('.lav-size__drop', sizeEl).addEventListener('click', function (e) {
      $('.lav-size__drop').toggleClass('active')
      $('.lav-size__list').slideToggle()
    })

    _$('.shadow-product-option .leading-6').click()
    waitFor(
      () => _$('.shadow-product-option.absolute .cursor-pointer'),
      () => {
        const idxActive = Array.from(
          _$$('.shadow-product-option.absolute .cursor-pointer')
        ).findIndex((el) => {
          console.log(
            _$('.shadow-product-option .text-main-blue').innerText,
            el.innerText
          )

          return (
            _$('.shadow-product-option .text-main-blue').textContent ===
            el.textContent
          )
        })

        if (idxActive >= 0) {
          _$('.lav-size__value').innerHTML = _$$('.lav-size__item', sizeEl)[
            idxActive
          ].innerHTML
          _$$('.lav-size__item', sizeEl)[idxActive].classList.add('active')
        }
      },
      {
        ms: 50
      }
    )

    _$$('.lav-size__item', sizeEl).forEach((sizeItem) => {
      sizeItem.addEventListener('click', function (e) {
        e.preventDefault()

        if (sizeItem.classList.contains('active')) return

        if (!_$('.shadow-product-option.absolute .cursor-pointer')) {
          _$('.shadow-product-option .leading-6').click()
        }

        waitFor(
          () => _$('.shadow-product-option.absolute .cursor-pointer'),
          () => {
            _$$('.shadow-product-option.absolute .cursor-pointer')[
              sizeItem.dataset.item
            ].click()
          },
          {
            ms: 50
          }
        )

        _$('.lav-size__item.active', sizeEl)?.classList.remove('active')

        sizeItem.classList.add('active')

        _$('.lav-size__value').innerHTML = sizeItem.innerHTML

        setTimeout(() => {
          fillStickyBuy()
        }, 500)
      })
    })

    _$$('.lav-size__toggle', sizeEl).forEach((toggleEl) => {
      toggleEl.addEventListener('click', (e) => {
        e.preventDefault()

        if (toggleEl.classList.contains('active')) return

        _$('.lav-size__toggle.active', sizeEl)?.classList.remove('active')

        toggleEl.classList.add('active')

        if (toggleEl.dataset.value === 'standart') {
          _$('[for="8133599232286-1-0"]').click()
        }

        if (toggleEl.dataset.value === 'large') {
          _$('[for="8133599232286-1-1"]').click()
        }

        setTimeout(() => {
          fillStickyBuy()
        }, 500)
      })
    })

    _$('.lav-title__wrap').insertAdjacentElement('afterend', sizeEl)

    if (document.getElementById('8133599232286-1-0').checked) {
      _$("[data-value='standart']").classList.add('active')
    } else if (document.getElementById('8133599232286-1-1').checked) {
      _$("[data-value='large']").classList.add('active')
    }
  }

  function addSaved() {
    if (_$('#MainProductForm .lav-saved'))
      _$('#MainProductForm .lav-saved').remove()

    const parsed = _$(
      '.pricing + .usave span span:last-child'
    )?.textContent.trim()
    if (!parsed) return

    const [price, discount] = parsed
      .replace('% Off', '')
      .replace('(', '')
      .replace(')', '')
      .split(' ')

    _$('.pro_price .pricing').insertAdjacentHTML(
      'beforeend',
      /* html */ `
        <div class='lav-saved'><strong>-${discount}%</strong> (${price})</div>
      `
    )

    if (lavType === 'blanket') {
      if (_$('.lav-stock')) _$('.lav-stock').remove()

      const caption = _$('.pricing + .usave>span:last-child').textContent

      _$('.pro_form .qw').insertAdjacentHTML(
        'beforebegin',
        /* html */ `<div class='lav-stock ${
          caption.includes('OUT') ? 'lav-stock_out' : ''
        }'>${caption}</div>`
      )
    }
  }

  function moveKlaviyo() {
    if (!_$('.kl_wrapper')) return false

    _$('.pro_price').insertAdjacentElement('afterend', _$('.kl_wrapper'))

    _$('.customKlaviyo svg:last-child').remove()
    _$('.customKlaviyo').insertAdjacentHTML('beforeend', getSvg('arrowRight'))
  }

  function handleNextBatch() {
    const title = _$('.pre_order_wrapper .pre_order_info>h3').textContent
    const date = _$('.pre_order_wrapper .reserved_wrapper h3').textContent
    const reserved = _$('.pre_order_wrapper .reserved_wrapper span').textContent
    let caption = `<strong>Get 20% OFF</strong> your order when reserving.<br/> Use Code: <strong>BEST20</strong> at checkout`

    if (lavType === 'dual' && parseDiscount()) {
      const [percent, code] = parseDiscount()
      caption = `<strong>Get ${percent}% OFF</strong> your order when reserving.<br/> Use Code: <strong>${code}</strong> at checkout`
    }

    if (lavType === 'foamo') {
      caption = `Add two single pillows to the cart and get one of them for free with code: B1G1!`
    }

    const nextBatch = /* html */ `
        <div class="lav-batch">
          <div class="lav-batch__title">${title}</div>
          <div class="lav-batch__progress">
            <span style='width: ${parseInt(reserved)}%'></span>
          </div>
          <div class="lav-batch__line">
            <div class="lav-batch__line-caption">${date}</div>
            <div class="lav-batch__line-value"><span>${
              reserved.split(' ')[0]
            }</span> ${reserved.split(' ')[1]}</div>
          </div>
          <div class="lav-batch__caption">
            ${caption}
          </div>
          <div class='lav-batch__sub'>Reserved <strong>${getRandomNumber()} pillows</strong> in the last 24 hours</div>
        </div>
      `

    _$('.prod_desc').insertAdjacentHTML('beforebegin', nextBatch)

    visibilityEvent('.lav-batch__progress', () => {
      pushDataLayer(
        'exp_pdp_slide_cart_section_08',
        'Section',
        'Visibility',
        'PDP. Next Batch Ships '
      )
    })

    function parseDiscount() {
      const template = _$('.pre_order_info ul li:last-child').textContent

      if (!template) {
        console.log('Discount template not found.')
        return false
      }

      // Define regex patterns to match the percent discount and discount code
      const percentRegex = /\b(\d+)% off\b/
      const codeRegex = /'([^']+)'/

      // Match the percent discount and discount code using regex
      const percentMatch = template.match(percentRegex)
      const codeMatch = template.match(codeRegex)

      // Check if matches were found and extract the values
      if (percentMatch && codeMatch) {
        const percentDiscount = parseInt(percentMatch[1]) // Extract the percent value and convert to integer
        const discountCode = codeMatch[1] // Extract the discount code
        console.log('Percent Discount:', percentDiscount)
        console.log('Discount Code:', discountCode)
        return [percentDiscount, discountCode]
      } else {
        console.log('Discount details not found in the template.')
        return false
      }
    }

    function getRandomNumber() {
      const storedNumber = localStorage.getItem('randomNumber')
      const expirationTime = localStorage.getItem('expirationTime')

      if (
        storedNumber &&
        expirationTime &&
        Date.now() < parseInt(expirationTime, 10)
      ) {
        return parseInt(storedNumber, 10)
      } else {
        const newNumber = Math.floor(Math.random() * (100 - 50 + 1)) + 50

        localStorage.setItem('randomNumber', newNumber)
        const tomorrow = new Date()
        tomorrow.setDate(tomorrow.getDate() + 1)
        localStorage.setItem('expirationTime', tomorrow.getTime().toString())

        return newNumber
      }
    }
  }

  function addSetup() {
    if (!_$$('.upsell_wrapper > label').length) return

    const setupWrapper = document.createElement('div')
    setupWrapper.classList.add('lav-setup')
    setupWrapper.innerHTML = /* html */ `
        <div class="lav-setup__title">Complete your ultimate sleep setup</div>
        <div class="lav-setup__list"></div>
      `

    _$$('.upsell_wrapper > label').forEach((el) => {
      const pr = document.createElement('div')
      pr.classList.add('lav-setup__plate')
      pr.innerHTML = /* html */ `
          <div class="lav-setup__image">
            <img src='${getImage(_$('img', el).src)}' />
            ${getSvg('trust')}
          </div>

          <div class="lav-setup__info">
            <div class="lav-setup__name">${_$('span.hidden', el).textContent} ${
        _$('span.hidden + div', el).textContent
      }</div>
            <div class="lav-setup__caption">${
              _$('.font-normal', el).textContent
            }</div>

            <div class="lav-setup__control">
              <div class="lav-setup__price">
                <div class="lav-setup__price-new">${
                  _$('.text-blue-grey', el).textContent
                }</div>
                <div class="lav-setup__price-old">${
                  _$('.line-through', el).textContent
                }</div>
              </div>
              <div class="lav-setup__btn">Add to cart</div>
            </div>
          </div>
        `

      pr.querySelector('.lav-setup__btn').addEventListener('click', () => {
        pushDataLayer(
          'exp_pdp_slide_cart_button_05',
          `${pr.querySelector('.lav-setup__name').innerText} - Add to cart`,
          'Button',
          'PDP. Complete your ultimate sleep setup'
        )

        if (_$('#AddToCart').disabled) {
          _$('#MainProductForm  .lav-setup')?.classList.add('lav-setup_load')

          addToCartByAjax(el.getAttribute('for'))
          return
        }

        el.click()
        _$('#qty').value = 0
        clickAddToCart()

        waitFor(
          () => _$('.opnd.opn'),
          () => {
            el.click()
            _$('#qty').value = 1
          }
        )
      })

      setupWrapper
        .querySelector('.lav-setup__list')
        .insertAdjacentElement('beforeend', pr)
    })

    _$('.bg-main-tertiary-100').insertAdjacentElement(
      'beforebegin',
      setupWrapper
    )

    visibilityEvent(setupWrapper, () => {
      pushDataLayer(
        'exp_pdp_slide_cart_section_09',
        'Section',
        'Visibility',
        'PDP. Complete your ultimate sleep setup'
      )
    })

    function getImage(src) {
      // if (src.includes('Stone_Pillowcase-x')) {
      //   return `${config.dir}/img/setup-pillow-1.png`;
      // }
      return src
    }
  }

  async function addSimilar() {
    const similarEl = document.createElement('div')
    similarEl.classList.add('lav-similar')
    similarEl.innerHTML = /* html */ `
        <div class="lav-similar__head">
          <div class="lav-similar__title">Similar products</div>
          <div class="lav-similar__control">
            <div class='lav-similar__prev lav-similar__arrow'>
              ${getSvg('nextSlide')}
            </div>
            <div class='lav-similar__next lav-similar__arrow'>
              ${getSvg('nextSlide')}
            </div>
          </div>
        </div>
        
        <div class="lav-similar__slider"></div>
      `

    const products = {
      dual: [
        {
          title: 'The Dual Pillow',
          priceOld: '89.00',
          priceNew: '69.00',
          img: '1pillow.jpg',
          discount: 20,
          url: '/products/the-dual-pillow'
        },
        {
          title: 'The FOAMO Pillow',
          priceOld: '89.00',
          priceNew: '79.00',
          img: 'upsell-pillow-foam.webp',
          discount: 10,
          url: '/products/the-foamo'
        },
        {
          title: 'Opposites Attract Bundle',
          priceOld: '178.00',
          priceNew: '99.00',
          img: 'upsell-pillow-opposites.avif',
          discount: 45,
          url: '/products/opposites-attract-bundle'
        },
        {
          title: 'Pillow & Pillowcase Bundle',
          priceOld: '149.95',
          priceNew: '79.00',
          img: 'upsell-pillow-bundle.avif',
          discount: 45,
          url: '/products/pillow-pillowcase-bundle'
        }
      ],
      blanket: [
        {
          title: 'The Mela Weighted Blanket',
          priceOld: '159.00',
          priceNew: '74.25',
          img: 'upsell-blanket.png',
          discount: 55,
          url: '/products/the-mela-weighted-blanket-with-removable-cover'
        }
      ]
    }

    products['foamo'] = products['dual']

    if (!products[lavType]) return

    const similarProducts = products[lavType]?.filter(
      (p) => !location.href.includes(p.url)
    )

    similarProducts.forEach((product) => {
      const productEl = document.createElement('div')
      productEl.classList.add('lav-pr')
      productEl.addEventListener('click', () => {
        pushDataLayer(
          'exp_pdp_slide_cart_button_07',
          `${product.title} - Select`,
          'Button',
          'PDP. Section Similar products'
        )
        window.open(product.url, '_blank')
      })
      productEl.innerHTML = /* html */ `
          <div class="lav-pr__image">
            <img src='${config.dir}/img/${product.img}' alt='${product.title}' />
          </div>
          <div class="lav-pr__title">${product.title}</div>
          <div class="lav-pr__price">
            <div class="lav-pr__price-new">£${product.priceNew}</div>
            <div class="lav-pr__price-old">£${product.priceOld}</div>
          </div>
          <div class="lav-pr__off">${product.discount}% Off</div>
        `

      similarEl
        .querySelector('.lav-similar__slider')
        .insertAdjacentElement('beforeend', productEl)
    })

    _$('.bg-main-tertiary-100').insertAdjacentElement('afterend', similarEl)

    visibilityEvent(similarEl, () => {
      pushDataLayer(
        'exp_pdp_slide_cart_section_11',
        'Section',
        'Visibility',
        'PDP. Section Similar products'
      )
    })
    // centerMode: true,
    // rtl: true,
    if (lavType !== 'blanket') {
      $('.lav-similar__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        infinite: false,
        autoplaySpeed: 5000,
        prevArrow: $('.lav-similar__prev'),
        nextArrow: $('.lav-similar__next'),
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2.3,
              autoplay: false
            }
          }
        ]
      })
    }
  }

  function handleSticky() {
    _$('#MainProductForm').parentElement.classList.add('lavs-buy__wrap')

    // waitFor('.trustpilot-widget iframe', () => {
    //   _$('.lavs-fit__trust', stickyFit).insertAdjacentHTML(
    //     'beforeend',
    //     _$('.trustpilot-widget').innerHTML
    //     // `<iframe src='${
    //     //   _$('.trustpilot-widget iframe:last-child').src
    //     // }'></iframe>`
    //   );
    // });

    addBuy()
    addFit()

    function addBuy() {
      const stickyBuy = document.createElement('div')
      stickyBuy.classList.add('lavs-buy')

      _$('#MainProductForm').insertAdjacentElement('beforebegin', stickyBuy)
      fillStickyBuy()

      window.addEventListener('scroll', () => {
        if (window.scrollY > _$('#AddToCart').offsetTop + 200) {
          stickyBuy.classList.add('active')
          _$('.lavs-buy__wrap').style.marginTop =
            '-' + _$('.lavs-buy').offsetHeight + 'px'
          _$('.lavs-buy').style.opacity = 1
        } else {
          stickyBuy.classList.remove('active')
          _$('.lavs-buy__wrap').style.marginTop = 0
          _$('.lavs-buy').style.opacity = 0
        }
      })
    }

    function addFit() {
      const stickyFit = document.createElement('div')
      stickyFit.classList.add('lavs-fit')
      const title = _$(
        'div#MainProductForm .lav-title__wrap h1'
      ).firstChild.textContent.trim()
      let caption = 'Standard Size Luxury Pillow (50cm x 75cm)'
      let count = '854'

      if (lavType === 'foamo') {
        count = '368'
      }
      if (lavType === 'blanket') {
        caption = 'Weighted Blanket with Integrated Cover'
        count = '2,313'
      }

      stickyFit.innerHTML = /* html */ `
          <div class='lavs-fit__info'>
            <div class='lavs-fit__head'>
              <div class='lavs-fit__title'>${title}</div>
              <div class='lavs-fit__trust'>
                ${getSvg('trustStars')} ${count} reviews
              </div>
            </div>
            <div class='lavs-fit__caption'>${caption}</div>
          </div>
    
          <div class='lavs-fit__similar'>Similar products</div>
    
          <div class='lavs-fit__btn'>Choose your best fit</div>
        `

      stickyFit
        .querySelector('.lavs-fit__btn')
        .addEventListener('click', function (e) {
          e.preventDefault()
          if (this.classList.contains('active')) return

          pushDataLayer(
            'exp_pdp_slide_cart_button_03',
            'Choose your best fit',
            'Button',
            'PDP. The sticky section. “Choose your best fit” '
          )

          this.classList.add('active')

          let offset =
            $(`.lav-${lavType === 'blanket' ? 'size' : 'options'}`).offset()
              .top -
            $('#shopify-section-header').height() -
            10

          if (window.innerWidth >= 1024) {
            offset -= $('#shopify-section-layout-announcement-bar').height()
            // offset = 0;
          }

          $('html, body').animate({
            scrollTop: offset
          })
          setTimeout(() => {
            this.classList.remove('active')
          }, 1000)
        })

      stickyFit
        .querySelector('.lavs-fit__similar')
        .addEventListener('click', function (e) {
          e.preventDefault()

          if (this.classList.contains('active')) return

          pushDataLayer(
            'exp_pdp_slide_cart_link_01',
            'Similar products',
            'Link',
            'PDP. The sticky section. Mobile'
          )

          this.classList.add('active')

          let offset =
            $('.lav-similar').offset().top -
            $('#shopify-section-header').height() -
            10

          if (window.innerWidth < 1024) {
            offset -= $('.lavs-fit').height()
          }

          $('html, body').animate({
            scrollTop: offset
          })

          setTimeout(() => {
            this.classList.remove('active')
          }, 1000)
        })

      _$('#MainProductForm').insertAdjacentElement('beforebegin', stickyFit)

      window.addEventListener('scroll', () => {
        if (window.innerWidth < 1024) {
          if (
            window.scrollY >
            _$('.pro_form .qw').offsetTop + window.innerHeight - 100
          ) {
            stickyFit.classList.add('active')
          } else {
            stickyFit.classList.remove('active')
          }
        } else {
          if (
            window.scrollY >
            _$('.featured-products-section').offsetTop - 100
          ) {
            stickyFit.classList.add('active')
          } else {
            stickyFit.classList.remove('active')
          }
        }
      })
    }
  }

  function addEvents() {
    visibilityEvent('.pro_price .pricing', () => {
      pushDataLayer(
        'exp_pdp_slide_cart_section_01',
        'Section',
        'Visibility',
        'PDP. The section with a product price '
      )
    })

    visibilityEvent('#AddToCart', () => {
      pushDataLayer(
        'exp_pdp_slide_cart_section_02',
        'Section',
        'Visibility',
        'PDP. Button. Add to cart'
      )
    })

    visibilityEvent('.pro_form .qq', () => {
      pushDataLayer(
        'exp_pdp_slide_cart_section_03',
        'Section',
        'Visibility',
        'PDP. The Mela Weighted Blanket. The quantity selector '
      )
    })

    visibilityEvent('.lavs-buy', () => {
      pushDataLayer(
        'exp_pdp_slide_cart_section_04',
        'Section',
        'Visibility',
        'PDP. The sticky section with the “Add to cart”. Desktop'
      )
    })

    visibilityEvent('.lavs-fit', () => {
      if (window.innerWidth < 1024) {
        pushDataLayer(
          'exp_pdp_slide_cart_section_05',
          'Section',
          'Visibility',
          'PDP. The sticky section. “Choose your best fit” and “Similar products”. Mobile'
        )
      } else {
        pushDataLayer(
          'exp_pdp_slide_cart_section_06',
          'Section',
          'Visibility',
          'PDP. The sticky section. “Choose your best fit”. Desktop'
        )
      }
    })

    visibilityEvent('#MainProductForm .customKlaviyo', () => {
      pushDataLayer(
        'exp_pdp_slide_cart_section_07',
        'Section',
        'Visibility',
        'PDP. Get additional 15% Off'
      )
    })

    _$('.pro_form .qw').addEventListener('click', () => {
      pushDataLayer(
        'exp_pdp_slide_cart_button_01',
        'Add to cart',
        'Button',
        'PDP'
      )
    })

    document.addEventListener('click', (e) => {
      // console.log('click', e.target);

      if (
        e.target.closest('.customKlaviyo') &&
        e.target.closest('#MainProductForm')
      ) {
        pushDataLayer(
          'exp_pdp_slide_cart_button_04',
          'Get additional 15% Off',
          'Button',
          'PDP'
        )
      }

      if (e.target.closest('.btn-section-cta')) {
        let title = e.target
          .closest('.img_txt_wrapp')
          ?.querySelector('h2')
          ?.textContent.trim()
        pushDataLayer(
          'exp_pdp_slide_cart_button_10',
          `${title} - Get Yours Now`,
          'Button',
          'PDP. Customised Comfort. Perfectly Balanced. Hypoallergenic. Get Yours Now'
        )
      }
    })
  }
}

function clickAddToCart() {
  if (_$('.lavs-buy .btn-cw-cta span')) {
    _$('.lavs-buy .btn-cw-cta span').innerHTML = 'Adding...'
  }
  _$('.lavs-buy')?.classList.add('lavs-buy_load')
  _$('.lav-options')?.classList.add('lav-options_load')
  _$('#MainProductForm  .lav-setup')?.classList.add('lav-setup_load')
  _$('#AddToCart')?.click()

  waitFor(
    () => _$('.opnd.opn'),
    () => {
      if (_$('.lavs-buy .btn-cw-cta span')) {
        _$('.lavs-buy .btn-cw-cta span').innerHTML = 'Add to cart'
      }
      _$('.lavs-buy')?.classList.remove('lavs-buy_load')
      _$('.lav-options')?.classList.remove('lav-options_load')
      _$('#MainProductForm .lav-setup')?.classList.remove('lav-setup_load')
    }
  )
}

function fillStickyBuy() {
  _$('.lavs-buy').innerHTML = ''

  let optionEl = null

  if (lavType === 'blanket') {
    // optionEl = _$('.lav-size').cloneNode(true);
    optionEl = document.createElement('div')
    optionEl.classList.add('lavs-buy__title')
    optionEl.innerHTML = /* html */ `
        ${
          _$('.lav-size__toggle.active .lav-size__toggle-title').textContent
        } (${
      _$('.lav-size__toggle.active .lav-size__toggle-caption').textContent
    }) | ${_$('.lav-size__value').textContent}
      `

    // _$('.lav-size__toggle.active')
  } else {
    optionEl = _$('.lav-option.active').cloneNode(true)
  }

  const priceEl = _$('.pro_price .pricing').cloneNode(true)
  const btnEl = _$('#AddToCart').cloneNode(true)
  btnEl.removeAttribute('id')

  _$('.lavs-buy').insertAdjacentElement('beforeend', optionEl)
  _$('.lavs-buy').insertAdjacentElement('beforeend', priceEl)
  _$('.lavs-buy').insertAdjacentElement('beforeend', btnEl)

  btnEl.addEventListener('click', (e) => {
    e.preventDefault()
    if (_$('.lavs-buy_load')) return

    pushDataLayer(
      'exp_pdp_slide_cart_button_02',
      'Add to cart',
      'Button',
      'PDP. The sticky section. Desktop'
    )

    _$('.lavs-buy')?.classList.add('lavs-buy_load')

    let offset =
      $(`.lav-${lavType === 'blanket' ? 'size' : 'options'}`).offset().top -
      $('#shopify-section-header').height() -
      10

    if (window.innerWidth >= 1024) {
      offset -= $('#shopify-section-layout-announcement-bar').height()
      // offset = 0;
    }

    $('html, body').animate({
      scrollTop: offset
    })

    setTimeout(() => {
      _$('.lavs-buy')?.classList.remove('lavs-buy_load')
    }, 1000)

    // const prevCount = _$('#qty').value;

    // _$('#qty').value = 1;

    // clickAddToCart();

    // waitFor(
    //   () => _$('.opnd.opn'),
    //   () => {
    //     _$('#qty').value = prevCount;
    //   }
    // );
  })
}

function handleAdditionalInfo() {
  waitFor('.featured-products-section', addYouMayAlsoLike)
  waitFor('.featured-products-section', addTrustedSlider)

  function addYouMayAlsoLike() {
    _$('.featured-products-section h2').innerHTML = 'You might also like'
    _$('.banner-section').insertAdjacentElement(
      'beforebegin',
      _$('.featured-products-section')
    )

    visibilityEvent('.featured-products-section', () => {
      pushDataLayer(
        'exp_pdp_slide_cart_section_12',
        'Section',
        'Visibility',
        'PDP. You might also like'
      )
    })

    _$$('.featured-products-section .tabs-component-tab').forEach((item) => {
      item.addEventListener('click', () => {
        pushDataLayer(
          'exp_pdp_slide_cart_button_08',
          `${item.textContent.trim()} - Select`,
          'Button',
          'PDP. You might also like'
        )
      })
    })

    _$$('.featured-products-section .product-card').forEach((item) => {
      item.addEventListener('click', () => {
        pushDataLayer(
          'exp_pdp_slide_cart_button_09',
          `${item.querySelector('.font-heading').textContent.trim()} - Select`,
          'Button',
          'PDP. You might also like'
        )
      })
    })
  }

  function addTrustedSlider() {
    const feedbacks = {
      dual: [
        {
          title: 'The pillow does exactly what it says',
          descr:
            'My neck and shoulder pain relieved. The soft comfort of the pillow and the support is wonderful, most definitely recommend. Excellent value better than more popular brands',
          author: 'Peg',
          url: 'https://uk.trustpilot.com/reviews/653e267b2658d3ad9cc4fd16'
        },
        {
          title: 'I bought a pair of pillows one for…',
          descr:
            'I bought a pair of pillows one for myself and one for my husband. We are both finding them to be super comfy and have adjusted the filling to suit our needs.',
          author: 'Angy Bovill',
          url: 'https://uk.trustpilot.com/reviews/6543eb3364f14f1575abe1b2'
        },
        {
          title: ' Great pillow for neck pain',
          descr:
            'After trying many different pillows for my neck pain I ordered the dual pillow, not holding out much hope. It took a while to arrive but I have slept better than I have for months and importantly I can lift my head off the pillow in the morning without being in agony. Thank you',
          author: 'E Kempson',
          url: 'https://uk.trustpilot.com/reviews/652c3036378df9146af2d427'
        },
        {
          title: 'Comfy pillow!',
          descr:
            'Definitely recommend the pillows. Have tried countless pillows and all seem to either go lumpy, or give me bad neck pain. With this pillow, so far, I have not experienced either!',
          author: 'Alexandra',
          url: 'https://uk.trustpilot.com/reviews/64d63527a1a96e0d819d5011'
        },
        {
          title: 'So very pleased with my pillow super…',
          descr:
            'So very pleased with my pillow super comfortable.Very impressed with the customer service at Aeyla highly recommend.',
          author: 'ruth cooke',
          url: 'https://uk.trustpilot.com/reviews/651c5c53f7fc06e0a624222d'
        }
      ],
      foamo: [
        {
          title: 'Great pillow',
          descr:
            'I’ve just swapped my orthopaedic memory foam pillow for this one and my neck ache and headaches went almost immediately and I have a lot less sleepless nights!What a bliss!',
          author: 'Beata',
          url: 'https://uk.trustpilot.com/reviews/653cc5a19cc581c7acd343a9'
        },
        {
          title: 'These pillows are insanely good!',
          descr:
            'After spending hundreds juat in the last two years on pillows to give a good nights sleep and not trigger my neck and shoulder issues I ordered these, literally can’t rate the foamo pillows enough, I took out some of the stuffing so it was perfect height for me xx',
          author: 'Mrs Debbie Green',
          url: 'https://uk.trustpilot.com/reviews/653e63274f7cbe8d65c73ecb'
        },
        {
          title: 'Fabulous pillows !',
          descr:
            'These have helped us tremendously with our sleep . Thank you Aeyla, a great product that arrived efficiently and packed beautifull',
          author: 'Jude Gough',
          url: 'https://uk.trustpilot.com/reviews/652d1ded5a245b9b7611854e'
        },
        {
          title: 'Finally a pillow that I love!',
          descr:
            "I've tried a lot of pillows over recent years and I've finally found The One! Amazing support and it stays plump all night. I love that I could adjust the filling if I wanted to and that I can clean the outer case. Highly recommended! \nI pre-ordered and so I had to contact Aeyla to ask about delivery. I found Customer Services to be quick, friendly and really helpful. Thank you!",
          author: 'Emily Lamont',
          url: 'https://uk.trustpilot.com/reviews/649b482c706f837cb1079318'
        },
        {
          title: 'We have both slept a lot better since…',
          descr:
            'We have both slept a lot better since purchasing the aeyla pillows - particularly love that you can adjust it to suit your personal preference!',
          author: 'Sarah',
          url: 'https://uk.trustpilot.com/reviews/653cb77a0438bf8582bfb629'
        }
      ],
      blanket: [
        {
          title: 'Ordered the Large (9kg) weighted…',
          descr:
            'Ordered the Large (9kg) weighted blanket. Has helped me to sleep better and although the 9kg may feel too heavy for some, I find it very comforting.Appears well made and should last for years.',
          author: 'David',
          url: 'https://uk.trustpilot.com/reviews/653e5fa2eeee9a4594e92ea7'
        },
        {
          title: 'Was recommended to buy a weighted…',
          descr:
            'Was recommended to buy a weighted blanket. Googled and found this. And glad I did. It arrived a day after I ordered and the quality is fantastic. Highly recommended using Aeyla.',
          author: 'Anita Aris',
          url: 'https://uk.trustpilot.com/reviews/6543eb3364f14f1575abe1b2'
        },
        {
          title: 'Fabulous weighted blanket',
          descr:
            'Easy to order and superfast delivery. The weighted blanket was a gift and she absolutely loves it. First order from this company but would definitely order again.',
          author: 'Denise',
          url: 'https://uk.trustpilot.com/reviews/64d167d03884aa3003c9417c'
        },
        {
          title: 'The weighted blanket is excellent and…',
          descr:
            "The weighted blanket is excellent and has really helped me to get a good night's quality sleep which I was not getting before.",
          author: 'SR',
          url: 'https://uk.trustpilot.com/reviews/64f6dad9dc4838d6459d46a2'
        },
        {
          title: 'Amazing weighted blanket',
          descr:
            'Amazing weighted blanket - feels like I’m being cuddled all night long. I’m a terrible sleeper and it’s improved my life so much that I look forward to going to bed now. Siblings have tried it out and love it.',
          author: 'Niamh Coll',
          url: 'https://uk.trustpilot.com/reviews/64ec6bb803a6c07b3fbeb340'
        }
      ]
    }

    const trusted = document.createElement('div')
    trusted.classList.add('lav-trusted')
    trusted.innerHTML = /* html */ `
        <div class='lav-trusted__container'>
          <div class='lav-trusted__logo'>
            <img src='${config.dir}/img/trusted-logo.svg' alt='trusted' />
          </div>
          <div class='lav-trusted__title'>More than 85,000+ customers have already trusted us</div>

          <div class='lav-trusted__list'></div>
        </div>
      `

    fillTrusted()

    const trustedClone = trusted.cloneNode(true)
    trustedClone.classList.add('lav-trusted-clone')
    _$('.featured-products-section').insertAdjacentElement('afterend', trusted)

    visibilityEvent('.lav-trusted__list', () => {
      pushDataLayer(
        'exp_pdp_slide_cart_section_13',
        'Section',
        'Visibility',
        'PDP. More than 85,000+ customers have already trusted us'
      )
    })

    _$('.faq-section').insertAdjacentElement('afterend', trustedClone)

    visibilityEvent('.lav-trusted-clone .lav-trusted__list', () => {
      pushDataLayer(
        'exp_pdp_slide_cart_section_14',
        'Section',
        'Visibility',
        'PDP. Section reviews on the bottom of the page'
      )
    })

    $('.lav-trusted__list').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      infinite: true,
      autoplaySpeed: 5000,
      prevArrow: getSvg('prevArrow'),
      nextArrow: getSvg('nextArrow'),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            dots: true
          }
        }
      ]
    })

    _$('.slick-prev', trusted).addEventListener('click', () => {
      pushDataLayer(
        'exp_pdp_slide_cart_arrow_01',
        'left',
        'Click',
        'PDP. More than 85,000+ customers have already trusted us'
      )
    })

    _$('.slick-next', trusted).addEventListener('click', () => {
      pushDataLayer(
        'exp_pdp_slide_cart_arrow_01',
        'right',
        'Click',
        'PDP. More than 85,000+ customers have already trusted us'
      )
    })

    _$('.slick-prev', trustedClone).addEventListener('click', () => {
      pushDataLayer(
        'exp_pdp_slide_cart_arrow_02',
        'left',
        'Click',
        'PDP. Section reviews on the bottom of the page'
      )
    })

    _$('.slick-next', trustedClone).addEventListener('click', () => {
      pushDataLayer(
        'exp_pdp_slide_cart_arrow_02',
        'right',
        'Click',
        'PDP. Section reviews on the bottom of the page'
      )
    })

    function fillTrusted() {
      feedbacks[lavType].forEach((feedback) => {
        const feedbackEl = document.createElement('div')
        feedbackEl.classList.add('lav-trusted__item')
        feedbackEl.innerHTML = /* html */ `
            <div class='lav-trusted__item-title'>${feedback.title}</div>
            <div class='lav-trusted__item-descr'>${feedback.descr}</div>
            <div class='lav-trusted__item-author'>${feedback.author}</div>
          `

        // _$('.lav-trusted__item-title', feedbackEl).addEventListener(
        //   'click',
        //   (e) => {
        //     e.preventDefault();
        //     window.open(feedback.url, '_blank').focus();
        //   }
        // );

        _$('.lav-trusted__list', trusted).insertAdjacentElement(
          'beforeend',
          feedbackEl
        )
      })
    }
  }
}

function addCta() {
  _$$('.img_txt_wrapp > .txt_sec > .flex').forEach((item, index) => {
    if (!_$('.btn-section-cta', item)) return

    const cloneItem = item.cloneNode(true)
    cloneItem.classList.add('crs_cta')
    item.classList.add('crs_cta-origin')

    _$('.btn-section-cta', cloneItem).addEventListener('click', (e) => {
      e.preventDefault()

      // pushDataLayer([
      //   `exp_pdp_get_yours_now_${index + 1}`,
      //   'Get yours now',
      //   'Button',
      //   item.closest('.img_txt_wrapp').querySelector('h2').innerText,
      // ]);

      let offset =
        $(`.lav-${lavType === 'blanket' ? 'size' : 'options'}`).offset().top -
        $('#shopify-section-header').height() -
        10

      if (window.innerWidth >= 1024) {
        offset -= $('#shopify-section-layout-announcement-bar').height()
      }

      $('html, body').animate({
        scrollTop: offset
      })
    })

    if (item.closest('.img_txt_wrapp').innerText.includes('Happy Customers')) {
      cloneItem.style.marginTop = '-40px'
      item.closest('.img_txt_wrapp').querySelector('.img_sec').style =
        'order: 3;margin-top: 46px;'
    }

    item.parentElement.nextElementSibling.after(cloneItem)
  })
}
// function handle() {}
// function handle() {}
// function handle() {}
// function handle() {}
// function handle() {}

// *** Utils *** //
class Modal {
  static list = []
  constructor(name, html) {
    if (!$('.lav-modal')) {
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

    if ($('.lav-modal__inner.active')) {
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
      `

    const stylesEl = document.createElement('style')
    stylesEl.classList.add('exp-modal')
    stylesEl.innerHTML = styles
    document.head.appendChild(stylesEl)
  }
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
    if ($(condition)) {
      if (typeof cb === 'function') cb($(condition))
      return
    }

    return new Promise((resolve) => {
      const observer = new MutationObserver((mutations, observer) => {
        if ($(condition)) {
          if (typeof cb === 'function') cb($(condition))
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
          // if (!(node instanceof HTMLElement)) continue;
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
        if (diffTime >= 3) {
          cb(diffTime)
        }
        entryTime = 0
      }
    },
    { threshold: viewElementProcent }
  )
}

function visibilityEvent(el, cb, customConfig = {}) {
  if (typeof el === 'string' && eventsFireList.includes(el)) {
    return
  }
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
          // if (isElementInViewport(target)) {
          observer.disconnect()
          cb()
          if (typeof el === 'string') {
            eventsFireList.push(el)
          }
          // }
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
    freeShipping: `
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M9 1.5C4.8675 1.5 1.5 4.8675 1.5 9C1.5 13.1325 4.8675 16.5 9 16.5C13.1325 16.5 16.5 13.1325 16.5 9C16.5 4.8675 13.1325 1.5 9 1.5ZM12.585 7.275L8.3325 11.5275C8.2275 11.6325 8.085 11.6925 7.935 11.6925C7.785 11.6925 7.6425 11.6325 7.5375 11.5275L5.415 9.405C5.1975 9.1875 5.1975 8.8275 5.415 8.61C5.6325 8.3925 5.9925 8.3925 6.21 8.61L7.935 10.335L11.79 6.48C12.0075 6.2625 12.3675 6.2625 12.585 6.48C12.8025 6.6975 12.8025 7.05 12.585 7.275Z" fill="#048201"/>
        </svg>
      `,
    trustStars: `
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="15" viewBox="0 0 80 15" fill="none">
        <g clip-path="url(#clip0_246_3387)">
          <path d="M0.015625 15.1076H14.7915V0H0.015625V15.1076Z" fill="#00B67A"/>
          <path d="M12.6129 6.4255L4.2322 12.6502L5.45511 8.80313L2.25391 6.4255H6.21075L7.4334 2.57812L8.65606 6.4255H12.6129ZM7.43371 10.2729L9.7225 9.78063L10.6344 12.6502L7.43371 10.2729Z" fill="white"/>
          <path d="M16.3438 15.1076H31.1196V0H16.3438V15.1076Z" fill="#00B67A"/>
          <path d="M16.3438 15.1076H23.7317V0H16.3438V15.1076Z" fill="#00B67A"/>
          <path d="M23.9096 10.217L25.8723 9.78329L26.78 12.7181L23.7022 10.3693L20.5042 12.7181L21.7454 8.85698L18.4961 6.47072H22.5124L23.7531 2.60938L24.9943 6.47072H29.0103L23.9096 10.217Z" fill="white"/>
          <path d="M32.6836 15.1076H47.4595V0H32.6836V15.1076Z" fill="#00B67A"/>
          <path d="M32.6836 15.1076H40.0715V0H32.6836V15.1076Z" fill="#00B67A"/>
          <path d="M45.2809 6.4255L36.9002 12.6502L38.1231 8.80313L34.9219 6.4255H38.8787L40.1014 2.57812L41.324 6.4255L45.2809 6.4255ZM40.1017 10.2729L42.3905 9.78063L43.3024 12.6502L40.1017 10.2729Z" fill="white"/>
          <path d="M49.0234 15.1076H63.7993V0H49.0234V15.1076Z" fill="#00B67A"/>
          <path d="M49.0234 15.1076H56.4114V0H49.0234V15.1076Z" fill="#00B67A"/>
          <path d="M61.6168 6.4255L53.2364 12.6502L54.459 8.80313L51.2578 6.4255H55.2147L56.4373 2.57812L57.66 6.4255L61.6168 6.4255ZM56.4376 10.2729L58.7264 9.78063L59.6383 12.6502L56.4376 10.2729Z" fill="white"/>
          <path d="M65.3516 15.1076H80.1274V0H65.3516V15.1076Z" fill="#00B67A"/>
          <path d="M65.3516 15.1076H72.7395V0H65.3516V15.1076Z" fill="#00B67A"/>
          <path d="M77.9449 6.4255L69.5645 12.6502L70.7871 8.80313L67.5859 6.4255H71.5428L72.7654 2.57812L73.9881 6.4255H77.9449ZM72.7657 10.2729L75.0545 9.78063L75.9664 12.6502L72.7657 10.2729Z" fill="white"/>
        </g>
        <defs>
          <clipPath id="clip0_246_3387">
            <rect width="80" height="15" fill="white"/>
          </clipPath>
        </defs>
      </svg>
      `,
    dropdown: `
      <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="path-1-inside-1_200_30368" fill="white">
        <path d="M0 8L7.07107 0.928932L14.1421 8L7.07107 15.0711L0 8Z"/>
        </mask>
        <path d="M7.07107 15.0711L5.65685 16.4853L7.07107 17.8995L8.48528 16.4853L7.07107 15.0711ZM12.7279 6.58579L5.65685 13.6569L8.48528 16.4853L15.5563 9.41421L12.7279 6.58579ZM8.48528 13.6569L1.41421 6.58579L-1.41421 9.41421L5.65685 16.4853L8.48528 13.6569Z" fill="#4F6054" mask="url(#path-1-inside-1_200_30368)"/>
      </svg>
      `,
    approved: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M16.1702 8.05687L15.1502 6.87187C14.9552 6.64687 14.7977 6.22688 14.7977 5.92688V4.65188C14.7977 3.85687 14.1452 3.20437 13.3502 3.20437H12.0752C11.7827 3.20437 11.3552 3.04687 11.1302 2.85187L9.94516 1.83187C9.42766 1.38938 8.58016 1.38938 8.05516 1.83187L6.87766 2.85937C6.65266 3.04687 6.22516 3.20437 5.93266 3.20437H4.63516C3.84016 3.20437 3.18766 3.85687 3.18766 4.65188V5.93437C3.18766 6.22687 3.03016 6.64687 2.84266 6.87187L1.83016 8.06437C1.39516 8.58187 1.39516 9.42187 1.83016 9.93937L2.84266 11.1319C3.03016 11.3569 3.18766 11.7769 3.18766 12.0694V13.3519C3.18766 14.1469 3.84016 14.7994 4.63516 14.7994H5.93266C6.22516 14.7994 6.65266 14.9569 6.87766 15.1519L8.06266 16.1719C8.58016 16.6144 9.42766 16.6144 9.95266 16.1719L11.1377 15.1519C11.3627 14.9569 11.7827 14.7994 12.0827 14.7994H13.3577C14.1527 14.7994 14.8052 14.1469 14.8052 13.3519V12.0769C14.8052 11.7844 14.9627 11.3569 15.1577 11.1319L16.1777 9.94687C16.6127 9.42937 16.6127 8.57437 16.1702 8.05687ZM12.1202 7.58437L8.49766 11.2069C8.39266 11.3119 8.25016 11.3719 8.10016 11.3719C7.95016 11.3719 7.80766 11.3119 7.70266 11.2069L5.88766 9.39188C5.67016 9.17438 5.67016 8.81437 5.88766 8.59687C6.10516 8.37937 6.46516 8.37937 6.68266 8.59687L8.10016 10.0144L11.3252 6.78938C11.5427 6.57188 11.9027 6.57188 12.1202 6.78938C12.3377 7.00688 12.3377 7.36687 12.1202 7.58437Z" fill="white"/>
      </svg>`,
    arrowRight: `
      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
        <g clip-path="url(#clip0_200_6457)">
          <path d="M1 6.75H11.5" stroke="#2B4632" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M6.25 1.5L11.5 6.75L6.25 12" stroke="#2B4632" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
          <clipPath id="clip0_200_6457">
            <rect width="13" height="13" fill="white" transform="translate(0 0.5)"/>
          </clipPath>
        </defs>
      </svg>
      `,
    basket: `
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
        <g clip-path="url(#clip0_200_6496)">
          <path d="M9.56641 20.0234C10.6343 20.0234 11.5 19.1577 11.5 18.0898C11.5 17.0219 10.6343 16.1562 9.56641 16.1562C8.49851 16.1562 7.63281 17.0219 7.63281 18.0898C7.63281 19.1577 8.49851 20.0234 9.56641 20.0234Z" fill="white"/>
          <path d="M17.3008 20.0234C18.3687 20.0234 19.2344 19.1577 19.2344 18.0898C19.2344 17.0219 18.3687 16.1562 17.3008 16.1562C16.2329 16.1562 15.3672 17.0219 15.3672 18.0898C15.3672 19.1577 16.2329 20.0234 17.3008 20.0234Z" fill="white"/>
          <path d="M1.14453 3.26562H3.92046C3.95634 3.39482 7.21808 15.1386 7.01153 14.3951C7.08896 14.6739 7.34325 14.8671 7.63277 14.8671H19.2343C19.5219 14.8671 19.7749 14.6764 19.8543 14.3994L22.4753 5.37606C22.5307 5.18158 22.4917 4.97258 22.3702 4.81085C22.2481 4.64972 22.0574 4.55467 21.8554 4.55467H5.61609L5.03137 2.44861C4.95394 2.16979 4.69966 1.97656 4.41013 1.97656H1.14453C0.788276 1.97656 0.5 2.26484 0.5 2.62109C0.5 2.97734 0.788276 3.26562 1.14453 3.26562ZM16.6562 12.289H10.2109C9.85463 12.289 9.56635 12.0007 9.56635 11.6445C9.56635 11.2882 9.85463 10.9999 10.2109 10.9999H16.6562C17.0124 10.9999 17.3007 11.2882 17.3007 11.6445C17.3007 12.0007 17.0124 12.289 16.6562 12.289ZM8.92183 8.42184H17.9452C18.3015 8.42184 18.5897 8.71011 18.5897 9.06637C18.5897 9.42262 18.3015 9.71089 17.9452 9.71089H8.92183C8.56557 9.71089 8.2773 9.42262 8.2773 9.06637C8.2773 8.71011 8.56557 8.42184 8.92183 8.42184Z" fill="white"/>
        </g>
        <defs>
          <clipPath id="clip0_200_6496">
            <rect width="22" height="22" fill="white" transform="translate(0.5)"/>
          </clipPath>
        </defs>
      </svg>`,
    nextSlide: `
        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
          <path d="M17 0.5C7.88732 0.5 0.5 7.88729 0.5 17C0.5 26.1126 7.88732 33.4999 17 33.4999C26.1127 33.4999 33.5 26.1126 33.5 17C33.5 7.88729 26.1127 0.5 17 0.5Z" stroke="#6A6D74"/>
          <path d="M11 17H22.9995" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M17 11L22.9998 16.9998L17 22.9995" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      `,
    trust: `
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="12" viewBox="0 0 64 12" fill="none">
        <g clip-path="url(#clip0_246_2118)">
          <path d="M0.0117188 12.0861H11.8324V0H0.0117188V12.0861Z" fill="#00B67A"/>
          <path d="M10.0899 5.1404L3.38537 10.1202L4.3637 7.0425L1.80273 5.1404H4.96821L5.94633 2.0625L6.92445 5.1404H10.0899ZM5.94658 8.21831L7.77761 7.82451L8.50713 10.1202L5.94658 8.21831Z" fill="white"/>
          <path d="M13.0742 12.0861H24.8949V0H13.0742V12.0861Z" fill="#00B67A"/>
          <path d="M13.0742 12.0861H18.9846V0H13.0742V12.0861Z" fill="#00B67A"/>
          <path d="M19.1277 8.172L20.6978 7.82507L21.424 10.1729L18.9617 8.29391L16.4034 10.1729L17.3964 7.08403L14.7969 5.17502H18.0099L19.0025 2.08594L19.9954 5.17502H23.2083L19.1277 8.172Z" fill="white"/>
          <path d="M26.1465 12.0861H37.9672V0H26.1465V12.0861Z" fill="#00B67A"/>
          <path d="M26.1465 12.0861H32.0568V0H26.1465V12.0861Z" fill="#00B67A"/>
          <path d="M36.2247 5.1404L29.5201 10.1202L30.4985 7.0425L27.9375 5.1404H31.103L32.0811 2.0625L33.0592 5.1404L36.2247 5.1404ZM32.0813 8.21831L33.9124 7.82451L34.6419 10.1202L32.0813 8.21831Z" fill="white"/>
          <path d="M39.2188 12.0861H51.0394V0H39.2188V12.0861Z" fill="#00B67A"/>
          <path d="M39.2188 12.0861H45.1291V0H39.2188V12.0861Z" fill="#00B67A"/>
          <path d="M49.2931 5.1404L42.5887 10.1202L43.5668 7.0425L41.0059 5.1404H44.1713L45.1495 2.0625L46.1276 5.1404L49.2931 5.1404ZM45.1497 8.21831L46.9807 7.82451L47.7103 10.1202L45.1497 8.21831Z" fill="white"/>
          <path d="M52.2812 12.0861H64.1019V0H52.2812V12.0861Z" fill="#00B67A"/>
          <path d="M52.2812 12.0861H58.1916V0H52.2812V12.0861Z" fill="#00B67A"/>
          <path d="M62.3556 5.1404L55.6512 10.1202L56.6293 7.0425L54.0684 5.1404H57.2338L58.212 2.0625L59.1901 5.1404H62.3556ZM58.2122 8.21831L60.0432 7.82451L60.7728 10.1202L58.2122 8.21831Z" fill="white"/>
        </g>
        <defs>
          <clipPath id="clip0_246_2118">
            <rect width="64" height="12" fill="white"/>
          </clipPath>
        </defs>
      </svg>
      `,
    prevArrow: `<svg class="slick-prev" xmlns="http://www.w3.org/2000/svg" width="54" height="55" viewBox="0 0 54 55" fill="none">
      <path d="M27 5.51562C38.8741 5.51562 48.5 15.1415 48.5 27.0156C48.5 38.8897 38.8741 48.5156 27 48.5156C15.1259 48.5156 5.5 38.8897 5.5 27.0156C5.5 15.1415 15.1259 5.51562 27 5.51562Z" fill="#F4B184" stroke="white" stroke-width="11"/>
      <path d="M33 27.0156H21.0005" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M27 21.0156L21.0002 27.0154L27 33.0152" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    nextArrow: `<svg class="slick-next" xmlns="http://www.w3.org/2000/svg" width="54" height="55" viewBox="0 0 54 55" fill="none">
      <path d="M27 5.51562C15.1259 5.51562 5.5 15.1415 5.5 27.0156C5.5 38.8897 15.1259 48.5156 27 48.5156C38.8741 48.5156 48.5 38.8897 48.5 27.0156C48.5 15.1415 38.8741 5.51562 27 5.51562Z" fill="#F4B184" stroke="white" stroke-width="11"/>
      <path d="M21 27.0156H32.9995" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M27 21.0156L32.9998 27.0154L27 33.0152" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    lock: `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 19" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.4 19H13.6C14.2365 19 14.847 18.7498 15.2971 18.3044C15.7471 17.859 16 17.2549 16 16.625V9.5C16 8.87011 15.7471 8.26602 15.2971 7.82062C14.847 7.37522 14.2365 7.125 13.6 7.125H2.4C1.76348 7.125 1.15303 7.37522 0.702944 7.82062C0.252856 8.26602 0 8.87011 0 9.5V16.625C0 17.2549 0.252856 17.859 0.702944 18.3044C1.15303 18.7498 1.76348 19 2.4 19ZM9.60039 13.0625C9.60039 13.9369 8.88405 14.6458 8.00039 14.6458C7.11673 14.6458 6.40039 13.9369 6.40039 13.0625C6.40039 12.188 7.11673 11.4791 8.00039 11.4791C8.88405 11.4791 9.60039 12.188 9.60039 13.0625Z" fill="black"/>
        <path d="M11.9992 9.30208C11.787 9.30208 11.5836 9.21868 11.4335 9.07021C11.2835 8.92174 11.1992 8.72038 11.1992 8.51042V4.75C11.1992 3.91015 10.8621 3.10469 10.262 2.51083C9.66184 1.91696 8.84791 1.58333 7.99922 1.58333C7.15053 1.58333 6.33659 1.91696 5.73648 2.51083C5.13636 3.10469 4.79922 3.91015 4.79922 4.75L4.79902 4.99737C4.79902 5.20733 4.71474 5.4087 4.56471 5.55716C4.41468 5.70563 4.2112 5.78904 3.99902 5.78904C3.78685 5.78904 3.58337 5.70563 3.43334 5.55716C3.28331 5.4087 3.19902 5.20733 3.19902 4.99737L3.19922 4.75C3.19922 3.49022 3.70493 2.28204 4.60511 1.39124C5.50528 0.500445 6.72618 0 7.99922 0C9.27226 0 10.4932 0.500445 11.3933 1.39124C12.2935 2.28204 12.7992 3.49022 12.7992 4.75V8.51042C12.7992 8.72038 12.7149 8.92174 12.5649 9.07021C12.4149 9.21868 12.2114 9.30208 11.9992 9.30208Z" fill="black"/>
      </svg>
    `
  }

  return svgObj[name]
}
