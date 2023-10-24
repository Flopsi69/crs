console.debug('*** Experiment started ***');
await waitFor(() => document.head && document.body, false, { ms: 50 });

document.head.insertAdjacentHTML(
  'beforeend',
  `
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Kaisei+Tokumin:wght@400;500;700&display=swap" rel="stylesheet">
`
);

// Config for Experiment
const config = {
  dir: 'https://flopsi69.github.io/crs/zenithprepacademy/landing',
  clarity: ['set', '', 'variant_1'],
  debug: true,
};

// Styles for Experiment
const styles = `
  .exp-layout {
    font-family: 'Inter', sans-serif;
  }
  .btn-cta {
    border-radius: 2px;
    background: linear-gradient(135deg, #FFDA81 24.24%, #FFB574 73.2%);
    padding: 24px 60px;
    color: #21223F;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 1;
    letter-spacing: 2px;
    text-transform: uppercase;
    transition: 0.3s;
    border: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    max-width: 400px;
    width: 100%;
    height: 72px;
  }

  .btn-cta_black {
    background: linear-gradient(123deg, #031640 23.3%, #12162F 42.4%, #171935 61.8%, #020B22 82.43%);
    color: #fff;
  }

  .btn-cta img {
    margin-left: 16px;
  }

  .jumb {
    background: #0A132A url('${config.dir}/img/jumb-bg.jpeg') top center / cover no-repeat;
    color: #fff;
    text-align: center;
    padding: 80px 0 100px;
  }
  .lav-container {
    max-width: 1312px;
    padding: 0 16px;
    margin: auto;
  }
  .jumb__logo {
    line-height: 0;
  }
  .jumb__title {
    max-width: 1010px;
    margin: 60px auto 0;
    font-family: 'Kaisei Tokumin', serif;
    font-size: 56px;
    line-height: 64px;
  }
  .jumb__caption {
    margin-top: 32px;
    color: #F9FAFB;
    font-size: 20px;
    line-height: 1.5;
  }
  .jumb__btn {
    margin-top: 32px;
  }
  .jumb__arrow {
    line-height: 0;
    margin: 30px 0;
  }
  .jumb__watched {
    color: #F9FAFB;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  .jumb__watched span {
    font-size: 18px;
    font-weight: 600;
  }
  .jumb-about {
    display: inline-flex;
    align-items: center;
    margin-top: 40px;
    border: 1px dashed #FFD88A;
    background: linear-gradient(140deg, rgba(3, 22, 64, 0.20) 16.4%, rgba(18, 22, 47, 0.20) 38.68%, rgba(23, 25, 53, 0.20) 61.31%, rgba(2, 11, 34, 0.20) 85.38%);
    padding: 16px 44px 16px 16px;
  }
  .jumb-about__preview {
    line-height: 0;
    margin-right: 36px;
    flex-shrink: 0;
  }
  .jumb-about__preview img {
    width: 280px;
  }
  .jumb-about__info {
    text-align: left;
  }
  .jumb-about__caption {
    color: #FFF;
    font-size: 18px;
    line-height: 26px; 
  }
  .jumb-about__title {
    margin-top: 16px;
    font-family: 'Kaisei Tokumin', serif;
    border-bottom: 1px solid #FFD88A;
    font-size: 32px;
    line-height: 40px;
    text-decoration-line: underline;
    background: linear-gradient(114deg, #FFD88A 26.97%, #FFBA7E 74.53%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .jumb-featured {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 80px;
  }
  .jumb-featured__title {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-right: 80px;
  }
  .jumb-featured__logos {
    display: flex;
    align-items: center;
    gap: 72px;
    opacity: 0.7;
  }
  .jumb-owner {
    margin: 60px auto 0;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1024px;
    width: 100%;
  }
  .jumb-owner__image {
    line-height: 0;
    margin-right: 64px;
    flex-shrink: 0;
  }
  .jumb-owner__image img {
    width: 400px;
  }
  .jumb-owner__info {
    text-align: left;
  }
  .jumb-owner__title {
    font-family: 'Kaisei Tokumin', serif;
    font-size: 48px;
    line-height: 56px; 
  }
  .jumb-owner__caption {
    margin-top: 8px;
    color: #F9FAFB;
    font-size: 16px;
    font-style: italic;
    line-height: 1.5;
  }
  .jumb-owner__description {
    position: relative;
    margin-top: 32px;
    padding-left: 32px;
    color: #FFF;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: -0.32px;
  }
  .jumb-owner__description p {
    margin: 0;
  }
  .jumb-owner__description p + p {
    margin-top: 20px;
  }
  .jumb-owner__description::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 1px;
    height: 100%;
    background: linear-gradient(134deg, #87F5FC 20.05%, #35C6BB 82.92%, #72F7FF 106.27%);
  }
  .jumb-owner__description span {
    font-weight: 600;
  }

  .learn {
    padding: 120px 0;
  }
  .learn__title {
    color: #21293E;
    text-align: center;
    font-family: 'Kaisei Tokumin', serif;
    font-size: 48px;
    font-weight: 400;
    line-height: 56px;
  }
  .learn__title span {
    font-weight: 500;
    border-bottom: 1px solid #5CDDDB;
  }
  .learn__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 72px;
    margin-top: 50px;
  }
  .learn__image {
    line-height: 0;
    text-align: center;
  }
  .learn__caption {
    margin-top: 20px;
    color: #434C60;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
  }
  .learn__caption span {
    font-weight: 600;
  }
  .learn__divider {
    position: relative;
    margin: 48px 0;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .learn__divider:before {
    content: '';
    position: absolute;
    top: 28px;
    left: 0;
    right: 0;
    height: 1px;
    width: 100%;
    background: #DFE3EE;
  }
  .learn__divider img {
    position: relative;
  }
  .learn__divider img + img {
    right: 15px;
  }
  .learn__cta {
    margin-top: 48px;
    text-align: center;
  }


  .examples {
    padding: 90px 0;
    background: linear-gradient(140deg, #02102F 16.4%, #12162F 28.44%, #12162F 36.41%, #11132B 53.66%, #020B22 73.88%, #11132B 85.38%);
    color: #fff;
  }
  .examples__title {
    color: #FFF;
    text-align: center;
    font-family: 'Kaisei Tokumin', serif;
    font-size: 40px;
    line-height: 48px;
  }
  .examples__title span {
    font-weight: 500;
    background: linear-gradient(128deg, #FFDA81 61.24%, #FFB574 98.6%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .examples__table {
    margin: 72px auto 0;
    max-width: 1260px;
  }
  .examples__item + .examples__item {
    border-left: 1px solid rgba(255, 255, 255, 0.20);
  }
  .examples__row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    background: #21293E;
    border: 1px solid rgba(255, 255, 255, 0.20);
  }
  .examples__row + .examples__row {
    border-top: none;
  }
  .examples__row + .examples__row .examples__item-head {
    display: none;
  }
  .examples__item-head {
    padding: 12px;
    text-align: center;
    color: #FFF;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 2px;
    text-transform: uppercase;
    border-bottom: 1px solid rgba(255, 255, 255, 0.20);
  }
  .examples__item-body {
    padding: 40px 30px;
  }
  .examples__subtitle {
    font-size: 18px;
    font-weight: 600;
    line-height: 1.35;
  }
  .examples__subtitle + .examples__descr {
    margin-top: 16px;
  }
  .examples__descr:not(.examples__descr_plain) {
    display: flex;
    align-items: flex-start;
    color: #F9FAFB;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }
  .examples__descr + .examples__descr {
    margin-top: 8px;
  }
  .examples__descr img {
    flex-shrink: 0;
    margin-right: 16px;
  }
  .examples__descr span {
    font-weight: 600;
  }


  .parents {
    padding: 120px 0;
  }
  .parents__plate {
    position: relative;
    background: linear-gradient(114deg, #FFD88A 26.97%, #FFBA7E 74.53%);
    padding: 112px 80px 72px 96px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    max-width: 1150px;
    margin: auto;
  }
  .parents__plate:before {
    content: '';
    position: absolute;
    left: 20px;
    top: 20px;
    right: 20px;
    bottom: 20px;
    border: 1px dashed #031640;
    pointer-events: none;
  }
  .parents__info {
    max-width: 560px;
    padding-bottom: 40px;
  }
  .parents__image {
    line-height: 0;
    margin-left: 64px;
  }
  .parents__title {
    background: linear-gradient(140deg, #02102F 16.4%, #12162F 28.44%, #12162F 36.41%, #11132B 53.66%, #020B22 73.88%, #11132B 85.38%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: 'Kaisei Tokumin', serif;
    font-size: 40px;
    line-height: 48px;
  }
  .parents__title span {
    font-weight: 700;
  }
  .parents__caption {
    margin-top: 24px;
    color: #515E7A;
    font-size: 16px;
    line-height: 24px;
  }
  .parents__btn {
    max-width: 350px;
    margin-top: 40px;
  }
  .parents__age {
    margin-top: 24px;
    color: #122340;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  .parents__age span {
    font-weight: 600;
  }

  .who {
    padding: 90px 0;
    background: #0A132A url('${config.dir}/img/who-bg.jpeg') top center / cover no-repeat;
    text-align: center;
  }
  .who__logo {
    line-height: 0;
  }
  .who__title {
    margin-top: 40px;
    color: #21293E;
    font-family: 'Kaisei Tokumin', serif;
    font-size: 48px;
    font-weight: 400;
    line-height: 56px;
    letter-spacing: 1px;
  }
  .who__caption {
    margin-top: 24px;
    color: #515E7A;
    font-size: 14px;
    line-height: 20px;
  }
  .who__list {
    margin-top: 72px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }
  .who__item {
    border-radius: 4px;
    background: linear-gradient(140deg, #02102F 16.4%, #12162F 28.44%, #12162F 36.41%, #11132B 53.66%, #020B22 73.88%, #11132B 85.38%);
    color: #fff;
    padding: 32px 40px 48px;
  }
  .who__item-title {
    font-family: 'Kaisei Tokumin', serif;
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;
    margin-bottom: 24px;
    padding-bottom: 24px;
    border-bottom: 1px solid rgba(223, 227, 238, 0.20);
  }
  .who__item-descr {
    font-size: 16px;
    line-height: 24px;
  }
  .who__item-descr span {
    font-weight: 600
  }
  .who__btn {
    margin-top: 48px;
  }

  .trusted {
    margin: 120px 0;
  }
  .trusted__inner {
    position: relative;
    background: linear-gradient(140deg, #031640 16.4%, #12162F 38.68%, #171935 61.31%, #020B22 85.38%);
    padding: 90px 0;
    color: #fff;
  }
  .trusted__inner:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    background: url('${config.dir}/img/trusted-quote.svg') -32px center / auto no-repeat;
  }
  .trusted__title {
    color: #FFF;
    text-align: center;
    font-family: 'Kaisei Tokumin', serif;
    font-size: 48px;
    line-height: 56px;
  }
  .trusted__logos {
    display: flex;
    align-items: center;
    gap: 64px;
    justify-content: center;
    margin-top: 72px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.20);
    padding-bottom: 48px;
  }
  .trusted__logo {
    position: relative;
    line-height: 0;
  }
  .trusted__logo.active:before {
    content: '';
    position: absolute;
    bottom: -55px;
    left: -15px;
    right: -15px;
    background: linear-gradient(117deg, #FFDE8D 2.56%, #FFB97C 66.49%);
    height: 1px;
  }
  .trusted__logo:not(.active) {
    opacity: 0.6;
  }
  .trusted__quote {
    margin: 48px auto 0;
    max-width: 660px;
  }
  .trusted__descr {
    font-family: 'Kaisei Tokumin', serif;
    font-size: 18px;
    line-height: 32px;
  }
  .trusted__author {
    margin-top: 24px;
    font-family: 'Kaisei Tokumin', serif;
    font-size: 24px;
    line-height: 32px;
  }


  .reviews {
    margin: 120px 0;
  }
  .reviews__title {
    color: #21293E;
    font-family: 'Kaisei Tokumin', serif;
    font-size: 40px;
    line-height: 48px; 
  }
  .reviews__slider {
    margin-top: 50px;
  }
  .reviews__cta {
    margin-top: 50px;
    text-align: center;
  }
  .reviews {}

  .review {
    max-width: 410px;
    width: 100%;
  }
  .review__preview {
    line-height: 0;
  }
  .review__preview img {
    max-width: 100%;
  }
  .review__body {
    padding: 40px 32px;
    border: 1px solid #DFE3EE;
    background: #FFF;
    border-radius: 0 0 4px 4px;
  }
  .review__name {
    color: #21293E;
    font-family: 'Kaisei Tokumin', serif;
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
  }
  .review__descr {
    margin-top: 20px;
    color: #515E7A;
    font-size: 14px;
    line-height: 24px;
  }
  .review__details {
    color: #21293E;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    margin-top: 20px;
  }
  .review__details span {
    text-decoration-line: underline;
  }


  .webinars {
    color: #FFF;
    background: linear-gradient(140deg, #031640 16.4%, #12162F 38.68%, #171935 61.31%, #020B22 85.38%);
    padding: 90px 0;
  }
  .webinars__title {
    text-align: center;
    font-family: 'Kaisei Tokumin', serif;
    font-size: 48px;
    line-height: 56px;
  }
  .webinars {}



  .metrics {
    margin: 120px 0;
    text-align: center;
  }
  .metrics__logo {
    line-height: 0;
  }
  .metrics__title {
    margin-top: 40px;
    color: #21293E;
    font-family: 'Kaisei Tokumin', serif;
    font-size: 48px;
    line-height: 56px;
    letter-spacing: 1px;
  }
  .metrics__list {
    margin-top: 72px;
    display: flex;
    justify-content: center;
    gap: 48px;
  }
  .metrics__item {
    max-width: 216px;
    width: 100%;
  }
  .metrics__item-value {
    font-family: 'Kaisei Tokumin', serif;
    font-size: 56px;
    color: #031640;
    line-height: 64px;
  }
  .metrics__item:nth-child(4) .metrics__item-value  {
    font-size: 40px;
  }
  .metrics__item-caption {
    color: #515E7A;
    font-size: 16px;
    line-height: 24px;
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid #DFE3EE;
  }
  .metrics__btn {
    margin-top: 48px;
  }

  
  .award {
    color: #fff;
    text-align: center;
    padding: 90px 0 100px;
    background: linear-gradient(140deg, #02102F 16.4%, #12162F 28.44%, #12162F 36.41%, #11132B 53.66%, #020B22 73.88%, #11132B 85.38%);
  }
  .award img {
    max-width: 100%;
  }
  .award__main {
    line-height: 0;
    margin-top: 72px;
  }
  .award__title {
    font-family: 'Kaisei Tokumin', serif;
    font-size: 48px;
    line-height: 56px;
  }
  .award__divider {
    background: linear-gradient(135deg, #FFDA81 24.24%, #FFB574 73.2%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-top: 80px;
  }
  .award__arrow {
    line-height: 0;
    margin-top: 24px;
  }
  .award__device {
    line-height: 0;
    margin-top: 40px;
  }
  .award__device img {
    max-height: 485px;
  }


  .biggest {
    padding: 120px 0;
  }
  .biggest__plate {
    position: relative;
    background: linear-gradient(114deg, #FFD88A 26.97%, #FFBA7E 74.53%);
    padding: 112px 80px 72px 96px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    max-width: 1150px;
    margin: auto;
  }
  .biggest__plate:before {
    content: '';
    position: absolute;
    left: 20px;
    top: 20px;
    right: 20px;
    bottom: 20px;
    border: 1px dashed #031640;
    pointer-events: none;
  }
  .biggest__info {
    max-width: 560px;
    padding-bottom: 40px;
  }
  .biggest__image {
    line-height: 0;
    margin-left: 64px;
  }
  .biggest__title {
    background: linear-gradient(140deg, #02102F 16.4%, #12162F 28.44%, #12162F 36.41%, #11132B 53.66%, #020B22 73.88%, #11132B 85.38%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: 'Kaisei Tokumin', serif;
    font-size: 40px;
    line-height: 48px;
  }
  .biggest__title span {
    font-weight: 700;
  }
  .biggest__caption {
    margin-top: 24px;
    color: #AE246E;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
  }
  .biggest__caption span {
    text-transform: uppercase;
  }
  .biggest__caption img {
    margin-left: 8px;
    margin-top: -2px;
  }
  .biggest__btn {
    max-width: 350px;
    margin-top: 40px;
  }
  .biggest__age {
    margin-top: 24px;
    color: #122340;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  .biggest__age span {
    font-weight: 600;
  }


  .hear {
    padding: 90px 0;
    background: url('${config.dir}/img/hear-bg.jpeg') -32px center / auto no-repeat;
  }
  .hear__title {
    color: #fff;
    font-family: 'Kaisei Tokumin', serif;
    font-size: 48px;
    font-weight: 500;
    line-height: 56px;
  }
  .hear__list {
    margin-top: 72px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
  .hear__item {
    padding: 48px 48px 56px;
    border-radius: 4px;
    background: #FFF;
  }
  .hear__item-img {
    line-height: 0;
    text-align: center;
  }
  .hear__item-descr {
    margin-top: 24px;
    padding-top: 24px;
    color: #515E7A;
    font-size: 16px;
    line-height: 28px;
    border-top: 1px solid #DFE3EE;
  }
  .hear__item {}
  .hear {}
  .hear {}

`;

const stylesEl = document.createElement('style');
stylesEl.classList.add('exp-styles');
stylesEl.innerHTML = styles;
document.head.appendChild(stylesEl);

// *** Logic *** //
initExp();

function initExp() {
  console.debug('** InitExp **');
  addLayout();
}

function addLayout() {
  const html = `
    <div class='exp-layout'>
      <div class='jumb'>
        <div class='lav-container'>
          <div class='jumb__logo'>
            <img src='${config.dir}/img/logo.svg' />
          </div>

          <div class='jumb__title'>
            Discover the 3 factors <br/>
            that prevent 6ᵗʰ - 12ᵗʰ graders from getting into the colleges they deserve
          </div>

          <div class='jumb__caption'>
            And tips on how you can help your 12-18 year old <br/>
            get accepted into a top university.
          </div>

          <button class='jumb__btn btn-cta'>
            watch FREE video
            <img src='${config.dir}/img/arrow-right-solid.svg' />
          </button>
          
          <div class='jumb__arrow'>
            <img src='${config.dir}/img/arrow-dashed.svg' />
          </div>

          <div class='jumb__watched'>Over <span>100,000+</span> parents just like you have watched this webinar</div>

          <div class='jumb-about'>
            <div class='jumb-about__preview'>
              <img src='${config.dir}/img/jumb-preview.png' />
            </div>
            <div class='jumb-about__info'>
              <div class='jumb-about__caption'>Hear What They Think</div>
              <div class='jumb-about__title'>About Zenith Prep Academy</div>
            </div>
          </div>

          <div class='jumb-featured'>
            <div class='jumb-featured__title'>Featured on:</div>
            <div class='jumb-featured__logos'>
              <img src='${config.dir}/img/featured1.svg' />
              <img src='${config.dir}/img/featured2.svg' />
              <img src='${config.dir}/img/featured3.svg' />
              <img src='${config.dir}/img/featured4.svg' />
              <img src='${config.dir}/img/featured5.svg' />
              <img src='${config.dir}/img/featured6.svg' />
            </div>
          </div>

          <div class='jumb-owner'>
            <div class='jumb-owner__image'>
              <img src='${config.dir}/img/kevin.png' />
            </div>
            <div class='jumb-owner__info'>
              <div class='jumb-owner__title'>Kevin Hong</div>
              <div class='jumb-owner__caption'>Program Director & Host</div>
              <div class='jumb-owner__description'>
                <p>
                  <span>In charge of managing the College Consulting program</span> – Provided guidance & advice to 1,000s of families on how their students can gain admissions into <span>top STEM, Business, and Healthcare summer programs,</span> internships, and research opportunities
                </p>
                <p>
                  Experience working with families from <span>all around the US,</span> helping them gain admission into the Ivy Leagues and other top universities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class='learn'>
        <div class='lav-container'>
          <div class='learn__section'>
            <div class='learn__title'>
            What you will <span>learn after</span><br/> watching the video
            </div>
            <div class='learn__list'>
              <div class='learn__item'>
                <div class='learn__image'>
                  <img src='${config.dir}/img/learn1.svg' />
                </div>
                <div class='learn__caption'>What universities actually <span>want in</span> an applicant (but never say)</div>
              </div>
              <div class='learn__item'>
                <div class='learn__image'>
                  <img src='${config.dir}/img/learn2.svg' />
                </div>
                <div class='learn__caption'>At <span>what age</span> you should start the preparation to secure a spot in a <span>good college</span></div>
              </div>
              <div class='learn__item'>
                <div class='learn__image'>
                  <img src='${config.dir}/img/learn3.svg' />
                </div>
                <div class='learn__caption'><span>Proven methods</span> and strategies for gaining admission to top-tier universities, even if your child does not have <span>the best grades or SAT</span> scores  </div>
              </div>
              <div class='learn__item'>
                <div class='learn__image'>
                  <img src='${config.dir}/img/learn4.svg' />
                </div>
                <div class='learn__caption'><span>How you, as a parent,</span> can assist your child in securing admission to the university they deserve</div>
              </div>
            </div>
          </div>

          <div class='learn__divider'>
            <img src='${config.dir}/img/round-plus.svg' />
            <img src='${config.dir}/img/arrow-dashed-yellow.svg' />
          </div>

          <div class='learn__section'>
            <div class='learn__title'>
              High-Value <span>tips</span> And <span>secrets</span> </br> You’ll Discover Inside The Webinar
            </div>
            <div class='learn__list'>
              <div class='learn__item'>
                <div class='learn__image'>
                  <img src='${config.dir}/img/learn5.svg' />
                </div>
                <div class='learn__caption'><span>Why ~90% of students who get 4.0</span> and above GPAs and perfect SAT scores are NOT accepted​ into Harvard, Stanford, or the top 10 universities (and what to do)</div>
              </div>
              <div class='learn__item'>
                <div class='learn__image'>
                  <img src='${config.dir}/img/learn6.svg' />
                </div>
                <div class='learn__caption'>How to identify your child’s <span>true interest</span> and passion, turn it into a unique advantage, and use it to get into a better university</div>
              </div>
              <div class='learn__item'>
                <div class='learn__image'>
                  <img src='${config.dir}/img/learn7.svg' />
                </div>
                <div class='learn__caption'>The truth about certain extracurricular activities that actually <span>hurt students’</span> chances​ of getting into better schools</div>
              </div>
              <div class='learn__item'>
                <div class='learn__image'>
                  <img src='${config.dir}/img/learn8.svg' />
                </div>
                <div class='learn__caption'>What <span>“value-added”</span> college planning is, and how early you should start if you want your child to enter a top university (most parents get this wrong)</div>
              </div>
            </div>
          </div>

          <div class='learn__cta'>
            <button class='learn__btn btn-cta'>
              watch FREE video
              <img src='${config.dir}/img/arrow-right-solid.svg' />
            </button>
          </div>
        </div>
      </div>


      <div class='examples'>
        <div class='lav-container'>
          <div class='examples__title'>
            Some examples of what universities actually<br/> want, in addition to good <span>GPAs and SAT scores:</span>
          </div>

          <div class='examples__table'>
            <div class='examples__row'>
              <div class='examples__item'>
                <div class='examples__item-head'>What universities ask</div>
                <div class='examples__item-body'>
                  <div class='examples__subtitle'>Essay</div>
                  <div class='examples__descr examples__descr_plain'>
                    <span>Example:</span> Think about an academic subject that inspires you. Describe how you have furthered this interest inside and/or outside of the classroom.
                  </div>
                </div>
              </div>
              <div class='examples__item'>
                <div class='examples__item-head'>What applicants usually say</div>
                <div class='examples__item-body'>
                  <div class='examples__descr'>
                    <img src='${config.dir}/img/circle-cross.svg' />

                    Since I was a child I loved science. Last summer, I volunteered at the local Red Cross and (redacted) hospital. Even as a child I constantly sought it out, first on television with Bill Nye and MythBusters, then later in person in every museum exhibit I could find. This reinforced my passion to be in science and confirmed what I already knew about my passion....
                  </div>
                </div>
              </div>
              <div class='examples__item'>
                <div class='examples__item-head'>What universities want to hear</div>
                <div class='examples__item-body'>
                  <div class='examples__descr'>
                    <img src='${config.dir}/img/circle-check.svg' />

                    After a summer-long program of creating colorful designs of new molecules in Avogadro, detailed illustrations of proteins on the Protein Data Bank, and artistic organization of figures within my research paper, I presented my findings and placed First in the Biochemistry, Microbiology, and Molecular Biology (BMMB) category at my County Science Fair and eventually qualified for an international research and innovation competition.
                  </div>
                </div>
              </div>
            </div>

            <div class='examples__row'>
              <div class='examples__item'>
                <div class='examples__item-head'>What universities ask</div>
                <div class='examples__item-body'>
                  <div class='examples__subtitle'>Extracurricular / internships</div>
                </div>
              </div>
              <div class='examples__item'>
                <div class='examples__item-head'>What applicants usually say</div>
                <div class='examples__item-body'>
                  <div class='examples__descr'>
                    <img src='${config.dir}/img/circle-cross.svg' />
                    Playing sports or musical instruments
                  </div>
                  <div class='examples__descr'>
                    <img src='${config.dir}/img/circle-cross.svg' />
                    Math Olympiad, DECA, robotics club, etc.
                  </div>
                  <div class='examples__descr'>
                    <img src='${config.dir}/img/circle-cross.svg' />
                    Volunteering at the Red Cross or local nonprofits
                  </div>
                </div>
              </div>
              <div class='examples__item'>
                <div class='examples__item-head'>What universities want to hear</div>
                <div class='examples__item-body'>
                  <div class='examples__descr'>
                    <img src='${config.dir}/img/circle-check.svg' />
                    Developed an Augmented Reality app for a Machine Learning company
                  </div>
                  <div class='examples__descr'>
                    <img src='${config.dir}/img/circle-check.svg' />
                    Acceptances into summer programs & internships at universities, hospitals, clinics, and more
                  </div>
                  <div class='examples__descr'>
                    <img src='${config.dir}/img/circle-check.svg' />
                    Started drone filming business for real estate
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class='parents'>
        <div class='lav-container'>
          <div class='parents__plate'>
            <div class='parents__info'>
              <div class='parents__title'>
                <span>Parents are also responsible</span> for whether their child can get into a good university.
              </div>

              <div class='parents__caption'>
                Ensure that you don't overlook important steps to secure<br/>your child's future.
              </div>

              <button class='parents__btn btn-cta btn-cta_black'>
                watch FREE video
                <img src='${config.dir}/img/arrow-right-solid_white.svg' />
              </button>
              <div class='parents__age'>For parents of <span>12-18 year-olds</span></div>
            </div>

            <div class='parents__image'>
              <img src='${config.dir}/img/parents.svg' />
            </div>
          </div>
        </div>
      </div>


      <div class='who'>
        <div class='lav-container'>
          <div class='who__logo'>
            <img src='${config.dir}/img/logo-contrast.svg' />
          </div>
          <div class='who__title'>Who is ZENITH PREP ACADEMY</div>
          <div class='who__caption'>Ensure that you don't overlook important steps to foster a prosperous and secure future for your child</div>

          <div class='who__list'>
            <div class='who__item'>
              <div class='who__item-title'>Personalized college<br/>guidance</div>
              <div class='who__item-descr'><span>Create a customized</span> college preparation guide and roadmap that will help your child stand out to universities.</div>
            </div>
            <div class='who__item'>
              <div class='who__item-title'>Assist in identifying your<br/>child's true interests<br/>and passions</div>
              <div class='who__item-descr'>Leverage them as unique advantages to gain admission to a better university. <span>Guide your child and support them</span> in following the plan.</div>
            </div>
            <div class='who__item'>
              <div class='who__item-title'>16 years of experience</div>
              <div class='who__item-descr'>Through our college counseling program, our students have received a <span>4x higher acceptance rate</span> for Ivy Leagues/Top 15 universities and <span>more than 6x</span> for Top 25 universities. Additionally, more than <span>90% of our students</span> were accepted into a Top 50 university and <span>over 98%</span> for a Top 100.</div>
            </div>
          </div>

          <button class='who__btn btn-cta'>
            watch FREE video
            <img src='${config.dir}/img/arrow-right-solid.svg' />
          </button>
        </div>
      </div>


      <div class='trusted'>
        <div class='lav-container'>
          <div class='trusted__inner'>
            <div class='trusted__title'>
              Trusted by industry experts<br/>and 50 000+ parents
            </div>
            <div class='trusted__logos'>
              <div class='trusted__logo'>
                <img src='${config.dir}/img/featured1.svg' />
              </div>
              <div class='trusted__logo'>
                <img src='${config.dir}/img/featured2.svg' />
              </div>
              <div class='trusted__logo active'>
                <img src='${config.dir}/img/featured3.svg' />
              </div>
              <div class='trusted__logo'>
                <img src='${config.dir}/img/featured4.svg' />
              </div>
              <div class='trusted__logo'>
                <img src='${config.dir}/img/featured5.svg' />
              </div>
              <div class='trusted__logo'>
                <img src='${config.dir}/img/featured6.svg' />
              </div>
            </div>
            <div class='trusted__quote'>
              <div class='trusted__descr'>
                “Since 2007, Zenith has been working with families and students to create fully tailored and customized online consulting and learning programs, designed specifically for the college application process, that help students identify their personalized paths of choice.”
              </div>
              <div class='trusted__author'>Rod Berger</div>
            </div>
          </div>
        </div>
      </div>

      
      <div class='reviews'>
        <div class='lav-container'>
          <div class='reviews__hedaer'>
            <div class='reviews__title'>Hear what parents just like YOU think about us</div>
            <div class='reviews__pagination'></div>
          </div>

          <div class='reviews__slider'>
            <div class='review'>
              <div class='review__preview'>
                <img src='${config.dir}/img/kevin.png' />
              </div>
              <div class='review__body'>
                <div class='review__name'>Alex</div>
                <div class='review__descr'>Alex has been so happy with his relationship with Zenith that he’s looking forward to signing up his younger kids when they’re old enough  ...</div>
                <div class='review__details'><span>Read more</span> ></div>
              </div>
            </div>
          </div>

          <div class='reviews__cta'>
            <button class='reviews__btn btn-cta'>
              watch FREE video
              <img src='${config.dir}/img/arrow-right-solid.svg' />
            </button>
          </div>
        </div>
      </div>


      <div class='webinars'>
        <div class='lav-container'>
          <div class='webinars__title'>Our webinars</div>
          <div class='webinars__list'>
            TODO SLIDES
          </div>
        </div>
      </div>


      <div class="metrics">
        <div class="lav-container">
          <div class="metrics__logo">
            <img src="${config.dir}/img/logo-contrast.svg">
          </div>
          <div class="metrics__title">Who is ZENITH PREP ACADEMY</div>

          <div class="metrics__list">
            <div class="metrics__item">
              <div class="metrics__item-value">650ᵗʰ</div>
              <div class="metrics__item-caption">fastest-growing private company in the US</div>
            </div>
            <div class="metrics__item">
              <div class="metrics__item-value">9ᵗʰ</div>
              <div class="metrics__item-caption">fastest-growing education company in the US</div>
            </div>
            <div class="metrics__item">
              <div class="metrics__item-value">16+</div>
              <div class="metrics__item-caption">years in the business</div>
            </div>
            <div class="metrics__item">
              <div class="metrics__item-value">Thousands</div>
              <div class="metrics__item-caption">of students have worked with us</div>
            </div>
            <div class="metrics__item">
              <div class="metrics__item-value">40+</div>
              <div class="metrics__item-caption">states we have students in</div>
            </div>
          </div>

          <button class="metrics__btn btn-cta">
            watch FREE video
            <img src="${config.dir}/img/arrow-right-solid.svg">
          </button>
        </div>
      </div>


      <div class='award'>
        <div class='lav-container'>
          <div class='award__title'>Awards won</div>
          <div class='award__main'>
            <img src="${config.dir}/img/awards.png">
            <div class='award__list'>
            
            </div>
          </div>
          <div class='award__divider award__title'>&</div>
          <div class='award__title'>In The News</div>
          <div class='award__arrow'>
            <img src='${config.dir}/img/arrow-dashed.svg' />
          </div>
          <div class='award__device'>
            <img src='${config.dir}/img/award-device.png' />
          </div>
        </div>
      </div>


      <div class='biggest'>
        <div class='lav-container'>
          <div class='biggest__plate'>
            <div class='biggest__info'>
              <div class='biggest__title'>
                <span>One of the biggest<br/> problems</span> with getting</br> into college is that:
              </div>

              <div class='biggest__caption'>
                <span>Having Good GPA / SAT Scores</span> <img src='${config.dir}/img/not-equal.svg' /><br/> Getting Accepted into a Good University
              </div>

              <button class='biggest__btn btn-cta btn-cta_black'>
                watch FREE video
                <img src='${config.dir}/img/arrow-right-solid_white.svg' />
              </button>
              <div class='biggest__age'>For parents of  <span>12-18 year-olds</span></div>
            </div>

            <div class='biggest__image'>
              <img src='${config.dir}/img/biggest.svg' />
            </div>
          </div>
        </div>
      </div>


      <div class='hear'>
        <div class='lav-container'>
          <div class='hear__title'>Hear from universities<br/>themselves:</div>
          <div class='hear__list'>
            <div class='hear__item'>
              <div class='hear__item-img'>
                <img src='${config.dir}/img/yale.svg' />
              </div>
              <div class='hear__item-descr'>
                “Academic criteria are important to Yale’s selective admissions process, but we look at far more than test scores and grades... every applicant brings something unique to the admissions committee table. <br/><br/> 
                Perhaps one application stands out because of sparkling recommendations, while another presents outstanding extracurricular talent; maybe your personality shines through a powerful written voice.”
              </div>
            </div>

            <div class='hear__item'>
              <div class='hear__item-img'>
                <img src='${config.dir}/img/stanford.svg' />
              </div>
              <div class='hear__item-descr'>
                "Even perfect test scores don't guarantee admission. Far from it: 69% of Stanford's applicants over the past five years who scored a perfect score on the SAT were rejected... we're also looking for evidence that this young person has a passion, that he or she will bring something to our community that is unique."
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class='sec'>
        <div class='lav-container'></div>
      </div>


      <div class='sec'>
        <div class='lav-container'></div>
      </div>


      <div class='sec'>
        <div class='lav-container'></div>
      </div>


    </div>
  `;

  document.body.insertAdjacentHTML('afterbegin', html);
}

// *** Utils *** //
class Modal {
  static list = [];
  constructor(name, innerHTML) {
    if (!_$('.lav-modal')) {
      this.constructor.init();
    }
    this.el = document.createElement('div');
    this.el.classList.add('lav-modal__inner', name);
    this.name = name;
    this.el.innerHTML = innerHTML;

    _$('.lav-modal').insertAdjacentElement('beforeend', this.el);

    this.constructor.list.push(this);
  }

  static init() {
    document.body.insertAdjacentHTML(
      'beforeend',
      "<div class='lav-modal'></div>"
    );

    document.addEventListener('click', (e) => {
      if (
        e.target.classList.contains('lav-modal') ||
        e.target.closest('.lav-modal__close')
      )
        this.close();

      if (e.target.dataset.modal) {
        this.open(e.target.dataset.modal);
      }
    });

    this.addStyles();
  }

  static open(modalName, cb) {
    document.body.classList.add('lav-modal-open');

    if (_$('.lav-modal__inner.active')) {
      _$('.lav-modal__inner.active').classList.remove('active');
    }

    _$(modalName).classList.add('active');

    if (typeof cb === 'function') cb();

    setTimeout(() => {
      _$('.lav-modal').classList.add('active');
    }, 100);
  }

  static close(cb) {
    document.body.classList.remove('lav-modal-open');

    _$('.lav-modal')?.classList.remove('active');

    if (typeof cb === 'function') cb();

    setTimeout(() => {
      _$('.lav-modal__inner.active')?.classList.remove('active');
    }, 400);
  }

  static addStyles() {
    const styles = `
      .lav-modal {
        position: fixed;
        z-index: 999;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(0,0,0,.1);
        backdrop-filter: blur(3px);
        -webkit-backdrop-filter: blur(3px);
        transition: 0.35s;
        opacity: 0;
        pointer-events: none;
        padding: 15px;
        overflow-y: auto;
        max-height: 100%;
        display: flex;
      }
      .lav-modal.active {
        opacity: 1;
        pointer-events: auto;
      }
      .lav-modal__inner {
        position: relative;
        background: #fff;
        max-width: 380px;
        width: 100%;
        display: none;
        margin: auto;
      }
      .lav-modal__inner.active {
        display: block;
      }
      .lav-modal__close {
        cursor: pointer;
        transition: 0.35s;
      }
      @media(hover:hover) {
        .lav-modal__close:hover {
          opacity: 0.5;
        }
      }
      .lav-modal-open {
        overflow: hidden;
      }
    `;

    const stylesEl = document.createElement('style');
    stylesEl.classList.add('exp-modal');
    stylesEl.innerHTML = styles;
    document.head.appendChild(stylesEl);
  }
}

// *** HELPERS *** //

// Waiting for loading by condition
async function waitFor(condition, cb = false, customConfig = {}) {
  const config = {
    ms: 500, // repeat each 0.5 second if condition is false
    limit: 10, // limit in second seconds

    ...customConfig,
  };

  if (typeof condition === 'function') {
    if (condition()) {
      if (typeof cb === 'function') cb();
      return;
    }

    return new Promise((resolve) => {
      let limit = config.limit * 1000;
      const interval = setInterval(function () {
        if (condition() || limit <= 0) {
          clearInterval(interval);
          if (limit > 0 && typeof cb === 'function') cb();
          resolve();
        }
        limit -= config.ms;
      }, config.ms);
    });
  }

  if (condition.startsWith('.') || condition.startsWith('#')) {
    if (_$(condition)) {
      if (typeof cb === 'function') cb(_$(condition));
      return;
    }

    return new Promise((resolve) => {
      const observer = new MutationObserver((mutations, observer) => {
        if (_$(condition)) {
          if (typeof cb === 'function') cb(_$(condition));
          observer.disconnect();
          resolve();
        }
      });

      observer.observe(document, { childList: true, subtree: true });
    });
  }
}

// Mutation Observer
function initMutation(observeEl = document.body, cbAdded, cbRemoved) {
  const el = typeof observeEl === 'string' ? _$(observeEl) : observeEl;

  if (!el) return;

  let observer = new MutationObserver((mutations) => {
    for (let mutation of mutations) {
      if (typeof cbAdded === 'function') {
        for (let node of mutation.addedNodes) {
          if (!(node instanceof HTMLElement)) continue;
          cbAdded(node);
        }
      }

      if (typeof cbRemoved === 'function') {
        for (let node of mutation.addedNodes) {
          if (!(node instanceof HTMLElement)) continue;
          cbRemoved(node);
        }
      }
    }
  });

  observer.observe(el, { childList: true, subtree: true });

  return observer;
}

// Intersection Observer
function initIntersection(observeEl, cb, customConfig) {
  const el = typeof observeEl === 'string' ? _$(observeEl) : observeEl;

  if (!el || typeof cb !== 'function') return;

  const config = {
    root: null,
    threshold: 0.3, // 0 - 1
    ...customConfig,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      cb(entry);
    });
  }, config);

  observer.observe(el);

  return observer;
}

function focusTimeEvent(el, cb) {
  let entryTime = 0;
  initIntersection(
    el,
    ({ isIntersecting, time }) => {
      if (isIntersecting) {
        entryTime = time;
      } else if (entryTime) {
        cb(time - entryTime);
        entryTime = 0;
      }
    },
    { threshold: 0.1 }
  );
}

// Artificial delay
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Check if element in viewport
function isElementInViewport(selector) {
  const el = typeof selector === 'string' ? _$(selector) : selector;

  if (!el) return false;

  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Shordcode for selectors
function _$(selector, context = document) {
  return context.querySelector(selector);
}
function _$$(selector, context = document, toSimpleArray = false) {
  const arr = context.querySelectorAll(selector);

  return toSimpleArray ? Array.from(arr) : arr;
}

// GA 4 events
function pushDataLayer(name = '', desc = '', type = '', loc = '') {
  try {
    const event = {
      event: 'event-to-ga4',
      event_name: name,
      event_desc: desc,
      event_type: type,
      event_loc: loc,
    };

    console.debug('** GA4 Event **', event);

    if (!config.debug) {
      dataLayer.push(event);
    }
  } catch (e) {
    console.log('** GA4 Error **', e);
  }
}

// *** Exp BG process *** //

//Clarity
if (
  !config.debug &&
  Array.isArray(config.clarity) &&
  config.clarity.length === 3
) {
  waitFor(
    () => typeof clarity == 'function',
    () => {
      clarity(...config.clarity);
    }
  );
}
