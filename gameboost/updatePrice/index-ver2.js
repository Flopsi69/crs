(function () {
  // Guards against this script running more than once. On this SPA
  // (Inertia.js), client-side navigation doesn't reload the page - but if
  // GTM re-fires the custom HTML tag on a virtual pageview (eg. a History
  // Change trigger) instead of a real reload, this same IIFE gets
  // re-injected as a brand new instance while the DOM it already patched
  // survives. A second instance wouldn't know that (its own in-memory
  // state starts empty), and the observer below already reacts to new
  // price elements appearing on navigation on its own - so a second
  // instance is never needed and would only duplicate observers/listeners
  // and risk re-processing already-updated prices. Matches the same
  // window.__lav*-guard pattern used in checkoutLogin/index.js for the
  // same reason.
  if (window.__lavUpdatePriceExpInit) return
  window.__lavUpdatePriceExpInit = true

  console.debug('*** Experiment started ***')

  // Config for Experiment
  const config = {
    // dir: 'http://127.0.0.1:5500/gameboost/updatePrice',
    dir: 'https://flopsi69.github.io/crs/gameboost/updatePrice',
    clarity: ['set', 'exp_account_total_pricing', 'variant_1'],
    isClarityStarted: false,
    debug: false
  }

  // const orig = console.log
  // console.log = function (...args) {
  //   orig.apply(console, ['Debug:', ...args])
  // }

  // Styles for Experiment
  // const styles = /* css */ ``

  // const stylesEl = document.createElement('style')
  // stylesEl.classList.add('exp-update-price-v1-styles');
  // stylesEl.innerHTML = styles;

  // *** Logic *** //
  // Applies to any "Accounts" product card (PLP grid, hub "Recently Viewed"/
  // "Recommended" widgets, PDP related-products widgets) and to the main PDP
  // price. Cards are identified by their link pointing to an /accounts/ PDP,
  // not by page URL, since account cards can appear on many page types
  // (eg. game hub pages like /league-of-legends).
  let observer = null

  // document.addEventListener('inertia:navigate', () => {
  //   console.log('navigate')
  //   initExp()
  // })

  initExp()

  async function initExp() {
    startClarity()
    await waitFor(() => document.head && document.body, false, { ms: 20 })

    // if (!_$('.exp-update-price-v1-styles')) {
    //   document.head.appendChild(stylesEl)
    // }

    console.debug('** InitExp **')

    updateAllPrices()
    startObserver()
  }

  // Watches both new cards being added (childList - eg. autoload, filters,
  // Inertia swapping in a new widget) and existing price text being patched
  // in place (characterData - eg. the framework reactively re-rendering a
  // price on a currency switch without replacing the DOM node). A plain
  // childList-only observer would miss that second case since the node
  // never gets added/removed, only its text content changes.
  function startObserver() {
    if (observer) observer.disconnect()

    // Patched synchronously (observer callbacks run as a microtask, before
    // the browser paints), not deferred to the next animation frame: the
    // site animates totals when the quantity changes (a count-up written on
    // every frame), and a deferred patch would let each raw intermediate
    // value be painted for a frame before being replaced, which looks like
    // lag/flicker. Our own writes re-trigger this callback but are no-ops.
    observer = new MutationObserver((mutations) => {
      if (mutations.some(isRelevantMutation)) updateAllPrices()
    })
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true
    })
  }

  // The page has plenty of unrelated churn (chat widget, notifications,
  // timers, tooltips), so a rescan is only worth triggering when a mutation
  // actually touches something price-related - otherwise every unrelated
  // text change on the page schedules a full-page rescan.
  const PDP_PRICE_WRAP_SELECTOR = '.flex.flex-wrap.gap-y-1.gap-x-1\\.5.items-baseline.mt-6'
  // The mobile "Buy Account · $X" bar fixed to the bottom of the viewport
  // (CSS-hidden at the lg breakpoint, not removed from the DOM). Its own
  // "bottom-*" class toggles as it slides in/out on scroll, so that class
  // is deliberately left out of the selector to keep it matching either way.
  const STICKY_BUY_BAR_SELECTOR = '.fixed.left-0.z-20.lg\\:hidden.bg-card'
  // The mobile-only "Discounted Price" card shown above the fold (a
  // separate widget from both the desktop sidebar price block and the
  // sticky bottom bar - sm:hidden on its own ancestor, not this element).
  const MOBILE_DISCOUNT_CARD_SELECTOR = '.flex.items-baseline.w-full.h-full.px-4.py-3.rounded-b-lg.gap-x-2'
  const PRICE_TEXT_RE = /[€$]\s?\d/
  function isPageLevelPriceCategory() {
    return ['giftCards', 'gameKeys'].includes(getPageCategory())
  }
  // The changed text only: the new text of a characterData change, or what
  // was just added (Vue swaps a price's Text node wholesale) - not the whole
  // target, which can be the entire page.
  function getMutationText(mutation) {
    if (mutation.type === 'characterData') return mutation.target.textContent
    return Array.from(mutation.addedNodes, (node) => node.textContent).join(' ')
  }
  function isRelevantMutation(mutation) {
    // mutation.target is the node whose children changed (childList) or the
    // text node itself (characterData). For a currency switch this site
    // swaps the price span's Text node wholesale (remove + add a new Text
    // node) rather than patching Text.data in place - a childList mutation
    // whose target is the price <span> itself. Checking target first covers
    // that directly, since closest() matches the element itself too.
    const targetEl = mutation.type === 'characterData' ? mutation.target.parentElement : mutation.target
    // On checkout the summary rows and product price re-render on payment
    // method / discount changes, and the product row sits in an unrelated
    // subtree - so any change inside the app is worth a (cheap) rescan.
    if (isSupportedCheckout() && targetEl instanceof Element && targetEl.closest('#app')) return true

    // Gift card / game key pages keep prices in plain markup that isn't in
    // any of the roots below (eg. the main price block), so there a change
    // of price text anywhere in the page content is what counts.
    if (targetEl instanceof Element && isPageLevelPriceCategory() && targetEl.closest('main, #app') && PRICE_TEXT_RE.test(getMutationText(mutation))) return true

    if (targetEl instanceof Element && (targetEl.closest(CATEGORY_ROOT_SELECTOR) || targetEl.closest('a[href*="/accounts/"]') || targetEl.closest(PDP_PRICE_WRAP_SELECTOR) || targetEl.closest(STICKY_BUY_BAR_SELECTOR) || targetEl.closest(MOBILE_DISCOUNT_CARD_SELECTOR))) {
      return true
    }

    // Covers a whole new card (or PDP price block) being inserted somewhere
    // else on the page (eg. autoload, filters) where the mutation target
    // itself isn't price-related but one of the added nodes is or contains
    // one - target alone wouldn't catch that, only the added node would.
    // Also covers a Tippy.js tooltip mounting: the price also shows in a
    // tooltip on hover, and Tippy unmounts the popper on hide and mounts a
    // fresh one (as a direct child of <body>) on every show, with its
    // content already populated synchronously by the time it's inserted -
    // so this single check is enough to catch it every time it's shown,
    // with no separate hover listener needed.
    if (mutation.type === 'childList') {
      for (const node of mutation.addedNodes) {
        if (!(node instanceof HTMLElement)) continue
        if (node.matches('a[href*="/accounts/"]') || node.querySelector('a[href*="/accounts/"]')) return true
        if (node.matches(CATEGORY_ROOT_SELECTOR) || node.querySelector(CATEGORY_ROOT_SELECTOR)) return true
        if (node.matches(PDP_PRICE_WRAP_SELECTOR) || node.querySelector(PDP_PRICE_WRAP_SELECTOR)) return true
        if (node.matches('[data-tippy-root]') || node.querySelector('[data-tippy-root]')) return true
        if (node.matches(STICKY_BUY_BAR_SELECTOR) || node.querySelector(STICKY_BUY_BAR_SELECTOR)) return true
        if (node.matches(MOBILE_DISCOUNT_CARD_SELECTOR) || node.querySelector(MOBILE_DISCOUNT_CARD_SELECTOR)) return true
      }
    }
    return false
  }

  // *** Checkout (accounts) *** //
  // The listing/PDP prices above already include the fees (see FEE_RULES),
  // so on checkout the fee rows are hidden and the product price in the
  // "Review & Confirm" block shows the Total instead, keeping it equal to
  // what the user saw on the PLP/PDP.
  // The amount is read straight from the rendered Total, so it follows the
  // payment method (fee) - and also discounts/store credit/coins if applied.
  const HIDDEN_ATTR = 'data-lav-hidden'
  const CHECKOUT_AMOUNT_RE = /^[+-]?\s*[€$]\s*[\d.,]+$/

  const checkoutStyles = document.createElement('style')
  checkoutStyles.classList.add('exp-update-price-v1-styles')
  checkoutStyles.innerHTML = `
    dl.flex.flex-col.gap-2.py-4.border-b.border-border {
      padding: 7px 0 0 0;
      border: 0;
    }
    [${HIDDEN_ATTR}] { display: none !important; }
  `

  // Accounts, Items, Currency/Top-ups, Gift Cards and Game Keys all share the
  // same checkout summary markup (dl rows + product title), and the Total is read
  // from the page, so one code path covers them. Other order types (eg.
  // boosting) stay untouched. Currency and top-ups both live under
  // /checkout/currencies/.
  // The first step lives at /checkout/<category>/<offer id>, but the next
  // steps (payment, delivery) move to /checkout/<order uuid>, where the URL
  // says nothing about the category - so the order type from the page data
  // is the reliable signal there.
  const CHECKOUT_PATH_RE = /^\/checkout\/(accounts|items|currencies|gift-cards|game-keys)\//
  const SUPPORTED_ORDER_TYPES = ['account_order', 'item_order', 'currency_order', 'gift_card_order', 'game_key_order']
  function getOrderType() {
    try {
      return _$('#app').__vue_app__.config.globalProperties.$page.props.order?.type
    } catch (e) {
      return undefined
    }
  }
  function isSupportedCheckout() {
    if (!location.pathname.includes('/checkout/')) return false

    return window.exposedData?.order_type === 'Account' || CHECKOUT_PATH_RE.test(location.pathname) || SUPPORTED_ORDER_TYPES.includes(getOrderType())
  }

  function updateCheckoutPrices() {
    if (!_$('.exp-update-price-v1-styles')) document.head.appendChild(checkoutStyles)

    // Desktop sidebar and mobile summary both render the same "dl > row"
    // structure, so a single pass covers both. The subtotal is only read to
    // recognise the product price element - the new price is the Total.
    let subtotalText = ''

    _$$('dl > .flex', document, true).forEach((row) => {
      const label = (_$('.text-muted-foreground', row) || row.firstElementChild)?.textContent.trim().toLowerCase()
      if (!label) return

      if (label === 'subtotal') {
        subtotalText = row.lastElementChild?.textContent.trim() || ''
        row.setAttribute(HIDDEN_ATTR, '')
      } else if (/\bfee\b/.test(label)) {
        row.setAttribute(HIDDEN_ATTR, '')
      }
    })

    const totalText = getCheckoutTotalText()
    if (!subtotalText || !totalText) return

    const subtotal = parsePrice(subtotalText)
    if (isNaN(subtotal)) return

    _$$('h3.line-clamp-2', document, true).forEach((titleEl) => {
      const priceEl = findCheckoutProductPriceEl(titleEl, subtotal)
      if (!priceEl || priceEl.textContent.trim() === totalText) return

      priceEl.dataset.lavOriginal = subtotalText
      priceEl.dataset.lavCheckout = ''
      priceEl.textContent = totalText
    })
  }

  // The Total isn't a "dl" row: it's a "Total" label with the big amount next
  // to it, so find the label by its text and take the first amount nearby.
  function getCheckoutTotalText() {
    const labelEl = _$$('*', document, true).find((el) => {
      return el.children.length === 0 && el.textContent.trim().toLowerCase() === 'total'
    })

    let scope = labelEl?.parentElement
    for (let i = 0; i < 3 && scope && scope !== document.body; i++, scope = scope.parentElement) {
      const amountEl = _$$('*', scope, true).find((el) => {
        return el.children.length === 0 && CHECKOUT_AMOUNT_RE.test(el.textContent.trim())
      })
      if (amountEl) return amountEl.textContent.trim()
    }

    return ''
  }

  // The product price sits a few levels above the title, in the same row.
  // A price is ours to patch if it still shows the original subtotal, or if
  // it's one we already rewrote earlier (marked with data-lav-checkout) and
  // the total has changed since (eg. another payment method was picked).
  function findCheckoutProductPriceEl(titleEl, subtotal) {
    let scope = titleEl.parentElement

    for (let i = 0; i < 4 && scope && scope !== document.body; i++, scope = scope.parentElement) {
      const leaves = _$$('*', scope, true).filter((el) => {
        return el.children.length === 0 && !el.closest('dl') && CHECKOUT_AMOUNT_RE.test(el.textContent.trim())
      })

      const priceEl = leaves.find((el) => {
        return 'lavCheckout' in el.dataset || parsePrice(el.textContent.trim()) === subtotal
      })
      if (priceEl) return priceEl
    }

    return null
  }

  function updateAllPrices() {
    refreshExchangeRate()
    if (location.pathname.includes('/checkout/')) {
      if (isSupportedCheckout()) updateCheckoutPrices()
      return
    }

    updateCategoryPrices()
    _$$('a[href*="/accounts/"]', document, true).forEach(updateCardPrice)
    updatePdpPrice()
    updateStickyBuyButtonPrice()
    updateMobileDiscountCardPrice()
  }

  // Some products show a struck-through "was" price alongside the current
  // one (the seller's own discount). Both need the formula applied, not
  // just the current price, so the markup and the checkout total agree.
  function updateCardPrice(cardEl) {
    const wrap = _$('.flex.gap-x-1.items-baseline.truncate', cardEl)
    const priceEl = wrap?.firstElementChild
    if (priceEl) applyPriceFormula(priceEl)

    const oldPriceEl = _$('.absolute.left-1.-top-4', cardEl)?.firstElementChild
    if (oldPriceEl) applyPriceFormula(oldPriceEl)

    updateTooltipPrice(wrap)
  }

  function updatePdpPrice() {
    if (!/\/accounts\//.test(location.pathname)) return

    const priceWrap = _$('.flex.flex-wrap.gap-y-1.gap-x-1\\.5.items-baseline.mt-6')
    if (!priceWrap) return

    const priceEl = priceWrap.firstElementChild
    if (priceEl) applyPriceFormula(priceEl)

    const oldPriceEl = _$('.flex.gap-x-2.items-center', priceWrap)?.firstElementChild
    if (oldPriceEl) applyPriceFormula(oldPriceEl)

    updateUnitPriceBadge(priceWrap)
    updateTooltipPrice(priceWrap)
  }

  // With a quantity above 1 the PDP shows the order total, plus a small
  // "€1,00 × 12" badge with the unit price. The total gets the formula (fee
  // once per order), so the badge shows the new total split across the
  // quantity - otherwise "unit × qty" would visibly disagree with the total.
  const UNIT_BADGE_RE = /^([€$]\s*[\d.,]+)\s*×\s*(\d+)$/
  function updateUnitPriceBadge(wrapEl) {
    const badgeEl = Array.from(wrapEl.children).find((el) => UNIT_BADGE_RE.test(el.textContent.trim()))
    if (!badgeEl) return

    const current = badgeEl.textContent.trim()
    if (badgeEl.dataset.lavComputed === current) return

    const [, unitText, qtyText] = current.match(UNIT_BADGE_RE)
    const isEuro = unitText.startsWith('€')
    const qty = parseInt(qtyText, 10)
    const unit = parsePrice(unitText)
    if (isNaN(unit) || !qty) return

    const updated = `${formatPrice(applyFormula(unit * qty, isEuro) / qty, isEuro)} × ${qty}`
    badgeEl.dataset.lavOriginal = current
    badgeEl.textContent = updated
    badgeEl.dataset.lavComputed = updated
  }

  // Same current/old price layout as updatePdpPrice's wrap, just a
  // different (mobile-only) widget - not covered by that selector since
  // it's a separate DOM subtree, not a responsive variant of it.
  function updateMobileDiscountCardPrice() {
    if (!/\/accounts\//.test(location.pathname)) return

    const priceWrap = _$(MOBILE_DISCOUNT_CARD_SELECTOR)
    if (!priceWrap) return

    const priceEl = priceWrap.firstElementChild
    if (priceEl) applyPriceFormula(priceEl)

    const oldPriceEl = _$('.flex.gap-x-2.items-center', priceWrap)?.firstElementChild
    if (oldPriceEl) applyPriceFormula(oldPriceEl)
  }

  // Unlike every other price on the page, this button doesn't isolate the
  // price in its own element - it's raw text mixed in with the "Buy
  // Account" label and a "·" separator span, so it needs a text-node-level
  // patch (applyPriceFormulaToTextNode) instead of applyPriceFormula's
  // whole-element approach.
  function updateStickyBuyButtonPrice() {
    if (!/\/accounts\//.test(location.pathname)) return

    const bar = _$(STICKY_BUY_BAR_SELECTOR)
    const btn = bar && _$('button', bar)
    if (!btn) return

    btn.childNodes.forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) applyPriceFormulaToTextNode(btn, node)
    })
  }

  // Same idea as applyPriceFormula (re-derive from whatever is currently
  // rendered, skip if unchanged since our own last write) but for a bare
  // Text node, which has no dataset of its own to stash the last-computed
  // value on - the marker is kept on the owning element instead (ownerEl).
  // This has to be real DOM state (dataset), not an in-memory Map/WeakMap:
  // if this script gets re-injected on an SPA route change (eg. a GTM tag
  // re-firing on a History Change trigger, rather than a full page reload),
  // a fresh script instance means a fresh in-memory map with no memory of
  // what the previous instance already wrote - so the already-updated price
  // would look "original" again and get the markup formula re-applied on
  // top of itself, compounding a little more on every navigation.
  function applyPriceFormulaToTextNode(ownerEl, node) {
    const current = node.textContent
    if (ownerEl.dataset.lavComputed === current) return

    const leading = current.match(/^\s*/)[0]
    const trailing = current.match(/\s*$/)[0]
    const core = current.slice(leading.length, current.length - trailing.length)

    const updated = getUpdatedPriceText(core)
    if (updated === null) return

    const newText = leading + updated + trailing
    node.textContent = newText
    ownerEl.dataset.lavComputed = newText
  }

  // The price also shows in a Tippy.js tooltip on hover - a separate popup
  // with its own content node, unrelated to the visible price markup. Scoped
  // to this exact wrapper's own tippy instance (never a page-wide tooltip
  // selector), so it can never touch an unrelated tooltip (eg. a seller
  // rating or cashback one) even if its content also starts with a currency
  // symbol. No-ops harmlessly if the tooltip has never been shown yet
  // (nothing to fix) - it'll get caught by the observer once it is.
  function updateTooltipPrice(wrapEl) {
    const tooltipPriceEl = wrapEl?._tippy?.popper?.querySelector('.tippy-content > span')
    if (tooltipPriceEl) applyPriceFormula(tooltipPriceEl)
  }

  // Re-derives the price from whatever is currently rendered, so it reacts
  // correctly to currency switches or live price updates instead of just
  // running once. Skips when the text already matches our own last output.
  // The original price is kept on the element (data-lav-original) for QA -
  // it lets you inspect any card/PDP price and see exactly what X was.
  function applyPriceFormula(el) {
    const current = el.textContent.trim()
    if (el.dataset.lavComputed === current) return

    const updated = getUpdatedPriceText(current)
    if (updated === null) return

    el.dataset.lavOriginal = current
    el.textContent = updated
    el.dataset.lavComputed = updated
  }

  function getUpdatedPriceText(text) {
    const isEuro = text.startsWith('€')
    const isUsd = text.startsWith('$')
    if (!isEuro && !isUsd) return null

    const value = parsePrice(text)
    if (isNaN(value)) return null

    return formatPrice(applyFormula(value, isEuro), isEuro)
  }

  // *** Fees per category *** //
  // Rules as documented by the client (checkout-fees-overview.md). They work
  // on the listing price in EUR cents - the currency the site stores prices
  // in - so a price shown in USD is converted to EUR first, and the result
  // converted back with the site's own exchange rate.
  //   subtotal = listing + platform fee
  //   total    = subtotal + round(subtotal * processing)
  // Top-ups share the Currency rules. Boosting has no listing prices (it's
  // an order form), so it isn't wired up here.
  const ITEMS_FEE_TIERS = [
    [200, 29], [300, 35], [400, 40], [500, 45], [600, 50], [700, 55], [800, 59],
    [900, 65], [1000, 69], [1500, 74], [2000, 115], [2500, 149], [3000, 186],
    [4000, 214], [5000, 253], [6000, 291], [7000, 330], [8000, 368], [9000, 407],
    [12500, 445], [Infinity, 499]
  ] // [listing price upper bound (exclusive), platform fee], both in cents

  const FEE_RULES = {
    accounts: { platform: (cents) => Math.round(cents * 0.08) + 29, processing: 0 },
    items: { platform: (cents) => ITEMS_FEE_TIERS.find(([max]) => cents < max)[1], processing: 0.039 },
    currency: { platform: (cents) => Math.max(Math.ceil(cents * 0.04), 29), processing: 0.039 },
    giftCards: { platform: (cents) => Math.round(cents * 0.06), processing: 0.039 },
    gameKeys: { platform: () => 19, processing: 0.039 }
  }

  // USD per 1 EUR, from the page data (refreshed on every scan so a rate
  // update is picked up); the constant is only a fallback if it's missing.
  let eurToUsd = 1.1247
  function refreshExchangeRate() {
    try {
      const rate = _$('#app').__vue_app__.config.globalProperties.$page.props.exchange_rates.eur_to_usd
      if (rate > 0) eurToUsd = rate
    } catch (e) {}
  }

  // The fee is charged once per order, on whatever amount the price element
  // shows - the unit price on a single-quantity PDP, or the quantity total
  // once the quantity input is above 1 (the site then shows the total).
  function applyFormula(value, isEuro, category = 'accounts') {
    const rule = FEE_RULES[category]
    const rate = isEuro ? 1 : eurToUsd

    const cents = Math.round((value / rate) * 100)
    const subtotal = cents + rule.platform(cents)
    const total = subtotal + Math.round(subtotal * rule.processing)

    return (total / 100) * rate
  }

  // The site isn't consistent about separators: a unit price comes as
  // "€3.951,78" ("." thousands, "," decimal) and USD as "$4,560.19", but the
  // quantity total on a PDP can show "€12.00" in a EUR context. So instead of
  // trusting the currency, treat the last "." or "," as the decimal mark
  // unless it looks like a thousands group (exactly 3 digits after it, with
  // a non-zero integer part or more than one separator). That also covers
  // currency unit prices with 4-6 decimals ("$0.005691").
  function parsePriceParts(text) {
    const numStr = text.replace(/[^\d.,]/g, '')
    const match = numStr.match(/[.,](\d+)$/)
    const sepCount = (numStr.match(/[.,]/g) || []).length
    const intPart = match ? numStr.slice(0, match.index).replace(/[.,]/g, '') : numStr.replace(/[.,]/g, '')

    const isDecimal = match && (match[1].length !== 3 || (sepCount === 1 && /^0*$/.test(intPart)))
    if (!isDecimal) return { value: parseFloat(intPart + (match && !isDecimal ? match[1] : '')), decimals: 0 }

    return { value: parseFloat(`${intPart || '0'}.${match[1]}`), decimals: match[1].length }
  }

  function parsePrice(text) {
    return parsePriceParts(text).value
  }

  function formatPrice(value, isEuro, decimals = 2) {
    const factor = Math.pow(10, decimals)
    const rounded = Math.round(value * factor) / factor
    const formatted = rounded.toLocaleString(isEuro ? 'de-DE' : 'en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    })
    return (isEuro ? '€' : '$') + formatted
  }

  // *** Items, Currency / Top-ups, Gift Cards *** //
  // These categories have no shared price element like Accounts, and mix
  // prices into labels ("Buy Now · $4.74", "$10.50 – $41.96"), so instead of
  // per-widget selectors every price inside a category root is patched at
  // the text-node level. Roots are anything that can hold a price of these
  // categories; the category of a given node is resolved from its nearest
  // card link, else from the page.
  const CATEGORY_ROOT_SELECTOR = 'a[href*="/items/"], a[href*="/gift-cards/"], a[href*="offer="], a[href*="-00-"], [role="dialog"], aside, button, tr, .fixed.left-0'
  const PRICE_IN_TEXT_RE = /(?<![A-Za-z])([€$])\s?(\d[\d.,]*\d|\d)/g
  const SKIP_ATTR = 'data-lav-skip'
  // Text nodes can't carry a dataset, so the last value we wrote is kept
  // here. Safe in memory because the init guard at the top ensures a single
  // script instance per page.
  const patchedTexts = new WeakMap()

  function updateCategoryPrices() {
    const roots = _$$(CATEGORY_ROOT_SELECTOR, document, true)
    // Gift card and game key pages put prices in plain labels outside any
    // card/button (eg. "From $10.50", "Price: $45.01 USD"), so the whole
    // page body is a root.
    if (isPageLevelPriceCategory()) roots.push(_$('main') || _$('#app'))

    // The currency purchase dialog is handled as a unit (total first, then
    // the unit price derived from it), so tag its unit price to be skipped.
    _$$('[role="dialog"]', document, true).forEach(prepareCurrencyDialog)

    roots.filter(Boolean).forEach((root) => {
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT)
      let node
      while ((node = walker.nextNode())) patchTextNode(node)
    })

    _$$('[role="dialog"]', document, true).forEach(updateCurrencyDialogUnitPrice)
  }

  // Page-level category for prices that aren't inside a card link. The
  // Inertia component name is the reliable signal (currency and top-up
  // pages live under a different URL slug per game - /roblox/robux,
  // /valorant/top-up, /fortnite/v-bucks), with the URL as a fallback.
  function getPageCategory() {
    const component = getPageComponent()
    if (component.startsWith('main/currencies/')) return 'currency'
    if (component.startsWith('main/items/show')) return 'items'
    if (component.startsWith('main/games/gift-cards')) return 'giftCards'
    if (component.startsWith('main/game-keys/')) return 'gameKeys'

    const path = location.pathname
    if (/\/gift-cards(\/|$)/.test(path)) return 'giftCards'
    if (/^\/[^/]+\/items\/[^/]+/.test(path)) return 'items'
    return null
  }

  function getPageComponent() {
    try {
      return _$('#app').__vue_app__.config.globalProperties.$page.component || ''
    } catch (e) {
      return ''
    }
  }

  function getNodeCategory(node) {
    const el = node.parentElement
    if (!el || el.closest('header, nav, footer, script, style, noscript')) return null
    if (el.closest(`[${SKIP_ATTR}]`)) return null

    const link = el.closest('a[href]')
    if (link) {
      const href = link.getAttribute('href')
      // Accounts cards are owned by the Accounts logic above.
      if (href.includes('/accounts/')) return null
      if (href.includes('/items/')) return 'items'
      if (href.includes('/gift-cards/')) return 'giftCards'
      if (/[?&]offer=/.test(href)) return 'currency'
      // Game key PDPs sit at the site root: /<slug>-00-<id>
      if (/^(https?:\/\/[^/]+)?\/[^/?#]+-00-\d+\/?([?#]|$)/.test(href)) return 'gameKeys'
    }

    // Currency / top-up purchase dialog (unit price and total).
    if (el.closest('[role="dialog"]') && _$('.total-price-value', el.closest('[role="dialog"]'))) return 'currency'

    return getPageCategory()
  }

  function patchTextNode(node) {
    const current = node.textContent
    if (!/[€$]\s?\d/.test(current)) return

    // The items PDP unit price depends on the chosen quantity, but the site
    // doesn't re-render it when only the quantity changes - so a text that is
    // still our own output is redone from its original if the quantity moved.
    const items = getItemsOrder(node)
    const prev = patchedTexts.get(node)
    const isOwnOutput = prev?.out === current
    if (isOwnOutput && prev.qty === (items?.qty || 1)) return
    const source = isOwnOutput ? prev.orig : current

    const category = getNodeCategory(node)
    if (!category) return

    // Currency listing rows quote a price per 1 unit, but the fee applies to
    // the order, so it's calculated on the minimum quantity order.
    const qty = category === 'currency' ? getMinQuantity(node.parentElement) : 1
    // Without a known order size a per-unit price can't take the per-order
    // minimum fee (it would dwarf it), so fall back to the plain percentages.
    const isBareUnitPrice = category === 'currency' && qty === 1 && /\d[.,]\d{4,}/.test(source)

    const updated = source.replace(PRICE_IN_TEXT_RE, (match, symbol, numStr) => {
      const { value, decimals } = parsePriceParts(numStr)
      if (isNaN(value)) return match

      const isEuro = symbol === '€'
      let newValue
      if (isBareUnitPrice) newValue = value * 1.04 * 1.039
      else if (items) newValue = applyItemsOrderFormula(value, items, isEuro)
      else newValue = applyFormula(value * qty, isEuro, category) / qty

      const formatted = formatPrice(newValue, isEuro, decimals)
      // Some labels (eg. the items order dialog button) write "$33,58" - keep
      // that decimal comma so the variant doesn't change the price's style.
      return /^\d+,\d{2}$/.test(numStr) ? formatted.replace('.', ',') : formatted
    })
    // Even when nothing changed this time, remember it was handled for this
    // quantity (an unchanged unit price at qty 1 -> no-op).
    patchedTexts.set(node, { out: updated, orig: source, qty: items?.qty || 1 })
    if (updated === current) return

    node.parentElement.dataset.lavOriginal = source.trim()
    node.textContent = updated
  }

  // On an items PDP with a quantity above 1, the "Buy Now · $X" buttons (page,
  // order dialog, sticky bar) show the order total, while the big price in the
  // purchase panel is still the price of one item. The fee is charged once
  // per order (and has a minimum), so the tier has to come from the order
  // total, and the unit price shown is the new total split across the
  // quantity - otherwise it would read 0.54 while 20 of them cost 4.42.
  // Everything else (cards, related items) is a single item. Returns
  // { qty, isTotal } for those two cases, else null.
  function getItemsOrder(node) {
    const el = node.parentElement
    const input = _$('#product-detail-quantity')
    const qty = parseInt(input?.value, 10)
    if (!el || !(qty > 1) || el.closest('a[href]') || getNodeCategory(node) !== 'items') return null

    if (el.closest('button')) return { qty, isTotal: true }

    let panel = input
    for (let i = 0; i < 6 && panel.parentElement; i++) panel = panel.parentElement
    return panel.contains(el) ? { qty, isTotal: false } : null
  }

  function applyItemsOrderFormula(value, { qty, isTotal }, isEuro) {
    const total = isTotal ? value : value * qty
    const newTotal = applyFormula(getExactItemsTotal(total, qty, isEuro), isEuro, 'items')
    return isTotal ? newTotal : newTotal / qty
  }

  // The site builds the displayed total as (rounded unit price) x quantity,
  // so in USD it drifts from the real EUR order total by a cent or two - and
  // the fee tiers have hard edges (eg. EUR 30.00 vs 29.99 moves the fee from
  // 1.86 to 2.14). Rebuilding the total from the unit price rounded to a EUR
  // cent gives the exact amount the checkout will charge.
  function getExactItemsTotal(total, qty, isEuro) {
    const rate = isEuro ? 1 : eurToUsd
    const unitCents = Math.round((total / qty / rate) * 100)
    return ((unitCents * qty) / 100) * rate
  }

  // "7,500R$ Min Quantity" chip inside the same currency row.
  function getMinQuantity(el) {
    const row = el.closest('a[href]')
    if (!row) return 1

    const label = _$$('span', row, true).find((s) => s.children.length === 0 && s.textContent.trim() === 'Min Quantity')
    const qty = parseInt(label?.previousElementSibling?.textContent.replace(/[^\d]/g, ''), 10)
    return qty > 0 ? qty : 1
  }

  // Dialog: "Total price" is a plain price (patched by the generic walker),
  // while the "Unit price $0.005691 /R$" line has to stay consistent with
  // it for any quantity, so it's derived from the total's own change
  // (new total / old total) instead of applying the formula to the unit.
  function getCurrencyDialogParts(dialog) {
    const totalEl = _$('.total-price-value', dialog)
    const qtyLabel = _$('label[for="checkout-quantity"]', dialog)
    const unitEl = qtyLabel && _$('span.font-medium.text-foreground', qtyLabel.parentElement)
    return { totalEl, unitEl }
  }

  function prepareCurrencyDialog(dialog) {
    const { unitEl } = getCurrencyDialogParts(dialog)
    if (unitEl) unitEl.setAttribute(SKIP_ATTR, '')
  }

  function updateCurrencyDialogUnitPrice(dialog) {
    const { totalEl, unitEl } = getCurrencyDialogParts(dialog)
    if (!totalEl || !unitEl || !totalEl.dataset.lavOriginal) return

    // The site re-renders the unit price only on a tier change, so when the
    // text is still our own output, the original is the one we stashed.
    const unitText = unitEl.textContent.trim()
    const isOurs = unitEl.dataset.lavComputed === unitText
    const baseText = isOurs ? unitEl.dataset.lavOriginal : unitText

    const isEuro = baseText.startsWith('€')
    const { value: unit, decimals } = parsePriceParts(baseText)
    const oldTotal = parsePrice(totalEl.dataset.lavOriginal)
    const newTotal = parsePrice(totalEl.textContent)
    if (!oldTotal || isNaN(unit) || isNaN(newTotal)) return

    const updated = formatPrice(unit * (newTotal / oldTotal), isEuro, decimals)
    if (updated === unitText) return

    unitEl.dataset.lavOriginal = baseText
    unitEl.textContent = updated
    unitEl.dataset.lavComputed = updated
  }

  // *** HELPERS *** //
  function formatNumber(num) {
    return num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') || '0'
  }

  function getCookie(name) {
    const match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'))
    return match ? decodeURIComponent(match[1]) : ''
  }

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
          }, 1500)
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

  // Slider
  function connectSplide() {
    if (typeof Splide === 'function') return
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
  function startClarity() {
    if (config.isClarityStarted) return
    config.isClarityStarted = true

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
  }

  // Svg objects
  function getSvg(name) {
    const svgObj = {}

    return svgObj[name]
  }
})()
