console.log('initExp');

(function () {
  /********* exp **********/
  const exp = {
    dir: 'https://flopsi69.github.io/crs/buzzpatch/newHome',
    observer: {
      mutation: false,
      intersection: false,
    },
    clarity: {
      enable: true,
      params: ['set', 'lp_screen', 'variant_1'],
    },
    debug: false,
  };

  // Observers
  if (exp.observer.mutation) {
    initMutation((el) => {
      console.log(el);
    });
  }

  /*** STYLES / Start ***/
  const styles = `
    .shipping-noti.js-mobile {
      display: none;
    }
    .bitepatch-template header nav .js-btn.btn-primary {
      padding: 14px 21px;
      color: #FFF;
      text-align: center;
      font-size: 16px;
      font-weight: 700;
      text-transform: uppercase;
      margin: 0;
    }
    .navbar .row.no-gutters {
      align-items: center;
    }
    .lav-trust {
      display: flex;
      justify-content: center;
      align-items: center;
      background: #fff;
      padding: 2px 19px;
    }
    .lav-trust__info {
      color: var(--Text, #212529);
      text-align: center;
      font-size: 14px;
      font-style: normal;
      line-height: 18px;
      font-weight: 400;
    }
    .lav-trust__title {
      font-weight: 700;
    }
    .lav-trust__caption {
      font-size: 12px;
    }
    .lav-trust__stars {
      margin: 0 8px;
    }
    .js-heading.js-mobile h1 {
      color: var(--Black, #0C0B0B);
      text-align: center;
      font-size: 32px;
      font-style: normal;
      font-weight: 400;
      line-height: 40px; 
      letter-spacing: 0;
      margin-bottom: 0;
    }

    .lav-benefits {
      display: flex;
      flex-flow: column;
      align-items: center;
      margin-top: 16px;
      color: var(--Text, #212529);
      text-align: center;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 24px;
    }
    .trust-rating {
      display: none;
    }
    .lav-benefits__item  {
      display: flex;
      align-items: center;
    }
    .lav-benefits__item img {
      margin-right: 12px;
    }
    .hand-banner img {
      margin-bottom: -20%;
    }
    .js-heading .hand-banner .js-btn.btn-primary {
      margin: 0 auto 16px;
      padding: 16px 32px;
      color: #FFF;
      text-align: center;
      font-size: 32px;
      font-weight: 400;
      line-height: 1; 
      text-transform: uppercase;
      letter-spacing: 0;
      border-radius: 100px;
      background: var(--Primary, #FF3C7F);
      box-shadow: 0px 4px 15px 0px rgba(72, 67, 69, 0.51);
      max-width: 311px;
      font-family: DINEngschrift LT,Roboto,sans-serif;
    }
    .lav-learn {
      display: flex;
      flex-flow: column;
      align-items: center;
      color: var(--Black, #0C0B0B);
      text-align: center;
      font-family: DINEngschrift LT,Roboto,sans-serif;
      font-size: 22px;
      font-weight: 400;
      line-height: 28px;
      text-transform: uppercase;
      margin-top: 16px;
      margin-bottom: -10px;
    }
    .lav-learn svg {
      margin-top: 4px;
    }
    .bitepatch-template .js-logo img {
      width: 56px;
    }
    .bitepatch-template .js-logo {
      padding: 0;
    }
    header .navbar {
      padding-top: 12px!important;
      padding-bottom: 12px!important;
    }

    .lav-why {
      position: relative;
      padding-bottom: 42px;
      margin-top: -26%;
      text-align: center;
      z-index: 1;
    }
    .lav-why .lav-why__image {
      margin-top: 24px;
      max-width: 93%;
      margin-left: -2%;
    }
    .lav-why__scroll {
      display: none;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      border-radius: 12px;
      background: rgba(217, 217, 217, 0.80);
      padding: 20px 5px;
      color: #000;
      text-align: center;
      font-family: 'DINEngschrift LT', sans-serif;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px;
      max-width: 106px;
      width: 100%;
      transition: opacity 0.45s;
      box-shadow: 0 0 0 0 rgba(217, 217, 217, 0.4);
    }
    .lav-why__scroll.done {
      animation: pulse 2.5s infinite;
    }
    .lav-why__scroll.active {
      display: block;
    }
    @keyframes pulse {
      0% {
          box-shadow: 0 0 0 0 rgba(217, 217, 217, 1);
      }
      70% {
          box-shadow: 0 0 0 10px rgba(217, 217, 217, 0);
      }
      100% {
          box-shadow: 0 0 0 50px rgba(217, 217, 217, 0);
      }
    }
    .lav-why__scroll svg {
      display: block;
      margin: 0 auto 12px;
    }
    .lav-why__title {
      color: var(--Black, #0C0B0B);
      text-align: center;
      font-family: DINEngschrift LT,Roboto,sans-serif;
      font-size: 22px;
      font-style: normal;
      font-weight: 700;
      line-height: 30px; 
    }
    header .wave-bg {
      filter: invert(0%) sepia(100%) saturate(2%) hue-rotate(134deg) brightness(108%) contrast(101%);
    }

    .lav-protection {
      margin-bottom: 50px;
    }
    .lav-protection > div{
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 28px;
    }
    .lav-protection > div svg:not(.hint){
      width: 15%;
      min-width: 54px;
      max-width: 54px;
    }
    .lav-protection > div h3{
      width: 80%;
      margin-left: 15px;
      font-family: "Roboto", sans-serif;
      font-weight: 600;
      font-size: 21px !important;
      line-height: 26px !important;
      letter-spacing: -0.03em;
      color: #0C0B0B;        
    }
    .lav-protection > div h3 > span{
      position: relative;
      display: inline-block;
    }
    .lav-protection .hint{
      position: absolute;
      right: -22px;
      bottom: 4px;
    }
    .lav-protection > p:not(:last-child){
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      font-size: 18px !important;
      line-height: 24px !important;
      color: #515151;
      margin: 0;
    }
    .lav-protection > p:last-child{
      border: 2px solid #FF3C81;
      border-radius: 6px;
      padding: 15px 12px;
      font-family: 'DINEngschrift LT', sans-serif;
      font-weight: 400;
      font-size: 20px !important;
      line-height: 1.1;
      text-align: center;
      text-transform: uppercase;
      color: #0C0B0B;
      margin: 20px 0 0;
      letter-spacing: 0;
    }
    .lav-protection > p:last-child span{
      color: #FF3C81;
    }
    .lav-protection .hidden_text{
      position: absolute;
      opacity: 0;
      pointer-events: none;
      font-weight: 400;
      font-size: 12px;
      line-height: 17px;
      color: #212529;
      padding: 12px;
      background: #F9F8F6;
      box-shadow: 0px 0.688073px 4.06px rgba(0, 0, 0, 0.07), -6px 7.26px 20.4px rgba(0, 0, 0, 0.1);
      border-radius: 7px;
      width: 163px;
      left: -76px;
      top: -22px;
      z-index: 1;
    }
    .lav-protection .hidden_text.toggle_opacity {
        opacity: 1;
    }
    @media (max-width: 360px) {
      .lav-protection > div h3{
          font-size: 18px !important;
      }
      .lav-protection > p:not(:last-child){
          font-size: 15px !important;
      }
      .lav-protection > p:last-child{
          font-size: 16px !important;
      }
      .lav-protection .hidden_text{
          left: -93px;
      }
    }

    header .navbar.fixed-top {
      padding: 5px 12px!important;
    }

    .effectiveness {
      padding-bottom: 10px;
    }
    .lav-solve {
      background: var(--Background-2, #F9F8F6);
      padding: 40px 0;
      margin-bottom: 30px;
    }
    .lav-solve__title {
      color: var(--Black, #0C0B0B);
      text-align: center;
      font-size: 22px;
      font-style: normal;
      font-weight: 600;
      line-height: 130%;
    }
    .lav-solve__title .lav-mark {
      background: var(--Primary, #FF3C7F);
      display: block;
      padding: 4px 10px;
      color: #FFF;
      text-align: center;
      font-size: 40px;
      font-style: normal;
      font-weight: 400;
      line-height: 110%; /* 44px */
      letter-spacing: 0.8px;
      text-transform: uppercase;
      margin: 6px 0;
      font-family: 'DINEngschrift LT', sans-serif;
    }
    .lav-accordion {
      margin-top: 28px;
      padding: 0 16px;
    }
    .lav-accordion__item {
      border-radius: 10px;
      border: 1px solid rgba(255, 60, 127, 0.10);
      background: var(--White, #FFF);
    }
    .lav-accordion__item + .lav-accordion__item {
      margin-top: 8px;
    }
    .lav-accordion__head {
      position: relative;
      color: var(--Text, #212529);
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;
      padding: 16px 20px;
    }
    .lav-accordion__head:before {
      content: '';
      position: absolute;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background-color: #FF3C7F;
      left: -3px;
      top: 24px;
    }
    .lav-accordion__head span {
      font-weight: 700;
    }
    .lav-accordion__body {
      display: none;
      position: relative;
      padding: 17px 20px 20px;
    }
    .lav-accordion__item.active .lav-accordion__body {
      display: block;
    }
    .lav-accordion__body:before {
      content: '';
      position: absolute;
      top: 0;
      left: 16px;
      height: 1px;
      right: 16px;
      background: rgba(255, 60, 127, 0.10);
    }
    .lav-accordion__body div {
      margin: 0;
      color: var(--Body-text, #515151);
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
    }
    .js-btn.btn-primary.lav-get {
      display: block;
      margin-top: 16px;
      color: var(--White, #FFF);
      text-align: center;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 24px;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      padding: 22px 0 20px;
    }
  `;

  const stylesEl = document.createElement('style');
  stylesEl.innerHTML = styles;
  waitFor(
    () => document.head,
    () => {
      document.body.appendChild(stylesEl);
    },
    100
  );
  /*** STYLES / End ***/

  /********* Custom Code **********/
  init();
  function init() {
    console.log('init');

    handleJumb();
    handleWhyLove();
    handleProtection();
    handleSolve();

    $('#getNow .days').src = `${exp.dir}/img/reviews.svg`;
  }

  function handleJumb() {
    $('.bitepatch-template .js-logo img').src = `${exp.dir}/img/logo.svg`;
    $('.js-heading.js-mobile h1').innerHTML =
      "100% Mosquito Protection,<br/>Guaranteed or It's Free! ";

    const benefitsEl = `
      <div class='lav-benefits'>
        <div class='lav-benefits__item'>
          <img src='${exp.dir}/img/benefit1.svg' />
          Safe for kids (0+)
        </div>
        <div class='lav-benefits__item'>
          <img src='${exp.dir}/img/benefit2.svg' />
          All natural content & chemical free
        </div>
        <div class='lav-benefits__item'>
          <img src='${exp.dir}/img/benefit3.svg' />
          Effective for up to 12 hours
        </div>
      </div>
    `;
    $('.js-heading.js-mobile h1').insertAdjacentHTML('afterend', benefitsEl);

    // const reviewsCount = Array.from($$('.jdgm-histogram__frequency')).reduce(
    //   (acc, el) =>
    //     acc + parseInt(el.innerText.replace('(', '').replace(')', '')),
    //   0
    // );

    const trustEl = `
      <div class='lav-trust'>
        <div class='lav-trust__info'>
          <div class='lav-trust__title'>Excellent</div>
          <div class='lav-trust__caption'>2,367&nbsp;Reviews</div>
        </div>
        <img class='lav-trust__stars' src='${exp.dir}/img/trust-stars.svg' />
        <img class='lav-trust__logo' src='${exp.dir}/img/trust-logo.svg' />
      </div>
    `;
    $('.shipping-noti').insertAdjacentHTML('beforebegin', trustEl);

    $('.hand-banner img').src = `${exp.dir}/img/banner.png`;
    $('.hand-banner').insertAdjacentHTML(
      'beforeend',
      `
      <div class='lav-learn'>
        Learn More
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="23" viewBox="0 0 16 23" fill="none">
          <path d="M3 6L8 11L13 6" stroke="#FF3C7F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M3 13L8 18L13 13" stroke="#FF3C7F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      `
    );
  }

  function handleWhyLove() {
    const elOld = `
      <div class='lav-why'>
        <div class='lav-why__title'>Why kids love BuzzPatch</div>

        <div class='lav-why__graph'>
          <div class='lav-why__item'>
            <div class='lav-why__item-icon'>
              <img src='${exp.dir}/img/why1.svg' />
            </div>
            <div class='lav-why__item-info'>
              <div class='lav-why__item-title'>Fun emoji patches.</div>
              <div class='lav-why__item-caption'>Kids love our design</div>
            </div>
          </div>

          <div class='lav-why__item'>
            <div class='lav-why__item-icon'>
              <img src='${exp.dir}/img/why2.svg' />
            </div>
            <div class='lav-why__item-info'>
              <div class='lav-why__item-title'>>Amazing smell.</div>
              <div class='lav-why__item-caption'Uses Citronella and Geraniol Oils</div>
            </div>
          </div>

          <div class='lav-why__item'>
            <div class='lav-why__item-icon'>
              <img src='${exp.dir}/img/why3.svg' />
            </div>
            <div class='lav-why__item-info'>
              <div class='lav-why__item-title'>Easy to use.</div>
              <div class='lav-why__item-caption'>Goes on clothes, not skin</div>
            </div>
          </div>

          <div class='lav-why__item'>
            <div class='lav-why__item-icon'>
              <img src='${exp.dir}/img/why4.svg' />
            </div>
            <div class='lav-why__item-info'>
              <div class='lav-why__item-title'>Effective for 12h.</div>
              <div class='lav-why__item-caption'>Forget about reapplying during day</div>
            </div>
          </div>
        </div>
        
        <div class='lav-why'></div>
        <div class='lav-why'></div>
        <div class='lav-why'></div>

      </div>
    `;

    const el = `
      <div class='lav-why'>
        <div class='lav-why__scroll'>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="42" viewBox="0 0 32 42" fill="none">
            <path d="M8.35116 35.2714C10.608 39.1793 14.8134 41.6069 19.3262 41.6069C26.3145 41.6069 32 35.9215 32 28.9332V19.0101C32 17.2301 30.5519 15.782 28.7719 15.782C28.0631 15.782 27.407 16.0116 26.874 16.4003C26.5115 15.0143 25.2485 13.9886 23.7504 13.9886C23.0009 13.9886 22.3102 14.2454 21.7617 14.6756C21.3091 13.439 20.1204 12.5539 18.7289 12.5539C18.0659 12.5539 17.4487 12.755 16.9355 13.0991V6.81502C16.9355 5.03503 15.4874 3.58691 13.7073 3.58691C11.9273 3.58691 10.4792 5.03503 10.4792 6.81502V23.9292C10.4792 24.1493 10.3502 24.3514 10.1507 24.4443C9.88192 24.5692 9.56751 24.47 9.41937 24.2132L7.26687 20.485C5.98136 18.2585 3.12414 17.4929 0.897448 18.7784C0.482599 19.0179 0.185825 19.4047 0.0618174 19.8674C-0.0621092 20.3302 0.00160132 20.8135 0.241166 21.2284L8.35116 35.2714ZM1.44768 20.2387C1.46207 20.1852 1.50286 20.0856 1.61484 20.021C2.11225 19.7338 2.66419 19.5871 3.22353 19.5871C3.50389 19.5871 3.7862 19.624 4.0642 19.6985C4.89706 19.9216 5.59317 20.4558 6.02427 21.2025L8.17677 24.9307C8.69937 25.8359 9.80813 26.1859 10.7558 25.7453C11.4593 25.4181 11.9139 24.7053 11.9139 23.9294V6.81502C11.9139 5.82612 12.7184 5.02162 13.7073 5.02162C14.6962 5.02162 15.5007 5.82612 15.5007 6.81502V20.0861C15.5007 20.4823 15.8219 20.8035 16.2181 20.8035C16.6143 20.8035 16.9355 20.4824 16.9355 20.0861V15.782C16.9355 14.7931 17.74 13.9886 18.7289 13.9886C19.7178 13.9886 20.5223 14.7931 20.5223 15.782V20.0861C20.5223 20.4823 20.8434 20.8035 21.2397 20.8035C21.6359 20.8035 21.9571 20.4824 21.9571 20.0861V17.2167C21.9571 16.2278 22.7616 15.4233 23.7505 15.4233C24.7394 15.4233 25.5439 16.2278 25.5439 17.2167V20.4448C25.5439 20.841 25.865 21.1622 26.2613 21.1622C26.6575 21.1622 26.9787 20.8411 26.9787 20.4448V19.0101C26.9787 18.0212 27.7832 17.2167 28.7721 17.2167C29.761 17.2167 30.5655 18.0212 30.5655 19.0101V28.9332C30.5655 35.1304 25.5236 40.1722 19.3263 40.1722C15.3244 40.1722 11.5952 38.0194 9.59376 34.5539L1.4836 20.511C1.41891 20.399 1.43338 20.2923 1.44768 20.2387Z" fill="black"/>
            <path d="M18.5951 10.5316C18.7097 10.5994 18.8355 10.6316 18.9596 10.6316C19.2049 10.6316 19.4439 10.5057 19.5778 10.2792C20.196 9.23362 20.5229 8.03564 20.5229 6.8149C20.5229 3.05713 17.4657 0 13.708 0C9.95019 0 6.89307 3.05713 6.89307 6.8149C6.89307 8.03101 7.21747 9.22493 7.83125 10.2676C8.0323 10.6091 8.47209 10.7229 8.81332 10.5219C9.15479 10.3209 9.26856 9.88121 9.06759 9.53982C8.58359 8.71752 8.32769 7.77527 8.32769 6.8149C8.32769 3.84822 10.7412 1.4347 13.7079 1.4347C16.6746 1.4347 19.0881 3.84822 19.0881 6.8149C19.0881 7.77885 18.8304 8.72435 18.3427 9.54901C18.1411 9.89007 18.2542 10.3299 18.5951 10.5316Z" fill="black"/>
            <path d="M23.3599 8.28034C23.0797 8.00023 22.6256 8.00023 22.3453 8.28034C22.0652 8.56046 22.0652 9.01464 22.3453 9.29484L25.7528 12.7023C25.8929 12.8424 26.0765 12.9124 26.26 12.9124C26.4436 12.9124 26.6272 12.8424 26.7673 12.7023L30.1747 9.29484C30.4548 9.01472 30.4548 8.56054 30.1747 8.28034C29.8945 8.00023 29.4404 8.00023 29.1602 8.28034L26.9773 10.4632V2.44913L29.1602 4.63195C29.3003 4.77204 29.4838 4.84209 29.6674 4.84209C29.8511 4.84209 30.0346 4.77204 30.1747 4.63195C30.4548 4.35183 30.4548 3.89765 30.1747 3.61746L26.7674 0.210086C26.4872 -0.0700287 26.0331 -0.0700287 25.7528 0.210086L22.3453 3.61754C22.0652 3.89765 22.0652 4.35183 22.3453 4.63203C22.6255 4.91214 23.0796 4.91214 23.3599 4.63203L25.5427 2.44921V10.4632L23.3599 8.28034Z" fill="black"/>
          </svg>
          Scroll to learn about Buzzpatch
        </div>
        <div class='lav-why__title'>Why kids love BuzzPatch</div>

        <img class='lav-why__image' src='${exp.dir}/img/why-love.png' />
      </div>
    `;

    $('#flowers').insertAdjacentHTML('beforebegin', el);
    $('#flowers').insertAdjacentElement(
      'beforebegin',
      $('header .wave-bg').cloneNode(true)
    );

    $('.lav-learn').addEventListener('click', (e) => {
      e.preventDefault();
      pushDataLayer(
        'exp_lp_screen_b_mf_lm',
        'Learn more',
        'Button',
        'Main Face'
      );
      $('.lav-why__scroll').classList.add('active');
      $('.lav-why').scrollIntoView({ behavior: 'smooth', block: 'end' });
    });

    const obs = initIntersection(
      $('.lav-why__scroll'),
      (entry) => {
        if (entry.isIntersecting && $('.lav-why__scroll.active')) {
          obs.disconnect();
          $('.lav-why__scroll').classList.add('done');
          setTimeout(() => {
            $('.lav-why__scroll').style.opacity = '0';
            setTimeout(() => {
              $('.lav-why__scroll').remove();
            }, 500);
          }, 5000);
        }
        console.log('entry', entry);
      },
      { rootMargin: '0px', threshold: 1 }
    );

    let time = 0;
    initIntersection(
      $('.lav-why'),
      (entry) => {
        if (entry.isIntersecting) {
          time = entry.time;
        } else if (time > 0) {
          pushDataLayer(
            'exp_lp_screen_v_wklbp_ft',
            parseInt(entry.time - time),
            'Visibility',
            'Why kids love BuzzPatch'
          );
          time = 0;
        }
      },
      { threshold: 0.1 }
    );
  }

  function handleProtection() {
    let el = `
      <div class="lav-protection">
        <div>
          <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28.582 27.1055C28.582 27.9799 29.2896 28.6875 30.1641 28.6875H42.8203C43.6948 28.6875 44.4023 27.9799 44.4023 27.1055V11.0742C44.4023 10.1998 43.6948 9.49219 42.8203 9.49219H30.1641C29.2896 9.49219 28.582 10.1998 28.582 11.0742V27.1055Z" fill="#FF3C7F"/>
            <path d="M41.2383 6.32812V3.16406H42.8203C43.6948 3.16406 44.4023 2.45647 44.4023 1.58203C44.4023 0.70759 43.6948 0 42.8203 0H30.1641C29.2896 0 28.582 0.70759 28.582 1.58203C28.582 2.45647 29.2896 3.16406 30.1641 3.16406H31.7461V6.32812H41.2383Z" fill="#FCBC4D"/>
            <path d="M33.3281 35.0156H39.6562C40.5307 35.0156 41.2383 34.308 41.2383 33.4336V31.8516H31.7461V33.4336C31.7461 34.308 32.4537 35.0156 33.3281 35.0156Z" fill="#FF3C7F"/>
            <path d="M22.791 22.2539H25.418V15.9258H22.9339C14.6711 15.9258 7.29248 22.072 6.508 30.2976C5.60804 39.7331 13.0039 47.6719 22.254 47.6719H23.836V50.8359H14.3438C13.4694 50.8359 12.7618 51.5435 12.7618 52.418C12.7618 53.2924 13.4694 54 14.3438 54H39.6563C40.5307 54 41.2383 53.2924 41.2383 52.418C41.2383 51.5435 40.5307 50.8359 39.6563 50.8359H30.1641V47.6719H37.0965C37.6957 47.6719 38.2435 47.3333 38.5114 46.7974L39.6563 44.5078H45.9844C46.8581 44.5078 47.5665 43.7995 47.5665 42.9258C47.5665 42.0521 46.8581 41.3438 45.9844 41.3438C39.5757 41.3438 25.8554 41.3438 22.254 41.3438C16.8424 41.3438 12.4885 36.8153 12.7751 31.3412C13.0439 26.2082 17.6511 22.2539 22.791 22.2539Z" fill="#FCBC4D"/>
          </svg>
          <h3>
            Scientifically proven to <br> provide better protection than other mosquito 
            <span>repellants
              <svg class="hint" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_752_9110" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="1" y="1" width="14" height="14">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.33301 8.00065C1.33301 4.32065 4.31967 1.33398 7.99967 1.33398C11.6797 1.33398 14.6663 4.32065 14.6663 8.00065C14.6663 11.6807 11.6797 14.6673 7.99967 14.6673C4.31967 14.6673 1.33301 11.6807 1.33301 8.00065ZM2.66634 8.00065C2.66634 10.9407 5.05967 13.334 7.99967 13.334C10.9397 13.334 13.333 10.9407 13.333 8.00065C13.333 5.06065 10.9397 2.66732 7.99967 2.66732C5.05967 2.66732 2.66634 5.06065 2.66634 8.00065ZM8.66634 10.6673V12.0007H7.33301V10.6673H8.66634ZM5.45301 5.88732C5.81967 4.67398 7.03301 3.82732 8.40634 4.02732C9.56634 4.20065 10.4797 5.18065 10.6397 6.34065C10.7917 7.41634 10.1968 7.93538 9.62264 8.43635C9.51714 8.52839 9.41235 8.61982 9.31301 8.71398C9.23301 8.78732 9.15968 8.86065 9.09301 8.94065C9.08967 8.94398 9.08634 8.94899 9.08301 8.95398C9.07967 8.95898 9.07634 8.96398 9.07301 8.96732C9.00634 9.04732 8.93967 9.13398 8.88634 9.22732C8.87967 9.23732 8.87467 9.24732 8.86967 9.25732C8.86467 9.26732 8.85967 9.27732 8.85301 9.28732C8.73968 9.48732 8.66634 9.72065 8.66634 10.0007H7.33301C7.33301 9.66732 7.38634 9.39398 7.46634 9.16732C7.46926 9.15855 7.47091 9.15106 7.47239 9.14429C7.47429 9.13563 7.47593 9.12814 7.47967 9.12065C7.48301 9.11065 7.48801 9.10232 7.49301 9.09399C7.49801 9.08565 7.50301 9.07732 7.50634 9.06732C7.55301 8.94732 7.61301 8.83398 7.67301 8.73398C7.67634 8.72732 7.67967 8.72232 7.68301 8.71732C7.68634 8.71232 7.68968 8.70732 7.69301 8.70065C7.69301 8.69732 7.69467 8.69565 7.69634 8.69398C7.69801 8.69232 7.69968 8.69065 7.69968 8.68732C7.92673 8.34537 8.23124 8.11118 8.51601 7.89217C8.92523 7.57745 9.2937 7.29408 9.33301 6.76732C9.38634 6.12065 8.91967 5.50065 8.28634 5.36732C7.59967 5.22065 6.96634 5.62732 6.75301 6.22065C6.65967 6.47398 6.43967 6.66732 6.16634 6.66732H6.03301C5.62634 6.66732 5.33301 6.27398 5.45301 5.88732Z" fill="black"/>
                </mask>
                <g mask="url(#mask0_752_9110)">
                <rect width="16" height="16" fill="#FF3C7F"/>
                </g>
              </svg>
              <span class="hidden_text">Poseidon Sciences R&D <br> conducted research in 2021 <br> to compare the repellent <br> effect of Buzzpatch and <br> other experimental patches <br> against the common house <br> mosquito.</span>
            </span>
          </h3>
        </div>
        <p>Poseidon Science R&D conducted scientific research to compare BuzzPatch mosquito repellant with other commonly available repellants on the market.</p>
        <p>BuzzPatch stickers were scientifically proven to provide 16% better protection than next best alternatives.</p>
        <p>BuzzPatch provides <span>16% better protection for your family</span> than the next best repellant of similar kind on the market</p>
      </div>      
    `;

    document
      .querySelectorAll('.js-mobile.effectiveness .container .row')[0]
      .insertAdjacentHTML('beforebegin', el);

    document
      .querySelector('.lav-protection .hint')
      ?.addEventListener('click', (e) => {
        e.stopPropagation();
        document
          .querySelector('.lav-protection .hidden_text')
          .classList.toggle('toggle_opacity');
      });

    document.addEventListener('click', (e) => {
      document
        .querySelector('.lav-protection .hidden_text')
        ?.classList.remove('toggle_opacity');
    });

    let time = 0;
    initIntersection(
      $('.lav-protection'),
      (entry) => {
        if (entry.isIntersecting) {
          time = entry.time;
        } else if (time > 0) {
          pushDataLayer(
            'exp_lp_screen_v_sb_ft',
            parseInt(entry.time - time),
            'Visibility',
            'Scientifically block'
          );
          time = 0;
        }
      },
      { threshold: 0.1 }
    );
  }

  function handleSolve() {
    const el = `
      <div class='lav-solve'>
        <div class='lav-solve__title'>
          <span>What</span>
          <span class='lav-mark'>Mosquito Problems</span>
          <span>are you looking to solve?</span>
        </div>
        
        <div class='lav-accordion'>
          <div class='lav-accordion__item'>
            <div class='lav-accordion__head'>
              Mosquitoes often <span>disrupt my child’s playtime outside</span>
            </div>
            <div class='lav-accordion__body'>
              <div>BuzzPatch is a mosquito repellent patch that can be applied to clothing. It creates a virtual shield that confuses mosquitoes and hides your kids from their senses, allowing them to enjoy outdoor activities without being bothered by mosquitoes.</div>
              <a href="#getNow" class="btn js-btn btn-primary lav-get">GET Buzzpatch</a>
            </div>
          </div>

          <div class='lav-accordion__item'>
            <div class='lav-accordion__head'>
              <span>Traditional repellents feel sticky,</span> and my child doesn’t like applying them
            </div>
            <div class='lav-accordion__body'>
              <div>Unlike traditional sticky repellents that are commonly applied directly on the skin, BuzzPatch is applied to clothing. This eliminates the sticky feeling on the skin and provides a more comfortable experience.</div>
              <a href="#getNow" class="btn js-btn btn-primary lav-get">GET Buzzpatch</a>
            </div>
          </div>

          <div class='lav-accordion__item'>
            <div class='lav-accordion__head'>
              My child has <span>allergic reactions</span> to the traditional repellents
            </div>
            <div class='lav-accordion__body'>
              <div>BuzzPatch is made using non-toxic and natural essential oils, such as citronella and geraniol. These oils are not known to cause allergic reactions, making BuzzPatch a safer alternative for those who are prone to allergies.</div>
              <a href="#getNow" class="btn js-btn btn-primary lav-get">GET Buzzpatch</a>
            </div>
          </div>

          <div class='lav-accordion__item'>
            <div class='lav-accordion__head'>
              I don’t want to use chemical repellents with <span>unpleasant smell</span>
            </div>
            <div class='lav-accordion__body'>
              <div>BuzzPatch is free from harsh chemicals, ensuring protection against mosquitos without the unpleasant smell of synthetic repellents. With BuzzPatch, you can protect yourself from mosquitoes while enjoying a pleasant fragrance of natural essential oils.</div>
              <a href="#getNow" class="btn js-btn btn-primary lav-get">GET Buzzpatch</a>
            </div>
          </div>

          <div class='lav-accordion__item'>
            <div class='lav-accordion__head'>
              I'm <span>tired of reapplying repellents</span> when my child is playing outside
            </div>
            <div class='lav-accordion__body'>
              <div>BuzzPatch stickers are most effective in the first 12 hours, and continue to be effective for up to 72 hours.<br/>
              It saves you the trouble of constant reapplication, allowing your child extended, worry-free outdoor time.</div>
              <a href="#getNow" class="btn js-btn btn-primary lav-get">GET Buzzpatch</a>
            </div>
          </div>
        </div>
      </div>
    `;

    $('.effectiveness').insertAdjacentHTML('afterend', el);

    $$('.lav-accordion__item').forEach((item) => {
      item.addEventListener('click', function (e) {
        if (e.target.closest('.lav-get')) {
          e.preventDefault();
          document.querySelector('.get-it').click();

          pushDataLayer(
            'exp_lp_screen_b_mpbtrfs_ntgbp',
            `${item
              .querySelector('.lav-accordion__head')
              .innerText.trim()} - Get BuzzPatch`,
            'Button',
            'Mosquito problems block Traditional repellents feel sticky'
          );
          return false;
        }

        pushDataLayer(
          'exp_lp_screen_a_mpyls_nb',
          `${item.querySelector('.lav-accordion__head').innerText.trim()}`,
          'Accordion',
          'Mosquito problems Are you looking to solve?'
        );

        if (item.classList.contains('active')) {
          item.classList.remove('active');
        } else {
          $('.lav-accordion__item.active')?.classList.remove('active');
          item.classList.add('active');
        }
      });
    });

    let time = 0;
    initIntersection(
      $('.lav-solve'),
      (entry) => {
        if (entry.isIntersecting) {
          time = entry.time;
        } else if (time > 0) {
          pushDataLayer(
            'exp_lp_screen_v_mpb_ft',
            parseInt(entry.time - time),
            'Visibility',
            'Mosquito problems block'
          );
          time = 0;
        }
      },
      { threshold: 0.1 }
    );
  }

  // *** Utils *** //

  // Waiting for loading by condition
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
      if (!exp.debug) {
        dataLayer.push(objData);
      }
    } catch (e) {
      console.log('Event Error:', e);
    }
  }
  // Mutation Observer
  function initMutation(cb) {
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

  // Intersection Observer
  function initIntersection(observeEl, cb, options = {}) {
    const observerOptions = {
      root: null,
      threshold: 0,
      ...options,
      // rootMargin: '-40%',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log('entry', entry.isIntersecting, entry);
        cb(entry);
      });
    }, observerOptions);

    if (observeEl) {
      observer.observe(observeEl);
    } else {
      for (let el of Array.from(document.querySelectorAll('.lav-observe'))) {
        observer.observe(el);
      }
    }

    return observer;
  }

  async function isElementInViewport(el, event, timeout = 5) {
    if (el.classList.contains('in-view')) return false;

    setTimeout(() => {
      const rect = el.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      if (
        rect.top + rect.height * 0.3 < windowHeight &&
        rect.bottom > rect.height * 0.3
      ) {
        return true;
      }

      return false;
    }, timeout * 1000);
  }

  //Clarity
  if (!exp.debug && exp.clarity.enable) {
    waitFor(
      () => typeof clarity == 'function',
      () => {
        clarity(...exp.clarity.params);
      }
    );
  }

  function $(selector, context = document) {
    return context.querySelector(selector);
  }

  function $$(selector, context = document) {
    return context.querySelectorAll(selector);
  }
})();

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= $('.page-header .header.content').clientHeight &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
