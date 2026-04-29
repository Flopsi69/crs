(function () {
  console.debug('*** Experiment started ***')

  // Config for Experiment
  const config = {
    // dir: 'http://127.0.0.1:5500/<dir>/<project>',
    dir: 'https://flopsi69.github.io/crs/<dir>/<project>',
    clarity: ['set', '', 'variant_1'],
    debug: true
  }

  // const orig = console.log
  // console.log = function (...args) {
  //   orig.apply(console, ['Debug:', ...args])
  // }

  // Styles for Experiment
  const styles = /* css */ `
    .lav-pricing {
      padding: 16px 12px 24px;
      border-radius: 18px;
      border-right: 1px solid rgba(0, 0, 0, 0.04);
      border-bottom: 1px solid rgba(0, 0, 0, 0.04);
      border-left: 1px solid rgba(0, 0, 0, 0.04);
      background: #C0F2D9;
      width: calc(100% - 70px);
      margin-top: 12px;
    }
    div.PricingBox__pricing-box__header {
      display: none;
    }
    div.PricingBox__pricing-box__price {
      display: none;
    }
    div.UnlimitedComparisonBlock__comparison {
      display: none;
    }
    div.PricingBox__pricing-box {
      max-width: 420px;
      width: 100%;
      margin: 0 auto;
      border-radius: 12px;
      background: #FFF;
      margin-top: 16px;
      padding: 24px;
    }
    div.UnlimitedFilingsContent__header {
      padding-left: 35px;
      padding-right: 35px;
    }
    div.SubscriptionFooter {
      max-width: 618px;
    }
    div.SubscriptionFooter button {
      width: 100%!important;
    }
    .UnlimitedFilingsContent__header .GText {
      color: #191919!important;
      font-size: 32px!important;
    }
    div.UnlimitedFilingsContent__content {
      margin-top: 36px;
    }
    .lav-new-clients {
      color: #027C40;
      text-align: center;
      font-size: 16px;
      line-height: 24px;
      font-weight: 600;
    }

    .lav-pricing__title {
      color: #191C1D;
      text-align: center;
      font-size: 32px;
      font-weight: 600;
      line-height: 44.4px;
    }
    .lav-pricing__caption {
      color: #000;
      text-align: center;
      font-size: 14px;
      font-weight: 500;
      line-height: 17px;
      margin-top: 6px;
    }
    .lav-pricing__price-row {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 12px;
    }
    .lav-pricing__price {
      color: #00733B;
      font-size: 32px;
      font-weight: 600;
      line-height: 38.4px;
      letter-spacing: -1px;
    }
    .lav-pricing__price-term {
      color: #00733B;
      font-size: 18px;
      font-weight: 600;
      line-height: 21.6px;
      margin-left: 6px;
    }
    .lav-pricing__price-old {
      color: #F23438;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.2;
      letter-spacing: -0.2px;
      text-decoration-line: line-through;
      margin-left: 8px;
      margin-right: 6px;
    }
    .lav-pricing__price-bage {
      border-radius: 8px;
      background: #E5F9EF;
      padding: 4px 9px;
      color: #00733B;
      font-size: 14px;
      font-weight: 600;
      line-height: 19.6px;
    }
    .lav-pricing__available {
      color: #00733B;
      text-align: center;
      font-size: 15px;
      font-weight: 500;
      line-height: 16px;
      margin-top: 5px;
    }
    .lav-pricing__actions {
      margin-top: 20px;
      margin-bottom: 16px;
    }
    .lav-pricing__note {
      color: #848484;
      text-align: center;
      font-size: 14px;
      font-weight: 400;
      line-height: 19.6px;
    }
    .lav-pricing__btn-skip {
      margin-top: 16px;
    }
    .lav-pricing__btn {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: .3s;
      min-height: 62px;
      gap: 12px;
      padding: 5px 25px;
    }
    .lav-pricing__btn-add {
      border-radius: 12px;
      background: #216DE3;
      box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.02);
      color: #FFF;
      text-align: center;
      font-size: 16px;
      font-weight: 600;
      line-height: 22.4px;
      letter-spacing: -0.1px;
    }
    @media(hover:hover) {
      .lav-pricing__btn-add:hover {
        background-color: #0a48a8;
      }
    }
    .lav-pricing__btn-skip {
      border-radius: 12px;
      border: 1px solid #216DE3;
      background: #FFF;
      box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.02);
      color: #216DE3;
      text-align: center;
      font-size: 16px;
      font-weight: 600;
      line-height: 22.4px;
      letter-spacing: -0.1px;
    }
    @media(hover:hover) {
      .lav-pricing__btn-skip:hover {
        border-color: #0a48a8;
        color: #0a48a8;
      }
    }
    .lav-benefits {
      padding-top: 22px;
    }
    .lav-benefits__block + .lav-benefits__block {
      margin-top: 32px;
    }
    .lav-benefits__title {
      color: #00733B;
      font-size: 16px;
      font-weight: 600;
      line-height: 22.4px;
    }
    .lav-benefits__without .lav-benefits__title {
      color: #730000;
    }
    .lav-benefits__list {
      margin-top: 16px;
    }
    .lav-benefits__item {
      position: relative;
      padding-left: 20px;
      color: #3E3E3E;
      font-size: 15px;
      font-weight: 400;
      line-height: 22px;
      letter-spacing: -0.1px;
    }
    .lav-benefits__item:before {
      content: '';
      position: absolute;
      left: 0;
      background-color: #13BA68;
      top: 50%;
      transform: translateY(-50%);
      width: 8px;
      height: 8px;
      border-radius: 100%;
    }
    .lav-benefits__without .lav-benefits__item:before {
      background-color: #DE0404;
    }
    .lav-benefits__item + .lav-benefits__item {
      margin-top: 24px;
    }
    @media(max-width: 992px) {
      div.TopBanner__top-banner-badge {
        border-radius: 12px;
      }
      .UnlimitedFilingsContent__header .GText {
        font-size: 24px!important;
        letter-spacing: -0.5px!important;
      }
      .UnlimitedFilingsContent__header .GText br {
        display: none;
      }
      div.UnlimitedFilingsContent__header {
        padding-left: 7px;
        padding-right: 7px;
        gap: 7px;
      }
      .UnlimitedFilingsContent__header .GText + .ant-typography {
        font-size: 15px!important;
        line-height: 24px!important;
        max-width: 100%!important;
      }
      .lav-pricing {
        margin-top: 20px;
        width: calc(100% - 14px);
        padding: 12px;
      }
      .lav-new-clients {
        font-size: 15px;
      }
      div.PricingBox__pricing-box {
        margin-top: 12px;
        padding: 18px 12px 32px;
      }
      .lav-pricing__title {
        font-size: 24px;
        line-height: 1;
        text-align: left;
      }
      .lav-pricing__caption {
        text-align: left;
      }
      .lav-pricing__available {
        text-align: left;
      }
      .lav-pricing__price-row {
        justify-content: flex-start;
      }
      .lav-pricing__actions {
        margin-top: 16px;
      }
      .lav-benefits {
        margin-top: 16px;
        border-top: 1px solid #E5E7EB;
      }
      .lav-benefits__block {
        padding-left: 6px;
      }
      div.UnlimitedFilingsContent .SubscriptioninterstitialPageFooter__actions .SubscriptionFooter {
        padding-left: 16px!important;
        padding-right: 16px!important;
      }
    }
  `

  const stylesEl = document.createElement('style')
  stylesEl.classList.add('exp-styles')
  stylesEl.innerHTML = styles

  // *** Logic *** //
  // if (location.href.includes('page=upsell') && _$('#offer-unlimited-interstitial')) {
    initExp()
  // }
    

  async function initExp() {
    await waitFor(() => document.head && document.body, false, { ms: 20 })

    document.head.appendChild(stylesEl)

    console.debug('** InitExp **')
    changeCopy();
    hanlePricingBlock();
  }

  function hanlePricingBlock() {
    _$('.PricingBox__pricing-box').insertAdjacentHTML('beforebegin', `<div class='lav-pricing'></div>`);

    _$('.lav-pricing').insertAdjacentElement('beforeend', _$('.PricingBox__pricing-box'));

    _$('.lav-pricing').insertAdjacentHTML('afterbegin', /* html */ `
      <div class='lav-new-clients'>38% off for new clients today only</div>
    `)

    const price = _$('div.PricingBox__pricing-box__price-current').innerText.trim()
    const period = _$('div.PricingBox__pricing-box__price-period').innerText.trim()
    const oldPrice = _$('div.PricingBox__pricing-box__price-old').innerText.trim()

    const newPricingBlock = /* html */ `
      <div class='lav-pricing__title'>GOV+ Unlimited</div>
      <div class='lav-pricing__caption'>One subscription. <br/> All of your documents covered</div>
      <div class='lav-pricing__price-row'>
        <div class='lav-pricing__price'>${price}</div>
        <div class='lav-pricing__price-term'>${period}</div>
        <div class='lav-pricing__price-old'>${oldPrice}</div>
        <div class='lav-pricing__price-bage'>Save $60</div>
      </div>
      <div class='lav-pricing__available'>
        available to you today only
      </div>
      <div class='lav-pricing__actions'>
        <div class='lav-pricing__btn lav-pricing__btn-add'>
          Add auto-renewal &<br/>unlimited free filings
          ${getSvg('arrowRight')}
        </div>
        <div class='lav-pricing__btn lav-pricing__btn-skip'>
          No thanks — I'll pay the full filing fee each time manually
        </div>
      </div>
      <div class='lav-pricing__note'>
        By clicking “Add auto-renewal & unlimited free fillings”, I authorize GOV+ to charge ${price} to my card on file and add this feature to my membership.
      </div>

      <div class='lav-benefits'>
        <div class='lav-benefits__block lav-benefits__with'>
          <div class='lav-benefits__title'>With GOV+ Unlimited:</div>
          <div class='lav-benefits__list'>
            <div class='lav-benefits__item'>All of your documents monitored for expiration and loss</div>
            <div class='lav-benefits__item'>All of your documents automatically renewed/replaced</div>
            <div class='lav-benefits__item'>No additional cost for each individual application</div>
          </div>
        </div>
        <div class='lav-benefits__block lav-benefits__without'>
          <div class='lav-benefits__title'>Without GOV+ Unlimited:</div>
          <div class='lav-benefits__list'>
            <div class='lav-benefits__item'>Your documents <strong>are not</strong> monitored for expiration and loss</div>
            <div class='lav-benefits__item'>Your documents <strong>are not</strong> automatically renewed/replaced</div>
            <div class='lav-benefits__item'><strong>Additional cost</strong> for each individual application</div>
          </div>
        </div>
      </div>
    `;

    _$(".lav-pricing .PricingBox__pricing-box").insertAdjacentHTML('afterbegin', newPricingBlock);
    
    _$('.lav-pricing__btn-add').addEventListener('click', function () {
      _$('.SubscriptionFooter .GButton--primary').click()
    })

    _$('.lav-pricing__btn-skip').addEventListener('click', function () {
      _$('.SubscriptionFooter .GButton--secondary').click()
    })
  }

  function changeCopy() {
    const price = _$('div.PricingBox__pricing-box__price-current').innerText.trim()

    const copyConfig = {
      header: 'You\'ve unlocked 38% off for GOV+ Unlimited, available for you today only',
      title: 'Apply for, renew, & file all your essential <br/> docs&nbsp;with one membership',
      caption: 'All your docs including TSA PreCheck, taxes, passport are auto-renewed & filed <br/> for you at no additional cost',
      buttonAdd: 'Add auto-renewal &<br/>unlimited free filings',
      buttonSkip: 'No thanks — I\'ll pay the full filing fee each time manualy',
      disclaimer: `By clicking “Add auto-renewal & unlimited fillings”, I authorize GOV+ to charge ${price} to my card on file and add this feature to my membership.`
    }
    
    _$('.TopBanner__top-banner-badge .ant-typography').innerHTML = copyConfig.header;
    _$('.UnlimitedFilingsContent__header .GText').innerHTML = copyConfig.title;
    _$('.UnlimitedFilingsContent__header div + div').innerHTML = copyConfig.caption;
    _$('.SubscriptionFooter .GButton--primary .ant-typography').innerHTML = copyConfig.buttonAdd;
    _$('.SubscriptionFooter .GButton--secondary .ant-typography').innerHTML = copyConfig.buttonSkip;
    _$('.SubscriptionFooter .SubscriptionFooter__disclaimer p').innerHTML = copyConfig.disclaimer;
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