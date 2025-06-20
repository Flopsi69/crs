console.debug('*** Experiment started ***')

// Config for Experiment
const config = {
  dir: 'http://127.0.0.1:5500/sonno/redesign',
  // dir: 'https://flopsi69.github.io/crs/sonno/redesign',
  clarity: ['set', 'pdp_imp_2', 'variant_1'],
  debug: true
}

// const orig = console.log
// console.log = function (...args) {
//   orig.apply(console, ['Debug:', ...args])
// }

// Styles for Experiment
const styles = /* css */ `
  .lav-trust {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 12px;
  }
  .lav-trust__bought {
    display: flex;
    align-items: center;
    gap: 8px;
    border-radius: 12px;
    background: #E0FEE5;
    padding: 6px 12px 6px 6px;
    color: #1E3851;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  }
  .lav-trust__made {
    display: flex;
    align-items: center;
    gap: 11px;
    color: #1E3851;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
    padding-right: 25px;
  }

  .lav-info {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 16px;
    margin-top: 18px;
  }
  .lav-benefits {
    display: grid;
    gap: 8px;
  }
  .lav-benefits__item {
    display: flex;
    align-items: center;
    gap: 12px;
    color: #1E3851;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;

  }
  .lav-benefits__image {
    line-height: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 18px;
  }
  .lav-coupon {
    position: relative;
    border-radius: 12px;
    background: #14324B;
    text-align: center;
    color: #fff;
    max-width: 140px;
    width: 100%;
  }
  .lav-coupon:before {
    content: '';
    position: absolute;
    z-index: 1;
    background: #fff;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    left: -9px;
    top: 50%;
    transform: translateY(-50%);
  }
  .lav-coupon:after {
    content: '';
    position: absolute;
    z-index: 1;
    background: #fff;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    right: -9px;
    top: 50%;
    transform: translateY(-50%);
  }
  .lav-coupon__section {
    padding: 7px;
  }
  .lav-coupon__section span {
    color: #F89201;
  }
  .lav-coupon__top {
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    padding-left: 2px;
    padding-right: 2px;
  }
  .lav-coupon__top:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 1px;
    border-top: 1px dashed #416B93;
  }
  .lav-coupon__bottom {
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
  }

  .lav-free-delivery {
    border-radius: 12px;
    background: #EAF5FF;
    padding: 6px 4px;
    color: #14324B;
    text-align: center;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    margin-top: 18px;
  }
  .lav-free-delivery__free {
    text-decoration: underline;
  }
  .lav-free-delivery__date {
    color: #F89201;
  }

  .lav-feedback {
    border-radius: 12px;
    background: rgba(254, 240, 224, 0.76);
    padding: 16px;
    margin-top: 18px;
    margin-bottom: -8px;
  }
  .lav-feedback__head {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  .lav-feedback__title {
    color: #0D283E;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 21px;
    letter-spacing: 0.65px;
  }
  .lav-feedback__head img {
    max-width: 100px;
  }
  .lav-feedback__descr {
    margin-top: 8px;
    color: #132A3F;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0.65px;
  }

  .lav-review {
    display: flex;
    gap: 8px;
    border-radius: 12px;
    background: rgba(254, 240, 224, 0.76);
    padding: 16px;
    margin-top: 18px;
  }
  .lav-review__head {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .lav-review__title {
    color: #0D283E;
    font-size: 14px;
    font-weight: 600;
    line-height: 21px;
    letter-spacing: 0.65px;
  }
  .lav-review__head img {
    max-width: 100px;
  }
  .lav-review__descr {
    margin-top: 12px;
    color: #132A3F;
    font-size: 13px;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: 0.65px;
  }
  .lav-review__all {
    flex-shrink: 0;
    width: 80px;
    text-align: center;
  }
  .lav-review__all img {
    border-radius: 6px;
  }
  .lav-review__all-link {
    color: #0D283E;
    font-size: 12px;
    font-weight: 500;
    line-height: 21px;
    text-decoration: underline;
    cursor: pointer;
    margin-top: 8px;
  }
  .footer-add-cart {
    margin-left: 3px;
    margin-right: 3px;
    margin-top: 18px;
  }
  .card-addons.primary.mt-5 {
    margin-top: 0;
  }
  .footer-add-cart .mb-7 {
    margin-bottom: 18px;
  }

  .lav-delivery {
    border-radius: 8px;
    background: rgba(165, 211, 255, 0.24);
    padding: 16px 20px;
    margin-top: 32px;
  }
  .lav-delivery__title {
    color: #000;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.4px;
  }
  .lav-delivery__timeline {
    margin-top: 12px;
    display: grid;
  }
  .lav-delivery__item {
    position: relative;
    padding-left: 32px;
    padding-bottom: 18px;
  }
  .lav-delivery__item:before {
    content: '';
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    width: 20px;
    height: 20px;
    border: 3px solid #fff;
    border-radius: 50%;
    background: #F89201;
  }
  .lav-delivery__item:after {
    content: '';
    position: absolute;
    left: 7px;
    top: 2px;
    bottom: 0;
    width: 6px;
    height: 100%;
    background: #F89201;
    border-radius: 6px;
  }
  .lav-delivery__item:last-child {
    padding-bottom: 0;
  }
  .lav-delivery__item:last-child:after {
    background: #EDD7B3;
    top: 0;
  }
  .lav-delivery__item-title {
    color: #000;
    font-size: 14px;
    font-weight: 500;
    line-height: 21.85px;
  }
  .lav-delivery__item-subtitle {
    color: #000;
    font-size: 12px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0.364px;
    margin-top: 1px;
  }
  .lav-delivery__item-caption {
    color: #1E3851;
    font-size: 12px;
    font-weight: 300;
    line-height: 16px;
  }
  .estimate-delivery-wrapper {
    display: none;
  }
  body:not(.lav-body-mattresses) .card-addons:not(.primary):not(.added):not(.lav-addon) {
    display: none;
  }
  .lav-addon + .lav-addon {
    margin-top: 20px;
  }
  .product-multi-part {
    padding-bottom: 18px;
  }
  .about-payment-details.mbl {
    padding: 0;
    margin-top: 16px;
    margin-bottom: 0;
  }

  .product-details > div.w-full.overflow-hidden.relative {
    overflow: visible;
  }
  .product-details > div.w-full.overflow-hidden.relative .relative > .absolute {
    display: none;
  }
  .product-details > div.w-full.overflow-hidden.relative .absolute.top-5.left-0 {
    top: 10px;
  }
  .lav-splide {
    margin-left: -14px;
    margin-right: -14px;
  }
  .lav-splide .splide__slide {
    width: 94%;
    border-radius: 8px;
    overflow: hidden;
  }
  .lav-splide .splide__slide a > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 0!important;
  }
  .lav-splide .splide__slide video {
    border-radius: 0!important;
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
  }
  .lav-splide .splide__slide video {
  }
  .lav-splide .bg-primary {
    z-index: 1;
    transition: .3s;
    pointer-events: none;
  }
  
  .lav-splide-thumbs {
    margin-top: 14px;
    margin-left: -14px;
    margin-right: -14px;
  }
  .lav-splide-thumbs .splide__slide {
    border: 2px solid white;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    transition: boxShadow .3s;
  }
  .lav-splide-thumbs .splide__track {
    padding-top: 2px;
    padding-bottom: 2px;
  }
  .lav-splide-thumbs .splide__slide.is-active {
    box-shadow: 0px 0px 0px 2px #F89201;
  }
  .lav-splide-thumbs .splide__slide img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .lav-splide-thumbs .splide__slide video {
    border-radius: 0!important;
  }
  .lav-splide-thumbs .splide__slide .bg-primary {
    width: 20px;
    height: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
  .lav-scroll-slider {
    position: absolute;
    width: 40px;
    z-index: 1;
    pointer-events: none;
    right: 8px;
    bottom: 12px;
  }
  #productImagesCarousel {
    display: none;
  }
  .lav-body-mattresses .lav-feedback {
    margin-top: 13px;
    margin-bottom: 32px;
  }
  .lav-body-mattresses .footer-add-cart .mb-7 {
    margin-bottom: 32px;
  }
  .lav-body-mattresses .slect-mattresses-size .price-pro {
    margin-top: 18px;
  }
  .pswp img {
    border-radius: 8px;
  }
`

const stylesEl = document.createElement('style')
stylesEl.classList.add('exp-styles')
stylesEl.innerHTML = styles

// *** Logic *** //
initExp()

async function initExp() {
  await waitFor(() => document.head && document.body, false, { ms: 20 })

  console.debug('** InitExp **')

  if (!_$('.product-details')) {
    console.log('Product details not found')
    return
  }

  window.lavProductType = null
  waitFor(
    () => item?.Categories,
    () => {
      if (item.Categories.includes('Ottoman Beds')) {
        lavProductType = 'ottoman'
      }
      if (item.Categories.includes('Upholstered Ottoman Beds')) {
        lavProductType = 'upholsteredOttoman'
      }
      if (item.Categories.includes('Divan Beds')) {
        lavProductType = 'divan'
      }
      if (item.Categories.includes('Upholstered Beds')) {
        lavProductType = 'upholstered'
      }
      if (item.Categories.includes('Mattresses')) {
        lavProductType = 'mattresses'
        _$('body').classList.add('lav-body-mattresses')
      }
    },
    { ms: 100 }
  )

  waitFor(
    '.product-info',
    () => {
      waitFor(
        () => lavProductType,
        () => {
          document.head.appendChild(stylesEl)

          let isUpdatingCarousel = false

          addTrust()
          addInfo()
          addAdditional()
          changeUpsell()
          waitFor('#productImagesCarousel', () => {
            handleCarousel()
            initLightbox()
            initMutation(
              '#productImagesCarousel',
              (node) => {
                console.log('added', node)
                if (
                  node.classList.contains('splide__pagination') &&
                  !isUpdatingCarousel
                ) {
                  isUpdatingCarousel = true
                  const slideChangeble = _$$(
                    '.lav-splide .lav-slide-changeble'
                  ).length
                  for (let i = 0; i < slideChangeble; i++) {
                    lavSplideEl.remove(0)
                    lavSplideThumbsEl.remove(0)
                  }
                  _$$('#productImagesCarousel .splide__slide img').forEach(
                    (img, index) => {
                      addMainSlide(img, false, false, true)
                      addThumbSlide(img, false, false, true)
                    }
                  )
                  isUpdatingCarousel = false
                }
              },
              (node) => {
                console.log('removed', node)
              }
            )
          })
        }
      )
    },
    { ms: 100 }
  )
}

function initLightbox() {
  const lavLightboxScript = document.createElement('div')
  lavLightboxScript.className = 'lav-lightbox-script'
  document.body.appendChild(lavLightboxScript)

  const script = document.createElement('script')
  script.type = 'module'
  script.textContent = /* js */ `
    import PhotoSwipeLightbox from 'https://cdnjs.cloudflare.com/ajax/libs/photoswipe/5.4.4/photoswipe-lightbox.esm.min.js';

    window.lavLightBoxEl = new PhotoSwipeLightbox({
      gallery: '.lav-splide',
      children: 'a',
      pswpModule: () => import('https://cdnjs.cloudflare.com/ajax/libs/photoswipe/5.4.4/photoswipe.esm.min.js')
    });
    window.lavLightBoxEl.init();
  `
  lavLightboxScript.appendChild(script)
}

const lavSliderConfig = {
  divan: [
    'slide-divan-1.png',
    'slide-divan-2.png',
    'slide-divan-3.png',
    'slide-divan-4.png',
    'slide-divan-5.png'
  ],
  upholstered: [
    'slide-divan-1.png',
    'slide-upholstered-2.png',
    'slide-upholstered-3.png',
    'slide-upholstered-4.png',
    'slide-divan-5.png'
  ],
  ottoman: [
    'slide-divan-1.png',
    'slide-ottoman-2.png',
    'slide-ottoman-3.png',
    'slide-divan-4.png',
    'slide-divan-5.png'
  ],
  upholsteredOttoman: [
    'slide-divan-1.png',
    'slide-upholstered-ottoman-2.png',
    'slide-upholstered-ottoman-3.png',
    'slide-upholstered-4.png',
    'slide-divan-5.png'
  ],
  mattresses: ['slide-matres-2.png', 'slide-matres-3.png', 'slide-divan-5.png']
}

let videoPlayingEl = null

function handleCarousel() {
  const parent = _$('#productImagesCarousel')
  const currentImages = _$$('#productImagesCarousel .splide__slide img')
  const additionalImages = lavSliderConfig[window.lavProductType] || []
  const videos = _$$('.video-awd')

  window.lavSplideCarousel = document.createElement('div')
  lavSplideCarousel.classList.add('lav-splide', 'splide')
  lavSplideCarousel.innerHTML = `
   <div class="splide__track">
      <ul class="splide__list"></ul>
    </div>
  `

  _$('.splide__list', lavSplideCarousel).innerHTML = ''

  window.lavThumbsCarousel = document.createElement('div')
  lavThumbsCarousel.classList.add('lav-splide-thumbs', 'splide')
  lavThumbsCarousel.innerHTML = `
    <div class="splide__track">
      <ul class="splide__list"></ul>
    </div>
  `

  currentImages.forEach((img, index) => {
    addMainSlide(img)
    addThumbSlide(img)
  })

  videos.forEach((video) => {
    addMainSlide(video, false, true)
    addThumbSlide(video, false, true)
  })

  additionalImages.forEach((img) => {
    addMainSlide(img, true)
    addThumbSlide(img, true)
  })

  parent.insertAdjacentElement('beforebegin', lavSplideCarousel)
  parent.insertAdjacentElement('beforebegin', lavThumbsCarousel)

  window.lavSplideEl = new Splide('.lav-splide', {
    type: 'slide',
    autoWidth: true,
    height: 240,
    gap: 10,
    padding: '14px',
    rewind: true,
    pagination: false,
    arrows: false
  })

  window.lavSplideThumbsEl = new Splide('.lav-splide-thumbs', {
    rewind: true,
    fixedWidth: 52,
    fixedHeight: 52,
    isNavigation: true,
    gap: 10,
    padding: '14px',
    arrows: false,
    pagination: false,
    dragMinThreshold: {
      mouse: 4,
      touch: 10
    }
  })

  lavSplideEl.sync(lavSplideThumbsEl)
  lavSplideEl.mount()
  lavSplideThumbsEl.mount()

  lavSplideThumbsEl.on('click', (slide) => {
    console.log('Thumbs click', slide)
    let name =
      'Index ' + slide.index + ': ' + slide.slide.querySelector('img').src

    name = name
      .replace('https://sonno.co.uk/cdn/shop/files/', '')
      .replace(config.dir + '/img/', '')
    pushDataLayer('exp_pdp_imp2__click_01', name, 'click', 'thumbnails')
  })
}

function addMainSlide(img, isString, isVideo, isChange) {
  const slide = document.createElement('li')
  slide.classList.add('splide__slide')
  const scrollIcon = getSvg('scroll')
  if (isString) {
    const src = `${config.dir}/img/${img}`
    slide.insertAdjacentHTML(
      'beforeend',
      /*html*/ `
      <a data-pswp-width="640" data-pswp-height="478" target="_blank" href="${src}">
        <div class="absolute top-5 left-0 z-[1]"><div class="bg-[#01B67A] rounded-[1px] text-sm font-semibold text-white font-poppins py-1 px-2 text-start flex items-center justify-start gap-1">${getSvg(
          'moon-dark'
        )}<span>60 Night Risk Free Trial</span></div></div>
        <img src='${src}' />
      </a>
      ${scrollIcon}
      `
    )
  } else if (isVideo) {
    slide.insertAdjacentHTML('beforeend', img.innerHTML)

    slide.style.width = '140px'

    const video = _$('video', slide)

    video.addEventListener('click', () => {
      if (!video.paused) return

      const playPromise = video.play()
      if (playPromise === undefined) return

      playPromise
        .then(() => {
          setTimeout(() => {
            lavEnterFullScreen(video)
          }, 100) // Add a short delay before entering full-screen mode
        })
        .catch((err) => {
          console.error('Error attempting to play video:', err)
        })
    })
  } else {
    slide.classList.add('lav-slide-changeble')
    const cloneNode = img.cloneNode(true)
    const src = cloneNode.getAttribute('src').replace('100x', '600x')
    slide.innerHTML = /*html*/ `
      <a data-pswp-width="${
        img.closest('a').dataset.pswpWidth
      }" data-pswp-height="${
      img.closest('a').dataset.pswpHeight
    }" target="_blank" href="${src}">
      <div class="absolute top-5 left-0 z-[1]"><div class="bg-[#01B67A] rounded-[1px] text-sm font-semibold text-white font-poppins py-1 px-2 text-start flex items-center justify-start gap-1">${getSvg(
        'moon-dark'
      )}<span>60 Night Risk Free Trial</span></div></div>
      </a>
    `
    slide.querySelector('a').insertAdjacentElement('beforeend', cloneNode)
    slide.insertAdjacentHTML('beforeend', scrollIcon)
  }

  if (isChange) {
    lavSplideEl.add(slide, 0)
  } else {
    _$('.splide__list', lavSplideCarousel).insertAdjacentElement(
      'beforeend',
      slide
    )
  }
}

function addThumbSlide(img, isString, isVideo, isChange) {
  const slide = document.createElement('li')
  slide.classList.add('splide__slide')
  if (isString) {
    slide.insertAdjacentHTML(
      'beforeend',
      `<img src='${config.dir}/img/${img}' />`
    )
  } else if (isVideo) {
    slide.insertAdjacentHTML('beforeend', img.innerHTML)
  } else {
    slide.classList.add('lav-slide-changeble')
    slide.insertAdjacentElement('beforeend', img.cloneNode(true))
  }

  if (isChange) {
    lavSplideThumbsEl.add(slide, 0)
  } else {
    _$('.splide__list', lavThumbsCarousel).insertAdjacentElement(
      'beforeend',
      slide
    )
  }
}

;[
  'fullscreenchange',
  'webkitfullscreenchange',
  'mozfullscreenchange',
  'MSFullscreenChange'
].forEach((event) => {
  document.addEventListener(event, () => {
    const fsElement =
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement

    if (!fsElement && videoPlayingEl.closest('.lav-splide')) {
      videoPlayingEl.pause()
      videoPlayingEl = null
      console.log('Exited fullscreen')
    } else if (fsElement.closest('.lav-splide')) {
      videoPlayingEl = fsElement
    }
  })
})

function lavEnterFullScreen(video) {
  if (video.requestFullscreen) {
    video.play()
    return video.requestFullscreen()
  } else if (video.mozRequestFullScreen) {
    /* Firefox */
    video.play()
    return video.mozRequestFullScreen()
  } else if (video.webkitRequestFullscreen) {
    /* Chrome, Safari and Opera */
    video.play()
    return video.webkitRequestFullscreen()
  } else if (video.msRequestFullscreen) {
    /* IE/Edge */
    video.play()
    return video.msRequestFullscreen()
  } else if (video.webkitEnterFullscreen) {
    /* iOS Safari */
    video.play()
    return video.webkitEnterFullscreen()
  }
}

function moveAddons() {
  _$('.lav-addons').innerHTML = ''

  _$$('.footer-add-cart .card-addons:not(.primary):not(.added)').forEach(
    (el) => {
      const cloneEl = el.cloneNode(true)
      cloneEl.classList.add('lav-addon')
      _$('.lav-addons').insertAdjacentElement('beforeend', cloneEl)

      cloneEl.querySelector('.card-button').addEventListener('click', (e) => {
        el.querySelector('.card-button span:last-child').click()
        setTimeout(() => {
          moveAddons()
        }, 200)
      })
    }
  )
}

function changeUpsell() {
  if (lavProductType !== 'mattresses') {
    _$('.estimate-delivery-wrapper').insertAdjacentHTML(
      'afterend',
      `<div class='lav-addons'></div>`
    )

    moveAddons()
  }

  waitFor('.footer-add-cart .space-y-5.block.mb-7', () => {
    initMutation('.footer-add-cart .space-y-5.block.mb-7', (node) => {
      console.log('added', node)
      if (node.classList.contains('card-addons')) {
        moveAddons()
      }
    })
  })

  _$('.about-payment-details.mbl + button').insertAdjacentElement(
    'afterend',
    _$('.about-payment-details.mbl')
  )
}

function addAdditional() {
  // TODO all review links
  let reviewName = 'Paula Waugh'
  let reviewDescr =
    'I am over the moon with my new divan bed base. I paid extra for the larger headboard. It is such good quality and excellent value for money. Highly recommend'
  let reviewImg = `${config.dir}/img/review-orig.png`
  const reviewLink = 'https://uk.trustpilot.com/review/sonno.co.uk'

  if (lavProductType === 'mattresses') {
    reviewName = 'Laur'
    reviewDescr = `Absolutely fantastic experience and great quality bed. Muddy was fantastic, really friendly. Arrived on time and was great at putting the bed together. There wasn't anything that was to much trouble, he went above and beyond expectations. Would definitely recommend to anyone 👌`
    reviewImg = `${config.dir}/img/review-mattresses.png`
  }

  const review = /* html */ `
    <div class='lav-review'>
      <div class='lav-review__info'>
        <div class='lav-review__head'>
          <div class='lav-review__title'>${reviewName}</div>
          <img src='${config.dir}/img/trustpilot-stars.png' />
        </div>
        <div class='lav-review__descr'>
          ${reviewDescr}
        </div>
      </div>
      <div class='lav-review__all'>
        <img src='${reviewImg}' />
        <div class='lav-review__all-link'>All reviews</div>
      </div>
    </div>
  `

  _$('.estimate-delivery-wrapper').insertAdjacentHTML('beforebegin', review)

  visibilityEvent('.lav-review', () => {
    pushDataLayer('exp_pdp_imp2__view_02', 'Review', 'view', 'Part 2')
  })

  _$('.lav-review__all-link').addEventListener('click', () => {
    alert('This link is not working yet: ' + reviewLink)
    // window.open(link, '_blank')
  })

  const title = _$('.delivery-status').innerText
  const firstItem = _$(
    '.estimate-delivery-ele .estimate-delivery-item:nth-child(1) .estimate-delivery-date'
  ).innerText
  const secondItem = _$(
    '.estimate-delivery-ele .estimate-delivery-item:nth-child(2) .estimate-delivery-date'
  ).innerText
  const thrirdItem = _$(
    '.estimate-delivery-ele .estimate-delivery-item:nth-child(3) .estimate-delivery-date'
  ).innerText

  const delivery = /* html */ `
    <div class='lav-delivery'>
      <div class='lav-delivery__title'>
        ${title}
      </div>

      <div class='lav-delivery__timeline'>
        <div class='lav-delivery__item'>
          <div class='lav-delivery__item-title'>Ordered</div>
          <div class='lav-delivery__item-subtitle'>${firstItem}</div>
        </div>
        
        <div class='lav-delivery__item'>
          <div class='lav-delivery__item-title'>Delivered</div>
          <div class='lav-delivery__item-subtitle'>${secondItem}</div>
        </div>
        
        <div class='lav-delivery__item'>
          <div class='lav-delivery__item-title'>Enjoy a 60-Night Free Trial</div>
          <div class='lav-delivery__item-subtitle'>${thrirdItem}</div>
          <div class='lav-delivery__item-caption'>
            Not fully satisfied? Don't worry; we'll arrange a return or exchange for you.
          </div>
        </div>
      </div>
    </div>
  `

  _$('.estimate-delivery-wrapper').insertAdjacentHTML('beforebegin', delivery)
}

function addInfo() {
  const discount = _$('.announcement-bar__discount strong').innerHTML

  const info = /* html */ `
    <div class='lav-info'>
      <div class='lav-benefits'>
          <div class='lav-benefits__item'>
            <div class='lav-benefits__image'>
              <img src='${config.dir}/img/benefit-interest.svg'/>
            </div>
            0% interest rate
          </div>
          <div class='lav-benefits__item' ${
            lavProductType === 'mattresses' ? 'style="display: none;"' : ''
          }>
            <div class='lav-benefits__image'>
              <img src='${config.dir}/img/benefit-guarantee.svg'/>
            </div>
            5 year guarantee
          </div>
          <div class='lav-benefits__item'>
            <div class='lav-benefits__image'>
              <img src='${config.dir}/img/benefit-delivery.svg'/>
            </div>
            Professional assembly
          </div>
          <div class='lav-benefits__item'>
            <div class='lav-benefits__image'>
              <img src='${config.dir}/img/benefit-trial.svg'/>
            </div>
            60 nights free trial 
          </div>
      </div>

      <div class='lav-coupon'>
        <div class='lav-coupon__top lav-coupon__section'>
          EXTRA <span>20% OFF</span> <br/> ENDS SOON <span class="lav-coupon-countdown">-:-</span>
        </div>
        <div class='lav-coupon__bottom lav-coupon__section'>
          USE CODE <br/><span>${discount}</span>
        </div>
      </div>
    </div>
  `

  // add Scroll and date
  const dateRaw = _$(
    '.estimate-delivery-ele .estimate-delivery-item:nth-child(3) .estimate-delivery-date'
  ).innerHTML

  const date = dateRaw.split('-')[0].trim()
  const freeDelivery = /* html */ `
    <div class='lav-free-delivery'>
      Order now for <span class='lav-free-delivery__free'>FREE delivery</span> by <span class='lav-free-delivery__date'>${date}</span>
    </div>
  `

  const feedback = /* html */ `
    <div class='lav-feedback'>
      <div class='lav-feedback__head'>
        <div class='lav-feedback__title'>Kathryn Goldsmith</div>
        <img src='${config.dir}/img/trustpilot-stars.png' />
      </div>
      <div class='lav-feedback__descr'>
        Received my bed today and so far, absolutely over the moon. Ordering, arranging delivery was super easy
      </div>  
    </div>
  `

  if (lavProductType === 'mattresses') {
    _$('.footer-add-cart').insertAdjacentHTML('beforebegin', feedback)
  } else {
    _$('.product-info').insertAdjacentHTML('afterend', feedback)
  }

  visibilityEvent('.lav-feedback', () => {
    pushDataLayer('exp_pdp_imp2__view_01', 'Review', 'view', 'Part 1')
  })
  _$('.product-info').insertAdjacentHTML('afterend', freeDelivery)
  _$('.product-info').insertAdjacentHTML('afterend', info)

  const countdownInterval = setInterval(() => {
    const time =
      _$('#countdown .hours .value').innerHTML +
      ':' +
      _$('#countdown .minutes .value').innerHTML +
      ':' +
      _$('#countdown .seconds .value').innerHTML

    if (!time) {
      clearInterval(countdownInterval)
      _$('.lav-coupon-countdown').innerHTML = '00:00'
    }
    _$('.lav-coupon-countdown').innerHTML = time
  }, 500)

  _$('.lav-free-delivery__free').addEventListener('click', () => {
    pushDataLayer(
      'exp_pdp_imp2__click_02',
      'Free delivery',
      'click',
      'Product info'
    )
    _$('.lav-delivery')?.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })
  })
}

function addTrust() {
  const boughtText = setBoughtData()

  const markup = /* html */ `
    <div class='lav-trust'>
      <div class='lav-trust__bought'>
        <img src='${config.dir}/img/bought-basket.svg' alt='Bought' />
        ${boughtText}К+ Bought so far
      </div>
      <div class='lav-trust__made'>
        <img src='${config.dir}/img/uk-flag.svg' alt='Made in UK' />
        Made in UK
      </div>
    </div>
  `

  _$('.product-info').insertAdjacentHTML('beforebegin', markup)
}

function setBoughtData() {
  const localStorageKey = 'lavBoughtData'
  const currentData = JSON.parse(localStorage.getItem(localStorageKey)) || {}

  const path = item?.URL?.split('/')?.at(-1)
  if (!path) return

  if (currentData[path]) {
    return currentData[path]
  } else {
    const count = Math.floor(Math.random() * (35 - 15 + 1)) + 15
    currentData[path] = count

    localStorage.setItem(localStorageKey, JSON.stringify(currentData))

    return count
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
        }, 100)
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
    'moon-dark': `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 15 15" height="15" width="15">
        <path fill="black" d="M14.7877 8.94517C14.6171 8.83989 14.3968 8.85923 14.2491 8.99427C13.1731 9.97022 11.7813 10.508 10.3307 10.508C7.11114 10.508 4.4917 7.88854 4.4917 4.66897C4.4917 3.21831 5.02946 1.82659 6.00541 0.75062C6.13999 0.602304 6.16025 0.382577 6.05451 0.211946C5.94876 0.0417718 5.74174 -0.0371925 5.55051 0.0168237C2.28218 0.942309 0 3.96355 0 7.36383C0 11.5743 3.42534 14.9996 7.63574 14.9996C11.036 14.9996 14.0574 12.7174 14.9829 9.44917C15.0377 9.25611 14.9579 9.0508 14.7877 8.94517Z"/>
        <path fill="black" d="M8.24834 3.59838L9.31241 4.12996L9.84399 5.19415C9.91986 5.34636 10.0756 5.44237 10.2458 5.44237C10.4161 5.44237 10.5713 5.34636 10.6476 5.19415L11.1797 4.12996L12.2434 3.59838C12.3956 3.52205 12.4916 3.36676 12.4916 3.19658C12.4916 3.02641 12.3956 2.87111 12.2434 2.79478L11.1797 2.26309L10.6476 1.19901C10.4949 0.8946 9.99585 0.8946 9.84399 1.19901L9.31241 2.26309L8.24834 2.79478C8.09613 2.87065 8 3.02641 8 3.19658C8 3.36676 8.09613 3.52251 8.24834 3.59838Z"/>
        </svg>
        `,
    scroll: `
      <svg class='lav-scroll-slider' xmlns="http://www.w3.org/2000/svg" width="39" height="40" viewBox="0 0 39 40" fill="none"><g clip-path="url(#clip0_985_7250)"><path d="M17.8536 39.9429C15.9695 38.1164 14.9339 36.5316 13.2722 33.3039C11.6106 30.0764 11.4398 27.7693 10.7876 26.2181C10.1355 24.6668 10.3172 25.2414 9.10752 23.1343C7.8977 21.0273 11.4122 18.1845 13.1752 20.9288C14.9383 23.6731 15.0162 23.8482 15.0162 23.8482C15.0162 23.8482 15.8657 25.5778 16.135 25.7597C16.4042 25.9416 16.1008 10.3205 16.1554 7.87577C16.2098 5.43108 20.721 4.82566 20.7766 8.09961C20.8324 11.3735 20.8016 20.4725 20.9156 21.6422C21.0296 22.8119 20.6402 17.2218 21.5412 15.945C22.4423 14.6683 24.2391 14.8019 25.0165 15.8313C25.7941 16.8606 25.6149 21.3563 25.7063 21.3563C25.7976 21.3563 25.3353 18.3904 26.487 17.4887C27.6387 16.587 29.2896 16.7161 30.0116 17.9857C30.7337 19.2552 30.2353 21.959 30.5057 22.0936C30.7762 22.2282 30.3181 19.2821 31.5104 18.5722C32.7027 17.8623 34.4254 18.2974 34.7855 19.5457C35.1455 20.7939 35.351 22.5376 34.8061 26.8016C34.2611 31.0655 33.3569 32.5979 32.8118 34.9885C32.2668 37.3792 31.8003 39.703 31.8003 39.703" stroke="black" stroke-width="1.5" stroke-linecap="round"></path><path d="M34.2506 2.5L37.493 5.70542L34.2506 8.91084M25.2084 5.75056H36.7166M3.24239 2.5L0 5.70542L3.24239 8.91084M12.3302 5.75056H0.822014" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_985_7250"><rect width="39" height="40" fill="white"></rect></clipPath></defs></svg>
    `
  }

  return svgObj[name]
}
