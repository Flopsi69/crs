if (document.body) {
  initWrap();
} else {
  setTimeout(() => {
    initWrap();
  }, 800);
}

function initWrap() {
  (function (h, o, t, j, a, r) {
    h.hj =
      h.hj ||
      function () {
        (h.hj.q = h.hj.q || []).push(arguments);
      };
    h._hjSettings = { hjid: 2174050, hjsv: 6 };
    a = o.getElementsByTagName('head')[0];
    r = o.createElement('script');
    r.async = 1;
    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
    a.appendChild(r);
  })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
  window.hj =
    window.hj ||
    function () {
      (hj.q = hj.q || []).push(arguments);
    };
  hj('trigger', 'pdp__add_phone_number_des');

  function gaEvent(action, label) {
    try {
      var objData = {
        event: 'ga_event',
        eventCategory: 'Exp — PDP: improvements',
        eventAction: action
      };
      if (label) {
        objData.eventLabel = label;
      }
      console.log('EventFire:', objData);
      dataLayer.push(objData);
    } catch (e) {}
  }

  gaEvent('loaded');

  /* STYLES insert start */

  let fonts =
    '<link rel="preconnect" href="https://fonts.gstatic.com"><link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">';
  document.querySelector('head').insertAdjacentHTML('beforeend', fonts);

  let stylesList = `
  .lav-product:before, .lav-product:after, .lav-seller__wrap:before, .lav-seller__wrap:after {
    content: '';
    clear:both;
    display: table;
  }
  // .new-scss .e-search {
  //   background: rgb(72, 82, 128);
  //   border-radius: 2px;
  //   color: rgb(255, 255, 255);
  //   position: relative;
  // }
  // .new-scss .search__btn span {
  //   filter: invert(118%) sepia(18%) saturate(36%) hue-rotate(
  //     25deg
  //     ) brightness(132%) contrast(101%);
  // }
  // .new-scss .search__btn {
  //   position: absolute;
  //   left: 50%;
  //   transform: translateX(-50%);
  //   top: 4px;
  //   // pointer-events: none;
  // }
  // .new-scss .search__input:focus ~ .search__btn {
  //   position: static;
  //   transform: none;
  //   pointer-events: auto;
  // }
  .new-scss.scss-small-content .content > .container {
    padding: 0 12px!important;
    background: #FAFAFA;
  }
  .b-search-result-button-mobile {
    display: inline-flex;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #333333;
    background: #FFFFFF;
    border: 2px solid #FF7F00;
    border-radius: 4px;
    padding: 12px 22px;
    width: auto!important;
    height: auto!important;
    margin-left: 0;
  }
  .b-search-result-button-mobile img {
    margin-right: 12px;
    width: 11px;
    height: auto;
    transform: rotate(180deg);
  }
  .b-advert-left-column, .b-advert-right-column {
    width: 100%;
    margin: 0;
    background: none;
    padding: 0;
  }
  .b-advert-gallery-block {
    margin-top: 25px;
  }
  .b-advert-header.m-h1 {
    display: none;
  }
  .b-advert-show-wrapper .b-on-stock {
    display: none;
  }
  .b-advert-block {
    background: none;
    padding: 0!important;
    margin-bottom: 0;
  }
  .b-advert-block + .b-advert-block {
    margin-top: 20px;
  }
  .b-advert-left-column.b-advert-gallery-block {
    padding: 0!important;
  }
  .col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12, .col-xs-13, .col-sm-13, .col-md-13, .col-lg-13, .col-xs-14, .col-sm-14, .col-md-14, .col-lg-14, .col-xs-15, .col-sm-15, .col-md-15, .col-lg-15, .col-xs-16, .col-sm-16, .col-md-16, .col-lg-16, .col-xs-17, .col-sm-17, .col-md-17, .col-lg-17, .col-xs-18, .col-sm-18, .col-md-18, .col-lg-18, .col-xs-19, .col-sm-19, .col-md-19, .col-lg-19, .col-xs-20, .col-sm-20, .col-md-20, .col-lg-20 {
    padding: 0;
  }
  .b-advert-block.m-advert-block-right-border.m-advert-block {
    padding-top: 0!important;
  }
  .m-advert-block .b-mini-card .sjs-send-message-open {
    position: static;
  }
  .lav-product__btn-tradein {
    margin-left: 10px!important;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #333333;
    border: 3px solid #DADADA;
    box-sizing: border-box;
    border-radius: 4px!important;
    padding: 10px 20px;
    height: auto;
    white-space: nowrap;
    flex-sring: 0;
    transition: 0.35s;
  }
  .lav-product__btn-tradein:hover {
    border-color: #485280;
    color: #485280;
  }
  .lav-product {
    float: left;
    margin-top: 20px;
    width: 100%;
  }
  .lav-product__title {
    font-family: 'Raleway', sans-serif;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.015em;
    color: #353C5F;
  }
  .lav-product__line span {
    font-weight: 500;
  }
  .lav-product__meta {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    line-height: 16px;
    margin-top: 15px;
  }
  .lav-product__meta-right {
    display: flex;
    align-items: center;
    margin-top: -4px;
  }
  .lav-product__meta-right span {
    cursor: pointer;
  }
  .lav-product__line + .lav-product__line {
    margin-top: 7px;
  }
  .sjs-add-to-favourites.m-round {
    position: static;
    margin-left: 5px;
    background-size: contain!important;
    height: 24px;
    max-width: 24px;
  }
  .scss-favourite-icon {
    width: 24px;
    height: 24px;
    background-size: contain;
  }
  .lav-product__price {
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    letter-spacing: 0.015em;
    color: #353C5F;
    margin-top: 10px;
  }
  .lav-product__buttons {
    margin-top: 15px;
    display: flex;
  }
  .b-advert-show-wrapper .sjs-send-message-open {
    height: auto;
    border-radius: 4px!important;
    background: #485280;
    font-family: Roboto;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    text-transform: none;
  }
  .b-advert-header.m-h2 {
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    color: #333333;
    margin-bottom: 16px;
  }
  .b-main-advert-information {
    padding: 20px;
    background: #FFFFFF;
    border-radius: 2px;
    margin-bottom: 0;
  }
  .b-advert-table .e-advert-row {
    display: flex;
  }
  .b-advert-table {
    margin-top: 0;
  }
  .b-advert-table .e-advert-title, .b-advert-table .e-advert-value {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    line-height: 16px;
    color: #333333;
    padding: 10px 3px;
    min-height: 40px;
    font-weight: 400;
  }
  .b-advert-table .e-advert-row {
    min-height: auto;
  }
  .b-advert-table .e-advert-row .c {
    min-height: auto;
    height: auto;
  }
  .b-advert-show-description, .b-advert-options {
    background: #FFFFFF;
    border-radius: 2px;
    padding: 20px;
  }
  .e-description-text {
    margin-top: 0!important;
    font-family: 'Raleway', sans-serif;
    font-size: 14px;
    line-height: 1.6;
    color: #333333;
  }
  .b-advert-header {
    width: 100%;
    display: block;
  }
  .b-options-table {
    margin-bottom: 20px;
  }
  .b-options-table .e-row {
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    line-height: 16px;
    color: #333333;
    padding: 10px 3px;
    min-height: 40px;
    font-weight: 400;
    height: auto;
  }
  .b-options-table .e-col {
    height: auto;
    padding: 8px!important;
  }
  .b-options-table .e-col:first-child {
    width: 65%;
  }
  .b-options-table .e-row .e-col.m-value {
    width: 35%;
  }
  .b-detailed-user-rating:after {
    content: '';
    clear: both;
    display: table;
  }
  .b-advert-block.b-comment-container {
    padding: 12px!important;
    background: #fff;
  }
  .b-popular-second-level-searches.m-white-bg {
    float: left;
    background: none;
    padding-bottom: 35px;
    padding-top: 15px;
  }

  .b-popular-second-level-searches.m-white-bg .b-advert-header.m-h2 {
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #485280;
  }
  .b-popular-second-level-searches.m-white-bg .col-xs-20 {
    width: 50%;
  }
  .b-popular-second-level-searches.m-white-bg .col-xs-20 + .col-xs-20 {
    margin-bottom: 12px;
  }
  .b-advert-share, .b-place-ad-block, .sjs-last-viewed-adverts {
    display: none;
  }
  .b-popular-second-level-searches .e-link {
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.015em;
    text-decoration-line: underline;
    text-transform: uppercase;
    color: #A5A5A5;
    padding: 0 5px;
    display: inline-block;
    line-height: 1.5;
  }
  .b-popular-second-level-searches .e-link:hover {
    color: #333333;
  }
  .b-adverts-switcher-mobile {
    display: none;
  }
  .new-scss .b-header .e-header-container {
    padding: 15px;
  }
  .b-menu-hamburger .e-line-hamb {
    margin-bottom: 0;
    height: 4px;
  }
  .b-menu-hamburger .e-line-hamb + .e-line-hamb {
    margin-top: 6px;
  }
  .new-scss .e-mobile-search .m-place-ad-button-search {
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
    line-height: 1;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #FFFFFF;
    padding: 10px;
    height: auto;
    padding: 9px 12px 7px;
  }
  .head-level .search {
    margin-top: 0;
  }
  .new-scss .search {
    height: auto!important;
  }
  .sjs-mobile-menu-icon {
    height: auto;
    top: -29px;
  }
  .new-scss .b-header .container {
    line-height: 0;
  }
  // .new-scss .search__input {
  //   padding-left: 10px;
  //   padding-right: 10px;
  //   height: 33px;
  //   vertical-align: middle;
  // }
  .new-scss .search__btn {
    margin-top: 0;
    width: auto;
  }
  .b-breadcrumbs-list .e-breadcrumbs-item .e-breadcrumbs-item-link{
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    line-height: 16px;
    color: #333333;
  }
  .b-breadcrumbs-list .e-breadcrumbs-item {
    height: auto;
  }
  .b-breadcrumbs {
    margin-top: 15px;
    margin-bottom: 17px;
  }
  .b-breadcrumbs .b-breadcrumbs-list {
    display: flex!important;
    align-items: center;
    white-space: nowrap;
  }
  .b-breadcrumbs .b-breadcrumbs-list .e-breadcrumbs-item .e-breadcrumbs-item-link {
    padding-left: 8px;
    padding-right: 8px;
  }
  .b-breadcrumbs .b-breadcrumbs-list .e-breadcrumbs-item:nth-child(2n) {
    margin-top: -2px;
  }
  .lav-nav {
    margin: 0 -12px;
    background: #EDF4FC;
    margin-top: 20px;
    display: flex;
    overflow: auto;
    padding: 0 7px;
    border-bottom:  #A6C6EE;
  }
  .lav-nav__item {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-transform: uppercase;
    color: #485280;
    padding: 10px 10px 7px;
    border-bottom: 4px solid transparent;
  }
  .lav-nav__item_active  {
    font-weight: 500;
    border-color: #485280;
  }
  .b-advert-status {
    display: none;
  }
  .lSSlideWrapper {
    background-color: #fff;
    border: 1px solid #DADADA;
  }
  .b-advert-gallery {
    margin-top: 0;
  }
  .lSSlideOuter .lSPager.lSGallery li {
    border: 1px solid #DADADA;
  }
  .b-advert-gallery .lSSlideOuter .lSPager.lSGallery a {
    width: auto;
    background-size: cover;
  }
  .lav-seller__wrap:before, .lav-seller__wrap:after {
    content: '';
    display: table;
    clear: both;
  }
  .lav-seller__wrap {
    padding-top: 20px;
    display: flex;
    margin-bottom: 10px;
    margin-left: -10px;
    margin-right: -10px;
  }
  .lav-seller__wrap > div {
    flex: 1;
    padding: 12px 10px;
  }
  .lav-seller__right {
    background-color: #fff;
  }
  .lav-seller__title {
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }
  .b-user-logo-image {
    margin-top: 18px;
    height: 170px;
    background-color: #fff;
    border: 1px solid #DADADA;
    background-size: 90%;
    margin-bottom: 12px;
  }
  .lav-seller__company {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #485280;
  }
  .lav-seller__map {
    display: flex;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
    color: #333333;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .lav-seller__map span {
    text-decoration-line: underline;
  }
  .lav-seller__map img {
    height: 12px;
    width: auto;
    margin-right: 6px;
  }
  .lav-seller__meta {
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    color: #333333;
    margin-top: 22px;
  }
  .lav-seller {
    display: flex;
    flex-flow: column;
    height: 100%;
  }
  .lav-seller__meta-key {
    margin-right: 10px;
  }
  .lav-seller__meta-line {
    display: flex;
    justify-content: space-between;
  }
  .lav-seller__meta-line + .lav-seller__meta-line {
    margin-top: 17px;
  }
  .lav-seller__meta-value {
    font-weight: 400;
    text-align: right;
  }
  .lav-seller__meta-ships {
    display: flex;
    flex-flow: row-reverse;
    align-items: center;
  }
  .lav-seller__meta-ships img {
    margin-left: 7px;
  }
  .lav-seller__btn {
    background: #DADADA;
    border-radius: 4px;
    padding: 15px;
    width: 100%;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    line-height: 16px;
    color: #4D4D4D;
    margin-top: auto;
  }
  .lav-seller__right {
    display: flex;
    flex-flow: column;
  }
  .lav-similar__inner {
    margin-bottom: 20px;
  }
  .lav-seller__more {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #485280;
    color: #fff;
    font-weight: 500;
    margin-top: auto;
  }
  .lav-seller__more:hover {
    color: #fff;
  }
  .lav-seller__more img {
    height: 18px;
    width: auto;
    margin-left: 8px;
    filter: invert(1);
  }
  .b-advert-right-column {
    display: none;
  }
  .b-total-responses {
    display: block;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
    color: #333333;
    text-decoration: none;
    margin-top: 12px;
    height: auto;
  }
  .b-user-rating-stars {
    margin: 0;
    margin-top: 12px;
  }
  .b-total-responses span {
    font-weight: 500;
    text-decoration: underline;
  }
  .lav-seller__logo {
    position: relative;
  }
  .lav-seller__logo .b-user-logo-image {
    position: relative;
    background-size: contain;
  }
  .lav-seller__logo .b-user-logo-image > img {
    position: absolute;
    right: -2px;
    top: -2px;
    width: 80px;
    height: auto;
  }
  .lav-how {
    background: #FFFFFF;
    border: 1px solid #DADADA;
    box-sizing: border-box;
    border-radius: 2px;
    padding: 18px 10px 20px;
    margin-bottom: 20px;
  }
  .lav-how__title {
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
  }
  .lav-how__steps {
    margin: 0 -10px 10px;
    display: flex;
    flex-wrap: wrap;
  }
  .lav-how__step {
    display: flex;
    margin-top: 10px;
    width: 50%;
    align-items: center;
    padding: 0 10px;
    font-family: 'Roboto', sans-serif;
  }
  .lav-how__step-caption {
    font-size: 12px;
    line-height: 14px;
    color: #333333;
    margin-left: 5px;
  }
  .lav-how__step-num {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    font-weight: 500;
    font-size: 18px;
    line-height: 1;
    color: #FFFFFF;
    background: #485280;
    border-radius: 50px;
    width: 30px;
    height: 30px;
  }
  .lav-how__caption {
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.4;
    color: #333333;
  }
  .lav-how__options {
    margin-top: 18px;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
  }
  .lav-how__option {
    position: relative;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 2px;
  }
  .lav-how__option + .lav-how__option {
    margin-top: 9px;
  }
  .lav-how__option-value {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    line-height: 16px;
    color: #485280;
    border-bottom: 1px dashed #485280;
    display: inline-block;
  }
  .lav-how__option-to {
    margin-left: 10px;
    background: #FFFFFF;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    line-height: 16px;
    color: #333333;
    letter-spacing: 0.5px;
  }
  .lav-how__option-to span {
    text-decoration: underline;
    font-weight: 600;
  }
  .lav-how__tip {
    font-family: 'Roboto', sans-serif;
    background: #fff;
    position: absolute;
    border: 1px solid #DADADA;
    box-shadow: 0px 12px 36px rgb(0 0 0 / 10%);
    border-radius: 2px;
    padding: 15px;
    z-index: 1;
    top: 99%;
    left: 0;
    display: none;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
  }
  .lav-how__tip.active {
    display: block;
    z-index: 9999;
  }
  .lav-how__close {
    position: absolute;
    left: 50%;
    top: -70px;
    transform: translateX(-50%);
    width: 48px;
    height: 48px;
    background: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .lav-how__close img {
    width: 14px;
    height: 14px;
  }
  .to-top-btn {
    display: none!important;
  }
  .lav-overlay {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: #333333;
    opacity: 0.6;
    z-index: 999;
  }
  .b-advert-show-wrapper .b-button.lav-how__tip-btn {
    background: #485280;
    border-radius: 4px!important;
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    width: 100%;
    transition: 0.35s;
    margin-top: 40px;
    padding: 12px;
    height: auto;
  }
  .lav-how__tip-title {
    margin-bottom: 15px;
    font-size: 18px;
    line-height: 21px;
    color: #333333;
  }
  .lav-how__tip-title span {
    font-weight: 500;
  }
  .lav-how__tip-descr {
    font-size: 14px;
    line-height: 16px;
    color: #333333;
    max-width: 320px;
  }
  .lav-how__tip-columns {
    display: block;
    margin: 0 -10px;
  }
  .lav-how__tip-column {
    width: 100%;
    padding: 10px 10px 0;
  }
  .lav-how__tip-block + .lav-how__tip-block {
    margin-top: 15px;
  }
  .lav-how__tip-subtitle {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    line-height: 16px;
    text-decoration-line: underline;
    color: #485280;
    margin-bottom: 5px;
  }
  .lav-how__tip-subtitle:hover {
    text-decoration: none;
  }
  .lav-how__tip-subcaption {
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
    color: #4D4D4D;
  }
  .lav-similar__top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  .lav-similar__top > a {
    width: 48.5%;
  }
  .lav-similar__image {
    border: 1px solid #DADADA;
  }
  .lav-similar__title {
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    font-size: 12px;
    line-height: 1.4;
    color: #353C5F;
  }
  .lav-similar__inner {
    margin-top: 18px;
  }
  .lav-similar__item + .lav-similar__item {
    border-top: 1px solid #DADADA;
    margin-top: 13px;
    padding-top: 13px;
  }
  .lav-similar__meta {
    margin: 10px 0;
  }
  .lav-similar__price {
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    text-align: right;
    letter-spacing: 0.015em;
    color: #353C5F;
  }
  .lav-similar {
    display: flex;
    flex-flow: column;
    height: 100%;
  }
  .sjs-similar-adverts-header {
    display: none;
  }
  .b-other-advert-list {
    display: flex;
    overflow-x: auto;
  }
  .b-other-advert-list .e-product-item {
    float: none;
    width: 150px;
    flex-shrink: 0;
    background-color: #fff;
    padding: 8.5px 8.5px 11px;
    margin-right: 10px;
  }
  .b-other-adverts-from-seller {
    padding: 0;
  }
  .b-other-advert-list .e-product-item > * {
    float: none;
  }
  .b-other-advert-list .e-image-wrapper {
    height: 130px;
    width: 100%;
    padding: 2px;
    border: 1px solid #DADADA;
    margin-bottom: 10px;
  }
  .b-advert-header.m-h2 {
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }
  .e-product-content-title {
    width: 100%;
  }
  .b-other-advert-list .e-product-content-title .e-title .b-third-level-title {
    width: 100%;
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 1.4;
    color: #353C5F;
  }
  .e-product-price {
    display: none;
  }
  .sjs-other-adverts-header {
    margin-top: 35px!important;
  }
  .b-other-adverts-from-seller >.sjs-quick-open-link {
    display: none;
  }
  .sjs-other-adverts-header .b-advert-header.m-h2  {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .sjs-other-adverts-header .b-advert-header.m-h2 a {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    line-height: 16px;
    color: #485280;
    padding: 8px 12px 8px 20px;
    border: 2px solid #485280;
    box-sizing: border-box;
    border-radius: 2px;
    margin-left: 15px;
    white-space: nowrap;
  }
  .lav-modal .lav-seller__map {
    display: none;
  }
  .lav-modal .lav-seller__title {
    display: none;
  }
  .lav-modal {
    width: 1180px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .lav-modal__body {
    background: #ffffff;
    opacity: 1;
    border-radius: 4px;
    width: 100%;
    height: 100%;
    top: 0;
    box-shadow: 0 0 10px rgb(0 0 0 / 50%);
    padding: 30px;
    max-height: 100vh;
    overflow: auto;
    padding: 0 0 25px;
  }
  .lav-modal .lav-seller__btn {
    display: none;
  }
  .lav-modal {
    width: 100%;
    height: 100vh;
  }
  .lav-modal .lav-seller__logo .b-user-logo-image {
    margin: 0;
    border: none;
    height: 75px;
    margin-bottom: 15px;
    background-position: left;
  }
  .lav-bottom__contact {
    background: #485280;
    border-radius: 4px!important;
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    width: 100%;
    transition: 0.35s;
    padding: 18px;
    height: auto;
  }
  .lav-modal__contact-wrap {
    padding: 25px 12px;
    background: rgb(237, 244, 252, 0.5);
    border-top: 1px solid #EDF4FC;
  }
  .lav-modal__info {
    padding: 20px 12px 22px;
  }
  .lav-modal .lav-seller__meta-line {
    justify-content: flex-start;
  }
  .lav-modal__map {
    padding: 0 12px;
  }
  .lav-modal__head {
    padding: 20px 12px;
    text-align: right;
  }
  .lav-modal__head img {
    width: 20px;
    height: 20px;
  }
  .new-scss.scss-small-content .content > .container {
    opacity: 0;
  }
  `;

  var isInitExp = false;

  const REPO_DIR = 'https://flopsi69.github.io/crs/bimedis/pdp';

  let observer = new MutationObserver(mutations => {
    for (let mutation of mutations) {
      // проверим новые узлы, есть ли что-то, что надо подсветить?

      for (let node of mutation.addedNodes) {
        // отслеживаем только узлы-элементы, другие (текстовые) пропускаем
        if (!(node instanceof HTMLElement)) continue;
        if (
          !isInitExp &&
          (node.classList.contains('lSSlideOuter') ||
            node.classList.contains('comment-model'))
        ) {
          initExp();
        }
        // проверить, не является ли вставленный элемент примером кода
      }
    }
  });

  setTimeout(() => {
    if (!isInitExp) {
      initExp();
    }
  }, 1500);

  setTimeout(() => {
    if (!isInitExp) {
      initExp();
    }
  }, 3000);

  let demoElem = document.body;

  observer.observe(demoElem, { childList: true, subtree: true });

  // connect to DOM
  let styles = document.createElement('style');
  styles.id = 'go-phone-styles';
  styles.innerHTML = stylesList;
  document.body.appendChild(styles);
  /* STYLES insert end */

  // initExp();
  function initExp() {
    isInitExp = true;
    console.log('init exp');

    // document
    //   .querySelector('body')
    //   .insertAdjacentHTML('beforeend', '<div class="b-blackout"></div>');
    document.querySelector('.b-search-result-button-mobile').innerHTML =
      "<img src='" +
      REPO_DIR +
      "/chevron-right.svg' /> View other adverts of this model";

    document
      .querySelector('.b-search-result-button-mobile')
      .addEventListener('click', function () {
        gaEvent('click on button View other', 'Back to listing');
      });

    setProductInfo();
    serRelatedBlock();
    setSeller();
    setHowToBuy();
    fetchSimilar(
      document.querySelector('.b-breadcrumbs-list .e-breadcrumbs-item.active a')
        .href
    );
    initSellerSimilar();
    initMapModal();
    initNav();

    fetch('https://extreme-ip-lookup.com/json/')
      .then(function (res) {
        return res.json();
      })
      .then(response => {
        document.querySelectorAll('.lav-country').forEach(function (el) {
          el.innerText = response.country;
        });
      })
      .catch((data, status) => {
        console.log('Request failed');
      });

    // document
    //   .querySelector('.new-scss .e-search')
    //   .addEventListener('click', function (e) {
    //     e.preventDefault();
    //     e.stopImmediatePropagation();
    //     e.stopPropagation();
    //     document.querySelector('.new-scss .search__input').focus();
    //   });

    document
      .querySelectorAll('.sjs-contacts-callback-abtest')
      .forEach(function (button, index) {
        button.addEventListener('click', function () {
          if (index == 0) {
            gaEvent('click on button Trade in', 'Content');
          } else if (index == 1) {
            gaEvent('click on button Contact us', 'Popup: Delivery options');
          } else if (index == 2) {
            gaEvent('click on button Contact us', 'Popup: Customs clearance');
          } else if (index > 2) {
            gaEvent(
              'click on button ' + button.innerText,
              'Popup: Additional services'
            );
          }

          document.querySelector('#sjs-contacts-callback-advert_id').value =
            advertId;
          if (button.dataset.label) {
            document.querySelector('#sjs-contacts-callback-button_id').value =
              button.dataset.label;
          } else {
            document.querySelector('#sjs-contacts-callback-button_id').value =
              button.innerText;
          }
          document.querySelector('.b-blackout').style.display = 'block';
        });

        if (document.querySelector('.lav-how__tip.active')) {
          document
            .querySelector('.lav-how__tip.active')
            .classList.remove('active');
        }
      });

    document
      .querySelector('.b-blackout')
      .addEventListener('click', function (e) {
        e.preventDefault();
        document
          .querySelector('.scss-contacts-callback-popup')
          .classList.add('hidden');
        document.querySelector('.lav-modal').classList.add('hidden');
        document.querySelector('.b-blackout').style.display = 'none';
      });

    window.dispatchEvent(new Event('resize'));

    if (
      document.querySelector(
        '.new-scss.scss-small-content .content > .container'
      )
    ) {
      document.querySelector(
        '.new-scss.scss-small-content .content > .container'
      ).style.opacity = 1;
    }
    clearInterval(intervalInitExp);
    setTimeout(() => {
      if (document.querySelector('.wrap .content .content')) {
        document.querySelector('.wrap .content .content').style.opacity = 1;
      }
    }, 100);
  }

  function setProductInfo() {
    let title = document.querySelector('.b-advert-header.m-h1').innerText;
    let priceEl = document.querySelector('.sjs-advert-price');
    let contactSellerBtnEl = document.querySelector('.sjs-send-message-open');

    let lavProductInfoEl = `
      <div class='lav-product'>
        <div class='lav-product__title'>${title}</div>
        <div class='lav-product__meta'>
          <div class='lav-product__meta-left'>
            <div class='lav-product__line lav-product__line-condition'>Condition: <span></span></div>
            <div class='lav-product__line lav-product__line-year'>Year: <span></span></div>
          </div>
          <div class='lav-product__meta-right'><span>Add to Favorites</span></div>
        </div>
        <div class='lav-product__price'></div>
        <div class='lav-product__buttons'>
          <button class='lav-product__btn-tradein sjs-contacts-callback-abtest'>Trade in</button>
        </div>
      </div>
    `;

    document
      .querySelector('.b-advert-gallery-block')
      .insertAdjacentHTML('afterend', lavProductInfoEl);

    if (priceEl) {
      let priceParentEl = priceEl.closest('.b-advert-block');
      document.querySelector('.lav-product__price').innerText =
        priceEl.innerText;
      priceParentEl.remove();
    } else {
      document.querySelector('.lav-product__price').remove();
    }

    if (contactSellerBtnEl) {
      document
        .querySelector('.lav-product__buttons')
        .insertAdjacentElement('afterbegin', contactSellerBtnEl);
    }

    if (document.querySelector('.sjs-add-to-favourites')) {
      document
        .querySelector('.lav-product__meta-right')
        .insertAdjacentElement(
          'beforeend',
          document.querySelector('.sjs-add-to-favourites')
        );
    }

    document
      .querySelector('.lav-product__meta-right')
      .addEventListener('click', function () {
        gaEvent('click on button Add to Favourites', 'Content');
      });

    if (document.querySelector('.sjs-send-message-open')) {
      document.querySelector('.sjs-send-message-open').innerText =
        'Contact seller';
    }

    document
      .querySelector('.lav-product__meta-right span')
      .addEventListener('click', function () {
        document.querySelector('.sjs-add-to-favourites.m-round').click();
      });

    let yearPDP = '';
    let conditionPDP = '';
    document
      .querySelectorAll('.b-advert-table .e-advert-row td')
      .forEach(function (el) {
        if (el.innerText.trim().toLowerCase() == 'condition') {
          conditionPDP = el.nextElementSibling.innerText;
        }
        if (el.innerText.trim().toLowerCase() == 'year') {
          yearPDP = el.nextElementSibling.innerText;
        }
      });

    if (conditionPDP) {
      document
        .querySelector('.lav-product__line-condition span')
        .insertAdjacentHTML('afterbegin', conditionPDP);
    } else {
      document.querySelector('.lav-product__line-condition').remove();
    }

    if (yearPDP) {
      document
        .querySelector('.lav-product__line-year span')
        .insertAdjacentHTML('afterbegin', yearPDP);
    } else {
      document.querySelector('.lav-product__line-year').remove();
    }
  }

  function serRelatedBlock() {
    if (document.querySelector('.b-advert-block.b-comment-container')) {
      document
        .querySelector('.b-advert-block.b-comment-container')
        .insertAdjacentElement(
          'beforebegin',
          document.querySelector('.b-popular-second-level-searches')
        );
    }
  }

  function initNav() {
    let lavEl = `
      <div class='lav-nav'>
        <a href='.b-advert-gallery-block' class='lav-nav__item lav-nav__item_active'>Photos</a>
      </div>
    `;

    document
      .querySelector('.b-advert-gallery-block')
      .insertAdjacentHTML('beforebegin', lavEl);

    if (document.querySelector('.b-main-advert-information')) {
      document.querySelector('.b-main-advert-information').id = 'detailsBlock';

      document
        .querySelector('.lav-nav')
        .insertAdjacentHTML(
          'beforeend',
          "<a href='#detailsBlock' class='lav-nav__item'>Details</a>"
        );
    }

    if (document.querySelector('.b-advert-options')) {
      document.querySelector('.b-advert-options').id = 'specBlock';

      document
        .querySelector('.lav-nav')
        .insertAdjacentHTML(
          'beforeend',
          "<a href='#specBlock' class='lav-nav__item'>Specification</a>"
        );
    }

    document.querySelectorAll('.lav-nav__item').forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        if (document.querySelector(link.getAttribute('href'))) {
          gaEvent(
            'click on button ' + link.innerText,
            'Tabs with description of produc'
          );
          $('html, body').animate(
            {
              scrollTop: $(link.getAttribute('href')).offset().top
            },
            1000
          );
        }
      });
    });
  }

  function setSeller() {
    let companyNameEl = document.querySelector('.b-user-card-link');
    let compnyLogo = document.querySelector('.b-user-logo-image');
    let shipsFrom = document.querySelector(
      '.b-main-advert-information .b-flag-img'
    ).parentElement.innerHTML;
    let contactName;

    document.querySelectorAll('.b-mini-card').forEach(function (card) {
      if (card.innerText.toLowerCase().includes('contact name')) {
        contactName = card.querySelector('.e-text').innerText;
      } else {
        contactName = '-';
      }
    });

    let sellerEl = `
      <div class='lav-seller__wrap'>
        <div class='lav-seller__left'>
          <div class='lav-seller'>
            <div class='lav-seller__title'>Seller</div>
            <div class='lav-seller__logo'></div>
            <div class='lav-seller__rating'></div>
            <div class='lav-seller__meta'>
              <div class='lav-seller__meta-line'>
                <div class='lav-seller__meta-key'>Ships from:</div>
                <div class='lav-seller__meta-value lav-seller__meta-ships'></div>
              </div>
              <div class='lav-seller__meta-line'>
                <div class='lav-seller__meta-key'>Contacts name:</div>
                <div class='lav-seller__meta-value lav-seller__meta-contact'>${contactName}</div>
              </div>
            </div>

            <div class='lav-seller__map'>
              <img src="${REPO_DIR}/map-placeholder.svg"> <span>See on the map</span>
            </div>

            <button class='lav-seller__btn lav-seller__btn-report'>Report the ad</button>
          </div>
        </div>
        <div class='lav-seller__right'>
          <div class='lav-similar'>
            <div class='lav-seller__title'>Similar Products</div>
            <div class='lav-similar__inner'></div>
            <a href="${
              document.querySelector(
                '.b-breadcrumbs-list .e-breadcrumbs-item.active a'
              ).href
            }" class="lav-seller__btn lav-seller__more">Show more <img src='${REPO_DIR}/chevron-right.svg'></a>
          </div>
        </div>
      </div>
    `;

    document
      .querySelector('.lav-product')
      .insertAdjacentHTML('afterend', sellerEl);

    document
      .querySelector('.lav-seller__more')
      .addEventListener('click', function () {
        gaEvent('click on button Show more', 'Content');
      });

    if (companyNameEl) {
      document
        .querySelector('.lav-seller__logo')
        .insertAdjacentHTML(
          'afterend',
          `<a href="${companyNameEl.href}" class='lav-seller__company'>${companyNameEl.innerText}</a>`
        );
    }

    if (shipsFrom) {
      document
        .querySelector('.lav-seller__meta-ships')
        .insertAdjacentHTML('afterbegin', shipsFrom);
    }

    if (compnyLogo) {
      document
        .querySelector('.lav-seller__logo')
        .insertAdjacentElement('afterbegin', compnyLogo);
    }

    document
      .querySelector('.lav-seller__btn')
      .addEventListener('click', function () {
        document.querySelector('.sjs-complaint').click();
        gaEvent('click on button Report the add', 'Content');
      });

    if (document.querySelector('.b-user-rating-wrapper')) {
      document
        .querySelector('.lav-seller__rating')
        .insertAdjacentElement(
          'afterbegin',
          document.querySelector('.b-user-rating-wrapper').cloneNode(true)
        );
    }

    if (document.querySelector('.lav-seller .sjs-scroll-to')) {
      document
        .querySelector('.lav-seller .sjs-scroll-to')
        .addEventListener('click', function () {
          documentq
            .querySelector('.b-advert-right-column .sjs-scroll-to')
            .click();
        });

      document.querySelector('.lav-seller .sjs-scroll-to').innerHTML = document
        .querySelector('.lav-seller .sjs-scroll-to')
        .innerText.replace(
          /\(reviews: (\d+)\)/i,
          'based on <span>$1 reviews</span> on Bimedis'
        );
    }

    if (document.querySelector('.m-trust')) {
      document
        .querySelector('.lav-seller__logo .b-user-logo-image')
        .insertAdjacentHTML(
          'beforeend',
          '<img src="' + REPO_DIR + '/trust.png">'
        );
    }
  }

  function setHowToBuy() {
    let blockEl = `
      <div class='lav-how'>
        <div class='lav-how__title'>How to buy this product?</div>
        <div class='lav-how__steps'>
          <div class='lav-how__step'>
            <div class='lav-how__step-num'>1</div>
            <div class='lav-how__step-caption'>Contact seller</div>
          </div>
          <div class='lav-how__step'>
            <div class='lav-how__step-num'>2</div>
            <div class='lav-how__step-caption'>Agree on the price with the seller</div>
          </div>
          <div class='lav-how__step'>
            <div class='lav-how__step-num'>3</div>
            <div class='lav-how__step-caption'>Choose Delivery option</div>
          </div>
          <div class='lav-how__step'>
            <div class='lav-how__step-num'>4</div>
            <div class='lav-how__step-caption'>Manage Customs clearance</div>
          </div>
        </div>
        <div class='lav-how__caption'>Delegate accompanying services to Bimedis or manage everything on your own</div>
        <div class='lav-how__options'>
          <div class='lav-how__option'>
            <div class='lav-how__option-value'>Delivery options</div>
            <div class='lav-how__option-to'>to <span class='lav-country'></span></div>
            <div class='lav-how__tip'>
              <div class='lav-how__tip-title'>Delivery options to <span class='lav-country'></span></div>
              <div class='lav-how__tip-info'>
                <div class='lav-how__tip-descr'>Bimedis.com offers delivery services all over the world. For more details contact us.  </div>
                <button data-label='Delivery options' class='lav-how__tip-btn b-button m-button-blue sjs-contacts-callback-abtest'>Contact US</button>
              </div>
            </div>
          </div>
          <div class='lav-how__option'>
            <div class='lav-how__option-value'>Customs clearance</div>
            <div class='lav-how__tip'>
              <div class='lav-how__tip-title'>Customs clearance</div>
              <div class='lav-how__tip-info'>
                <div class='lav-how__tip-descr'>Bimedis.com offers customs clearance services all ov
                er the world. For more details contact us. </div>
                <button data-label='Customs clearance' class='lav-how__tip-btn b-button m-button-blue sjs-contacts-callback-abtest'>Contact US</button>
              </div>
            </div>
          </div>
          <div class='lav-how__option'>
            <div class='lav-how__option-value'>Additional services </div>
            <div class='lav-how__tip'>
              <div class='lav-how__tip-title'>Additional services</div>
              <div class='lav-how__tip-columns'>
                <div class='lav-how__tip-column'>
                  <div class='lav-how__tip-block'>
                    <div class='lav-how__tip-subtitle sjs-contacts-callback-abtest'>Removal and Installation</div>
                  </div>

                  <div class='lav-how__tip-block'>
                    <div class='lav-how__tip-subtitle sjs-contacts-callback-abtest'>Installation</div>
                  </div>

                  <div class='lav-how__tip-block'>
                    <div class='lav-how__tip-subtitle sjs-contacts-callback-abtest'>Repair</div>
                  </div>

                  <div class='lav-how__tip-block'>
                    <div class='lav-how__tip-subtitle sjs-contacts-callback-abtest'>RF Shielding /Shields MRI</div>
                  </div>

                  <div class='lav-how__tip-block'>
                    <div class='lav-how__tip-subtitle sjs-contacts-callback-abtest'>Leasing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    document
      .querySelector('.b-main-advert-information')
      .insertAdjacentHTML('beforebegin', blockEl);

    document.querySelectorAll('.lav-how__option').forEach(function (option) {
      option.addEventListener('click', function () {
        gaEvent(
          'click on link ' +
            option.querySelector('.lav-how__option-value').innerText,
          'Section: How to buy this product?'
        );
        if (!option.querySelector('.lav-how__tip.active')) {
          option.querySelector('.lav-how__tip').classList.add('active');
          option.insertAdjacentHTML(
            'afterbegin',
            "<div class='lav-overlay'></div>"
          );

          if (!option.querySelector('.lav-how__tip .lav-how__close')) {
            option
              .querySelector('.lav-how__tip')
              .insertAdjacentHTML(
                'afterbegin',
                '<div class="lav-how__close"><img src="' +
                  REPO_DIR +
                  '/close.svg"/></div>'
              );
          }
        }
      });
    });

    document.addEventListener('click', function (e) {
      if (
        e.target.classList.contains('lav-overlay') ||
        e.target.classList.contains('lav-how__close') ||
        e.target.parentElement.classList.contains('lav-how__close')
      ) {
        document.querySelector('.lav-overlay').remove();
        document
          .querySelector('.lav-how__tip.active')
          .classList.remove('active');
      }
    });
  }

  function fetchSimilar(url) {
    fetch(url)
      .then(function (res) {
        return res.text();
      })
      .then(function (data) {
        var parser = new DOMParser();
        var doc = parser.parseFromString(data, 'text/html');
        var items = doc.querySelectorAll('.sjs-advert-list .e-product-item');
        if (items.length) {
          if (items.length >= 3) {
            setSimilarProduct(items, 3);
          } else {
            document.querySelector('.lav-similar').remove();
          }
        } else {
          document.querySelector('.lav-similar').remove();
        }
      });
  }

  function setSimilarProduct(items, count) {
    items.forEach(function (el, i) {
      if (i < count) {
        let imageSrc, title, elLink;
        elLink = el.querySelector('.e-product-title a').href;

        if (el.querySelector('.b-third-level-title')) {
          title = el.querySelector('.b-third-level-title').innerText;
        }

        if (el.querySelector('.e-product-image img')) {
          imageSrc = el.querySelector('.e-product-image img').dataset.src;
        }

        let elBlock = document.createElement('div');
        elBlock.classList.add('lav-similar__item');
        elBlock.innerHTML = `
          <div class='lav-similar__top'>
            <a class='lav-similar__image' href='${elLink}' target='_blank'>
              <img src='${imageSrc}' />
            </a>
            <a href='${elLink}' target='_blank' class='lav-similar__title'>${title}</a>
          </div>

          <div class='lav-similar__info'>
            <div class='lav-similar__meta'></div>
          </div>
        `;

        if (el.querySelector('.e-product-cost')) {
          elBlock.insertAdjacentHTML(
            'beforeend',
            "<div class='lav-similar__price'>" +
              el.querySelector('.e-product-cost').innerText +
              '</div>'
          );
        }

        el.querySelectorAll(
          '.b-short-description-product-list .e-short-description-product-item'
        ).forEach(function (line) {
          if (line.innerText.toLowerCase().includes('shipping from')) {
            elBlock
              .querySelector('.lav-similar__meta')
              .insertAdjacentHTML(
                'beforeend',
                "<div class='lav-similar__meta-line lav-similar__meta-from'><div class='lav-similar__meta-country'>" +
                  line.querySelector('.scss-product-list-mobile').innerHTML +
                  '</div></div>'
              );
          }
        });

        document
          .querySelector('.lav-similar__inner')
          .insertAdjacentElement('beforeend', elBlock);

        elBlock.querySelectorAll('a').forEach(function (link) {
          link.addEventListener('click', function () {
            gaEvent('click on product card', 'Similar Products');
          });
        });
      }
    });
  }

  function initSellerSimilar() {
    if (document.querySelector('.sjs-other-adverts-header')) {
      document
        .querySelector('.b-popular-second-level-searches')
        .insertAdjacentElement(
          'beforebegin',
          document.querySelector('.sjs-other-adverts-header')
        );

      document
        .querySelector('.sjs-other-adverts-header .b-advert-header.m-h2')
        .insertAdjacentHTML('beforeend', '<a>See all &rarr;</a>');

      if (
        document.querySelector(
          '.b-other-adverts-from-seller > .sjs-quick-open-link '
        )
      ) {
        document.querySelector(
          '.sjs-other-adverts-header .b-advert-header.m-h2 a '
        ).href = document.querySelector(
          '.b-other-adverts-from-seller > .sjs-quick-open-link '
        ).dataset.href;
      } else {
        let int = setInterval(function () {
          if (
            document.querySelector(
              '.b-other-adverts-from-seller > .sjs-quick-open-link'
            )
          ) {
            clearInterval(int);
            document.querySelector(
              '.sjs-other-adverts-header .b-advert-header.m-h2 a '
            ).href = document.querySelector(
              '.b-other-adverts-from-seller > .sjs-quick-open-link '
            ).dataset.href;
          }
        }, 500);
      }
    }
  }

  function initMapModal() {
    let modalEl = `
      <div class="new-scss scss-popup lav-modal hidden">
        <div class="scss-main-page-popup">
            <div class="lav-modal__body">
              <div class="lav-modal__head">
                <img class='lav-modal__close' src="${REPO_DIR}/close.svg"/>
              </div>
              <div class="lav-modal__map"></div>
              <div class="lav-modal__info">
              </div>
              <div class="lav-modal__contact-wrap">
                <button class="b-button m-button-blue lav-bottom__contact">Contact seller</button>
              </div>
            </div>
        </div>
      </div>
    `;

    document.querySelector('body').insertAdjacentHTML('beforeend', modalEl);

    document
      .querySelector('.lav-modal__body .lav-bottom__contact')
      .addEventListener('click', function (e) {
        e.preventDefault();
        gaEvent('click on button Contact seller', 'Popup: See on the map');
        document.querySelector('.lav-modal').classList.add('hidden');
        document.querySelector('.sjs-send-message-open').click();
      });

    document
      .querySelector('.lav-modal__info')
      .insertAdjacentHTML(
        'afterbegin',
        document.querySelector('.lav-seller').innerHTML
      );

    document.querySelector('.lav-seller .lav-seller__map').style.opacity = 0;
    setTimeout(() => {
      if (mapsHtml && mapsHtml.length > 165) {
        document.querySelector(
          '.lav-seller .lav-seller__map'
        ).style.opacity = 1;
        document
          .querySelector('.lav-seller .lav-seller__map')
          .addEventListener('click', function (e) {
            e.preventDefault();
            gaEvent('click on button See on the map', 'Content');
            document.querySelector('.b-blackout').style.display = 'block';
            document.querySelector('.lav-modal').classList.remove('hidden');
            document.querySelector('.lav-modal__map').innerHTML = mapsHtml;
          });
      } else {
        document.querySelector('.lav-seller .lav-seller__map').remove();
      }
    }, 2000);

    document
      .querySelector('.b-blackout')
      .addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('.lav-modal').classList.add('hidden');
        document.querySelector('.b-blackout').style.display = 'none';
      });

    document
      .querySelector('.lav-modal__close')
      .addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('.lav-modal').classList.add('hidden');
        document.querySelector('.b-blackout').style.display = 'none';
      });

    return false;
  }
}
