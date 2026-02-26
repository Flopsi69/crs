console.debug('*** Experiment started ***')

// Config for Experiment
const config = {
  // dir: 'http://127.0.0.1:5500/houseofworktops/reels',
  dir: 'https://flopsi69.github.io/crs/houseofworktops/reels',
  clarity: ['set', '', 'variant_1'],
  debug: true
}

// const orig = console.log
// console.log = function (...args) {
//   orig.apply(console, ['Debug:', ...args])
// }

// Styles for Experiment
const styles = /* css */ `
  .lav-reels {
    color: #212529;
    padding: 65px 15px 110px;
    background: url(${config.dir}/img/reels-bg.svg) repeat rgba(219, 137, 48, 0.1);
    background-size: cover;
  }
  .lav-reels__title {
    text-align: center;
    font-size: 28px;
    line-height: 1.5;
  }
  .lav-reels__caption {
    margin-top: 10px;
    text-align: center;
    font-size: 20px;
    line-height: 1.5;
  }
  .lav-reels__slider {
    margin-top: 53px;
  }
  
  /* Custom Pagination Container */
  .lav-reels__nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-top: 45px;
  }
  .lav-reels__nav-arrow {
    width: 32px;
    height: 32px;
    background: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
    transition: opacity 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .lav-reels__nav-arrow svg {
    fill: #000;
    width: 20px;
    height: 20px;
  }
  @media(hover:hover) {
    .lav-reels__nav-arrow:hover:not(:disabled) {
      opacity: 0.7;
    }
  }
  .lav-reels__nav-arrow:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
  .lav-reels__dots {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .lav-reels__dot {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: transparent;
    border: 1px solid #000;
    cursor: pointer;
    transition: all 0.3s ease;
    padding: 0;
  }
  .lav-reels__dot.is-active {
    background: #000;
    border-color: #000;
  }
  @media(hover:hover) {
    .lav-reels__dot:hover:not(.is-active) {
      opacity: 0.7;
    }
  }
`

const stylesEl = document.createElement('style')
stylesEl.classList.add('exp-styles')
stylesEl.innerHTML = styles

// *** Logic *** //
initExp()

async function initExp() {
  await waitFor(() => document.head && document.body, false, { ms: 20 })

  document.head.appendChild(stylesEl)

  console.debug('** InitExp **')

  connectSplide();
  addReelsSection();
}

async function addReelsSection() {
  const markup = /* html */ `
    <div class="lav-reels">
      <div class="lav-reels__container container">
        <div class="lav-reels__title">Trusted by 10,000+ Homeowners, Joiners  & Furniture Makers</div>
        <div class="lav-reels__caption">Discover why the UK’s finest craftsmen and families choose House of Worktops</div>

        <div class="splide lav-reels__slider" role="group" aria-label="Splide Basic HTML Example">
          <div class="splide__track">
            <ul class="splide__list lav-reels__list">
              <li class="splide__slide">Slide 01</li>
              <li class="splide__slide">Slide 02</li>
              <li class="splide__slide">Slide 03</li>
              <li class="splide__slide">Slide 04</li>
            </ul>
          </div>
          
          <div class="lav-reels__nav">
            <button class="lav-reels__nav-arrow lav-reels__nav-prev" aria-label="Previous slide">
              <svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
            </button>
            <div class="lav-reels__dots"></div>
            <button class="lav-reels__nav-arrow lav-reels__nav-next" aria-label="Next slide">
              <svg viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  `

  _$('.content-section.bg-pattern-dark').insertAdjacentHTML('beforebegin', markup)

  for (let i = 0; i < 7; i++) {
    const slideEl = addSlides(i + 1)
    _$('.lav-reels__list').appendChild(slideEl)
  }
  
  initSplide()

  function addSlides(index) {
    const slideEl = document.createElement('li')
    slideEl.classList.add('splide__slide', 'lav-reels__slide')
    slideEl.innerHTML = /* html */ `
      <picture class="lav-reels__slide-picture">
        <source srcset="${config.dir}/media/media${index}-avif.avif" type="image/avif">
        <img src="${config.dir}/media/media${index}-avif.gif">
      </picture>
    `
    return slideEl
  }
        // <source srcset="${config.dir}/media/media${index}-avif.webp" type="image/webp">

  async function initSplide() {
    await waitFor(() => typeof Splide === 'function')

    const splide = new Splide('.splide', {
      // type: 'loop',
      pagination: false,
      arrows: false,
      perPage: 2,
      gap: '12px',
      // autoplay: false,
      // pauseOnHover: true,
      // pauseOnFocus: true,
    }).mount();

    // Create custom pagination dots
    const dotsContainer = _$('.lav-reels__dots');
    const slides = splide.Components.Slides.get();
    
    slides.forEach((slide, index) => {
      const dot = document.createElement('button');
      dot.className = 'lav-reels__dot';
      dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
      if (index === 0) dot.classList.add('is-active');
      
      dot.addEventListener('click', () => {
        splide.go(index);
      });
      
      dotsContainer.appendChild(dot);
    });

    // Update active dot on slide change
    splide.on('moved', (newIndex) => {
      _$$('.lav-reels__dot').forEach((dot, i) => {
        dot.classList.toggle('is-active', i === newIndex);
      });
    });

    // Connect custom arrows
    _$('.lav-reels__nav-prev').addEventListener('click', () => {
      splide.go('<');
    });
    
    _$('.lav-reels__nav-next').addEventListener('click', () => {
      splide.go('>');
    });
  }
}

// *** Utils *** //
function initModal() {
  class Modal {
    static list = []
    constructor(name, html) {
      if (!_$('.lav-modal')) {
        this.constructor.init()
      }

      if (this.constructor.list.find((item) => item.name === name)) {
        console.warn('Modal with this name already exists')
        return
      }

      this.el = document.createElement('div')
      this.el.classList.add('lav-modal__inner', name)
      this.name = name
      this.el.innerHTML = html

      _$('.lav-modal').insertAdjacentElement('beforeend', this.el)

      this.constructor.list.push(this)
    }

    static init() {
      document.body.insertAdjacentHTML(
        'beforeend',
        "<div class='lav-modal'></div>"
      )

      document.addEventListener('click', (e) => {
        if (
          e.target.classList.contains('lav-modal') ||
          e.target.closest('.lav-modal__close')
        )
          this.close()

        if (e.target.dataset.modal) {
          this.open(e.target.dataset.modal)
        } else if (e.target.closest('[data-modal]')) {
          this.open(e.target.closest('[data-modal]').dataset.modal)
        }
      })

      this.addStyles()
    }

    static open(modalName, cb) {
      document.body.classList.add('lav-modal-open')

      if (_$('.lav-modal__inner.active')) {
        _$('.lav-modal__inner.active').classList.remove('active')
      }

      _$(modalName).classList.add('active')

      if (typeof cb === 'function') cb()

      setTimeout(() => {
        _$('.lav-modal').classList.add('active')
      }, 100)
    }

    static close(cb) {
      document.body.classList.remove('lav-modal-open')

      _$('.lav-modal')?.classList.remove('active')

      if (typeof cb === 'function') cb()

      setTimeout(() => {
        _$('.lav-modal__inner.active')?.classList.remove('active')
      }, 400)
    }

    static addStyles() {
      const styles = /* css */ `
      .lav-modal {
        position: fixed;
        z-index: 999;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(0,0,0,.1);
        backdrop-filter: blur(3px);
        -webkit-backdrop-filter: blur(3px);
        transition: 0.35s;
        opacity: 0;
        pointer-events: none;
        padding: 15px;
        overflow-y: auto;
        max-height: 100%;
        display: flex;
      }
      .lav-modal.active {
        opacity: 1;
        pointer-events: auto;
      }
      .lav-modal__inner {
        position: relative;
        background: #fff;
        max-width: 380px;
        width: 100%;
        display: none;
        margin: auto;
      }
      .lav-modal__inner.active {
        display: block;
      }
      .lav-modal__close {
        cursor: pointer;
        transition: 0.35s;
        line-height: 0;
      }
      [data-modal] {
        cursor: pointer;
      }
      @media(hover:hover) {
        .lav-modal__close:hover {
          opacity: 0.5;
        }
      }
      .lav-modal-open {
        overflow: hidden;
      }
    `

      const stylesEl = document.createElement('style')
      stylesEl.classList.add('exp-modal')
      stylesEl.innerHTML = styles
      document.head.appendChild(stylesEl)
    }
  }

  window.Modal = Modal
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
  const svgObj = {}

  return svgObj[name]
}
