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
  .containerWrapper {
    display: none;
  }
  .exp-layout {
    font-family: 'Inter', sans-serif;
  }
  .exp-layout img {
    max-width: 100%;
  }
  .splide-nav {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .splide__arrow {
    cursor: pointer;
    transition: 0.3s;
  }
  @media(hover: hover) {
    .splide__arrow:hover {
      transform: scale(1.2);
      opacity: 0.8;
    }
  }
  .splide-nav__num {
    width: 80px;
    text-align: center;
    margin: 0 80px;
    font-family: 'Kaisei Tokumin', serif;
    font-size: 24px;
    line-height: 32px; 
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
    white-space: nowrap;
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
  @media(max-width: 1280px) {
    .jumb-featured__title {
      margin-right: 40px;
    }
    .jumb-featured__logos {
      gap: 20px;
    }
  }
  @media(max-width: 992px) {
    .jumb {
      padding-top: 40px;
      padding-bottom: 85px;
    }
    .jumb__title {
      margin-top: 32px;
      font-size: 24px;
      line-height: 32px;
    }
    .jumb__caption {
      font-size: 16px;
      line-height: 24px;
      margin-top: 16px;
    }
    .jumb__btn {
      margin-top: 24px;
    }
    .btn-cta {
      max-width: 300px;
      height: 56px;
      padding: 16px;
      font-size: 14px;
    }
    .btn-cta img {
      margin-left: 12px;
    }
    .jumb__arrow {
      display: none;
    }
    .jumb__watched {
      margin-top: 24px;
      font-size: 13px;
      line-height: 18px
    }
    .jumb-about {
      margin-top: 32px;
      padding: 32px 16px 24px;
    }
    .jumb-about__caption {
      font-size: 16px;
      line-height: 24px;
    }
    .jumb-featured {
      display: block;
      margin-top: 40px;
    }
    .jumb-featured__title {
      margin-right: 0;
      margin-bottom: 24px;
    }
    .jumb-featured__logos {
      justify-content: center;
      flex-wrap: wrap;
      gap: 16px 48px;
    }
    .jumb-owner {
      margin-top: 40px;
    }
    .jumb-owner__image {
      flex-shrink: 1;
      min-width: 300px;
      margin-right: 30px;
    }
    .jumb-about__title {
      font-size: 24px;
      line-height: 32px;
      margin-top: 0;
      text-align: center;
      display: inline;
    }
    .jumb-about__info {
      text-align: center;
    }
    .jumb-about {
      flex-flow: column-reverse;
      align-items: center;
      max-width: 312px;
      width: 100%;
    }
    .jumb-about__preview {
      margin-top: 32px;
      margin-right: 0;
    }
    .jumb-about__caption {
      text-align: center;
    }
  }
  @media(max-width: 768px) {
    .jumb-owner {
      display: block;
    }
    .jumb-owner__image {
      margin-right: 0;
      min-width: auto;
    }
    .jumb-owner__info {
      margin-top: 24px;
      text-align: center;
    }
    .jumb-owner__description {
      padding-left: 0;
      letter-spacing: -0.28px;
      font-size: 14px;
      line-height: 24px;
      margin-top: 20px;
    }
    .jumb__caption br {
      display: none;
    }
    .jumb-owner__description:before {
      display: none;
    }
    .jumb-owner__title {
      font-size: 28px;
      line-height: 36px;
    }
    .jumb-owner__image img {
      width: 240px;
    }
    .jumb-featured__title {
      font-size: 14px;
      line-height: 20px;
    }
    .jumb__logo img {
      max-width: 150px;
    }
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
    text-decoration: underline 1px solid #5CDDDB;
    text-underline-offset: 10%;
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
  @media(max-width: 992px) {
    .learn__list {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px 15px;
    }
    .learn__title {
      font-size: 28px;
      line-height: 36px;
    }
    .learn {
      padding: 40px 0;
    }
  }
  @media(max-width: 768px) {
    .learn__list {
      margin-top: 24px;
    }
    .learn__title br {
      display: none;
    }
    .learn__caption {
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.28px;
    }
    .learn__divider {
      margin: 24px 0;
    }
    .learn__divider img:first-child {
      width: 48px;
    }
    .learn__divider img:last-child {
      width: 80px;
    }
    .learn__divider:before {
      top: 24px;
    }
    .learn__cta {
      margin-top: 32px;
    }
    .learn__btn {
      max-width: 100%;
    }
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
  @media(max-width: 1280px) {
    .examples__item-head {
      font-size: 12px;
    }
  }
  @media(max-width: 992px) {
    .examples {
      padding: 40px 0;
    }
    .examples__title {
      font-size: 24px;
      line-height: 32px; 
    }
    .examples__title br {
      display: none;
    }
    .examples__table {
      margin-top: 32px;
    }
    .examples__row {
      display: block;
    }
    .examples__row + .examples__row {
      margin-top: 24px;
    }
    .examples__item-head {
      font-size: 13px;
      line-height: 18px;
    }
    .examples__row + .examples__row .examples__item-head {
      display: block;
    }
    .examples__item + .examples__item {
      border-left: none;
    }
    .examples__item-head {
      border-top: 1px solid rgba(255, 255, 255, 0.20);
    }
    .examples__row {
      border-top: 0;
    }
  }
  @media(max-width: 768px) {
    .examples__item-head {
      padding: 9px 10px;
    }
    .examples__item-body {
      padding: 16px;
    }
    .examples__descr img {
      margin-right: 12px;
    }
    .examples__subtitle + .examples__descr {
      margin-top: 10px;
    }
    .examples__row:first-child .examples__descr:not(.examples__descr_plain) {
      display: block;
    }
    .examples__row:first-child .examples__descr img {
      display: block;
      margin-right: 0;
      margin-bottom: 8px;
    }
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
  @media(max-width: 1280px) {
    .parents__info {
      max-width: 50%;
    }
    .parents__plate {
      padding: 50px;
    }
  }
  @media(max-width: 992px) {
    .parents__plate {
      flex-flow: column-reverse;
      text-align: center;
      align-items: center;
    }
    .parents__info {
      max-width: 100%;
      margin-top: 24px;
    }
    .parents__image {
      margin-left: 0;
    }
    .parents {
      padding: 40px 0;
    }
    .parents__info {
      padding-bottom: 0;
    }
  }
  @media(max-width: 768px) {
    .parents__plate:before {
      left: 8px;
      right: 8px;
      top: 8px;
      bottom: 8px;
    }
    .parents__title {
      font-size: 22px;
      line-height: 30px;
    }
    .parents__plate {
      padding: 32px 30px 40px;
    }
    .parents__image {
      max-width: 200px;
    }
    .parents__caption {
      margin-top: 12px;
      font-size: 14px;
      line-height: 20px;
    }
    .parents__caption br {
      display: none;
    }
    .parents__btn {
      margin-top: 20px;
    }
    .parents__age {
      margin-top: 16px;
      font-size: 14px;
      line-height: 20px;
    }
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
  @media(max-width: 1280px) {}
  @media(max-width: 992px) {
    .who {
      padding: 40px 0;
    }
    .who__title {
      font-size: 24px;
      line-height: 32px;
      margin-top: 16px;
    }
    .who__list {
      margin-top: 32px;
    }
    .who__list {
      grid-template-columns: 1fr;
      gap: 16px;
    }
  }
  @media(max-width: 768px) {
    .who__logo img {
      max-width: 165px;
    }
    .who__caption {
      margin-top: 12px;
    }
    .who__item {
      padding: 24px;
    }
    .who__item-title {
      font-size: 18px;
      line-height: 26px;
      margin-bottom: 16px;
      padding-bottom: 16px;
    }
    .who__item-title br {
      display: none;
    }
    .who__item-descr {
      font-size: 14px;
      line-height: 20px;
    }
    .who__btn {
      display: none;
    }
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
  @media(max-width: 1280px) {}
  @media(max-width: 992px) {
    .trusted {
      margin: 40px 0;
    }
    .trusted__inner {
      padding: 40px 0;
      overflow: hidden;
    }
    .trusted__title {
      font-size: 24px;
      line-height: 32px;
    }
    .trusted__title br {
      display: none;
    }
  }
  @media(max-width: 768px) {}


  .reviews {
    margin: 120px 0;
  }
  .reviews__title {
    color: #21293E;
    font-family: 'Kaisei Tokumin', serif;
    font-size: 40px;
    line-height: 48px; 
  }
  .reviews__title span {
    text-decoration: underline 1px solid #5CDDDB;
    text-underline-offset: 10%;
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
  @media(max-width: 1280px) {}
  @media(max-width: 992px) {
    .reviews {
      margin: 40px 0;
    }
    .reviews__title {
      text-align: center;
      font-size: 24px;
      line-height: 32px;
    }
    .reviews__slider {
      margin-top: 32px;
    }
  }
  @media(max-width: 768px) {
    .review__body {
      padding: 24px 20px;
    }
    .review__descr {
      line-height: 20px;
      margin-top: 16px;
    }
    .review__details {
      margin-top: 16px;
    }
    .review__name {
      font-size: 20px;
      line-height: 28px;
    }
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
  .webinars__slider {
    margin-top: 72px;
  }
  .webinars__nav {
    margin-top: 56px;
  }
  .webinars .splide__slide.is-active {
    position: relative; 
    z-index: 1;
  }
  .webinars .splide__slide img {
    transition: transform 0.3s;
    min-height: 100%;
    object-fit: cover;
    min-width: 100%;
  }
  .webinars .splide__slide.is-active img {
    transform: scale(1.25);
  }
  .webinars .splide__track {
    padding-top: 40px;
    padding-bottom: 40px;
  }
  @media(max-width: 1280px) {}
  @media(max-width: 992px) {
    .webinars {
      padding: 40px 0;
    }
    .webinars__title {
      font-size: 28px;
      line-height: 36px;
    }
    .webinars__nav {
      margin-top: 24px;
    }
    .webinars__slider {
      margin-top: 32px;
    }
  }
  @media(max-width: 768px) {}



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
  @media(max-width: 1280px) {}
  @media(max-width: 992px) {
    .metrics {
      margin: 40px 0 60px;
    }
    .metrics__logo img {
      max-width: 165px;
    }
    .metrics__title {
      margin-top: 16px;
      font-size: 24px;
      line-height: 32px;
    }
    .metrics__list {
      margin-top: 32px;
      display: grid;
      gap: 20px 15px;
      grid-template-columns: 1fr 1fr;
    }
    .metrics__item {
      max-width: 100%;
    }
    .metrics__btn {
      margin-top: 32px;
    }
  }
  @media(max-width: 768px) {
    .metrics__btn {
      max-width: 100%;
    }
    .metrics__item-value {
      font-size: 32px;
      line-height: 40px; 
    }
    .metrics__item-caption {
      margin-top: 12px;
      padding-top: 12px;
      font-size: 14px;
      line-height: 20px;
      text-align: left;
    }
    .metrics__item:nth-child(4) .metrics__item-value {
      font-size: 22px;
    }
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
  .award-mob {
    display: none;
  }
  @media(max-width: 1280px) {}
  @media(max-width: 992px) {
    
  }
  @media(max-width: 768px) {
    .award-desk {
      display: none;
    }
    .award-mob {
      display: block;
    }
    .award {
      padding: 40px 0 0;
    }
    .award__title {
      font-size: 28px;
      line-height: 36px;
    }
    .award__main {
      margin-top: 32px;
    }
    .award__divider {
      margin-top: 32px;
    }
    .award__arrow {
      margin-top: 16px;
    }
    .award__arrow img {
      max-width: 80px;
    }
    .award__device {
      margin-top: 26px;
    }
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
  @media(max-width: 1280px) {
    .biggest__info {
      max-width: 50%;
    }
    .biggest__plate {
      padding: 50px;
    }
  }
  @media(max-width: 992px) {
    .biggest__plate {
      flex-flow: column-reverse;
      text-align: center;
      align-items: center;
    }
    .biggest__info {
      max-width: 100%;
      margin-top: 24px;
    }
    .biggest__image {
      margin-left: 0;
    }
    .biggest {
      padding: 40px 0;
    }
    .biggest__info {
      padding-bottom: 0;
    }
  }
  @media(max-width: 768px) {
    .biggest__plate:before {
      left: 8px;
      right: 8px;
      top: 8px;
      bottom: 8px;
    }
    .biggest__title {
      font-size: 22px;
      line-height: 30px;
    }
    .biggest__plate {
      padding: 32px 30px 40px;
    }
    .biggest__image {
      max-width: 176px;
    }
    .biggest__caption {
      margin-top: 12px;
      font-size: 14px;
      line-height: 20px;
    }
    .biggest__caption br {
      display: none;
    }
    .biggest__btn {
      margin-top: 20px;
    }
    .biggest__age {
      margin-top: 16px;
      font-size: 14px;
      line-height: 20px;
    }
  }


  .hear {
    padding: 90px 0;
    background: url('${config.dir}/img/hear-bg.jpeg') -32px top / cover no-repeat;
  }
  .hear__title {
    color: #fff;
    font-family: 'Kaisei Tokumin', serif;
    font-size: 48px;
    font-weight: 500;
    line-height: 56px;
    text-align: center;
  }
  .hear__list {
    margin: 72px auto 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    max-width: 1150px;
    width: 100%;
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
  @media(max-width: 1280px) {}
  @media(max-width: 992px) {
    .hear__list {
      grid-template-columns: 1fr;
      margin-top: 32px;
      gap: 20px;
    }
    .hear__title {
      line-height: 32px;
      font-size: 28px;
    }
    .hear {
      padding: 40px 0;
    }
  }
  @media(max-width: 768px) {
    .hear__item {
      padding: 24px 20px;
    }
    .hear__item-descr {
      padding-top: 16px;
      margin-top: 16px;
      font-size: 14px; 
      line-height: 20px;
    }
  }


  .cycles {
    padding: 120px 0;
    text-align: center;
  }
  .cycles__title {
    color: #21293E;
    font-family: 'Kaisei Tokumin', serif;
    font-size: 48px;
    font-weight: 400;
    line-height: 56px;
    letter-spacing: 1px;
  }
  .cycles__list {
    margin-top: 72px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }
  .cycles__item {
    border: 1px dashed #DFE3EE;
    background: #F9FAFB;
    padding: 0 32px 40px;
  }
  .cycles__accepted {
    background: #DFE3EE;
    padding: 6px 16px;
    color: #21293E;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  .cycles__accepted span {
    font-weight: 600;
  }
  .cycles__logo {
    margin-top: 48px;
    line-height: 0;
  }
  .cycles__info {
    margin: 24px auto 0;
    padding-top: 24px;
    border-top: 1px solid #DFE3EE;
    max-width: 317px;
  }
  .cycles__students {
    color: #515E7A;
    font-size: 16px;
    line-height: 24px;
  }
  .cycles__descr {
    margin-top: 16px;
    color: #515E7A;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
  }
  .cycles__btn {
    margin-top: 48px;
  }
  @media(max-width: 1280px) {}
  @media(max-width: 992px) {
    .cycles {
      padding: 40px 0;
    }
    .cycles__title {
      font-size: 28px;
      line-height: 32px
    }
    .cycles__list {
      margin-top: 32px;
      grid-template-columns: 1fr;
      gap: 16px;
    }
    .cycles__item {
      padding: 0 20px 24px;
    }
    .cycles__info {
      max-width: 100%;
    }
  }
  @media(max-width: 768px) {
    .cycles__accepted {
      font-size: 13px;
      line-height: 18px;
    }
    .cycles__logo {
      margin-top: 32px;
    }
    .cycles__info {
      margin-top: 20px;
      padding-top: 20px;
    }
    .cycles__students, .cycles__descr {
      font-size: 14px;
      line-height: 20px;
    }
    .cycles__btn {
      margin-top: 32px;
    }
  }



  .secret {
    background: linear-gradient(140deg, #02102F 16.4%, #12162F 28.44%, #12162F 36.41%, #11132B 53.66%, #020B22 73.88%, #11132B 85.38%);
    padding: 90px 0;
    color: #fff;
  }
  .secret__problem {
    position: relative;
    text-align: center;
    padding: 30px 80px;
    max-width: 710px;
    margin: 0 auto;
    border: 1px dashed rgba(255, 255, 255, 0.10);
    background: #21293E;
  }
  .secret__problem img {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(0%, -50%);
  }
  .secret__problem-title {
    font-family: 'Kaisei Tokumin', serif;
    font-size: 48px;
    line-height: 56px; 
    background: linear-gradient(135deg, #FFDA81 24.24%, #FFB574 73.2%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .secret__problem-caption {
    margin-top: 16px;
    font-size: 18px;
    line-height: 32px;
  }
  .secret__title {
    margin-top: 90px;
    text-align: center;
    font-family: 'Kaisei Tokumin', serif;
    font-size: 48px;
    line-height: 56px;
    background: linear-gradient(135deg, #FFDA81 24.24%, #FFB574 73.2%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .secret__caption {
    margin: 24px auto 0;
    text-align: center;
    font-size: 18px;
    line-height: 32px;
    max-width: 620px
  }
  .secret__caption span {
    font-weight: 600;
  }
  .secret__plate {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 24px auto 0;
    border-radius: 4px;
    border: 1px dashed rgba(255, 255, 255, 0.10);
    background: #0B132D;
    padding: 55px 80px;
    max-width: 1200px;
    width: 100%;
  }
  .secret__plate-descr {
    color: #F9FAFB;
    font-size: 16px;
    line-height: 24px;
    max-width: 480px;
    width: 100%;
    margin-left: 50px;
  }
  .secret__plate-descr span {
    font-weight: 600;
  }
  .secret__plate-descr div + div {
    margin-top: 15px;
  }
  .secret_mark {
    border-bottom: 1px solid #87F5FC;
  }
  .secret__footer {
    text-align: center;
  }
  .secret__watch, .secret__parents {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  .secret__watch {
    margin-top: 50px;
  }
  .secret__watch span, .secret__parents span {
    font-weight: 600;
  }
  .secret__btn {
    margin-top: 40px;
  }
  .secret__parents {
    color: #F9FAFB;
    margin-top: 24px;
  }
  @media(max-width: 1280px) {}
  @media(max-width: 992px) {}
  @media(max-width: 768px) {
    .secret {
      padding: 48px 0 40px;
    }
    .secret__problem {
      padding: 30px 20px;
    }
    .secret__problem-title {
      font-size: 28px;
      line-height: 36px;
    }
    .secret__problem-caption {
      font-size: 16px;
      line-height: 24px;
    }
    .secret__problem img {
      max-width: 80px;
    }
    .secret__title {
      margin-top: 40px;
      font-size: 28px;
      line-height: 36px
    }
    .secret__caption {
      margin-top: 16px;
      font-size: 16px;
      line-height: 24px;
    }
    .secret__plate {
      margin-top: 24px;
      display: block;
      padding: 32px 20px;
    }
    .secret__plate-img img {
      max-width: 260px;
    }
    .secret__plate-img {
      text-align: center;
    }
    .secret__plate-descr {
      margin-left: 0;
      padding-top: 32px;
      font-size: 14px;
      line-height: 20px;
    }
    .secret__watch {
      font-size: 14px;
      line-height: 20px;
    }
    .secret__btn {
      margin-top: 32px;
    }
    .secret__parents {
      margin-top: 20px;
    }
  }


  .proven {
    padding: 90px 0 140px;
    background: linear-gradient(140deg, #02102F 16.4%, #12162F 28.44%, #12162F 36.41%, #11132B 53.66%, #020B22 73.88%, #11132B 85.38%);
    color: #fff;
  }
  .proven__title {
    text-align: center;
    font-family: 'Kaisei Tokumin', serif;
    font-size: 48px;
    font-weight: 500;
    line-height: 56px;
  }
  .proven__caption {
    margin-top: 24px;
    text-align: center;
    font-size: 18px;
    line-height: 32px;
  }
  .proven__list {
    margin-top: 72px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
  }
  .proven__item {
    border-radius: 4px;
    border: 1px dashed rgba(255, 255, 255, 0.10);
    background: #0B132D;
    padding: 40px;
  }
  .proven__value {
    text-align: center;
    font-family: 'Kaisei Tokumin', serif;
    font-size: 56px;
    line-height: 64px;
    background: linear-gradient(135deg, #FFDA81 24.24%, #FFB574 73.2%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .proven__descr {
    color: #F9FAFB;
    font-size: 16px;
    line-height: 24px;
    padding-top: 16px;
    margin-top: 16px;
    border-top: 1px solid rgba(255, 255, 255, 0.20);
  }
  @media(max-width: 1280px) {
    .proven__item {
      padding: 24px 20px;
    }
  }
  @media(max-width: 992px) {
    .proven__list {
      margin-top: 32px;
      grid-template-columns: 1fr 1fr;
      gap: 9px;
    }
  }
  @media(max-width: 768px) {
    .proven {
      padding: 40px 0 15px;
    }
    .proven__title {
      font-size: 28px;
      line-height: 36px;
    }
    .proven__title br {
      display: none;
    }
    .proven__caption {
      margin-top: 16px;
      font-size: 16px;
      line-height: 24px;
    }
    .proven__value {
      font-size: 32px;
      line-height: 40px;
    }
    .proven__descr {
      font-size: 14px;
      line-height: 20px;
    }
  }



  .attend {
    text-align: center;
    padding: 120px 0;
  }
  .attend__title {
    color: #21293E;
    font-family: 'Kaisei Tokumin', serif;
    font-size: 48px;
    line-height: 56px;
    letter-spacing: 1px;
  }
  .attend__universities {
    line-height: 0;
    margin-top: 72px;
    text-align: center;
  }
  .attend__btn {
    margin-top: 64px;
  }
  .attend__caption {
    margin-top: 40px;
    color: #515E7A;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  .attend__caption span {
    font-weight: 600;
  }
  .attend-mob {
    display: none;
  }
  @media(max-width: 1280px) {}
  @media(max-width: 992px) {
    .attend {
      padding: 40px 0;
    }
    .attend__title br {
      display: none;
    }
    .attend__title {
      line-height: 32px;
      font-size: 24px;
    }
  }
  @media(max-width: 768px) {
    .attend-mob {
      display: block;
    }
    .attend-desk {
      display: none;
    }
    .attend__universities {
      margin-top: 32px;
    }
    .attend__btn {
      margin-top: 48px;
    }
    .attend__caption {
      margin-top: 20px;
      font-size: 14px;
      line-height: 20px;
    }
  }


  .footer {
    background: linear-gradient(140deg, #031640 16.4%, #12162F 38.68%, #171935 61.31%, #020B22 85.38%);
    text-align: center;
    padding: 8px 0;
    color: #F9FAFB;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
  }
  .footer a {
    color: inherit;
    text-decoration: underline;
  }
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
  connectSplide();
  waitFor(() => typeof Splide !== 'undefined', initSliders);
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
                  <span>In charge of managing the College Consulting program</span>&nbsp;– Provided guidance & advice to 1,000s of families on how their students can gain admissions into <span>top STEM, Business, and Healthcare summer programs,</span> internships, and research opportunities
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
              High-Value <span>Tips</span> And <span>Secrets</span> </br> You’ll Discover Inside The Webinar
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
              <div class='parents__age'>For parents of <span>12-18 year&#8209;olds</span></div>
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
            <div class='reviews__title'>Hear what parents just like YOU <span>think about us</span></div>
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
          
          <div class="splide webinars__slider">
            <div class="splide__track">
              <ul class="splide__list">
                <li class="splide__slide">
                  <img src='${config.dir}/img/webinar/1.jpeg' />
                </li>
                <li class="splide__slide">
                  <img src='${config.dir}/img/webinar/2.jpeg' />
                </li>
                <li class="splide__slide">
                  <img src='${config.dir}/img/webinar/3.jpeg' />
                </li>
                <li class="splide__slide">
                  <img src='${config.dir}/img/webinar/4.jpeg' />
                </li>
                <li class="splide__slide">
                  <img src='${config.dir}/img/webinar/5.jpeg' />
                </li>
                <li class="splide__slide">
                  <img src='${config.dir}/img/webinar/6.jpeg' />
                </li>
                <li class="splide__slide">
                  <img src='${config.dir}/img/webinar/7.jpeg' />
                </li>
                <li class="splide__slide">
                  <img src='${config.dir}/img/webinar/8.jpeg' />
                </li>
                <li class="splide__slide">
                  <img src='${config.dir}/img/webinar/9.jpeg' />
                </li>
                <li class="splide__slide">
                  <img src='${config.dir}/img/webinar/10.jpeg' />
                </li>
                <li class="splide__slide">
                  <img src='${config.dir}/img/webinar/11.jpeg' />
                </li>
                <li class="splide__slide">
                  <img src='${config.dir}/img/webinar/12.jpeg' />
                </li>
                <li class="splide__slide">
                  <img src='${config.dir}/img/webinar/13.jpeg' />
                </li>
                <li class="splide__slide">
                  <img src='${config.dir}/img/webinar/14.jpeg' />
                </li>
                <li class="splide__slide">
                  <img src='${config.dir}/img/webinar/15.jpeg' />
                </li>
                <li class="splide__slide">
                  <img src='${config.dir}/img/webinar/16.jpeg' />
                </li>
                <li class="splide__slide">
                  <img src='${config.dir}/img/webinar/17.jpeg' />
                </li>
              </ul>
            </div>

            <div class='splide-nav webinars__nav splide__arrows'>
              <img class='splide__arrow splide__arrow--prev webinars__nav-prev' src='${config.dir}/img/nav-arrow-left.svg' />

              <div class='splide-nav__num webinars__nav-num'><span>1</span>/ 17</div>

              <img class='splide__arrow splide__arrow--next webinars__nav-next' src='${config.dir}/img/nav-arrow-right.svg' />
            </div>
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
            <img class='award-desk' src="${config.dir}/img/awards.png">
            <img class='award-mob' src="${config.dir}/img/awards-mob.png">
          </div>
          <div class='award__divider award__title'>&</div>
          <div class='award__title'>In The News</div>
          <div class='award__arrow'>
            <img src='${config.dir}/img/arrow-dashed.svg' />
          </div>
          <div class='award__device'>
            <img class='award-desk' src='${config.dir}/img/award-device.png' />
            <img class='award-mob' src='${config.dir}/img/award-device-mob.png' />
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
              <div class='biggest__age'>For parents of  <span>12-18 year&#8209;olds</span></div>
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


      <div class='cycles'>
        <div class='lav-container'>
          <div class='cycles__title'>The reality of recent admissions cycles:</div>

          <div class='cycles__list'>
            <div class='cycles__item'>
              <div class='cycles__accepted'>accepted <span>14,429 students</span></div>
              <div class='cycles__logo'>
                <img src='${config.dir}/img/berkeley.svg' />
              </div>
              <div class='cycles__info'>
                <div class='cycles__students'>40,706 students had a 4.0 GPA or above</div>
                <div class='cycles__descr'>For every 1 spot available at Berkeley, there are ~3 students that apply with a 4.0+ GPA</div>
              </div>
            </div>
            <div class='cycles__item'>
              <div class='cycles__accepted'>accepted <span>2,114 students</span></div>
              <div class='cycles__logo'>
                <img src='${config.dir}/img/stanford.svg' />
              </div>
              <div class='cycles__info'>
                <div class='cycles__students'>25,518 students had a 4.0 GPA or above</div>
                <div class='cycles__descr'>For every 1 spot available at Stanford, there are 12 students that apply with a 4.0+ GPA</div>
              </div>
            </div>
            <div class='cycles__item'>
              <div class='cycles__accepted'>accepted <span>41,684 students</span></div>
              <div class='cycles__logo'>
                <img src='${config.dir}/img/ucdavis.svg' />
              </div>
              <div class='cycles__info'>
                <div class='cycles__students'>41,684 students applied with a 3.7-4.0+ GPA and only 25,580 of those students were admitted</div>
                <div class='cycles__descr'>That means 16,104 students were still rejected with a competitive GPA for UC Davis</div>
              </div>
            </div>
          </div>

          <button class='cycles__btn btn-cta'>
            watch FREE video
            <img src='${config.dir}/img/arrow-right-solid.svg' />
          </button>
        </div>
      </div>


      <div class='secret'>
        <div class='lav-container'>
          <div class='secret__problem'>
            <img src='${config.dir}/img/arrow-dashed-red.svg' />
            <div class='secret__problem-title'>The problem is</div>
            <div class='secret__problem-caption'>That there are FEWER SPACES available THAN STUDENTS who meet the qualification criteria</div>
          </div>

          <div class='secret__title'>3 secret factors</div>
          <div class='secret__caption'>There are 3 factors that universities won't tell you, but are <span>CRITICAL</span> for them in deciding which students to admit.</div>
          
          <div class='secret__plate'>
            <div class='secret__plate-img'>
              <img src='${config.dir}/img/secret-character.svg' />
            </div>
            <div class='secret__plate-descr'>
              <div>In fact, top universities <span>COMMONLY reject students with perfect GPA and SAT</span> scores if they don't have these 3 factors.</div>
              <div>No, we're not talking about gender, race, or income. <span>These 3 factors are 100%</span> within your control if you want to make sure your child has the best chances of getting into a top university.</div>
              <div>And yes, you can even do these when your child is in the 6ᵗʰ-12ᵗʰ grade, but the <span>earlier they start, the more powerful it will be.</span></div>
              <div><span class='secret_mark'>All will be explained in the webinar.</span></div>
            </div>
          </div>

          <div class='secret__footer'>
            <div class='secret__watch'>Watch the webinar and and learn <span>the 3 factors NOW</span></div>
            <button class='secret__btn btn-cta'>
              watch FREE video
              <img src='${config.dir}/img/arrow-right-solid.svg' />
            </button>
            <div class='secret__parents'>For parents of <span>12-18 year&#8209;olds</span></div>
          </div>
        </div>
      </div>


      // todo section
      <div class='sec'>
        <div class='lav-container'>S0me Section</div>
      </div>


      <div class='proven'>
        <div class='lav-container'>
          <div class='proven__title'>Our proven track record</div>
          <div class='proven__caption'>In a recent admissions cycle, Zenith Prep Academy had:</div>
          <div class='proven__list'>
            <div class='proven__item'>
              <div class='proven__value'>5x</div>
              <div class='proven__descr'>Higher acceptance rate into an Ivy League / Top 15 university (Stanford, Harvard, Yale, MIT, Johns Hopkins, Duke, and more)</div>
            </div>

            <div class='proven__item'>
              <div class='proven__value'>8x</div>
              <div class='proven__descr'>Higher acceptance rate into a Top 25 university (compared to the nationwide average)</div>
            </div>

            <div class='proven__item'>
              <div class='proven__value'>90%+</div>
              <div class='proven__descr'>Were accepted into a Top 50 university</div>
            </div>

            <div class='proven__item'>
              <div class='proven__value'>98%+</div>
              <div class='proven__descr'>Were accepted into a Top 100 university</div>
            </div>
          </div>
        </div>
      </div>

      <div class='attend'>
        <div class='lav-container'>
          <div class='attend__title'>Zenith students now attend the following </br>universities:</div>

          <div class='attend__universities'>
            <img class='attend-desk' src='${config.dir}/img/universities.svg' />
            <img class='attend-mob' src='${config.dir}/img/universities-mob.svg' />
          </div>

          <button class='attend__btn btn-cta'>
            watch FREE video
            <img src='${config.dir}/img/arrow-right-solid.svg' />
          </button>
        
          <div class='attend__caption'><span>OVER 100,000 PARENTS</span> JUST LIKE YOU HAVE WATCHED THIS WEBINAR</div>
        </div>
      </div>
   
      <div class='footer'>
        <div class='lav-container'>Copyright &copy; 2023 All Rights Reserved by Zenith Prep Academy | <a href='https://www.zenithprepacademy.com/privacy-policy'>Privacy Policy</a></div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('afterbegin', html);
}

function initSliders() {
  const webinar = new Splide('.webinars__slider', {
    autoplay: true,
    type: 'loop',
    perPage: 3,
    gap: 35,
    focus: 'center',
    pagination: false,
    updateOnMove: true,
    isNavigation: true,
    lazyLoad: 'nearby',
    breakpoints: {},
  });

  webinar.on('move', function (newIndex) {
    _$('.webinars__nav-num span').innerHTML = newIndex + 1;
  });

  webinar.mount();
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

// Slider
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