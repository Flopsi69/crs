
(function () {
  if (_$('.lav-premium')) {
    console.log('** Exp check failed: lav-premium exist **', _$('.lav-premium'))
    return
  }

  if (!isInitApp()) {
    console.log('** Exp check failed: not init **')
    return
  }

  console.log('*** Experiment started ***')

  // Styles for Experiment
  const styles = /* css */ `
    #offer-premium-interstitial-discounted .SubscriptionPremiumUpsell__content__header .ant-typography:first-child {
      font-size: 26px!important;
      line-height: 33.8px!important;
    }
    #offer-premium-interstitial-discounted .SubscriptionPremiumUpsell__content__header .ant-typography:last-child {
      font-size: 16px!important;
    }

    .SubscriptionOfferOptionsList [data-lav-plan] {
      display: none !important;
    }
    .lav-premium {
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 16px 19px;
      background: #f4f8ff;
      border: 2px solid #216de3;
      border-radius: 18px;
      cursor: pointer;
    }
    .lav-premium--inactive {
      background: #fff;
      border: 2px solid #e2e2e2;
    }
    .lav-premium__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
    }
    .lav-premium__title-group {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .lav-premium__radio {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      width: 22px;
      height: 22px;
      background: #216de3;
      border-radius: 11px;
    }
    .lav-premium--inactive .lav-premium__radio {
      background: #fff;
      border: 1px solid #cacaca;
    }
    .lav-premium__radio-dot {
      width: 6px;
      height: 6px;
      background: #fff;
      border-radius: 3px;
    }
    .lav-premium__title {
      font-size: 17px;
      font-weight: 600;
      line-height: 20px;
      color: #191919;
    }
    .lav-premium__price-group {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .lav-premium__price-old {
      font-size: 14px;
      color: #6e6e6e;
      text-decoration: line-through;
    }
    .lav-premium__price-current {
      font-size: 17px;
      font-weight: 600;
      color: #191919;
      line-height: 28px;
    }
    .lav-premium__badge {
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 3px 10px;
      background: #eaffec;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 600;
      color: #00a660;
      white-space: nowrap;
    }
    .lav-premium__tabs-wrap {
      padding-left: 34px;
    }
    .lav-premium__tabs {
      display: flex;
      gap: 4px;
      padding: 4px;
      border: 1px solid #D9E6FA;
      background: #D0E0F9;
      border-radius: 1111px;
    }
    .lav-premium__tabs-title {
      color: #216DE3;
      text-align: center;
      font-size: 13px;
      font-weight: 600;
      margin-bottom: 8px;
      line-height: normal;
    }
    .lav-premium__tab {
      display: flex;
      flex: 1 0 0;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 3px;
      padding: 9px 6px;
      border-radius: 1111px;
      cursor: pointer;
      text-align: center;
      line-height: normal;
    }
    .lav-premium__tab--active {
      background: #fff;
    }
    .lav-premium__tab--active[data-plan="family"] .lav-persons {
      display: none !important;
    }
    .lav-premium__tab:not(.lav-premium__tab--active)[data-plan="family"] .lav-persons-white {
      display: none !important;
    }
    .lav-premium__tab-title {
      font-size: 13px;
      font-weight: 600;
      line-height: normal;
      color: #191919;
    }
    .lav-premium__tab-icons {
      line-height: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 2px;
    }
    .lav-premium__tab--active .lav-premium__tab-title {
      color: #216DE3;
    }
    .lav-premium__tab-subtitle {
      font-size: 11.5px;
      color: #697C96;
      font-weight: 600;
    }
    .lav-premium__tab-emoji {
      width: 16px;
      height: 16px;
      vertical-align: -3px;
    }
    .lav-premium__tab-badge {

      color: #12A649;
      text-align: center;
      font-family: Inter;
      font-weight: 700;
      font-size: 12px;
      font-style: normal;
      line-height: normal;
    }
    .lav-premium__features {
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding-left: 34px;
      list-style: none;
      margin: 0;
    }
    .lav-premium__feature {
      display: flex;
      align-items: flex-start;
      gap: 8px;
    }
    .lav-premium__feature-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      width: 14px;
      height: 14px;
      margin-top: 3px;
    }
    .lav-premium__feature-text {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
    .lav-premium__feature-title {
      font-size: 14px;
      font-weight: 600;
      line-height: 19.6px;
      color: #191919;
    }
    .lav-premium__feature-desc {
      font-size: 13px;
      line-height: 18.85px;
      color: #535c62;
    }
    .lav-premium__more-features {
      padding: 0 28px;
      font-size: 13px;
      line-height: 22.4px;
      color: #6e6e6e;
    }
    .lav-premium__more-features--hidden {
      display: none;
    }
    .lav-premium__footer {
      display: flex;
      flex-direction: column;
      gap: 5px;
      padding-top: 12.5px;
      margin: 0 28px;
      border-top: 1px solid #d9e6fa;
    }
    .lav-premium__footer-price {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 8px;
    }
    .lav-premium__footer-current {
      font-size: 19px;
      font-weight: 600;
      color: #191919;
      white-space: nowrap;
    }
    .lav-premium__footer-old {
      font-size: 13px;
      color: #9a9a9a;
      text-decoration: line-through;
      white-space: nowrap;
    }
    .lav-premium__footer-credit {
      font-size: 13px;
      font-weight: 600;
      color: #00a660;
      white-space: nowrap;
    }
    .lav-premium__footer-badges {
      display: flex;
      gap: 5px;
    }
    .lav-premium__footer-badges:empty {
      display: none;
    }
    .lav-premium__footer-badge {
      display: flex;
      align-items: center;
      padding: 1px 8px;
      height: 20px;
      border-radius: 999px;
      font-size: 11px;
      font-weight: 700;
      white-space: nowrap;
    }
    .lav-premium__footer-badge--warning {
      background: #fef9c3;
      color: #854d0e;
    }
    .lav-premium__footer-badge--success {
      background: #eaffec;
      color: #16a34a;
    }
    .lav-premium__footer-note {
      max-width: 257px;
      font-size: 13px;
      line-height: 18.2px;
      color: #6e6e6e;
    }
    @media(min-width: 768px) {
      .lav-premium__tab {
        flex-flow: row;
        min-height: 50px;
        gap: 4px;
        white-space: nowrap;
        padding-left: 22px;
        padding-right: 22px;
      }
      .lav-premium__tabs-title {
        font-size: 15px;
        line-height: 20px;
      }
      .lav-premium__tab-title {
        font-size: 15px;
        line-height: 20px;
      }
      .lav-premium__tab-subtitle {
        font-size: 13px;
      }
      .lav-premium__tab-badge {
        font-size: 13px;
      }
      .lav-premium__tab-icons {
        margin-right: 6px;
        margin-bottom: 0;
      }
      [data-plan="individual"] .lav-premium__tab-icons svg {
        width: 16px;
        height: 17px;
      }
      [data-plan="family"] .lav-premium__tab-icons svg {
        width: 71px;
        height: 17px;
      }
    }
    @media(max-width: 767.98px) {
      #offer-premium-interstitial-discounted .SubscriptionOfferProgressStepper__step .SubscriptionOfferProgressStepper__step-dot + .GText p {
        font-size: 10.5px !important;
      }
      #offer-premium-interstitial-discounted .SubscriptionOfferProgressStepper__step .GText span {
        display: inline;
      }
      #offer-premium-interstitial-discounted .SubscriptionPremiumUpsell__content__header .ant-typography:first-child {
        font-size: 23px!important;
        line-height: 29.8px!important;
      }
      #offer-premium-interstitial-discounted .SubscriptionPremiumUpsell__content__header .ant-typography:last-child {
        padding: 0 12px;
      }

      [data-plan="individual"] .lav-premium__tab-icons svg {
        width: 13px;
        height: 15px;
      }
      [data-plan="family"] .lav-premium__tab-icons svg {
        width: 57px;
        height: 15px;
      }
      .lav-premium__more-features {
        padding: 0 23px;
      }
      .lav-premium__footer {
        margin: 0 0 0 24px;
      }
      .lav-premium {
        padding: 15px;
        gap: 12px;
      }
      .lav-premium__badge {
        display: none;
        margin-right: -4px;
      }
      .lav-premium__title {
        font-size: 16px;
      }
      .lav-premium__radio-dot {
        width: 8px;
        height: 8px;
        border-radius: 4px;
      }
      .lav-premium__price-current {
        font-size: 16px;
      }
      .lav-premium__price-group {
        gap: 6px;
      }
      .lav-premium__tabs-wrap {
        padding-left: 0;
        margin-right: -4px;
      }
      .lav-premium__tab {
        gap: 2px;
      }
      .lav-premium__features {
        padding-left: 0;
        gap: 13px;
      }
      .lav-premium__feature-icon {
        width: 15px;
        height: 15px;
      }
      .lav-premium__footer-current {
        font-size: 17px;
      }
      .lav-premium__footer-badges {
        flex-direction: column;
        align-items: flex-start;
      }
    }
  `

  const stylesEl = document.createElement('style')
  stylesEl.classList.add('exp-styles')
  stylesEl.innerHTML = styles

  // *** Logic *** //
  waitFor('#offer-premium-interstitial-discounted .SubscriptionOfferOptionsList', initExp)

  function isInitApp() {
    // const targetFormIds = [
    //   "passport-new",
    //   "passport-renewal",
    //   "passport-lost",
    //   "passport-damaged",
    //   "passport-stolen",
    // ]
    // const isApp = location.href.includes('dashboard.govplus');
    const isValidPage = location.href.includes('page=upsell') || true;
    // const formId = new URLSearchParams(window.location.search).get('formId');

    // console.log('Check init conditions:', { isApp, isValidPage, formId, isValidFormId: targetFormIds.includes(formId) });
    // targetFormIds.includes(formId)
    return isValidPage;
  }
    
  async function initExp() {
    if (_$('.lav-premium')) {
      console.log('** Exp check failed: lav-premium exist **', _$('.lav-premium'))
      return;
    }


    console.log('** InitExp **')

    const newPlan = addCustomChoice();

    if (newPlan) {
      _$('.SubscriptionOfferOptionsList').insertAdjacentElement('afterbegin', newPlan)
    }

    if (!_$('.exp-styles')) {
      _$('#offer-premium-interstitial-discounted')?.appendChild(stylesEl)
    }
  }

  function addCustomChoice() {
    const optionsListEl = _$('.SubscriptionOfferOptionsList')

    if (!optionsListEl) {
      console.log('** Exp check failed: SubscriptionOfferOptionsList not found **')
      return null
    }

    const cardEls = _$$('.SubscriptionOfferOptionCard', optionsListEl, true)
    const individualCardEl = cardEls.find((el) => !el.classList.contains('premium-family-plan-option'))
    const familyCardEl = cardEls.find((el) => el.classList.contains('premium-family-plan-option'))

    if (!individualCardEl || !familyCardEl) {
      console.log('** Exp check failed: premium option cards not found **', { individualCardEl, familyCardEl })
      return null
    }

    // Tag the real option cards so we can hide them (via CSS) and forward
    // clicks to them (to keep the app's own selection/checkout logic working)
    // without depending on their DOM position or React-controlled classNames.
    individualCardEl.dataset.lavPlan = 'individual'
    familyCardEl.dataset.lavPlan = 'family'

    const realCardEls = { individual: individualCardEl, family: familyCardEl }
    const isFamilyChecked = familyCardEl.getAttribute('aria-checked') === 'true'
    const isIndividualChecked = individualCardEl.getAttribute('aria-checked') === 'true'
    const isInitiallyActive = isIndividualChecked || isFamilyChecked
    const initialType = isFamilyChecked ? 'family' : 'individual'

    const plans = {
      individual: {
        tabPrice: '$62',
        footerPrice: '$62',
        footerOld: '$159',
        renewsNote: 'Renews at $159/yr. Cancel anytime.',
        badges: [],
        features: [
          {
            title: 'Expedited Processing',
            desc: 'Move to the front of the line. Your application gets processed before standard orders.'
          },
          {
            title: '$1M Identity Theft Protection',
            desc: 'Lost passport? Stolen wallet? We monitor your info 24/7 and cover you up to $1M.',
            descTsa: 'Lost documents while traveling? We monitor your info 24/7 and cover you up to $1M.',
            descSsn: 'Your SSN in the wrong hands? We monitor your info 24/7 and cover you up to $1M.'
          },
          {
            title: 'Renewal Watch',
            desc: 'Never miss a renewal, GOV+ tracks and prepares each one at the ideal time.'
          },
          {
            title: '24/7 Priority Support',
            desc: 'Skip the queue. Get instant help from our team anytime by phone, email, or chat.'
          }
        ]
      },
      family: {
        tabPrice: '$62',
        footerPrice: '$162',
        footerOld: '$259',
        renewsNote: 'Renews at $259/yr. Cancel anytime.',
        badges: [
          { type: 'warning', text: '4 more people, $25 each' },
          { type: 'success', text: '$32/person — vs $62 covering only yourself' }
        ],
        features: [
          {
            title: 'Everything in Premium, for you and up to 4 members',
            desc: 'Spouse, kids, or parents, their applications run from your account.'
          },
          {
            title: "Kids' passports, newborn SSN cards, parents' renewals",
            desc: 'File all of it from one account, every renewal watched.'
          },
          {
            title: 'Identity protection on every member',
            desc: "Nobody checks a child's credit until they're 18, that's exactly why thieves want clean SSNs."
          },
          {
            title: 'Less than two solo memberships',
            desc: '$259 a year covers everyone instead of $318 for two.'
          }
        ]
      }
    }

    const getFeaturesMarkup = (type) => plans[type].features.map((feature, index) => /* html */ `
      <li class='lav-premium__feature'>
        <span class='lav-premium__feature-icon'>${getSvg('checkBlue')}</span>
        <span class='lav-premium__feature-text'>
          <span class='lav-premium__feature-title'>${feature.title}</span>
          <span class='lav-premium__feature-desc'>${type === 'individual' && index === 1 && _$(' [data-lav-plan="individual"] .SubscriptionOfferOptionCard__benefits .SubscriptionOfferOptionCard__benefit:nth-child(2) .ant-typography:last-child')?.innerText ? _$(' [data-lav-plan="individual"] .SubscriptionOfferOptionCard__benefits .SubscriptionOfferOptionCard__benefit:nth-child(2) .ant-typography:last-child')?.innerText : feature.desc}</span>
        </span>
      </li>
    `).join('')

    const getBadgesMarkup = (type) => plans[type].badges.map((badge) => /* html */ `
      <span class='lav-premium__footer-badge lav-premium__footer-badge--${badge.type}'>${badge.text}</span>
    `).join('')

    const markup = /* html */ `
      <div class='lav-premium${isInitiallyActive ? '' : ' lav-premium--inactive'}'>
        <div class='lav-premium__header'>
          <div class='lav-premium__title-group'>
            <span class='lav-premium__radio'><span class='lav-premium__radio-dot'></span></span>
            <span class='lav-premium__title'>GOV+ Premium</span>
          </div>
          <div class='lav-premium__price-group'>
            <span class='lav-premium__price-old'>${plans[initialType].footerOld}</span>
            <span class='lav-premium__price-current'>${plans[initialType].footerPrice}</span>
            <span class='lav-premium__badge'>${getSvg('checkGreen')}Credit applied</span>
          </div>
        </div>

        <div class='lav-premium__tabs-wrap'>
          <div class='lav-premium__tabs-title'>
            Cover & file for:
          </div>
          <div class='lav-premium__tabs'>
            <div class='lav-premium__tab${initialType === 'individual' ? ' lav-premium__tab--active' : ''}' data-plan='individual'>
              <span class='lav-premium__tab-icons'>${getSvg('person')}</span>
              <span class='lav-premium__tab-title'>Myself</span>
              <span class='lav-premium__tab-subtitle'>${plans.individual.tabPrice} today</span>
            </div>
            <div class='lav-premium__tab${initialType === 'family' ? ' lav-premium__tab--active' : ''}' data-plan='family'>
              <span class='lav-premium__tab-icons'>
                ${getSvg('persons')}
                ${getSvg('personsWhite')}
              </span>
              <span class='lav-premium__tab-title'>Myself & family</span>
              <span class='lav-premium__tab-badge'>$32/person</span>
            </div>
          </div>
        </div>

        <ul class='lav-premium__features'>${getFeaturesMarkup(initialType)}</ul>

        <div class='lav-premium__more-features${initialType === 'family' ? ' lav-premium__more-features--hidden' : ''}'>Plus 9 more Premium features</div>

        <div class='lav-premium__footer'>
          <div class='lav-premium__footer-price'>
            <span class='lav-premium__footer-current'>${plans[initialType].footerPrice} today</span>
            <span class='lav-premium__footer-old'>${plans[initialType].footerOld}</span>
            <span class='lav-premium__footer-credit'>$97 credit applied</span>
          </div>
          <div class='lav-premium__footer-badges'>${getBadgesMarkup(initialType)}</div>
          <span class='lav-premium__footer-note'>${plans[initialType].renewsNote}</span>
        </div>
      </div>
    `

    const wrapEl = document.createElement('div')
    wrapEl.innerHTML = markup
    const premiumEl = wrapEl.firstElementChild

    let currentType = initialType

    // Clicking anywhere on the card selects this option (forwarded to the
    // real hidden card below, for whichever plan is currently displayed).
    // Tab clicks bubble up into this same handler after switching the
    // displayed plan, so a tab click both toggles the plan and selects it.
    premiumEl.addEventListener('click', () => {
      realCardEls[currentType].click()
    })

    premiumEl.querySelectorAll('.lav-premium__tab').forEach((tabEl) => {
      tabEl.addEventListener('click', () => selectPlan(tabEl.dataset.plan))
    })

    function selectPlan(type) {
      currentType = type
      const plan = plans[type]

      premiumEl.querySelectorAll('.lav-premium__tab').forEach((tabEl) => {
        tabEl.classList.toggle('lav-premium__tab--active', tabEl.dataset.plan === type)
      })

      premiumEl.querySelector('.lav-premium__features').innerHTML = getFeaturesMarkup(type)
      premiumEl.querySelector('.lav-premium__footer-current').textContent = `${plan.footerPrice} today`
      premiumEl.querySelector('.lav-premium__footer-old').textContent = plan.footerOld
      premiumEl.querySelector('.lav-premium__price-current').textContent = `${plan.footerPrice}`
      premiumEl.querySelector('.lav-premium__price-old').textContent = plan.footerOld
      premiumEl.querySelector('.lav-premium__more-features').classList.toggle('lav-premium__more-features--hidden', type === 'family')
      premiumEl.querySelector('.lav-premium__footer-badges').innerHTML = getBadgesMarkup(type)
      premiumEl.querySelector('.lav-premium__footer-note').textContent = plan.renewsNote
    }

    // Keep our block in sync with the real radiogroup: if the user picks
    // GOV+ Basic directly, neither premium card is checked anymore, so mark
    // our block inactive (and vice versa if a premium card becomes checked).
    function syncActiveState() {
      const type = familyCardEl.getAttribute('aria-checked') === 'true' ? 'family' : 'individual'
      const isActive = individualCardEl.getAttribute('aria-checked') === 'true' || familyCardEl.getAttribute('aria-checked') === 'true'

      premiumEl.classList.toggle('lav-premium--inactive', !isActive)
      if (isActive) selectPlan(type)
    }

    new MutationObserver(syncActiveState).observe(optionsListEl, {
      attributes: true,
      attributeFilter: ['aria-checked'],
      subtree: true
    })

    return premiumEl
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
      persons: `
        <svg class='lav-persons' width="71" height="17" viewBox="0 0 71 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_4764_5181)">
        <path d="M10.6165 9.82129L10.8264 9.82715C11.8697 9.88116 12.8561 10.3353 13.593 11.1006C14.3788 11.9168 14.8175 13.0208 14.8176 14.167V15.7861C14.8175 16.3419 14.4063 16.8288 13.8469 16.8877L13.7327 16.8936C13.1167 16.8931 12.6479 16.3793 12.6477 15.7861V14.167C12.6476 13.5958 12.4294 13.0514 12.0461 12.6533C11.6633 12.2557 11.1489 12.0362 10.6165 12.0361H4.38306C3.91687 12.0361 3.4641 12.2043 3.10181 12.5127L2.95239 12.6533C2.56918 13.0514 2.34994 13.5958 2.34985 14.167V15.7861C2.34967 16.379 1.88249 16.8934 1.26587 16.8936C0.649073 16.8936 0.181095 16.3791 0.180908 15.7861V14.167C0.180991 13.0208 0.618817 11.9168 1.40454 11.1006C2.19096 10.2836 3.26268 9.82129 4.38306 9.82129H10.6165Z" fill="#216DE3" stroke="#D0E0F9" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7.73022 0.00805664C10.0805 0.127583 11.949 2.07309 11.949 4.45337C11.9484 6.90996 9.95772 8.90207 7.50171 8.90259C5.04539 8.90259 3.05307 6.91041 3.05249 4.45337L3.05835 4.22388C3.17755 1.87285 5.12169 0.00219727 7.50171 0.00219727L7.73022 0.00805664ZM7.50171 2.25024C6.28618 2.25024 5.29956 3.23671 5.29956 4.45337C5.30013 5.66934 6.28634 6.65454 7.50171 6.65454C8.71644 6.65402 9.70133 5.66922 9.7019 4.45337L9.69019 4.22778C9.57755 3.11703 8.64069 2.25073 7.50171 2.25024Z" fill="#216DE3" stroke="#D0E0F9" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <g clip-path="url(#clip1_4764_5181)">
        <path d="M24.324 9.82129C25.4992 9.82141 26.6296 10.2758 27.4646 11.0889C28.3003 11.9027 28.7721 13.0105 28.7722 14.167V15.7861L28.7654 15.9014C28.7103 16.4302 28.2817 16.8358 27.7615 16.8877L27.6482 16.8936C27.041 16.8932 26.5244 16.4097 26.5242 15.7861V14.167C26.5241 13.6062 26.2957 13.0655 25.8845 12.665C25.4726 12.2639 24.9116 12.0362 24.324 12.0361H17.6755C16.9266 12.0361 16.4793 12.0686 16.1394 12.3994C15.9716 12.5629 15.7124 12.5883 15.5164 12.46L14.6091 11.8662C14.4822 11.7831 14.3991 11.6461 14.3845 11.4951C14.3701 11.3443 14.4254 11.1946 14.5339 11.0889C15.3691 10.2756 16.5003 9.82129 17.6755 9.82129H24.324Z" fill="#216DE3" stroke="#D0E0F9" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20.6777 0.112793C23.028 0.232319 24.8965 2.17782 24.8965 4.55811C24.8959 7.01469 22.9052 9.0068 20.4492 9.00732C17.9929 9.00732 16.0006 7.01515 16 4.55811L16.0059 4.32861C16.1251 1.97759 18.0692 0.106934 20.4492 0.106934L20.6777 0.112793ZM20.4492 2.35498C19.2337 2.35498 18.2471 3.34144 18.2471 4.55811C18.2476 5.77408 19.2339 6.75928 20.4492 6.75928C21.6639 6.75876 22.6488 5.77395 22.6494 4.55811L22.6377 4.33252C22.5251 3.22177 21.5882 2.35547 20.4492 2.35498Z" fill="#216DE3" stroke="#D0E0F9" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <g clip-path="url(#clip2_4764_5181)">
        <path d="M38.324 9.82129C39.4992 9.82141 40.6296 10.2758 41.4646 11.0889C42.3003 11.9027 42.7721 13.0105 42.7722 14.167V15.7861L42.7654 15.9014C42.7103 16.4302 42.2817 16.8358 41.7615 16.8877L41.6482 16.8936C41.041 16.8932 40.5244 16.4097 40.5242 15.7861V14.167C40.5241 13.6062 40.2957 13.0655 39.8845 12.665C39.4726 12.2639 38.9116 12.0362 38.324 12.0361H31.6755C30.9266 12.0361 30.4793 12.0686 30.1394 12.3994C29.9716 12.5629 29.7124 12.5883 29.5164 12.46L28.6091 11.8662C28.4822 11.7831 28.3991 11.6461 28.3845 11.4951C28.3701 11.3443 28.4254 11.1946 28.5339 11.0889C29.3691 10.2756 30.5003 9.82129 31.6755 9.82129H38.324Z" fill="#216DE3" stroke="#D0E0F9" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M34.6777 0.112793C37.028 0.232319 38.8965 2.17782 38.8965 4.55811C38.8959 7.01469 36.9052 9.0068 34.4492 9.00732C31.9929 9.00732 30.0006 7.01515 30 4.55811L30.0059 4.32861C30.1251 1.97759 32.0692 0.106934 34.4492 0.106934L34.6777 0.112793ZM34.4492 2.35498C33.2337 2.35498 32.2471 3.34144 32.2471 4.55811C32.2476 5.77408 33.2339 6.75928 34.4492 6.75928C35.6639 6.75876 36.6488 5.77395 36.6494 4.55811L36.6377 4.33252C36.5251 3.22177 35.5882 2.35547 34.4492 2.35498Z" fill="#216DE3" stroke="#D0E0F9" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <g clip-path="url(#clip3_4764_5181)">
        <path d="M52.324 9.82129C53.4992 9.82141 54.6296 10.2758 55.4646 11.0889C56.3003 11.9027 56.7721 13.0105 56.7722 14.167V15.7861L56.7654 15.9014C56.7103 16.4302 56.2817 16.8358 55.7615 16.8877L55.6482 16.8936C55.041 16.8932 54.5244 16.4097 54.5242 15.7861V14.167C54.5241 13.6062 54.2957 13.0655 53.8845 12.665C53.4726 12.2639 52.9116 12.0362 52.324 12.0361H45.6755C44.9266 12.0361 44.4793 12.0686 44.1394 12.3994C43.9716 12.5629 43.7124 12.5883 43.5164 12.46L42.6091 11.8662C42.4822 11.7831 42.3991 11.6461 42.3845 11.4951C42.3701 11.3443 42.4254 11.1946 42.5339 11.0889C43.3691 10.2756 44.5003 9.82129 45.6755 9.82129H52.324Z" fill="#216DE3" stroke="#D0E0F9" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M48.6777 0.112793C51.028 0.232319 52.8965 2.17782 52.8965 4.55811C52.8959 7.01469 50.9052 9.0068 48.4492 9.00732C45.9929 9.00732 44.0006 7.01515 44 4.55811L44.0059 4.32861C44.1251 1.97759 46.0692 0.106934 48.4492 0.106934L48.6777 0.112793ZM48.4492 2.35498C47.2337 2.35498 46.2471 3.34144 46.2471 4.55811C46.2476 5.77408 47.2339 6.75928 48.4492 6.75928C49.6639 6.75876 50.6488 5.77395 50.6494 4.55811L50.6377 4.33252C50.5251 3.22177 49.5882 2.35547 48.4492 2.35498Z" fill="#216DE3" stroke="#D0E0F9" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <g clip-path="url(#clip4_4764_5181)">
        <path d="M66.324 9.82129C67.4992 9.82141 68.6296 10.2758 69.4646 11.0889C70.3003 11.9027 70.7721 13.0105 70.7722 14.167V15.7861L70.7654 15.9014C70.7103 16.4302 70.2817 16.8358 69.7615 16.8877L69.6482 16.8936C69.041 16.8932 68.5244 16.4097 68.5242 15.7861V14.167C68.5241 13.6062 68.2957 13.0655 67.8845 12.665C67.4726 12.2639 66.9116 12.0362 66.324 12.0361H59.6755C58.9266 12.0361 58.4793 12.0686 58.1394 12.3994C57.9716 12.5629 57.7124 12.5883 57.5164 12.46L56.6091 11.8662C56.4822 11.7831 56.3991 11.6461 56.3845 11.4951C56.3701 11.3443 56.4254 11.1946 56.5339 11.0889C57.3691 10.2756 58.5003 9.82129 59.6755 9.82129H66.324Z" fill="#216DE3" stroke="#D0E0F9" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M62.6777 0.112793C65.028 0.232319 66.8965 2.17782 66.8965 4.55811C66.8959 7.01469 64.9052 9.0068 62.4492 9.00732C59.9929 9.00732 58.0006 7.01515 58 4.55811L58.0059 4.32861C58.1251 1.97759 60.0692 0.106934 62.4492 0.106934L62.6777 0.112793ZM62.4492 2.35498C61.2337 2.35498 60.2471 3.34144 60.2471 4.55811C60.2476 5.77408 61.2339 6.75928 62.4492 6.75928C63.6639 6.75876 64.6488 5.77395 64.6494 4.55811L64.6377 4.33252C64.5251 3.22177 63.5882 2.35547 62.4492 2.35498Z" fill="#216DE3" stroke="#D0E0F9" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_4764_5181">
        <rect width="15" height="17" fill="white"/>
        </clipPath>
        <clipPath id="clip1_4764_5181">
        <rect width="16" height="17" fill="white" transform="translate(13)"/>
        </clipPath>
        <clipPath id="clip2_4764_5181">
        <rect width="16" height="17" fill="white" transform="translate(27)"/>
        </clipPath>
        <clipPath id="clip3_4764_5181">
        <rect width="16" height="17" fill="white" transform="translate(41)"/>
        </clipPath>
        <clipPath id="clip4_4764_5181">
        <rect width="16" height="17" fill="white" transform="translate(55)"/>
        </clipPath>
        </defs>
        </svg>
      `,
      personsWhite: `
        <svg class='lav-persons-white' width="71" height="17" viewBox="0 0 71 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_4764_5181)">
        <path d="M10.6164 9.82129L10.8264 9.82715C11.8697 9.88116 12.8561 10.3353 13.593 11.1006C14.3787 11.9168 14.8175 13.0208 14.8176 14.167V15.7861C14.8174 16.3419 14.4063 16.8288 13.8469 16.8877L13.7326 16.8936C13.1166 16.8931 12.6478 16.3793 12.6477 15.7861V14.167C12.6476 13.5958 12.4293 13.0514 12.0461 12.6533C11.6633 12.2557 11.1488 12.0362 10.6164 12.0361H4.38301C3.91682 12.0361 3.46405 12.2043 3.10176 12.5127L2.95235 12.6533C2.56913 13.0514 2.34989 13.5958 2.34981 14.167V15.7861C2.34962 16.379 1.88244 16.8934 1.26582 16.8936C0.649028 16.8936 0.181049 16.3791 0.180862 15.7861V14.167C0.180945 13.0208 0.618771 11.9168 1.4045 11.1006C2.19091 10.2836 3.26264 9.82129 4.38301 9.82129H10.6164Z" fill="#216DE3" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7.73022 0.00805664C10.0805 0.127583 11.949 2.07309 11.949 4.45337C11.9484 6.90996 9.95772 8.90207 7.50171 8.90259C5.04539 8.90259 3.05307 6.91041 3.05249 4.45337L3.05835 4.22388C3.17755 1.87285 5.12169 0.00219727 7.50171 0.00219727L7.73022 0.00805664ZM7.50171 2.25024C6.28618 2.25024 5.29956 3.23671 5.29956 4.45337C5.30013 5.66934 6.28634 6.65454 7.50171 6.65454C8.71644 6.65402 9.70133 5.66922 9.7019 4.45337L9.69019 4.22778C9.57755 3.11703 8.64069 2.25073 7.50171 2.25024Z" fill="#216DE3" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <g clip-path="url(#clip1_4764_5181)">
        <path d="M24.3239 9.82129C25.4992 9.82141 26.6296 10.2758 27.4645 11.0889C28.3002 11.9027 28.7721 13.0105 28.7722 14.167V15.7861L28.7653 15.9014C28.7102 16.4302 28.2816 16.8358 27.7614 16.8877L27.6481 16.8936C27.0409 16.8932 26.5243 16.4097 26.5241 15.7861V14.167C26.524 13.6062 26.2956 13.0655 25.8845 12.665C25.4726 12.2639 24.9116 12.0362 24.3239 12.0361H17.6755C16.9265 12.0361 16.4792 12.0686 16.1393 12.3994C15.9715 12.5629 15.7123 12.5883 15.5163 12.46L14.6091 11.8662C14.4821 11.7831 14.399 11.6461 14.3845 11.4951C14.37 11.3443 14.4253 11.1946 14.5339 11.0889C15.3691 10.2756 16.5003 9.82129 17.6755 9.82129H24.3239Z" fill="#216DE3" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20.6777 0.112793C23.028 0.232319 24.8965 2.17782 24.8965 4.55811C24.8959 7.01469 22.9052 9.0068 20.4492 9.00732C17.9929 9.00732 16.0006 7.01515 16 4.55811L16.0059 4.32861C16.1251 1.97759 18.0692 0.106934 20.4492 0.106934L20.6777 0.112793ZM20.4492 2.35498C19.2337 2.35498 18.2471 3.34144 18.2471 4.55811C18.2476 5.77408 19.2339 6.75928 20.4492 6.75928C21.6639 6.75876 22.6488 5.77395 22.6494 4.55811L22.6377 4.33252C22.5251 3.22177 21.5882 2.35547 20.4492 2.35498Z" fill="#216DE3" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <g clip-path="url(#clip2_4764_5181)">
        <path d="M38.3239 9.82129C39.4992 9.82141 40.6296 10.2758 41.4645 11.0889C42.3002 11.9027 42.7721 13.0105 42.7722 14.167V15.7861L42.7653 15.9014C42.7102 16.4302 42.2816 16.8358 41.7614 16.8877L41.6481 16.8936C41.0409 16.8932 40.5243 16.4097 40.5241 15.7861V14.167C40.524 13.6062 40.2956 13.0655 39.8845 12.665C39.4726 12.2639 38.9116 12.0362 38.3239 12.0361H31.6755C30.9265 12.0361 30.4792 12.0686 30.1393 12.3994C29.9715 12.5629 29.7123 12.5883 29.5163 12.46L28.6091 11.8662C28.4821 11.7831 28.399 11.6461 28.3845 11.4951C28.37 11.3443 28.4253 11.1946 28.5339 11.0889C29.3691 10.2756 30.5003 9.82129 31.6755 9.82129H38.3239Z" fill="#216DE3" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M34.6777 0.112793C37.028 0.232319 38.8965 2.17782 38.8965 4.55811C38.8959 7.01469 36.9052 9.0068 34.4492 9.00732C31.9929 9.00732 30.0006 7.01515 30 4.55811L30.0059 4.32861C30.1251 1.97759 32.0692 0.106934 34.4492 0.106934L34.6777 0.112793ZM34.4492 2.35498C33.2337 2.35498 32.2471 3.34144 32.2471 4.55811C32.2476 5.77408 33.2339 6.75928 34.4492 6.75928C35.6639 6.75876 36.6488 5.77395 36.6494 4.55811L36.6377 4.33252C36.5251 3.22177 35.5882 2.35547 34.4492 2.35498Z" fill="#216DE3" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <g clip-path="url(#clip3_4764_5181)">
        <path d="M52.3239 9.82129C53.4992 9.82141 54.6296 10.2758 55.4645 11.0889C56.3002 11.9027 56.7721 13.0105 56.7722 14.167V15.7861L56.7653 15.9014C56.7102 16.4302 56.2816 16.8358 55.7614 16.8877L55.6481 16.8936C55.0409 16.8932 54.5243 16.4097 54.5241 15.7861V14.167C54.524 13.6062 54.2956 13.0655 53.8845 12.665C53.4726 12.2639 52.9116 12.0362 52.3239 12.0361H45.6755C44.9265 12.0361 44.4792 12.0686 44.1393 12.3994C43.9715 12.5629 43.7123 12.5883 43.5163 12.46L42.6091 11.8662C42.4821 11.7831 42.399 11.6461 42.3845 11.4951C42.37 11.3443 42.4253 11.1946 42.5339 11.0889C43.3691 10.2756 44.5003 9.82129 45.6755 9.82129H52.3239Z" fill="#216DE3" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M48.6777 0.112793C51.028 0.232319 52.8965 2.17782 52.8965 4.55811C52.8959 7.01469 50.9052 9.0068 48.4492 9.00732C45.9929 9.00732 44.0006 7.01515 44 4.55811L44.0059 4.32861C44.1251 1.97759 46.0692 0.106934 48.4492 0.106934L48.6777 0.112793ZM48.4492 2.35498C47.2337 2.35498 46.2471 3.34144 46.2471 4.55811C46.2476 5.77408 47.2339 6.75928 48.4492 6.75928C49.6639 6.75876 50.6488 5.77395 50.6494 4.55811L50.6377 4.33252C50.5251 3.22177 49.5882 2.35547 48.4492 2.35498Z" fill="#216DE3" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <g clip-path="url(#clip4_4764_5181)">
        <path d="M66.3239 9.82129C67.4992 9.82141 68.6296 10.2758 69.4645 11.0889C70.3002 11.9027 70.7721 13.0105 70.7722 14.167V15.7861L70.7653 15.9014C70.7102 16.4302 70.2816 16.8358 69.7614 16.8877L69.6481 16.8936C69.0409 16.8932 68.5243 16.4097 68.5241 15.7861V14.167C68.524 13.6062 68.2956 13.0655 67.8845 12.665C67.4726 12.2639 66.9116 12.0362 66.3239 12.0361H59.6755C58.9265 12.0361 58.4792 12.0686 58.1393 12.3994C57.9715 12.5629 57.7123 12.5883 57.5163 12.46L56.6091 11.8662C56.4821 11.7831 56.399 11.6461 56.3845 11.4951C56.37 11.3443 56.4253 11.1946 56.5339 11.0889C57.3691 10.2756 58.5003 9.82129 59.6755 9.82129H66.3239Z" fill="#216DE3" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M62.6777 0.112793C65.028 0.232319 66.8965 2.17782 66.8965 4.55811C66.8959 7.01469 64.9052 9.0068 62.4492 9.00732C59.9929 9.00732 58.0006 7.01515 58 4.55811L58.0059 4.32861C58.1251 1.97759 60.0692 0.106934 62.4492 0.106934L62.6777 0.112793ZM62.4492 2.35498C61.2337 2.35498 60.2471 3.34144 60.2471 4.55811C60.2476 5.77408 61.2339 6.75928 62.4492 6.75928C63.6639 6.75876 64.6488 5.77395 64.6494 4.55811L64.6377 4.33252C64.5251 3.22177 63.5882 2.35547 62.4492 2.35498Z" fill="#216DE3" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_4764_5181">
        <rect width="15" height="17" fill="white"/>
        </clipPath>
        <clipPath id="clip1_4764_5181">
        <rect width="16" height="17" fill="white" transform="translate(13)"/>
        </clipPath>
        <clipPath id="clip2_4764_5181">
        <rect width="16" height="17" fill="white" transform="translate(27)"/>
        </clipPath>
        <clipPath id="clip3_4764_5181">
        <rect width="16" height="17" fill="white" transform="translate(41)"/>
        </clipPath>
        <clipPath id="clip4_4764_5181">
        <rect width="16" height="17" fill="white" transform="translate(55)"/>
        </clipPath>
        </defs>
        </svg>
      `,
      person: `
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
          <g clip-path="url(#clip0_4873_2500)">
            <path d="M11.395 13.0001V11.6671C11.395 11.0924 11.1637 10.541 10.7521 10.1347C10.3406 9.72852 9.78288 9.50017 9.20097 9.50008H3.79854C3.21645 9.50008 2.65786 9.72835 2.24625 10.1347C1.83467 10.5409 1.6034 11.0924 1.6034 11.6671V13.0001C1.60332 13.2761 1.37642 13.5002 1.09675 13.5002C0.817073 13.5002 0.590177 13.2761 0.590088 13.0001V11.6671C0.590088 10.8272 0.92795 10.021 1.52954 9.42716C2.13112 8.8333 2.94779 8.49976 3.79854 8.49976H9.20097C10.0516 8.49984 10.8673 8.83347 11.4688 9.42716C12.0704 10.021 12.4083 10.8272 12.4083 11.6671V13.0001C12.4082 13.2761 12.1813 13.5002 11.9016 13.5002C11.6221 13.5001 11.395 13.276 11.395 13.0001Z" fill="#216DE3"/>
            <path d="M8.69516 3.66707C8.69516 2.47062 7.71311 1.50034 6.50118 1.50008C5.28902 1.50008 4.30604 2.47046 4.30604 3.66707C4.30631 4.86347 5.28918 5.83293 6.50118 5.83293C7.71295 5.83266 8.69489 4.8633 8.69516 3.66707ZM9.70847 3.66707C9.70821 5.41559 8.2724 6.83299 6.50118 6.83325C4.72973 6.83325 3.29299 5.41576 3.29272 3.66707C3.29272 1.91817 4.72956 0.499756 6.50118 0.499756C8.27257 0.500018 9.70847 1.91833 9.70847 3.66707Z" fill="#216DE3"/>
          </g>
          <defs>
            <clipPath id="clip0_4873_2500">
              <rect width="13" height="14" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      `,
      checkBlue: `
        <svg width="11.28" height="7.82" viewBox="0 0 11.2817 7.81667" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.5817 0.700002L3.78802 7.11667L0.700002 4.2" stroke="#216DE3" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      `,
      checkGreen: `
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.8337 3.25L4.87533 9.20833L2.16699 6.5" stroke="#00A660" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      `,
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