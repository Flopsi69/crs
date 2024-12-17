const config = {
  dir: 'https://flopsi69.github.io/crs/geeni/discount10Off',
  clarity: ['set', 'exp_promo', 'variant_1'],
  debug: false
}

// Styles for Experiment
//  iframe#launcher chat
// additional-functional inclusion
const styles = /* css */ `
  .go1272136950 + [role="dialog"], .needsclick [style="display: flex; z-index: 90000; position: fixed; left: 0px; top: 0px; width: 100%; height: 100%; justify-content: center; align-items: center; overflow: auto; background-color: rgba(0, 0, 0, 0.41); animation-timing-function: ease; animation-play-state: running; animation-iteration-count: 1; animation-fill-mode: forwards; animation-delay: 0s; animation-duration: 0.35s; animation-name: klaviyo-fadein;"] {
    display: none!important;
  }
  .template-index .top-amazon, .template-index .warranty-sale-custom{
    margin-bottom: 0;
    display: none!important;
  }
  iframe#launcher {
    margin-right: 10px!important;
  }
  .additional-functional {
    display: none!important;
  }
  


  // Block Sticky
  





  // Block PDP Discount
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

`
// `
// .product__price-and-badge .product__price {
//   padding-top: 5px!important;
// }
// `

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

let fitSplide

let allProducts = null

async function initExp() {
  document.head.appendChild(stylesEl)

  if (location.pathname === '/' || location.pathname === '/index') {
    getAllProductsMarkup()
    connectSplide()
    addMatches()
  }

  let initTime = localStorage.getItem('initTime5')
  if (initTime) {
    const currentTime = Math.floor(Date.now() / 1000)
    let timeLeft = 20 * 60 - (currentTime - initTime)

    if (timeLeft <= 0) {
      return
    }
  }
}

// TODO after deploy
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
}

async function addMatches() {
  if (typeof userEmail !== 'string') return false

  const devices = await getDeviceList(userEmail)

  const userDevices = []

  Object.keys(deviceMap).forEach((key) => {
    if (devices.includes(key)) {
      deviceMap[key].pid = key
      userDevices.push(deviceMap[key])
    }
  })

  if (!userDevices.length) {
    _$('.lav-matches__preload')?.remove()
    return
  }

  let isFirstRender = true

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

    el.addEventListener('click', () => {
      if (el.classList.contains('active')) return

      sessionStorage.setItem('choosenFitDevice', device.pid)

      _$('.lav-fit__slider .splide__list').innerHTML = ''

      _$('.lav-device__title span').textContent = device.name

      _$('.lav-device__item.active')?.classList.remove('active')
      el.classList.add('active')

      device.related.forEach((product) => {
        const findEl = allProducts.find(
          (item) => item.dataset.productId == product.productId
        )

        if (!findEl) return

        const el = document.createElement('li')
        el.classList.add('splide__slide', 'lav-fit__slide')
        // el.textContent = findEl.title
        el.innerHTML = findEl.outerHTML

        _$('.lav-fit__slider .splide__list').insertAdjacentElement(
          'beforeend',
          el
        )

        if (!isFirstRender && fitSplide) {
          fitSplide.refresh()
        }
      })
    })

    _$('.lav-device__list').insertAdjacentElement('beforeend', el)
  }

  const choosenFitDeviceEl = _$(
    `.lav-device__item[data-product-id="${sessionStorage.getItem(
      'choosenFitDevice'
    )}"]`
  )

  if (choosenFitDeviceEl) {
    choosenFitDeviceEl.click()
  } else {
    sessionStorage.removeItem('choosenFitDevice')
    _$('.lav-device__item').click()
  }

  waitFor(
    () => typeof Splide == 'function',
    () => {
      fitSplide = new Splide('.lav-fit__slider', {
        autoWidth: true,
        arrows: false,
        pagination: false,
        gap: 8
      })

      const bar = fitSplide.root.querySelector('.lav-fit__bar')

      fitSplide.on('mounted move refresh', function () {
        var end = fitSplide.Components.Controller.getEnd() + 1
        var rate = Math.min((fitSplide.index + 1) / end, 1)
        bar.style.left = String(100 * rate) + '%'
        bar.style.width =
          parseInt(100 / fitSplide.Components.Slides.get().length) + '%'
      })

      fitSplide.mount()

      isFirstRender = false
    }
  )
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

// Slider
function connectSplide() {
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

// Svg objects
function getSvg(name) {
  const svgObj = {
    spark: `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="24" viewBox="0 0 16 24" fill="none">
        <path d="M14.7519 9.00055H9.34554L10.2457 1.39791C10.2487 1.36825 10.2516 1.27962 10.2516 1.25105C10.2516 0.561069 9.69053 0 9.00201 0C8.61051 0 8.23695 0.187512 7.98059 0.531038L0.250504 12.0007C0.0900934 12.2153 0 12.4823 0 12.7508C0 13.4408 0.561069 14.0004 1.24959 14.0004H5.66599L4.75371 22.6215C4.75078 22.6482 4.74931 22.7233 4.74931 22.7504C4.74931 23.4404 5.31038 24 5.9989 24C6.3904 24 6.76396 23.8125 7.013 23.4796L15.7495 10.9987C15.9099 10.7841 16 10.5171 16 10.2487C16.0015 9.56162 15.4419 9.00055 14.7519 9.00055Z" fill="white"/>
      </svg>
    `
  }

  return svgObj[name]
}
