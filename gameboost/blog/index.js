(function () {
  console.debug('*** Experiment started ***')

  // Config for Experiment
  const config = {
    // dir: 'http://127.0.0.1:5500/gameboost/blog',
    dir: 'https://flopsi69.github.io/crs/gameboost/blog',
    clarity: ['set', 'exp_blog', 'variant_1'],
    isClarityStarted: false,
    gameFallback: null,
    debug: false
  }

  const productsCache = {}

  // const orig = console.log
  // console.log = function (...args) {
  //   orig.apply(console, ['Debug:', ...args])
  // }

  // Styles for Experiment
  const styles = /* css */ `
    .lav-inner--sidebar {
      align-items: flex-start;
    }
    .lav-inner:not(.lav-inner--flat) .max-w-4xl {
      max-width: 100%;
    }
    .lav-banner {
      overflow: hidden;
      margin: 20px 0;
      border-radius: 16px;
      background-color: hsl(var(--primary));
      padding: 32px 24px;
      color: hsl(var(--primary-foreground));
    }
    .lav-banner__image {
      line-height: 0;
      flex-shrink: 0;
    }
    .lav-banner__image img {
      border-radius: 12px;
      width: 107px;
      margin: 0;
    }
    .lav-banner__head {
      display: flex;
      gap: 24px;
    }
    .lav-banner__title-wrap {
      display: flex;
      align-items: flex-start;
      gap: 24px;
    }
    .lav-banner__title {
      color: hsl(var(--primary-foreground));
      font-family: "Red Hat Display";
      font-size: 32px;
      font-weight: 600;
      line-height: normal;
      letter-spacing: -0.6px;
      max-width: 480px;
    }
    .lav-banner__bage {
      margin-top: 8px;
      color: #000;
      font-family: Manrope;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: -0.9px;
      padding: 2px 6px;
      background: #EBDA25;
      white-space: nowrap;
    }
    .lav-banner__benefits {
      display: flex;
      margin-top: 24px;
    }
    .lav-banner__benefit {
      display: flex;
      align-items: center;
      gap: 9px;
      max-width: 171px;
      width: 100%;
    }
    .lav-banner__benefit span {
      color: hsl(var(--primary-foreground));
      font-weight: 500;
      line-height: 18px;
      font-size: 12px;
    }
    .lav-banner__benefit svg {
      flex-shrink: 0;
    }

    .lav-banner__carousel {
      margin-top: 30px;
      text-align: left;
    }
    .lav-banner__carousel .splide__arrow {
      position: absolute;
      z-index: 1;
      border-radius: 9999px;
      top: 50%;
      background-color: hsl(var(--card));
      box-shadow: 0 0 0 1px rgba(156, 163, 175, 0.20), 0 1px 2px 0 rgba(0, 0, 0, 0.05);
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: .3s;
      transform: translateY(-50%);
    }
    @media(hover: hover) {
      .lav-banner__carousel .splide__arrow:hover {
        opacity: .8;
      }
    }
    .lav-banner__carousel .splide__arrow[disabled] {
      opacity: 0;
    }
    .lav-banner__carousel .splide__arrow svg {
      width: 13px;
      fill: hsl(var(--foreground));
    }
    .lav-banner__carousel .splide__arrow--prev {
      left: -20px;
    }
    .lav-banner__carousel .splide__arrow--prev svg {
      transform: rotate(180deg);
    }
    .lav-banner__carousel .splide__arrow--next {
      right: -20px;
    }

    .lav-banner__btn {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      gap: 6px;
      border-radius: 1111px;
      background: #EBDA25;
      box-shadow: 0 0 0 0 #FFF inset, 0 0 0 1px rgba(26, 19, 161, 0.50) inset;
      height: 52px;
      color: #000;
      text-align: center;
      font-size: 16px;
      font-weight: 600;
      line-height: 24px;
      margin-top: 25px;
      padding: 10px 44px;
      cursor: pointer;
      transition: all 0.2s;
      text-transform: capitalize;
    }
    @media(hover: hover) {
      .lav-banner__btn:hover {
        background: #EBDA25;
        box-shadow: 0 0 0 0 #FFF inset, 0 0 0 2px rgba(26, 19, 161, 0.50) inset;
      }
    }

    .lav-product {
      border-radius: 12px;
      background-color: hsl(var(--card));
      border: 1px solid hsl(var(--border));
      padding: 16px 12px;
      color: hsl(var(--foreground));
      transition: .3s;
      cursor: pointer;
    }
    @media(hover: hover) {
      .lav-product--currency:hover {
        background-color: hsl(var(--card) / .85);
        border-color: hsl(var(--field-ring-hover));
        cursor: pointer;
      }
    }
    .lav-product__title {
      color: hsl(var(--foreground));
      font-family: "Red Hat Display";
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px;
      display: flex;
      gap: 12px;
      align-items: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .lav-product__title span {
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .lav-product__title img {
      flex-shrink: 0;
      width: 24px;
      height: 24px;
      object-fit: contain;
      margin: 0;
    }
    .lav-product__descr {
      overflow: hidden;
      color: hsl(var(--foreground) / .8);
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      font-family: Manrope;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      margin-top: 17px;
    }
    .lav-banner .lav-product--account .lav-product__descr {
      min-height: 40px;
    }
    .lav-product--item .lav-product__descr {
      margin-top: 0;
      -webkit-line-clamp: 5;
    }
    .lav-product--currency .lav-product__descr {
      margin-top: 14px;
    }
    .lav-product__preview {
      margin-top: 15px;
      overflow: hidden;
      border-radius: 8px;
      height: 170px;
      --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
      --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
      box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
      --tw-ring-color: hsl(var(--secondary-ring));
    }
    .lav-product--item .lav-product__preview {
      box-shadow: none;
      background: none;
      width: 105px;
      height: 105px;
      margin-top: 0;
      border-radius: 4px;
      flex-shrink: 0;
    }
    .lav-product--currency .lav-product__preview {
      box-shadow: none;
      background: none;
      width: 40px;
      height: 40px;
      border-radius: 0;
      margin-top: 0;
    }
    .lav-product__preview img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      margin-bottom: 0;
    }
    .lav-product--currency .lav-product__preview img {
      object-fit: contain;
    }
    .lav-product__item-inner {
      display: flex;
      justify-content: space-between;
      gap: 12px;
    }
    .lav-product__item-info {
      max-width: 214px;
    }
    .lav-product__currency-inner {
      display: flex;
      justify-content: space-between;
      gap: 12px;
    }

    .lav-product__summary {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      padding-top: 20px;
    }
    .lav-product--item .lav-product__summary {
      padding-top: 13px;
    }
    .lav-product--currency .lav-product__summary {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 11px;
      padding: 12px 20px;
      margin: 24px -12px -16px;
      border-radius: 0 0 12px 12px;
      border-top: 1px solid hsl(var(--border));
      background-color: hsl(var(--muted) / .5);
    }
    .lav-product__currency-delivery {
    }
    .lav-product__divider {
      margin-top: 12px;
    }
    .lav-product--item .lav-product__divider {
      margin-top: 15px;
    }
    .lav-product__price {
      color: hsl(var(--secondary-light-foreground));
      font-family: Manrope;
      font-size: 30px;
      font-weight: 700;
      line-height: 36px;
      letter-spacing: -0.75px;
      white-space: nowrap;
    }
    .lav-product__price span {
      color: hsl(var(--secondary-light-foreground) / .75);
      font-size: 14px;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: 0;
    }
    .lav-product__price-old {
      position: absolute;
      left: 0;
      top: 0;
      color: hsl(var(--warning-light-foreground));
      font-size: 1rem;
      line-height: 1.5rem;
      font-weight: 600;
      text-decoration: line-through;
    }
    .lav-product__buy {
      display: flex;
      align-items: center;
      gap: 7px;
      border-radius: 9999px;
      background-color: hsl(var(--primary));
      padding: 9px 13px;
      color: hsl(var(--primary-foreground));
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
      cursor: pointer;
      transition: .3s;
      white-space: nowrap;
    }
    @media(hover: hover) {
      .lav-product__buy:hover {
        background-color: hsl(var(--primary-hover));
      }
    }
    .lav-product__author {
      display: flex;
      align-items: center;
      gap: 11px;
      padding: 12px 20px;
      margin: 16px -12px -16px;
      border-radius: 0 0 12px 12px;
      border-top: 1px solid hsl(var(--border));
      background-color: hsl(var(--muted) / .5);
    }
    .lav-product--item .lav-product__author {
      gap: 12px;
      padding-left: 13px;
      padding-right: 13px;
    }
    .lav-product__author-info  {
      align-items: center;
      min-width: 0;
    }
    .lav-product--item .lav-product__author-info {
      display: flex;
      gap: 12px;
      flex-grow: 1;
      justify-content: space-between;
    }
    .lav-product__author-icon {
      line-height: 0;
      flex-shrink: 0;
    }
    .lav-product__author-icon img {
      border-radius: 9999px;
      width: 38px;
      height: 38px;
      object-fit: cover;
      overflow: hidden;
      margin: 0;
    }
    .lav-product__author-name {
      color: hsl(var(--foreground));
      font-family: Manrope;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .lav-product__author-metrics {
      margin-top: 3px;
      display: flex;
      align-items: center;
    }
    .lav-product__author-metric + .lav-product__author-metric {
      padding-left: 10px;
      border-left: 1px solid hsl(var(--border));
      margin-left: 9px;
    }
    .lav-product__author-sold {
      color: hsl(var(--muted-foreground));
      text-align: center;
      font-family: Manrope;
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
      white-space: nowrap;
    }
    .lav-product__author-rating {
      color: hsl(var(--success-light-foreground));
      font-family: Manrope;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px;
      white-space: nowrap;
    }

    .lav-sidebar {
      width: 440px;
    }
    .lav-sidebar > a {
      max-width: 280px;
      display: block;
      margin: auto;
    }
    @media(max-width: 1100px) {
      .lav-sidebar {
        width: 330px;
      }
    }
    .lav-sidebar--active {
      border-radius: 16px;
      background-color: hsl(var(--primary));
      padding: 32px 16px;
    }
    .lav-sidebar__list {
      display: grid;
      gap: 24px;
      margin-top: 24px;
      margin-bottom: 24px;
    }
    .lav-sidebar__head {
      display: flex;
      gap: 24px;
    }
    .lav-sidebar__image {
      line-height: 0;
      flex-shrink: 0;
    }
    .lav-sidebar__image img {
      border-radius: 12px;
      width: 107px;
      margin: 0;
    }
    .lav-sidebar__info {
      color: hsl(var(--primary-foreground));
      text-align: center;
      font-family: Manrope;
      flex-grow: 1;
    }
    .lav-sidebar__bage {
      color: #000;
      font-size: 15px;
      font-weight: 600;
      line-height: 15px;
      letter-spacing: -0.5px;
      display: inline-block;
      padding: 3px 6px;
      background: #EBDA25;
    }
    .lav-sidebar__title {
      font-size: 24px;
      font-weight: 600;
      line-height: 32px;
      letter-spacing: -0.9px;
      margin: 4px auto 0;
      // max-width: 214px;
    }
    .lav-sidebar__benefits {
      margin-top: 18px;
      display: flex;
      gap: 16px;
    }
    .lav-sidebar__benefit {
      font-size: 12px;
      font-weight: 500;
      line-height: 18px;
      flex: 1;
    }
    .lav-sidebar__benefit svg {
      margin: 0 auto 8px;
    }
    .lav-sidebar__btn-wrap {
      text-align: center;
    }
    .lav-sidebar__btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      border-radius: 1111px;
      background: #EBDA25;
      box-shadow: 0 0 0 0 #FFF inset, 0 0 0 1px rgba(26, 19, 161, 0.50) inset;
      height: 52px;
      color: #000;
      text-align: center;
      font-size: 16px;
      font-weight: 600;
      line-height: 24px;
      padding: 10px 20px;
      cursor: pointer;
      transition: all 0.2s;
      text-transform: capitalize;
      white-space: nowrap;
    }
    @media(hover: hover) {
      .lav-sidebar__btn:hover {
        background: #EBDA25;
        box-shadow: 0 0 0 0 #FFF inset, 0 0 0 2px rgba(26, 19, 161, 0.50) inset;
      }
    }
    @media(max-width: 640px) {
      .lav-banner {
        text-align: center;
        border-radius: 0;
        margin: 15px -16px;
        padding: 24px 12px;
      }
      .lav-banner__carousel .splide__track {
        overflow: visible;
      }
      .lav-banner__title-wrap {
        display: block;
        text-align: center;
      }
      .lav-banner__title {
        font-family: Manrope;
        font-size: 22px;
        line-height: 28px;
        letter-spacing: -0.9px;
        max-width: 100%;
      }
      .lav-banner__bage {
        display: inline-block;
        font-size: 15px;
        line-height: 15px;
      }
      .lav-banner__benefits {
        justify-content: center;
        margin-top: 12px;
      }
      .lav-banner__benefit {
        flex-flow: column;
        gap: 8px;
        text-align: center;
      }
      .lav-banner__benefit span {
        font-size: 12px;
      }
      .lav-banner__head {
        justify-content: center;
        gap: 16px;
      }
      .lav-banner__carousel {
        margin-top: 24px;
      }
      .lav-banner__btn {
        margin-top: 24px;
        min-width: 304px;
        padding: 10px 24px;
      }
      .lav-content {
        overflow: visible;
      }
      .lav-banner__carousel .splide__arrow--next {
        right: 30px;
      }
      .lav-banner__carousel .splide__arrow--prev {
        left: -10px;
        display: none;
      }
    }
  `

  const stylesEl = document.createElement('style')
  stylesEl.classList.add('exp-blog-v1-styles');
  stylesEl.innerHTML = styles;

  // *** Logic *** //
  (function () {
    function urlChangeHandler() {
      if (!/\/blog\/.+/.test(location.href) || location.href.includes('/blog/categories/')) {
        _$('.exp-blog-v1-styles')?.remove()
        return;
      }

      initExp();
    }

    document.addEventListener('inertia:navigate', () => {
      console.log('navigate')
      urlChangeHandler();
    })

    if (window.innerWidth <= 1024) {
      document.addEventListener('inertia:finish', () => {
        const bannersLinksBanner = _$$('.ProseMirrorRender > .image-link', document, true).filter(el => el.href?.includes('cmpid=') && el.childElementCount === 1)
        const bannersImageBanners = _$$('.ProseMirrorRender > img', document, true).filter(el => el.alt.includes('cmpid='))
      
        const allBanners = [...bannersLinksBanner, ...bannersImageBanners]
        const allBannersFiltered = allBanners.filter(el => !el.classList.contains('lav-banner--handled'))

        const linkNodes = Array.from(_$('.ProseMirrorRender').childNodes).reverse();
        const filterNodes = linkNodes.filter(el => el.tagName === 'P' && el.style.textAlign === 'center' && el.childElementCount === 1 && el.children[0].tagName === 'A').reverse()
        
        if ((allBanners.length && allBannersFiltered.length) || (!allBanners.length && _$('.col-span-1 > .sm\\:mt-6 > .flex > .hidden') && filterNodes.length && !_$('.lav-sidebar'))) {
          urlChangeHandler();
        }
      });
    }

    urlChangeHandler()
  })()

  async function initExp() {
    startClarity()
    await waitFor(() => document.head && document.body, false, { ms: 20 })

    if (!_$('.exp-blog-v1-styles')) {
      document.head.appendChild(stylesEl)
    }

    console.debug('** InitExp **')

    connectSplide()
    await waitFor(() => _$('.col-span-1 > .sm\\:mt-6 > .flex') && !_$('.lav-banner--handled') && !_$('html.nprogress-busy') && typeof Splide === 'function', () => {
      console.log('handleLayout')
      handleLayout()
    }, { ms: 20 })
  }

  async function handleLayout() {
    // await waitFor(() => _$('.col-span-1 > .sm\\:mt-6 > .flex') && !_$('.lav-banner--handled') && !_$('html.nprogress-busy'), false, { ms: 20 })

    const parentWrapEl = _$('.col-span-1 > .sm\\:mt-6');
    parentWrapEl.classList.add('lav-wrap')

    const parentInnerEl = _$('.col-span-1 > .sm\\:mt-6 > .flex');
    parentInnerEl.classList.add('lav-inner')

    _$$('.lav-inner > div').forEach(el => {
      if (el.classList.contains('hidden')) {
        el.classList.add('lav-sidebar')
      }
      if (el.classList.contains('max-w-4xl')) {
        el.classList.add('lav-content')
      }
    })

    const bannersLinksBanner = _$$('.lav-content .ProseMirrorRender > .image-link', document, true).filter(el => el.href?.includes('cmpid=') && el.childElementCount === 1)
    const bannersImageBanners = _$$('.lav-content .ProseMirrorRender > img', document, true).filter(el => el.alt.includes('cmpid='))
      
    const allBanners = [...bannersLinksBanner, ...bannersImageBanners]

    allBanners.forEach(el => {
      console.log('addBanner for', el, el.classList)
      const { game, type } = parseGameboostUrl(el.href || el.alt, true)

      addBanner(el, game, type)
      // addBanner(el, game, 'items')
      // addBanner(el, game, 'top-up')
    })

    if (!_$('.lav-sidebar')) {
      _$('.lav-inner').classList.add('lav-inner--flat')
      return;
    }

    if (_$$('.lav-sidebar')?.length > 1) {
      _$('.lav-sidebar').remove()
    }

    const sidebarEl = _$('.lav-sidebar');
    if (sidebarEl) {
      const nodes = Array.from(_$('.lav-content .ProseMirrorRender').childNodes).reverse();

      const filterNodes = nodes.filter(el => el.tagName === 'P' && el.style.textAlign === 'center' && el.childElementCount === 1 && el.children[0].tagName === 'A').reverse()

      if (!filterNodes.length) {
        if (config.gameFallback) {
          addSidebar(sidebarEl, config.gameFallback.game, config.gameFallback.type)
        }
        return
      }

      for (const el of filterNodes) {
        const linkEl = el.children[0]
        const { game, type } = parseGameboostUrl(linkEl.href)

        if (window.innerWidth > 1024) {
          addSidebar(sidebarEl, game, type)
        } else if (!allBanners.length) {
          const allChilds = _$$('.ProseMirrorRender > *', document, true);
          const middleItem = allChilds[Math.floor(allChilds.length / 2)];
          console.log('addBanner for mobile', allChilds.length, middleItem)

          addBanner(middleItem, game, type, true)
        }
        
        break;
      }
    }
  }


  async function addSidebar(parentEl, gameName, type) {
    // parentEl.classList.add('lav-banner--handled')
    const config = await fetchProducts(gameName, type)

    if (!config?.items?.length) return

    parentEl.innerHTML = ''
    parentEl.classList.add('lav-sidebar--active')
    _$('.lav-inner').classList.add('lav-inner--sidebar')

    // i need only 5 first items
    config.items = config.items.slice(0, 5)

    const markup = /* html */ `
      <div class='lav-sidebar__head'>
        <div class='lav-sidebar__image'>
          <img src="${config.game.poster}" alt="Game Poster"/>
        </div>

        <div class='lav-sidebar__info'>
          <div class='lav-sidebar__bage'>Best Price</div>

          <div class='lav-sidebar__title'>
            ${typeof config.game.descr === 'string' ? config.game.descr : config.game.descr.en}
          </div>

          <div class='lav-sidebar__benefits'>
            <div class='lav-sidebar__benefit lav-sidebar__benefit--instant'>
              ${getSvg('instant-delivery')}
              <span>Instant <br/> Delivery</span>
            </div>
            <div class='lav-sidebar__benefit lav-sidebar__benefit--warranty'>
              ${getSvg('warranty')}
              <span>Warranty Included in Price</span>
            </div>
          </div>
        </div>
      </div>

      <div class="lav-sidebar__list"></div>

      <div class='lav-sidebar__btn-wrap'>
        <div class='lav-sidebar__btn'>
          Show More ${config.name} ${config.game?.currency_name || type} ${getSvg('arrow-right')}
        </div>
      </div>
    `

    parentEl.insertAdjacentHTML('afterbegin', markup)

    visibilityEvent(_$('.lav-sidebar__head'), () => {
      pushDataLayer('exp_blog_1_banner_view', 'Side Banner/Carousel', 'view', config.game.url);
    })

    let isInstant = type === 'accounts' ? true : false;

    config.items.forEach(item => {
      if (item.delivery_time?.format !== 'Instant') {
        isInstant = false;
      }

      let productEl;

      if (type === 'accounts') {
        productEl = getProductAccount('sidebar', item, config.game.url)
      } else if (type === 'items') {
        productEl = getProductItem('sidebar', item, config.game.url)
      } else {
        productEl = getProductCurrency('sidebar', item, config.game.url)
      }

      if (!productEl) return
      _$('.lav-sidebar__list').appendChild(productEl)
    })

    if (!isInstant) {
      _$('.lav-sidebar__benefit--instant').remove()
    }

    _$(".lav-sidebar__btn").addEventListener('click', () => {
      pushDataLayer('exp_blog_1_banner_show_more', config.game.url, 'click', config.game.url);
      location.href = config.game.url
    });
  }

  async function addBanner(el, gameName, type, isPassive) {
    el.classList.add('lav-banner--handled')
    const config = await fetchProducts(gameName, type)

    if (!config?.items?.length) return

    if (!isPassive) {
      // el.style.opacity = 0.5;
      el.style.display = 'none';
    }

    const bannerEl = document.createElement('div')
    bannerEl.classList.add('lav-banner')

    bannerEl.innerHTML = /* html */ `
      <div class='lav-banner__head'>
        <div class='lav-banner__image'>
          <img src="${config.game.poster}" alt="Game Poster"/>
        </div>

        <div class='lav-banner__info'>
          <div class='lav-banner__title-wrap'>
            <div class='lav-banner__title'>
              ${typeof config.game.descr === 'string' ? config.game.descr : config.game.descr.en}
            </div>

            <div class='lav-banner__bage'>Best Price</div>
          </div>

          <div class='lav-banner__benefits'>
            <div class='lav-banner__benefit lav-banner__benefit--instant'>
              ${getSvg('instant-delivery')}
              <span>Instant <br/> Delivery</span>
            </div>
            <div class='lav-banner__benefit lav-banner__benefit--warranty'>
              ${getSvg('warranty')}
              <span>Warranty Included <br/> in Price</span>
            </div>
          </div>
        </div>
      </div>

      <div class='lav-banner__carousel splide'>
        <div class='splide__track'>
          <div class='lav-banner__list splide__list'></div>
        </div>
      </div>

      <div class='lav-banner__btn'>
        Show More ${config.name} ${config.game?.currency_name || type} ${getSvg('arrow-right')}
      </div>
    `

    el.insertAdjacentElement('afterend', bannerEl)

    visibilityEvent(bannerEl, () => {
      pushDataLayer('exp_blog_2_banner_view', 'In-text Banner', 'view', config.game.url);
    })

    let isInstant = type === 'accounts' ? true : false;

    config.items.forEach(item => {
      if (item.delivery_time?.format !== 'Instant') {
        isInstant = false;
      }

      let productEl;

      if (type === 'accounts') {
        productEl = getProductAccount('banner', item, config.game.url)
      } else if (type === 'items') {
        productEl = getProductItem('banner', item, config.game.url)
      } else {
        productEl = getProductCurrency('banner', item, config.game.url)
      }

      if (!productEl) return
      _$('.lav-banner__list', bannerEl).appendChild(productEl)

      _$('.lav-product__buy', productEl)?.addEventListener('click', (e) => {
        location.href = config.game.url + '/' + item.slug
      });
    })

    if (!isInstant) {
      _$('.lav-banner__benefit--instant').remove()
    }


    var splide = new Splide(_$('.lav-banner__carousel', bannerEl), {
      perPage: 3,
      perMove: 1,
      gap: '16px',
      pagination: false,
      focus: 0,
      breakpoints: {
        1480: {
          perPage: 2.5,
          gap: '12px',
        },
        1350: {
          perPage: 2,
          gap: '8px',
        },
        640: {
          // perPage: 1.1,
          type: 'loop',
          gap: '16px',
          fixedWidth: '295px'
        },
      },
    });

    splide.mount();

    _$(".lav-banner__btn", bannerEl).addEventListener('click', () => {
      pushDataLayer('exp_blog_2_banner_show_more', config.game.url, 'click', config.game.url);
      location.href = config.game.url
    });
  }

  function getProductAccount(location, data, gameUrl) {
    let title = ''
    if (data.data.platform) {
      title += data.data.platform + ' · '
    } else if (data.data.server) {
      if (data.data.server) {
        title += data.data.server + ' · '
      }
    }
    if (data.data.main_game) {
      title += data.data.main_game
    } else if (data.data.outfits_count) {
      title += `${data.data.outfits_count} Skins`
    } else if (data.data.current_tier) {
      title += `${data.data.current_tier}`
    }

    const el = document.createElement(location === 'banner' ? 'li' : 'div')
    el.classList.add(location === 'banner' ? 'splide__slide' : 'lav-product--wrap')
    el.innerHTML = /* html */ `
      <div class='lav-product lav-product--account'>
        <div class='lav-product__title'>
          <img src="${data.icon_url}" />
          <span>${title}</span>
        </div>
        <div class='lav-product__descr'>${data.title}</div>
        <div class='lav-product__preview'>
          <img src="${data.media[0]}" />
        </div>
        <div class='lav-product__includes'></div>
        <div class="lav-product__divider h-px w-full border-t-0 bg-[linear-gradient(90deg,theme(&quot;colors.border/10%&quot;),_theme(&quot;colors.border&quot;),_theme(&quot;colors.border/10%&quot;))]"></div>
        <div class='lav-product__summary'>
          ${data.local_original_price?.value ? `<div class='lav-product__price-old'>
            ${data.local_original_price.format}
          </div>` : ''}
          <div class='lav-product__price'>
            ${data.local_price.format} <span>${data.local_price.currency.code}</span>
          </div>
          <div class='lav-product__buy'>Buy now ${getSvg('arrow-right')}</div>
        </div>
        <div class='lav-product__author'>
          <div class='lav-product__author-icon'>
            <img src="${data.seller.avatar}" />
          </div>
          <div class='lav-product__author-info'>
            <div class='lav-product__author-name'>${data.seller.username}</div>
            <div class='lav-product__author-metrics'>
              <div class='lav-product__author-metric lav-product__author-sold'>
                ${formatNumber(data.seller.total_sales)} Sold
              </div>
              <div class='lav-product__author-metric lav-product__author-rating'>
                <i class="mr-0.5 fa-solid fa-thumbs-up"></i> ${data.seller.rating?.format || 'null'}
              </div>
            </div>
          </div>
        </div>
      </div>
    `

    el.addEventListener('click', (e) => {
      e.preventDefault();
      const url = window.location.origin + gameUrl + '/' + data.slug
      const num = location === 'banner' ? 2 : 1
      pushDataLayer(`exp_blog_${num}_banner_item`, url, 'click', gameUrl);
      window.location.href = url
    });
    
    // _$('.lav-product__buy', el)?.addEventListener('click', (e) => {
    //   e.stopImmediatePropagation();
    //   e.preventDefault();
    //   location.href = config.game.url + '/' + item.slug
    // });

    return el
  }

  function getProductItem(location, data, gameUrl) {
    const el = document.createElement(location === 'banner' ? 'li' : 'div')
    el.classList.add(location === 'banner' ? 'splide__slide' : 'lav-product--wrap')
    el.innerHTML = /* html */ `
      <div class='lav-product lav-product--item'>
        <div class='lav-product__item-inner'>
          <div class='lav-product__item-info'>
            <div class='lav-product__descr'>${data.title}</div>
            <div class='lav-product__includes'></div>
          </div>

          <div class='lav-product__preview'>
            <img src="${data.media[0]}" />
          </div>
        </div>
        <div class="lav-product__divider h-px w-full border-t-0 bg-[linear-gradient(90deg,theme(&quot;colors.border/10%&quot;),_theme(&quot;colors.border&quot;),_theme(&quot;colors.border/10%&quot;))]"></div>
        <div class='lav-product__summary'>
          ${data.local_original_price?.value ? `<div class='lav-product__price-old'>
            ${data.local_original_price.format}
          </div>` : ''}
          <div class='lav-product__price'>
            ${data.local_price.format} ${data.stock > 1 ? `<span>/ Unit</span>` : ''}
          </div>
          <div class='lav-product__buy'>Buy now ${getSvg('arrow-right')}</div>
        </div>
        <div class='lav-product__author'>
          <div class='lav-product__author-icon'>
            <img src="${data.seller.avatar}" />
          </div>
          <div class='lav-product__author-info'>
            <div class='lav-product__author-name'>${data.seller.username}</div>
            <div class='lav-product__author-metrics'>
              <div class='lav-product__author-metric lav-product__author-sold'>
                ${formatNumber(data.seller.total_sales)} Sold
              </div>
              <div class='lav-product__author-metric lav-product__author-rating'>
                <i class="mr-0.5 fa-solid fa-thumbs-up"></i> ${data.seller.rating?.format || 'null'}
              </div>
            </div>
          </div>
        </div>
      </div>
    `

    el.addEventListener('click', (e) => {
      e.preventDefault();
      const url = window.location.origin + gameUrl + '/' + data.slug
      const num = location === 'banner' ? 2 : 1
      pushDataLayer(`exp_blog_${num}_banner_item`, url, 'click', gameUrl);
      window.location.href = url
    });

    return el
  }

  function getProductCurrency(location, data, gameUrl) {
    const el = document.createElement(location === 'banner' ? 'li' : 'div')
    el.classList.add(location === 'banner' ? 'splide__slide' : 'lav-product--wrap')
    el.innerHTML = /* html */ `
      <div class='lav-product lav-product--currency'>
        <div class='lav-product__currency-inner'>
          <div class='lav-product__currency-info'>
            <div class='lav-product__title'>${data.title}</div>
            <div class='lav-product__descr'>${data.currency_unit.currency_name}</div>
          </div>

          <div class='lav-product__preview'>
            <img src="${data.icon_url}" />
          </div>
        </div>
        <div class='lav-product__summary'>
          <div class='lav-product__price'>
            ${data.local_price.format_readable} <span>${data.currency_unit?.name || ''}</span>
          </div>
          <div class='lav-product__currency-delivery flex-shrink-0 px-2.5 py-2 text-xs rounded-md h-min bg-accent'>
            <i class="mr-1.5 text-muted-foreground fa-solid fa-clock"></i>
            ${data.delivery_time?.format || ''}
          </div>
        </div>
      </div>
    `

    el.addEventListener('click', (e) => {
      const url = window.location.origin + gameUrl + '/' + data.uuid
      const num = location === 'banner' ? 2 : 1
      pushDataLayer(`exp_blog_${num}_banner_item`, url, 'click', gameUrl);
      window.location.href = url
    });

    return el
  }

  async function fetchProducts(gameName = 'fortnite', type = 'accounts') {
    if (type === 'robux') return null;

    const cachedData = getProductsFromCache(gameName, type);

    if (cachedData) {
      return cachedData;
    }

    let res = await fetch(`https://gameboost.com/${gameName}/${type}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'X-Inertia': 'true',
        'X-Requested-With': 'XMLHttpRequest',
        'X-Inertia-Version': '3df20cadddcb1d19c1c1acddc1335ef3',
      },
      credentials: 'include'
    });

    let data = await res.json();
    let descr = '';

    window.testik = data

    let model = data.props?.model;
    
    // If no model, retry once after 1.5 seconds
    if (!model) {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      res = await fetch(`https://gameboost.com/${gameName}/${type}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'X-Inertia': 'true',
          'X-Requested-With': 'XMLHttpRequest',
          'X-Inertia-Version': '3df20cadddcb1d19c1c1acddc1335ef3',
        },
        credentials: 'include'
      });
      
      data = await res.json();
      window.testik = data;
      model = data.props?.model;
      
      if (!model) return null;
    }

    if (typeof model?.custom_content === 'object' && !Array.isArray(model?.custom_content)) {
      const descrKey = Object.keys(model.custom_content).find(key => key.toLowerCase().includes('description'))
      descr = descrKey ? model.custom_content[descrKey] : '';
    } else {
      descr = data.props.meta?.title || '';
    }

    const config = {
      name: model.game.name,
      type: type,
      game: {
        poster: model.game.poster_url,
        descr: descr,
        url: data.url,
        currency_name: model.currency_unit?.currency_name,
        unit: model.currency_unit?.name
      },
      items: model[type]?.data || model.currencies?.data || []
    }

    saveProductsToCache(gameName, type, config);

    console.log('config', config)
    
    return config;
  }

  function saveProductsToCache(name, type, config) {
    const cacheKey = `gameboost_${name.replaceAll(' ', '_')}_${type}`;

    productsCache[cacheKey] = {
      config,
      timestamp: Date.now()
    }
  }

  function getProductsFromCache(game, type) {
    const cacheKey = `gameboost_${game.replaceAll(' ', '_')}_${type}`;
    const cacheData = productsCache[cacheKey];
    console.log('cacheData', cacheData)

    if (cacheData && (Date.now() - cacheData.timestamp < 3 * 60 * 1000)) { // cache valid for 3 minutes
      return cacheData.config;
    }

    return null;
  }

  function parseGameboostUrl(url, isFallback = false) {
    if (!url) return null;

    const { pathname } = new URL(url);

    // split and remove empty parts
    const parts = pathname.split('/').filter(Boolean);

    if (isFallback && parts[0] && parts[1]) {
      config.gameFallback = {
        game: parts[0],
        type: parts[1],
      }
    }

    return {
      game: parts[0] || null,
      type: parts[1] || null,
    };
  }

  // *** HELPERS *** //
  function formatNumber(num) {
    return num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') || '0'
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
    const svgObj = {
      'instant-delivery': `
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 13 16" fill="none">
          <path d="M10.0743 1.6783C10.2458 1.21887 10.1505 0.829357 9.78832 0.509756C9.38799 0.250081 9.00672 0.270056 8.64451 0.569681L1.32414 7.28129C1.01912 7.58092 0.933335 7.93048 1.06678 8.32998C1.23835 8.72948 1.5243 8.93922 1.92464 8.95919H5.1273L2.92547 14.3225C2.7539 14.7819 2.84921 15.1714 3.21142 15.491C3.61175 15.7507 3.99302 15.7307 4.35523 15.4311L11.6756 8.71949C11.9806 8.41987 12.0664 8.07031 11.933 7.6708C11.7805 7.2713 11.4945 7.06157 11.0751 7.04159H7.90103L10.0743 1.6783Z" fill="currentColor"/>
        </svg>
      `,
      'warranty': `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
          <path d="M7.99969 0.529182C8.14552 0.529182 8.28094 0.562271 8.40594 0.628448L14.3122 3.27551C14.6664 3.42992 14.9476 3.67257 15.1559 4.00345C15.3851 4.33433 15.4997 4.72036 15.4997 5.16154C15.5205 6.28654 15.3434 7.61006 14.9684 9.13212C14.5934 10.6542 13.9164 12.1321 12.9372 13.5659C11.9789 15.0218 10.6039 16.224 8.81219 17.1726C8.27053 17.4373 7.72886 17.4373 7.18719 17.1726C5.39552 16.224 4.02052 15.0218 3.06219 13.5659C2.08302 12.1321 1.40594 10.6542 1.03094 9.13212C0.655942 7.61006 0.478858 6.28654 0.499692 5.16154C0.499692 4.72036 0.614275 4.33433 0.843442 4.00345C1.05177 3.67257 1.33302 3.42992 1.68719 3.27551L7.59344 0.628448C7.71844 0.562271 7.85386 0.529182 7.99969 0.529182ZM7.99969 2.74609V15.2534C9.41636 14.4814 10.5309 13.4998 11.3434 12.3086C12.1351 11.1174 12.6976 9.89315 13.0309 8.6358C13.3434 7.35639 13.4997 6.20933 13.4997 5.19462L7.99969 2.74609Z" fill="currentColor"/>
        </svg>
      `,
      'arrow-right': `
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="17" viewBox="0 0 14 17" fill="none">
          <path d="M13.7188 9.21875C13.9062 9.01042 14 8.77083 14 8.5C14 8.22917 13.9062 7.98958 13.7188 7.78125L8.71875 2.78125C8.51042 2.59375 8.27083 2.5 8 2.5C7.72917 2.5 7.48958 2.59375 7.28125 2.78125C7.09375 2.98958 7 3.22917 7 3.5C7 3.77083 7.09375 4.01042 7.28125 4.21875L10.5938 7.5H1C0.708333 7.5 0.46875 7.59375 0.28125 7.78125C0.09375 7.96875 0 8.20833 0 8.5C0 8.79167 0.09375 9.03125 0.28125 9.21875C0.46875 9.40625 0.708333 9.5 1 9.5H10.5938L7.28125 12.7812C7.09375 12.9896 7 13.2292 7 13.5C7 13.7708 7.09375 14.0104 7.28125 14.2188C7.48958 14.4062 7.72917 14.5 8 14.5C8.27083 14.5 8.51042 14.4062 8.71875 14.2188L13.7188 9.21875Z" fill="currentColor"/>
        </svg>
      `
    }

    return svgObj[name]
  }
})()