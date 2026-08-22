
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
    .lav-premium__tab {
      display: flex;
      flex: 1 0 0;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 4px;
      padding: 6px;
      border-radius: 1111px;
      cursor: pointer;
      text-align: center;
      line-height: normal;
      transition: background 0.2s ease-in-out;
    }
    @media(hover: hover) {
      .lav-premium__tab:not(.lav-premium__tab--active):hover {
        background: rgba(255, 255, 255, 0.2);
      }
    }
    .lav-premium__tab--active {
      background: #fff;
    }
    .lav-premium__tab-title {
      font-size: 13px;
      font-weight: 600;
      line-height: normal;
      color: #64748B;
    }
    .lav-premium__tab--active .lav-premium__tab-title {
      color: #0F172A;
    }
    .lav-premium__tab-subtitle {
      font-size: 11.5px;
      color: #94A3B8;
      font-weight: 600;
    }
    .lav-premium__tab-emoji {
      width: 16px;
      height: 16px;
      vertical-align: -3px;
    }
    .lav-premium__tab-badge {
      color: #16A34A;
      text-align: center;
      font-weight: 700;
      font-size: 11.5px;
      font-style: normal;
      line-height: normal;
      border-radius: 999px;
      background: #EAFFEC;
      padding: 3px 7px;
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
      .lav-premium__title {
        font-size: 16px;
      }
      .lav-premium__radio-dot {
        width: 8px;
        height: 8px;
        border-radius: 4px;
      }
      .lav-premium__price-current, .lav-premium__price-old {
        display: none;
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
          <div class='lav-premium__tabs'>
            <div class='lav-premium__tab${initialType === 'individual' ? ' lav-premium__tab--active' : ''}' data-plan='individual'>
              <span class='lav-premium__tab-title'>Cover just me</span>
              <span class='lav-premium__tab-subtitle'>${plans.individual.tabPrice} today</span>
            </div>
            <div class='lav-premium__tab${initialType === 'family' ? ' lav-premium__tab--active' : ''}' data-plan='family'>
              <span class='lav-premium__tab-title'>Cover my family</span>
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
      tabEl.addEventListener('click', () => {
        selectPlan(tabEl.dataset.plan)

        analytics.track('Option Selected on Subscription Interstitial', {
          button: tabEl.dataset.plan === 'individual' ? 'Cover just me' : 'Cover my family',
          ab_test: 'Unify GOV+ Premium & GOV+ Premium Family'
        })
      })
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
      person: `
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="20" height="20" rx="10" fill="#DCE9FB"/>
          <g clip-path="url(#clip0_4829_1187)">
          <path d="M14.1418 15.143V14.0004C14.1418 13.5078 13.9462 13.0352 13.5979 12.687C13.2497 12.3388 12.7778 12.1431 12.2854 12.143H7.71411C7.22157 12.143 6.74892 12.3387 6.40063 12.687C6.05238 13.0352 5.85669 13.5078 5.85669 14.0004V15.143C5.85661 15.3796 5.66463 15.5717 5.42798 15.5717C5.19133 15.5717 4.99934 15.3796 4.99927 15.143V14.0004C4.99927 13.2805 5.28515 12.5895 5.79419 12.0805C6.30322 11.5715 6.99424 11.2856 7.71411 11.2856H12.2854C13.0051 11.2857 13.6954 11.5716 14.2043 12.0805C14.7134 12.5895 14.9993 13.2805 14.9993 14.0004V15.143C14.9992 15.3796 14.8072 15.5717 14.5706 15.5717C14.334 15.5716 14.1419 15.3795 14.1418 15.143Z" fill="#216DE3"/>
          <path d="M11.8574 7.14325C11.8574 6.11772 11.0265 5.28605 10.001 5.28583C8.9753 5.28583 8.14355 6.11758 8.14355 7.14325C8.14378 8.16873 8.97544 8.99969 10.001 8.99969C11.0263 8.99947 11.8572 8.16859 11.8574 7.14325ZM12.7148 7.14325C12.7146 8.64198 11.4997 9.85689 10.001 9.85712C8.50206 9.85712 7.28636 8.64212 7.28613 7.14325C7.28613 5.64419 8.50192 4.42841 10.001 4.42841C11.4998 4.42863 12.7148 5.64433 12.7148 7.14325Z" fill="#216DE3"/>
          </g>
          <defs>
          <clipPath id="clip0_4829_1187">
          <rect width="11" height="12" fill="white" transform="translate(4.5 4)"/>
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