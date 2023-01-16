console.log('JS GO Started!');

/********* Settings **********/
const settings = {
  dir: 'https://flopsi69.github.io/crs/myluminette/newhome2',
  clarity: false,
  observe: false,
};

// Clarity
if (settings.clarity) {
  const clarityInterval = setInterval(function () {
    if (typeof clarity == 'function') {
      clearInterval(clarityInterval);
      clarity('set', 'new_home_page_layout', 'variant_1');
    }
  }, 1000);
}

// Alalytics
function gaEvent2(action, label) {
  return false;
  if (!label) {
    label = '';
  }
  try {
    var objData = {
      event: 'event-to-ga',
      eventCategory: 'Exp — New home page layout',
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
    padding: 45px 0;
  }
  .home-page {
    background-color: #fff;
  }

  .pin-spacer, [id^=trustbadge-container] {
    display: none!important;
  }
  .home-page > *:not(.lav-wrap) {
    display: none;
  }
  .lav-wrap {
    color: #517193;
  }
  .lav-plate {
    background: #F4F6FA;
    box-shadow: 0px 22px 33px rgba(59, 83, 108, 0.22);
    border-radius: 8px;
    padding: 40px 125px;
  }
  @media(max-width: 768px) {
    .lav-desk {
      display: none!important;
    }
  }
  @media(min-width: 769px) {
    .lav-mob {
      display: none!important;
    }
  }
  .lav-title {
    font-weight: 700;
    font-size: 48px;
    line-height: 48px;
  }
  .lav-descr {
    font-size: 18px;
    line-height: 24px;
  }
  @media(max-width: 768px) {
    .lav-title {
      font-size: 32px;
      line-height: 36px;
    }
    .container, .container-lg, .container-fluid, .container-sm, .container-md, .container-xl {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
  .lav-btn {
    max-width: 356px;
    width: 100%;
  }
  @media(max-width: 768px) {
    .btn-primary.btn-lg .btn-text {
      font-size: 21px;
    }
  }

  .lav-jumb {
    padding: 200px 0 250px;
    display: flex;
    align-items: center;
    min-height: 100vh;
    background: #fff url('${settings.dir}/img/jumb-bg.jpeg') top right no-repeat;
    background-size: cover;
  }
  .lav-jumb__info {
    max-width: 644px;
  }
  .lav-jumb__title {
    font-weight: 800;
    font-size: 54px;
    line-height: 58px;
  }
  .lav-jumb__descr {
    margin: 24px 0 42px;
  }
  .lav-jumb__actions {
    display: flex;
    align-items: center;
  }
  .lav-jumb__learn {
    margin-left: 42px;
    letter-spacing: 1px;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    transition: 0.35s;
    cursor: pointer;
  }
  .lav-jumb__learn:hover {
    opacity: 0.8;
  }
  @media(max-width: 1199px) {
    .lav-jumb {
      background-position: top center;
    }
    .lav-jumb__info {
      max-width: 60%;
    }
  }
  @media(max-width: 992px) {
    .lav-jumb {
      min-height: auto;
      padding-top: 0;
      padding-bottom: 0;
      background-position: 100% -50px;
    }
    .lav-jumb__info {
      max-width: 100%;
    }
    .lav-jumb__actions {
      flex-flow: column;
    }
    .lav-jumb__learn {
      margin-left: 0;
      margin-top: 17px;
    }
    .lav-jumb__container {
      padding-top: 255px;
      background: linear-gradient(360deg, white 30%, transparent 60%);
    }
  }
  @media(max-width: 768px) {
    .lav-jumb__title {
      font-size: 36px;
      line-height: 1;
    }
    .lav-jumb__descr {
      margin: 16px 0;
    }
    .lav-jumb__learn {
      font-weight: 500;
      font-size: 18px;
      line-height: 24px;
      letter-spacing: 0.01em;
    }
    .lav-jumb {
      background: #fff url('${settings.dir}/img/jumb-wooman-mob.png') top center no-repeat;
      background-size: cover;
    }
    .header .logo-wrapper {
      padding-left: 0!important;
    }
  }

  .lav-boost {
    padding: 0;
    transform: translateY(-50%);
  }
  .lav-boost__inner {
    display: flex;
    align-items: center;
  }
  .lav-boost__image {
    flex-shrink: 0;
    margin-right: 75px;
    line-height: 0;
  }
  .lav-boost__title {
    font-weight: 700;
    font-size: 32px;
    line-height: 36px;
    margin-bottom: 24px;
  }
  .lav-boost__stars {}
  .lav-boost__caption {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    margin-top: 8px;
  }
  @media(max-width: 992px) {
    .lav-boost {
      padding: 30px 0 60px;
    }
    .lav-boost__inner {
      padding: 24px;
    }
    .lav-boost {
      transform: none;
    }
  }
  @media(max-width: 768px) {
    .lav-boost__container {
      padding-left: 20px;
      padding-right: 20px;
    }
    .lav-boost__inner {
      text-align: center;
      justify-content: center;
    }
    .lav-boost__image {
      display: none;
    }
    .lav-boost__title {
      font-size: 18px;
      line-height: 24px;
      margin-bottom: 16px;
    }
    .lav-boost__caption {
      font-size: 16px;
      line-height: 24px;
      margin-top: 2px;
    }
    .lav-boost {
      padding-bottom: 30px;
      padding-top: 30px;
      transform: none;
    }
  }

  .lav-problems {
    padding: 0 0 60px;
  }
  .lav-problems__title {
    text-align: center;
  }
  .lav-problems__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    margin-top: 90px;
  }
  .lav-problem {
    display: flex;
    flex-flow: column;
    background-color: #F4F6FA;
    background-position: top center;
    background-size: 100% auto;
    background-repeat: no-repeat;
    filter: drop-shadow(0px 44px 66px rgba(59, 83, 108, 0.22));
    padding-top: 152px;
    border-radius: 8px;
  }
  .lav-problem:nth-child(2) {
    margin: -28px 0;
  }
  .lav-problem:nth-child(5) {
    margin-top: 28px;
    margin-bottom: -28px;
  }
  .lav-problem__info {
    width: 100%;
    margin-top: auto;
    padding: 32px;
  }
  .lav-problem__title {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.01em;
  }
  .lav-problem__list {
    margin-top: 20px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }
  .lav-problem__item {
    position: relative;
    padding-left: 20px;
  }
  .lav-problem__item:before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 7px;
    width: 4px;
    height: 4px;
    background-color: #517193;
    border-radius; 50%;
  }
  .lav-problem__item + .lav-problem__item {
    margin-top: 3px;
  }
  @media(max-width: 1199px) {
    .lav-problems__grid {
      gap: 30px;
    }
  }
  @media(max-width: 992px) {
    .lav-problems__grid {
      grid-template-columns: 1fr 1fr;
    }
    .lav-problem:nth-child(2) {
      margin: 0;
    }
    .lav-problem:nth-child(5) {
      margin: 0;
    }
    .lav-problems__grid {
      margin-top: 60px;
    }
    .lav-problems__title br {
      display: none;
    }
  }
  @media(max-width: 768px) {
    .lav-problems {
      padding: 30px 0;
    }
    .lav-problems__grid {
      grid-template-columns: 1fr;
    }
    .lav-problems__grid {
      margin-top: 30px;
    }
    .lav-problem__info {
      padding: 32px 24px;
    }
    .lav-problems__title {
      text-align: left;
    }
  }

  .lav-drinks {
    position: relative;
    padding-top: 60px;
    padding-bottom: 90px;
  }
  .lav-drinks:before {
    content: '';
    position: absolute;
    bottom: -7vw;;
    left: 0;
    right: 0;
    height: 737px;
    background: url('${settings.dir}/img/drinks-bg.png') left bottom no-repeat;
    background-size: cover;
  }
  .lav-drinks__inner {
    display: flex;
    align-items: center;
    padding: 40px 85px;
    background: linear-gradient(95.3deg, #F8F9FA 27.98%, #FDFDFD 95.76%);
  }
  .lav-drinks__image {
    flex-shrink: 0;
    line-height: 0;
    margin-right: 100px;
    margin-left: 32px;
  }
  .lav-drinks__info {
    font-size: 24px;
    line-height: 32px;
    letter-spacing: 0.01em;
    font-weight: 700;
    max-width: 595px;
  }
  .lav-drinks__container {
    position: relative;
  }
  @media(max-width: 992px) {
    .lav-drinks {
      padding-top: 30px;
      padding-bottom: 60px;
    }
    .lav-drinks:before {
      display: none;
    }
    .lav-drinks__inner {
      padding: 24px 24px 32px;
    }
    .lav-drinks__image {
      margin-left: 0;
    }
  }
  @media(max-width: 768px) {
    .lav-drinks__inner {
      display: block;
    }
    .lav-drinks__image {
      text-align: center;
      margin-right: 0;
    }
    .lav-drinks__image img {
      width: 150px;
    }
    .lav-drinks__info {
      margin-right: 0;
      margin-top: 28px;
      font-weight: 600;
      font-size: 18px;
      line-height: 24px;
    }
  }



  .lav-wears {
    padding-top: 90px;
    padding-bottom: 112px;
    background: linear-gradient(180deg, #406184 13.02%, rgba(64, 97, 132, 0.86) 51.15%, rgba(18, 141, 255, 0) 100%);
  }
  .lav-wears__title {
    text-align: center;
    color: #fff;
  }
  .lav-wears__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    margin-top: 72px;
    margin-bottom: 50px;
  }
  .lav-wear {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    background-color: #F3F6FA;
    padding-top: 187px;
    background-position: top center;
    background-size: 100% auto;
    background-repeat: no-repeat;
    filter: drop-shadow(0px 44px 66px rgba(59, 83, 108, 0.44));
  }
  .lav-wear__info {
    padding: 32px;
  }
  .lav-wear__icon {
    line-height: 0;
  }
  .lav-wear__title {
    margin-top: 24px;
    font-weight: 700;
    font-size: 28px;
    line-height: 32px;
  }
  .lav-wear__list {
    margin-top: 16px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    max-width: 270px;
  }
  .lav-wear__item {
    position: relative;
    padding-left: 32px;
  }
  .lav-wear__item:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background: url(${settings.dir}/img/check.svg) center no-repeat;
    background-size: contain;
  }
  .lav-wear__item + .lav-wear__item {
    margin-top: 12px;
  }
  .lav-wears__btn-wrap {
    text-align: center;
  }
  @media(max-width: 1199px) {
    .lav-wears__grid {
      gap: 16px;
    }
  }
  @media(max-width: 992px) {
    .lav-wears__grid {
      grid-template-columns: 1fr;
      gap: 16px;
    }
  }
  @media(max-width: 768px) {
    .lav-wears {
      padding: 30px 0;
    }
    .lav-wears__title {
      text-align: left;
    }
    .lav-wears__grid {
      margin-top: 30px;
      margin-bottom: 30px;
    }
    .lav-wear__icon {
      text-align: center;
    }
    .lav-wear__title {
      text-align: center;
    }
    .lav-wear__icon img {
      width: 120px;
    }
  }

  .lav-lucimed {
    padding-top: 8px;
  }
  .lav-lucimed__inner {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .lav-lucimed__info {
    width: 50%;
  }
  .lav-lucimed__image {
    // width: 50%;
    line-height: 0;
    width: 100%;
    max-width: 435px;
  }
  .lav-lucimed__image img {
    max-width: 100%;
  }
  .lav-lucimed__descr {
    margin-top: 40px;
    margin-bottom: 28px;
    max-width: 480px;
  }
  .lav-lucimed__link {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #1B7FE7;
    transition: 0.3s;
    cursor: pointer;
  }
  .lav-lucimed__link:hover {
    opacity: 0.8;
  }
  .lav-lucimed__link svg {
    width: 14px;
    position: relative; 
    top: 3px;
  }
  @media(max-width: 992px) {
    .lav-lucimed__image {
      max-width: 40%;
      margin-left: 20px;
    }
  }
  @media(max-width: 768px) {
    .lav-lucimed {
      padding: 30px 0;
    }
    .lav-lucimed__info {
      width: 100%;
    }
    .lav-lucimed__image {
      max-width: 380px;
      margin: 20px auto 30px;
    }
    .lav-lucimed__descr {
      margin-top: 0;
      margin-bottom: 30px;
    }
  }


  .lav-morning__plate {
    display: flex;
    background: #FDFDFD  url('${settings.dir}/img/morning.jpeg') left no-repeat;
    background-size: auto 101%;
    padding: 80px;
    box-shadow: 0px 44px 66px rgba(59, 83, 108, 0.22);
    border-radius: 16px;
  }
  .lav-morning__info {
    max-width: 536px;
    margin-left: auto;
  }
  .lav-morning__descr {
    margin: 24px 0;
  }
  .lav-morning__list {}
  .lav-morning__item {
    display: flex;
    align-items: center;
  }
  .lav-morning__item + .lav-morning__item {
    margin-top: 32px;
  }
  .lav-morning__caption {
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.01em;
  }
  .lav-morning__caption span {
    font-weight: 700;
  }
  .lav-morning__image {
    line-height: 0;
    margin-right: 24px;
  }
  .lav-morning__image img {
    width: 80px;
    height: 80px;
  }
  @media(max-width: 1320px) {
    .lav-morning__plate {
      background-position-x: -40%;
    }
  }
  @media(max-width: 1100px) {
    .lav-morning__plate {
      background-position-x: -30vw;
    }
    .lav-morning__info {
      max-width: 400px;
    }
  }
  @media(max-width: 992px) {
    .lav-morning__plate {
      background: linear-gradient(106.63deg, #F8F9FA 38.5%, #FDFDFD 100.78%);
    }
    .lav-morning__info {
      max-width: 100%;
    }
  }
  @media(max-width: 768px) {
    .lav-morning {
      padding: 0;
    }
    .lav-morning__container {
      width: auto;
      margin-left: -20px;
      margin-right: -20px;
    }
    .lav-morning__plate {
      padding: 30px 20px;
      box-shadow: none;
    }
    .lav-morning__image img {
      width: 69px;
      height: 69px;
    }
    .lav-morning__caption {
      font-size: 18px;
    }
    .lav-morning__image {
      margin-right: 16px;
    }
  }


  .lav-results__title {
    text-align: center;
  }
  .lav-results__row {
    position: relative;
    display: flex;
    margin-top: 74px;
    justify-content: center;
  }
  .lav-results__row:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 2px;
    bottom: 47px;
    background: url(${settings.dir}/img/results-line.png) center no-repeat;
  }
  .lav-results__item {
    position: relative;
  }
  .lav-results__item + .lav-results__item {
    margin-left: 123px;
  }
  .lav-results__item-title {
    font-weight: 700;
    font-size: 22px;
    line-height: 28px;
  }
  .lav-results__item-caption {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px; 
  }
  .lav-results__circle {
    margin-top: 20px;
    width: 24px;
    height: 24px;
    margin-bottom: 12px;
    background: linear-gradient(6.75deg, #3797F1 5.31%, #1B7FE7 94.73%);
    border-radius: 50%;
  }
  @media(max-width: 992px) {
    .lav-results__row {
      display: block;
      max-width: 500px;
      margin-left: auto;
      margin-right: auto;
    }
    .lav-results__item {
      display: flex;
      flex-flow: row-reverse;
    }
    .lav-results__item-caption {
      width: 50%;
      text-align: right;
    }
    .lav-results__item-title {
      width: 50%;
    }
    .lav-results__item + .lav-results__item {
      margin-left: 0;
      margin-top: 24px;
    }
    .lav-results__circle {
      margin: 0 12px;
      flex-shrink: 0;
    }
    .lav-results__row:before {
      background: url(${settings.dir}/img/results-line-mob.svg) center no-repeat;
      top: 7px;
      left: 0;
      right: 0;
      margin: auto;
      width: 2px;
      height: 75%;
      pointer-events: none;
    }
    .lav-results__circle {
      background: #74E6FF;
    }
    .lav-results__item:last-child .lav-results__circle {
      background: #66B8FF;
    }
  }
  @media(max-width: 768px) {
    .lav-results {
      padding-top: 30px;
      padding-bottom: 60px;
    }
    .lav-results__row:before {
      top: 23px;
    }
    .lav-results__row {
      margin-top: 30px;
    }
    .lav-results__title {
      text-align: left;
    }
    .lav-results__item-caption {
      font-weight: 500;
      font-size: 18px;
      line-height: 24px;
      width: 45%;
    }
    .lav-results__row:before {
      right: 5%;
      height: 77%;
    }
    .lav-results__item-title {
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;
    }
    .lav-results__btn {
      max-width: 100%;
      margin-top: 30px;
    }
    .lav-results__circle {
      width: 12px;
      height: 12px;
      margin-top: 7px;
    }
  }

  .lav-benefits {
    text-align: center;
  }
  .lav-benefits__inner {
    padding: 80px 48px 0;
    filter: drop-shadow(0px 44px 66px rgba(59, 83, 108, 0.22));
    border-radius: 16px;
    background: #517193;
    color: #fff;
  }
  .lav-benefits__list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 48px;
    margin-top: 48px;
  }
  .lav-benefit__icon {
    line-height: 0;
  }
  .lav-benefit__title {
    font-size: 24px;
    line-height: 28px;
    margin-top: 12px;
    margin-bottom: 8px;
    font-weight: 700;
  }
  .lav-benefit__btn {
    transform: translateY(50%);
    margin-top: 20px;
  }
  @media(max-width: 992px) {
    .lav-benefits__list {
      grid-template-columns: 1fr;
    }
  }
  @media(max-width: 768px) {
    .lav-benefits__inner {
      margin: 0 -20px;
      border-radius: 0;
      box-shadow: none;
      filter: none;
      padding: 30px 20px;
    }
    .lav-benefits {
      padding: 0;
    }
    .lav-benefit__btn {
      transform: none;
      margin-top: 30px;
    }
    .lav-benefit__icon img {
      width: 92px;
      height: 92px;
    }
    .lav-benefits__list {
      margin-top: 24px;
    }
  }


  .lav-cases__title {
    text-align: center;
  }
  .lav-cases__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-top: 42px;
  }
  .lav-case {
    background: linear-gradient(95.3deg, #F8F9FA 27.98%, #FDFDFD 95.76%);
    box-shadow: 0px 22px 33px rgba(59, 83, 108, 0.22);
    border-radius: 8px;
    overflow: hidden;
  }
  .lav-case__image {
    line-height: 0;
  }
  .lav-case__image img {
    max-width: 100%;
  }
  .lav-case__caption {
    position: relative;
    font-weight: 700;
    padding: 25px 15px;
    text-align: center;
  }
  .lav-case__caption:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    top: 0;
    transform: translateY(-50%);
    width: 32px;
    height: 32px;
    background: #fff url(${settings.dir}/img/check.svg) center no-repeat;
    background-size: contain;
    border-radius: 50%;
  }
  @media(max-width: 768px) {
    .lav-cases {
      padding: 30px 0;
    }
    .lav-cases__title {
      text-align: left;
      margin-right: -20px;
    }
    .lav-cases__list {
      margin-top: 24px;
      display: block;
      margin-left: -20px;
      margin-right: -20px;
      padding-left: 20px;
    }
    .lav-cases .slick-slide {
      width: 246px;
      margin: 0 10px;
    }
    .lav-cases .slick-list {
      overflow: visible;
    }
    .lav-case__caption {
      padding-left: 10px;
      padding-right: 10px;
    }
    .lav-cases .slick-dots {
      display: flex;
      list-style: none;
      justify-content: center;
      margin: 0;
      margin-top: 30px;
      padding: 0;
    }
    .lav-cases .slick-dots button {
      background: #FFFFFF;
      border: 1px solid #4E4F51;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      font-size: 0;
      padding: 0;
      transition: 0.2s;
    }
    .lav-cases .slick-dots li + li {
      margin-left: 26px;
      
    }
    .lav-cases .slick-dots .slick-active button {
      background-color: #4E4F51;
    }
  }

  .lav-recharge__inner {
    background: url('${settings.dir}/img/women.jpeg') left center no-repeat;
    background-size: auto 100%;
    display: flex;
    align-items: center;
    background-color: #f9fafc;
    box-shadow: 0px 44px 66px rgba(59, 83, 108, 0.22);
    border-radius: 16px;
  }
  .lav-recharge__inner>div {
    flex: 1;
  }
  .lav-recharge__preview {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 400px;
    cursor: pointer;
    line-height: 0;
  }
  .lav-recharge__preview:before {
    content: '';
    background: #517193;
    opacity: 0.5;
    filter: blur(25px);
    width: 156px;
    height: 156px;
    border-radius: 50%;
  }
  .lav-recharge__preview img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: 0.35s;
    width: 125px;
    height: 125px;
  }
  .lav-recharge__preview img + img {
    opacity: 0;
  }
  .lav-recharge__preview:hover img  {
    opacity: 0;
  }
  .lav-recharge__preview:hover img + img {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.1);
  }
  .lav-recharge__info {
    margin: 48px 80px;
    max-width: 536px;
    width: 100%;
  }
  .lav-recharge__caption {
    margin-top: 24px;
  }
  @media(max-width: 1199px) {
    .lav-recharge__inner {
      display: block;
      background-size: auto 340px;
      background-position: left top;
    }
    .lav-recharge__info {
      max-width: 100%;
      margin: 0;
      padding: 24px;
      padding-top: 40px;
      border-radius: 0 0 12px 12px;
      text-align: center;
      background: linear-gradient(0deg, rgba(255,255,255,1) 66%, rgba(255,255,255,0.0) 100%);
    }
    .lav-recharge__preview {
      height: 230px;
    }
  }
  @media(max-width: 768px) {
     .lav-recharge__inner {
      background: url('${settings.dir}/img/women-mob.png') left top no-repeat;
      background-size: 100% auto;
    }
    .lav-recharge__preview img {
      width: 80px;
      height: 80px;
    }
    .lav-recharge {
      padding: 30px 0;
    }
    .lav-recharge__info {
      padding-top: 0;
    }
    .lav-recharge__preview:before {
      opacity: 0.3;
      filter: blur(20px);
    }
  }

  .lav-works {
    padding-bottom: 20px;
  }
  .lav-works__row {
    display: flex;
    justify-content: space-between;
  }
  .lav-works__title {
    line-height: 56px;
  }
  .lav-works__info {
    max-width: 504px;
    width: 100%;
  }
  .lav-works__item {
    position: relative;
    margin-top: 24px;
    max-width: 416px;
    padding-left: 32px;
  }
  .lav-works__item:before {
    content: '';
    position: absolute;
    left: 0;
    top: 2px;
    width: 20px;
    height: 20px;
    background: #fff url(${settings.dir}/img/check.svg) center no-repeat;
    background-size: contain;
    border-radius: 50%;
  }
  .lav-works__item-title {
    position: relative;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 8px;
  }
  .lav-works__item-title span {
    color: #6AC6FF;
  }
  .lav-works__image {
    line-height: 0;
    max-width: 525px;
    width: 100%;
    margin-top: -25px;
  }
  .lav-works__image img {
    max-width: 100%;
  }
  @media(max-width: 768px) {
    .lav-works__title {
      line-height: 36px;
    }
    .lav-works__info {
      max-width: 100%;
    }
    .lav-works__item {
      max-width: 100%;
    }
    .lav-works__image {
      margin-top: -5px;
      text-align: center;
      padding-left: 28px;
    }
    .lav-works {
      padding-bottom: 15px;
    }
    .lav-works__image img {
      max-width: 70%;
      margin-left: -30px;
    }
    .lav-works__image + .lav-works__item {
      margin-top: 8px;
    }
  }

  .lav-study__wrap {
    padding-top: 20px;
  }
  .lav-study {
    display: flex;
    align-items: center;
    padding: 42px;
    background: linear-gradient(101.51deg, #F8F9FA 0%, #FDFDFD 100%, #FDFDFD 100%);
    box-shadow: 0px 22px 33px rgba(59, 83, 108, 0.25);
    border-radius: 8px;
  }
  .lav-study__icon {
    line-height: 0;
  }
  .lav-study__icon svg {
    width: 42px;
  }
  .lav-study__info {
    font-weight: 300;
    font-size: 18px;
    line-height: 24px;
    color: #517193;
    margin-left: 12px;
    margin-right: 40px;
    max-width: 560px;
  }
  .lav-study__info strong {
    font-weight: 700;
  }
  .lav-study__btn {
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    border: 1px solid rgba(81, 113, 147, 0.12);
    border-radius: 123px;
    padding: 13px 65px;
    transition: 0.35s;
    white-space: nowrap;
    cursor: pointer;
    color: inherit;
    margin-left: auto;
  }
  .lav-study__btn:hover {
    background-color: #fff;
    border: 1px solid #517193;
    cursor: pointer;
  }
  .lav-study__btn img {
    margin-left: 16px;
    width: 30px;
  }
  @media(max-width: 768px) {
    .lav-study__wrap {
      padding-top: 15px;
      padding-bottom: 21px;
    }
    .lav-study {
      padding: 24px 16px;
      flex-wrap: wrap;
    }
    .lav-study__btn {
      width: 100%;
      margin-top: 20px;
      justify-content: center;
    }
    .lav-study__info {
      margin-right: 0;
      flex-grow: 1;
      flex-basis: 50%;
    }
    .lav-study__icon svg {
      width: 40px;
    }
  }


  .lav-safety__row {
    background: linear-gradient(101.51deg, #F8F9FA 0%, #FDFDFD 100%, #FDFDFD 100%);
    box-shadow: 0px 44px 66px rgba(59, 83, 108, 0.25);
    padding: 60px 164px;
    display: flex;
    justify-content: space-between;
  }
  .lav-safety__title {
    margin-bottom: 40px;
  }
  .lav-safety__icons {
    display: flex;
  }
  .lav-safety__icons img {
    max-width: 100%;
    width: 94px;
  }
  .lav-safety__icons img + img {
    margin-left: 38px;
  }
  .lav-safety__right {
    max-width: 480px;
    margin-left: 20px;
    width: 100%;
  }
  .lav-safety__descr:first-child {
    font-weight: 700;
  }
  .lav-safety__descr + .lav-safety__descr {
    margin-top: 20px;
  }
  @media(max-width: 1340px) {
    .lav-safety__row {
      padding: 40px;
    }
    .lav-safety__icons img {
      width: 80px;
    }
  }
  @media(max-width: 992px) {
    .lav-safety__row {
      display: block;
    }
    .lav-safety__right {
      max-width: 100%;
      margin-left: 0;
      margin-top: 16px;
    }
  }
  @media(max-width: 768px) {
    .lav-safety {
      padding-top: 21px;
    }
    .lav-safety__row {
      padding: 20px;
    }
    .lav-safety__title {
      margin-bottom: 16px;
    }
    .lav-safety__icons img {
      width: 64px;
    }
    .lav-safety__icons img + img {
      margin-left: 12px;
    }
    .lav-safety__descr {
      font-size: 16px;
      font-weight: 400;
    }
    .lav-safety__descr + .lav-safety__descr {
      display: none;
    }
    .lav-safety__right.active .lav-safety__descr + .lav-safety__descr {
      display: block;
    }
    .lav-safety__toggler {
      margin-top: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      color: #1B7FE7;
    }
    .lav-safety__toggler svg {
      width: 10px;
      height: 10px;
      transform: rotate(90deg);
      margin-left: 5px;
    }
  }


  .lav-compare {
    padding: 80px 0 100px;
    background: url(https://conversionratestore.github.io/projects/luminette/img/stripes_features.png) no-repeat center bottom / cover;
  }
  .lav-compare__inner {
    position: relative;
    background: #F8F9FA;
    border: 1px solid #F8F9FA;
    box-shadow: 0px 44px 66px rgba(59, 83, 108, 0.25);
    border-radius: 16px;
    max-width: 718px;
    overflow: hidden;
  }
  .lav-compare__inner:before {
    content: 'vs';
    font-weight: 700;
    font-size: 32px;
    line-height: 36px;
    pointer-events: none;
    color: #517193;
    position: absolute;
    left: 0;
    top: 37px;
    right: 0;
    margin: auto;
    z-index: 1;
  }
  .lav-compare__image {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 94px;
    width: 157px;
    margin: 0 auto 8px;
  }
  .lav-compare__image img {
    max-height: 94px;
    max-width: 100%;
  }
  .lav-compare__box {
    // width: 67px;
  }
  .lav-compare__lum {
    margin-left: -20px;
    // width: 157px;
  }
  .lav-compare__inner .col-6:nth-child(3n+1) {
    background: linear-gradient(98.6deg, #EEF1F4 43.43%, #EEF1F4 58.16%, #F3F5F7 100%);
  }
  .lav-compare__inner .col-12 {
    border: 1px solid #EFF2F5;
  }
  .lav-compare__inner .fw-medium {
    font-size: 16px;
    font-weight: 500;
  }
  .lav-compare__inner .py-1 {
    max-width: 272px;
    margin: auto;
  }
  .lav-compare__title {
    font-size: 22px;
    line-height: 28px;
    font-weight: bold;
  }
  @media(max-width: 768px) {
    .lav-compare {
      padding-top: 30px;
      padding-bottom: 60px;
    }
    .lav-compare__image {
      height: 69px;
      width: 122px;
    }
    .lav-compare__image img {
      max-height: 100%;
      max-width: 100%;
    }
    .lav-compare__title {
      font-size: 18px;
      line-height: 24px;
    }
    .lav-compare__inner .col-12 {
      font-size: 16px;
      line-height: 24px;
    }
    .lav-compare__inner:before {
      top: 60px;
    }
  }


  .lav-faq {
    padding-top: 0;
    padding-bottom: 90px;
  }
  .lav-faq__plate {
    padding: 90px;
    display: flex;
    justify-content: center;
    background: #F4F6FA;
    box-shadow: 0px 22px 33px rgba(59, 83, 108, 0.22);
    border-radius: 16px;
  }
  .lav-faq__info {
    max-width: 600px;
    width: 100%;
  }
  .lav-faq__image {
    line-height: 0;
    margin-left: 60px;
    max-width: 335px;
    width: 100%;
  }
  .lav-faq__image img {
    max-width: 100%;
  }
  .lav-faq__list {
    margin-top: 48px;
  }
  .lav-faq__btn-wrap {
    margin-top: 50px;
    text-align: center;
  }

  .question-row + .question-row {
    margin-top: 16px;
  }
  .accordion-primary .accordion-title .question {
    font-weight: 700;
  }
  .accordion-primary .accordion-toggle[data-toggle] {
    background: #FFFFFF;
    border: 1px solid #D5DAE2;
    box-shadow: 0px 15px 44px rgba(59, 83, 108, 0.1);
    border-radius: 8px;
    padding: 14px 24px;
  }
  .accordion-primary .accordion-toggle[data-toggle] .icon {
    transform: rotate(90deg);
  }
  .accordion-primary .accordion-toggle[data-toggle][aria-expanded=true] .icon {
    transform: rotate(-90deg);
  }
  @media(max-width: 1199px) {
    .lav-faq__plate {
      padding: 50px 35px;
    }
  }
  @media(max-width: 992px) {
    .lav-faq__image {
      display: none;
    }
  }
  @media(max-width: 768px) {
    .lav-faq {
      padding-bottom: 60px;
    }
    .lav-faq__btn-wrap {
      margin-top: 30px;
    }
    .lav-faq__plate {
      background: none;
      filter: none;
      border-radius: 0;
      box-shadow: none;
      padding: 0;
    }
    .lav-faq__list {
      margin-top: 24px;
    }
    .accordion-content {
      font-size: 16px;
    }
    .accordion-primary .accordion-toggle.collapsed[data-toggle]:hover {
      background-color: inherit;
    }
    .accordion-primary .accordion-toggle.collapsed[data-toggle]:hover .accordion-title {
      color: inherit;
    }
  }


  .lav-reviews .slider .expand {
    display: none;
  }
  .lav-reviews .slider-wrapper {
    max-width: 100%;
    margin: 0 auto;
    z-index: 3;
    padding-top: 10px;
  }
  .lav-reviews .slider .os-scrollbar {
    z-index: 2;
  }
  .lav-reviews .slider .os-scrollbar .os-scrollbar-handle {
    background: rgba(81, 113, 147, 0.2);
  }
  
  .lav-reviews .slider .slide:not(:last-child) {
    margin-bottom: 20px;
  }
  
  .lav-reviews .slider .slick-slide {
    outline: none;
    transition: all 0.3s ease-out;
    transform: scale(0.95);
    opacity: 0;
    will-change: transform;
    -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
    pointer-events: none;
  }
  
  .lav-reviews .slider .slick-list {
    overflow: visible;
  }
  
  .lav-reviews .slider .slick-active {
    position: relative;
    opacity: 1;
    z-index: 1;
    pointer-events: auto;
  }
  
  .lav-reviews .slider .slick-current {
    z-index: 2;
    transform: scale(1.08);
  }
  
  .lav-reviews .slider .slick-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 56px;
    height: 56px;
    background-color: rgba(147, 169, 192, 0.5);
    background-image: url("/images/icons/arrow-right.svg");
    background-repeat: no-repeat;
    background-position: 44% 49%;
    transition: background 0.25s ease-out;
    cursor: pointer;
    font-size: 0;
    border: none;
    border-radius: 50%;
    color: #ffffff;
    z-index: 1;
  }
  
  .lav-reviews .slider .slick-arrow.slick-prev {
    transform: translateY(-50%) rotate(180deg);
    left: -50px;
  }
  
  .lav-reviews .slider .slick-arrow.slick-next {
    right: -50px;
  }
  
  .lav-reviews .slider .slick-arrow:hover {
    background-color: rgba(147, 169, 192, 0.8);
  }
  
  .lav-reviews .slider .slick-dots {
    width: 200px;
    height: 8px;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin: 55px 0 0;
    padding: 0;
    list-style-type: none;
    font-size: 0;
  }
  
  .lav-reviews .slider .slick-dots li {
    position: absolute;
    transition-property: left, opacity;
    transition-duration: 375ms;
    transition-timing-function: ease-out;
  }
  
  .lav-reviews .slider .slick-dots li.slick-prev-max {
    opacity: 0;
    left: -12px;
  }
  
  .lav-reviews .slider .slick-dots li.slick-next-max {
    opacity: 0;
    left: 202px;
  }
  
  .lav-reviews .slider .slick-dots li.slick-prev-prev {
    left: 12px;
  }
  
  .lav-reviews .slider .slick-dots li.slick-next-next {
    left: 180px;
  }
  
  .lav-reviews .slider .slick-dots li.slick-prev {
    left: 55px;
    display: block;
    opacity: 1;
  }
  
  .lav-reviews .slider .slick-dots li.slick-prev button {
    background-color: #ffffff;
  }
  
  .lav-reviews .slider .slick-dots li.slick-next {
    left: 137px;
    display: block;
    opacity: 1;
  }
  
  .lav-reviews .slider .slick-dots li.slick-next button {
    background-color: #ffffff;
  }
  
  .lav-reviews .slider .slick-dots li.slick-active {
    left: calc(50% - 4px);
    margin: 0 auto;
  }
  
  .lav-reviews .slider .slick-dots li.slick-active button {
    background-color: #ffffff;
  }
  
  .lav-reviews .slider .slick-dots button {
    cursor: pointer;
    padding: 0;
    border: none;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.2);
    transition: background-color 0.25s ease-out;
  }
  
  .lav-reviews .slider .card {
    background: linear-gradient(106.63deg, #F8F9FA 38.5%, #FDFDFD 100.78%);
    border-radius: 16px;
    color: #517193;
    overflow: hidden;
  }

  .lav-reviews .slider .card-header {
    padding: 24px 24px 10px;
  }
  
  .lav-reviews .slider .avatar {
    width: 105px;
    height: 105px;
    border-radius: 50%;
    background-color: #B7B7B7;
    margin: 0 auto 20px;
    transition: all 0.3s ease-out;
  }
  
  .lav-reviews .slider .avatar img {
    width: 100%;
    height: 100%;
  }
  
  .lav-reviews .slider .name {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 5px;
  }
  
  .lav-reviews .slider .link {
    display: inline-flex;
    align-items: center;
    font-size: 16px;
    line-height: 24px;
    color: rgba(64, 97, 132, 0.5);
    font-weight: 500;
  }
  
  .lav-reviews .slider .link img {
    margin-left: 6px;
  }
  
  .lav-reviews .slider .card-body-wrapper {
    position: relative;
    max-height: 250px;
    min-height: 250px;
    overflow-y: auto;
  }
  
  .lav-reviews .slider .card-body-wrapper::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70px;
    opacity: 0;
    pointer-events: none;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, white 70%);
    z-index: 1;
  }
  
  .lav-reviews .slider .card-body-wrapper.is-visible .review {
    height: auto;
    -webkit-line-clamp: initial;
  }
  
  .lav-reviews .slider .card-body-wrapper.is-visible .review::after {
    display: none;
  }
  
  .lav-reviews .slider .card-body {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 24px 36px;
  }
  
  .lav-reviews .slider .review {
    margin-bottom: auto;
    position: relative;
    font-weight: 500;
    height: 144px;
    // -webkit-line-clamp: 6;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    overflow: auto;
  }
  
  .lav-reviews .slider .expand {
    padding: 0;
    margin: 0;
    border: none;
    background: none;
    color: #517193;
    cursor: pointer;
  }
  
  .lav-reviews .slider .date {
    margin-top: 18px;
    color: rgba(64, 97, 132, 0.5);
    font-size: 15px;
    line-height: 24px;
    font-style: normal;
  }
  
  .lav-reviews {
    padding: 90px 0;
    background: #406184;
    color: #fff;
  }
  .lav-reviews__title {
    text-align: center;
    color: #fff;
  }
  .lav-reviews__list {
    margin-top: 64px;
  }
  .lav-review {
    position: relative;
    overflow: hidden;
    box-shadow: 0px 11px 22px rgba(59, 83, 108, 0.88);
    // background: linear-gradient(106.63deg, #F8F9FA 38.5%, #FDFDFD 100.78%);
    background: #F8F9FA;
    border-radius: 16px;
    padding: 24px;
    color: #517193;
  }
  .lav-review_expand:after {
    content: "";
    position: absolute;
    // bottom: 35px;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    pointer-events: none;
    background: linear-gradient(180deg,hsla(0,0%,100%,0),#fbfbfb 70%);
    z-index: 1;
  }
  .lav-review__image {
    line-height: 0;
    text-align: center;
  }
  .lav-review__name {
    margin-top: 8px;
    text-align: center;
    font-size: 18px;
    line-height: 24px;
    font-weight: bold;
  }
  .lav-review__text {
    position: relative;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    margin-top: 12px;
    max-height: 168px;
    overflow-y: auto;
  }

  .lav-review__text + .lav-review__text {
    padding-bottom: 20px;
  }

  .lav-review__text:not(.active) {
    display: none;
  }
  .lav-review__link {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: rgb(64 97 132 / 50%);
  }
  .lav-review__link span {
    font-weight: bold;
    padding: 0 5px;
  }
  .lav-review__trigger {
    position: relative;
    z-index: 10;
    font-size: 16px;
    line-height: 24px;
    font-weight: bold;
    margin-top: 4px;
    cursor: pointer;
    transition: 0.35s;
  }
  .lav-review__trigger:hover {
    opacity: 0.8;
  }
  .lav-reviews__total {
    display: flex;
    margin: 25px auto 0;
    text-align: center;
    max-width: 1000px;
  }
  .lav-reviews__total-col {
    position: relative;
    flex: 1;
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .lav-reviews__total-col:last-child:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: .1;
    background: radial-gradient(82% 55% at 0 48%,#000 0,rgba(0,0,0,.85) 18%,rgba(0,0,0,.7) 38%,rgba(0,0,0,.45) 65%,transparent 100%);
    mix-blend-mode: normal;
    z-index: 0;
    pointer-events: none;
  }
  .lav-reviews__total-caption {
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #FFFFFF;
    opacity: 0.9;
  }
  .lav-reviews__total-caption span {
    font-weight: 700;
  }
  .lav-reviews__total__caption span {
    font-weight: bold;
  }
  .lav-reviews__total-stars {
    margin: 12px 0 17px;
    line-height: 0;
    text-align: center;
  }
  .lav-reviews__total-score {
    font-size: 24px;
    line-height: 32px;
    color: #FFAA02;
    font-weight: bold;
  }
  .lav-reviews__total-image {
    line-height: 0;
    height: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 36px;
  }
  .lav-reviews__total-image img {
    max-width: 100%;
    max-height: 100%;
  }
  .lav-reviews__btn.btn-primary {
    min-width: 200px;
    min-height: 62px;
    padding: 10px 15px;
  }
  .lav-reviews__btn .btn-bg-wrapper {
    background: #fff;
  }
  .lav-reviews__btn .btn-text {
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 0.01em;
    color: #517193;
  }
  .lav-reviews__preview-list {
    margin-top: 80px;
    display: grid;
    gap: 32px;
    grid-template-columns: 1fr 1fr;
  }
  .lav-reviews__preview {
    position: relative;
    overflow: hidden;
    line-height: 0;
    border-radius: 16px;
    text-align: center;
    height: 340px;
    background-color: black;
    background-size: auto 100%;
    background-position: center;
    background-repeat: no-repeat;
  }
  .lav-reviews__placeholder {
    max-width: 100%;
    min-height: 100%;
  }
  .lav-reviews__play-btn {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 130px;
    height: 130px;
    line-height: 0;
    transition: 0.3s;
  }
  .lav-reviews__play-btn + .lav-reviews__play-btn {
    opacity: 0;
  }
  .lav-reviews__play {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 130px;
    height: 130px;
    line-height: 0;
    cursor: pointer;
  }
  .lav-reviews__play:hover .lav-reviews__play-btn {
    opacity: 0;
  }
  .lav-reviews__play:hover .lav-reviews__play-btn + .lav-reviews__play-btn {
    opacity: 1;
  }
  .lav-show-reviews {
    display: none;
  }

  @media(max-width: 1400px) {
    .lav-review__text {
      max-height: auto;
      min-height: 195px;
      max-height: 195px;
    }
    .lav-reviews .slider-wrapper {
      max-width: 90%;
    }
  }

  @media (max-width: 1199px) {
    .lav-reviews__preview-list {
      grid-template-columns: 1fr;
      gap: 12px;
    }
    .lav-reviews__preview-list {
      margin-top: 48px;
    }
    .lav-reviews .slider .slide:nth-child(1n+4){
      display: none;
    }
    .lav-reviews_all .slider .slide:nth-child(1n+4){
      display: block;
    }
  }

  @media (min-width: 992px) {
    .lav-reviews .slider-outer {
      overflow: hidden;
    }
    .lav-reviews .slider-wrapper {
      // max-width: none;
      padding: 84px 0 100px;
    }
    .lav-reviews .slider .slide {
      padding: 0 20px;
      margin-bottom: 0;
    }
    .lav-reviews .slider .link {
      font-size: 12px;
      line-height: 18px;
    }
    .lav-reviews .slider .link img {
      width: 35px;
      height: 25px;
    }
    .lav-reviews .slider .review {
      height: 168px;
      margin: 0 -24px;
      padding: 0 24px;
      width: auto;
      // -webkit-line-clamp: 7;
    }
    .lav-reviews .slider .date {
      margin-top: 24px;
      font-size: 12px;
      line-height: 18px;
    }
    .lav-reviews__list .splide__list {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .lav-reviews__list .splide__track {
      overflow: visible;
    }
    .lav-review {
      width: 29%;
    }
    .lav-review:nth-child(2) {
      width: 35%;
      min-height: 460px;
    }

  }

  @media (max-width: 992px) {
    .lav-reviews .slider .name {
      font-size: 22px;
    }
    .lav-reviews .slider .card-body-wrapper {
      max-height: none;
      min-height: auto;
    }
    .lav-reviews .slider-wrapper {
      padding-top: 30px;
    }
  }

  @media (max-width: 768px) {
    .lav-reviews .slider-wrapper {
      max-width: 100%;
    }
    .lav-reviews__play {
      width: 100%;
      height: 100%;
    }
    .lav-reviews__play-btn {
      pointer-events: none;
    }
    .lav-reviews .slider .review {
      overflow: hidden;
    }
    .lav-reviews .slider .review.review_expand {
      -webkit-line-clamp: unset;
      overflow: auto;
      padding-bottom: 20px;
    }
    .lav-reviews .slider .card-body-wrapper.active::after {
      opacity: 1;
      bottom: 70px;
      background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #f9fbfb 70%);
      z-index: 1;

    }
    .lav-reviews .slider .card-body {
      padding-bottom: 24px;
    }
    .lav-show-reviews {
      display: block;
      margin: auto;
      margin-top: 24px;
      border: 1px solid rgba(255,255,255,.2);
      border-radius: 123px;
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;
      text-align: center;
      letter-spacing: 0.01em;
      color: #FFFFFF;
      padding: 16px 12px;
      width: 230px;
    }

    .lav-reviews .slider .review {
      height: 168px;
      margin: 0 -24px;
      padding: 0 24px;
      -webkit-line-clamp: 7;
    }

    .lav-reviews .slider .expand {
      display: block;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      margin-top: 5px;
    }
    .customer-reviews-page .slider .date {
      margin-top: 16px;
    }
  
    .lav-reviews .slider .avatar {
      width: 96px;
      height: 96px;
      margin-bottom: 10px;
    }
    .lav-reviews .slider .name {
      font-size: 18px;
      margin: 0;
    }
    .lav-reviews .slider .link {
      font-size: 14px;
    }
    .lav-reviews {
      padding: 30px 0;
    }
    .lav-reviews__preview {
      height: 190px;
    }
    .lav-reviews__play-btn {
      width: 80px;
      height: 80px;
    }
    .lav-reviews__total {
      margin-top: 48px;
      display: block;
    }
    .lav-reviews__total-col {
      display: flex;
      justify-content: space-around;
      padding: 0;
    }
    .lav-reviews__total-col + .lav-reviews__total-col {
      padding-top: 26px;
      margin-top: 28px;
    }
    .lav-reviews__total-col:last-child:after {
      background: radial-gradient(81.5% 54.14% at 0% 47.87%, #000000 0%, rgba(0, 0, 0, 0.869792) 17.19%, rgba(0, 0, 0, 0.70021) 38.02%, rgba(0, 0, 0, 0.441309) 65.1%, rgba(0, 0, 0, 0) 100%);
      transform: rotate(90deg);
      height: 100vw;
      top: -12px;
    }
    .lav-reviews__total-image {
      height: auto;
      width: 44%;
    }
    .lav-reviews__total-info {
      width: 44%;
    }
    .lav-reviews__total-image img {
      max-height: 100%;
      max-height: 90px;
    }
    .lav-reviews__total-caption span {
      display: block;
    }
    .lav-reviews__total-image {
      margin-bottom: 0;
    }
  }

  .lav-tooltip-list {
    margin-top: 15px;
  }
  .lav-list__item {
    position: relative;
    padding-left: 27px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #517193;
  }
  .lav-list__item:before {
    content: '';
    position: absolute;
    left: 0;
    top: 3px;
    width: 17px;;
    height: 17px;;
    background: url(${settings.dir}/img/check.svg) center no-repeat;
    background-size: contain;
  }
  .lav-list__item + .lav-list__item {
      margin-top: 12px;
  }

  .lav-trial__btn-mob {
    display: none;
  }
  .lav-trial {
    position: relative;
    padding: 90px 0;
  }
  .lav-trial__title span {
    font-weight: 400;
  }
  .lav-trial__row {
    display: flex;
    align-items: center;
    background: linear-gradient(96.91deg, #F8F9FA 0%, #FDFDFD 100.36%);
    box-shadow: 0px 30px 66px rgba(59, 83, 108, 0.22);
    border-radius: 16px;
    padding: 32px 40px;
  }
  .lav-trial__image {
    position: relative;
    width: 52%;
  }
  .lav-trial__image > img {
    max-width: 100%;
  }
  .lav-trial__info {
    max-width: 430px;
    margin-left: 50px;
  }
  .lav-trial__descr {
    margin-top: 16px;
  }
  .lav-trial__buttons {
    margin: 24px auto;
    display: flex;
    justify-content: center;
    // max-width: 355px;
  }
  .lav-trial__btn {
    display: flex;
    align-items: center;
    font-size: 14px;
    line-height: 1;
    font-weight: bold;
    padding: 12px 24px;
    justify-content: center;
    transition: 0.35s;
    background: #F4F6FA;
    cursor: default;
  }
  .lav-trial__btn:first-child {
    border-bottom-left-radius: 16px;
    border-top-left-radius: 16px;
  }
  .lav-trial__btn:last-child {
    border-bottom-right-radius: 16px;
    border-top-right-radius: 16px;
  }
  .lav-trial__btn.btn-primary {
    cursor: pointer;
  }
  .lav-trial__btn .tooltip-dropdown {
    top: 20px;
    padding-top: 10px;
  }
  .lav-trial__btn>img {
    margin-right: 6px;
    width: 20px;
  }
  .lav-trial__btn + .lav-trial__btn {
    margin-left: 1px;
  }
  .lav-trial__inside {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.01em;
    transition: 0.35s;
    cursor: default;
    margin-top: -35px;
  }

  .lav-trial__action {
    text-align: center;
    background-color: #F4F6FA;
    border-radius: 45px 45px 16px 16px;
    padding-bottom: 12px;
  }
  .lav-trial__guarantee {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 12px;
    padding: 0 12px;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
  }
  .lav-trial__guarantee img {
    margin-right: 6px;
  }
  .lav-trial__refund {
    margin-top: 8px;
    font-size: 14px;
    padding: 0 12px;
  }
  .lav-trial__get {
    max-width: 100%;
  }
  .lav-trials__btn.btn-primary {
    padding-left: 40px;
    padding-right: 40px;
  }
  .lav-trial__learn {
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.01em;
    margin-top: 28px;
    transition: 0.35s;
    cursor: pointer;
  }
  .lav-trial__learn:hover {
    opacity: 0.7;
  }
  .lav-info-invert {
    filter: invert(43%) sepia(44%) saturate(407%) hue-rotate(170deg) brightness(69%) contrast(87%)
  }
  .tooltip {
    position: relative;
  }
  .tooltip__link {
    border-bottom: 1px solid #517193;
    color: #517193;
    font-weight: 600;
    transition: 0.35s;
  }
  .tooltip__link:hover {
    opacity: 0.8;
  }
  .tooltip-include {
    max-width: 100%;
  }
  .tooltip:hover .tooltip-dropdown, .lav-tooltip-wrap:hover .tooltip-dropdown {
    opacity: 1;
    pointer-events: auto;
  }
  .tooltip-dropdown {
    color: #517193;
    position: absolute;
    padding-top: 32px;
    top: 0;
    right: -15px;
    width: 351px;
    pointer-events: none;
    opacity: 0;
    z-index: 4;
    transition: 0.35s;
    // filter: drop-shadow(0px 11px 22px rgba(81, 113, 147, 0.44));
    // box-shadow: 0px 11px 22px rgba(81, 113, 147, 0.44);
  }
  .tooltip-item {
    border-radius: 8px;
    background: #FFFFFF;
    padding: 24px;
    position: relative;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    box-shadow: 0px 11px 22px rgb(81 113 147 / 44%);
  }
  .tooltip-item:before {
    content: '';
    position: absolute;
    bottom: 100%;
    right: 10px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 12.5px 8px 12.5px;
    border-color: transparent transparent #fff transparent;
  }
  .tooltip_free {
    background: rgba(218, 225, 232, 0.3);
    border-radius: 8px;
    padding: 24px;
  }
  .tooltip-text {
    color: #517193;
  }
  .tooltip-text + .tooltip-text {
    margin-top: 8px;
  }

  @media(max-width: 1199px) {
    .lav-trial {
      // text-align: center;
    }
    .lav-trial__action {
      width: 100%;
    }
    .lav-trial__info {
      max-width: 100%;
      margin: 0;
    }
    .lav-trial__btn {
      width: 100%;
    }
    .lav-trial__image {
      width: 100%;
    }
  }
  
  @media(max-width: 992px) {
  }

  @media (max-width: 768px) {
    .lav-trial__row {
      padding: 30px 0;
      box-shadow: none;
      background: none;
    }
    .lav-trial__inside {
      position: relative;
    }
    .lav-trial__buttons {
      position: relative;
    }
    .lav-trial__btn .tooltip-dropdown {
      left: 0;
      right: 0;
      width: auto;
      top: 45px;
    }
    .lav-trial__refund {
      line-height: 22px;
    }

    .lav-trial__title {
      line-height: 40px;
    }
    .lav-trial__inside .tooltip-dropdown {
      left: 0;
      right: 0;
      width: auto;
    }
    .lav-trial__inside .tooltip-item:before {
      left: 0;
      right: 0;
      margin: auto;
    }
    .lav-trial__buttons .lav-trial__btn:first-child .tooltip-item:before {
      left: 25%;
    }
    .tooltip-dropdown {
      top: 40%;
    }
    .lav-trial {
      padding: 0;
    }
    .lav-trial__buttons {
      margin-top: 6px;
      margin-bottom: 16px;
    }
    .lav-trial__buttons .lav-trial__btn span {
      text-align: left;
    }
    .lav-trial__descr {
      margin-top: 8px;
    }
    .lav-trial__inside {
      margin-top: -15px;
      margin-bottom: 15px;
    }
    .lav-trial__btn {
      padding-left: 12px;
      padding-right: 12px;
    }
    .tooltip > img {
      width: 14px;
      height: 22px;
    }
    .lav-trial__btn .tooltip > img {
      height: 14px;
      margin-bottom: -2px;
    }
    .lav-trial__btn .tooltip {
      display: inline-block;
    }
    .tooltip {
      position: initial;
    }
    .tooltip-dropdown {
      right: 0;
      width: 100%;
    }
    .tooltip-item:before {
      right: auto;
      left: calc(50% + 63px);
    }
    .days-test_list li:not(:nth-child(2)) .tooltip-dropdown {
      top: calc(100% - 23px);
    }
  }

  @media (max-width: 450px) {
    .lav-trial__btn-mob {
      display: block;
    }
  }


  .lav-drive {
    color: #FFFFFF;
    padding-top: 80px;
    padding-bottom: 0;
    background: #34475B;
  }
  .lav-drive__caption {
    font-size: 32px;
    line-height: 36px;
    text-align: center;
    color: #fff;
    opacity: 0.9;
    font-weight: 700;
  }
  .lav-drive__title {
    position: relative;
    font-size: 144px;
    line-height: 1;
    text-align: center;
    font-weight: bold;
    margin-top: 32px;
  }
  .lav-drive__bg {
    background: url(${settings.dir}/img/drive.jpeg) bottom no-repeat;
    background-size: contain;
    max-width: 1324px;
  }
  .lav-drive__bg-title {
    max-width: 475px;
    padding: 440px 0 160px;
    margin-left: auto;
    font-size: 64px;
    line-height: 64px;
    font-weight: bold;
    margin-right: 40px;
  }
  @media(max-width: 1275px) {
    .lav-drive__bg-title {
      padding: 460px 0 100px;
    }
  }
  .lav-drive__actions {
    text-align: center;
    padding-bottom: 80px;
  }
  .lav-drive__learn {
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.01em;
    margin-top: 28px;
    transition: 0.35s;
    cursor: pointer;
  }
  .lav-drive__learn:hover {
    opacity: 0.7;
  }
  .lav-drive__device {
    width: 850px;
    display: block;
    margin: -40px auto -150px;
    padding-left: 75px;
  }
  @media(max-width: 768px) {
    .lav-drive {
      border-radius: 0;
      padding-top: 35px;
      background: #34475B url(${settings.dir}/img/drive-mob.png) 0 53vw no-repeat;
      background-size: 100% auto;
    }
    .lav-drive__actions {
      padding-bottom: 34px;
    }
    .lav-drive__caption {
      font-weight: 500;
      font-size: 22px;
      line-height: 28px;
      opacity: 0.9;
    }
    .lav-drive__title {
      margin-top: 16px;
      font-weight: 500;
      font-size: 92px;
      line-height: 64px;
    }
    .lav-drive__device {
      margin: 0 0 -20px;
      padding: 0;
      width: 121vw;
      margin-left: -5vw;
    }
    .lav-drive__bg-title {
      font-size: 32px;
      line-height: 36px;
      text-align: center;
      // padding-top: 360px;
      padding-top: 90vw;
      font-weight: 500;
      padding-bottom: 56px;
      margin: auto;
      max-width: 100%;
    }
    .lav-drive__bg {
      background: none;
    }
  }

  
  .lav-modal {
    position: fixed;
    z-index: 99991;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(8, 29, 50, 0.4);
    transition: 0.35s;
    opacity: 1;
    padding: 20px;
  }
  .lav-modal__close {
    position: absolute;
    top: 14px;
    right: 14px;
    cursor: pointer;
    line-height: 0;
    padding: 3px;
    transition: 0.3s;
  }

  .lav-modal__close:hover {
    opacity: 0.7;
    transform: scale(1.3);
  }
  .lav-open-modal {
    cursor: pointer;
  }
  .lav-modal:not(.active) {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }
  .lav-modal__inner {
    max-height: 95vh;
    overflow: auto;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: #FFFFFF;
    border-radius: 8px;
    padding: 72px 48px 48px;
    max-width: 400px;
    transition: 0.4s;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transform: translate(-50%, -100%);
  }
  .lav-modal__inner.active {
    transform: translate(-50%, -50%);
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }
  .lav-review-modal {
    line-height: 0;
    padding: 0;
    max-width: 90%;
    background: transparent;
  }
  .lav-review-modal iframe {
    border: none;
  }
  .lav-modal__title {
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 12px;
  }
  @media(max-width: 992px) {
    .lav-review-modal iframe {
      width: 100%;
      min-height: 75vh;
      height: auto;
    }
  }
  @media(max-width: 768px) {
    .lav-modal__inner {
      max-width: 93%;
      width: 100%;
      padding: 48px 24px 24px;
    }
    .lav-modal__inner.lav-review-modal {
      padding: 0;
    }
    .lav-modal__close {
      top: 5px;
      right: 5px;
    }
    .lav-modal {
      padding: 12px;
    }
  }
`;

let newPage = `
<main class='lav-wrap'>
  <section class='lav-jumb lav-section'>
    <div class='container-fluid container--size--md lav-jumb__container'>
      <div class='lav-jumb__info'>
        <div class='lav-jumb__title'>Beat the winter blues and optimize your sleep</div>

        <div class='lav-jumb__descr lav-descr'>
          Luminette® glasses are scientifically proven to beat the winter blues, restoring your mood and energy levels in just 30 minutes a day
        </div>

        <div class='lav-jumb__actions'>
          <button class='lav-jumb__btn btn-primary btn-lg flipped lav-btn lav-btn-buy'>
            <span class="btn-text">
              Get Luminette3 Now
            </span>
            <span class="btn-bg-wrapper"></span>
          </button>

          <div class='lav-jumb__learn'>Learn More</div>
        </div>
      </div>
    </div>
  </section>

  <section class='lav-boost lav-section'>
    <div class='container-fluid container--size--md lav-boost__container'>
      <div class='lav-boost__inner lav-plate'>
        <div class='lav-boost__image'>
          <img class='lav-boost__stars' src='${settings.dir}/img/boost-person.svg' />
        </div>

        <div class='lav-boost__info'>
          <div class='lav-boost__title'>150,000+ people boost their energy with Luminette</div>
          <img class='lav-boost__stars' src='${settings.dir}/img/stars.svg' />
          <div class='lav-boost__caption'>1049 Amazon & Trustedshops reviews</div>
        </div>
      </div>
    </div>
  </section>

  <section class='lav-problems lav-section'>
    <div class='container-fluid container--size--lg lav-problems__container'>
      <div class='lav-problems__title lav-title'>Light therapy can help you <br /> if you have these problems</div>

      <div class='lav-problems__grid'>
        <div class='lav-problem' style='background-image: url("${settings.dir}/img/problem1.jpg")'>
          <div class='lav-problem__info'>
            <div class='lav-problem__title'>Sleeping problems</div>
            <div class='lav-problem__list'>
              <div class='lav-problem__item'>Night awakenings</div>
              <div class='lav-problem__item'>Shallow sleep</div>
              <div class='lav-problem__item'>Circadian rhythm imbalances</div>
            </div>
          </div>
        </div>

        <div class='lav-problem' style='background-image: url("${settings.dir}/img/problem2.jpeg")'>
          <div class='lav-problem__info'>
            <div class='lav-problem__title'>Seasonal depression</div>
            <div class='lav-problem__list'>
              <div class='lav-problem__item'>Feeling listless, sad or down</div>
              <div class='lav-problem__item'>Sleeping problems</div>
              <div class='lav-problem__item'>Appetite and weight changes</div>
              <div class='lav-problem__item'>Low energy and irritability</div>
              <div class='lav-problem__item'>Difficulty concentrating</div>
              <div class='lav-problem__item'>Low mood</div>
            </div>
          </div>
        </div>

        <div class='lav-problem' style='background-image: url("${settings.dir}/img/problem3.jpeg")'>
          <div class='lav-problem__info'>
            <div class='lav-problem__title'>Low energy</div>
            <div class='lav-problem__list'>
              <div class='lav-problem__item'>Tired & groggy mornings</div>
              <div class='lav-problem__item'>Slugging throughout the day</div>
              <div class='lav-problem__item'>Low motivation & irritability</div>
            </div>
          </div>
        </div>

        <div class='lav-problem' style='background-image: url("${settings.dir}/img/problem4.jpeg")'>
          <div class='lav-problem__info'>
            <div class='lav-problem__title'>Jet lag</div>
            <div class='lav-problem__list'>
              <div class='lav-problem__item'>Daytime tiredness</div>
              <div class='lav-problem__item'>Headaches & nausea</div>
              <div class='lav-problem__item'>Circadian rhythm imbalances</div>
              <div class='lav-problem__item'>Difficulty adjusting to new timezones</div>
            </div>
          </div>
        </div>

        <div class='lav-problem' style='background-image: url("${settings.dir}/img/problem5.jpeg")'>
          <div class='lav-problem__info'>
            <div class='lav-problem__title'>Stress</div>
            <div class='lav-problem__list'>
              <div class='lav-problem__item'>Concentration & focus issues</div>
              <div class='lav-problem__item'>Appetite & weight issues</div>
              <div class='lav-problem__item'>Inability to relax at night</div>
            </div>
          </div>
        </div>

        <div class='lav-problem' style='background-image: url("${settings.dir}/img/problem6.jpeg")'>
          <div class='lav-problem__info'>
            <div class='lav-problem__title'>Shift work</div>
            <div class='lav-problem__list'>
              <div class='lav-problem__item'>Brain fog</div>
              <div class='lav-problem__item'>Shortened or shallow sleep</div>
              <div class='lav-problem__item'>Circadian rhythm imbalances</div>
              <div class='lav-problem__item'>Looking and feeling tired</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class='lav-drinks lav-section'>
    <div class='container-fluid container--size--sm lav-drinks__container'>
      <div class='lav-drinks__inner lav-plate'>
        <div class='lav-drinks__image'>
          <img src='${settings.dir}/img/cup.svg' />
        </div>
        <div class='lav-drinks__info'>
          You can also use light therapy as a natural substitute for caffeine & energy drinks during the day to support healthy energy levels. 
        </div>
      </div>
    </div>
  </section>

  <section class='lav-wears lav-section'>
    <div class='container-fluid container--size--lg lav-wears__container'>
      <div class='lav-wears__title lav-title'>Wear for 30 mins a day to...</div>

      <div class='lav-wears__grid'>
        <div class='lav-wear' style='background-image: url("${settings.dir}/img/benefit1-bg.jpeg")'>
          <div class='lav-wear__info'>
            <div class='lav-wear__icon'>
              <img src='${settings.dir}/img/benefit1.svg' />
            </div>
            <div class='lav-wear__title'>Beat winter blues</div>
            <div class='lav-wear__list'>
              <div class='lav-wear__item'>Cope with winter blues and seasonal changes</div>
              <div class='lav-wear__item'>Manage a healthier lifestyle with circadian rhythms</div>
              <div class='lav-wear__item'>Boost overall health and increase longevity</div>
            </div>
          </div>
        </div>

        <div class='lav-wear' style='background-image: url("${settings.dir}/img/benefit2-bg.jpeg")'>
          <div class='lav-wear__info'>
            <div class='lav-wear__icon'>
              <img src='${settings.dir}/img/benefit3.svg' />
            </div>
            <div class='lav-wear__title'>Boost energy</div>
             <div class='lav-wear__list'>
              <div class='lav-wear__item'>Reduce fatigue and irritability</div>
              <div class='lav-wear__item'>Feel more energized</div>
              <div class='lav-wear__item'>Elevate mental and physical performance</div>
            </div>
          </div>
        </div>

        <div class='lav-wear' style='background-image: url("${settings.dir}/img/benefit3-bg.jpeg")'>
          <div class='lav-wear__info'>
            <div class='lav-wear__icon'>
              <img src='${settings.dir}/img/benefit2.svg' />
            </div>
            <div class='lav-wear__title'>Sleep better</div>
             <div class='lav-wear__list'>
              <div class='lav-wear__item'>Improve sleep quality</div>
              <div class='lav-wear__item'>Wake up refreshed</div>
              <div class='lav-wear__item'>Fall asleep easier</div>
            </div>
          </div>
        </div>
      </div>

      <div class='lav-wears__btn-wrap'>
        <button class='lav-wears__btn lav-btn btn-primary btn-lg flipped lav-btn-buy'>
          <span class="btn-text">
            Get Luminette3 Now
          </span>
          <span class="btn-bg-wrapper"></span>
        </button>
      </div>
    </div>
  </section>

  <section class='lav-lucimed lav-section'>
    <div class='container-fluid container--size--sm lav-lucimed__container'>
      <div class='lav-lucimed__inner'>
        <div class='lav-lucimed__info'>
          <div class='lav-lucimed__title lav-title'>Lucimed - Pioneers in Light Therapy</div>
          <div class='lav-lucimed__image lav-mob'>
            <img src='${settings.dir}/img/lucimed.png' />
          </div>
          <div class='lav-lucimed__descr lav-descr'>
            Belgian health tech company Lucimed has pioneered a way for you to bring wearable light therapy into your home. <br class='lav-mob' /><br />Years of research by optical engineers, sleep disorder specialists, professors & inventors have created the Luminette3 - a device that helps you optimize your sleep health & mental wellbeing through the power of light therapy. 
          </div>
          <div class='lav-lucimed__link'>
            Learn more about Luminette scientific research<svg class="icon icon-xs"><use xlink:href="#arrow-right"></use></svg>
          </div>
        </div>

        <div class='lav-lucimed__image lav-desk'>
          <img src='${settings.dir}/img/lucimed.png' />
        </div>
      </div>
    </div>
  </section>

  <section class='lav-morning lav-section'>
    <div class='container-fluid container--size--lg lav-morning__container'>
      <div class='lav-morning__plate'>
        <div class='lav-morning__info'>
          <div class='lav-morning__title lav-title'>The perfect addition
          to your morning routine:</div>
          
          <div class='lav-morning__descr lav-descr'>Wear Luminette while brushing your teeth, eating breakfast or working on your computer - the perfect addition to any morning routine</div>

          <div class='lav-morning__list'>
            <div class='lav-morning__item'>
              <div class='lav-morning__image'>
                <img src='${settings.dir}/img/morning1.svg' />
              </div>
              <div class='lav-morning__caption'>
                Therapy sessions last <br /><span>20-45 mins</span>
              </div>
            </div>
            <div class='lav-morning__item'>
              <div class='lav-morning__image'>
                <img src='${settings.dir}/img/morning2.svg' />
              </div>
              <div class='lav-morning__caption'>Use <span>1x per day</span></div>
            </div>
            <div class='lav-morning__item'>
              <div class='lav-morning__image'>
                <img src='${settings.dir}/img/morning3.svg' />
              </div>
              <div class='lav-morning__caption'>
                Feel the benefits within <br /><span>4 to 6 days</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class='lav-results lav-section'>
    <div class='container-fluid container--size--lg lav-results__container'>
      <div class='lav-results__title lav-title'>Get results in just 7&nbsp;days</div>

      <div class='lav-results__row'>
        <div class="lav-results__item">
          <div class="lav-results__item-title">Order Luminette3</div>
          <div class="lav-results__circle"></div>
          <div class="lav-results__item-caption">Today</div>
        </div>

        <div class="lav-results__item">
          <div class="lav-results__item-title">Wear Luminette3</div>
          <div class="lav-results__circle"></div>
          <div class="lav-results__item-caption">20 minutes x 7 days</div>
        </div>

        <div class="lav-results__item">
          <div class="lav-results__item-title">Feel energized and fix your sleep</div>
          <div class="lav-results__circle"></div>
          <div class="lav-results__item-caption">After 4-7 days</div>
        </div>
      </div>

      <button class='lav-results__btn btn-primary lav-mob btn-lg flipped lav-btn lav-btn-buy'>
        <span class="btn-text">
          Get Luminette3 Now
        </span>
        <span class="btn-bg-wrapper"></span>
      </button>
    </div>
  </section>

  <section class='lav-benefits lav-section'>
    <div class='container-fluid container--size--lg lav-benefits__container'>
      <div class='lav-benefits__inner'>
        <div class='lav-benefits__title lav-title'>What are the benefits?</div>

        <div class='lav-benefits__list'>
          <div class='lav-benefit'>
            <div class='lav-benefit__icon'>
              <img src='${settings.dir}/img/benefit2-1.svg' />
            </div>
            <div class='lav-benefit__title'>Lightweight and comfortable</div>
            <div class='lav-benefit__caption lav-descr'>Weighing only 51g and built with a comfy ergonomic nose fit</div>
          </div>
          <div class='lav-benefit'>
            <div class='lav-benefit__icon'>
              <img src='${settings.dir}/img/benefit2-2.svg' />
            </div>
            <div class='lav-benefit__title'>Doesn't hinder your vision</div>
            <div class='lav-benefit__caption lav-descr'>The special patented light system lets you experience light therapy without any disruption to your vision</div>
          </div>
          <div class='lav-benefit'>
            <div class='lav-benefit__icon'>
              <img src='${settings.dir}/img/benefit2-3.svg' />
            </div>
            <div class='lav-benefit__title'>Compatible with glasses</div>
            <div class='lav-benefit__caption lav-descr'>Wear Luminette on top of your glasses</div>
          </div>
        </div>

        <button class='lav-benefit__btn lav-btn btn-primary btn-lg flipped lav-btn-buy'>
          <span class="btn-text">
            Get Luminette3 Now
          </span>
          <span class="btn-bg-wrapper"></span>
        </button>
      </div>
    </div>
  </section>

  <section class='lav-cases lav-section'>
    <div class='container-fluid container--size--lg lav-cases__container'>
      <div class='lav-cases__title lav-title'>Wear Luminette while...</div>

      <div class='lav-cases__list'>
        <div class='lav-case'>
          <div class='lav-case__image'>
            <img src='${settings.dir}/img/case1.jpeg' />
          </div>
          <div class='lav-case__caption lav-descr'>Preparing breakfast</div>
        </div>

        <div class='lav-case'>
          <div class='lav-case__image'>
            <img src='${settings.dir}/img/case2.jpeg' />
          </div>
          <div class='lav-case__caption lav-descr'>Brushing your teeth</div>
        </div>

        <div class='lav-case'>
          <div class='lav-case__image'>
            <img src='${settings.dir}/img/case3.jpeg' />
          </div>
          <div class='lav-case__caption lav-descr'>Working on your computer</div>
        </div>

        <div class='lav-case'>
          <div class='lav-case__image'>
            <img src='${settings.dir}/img/case4.jpeg' />
          </div>
          <div class='lav-case__caption lav-descr'>Performing light exercise</div>
        </div>
      </div>
    </div>
  </section>

  <section class='lav-recharge lav-section'>
    <div class='container-fluid container--size--lg lav-recharge__container'>
      <div class='lav-recharge__inner'>
        <div class='lav-recharge__preview lav-open-modal' data-target='.lav-review-modal' data-src='https://www.youtube.com/embed/O83h2CcQAHQ?autoplay=0&start=0&showinfo=0&rel=0'>
          <img src='${settings.dir}/img/play.svg' />
          <img src='${settings.dir}/img/play-hover.svg' />
        </div>
        <div class='lav-recharge__info'>
          <div class='lav-recharge__title lav-title'>Recharge with Luminette</div>
          <div class='lav-recharge__caption lav-descr'>Breakthrough technology allows Luminette® glasses to rebalance your biological circadian body clock, restoring your sleep cycles, mood, and energy levels.</div>
        </div>
      </div>
    </div>
  </section>

  <section class='lav-works lav-section'>
    <div class='container-fluid container--size--sm lav-works__container'>
      <div class='lav-works__row'>
        <div class='lav-works__info'>
          <div class='lav-works__title lav-title'>The Science Behind Luminette®</div>

          <div class='lav-works__image lav-mob'>
            <img src='${settings.dir}/img/works.png' />
          </div>

          <div class='lav-works__item'>
            <div class='lav-works__item-title'>A patented, innovative light therapy system, for optimal comfort.</div>
            <div class='lav-works__item-descr lav-descr'>Innovative Luminette® technology emits a gentle beam of light towards the eyes from just above eye level. This mimics the natural light from blue skies, without interrupting vision.</div>
          </div>

          <div class='lav-works__item'>
            <div class='lav-works__item-title'>White light enhanced with <span>blue light</span>
            for greater effectiveness.</div>
            <div class='lav-works__item-descr lav-descr'>Luminette 3 emits a blue-enriched white light, peaked at 468 nm. This wavelength is proven to be the most effective at triggering the body’s positive response to sunlight.</div>
          </div>
        </div>
        
        <div class='lav-works__image lav-desk'>
          <img src='${settings.dir}/img/works.png' />
        </div>
      </div>
    </div>
  </section>

  <section class='lav-study__wrap lav-section'>
    <div class='container-fluid container--size--sm'>
      <div class='lav-study'>
        <div class='lav-study__icon'>
          <svg class="icon icon-xxl">
            <use xlink:href="#lamp"></use>
          </svg>
        </div>
        <div class='lav-study__info'>
          An <strong>independent study</strong> has shown that the Luminette gives the same results as a 10,000 lux light box
        </div>
        <a href='https://d3sq5glv6xow4l.cloudfront.net/docs/Light_therapy_with_boxes_or_glasses_to_counteract_.pdf' target="_blank" class='lav-study__btn'>
          Read the study
          <img src='/images/icons/adobe-reader.svg' />
        </a>
      </div>
    </div>
  </section>

  <section class='lav-safety lav-section'>
    <div class='container-fluid container--size--lg'>
      <div class='lav-safety__row'>
        <div class='lav-safety__left'>
          <div class='lav-safety__title lav-title'>Safety</div>

          <div class='lav-safety__icons'>
            <img src="https://conversionratestore.github.io/projects/luminette/img/safety-1.svg" alt="safety icon" />
            <img src="https://conversionratestore.github.io/projects/luminette/img/safety-2.svg" alt="safety icon" />
            <img src="https://conversionratestore.github.io/projects/luminette/img/safety-3.svg" alt="safety icon" />
          </div>
        </div>
        <div class='lav-safety__right'>
          <div class='lav-safety__descr lav-descr'>Since 2007 Luminette®  carries the European 
          CE classification.</div>

          <div class='lav-safety__descr lav-descr'>Luminette® is classified as a device that is safe for the eyes in accordance with the international standard CEI 62471. </div>

          <div class='lav-safety__descr lav-descr'>There are no Light Therapy lamps in the USA that carry FDA approval. Therefore the efficacy and safety of this electronic device - and all other light therapy devices on the US market - will be unregulated by the FDA. </div>

          <div class='lav-safety__toggler lav-mob'>
            See more
            <svg class="icon icon-xs"><use xlink:href="#arrow-right"></use></svg>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class='lav-compare lav-section lav-observe'>
    <div class='container-fluid container--size--xs'>
      <div class="row fs-16 text-center lav-compare__inner mx-auto">
        <div class="col-6 py-5">
          <div class='lav-compare__image'>
            <img class="lav-compare__lum" src="${settings.dir}/img/compare-lum.png"/>
          </div>
     
          <p class="fs-22 fw-bold py-1 lav-compare__title">Luminette3</p>
        </div>
        <div class="col-6 py-5">
          <div class='lav-compare__image'>
            <img class="lav-compare__box" src="${settings.dir}/img/lightbox.png"/>
          </div>
          <p class="fs-22 fw-bold py-1 lav-compare__title">Light Box</p>
        </div>
        <div class="col-12 py-2 fs-18 fw-bold b-1">Portable</div>
        <div class="col-6 py-5 fw-medium"><p class="py-1">Wear while <span class="text-ellipsis"> on-the-go</span></p></div>
        <div class="col-6 py-5 fw-medium"><p class="py-1">Requires you to stop and sit still for <span class="text-ellipsis">30 mins</span></p></div>
        <div class="col-12 py-2 fs-18 fw-bold b-1">Light colour spectrum</div>
        <div class="col-6 py-5 fw-medium"><p class="py-1">Blue-enriched <span class="text-ellipsis">white light</span></p></div>
        <div class="col-6 py-5 fw-medium"><p class="py-1">Full spectrum <span class="text-ellipsis">white light</span></p></div>
        <div class="col-12 py-2 fs-18 fw-bold b-1">Therapy effectiveness</div>
        <div class="col-6 py-5 fw-medium"><p class="py-1">Provides effective therapy using a less intense light source</p></div>
        <div class="col-6 py-5 fw-medium"><p class="py-1">Requires at least 10,000 lux to provide effective light therapy</p></div>
        <div class="col-12 py-2 fs-18 fw-bold b-1">Size</div>
        <div class="col-6 py-5 fw-medium"><p class="pt-1 pb-5">Small/ ultralight <br />
        only 51g (1.83 oz)</p></div>
        <div class="col-6 py-5 fw-medium"><p class="pt-1 pb-5">Large, bulky</p></div>
      </div>
    </div>
  </section>

  <section class='lav-faq'>
    <div class='container-fluid container--size--lg'>
      <div class='lav-faq__plate'>
        <div class='lav-faq__info'>
          <div class='lav-faq__title lav-title'>FAQs</div>
          <div class='lav-faq__list accordion-primary'>
            <div class="question-row">
              <div class="accordion-toggle collapsed" data-target="#question-1" aria-expanded="false" data-toggle="collapse">
                <div class="accordion-title d-flex align-items-center align-items-lg-center justify-content-between">
                  <div class="question">
                    What problems can Luminette help to solve?
                  </div>

                  <div class="d-flex align-items-center justify-content-center">
                    <svg class="icon icon-xs">
                      <use xlink:href="#arrow-right"></use>
                    </svg>
                  </div>
                </div>

                <div id="question-1" class="collapse" style="">
                  <div class="accordion-content answer fw-medium ">
                    <p>Beacause their crystallines are still growing, Luminette is not advised for children under 12 years of age</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="question-row">
              <div class="accordion-toggle collapsed" data-target="#question-2" aria-expanded="false" data-toggle="collapse">
                <div class="accordion-title d-flex align-items-center align-items-lg-center justify-content-between">
                  <div class="question">
                    What problems can Luminette help to solve?
                  </div>

                  <div class="d-flex align-items-center justify-content-center">
                    <svg class="icon icon-xs">
                      <use xlink:href="#arrow-right"></use>
                    </svg>
                  </div>
                </div>

                <div id="question-2" class="collapse" style="">
                  <div class="accordion-content answer fw-medium ">
                    <p>Beacause their crystallines are still growing, Luminette is not advised for children under 12 years of age</p>
                  </div>
                </div>
              </div>
            </div>
            
            
          </div>
        </div>
        <div class='lav-faq__image'>
          <img src='${settings.dir}/img/faq.svg' />
        </div>
      </div>

      <div class='lav-faq__btn-wrap'>
        <button class='lav-faq__btn btn-primary btn-lg flipped lav-btn lav-btn-buy'>
          <span class="btn-text">
            Get Luminette3 Now
          </span>
          <span class="btn-bg-wrapper"></span>
        </button>
      </div>
  
    </div>
  </section>

  <section class='lav-reviews lav-observe'>
    <div class='container-fluid container--size--lg lav-reviews__container'>
      <div class='lav-reviews__title lav-title'>150,000 Luminette&nbsp;users</div>

      <div class="slider-wrapper position-relative">
        <div class="slider">
          <div class="slide">
            <div class="card">
              <div class="card-header text-center">
                <picture class="avatar d-block">
                  <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/16@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/16.png 1x"/>
                  <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/16.png" alt="Customer avatar">
                </picture>
                <div class="h4 name fw-bolder">Arnaud T.</div>
                <a href="https://www.google.com/maps/contrib/111655687148446401076/reviews/@50.5779487,5.2610511,16z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                  <span>
                    Read the review on <b>Google</b>
                  </span>
                  <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                </a>
              </div>
              <div class="card-body-wrapper">
                <div class="card-body">
                  <p class="review">"Every year I notice the lack of light and it affects my mood.
                    This year I found the solution to remedy this with the Luminette. The advantage is that
                    you are not stuck in front of a screen while you use it, so and you can get ready in the morning or eat
                    breakfast
                    with the glasses on. It is very practical :)"
                  </p>
                  <button class="fw-bolder expand">Show more</button>
                  <div class="date">4 March 2021</div>
                </div>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="card">
              <div class="card-header text-center">
                <picture class="avatar d-block">
                  <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/4@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/4.png 1x"/>
                  <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/4.png" alt="Customer avatar">
                </picture>
                <div class="h4 name fw-bolder">Laura S.</div>
                <a href="https://www.amazon.com/gp/customer-reviews/R37M192JK2SORZ/ref=cm_cr_getr_d_rvw_ttl?ie=UTF8&ASIN=B07VMRRB9Y" target="_blank" class="link">
                  <span>
                    Read the review on <b>Amazon</b>
                  </span>
                  <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                </a>
              </div>
              <div class="card-body-wrapper">
                <div class="card-body">
                  <p class="review">I use Luminettes since the beginning of October 2020 to deal with my Seasonal Affective
                    Disorder
                    (SAD). So far, I have no symptoms of SAD, despite the time changing (winter time) and the sun
                    disappearing at 4:30 PM. It is a first. I am amazed.my energy level has increased and I feel
                    free and joyous most of the time. I also sleep much better. I must add that I stopped
                    caffeine,
                    which helps as well.
                    Luminettes are far, far better than the lamps. I wear them every morning without being obliged
                    to stare at the lamp. My mood has really improved.
                    They are very convenient and easy to use. I put them onto the top of my glasses. They recharge
                    easily and they can be used without plugging them every day.
                    Everyone who sees me wearing them (when I attend online meetings, when I go to the dentist,
                    etc)
                    are asking me if it works. People think it is pretty and they are very interested because they
                    always have someone in their family with SAD, or they are afflicted by that disorder
                    themselves.
                    So really, no complaints, only good things to say about my Luminettes which are as precious
                    now
                    as my cell phone.
                    Merci!"
                    caffeine,
                    which helps as well.
                    Luminettes are far, far better than the lamps. I wear them every morning without being obliged
                    to stare at the lamp. My mood has really improved.
                    They are very convenient and easy to use. I put them onto the top of my glasses. They recharge
                    easily and they can be used without plugging them every day.
                    Everyone who sees me wearing them (when I attend online meetings, when I go to the dentist,
                    etc)
                    are asking me if it works. People think it is pretty and they are very interested because they
                    always have someone in their family with SAD, or they are afflicted by that disorder
                    themselves.
                    So really, no complaints, only good things to say about my Luminettes which are as precious
                    now
                    as my cell phone.
                    Merci!
                  </p>
                  <button class="fw-bolder expand">Show more</button>
                  <div class="date">21 December 2020</div>
                </div>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="card">
              <div class="card-header text-center">
                <picture class="avatar d-block">
                  <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/1@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/1.png 1x"/>
                  <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/1.png" alt="Customer avatar">
                </picture>
                <div class="h4 name fw-bolder">Rémy Z.</div>
                <a href="https://www.google.com/maps/contrib/112247709787810698381/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@50.5779487,5.2632398,17z/data=!4m6!1m5!8m4!1e2!2s112247709787810698381!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                  <span>
                    Read the review on <b>Google </b>
                  </span>
                  <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                </a>
              </div>
              <div class="card-body-wrapper">
                <div class="card-body">
                  <p class="review">Excellent light therapy glasses.  I use them every morning when I wake up. I
                    have been
                    suffering
                    from
                    seasonal depression for several years, but thanks to Luminettes I have been feeling
                    the
                    effects
                    of my
                    mood disorders much less in autumn and winter. I use them from mid-fall until the end of March. I used to
                    have
                    a
                    light therapy 
                    lamp, but it was quite restrictive to stay in front of it all the time.
                    With
                    my
                    Luminettes I can go about my business without any problem.
                    I am very satisfied!
                  </p>
                  <button class="fw-bolder expand">Show more</button>
                  <div class="date">21 December 2020</div>
                </div>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="card">
              <div class="card-header text-center">
                <picture class="avatar d-block">
                  <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/2@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/2.png 1x"/>
                  <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/2.png" alt="Customer avatar">
                </picture>
                <div class="h4 name fw-bolder">Dominique M.</div>
                <a href="https://www.amazon.fr/gp/customer-reviews/R2TECJ5KRJG2TC/ref=cm_cr_getr_d_rvw_ttl?ie=UTF8&ASIN=B07VMRRB9Y" target="_blank" class="link">
                  <span>
                    Read the review on <b>Amazon</b>
                  </span>
                  <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                </a>
              </div>
              <div class="card-body-wrapper">
                <div class="card-body">
                  <p class="review">Every year, the coming of autumn for me means depression, tiredness, long sleeps and
                    and exhaustion in the afternoon! I spoke about it to the doctor who advised me to try
                    the Luminette. I decided to buy it and use it every morning. So , I
                    eat
                    my breakfast with the Luminette on, without any discomfort, for 20 minutes. It allows me to
                    move around and see what I'm doing, unlike the old devices that
                    stayed
                    on the table, and which, according to the studies carried out, were useless because the luminosity of the
                    the leds did not come from higher than head level and thus did not reach the
                    eye's sensors...
                    Now, I feel fit and healthy during the day, and if during winter I feel tired after lunch, I do a
                    I do a session again. This way, my body stops producing melatonin and my energy
                    comes back, I feel better about myself and I'm in a better mood!
                  </p>
                  <button class="fw-bolder expand">Show more</button>
                  <div class="date">21 December 2020</div>
                </div>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="card">
              <div class="card-header text-center">
                <picture class="avatar d-block">
                  <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/3@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/3.png 1x"/>
                  <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/3.png" alt="Customer avatar">
                </picture>
                <div class="h4 name fw-bolder">Maïté T.</div>
                <a href="https://www.amazon.fr/gp/customer-reviews/R1GSLSI9OTO56U/ref=cm_cr_arp_d_rvw_ttl?ie=UTF8&ASIN=B07VMRRB9Y" target="_blank" class="link">
                  <span>
                    Review on <b>Amazon</b>
                  </span>
                  <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                </a>
              </div>
              <div class="card-body-wrapper">
                <div class="card-body">
                  <p class="review">"I have fibromyalgia, major sleep problems, and an obvious lack of energy when the
                    sun
                    goes away. My neurologist recommended your glasses. I am delighted, I have
                    more energy, but unfortunately this does not affect my pain. But since I'm in better shape, I think it's really great!
                    Autumn and winter no longer scare me thanks to these glasses.
                    I am ready to face them! I really recommend it and I can't stop talking about it to everyone
                    around me."
                  </p>
                  <button class="fw-bolder expand">Show more</button>
                  <div class="date">21 December 2020</div>
                </div>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="card">
              <div class="card-header text-center">
                <picture class="avatar d-block">
                  <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/5@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/5.png 1x"/>
                  <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/5.png" alt="Customer avatar">
                </picture>
                <div class="h4 name fw-bolder">Muriel V.</div>
                <a href="https://www.google.com/maps/contrib/107266988971890423777/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@50.5779487,5.2632398,17z/data=!4m6!1m5!8m4!1e2!2s107266988971890423777!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                  <span>
                    Review on <b>Google maps</b>
                  </span>
                  <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                </a>
              </div>
              <div class="card-body-wrapper">
                <div class="card-body">
                  <p class="review">"I was prescribed it by my neurologist for my sleep disorders and epilepsy, and now I
                    can't
                    do without it anymore. The fact that they are glasses is very practical because you can do
                    things (like brushing your teeth, eating lunch, reading or even starting work).
                    start working). They are delivered with a very practical cover for storage
                    and/or for travelling.
                    I just don't recommend using them in a dark room.
                    "
                  </p>
                  <button class="fw-bolder expand">Show more</button>
                  <div class="date">21 December 2020</div>
                </div>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="card">
              <div class="card-header text-center">
                <picture class="avatar d-block">
                  <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/6@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/6.png 1x"/>
                  <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/6.png" alt="Customer avatar">
                </picture>
                <div class="h4 name fw-bolder">Rita R.</div>
                <a href="https://www.google.com/maps/contrib/100137502211655470427/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@50.6323126,5.3985949,11z/data=!4m6!1m5!8m4!1e1!2s100137502211655470427!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                  <span>
                    Review on <b>Google maps</b>
                  </span>
                  <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                </a>
              </div>
              <div class="card-body-wrapper is-visible">
                <div class="card-body">
                  <p class="review">"After 5 days of using my luminette, I already feel better...
                    Try it and you'll never stop using it.
                    I've been wearing it for 3 years in autumn for 20 minutes a day ... while having breakfast"
                  </p>
                  <div class="date">21 December 2020</div>
                </div>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="card">
              <div class="card-header text-center">
                <picture class="avatar d-block">
                  <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/7@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/7.png 1x"/>
                  <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/7.png" alt="Customer avatar">
                </picture>
                <div class="h4 name fw-bolder">Audrey B.</div>
                <a href="https://www.google.com/maps/contrib/105110317360703574808/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@50.5779487,5.2632398,17z/data=!4m6!1m5!8m4!1e2!2s105110317360703574808!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                  <span>
                    Review on <b>Google maps</b>
                  </span>
                  <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                </a>
              </div>
              <div class="card-body-wrapper is-visible">
                <div class="card-body">
                  <p class="review">"I am very happy with the luminette! (I have the luminette 3). I have better sleep cycles
                    and they help me to wake up in the morning (as well as a coffee). Plus they are
                    easy to wear. Every morning I tell myself that I did the right thing by buying them! I
                    recommend them!
                    "
                  </p>
                  <div class="date">21 December 2020</div>
                </div>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="card">
              <div class="card-header text-center">
                <picture class="avatar d-block">
                  <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/8@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/8.png 1x"/>
                  <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/8.png" alt="Customer avatar">
                </picture>
                <div class="h4 name fw-bolder">Christopher T.</div>
                <a href="https://www.google.com/maps/contrib/105475160819624793335/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@50.5779487,5.2632398,17z/data=!4m6!1m5!8m4!1e2!2s105475160819624793335!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                  <span>
                    Review on <b>Google maps</b>
                  </span>
                  <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                </a>
              </div>
              <div class="card-body-wrapper is-visible">
                <div class="card-body">
                  <p class="review">"I am delighted with model 2.
                    The Luminette is easy to use and allows me to be active in the morning and makes it easier
                    to fall asleep. My neurologist gave me good advice!
                    I will probably switch to model 3 in the future...
                    "
                  </p>
                  <div class="date">21 December 2020</div>
                </div>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="card">
              <div class="card-header text-center">
                <picture class="avatar d-block">
                  <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/9@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/9.png 1x"/>
                  <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/9.png" alt="Customer avatar">
                </picture>
                <div class="h4 name fw-bolder">Gregory E.</div>
                <a href="https://www.google.com/maps/contrib/117879807108998873428/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@50.3197246,6.3556338,7.58z/data=!4m4!1m3!8m2!1e1!2s117879807108998873428?hl=fr-BE" target="_blank" class="link">
                  <span>
                    Review on <b>Google maps</b>
                  </span>
                  <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                </a>
              </div>
              <div class="card-body-wrapper is-visible">
                <div class="card-body">
                  <p class="review">"I have had my luminettes 3 since March 2020 and I can't do without them anymore, they are perfect
                    for
                    jet lag or sleep disorders.
                    "
                  </p>
                  <div class="date">21 December 2020</div>
                </div>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="card">
              <div class="card-header text-center">
                <picture class="avatar d-block">
                  <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/10@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/10.png 1x"/>
                  <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/10.png" alt="Customer avatar">
                </picture>
                <div class="h4 name fw-bolder">Florence M.</div>
                <a href="https://www.google.com/maps/contrib/114308199652100072679/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@50.5779487,5.2632398,17z/data=!4m6!1m5!8m4!1e2!2s114308199652100072679!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                  <span>
                    Review on <b>Google maps</b>
                  </span>
                  <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                </a>
              </div>
              <div class="card-body-wrapper is-visible">
                <div class="card-body">
                  <p class="review">I have had them for a year now. They were recommended to me by my therapist, and I feel a real improvement in my mood and fatigue.
                  </p>
                  <div class="date">21 December 2020</div>
                </div>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="card">
              <div class="card-header text-center">
                <picture class="avatar d-block">
                  <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/11@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/11.png 1x"/>
                  <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/11.png" alt="Customer avatar">
                </picture>
                <div class="h4 name fw-bolder">Guillaume M.</div>
                <a href="https://www.google.com/maps/contrib/101195112554299989422/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@4.6513087,89.2730014,3z/data=!4m6!1m5!8m4!1e2!2s101195112554299989422!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                  <span>
                    Review on <b>Google maps</b>
                  </span>
                  <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                </a>
              </div>
              <div class="card-body-wrapper">
                <div class="card-body">
                  <p class="review">"I have been suffering from seasonal depression for years, so I decided to try light therapy
                    to compensate for the lack of winter sunshine, and I chose the ""glasses"" model
                    for the convenience of being able to do my morning routine and not having to stay glued
                    to
                    a light panel.
                    The results were quick, the usual sluggishness and general tiredness have almost disappeared and
                    and another benefit that I had not foreseen was that my tendency to have trouble falling asleep
                    in the evening vanished too, probably due to a readjustment of the
                    circadian rhythm...
                    All in all, it's an investment, but I don't regret it at all, and my
                    wife has also started using it too!
                    "
                  </p>
                  <button class="fw-bolder expand">Show more</button>
                  <div class="date">21 December 2020</div>
                </div>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="card">
              <div class="card-header text-center">
                <div class="avatar"></div>
                <div class="h4 name fw-bolder">Andi Philip</div>
                <a href="#" target="_blank" class="link">
                  <span>
                    Review on <b>Facebook</b>
                  </span>
                  <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                </a>
              </div>
              <div class="card-body-wrapper">
                <div class="card-body">
                  <p class="review">"I had a small Phillips light box previously, and it was a hassle to sit at the right angle,
                    distance, and time. With these, I don’t have to worry about any of those things. I just put
                    them
                    on, push the button, and wear them until they turn off. Easy to use whether I’m wearing my
                    glasses or contacts. Also, these don’t give me headaches like the Phillips light box did!
                    We have almost 4 people in my household wearing these every day — I will be buying a second
                    pair
                    soon! (Two of us have sleep past disorder and everyone seems to get a mood boost!)"
                  </p>
                  <button class="fw-bolder expand">Show more</button>
                  <div class="date">21 December 2020</div>
                </div>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="card">
              <div class="card-header text-center">
                <picture class="avatar d-block">
                  <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/13@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/13.png 1x"/>
                  <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/13.png" alt="Customer avatar">
                </picture>
                <div class="h4 name fw-bolder">Patricia</div>
                <a href="#" target="_blank" class="link">
                  <span>
                    Review on <b>Facebook</b>
                  </span>
                  <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                </a>
              </div>
              <div class="card-body-wrapper is-visible">
                <div class="card-body">
                  <p class="review">"Used medically for depression. These glasses have brought me a significant
                    improvement. Not awkward to wear, the light improves my mood, brings me
                    comfort,
                    and they are very useful.
                    "
                  </p>
                  <div class="date">21 December 2020</div>
                </div>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="card">
              <div class="card-header text-center">
                <picture class="avatar d-block">
                  <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/14@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/14.png 1x"/>
                  <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/14.png" alt="Customer avatar">
                </picture>
                <div class="h4 name fw-bolder">Hélène</div>
                <a href="https://www.google.com/maps/contrib/116715457571293643665/reviews/@49.9994005,2.560789,8z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                  <span>
                    Review on <b>Google maps</b>
                  </span>
                  <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                </a>
              </div>
              <div class="card-body-wrapper">
                <div class="card-body">
                  <p class="review">"You should do this as soon as you get up, the Luminette is quickly forgotten and you can go about your
                    your business. From the very first time you use it, you'll quickly feel
                    more awake and the mid-morning or afternoon slumps disappear quickly.
                    Really impressed.
                    "
                  </p>
                  <button class="fw-bolder expand">Show more</button>
                  <div class="date">21 December 2020</div>
                </div>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="card">
              <div class="card-header text-center">
                <div class="avatar"></div>
                <div class="h4 name fw-bolder">Anthony</div>
                <a href="https://www.google.com/maps/contrib/103414070215570066252/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@50.5779487,5.2632398,17z/data=!4m6!1m5!8m4!1e2!2s103414070215570066252!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                  <span>
                    Review on <b>Google maps</b>
                  </span>
                  <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                </a>
              </div>
              <div class="card-body-wrapper is-visible">
                <div class="card-body">
                  <p class="review">"I have been a user for more than ten years... the luminette has always helped me to get ""balanced"" during my night or early morning shifts
                    at work ... you feel better very quickly.
                    Reliable product and easy to use.
                    "
                  </p>
                  <div class="date">21 December 2020</div>
                </div>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="card">
              <div class="card-header text-center">
                <picture class="avatar d-block">
                  <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/15@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/15.png 1x"/>
                  <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/15.png" alt="Customer avatar">
                </picture>
                <div class="h4 name fw-bolder">Muriel T.</div>
                <a href="https://www.google.com/maps/contrib/105183132711717313101/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@50.5779487,5.2610511,17z/data=!4m6!1m5!8m4!1e2!2s105183132711717313101!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                  <span>
                    Read the review on <b>Google </b>
                  </span>
                  <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                </a>
              </div>
              <div class="card-body-wrapper">
                <div class="card-body">
                  <p class="review">"I bought the Luminette to help me fight the winter blues. I use it every morning
                    when
                    I get up. What I like about the Luminette is that I can choose the length of the session (20, 30 or 60 minutes)
                    depending on my availability, and that I can go about my business during the session
                    (no need to stay in front of a lamp placed on the table). After
                    a few
                    days of use, I already noticed the result: no more depression on grey and rainy days.
                    Over time, I have felt less tired and have more energy. I really
                    recommend
                    the Luminette.
                    "
                  </p>
                  <button class="fw-bolder expand">Show more</button>
                  <div class="date">21 December 2020</div>
                </div>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="card">
              <div class="card-header text-center">
                <picture class="avatar d-block">
                  <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/12@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/12.png 1x"/>
                  <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/12.png" alt="Customer avatar">
                </picture>
                <div class="h4 name fw-bolder">Aurélie</div>
                <a href="https://www.amazon.fr/gp/customer-reviews/RWZSN5SZJF573/ref=cm_cr_getr_d_rvw_ttl?ie=UTF8&ASIN=B07VMRRB9Y" target="_blank" class="link">
                  <span>
                    Review on <b>Amazon</b>
                  </span>
                  <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                </a>
              </div>
              <div class="card-body-wrapper">
                <div class="card-body">
                  <p class="review">"For years, I have suffered from seasonal depression. I have been advised by health professionals
                    (general practitioner, psychiatrist, psychologist and pharmacist) have advised me to
                    use
                    light therapy to improve my state in the fall and winter.
                    I hesitated for a long time and then I discovered the Luminette.
                    I use it in the morning, either while going about my business (breakfast, brushing my
                    teeth brushing...) or when I'm reading. After the session, I have much more energy and
                    motivation to face the day.
                    It is very practical because it can be worn at the same time as my glasses or
                    computer glasses.
                    They are made of a rather rigid plastic, but they seem to be strong.
                    They charge quite quickly. A charging indicator lets you know when it is finished.
                    Once charged, they can be used about 10 times.
                    There are 3 modes. The more powerful the light, the shorter the exposure time.
                    What is very practical is that you don't have to watch the time because they turn off by themselves once the
                    the session is over. The only small ""downside"" is that the most powerful mode
                    can be glaring when the surrounding light is weak.
                    I would recommend this product without hesitation, since it gives me a real moral boost
                    during short days.
                    "
                  </p>
                  <button class="fw-bolder expand">Show more</button>
                  <div class="date">21 December 2020</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class='lav-show-reviews lav-observe'>Show more</div>
      </div>

      <div class='lav-reviews__total'>
        <div class='lav-reviews__total-col'>
          <div class='lav-reviews__total-image'>
            <img src='${settings.dir}/img/reviews-trusted.svg' />
          </div>
          <div class='lav-reviews__total-info'>
            <div class='lav-reviews__total-score'>4.5</div>
            <div class='lav-reviews__total-stars'>
              <img src='${settings.dir}/img/reviews-stars.svg' />
            </div>
            <a href='#' class='lav-reviews__total-caption'>See reviews on <span>Trusted shops</span></a>
          </div>
        </div>
        <div class='lav-reviews__total-col'>
          <div class='lav-reviews__total-image'>
            <img src='${settings.dir}/img/reviews-amazon.svg' />
          </div>
          <div class='lav-reviews__total-info'>
            <div class='lav-reviews__total-score'>4.4</div>
            <div class='lav-reviews__total-stars'>
              <img src='${settings.dir}/img/reviews-stars.svg' />
            </div>
            <a href='#' class='lav-reviews__total-caption'>See reviews on <span>Amazon</span></a>
          </div>
        </div>
      </div>

      <div class='lav-reviews__preview-list lav-observe'>
        <div class='lav-reviews__preview' style='background-image: url(${settings.dir}/img/en-preview-review1.png);'>
          <div class="lav-reviews__play lav-open-modal" data-target='.lav-review-modal' data-src='https://www.youtube.com/embed/ye4x3DkSbvA?autoplay=0&start=0&showinfo=0&rel=0'>
            <img class='lav-reviews__play-btn' src='${settings.dir}/img/play.svg' />
            <img class='lav-reviews__play-btn' src='${settings.dir}/img/play-hover.svg' />
          </div>
        </div>

        <div class='lav-reviews__preview' style='background-image: url(${settings.dir}/img/en-preview-review2.png);'>
          <div class="lav-reviews__play lav-open-modal" data-target='.lav-review-modal' data-src='https://www.youtube.com/embed/hZpBFn_YKMY?autoplay=0&start=0&showinfo=0&rel=0'>
            <img class='lav-reviews__play-btn' src='${settings.dir}/img/play.svg' />
            <img class='lav-reviews__play-btn' src='${settings.dir}/img/play-hover.svg' />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class='lav-trial lav-section'>
    <div class='container-fluid container--size--lg lav-trial__container'>
      <div class='lav-trial__row lav-observe'>
        <div class='lav-trial__image'>
          <img src='${settings.dir}/img/trial.png' />
          <div class='lav-trial__inside lav-tooltip-wrap'>
            What’s in the box?
            <div class="tooltip d-flex ml-1">
              <img class='lav-info-invert' src="https://conversionratestore.github.io/projects/luminette/img/info.svg" alt="info"/>
              <div class="tooltip-dropdown text-left fs-16">
                <div class="tooltip-item">
                  <img class='tooltip-include' src="${settings.dir}/img/tooltip-include.png" />
                  <div class='lav-list lav-tooltip-list'>
                    <div class='lav-list__item'>Your Luminette</div>
                    <div class='lav-list__item'>A protective case</div>
                    <div class='lav-list__item'>A micro USB wall charger</div>
                    <div class='lav-list__item'>A microfiber cleaning cloth</div>
                    <div class='lav-list__item'>Guarantee certificate</div>
                    <div class='lav-list__item'>Your instruction manual </div>
                  </div>
                </div> 
              </div>
            </div>
          </div>
        </div>

        <div class='lav-trial__info'>
          <div class='lav-trial__title lav-title'>30 Day <br/> <span>Light Therapy Trial</span></div>
          <div class='lav-trial__descr lav-descr'>Test out Luminette's patented light therapy for an entire 30 days, and if you aren't satisfied, send it back and we'll refund you!</div>

          <div class='lav-trial__buttons'>
            <div class='lav-trial__btn lav-trial__btn-refresh lav-tooltip-wrap'>
              <img src='${settings.dir}/img/icon-refresh.svg' />
              <span>
                30-day trial
                <span class="tooltip d-inline-block d-sm-none">
                  <img class='lav-info-invert' src="https://conversionratestore.github.io/projects/luminette/img/info.svg" alt="info"/>
                  <div class="tooltip-dropdown text-left fs-16">
                    <div class="tooltip-item">
                      <p class="mb-2">
                        <b class="fw-semi">You have a whole month to trial your Luminette.</b> We recommend that you use Luminette consistently for a minimum of 10 consecutive days.
                      </p>
                      <p>
                        However, if you’re dissatisfied, you can choose to be refunded for your Luminette within 30 days of purchase. See more details on our <a href="/delivery#returns-block" class="tooltip__link">Refunds page</a>.
                      </p>
                    </div> 
                  </div>
                </span>
              </span>
              <div class="tooltip d-sm-flex d-none ml-2">
                <img class='lav-info-invert' src="https://conversionratestore.github.io/projects/luminette/img/info.svg" alt="info"/>
                <div class="tooltip-dropdown text-left fs-16">
                  <div class="tooltip-item">
                    <p class="mb-2">
                      <b class="fw-semi">You have a whole month to trial your Luminette.</b> We recommend that you use Luminette consistently for a minimum of 10 consecutive days.
                    </p>
                    <p>
                      However, if you’re dissatisfied, you can choose to be refunded for your Luminette within 30 days of purchase. See more details on our <a href="/delivery#returns-block" class="tooltip__link">Refunds page</a>.
                    </p>
                  </div> 
                </div>
              </div>
            </div>
            <div class='lav-trial__btn lav-trial__btn-box lav-tooltip-wrap'>
              <img src='${settings.dir}/img/icon-box-2.svg' />
              <span>
                Free shipping
                <span class="tooltip d-inline-block d-sm-none">
                  <img class='lav-info-invert' src="https://conversionratestore.github.io/projects/luminette/img/info.svg" alt="info"/>
                  <div class="tooltip-dropdown text-left fs-16">
                    <div class="tooltip-item">
                      <div class="tooltip_free text-center mb-2">
                        <div class="d-flex align-items-center justify-content-center mb-2 pb-1">
                          <img height='24' src="${settings.dir}/img/flags.png" alt="">
                        </div>
                        <p> Free for USA and Canada: <div class="fw-bold d-block">3 to 5 working days</div></p>
                      </div>
                      <div class="d-flex align-items-center justify-content-center mb-2 py-1">
                        <img class="mr-2" src="${settings.dir}/img/delivery-methods.png" />
                      </div>
                      <p class="">Orders are shipped from our logistics center located in Boise, Idaho. We use the services of FedEx Ground or USPS. Before they deliver your package, the carrier sends you an email warning you of the day of its passage.</p>
                    </div> 
                  </div>
                </span>
              </span>
              <div class="tooltip d-sm-flex d-none ml-2">
                <img class='lav-info-invert' src="https://conversionratestore.github.io/projects/luminette/img/info.svg" alt="info"/>
                <div class="tooltip-dropdown text-left fs-16">
                  <div class="tooltip-item lav-delivery__plate">
                    <div class="tooltip_free text-center mb-2">
                      <div class="d-flex align-items-center justify-content-center mb-2 pb-1">
                        <img class='lav-delivery__plate-flags' height='24' src="${settings.dir}/img/flags.png" alt="">
                      </div>
                      <div class='lav-delivery__plate-caption'> Free for USA and Canada: <div class="fw-bold d-block">3 to 5 working days</div></div>
                    </div>
                    <div class="d-flex align-items-center justify-content-center mb-2 py-1">
                      <img class="mr-2 lav-delivery__plate-service" src="${settings.dir}/img/delivery-methods.png" />
                    </div>
                    <p class="lav-delivery__descr">Orders are shipped from our logistics center located in Boise, Idaho. We use the services of FedEx Ground or USPS. Before they deliver your package, the carrier sends you an email warning you of the day of its passage.</p>
                  </div> 
                </div>
              </div>
            </div>
          </div>

          <div class='lav-trial__action'>
            <button class='lav-trial__get lav-btn btn-primary btn-lg flipped lav-btn-buy'>
              <span class="btn-text">
              Get it for $199
              </span>
              <span class="btn-bg-wrapper"></span>
            </button>

            <div class='lav-trial__guarantee'>
              <img src='${settings.dir}/img/guarantee.svg' />
              30 days money-back guarantee
            </div>
            <div class='lav-trial__refund'>If you don’t get any results, we will refund&nbsp;you&nbsp;100%</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class='lav-drive lav-section'>
    <div class='lav-drive__caption'>Discover our new product</div>
    <div class='lav-drive__title'>Drive</div>
    <img class='lav-drive__device' src='${settings.dir}/img/drive-device.png' />
    <div class='lav-drive__bg container'>
      <div class='lav-drive__bg-title'>Benefit from light therapy while driving</div>

      <div div class='lav-drive__actions'>
        <button class='lav-drive__btn btn-primary btn-lg flipped lav-btn-buy-drive'>
          <span class="btn-text">
            Buy $149
          </span>
          <span class="btn-bg-wrapper"></span>
        </button>

        <div class='lav-drive__learn'>Learn more</div>
      </div>
    </div>
  </section>

  <div class='lav-modal'>
    <div class='lav-modal__inner lav-review-modal'>
      <div class='lav-modal__close'>
        <img src='${settings.dir}/img/modal-close.svg'>
      </div>

      <iframe width="840" height="480" src="https://www.youtube.com/embed/ye4x3DkSbvA?autoplay=0&start=0&showinfo=0&rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </div>
</main>
`;

if (detectLang() == 'fr') {
  newPage = `
  <main class='lav-wrap'>
    <section class='lav-jumb lav-section'>
      <div class='container-fluid container--size--md lav-jumb__container'>
        <div class='lav-jumb__info'>
          <div class='lav-jumb__title'>Optimize your sleep, energy & mental wellness</div>
  
          <div class='lav-jumb__descr lav-descr'>
            Luminette® glasses are scientifically proven to beat the winter blues, restoring your mood and energy levels in just 30 minutes a day
          </div>
  
          <div class='lav-jumb__actions'>
            <button class='lav-jumb__btn btn-primary btn-lg flipped lav-btn lav-btn-buy'>
              <span class="btn-text">
                Get Luminette3 Now
              </span>
              <span class="btn-bg-wrapper"></span>
            </button>
  
            <div class='lav-jumb__learn'>Learn More</div>
          </div>
        </div>
      </div>
    </section>
  
    <section class='lav-boost lav-section'>
      <div class='container-fluid container--size--md lav-boost__container'>
        <div class='lav-boost__inner lav-plate'>
          <div class='lav-boost__image'>
            <img class='lav-boost__stars' src='${settings.dir}/img/boost-person.svg' />
          </div>
  
          <div class='lav-boost__info'>
            <div class='lav-boost__title'>150,000+ people boost their energy with Luminette</div>
            <img class='lav-boost__stars' src='${settings.dir}/img/stars.svg' />
            <div class='lav-boost__caption'>1049 Amazon & Trustedshops reviews</div>
          </div>
        </div>
      </div>
    </section>
  
    <section class='lav-problems lav-section'>
      <div class='container-fluid container--size--lg lav-problems__container'>
        <div class='lav-problems__title lav-title'>Light therapy can help you <br /> if you have these problems</div>
  
        <div class='lav-problems__grid'>
          <div class='lav-problem' style='background-image: url("${settings.dir}/img/problem1.jpg")'>
            <div class='lav-problem__info'>
              <div class='lav-problem__title'>Sleeping problems</div>
              <div class='lav-problem__list'>
                <div class='lav-problem__item'>Night awakenings</div>
                <div class='lav-problem__item'>Shallow sleep</div>
                <div class='lav-problem__item'>Circadian rhythm imbalances</div>
              </div>
            </div>
          </div>
  
          <div class='lav-problem' style='background-image: url("${settings.dir}/img/problem2.jpeg")'>
            <div class='lav-problem__info'>
              <div class='lav-problem__title'>Seasonal depression</div>
              <div class='lav-problem__list'>
                <div class='lav-problem__item'>Feeling listless, sad or down</div>
                <div class='lav-problem__item'>Sleeping problems</div>
                <div class='lav-problem__item'>Appetite and weight changes</div>
                <div class='lav-problem__item'>Low energy and irritability</div>
                <div class='lav-problem__item'>Difficulty concentrating</div>
                <div class='lav-problem__item'>Low mood</div>
              </div>
            </div>
          </div>
  
          <div class='lav-problem' style='background-image: url("${settings.dir}/img/problem3.jpeg")'>
            <div class='lav-problem__info'>
              <div class='lav-problem__title'>Low energy</div>
              <div class='lav-problem__list'>
                <div class='lav-problem__item'>Tired & groggy mornings</div>
                <div class='lav-problem__item'>Slugging throughout the day</div>
                <div class='lav-problem__item'>Low motivation & irritability</div>
              </div>
            </div>
          </div>
  
          <div class='lav-problem' style='background-image: url("${settings.dir}/img/problem4.jpeg")'>
            <div class='lav-problem__info'>
              <div class='lav-problem__title'>Jet lag</div>
              <div class='lav-problem__list'>
                <div class='lav-problem__item'>Daytime tiredness</div>
                <div class='lav-problem__item'>Headaches & nausea</div>
                <div class='lav-problem__item'>Circadian rhythm imbalances</div>
                <div class='lav-problem__item'>Difficulty adjusting to new timezones</div>
              </div>
            </div>
          </div>
  
          <div class='lav-problem' style='background-image: url("${settings.dir}/img/problem5.jpeg")'>
            <div class='lav-problem__info'>
              <div class='lav-problem__title'>Stress</div>
              <div class='lav-problem__list'>
                <div class='lav-problem__item'>Concentration & focus issues</div>
                <div class='lav-problem__item'>Appetite & weight issues</div>
                <div class='lav-problem__item'>Inability to relax at night</div>
              </div>
            </div>
          </div>
  
          <div class='lav-problem' style='background-image: url("${settings.dir}/img/problem6.jpeg")'>
            <div class='lav-problem__info'>
              <div class='lav-problem__title'>Shift work</div>
              <div class='lav-problem__list'>
                <div class='lav-problem__item'>Brain fog</div>
                <div class='lav-problem__item'>Shortened or shallow sleep</div>
                <div class='lav-problem__item'>Circadian rhythm imbalances</div>
                <div class='lav-problem__item'>Looking and feeling tired</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    <section class='lav-drinks lav-section'>
      <div class='container-fluid container--size--sm lav-drinks__container'>
        <div class='lav-drinks__inner lav-plate'>
          <div class='lav-drinks__image'>
            <img src='${settings.dir}/img/cup.svg' />
          </div>
          <div class='lav-drinks__info'>
            You can also use light therapy as a natural substitute for caffeine & energy drinks during the day to support healthy energy levels. 
          </div>
        </div>
      </div>
    </section>
  
    <section class='lav-wears lav-section'>
      <div class='container-fluid container--size--lg lav-wears__container'>
        <div class='lav-wears__title lav-title'>Wear for 30 mins a day to...</div>
  
        <div class='lav-wears__grid'>
          <div class='lav-wear' style='background-image: url("${settings.dir}/img/benefit1-bg.jpeg")'>
            <div class='lav-wear__info'>
              <div class='lav-wear__icon'>
                <img src='${settings.dir}/img/benefit1.svg' />
              </div>
              <div class='lav-wear__title'>Beat winter blues</div>
              <div class='lav-wear__list'>
                <div class='lav-wear__item'>Cope with winter blues and seasonal changes</div>
                <div class='lav-wear__item'>Manage a healthier lifestyle with circadian rhythms</div>
                <div class='lav-wear__item'>Boost overall health and increase longevity</div>
              </div>
            </div>
          </div>
  
          <div class='lav-wear' style='background-image: url("${settings.dir}/img/benefit2-bg.jpeg")'>
            <div class='lav-wear__info'>
              <div class='lav-wear__icon'>
                <img src='${settings.dir}/img/benefit3.svg' />
              </div>
              <div class='lav-wear__title'>Boost energy</div>
               <div class='lav-wear__list'>
                <div class='lav-wear__item'>Reduce fatigue and irritability</div>
                <div class='lav-wear__item'>Feel more energized</div>
                <div class='lav-wear__item'>Elevate mental and physical performance</div>
              </div>
            </div>
          </div>
  
          <div class='lav-wear' style='background-image: url("${settings.dir}/img/benefit3-bg.jpeg")'>
            <div class='lav-wear__info'>
              <div class='lav-wear__icon'>
                <img src='${settings.dir}/img/benefit2.svg' />
              </div>
              <div class='lav-wear__title'>Sleep better</div>
               <div class='lav-wear__list'>
                <div class='lav-wear__item'>Improve sleep quality</div>
                <div class='lav-wear__item'>Wake up refreshed</div>
                <div class='lav-wear__item'>Fall asleep easier</div>
              </div>
            </div>
          </div>
        </div>
  
        <div class='lav-wears__btn-wrap'>
          <button class='lav-wears__btn lav-btn btn-primary btn-lg flipped lav-btn-buy'>
            <span class="btn-text">
              Get Luminette3 Now
            </span>
            <span class="btn-bg-wrapper"></span>
          </button>
        </div>
      </div>
    </section>
  
    <section class='lav-lucimed lav-section'>
      <div class='container-fluid container--size--sm lav-lucimed__container'>
        <div class='lav-lucimed__inner'>
          <div class='lav-lucimed__info'>
            <div class='lav-lucimed__title lav-title'>Lucimed - Pioneers in Light Therapy</div>
            <div class='lav-lucimed__image lav-mob'>
              <img src='${settings.dir}/img/lucimed.png' />
            </div>
            <div class='lav-lucimed__descr lav-descr'>
              Belgian health tech company Lucimed has pioneered a way for you to bring wearable light therapy into your home. <br class='lav-mob' /><br />Years of research by optical engineers, sleep disorder specialists, professors & inventors have created the Luminette3 - a device that helps you optimize your sleep health & mental wellbeing through the power of light therapy. 
            </div>
            <div class='lav-lucimed__link'>
              Learn more about Luminette scientific research<svg class="icon icon-xs"><use xlink:href="#arrow-right"></use></svg>
            </div>
          </div>
  
          <div class='lav-lucimed__image lav-desk'>
            <img src='${settings.dir}/img/lucimed.png' />
          </div>
        </div>
      </div>
    </section>
  
    <section class='lav-morning lav-section'>
      <div class='container-fluid container--size--lg lav-morning__container'>
        <div class='lav-morning__plate'>
          <div class='lav-morning__info'>
            <div class='lav-morning__title lav-title'>The perfect addition
            to your morning routine:</div>
            
            <div class='lav-morning__descr lav-descr'>Wear Luminette while brushing your teeth, eating breakfast or working on your computer - the perfect addition to any morning routine</div>
  
            <div class='lav-morning__list'>
              <div class='lav-morning__item'>
                <div class='lav-morning__image'>
                  <img src='${settings.dir}/img/morning1.svg' />
                </div>
                <div class='lav-morning__caption'>
                  Therapy sessions last <br /><span>20-45 mins</span>
                </div>
              </div>
              <div class='lav-morning__item'>
                <div class='lav-morning__image'>
                  <img src='${settings.dir}/img/morning2.svg' />
                </div>
                <div class='lav-morning__caption'>Use <span>1x per day</span></div>
              </div>
              <div class='lav-morning__item'>
                <div class='lav-morning__image'>
                  <img src='${settings.dir}/img/morning3.svg' />
                </div>
                <div class='lav-morning__caption'>
                  Feel the benefits within <br /><span>4 to 6 days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    <section class='lav-results lav-section'>
      <div class='container-fluid container--size--lg lav-results__container'>
        <div class='lav-results__title lav-title'>Get results in just 7&nbsp;days</div>
  
        <div class='lav-results__row'>
          <div class="lav-results__item">
            <div class="lav-results__item-title">Order Luminette3</div>
            <div class="lav-results__circle"></div>
            <div class="lav-results__item-caption">Today</div>
          </div>
  
          <div class="lav-results__item">
            <div class="lav-results__item-title">Wear Luminette3</div>
            <div class="lav-results__circle"></div>
            <div class="lav-results__item-caption">20 minutes x 7 days</div>
          </div>
  
          <div class="lav-results__item">
            <div class="lav-results__item-title">Feel energized and fix your sleep</div>
            <div class="lav-results__circle"></div>
            <div class="lav-results__item-caption">After 4-7 days</div>
          </div>
        </div>
  
        <button class='lav-results__btn btn-primary lav-mob btn-lg flipped lav-btn lav-btn-buy'>
          <span class="btn-text">
            Get Luminette3 Now
          </span>
          <span class="btn-bg-wrapper"></span>
        </button>
      </div>
    </section>
  
    <section class='lav-benefits lav-section'>
      <div class='container-fluid container--size--lg lav-benefits__container'>
        <div class='lav-benefits__inner'>
          <div class='lav-benefits__title lav-title'>What are the benefits?</div>
  
          <div class='lav-benefits__list'>
            <div class='lav-benefit'>
              <div class='lav-benefit__icon'>
                <img src='${settings.dir}/img/benefit2-1.svg' />
              </div>
              <div class='lav-benefit__title'>Lightweight and comfortable</div>
              <div class='lav-benefit__caption lav-descr'>Weighing only 51g and built with a comfy ergonomic nose fit</div>
            </div>
            <div class='lav-benefit'>
              <div class='lav-benefit__icon'>
                <img src='${settings.dir}/img/benefit2-2.svg' />
              </div>
              <div class='lav-benefit__title'>Doesn't hinder your vision</div>
              <div class='lav-benefit__caption lav-descr'>The special patented light system lets you experience light therapy without any disruption to your vision</div>
            </div>
            <div class='lav-benefit'>
              <div class='lav-benefit__icon'>
                <img src='${settings.dir}/img/benefit2-3.svg' />
              </div>
              <div class='lav-benefit__title'>Compatible with glasses</div>
              <div class='lav-benefit__caption lav-descr'>Wear Luminette on top of your glasses</div>
            </div>
          </div>
  
          <button class='lav-benefit__btn lav-btn btn-primary btn-lg flipped lav-btn-buy'>
            <span class="btn-text">
              Get Luminette3 Now
            </span>
            <span class="btn-bg-wrapper"></span>
          </button>
        </div>
      </div>
    </section>
  
    <section class='lav-cases lav-section'>
      <div class='container-fluid container--size--lg lav-cases__container'>
        <div class='lav-cases__title lav-title'>Wear Luminette while...</div>
  
        <div class='lav-cases__list'>
          <div class='lav-case'>
            <div class='lav-case__image'>
              <img src='${settings.dir}/img/case1.jpeg' />
            </div>
            <div class='lav-case__caption lav-descr'>Preparing breakfast</div>
          </div>
  
          <div class='lav-case'>
            <div class='lav-case__image'>
              <img src='${settings.dir}/img/case2.jpeg' />
            </div>
            <div class='lav-case__caption lav-descr'>Brushing your teeth</div>
          </div>
  
          <div class='lav-case'>
            <div class='lav-case__image'>
              <img src='${settings.dir}/img/case3.jpeg' />
            </div>
            <div class='lav-case__caption lav-descr'>Working on your computer</div>
          </div>
  
          <div class='lav-case'>
            <div class='lav-case__image'>
              <img src='${settings.dir}/img/case4.jpeg' />
            </div>
            <div class='lav-case__caption lav-descr'>Performing light exercise</div>
          </div>
        </div>
      </div>
    </section>
  
    <section class='lav-recharge lav-section'>
      <div class='container-fluid container--size--lg lav-recharge__container'>
        <div class='lav-recharge__inner'>
          <div class='lav-recharge__preview lav-open-modal' data-target='.lav-review-modal' data-src='https://www.youtube.com/embed/rnpVhWWRUDI?autoplay=0&start=0&showinfo=0&rel=0'>
            <img src='${settings.dir}/img/play.svg' />
            <img src='${settings.dir}/img/play-hover.svg' />
          </div>
          <div class='lav-recharge__info'>
            <div class='lav-recharge__title lav-title'>Recharge with Luminette</div>
            <div class='lav-recharge__caption lav-descr'>Breakthrough technology allows Luminette® glasses to rebalance your biological circadian body clock, restoring your sleep cycles, mood, and energy levels.</div>
          </div>
        </div>
      </div>
    </section>
  
    <section class='lav-works lav-section'>
      <div class='container-fluid container--size--sm lav-works__container'>
        <div class='lav-works__row'>
          <div class='lav-works__info'>
            <div class='lav-works__title lav-title'>The Science Behind Luminette®</div>
  
            <div class='lav-works__image lav-mob'>
              <img src='${settings.dir}/img/works.png' />
            </div>
  
            <div class='lav-works__item'>
              <div class='lav-works__item-title'>A patented, innovative light therapy system, for optimal comfort.</div>
              <div class='lav-works__item-descr lav-descr'>Innovative Luminette® technology emits a gentle beam of light towards the eyes from just above eye level. This mimics the natural light from blue skies, without interrupting vision.</div>
            </div>
  
            <div class='lav-works__item'>
              <div class='lav-works__item-title'>White light enhanced with <span>blue light</span>
              for greater effectiveness.</div>
              <div class='lav-works__item-descr lav-descr'>Luminette 3 emits a blue-enriched white light, peaked at 468 nm. This wavelength is proven to be the most effective at triggering the body’s positive response to sunlight.</div>
            </div>
          </div>
          
          <div class='lav-works__image lav-desk'>
            <img src='${settings.dir}/img/works.png' />
          </div>
        </div>
      </div>
    </section>
  
    <section class='lav-study__wrap lav-section'>
      <div class='container-fluid container--size--sm'>
        <div class='lav-study'>
          <div class='lav-study__icon'>
            <svg class="icon icon-xxl">
              <use xlink:href="#lamp"></use>
            </svg>
          </div>
          <div class='lav-study__info'>
            An <strong>independent study</strong> has shown that the Luminette gives the same results as a 10,000 lux light box
          </div>
          <a href='https://d3sq5glv6xow4l.cloudfront.net/docs/Light_therapy_with_boxes_or_glasses_to_counteract_.pdf' target="_blank" class='lav-study__btn'>
            Read the study
            <img src='/images/icons/adobe-reader.svg' />
          </a>
        </div>
      </div>
    </section>
  
    <section class='lav-safety lav-section'>
      <div class='container-fluid container--size--lg'>
        <div class='lav-safety__row'>
          <div class='lav-safety__left'>
            <div class='lav-safety__title lav-title'>Safety</div>
  
            <div class='lav-safety__icons'>
              <img src="https://conversionratestore.github.io/projects/luminette/img/safety-1.svg" alt="safety icon" />
              <img src="https://conversionratestore.github.io/projects/luminette/img/safety-2.svg" alt="safety icon" />
              <img src="https://conversionratestore.github.io/projects/luminette/img/safety-3.svg" alt="safety icon" />
            </div>
          </div>
          <div class='lav-safety__right'>
            <div class='lav-safety__descr lav-descr'>Since 2007 Luminette®  carries the European 
            CE classification.</div>
  
            <div class='lav-safety__descr lav-descr'>Luminette® is classified as a device that is safe for the eyes in accordance with the international standard CEI 62471. </div>
  
            <div class='lav-safety__descr lav-descr'>There are no Light Therapy lamps in the USA that carry FDA approval. Therefore the efficacy and safety of this electronic device - and all other light therapy devices on the US market - will be unregulated by the FDA. </div>
  
            <div class='lav-safety__toggler lav-mob'>
              See more
              <svg class="icon icon-xs"><use xlink:href="#arrow-right"></use></svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    <section class='lav-compare lav-section lav-observe'>
      <div class='container-fluid container--size--xs'>
        <div class="row fs-16 text-center lav-compare__inner mx-auto">
          <div class="col-6 py-5">
            <div class='lav-compare__image'>
              <img class="lav-compare__lum" src="${settings.dir}/img/compare-lum.png"/>
            </div>
       
            <p class="fs-22 fw-bold py-1 lav-compare__title">Luminette3</p>
          </div>
          <div class="col-6 py-5">
            <div class='lav-compare__image'>
              <img class="lav-compare__box" src="${settings.dir}/img/lightbox.png"/>
            </div>
            <p class="fs-22 fw-bold py-1 lav-compare__title">Light Box</p>
          </div>
          <div class="col-12 py-2 fs-18 fw-bold b-1">Portable</div>
          <div class="col-6 py-5 fw-medium"><p class="py-1">Wear while <span class="text-ellipsis"> on-the-go</span></p></div>
          <div class="col-6 py-5 fw-medium"><p class="py-1">Requires you to stop and sit still for <span class="text-ellipsis">30 mins</span></p></div>
          <div class="col-12 py-2 fs-18 fw-bold b-1">Light colour spectrum</div>
          <div class="col-6 py-5 fw-medium"><p class="py-1">Blue-enriched <span class="text-ellipsis">white light</span></p></div>
          <div class="col-6 py-5 fw-medium"><p class="py-1">Full spectrum <span class="text-ellipsis">white light</span></p></div>
          <div class="col-12 py-2 fs-18 fw-bold b-1">Therapy effectiveness</div>
          <div class="col-6 py-5 fw-medium"><p class="py-1">Provides effective therapy using a less intense light source</p></div>
          <div class="col-6 py-5 fw-medium"><p class="py-1">Requires at least 10,000 lux to provide effective light therapy</p></div>
          <div class="col-12 py-2 fs-18 fw-bold b-1">Size</div>
          <div class="col-6 py-5 fw-medium"><p class="pt-1 pb-5">Small/ ultralight <br />
          only 51g (1.83 oz)</p></div>
          <div class="col-6 py-5 fw-medium"><p class="pt-1 pb-5">Large, bulky</p></div>
        </div>
      </div>
    </section>
  
    <section class='lav-faq'>
      <div class='container-fluid container--size--lg'>
        <div class='lav-faq__plate'>
          <div class='lav-faq__info'>
            <div class='lav-faq__title lav-title'>FAQs</div>
            <div class='lav-faq__list accordion-primary'>
              <div class="question-row">
                <div class="accordion-toggle collapsed" data-target="#question-1" aria-expanded="false" data-toggle="collapse">
                  <div class="accordion-title d-flex align-items-center align-items-lg-center justify-content-between">
                    <div class="question">
                      What problems can Luminette help to solve?
                    </div>
  
                    <div class="d-flex align-items-center justify-content-center">
                      <svg class="icon icon-xs">
                        <use xlink:href="#arrow-right"></use>
                      </svg>
                    </div>
                  </div>
  
                  <div id="question-1" class="collapse" style="">
                    <div class="accordion-content answer fw-medium ">
                      <p>Beacause their crystallines are still growing, Luminette is not advised for children under 12 years of age</p>
                    </div>
                  </div>
                </div>
              </div>
  
              <div class="question-row">
                <div class="accordion-toggle collapsed" data-target="#question-2" aria-expanded="false" data-toggle="collapse">
                  <div class="accordion-title d-flex align-items-center align-items-lg-center justify-content-between">
                    <div class="question">
                      What problems can Luminette help to solve?
                    </div>
  
                    <div class="d-flex align-items-center justify-content-center">
                      <svg class="icon icon-xs">
                        <use xlink:href="#arrow-right"></use>
                      </svg>
                    </div>
                  </div>
  
                  <div id="question-2" class="collapse" style="">
                    <div class="accordion-content answer fw-medium ">
                      <p>Beacause their crystallines are still growing, Luminette is not advised for children under 12 years of age</p>
                    </div>
                  </div>
                </div>
              </div>
              
              
            </div>
          </div>
          <div class='lav-faq__image'>
            <img src='${settings.dir}/img/faq.svg' />
          </div>
        </div>
  
        <div class='lav-faq__btn-wrap'>
          <button class='lav-faq__btn btn-primary btn-lg flipped lav-btn lav-btn-buy'>
            <span class="btn-text">
              Get Luminette3 Now
            </span>
            <span class="btn-bg-wrapper"></span>
          </button>
        </div>
    
      </div>
    </section>
  
    <section class='lav-reviews lav-observe'>
      <div class='container-fluid container--size--lg lav-reviews__container'>
        <div class='lav-reviews__title lav-title'>150,000 Luminette&nbsp;users</div>
  
        <div class="slider-wrapper position-relative">
          <div class="slider">
            <div class="slide">
              <div class="card">
                <div class="card-header text-center">
                  <picture class="avatar d-block">
                    <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/16@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/16.png 1x"/>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/16.png" alt="Customer avatar">
                  </picture>
                  <div class="h4 name fw-bolder">Arnaud T.</div>
                  <a href="https://www.google.com/maps/contrib/111655687148446401076/reviews/@50.5779487,5.2610511,16z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                    <span>
                      Read the review on <b>Google</b>
                    </span>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                  </a>
                </div>
                <div class="card-body-wrapper">
                  <div class="card-body">
                    <p class="review">"Every year I notice the lack of light and it affects my mood.
                      This year I found the solution to remedy this with the Luminette. The advantage is that
                      you are not stuck in front of a screen while you use it, so and you can get ready in the morning or eat
                      breakfast
                      with the glasses on. It is very practical :)"
                    </p>
                    <button class="fw-bolder expand">Show more</button>
                    <div class="date">4 March 2021</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="card">
                <div class="card-header text-center">
                  <picture class="avatar d-block">
                    <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/4@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/4.png 1x"/>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/4.png" alt="Customer avatar">
                  </picture>
                  <div class="h4 name fw-bolder">Laura S.</div>
                  <a href="https://www.amazon.com/gp/customer-reviews/R37M192JK2SORZ/ref=cm_cr_getr_d_rvw_ttl?ie=UTF8&ASIN=B07VMRRB9Y" target="_blank" class="link">
                    <span>
                      Read the review on <b>Amazon</b>
                    </span>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                  </a>
                </div>
                <div class="card-body-wrapper">
                  <div class="card-body">
                    <p class="review">I use Luminettes since the beginning of October 2020 to deal with my Seasonal Affective
                      Disorder
                      (SAD). So far, I have no symptoms of SAD, despite the time changing (winter time) and the sun
                      disappearing at 4:30 PM. It is a first. I am amazed.my energy level has increased and I feel
                      free and joyous most of the time. I also sleep much better. I must add that I stopped
                      caffeine,
                      which helps as well.
                      Luminettes are far, far better than the lamps. I wear them every morning without being obliged
                      to stare at the lamp. My mood has really improved.
                      They are very convenient and easy to use. I put them onto the top of my glasses. They recharge
                      easily and they can be used without plugging them every day.
                      Everyone who sees me wearing them (when I attend online meetings, when I go to the dentist,
                      etc)
                      are asking me if it works. People think it is pretty and they are very interested because they
                      always have someone in their family with SAD, or they are afflicted by that disorder
                      themselves.
                      So really, no complaints, only good things to say about my Luminettes which are as precious
                      now
                      as my cell phone.
                      Merci!"
                      caffeine,
                      which helps as well.
                      Luminettes are far, far better than the lamps. I wear them every morning without being obliged
                      to stare at the lamp. My mood has really improved.
                      They are very convenient and easy to use. I put them onto the top of my glasses. They recharge
                      easily and they can be used without plugging them every day.
                      Everyone who sees me wearing them (when I attend online meetings, when I go to the dentist,
                      etc)
                      are asking me if it works. People think it is pretty and they are very interested because they
                      always have someone in their family with SAD, or they are afflicted by that disorder
                      themselves.
                      So really, no complaints, only good things to say about my Luminettes which are as precious
                      now
                      as my cell phone.
                      Merci!
                    </p>
                    <button class="fw-bolder expand">Show more</button>
                    <div class="date">21 December 2020</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="card">
                <div class="card-header text-center">
                  <picture class="avatar d-block">
                    <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/1@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/1.png 1x"/>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/1.png" alt="Customer avatar">
                  </picture>
                  <div class="h4 name fw-bolder">Rémy Z.</div>
                  <a href="https://www.google.com/maps/contrib/112247709787810698381/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@50.5779487,5.2632398,17z/data=!4m6!1m5!8m4!1e2!2s112247709787810698381!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                    <span>
                      Read the review on <b>Google </b>
                    </span>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                  </a>
                </div>
                <div class="card-body-wrapper">
                  <div class="card-body">
                    <p class="review">Excellent light therapy glasses.  I use them every morning when I wake up. I
                      have been
                      suffering
                      from
                      seasonal depression for several years, but thanks to Luminettes I have been feeling
                      the
                      effects
                      of my
                      mood disorders much less in autumn and winter. I use them from mid-fall until the end of March. I used to
                      have
                      a
                      light therapy 
                      lamp, but it was quite restrictive to stay in front of it all the time.
                      With
                      my
                      Luminettes I can go about my business without any problem.
                      I am very satisfied!
                    </p>
                    <button class="fw-bolder expand">Show more</button>
                    <div class="date">21 December 2020</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="card">
                <div class="card-header text-center">
                  <picture class="avatar d-block">
                    <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/2@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/2.png 1x"/>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/2.png" alt="Customer avatar">
                  </picture>
                  <div class="h4 name fw-bolder">Dominique M.</div>
                  <a href="https://www.amazon.fr/gp/customer-reviews/R2TECJ5KRJG2TC/ref=cm_cr_getr_d_rvw_ttl?ie=UTF8&ASIN=B07VMRRB9Y" target="_blank" class="link">
                    <span>
                      Read the review on <b>Amazon</b>
                    </span>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                  </a>
                </div>
                <div class="card-body-wrapper">
                  <div class="card-body">
                    <p class="review">Every year, the coming of autumn for me means depression, tiredness, long sleeps and
                      and exhaustion in the afternoon! I spoke about it to the doctor who advised me to try
                      the Luminette. I decided to buy it and use it every morning. So , I
                      eat
                      my breakfast with the Luminette on, without any discomfort, for 20 minutes. It allows me to
                      move around and see what I'm doing, unlike the old devices that
                      stayed
                      on the table, and which, according to the studies carried out, were useless because the luminosity of the
                      the leds did not come from higher than head level and thus did not reach the
                      eye's sensors...
                      Now, I feel fit and healthy during the day, and if during winter I feel tired after lunch, I do a
                      I do a session again. This way, my body stops producing melatonin and my energy
                      comes back, I feel better about myself and I'm in a better mood!
                    </p>
                    <button class="fw-bolder expand">Show more</button>
                    <div class="date">21 December 2020</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="card">
                <div class="card-header text-center">
                  <picture class="avatar d-block">
                    <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/3@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/3.png 1x"/>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/3.png" alt="Customer avatar">
                  </picture>
                  <div class="h4 name fw-bolder">Maïté T.</div>
                  <a href="https://www.amazon.fr/gp/customer-reviews/R1GSLSI9OTO56U/ref=cm_cr_arp_d_rvw_ttl?ie=UTF8&ASIN=B07VMRRB9Y" target="_blank" class="link">
                    <span>
                      Review on <b>Amazon</b>
                    </span>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                  </a>
                </div>
                <div class="card-body-wrapper">
                  <div class="card-body">
                    <p class="review">"I have fibromyalgia, major sleep problems, and an obvious lack of energy when the
                      sun
                      goes away. My neurologist recommended your glasses. I am delighted, I have
                      more energy, but unfortunately this does not affect my pain. But since I'm in better shape, I think it's really great!
                      Autumn and winter no longer scare me thanks to these glasses.
                      I am ready to face them! I really recommend it and I can't stop talking about it to everyone
                      around me."
                    </p>
                    <button class="fw-bolder expand">Show more</button>
                    <div class="date">21 December 2020</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="card">
                <div class="card-header text-center">
                  <picture class="avatar d-block">
                    <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/5@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/5.png 1x"/>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/5.png" alt="Customer avatar">
                  </picture>
                  <div class="h4 name fw-bolder">Muriel V.</div>
                  <a href="https://www.google.com/maps/contrib/107266988971890423777/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@50.5779487,5.2632398,17z/data=!4m6!1m5!8m4!1e2!2s107266988971890423777!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                    <span>
                      Review on <b>Google maps</b>
                    </span>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                  </a>
                </div>
                <div class="card-body-wrapper">
                  <div class="card-body">
                    <p class="review">"I was prescribed it by my neurologist for my sleep disorders and epilepsy, and now I
                      can't
                      do without it anymore. The fact that they are glasses is very practical because you can do
                      things (like brushing your teeth, eating lunch, reading or even starting work).
                      start working). They are delivered with a very practical cover for storage
                      and/or for travelling.
                      I just don't recommend using them in a dark room.
                      "
                    </p>
                    <button class="fw-bolder expand">Show more</button>
                    <div class="date">21 December 2020</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="card">
                <div class="card-header text-center">
                  <picture class="avatar d-block">
                    <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/6@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/6.png 1x"/>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/6.png" alt="Customer avatar">
                  </picture>
                  <div class="h4 name fw-bolder">Rita R.</div>
                  <a href="https://www.google.com/maps/contrib/100137502211655470427/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@50.6323126,5.3985949,11z/data=!4m6!1m5!8m4!1e1!2s100137502211655470427!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                    <span>
                      Review on <b>Google maps</b>
                    </span>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                  </a>
                </div>
                <div class="card-body-wrapper is-visible">
                  <div class="card-body">
                    <p class="review">"After 5 days of using my luminette, I already feel better...
                      Try it and you'll never stop using it.
                      I've been wearing it for 3 years in autumn for 20 minutes a day ... while having breakfast"
                    </p>
                    <div class="date">21 December 2020</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="card">
                <div class="card-header text-center">
                  <picture class="avatar d-block">
                    <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/7@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/7.png 1x"/>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/7.png" alt="Customer avatar">
                  </picture>
                  <div class="h4 name fw-bolder">Audrey B.</div>
                  <a href="https://www.google.com/maps/contrib/105110317360703574808/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@50.5779487,5.2632398,17z/data=!4m6!1m5!8m4!1e2!2s105110317360703574808!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                    <span>
                      Review on <b>Google maps</b>
                    </span>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                  </a>
                </div>
                <div class="card-body-wrapper is-visible">
                  <div class="card-body">
                    <p class="review">"I am very happy with the luminette! (I have the luminette 3). I have better sleep cycles
                      and they help me to wake up in the morning (as well as a coffee). Plus they are
                      easy to wear. Every morning I tell myself that I did the right thing by buying them! I
                      recommend them!
                      "
                    </p>
                    <div class="date">21 December 2020</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="card">
                <div class="card-header text-center">
                  <picture class="avatar d-block">
                    <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/8@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/8.png 1x"/>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/8.png" alt="Customer avatar">
                  </picture>
                  <div class="h4 name fw-bolder">Christopher T.</div>
                  <a href="https://www.google.com/maps/contrib/105475160819624793335/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@50.5779487,5.2632398,17z/data=!4m6!1m5!8m4!1e2!2s105475160819624793335!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                    <span>
                      Review on <b>Google maps</b>
                    </span>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                  </a>
                </div>
                <div class="card-body-wrapper is-visible">
                  <div class="card-body">
                    <p class="review">"I am delighted with model 2.
                      The Luminette is easy to use and allows me to be active in the morning and makes it easier
                      to fall asleep. My neurologist gave me good advice!
                      I will probably switch to model 3 in the future...
                      "
                    </p>
                    <div class="date">21 December 2020</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="card">
                <div class="card-header text-center">
                  <picture class="avatar d-block">
                    <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/9@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/9.png 1x"/>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/9.png" alt="Customer avatar">
                  </picture>
                  <div class="h4 name fw-bolder">Gregory E.</div>
                  <a href="https://www.google.com/maps/contrib/117879807108998873428/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@50.3197246,6.3556338,7.58z/data=!4m4!1m3!8m2!1e1!2s117879807108998873428?hl=fr-BE" target="_blank" class="link">
                    <span>
                      Review on <b>Google maps</b>
                    </span>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                  </a>
                </div>
                <div class="card-body-wrapper is-visible">
                  <div class="card-body">
                    <p class="review">"I have had my luminettes 3 since March 2020 and I can't do without them anymore, they are perfect
                      for
                      jet lag or sleep disorders.
                      "
                    </p>
                    <div class="date">21 December 2020</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="card">
                <div class="card-header text-center">
                  <picture class="avatar d-block">
                    <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/10@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/10.png 1x"/>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/10.png" alt="Customer avatar">
                  </picture>
                  <div class="h4 name fw-bolder">Florence M.</div>
                  <a href="https://www.google.com/maps/contrib/114308199652100072679/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@50.5779487,5.2632398,17z/data=!4m6!1m5!8m4!1e2!2s114308199652100072679!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                    <span>
                      Review on <b>Google maps</b>
                    </span>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                  </a>
                </div>
                <div class="card-body-wrapper is-visible">
                  <div class="card-body">
                    <p class="review">I have had them for a year now. They were recommended to me by my therapist, and I feel a real improvement in my mood and fatigue.
                    </p>
                    <div class="date">21 December 2020</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="card">
                <div class="card-header text-center">
                  <picture class="avatar d-block">
                    <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/11@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/11.png 1x"/>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/11.png" alt="Customer avatar">
                  </picture>
                  <div class="h4 name fw-bolder">Guillaume M.</div>
                  <a href="https://www.google.com/maps/contrib/101195112554299989422/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@4.6513087,89.2730014,3z/data=!4m6!1m5!8m4!1e2!2s101195112554299989422!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                    <span>
                      Review on <b>Google maps</b>
                    </span>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                  </a>
                </div>
                <div class="card-body-wrapper">
                  <div class="card-body">
                    <p class="review">"I have been suffering from seasonal depression for years, so I decided to try light therapy
                      to compensate for the lack of winter sunshine, and I chose the ""glasses"" model
                      for the convenience of being able to do my morning routine and not having to stay glued
                      to
                      a light panel.
                      The results were quick, the usual sluggishness and general tiredness have almost disappeared and
                      and another benefit that I had not foreseen was that my tendency to have trouble falling asleep
                      in the evening vanished too, probably due to a readjustment of the
                      circadian rhythm...
                      All in all, it's an investment, but I don't regret it at all, and my
                      wife has also started using it too!
                      "
                    </p>
                    <button class="fw-bolder expand">Show more</button>
                    <div class="date">21 December 2020</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="card">
                <div class="card-header text-center">
                  <div class="avatar"></div>
                  <div class="h4 name fw-bolder">Andi Philip</div>
                  <a href="#" target="_blank" class="link">
                    <span>
                      Review on <b>Facebook</b>
                    </span>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                  </a>
                </div>
                <div class="card-body-wrapper">
                  <div class="card-body">
                    <p class="review">"I had a small Phillips light box previously, and it was a hassle to sit at the right angle,
                      distance, and time. With these, I don’t have to worry about any of those things. I just put
                      them
                      on, push the button, and wear them until they turn off. Easy to use whether I’m wearing my
                      glasses or contacts. Also, these don’t give me headaches like the Phillips light box did!
                      We have almost 4 people in my household wearing these every day — I will be buying a second
                      pair
                      soon! (Two of us have sleep past disorder and everyone seems to get a mood boost!)"
                    </p>
                    <button class="fw-bolder expand">Show more</button>
                    <div class="date">21 December 2020</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="card">
                <div class="card-header text-center">
                  <picture class="avatar d-block">
                    <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/13@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/13.png 1x"/>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/13.png" alt="Customer avatar">
                  </picture>
                  <div class="h4 name fw-bolder">Patricia</div>
                  <a href="#" target="_blank" class="link">
                    <span>
                      Review on <b>Facebook</b>
                    </span>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                  </a>
                </div>
                <div class="card-body-wrapper is-visible">
                  <div class="card-body">
                    <p class="review">"Used medically for depression. These glasses have brought me a significant
                      improvement. Not awkward to wear, the light improves my mood, brings me
                      comfort,
                      and they are very useful.
                      "
                    </p>
                    <div class="date">21 December 2020</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="card">
                <div class="card-header text-center">
                  <picture class="avatar d-block">
                    <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/14@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/14.png 1x"/>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/14.png" alt="Customer avatar">
                  </picture>
                  <div class="h4 name fw-bolder">Hélène</div>
                  <a href="https://www.google.com/maps/contrib/116715457571293643665/reviews/@49.9994005,2.560789,8z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                    <span>
                      Review on <b>Google maps</b>
                    </span>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                  </a>
                </div>
                <div class="card-body-wrapper">
                  <div class="card-body">
                    <p class="review">"You should do this as soon as you get up, the Luminette is quickly forgotten and you can go about your
                      your business. From the very first time you use it, you'll quickly feel
                      more awake and the mid-morning or afternoon slumps disappear quickly.
                      Really impressed.
                      "
                    </p>
                    <button class="fw-bolder expand">Show more</button>
                    <div class="date">21 December 2020</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="card">
                <div class="card-header text-center">
                  <div class="avatar"></div>
                  <div class="h4 name fw-bolder">Anthony</div>
                  <a href="https://www.google.com/maps/contrib/103414070215570066252/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@50.5779487,5.2632398,17z/data=!4m6!1m5!8m4!1e2!2s103414070215570066252!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                    <span>
                      Review on <b>Google maps</b>
                    </span>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                  </a>
                </div>
                <div class="card-body-wrapper is-visible">
                  <div class="card-body">
                    <p class="review">"I have been a user for more than ten years... the luminette has always helped me to get ""balanced"" during my night or early morning shifts
                      at work ... you feel better very quickly.
                      Reliable product and easy to use.
                      "
                    </p>
                    <div class="date">21 December 2020</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="card">
                <div class="card-header text-center">
                  <picture class="avatar d-block">
                    <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/15@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/15.png 1x"/>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/15.png" alt="Customer avatar">
                  </picture>
                  <div class="h4 name fw-bolder">Muriel T.</div>
                  <a href="https://www.google.com/maps/contrib/105183132711717313101/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@50.5779487,5.2610511,17z/data=!4m6!1m5!8m4!1e2!2s105183132711717313101!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                    <span>
                      Read the review on <b>Google </b>
                    </span>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                  </a>
                </div>
                <div class="card-body-wrapper">
                  <div class="card-body">
                    <p class="review">"I bought the Luminette to help me fight the winter blues. I use it every morning
                      when
                      I get up. What I like about the Luminette is that I can choose the length of the session (20, 30 or 60 minutes)
                      depending on my availability, and that I can go about my business during the session
                      (no need to stay in front of a lamp placed on the table). After
                      a few
                      days of use, I already noticed the result: no more depression on grey and rainy days.
                      Over time, I have felt less tired and have more energy. I really
                      recommend
                      the Luminette.
                      "
                    </p>
                    <button class="fw-bolder expand">Show more</button>
                    <div class="date">21 December 2020</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="card">
                <div class="card-header text-center">
                  <picture class="avatar d-block">
                    <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/12@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/12.png 1x"/>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/12.png" alt="Customer avatar">
                  </picture>
                  <div class="h4 name fw-bolder">Aurélie</div>
                  <a href="https://www.amazon.fr/gp/customer-reviews/RWZSN5SZJF573/ref=cm_cr_getr_d_rvw_ttl?ie=UTF8&ASIN=B07VMRRB9Y" target="_blank" class="link">
                    <span>
                      Review on <b>Amazon</b>
                    </span>
                    <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                  </a>
                </div>
                <div class="card-body-wrapper">
                  <div class="card-body">
                    <p class="review">"For years, I have suffered from seasonal depression. I have been advised by health professionals
                      (general practitioner, psychiatrist, psychologist and pharmacist) have advised me to
                      use
                      light therapy to improve my state in the fall and winter.
                      I hesitated for a long time and then I discovered the Luminette.
                      I use it in the morning, either while going about my business (breakfast, brushing my
                      teeth brushing...) or when I'm reading. After the session, I have much more energy and
                      motivation to face the day.
                      It is very practical because it can be worn at the same time as my glasses or
                      computer glasses.
                      They are made of a rather rigid plastic, but they seem to be strong.
                      They charge quite quickly. A charging indicator lets you know when it is finished.
                      Once charged, they can be used about 10 times.
                      There are 3 modes. The more powerful the light, the shorter the exposure time.
                      What is very practical is that you don't have to watch the time because they turn off by themselves once the
                      the session is over. The only small ""downside"" is that the most powerful mode
                      can be glaring when the surrounding light is weak.
                      I would recommend this product without hesitation, since it gives me a real moral boost
                      during short days.
                      "
                    </p>
                    <button class="fw-bolder expand">Show more</button>
                    <div class="date">21 December 2020</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div class='lav-show-reviews lav-observe'>Show more</div>
        </div>
  
        <div class='lav-reviews__total'>
          <div class='lav-reviews__total-col'>
            <div class='lav-reviews__total-image'>
              <img src='${settings.dir}/img/reviews-trusted.svg' />
            </div>
            <div class='lav-reviews__total-info'>
              <div class='lav-reviews__total-score'>4.5</div>
              <div class='lav-reviews__total-stars'>
                <img src='${settings.dir}/img/reviews-stars.svg' />
              </div>
              <a href='#' class='lav-reviews__total-caption'>See reviews on <span>Trusted shops</span></a>
            </div>
          </div>
          <div class='lav-reviews__total-col'>
            <div class='lav-reviews__total-image'>
              <img src='${settings.dir}/img/reviews-amazon.svg' />
            </div>
            <div class='lav-reviews__total-info'>
              <div class='lav-reviews__total-score'>4.4</div>
              <div class='lav-reviews__total-stars'>
                <img src='${settings.dir}/img/reviews-stars.svg' />
              </div>
              <a href='#' class='lav-reviews__total-caption'>See reviews on <span>Amazon</span></a>
            </div>
          </div>
        </div>
  
        <div class='lav-reviews__preview-list lav-observe'>
          <div class='lav-reviews__preview' style='background-image: url(${settings.dir}/img/fr-preview-review1.png);'>
            <div class="lav-reviews__play lav-open-modal" data-target='.lav-review-modal' data-src='https://www.youtube.com/embed/vekX4k9dssY?autoplay=0&start=0&showinfo=0&rel=0'>
              <img class='lav-reviews__play-btn' src='${settings.dir}/img/play.svg' />
              <img class='lav-reviews__play-btn' src='${settings.dir}/img/play-hover.svg' />
            </div>
          </div>
  
          <div class='lav-reviews__preview' style='background-image: url(${settings.dir}/img/fr-preview-review2.png);'>
            <div class="lav-reviews__play lav-open-modal" data-target='.lav-review-modal' data-src='https://www.youtube.com/embed/z_QK3VZCS6U?autoplay=0&start=0&showinfo=0&rel=0'>
              <img class='lav-reviews__play-btn' src='${settings.dir}/img/play.svg' />
              <img class='lav-reviews__play-btn' src='${settings.dir}/img/play-hover.svg' />
            </div>
          </div>
        </div>
      </div>
    </section>
  
    <section class='lav-trial lav-section'>
      <div class='container-fluid container--size--lg lav-trial__container'>
        <div class='lav-trial__row lav-observe'>
          <div class='lav-trial__image'>
            <img src='${settings.dir}/img/trial.png' />
            <div class='lav-trial__inside lav-tooltip-wrap'>
              What’s in the box?
              <div class="tooltip d-flex ml-1">
                <img class='lav-info-invert' src="https://conversionratestore.github.io/projects/luminette/img/info.svg" alt="info"/>
                <div class="tooltip-dropdown text-left fs-16">
                  <div class="tooltip-item">
                    <img class='tooltip-include' src="${settings.dir}/img/tooltip-include.png" />
                    <div class='lav-list lav-tooltip-list'>
                      <div class='lav-list__item'>Your Luminette</div>
                      <div class='lav-list__item'>A protective case</div>
                      <div class='lav-list__item'>A micro USB wall charger</div>
                      <div class='lav-list__item'>A microfiber cleaning cloth</div>
                      <div class='lav-list__item'>Guarantee certificate</div>
                      <div class='lav-list__item'>Your instruction manual </div>
                    </div>
                  </div> 
                </div>
              </div>
            </div>
          </div>
  
          <div class='lav-trial__info'>
            <div class='lav-trial__title lav-title'>30 Day <br/> <span>Light Therapy Trial</span></div>
            <div class='lav-trial__descr lav-descr'>Test out Luminette's patented light therapy for an entire 30 days, and if you aren't satisfied, send it back and we'll refund you!</div>
  
            <div class='lav-trial__buttons'>
              <div class='lav-trial__btn lav-trial__btn-refresh lav-tooltip-wrap'>
                <img src='${settings.dir}/img/icon-refresh.svg' />
                <span>
                  30-day trial
                  <span class="tooltip d-inline-block d-sm-none">
                    <img class='lav-info-invert' src="https://conversionratestore.github.io/projects/luminette/img/info.svg" alt="info"/>
                    <div class="tooltip-dropdown text-left fs-16">
                      <div class="tooltip-item">
                        <p class="mb-2">
                          <b class="fw-semi">You have a whole month to trial your Luminette.</b> We recommend that you use Luminette consistently for a minimum of 10 consecutive days.
                        </p>
                        <p>
                          However, if you’re dissatisfied, you can choose to be refunded for your Luminette within 30 days of purchase. See more details on our <a href="/delivery#returns-block" class="tooltip__link">Refunds page</a>.
                        </p>
                      </div> 
                    </div>
                  </span>
                </span>
                <div class="tooltip d-sm-flex d-none ml-2">
                  <img class='lav-info-invert' src="https://conversionratestore.github.io/projects/luminette/img/info.svg" alt="info"/>
                  <div class="tooltip-dropdown text-left fs-16">
                    <div class="tooltip-item">
                      <p class="mb-2">
                        <b class="fw-semi">You have a whole month to trial your Luminette.</b> We recommend that you use Luminette consistently for a minimum of 10 consecutive days.
                      </p>
                      <p>
                        However, if you’re dissatisfied, you can choose to be refunded for your Luminette within 30 days of purchase. See more details on our <a href="/delivery#returns-block" class="tooltip__link">Refunds page</a>.
                      </p>
                    </div> 
                  </div>
                </div>
              </div>
              <div class='lav-trial__btn lav-trial__btn-box lav-tooltip-wrap'>
                <img src='${settings.dir}/img/icon-box-2.svg' />
                <span>
                  Free shipping
                  <span class="tooltip d-inline-block d-sm-none">
                    <img class='lav-info-invert' src="https://conversionratestore.github.io/projects/luminette/img/info.svg" alt="info"/>
                    <div class="tooltip-dropdown text-left fs-16">
                      <div class="tooltip-item">
                        <div class="tooltip_free text-center mb-2">
                          <div class="d-flex align-items-center justify-content-center mb-2 pb-1">
                            <img height='24' src="${settings.dir}/img/flags.png" alt="">
                          </div>
                          <p> Free for USA and Canada: <div class="fw-bold d-block">3 to 5 working days</div></p>
                        </div>
                        <div class="d-flex align-items-center justify-content-center mb-2 py-1">
                          <img class="mr-2" src="${settings.dir}/img/delivery-methods.png" />
                        </div>
                        <p class="">Orders are shipped from our logistics center located in Boise, Idaho. We use the services of FedEx Ground or USPS. Before they deliver your package, the carrier sends you an email warning you of the day of its passage.</p>
                      </div> 
                    </div>
                  </span>
                </span>
                <div class="tooltip d-sm-flex d-none ml-2">
                  <img class='lav-info-invert' src="https://conversionratestore.github.io/projects/luminette/img/info.svg" alt="info"/>
                  <div class="tooltip-dropdown text-left fs-16">
                    <div class="tooltip-item lav-delivery__plate">
                      <div class="tooltip_free text-center mb-2">
                        <div class="d-flex align-items-center justify-content-center mb-2 pb-1">
                          <img class='lav-delivery__plate-flags' height='24' src="${settings.dir}/img/flags.png" alt="">
                        </div>
                        <div class='lav-delivery__plate-caption'> Free for USA and Canada: <div class="fw-bold d-block">3 to 5 working days</div></div>
                      </div>
                      <div class="d-flex align-items-center justify-content-center mb-2 py-1">
                        <img class="mr-2 lav-delivery__plate-service" src="${settings.dir}/img/delivery-methods.png" />
                      </div>
                      <p class="lav-delivery__descr">Orders are shipped from our logistics center located in Boise, Idaho. We use the services of FedEx Ground or USPS. Before they deliver your package, the carrier sends you an email warning you of the day of its passage.</p>
                    </div> 
                  </div>
                </div>
              </div>
            </div>
  
            <div class='lav-trial__action'>
              <button class='lav-trial__get lav-btn btn-primary btn-lg flipped lav-btn-buy'>
                <span class="btn-text">
                Get it for $199
                </span>
                <span class="btn-bg-wrapper"></span>
              </button>
  
              <div class='lav-trial__guarantee'>
                <img src='${settings.dir}/img/guarantee.svg' />
                30 days money-back guarantee
              </div>
              <div class='lav-trial__refund'>If you don’t get any results, we will refund&nbsp;you&nbsp;100%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    <section class='lav-drive lav-section'>
      <div class='lav-drive__caption'>Discover our new product</div>
      <div class='lav-drive__title'>Drive</div>
      <img class='lav-drive__device' src='${settings.dir}/img/drive-device.png' />
      <div class='lav-drive__bg container'>
        <div class='lav-drive__bg-title'>Benefit from light therapy while driving</div>
  
        <div div class='lav-drive__actions'>
          <button class='lav-drive__btn btn-primary btn-lg flipped lav-btn-buy-drive'>
            <span class="btn-text">
              Buy $149
            </span>
            <span class="btn-bg-wrapper"></span>
          </button>
  
          <div class='lav-drive__learn'>Learn more</div>
        </div>
      </div>
    </section>
  
    <div class='lav-modal'>
      <div class='lav-modal__inner lav-review-modal'>
        <div class='lav-modal__close'>
          <img src='${settings.dir}/img/modal-close.svg'>
        </div>
  
        <iframe width="840" height="480" src="https://www.youtube.com/embed/ye4x3DkSbvA?autoplay=0&start=0&showinfo=0&rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  </main>
  `;
}
/*** STYLES / end ***/

/********* Custom Code **********/
gaEvent2('loaded');
preInit();

function preInit() {
  if (!document.body) {
    setTimeout(() => {
      preInit();
    }, 200);
    return false;
  }

  const stylesEl = document.createElement('style');
  stylesEl.innerHTML = styles;
  document.body.appendChild(stylesEl);

  // ** Splide Carousel ** //
  // const sliderStyles = document.createElement('link');
  // sliderStyles.rel = 'stylesheet';
  // sliderStyles.href =
  //   'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.1/dist/css/splide-core.min.css';
  // document.body.appendChild(sliderStyles);

  // let sliderScript = document.createElement('script');
  // sliderScript.src =
  //   'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.1/dist/js/splide.min.js';
  // document.body.append(sliderScript);

  init();

  // TODO
  // observerView();
}

function observerView() {
  const observerOptions = {
    root: null,
    threshold: 0,
    rootMargin: '-40%',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        if (entry.target.classList.contains('lav-jumb')) {
          gaEvent2('section in view', 'first section');
        }
        if (entry.target.classList.contains('lav-transforms')) {
          gaEvent2('section in view', 'How Luminette transforms your days?');
        }
        if (entry.target.classList.contains('lav-wear')) {
          gaEvent2('section in view', "Luminette's light therapy benefits");
        }
        if (entry.target.classList.contains('lav-morning')) {
          gaEvent2('section in view', 'Perfect for your morning routine');
        }
        if (entry.target.classList.contains('lav-benefits')) {
          gaEvent2('section in view', 'What are the benefits?');
        }
        if (entry.target.classList.contains('lav-works')) {
          gaEvent2('section in view', 'How Luminette works');
        }
        if (entry.target.classList.contains('lav-users')) {
          gaEvent2('section in view', 'Luminette users');
        }
        if (entry.target.classList.contains('lav-reviews')) {
          gaEvent2('section in view', 'Customer reviews');
        }
        if (entry.target.classList.contains('lav-trial')) {
          gaEvent2('section in view', '30 Day Light Therapy Trial');
        }
        if (entry.target.classList.contains('lav-drive')) {
          gaEvent2('section in view', 'Drive');
        }

        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  for (let section of Array.from(document.querySelectorAll('.lav-section'))) {
    observer.observe(section);
  }
}

function addScrollEvents() {
  let isScrolled20,
    isScrolled40,
    isScrolled60,
    isScrolled80,
    isScrolled100 = false;

  window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;
    let docHeight = document.body.offsetHeight;
    let winHeight = window.innerHeight;
    let scrollPercent = scrollTop / (docHeight - winHeight);
    let scrollPercentRounded = Math.round(scrollPercent * 100);
    if (scrollPercentRounded >= 20 && !isScrolled20) {
      gaEvent2('scroll depth', scrollPercentRounded + '%');
      isScrolled20 = true;
    }
    if (scrollPercentRounded >= 40 && !isScrolled40) {
      gaEvent2('scroll depth', scrollPercentRounded + '%');
      isScrolled40 = true;
    }
    if (scrollPercentRounded >= 60 && !isScrolled60) {
      gaEvent2('scroll depth', scrollPercentRounded + '%');
      isScrolled60 = true;
    }
    if (scrollPercentRounded >= 80 && !isScrolled80) {
      gaEvent2('scroll depth', scrollPercentRounded + '%');
      isScrolled80 = true;
    }
    if (scrollPercentRounded >= 99 && !isScrolled100) {
      gaEvent2('scroll depth', '100%');
      isScrolled100 = true;
    }
  });
}

function init() {
  if (!document.querySelector('.home-page')) {
    setTimeout(() => {
      init();
    }, 500);
    return false;
  }
  console.log('init');

  if (window.pageYOffset < 50) {
    document.querySelector('.header').classList.remove('dark-theme');
    document.querySelector('.header').classList.add('light-theme');
  }

  window.onscroll = function () {
    setTimeout(() => {
      if (window.pageYOffset < 50) {
        document.querySelector('.header').classList.remove('dark-theme');
        document.querySelector('.header').classList.add('light-theme');
      }
    }, 150);
  };
  // setInterval(() => {
  //   if (window.pageYOffset < 50) {
  //     document.querySelector('.header').classList.remove('dark-theme');
  //     document.querySelector('.header').classList.add('light-theme');
  //   }
  // }, 100);

  // TODO
  // setTimeout(addScrollEvents, 1500);

  document
    .querySelector('.home-page')
    .insertAdjacentHTML('afterbegin', newPage);

  initSliders();
  initModals();

  document
    .querySelector('.lav-study__btn')
    .addEventListener('click', function () {
      // gaEvent(
      //   'exp_new_pdp_checkout_33',
      //   'Read the study',
      //   'Click on button',
      //   'Read the study: An independent study has shown'
      // );
      // gaEvent(
      //   'Click on button. Read the study',
      //   'Read the study: An independent study has shown'
      // );
      // document.querySelector('.btn-download-doc').click();
    });

  document
    .querySelector('.lav-show-reviews')
    .addEventListener('click', function () {
      this.remove();
      // gaEvent(
      //   'exp_new_pdp_checkout_39',
      //   'Show more',
      //   'Click on button',
      //   'Customer reviews. Show more'
      // );
      document.querySelector('.lav-reviews').classList.add('lav-reviews_all');
    });

  for (let item of document.querySelectorAll('.lav-reviews .slider .expand')) {
    item.addEventListener('click', function () {
      // this.remove();
      this.closest('.card-body-wrapper').classList.add('active');
      this.closest('.card-body')
        .querySelector('.review')
        .classList.add('review_expand');
    });
  }

  document
    .querySelector('.lav-safety__toggler')
    .addEventListener('click', function () {
      document.querySelector('.lav-safety__right').classList.add('active');
      this.remove();
    });

  if (window.innerWidth < 992) {
    document
      .querySelector('.lav-trial__descr')
      .insertAdjacentElement(
        'afterend',
        document.querySelector('.lav-trial__image')
      );
  }

  document
    .querySelector('.lav-jumb__learn')
    .addEventListener('click', function () {
      document
        .querySelector('.lav-problems')
        .scrollIntoView({ behavior: 'smooth' });
    });

  for (let btn of document.querySelectorAll('.lav-btn-buy')) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector('.glasses-item .btn-primary').click();
      // if (this.classList.contains('lav-test__btn')) {
      //   gaEvent2('Try it', 'Popup: You have 30 days to test Luminette');
      // }
      // if (this.classList.contains('lav-trials__btn')) {
      //   gaEvent2('Try it', '30 day Light Therapy Trial');
      // }
      // if (this.classList.contains('lav-jumb__btn')) {
      //   gaEvent2('Buy', 'First screen');
      // }
    });
  }

  // for (let btn of document.querySelectorAll('.lav-btn-buy-drive')) {
  //   btn.addEventListener('click', function (e) {
  //     e.preventDefault();
  //     gaEvent2('Try it', 'Benefit from light therapy while driving');
  //     document.querySelector('.drive-item .btn-primary').click();
  //   });
  // }

  let lang = detectLang();
  if (lang == 'fr') {
    initTranslateMain(lang);
  }
  initCountryTranslate();

  document
    .querySelector('.lav-drive__learn')
    .addEventListener('click', function (e) {
      e.preventDefault();
      location.href += '/drive';
      gaEvent2('Learn more', 'Benefit from light therapy while driving');
    });
}

function initSliders() {
  // let initSplideInterval = setInterval(() => {
  //   if (typeof Splide == 'function') {
  //     clearInterval(initSplideInterval);
  //     let splide = new Splide('.lav-transforms__slider', {
  //       type: 'fade',
  //       rewind: true,
  //       arrows: false,
  //     }).mount();

  //     splide.on('moved', function () {
  //       gaEvent2('swipe slider', 'How Luminette transforms your days');
  //     });
  //   }
  // }, 500);

  var thumbnails = document.querySelectorAll('.lav-jumb__thumb');
  var current;

  for (var i = 0; i < thumbnails.length; i++) {
    initThumbnail(thumbnails[i], i);
  }

  function initThumbnail(thumbnail, index) {
    thumbnail.addEventListener('click', function () {
      gaEvent2(
        'exp_new_pdp_checkout_21',
        'Carousel',
        'Click on photo',
        'First screen with image slider'
      );
      jumbSlider.go(index);
    });
  }

  let jqueryInterval = setInterval(() => {
    if (typeof $ === 'function') {
      clearInterval(jqueryInterval);

      const $sliderMob = $('.lav-cases__list');
      let isActiveMobSlider = false;

      $(window).resize(handleMobSlider);
      handleMobSlider();

      function handleMobSlider() {
        if ($(window).width() > 768 && isActiveMobSlider) {
          isActiveMobSlider = false;
          $sliderMob.slick('unslick');
        } else if (!isActiveMobSlider && $(window).width() <= 768) {
          isActiveMobSlider = true;
          $sliderMob.slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            // centerMode: true,
            variableWidth: true,
          });
        }
      }

      // JS Slider
      const $slider = $('.slider');
      // $showMore = $section.find('.show-more');

      let sliderActivated = false;
      let showMoreActivated = false;
      const options = {
        centerMode: true,
        centerPadding: 0,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 375,
        dots: true,
      };

      const resizeHandler = () => {
        const isMobile = window.matchMedia('(max-width: 1199.98px)').matches;

        if (isMobile) {
          if (sliderActivated) {
            $slider.slick('unslick');
            sliderActivated = false;
          }
        } else if (!sliderActivated) {
          try {
            const classificateDots = (prevDotIndex) => {
              const prevPrevDotIndex = prevDotIndex - 1;
              const nextDotIndex = prevDotIndex + 2;
              const nextNextDotIndex = prevDotIndex + 3;

              const $dots = $slider.find('.slick-dots > li').removeClass(`
                    slick-prev 
                    slick-next 
                    slick-prev-prev 
                    slick-next-next 
                    slick-prev-max 
                    slick-next-max
                  `);

              for (let i = 0; i < prevPrevDotIndex; i++) {
                $slider.find(`li:nth-child(${i})`).addClass('slick-prev-max');
              }

              for (let i = $dots.length; i > nextNextDotIndex; i--) {
                $slider.find(`li:nth-child(${i})`).addClass('slick-next-max');
              }

              $slider
                .find(
                  `li:nth-child(${
                    prevDotIndex > 0 ? prevDotIndex : $dots.length
                  })`
                )
                .addClass('slick-prev');

              $slider
                .find(`li:nth-child(${prevPrevDotIndex ?? 0}`)
                .addClass('slick-prev-prev');

              $slider
                .find(
                  `li:nth-child(${
                    nextDotIndex > $dots.length ? 1 : nextDotIndex
                  })`
                )
                .addClass('slick-next');

              $slider
                .find(`li:nth-child(${nextNextDotIndex ?? 0})`)
                .addClass('slick-next-next');
            };

            $slider.slick(options);
            sliderActivated = true;

            classificateDots(0);

            $slider.on('beforeChange', (_e, _slick, _curr, next) =>
              classificateDots(next)
            );
          } catch (error) {
            console.log(error);
          }
        }
      };

      $(window).resize(resizeHandler);
      resizeHandler();
    }
  }, 200);
}

function initModals() {
  for (let item of document.querySelectorAll('.lav-open-modal')) {
    item.addEventListener('click', function (e) {
      e.preventDefault();

      openModal(document.querySelector(item.dataset.target), item.dataset.src);
    });
  }

  document.querySelector('.lav-modal').addEventListener('click', function (e) {
    if (e.target.classList.contains('lav-modal')) {
      closeModal();
    }
  });

  for (let item of document.querySelectorAll('.lav-modal__close')) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      closeModal();
    });
  }
}

function openModal(selector, src) {
  if (src) {
    selector.querySelector('iframe').src = src;
  }

  document.querySelector('.lav-modal').classList.add('active');

  setTimeout(() => {
    selector.classList.add('active');
  }, 400);

  if (selector.querySelector('iframe')) {
    selector.querySelector('iframe').src = selector
      .querySelector('iframe')
      .src.replace('autoplay=0', 'autoplay=1');
  }
}

function closeModal() {
  if (document.querySelector('.lav-modal__inner.active iframe')) {
    document.querySelector('.lav-modal__inner.active iframe').src = document
      .querySelector('.lav-modal__inner.active iframe')
      .src.replace('autoplay=1', 'autoplay=0');
  }

  document.querySelector('.lav-modal__inner.active').classList.remove('active');

  setTimeout(() => {
    document.querySelector('.lav-modal.active').classList.remove('active');
  }, 400);
}

function detectLang() {
  let lang = 'eng';
  // en-us / en-ca / en-gb
  // fr / fr-be / fr-ca
  if (location.href.includes('com/fr')) {
    lang = 'fr';
  }

  return lang;
}

function initTranslateMain(lang) {
  console.log('init translate', lang);
}

function initCountryTranslate(lang) {
  console.log('initCountryTranslate');
  if (
    location.href.includes('com/en-us') ||
    location.href.includes('com/en-ca')
  ) {
    if (location.href.includes('com/en-ca')) {
      document.querySelector('.lav-test__btn .btn-text').innerText =
        'Try it $249';
      if (location.href.includes('/luminette')) {
        document.querySelector('.lav-jumb__actions .btn-text').innerText =
          'Buy $249';
      } else {
        document.querySelector('.lav-jumb__btn .btn-text').innerText =
          'Buy $249';
        document.querySelector('.lav-trial__action .btn-text').innerText =
          'Try it $249';
        document.querySelector('.lav-drive__btn .btn-text').innerText =
          'Buy $189';
      }
    }
    return false;
  }

  if (location.href.includes('com/uk') && !location.href.includes('com/uk-')) {
    document.querySelector('.lav-delivery__plate-flags').src =
      settings.dir + '/img/flags-gb.png';
    document.querySelector('.lav-delivery__plate-caption').innerHTML =
      'Free for United Kingdom:<div class="fw-bold d-block">1 to 3 working days</div>';
    document.querySelector('.lav-delivery__plate-service').src =
      settings.dir + '/img/delivery-methods2.png';
    document.querySelector('.lav-delivery__descr').innerText =
      "For any orders from the UK, the parcels are shipped from Amazon's warehouses located in the UK with Amazon's selected carrier. Before delivering your order, the carrier will send you a SMS or Email, informing you of the day it will be delivered. You have the option of delaying delivery for up to 3 days. If you do not reply, the delivery date will be that proposed by the transporter.";
    return false;
  }

  if (location.href.includes('com/fr') && !location.href.includes('com/fr-')) {
    // document.querySelector('.lav-test__btn .btn-text').innerText =
    //   'Essayez-les pour 229 €';
    // if (location.href.includes('/luminette')) {
    //   document.querySelector('.lav-jumb__actions .btn-text').innerText =
    //     'Achat 229 €';
    // } else {
    //   document.querySelector('.lav-jumb__btn .btn-text').innerText =
    //     'Achat 229 €';
    //   document.querySelector('.lav-trial__action .btn-text').innerText =
    //     'Essayez-les pour 229 €';
    //   document.querySelector('.lav-drive__btn .btn-text').innerText =
    //     'Achat 179 €';
    // }

    document.querySelector('.lav-delivery__plate-flags').src =
      settings.dir + '/img/flags-fr.png';
    document.querySelector('.lav-delivery__plate-caption').innerHTML =
      'Livraison gratuite en France:<div class="fw-bold d-block">2 à 5 jours ouvrables</div>';
    document.querySelector('.lav-delivery__plate-service').src =
      settings.dir + '/img/delivery-methods2.png';
    document.querySelector('.lav-delivery__descr').innerText =
      'Nous travaillons le plus souvent avec Colissimo. Avant de vous livrer votre colis, le transporteur vous enverra un email avec un lien vous permettant de suivre le colis.';
    return false;
  }

  if (location.href.includes('com/fr-be')) {
    // document.querySelector('.lav-test__btn .btn-text').innerText =
    // 'Essayez-les pour 229€';
    // if (location.href.includes('/luminette')) {
    //   document.querySelector('.lav-jumb__actions .btn-text').innerText =
    //     'Achat 229€';
    // } else {
    //   document.querySelector('.lav-jumb__btn .btn-text').innerText =
    //     'Achat 229€';
    //   document.querySelector('.lav-trial__action .btn-text').innerText =
    //     'Essayez-les pour 229€';
    //   document.querySelector('.lav-drive__btn .btn-text').innerText =
    //     'Achat 179€';
    // }
    document.querySelector('.lav-delivery__plate-flags').src =
      settings.dir + '/img/flags-be.png';
    document.querySelector('.lav-delivery__plate-caption').innerHTML =
      'Livraison gratuite en Belgique:<div class="fw-bold d-block">1 à 3 jours ouvrables</div>';
    document.querySelector('.lav-delivery__plate-service').src =
      settings.dir + '/img/delivery-methods2.png';
    document.querySelector('.lav-delivery__descr').innerText =
      'Nous travaillons le plus souvent avec Bpost. Avant de vous livrer votre colis, le transporteur vous enverra un email avec un lien vous permettant de suivre le colis.';
    return false;
  }

  if (location.href.includes('com/fr-ca')) {
    // document.querySelector('.lav-test__btn .btn-text').innerText =
    //   'Essayez-les pour $249';
    // if (location.href.includes('/luminette')) {
    //   document.querySelector('.lav-jumb__actions .btn-text').innerText =
    //     'Achat $249';
    // } else {
    //   document.querySelector('.lav-jumb__btn .btn-text').innerText =
    //     'Achat $249';
    //   document.querySelector('.lav-trial__action .btn-text').innerText =
    //     'Essayez-les pour $249';
    //   document.querySelector('.lav-drive__btn .btn-text').innerText =
    //     'Achat $189';
    // }
    document.querySelector('.lav-delivery__plate-flags').src =
      settings.dir + '/img/flags.png';
    document.querySelector('.lav-delivery__plate-caption').innerHTML =
      'Pour les États-Unis et le Canada:<div class="fw-bold d-block">3 à 5 jours ouvrables</div>';
    document.querySelector('.lav-delivery__plate-service').src =
      settings.dir + '/img/delivery-methods.png';
    document.querySelector('.lav-delivery__descr').innerText =
      "Nous travaillons le plus souvent avec la logistique Fulfilled-by-Amazon (FBA) qui dispose d'entrepôts au Canada. Nous utilisons généralement le transporteur Purolator pour envoyer les colis. Avant de livrer votre colis, le transporteur vous envoie un email vous avertissant du jour de son passage.";
    return false;
  }
}
