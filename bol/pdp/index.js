function gaEvent(action) {
  window.dataLayer = window.dataLayer || [];
  try {
    let eventObj = {
      event: 'event-to-ga',
      eventCategory: 'Exp - PDP improvements',
      eventAction: action
    };
    console.log('fireEvent', eventObj);
    dataLayer.push(eventObj);
  } catch (e) {}
}

(function (h, o, t, j, a, r) {
  h.hj =
    h.hj ||
    function () {
      (h.hj.q = h.hj.q || []).push(arguments);
    };
  h._hjSettings = { hjid: 1831568, hjsv: 6 };
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
hj('trigger', 'PDP_improvements');

let isInitExp = false;
const REPO_DIR = 'https://flopsi69.github.io/crs/bol/pdp';

// let observer = new MutationObserver(mutations => {
//   for (let mutation of mutations) {
//     for (let node of mutation.addedNodes) {
//       if (!(node instanceof HTMLElement)) continue;

//       console.log(node);
//     }
//   }
// });

// observer.observe(document.querySelector('body'), {
//   childList: true,
//   subtree: true
// });

function initStyles() {
  /* STYLES insert start */
  let stylesList = `
    #main-product-image {
      position: relative;
    }
    #main-product-image:after {
      content: '';
      position: absolute;
      pointer-events: none;
      width: 37px;
      height: 37px;
      background: url(${REPO_DIR}/img/ico-4.svg) center no-repeat;
      background-size: contain;
      right: 13px;
      bottom: 18px;
    }
    .items-info > img {
      display: none;
    }
    .prod_class .title h1 {
      text-align: center;
      font-weight: bold;
      font-size: 22px;
      line-height: 26px;
      color: #231F20;
      margin-top: 15px;
      margin-bottom: 35px;
    }
    .text-center.two-pic {
      display: none; 
    }
    .form-add-to-cart .price {
      position: relative;
      padding-right: 90px;
    }
    .form-add-to-cart .rte {
      margin-top: 30px;
    }
    .money {
      white-space: nowrap;
    }
    #productPrice-manual {
      padding-top: 5px;
      display: inline-block;
    }
    .quantity {
      padding-right: 0;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .quantity>span {
      display: block;
      float: none;
      width: 100%;
    }
    .quantity>.qty {
      float: none;
    }
    .lav-free-shipping {
      font-weight: bold;
      font-size: 14px;
      line-height: 1;
      text-align: center;
      color: #333333;
      border: 1px solid #7CB305;
      border-radius: 12px;
      padding: 2px 7px;
    }
    .lav-discount {
      position: absolute;
      right: -15px;
      top: 0;
    }
    .lav-discount__value {
      background: #A8071A;
      border-radius: 3px;
      padding: 8px 10px;
      font-weight: bold;
      font-size: 16px;
      line-height: 1;
      text-align: center;
      color: #FFFFFF;
      margin-bottom: 8px;
    }
    .lav-discount__shipping {
      font-weight: bold;
      font-size: 13px;
      line-height: 1;
      text-align: center;
      color: #7CB305;
    }
    .lav-total {
      display: flex;
      align-items: center;
    }
    .lav-total__caption {
      margin-right: 11px;
      font-weight: bold;
      font-size: 14px;
      line-height: 1;
      color: #5F6262;
    }
    .lav-total__value {
      font-weight: bold;
      font-size: 24px;
      color: #AB2216;
    }
    .lav-options {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 32px 5px;
      border-top: 1px solid #DFDFDF;
      border-bottom: 1px solid #DFDFDF;
    }
    .lav-options__list {
      display: flex;
    }
    .lav-options__caption {
      font-size: 22px;
      line-height: 26px;
      color: #333333;
    }
    .lav-options__item {
      text-align: center;
      padding: 12px 18px;
      background: #FAFAFA;
      border: 1px solid #096DD9;
      border-radius: 6px;
      font-size: 16px;
      line-height: 19px;
      color: #096DD9;
      width: 195px;
      max-width: 100%;
      transition: 0.35s;
    }
    .lav-options__item:hover {
      background-color: #eae8e8;
    }
    .lav-options__item + .lav-options__item {
      margin-left: 30px;
    }
    .lav-info {
      display: flex;
      justify-content: space-between;
      margin-top: 40px;
      margin-bottom: 37px;
    }
    .lav-info__block-title {
      font-weight: bold;
      font-size: 22px;
      line-height: 26px;
      text-align: center;
      color: #000000;
      margin-bottom: 40px;
    }
    .lav-feautures {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 50px 55px;
    }
    .lav-feautures__wrap {
      max-width: 510px;
      width: 100%;
      text-align: center;
    }
    .lav-combo {
      display: flex;
    }
    .lav-combo__wrap {
      max-width: 335px;
      width: 100%;
    }
    .lav-combo__info {
      padding-left: 20px;
      font-size: 16px;
      line-height: 19px;
      color: #231F20;
    }
    .lav-combo__title {
      font-weight: bold;
    }
    .lav-combo__green {
      margin: 10px 0;
      font-weight: bold;
      color: #7CB305;
    }
    .lav-combo__list-caption {
      font-weight: bold;
      margin-bottom: 5px;
      margin-top: 10px;
    }
    .lav-combo__list li + li {
      margin-top: 3px;
    }
    .lav-combo__zoom {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      line-height: 21px;
      color: #096DD9;
      border: 1px solid #DFDFDF;
      border-radius: 6px;
      padding: 8px 12px;
      cursor: pointer;
      transition: 0.2s;
    }
    .lav-combo__zoom img {
      margin-right: 8px;
      width: 20px;
      height: 20px;
    }
    .lav-combo__zoom:hover {
      background: #e6e2e2;
    }
    .lav-feautures__icon {
      margin-bottom: 15px;
      height: 65px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .lav-feautures__icon img {
      max-width: 100%;
      max-height: 100%;
    }
    .lav-feautures__caption {
      font-size: 15px;
      line-height: 18px;
      color: #5F6262;      
    }
    .lav-static img {
      width: auto;
    }
    .lav-compability {
      border: 1px solid #DFDFDF;
      border-radius: 6px;
      padding: 18px;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    .lav-compability__caption {
      font-weight: bold;
      font-size: 22px;
      line-height: 1;
      color: #000000;
    }
    .lav-compability__call {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 10px 18px 8px;
      font-weight: bold;
      font-size: 16px;
      line-height: 1;
      color: #096DD9;
      border: 1px solid #096DD9;
      border-radius: 6px;
      transition: 0.2s;
    }
    .lav-compability__call:hover {
      background: #e4e4e4;
    }
    .lav-compability__call img {
      margin-left: 20px;
      width: 28px;
    }
    .lav-pluses {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 38px;
      margin: 48px 0;
      font-size: 20px;
      line-height: 23px;
      color: #000000;
    }
    .lav-pluses__item {
      max-width: 340px;
      display: flex;
      align-items: center;
    }
    .lav-pluses img {
      margin-right: 32px;
    }
    .lav-spec {
      border-top: 1px solid #DFDFDF;
      padding-top: 47px;
    }
    .lav-spec__title {
      margin-bottom: 40px;
      font-weight: bold;
      font-size: 22px;
      line-height: 26px;
      text-align: center;
      color: #000000;
    }
    .lav-spec__table {
      border-radius: 6px;
      text-align: center;
      width: 100%;
    }
    .lav-spec__table-wrap {
      // overflow: hidden;
      padding-left: 40px;
    }
    .lav-spec__table td {
      font-size: 14px;
      line-height: 16px;
      color: #4C4F4F;
      padding: 12px;
      text-align: center;
      border: 1px solid #C4C4C4;
    }

    .lav-spec__table tr:first-child td {
      background-color: #333333;
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
      color: #FFFFFF;
      padding: 10px;
      text-align: center;
    }
    
    .lav-spec__table td:first-child {
      font-weight: bold;
    }
    .lav-spec-sub {
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      color: #333333;
      margin-top: 40px;  
    }
    .lav-quest {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 40px;
    }
    .lav-quest__form-wrap {
      max-width: 420px;
      width: 100%;
    }
    .lav-quest__links {
      border: 1px solid #DFDFDF;
      padding: 20px;
      border-radius: 0 6px 6px 6px;
    }
    .lav-quest__label {
      display: inline-block;
      background: #333;
      border-radius: 6px 6px 0 0;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      color: #fff;
      padding: 9px 10px 7px;
    }
    #content .lav-quest__area {
      border: 1px solid #333;
      border-top-left-radius: 0;
      border-radius: 0 6px 6px 6px;
      min-height: 91px;
      height: auto;
      font-size: 16px;
      line-height: 19px;
      color: #575757;
      margin: 0 0 11px;
      resize: none;
    }
    .lav-quest__form input {
      border: 1px solid #333;
      border-radius: 6px;
      width: 100%;
      height: 42px;
      padding: 0 14px;
      font-size: 16px;
      line-height: 19px;
      color: #575757;
      margin-bottom: 11px;
    }
    .lav-quest__btn {
      background: #5b9400;
      border: 1px solid #c4c4c4;
      border-radius: 6px;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      color: #fff;
    }
    .lav-quest__call {
      border: 1px solid #DFDFDF;
      border-radius: 6px;
      padding: 19px;
      max-width: 380px;
      width: 100%;
    }
    .lav-quest__call-title {
      text-align: center;
      margin-bottom: 12px;
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
      color: #333333;
      max-width: 260px;
      margin-left: auto;
      margin-right: auto;
    }
    .lav-quest__call-btn {
      border: 1px solid #333;
      border-radius: 6px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 50px;
      padding: 0 15px;
      font-size: 16px;
      line-height: 19px;
      color: #333333;
      transition: 0.2s;
    }
    .lav-quest__call-btn:hover {
      background: #e4e4e4;
    }
    .lav-quest__call-btn img {
      filter: brightness(0);
    }
    .lav-inc {
      display: flex;
      justify-content: space-between;
      padding: 40px 0;
      border-top: 1px solid #DFDFDF;
      border-bottom: 1px solid #DFDFDF;
      margin-top: 40px;
    }
    .lav-inc__block {
      width: 48%;
    }
    .lav-inc__block-title {
      font-weight: bold;
      font-size: 18px;
      line-height: 21px;
      text-transform: uppercase;
      color: #5B9400;
      margin-bottom: 15px;
    }
    .lav-inc__list {
      font-size: 16px;
      line-height: 1;
      color: #000000;
      list-style: disc;
      line-height: 1.5;
      padding-left: 22px;
    }
    .lav-inc__list li {
      list-style: disc;
      max-width: 350px;
    }
    .lav-inc__list-blue {
      color: #096DD9;
    }
    .lav-inc__list a:hover {
      opacity: 0.5;
    }
    .lav-inc__list li + li{
      margin-top: 10px;
    }
    .lav-descr {
      font-size: 16px;
      line-height: 28px;
      color: #333;
    }
    .lav-descr p {
      margin-top: 5px;
    }
    .lav-descr__title {
      font-weight: bold;
      font-size: 22px;
      line-height: 26px;
      text-align: center;
      color: #333333;
      margin-bottom: 20px;
    }
    .lav-descr img {
      max-width: 100%;
      margin: 12px 0;
    }
    .lav-descr__block + .lav-descr__block {
      padding-top: 40px;
      margin-top: 25px;
      border-top: 1px solid #DFDFDF;
    }
    .lav-spec__table td {
      position: relative;
    }
    .lav-spec__tip {
      position: absolute;
      top: 50%;
      left: -35px;
      transform: translateY(-50%);
      z-index: 99;
    }
    .lav-spec__icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 19px;
      height: 19px;
      border-radius: 50%;
      background: #5b9400;
      color: #fff;
      z-index: 9;
      transition: 0.2s;
      cursor: pointer;
    }
    .lav-spec__icon:hover {
      opacity: 0.5;
    }
    .lav-spec__tip-title {
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
      color: #5B9400;
    }
    .lav-spec__tip-descr {
      font-size: 16px;
      line-height: 19px;
      color: #000000;
      font-weight: 400;
      margin-top: 10px;
    }
    .lav-spec__tip-body {
      display: none;
      border: 1px solid #7cb305;
      box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.11);
      border-radius: 6px;
      position: absolute;
      left: 35px;
      top: 50%;
      color: #000;
      background: #fff;
      width: 330px;
      padding: 13px;
      transform: translateY(-50%);
      text-align: left;
      font-size: 16px;
      font-weight: 400;
      line-height: 19px;
    }
    .lav-spec__tip-body:before, .lav-spec__tip-body:after {
      content: "";
      position: absolute;
      left: -20px;
      top: 39%;
      border: 10px solid transparent;
      border-top: 10px solid #7cb305;
      transform: rotate(90deg);
    }
    .lav-spec__tip-body::after {
      border-top: 10px solid #fff;
      left: -19px;
    }
    .lav-spec__tip-close {
      color: #7cb305;
      position: absolute;
      top: 2px;
      right: 8px;
      opacity: 1;
      display: block;
      z-index: 9;
      cursor: pointer;
      font-size: 21px;
      font-weight: 700;
      line-height: 1;
      text-shadow: 0 1px 0 #fff;
      transition: 0.2s;
      cursor: pointer;
    }
    .lav-spec__tip-close:hover {
      opacity: 0.4;
    }
    .lav-option__wrap {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .lav-option__caption {
      font-size: 15px;
      line-height: 18px;
      color: #096DD9;
      cursor: pointer;
      transition: 0.2s;
    }
    .lav-option__caption:hover {
      color: #0b54a2;
      opacity: 0.7;
    }
    .selector-wrapper .selector-wrapper + .selector-wrapper {
      margin-top: 20px!important;
    }
    .modal {
      position: fixed;
      display: flex;
      padding: 15px;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1050;
      outline: 0;
      overflow: hidden;
      overflow-x: hidden;
      overflow-y: auto;
      background: rgba(22, 22, 22, 0.39);
      transition: 0.3s;
      pointer-events: none;
      opacity: 0;
    }
    .modal_active {
      opacity: 1;
      pointer-events: auto;
    }
    .modal__body {
      position: relative;
      margin: auto;
      display: none;
      max-width: 350px;
      width: 100%;
      background-color: #FFFFFF;
      box-shadow: 0px 4px 21px rgba(0, 0, 0, 0.07);
      border-radius: 6px;
    }
    .modal__body img {
      max-width: 100%;
    }
    .modal__close {
      border-radius: 50%;
      background-color: #fff;
      outline: none;
      line-height: 0;
      cursor: pointer;
      padding: 5px;
      transition: 0.2s;
      border: none;
    }
    .modal__close-icon {
      width: 10px;
      height: 10px;
      fill: #333333;
    }
    .modal__close:hover {
      background: red;
    }
    .modal__head {
      background: #333333;
      padding: 13px 18px;
      font-weight: bold;
      font-size: 15px;
      line-height: 18px;
      color: #FFFFFF;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 6px 6px 0 0;
    }
    .modal__inner-block {
      padding: 17px 30px 17px 20px;
      font-size: 16px;
      line-height: 24px;
    }
    .modal__inner-block span {
      color: #7CB305;
      font-weight: 700;
    }
    .modal__inner-block + .modal__inner-block {
      border-top: 1px solid #C4C4C4;
    }
    .lav-dropdown {
      width: 100%;
    }
    .lav-dropdown__list {
      display: none;
      z-index: 10;
      background: #fff;
      border: 1px solid #DFDFDF;
      box-sizing: border-box;
      box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.13);
      border-radius: 0px 0px 5px 5px;
      padding: 17px;
      margin: 0 -15px 30px;
    }
    .lav-dropdown__head {
      color: #231f20;
      background: rgba(255, 255, 255, 0.09);
      border: 1px solid #c4c4c4;
      border-radius: 4px;
      font-weight: bold;
      font-size: 15px;
      line-height: 18px;
      padding: 13px 15px;
      margin: 12px 0;
      position: relative;
      transition: 0.2s;
      cursor: pointer
    }
    .lav-dropdown__head:hover {
      background-color: rgba(33,33,33,0.1);
    }
    .lav-dropdown__head:after {
      content: '';
      position: absolute;
      top: 10px;
      right: 11px;
      height: 23px;
      width: 23px;
      transform: rotate(180deg);
      background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD6SURBVHgB1ZU9DoJAEIVnVwtLEgq04wgI9O4ROII3MJ4APIGlpdjZegMPQOFRSKiJzkRIjAacIWyiL9nszv58L5nszipjjFNV1R4AEmwOjKO8ruvtxHXdAwZrbDMYT4HWeq6iKLqDHZUa7MmxCQcRXCl1k+xnwxG8K4piST33DAvegDMaU881+ApvwXEcG4rxdiVcA80Bh2GYYpg20xuKOQZ98LwFIyR7M81aAwxPXYApdMtgCo7wfL0fIgNc93G4ggFwvwv8ot7133lEfwsX13ppyaXaEnA3S9PCBg+Bi0TwEiyJ4Bewo3zied4VP9MFCPPZI8rEmX7/B7rmRIas1GKyAAAAAElFTkSuQmCC");
    }
    .lav-dropdown__head.active:after {
      transform: rotate(0deg);
    }
    .lav-dropdown__item {
      background: rgba(255, 255, 255, 0.09);
      border: 1px solid #096dd9;
      border-radius: 4px;
      padding: 10px 12px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
    }
    .lav-dropdown__item + .lav-dropdown__item {
      margin-top: 16px;
    }
    .lav-dropdown__item-left {
      width: 62%;
      display: flex;
      align-items: center;
    }
    .lav-dropdown__item-right {
      width: 38%;
      text-align: right;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
    .lav-dropdown__item.active {
      background: rgba(9, 109, 217, 0.09);
    }
    .lav-dropdown__item.active .lav-dropdown__item-cart {
      background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMjkiIHZpZXdCb3g9IjAgMCAyOSAyOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGQ9Ik0yMC45NzEgMTguMTg0N0wyMi44NTQxIDEwLjE3NjlDMjIuOTg4IDkuNTA0NjggMjIuNTQwMSA4Ljg2NDU4IDIxLjkzNTggOC44NjQ1OEg2LjUyMzM3TDYuMTYzNyA2Ljg1ODkzQzYuMDc0MDggNi4zNTkwMSA1LjY4ODQ0IDYgNS4yNDEwNyA2SDEuMjE3OTJDMC42OTc4MDkgNiAwLjI3NjE4NCA2LjQ4MDk0IDAuMjc2MTg0IDcuMDc0MjJWNy43OTAzNkMwLjI3NjE4NCA4LjM4MzY1IDAuNjk3ODA5IDguODY0NTggMS4yMTc5MiA4Ljg2NDU4SDMuOTYwMDdMNi43MTY1NCAyNC4yMzY0QzYuMDU3MDkgMjQuNjY5IDUuNjEyNzEgMjUuNDgwMiA1LjYxMjcxIDI2LjQxMDJDNS42MTI3MSAyNy43OTQ1IDYuNTk2NTEgMjguOTE2NyA3LjgxMDEgMjguOTE2N0M5LjAyMzY5IDI4LjkxNjcgMTAuMDA3NSAyNy43OTQ1IDEwLjAwNzUgMjYuNDEwMkMxMC4wMDc1IDI1LjcwODYgOS43NTQ1MSAyNS4wNzQ4IDkuMzQ3MzMgMjQuNjE5OEgxNy41NzM3QzE3LjE2NjYgMjUuMDc0OCAxNi45MTM2IDI1LjcwODYgMTYuOTEzNiAyNi40MTAyQzE2LjkxMzYgMjcuNzk0NSAxNy44OTc0IDI4LjkxNjcgMTkuMTExIDI4LjkxNjdDMjAuMzI0NiAyOC45MTY3IDIxLjMwODQgMjcuNzk0NSAyMS4zMDg0IDI2LjQxMDJDMjEuMzA4NCAyNS40MTc4IDIwLjgwMjYgMjQuNTYwMiAyMC4wNjkyIDI0LjE1NDFMMjAuMjg1NyAyMy4wNjc1QzIwLjQxOTYgMjIuMzk1MyAxOS45NzE3IDIxLjc1NTIgMTkuMzY3NCAyMS43NTUySDguODM0OTFMOC41NDk5NSAxOS4wMjA4SDIwLjA1MjdDMjAuNDkyNCAxOS4wMjA4IDIwLjg3MzYgMTguNjczOCAyMC45NzEgMTguMTg0N1oiIGZpbGw9IiMwOTZERDkiLz4KPC9nPgo8cGF0aCBkPSJNMjMuMzMgMEMyMC41ODgzIDAgMTguMzU3NyAyLjY5MTU0IDE4LjM1NzcgNS45OTk5N0MxOC4zNTc3IDkuMzA4MzkgMjAuNTg4MyAxMiAyMy4zMyAxMkMyNi4wNzE4IDEyIDI4LjMwMjQgOS4zMDgzOSAyOC4zMDI0IDUuOTk5OTdDMjguMzAyNCAyLjY5MTU0IDI2LjA3MTggMCAyMy4zMyAwWk0yNi4xODUzIDQuOTg2NTJMMjMuMDYxNCA4Ljc1NkMyMi45Mjg1IDguOTE2MjggMjIuNzUyIDkuMDA0NDkgMjIuNTY0MSA5LjAwNDQ5QzIyLjM3NjMgOS4wMDQ0OSAyMi4xOTk4IDguOTE2MjggMjIuMDY2OSA4Ljc1NkwyMC40NzQ4IDYuODM0ODVDMjAuMzQyIDYuNjc0NTggMjAuMjY4OCA2LjQ2MTUyIDIwLjI2ODggNi4yMzQ4OEMyMC4yNjg4IDYuMDA4MTcgMjAuMzQyIDUuNzk1MTEgMjAuNDc0OCA1LjYzNDg0QzIwLjYwNzYgNS40NzQ1NiAyMC43ODQxIDUuMzg2MjggMjAuOTcyIDUuMzg2MjhDMjEuMTU5OSA1LjM4NjI4IDIxLjMzNjUgNS40NzQ1NiAyMS40NjkyIDUuNjM0OUwyMi41NjQxIDYuOTU1OTRMMjUuMTkwNyAzLjc4NjVDMjUuMzIzNSAzLjYyNjIzIDI1LjUwMDEgMy41MzgwMSAyNS42ODc5IDMuNTM4MDFDMjUuODc1OCAzLjUzODAxIDI2LjA1MjMgMy42MjYyMyAyNi4xODUyIDMuNzg2NUMyNi40NTk0IDQuMTE3NDUgMjYuNDU5NCA0LjY1NTcgMjYuMTg1MyA0Ljk4NjUyWiIgZmlsbD0iIzdDQjMwNSIvPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMCI+CjxyZWN0IHdpZHRoPSIyMi42MDE3IiBoZWlnaHQ9IjIyLjkxNjciIGZpbGw9IndoaXRlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjI3NjE4NCA2KSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=");
      background-repeat: no-repeat;
      width: 28px;
      height: 38px;
      text-indent: -999px;
      font-size: 0;
    }
    .lav-dropdown__item-left img {
      width: 50px;
      height: 50px;
      border-radius: 4px;
      margin-right: 9px;
    }
    .lav-dropdown__item-left span {
      position: relative;
      font-size: 15px;
      font-weight: 400;
      line-height: 18px;
      width: auto;
      order: unset;
      color: #000000;
    }
    .lav-dropdown__item-price {
      display: inline-block;
      color: #b00;
      font-weight: bold;
      font-size: 15px;
      line-height: 18px;
      margin-right: 15px;
    }
    .lav-dropdown__item-cart {
      font-weight: bold;
      font-size: 15px;
      line-height: 18px;
      color: #096dd9;
      background: transparent;
      border: 0;
    }
    .lav-dropdown__item-options {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      width: 100%;
      margin-top: 10px;
    }
    .lav-dropdown__item-option {
      cursor: pointer;
      padding: 4px 8px;
      border: 1px solid lightgray;
      border-radius: 5px;
      min-width: 20%;
      transition: 0.2s;
      flex: 1;
      max-width: 25%;
      margin: 3px;
      text-align: center;
    }
    .lav-dropdown__item-option:hover {
      background-color: #dadad1;
    }
    .lav-dropdown__item-option.active {
      background-color: #0a6cd9;
      color: #fff;
    }
    .lav-fake-btn {
      height: 45px;
      position: absolute;
      width: 100%;
      left: 0;
      bottom: 0;
      transform: translateY(100%);
      cursor: pointer;
    }
    .owl-carousel .item {
      width: auto!important;
    }
  `;

  let styles = document.createElement('style');
  styles.id = 'go-phone-styles';
  styles.innerHTML = stylesList;
  document.body.appendChild(styles);
}

// connect to DOM
/* STYLES insert end */

// CODE START ***
// var intervalInit = setInterval(() => {
//   if (typeof advertId !== 'undefined') {
//     console.log('success..');
//     clearInterval(intervalInit);
//     init();
//   } else {
//     console.log('try one more..');
//   }
// }, 500);

document.addEventListener('DOMContentLoaded', function (event) {
  if (!isInitExp) {
    initExp();
  }
});

setTimeout(() => {
  if (!isInitExp) {
    initExp();
  }
}, 2500);

function initExp() {
  console.log('InitExp');
  isInitExp = true;
  gaEvent('loaded');

  initStyles();
  changeDom();
  if ($('#comparePrice-manual').length) {
    setDiscount();
    $('#productPrice-manual').html(
      $('#productPrice-manual')
        .html()
        .replace(
          '&amp; Free Shipping',
          '<span class="lav-free-shipping">Free Shipping</span>'
        )
    );
  }
  initStaticBlock();
  let intervarlDescr = setInterval(() => {
    if (!$('.lav-descr').html()) {
      console.log('try init descr');
      initDescr();
    } else {
      clearInterval(intervarlDescr);
      console.log('clear');
    }
  }, 1000);
  initModal();
  initOptions();
  test_accessory();

  // $('.form-add-to-cart').on('submit', function (e) {
  //   makeOrder(e);
  //   return false;
  // });

  $('#content .pro_main_c .desc_blk').append(
    "<div class='lav-fake-btn'></div>"
  );
  $('.lav-fake-btn').on('click', function (e) {
    makeOrder(e);
    return false;
  });

  $('.minus_btn').on('click', function (e) {
    console.log('click quantity');
    if (
      (document.querySelector('#quantity') &&
        document.querySelector('#quantity').value == '1') ||
      document.querySelector('#quantity').value == '0'
    ) {
      e.preventDefault();
      e.stopImmediatePropagation();
      e.stopPropagation();
      console.log('prevent');
      return false;
    }
  });
}

function makeOrder(e) {
  e.preventDefault();
  e.stopPropagation();
  e.stopImmediatePropagation();
  let items = [];
  $('.lav-dropdown__item.active').each((i, el) => {
    if ($(el).data('id')) {
      items.push({
        quantity: 1,
        id: $(el).data('id')
      });
    } else {
      items.push({
        quantity: 1,
        id: $(el).find('.lav-dropdown__item-option.active').data('id')
      });
    }
  });

  items.push({
    quantity: parseInt($('#quantity').val()),
    id: $('.form-add-to-cart').serialize().split('&')[0].split('=')[1]
  });

  fetch('/cart/add.js', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(items)
  })
    .then(response => {
      return response.json();
    })
    .catch(error => {
      console.error('Error:', error);
    });

  if (items.length) {
    fetch('/cart/add.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ items: items })
    })
      .then(response => {
        return response.json();
      })
      .then(result => {
        console.log(result);
        location.href = 'https://www.blackoakled.com/cart';
      })
      .catch(error => {
        console.error('Error:', error);
      });

    // $.post('/cart/add.js', {
    //   items: items
    // }).success(function () {
    //   console.log('submited');

    //   return false;
    // });
  }

  return false;
}

function changeDom() {
  $('#main-product-image')
    .parent()
    .removeClass('col-lg-8')
    .next()
    .removeClass('col-lg-4');
}

function setDiscount() {
  let discountVal = $('#comparePrice-manual').text().trim().replace('$', '');
  console.log('discountVal', discountVal);
  let currentPrice;

  if ($('#productPrice-manual .money .money').length) {
    currentPrice = $('#productPrice-manual .money .money')
      .text()
      .trim()
      .replace('$', '');
  } else {
    currentPrice = $('#productPrice-manual .money')
      .text()
      .trim()
      .replace('$', '');
  }

  discountVal = 100 - (currentPrice * 100) / discountVal;

  console.log('discountVal', discountVal);
  discountVal = Math.round(discountVal);

  let disocuntEl = `
   <div class='lav-discount'>
     <div class='lav-discount__value'>${discountVal}% OFF</div>
     <div class='lav-discount__shipping'>Ready to ship</div>
   </div>
  `;

  $('.form-add-to-cart .price').append(disocuntEl);

  let totalEl = `
    <div class="lav-total">
      <div class="lav-total__caption">Total price :</div>
      <div class="lav-total__value">$0</div>
    </div>
  `;
  $('.quantity').append(totalEl);
  setTotalPrice();

  $('.qty a').on('click', function () {
    setTimeout(() => {
      setTotalPrice();
    }, 200);
  });
  $('.form-add-to-cart .text-center img').css('max-width', '350px');
}

function setTotalPrice() {
  let totalPrice;
  if ($('#productPrice-manual .money .money').length) {
    totalPrice =
      $('#productPrice-manual .money .money').text().trim().replace('$', '') *
      $('#quantity').val();
  } else {
    totalPrice =
      $('#productPrice-manual .money').text().trim().replace('$', '') *
      $('#quantity').val();
  }

  $('.lav-dropdown__item.active').each((i, el) => {
    if ($(el).find('.lav-dropdown__item-option.active').length) {
      totalPrice =
        totalPrice +
        parseFloat(
          $(el).find('.lav-dropdown__item-option.active').data('price')
        );
    } else {
      totalPrice =
        totalPrice +
        parseFloat(
          $(el).find('.lav-dropdown__item-price').text().trim().replace('$', '')
        );
    }
  });
  console.log(totalPrice);

  $('.lav-total__value').text('$' + totalPrice.toFixed(2));
}

function initStaticBlock() {
  let blockEl = `
    <div class='lav-static'>
      <div class='lav-options'>
        <div class='lav-options__caption'>See other options</div>
        <div class='lav-options__list'>
          <a href='https://www.blackoakled.com/collections/20-inch-led-light-bars/20-Inch' class='lav-options__item'>20 inch <br> double row</a>
          <a href='https://www.blackoakled.com/collections/30-inch-led-light-bars/30-Inch' class='lav-options__item'>30 inch <br> double row</a>
          <a href='https://www.blackoakled.com/collections/40-inch-led-light-bars/40-Inch' class='lav-options__item'>40 inch <br> double row</a>
        </div>
      </div>

      <div class='lav-info'>
        <div class='lav-info__block lav-feautures__wrap'>
          <div class='lav-info__block-title'>Key Features</div>
          <div class='lav-feautures'>
            <div class='lav-feautures__item'>
              <div class='lav-feautures__icon'>
                <img src='${REPO_DIR}/img/features-1.svg' />
              </div>
              <div class='lav-feautures__caption'>50,000+ Hour Lifespan</div>
            </div>
            <div class='lav-feautures__item'>
              <div class='lav-feautures__icon'>
                <img src='${REPO_DIR}/img/features-2.svg' />
              </div>
              <div class='lav-feautures__caption'>9-36  V DC Voltage Range</div>
            </div>
            <div class='lav-feautures__item'>
              <div class='lav-feautures__icon'>
                <img src='${REPO_DIR}/img/features-3.png' />
              </div>
              <div class='lav-feautures__caption'>Durable UV Polyester Poweder Coat</div>
            </div>
            <div class='lav-feautures__item'>
              <div class='lav-feautures__icon'>
                <img src='${REPO_DIR}/img/features-4.svg' />
              </div>
              <div class='lav-feautures__caption'>Integrated Thermal Mgmt. System</div>
            </div>
            <div class='lav-feautures__item'>
              <div class='lav-feautures__icon'>
                <img src='${REPO_DIR}/img/features-5.svg' />
              </div>
              <div class='lav-feautures__caption'>Impact Resistant Polycarbonate Lens</div>
            </div>
            <div class='lav-feautures__item'>
              <div class='lav-feautures__icon'>
                <img src='${REPO_DIR}/img/features-6.svg' />
              </div>
              <div class='lav-feautures__caption'>IP68 & IP69 Compliant Dust / Water Ingress</div>
            </div>
          </div>
        </div>

        <div class='lav-info__block lav-combo__wrap'>
          <div class='lav-info__block-title'>Max performance with <br> Combo optics and 5W</div>
          <div class='lav-combo'>
            <div class='lav-combo__image'>
              <img src='${REPO_DIR}/img/combo-light.png' />
            </div>
            <div class='lav-combo__info'>
              <div class='lav-combo__title'>COMBO with 5Wprovides:</div>
              <div class='lav-combo__green'>Over 75 % more  <br> Light & Visibility</div>
              <div class='lav-combo__vis'>Visibility up to <strong>780m</strong></div>
              <div class='lav-combo__list-caption'>Best for:</div>
              <ul class='lav-combo__list'>
                <li>- Marine</li>
                <li>- Hunting</li>
                <li>- Off-road</li>
                <li>- Heavy Machinery</li>
                <li>- Military</li>
              </ul>
              <div class='lav-combo__zoom modal-trigger' data-modal-target='.modal-zoom'><img src='${REPO_DIR}/img/icon-zoom.svg'>Click to zoom</div>
            </div>
          </div>
        </div>
      </div>

      <div class='lav-compability'>
        <div class='lav-compability__caption'>Compatibility</div>
        <a href='tel:8003481287' class='lav-compability__call'>
          Call us 800-348-1287 to assist
          <img src='${REPO_DIR}/img/ico-3.svg'>
        </a>
      </div>

      <div class='lav-pluses'>
        <div class='lav-pluses__item'>
          <img src='${REPO_DIR}/img/production-1.svg'>
          Owned and operated in Sarasota FL
        </div>
        <div class='lav-pluses__item'>
          <img src='${REPO_DIR}/img/production-3.svg'>
          Limited Lifetime Warranty
        </div>
        <div class='lav-pluses__item'>
          <img src='${REPO_DIR}/img/production-2.svg'>
          Limited Lifetime Warranty
        </div>
        <div class='lav-pluses__item'>
          <img src='${REPO_DIR}/img/production-4.svg'>
         In Stock and Ready to Ship
        </div>
      </div>
      
      <div class='lav-spec'>
        <div class='lav-spec__title'>Specifications</div>
        <div class='lav-spec__table-wrap'></div>
      </div>
      
      <div class='lav-spec-sub'>Our lights are built to run off of 9-36V DC, but we offer power converters for 110V AC</div>

      <div class='lav-quest'>
        <div class="lav-quest__form-wrap">
          <div class='lav-quest__label'>Have a question?</div>
          <div class="lav-quest__links">
            <a class="button_v3" href="https://www.blackoakled.com/pages/contact-sales">Contact Sales</a>

            <a class="button_v3" href="https://www.blackoakled.com/pages/contact-support">Contact Support</a>
          </div>
        </div>

        <div class='lav-quest__call'>
          <div class='lav-quest__call-title'>We are here to assist in choosing the best fit </div>
          <a href='tel:8003481287' class='lav-quest__call-btn'>
            <span>Call us <b>800-348-1287</b> to assist</span>
            <img src='${REPO_DIR}/img/ico-3.svg'>
          </a>
        </div>
      </div>

      <div class='lav-inc'>
        <div class='lav-inc__block'>
          <div class='lav-inc__block-title'>What is included in the package?</div>
          <ul class='lav-inc__list lav-inc__list-blue'>
            <li>Mounting Hardware</li>
            <li>Black Powder Coated, L-Shape </li>
            <li>Brackets</li>
            <li>Dash Controller & Under Dash Module with Wiring Harness and Hardware</li>
          </ul>
        </div>
        <div class='lav-inc__block'>
          <div class='lav-inc__block-title'>SOLD SEPARATELY</div>
          <ul class='lav-inc__list'>
            <li>Underside Low-Profile Mounts</li>
            <li>Light Covers</li>
          </ul>
        </div>
      </div>
    </div>
  `;

  // <form class="lav-quest__form">
  //   <textarea class='lav-quest__area' name="lav-quest__area" placeholder="Type here and we’ll contact you the same day" required=""></textarea>
  //   <input type="email" name="question-email" placeholder="Email to respond" required="">
  //   <button class="btn btn-success lav-quest__btn" type="submit" value="Submit">Submit</button>
  // </form>

  $('.items-info').prepend(blockEl);

  $('.lav-compability__call').on('click', function () {
    gaEvent('Call us/Compatibilit');
  });

  $('.lav-combo__zoom').on('click', function () {
    gaEvent('Zoom in combo diagram');
  });

  $('.lav-quest__call-btn').on('click', function () {
    gaEvent('Call us/Assist');
  });

  $('.owl-next').on('click', function () {
    gaEvent('right arrow images');
  });

  $('.owl-prev').on('click', function () {
    gaEvent('left arrow images');
  });

  document.querySelectorAll('.lav-options__item').forEach(item => {
    item.addEventListener('click', function () {
      if (item.innerText.includes('20 inch')) {
        gaEvent('20 inch option');
      } else if (item.innerText.includes('30 inch')) {
        gaEvent('30 inch option');
      }
      if (item.innerText.includes('40 inch')) {
        gaEvent('40 inch option');
      }
    });
  });
}

function initDescr() {
  if (!$('.lav-descr').length) {
    $('.prod_desc').css('display', 'none');

    $('.prod_desc')
      .before('<div class="lav-descr"></div>')
      .parent()
      .removeClass('col-lg-10')
      .addClass('col-lg-12')
      .next()
      .remove();
  }

  let tabTitle;
  $('.prod_desc .ui-tabs-nav .ui-tabs-anchor').each((i, el) => {
    tabTitle = $(el).text().trim();
    if (
      tabTitle.toLowerCase() == 'specs' &&
      $($(el).attr('href')).find('.product-spec').length
    ) {
      $('.lav-spec__table-wrap')
        .html('')
        .append(
          $($(el).attr('href'))
            .find('.product-spec')
            .addClass('lav-spec__table')
            .removeClass('product-spec')
        );

      $('.lav-spec__table tr td:first-child').each((i, el) => {
        setRowSpec(i, el);
      });
    } else {
      let descrBlock = $(document.createElement('div'))
        .addClass('lav-descr__block')
        .append(
          '<div class="lav-descr__title">' + $(el).text().trim() + ' </div>'
        )
        .append($($(el).attr('href')).html());
      $('.lav-descr').append(descrBlock);
    }
  });

  if (!$('.lav-spec__table-wrap table').length) {
    $('.lav-spec__table-wrap').css('display', 'none');
  } else {
    $('.lav-spec__table-wrap').css('display', 'block');
  }
}

function setRowSpec(index, el) {
  let textTitle;
  let textTip = false;
  switch ($(el).text().trim().toLowerCase()) {
    case 'total wattage':
      textTip = 'Is the power produced or used per second';
      break;
    case 'amp draw':
      textTip =
        'Amp Draw Correlates to the amount of amperage drawn from a 12V, 24V or 36V system.';
      break;
    case 'weight':
      textTip = 'Total weight of the product';
      break;
    case 'raw lumens':
      textTip = 'This is a measure of the theoretical output of a light.';
      break;
    case 'guarantee':
      textTip =
        'Provide a formal assurance, especially that certain conditions will be fulfilled relating to a product, service, or transaction.';
      break;
    case 'ip rating':
      textTip =
        'Is the measurement of protection that LED light will have against liquid (water) and solid (dirt, dust etc.) objects.';
      break;
    case 'e-mark':
      textTip =
        'The e-mark is an EU mark for approved vehicles and vehicle components sold into the EU.';
      break;
  }

  if (textTip) {
    textTitle = $(el).text().trim();
    $(el).append(
      `<div class="lav-spec__tip"><span span class="lav-spec__icon" >!</span><div class="lav-spec__tip-body"><div class="lav-spec__tip-title">${textTitle}</div><div class="lav-spec__tip-descr">${textTip}</div><span class="lav-spec__tip-close">×</span></div></div>`
    );

    $(el)
      .find('.lav-spec__icon')
      .on('click', function () {
        gaEvent('info tooltip on tech spec table');
        $('.lav-spec__tip-body').hide();
        $(this).siblings('.lav-spec__tip-body').show();
      });

    $(el)
      .find('.lav-spec__tip-close')
      .on('click', function () {
        gaEvent('close info tooltip on tech spec table');
        $(this).parent().hide();
      });
  }
}

function initOptions() {
  let optionName;
  $('.selector-wrapper .selector-wrapper').each((i, el) => {
    optionName = $(el).find('label').text().trim().toLowerCase();
    if (optionName == 'optics' || optionName == 'led') {
      $(el).prepend(
        $(document.createElement('div'))
          .addClass('lav-option__wrap')
          .append(
            '<span class="lav-option__caption modal-trigger" data-modal-target=".modal-' +
              optionName +
              '">What’s the difference?</span>'
          )
      );

      $(el).find('.lav-option__wrap').prepend($(el).find('label'));
    }
  });

  $('.lav-option__caption.modal-trigger').on('click', function () {
    if ($(this).data('modal-target').includes('optics')) {
      gaEvent("What's difference/Optics");
    } else {
      gaEvent("What's difference/LED");
    }
  });
}

function initModal() {
  let modalEl = `
  <div class="modal">
    <div class="modal__body modal-zoom">
      <img src="${REPO_DIR}/img/image-zoomed.jpeg" alt="Flood lights">
    </div>
    <div class="modal__body modal-optics">
      <div class='modal__head'>
        <div class='modal__head-title'>What’s the difference?</div>
        <button class="modal__close">
          <svg class="modal__close-icon" fill='white' xmlns="http://www.w3.org/2000/svg" width="357" height="357" viewBox="0 0 357 357"><path d="M357 35.7L321.3 0 178.5 142.8 35.7 0 0 35.7l142.8 142.8L0 321.3 35.7 357l142.8-142.8L321.3 357l35.7-35.7-142.8-142.8z"/></svg>
        </button>
      </div>
      <div class='modal__inner'>
        <div class='modal__inner-block'>
          <span>Combo</span> - Best of both worlds, the floods sit on the outside giving you the side blow-out of light while still shooting far with the Spots piercing far ahead.
        </div>
        <div class='modal__inner-block'>
          <span>Spot</span> - Great for those who need those piercing beams of light that seem to travel forever.
        </div>
        <div class='modal__inner-block'>
          <span>Flood</span> - Wide-spread light to illuminate the side and front of your rig. Perfect for those who want a wider cone of light than a spot.
        </div>
      </div>
    </div>

    <div class="modal__body modal-led">
      <div class='modal__head'>
        <div class='modal__head-title'>What’s the difference?</div>
        <button class="modal__close">
          <svg class="modal__close-icon" fill='white' xmlns="http://www.w3.org/2000/svg" width="357" height="357" viewBox="0 0 357 357"><path d="M357 35.7L321.3 0 178.5 142.8 35.7 0 0 35.7l142.8 142.8L0 321.3 35.7 357l142.8-142.8L321.3 357l35.7-35.7-142.8-142.8z"/></svg>
        </button>
      </div>
      <div class='modal__inner'>
        <div class='modal__inner-block'>
        Our <span>5W</span> LEDs produce over 75% better light output than our <span>3W</span> and are way more efficient, keeping the power draw very low.
        </div>
      </div>
    </div>
  </div>
  `;

  $('body').append(modalEl);
  $('.modal__close').click(function (e) {
    e.preventDefault();
    modalClose();
    if (
      $(this).closest('.modal__body').hasClass('modal-led') ||
      $(this).closest('.modal__body').hasClass('modal-optics')
    ) {
      gaEvent("close What's difference");
    }
  });

  $('.modal').click(function (e) {
    if ($(e.target).hasClass('modal_active')) {
      if (
        $('.modal-led').css('display') == 'block' ||
        $('.modal-optics').css('display') == 'block'
      ) {
        gaEvent("close What's difference");
      }
      modalClose();
    }
  });

  function modalClose() {
    $('.modal').removeClass('modal_active');
    $('.modal__body').slideUp();
  }

  $(document).on('click', '.modal-trigger', function (e) {
    e.preventDefault();
    let target = $(this).data('modal-target');
    $('.modal').addClass('modal_active');
    $(target).slideDown();
  });
}

function test_accessory() {
  let products = getAcc();
  let url = window.location.href;
  let title = $('#content .title h1').text().trim().toLowerCase();
  if (
    url.indexOf('double-row-led/products') > -1 ||
    title.includes('double row')
  ) {
    additional_prod_html_generate(products['double-row-led']);
  }
  if (
    url.indexOf('single-row-led-light-bars/products') > -1 ||
    title.includes('single row')
  ) {
    additional_prod_html_generate(products['single_rows']);
  }
  if (
    url.indexOf('led-light-pods/products') > -1 ||
    title.includes('pod light')
  ) {
    additional_prod_html_generate(products['led_light_pods']);
  }
  if (
    products['accentLightsProdsUrls'].indexOf(window.location.pathname) > -1
  ) {
    additional_prod_html_generate(products['rbg_controller']);
  }
}

function additional_prod_html_generate(additionalProdObj) {
  var html = `
    <div class="lav-dropdown__wrap">
      <div class="lav-dropdown">
        <div class="lav-dropdown__head">Mounting and Accessories</div>
        <div class="lav-dropdown__list"></div>
      </div>
    </div>
  `;

  $('#addToCartForm .selector-wrapper').first().append(html);

  $('.lav-dropdown__head').on('click', function () {
    if ($('.lav-dropdown__head').hasClass('active')) {
      gaEvent('close Mounting and Accessories');
    } else {
      gaEvent('unfold Mounting and Accessories');
    }
    if (!$('.lav-dropdown__item.active').length) {
      $('.lav-dropdown__head').toggleClass('active');
      $('.lav-dropdown__list').slideToggle();
    }
  });

  $.each(additionalProdObj, function (key, value) {
    let el = document.createElement('div');
    $(el).addClass('lav-dropdown__item');
    // data-id='${value['id']}'
    $(el).append(`
      <a href="${value['url']}" class='lav-dropdown__item-left'> 
        <img src="${value['img']}" alt="" />
        <span>${value['name']}</span>
      </a>
      <div class='lav-dropdown__item-right'>
        <span class="lav-dropdown__item-price">&#36;${value['price']}</span>
        <a href='${value['url']}' type="button" class="lav-dropdown__item-cart">+Add</a>
      </div>
    `);

    if (value['idList']) {
      $(el).append(`<div class='lav-dropdown__item-options'></div>`);
      for (let item of value['idList']) {
        let priceItem = item['price'] ? item['price'] : value['price'];
        $(el)
          .find('.lav-dropdown__item-options')
          .append(
            `<div class='lav-dropdown__item-option' data-id='${item['id']}' data-price='${priceItem}'>${item['name']}</div>`
          );
      }
    } else {
      $(el).data('id', value['id']);
    }

    $('.lav-dropdown__list').append($(el));
  });

  $('.lav-dropdown__item-option').on('click', function () {
    $(this).addClass('active').siblings('.active').removeClass('active');
    setTotalPrice();
  });

  $('.lav-dropdown__item-cart').on('click', function (e) {
    e.preventDefault();
    gaEvent('Add item on Mounting and Accessories');
    if (
      !$(this)
        .closest('.lav-dropdown__item')
        .find('.lav-dropdown__item-option.active').length
    ) {
      $(this)
        .closest('.lav-dropdown__item')
        .find('.lav-dropdown__item-option')
        .first()
        .click();
    }
    $(this).closest('.lav-dropdown__item').toggleClass('active');
    if (!$(this).closest('.lav-dropdown__item.active').length) {
      $(this)
        .closest('.lav-dropdown__item')
        .find('.active')
        .removeClass('active');
    }
    setTotalPrice();
  });
}

function getAcc() {
  let additionalProducts = {
    'double-row-led': {
      1: {
        idList: [
          {
            id: '21116151748',
            name: '1.0'
          },
          {
            id: '17519288388',
            name: '1.25'
          },
          {
            id: '13395875844',
            name: '1.5'
          },
          {
            id: '1610025156',
            name: '1.75'
          },
          {
            id: '3459582468',
            name: '2.0'
          },
          {
            id: '13236978756',
            name: '2.25',
            price: '63.75'
          },
          {
            id: '3459582532',
            name: '2.5',
            price: '63.75'
          },
          {
            id: '13237126724',
            name: '3.0',
            price: '63.75'
          }
        ],
        name: 'O Type Bracket',
        price: '55.25',
        url: '/collections/led-light-bar-mounts-2/products/o-type-bracket-in-pair',
        img: '//cdn.shopify.com/s/files/1/0761/3599/products/accessories-o-type-bracket-in-pair-1_medium.jpg?v=1467206343'
      },

      2: {
        idList: [
          {
            id: '1609781188',
            name: 'Amber'
          },
          {
            id: '13927610948',
            name: 'Black'
          },
          {
            id: '26817119688',
            name: 'Red'
          },
          {
            id: '33012881653821',
            name: 'Smoke'
          }
        ],
        name: 'Lens cover',
        price: '21.25',
        url: '/collections/covers-hardware/products/lens-cover-for-10-dual-row-light',
        img: 'https://cdn.shopify.com/s/files/1/0761/3599/products/accessories-new-lens-cover-for-10-dual-row-light-1_medium.jpg?v=1449621325'
      },

      3: {
        id: 24992579528,
        name: 'Security Hardware',
        price: '21.25',
        url: '/collections/covers-hardware/products/security-hardware',
        img: 'https://cdn.shopify.com/s/files/1/0761/3599/products/Screen_Shot_2016-08-24_at_10.39.28_AM_medium.png?v=1472053578'
      },

      4: {
        id: 25072439240,
        name: 'Sound Dampeners',
        price: '25.50',
        url: '/collections/covers-hardware/products/sound-dampers',
        img: 'https://cdn.shopify.com/s/files/1/0761/3599/products/IMG_1975_medium.jpg?v=1472584246'
      }
    },
    single_rows: {
      1: {
        idList: [
          {
            id: '21116151748',
            name: '1.0'
          },
          {
            id: '17519288388',
            name: '1.25'
          },
          {
            id: '13395875844',
            name: '1.5'
          },
          {
            id: '1610025156',
            name: '1.75'
          },
          {
            id: '3459582468',
            name: '2.0'
          },
          {
            id: '13236978756',
            name: '2.25',
            price: '63.75'
          },
          {
            id: '3459582532',
            name: '2.5',
            price: '63.75'
          },
          {
            id: '13237126724',
            name: '3.0',
            price: '63.75'
          }
        ],
        name: 'O Type Bracket',
        price: '55.25',
        url: '/collections/led-light-bar-mounts-2/products/o-type-bracket-in-pair',
        img: '//cdn.shopify.com/s/files/1/0761/3599/products/accessories-o-type-bracket-in-pair-1_medium.jpg?v=1467206343'
      },

      2: {
        idList: [
          {
            id: '26689319304',
            name: 'Clear'
          },
          {
            id: '8932792500285',
            name: 'Black'
          },
          {
            id: '28547734372413',
            name: 'Amber'
          }
        ],
        name: 'Single Row Cover',
        price: '17.00',
        url: '/collections/covers-hardware/products/single-row-cover',
        img: 'https://cdn.shopify.com/s/files/1/0761/3599/products/Screen_Shot_2016-10-25_at_9.36.27_AM_medium.png?v=1507580376'
      },

      3: {
        id: 24992579528,
        name: 'Security Hardware',
        price: '21.25',
        url: '/collections/covers-hardware/products/security-hardware',
        img: 'https://cdn.shopify.com/s/files/1/0761/3599/products/Screen_Shot_2016-08-24_at_10.39.28_AM_medium.png?v=1472053578'
      },

      4: {
        id: 25072439240,
        name: 'Sound Dampeners',
        price: '25.50',
        url: '/collections/covers-hardware/products/sound-dampers',
        img: 'https://cdn.shopify.com/s/files/1/0761/3599/products/IMG_1975_medium.jpg?v=1472584246'
      }
    },
    led_light_pods: {
      1: {
        id: 32911125053501,
        name: 'GoPOD Clamp On Mount Kit',
        price: '72.25',
        url: '/products/new-black-oak-gopod-clamp-mount-mount-only?_pos=1&_sid=95e2d8dba&_ss=r',
        img: 'https://cdn.shopify.com/s/files/1/0761/3599/products/20502_medium.jpg?v=1602771016'
      },
      2: {
        idList: [
          {
            id: '1609951684',
            name: 'Amber'
          },
          {
            id: '1609971076',
            name: 'Black'
          },
          {
            id: '33012882079805',
            name: 'White'
          }
        ],
        name: 'Lens cover for 2" pod light',
        price: '17.00',
        url: '/collections/covers-hardware/products/lens-cover-for-2-work-light',
        img: 'https://cdn.shopify.com/s/files/1/0761/3599/products/accessories-new-lens-cover-for-2-work-light-1_medium.jpg?v=1596114332'
      },

      3: {
        id: 32911315763261,
        name: 'GoPOD Suction Cup Mount Kit',
        price: '72.25',
        url: '/products/new-gopod-suction-on-mount-mount-only?_pos=2&_sid=95e2d8dba&_ss=r',
        img: 'https://cdn.shopify.com/s/files/1/0761/3599/products/IMG_1987_medium.jpg?v=1602704583'
      },

      4: {
        id: 25532700360,
        name: '2-Piece Connect Cable',
        price: '29.75',
        url: '/collections/wiring-kits/products/connect-cable-for-2pcs',
        img: 'https://cdn.shopify.com/s/files/1/0761/3599/products/accessories-new-connect-cable-for-2pcs-1_medium.jpg?v=1449621334'
      }
    },
    rbg_controller: {
      1: {
        id: 32954904281149,
        name: 'RGB Controller - Black Oak LED',
        price: '46.75',
        url: '/products/new-rbg-controller-black-oak-led?_pos=1&_sid=fd602eedf&_ss=r',
        img: 'https://cdn.shopify.com/s/files/1/0761/3599/products/RGBControllerCroppedWebsite_medium.jpg?v=1605709083'
      }
    },
    accentLightsProdsUrls: [
      '/products/new-marine-accent-light',
      '/products/new-marine-accent-light-rgbw',
      '/products/new-marine-accent-light-black-housing',
      '/products/new-led-off-road-rock-lights',
      '/products/black-oak-led-dock-light-fld6',
      '/products/black-oak-led-underwater-light-fl3',
      '/products/black-oak-led-underwater-light-fl12',
      '/products/black-oak-led-underwater-light-fl6',
      '/products/33-36-foot-boat-led-lighting-kit-center-console-boat',
      '/products/21-26-foot-boat-led-lighting-kit-center-console-boat',
      '/products/27-32-foot-boat-led-lighting-kit-center-console-boat',
      '/products/16-20-foot-boat-led-lighting-kit-center-console-boat,',
      '/products/37-foot-larger-boat-led-lighting-kit-center-console-boat',
      '/products/new-marine-flush-mount-spreader-light'
    ]
  };
  return additionalProducts;
}
