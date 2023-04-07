console.log('initExp');

/********* Settings **********/
const settings = {
  dir: 'https://flopsi69.github.io/crs/doYogaWithMe/subscribe',
  clarity: false,
  observe: false,
};

//Clarity
if (settings.clarity) {
  const clarityInterval = setInterval(function () {
    if (typeof clarity == 'function') {
      clearInterval(clarityInterval);
      clarity('set', '', 'variant_1');
    }
  }, 1000);
}

// Alalytic 3
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

// Alalytic 4
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
// [class*='lav']
// Styles
const styles = `
  .sfc-becomeASubscriber__section, .sfc-becomeASubscriber__section + section {
    display: none!important;
  }
  #main-content > section {
    position: relative;
    width: 100%;
  }
  .lav-btn {
    background-color: #017922;
    border-color: #017922;
  }
  .lav-btn:hover {
    background-color: #06571c;
    border-color: #06571c;
  }
  .lav-container {
    z-index: 2;
    margin: 0 auto;
    width: 68em;
    max-width: 100%;
    padding: 0 1em;
    // box-sizing: border-box;
  }

  .lav-container * {
    box-sizing: border-box;
  }

  .lav-jumb {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    background: radial-gradient(50% 224.22% at 50% 50%, #87B6DD 0%, #6597C0 52.08%, #40759F 100%);
    min-height: calc(100vh - 46.5px);
    padding-top: 50px;
    padding-bottom: 135px;
    text-align: center;
    color: #fff;
  }
  .lav-jumb__title {
    font-weight: 800;
    font-size: 46px;
    line-height: 63px;
  }
  .lav-jumb__caption {
    margin-top: 24px;
    font-weight: 400;
    font-size: 24px;
    line-height: 21px;
  }
  .lav-jumb__plans {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 45px;
  }
  .lav-plan {
    position: relative;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(3px);
    border-radius: 12px;
    color: #272727;
    padding: 40px;
    min-width: 320px;
  }
  .lav-plan:first-child {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }
  .lav-plan:last-child {
    border: 2px solid #007DB8;
  }
  .lav-plan:first-child:before {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 8px 30px;
    content: 'Save 35%';
    background: #FAA423;
    border-radius: 100px;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #fff;
  }
  .lav-plan__title {
    font-weight: 700;
    font-size: 24px;
    line-height: 20px;
  }
  .lav-plan__caption {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    margin-top: 8px;
  }
  .lav-plan__price {
    margin-top: 12px;
    font-size: 16px;
    line-height: 20px;
  }
  .lav-plan__price span {
    color: #007DB8;
    font-weight: 800;
    font-size: 24px;
    line-height: 44px;
  }
  .lav-plan__year {
    margin-top: 4px;
  }
  .lav-plan__year {
  }
  .lav-plan__year-old {
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
    text-decoration-line: line-through;
    color: #A5A5A5;
  }
  .lav-plan__year-new {
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
  }
  .lav-plan__year-caption {
    font-size: 14px;
    line-height: 28px;
  }
  .lav-plan__btn {
    margin-top: 20px;
    width: 100%;
    justify-content: center;
    min-height: 52px;
    font-weight: 700;
    font-size: 18px;
    line-height: 32px;
    text-transform: capitalize;
  }
  .lav-plan__btn.lav-btn_trans {
    background-color: transparent;
    color: #017922;
  }
  .lav-plan__btn.lav-btn_trans:hover {
    background-color: #017922;
    color: #fff;
  }
  .lav-jumb__try {
    margin-top: 24px;
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;
    text-align: center;
    text-transform: capitalize;
    color: #027DB8;
    transition: 0.35s;
  }
  .lav-jumb__try-inner {
    display: inline-block;
    padding: 18px 25px;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(3px);
    border-radius: 30px;
    line-height: 1;
    cursor: pointer;
    transition: 0.35s;
  }
  .lav-jumb__try-inner:hover {
    color: #017922;
  }
  .lav-jumb__try-inner span {
    border-bottom: 1px solid #027DB8;
  }
  .lav-jumb__try-inner:hover span {
    border-color: #017922;
  }

  .lav-features {
    margin-top: -100px;
  }
  .lav-features__plate {
    position: relative;
    z-index: 2;
    padding: 50px;
    background: #FFFFFF;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
    border-radius: 12px;
    color: #272727;
    max-width: 930px;
    margin: auto;
  }
  .lav-features__title {
    font-weight: 700;
    font-size: 30px;
    line-height: 1;
    text-align: center;
  }
  .lav-features__row {
    margin-top: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 55px;
  }
  .lav-feature {
    background-position: top left;
    background-repeat: no-repeat;
    padding-left: 40px;
    background-size: 28px;
  }
  .lav-feature + .lav-feature {
    margin-top: 24px;
  }
  .lav-feature__title {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
  }
  .lav-feature__caption {
    margin-top: 4px;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #595959;
  }
  .lav-features__col:first-child .lav-feature__caption {
    margin-top: 8px;
  }
  .lav-feature__list {
    margin-top: 8px;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #595959;
    padding-left: 25px;
    margin-bottom: 0;
  }
  .lav-feature__list li + li {
    margin-top: 5px;
  }

  .lav-features__sub {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 667px;
    width: 100%;
    background: #F9F9F9;
    border: 1px dashed #D6D6D6;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    margin: -3px auto 0;
    padding: 22px 85px 20px;
  }
  .lav-features__sub-item {
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    color: #003A67;
  }
  .lav-features__sub img {
    margin-right: 12px;
  }

  .lav-try {
    margin-top: 90px;
    color: #272727;
  }
  .lav-try__plate {
    background: #FFFFFF;
    box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.05);
    border-radius: 12px;
    overflow: hidden;
    display: flex;
  }
  .lav-try__image {
    max-width: 512px;
    width: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .lav-try__info {
    padding: 48px;
  }
  .lav-try__caption {
    font-weight: 400;
    font-size: 21px;
    line-height: 1;
  }
  .lav-try__title {
    font-weight: 700;
    font-size: 30px;
    line-height: 1;
    margin-top: 16px;
  }
  .lav-try__list {
    margin-top: 28px;
    margin-bottom: 0;
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    list-style: none;
    padding: 0;
  }
  .lav-try__list li {
    position: relative;
    padding-left: 32px;
  }
  .lav-try__list li:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url('${settings.dir}/img/check.svg');
  }
  .lav-try__list li:nth-child(n +3) {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #666666;
  }
  .lav-try__list li:nth-child(n +3):before {
    background-image: url('${settings.dir}/img/uncheck.svg');
  }
  .lav-try__list li + li {
    margin-top: 12px;
  }
  .lav-try__btn {
    margin-top: 28px;
    min-height: 52px;
    font-weight: 500;
    font-size: 16px;
    line-height: 32px;
    max-width: 240px;
    width: 100%;
    justify-content: center;
  }

  .lav-classes {
    padding-top: 80px;
    padding-bottom: 72px;
    color: #272727;
  }
  .lav-classes__title {
    font-weight: 700;
    font-size: 44px;
    line-height: 1;
    text-align: center;
  }
  .lav-classes__list {
    margin: 45px -8px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
  }
  .lav-classes__list li {
    margin: 8px;
    background: #FFFFFF;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.12);
    border-radius: 37px;
    font-weight: 500;
    font-size: 18px;
    line-height: 1;
    padding: 15px 32px;
    color: #007DB8;
    transition: 0.35s;
    cursor: pointer;
  }

  .lav-classes__list li:hover {
    background-color: #007DB8;
    color: #fff;
  }

  .lav-pers {
    padding: 108px 0;
    color: #fff;
    background: #003A67;
    text-align: center;
  }
  .lav-pers__title {
    font-size: 44px;
    font-weight: 500;
    line-height: 1;
  }
  .lav-pers__list {
    margin: 50px 0 0;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2em;
    list-style: none;
    padding: 0;
  }
  .lav-pers__item-title {
    margin-top: 12px;
    font-size: 21px;
    font-weight: 500;
    line-height: 1;
  }
  .lav-pers__item-caption {
    margin-top: 14px;
    font-size: 18px;
    line-height: 30px;
  }
  .lav-pers__item-num {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 35px;
    font-weight: 500;
    padding: 18px;
    border-radius: 100px;
    border: solid 1px #007DB8;
    min-height: 1.5em;
    min-width: 1.5em;
  }

  .lav-instructors {
    color: #272727;
    padding-top: 110px;
    padding-bottom: 110px;
  }
  .lav-instructors__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 44px;
  }
  .lav-instructors__title {
    font-size: 44px;
    line-height: 1;
    font-weight: 500;
  }
  .lav-instructors .splide__track {
    overflow: visible;
  }
  .lav-instructors .splide__arrow {
    position: static;
    transform: none;
    background: white;
    box-shadow: 2px 2px 4px 1px rgb(0 0 0 / 5%);
  }
  .lav-instructors .splide__arrow--prev:before {
    color: #003A67;
    content: "➔";
    font-size: 1.2em;
    transform: scale(-1,1);
  }
  .lav-instructors .splide__arrow--next:before {
    color: #003A67;
    content: "➔";
    font-size: 1.2em;
  }
  .lav-instructors .splide__arrow svg {
    display: none;
  }
  .lav-instructors .splide__arrow + .splide__arrow {
    margin-left: 10px;
  }
  .lav-instructors .splide__arrows {
    display: flex;
    align-items: center;
  }

  .lav-instr {
    border-radius: 8px;
    max-width: 280px;
    transition: 0.35s;
    width: 21.7em;
    background: #fefefe;
    overflow: hidden;
    box-shadow: 2px 2px 4px 1px rgb(0 0 0 / 5%);
    display: flex;
    flex-direction: column;
  }
  .lav-instr:hover {
    text-decoration: none;
  }
  .lav-instr:hover .lav-instr__img {
    filter: brightness(65%);
  }
  .lav-instr:hover .lav-instr__name {
    text-decoration: underline;
  }
  .lav-instr__img {
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 282px;
    transition: 0.35s;
  }
  .lav-instr__info {
    padding: 28px;
    color: #000;
  }
  .lav-instr__name {
    font-size: 19px;
  }
  .lav-instr__caption {
    margin-top: 12px;
    border-top: 1px solid #000;
    padding-top: 12px;
    font-size: 16px;
    line-height: 28px;
  }
  .splide__progress {
    display: none;
    background: #d6d6d6;
    border-radius: 100em;
    margin-top: 1.33rem;
    overflow: hidden;
  }
  .splide__progressBar {
    background: #007DB8;
    height: 0.25em;
    transition: width 400ms ease;
    width: 0;
  }

`;

const stylesEl = document.createElement('style');
stylesEl.innerHTML = styles;
document.body.appendChild(stylesEl);
/*** STYLES / end ***/

/********* Custom Code **********/
const newLayout = `
<section class='lav-jumb'>
  <div class='lav-container'>
    <div class='lav-jumb__title'>Your ultimate Yoga journey starts here</div>
    <div class='lav-jumb__caption'>Choose your plan</div>
    <div class='lav-jumb__plans'>
      <div class='lav-jumb__plan lav-plan'>
        <div class='lav-plan__title'>Unlimited access</div>
        <div class='lav-plan__caption'>1 month</div>
        <div class='lav-plan__price'>
          <span>$13.99</span> / month
        </div>
        <button class='lav-plan__btn lav-plan__btn-month lav-btn lav-btn_trans sfc-button'>Get started now</button>
      </div>

      <div class='lav-jumb__plan lav-plan'>
        <div class='lav-plan__title'>Unlimited access</div>
        <div class='lav-plan__caption'>12 months</div>
        <div class='lav-plan__price'>
          <span>$9.08</span> / month
        </div>
        <div class='lav-plan__year'>
          <span class='lav-plan__year-old'>$167.88</span>
          <span class='lav-plan__year-new'>$108.99</span>
          <span class='lav-plan__year-caption'>/&nbsp;year</span>
        </div>
        <button class='lav-plan__btn lav-plan__btn-year lav-btn sfc-button'>Get started now</button>
      </div>
    </div>
    <div class='lav-jumb__try'>
      <span class='lav-jumb__try-inner'>
        <span>Not sure yet? Try Basic plan for free</span>
      </span>
    </div>
  </div>
</section>

<section class='lav-features'>
  <div class='lav-container'>
    <div class='lav-features__plate'>
      <div class='lav-features__title'>Subscription features</div>

      <div class='lav-features__row'>
        <div class='lav-features__col'>
          <div class='lav-feature' style='background-image: url("${settings.dir}/img/feature-1.svg")'>
            <div class='lav-feature__title'>Unlimited access to 1000+ Ad-Free yoga, meditation and movement classes</div>
            <div class='lav-feature__caption'>You can enjoy one of the biggest collection of professional classes, including:</div>
            <ul class='lav-feature__list'>
              <li>400+ Vinyasa yoga classes</li>
              <li>350+ Hatha yoga classes</li>
              <li>250+ Gentle yoga classes</li>
              <li>170+ Yoga after workout classes</li>
              <li>100+ Yoga for back classes</li>
            </ul>
          </div>
        </div>
        <div class='lav-features__col'>
          <div class='lav-feature' style='background-image: url("${settings.dir}/img/feature-2.svg")'>
            <div class='lav-feature__title'>Watch classes  from your laptop, TV, phone or tablet</div>
            <div class='lav-feature__caption'>Take your yoga practice anywhere, anytime using our website or mobile app.</div>
          </div>

          <div class='lav-feature' style='background-image: url("${settings.dir}/img/feature-3.svg")'>
            <div class='lav-feature__title'>Access our complete collection of 30 curated programs & 50 challenges</div>
            <div class='lav-feature__caption'>Enhance your practice with our comprehensive collection of courses and special challenges.</div>
          </div>

          <div class='lav-feature' style='background-image: url("${settings.dir}/img/feature-4.svg")'>
            <div class='lav-feature__title'>Exclusive access to all new releases and premium content</div>
            <div class='lav-feature__caption'>Enjoy new classes and get 25% discount on livestream events.</div>
          </div>
        </div>
      </div>
    </div>

    <div class='lav-features__sub'>
      <div class='lav-features__sub-item'>
        <img src='${settings.dir}/img/calendar.svg' />
        Cancel anytime
      </div>
      <div class='lav-features__sub-item'>
        <img src='${settings.dir}/img/guarantee.svg' />
        30-Day Money-Back Guarantee
      </div>
    </div>
  </div>
</section>

<section class='lav-try'>
  <div class='lav-container'>
    <div class='lav-try__plate'>
      <div class='lav-try__image'></div>

      <div class='lav-try__info'>
        <div class='lav-try__caption'>
          Not sure yet? 
        </div>
        <div class='lav-try__title'>Try Basic plan for free</div>
        <ul class='lav-try__list'>
          <li>Free forever</li>
          <li>Access to all basic yoga, meditation and movement classes from our extensive library</li>
          <li>Full access to the library of 1000+ Ad-Free yoga, meditation and movement classes</li>
          <li>Exclusive access to all new releases and premium content</li>
        </ul>
        <a href="/yogi/register" class='lav-try__btn lav-btn sfc-button'>Start Basic Plan</a>
      </div>
    </div>
  </div>
</section>

<section class='lav-classes'>
  <div class='lav-container'>
    <div class='lav-classes__title'>Explore 1000+ Yoga classes</div>

    <ul class='lav-classes__list'>
      <li data-id='30'>Ashtanga Yoga</li>
      <li data-id='213'>Chair Yoga</li>
      <li data-id='31'>Gentle Yoga</li>
      <li data-id='32'>Guided Meditation</li>
      <li data-id='33'>Hatha Yoga</li>
      <li data-id='34'>Jivamukti</li>
      <li data-id='35'>Kundalini Yoga</li>
      <li data-id='36'>Mom and Baby Yoga</li>
      <li data-id='37'>Pilates</li>
      <li data-id='38'>Plus Size Yoga</li>
      <li data-id='39'>PNF</li>
      <li data-id='42'>Pranayama Yoga</li>
      <li data-id='126'>Prenatal/Postnatal Yoga</li>
      <li data-id='44'>Restorative Yoga</li>
      <li data-id='125'>Slow Flow</li>
      <li data-id='127'>Values-based Education</li>
      <li data-id='45'>Vinyasa/Power Yoga</li>
      <li data-id='46'>Yin and Yin/Yang Yoga</li>
      <li data-id='47'>Yoga at Work</li>
      <li data-id='49'>Yoga for Athletes</li>
      <li data-id='50'>Yoga for Runners</li>
      <li data-id='51'>Yoga for Seniors</li>
      <li data-id='53'>Yoga Therapy</li>
      <li data-id='54'>Yoga for Back Care</li>
      <li data-id='55'>Yoga for Kids</li>
    </ul>
  </div>
</section>

<section class='lav-pers'>
  <div class='lav-container'>
    <div class='lav-pers__title'>Count the ways you can <br/> personalize your practice</div>

    <ul class='lav-pers__list'>
      <li class='lav-pers__item'>
        <div class='lav-pers__item-num'>25+</div>
        <div class='lav-pers__item-title'>Styles</div>
        <div class='lav-pers__item-caption'>Keep your mind and body guessing or deepen your practice.</div>
      </li>

      <li class='lav-pers__item'>
        <div class='lav-pers__item-num'>20+</div>
        <div class='lav-pers__item-title'>Programs</div>
        <div class='lav-pers__item-caption'>Created for beginner, intermediate, and advanced practices.</div>
      </li>

      <li class='lav-pers__item'>
        <div class='lav-pers__item-num'>35+</div>
        <div class='lav-pers__item-title'>Challenges</div>
        <div class='lav-pers__item-caption'>Carefully designed series of classes that help you get healthier, stronger, and more flexible.</div>
      </li>

      <li class='lav-pers__item'>
        <div class='lav-pers__item-num'>90+</div>
        <div class='lav-pers__item-title'>Guided Meditations</div>
        <div class='lav-pers__item-caption'>Keep your mind and body guessing or deepen your practice.</div>
      </li>

      <li class='lav-pers__item'>
        <div class='lav-pers__item-num'>2-90</div>
        <div class='lav-pers__item-title'>Minute Classes</div>
        <div class='lav-pers__item-caption'>To get you on your mat with whatever time you have.</div>
      </li>
    </ul>
  </div>
</section>

<section class='lav-instructors splide'>
  <div class='lav-container'>
    <div class='lav-instructors__head'>
      <div class='lav-instructors__title'>Our Instructors</div>

      <div class="splide__arrows">
        <button class="splide__arrow splide__arrow--prev">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" focusable="false"><path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path></svg>
        </button>
        <button class="splide__arrow splide__arrow--next">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" focusable="false"><path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path></svg>
        </button>
      </div>
    </div>

    <div class="splide__track">
      <div class='lav-instructors__list splide__list'></div>
    </div>

    <div class="splide__progress">
      <div class="splide__progressBar" />
    </div>
  </div>
</section>

`;

const instructorsArr = [
  {
    img: 'https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2023/02/DSC06112.jpg?itok=sgK-PlK4',
    name: 'Fiji McAlpine',
    link: '/yoga-classes?field_instructor_target_id=8',
    caption: 'Vinyasa, Power, Meditation, YTT',
  },
  {
    img: 'https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2018/06/satiya-channer.jpg?itok=InsGNPpx',
    name: 'Satiya Channer',
    link: '/yoga-classes?field_instructor_target_id=123147',
    caption: 'Yin, Restorative, Hatha, Meditation',
  },
  {
    img: 'https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2023/02/David%20headshot%20cropped%20Jan-23.jpg?itok=RWF1FDy0',
    name: 'David Procyshyn',
    link: '/yoga-classes?field_instructor_target_id=4',
    caption: 'Hatha, Pain Care, Meditation, YTT',
  },
  {
    img: 'https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2023/02/tracy.jpg?itok=MRkk0whF',
    name: 'Tracey Noseworthy',
    link: '/yoga-classes?field_instructor_target_id=7041',
    caption: 'Vinyasa, Power, Meditation, YTT',
  },
  {
    img: 'https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2022/10/DSC04949%20copy.jpg?itok=4RBggQaf',
    name: 'Josh Chen',
    link: '/yoga-classes?field_instructor_target_id=313027',
    caption: 'Hatha, Yin, Meditation',
  },
  {
    img: 'https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2018/02/PROFILE_MELISSA%20web%20size.jpg?itok=j005999f',
    name: 'Melissa Krieger',
    link: '/yoga-classes?field_instructor_target_id=467',
    caption: 'Hatha, Slow Flow, Restorative',
  },
  {
    img: 'https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2023/02/DSC01881.jpg?itok=YYhCIJ1u',
    name: 'Helen Camisa',
    link: '/yoga-classes?field_instructor_target_id=244583',
    caption: 'Hatha, Yin, Meditation',
  },
  {
    img: 'https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2023/02/DSC06138%20%282%29.jpg?itok=Ap07VZfy',
    name: 'Andrea Ting-Luz',
    link: '/yoga-classes?field_instructor_target_id=196672',
    caption: 'Vinyasa, Hatha, Yin',
  },
  {
    img: 'https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2020/04/Screenshot%202020-04-07%2013.11.01.jpg?itok=7xmZCP6U',
    name: 'Rachel Scott',
    link: '/yoga-classes?field_instructor_target_id=16854',
    caption: 'Vinyasa, Power, Hatha, YTT',
  },
  {
    img: 'https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2016/05/yoga%20profile%20picture.jpg?itok=zeYlcZ5b',
    name: 'Crista Shillington',
    link: '/yoga-classes?field_instructor_target_id=133906',
    caption: 'Vinyasa, Power',
  },
  {
    img: 'https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2021/04/Doyoga.jpeg?itok=EaLenL_w',
    name: 'Sarada Jagannath',
    link: '/yoga-classes?field_instructor_target_id=326548',
    caption: 'Hatha, Pranayama',
  },
  {
    img: 'https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2022/08/DSC01661-2_0.jpg?itok=yBXbn0tU',
    name: 'Araba Adjaye',
    link: '/yoga-classes?field_instructor_target_id=357388',
    caption: 'Hatha',
  },
  {
    img: 'https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2022/08/Tara%20Heal%20HEADSHOT%202021%20Photo-68.jpg?itok=tidb-Vul',
    name: 'Tara Heal',
    link: '/yoga-classes?field_instructor_target_id=350658',
    caption: 'Vinyasa, Power, Meditation',
  },
  {
    img: 'https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2019/03/Photo%204.jpg?itok=NdCWXf4I',
    name: 'Guy Friswell',
    link: '/yoga-classes?field_instructor_target_id=266604',
    caption: 'Slow Flow, Hatha, Meditation',
  },
  {
    img: 'https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2023/02/unnamed%20%282%29.jpg?itok=Pe4raKYD',
    name: 'Jonni-Lyn Friel',
    link: '/yoga-classes?field_instructor_target_id=269801',
    caption: 'Jivamukti, Vinyasa, Meditation',
  },
  {
    img: 'https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2022/11/julia-web.jpg?itok=lceNVTYr',
    name: 'Julia Crouch',
    link: '/yoga-classes?field_instructor_target_id=317249',
    caption: 'Pilates, Pre/Post Natal, Hatha',
  },
  {
    img: 'https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2018/06/sarah-jane-profile.jpg?itok=k5pxnCxV',
    name: 'Sarah Jane Steele',
    link: '/yoga-classes?field_instructor_target_id=90321',
    caption: 'Prenatal/Postnatal, Hatha, Yin, Restorative',
  },
  {
    img: 'https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2021/09/kathi.png?itok=L-EHhiwi',
    name: 'Kathi Ells',
    link: '/yoga-classes?field_instructor_target_id=218644',
    caption: 'Pilates',
  },
  {
    img: 'https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2018/08/nicky_jones.jpg?itok=3x6XOeWs',
    name: 'Nicky Jones',
    link: '/yoga-classes?field_instructor_target_id=4134',
    caption: 'Restorative, Therapy, Hatha',
  },
  {
    img: 'https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2017/04/sarah-holmes.jpg?itok=KFvyMOg-',
    name: 'Sarah Holmes de Castro',
    link: '/yoga-classes?field_instructor_target_id=189907',
    caption: 'Hatha, Restorative, Gentle',
  },
  {
    img: 'https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2014/03/ron_stewart_yoga_0_0.jpg?itok=P3VkOuAh',
    name: 'Ron Stewart',
    link: '/yoga-classes?field_instructor_target_id=15517',
    caption: 'Vinyasa, Power, Hatha',
  },
  {
    img: 'https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2021/09/kim_wilson.jpg?itok=LBu8xgOl',
    name: 'Kim Wilson',
    link: '/yoga-classes?field_instructor_target_id=877',
    caption: 'Pilates',
  },
  {
    img: 'https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2018/06/anastasia-thumb2.jpg?itok=coZH9g-7',
    name: 'Anastasia Hangemanole',
    link: '/yoga-classes?field_instructor_target_id=134',
    caption: 'Yin, Hatha',
  },
  {
    img: 'https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2017/11/IMG_5004.jpg?itok=-ap0DV7s',
    name: 'Dawn Rabey',
    link: '/yoga-classes?field_instructor_target_id=15521',
    caption: 'Kundalini, Pranayama, Meditation',
  },
  {
    img: 'https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2015/04/Screen%20shot%202015-04-15%20at%2011.00.26%20AM.png?itok=Percwxoz',
    name: 'Tianne Allan',
    link: '/yoga-classes?field_instructor_target_id=834',
    caption: 'Restorative, Pain Care',
  },
  {
    img: 'https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2017/10/alyssa_jean.jpg?itok=yGDBEezl',
    name: 'Alyssa Jean Klazek',
    link: '/yoga-classes?field_instructor_target_id=215411',
    caption: 'Yoga for Kids',
  },
  {
    img: 'https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2019/03/IMG_2223_RETOUCH_V2.jpg?itok=guiKProJ',
    name: 'Nyk Danu',
    link: '/yoga-classes?field_instructor_target_id=266789',
    caption: 'Yin, Meditation',
  },
  {
    img: 'https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2017/12/Jeff%20with%20son.jpg?itok=OsM1Z3m1',
    name: 'Jeff Lichty',
    link: '/yoga-classes?field_instructor_target_id=224862',
    caption: 'Ashtanga',
  },
  {
    img: 'https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2021/09/michelle_rubin.jpg?itok=8JcavmVS',
    name: 'Michelle Rubin',
    link: '/yoga-classes?field_instructor_target_id=50832',
    caption: 'Hatha, Gentle, Seniors',
  },
  {
    img: 'https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2019/04/jennylisa%20%282%29.jpg?itok=MsZBkXMF',
    name: 'Jennifer Piercy',
    link: '/yoga-meditation?field_instructor_target_id=253426',
    caption: 'Meditation',
  },
  {
    img: 'https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2018/09/Screen%20Shot%202018-09-12%20at%203.32.21%20PM.png?itok=Ek8OQ-Ql',
    name: 'Peter Renner',
    link: '/yoga-meditation?field_instructor_target_id=189052',
    caption: 'Meditation',
  },
  {
    img: 'https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2021/09/erica_fitch.jpg?itok=F9sZn89d',
    name: 'Erica Fritch',
    link: '/yoga-classes?field_instructor_target_id=8733',
    caption: 'Hatha, Therapy, Gentle',
  },
  {
    img: 'https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2014/03/Shivani_1.jpg?itok=4BmzdEZi',
    name: 'Shivani Wells',
    link: '/yoga-classes?field_instructor_target_id=1047',
    caption: 'Vinyasa/Power, Hatha',
  },
  {
    img: 'https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2014/03/jenni-ashtanga-yoga_1.jpg?itok=VQV81d2J',
    name: 'Jenni Pritchard',
    link: '/yoga-classes?field_instructor_target_id=28537',
    caption: 'Ashtanga',
  },
];

init();
function init() {
  console.log('init');

  document
    .querySelector('#main-content')
    .insertAdjacentHTML('afterbegin', newLayout);

  document.querySelector('.lav-try__image').style.backgroundImage = `url(
    ${document.querySelector('.sfc-becomeASubscriber__bannerImg').src}
  )`;

  initJumb();
  initClasses();
  initInstructions();
}

function initJumb() {
  document
    .querySelector('.lav-plan__btn-year')
    .addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector('[href="/express-checkout/55"]').click();
    });

  document
    .querySelector('.lav-plan__btn-month')
    .addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector('[href="/express-checkout/54"]').click();
    });

  document
    .querySelector('.lav-jumb__try-inner')
    .addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector('[href="/yogi/register"]').click();
    });
}

function initClasses() {
  for (let el of document.querySelectorAll('.lav-classes__list li')) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      const id = el.dataset.id;
      location.href = `https://www.doyogawithme.com/yoga-classes?field_instructor_target_id=&style[${id}]=${id}&field_subscribers_only_value=All&sort_by=created`;
    });
  }
}

function initInstructions() {
  let parentEl = document.querySelector('.lav-instructors__list');

  for (let person of instructorsArr) {
    const slide = `
      <a href='${person.link}' class='lav-instr splide__slide'>
        <div class='lav-instr__img' style='background-image: url("${person.img}")'></div>
        <div class='lav-instr__info'>
          <div class='lav-instr__name'>${person.name}</div>
          <div class='lav-instr__caption'>${person.caption}</div>
        </div>
      </a>
    `;

    parentEl.insertAdjacentHTML('beforeend', slide);
  }

  const splide = new Splide('.splide', {
    autoWidth: true,
    pagination: false,
    gap: '1em',
  });

  splide.on('mounted', function () {
    splide.root.querySelector('.splide__progress').style.display = 'block';
    var progressBar = splide.root.querySelector('.splide__progressBar');

    console.log(progressBar);

    if (progressBar) {
      var fillProgressBar = function fillProgressBar() {
        var end = splide.Components.Controller.getEnd() + 1;
        var rate = Math.min((splide.index + 1) / end, 1);
        progressBar.style.width = String(100 * rate) + '%';
      };

      fillProgressBar();
      splide.on('mounted move', fillProgressBar);
    }
    // $sfc.find('.sfc-slider__progress').show();
  });

  splide.mount();
}
