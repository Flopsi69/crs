console.log('initExp');

/********* Settings **********/
const settings = {
  dir: 'https://flopsi69.github.io/crs/myluminette/newhome',
  clarity: true,
  observe: false,
};

//Hotjar
if (settings.clarity) {
  const clarityInterval = setInterval(function () {
    if (typeof clarity == 'function') {
      clearInterval(clarityInterval);
      clarity('set', 'new_home_page_layout', 'variant_1');
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
      event: 'event-to-ga',
      eventCategory: 'Exp — New home page layout',
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

// Styles
const styles = `
  .light-therapy-section, .pin-spacer, [id^=trustbadge-container] {
    display: none!important;
  }
  .home-page > *:not(.lav-wrap) {
    display: none;
  }
  .home-page {
    // background-color: #fff;
    background: linear-gradient(180deg, #F3F5F9 52.08%, #FFFFFF 100%);
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
    margin-top: -60px;
    position: relative;
    flex-grow: 1;
  }
  .lav-jumb__image img {
    position: absolute;
    right: -50px;
  }
  @media(max-width: 1400px) {
    .lav-jumb__image img {
      max-width: 140%;
    }
    .lav-jumb__image {
      margin-top: -30px;
    }
  }
  .lav-jumb__info {
    width: 644px;;
  }
  .lav-jumb__title {
    font-weight: 700;
    font-size: 56px;
    line-height: 56px;
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
    max-width: 445px;
    margin-left: auto;
    margin-right: auto;
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
    background-size: cover;
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
    cursor: pointer;
  }

  .splide__pagination__page {
    cursor: pointer;
  }

  .lav-transform__info {
    max-width: 560px;
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
  .lav-users__image {
    max-width: 100%;
  }
  .lav-users__title {
    position: absolute;
    bottom: 70px;
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
    margin-top: 64px;
  }
  .lav-review {
    position: relative;
    overflow: hidden;
    box-shadow: 0px 11px 22px rgba(59, 83, 108, 0.88);
    // background: linear-gradient(106.63deg, #F8F9FA 38.5%, #FDFDFD 100.78%);
    background: #F8F9FA;
    border-radius: 16px;
    padding: 24px;
    color: #517193;
  }
  @media (min-width: 992px) {
    .lav-reviews__list .splide__list {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .lav-reviews__list .splide__track {
      overflow: visible;
    }
    .lav-review {
      width: 29%;
    }
    .lav-review:nth-child(2) {
      width: 35%;
      min-height: 460px;
    }
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
  .lav-review__image {
    line-height: 0;
    text-align: center;
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
  @media(max-width: 1400px) {
    .lav-review__text {
      max-height: auto;
      min-height: 195px;
      max-height: 195px;
    }
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
    pointer-events: none;
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
    padding: 15px 10px;
    flex-grow: 1;
    justify-content: center;
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
  .lav-trials__btn.btn-primary {
    padding-left: 40px;
    padding-right: 40px;
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
    background: url(${settings.dir}/img/drive.jpeg) bottom no-repeat;
    background-size: contain;
    max-width: 1324px;
  }
  .lav-drive__bg-title {
    max-width: 475px;
    padding: 440px 0 160px;
    margin-left: auto;
    font-size: 56px;
    line-height: 56px;
    font-weight: bold;
    margin-right: 40px;
  }
  @media(max-width: 1275px) {
    .lav-drive__bg-title {
      padding: 460px 0 100px;
    }
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
    width: 850px;
    display: block;
    margin: -40px auto -150px;
    padding-left: 75px;
  }
  .lav-modal {
    position: fixed;
    z-index: 9999;
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
  .lav-whatis-modal, .lav-review-modal {
    line-height: 0;
    padding: 0;
    max-width: 90%;
    background: transparent;
  }
  .lav-review-modal {
    // padding: 10px;
  }
  .lav-review-modal iframe {
    // max-width: 400px;
    border: none;
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
    z-index: 0;
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
    position: relative;
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
    padding: 5px 40px;
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
    text-align: left;
    letter-spacing: 0.01em;
  }
  .lav-scroll-up {
    position: fixed;
    z-index: 9999;
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
  .lav-whatis__placeholder-mob {
    display: none;
  }
  .lav-works__image img + img {
    display: none;
  }
  .lav-users__image-mob {
    display: none;
  }
  .lav-users__title-mob {
    display: none;
  }
  .lav-transform__title-mob {
    display: none;
  }
  @media (max-width: 768px) {
    .lav-whatis__placeholder {
      display: none;
      width: 100%;
    }
    .lav-whatis__placeholder-mob {
      display: block;
    }
    .lav-jumb__image {
      margin-top: 10px;
    }
    .lav-jumb__image img {
      position: static;
      max-width: 100%;
      transform: scale(1.25);
      margin-left: -12px;
    }
    .lav-jumb__container {
      display: block;
    }
    .lav-jumb {
      padding-top: 105px;
      padding-bottom: 48px;
    }
    .lav-jumb__title {
      font-size: 40px;
      line-height: 1;
      text-align: center;
    }
    .lav-trial__btn span {
      font-size: 14px;
      border: none;
      text-decoration: underline;
      text-align: left;
    }
    .lav-jumb__rate {
      flex-flow: column-reverse;
      align-items: center;
      justify-content: center;
      margin-top: 0;
      margin-bottom: 20px;
    }
    .lav-jumb__info {
      width: auto;
      text-align: center;
    }
    .lav-jumb__rate-caption {
      margin-right: 0;
      font-size: 24px;
      margin-top: 12px;
    }
    .lav-wrap {
      color: #517193;
      background: url('${settings.dir}/img/jumb-bg-mob.png') top no-repeat;
      background-size: 100% auto;
    }
    .lav-plate {
      padding: 16px;
      margin: 0 0 -16px;
    }
    .lav-plate__title {
      font-size: 36px;
      line-height: 44px;
    }
    .lav-title {
      font-size: 32px;
      line-height: 36px;
    }
    .lav-plate__descr {
      line-height: 24px;
    }
    .lav-whatis__preview {
      margin: 0 -12px;
      border-radius: 8px;
    }
    .lav-whatis__play, .lav-whatis__play-btn {
      width: 130px;
      height: 130px;
    }
    .lav-transform {
      flex-flow: column-reverse;
      text-align: center;
    }
    .lav-transform__descr {
      line-height: 24px;
      margin-top: 15px;
    }
    .lav-transform__image img {
      max-width: 100%;
    }
    .lav-transform__title {
      display: none;
    }
    .lav-transform__title-mob {
      display: block;
      font-weight: 700;
      font-size: 32px;
      line-height: 36px;
    }
    .lav-transform__image {
      margin-left: -12px;
      margin-right: -12px;
      margin-top: -60px;
    }
    .lav-whatis__preview {
      box-shadow: none;
    }
    .lav-whatis {
      padding-bottom: 48px;
    }
    .lav-transform__info {
      margin-bottom: 24px;
    }
    .lav-transforms {
      padding-bottom: 48px;
    }
    .lav-benefits__title {
      margin-bottom: 24px;
    }
    .lav-benefits__list {
      display: block;
    }
    .lav-benefit + .lav-benefit {
      margin-top: 12px;
    }
    .lav-benefit {
      padding: 24px;
      text-align: center;
      justify-content: center;
      background-color: #C4C4C4;
      border-radius: 8px;
      filter: none;
      box-shadow: 0px 24px 66px rgb(59 83 108 / 24%);
      // filter: drop-shadow(0px 44px 66px rgba(59, 83, 108, 0.44));
    }
    .lav-benefit:first-child {
      background-position: right;
    }
    .lav-benefit__title {
      font-size: 18px;
      line-height: 24px;
    }
    .lav-benefit__icon {
      margin: 0 auto 15px;
    }
    .lav-benefits {
      padding-bottom: 72px;
    }
    .lav-morning__descr {
      margin-bottom: 24px;
    }
    .lav-morning__list {
      display: block;
    }
    .lav-morning__item {
      max-width: 100%;
    }
    .lav-morning__item + .lav-morning__item {
      margin-top: 48px;
      margin-left: 0;
    }
    .lav-morning__caption {
      font-size: 18px;
      line-height: 24px;
    }
    .lav-morning__caption br {
      display: none;
    }
    .lav-morning__caption {
      margin-top: 12px;
    }
    .lav-morning__image img {
      width: 80px;
    }
    .lav-morning {
      padding-bottom: 48px;
    }
    .lav-benefits2__inner {
      margin-left: -12px;
      margin-right: -12px;
      padding: 24px;
      filter: none;
      box-shadow: 0px 24px 66px rgb(59 83 108 / 44%);
      // filter: drop-shadow(0px 44px 66px rgba(59, 83, 108, 0.44));
    }
    .lav-benefits2__list {
      margin-top: 24px;
      display: block;
    }
    .lav-benefit2 + .lav-benefit2 {
      margin-top: 48px;
    }
    .lav-benefit2__icon img {
      width: 80px;
    }
    .lav-benefits2 {
      margin-bottom: 72px;
    }
    .lav-works__row {
      flex-flow: column-reverse;
    }
    .lav-works__image {
      margin-left: 0;
      margin-bottom: 15px;
    }
    .lav-works__image img {
      max-width: 100%;
      display: none;
    }
    .lav-works__info {
      max-width: 100%;
      margin: 0;
    }
    .lav-users__image {
      display: none;
    }
    .lav-works__image img + img {
      display: block;
      margin: auto;
    }
    .lav-users__title {
      display: none;
    }
    .lav-users__title-mob {
      display: block;
      transform: translateY(-50%);
      font-weight: 300;
      font-size: 32px;
      line-height: 36px;
    }
    .lav-users__title-mob span {
      letter-spacing: 1px;
      font-size: 96px;
      line-height: 96px; 
      font-weight: 700;        
    }
    .lav-users__image-mob {
      display: block;
      max-width: 100%;
    }
    .lav-reviews {
      padding: 24px 0 12px;
      background: #517193;
      box-shadow: 0px 44px 66px rgb(59 83 108 / 24%);
    }
    .lav-reviews__list {
      margin-top: 24px;
      display: block;
    }
    .lav-review {
      padding-bottom: 56px;
    }
    .lav-reviews .splide__pagination {
      position: absolute;
      bottom: 24px;
      left: 0;
      right: 0;
    }
    .lav-review__text {
      max-height: 200px;
    }
    .lav-review_expand:after {
      bottom: 70px;
    }
    .lav-reviews__total {
      margin-top: 32px;
      display: block;
    }
    .lav-reviews__total-col {
      display: flex;
      justify-content: space-between;
      padding: 0;
    }
    .lav-reviews__total-col + .lav-reviews__total-col {
      padding-top: 26px;
      margin-top: 28px;
    }
    .lav-reviews__total-image {
      height: auto;
      width: 44%;
    }
    .lav-reviews__total-info {
      width: 44%;
    }
    .lav-reviews__total-image img {
      max-height: 100%;
    }
    .lav-reviews__total-caption span {
      display: block;
    }
    .lav-reviews__total-image {
      margin-bottom: 0;
    }
    .lav-reviews__total-col:last-child:after {
      background: radial-gradient(81.5% 54.14% at 0% 47.87%, #000000 0%, rgba(0, 0, 0, 0.869792) 17.19%, rgba(0, 0, 0, 0.70021) 38.02%, rgba(0, 0, 0, 0.441309) 65.1%, rgba(0, 0, 0, 0) 100%);
      transform: rotate(90deg);
      height: 100vw;
      top: -12px;
    }
    .lav-reviews__btn {
      min-height: 56px;
    }
    .lav-reviews__play-btn, .lav-reviews__play {
      width: 80px;
      height: 80px;
    }
    .lav-trial {
      padding-top: 72px;
      padding-bottom: 48px;
    }
    .lav-trial__learn {
      margin-top: 16px;
    }
    .lav-trial__info {
      max-width: 100%;
      margin-left: 0;
      display: flex;
      flex-flow: column;
      text-align: center;
    }
    .lav-trial__image {
      width: 100%;
    }
    .lav-trial__buttons {
      order: 1;
      margin-bottom: 16px;
      margin-top: 24px;
    }
    .lav-trial__btn {
      flex: 1;
      padding-left: 5px;
      padding-right: 5px;
      justify-content: center;
    }
    .lav-drive {
      border-radius: 8px 8px 0 0;
      padding-top: 34px;
      background: #34475B url(${settings.dir}/img/drive-mob.png) bottom no-repeat;
      background-size: 100% auto;
    }
    .lav-drive__actions {
      padding-bottom: 34px;
    }
    .lav-drive__caption {
      font-size: 18px;
      line-height: 24px;
      font-weight: 500;
    }
    .lav-drive__title {
      margin-top: 12px;
      font-size: 96px;
      line-height: 96px;
    }
    .lav-drive__device {
      margin: 0 0 -20px;
      padding: 0;
      width: 129vw;
      margin-left: -10vw;
    }
    .lav-drive__bg-title {
      font-size: 32px;
      line-height: 36px;
      text-align: center;
      padding-top: 380px;
      padding-bottom: 24px;
      margin-right: 0;
    }
    .lav-drive__bg {

      background: none;
    }
    .lav-reviews__placeholder {
      width: 100%;
    }
    .lav-modal__inner {
      max-width: 93%;
      width: 100%;
      padding: 48px 24px 24px;
    }
    .lav-modal__close {
      top: 12px;
      right: 12px;
    }
    .lav-modal {
      padding: 12px;
    }
    .lav-test__btn.btn-primary {
      min-height: 56px;
      width: 100%;
      padding-left: 15px;
      padding-right: 15px;
    }
    .lav-whatis-modal, .lav-review-modal {
      max-width: 93%;
      padding: 0;
    }
    .lav-review-modal iframe, .lav-whatis-modal iframe {
      max-width: 100%;
    }
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
            Within 30 days, you can choose to be refunded for your Luminette if you're unsatisfied. See more details on our <a href='/delivery#returns-block'>Refunds&nbsp;page</a>.
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
        <div class='lav-delivery__descr'>Orders are shipped from our logistics center located in Boise, Idaho. We use the services of Fedex Ground or USPS. Before they deliver your package, the carrier sends you a email warning you of the day of its passage.</div>
      </div>
    </div>

    <div class='lav-modal__inner lav-whatis-modal'>
      <div class='lav-modal__close'>
        <img src='${settings.dir}/img/modal-close.svg'>
      </div>

      <iframe width="840" height="480" src="https://www.youtube.com/embed/O83h2CcQAHQ?autoplay=0&start=0&showinfo=0&rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <div class='lav-modal__inner lav-review-modal'>
      <div class='lav-modal__close'>
        <img src='${settings.dir}/img/modal-close.svg'>
      </div>

      <iframe width="840" height="480" src="https://www.youtube.com/embed/ye4x3DkSbvA?autoplay=0&start=0&showinfo=0&rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </div>

  <div class='lav-jumb lav-section'>
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

  <div class='lav-whatis lav-section'>
    <div class='container-fluid container--size--lg lav-whatis__container'>
      <div class='lav-plate'>
        <div class='lav-plate__title lav-title'>What is Luminette?</div>
        <div class='lav-plate__descr lav-descr'>Luminette® is a pair of light therapy glasses that helps you restore your sleep cycles and energy levels.</div>
      </div>

      <div class='lav-whatis__preview'>
        <img class='lav-whatis__placeholder' src='${settings.dir}/img/whatis.jpg' />
        <img class='lav-whatis__placeholder lav-whatis__placeholder-mob' src='${settings.dir}/img/whatis-mob.jpeg' />

        <div class="lav-whatis__play">
          <img class='lav-whatis__play-btn' src='${settings.dir}/img/play.svg' />
          <img class='lav-whatis__play-btn' src='${settings.dir}/img/play-hover.svg' />
        </div>
      </div>
    </div>
  </div>

  <div class='lav-transforms lav-section'>
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
              <div class='lav-transform__title-mob lav-title'>How Luminette transforms your days</div>
            </div>

            <div class='lav-transform lav-transform_second splide__slide'>
              <div class='lav-transform__info'>
                <div class='lav-transform__title lav-title'>How Luminette transforms your days</div>
                <div class='lav-transform__descr lav-descr'>When there's not enough sun, the brain starts overproducing melatonin which makes us weak and throws us off our sleep cycles.</div>
              </div>
              <div class='lav-transform__image'>
              <img src='${settings.dir}/img/transform-sad.png' />
              </div>
              <div class='lav-transform__title-mob lav-title'>How Luminette transforms your days</div>
            </div>
          </div>
          </div>
      </div>
    </div>
  </div>

  <div class='lav-benefits lav-section'>
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

  <div class='lav-morning lav-section'>
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

  <div class='lav-benefits2 lav-section'>
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

  <div class='lav-works lav-section'>
    <div class='container-fluid container--size--lg lav-works__container'>
      <div class='lav-works__title lav-title'>How Luminette works</div>

      <div class='lav-works__row'>
        <div class='lav-works__info'>
          <div class='lav-works__item'>
            <div class='lav-works__item-title'>A patented, innovative light therapy system, for optimal comfort.</div>
            <div class='lav-works__item-descr active'>Luminette® uses a patented...</div>
            <div class='lav-works__item-descr'>Luminette® uses a patented innovative optical technology: placed above eyesight, its beam of light is angled top-down, just as happens naturally under blue skies and allows users to keep their vision free.</div>
            <div class='lav-works__item-trigger lav-works__item-trigger-first'>Show more</div>
          </div>

          <div class='lav-works__item'>
            <div class='lav-works__item-title'>White light enhanced with <span>blue light</span> for greater effectiveness.</div>
            <div class='lav-works__item-descr active'>Luminette® emits a safe...</div>
            <div class='lav-works__item-descr'>Luminette® emits a safe blue-enriched white light peaked at 468 nm. This wavelength is proven to be the most effective at triggering the body's positive response to sunlight. Luminette LED’s have been specifically selected to avoid light close to UV.</div>
            <div class='lav-works__item-trigger lav-works__item-trigger-second'>Show more</div>
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
          <img src='${settings.dir}/img/how-works-mob.png' />
        </div>
      </div>
    </div>
  </div>

  <div class='lav-users lav-section'>
    <img class='lav-users__image' src='${settings.dir}/img/users-bg.png' />
    <img class='lav-users__image-mob' src='${settings.dir}/img/users-bg-mob.png' />
    <div class='lav-users__title-mob container'><span>150k+</span> Luminette users</div>
    <div class='lav-users__title container'><span>150 000</span> Luminette users</div>
  </div>

  <div class='lav-reviews lav-section'>
    <div class='container-fluid container--size--lg lav-works__container'>
      <div class='lav-reviews__title lav-title'>Customer reviews</div>

      <div class='lav-reviews__list splide'>
        <div class="splide__track">
          <div class="splide__list">
            <div class='lav-review splide__slide'>
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
            
            <div class='lav-review splide__slide'>
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

            <div class='lav-review splide__slide'>
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
        </div>
      </div>

      <div class='lav-reviews__total'>
        <div class='lav-reviews__total-col'>
          <div class='lav-reviews__total-image'>
            <img src='${settings.dir}/img/reviews-trusted.svg' />
          </div>
          <div class='lav-reviews__total-info'>
            <div class='lav-reviews__total-score'>4.5</div>
            <div class='lav-reviews__total-stars'>
              <img src='${settings.dir}/img/reviews-stars.svg' />
            </div>
            <div class='lav-reviews__total-caption'><span>See reviews on</span> Trusted shops</div>
          </div>
        </div>
        <div class='lav-reviews__total-col'>
          <div class='lav-reviews__total-image'>
            <img src='${settings.dir}/img/reviews-amazon.svg' />
          </div>
          <div class='lav-reviews__total-info'>
            <div class='lav-reviews__total-score'>4.5</div>
            <div class='lav-reviews__total-stars'>
              <img src='${settings.dir}/img/reviews-stars.svg' />
            </div>
            <div class='lav-reviews__total-caption'><span>See reviews on</span> Amazon</div>
          </div>
        </div>
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

  <div class='lav-trial lav-section'>
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
        <button class='lav-trials__btn btn-primary btn-lg flipped lav-btn-buy'>
          <span class="btn-text">
            Try it $199
          </span>
          <span class="btn-bg-wrapper"></span>
        </button>

        <div class='lav-trial__learn'>Learn more</div>
      </div>
    </div>
  </div>

  <div class='lav-drive lav-section'>
    <div class='lav-drive__caption'>Discover our new product</div>
    <div class='lav-drive__title'>Drive</div>
    <img class='lav-drive__device' src='${settings.dir}/img/drive-device.png' />
    <div class='lav-drive__bg container'>
      <div class='lav-drive__bg-title'>Benefit from light therapy while driving</div>

      <div div class='lav-drive__actions'>
        <button class='lav-drive__btn btn-primary btn-lg flipped lav-btn-buy-drive'>
          <span class="btn-text">
            Buy $149
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
.lav-jumb__image {
  line-height: 0;
  margin-top: 0;
  position: relative;
  flex-grow: 1;
}
.lum-page .section-main {
  background: url(${settings.dir}/img/jumb-bg-girl.jpg) top no-repeat;
  background-size: 1640px auto;
}
.lav-jumb__image img {
  position: absolute;
  right: -50px;
}
.lav-jumb__info {
  position: relative;
  z-index: 1;
  width: 480px;
}
.lav-jumb__title {
  font-weight: 700;
  font-size: 56px;
  line-height: 56px;
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
.lav-jumb__btn, .lav-trials__btn {
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
  z-index: 0;
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
  position: relative;
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
  padding: 5px 40px;
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
  text-align: left;
  letter-spacing: 0.01em;
}
.section-main {
  position: relative;
}
.section-main:before {
  // content: '';
  // position: absolute;
  // left: 0;
  // bottom: 0;
  // top: 0;
  // right: 0;
  // background: linear-gradient(1deg, #e7ecf2 50%, rgba(243, 245, 249, 0) 70%);
  // pointer-events: none;
}
.lum-page .section-main:after{
  height: 763px;
  background: linear-gradient(0, rgba(255, 255, 255, 0) 77%, #406184 100%);
  pointer-events: none;
}
[id^=trustbadge-container] {
  display: none;
}
.lav-jumb__image-mob {
  display: none;
}
@media (max-width: 768px) { 
  .lum-page .section-main {
    padding-top: 247px;
    background: url(${settings.dir}/img/jumb-bg-girl-mob.png) top no-repeat;
    background-size: 100% auto;
  }
  .lav-jumb__btn, .lav-trials__btn {
    min-height: 56px;
  }
  .lav-jumb__inside {
    display: block;
  }
  .lum-page .section-main:after {
    height: 375px;
    background: linear-gradient(0, rgba(255, 255, 255, 0) 77%, #406184 100%);
    pointer-events: none;
  }
  .lav-jumb__info {
    text-align: center;
    width: 100%;
  }
  .lav-jumb__image-mob {
    margin-top: -10px;
    margin-bottom: -40px;
    display: block;
  }
  .lav-jumb__image {
    display: none;
  }
  .lav-jumb__caption {
    font-size: 24px;
    line-height: 28px;
  }
  .lav-jumb__title {
    font-size: 40px;
    line-height: 1;
    margin-top: 4px;
  }
  .lav-jumb__rate {
    margin-top: 0;
    flex-flow: column-reverse;
  }
  .lav-jumb__rate-caption {
    margin-right: 0;
    margin-top: 14px;
  }
  .lav-jumb__buttons {
    justify-content: center;
  }
  .lav-jumb__btn, .lav-trials__btn {
    padding: 12px 15px;
    flex-grow: 1;
    justify-content: center;
  }
  .lav-jumb__actions {
    display: block;
  }
  .lav-jumb__buy {
    margin-right: 0;
    margin-bottom: 16px;
  }
  .lav-jumb__container {
    padding-bottom: 36px;
  }
  .section-main:before {
    background: linear-gradient(1deg, #e7ecf2 70%, rgba(243, 245, 249, 0) 100%);
  }
  .lav-modal__inner {
    max-width: 93%;
    width: 100%;
    padding: 48px 24px 24px;
  }
  .lav-modal__close {
    top: 12px;
    right: 12px;
  }
  .lav-modal {
    padding: 12px;
    z-index: 9999;
  }
  .lav-test__btn.btn-primary {
    min-height: 56px;
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
  }
  .lav-whatis-modal, .lav-review-modal {
    max-width: 93%;
    padding: 0;
  }
  .lav-jumb__btn span {
    font-size: 14px;
    text-align: left;
    border: none;
    text-decoration: underline;
  }
  .lav-jumb__btn img {
    margin-right: 6px;
    width: 20px;
  }
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

      <div class='lav-jumb__image-mob'>
        <img src='${settings.dir}/img/jumb-luminette-mob.png' />
      </div>

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
            Within 30 days, you can choose to be refunded for your Luminette if you're unsatisfied. See more details on our <a href='/delivery#returns-block'>Refunds&nbsp;page</a>.
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
        <div class='lav-delivery__descr'>Orders are shipped from our logistics center located in Boise, Idaho. We use the services of Fedex Ground or USPS. Before they deliver your package, the carrier sends you a email warning you of the day of its passage.</div>
      </div>
    </div>
  </div>
`;
/*** STYLES / end ***/

/********* Custom Code **********/
gaEvent('loaded');
pageHandler();

function pageHandler() {
  if (!document.body) {
    setTimeout(() => {
      pageHandler();
    }, 200);
    return false;
  }
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

    const observerOptions = {
      root: null,
      threshold: 0,
      rootMargin: '-40%',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('lav-jumb')) {
            gaEvent('section in view', 'first section');
          }
          if (entry.target.classList.contains('lav-whatis')) {
            gaEvent('section in view', 'What is Luminette?');
          }
          if (entry.target.classList.contains('lav-transforms')) {
            gaEvent('section in view', 'How Luminette transforms your days?');
          }
          if (entry.target.classList.contains('lav-benefits')) {
            gaEvent('section in view', "Luminette's light therapy benefits");
          }
          if (entry.target.classList.contains('lav-morning')) {
            gaEvent('section in view', 'Perfect for your morning routine');
          }
          if (entry.target.classList.contains('lav-benefits2')) {
            gaEvent('section in view', 'What are the benefits?');
          }
          if (entry.target.classList.contains('lav-works')) {
            gaEvent('section in view', 'How Luminette works');
          }
          if (entry.target.classList.contains('lav-users')) {
            gaEvent('section in view', 'Luminette users');
          }
          if (entry.target.classList.contains('lav-reviews')) {
            gaEvent('section in view', 'Customer reviews');
          }
          if (entry.target.classList.contains('lav-trial')) {
            gaEvent('section in view', '30 Day Light Therapy Trial');
          }
          if (entry.target.classList.contains('lav-drive')) {
            gaEvent('section in view', 'Drive');
          }

          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    for (let section of Array.from(document.querySelectorAll('.lav-section'))) {
      observer.observe(section);
    }
  }
}

function initLuminatte() {
  if (!document.querySelector('.section-main .container + div')) {
    setTimeout(() => {
      initLuminatte();
    }, 500);
    return false;
  }

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
  initDelivery(lang);
}

function init() {
  if (!document.querySelector('.home-page')) {
    setTimeout(() => {
      init();
    }, 500);
    return false;
  }

  setTimeout(() => {
    let isScrolled20,
      isScrolled40,
      isScrolled60,
      isScrolled80,
      isScrolled100 = false;
    window.addEventListener('scroll', () => {
      let scrollTop = window.scrollY;
      let docHeight = document.body.offsetHeight;
      let winHeight = window.innerHeight;
      let scrollPercent = scrollTop / (docHeight - winHeight);
      let scrollPercentRounded = Math.round(scrollPercent * 100);
      if (scrollPercentRounded >= 20 && !isScrolled20) {
        gaEvent('scroll depth', scrollPercentRounded + '%');
        isScrolled20 = true;
      }
      if (scrollPercentRounded >= 40 && !isScrolled40) {
        gaEvent('scroll depth', scrollPercentRounded + '%');
        isScrolled40 = true;
      }
      if (scrollPercentRounded >= 60 && !isScrolled60) {
        gaEvent('scroll depth', scrollPercentRounded + '%');
        isScrolled60 = true;
      }
      if (scrollPercentRounded >= 80 && !isScrolled80) {
        gaEvent('scroll depth', scrollPercentRounded + '%');
        isScrolled80 = true;
      }
      if (scrollPercentRounded >= 99 && !isScrolled100) {
        gaEvent('scroll depth', '100%');
        isScrolled100 = true;
      }
    });
  }, 1500);

  let lang = detectLang();
  console.log('init');

  document
    .querySelector('.home-page')
    .insertAdjacentHTML('afterbegin', newPage);

  console.log(lang);
  if (lang != 'eng') {
    initTranslateMain(lang);
  }
  initDelivery(lang);

  if (window.innerWidth < 768) {
    document
      .querySelector('.lav-trial__descr')
      .insertAdjacentElement(
        'afterend',
        document.querySelector('.lav-trial__image')
      );

    document
      .querySelector('.lav-jumb__container')
      .insertAdjacentElement(
        'afterbegin',
        document.querySelector('.lav-jumb__title')
      );
  }

  let initSplideInterval = setInterval(() => {
    if (typeof Splide == 'function') {
      clearInterval(initSplideInterval);
      let splide = new Splide('.splide', {
        type: 'loop',
        arrows: false,
      }).mount();

      let splideReview = new Splide('.lav-reviews__list', {
        arrows: false,
        perPage: 3,
        pagination: false,
        autoWidth: true,
        breakpoints: {
          768: {
            perPage: 1,
            pagination: true,
            autoWidth: false,
            gap: 15,
          },
        },
      }).mount();

      splide.on('moved', function () {
        gaEvent('swipe slider', 'How Luminette transforms your days');
      });

      if (window.innerWidth < 992) {
        splideReview.on('moved', function () {
          gaEvent('Swipe', 'Customer reviews');
        });
      }
    }
  }, 500);

  for (let btn of document.querySelectorAll('.lav-btn-buy')) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector('.glasses-item .btn-primary').click();
      if (this.classList.contains('lav-test__btn')) {
        gaEvent('Try it', 'Popup: You have 30 days to test Luminette');
      }
      if (this.classList.contains('lav-trials__btn')) {
        gaEvent('Try it', '30 day Light Therapy Trial');
      }
      if (this.classList.contains('lav-jumb__btn')) {
        gaEvent('Buy', 'First screen');
      }
    });
  }

  for (let btn of document.querySelectorAll('.lav-btn-buy-drive')) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      gaEvent('Try it', 'Benefit from light therapy while driving');
      document.querySelector('.drive-item .btn-primary').click();
    });
  }

  for (let item of document.querySelectorAll('.lav-works__item-trigger')) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      if (this.innerText == 'Show more' || this.innerText == 'Afficher plus') {
        if (this.classList.contains('lav-works__item-trigger-first')) {
          gaEvent(
            'Show more',
            'A patented, innovative light therapy system, for optimal comfort'
          );
        } else {
          gaEvent(
            'Show more',
            'White light enhanced with blue light for greater effectiveness'
          );
        }

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
        if (this.classList.contains('lav-works__item-trigger-first')) {
          gaEvent(
            'Show less',
            'A patented, innovative light therapy system, for optimal comfort'
          );
        } else {
          gaEvent(
            'Show less',
            'White light enhanced with blue light for greater effectiveness'
          );
        }
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

  // document
  //   .querySelector('.lav-reviews__total-col:first-child')
  //   .addEventListener('click', function () {
  //     gaEvent('See reviews on Trusted shops', 'Under customer reviews');
  //   });

  // document
  //   .querySelector('.lav-reviews__total-col:last-child')
  //   .addEventListener('click', function () {
  //     gaEvent('See reviews on Amazon', 'Under customer reviews');
  //   });

  for (let item of document.querySelectorAll('.lav-review__trigger')) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      if (this.innerText == 'Show more' || this.innerText == 'Afficher plus') {
        if (detectLang() == 'fr') {
          this.innerText = 'Montrer moins';
        } else {
          this.innerText = 'Show less';
        }
        this.closest('.lav-review').classList.add('lav-review_expand');
        this.closest('.lav-review')
          .querySelector('.lav-review__text')
          .classList.remove('active');
        this.closest('.lav-review')
          .querySelector('.lav-review__text + .lav-review__text')
          .classList.add('active');
      } else {
        if (detectLang() == 'fr') {
          this.innerText = 'Afficher plus';
        } else {
          this.innerText = 'Show more';
        }

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
    .querySelector('.lav-reviews__btn')
    .addEventListener('click', function (e) {
      e.preventDefault();
      gaEvent('See reviews', 'Under customer reviews');
      location.href += '/customer-reviews?product=luminette';
    });

  document
    .querySelector('.lav-trial__learn')
    .addEventListener('click', function (e) {
      e.preventDefault();
      gaEvent('Learn more', '30 day Light Therapy Trial');
      location.href += '/luminette';
    });

  document
    .querySelector('.lav-drive__learn')
    .addEventListener('click', function (e) {
      e.preventDefault();
      location.href += '/drive';
      gaEvent('Learn more', 'Benefit from light therapy while driving');
    });

  document
    .querySelector('.lav-works__study-btn')
    .addEventListener('click', function (e) {
      e.preventDefault();
      gaEvent('Read the study', 'An independent study');
      let el = document.createElement('a');
      el.target = '_blank';
      el.href =
        'https://d3sq5glv6xow4l.cloudfront.net/docs/Light_therapy_with_boxes_or_glasses_to_counteract_.pdf';
      el.click();
    });

  document
    .querySelector('.lav-jumb__rate')
    .addEventListener('click', function (e) {
      e.preventDefault();
      gaEvent('Stars in reviews', 'First screen');
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
        gaEvent('30-day trial', '30 day Light Therapy Trial');
        openModal(document.querySelector('.lav-test'));
      });
  } else {
    document
      .querySelector('.lav-trial__btn-refresh')
      .addEventListener('click', function (e) {
        e.preventDefault();
        gaEvent('30-day trial', '30 day Light Therapy Trial');
        openModal(document.querySelector('.lav-test'));
      });
  }

  if (document.querySelector('.lav-trial__btn-box')) {
    document
      .querySelector('.lav-trial__btn-box')
      .addEventListener('click', function (e) {
        e.preventDefault();
        gaEvent('Free delivery', '30 day Light Therapy Trial');
        openModal(document.querySelector('.lav-delivery'));
      });
  } else {
    document
      .querySelector('.lav-jumb__btn-box')
      .addEventListener('click', function (e) {
        e.preventDefault();
        gaEvent('Free delivery', '30 day Light Therapy Trial');
        openModal(document.querySelector('.lav-delivery'));
      });
  }

  document
    .querySelector('.lav-test__item-info a')
    .addEventListener('click', function () {
      gaEvent('Refunds page', 'Popup: You have 30 days to test Luminette');
    });

  if (document.querySelector('.lav-trial__inside')) {
    document
      .querySelector('.lav-trial__inside')
      .addEventListener('click', function (e) {
        e.preventDefault();
        gaEvent('What`s in the box', '30 day Light Therapy Trial');
        openModal(document.querySelector('.lav-included'));
      });
  } else {
    document
      .querySelector('.lav-jumb__inside')
      .addEventListener('click', function (e) {
        e.preventDefault();
        gaEvent('What`s in the box', '30 day Light Therapy Trial');
        openModal(document.querySelector('.lav-included'));
      });
  }

  if (document.querySelector('.lav-whatis__play')) {
    document
      .querySelector('.lav-whatis__play')
      .addEventListener('click', function (e) {
        e.preventDefault();
        gaEvent('Play video', 'What is Luminette');
        openModal(document.querySelector('.lav-whatis-modal'));
      });

    document
      .querySelector('.lav-reviews__play')
      .addEventListener('click', function (e) {
        e.preventDefault();
        gaEvent('Play video', 'Luminette user');
        openModal(document.querySelector('.lav-review-modal'));
      });
  } else {
    document
      .querySelector('.lav-btn-buy')
      .addEventListener('click', function (e) {
        e.preventDefault();
        gaEvent('Buy', 'First screen');
        location.href = location.href.replace('/luminette', '/buy?product=4');
      });

    document
      .querySelector('.lav-test__btn')
      .addEventListener('click', function (e) {
        e.preventDefault();
        gaEvent('Try it', 'Popup: You have 30 days to test Luminette');
        location.href = location.href.replace('/luminette', '/buy?product=4');
      });
  }

  if (
    detectLang() == 'fr' &&
    document.querySelector('.lav-whatis-modal iframe')
  ) {
    document.querySelector('.lav-whatis-modal iframe').src =
      'https://www.youtube.com/embed/rnpVhWWRUDI?autoplay=0&start=1&showinfo=0&rel=0';
  }
}

function openModal(selector) {
  document.querySelector('.lav-modal').classList.add('active');
  setTimeout(() => {
    selector.classList.add('active');
  }, 400);

  if (selector.querySelector('iframe')) {
    selector.querySelector('iframe').src = selector
      .querySelector('iframe')
      .src.replace('autoplay=0', 'autoplay=1');
  }
}

function closeModal() {
  if (document.querySelector('.lav-modal__inner.active iframe')) {
    document.querySelector('.lav-modal__inner.active iframe').src = document
      .querySelector('.lav-modal__inner.active iframe')
      .src.replace('autoplay=1', 'autoplay=0');
  }
  document.querySelector('.lav-modal__inner.active').classList.remove('active');
  setTimeout(() => {
    document.querySelector('.lav-modal.active').classList.remove('active');
  }, 400);
}

function detectLang() {
  let lang = 'eng';
  // en-us / en-ca / en-gb
  // fr / fr-be / fr-ca
  if (location.href.includes('com/fr')) {
    lang = 'fr';
  }

  return lang;
}

function initDelivery(lang) {
  console.log('initDelivery');
  if (
    location.href.includes('com/en-us') ||
    location.href.includes('com/en-ca')
  ) {
    if (location.href.includes('com/en-ca')) {
      document.querySelector('.lav-test__btn .btn-text').innerText =
        'Try it $249';
      if (location.href.includes('/luminette')) {
        document.querySelector('.lav-jumb__actions .btn-text').innerText =
          'Buy $249';
      } else {
        document.querySelector('.lav-jumb__btn .btn-text').innerText =
          'Buy $249';
        document.querySelector('.lav-trial__actions .btn-text').innerText =
          'Try it $249';
        document.querySelector('.lav-drive__btn .btn-text').innerText =
          'Buy $189';
      }
    }
    return false;
  }

  if (location.href.includes('com/uk') && !location.href.includes('com/uk-')) {
    document.querySelector('.lav-delivery__plate > img').src =
      settings.dir + '/img/flags-gb.png';
    document.querySelector('.lav-delivery__plate-caption').innerHTML =
      'Free for United Kingdom:<br/><span>1 to 3 working days</span>';
    document.querySelector('.lav-delivery__methods-title + img').src =
      settings.dir + '/img/delivery-methods2.png';
    document.querySelector('.lav-delivery__descr').innerText =
      "For any orders from the UK, the parcels are shipped from Amazon's warehouses located in the UK with Amazon's selected carrier. Before delivering your order, the carrier will send you a SMS or Email, informing you of the day it will be delivered. You have the option of delaying delivery for up to 3 days. If you do not reply, the delivery date will be that proposed by the transporter.";
    return false;
  }

  if (location.href.includes('com/fr')) {
    document.querySelector('.lav-delivery__title').innerText =
      'Livraison gratuite';
    document.querySelector('.lav-delivery__methods-title').innerText =
      'Mode de livraison';

    if (document.querySelector('.lav-reviews')) {
      document.querySelector('.lav-reviews__placeholder').src =
        settings.dir + '/img/reviews-video-fr.jpg';

      document.querySelector('.lav-review-modal iframe').src =
        'https://www.youtube.com/embed/JcnfVN5iswE?autoplay=0&start=0&showinfo=0&rel=0';
    }
  }

  if (location.href.includes('com/fr') && !location.href.includes('com/fr-')) {
    document.querySelector('.lav-test__btn .btn-text').innerText =
      'Essayez-les pour 229 €';
    if (location.href.includes('/luminette')) {
      document.querySelector('.lav-jumb__actions .btn-text').innerText =
        'Achat 229 €';
    } else {
      document.querySelector('.lav-jumb__btn .btn-text').innerText =
        'Achat 229 €';
      document.querySelector('.lav-trial__actions .btn-text').innerText =
        'Essayez-les pour 229 €';
      document.querySelector('.lav-drive__btn .btn-text').innerText =
        'Achat 179 €';
    }

    document.querySelector('.lav-delivery__plate > img').src =
      settings.dir + '/img/flags-fr.png';
    document.querySelector('.lav-delivery__plate-caption').innerHTML =
      'Livraison gratuite en France:<br/><span>2 à 5 jours ouvrables</span>';
    document.querySelector('.lav-delivery__methods-title + img').src =
      settings.dir + '/img/delivery-methods2.png';
    document.querySelector('.lav-delivery__descr').innerText =
      'Nous travaillons le plus souvent avec Colissimo. Avant de vous livrer votre colis, le transporteur vous enverra un email avec un lien vous permettant de suivre le colis.';
    return false;
  }

  if (location.href.includes('com/fr-be')) {
    document.querySelector('.lav-test__btn .btn-text').innerText =
      'Essayez-les pour 229€';
    if (location.href.includes('/luminette')) {
      document.querySelector('.lav-jumb__actions .btn-text').innerText =
        'Achat 229€';
    } else {
      document.querySelector('.lav-jumb__btn .btn-text').innerText =
        'Achat 229€';
      document.querySelector('.lav-trial__actions .btn-text').innerText =
        'Essayez-les pour 229€';
      document.querySelector('.lav-drive__btn .btn-text').innerText =
        'Achat 179€';
    }
    document.querySelector('.lav-delivery__plate > img').src =
      settings.dir + '/img/flags-be.png';
    document.querySelector('.lav-delivery__plate-caption').innerHTML =
      'Livraison gratuite en Belgique:<br/><span>1 à 3 jours ouvrables</span>';
    document.querySelector('.lav-delivery__methods-title + img').src =
      settings.dir + '/img/delivery-methods2.png';
    document.querySelector('.lav-delivery__descr').innerText =
      'Nous travaillons le plus souvent avec Bpost. Avant de vous livrer votre colis, le transporteur vous enverra un email avec un lien vous permettant de suivre le colis.';
    return false;
  }

  if (location.href.includes('com/fr-ca')) {
    document.querySelector('.lav-test__btn .btn-text').innerText =
      'Essayez-les pour $249';
    if (location.href.includes('/luminette')) {
      document.querySelector('.lav-jumb__actions .btn-text').innerText =
        'Achat $249';
    } else {
      document.querySelector('.lav-jumb__btn .btn-text').innerText =
        'Achat $249';
      document.querySelector('.lav-trial__actions .btn-text').innerText =
        'Essayez-les pour $249';
      document.querySelector('.lav-drive__btn .btn-text').innerText =
        'Achat $189';
    }
    document.querySelector('.lav-delivery__plate > img').src =
      settings.dir + '/img/flags.png';
    document.querySelector('.lav-delivery__plate-caption').innerHTML =
      'Pour les États-Unis et le Canada:<br/><span>3 à 5 jours ouvrables</span>';
    document.querySelector('.lav-delivery__methods-title + img').src =
      settings.dir + '/img/delivery-methods.png';
    document.querySelector('.lav-delivery__descr').innerText =
      "Nous travaillons le plus souvent avec la logistique Fulfilled-by-Amazon (FBA) qui dispose d'entrepôts au Canada. Nous utilisons généralement le transporteur Purolator pour envoyer les colis. Avant de livrer votre colis, le transporteur vous envoie un email vous avertissant du jour de son passage.";
    return false;
  }
}

function initTranslateMain(lang) {
  console.log('init translate', lang);
  if (lang == 'fr') {
    document.querySelector('.lav-jumb__title').innerText =
      'Dites au revoir au blues hivernal. Régulez votre sommeil.';

    document.querySelector('.lav-plate__title').innerText =
      "C'est quoi la Luminette ?";

    document.querySelector('.lav-plate__descr').innerText =
      "La Luminette® est une paire de lunettes de luminothérapie qui vous aide à réguler vos cycles de sommeil et retrouver votre niveau d'énergie en hiver.";

    for (let item of document.querySelectorAll('.lav-transform__title')) {
      item.innerText = 'Comment Luminette transforme vos journées';
    }

    for (let item of document.querySelectorAll('.lav-transform__title-mob')) {
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
    document.querySelector('.lav-users__title-mob').innerHTML =
      '<span>150k+</span> utilisateurs de la Luminette';
    document.querySelector('.lav-reviews__title').innerText =
      'Avis des utilisateurs';
    document.querySelector(
      '.lav-review:nth-child(2) .lav-review__text'
    ).innerText =
      "Chaque année, je ressens un manque de lumière et cela affecte mon moral. Cette année, j'ai trouvé la solution pour y remédier avec la Luminette. L'avantage c'est qu'on n'est pas coincé devant une lampe et qu'on peut se préparer le matin ou prendre son petit déjeuner avec ses lunettes. C'est très pratique :)";

    document.querySelector(
      '.lav-review:nth-child(1) .lav-review__text'
    ).innerText =
      "Depuis des années, je souffre de dépression saisonnière. Des professionnels de la santé (médecin généraliste, psychiatre, psychologue et pharmacienne) m'ont conseillé d'avoir recours à la luminothérapie pour améliorer mon état en automne et en hiver. J'ai hésité long...";

    document.querySelector(
      '.lav-review:nth-child(1) .lav-review__text + .lav-review__text'
    ).innerText =
      "Depuis des années, je souffre de dépression saisonnière. Des professionnels de la santé (médecin généraliste, psychiatre, psychologue et pharmacienne) m'ont conseillé d'avoir recours à la luminothérapie pour améliorer mon état en automne et en hiver. J'ai hésité longuement et puis j'ai découvert les Luminette. Je les utilise le matin, soit en vaquant à mes occupations (petit déjeuner, brossage de dents...) soit pendant que je lis. Après la séance, j'ai beaucoup plus d'énergie et de motivation pour faire face à la journée. Elles sont très pratiques car elles peuvent se porter en même temps que des lunettes de vue ou d'ordinateur. Elles sont constituées de plastique, assez rigide, mais paraissent solides. Le chargement est assez rapide. Un indicateur de chargement permet de savoir quand ce dernier est terminé. Une fois chargées, elles peuvent être utilisées environ 10 fois. Il y a 3 modes possibles. Plus la lumière est puissante, plus le temps d'exposition est réduit. Ce qui est très pratique c'est qu'il ne faut pas surveiller le temps car elles s'éteignent toutes seules une fois la séance terminée. Le seul mini « bémol » est que le mode le plus puissant peut être éblouissant quand la luminosité environnante est faible. C'est donc un accessoire que je recommanderais sans hésitation, car il me donne un vrai coup de pouce moralement pendant les courtes journées.";

    document.querySelector(
      '.lav-review:nth-child(3) .lav-review__text'
    ).innerText =
      "J'utilise les Luminettes depuis début octobre 2020 pour faire face à ma dépression saisonnière (SAD). Jusqu'à présent, je n'ai aucun symptôme de dépression saisonnière, malgré le changement d'heure (heure d'hiver) et la disparition du soleil à 16h30. C'est une premi...";

    document.querySelector(
      '.lav-review:nth-child(3) .lav-review__text + .lav-review__text'
    ).innerText =
      "J'utilise les Luminettes depuis début octobre 2020 pour faire face à ma dépression saisonnière (SAD). Jusqu'à présent, je n'ai aucun symptôme de dépression saisonnière, malgré le changement d'heure (heure d'hiver) et la disparition du soleil à 16h30. C'est une première. Je suis étonné. Mon niveau d'énergie a augmenté et je me sens libre et joyeux la plupart du temps. Je dors aussi beaucoup mieux. Je dois ajouter que j'ai arrêté la caféine, ce qui aide aussi. Les Luminettes sont bien, bien meilleure que les lampes. Je les porte tous les matins sans être obligé de fixer la lampe. Mon humeur s'est vraiment améliorée. Elles sont très pratiques et faciles à utiliser. Je les mets sur le dessus de mes lunettes. Elles se rechargent facilement et on peut les utiliser sans les brancher tous les jours. Tous ceux qui me voient les porter (quand je participe à des réunions en ligne, quand je vais chez le dentiste, etc.) me demandent si ça marche. Les gens trouvent que c'est joli et ils sont très intéressés parce qu'il y a toujours quelqu'un dans leur famille qui souffre de dépression saisonnière, ou bien ils sont eux-mêmes atteints de ce trouble. Donc, vraiment, je ne me plains pas, je n'ai que des bonnes choses à dire sur mes Luminettes qui sont aussi précieuses maintenant que mon téléphone portable.";

    for (let item of document.querySelectorAll('.lav-review__trigger')) {
      item.innerText = 'Afficher plus';
    }

    for (let item of document.querySelectorAll('.lav-review__link')) {
      item.innerHTML = item.innerHTML.replace(
        'View review on',
        "Lire l'avis sur"
      );
    }
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
      "Après un mois, vous pouvez choisir d'être remboursé si vous n'êtes pas satisfait, peu importe la raison. Plus d'info sur la page <a href='/delivery#returns-block'>livraison et retour</a>";

    document.querySelector('.lav-drive__caption').innerText =
      'Découvrez notre nouveau produit';
    document.querySelector('.lav-drive__bg-title').innerText =
      'Bénéficiez de la luminothérapie tout en conduisant';

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
      "Après un mois, vous pouvez choisir d'être remboursé si vous n'êtes pas satisfait, peu importe la raison. Plus d'info sur la page <a href='/delivery#returns-block'>livraison et retour</a>";
  }
}
