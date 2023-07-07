const orig = console.log;
console.log = function () {
  orig.apply(console, arguments);
  navigator.sendBeacon('https://console.wiredgeese.com/log/', arguments[0]);
};

console.log('initExp');

if (location.href.includes('/upgrade/player')) {
  initUpgradePage();
} else if (location.href.includes('/home')) {
  initRedirectPage();
}

function initRedirectPage() {
  // console.log('fire');
  console.log(location.href);
  // console.log(document.body.innerHTML);

  waitFor(
    () => document.body,
    () => {
      document.body.insertAdjacentHTML(
        'beforeend',
        `
          <style>
          .ggg {
            padding; 0 10px;
          }
          .lav-point {
            width: 3px;
            height: 3px;
            border-radius: 50px;
            background: green;
            position: fixed;
            top: 20px;
            right: 3px;
            z-index: 9999999999999999999999999;
          }
          .lav-point_2 {
            right: 9px;
            background-color: yellow;
          }
          .lav-point_3 {
            right: 15px;
            background-color: red;
          }
          </style>
          <div class='lav-point'></div>
        `
      );

      // console.log(
      //   's1: ' + JSON.stringify(sessionStorage.getItem('isRedirectedExp'))
      // );

      if (sessionStorage.getItem('isRedirectedExp') !== 'yes') {
        sessionStorage.setItem('isRedirectedExp', 'yes');

        waitFor(
          () =>
            document.querySelector(
              '[data-crstarget="hypothesis-2-upgrade-target"]'
            ),
          () => {
            document
              .querySelector('[data-crstarget="hypothesis-2-upgrade-target"]')
              .dispatchEvent(new Event('click'));
          }
        );
      }

      // console.log(
      //   's2: ' + JSON.stringify(sessionStorage.getItem('isRedirectedExp'))
      // );
    },
    50
  );

  waitFor(
    () => document.querySelector('.upgradePopup .primaryAction'),
    () => {
      console.log('popup');
      document.body.insertAdjacentHTML(
        'beforeend',
        `
          <style>
          .lav-point {
            width: 3px;
            height: 3px;
            border-radius: 50px;
            background: green;
            position: fixed;
            top: 20px;
            right: 3px;
            z-index: 9999999999999999999999999;
          }
          .lav-point_2 {
            right: 9px;
            background-color: yellow;
          }
          .lav-point_3 {
            right: 15px;
            background-color: red;
          }
          </style>
          <div class='lav-point lav-point_2'></div>
        `
      );

      // document
      //   .querySelector('.upgradePopup .primaryAction')
      //   .dispatchEvent(new Event('click'));

      // setInterval(function () {
      //   document
      //     .querySelector('.upgradePopup .primaryAction')
      //     .dispatchEvent(new Event('click'));
      // }, 200);
    },
    50
  );

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
}

function initUpgradePage() {
  navigator.sendBeacon('https://console.wiredgeese.com/log/', location.href);

  /********* Settings **********/
  const settings = {
    // dir: 'https://flopsi69.github.io/crs/swingu/popup',
    dir: 'https://conversionratestore.github.io/projects/swingu/img',
    observe: false,
    clarity: {
      enable: true,
      params: ['set', 'improve_upgrade_popup_v2', 'variant_1'],
    },
    debug: true,
  };

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
<style>
  .fixed.bottom-0 {
    display: none!important;
  }

  [dusk="gps-upgrade-container"]  {
    display: none!important;
  }

  body {
    padding-bottom: 0 !important;
  }

  .main-column {
    background: #fff;
  }

  .main-column section,
    .in-app-upgrade-state--show:before,
    .in-app-upgrade-ctas {
        display: none !important;
    }

    .page-template-page-sections .main-container .main-column {
        padding-bottom: 140px !important;
    }

    .header-type-in-app,
    .price-comparison-table,
    .video-hero__content,
    .in-app-upgrade-ctas__open-upgrade-tray {
        display: none !important;
    }

    .video-hero__player {
        padding: 24px 18px !important;
    }

    /* HEADER */

    .my_header {
        position: relative;
        background-image: url(https://flopsi69.github.io/crs/swingu/popup/img/head-bg.jpeg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 0px -25px;
        text-align: center;
        padding: 20px 20px 75px 20px;
    }
    section.choose_plan {
        background: #fff;
        display: block !important;
        padding-bottom: 140px;
    }

    .choose_plan .close_x {
        text-align: left;
    }

    .choose_plan h2 {
        font-family: 'SF Pro Display', 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 30px;
        line-height: 38px;
        color: #FFFFFF;
        margin: 16px 0 24px;
    }

    .choose_label {
        font-family: 'Inter', 'Roboto', sans-serif;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #FFFFFF;
    }

    .toggle_plan {
        display: flex;
        justify-content: space-between;
        position: relative;
        width: fit-content;
        background: #F5F8FA;
        border: 1px solid #D9E1E8;
        border-radius: 26px;
        padding: 4px;
        margin: 16px auto 27px;
    }

    .toggle_plan span {
        width: 111px;
        z-index: 1;
        transition: color .3s ease-in-out;
        text-align: center;
        padding: 5px 0;
        font-family: 'Inter', 'Roboto', sans-serif;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        color: #FFFFFF;
    }

    .toggle_plan span:first-child {
        color: #FFFFFF;
        margin-right: 12px;
    }

    .toggle_plan span:first-child+span {
        color: #2B2B2B;
    }

    .dark_bg {
        position: absolute;
        top: 4px;
        left: 4px;
        height: calc(100% - 8px);
        width: 111px;
        background-color: #253139;
        transition: transform .3s ease-in-out;
        border-radius: 30px;
    }

    .toggle_plan.monthly_active .dark_bg {
        transform: translateX(calc(100% + 12px));
    }

    .toggle_plan.monthly_active span:first-child {
        color: #2B2B2B;
    }

    .toggle_plan.monthly_active span:first-child+span {
        color: white;
    }

    /* PLANS CHECKBOX */
    .plans_checkbox_container .annual_checkbox_wrapper,
    .plans_checkbox_container.show_annual .monthly_checkbox_wrapper {
        display: none;
    }

    .plans_checkbox_container {
        padding: 0 20px;
        margin-top: -75px;
    }

    .plans_checkbox_container.show_annual .annual_checkbox_wrapper {
        display: flex;
        justify-content: space-between;
    }

    .annual_checkbox_wrapper {
        margin-bottom: 42px;
        position: relative;
    }

    .monthly_checkbox_wrapper {
        margin-bottom: 16px;
    }

    .annual_checkbox_wrapper.subs {
        pointer-events: none;
        margin-bottom: 16px;
    }

    .subs .pro_pack_bottom {
        display: none !important;
    }

    .annual_checkbox_wrapper .plan_checkbox {
        width: 50%;
        text-align: left;
    }

    .annual_checkbox_wrapper .plan_checkbox:first-child {
        margin-right: 10px;
    }

    .monthly_checkbox_wrapper .plan_checkbox {
        padding: 26px 16px;
    }

    .plan_checkbox {
        position: relative;
        background: #F5F8FA;
        border: 1px solid #D9E1E8;
        border-radius: 10px;
        padding: 16px;
        transition: all .3s ease-in-out;
        z-index: 1;
        align-self: flex-start;
    }

    .plan_checkbox.checkbox_active_plan {
        background: #253139;
        border-color: #FFC803;
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
    }

    .plan_checkbox.checkbox_active_plan p {
        color: #FFFFFF;
    }

    .plan_checkbox p {
        color: #2B2B2B;
        margin: 0;
    }

    .check_circle {
        display: flex;
        position: absolute;
        top: 12px;
        right: 12px;
    }

    .check_circle img {
        width: 18px;
        height: 18px;
    }

    .monthly_checkbox_wrapper .check_circle {
        top: 22px;
    }

    .plan_checkbox:not(.checkbox_active_plan) .check_circle img:first-child {
        display: none;
    }

    .plan_checkbox.checkbox_active_plan .check_circle img:last-child {
        display: none;
    }

    .plan_checkbox p.free_trial {
        position: absolute;
        top: -11px;
        left: 12px;
        background: #FFC803;
        border-radius: 28px;
        padding: 4px 12px;
        font-family: 'SF Pro Display', 'Roboto', sans-serif;
        font-weight: 600;
        font-size: 12px;
        line-height: 14px;
        color: #000000;
    }

    .plan_checkbox .title {
        font-family: 'SF Pro Display', 'Roboto', sans-serif;
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;
    }

    .plan_checkbox p.price {
        margin: 6px 0;
        font-family: 'Inter', 'Roboto', sans-serif;
        font-size: 14px;
        line-height: 17px;
    }

    .plan_checkbox .month_price p.price {
        margin-bottom: 0 !important;
    }

    .plan_checkbox .month_price {
        font-family: 'SF Pro Display', 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
    }

    .plan_checkbox .month_price s {
        color: #596974;
    }

    .plan_checkbox.checkbox_active_plan .month_price s {
        color: #D9D9D9;
    }

    .plan_checkbox p.price_off {
        position: absolute;
        top: 44px;
        right: -1px;
        font-family: 'SF Pro Display', 'Roboto', sans-serif;
        font-weight: 600;
        font-size: 12px;
        line-height: 14px;
        color: #2B2B2B;
        padding: 5px;
        background: #FFC803;
        border-radius: 28px 0px 0px 28px;
    }

    .pro_pack_bottom {
        position: absolute;
        width: calc(50% - 6px);
        left: 0;
        bottom: -28px;
        padding-top: 16px;
        background: #F5F8FA;
        border: 1px solid #F5F8FA;
        border-radius: 0 0 10px 10px; 
        transform: translateY(0);
        transition: all .3s ease-in-out;  
        border: 1px solid #D9E1E8;
    } 

    .pro_pack_bottom p {
        font-family: 'SF Pro Display', 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        text-align: center;
        letter-spacing: -0.01em;
        color: #596974; 
        margin-bottom: 6px;
    }

    .pro_pack_bottom p span {
        font-weight: 600;
    }

    .checkbox_active_plan + .pro_pack_bottom {
        border-color: #FFC803;
    }

    .curr_plan {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 6px;
        background: #F5F8FA;
        border-top: 1px solid #D9E1E8;
        margin: 16px -16px -16px;
        border-radius: 0 0 9px 9px;
    }

    .curr_plan.hide_curr_label {
        display: none;
    }
    
    .monthly_checkbox_wrapper .curr_plan {
        margin-bottom: -26px;
    }

    .curr_plan p {            
        font-family: 'SF Pro Display', 'Roboto', sans-serif;
        font-weight: 600;
        font-size: 12px;
        line-height: 14px;
        text-align: center;
        letter-spacing: -0.01em;
        color: #2B2B2B !important;
        margin-left: 4px;
    }

    .checkbox_active_plan .curr_plan {
        border-color: #FFC803;
    }

    /* List */

    .list {            
        margin: 16px 0;
        text-align: left;
        padding: 0 20px;          
    }

    .list li {
        position: relative;
        font-weight: 400;
        font-size: 14px;
        line-height: 19px;
        color: #253139;
        font-family: 'SF Pro Text', 'SF Pro Display', 'Roboto', sans-serif;
        margin-bottom: 11px;
        margin-left: 30px;
        letter-spacing: -0.15px;
    }
    .list li::before {
        content: "";
        position: absolute;
        display: inline-block;
        top: 50%;
        transform: translateY(-50%);
        left: -30px;
        width: 16px;
        height: 16px;
        background: url(${settings.dir}/check_arr_yellow.svg) no-repeat center center;
        background-size: cover;
    }

    .list.plus_list li:nth-child(4),
    .list.plus_list li:nth-child(5),
    .list.plus_list li:nth-child(6) {
        color: #A0ADB6;
    }

    .list.plus_list li:nth-child(4)::before,
    .list.plus_list li:nth-child(5)::before,
    .list.plus_list li:nth-child(6)::before {
        width: 21px;
        height: 23px;
        background: url(${settings.dir}/pro_v.svg) no-repeat center center;
    }

    .features {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px;           
        border: 1px solid #D9E1E8;
        border-radius: 10px;
        z-index: 1;
        background: #FFFFFF;
        margin: 0 20px 12px;
        box-shadow: 0px 1px 3px rgba(19, 24, 33, 0.07);
        border-radius: 10px;
    }

    .features > div {
        display: flex;
        align-items: center;
    }

    .table_wrap {
        max-height: 0;
        padding-left: 20px;
        overflow: hidden;
        transition: max-height 0.5s ease-in-out;
        border-radius: 0 0 10px 10px;
    }

    .features.show_table {
        border-radius: 10px;
    }

    .features.show_table > div + img {
        transform: rotate(180deg) !important;
    }
    .features.show_table + .table_wrap {
      max-height: 2000px;
      border-top: 1px solid #F5F8FA;
    }

    .features p {
        font-family: 'Inter', 'Roboto', sans-serif;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        color: #008A00;
        margin: 0;
        margin-left: 7px;
    }

    /* TABLE */

    #plans_comparison_table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 10px;
    }

    #plans_comparison_table th,
    #plans_comparison_table td {
        font-family: 'SF Pro Display', 'Roboto', sans-serif;
    }

    #plans_comparison_table th:not(th:first-child) {
        padding-top: 14px;
    }

    #plans_comparison_table th:not(th:first-child),
    #plans_comparison_table td:not(td:first-child) {
        background: #F5F8FA;
    }

    #plans_comparison_table tr:first-child {
        margin-bottom: 10px;
    }

    #plans_comparison_table tr th:first-child {
        font-weight: 700;
        font-size: 18px;
        line-height: 20px;
        color: #253139;
    }

    #plans_comparison_table tr th:not(th:first-child) {
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        padding-bottom: 10px;
    }

    #plans_comparison_table tr th:nth-child(2) {
        color: #596974;
    }

    #plans_comparison_table tr th:nth-child(3) {
        color: #49BB54;
    }

    #plans_comparison_table tr th:nth-child(4) {
        color: #FFC803;
    }

    #plans_comparison_table tr:not(:first-child) {
        border-bottom: 1px solid #D9E1E8;
    }

    #plans_comparison_table td {
        border: none;
        padding: 10px 0;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        color: #596974;
    }

    #plans_comparison_table td:not(:first-child) {
        text-align: center;
        vertical-align: middle;
    }

    #plans_comparison_table td:not(:first-child) img {
        display: inline-block;
        vertical-align: middle;
    }

    #plans_comparison_table th:first-child,
    #plans_comparison_table td:first-child {
        padding-right: 16px;
        text-align: left;
    }

    #plans_comparison_table th:nth-child(2),
    #plans_comparison_table td:nth-child(2) {
        padding-left: 20px;
    }

    #plans_comparison_table th:nth-child(3),
    #plans_comparison_table td:nth-child(3) {
        padding-left: 15px;
        padding-right: 15px;
    }

    #plans_comparison_table th:nth-child(4),
    #plans_comparison_table td:nth-child(4) {
        padding-right: 23px;
    }

    /* fixed_div */

    .fixed_div {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;            
        background: #FFFFFF;
        box-shadow: 0px -2px 8px rgba(37, 49, 57, 0.1);
        z-index: 9999;
        text-align: center;
    }

    .fixed_div > div {
        padding: 10px 20px;
    }

    .fixed_div p {
        font-family: 'SF Pro Display', 'Roboto', sans-serif;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        color: #253139;
        margin-bottom: 10px;
    }

    .fixed_div button {
        all: unset;
        width: 100%;
        background: #49BB54;
        border-radius: 10px;
        padding: 18px 0;
        font-family: 'SF Pro Display', 'Roboto', sans-serif;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        text-align: center;
        letter-spacing: 0.38px;
        color: #FFFFFF;
        height: 70px;
        box-sizing: border-box;
        display: block;
    }

    @media only screen and (max-width: 385px) {
        .plan_checkbox p.price_off,
        .pro_pack_bottom p {
            font-size: 11px;
        }
    }

    @media only screen and (max-width: 375px) {
        .plan_checkbox p.price_off,
        .pro_pack_bottom p {
            font-size: 10px;
        }
    }

    
    @media only screen and (max-width: 355px) {
        .plans_checkbox_container {
            padding: 0 10px;
        }

        #plans_comparison_table th:nth-child(3), #plans_comparison_table td:nth-child(3) {
            padding-left: 10px;
            padding-right: 10px;
        }
    }

    @media only screen and (max-width: 335px) {
        .plans_checkbox_container {
            padding: 0 5px;
        }

        .annual_checkbox_wrapper .plan_checkbox:first-child {
            margin-right: 5px;
        }

        #plans_comparison_table th:nth-child(2), #plans_comparison_table td:nth-child(2) {
            padding-left: 15px;
        }
    }
</style>
`;

  const stylesEl = document.createElement('style');
  stylesEl.innerHTML = styles;

  let scriptEl = document.createElement('script');
  scriptEl.src =
    'https://cdn.jsdelivr.net/npm/seamless-scroll-polyfill@latest/lib/bundle.min.js';
  scriptEl.async = false;

  const smallCheckSvg = `
<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.02 8.26L4.4975 6.7375C4.36917 6.60917 4.21167 6.545 4.025 6.545C3.83833 6.545 3.675 6.615 3.535 6.755C3.40667 6.88333 3.3425 7.04667 3.3425 7.245C3.3425 7.44333 3.40667 7.60667 3.535 7.735L5.53 9.73C5.65833 9.85833 5.82167 9.9225 6.02 9.9225C6.21833 9.9225 6.38167 9.85833 6.51 9.73L10.4825 5.7575C10.6108 5.62917 10.675 5.47167 10.675 5.285C10.675 5.09833 10.605 4.935 10.465 4.795C10.3367 4.66667 10.1733 4.6025 9.975 4.6025C9.77667 4.6025 9.61333 4.66667 9.485 4.795L6.02 8.26ZM7 14C6.03167 14 5.12167 13.8161 4.27 13.4484C3.41833 13.0811 2.6775 12.5825 2.0475 11.9525C1.4175 11.3225 0.918867 10.5817 0.5516 9.73C0.183867 8.87833 0 7.96833 0 7C0 6.03167 0.183867 5.12167 0.5516 4.27C0.918867 3.41833 1.4175 2.6775 2.0475 2.0475C2.6775 1.4175 3.41833 0.918633 4.27 0.5509C5.12167 0.183633 6.03167 0 7 0C7.96833 0 8.87833 0.183633 9.73 0.5509C10.5817 0.918633 11.3225 1.4175 11.9525 2.0475C12.5825 2.6775 13.0811 3.41833 13.4484 4.27C13.8161 5.12167 14 6.03167 14 7C14 7.96833 13.8161 8.87833 13.4484 9.73C13.0811 10.5817 12.5825 11.3225 11.9525 11.9525C11.3225 12.5825 10.5817 13.0811 9.73 13.4484C8.87833 13.8161 7.96833 14 7 14Z" fill="#49BB54"/>
</svg>
`;

  waitFor(
    () => document.head,
    () => {
      document.head.appendChild(stylesEl);
      document.head.appendChild(scriptEl);
    },
    100
  );
  /*** STYLES / End ***/

  const html = `
  <section class="choose_plan">
    <div class="my_header">
      <div class="close_x">
        <img src="${settings.dir}/x_close.svg" alt="">
      </div>
      <h2>Start Playing Better<br>Golf Today</h2>
      <p class="choose_label">Choose a plan</p>
      <div class="toggle_plan">
        <span class="annual">Annual</span>
        <span class="monthly">Monthly</span>
        <div class="dark_bg"></div>
      </div>
    </div>
    <div class="plans_checkbox_container show_annual">
      <div class="annual_checkbox_wrapper">
        <div class="plan_checkbox checkbox_active_plan" data-pack="annual_pro">                    
          <p class="free_trial">7-day Free Trial</p>
          <div class="check_circle">
            <img src="${settings.dir}/check_circle_yellow_png.png" alt="">
            <img src="${settings.dir}/ellipse.svg" alt="">
          </div>
          <p class="title">Pro</p>
          <p class="price"><b>$99.99</b>/year</p>
          <p class="price_off">67% OFF*</p>
          <p class="month_price">(<s>$24.99</s> $8.33/month)</p>
          <div class="curr_plan hide_curr_label">
            ${smallCheckSvg}
            <p>Current plan</p>
          </div>
        </div>
        <div class="pro_pack_bottom">
          <p><span>*67%</span> OFF compared to monthly</p>
        </div>                
        <div class="plan_checkbox" data-pack="annual_plus">
          <div class="check_circle">
            <img src="${settings.dir}/check_circle_yellow_png.png" alt="">
            <img src="${settings.dir}/ellipse.svg" alt="">
          </div>
          <p class="title">Plus</p>
          <p class="price"><b>$49.99</b>/year</p>
          <p class="month_price">($4.16/month)</p>
          <div class="curr_plan hide_curr_label">
            ${smallCheckSvg}
            <p>Current plan</p>
          </div>
        </div>
      </div>
      <div class="monthly_checkbox_wrapper">
        <div class="plan_checkbox checkbox_active_plan" data-pack="monthly_pro">
          <div class="check_circle">
            <img src="${settings.dir}/check_circle_yellow_png.png" alt="">
            <img src="${settings.dir}/ellipse.svg" alt="">
          </div>
          <p class="title">Pro</p>
          <p class="price"><b>$24.99</b>/month</p>
          <div class="curr_plan hide_curr_label">
            ${smallCheckSvg}
            <p>Current plan</p>
          </div>
        </div>
      </div>
    </div>
    <ul class="list">
      <li>“Plays Like” distances with wind and elevation</li>
      <li>Green reading maps for 13,000+ courses</li>
      <li>Enhanced scorecard & stats</li>
      <li>Biggest video library of performance drills</li>
      <li>Stats comparison to your target handicap</li>
      <li>Relative Handicap for each facet of your game</li>
    </ul>
    <div class="plans_comparison_table_container">
      <div class="features">
        <div>
          <img src="${settings.dir}/golf-flag.svg" alt="">
          <p>Compare all features</p>
        </div>
        <img src="${settings.dir}/down_arr.svg" alt="">
      </div>
      <div class="table_wrap">
        <table id="plans_comparison_table">
        </table>
      </div>
    </div>
  </section>
  <div class="fixed_div">
    <div>
      <p>No commitment. Cancel anytime.</p>
      <button></button>
    </div>
  </div>
`;

  const drawTable = () => {
    // define an array of data
    const data = [
      { benefit: 'Distances to Greens & Hazards', free: true, plus: true },
      {
        benefit: 'GPS Rangefinder And Scorecard For Every Course In The World',
        free: true,
        plus: true,
      },
      { benefit: 'SwingU Handicap', free: true, plus: true },
      { benefit: 'Shot Tracking', free: true, plus: true },
      { benefit: 'Clubhouse Content Feed', free: true, plus: true },
      { benefit: 'Wind Speed & Elevation', free: false, plus: true },
      { benefit: '"Plays Like" Distances', free: false, plus: true },
      { benefit: 'Club Recommendation', free: false, plus: true },
      {
        benefit: 'Green-Reading Maps For 13,000+ Courses',
        free: false,
        plus: true,
      },
      { benefit: 'Enhanced Scorecard & Stats', free: false, plus: true },
      { benefit: 'Hole Insights & Hole Notes', free: false, plus: true },
      { benefit: 'No Ads ln-App', free: false, plus: true },
      { benefit: 'Giveaway Eligibility', free: false, plus: true },
      {
        benefit: 'Strokes Gained Stats vs. Target Handicap Benchmarks',
        free: false,
        plus: false,
      },
      {
        benefit:
          'Handicap Index for Each Facet of Your Game (Driving, Approach, Chip/Pitch, Sand & Putting)',
        free: false,
        plus: false,
      },
      {
        benefit: 'Personalized #1 Game Improvement Priority',
        free: false,
        plus: false,
      },
      { benefit: 'Personalized Prescriptive Drill', free: false, plus: false },
      {
        benefit:
          'Extensive Library of Performance Practice Drills, Premium Instructional Content and Informative Videos',
        free: false,
        plus: false,
      },
      {
        benefit: 'Tour-Level Stats & Analysis Web Portal',
        free: false,
        plus: false,
      },
    ];

    // define a function to create a table cell with an arrow or dash, depending on the value of the given property
    function createArrowCell(value, color) {
      const cell = document.createElement('td');
      const img = document.createElement('img');

      img.src = value
        ? `${settings.dir}/check_circle_${color}.svg`
        : `${settings.dir}/minus_circle.svg`;

      cell.appendChild(img);
      return cell;
    }

    // get a reference to the table element in the HTML document
    const table = document.getElementById('plans_comparison_table');

    // create the table header row
    const headerRow = document.createElement('tr');
    const headerNames = ['What do you get', 'Free', 'Plus', 'Pro'];

    // loop through each header name and create a table cell for it
    headerNames.forEach((headerName) => {
      const headerCell = document.createElement('th');
      headerCell.textContent = headerName;
      headerRow.appendChild(headerCell);
    });

    // add the header row to the table
    table.appendChild(headerRow);

    // create a table row for each item in the data array
    data.forEach((item) => {
      const row = document.createElement('tr');

      // create a table cell for the "What do you get" column
      const benefitCell = document.createElement('td');
      benefitCell.textContent = item.benefit;
      row.appendChild(benefitCell);

      // create a table cell for the "Free" column
      const freeCell = createArrowCell(item.free, 'gray');
      row.appendChild(freeCell);

      // create a table cell for the "Plus" column
      const plusCell = createArrowCell(item.plus, 'green');
      row.appendChild(plusCell);

      // create a table cell for the "Pro" column, using the same function as above
      const proCell = createArrowCell(true, 'yellow');
      row.appendChild(proCell);

      // add the row to the table
      table.appendChild(row);
    });
  };

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
    gaEvent('exp_pick_a_plan_start');

    document
      .querySelector('.antialiased')
      .insertAdjacentHTML('afterbegin', html);

    const togglePlanEl = document.querySelector('.toggle_plan');
    const plansCheckboxContainer = document.querySelector(
      '.plans_checkbox_container'
    );
    const payBtn = document.querySelector('.fixed_div button');

    waitFor(
      () => document.querySelector('.subscription-boxes'),
      () => {
        payBtn.innerText = 'Start 7-day free trial';

        const isSubscriptionActive = document.querySelector(
          '[dusk="upgrade-button--manage-subscription"]'
        );

        if (isSubscriptionActive) {
          payBtn.innerText = 'Manage subscriptions';

          document
            .querySelector('.annual_checkbox_wrapper')
            .classList.add('subs');

          if (
            document.querySelector(
              '[dusk="segmented-control--annual"][data-active="true"]'
            )
          ) {
            if (
              document.querySelector(
                '.checkbox_active_plan[data-pack="monthly_pro"]'
              )
            ) {
              document
                .querySelector('.checkbox_active_plan[data-pack="monthly_pro"]')
                .classList.remove('checkbox_active_plan');
            }

            if (
              document.querySelector(
                '[dusk="subscription-option--pro"][data-active="true"]'
              )
            ) {
              document
                .querySelector('[data-pack="annual_pro"] .hide_curr_label')
                .classList.remove('hide_curr_label');
            } else if (
              document.querySelector(
                '[dusk="subscription-option--plus"][data-active="true"]'
              )
            ) {
              document.querySelector('.list').classList.add('plus_list');

              document
                .querySelector('.checkbox_active_plan')
                .classList.remove('checkbox_active_plan');
              document
                .querySelector('[data-pack="annual_plus"]')
                .classList.add('checkbox_active_plan');

              document
                .querySelector('[data-pack="annual_plus"] .hide_curr_label')
                .classList.remove('hide_curr_label');
            }
          } else if (
            document.querySelector(
              '[dusk="segmented-control--monthly"][data-active="true"]'
            )
          ) {
            togglePlanEl.classList.add('monthly_active');
            plansCheckboxContainer.classList.remove('show_annual');
            if (
              document.querySelector(
                '.checkbox_active_plan[data-pack="annual_pro"]'
              )
            ) {
              document
                .querySelector('.checkbox_active_plan[data-pack="annual_pro"]')
                .classList.remove('checkbox_active_plan');
            }

            document
              .querySelector(
                '.monthly_checkbox_wrapper .plan_checkbox .hide_curr_label'
              )
              .classList.remove('hide_curr_label');
          }
        }

        // Annual/Monthly switcher
        togglePlanEl.addEventListener('click', (event) => {
          const target = event.target;
          if (target.tagName !== 'SPAN') return false;

          if (target.classList.contains('annual')) {
            // the 'annual' span was clicked
            togglePlanEl.classList.remove('monthly_active');
            plansCheckboxContainer.classList.add('show_annual');

            gaEvent(
              'exp_pick_a_plan_annual_tab',
              'Annual',
              'Tab',
              'Сhoice of subscription period'
            );

            if (isSubscriptionActive) return false;

            payBtn.innerText = 'Start 7-day free trial';

            if (
              document.querySelector(
                '.annual_checkbox_wrapper .checkbox_active_plan'
              ).dataset.pack === 'annual_plus'
            ) {
              payBtn.innerText = 'Continue';

              if (!document.querySelector('.plus_list')) {
                document.querySelector('.list').classList.add('plus_list');
              }
            }
          } else if (target.classList.contains('monthly')) {
            // the 'monthly' span was clicked
            togglePlanEl.classList.add('monthly_active');
            plansCheckboxContainer.classList.remove('show_annual');

            if (!isSubscriptionActive) {
              payBtn.innerText = 'Continue';
            }

            document.querySelector('.plus_list')?.classList.remove('plus_list');

            gaEvent(
              'exp_pick_a_plan_monthly_tab',
              'Monthly',
              'Tab',
              'Сhoice of subscription period'
            );
          }
        });

        // plans checkbox
        plansCheckboxContainer
          .querySelector('.annual_checkbox_wrapper')
          .addEventListener('click', (event) => {
            const target = event.target.closest('[data-pack]');

            if (!target || isSubscriptionActive) return false;

            if (target.dataset.pack === 'annual_pro') {
              payBtn.innerText = 'Start 7-day free trial';

              gaEvent(
                'exp_pick_a_plan_pro',
                'Pro',
                'Button',
                'Сhoice of subscription type'
              );

              document.querySelector('.list').classList?.remove('plus_list');
            } else {
              payBtn.innerText = 'Continue';

              document.querySelector('.list').classList.add('plus_list');

              gaEvent(
                'exp_pick_a_plan_plus',
                'Plus',
                'Button',
                'Сhoice of subscription type'
              );
            }

            document
              .querySelector('.checkbox_active_plan')
              .classList.remove('checkbox_active_plan');

            target.classList.add('checkbox_active_plan');
          });

        // click on fixed btn
        payBtn.addEventListener('click', () => {
          const isMonthlyActive = document
            .querySelector('.toggle_plan')
            .classList.contains('monthly_active');

          gaEvent(
            'exp_pick_a_plan_cta',
            payBtn.innerText,
            'Button',
            'Bottom of screen'
          );

          if (isSubscriptionActive) {
            isSubscriptionActive.dispatchEvent(new Event('click'));
          } else {
            if (isMonthlyActive) {
              document
                .querySelector('[dusk="segmented-control--monthly"]')
                .dispatchEvent(new Event('click'));
            } else {
              const selectedPack = document.querySelector(
                '.annual_checkbox_wrapper .checkbox_active_plan'
              ).dataset.pack;

              document
                .querySelector('[dusk="segmented-control--annual"]')
                .dispatchEvent(new Event('click'));

              setTimeout(() => {
                if (selectedPack === 'annual_pro') {
                  document
                    .querySelector('[dusk="subscription-option--pro"]')
                    .dispatchEvent(new Event('click'));
                } else {
                  document
                    .querySelector('[dusk="subscription-option--plus"]')
                    .dispatchEvent(new Event('click'));
                }
              }, 50);
            }

            setTimeout(() => {
              document
                .querySelector('.fixed.z-20 [dusk]')
                .dispatchEvent(new Event('click'));
            }, 100);
          }
        });
      },
      100
    );

    drawTable();

    waitFor(
      () =>
        typeof seamless !== 'undefined' &&
        typeof seamless.scrollBy === 'function',
      () => {
        const features = document.querySelector('.features');

        features.addEventListener('click', () => {
          features.classList.toggle('show_table');

          if (features.classList.contains('show_table')) {
            const tableRow = document.querySelector(
              '#plans_comparison_table tr:nth-child(4)'
            );
            const rect1 = features.getBoundingClientRect();
            const rect2 = tableRow.getBoundingClientRect();

            // Calculate the distance in pixels between the two elements
            const distance = Math.abs(rect1.top - rect2.top);

            // Scroll to the calculated distance
            seamless.scrollBy(window, {
              behavior: 'smooth',
              top: distance,
              left: 0,
            });
          }

          gaEvent(
            'exp_pick_a_plan_compare',
            'drop down list',
            'Button',
            'What do you get'
          );
        });
      },
      100
    );

    // click on close x
    waitFor(
      () => document.querySelector('.close_x'),
      () => {
        document.querySelector('.close_x').addEventListener('click', () => {
          document
            .querySelector('[dusk="gps-upgrade-container"] .absolute.top-xs')
            .click();

          gaEvent(
            'exp_pick_a_plan_close',
            'Close',
            'Button',
            'Top of the page'
          );
        });
      },
      1000
    );
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
  function gaEvent(name = '', desc = '', type = '', loc = '') {
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
}
