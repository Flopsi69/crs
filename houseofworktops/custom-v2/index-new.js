(function () {
  console.debug('*** Experiment started ***')

  // Config for Experiment
  const config = {
    // dir: 'http://127.0.0.1:5500/houseofworktops/sizeSelector',
    dir: 'https://flopsi69.github.io/crs/houseofworktops/customization',
    clarity: ['set', 'exp_custom_size_flow', 'variant_1'],
    debug: true,
    isDisableLayer: false,
    atcConfig: {
      price: '',
      oldPrice: '', 
      products: ''
    }
  }

  const targetUrls = [
    '/beige-gold-compact',
    '/bella-bianche-compact',
    '/lucida-white-compact',
    '/pure-black-compact',
    '/crystal-spark-compact',
    '/magma-rodolit-compact',
    '/black-gold-compact',
    '/cloudy-cement-compact-laminate',
    '/carrera-marble-compact-(white-core)',
    // '/carrara-solid-surface',
    '/oak-worktop',
    '/walnut-worktop',
    '/prime-oak-worktop',
    '/full-stave-deluxe-oak-worktop',
    '/full-stave-deluxe-rustic-oak-worktop',
    '/prime-beech-worktop',
    // '/iroko-worktop',
    // '/black-oak-worktop'
  ]

  const upsellConfig = {
    'Compact Laminate Installation Kit': config.dir + '/img/laminate.jpg',
    'Spectra Seal 290ml - Colour Matched': config.dir + '/img/spectra.jpg',
    'Upstand - 3M x 95mm x 12mm': config.dir + '/img/upstand.jpg',
    'Upstand - 2M x 80mm x 20mm': config.dir + '/img/upstand.jpg',
    'Upstand 3M x 100mm x 12mm': config.dir + '/img/upstand.jpg',
    'Upstand - 3M x 80mm x 20mm': config.dir + '/img/upstand.jpg',
    'Upstand - 4.2M x 95mm x 12mm': config.dir + '/img/upstand.jpg',
    'Splashback - 3M x 600 x 6mm': config.dir + '/img/splashback600.jpg',
    'Splashback - 3M x 600mm x 6mm': config.dir + '/img/splashback600.jpg',
    'Splashback - 3M x 600 x 12mm': config.dir + '/img/splashback600.jpg',
    'Splashback - 3M x 600mm x 12mm': config.dir + '/img/splashback600.jpg',
    'Splashback - 3M x 1300 x 2mm': config.dir + '/img/splashback1300.jpg',
    'Splashback - 3M x 1300mm x 2mm': config.dir + '/img/splashback1300.jpg',
    'Splashback - 3M x 645 x 2mm': config.dir + '/img/splashback600.jpg',
    'Splashback - 3M x 645mm x 2mm': config.dir + '/img/splashback600.jpg',
    'Plinth - 3M x 150mm x 12mm': config.dir + '/img/plinth.jpg',
    'Plinth - 3M x 150mm x 20mm': config.dir + '/img/plinth.jpg',
  }


  // const orig = console.log
  // console.log = function (...args) {
  //   orig.apply(console, ['Debug:', ...args])
  // }

  // Styles for Experiment
  const styles = /* css */ `
    
  `

  const stylesEl = document.createElement('style')
  stylesEl.classList.add('exp-styles')
  stylesEl.innerHTML = styles

  // *** Logic *** //
  initExp()

  async function initExp() {
    await waitFor(() => document.head && document.body, false, { ms: 20 })
    if (location.href.includes('route=checkout/checkout')) {
      handleCheckoutImages();
      return;
    } else if (location.href.includes('route=checkout/cart')) {
      handleCheckoutCartImages();
      return;
    }

    const isValidProduct = targetUrls.some(targetUrl => {
      const idx = location.href.indexOf(targetUrl)
      return idx !== -1 && location.href[idx + targetUrl.length] !== '-'
    })

    if (!isValidProduct) {
      handleCartImages();
      return;
    }

    await waitFor(() => _$('#product-options-modal .select-size-row'), false, { ms: 20 })

    if (!_$('#product-options-modal .select-size-row')) return

    document.head.appendChild(stylesEl)

    console.debug('** InitExp **')

    if (!_$('#select-size')) return

    // _$$('#select-size span').forEach(el => {
    //   el.innerText = 'Step1: Choose Worktop Size'
    // })

    if (_$('#select-size')) {
      updateAccessoryOptions();
      handleAtcImages();
    }


    handleCartImages();

    return
  }

  function updateAccessoryOptions() {
    const accessoryOptions = _$$('.select-size-row[data-type="accessory"]');

    if (!accessoryOptions.length) return;


    const isValidProduct = targetUrls.some(targetUrl => {
      return location.href.includes(targetUrl)
    });

    accessoryOptions.forEach(option => {
      const title = option.querySelector('.h6')?.textContent.trim() || '';
      const imageSrc = isValidProduct && upsellConfig[title] ? upsellConfig[title] : null;

      if (imageSrc) {
        _$('.product-option-name', option).insertAdjacentHTML('beforebegin', /* html */ `
          <img src="${imageSrc}" alt="${title}" class="lav-accessory__image">
        `)
      }
    });
  }

  function handleCartImages() {
    initMutation('#cart .dropdown-menu', (node) => {
      if (node.classList?.contains('no-border-last')) {
        setTimeout(() => {
          updateImages();
        }, 500);
      }
    })

    waitFor(() => {
      return _$$('#cart .dropdown-menu .row.border-bottom').length || _$$('#cart-panel .row.border-bottom').length
    }, updateImages )
    updateImages();

    function updateImages() {
      const desktopItems = _$$('#cart .dropdown-menu .row.border-bottom');
      const mobileItems = _$$('#cart-panel .row.border-bottom');
      const allItems = [...desktopItems, ...mobileItems];
      if (!allItems.length) return;

      allItems.forEach(item => {
        const imageEl = _$('a>img', item);
        const link = _$('a', item)?.href;
        const isValidProduct = targetUrls.some(targetUrl => {
          return link?.includes(targetUrl)
        });
        if (!imageEl || !isValidProduct) return;

        let type = _$('.cart-product-name small', item)?.innerText?.split('|')[0].trim();
        if (!type) return;
        const imgSrc = upsellConfig[type];
        // console.log('Updating cart image for type:', type, imgSrc);
        if (imgSrc && imageEl.src !== imgSrc) {
          imageEl.src = imgSrc;
        }
      })
    }
  }

  function handleCheckoutCartImages() {
    const summaryItems = _$$('#accordion-summary .product-info');
    const editorItems = _$$('.product-wrapper>.product-info');
    // const mobileItems = _$$('#cart-panel .row.border-bottom');
    // const allItems = [...desktopItems, ...mobileItems];
    summaryItems.forEach(item => {
      const imageEl = _$('a>img', item);
      const link = _$('a', item)?.href;
      const isValidProduct = targetUrls.some(targetUrl => {
        return link?.includes(targetUrl)
      });
      if (!imageEl || !isValidProduct) return;

      let type = _$('.text-gray-600.small', item)?.innerText?.replace(/\s*\([^)]*\)/g, '').trim();
      const imgSrc = upsellConfig[type];

      if (imgSrc && imageEl.src !== imgSrc) {
        imageEl.src = imgSrc;
      }
    })

    editorItems.forEach(item => {
      const imageEl = _$('a>img', item);
      const link = _$('a', item)?.href;
      const isValidProduct = targetUrls.some(targetUrl => {
        return link?.includes(targetUrl)
      });
      if (!imageEl || !isValidProduct) return;

      let type = _$('.prod-description .text-gray-600', item)?.innerText?.replace('Worktop Size: ', '').trim();
      const imgSrc = upsellConfig[type];

      if (imgSrc && imageEl.src !== imgSrc) {
        imageEl.src = imgSrc;
      }
    })
  }

  function handleCheckoutImages() {
    const items = _$$('.product-info');
    if (!items.length) return;

    items.forEach(item => {
      const imageEl = _$('.product-info a>img', item);
      const link = _$('.product-info a', item)?.href;
      const isValidProduct = targetUrls.some(targetUrl => {
        return link?.includes(targetUrl)
      });
      if (!imageEl || !isValidProduct) return;

      let type = _$('.text-gray-600.small', item)?.innerText?.replace(/\s*\([^)]*\)/g, '').trim();
      const imgSrc = upsellConfig[type];
      if (imgSrc && imageEl.src !== imgSrc) {
        imageEl.src = imgSrc;
      }
    })
  }

  function handleAtcImages() {
    const isValidProduct = targetUrls.some(targetUrl => {
      return location.href.includes(targetUrl)
    });

    handleLayout();
    update();

    const observer = new MutationObserver((mutationsList, observer) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          if (mutation.target.classList.contains('show')) {
            update();
            handleLayout();
          }
        }
      }
    });

    observer.observe(_$('#added-modal-with-accessories-2'), { attributes: true })

    function update() {
      if (!isValidProduct) return;
      _$$(`.added-modal-accessories .variants-container>div`).forEach(el => {
        const img = _$('.position-relative>img', el);
        let productName = _$('.variant-name-type', el)?.textContent?.trim();
        if (!productName) {
          const type = _$('.variant-title', el)?.textContent?.trim().split(' - ')[1];
          productName = type + ' - ' +_$('.dimension + div', el)?.innerText?.trim().replaceAll('\n', ' x ').replace(/(\d)m\b/g, (_, n) => n + 'M')
        }

        const imagesSrc = upsellConfig[productName];

        if (imagesSrc && productName && img && img.src !== imagesSrc) {
          img.src = imagesSrc;
        }
      });
    }

    function handleLayout() {
      console.log('handle')
      _$$('.added-modal-accessories .variants-container>div').forEach(el => { 
        _$('.confirm-popup-details > .mb-0', el).insertAdjacentElement('beforeend', _$('.quantity-display', el).closest('.col'));

        _$('.confirm-popup-details > .mb-0 > .col-5', el).classList.add('lav-product-price');
        _$('.confirm-oiling-addon', el).insertAdjacentElement('beforebegin', _$('.lav-product-price', el))
      });
    }
  }

  // *** Utils *** //
  function formatPrice(price, isGetMoneyFormat = false) {
    if (!price) return '';

    // If it's already a number, keep it
    let numericPrice;

    if (typeof price === 'number') {
      numericPrice = price;
    } else {
      // Remove everything except digits, dot, and comma
      const cleaned = price.replace(/[^\d.,-]/g, '');

      // Convert comma thousands → remove commas
      numericPrice = parseFloat(cleaned.replace(/,/g, ''));
    }

    if (isNaN(numericPrice)) return '';

    // Return formatted money if needed
    if (isGetMoneyFormat) {
      return new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP',
      }).format(numericPrice);
    }

    return numericPrice;
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
        // console.log(target, isIntersecting);
        if (isIntersecting) {
          config.timer = setTimeout(() => {
            if (isElementInViewport(target)) {
              cb()
              observer.disconnect()
            }
          }, 3000)
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
  function pushDataLayer(name = '', desc = '', type = '', loc = '', loc2 = undefined) {
    window.dataLayer = window.dataLayer || []

    try {
      const event = {
        event: 'event-to-ga4',
        event_name: name,
        event_desc: desc,
        event_type: type,
        event_loc: loc,
        event_loc2: loc2
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
  function getSvg(name) {
    const svgObj = {
      'plus': /* svg */ `
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
          <rect x="6.1875" width="11" height="1.375" transform="rotate(90 6.1875 0)" fill="white"/>
          <rect y="4.8125" width="11" height="1.375" fill="white"/>
        </svg>
      `,
      'minus': /* svg */ `
        <svg width="11" height="1" viewBox="0 0 11 1" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="11" height="1" fill="white"/>
        </svg>
      `,
      'dropdown': /* svg */ `
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
          <path d="M2.05078 2.91016C1.81641 2.67578 1.5332 2.55859 1.20117 2.55859C0.869141 2.55859 0.585938 2.67578 0.351563 2.91016C0.117188 3.14453 5.9608e-07 3.42773 5.67053e-07 3.75977C5.38026e-07 4.0918 0.117188 4.375 0.351563 4.60938L6 10.2461L11.6484 4.60938C11.8828 4.375 12 4.0918 12 3.75977C12 3.42774 11.8828 3.14453 11.6484 2.91016C11.4141 2.67578 11.1309 2.55859 10.7988 2.55859C10.4668 2.55859 10.1836 2.67578 9.94922 2.91016L6 6.85938L2.05078 2.91016Z" fill="currentColor"/>
        </svg>
      `,
      'close-popup': `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
          <g clip-path="url(#clip0_993_815)">
            <path d="M13.062 11.9636L16.284 15.1856C16.428 15.3296 16.5 15.5096 16.5 15.7256C16.5 15.9296 16.428 16.1036 16.284 16.2476C16.14 16.3916 15.96 16.4636 15.744 16.4636C15.54 16.4636 15.366 16.3916 15.222 16.2476L12 13.0256L8.778 16.2476C8.634 16.3916 8.454 16.4636 8.238 16.4636C8.034 16.4636 7.86 16.3916 7.716 16.2476C7.572 16.1036 7.5 15.9296 7.5 15.7256C7.5 15.5096 7.572 15.3296 7.716 15.1856L10.938 11.9636L7.716 8.74165C7.596 8.58565 7.542 8.41765 7.554 8.23765C7.566 8.04565 7.638 7.88365 7.77 7.75165C7.914 7.60765 8.076 7.52965 8.256 7.51765C8.448 7.50565 8.622 7.55965 8.778 7.67965L12 10.9016L15.222 7.67965C15.318 7.55965 15.432 7.47562 15.564 7.42762C15.696 7.37962 15.834 7.37362 15.978 7.40962C16.122 7.44562 16.242 7.51765 16.338 7.62565C16.446 7.72165 16.518 7.84165 16.554 7.98565C16.59 8.12965 16.584 8.26765 16.536 8.39965C16.488 8.53165 16.404 8.64565 16.284 8.74165L13.062 11.9636Z" fill="#212529"/>
            <path d="M21 0.638672H3C1.55025 0.638672 0.375 1.81392 0.375 3.26367V21.2637C0.375 22.7134 1.55025 23.8887 3 23.8887H21C22.4497 23.8887 23.625 22.7134 23.625 21.2637V3.26367C23.625 1.81392 22.4497 0.638672 21 0.638672Z" stroke="#212529" stroke-width="0.75"/>
          </g>
          <defs>
            <clipPath id="clip0_993_815">
              <rect width="24" height="24.75" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      `
    }

    return svgObj[name]
  }
})()