(function () {
  if (document.querySelector('.exp-checkout-styles')) return

  // Config for Experiment
  const config = {
    // dir: 'http://127.0.0.1:5500/gameboost/checkoutImprove',
    dir: 'https://flopsi69.github.io/crs/gameboost/checkout',
    clarity: ['set', 'exp_checkout', 'variant_1'],
    debug: false
  }

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
    .lav-original-payment {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
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
      border: none;
      margin-top: 6px;
      margin-bottom: -14px;
    }
    .lav-original-discount .text-foreground\\/80 {
      display: none;
    }
    .lav-original-discount span.text-muted-foreground {
      text-decoration: underline;
      cursor: pointer;
    }
    .lav-original-discount button.py-3\\.5 {
      justify-content: center;
    }
    .lav-summary__caption {
      color: hsl(var(--muted-foreground));
      font-size: 12px;
      font-weight: 400;
      line-height: 15.95px;
      margin-top: -3px;
    }
    .lav-summary__title {
      color: hsl(var(--foreground));
      font-size: 13px;
      font-weight: 400;
      line-height: 1.5;
    }
    .lav-summary__title .fa-circle-question {
      display: none;
    }
    .lav-original-coins > *:not(.lav-earn) {
      display: none;
    }
    .lav-earn {
      color: #2FD07F;
      font-size: 12px;
      font-weight: 500;
    }
    .lav-earn img {
      position: relative;
      top: -1px;
      display: inline;
    }
    @media(max-width: 1024px) {
      .lav-warranty {
        grid-template-columns: 1fr;
        gap: 16px;
        margin-top: -4px;
      }
      .lav-original-warranty-wrapper .border-b.border-border {
        border: none;
      }
    }
  `

  const stylesEl = document.createElement('style')
  stylesEl.classList.add('exp-checkout-styles')
  stylesEl.innerHTML = styles

  // *** Logic *** //
  initExp()

  async function initExp() {
    const isAccount = exposedData?.order_type === 'Account'
    const isItem = exposedData?.order_type === 'Item'
    // if (!isAccount && !isItem) return
    await waitFor(() => document.head && document.body && _$('#app>div'), false, { ms: 20 })
    if (location.pathname.includes('/checkout/') === false || document.querySelectorAll('.lav-protected--desktop').length>0) return

    _$('#app>div').appendChild(stylesEl)

    console.debug('** InitExp **')
    handleHeader();
    if (isAccount) {
      handleWarranty();
      handleMobileWarranty();
    }
    handlePayments();
    handleSummary(isAccount);
    handleMobileSummary(isAccount);
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
    const warrantyBlockEl = _$('section h2.sr-only + .flex.gap-4');

    if (!warrantyBlockEl) return

    warrantyBlockEl.classList.add('lav-original-warranty-wrapper');

    const warrantyTogglerWrapEl = _$('.mt-3 .gap-1.flex', warrantyBlockEl);

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
          ${warrantyToggler.dataset.state === 'checked' ? '+€14,40 one time' : procent}
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

  function handleMobileWarranty() {
    const warrantyBlockEl = _$('.lg\\:hidden .px-5.pt-5.pb-4');

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
          ${warrantyToggler.dataset.state === 'checked' ? '+€14,40 one time' : procent}
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

  async function handlePayments() {
    await waitFor(() => _$('section h2.sr-only + .flex.gap-4 + .flex.gap-4 + .flex.gap-4'), false, { ms: 20 })
    const paymentBlockEl = _$('section h2.sr-only + .flex.gap-4 + .flex.gap-4 + .flex.gap-4');
    
    if (!paymentBlockEl) return

    paymentBlockEl.classList.add('lav-original-payment-wrapper');

    _$('.mt-3>div>.flex.flex-col.gap-2', paymentBlockEl).classList.add('lav-original-payment');
  }

  function handleSummary(isAccount) {
    const summaryBlockEl = _$('.w-\\[380px\\].shrink-0.sticky.top-20')
    // Discount
    const discountBlockEl = _$('h2.text-base+.border-border', summaryBlockEl);

    if (discountBlockEl) {
      discountBlockEl.classList.add('lav-original-discount');
      _$('.p-6.bg-card', summaryBlockEl).insertAdjacentElement('beforeend', discountBlockEl)
    }

    // Benefits
    const benefitsMarkup = /* html */ `
      <div class='lav-benefits'>
        <div class='lav-benefits__item'>${ getSvg('iconShield') } Money-back guarantee</div>
        <div class='lav-benefits__item'>${ getSvg('iconHeadphone') } 24/7 human support</div>
        ${ exposedData?.is_instant_delivery ? `<div class='lav-benefits__item'>${ getSvg('iconBlink') } Instant delivery</div>` : '' }
        ${ isAccount ? `<div class='lav-benefits__item'>${ getSvg('iconCheck') } 14-day warranty included</div>` : '' }
      </div>
    `;

    _$('[type="button"].mt-4:nth-of-type(2)', summaryBlockEl).insertAdjacentHTML('afterend', benefitsMarkup)

    // Pay btn
    const payBtn = _$('[type="button"].mt-4:nth-of-type(2)', summaryBlockEl)
    const replaceText = exposedData?.is_instant_delivery ? 'Pay securely · Instant delivery' : 'Pay securely'
    payBtn.innerHTML = payBtn.innerHTML.replace('Pay Now', replaceText)

    // Handle descriptions
    const descriptionRows = _$$('h2.font-display + div dl:first-child > .flex', summaryBlockEl);
    descriptionRows.forEach((row) => {
      const titleEl = _$('.text-muted-foreground', row);
      titleEl.classList.add('lav-summary__title');
      const titleText = titleEl.innerText.trim().toLowerCase();

      if (titleText === 'subtotal') {
        const productName = isAccount ? _$('h3.line-clamp-2 + span.text-xs').innerText : _$('h3.line-clamp-2').innerText
        titleEl.innerText = productName
      }

      if (titleText === 'marketplace fee') {
        titleEl.innerText = 'Buyer protection'
        if (isAccount) {
          row.insertAdjacentHTML('afterend', /* html */ `
            <div class='lav-summary__caption'>Escrow${exposedData?.is_instant_delivery ? ', instant delivery' : ''}${isAccount ? ', 14-day warranty' : ''}</div>
          `)
        } else {
          row.insertAdjacentHTML('afterend', /* html */ `
            <div class='lav-summary__caption'>Secure escrow · Guaranteed delivery or full refund</div>
          `)
        }
      }

      if (titleText === 'processor fee') {
        row.insertAdjacentHTML('afterend', /* html */ `
          <div class='lav-summary__caption'>Charged by payment processor for enabling payment</div>
        `)
      }
    });

    // Handle coins
    const coinsBlockEl = _$('dl+.pt-5 .mt-1.text-muted-foreground', summaryBlockEl);

    if (coinsBlockEl) {
      coinsBlockEl.classList.add('lav-original-coins');
      const coinsAmount = _$('.flex>.font-medium', coinsBlockEl);
      const priceAmount = _$('.flex.items-center', coinsBlockEl)._tippy?.props?.content.replace('≈', '≈ ').trim();
      const newText = /* html */ `
        <span class="lav-earn">Earn ${coinsAmount.innerText.replace('+', '')} <img src="https://cdn.gameboost.com/static/coins/coin-sm.webp" alt="Coins" class="ml-0.5 mr-0.5 w-3"> GB Coins ${priceAmount} off next order</span>`
      coinsBlockEl.insertAdjacentHTML('afterbegin', newText)
    }

    // Handle show bonuses
    const bonusesBlockEl = _$('dl.border-border.py-3\\.5', summaryBlockEl);

    if (bonusesBlockEl) {
      const hasBonuses = _$$('dl.border-border.py-3\\.5 > .flex', bonusesBlockEl, true).some((row) => {
        const amount = _$('dd.text-xs', row).innerText.trim()
        return amount !== '0' && amount !== '€0,00' && amount !== '$0,00'
      })

      if (!hasBonuses) {
        bonusesBlockEl.style.display = 'none'
      }
    }
  }

  function handleMobileSummary(isAccount) {
    const summaryBlockEl = _$('.lg\\:hidden .px-5.pb-4:not(.pt-5)')

    visibilityEvent(summaryBlockEl, () => {
      pushDataLayer('exp_checkout_summary_view', 'Order Summary', 'view', 'Checkout');
    })

    // Handle descriptions
    const descriptionRows = _$$('dl.py-4.gap-2 > .flex', summaryBlockEl);
    descriptionRows.forEach((row) => {
      const titleEl = _$('.text-muted-foreground', row);
      titleEl.classList.add('lav-summary__title');
      const titleText = titleEl.innerText.trim().toLowerCase();

      if (titleText === 'subtotal') {
        const productName = isAccount ? _$('h3.line-clamp-2 + span.text-xs').innerText : _$('h3.line-clamp-2').innerText
        titleEl.innerText = productName
      }

      if (titleText === 'marketplace fee') {
        titleEl.innerText = 'Buyer protection'
        if (isAccount) {
          row.insertAdjacentHTML('afterend', /* html */ `
            <div class='lav-summary__caption'>Escrow${exposedData?.is_instant_delivery ? ', instant delivery' : ''}${isAccount ? ', 14-day warranty' : ''}</div>
          `)
        } else {
          row.insertAdjacentHTML('afterend', /* html */ `
            <div class='lav-summary__caption'>Secure escrow · Guaranteed delivery or full refund</div>
          `)
        }
      }

      if (titleText === 'processor fee') {
        row.insertAdjacentHTML('afterend', /* html */ `
          <div class='lav-summary__caption'>Charged by payment processor for enabling payment</div>
        `)
      }
    });

    // Handle coins
    const coinsBlockEl = _$('dl+.pt-5 .mt-1.text-muted-foreground', summaryBlockEl);

    if (coinsBlockEl) {
      coinsBlockEl.classList.add('lav-original-coins');
      const coinsAmount = _$('.flex>.font-medium', coinsBlockEl);
      const priceAmount = _$('.flex.items-center', coinsBlockEl)._tippy?.props?.content.replace('≈', '≈ ').trim();
      const newText = /* html */ `
        <span class="lav-earn">Earn ${coinsAmount.innerText.replace('+', '')} <img src="https://cdn.gameboost.com/static/coins/coin-sm.webp" alt="Coins" class="ml-0.5 mr-0.5 w-3"> GB Coins ${priceAmount} off next order</span>`
      coinsBlockEl.insertAdjacentHTML('afterbegin', newText)
    }

    // Handle show bonuses
    const bonusesBlockEl = _$('dl.border-border.py-3\\.5', summaryBlockEl);

    if (bonusesBlockEl) {
      const hasBonuses = _$$('dl.border-border.py-3\\.5 > .flex', bonusesBlockEl, true).some((row) => {
        const amount = _$('dd.text-xs', row).innerText.trim()
        return amount !== '0' && amount !== '€0,00' && amount !== '$0,00'
      })

      if (!hasBonuses) {
        bonusesBlockEl.style.display = 'none'
      }
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
      orangeShield: /* html */ `
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
          <path d="M5.49991 0.352869C5.60017 0.352869 5.69327 0.374928 5.77921 0.419045L9.83975 2.18375C10.0832 2.28669 10.2766 2.44846 10.4198 2.66905C10.5774 2.88963 10.6562 3.14699 10.6562 3.4411C10.6705 4.1911 10.5487 5.07346 10.2909 6.08816C10.0331 7.10287 9.56762 8.08816 8.89444 9.04405C8.23559 10.0146 7.29027 10.8161 6.0585 11.4485C5.68611 11.6249 5.31371 11.6249 4.94132 11.4485C3.70955 10.8161 2.76423 10.0146 2.10538 9.04405C1.4322 8.08816 0.966707 7.10287 0.708894 6.08816C0.451082 5.07346 0.329337 4.1911 0.34366 3.4411C0.34366 3.14699 0.422436 2.88963 0.579988 2.66905C0.723217 2.44846 0.916577 2.28669 1.16007 2.18375L5.22061 0.419045C5.30655 0.374928 5.39965 0.352869 5.49991 0.352869ZM5.49991 1.83081V10.169C6.47387 9.65434 7.24014 8.99993 7.79874 8.20581C8.34301 7.41169 8.72973 6.59552 8.95889 5.75728C9.17374 4.90434 9.28116 4.13963 9.28116 3.46316L5.49991 1.83081Z" fill="currentColor"/>
        </svg>
      `,
      benefitInstant: /* html */ `
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.3305 3.69004C15.5383 3.15883 15.4229 2.70846 14.984 2.33892C14.499 2.03867 14.0371 2.06176 13.5983 2.40821L4.72935 10.1685C4.35982 10.5149 4.25588 10.9191 4.41756 11.3811C4.62542 11.843 4.97186 12.0855 5.45688 12.1086H9.33703L6.66943 18.3099C6.46156 18.8411 6.57705 19.2915 7.01587 19.661C7.50089 19.9613 7.96281 19.9382 8.40164 19.5917L17.2706 11.8314C17.6401 11.485 17.744 11.0808 17.5824 10.6189C17.3976 10.157 17.0511 9.91445 16.543 9.89135H12.6975L15.3305 3.69004Z" fill="currentColor"/>
        </svg>
      `,
      benefitWarranty: /* html */ `
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.9999 2.52943C11.1458 2.52943 11.2812 2.56252 11.4062 2.62869L17.3124 5.27575C17.6666 5.43016 17.9479 5.67281 18.1562 6.00369C18.3854 6.33457 18.4999 6.7206 18.4999 7.16178C18.5208 8.28678 18.3437 9.61031 17.9687 11.1324C17.5937 12.6544 16.9166 14.1324 15.9374 15.5662C14.9791 17.0221 13.6041 18.2243 11.8124 19.1728C11.2708 19.4375 10.7291 19.4375 10.1874 19.1728C8.39577 18.2243 7.02077 17.0221 6.06244 15.5662C5.08327 14.1324 4.40619 12.6544 4.03119 11.1324C3.65619 9.61031 3.4791 8.28678 3.49994 7.16178C3.49994 6.7206 3.61452 6.33457 3.84369 6.00369C4.05202 5.67281 4.33327 5.43016 4.68744 5.27575L10.5937 2.62869C10.7187 2.56252 10.8541 2.52943 10.9999 2.52943ZM10.9999 4.74634V17.2537C12.4166 16.4816 13.5312 15.5 14.3437 14.3088C15.1354 13.1177 15.6979 11.8934 16.0312 10.636C16.3437 9.35663 16.4999 8.20957 16.4999 7.19487L10.9999 4.74634Z" fill="currentColor"/>
        </svg>
      `,
    }

    return svgObj[name]
  }
})()
