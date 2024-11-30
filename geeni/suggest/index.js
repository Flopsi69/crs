;(function () {
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
    // dir: 'http://127.0.0.1:5500/geeni/suggest',
    dir: 'https://flopsi69.github.io/crs/geeni/suggest',
    clarity: ['set', 'direct_app_users', 'variant_1'],
    debug: false
  }

  // Styles for Experiment
  const styles = /* css */ `
  iframe#launcher {
    margin-right: 10px!important;
  }
  .btn--scroll-top {
    display: none!important
  }

  .lav-loader__wrap {
    display: flex;
    z-index: 999999;
    transition: .3s;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.75);
  }
  .lav-loader {
    width: 60px;
    aspect-ratio: 1;
    border-radius: 50%;
    border: 8px solid #02b5ef;
    animation:
      l20-1 0.8s infinite linear alternate,
      l20-2 1.6s infinite linear;
  }
  @keyframes l20-1{
    0%    {clip-path: polygon(50% 50%,0       0,  50%   0%,  50%    0%, 50%    0%, 50%    0%, 50%    0% )}
    12.5% {clip-path: polygon(50% 50%,0       0,  50%   0%,  100%   0%, 100%   0%, 100%   0%, 100%   0% )}
    25%   {clip-path: polygon(50% 50%,0       0,  50%   0%,  100%   0%, 100% 100%, 100% 100%, 100% 100% )}
    50%   {clip-path: polygon(50% 50%,0       0,  50%   0%,  100%   0%, 100% 100%, 50%  100%, 0%   100% )}
    62.5% {clip-path: polygon(50% 50%,100%    0, 100%   0%,  100%   0%, 100% 100%, 50%  100%, 0%   100% )}
    75%   {clip-path: polygon(50% 50%,100% 100%, 100% 100%,  100% 100%, 100% 100%, 50%  100%, 0%   100% )}
    100%  {clip-path: polygon(50% 50%,50%  100%,  50% 100%,   50% 100%,  50% 100%, 50%  100%, 0%   100% )}
  }
  @keyframes l20-2{ 
    0%    {transform:scaleY(1)  rotate(0deg)}
    49.99%{transform:scaleY(1)  rotate(135deg)}
    50%   {transform:scaleY(-1) rotate(0deg)}
    100%  {transform:scaleY(-1) rotate(-135deg)}
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
    margin: 0 -20px 15px;
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
    odrhfd5d0ak2fp3b: {
      id: '7752466858236',
      name: 'Merkury Innovations 720P Camera',
      type: 'webp',
      relate: 'products/aware-1080p-hd-smart-wi-fi-security-camera-white',
      priority: 2
    },
    '7xdihijnnuambnr2': {
      id: '7607581016316',
      name: 'Merkury Innovations 1080p Camera',
      relate: 'products/aware-1080p-hd-smart-wi-fi-security-camera-white',
      priority: 3
    },
    bawdr6hlvis7yixw: {
      id: '7607581442300',
      name: 'Merkury Innovations A19 Light Bulb, 60W White (1-Pack)',
      relate:
        'products/prisma-800-60w-equivalent-color-and-white-dimmable-white-a21-smart-led-light-bulb-2-pack',
      priority: 7,
      category: 'bulb'
    },
    clczbpnx3yimjbcw: {
      id: '4680310063183',
      name: 'Geeni Dot Smart Plug',
      relate:
        'products/geeni-gn-ww217-199-dot-smart-wi-fi-plug-2-pack-pack-of-2-white',
      priority: 9,
      category: 'plug'
    },
    G4jwjOhQBYx5b5nw: {
      id: '7607582228732',
      name: 'Merkury Innovations A21 Multicolor Light Bulb',
      relate:
        'products/geeni-smart-light-bulb-prisma-1050-75w-a21-e26-dimmable',
      priority: 10,
      category: 'bulb'
    },
    k1okbbubwccmdcaq: {
      id: '4850423136335',
      name: 'Geeni Glimpse 1080p Camera',
      relate: 'products/glimpse-1080p-hd-smart-security-camera-white',
      priority: 4
    },
    yk5dijqoa2oy341i: {
      id: '7607579148540',
      name: 'Merkury Innovations Indoor/Outdoor Symphony Light Strip (16 ft.)',
      relate: 'products/5m-prisma-symphony-rgb-led-strip-light',
      priority: 11,
      category: 'light strip'
    },
    szqueo9p61yifscy: {
      id: '7607578558716',
      name: 'Merkury Innovations Plug',
      relate:
        'products/geeni-gn-ww217-199-dot-smart-wi-fi-plug-2-pack-pack-of-2-white',
      priority: 12,
      category: 'plug'
    },
    EeJJEptgHhZDScTD: {
      id: '485103206440',
      name: 'Geeni Spot Plug',
      relate:
        'products/geeni-gn-ww217-199-dot-smart-wi-fi-plug-2-pack-pack-of-2-white',
      priority: 13,
      category: 'plug'
    },
    bwolocfvtdy3w2mk: {
      id: '7607580721404',
      name: 'Merkury Innovations 1080P Auto-Tracking Security Camera',
      relate: 'products/smart-2k-auto-follow-camera',
      // 'collections/pan-tilt-zoom-cameras/products/smart-2k-auto-follow-camera',
      priority: 14
    },
    eysxtzvaflhxyzyf: {
      id: '4836701864015',
      name: 'Geeni Hawk 3 1080p Outdoor Camera',
      relate:
        'products/hawk-3-1080p-hd-outdoor-smart-wi-fi-security-camera-white',
      priority: 5
    },
    kcfw92tv9nworwl7: {
      id: '4836701864015',
      name: 'Geeni Hawk 3 1080p Outdoor Camera',
      relate:
        'products/hawk-3-1080p-hd-outdoor-smart-wi-fi-security-camera-white',
      priority: 5
    },
    bewrshc1jvlfavl5: {
      id: '8136411611388',
      name: 'Geeni Prisma A21 Smart Bulb - Multicolor and Warm White',
      relate: 'products/prisma1050-smart-wi-fi-led-color-ligh',
      priority: 6,
      category: 'bulb'
    },
    a9wag4xbx6nhrxwy: {
      id: '2451361300559',
      name: 'Geeni Look - Indoor Camera',
      relate: 'products/geeni-gn-cw008-101-look-1080p-wi-fi-camera-black',
      priority: 1
    },
    fp9pho5zcgw2harc: {
      id: '4850425430095',
      name: 'Geeni Scope 1080p Auto-Tracking Camera',
      relate:
        'products/scope-1080p-hd-smart-auto-tracking-security-camera-white',
      priority: 15
    }
  }

  async function initExp() {
    await waitFor(() => document.head && document.body, false, { ms: 25 })

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    })

    console.log('** InitExp **')
    document.head.appendChild(stylesEl)

    // TODO uncomment
    // applyDiscountCode('APPEXCLUSIVE10')

    // TODO
    if (location.href.includes('pages/app-index')) {
      if (!sessionStorage.getItem('userDevicesHyp')) {
        getUserDevices()
      }

      addLoader()
    }

    if (_$('body.template-product')) {
      if (!sessionStorage.getItem('userDevicesHyp')) {
        getUserDevices()
      }

      waitFor(
        () => sessionStorage.getItem('userDevicesHyp'),
        () => {
          const userDevices = JSON.parse(
            sessionStorage.getItem('userDevicesHyp')
          )

          if (!userDevices?.length) return

          const findDevice = userDevices.find((device) =>
            location.href.includes(device.relate)
          )

          if (!findDevice) return

          waitFor('.form__wrapper', () => {
            addBenefits(findDevice)
          })

          waitFor('.wrapper--full-padded', () => {
            addBanner(findDevice)
          })
        }
      )

      waitFor('.lav-pdp-discount', () => {
        visibilityEvent('.lav-pdp-discount', () => {
          pushDataLayer(
            'exp_direct_app__discount_banner',
            'Element on screen',
            'view',
            'First screen (discount banner)'
          )
        })
      })
    }

    waitFor('.lav-sticky', () => {
      visibilityEvent('.lav-sticky', () => {
        pushDataLayer(
          'exp_direct_app__sticky__get_10_discount',
          'Element on screen',
          'view',
          'Sticky banner. Get discount with code'
        )
      })

      _$('.lav-sticky__close').addEventListener('click', () => {
        pushDataLayer(
          'exp_direct_app__sticky__close',
          'Close banner',
          'click',
          'Sticky banner. Get discount with code'
        )
      })
    })
  }

  async function getUserDevices() {
    if (typeof userEmail !== 'string') return false

    const devices = await getDeviceList(userEmail)

    const userDevices = []

    Object.keys(deviceMap).forEach((key) => {
      if (devices.includes(key)) {
        deviceMap[key].pid = key
        userDevices.push(deviceMap[key])
      }
    })

    sessionStorage.setItem('userDevicesHyp', JSON.stringify(userDevices))

    return userDevices
  }

  function addBenefits() {
    _$('.form__wrapper').insertAdjacentHTML(
      'afterbegin',
      /* html */ `
      <div class='lav-benefits'>
        <div class='lav-benefits__title'>Get second camera with -10% off directly from the manufacturer and enjoy all the benefits:</div>
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

    visibilityEvent('.lav-benefits', () => {
      pushDataLayer(
        'exp_direct_app__get_second_item',
        'Element on screen',
        'view',
        'Get second item directly from the manufacturer and enjoy all the benefits:'
      )
    })
  }

  function addBanner(findDevice) {
    const murkup = /* html */ `
      <div class='lav-banner'>
        ${getSvg('confetti')}
        <div class='lav-banner__title'>
          ${customerName ? `Hey, ${customerName}!` : ''}   You already own:
        </div>
        <div class='lav-banner__item'>
          <div class='lav-banner__item-image'>
            <img src='${config.dir}/img/products/${findDevice.id}.${
      findDevice.type || 'jpg'
    }' />
          </div>
          <div class='lav-banner__item-caption'>
            ${findDevice.name}
          </div>
        </div>
        <div class='lav-banner__caption'>
          Get a second ${
            findDevice.category ? findDevice.category : 'camera'
          } with a 
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

    visibilityEvent('.lav-banner', () => {
      pushDataLayer(
        'exp_direct_app__discount_banner',
        'Element on screen',
        'view',
        'First screen (discount banner)'
      )
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

  function addLoader() {
    _$('body').insertAdjacentHTML(
      'afterbegin',
      /* html */ `
      <div class='lav-loader__wrap'>
        <div class='lav-loader'></div>
      </div>
    `
    )

    waitFor(
      () => {
        return sessionStorage.getItem('userDevicesHyp')
      },
      () => {
        const devices = JSON.parse(sessionStorage.getItem('userDevicesHyp'))
        console.log('device loaded', devices)

        if (
          !devices?.length ||
          sessionStorage.getItem('lav-firstRedirectTriggered')
        ) {
          _$('.lav-loader__wrap').remove()
          return
        }

        const device = devices.sort((a, b) => a.priority - b.priority)[0]

        if (!device?.relate) {
          _$('.lav-loader__wrap').remove()
          return
        }

        console.log('redirect to', '/' + device.relate)

        sessionStorage.setItem('lav-firstRedirectTriggered', true)

        location.href = '/' + device.relate
        // _$('.lav-loader__wrap').remove()
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
    `
    }

    return svgObj[name]
  }
})()
