const orig = console.log;
console.log = function () {
  orig.apply(console, arguments);
  navigator.sendBeacon(
    'https://console.wiredgeese.com/log/',
    JSON.stringify(arguments)
  );
};

const err = console.error;
console.error = function () {
  err.apply(console, arguments);
  navigator.sendBeacon(
    'https://console.wiredgeese.com/log/',
    JSON.stringify(arguments)
  );
};

console.log('initExp: newUpgrade');

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

if (
  location.href.includes('/upgrade/player') &&
  location.href.includes('hypothesis-3')
) {
  handleUpgradePage();
} else if (location.href.includes('/home')) {
  handleHomepage();
}

function handleHomepage() {
  console.log('initHomepage: ' + location.href);
  waitFor(
    () =>
      document.body &&
      document.querySelector('.antialiased .relative.flex-col'),
    () => {
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
        .lav-slide__image img {
          position: absolute;
          min-height: 100%;
          min-width: 100%;
          object-fit: cover;
          object-position: right;
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
                  <img src='${settings.dir}/img/slide4.png' alt='' />
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
      .querySelector('.lav-unlock')
      .addEventListener('click', function () {
        if (document.querySelector('[data-stripe-checkout-url]')) {
          const url = document.querySelector('[data-stripe-checkout-url]')
            .dataset.stripeCheckoutUrl;

          pushDataLayer(
            'exp_stripe_v_utsp_usp',
            'Unlock SwingPro',
            'Button',
            'Upgrade to SwingU Pro'
          );

          window.open(url);
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
