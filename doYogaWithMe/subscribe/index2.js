console.log('initExp');

/********* Settings **********/
const settings = {
  dir: 'https://flopsi69.github.io/crs/doYogaWithMe/subscribe',
  clarity: true,
  observe: false,
};

//Clarity
if (settings.clarity) {
  const clarityInterval = setInterval(function () {
    if (typeof clarity == 'function') {
      clearInterval(clarityInterval);
      clarity('set', 'change_plans_page', 'variant_1');
    }
  }, 1000);
}

// Alalytic 3
function gaEvent(action, label) {
  if (!label) {
    label = '';
  }
  try {
    var objData = {
      event: 'event-to-ga',
      eventCategory: 'Exp: Change Plans page',
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
  .lav-hide {
    display: none!important;
  }
  .sfc-becomeASubscriber__section, .sfc-becomeASubscriber__section + section {
    display: none!important;
  }
  #main-content > section {
    position: relative;
    width: 100%;
  }
  .lav-btn {
    background-color: #017922;
    border-color: #017922;
  }
  .lav-btn:hover {
    background-color: #06571c;
    border-color: #06571c;
  }
  .lav-container {
    z-index: 2;
    margin: 0 auto;
    width: 68em;
    max-width: 100%;
    padding: 0 1em;
    // box-sizing: border-box;
  }
  .lav-container * {
    box-sizing: border-box;
  }

  .lav-jumb {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    min-height: calc(100vh - 46.5px);
    padding-top: 50px;
    padding-bottom: 135px;
    text-align: center;
    color: #fff;
  }
  .lav-jumb_auth {
    background: url('${settings.dir}/img/jumb-bg.jpeg') center no-repeat;
    background-size: cover;
  }
  .lav-jumb_no-auth {
    position: relative;
    min-height: auto;
    padding-bottom: 115px;
  }
  .o-page__main {
    position: relative;
  }
  body:not(.user-logged-in) .o-page__main:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: calc(100vh - 46.5px);
    background: url('${settings.dir}/img/jumb-bg2.jpeg') center no-repeat;
    background-size: cover;
  }
  .lav-jumb__title {
    font-weight: 700;
    font-size: 46px;
    line-height: 63px;
  }
  .lav-jumb__caption {
    margin-top: 24px;
    font-weight: 400;
    font-size: 24px;
    line-height: 1;
  }
  .lav-jumb__plans {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 45px;
  }
  .lav-jumb__plans-all {
    display: flex;
    margin-top: 25px;
    justify-content: center;
    align-items: flex-end;
  }
  .lav-plan {
    position: relative;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(3px);
    border-radius: 12px;
    color: #272727;
    padding: 40px;
    min-width: 320px;
  }
  .lav-jumb__plans-all .lav-plan {
    background-color: #fff;
  }
  .lav-plan:first-child {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }
  @media(min-width: 993px) {
    .lav-plan:nth-child(2) {
      border: 2px solid #027DB8;
      overflow: hidden;
    }
    .lav-jumb__plans-all .lav-plan {
      border-radius: 0;
      padding-bottom: 24px;
      min-height: 335px;
    }
    .lav-jumb__plans-all .lav-plan__caption {
      color: #017922;
    }
    .lav-jumb__plans-all .lav-plan:nth-child(1) {
      border-top-left-radius: 12px;
    }
    .lav-jumb__plans-all .lav-plan:nth-child(1) .lav-plan__price {
      min-height: 95px;
      // display: flex;
      // align-items: center;
      // justify-content: center;
    }
    .lav-jumb__plans-all .lav-plan:nth-child(3) {
      border-top-right-radius: 12px;
    }
    .lav-jumb__plans-all .lav-plan:nth-child(2) {
      position: relative;
      z-index: 1;
      border-width: 0;
      border-radius: 0;
      border-top-right-radius: 12px;
      border-top-left-radius: 12px;
      padding-bottom: 24px
    }
  }

  .lav-plan:nth-child(2):before {
    content: 'Save 35%';
    position: absolute;
    z-index: 99;
    top: 54px;
    right: -3px;
    transform: rotate(45deg);
    transform-origin: bottom right;
    padding: 5px 30px;
    background: #F3A83C;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: #272727;
  }
  .lav-plan__title {
    font-weight: 700;
    font-size: 24px;
    line-height: 20px;
  }
  .lav-plan__caption {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    margin-top: 8px;
  }
  .lav-plan__price {
    margin-top: 12px;
    font-size: 16px;
    line-height: 20px;
  }
  .lav-plan__price span {
    color: #027DB8;
    font-weight: 800;
    font-size: 24px;
    line-height: 44px;
  }
  .lav-plan__year {
    margin-top: 4px;
  }
  .lav-plan__year {
  }
  .lav-plan__year-old {
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
    text-decoration-line: line-through;
    color: #A5A5A5;
  }
  .lav-plan__year-new {
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
  }
  .lav-plan__year-caption {
    font-size: 14px;
    line-height: 28px;
  }
  .lav-plan__btn {
    margin-top: 15px;
    width: 100%;
    justify-content: center;
    min-height: 52px;
    font-weight: 700;
    font-size: 18px;
    line-height: 32px;
    text-transform: capitalize;
  }
  .lav-plan__options {
    margin-top: 16px;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #555555;
  }
  .lav-plan__option {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .lav-plan__option + .lav-plan__option {
    margin-top: 12px;
  }
  .lav-plan__option img {
    margin-right: 8px;
    width: 24px;
  }
  .lav-plan__currency {
    color: #A5A5A5;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    margin-top: 4px;
  }
  .lav-btn_trans {
    background-color: transparent;
    color: #017922;
  }
  .lav-btn_trans:hover {
    background-color: #017922;
    color: #fff;
  }
  .lav-jumb__try {
    margin-top: 24px;
    font-weight: 700;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    text-transform: capitalize;
    color: #fff;
    transition: 0.35s;
  }
  .lav-jumb__try-inner {
    display: inline-block;
    padding: 10px 20px;
    background: rgba(255, 255, 255, 0.24);
    border: 1px solid #FFFFFF;
    backdrop-filter: blur(4px);
    border-radius: 30px;
    cursor: pointer;
    transition: 0.35s;
  }
  .lav-jumb__try-inner:hover {
    color: #272727;
    background-color: #fff;
  }

  .lav-feat {
    margin-top: -115px;
    position: relative;
    z-index: 1;
  }
  .lav-feat__row {
    display: flex;
    justify-content: center;
    background: #F6F6F6;
    border: 1px dashed #D6D6D6;
    border-top: none;
    border-bottom-right-radius: 12px;
    border-bottom-left-radius: 12px;
  }
  .lav-feat__container {
    display: flex;
    justify-content: center;
  }
  .lav-feat__list {
    position: relative;
    max-width: 319.5px;
    width: 100%;
    padding: 24px 24px 24px 20px;
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    color: #555555;
  }
  body.samsara, body.samsara .o-page {
    background: #F6F6F6;
  }
  .lav-feat__list + .lav-feat__list:before {
    content: '';
    position: absolute;
    top: 24px;
    bottom: 24px;
    left: -0.5px;
    width: 1px;
    background-color: #E0E0E0;
  }
  .lav-feat__item {
    position: relative;
    padding-left: 22px;
  }
  .lav-feat__item:before {
    content: '';
    position: absolute;
    left: 0;
    top: 5px;
    width: 14px;
    height: 14px;
    background: url(${settings.dir}/img/check-blue.svg) center no-repeat;
    background-size: contain;
  }
  .lav-feat__item + .lav-feat__item {
    margin-top: 16px;
  }
  .lav-feat {}
  .lav-feat {}
  .lav-feat {}
  
  .lav-features {
    margin-top: -100px;
  }
  .lav-features__plate {
    position: relative;
    z-index: 2;
    padding: 50px;
    background: #FFFFFF;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
    border-radius: 12px;
    color: #272727;
    max-width: 930px;
    margin: auto;
  }
  .lav-features__title {
    font-weight: 700;
    font-size: 30px;
    line-height: 1;
    text-align: center;
  }
  .lav-features__row {
    margin-top: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 55px;
  }
  .lav-feature {
    background-position: top left;
    background-repeat: no-repeat;
    padding-left: 40px;
    background-size: 28px;
  }
  .lav-feature + .lav-feature {
    margin-top: 24px;
  }
  .lav-feature__title {
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
  }
  .lav-feature__caption {
    margin-top: 4px;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #595959;
  }
  .lav-features__col:first-child .lav-feature__caption {
    margin-top: 8px;
  }
  .lav-feature__list {
    margin-top: 8px;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #595959;
    padding-left: 25px;
    margin-bottom: 0;
  }
  .lav-feature__list li + li {
    margin-top: 5px;
  }
  .lav-try {
    margin-top: 90px;
    color: #272727;
  }
  .lav-try__plate {
    background: #FFFFFF;
    box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.05);
    border-radius: 12px;
    overflow: hidden;
    display: flex;
  }
  .lav-try__image {
    max-width: 512px;
    width: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .lav-try__info {
    padding: 48px;
  }
  .lav-try__caption {
    font-weight: 400;
    font-size: 21px;
    line-height: 1;
  }
  .lav-try__title {
    font-weight: 700;
    font-size: 30px;
    line-height: 1;
    margin-top: 16px;
  }
  .lav-try__list {
    margin-top: 28px;
    margin-bottom: 0;
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    list-style: none;
    padding: 0;
  }
  .lav-try__list li {
    position: relative;
    padding-left: 32px;
  }
  .lav-try__list li:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url('${settings.dir}/img/check.svg');
  }
  .lav-try__list li:nth-child(n +3) {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #666666;
  }
  .lav-try__list li:nth-child(n +3):before {
    background-image: url('${settings.dir}/img/uncheck.svg');
  }
  .lav-try__list li + li {
    margin-top: 12px;
  }
  .lav-try__btn {
    margin-top: 28px;
    min-height: 52px;
    font-weight: 500;
    font-size: 16px;
    line-height: 32px;
    max-width: 240px;
    width: 100%;
    justify-content: center;
  }

  .lav-classes {
    padding-top: 80px;
    padding-bottom: 72px;
    color: #272727;
  }
  .lav-classes__title {
    font-weight: 700;
    font-size: 44px;
    line-height: 1;
    text-align: center;
  }
  .lav-classes__list {
    margin: 50px -4px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
  }
  .lav-classes__list li {
    margin: 4px 8px;
    background: #F9F9F9;
    border: 1px dashed #D6D6D6;
    border-radius: 12px;
    padding: 7.5px 32px;
    font-weight: 500;
    font-size: 18px;
    line-height: 31px;
    color: #555555;
    transition: 0.35s;
    cursor: pointer;
  }

  .lav-classes__list li:hover {
    background-color: #027DB8;
    color: #fff;
    border-style: solid;
  }

  .lav-pers {
    padding: 108px 0;
    color: #fff;
    background: #003A67;
    text-align: center;
  }
  .lav-pers__title {
    font-size: 44px;
    font-weight: 500;
    line-height: 1;
  }
  .lav-pers__list {
    margin: 50px 0 0;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2em;
    list-style: none;
    padding: 0;
  }
  .lav-pers__item-title {
    margin-top: 12px;
    font-size: 21px;
    font-weight: 500;
    line-height: 1;
  }
  .lav-pers__item-caption {
    margin-top: 14px;
    font-size: 18px;
    line-height: 30px;
  }
  .lav-pers__item-num {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 35px;
    font-weight: 500;
    padding: 18px;
    border-radius: 100px;
    border: solid 1px #027DB8;
    min-height: 1.5em;
    min-width: 1.5em;
  }

  .lav-instructors {
    color: #272727;
    padding-top: 110px;
    padding-bottom: 110px;
  }
  .lav-instructors__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 44px;
  }
  .lav-instructors__title {
    font-size: 44px;
    line-height: 1;
    font-weight: 500;
  }
  .lav-instructors .splide__track {
    overflow: visible;
  }
  .lav-instructors .splide__arrow {
    position: static;
    transform: none;
    background: white;
    box-shadow: 2px 2px 4px 1px rgb(0 0 0 / 5%);
  }
  .lav-instructors .splide__arrow--prev:before {
    color: #003A67;
    content: "➔";
    font-size: 1.2em;
    transform: scale(-1,1);
  }
  .lav-instructors .splide__arrow--next:before {
    color: #003A67;
    content: "➔";
    font-size: 1.2em;
  }
  .lav-instructors .splide__arrow svg {
    display: none;
  }
  .lav-instructors .splide__arrow + .splide__arrow {
    margin-left: 10px;
  }
  .lav-instructors .splide__arrows {
    display: flex;
    align-items: center;
  }

  .lav-instr {
    border-radius: 8px;
    max-width: 280px;
    transition: 0.35s;
    width: 21.7em;
    background: #fefefe;
    overflow: hidden;
    box-shadow: 2px 2px 4px 1px rgb(0 0 0 / 5%);
    display: flex;
    flex-direction: column;
  }
  .lav-instr:hover {
    text-decoration: none;
  }
  .lav-instr:hover .lav-instr__img {
    filter: brightness(65%);
  }
  .lav-instr:hover .lav-instr__name {
    text-decoration: underline;
  }
  .lav-instr__img {
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 282px;
    transition: 0.35s;
  }
  .lav-instr__info {
    padding: 28px;
    color: #000;
  }
  .lav-instr__name {
    font-size: 19px;
  }
  .lav-instr__caption {
    margin-top: 12px;
    border-top: 1px solid #000;
    padding-top: 12px;
    font-size: 16px;
    line-height: 28px;
  }
  .splide__progress {
    display: none;
    background: #d6d6d6;
    border-radius: 100em;
    margin-top: 1.33rem;
    overflow: hidden;
  }
  .splide__progressBar {
    background: #027DB8;
    height: 0.25em;
    transition: width 400ms ease;
    width: 0;
  }
  .lav-mob {
    display: none;
  }
  @media(max-width: 1350px) {
    .lav-container {
      box-sizing: border-box;
    }
  }
  @media(max-width: 992px) {
    .lav-container {
      max-width: 100%;
      width: 100%;
    }
    .lav-pers__item-caption {
      font-size: 13px;
      line-height: 1.5;
    }
    .lav-jumb__plans-all .lav-plan {
      width: 100%;
      padding: 0;
      background: #fff;
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
      border-radius: 12px;
      border: 0;
    }

    .lav-jumb__plans-all .lav-plan__sup {
      padding: 20px 20px 16px 20px;
    }
    .lav-jumb__plans-all .lav-plan__inner {
      display: flex;
      justify-content: space-between;
    }
    .lav-jumb__plans-all .lav-plan__btn {
      margin-right: 20px;
      min-height: 42px;
      padding-top: 0;
      padding-bottom: 0;
      font-size: 16px;
      font-weight: 600;
    }
    .lav-jumb__plans-all .lav-plan:nth-child(2) {
      order: 2;
    }
    .lav-jumb__plans-all .lav-plan__options {
      display: flex;
      justify-content: space-around;
      font-weight: 600;
      font-size: 12px;
      line-height: 16px;
    }
    .lav-jumb__plans-all .lav-plan__name {
      margin-top: 4px;
      font-size: 18px;
    }
    .lav-jumb__plans-all .lav-feat__list {
      padding: 20px;
      background: #F6F6F6;
      max-width: 100%;
      font-weight: 500;
      border-bottom-right-radius: 12px;
      border-bottom-left-radius: 12px;
      border-top: 1px solid #E0E0E0;
    }
    .lav-jumb__plans-all .lav-plan__year {
      text-align: right;
      line-height: 1.1;
    }
    .lav-plan__usd {
      margin-top: 4px;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      color: #A5A5A5;
      text-align: right;
    }
    .lav-feat__item + .lav-feat__item {
      margin-right: 12px;
    }
    .lav-jumb__plans-all {
      flex-flow: column;
    }
    .lav-feat {
      display: none;
    }
    body:not(.lav-auth) .lav-plan__btn {
      display: none;
    }
    button {
      -webkit-tap-highlight-color: transparent;
    }
    .lav-plan__currency {
      color: #FFFFFF;
      text-align: center;
      margin-top: 10px;
    }
    .sfc-slider--stacked .splide__arrow::before {
      margin-top: 0;
    }
    .lav-journey .splide__slide {
      max-width: 90%;
    }
    .lav-plan:nth-child(2):before {
      transform: translateY(-50%);
      background: #F3A83C;
      border-radius: 12px;
      top: 0;
      left: 18px;
      font-weight: 700;
      right: initial;
      font-size: 12px;
      line-height: 20px;
      text-transform: uppercase;
      padding: 2px 8px;
    }
    .lav-plan:first-child {
      border-bottom-right-radius: 12px;
      border-top-right-radius: 12px;
    }
    .lav-plan {
      position: relative;
      min-width: auto;
      border: 2px solid #A5A5A5;
      padding: 16px 18px 16px 44px;
      text-align: left;
      transition: 0.35s;
      box-shadow: none;
      background: rgba(249, 249, 249, 0.9);
    }
    .lav-plan__options.lav-mob {
      display: flex;
      align-items: center;
      justify-content: space-around;
      font-weight: 600;
      font-size: 12px;
      line-height: 16px;
      color: #FFFFFF;
    }
    .lav-plan__option + .lav-plan__option {
      margin-top: 0;
      margin-left: 8px;
    }
    .lav-plan__option img {
      width: 20px;
      margin-right: 4px;
    }
    body:not(.lav-auth) .lav-plan.active {
      border-color: #017922;
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
      backdrop-filter: blur(3px);
    }
    body:not(.lav-auth) .lav-plan:after {
      content: '';
      background: #fff;
      border: 2px solid #A5A5A5;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      position: absolute;
      left: 12px;
      top: 50%;
      transform: translateY(-50%);
      box-sizing: border-box;
      transition: 0.35s;
    }
    body:not(.lav-auth) .lav-plan .lav-mob:before {
      content: '';
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
      background-color: #027DB8;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      transition: 0.35s;
      z-index: 1;
      opacity: 0;
    }
    body:not(.lav-auth) .lav-plan.active .lav-mob:before {
      opacity: 1;
    }
    body:not(.lav-auth) .lav-plan.active:after {
      border-color: #027DB8;
    }
    .lav-plan__price span {
      line-height: 1;
    }
    .lav-plan__price {
      margin-top: 0;
    }
    .lav-plan__year {
      margin-top: 0;
    }
    .lav-plan__year-old, .lav-plan__year-new, .lav-plan__year-caption   {
      font-size: 12px;
      line-height: 1;
    }
    .lav-jumb__try-inner {
      padding-left: 24px;
      padding-right: 24px;
      color: #027DB8;
      background: rgba(255, 255, 255, 0.5);
    }
    .lav-jumb {
      padding-bottom: 32px;
    }
    .lav-jumb_auth {
      background: url(${settings.dir}/img/jumb-bg-mob.jpeg) center bottom no-repeat;
      background-size: cover;
      min-height: auto;
    }
    .lav-jumb_no-auth {
      background: url(${settings.dir}/img/jumb-bg2-mob.jpeg) center bottom no-repeat;
      background-size: cover;
      padding: 30px 0;
    }
    .lav-auth .lav-plan__options.lav-mob, .lav-auth .lav-plan__started, .lav-auth .lav-plan__currency {
      display: none!important;
    }
    .o-page__main:before {
      display: none;
    }
    .lav-features {
      margin-top: 42px;
    }
    .lav-jumb__try-inner span {
      text-decoration: underline;
      border-width: 0;
    }
    body:not(.lav-auth) .lav-plan .lav-mob {
      position: static;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
    }
    .lav-plan__month {
      color: #017922;
      font-weight: 700;
      font-size: 14px;
      line-height: 20px;
    }
    .lav-plan__name {
      font-weight: 700;
      font-size: 16px;
      line-height: 20px;
      margin-top: 8px;
    }
    .lav-desk {
      display: none;
    }
    .lav-mob {
      display: block;
    }
    .lav-plan + .lav-plan {
      margin-top: 26px;
    }
    .lav-jumb {
      padding-top: 25px;
    }
    .lav-jumb__title {
      font-size: 34px;
      line-height: 34px;
    }
    .lav-jumb__caption {
      margin-top: 12px;
      font-size: 18px;
      line-height: 31px;
    }
    .lav-jumb__plans {
      margin-top: 16px;
      display: block;
    }

    .lav-features__plate {
      padding: 0;
      box-shadow: none;
      border-radius: 0;
      background: transparent;
    }
    .lav-feature {
      background-color: #FFFFFF;
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
      border-radius: 12px;
      padding: 20px 20px 20px 60px;
      background-position: 20px 20px;
    }
    .lav-features__title {
      font-size: 22px;
    }
    .lav-features__row {
      margin-top: 20px;
      display: block;
    }
    .lav-feature__title {
      font-size: 16px;
    }
    .lav-features__col + .lav-features__col, .lav-feature + .lav-feature {
      margin-top: 12px;
    }

    .lav-try {
      margin-top: 42px;
    }
    .lav-try__plate {
      display: block;
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
    }
    .lav-try__image {
      height: 180px;
      max-width: 100%;
      background-position: bottom center;
    }
    .lav-try__info {
      padding: 20px;
    }
    .lav-jumb__try {
      font-weight: 600;
      margin-top: 32px;
    }
    .lav-plan__started {
      margin-top: 10px;
      width: 100%;
      min-height: 52px;
      font-size: 18px;
      line-height: 32px;
      font-weight: 600;
      letter-spacing: 0.2px;
    }
    .lav-try__caption {
      text-align: center;
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;
    }
    .lav-try__title {
      margin-top: 8px;
      font-size: 22px;
      text-align: center;
    }
    .lav-try__list {
      margin-top: 16px;
      line-height: 20px;
    }
    .lav-try__btn {
      margin-top: 16px;
      font-size: 18px;
      max-width: 100%;
      font-weight: 600;
    }

    .lav-classes {
      padding-top: 42px;
      padding-bottom: 42px;
    }
    .lav-classes__title {
      font-size: 22px;
    }
    .lav-classes__list {
      margin: 24px -4px 0;
    }
    .lav-classes__list.lav-mob {
      display: flex;
    }
    .lav-classes__list li {
      margin: 4px;
      font-size: 16px;
      padding: 4px 24px;
    }
    .lav-classes__toggle {
      font-weight: 700;
      font-size: 18px;
      line-height: 32px;
      margin: 16px auto 0;
      min-height: 52px;
    }
    .lav-classes__list li:nth-child(1n + 11) {
      display: none;
    }
    .lav-classes__list.active li:nth-child(1n + 11) {
      display: block;
    }

    .lav-pers {
      padding: 54px 0;
    }
    .lav-pers__title {
      font-size: 22px;
    }

    .lav-pers__list {
      display: block;
      margin-top: 28px;
    }
    .lav-pers__item + .lav-pers__item {
      margin-top: 36px;
    }
    .lav-pers__item-caption {
      font-size: 18px;
      line-height: 30px;
    }

    .lav-instructors {
      padding-top: 42px;
      padding-bottom: 60px;
    }
    .lav-instructors__title {
      font-size: 22px;
    }
    .lav-instructors__head {
      margin-bottom: 22px;
    }

  }
  @media(max-width: 400px) {
    .lav-jumb__plans-all .lav-plan__options {
      font-size: 10px;
    }
    .lav-jumb__plans-all .lav-plan__name {
      font-size: 16px;
    }
    .lav-jumb__plans-all .lav-plan__price span {
      font-size: 22px;
    }
  }
  @media(max-width: 385px) {
    .lav-plan__name {
      font-size: 14px;
    }
    .lav-instructors {
      padding-bottom: 90px;
    }
    .lav-journey .splide__arrows {
      margin-top: -5.2em!important;
    }
  }
`;

const stylesEl = document.createElement('style');
stylesEl.innerHTML = styles;
document.body.appendChild(stylesEl);
/*** STYLES / end ***/

/********* Custom Code **********/
const newLayout = `
<section class='lav-jumb lav-jumb_auth'>
  <div class='lav-container'>
    <div class='lav-jumb__title'>Your ultimate Yoga journey&nbsp;starts&nbsp;here</div>
    <div class='lav-jumb__caption'>Choose your plan</div>
    <div class='lav-jumb__plans'>
      <div class='lav-jumb__plan lav-plan'>
        <div class='lav-desk'>
          <div class='lav-plan__title'>Unlimited access</div>
          <div class='lav-plan__caption'>1 month</div>
          <div class='lav-plan__price'>
            <span>$13.99</span> / month
          </div>
          <div class='lav-plan__currency'>*All prices in USD</div>
          <button class='lav-plan__btn lav-plan__btn-month lav-btn lav-btn_trans sfc-button'>Get started now</button>
          <div class='lav-plan__options'>
            <div class='lav-plan__option'>
              <img src='${settings.dir}/img/calendar.svg' />
              Cancel anytime
            </div>
            <div class='lav-plan__option'>
              <img src='${settings.dir}/img/guarantee.svg' />
              30-Day Money-Back Guarantee
            </div>
          </div>
        </div>
        <div class='lav-mob'>
          <div class='lav-plan__left'>
            <div class='lav-plan__month'>1 month</div>
            <div class='lav-plan__name'>Unlimited access</div>
          </div>
          <div class='lav-plan__right'>
            <div class='lav-plan__price'>
              <span>$13.99</span> / month
            </div>
          </div>
        </div>
      </div>

      <div class='lav-jumb__plan lav-plan active'>
        <div class='lav-desk'>
          <div class='lav-plan__title'>Unlimited access</div>
          <div class='lav-plan__caption'>12 months</div>
          <div class='lav-plan__price'>
            <span>$9.08</span> / month
          </div>
          <div class='lav-plan__year'>
            <span class='lav-plan__year-old'>$167.88</span>
            <span class='lav-plan__year-new'>$108.99</span>
            <span class='lav-plan__year-caption'>/&nbsp;year</span>
          </div>
          <div class='lav-plan__currency'>*All prices in USD</div>
          <button class='lav-plan__btn lav-plan__btn-year lav-btn sfc-button'>Get started now</button>
          <div class='lav-plan__options'>
            <div class='lav-plan__option'>
              <img src='${settings.dir}/img/calendar.svg' />
              Cancel anytime
            </div>
            <div class='lav-plan__option'>
              <img src='${settings.dir}/img/guarantee.svg' />
              30-Day Money-Back Guarantee
            </div>
          </div>
        </div>
        <div class='lav-mob'>
          <div class='lav-plan__left'>
            <div class='lav-plan__month'>12 months</div>
            <div class='lav-plan__name'>Unlimited access</div>
          </div>
          <div class='lav-plan__right'>
            <div class='lav-plan__price'>
              <span>$9.08</span> / month
            </div>

            <div class='lav-plan__year'>
              <span class='lav-plan__year-old'>$167.88</span>
              <span class='lav-plan__year-new'>$108.99</span>
              <span class='lav-plan__year-caption'>/&nbsp;year</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class='lav-plan__currency lav-mob'>*All prices in USD</div>

    <button class='lav-plan__started lav-btn sfc-button lav-mob'>
      Get Started Now
    </button>

    <div class='lav-plan__options lav-mob'>
      <div class='lav-plan__option'>
        <img src='${settings.dir}/img/calendar-mob.svg' />
        Cancel anytime
      </div>
      <div class='lav-plan__option'>
        <img src='${settings.dir}/img/guarantee-mob.svg' />
        30-Day Money-Back Guarantee
      </div>
    </div>
    
    <div class='lav-jumb__try'>
      <span class='lav-jumb__try-inner'>Not sure yet? Try Basic plan for free</span>
    </div>
  </div>
</section>

<section class='lav-jumb lav-jumb_no-auth'>
  <div class='lav-container'>
    <div class='lav-jumb__title'>Your ultimate Yoga journey&nbsp;starts&nbsp;here</div>
    <div class='lav-jumb__caption'>Choose your plan</div>
    <div class='lav-jumb__plans-all'>
      <div class='lav-jumb__plan lav-plan'>
        <div class='lav-desk'>
          <div class='lav-plan__title'>Basic access</div>
          <div class='lav-plan__price'>
            <span>Free</span>
          </div>
          <button class='lav-plan__btn lav-plan__btn-try lav-btn lav-btn_trans sfc-button'>Get started now</button>
        </div>
        <div class='lav-mob'>
          <div class='lav-plan__sup'>
            <div class='lav-plan__inner'>
              <div class='lav-plan__left'>
                <div class='lav-plan__name'>Basic access</div>
              </div>
              <div class='lav-plan__right'>
                <div class='lav-plan__price'>
                  <span>Free</span>
                </div>
              </div>
            </div>

            <button class='lav-plan__btn lav-plan__btn-try lav-btn sfc-button'>Get started now</button>
          </div>
          <div class='lav-feat__list'>
            <div class='lav-feat__item'>
              Access 500+ yoga, meditation and movement classes from our extensive library
            </div>
            <div class='lav-feat__item'>
              Access 1st two classes released by new teachers to DYWM
            </div>
          </div>
        </div>
      </div>

      <div class='lav-jumb__plan lav-plan'>
        <div class='lav-desk'>
          <div class='lav-plan__title'>Annual access</div>
          <div class='lav-plan__caption'>12 months</div>
          <div class='lav-plan__price'>
            <span>$9.08</span> / month
          </div>
          <div class='lav-plan__year'>
            <span class='lav-plan__year-old'>$167.88</span>
            <span class='lav-plan__year-new'>$108.99</span>
            <span class='lav-plan__year-caption'>/&nbsp;year</span>
          </div>
          <div class='lav-plan__currency'>*All prices in USD</div>
          <button class='lav-plan__btn lav-plan__btn-year lav-btn sfc-button'>Get started now</button>
          <div class='lav-plan__options'>
            <div class='lav-plan__option'>
              <img src='${settings.dir}/img/calendar.svg' />
              Cancel anytime
            </div>
            <div class='lav-plan__option'>
              <img src='${settings.dir}/img/guarantee.svg' />
              30-Day Money-Back Guarantee
            </div>
          </div>
        </div>
        <div class='lav-mob'>
          <div class='lav-plan__sup'>
            <div class='lav-plan__inner'>
              <div class='lav-plan__left'>
                <div class='lav-plan__month'>12 months</div>
                <div class='lav-plan__name'>Unlimited access</div>
              </div>
              <div class='lav-plan__right'>
                <div class='lav-plan__price'>
                  <span>$9.08</span> / month
                </div>

                <div class='lav-plan__year'>
                  <span class='lav-plan__year-old'>$167.88</span>
                  <span class='lav-plan__year-new'>$108.99</span><span class='lav-plan__year-caption'>/year</span>
                </div>

                <div class='lav-plan__usd'>*All prices in USD</div>
              </div>
            </div>

            <button class='lav-plan__btn lav-plan__btn-year lav-btn sfc-button'>Get started now</button>
            <div class='lav-plan__options'>
              <div class='lav-plan__option'>
                <img src='${settings.dir}/img/calendar.svg' />
                Cancel anytime
              </div>
              <div class='lav-plan__option'>
                <img src='${settings.dir}/img/guarantee.svg' />
                30-Day Money-Back Guarantee
              </div>
            </div>
          </div>

          <div class='lav-feat__list'>
            <div class='lav-feat__item'>Access 1000s of AD-FREE yoga, meditation and movement classes</div>
            <div class='lav-feat__item'>Exclusive access to all new releases and premium content</div>
            <div class='lav-feat__item'>Access our complete collection of curated programs & challenges</div>
            <div class='lav-feat__item'>25% off livestream events</div>
            <div class='lav-feat__item'>Follow your favorite teachers</div>
            <div class='lav-feat__item'>Curate your own collection of favorite classes</div>
            <div class='lav-feat__item'>Access to our Mobile and TV app</div>
          </div>
        </div>
      </div>

      <div class='lav-jumb__plan lav-plan'>
        <div class='lav-desk'>
          <div class='lav-plan__title'>Monthly access</div>
          <div class='lav-plan__caption'>1 month</div>
          <div class='lav-plan__price'>
            <span>$13.99</span> / month
          </div>
          <div class='lav-plan__currency'>*All prices in USD</div>
          <button class='lav-plan__btn lav-plan__btn-month lav-btn lav-btn_trans sfc-button'>Get started now</button>
          <div class='lav-plan__options'>
            <div class='lav-plan__option'>
              <img src='${settings.dir}/img/calendar.svg' />
              Cancel anytime
            </div>
            <div class='lav-plan__option'>
              <img src='${settings.dir}/img/guarantee.svg' />
              30-Day Money-Back Guarantee
            </div>
          </div>
        </div>
        <div class='lav-mob'>
          <div class='lav-plan__sup'>
            <div class='lav-plan__inner'>
              <div class='lav-plan__left'>
                <div class='lav-plan__month'>1 month</div>
                <div class='lav-plan__name'>Unlimited access</div>
              </div>
              <div class='lav-plan__right'>
                <div class='lav-plan__price'>
                  <span>$13.99</span> / month
                </div>
                <div class='lav-plan__usd'>*All prices in USD</div>
              </div>
            </div>

            <button class='lav-plan__btn lav-plan__btn-month lav-btn sfc-button'>Get started now</button>
            <div class='lav-plan__options'>
              <div class='lav-plan__option'>
                <img src='${settings.dir}/img/calendar.svg' />
                Cancel anytime
              </div>
              <div class='lav-plan__option'>
                <img src='${settings.dir}/img/guarantee.svg' />
                30-Day Money-Back Guarantee
              </div>
            </div>
          </div>

          <div class='lav-feat__list'>
            <div class='lav-feat__item'>Access 1000s of AD-FREE yoga, meditation and movement classes</div>
            <div class='lav-feat__item'>Exclusive access to all new releases and premium content</div>
            <div class='lav-feat__item'>Access our complete collection of curated programs & challenges</div>
            <div class='lav-feat__item'>25% off livestream events</div>
            <div class='lav-feat__item'>Follow your favorite teachers</div>
            <div class='lav-feat__item'>Curate your own collection of favorite classes</div>
            <div class='lav-feat__item'>Access to our Mobile and TV app</div>
          </div>
        </div>
      </div>
    </div>

    <div class='lav-plan__currency lav-mob'>*All prices in USD</div>

    <button class='lav-plan__started lav-btn sfc-button lav-mob'>
      Get Started Now
    </button>

    <div class='lav-plan__options lav-mob'>
      <div class='lav-plan__option'>
        <img src='${settings.dir}/img/calendar-mob.svg' />
        Cancel anytime
      </div>
      <div class='lav-plan__option'>
        <img src='${settings.dir}/img/guarantee-mob.svg' />
        30-Day Money-Back Guarantee
      </div>
    </div>
  </div>
</section>

<section class='lav-feat'>
  <div class='lav-container lav-feat__container'>
    <div class='lav-feat__row'>
      <div class='lav-feat__list'>
        <div class='lav-feat__item'>
          Access 500+ yoga, meditation and movement classes from our extensive library
        </div>
        <div class='lav-feat__item'>
          Access 1st two classes released by new teachers to DYWM
        </div>
      </div>

      <div class='lav-feat__list'>
        <div class='lav-feat__item'>Access 1000s of AD-FREE yoga, meditation and movement classes</div>
        <div class='lav-feat__item'>Exclusive access to all new releases and premium content</div>
        <div class='lav-feat__item'>Access our complete collection of curated programs & challenges</div>
        <div class='lav-feat__item'>25% off livestream events</div>
        <div class='lav-feat__item'>Follow your favorite teachers</div>
        <div class='lav-feat__item'>Curate your own collection of favorite classes</div>
        <div class='lav-feat__item'>Access to our Mobile and TV app</div>
      </div>

      <div class='lav-feat__list'>
        <div class='lav-feat__item'>Access 1000s of AD-FREE yoga, meditation and movement classes</div>
        <div class='lav-feat__item'>Exclusive access to all new releases and premium content</div>
        <div class='lav-feat__item'>Access our complete collection of curated programs & challenges</div>
        <div class='lav-feat__item'>25% off livestream events</div>
        <div class='lav-feat__item'>Follow your favorite teachers</div>
        <div class='lav-feat__item'>Curate your own collection of favorite classes</div>
        <div class='lav-feat__item'>Access to our Mobile and TV app</div>
      </div>
    </div>
  </div>
</section>

<section class='lav-features lav-watch'>
  <div class='lav-container'>
    <div class='lav-features__plate'>
      <div class='lav-features__title'>Subscription features</div>

      <div class='lav-features__row'>
        <div class='lav-features__col'>
          <div class='lav-feature' style='background-image: url("${settings.dir}/img/feature-1.svg")'>
            <div class='lav-feature__title'>Unlimited access to 1000+ Ad-Free yoga, meditation and movement classes</div>
            <div class='lav-feature__caption'>You can enjoy one of the biggest collection of professional classes, including:</div>
            <ul class='lav-feature__list'>
              <li>400+ Vinyasa yoga classes</li>
              <li>350+ Hatha yoga classes</li>
              <li>250+ Gentle yoga classes</li>
              <li>170+ Yoga after workout classes</li>
              <li>100+ Yoga for back classes</li>
              <li>And much more!</li>
            </ul>
          </div>
        </div>
        <div class='lav-features__col'>
          <div class='lav-feature' style='background-image: url("${settings.dir}/img/feature-2.svg")'>
            <div class='lav-feature__title'>Watch classes  from your laptop, TV, phone or tablet</div>
            <div class='lav-feature__caption'>Take your yoga practice anywhere, anytime using our website or mobile app.</div>
          </div>

          <div class='lav-feature' style='background-image: url("${settings.dir}/img/feature-3.svg")'>
            <div class='lav-feature__title'>Access our complete collection of 30 curated programs & 50 challenges</div>
            <div class='lav-feature__caption'>Enhance your practice with our comprehensive collection of courses and special challenges.</div>
          </div>

          <div class='lav-feature' style='background-image: url("${settings.dir}/img/feature-4.svg")'>
            <div class='lav-feature__title'>Exclusive access to all new releases and premium content</div>
            <div class='lav-feature__caption'>Enjoy new classes and get 25% discount on livestream events.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class='lav-try lav-watch'>
  <div class='lav-container'>
    <div class='lav-try__plate'>
      <div class='lav-try__image'></div>

      <div class='lav-try__info'>
        <div class='lav-try__caption'>
          Not sure yet? 
        </div>
        <div class='lav-try__title'>Try Basic plan for free</div>
        <ul class='lav-try__list'>
          <li>Free forever</li>
          <li>Access to all basic yoga, meditation and movement classes from our extensive library</li>
          <li>Full access to the library of 1000+ Ad-Free yoga, meditation and movement classes</li>
          <li>Exclusive access to all new releases and premium content</li>
        </ul>
        <a href="#" class='lav-try__btn lav-btn sfc-button'>Start Basic Plan</a>
      </div>
    </div>
  </div>
</section>

<section class='lav-classes lav-watch'>
  <div class='lav-container'>
    <div class='lav-classes__title'>Explore 1000+ Yoga classes</div>

    <ul class='lav-classes__list lav-desk'>
      <li data-id='30'>Ashtanga Yoga</li>
      <li data-id='213'>Chair Yoga</li>
      <li data-id='31'>Gentle Yoga</li>
      <li data-id='32'>Guided Meditation</li>
      <li data-id='33'>Hatha Yoga</li>
      <li data-id='34'>Jivamukti</li>
      <li data-id='35'>Kundalini Yoga</li>
      <li data-id='36'>Mom and Baby Yoga</li>
      <li data-id='37'>Pilates</li>
      <li data-id='38'>Plus Size Yoga</li>
      <li data-id='39'>PNF</li>
      <li data-id='42'>Pranayama Yoga</li>
      <li data-id='126'>Prenatal/Postnatal Yoga</li>
      <li data-id='44'>Restorative Yoga</li>
      <li data-id='125'>Slow Flow</li>
      <li data-id='127'>Values-based Education</li>
      <li data-id='45'>Vinyasa/Power Yoga</li>
      <li data-id='46'>Yin and Yin/Yang Yoga</li>
      <li data-id='47'>Yoga at Work</li>
      <li data-id='49'>Yoga for Athletes</li>
      <li data-id='50'>Yoga for Runners</li>
      <li data-id='51'>Yoga for Seniors</li>
      <li data-id='53'>Yoga Therapy</li>
      <li data-id='54'>Yoga for Back Care</li>
      <li data-id='55'>Yoga for Kids</li>
    </ul>

    <ul class='lav-classes__list lav-mob'>
      <li data-id='30'>Ashtanga Yoga</li>
      <li data-id='213'>Chair Yoga</li>
      <li data-id='31'>Gentle Yoga</li>
      <li data-id='32'>Guided Meditation</li>
      <li data-id='36'>Mom and Baby Yoga</li>
      <li data-id='34'>Jivamukti</li>
      <li data-id='33'>Hatha Yoga</li>
      <li data-id='35'>Kundalini Yoga</li>
      <li data-id='37'>Pilates</li>
      <li data-id='38'>Plus Size Yoga</li>
      <li data-id='126'>Prenatal/Postnatal Yoga</li>
      <li data-id='39'>PNF</li>
      <li data-id='42'>Pranayama Yoga</li>
      <li data-id='44'>Restorative Yoga</li>
      <li data-id='125'>Slow Flow</li>
      <li data-id='127'>Values-based Education</li>
      <li data-id='46'>Yin and Yin/Yang Yoga</li>
      <li data-id='47'>Yoga at Work</li>
      <li data-id='45'>Vinyasa/Power Yoga</li>
      <li data-id='53'>Yoga Therapy</li>
      <li data-id='49'>Yoga for Athletes</li>
      <li data-id='50'>Yoga for Runners</li>
      <li data-id='51'>Yoga for Seniors</li>
      <li data-id='54'>Yoga for Back Care</li>
      <li data-id='55'>Yoga for Kids</li>
    </ul>

    <button class='lav-classes__toggle lav-btn lav-btn_trans sfc-button lav-mob'>
      Show More
    </button>
  </div>
</section>

<section class='lav-pers lav-watch'>
  <div class='lav-container'>
    <div class='lav-pers__title'>Count the ways you can <br/> personalize your practice</div>

    <ul class='lav-pers__list'>
      <li class='lav-pers__item'>
        <div class='lav-pers__item-num'>25+</div>
        <div class='lav-pers__item-title'>Styles</div>
        <div class='lav-pers__item-caption'>Keep your mind and body guessing or deepen your practice.</div>
      </li>

      <li class='lav-pers__item'>
        <div class='lav-pers__item-num'>20+</div>
        <div class='lav-pers__item-title'>Programs</div>
        <div class='lav-pers__item-caption'>Created for beginner, intermediate, and advanced practices.</div>
      </li>

      <li class='lav-pers__item'>
        <div class='lav-pers__item-num'>35+</div>
        <div class='lav-pers__item-title'>Challenges</div>
        <div class='lav-pers__item-caption'>Carefully designed series of classes that help you get healthier, stronger, and more flexible.</div>
      </li>

      <li class='lav-pers__item'>
        <div class='lav-pers__item-num'>90+</div>
        <div class='lav-pers__item-title'>Guided Meditations</div>
        <div class='lav-pers__item-caption'>Sleep better, build mindfulness, enhance performance or let go of anxiety.</div>
      </li>

      <li class='lav-pers__item'>
        <div class='lav-pers__item-num'>2-90</div>
        <div class='lav-pers__item-title'>Minute Classes</div>
        <div class='lav-pers__item-caption'>To get you on your mat with whatever time you have.</div>
      </li>
    </ul>
  </div>
</section>

<section class='lav-instructors lav-watch splide'>
  <div class='lav-container'>
    <div class='lav-instructors__head'>
      <div class='lav-instructors__title'>Our Instructors</div>

      <div class="splide__arrows">
        <button class="splide__arrow splide__arrow--prev">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" focusable="false"><path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path></svg>
        </button>
        <button class="splide__arrow splide__arrow--next">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" focusable="false"><path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path></svg>
        </button>
      </div>
    </div>

    <div class="splide__track">
      <div class='lav-instructors__list splide__list'></div>
    </div>

    <div class="splide__progress">
      <div class="splide__progressBar" />
    </div>
  </div>
</section>

`;

const instructorsArr = [
  {
    img: 'https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2023/02/DSC06112.jpg',
    name: 'Fiji McAlpine',
    link: '/yoga-classes?field_instructor_target_id=8',
    caption: 'Vinyasa, Power, Meditation, YTT',
  },
  {
    img: 'https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2018/06/satiya-channer.jpg',
    name: 'Satiya Channer',
    link: '/yoga-classes?field_instructor_target_id=123147',
    caption: 'Yin, Restorative, Hatha, Meditation',
  },
  {
    img: 'https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2023/02/David%20headshot%20cropped%20Jan-23.jpg',
    name: 'David Procyshyn',
    link: '/yoga-classes?field_instructor_target_id=4',
    caption: 'Hatha, Pain Care, Meditation, YTT',
  },
  {
    img: 'https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2023/02/tracy.jpg',
    name: 'Tracey Noseworthy',
    link: '/yoga-classes?field_instructor_target_id=7041',
    caption: 'Vinyasa, Power, Meditation, YTT',
  },
  {
    img: 'https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2022/10/DSC04949%20copy.jpg',
    name: 'Josh Chen',
    link: '/yoga-classes?field_instructor_target_id=313027',
    caption: 'Hatha, Yin, Meditation',
  },
  {
    img: 'https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2018/02/PROFILE_MELISSA%20web%20size.jpg',
    name: 'Melissa Krieger',
    link: '/yoga-classes?field_instructor_target_id=467',
    caption: 'Hatha, Slow Flow, Restorative',
  },
  {
    img: 'https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2023/02/DSC01881.jpg',
    name: 'Helen Camisa',
    link: '/yoga-classes?field_instructor_target_id=244583',
    caption: 'Hatha, Yin, Meditation',
  },
  {
    img: 'https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2023/02/DSC06138%20%282%29.jpg',
    name: 'Andrea Ting-Luz',
    link: '/yoga-classes?field_instructor_target_id=196672',
    caption: 'Vinyasa, Hatha, Yin',
  },
  {
    img: 'https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2020/04/Screenshot%202020-04-07%2013.11.01.jpg',
    name: 'Rachel Scott',
    link: '/yoga-classes?field_instructor_target_id=16854',
    caption: 'Vinyasa, Power, Hatha, YTT',
  },
  {
    img: 'https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2016/05/yoga%20profile%20picture.jpg',
    name: 'Crista Shillington',
    link: '/yoga-classes?field_instructor_target_id=133906',
    caption: 'Vinyasa, Power',
  },
  {
    img: 'https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2021/04/Doyoga.jpeg',
    name: 'Sarada Jagannath',
    link: '/yoga-classes?field_instructor_target_id=326548',
    caption: 'Hatha, Pranayama',
  },
  {
    img: 'https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2022/08/DSC01661-2_0.jpg',
    name: 'Araba Adjaye',
    link: '/yoga-classes?field_instructor_target_id=357388',
    caption: 'Hatha',
  },
  {
    img: 'https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2022/08/Tara%20Heal%20HEADSHOT%202021%20Photo-68.jpg',
    name: 'Tara Heal',
    link: '/yoga-classes?field_instructor_target_id=350658',
    caption: 'Vinyasa, Power, Meditation',
  },
  {
    img: 'https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2019/03/Photo%204.jpg',
    name: 'Guy Friswell',
    link: '/yoga-classes?field_instructor_target_id=266604',
    caption: 'Slow Flow, Hatha, Meditation',
  },
  {
    img: 'https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2023/02/unnamed%20%282%29.jpg',
    name: 'Jonni-Lyn Friel',
    link: '/yoga-classes?field_instructor_target_id=269801',
    caption: 'Jivamukti, Vinyasa, Meditation',
  },
  {
    img: 'https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2022/11/julia-web.jpg',
    name: 'Julia Crouch',
    link: '/yoga-classes?field_instructor_target_id=317249',
    caption: 'Pilates, Pre/Post Natal, Hatha',
  },
  {
    img: 'https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2018/06/sarah-jane-profile.jpg',
    name: 'Sarah Jane Steele',
    link: '/yoga-classes?field_instructor_target_id=90321',
    caption: 'Prenatal/Postnatal, Hatha, Yin, Restorative',
  },
  {
    img: 'https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2021/09/kathi.png',
    name: 'Kathi Ells',
    link: '/yoga-classes?field_instructor_target_id=218644',
    caption: 'Pilates',
  },
  {
    img: 'https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2018/08/nicky_jones.jpg',
    name: 'Nicky Jones',
    link: '/yoga-classes?field_instructor_target_id=4134',
    caption: 'Restorative, Therapy, Hatha',
  },
  {
    img: 'https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2017/04/sarah-holmes.jpg',
    name: 'Sarah Holmes de Castro',
    link: '/yoga-classes?field_instructor_target_id=189907',
    caption: 'Hatha, Restorative, Gentle',
  },
  {
    img: 'https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2014/03/ron_stewart_yoga_0_0.jpg',
    name: 'Ron Stewart',
    link: '/yoga-classes?field_instructor_target_id=15517',
    caption: 'Vinyasa, Power, Hatha',
  },
  {
    img: 'https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2021/09/kim_wilson.jpg',
    name: 'Kim Wilson',
    link: '/yoga-classes?field_instructor_target_id=877',
    caption: 'Pilates',
  },
  {
    img: 'https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2018/06/anastasia-thumb2.jpg',
    name: 'Anastasia Hangemanole',
    link: '/yoga-classes?field_instructor_target_id=134',
    caption: 'Yin, Hatha',
  },
  {
    img: 'https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2017/11/IMG_5004.jpg',
    name: 'Dawn Rabey',
    link: '/yoga-classes?field_instructor_target_id=15521',
    caption: 'Kundalini, Pranayama, Meditation',
  },
  {
    img: 'https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2015/04/Screen%20shot%202015-04-15%20at%2011.00.26%20AM.png',
    name: 'Tianne Allan',
    link: '/yoga-classes?field_instructor_target_id=834',
    caption: 'Restorative, Pain Care',
  },
  {
    img: 'https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2017/10/alyssa_jean.jpg',
    name: 'Alyssa Jean Klazek',
    link: '/yoga-classes?field_instructor_target_id=215411',
    caption: 'Yoga for Kids',
  },
  {
    img: 'https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2019/03/IMG_2223_RETOUCH_V2.jpg',
    name: 'Nyk Danu',
    link: '/yoga-classes?field_instructor_target_id=266789',
    caption: 'Yin, Meditation',
  },
  {
    img: 'https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2017/12/Jeff%20with%20son.jpg',
    name: 'Jeff Lichty',
    link: '/yoga-classes?field_instructor_target_id=224862',
    caption: 'Ashtanga',
  },
  {
    img: 'https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2021/09/michelle_rubin.jpg',
    name: 'Michelle Rubin',
    link: '/yoga-classes?field_instructor_target_id=50832',
    caption: 'Hatha, Gentle, Seniors',
  },
  {
    img: 'https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2019/04/jennylisa%20%282%29.jpg',
    name: 'Jennifer Piercy',
    link: '/yoga-meditation?field_instructor_target_id=253426',
    caption: 'Meditation',
  },
  {
    img: 'https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2018/09/Screen%20Shot%202018-09-12%20at%203.32.21%20PM.png',
    name: 'Peter Renner',
    link: '/yoga-meditation?field_instructor_target_id=189052',
    caption: 'Meditation',
  },
  {
    img: 'https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2021/09/erica_fitch.jpg',
    name: 'Erica Fritch',
    link: '/yoga-classes?field_instructor_target_id=8733',
    caption: 'Hatha, Therapy, Gentle',
  },
  {
    img: 'https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2014/03/Shivani_1.jpg',
    name: 'Shivani Wells',
    link: '/yoga-classes?field_instructor_target_id=1047',
    caption: 'Vinyasa/Power, Hatha',
  },
  {
    img: 'https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2014/03/jenni-ashtanga-yoga_1.jpg',
    name: 'Jenni Pritchard',
    link: '/yoga-classes?field_instructor_target_id=28537',
    caption: 'Ashtanga',
  },
];

if (
  document.querySelector(
    '.menu--account [href="/yogi/login?destination=/become-a-subscriber"]'
  ) ||
  document.querySelector('.menu--account img.c-avatar')
) {
  init();
} else {
  let initInterval = setInterval(() => {
    if (
      document.querySelector(
        '.menu--account [href="/yogi/login?destination=/become-a-subscriber"]'
      ) ||
      document.querySelector('.menu--account img.c-avatar')
    ) {
      clearInterval(initInterval);
      init();
    }
  }, 100);
}

function init() {
  gaEvent('loaded');
  console.log('init');

  document
    .querySelector('#main-content')
    .insertAdjacentHTML('afterbegin', newLayout);

  if (
    !document.querySelector(
      '.menu--account [href="/yogi/login?destination=/become-a-subscriber"]'
    )
  ) {
    for (let item of [
      '.lav-jumb__try',
      '.lav-try',
      '.lav-jumb_no-auth',
      '.lav-feat',
    ]) {
      if (document.querySelector(item)) {
        document.querySelector(item).classList.add('lav-hide');
      }
    }
  } else {
    for (let item of ['.lav-jumb_auth', '.lav-features', '.lav-try']) {
      document.body.classList.add('lav-auth');
      if (document.querySelector(item)) {
        document.querySelector(item).classList.add('lav-hide');
      }
    }
  }

  document.querySelector('.lav-try__image').style.backgroundImage = `url(
    ${document.querySelector('.sfc-becomeASubscriber__bannerImg').src}
  )`;

  document
    .querySelector(
      '.sfc-becomeASubscriber__section + section + section + section'
    )
    .classList.add('lav-watch', 'lav-journey');

  document
    .querySelector('[data-sfc-ids="apps_promo"]')
    .classList.add('lav-watch', 'lav-app');

  document
    .querySelector('.lav-try__btn')
    .addEventListener('click', function (e) {
      e.preventDefault();
      gaEvent('Click on Start Basic plan button');
      document.querySelector('[href="/yogi/register"]').click();
    });

  initJumb();
  initClasses();
  initInstructions();
  observerView();

  const waitingSplide = setInterval(() => {
    if (typeof Splide === 'function') {
      clearInterval(waitingSplide);
      document
        .querySelector('.lav-instructors .splide__arrow--next')
        .addEventListener('click', function () {
          gaEvent('Click navigation button in our instructors', 'Right');
        });

      document
        .querySelector('.lav-instructors .splide__arrow--prev')
        .addEventListener('click', function () {
          gaEvent('Click navigation button in our instructors', 'Left');
        });

      setTimeout(() => {
        document
          .querySelector('.lav-journey .splide__arrow--next')
          .addEventListener('click', function () {
            gaEvent(
              'Click navigation button in Your journey to health and wellness start here',
              'Right'
            );
          });

        document
          .querySelector('.lav-journey .splide__arrow--prev')
          .addEventListener('click', function () {
            gaEvent(
              'Click navigation button in Your journey to health and wellness start here',
              'Left'
            );
          });
      }, 1000);
    }
  }, 50);

  document
    .querySelector('.sfc-appsPromo__appIcons a:first-child')
    .addEventListener('click', function () {
      gaEvent(
        'Click on Apps in  For every space, at any pace section',
        'App Store'
      );
    });

  document
    .querySelector('.sfc-appsPromo__appIcons a:nth-child(2)')
    .addEventListener('click', function () {
      gaEvent(
        'Click on Apps in  For every space, at any pace section',
        'Google Play'
      );
    });

  document
    .querySelector('.sfc-appsPromo__appIcons a:nth-child(3)')
    .addEventListener('click', function () {
      gaEvent(
        'Click on Apps in  For every space, at any pace section',
        'Amazon Fire'
      );
    });

  document
    .querySelector('.sfc-appsPromo__appIcons a:nth-child(4)')
    .addEventListener('click', function () {
      gaEvent('Click on Apps in  For every space, at any pace section', 'Roku');
    });

  for (let item of document.querySelectorAll('.lav-plan .lav-plan__option')) {
    item.addEventListener('click', function () {
      let caption = 'Click on Cancel anytime element';

      if (!item.innerText.toLowerCase().includes('cancel')) {
        caption = 'Click on 30-Day Money-Back Guarantee element';
      }
      gaEvent(
        caption,
        item.closest('.lav-plan').querySelector('.lav-plan__btn-month')
          ? '1 month'
          : item.closest('.lav-plan').querySelector('.lav-plan__btn-try')
          ? 'Free'
          : '12 months'
      );
    });
  }

  for (let item of document.querySelectorAll(
    '.lav-plan__options.lav-mob .lav-plan__option'
  )) {
    item.addEventListener('click', function () {
      let caption = 'Click on Cancel anytime element';

      if (!item.innerText.toLowerCase().includes('cancel')) {
        caption = 'Click on 30-Day Money-Back Guarantee element';
      }
      gaEvent(caption);
    });
  }
}

function initJumb() {
  for (let el of document.querySelectorAll('.lav-plan__btn-try')) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      gaEvent('Click on Get started now button in Basic access');
      document.querySelector('[href="/yogi/register"]').click();
    });
  }

  for (let el of document.querySelectorAll('.lav-plan__btn-year')) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      gaEvent('Click on Get started now button in Unlimited access 12 month');
      document.querySelector('[href="/express-checkout/55"]').click();
    });
  }

  for (let el of document.querySelectorAll('.lav-plan__btn-month')) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      gaEvent('Click on Get started now button in Unlimited access 1 month');
      document.querySelector('[href="/express-checkout/54"]').click();
    });
  }

  document
    .querySelector('.lav-jumb__try-inner')
    .addEventListener('click', function (e) {
      e.preventDefault();
      gaEvent('Click Not sure yet? Try Basic plan for free button');
      document.querySelector('[href="/yogi/register"]').click();
    });

  document
    .querySelector('.lav-plan__started')
    .addEventListener('click', function (e) {
      e.preventDefault();
      if (document.querySelector('.lav-plan.active .lav-plan__btn-year')) {
        gaEvent('Click on Get Started now button', '12 months');
        document.querySelector('[href="/express-checkout/55"]').click();
      } else {
        gaEvent('Click on Get Started now button', '1 month');
        document.querySelector('[href="/express-checkout/54"]').click();
      }
    });

  for (let el of document.querySelectorAll(
    'body:not(.lav-auth) .lav-jumb__plan'
  )) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      if (window.innerWidth > 768) return false;

      if (document.querySelector('.lav-jumb__plan.active')) {
        document
          .querySelector('.lav-jumb__plan.active')
          .classList.remove('active');
      }

      gaEvent(
        'Click on Choose your plan radiobutton',
        el.querySelector('.lav-plan__btn-year') ? '12 months' : '1 month'
      );

      el.classList.add('active');
    });
  }
}

function initClasses() {
  for (let el of document.querySelectorAll('.lav-classes__list li')) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      const id = el.dataset.id;
      gaEvent('Click on yoga class button', el.innerText.trim());

      location.href = `https://www.doyogawithme.com/yoga-classes?field_instructor_target_id=&style[${id}]=${id}&field_subscribers_only_value=All&sort_by=created`;
    });
  }

  document
    .querySelector('.lav-classes__toggle')
    .addEventListener('click', function (e) {
      e.preventDefault();
      gaEvent('Click on Show now button');
      this.remove();
      document
        .querySelector('.lav-classes__list.lav-mob')
        .classList.add('active');
    });
}

function initInstructions() {
  let parentEl = document.querySelector('.lav-instructors__list');

  for (let person of instructorsArr) {
    const slide = `
      <a href='${person.link}' class='lav-instr splide__slide'>
        <div class='lav-instr__img' style='background-image: url("${person.img}")'></div>
        <div class='lav-instr__info'>
          <div class='lav-instr__name'>${person.name}</div>
          <div class='lav-instr__caption'>${person.caption}</div>
        </div>
      </a>
    `;

    parentEl.insertAdjacentHTML('beforeend', slide);
  }

  const waitingSplide = setInterval(() => {
    if (typeof Splide === 'function') {
      clearInterval(waitingSplide);

      const splide = new Splide('.splide', {
        autoWidth: true,
        pagination: false,
        gap: '1em',
      });

      splide.on('mounted', function () {
        splide.root.querySelector('.splide__progress').style.display = 'block';
        var progressBar = splide.root.querySelector('.splide__progressBar');

        console.log(progressBar);

        if (progressBar) {
          var fillProgressBar = function fillProgressBar() {
            var end = splide.Components.Controller.getEnd() + 1;
            var rate = Math.min((splide.index + 1) / end, 1);
            progressBar.style.width = String(100 * rate) + '%';
          };

          fillProgressBar();
          splide.on('mounted move', fillProgressBar);
        }
        // $sfc.find('.sfc-slider__progress').show();
      });

      splide.mount();
    }
  });
}

function observerView() {
  const observerOptions = {
    root: null,
    threshold: 0,
    rootMargin: '-40%',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains('lav-features')) {
          isElementInViewport(
            entry.target,
            'Visibility Subscription features section'
          );
        }

        if (entry.target.classList.contains('lav-try')) {
          isElementInViewport(
            entry.target,
            'Visibility Try Basic plan for free section'
          );
        }

        if (entry.target.classList.contains('lav-classes')) {
          isElementInViewport(
            entry.target,
            'Visibility Explore 1000+ Yoga classes section'
          );
        }

        if (entry.target.classList.contains('lav-pers')) {
          isElementInViewport(
            entry.target,
            'Visibility Count the ways you can personalize your practice section'
          );
        }

        if (entry.target.classList.contains('lav-instructors')) {
          isElementInViewport(
            entry.target,
            'Visibility Our instructors section'
          );
        }

        if (entry.target.classList.contains('lav-journey')) {
          isElementInViewport(
            entry.target,
            'Visibility Your journey to health and wellness start here section'
          );
        }

        if (entry.target.classList.contains('lav-app')) {
          isElementInViewport(
            entry.target,
            'Visibility For every space, at any pace section'
          );
        }
      }
    });
  }, observerOptions);

  for (let el of Array.from(document.querySelectorAll('.lav-watch'))) {
    observer.observe(el);
  }

  function isElementInViewport(el, event, timeout = 2) {
    setTimeout(() => {
      const rect = el.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      if (
        rect.top + rect.height * 0.3 < windowHeight &&
        rect.bottom > rect.height * 0.3
      ) {
        observer.unobserve(el);
        if (!el.classList.contains('in-view')) {
          gaEvent(event);
          el.classList.add('in-view');
        }
      }
    }, timeout * 1000);
  }
}
