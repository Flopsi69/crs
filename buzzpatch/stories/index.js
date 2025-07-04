console.debug('*** Experiment started ***')

// Config for Experiment
const config = {
  // dir: 'http://127.0.0.1:5500/buzzpatch/stories',
  dir: 'https://flopsi69.github.io/crs/buzzpatch/stories',
  clarity: ['set', 'exp_buzzpatch_7', 'variant_1'],
  debug: false
}

// const orig = console.log
// console.log = function (...args) {
//   orig.apply(console, ['Debug:', ...args])
// }

// Styles for Experiment
const styles = /* css */ `
  .js-heading .hand-banner .learn-now, .js-heading+.wave-bg {
    display: none!important;
  }
  #LoveBuzzPatch {
    padding-top: 0;
  }
  .lav-shipping {
    background: #FEEDD6;
    text-align: center;
    padding: 10px;
    color: #000;
    font-size: 13px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0.6px;
    margin-bottom: 20px;
    margin-top: -5px;
  }

  .lav-shorts {
    padding-top: 25px;
    overflow: auto;
  }
  .lav-shorts__title {
    padding: 0 15px;
    text-align: center;
    color: #0C0B0B;
    font-family: "DINEngschrift LT";
    font-size: 30px;
    font-weight: 400;
    line-height: 36px;
  }
  .lav-shorts__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
    padding: 0 15px 10px;
    margin-top: 12px;
  }

  .lav-short {
    flex-shrink: 0;
  }
  .lav-short__video {
    position: relative;
    height: 140px;
    border-radius: 16px;
    background: #FF3C81;
    background: linear-gradient(135deg, rgba(255, 60, 129, 1) 0%, rgba(245, 167, 62, 1) 100%);
    padding: 2px;
    line-height: 0;
  }
  .lav-short__video svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .lav-short__video img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 14px;
  }
  .lav-short__title {
    color: #000;
    text-align: center;
    font-size: 12px;
    font-weight: 700;
    line-height: 16px;
    margin-top: 8px;
  }
  .lavm-arrow {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100px;
    display: block !important;
    z-index: 9;
  }
  .lavm-arrow__left {
    left: 0;
  }
  .lavm-arrow__right {
    right: 0;
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

  initModal()
  addModal()
  addFreeShippingBanner()
  addShorts()
}

const lavShortsConfig = [
  {
    id: 1,
    title: 'How It Works',
    videos: [
      `${config.dir}/img/how-it-works-1.mp4`,
      `${config.dir}/img/how-it-works-2.mp4`,
      `${config.dir}/img/how-it-works-3.mp4`,
      `${config.dir}/img/how-it-works-4.mp4`
    ]
  },
  {
    id: 2,
    title: 'Real Reviews, Real Results',
    videos: [`${config.dir}/img/review1.mp4`, `${config.dir}/img/review2.mp4`]
  },
  {
    id: 3,
    title: 'Science',
    videos: [`${config.dir}/img/science.mp4`]
  }
]

function openModal(id) {
  pushDataLayer('exp_buzz_v7_view_01', 'Stories', 'view', 'Stories')
  _$('.lavm-video__item.active')?.classList.remove('active')
  _$('.lavm-video__group.active')?.classList.remove('active')
  playGroupVideo(id)

  Modal.open('.lav-shorts__modal')
}

function addModal() {
  const modalHTML = /* html */ `
    <div class='lavm-control'>
      <div class='lavm-pagination'></div>
      <div class='lav-modal__close'>
        ${getSvg('close')}
      </div>
    </div>

    <div class='lavm-arrow lavm-arrow__left'></div>
    <div class='lavm-arrow lavm-arrow__right'></div>

    <div class='lavm-video'>
    </div>

    <div class='lavm__btn'>
      Get it now!
    </div>
  `

  new Modal('lav-shorts__modal', modalHTML)

  lavShortsConfig.forEach((videoConfig) => {
    _$('.lavm-pagination').insertAdjacentHTML(
      'beforeend',
      /* html */ `<div data-id='${videoConfig.id}' style="--my-width: 0%"/>
        <span>${videoConfig.title}</span>
      </div>`
    )

    fillVideoShorts(videoConfig)
  })

  _$('.lavm-arrow__left').addEventListener('click', () => {
    pushDataLayer('exp_buzz_v7_click_03', 'Click', 'click', 'Stories')
    playPrevVideo()
  })

  _$('.lavm-arrow__right').addEventListener('click', () => {
    pushDataLayer('exp_buzz_v7_click_03', 'Click', 'click', 'Stories')
    playNextVideo()
  })

  _$('.lavm__btn').addEventListener('click', () => {
    Modal.close()
    pushDataLayer('exp_buzz_v7_click_04', 'Get it now', 'click', 'Stories')
    _$('#purchase').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })

  function fillVideoShorts(videoConfig) {
    const group = document.createElement('div')
    group.classList.add('lavm-video__group')
    group.dataset.groupId = videoConfig.id

    videoConfig.videos.forEach((src, id) => {
      group.insertAdjacentHTML(
        'beforeend',
        /* html */ `
        <video class="lavm-video__item" src="${src}" data-id='${id}' playsinline></video>
      `
      )
    })

    group.querySelectorAll('.lavm-video__item').forEach((videoEl) => {
      videoEl.addEventListener('play', (e) => {
        _$$('.lavm-video__item').forEach((otherVideo) => {
          if (otherVideo !== videoEl && !otherVideo.paused) {
            otherVideo.pause()
          }
        })
      })
      videoEl.addEventListener('ended', (e) => {
        e.stopPropagation()
        playNextVideo()
      })
    })

    _$('.lavm-video').appendChild(group)
  }

  addSwipeListener(_$('.lav-modal__inner'), playNextVideo, playPrevVideo)
}

function addSwipeListener(el, onSwipeLeft, onSwipeRight) {
  let touchStartX = 0
  let touchEndX = 0

  el.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX
  })

  el.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX
    handleSwipe()
  })

  function handleSwipe() {
    const delta = touchEndX - touchStartX
    const threshold = 80 // Minimum swipe distance in px

    // console.log('Swipe detected:', { delta, threshold })

    if (Math.abs(delta) > threshold) {
      if (delta < 0) {
        pushDataLayer('exp_buzz_v7_swipe', 'Swipe', 'other', 'Stories')
        onSwipeLeft?.() // Swipe left
      } else {
        pushDataLayer('exp_buzz_v7_swipe', 'Swipe', 'other', 'Stories')
        onSwipeRight?.() // Swipe right
      }
    }
  }
}

function playNextVideo() {
  const currentVideo = _$('.lavm-video__item.active')
  currentVideo.classList.remove('active')
  const nextVideo = currentVideo.nextElementSibling

  if (!currentVideo || !nextVideo) {
    const nextGroupId =
      parseInt(_$('.lavm-video__group.active').dataset.groupId) + 1
    playGroupVideo(nextGroupId)
    return
  }

  nextVideo.classList.add('active')
  nextVideo.currentTime = 0
  nextVideo.play()

  handlePagination()
}

function playPrevVideo() {
  const currentVideo = _$('.lavm-video__item.active')
  const prevVideo = currentVideo.previousElementSibling

  if (!currentVideo || !prevVideo) {
    const prevGroupId =
      parseInt(_$('.lavm-video__group.active').dataset.groupId) - 1
    if (prevGroupId < 1) return

    playGroupVideo(prevGroupId)
    return
  }

  currentVideo.classList.remove('active')
  prevVideo.classList.add('active')
  prevVideo.currentTime = 0
  prevVideo.play()

  handlePagination()
}

function playGroupVideo(groupId) {
  const activeGroup = _$(`.lavm-video__group[data-group-id="${groupId}"]`)

  if (!activeGroup) {
    Modal.close()
    return
  }

  _$('.lavm-video__group.active')?.classList.remove('active')

  const firstVideo = activeGroup.querySelector('.lavm-video__item')

  activeGroup.classList.add('active')
  firstVideo.classList.add('active')
  firstVideo.currentTime = 0
  firstVideo.play()

  handlePagination()
}

function handlePagination() {
  const id = parseInt(_$('.lavm-video__group.active').dataset.groupId)

  _$('.lavm-pagination .active[data-id]')?.classList.remove('active')

  _$$('.lavm-pagination [data-id]').forEach((el, index) => {
    if (index + 1 === id) {
      const videosLength = _$$('.lavm-video__group.active video').length
      const activeVideo = _$('.lavm-video__group.active video.active').dataset
        .id
      const progress = (100 / videosLength) * (parseInt(activeVideo) + 1)
      el.style.setProperty('--my-width', `${progress}%`)
      el.classList.add('active')
    }

    if (index + 1 < id) {
      el.style.setProperty('--my-width', '100%')
    }

    if (index + 1 > id) {
      el.style.setProperty('--my-width', '0%')
    }
  })
}

function addShorts() {
  const shortsHtml = /* html */ `
    <div class="lav-shorts">
      <div class="lav-shorts__title">See BuzzPatch in Real Life</div>
      <div class="lav-shorts__list">
        <div class="lav-short" data-id="1">
          <div class="lav-short__video">
            ${getSvg('play')}
            <img src="${config.dir}/img/short-placeholder-1.png">
          </div>
          <div class="lav-short__title">How It Works</div>
        </div>

        <div class="lav-short" data-id="2">
          <div class="lav-short__video">
            ${getSvg('play')}
            <img src="${config.dir}/img/short-placeholder-2.png">
          </div>
          <div class="lav-short__title">Real Reviews, Real Results</div>
        </div>

        <div class="lav-short" data-id="3">
          <div class="lav-short__video">
            ${getSvg('play')}
            <img src="${config.dir}/img/short-placeholder-3.png">
          </div>
          <div class="lav-short__title">Backed by Science</div>
        </div>
      </div>
    </div>
  `

  _$('#LoveBuzzPatch').insertAdjacentHTML('beforebegin', shortsHtml)

  _$$('.lav-short').forEach((shortEl) => {
    shortEl.addEventListener('click', () => {
      const name = shortEl.querySelector('.lav-short__title').textContent.trim()
      pushDataLayer(
        'exp_buzz_v7_click_01',
        name,
        'click',
        'See BuzzPatch in Real Life'
      )
      openModal(shortEl.dataset.id)
    })
  })
}

function addFreeShippingBanner() {
  const bannerHtml = /* html */ `
    <div class="lav-shipping">
      FREE shipping | 30-day Money Back Guarantee
    </div>
  `

  _$('.js-heading .hand-banner').insertAdjacentHTML('beforeend', bannerHtml)
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
        if (e.target.classList.contains('lav-modal')) this.close()

        if (e.target.closest('.lav-modal__close')) {
          pushDataLayer('exp_buzz_v7_click_02', 'close', 'click', 'Stories')
          this.close()
        }

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
      _$('.lavm-video__item.active')?.classList.remove('active')
      _$('.lavm-video__group.active')?.classList.remove('active')
      _$$('.lavm-video__item').forEach((video) => {
        if (!video.paused) {
          video.pause()
        }
      })

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
        z-index: 999999999999;
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
        background: #000;
        max-width: 100%;
        width: 100%;
        height: 100%;
        display: none;
        margin: auto;
      }
      .lav-modal__inner.active {
        display: block;
      }
      [data-modal] {
        cursor: pointer;
      }
      .lav-modal-open {
        overflow: hidden;
      }

      .lav-modal__close {
        position: absolute;
        padding: 10px;
        z-index: 20;
        right: 10px;
        top: 23px;
        cursor: pointer;
        transition: 0.35s;
        line-height: 0;
      }
      @media(hover:hover) {
        .lav-modal__close:hover {
          opacity: 0.5;
        }
      }

      .lavm-control {
        position: relative;
        z-index: 10;
        padding: 15px 20px;
      }
      .lavm-pagination {
        display: flex;
        gap: 4px;
      }
      .lavm-pagination [data-id] {
        position: relative;
        border-radius: 100px;
        background: #FFF;
        height: 6px;
        flex: 1;
        min-width: 0;
      }
      .lavm-pagination [data-id]:last-child span {

      }
      .lavm-pagination [data-id]:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        border-radius: 100px;
        background: #FF3C81;
        width: var(--my-width);
        transition: .4s;
      }
      .lavm-pagination span {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        opacity: 0;
        transition: .3s;
        position: relative;
        color: #FFF;
        font-size: 14px;
        font-weight: 700;
        line-height: 16px;
        top: 19px;
        pointer-events: none;
        width: 100%;
        display: block;
      }
      .lavm-pagination .active[data-id] span {
        opacity: 1;
      }
      .lavm__btn {
        height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        z-index: 10;
        left: 0;
        right: 0;
        bottom: 25px;
        margin: auto;
        border-radius: 500px;
        background: #FF3C81;
        box-shadow: 0px 4px 15px 0px rgba(72, 67, 69, 0.51);
        color: #FFF;
        padding: 5px 10px 0;
        max-width: 210px;
        text-align: center;
        font-family: "DIN Condensed";
        font-size: 24px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0.48px;
        text-transform: uppercase;
      }
      .lavm-video {
        line-height: 0;
      }
      .lavm-video:before, .lavm-video:after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        height: 85px;
        z-index: 8;
        pointer-events: none;
      }
      .lavm-video:before {
        top: 0;
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.60) 100%);
      }
      .lavm-video:after {
        bottom: 0;
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.00) 100%);
      }
      .lavm-video__group {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        display: none;
      }
      .lavm-video__item {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .lavm-video__item.active {
        z-index: 5;
      }
      .lavm-video__group.active {
        display: block;
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
  const svgObj = {
    play: `
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
        <foreignObject x="-4" y="-4" width="44" height="44"><div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(2px);clip-path:url(#bgblur_0_855_477_clip_path);height:100%;width:100%"></div></foreignObject><circle data-figma-bg-blur-radius="4" cx="18" cy="18" r="18" fill="black" fill-opacity="0.4"/>
        <path d="M26.0651 19.7733L15.0098 26.2396C13.6765 27.0194 12 26.0578 12 24.5132V11.5069C12 9.95786 13.6851 8.99685 15.0183 9.78555L26.0737 16.3256C27.3864 17.1022 27.3817 19.0033 26.0651 19.7733Z" fill="#D9D9D9"/>
        <defs>
          <clipPath id="bgblur_0_855_477_clip_path" transform="translate(4 4)"><circle cx="18" cy="18" r="18"/>
        </clipPath></defs>
      </svg>
    `,
    close: `
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M17 1.00024L1.00024 17" stroke="white" stroke-width="2" stroke-linecap="round"/>
        <path d="M17 16.9998L1.00025 0.999999" stroke="white" stroke-width="2" stroke-linecap="round"/>
      </svg>
    `
  }

  return svgObj[name]
}
