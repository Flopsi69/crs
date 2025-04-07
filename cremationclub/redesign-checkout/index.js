console.debug('*** Experiment started ***')

// Config for Experiment
const config = {
  // dir: 'http://127.0.0.1:5500/cremationclub/redesign-checkout',
  dir: 'https://flopsi69.github.io/crs/cremationclub/redesign-checkout',
  clarity: ['set', 'form_steps', 'variant_1'],
  debug: false
}

// const orig = console.log
// console.log = function (...args) {
//   orig.apply(console, ['Debug:', ...args])
// }

// Styles for Experiment
const styles = /* css */ `
  .lav-btn {
    border-radius: 100px;
    background: #557F36;
    padding: 14px 52px;
    color: #FFF;
    text-align: center;
    font-family: Castoro;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    cursor: pointer;
    transition: .3s;
  }
  @media(hover:hover) {
    .lav-btn:hover {
      background: #355c19;
    }
  }
  .cremation-club-checkout-page .feature-feed {
    display: none;
  }
  .cremation-club-checkout-page>.container>.g-col-2 {
    display: none;
  }
  .cremation-club-checkout-page[data-step="2"] .checkout-feed .additional-info-block .g-col-2 {
    grid-column: span 2;
  }
  .cremation-club-checkout-page .checkout-feed {
    border-radius: 28px;
    background: #FFF;
    padding: 36px;
  }
  .cremation-club-checkout-page .checkout-feed .block-title {
    color: #303030;
    text-align: center;
    margin-bottom: 12px;
  }
  .cremation-club-checkout-page>.container {
    grid-template-columns: 1fr;
    max-width: 1040px;
    width: 100%;
    margin: auto;
    padding: 0;
  }
  .cremation-club-checkout-page .checkout-feed .block-sub-title {
    color: #303030;
    text-align: center;
    margin-bottom: 0;
    max-width: 680px;
    margin: auto;
  }
  .cremation-club-checkout-page {
    background-color: #314125;
    padding-top: 102px;
  }
  header.page-header .page-header__wrapper .page-header__container .header-content .btn-green {
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .cremation-club-checkout-page .checkout-feed .main-info-block {
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 36px 24px;
    padding-top: 44px;
  }
  header.page-header .page-header__wrapper .page-header__container {
    max-width: 1040px;
    width: 100%;
    margin: auto;
  }
  .lav-divider {
    margin: 36px -36px 0;
    line-height: 0;
  }
  .lav-divider img {
    width: 100%;
  }

  .cremation-club-checkout-page .checkout-feed .additional-info-block {
    padding: 0;
    padding-top: 32px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 36px 24px;
  }

  .cremation-club-checkout-page .checkout-feed .billing-plan-block {
    position: relative;
    padding: 0;
    padding-top: 32px;
    padding-bottom: 20px;
  }
  .cremation-club-checkout-page .checkout-feed .billing-plan-block:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: -36px;
    right: -36px;
    height: 16px;
    background: #ffff;
    border-radius: 0 0 28px 28px;
    transform: translateY(100%);
  }
  .cremation-club-checkout-page .checkout-feed .billing-plan-block .card.card-month {
    align-self: start;
  }
  .cremation-club-checkout-page .checkout-feed .billing-plan-block .card .cc-logo {
    margin-bottom: 30px;
  }
  .cremation-club-checkout-page .checkout-feed .billing-plan-block .card .castoro-16-22-s {
    margin-bottom: 8px;
  }
  .cremation-club-checkout-page .checkout-feed .billing-plan-block .card .best-value-block {
    display: none;
  }
  .cremation-club-checkout-page .checkout-feed .billing-plan-block .card:not(.card-month) {
    border: 5px solid #557F36;
    padding-top: 60px;
  }
  .cremation-club-checkout-page .checkout-feed .billing-plan-block .card:not(.card-month) .radio-block {
    top: 50px;
  }
  .cremation-club-checkout-page .checkout-feed .billing-plan-block .card:not(.card-month):before {
    content: 'BEST VALUE! SAVE 29%';
    color: #fff;
    background: #557F36;
    text-align: center;
    font-family: Castoro;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    position: absolute;
    left: -5px;
    right: -5px;
    top: -5px;
    z-index: 0;
    border-radius: 28px 28px 0 0;
    padding: 9px 5px 35px;
  }
  .cremation-club-checkout-page .checkout-feed .billing-plan-block .card:not(.card-month):after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 30px;
    background: #fff;
    height: 40px;
    border-radius: 28px 28px 0 0;
  }
  .cremation-club-checkout-page .checkout-feed .billing-plan-block .card:not(.card-month)>* {
    z-index: 1;
  }
  .cremation-club-checkout-page .checkout-feed .billing-plan-block .card {
    background: #fff;
  }

  .cremation-club-checkout-page[data-step='3'] .checkout-feed {
    padding-bottom: 0;
  }
  .lav-separate {
    background: #314125;
    margin: 0 -36px;
  }
  .lav-separate .lav-inner {
    border-radius: 28px;
    background: #fff;
    padding: 35px 35px;
  }

  .lav-separate p.m-t-60 {
    margin-top: 0!important;
  }
  .lav-summary {
    padding-top: 44px;
  }
  .lav-membership .add-second-info-block {
    padding: 0!important;
    margin-top: 32px!important;
  }
  .lav-membership .second-info-fields-block {
    padding: 0!important;
    margin-top: 32px!important;
  }
  .lav-membership__arrow {
    margin: 61px auto 45px;
    display: block;
  }
  .view-page[data-step="3"] .lav-separate .lav-inner > p, .lav-separate.lav-billing .lav-inner > p, .lav-separate.lav-terms .lav-inner > p {
    text-align: left!important;
    margin-left: 0 !important;
    max-width: 100% !important;
  }
  .lav-separate.lav-billing .lav-inner > p:first-child {
    margin-bottom: 10px;
  }
  .lav-separate.lav-terms .lav-inner > p:first-child {
    margin-bottom: 10px;
    color: #314125;
  }
  .cremation-club-checkout-page .checkout-feed .lav-terms .block__wrapper {
    margin-top: 32px;
    padding: 0;
    gap: 24px;
  }
  .cremation-club-checkout-page[data-step="4"] .checkout-feed .info-block .box.first {
    margin-top: 0;
  }
  .lav-billing__arrow-inner {
    display: block;
    margin: 8px auto;
  }
  .cremation-club-checkout-page .checkout-feed .order-body {
    padding: 0!important;
    margin-top: 32px;
  }
  .view-page[data-step="4"] .checkout-feed {
    padding: 0;
  }
  .view-page[data-step="4"] .lav-separate {
    margin: 0;
  }
  .cremation-club-checkout-page.view-page[data-step="4"] .checkout-feed .change-billing-date {
    padding: 0;
    background: none;
    color: #fff;
    gap: 10px;
  }
  .lav-billing {
    padding-top: 44px;
  }
  .cremation-club-checkout-page .checkout-feed .address-block .radio-block:last-child .stripe-address-element {
    height: auto;
  }
  .cremation-club-checkout-page[data-step="4"] .checkout-feed .change-billing-date p:first-child {
    color: #EBE6DA;
    font-family: Castoro;
    font-size: 26px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
  }
  .cremation-club-checkout-page[data-step="4"] .checkout-feed .change-billing-date p:last-child {
    color: #EBE6DA;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    max-width: 970px;
  }
  .lav-billing__arrow {
    display: block;
    margin: 44px auto;
  }
  .cremation-club-checkout-page .checkout-feed .address-block {
    margin-top: 32px;
    gap: 32px;
  }
  .cremation-club-checkout-page .checkout-feed .address-block .radio-block {
    border-radius: 28px;
    border: 1px solid #CDCBC3;
    background: #fff;
    padding: 30px 36px;
  }
  .cremation-club-checkout-page .checkout-feed #payment-form > p {
    display: none;
  }
  .lav-inner > .block-sub-title {
    color: #414143;
  }
  .lav-terms__arrow {
    display: block;
    margin: 0 auto;
    padding: 44px 0;
  }
  #payment-element {
    margin-top: 12px;
  }

  .view-page:not([data-step='1']) .lav-head {
    display: none;
  }
  .lav-head {
    text-align: center;
    padding-bottom: 24px;
  }
  .lav-head__title {
    color: #FFB078;
    font-family: Castoro;
    font-size: 44px;
    font-weight: 400;
    line-height: 54px;
    margin-top: 28px;
  }
  .lav-head__caption {
    color: #FFB078;
    font-family: Castoro;
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
    margin-top: 12px;
  }
  .lav-head__subcaption {
    color: #FFF;
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    margin-top: 28px;
  }
  .lav-head__highlight {
    color: #FFF;
    box-sizing: border-box;
    text-align: left;
    display: inline-flex;
    gap: 16px;
    max-width: 540px;
    margin: auto;
    align-items: center;
    font-family: Castoro;
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
    padding: 12px 68px;
    background: linear-gradient(90deg, #314125 0%, #3E5B29 10.58%, #68874E 75.96%, #314125 100%);
  }
  .lav-head__highlight img {
    flex-shrink: 0;
    width: 26px;
  }

  .view-page:not([data-step='1']) .lav-progress {
    display: block;
  }
  .lav-progress {
    display: none;
    text-align: center;
    margin-bottom: 24px;
  }
  .lav-progress__head {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
  }
  .lav-progress__back {
    color: #FFF;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    transition: .3s;
  }
  @media(hover:hover) {
    .lav-progress__back:hover {
      opacity: .7;
    }
  }
  .lav-progress__step {
    color: #FFF;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px;
  }
  .lav-progress__line {
    position: relative;
    border-radius: 111px;
    background: #212B19;
    width: 246px;
    height: 26px;
  }
  .lav-progress__line span {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    display: block;
    border-radius: 111px 0 0 111px;
    background-color: #557F36;
    transition: .5s;
  }
  .lav-progress__step-num {
    color: #fff;
  }
  .lav-progress__step-mark {
    color: #81A166;
  }
  .lav-progress__caption {
    color: #FFF;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    margin-top: 25px;
    max-width: 330px;
    width: 100%;
    margin-left: auto;
    margin-right: 330px;
  }

  .cremation-club-checkout-page .checkout-feed .buttons-container {
    display: none;
  }
  .lav-control {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 44px;
  }
  .lav-control__checkbox {
    color: #FFF;
    font-family: Castoro;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
  }
  .lav-control__checkbox input:checked~.checkmark {
    border: 1px solid #fff;
  }
  .lav-control:not([data-step='1']) .lav-control__checkbox {
    display: none;
  }
  .lav-control__btn {
    border-radius: 100px;
    background: #FFB078;
    padding: 24px 93px;
    color: #463B3B;
    font-size: 22px;
    line-height: 30px;
  }
  @media(hover:hover) {
    .lav-control__btn:hover {
      background: #f2ba92;
    }
  }
  .lav-control__back {
    display: none;
    align-items: center;
    gap: 12px;
    color: #FFF;
    font-size: 20px;
    font-weight: 600;
    line-height: 28px;
    cursor: pointer;
    transition: .3s;
  }
  .lav-control__back span {
    color: #FFF;
  }
  .lav-control:not([data-step='1']) .lav-control__back {
    display: inline-flex;
  }
  .lav-control__cancel {
    display: none;
    align-items: center;
    gap: 10px;
    color: #FFF;
    font-family: Castoro;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    order: 3;
    margin-top: -10px;
  }
  .lav-control__cancel svg {
    margin-top: -3px;
  }
  @media(hover:hover) {
    .lav-control__back:hover {
      opacity: .7;
    }
  }

  .lav-wrap {
    max-width: 1040px;
    width: 100%;
    margin: auto;
    padding-bottom: 64px;
    margin-top: 64px;
  }
  .lav-rated {
    background-color: #3E5B29;
    color: #fff;
    border-radius: 28px;
    border: 1px solid #557F36;
    overflow: hidden;
  }
  .lav-rated__head {
    display: flex;
    align-items: center;
    gap: 16px;
    background: #7DAC5A;
    padding: 0 136px;
  }
  .lav-rated__head-icon {
    line-height: 0;
    margin-top: -1px;
    margin-bottom: -1px;
  }
  .lav-rated__head-title {
    max-width: 473px;
    color: #FFF;
    font-family: Castoro;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
  }
  .lav-rated__block {
    padding: 44px 136px;
  }
  .lav-rated__block + .lav-rated__block {
    border-top: 1px solid #557F36;
  }

  .view-page:not([data-step='1']) .lav-works {
    display: none;
  }
  .lav-works {
    padding-top: 64px;
  }
  .lav-works__title {
    color: #FFF;
    font-family: Castoro;
    font-size: 44px;
    font-style: normal;
    font-weight: 400;
    line-height: 49px;
  }
  .lav-works__inner {
    display: flex;
    gap: 25px;
    margin-top: 33px;
  }
  .lav-works__arrow {
    line-height: 0;
    flex-shrink: 0;
    align-self: center;
  }
  .lav-works__block {
    position: relative;
    border-radius: 24px;
    background: rgba(212, 222, 205, 0.12);
    text-align: center;
    padding: 24px 34px;
    flex: 1;
  }
  .lav-works__block:first-child:before {
    content: '';
    position: absolute;
    left: -23px;
    top: -17px;
    width: 47px;
    height: 128px;
    background: url(${config.dir}/img/leaf-left.svg) center no-repeat;
    background-size: contain;
  }
  .lav-works__block:last-child:before {
    content: '';
    position: absolute;
    right: -20px;
    top: 20px;
    width: 51px;
    height: 129px;
    background: url(${config.dir}/img/leaf-right.svg) center no-repeat;
    background-size: contain;
  }
  .lav-works__subtitle {
    color: #FFF;
    font-family: Castoro;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 38px;
  }
  .lav-works__descr {
    color: #FFF;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    margin-top: 16px;
  }

  .lav-by__head {
    display: flex;
    align-items: center;
    gap: 32px;
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    text-transform: uppercase;
    margin-bottom: 38px;
  }
  .lav-by__text {
    color: #FFF;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
  }
  .lav-by__text + .lav-by__text {
    margin-top: 30px;
  }

  .lav-include {
    padding-bottom: 56px;
  }
  .view-page:not([data-step='1']) .lav-include__inner {

  }
  .lav-quote {
    display: flex;
    gap: 32px;
    border-radius: 24px;
    background: #557F36;
    padding: 24px 32px;
  }
  .lav-quote__author {
    text-align: center;
    line-height: 0;
  }
  .lav-quote > .lav-quote__author-name {
    display: none;
  }
  .lav-quote__author-name {
    margin: 10px 0;
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
  }
  .lav-quote__text {
    font-family: Castoro;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
  }
  .lav-include__title {
    font-family: Castoro;
    font-size: 44px;
    font-style: normal;
    font-weight: 400;
    line-height: 49px;
    margin-top: 44px;
  }
  .lav-include__list {
    margin-top: 32px;
    display: grid;
    gap: 32px;
  }
  .lav-include__item {
    display: flex;
    gap: 17px;
  }
  .lav-include__item-icon {
    line-height: 0;
    flex-shrink: 0;
  }
  .lav-include__item-title {
    font-family: Castoro;
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
  }
  .lav-include__item-descr {
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    margin-top: 8px;
  }
  
  .lav-trouble {
    border-radius: 24px;
    background: #FFFCF5;
    padding: 24px;
    margin-top: 44px;
    display: flex;
    gap: 16px;
  }
  .lav-trouble__title {
    display: flex;
    align-items: center;
    gap: 12px;
    color: var(--color-primary-black, #303030);
    font-family: Castoro;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
  }
  .lav-trouble__title img {
    flex-shrink: 0;
  }
  .lav-trouble__descr {
    color: var(--color-secondary-dark-grey, #414143);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    margin-top: 10px;
  }
  .lav-trouble__btn-wrap {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    gap: 16px;
    align-self: flex-end;
  }
  .lav-trouble__divider {
    color: var(--color-secondary-dark-grey, #414143);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
  .lav-by__head-logo {
    line-height: 0;
  }
  .lav-phone {
    border-radius: 16px;
    border: 1px solid #557F36;
    width: 50px;
    height: 50px;
    display: none;
    align-items: center;
    justify-content: center;
  }
  .lav-control__back span + span {
    display: none;
  }
  .lav-payment .block-title>span {
    display: block;
    color: #557F36;
    font-family: Castoro;
    font-size: 26px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    margin-top: 4px;
  }
  .lav-payment .block-title span span {
    color: #557F36;
    font-family: Castoro;
    font-style: normal;
    font-weight: 400;
    margin-top: 4px;
    font-size: 22px;
    line-height: 28px;
  }
  .view-page[data-step='4'] .check-field.error .checkmark {
    border-radius: 4px;
    border: 2px solid #DF1B41;
    background: #FAF4F3;
  }
  .cremation-club-checkout-page .advantages-list .item:first-child {
    display: none;
  }
  .cremation-club-checkout-page .advantages-list .container {
    justify-content: space-evenly;
  }
  @media(max-width: 1999.98px) {
    .cremation-club-checkout-page .steps-progress {
      display: none !important;
    }
  }
  @media(max-width: 768px) {
    .cremation-club-checkout-page .advantages-list .container {
      justify-content: flex-start;
    }
    .lav-control:not([data-step='4']) .lav-control__cancel {
      display: flex;
    }
    .lav-head__title {
      font-size: 32px;
      line-height: 44px;
      margin-top: 18px;
    }
    header.page-header .page-header__wrapper .page-header__container .header-content {
      display: none;
    }
    .lav-phone {
      display: flex;
    }
    .lav-head__title {
      max-width: 240px;
      margin-left: auto;
      margin-right: auto;
    }
    .lav-rated__head-title {
      font-size: 16px;
      line-height: 24px;
    }
    .lav-head__caption {
      font-size: 20px;
      line-height: 28px;
      margin-top: 8px;
    }
    .lav-head__subcaption {
      font-size: 16px;
      line-height: 24px;
      margin-top: 16px;
    }
    .lav-head {
      padding-bottom: 12px;
    }
    .lav-head__highlight {
      font-size: 16px;
      line-height: 24px;
      padding: 12px 24px;
    }
    .cremation-club-checkout-page .checkout-feed .block-title {
      font-size: 26px;
      line-height: 34px;
      margin: 0 0 8px;
    }
    .cremation-club-checkout-page .checkout-feed .block-sub-title {
      max-width: 260px;
      color: #414143;
    }
    .cremation-club-checkout-page[data-step="2"] .checkout-feed .block-sub-title {
      max-width: 280px;
    }
    .cremation-club-checkout-page .checkout-feed .additional-info-block {
      padding-top: 24px;
      grid-template-columns: 1fr;
      gap: 32px;
    }
    .cremation-club-checkout-page[data-step="2"] .checkout-feed .additional-info-block .g-col-2 {
      grid-column: span 1;
    }
    .lav-divider {
      margin-top: 25px;
      margin-left: -24px;
      margin-right: -24px;
    }
    .cremation-club-checkout-page .checkout-feed {
      padding: 24px;
    }
    .cremation-club-checkout-page>.container {
      gap: 0;
    }
    .lav-control {
      margin-top: 32px;
      display: block;
      padding: 0 24px;
      display: flex;
      flex-flow: column;
      gap: 28px;
    }
    .lav-control__btn {
      padding: 16px 60px;
      font-size: 20px;
      line-height: 38px;
      width: 100%;
      box-sizing: border-box;
    }
    .cremation-club-checkout-page .checkout-feed .main-info-block {
      padding-top: 25px;
      grid-template-columns: 1fr;
      gap: 32px;
    }
    .lav-rated {
      border-radius: 0;
    }
    .lav-rated__head {
      padding: 0 24px;
    }
    .lav-rated__block {
      padding: 0 24px;
    }
    .lav-works__title {
      font-size: 32px;
      line-height: 44px;
      text-align: center;
    }
    .lav-works {
      padding-top: 33px;
    }
    .lav-works__inner {
      flex-flow: column;
    }
    .lav-works__block {
      padding: 24px 12px;
    }
    .lav-works__arrow {
      transform: rotate(90deg);
    }
    .lav-rated__block + .lav-rated__block {
      border-top: 0;
      padding-top: 33px;
    }
    .input-field-container .castoro-20-28-s {
      font-size: 16px;
      line-height: 22px;
    }
    .lav-quote {
      flex-flow: column;
      border-radius: 24px;
      background: rgba(0, 0, 0, 0.12);
      padding: 24px 16px;
      gap: 16px;
    }
    .lav-quote__text {
      text-align: center;
    }
    .lav-quote__author .lav-quote__author-name {
      display: none;
    }
    .lav-quote > .lav-quote__author-name {
      text-align: center;
      display: block;
      margin: 0;
    }
    .lav-quote__author {
      display: flex;
      flex-flow: column;
      align-items: center;
    }
    .lav-quote__author-stars {
      margin-top: 10px;
    }
    .lav-by__inner {
      border-radius: 24px;
      background: #365024;
      padding: 16px;
    }
    .lav-by__head {
      gap: 16px;
    }
    .lav-works__block:first-child:before {
      left: -15px;
      top: -14px;
    }
    .lav-by__head-logo {
      border-radius: 12px;
      background: #3E5B29;
      padding: 6px 12px;
      height: 56px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .lav-by__head-logo img {
      max-width: 100%;
    }
    .lav-include__title {
      margin-top: 57px;
      font-size: 32px;
      line-height: 44px;
      text-align: center;
    }
    .lav-include__list {
      gap: 40px;
      margin-top: 34px;
    }
    .lav-include__item-descr {
      font-size: 16px;
      line-height: 24px;
      margin-top: 4px;
    }
    .lav-include__item {
      gap: 8px;
    }
    .lav-include__inner {
      padding-bottom: 24px;
    }
    .lav-trouble {
      flex-flow: column;
      margin-top: 33px;
    }
    .lav-trouble__title {
      gap: 20px;
    }
    .lav-trouble__descr {
      margin-top: 16px;
    }
    .lav-trouble__btn-wrap {
      display: block;
      width: 100%;
      text-align: center;
    }
    .lav-trouble__divider {
      margin-bottom: 16px;
    }
    .lav-include {
      padding-bottom: 33px;
    }
    .lav-rated {
      border: none;
    }
    .lav-wrap {
      padding-bottom: 0;
      margin-top: 54px;
    }
    .view-page:not([data-step='1']) .lav-control__back {
      border-radius: 38px;
      border: 1px solid #557F36;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 70px;
      gap: 10px;
      order: 1;
      width: 100%;
      margin-top: -12px;
    }
    .cremation-club-checkout-page[data-step='3'] .checkout-feed .block-sub-title {
      max-width: 100%;
    }
    .lav-control__back span {
      display: none;
    }
    .lav-control__back span + span {
      display: block;
    }
    .lav-progress__caption {
      margin-left: auto;
      margin-right: auto;
    }
    .lav-progress__line {
      width: 177px;
      height: 20px;
    }
    .lav-progress__step {
      font-size: 18px;
      line-height: 28px;
    }
    .lav-progress__head {
      gap: 10px;
    }
    .cremation-club-checkout-page {
      padding-top: 92px;
    }
    .lav-progress {
      margin-bottom: 16px;
    }
    .lav-progress__back {
      font-size: 18px;
      line-height: 28px;
    }
    .cremation-club-checkout-page .checkout-feed .block-title.m-t-60 {
      margin-top: 0!important;
    }
    .cremation-club-checkout-page .checkout-feed .order-body {
      margin-top: 24px;
    }
    .lav-separate {
      margin-left: -24px;
      margin-right: -24px;
    }
    .lav-summary {
      padding-top: 32px;
    }
    .lav-separate .lav-inner {
      padding: 24px;
    }
    .lav-membership .add-second-info-block {
      margin-top: 44px!important;
    }
    .lav-membership .block-title {
      margin-bottom: 12px!important;
    }
    .lav-membership .open-sans-20-28-s {
      text-align: center;
      margin: 0 -4px;
    }
    .lav-membership .castoro-16-22-s {
      margin-bottom: 16px;
    }
    .cremation-club-checkout-page .checkout-feed .billing-plan-block .card:not(.card-month):before {
      border-radius: 20px 20px 0 0;
    }
    .cremation-club-checkout-page .checkout-feed .billing-plan-block .card:not(.card-month):after {
      border-radius: 16px 16px 0 0;
    }
    .cremation-club-checkout-page .checkout-feed .billing-plan-block .card.card-month {
      border: 5px solid #aca99d;
    }
    .lav-membership__arrow {
      margin: 49px auto 33px;
    }
    .cremation-club-checkout-page .checkout-feed .billing-plan-block:before {
      left: -24px;
      right: -24px;
    }
    #payment-element {
      margin-top: 24px;
      margin-left: -24px;
      margin-right: -24px;
    }
    .lav-payment .lav-inner {
      padding-bottom: 1px;
    }
    .lav-billing__arrow {
      margin: 33px auto;
    }
    .cremation-club-checkout-page[data-step="4"] .checkout-feed .change-billing-date p:last-child {
      font-size: 14px;
      line-height: 20px;
    }
    .cremation-club-checkout-page.view-page[data-step="4"] .checkout-feed .change-billing-date {
      gap: 17px;
      padding: 0 24px;
    }
    .cremation-club-checkout-page[data-step="4"] .checkout-feed .change-billing-date p:first-child {
      font-size: 24px;
      line-height: 32px;
    }
    .lav-billing {
      padding-top: 33px;
    }
    .cremation-club-checkout-page .checkout-feed .address-block {
      margin-top: 24px;
      gap: 20px;
    }
    .cremation-club-checkout-page .checkout-feed .address-block .radio-block {
      border-radius: 38px;
      border: 1px solid #CDCBC3;
      padding: 17px 24px;
    }
    .cremation-club-checkout-page .checkout-feed .address-block .radio-block .radio-button {
      font-size: 20px;
      font-weight: 400;
    }
    .lav-terms__arrow {
      padding: 32px 0;
    }
    .cremation-club-checkout-page .checkout-feed .lav-terms .block__wrapper {
      gap: 12px;
    }
    .lav-billing__arrow-inner {
      margin: 28px auto;
    }
    .lav-divider {
      display: flex;
      justify-content: center;
      overflow: hidden;
    }
    .lav-divider img {
      width: 200%;
    }
  }

`

const stylesEl = document.createElement('style')
stylesEl.classList.add('exp-styles')
stylesEl.innerHTML = styles

// *** Logic *** //
initExp()

async function initExp() {
  await waitFor(() => document.head && document.body, false, { ms: 20 })

  document.head.appendChild(stylesEl)

  console.debug('** InitExp **')

  _$('.cremation-club-checkout-page > .container').insertAdjacentHTML(
    'afterend',
    '<div class="lav-wrap"></div>'
  )

  _$('.page-header__container').insertAdjacentHTML(
    'beforeend',
    `<a href="tel:8888429009" class="lav-phone">${getSvg('phone')}</a>`
  )

  _$('.cremation-club-checkout-page').dataset.step = 1

  addHead()
  handleForm()
  addControl()
  addRatedblock()
  initObserve()
}

function initObserve() {
  const pushState = history.pushState
  history.pushState = function () {
    pushState.apply(history, arguments)
    window.dispatchEvent(new Event('pushstate'))
  }

  console.log('initObserve')

  window.addEventListener('pushstate', () => {
    const step = location.href.match(/step-(\d+)/)

    setTimeout(() => {
      handleStep(step ? step[1] : 1)
    }, 200)
  })
}

function handleStep(step) {
  if (step === '2') {
    _$('.lav-control__back span').textContent = 'Back to Personal Information'
  } else if (step === '3') {
    _$('.lav-control__back span').textContent = 'Back to your Address'
  } else if (step === '4') {
    _$('.lav-control__back span').textContent = 'Back to Membership Summary'
  }

  if (step === '4') {
    _$('.lav-control__btn').textContent = 'JOIN NOW'
    _$('.lav-progress__caption').innerHTML =
      'Just one step left to secure your $99&nbsp;cremation plan!'
  } else {
    _$('.lav-control__btn').textContent = 'Save & Continue'
    _$('.lav-progress__caption').textContent =
      'Complete application in just 4 steps'
  }

  _$('.lav-progress__line span').style.width = `${(parseInt(step) - 1) * 30}%`
  _$('.lav-progress__step-num').textContent = step
  _$('.lav-control').dataset.step = step
  _$('.cremation-club-checkout-page').dataset.step = step

  if (step === '3') {
    if (!_$('.lav-membership')) {
      _$(
        '.cremation-club-checkout-page .checkout-feed .billing-plan-block'
      ).insertAdjacentHTML(
        'afterend',
        `<div class='lav-membership lav-separate'>
          <img class='lav-membership__arrow' src="${config.dir}/img/big-arrow-down.svg" />
          <div class='lav-inner'></div>
        </div>`
      )

      _$('.lav-membership + p')
      _$('.lav-membership .lav-inner').insertAdjacentElement(
        'beforeend',
        _$('.lav-membership + p')
      )
      _$('.lav-membership .lav-inner').insertAdjacentElement(
        'beforeend',
        _$('.lav-membership + p')
      )
      _$('.lav-membership .lav-inner').insertAdjacentElement(
        'beforeend',
        _$('.lav-membership + div')
      )
    }

    if (!_$('.lav-summary')) {
      _$('.lav-membership').insertAdjacentHTML(
        'afterend',
        `<div class='lav-summary lav-separate'>
          <div class='lav-inner'></div>
        </div>`
      )

      _$('.lav-summary + p')
      _$('.lav-summary .lav-inner').insertAdjacentElement(
        'beforeend',
        _$('.lav-summary + p')
      )
      _$('.lav-summary .lav-inner').insertAdjacentElement(
        'beforeend',
        _$('.lav-summary + p')
      )
      _$('.lav-summary .lav-inner').insertAdjacentElement(
        'beforeend',
        _$('.lav-summary + div')
      )
    }
  }

  if (step === '4') {
    if (!_$('.lav-payment')) {
      _$('#payment-form').insertAdjacentHTML(
        'beforeend',
        `<div class='lav-payment lav-separate'>
          <div class='lav-inner'></div>
        </div>`
      )

      _$('.lav-payment .lav-inner').insertAdjacentElement(
        'beforeend',
        _$('.cremation-club-checkout-page .checkout-feed .block-title')
      )
      _$('.lav-payment .lav-inner').insertAdjacentElement(
        'beforeend',
        _$('.cremation-club-checkout-page .checkout-feed .block-sub-title')
      )
      _$('.lav-payment .lav-inner').insertAdjacentElement(
        'beforeend',
        _$('#payment-element')
      )

      _$('.lav-payment .lav-inner > .block-sub-title').innerText =
        'Choose a billing plan that works best for you. Opt for a monthly subscription for flexibility or save more with an annual plan.'

      const text = _$('.lav-payment .block-title').innerText
      const match = text.match(/\(([^)]+)\)/)

      if (match && match[1]) {
        const isYear = match[1].includes('Annual:')
        _$('.lav-payment .block-title').innerHTML = match.input.replace(
          match[0],
          `<span>${match[1]
            .replace('Annual:', '<span>Annual:</span>')
            .replace('Monthly:', '<span>Monthly:</span>')}${
            isYear ? '/year' : '/month'
          }</span>`
        )
      }
    }

    if (!_$('.lav-billing')) {
      _$('#payment-form').insertAdjacentHTML(
        'beforeend',
        `<div class='lav-billing lav-separate'>
          <img class='lav-billing__arrow' src="${config.dir}/img/big-arrow-down.svg" />
          <div class='lav-inner'></div>
        </div>`
      )

      _$('.lav-billing').insertAdjacentElement(
        'afterbegin',
        _$('.cremation-club-checkout-page .checkout-feed .change-billing-date')
      )
      _$('.lav-billing .lav-inner').insertAdjacentElement(
        'beforeend',
        _$('.cremation-club-checkout-page .checkout-feed .info-block + p')
      )
      _$('.lav-billing .lav-inner').insertAdjacentElement(
        'beforeend',
        _$('.cremation-club-checkout-page .checkout-feed .info-block + p')
      )
      _$('.lav-billing .lav-inner').insertAdjacentElement(
        'beforeend',
        _$('.cremation-club-checkout-page .checkout-feed .address-block')
      )
    }

    if (!_$('.lav-terms')) {
      _$('#payment-form').insertAdjacentHTML(
        'beforeend',
        `<div class='lav-terms lav-separate'>
          <img class='lav-terms__arrow' src="${config.dir}/img/big-arrow-down.svg" />
          <div class='lav-inner'></div>
        </div>`
      )

      _$('.lav-terms .lav-inner').insertAdjacentElement(
        'beforeend',
        _$(
          '.cremation-club-checkout-page .checkout-feed #payment-form p + p + p'
        )
      )
      _$('.lav-terms .lav-inner').insertAdjacentElement(
        'beforeend',
        _$(
          '.cremation-club-checkout-page .checkout-feed #payment-form p + p + p'
        )
      )
      _$('.lav-terms .lav-inner').insertAdjacentElement(
        'beforeend',
        _$(
          '.cremation-club-checkout-page .checkout-feed #payment-form p + p + div'
        )
      )

      _$(
        '.cremation-club-checkout-page[data-step="4"] .checkout-feed .info-block .box.first'
      ).insertAdjacentHTML(
        'beforebegin',
        `<img class='lav-billing__arrow-inner' src="${config.dir}/img/big-arrow-down.svg" />`
      )
    }
  }

  setTimeout(() => {
    handleForm()
  }, 200)
}

function addHead() {
  const markup = /* html */ `
    <div class='lav-head'>
      <div class='lav-head__highlight'>
        <img src="${config.dir}/img/heart.png" />
        Remove the financial and emotional <br/> burden on your loved ones
      </div>
      <div class='lav-head__title'>Join&nbsp;the Cremation&nbsp;Club</div>
      <div class='lav-head__caption'>To secure your $99 cremation price</div>
      <div class='lav-head__subcaption'>Complete  registration  in  just  4  steps</div>
    </div>

    <div class='lav-progress'>
      <div class='lav-progress__head'>
        <div class='lav-progress__back'>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="22" viewBox="0 0 14 22" fill="none">
            <path d="M3.08476 10.3845C2.92712 10.5565 2.85 10.7798 2.85 11C2.85 11.2203 2.92712 11.4436 3.08476 11.6156L9.75136 18.8883C9.75137 18.8883 9.75138 18.8883 9.75139 18.8883C10.0712 19.2374 10.5953 19.2371 10.9152 18.8883C11.2283 18.547 11.2283 17.9987 10.9152 17.6572L4.81281 11L10.9152 4.34289C10.9152 4.34288 10.9152 4.34287 10.9152 4.34286C11.2283 4.00144 11.228 3.45326 10.9152 3.11181C10.5954 2.76271 10.0713 2.76276 9.75139 3.11178L3.08476 10.3845Z" fill="white" stroke="white" stroke-width="0.3"/>
          </svg>
          Back
        </div>
        <div class='lav-progress__line'><span style='width: 30%'></span></div>
        <div class='lav-progress__step'>
          Step 
          <span class='lav-progress__step-num'>2</span>
          <span class='lav-progress__step-mark'>of 4</span>
        </div>
      </div>
      <div class='lav-progress__caption'>Complete  registration  in  just  4  steps</div>
    </div>
  `

  _$('.checkout-feed').insertAdjacentHTML('beforebegin', markup)

  _$(
    'header.page-header .page-header__wrapper .page-header__container .logo_wrapper img'
  ).src = `${config.dir}/img/logo.svg`

  _$('.lav-progress__back').addEventListener('click', function () {
    _$(
      '.cremation-club-checkout-page .checkout-feed .buttons-container .btn-back'
    ).click()
  })
}

function addControl() {
  const markup = /* html */ `
    <div class='lav-control' data-step='1'>
      <label class="check-field lav-control__checkbox">
        I agree to receive SMS notification and&nbsp;updates.
        <input type="checkbox" checked='checked'>
        <span class="checkmark"></span>
      </label>
      <div class='lav-control__back'>
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
          <path d="M5 11.4915C5 11.2358 5.09775 10.9798 5.293 10.7845L15.2929 0.784517C15.6837 0.393768 16.3164 0.393768 16.7069 0.784517C17.0974 1.17527 17.0977 1.80802 16.7069 2.19851L7.41399 11.4915L16.7069 20.7845C17.0977 21.1752 17.0977 21.808 16.7069 22.1985C16.3162 22.589 15.6834 22.5892 15.2929 22.1985L5.293 12.1985C5.09775 12.0033 5 11.7473 5 11.4915Z" fill="white"/>
        </svg>
        <span>Back to Personal Information</span>
        <span>Back</span>
      </div>
      <div class='lav-control__btn lav-btn'>Save & Continue</div>
      <div class='lav-control__cancel'>
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 16.5C10.0825 16.5 11.6294 16.0307 12.9451 15.1514C14.2608 14.2721 15.2862 13.0223 15.8916 11.5602C16.4969 10.0981 16.655 8.48928 16.3459 6.93729C16.0368 5.38529 15.2743 3.95984 14.1549 2.84124C13.0356 1.72263 11.6096 0.961132 10.0574 0.653062C8.5052 0.344992 6.89649 0.504191 5.43478 1.11052C3.97307 1.71685 2.72402 2.74308 1.84562 4.05938C0.967216 5.37569 0.498931 6.92293 0.500002 8.50541C0.501437 10.6262 1.34492 12.6596 2.84506 14.1588C4.34519 15.6579 6.37921 16.5 8.5 16.5ZM14.3349 7.09811C14.6428 8.36658 14.5284 9.70086 14.0091 10.8984C13.4899 12.096 12.5941 13.0914 11.4577 13.7337C10.3214 14.376 9.00652 14.63 7.71272 14.4571C6.41892 14.2843 5.21683 13.6941 4.2889 12.776L14.3349 7.09811ZM8.5 2.4973C9.49166 2.49976 10.4672 2.7483 11.3392 3.22065C12.2111 3.69299 12.9522 4.37436 13.4959 5.20366L3.05481 11.0169C2.69299 10.2275 2.50825 9.36841 2.51353 8.5C2.51353 6.9108 3.14372 5.38644 4.26594 4.26118C5.38815 3.13592 6.9108 2.5016 8.5 2.4973Z" fill="white"/>
        </svg>
        Cancel Anytime
      </div>
    </div>
  `

  _$('.checkout-feed').insertAdjacentHTML('afterend', markup)

  _$('.lav-control__checkbox input').addEventListener('change', function () {
    _$(
      '.cremation-club-checkout-page .checkout-feed .buttons-container .check-field'
    ).click()
  })

  _$('.lav-control__btn').addEventListener('click', function () {
    if (_$('.view-page').dataset.step == '4') {
      pushDataLayer('exp_steps_click_03', 'Join now', 'click', 'Step 4')
    } else {
      pushDataLayer(
        'exp_steps_click_01',
        'Save & Continue',
        'click',
        `Step ${_$('.view-page').dataset.step}`
      )
    }

    _$(
      '.cremation-club-checkout-page .checkout-feed .buttons-container .btn-n'
    ).click()
  })

  _$('.lav-control__back').addEventListener('click', function () {
    _$(
      '.cremation-club-checkout-page .checkout-feed .buttons-container .btn-back'
    ).click()
  })
}

function handleForm() {
  // _$(
  //   '.cremation-club-checkout-page .checkout-feed .main-info-block'
  // )?.insertAdjacentHTML(
  //   'beforebegin',
  //   `<div class='lav-divider'><img src="${config.dir}/img/big-arrow.svg" /></div>`
  // )

  // _$(
  //   '.cremation-club-checkout-page .checkout-feed .additional-info-block'
  // )?.insertAdjacentHTML(
  //   'beforebegin',
  //   `<div class='lav-divider'><img src="${config.dir}/img/big-arrow.svg" /></div>`
  // )

  if (_$('.cremation-club-checkout-page').dataset.step !== '4') {
    _$(
      '.cremation-club-checkout-page .checkout-feed .block__wrapper'
    )?.insertAdjacentHTML(
      'beforebegin',
      `<div class='lav-divider'><img src="${config.dir}/img/big-arrow.svg" /></div>`
    )
  } else {
    _$('#payment-element')?.insertAdjacentHTML(
      'beforebegin',
      `<div class='lav-divider'><img src="${config.dir}/img/big-arrow.svg" /></div>`
    )
  }
}

function addRatedblock() {
  const markup = /* html */ `
    <div class="lav-rated">
      <div class="lav-rated__head">
        <div class="lav-rated__head-icon">
          <img src="${config.dir}/img/bbb.svg" alt="BBB logo">
        </div>
        <div class="lav-rated__head-title">
          Cremation Club is proudly A+ rated by Better Business Bureau
        </div>
      </div>

      <div class="lav-rated__block lav-works">
        <div class="lav-rated__title lav-works__title">How it works?</div>
        <div class="lav-works__inner">
          <div class="lav-works__block">
            <div class="lav-works__subtitle">Today</div>
            <div class="lav-works__descr">Membership begins<br/>after purchasing monthly or<br/>annual subscription</div>
          </div>

          <div class="lav-works__arrow">
            <img src="${config.dir}/img/dot-arrow.svg" alt="Arrow">
          </div>

          <div class="lav-works__block">
            <div class="lav-works__subtitle">12 month later</div>
            <div class="lav-works__descr">Member become eligible<br/>for $99 cremation<br/>service</div>
          </div>
        </div>
      </div>

      <div class="lav-rated__block lav-by">
        <div class='lav-by__inner'>
          <div class='lav-by__head'>
            <div class='lav-by__head-logo'>
              <img width='187' src="${config.dir}/img/cremation-logo.svg" >
            </div>
            <div>By</div>
            <div class='lav-by__head-logo'>
              <img width='146' src="${config.dir}/img/funeralocity-logo.png" >
            </div>
          </div>
          <div class='lav-by__text'>Cremation Club is created by the team behind nation’s most trusted funeral home comparison site - Funeralocity.</div>
          <div class='lav-by__text'>We use group purchasing power to make cremation simple, nationwide, and just $99 when the time comes.</div>
        </div>
      </div>

      <div class="lav-rated__block lav-include">
        <div class='lav-quote'>
          <div class='lav-quote__author'>
            <img class='lav-quote__author-logo' src="${config.dir}/img/quote-logo.svg">
            <div class='lav-quote__author-name'>Jackie</div>
            <img class='lav-quote__author-stars' src="${config.dir}/img/stars.svg" alt="Quote">
          </div>
          <div class='lav-quote__text'>I was looking into funeral plans for my husband and me. The $13,99 monthly subscription offering a $99 cremation price seemed too good to be true with today’s prices. But after some thought and research, I gave it a try — and I’m glad I did. It’s the real deal, and it gives me peace of mind knowing we’re covered.</div>
          <div class='lav-quote__author-name'>Jackie</div>
        </div>

        <div class='lav-include__inner'>
          <div class='lav-include__title'>What’s Included in Your Membership?</div>

          <div class='lav-include__list'>
            <div class='lav-include__item'>
              <div class='lav-include__item-icon'>
                <img src="${config.dir}/img/include-1.svg">
              </div>
              <div class='lav-include__item-info'>
                <div class='lav-include__item-title'>
                  $99 Cremation Service:
                </div>
                <div class='lav-include__item-descr'>
                  Covers the entire process from transportation to the crematory, processing, returning the urn to family.
                </div>
              </div>
            </div>

            <div class='lav-include__item'>
              <div class='lav-include__item-icon'>
                <img src="${config.dir}/img/include-2.svg">
              </div>
              <div class='lav-include__item-info'>
                <div class='lav-include__item-title'>
                  Nationwide Coverage:
                </div>
                <div class='lav-include__item-descr'>
                  With an extensive network of tens of thousands of funeral homes, our Cremation Club covers you anywhere in the contiguous U.S. You can rest easy knowing that no matter where life takes you, your final arrangements are in good hands.
                </div>
              </div>
            </div>

            <div class='lav-include__item'>
              <div class='lav-include__item-icon'>
                <img src="${config.dir}/img/include-3.svg">
              </div>
              <div class='lav-include__item-info'>
                <div class='lav-include__item-title'>
                  Free Online Obituary: 
                </div>
                <div class='lav-include__item-descr'>
                  Receive a free online obituary, a $99 savings.
                </div>
              </div>
            </div>

            <div class='lav-include__item'>
              <div class='lav-include__item-icon'>
                <img src="${config.dir}/img/include-4.svg">
              </div>
              <div class='lav-include__item-info'>
                <div class='lav-include__item-title'>
                  Discounts on Trusts and Wills:
                </div>
                <div class='lav-include__item-descr'>
                  $50 discount on Trust & Will services to help with estate planning.
                </div>
              </div>
            </div>

            <div class='lav-include__item'>
              <div class='lav-include__item-icon'>
                <img src="${config.dir}/img/include-5.svg">
              </div>
              <div class='lav-include__item-info'>
                <div class='lav-include__item-title'>
                  Concierge Service for Estate Closure:
                </div>
                <div class='lav-include__item-descr'>
                  $1000 discount on estate discovery and closure.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class='lav-trouble'>
          <div class='lav-trouble__info'>
            <div class='lav-trouble__title'>
              <img src="${config.dir}/img/trouble.svg">
              Having Trouble?
            </div>
            <div class='lav-trouble__descr'>
              Please contact us for assistance at 1-888-842-9009 between the hours of 8:00 AM - 5:00 PM (ET) Monday-Friday.
            </div>
          </div>
          <div class='lav-trouble__btn-wrap'>
            <div class='lav-trouble__divider'>OR</div>
            <div class='lav-trouble__btn lav-btn'>Start live Chat</div>
          </div>
        </div>
      </div>
    </div>
  `

  _$('.lav-wrap').insertAdjacentHTML('beforeend', markup)

  _$('.lav-trouble__btn').addEventListener('click', function () {
    pushDataLayer(
      'exp_steps_click_02',
      'Start live Chat',
      'click',
      `Step ${_$('.view-page').dataset.step}`
    )
    leadConnector.chatWidget.openWidget()
  })

  visibilityEvent('.lav-trouble', () => {
    pushDataLayer(
      'exp_steps_view_03',
      'Having trouble',
      'view',
      `Step ${_$('.view-page').dataset.step}`
    )
  })

  visibilityEvent('.lav-works', () => {
    pushDataLayer('exp_steps_view_01', 'How it works', 'view', 'How it works')
  })

  visibilityEvent('.lav-quote', () => {
    pushDataLayer(
      'exp_steps_view_02',
      'Review',
      'view',
      `Step ${_$('.view-page').dataset.step}`
    )
  })
}

// *** Utils *** //
function initModal() {
  class Modal {
    static list = []
    constructor(name, html) {
      if (!_$('.lav-modal')) {
        this.constructor.init()
      }

      if (this.constructor.list.find((item) => item.name === name)) {
        console.warn('Modal with this name already exists')
        return
      }

      this.el = document.createElement('div')
      this.el.classList.add('lav-modal__inner', name)
      this.name = name
      this.el.innerHTML = html

      _$('.lav-modal').insertAdjacentElement('beforeend', this.el)

      this.constructor.list.push(this)
    }

    static init() {
      document.body.insertAdjacentHTML(
        'beforeend',
        "<div class='lav-modal'></div>"
      )

      document.addEventListener('click', (e) => {
        if (
          e.target.classList.contains('lav-modal') ||
          e.target.closest('.lav-modal__close')
        )
          this.close()

        if (e.target.dataset.modal) {
          this.open(e.target.dataset.modal)
        } else if (e.target.closest('[data-modal]')) {
          this.open(e.target.closest('[data-modal]').dataset.modal)
        }
      })

      this.addStyles()
    }

    static open(modalName, cb) {
      document.body.classList.add('lav-modal-open')

      if (_$('.lav-modal__inner.active')) {
        _$('.lav-modal__inner.active').classList.remove('active')
      }

      _$(modalName).classList.add('active')

      if (typeof cb === 'function') cb()

      setTimeout(() => {
        _$('.lav-modal').classList.add('active')
      }, 100)
    }

    static close(cb) {
      document.body.classList.remove('lav-modal-open')

      _$('.lav-modal')?.classList.remove('active')

      if (typeof cb === 'function') cb()

      setTimeout(() => {
        _$('.lav-modal__inner.active')?.classList.remove('active')
      }, 400)
    }

    static addStyles() {
      const styles = /* css */ `
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
        line-height: 0;
      }
      [data-modal] {
        cursor: pointer;
      }
      @media(hover:hover) {
        .lav-modal__close:hover {
          opacity: 0.5;
        }
      }
      .lav-modal-open {
        overflow: hidden;
      }
    `

      const stylesEl = document.createElement('style')
      stylesEl.classList.add('exp-modal')
      stylesEl.innerHTML = styles
      document.head.appendChild(stylesEl)
    }
  }

  window.Modal = Modal
}
// *** HELPERS *** //

// Waiting for loading by condition
async function waitFor(condition, cb = false, customConfig = {}) {
  const config = {
    ms: 500, // repeat each 0.5 second if condition is false
    limit: 10, // limit in second seconds

    ...customConfig
  }

  if (typeof condition === 'function') {
    if (condition()) {
      if (typeof cb === 'function') cb()
      return
    }

    return new Promise((resolve) => {
      let limit = config.limit * 1000
      const interval = setInterval(function () {
        if (condition() || limit <= 0) {
          clearInterval(interval)
          if (limit > 0 && typeof cb === 'function') cb()
          resolve()
        }
        limit -= config.ms
      }, config.ms)
    })
  }

  if (condition.startsWith('.') || condition.startsWith('#')) {
    if (_$(condition)) {
      if (typeof cb === 'function') cb(_$(condition))
      return
    }

    return new Promise((resolve) => {
      const observer = new MutationObserver((mutations, observer) => {
        if (_$(condition)) {
          if (typeof cb === 'function') cb(_$(condition))
          observer.disconnect()
          resolve()
        }
      })

      observer.observe(document, { childList: true, subtree: true })
    })
  }
}

// Mutation Observer
function initMutation(observeEl = document.body, cbAdded, cbRemoved) {
  const el = typeof observeEl === 'string' ? _$(observeEl) : observeEl

  if (!el) return

  let observer = new MutationObserver((mutations, observer) => {
    for (let mutation of mutations) {
      if (typeof cbAdded === 'function') {
        for (let node of mutation.addedNodes) {
          if (!(node instanceof HTMLElement)) continue
          cbAdded(node, observer)
        }
      }

      if (typeof cbRemoved === 'function') {
        for (let node of mutation.removedNodes) {
          if (!(node instanceof HTMLElement)) continue
          cbRemoved(node, observer)
        }
      }
    }
  })

  observer.observe(el, { childList: true, subtree: true })

  return observer
}

// Intersection Observer
function initIntersection(observeEl, cb, customConfig) {
  const el = typeof observeEl === 'string' ? _$(observeEl) : observeEl

  if (!el || typeof cb !== 'function') return

  const config = {
    root: null,
    threshold: 0.3, // 0 - 1 | A threshold of 1.0 means that when 100% of the target is visible within the element specified by the root option, the callback is invoked.
    ...customConfig
  }

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      cb(entry, observer)
    })
  }, config)

  observer.observe(el)

  return observer
}

function focusTimeEvent(el, cb, viewElementProcent = 0.1) {
  let entryTime = 0
  initIntersection(
    el,
    ({ isIntersecting, time }) => {
      if (isIntersecting) {
        entryTime = time
      } else if (entryTime) {
        const diffTime = +((time - entryTime) / 1000).toFixed(1)
        cb(diffTime + 's')
        entryTime = 0
      }
    },
    { threshold: viewElementProcent }
  )
}

function visibilityEvent(el, cb, customConfig = {}) {
  const config = {
    threshold: 0.3,
    ...customConfig,
    timer: null
  }
  initIntersection(
    el,
    ({ isIntersecting, target }, observer) => {
      // console.log(target, isIntersecting);
      if (isIntersecting) {
        config.timer = setTimeout(() => {
          if (isElementInViewport(target)) {
            cb()
            observer.disconnect()
          }
        }, 3000)
      } else {
        clearTimeout(config.timer)
      }
    },
    config
  )
}

// Artificial delay
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

// Check if element in viewport
function isElementInViewport(selector) {
  const el = typeof selector === 'string' ? _$(selector) : selector

  if (!el) return false

  const rect = el.getBoundingClientRect()
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight

  return (
    rect.top + rect.height * 0.3 < windowHeight &&
    rect.bottom > rect.height * 0.3
  )
  // return (
  //   rect.top >= 0 &&
  //   rect.left >= 0 &&
  //   rect.bottom <=
  //     (window.innerHeight || document.documentElement.clientHeight) &&
  //   rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  // );
}

// Shordcode for selectors
function _$(selector, context = document) {
  return context.querySelector(selector)
}
function _$$(selector, context = document, toSimpleArray = false) {
  const arr = context.querySelectorAll(selector)

  return toSimpleArray ? Array.from(arr) : arr
}

// GA 4 events
function pushDataLayer(name = '', desc = '', type = '', loc = '') {
  window.dataLayer = window.dataLayer || []

  try {
    const event = {
      event: 'event-to-ga4',
      event_name: name,
      event_desc: desc,
      event_type: type,
      event_loc: loc
    }

    console.debug('** GA4 Event **', event)

    if (!config.debug) {
      dataLayer.push(event)
    }
  } catch (e) {
    console.log('** GA4 Error **', e)
  }
}

// Slider
function connectSplide() {
  const sliderStyles = document.createElement('link')
  sliderStyles.rel = 'stylesheet'
  sliderStyles.href =
    'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide-core.min.css'
  document.head.appendChild(sliderStyles)

  let sliderScript = document.createElement('script')
  sliderScript.src =
    'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js'
  document.head.appendChild(sliderScript)
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
      clarity(...config.clarity)
    }
  )
}

// Svg objects
function getSvg(name) {
  const svgObj = {
    phone: `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M16.629 13.891L17.085 13.438L16.026 12.374L15.572 12.827L16.629 13.891ZM18.614 13.248L20.525 14.287L21.24 12.969L19.33 11.931L18.614 13.248ZM20.892 16.351L19.472 17.764L20.529 18.827L21.949 17.415L20.892 16.351ZM18.606 18.218C17.156 18.354 13.406 18.233 9.34399 14.195L8.28599 15.258C12.718 19.665 16.937 19.881 18.746 19.712L18.606 18.218ZM9.34399 14.195C5.47299 10.345 4.83099 7.10802 4.75099 5.70302L3.25299 5.78802C3.35299 7.55602 4.14799 11.144 8.28599 15.258L9.34399 14.195ZM10.719 8.01502L11.006 7.72902L9.94999 6.66602L9.66299 6.95102L10.719 8.01502ZM11.234 4.09402L9.97399 2.41002L8.77299 3.31002L10.033 4.99302L11.234 4.09402ZM5.73299 2.04302L4.16299 3.60302L5.22099 4.66702L6.78999 3.10702L5.73299 2.04302ZM10.191 7.48302C9.66099 6.95102 9.66099 6.95102 9.66099 6.95302H9.65899L9.65599 6.95702C9.60847 7.00493 9.56592 7.05754 9.52899 7.11402C9.47499 7.19402 9.41599 7.29902 9.36599 7.43202C9.24427 7.77535 9.21394 8.14443 9.27799 8.50302C9.41199 9.36802 10.008 10.511 11.534 12.029L12.592 10.965C11.163 9.54502 10.823 8.68102 10.76 8.27302C10.73 8.07902 10.761 7.98302 10.77 7.96102C10.776 7.94769 10.776 7.94569 10.77 7.95502C10.7611 7.96882 10.751 7.98186 10.74 7.99402L10.73 8.00402L10.72 8.01302L10.191 7.48302ZM11.534 12.029C13.061 13.547 14.21 14.139 15.076 14.271C15.519 14.339 15.876 14.285 16.147 14.184C16.2988 14.1285 16.4406 14.0488 16.567 13.948L16.617 13.903L16.624 13.897L16.627 13.894L16.628 13.892C16.628 13.892 16.629 13.891 16.1 13.359C15.57 12.827 15.573 12.826 15.573 12.826L15.575 12.824L15.577 12.822L15.583 12.817L15.593 12.807L15.631 12.777C15.6403 12.771 15.638 12.7717 15.624 12.779C15.599 12.788 15.501 12.819 15.304 12.789C14.89 12.725 14.02 12.385 12.592 10.965L11.534 12.029ZM9.97399 2.40902C8.95399 1.04902 6.94999 0.833021 5.73299 2.04302L6.78999 3.10702C7.32199 2.57802 8.26599 2.63302 8.77299 3.31002L9.97399 2.40902ZM4.75199 5.70402C4.73199 5.35802 4.89099 4.99602 5.22099 4.66802L4.16199 3.60402C3.62499 4.13802 3.20199 4.89402 3.25299 5.78802L4.75199 5.70402ZM19.472 17.764C19.198 18.038 18.902 18.192 18.607 18.219L18.746 19.712C19.481 19.643 20.082 19.273 20.53 18.828L19.472 17.764ZM11.006 7.72902C11.991 6.75002 12.064 5.20302 11.235 4.09502L10.034 4.99402C10.437 5.53302 10.377 6.24002 9.94899 6.66702L11.006 7.72902ZM20.526 14.288C21.343 14.732 21.47 15.778 20.893 16.352L21.951 17.415C23.291 16.082 22.878 13.859 21.241 12.97L20.526 14.288ZM17.085 13.439C17.469 13.057 18.087 12.963 18.615 13.249L19.331 11.932C18.247 11.342 16.903 11.505 16.027 12.375L17.085 13.439Z" fill="white"/>
      </svg>
    `
  }

  return svgObj[name]
}
