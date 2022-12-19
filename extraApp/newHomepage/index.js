console.log('initExp');

/********* Settings **********/
const settings = {
  dir: 'https://flopsi69.github.io/crs/extraApp/newHomepage',
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

  .section--footer-cta {
    display: none;
  }
  .lav-section {
    padding: 100px 0;
    font-weight: 400;
    font-family: 'nba';
  }

  .lav-container {
    max-width: 1310px;
    padding: 0 15px;
    width: 100%;
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
  }
  .lav-btn_trans {
    border: 2px solid #000000;
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
    width: 212px;
    margin-top: 40px;
    cursor: pointer;
    margin-left: auto;
    margin-right: auto;
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
    width: 10px;
    height: 6px;
    background: url(${settings.dir}/img/chevronIcon.svg) center no-repeat;
    background-size: contain;
  }
  .lav-select__list {
    display: none;
  }

  .lav-jumb {
    min-height: 100vh;
  }
  .lav-jumb__title {
    font-weight: 700;
    font-size: 200px;
    line-height: 170px;
    letter-spacing: -0.0375em;
    text-transform: uppercase;
  }
  .lav-jumb__info {
    width: 302px;
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
  .lav-jumb {}

  .lav-partners {
    padding: 55px 144px;
    // padding: 17px 42px;
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
    padding: 0 15px;
  }
  .section.section--intro {
    padding: 100px 0;
  }
  .section--intro .section-heading {
    font-family: 'nbi Pro';
    font-size: 40px;
    line-height: 1.16;
    letter-spacing: -0.025em;
    color: #fff;
    font-weight: 400;
  }
  [data-theme="light"] .testimonial-slider-overlay, [data-theme="light"] .testimonial-slider-overlay--right {
    background: black;
    display: none;
  }
  [data-theme= "light"] .testimonial-card {
    background: #FFFFFF;
    border: 2px solid #36F8A3;
    box-shadow: 0px 6.0844px 18.4376px rgba(0, 0, 0, 0.11);
    border-radius: 13.3146px;
    padding: 40px 31px;
    color: #000;
  }
  .testimonial-quote {
    font-family: 'NBA';
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #000000;
  }
  .testimonial-title {
    margin-bottom: 20px;
    font-family: 'nba';
    font-weight: 500;
    font-size: 18px;
    line-height: 1.2;
    letter-spacing: 0.105em;
    text-transform: uppercase;
    color: #000000;
  }
  .testimonial-sourcce {
    font-family: 'nba';
    font-weight: 600;
    font-size: 12px;
    line-height: 13px;
    text-transform: uppercase;
    color: #000000;
    opacity: 0.32;
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

  .lav-works {
    padding: 150px 0;
  }
  .lav-works__slider {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 14px;
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
    padding: 150px 0;
  }
  .lav-compare__title {
    text-align: center;
  }
  .lav-compare__title img {
    width: 85px;
    position: relative;
    top: -4px;
  }
  .lav-compare__table {
    margin-top: 60px;
    margin-bottom: 40px;
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
    padding: 150px 0;
  }
  .lav-better__icon {
    line-height: 0;
    margin: 40px auto;
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

  .lav-plans {
    padding: 150px 0;
  }
  .lav-plans__table {
    margin-top: 40px;
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
  }
  .lav-plans__row:last-child  {
    border-bottom: 0;
  }
  .lav-plans__row:last-child .lav-plans__col {
    padding-top: 19px;
    padding-bottom: 0;
    display: block;
  }
  .lav-plans__row:last-child .lav-plans__col:first-child {
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
  }
  .lav-connect__input {
    flex-grow: 1;
    margin: 0 40px;
    background: #FFFFFF;
    border-radius: 9px;
    border: none;
    outline: none;
    padding: 18px 24px;
    font-weight: 400;
    font-family: 'nba';
    font-size: 16px;
    max-width: 430px;
    line-height: 18px;
    color: #000;
  } 
  .lav-connect__plaid {
    flex-shrink: 0;
    height: 29px;
  }
  .lav-connect {}
  .lav-connect {}
  .lav-connect {}
  .lav-connect {}
  .lav-connect {}
  .lav-connect {}

  .section.section--faq {
    padding: 150px 0;
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
  .faq-header {
    padding: 15px 30px;
    padding-right: 60px;
  }
  .faq-icon {
    background: #36F8A3;
    border-radius: 50%;
    width: 20px;
    height: 20px;
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
  }
  .faq-answer {
    border: none;
    font-size: 15px;
    line-height: 1.5;
    font-family: 'nba';
    font-weight: 400;
  }


  .lav-join {
    background: #000 url(${settings.dir}/img/join-bg.jpeg) center right no-repeat;
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

  @media(max-width: 768px) {

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

  let newHomepageEl = `
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
            <div class='lav-jumb__item'>Use your own bank account</div>
            <div class='lav-jumb__item'>Earn rewards with every swipe</div>
          </div>

          <button class='lav-btn lav-btn_green lav-jumb__btn'>Start building Credit</button>
        </div>
      </div>
    </section>

    <section class='lav-partners lav-section lav-gray lav-center'>
      <img class='lav-mob' src='${settings.dir}/img/partners.svg' />
      <img class='lav-desk' src='${settings.dir}/img/partners-desk.svg' />
    </section>

    <section class='lav-ratings lav-section lav-center'>
      <div class='lav-ratings__top'>
        <img src='${settings.dir}/img/appStore.svg' />
        <div class='lav-ratings__stars'>
          <img src='${settings.dir}/img/stars.svg' />
          <div class='lav-ratings__stars-caption'>4.6K Ratings</div>
        </div>
      </div>
      
      <div class='lav-ratings__caption'>Trusted by 200,000+ customers</div>
    </section>

    <section class='lav-why lav-section'>
      <div class='lav-container'>
        <div class='lav-why__title lav-title'>Why Extra?</div>

        <div class='lav-why__list lav-desk'>
          <div class='lav-why__item'>
            <div class='lav-why__item-title'>
              Start building credit with every swipe
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
              The Extra Debit Card works like a debit card—but smarter. At the end of the month, all of your purchases made with Extra are totaled up and reported to the bureaus to help build your credit. On average, Extra members increased their credit score by 48 points just by swiping and practicing good credit habits. 
            </div>
          </div>

          <div class='lav-why__item'>
            <div class='lav-why__item-descr'>
              Because Extra is a debit card, you don't have toworry about interest, hidden fees or falling into the compounding debt trap like you would with a credit card. We charge a simple flat-rate membership fee upfront so you can build your credit with no surprises later. 
            </div>
          </div>

          <div class='lav-why__item'>
            <div class='lav-why__item-descr'>
              Stop doing debit the old way and start earning up to 1% back on your everyday purchases with Extra. Every swipe gets you one step closer to gift cards, tech, home goods, and more, all redeemable with your points in the Extra Rewards Store.
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
          </div>
        </div>
      </div>
    </section>

    <section class='lav-works lav-section lav-dark'>
      <div class='lav-container'>
        <div class='lav-works__title lav-title'>How the Extra <br/> Debit Card works</div>

        <div class='lav-works__slider'>
          <div class='lav-works__slide'>
            <div class='lav-works__image'>
              <img src='${settings.dir}/img/works1.png' />
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

          <div class='lav-works__slide'>
            <div class='lav-works__image'>
              <img src='${settings.dir}/img/works2.png' />
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

          <div class='lav-works__slide'>
            <div class='lav-works__image'>
              <img src='${settings.dir}/img/works3.png' />
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

          <div class='lav-works__slide'>
            <div class='lav-works__image'>
              <img src='${settings.dir}/img/works4.png' />
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

        <div class='lav-works__bottom'>
          <button class='lav-btn lav-btn_green lav-works__btn'>GET STARTED</button>

          <div class='lav-works__caption'>Impact on your credit score may vary depending on your use.<br/>Extra is required to report both on time and late payments.</div>
        </div>
      </div>
    </section>

    <section class='lav-compare lav-section'>
      <div class='lav-container'>
        <div class='lav-compare__title lav-title'>Your debit card <br/> should be 
        <img src='${settings.dir}/img/starsIcon.svg' />
        Extra
        <img src='${settings.dir}/img/starsIcon.svg' />
        </div>

        <div class='lav-compare__table'>
          <div class='lav-compare__row'>
            <div class='lav-compare__col'></div>
            <div class='lav-compare__col lav-compare__extra'>
              <img class='lav-compare__extra-img' src='${settings.dir}/img/compare-debit.png' />
              <div class='lav-compare__extra-title'>Extra Debit Card</div>
            </div>
            <div class='lav-compare__col lav-compare__choose'>
              <img class='lav-compare__choose-img' src='${settings.dir}/img/card-placeholder.png' />
              <div class='lav-compare__select lav-select'>
                <div class='lav-compare__select-value lav-select__value'>Debit Card</div>
                <div class='lav-compare__select-list lav-select__list'>
                  <div class='lav-compare__select-item lav-select__item'>Value 1</div>
                  <div class='lav-compare__select-item lav-select__item'>Value 2</div>
                  <div class='lav-compare__select-item lav-select__item'>Value 3</div>
                </div>
              </div>
            </div>
          </div>

          <div class='lav-compare__row'>
            <div class='lav-compare__col'>Builds credit history</div>
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

        <div class='lav-compare__btn-wrap'>
          <button class='lav-btn lav-btn_trans lav-compare__btn'>JOIN NOW</button>
        </div>
      </div>
    </section>

    <section class='lav-better lav-section lav-gray lav-center'>
      <div class='lav-container'>
        <div class='lav-better__title lav-title'>Better credit <br/> takes you places</div>

        <div class='lav-better__icon'>
          <img src='${settings.dir}/img/carIcon.svg' />
        </div>

        <div class='lav-better__select lav-select'>
          <div class='lav-better__select-value lav-select__value'>Debit Card</div>
          <div class='lav-better__select-list lav-select__list'>
            <div class='lav-better__select-item lav-select__item'>Value 1</div>
            <div class='lav-better__select-item lav-select__item'>Value 2</div>
            <div class='lav-better__select-item lav-select__item'>Value 3</div>
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
      </div>
    </section>

    <section class='lav-plans lav-section'>
      <div class='lav-container'>
        <div class='lav-plans__title lav-title lav-center'>Our plans</div>

        <div class='lav-plans__table'>
          <div class='lav-plans__row'>
            <div class='lav-plans__col'></div>
            <div class='lav-plans__col'>Credit Building</div>
            <div class='lav-plans__col'>
              Credit Building +&nbsp;Rewards
            </div>
          </div>

          <div class='lav-plans__row'>
            <div class='lav-plans__col'>Debit that builds credit</div>
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

          <div class='lav-plans__row'>
            <div class='lav-plans__col'>Total cost</div>
            <div class='lav-plans__col'>
              <span class='lav-plans__price'>$149</span>
              <span class='lav-plans__price-old'>$200</span>
              <div class='lav-plans__caption'>a year</div>
            </div>
            <div class='lav-plans__col'>
              <span class='lav-plans__price'>$199</span>
              <span class='lav-plans__price-old'>$265</span>
              <div class='lav-plans__caption'>a year</div>
            </div>
          </div>
        </div>

        <div class='lav-plans__btn-wrap'>
          <button class='lav-btn lav-btn_trans lav-plans__btn'>SAVE 25% NOW</button>
        </div>
      </div>
    </section>

    <section class='lav-connect lav-section lav-dark'>
      <div class='lav-container'>
        <div class='lav-connect__inner'>
          <div class='lav-connect__title'>Does Extra connect with my bank?</div>

          <input placeholder='Search for your bank here...' class='lav-connect__input' />
        
          <img class='lav-connect__plaid' src='${settings.dir}/img/plaid.png' />
        </div> 
      </div>
    </section>

    <section class='lav-join lav-section lav-dark'>
      <div class='lav-container'>
        <div class='lav-join__info'>
          <div class='lav-join__title'>Your credit isn’t going to build itself, let’s get started.</div>
        
          <button class='lav-btn lav-btn_green lav-join__btn'>Apply now</button>
        </div> 
      </div>
    </section>
  `;

  document
    .querySelector('.main')
    .insertAdjacentHTML('afterbegin', newHomepageEl);

  initFeedbacks();
  initFaq();
}

function initFeedbacks() {
  document.querySelector('.section--intro').classList.add('lav-dark');

  document
    .querySelector('.lav-ratings')
    .insertAdjacentElement(
      'afterend',
      document.querySelector('.section--intro')
    );

  document.querySelector('.section--intro .section-heading').innerText =
    'As told by Extra members';
}

function initRatings() {
  document.querySelector('.lav-ratings__stars-caption').innerText =
    document.querySelector('.hero-notice-stars + div').innerText;
}

function initFaq() {
  document
    .querySelector('.lav-join')
    .insertAdjacentElement('beforebegin', document.querySelector('#FAQ'));

  document.querySelector('#FAQ .section-heading').innerText =
    'Frequently asked questions';
}
