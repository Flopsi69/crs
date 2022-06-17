console.log('initExp');

/********* Settings **********/
const settings = {
  dir: 'https://flopsi69.github.io/crs/admireMySkin/serum',
  observe: false,
};

//Clarity
initClarity();
function initClarity() {
  if (typeof clarity == 'function') {
    clarity('set', 'redesign_landing_page', 'variant_1');
  } else {
    setTimeout(initClarity, 1000);
  }
}

// Alalytic
function gaEvent(action, label) {
  if (!label) {
    label = '';
  }
  try {
    var objData = {
      event: 'event-to-ga',
      eventCategory: 'Exp: Redesign landing page',
      eventAction: action,
      eventLabel: label,
    };
    console.log('EventFire:', objData);
    dataLayer.push(objData);
  } catch (e) {}
}

// Observe
if (settings.observe) {
  let observer = new MutationObserver((mutations) => {
    for (let mutation of mutations) {
      for (let node of mutation.addedNodes) {
        if (!(node instanceof HTMLElement)) continue;

        // Code Here
      }
    }
  });

  let demoElem = document.body;

  observer.observe(demoElem, { childList: true, subtree: true });
}

// Styles
const styles = `
  #m-1638224949976, #r-1638224949963, #r-1638224949929, #r-1638224949904, #r-1638224949904, #r-1638224949887, #r-1638224949895, #r-1638224949879, #r-1638224949697, #r-1638224949683, #r-1638224949905, #r-1638224949786, #r-1638224949763, #r-1638224949759, #r-1638224949812, #r-1644869705613, #r-1640116839152, .rc-container-wrapper{
    display: none!important;
  }
  #r-1640116839081 {
    padding-top: 40px!important;
  }
  #r-1638224949960 { 
    margin-bottom: 20px!important;
  }
  .gf_row-gap-22>.gf_column {
    padding: 0;
  }
  #m-1640116839166 {
    padding: 0!important;
  }
  .wc_listlayout .wc_review_main_ul .wc_review_content {
    padding-top: 30px;
    padding-bottom: 16px;
  }
  .wc_review_content .wc_review_text p, .wc_review_text p {
    font-size: 14px!important;
    line-height: 140%!important;
    color: #6B6E74!important;
    margin-top: 16px!important;
  }
  body .gryffeditor .gf_row{
    padding-left: 16px!important;
    padding-right: 16px!important;
  }
  #r-1638225781951 {
    padding-bottom: 130px;
  }
  #e-1640116839147 .text-edit h1 {
    font-weight: 600!important;
    font-size: 18px!important;
    line-height: 28px!important;
    color: #3C3C3C!important;
    text-align: left!important;
    text-transform: capitalize!important;
  }

  #r-1638224949854 {
    margin-top: 8px!important;
    margin-bottom: 32px!important;
    box-shadow: none!important;
    padding: 0!important;
  }

  #e-1640116839193 .text-edit h3 {
    font-weight: 400!important;
    font-size: 12px!important;
    line-height: 12px!important;
    color: #6B6E74!important;
    text-align: left!important;
  }

  #m-1640116839230 {
    margin-top: 0!important;
  }

  .wc_review_content .wc_review_text h4 {
    font-weight: 700!important;
    font-size: 16px!important;
    line-height: 24px!important;
    color: #232323!important;
    padding-bottom: 0!important;
  }
  h6.wc_review_author_name {
    font-weight: 600!important;
    font-size: 18px!important;
    line-height: 130%!important;
    color: #3C3C3C!important;
  }
  .wc_review_form_btns li:first-child, .wc_review_form_btns li:nth-child(2) {
    display: none;
  }

  .wc_review_form_btns ul li {
    min-width: auto;
  }

  .wc_review_form_btns {
    margin-top: 18px;
  }

  .wc_review_listing_select {
    position: relative;
  }

  .wc_review_listing_select select.wc_select_drop {
    font-size: 14px!important;
    line-height: 24px!important;
    color: #6B6E74!important;
    font-weight: 400!important;
    padding: 0;
    width: auto;
    padding-right: 25px;
    background: none!important;
  }

  .wc_review_listing_select:after {
    content: '';
    position: absolute;
    right: 0;
    top: 9px;
    width: 11px;
    height: 6px;
    z-index: 99;
    background: url(${settings.dir}/img/arrow.svg);
    background-size: contain;
  }

  .wc_review_form_btns .wc_review_listing_select {
    font-size: 14px!important;
    line-height: 24px!important;
    color: #6B6E74!important;
    font-weight: 400!important;
    padding: 0;
    width: auto;
  }

  .lav-wrap {
    padding-left: 16px;
    padding-right: 16px;
  }

  .lav-head {
    background: #232323;
    padding: 6px 16px;
    text-align: center;
    color: #FFFFFF;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 12px;
    margin-left: -16px;
    margin-right: -16px;
  }

  .lav-head span {
    text-transform: lowercase;
  }

  .lav-jumb {
    margin-top: 22px;
    margin-bottom: 32px;
    text-align: center;
  }

  .lav-jumb__title {
    font-weight: 700;
    font-size: 28px;
    line-height: 130%;
    margin-bottom: 8px;
    color: #232323;
  }

  .lav-jumb__caption {
    margin-top: 8px;
    font-size: 14px;
    line-height: 24px;
    color: #3C3C3C;
  }

  .lav-jumb__caption span {
    font-weight: 700;
  }

  .lav-jumb__slider {
    margin-top: 16px;
  }
  .lav-brief {

  }
  .lav-brief__inner {
    display: flex;
    justify-content: space-between;
  }

  .lav-brief__image {
    flex-shrink: 0;
    margin-right: 30px;
    margin-left: 30px;
    max-width: 82px;
    width: 100%;
  }

  .lav-brief__title {
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: #232323;
  }

  .lav-brief__list {
    font-weight: 300;
    font-size: 14px;
    line-height: 24px;
    margin-top: 8px;
    color: #232323;
  }

  .lav-brief__price {
    text-align: center;
    margin-top: 20px;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: #232323;
  }
  .lav-fixed {
    padding: 10px 16px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #FFFFFF;
    box-shadow: 0px 0px 4px rgba(63, 169, 222, 0.2);
    z-index: 99;
    opacity: 0;
    pointer-events: none;
    transition: 0.35s;
  }
  .lav-fixed.active {
    opacity: 1;
    pointer-events: auto;
  }
  .lav-fixed .lav-brief__price {
    margin-top: 0;
  }
  .lav-brief__price-old {
    color: #6B6E74;
    text-decoration: line-through;
  }
  .lav-brief__buy {
    width: 100%;
  }

  .lav-btn {
    padding: 10px;
    height: 44px;
    background: #3FA9DE;
    border: none;
    text-align: center;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    margin-top: 4px;
    color: #fff;
    border-radius: 4px;
  }

  .lav-feedbacks {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;
    background-color: #F4F4F4;
    padding: 16px 18px;
  }

  .lav-feedbacks__rate {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    line-height: 24px;
    color: #232323;
  }

  .lav-feedbacks__average {
    font-weight: 700;
    margin-left: 8px;
    position: relative;
    top: 2px;
  }

  .lav-feedbacks__amazon {
    margin-bottom: -10px;
  }

  .lav-feedbacks__total {
    position: relative;
    top: 2px;
    margin-left: 5px;
  }

  .lav-help {
    margin-top: 32px;
    margin-left: -16px;
    margin-right: -16px;
  }

  .lav-help__top {
    background: #F9F9F9;
    padding: 16px;
  }
  .lav-help__bottom {
    background: #F9F9F9;
    padding: 16px;
    margin-top: 8px;
  }
  .lav-help__title {
    font-size: 18px;
    line-height: 28px;
    color: #3C3C3C;
  }
  .lav-help__title span {
    font-weight: 700;
  }
  .lav-help__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-top: 16px;
    text-align: center;
  }
  .lav-help__item-caption {
    margin-top: 8px;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #232323;
  }
  .lav-help__list {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #232323;
    list-style: disc;
    padding-left: 20px;
    margin-bottom: 0;
  }
  .lav-help__item {
    margin-bottom: 0;
  }
  .lav-help__item img {
    border-radius: 8px;
  }
  .lav-help__item + .lav-help__item  {
    margin-top: 3px;
  }
  .lav-block {
    margin-top: 24px;
  }
  .lav-title {
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: #3C3C3C;
    margin-bottom: 8px;
  }
  .lav-sutable__list-wrap {
    padding: 19px 16px;
    background: #F7F7F7;
  }
  .lav-sutable__list {
    list-style: disc;
    gap: 10px;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #232323;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 0;
    padding-left: 15px;
  }
  .lav-sutable__item {
    margin-bottom: 0;
  }
  .lav-ingredients {

  }
  .lav-ingredients__title {
    margin-bottom: 16px;
  }
  .lav-ingredients__info {
    margin-top: 32px;
  }
  .lav-ingredients__subtitle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #232323;
  }
  .lav-ingredients__subtitle svg {
    width: 10px;
    height: 6px;
    transition: 0.3s;
    margin-left: 15px;
  }
  .active .lav-ingredients__subtitle svg {
    transform: rotate(180deg);
    fill: #3FA9DE;
  }
  .lav-ingredients__descr {
    display: none;
    margin-top: 12px;
    font-size: 10px;
    line-height: 16px;
    color: #6B6E74;
  }
  .active .lav-ingredients__descr {
    display: block;
  }

  .lav-how {
    margin-top: 32px;
  }

  .lav-how__list {
    background: #F9F9F9;
    padding: 16px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #232323;
    list-style: disc;
    padding-left: 32px;
    margin-bottom: 0;
  }
  .lav-how__item {
    margin-bottom: 0;
  }
  .lav-how__item + .lav-how__item {
    margin-top: 10px;
  }
  .lav-how__caption {
    margin-top: 16px;
    font-size: 10px;
    line-height: 16px;
    color: #6B6E74;
  }
  .lav-other {
    margin-top: 32px;
  }
  .lav-other__nav {
    margin-left: -4px;
    margin-right: -4px;
    margin-top: 16px;
    padding: 4px;
    display: flex;
    justify-content: space-between;
    background: #EDF9FF;
    border-radius: 60px;
  }
  .lav-other__nav-item {
    padding: 8px;
    font-weight: 500;
    font-size: 12px;
    line-height: 216px1px;
    color: #3FA9DE;
    border-radius: 60px;
  }
  .lav-other__nav-item.active {
    background: #3FA9DE;
    color: #fff;
  }
  // .lav-other__nav-item + .lav-other__nav-item {
  //   margin-left: 18px;
  // }
  .lav-card {
    display: none;
    margin-top: 16px;
  }
  .lav-card.active {
    display: block;
  }
  .lav-card__image {
    line-height: 0;
  }
  .lav-card__image img {
    max-width: 100%;
  }
  .lav-card__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;
  }
  .lav-card__user {
    font-weight: 700;
    font-size: 14px;
    line-height: 21px;
    color: #232323;
  }
  .lav-card__date {
    font-size: 14px;
    line-height: 21px;
    color: #3C3C3C;
  }
  .lav-card__meta-wrap {
    margin-top: 16px;
  }
  .lav-card__meta {
    display: flex;
  }
  .lav-card__meta + .lav-card__meta {
    margin-top: 8px;
  }
  .lav-card__meta-key {
    font-weight: 300;
    font-size: 14px;
    line-height: 24px;
    color: #6B6E74;
  }
  .lav-card__meta-value {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #3C3C3C;
    margin-left: 7px;
  }
  .lav-card__feedback {
    display: flex;
    align-items: center;
    margin-top: 16px;
  }
  .lav-card__feedback-stars {}
  .lav-card__feedback-value {
    margin-left: 9px;
    margin-top: 1px;
    font-size: 14px;
    line-height: 21px;
    color: #232323;
  }
  .lav-card__info {
    margin-top: 20px;
  }
  .lav-card__info-title {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #232323;
  }
  .lav-card__info-descr {
    font-size: 14px;
    line-height: 140%;
    color: #6B6E74;
    margin-top: 16px;
  }
  .lav-card__info-full {
    display: none;
  }
  .lav-card__info-toggle {
    font-size: 14px;
    line-height: 140%;
    margin-top: 4px;
    color: #3FA9DE;
    display: inline-block;
    border-bottom: 1px solid #3FA9DE;
  }
  .lav-special {
    margin-top: 45px;
    padding: 16px;
    background: #232323;
    margin-left: -16px;
    margin-right: -16px;
    text-align: center;
  }
  .lav-special__title {
    font-weight: 700;
    font-size: 22px;
    line-height: 28px;
    letter-spacing: -0.01em;
    text-transform: uppercase;
    color: #FFFFFF;
  }
  .lav-special__caption {
    margin-top: 6px;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #FFFFFF;
  }
  .lav-offer {
    text-align: center;
  }
  .lav-offer__image {
    line-height: 0;
    margin-top: 40px;
  }
  .lav-offer__image img {
    // max-width: 264px;
    max-width: 170px;
    width: 100%;
    margin: auto;
  }
  .lav-offer__title {
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: #3C3C3C;
    margin-top: 23px;
  }
  .lav-offer__trial {
    font-weight: 500;
    font-size: 16px;
    line-height: 36px;
    text-transform: capitalize;
    color: #3C3C3C;
  }
  .lav-offer__trial span {
    font-weight: 700;
  }
  .lav-offer__caption {
    margin-top: 4px;
    font-weight: 400;
    font-size: 10px;
    line-height: 16px;
    color: #6B6E74;
  }
  .lav-offer__subscription {
    position: relative;
    text-decoration: underline;
  }
  .lav-offer__benefits {
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
  }
  .lav-offer__benefits-item {
    font-size: 14px;
    line-height: 18px;
    color: #3C3C3C;
  }
  .lav-offer__benefits-divider {
    width: 1px;
    background-color: #D9D9D9;
  }
  .lav-offer__buy {
    height: 48px;
    font-size: 18px;
    line-height: 22px;
    width: 100%;
    margin-top: 24px;
    font-weight: 400;
    transition: 0.3s;
  }
  .lav-offer__paypal {
    width: 100%;
    margin-top: 16px;
    background-color: #EEC86A;
    height: 48px;
  }
  .lav-offer__paypal img {
    height: 20px;
  }
  .lav-offer__buy-disabled {
    filter: grayscale(100%);
    pointer-events: none;
  }
  .lav-offer__popup {
    display: none;
    position: absolute;
    left: 50%;
    top: -10px;
    transform: translate(-50%, -100%);
    background: #D8F2FD;
    box-shadow: 0px 0px 4px rgb(102 120 130 / 11%);
    padding: 20px;
    width: 210px;
  }
  .lav-offer__subscription:hover .lav-offer__popup  {
    display: block;
  }
  .lav-offer__popup:before {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    margin: auto;
    background: #D8F2FD;
    width: 12px;
    height: 12px;
    transform: rotate(45deg) translate(-3px, -6px);
  }
  .lav-offer__popup .rc_popup__how_it_works br {
    display: none;
  }
  .lav-offer__popup .rc_popup__how_it_works strong {
    margin-bottom: 8px;
    display: block;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    color: #3C3C3C;
  }
  .lav-offer__popup .rc_popup__learn_more {
    margin-top: 24px;
    text-decoration: underline;
    font-size: 10px;
    line-height: 16px;
  }
  .lav-offer__popup .rc_popup__block__footer {
    justify-content: center;
    margin-top: 2px;
  }
  .lav-guaranty {
    text-align: center;
    margin-top: 32px;
  }
  .lav-guaranty__image {
    line-height: 0;
  }
  .lav-guaranty__image img {
    max-width: 125px;
    margin: auto;
  }
  .lav-guaranty__title {
    position: relative;
    margin-top: 24px;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #232323;
    text-transform: uppercase;
    padding-bottom: 12px;
    margin-bottom: 12px;
  }
  .lav-guaranty__title:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: #3FA9DE;
    width: 24px;
    height: 1px;
  }
  .lav-guaranty__caption {
    font-weight: 700;
    font-size: 14px;
    line-height: 140%;
    color: #6B6E74;
  }
  .lav-guaranty__safe {
    margin-top: 27px;
  }
  .lav-guaranty__safe-title {
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #232323;
  }
  .lav-guaranty__safe-image {
    line-height: 0;
    margin-top: 15px;
  }
  .lav-guaranty__safe-image img {
    max-width: 100%;
  }
  .lav-delivery {
    position: relative;
    background: #F9F9F9;
    margin-top: 32px;
    padding: 24px;
    padding-left: 54px;
    margin-left: -16px;
    margin-right: -16px;
  }
  .lav-delivery__item {
    position: relative;
    padding-left: 30px;
  }
  .lav-delivery__item:before {
    content: '';
    position: absolute;
    left: 0;
    // top: 50%;
    bottom: 18px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: #3FA9DE;
    // transform: translateY(-50%);
  }
  .lav-delivery__title {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #232323;
  }
  .lav-delivery__caption {
    margin-top: 4px;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    color: #6B6E74;
  }
  .lav-delivery__item + .lav-delivery__item {
    padding-top: 34px;
  }
  .lav-delivery__item + .lav-delivery__item:after {
    content: '';
    position: absolute;
    width: 2px;
    height: 100%;
    left: 6px;
    bottom: 20px;
    background-color: #3FA9DE;
    width: 2px;
  }
  .lav-delivery {}
  .lav-faq {
    margin-top: 40px;
  }
  .lav-faq__title {
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
  }
  .lav-faq__list {
    margin-top: 16px;
  }
  .lav-faq__item {
    padding: 14px;
    border: 1px solid #CCCFD5;
    border-radius: 10px;
  }
  .lav-faq__item + .lav-faq__item {
    margin-top: 8px;
  }
  .lav-faq__item-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
    font-size: 14px;
    line-height: 130%;
    letter-spacing: 0.06em;
    color: #3C3C3C;
  }
  .active .lav-faq__item-title {
    color: #3FA9DE;
  }
  .lav-faq__item-title svg {
    width: 10px;
    height: 6px;
    transition: 0.3s;
    margin-left: 15px;
  }
  .active .lav-faq__item-title svg {
    transform: rotate(180deg);
    fill: #3FA9DE;
  }
  .lav-faq__item-descr {
    display: none;
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
    color: #6B6E74;
    margin-top: 16px;
  }
  .lav-faq__item-descr ul {
    list-style: disc;
    padding-left: 20px;
  }
  .active  .lav-faq__item-descr {
    display: block;
  }
`;

const newPage = `
  <div class='lav-wrap'>
    <div class='lav-fixed'>
      <div class="lav-brief__price">
      From <span class="lav-brief__price-old">$39.95</span> <span class="lav-brief__price-new">$14.95</span>
      </div>
      <button class="lav-brief__buy lav-btn">Shop Now</button>
    </div>

    <div class='lav-head'>Limited time offer  65% off + <span>free glow oil</span></div>

    <div class='lav-jumb'>
      <div class='lav-jumb__title'>Suffer from dark spots or uneven skin tone?</div>
      <div class='lav-jumb__caption'>Get visible results in <span>2-4 weeks</span>  with <br>
      Admire My Skin ™ Serum </div>

      <div class='lav-jumb__slider owl-carousel owl-theme'>
        <div class="item lav-jumb__slide">
          <img src='${settings.dir}/img/slide1.png'>
        </div>
        <div class="item lav-jumb__slide">
          <img src='${settings.dir}/img/slide2.png'>
        </div>
        <div class="item lav-jumb__slide">
          <img src='${settings.dir}/img/slide3.png'>
        </div>
        <div class="item lav-jumb__slide">
          <img src='${settings.dir}/img/slide4.png'>
        </div>
        <div class="item lav-jumb__slide">
          <img src='${settings.dir}/img/slide5.png'>
        </div>
        <div class="item lav-jumb__slide">
          <img src='${settings.dir}/img/slide6.png'>
        </div>
        <div class="item lav-jumb__slide">
          <img src='${settings.dir}/img/slide7.png'>
        </div>
        <div class="item lav-jumb__slide">
          <img src='${settings.dir}/img/slide8.png'>
        </div>
      </div>
    </div>

    <div class='lav-brief'>
      <div class='lav-brief__inner'>
        <div class='lav-brief__image'>
          <img src='${settings.dir}/img/product.png'>
        </div>
        <div class='lav-brief__info'>
          <div class='lav-brief__title'>Ultra Potent Brightening Serum For Dark Spots & Uneven Skin Tone</div>
          <div class='lav-brief__list'>
            <div class='lav-brief__item'>+ Marula Glow Oil FREE</div>
            <div class='lav-brief__item'>+ Same Day Shipping Free</div>
          </div>
        </div>
      </div>

      <div class='lav-brief__price'>
      From <span class='lav-brief__price-old'>$39.95</span> <span class='lav-brief__price-new'>$14.95</span>
      </div>

      <button class='lav-brief__buy lav-btn'>Shop Now</button>
    </div>

    <div class='lav-feedbacks'>
      <div class='lav-feedbacks__rate'>
        <img class='lav-feedbacks__stars' src='${settings.dir}/img/stars.svg'>
        <div class='lav-feedbacks__average'>4.8</div>
        <div class='lav-feedbacks__total'>(4844)</div>
      </div>
      <img class='lav-feedbacks__amazon' src='${settings.dir}/img/amazon.svg'>
    </div>

    <div class='lav-help'>
      <div class='lav-help__top'>
        <div class='lav-help__title'><span>Admire My Skin ™ Serum</span> can help with</div>
        <div class='lav-help__grid'>
          <div class='lav-help__item'>
            <img src='${settings.dir}/img/help1.png'>
            <div class='lav-help__item-caption'>Dark Spots</div>
          </div>
          <div class='lav-help__item'>
            <img src='${settings.dir}/img/help2.png'>
            <div class='lav-help__item-caption'>Blemishes</div>
          </div>
          <div class='lav-help__item'>
            <img src='${settings.dir}/img/help3.png'>
            <div class='lav-help__item-caption'>Dull & Aging Skin</div>
          </div>
          <div class='lav-help__item'>
            <img src='${settings.dir}/img/help4.png'>
            <div class='lav-help__item-caption'>Uneven Skin</div>
          </div>
        </div>
      </div>

      <div class='lav-help__bottom'>
        <ul class='lav-help__list'>
          <li class='lav-help__list-item'>Helps brighten and fade dark spots, hyperpigmentation & melasma.</li>
          <li class='lav-help__list-item'>Improves radiance and helps correct sun damage.</li>
          <li class='lav-help__list-item'>Reveals clearer, brighter skin.</li>
        </ul>
      </div>
    </div>

    <div class='lav-block lav-sutable'>
      <div class='lav-title'>Sutable for</div>
      <div class='lav-sutable__list-wrap'>
        <ul class='lav-sutable__list'>
          <li class='lav-sutable__item'>Dry Skin</li>
          <li class='lav-sutable__item'>Aging Skin</li>
          <li class='lav-sutable__item'>Acne Prone Skin</li>
          <li class='lav-sutable__item'>Combination Skin</li>
        </ul>
      </div>
    </div>

    <div class='lav-block lav-ingredients'>
      <div class='lav-title lav-ingredients__title'>Ingredients</div>
      <div class='lav-ingredients__image'>
        <img src='${settings.dir}/img/ingridients.png'
      </div>
      <div class='lav-ingredients__info'>
        <div class='lav-ingredients__subtitle'>
          Full ingredients list 
          <svg width="12" height="6" viewBox="0 0 12 6" fill="#3C3C3C" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.00003 6.00003C5.87216 6.00003 5.74416 5.95116 5.64653 5.85353L0.646531 0.853531C0.451156 0.658156 0.451156 0.341781 0.646531 0.146531C0.841906 -0.0487188 1.15828 -0.0488437 1.35353 0.146531L6.00003 4.79303L10.6465 0.146531C10.8419 -0.0488437 11.1583 -0.0488437 11.3535 0.146531C11.5488 0.341906 11.5489 0.658281 11.3535 0.853531L6.35353 5.85353C6.25591 5.95116 6.12791 6.00003 6.00003 6.00003Z"></path>
          </svg>
        </div>
        <div class='lav-ingredients__descr'>
          Propylene Glycol, Alcohol Denat., Azelaic Acid, Aqua (Water), Hamamelis Virginiana (Witch Hazel) Water, Lactic Acid (L), Kojic Acid, Synovea® HR, Salicylic Acid, L Ascorbic Acid (Vitamin C), Hydroxypropyl Methylcellulose, Sodium Hydroxide
        </div>
      </div>
    </div>

    <div class='lav-block lav-how'>
      <div class='lav-title'>How to Use</div>
      <ul class='lav-how__list'>
        <li class='lav-how__item'>Apply 1-2 pumps of serum to a clear skin to cover treatment area and improve skin tone.</li>
        <li class='lav-how__item'>  Use serum once daily, on a daily basis.</li>
        <li class='lav-how__item'>Always wear sunscreen during the day on areas where serum has been applied.</li>
        <li class='lav-how__item'>To boost results, we highly recommend using our Clinically Effective Retinoid Cream.</li>
      </ul>
      <div class='lav-how__caption'>Because of the potency of this Brightening Serum, spot test first. <br>Some users of this product may experience a minor skin irritation. If irritation becomes severe, discontinue use and seek medical advice. </div>
    </div>

    <div class='lav-block lav-other'>
      <div class='lav-title'>See how other people just like you finally got having clear glowing skin</div>
      <div class='lav-other__nav'>
        <div class='lav-other__nav-item active' data-target='1'>Dark Spots</div>
        <div class='lav-other__nav-item' data-target='2'>Aging Skin</div>
        <div class='lav-other__nav-item' data-target='3'>Blemishes</div>
        <div class='lav-other__nav-item' data-target='4'>Uneven Skin</div>
      </div>
      <div class='lav-card lav-card-1 active'>
        <div class='lav-card__image'>
          <img src='${settings.dir}/img/problem1.png'>
        </div>
        <div class='lav-card__head'>
          <div class='lav-card__user'>AlyG</div>
          <div class='lav-card__date'>July 31. 2021</div>
        </div>
        <div class='lav-card__feedback'>
          <img src='${settings.dir}/img/stars-full.svg' class='lav-card__feedback-stars' />
          <div class='lav-card__feedback-value'>5</div>
        </div>
        <div class='lav-card__info'>
          <div class='lav-card__info-title'>Miracle in a Bottle</div>
          <div class='lav-card__info-descr lav-card__info-brief'>
            I struggled with dark spots and and bad acne for all of my teen years and most of my adult life. I finally found an acne regimen that worked (curology) and this lightening cream for the&nbsp;...
          </div>
          <div class='lav-card__info-descr lav-card__info-full'>
          I struggled with dark spots and and bad acne for all of my teen years and most of my adult life. I finally found an acne regimen that worked (curology) and this lightening cream for the spots. The difference is clear in the photos (about 6 months apart). I finally found something that truly works and I am so happy with it. I only used this on the spots and tried not to use it all over, and if I noticed my skin getting dry or irritated, I would skip a few days in between treatments.
          </div>
          <div class='lav-card__info-toggle'>Read More</div>
        </div>
      </div>

      <div class='lav-card lav-card-2'>
        <div class='lav-card__image'>
          <img src='${settings.dir}/img/problem2.png'>
        </div>
        <div class='lav-card__head'>
          <div class='lav-card__user'>Helen Black</div>
          <div class='lav-card__date'>March 19. 2020</div>
        </div>
        <div class='lav-card__feedback'>
          <img src='${settings.dir}/img/stars-full.svg' class='lav-card__feedback-stars' />
          <div class='lav-card__feedback-value'>5</div>
        </div>
        <div class='lav-card__info'>
          <div class='lav-card__info-title'>Amazing result</div>
          <div class='lav-card__info-descr lav-card__info-brief'>
            Soooo, I didn’t even realize how bad my skin actually was until I took the before picture. I really thought I only needed to treat a couple sun spots. Boy was I deluded!!! I’ve never had&nbsp;....
          </div>
          <div class='lav-card__info-descr lav-card__info-full'>
            Soooo, I didn’t even realize how bad my skin actually was until I took the before picture. I really thought I only needed to treat a couple sun spots. Boy was I deluded!!! I’ve never had good skin so I guess I just stopped paying attention at some point. Y’all! I’m 10 days in and wasn’t very impressed with my progress UNTIL I actually put my photos side by side. I took photos before, on day 5, and today (day 10). On day 5 I decided I wasn’t getting any results using 2x/day (I was wrong) and opted to add differin to my treatment at night. Other than that, I’ve only been moisturizing and using sunscreen during the day. Days 8-9 were peeling and uncomfortable so I started using a heavier moisturizer. It’s not pretty, but feels much better. Using it with the differin does make it sting more, but nothing unbearable at all (for MY skin). I’ll be back in another 5 days or so with another update.***Update***I can’t get over the difference in 2 weeks! I’ve decided to give my skin a little break for the next 5-7 days. I’ve had great results so far and the tightness, redness, and flaking is wearing a bit thin on me. It’s definitely worth the results, but I’m so eager to try some make-up on this new face! I will definitely continue with this treatment, just a reduction in how often. Probably every other day, once per day. We’ll see. I’ll let you know.***Day 20 Update***After writing the last review, I changed my mind. I only skipped one treatment, heavily moisturized, and continued on with my previous routine. I’m now very low on this product, so I’ll just focus on the few remaining spots left instead of my whole face, since shipping time is about 3 weeks out right now. I’m only leaving up the day one and the day 20 pictures since they haven’t been posting in order.
          </div>
          <div class='lav-card__info-toggle'>Read More</div>
        </div>
      </div>

      <div class='lav-card lav-card-3'>
        <div class='lav-card__image'>
          <img src='${settings.dir}/img/problem3.png'>
        </div>
        <div class='lav-card__head'>
          <div class='lav-card__user'>Shelley</div>
          <div class='lav-card__date'>March 27. 2021</div>
        </div>
        <div class='lav-card__feedback'>
          <img src='${settings.dir}/img/stars-full.svg' class='lav-card__feedback-stars' />
          <div class='lav-card__feedback-value'>5</div>
        </div>
        <div class='lav-card__info'>
          <div class='lav-card__info-title'>This serum help heal my skin and my self confidence.</div>
          <div class='lav-card__info-descr lav-card__info-brief'>
            As a woman who has suffered with PCOS and cystic acne that lead to painful ingrown hairs on my face. It caused me to be really self conscious and ashamed about my skin. But this product&nbsp;... 
          </div>
          <div class='lav-card__info-descr lav-card__info-full'>
            As a woman who has suffered with PCOS and cystic acne that lead to painful ingrown hairs on my face. It caused me to be really self conscious and ashamed about my skin. But this product has been a godsend. This combined with an acne treatment has helped me so much.
          </div>
          <div class='lav-card__info-toggle'>Read More</div>
        </div>
      </div>

      <div class='lav-card lav-card-4'>
        <div class='lav-card__image'>
          <img src='${settings.dir}/img/problem4.png'>
        </div>
        <div class='lav-card__head'>
          <div class='lav-card__user'>GoG8RS</div>
          <div class='lav-card__date'>January 07. 2021</div>
        </div>
        <div class='lav-card__feedback'>
          <img src='${settings.dir}/img/stars-full.svg' class='lav-card__feedback-stars' />
          <div class='lav-card__feedback-value'>5</div>
        </div>
        <div class='lav-card__info'>
          <div class='lav-card__info-title'>Melasma Miracle Worker!</div>
          <div class='lav-card__info-descr lav-card__info-brief'>
            I was hesitant to share my pictures because my before was so embarrassing, but I want fellow melasma sufferers to know there is something that actually works. I’ve spent thousands of&nbsp;... 
          </div>
          <div class='lav-card__info-descr lav-card__info-full'>
            I was hesitant to share my pictures because my before was so embarrassing, but I want fellow melasma sufferers to know there is something that actually works. I’ve spent thousands of dollars on serums, chemical peels, and even prescription bleaching creams, and nothing ever worked for my stubborn melasma. It was so bad, it couldn’t even be covered by layers of makeup. I always thought the more expensive a product was, the better it would work, so I had zero expectations for this based on the low price point. After years of trying everything out there, this is the only product that has worked! I followed the instructions carefully and took a 30 day pause every 3 months, plus wore pure zinc sunscreen every day. It not only lightened my dark patches, they are almost completely gone after a year. I would give it 100 stars if I could.
          </div>
          <div class='lav-card__info-toggle'>Read More</div>
        </div>
      </div>
    </div>

    <div class='lav-special'>
      <div class='lav-special__title'>Special offer</div>
      <div class='lav-special__caption'>Limited time offer  65% off + free glow oil</div>
    </div>

    <div class='lav-offer'>
      <div class='lav-offer__image'>
        <img src='${settings.dir}/img/product.png' />
      </div>
      <div class='lav-offer__title'>Ultra Potent Brightening Serum</div>
      <div class='lav-offer__trial'>Get your 30 day trial* for only <span>$14.95</span></div>
      <div class='lav-offer__caption'>*Automatically renews at $39.95 monthly until cancelled. 
        <div class='lav-offer__subscription'>
          Subscription Details
          <div class='lav-offer__popup'>
          
          </div>
        </div>
      </div>
      <div class='lav-offer__benefits'>
        <div class='lav-offer__benefits-item'>Marula Glow oil FREE</div>
        <div class='lav-offer__benefits-divider'></div>
        <div class='lav-offer__benefits-item'>Same day Shipping FREE</div>
      </div>
      <button class='lav-offer__buy lav-btn'>Add To Cart</button>
      <button class='lav-offer__paypal lav-btn'>
        <img src='${settings.dir}/img/paypal.png'>
      </button>
    </div>

    <div class='lav-guaranty'>
      <div class='lav-guaranty__safe'>
        <div class='lav-guaranty__safe-title'>Guaranteed SAFE Checkout</div>
        <div class='lav-guaranty__safe-image'>
          <img src='${settings.dir}/img/safe.png'>
        </div>
      </div>
    </div>

    <div class='lav-delivery'>
      <div class='lav-delivery__item'>
        <div class='lav-delivery__title'>Place order</div>
        <div class='lav-delivery__caption lav-delivery__caption-today'>Today&nbsp;&nbsp;<span>Jun 17, 2021</span></div>
      </div>
      <div class='lav-delivery__item'>
        <div class='lav-delivery__title'>Delivery</div>
        <div class='lav-delivery__caption lav-delivery__caption-delivery'>1-4 days
        <span>Jun 18 -21, 2021</span></div>
      </div>
      <div class='lav-delivery__item'>
        <div class='lav-delivery__title'>100% money back guarantee</div>
        <div class='lav-delivery__caption'>After 60 days</div>
      </div>
    </div>

    <div class='lav-guaranty'>
      <div class='lav-guaranty__image'>
        <img src='${settings.dir}/img/guaranty.png'>
      </div>
      <div class='lav-guaranty__title'>60-DAY MONEY BACK GUARANTEE</div>
      <div class='lav-guaranty__caption'>
        We want to make sure you LOVE the brightening serum. So if you haven't noticed any visible results after 60 days, message our support team for a full refund!
      </div>
    </div>

    <div class='lav-faq'>
      <div class='lav-faq__title'>Frequently Asked Questions</div>
      <div class='lav-faq__list'>
        <div class='lav-faq__item'>
          <div class='lav-faq__item-title'>
            Improved formula
            <svg width="12" height="6" viewBox="0 0 12 6" fill="#3C3C3C" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.00003 6.00003C5.87216 6.00003 5.74416 5.95116 5.64653 5.85353L0.646531 0.853531C0.451156 0.658156 0.451156 0.341781 0.646531 0.146531C0.841906 -0.0487188 1.15828 -0.0488437 1.35353 0.146531L6.00003 4.79303L10.6465 0.146531C10.8419 -0.0488437 11.1583 -0.0488437 11.3535 0.146531C11.5488 0.341906 11.5489 0.658281 11.3535 0.853531L6.35353 5.85353C6.25591 5.95116 6.12791 6.00003 6.00003 6.00003Z"/>
            </svg>
          </div>
          <div class='lav-faq__item-descr'>
            With a unique formulation that includes Synovea® HR, Kojic Acid, Azelaic Acid, Lactic Acid, Salicylic Acid and Vitamin C, Admire my Skin Brightening Serum outperforms other dark spot correctors and creams on the market.
          </div>
        </div>

        <div class='lav-faq__item'>
          <div class='lav-faq__item-title'>
            How to use
            <svg width="12" height="6" viewBox="0 0 12 6" fill="#3C3C3C" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.00003 6.00003C5.87216 6.00003 5.74416 5.95116 5.64653 5.85353L0.646531 0.853531C0.451156 0.658156 0.451156 0.341781 0.646531 0.146531C0.841906 -0.0487188 1.15828 -0.0488437 1.35353 0.146531L6.00003 4.79303L10.6465 0.146531C10.8419 -0.0488437 11.1583 -0.0488437 11.3535 0.146531C11.5488 0.341906 11.5489 0.658281 11.3535 0.853531L6.35353 5.85353C6.25591 5.95116 6.12791 6.00003 6.00003 6.00003Z"/>
            </svg>
          </div>
          <div class='lav-faq__item-descr'>
            <ul>
              <li>Apply 1-2 pumps of serum to a clear skin to cover treatment area and improve skin tone.</li>
              <li>Use serum once daily, on a daily basis.</li>
              <li>Always wear sunscreen during the day on areas where serum has been applied.</li>
            </ul>
            <p>Because of the potency of this Brightening Serum, spot test first.</p>
            <p>Some users of this product may experience a minor skin irritation. If irritation becomes severe, discontinue use and seek medical advice. </p>
          </div>
        </div>

        <div class='lav-faq__item'>
          <div class='lav-faq__item-title'>
            Tips for success
            <svg width="12" height="6" viewBox="0 0 12 6" fill="#3C3C3C" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.00003 6.00003C5.87216 6.00003 5.74416 5.95116 5.64653 5.85353L0.646531 0.853531C0.451156 0.658156 0.451156 0.341781 0.646531 0.146531C0.841906 -0.0487188 1.15828 -0.0488437 1.35353 0.146531L6.00003 4.79303L10.6465 0.146531C10.8419 -0.0488437 11.1583 -0.0488437 11.3535 0.146531C11.5488 0.341906 11.5489 0.658281 11.3535 0.853531L6.35353 5.85353C6.25591 5.95116 6.12791 6.00003 6.00003 6.00003Z"/>
            </svg>
          </div>
          <div class='lav-faq__item-descr'>
            To boost results, we highly recommend using our “Clinically Effective Retinoid Cream” and “Citrus Glow Drops.”
          </div>
        </div>

        <div class='lav-faq__item'>
          <div class='lav-faq__item-title'>
            About admire my skin
            <svg width="12" height="6" viewBox="0 0 12 6" fill="#3C3C3C" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.00003 6.00003C5.87216 6.00003 5.74416 5.95116 5.64653 5.85353L0.646531 0.853531C0.451156 0.658156 0.451156 0.341781 0.646531 0.146531C0.841906 -0.0487188 1.15828 -0.0488437 1.35353 0.146531L6.00003 4.79303L10.6465 0.146531C10.8419 -0.0488437 11.1583 -0.0488437 11.3535 0.146531C11.5488 0.341906 11.5489 0.658281 11.3535 0.853531L6.35353 5.85353C6.25591 5.95116 6.12791 6.00003 6.00003 6.00003Z"/>
            </svg>
          </div>
          <div class='lav-faq__item-descr'>
            Admire My Skin was founded on believing that advanced products that deliver results should be available to everyone. Our products deliver visible results using proven clinical-grade ingredients – no prescription required.
          </div>
        </div>
      </div>
    </div>

  </div>
`;

const stylesEl = document.createElement('style');
stylesEl.innerHTML = styles;
document.body.appendChild(stylesEl);
/*** STYLES / end ***/

/********* Custom Code **********/
init();
function init() {
  gaEvent('loaded');
  document
    .querySelector('.gryffeditor')
    .insertAdjacentHTML('beforebegin', newPage);
  console.log('init');

  for (let item of document.querySelectorAll('.lav-faq__item')) {
    item.addEventListener('click', function () {
      gaEvent(
        'Click on Faq item',
        item.querySelector('.lav-faq__item-title').innerText
      );
      item.classList.toggle('active');
    });
  }

  for (let item of document.querySelectorAll('.lav-brief__buy')) {
    item.addEventListener('click', function () {
      gaEvent('Click on Shop now button');
      document
        .querySelector('.lav-special')
        .scrollIntoView({ behavior: 'smooth' });
    });
  }

  for (let item of document.querySelectorAll('.lav-other__nav-item')) {
    item.addEventListener('click', function () {
      if (document.querySelector('.lav-other__nav-item.active')) {
        document
          .querySelector('.lav-other__nav-item.active')
          .classList.remove('active');
      }

      if (document.querySelector('.lav-card.active')) {
        document.querySelector('.lav-card.active').classList.remove('active');
      }

      gaEvent('Click on tab on section before and after', item.innerText);

      item.classList.add('active');
      document
        .querySelector('.lav-card-' + item.dataset.target)
        .classList.add('active');
    });
  }

  for (let item of document.querySelectorAll('.lav-card__info-toggle')) {
    item.addEventListener('click', function () {
      if (item.innerText == 'Read More') {
        item.innerText = 'Read Less';
        document.querySelector('.active .lav-card__info-brief').style.display =
          'none';
        document.querySelector('.active .lav-card__info-full').style.display =
          'block';
        gaEvent('Click on Read more');
      } else {
        item.innerText = 'Read More';
        document.querySelector('.active .lav-card__info-brief').style.display =
          'block';
        document.querySelector('.active .lav-card__info-full').style.display =
          'none';
      }
    });
  }

  document
    .querySelector('.lav-offer__buy')
    .addEventListener('click', function (e) {
      e.preventDefault();
      gaEvent('Click on payment method', 'Add to cart');
      this.classList.add('lav-offer__buy-disabled');
      document.querySelector('.gf_add-to-cart').click();
    });

  document
    .querySelector('.lav-offer__paypal')
    .addEventListener('click', function (e) {
      e.preventDefault();
      gaEvent('Click on payment method', 'PayPal');
      this.classList.add('lav-offer__buy-disabled');
      document
        .querySelector('.lav-offer__buy')
        .classList.add('lav-offer__buy-disabled');
      document.querySelector('.gf_add-to-cart').click();
    });

  var fixedPriceEl = document.querySelector('.lav-fixed');

  window.onscroll = function () {
    if (document.querySelector('.lav-feedbacks').offsetTop < window.scrollY) {
      fixedPriceEl.classList.add('active');
    } else {
      fixedPriceEl.classList.remove('active');
    }
  };

  document
    .querySelector('.lav-ingredients__info')
    .addEventListener('click', function () {
      this.classList.toggle('active');
      gaEvent('Click at Full ingredients list');
    });

  document
    .querySelector('.lav-offer__subscription')
    .addEventListener('click', function () {
      gaEvent('Click on Subscription Details');
    });

  addOfferPopup();
  initSlider();
  initDelivery();
  changeFeedabcks();
  initChanges();
}

function initChanges() {
  if (
    document.querySelector('#r-1640116839081') &&
    document.querySelector('#r-1638224949854') &&
    document.querySelector('#e-1640116839147 .text-edit h1')
  ) {
    document
      .querySelector('#r-1640116839081')
      .insertAdjacentElement(
        'afterend',
        document.querySelector('#r-1638224949854')
      );

    document.querySelector('#e-1640116839147 .text-edit h1').innerText =
      'Real People Real Results';
  } else {
    setTimeout(initChanges, 1000);
  }
}

function changeFeedabcks() {
  if (document.querySelector('.wc_tab_links.wc_wf_cls')) {
    document
      .querySelector('.wc_tab_links.wc_wf_cls')
      .insertAdjacentElement(
        'afterend',
        document.querySelector('.wc_review_form_btns')
      );
    document.querySelector(
      '.wc_review_listing_select select.wc_select_drop'
    ).value = 'highest-rating';
    $('.wc_review_listing_select select.wc_select_drop').change();

    document
      .querySelector('.wc_tab_links a[data-tab="wc_reviews_tab"]')
      .addEventListener('click', function () {
        gaEvent('Click on Reviews tab');
      });

    document
      .querySelector('.wc_tab_links a[data-tab="wc_questions_tab"]')
      .addEventListener('click', function () {
        gaEvent('Click on Questions tab');
      });
  } else {
    setTimeout(changeFeedabcks, 1000);
  }
}

function addOfferPopup() {
  if (document.querySelector('.rc_popup__block')) {
    document
      .querySelector('.lav-offer__popup')
      .insertAdjacentHTML(
        'afterbegin',
        document.querySelector('.rc_popup__block').cloneNode(true).innerHTML
      );

    document.querySelector(
      '.lav-offer__popup .rc_popup__how_it_works strong'
    ).innerText =
      document
        .querySelector('.lav-offer__popup .rc_popup__how_it_works strong')
        .innerText.replace('subscriptions', 'subscription') + 's';
  } else {
    setTimeout(addOfferPopup, 1000);
  }
}

function initSlider() {
  if (typeof $().owlCarousel == 'function') {
    var owl = $('.lav-jumb__slider');
    owl.owlCarousel({
      loop: true,
      margin: 10,
      // autoplay: true,
      items: 1,
    });
    owl.on('changed.owl.carousel', function (event) {
      gaEvent('Slide the photo slider');
    });
  } else {
    setTimeout(initSlider, 1000);
  }
}

function initDelivery() {
  var today = new Date()
    .toDateString()
    .replace(/\w+/, '')
    .trim()
    .replace(' 2022', ', 2022');

  var day = parseInt(today.match(/\d+/)[0]);
  var range = [day + 1, day + 4];
  console.log(range);

  document.querySelector('.lav-delivery__caption-today span').innerText = today;

  document.querySelector('.lav-delivery__caption-delivery span').innerText =
    today.replace(day, range.join('-'));
}
