const orig = console.log;
console.log = function () {
  orig.apply(console, arguments);
  navigator.sendBeacon(
    'https://console.wiredgeese.com/log/',
    JSON.stringify(arguments)
  );
};

console.log('initExp: newUpgrade + C');

/********* Settings **********/
const settings = {
  dir: 'https://flopsi69.github.io/crs/swingu/newUpgrade',
  observe: false,
  clarity: {
    enable: true,
    params: ['set', 'exp_stripe_flow', 'variant_1'],
  },
  debug: false,
};

if (location.href.includes('/upgrade/player')) {
  if (location.href.includes('hypothesis-3')) {
    handleUpgradePage();
  } else if (location.href.includes('hypothesis-2')) {
    handleUpgradePage2();
  }
} else if (location.href.includes('/home')) {
  //Clarity
  if (!settings.debug && settings.clarity.enable) {
    waitFor(
      () => typeof clarity == 'function',
      () => {
        clarity(...settings.clarity.params);
      }
    );
  }

  waitFor(
    () => document.body && document.querySelector('#app'),
    () => {
      if (
        JSON.parse(document.querySelector('#app').dataset.page).props
          .subdomainData.subscriptionTier === 0
      ) {
        handleHomepage();
      } else {
        pushDataLayer(
          'exp_stripe_membership',
          `Membership with subscription`,
          'Membership',
          'Homepage'
        );
      }
    }
  );
}

function handleHomepage() {
  console.log('initHomepage: ' + location.href);

  waitFor(
    () => document.querySelector('.antialiased .relative.flex-col'),
    () => {
      if (sessionStorage.getItem('isRedirectedExp') !== 'yes') {
        sessionStorage.setItem('isRedirectedExp', 'yes');

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
      }
      // JSON.parse(document.querySelector('#app').dataset.page).props
      // .subdomainData.subscriptionTier === 0

      connectSplide();
      const styles = `
        .lav-slider {
          position: relative;
          border-radius: 10px;
          overflow: hidden;
          display: flex;
          flex-grow: 1;
          max-height: 400px;
        }
        .lav-slider:before {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          top: 0;
          pointer-events: none;
          border: 5px solid rgba(255, 255, 255, 0.12);
          z-index: 1;
        }
        .lav-slide {
          display: flex;
          border-radius: 10px;
        }
        .lav-slide__info {
          display: flex;
          flex-flow: column;
          align-items: flex-start;
          justify-content: space-evenly;
          position: relative;
          flex-shrink: 0;
          width: 50%;
          background: url('${settings.dir}/img/slide-bg.png') no-repeat left;
          background-size: cover;
          padding: 22px 15px 85px;
        }
        .lav-slide__info > * {
          position: relative;
          z-index: 2;
        }
        .lav-slide__info:before {
          content: '';
          position: absolute;
          right: 0;
          pointer-events: none;
          bottom: 0;
          top: 0;
          left: 0;
          background: rgba(23, 24, 26, 0.85);
          backdrop-filter: blur(2.5px);
        }
        .lav-slide__image {
          position: relative;
          line-height: 0;
          width: 50%;
        }
        .lav-slide__image img:not(.lav-phone) {
          position: absolute;
          min-height: 100%;
          min-width: 100%;
          object-fit: cover;
          object-position: right;
        }
        .lav-slide:nth-child(2) .lav-slide__image img {
          object-position: 45%;
        }
        .lav-slide:nth-child(3) .lav-slide__image img {
          object-position: 83%;
        }
        .lav-slide:nth-child(4) .lav-slide__image img {
        }
        .lav-slide__title {
          margin-top: 10px;
          color: var(--common-white, #FFF);
          font-size: 16px;
          font-style: normal;
          font-weight: 600;
          line-height: 21px;
          letter-spacing: -0.32px;
        }
        .lav-slide__off {
          margin-top: 18px;
          display: inline-flex;
          align-items: center;
          color: var(--neutral-grey-90017181-a, #17181A);
          font-size: 14px;
          font-style: normal;
          font-weight: 600;
          line-height: 19px;
          letter-spacing: -0.15px;
          text-transform: uppercase;
          border-radius: 3px;
          border: 1px solid var(--common-medium-secondary, #FFC803);
          background: var(--common-medium-secondary, #FFC803);
          padding: 0 10px;
          min-height: 32px;
        }
        .lav-slide__off img {
          margin-right: 8px;
        }

        .lav-cta {
          position: absolute;
          bottom: 10px;
          left: 15px;
          right: 15px;
          border-radius: 7px;
          background: var(--common-medium-primary, #49BB54);
          padding: 0 16px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .lav-cta__caption {
          color: var(--common-white, #FFF);
          font-size: 16px;
          font-style: normal;
          font-weight: 600;
          line-height: 21px;
          letter-spacing: -0.32px;
        }
        .lav-cta__price {
          display: flex;
          align-items: center;
          color: var(--common-white, #FFF);
          font-size: 16px;
          font-style: normal;
          font-weight: 600;
          line-height: 21px;
          letter-spacing: -0.32px;
        }
        .lav-cta__price span {
          color: var(--common-white, #FFF);
          font-size: 14px;
          font-style: normal;
          font-weight: 600;
          line-height: 19px;
          letter-spacing: -0.15px;
          opacity: 0.75;
          align-self: flex-end;
          margin-left: 2px;
        }
        .lav-cta__price svg {
          margin-left: 12px;
        }

        .lav-tip {
          position: relative;
          border-radius: 4px;
          border: 1px solid var(--common-grey-200-strokes, #D9E1E8);
          background: var(--common-white, #FFF);
          padding: 9px 10px;
          padding-right: 35px;
        }
        .lav-tip:after {
          content: '';
          position: absolute;
          top: 50%;
          right: 10px;
          transform: translateY(-50%);
          background: url('${settings.dir}/img/solid-arrow.svg') no-repeat center;
          background-size: contain;
          width: 15px;
          height: 22px;
        }
        .lav-tip__caption {
          color: var(--common-grey-700-default-text, #596974);
          font-size: 13px;
          font-style: normal;
          font-weight: 400;
          line-height: 18px;
          letter-spacing: -0.078px;
        }
        .lav-tip__title {
          color: var(--common-grey-800-impact-text, #253139);
          font-size: 17px;
          font-style: normal;
          font-weight: 600;
          line-height: 22px;
          letter-spacing: -0.408px;
        }

        .splide__pagination {
          position: absolute;
          z-index: 999;
          right: 15px;
          top: 15px;
          border-radius: 50px;
          background: rgba(23, 24, 26, 0.65);
          backdrop-filter: blur(2.5px);
          padding: 5px;
        }
        .splide__pagination__page {
          border-radius: 5px;
          opacity: 0.25;
          background: var(--common-white, #FFF);
          width: 5px;
          height: 5px;
        }
        .splide__pagination__page.is-active {
          opacity: 1;
        }
        .splide__pagination li {
          display: flex;
        }
        .splide__pagination li + li {
          margin-left: 5px;
        }
    

        .section__marketing-block {
          display: none!important;
        }
        .section__video-basic {
          height: 0;
          max-height: 0;
          margin: 0;
          padding: 0;
          overflow: hidden;
          min-height: 0;
        }
        .section__video-basic > div {
          height: 0!important;;
          min-height: 0!important;
        }
        .video-basic {
          display: none;
        }
      `;
      const stylesEl = document.createElement('style');
      stylesEl.innerHTML = styles;
      document.head.appendChild(stylesEl);

      const html = `
        <div class='splide lav-slider'>
          <div class="splide__track">
            <ul class="splide__list">
              <li class='lav-slide splide__slide'>
                <div class='lav-slide__info'>
                  <img src='${settings.dir}/img/logo-w.svg' alt='' />
                  <div class="lav-slide__title">Upgrade to Green Reading Maps</div>
                  <div class="lav-slide__off">
                    <img src='${settings.dir}/img/conf.svg' alt='' />
                    40% off
                  </div>
                </div>
                <div class='lav-slide__image'>
                  <img src='${settings.dir}/img/slide1.png' alt='' />
                </div>

                <div class='lav-cta'>
                  <div class='lav-cta__caption'>Upgrade Now</div>
                  <div class='lav-cta__price'>
                    $4.99 <span>mo</span> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                      <path d="M8 7C8 6.79839 7.9182 6.6129 7.76278 6.46774L1.28425 0.209677C1.13701 0.0725806 0.957055 0 0.744376 0C0.327198 0 0 0.314516 0 0.733871C0 0.935484 0.0817996 1.12097 0.212679 1.25806L6.16769 7L0.212679 12.7419C0.0817996 12.879 0 13.0565 0 13.2661C0 13.6855 0.327198 14 0.744376 14C0.957055 14 1.13701 13.9274 1.28425 13.7823L7.76278 7.53226C7.9182 7.37903 8 7.20161 8 7Z" fill="white"/>
                    </svg>
                  </div>
                </div>
              </li>

              <li class='lav-slide splide__slide'>
                <div class='lav-slide__info'>
                  <img src='${settings.dir}/img/logo-w.svg' alt='' />
                  <div class="lav-slide__title">Upgrade to Club Recommendations</div>
                  <div class="lav-slide__off">
                    <img src='${settings.dir}/img/conf.svg' alt='' />
                    40% off
                  </div>
                </div>
                <div class='lav-slide__image'>
                  <img src='${settings.dir}/img/slide2.png' alt='' />
                </div>

                <div class='lav-cta'>
                  <div class='lav-cta__caption'>Upgrade Now</div>
                  <div class='lav-cta__price'>
                    $4.99 <span>mo</span> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                      <path d="M8 7C8 6.79839 7.9182 6.6129 7.76278 6.46774L1.28425 0.209677C1.13701 0.0725806 0.957055 0 0.744376 0C0.327198 0 0 0.314516 0 0.733871C0 0.935484 0.0817996 1.12097 0.212679 1.25806L6.16769 7L0.212679 12.7419C0.0817996 12.879 0 13.0565 0 13.2661C0 13.6855 0.327198 14 0.744376 14C0.957055 14 1.13701 13.9274 1.28425 13.7823L7.76278 7.53226C7.9182 7.37903 8 7.20161 8 7Z" fill="white"/>
                    </svg>
                  </div>
                </div>
              </li>

              <li class='lav-slide splide__slide'>
                <div class='lav-slide__info'>
                  <img src='${settings.dir}/img/logo-w.svg' alt='' />
                  <div class="lav-slide__title">Upgrade to ‘Plays Like’ distances</div>
                  <div class="lav-slide__off">
                    <img src='${settings.dir}/img/conf.svg' alt='' />
                    40% off
                  </div>
                </div>
                <div class='lav-slide__image'>
                  <img src='${settings.dir}/img/slide3.png' alt='' />
                </div>

                <div class='lav-cta'>
                  <div class='lav-cta__caption'>Upgrade Now</div>
                  <div class='lav-cta__price'>
                    $4.99 <span>mo</span> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                      <path d="M8 7C8 6.79839 7.9182 6.6129 7.76278 6.46774L1.28425 0.209677C1.13701 0.0725806 0.957055 0 0.744376 0C0.327198 0 0 0.314516 0 0.733871C0 0.935484 0.0817996 1.12097 0.212679 1.25806L6.16769 7L0.212679 12.7419C0.0817996 12.879 0 13.0565 0 13.2661C0 13.6855 0.327198 14 0.744376 14C0.957055 14 1.13701 13.9274 1.28425 13.7823L7.76278 7.53226C7.9182 7.37903 8 7.20161 8 7Z" fill="white"/>
                    </svg>
                  </div>
                </div>
              </li>

              <li class='lav-slide splide__slide'>
                <div class='lav-slide__info'>
                  <img src='${settings.dir}/img/logo-w.svg' alt='' />
                  <div class="lav-slide__title">Upgrade to Strokes Gained Pro Stats</div>
                  <div class="lav-slide__off">
                    <img src='${settings.dir}/img/conf.svg' alt='' />
                    40% off
                  </div>
                </div>
                <div class='lav-slide__image'>
                  <img src='${settings.dir}/img/slide4-bg.png' alt='' />
                  <img class='lav-phone' src='${settings.dir}/img/slide4-phone.png' alt='' />
                </div>

                <div class='lav-cta'>
                  <div class='lav-cta__caption'>Upgrade Now</div>
                  <div class='lav-cta__price'>
                    $4.99 <span>mo</span> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                      <path d="M8 7C8 6.79839 7.9182 6.6129 7.76278 6.46774L1.28425 0.209677C1.13701 0.0725806 0.957055 0 0.744376 0C0.327198 0 0 0.314516 0 0.733871C0 0.935484 0.0817996 1.12097 0.212679 1.25806L6.16769 7L0.212679 12.7419C0.0817996 12.879 0 13.0565 0 13.2661C0 13.6855 0.327198 14 0.744376 14C0.957055 14 1.13701 13.9274 1.28425 13.7823L7.76278 7.53226C7.9182 7.37903 8 7.20161 8 7Z" fill="white"/>
                    </svg>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="lav-tip">
          <div class="lav-tip__caption">Today’s Tip</div>
          <div class="lav-tip__title">-</div>
        </div>
      `;

      document
        .querySelector('.antialiased .relative.flex-col')
        .insertAdjacentHTML('beforeend', html);

      const title = document
        .querySelector('.video-basic__title')
        .innerText.replace("Today's Tip", '')
        .trim();

      document.querySelector('.lav-tip__title').innerText = title;

      document.querySelector('.lav-tip').addEventListener('click', function () {
        pushDataLayer(
          'exp_stripe_s_tt_tt',
          document.querySelector('.lav-tip__title').innerText.trim(),
          'Section',
          'Todays Tip'
        );
        document.querySelector('.icon-play').click();
      });

      document
        .querySelector('.lav-slider')
        .addEventListener('click', function () {
          if (
            document.querySelector(
              '[data-crstarget="hypothesis-3-upgrade-target"]'
            )
          ) {
            pushDataLayer(
              'exp_stripe_i_b_bt',
              document
                .querySelector('.lav-slide.is-active .lav-slide__title')
                .innerText.trim(),
              'Image',
              'Banner'
            );
            document
              .querySelector('[data-crstarget="hypothesis-3-upgrade-target"]')
              .dispatchEvent(new Event('click'));
          }
        });

      waitFor(
        () => typeof Splide == 'function',
        () => {
          initSlider();
        }
      );
    },
    50
  );
}

function connectSplide() {
  const sliderStyles = document.createElement('link');
  sliderStyles.rel = 'stylesheet';
  sliderStyles.href =
    'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide-core.min.css';
  document.head.appendChild(sliderStyles);

  let sliderScript = document.createElement('script');
  sliderScript.src =
    'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js';
  document.head.appendChild(sliderScript);
}

function initSlider() {
  const slider = new Splide('.lav-slider', {
    rewind: true,
    pagination: true,
    arrows: false,
    autoplay: true,
    interval: 5000,
    type: 'fade',
    speed: 800,
  });

  let i = 0;
  setInterval(() => {
    i += 50;
  }, 50);
  slider.on('move', function (newIndex, prevIndex, destIndex) {
    let time = i / 1000;

    if (time > 4.8) {
      time = 5;
    }

    pushDataLayer(
      'exp_stripe_bbt_v_ft',
      `${time}s`,
      'Visibility',
      `Banner - ${document
        .querySelector('.lav-slide.is-active .lav-slide__title')
        .innerText.trim()}`
    );

    i = 0;
  });

  slider.mount();
}

function handleUpgradePage() {
  console.log('initUpgradePage: ' + location.href);
  //Clarity
  if (!settings.debug && settings.clarity.enable) {
    waitFor(
      () => typeof clarity == 'function',
      () => {
        clarity(...settings.clarity.params);
      }
    );
  }

  /*** STYLES / Start ***/
  const styles = `
    .antialiased {
      background: #262626;
    }
    .lav-new {
      padding: 15px;
    }
    .lav-title {
      color: var(--White, #FFF);
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: 32px;
    }
    .lav-off {
      color: var(--Action-Yellow, #FFC803);
      margin: 8px 0;
      font-size: 15px;
      font-style: normal;
      font-weight: 600;
      line-height: 20px;
      letter-spacing: -0.5px;
    }
    .lav-rate {
      display: flex;
      align-items: center;
      color: var(--White, #FFF);
      font-size: 12px;
      font-weight: 600;
      line-height: normal;
    }
    .lav-rate__stars {
      display: flex;
      align-items: center;
    }
    .lav-rate__stars img {
      margin-right: 7px;
    }
    .lav-rate__divider {
      width: 1px;
      margin: 0 6px;
      height: 16px;
      background: var(--Border, #D9E1E8);
    }
    .lav-rate__reviews {
      color: var(--White, #FFF);
      font-style: normal;
      font-size: 12px;
      font-weight: 600;
      line-height: normal;
    }
    .lav-rate__reviews span {
      color: var(--Green-Main, #49BB54);
    }
    .lav-plate {
      margin-top: 16px;
      padding-top: 16px;
      padding-bottom: 16px;
      padding-left: 15px;
      border-radius: 10px;
      background: #313131;
    }


    .lav-sticky {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 16px 15px 13px;
      border-radius: 10px 10px 0px 0px;
      background: #313131;
      box-shadow: 0px -2px 12px 0px rgba(1, 1, 1, 0.20);
      z-index: 99;
    }
    .lav-unlock {
      border-radius: 7px;
      background: var(--common-medium-primary, #49BB54);
      padding: 13px 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 12px 0;
    }
    .lav-unlock__mo {
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 21px;
      letter-spacing: -0.32px;
      border-radius: 4px;
      background: #39AC44;
      padding: 4px 10px;
      color: var(--common-white, #FFF);
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
    .lav-sticky__caption {
      color: rgba(247, 247, 247, 0.60);
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px;
    }
    .lav-sticky__head {
      display: flex;
      justify-content: space-between;
    }
    .lav-sticky__price {
      display: flex;
      align-items: center;
      color: var(--common-white, #FFF);
      font-size: 15px;
      font-style: normal;
      font-weight: 600;
      line-height: 20px;
      letter-spacing: -0.5px;
    }
    .lav-sticky__price span {
      text-decoration: line-through;
      color: #A2A1A2;
      margin-right: 5px;
    }
    .lav-sticky__price-caption {
      color: #A2A1A2;
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: 18px;
      letter-spacing: -0.078px;
    }
    .lav-sticky__off {
      color: var(--Font-color, #2B2B2B);
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 21px;
      letter-spacing: -0.32px;
      padding: 5px;
      border-radius: 4px;
      background: var(--common-medium-secondary, #FFC803);
      display: flex;
      align-items: center;
    }

    .lav-table {
      margin-top: 16px;
    }
    .lav-row {
      display: flex;
      color: #fff;
      border-bottom: 0.5px solid #545454;
    }
    .lav-row:not(.lav-row__head) {
      padding: 7px 10px 7px 0;
    }
    .lav-cell:first-child {
      color: var(--common-white, #FFF);
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: -0.5px;
      flex-grow: 1;
    }
    .lav-cell:nth-child(2), .lav-cell:nth-child(3) {
      text-align: center;
      width: 36px;
      flex-shrink: 0;
    }
    .lav-cell img {
      margin: 2px auto 0;
    }
    .lav-row__head {
      padding: 15px 10px 15px 0;
      align-items: center;
    }
    .lav-row__head .lav-cell:nth-child(1) {
      color: var(--common-white, #FFF);
      font-size: 17px;
      font-style: normal;
      font-weight: 700;
      line-height: 22px;
      letter-spacing: -0.408px;
    }
    .lav-row__head .lav-cell:nth-child(2) {
      color: var(--neutral-grey-5009-cabb-5, #9CABB5);
      text-align: center;
      font-size: 15px;
      font-style: normal;
      font-weight: 600;
      line-height: 20px;
      letter-spacing: -0.5px;
    }
    .lav-row__head .lav-cell:nth-child(3) {
      color: var(--common-medium-primary, #49BB54);
      text-align: center;
      font-size: 15px;
      font-style: normal;
      font-weight: 600;
      line-height: 20px;
      letter-spacing: -0.5px;
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
    .lav-table:not(.active) .lav-row:nth-child(1n+9) {
      display: none;
    }
    .lav-close {
      margin-bottom: 12px;
    }
    [dusk="gps-upgrade-container"] {
      display: none;
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

  const html = `
    <div class="lav-new">
      <div class="lav-close">
        <svg class="inline-block" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.8799 22.2012C17.874 22.2012 22.8369 17.2275 22.8369 11.2441C22.8369 5.25 17.8633 0.287109 11.8691 0.287109C5.88574 0.287109 0.922852 5.25 0.922852 11.2441C0.922852 17.2275 5.89648 22.2012 11.8799 22.2012ZM11.8799 20.375C6.80957 20.375 2.75977 16.3145 2.75977 11.2441C2.75977 6.17383 6.79883 2.11328 11.8691 2.11328C16.9395 2.11328 21.0107 6.17383 21.0107 11.2441C21.0107 16.3145 16.9502 20.375 11.8799 20.375ZM8.20605 15.7881C8.45312 15.7881 8.66797 15.6914 8.8291 15.5195L11.8691 12.4688L14.9307 15.5195C15.0918 15.6807 15.2959 15.7881 15.543 15.7881C16.0156 15.7881 16.4023 15.4014 16.4023 14.918C16.4023 14.6709 16.3164 14.4775 16.1445 14.3057L13.0938 11.2549L16.1553 8.18262C16.3379 8 16.4131 7.81738 16.4131 7.58105C16.4131 7.1084 16.0264 6.72168 15.5537 6.72168C15.3281 6.72168 15.1455 6.80762 14.9629 6.99023L11.8691 10.0518L8.80762 7.00098C8.64648 6.8291 8.45312 6.74316 8.20605 6.74316C7.7334 6.74316 7.34668 7.11914 7.34668 7.5918C7.34668 7.82812 7.44336 8.03223 7.60449 8.19336L10.6553 11.2549L7.60449 14.3164C7.44336 14.4775 7.34668 14.6816 7.34668 14.918C7.34668 15.4014 7.7334 15.7881 8.20605 15.7881Z" fill="#ffffff"></path></svg>
      </div>
      <div class="lav-title">Upgrade to SwingU Pro</div>
      <div class="lav-off">40% Off SwingU Pro Yearly</div>
      <div class="lav-rate">
        <div class="lav-rate__stars">
          <img class="lav-rate__stars-img" src="${settings.dir}/img/stars.svg" alt="" />
          <span  class="lav-rate__stars-caption">4.8/5</span>
        </div>

        <div class="lav-rate__divider"></div>

        <div class="lav-rate__reviews"><span>145 000+</span> Reviews</div>
      </div>

      <div class="lav-plate">
        <img class="lav-rate__stars-img" src="${settings.dir}/img/logo.svg" alt="" />
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

  function init() {
    console.log('init');

    pushDataLayer(
      'exp_stripe_v_utsp_ps',
      `Popup - ${
        document.querySelector('.lav-table.active') ? 'extended' : 'short'
      }`,
      'Visibility',
      'Upgrade to SwingU Pro'
    );

    document
      .querySelector('.antialiased')
      .insertAdjacentHTML('afterbegin', html);

    document.querySelector('.lav-close').addEventListener('click', function () {
      pushDataLayer(
        'exp_stripe_c_utsp_ps',
        `Popup - ${
          document.querySelector('.lav-table.active') ? 'extended' : 'short'
        }`,
        'Close',
        'Upgrade to SwingU Pro'
      );
      document
        .querySelector('[dusk="gps-upgrade-container"] .absolute')
        .click();
    });

    drawTable();
    addSticky();
  }

  function addSticky() {
    const el = document.createElement('div');
    el.classList.add('lav-sticky');

    el.innerHTML = `
      <div class='lav-sticky__head'>
        <div class='lav-sticky__price-wrap'>
          <div class='lav-sticky__price'><span>$99.99</span>$59.99 per year</div>
          <div class='lav-sticky__price-caption'>Billed annually</div>
        </div>

        <div class='lav-sticky__off'>40% off</div>
      </div>
      <div class='lav-sticky__body'>
        <div class='lav-unlock'>
          <img class="lav-unlock__img" src="${settings.dir}/img/unlock.svg" alt="" />
          <div class="lav-unlock__mo">$4.99/mo</div>
        </div>
      </div>
      <div class='lav-sticky__caption'>
        July 16, 2023 - July 16, 2024: $99.00 auto-renewal. <br/>  No commitment. Cancel anytime.
      </div>
    `;

    document
      .querySelector('.antialiased')
      .insertAdjacentElement('beforeend', el);

    handleStickyOffset();
    window.addEventListener('resize', handleStickyOffset);

    document
      .querySelector('.lav-unlock:not(.lav-clicked)')
      .addEventListener('click', function () {
        this.classList.add('lav-clicked');
        document.querySelector('.lav-unlock__mo').classList.add('lav-loader');
        if (document.querySelector('[data-stripe-checkout-url]')) {
          const url = document.querySelector('[data-stripe-checkout-url]')
            .dataset.stripeCheckoutUrl;

          pushDataLayer(
            'exp_stripe_v_utsp_usp',
            'Unlock SwingPro',
            'Button',
            'Upgrade to SwingU Pro'
          );

          const link = document.createElement('a');
          link.href = url;
          link.click();
        }
      });

    setTimeout(() => {
      pushDataLayer(
        'exp_stripe_v_utsp_ba',
        'Billed annually',
        'Visibility',
        'Upgrade to SwingU Pro'
      );
    }, 2000);
  }

  function handleStickyOffset() {
    document.querySelector('.lav-new').style.paddingBottom = `${
      document.querySelector('.lav-sticky').offsetHeight + 30
    }px`;
  }

  function drawTable() {
    const table = document.createElement('div');
    table.classList.add('lav-table');

    table.innerHTML = `
      <div class="lav-row lav-row__head">
        <div class="lav-cell">What you get with Pro</div>
        <div class="lav-cell">Free</div>
        <div class="lav-cell">Pro</div>
      </div>
    `;

    const items = [
      { benefit: '"Plays Like" Distances' },
      { benefit: 'Club Recommendations' },
      { benefit: 'Green reading maps' },
      { benefit: 'Advanced stats & strokes gained' },
      { benefit: 'Distances to greens and hazards', free: true },
      {
        benefit: 'GPS Rangefinder and scorecard for every course in the world',
        free: true,
      },
      { benefit: 'Ad free experience' },
      { benefit: 'Wind Speed & Elevation' },
      { benefit: 'Enhanced Scorecard & Stats' },
      { benefit: 'Green-Reading Maps For 13,000+ Courses' },
      { benefit: 'SwingU Handicap', free: true },
      { benefit: 'Shot Tracking', free: true },
      { benefit: 'Clubhouse Content Feed', free: true },
      { benefit: 'Giveaway Eligibility' },
      { benefit: 'Strokes Gained Stats vs.<br/> Your Target Handicap' },
      {
        benefit:
          'Handicap Index for Each Facet of Your Game (Driving, Approach, Chip/Pitch, Bunker & Putting)',
      },
      { benefit: 'Post-Round #1 Game<br/> Improvement Priority' },
      { benefit: 'Post-Round Personalized,<br/> Prescriptive Drill' },
      {
        benefit:
          'Extensive Library of Performance Practice Drills and Informative Videos',
      },
    ];

    items.forEach((item) => {
      const row = document.createElement('div');
      row.classList.add('lav-row');

      row.innerHTML = `
        <div class="lav-cell">${item.benefit}</div>
        <div class="lav-cell"><img src='${settings.dir}/img/${
        item.free ? 'check-gray.svg' : 'uncheck.svg'
      }' /></div>
        <div class="lav-cell"><img src='${
          settings.dir
        }/img/check-green.svg' /></div>
      `;

      table.appendChild(row);
    });

    document
      .querySelector('.lav-plate')
      .insertAdjacentElement('beforeend', table);

    const toggler = document.createElement('div');
    toggler.classList.add('lav-toggler');
    toggler.innerHTML = `<span>View all features</span> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M7 10C7.17281 10 7.3318 9.93865 7.45622 9.82209L12.8203 4.96319C12.9378 4.85276 13 4.71779 13 4.55828C13 4.2454 12.7304 4 12.371 4C12.1982 4 12.0392 4.06135 11.9217 4.15951L7 8.62577L2.07834 4.15951C1.96083 4.06135 1.80875 4 1.62903 4C1.26958 4 1 4.2454 1 4.55828C1 4.71779 1.06221 4.85276 1.18664 4.96319L6.54378 9.82209C6.67511 9.93865 6.82719 10 7 10Z" fill="#49BB54"/>
    </svg>`;

    toggler.addEventListener('click', function () {
      if (document.querySelector('.lav-table.active')) {
        pushDataLayer(
          'exp_stripe_b_utsp_vtf',
          'View top features',
          'Button',
          'Upgrade to SwingU Pro'
        );
      } else {
        pushDataLayer(
          'exp_stripe_b_utsp_vaf',
          'View all features',
          'Button',
          'Upgrade to SwingU Pro'
        );
      }

      table.classList.toggle('active');
      toggler.classList.toggle('active');
      toggler.querySelector('span').innerText = table.classList.contains(
        'active'
      )
        ? 'View top features'
        : 'View all features';
    });

    table.insertAdjacentElement('afterend', toggler);
  }
}

function handleUpgradePage2() {
  console.log('initUpgradePage2: ' + location.href);

  /********* Settings **********/
  const settings = {
    // dir: 'https://flopsi69.github.io/crs/swingu/popup',
    dir: 'https://conversionratestore.github.io/projects/swingu/img',
    observe: false,
    clarity: {
      enable: false,
      params: ['set', 'improve_upgrade_popup_v2', 'variant_1'],
    },
    debug: true,
  };

  //Clarity
  if (!settings.debug && settings.clarity.enable) {
    waitFor(
      () => typeof clarity == 'function',
      () => {
        clarity(...settings.clarity.params);
      }
    );
  }

  /*** STYLES / Start ***/
  const styles = `
<style>
  .fixed.bottom-0 {
    display: none!important;
  }

  [dusk="gps-upgrade-container"]  {
    display: none!important;
  }

  body {
    padding-bottom: 0 !important;
  }

  .main-column {
    background: #fff;
  }

  .main-column section,
    .in-app-upgrade-state--show:before,
    .in-app-upgrade-ctas {
        display: none !important;
    }

    .page-template-page-sections .main-container .main-column {
        padding-bottom: 140px !important;
    }

    .header-type-in-app,
    .price-comparison-table,
    .video-hero__content,
    .in-app-upgrade-ctas__open-upgrade-tray {
        display: none !important;
    }

    .video-hero__player {
        padding: 24px 18px !important;
    }

    /* HEADER */

    .my_header {
        position: relative;
        background-image: url(https://flopsi69.github.io/crs/swingu/popup/img/head-bg.jpeg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 0px -25px;
        text-align: center;
        padding: 20px 20px 75px 20px;
    }
    section.choose_plan {
        background: #fff;
        display: block !important;
        padding-bottom: 140px;
    }

    .choose_plan .close_x {
        text-align: left;
    }

    .choose_plan h2 {
        font-family: 'SF Pro Display', 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 30px;
        line-height: 38px;
        color: #FFFFFF;
        margin: 16px 0 24px;
    }

    .choose_label {
        font-family: 'Inter', 'Roboto', sans-serif;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #FFFFFF;
    }

    .toggle_plan {
        display: flex;
        justify-content: space-between;
        position: relative;
        width: fit-content;
        background: #F5F8FA;
        border: 1px solid #D9E1E8;
        border-radius: 26px;
        padding: 4px;
        margin: 16px auto 27px;
    }

    .toggle_plan span {
        width: 111px;
        z-index: 1;
        transition: color .3s ease-in-out;
        text-align: center;
        padding: 5px 0;
        font-family: 'Inter', 'Roboto', sans-serif;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        color: #FFFFFF;
    }

    .toggle_plan span:first-child {
        color: #FFFFFF;
        margin-right: 12px;
    }

    .toggle_plan span:first-child+span {
        color: #2B2B2B;
    }

    .dark_bg {
        position: absolute;
        top: 4px;
        left: 4px;
        height: calc(100% - 8px);
        width: 111px;
        background-color: #253139;
        transition: transform .3s ease-in-out;
        border-radius: 30px;
    }

    .toggle_plan.monthly_active .dark_bg {
        transform: translateX(calc(100% + 12px));
    }

    .toggle_plan.monthly_active span:first-child {
        color: #2B2B2B;
    }

    .toggle_plan.monthly_active span:first-child+span {
        color: white;
    }

    /* PLANS CHECKBOX */
    .plans_checkbox_container .annual_checkbox_wrapper,
    .plans_checkbox_container.show_annual .monthly_checkbox_wrapper {
        display: none;
    }

    .plans_checkbox_container {
        padding: 0 20px;
        margin-top: -75px;
    }

    .plans_checkbox_container.show_annual .annual_checkbox_wrapper {
        display: flex;
        justify-content: space-between;
    }

    .annual_checkbox_wrapper {
        margin-bottom: 42px;
        position: relative;
    }

    .monthly_checkbox_wrapper {
        margin-bottom: 16px;
    }

    .annual_checkbox_wrapper.subs {
        pointer-events: none;
        margin-bottom: 16px;
    }

    .subs .pro_pack_bottom {
        display: none !important;
    }

    .annual_checkbox_wrapper .plan_checkbox {
        width: 50%;
        text-align: left;
    }

    .annual_checkbox_wrapper .plan_checkbox:first-child {
        margin-right: 10px;
    }

    .monthly_checkbox_wrapper .plan_checkbox {
        padding: 26px 16px;
    }

    .plan_checkbox {
        position: relative;
        background: #F5F8FA;
        border: 1px solid #D9E1E8;
        border-radius: 10px;
        padding: 16px;
        transition: all .3s ease-in-out;
        z-index: 1;
        align-self: flex-start;
    }

    .plan_checkbox.checkbox_active_plan {
        background: #253139;
        border-color: #FFC803;
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
    }

    .plan_checkbox.checkbox_active_plan p {
        color: #FFFFFF;
    }

    .plan_checkbox p {
        color: #2B2B2B;
        margin: 0;
    }

    .check_circle {
        display: flex;
        position: absolute;
        top: 12px;
        right: 12px;
    }

    .check_circle img {
        width: 18px;
        height: 18px;
    }

    .monthly_checkbox_wrapper .check_circle {
        top: 22px;
    }

    .plan_checkbox:not(.checkbox_active_plan) .check_circle img:first-child {
        display: none;
    }

    .plan_checkbox.checkbox_active_plan .check_circle img:last-child {
        display: none;
    }

    .plan_checkbox p.free_trial {
        position: absolute;
        top: -11px;
        left: 12px;
        background: #FFC803;
        border-radius: 28px;
        padding: 4px 12px;
        font-family: 'SF Pro Display', 'Roboto', sans-serif;
        font-weight: 600;
        font-size: 12px;
        line-height: 14px;
        color: #000000;
    }

    .plan_checkbox .title {
        font-family: 'SF Pro Display', 'Roboto', sans-serif;
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;
    }

    .plan_checkbox p.price {
        margin: 6px 0;
        font-family: 'Inter', 'Roboto', sans-serif;
        font-size: 14px;
        line-height: 17px;
    }

    .plan_checkbox .month_price p.price {
        margin-bottom: 0 !important;
    }

    .plan_checkbox .month_price {
        font-family: 'SF Pro Display', 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
    }

    .plan_checkbox .month_price s {
        color: #596974;
    }

    .plan_checkbox.checkbox_active_plan .month_price s {
        color: #D9D9D9;
    }

    .plan_checkbox p.price_off {
        position: absolute;
        top: 44px;
        right: -1px;
        font-family: 'SF Pro Display', 'Roboto', sans-serif;
        font-weight: 600;
        font-size: 12px;
        line-height: 14px;
        color: #2B2B2B;
        padding: 5px;
        background: #FFC803;
        border-radius: 28px 0px 0px 28px;
    }

    .pro_pack_bottom {
        position: absolute;
        width: calc(50% - 6px);
        left: 0;
        bottom: -28px;
        padding-top: 16px;
        background: #F5F8FA;
        border: 1px solid #F5F8FA;
        border-radius: 0 0 10px 10px; 
        transform: translateY(0);
        transition: all .3s ease-in-out;  
        border: 1px solid #D9E1E8;
    } 

    .pro_pack_bottom p {
        font-family: 'SF Pro Display', 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        text-align: center;
        letter-spacing: -0.01em;
        color: #596974; 
        margin-bottom: 6px;
    }

    .pro_pack_bottom p span {
        font-weight: 600;
    }

    .checkbox_active_plan + .pro_pack_bottom {
        border-color: #FFC803;
    }

    .curr_plan {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 6px;
        background: #F5F8FA;
        border-top: 1px solid #D9E1E8;
        margin: 16px -16px -16px;
        border-radius: 0 0 9px 9px;
    }

    .curr_plan.hide_curr_label {
        display: none;
    }
    
    .monthly_checkbox_wrapper .curr_plan {
        margin-bottom: -26px;
    }

    .curr_plan p {            
        font-family: 'SF Pro Display', 'Roboto', sans-serif;
        font-weight: 600;
        font-size: 12px;
        line-height: 14px;
        text-align: center;
        letter-spacing: -0.01em;
        color: #2B2B2B !important;
        margin-left: 4px;
    }

    .checkbox_active_plan .curr_plan {
        border-color: #FFC803;
    }

    /* List */

    .list {            
        margin: 16px 0;
        text-align: left;
        padding: 0 20px;          
    }

    .list li {
        position: relative;
        font-weight: 400;
        font-size: 14px;
        line-height: 19px;
        color: #253139;
        font-family: 'SF Pro Text', 'SF Pro Display', 'Roboto', sans-serif;
        margin-bottom: 11px;
        margin-left: 30px;
        letter-spacing: -0.15px;
    }
    .list li::before {
        content: "";
        position: absolute;
        display: inline-block;
        top: 50%;
        transform: translateY(-50%);
        left: -30px;
        width: 16px;
        height: 16px;
        background: url(${settings.dir}/check_arr_yellow.svg) no-repeat center center;
        background-size: cover;
    }

    .list.plus_list li:nth-child(4),
    .list.plus_list li:nth-child(5),
    .list.plus_list li:nth-child(6) {
        color: #A0ADB6;
    }

    .list.plus_list li:nth-child(4)::before,
    .list.plus_list li:nth-child(5)::before,
    .list.plus_list li:nth-child(6)::before {
        width: 21px;
        height: 23px;
        background: url(${settings.dir}/pro_v.svg) no-repeat center center;
    }

    .features {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px;           
        border: 1px solid #D9E1E8;
        border-radius: 10px;
        z-index: 1;
        background: #FFFFFF;
        margin: 0 20px 12px;
        box-shadow: 0px 1px 3px rgba(19, 24, 33, 0.07);
        border-radius: 10px;
    }

    .features > div {
        display: flex;
        align-items: center;
    }

    .table_wrap {
        max-height: 0;
        padding-left: 20px;
        overflow: hidden;
        transition: max-height 0.5s ease-in-out;
        border-radius: 0 0 10px 10px;
    }

    .features.show_table {
        border-radius: 10px;
    }

    .features.show_table > div + img {
        transform: rotate(180deg) !important;
    }
    .features.show_table + .table_wrap {
      max-height: 2000px;
      border-top: 1px solid #F5F8FA;
    }

    .features p {
        font-family: 'Inter', 'Roboto', sans-serif;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        color: #008A00;
        margin: 0;
        margin-left: 7px;
    }

    /* TABLE */

    #plans_comparison_table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 10px;
    }

    #plans_comparison_table th,
    #plans_comparison_table td {
        font-family: 'SF Pro Display', 'Roboto', sans-serif;
    }

    #plans_comparison_table th:not(th:first-child) {
        padding-top: 14px;
    }

    #plans_comparison_table th:not(th:first-child),
    #plans_comparison_table td:not(td:first-child) {
        background: #F5F8FA;
    }

    #plans_comparison_table tr:first-child {
        margin-bottom: 10px;
    }

    #plans_comparison_table tr th:first-child {
        font-weight: 700;
        font-size: 18px;
        line-height: 20px;
        color: #253139;
    }

    #plans_comparison_table tr th:not(th:first-child) {
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        padding-bottom: 10px;
    }

    #plans_comparison_table tr th:nth-child(2) {
        color: #596974;
    }

    #plans_comparison_table tr th:nth-child(3) {
        color: #49BB54;
    }

    #plans_comparison_table tr th:nth-child(4) {
        color: #FFC803;
    }

    #plans_comparison_table tr:not(:first-child) {
        border-bottom: 1px solid #D9E1E8;
    }

    #plans_comparison_table td {
        border: none;
        padding: 10px 0;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        color: #596974;
    }

    #plans_comparison_table td:not(:first-child) {
        text-align: center;
        vertical-align: middle;
    }

    #plans_comparison_table td:not(:first-child) img {
        display: inline-block;
        vertical-align: middle;
    }

    #plans_comparison_table th:first-child,
    #plans_comparison_table td:first-child {
        padding-right: 16px;
        text-align: left;
    }

    #plans_comparison_table th:nth-child(2),
    #plans_comparison_table td:nth-child(2) {
        padding-left: 20px;
    }

    #plans_comparison_table th:nth-child(3),
    #plans_comparison_table td:nth-child(3) {
        padding-left: 15px;
        padding-right: 15px;
    }

    #plans_comparison_table th:nth-child(4),
    #plans_comparison_table td:nth-child(4) {
        padding-right: 23px;
    }

    /* fixed_div */

    .fixed_div {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;            
        background: #FFFFFF;
        box-shadow: 0px -2px 8px rgba(37, 49, 57, 0.1);
        z-index: 9999;
        text-align: center;
    }

    .fixed_div > div {
        padding: 10px 20px;
    }

    .fixed_div p {
        font-family: 'SF Pro Display', 'Roboto', sans-serif;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        color: #253139;
        margin-bottom: 10px;
    }

    .fixed_div button {
        all: unset;
        width: 100%;
        background: #49BB54;
        border-radius: 10px;
        padding: 18px 0;
        font-family: 'SF Pro Display', 'Roboto', sans-serif;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        text-align: center;
        letter-spacing: 0.38px;
        color: #FFFFFF;
        height: 70px;
        box-sizing: border-box;
        display: block;
    }

    @media only screen and (max-width: 410px) {
      .plan_checkbox p.price_off,
      .pro_pack_bottom p {
          font-size: 11px;
          white-space: nowrap;
      }
    }

    @media only screen and (max-width: 390px) {
        .plan_checkbox p.price_off,
        .pro_pack_bottom p {
            font-size: 10px;
        }
    }

    
    @media only screen and (max-width: 355px) {
        .plans_checkbox_container {
            padding: 0 10px;
        }

        #plans_comparison_table th:nth-child(3), #plans_comparison_table td:nth-child(3) {
            padding-left: 10px;
            padding-right: 10px;
        }
    }

    @media only screen and (max-width: 335px) {
        .plans_checkbox_container {
            padding: 0 5px;
        }

        .annual_checkbox_wrapper .plan_checkbox:first-child {
            margin-right: 5px;
        }

        #plans_comparison_table th:nth-child(2), #plans_comparison_table td:nth-child(2) {
            padding-left: 15px;
        }
    }
</style>
`;

  const stylesEl = document.createElement('style');
  stylesEl.innerHTML = styles;

  let scriptEl = document.createElement('script');
  scriptEl.src =
    'https://cdn.jsdelivr.net/npm/seamless-scroll-polyfill@latest/lib/bundle.min.js';
  scriptEl.async = false;

  const smallCheckSvg = `
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.02 8.26L4.4975 6.7375C4.36917 6.60917 4.21167 6.545 4.025 6.545C3.83833 6.545 3.675 6.615 3.535 6.755C3.40667 6.88333 3.3425 7.04667 3.3425 7.245C3.3425 7.44333 3.40667 7.60667 3.535 7.735L5.53 9.73C5.65833 9.85833 5.82167 9.9225 6.02 9.9225C6.21833 9.9225 6.38167 9.85833 6.51 9.73L10.4825 5.7575C10.6108 5.62917 10.675 5.47167 10.675 5.285C10.675 5.09833 10.605 4.935 10.465 4.795C10.3367 4.66667 10.1733 4.6025 9.975 4.6025C9.77667 4.6025 9.61333 4.66667 9.485 4.795L6.02 8.26ZM7 14C6.03167 14 5.12167 13.8161 4.27 13.4484C3.41833 13.0811 2.6775 12.5825 2.0475 11.9525C1.4175 11.3225 0.918867 10.5817 0.5516 9.73C0.183867 8.87833 0 7.96833 0 7C0 6.03167 0.183867 5.12167 0.5516 4.27C0.918867 3.41833 1.4175 2.6775 2.0475 2.0475C2.6775 1.4175 3.41833 0.918633 4.27 0.5509C5.12167 0.183633 6.03167 0 7 0C7.96833 0 8.87833 0.183633 9.73 0.5509C10.5817 0.918633 11.3225 1.4175 11.9525 2.0475C12.5825 2.6775 13.0811 3.41833 13.4484 4.27C13.8161 5.12167 14 6.03167 14 7C14 7.96833 13.8161 8.87833 13.4484 9.73C13.0811 10.5817 12.5825 11.3225 11.9525 11.9525C11.3225 12.5825 10.5817 13.0811 9.73 13.4484C8.87833 13.8161 7.96833 14 7 14Z" fill="#49BB54"/>
    </svg>
  `;

  waitFor(
    () => document.head,
    () => {
      document.head.appendChild(stylesEl);
      document.head.appendChild(scriptEl);
    },
    100
  );
  /*** STYLES / End ***/

  const html = `
  <section class="choose_plan">
    <div class="my_header">
      <div class="close_x">
        <img src="${settings.dir}/x_close.svg" alt="">
      </div>
      <h2>Start Playing Better<br>Golf Today</h2>
      <p class="choose_label">Choose a plan</p>
      <div class="toggle_plan">
        <span class="annual">Annual</span>
        <span class="monthly">Monthly</span>
        <div class="dark_bg"></div>
      </div>
    </div>
    <div class="plans_checkbox_container show_annual">
      <div class="annual_checkbox_wrapper">
        <div class="plan_checkbox checkbox_active_plan" data-pack="annual_pro">                    
          <p class="free_trial">7-day Free Trial</p>
          <div class="check_circle">
            <img src="${settings.dir}/check_circle_yellow_png.png" alt="">
            <img src="${settings.dir}/ellipse.svg" alt="">
          </div>
          <p class="title">Pro</p>
          <p class="price"><b>$99.99</b>/year</p>
          <p class="price_off">67% OFF*</p>
          <p class="month_price">(<s>$24.99</s> $8.33/month)</p>
          <div class="curr_plan hide_curr_label">
            ${smallCheckSvg}
            <p>Current plan</p>
          </div>
        </div>
        <div class="pro_pack_bottom">
          <p><span>*67%</span> OFF compared to monthly</p>
        </div>                
        <div class="plan_checkbox" data-pack="annual_plus">
          <div class="check_circle">
            <img src="${settings.dir}/check_circle_yellow_png.png" alt="">
            <img src="${settings.dir}/ellipse.svg" alt="">
          </div>
          <p class="title">Plus</p>
          <p class="price"><b>$49.99</b>/year</p>
          <p class="month_price">($4.16/month)</p>
          <div class="curr_plan hide_curr_label">
            ${smallCheckSvg}
            <p>Current plan</p>
          </div>
        </div>
      </div>
      <div class="monthly_checkbox_wrapper">
        <div class="plan_checkbox checkbox_active_plan" data-pack="monthly_pro">
          <div class="check_circle">
            <img src="${settings.dir}/check_circle_yellow_png.png" alt="">
            <img src="${settings.dir}/ellipse.svg" alt="">
          </div>
          <p class="title">Pro</p>
          <p class="price"><b>$24.99</b>/month</p>
          <div class="curr_plan hide_curr_label">
            ${smallCheckSvg}
            <p>Current plan</p>
          </div>
        </div>
      </div>
    </div>
    <ul class="list">
      <li>“Plays Like” distances with wind and elevation</li>
      <li>Green reading maps for 13,000+ courses</li>
      <li>Enhanced scorecard & stats</li>
      <li>Biggest video library of performance drills</li>
      <li>Stats comparison to your target handicap</li>
      <li>Relative Handicap for each facet of your game</li>
    </ul>
    <div class="plans_comparison_table_container">
      <div class="features">
        <div>
          <img src="${settings.dir}/golf-flag.svg" alt="">
          <p>Compare all features</p>
        </div>
        <img src="${settings.dir}/down_arr.svg" alt="">
      </div>
      <div class="table_wrap">
        <table id="plans_comparison_table">
        </table>
      </div>
    </div>
  </section>
  <div class="fixed_div">
    <div>
      <p>No commitment. Cancel anytime.</p>
      <button></button>
    </div>
  </div>
`;

  const drawTable = () => {
    // define an array of data
    const data = [
      { benefit: 'Distances to Greens & Hazards', free: true, plus: true },
      {
        benefit: 'GPS Rangefinder And Scorecard For Every Course In The World',
        free: true,
        plus: true,
      },
      { benefit: 'SwingU Handicap', free: true, plus: true },
      { benefit: 'Shot Tracking', free: true, plus: true },
      { benefit: 'Clubhouse Content Feed', free: true, plus: true },
      { benefit: 'Wind Speed & Elevation', free: false, plus: true },
      { benefit: '"Plays Like" Distances', free: false, plus: true },
      { benefit: 'Club Recommendation', free: false, plus: true },
      {
        benefit: 'Green-Reading Maps For 13,000+ Courses',
        free: false,
        plus: true,
      },
      { benefit: 'Enhanced Scorecard & Stats', free: false, plus: true },
      { benefit: 'Hole Insights & Hole Notes', free: false, plus: true },
      { benefit: 'No Ads ln-App', free: false, plus: true },
      { benefit: 'Giveaway Eligibility', free: false, plus: true },
      {
        benefit: 'Strokes Gained Stats vs. Target Handicap Benchmarks',
        free: false,
        plus: false,
      },
      {
        benefit:
          'Handicap Index for Each Facet of Your Game (Driving, Approach, Chip/Pitch, Sand & Putting)',
        free: false,
        plus: false,
      },
      {
        benefit: 'Personalized #1 Game Improvement Priority',
        free: false,
        plus: false,
      },
      { benefit: 'Personalized Prescriptive Drill', free: false, plus: false },
      {
        benefit:
          'Extensive Library of Performance Practice Drills, Premium Instructional Content and Informative Videos',
        free: false,
        plus: false,
      },
      {
        benefit: 'Tour-Level Stats & Analysis Web Portal',
        free: false,
        plus: false,
      },
    ];

    // define a function to create a table cell with an arrow or dash, depending on the value of the given property
    function createArrowCell(value, color) {
      const cell = document.createElement('td');
      const img = document.createElement('img');

      img.src = value
        ? `${settings.dir}/check_circle_${color}.svg`
        : `${settings.dir}/minus_circle.svg`;

      cell.appendChild(img);
      return cell;
    }

    // get a reference to the table element in the HTML document
    const table = document.getElementById('plans_comparison_table');

    // create the table header row
    const headerRow = document.createElement('tr');
    const headerNames = ['What do you get', 'Free', 'Plus', 'Pro'];

    // loop through each header name and create a table cell for it
    headerNames.forEach((headerName) => {
      const headerCell = document.createElement('th');
      headerCell.textContent = headerName;
      headerRow.appendChild(headerCell);
    });

    // add the header row to the table
    table.appendChild(headerRow);

    // create a table row for each item in the data array
    data.forEach((item) => {
      const row = document.createElement('tr');

      // create a table cell for the "What do you get" column
      const benefitCell = document.createElement('td');
      benefitCell.textContent = item.benefit;
      row.appendChild(benefitCell);

      // create a table cell for the "Free" column
      const freeCell = createArrowCell(item.free, 'gray');
      row.appendChild(freeCell);

      // create a table cell for the "Plus" column
      const plusCell = createArrowCell(item.plus, 'green');
      row.appendChild(plusCell);

      // create a table cell for the "Pro" column, using the same function as above
      const proCell = createArrowCell(true, 'yellow');
      row.appendChild(proCell);

      // add the row to the table
      table.appendChild(row);
    });
  };

  /********* Custom Code **********/
  waitFor(
    () => document.querySelector('.antialiased'),
    () => {
      init();
    },
    100
  );

  function init() {
    console.log('init');
    gaEvent('exp_pick_a_plan_start');

    document
      .querySelector('.antialiased')
      .insertAdjacentHTML('afterbegin', html);

    const togglePlanEl = document.querySelector('.toggle_plan');
    const plansCheckboxContainer = document.querySelector(
      '.plans_checkbox_container'
    );
    const payBtn = document.querySelector('.fixed_div button');

    waitFor(
      () => document.querySelector('.subscription-boxes'),
      () => {
        payBtn.innerText = 'Start 7-day free trial';

        const isSubscriptionActive = document.querySelector(
          '[dusk="upgrade-button--manage-subscription"]'
        );

        if (isSubscriptionActive) {
          payBtn.innerText = 'Manage subscriptions';

          document
            .querySelector('.annual_checkbox_wrapper')
            .classList.add('subs');

          if (
            document.querySelector(
              '[dusk="segmented-control--annual"][data-active="true"]'
            )
          ) {
            if (
              document.querySelector(
                '.checkbox_active_plan[data-pack="monthly_pro"]'
              )
            ) {
              document
                .querySelector('.checkbox_active_plan[data-pack="monthly_pro"]')
                .classList.remove('checkbox_active_plan');
            }

            if (
              document.querySelector(
                '[dusk="subscription-option--pro"][data-active="true"]'
              )
            ) {
              document
                .querySelector('[data-pack="annual_pro"] .hide_curr_label')
                .classList.remove('hide_curr_label');
            } else if (
              document.querySelector(
                '[dusk="subscription-option--plus"][data-active="true"]'
              )
            ) {
              document.querySelector('.list').classList.add('plus_list');

              document
                .querySelector('.checkbox_active_plan')
                .classList.remove('checkbox_active_plan');
              document
                .querySelector('[data-pack="annual_plus"]')
                .classList.add('checkbox_active_plan');

              document
                .querySelector('[data-pack="annual_plus"] .hide_curr_label')
                .classList.remove('hide_curr_label');
            }
          } else if (
            document.querySelector(
              '[dusk="segmented-control--monthly"][data-active="true"]'
            )
          ) {
            togglePlanEl.classList.add('monthly_active');
            plansCheckboxContainer.classList.remove('show_annual');
            if (
              document.querySelector(
                '.checkbox_active_plan[data-pack="annual_pro"]'
              )
            ) {
              document
                .querySelector('.checkbox_active_plan[data-pack="annual_pro"]')
                .classList.remove('checkbox_active_plan');
            }

            document
              .querySelector(
                '.monthly_checkbox_wrapper .plan_checkbox .hide_curr_label'
              )
              .classList.remove('hide_curr_label');
          }
        }

        // Annual/Monthly switcher
        togglePlanEl.addEventListener('click', (event) => {
          const target = event.target;
          if (target.tagName !== 'SPAN') return false;

          if (target.classList.contains('annual')) {
            // the 'annual' span was clicked
            togglePlanEl.classList.remove('monthly_active');
            plansCheckboxContainer.classList.add('show_annual');

            gaEvent(
              'exp_pick_a_plan_annual_tab',
              'Annual',
              'Tab',
              'Сhoice of subscription period'
            );

            if (isSubscriptionActive) return false;

            payBtn.innerText = 'Start 7-day free trial';

            if (
              document.querySelector(
                '.annual_checkbox_wrapper .checkbox_active_plan'
              ).dataset.pack === 'annual_plus'
            ) {
              payBtn.innerText = 'Continue';

              if (!document.querySelector('.plus_list')) {
                document.querySelector('.list').classList.add('plus_list');
              }
            }
          } else if (target.classList.contains('monthly')) {
            // the 'monthly' span was clicked
            togglePlanEl.classList.add('monthly_active');
            plansCheckboxContainer.classList.remove('show_annual');

            if (!isSubscriptionActive) {
              payBtn.innerText = 'Continue';
            }

            document.querySelector('.plus_list')?.classList.remove('plus_list');

            gaEvent(
              'exp_pick_a_plan_monthly_tab',
              'Monthly',
              'Tab',
              'Сhoice of subscription period'
            );
          }
        });

        // plans checkbox
        plansCheckboxContainer
          .querySelector('.annual_checkbox_wrapper')
          .addEventListener('click', (event) => {
            const target = event.target.closest('[data-pack]');

            if (!target || isSubscriptionActive) return false;

            if (target.dataset.pack === 'annual_pro') {
              payBtn.innerText = 'Start 7-day free trial';

              gaEvent(
                'exp_pick_a_plan_pro',
                'Pro',
                'Button',
                'Сhoice of subscription type'
              );

              document.querySelector('.list').classList?.remove('plus_list');
            } else {
              payBtn.innerText = 'Continue';

              document.querySelector('.list').classList.add('plus_list');

              gaEvent(
                'exp_pick_a_plan_plus',
                'Plus',
                'Button',
                'Сhoice of subscription type'
              );
            }

            document
              .querySelector('.checkbox_active_plan')
              .classList.remove('checkbox_active_plan');

            target.classList.add('checkbox_active_plan');
          });

        // click on fixed btn
        payBtn.addEventListener('click', () => {
          const isMonthlyActive = document
            .querySelector('.toggle_plan')
            .classList.contains('monthly_active');

          gaEvent(
            'exp_pick_a_plan_cta',
            payBtn.innerText,
            'Button',
            'Bottom of screen'
          );

          if (isSubscriptionActive) {
            isSubscriptionActive.dispatchEvent(new Event('click'));
          } else {
            if (isMonthlyActive) {
              document
                .querySelector('[dusk="segmented-control--monthly"]')
                .dispatchEvent(new Event('click'));
            } else {
              const selectedPack = document.querySelector(
                '.annual_checkbox_wrapper .checkbox_active_plan'
              ).dataset.pack;

              document
                .querySelector('[dusk="segmented-control--annual"]')
                .dispatchEvent(new Event('click'));

              setTimeout(() => {
                if (selectedPack === 'annual_pro') {
                  document
                    .querySelector('[dusk="subscription-option--pro"]')
                    .dispatchEvent(new Event('click'));
                } else {
                  document
                    .querySelector('[dusk="subscription-option--plus"]')
                    .dispatchEvent(new Event('click'));
                }
              }, 50);
            }

            setTimeout(() => {
              document
                .querySelector('.fixed.z-20 [dusk]')
                .dispatchEvent(new Event('click'));
            }, 100);
          }
        });
      },
      100
    );

    drawTable();

    waitFor(
      () =>
        typeof seamless !== 'undefined' &&
        typeof seamless.scrollBy === 'function',
      () => {
        const features = document.querySelector('.features');

        features.addEventListener('click', () => {
          features.classList.toggle('show_table');

          if (features.classList.contains('show_table')) {
            const tableRow = document.querySelector(
              '#plans_comparison_table tr:nth-child(4)'
            );
            const rect1 = features.getBoundingClientRect();
            const rect2 = tableRow.getBoundingClientRect();

            // Calculate the distance in pixels between the two elements
            const distance = Math.abs(rect1.top - rect2.top);

            // Scroll to the calculated distance
            seamless.scrollBy(window, {
              behavior: 'smooth',
              top: distance,
              left: 0,
            });
          }

          gaEvent(
            'exp_pick_a_plan_compare',
            'drop down list',
            'Button',
            'What do you get'
          );
        });
      },
      100
    );

    // click on close x
    waitFor(
      () => document.querySelector('.close_x'),
      () => {
        document.querySelector('.close_x').addEventListener('click', () => {
          document
            .querySelector('[dusk="gps-upgrade-container"] .absolute.top-xs')
            .click();

          gaEvent(
            'exp_pick_a_plan_close',
            'Close',
            'Button',
            'Top of the page'
          );
        });
      },
      1000
    );
  }

  // *** Utils *** //
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
      console.log('eventFire', objData);
      if (!settings.debug) {
        dataLayer.push(objData);
      }
    } catch (e) {
      console.log('Event Error:', e);
    }
  }
}

// *** Utils *** //
function waitFor(condition, cb, ms = 1000) {
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
