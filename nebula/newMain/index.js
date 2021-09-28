(function () {
  function gaEvent(action, label, value) {
    if (!action) {
      action = '';
    }
    window.dataLayer = window.dataLayer || [];
    try {
      let eventObj = {
        event: 'event-to-ga',
        eventCategory: 'Exp - Pricing page buy annual plan',
        eventAction: action,
      };
      dataLayer.push(eventObj);
      console.log('FireEvent', eventObj);
    } catch (e) {
      console.log(e);
    }
  }

  /* STYLES insert start */
  const REPO_DIR = 'https://flopsi69.github.io/crs/nebula/newMain';

  let stylesList = `
    .learn {
      order: 1;
    }
    .why-30x-component {
      order: 2;
    }
    .comparison-chart-component {
      order: 3;
    }
    .lav-library {
      order: 4;
      padding: 120px 4vw 50px;
    }
    .lav-access {
      order: 5;
      padding: 55px 4vw 75px;
    }
    .lav-ancestry {
      order: 6;
      padding: 75px 4vw;
    }
    .lav-tools {
      order: 7;
      padding: 75px 4vw 140px;
    }
    .lav-privacy {
      order: 8;
      padding: 120px 4vw 50px;
    }
    .lav-title {
      font-size: 36px;
      line-height: 1.2;
      font-family: 'SpaceGrotesk-Bold';
      color: #0B0F41;
      text-align: center;
      margin-bottom: 55px;
    }
    .lav-inner {
      display: flex;
    }
    .lav-subtitle {
      font-weight: bold;
      font-family: 'SpaceGrotesk-Bold';
      font-size: 28px;
      line-height: 1.4;
      color: #0B0F41;
      margin-bottom: 28px;
    }
    .lav-descr {
      font-family: 'SpaceGrotesk-Regular';
      font-size: 24px;
      line-height: 1.5;
      color: #505985;
    }
    .lav-info {
      position: relative;
      padding: 80px;
      background: #FFFFFF;
      border: 1px solid #ECECEC;
      box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.08);
      border-radius: 20px;
    }
    .lav-info span {
      font-family: 'SpaceGrotesk-Bold';
    }
    .lav-library__inner {
      align-items: center;
    }
    .lav-library__info {
      max-width: 645px;
    }
    .lav-library__info:before {
      content: '';
      position: absolute;
      top: 70px;
      right: -60px;
      width: 173px;
      height: 122px;
      background: url(${REPO_DIR}/img/ancestry-before.svg) center no-repeat;
    }
    .lav-access__info {
      max-width: 420px;
      margin-right: 30px;
      margin-left: 100px;
      padding-top: 122px;
    }
    .lav-access__info:before {
      content: '';
      position: absolute;
      top: 28px;
      left: -110px;
      width: 173px;
      height: 122px;
      background: url(${REPO_DIR}/img/access-before.svg) center no-repeat;
    }
    .lav-access__info:after {
      content: '';
      position: absolute;
      bottom: -40px;
      right: 43px;
      width: 106px;
      height: 106px;
      background: url(${REPO_DIR}/img/access-after.svg) center no-repeat;
    }
    .lav-access__image {
      position: relative;
      padding: 80px;
      background: #FFFFFF;
      flex-grow: 1;
      text-align: center;
      border: 1px solid #ECECEC;
      box-shadow: 0px 0px 12px rgb(0 0 0 / 8%);
      border-radius: 20px;
    }
    .lav-ancestry__info:before {
      content: '';
      position: absolute;
      bottom: 30px;
      right: -60px;
      width: 173px;
      height: 122px;
      background: url(${REPO_DIR}/img/ancestry-before.svg) center no-repeat;
    }
    .lav-ancestry__inner {
      align-items: center;
    }
    .lav-ancestry__info {
      max-width: 645px;
      width: 100%;
      margin-left: 30px;
    }
    .lav-tools__info:before {
      content: '';
      position: absolute;
      top: 220px;
      left: -110px;
      width: 173px;
      height: 122px;
      background: url(${REPO_DIR}/img/tools-before.svg) center no-repeat;
    }
    .lav-tools__info:after {
      content: '';
      position: absolute;
      bottom: -38px;
      right: -66px;
      width: 106px;
      height: 106px;
      background: url(${REPO_DIR}/img/tools-after.svg) center no-repeat;
    }
    .lav-tools__info {
      max-width: 420px;
      width: 100%;
      margin-right: 30px;
      margin-left: 100px;
      padding-top: 150px;
    }
    .lav-tools__image {
      position: relative;
      padding: 80px;
      background: #FFFFFF;
      flex-grow: 1;
      text-align: center;
      border: 1px solid #ECECEC;
      box-shadow: 0px 0px 12px rgb(0 0 0 / 8%);
      border-radius: 20px;
    }
    .jumb {
      display: none!important;
    }
    .why-30x-component {
      padding: 50px 8vw 100px!important;
    }
    .why-30x-component .text-div .subtitle {
      color: #505985!important;
      font-weight: 700!important;
      font-family: 'SpaceGrotesk-Bold'!important;
      font-size: 1.9vw!important;
    }
    .why-30x-component .text-div {
      width: 100%!important;
      text-align: center!important;
      position: relative!important;
      top: 0!important;
      padding-bottom: 35px!important;
    }
    .why-30x-component video {
      padding-top: 0!important;
    }
    .comparison-chart-component {
      background: #F9F9F9!important;
      color: #0B0F41!important;
      padding-top: 110px!important;
      padding-bottom: 120px!important;
    }
    .comparison-chart-component .subtitle {
      display: none!important;
    }
    .comparison-chart-component .title {
      text-align: center!important;
      margin-bottom: 55px!important;
    }
    .comparison-chart-component table {
      border: 1px solid #ECECEC!important;
      box-shadow: 0px 2px 8px rgba(73, 73, 73, 0.13)!important;
      border-radius: 20px!important;
      max-width: 1100px!important;
      width: 100%!important;
    }
    .comparison-chart-component table td, .comparison-chart-component table th {
      border: 1px solid #ECECEC!important;
    }
    .comparison-chart-component table .bold {
      font-size: 18px!important;
      margin-bottom: 8px!important;
      line-height: 1.3!important;
      color: #0B0F41!important;
    }
    .comparison-chart-component td:first-child {
      font-size: 16px!important;
      line-height: 1.4!important;
      color: #505985!important;
      padding: 24px 37px!important;
    }
    .comparison-chart-component tr:first-child img {
      width: 200px!important;
    }
    .comparison-chart-component .third {
      font-weight: bold!important;
      font-family: 'SpaceGrotesk-Bold'!important;
      font-size: 24px!important;
      line-height: 1.2!important;
      color: #0B0F41!important;
    }
    .comparison-chart-component table td .other {
      font-size: 12px!important;
      line-height: 1.3!important;
      color: #505985!important;
      font-family: 'SpaceGrotesk-Regular'!important;
    }
    .comparison-chart-component table td .other .x {
      margin-right: 20px!important;
      width: 16px!important;
      height: 16px!important;
    }
    .comparison-chart-component table td .learn-more img {
      width: 20px!important;
      height: 15px!important;
      margin-right: 20px!important;
    }
    .comparison-chart-component table td .learn-more .button-div button {
      font-family: 'SpaceGrotesk-Bold'!important;
      font-size: 16px!important;
      line-height: 22px!important;
      color: #FDFDFD!important;
      padding: 9px 38px!important;
    }
    .cta {
      background: #3F4CEC!important;
      padding: 48px!important;
    }
    .cta__btn {
      height: 65px!important;
      max-width: 270px!important;
      width: 100%!important;
      background: #69C68E!important;
      border-radius: 5px!important;
      font-size: 18px!important;
      line-height: 26px!important;
      font-family: 'SpaceGrotesk-Bold'!important;
    }
    .cta__btn:hover {
      background: #389a5f!important;
    }
    .mini-faqs {
      padding-top: 80px!important;
      padding-bottom: 80px!important;
    }
    #app > div:first-child {
      display: flex!important;
      flex-flow: column!important;
    }
  `;

  let stylesEl = document.createElement('style');
  stylesEl.id = 'lav-styles';
  stylesEl.innerHTML = stylesList;
  document.body.appendChild(stylesEl);

  let customHTML = `
    <div class='lav-library'>
      <div class='lav-library__title lav-title'>Nebula Research Library</div>

      <div class='lav-library__inner lav-inner'>
        <div class='lav-library__image'>
          <img src='${REPO_DIR}/img/library-img.png'>
        </div>
        <div class='lav-library__info lav-info'>
          <div class='lav-library__subtitle lav-subtitle'>Stay up to date with the most cutting-edge genomic research</div>
          <div class='lav-library__info-descr lav-descr'>Our team curates the latest scientific discoveries to create personalized reports based on your Whole Genome Sequencing DNA test results. New reports on various genetic traits are added every week. The Nebula Research Library already contains over <span>200 research-based reports.</span> </div>
        </div>
      </div>
    </div>

    <div class='lav-access'>
      <div class='lav-access__title lav-title'>Genomic big data access</div>

      <div class='lav-access__inner lav-inner'>
        <div class='lav-access__info lav-info'>
          <div class='lav-access__subtitle lav-subtitle'>Get access to over 100 gigabytes of raw DNA data </div>
          <div class='lav-access__info-descr lav-descr'>Explore it on your own. Bring your DNA data to your physician to help identify predispositions and detect rare conditions. </div>
        </div>
        <div class='lav-access__image'>
          <img src='${REPO_DIR}/img/access-img.svg'>
        </div>
      </div>
    </div>

    <div class='lav-ancestry'>
      <div class='lav-ancestry__title lav-title'>Deep genetic ancestry</div>

      <div class='lav-ancestry__inner lav-inner'>
        <div class='lav-ancestry__image'>
          <img src='${REPO_DIR}/img/ancestry-img.svg'>
        </div>
        <div class='lav-ancestry__info lav-info'>
          <div class='lav-ancestry__subtitle lav-subtitle'>Discover Your Roots </div>
          <div class='lav-ancestry__info-descr lav-descr'>
            <p>Unlike other ancestry tests, we identify all genetic markers to help you discover your entire family history. </p>
            <p>You get access to the world’s largest Y-DNA and mtDNA databases where you can trace your parents’ lines, find relatives, and build your family tree. </p>
          </div>
        </div>
      </div>
    </div>

    <div class='lav-tools'>
      <div class='lav-tools__title lav-title'>Genome exploration tools</div>

      <div class='lav-tools__inner lav-inner'>
        <div class='lav-tools__info lav-info'>
          <div class='lav-tools__subtitle lav-subtitle'>Explore Your DNA</div>
          <div class='lav-tools__info-descr lav-descr'>Take a deep dive into your DNA with our powerful tools to examine your genes and search for specific variants.</div>
        </div>
        <div class='lav-tools__image'>
          <img src='${REPO_DIR}/img/tools-img.svg'>
        </div>
      </div>
    </div>

    <div class='lav-privacy'>
      <div class='lav-privacy__title lav-title'>Privacy First DNA Testing</div>

      <div class='lav-privacy__inner lav-inner'>
        <div class='lav-privacy__image'>
          <img src='${REPO_DIR}/img/privacy-img.svg'>
        </div>
        <div class='lav-privacy__info lav-info'>
          <div class='lav-privacy__subtitle lav-subtitle'>Discover Your Roots </div>
          <div class='lav-privacy__info-descr'>
            <div class='lav-privacy__info-caption'>Nebula Genomics is the leading <span>privacy-focused personal genomics service.</span> Our mission is to make direct-to-consumer DNA testing secure. In partnership with Oasis Labs, we give you access to cutting-edge privacy-preserving technology.</div>
            <ul class='lav-privacy__info-list'>
              <li>Take irrevocable ownership of your Whole Genome Sequencing data.</li>
              <li>Control who can access your data and for what purpose it is used.</li>
              <li>Keep your genetic information protected in a secure computing environment.</li>
            </ul>

            <a href='https://nebula.org/oasis-labs-partnership/' class='lav-privacy__info-link'>Learn about the technology we’re building to keep your DNA safe </a>
          </div>
        </div>
      </div>
    </div>
  `;

  // let observer = new MutationObserver(mutations => {
  //   for (let mutation of mutations) {
  //     for (let node of mutation.addedNodes) {
  //       if (!(node instanceof HTMLElement)) continue;
  //       if (node.classList.contains('cart-page')) {
  //         initExp();
  //         observer.disconnect();
  //       }
  //     }
  //   }
  // });

  // observer.observe(document.querySelector('body'), {
  //   childList: true,
  //   subtree: true
  // });

  /* STYLES insert end */
  initExp();
  function initExp() {
    weDecode();
    compareTest();
    document
      .querySelector('.comparison-chart-component')
      .insertAdjacentHTML('afterend', customHTML);
    // document.querySelector('.learn').insertAdjacentElement('afterend', document.querySelector('.why-30x-component'));
  }

  function weDecode() {
    // document
    //   .querySelector('.learn')
    //   .insertAdjacentElement(
    //     'afterend',
    //     document.querySelector('.why-30x-component')
    //   );

    document.querySelector('.why-30x-component .text-div .title').innerText =
      'We Decode 100% of Your DNA';

    document.querySelector('.why-30x-component .text-div .subtitle').innerText =
      'Other tests? Just 0.02%';
  }

  function compareTest() {
    // document
    //   .querySelector('.why-30x-component')
    //   .insertAdjacentElement(
    //     'afterend',
    //     document.querySelector('.comparison-chart-component')
    //   );

    document.querySelector('.comparison-chart-component .title').innerText =
      'Nebula vs Other DNA Tests';
  }
})();
