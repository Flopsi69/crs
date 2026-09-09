(function () {
  if (document.querySelector('.exp-checkout-styles')) return

  // Config for Experiment
  const config = {
    // dir: 'http://127.0.0.1:5500/gameboost/checkoutImprove',
    dir: 'https://flopsi69.github.io/crs/gameboost/checkout',
    clarity: ['set', 'exp_checkout', 'variant_1'],
    debug: true,
    isNoAuth: location.pathname.includes('/checkout/accounts/') || location.pathname.includes('/checkout/items/') || location.pathname.includes('/checkout/keys/'),
  }

  const AVATAR_ICON = "data:image/png;base64,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"

  // const orig = console.log
  // console.log = function (...args) {
  //   orig.apply(console, ['Debug:', ...args])
  // }

  // Styles for Experiment
  const styles = /* css */ `
    :root {
      --lav-label-border: #1A4A33;
      --lav-label-bg: #0E2B1E;
      --lav-label-border-active: #21554E;
      --lav-label-bg-active: #21394A;
    }
    /* dark theme */
    html.dark {
      --lav-14-border: rgba(235, 235, 235, 0.20);
      --lav-14-bg: rgba(156, 163, 175, 0.10);
      --lav-14-border-active: rgba(235, 235, 235, 0.20);
      --lav-14-bg-active: rgba(156, 163, 175, 0.20);
      --lav-lifetime-border: #2F6BFF;
      --lav-lifetime-bg: #171C2A;
      --lav-lifetime-border-active: #2F6BFF;
      --lav-lifetime-bg-active: #1C2643;
      --lav-color-price: #7EA5FF;
    }
    /* blue theme */
    html.blue {
      --lav-14-border: rgba(235, 235, 235, 0.20);
      --lav-14-bg: rgba(156, 163, 175, 0.10);
      --lav-14-border-active: rgba(235, 235, 235, 0.20);
      --lav-14-bg-active: rgba(156, 163, 175, 0.20);
      --lav-lifetime-border: #2F6BFF;
      --lav-lifetime-bg: #17345E;
      --lav-lifetime-border-active: #2F6BFF;
      --lav-lifetime-bg-active: #193258;
      --lav-color-price: #7EA5FF;
    }
    /* purple theme */
    html.purple {
      --lav-14-border: rgba(235, 235, 235, 0.20);
      --lav-14-bg: rgba(156, 163, 175, 0.10);
      --lav-14-border-active: rgba(235, 235, 235, 0.20);
      --lav-14-bg-active: rgba(165, 156, 175, 0.20);
      --lav-lifetime-border: #2F6BFF;
      --lav-lifetime-bg: #13224B;
      --lav-lifetime-border-active: #2F6BFF;
      --lav-lifetime-bg-active: #203677;
      --lav-color-price: #7EA5FF;
    }
    /* light theme */
    html.light {
      --lav-14-border: #D4D4D4;
      --lav-14-bg: rgba(156, 163, 175, 0.10);
      --lav-14-border-active: rgba(23, 23, 23, 0.20);
      --lav-14-bg-active: #fff;
      --lav-lifetime-border: #2F6BFF;
      --lav-lifetime-bg: #E3EEFF;
      --lav-lifetime-border-active: #2F6BFF;
      --lav-lifetime-bg-active: #C9DEFF;
      --lav-color-price: #0B6CFB;
      --lav-label-border: #7FD6B9;
      --lav-label-bg: #DBFFF3;
      --lav-label-border-active: #7FD6B9;
      --lav-label-bg-active: #DBFFF3;
    }

    section.max-w-2xl.mx-auto {
      max-width: 628px;
    }

    .lav-progress {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 32px;
    }
    .lav-progress__step {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex-shrink: 0;
    }
    .lav-progress__circle {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      border-radius: 999px;
      border: 1px solid hsl(var(--border));
      background: hsl(var(--card));
      color: hsl(var(--foreground));
      font-size: 12px;
      font-weight: 700;
      line-height: 16px;
    }
    .lav-progress__step.active .lav-progress__circle {
      border: none;
      background: hsl(var(--primary));
      color: hsl(var(--primary-foreground));
    }
    .lav-progress__step.completed .lav-progress__circle {
      border: none;
      background: hsl(var(--primary));
    }
    .lav-progress__check {
      display: none;
    }
    .lav-progress__step.completed .lav-progress__number {
      display: none;
    }
    .lav-progress__step.completed .lav-progress__check {
      display: block;
    }
    .lav-progress__label {
      margin-top: 0;
      color: hsl(var(--foreground));
      font-size: 16px;
      font-weight: 600;
      line-height: 28px;
      white-space: nowrap;
    }
    .lav-progress__divider {
      flex: 1 0 0;
      height: 1px;
      background: hsl(var(--border));
    }
    .lav-acc {
      display: none;
      margin-bottom: 12px;
    }
    .lav-acc__plate {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;
      width: 100%;
      padding: 12px;
      border-radius: 12px;
      border: 1px solid hsl(var(--border));
      background: hsl(var(--card));
    }
    .lav-acc__row {
      display: flex;
      align-items: center;
      gap: 12px;
      width: 100%;
    }
    .lav-acc__avatar {
      flex-shrink: 0;
      position: relative;
      width: 56px;
      height: 56px;
      border-radius: 999px;
      overflow: hidden;
      background: hsl(var(--muted));
      box-shadow: 0 0 0 1px rgba(31, 35, 40, 0.5);
    }
    .lav-acc__avatar-img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .lav-acc__info {
      display: flex;
      flex-direction: column;
      min-width: 0;
      flex: 1 0 0;
    }
    .lav-acc__name {
      font-family: "Red Hat Display";
      font-weight: 500;
      font-size: 18px;
      line-height: 28px;
      color: hsl(var(--foreground));
    }
    .lav-acc__name .lav-acc__id {
      display: none;
    }
    .lav-acc__meta {
      font-family: Manrope;
      font-weight: 500;
      font-size: 12px;
      line-height: 12px;
      color: hsl(var(--muted-foreground));
      margin-top: 2px;
    }
    .lav-acc__dot {
      font-weight: 700;
      padding: 0 4px;
    }

    .lav-trust {
      margin: auto;
    }
    .lav-lang {
      margin-right: 15px;
    }
    footer {
      opacity: 0;
    }

    .lav-warranty {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
      margin-top: 3px;
    }
    .lav-warranty__option {
      position: relative;
      border-radius: 10px;
      padding: 14px;
      cursor: pointer;
    }
    .lav-warranty__option:first-child {
      border: 1px solid var(--lav-14-border);
      background: var(--lav-14-bg);
    }
    .lav-warranty__option:last-child {
      border: 1px solid var(--lav-lifetime-border);
      background: var(--lav-lifetime-bg);
    }
    .lav-warranty__option.active:first-child {
      border: 1px solid var(--lav-14-border-active);
      background: var(--lav-14-bg-active);
    }
    .lav-warranty__option.active:last-child {
      border: 1px solid var(--lav-lifetime-border-active);
      background: var(--lav-lifetime-bg-active);
    }
    .lav-warranty__option.active .lav-empty-checkbox {
      display: none;
    }
    .lav-warranty__option:not(.active) .lav-fill-checkbox {
      display: none;
    }
    .lav-warranty__title {
      position: relative;
      display: flex;
      align-items: center;
      gap: 10px;
      justify-content: space-between;
      color: hsl(var(--foreground));
      font-size: 13px;
      font-weight: 500;
    }
    .lav-warranty__price {
      color: var(--lav-color-price);
      font-size: 12px;
      font-weight: 600;
      margin-top: 6px;
    }
    .lav-warranty__caption {
      color: hsl(var(--muted-foreground));
      font-size: 12px;
      line-height: 17.4px;
      margin-top: 4px;
    }
    .lav-warranty__label {
      position: absolute;
      left: 50%;
      top: 0;
      transform: translate(-50%, -50%);
      color: #2FD07F;
      font-size: 11px;
      font-weight: 600;
      border-radius: 999px;
      border: 1px solid var(--lav-label-border);
      background: var(--lav-label-bg);
      padding: 1.5px 10px;
      white-space: nowrap;
    }
    html.light .lav-warranty__label {
      color: #028744;
    }
    html.light .lav-warranty__option.active:first-child svg path {
      fill: black;
    }
    .lav-warranty__option.active .lav-warranty__label {
      border-color: var(--lav-label-border-active);
      background: var(--lav-label-bg-active);
    }
    .lav-original-warranty {
      display: none;
    }
    .lav-original-warranty-wrapper .mt-3>.border-b.border-border {
      border: none!important;
    }

    .lav-benefits {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 9px;
      padding: 0 8px;
      color: hsl(var(--muted-foreground));
      font-size: 11px;
      font-weight: 400;
      margin-top: 12px;
    }

    .lav-benefits__item {
      display: flex;
      align-items: center;
      gap: 5px;
    }

    .lav-benefits ~ .mt-3.flex {
      display: none;
    }

    .lav-original-discount {
    }

    section h2.sr-only ~ .flex.gap-4 > .flex.flex-col {
      display: none;
    }
    .lav-original-product {
      margin-top: 12px;
      padding-bottom: 12px!important;
    }
    .lav-original-info > .pb-8 > h3.leading-7 {
      display: none;
    }
    .lav-original-info:not(.lav-original-warranty-wrapper) > .pb-8 {
      padding-bottom: 0;
    }
    .lav-no-auth :not(.relative.lg\\:hidden) .lav-original-warranty-wrapper {
      display: none;
    }
    .lav-no-auth .lav-original-payment-wrapper {
      display: none;
    }
    .lav-no-auth .lav-acc {
      display: none;
    }
    .lav-no-auth .relative.lg\\:hidden > .sticky, .lav-no-auth .relative.lg\\:hidden > [class="px-5 pb-4"], .lav-no-auth .relative.lg\\:hidden > [class="px-5 py-5"], .lav-no-auth .relative.lg\\:hidden > .sticky {
      display: none;
    }
    .lav-no-auth .relative.lg\\:hidden .lav-acc + h2 {
      display: none;
    }
    .lav-no-auth .relative.lg\\:hidden form .block.mt-4 {
      font-size: 10px;
    }
    .relative.lg\\:hidden > .px-5.pt-5.pb-4.border-b.border-border {
      border: none;
      padding-bottom: 0;
    }
    .relative.lg\\:hidden > .px-5.pt-5.pb-4.border-b.border-border > .gap-3\\.5.pt-4.pb-5.border-b.border-border {
      border: none;
    }
    .relative.lg\\:hidden > .lav-original-warranty-wrapper .lav-warranty {
      display: none;
    }
    .lav-original-login h3.leading-7 {
      display: none;
    }
    .lav-login-caption {
      margin-bottom: 24px;
    }
    .lav-original-login input[type="email"] {
      min-height: 48px;
    }
    .lav-original-login button[type="submit"] {
      min-height: 52px;
      font-size: 16px;
    }
    .lav-original-login .space-y-2 a.bg-secondary {
      min-height: 48px;
    }
    .lav-original-login .w-1\\/5 {
      width: 44%;
    }
    .lav-original-noauth-product {
      padding: 0;
      border: 0;
    }
    .lav-original-noauth-product .gap-3\\.5.pt-4.pb-5.border-b.border-border.pt-3\\! {
      border: 0;
    }
    .lav-original-noauth-product .flex.flex-col.gap-1.py-3\\.5.border-b.border-border {
      display: none;
    }
    @media(max-width: 768px) {
      .bg-card.dark\\:bg-card-alt[data-state="open"][data-dismissable-layer] {
        max-width: 90%;
      }
    }
    @media(max-width: 1024px) {
      .lav-no-auth .relative.lg\\:hidden > .px-5.pt-5.pb-4.border-b.border-border {
        padding-bottom: 40px;
      }
      .lav-login-caption {
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
        margin-bottom: 12px;
      }
      .lav-original-warranty-wrapper .border-b.border-border.py-3\\.5 {
        border: none;
      }
      .lav-num-label {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 28px;
        height: 28px;
        border-radius: 999px;
        font-size: 12px;
        font-weight: 700;
        line-height: 16px;
        margin-right: 12px;
        background: hsl(var(--primary));
        color: hsl(var(--primary-foreground));
      }
      .lav-mobile-payment h3.text-sm {
        padding-bottom: 16px;
      }
      .lav-warranty {
        grid-template-columns: 1fr;
        gap: 16px;
      }
      .lav-original-warranty-wrapper .max-w-2xl .border-b.border-border {
        border: none;
      }

      .lav-progress {
        margin-bottom: 24px;
      }
      .lav-progress__step {
        max-width: 72px;
      }
      .lav-progress__label {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        font-weight: 600;
        line-height: 16px;
        margin-top: 4px;
        white-space: normal;
        text-align: center;
        min-height: 32px;
      }
      .lav-acc__plate {
        padding: 12px 11px;
      }
      .lav-acc__head {
        display: none;
      }
      .lav-acc {
        margin-bottom: 24px;
      }
      .lav-acc__name {
        line-height: 1;
      }
      .lav-acc__name span:not(.lav-acc__id) {
        margin-right: 7px;
      }
      .lav-acc__name .lav-acc__id {
        display: inline-block;
        color: hsl(var(--muted-foreground));
        font-size: 12px;
        font-weight: 500;
        line-height: 16px;
      }
      .lav-acc__meta {
        margin-top: 5px;
      }
      .lav-acc__meta .lav-acc__id {
        display: none;
      }
      .lav-acc__dot {
        display: none;
      }
      .lav-acc__avatar {
        width: 50px;
        height: 50px;
      }
      .lav-progress__circle {
        width: 23px;
        height: 23px;
      }
      .lav-original-warranty-wrapper {
        border-bottom: 0;
      }
      .lav-collapse {
        border-radius: 12px;
        border: 1px solid hsl(var(--border));
        background: hsl(var(--card));
        padding: 12px;
        margin-top: 8px;
        margin-bottom: 24px;
      }
      .lav-collapse__header {
        display: flex;
        align-items: center;
        gap: 12px;
        width: 100%;
        border: 0;
        background: transparent;
        padding: 0;
        cursor: pointer;
        text-align: left;
      }
      .lav-collapse__thumb {
        flex-shrink: 0;
        width: 48px;
        height: 48px;
        border-radius: 8px;
        overflow: hidden;
        background: hsl(var(--muted));
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
      }
      .lav-collapse__thumb img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .lav-collapse__heading {
        display: flex;
        align-items: center;
        gap: 10px;
        flex: 1 0 0;
        min-width: 0;
        color: hsl(var(--muted-foreground));
        font-size: 14px;
        font-weight: 500;
        line-height: 18px;
      }
      .lav-collapse__chevron {
        margin-top: 4px;
        flex-shrink: 0;
        color: hsl(var(--muted-foreground) / 0.9);
      }
      .lav-collapse.expanded .lav-collapse__chevron {
        transform: rotate(180deg);
      }
      .lav-collapse__total {
        flex-shrink: 0;
        color: hsl(var(--foreground));
        font-size: 15px;
        font-weight: 600;
        line-height: 22.5px;
      }
      .lav-collapse__body {
        display: none;
        margin-top: 10px;
      }
      .lav-collapse.expanded .lav-collapse__body {
        display: block;
      }
      .lav-original-product {
        display: none;
      }
      .lav-collapse__body .lav-original-product {
        display: flex;
        margin-top: -8px;
      }
      .lav-collapse__body .lav-original-product > .gap-3 > p.whitespace-nowrap.text-foreground {
        display: none;
      }
      .lav-collapse__body .lav-original-product > .gap-3 > img {
        display: none;
      }
      .lav-collapse__body > div > .pt-5 {
        // display: none;
      }
    }
  `

  const stylesEl = document.createElement('style')
  stylesEl.classList.add('exp-checkout-styles')
  stylesEl.innerHTML = styles

  // *** Logic *** //
  // (function () {
  //   const urlsTarget = [
  //     '/accounts',
  //   ]

  //   function urlChangeHandler() {
  //     if (!urlsTarget.some(url => location.href.includes(url))) {
  //       return;
  //     }

  //     initExp();
  //   }

  //   document.addEventListener('inertia:navigate', () => {
  //     console.log('navigate')
  //     urlChangeHandler();
  //   })

  //   urlChangeHandler()
  // })()

  initExp()

  async function initExp() {
    await waitFor(() => document.head && document.body && _$('#app>div'), false, { ms: 20 })
    addProductToCheckoutHandlers()
    if (location.pathname.includes('/checkout/') === false) return

    if (config.isNoAuth) {
      localStorage.setItem('isNoAuth', 'yes')
      _$('.relative.min-h-screen.bg-background').classList.add('lav-no-auth')
    }

    if (localStorage.getItem('isNoAuth') !== 'yes') {
      return;
    }

    _$('#app>div').appendChild(stylesEl)

    console.debug('** InitExp **')
    handleHeader();
    waitFor(() => window?.exposedData, () => {
      const isAccount = exposedData?.order_type === 'Account'
      const isItem = exposedData?.order_type === 'Item'

      addProgressBar()
      if (config.isNoAuth) {
        handleLoginForm();
      }

      handlePayment();

      if (isAccount) {
        handleWarranty();
        handleMobileWarranty();
      }
      handleSummary(isAccount);
      handleMobileSummary(isAccount);
      handleMobileSteps(isAccount);
      if (!config.isNoAuth) {
        addMobileCollapse()
      }
    }, { ms: 20 })
  }

  function isAuthUser() {
    return !!_$('#reka-dropdown-menu-trigger-v-24')
  }

  function addMobileCollapse() {
    return false
    //   const target = config.isNoAuth ? 'section h2.sr-only + .flex.gap-4 + .flex.gap-4' : 'section h2.sr-only + .flex.gap-4';
    // const parentEl = _$(target)
    const parentEl = _$('.relative.lg\\:hidden .lav-original-warranty-wrapper')
    if (!parentEl) return

    const titleEl = _$('h2.text-foreground', parentEl)
    titleEl.innerText = 'Summary'

    const productInfo = _$('.gap-3\\.5.pt-4.pb-5', parentEl)
    productInfo.classList.add('lav-original-product')

    const markupCollapse = /* html */ `
      <div class='lav-collapse'>
        <div class='lav-collapse__header'>
          <div class='lav-collapse__thumb'></div>
          <div class='lav-collapse__heading'>
            <span>Order summary</span>
            ${getSvg('chevronDown')}
          </div>
          <div class='lav-collapse__total'></div>
        </div>
        <div class='lav-collapse__body'>
          <div class='lav-collapse__product-info'>
            
          </div>
        </div>
      </div>
    `

    titleEl.insertAdjacentHTML('afterend', markupCollapse)

    const collapseEl = _$('.lav-collapse', parentEl)

    _$('.lav-collapse__header', collapseEl).addEventListener('click', () => {
      collapseEl.classList.toggle('expanded')
    })

    setNewData();

    function setNewData() {
      const totalEl = _$('.lav-collapse__total', collapseEl)
      const thumbEl = _$('.lav-collapse__thumb', collapseEl)
      const productInfoMarkup = productInfo?.outerHTML || ''
      const summaryInfoMarkup = _$('.relative.lg\\:hidden > .px-5.pb-4:not(.lav-original-warranty-wrapper) > div')?.outerHTML || ''

      if (totalEl) totalEl.innerText = _$('p.whitespace-nowrap.text-foreground', productInfo)?.innerText;
      if (thumbEl) thumbEl.style.backgroundImage = `url(${_$('img.size-12', productInfo)?.src || ''})`

      _$('.lav-collapse__body').innerHTML = productInfoMarkup + summaryInfoMarkup
    }
  }

  function handleMobileSteps(isAccount) {
    const billingEl = _$('.relative.lg\\:hidden .p-5.border-b.border-border');
    const paymentEl = _$('.relative.lg\\:hidden .px-5.py-5 + .px-5.py-5');

    if (billingEl) {
      billingEl.classList.add('lav-mobile-billing')
      _$('h3.text-sm', billingEl).insertAdjacentHTML('afterbegin', '<span class="lav-num-label">2</span>')
    }

    if (paymentEl) {
      paymentEl.classList.add('lav-mobile-payment')
      _$('h3.text-sm', paymentEl).insertAdjacentHTML('afterbegin', '<span class="lav-num-label">3</span>')
    }
  }

  function addProductToCheckoutHandlers() {
    console.log('addCLickHandlers')
    document.addEventListener('click', function (e) {
      // Items, accounts, keys
      console.log('click', e.target)
      if (e.target.closest('button')?.innerText.toLowerCase().trim().includes('buy now') || e.target.closest('button')?.innerText.toLowerCase().trim().includes('buy account')) {
        if (isAuthUser()) return
        let type = 'accounts'
        let offerIdEl = null;
        if (location.pathname.includes('/accounts')) {
          offerIdEl = e.target.closest('a.rounded-xl.ring-1')?.querySelector('[data-type="offer-id"]') || e.target.closest('div:not([class])')?.querySelector('div.hidden[data-type="offer-id"]')
        }
          
        if (location.pathname.includes('/items/')) {
          type = 'items'
          offerIdEl = e.target.closest('div:not([class])')?.querySelector('div.hidden[data-type="offer-id"]')
        }

        // if (location.pathname.includes('/keys')) {
          // type = 'keys'
          // offerIdEl = e.target.closest('div:not([class])')?.querySelector('div.hidden[data-type="offer-id"]')
        // }

        if (_$('.sm\\:gap-x-1 .flex.gap-x-3.items-center[href="https://gameboost.com/keys"]')) {
          type = 'keys'
          offerIdEl = e.target.closest('div:not([class])')?.querySelector('div.hidden[data-type="offer-id"]')
        }
        const offerId = offerIdEl?.innerText.trim().replace('#', '')

        console.log('Buy now offerId', offerId)

        if (offerId) {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          location.href = `https://gameboost.com/checkout/${type}/${offerId}`
          console.log('offerId', offerId, 'type', type)
        }
      }
    }, true)
  }

  function addProgressBar() {
    const parentEl = _$('.mx-auto.min-w-0.max-w-2xl');
    const parentElMobile = _$('.relative.lg\\:hidden .px-5.pt-5.pb-4');

    if (!parentEl || !parentElMobile) return

    const pageData = getPageData()
    const userInfo = pageData?.props?.auth?.user || {}
    console.log('userInfo', userInfo, pageData)

    const steps = [
      { label: 'Secure your order', active: true },
      { label: 'Pay', active: false },
      { label: 'Get credentials', active: false }
    ]

    const stepsMarkup = steps.map((step, index) => /* html */ `
      ${index ? `<div class='lav-progress__divider'></div>` : ''}
      <div class='lav-progress__step${step.active ? ' active' : ''}'>
        <div class='lav-progress__circle bg-primary'>
          <span class='lav-progress__number'>${index + 1}</span>
          ${getSvg('progressCheck')}
        </div>
        <div class='lav-progress__label'>${step.label}</div>
      </div>
    `).join('')

    const markup = /* html */ `
    <div class='lav-progress'>
        ${stepsMarkup}
      </div>

      <div class='lav-acc' ${!userInfo.id ? 'style="display:none;"' : ''}>
        <div class="lav-acc__head text-sm font-semibold leading-7 text-foreground mb-3">
          Order secured
        </div>

        <div class='lav-acc__plate'>
          <div class='lav-acc__row'>
            <div class='lav-acc__avatar'>
              <img class='lav-acc__avatar-img' src="${userInfo.avatar || AVATAR_ICON}" alt="">
            </div>
            <div class='lav-acc__info'>
              <div class='lav-acc__name'>
                <span>${userInfo.username || 'User'}</span>
                <span class='lav-acc__id'>ID: ${userInfo.id || '-'}</span>
              </div>
              <div class='lav-acc__meta'>
                <span class='lav-acc__id'>ID: ${userInfo.id || '-'}</span> <span class='lav-acc__dot'>·</span> Credentials will be delivered to your account
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    parentEl.insertAdjacentHTML('afterbegin', /* html */ `${markup}`)
    parentElMobile.insertAdjacentHTML('afterbegin', /* html */ `${markup}`)

    if (!config.isNoAuth) {
      setActiveProgressStep(2)
    }
  }

  function getPageData() {
    const el = document.querySelector('script[data-page="app"]')
    if (!el) return null
    try {
      return JSON.parse(el.textContent)
    } catch {
      return null
    }
  }

  function setActiveProgressStep(step) {
    _$$('.lav-progress').forEach(progressEl => {
      _$$('.lav-progress__step', progressEl).forEach((stepEl, index) => {
        stepEl.classList.toggle('active', index + 1 === step)
        stepEl.classList.toggle('completed', index + 1 < step)
      })
    })
  }

  function handleLoginForm() {
    const loginFormEl = _$('section h2.sr-only + .flex.gap-4');
    const loginFormMobile = _$('.relative.lg\\:hidden > .px-5.pt-5.pb-4.border-b.border-border .space-y-6.pt-3');
    if (!loginFormEl) return

    loginFormEl.classList.add('lav-original-login');
    loginFormMobile.classList.add('lav-original-login');

    _$('h3.leading-7', loginFormEl).insertAdjacentHTML('beforebegin', /* html */ `
      <div class="lav-login-caption text-[15px] text-muted-foreground">Your GameBoost account is where your credentials are delivered and your warranty lives. One step, then payment.</div>
    `)

    loginFormMobile.insertAdjacentHTML('beforebegin', /* html */ `
      <div class="lav-login-caption text-[15px] text-muted-foreground">Your GameBoost account is where your credentials are delivered and your warranty lives. One step, then payment.</div>
    `)

    _$('.w-1\\/5 + .text-xs', loginFormEl).innerText = 'Or'
    _$('.w-1\\/5 + .text-xs', loginFormMobile).innerText = 'Or'

    _$('button[type="submit"]', loginFormEl).innerText = 'Continue to payment'
    _$('button[type="submit"]', loginFormMobile).innerText = 'Continue to payment'

    const productMobEl = _$('.relative.lg\\:hidden > .px-5.pt-5.pb-4.border-b.border-border + .px-5.pt-5.pb-4.border-b.border-border');
    productMobEl.classList.add('lav-original-noauth-product');
    _$('.relative.lg\\:hidden .lav-progress').insertAdjacentElement('afterend', productMobEl)
  }

  async function handlePayment() {
    const target = config.isNoAuth ? 'section h2.sr-only + .flex.gap-4 + .flex.gap-4 + .flex.gap-4' : 'section h2.sr-only + .flex.gap-4 + .flex.gap-4';
    await waitFor(() => _$(target), false, { ms: 20 })
    const paymentBlockEl = _$(target);
    
    if (!paymentBlockEl) return

    paymentBlockEl.classList.add('lav-original-payment-wrapper');
  }

  function handleHeader() {
    const headerEl = _$('header.border-b');

    const trustEl = _$('footer [href*="https://www.trustpilot.com/"]')
    trustEl.classList.add('lav-trust');
    const langEl = _$('footer [href*="https://www.trustpilot.com/"] + button[type="button"]');
    langEl.classList.add('lav-lang');

    _$('.max-w-7xl > .flex.items-center [href="https://gameboost.com/"]', headerEl).insertAdjacentElement('afterend', langEl)

    _$('.max-w-7xl > .flex.items-center [href="https://gameboost.com/"]', headerEl).insertAdjacentElement('afterend', trustEl)
  }

  function handleWarranty() {
    const target = config.isNoAuth ? 'section h2.sr-only + .flex.gap-4 + .flex.gap-4' : 'section h2.sr-only + .flex.gap-4';
    const warrantyBlockEl = _$(target);

    if (!warrantyBlockEl) return

    warrantyBlockEl.classList.add('lav-original-warranty-wrapper');

    const warrantyTogglerWrapEl = _$('.mt-3 .gap-1.flex', warrantyBlockEl);

    if (!warrantyTogglerWrapEl) return
    warrantyTogglerWrapEl.classList.add('lav-original-warranty');
    const warrantyToggler = _$('button[data-state]', warrantyTogglerWrapEl);
    const procent = _$('.bg-secondary.text-muted-foreground', warrantyTogglerWrapEl).innerText.trim();
    const isCheckedLifetime = warrantyToggler.dataset.state === 'checked';
    // let lifetimePrice = 0;
    // if (isCheckedLifetime) {
    //     lifetimePrice = 1
    // }

    const newWarrantyMarkup = /* html */ `
      <div class="lav-warranty__head text-sm font-semibold leading-7 text-foreground mb-3">
        Protect your purchase
      </div>
      <div class="lav-warranty">
        <div class='lav-warranty__option lav-warranty__option-free'>
          <div class='lav-warranty__title'>
            14-day Warranty
          </div>
          <div class='lav-warranty__price'>
            Included in your price
          </div>
          <div class='lav-warranty__caption'>
            Refund or replacement if anything goes wrong in the first 14 days.
          </div>
        </div>

        <div class='lav-warranty__option lav-warranty__option-lifetime'>
          <div class='lav-warranty__label'>34% of buyers choose this</div>
          <div class='lav-warranty__title'>
            Lifetime Warranty
          </div>
          <div class='lav-warranty__price'>
          ${isCheckedLifetime ? procent : procent}
          </div>
          <div class='lav-warranty__caption'>
            If it's ever recovered or banned through no fault of yours, we replace or refund — forever.
          </div>
        </div>
      </div>
    `;
    warrantyTogglerWrapEl.insertAdjacentHTML('beforebegin', newWarrantyMarkup)

    if (isCheckedLifetime) {
      _$('.lav-warranty__option:nth-child(2)', warrantyBlockEl).classList.add('active')
    } else {
      _$('.lav-warranty__option:nth-child(1)', warrantyBlockEl).classList.add('active')
    }

    _$$('.lav-warranty__option', warrantyBlockEl).forEach((optionEl, index) => {
      optionEl.querySelector('.lav-warranty__title').insertAdjacentHTML('beforeend', getSvg('emptyCheckbox'));
      optionEl.querySelector('.lav-warranty__title').insertAdjacentHTML('beforeend', index ? getSvg('fillCheckboxBlue') : getSvg('fillCheckbox'));

      optionEl.addEventListener('click', () => {
        if (optionEl.classList.contains('active')) return

        _$$('.lav-warranty__option').forEach((el) => el.classList.remove('active'))

        optionEl.classList.add('active')
        warrantyToggler.click()
       
        const warrantyBenefitEl = _$('.lav-benefits__item-warranty span')

        if (warrantyBenefitEl) {
          warrantyBenefitEl.innerText = optionEl.classList.contains('active') && index === 1 ? 'Lifetime warranty' : '14-day warranty included'
        }
      })
    })
  }

  function handleMobileWarranty() {
    // const target = config.isNoAuth ? 'section h2.sr-only + .flex.gap-4 + .flex.gap-4' : 'section h2.sr-only + .flex.gap-4';

    const target = config.isNoAuth ? '.lg\\:hidden .px-5.pt-5.pb-4 + .px-5.pt-5.pb-4' : '.lg\\:hidden .px-5.pt-5.pb-4';
    const warrantyBlockEl = _$(target);

    if (!warrantyBlockEl) return

    warrantyBlockEl.classList.add('lav-original-warranty-wrapper');

    const warrantyTogglerWrapEl = _$('.border-border.py-3\\.5', warrantyBlockEl);

    if (!warrantyTogglerWrapEl) return

    warrantyTogglerWrapEl.classList.add('lav-original-warranty');
    const warrantyToggler = _$('button[data-state]', warrantyTogglerWrapEl);
    const procent = _$('.bg-secondary.text-muted-foreground', warrantyTogglerWrapEl).innerText.trim();

    const newWarrantyMarkup = /* html */ `
      <div class="lav-warranty">
        <div class='lav-warranty__option'>
          <div class='lav-warranty__title'>
            14-day Warranty
          </div>
          <div class='lav-warranty__price'>
            Included in your price
          </div>
          <div class='lav-warranty__caption'>
            Refund or replacement if anything goes wrong in the first 14 days.
          </div>
        </div>

        <div class='lav-warranty__option'>
          <div class='lav-warranty__label'>34% of buyers choose this</div>
          <div class='lav-warranty__title'>
            Lifetime Warranty
          </div>
          <div class='lav-warranty__price'>
          ${warrantyToggler.dataset.state === 'checked' ? procent : procent}
          </div>
          <div class='lav-warranty__caption'>
            If it's ever recovered or banned through no fault of yours, we replace or refund — forever.
          </div>
        </div>
      </div>
    `;
    warrantyTogglerWrapEl.insertAdjacentHTML('beforebegin', newWarrantyMarkup)

    if (warrantyToggler.dataset.state === 'checked') {
      _$('.lav-warranty__option:nth-child(2)', warrantyBlockEl).classList.add('active')
    } else {
      _$('.lav-warranty__option:nth-child(1)', warrantyBlockEl).classList.add('active')
    }

    _$$('.lav-warranty__option', warrantyBlockEl).forEach((optionEl, index) => {
      optionEl.querySelector('.lav-warranty__title').insertAdjacentHTML('beforeend', getSvg('emptyCheckbox'));
      optionEl.querySelector('.lav-warranty__title').insertAdjacentHTML('beforeend', index ? getSvg('fillCheckboxBlue') : getSvg('fillCheckbox'));

      optionEl.addEventListener('click', () => {
        if (optionEl.classList.contains('active')) return

        _$$('.lav-warranty__option').forEach((el) => el.classList.remove('active'))

        optionEl.classList.add('active')
        warrantyToggler.click()
      })
    })
  }

  function handleSummary(isAccount) {
    const summaryBlockEl = _$('.w-\\[380px\\].shrink-0.sticky.top-20');

    const targetProduct = config.isNoAuth ? _$('section h2.sr-only + .flex.gap-4 + .flex.gap-4') : _$('section h2.sr-only + .flex.gap-4');
    const productEl = _$('.mt-3 > .flex.pt-0\\!', targetProduct);
    targetProduct.classList.add('lav-original-info');
    productEl.classList.add('lav-original-product')
    _$('h2:last-of-type', summaryBlockEl).insertAdjacentElement('afterend', productEl)


    // Discount
    // const discountBlockEl = _$('h2.text-base+.border-border', summaryBlockEl);

    // if (discountBlockEl) {
    //   discountBlockEl.classList.add('lav-original-discount');
    //   _$('.p-6.bg-card', summaryBlockEl).insertAdjacentElement('beforeend', discountBlockEl)
    // }

    const targetDataset = config.isNoAuth ? 'section h2.sr-only + .flex.gap-4 + .flex.gap-4' : 'section h2.sr-only + .flex.gap-4';

    // Benefits
    const benefitsMarkup = /* html */ `
      <div class='lav-benefits'>
        <div class='lav-benefits__item'>${ getSvg('iconShield') } Money-back guarantee</div>
        <div class='lav-benefits__item'>${ getSvg('iconHeadphone') } 24/7 human support</div>
        ${ exposedData?.is_instant_delivery ? `<div class='lav-benefits__item'>${ getSvg('iconBlink') } Instant delivery</div>` : '' }
        ${ isAccount ? `<div class='lav-benefits__item lav-benefits__item-warranty'>${ getSvg('iconCheck') } <span>${ _$(targetDataset + ' .mt-3 .gap-1.flex button[data-state]')?.dataset.state !== 'checked' ? '14-day warranty included' : 'Lifetime warranty' }</span></div>` : '' }
      </div>
    `;

    _$('[type="button"].mt-4:last-of-type', summaryBlockEl).insertAdjacentHTML('afterend', benefitsMarkup)

    if (!config.isNoAuth) {
      // Pay btn
      const payBtn = _$('[type="button"].mt-4:last-of-type', summaryBlockEl)
      const replaceText = exposedData?.is_instant_delivery ? 'Pay securely · Instant delivery' : 'Pay securely'
      payBtn.childNodes[2].textContent = replaceText

      const payBtnObserver = new MutationObserver(() => {
        if (payBtn.childNodes[2]?.textContent.trim() === 'Pay Now') {
          payBtn.childNodes[2].textContent = replaceText
        }
      })

      payBtnObserver.observe(payBtn, { childList: true, subtree: true, characterData: true })
    }
  }

  function handleMobileSummary(isAccount) {
    const summaryBlockEl = _$('.lg\\:hidden .px-5.pb-4:not(.pt-5)')

    visibilityEvent(summaryBlockEl, () => {
      pushDataLayer('exp_checkout_summary_view', 'Order Summary', 'view', 'Checkout');
    })

    if (!config.isNoAuth) {
      // Pay btn
      const payBtn = _$('.sticky > .relative [type="button"]:last-of-type')
      const replaceText = 'Pay securely'
      payBtn.childNodes[2].textContent = replaceText

      const payBtnObserver = new MutationObserver(() => {
        if (payBtn.childNodes[2]?.textContent.trim() === 'Pay Now') {
          payBtn.childNodes[2].textContent = replaceText
        }
      })

      payBtnObserver.observe(payBtn, { childList: true, subtree: true, characterData: true })
    }
  }

  function getCheckoutData() {
    return window.exposedData
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
        if (isIntersecting) {
          config.timer = setTimeout(() => {
            if (isElementInViewport(target)) {
              cb()
              observer.disconnect()
            }
          }, 1000)
        } else {
          clearTimeout(config.timer)
        }
      },
      config
    )
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
  function getSvg(name, color) {
    const svgObj = {
      progressCheck: /* html */ `
        <svg class='lav-progress__check' width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.99999 8.33301L6.33332 11.6663L13 4.99967" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      `,
      emptyCheckbox: /* html */ `
        <svg class='lav-empty-checkbox' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <g clip-path="url(#clip0_4204_6719)">
            <path d="M14.5 8C14.5 6.27609 13.8152 4.62279 12.5962 3.40381C11.3772 2.18482 9.72391 1.5 8 1.5C6.27609 1.5 4.62279 2.18482 3.40381 3.40381C2.18482 4.62279 1.5 6.27609 1.5 8C1.5 9.72391 2.18482 11.3772 3.40381 12.5962C4.62279 13.8152 6.27609 14.5 8 14.5C9.72391 14.5 11.3772 13.8152 12.5962 12.5962C13.8152 11.3772 14.5 9.72391 14.5 8ZM0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8Z" fill="hsl(var(--muted-foreground))"/>
          </g>
          <defs>
            <clipPath id="clip0_4204_6719">
              <rect width="16" height="16" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      `,
      fillCheckbox: /* html */ `
        <svg class='lav-fill-checkbox' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <g clip-path="url(#clip0_4204_6711)">
            <path d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM11.5312 6.53125L7.53125 10.5312C7.2375 10.825 6.7625 10.825 6.47188 10.5312L4.47188 8.53125C4.17813 8.2375 4.17813 7.7625 4.47188 7.47188C4.76562 7.18125 5.24062 7.17813 5.53125 7.47188L7 8.94063L10.4688 5.46875C10.7625 5.175 11.2375 5.175 11.5281 5.46875C11.8187 5.7625 11.8219 6.2375 11.5281 6.52812L11.5312 6.53125Z" fill="#FAFAFA"/>
          </g>
          <defs>
            <clipPath id="clip0_4204_6711">
              <rect width="16" height="16" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      `,
      fillCheckboxBlue: /* html */ `
        <svg class='lav-fill-checkbox' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <g clip-path="url(#clip0_4200_5222)">
            <rect width="16" height="16" rx="8" fill="white"/>
            <path d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM11.5312 6.53125L7.53125 10.5312C7.2375 10.825 6.7625 10.825 6.47188 10.5312L4.47188 8.53125C4.17813 8.2375 4.17813 7.7625 4.47188 7.47188C4.76562 7.18125 5.24062 7.17813 5.53125 7.47188L7 8.94063L10.4688 5.46875C10.7625 5.175 11.2375 5.175 11.5281 5.46875C11.8187 5.7625 11.8219 6.2375 11.5281 6.52812L11.5312 6.53125Z" fill="#2E6BFF"/>
          </g>
          <defs>
            <clipPath id="clip0_4200_5222">
              <rect width="16" height="16" rx="8" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      `,
      iconShield: /* html */ `
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_4239_3590)">
          <path d="M8.99975 2.41148C9.11824 2.41148 9.22826 2.43721 9.32983 2.48868L14.1287 4.54751C14.4164 4.66761 14.6449 4.85633 14.8142 5.11368C15.0004 5.37104 15.0935 5.67128 15.0935 6.01442C15.1104 6.88942 14.9665 7.91883 14.6619 9.10265C14.3572 10.2865 13.807 11.436 13.0115 12.5512C12.2328 13.6835 11.1156 14.6186 9.65991 15.3563C9.2198 15.5622 8.7797 15.5622 8.33959 15.3563C6.88386 14.6186 5.76668 13.6835 4.98803 12.5512C4.19246 11.436 3.64233 10.2865 3.33764 9.10265C3.03295 7.91883 2.88907 6.88942 2.906 6.01442C2.906 5.67128 2.9991 5.37104 3.1853 5.11368C3.35457 4.85633 3.58308 4.66761 3.87084 4.54751L8.66967 2.48868C8.77123 2.43721 8.88126 2.41148 8.99975 2.41148ZM8.99975 4.13574V13.8637C10.1508 13.2632 11.0564 12.4997 11.7165 11.5732C12.3598 10.6468 12.8168 9.69457 13.0876 8.71662C13.3415 7.72153 13.4685 6.82937 13.4685 6.04015L8.99975 4.13574Z" fill="#66A1FF"/>
          </g>
          <defs>
          <clipPath id="clip0_4239_3590">
          <rect width="13" height="14" fill="white" transform="matrix(1 0 0 -1 2.5 16)"/>
          </clipPath>
          </defs>
        </svg>
      `,
      iconHeadphone: /* html */ `
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_4239_3601)">
          <path d="M9 2.75C10.4918 2.75 11.9226 3.34263 12.9775 4.39752C14.0324 5.45242 14.625 6.88316 14.625 8.375V12.125C14.6252 12.5299 14.4943 12.9241 14.2518 13.2484C14.0094 13.5728 13.6684 13.8099 13.28 13.9244C12.8562 15.1125 11.0687 15.875 9 15.875C8.83424 15.875 8.67527 15.8092 8.55806 15.6919C8.44085 15.5747 8.375 15.4158 8.375 15.25C8.375 15.0842 8.44085 14.9253 8.55806 14.8081C8.67527 14.6908 8.83424 14.625 9 14.625C10.1806 14.625 11.1762 14.3237 11.7087 13.9531C11.2944 13.8588 10.9244 13.6265 10.6594 13.2944C10.3944 12.9622 10.25 12.5499 10.25 12.125L10.2506 10.2181L10.2531 10.1862C10.2689 9.70038 10.473 9.23969 10.8224 8.90165C11.1717 8.56362 11.6389 8.37474 12.125 8.375H12.75C12.9694 8.375 13.18 8.4125 13.375 8.48187V8.375C13.3756 7.2273 12.9251 6.12534 12.1207 5.30667C11.3164 4.488 10.2225 4.01819 9.07501 3.99851C7.92748 3.97883 6.81817 4.41086 5.98621 5.20148C5.15426 5.99209 4.66629 7.07796 4.6275 8.225L4.625 8.48125C4.82062 8.4125 5.03125 8.375 5.25 8.375H5.875C6.37228 8.375 6.84919 8.57254 7.20083 8.92417C7.55246 9.27581 7.75 9.75272 7.75 10.25V12.125C7.75 12.6223 7.55246 13.0992 7.20083 13.4508C6.84919 13.8025 6.37228 14 5.875 14H5.25C4.75272 14 4.27581 13.8025 3.92417 13.4508C3.57254 13.0992 3.375 12.6223 3.375 12.125V8.375C3.375 6.88316 3.96763 5.45242 5.02252 4.39752C6.07742 3.34263 7.50816 2.75 9 2.75Z" fill="#66A1FF"/>
          </g>
          <defs>
          <clipPath id="clip0_4239_3601">
          <rect width="15" height="15" fill="white" transform="translate(1.5 1.5)"/>
          </clipPath>
          </defs>
        </svg>
      `,
      iconBlink: /* html */ `
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.0245 3.469C12.1696 3.067 12.089 2.72618 11.7825 2.44652C11.4438 2.21931 11.1212 2.23679 10.8147 2.49896L4.62051 8.37162C4.36242 8.63379 4.28983 8.93966 4.40274 9.28922C4.54792 9.63878 4.78988 9.8223 5.12862 9.83978H7.83857L5.97548 14.5327C5.8303 14.9347 5.91096 15.2755 6.21744 15.5551C6.55618 15.7824 6.8788 15.7649 7.18528 15.5027L13.3794 9.63004C13.6375 9.36787 13.7101 9.06201 13.5972 8.71244C13.4682 8.36288 13.2262 8.17936 12.8713 8.16188H10.1856L12.0245 3.469Z" fill="#66A1FF"/>
        </svg>
      `,
      iconCheck: /* html */ `
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_4239_3607)">
          <path d="M9 16.5C10.9891 16.5 12.8968 15.7098 14.3033 14.3033C15.7098 12.8968 16.5 10.9891 16.5 9C16.5 7.01088 15.7098 5.10322 14.3033 3.6967C12.8968 2.29018 10.9891 1.5 9 1.5C7.01088 1.5 5.10322 2.29018 3.6967 3.6967C2.29018 5.10322 1.5 7.01088 1.5 9C1.5 10.9891 2.29018 12.8968 3.6967 14.3033C5.10322 15.7098 7.01088 16.5 9 16.5ZM12.3105 7.62305L8.56055 11.373C8.28516 11.6484 7.83984 11.6484 7.56738 11.373L5.69238 9.49805C5.41699 9.22266 5.41699 8.77734 5.69238 8.50488C5.96777 8.23242 6.41309 8.22949 6.68555 8.50488L8.0625 9.88184L11.3145 6.62695C11.5898 6.35156 12.0352 6.35156 12.3076 6.62695C12.5801 6.90234 12.583 7.34766 12.3076 7.62012L12.3105 7.62305Z" fill="#66A1FF"/>
          </g>
          <defs>
          <clipPath id="clip0_4239_3607">
          <rect x="3" y="3" width="12" height="12" rx="6" fill="white"/>
          </clipPath>
          </defs>
        </svg>
      `,
      chevronDown: /* html */ `
        <svg class='lav-collapse__chevron' width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.82812 5.00391L0.328125 1.50391C0.0820312 1.25781 0 0.875 0.136719 0.546875C0.273438 0.21875 0.601562 0 0.957031 0H7.95703C8.3125 0 8.61328 0.21875 8.75 0.546875C8.88672 0.875 8.80469 1.25781 8.55859 1.50391L5.05859 5.00391C4.73047 5.35938 4.15625 5.35938 3.82812 5.00391Z" fill="currentColor" fill-opacity="0.9"/>
        </svg>

      `,
    }

    return svgObj[name]
  }
})()
