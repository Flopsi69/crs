;(function () {
  console.debug('*** Experiment started ***')

  // Config for Experiment
  const config = {
    // dir: 'http://127.0.0.1:5500/petals/pdp_improvment',
    dir: 'https://flopsi69.github.io/crs/petals/pdp_improvment',
    clarity: ['set', 'exp_pdp', 'variant_1'],
    debug: false,
    isPassive: false,
    choosenColorId: null
  }

  // const orig = console.log
  // console.log = function (...args) {
  //   orig.apply(console, ['Debug:', ...args])
  // }

  // Styles for Experiment
  const styles = /* css */ `
  .drawer {
    z-index: 9999999999!important;
  }
  .cac .owlCustomCarouselThumbs, .cac .product__info-wrapper div.product__title, .cac .product__info-wrapper .price, .cac .product__info-wrapper .customProductImage, .cac .product__info-wrapper .product-form__input--dropdown, .cac .product__info-wrapper .product__description, .cac .product__info-wrapper .product-form__buttons, .cac .product__info-wrapper .custom.dwa, .cac .product__accordion {
    margin: 0;
  }
  .cac .owlCustomCarouselThumbs {
    margin: 0!important;
  }
.announcement-bar-section + .section-header + #MainContent {
  // margin-top: 35px;
}

.parent-variant {
  margin-left: 0!important;
  max-width: 100%;
  margin-top: 20px!important;
}
.customProductImage .icons_box {
  padding-bottom: 10px;
}
.fera-storeReviewsSummary.fera-widget-560969 {
  margin-bottom: -8px!important;
}
.fera-storeReviewsSummary-avgRatingWrapper {
  padding: 0!important;
}
.fera-storeReviewsSummary-avgRating {
  font-weight: 400!important;
}
.fera-storeReviewsSummary-wrapper {
  padding: 0 10px!important;
}
.product__title {
  margin-top: 10px;
}
.product__title>h1 {
  color: #121212;
  font-family: Assistant;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3;
  letter-spacing: 0.6px;
}
.customProductImage h3 {
  line-height: 1;
  padding-top: 2px;
  margin-top: 0;
  margin-bottom: 10px;
}

.product__info-container .lav-how {
  margin-top: 20px;
}
.lav-how {
  letter-spacing: 0;
}
.lav-how__block {
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  background: #F9F0F4;
  padding: 12px;
}
.lav-how__block + .lav-how__block {
  margin-top: 12px;
}
.lav-how__title {
  color: #000;
  font-family: Overlock;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 19.5px; /* 139.286% */
  letter-spacing: 0.4px;
  text-transform: uppercase;
}
.lav-how__descr {
  color: #000;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
}
.lav-how__descr a {
  color: #2E45E0;
  font-weight: 600;
}
.lav-how__list {
  display: flex;
  justify-content: space-between;
  gap: 3px;
}
.lav-how__title + .lav-how__descr {
  margin: 8px 0 14px;
}
.lav-how__item {
  position: relative;
  padding: 5px 0 5px 15px;
  margin: 6px 0;
  color: #000;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 13px;
}
.lav-how__item:before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 12px;
  height: 12px;
  background-image: url('${config.dir}/img/check.svg');
  background-size: contain;
  background-repeat: no-repeat;
}

.custom.dwa .dwa_formCustomJs {
  // display: none;
}

.lav-benefits {
  letter-spacing: 0;
  margin-bottom: 30px;
  margin-top: 20px;
}
.lav-benefit {
  padding: 16px 5px;
  display: flex;
  align-items: center;
  gap: 12px;
}
.lav-benefit__icon {
  flex-shrink: 0;
  line-height: 0;
}
.lav-benefit__title {
  color: #000;
  font-family: Overlock;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
}
.lav-benefit__title span {
  position: relative;
  color: #A72561;
  white-space: nowrap;
}
.lav-benefit__title span svg {
  position: absolute;
  left: 0;
  bottom: -5px;
}
.lav-benefit__descr {
  color: #000;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  margin-top: 6px;
}
.lav-benefit__descr a {
  color: #2E45E0;
  font-weight: 600;
}

.lav-review {
  padding: 12px 16px;
  border-radius: 4px;
  background: #FEF1E4;
  display: flex;
  gap: 14px;
  align-items: flex-start;
  letter-spacing: 0;
}
.lav-review__image {
  flex-shrink: 0;
  width: 52px;
  text-align: center;
  line-height: 0;
}
.lav-review__image img {
  max-width: 100%;
}
.lav-review__link {
  color: #000;
  font-size: 11px;
  font-style: normal;
  line-height: 20px;
  text-decoration: underline;
  white-space: nowrap;
  margin-top: 8px;
}
.lav-review__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}
.lav-review__title {
  color: #000;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
}
.lav-review__trust {
  line-height: 0;
}
.lav-review__descr {
  margin-top: 4px;
  color: #000;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
}
.lav-review__author {
  display: flex;
  align-items: center;
  gap: 7px;
  margin-top: 6px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 22.4px;
}


.lav-reels {
  letter-spacing: 0;
  margin: 28px 0 12px;
}
.lav-reels__title {
  color: #000;
  text-align: center;
  font-family: Overlock;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  text-transform: uppercase;
}
.lav-reels__list {
  margin-top: 20px;
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding: 0 15px;
  margin-left: -15px;
  margin-right: -15px;
}
.lav-reels__item {
  position: relative;
  flex-shrink: 0;
  width: 120px;
  height: 160px;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  background: #000;
}
.lav-reels__video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.lav-reels__views {
  display: flex;
  gap: 5px;
  align-items: center;
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: #fff;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  pointer-events: none;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
}

.lav-fullscreen-video {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #000;
  z-index: 2147483651;
  align-items: center;
  justify-content: center;
}
.lav-fullscreen-video.active {
  display: flex;
}
.lav-fullscreen-video__container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.lav-fullscreen-video__video {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
}
.lav-fullscreen-video__close {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 0 10px 1px rgba(0,0,0,.2);
  z-index: 2147483652;
}
.lav-fullscreen-video__close svg {
  width: 20px;
  height: 20px;
}

.parent-variant .select ul {
  margin-left: -15px;
  margin-right: -15px;
  padding-left: 15px;
  padding-right: 15px;
  // gap: 12px;
}
.parent-variant .select .lav-measure li a {
  // color: #000;
  // font-size: 13px!important;
  // font-weight: 600;
  // line-height: 10px;
  // letter-spacing: 0.6px;
  // border: 1px solid rgba(0, 0, 0, 0.24);
}
.product-form {
  // margin-top: 10px!important;
}

.ringSize_guide {
  // align-items: flex-start;
  // justify-content: flex-start;
  // gap: 12px;
}
.parent-variant .select .lav-measure li.jquery-grid-picker-item-selected a {
  color: #fff;
}
.lav-selected {
  color: #000;
  text-align: center;
  font-family: Assistant;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 19.5px;
  letter-spacing: 0.6px;
  margin-right: auto;
  margin-left: 6px;
}
.lav-selector__toggler .lav-selected {
  font-size: 13px;
  letter-spacing: 0.4px;
}

.parent-variant .select .lav-material li a {
  color: #000;
  font-weight: 600;
  line-height: 11px;
}
.cac .product__info-wrapper .product-form__input--dropdown + .product-form__input--dropdown {
  margin-top: 20px!important;
}
.parent-variant .select .lav-material li.jquery-grid-picker-item-selected a {
  color: #fff;
  background: #2D2D2D;
}
.lav-material-color {
  display: flex!important;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 8px;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  color: #000;
  text-align: center;
  font-family: Assistant;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 10px; 
  letter-spacing: 0.6px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.25);
}
.lav-sticky .lav-material-color {
  margin-bottom: 0;
}

.lav-sticky {
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  background: #FFF;
  z-index: 2147483649;
  transform: translateY(100%);
  transition: .3s;
  pointer-events: none;
  opacity: 0;
}
.lav-sticky.lav-gallery--opened {
  display: none!important;
}
.lav-sticky.active {
  transform: translateY(0%);
  pointer-events: auto;
  opacity: 1;
}
.lav-sticky__top {
  display: none;
  min-height: 48px;
  align-items: center;
  gap: 18px;
  padding: 7px 12px 9px;
  border-top: 1px solid rgba(0, 0, 0, 0.24);
}
.lav-sticky__top.active {
  display: flex;
}
.lav-sticky__price {
  margin-left: auto;
  color: #121212;
  font-family: Assistant;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 1.3px;
  white-space: nowrap;
}
.lav-sticky__bottom {
  display: flex;
  min-height: 48px;
}
.lav-sticky__add {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #000;
  background: #A4CEDD;
  color: #000;
  text-align: center;
  font-family: Assistant;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 1px;
  flex-grow: 1;
  cursor: pointer;
}
.lav-sticky__size {
  position: relative;
  min-width: 160px;
  border-top: 1px solid #D3D3D3;
  border-bottom: 1px solid #D3D3D3;
  padding: 10px 22px 10px 12px;
}
.lav-sticky__size-label {
  color: rgba(18, 18, 18, 0.75);
  font-family: Assistant;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 0;
}
.lav-sticky__size-value {
  color: #000;
  font-family: Assistant;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: 12px;
  letter-spacing: 0;
  margin-top: 3px;
}
.lav-sticky__size > svg {
  position: absolute;
  right: 12px;
  width: 7px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  margin-top: 2px;
}

.lavs-option {
  display: flex;
  gap: 10px;
  align-items: center;
  min-width: 0;
  // flex-grow: 1;
  // max-width: 50%;
}
.lavs-option {}
.lavs-option__facture {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 34px;
  height: 34px;
  flex-shrink: 0;
  line-height: 0;
  box-shadow: 0 0 0 3px #FFF inset;
  border: 1px solid black;
  background: black;
}
.lavs-option__info {
  min-width: 0;
}
.lavs-option__label {
  color: rgba(18, 18, 18, 0.75);
  font-family: Assistant;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.lavs-option__icon svg {
  width: 7px;
}
.lavs-option__value {
  color: #000;
  font-family: Assistant;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: 12px;
  letter-spacing: 0;
  margin-top: 3px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.lav-selector {
  display: none;
  position: fixed;
  align-items: flex-end;
  z-index: 2147483650;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%);
}
.lav-selector-opened {
  z-index: 999999!important;
}
.lav-selector.active {
  display: flex;
}
.lav-selector__inner {
  position: relative;
  z-index: 2147483651;
  padding: 24px 12px;
  background: #fff;
  width: 100%;
  transform: translateY(100%);
  transition: .3s;
  min-height: 300px;
}
.lav-selector__inner.active {
  transform: translateY(0%);
}
.lav-selector__close {
  position: absolute;
  right: 22px;
  top: -40px;
}
.lav-selector__toggler ul {
  display: flex;
  overflow: auto;
  margin: 0 -12px;
  padding: 10px 12px 0;
  flex-wrap: wrap;
  gap: 16px;
}
.lav-selector__toggler ul.lav-measure {
  // padding-bottom: 8px;
}
.lav-selector__toggler ul.lav-material {
  padding-top: 23px;
  gap: 32px 16px;
  padding-bottom: 28px;
  margin-bottom: -15px;
}
.lav-selector__toggler .jquery-grid-picker-item-selected {
  background: black;
  color: #fff;
}
.lav-selector__toggler .form__label, .lav-selector__toggler .ringSize_guide p {
  margin-bottom: 0;
  font-size: 13px;
  font-weight: 400;
  line-height: 19.5px;
  color: rgba(18, 18, 18, 0.75);
  letter-spacing: 0.4px;
}
.lav-selector__toggler .form__label {
  display: flex;
}
.lav-selector__toggler .form__label:after {
  content: ':';
}
.lav-selector__toggler .lav-measure a {
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  font-family: Assistant;
  font-size: 9px;
  font-style: normal;
  font-weight: 600;
  line-height: 10px;
  letter-spacing: 0.6px;
  padding-left: 4px;
  padding-right: 4px;
  height: 100%;
  min-height: 40px;
  border-color: #000;
  width: 57px;
  color: #000;
}
.lav-selector__toggler .lav-measure .jquery-grid-picker-item-selected a {
  color: #fff;
}
.lav-selector__toggler .lav-material li {
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 57px;
}
.lav-selector__toggler .lav-material a {
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  font-family: Assistant;
  font-size: 9px;
  font-style: normal;
  font-weight: 400;
  line-height: 10px;
  letter-spacing: 0.6px;
  padding-left: 4px;
  padding-right: 4px;
  height: 100%;
  min-height: 40px;
  border-color: #000;
}
.product-form__buttons .product-form__submit {
  min-height: 56px!important;
  margin-left: 12px;
  padding-left: 15px;
  padding-right: 15px;
}
.product-form__buttons .product-form__submit span {
  display: flex;
  align-items: center;
  font-size: 16px;
}
.product-form__buttons .product-form__submit span i {
  display: flex;
  align-items: center;
  font-style: normal;
}
.product-form__buttons .product-form__submit:disabled span i {
  display: none;
}
.satcb_btn .product-form__submit span i {
  display: none;
}
.product-form__buttons .product-form__submit span svg {
  margin: 0 10px;
}
.quantity:after {
  outline: 1px solid #000;;
}
quantity-input.quantity, .product-form__buttons .quantity {
  max-height: 56px;
  height: 56px;
}
@media(max-width: 767px) {
  #satcb_bar {
    display: none!important;
  }

}
.lav-carousel-trust {
  object-position: top;
}

.owlCustomCarouselThumbs {
  overflow: visible;
  padding: 0 10px;
}
.owlCustomCarouselThumbs .owl-item {
  line-height: 0;
  width: auto !important;
  margin-right: 10px !important;
}
.owlCustomCarouselThumbs .owl-stage-outer {
  margin-left: 0;
}
.owlCustomCarouselThumbs .owl-nav {
  min-height: auto;
  left: 0;
}
.customCarouselForMbl {
  overflow: hidden;
  margin-left: -15px;
  margin-right: -15px;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 27px;
}
ul.owlCustomCarousel img {
  max-height: 305px;
}
ul.owlCustomCarousel {
  right: 0;
  padding: 0 17px;
}
.customCarouselForMbl .owlCustomCarousel .owl-nav {
  padding: 0;
  left: -10px;
  right: -10px;
  width: initial;
}
.customCarouselForMbl .owlCustomCarousel .owl-nav button {
  margin-right: 0;
  line-height: 1;
  padding-bottom: 5px !important;
}
.customCarouselForMbl .owlCustomCarousel .owl-nav button span {
  font-size: 36px;
}
.custom_cnp .cnp_del img {
  pointer-events: none;
}
.lav-options {
  position: relative;
  border: 1px solid #121212;
  background: rgba(255, 255, 255, 0.00);
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 14px;
}
.lav-options span {
  color: currentColor;
  font-size: 12px;
  font-weight: 500;
}
.product-form__input .form__label {
  font-size: 15px;
  line-height: 19.5px;
  letter-spacing: 0.6px;
}
.parent-variant .select ul li a {
  width: 56px;
  min-width: 56px;
}
.jquery-grid-picker-item {
  position: relative;
}
.parent-variant .select ul li.jquery-grid-picker-item-selected {
  border: none;
}
.jquery-grid-picker-item[data-jquery-grid-picker-value="14k White Gold"]:before, .jquery-grid-picker-item[data-jquery-grid-picker-value="14k Yellow Gold"]:before {
  content: 'BESTSELLER';
  position: absolute;
  top: -13px;
  left: 0;
  right: 0;
  margin: auto;
  color: #C32275;
  text-align: center;
  font-family: Assistant;
  font-size: 9px;
  font-style: normal;
  font-weight: 600;
  line-height: 11px;
  letter-spacing: 0.4px;
}
.jquery-grid-picker-item[data-jquery-grid-picker-value*="14"]:after {
  content: '+ Get FREE Stone Color';
  position: absolute;
  top: 100%;
  padding-top: 4px;
  left: 0;
  right: 0;
  margin: auto;
  color: #C32275;
  text-align: center;
  font-family: Assistant;
  font-size: 9px;
  font-style: normal;
  font-weight: 600;
  line-height: 11px;
  letter-spacing: 0.6px;
}
.parent-variant .select ul.lav-material {
  padding-top: 23px;
  padding-bottom: 40px!important;
  margin-bottom: 0!important;
}
.product-form__input.lav-material-container .form__label {
  display: flex;
  margin-bottom: 0;
}
.product-form__input.lav-material-container .form__label:after {
  content: ':';
  color: rgba(18, 18, 18, 0.75);
  text-align: center;
  font-family: Assistant;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 19.5px;
  letter-spacing: 0.6px;
}
.ringSize_guide p {
  margin-bottom: 10px;
}
.form__label {
  margin-bottom: 8px;
}
.lav-options svg {
  transform: rotate(90deg);
}
.product-form__input--dropdown .lav-measure {
  display: none!important;
}
.lav-options select {
  position: absolute;
  border: none;
  outline: none;
  opacity: 0;
  z-index: 1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.lav-colors {
  position: relative;
  letter-spacing: 0;
  margin-bottom: 16px;
}
.lav-colors__title {
  color: rgba(18, 18, 18, 0.75);
  font-family: Assistant;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 19.5px;
  letter-spacing: 0.6px;
}
.lav-selector__toggler .lav-colors__title {
  letter-spacing: 0.4px;
  font-size: 13px;
}
.lav-colors__title span {
  color: #000;
  margin-left: 6px;
}
.lav-colors__list {
  overflow: auto;
  margin-top: 20px;
  margin-left: -15px;
  margin-right: -15px;
  padding: 0 15px;
  display: flex;
  gap: 15px;
}
.lav-selector .lav-colors__list {
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 24px;
}

.lav-color {
  flex-shrink: 0;
  border: 1px solid #000;
  background: #FFF;
  text-align: center;
  padding: 8px;
  color: rgba(18, 18, 18, 0.75);
  font-family: Assistant;
  font-size: 9px;
  font-style: normal;
  font-weight: 600;
  line-height: 10px;
  width: 56px;
  cursor: pointer;
}
.lav-colors--disabled .lav-color:not([data-color="Original/ No color"]) {
  opacity: 0.6;
  border: 1px solid #7C7C7C;
}
.lav-color.active {
  background: #2D2D2D;
  font-weight: 600;
  color: #fff;
}
.lav-color__image {
  position: relative;
  line-height: 0;
}
.lav-color__image svg {
  position: absolute;
  right: -2px;
  top: 1px;
}
.lav-color__image img {
  width: 28px;
  height: 28px;
}
.lav-color__caption {
  margin-top: 8px;
  letter-spacing: 0.6px;
}
.lav-colors__note {
  color: #000;
  font-family: Assistant;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.6px;
  padding: 4px 0;
}
.lav-colors__note--highlight {
  padding: 4px 8px 4px 32px;
  transition: opacity 0.7s;
  border-radius: 4px;
  color: #fff;
  background: #2D2D2D url('${config.dir}/img/stones-bg.png') left no-repeat;
  background-size: contain;
}
.lav-colors .lav-colors__note--highlight {
  position: absolute;
  top: -20px;
  left: 25px;
  right: 25px;
  pointer-events: none;
  opacity: 0;
}
.lav-colors__list + .lav-colors__note {
  margin-top: 8px;
}
.lav-selector .lav-colors__note--highlight {
  margin-top: 10px;
}
.lav-selector .lav-colors__note--highlight a {
  color: #fff;
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 2px;
}
.lav-colors .lav-colors__note--highlight_active {
  opacity: 1;
}
.lav-colors__note span {
  font-weight: 800;
}
@media(min-width: 768px) {
  .product__title>h1 {
    font-size: 40px;
  }
  .parent-variant .select ul.lav-material {
    padding-bottom: 30px!important;
  }
  .customProductImage h3 {
    padding-top: 8px;
  }
  .lav-colors__list {
    flex-wrap: wrap;
    margin-top: 18px;
  }
  .lav-colors .lav-colors__note--highlight {
    left: -2px;
    right: 0;
  }
  .lav-colors__note:not(.lav-colors__note--highlight) {
    padding-left: 8px;
    padding-right: 8px;
  }
  .product-form__input--dropdown + .product-form__input--dropdown {
    margin-top: 16px!important;
  }
  .lav-material-wrap:before, .lav-material-wrap:after, .lav-material-wrap select {
    display: none!important;
  }
  .lav-material-wrap > ul {
    display: flex!important;
  }
  .parent-variant .select ul {
    flex-wrap: wrap;
  }
  .lav-sticky {
    display: none!important
  }
}
`

  const stylesEl = document.createElement('style')
  stylesEl.classList.add('lav-exp-styles')
  stylesEl.innerHTML = styles

  // *** Logic *** //
  initExp()

  async function initExp() {
    await waitFor(() => document.head && document.body, false, { ms: 20 })

    if (document.querySelector('.lav-exp-styles')) return

    document.head.appendChild(stylesEl)

    console.debug('** InitExp **')

    initModal()
    addSlideInModal()

    waitFor('.fera-storeReviewsSummary').then(() => {
      _$('.product__title').insertAdjacentElement('beforebegin',
        _$('.fera-storeReviewsSummary'));
    });

    // Mail instructions
    waitFor('.custom.dwa .dwa_formCustomJs a', () => {
      _$('.custom.dwa .dwa_formCustomJs a').addEventListener('click', function (e) {
        e.preventDefault()
        openModal()
      })
    })

     waitFor('.accordion__content a[href="/pages/sending-your-petals-cremations-breastmilk"]', () => {
      _$('.accordion__content a[href="/pages/sending-your-petals-cremations-breastmilk"]').addEventListener('click', function (e) {
        e.preventDefault()
        openModal()
      })
    })

    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('lav-selector')) {
        let section = 'Sticky color selector';
        if (_$('.lav-selector__toggler .lav-measure')) {
          section = 'Sticky size selector'
        }
        if (_$('.lav-selector__toggler .lav-material')) {
          section = 'Sticky material selector'
        }
        pushDataLayer('exp_color_sticky_click', 'Close Overlay', 'click', section);
        closeSelector()
      }
    })

    // if (_$(".product-form__buttons") && _$('.product__column-sticky quantity-input.quantity')) {
    //   _$(".product-form__buttons").insertAdjacentElement('afterbegin', _$('.product__column-sticky quantity-input.quantity'))
    // }

    waitFor(
      () => _$$('variant-selects li a').length && _$('#satcb_bar') && _$('.form .product-form__submit'),
      () => {
        _$$('.product-form__submit').forEach(btn => {
          btn.addEventListener('click', () => {
            if (btn.disabled) return;
            if (_$('.drawer-cart-items')) {
            _$('.drawer-cart-items').innerHTML = '';
            }
            waitFor('#CartDrawer-CartItems .single-cart-item', () => {
              if (_$$('#CartDrawer-CartItems .single-cart-item').length) {
                setTimeout(() => {
                  addNoteRecord();
                }, 1400);
              }
            })
          });
        });
        
        initFuncHandler();

        waitFor('.product-form__buttons .product-form__submit span').then(() => {
          if (_$('.product-form__buttons .product-form__submit:disabled')) return;
          _$('.product-form__buttons .product-form__submit span').innerHTML = _$('.product-form__buttons .product-form__submit span').textContent + "<i>" + getSvg('priceDivider') + getPrice() + '</i>';
        });

        initMutation('product-modal', (mut) => {
          if (_$('product-modal[open]')) {
            _$('.lav-sticky').classList.add('lav-gallery--opened')
          } else {
            _$('.lav-sticky').classList.remove('lav-gallery--opened')
          }
        })

        initMutation('[id*="price-template"]', () => {
          if (!_$('.lav-sticky__price')) return
          _$('.lav-sticky__price').innerHTML = getPrice()
          setTimeout(() => {
            const newPrice = getPrice();
            const isDisabled = _$('.product-form__buttons .product-form__submit:disabled');
            if (_$('.lav-sticky__add')) {
              _$('.lav-sticky__add').innerText = isDisabled ? 'Unavailable' : 'Add to cart';
            }
            if (isDisabled || _$('.product-form__buttons .product-form__submit span').textContent.includes(newPrice)) return;
            _$('.product-form__buttons .product-form__submit span').innerHTML = _$('.product-form__buttons .product-form__submit span').textContent + "<i>" + getSvg('priceDivider') + newPrice + '</i>';
          }, 50);
        })

        initMutation('.product__info-container', (mutations) => {
          if (mutations.type !== 'childList') return;
          if (!(mutations.previousSibling instanceof HTMLElement) || !mutations.previousSibling?.classList.contains('parent-variant')) return;

          initFuncHandler()
        });

      }, { ms: 50 })
  }
  
  function initFuncHandler() {
    // if (_$(".product-form__buttons") && _$('.product__column-sticky quantity-input.quantity')) {
    //   _$(".product-form__buttons").insertAdjacentElement('afterbegin', _$('.product__column-sticky quantity-input.quantity'))
    // }
    addSticky();
    handleStickyPrice()
    addColorsOptions();
    updateSizeAndLength()
    updateMaterial()
    addLabelHandler()
  }

  async function handleStickyPrice() {
    await waitFor(() => _$('.lav-sticky__top'), false)

    _$('.lav-sticky__top').classList.add('active')

    _$('.lav-sticky__top').insertAdjacentHTML(
      'beforeend',
      /*html*/ `
        <div class='lav-sticky__price'>
          ${getPrice()}
        </div>
      `
    )
  }

  function getPrice() {
    return _$('.product .product__info-wrapper .price-item--sale')?.innerHTML || _$('.product .product__info-wrapper .price-item--regular').innerHTML()
  }

  async function updateGallery() {
    await waitFor(() => typeof $ === 'function', false, { ms: 20 })

    const mainCarousel = $('.owlCustomCarousel.owl-carousel')
    const thumbsCarousel = $('.owlCustomCarouselThumbs')

    // Add new slide to main carousel with proper li element structure
    const newSlide1 = /*html*/ `
    <li class="owlCustomCarousel">
      <img src="${config.dir}/img/review-slide-1.png" />
    </li>
  `
    const newSlide2 = /*html*/ `
    <li class="owlCustomCarousel">
      <img class='lav-carousel-trust' src="${config.dir}/img/review-slide-2.png" />
    </li>
  `

    const newThumb1 = /*html*/ `
    <button class="owlCustomCarouselThumb_Item">
      <img src="${config.dir}/img/review-slide-1.png" />
    </button>
  `

    const newThumb2 = /*html*/ `
    <button class="owlCustomCarouselThumb_Item">
      <img class='lav-carousel-trust' src="${config.dir}/img/review-slide-2.png" />
    </button>
  `

    mainCarousel
      .trigger('add.owl.carousel', [newSlide1])
      .trigger('add.owl.carousel', [newSlide2])
      .trigger('refresh.owl.carousel')
    thumbsCarousel
      .trigger('add.owl.carousel', [newThumb1])
      .trigger('add.owl.carousel', [newThumb2])
      .trigger('refresh.owl.carousel')
    
     // Sync navigation carousel with main carousel
    mainCarousel.on('changed.owl.carousel', function(event) {
      const currentIndex = event.item.index
      const totalItems = event.item.count
      const visibleItems = event.page.size
      
      // Calculate which thumbnail should be in focus
      let targetIndex = currentIndex
      
      // If we're near the end, adjust the target to keep thumbs visible
      if (currentIndex >= totalItems - visibleItems) {
        targetIndex = totalItems - visibleItems
      }
      
      // Scroll thumbs carousel to show the active thumbnail
      thumbsCarousel.trigger('to.owl.carousel', [targetIndex, 150, true])
    })

    // Optional: Also sync when thumbnail is clicked
    thumbsCarousel.on('click', '.owlCustomCarouselThumb_Item', function(e) {
      const index = $(this).index()
      mainCarousel.trigger('to.owl.carousel', [index, 150, true])
    })
  }

  async function isDisableColorOption() {
    await waitFor(() => meta?.product?.id, false, { ms: 20 })
    const disableIds = [
      7944519745710,
      7877448564910,
      7969783218350,
      7969784299694,
      7877432115374,
      8104639004846,
      7944502870190,
      7877431460014,
      7881703358638,
      7934585962670,
      7881805693102,
      7969786462382,
      7969784725678,
      8107754324142,
      7944517189806,
      7842276901038,
      7911239123118,
      8032775602350,
      7881703227566,
      8033819984046,
      7944520368302,
      7881703915694,
      8081429397678,
      7842520334510,
      7944503165102,
      7949056606382,
      7944502444206,
      7969784463534,
      7982459551918,
      7982458273966,
      7944528461998,
      7949053165742,
      8104637399214,
      8164110925998,
      7911232831662,
      8206856323246,
      7982460698798,
      7877448728750,
      7982459945134,
      7911232110766,
      7949053001902,
      7994446512302,
      8069063868590,
      7982455062702,
      7982460928174,
      7842556543150,
      7955876511918,
      8733944610990,
      7982457618606,
      8007314145454,
      7982451949742,
      8007291994286,
      8007321649326,
      8007305363630,
      8007299432622,
      8104636285102,
      7885311541422,
      7982458601646
    ]

    const productId = meta.product.id;

    return disableIds.includes(productId)
  }

  function addSticky() {
    if (_$('.lav-sticky')) {
      _$('.lav-selector__toggler').innerHTML = '';
      _$('.lav-sticky__top').innerHTML = '';
      _$('.lav-sticky__size')?.remove()
      initStickyIntersection();
      return;
    }
    const markup = /* html */ `
      <div class="lav-sticky">
        <div class="lav-sticky__top">
        </div>
        <div class="lav-sticky__bottom">
          <div class='lav-sticky__add'>
            Add to cart
          </div>
        </div>
      </div>

      <div class='lav-selector'>
        <div class='lav-selector__inner'>
          <div class='lav-selector__close'>
            ${getSvg('closeWhite')}
          </div>
          <div class='lav-selector__toggler'></div>
        </div>
      </div>
    `

    // _$('#satcb_bar').insertAdjacentHTML('afterend', markup)
    document.body.insertAdjacentHTML('afterbegin', markup)

    _$('.lav-selector__close').addEventListener('click', () => {
      let section = 'Sticky color selector';
      if (_$('.lav-selector__toggler .lav-measure')) {
        section = 'Sticky size selector'
      }
      if (_$('.lav-selector__toggler .lav-material')) {
        section = 'Sticky material selector'
      }
      pushDataLayer('exp_color_sticky_click', 'Close', 'click', section);
      closeSelector()
    })

    _$('.lav-sticky__add').addEventListener('click', () => {
      pushDataLayer('exp_color_sticky_button', 'Add to cart', 'click', 'Sticky block');
      _$('.form .product-form__submit').click()
    })

    initStickyIntersection();

    function initStickyIntersection() {
      if (document.querySelector('.parent-variant')) {
        initIntersection('.parent-variant', ({ isIntersecting }) => {
          if (isIntersecting) {
            _$('.lav-sticky').classList.remove('active')
          } else {
            _$('.lav-sticky').classList.add('active')
          }
        })
      } else if (document.querySelector('.product-form__buttons .product-form__submit')) {
        initIntersection('.product-form__buttons .product-form__submit', ({ isIntersecting }) => {
          if (isIntersecting) {
            _$('.lav-sticky').classList.remove('active')
          } else {
            _$('.lav-sticky').classList.add('active')
          }
        })
      }
    }
  }

  async function addColorsOptions() {
    const isDisable = await isDisableColorOption()

    if (isDisable) return

    const items = [
      {
        name: 'Original/ No color',
        img: 'original.png',
        id: 1
      },
      {
        name: 'White',
        img: 'white.png',
        id: 2
      },
      {
        name: 'Black',
        img: 'black.png',
        id: 3
      },
       {
        name: 'Dodger Blue',
        img: 'blue.png',
        id: 4
      },
      {
        name: 'Pink',
        img: 'pink.png',
        id: 5
      },
      {
        name: 'Violet',
        img: 'violet.png',
        id: 6
      },
       {
        name: 'Red',
        img: 'red.png',
        id: 7
      },
      {
        name: 'Light Green',
        img: 'green.png',
        id: 8
      },
      {
        name: 'Purple',
        img: 'purple.png',
        id: 9
      },
      {
        name: 'Gold',
        img: 'gold.png',
        id: 10
      }
    ]

    const is14K = _$('.lav-material .jquery-grid-picker-item-selected').dataset.jqueryGridPickerValue?.toLowerCase().includes('14k');

    const markup = /*html*/ `
      <div class="lav-colors">
        <div class="lav-colors__note lav-colors__note--highlight">
          Custom stone color selection is available at no extra cost with any 14k gold material.
        </div>
        <div class="lav-colors__title">
          Stone Color:<span>Original/ No color</span>
        </div>
        <div class="lav-colors__list ${is14K ? '' : 'lav-colors--disabled'}">
          <div class="lav-colors__item lav-color">
            <div class="lav-color__image">
              <img src="${config.dir}/img/color-original.png" />
            </div>
            <div class="lav-color__caption">Original/ No color </div>
          </div>

          <div class="lav-colors__item lav-color active">
            <div class="lav-color__image">
              <img src="${config.dir}/img/color-original.png" />
            </div>
            <div class="lav-color__caption">Original/ No color </div>
          </div>
        </div>
        <div class="lav-colors__note">
          <span>*</span> Stone color cannot be changed for items created with Fabric&nbsp;or&nbsp;Flowers.
        </div>
      </div>
    `

    let value, color;

    _$('variant-selects .product-form__input').insertAdjacentHTML('afterend', markup)

    visibilityEvent('.lav-colors', () => {
      pushDataLayer('exp_color_selector_view', 'Stone Color Selector', 'view', 'Product Info');
    })

    // Fill items
    _$('.lav-colors__list').innerHTML = ''

    for (const item of items) {
      const colorEl = document.createElement('div')
      colorEl.classList.add('lav-color')
      colorEl.dataset.id = item.id
      colorEl.dataset.color = item.name
      
      colorEl.innerHTML = /*html*/ `
        <div class="lav-color__image">
          ${item.id === 1 ? getSvg('defaultColor') : ''}
          <img src="${config.dir}/img/color-${item.img}" />
        </div>
        <div class="lav-color__caption">${item.name}</div>
      `

      if (!is14K && config.choosenColorId !== null) {
        config.choosenColorId = null
        colorEl.classList.add('active', 'lav-color--default')
        value = item.name
        color = _$('.lav-color__image', colorEl).outerHTML
      } else if (config.choosenColorId !== null && config.choosenColorId === item.id) {
        colorEl.classList.add('active')
        value = item.name
        color = _$('.lav-color__image', colorEl).outerHTML
      } else if (item.id === 1 && config.choosenColorId === null) {
        value = item.name
        color = _$('.lav-color__image', colorEl).outerHTML
        colorEl.classList.add('active', 'lav-color--default')
      }

      colorEl.addEventListener('click', function () {
        if (is14K === false && item.id !== 1) {
          const highlightEl = _$('.product__info-container .lav-colors__note--highlight')

          if (!config.isPassive) {
            pushDataLayer('exp_color_select', colorEl.innerText.trim(), 'click', 'Product Info', 'inactive');
          }
          
          if (highlightEl.classList.contains('lav-colors__note--highlight_active')) return;

          highlightEl.classList.add('lav-colors__note--highlight_active')

          setTimeout(() => {
            highlightEl.classList.remove('lav-colors__note--highlight_active')
          }, 4000);

          return
        }


        if (!config.isPassive) {
          pushDataLayer('exp_color_select', colorEl.innerText.trim(), 'click', 'Product Info', 'active');
        }

        if (this.classList.contains('active')) return

        config.choosenColorId = item.id

        _$$('product-info .lav-color').forEach((el) => el.classList.remove('active'))
        this.classList.add('active')

        _$('product-info .lav-colors__title span').innerText = item.name
        if (_$('.lav-selector-color')) {
          _$('.lav-selector-color .lavs-option__value').innerText = item.name
          _$('.lav-selector-color .lav-color__image').outerHTML = colorEl.querySelector('.lav-color__image').outerHTML
        }
      })

      _$('product-info .lav-colors__list').insertAdjacentElement('beforeend', colorEl)
    }

    addToSticky(value, 'Stone Color:', color)

    async function addToSticky(value, label, color) {
      await waitFor(() => _$('.lav-sticky__top'), false)

      _$('.lav-sticky__top').classList.add('active')

      // _$('.lav-sticky__top').insertAdjacentHTML(
      _$('.lav-sticky__price').insertAdjacentHTML(
        'beforebegin',
        /*html*/ `
          <div class='lav-sticky__option lavs-option lav-selector-color'>
            ${color}
            <div class="lavs-option__info">
              <div class="lavs-option__label">${label}</div>
              <div class="lavs-option__value">${value}</div>
            </div>
        
            <div class="lavs-option__icon">
              ${getSvg('chevronRight')}
            </div>
          </div>
        `
      )

      _$('.lav-selector-color').addEventListener('click', function (e) {
        e.preventDefault()
        pushDataLayer('exp_color_sticky_button', 'Color', 'click', 'Sticky block');
        rerender()
        openSelector()

        function rerender() {
          const headerHTML = _$('product-info .lav-colors__title').outerHTML
          const noteHTML = /*html*/ `
            <div class="lav-colors__note lav-colors__note--highlight">
              Custom stone color selection is available at no extra cost with any 14k gold material. <a href='#'>Select material</a>
            </div>
          `
          const bodyHTML = _$('product-info .lav-colors__list').outerHTML

          _$('.lav-selector__toggler').innerHTML = headerHTML + noteHTML + bodyHTML

          _$('.lav-selector__toggler .lav-colors__note--highlight a').addEventListener('click', (e) => {
            e.preventDefault()
            pushDataLayer('exp_color_sticky_select_material', 'Select material', 'click', 'Sticky block');
            config.isPassive = true;
            closeSelector(true)
            _$('.lav-selector-material').click()
            config.isPassive = false;
          })

          _$$('.lav-selector__toggler .lav-color').forEach((el, index) => {
            el.addEventListener('click', (e) => {
              e.preventDefault()

              if (is14K === false && el.dataset.id !== '1') {
                if (!config.isPassive) {
                  pushDataLayer('exp_color_sticky_click', el.innerText.trim(), 'click', 'Sticky color selector', 'inactive');
                }

                return
              }

              if (!config.isPassive) {
                pushDataLayer('exp_color_sticky_click', el.innerText.trim(), 'click', 'Sticky color selector', 'active');
              }
              config.isPassive = true;
              _$(
                'product-info .lav-color:nth-child(' + (index + 1) + ')'
              ).click()
              config.isPassive = false;

              rerender()
              closeSelector(true)
            })
          })
        }
      })
    }
  }

  function addNoteRecord() {
    console.log('add Note')
    const noteEl = _$('#CartDrawer-Note')
    const colorEl = _$('product-info .lav-color.active')
    const colorId = colorEl?.dataset.id

    if (colorId == '1') return
    
    const colorText = colorEl.dataset.color
    const productTitle = _$('.product .product__title h1')?.innerText.trim()

    if (!productTitle) return

    const newRecord = 'Stone color: ' + colorText + ' - ' + productTitle;
    console.log('add Note', newRecord)

    if (!noteEl.value) {
      noteEl.value = newRecord
      dispatchNote();
      return
    }

    noteEl.value = noteEl.value + '\n' + newRecord
    dispatchNote();

    function dispatchNote() {
      // create the event
      const event = new Event('input', {
        bubbles: true,
        cancelable: true,
      });

      // dispatch it
      noteEl.dispatchEvent(event);
    }
  }

  function updateSizeAndLength() {
    const sizeEl = _$(
      'variant-selects [name="options[Size]"] + .jquery-grid-picker-widget'
    ) || _$(
      'variant-selects [name="options[Ring Size]"] + .jquery-grid-picker-widget'
    )

    const lengthEl = _$(
      'variant-selects [name="options[Chain Length]"] + .jquery-grid-picker-widget'
    )

    handleSize()
    handleLength()

    function handleSize() {
      if (!sizeEl) return

      sizeEl.classList.add('lav-measure', 'lav-size', 'lav-label-handler')

      sizeEl.closest('.select').style.display = 'none'

      // const selectedValue = _$(
      //   '.lav-measure .jquery-grid-picker-item-selected'
      // )?.getAttribute('data-jquery-grid-picker-value')

      const textValue = _$('.lav-measure .jquery-grid-picker-item-selected a')
        ?.innerText.trim()

      const label = sizeEl
        .closest('.product-form__input--dropdown')
        .querySelector('.form__label')?.innerText
      
      const newSelectorEl = document.createElement('div')
      newSelectorEl.classList.add('lav-options')
      newSelectorEl.innerHTML = /*html*/ `
        <span>${textValue}</span>
        ${getSvg('chevronRight')}
        <select name="lav-options-size"></select>
      `;

      _$$('.lav-measure li').forEach((el, index) => {
        const value = el.getAttribute('data-jquery-grid-picker-value')

        optionEl = document.createElement('option')
        optionEl.value = value
        optionEl.innerText = el.innerText.trim()
        optionEl.dataset.index = index;
        if (el.classList.contains('jquery-grid-picker-item-selected')) {
          optionEl.selected = true
        }

        _$('select', newSelectorEl).insertAdjacentElement('beforeend', optionEl)
      });

      _$('select', newSelectorEl).addEventListener('change', function (e) {
        console.log('fire change');
        const val = this.value;
        _$$('.lav-measure li').forEach((el) => {
          if (el.getAttribute('data-jquery-grid-picker-value') === val) {
            _$('span', newSelectorEl).innerText = el.innerText.trim();
            el.querySelector('a').click()
          }
        })
      });

      _$('.lav-measure').closest('.product-form__input--dropdown').insertAdjacentElement('beforeend', newSelectorEl)


      addToSticky(textValue, label)
    }

    function handleLength() {
      if (!lengthEl) return

      lengthEl.classList.add('lav-measure', 'lav-length', 'lav-label-handler')

      lengthEl.closest('.select').style.display = 'none'

      // const value = _$(
      //   '.lav-measure .jquery-grid-picker-item-selected'
      // )?.getAttribute('data-jquery-grid-picker-value')
      const textValue = _$('.lav-measure .jquery-grid-picker-item-selected a')
        ?.innerText.trim()

      const label = lengthEl
        .closest('.product-form__input--dropdown')
        .querySelector('.form__label')?.innerText

      const newSelectorEl = document.createElement('div')
      newSelectorEl.classList.add('lav-options')
      newSelectorEl.innerHTML = /*html*/ `
        <span>${textValue}</span>
        ${getSvg('chevronRight')}
        <select name="lav-options-size"></select>
      `;

      _$$('.lav-measure li').forEach((el, index) => {
        const value = el.getAttribute('data-jquery-grid-picker-value')

        optionEl = document.createElement('option')
        optionEl.value = value
        optionEl.innerText = el.innerText.trim();
        optionEl.dataset.index = index;
        if (el.classList.contains('jquery-grid-picker-item-selected')) {
          optionEl.selected = true
        }

        _$('select', newSelectorEl).insertAdjacentElement('beforeend', optionEl)
      });

      _$('select', newSelectorEl).addEventListener('change', function (e) {
        const val = this.value;
        _$$('.lav-measure li').forEach((el) => {
          if (el.getAttribute('data-jquery-grid-picker-value') === val) {
            _$('span', newSelectorEl).innerText = el.innerText.trim();
            el.querySelector('a').click()
          }
        })
      });

      _$('.lav-measure').closest('.product-form__input--dropdown').insertAdjacentElement('beforeend', newSelectorEl)
      
      addToSticky(textValue, label)
    }

    async function addToSticky(value, label) {
      await waitFor(() => _$('.lav-sticky__bottom'), false)

      _$('.lav-sticky__bottom').insertAdjacentHTML(
        'afterbegin',
        /*html*/ `
          <div class='lav-sticky__size'>
            ${getSvg('chevronRight')}
            <div class='lav-sticky__size-label'>${label}:</div>
            <div class='lav-sticky__size-value'>${value || 'Choose'}</div>
          </div>
        `
      )

      _$('.lav-sticky__size').addEventListener('click', function () {
        pushDataLayer(
          'exp_color_sticky_button',
          'Size',
          'click',
          'Sticky block'
        )
        rerender()
        openSelector()

        function rerender() {
          const headerHTML = _$('product-info .lav-measure')
            .closest('.product-form__input--dropdown')
            .querySelector('.ringSize_guide').outerHTML

          const bodyHTML = _$('product-info .lav-measure').outerHTML

          _$('.lav-selector__toggler').innerHTML = headerHTML + bodyHTML

          if (_$('.lav-selector__toggler #guide_desc')) {
            _$('.lav-selector__toggler #guide_desc').addEventListener('click', () => {
              _$('.section-header')?.classList.remove('lav-selector-opened')

              const interval = setInterval(() => {
                if (_$('#custom_notifications[style*="translateX(100%)"]')) {
                  if (_$('.lav-selector.active')) {
                    _$('.section-header')?.classList.add('lav-selector-opened')
                  }
                  clearInterval(interval)
                }
              }, 350);
            });
          }

          _$$('.lav-selector__toggler a').forEach((el, index) => {
            el.addEventListener('click', (e) => {
              pushDataLayer('exp_color_sticky_click', el.innerText.trim(), 'click', 'Sticky size selector');
              e.preventDefault();
              _$('.lav-options span').innerText = el.innerText.trim()
              _$('.lav-options select').value = el.closest('li').getAttribute('data-jquery-grid-picker-value')
              _$(
                'product-info .lav-measure li:nth-child(' + (index + 1) + ') a'
              ).click()
              rerender()
              closeSelector(true)
            })
          })
        }
      })
    }
  }

  function openSelector() {
    _$('.section-header')?.classList.add('lav-selector-opened')
    _$('.lav-selector').classList.add('active')

    setTimeout(() => {
      _$('.lav-selector__inner').classList.add('active')
    }, 50)
  }

  function closeSelector(isPassive) {
    console.log('Close selector')
    _$('.section-header')?.classList.remove('lav-selector-opened')
    const label = _$(
      '.lav-selector__inner.active .form__label'
    )?.innerText.trim()
    if (label && !isPassive) {
      // pushDataLayer('exp_pdp_click_05', 'Close', 'click', `${label} - Sticky`)
    }
    _$('.lav-selector__inner').classList.remove('active')
    _$('.lav-selector').classList.remove('active')
  }

  function updateMaterial() {
    const materialEl = _$(
      'variant-selects [name="options[Material]"] + .jquery-grid-picker-widget'
    ) || _$(
      'variant-selects [name="options[Pendant Material]"] + .jquery-grid-picker-widget'
    ) || _$(
      'variant-selects [name="options[Finish]"] + .jquery-grid-picker-widget')

    if (!materialEl) return

    _$$('li a', materialEl).forEach((el) => {
      el.addEventListener('click', () => {
        const currentSrc = document.querySelector('.owlCustomCarousel.owl-carousel>.owl-stage-outer>.owl-stage>.owl-item.active img')?.src

        setTimeout(() => {
          const newSrc = document.querySelector('.owlCustomCarousel.owl-carousel>.owl-stage-outer>.owl-stage>.owl-item.active img')?.src

          if (currentSrc !== newSrc && window.innerWidth <= 767) {
            document.querySelector('.product')?.scrollIntoView({ behavior: 'smooth' })
          }
        }, 500);
      })
    })


    materialEl.classList.add('lav-label-handler', 'lav-material')
    materialEl.closest('.select').classList.add('lav-material-wrap')
    materialEl.closest('.product-form__input--dropdown').classList.add('lav-material-container');

    const value = _$(
      '.lav-material .jquery-grid-picker-item-selected'
    )?.getAttribute('data-jquery-grid-picker-value')

    const label = materialEl
      .closest('.product-form__input--dropdown')
      .querySelector('.form__label')?.innerText

    const color = _$(
      '.lav-material .jquery-grid-picker-item-selected .lav-material-color'
    )?.outerHTML

    // addToSticky(value, label, color)
    addToSticky(value, label)

    async function addToSticky(value, label, color) {
      await waitFor(() => _$('.lav-sticky__top'), false)

      _$('.lav-sticky__top').classList.add('active')

        // <div class="lavs-option__facture" style="${
        //       color ? 'display: flex;' : 'display: none;'
        //     }">
        //       ${color || ''}
        //     </div>

      _$('.lav-sticky__top').insertAdjacentHTML(
        'afterbegin',
        /*html*/ `
          <div class='lav-sticky__option lavs-option lav-selector-material'>
            <div class="lavs-option__info">
              <div class="lavs-option__label">${label}:</div>
              <div class="lavs-option__value">${value}</div>
            </div>
        
            <div class="lavs-option__icon">
              ${getSvg('chevronRight')}
            </div>
          </div>
        `
      )

      _$('.lav-selector-material').addEventListener('click', function (e) {
        e.preventDefault()
        if (!config.isPassive) {
          pushDataLayer('exp_color_sticky_button', 'Material', 'click', 'Sticky block');
        }
        rerender()
        openSelector()

        function rerender() {
          const headerHTML = _$('product-info .lav-material')
            .closest('.product-form__input--dropdown')
            .querySelector('.ringSize_guide').outerHTML

          const bodyHTML = _$('product-info .lav-material').outerHTML

          _$('.lav-selector__toggler').innerHTML = headerHTML + bodyHTML

          _$$('.lav-selector__toggler a').forEach((el, index) => {
            el.addEventListener('click', (e) => {
              pushDataLayer('exp_color_sticky_click', el.innerText.trim(), 'click', 'Sticky material selector');
              e.preventDefault()
              _$(
                'product-info .lav-material li:nth-child(' + (index + 1) + ') a'
              ).click()

              rerender()
              closeSelector(true)
            })
          })
        }
      })
    }
  }

  async function addLabelHandler() {
    // document.querySelector("#guide_desc")?.insertAdjacentHTML('afterbegin', getSvg('sizeGuide'))
    _$$('.lav-label-handler').forEach((container) => {
      addLabel(container)
      container.addEventListener('click', (e) => {
        const target = e.target?.closest('.jquery-grid-picker-item-content')

        if (target?.classList.contains('jquery-grid-picker-item-content')) {
          addLabel(container, target)
        }
      })
    })
  }

  function addLabel(container, target) {
    const label = container
      .closest('.product-form__input--dropdown')
      .querySelector('.form__label')

    const isStickyClick = _$('.lav-selector__inner.active')

    if (target) {
      // pushDataLayer(
      //   `exp_pdp_click_0${isStickyClick ? '4' : '2'}`,
      //   target.innerText.trim(),
      //   'click',
      //   `${label.innerText.trim()} (section) - ${
      //     isStickyClick ? 'Sticky' : 'Static'
      //   }`
      // )
    }

    if (label.nextElementSibling?.classList.contains('lav-selected')) {
      label.nextElementSibling.remove()
    }

    const text = _$(
      '.jquery-grid-picker-item-selected',
      container
    )?.getAttribute('data-jquery-grid-picker-value')

    if (!text) return

    if (
      _$('.lav-sticky__size-value') &&
      container.classList.contains('lav-measure')
    ) {
      _$('.lav-sticky__size-value').innerText = text
    }

    if (
      _$('.lav-selector-material') &&
      container.classList.contains('lav-material')
    ) {
      // _$('.lav-selector-material').innerText = text
      if (_$('.jquery-grid-picker-item-selected .lav-material-color')) {
        // _$('.lavs-option__facture').style.display = 'flex'
        _$('.lav-selector-material .lavs-option__facture').innerHTML = _$(
          '.jquery-grid-picker-item-selected .lav-material-color',
          container
        ).outerHTML
      } else {
        // _$('.lavs-option__facture').style.display = 'none'
      }

      _$('.lav-selector-material .lavs-option__value').innerText = text
    }

    if (!label.closest('.lav-material-container')) return

    label.insertAdjacentHTML(
      'afterend',
      `<div class="lav-selected">${text}</div>`
    )
  }

  function addSlideInModal() {
    const markup = /* html */ `
      <div class='lav-modal__close' title='Close modal'>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
          <rect x="1" y="1" width="23" height="23" rx="11.5" fill="#F0F0F0"/>
          <rect x="1" y="1" width="23" height="23" rx="11.5" stroke="black" stroke-width="2"/>
          <path d="M14.1979 12.4872L16.7511 15.066C17.083 15.3723 17.083 15.883 16.7511 16.1894L16.1894 16.7511C15.883 17.083 15.3723 17.083 15.066 16.7511L12.5128 14.1979L9.93404 16.7511C9.62766 17.083 9.11702 17.083 8.81064 16.7511L8.24894 16.1894C7.91702 15.883 7.91702 15.3723 8.24894 15.066L10.8021 12.4872L8.24894 9.93404C7.91702 9.62766 7.91702 9.11702 8.24894 8.81064L8.81064 8.24894C9.11702 7.91702 9.62766 7.91702 9.93404 8.24894L12.5128 10.8021L15.066 8.24894C15.3723 7.91702 15.883 7.91702 16.1894 8.24894L16.7511 8.81064C17.083 9.11702 17.083 9.62766 16.7511 9.93404L14.1979 12.4872Z" fill="black"/>
        </svg>
      </div>

      <div class="lav-instr__title">
        How To Send Your Inclusions
      </div>

      <div class="lav-instr__descr">
        <p>Send us a tiny amount of your keepsake, and we’ll create a memorial jewelry piece to last a lifetime. </p>
        <p>Learn more in the tabs below.</p>
      </div>

      <div class="lav-instr__list">
        <div class="lav-instr__item lav-drop">
          <div class="lav-drop__title">Cremations</div>
          <div class="lav-drop__body">
            <p><span>Please send&nbsp;1/4 a teaspoon&nbsp;of ashes in a ziplock&nbsp;bag&nbsp;</span><span>(if you're ordering more than 4 pieces of jewelry 1/2 a teaspoon will be enough)&nbsp;</span>Please&nbsp;write&nbsp;the name that is associated with the order&nbsp;<b>and</b>&nbsp;the order number on the ziplock bag or on a sticky note&nbsp;that is placed inside the&nbsp;package so I know who the&nbsp;package belongs to. Place baggy inside of an envelope or package to be shipped.</p>
            <p>If you don't have 1/4 of a teaspoon of ashes, you can just send what you have.</p>
            <p><span>We&nbsp;<strong>strongly suggest</strong>&nbsp;mailing your package via USPS with insurance and tracking.&nbsp;<meta charset="utf-8">USPS requires cremation ashes to be sent&nbsp;with express shipping&nbsp;.</span></p>
            <p><span><meta charset="utf-8">(If&nbsp;you are sending from out of the country, you can send using your&nbsp;countries&nbsp;postal service).</span></p>
            <p><span>We will return&nbsp;all of the unused ashes to you along with your jewelry!</span></p>
            <p><span>There is no rush on sending the inclusions!</span></p>
            <p><span><meta charset="utf-8">We will notify you when we receive your inclusions!</span></p>
            <p><span>The address to mail the ashes to is:</span></p>
            <p><span>Petals and Keepsakes</span></p>
            <p><span>2451 Algoma Road</span></p>
            <p><span>Pontotoc, Mississippi 38863</span></p>
            <p><span>Please email&nbsp;us at&nbsp;<meta charset="utf-8">support@petalsandkeepsakes.com&nbsp;<meta charset="utf-8">if you have any questions about the process!</span></p>
          </div>
        </div>

        <div class="lav-instr__item lav-drop">
          <div class="lav-drop__title">Clothing/Fabric</div>
          <div class="lav-drop__body">
            <p>Please send a penny sized (or larger) piece of fabric in a ziplock bag and write the name that is associated with the order&nbsp;<strong>and</strong>&nbsp;the order number on the bag.&nbsp;</p>
            <p>Any unused fabric will be mailed back to you!&nbsp;</p>
            <p><span>I highly suggest mailing your package via USPS with tracking.</span></p>
            <p><span><meta charset="utf-8">(If&nbsp;you are sending from out of the country, you can send using your&nbsp;countries postal service).</span></p>
            <p><span>Once the order is placed, you will receive a confirmation email with the address to mail your envelope to.</span></p>
            <p><span><meta charset="utf-8">We will notify you when we receive your inclusions!</span></p>
            <p><span>The address to mail the&nbsp;clothing to is:</span></p>
            <p><span>Petals and Keepsakes</span></p>
            <p><span>2451 Algoma Road</span></p>
            <p><span>Pontotoc, Mississippi 38863</span></p>
            <p>Please email me at&nbsp;support@petalsandkeepsakes.com<span>&nbsp;</span><meta charset="utf-8"><span data-mce-fragment="1">if you have any questions about the process!</span></p>
            <p>&nbsp;</p>
          </div>
        </div>

        <div class="lav-instr__item lav-drop">
          <div class="lav-drop__title">Flowers/Petals</div>
          <div class="lav-drop__body">
            <p>Please send the&nbsp;petals in a small box.<span>&nbsp;</span><meta charset="utf-8"><span data-mce-fragment="1">&nbsp;(It only takes around 2 petals to&nbsp;create&nbsp;an item, but you can send a little more if you would like).&nbsp;</span>You can get small boxes at places like Walmart, the post office, or just re-use one from around your house!</p>
            <p><meta charset="utf-8"><span>Please&nbsp;avoid&nbsp;sending your petals in a ziplock bag&nbsp;or envelope as moisture can get trapped during the shipping process and the petals will mold.</span></p>
            <p><span>Loosely wrap your flower petals in a paper towel to allow air flow to the petals.&nbsp;</span></p>
            <p><span>Please write the name that is associated with the order and the order number on a note and put it in the box&nbsp;so I know who the petals belong to.</span></p>
            <p><span></span><span>We highly suggest mailing your package via USPS with insurance and tracking.</span></p>
            <p><span><meta charset="utf-8">(If&nbsp;you are sending from out of the country, you can send using your&nbsp;countries postal system).</span></p>
            <p><span><meta charset="utf-8">We will notify you when we receive your inclusions!</span></p>
            <p><span>The address to mail the&nbsp;petals to is:</span></p>
            <p><span>Petals and Keepsakes</span></p>
            <p><span>2451 Algoma Road</span></p>
            <p><span>Pontotoc, Mississippi 38863</span></p>
            <p>Please email me at<span>&nbsp;</span><meta charset="utf-8"><span data-mce-fragment="1">support@petalsandkeepsakes.com</span><span>&nbsp;</span><meta charset="utf-8"><span data-mce-fragment="1">if you have any questions about the process!</span></p>
          </div>
        </div>

        <div class="lav-instr__item lav-drop">
          <div class="lav-drop__title">Hair</div>
          <div class="lav-drop__body">
            <p>Please send a few strands or a half penny size amount hair/fur in a ziplock bag. Please write the name associated with the order<span>&nbsp;</span><strong>and</strong><span>&nbsp;</span>the order number on the ziplock bag.</p>
            <p>If you don't have that much hair,&nbsp;you can just&nbsp;send what you have. Any unused hair will be returned to you!</p>
            <p><span>We highly suggest mailing your package via USPS with tracking.</span></p>
            <p><span><meta charset="utf-8">(If&nbsp;you are sending from out of the country, you can send using your&nbsp;countries postal system).</span></p>
            <p><span>Once the order is placed, you will receive a confirmation email with the address to mail your envelope to.</span></p>
            <p><span><meta charset="utf-8">We will notify you when we receive your inclusions!</span></p>
            <p><span>The address to mail the&nbsp;hair to is:</span></p>
            <p><span>Petals and Keepsakes</span></p>
            <p><span>2451 Algoma Road</span></p>
            <p><span>Pontotoc, Mississippi 38863</span></p>
            <p>Please email me at&nbsp;support@petalsandkeepsakes.com<span>&nbsp;</span><meta charset="utf-8"><span data-mce-fragment="1">if you have any questions about the process!</span></p>
          </div>
        </div>

        <div class="lav-instr__item lav-drop">
          <div class="lav-drop__title">Breast Milk</div>
          <div class="lav-drop__body">
            <p><span>Place 2ml of breast milk in a small container with the lid taped shut or in a secured breast milk bag. Please double bag the breast milk bag/container. Write the name associated with the order and the order number on the bag or a sticky note. You can send your breastmilk in a bubble mailer or a small box with a tracking number attached.</span></p>
            <p><span>We highly suggest mailing your package via USPS with insurance and tracking.</span></p>
            <p><span><meta charset="utf-8">(If&nbsp;you are sending from out of the country, you can send using your&nbsp;countires postal system).</span></p>
            <p><span><meta charset="utf-8">We will notify you when we receive your inclusions!</span></p>
            <p><span>The address to mail the&nbsp;breastmilk&nbsp;to is:</span></p>
            <p><span>Petals and Keepsakes</span></p>
            <p><span>2451 Algoma Road</span></p>
            <p><span>Pontotoc, Mississippi 38863</span></p>
            <p>Please email me at<span>&nbsp;</span><meta charset="utf-8"><span data-mce-fragment="1">support@petalsandkeepsakes.com</span><span>&nbsp;</span><meta charset="utf-8"><span data-mce-fragment="1">if you have any questions about the process!</span></p>
          </div>
        </div>
      </div>

      <div class="lav-instr__descr">
        <p>
          <strong>Other Inclusions:</strong> If you are sending any other inclusions, you can send 1/4 of a teaspoon worth or a penny size amount of the material and follow the same instructions listed for sending ashes.
        </p>
        <p>
          <strong>Mailing more than one inclusion:</strong> If you are sending multiple inclusions (such as ash and fabric), you can follow the instructions as normal and send them all in one package!
        </p>
      </div>
    </div>
    `

    new Modal('lav-instr', markup)

    waitFor(
      () => typeof $ === 'function',
      () => {
        _$$('.lav-drop__title').forEach((element) => {
          element.addEventListener('click', () => {
            if (
              !element.classList.contains('active') &&
              _$('.lav-drop__title.active')
            ) {
              $(_$('.lav-drop__title.active').nextElementSibling).slideUp()
              _$('.lav-drop__title.active').classList.remove('active')
            }

            element.classList.toggle('active')
            $(element.nextElementSibling).slideToggle()
          })
        })
      }
    )
  }

  function openModal() {
    Modal.open('.lav-instr')
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

          if (e.target.dataset.lavModal) {
            this.open(e.target.dataset.lavModal)
          } else if (e.target.closest('[data-lav-modal]')) {
            this.open(e.target.closest('[data-lav-modal]').dataset.lavModal)
          }
        })

        this.addStyles()
      }

      static open(modalName, cb) {
        document.body.classList.add('lav-modal-open')

        if (_$('.lav-modal__inner.active')) {
          _$('.lav-modal__inner.active').classList.remove('active')
        }

        setTimeout(() => {
          _$(modalName).classList.add('active')
        }, 300)

        if (typeof cb === 'function') cb()

        setTimeout(() => {
          _$('.lav-modal').classList.add('active')
        }, 100)
      }

      static close(cb) {
        document.body.classList.remove('lav-modal-open')

        _$('.lav-modal__inner.active')?.classList.remove('active')

        if (typeof cb === 'function') cb()

        setTimeout(() => {
          _$('.lav-modal')?.classList.remove('active')
        }, 300)
      }

      static addStyles() {
        const styles = /* css */ `
      .lav-modal {
        position: fixed;
        z-index: 99999999999;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: #00000091;
        transition: 0.35s;
        opacity: 0;
        pointer-events: none;
        overflow: hidden;
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
        width: 80%;
        max-width: 450px;
        margin-left: auto;
        overflow: auto;
        transform: translateX(100%);
        transition: 0.35s;
      }
      .lav-modal__inner.active {
        transform: translateX(0);
      }
      .lav-modal__close {
        position: absolute;
        right: 20px;
        top: 20px;
        cursor: pointer;
        transition: 0.35s;
        line-height: 0;
      }
      [data-lav-modal] {
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

      .lav-instr {
        padding: 20px;
      }
      .lav-instr__title {
        color: #121212;
        font-size: 22px;
        font-weight: 700;
        line-height: 28px;
        letter-spacing: 0.6px;
        margin-top: 15px;
      }
      .lav-instr__descr {
        margin-top: 16px;
      }
      .lav-instr p {
        color: rgba(18, 18, 18, 0.75);
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: 27px;
        letter-spacing: 0;
        margin: 0;
      }
      .lav-instr p + p {
        margin-top: 10px;
      }

      .lav-instr__list {
        margin-top: 16px;
      }
      .lav-drop {
        border-top: 1px solid #C2BFBF;
      }
      .lav-drop__title {
        position: relative;
        color: #000;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 20.8px;
        padding: 15px 0;
        padding-right: 30px;
      }
      .lav-drop__title:before {
        content: '';
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 20px;
        height: 20px;
        background-image: url('${config.dir}/img/chevron-down.svg');
        background-size: contain;
        background-repeat: no-repeat;
        transition: 0.35s;
      }
      .lav-drop__title.active:before {
        transform: translateY(-50%) rotate(180deg);
      }
      .lav-drop__body {
        display: none;
        padding-bottom: 12px;
      }
      .lav-drop {
      }
      .lav-drop {
      }
      .lav-drop {
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
          cbAdded(mutation)
        }
      }
    })

    observer.observe(el, { childList: true, subtree: true, attributes: true })

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
      threshold: 0.5,
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
  function pushDataLayer(name = '', desc = '', type = '', loc = '', loc2 = '') {
    window.dataLayer = window.dataLayer || []

    try {
      const event = {
        event: 'event-to-ga4',
        event_name: name,
        event_desc: desc,
        event_type: type,
        event_loc: loc
      }

      if (loc2) {
        event.event_loc2 = loc2
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
      priceDivider: `
        <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
          <circle cx="2" cy="2" r="2" fill="black"/>
        </svg>
      `,
      defaultColor: `
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="12" height="12" rx="6" fill="black"/>
          <path d="M5.99996 8.91647C5.69845 8.9167 5.39997 8.85633 5.12225 8.73894C4.84453 8.62156 4.59324 8.44955 4.38329 8.23314C4.00699 7.84486 3.77363 7.34035 3.7214 6.80217C3.66917 6.26399 3.80117 5.72403 4.09579 5.27064L3.49996 4.6748C3.05308 5.28897 2.8373 6.04115 2.89066 6.79882C2.94402 7.55648 3.26308 8.271 3.79163 8.81647C4.07832 9.11219 4.42157 9.34721 4.80095 9.50755C5.18033 9.66789 5.58809 9.75028 5.99996 9.7498C6.69264 9.75083 7.36526 9.51732 7.90829 9.0873L7.31246 8.4998C6.92888 8.77169 6.47013 8.91733 5.99996 8.91647Z" fill="white"/>
          <path d="M5.99983 3.26251L7.6165 4.92917C7.88772 5.20871 8.08616 5.55055 8.19441 5.9247C8.30266 6.29884 8.3174 6.69384 8.23733 7.07501L8.9165 7.72917C9.13581 7.15502 9.18605 6.53005 9.06125 5.92823C8.93646 5.32641 8.64186 4.77295 8.21233 4.33334L6.29566 2.37501C6.25707 2.33564 6.21105 2.30432 6.16027 2.28286C6.10949 2.2614 6.05496 2.25024 5.99983 2.25001C5.944 2.24968 5.88867 2.26058 5.83714 2.28205C5.7856 2.30352 5.73891 2.33514 5.69983 2.37501L4.63733 3.45834L5.229 4.05001L5.99983 3.26251Z" fill="white"/>
          <path d="M9.62928 9.03725L2.96262 2.37059C2.92377 2.33174 2.87765 2.30092 2.82689 2.27989C2.77613 2.25887 2.72173 2.24805 2.66678 2.24805C2.61184 2.24805 2.55744 2.25887 2.50668 2.27989C2.45592 2.30092 2.4098 2.33174 2.37095 2.37059C2.29249 2.44904 2.24841 2.55546 2.24841 2.66642C2.24841 2.77738 2.29249 2.88379 2.37095 2.96225L9.03762 9.62892C9.07635 9.66797 9.12244 9.69897 9.17321 9.72012C9.22399 9.74128 9.27845 9.75217 9.33345 9.75217C9.38846 9.75217 9.44292 9.74128 9.49369 9.72012C9.54447 9.69897 9.59055 9.66797 9.62928 9.62892C9.66834 9.59018 9.69934 9.5441 9.72049 9.49333C9.74164 9.44255 9.75253 9.38809 9.75253 9.33309C9.75253 9.27808 9.74164 9.22362 9.72049 9.17285C9.69934 9.12207 9.66834 9.07599 9.62928 9.03725Z" fill="white"/>
        </svg>
      `,
      sizeGuide: `
        <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_863_6)">
          <path d="M11.5 3.5V6.11687C11.5 6.24948 11.4473 6.37666 11.3536 6.47043C11.2598 6.5642 11.1326 6.61687 11 6.61687C10.8674 6.61687 10.7402 6.5642 10.6464 6.47043C10.5527 6.37666 10.5 6.24948 10.5 6.11687V4.70711L8.63853 6.56858C8.54464 6.66175 8.41765 6.71392 8.28538 6.71367C8.1531 6.71342 8.02632 6.66076 7.93279 6.56723C7.83925 6.4737 7.78659 6.34691 7.78634 6.21464C7.78608 6.08236 7.83825 5.95538 7.93142 5.86148L9.79291 4H8.38312C8.25052 4 8.12334 3.94732 8.02957 3.85355C7.9358 3.75979 7.88312 3.63261 7.88312 3.5C7.88312 3.36739 7.9358 3.24021 8.02957 3.14645C8.12334 3.05268 8.25052 3 8.38312 3H11C11.1326 3 11.2598 3.05268 11.3536 3.14645C11.4473 3.24021 11.5 3.36739 11.5 3.5ZM3.5 10.5C3.5 10.6326 3.55268 10.7598 3.64645 10.8536C3.74021 10.9473 3.86739 11 4 11H6.61687C6.74948 11 6.87666 10.9473 6.97043 10.8536C7.0642 10.7598 7.11687 10.6326 7.11687 10.5C7.11687 10.3674 7.0642 10.2402 6.97043 10.1464C6.87666 10.0527 6.74948 10 6.61687 10H5.20712L7.06858 8.13853C7.16235 8.04476 7.21503 7.91759 7.21503 7.78498C7.21503 7.65237 7.16235 7.52519 7.06858 7.43142C6.97481 7.33765 6.84763 7.28497 6.71502 7.28497C6.58241 7.28497 6.45524 7.33765 6.36147 7.43142L4.5 9.29291V7.88314C4.5 7.75053 4.44732 7.62336 4.35355 7.52959C4.25979 7.43582 4.13261 7.38314 4 7.38314C3.86739 7.38314 3.74021 7.43582 3.64645 7.52959C3.55268 7.62336 3.5 7.75053 3.5 7.88314L3.5 10.5Z" fill="#2E45E0"/>
          </g>
          <circle cx="7.5" cy="7" r="6.5" stroke="#2E45E0"/>
          <defs>
          <clipPath id="clip0_863_6">
          <rect width="8" height="8" fill="white" transform="translate(3.5 3)"/>
          </clipPath>
          </defs>
        </svg>
      `,
      play: `
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 1.95775V12.0422L9.80486 7L1.5 1.95775ZM0 1.29138C0 0.414296 0.959137 -0.125446 1.70884 0.329748L11.1113 6.03835C11.8328 6.47643 11.8328 7.52358 11.1113 7.96165L1.70884 13.6702C0.959137 14.1255 0 13.5857 0 12.7086V1.29138Z" fill="white"/>
        </svg>
      `,
      close: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M18 6L6 18M6 6l12 12" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      `,
      chevronRight: `
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
          <path d="M1.98145 0.786865L7.07129 5.92944L7.14062 5.99976L7.07129 6.07007L1.98145 11.2136L1.91016 11.2849L1.83887 11.2136L0.958008 10.323H0.760742L0.928711 10.1531L5.03809 5.99976L0.928711 1.84741L0.859375 1.7771L0.928711 1.70679L1.83887 0.786865L1.91016 0.7146L1.98145 0.786865Z" fill="black" stroke="black" stroke-width="0.2"/>
        </svg>
      `,
      closeWhite: `
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
          <g clip-path="url(#clip0_344_4288)">
            <path d="M7.72559 9L0 16.7256L1.27441 18L9 10.2744L16.7256 18L18 16.7256L10.2744 9L18 1.27441L16.7256 0L9 7.72559L1.27441 0L0 1.27441L7.72559 9Z" fill="white"/>
          </g>
          <defs>
            <clipPath id="clip0_344_4288">
              <rect width="18" height="18" fill="white" transform="matrix(-1 0 0 1 18 0)"/>
            </clipPath>
          </defs>
        </svg>
      `,
      trustLabel: `
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M14.907 10.4489L14.5632 10.7927C14.3447 11.0113 14.2219 11.3079 14.2218 11.6171V12.1C14.2218 12.719 13.976 13.3123 13.5384 13.7499C13.1008 14.1875 12.5073 14.4333 11.8885 14.4333H11.4055C11.0963 14.4334 10.7998 14.5562 10.5811 14.7748L10.2373 15.1185C9.79983 15.5555 9.20679 15.8009 8.58847 15.8009C7.97015 15.8009 7.37711 15.5555 6.93962 15.1185L6.59585 14.7748C6.37714 14.5562 6.08062 14.4334 5.77142 14.4333H5.28998C4.67116 14.4333 4.07768 14.1875 3.6401 13.7499C3.20253 13.3123 2.9567 12.719 2.9567 12.1V11.6171C2.95663 11.3079 2.83383 11.0113 2.61526 10.7927L2.27149 10.4489C1.83454 10.0114 1.58911 9.41837 1.58911 8.80005C1.58911 8.18173 1.83454 7.58869 2.27149 7.15119L2.61526 6.80742C2.83383 6.58872 2.95663 6.29219 2.9567 5.983V5.50001C2.9567 4.88118 3.20253 4.2877 3.6401 3.85012C4.07768 3.41255 4.67116 3.16672 5.28998 3.16672H5.77297C6.08217 3.16665 6.3787 3.04385 6.5974 2.82528L6.94117 2.48151C7.37866 2.04456 7.9717 1.79913 8.59003 1.79913C9.20835 1.79913 9.80139 2.04456 10.2389 2.48151L10.5826 2.82528C10.8014 3.04385 11.0979 3.16665 11.4071 3.16672H11.8901C12.5089 3.16672 13.1024 3.41255 13.54 3.85012C13.9775 4.2877 14.2234 4.88118 14.2234 5.50001V5.983C14.2234 6.29219 14.3462 6.58872 14.5648 6.80742L14.9086 7.15119C15.3453 7.58889 15.5905 8.18205 15.5902 8.80037C15.5899 9.41869 15.3442 10.0116 14.907 10.4489Z" fill="black"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.73466 9.31456C5.60513 9.17554 5.53461 8.99168 5.53796 8.8017C5.54131 8.61172 5.61827 8.43045 5.75263 8.2961C5.88699 8.16174 6.06825 8.08478 6.25823 8.08143C6.44821 8.07807 6.63207 8.14859 6.77109 8.27813L6.77492 8.2817L7.81212 9.31832L10.4086 6.72254C10.5477 6.593 10.7316 6.52255 10.9216 6.5259C11.1116 6.52925 11.2928 6.60622 11.4272 6.74057C11.5615 6.87493 11.6385 7.05619 11.6419 7.24617C11.6452 7.43615 11.5747 7.62002 11.4452 7.75903L11.4415 7.76291L8.33084 10.8735C8.26294 10.9419 8.18191 10.9964 8.09291 11.0333C8.00392 11.0702 7.90849 11.0892 7.81214 11.089C7.71579 11.0892 7.62036 11.0702 7.53136 11.0333C7.44236 10.9964 7.36158 10.9421 7.29368 10.8738L5.73466 9.31456Z" fill="white"/>
        </svg>
      `,
      trust: `
        <svg xmlns="http://www.w3.org/2000/svg" width="88" height="16" viewBox="0 0 88 16" fill="none">
          <g clip-path="url(#clip0_344_3633)">
            <path d="M16.3125 0H0V16H16.3125V0Z" fill="#00B67A"/>
            <path d="M33.9844 0H17.6719V16H33.9844V0Z" fill="#00B67A"/>
            <path d="M51.6562 0H35.3438V16H51.6562V0Z" fill="#00B67A"/>
            <path d="M69.3281 0H53.0156V16H69.3281V0Z" fill="#00B67A"/>
            <path d="M87 0H70.6875V16H87V0Z" fill="#00B67A"/>
            <path d="M8.15627 10.7833L10.6371 10.1667L11.6737 13.3L8.15627 10.7833ZM13.8656 6.73333H9.49866L8.15627 2.7L6.81389 6.73333H2.4469L5.98127 9.23333L4.63889 13.2667L8.17327 10.7667L10.3483 9.23333L13.8656 6.73333Z" fill="white"/>
            <path d="M25.8281 10.7833L28.309 10.1667L29.3455 13.3L25.8281 10.7833ZM31.5375 6.73333H27.1705L25.8281 2.7L24.4858 6.73333H20.1188L23.6531 9.23333L22.3108 13.2667L25.8451 10.7667L28.0201 9.23333L31.5375 6.73333Z" fill="white"/>
            <path d="M43.5 10.7833L45.9809 10.1667L47.0174 13.3L43.5 10.7833ZM49.2094 6.73333H44.8424L43.5 2.7L42.1576 6.73333H37.7906L41.325 9.23333L39.9826 13.2667L43.517 10.7667L45.692 9.23333L49.2094 6.73333Z" fill="white"/>
            <path d="M61.1719 10.7833L63.6528 10.1667L64.6893 13.3L61.1719 10.7833ZM66.8813 6.73333H62.5143L61.1719 2.7L59.8295 6.73333H55.4625L58.9969 9.23333L57.6545 13.2667L61.1889 10.7667L63.3639 9.23333L66.8813 6.73333Z" fill="white"/>
            <path d="M78.8438 10.7833L81.3246 10.1667L82.3612 13.3L78.8438 10.7833ZM84.5532 6.73333H80.1862L78.8438 2.7L77.5014 6.73333H73.1344L76.6688 9.23333L75.3264 13.2667L78.8608 10.7667L81.0358 9.23333L84.5532 6.73333Z" fill="white"/>
          </g>
          <defs>
            <clipPath id="clip0_344_3633">
              <rect width="87" height="16" fill="white" transform="translate(0.5)"/>
            </clipPath>
          </defs>
        </svg>
      `,
    }

    return svgObj[name]
  }
})()
