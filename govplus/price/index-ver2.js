
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
    .lav-pricing .traveling-soon {
      display: none;
    }
    .lav-pricing {
      gap: 16px!important;
      max-width: 440px;
      margin: auto;
    }
    .charge-payment-form .payment-method-information.lav-pricing .payment-method-information__item .GSubscriptionMethodRadioButton {
      display: flex!important;
      padding: 24px 16px!important;
      border: 1px solid #E2E2E2!important;
      background: #fff!important;
      gap: 12px!important;
    }
    .charge-payment-form .payment-method-information.lav-pricing .payment-method-information__item .ant-radio-wrapper-checked {
      border: 1px solid #216DE3!important;
      box-shadow: inset 0 0 0 1px #216DE3!important;
      background-color: #F0F6FF!important;
    }
    .lav-pricing .GSubscriptionMethodRadioButton .content .sale-block {
      align-items: center;
    }
    .lav-pricing .payment-method-information__item .content {
      display: block;
      margin: 0 !important;
      padding: 0;
    }
    .lav-pricing .payment-method-information__item .content .sale-block__processing .GText {
      display: none;
    }
    .lav-pricing .payment-method-information__item .content .sale-block__processing .ant-typography:nth-child(2) {
      color: #191919!important;
      text-align: center!important;
      font-size: 18px!important;
      font-weight: 500!important;
      line-height: 24px!important;
      letter-spacing: -0.1px!important;
      text-decoration: none!important;
    }
    .lav-pricing .payment-method-information__item .ant-radio {
      position: relative !important;
      left: 0 !important;
      top: 0 !important;
      transform: none !important;
      flex-shrink: 0;
    }
    .lav-pricing .payment-method-information__item .ant-radio + span {
      flex-grow: 1;
    }
    .lav-pricing .GSubscriptionMethodRadioButton .content .prices {
      justify-content: flex-end;
    }
    .lav-pricing .payment-method-information__item .content .price-block .ant-typography:nth-child(1) {
      display: none!important;
    }
    .lav-pricing .payment-method-information__item .content .price-block .ant-typography:nth-child(2) {
      color: #191919!important;
      font-size: 18px!important;
      font-weight: 600!important;
      line-height: 22px!important;
    }
    .lav-title {
      color: #191919;
      text-align: center;
      font-size: 36px;
      font-weight: 600;
      line-height: 46px;
      letter-spacing: -1px;
      margin-bottom: 25px;
      padding-top: 12px;
    }
    .charge-payment-form .payment-footer {
      margin-top: 24px;
    }
    .charge-payment-form .payment-footer p {
      text-align: center!important;
      font-size: 14px!important;
      letter-spacing: -0.2px!important;
      line-height: 22px!important;
    }
    @media(max-width: 767.98px) {
      .lav-title {
        padding-top: 0;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: -0.5px;
      }
      .charge-payment-form .payment-method-information.lav-pricing .payment-method-information__item .GSubscriptionMethodRadioButton {
        padding: 24px 16px !important;
      }
      .charge-payment-form .payment-footer p {
        text-align: left!important;
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
    _$('.GHeader .GImageTitle h1 p').innerText = 'Submit your passport renewal application';

    _$('#itemPriceChargeId').insertAdjacentHTML('beforebegin', '<div class="lav-title">Get your passport within:</div>');

    _$$('.charge-payment-form .payment-method-information.lav-pricing .payment-method-information__item').forEach((el, index) => {
      let text = "Regular Gov Timeline";
      if (index === 1) {
        text = "20 business days";
      } else if (index === 2) {
        text = "10 business days";
      } else if (index === 3) {
        text = "3 business days";
      }
      el.querySelector('.sale-block__processing .ant-typography:nth-child(2)').innerText = text;
    });

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