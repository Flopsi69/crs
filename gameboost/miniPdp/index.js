(function () {
  // Guards against this script running more than once on the SPA (Inertia.js):
  // a re-injected instance would register a second capture-phase click
  // listener and open two modals for one click.
  if (window.__lavMiniPdpExpInit) return
  window.__lavMiniPdpExpInit = true

  console.debug('*** Experiment started ***')

  // Config for Experiment
  const config = {
    // dir: 'http://127.0.0.1:5500/gameboost/miniPdp',
    dir: 'https://flopsi69.github.io/crs/gameboost/miniPdp',
    clarity: ['set', 'exp_mini_pdp', 'variant_1'],
    debug: true
  }

  // const orig = console.log
  // console.log = function (...args) {
  //   orig.apply(console, ['Debug:', ...args])
  // }

  // Rows shown in the Overview tab before "Show more" (2 columns x 3 rows)
  const COLLAPSED_FIELDS = 6
  // Description has its own tab, Platform is already shown in the header chip
  const HIDDEN_FIELDS = ['Description', 'Platform']
  const CLOSE_ANIMATION_MS = 250

  // Styles for Experiment
  const styles = /* css */ `
    .lav-mp {
      --mp-card: #1c1f26;
      --mp-elevated: #20232b;
      --mp-subtle: #2a2e38;
      --mp-border: #2f333d;
      --mp-border-strong: #454b58;
      --mp-text-secondary: #a4aab7;
      --mp-text-tertiary: #6e7482;
      --mp-brand: #3b6ef6;
      --mp-brand-hover: #5b87ff;
      --mp-success: #22c55e;
      --mp-rating: #facc15;

      position: fixed;
      z-index: 99999;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
      background: rgba(5, 6, 8, 0.58);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
      color: #fff;
      /* Inter's "normal" line-height, so heights match the design on any font */
      line-height: 1.21;
      opacity: 0;
      visibility: hidden;
      transition: opacity ${CLOSE_ANIMATION_MS}ms, visibility ${CLOSE_ANIMATION_MS}ms;
    }
    .lav-mp.active {
      opacity: 1;
      visibility: visible;
    }
    .lav-mp [hidden] {
      display: none !important;
    }
    :where(.lav-mp) button {
      padding: 0;
      border: 0;
      background: none;
      color: inherit;
      font: inherit;
      cursor: pointer;
    }
    :where(.lav-mp) a {
      color: inherit;
      text-decoration: none;
    }
    .lav-mp svg {
      display: block;
      flex-shrink: 0;
    }
    .lav-mp img {
      display: block;
      max-width: none;
    }
    body.lav-mp-open {
      overflow: hidden;
    }
    body.lav-mp-open #tidio-chat {
      display: none !important;
    }

    /* Box */
    .lav-mp__box {
      position: relative;
      display: grid;
      grid-template-columns: minmax(0, 1fr) 438px;
      width: min(1140px, 100%);
      height: min(680px, 100%);
      overflow: hidden;
      background: var(--mp-elevated);
      border: 1px solid var(--mp-border);
      border-radius: 24px;
      box-shadow: 0 24px 64px rgba(0, 0, 0, 0.5);
      transform: translateY(12px) scale(0.98);
      transition: transform ${CLOSE_ANIMATION_MS}ms;
    }
    .lav-mp.active .lav-mp__box {
      transform: none;
    }
    .lav-mp__grab {
      display: none;
    }

    /* Gallery */
    .lav-mp__gallery {
      display: flex;
      min-width: 0;
      min-height: 0;
      padding: 24px;
      background: var(--mp-card);
    }
    .lav-mp__stage {
      position: relative;
      flex: 1;
      min-width: 0;
    }
    .lav-mp__track {
      position: relative;
      display: flex;
      width: 100%;
      height: 100%;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      scrollbar-width: none;
      background: #0a0b0f;
      border-radius: 14px;
    }
    .lav-mp__track::-webkit-scrollbar {
      display: none;
    }
    .lav-mp__slide {
      position: relative;
      flex: 0 0 100%;
      overflow: hidden;
      scroll-snap-align: start;
    }
    .lav-mp__bd {
      position: absolute;
      top: -10%;
      left: -10%;
      width: 120%;
      height: 120%;
      object-fit: cover;
      filter: blur(24px);
      opacity: 0.8;
    }
    .lav-mp__dim {
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.35);
    }
    .lav-mp__img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    .lav-mp__count {
      position: absolute;
      right: 20px;
      bottom: 24px;
      font-size: 12px;
      font-weight: 600;
      text-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
    }
    .lav-mp__arrow {
      position: absolute;
      top: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 42px;
      height: 42px;
      margin-top: -21px;
      color: #fff;
      background: rgba(0, 0, 0, 0.55) !important;
      border: 1px solid rgba(255, 255, 255, 0.12) !important;
      border-radius: 999px;
      transition: opacity 0.2s;
    }
    .lav-mp__arrow--prev {
      left: 14px;
    }
    .lav-mp__arrow--next {
      right: 14px;
    }
    .lav-mp__arrow[disabled] {
      opacity: 0.35;
      pointer-events: none;
    }

    /* Info */
    .lav-mp__info {
      display: flex;
      flex-direction: column;
      min-width: 0;
      min-height: 0;
    }
    .lav-mp__top {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 12px;
      padding: 28px 28px 0;
    }
    .lav-mp__chip {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      min-width: 0;
      padding: 5px 8px;
      font-size: 13px;
      font-weight: 500;
      background: var(--mp-subtle);
      border-radius: 8px;
    }
    .lav-mp__chip svg,
    .lav-mp__chip img {
      width: 14px;
      height: 14px;
      object-fit: contain;
    }
    .lav-mp__chip span {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .lav-mp__close {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      color: #fff;
      background: var(--mp-subtle) !important;
      border-radius: 999px;
      transition: opacity 0.2s;
    }
    .lav-mp__title {
      display: -webkit-box;
      margin: 14px 28px 0;
      overflow: hidden;
      font-size: 20px;
      font-weight: 600;
      line-height: 28px;
      word-break: break-word;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    /* Seller */
    .lav-mp__seller {
      display: flex;
      align-items: center;
      gap: 10px;
      min-width: 0;
      margin: 14px 28px 0;
    }
    .lav-mp__avatar {
      width: 36px;
      height: 36px;
      flex-shrink: 0;
      object-fit: cover;
      border-radius: 50%;
    }
    .lav-mp__seller-info {
      display: flex;
      flex-direction: column;
      gap: 2px;
      min-width: 0;
    }
    .lav-mp__seller-row {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .lav-mp__seller-name {
      min-width: 0;
      overflow: hidden;
      font-size: 14px;
      font-weight: 600;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .lav-mp__tier {
      display: flex;
      flex-shrink: 0;
      align-items: center;
      gap: 4px;
      padding: 3px 8px;
      color: var(--mp-rating);
      font-size: 11px;
      font-weight: 600;
      white-space: nowrap;
      background: rgba(250, 204, 20, 0.14);
      border-radius: 999px;
    }
    .lav-mp__status {
      display: flex;
      flex-shrink: 0;
      align-items: center;
      gap: 5px;
      font-size: 12px;
      font-weight: 500;
      white-space: nowrap;
    }
    .lav-mp__status i {
      width: 6px;
      height: 6px;
      background: currentColor;
      border-radius: 50%;
    }
    .lav-mp__status--online {
      color: var(--mp-success);
    }
    .lav-mp__status--idle {
      color: var(--mp-rating);
    }
    .lav-mp__status--offline {
      color: var(--mp-text-tertiary);
    }
    .lav-mp__stats {
      display: flex;
      align-items: center;
      gap: 5px;
      font-size: 13px;
      font-weight: 500;
      white-space: nowrap;
    }
    .lav-mp__rating {
      color: var(--mp-success);
    }
    .lav-mp__stats-rest {
      color: var(--mp-text-secondary);
    }

    /* Tabs */
    .lav-mp__tabs {
      display: flex;
      gap: 24px;
      height: 29px;
      margin: 14px 28px 0;
      border-bottom: 1px solid var(--mp-border);
    }
    .lav-mp__tab {
      display: flex;
      flex-direction: column;
      gap: 9px;
      color: var(--mp-text-tertiary);
      font-size: 14px;
      font-weight: 600;
      transition: color 0.2s;
    }
    .lav-mp__tab::after {
      content: '';
      display: block;
      width: 100%;
      height: 2px;
      background: transparent;
      border-radius: 2px;
      transition: background-color 0.2s;
    }
    .lav-mp__tab.active {
      color: #fff;
    }
    .lav-mp__tab.active::after {
      background: var(--mp-brand);
    }

    /* Panel */
    .lav-mp__panel-wrap {
      position: relative;
      display: flex;
      flex: 1;
      flex-direction: column;
      min-height: 0;
    }
    /* Fades hint that the panel has more content above / below */
    .lav-mp__panel-wrap::before,
    .lav-mp__panel-wrap::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      z-index: 1;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.2s;
    }
    .lav-mp__panel-wrap::before {
      top: 0;
      height: 28px;
      background: linear-gradient(to top, transparent, var(--mp-elevated));
    }
    .lav-mp__panel-wrap::after {
      bottom: 0;
      height: 56px;
      background: linear-gradient(to bottom, transparent, var(--mp-elevated));
    }
    .lav-mp__panel-wrap.has-top::before,
    .lav-mp__panel-wrap.is-desc.has-bottom::after {
      opacity: 1;
    }
    .lav-mp__panel {
      flex: 1;
      min-height: 0;
      padding: 16px 28px 20px;
      overflow-y: auto;
      overscroll-behavior: contain;
    }
    .lav-mp__panel.is-expanded {
      padding-bottom: 0;
    }
    /* 4px thumb, 4px from the edge */
    .lav-mp__panel::-webkit-scrollbar {
      width: 12px;
    }
    .lav-mp__panel::-webkit-scrollbar-thumb {
      background: var(--mp-border-strong);
      background-clip: padding-box;
      border: 4px solid transparent;
      border-radius: 6px;
    }
    @supports not selector(::-webkit-scrollbar) {
      .lav-mp__panel {
        scrollbar-width: thin;
        scrollbar-color: var(--mp-border-strong) transparent;
      }
    }
    .lav-mp__grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      column-gap: 16px;
    }
    .lav-mp__grid:not(.expanded) .lav-mp__cell--extra {
      display: none;
    }
    .lav-mp__cell {
      display: flex;
      flex-direction: column;
      gap: 2px;
      min-width: 0;
      height: 57px;
      padding: 9px 0;
      overflow: hidden;
      border-bottom: 1px solid var(--mp-border);
    }
    .lav-mp__label {
      overflow: hidden;
      color: var(--mp-text-tertiary);
      font-size: 12px;
      font-weight: 500;
      line-height: 16px;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .lav-mp__value {
      overflow: hidden;
      font-size: 14px;
      font-weight: 600;
      line-height: 20px;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .lav-mp__more {
      display: flex;
      align-items: center;
      gap: 4px;
      margin-top: 12px;
      color: var(--mp-brand-hover);
      font-size: 13px;
      font-weight: 600;
    }
    .lav-mp__more svg {
      transform: rotate(90deg);
      transition: transform 0.2s;
    }
    .lav-mp__more.expanded svg {
      transform: rotate(-90deg);
    }
    .lav-mp__desc {
      color: var(--mp-text-secondary);
      font-size: 13px;
      line-height: 20px;
      word-break: break-word;
    }
    .lav-mp__desc p {
      margin: 0 0 8px;
      white-space: pre-line;
    }
    .lav-mp__desc p:last-child {
      margin-bottom: 0;
    }
    @media (min-width: 768px) {
      /* Expanded: "Show less" stays pinned to the bottom of the scrolling panel */
      .lav-mp__more.expanded {
        position: sticky;
        /* -1px covers the sub-pixel gap that would let the next row peek through */
        bottom: -1px;
        /* A button doesn't stretch like a block, so span the panel padding explicitly */
        width: calc(100% + 56px);
        height: 48px;
        margin: 20px -28px 0;
        padding: 0 28px;
        background: var(--mp-elevated);
      }
      .lav-mp__more.expanded::before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 100%;
        height: 24px;
        background: linear-gradient(to bottom, transparent, var(--mp-elevated));
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.2s;
      }
      .lav-mp__panel-wrap.has-bottom .lav-mp__more.expanded::before {
        opacity: 1;
      }
    }

    /* Footer */
    .lav-mp__foot {
      display: flex;
      flex-direction: column;
      gap: 12px;
      height: 131px;
      padding: 16px 28px 24px;
      background: var(--mp-elevated);
      border-top: 1px solid var(--mp-border);
    }
    .lav-mp__details {
      display: flex;
      align-items: center;
      align-self: flex-start;
      gap: 6px;
      padding: 4px 0;
      font-size: 14px;
      font-weight: 600;
    }
    .lav-mp__buy-row {
      display: flex;
      align-items: center;
      gap: 16px;
    }
    .lav-mp__price {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .lav-mp__amount {
      display: flex;
      align-items: baseline;
      gap: 6px;
      white-space: nowrap;
    }
    .lav-mp__amount b {
      font-size: 28px;
      font-weight: 800;
    }
    .lav-mp__amount span {
      color: var(--mp-text-tertiary);
      font-size: 14px;
      font-weight: 600;
    }
    .lav-mp__delivery {
      display: flex;
      align-items: center;
      gap: 6px;
      color: var(--mp-success);
      font-size: 12px;
      font-weight: 500;
      white-space: nowrap;
    }
    .lav-mp__buy {
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: center;
      gap: 8px;
      min-width: 0;
      padding: 15px 24px;
      color: #fff;
      font-size: 16px;
      font-weight: 600;
      white-space: nowrap;
      background: var(--mp-brand) !important;
      border-radius: 12px;
      box-shadow: 0 8px 20px -6px rgba(59, 110, 245, 0.35);
      transition: background-color 0.2s;
    }
    @media (hover: hover) {
      .lav-mp__close:hover,
      .lav-mp__arrow:hover {
        opacity: 0.7;
      }
      .lav-mp__tab:hover {
        color: #fff;
      }
      .lav-mp__more:hover {
        color: #fff;
      }
      .lav-mp__buy:hover {
        background: var(--mp-brand-hover) !important;
      }
    }

    /* Mobile: bottom sheet */
    @media (max-width: 767px) {
      .lav-mp {
        align-items: flex-end;
        padding: 0;
      }
      .lav-mp__box {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: calc(100dvh - 56px);
        overflow-y: auto;
        overscroll-behavior: contain;
        border: 0;
        border-radius: 24px 24px 0 0;
        box-shadow: 0 -8px 32px rgba(0, 0, 0, 0.5);
        transform: translateY(100%);
      }
      .lav-mp__box.dragging {
        transition: none;
      }
      .lav-mp__info {
        display: contents;
      }
      /* The sheet itself scrolls, so its items must keep their natural height */
      .lav-mp__box > *,
      .lav-mp__info > *,
      .lav-mp__panel-wrap > * {
        flex-shrink: 0;
      }
      .lav-mp__panel-wrap {
        display: contents;
      }
      .lav-mp__grab {
        position: sticky;
        top: 0;
        z-index: 3;
        order: 0;
        display: flex;
        flex-shrink: 0;
        align-items: center;
        justify-content: center;
        padding: 8px 0 4px;
        background: var(--mp-elevated);
        touch-action: none;
      }
      .lav-mp__grab i {
        width: 40px;
        height: 5px;
        background: var(--mp-border-strong);
        border-radius: 3px;
      }
      .lav-mp__top {
        position: sticky;
        top: 17px;
        z-index: 3;
        order: 1;
        flex-shrink: 0;
        align-items: center;
        padding: 8px 16px 12px;
        background: var(--mp-elevated);
      }
      .lav-mp__gallery {
        order: 2;
        flex-shrink: 0;
        padding: 0;
        background: none;
      }
      .lav-mp__track {
        gap: 8px;
        padding: 0 16px;
        scroll-padding-left: 16px;
        background: none;
        border-radius: 0;
      }
      .lav-mp__slide {
        flex: 0 0 calc(100vw - 64px);
        aspect-ratio: 326 / 184;
        background: var(--mp-subtle);
        border-radius: 14px;
      }
      .lav-mp__bd,
      .lav-mp__dim,
      .lav-mp__arrow {
        display: none;
      }
      .lav-mp__img {
        object-fit: cover;
      }
      .lav-mp__count {
        right: 16px;
        bottom: 16px;
      }
      .lav-mp__title {
        order: 3;
        margin: 12px 16px 0;
        font-size: 17px;
        line-height: 24px;
      }
      .lav-mp__seller {
        order: 4;
        margin: 14px 16px 0;
      }
      .lav-mp__tabs {
        order: 5;
        gap: 0;
        height: 31px;
        margin: 14px 16px 0;
      }
      .lav-mp__tab {
        flex: 1;
        align-items: center;
        gap: 10px;
        font-size: 15px;
      }
      .lav-mp__panel {
        order: 6;
        flex: none;
        padding: 14px 16px 16px;
        overflow: visible;
      }
      .lav-mp__foot {
        position: sticky;
        bottom: 0;
        z-index: 3;
        order: 7;
        height: auto;
        margin-top: auto;
        padding: 16px 16px max(24px, calc(env(safe-area-inset-bottom, 0px) + 8px));
      }
      .lav-mp.active .lav-mp__box {
        transform: none;
      }
    }
  `

  const stylesEl = document.createElement('style')
  stylesEl.classList.add('exp-mini-pdp-styles')
  stylesEl.innerHTML = styles

  // *** Logic *** //
  let modalEl = null
  let currentOffer = null
  let closeTimer = null

  initExp()

  async function initExp() {
    await waitFor(() => document.head && document.body, false, { ms: 20 })

    document.head.appendChild(stylesEl)

    // Capture phase on document runs before the site's own handlers (Vue
    // click on the "View Images" lightbox button, the card <a> navigation),
    // so one stopImmediatePropagation here fully replaces the default action.
    document.addEventListener('click', onImageClick, true)
    document.addEventListener('keydown', onKeydown)

    console.debug('** InitExp **')
  }

  function onImageClick(e) {
    if (!(e.target instanceof Element)) return

    const zoom = e.target.closest('.cursor-zoom-in')
    const card = zoom?.closest('a[href*="/accounts/"]')
    const img = zoom && _$('img[id^="account-media-"]', zoom)

    if (!card || !img) return

    const offer = getOffer(img.id.replace('account-media-', ''))

    // Not an offer from the current Inertia page (eg. a widget on another
    // page type) - leave the native lightbox working.
    if (!offer) return

    e.preventDefault()
    e.stopImmediatePropagation()

    openModal(offer, card)
    pushDataLayer('exp_mp_open', 'Product image', 'click', 'Product card')
  }

  function onKeydown(e) {
    if (!currentOffer) return

    if (e.key === 'Escape') {
      closeModal('Escape')
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      modalEl.galleryGo?.(e.key === 'ArrowLeft' ? -1 : 1)
    }
  }

  // The listing page is an Inertia app, and every offer already carries its
  // full gallery, description, seller and overview fields in the page props,
  // so no extra request is needed.
  function getOffer(id) {
    const page = _$('#app')?.__vue_app__?.config.globalProperties.$page
    return page?.props?.accounts?.data?.find((offer) => String(offer.id) === String(id))
  }

  // Price is read from the card itself (not from the offer data) so the modal
  // always matches what the card shows, including prices that other
  // experiments rewrite in the DOM.
  function getCardPrice(card, offer) {
    const amountEl = _$('span.text-3xl', card)

    return {
      amount: amountEl?.textContent.trim() || offer.local_price.format,
      currency: amountEl?.nextElementSibling?.textContent.trim() || offer.local_price.currency.code
    }
  }

  function openModal(offer, card) {
    clearTimeout(closeTimer)

    if (!modalEl) {
      modalEl = document.createElement('div')
      modalEl.className = 'lav-mp'
      modalEl.setAttribute('role', 'dialog')
      modalEl.setAttribute('aria-modal', 'true')
      document.body.appendChild(modalEl)

      modalEl.addEventListener('click', (e) => {
        if (e.target === modalEl) closeModal('Overlay')
      })
    }

    currentOffer = offer
    modalEl.innerHTML = renderModal(offer, card)
    bindModal(offer, card)

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    if (scrollbarWidth > 0) document.body.style.paddingRight = scrollbarWidth + 'px'
    document.body.classList.add('lav-mp-open')

    // Next frame, so the transition runs from the hidden state
    requestAnimationFrame(() => {
      modalEl.classList.add('active')
      _$('.lav-mp__close', modalEl)?.focus({ preventScroll: true })
    })
  }

  function closeModal(source) {
    if (!currentOffer) return

    currentOffer = null
    modalEl.classList.remove('active')
    document.body.classList.remove('lav-mp-open')
    document.body.style.paddingRight = ''

    if (source) pushDataLayer('exp_mp_close', source, 'click', 'Mini PDP')

    closeTimer = setTimeout(() => {
      modalEl.innerHTML = ''
    }, CLOSE_ANIMATION_MS)
  }

  // *** Render *** //
  function renderModal(offer, card) {
    const { seller } = offer
    const price = getCardPrice(card, offer)
    const platformTitle = offer.presentation?.card?.title?.text || offer.data?.platform || ''
    const platformIcon = offer.presentation?.card?.title?.imageUrl
    const fields = (offer.presentation?.overview?.fields || []).filter(
      (field) =>
        field.visible !== false && !HIDDEN_FIELDS.includes(field.label) && field.value !== null && field.value !== ''
    )
    const media = offer.media?.length ? offer.media : [_$('img[id^="account-media-"]', card)?.src].filter(Boolean)
    // Blank lines split paragraphs (8px gap in the design), single line breaks stay
    const descriptionParagraphs = String(offer.description || '')
      .split(/\n\s*\n/)
      .map((text) => text.trim())
      .filter(Boolean)
    const hasDescription = descriptionParagraphs.length > 0
    const isInstant = offer.delivery_time?.seconds === 0
    const deliveryText = isInstant ? 'Instant delivery' : `Delivery in ${offer.delivery_time?.formatLong}`

    return /* html */ `
      <div class="lav-mp__box">
        <div class="lav-mp__grab"><i></i></div>

        <div class="lav-mp__gallery">
          <div class="lav-mp__stage">
            <div class="lav-mp__track">
              ${media
                .map(
                  (url, i) => `
                    <div class="lav-mp__slide">
                      <img class="lav-mp__bd" src="${esc(cdnImg(url, 'format=auto,width=200'))}" alt="" aria-hidden="true">
                      <span class="lav-mp__dim"></span>
                      <img class="lav-mp__img" src="${esc(cdnImg(url, 'format=auto,fit=scale-down,width=1200'))}" alt="" ${i > 1 ? 'loading="lazy"' : ''}>
                      ${media.length > 1 ? `<span class="lav-mp__count">${i + 1} / ${media.length}</span>` : ''}
                    </div>`
                )
                .join('')}
            </div>
            ${
              media.length > 1
                ? `<button type="button" class="lav-mp__arrow lav-mp__arrow--prev" aria-label="Previous image">${getSvg('arrowLeft')}</button>
                   <button type="button" class="lav-mp__arrow lav-mp__arrow--next" aria-label="Next image">${getSvg('arrowRight')}</button>`
                : ''
            }
          </div>
        </div>

        <div class="lav-mp__info">
          <div class="lav-mp__top">
            <div class="lav-mp__chip">
              ${platformIcon ? `<img src="${esc(platformIcon)}" alt="">` : getSvg('monitor')}
              <span>${esc(platformTitle)}</span>
            </div>
            <button type="button" class="lav-mp__close" aria-label="Close">${getSvg('close')}</button>
          </div>

          <div class="lav-mp__title">${esc(offer.title)}</div>

          <div class="lav-mp__seller">
            ${seller?.avatar ? `<img class="lav-mp__avatar" src="${esc(seller.avatar)}" alt="">` : ''}
            <div class="lav-mp__seller-info">
              <div class="lav-mp__seller-row">
                <span class="lav-mp__seller-name">${esc(seller?.username)}</span>
                ${seller?.seller_rank ? `<span class="lav-mp__tier">${getSvg('crown')}${esc(seller.seller_rank)} Seller</span>` : ''}
                ${seller?.status_badge?.name ? `<span class="lav-mp__status lav-mp__status--${esc(seller.status)}"><i></i>${esc(seller.status_badge.name)}</span>` : ''}
              </div>
              ${renderStats(seller)}
            </div>
          </div>

          <div class="lav-mp__tabs">
            <button type="button" class="lav-mp__tab active" data-tab="overview">Overview</button>
            ${hasDescription ? '<button type="button" class="lav-mp__tab" data-tab="description">Description</button>' : ''}
          </div>

          <div class="lav-mp__panel-wrap">
          <div class="lav-mp__panel">
            <div data-panel="overview">
              <div class="lav-mp__grid">
                ${fields
                  .map(
                    (field, i) => `
                      <div class="lav-mp__cell ${i >= COLLAPSED_FIELDS ? 'lav-mp__cell--extra' : ''}">
                        <span class="lav-mp__label">${esc(field.label)}</span>
                        <span class="lav-mp__value" title="${esc(field.value)}">${esc(field.value)}</span>
                      </div>`
                  )
                  .join('')}
              </div>
              ${
                fields.length > COLLAPSED_FIELDS
                  ? `<button type="button" class="lav-mp__more"><span>Show more</span>${getSvg('chevron')}</button>`
                  : ''
              }
            </div>
            ${
              hasDescription
                ? `<div class="lav-mp__desc" data-panel="description" hidden>${descriptionParagraphs.map((text) => `<p>${esc(text)}</p>`).join('')}</div>`
                : ''
            }
          </div>
          </div>

          <div class="lav-mp__foot">
            <a class="lav-mp__details" href="${esc(card.href)}">View full account details${getSvg('arrowRightLink')}</a>
            <div class="lav-mp__buy-row">
              <div class="lav-mp__price">
                <div class="lav-mp__amount"><b>${esc(price.amount)}</b><span>${esc(price.currency)}</span></div>
                <div class="lav-mp__delivery">${getSvg('zap')}${offer.stock > 0 ? 'In stock · ' : ''}${esc(deliveryText)}</div>
              </div>
              <button type="button" class="lav-mp__buy">${getSvg('cart')}Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    `
  }

  function renderStats(seller) {
    if (!seller?.rating?.format) return ''

    return /* html */ `
      <div class="lav-mp__stats">
        ${getSvg('star')}
        <span class="lav-mp__rating">${esc(seller.rating.format)}</span>
        <span class="lav-mp__stats-rest">· ${formatNumber(seller.total_ratings)} reviews · ${formatNumber(seller.total_sales)} sold</span>
      </div>
    `
  }

  // *** Behavior *** //
  function bindModal(offer, card) {
    const box = _$('.lav-mp__box', modalEl)

    _$('.lav-mp__close', modalEl).addEventListener('click', () => closeModal('Close button'))

    initGallery()
    initTabs()
    initShowMore()
    initPanelFades()
    initDragToClose(box)

    _$('.lav-mp__details', modalEl).addEventListener('click', () => {
      pushDataLayer('exp_mp_details', 'View full account details', 'click', 'Mini PDP')
    })

    _$('.lav-mp__buy', modalEl).addEventListener('click', () => {
      pushDataLayer('exp_mp_buy', 'Buy Now', 'click', 'Mini PDP')
      closeModal()

      // Trigger the card's own Buy Now button so checkout works exactly as it
      // does on the card; fall back to the checkout URL if the card was
      // re-rendered in the meantime.
      const liveCard = document.getElementById('account-media-' + offer.id)?.closest('a') || card
      const buyBtn = [...liveCard.querySelectorAll('button')].find((btn) => /buy now/i.test(btn.textContent))

      if (buyBtn) buyBtn.click()
      else location.href = `/checkout/accounts/${offer.id}`
    })
  }

  function initGallery() {
    const track = _$('.lav-mp__track', modalEl)
    const slides = _$$('.lav-mp__slide', track, true)
    const prev = _$('.lav-mp__arrow--prev', modalEl)
    const next = _$('.lav-mp__arrow--next', modalEl)

    if (slides.length < 2) return

    const step = () => slides[1].offsetLeft - slides[0].offsetLeft
    const getIndex = () => Math.round(track.scrollLeft / step())
    const goTo = (index) => {
      const i = Math.max(0, Math.min(slides.length - 1, index))
      track.scrollTo({ left: i * step(), behavior: 'smooth' })
    }

    const updateArrows = () => {
      prev.disabled = getIndex() <= 0
      next.disabled = getIndex() >= slides.length - 1
    }

    let frame = null
    track.addEventListener('scroll', () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(updateArrows)
    })

    prev.addEventListener('click', () => {
      goTo(getIndex() - 1)
      pushDataLayer('exp_mp_gallery', 'Previous', 'click', 'Mini PDP')
    })
    next.addEventListener('click', () => {
      goTo(getIndex() + 1)
      pushDataLayer('exp_mp_gallery', 'Next', 'click', 'Mini PDP')
    })

    modalEl.galleryGo = (dir) => goTo(getIndex() + dir)
    updateArrows()
  }

  function initTabs() {
    const tabs = _$$('.lav-mp__tab', modalEl, true)
    const panels = _$$('[data-panel]', modalEl, true)

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        if (tab.classList.contains('active')) return

        tabs.forEach((item) => item.classList.toggle('active', item === tab))
        panels.forEach((panel) => {
          panel.hidden = panel.dataset.panel !== tab.dataset.tab
        })

        _$('.lav-mp__panel', modalEl).scrollTop = 0
        _$('.lav-mp__panel-wrap', modalEl).classList.toggle('is-desc', tab.dataset.tab === 'description')
        modalEl.updateFades?.()
        pushDataLayer('exp_mp_tab', tab.textContent, 'click', 'Mini PDP')
      })
    })
  }

  function initShowMore() {
    const btn = _$('.lav-mp__more', modalEl)
    const grid = _$('.lav-mp__grid', modalEl)

    btn?.addEventListener('click', () => {
      const expanded = grid.classList.toggle('expanded')

      btn.classList.toggle('expanded', expanded)
      _$('.lav-mp__panel', modalEl).classList.toggle('is-expanded', expanded)
      modalEl.updateFades?.()
      _$('span', btn).textContent = expanded ? 'Show less' : 'Show more'
      pushDataLayer('exp_mp_show_more', expanded ? 'Show more' : 'Show less', 'click', 'Mini PDP')
    })
  }

  // Top / bottom fades show only while the panel has content in that direction
  function initPanelFades() {
    const wrap = _$('.lav-mp__panel-wrap', modalEl)
    const panel = _$('.lav-mp__panel', modalEl)

    const update = () => {
      wrap.classList.toggle('has-top', panel.scrollTop > 0)
      wrap.classList.toggle('has-bottom', panel.scrollTop + panel.clientHeight < panel.scrollHeight - 1)
    }

    panel.addEventListener('scroll', update, { passive: true })
    modalEl.updateFades = update
    update()
  }

  // Bottom sheet: dragging the grabber down closes it
  function initDragToClose(box) {
    const grab = _$('.lav-mp__grab', modalEl)
    let startY = null
    let delta = 0

    grab.addEventListener(
      'touchstart',
      (e) => {
        startY = e.touches[0].clientY
        delta = 0
        box.classList.add('dragging')
      },
      { passive: true }
    )

    grab.addEventListener(
      'touchmove',
      (e) => {
        if (startY === null) return

        delta = Math.max(0, e.touches[0].clientY - startY)
        box.style.transform = `translateY(${delta}px)`
      },
      { passive: true }
    )

    grab.addEventListener('touchend', () => {
      if (startY === null) return

      startY = null
      box.classList.remove('dragging')
      box.style.transform = ''

      if (delta > 100) closeModal('Swipe down')
    })
  }

  // *** Utils *** //
  function esc(value) {
    return String(value ?? '').replace(
      /[&<>"']/g,
      (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]
    )
  }

  function formatNumber(value) {
    return Number(value || 0).toLocaleString('en-US')
  }

  // Gameboost images go through Cloudflare image resizing
  function cdnImg(url, options) {
    return url.startsWith('https://cdn.gameboost.com/') ? `https://cdn.gameboost.com/cdn-cgi/image/${options}/${url}` : url
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
  if (!config.debug && Array.isArray(config.clarity) && config.clarity.length === 3) {
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
      close: /* html */ `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 4.5L4.5 13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.5 4.5L13.5 13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      monitor: /* html */ `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.33333 1.75H11.6667C12.311 1.75 12.8333 2.27233 12.8333 2.91667V8.75C12.8333 9.39433 12.311 9.91667 11.6667 9.91667H2.33333C1.689 9.91667 1.16667 9.39433 1.16667 8.75V2.91667C1.16667 2.27233 1.689 1.75 2.33333 1.75Z" stroke="currentColor" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.66667 12.25H9.33333" stroke="currentColor" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 9.91667V12.25" stroke="currentColor" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      crown: /* html */ `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.781 1.633C5.80258 1.5938 5.83429 1.56112 5.87281 1.53835C5.91133 1.51559 5.95525 1.50358 6 1.50358C6.04475 1.50358 6.08867 1.51559 6.12719 1.53835C6.16571 1.56112 6.19742 1.5938 6.219 1.633L7.695 4.435C7.7302 4.49988 7.77933 4.55616 7.83885 4.59981C7.89838 4.64345 7.96684 4.67338 8.0393 4.68743C8.11176 4.70148 8.18644 4.69932 8.25797 4.68109C8.3295 4.66286 8.3961 4.62902 8.453 4.582L10.5915 2.75C10.6326 2.71661 10.6831 2.69711 10.736 2.6943C10.7888 2.69149 10.8412 2.70552 10.8855 2.73437C10.9299 2.76322 10.964 2.8054 10.9828 2.85485C11.0017 2.90429 11.0044 2.95844 10.9905 3.0095L9.5735 8.1325C9.54458 8.23733 9.48226 8.32988 9.396 8.39611C9.30975 8.46233 9.20425 8.49863 9.0955 8.4995H2.905C2.79617 8.49874 2.69055 8.46249 2.6042 8.39626C2.51784 8.33002 2.45545 8.23741 2.4265 8.1325L1.01 3.01C0.996125 2.95894 0.998811 2.90479 1.01767 2.85535C1.03653 2.8059 1.07059 2.76372 1.11495 2.73487C1.15931 2.70602 1.21168 2.69199 1.26452 2.6948C1.31736 2.69761 1.36795 2.71711 1.409 2.7505L3.547 4.5825C3.6039 4.62952 3.6705 4.66336 3.74203 4.68159C3.81356 4.69982 3.88824 4.70198 3.9607 4.68793C4.03316 4.67388 4.10162 4.64395 4.16115 4.60031C4.22067 4.55666 4.2698 4.50038 4.305 4.4355L5.781 1.633Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.5 10.5H9.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      star: /* html */ `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.7625 1.1475C5.78441 1.10323 5.81826 1.06597 5.86023 1.03991C5.90219 1.01386 5.9506 1.00005 6 1.00005C6.0494 1.00005 6.09781 1.01386 6.13977 1.03991C6.18174 1.06597 6.21559 1.10323 6.2375 1.1475L7.3925 3.487C7.46859 3.64098 7.58091 3.7742 7.71981 3.87523C7.85872 3.97625 8.02006 4.04206 8.19 4.067L10.773 4.445C10.8219 4.45209 10.8679 4.47274 10.9057 4.5046C10.9436 4.53646 10.9717 4.57827 10.987 4.6253C11.0023 4.67233 11.0041 4.7227 10.9923 4.77072C10.9805 4.81873 10.9554 4.86248 10.92 4.897L9.052 6.716C8.92881 6.83605 8.83664 6.98424 8.78342 7.14781C8.7302 7.31139 8.71753 7.48544 8.7465 7.655L9.1875 10.225C9.19614 10.2739 9.19086 10.3243 9.17225 10.3703C9.15364 10.4164 9.12246 10.4563 9.08227 10.4855C9.04208 10.5147 8.99449 10.532 8.94493 10.5354C8.89538 10.5389 8.84585 10.5283 8.802 10.505L6.493 9.291C6.34086 9.21111 6.17159 9.16938 5.99975 9.16938C5.82791 9.16938 5.65864 9.21111 5.5065 9.291L3.198 10.505C3.15417 10.5282 3.1047 10.5386 3.05523 10.5351C3.00575 10.5316 2.95826 10.5143 2.91815 10.4851C2.87804 10.4559 2.84692 10.4161 2.82833 10.3701C2.80974 10.3241 2.80443 10.2739 2.813 10.225L3.2535 7.6555C3.2826 7.48587 3.26999 7.3117 3.21677 7.14802C3.16355 6.98435 3.0713 6.83608 2.948 6.716L1.08 4.8975C1.0443 4.86302 1.019 4.8192 1.00698 4.77104C0.994966 4.72288 0.996719 4.67231 1.01204 4.6251C1.02736 4.57788 1.05563 4.53592 1.09364 4.50399C1.13164 4.47206 1.17785 4.45145 1.227 4.4445L3.8095 4.067C3.97963 4.04225 4.14119 3.97653 4.28029 3.87549C4.41939 3.77446 4.53185 3.64114 4.608 3.487L5.7625 1.1475Z" fill="#FACC15"/></svg>`,
      chevron: /* html */ `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.25 10.5L8.75 7L5.25 3.5" stroke="currentColor" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      arrowLeft: /* html */ `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      arrowRight: /* html */ `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      arrowRightLink: /* html */ `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.33333 8H12.6667" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 3.33333L12.6667 8L8 12.6667" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      cart: /* html */ `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.75 15.75C6.75 16.1642 6.41421 16.5 6 16.5C5.58579 16.5 5.25 16.1642 5.25 15.75C5.25 15.3358 5.58579 15 6 15C6.41421 15 6.75 15.3358 6.75 15.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 15.75C15 16.1642 14.6642 16.5 14.25 16.5C13.8358 16.5 13.5 16.1642 13.5 15.75C13.5 15.3358 13.8358 15 14.25 15C14.6642 15 15 15.3358 15 15.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M1.5375 1.5375H3.0375L3.84064 5.2875M3.84064 5.2875L5.0325 10.8525C5.10568 11.1936 5.2955 11.4986 5.56928 11.7149C5.84306 11.9312 6.18368 12.0453 6.5325 12.0375H13.8675C14.2089 12.0369 14.5399 11.92 14.8058 11.7059C15.0717 11.4918 15.2566 11.1934 15.33 10.86L16.5675 5.2875H3.84064ZM3.84064 5.2875H3.84" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      zap: /* html */ `<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.16667 7.58333C2.06416 7.58368 1.96367 7.55494 1.87685 7.50045C1.79003 7.44595 1.72046 7.36794 1.67621 7.27548C1.63197 7.18302 1.61487 7.0799 1.6269 6.97811C1.63892 6.87631 1.67959 6.78002 1.74417 6.70042L7.10667 1.17542C7.14689 1.12899 7.20171 1.09761 7.26212 1.08644C7.32252 1.07527 7.38493 1.08497 7.4391 1.11394C7.49327 1.14291 7.53598 1.18944 7.56022 1.24589C7.58446 1.30234 7.58879 1.36535 7.5725 1.42458L6.5325 4.68542C6.50183 4.76749 6.49153 4.85578 6.50249 4.94271C6.51344 5.02964 6.54532 5.11262 6.59538 5.18452C6.64545 5.25643 6.71221 5.31511 6.78994 5.35555C6.86767 5.39598 6.95405 5.41695 7.04167 5.41667H10.8333C10.9358 5.41632 11.0363 5.44506 11.1232 5.49955C11.21 5.55405 11.2795 5.63206 11.3238 5.72452C11.368 5.81698 11.3851 5.9201 11.3731 6.02189C11.3611 6.12369 11.3204 6.21998 11.2558 6.29958L5.89333 11.8246C5.85311 11.871 5.79829 11.9024 5.73789 11.9136C5.67748 11.9247 5.61507 11.915 5.5609 11.8861C5.50673 11.8571 5.46402 11.8106 5.43978 11.7541C5.41554 11.6977 5.41121 11.6346 5.4275 11.5754L6.4675 8.31458C6.49817 8.23251 6.50847 8.14422 6.49751 8.05729C6.48656 7.97036 6.45468 7.88738 6.40462 7.81548C6.35455 7.74357 6.28779 7.68489 6.21006 7.64446C6.13233 7.60402 6.04595 7.58305 5.95833 7.58333H2.16667Z" stroke="currentColor" stroke-width="1.08333" stroke-linecap="round" stroke-linejoin="round"/></svg>`
    }

    return svgObj[name]
  }
})()
