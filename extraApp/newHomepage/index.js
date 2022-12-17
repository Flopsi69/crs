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
  .lav-section {
    padding: 100px 0;
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
    color: #fff;
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
    font-weight: 500;
    font-size: 85px;
    line-height: 90px;
    letter-spacing: -0.0175em;
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
  .lav-jumb {}
  .lav-jumb {}
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

  .lav-told {

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
    dipslay: flex;
    flex-flow: column;
  }
  .lav-why__item-title {
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
    width: 86px;
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
  .lav-compare__debit {
    padding: 65px 45px 55px;
  }
  .lav-compare__debit-img {
    max-width: 130px;
  }
  .lav-compare__debit-title {
    font-weight: 500;
    font-size: 32px;
    line-height: 1.2;
    letter-spacing: -0.025em;
    color: #000000;
    margin-top: 25px;
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

    <section class='lav-told lav-section lav-dark'>
      <div class='lav-container'>
        <div class='lav-told__title lav-title'>As told by Extra members</div>

        <div class='lav-told__slider'></div>
      </div>
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
            <div class='lav-compare__col lav-compare__debit'>
              <img class='lav-compare__debit-img' src='${settings.dir}/img/compare-debit.png' />
              <div class='lav-compare__debit-title'>Extra Debit Card</div>
            </div>
            <div class='lav-compare__col'>Debit Card</div>
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

    <section class='lav-better lav-section lav-dark'>
      <div class='lav-better__title lav-title'>Better credit takes you places</div>

    </section>
  `;

  document
    .querySelector('.main')
    .insertAdjacentHTML('afterbegin', newHomepageEl);
}

function initRatings() {
  document.querySelector('.lav-ratings__stars-caption').innerText =
    document.querySelector('..hero-notice-stars + div').innerText;
}
