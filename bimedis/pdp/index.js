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
  .b-advert-right-column {
    display: none;
  }
  .b-advert-block.b-comment-container {
    margin-bottom: 30px;
  }
  .lav-modal {
    width: 1180px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .lav-modal__body {
    display: flex;
    background: #ffffff;
    opacity: 1;
    border-radius: 4px;
    width: 100%;
    height: 100%;
    top: 0;
    box-shadow: 0 0 10px rgb(0 0 0 / 50%);
    padding: 30px;
    max-height: 90vh;
    overflow: auto;
  }
  .lav-modal__map {
    display: flex;
    flex-flow: column;
    width: 65%;
    flex-shrink: 0;
  }
  .lav-modal__info {
    display: flex;
    flex-flow: column;
    padding-left: 20px;
    width: 35%;
  }
  .b-adverts-switcher {
    margin-bottom: 15px;
  }
  .b-total-responses {
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
    align-items: center;
    color: #333333;
    padding-top: 5px;
    height: auto;
    padding-left: 10px;
    text-decoration: none;
  }
  .b-advert-gallery {
    margin-top: 0;
  }
  .sjs-other-adverts-header {
    margin-top: 50px;
    margin-bottom: 0;
  }
  .b-adverts-switcher img {
    margin-right: 13px;
    width: 12px;
    height: auto;
    transform: rotate(180deg);
  }
  .b-search-result-button {
    display: inline-flex;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    line-height: 21px;
    color: #333333;
    background: #FFFFFF;
    border: 2px solid #FF7F00;
    border-radius: 4px;
    padding: 14px 18px;
  }
  .new-scss.scss-small-content .content > .container {
    max-width: 1360px!important;
  }
  .b-popular-second-level-searches.m-white-bg {
    float: right;
    width: 100%;
    margin-bottom: 0;
    padding-top: 0;
    margin-top: 60px;
  }
  .b-popular-second-level-searches.m-white-bg .row {
    display: flex;
    flex-wrap: wrap;
  }
  .b-popular-second-level-searches .e-link {
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.015em;
    text-decoration-line: underline;
    text-transform: uppercase;
    color: #A5A5A5;
    padding-right: 5px;
  }
  .b-popular-second-level-searches .col-md-6 {
    float: none;
    width: 33%;
    margin-bottom: 15px;

  }
  .b-popular-second-level-searches .e-link:hover {
    color: #333333;
  }
  .b-advert-status {
    margin-right: 10px;
  }
  .b-advert-show-wrapper .b-on-stock, .b-advert-header.m-h1, .sjs-last-viewed-adverts, .sjs-similar-adverts-header {
    display: none;
  }
  .b-advert-left-column {
    width: 100%;
  }
  .lav-body__wrap {
    display: flex;
  }
  .lav-body {
    float: none!important;
    flex-grow: 1;
    margin-left: 22px;
  }
  .b-advert-left-column.b-advert-gallery-block {
    float: none!important;
  }
  .b-advert-header.m-h2 {
    font-family: 'Raleway', sans-serif;
    font-size: 24px;
    font-weight: 600;
  }
  .lav-body__info {
    width: 610px;
    flex-shrink: 0;
  }
  .lav-body__info .b-advert-block {
    padding: 20px!important;
    margin-bottom: 0;
  }
  .b-advert-table .e-advert-row {
    border: none;
  }
  .b-advert-table .e-advert-title, .b-advert-table .e-advert-value {
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    line-height: 16.5px;
    color: #333;
    font-weight: 400;
  }
  .b-advert-table .e-advert-value a {
    font-weight: 500;
    text-decoration-line: underline;
    color: #333;
  }
  .b-advert-table .e-advert-row .c {
    min-height: auto;
    height: auto;
  }
  .b-advert-table .e-advert-row {
    min-height: auto;
  }
  .b-advert-table .e-advert-row td {
    padding: 10px 0;
  }
  .b-advert-table .e-advert-row.m-last-row td {
    padding-bottom: 0;
  }
  .b-main-advert-information {
    margin-bottom: 0;
  }
  .b-advert-table {
    margin: 20px 0 0;
  }
  .lav-body__info .b-advert-block + .b-advert-block {
    margin-top: 20px;
  }
  .b-options-table .e-col:first-child {
    padding-left: 0!important;
  }
  .b-options-table .e-col {
    height: auto;
    padding: 10px 0!important;
  }
  .b-options-table .e-row {
    height: auto;
    line-height: 16.5px;
    font-size: 14px;
  }
  .b-options-table .e-row:nth-child(2n + 1) {
    background: inherit;
  }
  .b-advert-header.m-h2 {
    margin-bottom: 20px;
  }
  .e-description-text {
    font-family: 'Raleway', sans-serif;
    font-size: 14px;
    line-height: 22px;
  }
  .b-advert-show-description {
    padding: 10px;
  }
  .b-comment-container {
    margin-top: 30px;
    padding: 20px!important;
  }
  .lav-body__head {
    display: flex;
  }
  .lav-body__meta {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    margin-top: 22px;
    line-height: 1;
  }
  .lav-body__title {
    font-family: 'Raleway', sans-serif;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    letter-spacing: 0.015em;
    color: #353C5F;
  }
  .lav-body__line + .lav-body__line {
    margin-top: 10px;
  }
  .lav-body__meta-right {
    display: flex;
    align-items: center;
    font-size: 12px;
  }
  .lav-body__meta-right span {
    cursor: pointer;
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
  .lav-body__price {
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    letter-spacing: 0.015em;
    color: #353C5F;
    margin-top: 20px;
  }
  .lav-how {
    background: #FFFFFF;
    border: 1px solid #DADADA;
    box-sizing: border-box;
    border-radius: 2px;
    padding: 20px 30px;
    margin-top: 30px;
  }
  .lav-how__title {
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    color: #333333;
  }
  .lav-how__steps {
    margin: 22px -10px;
    display: flex;
  }
  .lav-how__step {
    display: flex;
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
    font-size: 16px;
    line-height: 1.4;
    color: #333333;
  }
  .lav-how__options {
    margin-top: 15px;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
  }
  .lav-how__option {
    position: relative;
    display: flex;
    align-items: center;
    padding-bottom: 6px;
  }
  .lav-how__option + .lav-how__option {
    margin-top: 9px;
  }
  .lav-how__option-value {
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    line-height: 21px;
    color: #485280;
    border-bottom: 1px dashed #485280;
    display: inline-block;
  }
  .lav-how__option-to {
    margin-left: 80px;
    background: #FFFFFF;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    line-height: 21px;
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
    padding: 12px 16px 16px;
    z-index: 1;
    top: 99%;
    left: 0;
    width: 550px;
    display: none;
  }
  .lav-how__option:hover .lav-how__tip {
    display: block;
  }
  .b-advert-show-wrapper .b-button.lav-how__tip-btn {
    background: #485280;
    border-radius: 4px!important;
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    max-width: 145px;
    width: 100%;
    transition: 0.35s;
  }
  .b-advert-show-wrapper .b-button.lav-how__tip-btn:hover {
    background-color: #323a5f;
  }
  .lav-how__tip-title {
    margin-bottom: 15px;
    font-size: 18px;
    line-height: 21px;
    color: #333333;
  }
  .lav-how__tip-descr {
    font-size: 14px;
    line-height: 16px;
    color: #333333;
    max-width: 320px;
    padding-right: 15px;
  }
  .lav-how__tip-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .lav-how__tip-columns {
    display: flex;
    margin: 0 -10px;
  }
  .lav-how__tip-column {
    width: 50%;
    padding: 0 10px;
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
    cursor: pointer;
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
  .lav-seller {
    position: relative;
    padding-right: 120px;
    padding-top: 20px;
    margin-top: 15px;
    border-top: 1px solid rgba(0, 0, 0, 0.05);
  }
  .lav-seller__logo {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    display: block;
    width: 100px;
    height: 50px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-color: #fff;
  }
  .lav-seller__head {
    display: flex;
    align-items: center;
  }
  .lav-seller__head-caption {
    display: flex;
    align-items: center;
    font-family: 'Raleway', sans-serif;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    color: rgba(53, 60, 95, 0.8);    
  }
  .lav-seller__head-caption img {
    height: 30px;
    width: auto;
    margin-left: 10px;
  }
  .lav-seller__head-label {
    margin-left: 9px;
  }
  .lav-seller__company {
    margin-top: 15px;
    display: inline-block;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }
  .lav-buttons__wrap {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-top: 80px;
  }
  .lav-buttons {
    display: flex;
    flex-grow: 1;
  }
  .b-advert-show-wrapper .b-button.lav-botton__contact {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #FFFFFF;
    padding: 19px;
    height: auto;
    max-width: 340px;
    width: 100%;
    border-radius: 4px!important;
  }
  .b-advert-show-wrapper .b-button.lav-botton__contact:hover {
    background-color: #323a5f
  }
  .b-advert-show-wrapper .b-button.lav-botton__tradein {
    margin-left: 20px!important;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #333333;
    border: 3px solid #DADADA;
    box-sizing: border-box;
    border-radius: 4px!important;
    padding: 19px;
    height: auto;
    max-width: 160px;
    width: 100%;
    transition: 0.35s;
  }
  .b-advert-show-wrapper .b-button.lav-botton__tradein:hover {
    border-color: #485280;
    color: #485280;
  }
  .lav-buttons__report {
    display: flex;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
    text-decoration-line: underline;
    color: #4D4D4D;
    cursor: pointer;
  }
  .lav-buttons__report:hover {
    text-decoration: none;
    color: #485280;
  }
  .lav-buttons__report img {
    margin-right: 5px;
    width: 12px;
    height: 12px;
  }
  .lav-seller__info-line {
    display: flex;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    line-height: 16px;
    color: #333333;
  }
  .lav-seller__info-line + .lav-seller__info-line {
    margin-top: 15px;
  }
  .lav-seller__info {
    display: flex;
  }
  .lav-seller__info-left {
    width: 300px;
    margin-right: 20px;
  }
  .lav-seller__info-right {
    display: flex;
    align-items: center;
    margin-bottom: auto;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
    text-decoration-line: underline;
    color: #333333;
    cursor: pointer;
  }
  .lav-seller__info-right:hover {
    text-decoration: none;
    color: #485280;
  }
  .lav-seller__info-right img {
    margin-right: 6px;
    height: 16px;
    width: 12px;
  }
  .lav-seller__info-key {
    font-weight: 300;
  }
  .lav-seller__info-value {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }
  .lav-seller__info-from{
    flex-flow: row-reverse;
  }
  .lav-seller__info-from img {
    margin-left: 10px;
  }
  .lav-related {
    margin-top: 20px;
    background: #fff;
    padding: 20px;
  }
  .lav-related:after {
    content: " ";
    display: table;
    clear: both;
  }
  .lav-related .b-advert-block {
    padding: 0!important;
  }
  .lav-similar__title {
  }
  .lav-similar {
    display: grid;
    gap: 15px;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .lav-similar__item {
    background: #FFFFFF;
    border: 1px solid #DADADA;
    border-radius: 2px;
    padding: 10px;
    display: flex;
    flex-flow: column;
  }
  .lav-similar__image {
    height: 190px;
    display: block;
    overflow: hidden;
    line-height: 0;
  }
  .lav-similar__image img {
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
  }
  .b-other-advert-list .e-image-wrapper {
    padding: 0;
    border-bottom: 1px solid #DADADA;
    margin-bottom: 8px;
    padding-bottom: 8px;
  }
  .lav-similar__info {
    border-top: 1px solid #DADADA;
    margin-top: 8px;
    padding-top: 8px;
  }
  .lav-similar__title {
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }
  .lav-similar__title:hover {
    color: #485280;
  }
  .lav-similar__brand {
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
    color: #333333;
    margin-top: 10px;
  }
  .lav-similar__meta {
    margin-top: 12px;
    font-family: 'Roboto', sans-serif;
    font-size: 10px;
    line-height: 12px;
    color: #333333;
    margin-bottom: 17px;
  }
  .lav-similar__meta-from {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .lav-similar__meta-country {
    display: flex;
    align-items: center;
    flex-flow: row-reverse;
    font-size: 11px;
  }
  .lav-similar__meta-country img {
    margin-left: 4px;
  }
  .lav-similar__meta-line + .lav-similar__meta-line {
    margin-top: 6px;
  }
  .lav-similar__price {
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.015em;
    color: #353C5F;
    margin-top: auto;
  }
  .lav-similar__button-wrap {
    margin-top: 30px;
    text-align: center;
  }
  .lav-similar__button-wrap a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background: #FFFFFF;
    border: 3px solid #485280;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 12px;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    line-height: 21px;
    color: #333333;
    width: 100%;
    transition: 0.35s;
  }
  .lav-similar__button-wrap a img {
    width: 12px;
    height: auto;
    margin-left: 13px;
    transition: 0.35s;
  }
  .lav-similar__button-wrap a:hover {
    color: #ffffff;
    background-color: #485280;
  }
  .lav-similar__button-wrap a:hover img {
    filter: invert(1);
  }
  .lav-similar__button-one {
    max-width: 310px;
  }
  .b-other-advert-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 15px;
  }
  .b-other-advert-list .e-product-item {
    background: #FFFFFF;
    border: 1px solid #DADADA;
    border-radius: 2px;
    padding: 10px;
    display: flex;
    flex-flow: column;
  }
  .b-other-advert-list .e-product-item, .b-other-advert-list .e-image-wrapper, .e-product-content-title, .b-other-advert-list .e-product-content, .b-other-advert-list .e-product-price, .b-other-advert-list {
    float: none;
    width: 100%;
  }
  .b-other-advert-list .e-product-content-title .e-title .b-third-level-title {
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }
  .b-other-advert-list .e-product-content-title .e-title .b-third-level-title:hover {
    color: #485280;
  }

  .b-other-advert-list .e-product-item .e-button {
    display: none;
  }
  .b-product-information-list .e-line .e-caption {
    width: auto;
  }
  .b-product-information-list .e-line {
    display: flex;
    margin-bottom: 0;
  }
  .b-product-information-list .e-line + .e-line {
    margin-top: 6px;
  }
  .b-product-information-list {
    margin: 12px 0 17px;
    font-family: 'Roboto', sans-serif;
    font-size: 10px;
    line-height: 12px;
    color: #333333;
  }
  .b-other-advert-list .e-product-item {
    display: none;
  }
  .b-other-advert-list .e-product-item:nth-child(1), .b-other-advert-list .e-product-item:nth-child(2), .b-other-advert-list .e-product-item:nth-child(3) {
    display: flex;
    flex-flow: column;
  }
  .b-other-advert-list .e-image {
    display: block;
    overflow: hidden;
    line-height: 0;
  }
  .b-other-advert-list .e-image-wrapper {
    height: 170px;
  }
  .b-product-information-list .e-line .e-value {
    margin-left: 5px;
  }
  .b-other-advert-list + .b-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background: #FFFFFF;
    border: 3px solid #485280;
    box-sizing: border-box;
    border-radius: 4px!important;
    padding: 12px;
    font-size: 0;
    height: auto;
    width: 140px;
    margin: 30px auto 0;
    display: block;
    line-height: 0;
  }
  .b-other-advert-list + .b-button:before {
    content: 'See all';
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    line-height: 21px;
    font-weight: 400;
    color: #333333;
    transition: 0.35s;
  }
  .b-other-advert-list + .b-button:hover:before {
    color: #fff;
  }
  
  .b-other-adverts-from-seller {
    padding: 0;
    border-bottom: none;
  }

  .lav-modal__body .lav-seller {
    padding-right: 0;
    padding-top: 0;
    margin-top: 0;
    border-top: none;
    margin-bottom: 25px;
  }

  .lav-modal__body .lav-seller__logo {
    position: static;
    transform: none;
    margin-bottom: 40px;
    width: 200px;
    height: 80px;
  }

  .lav-modal__body .lav-seller__company {
    margin-top: 0;
    font-size: 18px;
    line-height: 21px;
    text-decoration: underline;
    color: #485280;
  }
  .lav-modal__body .lav-seller__company:hover {
    text-decoration: none;
  }
  .lav-modal__body .lav-botton__contact {
    padding: 20px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    height: auto;
    margin-top: auto;
    transition: 0.35s;
  }
  .lav-modal__body .lav-botton__contact:hover {
    background-color: #323a5f;
  }
  @media(max-width: 1200px) {
    
  }
`;

const REPO_DIR = 'https://flopsi69.github.io/crs/bimedis/pdp';

// connect to DOM
let styles = document.createElement('style');
styles.id = 'go-phone-styles';
styles.innerHTML = stylesList;
document.body.appendChild(styles);
/* STYLES insert end */

let observer = new MutationObserver(mutations => {
  for (let mutation of mutations) {
    // проверим новые узлы, есть ли что-то, что надо подсветить?

    for (let node of mutation.addedNodes) {
      // отслеживаем только узлы-элементы, другие (текстовые) пропускаем
      if (!(node instanceof HTMLElement)) continue;
      console.log(node);
      if (
        (!isInitExp && node.classList.contains('lSSlideOuter')) ||
        node.classList.contains('comment-model')
      ) {
        initExp();
      }
      // проверить, не является ли вставленный элемент примером кода
    }
  }
});

// initExp();
function initExp() {
  initExpInner();
  document.querySelector('.b-search-result-button').innerHTML =
    "<img src='" +
    REPO_DIR +
    "/chevron-right.svg' /> View other&nbsp;<strong>adverts</strong>&nbsp;of this model";

  document
    .querySelector('.b-search-result-button')
    .addEventListener('click', function () {
      gaEvent('click on button View other', 'Back to listing');
    });

  document
    .querySelectorAll('.sjs-contacts-callback-abtest')
    .forEach(function (button, index) {
      button.addEventListener('click', function () {
        if (index == 1) {
          gaEvent('click on button Contact us', 'Popup: Delivery options');
        } else if (index == 2) {
          gaEvent('click on button Contact us', 'Popup: Customs clearance');
        }
        document.querySelector('#sjs-contacts-callback-advert_id').value =
          advertId;
        document.querySelector('#sjs-contacts-callback-button_id').value =
          button.innerText;
      });
    });

  window.dispatchEvent(new Event('resize'));
}

function initExpInner() {
  let title = document.querySelector('.b-advert-header.m-h1').innerText;
  let sellerCompanyEl = document.querySelector('.e-company-name a');
  let sellerName = document.querySelector('.e-card-title + .e-text').innerText;
  let sellerLogoLink =
    document.querySelector('.b-user-logo-image').dataset.href;
  let sellerLogoStyle = document
    .querySelector('.b-user-logo-image')
    .getAttribute('style');
  let bodyEl = `
    <div class='lav-body__wrap'>
      <div class='lav-body__info'></div>
      <div class='lav-body'>
        <div class='lav-body__head'>
          <div class='lav-body__title'>${title}</div>
        </div>
        <div class='lav-body__meta'>
          <div class='lav-body__meta-left'>
            <div class='lav-body__line lav-body__line-condition'>Condition: <strong></strong></div>
            <div class='lav-body__line lav-body__line-year'>Year: <strong></strong></div>
          </div>
          <div class='lav-body__meta-right'><span>Add to Favourites</span></div>
        </div>
        <div class='lav-body__price'></div>

        <div class='lav-seller'>
          <a href="${sellerLogoLink}" class="lav-seller__logo" style="${sellerLogoStyle}"></a>
          <div class='lav-seller__head'>
            <div class='lav-seller__head-caption'>Seller:</div>
            <div class='lav-seller__head-label'></div>
          </div>
          <a href='${sellerCompanyEl.href}' class='lav-seller__company'>${
    sellerCompanyEl.innerText
  }</a>
          <div class='lav-seller__rates'></div>
          <div class='lav-seller__info'>
            <div class='lav-seller__info-left'>
              <div class='lav-seller__info-line'>
                <div class='lav-seller__info-key'>Ships from:</div>
                <div class='lav-seller__info-value lav-seller__info-from'></div>
              </div>
              <div class='lav-seller__info-line'>
                <div class='lav-seller__info-key'>Contact name:</div>
                <div class='lav-seller__info-value'>${sellerName}</div>
              </div>
            </div>
            <div class='lav-seller__info-right'>
            <img src="${REPO_DIR}/map-placeholder.svg">See on the map
            </div>
          </div>
        </div>

        <div class='lav-buttons__wrap'>
          <div class='lav-buttons'>
            <button class="b-button m-button-blue lav-botton__contact">Contact seller</button>
            <button class="b-button lav-botton__tradein sjs-contacts-callback-abtest">Trade in</button>
          </div>

          <div class='lav-buttons__report'>
            <img src="${REPO_DIR}/report.svg">
            Report the add
          </div>
        </div>

        <div class='lav-how'>
          <div class='lav-how__title'>How to buy this product?</div>
          <div class='lav-how__steps'>
            <div class='lav-how__step'>
              <div class='lav-how__step-num'>1</div>
              <div class='lav-how__step-caption'>Contact seller</div>
            </div>
            <div class='lav-how__step'>
              <div class='lav-how__step-num'>2</div>
              <div class='lav-how__step-caption'>Agree on the price with seller</div>
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
          <div class='lav-how__caption'>Delegate accompanying services to Bimedis or manage everything by your own</div>
          <div class='lav-how__options'>
            <div class='lav-how__option'>
              <div class='lav-how__option-value'>Delivery options</div>
              <div class='lav-how__option-to'>to <span class='lav-country'></span></div>
              <div class='lav-how__tip'>
                <div class='lav-how__tip-title'>Delivery options to <span class='lav-country'></span></div>
                <div class='lav-how__tip-info'>
                  <div class='lav-how__tip-descr'>Bimedis.com offers delivery services all over the world. For more details contact us.  </div>
                  <button class='lav-how__tip-btn b-button m-button-blue sjs-contacts-callback-abtest'>Contact US</button>
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
                  <button class='lav-how__tip-btn b-button m-button-blue sjs-contacts-callback-abtest'>Contact US</button>
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
                  </div>

                  <div class='lav-how__tip-column'>
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

        <div class='lav-related'>
          <div class='lav-similar__wrap'>
            <h2 class="b-advert-header m-h2 lav-similar__title">Similar products</h2>
            <div class='lav-similar'></div>
            <div class='lav-similar__button-wrap'>
              <a class='lav-similar__button lav-similar__button-one' href='${
                document.querySelector(
                  '.b-breadcrumbs-list .e-breadcrumbs-item.active a'
                ).href
              }'>Show more <img src='${REPO_DIR}/chevron-right.svg'></a>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  `;

  document
    .querySelector('.b-adverts-switcher')
    .insertAdjacentHTML('afterend', bodyEl);

  if (document.querySelector('.sjs-advert-price')) {
    document.querySelector('.lav-body__price').innerText =
      document.querySelector('.sjs-advert-price').innerText;
  } else {
    document.querySelector('.lav-body__price').remove();
  }

  for (let item of document.querySelectorAll('.b-advert-left-column')) {
    document
      .querySelector('.lav-body__info')
      .insertAdjacentElement('beforeend', item);
  }

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

  if (document.querySelector('.m-trust')) {
    document
      .querySelector('.lav-seller__head-caption')
      .insertAdjacentHTML(
        'beforeend',
        '<img src="' + REPO_DIR + '/trust.png">'
      );
  }

  if (document.querySelector('.b-advert-status')) {
    document
      .querySelector('.lav-body__head')
      .insertAdjacentElement(
        'beforeend',
        document.querySelector('.b-advert-status')
      );
  }

  document
    .querySelector('.b-place-advert-show-wrapper')
    .closest('.b-advert-block')
    .remove();

  if (document.querySelector('.sjs-other-adverts-header')) {
    document
      .querySelector('.lav-related')
      .insertAdjacentElement(
        'beforeend',
        document.querySelector('.sjs-other-adverts-header')
      );
  }

  let relatedBlockEl = document.querySelector(
    '.b-popular-second-level-searches'
  );
  if (relatedBlockEl) {
    let relatedWrap = relatedBlockEl.closest('.b-advert-block');
    document
      .querySelector('.lav-related')
      .insertAdjacentElement(
        'beforeend',
        document.querySelector('.b-popular-second-level-searches')
      );
    relatedWrap.remove();
  }

  document
    .querySelector('.lav-body__wrap')
    .insertAdjacentElement(
      'afterend',
      document.querySelector('.b-comment-container')
    );

  document
    .querySelector('.lav-body__meta-right')
    .insertAdjacentElement(
      'beforeend',
      document.querySelector('.sjs-add-to-favourites')
    );

  document
    .querySelector('.lav-seller__rates')
    .insertAdjacentElement(
      'afterbegin',
      document.querySelector('.b-user-rating-wrapper').cloneNode(true)
    );

  document
    .querySelector('.lav-seller__rates .sjs-scroll-to')
    .addEventListener('click', function () {
      document.querySelector('.b-advert-right-column .sjs-scroll-to').click();
    });

  document.querySelector('.lav-seller__rates .sjs-scroll-to').innerText =
    document
      .querySelector('.lav-seller__rates .sjs-scroll-to')
      .innerText.replace(
        /\(reviews: (\d+)\)/i,
        'based on $1 reviews on Bimedis'
      );
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
      .querySelector('.lav-body__line-condition strong')
      .insertAdjacentHTML('afterbegin', conditionPDP);
  } else {
    document.querySelector('.lav-body__line-condition').remove();
  }

  if (yearPDP) {
    document
      .querySelector('.lav-body__line-year strong')
      .insertAdjacentHTML('afterbegin', yearPDP);
  } else {
    document.querySelector('.lav-body__line-year').remove();
  }

  document
    .querySelector('.lav-seller__info-from')
    .insertAdjacentHTML(
      'afterbegin',
      document.querySelector('.b-advert-table .e-advert-row .c .b-flag-img')
        .parentElement.innerHTML
    );

  document
    .querySelector('.lav-body__meta-right span')
    .addEventListener('click', function () {
      document.querySelector('.sjs-add-to-favourites.m-round').click();
    });

  document
    .querySelector('.lav-body__meta-right')
    .addEventListener('click', function () {
      gaEvent('click on button Add to Favourites', 'Content');
    });

  document
    .querySelector('.lav-buttons__report')
    .addEventListener('click', function () {
      document.querySelector('.sjs-complaint').click();
    });

  document
    .querySelector('.lav-botton__contact')
    .addEventListener('click', function () {
      document.querySelector('.sjs-send-message-open').click();
    });

  fetchSimilar(
    document.querySelector('.b-breadcrumbs-list .e-breadcrumbs-item.active a')
      .href
  );

  document
    .querySelectorAll('.b-other-advert-list .e-product-item')
    .forEach(function (el) {
      if (
        el.querySelector('.b-other-advert-list .e-product-price .e-price') &&
        el
          .querySelector('.b-other-advert-list .e-product-price .e-price')
          .innerText.trim()
      ) {
        // no
      } else {
        el.querySelector(
          '.b-other-advert-list .e-product-price .e-price'
        ).remove();
      }
    });

  initMapModal();
}

function fetchSimilar(url) {
  fetch(url)
    .then(function (res) {
      return res.text();
    })
    .then(function (data) {
      var parser = new DOMParser();
      var doc = parser.parseFromString(data, 'text/html');
      console.log(doc.querySelectorAll('.e-product-item'));
      var items = doc.querySelectorAll('.e-product-item');
      if (items.length) {
        if (items.length >= 9) {
          setSimilarProduct(items, 9);
        } else if (items.length >= 6) {
          setSimilarProduct(items, 6);
        } else if (items.length >= 3) {
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
      let imageSrc, title, brand, elLink;
      if (el.querySelector('.e-product-image img')) {
        imageSrc = el.querySelector('.e-product-image img').dataset.src;
      }
      if (el.querySelector('.b-third-level-title')) {
        title = el.querySelector('.b-third-level-title').innerText;
      }
      if (
        el.querySelector('.b-product-relinking li').innerText.includes('Brand')
      ) {
        brand = el.querySelector('.b-product-relinking li a').innerText;
      }
      elLink = el.querySelector('.e-product-title a').href;

      let elBlock = document.createElement('div');
      elBlock.classList.add('lav-similar__item');
      elBlock.innerHTML = `
        <a class='lav-similar__image' href='${elLink}'>
          <img src='${imageSrc}' />
        </a>
        <div class='lav-similar__info'>
          <a href='${elLink}' class='lav-similar__title'>${title}</a>
          <div class='lav-similar__brand'>${brand}</div>
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
        console.log('line', line);
        if (line.innerText.toLowerCase().includes('shipping from')) {
          elBlock
            .querySelector('.lav-similar__meta')
            .insertAdjacentHTML(
              'beforeend',
              "<div class='lav-similar__meta-line lav-similar__meta-from'><span>Ships from:</span><div class='lav-similar__meta-country'>" +
                line.querySelector('.e-short-description-product-item-value')
                  .innerHTML +
                '</div></div>'
            );
        } else if (line.innerText.toLowerCase().includes('condition')) {
          elBlock
            .querySelector('.lav-similar__meta')
            .insertAdjacentHTML(
              'beforeend',
              "<div class='lav-similar__meta-line'>Condition:" +
                line.querySelector('.e-short-description-product-item-value')
                  .innerText +
                '</div>'
            );
        } else if (line.innerText.toLowerCase().includes('year')) {
          elBlock
            .querySelector('.lav-similar__meta')
            .insertAdjacentHTML(
              'beforeend',
              "<div class='lav-similar__meta-line lav-similar__meta-from'>Year:" +
                line.querySelector('.e-short-description-product-item-value')
                  .innerText +
                '</div>'
            );
        }
      });

      document
        .querySelector('.lav-similar')
        .insertAdjacentElement('beforeend', elBlock);
    }
  });
}

function initMapModal() {
  let modalEl = `
    <div class="new-scss scss-popup lav-modal hidden">
      <div class="scss-main-page-popup">
          <div class="lav-modal__body">
              <div class="scss-popup-close lav-modal__close"><span class="glyphicon glyphicon-remove"></span></div>

            <div class="lav-modal__map">
              <iframe frameborder="0" style="border:0; width: 100%; height:540px;" src="" allowfullscreen=""></iframe>
            </div>
            <div class="lav-modal__info">
             <button class="b-button m-button-blue lav-botton__contact">Contact seller</button>
            </div>
          </div>
      </div>
    </div>
  `;

  document.querySelector('body').insertAdjacentHTML('beforeend', modalEl);
  document
    .querySelector('.lav-modal__body .lav-botton__contact')
    .addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector('.sjs-send-message-open').click();
    });
  document
    .querySelector('.lav-modal__info')
    .insertAdjacentElement(
      'afterbegin',
      document.querySelector('.lav-seller').cloneNode(true)
    );

  document.querySelector('.lav-modal__info .lav-seller__info-right').remove();
  document.querySelector('.lav-modal__info .lav-seller__head-caption').remove();

  document
    .querySelector('.lav-seller__info-right')
    .addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector('.b-blackout').style.display = 'block';
      document.querySelector('.lav-modal').classList.remove('hidden');
      document.querySelector('.lav-modal__map iframe').src =
        document.querySelector('.maps_html iframe').src;
    });

  document.querySelector('.b-blackout').addEventListener('click', function (e) {
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
}
