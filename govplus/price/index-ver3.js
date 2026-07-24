(function () {
  if (_$('.lav-pricing')) {
    console.log('** Exp check failed: lav-pricing exist **', _$('.lav-pricing'))
    return
  }

  if (!isInitApp()) {
    console.log('** Exp check failed: not init **')
    return
  }

  console.log('*** Experiment started ***')

  // Styles for Experiment
  const styles = /* css */ `
    .PaymentCombinedInformation .payment-method-information__item .content__wrapper .sale-block .sale-block__processing>div:last-child {
      font-weight: 500!important;
      letter-spacing: -0.1px!important;
      min-height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .lav-pricing .payment-method-information__item .content .price-block {
      display: flex;
      justify-content: center;
    }
    .PaymentCombinedInformation .payment-method-information__item .content__wrapper .price-block .prices {
      gap: 8px;
    }
    .lav-hero-title {
      max-width: 550px;
    }
    .lav-bage {
      border-radius: 111px;
      background: #E2EEFF;
      padding: 6px 12px;
      color: #191919;
      font-family: Inter;
      font-size: 12px;
      font-weight: 500;
      line-height: 12px;
      letter-spacing: -0.1px;
      text-align: center;
      white-space: nowrap;
      margin-top: 12px;
    }
    .PaymentCombinedInformation .charge-payment-form .payment-method-information .payment-method-information__item .ant-radio-wrapper-checked .ant-radio {
      background: #216DE3!important;
    }
    .charge-payment-form .payment-method-information.lav-pricing .payment-method-information__item .ant-radio-wrapper-checked {
      border-color: #216DE3!important;
    }
    @media (hover: hover) and (pointer: fine) {
      .charge-payment-form .payment-method-information .payment-method-information__item .ant-radio-wrapper:not(.ant-radio-wrapper-disabled):not(.ant-radio-wrapper-checked):hover {
        border: 2px solid #94b6ea !important;
      }
    }
    .charge-payment-form .payment-method-information .payment-method-information__item .ant-radio-wrapper:not(.ant-radio-wrapper-disabled):focus-within {
      border-width: 2px!important;
    }
    @media(max-width: 767.98px) {
      .lav-bage span {
        display: none;
      }
      .charge-payment-form .payment-footer p {
        text-align: center!important;
        font-size: 14px!important;
        letter-spacing: -0.2px!important;
      }
      .PaymentPageWrapper::before {
        letter-spacing: -0.5px!important;
      }
      .lav-pricing .payment-method-information__item .content .price-block {
        margin-top: -4px;
      }
      .lav-pricing .payment-method-information__item .content .price-block .prices {
        flex-direction: row;
        gap: 6px!important;
      }
      .PaymentCombinedInformation .payment-method-information__item .content__wrapper .sale-block .sale-block__processing>div:last-child {
        line-height: 25px!important;
        font-size: 17px!important;
      }
    }
  `

  const stylesEl = document.createElement('style')
  stylesEl.classList.add('exp-styles')
  stylesEl.innerHTML = styles

  // *** Logic *** //
  waitFor('#itemPriceChargeId', initExp)

  function isInitApp() {
    // const targetFormIds = [
    //   "passport-new",
    //   "passport-renewal",
    //   "passport-lost",
    //   "passport-damaged",
    //   "passport-stolen",
    // ]
    // const isApp = location.href.includes('dashboard.govplus');
    const isValidPage = location.href.includes('page=payment');
    return isValidPage;
  }
    
  async function initExp() {
    if (_$('.lav-pricing')) {
      console.log('** Exp check failed: lav-pricing exist **', _$('.lav-pricing'))
      return;
    }


    console.log('** InitExp **')
    hanlePricingBlock();
    _$('.lav-pricing')?.appendChild(stylesEl)
  }

  function hanlePricingBlock() {
    _$('#itemPriceChargeId').classList.add('lav-pricing');

    _$('.GHeader .GImageTitle h1 p').classList.add('lav-hero-title');

    updateTextContent()
    setTimeout(updateTextContent, 500);

  }

  function updateTextContent() {
    _$('.GHeader .GImageTitle h1 p').innerText = 'Submit your passport renewal application';

   _$$('.charge-payment-form .payment-method-information.lav-pricing .payment-method-information__item').forEach((el, index) => {
      let text = "Regular Gov Timeline";
      if (index === 1) {
        text = "20 business days";
      } else if (index === 2) {
        text = "10 business days";
      } else if (index === 3) {
        text = "3 business days";
      }
      addDeliveryMethod(el, index)
      el.querySelector('.sale-block__processing .ant-typography:nth-child(2)').innerText = text;
    });
  }

  function addDeliveryMethod(el, index) {
    if (_$('.lav-bage', el)) return;

    const ESTIMATION_BUFFER_DAYS = 2;
    const DELIVERY_CONFIG = {
      0: { weeksRange: [5, 9] },            // 5-9 weeks
      1: { days: 28 },                     // 4 weeks
      2: { days: 14 },                     // 2 weeks
      3: { days: 3, businessDaysOnly: true } // 3 business days (skip weekends)
    };
    const config = DELIVERY_CONFIG[index];
    if (!config) return;

    let badgeText;
    if (config.weeksRange) {
      const [minWeeks, maxWeeks] = config.weeksRange;
      const startDate = addCalendarDays(new Date(), minWeeks * 7 + ESTIMATION_BUFFER_DAYS);
      const endDate = addCalendarDays(new Date(), maxWeeks * 7 + ESTIMATION_BUFFER_DAYS);
      badgeText = `${formatShortDate(startDate)} — ${formatShortDate(endDate)}`;
    } else {
      const targetDate = config.businessDaysOnly
        ? addBusinessDays(new Date(), config.days)
        : addCalendarDays(new Date(), config.days);
      const bufferedDate = addCalendarDays(targetDate, ESTIMATION_BUFFER_DAYS);
      badgeText = `<span>In hand</span> by ${formatInHandDate(bufferedDate)}`;
    }

    const badge = document.createElement('div');
    badge.className = 'lav-bage';
    badge.innerHTML = badgeText;

    _$('label .content', el).insertAdjacentElement('beforeend', badge);
  }

  // Adds `days` calendar days to `date` (used for the "N weeks" options,
  // since a whole number of weeks lands on the same weekday either way).
  function addCalendarDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  // Adds `days` business days to `date`, skipping Saturdays and Sundays.
  function addBusinessDays(date, days) {
    const result = new Date(date);
    let remaining = days;
    while (remaining > 0) {
      result.setDate(result.getDate() + 1);
      const dayOfWeek = result.getDay(); // 0 = Sunday, 6 = Saturday
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        remaining--;
      }
    }
    return result;
  }

  // Formats a Date as "Wed, Aug 21"
  function formatInHandDate(date) {
    const weekday = date.toLocaleDateString('en-US', { weekday: 'short' });
    const month = date.toLocaleDateString('en-US', { month: 'short' });
    return `${weekday}, ${month} ${date.getDate()}`;
  }

  // Formats a Date as "Aug 21" (used for date ranges, no weekday)
  function formatShortDate(date) {
    const month = date.toLocaleDateString('en-US', { month: 'short' });
    return `${month} ${date.getDate()}`;
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

  // Shordcode for selectors
  function _$(selector, context = document) {
    return context.querySelector(selector)
  }
  function _$$(selector, context = document, toSimpleArray = false) {
    const arr = context.querySelectorAll(selector)

    return toSimpleArray ? Array.from(arr) : arr
  }

  // *** Exp BG process *** //

  // Svg objects
  function getSvg(name) {
    const svgObj = {
      arrowRight: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <g clip-path="url(#clip0_2675_1512)">
            <mask id="mask0_2675_1512" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28">
              <path d="M27.5714 0.571411H0.142822V28H27.5714V0.571411Z" fill="white"/>
            </mask>
            <g mask="url(#mask0_2675_1512)">
              <path d="M4.90491 12.0042H18.2382" stroke="white" stroke-width="1.90477" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M11.5717 5.33746L18.2383 12.0041L11.5717 18.6708" stroke="white" stroke-width="1.90477" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
          </g>
          <defs>
            <clipPath id="clip0_2675_1512">
              <rect width="24" height="24" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      `
    }

    return svgObj[name]
  }
})()