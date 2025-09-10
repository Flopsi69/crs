;(function () {
  console.debug('*** Experiment started ***')

  // Config for Experiment
  const config = {
    // dir: 'http://127.0.0.1:5500/petals/pdp_improvment',
    dir: 'https://flopsi69.github.io/crs/petals/pdp_improvment',
    clarity: ['set', 'exp_pdp', 'variant_1'],
    debug: false
  }

  // const orig = console.log
  // console.log = function (...args) {
  //   orig.apply(console, ['Debug:', ...args])
  // }

  // Styles for Experiment
  const styles = /* css */ `
.announcement-bar-section + .section-header + #MainContent {
  margin-top: 33px;
}
.cac.product .product__title a h2 {
  color: #121212;
  font-family: Overlock;
  font-size: 20px!important;
  font-style: normal;
  font-weight: 700;
  line-height: 1!important; /* 100% */
  letter-spacing: 0.6px;
}
.product__title + [role="status"] {
  margin-top: 12px;
}
.fera-storeReviewsSummary .fera-storeReviewsSummary-avgRating {
  color: #000;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0.6px;
}
.fera-storeReviewsSummary .fera-storeReviewsSummary-verifiedBadgeWrapper {
  color: rgba(0, 0, 0, 0.50);
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px; /* 106.667% */
  letter-spacing: 0.6px;
  text-transform: uppercase;
}
.fera-storeReviewsSummary .fera-storeReviewsSummary-wrapper {
  padding-left: 5px;
}
.price--large .price-item--sale, .price__regular .price-item--regular {
  color: #121212;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 1.3px;
}
.custom.dwa .need_help > p {
  margin: 0;
  margin-top: 5px;
}
.product-form__buttons .product-form__submit {
  max-height: 56px!important;
  height: 56px;
  margin-left: 12px;
  width: 65%;
}
.product-form__buttons .product-form__submit span {
  color: #000;
  text-align: center;
  font-family: Overlock;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 1px;
}
.product-form__buttons .quantity {
  max-height: 56px;
  height: 56px;
  max-width: 100px;
}
.product-form__buttons .quantity input{
  color: #121212;
  text-align: center;
  font-family: Assistant;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.quantity__button svg {
  width: 13px;
}
.atc_steps h4 {
  color: #121212;
  text-align: center;
  font-family: Overlock;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px; /* 118.182% */
  letter-spacing: 0.6px;
}
.customProductImage {
  display: none;
}

.parent-variant {
  margin-left: 0!important;
  max-width: 100%;
}
#guide_desc {
  color: #2E45E0;
  font-weight: 600;
  margin-left: auto;
}
.product-form__input .form__label {
  margin-bottom: 10px;
  display: flex;
}
.product-form__input .form__label:after {
  content: ':';
}

.product__info-container .lav-how {
  border-bottom: 1px solid rgba(0, 0, 0, 0.20);
  background: #F9F0F4;
  padding: 12px;
  margin-bottom: 24px;
}
.lav-how {
  letter-spacing: 0;
}
.lav-how__title {
  color: #000;
  font-family: Overlock;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 19.5px; /* 139.286% */
  letter-spacing: 0.4px;
  text-transform: uppercase;
}
.lav-how__descr {
  color: #000;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
}
.lav-how__descr a {
  color: #2E45E0;
  font-weight: 600;
}
.lav-how__list {
  display: flex;
  justify-content: space-between;
  gap: 3px;
}
.lav-how__title + .lav-how__descr {
  margin: 8px 0 14px;
}
.lav-how__item {
  position: relative;
  padding: 5px 0 5px 15px;
  margin: 6px 0;
  color: #000;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 13px;
}
.lav-how__item:before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 12px;
  height: 12px;
  background-image: url('${config.dir}/img/check.svg');
  background-size: contain;
  background-repeat: no-repeat;
}

.custom.dwa .dwa_formCustomJs {
  display: none;
}

.lav-benefits {
  letter-spacing: 0;
  margin-bottom: 30px;
  margin-top: 20px;
}
.lav-benefit {
  padding: 16px 5px;
  display: flex;
  align-items: center;
  gap: 12px;
}
.lav-benefit__icon {
  flex-shrink: 0;
  line-height: 0;
}
.lav-benefit__title {
  color: #000;
  font-family: Overlock;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
}
.lav-benefit__title span {
  position: relative;
  color: #A72561;
  white-space: nowrap;
}
.lav-benefit__title span svg {
  position: absolute;
  left: 0;
  bottom: -5px;
}
.lav-benefit__descr {
  color: #000;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  margin-top: 6px;
}
.lav-benefit__descr a {
  color: #2E45E0;
  font-weight: 600;
}

.lav-review {
  padding: 12px 16px;
  border-radius: 4px;
  background: #FEF1E4;
  display: flex;
  gap: 14px;
  align-items: flex-start;
  letter-spacing: 0;
}
.lav-review__image {
  flex-shrink: 0;
  width: 52px;
  text-align: center;
  line-height: 0;
}
.lav-review__image img {
  max-width: 100%;
}
.lav-review__link {
  color: #000;
  font-size: 11px;
  font-style: normal;
  line-height: 20px;
  text-decoration: underline;
  white-space: nowrap;
  margin-top: 8px;
}
.lav-review__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}
.lav-review__title {
  color: #000;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
}
.lav-review__trust {
  line-height: 0;
}
.lav-review__descr {
  margin-top: 4px;
  color: #000;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
}
.lav-review__author {
  display: flex;
  align-items: center;
  gap: 7px;
  margin-top: 6px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 22.4px;
}


.lav-reels {
  letter-spacing: 0;
  margin: 28px 0 12px;
}
.lav-reels__title {
  color: #000;
  text-align: center;
  font-family: Overlock;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  text-transform: uppercase;
}
.lav-reels__list {
  margin-top: 20px;
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding: 0 15px;
  margin-left: -15px;
  margin-right: -15px;
}
.lav-reels__item {
  position: relative;
  flex-shrink: 0;
  width: 101px;
  height: 134px;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  background: #000;
}
.lav-reels__video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.lav-reels__views {
  display: flex;
  gap: 5px;
  align-items: center;
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: #fff;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  pointer-events: none;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
}

.lav-fullscreen-video {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #000;
  z-index: 2147483651;
  align-items: center;
  justify-content: center;
}
.lav-fullscreen-video.active {
  display: flex;
}
.lav-fullscreen-video__container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.lav-fullscreen-video__video {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
}
.lav-fullscreen-video__close {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 0 10px 1px rgba(0,0,0,.2);
  z-index: 2147483652;
}
.lav-fullscreen-video__close svg {
  width: 20px;
  height: 20px;
}

.parent-variant .select ul {
  margin-left: -15px;
  margin-right: -15px;
  padding-left: 15px;
  padding-right: 15px;
  gap: 12px;
}
.parent-variant .select .lav-measure li a {
  color: #000;
  font-size: 12px!important;
  font-weight: 600;
  line-height: 10px;
  letter-spacing: 0.6px;
  border: 1px solid rgba(0, 0, 0, 0.24);
}

.ringSize_guide {
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
}
.parent-variant .select .lav-measure li.jquery-grid-picker-item-selected a {
  color: #fff;
}
.lav-selected {
  color: #000;
  font-family: Assistant;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 19.5px;
  letter-spacing: 0.4px;
}
.lav-selects-title {
  color: #000;
  font-family: Overlock;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 19.5px;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: -3px!important;
}

.parent-variant .select .lav-material li a {
  color: #000;
  font-size: 10px!important;
  font-weight: 600;
  letter-spacing: 0;
  border: 1px solid rgba(0, 0, 0, 0.24);
  line-height: 13px; /* 130% */
  padding: 8px 4px!important;
  height: 100%;
  flex-flow: column;
}
.parent-variant .select .lav-material li.jquery-grid-picker-item-selected a {
  color: #fff;
}
.lav-material-color {
  display: flex!important;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 8px;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  color: #000;
  text-align: center;
  font-family: Assistant;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 10px; 
  letter-spacing: 0.6px;
}
.lav-sticky .lav-material-color {
  margin-bottom: 0;
}

.lav-sticky {
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  background: #FFF;
  z-index: 2147483649;
  transform: translateY(100%);
  transition: .3s;
  pointer-events: none;
  opacity: 0;
}
.lav-sticky.active {
  transform: translateY(0%);
  pointer-events: auto;
  opacity: 1;
}
.lav-sticky__top {
  display: flex;
  align-items: center;
  gap: 32px;
  padding: 7px 12px 9px;
  border-top: 1px solid rgba(0, 0, 0, 0.24);
}
.lav-sticky__top.active {
  display: flex;
}
.lav-sticky__bottom {
  display: flex;
  min-height: 50px;
}
.lav-sticky__add {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #000;
  background: #A4CEDD;
  color: #000;
  text-align: center;
  font-family: Overlock;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 1px;
  flex-grow: 1;
  cursor: pointer;
}
.lav-sticky__size {
  position: relative;
  min-width: 103px;
  border-top: 1px solid #D3D3D3;
  border-bottom: 1px solid #D3D3D3;
  padding: 5px 24px 5px 12px;
}
.lav-sticky__size-label {
  color: #5C5C5C;
  font-family: Assistant;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0;
}
.lav-sticky__size-value {
  color: #000;
  font-family: Assistant;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0;
}
.lav-sticky__icon {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  margin-top: 2px;
}

.lavs-option {
  display: flex;
  gap: 16px;
  align-items: center;
  // flex-grow: 1;
  // max-width: 50%;
}
.lavs-option {}
.lavs-option__facture {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 34px;
  height: 34px;
  flex-shrink: 0;
  line-height: 0;
  box-shadow: 0 0 0 3px #FFF inset;
  border: 1px solid black;
  background: black;
}
.lavs-option__label {
  color: #5C5C5C;
  font-family: Assistant;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 13px;
  letter-spacing: 0;
}
.lavs-option__value {
  color: #000;
  font-family: Assistant;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 13px;
  letter-spacing: 0;
}
.lav-selector {
  display: none;
  position: fixed;
  align-items: flex-end;
  z-index: 2147483650;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%);
}
.lav-selector-opened {
  z-index: 999999!important;
}
.lav-selector.active {
  display: flex;
}
.lav-selector__inner {
  position: relative;
  z-index: 2147483651;
  padding: 24px 12px;
  background: #fff;
  width: 100%;
  transform: translateY(100%);
  transition: .3s;
}
.lav-selector__inner.active {
  transform: translateY(0%);
}
.lav-selector__close {
  position: absolute;
  right: 22px;
  top: -40px;
}
.lav-selector__toggler ul {
  display: flex;
  overflow: auto;
  margin: 0 -12px;
  padding: 0 12px;
  margin-top: 10px;
}
.lav-selector__toggler .jquery-grid-picker-item-selected {
  background: black;
  color: #fff;
}
.lav-selector__toggler .form__label, .lav-selector__toggler .ringSize_guide p {
  margin-bottom: 0;
}
.lav-selector__toggler .lav-measure a {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 55px;
  min-height: 42px;
  text-align: center;
  font-family: Assistant;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 1; /* 83.333% */
  letter-spacing: 0.6px;
}
.lav-selector__toggler .lav-material  {
  gap: 12px;
}
.lav-selector__toggler .lav-material li {
  display: flex;
  flex-flow: column;
  align-items: center;
}
.lav-selector__toggler .lav-material a {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: Assistant;
  font-size: 10px;
  font-style: normal;
  min-width: 57px;
  font-weight: 600;
  line-height: 13px;
  letter-spacing: 0;
  padding-left: 5px;
  padding-right: 5px;
  height: 100%;
}
#satcb_bar {
  display: none!important;
}
.lav-carousel-trust {
  object-position: top;
}

.owlCustomCarouselThumbs {
  overflow: visible;
}
.customCarouselForMbl {
  overflow: hidden;
  margin-left: -15px;
  margin-right: -15px;
  padding-left: 15px;
  padding-right: 15px;
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
    addSlideInModal()
    waitFor(() => _$('#satcb_bar') && _$('.form .product-form__submit'), addSticky, { ms: 50 })
    waitFor('.customCarouselForMbl', updateGallery)

    waitFor(() => _$('[id*=price-template]') && !_$('.lav-how'), addHowItWorks)

    waitFor(
      () => _$('.custom.dwa') && !_$('lav-review'),
      () => {
        addBenefits()
        addReview()
        addReels()
      }
    )

    waitFor(
      () => _$('variant-selects'),
      () => {
        _$('variant-selects').insertAdjacentHTML(
          'beforebegin',
          "<div class='lav-selects-title'>Customise your order:</div>"
        )
        waitFor(
          () => _$$('variant-selects li a').length,
          () => {
          updateSizeAndLength()
          updateMaterial()
          addLabelHandler()
          }, { ms: 50 })
      }
    )
  }

  async function updateGallery() {
    await waitFor(() => typeof $ === 'function', false, { ms: 20 })

    const mainCarousel = $('.owlCustomCarousel.owl-carousel')
    const thumbsCarousel = $('.owlCustomCarouselThumbs')

    // Add new slide to main carousel with proper li element structure
    const newSlide1 = /*html*/ `
    <li class="owlCustomCarousel">
      <img src="${config.dir}/img/review-slide-1.png" />
    </li>
  `
    const newSlide2 = /*html*/ `
    <li class="owlCustomCarousel">
      <img class='lav-carousel-trust' src="${config.dir}/img/review-slide-2.png" />
    </li>
  `

    const newThumb1 = /*html*/ `
    <button class="owlCustomCarouselThumb_Item">
      <img src="${config.dir}/img/review-slide-1.png" />
    </button>
  `

    const newThumb2 = /*html*/ `
    <button class="owlCustomCarouselThumb_Item">
      <img class='lav-carousel-trust' src="${config.dir}/img/review-slide-2.png" />
    </button>
  `

    mainCarousel
      .trigger('add.owl.carousel', [newSlide1])
      .trigger('add.owl.carousel', [newSlide2])
      .trigger('refresh.owl.carousel')
    thumbsCarousel
      .trigger('add.owl.carousel', [newThumb1])
      .trigger('add.owl.carousel', [newThumb2])
      .trigger('refresh.owl.carousel')
    
     // Sync navigation carousel with main carousel
    mainCarousel.on('changed.owl.carousel', function(event) {
      const currentIndex = event.item.index
      const totalItems = event.item.count
      const visibleItems = event.page.size
      
      // Calculate which thumbnail should be in focus
      let targetIndex = currentIndex
      
      // If we're near the end, adjust the target to keep thumbs visible
      if (currentIndex >= totalItems - visibleItems) {
        targetIndex = totalItems - visibleItems
      }
      
      // Scroll thumbs carousel to show the active thumbnail
      thumbsCarousel.trigger('to.owl.carousel', [targetIndex, 300, true])
    })

    // Optional: Also sync when thumbnail is clicked
    thumbsCarousel.on('click', '.owlCustomCarouselThumb_Item', function(e) {
      const index = $(this).index()
      mainCarousel.trigger('to.owl.carousel', [index, 300, true])
    })
  }

  function addSticky() {
    const markup = /* html */ `
    <div class="lav-sticky">
      <div class="lav-sticky__top">
      </div>
      <div class="lav-sticky__bottom">
        <div class='lav-sticky__add'>
          Add to cart
        </div>
      </div>
    </div>

    <div class='lav-selector'>
      <div class='lav-selector__inner'>
        <div class='lav-selector__close'>
          ${getSvg('closeWhite')}
        </div>
        <div class='lav-selector__toggler'>
          test
        </div>
      </div>
    </div>
  `

    // _$('#satcb_bar').insertAdjacentHTML('afterend', markup)
    document.body.insertAdjacentHTML('afterbegin', markup)

    _$('.lav-selector__close').addEventListener('click', closeSelector)

    _$('.lav-sticky__add').addEventListener('click', () => {
      pushDataLayer('exp_pdp_click_03', 'Add to cart', 'click', 'Sticky button')
      _$('.form .product-form__submit').click()
    })

    initIntersection('.form .product-form__submit', ({ isIntersecting }) => {
      if (isIntersecting) {
        _$('.lav-sticky').classList.remove('active')
      } else {
        _$('.lav-sticky').classList.add('active')
      }
    })
  }

  function updateSizeAndLength() {
    const sizeEl = _$(
      'variant-selects [name="options[Size]"] + .jquery-grid-picker-widget'
    )

    const lengthEl = _$(
      'variant-selects [name="options[Chain Length]"] + .jquery-grid-picker-widget'
    )

    handleSize()
    handleLength()

    function handleSize() {
      if (!sizeEl) return

      sizeEl.classList.add('lav-measure', 'lav-size', 'lav-label-handler')

      const value = _$(
        '.lav-measure .jquery-grid-picker-item-selected'
      )?.getAttribute('data-jquery-grid-picker-value')

      const label = sizeEl
        .closest('.product-form__input--dropdown')
        .querySelector('.form__label')?.innerText

      addToSticky(value, label)
    }

    function handleLength() {
      if (!lengthEl) return

      lengthEl.classList.add('lav-measure', 'lav-length', 'lav-label-handler')

      const value = _$(
        '.lav-measure .jquery-grid-picker-item-selected'
      )?.getAttribute('data-jquery-grid-picker-value')

      const label = lengthEl
        .closest('.product-form__input--dropdown')
        .querySelector('.form__label')?.innerText

      addToSticky(value, label)
    }

    async function addToSticky(value, label) {
      await waitFor(() => _$('.lav-sticky__bottom'), false)

      _$('.lav-sticky__bottom').insertAdjacentHTML(
        'afterbegin',
        /*html*/ `
      <div class='lav-sticky__size'>
        <svg class='lav-sticky__icon' xmlns="http://www.w3.org/2000/svg" width="8" height="6" viewBox="0 0 8 6" fill="none">
          <path d="M4 6L0.535899 -6.52533e-07L7.4641 -4.68497e-08L4 6Z" fill="#C4C4C4"/>
        </svg>
        <div class='lav-sticky__size-label'>${label}</div>
        <div class='lav-sticky__size-value'>${value || 'Choose'}</div>
      </div>
    `
      )

      _$('.lav-sticky__size').addEventListener('click', function () {
        pushDataLayer(
          'exp_pdp_click_03',
          _$('.lav-sticky__size-label').innerText.trim(),
          'click',
          'Sticky button'
        )
        rerender()
        openSelector()

        function rerender() {
          const headerHTML = _$('product-info .lav-measure')
            .closest('.product-form__input--dropdown')
            .querySelector('.ringSize_guide').outerHTML

          const bodyHTML = _$('product-info .lav-measure').outerHTML

          _$('.lav-selector__toggler').innerHTML = headerHTML + bodyHTML

          if (_$('.lav-selector__toggler #guide_desc')) {
            _$('.lav-selector__toggler #guide_desc').addEventListener('click', () => {
              // TODO
              _$('.section-header')?.classList.remove('lav-selector-opened')

              const interval = setInterval(() => {
                if (_$('#custom_notifications[style*="translateX(100%)"]')) {
                  if (_$('.lav-selector.active')) {
                    _$('.section-header')?.classList.add('lav-selector-opened')
                  }
                  clearInterval(interval)
                }
              }, 350);
            });
          }

          _$$('.lav-selector__toggler a').forEach((el, index) => {
            el.addEventListener('click', (e) => {
              _$(
                'product-info .lav-measure li:nth-child(' + (index + 1) + ') a'
              ).click()
              rerender()
              closeSelector()
            })
          })
        }
      })
    }
  }

  function openSelector() {
    _$('.section-header')?.classList.add('lav-selector-opened')
    _$('.lav-selector').classList.add('active')

    setTimeout(() => {
      _$('.lav-selector__inner').classList.add('active')
    }, 50)
  }

  function closeSelector() {
    _$('.section-header')?.classList.remove('lav-selector-opened')
    const label = _$(
      '.lav-selector__inner.active .form__label'
    )?.innerText.trim()
    if (label) {
      pushDataLayer('exp_pdp_click_05', 'Close', 'click', `${label} - Sticky`)
    }
    _$('.lav-selector__inner').classList.remove('active')
    _$('.lav-selector').classList.remove('active')
  }

  function updateMaterial() {
    const colorsMap = {
      'Gold Filled':
        'linear-gradient(205deg, #EDCE9B 11.36%, #FFF 30.57%, #EAC995 50.14%)',
      'Rose Gold Filled':
        'linear-gradient(205deg, #E8C2BD 11.36%, #FFF 30.57%, #E1B7B2 50.14%)',
      'Sterling Silver':
        'linear-gradient(205deg, #999 11.36%, #FFF 30.57%, #D8D8D8 50.14%)',
      '14k Yellow Gold':
        'linear-gradient(205deg, #EDCE9B 11.36%, #FFF 30.57%, #EAC995 50.14%)',
      '14k White Gold':
        'linear-gradient(205deg, #BABABA 11.36%, #FFF 30.57%, #D8D8D8 50.14%)',
      '14k Rose Gold':
        'linear-gradient(205deg, #EDCCC7 11.36%, #FFF 30.57%, #E8C8C3 50.14%)'
    }

    const materialEl = _$(
      'variant-selects [name="options[Material]"] + .jquery-grid-picker-widget'
    )

    _$$('li a', materialEl).forEach((el) => {
      const key = el.closest('li').getAttribute('data-jquery-grid-picker-value')

      if (colorsMap[key]) {
        const colorEl = document.createElement('span')
        colorEl.classList.add('lav-material-color')
        colorEl.style.background = colorsMap[key]
        if (key.includes('14k')) {
          colorEl.innerText = '14k'
        }
        // colorEl.innerText = key.includes('Gold') ? 'Au' : 'Ag'/
        el.prepend(colorEl)
      }
    })

    if (!materialEl) return

    materialEl.classList.add('lav-label-handler', 'lav-material')

    const value = _$(
      '.lav-material .jquery-grid-picker-item-selected'
    )?.getAttribute('data-jquery-grid-picker-value')

    const label = materialEl
      .closest('.product-form__input--dropdown')
      .querySelector('.form__label')?.innerText

    const color = _$(
      '.lav-material .jquery-grid-picker-item-selected .lav-material-color'
    )?.outerHTML

    addToSticky(value, label, color)

    async function addToSticky(value, label, color) {
      await waitFor(() => _$('.lav-sticky__top'), false)

      _$('.lav-sticky__top').insertAdjacentHTML(
        'afterbegin',
        /*html*/ `
      <div class='lav-sticky__option lavs-option lav-selector-material'>
        <div class="lavs-option__facture" style="${
          color ? 'display: flex;' : 'display: none;'
        }">
          ${color || ''}
        </div>
        <div class="lavs-option__info">
          <div class="lavs-option__label">${label}</div>
          <div class="lavs-option__value">${value}</div>
        </div>
    
        <div class="lavs-option__icon">
          ${getSvg('chevronRight')}
        </div>
      </div>
    `
      )

      _$('.lav-selector-material').addEventListener('click', function (e) {
        e.preventDefault()
        pushDataLayer('exp_pdp_click_03', 'Material', 'click', 'Sticky button')
        rerender()
        openSelector()

        function rerender() {
          const headerHTML = _$('product-info .lav-material')
            .closest('.product-form__input--dropdown')
            .querySelector('.ringSize_guide').outerHTML

          const bodyHTML = _$('product-info .lav-material').outerHTML

          _$('.lav-selector__toggler').innerHTML = headerHTML + bodyHTML

          _$$('.lav-selector__toggler a').forEach((el, index) => {
            el.addEventListener('click', (e) => {
              e.preventDefault()
              _$(
                'product-info .lav-material li:nth-child(' + (index + 1) + ') a'
              ).click()
              rerender()
              closeSelector()
            })
          })
        }
      })
    }
  }

  function addLabelHandler() {
    _$$('.lav-label-handler').forEach((container) => {
      addLabel(container)
      container.addEventListener('click', (e) => {
        const target = e.target?.closest('.jquery-grid-picker-item-content')

        if (target?.classList.contains('jquery-grid-picker-item-content')) {
          addLabel(container, target)
        }
      })
    })
  }

  function addLabel(container, target) {
    const label = container
      .closest('.product-form__input--dropdown')
      .querySelector('.form__label')

    const isStickyClick = _$('.lav-selector__inner.active')

    if (target) {
      pushDataLayer(
        `exp_pdp_click_0${isStickyClick ? '4' : '2'}`,
        target.innerText.trim(),
        'click',
        `${label.innerText.trim()} (section) - ${
          isStickyClick ? 'Sticky' : 'Static'
        }`
      )
    }

    if (label.nextElementSibling?.classList.contains('lav-selected')) {
      label.nextElementSibling.remove()
    }

    const text = _$(
      '.jquery-grid-picker-item-selected',
      container
    )?.getAttribute('data-jquery-grid-picker-value')

    if (!text) return

    if (
      _$('.lav-sticky__size-value') &&
      container.classList.contains('lav-measure')
    ) {
      _$('.lav-sticky__size-value').innerText = text
    }

    if (
      _$('.lav-selector-material') &&
      container.classList.contains('lav-material')
    ) {
      // _$('.lav-selector-material').innerText = text
      if (_$('.jquery-grid-picker-item-selected .lav-material-color')) {
        _$('.lavs-option__facture').style.display = 'flex'
        _$('.lav-selector-material .lavs-option__facture').innerHTML = _$(
          '.jquery-grid-picker-item-selected .lav-material-color',
          container
        ).outerHTML
      } else {
        _$('.lavs-option__facture').style.display = 'none'
      }

      _$('.lav-selector-material .lavs-option__value').innerText = text
    }

    label.insertAdjacentHTML(
      'afterend',
      `<div class="lav-selected">${text}</div>`
    )
  }

  function addSlideInModal() {
    const markup = /* html */ `
    <div class='lav-modal__close' title='Close modal'>
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
        <rect x="1" y="1" width="23" height="23" rx="11.5" fill="#F0F0F0"/>
        <rect x="1" y="1" width="23" height="23" rx="11.5" stroke="black" stroke-width="2"/>
        <path d="M14.1979 12.4872L16.7511 15.066C17.083 15.3723 17.083 15.883 16.7511 16.1894L16.1894 16.7511C15.883 17.083 15.3723 17.083 15.066 16.7511L12.5128 14.1979L9.93404 16.7511C9.62766 17.083 9.11702 17.083 8.81064 16.7511L8.24894 16.1894C7.91702 15.883 7.91702 15.3723 8.24894 15.066L10.8021 12.4872L8.24894 9.93404C7.91702 9.62766 7.91702 9.11702 8.24894 8.81064L8.81064 8.24894C9.11702 7.91702 9.62766 7.91702 9.93404 8.24894L12.5128 10.8021L15.066 8.24894C15.3723 7.91702 15.883 7.91702 16.1894 8.24894L16.7511 8.81064C17.083 9.11702 17.083 9.62766 16.7511 9.93404L14.1979 12.4872Z" fill="black"/>
      </svg>
    </div>

    <div class="lav-instr__title">
      How To Send Your Inclusions
    </div>

    <div class="lav-instr__descr">
      <p>Send us a tiny amount of your keepsake, and we’ll create a memorial jewelry piece to last a lifetime. </p>
      <p>Learn more in the tabs below.</p>
    </div>

    <div class="lav-instr__list">
      <div class="lav-instr__item lav-drop">
        <div class="lav-drop__title">Cremations</div>
        <div class="lav-drop__body">
          <p><span>Please send&nbsp;1/4 a teaspoon&nbsp;of ashes in a ziplock&nbsp;bag&nbsp;</span><span>(if you're ordering more than 4 pieces of jewelry 1/2 a teaspoon will be enough)&nbsp;</span>Please&nbsp;write&nbsp;the name that is associated with the order&nbsp;<b>and</b>&nbsp;the order number on the ziplock bag or on a sticky note&nbsp;that is placed inside the&nbsp;package so I know who the&nbsp;package belongs to. Place baggy inside of an envelope or package to be shipped.</p>
          <p>If you don't have 1/4 of a teaspoon of ashes, you can just send what you have.</p>
          <p><span>We&nbsp;<strong>strongly suggest</strong>&nbsp;mailing your package via USPS with insurance and tracking.&nbsp;<meta charset="utf-8">USPS requires cremation ashes to be sent&nbsp;with express shipping&nbsp;.</span></p>
          <p><span><meta charset="utf-8">(If&nbsp;you are sending from out of the country, you can send using your&nbsp;countries&nbsp;postal service).</span></p>
          <p><span>We will return&nbsp;all of the unused ashes to you along with your jewelry!</span></p>
          <p><span>There is no rush on sending the inclusions!</span></p>
          <p><span><meta charset="utf-8">We will notify you when we receive your inclusions!</span></p>
          <p><span>The address to mail the ashes to is:</span></p>
          <p><span>Petals and Keepsakes</span></p>
          <p><span>2451 Algoma Road</span></p>
          <p><span>Pontotoc, Mississippi 38863</span></p>
          <p><span>Please email&nbsp;us at&nbsp;<meta charset="utf-8">support@petalsandkeepsakes.com&nbsp;<meta charset="utf-8">if you have any questions about the process!</span></p>
        </div>

      </div>

      <div class="lav-instr__item lav-drop">
        <div class="lav-drop__title">Clothing/Fabric</div>
        <div class="lav-drop__body">
          <p>Please send a penny sized (or larger) piece of fabric in a ziplock bag and write the name that is associated with the order&nbsp;<strong>and</strong>&nbsp;the order number on the bag.&nbsp;</p>
          <p>Any unused fabric will be mailed back to you!&nbsp;</p>
          <p><span>I highly suggest mailing your package via USPS with tracking.</span></p>
          <p><span><meta charset="utf-8">(If&nbsp;you are sending from out of the country, you can send using your&nbsp;countries postal service).</span></p>
          <p><span>Once the order is placed, you will receive a confirmation email with the address to mail your envelope to.</span></p>
          <p><span><meta charset="utf-8">We will notify you when we receive your inclusions!</span></p>
          <p><span>The address to mail the&nbsp;clothing to is:</span></p>
          <p><span>Petals and Keepsakes</span></p>
          <p><span>2451 Algoma Road</span></p>
          <p><span>Pontotoc, Mississippi 38863</span></p>
          <p>Please email me at&nbsp;support@petalsandkeepsakes.com<span>&nbsp;</span><meta charset="utf-8"><span data-mce-fragment="1">if you have any questions about the process!</span></p>
          <p>&nbsp;</p>
        </div>
      </div>

      <div class="lav-instr__item lav-drop">
        <div class="lav-drop__title">Flowers/Petals</div>
        <div class="lav-drop__body">
          <p>Please send the&nbsp;petals in a small box.<span>&nbsp;</span><meta charset="utf-8"><span data-mce-fragment="1">&nbsp;(It only takes around 2 petals to&nbsp;create&nbsp;an item, but you can send a little more if you would like).&nbsp;</span>You can get small boxes at places like Walmart, the post office, or just re-use one from around your house!</p>
          <p><meta charset="utf-8"><span>Please&nbsp;avoid&nbsp;sending your petals in a ziplock bag&nbsp;or envelope as moisture can get trapped during the shipping process and the petals will mold.</span></p>
          <p><span>Loosely wrap your flower petals in a paper towel to allow air flow to the petals.&nbsp;</span></p>
          <p><span>Please write the name that is associated with the order and the order number on a note and put it in the box&nbsp;so I know who the petals belong to.</span></p>
          <p><span></span><span>We highly suggest mailing your package via USPS with insurance and tracking.</span></p>
          <p><span><meta charset="utf-8">(If&nbsp;you are sending from out of the country, you can send using your&nbsp;countries postal system).</span></p>
          <p><span><meta charset="utf-8">We will notify you when we receive your inclusions!</span></p>
          <p><span>The address to mail the&nbsp;petals to is:</span></p>
          <p><span>Petals and Keepsakes</span></p>
          <p><span>2451 Algoma Road</span></p>
          <p><span>Pontotoc, Mississippi 38863</span></p>
          <p>Please email me at<span>&nbsp;</span><meta charset="utf-8"><span data-mce-fragment="1">support@petalsandkeepsakes.com</span><span>&nbsp;</span><meta charset="utf-8"><span data-mce-fragment="1">if you have any questions about the process!</span></p>
        </div>
      </div>

      <div class="lav-instr__item lav-drop">
        <div class="lav-drop__title">Hair</div>
        <div class="lav-drop__body">
          <p>Please send a few strands or a half penny size amount hair/fur in a ziplock bag. Please write the name associated with the order<span>&nbsp;</span><strong>and</strong><span>&nbsp;</span>the order number on the ziplock bag.</p>
          <p>If you don't have that much hair,&nbsp;you can just&nbsp;send what you have. Any unused hair will be returned to you!</p>
          <p><span>We highly suggest mailing your package via USPS with tracking.</span></p>
          <p><span><meta charset="utf-8">(If&nbsp;you are sending from out of the country, you can send using your&nbsp;countries postal system).</span></p>
          <p><span>Once the order is placed, you will receive a confirmation email with the address to mail your envelope to.</span></p>
          <p><span><meta charset="utf-8">We will notify you when we receive your inclusions!</span></p>
          <p><span>The address to mail the&nbsp;hair to is:</span></p>
          <p><span>Petals and Keepsakes</span></p>
          <p><span>2451 Algoma Road</span></p>
          <p><span>Pontotoc, Mississippi 38863</span></p>
          <p>Please email me at&nbsp;support@petalsandkeepsakes.com<span>&nbsp;</span><meta charset="utf-8"><span data-mce-fragment="1">if you have any questions about the process!</span></p>
        </div>
      </div>

      <div class="lav-instr__item lav-drop">
        <div class="lav-drop__title">Breast Milk</div>
        <div class="lav-drop__body">
          <p><span>Place 2ml of breast milk in a small container with the lid taped shut or in a secured breast milk bag. Please double bag the breast milk bag/container. Write the name associated with the order and the order number on the bag or a sticky note. You can send your breastmilk in a bubble mailer or a small box with a tracking number attached.</span></p>
          <p><span>We highly suggest mailing your package via USPS with insurance and tracking.</span></p>
          <p><span><meta charset="utf-8">(If&nbsp;you are sending from out of the country, you can send using your&nbsp;countires postal system).</span></p>
          <p><span><meta charset="utf-8">We will notify you when we receive your inclusions!</span></p>
          <p><span>The address to mail the&nbsp;breastmilk&nbsp;to is:</span></p>
          <p><span>Petals and Keepsakes</span></p>
          <p><span>2451 Algoma Road</span></p>
          <p><span>Pontotoc, Mississippi 38863</span></p>
          <p>Please email me at<span>&nbsp;</span><meta charset="utf-8"><span data-mce-fragment="1">support@petalsandkeepsakes.com</span><span>&nbsp;</span><meta charset="utf-8"><span data-mce-fragment="1">if you have any questions about the process!</span></p>
        </div>
      </div>
    </div>

    <div class="lav-instr__descr">
      <p>
        <strong>Other Inclusions:</strong> If you are sending any other inclusions, you can send 1/4 of a teaspoon worth or a penny size amount of the material and follow the same instructions listed for sending ashes.
      </p>
      <p>
        <strong>Mailing more than one inclusion:</strong> If you are sending multiple inclusions (such as ash and fabric), you can follow the instructions as normal and send them all in one package!
      </p>
    </div>
  </div>
  `

    new Modal('lav-instr', markup)

    waitFor(
      () => typeof $ === 'function',
      () => {
        _$$('.lav-drop__title').forEach((element) => {
          element.addEventListener('click', () => {
            if (
              !element.classList.contains('active') &&
              _$('.lav-drop__title.active')
            ) {
              $(_$('.lav-drop__title.active').nextElementSibling).slideUp()
              _$('.lav-drop__title.active').classList.remove('active')
            }

            element.classList.toggle('active')
            $(element.nextElementSibling).slideToggle()
          })
        })
      }
    )
  }

  function openModal() {
    Modal.open('.lav-instr')
  }

  function addHowItWorks() {
    const markup = /* html */ `
    <div class="lav-how">
      <div class="lav-how__title">How it works</div>
      <div class="lav-how__descr">
        Place an order, send us a tiny ammount of inclusion as per <a href="#">mailing instructions</a>, and we’ll create and ship your handcrafted memorial jewelry within 6-8 weeks
      </div>
      
      <div class="lav-how__title">Jewelry Can be Created With:</div>
      <div class="lav-how__list">
        <div class="lav-how__item">Ashes</div>
        <div class="lav-how__item">Fabric</div>
        <div class="lav-how__item">Hair/Fur</div>
        <div class="lav-how__item">Flowers</div>
        <div class="lav-how__item">Breastmilk</div>
      </div>
      <div class="lav-how__descr">
        We can include multiple sets of ashes, flowers, or other keepsakes in one piece at no extra cost.
      </div>
    </div>
  `

    _$('[id*=price-template]').insertAdjacentHTML('afterend', markup)

    _$('.lav-how__descr a').addEventListener('click', function (e) {
      e.preventDefault()
      pushDataLayer(
        'exp_pdp_click_01',
        'Mailing instructions',
        'click',
        'How it works'
      )
      openModal()
    })

    visibilityEvent('.lav-how', () => {
      pushDataLayer('exp_pdp_view_01', 'How it works', 'view', 'Product info')
    })
  }

  function addReels() {
    const markup = /* html */ `
    <div class="lav-reels">
      <div class='lav-reels__title'>Loved by millions</div>

      <div class='lav-reels__list'>
        <div class='lav-reels__item' data-video='${config.dir}/video/1.mp4'>
          <video class='lav-reels__video' preload='metadata'>
            <source src='${config.dir}/video/1.mp4' type='video/mp4'>
          </video>
          <div class='lav-reels__views'>${getSvg('play')} 1.4M</div>
        </div>
        <div class='lav-reels__item' data-video='${config.dir}/video/2.mp4'>
          <video class='lav-reels__video' preload='metadata'>
            <source src='${config.dir}/video/2.mp4' type='video/mp4'>
          </video>

          <div class='lav-reels__views'>${getSvg(
            'play'
          )} 5.3M</div>        </div>
        <div class='lav-reels__item' data-video='${config.dir}/video/3.mp4'>
          <video class='lav-reels__video' preload='metadata'>
            <source src='${config.dir}/video/3.mp4' type='video/mp4'>
          </video>

          <div class='lav-reels__views'>${getSvg('play')} 9.3M</div>
        </div>
        <div class='lav-reels__item' data-video='${
          config.dir
        }/video/4.mp4'>          <video class='lav-reels__video' preload='metadata'>
            <source src='${config.dir}/video/4.mp4' type='video/mp4'>
          </video>

          <div class='lav-reels__views'>${getSvg('play')} 2.1M</div>
        </div>
        <div class='lav-reels__item' data-video='${config.dir}/video/5.mp4'>
          <video class='lav-reels__video' preload='metadata'>
            <source src='${
              config.dir
            }/video/5.mp4' type='video/mp4'>          </video>

          <div class='lav-reels__views'>${getSvg('play')} 3.7M</div>
        </div>
      </div>
    </div>
  `

    _$('.custom.dwa').insertAdjacentHTML('afterend', markup)
    // Add click event for fullscreen video playback
    _$$('.lav-reels__item').forEach((item) => {
      item.addEventListener('click', () => {
        const videoSrc = item.getAttribute('data-video')
        openFullscreenVideo(videoSrc)
        pushDataLayer('exp_pdp_click_06', 'Reels', 'click', 'Section')
      })
    })

    visibilityEvent('.lav-reels', () => {
      pushDataLayer('exp_pdp_view_02', 'Reels', 'view', 'Section')
    })
  }

  function addReview() {
    const markup = /* html */ `
    <div class="lav-review">
      <div class='lav-review__image'>
        <img src='${config.dir}/img/review.png' />

        <div class='lav-review__link'>
          All Reviews
        </div>
      </div>

      <div class='lav-review__info'>
        <div class='lav-review__head'>
          <div class='lav-review__title'>Excellent!</div>
          <div class='lav-review__trust'>
            ${getSvg('trust')}
          </div>
        </div>

        <div class='lav-review__descr'>
          I loved my necklace from Petals and Keepsakes so much that I got a ring as well. I love having such beautiful jewelry that also has Rhett with me at all times. ❤️ I highly recommend!
        </div>

        <div class='lav-review__author'>
          Michele H. ${getSvg('trustLabel')}
        </div>
      </div>
    </div>
  `

    _$('.custom.dwa').insertAdjacentHTML('afterend', markup)

    visibilityEvent('.lav-review', () => {
      pushDataLayer('exp_pdp_view_03', 'Trustpilot Reviews', 'view', 'Section')
    })

    _$('.lav-review__link').addEventListener('click', () => {
      pushDataLayer(
        'exp_pdp_click_07',
        'All reviews',
        'click',
        'Trustpilot Reviews'
      )
      _$('product-recommendations')?.scrollIntoView({ behavior: 'smooth' })
      //  const $targetSection = $('product-recommendations');
      // if ($targetSection.length) {
      //   const headerHeight = $('.header').outerHeight() || 0;
      //   const utilityBarHeight = $('.utility-bar').outerHeight() || 0;
      //   const totalOffset = headerHeight + utilityBarHeight;
        
      //   $('html, body').animate({
      //     scrollTop: $targetSection.offset().top - totalOffset
      //   }, 1000);
      // }
    })
  }

  function openFullscreenVideo(videoSrc) {
    // Create fullscreen video modal if it doesn't exist
    if (!_$('.lav-fullscreen-video')) {
      const fullscreenMarkup = `
      <div class="lav-fullscreen-video">
        <div class="lav-fullscreen-video__container">
          <div class="lav-fullscreen-video__close">
            ${getSvg('close')}
          </div>
          <video class="lav-fullscreen-video__video" controls autoplay>
            <source type="video/mp4">
          </video>
        </div>
      </div>
    `
      document.body.insertAdjacentHTML('beforeend', fullscreenMarkup)

      // Add close functionality
      _$('.lav-fullscreen-video__close').addEventListener(
        'click',
        closeFullscreenVideo
      )
      _$('.lav-fullscreen-video').addEventListener('click', (e) => {
        if (e.target === _$('.lav-fullscreen-video')) {
          closeFullscreenVideo()
        }
      })

      // Close on Escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && _$('.lav-fullscreen-video.active')) {
          closeFullscreenVideo()
        }
      })
    }

    // Set video source and show modal
    const video = _$('.lav-fullscreen-video__video')
    const source = video.querySelector('source')
    source.src = videoSrc
    video.load()

    _$('.lav-fullscreen-video').classList.add('active')
    document.body.style.overflow = 'hidden'
  }

  function closeFullscreenVideo() {
    const video = _$('.lav-fullscreen-video__video')
    video.pause()
    video.currentTime = 0

    _$('.lav-fullscreen-video').classList.remove('active')
    document.body.style.overflow = ''
  }

  function addBenefits() {
    const markup = /* html */ `
    <div class="lav-benefits">
      <div class='lav-benefit'>
        <div class='lav-benefit__icon'>
          ${getSvg('benefit1')}
        </div>
        <div class='lav-benefit__info'>
          <div class='lav-benefit__title'>
            Lifetime <span>Waranty ${getSvg('benefitDecor1')}</span>
          </div>
          <div class='lav-benefit__descr'>
            Every item is covered for life, giving you peace of mind
          </div>
        </div>
      </div>

      <div class='lav-benefit'>
        <div class='lav-benefit__icon'>
          ${getSvg('benefit2')}
        </div>
        <div class='lav-benefit__info'>
          <div class='lav-benefit__title'>
            Rigorous <span>Quality Assurance ${getSvg('benefitDecor2')}</span>
          </div>
          <div class='lav-benefit__descr'>
            Thorough inspections ensure every product is flawless
          </div>
        </div>
      </div>

      <div class='lav-benefit'>
        <div class='lav-benefit__icon'>
          ${getSvg('benefit3')}
        </div>
        <div class='lav-benefit__info'>
          <div class='lav-benefit__title'>
            Simple <span>Mailing Guide ${getSvg('benefitDecor3')}</span>
          </div>
          <div class='lav-benefit__descr'>
            Easy steps to mail your inclusion and keep your keepsake a lifetime. <a href="">Preview the instructions</a>
          </div>
        </div>
      </div>
    </div>
  `

    _$('.custom.dwa').insertAdjacentHTML('afterend', markup)

    visibilityEvent('.lav-benefits', () => {
      pushDataLayer('exp_pdp_view_04', 'USPs', 'view', 'Product Description')
    })

    _$('.lav-benefit__descr a').addEventListener('click', function (e) {
      e.preventDefault()
      pushDataLayer(
        'exp_pdp_click_08',
        'Preview the instructions',
        'click',
        'Product Description - USPs'
      )
      openModal()
    })
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

        setTimeout(() => {
          _$(modalName).classList.add('active')
        }, 300)

        if (typeof cb === 'function') cb()

        setTimeout(() => {
          _$('.lav-modal').classList.add('active')
        }, 100)
      }

      static close(cb) {
        document.body.classList.remove('lav-modal-open')

        _$('.lav-modal__inner.active')?.classList.remove('active')

        if (typeof cb === 'function') cb()

        setTimeout(() => {
          _$('.lav-modal')?.classList.remove('active')
        }, 300)
      }

      static addStyles() {
        const styles = /* css */ `
      .lav-modal {
        position: fixed;
        z-index: 99999999999;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: #00000091;
        transition: 0.35s;
        opacity: 0;
        pointer-events: none;
        overflow: hidden;
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
        width: 80%;
        margin-left: auto;
        overflow: auto;
        transform: translateX(100%);
        transition: 0.35s;
      }
      .lav-modal__inner.active {
        transform: translateX(0);
      }
      .lav-modal__close {
        position: absolute;
        right: 20px;;
        top: 20px;;
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

      .lav-instr {
        padding: 20px;
      }
      .lav-instr__title {
        color: #121212;
        font-size: 22px;
        font-weight: 700;
        line-height: 28px;
        letter-spacing: 0.6px;
        margin-top: 15px;
      }
      .lav-instr__descr {
        margin-top: 16px;
      }
      .lav-instr p {
        color: rgba(18, 18, 18, 0.75);
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: 27px;
        letter-spacing: 0;
        margin: 0;
      }
      .lav-instr p + p {
        margin-top: 10px;
      }

      .lav-instr__list {
        margin-top: 16px;
      }
      .lav-drop {
        border-top: 1px solid #C2BFBF;
      }
      .lav-drop__title {
        position: relative;
        color: #000;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 20.8px;
        padding: 15px 0;
        padding-right: 30px;
      }
      .lav-drop__title:before {
        content: '';
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 20px;
        height: 20px;
        background-image: url('${config.dir}/img/chevron-down.svg');
        background-size: contain;
        background-repeat: no-repeat;
        transition: 0.35s;
      }
      .lav-drop__title.active:before {
        transform: translateY(-50%) rotate(180deg);
      }
      .lav-drop__body {
        display: none;
        padding-bottom: 12px;
      }
      .lav-drop {
      }
      .lav-drop {
      }
      .lav-drop {
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
      threshold: 0.6,
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
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 1.95775V12.0422L9.80486 7L1.5 1.95775ZM0 1.29138C0 0.414296 0.959137 -0.125446 1.70884 0.329748L11.1113 6.03835C11.8328 6.47643 11.8328 7.52358 11.1113 7.96165L1.70884 13.6702C0.959137 14.1255 0 13.5857 0 12.7086V1.29138Z" fill="white"/>
      </svg>
    `,
      close: `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M18 6L6 18M6 6l12 12" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `,
      chevronRight: `
      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
        <path d="M1.98145 0.786865L7.07129 5.92944L7.14062 5.99976L7.07129 6.07007L1.98145 11.2136L1.91016 11.2849L1.83887 11.2136L0.958008 10.323H0.760742L0.928711 10.1531L5.03809 5.99976L0.928711 1.84741L0.859375 1.7771L0.928711 1.70679L1.83887 0.786865L1.91016 0.7146L1.98145 0.786865Z" fill="black" stroke="black" stroke-width="0.2"/>
      </svg>
    `,
      closeWhite: `
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
        <g clip-path="url(#clip0_344_4288)">
          <path d="M7.72559 9L0 16.7256L1.27441 18L9 10.2744L16.7256 18L18 16.7256L10.2744 9L18 1.27441L16.7256 0L9 7.72559L1.27441 0L0 1.27441L7.72559 9Z" fill="white"/>
        </g>
        <defs>
          <clipPath id="clip0_344_4288">
            <rect width="18" height="18" fill="white" transform="matrix(-1 0 0 1 18 0)"/>
          </clipPath>
        </defs>
      </svg>
    `,
      trustLabel: `
      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.907 10.4489L14.5632 10.7927C14.3447 11.0113 14.2219 11.3079 14.2218 11.6171V12.1C14.2218 12.719 13.976 13.3123 13.5384 13.7499C13.1008 14.1875 12.5073 14.4333 11.8885 14.4333H11.4055C11.0963 14.4334 10.7998 14.5562 10.5811 14.7748L10.2373 15.1185C9.79983 15.5555 9.20679 15.8009 8.58847 15.8009C7.97015 15.8009 7.37711 15.5555 6.93962 15.1185L6.59585 14.7748C6.37714 14.5562 6.08062 14.4334 5.77142 14.4333H5.28998C4.67116 14.4333 4.07768 14.1875 3.6401 13.7499C3.20253 13.3123 2.9567 12.719 2.9567 12.1V11.6171C2.95663 11.3079 2.83383 11.0113 2.61526 10.7927L2.27149 10.4489C1.83454 10.0114 1.58911 9.41837 1.58911 8.80005C1.58911 8.18173 1.83454 7.58869 2.27149 7.15119L2.61526 6.80742C2.83383 6.58872 2.95663 6.29219 2.9567 5.983V5.50001C2.9567 4.88118 3.20253 4.2877 3.6401 3.85012C4.07768 3.41255 4.67116 3.16672 5.28998 3.16672H5.77297C6.08217 3.16665 6.3787 3.04385 6.5974 2.82528L6.94117 2.48151C7.37866 2.04456 7.9717 1.79913 8.59003 1.79913C9.20835 1.79913 9.80139 2.04456 10.2389 2.48151L10.5826 2.82528C10.8014 3.04385 11.0979 3.16665 11.4071 3.16672H11.8901C12.5089 3.16672 13.1024 3.41255 13.54 3.85012C13.9775 4.2877 14.2234 4.88118 14.2234 5.50001V5.983C14.2234 6.29219 14.3462 6.58872 14.5648 6.80742L14.9086 7.15119C15.3453 7.58889 15.5905 8.18205 15.5902 8.80037C15.5899 9.41869 15.3442 10.0116 14.907 10.4489Z" fill="black"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.73466 9.31456C5.60513 9.17554 5.53461 8.99168 5.53796 8.8017C5.54131 8.61172 5.61827 8.43045 5.75263 8.2961C5.88699 8.16174 6.06825 8.08478 6.25823 8.08143C6.44821 8.07807 6.63207 8.14859 6.77109 8.27813L6.77492 8.2817L7.81212 9.31832L10.4086 6.72254C10.5477 6.593 10.7316 6.52255 10.9216 6.5259C11.1116 6.52925 11.2928 6.60622 11.4272 6.74057C11.5615 6.87493 11.6385 7.05619 11.6419 7.24617C11.6452 7.43615 11.5747 7.62002 11.4452 7.75903L11.4415 7.76291L8.33084 10.8735C8.26294 10.9419 8.18191 10.9964 8.09291 11.0333C8.00392 11.0702 7.90849 11.0892 7.81214 11.089C7.71579 11.0892 7.62036 11.0702 7.53136 11.0333C7.44236 10.9964 7.36158 10.9421 7.29368 10.8738L5.73466 9.31456Z" fill="white"/>
      </svg>
    `,
      trust: `
      <svg xmlns="http://www.w3.org/2000/svg" width="88" height="16" viewBox="0 0 88 16" fill="none">
        <g clip-path="url(#clip0_344_3633)">
          <path d="M16.3125 0H0V16H16.3125V0Z" fill="#00B67A"/>
          <path d="M33.9844 0H17.6719V16H33.9844V0Z" fill="#00B67A"/>
          <path d="M51.6562 0H35.3438V16H51.6562V0Z" fill="#00B67A"/>
          <path d="M69.3281 0H53.0156V16H69.3281V0Z" fill="#00B67A"/>
          <path d="M87 0H70.6875V16H87V0Z" fill="#00B67A"/>
          <path d="M8.15627 10.7833L10.6371 10.1667L11.6737 13.3L8.15627 10.7833ZM13.8656 6.73333H9.49866L8.15627 2.7L6.81389 6.73333H2.4469L5.98127 9.23333L4.63889 13.2667L8.17327 10.7667L10.3483 9.23333L13.8656 6.73333Z" fill="white"/>
          <path d="M25.8281 10.7833L28.309 10.1667L29.3455 13.3L25.8281 10.7833ZM31.5375 6.73333H27.1705L25.8281 2.7L24.4858 6.73333H20.1188L23.6531 9.23333L22.3108 13.2667L25.8451 10.7667L28.0201 9.23333L31.5375 6.73333Z" fill="white"/>
          <path d="M43.5 10.7833L45.9809 10.1667L47.0174 13.3L43.5 10.7833ZM49.2094 6.73333H44.8424L43.5 2.7L42.1576 6.73333H37.7906L41.325 9.23333L39.9826 13.2667L43.517 10.7667L45.692 9.23333L49.2094 6.73333Z" fill="white"/>
          <path d="M61.1719 10.7833L63.6528 10.1667L64.6893 13.3L61.1719 10.7833ZM66.8813 6.73333H62.5143L61.1719 2.7L59.8295 6.73333H55.4625L58.9969 9.23333L57.6545 13.2667L61.1889 10.7667L63.3639 9.23333L66.8813 6.73333Z" fill="white"/>
          <path d="M78.8438 10.7833L81.3246 10.1667L82.3612 13.3L78.8438 10.7833ZM84.5532 6.73333H80.1862L78.8438 2.7L77.5014 6.73333H73.1344L76.6688 9.23333L75.3264 13.2667L78.8608 10.7667L81.0358 9.23333L84.5532 6.73333Z" fill="white"/>
        </g>
        <defs>
          <clipPath id="clip0_344_3633">
            <rect width="87" height="16" fill="white" transform="translate(0.5)"/>
          </clipPath>
        </defs>
      </svg>
    `,
      benefit1: `
      <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
        <g clip-path="url(#clip0_344_3660)">
          <path d="M14.0002 3.89999C12.385 3.89999 10.806 4.37896 9.46301 5.27633C8.12001 6.17369 7.07327 7.44915 6.45515 8.94141C5.83703 10.4337 5.67531 12.0757 5.99042 13.6599C6.30553 15.2441 7.08333 16.6992 8.22546 17.8414C9.36759 18.9835 10.8228 19.7613 12.4069 20.0764C13.9911 20.3915 15.6332 20.2298 17.1254 19.6117C18.6177 18.9936 19.8931 17.9468 20.7905 16.6038C21.6879 15.2608 22.1668 13.6819 22.1668 12.0667C22.1668 9.90073 21.3064 7.8235 19.7749 6.29195C18.2433 4.76041 16.1661 3.89999 14.0002 3.89999ZM14.0002 19.0667C12.6157 19.0667 11.2623 18.6561 10.1112 17.8869C8.96003 17.1178 8.06282 16.0245 7.53301 14.7454C7.0032 13.4664 6.86457 12.0589 7.13467 10.701C7.40477 9.34316 8.07145 8.09588 9.05042 7.11691C10.0294 6.13795 11.2767 5.47126 12.6345 5.20116C13.9924 4.93107 15.3999 5.06969 16.679 5.5995C17.958 6.12932 19.0513 7.02653 19.8205 8.17767C20.5896 9.32881 21.0002 10.6822 21.0002 12.0667C21.0002 13.9232 20.2627 15.7037 18.9499 17.0164C17.6372 18.3292 15.8567 19.0667 14.0002 19.0667Z" fill="#A72561"/>
          <path d="M24.9494 10.4742C24.7952 10.3348 24.6903 10.1492 24.6503 9.9452C24.6104 9.74121 24.6375 9.52977 24.7277 9.34249C24.8559 9.07351 24.926 8.78057 24.9335 8.48271C24.941 8.18486 24.8857 7.88876 24.7713 7.61366C24.6569 7.33856 24.4858 7.09063 24.2693 6.88598C24.0527 6.68133 23.7955 6.52455 23.5144 6.42583C23.317 6.35939 23.147 6.22958 23.0309 6.05657C22.9149 5.88356 22.8593 5.67705 22.8727 5.46916C22.89 5.16189 22.8407 4.85452 22.7284 4.568C22.6161 4.28147 22.4433 4.02254 22.2219 3.80883C22.0004 3.59513 21.7355 3.43168 21.4451 3.32964C21.1548 3.22759 20.8459 3.18934 20.5394 3.21749C20.3413 3.21819 20.148 3.15662 19.9868 3.04148C19.8256 2.92634 19.7046 2.76344 19.6411 2.57583C19.5423 2.29471 19.3856 2.03751 19.1809 1.82096C18.9763 1.60441 18.7283 1.43336 18.4532 1.31892C18.1781 1.20448 17.882 1.14922 17.5842 1.15672C17.2863 1.16423 16.9934 1.23434 16.7244 1.36249C15.6277 1.86416 15.5869 0.399994 14.0002 0.399994C13.6994 0.401658 13.4022 0.46637 13.1279 0.589954C12.8536 0.713538 12.6083 0.893249 12.4077 1.11749C12.2662 1.26856 12.0808 1.37127 11.8777 1.41105C11.6746 1.45084 11.4641 1.42569 11.2761 1.33916C11.0072 1.21006 10.7141 1.13921 10.416 1.13123C10.1179 1.12326 9.82146 1.17835 9.54611 1.2929C9.27076 1.40745 9.02271 1.57886 8.8182 1.79593C8.61369 2.01299 8.45735 2.27081 8.3594 2.55249C8.29101 2.74986 8.15991 2.91942 7.98612 3.03528C7.81232 3.15115 7.60538 3.20695 7.3969 3.19416C7.08963 3.17694 6.78225 3.22616 6.49573 3.33849C6.20921 3.45081 5.95027 3.62359 5.73657 3.84504C5.52286 4.06649 5.35942 4.33142 5.25737 4.62176C5.15532 4.9121 5.11707 5.22103 5.14523 5.52749C5.14593 5.72559 5.08436 5.9189 4.96921 6.0801C4.85407 6.2413 4.69118 6.36224 4.50356 6.42583C4.223 6.52532 3.96642 6.68253 3.75038 6.88732C3.53434 7.09211 3.36365 7.33992 3.24931 7.61477C3.13498 7.88961 3.07954 8.18538 3.08659 8.48297C3.09364 8.78056 3.16301 9.07337 3.29023 9.34249C3.3884 9.53435 3.41934 9.75361 3.37809 9.96514C3.33684 10.1767 3.22579 10.3682 3.06273 10.5092C2.83859 10.7089 2.65922 10.9538 2.53641 11.2277C2.41359 11.5017 2.3501 11.7985 2.3501 12.0987C2.3501 12.399 2.41359 12.6958 2.53641 12.9698C2.65922 13.2437 2.83859 13.4886 3.06273 13.6883C3.21692 13.8277 3.32184 14.0133 3.3618 14.2173C3.40176 14.4213 3.3746 14.6327 3.28439 14.82C3.1553 15.0888 3.08444 15.3819 3.07647 15.68C3.0685 15.9782 3.12359 16.2746 3.23813 16.5499C3.35268 16.8253 3.5241 17.0733 3.74116 17.2779C3.95823 17.4824 4.21604 17.6387 4.49773 17.7367C4.69509 17.805 4.86465 17.9361 4.98052 18.1099C5.09638 18.2837 5.15218 18.4907 5.13939 18.6992C5.11096 19.1807 5.24825 19.6575 5.52843 20.0502C5.80861 20.4428 6.21479 20.7277 6.67939 20.8575C3.93189 25.6233 3.92606 25.4133 4.19439 25.8158C4.46273 26.2183 4.64356 26.0842 7.21023 25.775C8.21356 28.1433 8.19606 28.4 8.6744 28.4C9.15273 28.4 9.05356 28.4 12.2327 22.8758C12.298 22.9179 12.3586 22.9668 12.4136 23.0217C12.6133 23.2458 12.8582 23.4252 13.1321 23.548C13.4061 23.6708 13.7029 23.7343 14.0031 23.7343C14.3034 23.7343 14.6002 23.6708 14.8742 23.548C15.1481 23.4252 15.393 23.2458 15.5927 23.0217C15.6461 22.9691 15.7047 22.9222 15.7677 22.8817C19.0286 28.5342 18.8361 28.4408 19.3261 28.4058C19.8161 28.3708 19.7869 28.155 20.8019 25.7692C23.3511 26.0783 23.5552 26.2125 23.8177 25.81C24.0802 25.4075 23.9461 25.3842 21.3327 20.8575C21.8065 20.7217 22.2187 20.4262 22.4994 20.0211C22.7801 19.616 22.912 19.1263 22.8727 18.635C22.872 18.4369 22.9336 18.2436 23.0487 18.0824C23.1639 17.9212 23.3268 17.8002 23.5144 17.7367C23.795 17.6372 24.0515 17.48 24.2676 17.2752C24.4836 17.0704 24.6543 16.8226 24.7686 16.5477C24.883 16.2729 24.9384 15.9771 24.9314 15.6795C24.9243 15.3819 24.8549 15.0891 24.7277 14.82C24.6394 14.6323 24.6133 14.4214 24.6531 14.2178C24.693 14.0143 24.7968 13.8288 24.9494 13.6883C25.1802 13.489 25.3654 13.2423 25.4924 12.965C25.6193 12.6876 25.685 12.3862 25.685 12.0812C25.685 11.7763 25.6193 11.4748 25.4924 11.1975C25.3654 10.9202 25.1802 10.6735 24.9494 10.4742ZM8.78523 26.5158C7.75856 24.1183 8.30689 24.4567 5.75773 24.7658C8.12606 20.6825 7.86939 21.05 7.93939 21.0908C8.12413 21.2036 8.26425 21.3767 8.33606 21.5808C8.5096 22.0798 8.86243 22.4964 9.32599 22.7497C9.78955 23.0031 10.3307 23.0751 10.8444 22.9517L8.78523 26.5158ZM19.2152 26.5158L17.1561 22.9517C17.6689 23.0748 18.2093 23.0026 18.6719 22.7492C19.1345 22.4958 19.4862 22.0793 19.6586 21.5808C19.7447 21.3616 19.9032 21.1784 20.1077 21.0617L22.2427 24.7658C19.6702 24.4508 20.2244 24.1475 19.2152 26.5158ZM24.1794 12.7842C23.8335 13.0928 23.5975 13.5056 23.507 13.9602C23.4165 14.4149 23.4764 14.8866 23.6777 15.3042C23.7371 15.4255 23.77 15.5581 23.7741 15.6932C23.7782 15.8282 23.7535 15.9626 23.7016 16.0873C23.6497 16.212 23.5719 16.3243 23.4732 16.4166C23.3745 16.5089 23.2573 16.5791 23.1294 16.6225C22.6848 16.7801 22.3044 17.0797 22.0471 17.4751C21.7899 17.8705 21.67 18.3396 21.7061 18.81C21.7057 18.9438 21.6777 19.0762 21.6236 19.1986C21.5696 19.3211 21.4907 19.431 21.3921 19.5214C21.2934 19.6119 21.177 19.6809 21.0504 19.7241C20.9237 19.7673 20.7894 19.7838 20.6561 19.7725C20.1998 19.754 19.7497 19.8823 19.3717 20.1384C18.9938 20.3946 18.7079 20.7652 18.5561 21.1958C18.5111 21.3226 18.44 21.4386 18.3474 21.5362C18.2548 21.6338 18.1428 21.711 18.0186 21.7626C17.8944 21.8143 17.7607 21.8394 17.6262 21.8362C17.4917 21.833 17.3594 21.8016 17.2377 21.7442C16.8209 21.5464 16.3515 21.4879 15.8988 21.5772C15.4462 21.6664 15.0342 21.8988 14.7236 22.24C14.6304 22.3372 14.5186 22.4146 14.3948 22.4675C14.271 22.5203 14.1378 22.5476 14.0031 22.5476C13.8685 22.5476 13.7353 22.5203 13.6115 22.4675C13.4877 22.4146 13.3758 22.3372 13.2827 22.24C12.9741 21.8941 12.5613 21.6581 12.1066 21.5676C11.652 21.4771 11.1803 21.537 10.7627 21.7383C10.6408 21.7968 10.5079 21.8289 10.3728 21.8326C10.2376 21.8363 10.1032 21.8115 9.97824 21.7598C9.85331 21.708 9.74068 21.6306 9.64769 21.5324C9.55471 21.4342 9.48345 21.3175 9.43856 21.19C9.2838 20.7447 8.98562 20.3634 8.59079 20.1058C8.19596 19.8482 7.72681 19.7289 7.25689 19.7667C7.12305 19.7663 6.99073 19.7383 6.86828 19.6842C6.74583 19.6302 6.63591 19.5513 6.54547 19.4527C6.45502 19.354 6.38602 19.2376 6.3428 19.111C6.29959 18.9843 6.28311 18.85 6.29439 18.7167C6.31382 18.2602 6.18594 17.8097 5.92964 17.4315C5.67333 17.0534 5.3022 16.7677 4.87106 16.6167C4.74255 16.574 4.6247 16.5043 4.5255 16.4122C4.42629 16.32 4.34804 16.2076 4.29604 16.0826C4.24404 15.9576 4.21952 15.8229 4.22412 15.6876C4.22873 15.5523 4.26235 15.4195 4.32273 15.2983C4.52233 14.8818 4.5819 14.412 4.49253 13.9589C4.40317 13.5057 4.16968 13.0937 3.82689 12.7842C3.72496 12.6939 3.64336 12.5829 3.58747 12.4587C3.53158 12.3346 3.50268 12.1999 3.50268 12.0637C3.50268 11.9276 3.53158 11.7929 3.58747 11.6687C3.64336 11.5446 3.72496 11.4336 3.82689 11.3433C4.17113 11.0336 4.40598 10.6208 4.49639 10.1667C4.58681 9.71251 4.52793 9.24129 4.32856 8.82333C4.26819 8.70214 4.23456 8.56939 4.22995 8.43408C4.22535 8.29876 4.24988 8.16404 4.30187 8.03903C4.35387 7.91401 4.43212 7.80164 4.53133 7.7095C4.63054 7.61736 4.74839 7.54762 4.87689 7.50499C5.32153 7.34742 5.70188 7.04778 5.95916 6.65238C6.21643 6.25698 6.3363 5.78784 6.30023 5.31749C6.29967 5.18338 6.32715 5.05064 6.3809 4.92777C6.43464 4.8049 6.51347 4.69462 6.61234 4.604C6.71119 4.51338 6.8279 4.44441 6.95497 4.40153C7.08204 4.35865 7.21667 4.3428 7.35023 4.35499C7.80664 4.37442 8.2572 4.24654 8.63536 3.99024C9.01351 3.73393 9.2992 3.3628 9.45023 2.93166C9.49522 2.80487 9.5663 2.68891 9.65887 2.59129C9.75144 2.49366 9.86345 2.41652 9.98768 2.36485C10.1119 2.31318 10.2456 2.28813 10.3801 2.29131C10.5146 2.2945 10.6469 2.32584 10.7686 2.38333C11.185 2.58293 11.6549 2.6425 12.108 2.55313C12.5611 2.46377 12.9732 2.23028 13.2827 1.88749C13.3758 1.79027 13.4877 1.71289 13.6115 1.66003C13.7353 1.60718 13.8685 1.57993 14.0031 1.57993C14.1378 1.57993 14.271 1.60718 14.3948 1.66003C14.5186 1.71289 14.6304 1.79027 14.7236 1.88749C15.0333 2.23173 15.4461 2.46658 15.9002 2.55699C16.3544 2.64741 16.8256 2.58853 17.2436 2.38916C17.3651 2.33073 17.4975 2.29865 17.6323 2.295C17.7671 2.29136 17.9011 2.31624 18.0256 2.36801C18.15 2.41978 18.2622 2.49728 18.3546 2.59543C18.447 2.69357 18.5177 2.81014 18.5619 2.93749C18.7195 3.38213 19.0191 3.76248 19.4145 4.01976C19.8099 4.27703 20.279 4.3969 20.7494 4.36083C20.8832 4.36116 21.0156 4.38923 21.138 4.44328C21.2605 4.49732 21.3704 4.57617 21.4608 4.67483C21.5513 4.7735 21.6203 4.88984 21.6635 5.01652C21.7067 5.1432 21.7232 5.27746 21.7119 5.41083C21.6925 5.86724 21.8204 6.3178 22.0767 6.69596C22.333 7.07411 22.7041 7.3598 23.1352 7.51083C23.2637 7.55345 23.3816 7.6232 23.4808 7.71533C23.58 7.80747 23.6583 7.91985 23.7103 8.04486C23.7622 8.16987 23.7868 8.3046 23.7822 8.43991C23.7776 8.57523 23.7439 8.70797 23.6836 8.82916C23.484 9.24564 23.4244 9.71551 23.5138 10.1686C23.6031 10.6217 23.8366 11.0338 24.1794 11.3433C24.2813 11.4336 24.3629 11.5446 24.4188 11.6687C24.4747 11.7929 24.5036 11.9276 24.5036 12.0637C24.5036 12.1999 24.4747 12.3346 24.4188 12.4587C24.3629 12.5829 24.2813 12.6939 24.1794 12.7842Z" fill="#A72561"/>
          <path d="M15.8319 9.79166C14.4435 6.98583 14.4844 6.81666 14.0002 6.81666C13.516 6.81666 13.5569 6.97999 12.1685 9.79166C9.07687 10.2408 8.93103 10.1475 8.77937 10.6083C8.6277 11.0692 8.77937 11.0867 11.0427 13.2683C10.5119 16.3483 10.3835 16.465 10.7744 16.7683C11.1652 17.0717 11.2294 16.8967 14.0002 15.4383C16.8177 16.92 16.6835 16.8792 16.8819 16.8792C16.9676 16.8804 17.0525 16.8628 17.1306 16.8274C17.2087 16.7921 17.2781 16.7401 17.3338 16.6749C17.3895 16.6097 17.4301 16.5331 17.4529 16.4504C17.4756 16.3678 17.4798 16.2811 17.4652 16.1967L16.9635 13.28L19.081 11.2208C19.1598 11.1447 19.2155 11.048 19.2419 10.9417C19.2682 10.8354 19.2641 10.7239 19.2301 10.6198C19.196 10.5157 19.1333 10.4233 19.0492 10.3532C18.965 10.2831 18.8629 10.2381 18.7544 10.2233L15.8319 9.79166ZM15.9252 12.65C15.6335 12.9358 15.7444 13.0642 16.1119 15.2108C14.076 14.1433 14.1927 14.1783 14.0002 14.1783C13.8077 14.1783 13.9244 14.1433 11.8885 15.2108C12.2619 13.0525 12.3669 12.93 12.0752 12.65L10.5877 11.1975L12.641 10.9C13.0494 10.8417 13.0377 10.6725 14.0002 8.71833C14.9744 10.69 14.9569 10.8417 15.3594 10.9L17.4127 11.1975L15.9252 12.65Z" fill="#A72561"/>
        </g>
        <defs>
          <clipPath id="clip0_344_3660">
            <rect width="28" height="28" fill="white" transform="translate(0.5 0.399994)"/>
          </clipPath>
        </defs>
      </svg>
    `,
      benefit2: `
      <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
        <path d="M19.895 20.8452C20.2575 20.8452 20.5513 20.5514 20.5513 20.189C20.5513 19.8266 20.2575 19.5327 19.895 19.5327C19.5326 19.5327 19.2388 19.8266 19.2388 20.189C19.2388 20.5514 19.5326 20.8452 19.895 20.8452Z" fill="#A72561"/>
        <path d="M10.7554 6.96249C11.1178 6.96249 11.4116 6.66868 11.4116 6.30624C11.4116 5.94381 11.1178 5.64999 10.7554 5.64999C10.3929 5.64999 10.0991 5.94381 10.0991 6.30624C10.0991 6.66868 10.3929 6.96249 10.7554 6.96249Z" fill="#A72561"/>
        <path d="M14.0001 21.771C13.5809 21.771 13.1749 21.596 12.8871 21.2906L6.54682 14.575C6.09095 14.092 5.9982 13.3762 6.31495 12.7926L8.11657 9.47724C8.38432 8.98461 8.8997 8.67749 9.46232 8.67749H18.5396C19.1022 8.67749 19.6167 8.98462 19.8853 9.47812L21.6869 12.7926C22.0037 13.3762 21.9109 14.092 21.4551 14.575L15.1148 21.2906C14.8269 21.596 14.4209 21.771 14.0018 21.771H14.0001ZM7.50057 13.6746L13.8408 20.3902C13.9537 20.5101 14.0456 20.5101 14.1584 20.3902L20.4987 13.6746C20.5634 13.6055 20.5774 13.5031 20.5319 13.42L18.7294 10.1046C18.6918 10.0337 18.6183 9.98999 18.5378 9.98999H9.46145C9.38095 9.98999 9.30745 10.0337 9.26982 10.1037L7.4682 13.42C7.4227 13.5031 7.43582 13.6055 7.50145 13.6746H7.50057Z" fill="#A72561"/>
        <path d="M13.3876 21.3492L10.5622 13.973C10.4222 13.6081 10.4266 13.2091 10.5736 12.8477L12.1092 9.08524L13.3246 9.58049L11.7898 13.3421C11.7688 13.3937 11.7688 13.4506 11.789 13.5031L14.6143 20.8794L13.3893 21.3492H13.3876Z" fill="#A72561"/>
        <path d="M14.6126 21.3492L13.3876 20.8794L16.2129 13.5031C16.2322 13.4506 16.2322 13.3937 16.2112 13.3412L14.6764 9.58049L15.8918 9.08524L17.4266 12.8469C17.5736 13.2091 17.5779 13.6081 17.4388 13.973L14.6126 21.3492Z" fill="#A72561"/>
        <path d="M6.79968 12.7585H21.2066V14.071H6.79968V12.7585Z" fill="#A72561"/>
        <path d="M13.8147 27.3054C12.1741 27.2826 10.5877 26.958 9.0871 26.3385C8.7441 26.1967 8.59798 25.7846 8.75723 25.4495C8.9086 25.1301 9.28223 24.9997 9.60948 25.1336C10.9264 25.6744 12.3167 25.9622 13.7552 25.9911C19.9695 26.118 25.3166 21.1305 25.5835 14.9206C25.6937 12.3586 24.9911 9.91299 23.5614 7.83837C23.361 7.54787 23.4091 7.15499 23.6891 6.93887C23.9831 6.71224 24.4171 6.76824 24.628 7.07274C26.399 9.63212 27.1751 12.699 26.8251 15.891C26.1102 22.408 20.3702 27.3946 13.8156 27.3036L13.8147 27.3054Z" fill="#A72561"/>
        <path d="M3.0765 19.902C2.74575 20.0691 2.331 19.9335 2.18137 19.594C1.4595 17.9577 1.09375 16.2139 1.09375 14.4C1.09375 7.28362 6.88362 1.49374 14 1.49374C16.03 1.49374 18.032 1.97237 19.8301 2.88324C20.1609 3.05037 20.2737 3.47212 20.0891 3.79324C19.9124 4.10037 19.53 4.20187 19.2132 4.04262C17.6041 3.23237 15.8147 2.80624 14 2.80624C7.60725 2.80624 2.40625 8.00724 2.40625 14.4C2.40625 16.0205 2.73088 17.5789 3.37225 19.041C3.514 19.3647 3.39237 19.7427 3.0765 19.902Z" fill="#A72561"/>
        <path d="M10.0992 22.8814C10.1018 22.5287 9.85245 22.2312 9.50595 22.163C8.98095 22.0597 8.20833 21.8217 7.60108 21.2749C6.97283 20.7087 6.56595 19.9422 6.43295 19.118C6.37783 18.7741 6.07858 18.5239 5.72945 18.5239C5.37858 18.5239 5.08108 18.7767 5.02508 19.1232C4.87545 20.0542 4.37933 20.8916 3.61195 21.4779C3.11583 21.8585 2.54533 22.1017 1.93895 22.1962C1.60558 22.2479 1.36758 22.548 1.3667 22.8857V22.9059C1.36583 23.2515 1.61345 23.5472 1.9547 23.6015C2.75883 23.7301 3.49208 24.116 4.06258 24.7224C4.58058 25.2727 4.91308 25.9579 5.02858 26.6929C5.08108 27.0297 5.38033 27.2712 5.72158 27.2712H5.73733C6.0847 27.2712 6.37783 27.0184 6.43295 26.6754C6.55195 25.9351 6.89233 25.2491 7.41995 24.6987C7.98608 24.1081 8.70883 23.7301 9.49808 23.6024C9.84283 23.5464 10.0957 23.2497 10.0992 22.9006C10.0992 22.8936 10.0992 22.8875 10.0992 22.8805V22.8814ZM6.47233 23.7905C6.17308 24.102 5.93683 24.4555 5.73033 24.8239C5.53083 24.4677 5.3042 24.1265 5.01895 23.8237C4.66983 23.4527 4.26733 23.1412 3.8307 22.8945C4.02933 22.7807 4.2262 22.6617 4.41083 22.52C4.96033 22.1 5.39958 21.5802 5.72858 21.001C5.98845 21.4612 6.32095 21.8821 6.7182 22.2444C6.99733 22.499 7.30795 22.7064 7.63083 22.8892C7.20995 23.1281 6.81883 23.4282 6.4732 23.7896L6.47233 23.7905Z" fill="#A72561"/>
        <path d="M22.6484 4.24387C22.6484 3.88143 22.3546 3.58762 21.9922 3.58762C21.6298 3.58762 21.3359 3.88143 21.3359 4.24387V6.43137C21.3359 6.7938 21.6298 7.08762 21.9922 7.08762C22.3546 7.08762 22.6484 6.7938 22.6484 6.43137V4.24387Z" fill="#A72561"/>
        <path d="M23.0859 4.68137H20.8984C20.536 4.68137 20.2422 4.97518 20.2422 5.33762C20.2422 5.70005 20.536 5.99387 20.8984 5.99387H23.0859C23.4484 5.99387 23.7422 5.70005 23.7422 5.33762C23.7422 4.97518 23.4484 4.68137 23.0859 4.68137Z" fill="#A72561"/>
      </svg>
    `,
      benefit3: `
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="29" viewBox="0 0 26 29" fill="none">
        <path d="M25.3827 12.2959C25.2135 12.1982 25.005 12.1982 24.8358 12.2959L23.3797 13.1366V7.23591C23.3797 7.04057 23.2754 6.85999 23.1062 6.76232L12.2133 0.473288C12.0441 0.375562 11.8356 0.375562 11.6664 0.473288L0.773436 6.76227C0.604234 6.85994 0.5 7.04052 0.5 7.23586V19.814C0.5 20.0094 0.604234 20.19 0.773436 20.2876L11.6664 26.5766C11.751 26.6255 11.8454 26.6499 11.9399 26.6499C12.0343 26.6499 12.1287 26.6255 12.2133 26.5766L15.6932 24.5675V27.8531C15.6932 28.0485 15.7974 28.229 15.9666 28.3267C16.0512 28.3756 16.1456 28.4 16.24 28.4C16.3345 28.4 16.4289 28.3756 16.5135 28.3267L25.3828 23.206C25.552 23.1083 25.6562 22.9278 25.6562 22.7324V12.7695C25.6561 12.5742 25.5519 12.3936 25.3827 12.2959ZM11.9399 12.8935L9.68024 11.5889L19.4794 5.93135L21.7391 7.23591L11.9399 12.8935ZM5.19167 10.2603L8.03962 11.9046V14.6208L6.81463 13.1361C6.68409 12.9779 6.47595 12.9062 6.27574 12.95L5.19167 13.1876V10.2603ZM5.73855 9.31316L15.5377 3.65559L18.3857 5.29982L8.5865 10.9574L5.73855 9.31316ZM11.9399 1.57835L14.444 3.02412L4.6448 8.68168L2.14062 7.23591L11.9399 1.57835ZM1.59375 8.1831L4.09793 9.62892V13.8673C4.09793 14.0329 4.17296 14.1896 4.30197 14.2934C4.43098 14.3972 4.60018 14.4369 4.76183 14.4015L6.18354 14.09L8.16464 16.4911C8.27057 16.6195 8.42643 16.69 8.58655 16.69C8.64835 16.6899 8.71085 16.6795 8.77134 16.6577C8.9885 16.5797 9.13331 16.3738 9.13331 16.143V12.5361L11.3929 13.8407V25.1558L1.59375 19.4983V8.1831ZM12.4867 25.1558V13.8407L22.286 8.1831V13.7681L20.6747 14.6984L18.7536 13.5892C18.9629 13.4685 19.0738 13.2184 19.0083 12.974C18.9301 12.6823 18.6301 12.5091 18.3385 12.5873L17.218 12.8876C16.9262 12.9658 16.7531 13.2656 16.8313 13.5573L17.1315 14.6779C17.197 14.9222 17.4179 15.0834 17.6594 15.0834C17.7063 15.0834 17.7539 15.0773 17.8013 15.0646C18.0457 14.999 18.2069 14.7779 18.2068 14.5364L19.581 15.3298L15.9667 17.4165C15.7974 17.5142 15.6932 17.6948 15.6932 17.8901V23.3046L12.4867 25.1558ZM24.5624 22.4167L16.7869 26.9059V18.2059L24.5625 13.7167V22.4167H24.5624Z" fill="#A72561"/>
        <path d="M18.7016 24.1854C18.7943 24.1854 18.8884 24.1617 18.9745 24.112L22.9219 21.833C23.1835 21.6819 23.2731 21.3475 23.122 21.086C22.9711 20.8245 22.6366 20.7348 22.375 20.8858L18.4276 23.1648C18.166 23.3159 18.0764 23.6503 18.2274 23.9119C18.3287 24.0873 18.5125 24.1854 18.7016 24.1854Z" fill="#A72561"/>
        <path d="M18.7016 21.6281C18.7943 21.6281 18.8884 21.6044 18.9745 21.5547L20.9482 20.4152C21.2097 20.2642 21.2994 19.9298 21.1483 19.6682C20.9973 19.4067 20.6629 19.317 20.4013 19.468L18.4276 20.6075C18.166 20.7586 18.0764 21.093 18.2274 21.3546C18.3287 21.53 18.5125 21.6281 18.7016 21.6281Z" fill="#A72561"/>
      </svg>
    `,
      benefitDecor1: `
      <svg xmlns="http://www.w3.org/2000/svg" width="63" height="4" viewBox="0 0 63 4" fill="none">
        <path d="M1.09055 0.415249C1.43798 0.376169 1.89341 0.417954 2.23953 0.475307C2.348 0.493095 2.29307 0.572607 2.36795 0.588466C2.5144 0.619381 2.65084 0.580385 2.79557 0.617213C2.84353 0.629807 2.78383 0.755755 2.83412 0.766078C3.10971 0.821739 3.37043 0.789659 3.64961 0.816431C5.02476 0.948522 6.37649 0.995801 7.76846 1.05319C8.22743 1.072 8.78537 1.1863 9.25943 1.13632C9.31477 1.13037 9.28178 1.01982 9.29231 1.01071C9.45745 0.871218 9.40254 1.0944 9.51037 1.12405C9.93833 1.24112 10.4142 1.25131 10.8261 1.20864C11.0013 1.19017 10.8256 0.970587 11.002 1.09384C11.0143 1.10216 10.9698 1.21956 11.0179 1.23208C11.1269 1.26024 11.3336 1.23926 11.4181 1.24856C11.5808 1.26708 11.6078 1.2659 11.7617 1.26724C11.9722 1.27009 12.2225 1.32844 12.4483 1.30184C12.4965 1.29582 12.4327 1.17547 12.5096 1.15499C12.5865 1.13455 12.79 1.14475 12.8587 1.17312C12.9273 1.2015 12.8981 1.29609 12.9102 1.31777C13.0102 1.50077 13.2456 1.24732 13.2759 1.24105C13.8282 1.13425 14.3018 1.27863 14.8203 1.27822C15.2139 1.2776 15.6347 1.22994 16.0092 1.23647C16.4554 1.24473 16.8336 1.30994 17.267 1.29873C17.3128 1.29769 17.2592 1.15619 17.315 1.15463C17.9086 1.13816 18.4981 1.15358 19.0891 1.24911C19.1484 1.25881 19.072 1.38305 19.1312 1.40017C19.4938 1.50227 20.0674 1.74753 20.2828 1.20663C20.5284 1.22775 20.8265 1.24957 21.0462 1.3586C21.1879 1.42878 21.0503 1.56412 21.2243 1.50637C21.2636 1.4935 21.2125 1.37498 21.2714 1.36465C21.5192 1.32126 21.7899 1.35979 22.0351 1.29855C22.0849 1.28581 22.0713 1.17961 22.0855 1.16049C22.2042 1.00561 22.4019 1.26163 22.445 1.28024C22.7731 1.41897 23.0127 1.36437 23.3184 1.36776C23.3893 1.36861 23.3055 1.22595 23.3737 1.22164C23.7278 1.2012 24.0945 1.21346 24.4411 1.27676C24.5182 1.29118 24.4473 1.41269 24.4842 1.4258C24.6466 1.48213 24.6826 1.25262 24.8385 1.30221C24.8713 1.31237 24.8528 1.41639 24.8588 1.42782C24.9526 1.60716 25.0341 1.35305 25.0582 1.34744C25.3633 1.27078 25.5583 1.53606 25.8531 1.4985C25.8884 1.49374 25.8088 1.36211 25.908 1.35677C26.5683 1.32044 27.2668 1.3566 27.9204 1.46188C28.0221 1.47807 27.9495 1.57694 27.9559 1.58913C28.0602 1.77959 28.1276 1.5244 28.1607 1.51479C28.4222 1.44562 28.6664 1.65962 28.844 1.35568C29.9512 1.46115 31.0534 1.29047 32.1514 1.56277C32.1654 1.56592 32.1403 1.6916 32.1682 1.69735C32.5036 1.76792 32.4392 1.57259 32.6611 1.3337C32.717 1.27372 32.887 1.56213 32.9021 1.58327C32.9569 1.66118 32.9001 1.84815 32.9184 1.86324C33.0703 1.98172 33.0456 1.36338 33.2505 1.36318C33.2569 1.36421 33.23 1.47803 33.2472 1.48934C33.3006 1.52487 33.3536 1.47964 33.4059 1.51882C33.5255 1.60948 33.5682 1.90993 33.7509 1.73507C33.7741 1.71237 33.7387 1.36163 33.9217 1.3782C33.9946 1.3851 34.3175 1.37909 34.408 1.40182C34.4983 1.42452 34.4363 1.53755 34.4427 1.54244C34.6862 1.6919 34.5939 1.75385 34.7159 1.97512C34.8379 2.19556 34.8041 1.66979 34.8538 1.61111C34.9036 1.55259 35.0821 1.6759 35.126 1.71877C35.1699 1.76166 35.1152 1.83348 35.1542 1.85775C35.4127 2.01631 35.2676 1.59678 35.3528 1.51333C35.5537 1.31574 35.7101 1.70565 35.894 1.74386C35.9437 1.75418 35.9031 1.66537 35.9474 1.65707C36.1229 1.62535 36.2284 1.74701 36.428 1.63546C36.4607 1.61728 36.622 1.38286 36.7265 1.55489C36.7413 1.5797 36.6992 1.67687 36.774 1.69863C36.8857 1.73129 37.087 1.75253 37.2071 1.72005C37.2957 1.69602 37.1941 1.53592 37.3057 1.58566C37.3553 1.60786 37.2634 1.70153 37.3566 1.73543C37.4492 1.76933 37.6862 1.76522 37.7764 1.76199C37.8664 1.75868 37.8171 1.63723 37.8244 1.62905C37.8684 1.58218 38.0411 1.52362 38.0564 1.52377C38.8263 1.50894 39.5363 1.71365 40.286 1.6459C40.3448 1.64076 40.3056 1.51269 40.3146 1.51058C40.516 1.45692 40.3572 1.79743 40.4979 1.9114C40.4776 1.65151 40.5606 1.69857 40.7025 1.67007C40.7708 1.65612 40.7336 1.55549 40.7398 1.54519C40.8412 1.39234 40.9118 1.58976 40.93 1.63015C40.9971 1.77871 41.0702 1.60318 41.1159 1.70248C41.1616 1.80103 41.0565 1.94714 41.1925 1.94527C41.2307 1.85224 41.1297 1.60913 41.233 1.56972C41.6227 1.42069 42.3503 1.61143 42.6636 1.63125C42.9764 1.65105 43.0774 1.63388 43.2596 1.6675C43.5888 1.72829 43.4682 1.54792 43.6726 1.46536C43.8776 1.3828 43.7779 1.82661 43.8074 1.92202C43.8363 2.01738 43.8679 1.91922 43.9039 1.97164C43.9398 2.02405 43.8621 2.08892 43.9465 2.1086C44.0309 2.12826 44.2616 1.95861 44.2915 1.85885C44.3548 1.6475 44.2508 1.42568 44.4741 1.50362C44.487 1.50825 44.4453 1.62495 44.4945 1.63674C44.8851 1.72658 45.2909 1.73215 45.6811 1.81161C45.7347 1.82271 45.6867 1.95254 45.7179 1.96047C46.0431 2.04351 45.9269 1.82461 46.1051 1.58144C46.0651 1.90505 46.1637 2.10303 46.4105 2.10494C46.5588 2.1062 46.5333 1.96487 46.6292 1.86526C46.658 1.83523 46.763 1.93227 46.782 1.86581C46.8447 1.64853 46.7459 1.40531 47.0003 1.50216C47.0115 1.50676 46.9759 1.62569 47.0145 1.6329C47.2639 1.68004 47.2937 1.45278 47.5632 1.42526C47.7745 1.40366 48.1502 1.54224 48.3908 1.56478C48.3857 1.92861 48.6129 1.84529 48.7051 1.59444C48.8612 1.60471 49.0298 1.59053 49.1807 1.62521C49.2326 1.63703 49.1985 1.74236 49.2051 1.75375C49.3055 1.93229 49.3734 1.68824 49.4071 1.67867C49.7723 1.58567 50.0698 1.77064 50.4184 1.58987C50.4308 1.58336 50.4508 1.33063 50.544 1.51516C50.55 1.52788 50.4349 1.64286 50.5988 1.65176C50.7628 1.66067 51.072 1.79615 51.2996 1.67904C51.3547 1.65085 51.4941 1.44569 51.6059 1.60598C51.6208 1.62775 51.6045 1.70023 51.626 1.74056C51.6955 1.86908 51.7335 1.61364 51.8152 1.83065C51.8969 2.04765 52.0669 2.21017 52.2965 2.06045C52.3038 2.05609 52.3582 1.85363 52.4304 1.85683C52.5456 1.86212 52.7093 1.90429 52.8296 1.90298C52.8872 1.90227 52.8504 1.77655 52.8604 1.77425C53.2478 1.7038 53.5236 1.81588 53.9386 1.86452C54.0147 1.87369 54.2334 1.70225 54.3807 1.83779C54.5424 1.98616 54.3762 2.60336 54.748 2.45632C54.8979 2.3975 55.0878 1.61447 55.3572 2.02016C55.8798 1.91964 56.3631 2.12727 56.8872 1.98373C56.9108 1.97737 56.9853 1.75883 57.0407 1.7618C57.123 1.76664 57.1681 1.86878 57.2268 1.87551C57.4729 1.90628 57.6982 1.81889 57.9354 1.83248C58.0255 1.83742 57.994 1.94303 58.1015 1.94894C58.2088 1.95474 58.2804 1.81567 58.426 1.88283C58.5359 1.93403 58.6457 2.21829 58.7916 2.25142C58.7972 1.97103 58.8973 1.97681 59.0754 1.90279C59.1096 1.88843 59.0729 1.79084 59.0891 1.77901C59.155 1.72872 59.216 1.8096 59.2786 1.75484C59.2938 1.74169 59.2945 1.64594 59.307 1.62978C59.4128 1.48877 59.5871 1.70416 59.617 1.74166C59.7318 1.88409 59.7854 1.75955 59.8734 1.81563C59.9613 1.87171 59.8299 1.94182 59.9325 1.97585C60.1453 2.04624 60.4187 2.03078 60.6347 2.03518C60.721 2.03634 60.6621 1.90852 60.6745 1.90572C60.8528 1.8733 61.033 2.00927 61.1319 1.75466C61.2555 2.41298 61.2394 1.69081 61.4942 1.82259C61.5143 1.83325 61.5398 2.14456 61.4628 2.19027C61.3857 2.23593 61.2688 2.13862 61.1619 2.20986C61.1366 2.22658 60.9916 2.5183 60.9718 2.53597C60.8168 2.67407 60.7948 2.20886 60.7866 2.18331C60.6936 1.90756 60.5163 2.22184 60.4697 2.24355C60.2561 2.34305 60.0747 2.27763 59.8961 2.34865C59.7793 2.39456 59.7679 2.69929 59.6762 2.68996C59.3713 2.65913 59.2648 2.23403 58.9775 2.60262C58.9159 2.68123 58.9771 3.0143 58.7564 2.7524C58.7425 2.73589 58.5786 2.4963 58.4839 2.64785C58.472 2.66695 58.4724 2.76402 58.4567 2.77217C58.3516 2.82492 58.2815 2.74759 58.167 2.78463C58.0525 2.82166 57.9148 2.87687 57.7841 2.84395C57.7053 2.82427 57.6042 2.64342 57.5665 2.59914C57.46 2.47159 57.3458 2.68072 57.2798 2.52626C57.2133 2.37103 57.3434 2.13529 57.1689 2.03499C57.1624 2.28718 57.1476 2.54602 57.1372 2.79964C56.7549 2.79076 56.3787 2.70921 55.9951 2.72036C55.9475 2.72199 55.9962 2.85757 55.9452 2.86281C55.7301 2.88435 55.5422 2.7877 55.3191 2.82619C55.1465 2.8565 54.9571 3.00005 54.7766 3.03621C54.6663 2.74764 54.3984 2.8456 54.2038 2.81923C54.1356 2.81012 54.1401 2.73305 54.0916 2.7079C53.9087 2.61491 53.9944 2.86992 53.9443 2.91005C53.7292 3.08133 53.7107 2.50413 53.4571 2.51839C53.4436 2.51895 53.2794 2.82662 53.2568 2.84578C53.113 2.97072 53.233 2.73869 53.143 2.71596C52.9787 2.67442 52.8646 2.60094 52.6719 2.69106C52.6157 2.71775 52.4809 2.90952 52.3717 2.76119C52.3574 2.74177 52.3653 2.64007 52.3538 2.63411C52.1446 2.53484 52.1391 2.85438 52.0196 2.9626C51.9 3.0708 51.7154 2.85022 51.6778 2.78664C51.5795 2.62217 51.7531 2.71635 51.7585 2.70021C51.821 2.50814 51.6863 2.54121 51.5834 2.52498C51.5685 2.21167 51.4247 2.23047 51.4768 2.50942C51.4827 2.53989 51.5628 2.51067 51.5834 2.52498C51.4931 2.83239 51.335 2.87176 51.1603 2.58449C51.0786 2.44985 51.1559 2.29287 50.9075 2.3503C50.7948 2.37623 50.8383 2.59196 50.7389 2.65078C50.5116 2.78497 50.2163 2.58373 49.982 2.61544C49.897 2.62695 49.9798 2.74504 49.9217 2.75698C49.7675 2.78902 49.6315 2.70042 49.4766 2.74581C49.4626 2.75007 49.4968 2.87369 49.4487 2.87526C49.0835 2.88962 48.7656 2.81044 48.3844 2.80825C48.2002 2.80724 47.8709 2.87542 47.68 2.86171C47.3493 2.83869 46.9425 2.65893 46.66 2.70259C46.4757 2.73055 46.5161 2.85419 46.4372 2.93843C46.2848 3.10173 46.0151 2.80923 45.9788 2.76394C45.9777 2.76244 46.1363 2.73329 46.0517 2.66982C46.0025 2.53757 45.9806 2.76336 45.9788 2.76394C45.955 2.73468 45.6382 2.70661 45.5753 2.73024C45.5412 2.74316 45.5603 2.86031 45.5425 2.86483C45.1189 2.96966 44.6946 2.99943 44.2651 2.94466C44.2575 2.94229 44.2689 2.81126 44.2511 2.80733C44.0024 2.74907 43.8432 2.90937 43.6381 3.00453C43.433 3.09966 43.2704 3.0678 43.149 2.84285C42.9942 2.87118 42.7722 2.77173 42.6445 2.71138C42.5167 2.65104 42.4989 2.90611 42.4877 2.91115C42.1371 3.07254 41.9344 2.92655 41.5707 2.90383C41.3978 2.89259 41.0548 2.92958 40.8676 2.95748C40.7196 2.97995 40.6305 2.92017 40.4941 2.95839C40.4757 2.9635 40.4943 3.07707 40.4887 3.08144C40.3365 3.21732 40.4096 2.93968 40.3782 2.89009C40.2643 2.70978 40.194 2.61374 39.9991 2.69857C39.9541 2.71799 39.8232 3.11775 39.7413 3.14113C39.6348 3.17079 39.675 3.0275 39.5634 3.06221C39.5539 3.06505 39.5559 3.15345 39.487 3.14955C39.1675 3.13262 38.8191 3.08119 38.4871 3.09004C38.4417 3.09092 38.4999 3.23113 38.4343 3.2347C38.1268 3.25132 37.7898 3.24613 37.4902 3.1805C37.4164 3.1639 37.4627 3.06573 37.4467 3.03658C37.3484 2.8602 37.209 3.11647 37.186 3.12136C36.6375 3.24451 36.2177 3.01258 35.6586 3.123C35.6282 3.12949 35.394 3.40421 35.2894 3.1686C35.2823 3.15292 35.1789 2.91186 35.0875 3.07668C35.0818 3.08699 35.1462 3.21109 35.0338 3.19844C34.9213 3.18582 34.7404 3.2687 34.5858 3.13234C34.5369 3.08939 34.4212 2.84892 34.2753 3.04061C34.2658 3.05399 34.0404 3.48741 33.96 3.18837C33.947 3.13915 33.9606 2.82269 33.7864 2.98494C33.7531 3.0164 33.8135 3.08698 33.7259 3.13106C33.5915 3.19899 33.4135 3.11423 33.2483 3.25521C33.2195 3.28016 33.0969 3.49495 32.9986 3.33193C32.9832 3.30639 33.0124 3.20074 32.9605 3.18892C32.7135 3.13221 32.4549 3.20288 32.2041 3.12978C32.1153 3.10409 32.1607 2.9333 32.0681 2.88753C31.9755 2.84178 31.789 2.79776 31.6921 2.87581C31.5952 2.95389 31.7011 3.2261 31.5559 3.24788C30.9247 3.34248 30.2995 3.1828 29.6692 3.15944C29.5757 3.15595 29.6532 3.25336 29.5155 3.25521C29.0076 3.26245 28.1308 3.35378 27.6901 3.14681C27.337 2.98104 27.7813 2.85483 27.5115 2.78737C27.3813 2.75519 27.2404 3.07166 27.209 3.08162C26.902 3.18283 26.6886 3.04264 26.4122 3.08565C26.3551 3.09458 26.4111 3.22284 26.3625 3.22902C26.1966 3.25127 26.0223 3.19401 25.8637 3.20449C25.7926 3.20948 25.8057 3.30744 25.7403 3.29988C25.5837 3.28292 25.4452 3.24174 25.2926 3.14992C25.2786 3.14155 25.3725 3.01969 25.2566 3.01515C25.0691 3.00817 24.8364 2.91759 24.6206 3.01113C24.5566 3.03927 24.5541 3.26316 24.4165 3.10854C24.3877 3.07624 24.4245 2.80739 24.2642 3.03969C24.2373 3.07829 23.968 3.39162 23.8359 3.18965C23.801 3.1365 23.7121 2.91649 23.6351 2.95107C23.6246 2.95659 23.6665 3.07685 23.6027 3.08858C23.3779 3.12783 23.1423 3.115 22.9114 3.15267C22.8497 3.16296 22.9415 3.28741 22.8496 3.29878C22.5969 3.33024 22.2813 3.29855 22.0341 3.2596C21.943 3.245 22.006 3.14191 21.9994 3.13069C21.8927 2.94822 21.8297 3.19452 21.7943 3.20888C21.5742 3.29488 21.4066 3.17918 21.2037 3.2098C21.1478 3.21793 21.1875 3.33537 21.1763 3.34584C21.0607 3.44816 21.1468 3.23725 21.0737 3.21401C20.8687 3.14818 20.6402 3.15762 20.433 3.17263C20.3568 3.17831 20.4424 3.31448 20.3741 3.31801C19.9697 3.34148 19.5493 3.32845 19.1546 3.25337C19.0803 3.23899 19.1271 3.13414 19.1116 3.11019C19.0048 2.94263 18.8484 3.17118 18.8124 3.19295C18.6487 3.29236 18.5851 3.19963 18.4406 3.21694C17.7345 3.30311 16.8626 3.24169 16.1961 3.20375C15.3275 3.15492 14.6536 3.05517 13.8253 3.08107C13.7726 3.08259 13.8257 3.22208 13.7804 3.22518C13.1945 3.2588 12.6177 3.2043 12.0306 3.24459C11.9825 3.24764 12.0519 3.37988 11.9746 3.38924C11.816 3.40935 11.6151 3.40217 11.4547 3.35994C11.3765 3.3396 11.4814 3.22612 11.4027 3.20796C11.2194 3.16542 11.0229 3.156 10.8346 3.1772C10.7545 3.18651 10.8754 3.32176 10.7712 3.32332C10.0618 3.33674 9.36499 3.36003 8.64805 3.18489C8.5989 3.17286 8.55577 2.89799 8.45127 2.9507C8.4434 3.02699 8.44383 3.11672 8.44039 3.19826C7.4076 3.24218 6.38535 3.14689 5.34966 3.13216C5.30599 3.13157 5.38146 3.27721 5.29691 3.27681C4.80761 3.27466 4.33246 3.31501 3.83196 3.17024C3.7823 3.15609 3.80778 2.89987 3.66144 2.93862C3.63563 2.94569 3.41521 2.97986 3.35823 3.03548C3.35049 3.04387 3.3907 3.16346 3.31968 3.16695C2.90693 3.18511 2.47441 3.15781 2.06238 3.08473C1.99588 3.07271 2.0667 2.94536 2.01933 2.93569C1.68337 2.86808 1.31793 2.9649 0.996895 2.84926C0.782006 2.7714 0.861564 2.55125 0.747375 2.33455C0.731224 2.30398 0.598158 2.29914 0.591277 2.17306C0.573611 1.85601 0.638064 1.50886 0.611617 1.17092C0.60603 1.09813 0.42782 1.17653 0.533332 1.00063C0.540703 0.988863 0.669905 0.930484 0.701728 0.870814C0.723884 0.829559 0.683958 0.701335 0.729163 0.648524C0.774365 0.595763 0.824035 0.703247 0.898979 0.6412C0.973889 0.578385 0.94095 0.432516 1.09055 0.415249ZM42.0693 2.44167C41.951 2.31918 41.9335 2.76782 42.0615 2.66048C42.0677 2.65476 42.0754 2.44768 42.0693 2.44167ZM56.3808 2.37081C56.2262 2.17293 56.1204 2.46389 56.2295 2.61672C56.3385 2.76938 56.428 2.43079 56.3808 2.37081ZM57.9844 2.22634C57.8037 2.07032 57.7752 2.70651 57.9688 2.5779C57.98 2.57063 57.995 2.2354 57.9844 2.22634ZM1.27692 2.27285C1.27529 2.26689 1.17964 2.26108 1.17735 2.26699C1.12642 2.40948 1.31769 2.42099 1.27692 2.27285ZM59.5756 2.06905C59.5192 1.98299 59.3568 2.08234 59.4269 2.18935C59.4833 2.27544 59.6459 2.1761 59.5756 2.06905ZM35.8989 1.96285C35.8971 1.95617 35.8285 1.95015 35.8299 1.98794C35.8345 2.10965 35.93 2.0753 35.8989 1.96285ZM62.2802 2.06173C61.8806 2.03778 61.6383 1.51226 62.0734 1.57156C62.1522 1.58229 61.9036 1.73914 62.0039 1.78652C62.1874 1.87284 62.3093 1.54287 62.4966 1.71969C62.5305 1.75205 62.3029 2.06426 62.2794 2.06246C62.2797 2.06222 62.2799 2.06197 62.2802 2.06173ZM42.0012 1.90279C41.9988 1.89686 41.9039 1.89123 41.9016 1.89712C41.8502 2.03955 42.0414 2.05096 42.0012 1.90279ZM31.8974 1.68545C31.8921 1.67281 31.6718 1.66098 31.6647 1.67263C31.5497 1.90554 31.9951 1.93014 31.8974 1.68545ZM48.3946 1.57449C48.4981 1.4312 48.622 1.41433 48.7046 1.59426C48.6017 1.58471 48.4981 1.5833 48.3946 1.57449Z" fill="#A72561"/>
      </svg>
    `,
      benefitDecor2: `
      <svg xmlns="http://www.w3.org/2000/svg" width="123" height="4" viewBox="0 0 123 4" fill="none">
        <path d="M1.66206 0.415249C2.34571 0.376169 3.24187 0.417954 3.92294 0.475307C4.13639 0.493095 4.02831 0.572607 4.17565 0.588466C4.46383 0.619381 4.7323 0.580385 5.01708 0.617213C5.11146 0.629807 4.99398 0.755755 5.09294 0.766078C5.63524 0.821739 6.14827 0.789659 6.69762 0.816431C9.40355 0.948522 12.0634 0.995801 14.8025 1.05319C15.7056 1.072 16.8035 1.1863 17.7363 1.13632C17.8452 1.13037 17.7803 1.01982 17.801 1.01071C18.126 0.871218 18.0179 1.0944 18.2301 1.12405C19.0722 1.24112 20.0086 1.25131 20.8191 1.20864C21.1639 1.19017 20.8182 0.970587 21.1653 1.09384C21.1894 1.10216 21.1019 1.21956 21.1965 1.23208C21.4109 1.26024 21.8178 1.23926 21.984 1.24856C22.3042 1.26708 22.3572 1.2659 22.6602 1.26724C23.0743 1.27009 23.5669 1.32844 24.0112 1.30184C24.106 1.29582 23.9805 1.17547 24.1317 1.15499C24.2831 1.13455 24.6836 1.14475 24.8187 1.17312C24.9537 1.2015 24.8962 1.29609 24.9201 1.31777C25.1167 1.50077 25.58 1.24732 25.6396 1.24105C26.7265 1.13425 27.6585 1.27863 28.6786 1.27822C29.4531 1.2776 30.2813 1.22994 31.0182 1.23647C31.8961 1.24473 32.6402 1.30994 33.4931 1.29873C33.5832 1.29769 33.4777 1.15619 33.5876 1.15463C34.7557 1.13816 35.9155 1.15358 37.0785 1.24911C37.1952 1.25881 37.0448 1.38305 37.1614 1.40017C37.8748 1.50227 39.0037 1.74753 39.4274 1.20663C39.9106 1.22775 40.4973 1.24957 40.9297 1.3586C41.2084 1.42878 40.9377 1.56412 41.2801 1.50637C41.3573 1.4935 41.2569 1.37498 41.3727 1.36465C41.8604 1.32126 42.3931 1.35979 42.8755 1.29855C42.9736 1.28581 42.9468 1.17961 42.9746 1.16049C43.2083 1.00561 43.5972 1.26163 43.682 1.28024C44.3277 1.41897 44.7992 1.36437 45.4007 1.36776C45.5403 1.36861 45.3753 1.22595 45.5096 1.22164C46.2062 1.2012 46.9278 1.21346 47.6099 1.27676C47.7617 1.29118 47.6221 1.41269 47.6946 1.4258C48.0143 1.48213 48.0852 1.25262 48.3918 1.30221C48.4564 1.31237 48.42 1.41639 48.4318 1.42782C48.6164 1.60716 48.7767 1.35305 48.8242 1.34744C49.4246 1.27078 49.8083 1.53606 50.3883 1.4985C50.4577 1.49374 50.3013 1.36211 50.4963 1.35677C51.7958 1.32044 53.1701 1.3566 54.4564 1.46188C54.6563 1.47807 54.5136 1.57694 54.5262 1.58913C54.7313 1.77959 54.864 1.5244 54.9292 1.51479C55.4436 1.44562 55.9242 1.65962 56.2737 1.35568C58.4524 1.46115 60.6211 1.29047 62.7818 1.56277C62.8093 1.56592 62.76 1.6916 62.8148 1.69735C63.4748 1.76792 63.348 1.57259 63.7847 1.3337C63.8947 1.27372 64.2293 1.56213 64.259 1.58327C64.3668 1.66118 64.2549 1.84815 64.2911 1.86324C64.59 1.98172 64.5413 1.36338 64.9445 1.36318C64.9571 1.36421 64.9041 1.47803 64.938 1.48934C65.0431 1.52487 65.1474 1.47964 65.2502 1.51882C65.4857 1.60948 65.5696 1.90993 65.9293 1.73507C65.9748 1.71237 65.9052 1.36163 66.2653 1.3782C66.4088 1.3851 67.0441 1.37909 67.2221 1.40182C67.4 1.42452 67.2778 1.53755 67.2905 1.54244C67.7697 1.6919 67.588 1.75385 67.8281 1.97512C68.0681 2.19556 68.0015 1.66979 68.0994 1.61111C68.1974 1.55259 68.5487 1.6759 68.635 1.71877C68.7213 1.76166 68.6137 1.83348 68.6904 1.85775C69.1992 2.01631 68.9137 1.59678 69.0814 1.51333C69.4766 1.31574 69.7844 1.70565 70.1462 1.74386C70.2441 1.75418 70.1642 1.66537 70.2514 1.65707C70.5966 1.62535 70.8043 1.74701 71.197 1.63546C71.2613 1.61728 71.5788 1.38286 71.7844 1.55489C71.8135 1.5797 71.7308 1.67687 71.8779 1.69863C72.0977 1.73129 72.4938 1.75253 72.73 1.72005C72.9045 1.69602 72.7045 1.53592 72.9241 1.58566C73.0217 1.60786 72.8408 1.70153 73.0242 1.73543C73.2065 1.76933 73.6728 1.76522 73.8503 1.76199C74.0274 1.75868 73.9304 1.63723 73.9447 1.62905C74.0313 1.58218 74.3712 1.52362 74.4013 1.52377C75.9163 1.50894 77.3135 1.71365 78.7886 1.6459C78.9043 1.64076 78.8272 1.51269 78.8449 1.51058C79.2412 1.45692 78.9287 1.79743 79.2055 1.9114C79.1655 1.65151 79.329 1.69857 79.6081 1.67007C79.7426 1.65612 79.6694 1.55549 79.6816 1.54519C79.8811 1.39234 80.0201 1.58976 80.0558 1.63015C80.1879 1.77871 80.3317 1.60318 80.4216 1.70248C80.5115 1.80103 80.3047 1.94714 80.5724 1.94527C80.6475 1.85224 80.4487 1.60913 80.652 1.56972C81.4189 1.42069 82.8505 1.61143 83.4672 1.63125C84.0826 1.65105 84.2813 1.63388 84.64 1.6675C85.2877 1.72829 85.0503 1.54792 85.4525 1.46536C85.8559 1.3828 85.6598 1.82661 85.7178 1.92202C85.7747 2.01738 85.8369 1.91922 85.9077 1.97164C85.9782 2.02405 85.8255 2.08892 85.9915 2.1086C86.1575 2.12826 86.6116 1.95861 86.6705 1.85885C86.7949 1.6475 86.5903 1.42568 87.0297 1.50362C87.055 1.50825 86.973 1.62495 87.0698 1.63674C87.8384 1.72658 88.6369 1.73215 89.4047 1.81161C89.5102 1.82271 89.4158 1.95254 89.4773 1.96047C90.1171 2.04351 89.8884 1.82461 90.2391 1.58144C90.1604 1.90505 90.3543 2.10303 90.8399 2.10494C91.1319 2.1062 91.0816 1.96487 91.2704 1.86526C91.3271 1.83523 91.5336 1.93227 91.5711 1.86581C91.6945 1.64853 91.4999 1.40531 92.0006 1.50216C92.0226 1.50676 91.9526 1.62569 92.0285 1.6329C92.5192 1.68004 92.5779 1.45278 93.1083 1.42526C93.524 1.40366 94.2633 1.54224 94.7367 1.56478C94.7267 1.92861 95.1738 1.84529 95.3552 1.59444C95.6624 1.60471 95.9942 1.59053 96.2911 1.62521C96.3933 1.63703 96.3261 1.74236 96.339 1.75375C96.5366 1.93229 96.6702 1.68824 96.7365 1.67867C97.4551 1.58567 98.0406 1.77064 98.7265 1.58987C98.7508 1.58336 98.7903 1.33063 98.9736 1.51516C98.9855 1.52788 98.759 1.64286 99.0816 1.65176C99.4043 1.66067 100.013 1.79615 100.461 1.67904C100.569 1.65085 100.843 1.44569 101.063 1.60598C101.093 1.62775 101.06 1.70023 101.103 1.74056C101.24 1.86908 101.314 1.61364 101.475 1.83065C101.636 2.04765 101.97 2.21017 102.422 2.06045C102.437 2.05609 102.544 1.85363 102.686 1.85683C102.912 1.86212 103.234 1.90429 103.471 1.90298C103.585 1.90227 103.512 1.77655 103.532 1.77425C104.294 1.7038 104.837 1.81588 105.653 1.86452C105.803 1.87369 106.233 1.70225 106.523 1.83779C106.842 1.98616 106.514 2.60336 107.246 2.45632C107.541 2.3975 107.915 1.61447 108.445 2.02016C109.473 1.91964 110.424 2.12727 111.455 1.98373C111.502 1.97737 111.649 1.75883 111.758 1.7618C111.919 1.76664 112.008 1.86878 112.124 1.87551C112.608 1.90628 113.051 1.81889 113.518 1.83248C113.695 1.83742 113.633 1.94303 113.845 1.94894C114.056 1.95474 114.197 1.81567 114.483 1.88283C114.7 1.93403 114.916 2.21829 115.203 2.25142C115.214 1.97103 115.411 1.97681 115.761 1.90279C115.829 1.88843 115.756 1.79084 115.788 1.77901C115.918 1.72872 116.038 1.8096 116.161 1.75484C116.191 1.74169 116.192 1.64594 116.217 1.62978C116.425 1.48877 116.768 1.70416 116.827 1.74166C117.053 1.88409 117.158 1.75955 117.332 1.81563C117.504 1.87171 117.246 1.94182 117.448 1.97585C117.867 2.04624 118.404 2.03078 118.83 2.03518C118.999 2.03634 118.884 1.90852 118.908 1.90572C119.259 1.8733 119.613 2.00927 119.808 1.75466C120.051 2.41298 120.019 1.69081 120.521 1.82259C120.56 1.83325 120.611 2.14456 120.459 2.19027C120.307 2.23593 120.077 2.13862 119.867 2.20986C119.817 2.22658 119.532 2.5183 119.493 2.53597C119.188 2.67407 119.145 2.20886 119.128 2.18331C118.945 1.90756 118.597 2.22184 118.505 2.24355C118.085 2.34305 117.728 2.27763 117.376 2.34865C117.146 2.39456 117.124 2.69929 116.943 2.68996C116.343 2.65913 116.134 2.23403 115.569 2.60262C115.447 2.68123 115.568 3.0143 115.133 2.7524C115.106 2.73589 114.784 2.4963 114.597 2.64785C114.574 2.66695 114.575 2.76402 114.544 2.77217C114.337 2.82492 114.199 2.74759 113.974 2.78463C113.748 2.82166 113.478 2.87687 113.22 2.84395C113.065 2.82427 112.866 2.64342 112.792 2.59914C112.583 2.47159 112.358 2.68072 112.228 2.52626C112.097 2.37103 112.353 2.13529 112.01 2.03499C111.997 2.28718 111.968 2.54602 111.947 2.79964C111.195 2.79076 110.455 2.70921 109.7 2.72036C109.606 2.72199 109.702 2.85757 109.602 2.86281C109.179 2.88435 108.809 2.7877 108.37 2.82619C108.03 2.8565 107.658 3.00005 107.302 3.03621C107.085 2.74764 106.558 2.8456 106.175 2.81923C106.041 2.81012 106.05 2.73305 105.955 2.7079C105.595 2.61491 105.763 2.86992 105.665 2.91005C105.241 3.08133 105.205 2.50413 104.706 2.51839C104.679 2.51895 104.356 2.82662 104.312 2.84578C104.029 2.97072 104.265 2.73869 104.088 2.71596C103.765 2.67442 103.54 2.60094 103.161 2.69106C103.05 2.71775 102.785 2.90952 102.57 2.76119C102.542 2.74177 102.558 2.64007 102.535 2.63411C102.123 2.53484 102.112 2.85438 101.877 2.9626C101.642 3.0708 101.279 2.85022 101.205 2.78664C101.011 2.62217 101.353 2.71635 101.363 2.70021C101.486 2.50814 101.221 2.54121 101.019 2.52498C100.99 2.21167 100.707 2.23047 100.809 2.50942C100.821 2.53989 100.978 2.51067 101.019 2.52498C100.841 2.83239 100.53 2.87176 100.186 2.58449C100.026 2.44985 100.178 2.29287 99.6889 2.3503C99.4671 2.37623 99.5528 2.59196 99.3571 2.65078C98.9099 2.78497 98.3288 2.58373 97.8678 2.61544C97.7005 2.62695 97.8635 2.74504 97.7492 2.75698C97.4457 2.78902 97.1781 2.70042 96.8733 2.74581C96.8457 2.75007 96.9131 2.87369 96.8184 2.87526C96.0999 2.88962 95.4743 2.81044 94.7241 2.80825C94.3617 2.80724 93.7137 2.87542 93.3382 2.86171C92.6874 2.83869 91.8868 2.65893 91.3309 2.70259C90.9683 2.73055 91.0479 2.85419 90.8925 2.93843C90.5927 3.10173 90.062 2.80923 89.9906 2.76394C89.9884 2.76244 90.3004 2.73329 90.1339 2.66982C90.0371 2.53757 89.9941 2.76336 89.9906 2.76394C89.9437 2.73468 89.3204 2.70661 89.1966 2.73024C89.1294 2.74316 89.167 2.86031 89.1319 2.86483C88.2985 2.96966 87.4636 2.99943 86.6183 2.94466C86.6035 2.94229 86.6259 2.81126 86.5909 2.80733C86.1015 2.74907 85.7882 2.90937 85.3846 3.00453C84.981 3.09966 84.661 3.0678 84.4221 2.84285C84.1177 2.87118 83.6808 2.77173 83.4295 2.71138C83.1781 2.65104 83.143 2.90611 83.1209 2.91115C82.431 3.07254 82.0323 2.92655 81.3166 2.90383C80.9763 2.89259 80.3014 2.92958 79.933 2.95748C79.6418 2.97995 79.4664 2.92017 79.1981 2.95839C79.1618 2.9635 79.1985 3.07707 79.1874 3.08144C78.888 3.21732 79.0319 2.93968 78.9701 2.89009C78.7459 2.70978 78.6075 2.61374 78.224 2.69857C78.1356 2.71799 77.878 3.11775 77.7168 3.14113C77.5071 3.17079 77.5863 3.0275 77.3668 3.06221C77.348 3.06505 77.3519 3.15345 77.2165 3.14955C76.5877 3.13262 75.9022 3.08119 75.2488 3.09004C75.1595 3.09092 75.2739 3.23113 75.145 3.2347C74.5399 3.25132 73.8766 3.24613 73.2871 3.1805C73.142 3.1639 73.233 3.06573 73.2015 3.03658C73.0081 2.8602 72.7339 3.11647 72.6886 3.12136C71.6093 3.24451 70.7832 3.01258 69.6831 3.123C69.6232 3.12949 69.1623 3.40421 68.9566 3.1686C68.9426 3.15292 68.7391 2.91186 68.5592 3.07668C68.548 3.08699 68.6748 3.21109 68.4535 3.19844C68.2323 3.18582 67.8762 3.2687 67.5721 3.13234C67.4758 3.08939 67.2482 2.84892 66.961 3.04061C66.9423 3.05399 66.4989 3.48741 66.3407 3.18837C66.315 3.13915 66.3419 2.82269 65.9991 2.98494C65.9336 3.0164 66.0525 3.08698 65.8799 3.13106C65.6156 3.19899 65.2653 3.11423 64.9403 3.25521C64.8836 3.28016 64.6424 3.49495 64.4488 3.33193C64.4185 3.30639 64.4761 3.20074 64.3739 3.18892C63.8879 3.13221 63.379 3.20288 62.8856 3.12978C62.7108 3.10409 62.8002 2.9333 62.618 2.88753C62.4357 2.84178 62.0686 2.79776 61.878 2.87581C61.6873 2.95389 61.8956 3.2261 61.6099 3.24788C60.3679 3.34248 59.1376 3.1828 57.8975 3.15944C57.7136 3.15595 57.866 3.25336 57.595 3.25521C56.5956 3.26245 54.8702 3.35378 54.0031 3.14681C53.3083 2.98104 54.1826 2.85483 53.6517 2.78737C53.3955 2.75519 53.1183 3.07166 53.0564 3.08162C52.4522 3.18283 52.0323 3.04264 51.4885 3.08565C51.3762 3.09458 51.4864 3.22284 51.3908 3.22902C51.0644 3.25127 50.7212 3.19401 50.4093 3.20449C50.2693 3.20948 50.2951 3.30744 50.1664 3.29988C49.8582 3.28292 49.5858 3.24174 49.2854 3.14992C49.258 3.14155 49.4426 3.01969 49.2146 3.01515C48.8457 3.00817 48.3877 2.91759 47.9632 3.01113C47.8372 3.03927 47.8323 3.26316 47.5615 3.10854C47.5048 3.07624 47.5772 2.80739 47.2618 3.03969C47.2088 3.07829 46.679 3.39162 46.419 3.18965C46.3504 3.1365 46.1753 2.91649 46.0239 2.95107C46.0033 2.95659 46.0856 3.07685 45.9601 3.08858C45.5178 3.12783 45.0542 3.115 44.5998 3.15267C44.4784 3.16296 44.6592 3.28741 44.4783 3.29878C43.9809 3.33024 43.36 3.29855 42.8736 3.2596C42.6943 3.245 42.8183 3.14191 42.8052 3.13069C42.5954 2.94822 42.4713 3.19452 42.4017 3.20888C41.9686 3.29488 41.6388 3.17918 41.2396 3.2098C41.1294 3.21793 41.2076 3.33537 41.1856 3.34584C40.9582 3.44816 41.1276 3.23725 40.9837 3.21401C40.5804 3.14818 40.1308 3.15762 39.7229 3.17263C39.5731 3.17831 39.7415 3.31448 39.607 3.31801C38.8113 3.34148 37.984 3.32845 37.2075 3.25337C37.0612 3.23899 37.1532 3.13414 37.1228 3.11019C36.9127 2.94263 36.6049 3.17118 36.534 3.19295C36.212 3.29236 36.0869 3.19963 35.8024 3.21694C34.413 3.30311 32.6974 3.24169 31.3858 3.20375C29.6768 3.15492 28.3505 3.05517 26.7207 3.08107C26.6171 3.08259 26.7216 3.22208 26.6323 3.22518C25.4794 3.2588 24.3445 3.2043 23.1893 3.24459C23.0945 3.24764 23.2312 3.37988 23.079 3.38924C22.7669 3.40935 22.3716 3.40217 22.0561 3.35994C21.9022 3.3396 22.1086 3.22612 21.9537 3.20796C21.593 3.16542 21.2063 3.156 20.8358 3.1772C20.6782 3.18651 20.916 3.32176 20.7111 3.32332C19.3151 3.33674 17.944 3.36003 16.5333 3.18489C16.4365 3.17286 16.3517 2.89799 16.146 2.9507C16.1306 3.02699 16.1314 3.11672 16.1246 3.19826C14.0924 3.24218 12.0808 3.14689 10.0429 3.13216C9.95694 3.13157 10.1054 3.27721 9.93909 3.27681C8.97626 3.27466 8.0413 3.31501 7.05644 3.17024C6.95872 3.15609 7.00886 2.89987 6.72089 2.93862C6.6701 2.94569 6.23639 2.97986 6.12425 3.03548C6.10903 3.04387 6.18815 3.16346 6.0484 3.16695C5.23623 3.18511 4.38512 3.15781 3.57436 3.08473C3.44351 3.07271 3.58286 2.94536 3.48966 2.93569C2.82856 2.86808 2.10947 2.9649 1.47776 2.84926C1.05491 2.7714 1.21146 2.55125 0.98677 2.33455C0.954989 2.30398 0.69315 2.29914 0.67961 2.17306C0.644847 1.85601 0.771674 1.50886 0.719634 1.17092C0.708639 1.09813 0.357969 1.17653 0.565588 1.00063C0.580093 0.988863 0.83433 0.930484 0.896949 0.870814C0.940546 0.829559 0.861982 0.701335 0.950935 0.648524C1.03988 0.595763 1.13762 0.703247 1.28509 0.6412C1.43249 0.578385 1.36768 0.432516 1.66206 0.415249ZM82.2976 2.44167C82.0649 2.31918 82.0305 2.76782 82.2823 2.66048C82.2944 2.65476 82.3096 2.44768 82.2976 2.44167ZM110.459 2.37081C110.155 2.17293 109.947 2.46389 110.161 2.61672C110.376 2.76938 110.552 2.43079 110.459 2.37081ZM113.614 2.22634C113.259 2.07032 113.203 2.70651 113.584 2.5779C113.606 2.57063 113.635 2.2354 113.614 2.22634ZM2.02879 2.27285C2.02557 2.26689 1.83735 2.26108 1.83286 2.26699C1.73263 2.40948 2.109 2.42099 2.02879 2.27285ZM116.746 2.06905C116.635 1.98299 116.315 2.08234 116.453 2.18935C116.564 2.27544 116.884 2.1761 116.746 2.06905ZM70.156 1.96285C70.1523 1.95617 70.0173 1.95015 70.0201 1.98794C70.0292 2.10965 70.217 2.0753 70.156 1.96285ZM122.067 2.06173C121.281 2.03778 120.804 1.51226 121.661 1.57156C121.816 1.58229 121.326 1.73914 121.524 1.78652C121.885 1.87284 122.125 1.54287 122.493 1.71969C122.56 1.75205 122.112 2.06426 122.066 2.06246C122.066 2.06222 122.067 2.06197 122.067 2.06173ZM82.1636 1.90279C82.1589 1.89686 81.9721 1.89123 81.9677 1.89712C81.8665 2.03955 82.2428 2.05096 82.1636 1.90279ZM62.282 1.68545C62.2716 1.67281 61.8382 1.66098 61.824 1.67263C61.5979 1.90554 62.4743 1.93014 62.282 1.68545ZM94.7441 1.57449C94.948 1.4312 95.1918 1.41433 95.3542 1.59426C95.1517 1.58471 94.9478 1.5833 94.7441 1.57449Z" fill="#A72561"/>
      </svg>
    `,
      benefitDecor3: `
      <svg xmlns="http://www.w3.org/2000/svg" width="96" height="4" viewBox="0 0 96 4" fill="none">
        <path d="M1.40488 0.415249C1.93723 0.376169 2.63506 0.417954 3.1654 0.475307C3.33161 0.493095 3.24745 0.572607 3.36219 0.588466C3.58659 0.619381 3.79564 0.580385 4.0174 0.617213C4.09089 0.629807 3.99941 0.755755 4.07647 0.766078C4.49875 0.821739 4.89824 0.789659 5.32602 0.816431C7.43309 0.948522 9.5043 0.995801 11.6372 1.05319C12.3404 1.072 13.1953 1.1863 13.9217 1.13632C14.0065 1.13037 13.956 1.01982 13.9721 1.01071C14.2251 0.871218 14.141 1.0944 14.3062 1.12405C14.962 1.24112 15.6912 1.25131 16.3222 1.20864C16.5907 1.19017 16.3215 0.970587 16.5919 1.09384C16.6106 1.10216 16.5425 1.21956 16.6161 1.23208C16.7831 1.26024 17.0999 1.23926 17.2293 1.24856C17.4787 1.26708 17.52 1.2659 17.7559 1.26724C18.0784 1.27009 18.4619 1.32844 18.8079 1.30184C18.8818 1.29582 18.784 1.17547 18.9018 1.15499C19.0197 1.13455 19.3315 1.14475 19.4367 1.17312C19.5418 1.2015 19.4971 1.29609 19.5157 1.31777C19.6688 1.50077 20.0295 1.24732 20.0759 1.24105C20.9222 1.13425 21.648 1.27863 22.4424 1.27822C23.0455 1.2776 23.6903 1.22994 24.2642 1.23647C24.9478 1.24473 25.5272 1.30994 26.1914 1.29873C26.2615 1.29769 26.1793 1.15619 26.2649 1.15463C27.1745 1.13816 28.0777 1.15358 28.9833 1.24911C29.0741 1.25881 28.9571 1.38305 29.0478 1.40017C29.6033 1.50227 30.4824 1.74753 30.8123 1.20663C31.1886 1.22775 31.6455 1.24957 31.9821 1.3586C32.1992 1.42878 31.9884 1.56412 32.255 1.50637C32.3151 1.4935 32.2369 1.37498 32.3271 1.36465C32.7068 1.32126 33.1217 1.35979 33.4973 1.29855C33.5737 1.28581 33.5528 1.17961 33.5745 1.16049C33.7564 1.00561 34.0593 1.26163 34.1253 1.28024C34.6281 1.41897 34.9953 1.36437 35.4637 1.36776C35.5724 1.36861 35.4439 1.22595 35.5485 1.22164C36.0909 1.2012 36.6528 1.21346 37.184 1.27676C37.3021 1.29118 37.1935 1.41269 37.2499 1.4258C37.4989 1.48213 37.5541 1.25262 37.7928 1.30221C37.8431 1.31237 37.8148 1.41639 37.824 1.42782C37.9677 1.60716 38.0925 1.35305 38.1295 1.34744C38.597 1.27078 38.8958 1.53606 39.3475 1.4985C39.4015 1.49374 39.2797 1.36211 39.4316 1.35677C40.4434 1.32044 41.5136 1.3566 42.5152 1.46188C42.6709 1.47807 42.5598 1.57694 42.5696 1.58913C42.7293 1.77959 42.8326 1.5244 42.8834 1.51479C43.284 1.44562 43.6582 1.65962 43.9304 1.35568C45.6269 1.46115 47.3156 1.29047 48.9981 1.56277C49.0195 1.56592 48.9812 1.6916 49.0238 1.69735C49.5377 1.76792 49.439 1.57259 49.7791 1.3337C49.8647 1.27372 50.1253 1.56213 50.1484 1.58327C50.2324 1.66118 50.1452 1.84815 50.1734 1.86324C50.4061 1.98172 50.3682 1.36338 50.6822 1.36318C50.692 1.36421 50.6508 1.47803 50.6771 1.48934C50.759 1.52487 50.8402 1.47964 50.9203 1.51882C51.1036 1.60948 51.1689 1.90993 51.449 1.73507C51.4844 1.71237 51.4303 1.36163 51.7107 1.3782C51.8224 1.3851 52.3171 1.37909 52.4557 1.40182C52.5942 1.42452 52.4991 1.53755 52.509 1.54244C52.8821 1.6919 52.7406 1.75385 52.9276 1.97512C53.1145 2.19556 53.0627 1.66979 53.1389 1.61111C53.2152 1.55259 53.4888 1.6759 53.556 1.71877C53.6232 1.76166 53.5394 1.83348 53.5991 1.85775C53.9953 2.01631 53.773 1.59678 53.9035 1.51333C54.2113 1.31574 54.4509 1.70565 54.7327 1.74386C54.8089 1.75418 54.7467 1.66537 54.8146 1.65707C55.0834 1.62535 55.2451 1.74701 55.551 1.63546C55.601 1.61728 55.8483 1.38286 56.0083 1.55489C56.031 1.5797 55.9666 1.67687 56.0812 1.69863C56.2523 1.73129 56.5607 1.75253 56.7447 1.72005C56.8805 1.69602 56.7249 1.53592 56.8958 1.58566C56.9718 1.60786 56.831 1.70153 56.9737 1.73543C57.1158 1.76933 57.4788 1.76522 57.617 1.76199C57.7549 1.75868 57.6794 1.63723 57.6906 1.62905C57.758 1.58218 58.0227 1.52362 58.0461 1.52377C59.2258 1.50894 60.3138 1.71365 61.4624 1.6459C61.5525 1.64076 61.4925 1.51269 61.5062 1.51058C61.8148 1.45692 61.5715 1.79743 61.7871 1.9114C61.756 1.65151 61.8832 1.69857 62.1006 1.67007C62.2053 1.65612 62.1483 1.55549 62.1578 1.54519C62.3132 1.39234 62.4213 1.58976 62.4492 1.63015C62.5521 1.77871 62.664 1.60318 62.734 1.70248C62.804 1.80103 62.643 1.94714 62.8515 1.94527C62.9099 1.85224 62.7551 1.60913 62.9134 1.56972C63.5106 1.42069 64.6254 1.61143 65.1056 1.63125C65.5848 1.65105 65.7396 1.63388 66.0188 1.6675C66.5232 1.72829 66.3384 1.54792 66.6516 1.46536C66.9657 1.3828 66.813 1.82661 66.8581 1.92202C66.9025 2.01738 66.9508 1.91922 67.006 1.97164C67.061 2.02405 66.942 2.08892 67.0712 2.1086C67.2005 2.12826 67.5541 1.95861 67.6 1.85885C67.6969 1.6475 67.5375 1.42568 67.8797 1.50362C67.8994 1.50825 67.8355 1.62495 67.9109 1.63674C68.5094 1.72658 69.1312 1.73215 69.729 1.81161C69.8112 1.82271 69.7377 1.95254 69.7856 1.96047C70.2838 2.04351 70.1057 1.82461 70.3788 1.58144C70.3175 1.90505 70.4685 2.10303 70.8467 2.10494C71.074 2.1062 71.0348 1.96487 71.1819 1.86526C71.226 1.83523 71.3869 1.93227 71.416 1.86581C71.5121 1.64853 71.3606 1.40531 71.7505 1.50216C71.7676 1.50676 71.7131 1.62569 71.7722 1.6329C72.1543 1.68004 72.2 1.45278 72.613 1.42526C72.9367 1.40366 73.5124 1.54224 73.881 1.56478C73.8733 1.92861 74.2214 1.84529 74.3626 1.59444C74.6018 1.60471 74.8602 1.59053 75.0914 1.62521C75.171 1.63703 75.1187 1.74236 75.1287 1.75375C75.2826 1.93229 75.3866 1.68824 75.4382 1.67867C75.9979 1.58567 76.4538 1.77064 76.9878 1.58987C77.0068 1.58336 77.0375 1.33063 77.1803 1.51516C77.1895 1.52788 77.0131 1.64286 77.2644 1.65176C77.5156 1.66067 77.9893 1.79615 78.3381 1.67904C78.4226 1.65085 78.6361 1.44569 78.8074 1.60598C78.8303 1.62775 78.8053 1.70023 78.8382 1.74056C78.9448 1.86908 79.0029 1.61364 79.1282 1.83065C79.2534 2.04765 79.5138 2.21017 79.8656 2.06045C79.8768 2.05609 79.9601 1.85363 80.0708 1.85683C80.2474 1.86212 80.4981 1.90429 80.6825 1.90298C80.7708 1.90227 80.7143 1.77655 80.7296 1.77425C81.3232 1.7038 81.7458 1.81588 82.3818 1.86452C82.4983 1.87369 82.8334 1.70225 83.0591 1.83779C83.3069 1.98616 83.0522 2.60336 83.6219 2.45632C83.8516 2.3975 84.1425 1.61447 84.5554 2.02016C85.3562 1.91964 86.0968 2.12727 86.8998 1.98373C86.9359 1.97737 87.0501 1.75883 87.135 1.7618C87.261 1.76664 87.3302 1.86878 87.4202 1.87551C87.7972 1.90628 88.1423 1.81889 88.5059 1.83248C88.6439 1.83742 88.5957 1.94303 88.7603 1.94894C88.9249 1.95474 89.0345 1.81567 89.2575 1.88283C89.4259 1.93403 89.5943 2.21829 89.8178 2.25142C89.8263 1.97103 89.9798 1.97681 90.2527 1.90279C90.3051 1.88843 90.2489 1.79084 90.2737 1.77901C90.3746 1.72872 90.4681 1.8096 90.564 1.75484C90.5873 1.74169 90.5884 1.64594 90.6074 1.62978C90.7696 1.48877 91.0367 1.70416 91.0826 1.74166C91.2584 1.88409 91.3405 1.75955 91.4754 1.81563C91.61 1.87171 91.4087 1.94182 91.566 1.97585C91.892 2.04624 92.3108 2.03078 92.6419 2.03518C92.774 2.03634 92.6839 1.90852 92.7028 1.90572C92.976 1.8733 93.2523 2.00927 93.4037 1.75466C93.5931 2.41298 93.5684 1.69081 93.9589 1.82259C93.9897 1.83325 94.0288 2.14456 93.9107 2.19027C93.7926 2.23593 93.6136 2.13862 93.4497 2.20986C93.4109 2.22658 93.1887 2.5183 93.1584 2.53597C92.9208 2.67407 92.8872 2.20886 92.8746 2.18331C92.7321 1.90756 92.4605 2.22184 92.389 2.24355C92.0618 2.34305 91.7838 2.27763 91.5102 2.34865C91.3312 2.39456 91.3137 2.69929 91.1731 2.68996C90.706 2.65913 90.5429 2.23403 90.1026 2.60262C90.0082 2.68123 90.102 3.0143 89.7638 2.7524C89.7425 2.73589 89.4914 2.4963 89.3463 2.64785C89.3281 2.66695 89.3287 2.76402 89.3046 2.77217C89.1436 2.82492 89.0361 2.74759 88.8607 2.78463C88.6852 2.82166 88.4743 2.87687 88.274 2.84395C88.1533 2.82427 87.9984 2.64342 87.9406 2.59914C87.7774 2.47159 87.6024 2.68072 87.5013 2.52626C87.3994 2.37103 87.5987 2.13529 87.3314 2.03499C87.3215 2.28718 87.2987 2.54602 87.2828 2.79964C86.697 2.79076 86.1206 2.70921 85.5328 2.72036C85.4599 2.72199 85.5345 2.85757 85.4563 2.86281C85.1268 2.88435 84.8389 2.7877 84.4971 2.82619C84.2325 2.8565 83.9424 3.00005 83.6657 3.03621C83.4967 2.74764 83.0862 2.8456 82.788 2.81923C82.6835 2.81012 82.6905 2.73305 82.6162 2.7079C82.336 2.61491 82.4673 2.86992 82.3905 2.91005C82.0608 3.08133 82.0326 2.50413 81.6439 2.51839C81.6233 2.51895 81.3716 2.82662 81.337 2.84578C81.1167 2.97072 81.3005 2.73869 81.1627 2.71596C80.911 2.67442 80.7361 2.60094 80.4408 2.69106C80.3547 2.71775 80.1481 2.90952 79.9809 2.76119C79.9589 2.74177 79.971 2.64007 79.9533 2.63411C79.6329 2.53484 79.6244 2.85438 79.4413 2.9626C79.2581 3.0708 78.9752 2.85022 78.9176 2.78664C78.767 2.62217 79.033 2.71635 79.0412 2.70021C79.137 2.50814 78.9307 2.54121 78.773 2.52498C78.7502 2.21167 78.5297 2.23047 78.6096 2.50942C78.6187 2.53989 78.7414 2.51067 78.773 2.52498C78.6346 2.83239 78.3923 2.87176 78.1247 2.58449C77.9994 2.44985 78.1178 2.29287 77.7373 2.3503C77.5646 2.37623 77.6313 2.59196 77.4789 2.65078C77.1307 2.78497 76.6782 2.58373 76.3192 2.61544C76.1889 2.62695 76.3158 2.74504 76.2268 2.75698C75.9905 2.78902 75.7821 2.70042 75.5448 2.74581C75.5233 2.75007 75.5758 2.87369 75.502 2.87526C74.9425 2.88962 74.4554 2.81044 73.8712 2.80825C73.589 2.80724 73.0844 2.87542 72.792 2.86171C72.2853 2.83869 71.6619 2.65893 71.229 2.70259C70.9466 2.73055 71.0086 2.85419 70.8876 2.93843C70.6542 3.10173 70.2409 2.80923 70.1853 2.76394C70.1836 2.76244 70.4266 2.73329 70.2969 2.66982C70.2215 2.53757 70.188 2.76336 70.1853 2.76394C70.1488 2.73468 69.6634 2.70661 69.567 2.73024C69.5147 2.74316 69.544 2.86031 69.5167 2.86483C68.8677 2.96966 68.2176 2.99943 67.5594 2.94466C67.5478 2.94229 67.5652 2.81126 67.538 2.80733C67.1569 2.74907 66.9129 2.90937 66.5986 3.00453C66.2844 3.09966 66.0352 3.0678 65.8492 2.84285C65.6121 2.87118 65.272 2.77173 65.0762 2.71138C64.8805 2.65104 64.8532 2.90611 64.836 2.91115C64.2988 3.07254 63.9883 2.92655 63.4309 2.90383C63.166 2.89259 62.6404 2.92958 62.3535 2.95748C62.1268 2.97995 61.9902 2.92017 61.7813 2.95839C61.753 2.9635 61.7816 3.07707 61.773 3.08144C61.5398 3.21732 61.6519 2.93968 61.6037 2.89009C61.4292 2.70978 61.3214 2.61374 61.0228 2.69857C60.9539 2.71799 60.7533 3.11775 60.6278 3.14113C60.4646 3.17079 60.5262 3.0275 60.3553 3.06221C60.3407 3.06505 60.3437 3.15345 60.2382 3.14955C59.7486 3.13262 59.2148 3.08119 58.706 3.09004C58.6365 3.09092 58.7256 3.23113 58.6252 3.2347C58.154 3.25132 57.6375 3.24613 57.1785 3.1805C57.0655 3.1639 57.1363 3.06573 57.1118 3.03658C56.9612 2.8602 56.7477 3.11647 56.7125 3.12136C55.872 3.24451 55.2287 3.01258 54.3721 3.123C54.3255 3.12949 53.9665 3.40421 53.8064 3.1686C53.7954 3.15292 53.637 2.91186 53.4969 3.07668C53.4882 3.08699 53.5869 3.21109 53.4146 3.19844C53.2424 3.18582 52.9651 3.2687 52.7283 3.13234C52.6533 3.08939 52.4761 2.84892 52.2524 3.04061C52.2379 3.05399 51.8926 3.48741 51.7694 3.18837C51.7494 3.13915 51.7703 2.82269 51.5034 2.98494C51.4524 3.0164 51.545 3.08698 51.4106 3.13106C51.2047 3.19899 50.932 3.11423 50.6789 3.25521C50.6348 3.28016 50.4469 3.49495 50.2962 3.33193C50.2726 3.30639 50.3175 3.20074 50.2379 3.18892C49.8594 3.13221 49.4632 3.20288 49.0789 3.12978C48.9428 3.10409 49.0124 2.9333 48.8705 2.88753C48.7287 2.84178 48.4428 2.79776 48.2943 2.87581C48.1458 2.95389 48.3081 3.2261 48.0856 3.24788C47.1185 3.34248 46.1604 3.1828 45.1948 3.15944C45.0515 3.15595 45.1703 3.25336 44.9592 3.25521C44.181 3.26245 42.8375 3.35378 42.1622 3.14681C41.6212 2.98104 42.302 2.85483 41.8886 2.78737C41.6891 2.75519 41.4733 3.07166 41.4251 3.08162C40.9546 3.18283 40.6277 3.04264 40.2042 3.08565C40.1167 3.09458 40.2025 3.22284 40.1281 3.22902C39.8739 3.25127 39.6067 3.19401 39.3638 3.20449C39.2548 3.20948 39.2749 3.30744 39.1746 3.29988C38.9347 3.28292 38.7225 3.24174 38.4886 3.14992C38.4673 3.14155 38.611 3.01969 38.4335 3.01515C38.1462 3.00817 37.7896 2.91759 37.459 3.01113C37.361 3.03927 37.3571 3.26316 37.1463 3.10854C37.1021 3.07624 37.1585 2.80739 36.9129 3.03969C36.8716 3.07829 36.4591 3.39162 36.2566 3.18965C36.2032 3.1365 36.0669 2.91649 35.9489 2.95107C35.9329 2.95659 35.997 3.07685 35.8993 3.08858C35.5548 3.12783 35.1938 3.115 34.84 3.15267C34.7455 3.16296 34.8862 3.28741 34.7454 3.29878C34.3581 3.33024 33.8746 3.29855 33.4959 3.2596C33.3562 3.245 33.4527 3.14191 33.4426 3.13069C33.2792 2.94822 33.1826 3.19452 33.1284 3.20888C32.7911 3.29488 32.5343 3.17918 32.2235 3.2098C32.1377 3.21793 32.1985 3.33537 32.1814 3.34584C32.0043 3.44816 32.1363 3.23725 32.0242 3.21401C31.7101 3.14818 31.36 3.15762 31.0424 3.17263C30.9258 3.17831 31.0569 3.31448 30.9522 3.31801C30.3326 3.34148 29.6884 3.32845 29.0837 3.25337C28.9698 3.23899 29.0414 3.13414 29.0177 3.11019C28.8542 2.94263 28.6145 3.17118 28.5593 3.19295C28.3085 3.29236 28.2111 3.19963 27.9896 3.21694C26.9076 3.30311 25.5717 3.24169 24.5504 3.20375C23.2196 3.15492 22.1869 3.05517 20.9178 3.08107C20.8371 3.08259 20.9185 3.22208 20.8489 3.22518C19.9512 3.2588 19.0674 3.2043 18.1679 3.24459C18.0941 3.24764 18.2005 3.37988 18.082 3.38924C17.839 3.40935 17.5312 3.40217 17.2855 3.35994C17.1656 3.3396 17.3264 3.22612 17.2057 3.20796C16.9249 3.16542 16.6238 3.156 16.3353 3.1772C16.2125 3.18651 16.3977 3.32176 16.2382 3.32332C15.1511 3.33674 14.0834 3.36003 12.9849 3.18489C12.9096 3.17286 12.8435 2.89799 12.6834 2.9507C12.6713 3.02699 12.672 3.11672 12.6667 3.19826C11.0842 3.24218 9.51787 3.14689 7.93093 3.13216C7.86402 3.13157 7.97965 3.27721 7.85011 3.27681C7.10037 3.27466 6.37232 3.31501 5.60542 3.17024C5.52933 3.15609 5.56837 2.89987 5.34414 2.93862C5.30459 2.94569 4.96686 2.97986 4.87954 3.03548C4.86768 3.04387 4.9293 3.16346 4.82047 3.16695C4.18805 3.18511 3.5253 3.15781 2.89397 3.08473C2.79208 3.07271 2.90058 2.94536 2.82801 2.93569C2.31322 2.86808 1.75328 2.9649 1.26137 2.84926C0.932106 2.7714 1.05401 2.55125 0.879042 2.33455C0.854295 2.30398 0.650404 2.29914 0.63986 2.17306C0.612791 1.85601 0.711549 1.50886 0.671026 1.17092C0.662465 1.09813 0.389402 1.17653 0.551073 1.00063C0.562367 0.988863 0.760339 0.930484 0.809099 0.870814C0.843048 0.829559 0.781871 0.701335 0.851138 0.648524C0.920398 0.595763 0.996506 0.703247 1.11134 0.6412C1.22612 0.578385 1.17565 0.432516 1.40488 0.415249ZM64.1949 2.44167C64.0136 2.31918 63.9869 2.76782 64.1829 2.66048C64.1924 2.65476 64.2042 2.44768 64.1949 2.44167ZM86.1239 2.37081C85.8869 2.17293 85.7248 2.46389 85.8919 2.61672C86.0591 2.76938 86.1961 2.43079 86.1239 2.37081ZM88.5809 2.22634C88.304 2.07032 88.2604 2.70651 88.557 2.5779C88.5743 2.57063 88.5971 2.2354 88.5809 2.22634ZM1.69045 2.27285C1.68795 2.26689 1.54138 2.26108 1.53788 2.26699C1.45984 2.40948 1.75291 2.42099 1.69045 2.27285ZM91.0191 2.06905C90.9327 1.98299 90.6838 2.08234 90.7912 2.18935C90.8776 2.27544 91.1268 2.1761 91.0191 2.06905ZM54.7403 1.96285C54.7374 1.95617 54.6324 1.95015 54.6345 1.98794C54.6416 2.10965 54.7878 2.0753 54.7403 1.96285ZM95.1631 2.06173C94.5509 2.03778 94.1797 1.51226 94.8464 1.57156C94.9671 1.58229 94.5862 1.73914 94.7399 1.78652C95.0211 1.87284 95.2078 1.54287 95.4947 1.71969C95.5467 1.75205 95.1981 2.06426 95.1621 2.06246C95.1624 2.06222 95.1628 2.06197 95.1631 2.06173ZM64.0905 1.90279C64.0869 1.89686 63.9414 1.89123 63.9379 1.89712C63.8592 2.03955 64.1522 2.05096 64.0905 1.90279ZM48.6089 1.68545C48.6009 1.67281 48.2633 1.66098 48.2523 1.67263C48.0762 1.90554 48.7587 1.93014 48.6089 1.68545ZM73.8868 1.57449C74.0455 1.4312 74.2354 1.41433 74.3619 1.59426C74.2042 1.58471 74.0454 1.5833 73.8868 1.57449Z" fill="#A72561"/>
      </svg>
    `
    }

    return svgObj[name]
  }
})()
