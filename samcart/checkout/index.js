console.log('initExp');

/********* Settings **********/
const settings = {
  dir: 'https://flopsi69.github.io/crs/samcart/checkout',
  hj: false,
  observe: false,
};

//Hotjar
if (settings.hj) {
  try {
    (function (h, o, t, j, a, r) {
      h.hj =
        h.hj ||
        function () {
          (h.hj.q = h.hj.q || []).push(arguments);
        };
      h._hjSettings = { hjid: 410340, hjsv: 6 };
      a = o.getElementsByTagName('head')[0];
      r = o.createElement('script');
      r.async = 1;
      r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
      a.appendChild(r);
    })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
    window.hj =
      window.hj ||
      function () {
        (hj.q = hj.q || []).push(arguments);
      };
    hj('trigger', 'also_like');
  } catch (e) {}
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
  } catch (e) {}
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
  @font-face {
    font-family: "Gilroy";
    src: url("${settings.dir}/Gilroy/Gilroy-Regular.woff") format("woff"),
      url("${settings.dir}/Gilroy/Gilroy-Regular.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Gilroy";
    src: url("${settings.dir}/Gilroy/Gilroy-Bold.woff") format("woff"),
      url("${settings.dir}/Gilroy/Gilroy-Bold.ttf") format("truetype");
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: "Gilroy";
    src: url("${settings.dir}/Gilroy/Gilroy-Black.woff") format("woff"),
      url("${settings.dir}/Gilroy/Gilroy-Black.ttf") format("truetype");
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: "Gilroy";
    src: url("${settings.dir}/Gilroy/Gilroy-SemiBold.woff") format("woff"),
      url("${settings.dir}/Gilroy/Gilroy-SemiBold.ttf") format("truetype");
    font-weight: 600;
    font-style: normal;
  }
  .lav-wrap + section {
    display: none;
  }
  .tpl-6 {
    padding-bottom: 0!important;
  }
  .row.section, .tpl-6__content {
    display: none;
  }
  .lav-white-label {
    background: #FFFFFF;
    border-radius: 10px;
    padding: 15px 30px;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: #183B56;
  }
  header {
    display: none;
  }
  body {
    padding-top: 80px;
    background: #F7FAFD;
    font-family: "Gilroy";
  }
  .lav-wrap {
    background: #F7FAFD;
  }
  .lav-container {
    padding: 0 15px;
    max-width: 1140px;
    margin: auto;
  }
  .lav-btn {
    border: none;
    cursor: pointer;
    background: none;
    outline: none;
    padding: 10px 20px;
  }
  .lav-btn_trans {
    border: 2px solid #183B56;
    border-radius: 8px;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.01em;
    color: #183B56;
    transition: 0.3s;
  }
  .lav-btn_trans:hover {
    color: #fff;
    background: #183B56;
  }
  .lav-btn_blue {
    background: #183B56;
    border-radius: 10px;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: -0.01em;
    color: #FFFFFF;
    padding: 18px 40px;
    transition: 0.3s;
  }
  .lav-btn_blue:hover {
    background-color: #07528c;
  }
  .lav-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    padding: 17px 0;
    background: #fff;
    border-bottom: 1px solid  rgb(90 115 134 / 20%);
    color: #183B56;
  }
  .lav-header__inner {
    padding-left: 50px;
    padding-right: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .lav-header__btn {
    transition: 0.3s;
    cursor: pointer;
    border-radius: 50px;
    height: 40px;
  }
  .lav-header__btn img {
    max-height: 100%;
  }
  .lav-header__apple {
    border: 1px solid black;
  }
  .lav-header__google {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
  }
  .lav-header__google img {
    padding: 5px 36px;
  }
  .lav-header__btn_hidden {
    display: none;
  }
  .lav-header__btn:hover {
    opacity: 0.5;
  }
  .lav-header__btn img {
    max-width: 147px;
    cursor: pointer;
  }
  .lav-header__btn + .lav-header__btn {
    margin-left: 13px;
  }
  .lav-header__logo {
    line-height: 0;
  }
  .lav-header__logo img {
    max-width: 145px;
  }
  .lav-header__info {
    display: flex;
    align-items: center;
  }
  .lav-header__descr {
    font-size: 12px;
    line-height: 22px;
    letter-spacing: 0.05em;
    margin-right: 30px;
  }
  .lav-header__card {
    border-radius: 50px;
    background: #e76243;
  }
  .lav-price_old {
    text-decoration: line-through;
  }
  .lav-mark {
    font-weight: 900;
  }
  .lav-intro {
    text-align: center;
    color: #183B56;
    background: url('${settings.dir}/img/intro-lines.png') center no-repeat;
    background-size: 100% auto;
    padding: 40px 0 100px;
  }
  .lav-intro__congrate {
    font-weight: 600;
    font-size: 40px;
    line-height: 48px;
    color: #183B56;
  }
  .lav-intro__mark {
    position: relative;
    display: inline-block;
    font-weight: 900;
    font-size: 70px;
    line-height: 87px;
  }
  .lav-intro__mark:before {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(140%, -50%);
    background: url('${settings.dir}/img/icon-confiti.png') center no-repeat;
    background-size: contain;
    width: 65px;
    height: 65px;
  }
  .lav-intro__caption {
    margin-top: 8px;
    font-size: 20px;
    line-height: 30px;
    color: #5A7386;
  }
  .lav-intro__image {
    line-height: 0;
  }
  .lav-tick {
    position: relative;
    padding-left: 45px;
  }
  .lav-tick:before {
    content: '';
    position: absolute;
    top: -1px;
    left: 0;
    width: 29px;
    height: 29px;
    background: url('${settings.dir}/img/icon-tick.svg') center no-repeat;
    background-size: contain;
  }
  .lav-dis {
    position: relative;
    background: #fff url('${settings.dir}/img/dis-dots.svg') left 30px no-repeat;
    padding-top: 56px;
    padding-bottom: 50px;
    text-align: center;
    color: #183B56;
  }
  .lav-dis:after {
    content: '';
    position: absolute;
    right: 0;
    bottom: -40px;
    background: url('${settings.dir}/img/lav-dis-after.svg') center no-repeat;
    background-size: contain;
    width: 300px;
    height: 110px;
  }
  .lav-dis__caption {
    margin-bottom: 15px;
    font-weight: 400;
    font-size: 30px;
    line-height: 1.2;
  }
  .lav-dis__title {
    font-size: 40px;
    line-height: 1.22;
  }
  .lav-dis__title span {
    font-weight: 700;
  }
  .lav-dis__list {
    display: flex;
    justify-content: space-between;
    margin: 75px -15px 0;
  }
  .lav-dis__col {
    padding: 0 15px;
    text-align: left;
    max-width: 370px;
  }
  .lav-dis__col:first-child {
    max-width: 340px;
  }
  .lav-dis__col:last-child {
    max-width: 300px;
  }
  .lav-dis__item {
    position: relative;
    font-weight: 400;
    font-size: 18px;
    line-height: 29px;
    color: #5F7384;
  }
  .lav-dis__item + .lav-dis__item {
    margin-top: 29px;
  }
  .lav-gifts {
    padding: 120px 0 110px;
    color: #183B56;
  }
  .lav-gifts__title {
    text-align: center;
    font-size: 80px;
    line-height: 94px;
    text-align: center;
  }
  .lav-gifts__title span {
    font-weight: 900;
  }
  .lav-gifts__caption {
    text-align: center;
    margin-top: 20px;
    font-size: 24px;
    line-height: 38px;
    color: #5A7386;
  }
  .lav-gifts__img {
    background: #FFFFFF;
    box-shadow: 0px 0.857534px 2.5726px rgba(24, 59, 86, 0.04), 0px 10.2904px 42.8767px rgba(63, 87, 180, 0.09);
    border-radius: 40px;
    padding: 65px;
    margin: 40px 0 50px;
    text-align: center;
  }
  .lav-gifts__img img {
    max-width: 733px;
    width: 100%;
  }
  .lav-master {
    text-align: center;
  }
  .lav-master__title {
    font-weight: 900;
    font-size: 50px;
    line-height: 62px;
    text-align: center;
  }
  .lav-master__title span {
    font-weight: 400;
  }
  .lav-master__list {
    margin-top: 40px;
    display: flex;
    margin-left: -15px;
    margin-right: -15px;
    font-size: 18px;
    line-height: 27px;
    color: #5F7384;
    text-align: left;
  }
  .lav-master__col {
    padding-left: 15px;
    padding-right: 15px;
  }
  .lav-master__item + .lav-master__item {
    margin-top: 30px;
  }
  .lav-master__label {
    margin: 30px auto 40px;
    display: inline-block;
  }
  .lav-gifts__btn-wrap {
    text-align: center;
  }
  .lav-grid {
    position: relative;
    z-index: 1;
    color: #183B56;
    padding-bottom: 110px;
  }
  .lav-grid:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    transform: translateY(30%);
    background: url('${settings.dir}/img/lav-grid-after.svg') center no-repeat;
    background-size: contain;
    width: 215px;
    height: 131px;
  }
  .lav-grid__row {
    display: flex;
    justify-content: space-between;
    margin-left: -15px;
    margin-right: -15px;
  }
  .lav-grid__row:nth-child(even) {
    flex-flow: row-reverse;
  }
  .lav-grid__row + .lav-grid__row {
    margin-top: 100px;
  }
  .lav-grid__info {
    max-width: 575px;
    padding: 0 15px;
  }
  .lav-grid__image {
    line-height: 0;
    padding: 0 15px;
  }
  .lav-grid__title {
    font-weight: 900;
    font-size: 36px;
    line-height: 45px;
    margin-bottom: 22px;
  }
  .lav-grid__title span {
    font-weight: 400;
  }
  .lav-grid__btn {
    margin-top: 20px;
  }
  .lav-grid__descr {
    font-weight: 400;
    font-size: 18px;
    line-height: 34px;
    color: #5A7386;
  }
  .lav-grid__descr + .lav-grid__descr {
    margin-top: 12px;
  }
  .lav-grid__note {
    display: inline-block;
    margin-top: 20px;
  }
  .lav-grid__note span {
    text-decoration: line-through;
    font-weight: 400;
  }
  .lav-grid__btn-wrap {
    margin-top: 40px;
    text-align: center;
  }
  .lav-grid__btn-wrap .lav-grid__btn {
    margin-top: 0;
  }
  .lav-total {
    position: relative;
    color: #183B56;
    padding: 75px 0;
    background: #fff;
    text-align: center;
  }
  .lav-total:after {
    content: '';
    position: absolute;
    right: 0;
    bottom: -40px;
    background:  url('${settings.dir}/img/lav-dis-after.svg') center no-repeat;
    background-size: contain;
    width: 300px;
    height: 110px;
  }
  .lav-total__title {
    font-weight: 900;
    font-size: 80px;
    line-height: 100px;
    text-align: center;
  }
  .lav-total__image {
    margin-bottom: 20px;
    line-height: 0;
  }
  .lav-total__subtitle {
    font-weight: 600;
    font-size: 50px;
    line-height: 60px;
    margin-bottom: 22px;
  }
  .lav-total__caption {
    font-weight: 400;
    font-size: 24px;
    line-height: 38px;
    color: #5A7386;
  }
  .lav-total__chat {
    line-height: 0;
    margin-top: 50px;
    margin-bottom: 15px;
  }
  .lav-faq {
    color: #183B56;
    padding: 60px 0 100px;
    background: #F7FAFD;
  }
  .lav-faq__title {
    font-weight: 900;
    font-size: 80px;
    line-height: 100px;
    text-align: center;
  }
  .lav-faq__btn-wrap {
    text-align: center;
    margin-top: 40px;
  }
  .lav-faq__list {
    margin-top: 50px;
    max-width: 730px;
    margin-left: auto;
    margin-right: auto;
  }
  .lav-faq__item {
    background: #FFFFFF;
    box-shadow: 0px 0.93065px 2.79195px rgba(24, 59, 86, 0.04), 0px 11.1678px 46.5325px rgba(63, 87, 180, 0.09);
    border-radius: 10px;
    padding: 25px 30px;
    cursor: pointer;
  }
  .lav-faq__item + .lav-faq__item {
    margin-top: 20px;
  }
  .lav-faq__head {
    position: relative;
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    padding-right: 25px;
  }
  .lav-faq__body {
    display: none;
    padding-top: 15px;
    font-size: 16px;
    line-height: 28px;
    color: #5A7386;
  }
  .lav-faq__item_active .lav-faq__body {
    display: block;
  }
  .lav-faq__head:before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: -5px;
    width: 18px;
    height: 18px;
    background: url('${settings.dir}/img/faq-icon.svg') center no-repeat;
    background-size: contain;
    transition: 0.3s;
  }
  .lav-faq__item_active .lav-faq__head:before {
    transform: translateY(-50%) rotate(45deg);
  }
  .lav-footer {
    background: #232323;
  }
  .lav-mob {
    display: none;
  }
  .tpl-2__footer {
    padding: 33px 0;
    font-size: 12px;
    background-color: #173145;
    color: #fff;
  }
  .lav-plans {
    background: #fff url('${settings.dir}/img/plans-bg.png') 0 15% no-repeat;
    background-size: 100% auto;
    padding-top: 70px;
    padding-bottom: 75px;
  }
  .lav-plans__title {
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    text-align: center;
    color: #172F44;
    margin-bottom: 60px;
  }
  .lav-plans__title span {
    font-weight: 700;
  }
  .lav-plans__row {
    display: flex;
    justify-content: center;
  }
  .lav-plan + .lav-plan {
    margin-left: 60px;
  }
  .lav-plan {
    max-width: 380px;
    color: #172F44;
  }
  .lav-plan__inner {
    background: #FFFFFF;
    box-shadow: 0px 0.857534px 2.5726px rgba(24, 59, 86, 0.04), 0px 10.2904px 42.8767px rgba(63, 87, 180, 0.09);
    border-radius: 40px;
    padding: 32px 20px;
    text-align: center;
    margin-bottom: 30px;
    cursor: pointer;
    transition: 0.3s;
    border: 1px solid transparent;
  }
  .lav-plan_active {
    transform: scale(1.05);
    border-color: #1C80E2;
  }
  .lav-plan__title {
    font-weight: 800;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-top: 20px;
  }
  .lav-plan__price {
    margin-top: 12px;
    font-weight: 700;
    font-size: 48px;
    line-height: 59px;
    text-transform: uppercase;
    color: #00A39E;
  }
  .lav-plan__price span {
    color: #172F44;
    font-size: 16px;
  }
  .lav-plan__caption {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #5A7386;
  }
  .lav-plan__text {
    font-family: "Roboto";
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #172F44;
    margin-bottom: 18px;
    margin-top: 18px;
  }
  .lav-plan__btn-wrap {}

  .lav-plan__btn {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #00A39E;
    width: 100%;
    padding: 16px;
    border: 2px solid #00A39E;
    border-radius: 10px;
    transition: 0.3s;
    cursor: pointer;
  }
  .lav-plan__btn:hover {
    opacity: 0.7;
  }
  .lav-plan__btn_active {
    color: #fff;
    background: linear-gradient(91.61deg, #49D5D4 0%, #1C7FE1 38%);
    border-color: #46cbd6;
  }
  .lav-plan__lines {
    font-family: 'Roboto';
    font-size: 16px;
    line-height: 24px;
    color: #172F44;
  }
  .lav-plan__info {
    padding: 0 34px;
  }
  .lav-plan__line span {
    font-weight: 500;
  }
  .lav-plan__line + .lav-plan__line {
    margin-top: 7px;
  }
  .lav-plan__list-wrap {
    margin-top: 10px;
  }
  .lav-plan__list-title {
    font-family: 'Roboto';
    font-size: 16px;
    line-height: 24px;
    color: #172F44;
    margin-bottom: 14px;
    padding-bottom: 14px;
    border-bottom: 1px solid #E5E5E5;
    font-weight: 500;
  }
  .lav-plan__list-item {
    position: relative;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #212529;
    padding-left: 20px;
  }
  .lav-plan__list-item-last {
    padding: 0;
  }
  .lav-plan__list-item-last:before {
    display: none;
  }
  .lav-plan__list-item:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background: url(${settings.dir}/img/icon-check.svg);
    width: 12px;
    height: 12px;
    background-size: contain;
  }
  .lav-plan__list-item + .lav-plan__list-item {
    margin-top: 15px;
  }
  .lav-plan {}
  @media (max-width: 1000px) {
    .lav-header__inner {
      justify-content: center;
    }
    .lav-plans {
      background-image: none;
    }
    .lav-plans__row {
      display: block;
    }
    .lav-plans__title {
      font-size: 26px;
      line-height: 35px;
      margin-bottom: 50px;
    }
    .lav-plan_active {
      transform: scale(1.01);
    }
    .lav-plan__info {
      padding: 0 20px;
    }
    .lav-plans__title br {
      display: none;
    }
    .lav-plan {
      max-width: 100%;
    }
    .lav-plan + .lav-plan {
      margin-left: 0;
      margin-top: 60px;
    }
    .lav-total:after, .lav-dis:after {
      display: none;
    }
    .lav-desk {
      display: none;
    }
    .lav-mob {
      display: block;
    }
    .lav-intro {
      padding-top: 40px;
      padding-bottom: 80px;
      background: url(${settings.dir}/img/intro-lines-mob.png) center no-repeat;
      background-size: 100% auto;
    }
    .lav-intro__congrate {
      font-size: 24px;
      line-height: 29px;
    }
    .lav-intro__mark {
      font-size: 45px;
      line-height: 56px;
    }
    .lav-intro__mark:before {
      width: 26px;
      height: 26px;
      right: 0;
      top: -3.5px;
      transform: translateY(-100%);
    }
    .lav-intro__caption {
      margin-top: 20px;
      font-size: 14px;
      line-height: 20px;
    }
    .lav-intro__caption br {
      display: none;
    }
    .lav-intro__image {
      margin-top: 20px;
      margin-bottom: 10px;
    }
    .lav-container {
      max-width: 500px;
    }
    .lav-dis__caption {
      font-weight: 700;
      font-size: 26px;
      line-height: 1.2;
      margin-bottom: 20px;
    }
    .lav-dis {
      padding: 30px 0 40px;
    }
    .lav-dis__title {
      font-size: 18px;
      line-height: 122.11%;
    }
    .lav-dis__title span {
      display: block;
      font-weibht: 900;
    }
    .lav-dis__list {
      display: block;
      margin-top: 40px;
    }
    .lav-dis__col {
      max-width: 100%!important;
    }
    .lav-dis__col + .lav-dis__col {
      margin-top: 20px;
    }
    .lav-dis__item + .lav-dis__item {
      margin-top: 20px;
    }
    .lav-dis__item {
      font-size: 14px;
      line-height: 17px;
    }
    .lav-tick {
      padding-left: 25px;
    }
    .lav-tick:before {
      width: 15px;
      height: 15px;
      top: 0;
    }
    .lav-gifts {
      padding-top: 100px;
      padding-bottom: 80px;
    }
    .lav-gifts__title {
      font-size: 36px;
      line-height: 45px;
      font-weight: 900;
    }
    .lav-gifts__caption {
      font-size: 14px;
      line-height: 20px;
    }
    .lav-gifts__img {
      margin-bottom: 40px;
      padding: 20px 50px;
    }
    .lav-master__title {
      font-weight: 700;
      font-size: 26px;
      line-height: 1.2;
    }
    .lav-master__list {
      margin-top: 30px;
      display: block;
      font-size: 14px;
      line-height: 20px;
    }
    .lav-master__item + .lav-master__item {
      margin-top: 20px;
    }
    .lav-master__col + .lav-master__col {
      margin-top: 20px;
    }
    .lav-master__label {
      margin-bottom: 30px;
    }
    .lav-white-label {
      font-size: 14px;
      line-height: 17px
    }
    .lav-grid {
      text-align: center;
    }
    .lav-grid__row {
      flex-flow: column-reverse;
    }
    .lav-grid__row:nth-child(even) {
      flex-flow: column-reverse;
    }
    .lav-grid__image {
      margin-bottom: 15px;
    }
    .lav-grid__info {
      max-width: 100%;
    }
    .lav-grid__note, .lav-grid__btn {
      margin-top: 30px;
    }
    .lav-grid__title {
      font-weight: 700;
      font-size: 26px;
      line-height: 31px;
      margin-bottom: 20px;
    }
    .lav-grid__descr {
      font-size: 14px;
      line-height: 20px;
    }
    .lav-grid__row + .lav-grid__row {
      margin-top: 80px;
    }
    .lav-grid__row:nth-child(8) .lav-grid__image img {
      padding-left: 30px;
    }
    .lav-grid__btn-wrap {
      margin-top: 30px;
    }
    .lav-total {
      padding: 40px 0;
    }
    .lav-total__title {
      font-size: 36px;
      line-height: 45px;
    }
    .lav-total__image {
      margin-top: 10px;
      margin-bottom: 45px;
    }
    .lav-total__subtitle {
      font-size: 26px;
      line-height: 31px;
      font-weight: 700;
      margin-bottom: 20px;
    }
    .lav-total__caption {
      font-size: 14px;
      line-height: 20px;
    }
    .lav-total__chat {
      margin-top: 15px;
      margin-bottom: 20px;
    }
    .lav-faq__title {
      font-size: 36px;
      line-height: 45px;
    }
    .lav-faq__list {
      margin-top: 30px;
    }
    .lav-faq__head {
      font-size: 16px;
      line-height: 19px;
    }
    .lav-faq__item {
      padding: 20px 28px;
    }
    .lav-faq__body {
      font-size: 14px;
      line-height: 23px;
    }
    .lav-faq {
      padding-top: 80px;
      padding-bottom: 60px;
    }
    .lav-header__top {
      text-align: center;
      padding: 9px;
      border-bottom: 1px solid rgb(90 115 134 / 20%);
    }
    .lav-header__top img{
      max-width: 72px;
    }
    .lav-header {
      padding: 0;
    }
    .lav-header__inner {
      padding: 10px;
    }
    .lav-header__descr {
      letter-spacing: 0;
      font-size: 10px;
      line-height: 13px;
      width: 158px;
      padding-right: 6px;
      margin-right: 5px;
      border-right: 1px dashed rgb(90 115 134 / 30%);
    }
    .lav-header__price-new {
      font-weight: 900;
      font-size: 10px;
      line-height: 13px;
    }
    .lav-header__price-old {
      text-decoration: line-through;
      font-size: 10px;
      line-height: 13px;
    }
    .lav-header__buttons {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-left: 7.5px;
      margin-right: -2.5px;
      max-width: 150px;
    }
    width: 100%;
    text-align: center;
    .lav-header__info {
      min-width: 0;
      justify-content: space-between;
    }
    .lav-header__btn img {
      max-width: 70px;
      height: 20px;
    }
    .lav-header__btn {
      margin: 1px 2.5px;
      text-align: center;
      flex-grow: 1;
    }
    .lav-header__btn + .lav-header__btn {
      margin: 1px 2.5px;
    }
  }
`;

const stylesCheckout = `
  @font-face {
    font-family: "Gilroy";
    src: url("${settings.dir}/Gilroy/Gilroy-Regular.woff") format("woff"),
      url("${settings.dir}/Gilroy/Gilroy-Regular.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Gilroy";
    src: url("${settings.dir}/Gilroy/Gilroy-Bold.woff") format("woff"),
      url("${settings.dir}/Gilroy/Gilroy-Bold.ttf") format("truetype");
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: "Gilroy";
    src: url("${settings.dir}/Gilroy/Gilroy-Black.woff") format("woff"),
      url("${settings.dir}/Gilroy/Gilroy-Black.ttf") format("truetype");
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: "Gilroy";
    src: url("${settings.dir}/Gilroy/Gilroy-SemiBold.woff") format("woff"),
      url("${settings.dir}/Gilroy/Gilroy-SemiBold.ttf") format("truetype");
    font-weight: 600;
    font-style: normal;
  }
  .lav-main__title_expand {
    display: none;
  }
  .row.section, .sandbox-header {
    display: none;
  }

  body {
    padding-top: 22px;
    background: #F7FAFD;
    font-family: "Gilroy";
    color: #183B56;
  }
  .lav-top {
    text-align: center;
  }
  .lav-title {
    font-weight: 900;
    font-size: 28px;
    line-height: 33px;
    max-width: 760px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    margin-bottom: 40px;
  }
  #fullWidth .tpl-6__content {
    padding: 0 15px!important;
    max-width: 1140px;
    margin-left: auto;
    margin-right: auto;
  }
  #fullWidth .tpl-6 {
    padding: 0!important;
  }
  .lav-timeline {
    position: relative;
    display: flex;
    justify-content: space-between;
    margin-bottom: 43px;
    align-items: flex-end;
    text-align: left;
  }
  .lav-timeline:before {
    content: '';
    position: absolute;
    height: 4px;
    bottom: 0;
    left: 15px;
    right: 15px;
    background: url(${settings.dir}/img/checkout-dots.png) bottom left;
    background-size: contain;
  }
  .lav-timeline__item {
    position: relative;
    padding-bottom: 8px;
  }
  .lav-timeline__item:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    background: #046BD9;
    border-radius: 21px;
    width: 70px;
    height: 4px;
  }
  .lav-timeline__item:last-child:before {
    width: 100%;
  }
  .lav-timeline__title {
    font-weight: 600;
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  .lav-timeline__date {
    font-family: "Roboto";
    font-weight: 400;
    margin-top: 1px;
    font-size: 10px;
    line-height: 12px;
    color: #5A7386;
  }
  .bg-white {
    background: none!important;
  }
  .main-cta {
    background: #183B56!important;
    border-radius: 10px;
    max-width: 262px;
    height: 58px;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    letter-spacing: -0.01em;
  }
  #payment-request-button + p {
    font-size: 10px;
    line-height: 18px;
    color: #5A7386;
  }
  #payment-request-button + p a {
    color: #046BD9;
  }
  .tpl-6__checkout__subtitle {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #183B56;
    margin-bottom: 18px;
  }
  #fullWidth #paymentForm {
    max-width: 1140px;
    padding: 0 15px;
  }
  .lav-caption {
    font-size: 10px;
    line-height: 15px;
    color: #5A7386;
  }
  .lav-caption + .lav-caption {
    margin-top: 10px;
  }
  .lav-main {
    display: flex;
    margin-left: -15px;
    margin-right: -15px;
  }
  .lav-main__block {
    width: 50%;
    padding: 0 15px;
  }
  .lav-main__sublock {
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 26px;
  }
  .lav-payment {
    margin-top: 15px;
    margin-bottom: 20px;
  }
  .lav-main__title {
    font-weight: 700;
    font-size: 22px;
    line-height: 27px;
    margin-bottom: 20px;
  }
  .lav-row {
    display: flex;
    margin-left: -8px;
    margin-right: -8px;
  }
  .lav-row + .lav-row {
    margin-top: 20px;
  }
  .lav-group {
    position: relative;
    width: 50%;
    padding: 0 8px;
  }
  .lav-group_full {
    width: 100%;
  }
  .lav-payment {
    position: relative;
    background: url(${settings.dir}/img/payments.png) top right;
    background-repeat: no-repeat;
    background-size: 167px;
    min-height: 100px;
  }
  .lav-label {
    position: absolute;
    left: 30px;
    top: -6px;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #5A7386;
  }
  .lav-group input {
    background: #FFFFFF;
    //box-shadow: 0px 0.857534px 2.5726px rgba(24, 59, 86, 0.01), 0px 2.29px 6.88px rgba(63, 87, 180, 0.03);
    //border-radius: 5px;
    outline: none;
    border: none;
    height: 40px;
    width: 100%;
    //font-weight: 600;
    //font-size: 14px;
    //line-height: 17px;
    //color: #183B56;
    //padding: 10px 20px;
    
    display: block;
    width: 100%;
    padding: 0.45875rem 1rem;
    font-size: 1rem;
    // font-weight: 400;
    line-height: 1.458;
    color: #232427;
    border: 1px solid #DADCE0;
    border-radius: 6px;
    font-weight: 600;
  }
  .lav-group input:placeholder {
    color: #232427;
  }
  #order-summary-widget {
    background: #FFFFFF;
    box-shadow: 0px 0.857534px 2.5726px rgba(24, 59, 86, 0.01), 0px 2.29px 6.88px rgba(63, 87, 180, 0.03);
    border-radius: 15px;
    padding: 25px;
  }
  #order-summary-widget #summary-totals .total-row .invoice-item-label {
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #183B56;
  }
  #order-summary-widget #summary-totals .total-row .invoice-item-amount {
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    text-align: right;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #183B56;
  }
  #order-summary-widget .product-item {
    margin-bottom: 0;
    padding-bottom: 0;
    border: none;
  }
  #order-summary-widget .product-item + .product-item  {
    margin-top: 20px;
  }
  #order-summary-widget .product-item-name, #order-summary-widget .product-price-col {
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    color: #183B56;
  }
  #order-summary-widget #summary-totals .total-row {
    font-size: 16px;
    margin-top: 20px;
    padding-top: 15px;
    border-top: 1px solid rgb(90 115 134 / 15%);
  }
  .price-item-detail {
    font-size: 8px;
    line-height: 9px;
    color: #5A7386;
    margin-top: 7px;
  }
  #fullWidth #paymentForm > * {
    display: none;
  }
  #fullWidth #paymentForm > .tpl-6__order {
    display: block;
  }
  .lav-tip {
    position: relative;
    top: -5px;
    flex-shrink: 0;
  }
  .lav-tip__info {
    opacity: 0;
    pointer-events: none;
    position: absolute;
    width: 230px;
    z-index: 50;
    transform: translateY(100%);
    bottom: -10px;
    left: -29px;
    padding: 15px;
    background: #E2E6F3;
    box-shadow: 0px 0.688073px 2.06422px rgba(24, 59, 86, 0.04), 0px 8.25688px 34.4037px rgba(63, 87, 180, 0.09);
    border-radius: 10px;
    font-weight: 400;
    font-size: 10px;
    line-height: 16px;
    color: #5A7386;
    transition: 0.3s;
    text-transform: initial;
    letter-spacing: initial;
  }
  .lav-tip__info:before {
    content: '';
    position: absolute;
    width: 40px;
    height: 10px;
    position: absolute;
    left: 15px;
    top: 1px;
    transform: translateY(-100%);
    background: url(${settings.dir}/img/tip-arrow.svg) center no-repeat;
    background-size: contain;
  }
  .lav-tip__info_reverse {
    left: initial;
    right: -29px;
  }
  .lav-tip__info_reverse:before {
    left: initial;
    right: 15px;
  }
  .lav-tip:hover .lav-tip__info {
    opacity: 1;
    pointer-events: auto;
  }
  .form-group div.card-num-row {
    padding-top: 0;
  }
  @media (max-width: 1000px) {
    .lav-title {
      font-size: 20px;
      line-height: 24px;
      margin-top: 30px;
    }
    .lav-timeline__title {
      font-size: 9px;
      line-height: 11px;
      letter-spacing: 1px;
    }
    .lav-timeline__date {
      margin-top: 12px;
      font-size: 10px;
      line-height: 12px;
    }
    .lav-timeline__item {
      padding-bottom: 14px;
      max-width: 85px;
    }
    .lav-tip {
      top: -3px;
    }
    .lav-timeline__item:before {
      width: 25px;
    }
    .lav-timeline__item:last-child .lav-timeline__title {
      display: flex;
    }
    .lav-timeline__item + .lav-timeline__item {
      margin-left: 8px;
    }
    .lav-main {
      flex-flow: column-reverse;
    }
    .lav-main__block {
      width: auto;
      margin: 0 15px;
      background: #FFFFFF;
      box-shadow: 0px 0.857534px 2.5726px rgba(24, 59, 86, 0.01), 0px 2.29px 6.88px rgba(63, 87, 180, 0.03);
      border-radius: 15px;
      padding: 20px;
    }
    .lav-main__block + .lav-main__block {
      margin-bottom: 40px;
    }
    .lav-main__title {
      font-size: 18px;
      line-height: 22px;
      margin-bottom: 0;
      padding-bottom: 20px;
    }
    .lav-summary .lav-main__title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px dashed rgb(4 107 217 / 15%);
    }
    .lav-main__title_expand {
      display: flex;
      align-items: center;
      font-size: 10px;
      line-height: 1;
      text-align: right;
      text-transform: capitalize;
      color: #046BD9;
    }
    .lav-main__title_expand img {
      margin-left: 10px;
    }
    #order-summary-widget {
      padding: 0;
      letter-spacing: 0;
    }
    #order-summary-widget .product-item-name, #order-summary-widget .product-price-col {
      font-size: 12px;
      line-height: 14px;
    }
    #product-list {
      padding-top: 20px;
      display: none;
    }
    #order-summary-widget .product-item .product-label-col div {
      margin-top: 7px;
      font-size: 10px;
      line-height: 12px;
    }
    #order-summary-widget .product-item + .product-item {
      margin-top: 14px;
    }
    #order-summary-widget #summary-totals .total-row {
      margin-top: 0;
      padding-top: 20px;
      border: none;
      font-size: 14px;
      line-height: 17px;
    }
    .lav-tip__info_reverse {
      right: -10px;
      bottom: 8px;
    }
    .lav-row {
      display: block;
      margin: 0;
    }
    .lav-group {
      width: auto;
      padding: 0;
    }
    .lav-group + .lav-group {
      margin-top: 26px;
    }
    .lav-group input {
      background: #FFFFFF;
      border: 1px solid rgba(90, 115, 134, 0.5);
      box-sizing: border-box;
      border-radius: 5px;
    }
    .lav-label {
      padding: 0 5px;
      background: white;
      left: 13px;
    }
    .lav-payment {
      margin-top: 22px;
      padding-top: 22px;
      border-top: 1px dashed rgb(4 107 217 / 15%);
    }
    .lav-payment {
      background-size: 146px;
      background-position-y: 15px;
    }
    .lav-payment .lav-row:last-child {
      margin-top: 26px;
      display: flex;
    }
    .lav-payment .lav-row:last-child .lav-group {
      width: 50%;
    }
    .lav-payment .lav-row:last-child .lav-group + .lav-group {
      margin-top: 0;
      margin-left: 14px;
    }
    .lav-info  {
      margin-bottom: 16px;
    }
    .tpl-6__order .btn {
      max-width: 220px;
    }
    #payment-request-button + p a {
      display: block;
    }
  }
`;

const stylesEl = document.createElement('style');
if (location.href.includes('/products/courses-special-offer-subscribe')) {
  stylesEl.innerHTML = stylesCheckout;
} else {
  stylesEl.innerHTML = styles;
}

if (document.querySelector('body')) {
  document.body.appendChild(stylesEl);
} else {
  setTimeout(() => {
    document.body.appendChild(stylesEl);
  }, 1000);
}

/*** STYLES / end ***/

const newPage = `
  <div class='lav-header lav-desk'>
    <div class='lav-header__inner'>
      <div class='lav-header__logo'>
        <img src='${settings.dir}/img/logo.svg'>
      </div>
      <div class='lav-header__info'>
        <div class='lav-header__descr'>
          <span class='lav-mark'>40% Off</span> a 1 Year Subscription to the new<br/><span class='lav-mark'>SamCart Launch Plan&nbsp;-</span> <span class='lav-price_old'>$588.00</span> <span class='lav-mark lav-price_new'>$349.00</span>
        </div>
        <div class='lav-header__btn lav-header__paypal'>
          <img src='${settings.dir}/img/btn-paypal.png'>
        </div>
        <div class='lav-header__btn lav-header__btn_hidden lav-header__google'>
          <img src='${settings.dir}/img/btn-google.png'>
        </div>
        <div class='lav-header__btn lav-header__btn_hidden lav-header__apple'>
          <img src='${settings.dir}/img/btn-applepay.png'>
        </div>
        <div class='lav-header__btn lav-header__card lav-checkout'>
          <img src='${settings.dir}/img/btn-card.png'>
        </div>
      </div>
      <button class='lav-btn lav-btn_trans lav-checkout lav-header__cta'>Start earning now</button>
    </div>
  </div>

  <div class='lav-header lav-mob'>
    <div class='lav-header__top'>
      <div class='lav-header__logo'>
        <img src='${settings.dir}/img/logo.svg'>
      </div>
    </div>
    <div class='lav-header__inner'>
      <div class='lav-header__info'>
        <div class='lav-header__descr'>
          <span class='lav-mark'>40% Off</span> 1 Year Subscription </br> to the new SamCart Launch Plan
        </div>
        <div class='lav-header__price'>
          <div class='lav-header__price-new'>$349.00</div><div class='lav-header__price-old'>$588.00</div>
        </div>
        <div class='lav-header__buttons'>
          <div class='lav-header__btn lav-header__paypal'>
            <img src='${settings.dir}/img/btn-paypal.png'>
          </div>
          <div class='lav-header__btn lav-header__btn_hidden lav-header__google'>
            <img src='${settings.dir}/img/btn-google.png'>
          </div>
          <div class='lav-header__btn lav-header__btn_hidden lav-header__apple'>
            <img src='${settings.dir}/img/btn-applepay.png'>
          </div>
          <div class='lav-header__btn lav-header__card lav-checkout'>
            <img src='${settings.dir}/img/btn-card.png'>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class='lav-wrap'>
    <div class='lav-section lav-intro'>
      <div class='lav-container'>
        <div class='lav-intro__congrate'>Congratulations!</div>
        <div class='lav-intro__mark'>You Made It!</div>
        <div class='lav-intro__caption'>You're about to get exclusive access to a proven system for launching your own 6-figure <br> online business with just 1 simple page!</div>

        <div class='lav-intro__image'>
          <img class='lav-desk' src='${settings.dir}/img/intro.png'>
          <img class='lav-mob' src='${settings.dir}/img/intro-mob.png'>
        </div>

        <div class='lav-intro__btn-wrap'>
          <button class='lav-btn lav-btn_blue lav-checkout lav-intro__btn'>Start earning now</button>
        </div>
      </div>
    </div>

    <div class='lav-section lav-dis'>
      <div class='lav-container'>
        <div class='lav-dis__caption'>Get everything included below at one low price. </div>
        <div class='lav-dis__title'>Normally $588 <span>(Today Just $349)</span></div>
        <div class='lav-dis__list'>
          <div class='lav-dis__col'>
            <div class='lav-dis__item lav-tick'>Create unlimited pages</div>
            <div class='lav-dis__item lav-tick'>Sell unlimited products/services</div>
            <div class='lav-dis__item lav-tick'>Sell 1-time purchases, recuring subscriptions, payment plans & trials</div>
          </div>
          <div class='lav-dis__col'>
            <div class='lav-dis__item lav-tick'>Get all our pre-designed templates</div>
            <div class='lav-dis__item lav-tick'>Get tones of built-in integrations</div>
            <div class='lav-dis__item lav-tick'>Automatically deliver digital files</div>
            <div class='lav-dis__item lav-tick'>Pay no extra processing fees</div>
          </div>
          <div class='lav-dis__col'>
            <div class='lav-dis__item lav-tick'>Built-in tax support</div>
            <div class='lav-dis__item lav-tick'>See your sales in real-time</div>
            <div class='lav-dis__item lav-tick'>Amazing customer support</div>
          </div>
        </div>
      </div>
    </div>

    <div class='lav-section lav-gifts'>
      <div class='lav-container'>
        <div class='lav-gifts__title'>Plus, <span>Get $15,656 in FREE</span> gifts!</div>
        <div class='lav-gifts__caption'>When you try SamCart today, we will add these gifts to your order...</div>
        <div class='lav-gifts__img'>
          <img src="https://samcart-foundation-prod.s3.amazonaws.com/marketplace-4554/assets/92a2f05f-0a0a-4c86-a2e3-3262659bfdca" alt="Your Image">
        </div>

        <div class='lav-master'>
          <div class='lav-master__title'>The 1 Page Masterclass<span>™</span></div>
          <div class='lav-master__list'>
            <div class='lav-master__col'>
              <div class='lav-master__item lav-tick'>My simple product creation secrets that help me quickly create amazing products that people line up to buy</div>
              <div class='lav-master__item lav-tick'>The 7 parts of the 1 Page Blueprint so your page is ready to convert at the highest levels</div>
              <div class='lav-master__item lav-tick'>All of my traffic-generation secrets that I use to get over 20,000 visitors to my pages every single day</div>
            </div>
            <div class='lav-master__col'>
              <div class='lav-master__item lav-tick'>Over 30 videos, showing you how to build a profitable online business from complete scratch and get it to the 6 and 7 figure level in record time...</div>
              <div class='lav-master__item lav-tick'>Cheat sheets, scripts & templates that will speed up the process of creating products, building your page, making ads and landing sales.</div>
            </div>
          </div>
          <div class='lav-master__label lav-white-label'>Normally $4,995.00 - Yours FREE!</div>
        </div>
        
        <div class='lav-gifts__btn-wrap'>
          <button class='lav-btn lav-btn_blue lav-checkout lav-gifts__btn'>Start earning now</button>
        </div>
      </div>
    </div>

    <div class='lav-section lav-grid'>
      <div class='lav-container'>
        <div class='lav-grid__row'>
          <div class='lav-grid__info'>
            <div class='lav-grid__title'>The 1 Page Workshop<span>™</span></div>
            <div class='lav-grid__descr'>I break down each of the 7 steps of my blueprint so you know exactly how to apply each one to YOUR product. Plus, you get to watch as I run through examples of actual customers who are using the Blueprint with mind-blowing results.</div>
            <div class='lav-grid__note lav-white-label'>A <span>$199.00</span> Value- Yours FREE!</div>
          </div>
          <div class='lav-grid__image'>
            <img src='${settings.dir}/img/grid1.png'>
          </div>
        </div>
        
        <div class='lav-grid__row'>
          <div class='lav-grid__info'>
            <div class='lav-grid__title'>Traffic Tactics<span>™</span></div>
            <div class='lav-grid__descr'>Discover how to get unlimited traffic from Facebook, YouTube, Instagram, Podcasting, SEO, Content Marketing, Facebook Ads, YouTube Ads, Google Ads, and the list goes on and on.</div>
            <div class='lav-grid__note lav-white-label'>Normally <span>$1,997.00</span> - Yours FREE!</div>
            <button class='lav-btn lav-btn_blue lav-checkout lav-grid__btn'>Start earning now</button>
          </div>
          <div class='lav-grid__image'>
            <img src='${settings.dir}/img/grid2.png'>
          </div>
        </div>

        <div class='lav-grid__row'>
          <div class='lav-grid__info'>
            <div class='lav-grid__title'>1 Page Launch<span>™</span></div>
            <div class='lav-grid__descr'>Discover how to pull off a 5 or 6-figure product launch with nothing but your one page!</div>
            <div class='lav-grid__note lav-white-label'>Normally <span>$1,997.00</span> - Yours FREE!</div>
          </div>
          <div class='lav-grid__image'>
            <img src='${settings.dir}/img/grid3.png'>
          </div>
        </div>

        <div class='lav-grid__row'>
          <div class='lav-grid__info'>
            <div class='lav-grid__title'>The $237k Swipe File<span>™</span></div>
            <div class='lav-grid__descr'>Get all of our best performing pages, video scripts, templates, emails, ads, and sales messages...so you have an endless supply of ideas for selling your own product or service!</div>
            <div class='lav-grid__note lav-white-label'>A <span>$2,997.00</span> Value- Yours FREE!</div>
          </div>
          <div class='lav-grid__image'>
            <img src='${settings.dir}/img/grid4.png'>
          </div>
        </div>

        <div class='lav-grid__row'>
          <div class='lav-grid__info'>
            <div class='lav-grid__title'>Product Creation Masterclass<span>™</span></div>
            <div class='lav-grid__descr'>Discover how to quickly create your first product in less than 72 hours. Get our simple frameworks for deciding on your niche, your product, the name, the price and everything else so you don't have to worry about doing any of it yourself!</div>
            <div class='lav-grid__note lav-white-label'>A <span>$497.00</span> Value- Yours FREE!</div>
            <button class='lav-btn lav-btn_blue lav-checkout lav-grid__btn'>Start earning now</button>
          </div>
          <div class='lav-grid__image'>
            <img src='${settings.dir}/img/grid5.png'>
          </div>
        </div>

        <div class='lav-grid__row'>
          <div class='lav-grid__info'>
            <div class='lav-grid__title'>My "Product Vault" <span>(New!)</span></div>
            <div class='lav-grid__descr'>Over the last 10 years, I’ve created dozens of reports in a bunch of different niches...and used them to make millions of dollars.</div>
            <div class='lav-grid__descr'>And my guess is, you would learn a ton by seeing all of those actual reports that I sold...plus the pages that I created to sell them. So I’ve decided to release them all from the vault, and give you full access to all of them.</div>
            <div class='lav-grid__note lav-white-label'>Not Normally Sold - Yours FREE!</div>
          </div>
          <div class='lav-grid__image'>
            <img src='${settings.dir}/img/grid6.png'>
          </div>
        </div>

        <div class='lav-grid__row'>
          <div class='lav-grid__info'>
            <div class='lav-grid__title'>The Private Facebook Group<span>™</span></div>
            <div class='lav-grid__descr'>Join over 25,000+ other entreprenuers in our exclusive group so you can network and build relationships with the top sellers on the internet. Get questions answered, brainstorm ideas, and get results faster than ever with this community by your side.</div>
            <div class='lav-grid__note lav-white-label'>A <span>$1,997.00</span> Value- Yours FREE!</div>
          </div>
          <div class='lav-grid__image'>
            <img src='${settings.dir}/img/grid7.png'>
          </div>
        </div>

        <div class='lav-grid__row'>
          <div class='lav-grid__info'>
            <div class='lav-grid__title'>1 Page Wednesday<span>™</span> Calls</div>
            <div class='lav-grid__descr'>Watch me take a page that’s underperforming and tweak it so that it starts turning visitors into paying customers on autopilot.</div>
            <div class='lav-grid__note lav-white-label'>A <span>$497.00</span> Value - Yours FREE!</div>
            <button class='lav-btn lav-btn_blue lav-checkout lav-grid__btn'>Start earning now</button>
          </div>
          <div class='lav-grid__image'>
            <img src='${settings.dir}/img/grid8.png'>
          </div>
        </div>

        <div class='lav-grid__row'>
          <div class='lav-grid__info'>
            <div class='lav-grid__title'>Expert Bonus Trainings<span>™</span> <span>(New!)</span></div>
            <div class='lav-grid__descr'>Discover the secrets used by our top sellers at SamCart, that they don't share anywhere else. Learn from Nicole Walters, Mike Dillard, James Wedmore, Kim Jimenez, Tori Torres, Rocky Ullah, and many more!</div>
            <div class='lav-grid__note lav-white-label'>Normally Not Sold - Yours FREE!</div>
          </div>
          <div class='lav-grid__image'>
            <img src='${settings.dir}/img/grid9.png'>
          </div>
        </div>

        <div class='lav-grid__row'>
          <div class='lav-grid__info'>
            <div class='lav-grid__title'>NEW BONUS - My Personal Page Template<span>™</span></div>
            <div class='lav-grid__descr'>Listen, if you and I were to both launch an identical product to an identical audience, I would beat you by several times over...Why?</div>
            <div class='lav-grid__descr'>Because whenever I launch a new product or offer I NEVER start from scratch... I use this 1-Page template that has been tweaked, tested, and designed to convert at 40 to 50 times what the average website does as my starting point.</div>
            <div class='lav-grid__descr'>I simply update the text and images to fit my new product and I'm done.</div>
            <div class='lav-grid__descr'>I literally cannot go wrong, and now you can't either.</div>
            <div class='lav-grid__descr'>This proven template is yours as my gift when you take advantage of this offer today.</div>
            <div class='lav-grid__note lav-white-label'>Not Normally Sold - Yours FREE!</div>
          </div>
          <div class='lav-grid__image'>
            <img src='${settings.dir}/img/grid10.png'>
          </div>
        </div>

        <div class='lav-grid__btn-wrap'>
          <button class='lav-btn lav-btn_blue lav-checkout lav-grid__btn'>Start earning now</button>
        </div>
      </div>
    </div>

    <div class='lav-section lav-total'>
      <div class='lav-container'>
        <div class='lav-total__title'>A total value of over $15,656!</div>
        <div class='lav-total__image'>
          <img class='lav-desk' src='${settings.dir}/img/total-image.png'>
          <img class='lav-mob' src='${settings.dir}/img/total-image-mob.png'>
        </div>
        <div class='lav-total__subtitle'>"How do I know this is for real?"</div>
        <div class='lav-total__caption'>
          I totally understand the skepticism. There are a lot of fakes out there, but there are 24,812 real people inside this community whose lives have been changed by this program. Here are just a few...
        </div>
        <div class='lav-total__chat'>
          <img class='lav-desk' src='${settings.dir}/img/total-chat.png'>
          <img class='lav-mob' src='${settings.dir}/img/total-chat-mob.png'>
        </div>

        <div class='lav-total__btn-wrap'>
          <button class='lav-btn lav-btn_blue lav-checkout lav-total__btn'>Start earning now</button>
        </div>
      </div>
    </div>

    <div class='lav-section lav-plans'>
      <div class='lav-container'>
        <div class='lav-plans__title'><span>Unlock 17+ additional trainings</span><br> that will speed up your results even more.</div>
        <div class='lav-plans__row'>
          <div class='lav-plan'>
            <div class='lav-plan_active lav-plan__inner' data-tab='1'>
              <div class='lav-plan__image'>
                <img src='${settings.dir}/img/plan1.png'>
              </div>
              <div class='lav-plan__title'>Launch</div>
              <div class='lav-plan__price'>$349<span>/YR</span></div>
              <div class='lav-plan__caption'>Billed Annually</div>
              <div class='lav-plan__text'>Get 1 full year of SamCart Launch plus all the bonuses described above:</div>
              <div class='lav-plan__btn-wrap'>
                <div class='lav-plan__btn lav-plan__btn_active'>Start earning now</div>
              </div>
            </div>

            <div class='lav-plan__info'>
              <div class='lav-plan__lines'>
                <div class='lav-plan__line'><span>Unlimited</span> Products & Pages</div>
                <div class='lav-plan__line'><span>Unlimited</span> Courses</div>
                <div class='lav-plan__line'><span>Unlimited</span> Students</div>
              </div>

              <div class='lav-plan__list-wrap'>
                <div class='lav-plan__list-title'>PLUS:</div>
                <div class='lav-plan__list'>
                  <div class='lav-plan__list-item'>The 1 Page Masterclass</div>
                  <div class='lav-plan__list-item'>Traffic Tactics</div>
                  <div class='lav-plan__list-item'>Course Creation Challenge</div>
                  <div class='lav-plan__list-item'>1 Page Wednesdays</div>
                  <div class='lav-plan__list-item'>Facebook Group Acces</div>
                  <div class='lav-plan__list-item'>Top Sell Strategies</div>
                  <div class='lav-plan__list-item'>My Course Page Template</div>
                </div>
              </div>
            </div>
          </div>

          <div class='lav-plan'>
            <div class='lav-plan__inner' data-tab='2'>
              <div class='lav-plan__image'>
                <img src='${settings.dir}/img/plan2.png'>
              </div>
              <div class='lav-plan__title'>ADD CREATORU NOW!</div>
              <div class='lav-plan__price'>$469<span>/YR</span></div>
              <div class='lav-plan__caption'>Billed Annually</div>
              <div class='lav-plan__text'>Access EVERY premium training we’ve ever created for only $120 extra in CreatorU!</div>
              <div class='lav-plan__btn-wrap'>
                <div class='lav-plan__btn'>Launch Plan Only</div>
              </div>
            </div>

            <div class='lav-plan__info'>
              <div class='lav-plan__lines'>
                <div class='lav-plan__line'><span>Everything in the main package</span></div>
              </div>

              <div class='lav-plan__list-wrap'>
                <div class='lav-plan__list-title'>PLUS:</div>
                <div class='lav-plan__list'>
                  <div class='lav-plan__list-item'>Scaling with SamCart</div>
                  <div class='lav-plan__list-item'>The Ultimate Upsell</div>
                  <div class='lav-plan__list-item'>The 4X Formula</div>
                  <div class='lav-plan__list-item'>The 1 Page Blueprint</div>
                  <div class='lav-plan__list-item'>The 5 Minute VSL</div>
                  <div class='lav-plan__list-item'>The Going Pro Gameplan</div>
                  <div class='lav-plan__list-item'>The Ultimate Upsell Script</div>
                  <div class='lav-plan__list-item'>Product Creation Masterclass</div>
                  <div class='lav-plan__list-item lav-plan__list-item-last'>And much more</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class='lav-video'>
      <div class='lav-container'>
      </div>
    </div>

    <div class='lav-section lav-faq'>
      <div class='lav-container'>
        <div class='lav-faq__title'>You might be thinking...</div>
        <div class='lav-faq__list'>
          <div class='lav-faq__item'>
            <div class='lav-faq__head'>Am I locked into a subscription?</div>
            <div class='lav-faq__body'>Absolutely not! You're never locked into any subscription or long-term contract with SamCart.</div>
          </div>
          <div class='lav-faq__item'>
            <div class='lav-faq__head'>What if I don't have a product?</div>
            <div class='lav-faq__body'>That's totally fine! We'll walk you through how to create your first product in a matter of days with just $100.</div>
          </div>
          <div class='lav-faq__item'>
            <div class='lav-faq__head'>What types of products does this work for?</div>
            <div class='lav-faq__body'>SamCart's pages support and work for any type of product you want to sell. You can sell digital products like ebooks and online courses, physical products like t-shirts or skateboards, and even services like custom web design or coaching. You can charge 1-time payments...recurring subscriptions...fixed payment plans...free trials...paid trials...and anything in between.</div>
          </div>
          <div class='lav-faq__item'>
            <div class='lav-faq__head'>How long does this 40% discount last?</div>
            <div class='lav-faq__body'>This discount is only valid for today. After that, you'll have to pay $588 per year for SamCart...and you won't get any of these bonuses. So act now!</div>
          </div>
          <div class='lav-faq__item'>
            <div class='lav-faq__head'>Do I need any other tools?</div>
            <div class='lav-faq__body'>The good news about this approach is that you only need a couple things. And I’m giving you all of those things, so no...you don’t need anything else. There are always other tools that help as you grow...and I’ll show you my favorite tools for getting critical tasks done...but there is not going to be some other big investment needed to make this work...so don’t worry!</div>
          </div>
          <div class='lav-faq__item'>
            <div class='lav-faq__head'>Is there a payment plan?</div>
            <div class='lav-faq__body'>No there is not a payment plan right now since it wouldn’t be fair to the other people paying for SamCart...plus the price is already so low, at just $349. But if you want to break it up into payments, just use a credit card or use PayPal Credit on this page.</div>
          </div>
          <div class='lav-faq__item'>
            <div class='lav-faq__head'>What happens my SamCart yearly subscription renews?</div>
            <div class='lav-faq__body'>After your first year, if you want to keep using SamCart, you can continue using it and you will be grandfathered into this 40% discounted rate for as long as you’re a customer. You can always change to monthly billing, or upgrade to another plan if you want...it’s totally up to you...since we never force you into long term contracts or commitments.</div>
          </div>
          <div class='lav-faq__item'>
            <div class='lav-faq__head'>Will this work with my current website?</div>
            <div class='lav-faq__body'>If you already have a website or blog, this is the perfect addition to that site. You can create your page with SamCart and link to it from your blog sidebar, or the navigation at the top of bottom of your site, or even from each individual blog post...so that people can easily find your product and buy it. You can even make your page show up on the same URL so people don’t get confused.</div>
          </div>
          <div class='lav-faq__item'>
            <div class='lav-faq__head'>Can I sell things other than digital products?</div>
            <div class='lav-faq__body'>Totally. We have tens of thousands of business selling skateboards, custom web design, coaching programs, live events, tshirts, and the list goes on and on. SamCart supports absolutely any type of product, and the 1 Page Masterclass works no matter what you’re selling...I just highly recommend that you start with digital products if you’re not sure where to start...because that’s the easiest way to start making real money online...but in the end, it’s up to you.</div>
          </div>
        </div>
        <div class='lav-faq__btn-wrap'>
          <button class='lav-btn lav-btn_blue lav-checkout lav-faq__btn'>Start earning now</button>
        </div>
      </div>
    </div>
  </div>
`;

const newCheckout = `
  <div class='lav-top'>
    <div class='lav-logo'>
      <img src='${settings.dir}/img/logo.svg'>
    </div>
    <div class='lav-title'>You are one step away from placing your order and starting earning passive income.</div>
    <div class='lav-timeline'>
      <div class='lav-timeline__item'>
        <div class='lav-timeline__title'>You Place order</div>
        <div class='lav-timeline__date'>11.11.2021</div>
      </div>
      <div class='lav-timeline__item'>
        <div class='lav-timeline__title'>Get access to samcart<br>and set up your store</div>
        <div class='lav-timeline__date'>11.11.2021</div>
      </div>
      <div class='lav-timeline__item'>
        <div class='lav-timeline__title'>Start Accepting orders</div>
        <div class='lav-timeline__date'>11.11.2021</div>
      </div>
      <div class='lav-timeline__item'>
        <div class='lav-timeline__title'>
          30 days 100% money-back guarantee
          <span class='lav-tip'>
            <img src='${settings.dir}/img/tip.svg'>
            <div class='lav-tip__info lav-tip__info_reverse'>
              We know our templates work. And they work for nearly every type of product or service. And we’re so confident that if they don’t work for you, simply let us know within 30 days and we’ll refund your invesment.
            </div>
          </span>
        </div>
        <div class='lav-timeline__date lav-timeline__date_expire'>11.11.2021</div>
      </div>
    </div>
  </div>

  <div class='lav-main'>
    <div class='lav-info lav-main__block'>
      <div class='lav-main__title'>Payment Information</div>

      <div class='lav-contact lav-block'>
        <div class='lav-main__sublock'>
          Contact
          <span class='lav-tip'>
            <img src='${settings.dir}/img/tip.svg'>
            <div class='lav-tip__info'>
              Just fill out your contact information below, and let us know what stage you're currently at in your online business. This will help us better serve you once you're inside the community.
            </div>
          </span>
        </div>
        <div class='lav-row'>
          <div class='lav-group'>
            <!-- <label class='lav-label'>First name</label> -->
            <input type='text' class='lav-input lav-input-name' placeholder="First name">
          </div>
          <div class='lav-group'>
            <!-- <label class='lav-label'>Last name</label> -->
            <input type='text' class='lav-input lav-input-last' placeholder="Last name">
          </div>
        </div>
        <div class='lav-row'>
          <div class='lav-group'>
            <!-- <label class='lav-label'>Email address</label> -->
            <input type='text' class='lav-input lav-input-mail' placeholder="Email address">
          </div>
          <div class='lav-group'>
            <!-- <label class='lav-label'>Phone number</label> -->
            <input type='text' class='lav-input lav-input-phone' placeholder="Phone number">
          </div>
        </div>
      </div>

      <div class='lav-payment lav-block'>
        <div class='lav-main__sublock'>Payment Methods</div>
      </div>

      <div class='lav-caption'>You'll also be able to instantly access all of the free gifts right from inside your SamCart account, which makes it super easy to build your pages and go through the trainings at the same time.</div>
      <div class='lav-caption'>I'll see you on the inside!</div>

    </div>

    <div class='lav-summary lav-main__block'>
      <div class='lav-main__title'>
       <div class='lav-main__title_value'>Order Summary</div>
       <div class='lav-main__title_expand'>Show all <img src='${settings.dir}/img/summary-icon-right.svg'></div>
      </div>
    </div>
  </div>

`;

/********* Custom Code **********/
init();
function init() {
  for (let videoEl of document.querySelectorAll('video')) {
    videoEl.remove();
  }
  if (!location.href.includes('/products/courses-special-offer-subscribe')) {
    if (document.querySelector('.row.section')) {
      console.log('init');
      document
        .querySelector('.row.section')
        .insertAdjacentHTML('beforebegin', newPage);
      for (let item of document.querySelectorAll('.lav-faq__item')) {
        item.addEventListener('click', function () {
          if (
            document.querySelector('.lav-faq__item_active') &&
            !item.classList.contains('lav-faq__item_active')
          ) {
            document
              .querySelector('.lav-faq__item_active')
              .classList.remove('lav-faq__item_active');
          }
          item.classList.toggle('lav-faq__item_active');
        });
      }

      for (let item of document.querySelectorAll('.lav-checkout')) {
        item.addEventListener('click', function (e) {
          e.preventDefault();
          location.href =
            'https://checkout.samcart.com/products/courses-special-offer-subscribe/';
        });
      }

      // <div class='lav-row'>
      //   <div class='lav-group lav-group_full'>
      //     <label class='lav-label'>Credit card Number</label>
      //     <input type='text' class='lav-input'>
      //   </div>
      // </div>
      // <div class='lav-row'>
      //   <div class='lav-group'>
      //     <label class='lav-label'>Expiration</label>
      //     <input type='text' class='lav-input'>
      //   </div>
      //   <div class='lav-group'>
      //     <label class='lav-label'>Cvv</label>
      //     <input type='text' class='lav-input'>
      //   </div>
      // </div>

      // for (let item of document.querySelectorAll('.lav-input')) {
      //   item.addEventListener('change', function () {
      //     console.log('change', item);
      //     var value = item.value;
      //     if (item.classList.contains('lav-input-name')) {

      //     }
      //     if (item.classList.contains('lav-input-last')) {

      //     }
      //     if (item.classList.contains('lav-input-mail')) {

      //     }
      //     if (item.classList.contains('lav-input-phone')) {

      //     }
      //   })
      // }

      for (let item of document.querySelectorAll('.lav-plan__inner')) {
        item.addEventListener('click', function (e) {
          if (item.dataset.tab == '1') {
            localStorage.setItem('plan', '1');
            document.querySelector('.lav-price_old').innerText = '$588.00';
            document.querySelector('.lav-price_new').innerText = '$349.00';
          } else {
            localStorage.setItem('plan', '2');
            document.querySelector('.lav-price_old').innerText = '$708.00';
            document.querySelector('.lav-price_new').innerText = '$469.00';
          }

          document.querySelector(
            '.lav-plan_active .lav-plan__btn_active'
          ).innerText = 'Launch Plan Only';
          document
            .querySelector('.lav-plan_active .lav-plan__btn_active')
            .classList.remove('lav-plan__btn_active');
          document
            .querySelector('.lav-plan_active')
            .classList.remove('lav-plan_active');
          item.classList.add('lav-plan_active');
          item
            .querySelector('.lav-plan__btn')
            .classList.add('lav-plan__btn_active');

          item.querySelector('.lav-plan__btn').innerText = 'Start earning now';
        });
      }

      for (let item of document.querySelectorAll('.lav-plan__btn')) {
        item.addEventListener('click', function (e) {
          if (item.classList.contains('lav-plan__btn_active')) {
            e.preventDefault();
            e.stopPropagation();
            localStorage.setItem('paymentType', 'card');
            location.href =
              'https://checkout.samcart.com/products/courses-special-offer-subscribe/';
          }
        });
      }

      for (let item of document.querySelectorAll('.lav-header__paypal')) {
        item.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector("[for='payPalRadio']").click();
          if (document.querySelector('[name="fname"]')) {
            document.querySelector('[name="fname"]').value = 'test';
          }
          if (document.querySelector('[name="lname"]')) {
            document.querySelector('[name="lname"]').value = 'test';
          }
          if (document.querySelector('[name="email"]')) {
            document.querySelector('[name="email"]').value = 'test@test.test';
          }
          if (document.querySelector('[name="email_confirmation"]')) {
            document.querySelector('[name="email_confirmation"]').value =
              'test@test.test';
          }
          if (document.querySelector('[name="phone"]')) {
            document.querySelector('[name="phone"]').value = '0000000000000';
          }
          if (document.querySelector('[name="custom_ubiGdEid"]')) {
            document.querySelector('[name="custom_ubiGdEid"]').value =
              '$1 - $1,000';
          }

          setTimeout(() => {
            document.querySelector('.main-cta').click();
          }, 500);
        });
      }

      if (document.querySelector("[for='digitalWalletRadio']")) {
        for (let item of document.querySelectorAll('.lav-header__google')) {
          item.classList.remove('lav-header__btn_hidden');
        }
      }

      // TODO for apple
      // if (document.querySelector("[for='digitalWalletRadio']")) {
      // }

      // Google pay
      for (let item of document.querySelectorAll('.lav-header__google')) {
        item.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector("[for='digitalWalletRadio']").click();
          localStorage.setItem('paymentType', 'google');
          // if (document.querySelector('#payment-request-button')) {
          //   setTimeout(() => {
          //     document.querySelector('.main-cta').click();
          //   }, 500);
          // } else {
          //   setTimeout(() => {
          //     document.querySelector('.main-cta').click();
          //   }, 2000);
          // }
        });
      }

      // Apple pay
      for (let item of document.querySelectorAll('.lav-header__apple')) {
        item.addEventListener('click', function (e) {
          e.preventDefault();
          localStorage.setItem('paymentType', 'apple');
          console.log('apple');
        });
      }

      if (localStorage.getItem('plan') == '2') {
        document.querySelectorAll('.lav-plan__inner')[1].click();
      }
    } else {
      setTimeout(() => {
        init();
      }, 1000);
    }
  } else {
    if (document.querySelector('#paymentForm')) {
      if (localStorage.getItem('plan') == '2') {
        var summaryInterval = setInterval(() => {
          if (!document.querySelector('#product-option-545632')) {
            return false;
          }
          document.querySelector('#product-option-545632').click();
          if (document.querySelector('#product-option-545632').checked) {
            clearInterval(summaryInterval);
            setTimeout(addSummary, 1000);
          }
        }, 400);
      } else {
        var summaryInterval = setInterval(() => {
          if (!document.querySelector('#product-option-603893')) {
            return false;
          }
          document.querySelector('#product-option-603893').click();
          if (document.querySelector('#product-option-603893').checked) {
            clearInterval(summaryInterval);
            setTimeout(addSummary, 1000);
          }
        }, 400);
      }

      document
        .querySelector('#paymentForm')
        .insertAdjacentHTML('beforebegin', newCheckout);

      if (localStorage.getItem('paymentType') == 'google') {
        document.querySelector("[for='digitalWalletRadio']").click();
        document.querySelector('.lav-payment').remove();
      }

      const today = new Date();

      for (let item of document.querySelectorAll('.lav-timeline__date')) {
        item.innerText = today.toLocaleDateString();
      }

      console.log(document.querySelector('.payment-form'));

      document
        .querySelector('.lav-payment')
        .insertAdjacentElement(
          'beforeend',
          document.querySelector('.payment-form')
        );

      // setTimeout(() => {
      //   document
      //     .querySelector('.lav-payment')
      //     .insertAdjacentElement(
      //       'beforeend',
      //       document.querySelector('.payment-form')
      //     );
      // }, 1500);

      document
        .querySelector('.lav-main__title_expand')
        .addEventListener('click', function () {
          this.classList.toggle('lav-active');
          if (this.classList.contains('lav-active')) {
            this.innerHTML = `Hide <img src='${settings.dir}/img/summary-icon-close.svg'>`;
            document.querySelector('#product-list').style.display = 'block';
          } else {
            this.innerHTML = `Show All <img src='${settings.dir}/img/summary-icon-right.svg'>`;
            document.querySelector('#product-list').style.display = 'none';
          }
        });

      document.querySelector('.lav-timeline__date_expire').innerText = new Date(
        today.setDate(today.getDate() + 30)
      ).toLocaleDateString();

      addSummary();
    } else {
      setTimeout(() => {
        init();
      }, 1000);
    }
  }
}

function addSummary() {
  if (document.querySelector('.lav-summary #order-summary-widget')) {
    document.querySelector('.lav-summary #order-summary-widget').remove();
  }
  var cloneSummary = document
    .querySelector('#order-summary-widget')
    .cloneNode(true);
  cloneSummary.classList.add('lav-summary-inner');

  document
    .querySelector('.lav-summary')
    .insertAdjacentElement('beforeend', cloneSummary);

  setTimeout(() => {
    document.querySelector('.lav-summary #order-summary-widget').remove();
    document
      .querySelector('.lav-summary')
      .insertAdjacentElement(
        'beforeend',
        document.querySelector('#order-summary-widget').cloneNode(true)
      );
  }, 2000);
}
