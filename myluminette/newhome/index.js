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
  .light-therapy-section {
    display: none!important;
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
    padding-bottom: 96px;
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
    margin-bottom: 144px;
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
    margin-top: -20px;
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
  }
  .lav-works__item-title span {
    color: #11C6E7
  }
  .lav-works__item-descr {
    font-size: 16px;
    line-height: 24px;
    display: inline-flex;
    margin-right: 4px;
  }
  .lav-works__item-trigger {
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
    display: inline-flex;
  }
  .lav-works__study {
    margin-top: 24px;
    border: 1px solid #E7EBEF;
    border-radius: 50px;
    padding: 24px;
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
    opacity: 0.65;
  }
  .lav-works__study-btn img {
    margin-left: 16px;
    width: 32px;
  }
  .lav-works {}

  .lav-users {}
  .lav-users__title {
    text-align: center;
    font-size: 80px;
    line-height: 80px;
    letter-spacing: 1px;
  }
  .lav-users__title span {
    font-weight: 800;
  }
  .lav-users {}
  .lav-users {}
  .lav-users {}
  .lav-users {}


`;

const newPage = `
<div class='lav-wrap'>
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
        <button class='lav-jumb__btn btn-primary btn-lg flipped'>
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
            <div class='lav-transform splide__slide'>
              <div class='lav-transform__info'>
                <div class='lav-transform__title lav-title'>How Luminette transforms your days</div>
                <div class='lav-transform__descr lav-descr'>Luminette's rays act like a replacement for natural sunlight. Your body can use it to maintain normal melatonin levels, sleep at night, and have more energy in the day.</div>
              </div>
              <div class='lav-transform__image'>
                <img src='${settings.dir}/img/transform-smile.png' />
              </div>
            </div>

            <div class='lav-transform splide__slide'>
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
          <div class='lav-works__item-descr'>Luminette® uses a patented in...</div>
          <div class='lav-works__item-trigger'>Show more</div>
        </div>

        <div class='lav-works__item'>
          <div class='lav-works__item-title'>White light enhanced with <span>blue light</span> for greater effectiveness.</div>
          <div class='lav-works__item-descr'>Luminette® emits a safe blue-...</div>
          <div class='lav-works__item-trigger'>Show more</div>
        </div>

        <div class='lav-works__study'>
          <div class='lav-works__study-caption'>An <span>independent study</span> has shown that Luminette gives the same results as a 10,000 lux light box</div>
          <button class='lav-btn lav-works__study-btn'>
            Read the study <img src='${settings.dir}/img/adobe.svg' />
          </button>
        </div>
      </div>
      
      <div class='lav-works__image'>
        <img src='${settings.dir}/img/how-works.png' />
      </div>
    </div>
  </div>

  <div class='lav-users'>
    <img class='lav-users__image' src='${settings.dir}/img/users-bg.png' />
    <div class='lav-users__title'><span>150,000</span> Luminette users</div>
  </div>

  <div class='lav-reviews'>
    <div class='lav-reviews__title'>Customer reviews</div>
    <div class='lav-reviews__list'>
      <div class='lav-review'>
        <div class='lav-review__image'></div>
        <div class='lav-review__name'>Aurélie</div>
        <div class='lav-review__link'>
          View review on Amazon
          <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
        </div>
        <div class='lav-review__text'>
          “For years, I have suffered from seasonal depression. Health professionals (general practitioner, psychiatrist, psychologist and pharmacist) advised me to use light therapy to improve my condition in autumn and winter.
          I hesitated for a long time and then I di...”
        </div>
        <div class='lav-review__trigger'>Show more</div>
      </div>
      
      <div class='lav-review'>
        <div class='lav-review__image'></div>
        <div class='lav-review__name'>Aurélie</div>
        <div class='lav-review__link'>
          View review on Amazon
          <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
        </div>
        <div class='lav-review__text'>
          “For years, I have suffered from seasonal depression. Health professionals (general practitioner, psychiatrist, psychologist and pharmacist) advised me to use light therapy to improve my condition in autumn and winter.
          I hesitated for a long time and then I di...”
        </div>
        <div class='lav-review__trigger'>Show more</div>
      </div>

      <div class='lav-review'>
        <div class='lav-review__image'></div>
        <div class='lav-review__name'>Aurélie</div>
        <div class='lav-review__link'>
          View review on Amazon
          <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
        </div>
        <div class='lav-review__text'>
          “For years, I have suffered from seasonal depression. Health professionals (general practitioner, psychiatrist, psychologist and pharmacist) advised me to use light therapy to improve my condition in autumn and winter.
          I hesitated for a long time and then I di...”
        </div>
        <div class='lav-review__trigger'>Show more</div>
      </div>
    </div>

    <div class='lav-reviews__total'>
      <div class='lav-reviews__total-col'>
        <div class='lav-reviews__total-image'></div>
        <div class='lav-reviews__total-score'></div>
        <div class='lav-reviews__total-stars'></div>
        <div class='lav-reviews__total-caption'></div>
      </div>
      <div class='lav-reviews__total-col'>
        <div class='lav-reviews__total-image'></div>
        <div class='lav-reviews__total-score'></div>
        <div class='lav-reviews__total-stars'></div>
        <div class='lav-reviews__total-caption'></div>
      </div>
    </div>

    <div class='lav-reviews__all'>
      <button class='lav-reviews__btn lav-btn'>See reviews</button>
    </div>
  </div>


</div>
`;

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
/*** STYLES / end ***/

/********* Custom Code **********/
init();
function init() {
  console.log('init');
  document
    .querySelector('.home-page')
    .insertAdjacentHTML('afterbegin', newPage);

  let initSplideInterval = setInterval(() => {
    if (typeof Splide == 'function') {
      clearInterval(initSplideInterval);
      new Splide('.splide', {
        type: 'loop',
        arrows: false,
      }).mount();
    }
  }, 500);
}
