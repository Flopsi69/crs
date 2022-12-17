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
  .lav-btn {

  }

  .lav-dark {

  }

  .lav-title {

  }

  .lav-dark .lav-title {
    
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
    <section class='lav-jumb lav-section'>
      <div class='lav-jumb__title'>
        Debit that builds credit
      </div> 

      <div class='lav-jumb__list'>
        <div class='lav-jumb__item'>No interest or hidden fees—ever</div>
        <div class='lav-jumb__item'>Use your own bank account</div>
        <div class='lav-jumb__item'>Earn rewards with every swipe</div>
      </div>

      <button class='lav-btn lav-btn_green lav-jumb__btn'>Start building Credit</button>
    </section>

    <section class='lav-partners lav-section'>
      <img src='${settings.dir}/img/partners.svg' />
    </section>

    <section class='lav-ratings lav-section'>
      <div class='lav-ratings__top'>
        <img src='${settings.dir}/img/appStore.svg' />
        <div class='lav-ratings__stars'>
          <img src='${settings.dir}/img/appStore.svg' />
          <div class='lav-ratings__stars-caption'>4.6K Ratings</div>
        </div>
      </div>
      
      <div class='lav-ratings__caption'>Trusted by 200,000+ customers</div>
    </section>

    <section class='lav-told lav-section lav-dark'>
      <div class='lav-told__title lav-title'>As told by Extra members</div>

      <div class='lav-told__slider'></div>
    </section>

    <section class='lav-why lav-section'>
      <div class='lav-why__title lav-title'>Why Extra?</div>

      <div class='lav-why__list'>
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
            <div class='lav-why__item-title'>No interest, credit checks, or hidden fees—ever</div>
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
    </section>

    <section class='lav-works lav-section lav-dark'>
      <div class='lav-works__title lav-title'>How the Extra Debit Card works</div>

      <div class='lav-works__slider'>
        <div class='lav-works__slide'>
          <div class='lav-works__image'></div>

          <div class='lav-works__info'>
            <div class='lav-works__info-num'>1.</div>
            <div class='lav-works__info-inner'>
              <div class='lav-works__info-title'>Sign up and connect your bank account</div>
              <div class='lav-works__info-descr'>Extra connects directly to your existing bank account. We connect with more than <span class='lav-green'>10,000 banks.</span></div>
            </div>
          </div>
        </div>
      </div>

      <button class='lav-btn lav-btn_green lav-works__btn'>GET STARTED</button>

      <div class='lav-works__caption'>Impact on your credit score may vary depending on your use.<br/>Extra is required to report both on time and late payments.</div>
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
