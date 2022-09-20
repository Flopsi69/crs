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

// Alalytic
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

// Alalytic
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
  }
  .lav-jumb__image {
    flex: 1;
  }
  .lav-jumb__info {
    flex: 1;
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
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    overflow: hidden;
  }
  .lav-whatis__play-btn {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 156px;
    height: 156px;
    line-height: 0;
  }
  .lav-whatis__play {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 156px;
    height: 156px;
    line-height: 0;
  }
  .lav-whatis {}
  .lav-whatis {}

  .lav-benefits__title {
    margin-bottom; 48px;
    text-align: center;
  }
  .lav-benefits__list {
    display: grid; 
    grid-template-columns: 1fr 1fr; 
    gap: 24px; 
    grid-template-areas: 
      "top top"
      ". ."; 
  }
  .lav-benefit {
    position: relative;
    background-color: #C4C4C4;
    border-radius: 8px;
    overflow: hidden;
    filter: drop-shadow(0px 44px 66px rgba(59, 83, 108, 0.22));
    background-size: cover;
  }
  .lav-benefit:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    botttom: 0;
    top: 0;
    background: radial-gradient(145.34% 98.1% at 50.14% 0%, rgba(243, 245, 249, 0) 21.88%, rgba(243, 245, 249, 0.179775) 37.97%, rgba(243, 245, 249, 0.811752) 62.03%, #F3F5F9 78.99%)
  }
  .lav-benefit_double {
    grid-area: top;
  }
  .lav-benefit__icon {
    margin-bottom: 24px;
  }
  .lav-benefit__icon {
    width: 96px;
    height: 96px;
  }
  .lav-benefit__title {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
  }

`;

const newPage = `
<div class='lav-wrap'>
  <div class='lav-jumb'>
    <div class='container-fluid container--size--lg lav-jumb__container'>
      <div class='lav-jumb__image'>
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

  <div class='lav-benefits'>
    <div class='container-fluid container--size--lg lav-benefits__container'>
      <div class='lav-benefits__title lav-title'>Luminette's light therapy benefits</div>

      <div class='lav-benefits__list'>
        <div class='lav-benefit lav-benefit_double' style='background-image: url("${settings.dir}/img/benefit1-bg.jpg")'>
          <div class='lav-benefit__info'>
            <div class='lav-benefit__icon'>
              <img src='${settings.dir}/img/benefit1.svg' />
            </div>
            <div class='lav-benefit__title'>Beat your winter blues</div>
          </div>
        </div>
        <div class='lav-benefit' style='background-image: url("${settings.dir}/img/benefit2-bg.jpg")'>
          <div class='lav-benefit__info'>
            <div class='lav-benefit__icon'>
              <img src='${settings.dir}/img/benefit2.svg' />
            </div>
            <div class='lav-benefit__title'>Regulate your sleep schedules</div>
          </div>
        </div>
        <div class='lav-benefit' style='background-image: url("${settings.dir}/img/benefit3-bg.jpg")'>
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

  <div class='lav-transforms'>
    <div class='lav-transform'>
      <div class='lav-transform__info'>
        <div class='lav-transform__title lav-title'>How Luminette transforms your days</div>
        <div class='lav-transform__descr lav-descr'>Luminette's rays act like a replacement for natural sunlight. Your body can use it to maintain normal melatonin levels, sleep at night, and have more energy in the day.</div>
      </div>
      <div class='lav-transform__image'></div>
    </div>

    <div class='lav-transform'>
      <div class='lav-transform__info'>
        <div class='lav-transform__title lav-title'>How Luminette transforms your days</div>
        <div class='lav-transform__descr lav-descr'>When there's not enough sun, the brain starts overproducing melatonin which makes us weak and throws us off our sleep cycles.</div>
      </div>
      <div class='lav-transform__image'></div>
    </div>
  </div>

  <div class='lav-morning'>
    <div class='lav-morning__title lav-title'></div>
    <div class='lav-morning__descr lav-descr'>Wear Luminette while brushing your teeth, eating breakfast or working on your computer - the perfect addition to any morning routine</div>

    <div class='lav-morning__list'>
      <div class='lav-morning__item'>
        <div class='lav-morning__image'></div>
        <div class='lav-morning__caption'>
          Therapy sessions last <br /><span>20-45 mins</span>
        </div>
      </div>
      <div class='lav-morning__item'>
        <div class='lav-morning__image'></div>
        <div class='lav-morning__caption'>Use <span>1x per day</span></div>
      </div>
      <div class='lav-morning__item'>
        <div class='lav-morning__image'></div>
        <div class='lav-morning__caption'>
          Feel the benefits within <br /><span>4 to 6 days</span>
        </div>
      </div>
    </div>
  </div>

  <div class='lav-benefits2'>
    <div class='lav-benefits2__title lav-title'>What are the benefits?</div>

    <div class='lav-benefits2__list'>
      <div class='lav-benefit2'>
        <div class='lav-benefit2__icon'></div>
        <div class='lav-benefit2__title'>Lightweight and comfortable</div>
        <div class='lav-benefit2__caption'>Weighing only 51g and built with a comfy ergonomic nose fit</div>
      </div>
      <div class='lav-benefit2'>
        <div class='lav-benefit2__icon'></div>
        <div class='lav-benefit2__title'>Doesn't hinder your vision</div>
        <div class='lav-benefit2__caption'>The special patented light system lets you experience light therapy without any disruption to your vision</div>
      </div>
      <div class='lav-benefit2'>
        <div class='lav-benefit2__icon'></div>
        <div class='lav-benefit2__title'>Compatible with glasses</div>
        <div class='lav-benefit2__caption'>Wear Luminette on top of your glasses</div>
      </div>
    </div>
  </div>

  <div class='lav-works'>
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
          <button class='lav-btn lav-works__study-btn'>Read the study</button>
        </div>
      </div>
      
      <div class='lav-works__image'></div>
    </div>
  </div>

  <div class='lav-users'>
    <div class='lav-users__title'>150,000 Luminette users</div>
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
/*** STYLES / end ***/

/********* Custom Code **********/
init();
function init() {
  console.log('init');
  document
    .querySelector('.home-page')
    .insertAdjacentHTML('afterbegin', newPage);
}
