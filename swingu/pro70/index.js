(function () {
  // const orig = console.log;
  // console.log = function () {
  //   orig.apply(console, arguments);
  //   navigator.sendBeacon(
  //     'https://console.wiredgeese.com/log/',
  //     JSON.stringify(arguments)
  //   );
  // };

  console.log('initExp: pro70!');
  let timer = 0;
  let timerInterval;

  /********* Settings **********/
  const settings = {
    dir: 'https://flopsi69.github.io/crs/swingu/pro70',
    observe: false,
    clarity: {
      enable: true,
      params: ['set', 'exp_stripe_cancel_flow', 'variant_1'],
    },
    debug: false,
  };

  if (
    location.href.includes('/upgrade/player') &&
    !location.href.includes('hypothesis')
  ) {
    if (
      document.querySelector('[dusk="upgrade-button--manage-subscription"]')
    ) {
      console.log('User has subscription!');
      // todo - add event for user with subscription
      return false;
    }
    waitFor(
      () => document.body,
      () => {
        handleUpgradePage();
      },
      50
    );
  }

  function handleUpgradePage() {
    console.log('initUpgradePage: ' + location.href);
    //Clarity
    if (!settings.debug && settings.clarity.enable) {
      waitFor(
        () => typeof clarity == 'function',
        () => {
          clarity(...settings.clarity.params);
        },
        500
      );
    }

    /*** STYLES / Start ***/
    const styles = `
      .lav-price {}
      .lav-offer {
        color: #253139;
        font-size: 14px;
        left: 16px;
        top: -12px;
        font-weight: 600;
        line-height: 20px;
        border-radius: 28px;
        background: #FFC803;
        padding: 2px 10px;
      }
      .lav-price__old {
        color: #AFAFAF;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px;
        text-decoration: line-through;
      }
      .lav-price__new {
        color: #FFF;
        font-size: 16px;
        font-weight: 600;
        line-height: 22px;
      }
      [data-active="false"] .lav-price__old, [data-active="false"] .lav-price__new {
        color: black;
      }
      .lav-price__caption {
        color: #FFF;
        font-size: 12px;
        font-weight: 400;
        line-height: 18px;
        margin-top: 4px;
      }
      [data-active="false"] .lav-price__caption {
        color: rgb(89, 105, 116);
      }
      .relative.pt-2xl.mb-\\[95px\\] {
        margin-bottom: 65px;
      }
      .text-\\[17px\\].font-semibold.leading-none.mt-\\[15px\\] {
        margin-top: 10px;
      }
      
      [dusk*="subscription-option--"] h2 svg {
        position: absolute;
        right: 12px;
        bottom: 15px;
        background: white;
        border-radius: 50%;
      }
      [dusk*="subscription-option--"][data-active="false"] h2 svg {
        right: 10px;
        bottom: 13px;
      }

      .lav-pro-yearly > .border-\\[2px\\],
        .lav-pro-yearly > .absolute.border-\\[1px\\] {
        display: none;
      }
      .lav-pro-yearly > .rounded-\\[10px\\] {
        border-radius: 10px!important;
        border: 2px solid transparent;
      }
      .lav-pro-yearly > .relative {
        justify-content: space-between;
      }
      [dusk="subscription-option--plus"] > .relative {
        justify-content: space-between;
      }
      .lav-pro-yearly[data-active="true"] > .relative {
        border-color: #FFC803;
      }
      
      .lav-pro-yearly h2 {
      }
      .lav-pro-yearly h2:before {
        content: '30% OFF';
        position: absolute;
        right: -2px;
        top: 23px;
        color: #253139;
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
        padding: 2px 10px;
        border-radius: 28px 0px 0px 28px;
        background: #FFC803;
      }
      .lav-orig [data-action] {
        padding-top: 15px;
        padding-bottom: 15px;
      }
      .lav-orig_hidden {
        display: none!important;
      }
      .lav-button {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 0;
        height: 60px;
        border-radius: 7px;
        background: var(--common-medium-primary, #49BB54);
      }
      .lav-button img {
        position: relative;
        bottom: -2px;
      }
      .lav-button.lav-loader img {
        display: none;
      }
      .lav-button_hidden {
        display: none!important;
      }
      .lav-loader:before {
        content: '';
        position: absolute;
        width: 29px;
        height: 29px;
        font-size: 0;
        line-height: 0;
        border: 2px solid #FFF;
        border-bottom-color: transparent;
        border-radius: 50%;
        display: inline-block;
        box-sizing: border-box;
        animation: rotation 1s linear infinite;
      }
      @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
      }

      .lav-caption {
        margin-top: 12px;
        color: #8C8C8C;
        text-align: center;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: 0.38px;
      }
    `;

    const stylesEl = document.createElement('style');
    stylesEl.innerHTML = styles;
    document.head.appendChild(stylesEl);
    /*** STYLES / End ***/

    /********* Custom Code **********/
    addCustomButton();
    handlePrice();
    handleCta();
    initObserver((el) => {
      if (el.closest('[data-action]')) {
        handleCta();
        handlePrice();
      }
    });

    function handlePrice() {
      if (
        document.querySelector('.lav-pro-yearly') ||
        document.querySelector(
          '[dusk="segmented-control--annual"][data-active="false"]'
        )
      )
        return false;

      const proEl = document.querySelector('[dusk="subscription-option--pro"]');
      proEl.classList.add('lav-pro-yearly');
      if (proEl) {
        proEl
          .querySelector('.text-xs.leading-none')
          .classList.add('lav-price__caption');
        proEl.querySelector('.text-xs.leading-none').innerText =
          '($5.83/month)';

        proEl.querySelector('.text-\\[17px\\]').classList.add('lav-price');
        proEl.querySelector(
          '.text-\\[17px\\]'
        ).innerHTML = `<span class='lav-price__old'>$99.99</span> <span class='lav-price__new'>$69.99/yr</span>`;

        if (proEl.querySelector('.absolute.rounded-\\[15px\\]')) {
          proEl
            .querySelector('.absolute.rounded-\\[15px\\]')
            .classList.add('lav-offer');
          proEl.querySelector('.lav-offer').innerText = 'Limited Offer';
        }

        // proEl.querySelector('h2 svg').remove();
      }
    }

    function handleCta() {
      if (!document.querySelector('.lav-button')) return;
      const typeSubscr = document.querySelector(
        '[dusk="segmented-control--monthly"][data-active="true"]'
      )
        ? 'monthly'
        : 'yearly';

      const activeEl = document
        .querySelector('[data-active="true"][dusk*="subscription-option"]')
        .getAttribute('dusk');

      console.log(typeSubscr, activeEl);

      if (activeEl === 'subscription-option--pro' && typeSubscr === 'yearly') {
        timer = 0;
        timerInterval = setInterval(() => {
          timer += 500;
        }, 500);
      } else if (timer > 0) {
        clearInterval(timerInterval);
        pushDataLayer(
          'exp_pay_scre_spri_vis_plagbetgo_foc',
          timer / 1000 + ' s',
          'Visibility ',
          'Start Playing Better Golf Today gets swing pro now'
        );
      }

      let isOriginalButton = true;

      if (typeSubscr === 'monthly') {
        document.querySelector('.lav-caption__date').innerText =
          getDateInOneMonth();
        document.querySelector('.lav-caption__price').innerText = '$24.99/mo';
      } else if (activeEl.includes('pro')) {
        document.querySelector('.lav-caption__date').innerText =
          getDateInOneYear();
        document.querySelector('.lav-caption__price').innerText = '$99.99/yr';
        isOriginalButton = false;
      } else if (activeEl.includes('plus')) {
        document.querySelector('.lav-caption__date').innerText =
          getDateInOneYear();
        document.querySelector('.lav-caption__price').innerText = '$49.99/yr';
      }

      if (isOriginalButton) {
        document
          .querySelector('.lav-button')
          .classList.add('lav-button_hidden');
        document.querySelector('.lav-orig').classList.remove('lav-orig_hidden');
      } else {
        document
          .querySelector('.lav-button')
          .classList.remove('lav-button_hidden');
        document.querySelector('.lav-orig').classList.add('lav-orig_hidden');
      }
    }

    function addCustomButton() {
      if (document.querySelector('.lav-button')) return;

      const el = document.querySelector('.fixed.bottom-0');
      el.querySelector('.justify-center').classList.add('lav-orig');

      el.querySelector('.justify-center').insertAdjacentHTML(
        'afterend',
        `
          <div class='lav-button'>
            <img src='${settings.dir}/img/button-img.svg' />
          </div>
          <div class='lav-caption'>This plan will auto-renew on <span class='lav-caption__date'>${getDateInOneYear()}</span> for <span class='lav-caption__price'>$99.99/yr</span></div>
        `
      );

      document
        .querySelector('.lav-button')
        .addEventListener('click', function () {
          pushDataLayer(
            'exp_pay_scre_spri_but_plagbetgo_swin',
            'Gets swing pro now',
            'Button',
            'Start Playing Better Golf Today'
          );
          const newCouponCode = '30OFFCRS';
          if (document.querySelector('[data-stripe-checkout-url]')) {
            this.classList.add('lav-loader');
            const url = document.querySelector('[data-stripe-checkout-url]')
              .dataset.stripeCheckoutUrl;
            const link = document.createElement('a');
            link.href = url.replace(/(couponId=)[^&]+/, `$1${newCouponCode}`);
            link.click();
          }
        });
    }

    function getDateInOneYear() {
      const currentDate = new Date();
      currentDate.setFullYear(currentDate.getFullYear() + 1);
      currentDate.setHours(0, 0, 0, 0);

      const month = String(currentDate.getMonth() + 1).padStart(2, '0');
      const day = String(currentDate.getDate()).padStart(2, '0');
      const year = currentDate.getFullYear();

      return `${month}/${day}/${year}`;
    }

    function getDateInOneMonth() {
      const today = new Date();
      const nextMonth = new Date(today);
      nextMonth.setMonth(today.getMonth() + 1);

      const year = nextMonth.getFullYear();
      const month = String(nextMonth.getMonth() + 1).padStart(2, '0'); // Adding 1 because January is 0-based
      const day = String(nextMonth.getDate()).padStart(2, '0');

      return `${month}/${day}/${year}`;
    }
  }

  // *** Utils *** //
  function waitFor(condition, cb, ms = 300) {
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
})();
