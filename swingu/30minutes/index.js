// const orig = console.log;
// console.log = function () {
//   orig.apply(console, arguments);
//   navigator.sendBeacon(
//     'https://console.wiredgeese.com/log/',
//     JSON.stringify(arguments)
//   );
// };

console.log('initExp: 30Minutes');

/********* Settings **********/
const settings = {
  dir: 'https://flopsi69.github.io/crs/swingu/30minutes',
  observe: false,
  clarity: {
    enable: true,
    params: ['set', 'exp_stripe_cancel_flow', 'variant_1'],
  },
  debug: true,
};

if (
  location.href.includes('/upgrade/player') &&
  location.href.includes('hypothesis-2')
) {
  pushDataLayer('exp_stripe_cancel_flow_loaded');
  waitFor(
    () => document.body,
    () => {
      handleUpgradePage();
      pushDataLayer(
        'exp_stripe_cancel_flow_view',
        'View popup',
        'Element on screen',
        'Popup: An Exclusive Offer for You'
      );
    },
    50
  );
} else if (location.href.includes('/home')) {
  pushDataLayer('exp_stripe_cancel_flow_loaded');
  waitFor(
    () => document.body && document.querySelector('#app')?.dataset?.page,
    () => {
      handleHomepage();
    },
    50
  );
}

function handleHomepage() {
  if (!settings.debug && settings.clarity.enable) {
    waitFor(
      () => typeof clarity == 'function',
      () => {
        clarity(...settings.clarity.params);
      },
      500
    );
  }

  console.log('initHomepage: ' + location.href);

  // const parseJson = document.querySelector('#app')?.dataset.page;

  waitFor(
    () => document.querySelector('[data-has-active-subscription]'),
    () => {
      const isFreeTrial = document
        .querySelector('[data-is-eligible-for-free-trial]')
        .getAttribute('data-is-eligible-for-free-trial');

      const isActiveSubscription = document
        .querySelector('[data-has-active-subscription]')
        .getAttribute('data-has-active-subscription');

      if (isFreeTrial === 'false' && isActiveSubscription === 'false') {
        waitFor(
          () =>
            document.querySelector(
              '[data-crstarget="hypothesis-2-upgrade-target"]'
            ),
          () => {
            document
              .querySelector('[data-crstarget="hypothesis-2-upgrade-target"]')
              .dispatchEvent(new Event('click'));
          }
        );
      } else {
        console.log(
          'Fail: isFreeTrial: ' +
            isFreeTrial +
            ' isActiveSubscription: ' +
            isActiveSubscription
        );
      }
    }
  );

  // if (
  //   parseJson &&
  //   JSON.parse(parseJson)?.props?.subdomainData?.subscriptionTier === 0
  // ) {
  //   // sessionStorage.setItem('isRedirectedExp', 'yes');

  //   waitFor(
  //     () =>
  //       document.querySelector(
  //         '[data-crstarget="hypothesis-2-upgrade-target"]'
  //       ),
  //     () => {
  //       document
  //         .querySelector('[data-crstarget="hypothesis-2-upgrade-target"]')
  //         .dispatchEvent(new Event('click'));
  //     }
  //   );
  // } else {
  //   console.log('empty json or not free tier');
  //   return false;
  // }
}

function handleUpgradePage() {
  console.log('initUpgradePage: ' + location.href);
  //Clarity
  if (!settings.debug && settings.clarity.enable) {
    waitFor(
      () => typeof clarity == 'function',
      () => {
        clarity(...settings.clarity.params);
      },
      500
    );
  }

  /*** STYLES / Start ***/
  const styles = `
    [dusk="gps-upgrade-container"] {
      display: none;
    }
    .antialiased {
      background: #262626;
    }
    .lav-close {
      margin-bottom: 16px;
    }

    .lav-new {
      padding: 15px;
    }
    .lav-offer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #fff;
      padding: 6px 12px;
      border-radius: 10px;
      background: #313131;
    }
    .lav-offer__title {
      font-size: 17px;
      font-weight: 700;
      line-height: 22px;
      letter-spacing: -0.408px;
    }
    .lav-timer {
      display: flex;
      font-size: 20px;
      font-weight: 600;
      line-height: 24px; 
    }
    .lav-timer span + span {
      margin-left: 2px;
    }
    .lav-digit {
      position: relative;
      display: flex;
      justify-content: center;
      width: 24px;
      height: 30px;
      align-items: center;
      text-align: center;
      border-radius: 5px;
      border: 0.5px solid #545454;
      background: #313131;
    }
    .lav-digit:before {
      content: '';
      border-radius: 5px 5px 0px 0px;
      opacity: 0.07;
      background: var(--White, #FFF);
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 50%;
    }
    .lav-timer__caption {
      display: flex;
      justify-content: space-between;
      color: #909094;
      font-size: 13px;
      font-weight: 400;
      line-height: 18px;
      letter-spacing: -0.078px
    }
    .lav-title {
      color: var(--White, #FFF);
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: 32px;
      margin-top: 15px;
    }
    .lav-off {
      color: var(--Action-Yellow, #FFC803);
      margin-top: 4px;
      font-size: 15px;
      font-style: normal;
      font-weight: 600;
      line-height: 20px;
      letter-spacing: -0.5px;
    }

    .lav-plate__wrap {
      margin-top: 12px;
      border-radius: 10px;
    }
    .lav-plate {
      position: relative;
      z-index: 1;
      padding: 15px;
      border-radius: 10px;
      background: #313131;
      color: #fff;
    }
    .lav-plate__head {
      display: flex;
      align-items: center;
    }
    .lav-plate__head-logo {
      flex-shrink: 0;
      margin-right: 15px;
      box-shadow: 0px 2.65px 7.95px 0px rgba(0, 0, 0, 0.25);
      width: 53px;
    }
    .lav-plate__head-title {
      color: var(--common-white, #FFF);
      font-size: 13px;
      font-weight: 400;
      line-height: 18px; /* 138.462% */
      letter-spacing: -0.078px;
    }
    .lav-plate__head-caption {
      color: #909094;
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: 18px;
      letter-spacing: -0.078px;
    }
    .lav-plate__img {
      width: 100%;
      margin-bottom: -55px;
    }
    .lav-plate__caption {
      color: rgba(247, 247, 247, 0.60);
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
      margin-top: 15px;
    }

    .lav-list {
      font-size: 15px;
      font-weight: 600;
      line-height: 20px;
      letter-spacing: -0.5px;
      margin-top: 12px;
    }
    .lav-list:not(.active) .lav-list__item:nth-child(1n + 6) {
      display: none;
    }
    .lav-list__wrap {
      margin-top: 15px;
      padding: 12px 0;
      border-bottom: 0.5px solid #545454;
      border-top: 0.5px solid #545454;
    }
    .lav-list__title {
      color: var(--common-white, #FFF);
      font-size: 17px;
      font-weight: 700;
      line-height: 22px;
      letter-spacing: -0.408px;
    }
    .lav-list__item {
      display: flex;
      align-items: center;
    }
    .lav-list__item + .lav-list__item {
      margin-top: 10px;
    }
    .lav-list__item img {
      margin-right: 10px;
      flex-shrink: 0;
    }

    .lav-toggler {
      display: flex;
      align-items: center;
      color: var(--Green-Main, #49BB54);
      font-size: 15px;
      font-style: normal;
      font-weight: 700;
      line-height: 20px;
      letter-spacing: -0.24px;
      margin-top: 15px;
    }
    .lav-toggler svg {
      margin-left: 8px;
      transition: 0.35s;
      position: relative;
      top: 1px;
    }
    .lav-toggler.active svg {
      transform: rotate(180deg);
    }

    .lav-sticky {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 0 15px 15px;
      border-radius: 10px 10px 0px 0px;
      background: rgb(38,38,38);
      background: linear-gradient(0deg, rgba(38,38,38,1) 33%, rgba(255,255,255,0) 69%);
      z-index: 99;
    }
    .lav-unlock {
      position: relative;
      border-radius: 7px;
      background: var(--common-medium-primary, #49BB54);
      padding: 13px 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      min-height: 60px;
    }
    .lav-unlock__off {
      position: absolute;
      right: -6px;
      top: -14px;
      color: var(--common-grey-800-impact-text, #253139);
      text-align: center;
      font-size: 13px;
      font-style: normal;
      font-weight: 600;
      line-height: 18px;
      letter-spacing: -0.078px;
      border-radius: 50px;
      padding: 2px 6px;
      background: var(--common-medium-secondary, #FFC803);
    }
    .lav-unlock__price {
      display: flex;
      align-items: center;
      font-size: 16px;
      padding: 4px 10px;
      border-radius: 4px;
      background: var(--dark-primary-39-ac-44, #39AC44);
    }
    .lav-unlock__price-new {
      color: var(--common-white, #FFF);
      text-align: center;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    .lav-unlock__price-old {
      margin-right: 4px;
      color: var(--common-white, #FFF);
      text-align: center;
      font-weight: 400;
      text-decoration: line-through;
      text-transform: uppercase;
      opacity: 0.5;
    }
    .lav-loader {
      width: 29px;
      height: 29px;
      font-size: 0;
      line-height: 0;
      border: 2px solid #FFF;
      border-bottom-color: transparent;
      border-radius: 50%;
      display: inline-block;
      box-sizing: border-box;
      animation: rotation 1s linear infinite;;
    }
    @keyframes rotation {
      0% {
          transform: rotate(0deg);
      }
      100% {
          transform: rotate(360deg);
      }
    }
  `;

  const stylesEl = document.createElement('style');
  stylesEl.innerHTML = styles;

  waitFor(
    () => document.head,
    () => {
      document.head.appendChild(stylesEl);
    },
    100
  );
  /*** STYLES / End ***/

  function getDateRange() {
    const today = new Date();
    const nextYear = new Date(today);
    nextYear.setFullYear(today.getFullYear() + 1);

    const startDateString = `${new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }).format(today)}`;
    const endDateString = `${new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }).format(nextYear)}`;

    return `${startDateString} - ${endDateString}`;
  }

  const html = `
    <div class="lav-new">
      <div class="lav-close">
        <svg class="inline-block" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.8799 22.2012C17.874 22.2012 22.8369 17.2275 22.8369 11.2441C22.8369 5.25 17.8633 0.287109 11.8691 0.287109C5.88574 0.287109 0.922852 5.25 0.922852 11.2441C0.922852 17.2275 5.89648 22.2012 11.8799 22.2012ZM11.8799 20.375C6.80957 20.375 2.75977 16.3145 2.75977 11.2441C2.75977 6.17383 6.79883 2.11328 11.8691 2.11328C16.9395 2.11328 21.0107 6.17383 21.0107 11.2441C21.0107 16.3145 16.9502 20.375 11.8799 20.375ZM8.20605 15.7881C8.45312 15.7881 8.66797 15.6914 8.8291 15.5195L11.8691 12.4688L14.9307 15.5195C15.0918 15.6807 15.2959 15.7881 15.543 15.7881C16.0156 15.7881 16.4023 15.4014 16.4023 14.918C16.4023 14.6709 16.3164 14.4775 16.1445 14.3057L13.0938 11.2549L16.1553 8.18262C16.3379 8 16.4131 7.81738 16.4131 7.58105C16.4131 7.1084 16.0264 6.72168 15.5537 6.72168C15.3281 6.72168 15.1455 6.80762 14.9629 6.99023L11.8691 10.0518L8.80762 7.00098C8.64648 6.8291 8.45312 6.74316 8.20605 6.74316C7.7334 6.74316 7.34668 7.11914 7.34668 7.5918C7.34668 7.82812 7.44336 8.03223 7.60449 8.19336L10.6553 11.2549L7.60449 14.3164C7.44336 14.4775 7.34668 14.6816 7.34668 14.918C7.34668 15.4014 7.7334 15.7881 8.20605 15.7881Z" fill="#ffffff"></path></svg>
      </div>

      <div class="lav-offer">
        <div class="lav-offer__title">Offer available for:</div>

        <div class="lav-offer__info">
          <div class="lav-timer">
            <span class='lav-digit'>-</span>
            <span class='lav-digit'>-</span>
            <span class='lav-divider'>:</span>
            <span class='lav-digit'>-</span>
            <span class='lav-digit'>-</span>
          </div>
          <div class="lav-timer__caption">
            <span>Minutes</span>
            <span>Seconds</span>
          </div>
        </div>
      </div>

      <div class="lav-title">An Exclusive Offer for You!</div>
      <div class="lav-off">50% Off SwingU Pro Yearly</div>

      <div class="lav-plate__wrap">
        <img class="lav-plate__img" src="${
          settings.dir
        }/img/plate-bg.png" alt="" />
        
        <div class="lav-plate">
          <div class="lav-plate__head">
            <img class="lav-plate__head-logo" src="${
              settings.dir
            }/img/logo-square.png" alt="" />
            <div class="lav-plate__head-info">
              <div class="lav-plate__head-title">SwingU Pro</div>
              <div class="lav-plate__head-caption">Top features</div>
            </div>
          </div>

          <div class="lav-list__wrap">
            <div class="lav-list__title">You’ll get:</div>
          </div>
          <div class="lav-plate__caption">${getDateRange()}: $99.00 auto-renewal. No commitment. Cancel anytime.</div>
        </div>
      </div>
    </div>
  `;

  /********* Custom Code **********/
  waitFor(
    () => document.querySelector('.antialiased'),
    () => {
      init();
    },
    100
  );

  let seconds = 0;
  const secondsInterval = setInterval(() => {
    seconds += 500;
    console.log(seconds);
  }, 500);

  function init() {
    console.log('init');

    document
      .querySelector('.antialiased')
      .insertAdjacentHTML('afterbegin', html);

    document.querySelector('.lav-close').addEventListener('click', function () {
      pushDataLayer(
        'exp_stripe_cancel_flow_close',
        'Close popup',
        'Button',
        'Popup: An Exclusive Offer for You'
      );

      clearInterval(secondsInterval);

      pushDataLayer(
        'exp_stripe_cancel_flow_focus',
        `${seconds / 1000}s`,
        'Element on screen',
        'Popup: An Exclusive Offer for You'
      );

      document
        .querySelector('[dusk="gps-upgrade-container"] .absolute')
        .click();
    });

    startCountdown();
    drawList();
    addSticky();
  }

  function startCountdown(duration = 30) {
    const elements = document.querySelectorAll('.lav-digit');
    let timer = duration * 60; //sceconds
    const countdownInterval = setInterval(function () {
      const minutesTens = Math.floor(timer / 60 / 10);
      const minutesOnes = Math.floor(timer / 60) % 10;
      const secondsTens = Math.floor((timer % 60) / 10);
      const secondsOnes = timer % 10;

      elements[0].textContent = minutesTens;
      elements[1].textContent = minutesOnes;
      elements[2].textContent = secondsTens;
      elements[3].textContent = secondsOnes;

      if (--timer < 0) {
        clearInterval(countdownInterval);
        alert('Countdown timer has expired!');
      }
    }, 1000);
  }

  function addSticky() {
    const el = document.createElement('div');
    el.classList.add('lav-sticky');

    el.innerHTML = `
      <div class='lav-unlock'>
        <div class='lav-unlock__off'>50% off</div>
        <img class="lav-unlock__img" src="${settings.dir}/img/logo-white.svg" alt="" />
        <div class="lav-unlock__price">
          <div class="lav-unlock__price-old">$99.99</div>
          <div class="lav-unlock__price-new">$49.99/yr</div>
        </div>
      </div>
    `;

    document
      .querySelector('.antialiased')
      .insertAdjacentElement('beforeend', el);

    handleStickyOffset();
    window.addEventListener('resize', handleStickyOffset);

    document
      .querySelector('.lav-unlock')
      .addEventListener('click', function () {
        if (document.querySelector('.lav-clicked')) return;

        clearInterval(secondsInterval);

        pushDataLayer(
          'exp_stripe_cancel_flow_focus',
          `${seconds / 1000}s`,
          'Element on screen',
          'Popup: An Exclusive Offer for You'
        );

        pushDataLayer(
          'exp_stripe_cancel_flow_cta',
          'CTA',
          'Button',
          'Popup: An Exclusive Offer for You'
        );

        this.classList.add('lav-clicked');

        document
          .querySelector('.lav-unlock__price')
          .classList.add('lav-loader');
        if (document.querySelector('[data-stripe-checkout-url]')) {
          const url = document.querySelector('[data-stripe-checkout-url]')
            .dataset.stripeCheckoutUrl;
          const link = document.createElement('a');
          link.href = url.replace('CRO40', 'COMEBACK50');
          link.click();
        }
      });
  }

  function handleStickyOffset() {
    document.querySelector('.lav-new').style.paddingBottom = `${
      document.querySelector('.lav-sticky').offsetHeight + 30
    }px`;
  }

  function drawList() {
    const parentEl = document.createElement('div');
    parentEl.classList.add('lav-list');

    const items = [
      { caption: '‘Plays Like’ distances' },
      { caption: 'Club recommendations' },
      { caption: 'Green reading maps' },
      { caption: 'Advanced stats & strokes gained' },
      { caption: 'Ad free experience' },
      { caption: 'Wind Speed & Elevation' },
      { caption: 'Enhanced Scorecard & Stats' },
      { caption: 'Green-Reading Maps For 13,000+ Courses' },
      {
        caption: 'GPS Rangefinder and scorecard for every course in the world',
      },
      { caption: 'Distances to greens and hazards' },
      { caption: 'SwingU Handicap' },
      { caption: 'Shot Tracking' },
      { caption: 'Clubhouse Content Feed' },
      { caption: 'Giveaway Eligibility' },
      { caption: 'Strokes Gained Stats vs. Your Target Handicap' },
      {
        caption:
          'Handicap Index for Each Facet of Your Game (Driving, Approach, Chip/Pitch, Bunker & Putting)',
      },
      { caption: 'Post-Round #1 Game Improvement Priority' },
      { caption: 'Post-Round Personalized, Prescriptive Drill' },
      {
        caption:
          'Extensive Library of Performance Practice Drills and Informative Videos',
      },
    ];

    items.forEach((item, i) => {
      const itemEl = document.createElement('div');
      itemEl.classList.add('lav-list__item');

      itemEl.innerHTML = `
        <img class="lav-list__img" src="${settings.dir}/img/benefits/benefit${i}.svg" alt="" />
        <div class="lav-list__caption">${item.caption}</div>
      `;

      parentEl.appendChild(itemEl);
    });

    document
      .querySelector('.lav-list__wrap')
      .insertAdjacentElement('beforeend', parentEl);

    addToggler();

    function addToggler() {
      const toggler = document.createElement('div');
      toggler.classList.add('lav-toggler');
      toggler.innerHTML = `<span>View all features</span> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M7 10C7.17281 10 7.3318 9.93865 7.45622 9.82209L12.8203 4.96319C12.9378 4.85276 13 4.71779 13 4.55828C13 4.2454 12.7304 4 12.371 4C12.1982 4 12.0392 4.06135 11.9217 4.15951L7 8.62577L2.07834 4.15951C1.96083 4.06135 1.80875 4 1.62903 4C1.26958 4 1 4.2454 1 4.55828C1 4.71779 1.06221 4.85276 1.18664 4.96319L6.54378 9.82209C6.67511 9.93865 6.82719 10 7 10Z" fill="#49BB54"/>
      </svg>`;

      toggler.addEventListener('click', function () {
        if (document.querySelector('.lav-toggler.active')) {
          pushDataLayer(
            'exp_stripe_cancel_flow_show',
            'View top features',
            'Button',
            'Popup: An Exclusive Offer for You'
          );
        } else {
          pushDataLayer(
            'exp_stripe_cancel_flow_show',
            'View all features',
            'Button',
            'Popup: An Exclusive Offer for You'
          );
        }

        parentEl.classList.toggle('active');
        toggler.classList.toggle('active');
        toggler.querySelector('span').innerText = parentEl.classList.contains(
          'active'
        )
          ? 'View top features'
          : 'View all features';
      });

      document
        .querySelector('.lav-list__wrap')
        .insertAdjacentElement('afterend', toggler);
    }
  }
}

// *** Utils *** //
function waitFor(condition, cb, ms = 300) {
  if (condition()) {
    if (typeof cb == 'function') cb();
    return;
  }

  let interval = setInterval(function () {
    if (condition()) {
      clearInterval(interval);
      if (typeof cb == 'function') cb();
    }
  }, ms);
}

// Alalytic 4
function pushDataLayer(name = '', desc = '', type = '', loc = '') {
  try {
    var objData = {
      event: 'event-to-ga4',
      event_name: name,
      event_desc: desc,
      event_type: type,
      event_loc: loc,
    };
    console.log('eventFire', objData);
    if (!settings.debug) {
      dataLayer.push(objData);
    }
  } catch (e) {
    console.log('Event Error:', e);
  }
}

// Mutation Observer
function initObserver(cb) {
  let observer = new MutationObserver((mutations) => {
    for (let mutation of mutations) {
      for (let node of mutation.addedNodes) {
        if (!(node instanceof HTMLElement)) continue;

        cb(node);
      }
    }
  });

  waitFor(
    () => document.body,
    () => {
      observer.observe(document.body, { childList: true, subtree: true });
    },
    100
  );
}
