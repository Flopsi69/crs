// const origLog = console.log
// console.log = function () {
//   origLog.apply(console, arguments)
//   navigator.sendBeacon(
//     'https://console.wiredgeese.com/log/geeni',
//     JSON.stringify(arguments)
//   )
// }

// const origLogError = console.error
// console.error = function () {
//   origLogError.apply(console, arguments)
//   if (arguments[0]?.message) {
//     console.log('error: ' + arguments[0].message)
//   } else {
//     console.log('error: ' + JSON.stringify(arguments))
//   }
// }

console.log('*** Experiment started ***')
// console.log(location.href)

// Config for Experiment
const config = {
  dir: 'http://127.0.0.1:5500/geeni/suggest',
  // dir: 'https://flopsi69.github.io/crs/geeni/suggest',
  clarity: ['set', '', 'variant_1'],
  debug: true
}

// Styles for Experiment
const styles = /* css */ `
  .go1272136950 + [role="dialog"], .needsclick [style="display: flex; z-index: 90000; position: fixed; left: 0px; top: 0px; width: 100%; height: 100%; justify-content: center; align-items: center; overflow: auto; background-color: rgba(0, 0, 0, 0.41); animation-timing-function: ease; animation-play-state: running; animation-iteration-count: 1; animation-fill-mode: forwards; animation-delay: 0s; animation-duration: 0.35s; animation-name: klaviyo-fadein;"] {
    display: none!important;
  }
  iframe#launcher {
    margin-right: 10px!important;
  }
  .additional-functional {
    display: none!important;
  }
  .lav-sticky-wrapper .additional-functional {
    bottom: 90px!important;
  }
  .lav-sticky-wrapper iframe#launcher  {
    bottom: 100px!important;
  }
  .lav-sticky-pdp-wrapper .additional-functional {
    bottom: 140px!important;
  }
  .lav-sticky-pdp-wrapper iframe#launcher  {
    bottom: 150px!important;
  }
  .btn--scroll-top {
    display: none!important
  }

  .lav-sticky {
    display: flex;
    align-items: center;
    position: fixed;
    z-index: 120;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 8px 8px 0px 0px;
    background: linear-gradient(90deg, #C50717 17%, #F71D2F 44.5%, #DC1122 100%);
    color: #fff;
    padding: 12px 12px 12px 5px;
    transition: .5s;
    transform: translateY(0);
  }
  .lav-sticky_hide {
    transform: translateY(300%);
  }
  .lav-sticky_pdp {
    bottom: 52px;
  }
  .lav-sticky__close {
    line-height: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 15px;
    position: absolute;
    top: 0;
    transform: translateY(-100%);
    width: 25px;
    height: 20px;
    transition: .3s;
    border-radius: 4px 4px 0px 0px;
    background: #DE1223;
    cursor: pointer;
  }
  @media(hover:hover) {
    .lav-sticky__close:hover {
      opacity: 0.7;
    }
  }
  .lav-sticky__icon {
    line-height: 0;
    flex-shrink: 0;
    margin-right: 5px;
  }
  .lav-sticky__info {
    position: relative;
    font-size: 16px;
    font-weight: 700;
    line-height: 22px;
  }
  .lav-sticky__info:before {
    content: '';
    position: absolute;
    left: -3px;
    top: 20px;
    background: url('${config.dir}/img/blue2-underline.svg') no-repeat;
    background-size: contain;
    width: 108px;
    height: 4px;
  }
  .lav-sticky__info span {
    font-weight: 800;
    white-space: nowrap;
  }
  .lav-timer {
    text-align: center;
    margin-left: auto;
  }
  .lav-timer__title {
    font-size: 14px;
    font-weight: 700;
    line-height: 1;
    white-space: nowrap;
  }
  .lav-timer__inner {
    display: flex;
    justify-content: center;
    gap: 19px;
    margin-top: 6px;
  }
  .lav-timer__value {
    position: relative;
    display: flex;
    gap: 4px;
  }
  .lav-timer__digit {
    border-radius: 4px;
    background: #fff;
    box-shadow: 0px 1px 2px 0px rgba(2, 63, 136, 0.16);
    color: #000;
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    text-transform: uppercase;
    width: 20px;
    height: 26px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .lav-timer__value + .lav-timer__value:before {
    content: '';
    position: absolute;
    left: -8px;
    transform: translateX(-100%);
    top: 7px;
    background-image: url("${config.dir}/img/timer2-dots.svg");
    width: 3px;
    height: 11px;
    background-size: cover;
    background-position: bottom;
  }

  .lav-pdp-discount {
    gap: 6px;
    margin-top: 6px;
    border-radius: 4px;
    background: linear-gradient(90deg, #C50717 17%, #F71D2F 44.5%, #DC1122 100%);
    display: inline-flex;
    align-items: center;
    padding-left: 6px;
    padding-right: 6px;
  }
  .lav-pdp-discount__icon {
    line-height: 0;
    flex-shrink: 0;
  }
  .lav-pdp-discount__icon svg {
    width: 9px;
  }
  .lav-pdp-discount__caption {
    color: #fff;
    font-size: 12px;
    font-weight: 800;
    line-height: 14px;
    text-transform: uppercase;
  }
  .lav-pdp-discount__caption span {
    font-weight: 400;
  }
  .product__price-and-badge .product__price {
    padding-top: 5px!important;
  }


  .lav-banner + .back-navigation {
    display: none;
  }
  .lav-banner {
    position: relative;
    background: linear-gradient(90deg, #0860C8 0%, #023F88 27.5%, #0860C8 52.5%, #023F88 77.5%, #0860C8 92%);
    text-align: center;
    padding: 16px 16px 45px;
    color: #fff;
    margin-bottom: 32px;
  }
  .lav-banner__title {
    font-size: 18px;
    font-weight: 600;
    line-height: 28px; 
  }
  .lav-banner__item {
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 16px auto 12px;
    width: 320px;
    border-radius: 24px;
    border: 1px solid #0466D9;
    background: #02418C;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.08);
    padding: 8px;
  }
  .lav-banner__item-image {
    line-height: 0;
    flex-shrink: 0;
    width: 80px;
    height: 80px;
    border-radius: 16px;
    box-shadow: 0px 22px 6px 0px rgba(0, 0, 0, 0.00), 0px 14px 6px 0px rgba(0, 0, 0, 0.01), 0px 8px 5px 0px rgba(0, 0, 0, 0.02), 0px 3px 3px 0px rgba(0, 0, 0, 0.03), 0px 1px 2px 0px rgba(0, 0, 0, 0.04);
    overflow: hidden;
  }
  .lav-banner__item-caption {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    text-align: left;
  }
  .lav-banner__caption {
    font-size: 22px;
    font-weight: 700;
    line-height: 32px;
  }
  .lav-banner__confetti {
    position: absolute;
    top: 0;
    right: 0;
  }
  .lav-banner__discount {
    display: inline-flex;
    gap: 10px;
    align-items: center;
    position: absolute;
    left: 50%;
    bottom: 0;
    margin: auto;
    justify-content: center;
    transform: translate(-59%, 30%);
  }
  .lav-banner__arrow {
    width: 40px;
    margin-bottom: -25px;
  }
  .lav-banner__coupon {
    width: 135px;
  }

  .lav-benefits {
    padding: 9px 12px;
    background: #E8F8FE;
    margin: 0 -20px;
  }
  .lav-benefits__title {
    color: #000;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px; 
  }
  .lav-benefits__list {
    margin-top: 10px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 6px 10px;
  }
  .lav-benefits__icon {
    flex-shrink: 0;
    line-height: 0;
  }
  .lav-benefits__item {
    display: flex;
    align-items: center;
    gap: 9px;
    color: #023F88;
    font-size: 14px;
    font-weight: 600;
    line-height: 28px;
  }
  .lav-benefits + .product__title-and-price {
    display: none;
  }
`

const lavTimerKey = 'lav-timer-1'

const stylesEl = document.createElement('style')
stylesEl.classList.add('exp-styles')
stylesEl.innerHTML = styles

// *** Logic *** //
initExp()

const deviceMap = {
  bewrshc1jvlfavl5: {
    id: '8136411611388',
    name: 'Geeni Prisma A21 Smart Bulb - Multicolor and Warm White',
    related: [
      { productId: '4384644989007', variantId: '31352740675663' },
      { productId: '6628294262863', variantId: '39649036206159' },
      { productId: '8088106828028', variantId: '44449445314812' },
      { productId: '4821841969231', variantId: '32691873808463' },
      { productId: '8305370693884', variantId: '45138686771452' },
      { productId: '4850401181775', variantId: '32807658782799' }
    ]
  },
  odrhfd5d0ak2fp3b: {
    id: '7752466858236',
    name: 'Merkury Innovations 720P Camera',
    type: 'webp',
    related: [
      { productId: '4381945921615', variantId: '31341859930191' },
      { productId: '4384644989007', variantId: '31352740675663' },
      { productId: '8215276650748', variantId: '44844077777148' },
      { productId: '8210956222716', variantId: '44829321330940' },
      { productId: '8094250369276', variantId: '44472366858492' }
    ]
  },
  '7xdihijnnuambnr2': {
    id: '7607581016316',
    name: 'Merkury Innovations 1080p Camera',
    related: [
      { productId: '4850401181775', variantId: '32807658782799' },
      { productId: '4384644989007', variantId: '31352740675663' },
      { productId: '8215276650748', variantId: '44844077777148' },
      { productId: '8210956222716', variantId: '44829321330940' },
      { productId: '8094250369276', variantId: '44472366858492' }
    ]
  },
  bawdr6hlvis7yixw: {
    id: '7607581442300',
    name: 'Merkury Innovations A19 Light Bulb, 60W White (1-Pack)',
    related: [
      { productId: '4384644989007', variantId: '31352740675663' },
      { productId: '6628294262863', variantId: '39649036206159' },
      { productId: '8088106828028', variantId: '44449445314812' },
      { productId: '4821841969231', variantId: '32691873808463' },
      { productId: '8136411611388', variantId: '44629116879100' },
      { productId: '4850401181775', variantId: '32807658782799' }
    ]
  },
  clczbpnx3yimjbcw: {
    id: '4680310063183',
    name: 'Geeni Dot Smart Plug',
    related: [
      { productId: '4821841969231', variantId: '32691873808463' },
      { productId: '2434904391759', variantId: '21552685711439' },
      { productId: '6628294262863', variantId: '39649036206159' },
      { productId: '4660020936783', variantId: '32297298329679' },
      { productId: '8088246157564', variantId: '44449774993660' }
    ]
  },
  G4jwjOhQBYx5b5nw: {
    id: '7607582228732',
    name: 'Merkury Innovations A21 Multicolor Light Bulb',
    related: [
      { productId: '6628294262863', variantId: '39649036206159' },
      { productId: '8088106828028', variantId: '44449445314812' },
      { productId: '4821841969231', variantId: '32691873808463' },
      { productId: '8136411611388', variantId: '44629116879100' },
      { productId: '4850401181775', variantId: '32807658782799' }
    ]
  },
  k1okbbubwccmdcaq: {
    id: '4850423136335',
    name: 'Geeni Glimpse 1080p Camera',
    related: [
      { productId: '4821841969231', variantId: '32691873808463' },
      { productId: '8094251385084', variantId: '44472367775996' },
      { productId: '8305370693884', variantId: '45138686771452' },
      { productId: '4680370815055', variantId: '32334053310543' },
      { productId: '4850401181775', variantId: '32807658782799' },
      { productId: '8071365787900', variantId: '44401167565052' }
    ]
  },
  yk5dijqoa2oy341i: {
    id: '7607579148540',
    name: 'Merkury Innovations Indoor/Outdoor Symphony Light Strip (16 ft.)',
    related: [
      { productId: '4384644989007', variantId: '31352740675663' },
      { productId: '6628294262863', variantId: '39649036206159' },
      { productId: '8088106828028', variantId: '44449445314812' },
      { productId: '4821841969231', variantId: '32691873808463' },
      { productId: '8305370693884', variantId: '45138686771452' },
      { productId: '4850401181775', variantId: '32807658782799' }
    ]
  },
  szqueo9p61yifscy: {
    id: '7607578558716',
    name: 'Merkury Innovations Plug',
    related: [
      { productId: '4821841969231', variantId: '32691873808463' },
      { productId: '2434904391759', variantId: '21552685711439' },
      { productId: '6628294262863', variantId: '39649036206159' },
      { productId: '4660020936783', variantId: '32297298329679' },
      { productId: '8088246157564', variantId: '44449774993660' }
    ]
  },
  EeJJEptgHhZDScTD: {
    id: '485103206440',
    name: 'Geeni Spot Plug',
    related: [
      { productId: '4821841969231', variantId: '32691873808463' },
      { productId: '2434904391759', variantId: '21552685711439' },
      { productId: '6628294262863', variantId: '39649036206159' },
      { productId: '4660020936783', variantId: '32297298329679' },
      { productId: '8088246157564', variantId: '44449774993660' }
    ]
  },
  bwolocfvtdy3w2mk: {
    id: '7607580721404',
    name: 'Merkury Innovations 1080P Auto-Tracking Security Camera',
    related: [
      { productId: '4381945921615', variantId: '31341859930191' },
      { productId: '4384644989007', variantId: '31352740675663' },
      { productId: '8215276650748', variantId: '44844077777148' },
      { productId: '8210956222716', variantId: '44829321330940' },
      { productId: '8094250369276', variantId: '44472366858492' }
    ]
  },
  eysxtzvaflhxyzyf: {
    id: '4836701864015',
    name: 'Geeni Hawk 3 1080p Outdoor Camera',
    related: [
      { productId: '8607220203772', variantId: '45966877753596' },
      { productId: '8619661132028', variantId: '45995967611132' },
      { productId: '8088106828028', variantId: '44449445314812' },
      { productId: '4821841969231', variantId: '32691873808463' },
      { productId: '8305370693884', variantId: '45138686771452' },
      { productId: '4850401181775', variantId: '32807658782799' }
    ]
  },
  kcfw92tv9nworwl7: {
    id: '4836701864015',
    name: 'Geeni Hawk 3 1080p Outdoor Camera',
    related: [
      { productId: '8607220203772', variantId: '45966877753596' },
      { productId: '8619661132028', variantId: '45995967611132' },
      { productId: '8088106828028', variantId: '44449445314812' },
      { productId: '4821841969231', variantId: '32691873808463' },
      { productId: '8305370693884', variantId: '45138686771452' },
      { productId: '4850401181775', variantId: '32807658782799' }
    ]
  },
  // bewrshc1jvlfavl5: {
  //   id: '8212624900348',
  //   name: 'Hawk 2 Outdoor Camera',
  //   related: [
  //     { productId: '8607220203772', variantId: '45966877753596' },
  //     { productId: '8619661132028', variantId: '45995967611132' },
  //     { productId: '8088106828028', variantId: '44449445314812' },
  //     { productId: '4821841969231', variantId: '32691873808463' },
  //     { productId: '8305370693884', variantId: '45138686771452' },
  //     { productId: '4850401181775', variantId: '32807658782799' }
  //   ]
  // },
  a9wag4xbx6nhrxwy: {
    id: '2451361300559',
    name: 'Geeni Look - Indoor Camera',
    related: [
      { productId: '2451361300559', variantId: '21666897330255' },
      { productId: '6628294262863', variantId: '39649036206159' },
      { productId: '8088106828028', variantId: '44449445314812' },
      { productId: '4821841969231', variantId: '32691873808463' },
      { productId: '8305370693884', variantId: '45138686771452' },
      { productId: '4850401181775', variantId: '32807658782799' }
    ]
  },
  fp9pho5zcgw2harc: {
    id: '4850425430095',
    name: 'Geeni Scope 1080p Auto-Tracking Camera',
    related: [
      { productId: '8215276650748', variantId: '44844077777148' },
      { productId: '4384644989007', variantId: '31352740675663' },
      { productId: '4381945921615', variantId: '31341859930191' },
      { productId: '8210956222716', variantId: '44829321330940' },
      { productId: '8094250369276', variantId: '44472366858492' }
    ]
  }
}

let allProducts = null

async function initExp() {
  await waitFor(() => document.head && document.body, false, { ms: 25 })

  // await (() => window._dy_customer_logged_in.email, false, { ms: 20 })

  // const customerEmail = window._dy_customer_logged_in?.email
  // await waitFor(() => window.userEmail, false, { ms: 20 })

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'instant'
  })

  console.log('** InitExp **')
  document.head.appendChild(stylesEl)

  // TODO uncomment
  // applyDiscountCode('APPEXCLUSIVE10')
  // TODO CHECK
  // getAllProductsMarkup()

  // TODO
  if (location.pathname === '/' || location.pathname === '/index') {
    addMatches()
  }

  if (_$('body.template-product')) {
    waitFor(
      '.product__price-and-badge',
      () => {
        addPdpDiscount()
      },
      { ms: 100 }
    )

    waitFor(
      '.form__wrapper',
      () => {
        addBenefits()
      },
      { ms: 100 }
    )

    waitFor(
      '.wrapper--full-padded',
      () => {
        addBanner()
      },
      { ms: 100 }
    )
  }

  let initTime = localStorage.getItem(lavTimerKey)
  if (initTime) {
    const currentTime = Math.floor(Date.now() / 1000)
    let timeLeft = 20 * 60 - (currentTime - initTime)

    if (timeLeft <= 0) {
      return
    }
  }
  // todo if available
  initTimer()
  addSticky()
}

async function getAllProductsMarkup() {
  const productsArr = await Promise.all([
    parseHTML(1),
    parseHTML(2),
    parseHTML(3)
  ])

  const productElements = [
    ...productsArr[0],
    ...productsArr[1],
    ...productsArr[2]
  ]

  allProducts = productElements

  return productElements

  async function parseHTML(page) {
    const res = await fetch(`https://mygeeni.com/collections/all?page=${page}`)
    const data = await res.text()

    const parser = new DOMParser()
    const doc = parser.parseFromString(data, 'text/html')

    const products = doc.querySelectorAll('#AjaxinateLoop .product-grid-item')

    return products
  }
}

function addPdpDiscount() {
  _$('.product__price-and-badge').insertAdjacentHTML(
    'beforebegin',
    /* html */ `
      <div class='lav-pdp-discount'>
        <div class='lav-pdp-discount__icon'>
          ${getSvg('spark')}
        </div>
        <div class='lav-pdp-discount__caption'>Get -10 % off with code <span>APPEXCLUSIVE10</span></div>
      </div>
    `
  )
  // TODO event?
  // visibilityEvent('.lav-pdp-discount', () => {
  //   pushDataLayer('exp_promo_view_07', 'Get 09', 'view', 'Promo cod section')
  // })

  // _$('.lav-pdp-discount').addEventListener('click', () => {
  //   pushDataLayer(
  //     'exp_promo_button_04',
  //     'Get 10',
  //     'click',
  //     'Promo cod section'
  //   )
  // })
}

function addBenefits() {
  _$('.form__wrapper').insertAdjacentHTML(
    'afterbegin',
    /* html */ `
      <div class='lav-benefits'>
        <div class='lav-benefits__title'>Get second camera with -15% off directly from the manufacturer and enjoy all the benefits:</div>
        <div class='lav-benefits__list'>
          <div class='lav-benefits__item'>
            <div class='lav-benefits__icon'>
              ${getSvg('check')}
            </div>
            <div class='lav-benefits__caption'>Priority Support</div>
          </div>

          <div class='lav-benefits__item'>
            <div class='lav-benefits__icon'>
              ${getSvg('check')}
            </div>
            <div class='lav-benefits__caption'>Free Shipping</div>
          </div>

          <div class='lav-benefits__item'>
            <div class='lav-benefits__icon'>
              ${getSvg('check')}
            </div>
            <div class='lav-benefits__caption'>30-Day Easy Returns</div>
          </div>

          <div class='lav-benefits__item'>
            <div class='lav-benefits__icon'>
              ${getSvg('check')}
            </div>
            <div class='lav-benefits__caption'>1-Year Warranty</div>
          </div>
        </div>
      </div>
    `
  )
}

function addBanner() {
  const murkup = /* html */ `
    <div class='lav-banner'>
      ${getSvg('confetti')}
      <div class='lav-banner__title'>
        ${customerName ? `Hey, ${customerName}!` : ''}   You already own:
      </div>
      <div class='lav-banner__item'>
        <div class='lav-banner__item-image'>
          <img src='https://mygeeni.com/cdn/shop/products/GN-BW915-999_MAINwshadow.jpg?v=1680277370&width=220' />
        </div>
        <div class='lav-banner__item-caption'>
          Geeni Hawk 3 1080p Outdoor Smart Camera
        </div>
      </div>
      <div class='lav-banner__caption'>
        Get a second camera with a 
      </div>

      <div class='lav-banner__discount'>
        <img class='lav-banner__arrow' src='${
          config.dir
        }/img/banner-arrow.png' />

        <img class='lav-banner__coupon' src='${
          config.dir
        }/img/banner-coupon.png' />
      </div>
    </div>
  `

  _$('.back-navigation').insertAdjacentHTML('beforebegin', murkup)
}

function addSticky() {
  if (localStorage.getItem('stickyClosed5')) return

  const markup = /* html */ `
    <div class='lav-sticky'>
      <div class='lav-sticky__close'>
        ${getSvg('stickyClose')}
      </div>

      <div class='lav-sticky__icon'>
        <img src='${config.dir}/img/spark.svg' />
      </div>
      <div class='lav-sticky__info'>
        Get <span>-10 % off</span> with code <span>APPEXCLUSIVE10</span>
      </div>

      <div class='lav-sticky__timer lav-timer'>
        <div class='lav-timer__title'>Limited time offer</div>

        <div class='lav-timer__inner'>
          <div class='lav-timer__value lav-minutes'>
            <span class='lav-timer__digit'>-</span>
            <span class='lav-timer__digit'>-</span>
          </div>

          <div class='lav-timer__value lav-seconds'>
            <span class='lav-timer__digit'>-</span>
            <span class='lav-timer__digit'>-</span>
          </div>
        </div>
      </div>
    </div>
  `

  _$('body').insertAdjacentHTML('beforeend', markup)

  _$('body').classList.add('lav-sticky-wrapper')

  if (_$('.sticky-btn-wrapper')) {
    _$('.lav-sticky').classList.add('lav-sticky_pdp')
    _$('body').classList.add('lav-sticky-pdp-wrapper')
  }

  waitFor('.sticky-btn-wrapper', () => {
    _$('.lav-sticky').classList.add('lav-sticky_pdp')
    _$('body').classList.add('lav-sticky-pdp-wrapper')
  })

  _$('.lav-sticky__close').addEventListener('click', (e) => {
    e.preventDefault()
    localStorage.setItem('stickyClosed5', true)

    pushDataLayer('exp_promo_button_03', 'Close', 'click', 'Slide block')

    _$('.lav-sticky')?.classList.add('lav-sticky_hide')
    _$('body').classList.remove('lav-sticky-wrapper')
    _$('body').classList.remove('lav-sticky-pdp-wrapper')

    setTimeout(() => {
      _$('.lav-sticky')?.remove()
    }, 600)
  })
}

function applyDiscountCode(discountCode) {
  fetch(`/discount/${discountCode}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response) => {
      console.log('Response:', response)
      if (response.redirected) {
        // Redirect to the checkout page where the discount is applied
        // window.location.href = response.url;
      } else {
        // Handle failure to apply the discount
        console.log('Invalid discount code or could not apply the discount.')
      }
    })
    .catch((error) => console.error('Error:', error))
}

async function addMatches() {
  if (typeof userEmail !== 'string') return false

  const devices = await getDeviceList(userEmail)
  // const devices = []

  const userDevices = []

  Object.keys(deviceMap).forEach((key) => {
    if (devices.includes(key) || true) {
      deviceMap[key].pid = key
      userDevices.push(deviceMap[key])
    }
  })

  if (!userDevices.length) {
    _$('.lav-matches__preload')?.remove()
    return
  }

  await waitFor(() => allProducts, false, { ms: 20 })

  _$('.lav-matches__preload')?.remove()

  for (const device of userDevices) {
    if (_$$('.lav-device__item').length >= 4) break
    const el = document.createElement('div')
    el.classList.add('lav-device__item')
    el.dataset.productId = device.pid
    el.style.backgroundImage = `url(${config.dir}/img/products/${device.id}.${
      device.type || 'jpg'
    })`

    _$('.lav-device__list').insertAdjacentElement('beforeend', el)
  }
}

function initTimer() {
  const totalTime = 20 * 60

  let initTime = localStorage.getItem(lavTimerKey)
  const currentTime = Math.floor(Date.now() / 1000)

  if (!initTime) {
    initTime = currentTime
    localStorage.setItem(lavTimerKey, initTime)
  }

  let timeLeft = totalTime - (currentTime - initTime)

  function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60)
    const seconds = timeLeft % 60

    _$$('.lav-minutes').forEach((el) => {
      el.children[0].textContent = Math.floor(minutes / 10)
      el.children[1].textContent = minutes % 10
    })

    _$$('.lav-seconds').forEach((el) => {
      el.children[0].textContent = Math.floor(seconds / 10)
      el.children[1].textContent = seconds % 10
    })
  }

  function countdown() {
    if (timeLeft > 0) {
      timeLeft--
      updateTimerDisplay()
    } else {
      clearInterval(timerInterval) // Stop the timer when it reaches zero
      _$('.lav-modal.active')?.classList.add('lav-sticky_hide')
      _$('.lav-modal__inner.active')?.classList.add('lav-sticky_hide')
      _$('.lav-sticky')?.classList.add('lav-sticky_hide')
      _$('body').classList.remove('lav-sticky-wrapper')
      _$('body').classList.remove('lav-sticky-pdp-wrapper')
      setTimeout(() => {
        _$('.lav-sticky')?.remove()
      }, 600)
    }
  }

  updateTimerDisplay()
  const timerInterval = setInterval(countdown, 1000)
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
    threshold: 0.45,
    ...customConfig,
    timer: null
  }
  // console.log(el)
  initIntersection(
    el,
    ({ isIntersecting, target }, observer) => {
      // console.log(target, isIntersecting)
      if (isIntersecting) {
        // config.timer = setTimeout(() => {
        // if (isElementInViewport(target)) {
        cb()
        observer.disconnect()
        // }
        // }, 3000)
      } else {
        // clearTimeout(config.timer)
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

    console.log('** GA4 Event **', event)

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
    stickyClose: `
      <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
        <path d="M5.32465 4.50007L8.82914 0.995468C9.0572 0.767508 9.0572 0.398929 8.82914 0.17097C8.60118 -0.0569899 8.2326 -0.0569899 8.00464 0.17097L4.50004 3.67557L0.995548 0.17097C0.767482 -0.0569899 0.399009 -0.0569899 0.17105 0.17097C-0.0570166 0.398929 -0.0570166 0.767508 0.17105 0.995468L3.67554 4.50007L0.17105 8.00467C-0.0570166 8.23263 -0.0570166 8.6012 0.17105 8.82916C0.284656 8.94288 0.434031 9 0.583299 9C0.732567 9 0.881835 8.94288 0.995548 8.82916L4.50004 5.32456L8.00464 8.82916C8.11835 8.94288 8.26762 9 8.41689 9C8.56616 9 8.71542 8.94288 8.82914 8.82916C9.0572 8.6012 9.0572 8.23263 8.82914 8.00467L5.32465 4.50007Z" fill="white"/>
      </svg>
    `,
    closeModal: `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M11.8325 10.0001L19.6203 2.21215C20.1271 1.70557 20.1271 0.88651 19.6203 0.379933C19.1137 -0.126644 18.2947 -0.126644 17.7881 0.379933L10.0001 8.16793L2.21233 0.379933C1.70552 -0.126644 0.886688 -0.126644 0.380111 0.379933C-0.126704 0.88651 -0.126704 1.70557 0.380111 2.21215L8.16787 10.0001L0.380111 17.7881C-0.126704 18.2947 -0.126704 19.1138 0.380111 19.6204C0.632569 19.8731 0.964513 20 1.29622 20C1.62793 20 1.95963 19.8731 2.21233 19.6204L10.0001 11.8324L17.7881 19.6204C18.0408 19.8731 18.3725 20 18.7042 20C19.0359 20 19.3676 19.8731 19.6203 19.6204C20.1271 19.1138 20.1271 18.2947 19.6203 17.7881L11.8325 10.0001Z" fill="white"/>
      </svg>
    `,
    spark: `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="24" viewBox="0 0 16 24" fill="none">
        <path d="M14.7519 9.00055H9.34554L10.2457 1.39791C10.2487 1.36825 10.2516 1.27962 10.2516 1.25105C10.2516 0.561069 9.69053 0 9.00201 0C8.61051 0 8.23695 0.187512 7.98059 0.531038L0.250504 12.0007C0.0900934 12.2153 0 12.4823 0 12.7508C0 13.4408 0.561069 14.0004 1.24959 14.0004H5.66599L4.75371 22.6215C4.75078 22.6482 4.74931 22.7233 4.74931 22.7504C4.74931 23.4404 5.31038 24 5.9989 24C6.3904 24 6.76396 23.8125 7.013 23.4796L15.7495 10.9987C15.9099 10.7841 16 10.5171 16 10.2487C16.0015 9.56162 15.4419 9.00055 14.7519 9.00055Z" fill="white"/>
      </svg>
    `,
    check: `
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M6 0C2.69196 0 0 2.69196 0 6C0 9.30804 2.69196 12 6 12C9.30804 12 12 9.30804 12 6C12 2.69196 9.30804 0 6 0ZM10.0346 4.89174L5.74888 9.17745C5.58147 9.34487 5.36205 9.42857 5.14286 9.42857C4.92366 9.42857 4.70424 9.34487 4.53683 9.17745L1.9654 6.60603C1.63058 6.27121 1.63058 5.72879 1.9654 5.39397C2.30022 5.05915 2.84263 5.05915 3.17746 5.39397L5.14286 7.35938L8.82255 3.67969C9.15737 3.34487 9.69978 3.34487 10.0346 3.67969C10.3694 4.01451 10.3694 4.55692 10.0346 4.89174Z" fill="#023F88"/>
      </svg>
    `,
    confetti: `
      <svg class='lav-banner__confetti' xmlns="http://www.w3.org/2000/svg" width="60" height="75" viewBox="0 0 60 75" fill="none">
        <path d="M43.2858 25.2008C43.0023 24.8292 42.7155 24.4643 42.4322 24.1096C41.3319 22.7272 39.8181 21.7692 38.1627 21.1802C34.7105 19.9457 31.3362 20.5718 27.807 20.8138C25.9949 20.9368 24.0871 20.8922 22.4262 20.0543C22.1138 19.8981 21.818 19.7165 21.5337 19.5114C21.2962 18.8285 21.1261 18.1285 21.0166 17.3995C20.3415 12.8543 21.4029 7.89904 22.5954 3.54154C22.6708 3.26541 21.5555 2.00925 21.3822 1.75807C21.0912 1.34114 20.8002 0.924198 20.5076 0.510631C20.4539 0.438649 20.1195 0.0589416 20.1355 1.23058e-05C19.0422 3.98878 18.1609 8.32265 18.4169 12.4887C18.526 14.2851 18.9014 16.107 19.8488 17.6734C20.0573 18.0169 20.2811 18.3552 20.5081 18.6868C20.1978 18.665 21.9544 21.0842 22.0548 20.8953C22.4844 21.5132 22.9259 22.1327 23.4859 22.6389C26.1552 25.0478 29.9542 24.3992 33.1976 24.068C36.605 23.7208 40.2773 23.9655 43.1715 26.0252C43.3291 26.1352 43.4799 26.2504 43.6274 26.3723C43.7764 26.8034 43.8967 27.2415 43.9699 27.7068C44.2401 29.4065 44.0079 31.1411 43.588 32.7926C42.7374 36.153 41.0217 39.2173 40.2511 42.6041C39.8739 44.2722 39.686 46.0283 40.0155 47.7277C40.3926 49.6589 41.5711 51.1668 42.6813 52.7542C43.6478 54.1339 44.5569 55.4232 46.0191 56.3311C47.3941 57.184 48.9683 57.6709 50.5259 58.0706C54.4216 59.0705 58.2119 59.7146 61.4165 62.3509C62.0564 62.8751 62.6497 63.4517 63.2045 64.0638C63.3093 64.265 63.4106 64.4644 63.507 64.674C64.3865 66.5619 64.8818 68.5798 64.9765 70.6487C64.9815 70.7512 65.3061 71.1512 65.3234 71.1763C65.6078 71.5983 65.8988 72.0152 66.1863 72.4305C66.4773 72.8475 66.7683 73.2644 67.061 73.678C67.1355 73.7851 67.4296 74.0743 67.433 74.1886C67.2772 70.797 65.9633 67.9802 64.1812 65.2317C64.4373 65.4689 62.479 62.6054 62.5561 62.8807C60.6287 60.2573 58.4847 57.9748 55.3926 56.5904C52.2595 55.186 48.7589 54.979 45.5643 53.7616C44.4637 53.3425 43.5406 52.793 42.6762 52.0969C42.6209 51.9157 42.5706 51.7327 42.5289 51.5497C42.3328 50.7036 42.2753 49.8331 42.311 48.9705C42.4491 45.4175 44.0427 42.2395 45.2233 38.9647C46.3599 35.8062 47.28 32.121 45.6841 28.9209C45.289 28.128 44.8044 27.3456 44.2794 26.5854C43.943 26.0796 43.5206 25.4903 43.2757 25.2042L43.2858 25.2008Z" fill="url(#paint0_linear_72_1747)"/>
        <defs>
          <linearGradient id="paint0_linear_72_1747" x1="35.6465" y1="42.6728" x2="49.0005" y2="33.398" gradientUnits="userSpaceOnUse">
            <stop stop-color="#A89100"/>
            <stop offset="0.08" stop-color="#BCA10E"/>
            <stop offset="0.2" stop-color="#D9B823"/>
            <stop offset="0.32" stop-color="#EEC832"/>
            <stop offset="0.44" stop-color="#FAD23B"/>
            <stop offset="0.56" stop-color="#FFD63F"/>
            <stop offset="0.64" stop-color="#FAD23B"/>
            <stop offset="0.74" stop-color="#ECC731"/>
            <stop offset="0.85" stop-color="#D6B521"/>
            <stop offset="0.95" stop-color="#B79D0B"/>
            <stop offset="1" stop-color="#A89100"/>
          </linearGradient>
        </defs>
      </svg>
    `,
    arrow: `
      <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47" fill="none">
        <path d="M6.10596 32.0073C6.52263 32.4366 6.80636 32.9961 6.90469 33.5824C6.90473 33.5827 6.90478 33.5829 6.90482 33.5832L5.42541 33.8309L12.5701 36.7289C13.1806 36.4018 13.9105 36.697 14.1998 37.3889C14.4885 38.0808 14.2273 38.908 13.6175 39.2359C12.9889 39.573 12.3724 39.9252 11.7574 40.2765C10.5191 40.9839 9.28654 41.6881 7.97094 42.2594M6.10596 32.0073C5.8663 32.563 5.63055 33.1288 5.39894 33.7049C5.22631 33.0248 4.6201 32.5929 3.99459 32.7274C3.33126 32.8709 2.8958 33.5972 3.02166 34.349C3.13165 35.0034 3.20164 35.7642 3.27509 36.5626C3.34849 37.3605 3.42534 38.1958 3.549 38.9998C3.74286 40.2615 4.05174 41.4503 4.56026 42.3889C4.70855 42.6628 5.04564 43.1055 5.73212 43.0669C6.12563 43.0448 7.77274 42.3455 7.97094 42.2594M6.10596 32.0073C5.51474 31.3981 4.65587 31.0509 3.67923 31.2609L3.6775 31.2613C2.08542 31.6057 1.31026 33.211 1.54225 34.5967L1.54241 34.5976C1.64118 35.1853 1.70646 35.8855 1.78133 36.6993L1.78331 36.7209C1.85546 37.5052 1.93579 38.3784 2.0664 39.2276L42.2238 3.00171C42.144 1.50384 42.1429 1.50389 42.1418 1.50396L42.1407 1.50402C42.1405 1.50403 42.1403 1.50404 42.14 1.50405L42.1391 1.50411L42.1319 1.50452L42.1107 1.50581C42.0937 1.50689 42.0706 1.50845 42.0418 1.51058C41.9841 1.51485 41.9032 1.52145 41.8001 1.53131C41.5941 1.55104 41.2996 1.58382 40.926 1.63713C40.1789 1.74372 39.1143 1.93251 37.8071 2.26343C35.1932 2.92511 31.6026 4.15674 27.6405 6.44023C20.4277 10.5972 12.0615 18.1966 6.10596 32.0073ZM7.97094 42.2594L8.56843 43.6353M7.97094 42.2594L8.56849 43.6352C8.56847 43.6353 8.56845 43.6353 8.56843 43.6353M8.56843 43.6353C8.45621 43.684 7.97595 43.8884 7.46707 44.0857C7.21364 44.184 6.93727 44.2867 6.68879 44.3684C6.50726 44.4281 6.1442 44.5461 5.81637 44.5646L5.81618 44.5646C4.27562 44.651 3.50564 43.5913 3.24137 43.1034M8.56843 43.6353L3.24137 43.1034M3.24137 43.1034C3.24133 43.1034 3.2413 43.1033 3.24127 43.1033L4.5602 42.389L3.24137 43.1034Z" fill="url(#paint0_linear_72_1752)" stroke="#02428E" stroke-width="3"/>
        <defs>
          <linearGradient id="paint0_linear_72_1752" x1="23.2543" y1="3" x2="23.2543" y2="43.0693" gradientUnits="userSpaceOnUse">
            <stop offset="0.085" stop-color="#F7E6B2"/>
            <stop offset="0.31" stop-color="#ECCB60"/>
            <stop offset="0.525" stop-color="#F7E6B2"/>
            <stop offset="0.73" stop-color="#ECCB5F"/>
            <stop offset="1" stop-color="#F7E6B2"/>
          </linearGradient>
        </defs>
      </svg>
    `,
    coupon: ``
  }

  return svgObj[name]
}
