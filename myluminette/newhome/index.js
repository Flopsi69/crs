console.log('initExp');

/********* Settings **********/
const settings = {
  dir: 'https://flopsi69.github.io/crs/myluminette/newhome',
  clarity: false,
  observe: false,
};

//Hotjar
if (settings.clarity) {
  const clarityInterval = setInterval(function () {
    if (typeof clarity == 'function') {
      clearInterval(clarityInterval);
      clarity('set', '', 'variant_1');
    }
  }, 1000);
}

// Alalytics
function gaEvent(action, label) {
  if (!label) {
    label = '';
  }
  try {
    var objData = {
      event: 'gaEv',
      eventCategory: 'Experiment — also like',
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

// Alalytics
function gaEvent(name = '', desc = '', type = '', loc = '') {
  try {
    var objData = {
      event: 'event-to-ga4',
      event_name: name,
      event_desc: desc,
      event_type: type,
      event_loc: loc,
    };
    console.dir('eventFire', objData.eventAction);
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

// Styles
const styles = `
  .light-therapy-section, .pin-spacer, [id^=trustbadge-container] {
    display: none!important;
  }
  .home-page > *:not(.lav-wrap) {
    display: none;
  }
  .home-page {
    background-color: #fff;a
  }
  .lav-wrap {
    color: #517193;
    background: url('${settings.dir}/img/jumb-bg.png') top no-repeat;
    background-size: 100% auto;
  }
  .lav-title {
    font-weight: 700;
    font-size: 48px;
    line-height: 48px;
  }
  .lav-descr {
    font-size: 18px;
    line-height: 24px;
  }
  .lav-jumb {
    padding-top: 200px;
    padding-bottom: 96px;
  }
  .lav-jumb__container {
    display: flex;
    justify-content: space-between;
  }
  .lav-jumb__image {
    line-height: 0;
    margin-top: -35px;
  }
  .lav-jumb__image img {
    position: absolute;
    left: 0;
  }
  .lav-jumb__info {
    width: 480px;
  }
  .lav-jumb__title {
    font-weight: 700;
    font-size: 64px;
    line-height: 64px;
    align-items: center;
    letter-spacing: 0.01em;
  }
  .lav-jumb__rate {
    display: flex;
    align-items: center;
    margin: 24px 0;
    cursor: pointer;
    transition: 0.35s;
  }
  .lav-jumb__rate:hover {
    opacity: 0.8;
  }
  .lav-jumb__rate-caption {
    font-weight: 700;
    font-size: 32px;
    line-height: 36px;
    margin-right: 15px;
  }

  .lav-plate {
    position: relative;
    z-index: 1;
    filter: drop-shadow(0px 44px 66px rgba(59, 83, 108, 0.44));
    background-color: #fff;
    max-width: 644px;
    padding: 24px;
    margin: 0 auto -48px;
    text-align: center;
    border-radius: 8px;
  }
  .lav-plate__title {
  }
  .lav-plate__descr {
    margin-top: 12px;
  }
  .lav-whatis {
    padding-bottom: 24px;
  }
  .lav-whatis__preview {
    position: relative;
    background: #C4C4C4;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    overflow: hidden;
    line-height: 0;
  }
  .lav-whatis__placeholder {
    max-width: 100%;
  }
  .lav-whatis__play-btn {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 156px;
    height: 156px;
    line-height: 0;
    transition: 0.3s;
  }
  .lav-whatis__play-btn + .lav-whatis__play-btn {
    opacity: 0;
  }
  .lav-whatis__play {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 156px;
    height: 156px;
    line-height: 0;
    cursor: pointer;
  }
  .lav-whatis__play:hover .lav-whatis__play-btn {
    opacity: 0;
  }
  .lav-whatis__play:hover .lav-whatis__play-btn + .lav-whatis__play-btn {
    opacity: 1;
    filter: drop-shadow(0 0 -140px rgba(59,83,108,.8));
  }

  .order-menu-wrapper~.modal-backdrop.show {
    background-color: #081D32;
    opacity: 0.4;
  }

  .lav-benefits {
    padding-bottom: 96px;
  }
  .lav-benefits__title {
    margin-bottom: 48px;
    text-align: center;
  }
  .lav-benefits__list {
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr; 
    gap: 24px; 
  }
  .lav-benefit {
    position: relative;
    // background-color: #C4C4C4;
    border-radius: 8px;
    overflow: hidden;
    filter: drop-shadow(0px 44px 66px rgba(59, 83, 108, 0.22));
    background-size: cover;
    min-height: 350px;
    padding: 32px;
    display: flex;
    align-items: flex-end;
  }
  .lav-benefit:before {
    // content: '';
    // position: absolute;
    // left: 0;
    // right: 0;
    // bottom: 0;
    // top: 0;
    // background: radial-gradient(145.34% 98.1% at 50.14% 0%, rgba(243, 245, 249, 0) 21.88%, rgba(243, 245, 249, 0.179775) 34.38%, rgba(243, 245, 249, 0.811752) 47.4%, #F3F5F9 58.33%);
  }
  .lav-benefit__info {
    position: relative;
    z-index: 1;
  }
  .lav-benefit__icon {
    width: 80px;
    height: 80px;
    margin-bottom: 24px;
  }
  .lav-benefit__icon img {
    max-width: 100%;
  }
  .lav-benefit__title {
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
  }

  .lav-transforms {
    padding-bottom: 96px;
  }

  .lav-transform {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .splide__pagination {
    padding: 0;
    margin-top: 20px;
  }

  .splide__pagination__page {
    width: 8px;
    height: 8px;
    padding: 0;
    border-radius: 50px;
    background: none;
    border: 1px solid #4E4F51;
    transition: 0.35s;
  }

  .splide__pagination__page.is-active {
    background-color: #4E4F51;
  }

  .splide__pagination li + li {
    margin-left: 32px;
  }

  .splide__pagination li {
    line-height: 0;
  }

  .lav-transform__info {
    max-width: 430px;
    margin-bottom: 50px;
  }

  .lav-transform__title {
    margin-bottom: 24px;
  }
  .lav-transform {}

  .lav-morning {
    text-align: center;
    padding-bottom: 96px;
  }
  .lav-morning__image {
    line-height: 0;
  }
  .lav-morning__title {
    margin-bottom: 12px;
  }
  .lav-morning__descr {
    margin-bottom: 48px;
    max-width: 750px;
    margin-left: auto;
    margin-right: auto;
  }
  .lav-morning__list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 48px;
    max-width: 1060px;
    margin: auto;
  }
  .lav-morning__item {
    max-width: 322px;
  }
  .lav-morning__item + .lav-morning__item {
    margin-left: 48px;
  }
  .lav-morning__caption {
    margin-top: 24px;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
  }
  .lav-morning__caption span {
    letter-spacing: 0.01em;
    font-weight: bold;
  }
  .lav-morning {}
  .lav-benefits2 {
    margin-bottom: 120px;
  }
  .lav-benefits2__inner {
    padding: 48px;
    filter: drop-shadow(0px 44px 66px rgba(59, 83, 108, 0.22));
    border-radius: 16px;
    background: #517193;
    color: #fff;
    text-align: center;
  }
  .lav-benefits2__list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 48px 86px;
    margin: 48px auto 0;
  }
  .lav-benefit2 {

  }
  .lav-benefit2__icon {
    line-height: 0;
  }
  .lav-benefit2__title {
    font-size: 24px;
    line-height: 28px;
    margin-top: 12px;
    margin-bottom: 8px;
    font-weight: 700;
  }

  .lav-works {
    
  }

  .lav-works__title {
    text-align: center;
    margin-bottom: 8px;
  }
  .lav-works__row {
    display: flex;
    justify-content: center;
    margin-top: 48px;
  }
  .lav-works__image {
    line-height: 0;
    margin-left: 115px;
    margin-top: -40px;
  }
  .lav-works__info {
    max-width: 362px;
    margin-left: 40px;
  }
  .lav-works__item {
    position: relative;
    padding-left: 32px;
  }
  .lav-works__item + .lav-works__item {
    margin-top: 24px;
  }
  .lav-works__item:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 20px;
    height: 20px;
    background: url(${settings.dir}/img/check.svg) center no-repeat;
    background-size: contain;
  }
  .lav-works__item-title {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 5px;
  }
  .lav-works__item-title span {
    color: #11C6E7
  }
  .lav-works__item-descr {
    font-size: 16px;
    line-height: 24px;
    margin-right: 4px;
    display: inline-flex;
  }
  .lav-works__item-descr:not(.active) {
    display: none;
  }
  .lav-works__item-trigger {
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
    display: inline-flex;
    cursor: pointer;
    transition: 0.35s;
  }
  .lav-works__item-trigger:hover {
    opacity: 0.8;
  }
  .lav-works__study {
    margin-top: 24px;
    border: 1px solid #E7EBEF;
    border-radius: 50px;
    padding: 24px;
    background: radial-gradient(144.18% 147.88% at 53.33% -7.14%, rgba(254, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.2) 22%, rgba(237, 240, 245, 0.2) 100%);
    background: rgb(231 235 239 / 20%);
    
  }
  .lav-works__study-caption {
    position: relative;
    font-weight: 300;
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 24px;
    padding-left: 52px;
  }
  .lav-works__study-caption span {
    font-weight: 700;
  }
  .lav-works__study-caption:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 40px;
    height: 40px;
    background: url(${settings.dir}/img/lamp.svg) center no-repeat;
    background-size: contain;
  }
  .lav-works__study-btn {
    border: 1px solid rgba(81, 113, 147, 12%);
    border-radius: 123px;
    background: none;
    cursor: pointer;
    padding: 14px;
    width: 100%;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    color: #517193;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.35s;
  }
  .lav-works__study-btn:hover {
    opacity: 0.85;
    border-color: #517193;
  }
  .lav-works__study-btn img {
    margin-left: 16px;
    width: 32px;
  }
  .lav-users {
    text-align: center;
    position: relative;
  }
  .lav-users__title {
    position: absolute;
    bottom: 96px;
    left: 0;
    right: 0;
    margin: auto;
    font-size: 80px;
    line-height: 80px;
    letter-spacing: 1px;
    padding: 0 15px;
  }
  .lav-users__title span {
    font-weight: 800;
  }

  .lav-reviews {
    padding: 64px;
    background: linear-gradient(180deg, #406184 0%, #406184 61.36%, rgba(84, 114, 145, 0.892186) 72.44%, rgba(133, 154, 177, 0.636514) 84.38%, rgba(255, 255, 255, 0) 100%);
    border-radius: 8px;
    color: #fff;
  }
  .lav-reviews__title {
    text-align: center;
  }
  .lav-reviews__list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 64px;
  }
  .lav-review {
    position: relative;
    overflow: hidden;
    filter: drop-shadow(0px 11px 22px rgba(59, 83, 108, 0.88));
    background: linear-gradient(106.63deg, #F8F9FA 38.5%, #FDFDFD 100.78%);
    border-radius: 16px;
    padding: 24px;
    color: #517193;
    width: 29%;
  }
  .lav-review_expand:after {
    content: "";
    position: absolute;
    bottom: 35px;
    left: 0;
    width: 100%;
    height: 50px;
    pointer-events: none;
    background: linear-gradient(180deg,hsla(0,0%,100%,0),#fbfbfb 70%);
    z-index: 1;
  }
  .lav-review:nth-child(2) {
    width: 35%;
    min-height: 460px;
  }
  .lav-review__image {
    line-height: 0;
    text-align: center;
  }
  .lav-review__image img {

  }
  .lav-review__name {
    margin-top: 8px;
    text-align: center;
    font-size: 18px;
    line-height: 24px;
    font-weight: bold;
  }
  .lav-review__text {
    position: relative;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    margin-top: 12px;
    max-height: 168px;
    overflow-y: auto;
  }

  .lav-review__text + .lav-review__text {
    padding-bottom: 20px;
  }

  .lav-review__text:not(.active) {
    display: none;
  }
  .lav-review__link {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: rgb(64 97 132 / 50%);
  }
  .lav-review__link span {
    font-weight: bold;
    padding: 0 5px;
  }
  .lav-review__trigger {
    position: relative;
    z-index: 10;
    font-size: 16px;
    line-height: 24px;
    font-weight: bold;
    margin-top: 4px;
    cursor: pointer;
    transition: 0.35s;
  }
  .lav-review__trigger:hover {
    opacity: 0.8;
  }
  .lav-reviews__total {
    display: flex;
    margin: 64px auto 48px;
    text-align: center;
    max-width: 1000px;
  }
  .lav-reviews__total-col {
    position: relative;
    flex: 1;
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .lav-reviews__total-col:last-child:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: .1;
    background: radial-gradient(82% 55% at 0 48%,#000 0,rgba(0,0,0,.85) 18%,rgba(0,0,0,.7) 38%,rgba(0,0,0,.45) 65%,transparent 100%);
    mix-blend-mode: normal;
    z-index: 0;
  }
  .lav-reviews__total-caption {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #FFFFFF;
    opacity: 0.9;
  }
  .lav-reviews__total-caption span {
    font-weight: 500;
  }
  .lav-reviews__total__caption span {
    font-weight: bold;
  }
  .lav-reviews__total-stars {
    margin: 12px 0 17px;
    line-height: 0;
    text-align: center;
  }
  .lav-reviews__total-score {
    font-size: 24px;
    line-height: 32px;
    color: #FFAA02;
    font-weight: bold;
  }
  .lav-reviews__total-image {
    line-height: 0;
    height: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 36px;
  }
  .lav-reviews__total-image img {
    max-width: 100%;
    max-height: 100%;
  }
  .lav-reviews__all {
    text-align: center;
  }
  .lav-reviews__btn.btn-primary {
    min-width: 200px;
    min-height: 62px;
    padding: 10px 15px;
  }
  .lav-reviews__btn .btn-bg-wrapper {
    background: #fff;
  }
  .lav-reviews__btn .btn-text {
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 0.01em;
    color: #517193;
  }

  .lav-reviews__preview {
    position: relative;
    overflow: hidden;
    line-height: 0;
    margin-top: 64px;
    background: linear-gradient(115.15deg, #F8F9FA 34.03%, #FDFDFD 100%);
    box-shadow: 0px 44px 66px rgba(59, 83, 108, 0.44);
    border-radius: 16px;
    text-align: center;
  }
  .lav-reviews__placeholder {
    max-width: 100%;
    min-height: 100%;
  }
  .lav-reviews__play-btn {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 156px;
    height: 156px;
    line-height: 0;
    transition: 0.3s;
  }
  .lav-reviews__play-btn + .lav-reviews__play-btn {
    opacity: 0;
  }
  .lav-reviews__play {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 156px;
    height: 156px;
    line-height: 0;
    cursor: pointer;
  }
  .lav-reviews__play:hover .lav-reviews__play-btn {
    opacity: 0;
  }
  .lav-reviews__play:hover .lav-reviews__play-btn + .lav-reviews__play-btn {
    opacity: 1;
  }

  .lav-trial {
    padding-top: 60px;
    padding-bottom: 96px;
  }
  .lav-trial__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .lav-trial__image {
    width: 59%;
  }
  .lav-trial__info {
    max-width: 430px;
    margin-left: 40px;
  }
  .lav-trial__descr {
    margin-top: 12px;
  }
  .lav-trial__buttons {
    margin-top: 12px;
    display: flex;
    margin-bottom: 24px;
  }
  .lav-trial__btn {
    display: flex;
    align-items: center;
    font-size: 16px;
    line-height: 1;
    font-weight: bold;
    padding: 15px 24px;
    border: 1px solid rgba(81, 113, 147, 15%);
    border-radius: 36px;
    transition: 0.35s;
    cursor: pointer;
  }
  .lav-trial__btn:hover {
    border-color: #517193;
  }
  .lav-trial__btn img {
    margin-right: 8px;
  }
  .lav-trial__btn span {
    border-bottom: 1px solid #517193;
  }
  .lav-trial__btn + .lav-trial__btn {
    margin-left: 12px;
  }
  .lav-trial__inside {
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.01em;
    display: inline-block;
    transition: 0.35s;
    cursor: pointer;
  }
  .lav-trial__inside:hover {
   opacity: 0.6;
  }
  .lav-trial__actions {
    text-align: center;
  }
  .lav-trial__learn {
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.01em;
    margin-top: 28px;
    transition: 0.35s;
    cursor: pointer;
  }
  .lav-trial__learn:hover {
    opacity: 0.7;
  }
  
  .lav-drive {
    color: #FFFFFF;
    padding-top: 80px;
    background: #34475B;
  }
  .lav-drive__caption {
    font-size: 32px;
    line-height: 36px;
    text-align: center;
    color: #fff;
    opacity: 0.9;
  }
  .lav-drive__title {
    position: relative;
    font-size: 144px;
    line-height: 1;
    text-align: center;
    font-weight: bold;
    margin-top: 32px;
  }
  .lav-drive__bg {
    background: url(${settings.dir}/img/drive.jpg) top no-repeat;
    background-size: cover;
  }
  .lav-drive__bg-title {
    max-width: 475px;
    padding: 450px 0 180px;
    margin-left: auto;
    font-size: 64px;
    line-height: 64px;
    font-weight: bold;
  }
  .lav-drive__actions {
    text-align: center;
    padding-bottom: 80px;
  }
  .lav-drive__learn {
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.01em;
    margin-top: 28px;
    transition: 0.35s;
    cursor: pointer;
  }
  .lav-drive__learn:hover {
    opacity: 0.7;
  }
  .lav-drive__device {
    width: 57%;
    display: block;
    margin: -50px auto -120px;
    padding-left: 5%;
  }
  .lav-modal {
    position: fixed;
    z-index: 99;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(8, 29, 50, 0.4);
    transition: 0.35s;
    opacity: 1;
    padding: 20px;
  }
  .lav-modal:not(.active) {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }
  .lav-modal__inner {
    max-height: 95vh;
    overflow: auto;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: #FFFFFF;
    border-radius: 8px;
    padding: 72px 48px 48px;
    max-width: 400px;
    transition: 0.4s;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transform: translate(-50%, -100%);
  }
  .lav-modal__inner.active {
    transform: translate(-50%, -50%);
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }
  .lav-whatis-modal {
    line-height: 0;
    padding: 0;
    max-width: 90%;
  }
  .lav-modal__title {
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 12px;
  }
  .lav-included__list {
    margin-top: 12px;
  }
  .lav-included__item {
    padding-left: 28px;
    position: relative;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
  }
  .lav-included__item + .lav-included__item {
    margin-top: 24px;
  }

  .lav-included__item:before {
    content: '';
    position: absolute;
    left: 0;
    top: 3px;
    width: 17px;
    height: 17px;
    background: url(${settings.dir}/img/check.svg) center no-repeat;
    background-size: contain;
  }

  .lav-included__image {
    margin: 0 -20px;
  }

  .lav-included__image img {
    max-width: 100%;
  }

  .lav-modal__close {
    position: absolute;
    top: 14px;
    right: 14px;
    cursor: pointer;
    line-height: 0;
    padding: 3px;
    transition: 0.3s;
  }

  .lav-modal__close:hover {
    opacity: 0.7;
    transform: scale(1.3);
  }
  .lav-test__item {
    position: relative;
    display: flex;
    align-items: flex-start;
    font-size: 16px;
    line-height: 24px;
    color: #517193;
    min-height: 48px;
  }
  .lav-test__item:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 24px;
    left: 23px;
    border-left: 2px dashed #517193;
    height: 100%;
  }
  .lav-test__item:last-child:before {
    display: none;
  }
  .lav-test__item span {
    font-weight: bold;
  }
  .lav-test__item img {
    background: #fff;
  }
  .lav-test__item a {
    font-weight: bold;
    border-bottom: 1px solid #517193;
    color: #517193;
    transition: 0.35s;
  }
  .lav-test__item a:hover {
    border-color: transparent;
    opacity: 0.7;
  }
  .lav-test__item + .lav-test__item {
    margin-top: 11px;
  }
  .lav-test__item-info {
    margin-left: 12px;
    align-self: center;
  }
  .lav-test__list {
    margin-bottom: 20px;
  }
  .lav-test__btn.btn-primary {
    min-height: 62px;
    min-width: 230px;
    margin: auto;
    display: block;
    padding: 5px 20px;
    font-size: 18px;
    line-height: 28px;
  }
  .lav-delivery {
    text-align: center;
  }
  .lav-delivery__plate {
    background: rgba(218, 225, 232, 0.3);
    border-radius: 8px;
    padding: 24px;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #517193;
    margin-bottom: 24px;
  }
  .lav-delivery__plate span {
    font-weight: bold;
  }
  .lav-delivery__plate img {
    margin-bottom: 12px;
  }
  .lav-delivery__methods img {
    margin: 12px 0;
  }
  .lav-delivery__methods-title {
    letter-spacing: 0.01em;
  }
  .lav-delivery__descr {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.01em;
  }
  .lav-scroll-up {
    position: fixed;
    z-index: 10;
    right: 27px;
    bottom: 90px;
    border-radius: 50%;
    overflow: hidden;
    line-height: 0;
    cursor: pointer;
    transition: 0.4s;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }
  .lav-scroll-up.active {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }
  .lav-scroll-up.active {
    display: block;
  }
  .lav-scroll-up:hover {
    opacity: 0.5;
  }
`;

const newPage = `
<div class='lav-wrap'>
  <div class='lav-modal'>
    <div class='lav-modal__inner lav-included'>
      <div class='lav-modal__close'>
        <img src='${settings.dir}/img/modal-close.svg'>
      </div>

      <div class='lav-included__title lav-modal__title'>Included in your box</div>

      <div class='lav-included__image'>
        <img src='${settings.dir}/img/included.png' />
      </div>

      <div class='lav-included__list'>
        <div class='lav-included__item'>Your Luminette</div>
        <div class='lav-included__item'>A protective case</div>
        <div class='lav-included__item'>A micro USB wall charger</div>
        <div class='lav-included__item'>A microfiber cleaning cloth</div>
        <div class='lav-included__item'>Guarantee certificate</div>
        <div class='lav-included__item'>Your instruction manual </div>
      </div>
    </div>

    <div class='lav-modal__inner lav-test'>
      <div class='lav-modal__close'>
        <img src='${settings.dir}/img/modal-close.svg'>
      </div>

      <div class='lav-test__title lav-modal__title'>You have 30 days to test Luminette </div>

      <div class='lav-test__list'>
        <div class='lav-test__item'>
          <img src='${settings.dir}/img/test-num1.svg'>
          <div class='lav-test__item-info'>
            <span>Order</span> your Luminette today
          </div>
        </div>
        <div class='lav-test__item'>
          <img src='${settings.dir}/img/test-num2.svg'>
          <div class='lav-test__item-info'>
            <span>Within just a few days of ordering</span> you'll receive your Luminette
          </div>
        </div>
        <div class='lav-test__item'>
          <img src='${settings.dir}/img/test-num3.svg'>
          <div class='lav-test__item-info'>
            <span>You have a whole month to trial your Luminette.</span> We recommend that you use Luminette consistently for a minimum of 10 consecutive days
          </div>
        </div>
        <div class='lav-test__item'>
          <img src='${settings.dir}/img/test-num4.svg'>
          <div class='lav-test__item-info'>
            Within 30 days, you can choose to be refunded for your Luminette if you're unsatisfied. See more details on our <a href='/delivery'>Refunds&nbsp;page</a>.
          </div>
        </div>
      </div>

      <button class='lav-test__btn btn-primary btn-lg flipped lav-btn-buy'>
        <span class="btn-text">
          Try it $199
        </span>
        <span class="btn-bg-wrapper"></span>
      </button>
    </div>

    <div class='lav-modal__inner lav-delivery'>
      <div class='lav-modal__close'>
        <img src='${settings.dir}/img/modal-close.svg'>
      </div>

      <div class='lav-delivery__title lav-modal__title'>Free delivery</div>

      <div class='lav-delivery__plate'>
        <img src='${settings.dir}/img/flags.png'>
        <div class='lav-delivery__plate-caption'>Free for USA and Canada:<br/><span>3 to 5 working days</span></div>
      </div>

      <div class='lav-delivery__methods'>
        <div class='lav-delivery__methods-title lav-modal__title'>Method of delivery</div>
        <img src='${settings.dir}/img/delivery-methods.png'>
        <div class='lav-delivery__descr'>We usually work with national postal service. Before delivering your order, the carrier will send you an email, informing you of the day it will be delivered. In case you are not there for the delivery, you will have the option to indicate your delivery preferences.</div>
      </div>
    </div>

    <div class='lav-modal__inner lav-whatis-modal'>
      <div class='lav-modal__close'>
        <img src='${settings.dir}/img/modal-close.svg'>
      </div>

      <iframe width="840" height="480" src="https://www.youtube.com/embed/O83h2CcQAHQ" title="Luminette® Glasses 3 - Light therapy glasses" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </div>

  <div class='lav-jumb'>
    <div class='container-fluid container--size--lg lav-jumb__container'>
      <div class='lav-jumb__image'>
        <img src='${settings.dir}/img/jumb-luminette.png' />
      </div>
      <div class='lav-jumb__info'>
        <div class='lav-jumb__title'>Fight your winter blues & sleep disorders</div>
        <div class='lav-jumb__rate'>
          <div class='lav-jumb__rate-caption'>Luminette 3</div>
          <img  class='lav-jumb__rate-stars' src='${settings.dir}/img/jumb-stars.svg' />
        </div>
        <button class='lav-jumb__btn btn-primary btn-lg flipped lav-btn-buy'>
          <span class="btn-text">
            Buy $199
          </span>
          <span class="btn-bg-wrapper"></span>
        </button>
      </div>
    </div>
  </div>

  <div class='lav-whatis'>
    <div class='container-fluid container--size--lg lav-whatis__container'>
      <div class='lav-plate'>
        <div class='lav-plate__title lav-title'>What is Luminette?</div>
        <div class='lav-plate__descr lav-descr'>Luminette® is a pair of light therapy glasses that helps you restore your sleep cycles and energy levels.</div>
      </div>

      <div class='lav-whatis__preview'>
        <img class='lav-whatis__placeholder' src='${settings.dir}/img/whatis.jpg' />

        <div class="lav-whatis__play">
          <img class='lav-whatis__play-btn' src='${settings.dir}/img/play.svg' />
          <img class='lav-whatis__play-btn' src='${settings.dir}/img/play-hover.svg' />
        </div>
      </div>
    </div>
  </div>

  <div class='lav-transforms'>
    <div class='container-fluid container--size--lg lav-transforms__container'>
      <div class='lav-transforms__slider splide'>
        <div class="splide__track">
          <div class="splide__list">
            <div class='lav-transform lav-transform_first splide__slide'>
              <div class='lav-transform__info'>
                <div class='lav-transform__title lav-title'>How Luminette transforms your days</div>
                <div class='lav-transform__descr lav-descr'>Luminette's rays act like a replacement for natural sunlight. Your body can use it to maintain normal melatonin levels, sleep at night, and have more energy in the day.</div>
              </div>
              <div class='lav-transform__image'>
                <img src='${settings.dir}/img/transform-smile.png' />
              </div>
            </div>

            <div class='lav-transform lav-transform_second splide__slide'>
              <div class='lav-transform__info'>
                <div class='lav-transform__title lav-title'>How Luminette transforms your days</div>
                <div class='lav-transform__descr lav-descr'>When there's not enough sun, the brain starts overproducing melatonin which makes us weak and throws us off our sleep cycles.</div>
              </div>
              <div class='lav-transform__image'>
              <img src='${settings.dir}/img/transform-sad.png' />
              </div>
            </div>
          </div>
          </div>
      </div>
    </div>
  </div>

  <div class='lav-benefits'>
    <div class='container-fluid container--size--lg lav-benefits__container'>
      <div class='lav-benefits__title lav-title'>Luminette's light therapy benefits</div>

      <div class='lav-benefits__list'>
        <div class='lav-benefit' style='background-image: url("${settings.dir}/img/benefit1-bg.png")'>
          <div class='lav-benefit__info'>
            <div class='lav-benefit__icon'>
              <img src='${settings.dir}/img/benefit1.svg' />
            </div>
            <div class='lav-benefit__title'>Beat your winter blues</div>
          </div>
        </div>
        <div class='lav-benefit' style='background-image: url("${settings.dir}/img/benefit2-bg.png")'>
          <div class='lav-benefit__info'>
            <div class='lav-benefit__icon'>
              <img src='${settings.dir}/img/benefit2.svg' />
            </div>
            <div class='lav-benefit__title'>Regulate your sleep schedules</div>
          </div>
        </div>
        <div class='lav-benefit' style='background-image: url("${settings.dir}/img/benefit3-bg.png")'>
          <div class='lav-benefit__info'>
            <div class='lav-benefit__icon'>
              <img src='${settings.dir}/img/benefit3.svg' />
            </div>
            <div class='lav-benefit__title'>Get your energy levels back up</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class='lav-morning'>
    <div class='container-fluid container--size--lg lav-morning__container'>
      <div class='lav-morning__title lav-title'>Perfect for your morning routine</div>
      <div class='lav-morning__descr lav-descr'>Wear Luminette while brushing your teeth, eating breakfast or working on your <br /> computer - the perfect addition to any morning routine</div>

      <div class='lav-morning__list'>
        <div class='lav-morning__item'>
          <div class='lav-morning__image'>
            <img src='${settings.dir}/img/morning1.svg' />
          </div>
          <div class='lav-morning__caption'>
            Therapy sessions last <br /><span>20-45 mins</span>
          </div>
        </div>
        <div class='lav-morning__item'>
          <div class='lav-morning__image'>
            <img src='${settings.dir}/img/morning2.svg' />
          </div>
          <div class='lav-morning__caption'>Use <span>1x per day</span></div>
        </div>
        <div class='lav-morning__item'>
          <div class='lav-morning__image'>
            <img src='${settings.dir}/img/morning3.svg' />
          </div>
          <div class='lav-morning__caption'>
            Feel the benefits within <br /><span>4 to 6 days</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class='lav-benefits2'>
    <div class='container-fluid container--size--lg lav-benefits2__container'>
      <div class='lav-benefits2__inner'>
        <div class='lav-benefits2__title lav-title'>What are the benefits?</div>

        <div class='lav-benefits2__list'>
          <div class='lav-benefit2'>
            <div class='lav-benefit2__icon'>
              <img src='${settings.dir}/img/benefit2-1.svg' />
            </div>
            <div class='lav-benefit2__title'>Lightweight and comfortable</div>
            <div class='lav-benefit2__caption lav-descr'>Weighing only 51g and built with a comfy ergonomic nose fit</div>
          </div>
          <div class='lav-benefit2'>
            <div class='lav-benefit2__icon'>
              <img src='${settings.dir}/img/benefit2-2.svg' />
            </div>
            <div class='lav-benefit2__title'>Doesn't hinder your vision</div>
            <div class='lav-benefit2__caption lav-descr'>The special patented light system lets you experience light therapy without any disruption to your vision</div>
          </div>
          <div class='lav-benefit2'>
            <div class='lav-benefit2__icon'>
              <img src='${settings.dir}/img/benefit2-3.svg' />
            </div>
            <div class='lav-benefit2__title'>Compatible with glasses</div>
            <div class='lav-benefit2__caption lav-descr'>Wear Luminette on top of your glasses</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class='lav-works'>
    <div class='container-fluid container--size--lg lav-works__container'>
      <div class='lav-works__title lav-title'>How Luminette works</div>

      <div class='lav-works__row'>
        <div class='lav-works__info'>
          <div class='lav-works__item'>
            <div class='lav-works__item-title'>A patented, innovative light therapy system, for optimal comfort.</div>
            <div class='lav-works__item-descr active'>Luminette® uses a patented in...</div>
            <div class='lav-works__item-descr'>Luminette® uses a patented innovative optical technology: placed above eyesight, its beam of light is angled top-down, just as happens naturally under blue skies and allows users to keep their vision free.</div>
            <div class='lav-works__item-trigger'>Show more</div>
          </div>

          <div class='lav-works__item'>
            <div class='lav-works__item-title'>White light enhanced with <span>blue light</span> for greater effectiveness.</div>
            <div class='lav-works__item-descr active'>Luminette® emits a safe blue-...</div>
            <div class='lav-works__item-descr'>Luminette® emits a safe blue-enriched white light peaked at 468 nm. This wavelength is proven to be the most effective at triggering the body's positive response to sunlight. Luminette LED’s have been specifically selected to avoid light close to UV.</div>
            <div class='lav-works__item-trigger'>Show more</div>
          </div>

          <div class='lav-works__study'>
            <div class='lav-works__study-caption'>An <span>independent study</span> has shown that Luminette gives the same results as a 10,000 lux light box</div>
            <button class='lav-btn lav-works__study-btn'>
              <span>Read the study</span> <img src='${settings.dir}/img/adobe.svg' />
            </button>
          </div>
        </div>
        
        <div class='lav-works__image'>
          <img src='${settings.dir}/img/how-works.png' />
        </div>
      </div>
    </div>
  </div>

  <div class='lav-users'>
    <img class='lav-users__image' src='${settings.dir}/img/users-bg.png' />
    <div class='lav-users__title'><span>150,000</span> Luminette users</div>
  </div>

  <div class='lav-reviews'>
    <div class='container-fluid container--size--lg lav-works__container'>
      <div class='lav-reviews__title lav-title'>Customer reviews</div>

      <div class='lav-reviews__list'>
        <div class='lav-review'>
          <div class='lav-review__image'>
            <img src='${settings.dir}/img/review1.png' />
          </div>
          <div class='lav-review__name'>Aurélie</div>
          <a href='https://www.amazon.fr/gp/customer-reviews/RWZSN5SZJF573/ref=cm_cr_getr_d_rvw_ttl?ie=UTF8&amp;ASIN=B07VMRRB9Y' target='_blank' class='lav-review__link'>
            View review on <span>Amazon</span>
            <img src='${settings.dir}/img/rate.svg' />
          </a>
          <div class='lav-review__text active'>
            “For years, I have suffered from seasonal depression. I have been advised by health professionals (general practitioner, psychiatrist, psychologist and pharmacist) have advised me to use light therapy to improve my state in the fall and winter. I hesit...”
          </div>

          <div class='lav-review__text'>
            “For years, I have suffered from seasonal depression. I have been advised by health professionals (general practitioner, psychiatrist, psychologist and pharmacist) have advised me to use light therapy to improve my state in the fall and winter. I hesitated for a long time and then I discovered the Luminette. I use it in the morning, either while going about my business (breakfast, brushing my teeth brushing...) or when I'm reading. After the session, I have much more energy and motivation to face the day. It is very practical because it can be worn at the same time as my glasses or computer glasses. They are made of a rather rigid plastic, but they seem to be strong. They charge quite quickly. A charging indicator lets you know when it is finished. Once charged, they can be used about 10 times. There are 3 modes. The more powerful the light, the shorter the exposure time. What is very practical is that you don't have to watch the time because they turn off by themselves once the the session is over. The only small ""downside"" is that the most powerful mode can be glaring when the surrounding light is weak. I would recommend this product without hesitation, since it gives me a real moral boost during short days.”
          </div>
          
          <div class='lav-review__trigger'>Show more</div>
        </div>
        
        <div class='lav-review'>
          <div class='lav-review__image'>
            <img src='${settings.dir}/img/review2.png' />
          </div>
          <div class='lav-review__name'>Arnaud T.</div>
          <a href='https://www.google.com/maps/contrib/111655687148446401076/reviews/@50.5779487,5.2610511,16z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=fr-BE' target='_blank' class='lav-review__link'>
            View review on <span>Google</span>
            <img src='${settings.dir}/img/rate.svg' />
          </a>
          <div class='lav-review__text active'>
            "Every year I notice the lack of light and it affects my mood. This year I found the solution to remedy this with the Luminette. The advantage is that you are not stuck in front of a screen while you use it, so and you can get ready in the morning or eat breakfast with the glasses on. It is very practical :)"
          </div>
        </div>

        <div class='lav-review'>
          <div class='lav-review__image'>
            <img src='${settings.dir}/img/review3.png' />
          </div>
          <div class='lav-review__name'>Laura S.</div>
          <a href='https://www.amazon.com/gp/customer-reviews/R37M192JK2SORZ/ref=cm_cr_getr_d_rvw_ttl?ie=UTF8&ASIN=B07VMRRB9Y' target='_blank' class='lav-review__link'>
            View review on <span>Amazon</span>
            <img src='${settings.dir}/img/rate.svg' />
          </a>
          <div class='lav-review__text active'>
            “I use Luminettes since the beginning of October 2020 to deal with my Seasonal Affective Disorder (SAD). So far, I have no symptoms of SAD, despite the time changing (winter time) and the sun disappearing at 4:30 PM. It is a first. I am amazed.my energy level has increased...”
          </div>
          <div class='lav-review__text'>
            “I use Luminettes since the beginning of October 2020 to deal with my Seasonal Affective Disorder (SAD). So far, I have no symptoms of SAD, despite the time changing (winter time) and the sun disappearing at 4:30 PM. It is a first. I am amazed.my energy level has increased and I feel free and joyous most of the time. I also sleep much better. I must add that I stopped caffeine, which helps as well. Luminettes are far, far better than the lamps. I wear them every morning without being obliged to stare at the lamp. My mood has really improved. They are very convenient and easy to use. I put them onto the top of my glasses. They recharge easily and they can be used without plugging them every day. Everyone who sees me wearing them (when I attend online meetings, when I go to the dentist, etc) are asking me if it works. People think it is pretty and they are very interested because they always have someone in their family with SAD, or they are afflicted by that disorder themselves. So really, no complaints, only good things to say about my Luminettes which are as precious now as my cell phone. Merci!" caffeine, which helps as well. Luminettes are far, far better than the lamps. I wear them every morning without being obliged to stare at the lamp. My mood has really improved. They are very convenient and easy to use. I put them onto the top of my glasses. They recharge easily and they can be used without plugging them every day. Everyone who sees me wearing them (when I attend online meetings, when I go to the dentist, etc) are asking me if it works. People think it is pretty and they are very interested because they always have someone in their family with SAD, or they are afflicted by that disorder themselves. So really, no complaints, only good things to say about my Luminettes which are as precious now as my cell phone. Merci!”
          </div>
          <div class='lav-review__trigger'>Show more</div>
        </div>
      </div>

      <div class='lav-reviews__total'>
        <a href='https://www.trustedshops.be/fr/evaluation/info_X5CFE61C0E26F14D751206ABEDADF025D.html' target="_blank" class='lav-reviews__total-col'>
          <div class='lav-reviews__total-image'>
            <img src='${settings.dir}/img/reviews-trusted.svg' />
          </div>
          <div class='lav-reviews__total-score'>4.5</div>
          <div class='lav-reviews__total-stars'>
            <img src='${settings.dir}/img/reviews-stars.svg' />
          </div>
          <div class='lav-reviews__total-caption'><span>See reviews on</span> Trusted shops</div>
        </a>
        <a href='https://www.amazon.com/New-Model-Luminette-Therapy-Glasses/dp/B07VMRRB9Y?ref_=ast_bbp_dp' target="_blank" class='lav-reviews__total-col'>
          <div class='lav-reviews__total-image'>
            <img src='${settings.dir}/img/reviews-amazon.svg' />
          </div>
          <div class='lav-reviews__total-score'>4.5</div>
          <div class='lav-reviews__total-stars'>
            <img src='${settings.dir}/img/reviews-stars.svg' />
          </div>
          <div class='lav-reviews__total-caption'><span>See reviews on</span> Amazon</div>
        </a>
      </div>

      <div class='lav-reviews__all'>
        <button class='btn-primary btn-lg clip-btn lav-reviews__btn'>
          <span class="btn-text">See reviews</span>
          <span class="btn-bg-wrapper"></span>
        </button>
      </div>

      <div class='lav-reviews__preview'>
        <img class='lav-reviews__placeholder' src='${settings.dir}/img/reviews-video.jpg' />
        <!--<img class='lav-reviews__placeholder' src='${settings.dir}/img/reviews-video-fr.jpg' />-->

        <div class="lav-reviews__play">
          <img class='lav-reviews__play-btn' src='${settings.dir}/img/play.svg' />
          <img class='lav-reviews__play-btn' src='${settings.dir}/img/play-hover.svg' />
        </div>
      </div>
    </div>
  </div>

  <div class='lav-trial'>
    <div class='container-fluid container--size--lg lav-trial__container'>
      <div class='lav-trial__row'>
        <img class='lav-trial__image' src='${settings.dir}/img/trial.png' />

        <div class='lav-trial__info'>
          <div class='lav-trial__title lav-title'>30 Day Light Therapy Trial</div>
          <div class='lav-trial__descr lav-descr'>Test out Luminette's patented Light Therapy for an entire 30 days, and if you aren't satisfied, send it back and we'll refund you!</div>

          <div class='lav-trial__buttons'>
            <div class='lav-trial__btn lav-trial__btn-refresh'>
              <img src='${settings.dir}/img/icon-refresh.svg' />
              <span>30-day trial</span>
            </div>
            <div class='lav-trial__btn lav-trial__btn-box'>
              <img src='${settings.dir}/img/icon-box.svg' />
              <span>Free delivery</span>
            </div>
          </div>

          <div class='lav-trial__inside'>What’s in the box?</div>
        </div>
      </div>

      <div class='lav-trial__actions'>
        <button class='lav-jumb__btn btn-primary btn-lg flipped lav-btn-buy'>
          <span class="btn-text">
            Try it $199
          </span>
          <span class="btn-bg-wrapper"></span>
        </button>

        <div class='lav-trial__learn'>Learn more</div>
      </div>
    </div>
  </div>

  <div class='lav-drive'>
    <div class='lav-drive__caption'>Discover our new product</div>
    <div class='lav-drive__title'>Drive</div>
    <img class='lav-drive__device' src='${settings.dir}/img/drive-device.png' />
    <div class='lav-drive__bg'>
      <div class='lav-drive__bg-title'>Benefit from light therapy while driving</div>

      <div div class='lav-drive__actions'>
        <button class='lav-drive__btn btn-primary btn-lg flipped lav-btn-buy-drive'>
          <span class="btn-text">
            Try it $149
          </span>
          <span class="btn-bg-wrapper"></span>
        </button>

        <div class='lav-drive__learn'>Learn more</div>
      </div>
    </div>
  </div>

  <div class='lav-scroll-up'>
    <img src='${settings.dir}/img/button-up.svg' />
  </div>
</div>
`;

const stylesLuminatte = `
.lav-jumb__container {
  display: flex;
  justify-content: space-between;
  position: static!important;
  padding-bottom: 96px;
}
.lum-page .section-main {

}
.lav-france .lav-jumb__actions .btn-text{
  font-size: 16px;
}
.lav-jumb__image {
  line-height: 0;
  margin-top: 70px;
}
.lav-jumb__image img {
  position: absolute;
  left: 0;
}
.lav-jumb__info {
  position: relative;
  z-index: 1;
  width: 480px;
}
.lav-jumb__title {
  font-weight: 700;
  font-size: 64px;
  line-height: 64px;
  align-items: center;
  letter-spacing: 0.01em;
  margin-top: 8px;
}
.lav-jumb__caption {
  font-weight: 500;
  font-size: 32px;
  line-height: 36px;
  letter-spacing: 0.01em;
}
.lav-jumb__rate {
  display: flex;
  align-items: center;
  margin: 24px 0;
}
.lav-jumb__rate-caption {
  font-weight: 700;
  font-size: 32px;
  line-height: 36px;
  margin-right: 15px;
}
.lav-jumb__buttons {
  display: flex;
  margin-bottom: 24px;
}
.lav-jumb__btn {
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 1;
  font-weight: bold;
  padding: 15px 24px;
  border: 1px solid rgba(81, 113, 147, 15%);
  border-radius: 36px;
  transition: 0.35s;
  cursor: pointer;
}
.lav-jumb__btn:hover {
  border-color: #517193;
}
.lav-jumb__btn img {
  margin-right: 8px;
}
.lav-jumb__btn span {
  border-bottom: 1px solid #517193;
}
.lav-jumb__btn + .lav-jumb__btn {
  margin-left: 12px;
}
.lav-jumb__inside {
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.01em;
  display: inline-block;
  transition: 0.35s;
  cursor: pointer;
}
.lav-jumb__inside:hover {
 opacity: 0.6;
}
.lav-jumb__actions {
  display: flex;
  align-items: center;
}
.lav-jumb__buy {
  margin-right: 24px;
}
.lav-modal {
  position: fixed;
  z-index: 99;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(8, 29, 50, 0.4);
  transition: 0.35s;
  opacity: 1;
  padding: 20px;
}
.lav-modal:not(.active) {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}
.lav-modal__inner {
  max-height: 95vh;
  overflow: auto;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #FFFFFF;
  border-radius: 8px;
  padding: 72px 48px 48px;
  max-width: 400px;
  transition: 0.4s;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transform: translate(-50%, -100%);
}
.lav-modal__inner.active {
  transform: translate(-50%, -50%);
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}
.lav-whatis-modal {
  line-height: 0;
  padding: 0;
  max-width: 90%;
}
.lav-modal__title {
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  font-weight: bold;
  margin-bottom: 12px;
}
.lav-included__list {
  margin-top: 12px;
}
.lav-included__item {
  padding-left: 28px;
  position: relative;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
}
.lav-included__item + .lav-included__item {
  margin-top: 24px;
}

.lav-included__item:before {
  content: '';
  position: absolute;
  left: 0;
  top: 3px;
  width: 17px;
  height: 17px;
  background: url(${settings.dir}/img/check.svg) center no-repeat;
  background-size: contain;
}

.lav-included__image {
  margin: 0 -20px;
}

.lav-included__image img {
  max-width: 100%;
}

.lav-modal__close {
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
  line-height: 0;
  padding: 3px;
  transition: 0.3s;
}

.lav-modal__close:hover {
  opacity: 0.7;
  transform: scale(1.3);
}
.lav-test__item {
  position: relative;
  display: flex;
  align-items: flex-start;
  font-size: 16px;
  line-height: 24px;
  color: #517193;
  min-height: 48px;
}
.lav-test__item:before {
  content: '';
  position: absolute;
  z-index: -1;
  top: 24px;
  left: 23px;
  border-left: 2px dashed #517193;
  height: 100%;
}
.lav-test__item:last-child:before {
  display: none;
}
.lav-test__item span {
  font-weight: bold;
}
.lav-test__item img {
  background: #fff;
}
.lav-test__item a {
  font-weight: bold;
  border-bottom: 1px solid #517193;
  color: #517193;
  transition: 0.35s;
}
.lav-test__item a:hover {
  border-color: transparent;
  opacity: 0.7;
}
.lav-test__item + .lav-test__item {
  margin-top: 11px;
}
.lav-test__item-info {
  margin-left: 12px;
  align-self: center;
}
.lav-test__list {
  margin-bottom: 20px;
}
.lav-test__btn.btn-primary {
  min-height: 62px;
  min-width: 230px;
  margin: auto;
  display: block;
  padding: 5px;
  font-size: 18px;
  line-height: 28px;
}
.lav-delivery {
  text-align: center;
}
.lav-delivery__plate {
  background: rgba(218, 225, 232, 0.3);
  border-radius: 8px;
  padding: 24px;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #517193;
  margin-bottom: 24px;
}
.lav-delivery__plate span {
  font-weight: bold;
}
.lav-delivery__plate img {
  margin-bottom: 12px;
}
.lav-delivery__methods img {
  margin: 12px 0;
}
.lav-delivery__methods-title {
  letter-spacing: 0.01em;
}
.lav-delivery__descr {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.01em;
}
.section-main {
  position: relative;
}
.section-main:before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  background: linear-gradient(1deg, #e7ecf2 40%, rgba(243, 245, 249, 0) 70%);
  pointer-events: none;
}
`;

const luminatteJumb = `
  <div class='container lav-jumb__container'>
    <div class='lav-jumb__image'>
    <img src='${settings.dir}/img/jumb-luminette.png' />
    </div>

    <div class='lav-jumb__info'>
      <div class='lav-jumb__caption'>Luminette Light Therapy</div>
      <div class='lav-jumb__title'>Turn on the sun & smile again</div>

      <div class='lav-jumb__rate'>
        <div class='lav-jumb__rate-caption'>Luminette 3</div>
        <img  class='lav-jumb__rate-stars' src='${settings.dir}/img/jumb-stars.svg' />
      </div>

      <div class='lav-jumb__buttons'>
        <div class='lav-jumb__btn lav-jumb__btn-refresh'>
          <img src='${settings.dir}/img/icon-refresh.svg' />
          <span>30-day trial</span>
        </div>
        <div class='lav-jumb__btn lav-jumb__btn-box'>
          <img src='${settings.dir}/img/icon-box.svg' />
          <span>Free delivery</span>
        </div>
      </div>

      <div class='lav-jumb__actions'>
        <button class='lav-jumb__buy btn-primary btn-lg flipped lav-btn-buy'>
          <span class="btn-text">
            Buy $199
          </span>
          <span class="btn-bg-wrapper"></span>
        </button>

        <div class='lav-jumb__inside'>What’s in the box?</div>
      </div>
    </div>
  </div>

  <div class='lav-modal'>
    <div class='lav-modal__inner lav-included'>
      <div class='lav-modal__close'>
        <img src='${settings.dir}/img/modal-close.svg'>
      </div>

      <div class='lav-included__title lav-modal__title'>Included in your box</div>

      <div class='lav-included__image'>
        <img src='${settings.dir}/img/included.png' />
      </div>

      <div class='lav-included__list'>
        <div class='lav-included__item'>Your Luminette</div>
        <div class='lav-included__item'>A protective case</div>
        <div class='lav-included__item'>A micro USB wall charger</div>
        <div class='lav-included__item'>A microfiber cleaning cloth</div>
        <div class='lav-included__item'>Guarantee certificate</div>
        <div class='lav-included__item'>Your instruction manual </div>
      </div>
    </div>

    <div class='lav-modal__inner lav-test'>
      <div class='lav-modal__close'>
        <img src='${settings.dir}/img/modal-close.svg'>
      </div>

      <div class='lav-test__title lav-modal__title'>You have 30 days to test Luminette </div>

      <div class='lav-test__list'>
        <div class='lav-test__item'>
          <img src='${settings.dir}/img/test-num1.svg'>
          <div class='lav-test__item-info'>
            <span>Order</span> your Luminette today
          </div>
        </div>
        <div class='lav-test__item'>
          <img src='${settings.dir}/img/test-num2.svg'>
          <div class='lav-test__item-info'>
            <span>Within just a few days of ordering</span> you'll receive your Luminette
          </div>
        </div>
        <div class='lav-test__item'>
          <img src='${settings.dir}/img/test-num3.svg'>
          <div class='lav-test__item-info'>
            <span>You have a whole month to trial your Luminette.</span> We recommend that you use Luminette consistently for a minimum of 10 consecutive days
          </div>
        </div>
        <div class='lav-test__item'>
          <img src='${settings.dir}/img/test-num4.svg'>
          <div class='lav-test__item-info'>
            Within 30 days, you can choose to be refunded for your Luminette if you're unsatisfied. See more details on our <a href='/delivery'>Refunds&nbsp;page</a>.
          </div>
        </div>
      </div>

      <button class='lav-test__btn btn-primary btn-lg flipped lav-btn-buy'>
        <span class="btn-text">
          Try it $199
        </span>
        <span class="btn-bg-wrapper"></span>
      </button>
    </div>

    <div class='lav-modal__inner lav-delivery'>
      <div class='lav-modal__close'>
        <img src='${settings.dir}/img/modal-close.svg'>
      </div>

      <div class='lav-delivery__title lav-modal__title'>Free delivery</div>

      <div class='lav-delivery__plate'>
        <img src='${settings.dir}/img/flags.png'>
        <div class='lav-delivery__plate-caption'>Free for USA and Canada:<br/><span>3 to 5 working days</span></div>
      </div>

      <div class='lav-delivery__methods'>
        <div class='lav-delivery__methods-title lav-modal__title'>Method of delivery</div>
        <img src='${settings.dir}/img/delivery-methods.png'>
        <div class='lav-delivery__descr'>We usually work with national postal service. Before delivering your order, the carrier will send you an email, informing you of the day it will be delivered. In case you are not there for the delivery, you will have the option to indicate your delivery preferences.</div>
      </div>
    </div>

    <div class='lav-modal__inner lav-whatis-modal'>
      <div class='lav-modal__close'>
        <img src='${settings.dir}/img/modal-close.svg'>
      </div>

      <iframe width="840" height="480" src="https://www.youtube.com/embed/O83h2CcQAHQ" title="Luminette® Glasses 3 - Light therapy glasses" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </div>
`;
/*** STYLES / end ***/

/********* Custom Code **********/
if (location.pathname.includes('/luminette')) {
  const stylesEl = document.createElement('style');
  stylesEl.innerHTML = stylesLuminatte;
  document.body.appendChild(stylesEl);

  initLuminatte();
} else {
  const stylesEl = document.createElement('style');
  stylesEl.innerHTML = styles;
  document.body.appendChild(stylesEl);

  const sliderStyles = document.createElement('link');
  sliderStyles.rel = 'stylesheet';
  sliderStyles.href =
    'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.1/dist/css/splide-core.min.css';
  document.body.appendChild(sliderStyles);

  let sliderScript = document.createElement('script');
  sliderScript.src =
    'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.1/dist/js/splide.min.js';
  document.body.append(sliderScript);

  init();
}

function initLuminatte() {
  let lang = detectLang();
  console.log('init Luminatte');

  document.querySelector('.section-main .container + div').remove();
  document.querySelector('.section-main .container').remove();

  document
    .querySelector('.section-main')
    .insertAdjacentHTML('afterbegin', luminatteJumb);

  console.log(lang);
  if (lang != 'eng') {
    initTranslateLuminatte(lang);
  }

  initModals();
}

function init() {
  let lang = detectLang();
  console.log('init');

  document
    .querySelector('.home-page')
    .insertAdjacentHTML('afterbegin', newPage);

  console.log(lang);
  if (lang != 'eng') {
    initTranslateMain(lang);
  }

  let initSplideInterval = setInterval(() => {
    if (typeof Splide == 'function') {
      clearInterval(initSplideInterval);
      new Splide('.splide', {
        type: 'loop',
        arrows: false,
      }).mount();
    }
  }, 500);

  for (let btn of document.querySelectorAll('.lav-btn-buy')) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector('.glasses-item .btn-primary').click();
    });
  }

  for (let btn of document.querySelectorAll('.lav-btn-buy-drive')) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector('.drive-item .btn-primary').click();
    });
  }

  for (let item of document.querySelectorAll('.lav-works__item-trigger')) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      if (this.innerText == 'Show more' || this.innerText == 'Afficher plus') {
        if (detectLang() == 'fr') {
          this.innerText = 'Montrer moins';
        } else {
          this.innerText = 'Show less';
        }
        this.closest('.lav-works__item')
          .querySelector('.lav-works__item-descr')
          .classList.remove('active');
        this.closest('.lav-works__item')
          .querySelector('.lav-works__item-descr + .lav-works__item-descr')
          .classList.add('active');
      } else {
        if (detectLang() == 'fr') {
          this.innerText = 'Afficher plus';
        } else {
          this.innerText = 'Show more';
        }
        this.closest('.lav-works__item')
          .querySelector('.lav-works__item-descr')
          .classList.add('active');
        this.closest('.lav-works__item')
          .querySelector('.lav-works__item-descr + .lav-works__item-descr')
          .classList.remove('active');
      }
    });
  }

  for (let item of document.querySelectorAll('.lav-review__trigger')) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      if (this.innerText == 'Show more') {
        this.innerText = 'Show less';
        this.closest('.lav-review').classList.add('lav-review_expand');
        this.closest('.lav-review')
          .querySelector('.lav-review__text')
          .classList.remove('active');
        this.closest('.lav-review')
          .querySelector('.lav-review__text + .lav-review__text')
          .classList.add('active');
      } else {
        this.innerText = 'Show more';
        this.closest('.lav-review').classList.remove('lav-review_expand');
        this.closest('.lav-review')
          .querySelector('.lav-review__text')
          .classList.add('active');
        this.closest('.lav-review')
          .querySelector('.lav-review__text + .lav-review__text')
          .classList.remove('active');
      }
    });
  }

  document
    .querySelector('.lav-reviews__all')
    .addEventListener('click', function (e) {
      e.preventDefault();
      location.href += '/customer-reviews?product=luminette';
    });

  document
    .querySelector('.lav-trial__learn')
    .addEventListener('click', function (e) {
      e.preventDefault();
      location.href += '/luminette';
    });

  document
    .querySelector('.lav-drive__learn')
    .addEventListener('click', function (e) {
      e.preventDefault();
      location.href += '/drive';
    });

  document
    .querySelector('.lav-works__study-btn')
    .addEventListener('click', function (e) {
      e.preventDefault();
      let el = document.createElement('a');
      el.href =
        'https://d3sq5glv6xow4l.cloudfront.net/docs/Light_therapy_with_boxes_or_glasses_to_counteract_.pdf';
      el.click();
    });

  document
    .querySelector('.lav-jumb__rate')
    .addEventListener('click', function (e) {
      e.preventDefault();
      document
        .querySelector('.lav-reviews')
        .scrollIntoView({ behavior: 'smooth' });
    });

  document
    .querySelector('.lav-scroll-up')
    .addEventListener('click', function (e) {
      e.preventDefault();
      document
        .querySelector('.lav-wrap')
        .scrollIntoView({ behavior: 'smooth' });
    });

  window.onscroll = function () {
    if (window.pageYOffset > document.querySelector('.lav-jumb').offsetHeight) {
      document.querySelector('.lav-scroll-up').classList.add('active');
    } else {
      document.querySelector('.lav-scroll-up').classList.remove('active');
    }
  };

  initModals();
}

function initModals() {
  document.querySelector('.lav-modal').addEventListener('click', function (e) {
    if (e.target.classList.contains('lav-modal')) {
      closeModal();
    }
  });

  for (let item of document.querySelectorAll('.lav-modal__close')) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      closeModal();
    });
  }

  if (document.querySelector('.lav-jumb__btn-refresh')) {
    document
      .querySelector('.lav-jumb__btn-refresh')
      .addEventListener('click', function (e) {
        e.preventDefault();
        openModal(document.querySelector('.lav-test'));
      });
  } else {
    document
      .querySelector('.lav-trial__btn-refresh')
      .addEventListener('click', function (e) {
        e.preventDefault();
        openModal(document.querySelector('.lav-test'));
      });
  }

  if (document.querySelector('.lav-trial__btn-box')) {
    document
      .querySelector('.lav-trial__btn-box')
      .addEventListener('click', function (e) {
        e.preventDefault();
        openModal(document.querySelector('.lav-delivery'));
      });
  } else {
    document
      .querySelector('.lav-jumb__btn-box')
      .addEventListener('click', function (e) {
        e.preventDefault();
        openModal(document.querySelector('.lav-delivery'));
      });
  }

  if (document.querySelector('.lav-trial__inside')) {
    document
      .querySelector('.lav-trial__inside')
      .addEventListener('click', function (e) {
        e.preventDefault();
        openModal(document.querySelector('.lav-included'));
      });
  } else {
    document
      .querySelector('.lav-jumb__inside')
      .addEventListener('click', function (e) {
        e.preventDefault();
        openModal(document.querySelector('.lav-included'));
      });
  }

  if (document.querySelector('.lav-whatis__play')) {
    document
      .querySelector('.lav-whatis__play')
      .addEventListener('click', function (e) {
        e.preventDefault();
        openModal(document.querySelector('.lav-whatis-modal'));
      });
  } else {
    document
      .querySelector('.lav-btn-buy')
      .addEventListener('click', function (e) {
        e.preventDefault();
        location.href = location.href.replace('/luminette', '/buy?product=4');
      });
  }
}

function openModal(selector) {
  document.querySelector('.lav-modal').classList.add('active');
  setTimeout(() => {
    selector.classList.add('active');
  }, 400);
}

function closeModal() {
  document.querySelector('.lav-modal__inner.active').classList.remove('active');
  setTimeout(() => {
    document.querySelector('.lav-modal.active').classList.remove('active');
  }, 400);
}

function detectLang() {
  let lang = 'eng';
  if (location.href.includes('com/fr')) {
    lang = 'fr';
  } else if (location.href.includes('com/nl')) {
    lang = 'nl';
  }

  return lang;
}

function initTranslateMain(lang) {
  console.log('init translate', lang);
  if (lang == 'fr') {
    document.querySelector('.lav-jumb__title').innerText =
      'Combattez votre blues hivernal et vos troubles du sommeil';

    document.querySelector('.lav-jumb__btn .btn-text').innerText =
      'Achat 229 €';

    document.querySelector('.lav-plate__title').innerText =
      "C'est quoi la Luminette ?";

    document.querySelector('.lav-plate__descr').innerText =
      "La Luminette® est une paire de lunettes de luminothérapie qui vous aide à réguler vos cycles de sommeil et retrouver votre niveau d'énergie en hiver.";

    for (let item of document.querySelectorAll('.lav-transform__title')) {
      item.innerText = 'Comment Luminette transforme vos journées';
    }

    document.querySelector(
      '.lav-transform_first .lav-transform__descr'
    ).innerText =
      "La lumière émise par la Luminette reproduit les effets bénéfiques du soleil. En stoppant la sécrétion de mélatonine et en agissant directement sur le cerveau, la lumière permet de réguler les cycles de sommeil et d'optimiser son niveau d'énergie en hiver. ";
    document.querySelector(
      '.lav-transform_second .lav-transform__descr'
    ).innerText =
      'Lorsque nous ne recevons pas assez de lumière le matin, le cerveau continue à produire de la mélatonine après le réveil, ce qui augmente notre fatigue et perturbe notre sommeil.';

    document.querySelector('.lav-benefits__title').innerText =
      'Les avantages de la Luminette';

    document.querySelector(
      '.lav-benefits__list .lav-benefit:first-child .lav-benefit__title'
    ).innerText = 'Finissez-en avec le blues hivernal';

    document.querySelector(
      '.lav-benefits__list .lav-benefit:nth-child(2) .lav-benefit__title'
    ).innerText = 'Régulez vos cycles de sommeil';

    document.querySelector(
      '.lav-benefits__list .lav-benefit:last-child .lav-benefit__title'
    ).innerText = "Retrouvez votre niveau d'énergie";

    document.querySelector('.lav-morning__title').innerText =
      'Parfait pour votre routine matinale';
    document.querySelector('.lav-morning__descr').innerText =
      'Portez la Luminette tout en vous brossant les dents, en prenant votre petit-déjeuner ou en travaillant sur votre ordinateur - le complément parfait à votre routine matinale.';
    document.querySelector(
      '.lav-morning__item:first-child .lav-morning__caption'
    ).innerHTML = 'Une session dure entre <br/><span>20 à 60 minutes</span>';
    document.querySelector(
      '.lav-morning__item:nth-child(2) .lav-morning__caption'
    ).innerHTML = 'A utiliser <span>une fois par jour</span>';
    document.querySelector(
      '.lav-morning__item:last-child .lav-morning__caption'
    ).innerHTML =
      'Ressentez les bienfaits dans les<br/><span>4 à 6 jours</span>';

    document.querySelector('.lav-benefits2__title').innerText =
      'Quels sont les avantages ?';
    document.querySelector(
      '.lav-benefit2:first-child .lav-benefit2__title'
    ).innerText = 'Léger et confortable';
    document.querySelector(
      '.lav-benefit2:first-child .lav-benefit2__caption'
    ).innerText =
      "La Luminette ne pèse que 51 g et est dotée d'un support pour le nez nasal ergonomique et ajustable.";
    document.querySelector(
      '.lav-benefit2:nth-child(2) .lav-benefit2__title'
    ).innerText = 'Ne gêne pas votre vue';
    document.querySelector(
      '.lav-benefit2:nth-child(2) .lav-benefit2__caption'
    ).innerText =
      "Le système d'éclairage breveté vous permet de bénéficier de la luminothérapie sans perturber votre vision.";
    document.querySelector(
      '.lav-benefit2:last-child .lav-benefit2__title'
    ).innerText = 'Compatible avec des lunettes de vue';
    document.querySelector(
      '.lav-benefit2:last-child .lav-benefit2__caption'
    ).innerText = 'Portez la Luminette par-dessus vos lunettes';

    document.querySelector('.lav-works__title').innerText =
      'Comment fonctionne la Luminette';
    document.querySelector(
      '.lav-works__item .lav-works__item-title'
    ).innerText = 'Un système innovant breveté pour un confort optimal.';
    document.querySelector(
      '.lav-works__item .lav-works__item-descr'
    ).innerText = 'Luminette® utilise une...';
    document.querySelector(
      '.lav-works__item .lav-works__item-descr + .lav-works__item-descr'
    ).innerText =
      'Luminette® utilise une technologie optique innovante brevetée : placé au-dessus de la vue, son faisceau de lumière est orienté du haut vers le bas, comme cela se produit naturellement sous un ciel bleu et permet aux utilisateurs de garder leur vision libre.';

    document.querySelector(
      '.lav-works__item + .lav-works__item .lav-works__item-title'
    ).innerHTML =
      'Une lumière enrichie en <span>bleu pour</span> plus d’efficacité.';
    document.querySelector(
      '.lav-works__item + .lav-works__item .lav-works__item-descr'
    ).innerText = 'La Luminette émet une...';
    document.querySelector(
      '.lav-works__item + .lav-works__item .lav-works__item-descr + .lav-works__item-descr'
    ).innerText =
      "La Luminette émet une lumière blanche enrichie en bleu, à 468 nm. Il est en effet prouvé que c'est cette longueur d'onde qui active le plus efficacement la réponse énergisante du corps à la lumière.";
    for (let item of document.querySelectorAll('.lav-works__item-trigger')) {
      item.innerText = 'Afficher plus';
    }
    document.querySelector('.lav-works__study-caption').innerHTML =
      "Une <span>étude indépendante</span> a montré que la Luminette donne les mêmes résultats qu'une lampe de 10 000 lux.";
    document.querySelector('.lav-works__study-btn span').innerText =
      "Lire l'étude";

    document.querySelector('.lav-users__title').innerHTML =
      'Plus de <span>150 000</span> utilisateurs de la Luminette';
    document.querySelector('.lav-reviews__title').innerText =
      'Avis des utilisateurs';
    for (let item of document.querySelectorAll('.lav-works__item-trigger')) {
      item.innerText = 'Afficher plus';
    }
    document.querySelector(
      '.lav-reviews__total-col:first-child .lav-reviews__total-caption span'
    ).innerText = 'Voir les avis sur';
    document.querySelector(
      '.lav-reviews__total-col:last-child .lav-reviews__total-caption span'
    ).innerText = 'Voir les avis sur';
    document.querySelector('.lav-reviews__btn .btn-text').innerText =
      'Voir les avis';

    document.querySelector('.lav-trial__title').innerText = 'Essai de 30 jours';
    document.querySelector('.lav-trial__descr').innerText =
      "Testez les lunettes de luminothérapie Luminette pendant 30 jours, et si vous n'êtes pas satisfait, renvoyez-la nous et nous vous rembourserons !";
    document.querySelector('.lav-trial__inside').innerText =
      'Que contient la boîte ?';
    document.querySelector('.lav-trial__btn-refresh span').innerText =
      'Essai de 30 jours';
    document.querySelector('.lav-trial__btn-box span').innerText =
      'Livraison gratuite';
    document.querySelector('.lav-trial__actions .btn-text').innerText =
      'Essayez-les pour 229 €';
    document.querySelector('.lav-trial__learn').innerText = 'En savoir plus';

    document.querySelector('.lav-included__title').innerText =
      'Ce que vous trouverez dans la boite';
    document.querySelector('.lav-included__item:nth-child(1)').innerText =
      'Votre Luminette';
    document.querySelector('.lav-included__item:nth-child(2)').innerText =
      'Un étui de protection';
    document.querySelector('.lav-included__item:nth-child(3)').innerText =
      'Un chargeur mural micro-USB';
    document.querySelector('.lav-included__item:nth-child(4)').innerText =
      'Un tissu nettoyant en microfibres';
    document.querySelector('.lav-included__item:nth-child(5)').innerText =
      'Votre certificat de garantie de 2 ans';
    document.querySelector('.lav-included__item:nth-child(6)').innerText =
      "Le manuel d'utilisation";

    document.querySelector('.lav-test__title').innerText =
      'Vous avez 30 jours pour tester la Luminette';
    document.querySelector(
      '.lav-test__item:nth-child(1) .lav-test__item-info'
    ).innerHTML = "<span>Commandez</span> votre Luminette aujourd'hui.";
    document.querySelector(
      '.lav-test__item:nth-child(2) .lav-test__item-info'
    ).innerHTML =
      'Vous recevez votre Luminette <span>quelques jours plus tard</span>';
    document.querySelector(
      '.lav-test__item:nth-child(3) .lav-test__item-info'
    ).innerHTML =
      "<span>Vous avez un mois pour tester votre Luminette.</span> Nous recommandons d'utiliser la Luminette pendant au moins 10 jours consécutifs.";
    document.querySelector(
      '.lav-test__item:nth-child(4) .lav-test__item-info'
    ).innerHTML =
      "Après un mois, vous pouvez choisir d'être remboursé si vous n'êtes pas satisfait, peu importe la raison. Plus d'info sur la page <a href='/delivery'>livraison et retour</a>";
    document.querySelector('.lav-test__btn .btn-text').innerText =
      'Essayez-les pour 229 €';

    document.querySelector('.lav-delivery__title').innerText =
      'Livraison gratuite';
    document.querySelector('.lav-delivery__plate-caption').innerHTML =
      'Livraison gratuite en Europe : <br/><span>2 à 5 jours ouvrables</span>';
    document.querySelector('.lav-delivery__methods-title').innerText =
      'Mode de livraison';
    document.querySelector('.lav-delivery__descr').innerText =
      "Nous travaillons généralement avec le service postal national (Bpost et Collissimo). Avant de livrer votre commande, le transporteur vous enverra un e-mail, vous informant du jour de livraison. Au cas où vous ne seriez pas présent lors de la livraison, vous aurez la possibilité d'indiquer vos préférences de livraison.";

    document.querySelector('.lav-drive__caption').innerText =
      'Découvrez notre nouveau produit';
    document.querySelector('.lav-drive__bg-title').innerText =
      'Bénéficiez de la luminothérapie tout en conduisant';
    document.querySelector('.lav-drive__btn .btn-text').innerText =
      'Essayez-la pour 179 €';
    document.querySelector('.lav-drive__learn').innerText = 'En savoir plus';
  }
}

function initTranslateLuminatte(lang) {
  console.log('init translate', lang);
  if (lang == 'fr') {
    document.querySelector('.lav-jumb__container').classList.add('lav-france');
    document.querySelector('.lav-jumb__caption').innerText =
      'Lunettes de luminothérapie';
    document.querySelector('.lav-jumb__title').innerText =
      'Ressentez les bienfaits de la lumière';

    document.querySelector('.lav-jumb__inside').innerText =
      'Que contient la boîte ?';
    document.querySelector('.lav-jumb__btn-refresh span').innerText =
      'Essai de 30 jours';
    document.querySelector('.lav-jumb__btn-box span').innerText =
      'Livraison gratuite';
    document.querySelector('.lav-jumb__actions .btn-text').innerText =
      'Essayez-les pour 229 €';

    document.querySelector('.lav-included__title').innerText =
      'Ce que vous trouverez dans la boite';
    document.querySelector('.lav-included__item:nth-child(1)').innerText =
      'Votre Luminette';
    document.querySelector('.lav-included__item:nth-child(2)').innerText =
      'Un étui de protection';
    document.querySelector('.lav-included__item:nth-child(3)').innerText =
      'Un chargeur mural micro-USB';
    document.querySelector('.lav-included__item:nth-child(4)').innerText =
      'Un tissu nettoyant en microfibres';
    document.querySelector('.lav-included__item:nth-child(5)').innerText =
      'Votre certificat de garantie de 2 ans';
    document.querySelector('.lav-included__item:nth-child(6)').innerText =
      "Le manuel d'utilisation";

    document.querySelector('.lav-test__title').innerText =
      'Vous avez 30 jours pour tester la Luminette';
    document.querySelector(
      '.lav-test__item:nth-child(1) .lav-test__item-info'
    ).innerHTML = "<span>Commandez</span> votre Luminette aujourd'hui.";
    document.querySelector(
      '.lav-test__item:nth-child(2) .lav-test__item-info'
    ).innerHTML =
      'Vous recevez votre Luminette <span>quelques jours plus tard</span>';
    document.querySelector(
      '.lav-test__item:nth-child(3) .lav-test__item-info'
    ).innerHTML =
      "<span>Vous avez un mois pour tester votre Luminette.</span> Nous recommandons d'utiliser la Luminette pendant au moins 10 jours consécutifs.";
    document.querySelector(
      '.lav-test__item:nth-child(4) .lav-test__item-info'
    ).innerHTML =
      "Après un mois, vous pouvez choisir d'être remboursé si vous n'êtes pas satisfait, peu importe la raison. Plus d'info sur la page <a href='#'>livraison et retour</a>";
    document.querySelector('.lav-test__btn .btn-text').innerText =
      'Essayez-les pour 229 €';

    document.querySelector('.lav-delivery__title').innerText =
      'Livraison gratuite';
    document.querySelector('.lav-delivery__plate-caption').innerHTML =
      'Livraison gratuite en Europe : <br/><span>2 à 5 jours ouvrables</span>';
    document.querySelector('.lav-delivery__methods-title').innerText =
      'Mode de livraison';
    document.querySelector('.lav-delivery__descr').innerText =
      "Nous travaillons généralement avec le service postal national (Bpost et Collissimo). Avant de livrer votre commande, le transporteur vous enverra un e-mail, vous informant du jour de livraison. Au cas où vous ne seriez pas présent lors de la livraison, vous aurez la possibilité d'indiquer vos préférences de livraison.";
  }
}
