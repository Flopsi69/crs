(function () {
  console.debug('*** Experiment started ***')

  // Config for Experiment
  const config = {
    // dir: 'http://127.0.0.1:5500/natpat/petzen/subscription',
    dir: 'https://flopsi69.github.io/crs/natpat/petzen/subscription',
    clarity: ['set', 'exp_pz_sub_and_save', 'variant_1'],
    debug: false
  }

  let script = document.createElement('script');
  script.src = 'https://flopsi69.github.io/crs/natpat/petzen/subscription/index.js';
  script.async = false;
  document.head.appendChild(script);

  // const orig = console.log
  // console.log = function (...args) {
  //   orig.apply(console, ['Debug:', ...args])
  // }

  // Styles for Experiment
  const styles = /* css */ `
    #lptrPurchase .form, #lptrPurchase .purchase__pet-locket {
      display: none;
    }
    .lp-tr--purchase .lp-tr--btn a {
      display: none!important;
      box-shadow: 0 4px 15px 0 rgba(72, 67, 69, 0.51);
      min-height: 64px;
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: 514px;
    }
    .lav-proceed {
      box-shadow: 0 4px 15px 0 rgba(72, 67, 69, 0.51);
      min-height: 64px;
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: 514px;
      color: #FFF;
      text-align: center;
      font-family: "DINEngschrift LT";
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 30px; /* 136.364% */
      letter-spacing: 1.5px;
      text-transform: uppercase;
      border-radius: 50px;
      background: #337C6B;
      margin: auto;
      cursor: pointer;
      transition: .2s;
    }
    @media(hover:hover) {
      .lav-proceed:hover {
        background: #2B6655;
      }
    }
    .lp-tr--purchase .lp-tr--btn {
      margin-top: 16px;
      margin-bottom: 12px;
    }
    .lp-tr--purchase .overall-price {
      margin-bottom: 10px;
    }
    .lav-disabled {
      pointer-events: none;
      opacity: 0.8;
      filter: grayscale(100%);
    }
    .view-price-box {
      margin-top: 24px;
    }
    .lav-section {
      max-width: 514px;
      margin: auto;
      letter-spacing: 0;
    }
    .lp-tr--purchase .lp-tr--gray-bg {
      align-items: flex-start;
      background: transparent;
    }
    #lptrPurchase {
      padding-top: 0;
    }
    body .lp-tr--purchase .content-container {
      background: transparent;
    }
    .lp-tr--purchase .purchase__title {
      letter-spacing: 0.44px;
      font-size: 44px;
      margin-bottom: 0;
    }
    #lptrPurchase .lp-bp--for-pets-sticker {
      display: none;
    }
    .lav-toggler {
      display: flex;
      align-items: center;
      border-radius: 1111px;
      background: #EAEAEA;
      padding: 8px;
      gap: 20px;
      margin-top: 32px;
    }
    .lav-toggler__btn {
      flex: 1;
      border-radius: 37.5px;
      background: transparent;
      color: #000;
      font-family: Roboto;
      font-size: 20px;
      font-weight: 600;
      line-height: 30px; /* 150% */
      letter-spacing: 1.5px;
      text-transform: uppercase;
      cursor: pointer;
      transition: .25s;
      min-height: 56px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 5px 10px;
    }
    @media(hover:hover) {
      .lav-toggler__btn:not(.active):hover {
        background: rgba(51, 124, 107, 0.1);
        cursor: pointer;
      }
    }
    .lav-toggler__btn.active {
      background: #337C6B;
      color: #fff;
    }

    .lav-packages {
      margin-top: 20px;
      text-align: left;
    }
    .lav-packages__title {
      color: #000;
      font-family: Roboto;
      font-size: 17px;
      font-style: normal;
      font-weight: 600;
      line-height: 23.8px;
      letter-spacing: 0.6px;
      text-transform: uppercase;
    }
    .lav-packages__list {
      display: grid;
      gap: 12px;
      grid-template-columns: repeat(2, 1fr);
      margin-top: 36px;
    }
    .lav-packages__list .lav-package:nth-child(1) {
      order: 1;
    }
    .lav-packages__list .lav-package:nth-child(2) {
      order: 4;
    }
    .lav-packages__list .lav-package:nth-child(3) {
      order: 3;
    }
    .lav-packages__list .lav-package:nth-child(4) {
      order: 2;
    }
    .lav-package {
      position: relative;
      border-radius: 12px;
      border: 2px solid #FEA1C2;
      background: #FFF;
      box-shadow: 0 2px 4px 0 rgba(12, 11, 11, 0.10), 0 12px 32px 0 rgba(0, 0, 0, 0.05);
      padding: 9px 8px;
      display: flex;
      align-items: center;
      gap: 10px;
      color: #202020;
      transition: .25s;
    }
    .lav-package__row {
      display: flex;
      align-items: center;
      gap: 10px;
      flex-grow: 1;
    }
    .lav-package__bestseller {
      position: absolute;
      left: 12px;
      top: -2px;
      transform: translateY(-100%);
      color: #FFF;
      text-align: center;
      font-family: "DINEngschrift LT";
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 12px;
      letter-spacing: 1px;
      text-transform: uppercase;
      border-radius: 4px 4px 0 0;
      background: #0C0B0B;
      padding: 3px 10px;
    }
    .lav-package__save {
      position: absolute;
      right: -2px;
      top: -2px;
      border-radius: 0 10px;
      box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.12);
      color: #FFF;
      text-align: center;
      font-family: "DIN Condensed";
      font-size: 12px;
      font-weight: 400;
      line-height: 12px;
      letter-spacing: 1px;
      text-transform: uppercase;
      padding: 5px 20px 2px;
      background: #FF3C81;
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.16) 25%, rgba(255, 255, 255, 0.06) 25%, rgba(255, 255, 255, 0.06) 50%, rgba(255, 255, 255, 0.16) 50%, rgba(255, 255, 255, 0.16) 75%, rgba(255, 255, 255, 0.06) 75%), #FF3C81;
      background-size: 40px 50px;
    }
    .lav-package__image {
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 0;
      width: 50px;
      height: 71px;
      flex-shrink: 0;
    }
    .lav-package__image img:not(.active) {
      display: none;
    }
    .lav-package__image img {
      max-width: 100%;
      height: auto;
    }
    .lav-package.active {
      color: #fff;
      background: #EF3D6F;
      border-color: #EF3D6F;
    }
    @media(hover:hover) {
      .lav-package:not(.active):hover {
        border-color: #EF3D6F;
        cursor: pointer;
      }
    }
    .lav-package__right {
      text-align: right;
      margin-left: auto;
    }
    .lav-package__packs {
      font-family: "DINEngschrift LT";
      font-size: 26px;
      font-style: normal;
      font-weight: 400;
      line-height: 28px;
    }
    .lav-package__patches {
      font-family: "DINEngschrift LT";
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px;
      margin-top: 6px;
    }
    .lav-package__prices {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 8px;
      margin-top: 3px;
    }
    .lav-package__price-new {
      color: #000;
      text-align: right;
      font-family: Roboto;
      font-size: 18px;
      font-weight: 500;
      line-height: 28px;
      letter-spacing: 0.18px;
      transition: .25s;
      margin-top: 2px;
    }
    .lav-package__price-old {
      color: #5D5D5D;
      text-align: right;
      font-family: Roboto;
      font-size: 16px;
      font-weight: 500;
      line-height: 28px;
      letter-spacing: 0.16px;
      text-decoration-line: line-through;
      transition: .25s;
    }
    .lav-package__per-patch {
      display: none;
      color: #202020;
      font-family: Roboto;
      font-size: 12px;
      font-weight: 500;
      line-height: 22px;
      letter-spacing: 0.12px;
      transition: .25s;
      margin-top: 2px;
    }
    .lav-package.active .lav-package__price-new, .lav-package.active .lav-package__per-patch {
      color: #fff;
    }
    .lav-package.active .lav-package__price-old {
      color: #DADADA;
    }

    .lav-plans {
      margin-top: 22px;
    }
    .lav-plans__title {
      color: #000;
      font-family: Roboto;
      font-size: 17px;
      font-style: normal;
      font-weight: 600;
      line-height: 23.8px;
      letter-spacing: 0.6px;
      text-transform: uppercase;
      text-align: left;
    }
    .lav-plans__list {
      position: relative;
      opacity: .99;
      margin-top: 50px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
    }
    .lav-plan {
      position: relative;
      border-radius: 12px;
      border: 2px solid #FEA1C2;
      background: #FFF;
      box-shadow: 0 2px 4px 0 rgba(12, 11, 11, 0.10), 0 12px 32px 0 rgba(0, 0, 0, 0.05);
      transition: .25s;
      color: #202020;
      padding: 16px 14px;
      text-align: center;
    }
    .lav-plan.active {
      background: #EF3D6F;
      border-color: #EF3D6F;
      color: #fff;
    }
    @media(hover:hover) {
      .lav-plan:not(.active):hover {
        border-color: #EF3D6F;
        cursor: pointer;
      }
    }
    .lav-plan__title {
      font-family: "DINEngschrift LT";
      font-size: 26px;
      font-style: normal;
      font-weight: 400;
      line-height: 28px;
    }
    .lav-plan__price {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      margin-top: 14px;
      color: #000;
    }
    .lav-plan__price-new {
      color: #000;
      font-family: Roboto;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: 0.2px;
      transition: .25s;
    }
    [data-plan="subscription"]:not(.active) .lav-plan__price-new {
      color: #FF3C81;
    }
    .lav-plan__price-old {
      font-family: Roboto;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: 0.2px;
      transition: .25s;
      color: #5D5D5D;
      text-align: right;
      text-decoration-line: line-through;
    }
    .lav-plan.active .lav-plan__price-new {
      color: #fff;
    }
    .lav-plan.active .lav-plan__price-old {
      color: #DADADA;
    }
    .lav-plan__extra {
      position: absolute;
      z-index: -1;
      top: 8px;
      left: -2px;
      right: -2px;
      transform: translateY(-100%);
      color: #FFF;
      text-align: center;
      font-family: "DINEngschrift LT";
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px; /* 110% */
      text-transform: uppercase;
      padding: 6px 6px 16px;
      border-radius: 12px 12px 0 0;
      background: #000;
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.16) 25%, rgba(255, 255, 255, 0.06) 25%, rgba(255, 255, 255, 0.06) 50%, rgba(255, 255, 255, 0.16) 50%, rgba(255, 255, 255, 0.16) 75%, rgba(255, 255, 255, 0.06) 75%), #000;
      background-size: 40px 50px;
    }

    .lav-bundle__wrap {
      display: none;
      margin-top: 16px;
      text-align: left;
    }
    .lav-bundle__section-title {
      color: #000;
      font-family: Roboto;
      font-size: 17px;
      font-style: normal;
      font-weight: 600;
      line-height: 23.8px;
      letter-spacing: 0.6px;
      text-transform: uppercase;
    }
    .lav-bundle {
      position: relative;
      display: flex;
      align-items: center;
      gap: 16px;
      margin-top: 22px;
      border-radius: 12px;
      border: 2px solid #FEA1C2;
      background: #FFF;
      box-shadow: 0 2px 4px 0 rgba(12, 11, 11, 0.10), 0 12px 32px 0 rgba(0, 0, 0, 0.05);
      padding: 8px 14px;
      transition: .25s;
      cursor: pointer;
      color: #202020;
    }
    .lav-bundle.active {
      background: #EF3D6F;
      border-color: #EF3D6F;
      color: #fff;
    }
    @media(hover:hover) {
      .lav-bundle:not(.active):hover {
        cursor: pointer;
        border-color: #EF3D6F;
      }
    }
    .lav-bundle__image {
      line-height: 0;
      flex-shrink: 0;
    }
    .lav-bundle__image img {
      width: 83px;
      max-width: 100%;
    }
    .lav-bundle__save {
      position: absolute;
      right: 10px;
      top: -2px;
      transform: translateY(-100%);
      border-radius: 4px 4px 0 0;
      background: #0C0B0B;
      color: #FFF;
      text-align: center;
      font-family: "DINEngschrift LT";
      font-size: 14px;
      font-weight: 400;
      line-height: 12px;
      letter-spacing: 1px;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2px 10px;
      min-height: 22px;
    }
    .lav-bundle__title {
      font-family: "DINEngschrift LT";
      font-size: 26px;
      font-weight: 400;
      line-height: 28px;
      letter-spacing: 0;
    }
    .lav-bundle__includes {
      font-family: "DINEngschrift LT";
      font-size: 16px;
      font-weight: 400;
      line-height: 22px;
      letter-spacing: 0;
      margin-top: 6px;
    }
    .lav-bundle__price {
      margin-left: auto;
      display: flex;
      align-items: center;
      gap: 8px;
      text-align: right;
    }
    .lav-bundle__price-value {
      color: #000;
      font-family: Roboto;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 28px;
      letter-spacing: 0.18px;
      transition: .2s;
    }
    .lav-bundle__price-caption {
      color: #5D5D5D;
      font-family: Roboto;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 28px;
      letter-spacing: 0.16px;
      transition: .2s;
    }
    .lav-bundle.active .lav-bundle__price-value, .lav-bundle.active .lav-bundle__price-caption {
      color: #fff;
    }

    .lav-subscr {
      margin-top: 16px;
      border-radius: 12px;
      background: #EAEAEA;
      padding: 16px;
      text-align: left;
    }
    .lav-subscr__benefits {
      display: grid;
      gap: 12px;
    }
    .lav-subscr__benefit {
      display: flex;
      align-items: flex-start;
      gap: 8px;
      color: #0C0B0B;
      font-family: Roboto;
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: -0.25px;
    }
    .lav-subscr__benefit svg {
      position: relative;
      top: 1px;
      flex-shrink: 0;
      width: 17px;
      height: 17px;
    }
    .lav-subscr__selector {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      position: relative;
      margin-top: 12px;
      border-radius: 4px;
      border: 2px solid #D3D3D3;
      background: #FFF;
      padding: 10px 12px;
      transition: .25s;
      cursor: pointer;
    }
    @media(hover:hover) {
      .lav-subscr__selector:hover {
        border-color: #FEA1C2;
      }
    }
    .lav-subscr__selector-value {
      color: #0C0B0B;
      font-family: Roboto;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 21px;
      letter-spacing: 1.6px;
      text-transform: capitalize;
    }
    .lav-subscr__selector span {
      color: #FF3C81;
    }

    .lav-subscr__select {
      position: absolute;
      left: -2px;
      right: -2px;
      top: -2px;
      bottom: -2px;
      opacity: 0;
      cursor: pointer;
    }

    @media(hover:hover) {
      .lav-subscr__select:hover + .lav-subscr__selector:hover {
        border-color: #FEA1C2;
      }
    }

    .lav-upsell {
      border-radius: 12px;
      background: #EAEAEA;
      margin-top: 16px;
      text-align: left;
    }
    .lav-upsell__row {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 10px 16px;
    }
    .lav-upsell__image {
      line-height: 0;
      flex-shrink: 0;
    }
    .lav-upsell__image img {
      width: 64px;
    }
    .lav-upsell__info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-grow: 1;
      gap: 12px;
    }
    .lav-upsell__title {
      display: flex;
      align-items: center;
      gap: 12px;
      color: #212529;
      font-family: Roboto;
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: 21px;
      letter-spacing: -0.25px;
    }
    .lav-upsell__title-price.active {
      color: #EF3D6F;
    }
    .lav-upsell__tip {
      position: relative;
      margin-top: -3px;
    }
  
    .lav-upsell__tip-body img {
      max-width: 100%;
    }
    .lav-upsell__tip-body {
      position: absolute;
      pointer-events: none;
      opacity: 0;
      bottom: 100%;
      width: 330px;
      right: -26px;
      margin-bottom: 15px;
      border-radius: 6px;
      background: #FFF;
      box-shadow: 0 2px 2px 0 rgba(28, 5, 77, 0.12);
      padding: 20px 20px 22px;
      transition: .3s;
    }
    .lav-upsell__tip:hover .lav-upsell__tip-body {
      opacity: 1;
    }
    .lav-upsell__tip-body svg {
      position: absolute;
      top: 100%;
      right: 24px;
    }
    .lav-upsell__tip-text {
      color: #212529;
      font-family: Roboto;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px;
      margin-top: 16px;
    }
    .lav-upsell__counter {
      display: flex;
      gap: 6px;
      align-items: center;
      margin-left: auto;
    }
    .lav-upsell__counter-btn {
      user-select: none;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      border: 2px solid #D3D3D3;
      background: #FFF;
      width: 40px;
      height: 40px;
      transition: .25s;
      cursor: pointer;
    }
    @media(hover:hover) {
      .lav-upsell__counter-btn:hover {
        border-color: #FEA1C2;
      }
    }
    .lav-upsell__counter-value {
      user-select: none;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      border: 2px solid #D3D3D3;
      background: #FFF;
      width: 40px;
      height: 40px;
      color: #212529;
      text-align: center;
      font-family: Roboto;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 21px;
    }

    .lav-upsell__subscr {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      border-top: 1px solid #D3D3D3;
      padding: 12px 16px 10px;
      margin-top: 2px;
    }
    .lav-upsell__subscr-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 4px 12px;
      min-height: 44px;
      color: #202020;
      font-family: "DINEngschrift LT";
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 28px;
      border-radius: 8px;
      border: 2px solid #FEA1C2;
      background: #FFF;
      box-shadow: 0 2px 4px 0 rgba(12, 11, 11, 0.10), 0 12px 32px 0 rgba(0, 0, 0, 0.05);
      transition: .3s;
    }
    .lav-upsell__subscr-btn:not(.active) {
      cursor: pointer;
    }
    @media(hover:hover) {
      .lav-upsell__subscr-btn:not(.active):hover {
        border-color: #EF3D6F;
      }
    }
    .lav-upsell__subscr-btn.active {
      color: #fff;
      background: #EF3D6F;
      border-color: #EF3D6F;
    }
    @media(max-width: 1200px) {
      .lp-tr--purchase .content-container {
        padding: 0;
      }
      #purchaseSlide {
        padding-right: 20px;
      }
    }
    @media(max-width: 991px) {
      #purchaseSlide {
        padding-right: 0;
      }
      #lptrPurchase {
        margin-top: 20px;
      }
    }
    @media(max-width: 768px) {
      body .lp-tr--purchase .content-container {
        margin-top: 0;
        background: #F7F7F4;
      }
      .lav-toggler {
        margin-top: 0;
      }
      #lptrPurchase {
        padding-top: 20px!important;
        margin-top: 0;
      }
      .lav-section {
        padding: 0 15px;
      }
      .lav-toggler__btn {
        font-size: 18px;
        min-height: 44px;
      }
      .lav-packages__title {
        font-size: 16px;
        line-height: 22px;
        text-align: center;
      }
      .lav-packages__list {
        margin-top: 32px;
      }
      .lav-package {
        padding: 13px 12px 13px 6px;
        gap: 8px;
      }
      .lav-package__row {
        flex-flow: column;
        align-items: flex-start;
        gap: 5px;
      }
      .lav-package__left {
        display: flex;
        align-items: center;
        gap: 6px;
      }
      .lav-package__right {
        display: flex;
        align-items: center;
        gap: 6px;
        margin-left: 0;
      }
      .lav-package__image {
        width: 35px;
        height: 48px;
      }
      .lav-package__save {
        display: none;
      }
      .lav-package__bestseller {
        left: 0;
        right: 0;
        margin: 0 auto;
        max-width: 80px;
      }
      .lav-package__packs {
        font-size: 20px;
        white-space: nowrap;
      }
      .lav-package__patches {
        font-size: 13px;
        margin-top: 0;
        margin-bottom: -4px;
      }
      .lav-package__prices {
        justify-content: center;
      }
      .lav-package__price-new {
        font-size: 16px;
        margin-top: 0;
        letter-spacing: 0;
        line-height: 1;
      }
      .lav-package__price-old {
        font-size: 14px;
        letter-spacing: 0;
        line-height: 1;
        margin-bottom: -4px;
      }
      .lav-package__per-patch {
        text-align: center;
      }
      .lav-packages__list .lav-package:nth-child(2) {
        order: 2;
      }
      .lav-packages__list .lav-package:nth-child(4) {
        order: 4;
      }
      .lav-plans__title {
        text-align: center;
      }
      .lav-plans {
        margin-top: 24px;
      }
      .lav-plans__list {
        margin-top: 38px;
      }
      .lav-plan {
        padding: 13px 8px;
      }
      .lav-plan__title {
        font-size: 22px;
      }
      .lav-plan__price-new {
        font-size: 14px;
        letter-spacing: 0.14px;
      }
      .lav-plan__price-old {
        font-size: 14px;
        letter-spacing: 0.14px;
      }
      .lav-plan__extra {
        font-size: 16px;
        padding: 4px 6px 14px;
      }
      .lav-bundle__image img {
        width: 69px;
      }
      .lav-bundle {
        padding: 9px 10px;
        gap: 8px;
      }
      .lav-bundle__title {
        font-size: 22px;
      }
      .lav-bundle__includes {
        font-size: 14px;
      }
      .lav-bundle__price {
        flex-flow: column;
        align-items: flex-end;
        gap: 0;
      }
      .lav-bundle__price-value {
        font-size: 15px;
      }
      .lav-bundle__price-caption {
        font-size: 14px;
        line-height: 24px;
        letter-spacing: 0.14px;
      }
      .lav-subscr__benefit {
        font-size: 14px;
      }
      .lav-subscr__benefit svg {
        top: 0;
      }
      .lav-subscr__selector-value {
        letter-spacing: 0;
      }
      .lp-tr--purchase .pet-zenp-money-back {
        background: transparent;
      }
      .view-price-box {
        padding-bottom: 20px;
      }
      .lp-tr--purchase {
        margin-bottom: 0;
      }
      .lp-tr--purchase .purchase__regular-price, .lp-tr--purchase .lp-tr--btn, .lp-tr--purchase .loc_gated_selling_plan__subscription_info {
        background: #F7F7F4;
      }
      .lp-tr--purchase .lp-tr--btn {
        margin-top: 12px;
        margin-bottom: 5px;
        padding-top: 0;
        margin-left: 15px;
        margin-right: 15px;
      }
      .lav-proceed {
        font-size: 20px;
        min-height: 54px;
      }
      .lp-tr--purchase .purchase__regular-price {
        padding-bottom: 0;
      }
      .lp-tr--purchase .overall-price {
        background: #F7F7F4;
        margin-bottom: 9px;
        line-height: 1.5;
        margin-top: 0;
      }
      .lav-upsell__subscr {
        gap: 8px;
      }
      .lav-upsell__subscr-btn {
        font-size: 20px;
        line-height: 28px;
        padding-left: 8px;
        padding-right: 8px;
      }
      .lav-upsell__info {
        flex-flow: column;
        align-items: flex-start;
      }
      .lav-upsell__counter {
        margin-left: 0;
      }
      .lav-upsell__image img {
        width: 73px;
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

    document.body.appendChild(stylesEl)

    _$('#lptrPurchase').classList.remove('col-md-6')
    _$('#lptrPurchase').classList.add('col-lg-6')
    _$('.content-container-mobile-bg').classList.remove('col-md-6')
    _$('.content-container-mobile-bg').classList.add('col-lg-6')

    console.debug('** InitExp **')
    _$('#lptrPurchase .purchase__title').insertAdjacentHTML('afterend', `<div class="lav-section"></div>`)
    
    addCategoryToggler();
    addPackages();
    addChoosePlan();
    addBundle();
    addUpsell()
    updatePrices();

    _$('.lp-tr--purchase .lp-tr--btn').insertAdjacentHTML('beforeend', `<div class="lav-proceed">GET PET ZEN NOW</div>`)
    _$('.lav-proceed').addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      addToCart();
    })

    window.dispatchEvent(new Event('resize'));
  }

  function addCategoryToggler() {
    const markup = /* html */ `
      <div class="lav-toggler">
        <div class="lav-toggler__btn active" data-category="dogs">For dogs</div>
        <div class="lav-toggler__btn" data-category="cats">For cats</div>
      </div>
    `

    _$('.lav-section').insertAdjacentHTML('beforeend', markup)

    const slideElDesk = _$('#purchaseSlide.lp-tr--desktop .slide-1 .card-box img');
    const slideElMob = _$('#purchaseSlide.lp-tr--mobile .slide-1 .card-box img');
    const slideElDogDeskSrc = slideElDesk.src; 
    const slideElDogMobSrc = slideElMob.src;

    const imgCat = new Image()
    imgCat.src = config.dir + '/img/cat-slide.png';

    const imgCatMob = new Image()
    imgCatMob.src = config.dir + '/img/cat-slide-mob.png';

    _$('.lav-toggler__btn[data-category="dogs"]').addEventListener('click', (e) => {
      pushDataLayer('exp_pz_tab_click', 'For Dogs', 'click', 'Tab');
      if (e.target.classList.contains('active')) return;

      e.target.classList.add('active');
      _$$('.lav-package__image-dog').forEach(img => img.classList.add('active'));
      _$$('.lav-package__image-cat').forEach(img => img.classList.remove('active'));
      _$('.lav-toggler__btn[data-category="cats"]').classList.remove('active');

      if (!slideElDesk.src.includes(slideElDogDeskSrc)) {
        slideElDesk.src = slideElDogDeskSrc;
      }
      if (!slideElMob.src.includes(slideElDogMobSrc)) {
        slideElMob.src = slideElDogMobSrc;
      }
    });

    _$('.lav-toggler__btn[data-category="cats"]').addEventListener('click', (e) => {
      pushDataLayer('exp_pz_tab_click', 'For Cats', 'click', 'Tab');
      if (e.target.classList.contains('active')) return;

      e.target.classList.add('active');
      _$$('.lav-package__image-dog').forEach(img => img.classList.remove('active'));
      _$$('.lav-package__image-cat').forEach(img => img.classList.add('active'));
      _$('.lav-toggler__btn[data-category="dogs"]').classList.remove('active');

      if (!slideElDesk.src.includes('cat-slide')) {
        slideElDesk.src = config.dir + '/img/cat-slide.png';
      }
      if (!slideElMob.src.includes('cat-slide')) {
        slideElMob.src = config.dir + '/img/cat-slide-mob.png';
      }
    });
  }

  function addPackages() {
    const markup = /* html */ `
      <div class="lav-packages">
        <h3 class="lav-packages__title">
          Choose Packs Quantity
        </h3>

        <div class="lav-packages__list">
          <div class="lav-package">
            <div class="lav-package__bestseller">bestseller</div>
            <div class="lav-package__save">Save 50%</div>
            <div class="lav-package__left">
              <div class="lav-package__packs">
                3 packs
              </div>
              <div class="lav-package__patches">
                72 patches
              </div>
            </div>
            <div class="lav-package__right">
              <div class="lav-package__prices">
                <div class="lav-package__price-new">€31,95</div>
                <div class="lav-package__price-old">€21,95</div>
              </div>
              <div class="lav-package__per-patch">
                €0,44 / patch
              </div>
            </div>
          </div>

          <div class="lav-package">
            <div class="lav-package__left">
              <div class="lav-package__packs">
                1 pack
              </div>
              <div class="lav-package__patches">
                72 patches
              </div>
            </div>
            <div class="lav-package__right">
              <div class="lav-package__prices">
                <div class="lav-package__price-new">€31,95</div>
                <div class="lav-package__price-old">€21,95</div>
              </div>
              <div class="lav-package__per-patch">
                €0,44 / patch
              </div>
            </div>
          </div>

          <div class="lav-package">
            <div class="lav-package__left">
              <div class="lav-package__packs">
                2 packs
              </div>
              <div class="lav-package__patches">
                72 patches
              </div>
            </div>
            <div class="lav-package__right">
              <div class="lav-package__prices">
                <div class="lav-package__price-new">€31,95</div>
                <div class="lav-package__price-old">€21,95</div>
              </div>
              <div class="lav-package__per-patch">
                €0,44 / patch
              </div>
            </div>
          </div>

          <div class="lav-package active">
            <div class="lav-package__left">
              <div class="lav-package__packs">
                4 packs
              </div>
              <div class="lav-package__patches">
                72 patches
              </div>
            </div>
            <div class="lav-package__right">
              <div class="lav-package__prices">
                <div class="lav-package__price-new">€31,95</div>
                <div class="lav-package__price-old">€21,95</div>
              </div>
              <div class="lav-package__per-patch">
                €0,44 / patch
              </div>
            </div>
          </div>
        </div>
      </div>
    `

    _$('.lav-section').insertAdjacentHTML('beforeend', markup)

    _$('.lav-packages__list').innerHTML = '';
    _$$('#lptrPurchase .packs:not(.bundle-and-save)').forEach(pack => {
      const newPack = addPackage(pack)
      newPack.addEventListener('click', () => {
        pushDataLayer('exp_pz_pack_click', newPack.querySelector('.lav-package__packs').innerText.trim(), 'click', _$('.lav-toggler__btn.active').textContent.trim());
        if (newPack.classList.contains('active')) return;
        _$('.lav-packages__list .lav-package.active')?.classList.remove('active');
        newPack.classList.add('active');
        updatePrices();
      });
      _$('.lav-packages__list').insertAdjacentElement('beforeend', newPack)
    })

    function addPackage(pack) {
      const packInput = pack.querySelector('[name="price"]');
      
      const countPack = packInput?.value;
      const patchesCount = countPack * 24;
      const packEl = document.createElement('div');
      packEl.classList.add('lav-package');
      packEl.dataset.pack = countPack;

      const price = normalizePrice(packInput.dataset.tickPrice, true);
      const oldPrice = normalizePrice(packInput.dataset.comparePrice, true);
      packEl.dataset.price = price;
      packEl.dataset.oldPrice = oldPrice;

      const rawPrice = normalizePrice(packInput.dataset.price);
      const perPatch = normalizePrice(rawPrice / patchesCount, true);
      packEl.dataset.perPatch = perPatch;

      const subscriptionDiscount = parseInt(packInput.dataset.subscriptionPercentOff) / 100;
      const rawSubscriptionPrice = normalizePrice(rawPrice) - normalizePrice(rawPrice) * subscriptionDiscount;
      const subscriptionPrice = normalizePrice(rawSubscriptionPrice, true);
      const subscriptionPerPatch = normalizePrice(rawSubscriptionPrice / patchesCount, true);

      packEl.dataset.subscriptionPrice = subscriptionPrice;
      packEl.dataset.subscriptionPerPatch = subscriptionPerPatch;

      packEl.innerHTML = /* html */ `
        <div class="lav-package__image">
          <img class='lav-package__image-dog active' src="${config.dir}/img/dog-${countPack}.png" alt="${countPack} packs" />
          <img class='lav-package__image-cat' src="${config.dir}/img/cat-${countPack}.png" alt="${countPack} packs" />
        </div>
        <div class="lav-package__row">
          <div class="lav-package__left">
            <div class="lav-package__packs">
              ${countPack} pack${countPack > 1 ? 's' : ''}
            </div>
            <div class="lav-package__patches">
              ${patchesCount} patches
            </div>
          </div>
          <div class="lav-package__right">
            <div class="lav-package__prices">
              <div class="lav-package__price-new">${subscriptionPrice}</div>
            </div>
            <div class="lav-package__price-old">${oldPrice}</div>
            <div class="lav-package__per-patch">
              <span>${packEl.dataset.subscriptionPerPatch}</span> / patch
            </div>
          </div>
        </div>
      `;

      if (countPack === '3') {
        packEl.classList.add('active');
        packEl.insertAdjacentHTML('afterbegin', /* html */ `
          <div class="lav-package__bestseller">bestseller</div>
          <div class="lav-package__save">Save 50%</div>
        `)
      }

      return packEl;
    }
  }

  function addBundle() {
    const price = _$('.packs.bundle-and-save').querySelector('[name="price"]').dataset.tickPrice
    const eachPrice = _$('.lp-tr--purchase .packs.bundle-and-save .lp-tr--pack-price').innerText.trim().toLowerCase().replace(' each item', '');
    const saveProcent = _$('.packs.bundle-and-save [name="price"]').dataset.percentOff;
    const regularPrice = _$('.packs.bundle-and-save [name="price"]').dataset.comparePrice;
    
    const markup = /* html */ `
      <div class="lav-bundle__wrap">
        <div class="lav-bundle__section-title">Bundle & Save</div>

        <div class="lav-bundle" data-price="${price}" data-each-price="${eachPrice}" data-save-procent="${saveProcent}" data-regular-price="${regularPrice}">
          <div class='lav-bundle__save'>${saveProcent}% Off</div>
          <div class="lav-bundle__image">
            <img src="https://www.natpat.com/cdn/shop/files/lp-pet-zen--bundle-save.png?v=15492836892742779719">
          </div>

          <div class="lav-bundle__info">
            <div class="lav-bundle__title">Pet Zen Starter Pack</div>
            <div class="lav-bundle__includes">
              + Pet Locket <br/>
              + 3 Packs of Pet Zen Vapor Stickers
            </div>
          </div>

          <div class="lav-bundle__price">
            <div class="lav-bundle__price-value">${eachPrice}</div>
            <div class="lav-bundle__price-caption">/ Each Item</div>
          </div>
        </div>
      </div>
    `;

    _$('.lav-section').insertAdjacentHTML('beforeend', markup);

    _$('.lav-bundle').addEventListener('click', () => {
      pushDataLayer('exp_pz_bundle_click', 'Bundle', 'click', 'Bundle & Save');
      if (_$('.lav-bundle').classList.contains('active')) return
      _$('.lav-bundle').classList.add('active');
      _$('.lav-packages__list .lav-package.active')?.classList.remove('active');
      updatePrices();
    });
  }

  function addChoosePlan() {
    const markup = /* html */ `
      <div class="lav-plans">
        <div class="lav-plans__title">
          Choose Your Plan
        </div>

        <div class="lav-plans__list">
          <div class="lav-plan active" data-plan="subscription">
            <div class="lav-plan__extra">
              Get Extra 15% Off
            </div>
            <div class="lav-plan__title">
              Subscribe & Save
            </div>
            <div class="lav-plan__price">
              <div class="lav-plan__price-new">
                €31,95
              </div>
              <div class="lav-plan__price-old">
                ${_$('.lav-package.active').dataset.price}
              </div>
            </div>
          </div>

          <div class="lav-plan" data-plan="one-time">
            <div class="lav-plan__title">
              One-Time Purchase
            </div>
            <div class="lav-plan__price">
              <div class="lav-plan__price-new">${_$('.lav-package.active').dataset.price}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="lav-subscr active">
        <div class="lav-subscr__benefits">
          <div class="lav-subscr__benefit">${getSvg('pinkCheck')} Save Extra 15% Off on This and Future Orders</div>
          <div class="lav-subscr__benefit">${getSvg('pinkCheck')} Pause, Skip, or Cancel Anytime</div>
          <div class="lav-subscr__benefit">${getSvg('pinkCheck')} 5-Day Renewal Reminder</div>
        </div>

        <div class="lav-subscr__selector">
          <select class="lav-subscr__select">
            <option selected value="1060569132"">Ship every: 2 months</option>
            <option value="1068498988"">Ship every: 2 weeks</option>
            <option value="1068957740"">Ship every: 3 weeks</option>
            <option value="1060536364"">Ship every: 1 month</option>
            <option value="1068531756"">Ship every: 5 weeks</option>
            <option value="1068564524"">Ship every: 7 weeks</option>
            <option value="1068597292"">Ship every: 3 months</option>
            <option value="1068630060"">Ship every: 4 months</option>
            <option value="1068859436"">Ship every: 5 months</option>
            <option value="1068924972"">Ship every: 6 months</option>
          </select>
          <div class="lav-subscr__selector-value">
            Delivers every&nbsp;: <span>2 Months</span>
          </div>
          ${getSvg('arrowDown')}
        </div>
      </div>
    `

    _$('.lav-section').insertAdjacentHTML('beforeend', markup)

    let isOpenDisableTrigger = false;

    _$('.lav-subscr__select').addEventListener('click', (e) => {
      const activePacksText = _$('.lav-package.active .lav-package__packs') ? _$('.lav-package.active .lav-package__packs').innerText.trim() : 'Bundle';
      const activeTogglerText = _$('.lav-toggler__btn.active').textContent.trim();
      
      if (isOpenDisableTrigger) return;
      pushDataLayer('exp_pz_deliver_every_dropdown', 'Open drop-down', 'click', activeTogglerText, activePacksText);
    });

    _$('.lav-subscr__select').addEventListener('change', (e) => {
      const selectedOption = e.target.options[e.target.selectedIndex].textContent.replace('Ship every: ', '');
      _$('.lav-subscr__selector-value span').textContent = selectedOption;

      const activePacksText = _$('.lav-package.active .lav-package__packs') ? _$('.lav-package.active .lav-package__packs').innerText.trim() : 'Bundle';
      const activeTogglerText = _$('.lav-toggler__btn.active').textContent.trim();

      pushDataLayer('exp_pz_deliver_every_option', selectedOption, 'click', activeTogglerText, activePacksText);

      isOpenDisableTrigger = true;
      setTimeout(() => {
        isOpenDisableTrigger = false;
      }, 200);
    })

    _$$('.lav-plan').forEach(plan => {
      plan.addEventListener('click', () => {
        if (plan.classList.contains('active')) return;

        const selectedPlan = plan.dataset.plan
        if (selectedPlan === 'one-time' && _$('.lav-upsell__subscr.active')) {
          $('.lav-upsell__subscr').slideUp().removeClass('active');
        } else if (selectedPlan === 'subscription' && parseInt(_$('.lav-upsell__counter-value').textContent) > 0) {
          $('.lav-upsell__subscr').slideDown().addClass('active');
        }

        const activePacksText = _$('.lav-package.active .lav-package__packs') ? _$('.lav-package.active .lav-package__packs').innerText.trim() : 'Bundle';
        const activeTogglerText = _$('.lav-toggler__btn.active').textContent.trim();

        if (selectedPlan === 'one-time') {
          pushDataLayer('exp_pz_purchase_plan_click', 'One-time purchase', 'click', activeTogglerText, activePacksText);
          $('.lav-subscr').slideUp().removeClass('active');
          $('.lav-bundle__wrap').slideDown().addClass('active');
        } else {
          pushDataLayer('exp_pz_purchase_plan_click', 'Subscribe & Save', 'click', activeTogglerText, activePacksText);
          $('.lav-subscr').slideDown().addClass('active');
          $('.lav-bundle__wrap').slideUp().removeClass('active');
          if (_$('.lav-bundle.active')) {
            _$('.lav-packages__list .lav-package')?.classList.add('active');
            _$('.lav-bundle').classList.remove('active');
          }
        }

        _$('.lav-plan.active')?.classList.remove('active');
        plan.classList.add('active');

        updatePrices();
      })
    })
  }

  function normalizePrice(priceString, isGetMoney = false) {
    if (!priceString) return null;

    if (typeof priceString === 'number') {
      priceString = priceString.toFixed(2);
    }

    // Remove currency symbols and spaces
    let cleaned = priceString
      .replace(/[^\d.,-]/g, '') // keep digits, dot, comma, minus
      .trim();

    // If both comma and dot exist → determine decimal separator
    if (cleaned.includes(',') && cleaned.includes('.')) {
      // If comma appears after dot → comma is decimal
      if (cleaned.lastIndexOf(',') > cleaned.lastIndexOf('.')) {
        cleaned = cleaned.replace(/\./g, '').replace(',', '.');
      } else {
        cleaned = cleaned.replace(/,/g, '');
      }
    }
    // If only comma exists → assume decimal comma
    else if (cleaned.includes(',')) {
      cleaned = cleaned.replace(',', '.');
    }

    if (isGetMoney) {
      return LPProductForm.formatMoney(cleaned);
    }

    return parseFloat(cleaned);
  }

  function updatePrices() {
    const isLocketSubscr = _$('.lav-upsell__subscr.active') && _$('.lav-upsell__subscr-btn.active')?.dataset.subscription === 'true';
    const oneTimePrice = _$('.lav-package.active')?.dataset.price || _$('.lav-bundle.active')?.dataset.price;

    _$('[data-plan="one-time"] .lav-plan__price-new').textContent = oneTimePrice;

    if (_$('.lav-bundle.active')) {
      const threePackPrice = _$('.lav-package[data-pack="3"]').dataset.price;
      const threePackSubscriptionPrice = _$('.lav-package[data-pack="3"]').dataset.subscriptionPrice;
      _$('[data-plan="subscription"] .lav-plan__price-old').textContent = threePackPrice;
      _$('[data-plan="subscription"] .lav-plan__price-new').textContent = threePackSubscriptionPrice;
    } else {
      const subscriptionPrice = _$('.lav-package.active')?.dataset.subscriptionPrice;
      _$('[data-plan="subscription"] .lav-plan__price-old').textContent = oneTimePrice;
      _$('[data-plan="subscription"] .lav-plan__price-new').textContent = subscriptionPrice;
    }

    if (!isLocketSubscr) {
      _$(".lav-upsell__title-price").classList.remove('active');
      _$(".lav-upsell__title-price").textContent = _$('.lav-upsell').dataset.price;
    } else {
      _$(".lav-upsell__title-price").classList.add('active');
      _$(".lav-upsell__title-price").textContent = _$('.lav-upsell').dataset.subscribedPrice;
    }

    const isSubscription = _$('.lav-plan.active')?.dataset.plan === 'subscription';

    _$$('.lav-package').forEach(packageEl => {
      const price = isSubscription ? packageEl.dataset.subscriptionPrice : packageEl.dataset.price;
      const oldPrice = packageEl.dataset.oldPrice;
      const perPatch = isSubscription ? packageEl.dataset.subscriptionPerPatch : packageEl.dataset.perPatch;
      
      packageEl.querySelector('.lav-package__price-new').textContent = price;
      packageEl.querySelector('.lav-package__price-old').textContent = oldPrice;
      packageEl.querySelector('.lav-package__per-patch span').textContent = perPatch;
    })

    let regularPrice = 0;
    let totalPrice = 0
    console.log('** Price calculation: **')

    const locketCount = parseInt(_$('.lav-upsell__counter-value').textContent);
    if (locketCount > 0) {
      const locketsPrice = normalizePrice(_$('.lav-upsell').dataset.price) * locketCount;
      const actualLocketPrice = normalizePrice(isLocketSubscr ? _$('.lav-upsell').dataset.subscribedPrice : _$('.lav-upsell').dataset.price) * locketCount;

      console.log('----- Lockets:', locketsPrice, actualLocketPrice, `(count: ${locketCount}, subscribed: ${isLocketSubscr})`)

      totalPrice += actualLocketPrice;
      regularPrice += locketsPrice;
    }

    if (_$('.lav-bundle.active')) {
      const el = _$('.lav-bundle.active');
      totalPrice += normalizePrice(el.dataset.price);
      regularPrice += normalizePrice(el.dataset.regularPrice);
      console.log('----- Bundle:', el.dataset.price, el.dataset.regularPrice)
    } else {
      const isSubscription = _$('.lav-plan.active')?.dataset.plan === 'subscription';
      const packagePrice = isSubscription ? _$('.lav-package.active')?.dataset.subscriptionPrice : _$('.lav-package.active')?.dataset.price;
      console.log('----- PackagePrice:', normalizePrice(packagePrice), normalizePrice(_$('.lav-package.active')?.dataset.oldPrice))
      totalPrice += normalizePrice(packagePrice);
      regularPrice += normalizePrice(_$('.lav-package.active')?.dataset.oldPrice);
    }

    let savePrice = regularPrice - totalPrice;
    const saveProcent = regularPrice > 0 ? Math.round((savePrice / regularPrice) * 100) : 0;
    totalPrice = normalizePrice(totalPrice, true);
    regularPrice = normalizePrice(regularPrice, true);
    savePrice = normalizePrice(savePrice, true);

    console.log('--->>> Total price:', totalPrice,)
    console.log('--->>> Regular price:', regularPrice)
    console.log('--->>> Save price:', savePrice)
    console.log('--->>> Save procent:', saveProcent + '%')

    _$('.lp-tr--purchase .overall-price .price-num').textContent = totalPrice;
    _$('.lp-tr--purchase .overall-price .price-off').textContent = saveProcent;
    _$('.purchase__regular-price .compare-price').textContent = regularPrice;
    _$('.purchase__regular-price .saved-price').textContent = savePrice;

  }

  function addUpsell() {
    const rawPrice = _$('#petlocket').dataset.price;
    const price = LPProductForm.formatMoney(rawPrice);
    const subscribedPrice = LPProductForm.formatMoney(parseInt(rawPrice) - (parseInt(rawPrice) * 0.15));

    const markup = /* html */ `
      <div class="lav-upsell" data-price="${price}" data-subscribed-price="${subscribedPrice}">
        <div class="lav-upsell__row">
          <div class="lav-upsell__image">
            <img src="${config.dir}/img/locket.png">
          </div>
          <div class="lav-upsell__info">
            <div class="lav-upsell__title">
              <div>Add a Pet Locket for <span class="lav-upsell__title-price active">${subscribedPrice}</span></div>
              <div class="lav-upsell__tip">
                ${getSvg('tipIcon')}
                <div class="lav-upsell__tip-body">
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="13" viewBox="0 0 26 13" fill="none">
                    <path d="M26 0H0L13 13L26 0Z" fill="white"/>
                  </svg>
                  <img src="${config.dir}/img/pet-locket-banner.png">
                  <div class="lav-upsell__tip-text">
                    This locket is designed specifically for easy
                    and convenient use with NATPAT Pet Stickers.
                    Use in just 3 simple steps: open front window -
                    > insert NATPAT Pet Sticker -> clip window into
                    place & loop onto collar.
                  </div>
                </div>
              </div>
            </div>

            <div class="lav-upsell__counter">
              <div class="lav-upsell__counter-btn lav-upsell__counter-btn--minus">
                <svg width="8" height="1" viewBox="0 0 8 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="8" height="1" fill="#6B6B6B"/>
                </svg>
              </div>
              <div class="lav-upsell__counter-value">0</div>
              <div class="lav-upsell__counter-btn lav-upsell__counter-btn--plus">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <rect x="4.5" width="8" height="1" transform="rotate(90 4.5 0)" fill="black"/>
                  <rect y="3.5" width="8" height="1" fill="black"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="lav-upsell__subscr" style="display:none">
          <div class="lav-upsell__subscr-btn active" data-subscription="true">Add to Subscription</div>
          <div class="lav-upsell__subscr-btn" data-subscription="false">Purchase Separately</div>
        </div>
      </div>
    `

    _$('.lav-section').insertAdjacentHTML('beforeend', markup)

    _$$('.lav-upsell__subscr-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.dataset.subscription === 'true') {
          pushDataLayer('exp_pz_petlocket_plan_click', 'Add to subscription', 'click', 'Pet Locket');
        } else {
          pushDataLayer('exp_pz_petlocket_plan_click', 'Purchase separately', 'click', 'Pet Locket');
        }
        if (btn.classList.contains('active')) return;

        _$('.lav-upsell__subscr-btn.active')?.classList.remove('active');
        btn.classList.add('active');
        updatePrices();
      })
    })

    _$('.lav-upsell__counter-btn--minus').addEventListener('click', () => {
      const valueEl = _$('.lav-upsell__counter-value')
      let value = parseInt(valueEl.textContent)

      if (value > 0) {
        value--
        valueEl.textContent = value
      }

      pushDataLayer('exp_pz_petlocket_qty_click', 'Minus', 'click', 'Pet Locket');

      checkSubscrBtns(value)
    })

    _$('.lav-upsell__counter-value').addEventListener('click', () => {
      pushDataLayer('exp_pz_petlocket_qty_click', 'Input', 'click', 'Pet Locket');
    });

    _$('.lav-upsell__counter-btn--plus').addEventListener('click', () => {
      const valueEl = _$('.lav-upsell__counter-value')
      let value = parseInt(valueEl.textContent)

      value++
      valueEl.textContent = value

      pushDataLayer('exp_pz_petlocket_qty_click', 'Plus', 'click', 'Pet Locket');
      checkSubscrBtns(value)
    })

    function checkSubscrBtns(value) {
      if (value > 0 && _$('.lav-plan.active')?.dataset.plan === 'subscription') {
        $('.lav-upsell__subscr').slideDown().addClass('active');
      } else {
        $('.lav-upsell__subscr').slideUp().removeClass('active');
      }
      updatePrices();
    }
  }

  async function addToCart() {
    if (_$('.lav-proceed').classList.contains('lav-disabled')) return;

    const activePacksText = _$('.lav-package.active .lav-package__packs') ? _$('.lav-package.active .lav-package__packs').innerText.trim() : 'Bundle';
    const activeTogglerText = _$('.lav-toggler__btn.active').textContent.trim();
    const activeSubscrText = _$('.lav-plan.active') ? _$('.lav-plan.active .lav-plan__title').textContent.trim() : '';

    const subscrTermText = _$('.lav-subscr.active') ? _$('.lav-subscr__selector-value span').textContent.trim() : undefined;

    pushDataLayer('exp_pz_checkout_btn_click', `${activePacksText} / ${activeTogglerText} / ${activeSubscrText}`, 'click', 'Product', subscrTermText);
    
    _$('.lav-proceed').classList.add('lav-disabled');
    _$('.lav-proceed').textContent = 'Processing...';
    
    const productConfig = {
      dog: {
        1: '43536637886508',
        2: '43536637919276',
        3: '43536637853740',
        4: '43536637952044'
      },
      cat: {
        1: '44853443723308',
        2: '44853443756076',
        3: '44853443788844',
        4: '44853443821612'
      },
      bundle: '43842554855468',
      locket: '43558182027308'
    }

    const isSubscription = _$('.lav-plan.active')?.dataset.plan === 'subscription';
    const subscriptionId = isSubscription ? _$('.lav-subscr__select').value : null;

    const isBundle = _$('.lav-bundle').classList.contains('active');
    

    const formData = new FormData();
    let counter = 0;

    const isLocket = parseInt(_$('.lav-upsell__counter-value').textContent) > 0;
    const isLocketSubscr = isLocket && _$('.lav-upsell__subscr.active') && _$('.lav-upsell__subscr-btn.active').dataset.subscription === 'true';
    if (isLocket) {
      formData.append(`items[${counter}][id]`, productConfig.locket);
      formData.append(`items[${counter}][quantity]`, parseInt(_$('.lav-upsell__counter-value').textContent));
      if (isLocketSubscr) {
        formData.append(`items[${counter}][selling_plan]`, subscriptionId);
      }
      counter++;
    }

    if (isBundle) {
      formData.append(`items[${counter}][id]`, productConfig.bundle);
      formData.append(`items[${counter}][quantity]`, 1);
      counter++;
    } else {
      const activePack = _$('.lav-packages__list .lav-package.active');
      const packCount = activePack.dataset.pack;

      const productType = _$('.lav-toggler__btn[data-category="dogs"]').classList.contains('active') ? 'dog' : 'cat';
      const variantId = productConfig[productType][packCount];
      formData.append(`items[${counter}][id]`, variantId);
      formData.append(`items[${counter}][quantity]`, 1);
      if (isSubscription) {
        formData.append(`items[${counter}][selling_plan]`, subscriptionId);
      }
      counter++;
    }
    


    // formData.append('items[0][id]', variantId);
    // formData.append('items[0][quantity]', quantity);
    // formData.append('items[0][selling_plan]', sellingPlanId);

    // Bundle
    // formData.append('id', '43842554855468');
    // formData.append('quantity', 1);

    try {
      await fetch('/cart/clear.js', { method: 'POST' })
      const addToCartResponse = await fetch('/cart/add.js', {
        method: 'POST',
        body: formData
      })

      const addToCartResult = await addToCartResponse.json();
      console.log('Add to cart result:', addToCartResult);
      if (addToCartResult.items?.length) {
        window.location.href = '/checkout';
      } else {
        alert(addToCartResult.message + '\n' + addToCartResult.description);
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('An error occurred while adding the product to the cart. Please try again.');
    } finally {
      setTimeout(() => {
        _$('.lav-proceed').classList.remove('lav-disabled');
        _$('.lav-proceed').textContent = 'GET PET ZEN NOW';
      }, 2500);
    }
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
  function pushDataLayer(name = '', desc = '', type = '', loc = '', loc2 = undefined) {
    window.dataLayer = window.dataLayer || []

    try {
      const event = {
        event: 'event-to-ga4',
        event_name: name,
        event_desc: desc,
        event_type: type,
        event_loc: loc,
        event_loc2: loc2
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
      tipIcon: `
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="20" height="20" rx="10" fill="#337C6B"/>
          <g clip-path="url(#clip0_778_8)">
          <g clip-path="url(#clip1_778_8)">
          <g clip-path="url(#clip2_778_8)">
          <path d="M9.02051 14.2953H11.0205V16H9.02051V14.2953ZM7.02051 6.54039C7.02051 6.19499 7.09894 5.8663 7.2558 5.55432C7.41266 5.24234 7.62835 4.97493 7.90286 4.75209C8.17737 4.51811 8.49763 4.33426 8.86365 4.20056C9.22966 4.06685 9.62182 4 10.0401 4C10.5238 4 10.9617 4.08357 11.3538 4.2507C11.7591 4.41783 12.0924 4.65181 12.3538 4.95265C12.4846 5.10864 12.5891 5.25348 12.6676 5.38719C12.7591 5.52089 12.831 5.66574 12.8833 5.82173C12.9355 5.96657 12.9682 6.1337 12.9813 6.32312C13.0074 6.51253 13.0205 6.73538 13.0205 6.99164C13.0205 7.28134 13.014 7.52646 13.0009 7.72702C13.0009 7.91644 12.9878 8.08357 12.9617 8.22841C12.9355 8.37326 12.9029 8.50139 12.8636 8.61281C12.8244 8.71309 12.7721 8.8078 12.7068 8.89694L11.3538 10.8691C11.2623 11.0028 11.1839 11.1421 11.1185 11.2869C11.0532 11.4206 11.0205 11.5655 11.0205 11.7214V13.0585H9.02051V11.5042C9.02051 11.259 9.06626 11.0251 9.15776 10.8022C9.24927 10.5794 9.36691 10.3621 9.51071 10.1504L10.7656 8.41226C10.8702 8.26741 10.9355 8.11142 10.9617 7.94429C11.0009 7.77716 11.0205 7.61003 11.0205 7.4429V6.5571C11.0205 6.32312 10.9225 6.12256 10.7264 5.95543C10.5434 5.7883 10.3146 5.70474 10.0401 5.70474C9.80482 5.70474 9.57607 5.77716 9.35384 5.92201C9.13162 6.06685 9.02051 6.27855 9.02051 6.5571V7.52646H7.02051V6.54039Z" fill="#337C6B"/>
          </g>
          </g>
          </g>
          <path d="M10.7109 12.5234H8.71875C8.72396 12.0547 8.76042 11.651 8.82812 11.3125C8.90104 10.9688 9.02344 10.6589 9.19531 10.3828C9.3724 10.1068 9.60677 9.83333 9.89844 9.5625C10.1432 9.34375 10.3568 9.13542 10.5391 8.9375C10.7214 8.73958 10.8646 8.53646 10.9688 8.32812C11.0729 8.11458 11.125 7.8776 11.125 7.61719C11.125 7.3151 11.0781 7.0651 10.9844 6.86719C10.8958 6.66406 10.7604 6.51042 10.5781 6.40625C10.401 6.30208 10.1771 6.25 9.90625 6.25C9.68229 6.25 9.47396 6.29948 9.28125 6.39844C9.08854 6.49219 8.92969 6.63802 8.80469 6.83594C8.6849 7.03385 8.6224 7.29427 8.61719 7.61719H6.35156C6.36719 6.90365 6.53125 6.3151 6.84375 5.85156C7.16146 5.38281 7.58594 5.03646 8.11719 4.8125C8.64844 4.58333 9.24479 4.46875 9.90625 4.46875C10.6354 4.46875 11.2604 4.58854 11.7812 4.82812C12.3021 5.0625 12.7005 5.40885 12.9766 5.86719C13.2526 6.32031 13.3906 6.8724 13.3906 7.52344C13.3906 7.97656 13.3021 8.38021 13.125 8.73438C12.9479 9.08333 12.7161 9.40885 12.4297 9.71094C12.1432 10.013 11.8281 10.3255 11.4844 10.6484C11.1875 10.9141 10.9844 11.1927 10.875 11.4844C10.7708 11.776 10.7161 12.1224 10.7109 12.5234ZM8.48438 14.9375C8.48438 14.6042 8.59896 14.3281 8.82812 14.1094C9.05729 13.8854 9.36458 13.7734 9.75 13.7734C10.1302 13.7734 10.4349 13.8854 10.6641 14.1094C10.8984 14.3281 11.0156 14.6042 11.0156 14.9375C11.0156 15.2604 10.8984 15.5339 10.6641 15.7578C10.4349 15.9818 10.1302 16.0938 9.75 16.0938C9.36458 16.0938 9.05729 15.9818 8.82812 15.7578C8.59896 15.5339 8.48438 15.2604 8.48438 14.9375Z" fill="white"/>
          <defs>
          <clipPath id="clip0_778_8">
          <rect width="7" height="12" fill="white" transform="translate(6.5 4)"/>
          </clipPath>
          <clipPath id="clip1_778_8">
          <rect width="7" height="12" fill="white" transform="translate(6.5 4)"/>
          </clipPath>
          <clipPath id="clip2_778_8">
          <rect width="7" height="12" fill="white" transform="translate(6.5 4)"/>
          </clipPath>
          </defs>
        </svg>
      `,
      pinkCheck: `
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
          <g clip-path="url(#clip0_706_2900)">
            <path d="M8.5 17C13.1944 17 17 13.1944 17 8.5C17 3.80558 13.1944 0 8.5 0C3.80558 0 0 3.80558 0 8.5C0 13.1944 3.80558 17 8.5 17Z" fill="#FF3C81"/>
            <path d="M2.73926 8.68993L7.24638 13.1971L14.2575 6.18597L12.7551 4.68359L7.24638 10.1923L4.24163 7.18755L2.73926 8.68993Z" fill="white"/>
          </g>
          <defs>
            <clipPath id="clip0_706_2900">
              <rect width="17" height="17" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      `,
      arrowDown: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M7.15984 9.49366L7.4874 9.16382C7.59049 9.06081 7.72765 9.00407 7.87423 9.00407C8.02074 9.00407 8.15806 9.06081 8.26115 9.16382L11.9978 12.9006L15.7387 9.15968C15.8416 9.05667 15.9789 9 16.1254 9C16.2719 9 16.4093 9.05667 16.5124 9.15968L16.84 9.48748C17.0533 9.70066 17.0533 10.0479 16.84 10.2611L12.386 14.7311C12.2831 14.834 12.1459 14.9066 11.9981 14.9066H11.9964C11.8498 14.9066 11.7126 14.834 11.6097 14.7311L7.15984 10.2732C7.05675 10.1703 7.00016 10.029 7 9.88245C7 9.73586 7.05675 9.59651 7.15984 9.49366Z" fill="#6E828C"/>
        </svg>
      `
    }

    return svgObj[name]
  }
})();