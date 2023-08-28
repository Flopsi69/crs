console.log('initExp');

(function () {
  /********* exp **********/
  const exp = {
    dir: 'https://flopsi69.github.io/crs/add/new_pdp',
    observer: {
      mutation: true,
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
      if (el.classList.contains('loading-mask')) {
      }
      // console.log(el);
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
    .product-tabs-heading .item.title.lav-nav-active {
      background: var(--bg-text, #00A950);
      border-color: var(--bg-text, #00A950);
      border-radius: 6px;
    }
    .product-tabs-heading .item.title.lav-nav-active .switch {
      color: #fff!important;
    }
    .lav-buy {
      display: flex;
      align-items: center;
      height: 48px;
      width: 100%;
      justify-content: center;
      font-size: 14px;
      font-weight: 700;
      border-radius: 12px;
      background: var(--bg-text, #00A950);
    }
    .lav-buy__icon {
      height: 24px;
      width: 30px;
      margin-right: 4px;
    }
    .lav-variant {
      padding: 16px;
      border-radius: 12px;
      border: 2px solid var(--grey-light-stroke, #ECECEC);
      background: var(--white, #FFF);
      transition: 0.35s;
    }
    .lav-variant.active {
      border: 2px solid var(--bg-text, #00A950);
      background: var(--green-bg, #F2FBF6);
    }
    .lav-variant + .lav-variant {
      margin-top: 8px;
    }
    .lav-variant__head {
      display: flex;
      justify-content: space-between;
      padding-left: 34px;
    }
    .lav-variant__body {
      position: relative;
      margin: 4px 0;
      padding-left: 34px;
    }
    .lav-variant__footer {
      display: flex;
      padding-left: 34px;
      
    }
    .lav-variant__disc {
      color: var(--red-light, #F05F79);
      font-size: 13px;
      font-weight: 600;
      line-height: 18px;
      margin-left: 8px;
    }
    .lav-variant__body:before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      width: 20px;
      height: 20px;
      transform: translateY(-50%);
      border: 2px solid #DBDBDB;
      border-radius: 4px;
      transition: 0.35s;
    }
    .active .lav-variant__body:before {
      background: #00A950 url('${exp.dir}/img/check.svg') no-repeat center center;
      border-color: #00A950;
      border-color: 0.35s;
    }
    .lav-variant__title {
      margin-right: 8px;
      color: var(--text, #373843);
      font-family: Manrope;
      font-size: 13px;
      font-weight: 500;
      line-height: 18px;
    }
    .lav-variant__stock {
      color: var(--bg-text, #00A950);
      text-align: right;
      font-size: 13px;
      font-weight: 600;
      line-height: 18px;
    }
    .lav-variant__price {
      color: #373843;
      font-size: 24px;
      font-weight: 700;
      line-height: 32px;
    }
    .lav-variant__old-price {
      color: var(--text-grey, #A0A0A0);
      font-size: 13px;
      font-weight: 500;
      line-height: 18px;
      text-decoration: line-through;
    }
    .lav-payment__title {
      color: var(--text, #373843);
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
      letter-spacing: 0.021px;
    }
    .lav-payment__item {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .lav-payment__item + .lav-payment__item {
      margin-top: 12px;
    }

    .lav-delivery__item {
      display: flex;
      align-items: center;
      margin-top: 12px;
    }
    .lav-delivery__item.disabled {
      opacity: 0.5;
    }
    .lav-delivery__item.active {
      display: flex;
    }
    .lav-delivery__logo {
      line-height: 0;
      flex-shrink: 0;
      width: 20px;
      margin-bottom: auto;
      margin-top: 3px;
    }
    .lav-delivery__info {
      margin: 0 8px;
      color: var(--text, #373843);
      font-size: 14px;
      font-weight: 700;
      line-height: 20px; 
    }
    .lav-delivery__caption {
      font-weight: 400;
    }
    .lav-delivery__price {
      margin-left: auto;
      color: var(--text, #373843);
      text-align: right;
      font-size: 13px;
      font-weight: 700;
      line-height: 18px; 
    }
    .lav-del__courier .lav-delivery__price, .lav-del__to-go .lav-delivery__price {
      color: var(--bg-text, #00A950);
      font-size: 13px;
      font-weight: 700;
      line-height: 18px;
    }
    .lav-del__courier.disabled .lav-delivery__price, .lav-del__to-go.disabled .lav-delivery__price {
      color: var(--text, #373843);
    }
    .lav-delivery {
      display: flex;
      flex-flow: column;
    }
    .lav-delivery__item.disabled {
      order: 1;
    }
    .lav-del__note {
      border-radius: 8px;
      background: rgba(240, 95, 121, 0.10);
      padding: 8px 12px;
      align-items: flex-start;
      color: var(--red-light, #F05F79);
      font-size: 13px;
      font-weight: 600;
      line-height: 18px;
    }
    .lav-del__note > img {
      width: 16px;
      height: 16px;
      flex-shrink: 0;
      margin-right: 8px;
      margin-top: 2px;
    }
    .lav-buy__main {
      margin-top: 20px;
      height: 56px;
    }
    .lav-disc {
      color: var(--white, #FFF);
      font-size: 13px;
      font-weight: 700;
      line-height: 18px;
      border-radius: 6px;
      background: var(--red-light, #F05F79);
      padding: 4px;
    }
    .lav-hide {
      display: none!important;
    }
    .lav-city {
      display: flex;
      align-items: center;
    }
    .lav-city__caption {
      color: var(--text, #373843);
      font-family: Manrope;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 20px; 
    }
    .lav-city__dropdown-wrap {
      position: relative;
      margin-left: 20px;
      flex-grow: 1;
    }
    .lav-city__dropdown {
      display: none;
      position: absolute;
      left: 0;
      right: 0;
      background: #fff;
      z-index: 1;
      border-radius: 12px;
      border: 1px solid #4fb871;
      max-height: 220px;
      overflow-y: auto;
    }
    .lav-city__dropdown.active {
      display: block;
      border-radius: 0 0 12px 12px;
      border-top-color: transparent;
    }
    .lav-city__dropdown-item {
      padding: 10px 18px;
    }
    .lav-city__dropdown-item + .lav-city__dropdown-item {
      border-top: 1px solid #ECECEC;
    }
    .lav-city__value {
      position: relative;
      color: var(--text, #373843);
      font-family: Manrope;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 20px;
      border-radius: 8px;
      border: 1px solid var(--bg-text, #00A950);
      background: var(--white, #FFF);
      padding: 12px 16px;
      cursor: pointer;
      transition: 0.2s;
    }
    .lav-city__value:hover {
      opacity: 0.8;
    }
    .lav-city__value:before {
      content: '';
      position: absolute;
      z-index: 1;
      right: 12px;
      top: 40%;
      transform: rotate(180deg) translateY(-50%);
      height: 6px;
      width: 10px;
      background: url('${exp.dir}/img/arrow-top.svg') no-repeat center center;
      transition: 0.3s;
    }
    .lav-city__dropdown-wrap.active .lav-city__value:before {
      top: 50%;
      transform: rotate(0deg) translateY(-50%);
    }
    .lav-city__dropdown-wrap.active .lav-city__value {
      border-radius: 12px 12px 0 0;
    }
    .lav-sliders {
      overflow: hidden;
      margin: 24px -16px;
      padding: 32px 16px;
      background: var(--bg, #F8F8F8);
      min-width: 100%;
    }
    .lav-slider + .lav-slider {
      margin-top: 32px;
    }
    .lav-slider__title {
      color: var(--text, #373843);
      font-size: 20px;
      font-weight: 500;
      line-height: 28px;
    }
    .lav-slider__caption {
      color: var(--text, #373843);
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
      margin-top: 4px;
    }
    .lav-slider .swiper {
      overflow: visible;
      margin-top: 16px;
      width: 100%;
    }
    .lav-slide {
      display: flex!important;
      flex-flow: column;
      border-radius: 6px;
      background: #FFF;
      padding: 8px 8px 12px;
      box-sizing: border-box;
      height: auto!important;
    }
    .lav-slide__title {
      color: var(--text, #373843);
      font-size: 13px;
      font-weight: 500;
      line-height: 18px;
      margin-bottom: 4px;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .lav-recipe {
      display: inline-flex;
      align-items: center;
      border-radius: 6px;
      background: rgba(240, 95, 121, 0.10);
      padding: 2px 8px;
      color: var(--red, #E60023);
      font-size: 13px;
      font-weight: 500;
      line-height: 18px;
      margin-bottom: 4px;
    }
    .lav-recipe img {
      margin-right: 8px;
      flex-shrink: 0;
    }
    .lav-slide__price {
      margin-top: auto;
      display: flex;
      align-items: flex-end;
    }
    .lav-slide__price-curr {
      color: #373843;
      font-size: 15px;
      font-weight: 700;
      line-height: 24px;
    }
    .lav-slide__price-old {
      color: var(--text-grey, #A0A0A0);
      font-size: 12px;
      font-weight: 500;
      line-height: 18px;
      text-decoration: line-through;
      margin-left: 6px;
    }
    .lav-slide__image, .lav-slide__image picture {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 132px;
    }

    .lav-slide__image img {
      max-width: 90%;
      max-height: 90%;
    }
    .lav-slide__buy {
      height: 40px;
      border-radius: 8px;
      margin-top: 8px;
    }
    .lav-slide__disc {
      position: absolute;
      color: var(--white, #FFF);
      font-size: 12px;
      font-weight: 700;
      line-height: 16px; 
      left: 8px;
      top: 8px;
      border-radius: 6px;
      background: var(--red-light, #F05F79);
      padding: 2px 4px;
    }
    .lav-analogs {
      border-radius: 12px;
      border: 2px solid var(--bg-text, #00A950);
      color: #00A950;
      background: #fff;
      width: 100%;
      font-family: Manrope;
      font-weight: 700;
    }
    .lav-analogs-main {
      margin-top: 12px;
      height: 56px;
    }
    .lav-choose__dropdown {
      display: none;
    }
    .lav-choose {
      position: relative;
      font-family: Manrope;
      flex-shrink: 0;
      margin-right: 8px;
      border-radius: 8px;
      background: #FFF;
    }
    .lav-choose:not(.lav-choose_multi) {
      border: 1px solid var(--stroke, #DBDBDB);
    }
    .lav-choose_multi .lav-choose__value.active {
      position: relative;
    }
    .lav-choose_multi {
      min-width: 125px;
      border: 2px solid var(--bg-text, #00A950);
    }
    .lav-choose_multi:before {
      content: '';
      position: absolute;
      z-index: 1;
      right: 12px;
      top: 40%;
      transform: rotate(180deg) translateY(-50%);
      height: 6px;
      width: 10px;
      background: url('${exp.dir}/img/arrow-top.svg') no-repeat center center;
    }
    .lav-choose_multi.active:before {
      transform: translateY(-50%);
      top: 50%;
    }
    .lav-choose__value {
      padding: 6px 12px;
      padding-right: 30px;
      background: #fff;
      border-radius: 8px;
    }
    .lav-choose_multi .lav-choose__value {
      padding-top: 4px;
      padding-bottom: 4px;
    }
    .lav-choose_multi .lav-choose__value:not(.active) {
      display: none;
      position: absolute;
      left: -2px;
      right: -2px;
      z-index: 10;
      bottom: calc(100% - 3px);
      z-index: 10;
      border: 2px solid var(--bg-text, #00A950);
    }
    .lav-choose_multi.active .lav-choose__value:not(.active) {
      display: block;
      border-bottom: 1px solid #DBDBDB;
      border-radius: 8px 8px 0 0;
    }
    .lav-choose_multi.active .lav-choose__value.active {
      border-radius: 0 0 8px 8px;
    }
    .lav-choose__caption {
      color: var(--text-grey, #73747B);
      font-size: 12px;
      font-weight: 500;
      line-height: 16px;
      white-space: nowrap;
    }
    .lav-choose__price {
      color: #373843;
      font-size: 14px;
      font-weight: 700;
      line-height: 20px;
    }
    .lav-popular {
      padding: 24px 24px 32px;
      background: #fff;
    }
    .lav-popular__title {
      color: var(--text, #373843);
      font-family: Manrope;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 24px; 
    }
    .lav-popular__list {
      display: flex;
      flex-flow: column;
      align-items: flex-start;
      margin-top: 16px;
    }
    .lav-popular__item {
      display: inline-block;
      border-radius: 6px;
      background: var(--light-green, #E8F5ED);
      padding: 6px 12px;
      color: var(--text, #373843);
      font-family: Manrope;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px;
    }
    .lav-popular__item.active {
      background: var(--bg-text, #00A950);
      color: #fff;
    }
    .lav-popular__item + .lav-popular__item {
      margin-top: 12px;
    }
    .lav-exist {
      border-radius: 6px;
      border: 1px solid var(--grey-light-stroke, #ECECEC);
      background: var(--white, #FFF);
      padding: 12px;
    }
    .lav-exist__logo {
      margin-right: 8px;
    }
    .lav-exist__arrow {
      margin-left: auto;
      transform: rotate(90deg);
    }
    .lav-exist__title {
      color: var(--text, #373843);
      font-family: Manrope;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px 
    }
    @media(max-width: 767px) {
      [data-bind="scope: 'widget_recently_viewed.widget_recently_viewed'"] {
        display: none;
      }
      .block.related {
        display: none;
      }
      .att-block {
        display: none;
      }
      .lav-sliders {
        margin-bottom: 0;
      }
      .d_mobile:not(.v_tablet) .all-info-wrapper .promo {
        display: none;
      }
      .d_mobile:not(.v_tablet) .all-info-wrapper .left-wrapper .product-image-wrap .product-thumb-images .gallery-thumb {
        padding: 15px;
        box-sizing: border-box;
      }
      .product-tabs-heading .item.title {
        border-radius: 6px;
        border: 1px solid var(--stroke, #DBDBDB);
        padding: 5px 12px;
      }
      .d_mobile .inventory-info {
        padding-left: 20px;
      }
      .d_mobile .all-info-wrapper .page-title {
        color: var(--text, #373843);
        font-size: 20px;
        font-weight: 500;
        line-height: 28px;
      }
      .d_mobile:not(.v_tablet) .product-tabs-heading .item.title+.item.title {
        margin-left: 6px;
      }
      .all-info-wrapper .actions-and-price-wrap .box-tocart:not(.single) {
        display: none;
      }
      .product-tabs-heading .item.title .switch {
        font-size: 13px;
      }
      .d_mobile .product-tabs-heading-wrap {
        height: 52px;
      }
      [id="tab-label-reviews.tab"] {
        order: 1;
      }
      .d_mobile .product-tabs-heading {
        margin: 0 -16px;
        flex-grow: 1;
        padding: 0 16px;
      }
      .miniproduct {
        height: auto!important;
        padding: 8px 10px!important;
        border-top: 1px solid var(--light-green, #E8F5ED)!important;
      }
      .miniproduct .info, .miniproduct .actions-block {
        display: none!important;
      }
      .page-footer .up-button {
        bottom: 85px;
      }

      .d_mobile:not(.v_tablet) .all-info-wrapper .product-info-other .attention-text {
        color: var(--text, #373843);
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        text-align: center;
        background: none;
        padding: 0;
        margin-top: 12px;
        font-family: Manrope;
      }
      .d_mobile:not(.v_tablet) .all-info-wrapper .product-info-other .attention-text span {
        color: var(--red-light, #F05F79);
      }
      .left-wrapper .product-thumb-images .owl-dots {
        position: static;
        margin-top: 12px;
      }
      .d_mobile:not(.v_tablet) .all-info-wrapper .left-wrapper .product-image-wrap .product-thumb-images {
        overflow: visible;
      }
      .all-info-wrapper .payment-info__tabs .title {
        flex: 1;
        text-align: center;
        font-size: 14px;
      }
      .all-info-wrapper .payment-info__tabs [data-tab-content]:not(.active)+.title {
        color: var(--text-grey, #A0A0A0);
        font-weight: 500;
      }
      .payment-info-item-list {
        display: none;
      }
      .all-info-wrapper .payment-info__tabs .shipping-info-block[data-tab-content] {
        padding-top: 6px;
      }
      .delivery-info-item-list {
        display: none;
      }
      .d_mobile:not(.v_tablet) .all-info-wrapper .all-info-top-wrapper>.attribute.manufacturer {
        color: var(--text-grey, #73747B);
        font-size: 13px;
        font-weight: 500;
        line-height: 18px;
      }
      .d_mobile .breadcrumbs .items {
        padding-top: 16px;
        padding-bottom: 16px;
      }
      .breadcrumbs .items .item:not(:last-child):after {
        width: 6px;
        height: 6px;
      }
      .d_mobile:not(.v_tablet) .all-info-wrapper .product-info-other .payment-info {
        position: relative;
        padding-top: 36px;
        margin-top: 0;
        margin-top: 24px;
        padding-bottom: 32px;
      }
      .d_mobile:not(.v_tablet) .all-info-wrapper .product-info-other .payment-info:before {
        content: '';
        position: absolute;
        left: -16px;
        right: -16px;
        height: 12px;
        top: 0;
        background-color: #F8F8F8;
      }
      .d_mobile:not(.v_tablet) .all-info-wrapper .product-info-other {
        display: block;
      }
      .box-tocart.single {
        padding: 0!important;
      }
      .box-tocart.single .price-box.price-final_price {
        display: block!important;
      }
      .box-tocart.single .special-price {
        display: block;
        margin-bottom: 4px;
      }
      .all-info-wrapper .actions-and-price-wrap .product-info-price .price-box .old-price .price {

      }
      .all-info-wrapper .actions-and-price-wrap {
        border-radius: 0!important;
        border: none!important;
      }
      .box-tocart.single:not(.out-of-stock) .fieldset {
        display: none!important;
      }
      .box-tocart.single .special-price .price, .box-tocart.single [data-price-type="finalPrice"] .price {
        font-size: 32px!important;
        font-weight: 700!important;
        line-height: 40px!important;
      }
      .box-tocart.single .old-price .price {
        color: var(--text-grey, #A0A0A0)!important;
        font-size: 13px!important;
        font-weight: 500!important;
        line-height: 18px!important;
        text-decoration: line-through!important;
        margin-left: 0!important;
      }
      .left-wrapper .product-thumb-images .owl-dots .owl-dot+.owl-dot {
        margin-left: 17px;
      }
      .advancedproductlabels-content-wrapper {
        display: none;
      }
      .d_mobile:not(.v_tablet) .all-info-wrapper .all-info-top-wrapper {
        padding-top: 56px;
        padding-bottom: 0;
      }
      .all-info-wrapper .actions-and-price-wrap .box-tocart>span.out-stock {
        color: var(--red-light, #F05F79);
        font-size: 13px;
        font-weight: 600;
        line-height: 18px;
        margin-top: 4px!important;
        width: auto!important;
      }
      .all-info-wrapper .actions-and-price-wrap .box-tocart .view-analogs {
        display: none;
      }
      .box-tocart.single.out-of-stock [data-price-type="finalPrice"] .price {
        color: #A0A0A0;
      }
      .inventory-info .block-inventory .shop-item {
        border-radius: 12px;
        background: var(--bg, #F8F8F8);
        padding: 16px 12px;
      }
      .inventory-info .block-inventory .shop-item .shop-data .title {
        color: var(--text, #373843);
        font-family: Manrope;
        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
        letter-spacing: 0.021px; 
        min-height: 24px;
        display: flex;
        flex-flow: column;
        justify-content: center;
      }
      .inventory-info .block-inventory .shop-item .small-logo {
        left: 16px;
        top: 16px;
      }
      .inventory-info .block-inventory .mobile-hat:before, .inventory-info .block-inventory .mobile-hat:after {
        border-radius: 12px 12px 0px 0px;
        background: var(--bg-text, #00A950);
      }
      .inventory-info .block-inventory .mobile-hat .mobile-hat-inner {
        z-index: 1;
      }
      .inventory-info .block-inventory .select-wrapper .filter-select-wrapper .autocomplete-menu-wrapper {
        background: var(--bg-text, #00A950);
        padding-top: 7px;
        padding-bottom: 24px;
      }
      .inventory-info .block-inventory .select-wrapper .filter-select-wrapper .title {
        color: var(--white, #FFF);
        font-family: Manrope;
        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
        margin-bottom: 12px;
      }
      .inventory-info .block-inventory .select-wrapper .filter-select-wrapper .search-field {
        margin-bottom: 0;
      }
      .inventory-info .block-inventory .select-wrapper .filter-select-wrapper .autocomplete-menu-wrapper .ui-autocomplete {
        margin-top: 12px;
      }
    }

    @media(min-width: 768px) {
      .att-block {
        display: none;
      }

      .lav-delivery__item.lav-city [
        margin-top: 0;
      ]
      .promo .main-product-info {
        margin-top: 8px;
        border-radius: 12px;
        box-sizing: border-box;
        padding: 21px 24px;
        border: 1px solid var(--primaryColorGray);
        background: #fff;
      }

      .promo .main-product-info .title {
        font-weight: 700;
        font-size: .875rem;
        line-height: 1.42;
        display: block;
        margin-bottom: 18px
      }

      .promo .main-product-info__item {
        font-weight: 500;
        font-size: .75rem;
        line-height: 1.5
      }

      .promo .main-product-info__item .type {
        font-weight: 500;
        color: var(--fadeColorMain50);
        margin-bottom: 2px
      }

      .promo .main-product-info__item+.main-product-info__item {
        margin-top: 3px
      }
      
      .lav-variants + .product-add-form {
        display: none!important;
      }
      .all-info-wrapper .page-title {
        color: var(--text, #373843);
        font-family: Manrope;
        font-size: 24px;
        font-weight: 500;
        line-height: 32px; 
        margin-top: 16px;
        margin-bottom: 24px;
      }
      .all-info-wrapper .product-info-other .attention-text {
        color: var(--text, #373843);
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        text-align: center;
        background: none;
        padding: 0;
        margin-top: 12px;
        font-family: Manrope;
        width: auto;
      }
      .left-wrapper .labels .absolute {
        left: 116px;
        top: 30px;
      }
      .all-info-wrapper .product-info-other .attention-text span {
        color: var(--red-light, #F05F79);
      }
      .lav-buy__main {
        margin-top: 12px;
      }
      .product-tabs-heading .item.title+.item.title {
        margin-left: 12px;
      }
      .all-info-wrapper .second-row {
        justify-content: space-between;
      }
      .all-info-wrapper .second-row .manufacturer {
        color: var(--text-grey, #73747B);
        font-family: Manrope;
        font-size: 13px;
        font-style: normal;
        font-weight: 500;
        line-height: 18px;
      }
      .all-info-wrapper .right-wrapper .first-row {
        margin-bottom: 0;
        align-items: flex-end;
      }
      .all-info-wrapper .towishlist .icon-label {
        color: var(--text, #373843);
        font-family: Manrope;
        font-size: 13px;
        font-style: normal;
        font-weight: 500;
        line-height: 18px;
      }
      .all-info-wrapper .towishlist__content {
        height: 32px;
        padding: 4px 8px;
        border-radius: 6px;
        border: 1px solid var(--grey-light-stroke, #ECECEC);
      }
      .all-info-wrapper .right-wrapper {
        padding: 12px 24px 0 24px;
      }
      .all-info-wrapper .promo-question-block {
        padding: 32px 20px;
        text-align: center;
      }
      .all-info-wrapper .promo-question-block .head {
        display: block;
      }
      .all-info-wrapper .promo-question-block .head .content {
        margin-top: 12px;
        color: var(--text, #373843);
        text-align: center;
        font-family: Manrope;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px;
        width: 100%;
      }
      .all-info-wrapper .promo-question-block .head .content .text {
        font-weight: 700;
      }
      .all-info-wrapper .promo-question-block .description {
        color: var(--text-grey, #73747B);
        text-align: center;
        font-family: Manrope;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px;
        margin-bottom: 12px;
      }
      .all-info-wrapper .promo-question-block .head .icon-block {
        width: 100%;
      }
      .d_desktop .all-info-wrapper .promo-question-block .question-button {
        color: var(--bg-text, #00A950);
        font-family: Manrope;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px;
        text-decoration-style: dashed;
        text-underline-offset: 5px;
      }
      .left-wrapper__sticky {
        padding: 16px 0 24px 105px;
      }
      .d_desktop .left-wrapper .product-thumb-images .gallery-thumb, .v_tablet .left-wrapper .product-thumb-images .gallery-thumb {
        width: 78px;
        height: 78px;
      }
      .d_desktop .left-wrapper .product-thumb-images .gallery-thumb .img, .v_tablet .left-wrapper .product-thumb-images .gallery-thumb .img {
        max-width: 90%;
        max-height: 90%;
      }
      .d_desktop .left-wrapper .product-thumb-images, .v_tablet .left-wrapper .product-thumb-images {
        top: 16px;
        left: 16px;
      }
      .left-wrapper .product-image-wrap {
        width: auto;
      }
      .left-wrapper .product-image img {
        max-width: 90%;
        max-height: 90%;
      }
      .d_desktop .left-wrapper .product-thumb-images .owl-stage {
        width: auto!important;
      }
      .product-tabs-heading .item.title .switch {
        padding: 7px 12px;
        border-radius: 6px;
        color: var(--text, #373843);
        font-family: Manrope;
        font-size: 13px;
        font-style: normal;
        font-weight: 500;
        line-height: 18px;
        display: inline-block;
      }
      [id="tab-label-reviews.tab"] {
        order: 1;
      }
      .d_desktop .inventory-info .inventory-info-link {
        color: var(--bg-text, #00A950);
        font-family: Manrope;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 1.4; 
        border-bottom-style: dashed;
        transition: 0.3s;
      }
      .d_desktop .inventory-info .inventory-info-link:hover {
        opacity: 0.7;
      }
      .product-tabs-heading-wrap .miniproduct .info .special-price .price, .product-tabs-heading-wrap .miniproduct [data-price-type="finalPrice"] .price {
        color: #373843;
        font-family: Manrope;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 1; 
      }
      .product-tabs-heading-wrap .miniproduct .info .price .old-price .price {
        color: var(--text-grey-light, #A0A0A0);
        font-family: Manrope;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px; /* 142.857% */
        text-decoration: line-through;
        margin-left: 8px;
      }
      .product-tabs-heading-wrap .miniproduct .info .name {
        line-height: 1.1;
      }
      .miniproduct .actions-block .tocart {
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: Manrope;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px;
        width: 140px;
      }
      .all-info-wrapper .actions-and-price-wrap .box-tocart {
        padding: 0;
      }
      .all-info-wrapper .actions-and-price-wrap {
        border-radius: 0;
        border: none;
      }
      .all-info-wrapper .page-title .base {
        max-width: 100%;
      }
      .advancedproductlabels-content-wrapper {
        display: none;
      }
      .lav-recipe {
        margin-left: 12px;
        margin-bottom: 0;
      }
      .lav-variants {
        display: grid;
        gap: 8px;
        grid-template-columns: 1fr 1fr;
      }
      .lav-variant {
        padding: 16px 12px;
      }
      .lav-variant + .lav-variant {
        margin-top: 0;
      }
      .lav-buy__main {
        margin-top: 0;
        flex-grow: 1;
      }
      .lav-buy__main-wrap {
        display: flex;
        align-items: center;
        margin-top: 12px;
        width: 100%;
      }
      .lav-buy__main-wrap .button-light {
        color: var(--bg-text, #00A950);
        font-family: Manrope;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px;
        border: none;
        padding: 0;
        border-bottom: 1px dashed #00A950;
        margin-left: 24px;
        border-radius: 0;
        white-space: nowrap;
        height: auto;
      }
      .all-info-wrapper .payment-info .delivery-info-item-list, .all-info-wrapper .payment-info .payment-info-item-list {
        display: none;
      }
      .all-info-wrapper .payment-info {
        position: relative;
        margin-top: 32px;
        padding: 32px 0 32px 32px;
        flex-grow: 1;
        border-radius: 12px;
      }
      .payment-info:before {
        content: '';
        position: absolute;
        top: -8px;
        z-index: 1;
        left: 0;
        right: -24px;
        height: 8px;
        background-color: #F8F8F8;
      }
      .lav-sliders {
        margin-top: 0;
      }
      .all-info-wrapper .payment-info__tabs [data-tab-content] {
        display: block;
        border: 0;
        padding-top: 0;
      }
      .lav-del__title {
        color: var(--text, #373843);
        font-family: Manrope;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px;
        margin-bottom: 24px;
      }
      .all-info-wrapper .payment-info__tabs {
        flex-wrap: nowrap;
      }
      .d_desktop .all-info-wrapper .payment-info__tabs .title {
        display: none;
      }
      .shipping-info-block {
        border-right: 1px solid #ECECEC!important;
        padding-right: 40px;
        margin-right: 40px;
      }
      .lav-exist {
        cursor: pointer;
        transition: 0.35s;
      }
      .lav-exist:hover {
        opacity: 0.6;
      }
      .d_desktop .all-info-wrapper .actions-and-price-wrap .box-tocart .view-analogs {
        display: none;
      }
      .lav-analogs-main:hover {
        color: #fff;
      }
      .box-tocart.single.out-of-stock [data-price-type="finalPrice"] .price {
        color: #A0A0A0;
      }
      .box-tocart.single .special-price {
        display: block;
        margin-bottom: 4px;
      }
      .box-tocart.single .old-price .price {
        color: var(--text-grey, #A0A0A0)!important;
        font-size: 13px!important;
        font-weight: 500!important;
        line-height: 18px!important;
        text-decoration: line-through!important;
        margin-left: 0!important;
      }
      .box-tocart.single .price-box.price-final_price {
        display: block!important;
      }
      .box-tocart.single:not(.out-of-stock) .fieldset {
        display: none!important;
      }
    }
  `;

  waitFor(
    () => document.head,
    () => {
      const stylesEl = document.createElement('style');
      stylesEl.innerHTML = styles;
      document.head.appendChild(stylesEl);

      const swiperStyle = document.createElement('link');
      swiperStyle.rel = 'stylesheet';
      swiperStyle.href =
        'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css';
      document.head.appendChild(swiperStyle);

      const swiperScript = document.createElement('script');
      swiperScript.src =
        'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js';
      document.head.appendChild(swiperScript);
    },
    100
  );
  /*** STYLES / End ***/

  /********* Custom Code **********/
  init();
  function init() {
    console.log('init');

    if ($('.inventory-info-link')) {
      $('body').classList.add('lav-bg-exist');
    }

    $('.inventory-info-link').click();
    $('.inventory-info-link').click();

    handleNav();
    handleVariations();
    handleDelivery();
    setTimeout(() => {
      handleInventory();
    }, 1000);

    waitFor(
      () => typeof Swiper == 'function',
      () => {
        $$('.related').forEach((el) => {
          handleRelated(el);
        });
        handleRecently();
      }
    );
  }

  function handleInventory() {
    $(
      '.inventory-info .block-inventory .select-wrapper .filter-select-wrapper .title'
    ).innerText = 'Ваше місто';

    const popular = `
      <div class="lav-popular">
        <div class="lav-popular__title">Популярні міста:</div>
        <div class="lav-popular__list">
          <div class="lav-popular__item active">Київ</div>
          <div class="lav-popular__item">Харків</div>
          <div class="lav-popular__item">Львів</div>
          <div class="lav-popular__item">Одеса</div>
          <div class="lav-popular__item">Дніпро</div>
          <div class="lav-popular__item">Запоріжжя</div>
        </div>
      </div>
    `;

    $(
      '.inventory-info .block-inventory .select-wrapper .filter-select-wrapper .autocomplete-menu-wrapper'
    ).insertAdjacentHTML('afterend', popular);

    $('#region-search').addEventListener('input', function () {
      checkInput(this.value);
      // handleAutocomplete();
    });

    toggleCity('Київ');
    checkInput($('#region-search').value);
    // handleAutocomplete();

    $$('.lav-popular__item').forEach((el) => {
      el.addEventListener('click', function () {
        // if (this.classList.contains('active')) return;
        // $('.lav-popular__item.active')?.classList.remove('active');
        // this.classList.add('active');
        toggleCity(this.innerText);
      });
    });

    // $('.inventory-info .block-inventory').addEventListener(
    //   'click',
    //   handleAutocomplete();
    // );

    function handleAutocomplete() {
      $$(
        '.inventory-info .block-inventory .select-wrapper .filter-select-wrapper .autocomplete-menu-wrapper .ui-autocomplete .ui-menu-item a:not(.lav-handled)'
      ).forEach((el) => {
        el.classList.add('lav-handled');
        el.addEventListener('click', function () {
          $('#region-search').value = '';
          checkInput($('#region-search').value);
          console.log('click', el.innerText);
          const isSome = Array.from($$('.lav-popular__item')).some(
            (innerEl) => {
              if (innerEl.innerText.trim() === el.innerText.trim()) {
                $('.lav-popular__item.active')?.classList.remove('active');
                innerEl.classList.add('active');
                return true;
              }

              return false;
            }
          );

          if (!isSome) {
            $('.lav-popular__item.active')?.classList.remove('active');
          }
        });
      });
    }
  }

  function checkInput(val) {
    if (val) {
      $(
        '.inventory-info .block-inventory .select-wrapper .filter-select-wrapper .autocomplete-menu-wrapper .ui-autocomplete'
      ).style.display = 'block';
      $('.lav-popular').style.display = 'none';
    } else {
      $(
        '.inventory-info .block-inventory .select-wrapper .filter-select-wrapper .autocomplete-menu-wrapper .ui-autocomplete'
      ).style.display = 'none';
      $('.lav-popular').style.display = 'block';
    }
  }

  function toggleCity(name) {
    console.log('toggleCity', name);

    $('#region-search').value = '';
    checkInput($('#region-search').value);
    $('.lav-city__value').innerText = name;

    Array.from(
      $$(
        '.inventory-info .block-inventory .select-wrapper .filter-select-wrapper .autocomplete-menu-wrapper .ui-autocomplete .ui-menu-item'
      )
    ).some((el) => {
      if (el.textContent.trim() === name) {
        el.querySelector('a').click();
        return true;
      }

      return false;
    });

    const isSome = Array.from($$('.lav-popular__item')).some((el) => {
      console.log('currentName', el.textContent.trim());
      console.log('searchName', name);
      if (el.textContent.trim() === name) {
        $('.lav-popular__item.active')?.classList.remove('active');
        el.classList.add('active');
        return true;
      }

      return false;
    });

    if (!isSome) {
      $('.lav-popular__item.active')?.classList.remove('active');
    }

    if ($$('.shops .shop-item').length) {
      $('.lav-delivery__caption span').innerText = length;
      $('.lav-del__to-go .lav-delivery__caption').classList.remove('lav-hide');
      $('.lav-exist').classList.remove('lav-hide');
      $('.lav-del__to-go').classList.remove('disabled');
      $('.lav-del__courier').classList.remove('disabled');
      $('.lav-del__note_empty')?.remove();

      $('.lav-del__to-go .lav-delivery__price').innerText = 'Безкоштовно';
      $('.lav-del__courier .lav-delivery__price').innerHTML =
        'Безкоштовно<br/>від 1000 грн';
    } else {
      $('.lav-del__up').insertAdjacentHTML(
        'afterend',
        `
        <div class='lav-delivery__item lav-del__note lav-del__note_empty'>
          <img src="${exp.dir}/img/note.svg" />
          Товар відсутній в аптеках обраного міста.
        </div>
      `
      );
      $('.lav-del__to-go .lav-delivery__caption').classList.add('lav-hide');
      $('.lav-exist').classList.add('lav-hide');
      $('.lav-del__to-go').classList.add('disabled');
      $('.lav-del__courier').classList.add('disabled');
      $('.lav-del__to-go .lav-delivery__price').innerText = 'Недоступно';
      $('.lav-del__courier .lav-delivery__price').innerText = 'Недоступно';
    }
  }

  function handleNav() {
    $$('.product-tabs-heading__content .item').forEach((el) => {
      if (
        location.href.includes(el.querySelector('a').href) &&
        !el.querySelector('a').getAttribute('href').startsWith('#')
      ) {
        el.classList.add('lav-nav-active');
      }
    });

    const navHome =
      $('[id="tab-label-product.attributes-title"]') ||
      $('#tab-label-additional a');

    if (navHome) {
      const cloneEl = navHome.cloneNode(true);
      cloneEl.innerText = 'Про товар';

      cloneEl.addEventListener('click', function (e) {
        if (this.getAttribute('href').startsWith('#')) {
          e.preventDefault();
        }
      });

      $('.product-tabs-heading__content').insertAdjacentHTML(
        'afterbegin',
        `<div class='lav-nav-product data item title ${
          cloneEl.getAttribute('href').startsWith('#') ? 'lav-nav-active' : ''
        }'></div>`
      );

      $('.lav-nav-product').insertAdjacentElement('afterbegin', cloneEl);

      $('[id="tab-label-analog"]').insertAdjacentElement(
        'afterend',
        navHome.closest('div')
      );
    }
  }

  function handleVariations() {
    const variations = $$('.product-add-form .box-tocart').length;
    const discount = getDiscount();
    const options = {
      type: 'single',
      isStock: true,
      items: [],
    };

    if ($('.advancedproductlabels-content-wrapper')) {
      if (window.innerWidth < 768) {
        $('.page-title-wrapper').insertAdjacentHTML(
          'afterbegin',
          `
          <div class="lav-recipe">
            <img src="${exp.dir}/img/pen.svg" />
            рецептурний
          </div>
          `
        );
      } else {
        $('.advancedproductlabels-content-wrapper').insertAdjacentHTML(
          'beforebegin',
          `
          <div class="lav-recipe">
            <img src="${exp.dir}/img/pen.svg" />
            рецептурний
          </div>
          `
        );
      }
    }

    if (discount) {
      $(
        '.advancedproductlabel'
      ).innerHTML = `<span class='lav-disc'>-${discount}%</span>`;
    }

    if (variations > 1) {
      $('.product-add-form').insertAdjacentHTML(
        'beforebegin',
        `
        <div class='lav-variants'></div>
      `
      );

      $$('.product-add-form .box-tocart').forEach((el) => {
        const newEl = document.createElement('div');
        newEl.classList.add('lav-variant');

        if (!$('.lav-variant.active')) {
          newEl.classList.add('active');
          el.classList.add('active');
        }

        const title = el.querySelector('span').innerText;
        const stock = el.querySelector('.stock').innerText;
        const price =
          el.querySelector('.special-price .price')?.innerText ||
          el.querySelector('.product-info-price .price')?.innerText;
        const oldPrice = el.querySelector('.old-price .price')?.innerText;

        options.items.push({
          caption: title,
          price: price,
          ref: newEl,
        });

        newEl.innerHTML = `
          <div class='lav-variant__head'>
            <div class='lav-variant__title'>${title}</div>
            <div class='lav-variant__stock'>${stock}</div>
          </div>
          <div class='lav-variant__body'>
            <div class='lav-variant__price'>${price}</div>
          </div>
          <div class='lav-variant__footer'>
            <div class='lav-variant__old-price'>${oldPrice}</div>
            <div class='lav-variant__disc'>Економія ${discount}%</div>
          </div>
        `;

        if (!discount || !oldPrice) {
          newEl.querySelector('.lav-variant__footer').remove();
        }

        newEl.addEventListener('click', function () {
          $('.product-add-form .box-tocart.active').classList.remove('active');
          el.classList.add('active');

          if (this.classList.contains('active')) {
            el.querySelector('.tocart').click();
            return false;
          }

          if ($('.lav-choose_multi')) {
            const activeSticky = $('.lav-choose__value.active');
            $('.lav-choose__value:not(.active)').classList.add('active');
            activeSticky.classList.remove('active');
          }

          $('.lav-variant.active').classList.remove('active');
          this.classList.add('active');
        });

        $('.lav-variants').insertAdjacentElement('beforeend', newEl);
      });
    } else {
      options.items.push({
        caption: $('.box-tocart.single span').innerText.trim(),
        price: $('.box-tocart.single .price').innerText.trim(),
      });
      // const product = $('.box-tocart.single');
      // const stock = $('.stock', product)?.innerText.trim();
      if (discount) {
        $(
          '.box-tocart.single .old-price .price-final_price'
        ).insertAdjacentHTML(
          'beforeend',
          `<span class='lav-variant__disc'>Економія ${discount}%</span>`
        );
      }
    }

    if (
      $('.left-wrapper .main-product-info') &&
      $('.all-info-wrapper .promo') &&
      window.innerWidth >= 768
    ) {
      $('.all-info-wrapper .promo').insertAdjacentElement(
        'beforeend',
        $('.left-wrapper .main-product-info')
      );
    }

    if ($('.attention-text')) {
      if (window.innerWidth < 768) {
        $('.attention-text')?.insertAdjacentHTML(
          'afterend',
          `
        <button class='lav-buy__main button lav-buy'>
          <svg class="lav-buy__icon"><use xlink:href="https://www.add.ua/static/version1692257628/frontend/Brander/Add/uk_UA/images/s.svg#icon-cart"></use></svg>
          Купити
        </button>
      `
        );
      } else {
        $('.attention-text')?.insertAdjacentHTML(
          'afterend',
          `
            <div class='lav-buy__main-wrap'>
              <button class='lav-buy__main button lav-buy'>
                <svg class="lav-buy__icon"><use xlink:href="https://www.add.ua/static/version1692257628/frontend/Brander/Add/uk_UA/images/s.svg#icon-cart"></use></svg>
                Купити
              </button>
            </div>
          `
        );

        $('.lav-buy__main-wrap').insertAdjacentElement(
          'beforeend',
          $('.product-info-other .button-light')
        );
        $('.product-info-other .button-light').innerHTML = $(
          '.product-info-other .button-light'
        ).innerHTML.replace('1', 'один');

        // $('.all-info-top-wrapper').insertAdjacentElement(
        //   'afterend',
        //   $('.payment-info')
        // );
        $('.shipping-info-block').insertAdjacentHTML(
          'afterbegin',
          `<div class='lav-del__title'>Доставка</div>`
        );
        $('.payment-info-block').insertAdjacentHTML(
          'afterbegin',
          `<div class='lav-del__title'>Оплата</div>`
        );
      }

      $('.lav-buy__main').addEventListener('click', function (e) {
        e.preventDefault();
        if ($('.box-tocart.active')) {
          $('.product-add-form .box-tocart.active .tocart')?.click();
        } else {
          $('.product-add-form .box-tocart.single .tocart')?.click();
        }
      });

      $('.attention-text').innerHTML = $('.attention-text').innerHTML.replace(
        'Увага!',
        '<span>Увага!</span>'
      );
    } else if ($('.box-tocart.single.out-of-stock .view-analogs')) {
      options.isStock = false;
      $('.box-tocart.single.out-of-stock ')?.insertAdjacentHTML(
        'afterend',
        `<button class='button lav-analogs lav-analogs-main'>Дивитися аналоги</button>`
      );

      $('.lav-analogs').addEventListener('click', function (e) {
        e.preventDefault();
        $('.box-tocart.single.out-of-stock .view-analogs').click();
      });
    }

    if (window.innerWidth < 768) {
      handleSticky(options);
    } else if ($('.miniproduct .actions-block .tocart')) {
      $('.miniproduct .actions-block .tocart').insertAdjacentHTML(
        'afterbegin',
        `<svg class="lav-buy__icon"><use xlink:href="https://www.add.ua/static/version1692257628/frontend/Brander/Add/uk_UA/images/s.svg#icon-cart"></use></svg>`
      );
    }
  }

  function calcHeight() {
    if (!$('.d_desktop .left-wrapper__sticky') || !$('.payment-info'))
      return false;
    $('.d_desktop .left-wrapper__sticky').style.marginBottom =
      $('.payment-info').offsetHeight + 24 + 'px';

    $('.payment-info').style.marginLeft =
      '-' + ($('.d_desktop .left-wrapper').offsetWidth + 24) + 'px';
  }

  function handleSticky({ items = [], isStock = true }) {
    const isMulti = items.length > 1;
    const chooseEl = document.createElement('div');
    chooseEl.classList.add('lav-choose');
    if (isMulti) chooseEl.classList.add('lav-choose_multi');

    for (let item of items) {
      const val = document.createElement('div');
      val.classList.add('lav-choose__value');
      if (!chooseEl.querySelector('.lav-choose__value.active') && isMulti) {
        val.classList.add('active');
      }

      if (isMulti) {
        val.addEventListener('click', function () {
          $('.lav-choose_multi').classList.toggle('active');
          if (this.classList.contains('active')) return false;

          // $('.lav-choose__value.active').classList.remove('active');
          // this.classList.add('active');
          item.ref.click();
        });
      }

      val.innerHTML = `
        <div class="lav-choose__caption">${item.caption}</div>
        <div class="lav-choose__price">${item.price}</div>
      `;

      chooseEl.insertAdjacentElement('beforeend', val);
    }

    if (isStock) {
      $('.miniproduct').insertAdjacentElement('beforeend', chooseEl);
    }

    $('.miniproduct').insertAdjacentHTML(
      'beforeend',
      `
      ${
        isStock
          ? `
      <button class='lav-sticky__btn button lav-buy'>
        <svg class="lav-buy__icon"><use xlink:href="https://www.add.ua/static/version1692257628/frontend/Brander/Add/uk_UA/images/s.svg#icon-cart"></use></svg>
        Купити
      </button>
      `
          : `
       <button class='button lav-analogs lav-sticky__btn'>Дивитися аналоги</button>
      `
      }
    `
    );

    $('.lav-sticky__btn').addEventListener('click', function (e) {
      e.preventDefault();
      if (isStock) {
        if ($('.box-tocart.active')) {
          $('.product-add-form .box-tocart.active .tocart')?.click();
        } else {
          $('.product-add-form .box-tocart.single .tocart')?.click();
        }
      } else {
        $('.box-tocart.single.out-of-stock .view-analogs').click();
      }
    });
  }

  function handleDelivery() {
    const payment = `
      <div class='lav-payment'>
        <div class='lav-payment__item'>
          <div class='lav-payment__title'>Готівкою або картою при отриманні</div>
          <img src="${exp.dir}/img/pay-recieve.svg" />
        </div>
        <div class='lav-payment__item'>
          <div class='lav-payment__title'>Картою на сайті</div>
          <img src="${exp.dir}/img/pay-cart.svg" />
        </div>
        <div class='lav-payment__item'>
          <div class='lav-payment__title'>Apple Pay / Google Pay</div>
          <img src="${exp.dir}/img/pay-mobile.svg" />
        </div>
        <div class='lav-payment__item'>
          <div class='lav-payment__title'>Privat24 Pay</div>
          <img src="${exp.dir}/img/pay-privat.svg" />
        </div>
      </div>
    `;

    if ($('.payment-info-block')) {
      $('.payment-info-block').insertAdjacentHTML('beforeend', payment);
    }

    const isRecipe = $('.advancedproductlabels-content-wrapper') ? true : false;

    const delivery = `
      <div class='lav-delivery'>
        <div class='lav-delivery__item lav-city'>
          <div class='lav-city__caption'>Ваше місто</div>
          <div class='lav-city__dropdown-wrap'>
            <div class='lav-city__value'>Київ</div>
            <div class='lav-city__dropdown'>
              <div class='lav-city__dropdown-item'>Київ</div>
              <div class='lav-city__dropdown-item'>Біла церква</div>
              <div class='lav-city__dropdown-item'>Якасась дуже велика назва</div>
              <div class='lav-city__dropdown-item'>тестііі</div>
            </div>
          </div>
        </div>
        <div class='lav-delivery__item lav-del__to-go'>
          <div class='lav-delivery__logo'>
            <img src="${exp.dir}/img/delivery-add.svg" />
          </div>
          <div class='lav-delivery__info'>
            <div class='lav-delivery__title'>Самовивіз з аптеки</div>
            <div class='lav-delivery__caption'>Доступно в <strong><span>-</span> аптеках</strong></div>
          </div>
          <div class='lav-delivery__price'>
            Безкоштовно
          </div>
        </div>
        <div class='lav-delivery__item lav-exist'>
          <img class='lav-exist__logo' src="${exp.dir}/img/placement.svg" />
          <div class='lav-exist__title'>Дивитись наявність в аптеках</div>
          <img class='lav-exist__arrow' src="${exp.dir}/img/arrow-top.svg" />
        </div>
        ${
          !isRecipe
            ? `
            <div class='lav-delivery__item lav-del__courier'>
              <div class='lav-delivery__logo'>
                <img src="${exp.dir}/img/delivery-add.svg" />
              </div>
              <div class='lav-delivery__info'>
                <div class='lav-delivery__title'>Кур’єр Аптеки Доброго Дня</div>
                <div class='lav-delivery__caption'>Доставка до <strong>48 годин</strong></div>
              </div>
              <div class='lav-delivery__price'>
                Безкоштовно <br/>
                від 1000 грн
              </div>
            </div>
          `
            : ``
        }
        ${
          isRecipe
            ? `
        <div class='lav-delivery__item lav-del__note'>
          <img src="${exp.dir}/img/note.svg" />
          Рецептурний препарат. Можливий тільки самовивіз з аптеки.
        </div>
        `
            : ''
        }
        <div class='lav-delivery__item ${
          isRecipe ? 'disabled' : ''
        } lav-del__np'>
          <div class='lav-delivery__logo'>
            <img src="${exp.dir}/img/delivery-np.svg" />
          </div>
          <div class='lav-delivery__info'>
            <div class='lav-delivery__title'>Нова Пошта </div>
            <div class='lav-delivery__caption'>Доставка 2-3 дні</div>
          </div>
          <div class='lav-delivery__price'>${
            isRecipe ? 'Недоступно' : 'Від 70&nbsp;₴'
          }</div>
        </div>
        <div class='lav-delivery__item ${
          isRecipe ? 'disabled' : ''
        } lav-del__up'>
          <div class='lav-delivery__logo'>
            <img src="${exp.dir}/img/delivery-up.svg" />
          </div>
          <div class='lav-delivery__info'>
            <div class='lav-delivery__title'>Укрпошта відділення</div>
            <div class='lav-delivery__caption'>Доставка 2-3 дні</div>
          </div>
          <div class='lav-delivery__price'>${
            isRecipe ? 'Недоступно' : 'Від 55&nbsp;₴'
          }</div>
        </div>
      </div>
    `;

    if ($('.shipping-info-block')) {
      $('.shipping-info-block').insertAdjacentHTML('beforeend', delivery);

      $('.lav-city__value').addEventListener('click', function (e) {
        $('.lav-city__dropdown-wrap').classList.toggle('active');
        $('.lav-city__dropdown').classList.toggle('active');
      });

      document.addEventListener('click', function (e) {
        if (
          !e.target.closest('.lav-city__dropdown-wrap') &&
          $('.lav-city__dropdown-wrap.active')
        ) {
          $('.lav-city__dropdown-wrap.active').classList.remove('active');
          $('.lav-city__dropdown.active').classList.remove('active');
        }
      });

      $('.lav-exist').addEventListener(
        'click',
        function (e) {
          e.preventDefault();
          setTimeout(() => {
            document
              .querySelector('.inventory-info .inventory-info-link')
              .dispatchEvent(new Event('click'));
          });
        },
        100
      );

      setTimeout(() => {
        const length = $$('.shops .shop-item').length;
        const cities = $$('.autocomplete-menu-wrapper .ui-menu-item');

        $('.lav-city__dropdown').innerHTML = '';

        if (cities.length) {
          cities.forEach((city) => {
            const dropdownItem = document.createElement('div');
            dropdownItem.classList.add('lav-city__dropdown-item');
            dropdownItem.innerText = city.textContent.trim();

            dropdownItem.addEventListener('click', function () {
              $('.lav-city__dropdown-wrap.active').classList.remove('active');
              $('.lav-city__dropdown.active').classList.remove('active');
              toggleCity(this.innerText);
            });

            $('.lav-city__dropdown').insertAdjacentElement(
              'beforeend',
              dropdownItem
            );
          });
        }

        if (length) {
          $('.lav-delivery__caption span').innerText = length;
        } else {
          $('.lav-del__up').insertAdjacentHTML(
            'afterend',
            `
            <div class='lav-delivery__item lav-del__note'>
              <img src="${exp.dir}/img/note.svg" />
              Товар відсутній в аптеках обраного міста.
            </div>
          `
          );
          $('.lav-del__to-go .lav-delivery__caption').classList.add('lav-hide');
          $('.lav-exist').classList.add('lav-hide');
          $('.lav-del__to-go').classList.add('disabled');
          $('.lav-del__courier').classList.add('disabled');
          $('.lav-del__to-go .lav-delivery__price').innerText = 'Недоступно';
          $('.lav-del__courier .lav-delivery__price').innerText = 'Недоступно';
        }
      }, 1000);

      $$('.delivery-info-item-list .c-item-group').forEach((el) => {
        const title = el.querySelector('.c-item').innerText.trim();

        if (title === "Кур'єром" && !isRecipe) {
          $('.lav-del__courier').classList.add('active');
        }

        if (title === 'УкрПошта') {
          $('.lav-del__up').classList.add('active');
        }

        if (title === 'Нова Пошта') {
          $('.lav-del__np').classList.add('active');
        }
      });
    }

    calcHeight();
    setInterval(calcHeight, 500);
  }

  function getDiscount(customSrc) {
    if (!$('.advancedproductlabel')) return false;

    let discount = 0;

    let src = $('[src*="product/Labe_ADD_-"]')?.getAttribute('src');
    if (customSrc) src = customSrc;

    if (src) {
      const match = src.match(/-([0-9]+)__/);

      if (match && match[1]) {
        console.log('match', match[1]);
        discount = match[1];
      }
    }

    return discount;
  }

  function handleRelated(relatedEl) {
    const products = Array.from($$('.product-item', relatedEl)).map((el) => {
      const link = $('.product-item-photo', el).getAttribute('href');
      const img =
        $('.product-image-photo', el).getAttribute('src') || $('picture', el);
      const title = $('.product-item-link', el).innerText.trim();
      const priceEl = $('.special-price .price', el) || $('.price', el);
      const price = priceEl?.innerText.trim();
      const oldPrice = $('.old-price .price', el)?.innerText.trim();
      const buyEl = $('.tocart', el);
      const discount = getDiscount(
        $('.advancedproductlabel img', el)?.getAttribute('src')
      );

      return {
        title,
        price,
        oldPrice,
        link,
        img,
        buyEl,
        discount,
      };
    });

    let title = $('#block-related-heading', relatedEl).innerText.trim();
    let caption = null;

    if (title.toLowerCase().includes('аналог')) {
      title = 'Повний аналог';
      caption =
        '(повний збіг складу діючих речовин, їх дозування і форми випуску)';
    }

    const options = {
      title,
      caption,
      items: products,
    };

    console.log('optionsRelated', options);
    createSlider('lav-related', options);
  }

  function handleRecently() {
    if (!$('.viewed-products-slider')) return false;

    const products = Array.from(
      $$('.viewed-products-slider .product-item')
    ).map((el) => {
      const link = $('.product-item-photo', el).getAttribute('href');
      const img = $('.product-image-photo', el).getAttribute('src');
      const title = $('.product-item-link', el).innerText.trim();
      const priceEl = $('.special-price .price', el) || $('.price', el);
      console.log('priceEl', priceEl);
      const price = priceEl?.innerText.trim();
      const oldPrice = $('.old-price .price', el)?.innerText.trim();
      const discount = getDiscount(
        $('.advancedproductlabel img', el)?.getAttribute('src')
      );

      return {
        title,
        price,
        oldPrice,
        link,
        img,
        discount,
      };
    });

    const options = {
      title: 'Нещодавно переглянуті',
      items: products,
    };

    console.log('optionsRecently', options);
    createSlider('lav-recently', options);
  }

  function createSlider(extraClass, { title, caption, items }) {
    const sectionEl = document.createElement('div');
    sectionEl.classList.add(extraClass, 'lav-slider');

    sectionEl.innerHTML = `
      <div class='lav-slider__title'>${title}</div>
      ${caption ? `<div class='lav-slider__caption'>${caption}</div>` : ''}

      <div class="swiper">
        <div class="swiper-wrapper"></div>
      </div>
    `;

    items.forEach((el) => {
      const slide = document.createElement('div');
      slide.classList.add('swiper-slide', 'lav-slide');

      slide.innerHTML = `
        ${
          el.discount
            ? `<div class='lav-slide__disc'>-${el.discount}%</div>`
            : ''
        }
        <a href='${el.link}' class='lav-slide__image'>
          ${
            typeof el.img === 'string'
              ? `<img src='${el.img}' />`
              : el.img.cloneNode(true).outerHTML
          }
        </a>
        <a href='${el.link}' class='lav-slide__title'>${el.title}</a>
        <div class="lav-slide__price">
          <div class="lav-slide__price-curr">${el.price}</div>
          ${
            el.oldPrice
              ? `<div class="lav-slide__price-old">${el.oldPrice}</div>`
              : ''
          }
        </div>
        ${
          el.buyEl
            ? `
            <button class='lav-slide__buy button lav-buy'>
              <svg class="lav-buy__icon"><use xlink:href="https://www.add.ua/static/version1692257628/frontend/Brander/Add/uk_UA/images/s.svg#icon-cart"></use></svg>
              Купити
            </button>
          `
            : ''
        }
      `;

      // if ($('.lav-slide__buy', slide)) {
      $('.lav-slide__buy', slide)?.addEventListener('click', function (e) {
        el.buyEl.click();
      });
      // }

      if (!el.price) {
        slide.querySelector('.lav-slide__price').remove();
      }

      sectionEl
        .querySelector('.swiper-wrapper')
        .insertAdjacentElement('beforeend', slide);
    });

    // .swiper {
    //   width: 600px;
    //   height: 300px;
    // }

    if (!$('.lav-sliders')) {
      let el = $('.product-info-other') || $('.actions-and-price-wrap');

      if (window.innerWidth < 768) {
        el.insertAdjacentHTML('afterend', '<div class="lav-sliders"></div>');
      } else {
        $('.all-info-bottom-wrapper').insertAdjacentHTML(
          'beforebegin',
          '<div class="lav-sliders"></div>'
        );
      }
    }

    $('.lav-sliders').insertAdjacentElement('beforeend', sectionEl);
    console.log(`.${extraClass}`);

    const swiper = new Swiper(`.${extraClass} .swiper`, {
      slidesPerView: 2.1,
      spaceBetween: 8,
    });
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
})();

function initModals() {
  const modalEl = `
      <div class='lav-modal' style='display: none;'>
        <div class='lav-modal__inner lav-modal__test'>
        asdf
        </div>
      </div>
    `;

  document.body.insertAdjacentHTML('beforeend', modalEl);

  document.querySelector('.lav-modal').addEventListener('click', function (e) {
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

const modalStyles = `
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
`;
