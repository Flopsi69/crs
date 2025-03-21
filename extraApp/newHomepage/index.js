// document.body.classList.add('lav-preloader');

// setTimeout(() => {
//   document.body.classList.remove('lav-preloader');
// }, 1200);
console.log('initExp');

/********* Settings **********/
const settings = {
  dir: 'https://flopsi69.github.io/crs/extraApp/newHomepage',
  clarity: true,
  observe: false,
};

let device = 'desktop';

if (window.innerWidth < 768) {
  device = 'mobile';
}
//Hotjar
if (settings.clarity) {
  const clarityInterval = setInterval(function () {
    if (typeof clarity == 'function') {
      clearInterval(clarityInterval);
      clarity('set', 'new_hp_design_' + device, 'variant_1');
    }
  }, 1000);
}

// Alalytic
function gaEvent(action, label) {
  if (!label) {
    label = '';
  }
  try {
    var objData = {
      event: 'event-to-ga',
      eventCategory: 'Exp — New HP design ' + device,
      eventAction: action,
      eventLabel: label,
      eventValue: '',
    };
    console.log('EventFire:', objData);
    dataLayer.push(objData);
  } catch (e) {
    console.log('Event Error:', e);
  }
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

const sliderStyles = document.createElement('link');
sliderStyles.rel = 'stylesheet';
sliderStyles.href =
  'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.1/dist/css/splide-core.min.css';
document.body.appendChild(sliderStyles);

let sliderScript = document.createElement('script');
sliderScript.src =
  'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.1/dist/js/splide.min.js';
document.body.append(sliderScript);

// Styles
const styles = `
  @font-face {
    font-family: "nba";
    src: url("${settings.dir}/fonts/nba.woff") format("woff");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "nba";
    src: url("${settings.dir}/fonts/nba-med.woff") format("woff");
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: "nba";
    src: url("${settings.dir}/fonts/nba-sb.woff") format("woff");
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: "nbi Pro";
    src: url("${settings.dir}/fonts/nbiPro-med.woff") format("woff");
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: "nbi Pro";
    src: url("${settings.dir}/fonts/nbiPro.woff") format("woff");
    font-weight: 400;
    font-style: normal;
  }
  [data-theme="light"] .nav-bg {
    display: none;
  }
  .lav-hat .lav-container {
    padding: 0;
    max-width: 100%!important;
    width: 100%;
  }
  .lav-preloader {
    position: relative;
    overflow: hidden;
  }
  .lav-preloader:before {
    content: '';
    position: fixed;
    left: -10px;
    top: -10px;
    right: -10px;
    bottom: -10px;
    background: #fff;
    z-index: 9999999999;
    pointer-events: none;
  }
  .container.container--nav {
    color: #fff;
  }
  .nav {
    padding: 25px 0;
    background: black;
  }
  .nav-menu .nav-link {
    font-family: 'nbi Pro';
    font-size: 20px;
    line-height: 26px;
    letter-spacing: -0.025em;
    color: #fff;
    margin-right: 0;
    font-weight: 400;
  }
  .cta-button--nav {
    display: none;
  }
  .nav-menu .nav-link + .nav-link {
    margin-left: 40px;
  }
  .nav-logo-img {
    fill: #fff;
  }

  .splide__pagination {
    padding: 0;
  }

  .footer-logo svg {
    width: 100px;
  }

  .lav-works .splide__pagination {
    position: absolute;
    left: 0;
    right: 0;
    top: 60vw;
  }
  .lav-works .splide__pagination li button {
    width: 38px;;
    height: 3px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 35px;
  }
  .lav-works .splide__pagination li button.is-active {
    background-color: #fff;
  }
  .splide__pagination li + li {
    margin-left: 5px;
  }
  .lav-compare .splide__pagination li {
    display: flex;
  }
  .lav-compare .splide__pagination li button {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #E3E3E3;
    padding: 0;
  }
  .lav-compare .splide__pagination li button.is-active {
    background-color: #36F8A3;
  }
  .lav-compare .splide__pagination {
    margin-top: 20px;
  }

  .section--footer-cta, .hero, .hero + .section, .section + .section {
    display: none;
  }
  .lav-section {
    padding: 100px 0;
    font-weight: 400;
    font-family: 'nba';
  }

  .lav-container {
    max-width: 1310px;
    padding: 0 16px;
    width: 90%;
    margin: auto;
  }

  .lav-green {
    color: #36F8A3;
  }

  .lav-btn {
    font-family: 'nba';
    outline: 0;
    transition: 0.3s;
    background: none;
    border: none;
    padding: 14px 24px;
    font-weight: 500;
    min-height: 50px;
    font-size: 14px;
    line-height: 15px;
    text-align: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #000;
    border-radius: 8px;
    max-width: 300px;
    width: 100%;
  }
  .lav-btn_green {
    background: #36F8A3;
  }
  .lav-btn_green:hover {
    background: #08c874;
  }
  .lav-btn_trans {
    border: 2px solid #000000;
  }
  .lav-btn_trans:hover {
    background-color: #000;
    color: #fff;
  }

  .lav-dark {
    background: #000;
    color: #fff;
  }
  .lav-gray {
    background: #FAFAFA;
  }

  @media(min-width: 769px) {
    .lav-mob {
      display: none!important;
    }
  }
  @media(max-width: 768px) {
    .lav-desk {
      display: none!important;
    }
  }

  .lav-center {
    text-align: center;
  }

  .lav-title {
    font-family: "nbi Pro";
    font-weight: 500;
    font-size: 85px;
    line-height: 90px;
    letter-spacing: -0.0175em;
  }

  .lav-select {
    position: relative;
    max-width: 212px;
    width: 100%;
    margin-top: 40px;
    cursor: pointer;
    margin-left: auto;
    margin-right: auto;
  }
  .lav-select__list {
    position: absolute;
    background: #fff;
    left: 0;
    right: 0;
    top: 100%;
    margin-top: -2px;
    border: 2px solid #ADADAD;
    text-align: left;
  }
  .lav-select__item {
    padding: 10px 15px;
    font-size: 14px;
    transition: 0.35s;
  }
  .lav-select__item:hover {
    background: #eaeaea;
  }
  .lav-select__item + .lav-select__item {
    border-top: 1px solid #ADADAD;
  }
  .lav-select__value {
    font-family: 'nbi Pro';
    position: relative;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #000000;
    border: 2px solid #ADADAD;
    border-radius: 4px;
    padding: 5px 15px;
    text-align: left;
  }
  .lav-select__value:before {
    content: '';
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    width: 9px;
    height: 6px;
    background: url(${settings.dir}/img/chevronIcon.svg) center no-repeat;
    background-size: contain;
    transition: 0.35s;
  }
  .lav-select__value.active:before {
    transform: rotate(-180deg);
    top: 45%;
  }
  .lav-select__list {
    display: none;
  }

  .lav-hat {
    position: fixed;
    left: 0;
    right: 0;
    z-index: 100;
    top: 0;
    min-height: 50px;
    display: flex;
    justify-content: center;
    text-align: center;
    background: #36F8A3;
    font-family: 'nba';
    font-weight: 500;
    font-size: 16px;
    line-height: 17px;
    text-align: center;
    color: #000000;
    overflow: hidden;
  }

  .lav-marquee {
    	position:absolute;
      white-space:nowrap;
      top:50%;
      left:100%;
      // bottom:0;
      transform: translateY(-50%);
    // position: absolute;
    // transform: translateY(-50%);
    // white-space: nowrap;
    // -moz-animation: marquee 40s linear infinite;
    // -webkit-animation: marquee 40s linear infinite;
    // animation: marquee 10s linear infinite;
  }

  @-moz-keyframes marquee {
    0% { transform: translateX(100%); }
    100% { transform: translateX(-100%); }
    }
    @-webkit-keyframes marquee {
    0% { transform: translateX(100%); }
    100% { transform: translateX(-100%); }
  }
  @keyframes marquee {
    0% { 
      left: 100%
    }
    100% { 
      left: -50%
    }
  }
  .lav-hat .lav-apply {
    cursor: pointer;
    display: inline-block;
    border-bottom: 1px solid #000;
  }
  .lav-hat sup {
    font-weight: 400;
  }
  .nav {
    top: 50px;
  }

  .lav-section {
    overflow: hidden;
  }

  .lav-jumb {
    // min-height: 100vh;
    padding-bottom: 60px;
    display: flex;
    align-items: center;
    padding-top: 130px;
  }
  .lav-jumb .lav-container {
  }
  .lav-jumb__title {
    position: relative;
    font-weight: 700;
    font-size: 200px;
    line-height: 175px;
    // letter-spacing: -0.0375em;
    margin-left: -10px;
    text-transform: uppercase;
    font-family: 'nbi Pro';
  }
  .lav-jumb__title:before {
    content: '';
    width: 403px;
    height: 453px;
    position: absolute;
    right: -27px;
    top: 52%;
    transform: translateY(-50%);
    background: url(${settings.dir}/img/jumb-card.png) center no-repeat;
    background-size: contain;
    z-index: 10;
  }
  .lav-jumb__two {
    margin-left: 70px;
  }
  .lav-jumb__three {
    margin-left: 160px;
  }
  .lav-jumb__four{
    margin-left: 360px;
  }
  .lav-jumb__info {
    position: relative;
    width: 302px;
    margin-top: -165px;
  }
  .lav-jumb__list {}
  .lav-jumb__item span {
    font-weight: 700;
  }
  .lav-jumb__item {
    position: relative;
    min-height: 20px;
    padding-left: 40px;
    font-size: 18px;
    line-height: 1;
    color: #FFFFFF;
  }
  .lav-jumb__item:before {
    content: '';
    width: 20px;
    height: 20px;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background: url(${settings.dir}/img/checkIconBlack.svg) center no-repeat;
    background-size: contain;
  }
  .lav-jumb__item + .lav-jumb__item {
    margin-top: 10px;
  }
  .lav-jumb__btn {
    margin-top: 20px;
    width: 100%;
  }

  .lav-partners {
    padding: 55px 0;
  }

  .lav-ratings {
    padding: 40px 0;
  }
  .lav-ratings__top {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .lav-ratings__top > img {
    width: 43px;
    margin-right: 19px;
  }
  .lav-ratings__stars {
    display: flex;
    align-items: center;
  }
  .lav-ratings__stars-caption {
    font-size: 20px;
    line-height: 1;
    letter-spacing: -0.025em;
    color: #646464;
    margin-top: 4px;
  }
  .lav-ratings__stars > img {
    width: 208px;
    margin-right: 9px;
  }
  .lav-ratings__caption {
    font-size: 20px;
    line-height: 1;
    letter-spacing: -0.025em;
    color: #646464;
    margin-top: 18px;
  }

  .container {
    max-width: 1310px;
    padding: 0 16px;
  }
  .lav-feedbacks {
    padding: 100px 0;
  }
  .lav-feedbacks__slider {
    margin-top: 60px;
  }
  .lav-feedbacks__slide {
    border-radius: 14px;
    background: #FFFFFF;
    border: 2px solid #36F8A3;
    box-shadow: 0px 6.0844px 18.4376px rgba(0, 0, 0, 0.11);
    padding: 40px 25px;
  }
  .lav-feedbacks__title {
    font-family: 'nbi Pro';
    font-weight: 400;
    font-size: 40px;
    line-height: 116.5%;
    letter-spacing: -0.025em;
    color: #FFFFFF;
  }
  .lav-feedbacks__subtitle {
    margin: 20px 0;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.5;
    letter-spacing: 0.105em;
    text-transform: uppercase;
    color: #000000;
  }
  .faq-content {
    display: none;
  }
  .faq-header .faq-icon {
    transition: 0.35s;
  }
  .faq-header.active .faq-icon {
    transform: rotate(180deg);
  }
  .lav-feedbacks__caption {
    font-weight: 600;
    font-size: 12px;
    line-height: 13px;
    text-transform: uppercase;
    color: #000000;
    opacity: 0.32;
    margin: 20px 0;
    display: inline-block;
    transition: 0.35s;
    text-decoration: none;
  }
  .lav-feedbacks__caption:hover {
    opacity: 0.8;
  }
  .lav-feedbacks__descr {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #000000;
  }
  .lav-feedbacks__author {
    font-weight: 400;
    font-size: 16px;
    line-height: 141.1%;
    color: #000000;
  }
  .lav-feedbacks__author span {
    color: #646464;
  }
  .lav-why {
    padding: 150px 0 ;
  }
  .lav-why__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    margin-top: 60px;
  }
  .lav-why__item {
    display: flex;
    flex-flow: column;
  }
  .lav-why__item-title {
    font-family: "nbi Pro";
    font-weight: 400;
    font-size: 40px;
    line-height: 45px;
    letter-spacing: -0.025em;
    color: #000;
    margin-top: auto;
  }
  .lav-why__item-descr {
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #646464;
  }
  .lav-why__item-expand {
    transition: 0.35s;
  }

  .lav-works {
    padding: 150px 0;
  }
  .lav-works__slider {
    margin-top: 60px;
  }
  .lav-works__image {
    line-height: 0;
    border-radius: 8px;
  }
  .lav-works__info {
    margin-top: 40px;
    display: flex;
    align-items: flex-start;
  }
  .lav-works__info-num {
    margin-right: 20px;
    font-weight: 400;
    font-size: 24px;
    line-height: 26px;
    letter-spacing: -0.025em;
  }
  .lav-works__info-inner {
    flex-grow: 1;
  }
  .lav-works__info-title {
    font-family: "nbi Pro";
    font-weight: 400;
    font-size: 24px;
    padding-right: 20px;
    line-height: 30px;
    letter-spacing: -0.025em;
  }
  .lav-works__info-descr {
    margin-top: 20px;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #989898;
  }
  .lav-works__bottom {
    margin-top: 40px;
    text-align: center;
  }
  .lav-works__btn {
    max-width: 300px;
    width: 100%;
  }
  .lav-works__caption {
    margin-top: 40px;
    font-weight: 400;
    font-size: 11px;
    line-height: 15px;
    color: #989898;
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
  }

  .lav-compare {
    padding: 75px 0;
  }
  .lav-compare__title {
    text-align: center;
  }
  .lav-compare__title img {
    width: 85px;
    position: relative;
    top: -4px;
  }
  .lav-compare__slider, .lav-compare__table.lav-desk {
    margin-top: 60px;
    margin-bottom: 40px;
  }
  .lav-compare__table {

  }
  .lav-compare__row {
    display: flex;
    border-bottom: 2px solid #E3E3E3;
  }
  .lav-compare__row + .lav-compare__row img {
    width: 20px;
  }
  .lav-compare__col {
    flex: 1;
    padding: 10px 45px;
    min-height: 64px;
    display: flex;
    flex-flow: column;
    justify-content: center;
  }
  .lav-compare__col:nth-child(2), .lav-compare__col:nth-child(3) {
    text-align: center;
    justify-content: center;
    align-items: center;
  }
  .lav-compare__row:first-child .lav-compare__col:nth-child(2) {
    border-radius: 20px 20px 0px 0px;
    border-top: 2px solid #36F8A3;
  }
  .lav-compare__row:last-child .lav-compare__col:nth-child(2) {
    border-bottom: 2px solid #36F8A3;
  }
  .lav-compare__col:nth-child(2) {
    border-left: 2px solid #36F8A3;
    border-right: 2px solid #36F8A3;
  }
  .lav-compare__btn-wrap {
    text-align: center;
  }
  .lav-compare__extra {
    padding: 65px 45px 55px;
  }
  .lav-compare__extra-img {
    max-width: 130px;
  }
  .lav-compare__extra-title {
    font-family: 'nbi Pro';
    font-weight: 500;
    font-size: 32px;
    line-height: 1.2;
    letter-spacing: -0.025em;
    color: #000000;
    margin-top: 25px;
  }

  .lav-compare__choose {
    padding: 65px 45px 20px;
  }
  .lav-compare__choose-img {
    max-width: 120px;
  }
  .lav-better {
    padding: 75px 0;
  }
  .lav-better__icon {
    line-height: 0;
    margin: 40px auto;
  }
  .lav-better__select {
    display: none;
  }
  .lav-better__average {
    margin: 40px auto;
  }
  .lav-better__average-title {
    font-weight: 600;
    font-size: 16px;
    line-height: 17px;
    text-transform: uppercase;
    color: #989898;
  }
  .lav-better__average-price {
    margin-top: 10px;
    color: #888;
    font-style: normal;
    font-size: 32px;
    line-height: 34px;
    font-weight: 400;
  }
  .lav-better__average-price span {
    color: #000;
    font-weight: 600;
  }

  .lav-scores {
    display: flex;
    justify-content: center;
  }
  .lav-scores__item {
    max-width: 238px;
    width: 100%;
    border-radius: 14px;
    padding: 22px;
    background: #F4F4F4;
    border: 2px solid #D9D9D9;
  }
  .lav-scores__item_green {
    background: #ECFFF6;
    border-color: #36FA9C;
  }
  .lav-scores__item + .lav-scores__item {
    margin-left: 40px;
  }
  .lav-scores__graph {
    line-height: 0;
    margin-bottom: -15px;
  }
  .lav-scores__num {
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 1.04;
    color: #9A0000;
  }
  .lav-scores__item_green .lav-scores__num {
    color: #00A07A;
  }
  .lav-scores__score {
    color: #989898;
    font-size: 10px;
    line-height: 1.1;
    font-weight: 600;
  }
  .lav-scores__subtitle {
    font-weight: 600;
    font-size: 16px;
    line-height: 17px;
    text-transform: uppercase;
    color: #000;
    margin-top: 25px;
  }
  .lav-scores__price {
    font-family: 'nbi Pro';
    font-weight: 500;
    font-size: 32px;
    line-height: 34px;
    letter-spacing: -0.01em;
    text-transform: uppercase;
    color: #9A0000;
    margin-top: 10px;
  }
  .lav-scores__item_green .lav-scores__price {
    color: #028B6A;
  }
  .lav-scores__caption {
    margin-top: 18px;
    font-weight: 400;
    font-size: 10px;
    color: #000000;
    opacity: 0.5;
    line-height: 1.5;
  }
  .lav-scores__subcaption {
    font-size: 14px;
    line-height: 18px;
    margin-top: 40px;
    color: #888888;
  }

  .lav-plans {
    padding: 75px 0;
  }
  .lav-plans__toggler {
    display: flex;
    justify-content: center;
    margin-top: 80px;
  }
  .lav-plans__toggle {
    position: relative;
    background: #fff;
    border: 2px solid #000000;
    max-width: 180px;
    width: 100%;
    text-align: center;
    font-weight: 500;
    font-size: 14px;
    line-height: 15px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #000000;
    transition: 0.35s;
    padding: 15px;
  }
  .lav-plans__toggle:not(.active) {
    cursor: pointer;
  }
  .lav-plans__toggle span {
    position: absolute;
    top: -10px;
    transform: translateY(-100%);
    left: 50%;
    width: 153px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #FFFFFF;
    background: linear-gradient(93.4deg, #6251BB 3.76%, #4581C8 100%);
    border-radius: 8px;
  }
  .lav-plans__toggle span:before {
    content: '';
    position: absolute;
    background: url(${settings.dir}/img/tip-arrow.svg) center no-repeat;
    background-size: contain;
    width: 12px;
    height: 4px;
    bottom: 0;
    left: 18px;
    transform: translateY(99%);
  }
  .lav-plans__toggle:first-child {
    border-radius: 8px 0 0 8px;
  }
  .lav-plans__toggle:last-child {
    border-radius: 0 8px 8px 0;
  }
  .lav-plans__toggle.active {
    background: #000;
    color: #fff;
  }
  @media(min-width: 992px) {
    .lav-plans__toggle:not(.active):hover {
      background: #e9e9e9;
    }
  }
  .lav-plans__toggle {
  }
  .lav-plans__table {
    margin-top: 65px;
    margin-bottom: 40px;
  }
  .lav-plans__row {
    display: flex;
    border-bottom: 2px solid #E3E3E3;
  }
  .lav-plans__row + .lav-plans__row img {
    width: 20px;
  }
  .lav-plans__col {
    flex: 1;
    padding: 10px 45px;
    min-height: 64px;
    display: flex;
    flex-flow: column;
    justify-content: center;
  }
  .lav-plans__row:first-child .lav-plans__col {
    font-weight: 500;
    font-size: 32px;
    line-height: 1.2;
    text-align: center;
    letter-spacing: -0.025em;
    padding-top: 0;
    padding-bottom: 35px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .lav-better__car {
    font-family: 'nbi Pro'
    font-weight: 400;
    font-size: 32px;
    line-height: 26px;
    margin-top: 20px;
    text-align: center;
    letter-spacing: -0.025em;
  }
  .lav-plans__row-last  {
    border-bottom: 0;
  }
  .lav-plans__row-last .lav-plans__col {
    padding-top: 19px;
    padding-bottom: 0;
    display: block;
  }
  .lav-plans__row-last .lav-plans__col:first-child {
    font-weight: 700;
    font-size: 27px;
    line-height: 1;
    color: #000000;
  }
  .lav-plans__price {
    font-weight: 700;
    font-size: 27px;
    line-height: 29px;
    color: #000000;
    padding-right: 5px;
  }
  .lav-plans__price-old {
    text-decoration: line-through;
    font-size: 27px;
    line-height: 29px;
    color: #000000;
  }
  .lav-plans__caption {
    font-size: 14px;
    line-height: 15px;
  }

  .lav-plans__col:nth-child(2), .lav-plans__col:nth-child(3) {
    text-align: center;
    justify-content: center;
    align-items: center;
  }
  .lav-plans__btn-wrap {
    text-align: center;
  }

  .lav-connect {
    position: relative;
    padding: 150px 0;
  }
  .lav-connect__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .lav-connect__title {
    font-family: 'nbi Pro';
    font-weight: 400;
    font-size: 40px;
    line-height: 1.16;
    letter-spacing: -0.025em;
    color: #fff;
    margin-right: auto;
    max-width: 50%;
  }
  .lav-connect__input-wrap {
    position: relative;
    display: flex;
    margin: 0 40px;
    flex-grow: 1;
    max-width: 430px;
  }
  .lav-connect__input {
    background: #FFFFFF;
    border-radius: 9px;
    border: none;
    outline: none;
    padding: 18px 24px;
    font-weight: 400;
    font-family: 'nba';
    font-size: 16px;
    line-height: 18px;
    color: #000;
    flex-grow: 1;
  } 
  .lav-connect__input::placeholder {
    color: #000;
  }
  .lav-connect__search {
    position: absolute;
    right: 0;
    padding: 18px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
  .lav-connect__plaid {
    flex-shrink: 0;
    height: 29px;
  }
  .lav-connect__fail {
    display: none;
    align-items: center;
    margin-left: 40px;
    font-family: 'nbi Pro';
    font-weight: 400;
    font-size: 24px;
    line-height: 1;
    letter-spacing: -0.025em;
    color: #989898;
  }
  .lav-connect__success {
    display: none;
    align-items: center;
    margin-left: 40px;
    font-family: 'nbi Pro';
    font-weight: 400;
    font-size: 24px;
    line-height: 1;
    letter-spacing: -0.025em;
    color: #36F8A3;
  }
  .lav-connect__refresh {
    cursor: pointer;
  }
  .lav-fail .lav-connect__fail {
    display: flex;
  }
  .lav-success .lav-connect__success, .lav-fail .lav-connect__fail {
    display: flex;
    min-height: 54px;
  }
  .lav-fail .lav-connect__input-wrap, .lav-success .lav-connect__input-wrap {
    display: none;
  }
  .lav-fail .lav-connect__plaid, .lav-success .lav-connect__plaid {
    position: absolute;
    right: 10vw;
    bottom: 40px;
  }
  .lav-connect__fail img {
    margin-left: 18px;
  }
  .lav-connect__couple {
    display: flex;
    margin-left: 20px;
    line-height: 0;
  }
  .lav-connect__success img {
    width: 12px;
    margin-left: 17px;
  }
  .lav-connect__couple img {
    width: 35px;
    height: 35px;
    min-width: 35px;
    border-radius: 50%;
    margin-left: 0;
  }
  .lav-connect__couple img + img {
    margin-left: -10px;
  }
  .lav-connect .lav-container {
    width: 100%;
  }
  .section.section--faq {
    padding: 75px 0;
  }
  #FAQ .section-heading {
    font-family: 'nbi Pro';
    font-weight: 500;
    font-size: 48px;
    line-height: 1.16;
    text-align: center;
    letter-spacing: -0.0175em;
    color: #000000;
  }
  .faq-wrap {
    max-width: 100%;
  }
  [data-theme= "light"] .faq-item {
    background: none;
    border: none;
    border-radius: 0;
    margin: 0;
  }
  [data-theme= "light"] .faq-item + .faq-item {
    border-top: 2px solid #F4F4F4;
  }
  .faq-headline {
    font-family: 'nba';
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    color: #000000;
  }
  .lav-works__image img {
    width: 100%;
  }
  .faq-header {
    padding: 15px 30px;
    padding-right: 60px;
  }
  .faq-icon {
    background: #36F8A3;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .faq-icon svg {
    width: 12px;
    height: 7px;
    margin-top: 1px;
  }
  .faq-content {
    width: auto!important;
    padding-left: 30px;
    padding-right: 60px;
  }
  .faq-answer {
    border: none;
    font-family: 'nba';
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #888888;
    padding-top: 8px;
    padding-bottom: 24px;
  }
  .faq-answer p {
    margin: 0;
  }
  .faq-answer p + p {
    margin-top: 16px;
  }


  .lav-join {
    background: #000 url(${settings.dir}/img/join-bg.jpeg) bottom right no-repeat;
    background-size: contain;
  }
  .lav-join__title {
    font-family: 'nbi Pro';
    font-weight: 500;
    font-size: 64px;
    line-height: 1.16;
    letter-spacing: -0.0175em;
    color: #FFFFFF;
    margin-bottom: 40px;
    max-width: 590px;
  }

  [data-theme= "light"] .footer {
    background: #fff;
  }
  .footer {
    padding-top: 100px;
    padding-bottom: 80px;
  }
  .footer-heading {
    font-size: 16px;
    line-height: 22px;
    font-weight: 700;
    font-family: 'nba';
    text-transform: none;
    letter-spacing: 0;
  }
  .footer-link {
    margin-top: 10px;
    color: #888;
    font-size: 16px;
    line-height: 22px;
    font-family: 'nba';
    font-weight: 400;
  }
  .footer-divider {
    display: none;
    background-color: transparent;
  }
  .footer-grid {
    margin-left: 0;
    grid-template-columns: auto 1fr 1fr 1fr;
  }
  .footer-legal-notice {
    max-width: 100%;
  }
  .footer-notice {
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #000000;
    font-family: 'nba';
  }
  .footer-notice + div {
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #000000;
    font-family: 'nba';
    margin-top: 2px;
  }
  .footer-legal-notice {
    font-family: 'nba';
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }
  @media(max-width: 1400px) {
    .lav-jumb__title:before {
      width: 300px;
    }
    .lav-jumb__title {
      font-size: 180px;
    }
  }
  @media(max-width: 1200px) {
    .lav-jumb__title {
      font-size: 120px;
      line-height: 1.05;
    }
    .lav-jumb__info {
      margin-top: -100px;
    }
    .lav-jumb__title:before {
      width: 250px;
      height: 300px;
      top: 35%;
    }
  }
  @media(max-width: 992px) {
    .lav-join__title {
      max-width: 50%;
      font-size: 48px;
    }
    .lav-feedbacks__slide {
      max-width: 80%;
    }
    .lav-compare__col {
      padding-left: 20px;
      padding-right: 20px;
    }
    .lav-compare__extra, .lav-compare__choose {
      padding-left: 20px;
      padding-right: 20px;
    }
    .lav-why__item-title {
      font-size: 32px;
      line-height: 1.2;
    }
    .lav-why__item-descr {
      font-size: 14px;
      line-height: 1.5;
    }
    .lav-why__list {
      gap: 20px;
    }
    .lav-jumb__three {
      margin-left: 80px;
    }
    .lav-jumb__two {
      margin-left: 40px;
    }
    .lav-jumb__four {
      margin-left: 325px;
    }
    .lav-jumb__title {
      font-size: 110px;
    }
  }
  @media(max-width: 768px) {
    .lav-marquee .lav-apply {
      display: none;
      // -moz-animation: marquee 12s linear infinite;
      // -webkit-animation: marquee 12s linear infinite;
      // animation: marquee 12s linear infinite;
    }
    .lav-feedbacks__title {
      font-size: 25px;
      line-height: 26px;
      letter-spacing: -0.025em;
    }
    .lav-compare__row:first-child .lav-compare__col:nth-child(2) {
      border-radius: 8px 8px 0 0;
    }
    .lav-feedbacks__slide {
      max-width: 65%;
      padding: 20px;
      border-width: 1px;
      border-radius: 8px;
      display: flex;
      align-items: flex-start;
      flex-flow: column;
    }
    .lav-feedbacks__subtitle {
      margin: 10px 0;
      font-weight: 500;
      font-size: 14px;
      line-height: 15px;
      letter-spacing: 0;
      text-transform: normal;
    }
    .lav-feedbacks {
      padding: 60px 0;
    }
    .lav-feedbacks__descr {
      font-weight: 400;
      font-size: 11px;
      line-height: 120%;
    }
    .lav-feedbacks__author {
      font-weight: 400;
      font-size: 11px;
      line-height: 141.1%;
      margin: 10px 0;
    }
    .lav-feedbacks__caption {
      margin: 0;
      font-weight: 600;
      font-size: 7.5px;
      line-height: 8px;
      order: 8;
    }
    .lav-feedbacks__slider {
      margin-top: 40px;
      margin-left: -15px;
      margin-right: -15px;
    }
    .lav-better__car {
      font-size: 18px;
      line-height: 20px;
    }
    .section.section--intro {
      padding: 60px 0;
    }
    .section--intro .section-heading {
      font-size: 25px;
      line-height: 26px;
      letter-spacing: -0.025em;
      margin-bottom: 40px;
    }
    .lav-burger__close {
      position: absolute;
      z-index: 1;
      top: 20px;
      right: 18px;
    }
    .lav-connect__success, .lav-connect__fail {
      flex-flow: column;
      margin-top: 20px;
      margin-left: auto;
      margin-right: auto;
      max-width: 240px;
    }
    .lav-connect__success, .lav-connect__fail {
      font-size: 18px;
      line-height: 20px;
      letter-spacing: -0.025em;
    }
    .lav-connect__search {
      padding: 12px;
    }
    .lav-connect__success img {
      width: 12px;
    }
    .lav-connect__couple {
      order: -1;
      margin-bottom: 10px;
      margin-left: 0;
    }
    .lav-connect__couple img {
      width: 20px;
      height: 20px;
      min-width: 20px;
    }
    .lav-connect__couple img + img {
      margin-left: -3px;
    }
    .lav-connect__success img, .lav-connect__fail img {
      margin-top: 10px;
      margin-left: 0;
    }
    .lav-fail .lav-connect__plaid, .lav-success .lav-connect__plaid {
      bottom: 17px;
      right: 25px;
    }
    .cta-button.cta-button--nav {
      font-family: 'nbi Pro';
      display: block;
      margin-top: 20px;
      padding: 0;
      padding-top: 20px;
      border: none;
      border-top: 1px solid #F4F4F4;
      background: none;
      font-size: 25px;
      line-height: 26px;
      letter-spacing: -0.025em;
      color: #000000;
      font-weight: 400;
      width: 100%;
    }
    .nav-menu.active {
      position: fixed;
      z-index: 99;
      min-width: 250px;
      display: flex;
      flex-flow: column;
      text-align: left;
      justify-content: flex-start;
      align-items: flex-start;
      right: 0;
      top: 50px;
      bottom: 0;
      background: #fff;
      padding: 60px 40px;
    }
    .container--nav.active {
      position: relative;
    }
    .container--nav.active:before {
      content: '';
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      background: rgba(0, 0, 0, 0.54);
      z-index: 90;
    }
    .nav-menu .nav-link + .nav-link {
      margin-left: 0;
      margin-top: 20px;
    }
    .nav-menu.active .nav-link {
      color: #000;
      font-weight: 400;
      font-size: 25px;
      line-height: 26px;
      letter-spacing: -0.025em;
      color: #000000;
    }
    .cta-nav-mobile {
      display: none;
    }
    .lav-hat {
      font-weight: 500;
      font-size: 16px;
      line-height: 17px;
      white-space: nowrap;
    }
    .nav {
      padding: 17px 0;
    }
    .lav-hat .lav-container {
      padding: 0;
    }
    .lav-jumb__title {
      font-size: 100px;
      line-height: 94.5%;
      letter-spacing: -0.01em;
      margin-left: -3px;
    }
    .lav-jumb__two, .lav-jumb__four {
      display: block;
      text-align: right;
      margin-left: 0;
    }
    .lav-jumb__three {
      margin-left: 0;
    }
    .lav-jumb__title:before {
      width: 193px;
      height: 218px;
      top: 44%;
      right: initial;
      left: -10px;
    }
    .lav-jumb__info {
      margin-top: 10px;
      width: 100%;
      display: flex;
      flex-flow: column;
      align-items: center;
    }
    .lav-jumb {
      // min-height: auto;
      padding-bottom: 32px;
      padding-top: 110px;
    }
    .lav-jumb__btn {
      max-width: 100%;
    }
    .lav-jumb__item {
      padding-left: 34px;
      font-size: 14px;
      line-height: 14px;
    }
    .lav-partners {
      padding: 30px 0;
    }
    .lav-ratings__top > img {
      width: 20px;
      margin-right: 10px;
    }
    .lav-ratings__stars > img {
      width: 110px;
      margin-right: 10px;
    }
    .lav-ratings__stars-caption {
      font-weight: 400;
      font-size: 11px;
      line-height: 1;
      margin-top: 0;
    }
    .lav-ratings__caption {
      font-weight: 400;
      font-size: 11px;
      line-height: 18px;
      margin-top: 5px;
    }
    .lav-ratings {
      padding: 15px 0;
    }


    .lav-why {
      padding: 60px 0;
    }
    .lav-why__list {
      display: block;
    }
    .lav-why__item + .lav-why__item {
      padding-top: 20px;
      margin-top: 20px;
      border-top: 1px solid #F4F4F4;
    }
    .lav-why__item-head {
      display: flex;
      align-items: center;
    }
    .lav-why__item-title {
      font-size: 18px;
      line-height: 1.2;
      letter-spacing: -0.025em;
      margin: 0 18px;
    }
    .lav-why__item-expand, .lav-why__item-icon {
      flex-shrink: 0;
    }
    .lav-why__item-expand {
      margin-left: auto;
    }
    .lav-why__list {
      margin-top: 20px;
    }
    .lav-why__item-body {
      display: none;
      margin-top: 16px;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      color: #646464;
      padding-left: 40px;
    }
    .lav-why__item-icon img {
      width: 20px;
    }
    .lav-why__item-head.active .lav-why__item-expand {
      transform: rotate(-180deg);
    }
    .lav-works {
      padding: 60px 0;
    }

    .lav-works__slider {
      margin-top: 40px;
    }
    .lav-works__caption {
      font-size: 11px;
      line-height: 15px;
      margin-top: 20px;
    }
    .lav-works__bottom {
      margin-top: 20px;
    }
    .lav-works__info {
      margin-top: 20px;
      max-width: 265px;
      margin-left: auto;
      margin-right: auto;
    }
    .lav-works__info-title {
      font-size: 18px;
      line-height: 20px;
      padding-right: 0;
    }
    .lav-works__info-descr {
      font-size: 14px;
      line-height: 18px;
      margin-top: 12px;
    }
    .lav-works__info-num {
      font-size: 18px;
      line-height: 20px;
    }

    .lav-compare {
      padding: 60px 0;
    }
    .lav-compare__select {
      margin-top: 0;
    }
    .lav-compare__title img {
      width: 25px;
      top: -2px;
    }
    .lav-compare__slider {
      margin-top: 40px;
      margin-bottom: 20px;
    }
    .lav-compare__extra-img, .lav-compare__choose-img {
      display: none;
    }
    .lav-compare__col:nth-child(2), .lav-compare__row, .lav-compare__row:first-child .lav-compare__col:nth-child(2), .lav-compare__row:last-child .lav-compare__col:nth-child(2) {
      border-width: 1px;
    }
    .lav-compare__col:first-child {
      font-size: 12px;
      line-height: 13px;
      flex: 1.6;
    }
    .lav-compare__btn {
      max-width: 100%;
    }
    .lav-compare__debit {
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      text-align: center;
      color: #989898;
    }
    .lav-compare__extra-title {
      margin-top: 0;
      font-size: 14px;
      line-height: 16px;
    }
    .lav-compare__extra, .lav-compare__col {
      padding: 10px 12px;
    }
    .lav-compare__col {
      min-height: 40px;
    }

    .lav-better {
      padding: 60px 0;
    }
    .lav-better__icon {
      margin-bottom: 20px;
    }
    .lav-better__select {
      margin-top: 20px;
    }
    .lav-better__average-title {
      font-size: 9px;
      line-height: 1;
    }
    .lav-better__average-price {
      margin-top: 3px;
      font-weight: 600;
      font-size: 18px;
      line-height: 1;
    }
    .lav-better__average {
      margin: 20px 0;
    }
    .lav-scores__item + .lav-scores__item {
      margin-left: 20px;
    }
    .lav-scores__item {
      padding: 25px 16px;
    }
    .lav-scores__caption {
      font-size: 9px;
      margin-top: 11px;
      line-height: 10px;
    }
    .lav-scores__subcaption {
      font-size: 10px;
      line-height: 12px;
      margin-top: 20px;
    }
    .lav-scores__price {
      font-size: 19px;
      line-height: 20px;
      letter-spacing: -0.01em;
      margin-top: 5px;
    }
    .lav-scores__subtitle {
      font-size: 11px;
      line-height: 12px;
      margin-top: 12px;
    }
    .lav-scores__score {
      font-size: 9px;
      line-height: 10px;
    }
    .lav-scores__num {
      font-size: 30px;
    }
    .lav-scores__graph img {
      width: 39px;
    }
    .lav-scores__graph {
      margin-bottom: -5px;
    }


    .lav-plans {
      padding: 60px 0;
    }
    .lav-plans__toggler {
      margin-top: 50px;
    }
    .lav-plans__toggle {
      padding: 10px;
      width: 140px;
      border-width: 1px;
      font-size: 12px;
      padding: 12px;
    }
    .lav-plans__table {
      margin-top: 30px;
    }
    .lav-plans__toggle span {
      font-size: 10px;
      height: 22px;
      top: -8px;
      transform: translateY(-100%) translateX(-35%);
      width: 130px;
      letter-spacing: 0.05em;
    }
    .lav-plans__btn {
      width: 100%;
      max-width: 100%;
    }
    .lav-plans__col:first-child {
      flex: 1.8;
    }
    .lav-plans__row:first-child .lav-plans__col {
      justify-content: flex-end;
      font-size: 14px;
      line-height: 16px;
      letter-spacing: 0;
      padding-bottom: 9px;
      padding-left: 7px;
      padding-right: 7px;
    }
    .lav-plans__row-last .lav-plans__col:first-child {
      font-size: 12px;
      line-height: 16px;
    }
    .lav-plans__price, .lav-plans__price-old {
      padding-right: 0;
      font-size: 12px;
      line-height: 13px;
    }
    .lav-plans__caption {
      font-size: 12px;
      line-height: 13px;
    }
    .lav-plans__row-last .lav-plans__col {
      padding-top: 14px;
    }
    .lav-title {
      font-size: 25px;
      line-height: 1.2;
      text-align: center;
      letter-spacing: -0.025em;
    }
    .lav-plans__row {
      border-width: 1px;
    }
    .lav-plans__col {
      padding: 5px 12px;
      min-height: 42px;
    }
    .lav-plans__col:first-child {
      font-size: 12px;
      line-height: 16px;
    }

    .section.section--faq {
      padding: 60px 0;
    }
    #FAQ .section-heading {
      font-weight: 400;
      font-size: 25px;
      line-height: 1.2;
      letter-spacing: -0.025em;
    }
    .faq-header {
      padding: 14px 23px;
    }
    [data-theme= "light"] .faq-item + .faq-item {
      border-width: 1px;
    }
    .faq-headline {
      font-size: 14px;
      line-height: 18px;
    }
    .faq-content {
      padding-left: 23px;
      padding-right: 23px;
    }
    .faq-answer {
      padding-top: 15px;
      padding-bottom: 15px;
      font-size: 13px;
    }

    .lav-connect {
      padding: 60px 0;
    }  
    .lav-connect .lav-container {
      max-width: 450px;
    }
    .lav-connect__inner {
      display: block;
      text-align: center;
    }
    .lav-connect__title {
      max-width: 100%;
      font-size: 25px;
      line-height: 26px;
      text-align: center;
      letter-spacing: -0.025em;
    }
    .lav-connect__input {
      width: 100%;
      max-width: 100%;
      padding: 12px 24px;
      fotn-size: 12px;
    }
    .lav-connect__input-wrap {
      margin: 38px 0 20px;
    }
    .lav-connect__plaid {
      height: 25px;
      position: absolute;
      bottom: 17px;
      right: 25px;
    }
 
    .lav-join {
      padding-top: 60px;
      padding-bottom: 330px;
    }
    .lav-join__title {
      max-width: 100%;
      text-align: center;
      font-weight: 400;
      font-size: 25px;
      line-height: 1.3;
      letter-spacing: -0.025em;
      color: #fff;
    }
    .lav-join__btn {
      width: 100%;
      max-width: 100%;
    }
    .lav-btn {
      min-height: 44px;
      font-size: 11px;
      line-height: 12px;
      text-align: center;
      letter-spacing: 0.1em;
    }
    .lav-join {
      background: #000 url(${settings.dir}/img/join-bg-mob.jpeg) bottom center no-repeat;
      background-size: contain;
    }

    .footer {
      padding: 60px 0 35px;
    }
    .footer-legal-notice {
      font-weight: 400;
      font-size: 11px;
      line-height: 15px;
      color: #989898;
      opacity: 1;
      padding-top: 40px;
      margin-top: 40px;
      border-top: 2px solid #F4F4F4;
    }
    .footer-cell {
      padding: 0;
    }
    .footer-grid {
      grid-row-gap: 0px;
    }
    .footer-cell.footer-cell--divider-mobile {
      border: none;
    }
    .footer-heading, .footer-link {
      font-size: 14px;
      line-height: 25px;
      text-align: left;
    }
    .footer-link {
      margin-top: 10px;
      font-weight: 500;
      line-height: 1;
    }
    .footer-grid .footer-cell:first-child {
      width: 100%;
      border-bottom: 2px solid #F4F4F4;
      padding-bottom: 40px;
      margin-bottom: 40px;
    }
    .footer-logo-link {
      margin-bottom: 40px;
      margin-left: auto;
      margin-right: auto;
    }
    .footer-notice, .footer-notice + div {
      font-size: 14px;
      line-height: 18px;
      color: #000000;
    }
    .footer-grid {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .container, .lav-container {
      width: 100%;
    },
    .container, .lav-container {
      padding: 0 16px;
    }
  }
`;

const stylesEl = document.createElement('style');
stylesEl.innerHTML = styles;
document.body.appendChild(stylesEl);
/*** STYLES / end ***/

/********* Custom Code **********/
init();
function init() {
  console.log('init');
  gaEvent('loaded');

  let newHomepageEl = `
    <section class='lav-hat'>
      <div class='lav-container'>
        <div class='lav-marquee'>
          Extra cardholders increased their credit score by 48 points on average by regularly swiping with Extra and practicing good credit habits.³ <span class='lav-apply'>Apply now.</span>
        </div>
      </div>
    </section>
    <section class='lav-jumb lav-section lav-dark'>
      <div class='lav-container'>
        <div class='lav-jumb__title'>
          <span class='lav-jumb__one'>Debit</span> 
          <span class='lav-jumb__two'>that</span> 
          <span class='lav-jumb__three'>builds</span> 
          <span class='lav-jumb__four'>credit</span>
        </div> 

        <div class='lav-jumb__info'>
          <div class='lav-jumb__list'>
            <div class='lav-jumb__item'>No interest or hidden fees<span>—ever</span></div>
            <div class='lav-jumb__item'>Earn rewards with every swipe ¹</div>
            <div class='lav-jumb__item'>Use your own bank account ²</div>
          </div>

          <button class='lav-btn lav-btn_green lav-jumb__btn lav-apply'>Start building Credit</button>
        </div>
      </div>
    </section>

    <section class='lav-partners lav-section lav-gray lav-center'>
      <div class='lav-container'>
        <img class='lav-mob' src='${settings.dir}/img/partners.png' />
        <img class='lav-desk' src='${settings.dir}/img/partners-desk.png' />
      </div>
    </section>

    <section class='lav-ratings lav-section lav-center'>
      <div class='lav-container'>
        <div class='lav-ratings__top'>
          <img src='${settings.dir}/img/appStore.svg' />
          <div class='lav-ratings__stars'>
            <img src='${settings.dir}/img/stars.svg' />
            <div class='lav-ratings__stars-caption'>4.6K Ratings</div>
          </div>
        </div>
      </div>
    </section>

    <section class='lav-feedbacks lav-section lav-dark lav-observe' id='lav-feedbacks'>
      <div class='lav-container'>
        <div class='lav-feedbacks__title lav-center'>As told by Extra members</div>
        
        <div class="splide lav-feedbacks__slider" >
          <div class="splide__track">
            <div class="splide__list">
              <div class="splide__slide lav-feedbacks__slide">
                <img src='${settings.dir}/img/feedbacks-stars.svg' />
                
                <div class='lav-feedbacks__subtitle'>GREAT</div>

                <div class='lav-feedbacks__body'>
                  <div class='lav-feedbacks__descr'>“This is amazing. Definitely worth it. Credit went up 70 points this past month. I referred a friend today who is ready to build her credit. I highly recommend...”</div>
                </div>

                <a href="https://apps.apple.com/us/app/extra/id1489550124?mt=8#see-all/reviews" target="_blank" class='lav-feedbacks__caption'>SOURCE: APPLE APP STORE</a>

                <div class='lav-feedbacks__author'>Amethyst King <span>– June 16,2021</span></div>
              </div>

              <div class="splide__slide lav-feedbacks__slide">
                <img src='${settings.dir}/img/feedbacks-stars.svg' />
                
                <div class='lav-feedbacks__subtitle'>Definitely helped my credit</div>

                <div class='lav-feedbacks__body'>
                  <div class='lav-feedbacks__descr'>“I was skeptical at first and I did a lot of research and read a lot of reviews. Obviously you can’t make everyone happy. But I have had it for about 5 weeks. My spend power went up...”</div>
                </div>

                <a href="https://apps.apple.com/us/app/extra/id1489550124?mt=8#see-all/reviews" target="_blank" class='lav-feedbacks__caption'>SOURCE: APPLE APP STORE</a>

                <div class='lav-feedbacks__author'>Panther Predator <span>– July 16, 2021</span></div>
              </div>

              <div class="splide__slide lav-feedbacks__slide">
                <img src='${settings.dir}/img/feedbacks-stars.svg' />
                
                <div class='lav-feedbacks__subtitle'>Credit Increase!</div>

                <div class='lav-feedbacks__body'>
                  <div class='lav-feedbacks__descr'>“I’m a young student, and I was researching ways to increase my credit, when I found Extra. I signed up, used it as a debit card, and BAM! A 24 point increase from 620 to 644!”</div>
                </div>

                <a href="https://apps.apple.com/us/app/extra/id1489550124?mt=8#see-all/reviews" target="_blank" class='lav-feedbacks__caption'>SOURCE: APPLE APP STORE</a>
                 
                <div class='lav-feedbacks__author'>doggieguy64 <span>– June 28,2021</span></div>
              </div>
            </d>
          </div>
        </div>
      </div>
    </section>

    <section class='lav-why lav-section lav-observe'>
      <div class='lav-container'>
        <div class='lav-why__title lav-title'>Why Extra?</div>

        <div class='lav-why__list lav-desk'>
          <div class='lav-why__item'>
            <div class='lav-why__item-title'>
              Start building credit with every&nbsp;swipe
            </div>
          </div>

          <div class='lav-why__item'>
            <div class='lav-why__item-title'>
            No interest, credit checks, or hidden fees&#8209;ever
            </div>
          </div>

          <div class='lav-why__item'>
            <div class='lav-why__item-title'>
              Earn rewards points everywhere
            </div>
          </div>

          <div class='lav-why__item'>
            <div class='lav-why__item-descr'>
              The Extra Debit Card works like a debit card—but smarter. At the end of the month, all of your purchases made with Extra are totaled up and reported to the bureaus to help build your credit. On average, Extra members increased their credit score by 48 points just by swiping and practicing good credit habits.³
            </div>
          </div>

          <div class='lav-why__item'>
            <div class='lav-why__item-descr'>
              Because Extra is a debit card, you don't have to worry about interest, hidden fees or falling into the compounding debt trap like you would with a credit card. We charge a simple flat-rate membership fee upfront so you can build your credit with no surprises later. 
            </div>
          </div>

          <div class='lav-why__item'>
            <div class='lav-why__item-descr'>
              Stop doing debit the old way and start earning up to 1% back on your everyday purchases with Extra. Every swipe gets you one step closer to tech, home goods, and more, all redeemable with your points in the Extra Rewards Store.
            </div>
          </div>
        </div>

        <div class='lav-why__list lav-mob'>
          <div class='lav-why__item'>
            <div class='lav-why__item-head'>
              <div class='lav-why__item-icon'>
                <img src='${settings.dir}/img/whyIcon1.svg' />
              </div>
              <div class='lav-why__item-title'>Start building credit with every swipe</div>
              <div class='lav-why__item-expand'>
                <img src='${settings.dir}/img/expandIcon.svg' />
              </div>
            </div>
            <div class='lav-why__item-body'>
              The Extra Debit Card works like a debit card—but smarter. At the end of the month, all of your purchases made with Extra are totaled up and reported to the bureaus to help build your credit. On average, Extra members increased their credit score by 48 points just by swiping and practicing good credit habits.³
            </div>
          </div>

          <div class='lav-why__item'>
            <div class='lav-why__item-head'>
              <div class='lav-why__item-icon'>
                <img src='${settings.dir}/img/whyIcon2.svg' />
              </div>
              <div class='lav-why__item-title'>No interest, credit checks, or hidden fees&#8209;ever</div>
              <div class='lav-why__item-expand'>
                <img src='${settings.dir}/img/expandIcon.svg' />
              </div>
            </div>
            <div class='lav-why__item-body'>
              Because Extra is a debit card, you don't have to worry about interest, hidden fees or falling into the compounding debt trap like you would with a credit card. We charge a simple flat-rate membership fee upfront so you can build your credit with no surprises later. 
            </div>
          </div>

          <div class='lav-why__item'>
            <div class='lav-why__item-head'>
              <div class='lav-why__item-icon'>
                <img src='${settings.dir}/img/whyIcon3.svg' />
              </div>
              <div class='lav-why__item-title'>Earn rewards points everywhere</div>
              <div class='lav-why__item-expand'>
                <img src='${settings.dir}/img/expandIcon.svg' />
              </div>
            </div>
            <div class='lav-why__item-body'>
              Stop doing debit the old way and start earning up to 1% back on your everyday purchases with Extra. Every swipe gets you one step closer to gift cards, tech, home goods, and more, all redeemable with your points in the Extra Rewards Store.
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class='lav-works lav-section lav-dark lav-observe'>
      <div class='lav-container'>
        <div class='lav-works__title lav-title'>How the Extra <br/> Debit Card works</div>

        <div class="splide lav-works__slider">
          <div class="splide__track">
            <div class="splide__list">
              <div class='splide__slide lav-works__slide'>
                <div class='lav-works__image'>
                  <img class='lav-desk' src='${settings.dir}/img/works1.png' />
                  <img class='lav-mob' src='${settings.dir}/img/works1-mob.png' />
                </div>

                <div class='lav-works__info'>
                  <div class='lav-works__info-num'>1.</div>
                  <div class='lav-works__info-inner'>
                    <div class='lav-works__info-title'>Sign up and connect your bank account</div>
                    <div class='lav-works__info-descr'>
                    Extra connects directly to your existing bank account. We connect with more than <span class='lav-green'>10,000 banks.</span></div>
                  </div>
                </div>
              </div>

              <div class='splide__slide lav-works__slide'>
                <div class='lav-works__image'>
                  <img class='lav-desk' src='${settings.dir}/img/works2.png' />
                  <img class='lav-mob' src='${settings.dir}/img/works2-mob.png' />
                </div>

                <div class='lav-works__info'>
                  <div class='lav-works__info-num'>2.</div>
                  <div class='lav-works__info-inner'>
                    <div class='lav-works__info-title'>Download the app to get your Extra Debit Card</div>
                    <div class='lav-works__info-descr'>
                      After approval, you will receive your Extra  Debit Card with a spend power based on your bank balance and other factors—no credit checks required.
                    </div>
                  </div>
                </div>
              </div>

              <div class='splide__slide lav-works__slide'>
                <div class='lav-works__image'>
                  <img class='lav-desk' src='${settings.dir}/img/works3.png' />
                  <img class='lav-mob' src='${settings.dir}/img/works3-mob.png' />
                </div>

                <div class='lav-works__info'>
                  <div class='lav-works__info-num'>3.</div>
                  <div class='lav-works__info-inner'>
                    <div class='lav-works__info-title'>Use your Extra Debit Card for daily purchases</div>
                    <div class='lav-works__info-descr'>
                      When you swipe your Extra Debit Card, we spot you for that purchase and pay ourselves back the next business day.  
                    </div>
                  </div>
                </div>
              </div>

              <div class='splide__slide lav-works__slide'>
                <div class='lav-works__image'>
                  <img class='lav-desk' src='${settings.dir}/img/works4.png' />
                  <img class='lav-mob' src='${settings.dir}/img/works4-mob.png' />
                </div>

                <div class='lav-works__info'>
                  <div class='lav-works__info-num'>4.</div>
                  <div class='lav-works__info-inner'>
                    <div class='lav-works__info-title'>Build your credit each month</div>
                    <div class='lav-works__info-descr'>
                      At the end of the month, we add up all of your transactions and report them to the bureaus as credit-worthy payments. Unlike regular debit cards, spending with the Extra Card helps build your credit.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class='lav-works__bottom'>
          <button class='lav-btn lav-btn_green lav-works__btn lav-apply'>GET STARTED</button>

          <div class='lav-works__caption'>Impact on your credit score may vary depending on your use.<br/>Extra is required to report both on time and late payments.</div>
        </div>
      </div>
    </section>

    <section class='lav-compare lav-section lav-observe'>
      <div class='lav-container'>
        <div class='lav-compare__title lav-title'>Your debit card <br/> should be 
        <img src='${settings.dir}/img/starsIcon.svg' />
        Extra
        <img src='${settings.dir}/img/starsIcon.svg' />
        </div>

        <div class="splide lav-compare__slider lav-mob">
          <div class="splide__track">
            <div class="splide__list">
              <div class="splide__slide lav-compare__table">
                <div class='lav-compare__row'>
                  <div class='lav-compare__col'></div>
                  <div class='lav-compare__col lav-compare__extra'>
                    <img class='lav-compare__extra-img' src='${settings.dir}/img/compare-debit.png' />
                    <div class='lav-compare__extra-title'>Extra Debit&nbsp;Card</div>
                  </div>
                  <div class='lav-compare__col lav-compare__choose'>
                    <img class='lav-compare__choose-img' src='${settings.dir}/img/card-placeholder.png' />
                    <div class='lav-compare__select lav-select lav-desk'>
                      <div class='lav-compare__select-value lav-select__value'>Debit Card</div>
                      <div class='lav-compare__select-list lav-select__list'>
                        <div class='lav-better__select-item lav-select__item' data-value='debit'>Debit Card</div>
                        <div class='lav-better__select-item lav-select__item' data-value='secured'>Secured Card</div>
                      </div>
                    </div>
                    <div class='lav-mob lav-compare__debit'>Secured Card</div>
                  </div>
                </div>

                <div class='lav-compare__row'>
                  <div class='lav-compare__col'><span>Builds your credit<sup>1</sup></span></div>
                  <div class='lav-compare__col'>
                    <img src='${settings.dir}/img/checkIconBlack.svg' />
                  </div>
                  <div class='lav-compare__col'>
                    <img src='${settings.dir}/img/checkIconBlack.svg' />
                  </div>
                </div>

                <div class='lav-compare__row'>
                  <div class='lav-compare__col'>No Security Deposit</div>
                  <div class='lav-compare__col'>
                    <img src='${settings.dir}/img/checkIconBlack.svg' />
                  </div>
                  <div class='lav-compare__col'>
                    <img src='${settings.dir}/img/noCheckIcon.svg' />
                  </div>
                </div>

                <div class='lav-compare__row'>
                  <div class='lav-compare__col'>No Credit Checks</div>
                  <div class='lav-compare__col'>
                    <img src='${settings.dir}/img/checkIconBlack.svg' />
                  </div>
                  <div class='lav-compare__col'>
                    <img src='${settings.dir}/img/noCheckIcon.svg' />
                  </div>
                </div>

                <div class='lav-compare__row'>
                  <div class='lav-compare__col'>24/7 White Glove Concierge Support</div>
                  <div class='lav-compare__col'>
                    <img src='${settings.dir}/img/checkIconBlack.svg' />
                  </div>
                  <div class='lav-compare__col'>
                    <img src='${settings.dir}/img/noCheckIcon.svg' />
                  </div>
                </div>

                <div class='lav-compare__row'>
                  <div class='lav-compare__col'>Earns Reward Points</div>
                  <div class='lav-compare__col'>
                    <img src='${settings.dir}/img/checkIconBlack.svg' />
                  </div>
                  <div class='lav-compare__col'>
                    <img src='${settings.dir}/img/noCheckIcon.svg' />
                  </div>
                </div>
              </div>

              <div class="splide__slide lav-compare__table">
                <div class='lav-compare__row'>
                  <div class='lav-compare__col'></div>
                  <div class='lav-compare__col lav-compare__extra'>
                    <img class='lav-compare__extra-img' src='${settings.dir}/img/compare-debit.png' />
                    <div class='lav-compare__extra-title'>Extra Debit&nbsp;Card</div>
                  </div>
                  <div class='lav-compare__col lav-compare__choose'>
                    <img class='lav-compare__choose-img' src='${settings.dir}/img/card-placeholder.png' />
                    <div class='lav-compare__select lav-select lav-desk'>
                      <div class='lav-compare__select-value lav-select__value'>Debit Card</div>
                      <div class='lav-compare__select-list lav-select__list'>
                        <div class='lav-better__select-item lav-select__item' data-value='debit'>Debit Card</div>
                        <div class='lav-better__select-item lav-select__item' data-value='secured'>Secured Card</div>
                      </div>
                    </div>
                    <div class='lav-mob lav-compare__debit'>Debit Card</div>
                  </div>
                </div>

                <div class='lav-compare__row'>
                  <div class='lav-compare__col'><span>Builds credit history<sup>1</sup></span></div>
                  <div class='lav-compare__col'>
                    <img src='${settings.dir}/img/checkIconBlack.svg' />
                  </div>
                  <div class='lav-compare__col'>
                    <img src='${settings.dir}/img/noCheckIcon.svg' />
                  </div>
                </div>

                <div class='lav-compare__row'>
                  <div class='lav-compare__col'>Earns reward points</div>
                  <div class='lav-compare__col'>
                    <img src='${settings.dir}/img/checkIconBlack.svg' />
                  </div>
                  <div class='lav-compare__col'>
                    <img src='${settings.dir}/img/noCheckIcon.svg' />
                  </div>
                </div>

                <div class='lav-compare__row'>
                  <div class='lav-compare__col'>Connects with any bank</div>
                  <div class='lav-compare__col'>
                    <img src='${settings.dir}/img/checkIconBlack.svg' />
                  </div>
                  <div class='lav-compare__col'>
                    <img src='${settings.dir}/img/noCheckIcon.svg' />
                  </div>
                </div>

                <div class='lav-compare__row'>
                  <div class='lav-compare__col'>24/7 premium support</div>
                  <div class='lav-compare__col'>
                    <img src='${settings.dir}/img/checkIconBlack.svg' />
                  </div>
                  <div class='lav-compare__col'>
                    <img src='${settings.dir}/img/noCheckIcon.svg' />
                  </div>
                </div>

                <div class='lav-compare__row'>
                  <div class='lav-compare__col'>No security deposit</div>
                  <div class='lav-compare__col'>
                    <img src='${settings.dir}/img/checkIconBlack.svg' />
                  </div>
                  <div class='lav-compare__col'>
                    <img src='${settings.dir}/img/checkIconBlack.svg' />
                  </div>
                </div>

                <div class='lav-compare__row'>
                  <div class='lav-compare__col'>No credit checks</div>
                  <div class='lav-compare__col'>
                    <img src='${settings.dir}/img/checkIconBlack.svg' />
                  </div>
                  <div class='lav-compare__col'>
                    <img src='${settings.dir}/img/noCheckIcon.svg' />
                  </div>
                </div>

                <div class='lav-compare__row'>
                  <div class='lav-compare__col'>Daily payments</div>
                  <div class='lav-compare__col'>
                    <img src='${settings.dir}/img/checkIconBlack.svg' />
                  </div>
                  <div class='lav-compare__col'>
                    <img src='${settings.dir}/img/checkIconBlack.svg' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class='lav-compare__table lav-desk'>
          <div class='lav-compare__row'>
            <div class='lav-compare__col'></div>
            <div class='lav-compare__col lav-compare__extra'>
              <img class='lav-compare__extra-img' src='${settings.dir}/img/compare-debit.png' />
              <div class='lav-compare__extra-title'>Extra Debit&nbsp;Card</div>
            </div>
            <div class='lav-compare__col lav-compare__choose'>
              <img class='lav-compare__choose-img' src='${settings.dir}/img/card-placeholder.png' />
              <div class='lav-compare__select lav-select lav-desk'>
                <div class='lav-compare__select-value lav-select__value'>Secured Card</div>
                <div class='lav-compare__select-list lav-select__list'>
                  <div class='lav-better__select-item lav-select__item' data-value='secured'>Secured Card</div>
                  <div class='lav-better__select-item lav-select__item' data-value='debit'>Debit Card</div>
                </div>
              </div>
              <div class='lav-mob lav-compare__debit'>Debit Card</div>
            </div>
          </div>

          <div class='lav-compare__row lav-compare-debit'>
            <div class='lav-compare__col'><span>Builds credit history<sup>1</sup></span></div>
            <div class='lav-compare__col'>
              <img src='${settings.dir}/img/checkIconBlack.svg' />
            </div>
            <div class='lav-compare__col'>
              <img src='${settings.dir}/img/noCheckIcon.svg' />
            </div>
          </div>

          <div class='lav-compare__row lav-compare-debit'>
            <div class='lav-compare__col'>Earns reward points</div>
            <div class='lav-compare__col'>
              <img src='${settings.dir}/img/checkIconBlack.svg' />
            </div>
            <div class='lav-compare__col'>
              <img src='${settings.dir}/img/noCheckIcon.svg' />
            </div>
          </div>

          <div class='lav-compare__row lav-compare-debit'>
            <div class='lav-compare__col'>Connects with any bank</div>
            <div class='lav-compare__col'>
              <img src='${settings.dir}/img/checkIconBlack.svg' />
            </div>
            <div class='lav-compare__col'>
              <img src='${settings.dir}/img/noCheckIcon.svg' />
            </div>
          </div>

          <div class='lav-compare__row lav-compare-debit'>
            <div class='lav-compare__col'>24/7 premium support</div>
            <div class='lav-compare__col'>
              <img src='${settings.dir}/img/checkIconBlack.svg' />
            </div>
            <div class='lav-compare__col'>
              <img src='${settings.dir}/img/noCheckIcon.svg' />
            </div>
          </div>

          <div class='lav-compare__row lav-compare-debit'>
            <div class='lav-compare__col'>No security deposit</div>
            <div class='lav-compare__col'>
              <img src='${settings.dir}/img/checkIconBlack.svg' />
            </div>
            <div class='lav-compare__col'>
              <img src='${settings.dir}/img/checkIconBlack.svg' />
            </div>
          </div>

          <div class='lav-compare__row lav-compare-debit'>
            <div class='lav-compare__col'>No credit checks</div>
            <div class='lav-compare__col'>
              <img src='${settings.dir}/img/checkIconBlack.svg' />
            </div>
            <div class='lav-compare__col'>
              <img src='${settings.dir}/img/noCheckIcon.svg' />
            </div>
          </div>

          <div class='lav-compare__row lav-compare-debit'>
            <div class='lav-compare__col'>Daily payments</div>
            <div class='lav-compare__col'>
              <img src='${settings.dir}/img/checkIconBlack.svg' />
            </div>
            <div class='lav-compare__col'>
              <img src='${settings.dir}/img/checkIconBlack.svg' />
            </div>
          </div>

          <div class='lav-compare__row lav-compare-secured'>
            <div class='lav-compare__col'><span>Builds your credit<sup>1</sup></span></div>
            <div class='lav-compare__col'>
              <img src='${settings.dir}/img/checkIconBlack.svg' />
            </div>
            <div class='lav-compare__col'>
              <img src='${settings.dir}/img/checkIconBlack.svg' />
            </div>
          </div>

          <div class='lav-compare__row lav-compare-secured'>
            <div class='lav-compare__col'>No Security Deposit</div>
            <div class='lav-compare__col'>
              <img src='${settings.dir}/img/checkIconBlack.svg' />
            </div>
            <div class='lav-compare__col'>
              <img src='${settings.dir}/img/noCheckIcon.svg' />
            </div>
          </div>

          <div class='lav-compare__row lav-compare-secured'>
            <div class='lav-compare__col'>No Credit Checks</div>
            <div class='lav-compare__col'>
              <img src='${settings.dir}/img/checkIconBlack.svg' />
            </div>
            <div class='lav-compare__col'>
              <img src='${settings.dir}/img/noCheckIcon.svg' />
            </div>
          </div>

          <div class='lav-compare__row lav-compare-secured'>
            <div class='lav-compare__col'>24/7 White Glove Concierge Support</div>
            <div class='lav-compare__col'>
              <img src='${settings.dir}/img/checkIconBlack.svg' />
            </div>
            <div class='lav-compare__col'>
              <img src='${settings.dir}/img/noCheckIcon.svg' />
            </div>
          </div>

          <div class='lav-compare__row lav-compare-secured'>
            <div class='lav-compare__col'>Earns Reward Points</div>
            <div class='lav-compare__col'>
              <img src='${settings.dir}/img/checkIconBlack.svg' />
            </div>
            <div class='lav-compare__col'>
              <img src='${settings.dir}/img/noCheckIcon.svg' />
            </div>
          </div>
        </div>


        <div class='lav-compare__btn-wrap'>
          <button class='lav-btn lav-btn_trans lav-compare__btn lav-apply'>JOIN NOW</button>
        </div>
      </div>
    </section>

    <section class='lav-better lav-section lav-gray lav-center lav-observe'>
      <div class='lav-container'>
        <div class='lav-better__title lav-title'>Better credit <br/> takes you places</div>

        <div class='lav-better__icon'>
          <img src='${settings.dir}/img/carIcon.svg' />
        </div>

        <div class='lav-better__car'>
          Car
        </div>
        <div class='lav-better__select lav-select'>
          <div class='lav-better__select-value lav-select__value'>Debit Card</div>
          <div class='lav-better__select-list lav-select__list'>
            <div class='lav-better__select-item lav-select__item' data-value='debit'>Debit Card</div>
            <div class='lav-better__select-item lav-select__item' data-value='secured'>Secured Card</div>
          </div>
        </div>

        <div class='lav-better__average'>
          <div class='lav-better__average-title'>AVERAGE COST OF A VEHICLE*:</div>
          <div class='lav-better__average-price'><span>$25,000</span> / 72 month loan</div>
        </div>


        <div class='lav-scores'>
          <div class='lav-scores__item lav-scores__item_green'>
            <div class='lav-scores__graph'>
              <img src='${settings.dir}/img/better-green.png' />
            </div>
            <div class='lav-scores__num'>725</div>
            <div class='lav-scores__score'>CREDIT SCORE</div>
            <div class='lav-scores__subtitle'>Total payments: </div>
            <div class='lav-scores__price'>$28,333</div>
            <div class='lav-scores__caption'>
              Interest rate: 4.21% <br/>
              Total interest paid: $3333
            </div>
          </div>
          
          <div class='lav-scores__item'>
            <div class='lav-scores__graph'>
              <img src='${settings.dir}/img/better-yellow.png' />
            </div>
            <div class='lav-scores__num'>600</div>
            <div class='lav-scores__score'>CREDIT SCORE</div>
            <div class='lav-scores__subtitle'>Total payments: </div>
            <div class='lav-scores__price'>$34,566</div>
            <div class='lav-scores__caption'>
              Interest rate: 11.33% <br/>
              Total interest paid: $9566
            </div>
          </div>
        </div>

        <div class='lav-scores__subcaption'>According to Experian's State of the Automotive Finance Market 2020.</div>
      </div>
    </section>

    <section class='lav-plans lav-section lav-observe'>
      <div class='lav-container'>
        <div class='lav-plans__title lav-title lav-center'>Our plans</div>

        <div class='lav-plans__toggler'>
          <div class='lav-plans__toggle' data-value='monthly'>Monthly</div>
          <div class='lav-plans__toggle active' data-value='annually'>Annually <span>up to $101 savings</span></div>
        </div>

        <div class='lav-plans__table'>
          <div class='lav-plans__row'>
            <div class='lav-plans__col'></div>
            <div class='lav-plans__col'>Credit Building</div>
            <div class='lav-plans__col'>
              Credit Building +&nbsp;Rewards
            </div>
          </div>

          <div class='lav-plans__row'>
            <div class='lav-plans__col'><span>Debit that builds credit<sup>1</sup></span></div>
            <div class='lav-plans__col'>
              <img src='${settings.dir}/img/checkIconBlack.svg' />
            </div>
            <div class='lav-plans__col'>
              <img src='${settings.dir}/img/checkIconBlack.svg' />
            </div>
          </div>

          <div class='lav-plans__row'>
            <div class='lav-plans__col'>White-glove Concierge support 24/7</div>
            <div class='lav-plans__col'>
              <img src='${settings.dir}/img/checkIconBlack.svg' />
            </div>
            <div class='lav-plans__col'>
              <img src='${settings.dir}/img/checkIconBlack.svg' />
            </div>
          </div>

          <div class='lav-plans__row'>
            <div class='lav-plans__col'>Extra spend tracking app</div>
            <div class='lav-plans__col'>
              <img src='${settings.dir}/img/checkIconBlack.svg' />
            </div>
            <div class='lav-plans__col'>
              <img src='${settings.dir}/img/checkIconBlack.svg' />
            </div>
          </div>

          <div class='lav-plans__row'>
            <div class='lav-plans__col'>Best-looking debit card ever</div>
            <div class='lav-plans__col'>
              <img src='${settings.dir}/img/checkIconBlack.svg' />
            </div>
            <div class='lav-plans__col'>
              <img src='${settings.dir}/img/checkIconBlack.svg' />
            </div>
          </div>

          <div class='lav-plans__row'>
            <div class='lav-plans__col'>Earn reward points for every purchase</div>
            <div class='lav-plans__col'>
              <img src='${settings.dir}/img/noCheckIcon.svg' />
            </div>
            <div class='lav-plans__col'>
              <img src='${settings.dir}/img/checkIconBlack.svg' />
            </div>
          </div>

          <div class='lav-plans__row'>
            <div class='lav-plans__col'>Exclusive access to the Extra Rewards Store</div>
            <div class='lav-plans__col'>
              <img src='${settings.dir}/img/noCheckIcon.svg' />
            </div>
            <div class='lav-plans__col'>
              <img src='${settings.dir}/img/checkIconBlack.svg' />
            </div>
          </div>

          <div class='lav-plans__row lav-plans__row-last lav-plans__row-monthly' style='display: none;'>
            <div class='lav-plans__col'>Total cost</div>
            <div class='lav-plans__col'>
              <span class='lav-plans__price'>$20</span>
              <div class='lav-plans__caption'>a month</div>
            </div>
            <div class='lav-plans__col'>
              <span class='lav-plans__price'>$25</span>
              <div class='lav-plans__caption'>a month</div>
            </div>
          </div>


          <div class='lav-plans__row lav-plans__row-last lav-plans__row-yearly'>
            <div class='lav-plans__col'>Total cost</div>
            <div class='lav-plans__col'>
              <span class='lav-plans__price'>$149</span>
              <span class='lav-plans__price-old'>$240</span>
              <div class='lav-plans__caption'>a year</div>
            </div>
            <div class='lav-plans__col'>
              <span class='lav-plans__price'>$199</span>
              <span class='lav-plans__price-old'>$300</span>
              <div class='lav-plans__caption'>a year</div>
            </div>
          </div>
        </div>

        <div class='lav-plans__btn-wrap lav-plans__btn-monthly' style='display: none'>
          <button class='lav-btn lav-btn_trans lav-plans__btn lav-apply'>Start Building Credit</button>
        </div>

        <div class='lav-plans__btn-wrap lav-plans__btn-yearly'>
          <button class='lav-btn lav-btn_trans lav-plans__btn lav-apply'>Start Building Credit</button>
        </div>
      </div>
    </section>

    <section class='lav-connect lav-section lav-dark lav-observe'>
      <div class='lav-container'>
        <div class='lav-connect__inner'>
          <div class='lav-connect__title'>Does Extra connect with&nbsp;my&nbsp;bank?</div>

          <div class='lav-connect__input-wrap'>
            <input placeholder='Search for your bank here...' class='lav-connect__input' />
            <div class='lav-connect__search'>
              <img src='${settings.dir}/img/search.svg' />
            </div>
          </div>
         
        
          <img class='lav-connect__plaid' src='${settings.dir}/img/plaid.png' />

          <div class='lav-connect__fail'>
            Your bank does not connect with Extra at the moment
            <img class='lav-connect__refresh' src='${settings.dir}/img/refresh.svg' />
          </div>

          <div class='lav-connect__success'>
            Good news—your bank and Extra&nbsp;are&nbsp;connected.
            <div class='lav-connect__couple'>
              <img src='${settings.dir}/img/status-success.svg' />
              <img src='${settings.dir}/img/status-success.svg' />
            </div>
            <img class='lav-connect__refresh' src='${settings.dir}/img/refresh.svg' />
          </div>
        </div> 
      </div>
    </section>

    <section class='lav-join lav-section lav-dark lav-observe'>
      <div class='lav-container'>
        <div class='lav-join__info'>
          <div class='lav-join__title'>Your credit isn’t going to build itself, let’s get started.</div>
        
          <button class='lav-btn lav-btn_green lav-join__btn lav-apply'>Apply now</button>
        </div> 
      </div>
    </section>
  `;

  document
    .querySelector('.main')
    .insertAdjacentHTML('afterbegin', newHomepageEl);

  initFeedbacks();
  iniWhy();
  initFaq();
  initHeader();
  initConnect();
  initWorks();
  initObserver();

  for (let toggleEl of document.querySelectorAll('.lav-plans__toggle')) {
    toggleEl.addEventListener('click', function () {
      if (this.classList.contains('active')) return false;

      const plan = this.dataset.value;

      document
        .querySelector('.lav-plans__toggle.active')
        .classList.remove('active');
      this.classList.add('active');

      gaEvent('Click on toggle plan', plan);

      if (plan === 'monthly') {
        document.querySelector('.lav-plans__row-monthly').style.display =
          'flex';
        document.querySelector('.lav-plans__row-yearly').style.display = 'none';
        document.querySelector('.lav-plans__btn-monthly').style.display =
          'block';
        document.querySelector('.lav-plans__btn-yearly').style.display = 'none';
      } else {
        document.querySelector('.lav-plans__row-monthly').style.display =
          'none';
        document.querySelector('.lav-plans__row-yearly').style.display = 'flex';
        document.querySelector('.lav-plans__btn-monthly').style.display =
          'none';
        document.querySelector('.lav-plans__btn-yearly').style.display =
          'block';
      }
    });
  }
}

function initObserver() {
  const observerOptions = {
    root: null,
    threshold: 0,
    rootMargin: '0px 0px -45% 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // console.log(entry);
      if (entry.isIntersecting) {
        console.log(entry.target);
        if (entry.target.classList.contains('lav-feedbacks')) {
          setTimeout(() => {
            gaEvent('Extra members review Visibility');
          }, 2000);
        }

        if (entry.target.classList.contains('lav-why')) {
          gaEvent('Why Extra Visibility');
        }

        if (entry.target.classList.contains('lav-works')) {
          if (window.innerWidth > 768) {
            setTimeout(() => {
              gaEvent('How the Extra debit card works Visibility');
            }, 2000);
          } else {
            setTimeout(() => {
              gaEvent(
                'How the Extra debit card works Visibility',
                document
                  .querySelector(
                    '.lav-works__slide.is-active .lav-works__info-num'
                  )
                  .innerText.replace('.', '')
              );
            }, 2000);
          }
        }

        if (entry.target.classList.contains('lav-compare')) {
          setTimeout(() => {
            gaEvent('Comparison table Visibility');
          }, 2000);
        }

        if (entry.target.classList.contains('lav-better')) {
          setTimeout(() => {
            gaEvent('Better credit takes you places Visibility');
          }, 2000);
        }

        if (entry.target.classList.contains('lav-plans')) {
          setTimeout(() => {
            gaEvent('Our plans Visibility');
          }, 2000);
        }

        if (entry.target.classList.contains('lav-connect')) {
          setTimeout(() => {
            gaEvent('Does Extra connect with my bank Visibility');
          }, 2000);
        }

        if (entry.target.classList.contains('section--faq')) {
          setTimeout(() => {
            gaEvent('FAQ Visibility');
          }, 2000);
        }

        if (entry.target.classList.contains('lav-join')) {
          setTimeout(() => {
            gaEvent('Let`s get started Visibility');
          }, 2000);
        }

        // entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  for (let section of Array.from(document.querySelectorAll('.lav-observe'))) {
    observer.observe(section);
  }
}

function initWorks() {
  let initSplideInterval = setInterval(() => {
    if (typeof Splide == 'function') {
      clearInterval(initSplideInterval);

      let steps = new Splide('.lav-works__slider', {
        arrows: false,
        perPage: 4,
        gap: '14px',
        // autoWidth: true,
        breakpoints: {
          992: {
            perPage: 2,
            type: 'loop',
          },
          572: {
            perPage: 1,
            pagination: true,
            gap: 15,
          },
        },
      }).mount();

      let tables = new Splide('.lav-compare__slider', {
        arrows: false,
        type: 'loop',
        perPage: 1,
        gap: '14px',
        breakpoints: {},
      }).mount();

      let feedbacks = new Splide('.lav-feedbacks__slider', {
        arrows: false,
        pagination: false,
        perPage: 3,
        gap: '65px',
        breakpoints: {
          1400: {
            gap: '15px',
          },
          992: {
            type: 'loop',
            perPage: 1,
            autoWidth: true,
            focus: 'center',
          },
          768: {
            gap: '20px',
          },
        },
      }).mount();

      if (window.innerWidth < 768) {
        feedbacks.on('moved', function () {
          gaEvent('Swipe on review slide');
        });

        steps.on('moved', function () {
          let num = document
            .querySelector('.lav-works__slide.is-active .lav-works__info-num')
            .innerText.replace('.', '');

          setTimeout(() => {
            if (
              num ==
              document
                .querySelector(
                  '.lav-works__slide.is-active .lav-works__info-num'
                )
                .innerText.replace('.', '')
            ) {
              gaEvent('How the Extra debit card works Visibility', num);
            }
          }, 2000);
        });
      }

      // splide.on('moved', function () {
      //   gaEvent('swipe slider', 'How Luminette transforms your days');
      // });
    }
  }, 500);
}

function initHeader() {
  for (let select of document.querySelectorAll('.lav-select')) {
    select
      .querySelector('.lav-select__value')
      .addEventListener('click', function () {
        console.log(1);
        $(this).toggleClass('active');
        $(select.querySelector('.lav-select__list'))
          .toggleClass('active')
          .slideToggle();
      });
  }

  setTimeout(() => {
    $('.lav-compare-debit').slideUp();
  }, 500);

  for (let selectItem of document.querySelectorAll('.lav-select__item')) {
    selectItem.addEventListener('click', function () {
      let value = $(this).text();

      gaEvent('Click on dropdown in comparison table', value);

      if (value == 'Secured Card') {
        $('.lav-compare-debit').slideUp();
        $('.lav-compare-secured').slideDown();
      } else {
        $('.lav-compare-debit').slideDown();
        $('.lav-compare-secured').slideUp();
      }
      $(this).closest('.lav-select').find('.lav-select__value').text(value);
      $(this)
        .closest('.lav-select')
        .find('.lav-select__value')
        .toggleClass('active');
      $(this).parent().toggleClass('active').slideToggle();
    });
  }

  document.querySelector('[href="#FAQ"]').innerText = document
    .querySelector('[href="#FAQ"]')
    .innerText.replace('s', '');

  document
    .querySelector('.footer-link[href="https://intercom.help/extracard/en"]')
    .insertAdjacentHTML(
      'beforebegin',
      '<a href="#FAQ" class="footer-link">FAQ</a>'
    );

  document
    .querySelector('.cta-button--nav')
    .insertAdjacentHTML(
      'beforebegin',
      '<a href="#lav-feedbacks" class="nav-link">Members</a>'
    );

  document
    .querySelector('.cta-nav-mobile')
    .insertAdjacentHTML(
      'beforebegin',
      `<img class='lav-burger lav-mob' src='${settings.dir}/img/burger.svg' />`
    );

  document
    .querySelector('.nav-menu')
    .insertAdjacentHTML(
      'afterbegin',
      `<img class='lav-burger__close lav-mob' src='${settings.dir}/img/close.svg' />`
    );

  document.querySelector('.lav-burger').addEventListener('click', function () {
    gaEvent('Click on hamburger menu');
    document.querySelector('.nav-menu').classList.add('active');
    document.querySelector('.container--nav').classList.add('active');
  });

  for (let item of document.querySelectorAll(
    '.nav-menu .nav-link, .footer-link'
  )) {
    item.addEventListener('click', function (e) {
      let href = $(this).attr('href');
      if (href[0] == '#') {
        e.preventDefault();
        e.stopImmediatePropagation();
        e.stopPropagation();
        $('html,body').animate(
          {
            scrollTop:
              $(href).offset().top +
              20 -
              ($('.nav').innerHeight() + $('.lav-hat').innerHeight()),
          },
          1000
        );
        document.querySelector('.nav-menu').classList.remove('active');
        document.querySelector('.container--nav').classList.remove('active');
      }
    });
  }

  document.addEventListener('click', function (e) {
    if (
      e.target.classList.contains('active') &&
      e.target.classList.contains('container--nav')
    ) {
      document.querySelector('.nav-menu').classList.remove('active');
      document.querySelector('.container--nav').classList.remove('active');
    }
  });

  document
    .querySelector('.lav-burger__close')
    .addEventListener('click', function () {
      document.querySelector('.nav-menu').classList.remove('active');
      document.querySelector('.container--nav').classList.remove('active');
    });

  for (let item of document.querySelectorAll('.lav-apply')) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      if (item.classList.contains('lav-jumb__btn')) {
        gaEvent('Click on start building credit button');
      }
      if (item.classList.contains('lav-compare__btn')) {
        gaEvent('Click on Join now button');
      }
      if (item.classList.contains('lav-works__btn')) {
        if (window.innerWidth > 768) {
          gaEvent('Click on Get started button');
        } else {
          gaEvent(
            'Click on Get started button',
            document
              .querySelector('.lav-works__slide.is-active .lav-works__info-num')
              .innerText.replace('.', '')
          );
        }
      }
      if (
        item.classList.contains('lav-plans__btn') &&
        item.closest('.lav-plans__btn-monthly')
      ) {
        document.querySelector('a[data-w-tab="Monthly"]').click();
        gaEvent('Click on Start Building Credit button');
      }
      if (
        item.classList.contains('lav-plans__btn') &&
        item.closest('.lav-plans__btn-yearly')
      ) {
        document.querySelector('a[data-w-tab="Annually"]').click();
        gaEvent('Click on Start Building Credit button');
      }
      if (item.classList.contains('lav-join__btn')) {
        gaEvent('Click on APPLY NOW button');
      }

      document.querySelector('.cta-button--nav').click();
    });
  }

  document
    .querySelector('.footer-legal-notice')
    .insertAdjacentHTML(
      'beforeend',
      '<br/><br/>³Based on a survey performed by Extra, using data from Experian, studying changes in credit scores for Extra members between March 2021 to April 2022. We compared credit score changes in active Extra members who had a credit score of 650 or lower when they began using Extra, who had no delinquent payments with Extra, and who had no other trade lines at or above 100 percent balance ratio in the past 3 months and compared these members to a control group. Over the 12 month period of the survey, these members increased their credit score by 47.8 points on average; the maximum credit score increase was 203 points. Impact on your credit may vary, as credit scores are independently determined by credit bureaus based on a number of factors, including your history with other financial services organizations.'
    );

  $('.faq-content').attr('style', '');

  $('.faq-header').on('click', function (e) {
    e.stopPropagation();
    e.stopImmediatePropagation();
    e.preventDefault();
    gaEvent('Click on FAQ accordion', $(this).text().trim());
    if (
      document.querySelector('.faq-header.active') &&
      !this.classList.contains('active')
    ) {
      $('.faq-header.active').removeClass('active').next().slideUp();
    }
    $(this).toggleClass('active');
    $(this).next().slideToggle();
  });
}

function initConnect() {
  document
    .querySelector('.lav-connect__input')
    .addEventListener('click', function () {
      gaEvent('Click on Does Extra connect with my bank input');
    });

  document
    .querySelector('.lav-connect__search')
    .addEventListener('click', function () {
      gaEvent('Click on Does Extra connect with my bank button');
      let value = document.querySelector('.lav-connect__input').value;
      console.log(value);
      if (!value) return false;
      $.ajax({
        type: 'POST',
        url: 'https://extra.app/api/bank-lookup',
        data: JSON.stringify({ query: value }),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (data) {
          if (data.bank == null) {
            $('.lav-connect').addClass('lav-fail');
            gaEvent('Does Extra connect with my bank Error');
          } else {
            gaEvent('Does Extra connect with my bank Submit');
            $('.lav-connect').addClass('lav-success');
            if (data.bank.logo) {
              $('.lav-connect__couple img:first-child')[0].src =
                'data:image/png;base64, ' + data.bank.logo;
              $('.lav-connect__couple img:first-child').show();
            } else {
              $('.lav-connect__couple img:first-child').hide();
            }
            $('.lav-connect').addClass('lav-success');
          }
          console.log(data);
        },
        failure: function (errMsg) {
          console.log(errMsg);
        },
      });
      // $.post('https://extra.app/api/bank-lookup', );
    });

  $('.lav-connect__refresh').on('click', function () {
    $('.lav-connect').removeClass('lav-fail');
    $('.lav-connect').removeClass('lav-success');
  });
}

function initFeedbacks() {
  // document
  //   .querySelector('.lav-ratings')
  //   .insertAdjacentElement(
  //     'afterend',
  //     document.querySelector('.section--intro')
  //   );
  // document.querySelector('.section--intro .section-heading').innerText =
  //   'As told by Extra members';
}

function iniWhy() {
  for (let item of document.querySelectorAll('.lav-why__item-head')) {
    item.addEventListener('click', function () {
      gaEvent('Click on Why Extra accordion', item.innerText);
      if (
        document.querySelector('.lav-why__item-head.active') &&
        !item.classList.contains('active')
      ) {
        $('.lav-why__item-head.active').removeClass('active').next().slideUp();
      }
      item.classList.toggle('active');
      $(item).next().slideToggle();
    });
  }
}

function initRatings() {
  document.querySelector('.lav-ratings__stars-caption').innerText =
    document.querySelector('.hero-notice-stars + div').innerText;
}

function initFaq() {
  document.querySelector('#FAQ').classList.add('lav-observe');
  document
    .querySelector('.lav-join')
    .insertAdjacentElement('beforebegin', document.querySelector('#FAQ'));

  document.querySelector('#FAQ .section-heading').innerHTML =
    'Frequently asked&nbsp;questions';
}

const MarqueeJs = (queryselector, speed, loop) => {
  const Selector = queryselector;
  let SceenWidth = window.innerWidth;
  let SelectorWidth = Selector.offsetWidth;
  let Sw = SceenWidth,
    step = 1;

  Selector.style.left = SceenWidth + 'px';

  console.log(SceenWidth);

  window.onresize = () => {
    SceenWidth = window.innerWidth;
    SelectorWidth = Selector.offsetWidth;
    (Sw = SceenWidth), (step = 1);
    Selector.style.left = SceenWidth + 'px';
  };

  const sIntv = setInterval(() => {
    Sw = Sw - speed;
    Selector.style.left = `${Sw}px`;

    if (Sw <= -SelectorWidth) {
      Sw = SceenWidth;
      Selector.style.left = SceenWidth + 'px';
      loop == 0 ? null : step >= loop ? clearInterval(sIntv) : (step = 1);
      step++;
    }
  }, 0);
};

for (let itemMarkquee of document.querySelectorAll('.lav-marquee')) {
  MarqueeJs(itemMarkquee, 0.45, 0);
}
