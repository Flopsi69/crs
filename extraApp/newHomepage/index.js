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

  .lav-btn {
    outline: 0;
    transition: 0.3s;
    border: none;
    padding: 14px 24px;
    font-weight: 500;
    font-size: 14px;
    line-height: 15px;
    text-align: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #000;
  }
  .lav-btn_green {
    background: #36F8A3;
    border-radius: 8px;
  }
  .lav-btn_green:hover {
  }
  .lav-btn_trans {

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
  .lav-jumb {}
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
  .lav-works {}
  .lav-works {}
  .lav-works {}
  .lav-works {}

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
              <img src='${settings.dir}/img/works1.png' />
            </div>

            <div class='lav-works__info'>
              <div class='lav-works__info-num'>2.</div>
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
              <div class='lav-works__info-num'>3.</div>
              <div class='lav-works__info-inner'>
                <div class='lav-works__info-title'>Sign up and connect your bank account</div>
                <div class='lav-works__info-descr'>
                Extra connects directly to your existing bank account. We connect with more than <span class='lav-green'>10,000 banks.</span></div>
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
                <div class='lav-works__info-title'>Sign up and connect your bank account</div>
                <div class='lav-works__info-descr'>
                Extra connects directly to your existing bank account. We connect with more than <span class='lav-green'>10,000 banks.</span></div>
              </div>
            </div>
          </div>
        </div>

        <button class='lav-btn lav-btn_green lav-works__btn'>GET STARTED</button>

        <div class='lav-works__caption'>Impact on your credit score may vary depending on your use.<br/>Extra is required to report both on time and late payments.</div>
      </div>
    </section>

    <section class='lav-compare lav-section'>
      <div class='lav-compare__title lav-title'>Your debit card should be 
      <img src='${settings.dir}/img/starsIcon.svg' />
      Extra
      <img src='${settings.dir}/img/starsIcon.svg' />
      </div>

      <div class='lav-compare__table'>
        <div class='lav-compare__row'>
          <div class='lav-compare__col'></div>
          <div class='lav-compare__col'>Extra Debit Card</div>
          <div class='lav-compare__col'>Debit Card</div>
        </div>

        <div class='lav-compare__row'>
          <div class='lav-compare__col'>Builds credit history</div>
          <div class='lav-compare__col'>
            <img src='${settings.dir}/img/checkIconWhite.svg' />
          </div>
          <div class='lav-compare__col'>
            <img src='${settings.dir}/img/noCheckIcon.svg' />
          </div>
        </div>

        <div class='lav-compare__row'>
          <div class='lav-compare__col'>Earns reward points</div>
          <div class='lav-compare__col'>
            <img src='${settings.dir}/img/checkIconWhite.svg' />
          </div>
          <div class='lav-compare__col'>
            <img src='${settings.dir}/img/noCheckIcon.svg' />
          </div>
        </div>

        <div class='lav-compare__row'>
          <div class='lav-compare__col'>Connects with any bank</div>
          <div class='lav-compare__col'>
            <img src='${settings.dir}/img/checkIconWhite.svg' />
          </div>
          <div class='lav-compare__col'>
            <img src='${settings.dir}/img/noCheckIcon.svg' />
          </div>
        </div>

        <div class='lav-compare__row'>
          <div class='lav-compare__col'>24/7 premium support</div>
          <div class='lav-compare__col'>
            <img src='${settings.dir}/img/checkIconWhite.svg' />
          </div>
          <div class='lav-compare__col'>
            <img src='${settings.dir}/img/noCheckIcon.svg' />
          </div>
        </div>

        <div class='lav-compare__row'>
          <div class='lav-compare__col'>No security deposit</div>
          <div class='lav-compare__col'>
            <img src='${settings.dir}/img/checkIconWhite.svg' />
          </div>
          <div class='lav-compare__col'>
            <img src='${settings.dir}/img/checkIconWhite.svg' />
          </div>
        </div>

        <div class='lav-compare__row'>
          <div class='lav-compare__col'>No credit checks</div>
          <div class='lav-compare__col'>
            <img src='${settings.dir}/img/checkIconWhite.svg' />
          </div>
          <div class='lav-compare__col'>
            <img src='${settings.dir}/img/noCheckIcon.svg' />
          </div>
        </div>

        <div class='lav-compare__row'>
          <div class='lav-compare__col'>Daily payments</div>
          <div class='lav-compare__col'>
            <img src='${settings.dir}/img/checkIconWhite.svg' />
          </div>
          <div class='lav-compare__col'>
            <img src='${settings.dir}/img/checkIconWhite.svg' />
          </div>
        </div>
      </div>

      <button class='lav-btn lav-btn_trans lav-compare__btn'>JOIN NOW</button>
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
