console.debug('*** Experiment started ***')

// Config for Experiment
const config = {
  dir: 'http://127.0.0.1:5501/natpat/redesign',
  // dir: 'https://flopsi69.github.io/crs/natpat/redesign',
  clarity: ['set', 'exp_buzzpatch_5', 'variant_1'],
  debug: false
}

// const orig = console.log
// console.log = function (...args) {
//   orig.apply(console, ['Debug:', ...args])
// }

document.head.insertAdjacentHTML(
  'beforeend',
  `
    <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  `
)

// Styles for Experiment
const styles = /* css */ `
.ff-u {
  font-family: "Urbane";
}

.row.scientific {
  display: none;
}
#LoveBuzzPatch {
  margin-top: -20px;
  padding-bottom: 40px;
}
#kids-adults-alike {
  padding-bottom: 50px;
}

.reviews .js-title {
  color: #000;
  text-align: center;
  font-family: "DINEngschrift LT";
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 42px;
  letter-spacing: 0;
  text-transform: none;
}
.custom-dots {
  max-width: 200px;
  margin: 20px auto 30px;
  z-index: 1;
  position: relative;
}
.custom-dots:empty {
  display: block;
  min-height: 13px;
}
.custom-dots .dot {
  margin: 0 auto;
  height: 13px;
  width: 13px;
  border-radius: 50%;
  display: block;
  cursor: pointer;
}
.custom-dots .slider_navigators .dot {
  background-color: #9AABD580;
  animation:none;
}
.custom-dots .slick-current .dot {
  background-color: #FF209E;
}
.custom-dots .slider_navigators {
  transform: scale(0.4);
}
.custom-dots .slider_navigators.slick-active {
  transform: scale(0.70);
}
.slider_navigators.slick-active.slick-current,
.slider_navigators.slick-active.slick-current {
  transform: scale(1);
}

[class*="lav-"], [class*="lav-"] *, [class*="lav-"] *::before, [class*="lav-"] *::after {
  letter-spacing: 0;
}
[class*="lav-"] img {
  max-width: 100%;
}
.lav-btn {
  padding: 19px 32px 13px;
  border-radius: 100px;
  background: var(--Rasbery, #FF209E);
  text-align: center;
  font-size: 32px;
  letter-spacing: 0.48px;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
  border: none;
  outline: none;
  cursor: pointer;
  transition: .3s;
  font-family:'Din Condensed', Roboto, sans-serif;
  box-shadow: 0px 4px 15px 0px rgba(72, 67, 69, 0.51);
}
.lav-btn_purple {
  color: #FFF;
  background: #FF3C81;
}


.lav-title {
  color: #141313;
  font-size: 30px;
  font-weight: 900;
  line-height: 36px;
}
.lav-learn {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  color: var(--Rasbery, #FF209E);
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
}
.lav-learn span {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: auto;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;
}
.lav-container {
  padding: 0 24px;
}

.lavh-reviews {
  padding: 40px 0 55px;
}
.lavh-reviews__dots {
  margin-bottom: 0;
  margin-top: 40px;
}

.lav-science {
  background: #FAF9F7;
  padding: 40px 0 38vw;
}
.lav-science__title {
  margin-bottom: 24px;
  font-family: "DINEngschrift LT";
  font-weight: 400;
}
.lav-science__item + .lav-science__item {
  margin-top: 40px;
}
.lav-science__subtitle {
  color: var(--Black, #000);
  font-size: 20px;
  font-weight: 700;
  line-height: 26px;
}
.lav-science__image {
  margin: 13px 0;
  overflow: hidden;
  border-radius: 24px;
}
.lav-science__text {
  color: #515151;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
}
.lav-science__subtitle + .lav-science__text {
  margin-top: 8px;
}
.lav-science__learn {
  margin-top: 16px;
}
.lav-science__btn {
  margin-top: 24px;
  width: 100%;
}
.lav-science__caption {
  color: #C30045;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin-top: 16px;
}

.lav-mark {
  margin-top: 40px;
  border-radius: 12px;
  border: 1px solid #CCD0D9;
  background: var(--White, #FFF);
  padding: 24px 20px;
}
.lav-mark__head {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}
.lav-mark__image {
  border-radius: 12px;
  line-height: 0;
  flex-shrink: 0;
  width: 80px;
}
.lav-mark__title {
  color: #141313;
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
}
.lav-mark__caption {
  color: #141313;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin-top: 2px;
}
.lav-mark__descr {
  color: #141313;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin-top: 16px;
}

.lav-features {
  position: relative;
  background-color: #F4A63E;
  color: #000;
  padding: 0 0 40px;
  
}
.lav-features__before {
  position: absolute;
  top: 0;
  width: 100%;
  transform: translateY(-35%);
}
.lav-features__title-main {
  color: #000;
  position: relative;
  z-index: 1;
  font-family: "DINEngschrift LT";
  font-size: 36px;
  line-height: 42px;
  font-weight: 400;
}
.lav-features__list {
  position: relative;
  z-index: 1;
  display: grid;
  gap: 16px;
  margin-top: 24px;
}
.lav-features__item {
  border-radius: 12px;
  background: var(--White, #FFF);
  padding: 14px 14px 20px;
}
.lav-features__list:not(.lav-features__list_expanded) .lav-features__item:nth-child(1n+4) {
  display: none;
}
.lav-features__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
.lav-features__user {
  display: flex;
  align-items: center;
  gap: 13px;
}
.lav-features__user-avatar {
  flex-shrink: 0;
  line-height: 0;
}
.lav-features__user-name {
  overflow: hidden;
  color: var(--Black, #000);
  text-overflow: ellipsis;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
}
.lav-features__location {
  display: flex;
  gap: 8px;
  align-items: center;
}
.lav-features__location-icon {
  line-height: 0;
  flex-shrink: 0;
}
.lav-features__location-text {
  overflow: hidden;
  color: var(--Gray-3, #9AABD5);
  text-overflow: ellipsis;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
}
.lav-features__title {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 0 8px;
  margin-top: 8px;
  border-top: 1px solid rgba(255, 60, 127, 0.10);
}
.lav-features__title-icon {
  line-height: 0;
  flex-shrink: 0;
  width: 32px;
}
.lav-features__title-text {
  color: #141313;
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
}
.lav-features__content {
  color: #141313;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}
.lav-features__content-title {
  font-weight: 700;
  color: #515151;
}
.lav-features__content-descr {
  margin-top: 3px;
  color: #515151;
}
.lav-features__show {
  margin-top: 16px;
  border-radius: 100px;
  border: 2px solid var(--White, #FFF);
  color: var(--White, #FFF);
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  text-transform: uppercase;
  font-family: "DINEngschrift LT";
  padding: 18px 15px;
}
.lav-features__btn {
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 30px;
  width: 100%;
}
.lav-effective__head {
  display: flex;
  align-items: center;
  gap: 16px;
}
.lav-effective__icon {
  flex-shrink: 0;
  line-height: 0;
}
.lav-effective__title {
  font-size: 30px;
  line-height: 36px;
  font-weight: 400;
  font-family: "DINEngschrift LT";
  color: #141313;
}
.lav-effective__caption {
  color: var(--Black, #000);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  margin-top: 12px;
  padding-right: 20px;
}
.lav-effective__caption + .ziplock {
  margin-top: 16px;
  margin-bottom: 24px;
}
.lav-effective__item + .lav-effective__item {
  margin-top: 16px;
}

.mosquito-problems {
  position: relative;
  background-color: #F9F8F6;
  padding-top: 30px;
  padding-bottom: 30px;
}
.title-container h2 {
  position: relative;
  padding: 1px 0 0;
  margin: 5px 0 10px;
}
.mosquito-problems .accordion-BP-title {
  position: relative;
  text-align: center;
  font-size: 24px;
  line-height: 28px;
  font-style: normal;
  font-weight: 500;
  margin: 0;
}
.mosquito-problems .title-highlight {
  font-size: 36px;
  line-height: 44px;
  font-family: "DINEngschrift LT";
  font-weight: 400;
}
.mosquito-problems .title-container {
  margin-bottom: 0;
}
.mosquito-problems .sleep-heading {
  margin-bottom: 20px;
}
#accordion-BP {
  position: relative;
  padding-top: 0;
}
.mosquito-problems .card-BP {
  border: 1px solid #EAEFFD;
}
.mosquito-problems .card-BP-header button {
  color: #515151;
  padding: 11px 52px 11px 15px;
  margin-bottom: 0;
  border-radius: 10px;
  font-size: 17px;
  line-height: 25.5px;
  font-weight: 400;
}
.mosquito-problems .card-BP-header strong {
  font-weight: 700;
}
.mosquito-problems .arrow-down {
  top: 18px;
  right: 11px;
}
.mosquito-problems .card-BP-body {
  padding-top: 16px;
  border-top: 1px solid rgba(255, 60, 127, 0.10);
  margin: 0 15px;
}
.mosquito-problems .card-BP {
  padding: 0;
  border-radius: 10px;
  border: 1px solid rgba(255, 60, 127, 0.10);
  margin: 0;
}
.mosquito-problems .card-BP-body p {
  color: #515151;
  font-weight: 400;
  font-size: 16px!important;
  line-height: 24px!important;
}
.mosquito-problems .btn-accordion-BP {
  margin: 16px 20px 20px;
  max-width: 100%;
  color: #FFF;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  text-transform: uppercase;
  padding: 20px 10px 16px;
  text-decoration: none;
}
.mosquito-problems .card-BP:before {
  top: 24px;
}
.mosquito-problems .card-BP + .card-BP {
  margin-top: 8px;
}

.wave-effect.js-mobile, .bp-comparison{
  display: none;
}
.lav-features + .effectiveness {
  padding: 60px 0 90px;
}
.bp-comparison + .effectiveness {
  padding: 40px 0 65px;
}
.as-seen h4:after {
  content: ':'
}

.lav-globally {
  color: #000;
  text-align: center;
  padding: 40px 0;
  background: #F4A63E;
}
.lav-globally__title {
  font-size: 36px;
  font-weight: 400;
  line-height: 42px;
  font-family: "DINEngschrift LT";
}
.lav-globally__title span {
  color: var(--Yellow, #FFA514);
}

.lav-globally__image {
  margin-top: 24px;
}
.lav-globally__btn {
  margin-top: 24px;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  font-family: "DINEngschrift LT";
  font-weight: 400;
  padding: 17px 15px 15px;
}
.lav-globally__note-caption {
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin-top: 12px;
}

#featured-reviews {
  padding-top: 75px;
}
#featured-reviews .js-title {
  color: #000!important;
  text-align: center;
  font-family: "DINEngschrift LT";
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 42px;
  margin: 0;
}
#featured-reviews .js-title br {
  display: none;
}
.featured-reviews.js-mobile .carousel-inner {
  margin-top: 24px;
}
.ingredients.vids .js-video {
  margin: 0;
}
#ingredients .js-btn.btn-primary {
  margin-bottom: 0;
  border-radius: 52px;
  background: #FF3C7F;
  box-shadow: 0px 2px 4px 0px rgba(12, 11, 11, 0.10), 0px 12px 32px 0px rgba(0, 0, 0, 0.05);
  color: #FFF;
  font-family: "DIN Condensed";
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  text-transform: uppercase;
  margin-top: 20px;
  max-width: 100%;
  letter-spacing: 0.27px;
  padding-top: 22px;
  padding-bottom: 18px;
}
.lav-people__note-caption {
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: var(--Midnight, #1F1F5B);
  margin-top: 20px;
}
.ingredients.vids {
  margin-bottom: 0;
  padding-bottom: 30px;
}

#faqs {
  padding-bottom: 45px;
  padding-top: 30px;
}
.faqs .js-title {
  color: #000!important;
  text-align: center;
  font-family: "DINEngschrift LT";
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 42px;
  letter-spacing: 0;
  max-width: 80%;
  margin: auto;
  text-transform: none;
}
#faqs #js-accordion {
  margin-top: 30px;
}
#faqs .card {
  border-radius: 8px;
  background: #EAF0FF;
}
#faqs .card + .card {
  margin-top: 16px;
}
.faqs #js-accordion .card-link {
  padding: 12px;
  color: #000;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  display: flex;
  align-items: center;
  gap: 15px;
  justify-content: space-between;
  width: 100%;
  flex-flow: row-reverse;
  border-radius: 8px;
  background: #FAF9F7;
}
#faqs .card-link span {
  position: static;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: none;
  flex-shrink: 0;
  width: 18px;
  height: 18px;
  transition: .3s;
}
#faqs .card-link:not(.collapsed) span {
  transform: rotate(45deg);
}
.faqs #js-accordion .card-body {
  border-radius: 0px 0px 8px 8px;
  background: #FAF9F7;
  margin-bottom: 0;
  padding: 6px 12px 9px;
}
.faqs #js-accordion .card-body p {
  color: #515151;
  font-size: 16px!important;
  font-style: normal;
  font-weight: 400;
  line-height: 24px!important;
}

.purchase {
  padding-top: 45px;
  padding-bottom: 0;
}
#getNow {
  padding-top: 0!important;
  padding-bottom: 40px!important;
}
.package h2 {
  color: #0C0B0B;
  text-align: center;
  font-family: "DINEngschrift LT";
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 48px;
  letter-spacing: 0.75px;
  text-transform: uppercase;
}
.package h2 + p {
  margin: 0;
  color: #181717;
  text-align: center;
  font-size: 20px!important;
  font-style: normal;
  font-weight: 500;
  line-height: 20px!important;
  letter-spacing: 0.6px;
  margin-top: 10px;
  margin-bottom: 20px;
}
.package .bestseller {
  border-radius: 2px;
  background: #000;
  color: #FFF;
  text-align: center;
  font-family: "DIN Condensed";
  font-size: 11.25px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.45px;
  text-transform: uppercase;
  padding-top: 4px;
  top: -25px;
}
.js-packs input[type=radio]+label {

}
.js-packs input[type=radio]+label span {
}
.new-bundle-pack h3 {
  color: #212529;
  font-size: 16.875px;
}
.new-bundle-pack .bundle-off {
  color: #FFF;
  text-align: center;
  font-family: "DIN Condensed";
  font-size: 13.5px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px; /* 103.704% */
  letter-spacing: 0.6px;
}
.new-bundle-pack .js-packs input[type=radio]+label .pack-label {

}
.new-bundle-pack .js-packs input[type=radio]+label .pack-price-each {
  margin-top: 4px;
}
.package .prices .js-total {

}
.package .prices .js-regular {

}
.package .js-heading .js-btn.btn-primary {
  color: #FFF;
  text-align: center;
  font-family: "DIN Condensed";
  font-size: 18.438px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 130.169% */
  letter-spacing: 0.3px;
  text-transform: uppercase;
  padding-top: 24px;
  padding-bottom: 17px;
}
#getNow .days {
  margin-top: 17px;
  margin-bottom: 0;
  max-width: 100%!important;
  padding: 0 10px;
}
.reviews {
  padding-top: 0;
}
footer .js-logo img {
  margin-top: 0;
}
#featured-reviews {
  max-width: 100%;
  padding-left: 20px;
  padding-right: 20px;
}
#featured-reviews .row > div {
  padding: 0;
}
.instagram-video-slides {
  margin: 0 -25px -30px;
}

.lav-modal__slider:not(.active) {
  // display: none;
}
.lav-modal__single {
 margin-top: 20px;
}
.lav-modal__single-slide {
  border-radius: 24px;
  background-color: #ECEEF0;
  height: 235px;
  background-size: cover;
  overflow: hidden;
}
.lav-modal__nav {
  margin: 20px -6px 0;
}
.lav-modal__nav-slide {
  border-radius: 8px;
  background-color: #ECEEF0;
  height: 52px;
	margin: 0 6px;
  background-size: cover;
  overflow: hidden;
}
.adult-pack--dropdown-toggle p {
  color: #0C0B0B;
  text-align: center;
  font-family: "DINEngschrift LT";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.6px;
  text-transform: uppercase;
}
.lp-bp--mosquito-repellent-patches {
  width: 36px;
}
#getNow .adult-pack--container img:not(.lp-bp--mosquito-repellent-patches) {
  margin-right: 7px;
}
.adult-pack--container .adult-pack--dropdown-toggle {
  padding: 8px;
}
.adult-pack-content p {
  margin-top: 10px;
}
.js-heading .adult-pack-btns {
  margin-top: 15px;
}
.js-heading ul li .adult-pack-details span.adult-pack-number {
  color: #181717;
  text-align: center;
  font-family: "DIN Condensed";
  font-size: 16.203px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 111.09% */
  letter-spacing: 0.6px;
  text-transform: uppercase;
}
.js-heading ul li .adult-pack-details span.adult-pack-price {
  color: #181717;
  text-align: center;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
  letter-spacing: 0.6px;
}
.adult-pack--container {
  margin-top: 12px;
}
.js-heading ul li.active .adult-pack-details span.adult-pack-number, .js-heading ul li.active .adult-pack-details span.adult-pack-price {
  color: #fff;
}
.lav-feed {
  margin: 9px -20px -15px;
}
`

const stylesEl = document.createElement('style')
stylesEl.classList.add('exp-styles')
stylesEl.innerHTML = styles

// *** Logic *** //
initExp()

async function initExp() {
  await waitFor(() => document.head && document.body, false, { ms: 20 })

  document.body.appendChild(stylesEl)

  console.debug('** InitExp **')
  moveSections()
  addMainSection()
}

function moveSections() {
  _$('#LoveBuzzPatch').insertAdjacentElement('afterend', _$('#flowers'))

  _$('#LoveBuzzPatch').insertAdjacentElement(
    'afterend',
    _$('#kids-adults-alike + div')
  )
}

function addMainSection() {
  addFeedbackSection()
  addScienceSection()
  addFeaturesSection()
  updateEffective()
  addGlobally()
  handleLove()
  initFeed()
  handleFaq()
  // addModals()

  // openModal()

  _$$('.lav-btn').forEach((el) => {
    el.addEventListener('click', () => {
      if (el.classList.contains('lavh-reviews__btn')) {
        pushDataLayer('exp_buzz_v5_click_01', 'Get it now', 'click', 'News')
      }

      if (el.classList.contains('lav-science__btn')) {
        pushDataLayer(
          'exp_buzz_v5_click_02',
          'Get it now',
          'click',
          'The Science Behind BuzzPatch'
        )
      }

      if (el.classList.contains('lav-features__btn')) {
        pushDataLayer(
          'exp_buzz_v5_click_03',
          'Get it now',
          'click',
          'Features Customers Love About BuzzPatch'
        )
      }

      if (el.classList.contains('lav-globally__btn')) {
        pushDataLayer(
          'exp_buzz_v5_click_05',
          'Buy buzzpatch stickers',
          'click',
          'In over 5000 stores globally'
        )
      }

      $('html, body').animate(
        {
          scrollTop:
            $('#purchase').offset().top - (_$('.navbar.fixed-top') ? 50 : 120)
        },
        1000
      )
    })
  })
}

function addModals() {
  initModal()

  const markup = /* html */ `
    <div class='lav-modal__close'>
      <svg  xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M17 1.00024L1.00024 17" stroke="#161718" stroke-width="2" stroke-linecap="round"/>
        <path d="M17 16.9998L1.00025 1" stroke="#161718" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </div>

    <div class='lav-modal__title ff-u'></div>

    <div class='lav-modal__natural'>
      <div class='lav-modal__natural-icon'>
        <img src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/100.svg?v=1619946146" width="54">
      </div>
      <div class='lav-modal__natural-title'>
        100% natural content & chemical free
      </div>
    </div>

    <div class='lav-modal__slider'>
      <div class="slider lav-modal__single"> </div>
      <div class="slider lav-modal__nav"></div>
    </div>
    
    <div class='lav-modal__descr'></div>
    <div class='lav-modal__features'></div>
    
    <button class="lav-btn lav-btn_purple lav-modal__btn">
      Get BuzzPatch Now
    </button>

    <img src="https://www.natpat.com/cdn/shop/files/trustpilog-reviews.svg?v=3706436697046901861" class="lav-modal__trust">
  `

  new Modal('lav-details', markup)

  _$$('[data-trigger-modal]').forEach((el) => {
    el.addEventListener('click', () =>
      openModal(el.dataset.triggerModal, el.innerText.trim())
    )
  })
}

const modalConfig = {
  modal1: {
    title: 'Made with Citronella plant based essential oils',
    isNatural: true,
    descr: `
      BuzzPatch has only natural ingredients: citronella oils. It is completely chemical free and safe for kids.<br/>
      At the heart of its effectiveness are therapeutic-grade essential  Citronella oil, renowned for its natural mosquito-repelling properties and refreshing scents. This oil is carefully sourced and formulated to meet the highest standards of purity and potency, ensuring they deliver both safety and results.<br/>
      Citronella offers a light, citrusy aroma that uplifts the mood while acting as a natural barrier against mosquitoes.
    `,
    images: ['modal1-1.jpg', 'modal1-2.jpg'],
    features: [
      {
        type: 'drop',
        name: 'B.H.',
        location: 'LondonBerry, US',
        title: 'Uses natural essential oil',
        subtitle: 'Love these patches!',
        descr: `I love that these patches utilize natural, yet effective bug repellent and that they can be stuck to clothing rather that directly sprayed on the skin. `
      }
    ]
  },
  modal2: {
    title: 'Fun emojii patches. Kids love our design',
    isNatural: false,
    descr: `
      Kids love BuzzPatch for its playful, colorful sticker designs and enjoy wearing it every day. There are X different characters - while its fun factor turns mosquito protection into an enjoyable routine.
    `,
    images: ['modal2-1.jpg', 'modal2-2.jpg', 'modal2-3.jpg'],
    features: [
      {
        type: 'time',
        name: 'B.S.',
        location: 'Brisbane, AU',
        title: 'Durability',
        subtitle: 'Amazing!',
        descr: `I bought the buzz patches so I didn’t need to coat my young children in sprays but still give them protection against mozzies and sandflies. I use one patch one each child (7 month old and small 3 year old) and only use one for myself as well and we have all gone from being bitten all day every day to getting maybe one bite every few days which is amazing! My 3 year old loves choosing her stickers each day and the educators can easily peel off and restick the sticker when the kids get a change of clothes so they last all day. `
      },
      {
        type: 'sticker',
        name: 'M.J.',
        location: 'New Philadelphia, US',
        title: 'Fun design',
        subtitle: 'Such a great product',
        descr: `What an awesome product! Such fun designs for easy removal. They work amazingly well!`
      }
    ]
  },
  modal3: {
    title: 'Easy to use. Just stick and go. Goes on clothes, not skin.',
    isNatural: false,
    descr: `
      BuzzPatch is incredibly easy to use. There’s no need for sprays, lotions, or complicated applications — applying BuzzPatch takes just a moment. Its simplicity saves time, making it perfect for busy mornings, spontaneous outdoor plans, or active children who dislike greasy or sticky products on their skin. Just stick ob clothes and go. 
    `,
    images: ['modal3-1.jpg', 'modal3-2.jpg', 'modal3-3.jpg'],
    features: [
      {
        type: 'sticker',
        name: 'A.A.',
        location: 'Mesa, US',
        title: 'Easy to apply',
        subtitle: 'Buzz Patch is Great!',
        descr: `At camp last summer and this summer, I was one of the only people without mosquito bites. Most everyone was using the Off bug spray while I used a small sticker. I also love that they are stickers and easy to apply without having to spray my body. BTW - the camps were in 2 different locations. Highly Recommend!`
      }
    ]
  },
  modal4: {
    title: 'How long does it work?',
    isNatural: false,
    descr: `
      From daycare to outdoor adventures, BuzzPatch provides reliable mosquito protection. For best results, we recommend replacing it every 8 hours. It won’t stain clothes, rub off, or wash away—keeping kids covered throughout their day.  
    `,
    images: ['modal4-1.jpg', 'modal4-2.jpg', 'modal4-3.jpg'],
    features: [
      {
        type: 'tree',
        name: 'T.K.',
        location: 'Decatur, US',
        title: 'Outside all day',
        subtitle: 'Amazing',
        descr: `My kids are outside all day at daycare and the bugs are bad. I was hesitant to try these but they really work! They don’t get bitten anymore. Plus they love picking out their sticker every morning. Thanks for making this amazing product.`
      }
    ]
  },
  modal5: {
    title: 'Scientifically Proven to Keep Mosquitoes at Bay',
    isNatural: false,
    descr: `
      BuzzPatch combines the best of nature and science, crafted under the guidance of renowned biochemist Mark Webb, an expert in essential oils and aromatherapy. With over a decade of teaching and consulting experience, Mark has lectured on Aromatic Chemistry, Pharmacology, and Clinical Aromatherapy, making him a leading figure in the field. His work, including the seminal book Bush Sense: Australian Essential Oils and Aromatic Compounds, underpins the careful selection and application of essential oils in BuzzPatch products. Each blend is formulated using therapeutic-grade essential oils that are 100% pure, rigorously tested, and sustainably sourced from Australia, ensuring unparalleled quality and effectiveness.
      <br/><br/>
      Central to BuzzPatch is AromaWeave™—a biodegradable bamboo-based material that embeds essential oils into its fibers for consistent, long-lasting diffusion. Eco-friendly and gentle on sensitive skin, this innovative technology ensures a safe and enjoyable aromatherapy experience for children. Extensive research backs every detail, from adhesive performance to the precise formulation of oils, making BuzzPatch a scientifically proven, trusted choice for families.
    `,
    images: ['video5.mp4', 'modal5-1.jpg', 'modal5-2.jpg'],
    features: [
      {
        type: 'shield',
        name: 'J.W.',
        location: 'Brisbane, AU',
        title: 'Safe',
        subtitle: 'Cost Effective, Fun Designs & Actually Works SO WELL.',
        descr: `We have used this product every single day this summer so far. I have a child who has extremely sensitive skin, and to not have to spray her down with bug spray in order to not be eaten alive by mozzies has been so good for her skin. She loves the stickers - they look like reward stickers and she is comfortable and happy wearing it. The smell of them isn't overwhelming, and doesn't bother her (which, for a kid with allergies is such a good thing). I recommend these mozzie patches to friends and family all the time.`
      }
    ]
  }
}

function openModal(modalId = 'modal1', text) {
  const info = modalConfig[modalId]

  _$('.lav-modal__title').textContent = info.title
  _$('.lav-modal__natural').style.display = info.isNatural ? 'flex' : 'none'
  _$('.lav-modal__descr').innerHTML = info.descr
  _$('.lav-modal__features').innerHTML = ''

  info.features.forEach((feature) => addItem(feature))

  initModalSlider()

  Modal.open('.lav-details')

  function initModalSlider() {
    if (_$('.lav-modal__single.slick-initialized')) {
      $('.lav-modal__single').slick('unslick')
      $('.lav-modal__nav').slick('unslick')
    }
    _$('.lav-modal__nav').innerHTML = ''
    _$('.lav-modal__single').innerHTML = ''

    info.images.forEach((img) => {
      const slide = document.createElement('div')
      slide.classList.add('lav-modal__single-slide')
      if (img.includes('.mp4')) {
        slide.innerHTML = `
          <video autoplay loop muted playsinline style="position: absolute; width: 100%; height: 100%; object-fit: cover;">
            <source src="${config.dir}/img/${img}" type="video/mp4">
          </video>
        `
      } else {
        slide.style.backgroundImage = `url(${config.dir}/img/${img})`
      }
      _$('.lav-modal__single').appendChild(slide)

      const navSlide = document.createElement('div')
      navSlide.classList.add('lav-modal__nav-slide')
      navSlide.style.backgroundImage = `url(${config.dir}/img/${img.replace(
        '.mp4',
        '.jpg'
      )})`
      _$('.lav-modal__nav').appendChild(navSlide)
    })

    $('.lav-modal__single').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true
      // asNavFor: '.lav-modal__nav'
    })

    $('.lav-modal__nav').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      asNavFor: '.lav-modal__single',
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        }
      ]
    })
  }

  function addItem(feature) {
    const markup = /* html */ `
      <div class="lav-features__item">
        <div class="lav-features__head">
          <div class="lav-features__user">
            <div class="lav-features__user-avatar">
              ${getSvg('avatar')}
            </div>
            <div class="lav-features__user-name">
              ${feature.name}
            </div>
          </div>
          <div class="lav-features__location">
            <div class="lav-features__location-icon">
              ${getSvg('location')}
            </div>
            <div class="lav-features__location-text">
              ${feature.location}
            </div>
          </div>
        </div>

        <div class="lav-features__title">
          <div class="lav-features__title-icon">
            <img src="${config.dir}/img/feature-${feature.type || 'cloth'}.svg">
          </div>
          <div class="lav-features__title-text">
            ${feature.title}
          </div>
        </div>

        <div class="lav-features__content">
          <div class="lav-features__content-title">
            ${feature.subtitle}
          </div>
          <div class="lav-features__content-descr">
            ${feature.descr}
          </div>
        </div>
      </div>
    `

    _$('.lav-modal__features').insertAdjacentHTML('beforeend', markup)
  }
}

function addFeedbackSection() {
  const markup = /* html */ `
    <section class='lav-section lavh-reviews'>
      <style>
        #review-slides-2 .item {
          position: relative;
          margin-top: -50px;
          margin-inline: 10px;
        }

        #review-slides-2 .logo-1 {
          max-width: 120px;
        }

        #review-slides-2 .logo-2 {
          max-width: 154px;
        }

        #review-slides-2 .logo-3 {
          max-width: 70px;
        }

        #review-slides-2 .logo-4 {
          max-width: 170px;
        }

        #review-slides-2 .logo-5 {
          max-width: 120px;
        }

        #review-slides-2 .top {
          position: relative;
          width: 100%;
          max-width: max-content;
          margin: 0 auto;
          transform: translateY(50px);
          z-index: 1;
        }

        #review-slides-2 .top img {
          display: block;
          margin: 0 auto;
          max-width: 290px;
          opacity:0;
        }
        #review-slides-2 .slick-active .top img {
          opacity:1;
        }
        #review-slides-2 .top .heading {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
        }

        #review-slides-2 .top h3 {
          font-size: 30px;
          font-weight: 400;
          line-height: 36px;
          letter-spacing: 0;
          color: #fff;
          text-align: center;
          margin: 0;
          text-transform: uppercase;
        }

        #review-slides-2 .bottom {
          width: 100%;
          max-width: max-content;
          margin: 0 auto;
          position: relative;
        }

        #review-slides-2 .bottom img {
          display: block;
          margin: 0 auto;
        }

        #review-slides-2 .bottom .content {
          position: absolute;
          bottom: 5px;
          left: 50%;
          transform: translateX(-50%);
          color: #fff;
          width: 100%;
          padding: 30px;
          text-align: center;
        }

        #review-slides-2 .bottom .content p {
          color: var(--White, #FFF);
          text-align: center;
          font-family: Roboto;
          font-size: 18px !important;
          font-style: normal;
          font-weight: 500;
          line-height: 22px !important;
        }
        @media(max-width: 460px) and (min-width: 430px) {
          #review-slides-2 .bottom .content p {
            font-size: 18px;
            line-height: 22px;
          }
        }

        #review-slides-2 .bottom .blue-curl {
          width: 100%;
          max-width: 327px;
        }

        #review-slides-2 .bottom .content img {
          margin-top: 15px;
        }
        .lavh-reviews__btn-wrap {
          margin-top: 40px;
          text-align: center;
        }
        .lavh-reviews__btn {
          max-width: 311px;
          width: 100%;
        }
      </style>
      <div id="review-slides-2">
        <div class="item">
          <div class="top">
            <img src="//www.natpat.com/cdn/shop/files/lp-catalog-green-box-curl.png?v=676449803224702422" alt="">
            <div class="heading">
              <h3>We're in the news...</h3>
              <h3>for good reasons</h3>
            </div>
          </div>
          <div class="bottom">
            <img
            src="//www.natpat.com/cdn/shop/files/lp-catalog-box-curl-slide-1.png?v=4548870473146664325"
            alt=""
            class="blue-curl">
            <div class="content">
              <p>“Like Garlic for Vampires: These Stickers Help Repel Mosquitoes. Because every
              kid loves stickers anyway.”</p>
              <img
              src="//www.natpat.com/cdn/shop/files/lp-catalog-logo-fatherly.png?v=11717679575375080350"
              alt=""
              class="logo-1">
            </div>
          </div>
        </div>
        <div class="item">
          <div class="top">
            <img src="//www.natpat.com/cdn/shop/files/lp-catalog-green-box-curl.png?v=676449803224702422" alt="">
            <div class="heading">
              <h3>We're in the news...</h3>
              <h3>for good reasons</h3>
            </div>
          </div>
          <div class="bottom">
            <img
            src="//www.natpat.com/cdn/shop/files/lp-catalog-box-curl-slide-2.png?v=3337750874179173866"
            alt=""
            class="blue-curl">
            <div class="content">
              <p>“The first thing I noticed when I opened the package were that these smelled
              seriously amazing. They're citrusy without being overpowering.”</p>
              <img src="//www.natpat.com/cdn/shop/files/lp-catalog-logo-little-things.png?v=12788540905679054945" class="logo-2">
            </div>
          </div>
        </div>
        <div class="item">
          <div class="top">
            <img src="//www.natpat.com/cdn/shop/files/lp-catalog-green-box-curl.png?v=676449803224702422" alt="">
            <div class="heading">
              <h3>We're in the news...</h3>
              <h3>for good reasons</h3>
            </div>
          </div>
          <div class="bottom">
            <img
            src="//www.natpat.com/cdn/shop/files/lp-catalog-box-curl-slide-3.png?v=18290367998811089457"
            alt=""
            class="blue-curl">
            <div class="content">
              <p>“I will say that I did not get bit at all while wearing the BuzzPatch patch
                mosquito repellent patches! I have used them a couple times since then and have
              not been bit, either.”</p>
              <img
              src="//www.natpat.com/cdn/shop/files/lp-catalog-logo-nbc.png?v=5156624487923030515"
              alt=""
              class="logo-3">
            </div>
          </div>
        </div>
        <div class="item">
          <div class="top">
            <img src="//www.natpat.com/cdn/shop/files/lp-catalog-green-box-curl.png?v=676449803224702422" alt="">
            <div class="heading">
              <h3>We're in the news...</h3>
              <h3>for good reasons</h3>
            </div>
          </div>
          <div class="bottom">
            <img
            src="//www.natpat.com/cdn/shop/files/lp-catalog-box-curl-slide-4.png?v=632985268463209629"
            alt=""
            class="blue-curl">
            <div class="content">
              <p>“These anti-mosquito stickers were technically developed for kids, but we think
                they're also perfect for any outdoorsy dads who also happen to be mosquito
              magnets”</p>
              <img
              src="//www.natpat.com/cdn/shop/files/lp-catalog-logo-sweet-high.png?v=1674721699828323433"
              alt=""
              class="logo-4">
            </div>
          </div>
        </div>
        <div class="item">
          <div class="top">
            <img src="//www.natpat.com/cdn/shop/files/lp-catalog-green-box-curl.png?v=676449803224702422" alt="">
            <div class="heading">
              <h3>We're in the news...</h3>
              <h3>for good reasons</h3>
            </div>
          </div>
          <div class="bottom">
            <img
            src="//www.natpat.com/cdn/shop/files/lp-catalog-box-curl-slide-5.png?v=4115231131185890906"
            alt=""
            class="blue-curl">
            <div class="content">
              <p>“The Buzzpatch scent creates a virtual shield by "camouflaging" your kids from
              mosquitos Genius!”</p>
              <img
              src="//www.natpat.com/cdn/shop/files/lp-catalog-logo-motherly.png?v=12701311225758946246"
              alt=""
              class="logo-5">
            </div>
          </div>
        </div>
      </div>
      <div class="lavh-reviews__dots slider_dots-3 custom-dots"></div>
      <div class="lavh-reviews__btn-wrap">
        <button class="lav-btn lav-btn_purple lavh-reviews__btn">
          Get it now!
        </button>
      </div>
    </section>
  `

  _$('#flowers').insertAdjacentHTML('afterend', markup)

  for (let i = 1; i <= $('#review-slides-2 .item').length; i++) {
    $('.slider_dots-3').append(
      '<div class="slider_navigators"><div class="dot"></div></div>'
    )
  }

  $('#review-slides-2')
    .on('swipe', () => {
      // pushDataLayer(
      //   'exp_introduce_v4_click_09',
      //   'Swipe',
      //   'Click',
      //   'We’re in the news'
      // )
    })
    .slick({
      arrows: !0,
      infinite: !0,
      slidesToShow: 3,
      centerMode: !0,
      centerPadding: '10%',
      dots: !1,
      asNavFor: '.slider_dots-3',
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            arrows: !1,
            slidesToShow: 2,
            dots: !1,
            asNavFor: '.slider_dots-3'
          }
        },
        {
          breakpoint: 769,
          settings: {
            centerPadding: '60px',
            arrows: !1,
            slidesToShow: 1,
            dots: !1,
            asNavFor: '.slider_dots-3'
          }
        },
        {
          breakpoint: 550,
          settings: {
            centerPadding: '30px',
            arrows: !1,
            slidesToShow: 1,
            dots: !1,
            asNavFor: '.slider_dots-3'
          }
        },
        {
          breakpoint: 400,
          settings: {
            centerPadding: '15px',
            arrows: !1,
            slidesToShow: 1,
            dots: !1
          }
        },
        {
          breakpoint: 360,
          settings: {
            centerPadding: '5px',
            arrows: !1,
            slidesToShow: 1,
            dots: !1,
            asNavFor: '.slider_dots-3'
          }
        }
      ]
    })

  $('.slider_dots-3').slick({
    infinite: !0,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '#review-slides-2',
    arrows: !1,
    centerMode: !0,
    focusOnSelect: !0,
    centerPadding: '60px'
  })

  visibilityEvent('#review-slides-2', () => {
    pushDataLayer('exp_buzz_v5_view_01', 'Visibility', 'view', 'News')
  })
}

function addScienceSection() {
  const markup = /* html */ `
    <section class="lav-section lav-science">
      <div class="lav-container">
        <div class="lav-science__item">
          <div class="lav-title lav-science__title">
            The Science Behind BuzzPatch
          </div>
      
          <div class="lav-science__content">
            <div class="lav-science__subtitle ff-b">
              How Mosquitoes Find Their Targets:
            </div>
            <div class="lav-science__image">
              <img src="${config.dir}/img/science1.png">
            </div>
            <div class="lav-science__subtitle ff-b">
              Did You Know? Mosquitoes Use CO2 to&nbsp;Track&nbsp;Us!
            </div>
            <div class="lav-science__text ff-b">
              Mosquitoes hunt using carbon dioxide, body heat, and skin odors, with some people naturally more appealing. BuzzPatch blocks these signals using essential oils, creating a barrier that keeps your family bite-free
            </div>
          </div>
        </div>

        <div class="lav-science__item">
          <div class="lav-title lav-science__title">
            Proven Results
          </div>
      
          <div class="lav-science__content">
            <div class="lav-science__subtitle ff-b">
              Scientifically Proven to Keep Mosquitoes&nbsp;at&nbsp;Bay
            </div>
            <div class="lav-science__image">
              <img src="${config.dir}/img/science2.png">
            </div>
            <div class="lav-science__text ff-b">
              BuzzPatch blends nature and science, guided by biochemist Mark Webb's expertise in essential oils. Featuring AromaWeave™—a biodegradable bamboo material—it ensures consistent diffusion while being eco-friendly and safe for sensitive skin. Backed by research, BuzzPatch offers a scientifically advanced aromatherapy solution for children
            </div>
          </div>
        </div>

        <button class="lav-btn lav-btn_purple lav-science__btn">
          Get BuzzPatch
        </button>

        <div class="lav-science__caption ff-b text-center">
          <strong>30 Day Money Back Guarantee:</strong>  If our stickers don't work for you, get a full refund—no returns needed
        </div>

        <div class='lav-mark'>
          <div class='lav-mark__head'>
            <div class='lav-mark__image'>
              <img src='${config.dir}/img/mark-photo.png'>
            </div>
            <div class='lav-mark__info'>
              <div class='lav-mark__title'>
                Mark Webb
              </div>
              <div class='lav-mark__caption'>
                Renowned Biochemist and Aromatherapy Expert Behind NATPAT's Science
              </div>
            </div>
          </div>
          <div class='lav-mark__descr'>
            Mark’s work in Bush Sense: Australian Essential Oils and Aromatic Compounds guides the selection of our essential oils, particularly his expertise in CO2 Extracts. This ensures our product blends nature’s gifts with advanced aromatic science. With over a decade of experience, Mark distills complex science into practical, therapeutic solutions, making our stickers unique.
          </div>
        </div>
      </div>
    </section>
  `

  _$('#kids-adults-alike').insertAdjacentHTML('afterend', markup)

  visibilityEvent('.lav-science', () => {
    pushDataLayer(
      'exp_buzz_v5_view_02',
      'Visibility',
      'view',
      'The Science Behind BuzzPatch'
    )
  })
}

function addFeaturesSection() {
  const markup = /* html */ `
    <section class="lav-section lav-features">
      <img src="${config.dir}/img/feature-before.svg"  class="lav-features__before">
      <div class="lav-container">
        <div class="lav-title lav-features__title-main text-center">
          Features Customers Love About BuzzPatch
        </div>

        <div class="lav-features__list"></div>

        <button class="lav-features__btn lav-btn lav-btn_purple">
          GET Buzzpatch
        </button>

        <div class="lav-features__show text-center">LOAD MORE REVIEWS</div>
      </div>
    </section>
  `

  _$('.lav-science').insertAdjacentHTML('afterend', markup)

  const features = [
    {
      type: 'drop',
      name: 'H.O.',
      location: 'Sydney, AU',
      title: 'Natural',
      subtitle: 'Low tox alternative',
      descr: `These patches are a great alternative to all of those toxic sprays. Easy to use, colourful designs that the kids love and no offensive smell. Highly recommend.`
    },
    {
      type: 'sticker',
      name: 'A.A.',
      location: 'Mesa, US',
      title: 'Easy to apply',
      subtitle: 'Buzz Patch is Great!',
      descr: `At camp last summer and this summer, I was one of the only people without mosquito bites. Most everyone was using the Off bug spray while I used a small sticker. I also love that they are stickers and easy to apply without having to spray my body. BTW - the camps were in 2 different locations. Highly Recommend!`
    },
    {
      name: 'L.P.',
      location: 'Melbourne, AU',
      title: 'Safe',
      subtitle: 'Amazing!!',
      descr: `After raising my own children and always having to cart around big spray cans, these Buzzpatch Mosquito Repellent Patches were a fantastic find when it came time for my Grandchildren! Easy to use, safe and effective. Just throw them in your handbag or car and you are always prepared for those spontaneous adventures! My Grandson used them at the beach and didn't have one mosquito bite on him. Looking forward to trying them in other settings. Highly recommend! Thanks 'Natural Patch'! 😊`
    },
    {
      type: 'shield',
      name: 'J.W.',
      location: 'Brisbane, AU',
      title: 'Safe',
      subtitle: 'Cost Effective, Fun Designs & Actually Works SO WELL.',
      descr: `We have used this product every single day this summer so far. I have a child who has extremely sensitive skin, and to not have to spray her down with bug spray in order to not be eaten alive by mozzies has been so good for her skin. She loves the stickers - they look like reward stickers and she is comfortable and happy wearing it. The smell of them isn't overwhelming, and doesn't bother her (which, for a kid with allergies is such a good thing). I recommend these mozzie patches to friends and family all the time.`
    },
    {
      type: 'time',
      name: 'B.S.',
      location: 'Brisbane, AU',
      title: 'Durability',
      subtitle: 'Amazing!',
      descr: `I bought the buzz patches so I didn’t need to coat my young children in sprays but still give them protection against mozzies and sandflies. I use one patch one each child (7 month old and small 3 year old) and only use one for myself as well and we have all gone from being bitten all day every day to getting maybe one bite every few days which is amazing! My 3 year old loves choosing her stickers each day and the educators can easily peel off and restick the sticker when the kids get a change of clothes so they last all day.`
    },
    {
      type: 'purse',
      name: 'CandaceH',
      location: 'Philadelphia, US',
      title: 'Portability',
      subtitle: 'Convenient and Effective',
      descr: `Bought these patches for (golf). I have them out to everyone. They are convenient and easy to carry in store in my golf bag. Avoids the smell of bug repellent.`
    },
    {
      type: 'tree',
      name: 'R.N.',
      location: 'Corner, Brook, US',
      title: 'Outside all day',
      subtitle: 'We love these patches!',
      descr: `So easy to use and super effective. The kids love them and we've used them for hikes and bikes, playing in the woods, and camping. So much better than spraying on repellent over your sunscreen! I highly recommend!`
    },
    {
      type: 'drop2',
      name: 'D.C.',
      location: 'Guelph, CA',
      title: 'Smell',
      subtitle: 'Life saver!',
      descr: `Been using these for 2 summers now and I've been spreading the word on how amazing this works. Not a single mozzie bite. They smell so good!! Btw, I use the adult size for myself :)`
    },
    {
      type: 'sticker',
      name: 'M.J.',
      location: 'New Philadelphia, US',
      title: 'Fun design',
      subtitle: 'Such a great product',
      descr: `What an awesome product! Such fun designs for easy removal. They work amazingly well!`
    },
    {
      type: 'drop2',
      name: 'S.C.',
      location: 'New Philadelphia, US',
      title: 'Smell',
      subtitle: 'Love them!',
      descr: `We have been wearing BuzzPatch for a little over a year, and WOW! does this product work! I love it—I'm a mosquito magnet! My kids love the characters and I love not having to spray them down!`
    },
    {
      type: 'box',
      name: 'M.G.',
      location: 'Cambridge, NZ',
      title: 'No allergy',
      subtitle: 'Love these Buzzpatches!',
      descr: `I decided to give these a try as mosquitoes seem to love me! Normal bug sprays play havoc with my allergies due to the strong smell. I was using the patches at a family gathering recently and everyone wanted some! So I directed them to the website and now they all have their own! Such a great and innovative product. Looking to try some of the other patches next!`
    }
  ]

  features.forEach((feature) => addItem(feature))

  _$('.lav-features__show').addEventListener('click', () => {
    pushDataLayer(
      'exp_buzz_v5_click_04',
      'Load more reviews',
      'click',
      'Features Customers Love About BuzzPatch'
    )

    _$('.lav-features__list').classList.toggle('lav-features__list_expanded')
    _$('.lav-features__show').textContent = _$('.lav-features__list_expanded')
      ? 'Show less'
      : 'LOAD MORE REVIEWS'

    if (!_$('.lav-features__list_expanded')) {
      _$('.lav-features__show').scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      })
    }
  })

  function addItem(feature) {
    const markup = /* html */ `
      <div class="lav-features__item">
        <div class="lav-features__head">
          <div class="lav-features__user">
            <div class="lav-features__user-avatar">
              ${getSvg('avatar')}
            </div>
            <div class="lav-features__user-name">
              ${feature.name}
            </div>
          </div>
          <div class="lav-features__location">
            <div class="lav-features__location-icon">
              ${getSvg('location')}
            </div>
            <div class="lav-features__location-text">
              ${feature.location}
            </div>
          </div>
        </div>

        <div class="lav-features__title">
          <div class="lav-features__title-text">
            ${feature.title}
          </div>
        </div>

        <div class="lav-features__content">
          <div class="lav-features__content-title">
            ${feature.subtitle}
          </div>
          <div class="lav-features__content-descr">
            ${feature.descr}
          </div>
        </div>
      </div>
    `

    _$('.lav-features__list').insertAdjacentHTML('beforeend', markup)
  }

  visibilityEvent('.lav-features', () => {
    pushDataLayer(
      'exp_buzz_v5_view_03',
      'Visibility',
      'view',
      'Features Customers Love About BuzzPatch'
    )
  })
}

function updateEffective() {
  _$('.bp-comparison + .effectiveness h4').textContent = _$(
    '.bp-comparison + .effectiveness h4'
  ).textContent.replace(':', '')
  _$(
    '.lav-features + .effectiveness .ziplock'
  )?.previousElementSibling?.remove()
  _$(
    '.lav-features + .effectiveness .ziplock'
  )?.previousElementSibling?.remove()
  _$('.lav-features + .effectiveness .ziplock')?.nextElementSibling?.remove()
  _$('.lav-features + .effectiveness .ziplock')?.nextElementSibling?.remove()
  _$('.lav-features + .effectiveness .ziplock')?.nextElementSibling?.remove()

  _$('.lav-features + .effectiveness .ziplock').insertAdjacentHTML(
    'beforebegin',
    /* html */ `
      <div class='lav-effective__head'>
        <div class="lav-effective__icon">
          <img src="${config.dir}/img/icon-12oclock.svg">
        </div>
        <div class="lav-title lav-effective__title">Effective for 12 hours</div>
      </div>

      <div class='lav-effective__caption ff-b'>
        For best results, consider replacing the sticker every 8 hours.
      </div>
    `
  )

  _$('.lav-features + .effectiveness .ziplock').insertAdjacentHTML(
    'afterend',
    /* html */ `
      <div class='lav-effective__item'>
        <div class='lav-effective__head'>
          <div class="lav-effective__icon">
            <img src="${config.dir}/img/effective1.svg">
          </div>
          <div class="lav-title lav-effective__title">Protects the whole body</div>
        </div>

        <div class='lav-effective__caption ff-b'>
          Stick patches to your kids’ clothes to keep them safe from mosquitoes
        </div>
      </div>

      <div class='lav-effective__item'>
        <div class='lav-effective__head'>
          <div class="lav-effective__icon">
            <img src="${config.dir}/img/effective2.svg">
          </div>
          <div class="lav-title lav-effective__title">Safe for kids</div>
        </div>

        <div class='lav-effective__caption ff-b'>
          Stick patches to your kids’ clothes to keep them safe from mosquitoes
        </div>
      </div>

      <div class='lav-effective__item'>
        <div class='lav-effective__head'>
          <div class="lav-effective__icon">
            <img src="${config.dir}/img/effective3.svg">
          </div>
          <div class="lav-title lav-effective__title">For Adults</div>
        </div>

        <div class='lav-effective__caption ff-b'>
          Stick patches to your clothes to protect yourself from mosquitoes
        </div>
      </div>
    `
  )
}

function addGlobally() {
  const markup = /* html */ `
    <section class="lav-section lav-globally">
      <div class="lav-container">
        <div class="lav-title lav-globally__title">In over 5000 stores globally</div>

        <img src="${config.dir}/img/globally1.png" class="lav-globally__image">
        <img src="${config.dir}/img/globally2.png" class="lav-globally__image">

        <button class="lav-btn lav-btn_purple lav-globally__btn">
          BUY Buzzpatch STICKERS
        </button>

        <div class="lav-globally__note-caption">
          <strong>30 Day Money Back Guarantee:</strong>  If our stickers don't work for you, get a full refund—no returns needed
        </div>
      </div>
    </section>
  `

  _$('#featured-reviews').insertAdjacentHTML('beforebegin', markup)

  visibilityEvent('.lav-globally', () => {
    pushDataLayer(
      'exp_buzz_v5_view_04',
      'Visibility',
      'view',
      'In over 5000 stores globally'
    )
  })
}

function handleLove() {
  // $('div[data-widget-host="habitat-static-feed"]').appendTo(".instagram-video-slides");
  _$('#featured-reviews').classList.add('lav-love')
  _$('#ingredients .js-btn.btn-primary').textContent = _$(
    '#ingredients .js-btn.btn-primary'
  ).textContent.replace('!', '')

  _$('#ingredients .js-btn.btn-primary').textContent = 'buy buzzpatch stickers'

  _$('#ingredients .js-btn.btn-primary').insertAdjacentHTML(
    'afterend',
    `
     <div class="lav-people__note-caption">
        <strong>30 Day Money Back Guarantee:</strong>  If our stickers don't work for you, get a full refund—no returns needed
      </div>
  `
  )
}

function initFeed() {
  const instagramFeed = /* html */ `
    <div style="display: block !important;">
      <script type="module">
        if (!("container" in document.documentElement.style)) {
          import("https://unpkg.com/container-query-polyfill@^0.2.0");
        }
      </script>
      
      <div class='lav-feed' data-widget-host="habitat-static-feed" style="display: block !important;">
        <script type="text/props">
          {
            "feedId": "1bc8ba75-7aaa-47fe-b552-8cc5d99df6f3",
            "platformType": "standalone"
          }
        </script>
      </div>
    </div>
  `

  _$('#featuredReviewndicators').insertAdjacentHTML(
    'beforebegin',
    instagramFeed
  )

  visibilityEvent('.lav-feed', () => {
    pushDataLayer(
      'exp_buzz_v5_view_05',
      'Visibility',
      'view',
      'Why people love BuzzPatch'
    )
  })

  // Create script element
  const script = document.createElement('script')
  script.src = 'https://shoppables.archive.com/ugc_feed.js'
  script.defer = true
  script.type = 'module'

  // Append script to the document head
  document.head.appendChild(script)

  // Create link element for stylesheet
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = 'https://shoppables.archive.com/ugc_feed.css'
  link.as = 'style'
  document.head.appendChild(link)

  waitFor(
    () =>
      _$('.lav-feed').shadowRoot?.querySelector(
        'a[href^="https://archive.com?domain=natpat"]'
      ) && _$('.lav-feed').shadowRoot?.querySelector('figure'),
    () => {
      setTimeout(() => {
        const shadowRootEl = _$('.lav-feed').shadowRoot

        shadowRootEl
          .querySelector('a[href^="https://archive.com?domain=natpat"]')
          .remove()

        shadowRootEl.addEventListener('click', (e) => {
          if (e.target.closest('figure')) {
            pushDataLayer(
              'exp_buzz_v5_click_06',
              'Video',
              'click',
              'Why people love BuzzPatch'
            )
          }
        })
      }, 500)
    },
    {
      limit: -1
    }
  )
}

function handleFaq() {
  _$('#getNow .days').src = `${config.dir}/img/trusted-image.png`
  _$('.faqs .js-title').innerHTML = 'Your Questions, Answered'

  _$('.reviews .js-title').innerHTML = 'Trusted Customers Reviews'
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
        z-index: 9999;
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
        background: #fff;
        max-width: 100%;
        width: 100%;
        display: none;
        margin: auto;
        font-family: 'Barlow';
      }
      .lav-modal__inner.active {
        display: block;
      }
      .lav-modal__close {
        cursor: pointer;
        transition: 0.35s;
        line-height: 0;
        display: inline-block;
        padding: 10px;
        margin: -10px;
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
      .lav-modal__title {
        color: var(--NATPAT-BLUE, #1F4FC9);
        font-size: 24px;
        font-weight: 900;
        line-height: 34px;
        margin-top: 20px;
      }
      .lav-modal__descr {
        color: var(--Midnight, #1F1F5B);
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        margin-top: 20px;
      }
      .lav-details {
        padding: 30px 15px 40px;
      }
      .lav-modal__features {
        margin-top: 32px;
        display: grid;
        gap: 16px;
      }
      .lav-details .lav-features__item {
        border-radius: 0;
        background: none;
        padding: 0;
      }
      .lav-modal__btn {
        width: 100%;
        margin: 30px 0;
      }
      .lav-modal__trust {
        margin: auto;
        display: block;
      }
      .lav-modal__natural {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        border-radius: 10px;
        background: #ECEEF0;
        padding: 20px 15px;
        margin-top: 20px;
      }
      .lav-modal__natural {
      }
      .lav-modal__natural-icon {
        flex-shrink: 0;
      }
      .lav-modal__natural-title {
        font-size: 20px;
        text-transform: none;
        line-height: 26px;
        color: #0c0b0b;
        font-weight: 600;
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
        if (condition() || (limit <= 0 && config.limit > 0)) {
          clearInterval(interval)
          if ((limit > 0 || config.limit === -1) && typeof cb === 'function')
            cb()
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
    once: true,
    timer: null,
    ...customConfig
  }
  initIntersection(
    el,
    ({ isIntersecting, target }, observer) => {
      // console.log(target, isIntersecting)
      if (isIntersecting) {
        config.timer = setTimeout(() => {
          // if (isElementInViewport(target)) {
          cb()
          if (config.once) {
            observer.disconnect()
          }
          // }
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
    location: `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
        <g clip-path="url(#clip0_168_1107)">
        <path d="M8 0.980957C4.69158 0.980957 2 3.5804 2 6.77553C2 10.7408 7.36941 16.562 7.59802 16.8079C7.81275 17.0389 8.18764 17.0384 8.40198 16.8079C8.63059 16.562 14 10.7408 14 6.77553C13.9999 3.5804 11.3084 0.980957 8 0.980957ZM8 9.69094C6.33545 9.69094 4.98128 8.38309 4.98128 6.77553C4.98128 5.16796 6.33549 3.86015 8 3.86015C9.66452 3.86015 11.0187 5.16799 11.0187 6.77556C11.0187 8.38312 9.66452 9.69094 8 9.69094Z" fill="#9AABD5"/>
        </g>
        <defs>
        <clipPath id="clip0_168_1107">
        <rect width="16" height="16" fill="white" transform="translate(0 0.980957)"/>
        </clipPath>
        </defs>
      </svg>
    `,
    avatar: `
      <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="0.980957" width="30" height="30" rx="15" fill="#1F4FC9"/>
        <g clip-path="url(#clip0_168_1101)">
        <path d="M14.8716 15.6516C16.0628 15.6516 17.0943 15.2244 17.9371 14.3815C18.7799 13.5387 19.2071 12.5075 19.2071 11.3161C19.2071 10.1252 18.7799 9.09389 17.9369 8.25083C17.094 7.40819 16.0627 6.98096 14.8716 6.98096C13.6803 6.98096 12.6491 7.40819 11.8063 8.25097C10.9635 9.09376 10.5361 10.1251 10.5361 11.3161C10.5361 12.5075 10.9635 13.5388 11.8064 14.3816C12.6494 15.2242 13.6807 15.6516 14.8716 15.6516Z" fill="white"/>
        <path d="M22.4577 20.8222C22.4333 20.4714 22.3842 20.0888 22.3118 19.6848C22.2388 19.2778 22.1447 18.893 22.0321 18.5413C21.9158 18.1778 21.7576 17.8188 21.562 17.4748C21.359 17.1177 21.1206 16.8068 20.8531 16.551C20.5734 16.2833 20.2309 16.0681 19.8348 15.9112C19.4401 15.755 19.0027 15.6759 18.5349 15.6759C18.3511 15.6759 18.1734 15.7513 17.8302 15.9747C17.619 16.1125 17.3719 16.2718 17.0962 16.448C16.8604 16.5982 16.541 16.739 16.1464 16.8664C15.7615 16.991 15.3707 17.0541 14.9849 17.0541C14.5991 17.0541 14.2084 16.991 13.8231 16.8664C13.429 16.7391 13.1095 16.5984 12.874 16.4481C12.6009 16.2736 12.3537 16.1143 12.1393 15.9746C11.7965 15.7512 11.6187 15.6758 11.4349 15.6758C10.9669 15.6758 10.5297 15.755 10.1351 15.9113C9.73933 16.068 9.3967 16.2832 9.11668 16.5511C8.8493 16.8071 8.61076 17.1179 8.40807 17.4748C8.21265 17.8188 8.05444 18.1776 7.93799 18.5414C7.82552 18.8931 7.73145 19.2778 7.65839 19.6848C7.58601 20.0883 7.53685 20.471 7.51254 20.8226C7.48865 21.167 7.47656 21.5245 7.47656 21.8855C7.47656 22.8251 7.77525 23.5858 8.36426 24.1468C8.94598 24.7003 9.71571 24.9812 10.6517 24.9812H19.3189C20.2549 24.9812 21.0244 24.7005 21.6062 24.1468C22.1954 23.5862 22.494 22.8254 22.494 21.8854C22.4939 21.5227 22.4817 21.1649 22.4577 20.8222Z" fill="white"/>
        </g>
        <defs>
        <clipPath id="clip0_168_1101">
        <rect width="18" height="18" fill="white" transform="translate(6 6.98096)"/>
        </clipPath>
        </defs>
      </svg>
    `,
    learnArrow: `
      <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="0.5" width="20" height="20" rx="10" fill="#FF209E"/>
        <path d="M13.8584 10.1264L10.6581 6.65355C10.5668 6.55441 10.445 6.5 10.3152 6.5C10.1852 6.5 10.0636 6.55449 9.97221 6.65355L9.68165 6.96892C9.59037 7.0679 9.54009 7.2001 9.54009 7.34106C9.54009 7.48194 9.59037 7.6186 9.68165 7.71757L11.5486 9.74799H6.47874C6.21131 9.74799 6 9.97518 6 10.2655V10.7113C6 11.0016 6.21131 11.2517 6.47874 11.2517H11.5698L9.68173 13.2934C9.59045 13.3926 9.54016 13.5212 9.54016 13.6621C9.54016 13.8029 9.59045 13.9334 9.68173 14.0325L9.97228 14.3468C10.0636 14.446 10.1853 14.5 10.3153 14.5C10.4451 14.5 10.5669 14.4453 10.6582 14.3461L13.8584 10.8734C13.95 10.7739 14.0004 10.6412 14 10.5001C14.0003 10.3585 13.95 10.2257 13.8584 10.1264Z" fill="white"/>
      </svg>
    `,
    mosquito: `
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="17" stroke="#FF209E" stroke-width="2"/>
        <path d="M16.4895 19.8332C16.5156 19.812 16.5458 19.796 16.5784 19.7861C16.611 19.7761 16.6453 19.7724 16.6793 19.7752C16.7134 19.778 16.7465 19.7871 16.7769 19.8022C16.8072 19.8173 16.8342 19.8379 16.8563 19.863L18.5652 21.808C18.5874 21.8332 18.6041 21.8624 18.6145 21.8938C18.6248 21.9252 18.6286 21.9583 18.6256 21.9912L18.1237 27.3724C18.1179 27.4345 18.0882 27.4923 18.0402 27.5344C17.9923 27.5765 17.9298 27.5999 17.8648 27.6C17.857 27.6 17.8492 27.5996 17.8413 27.599C17.8073 27.596 17.7741 27.5867 17.7439 27.5715C17.7136 27.5563 17.6867 27.5355 17.6648 27.5103C17.6429 27.4852 17.6263 27.4561 17.6161 27.4248C17.6059 27.3935 17.6022 27.3605 17.6053 27.3278L18.0976 22.0505L16.4584 20.1851C16.4139 20.1345 16.3922 20.069 16.3981 20.003C16.4039 19.937 16.4368 19.8759 16.4895 19.8332Z" fill="#1F4FC9"/>
        <path d="M19.1012 20.7634C19.1294 20.7449 19.1611 20.7319 19.1946 20.7251C19.228 20.7184 19.2625 20.718 19.2961 20.7241C19.3297 20.7301 19.3617 20.7425 19.3903 20.7604C19.419 20.7783 19.4436 20.8015 19.4629 20.8286L21.091 23.1133C21.1098 23.1397 21.1232 23.1694 21.1304 23.2007L22.0506 27.2163C22.0654 27.281 22.0529 27.3487 22.0157 27.4045C21.9785 27.4604 21.9197 27.4997 21.8523 27.514C21.7849 27.5282 21.7144 27.5161 21.6562 27.4804C21.598 27.4447 21.557 27.3883 21.5422 27.3236L20.6329 23.3554L19.0333 21.1107C19.014 21.0836 19.0004 21.0531 18.9934 21.021C18.9864 20.9889 18.986 20.9558 18.9923 20.9235C18.9986 20.8913 19.0115 20.8606 19.0302 20.8331C19.0488 20.8056 19.073 20.7819 19.1012 20.7634Z" fill="#1F4FC9"/>
        <path d="M14.5441 21.0715C14.5922 21.0241 14.658 20.9969 14.7271 20.996C14.7961 20.9952 14.8626 21.0206 14.9121 21.0668L16.3728 22.4326C16.4049 22.4626 16.4283 22.5 16.4409 22.5413C16.4535 22.5825 16.4548 22.6262 16.4447 22.6681L15.3571 27.1655C15.3495 27.1976 15.3353 27.2279 15.3155 27.2547C15.2956 27.2814 15.2704 27.3042 15.2414 27.3216C15.2124 27.3391 15.18 27.3508 15.1462 27.3562C15.1125 27.3616 15.0779 27.3606 15.0445 27.3532C15.0112 27.3457 14.9797 27.3321 14.9518 27.3129C14.924 27.2938 14.9004 27.2695 14.8823 27.2416C14.8642 27.2137 14.8521 27.1826 14.8466 27.1501C14.841 27.1177 14.8422 27.0845 14.8501 27.0525L15.9046 22.6922L14.549 21.4247C14.4995 21.3785 14.4713 21.3153 14.4703 21.2491C14.4694 21.1829 14.4959 21.119 14.5441 21.0715Z" fill="#1F4FC9"/>
        <path d="M8.90082 24.636C8.88763 24.6664 8.86832 24.6939 8.84402 24.7171C8.81972 24.7402 8.79089 24.7586 8.75919 24.771C8.72749 24.7835 8.69356 24.7898 8.65931 24.7896C8.62506 24.7895 8.59118 24.7828 8.55961 24.77C8.52805 24.7573 8.49942 24.7387 8.47537 24.7153C8.45131 24.6919 8.43232 24.6641 8.41945 24.6336C8.40659 24.6032 8.40011 24.5706 8.4004 24.5377C8.40069 24.5048 8.40772 24.4723 8.42112 24.4421L9.21169 22.64L9.69138 22.8338L8.90082 24.636Z" fill="#1F4FC9"/>
        <path d="M27.5324 11.6977C27.6767 12.1051 27.5919 12.5278 27.273 12.9896C27.2271 13.0464 26.6397 13.753 25.2228 14.5761C23.862 15.3668 21.4374 16.429 17.6142 17C17.6094 17.0008 17.6047 17.0019 17.6001 17.0029C17.1187 16.9776 16.6362 16.9776 16.1548 17.0029L16.6519 16.7259C18.2024 15.9209 19.7082 15.039 21.1632 14.0837C23.4324 12.5787 24.9137 11.2567 25.5907 10.1363C26.0652 10.3245 27.2369 10.8636 27.5324 11.6977Z" fill="#1F4FC9"/>
        <path d="M24.9649 7.85608C24.9684 7.85921 24.9726 7.86283 24.9763 7.86579C25.3681 8.17766 25.5358 8.5398 25.489 8.9728C25.4551 9.22561 25.3743 9.47056 25.2505 9.69606C25.2444 9.70575 25.239 9.71582 25.2343 9.72621C24.6665 10.7922 23.1834 12.1364 20.8708 13.6704C19.4302 14.6165 17.9393 15.4898 16.4039 16.2868C16.4008 16.2884 16.3977 16.29 16.3947 16.2917L16.0495 16.484L24.3741 7.49382C24.5869 7.58887 24.7856 7.71069 24.9649 7.85608Z" fill="#1F4FC9"/>
        <path d="M12.7105 18.3856L13.3587 18.5888C13.8112 18.7309 14.1968 19.0219 14.4475 19.4104L15.2534 20.6612C14.3225 21.1593 13.4151 21.3562 12.57 21.2348C12.0094 21.1556 11.4808 20.9344 11.0389 20.594C11.2615 19.643 11.8216 18.9052 12.7105 18.3856Z" fill="#1F4FC9"/>
        <path d="M19.0783 9.58931C20.3082 8.10152 21.5653 7.30051 22.8148 7.20853C22.894 7.20266 22.9717 7.19995 23.0475 7.19995C23.3199 7.20002 23.591 7.23557 23.8534 7.30563L15.4278 16.4049C16.161 13.6681 18.9482 9.77007 19.0783 9.58931Z" fill="#1F4FC9"/>
        <path d="M18.1967 17.5526L26.129 22.0318C23.876 22.4537 21.7242 21.7944 20.2655 21.1308C18.53 20.3417 17.3774 19.3813 17.366 19.3716C17.317 19.3305 17.2538 19.3085 17.1888 19.3099C17.1237 19.3113 17.0616 19.336 17.0146 19.3792C16.6084 19.7572 16.1674 20.0994 15.6972 20.4014L14.8892 19.1475C14.5738 18.6586 14.0886 18.2925 13.5194 18.1137L13.3655 18.0655C13.8487 17.875 14.3521 17.7354 14.8667 17.6491C16.416 17.3759 17.9077 17.5202 18.1967 17.5526Z" fill="#1F4FC9"/>
        <path d="M10.1266 20.8535C10.315 20.8535 10.4992 20.9071 10.6559 21.0077C10.8126 21.1082 10.9347 21.251 11.0069 21.4181C11.079 21.5853 11.0978 21.7692 11.0611 21.9466C11.0243 22.1241 10.9336 22.287 10.8003 22.415C10.6671 22.5429 10.4973 22.63 10.3124 22.6653C10.1276 22.7006 9.93603 22.6825 9.76192 22.6132C9.58782 22.544 9.43901 22.4268 9.33431 22.2764C9.22961 22.1259 9.17373 21.9491 9.17373 21.7682C9.17401 21.5257 9.27448 21.2932 9.45311 21.1217C9.63174 20.9502 9.87394 20.8538 10.1266 20.8535Z" fill="#1F4FC9"/>
        <path d="M4.7998 30L29.9998 4.80005" stroke="#FF209E" stroke-width="2"/>
      </svg>
    `,
    gloves: `
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <g clip-path="url(#clip0_168_2208)">
          <path d="M28.3908 13.7105L30.3869 11.7144C31.6463 10.4549 31.6463 8.40556 30.3869 7.146C30.0054 6.76456 29.5514 6.4995 29.069 6.34906C29.7196 5.1275 29.5312 3.573 28.503 2.54475C27.3843 1.42606 25.643 1.30194 24.3849 2.17044C24.2272 1.71481 23.9675 1.29712 23.6165 0.946125C23.0063 0.336 22.1951 0 21.3322 0C20.4693 0 19.6581 0.336 19.048 0.946187L10.7598 9.23431L10.7614 6.37612C10.7614 4.57425 9.36598 3.04681 7.65085 2.97125C6.75216 2.93175 5.90129 3.25131 5.25329 3.87144C4.60498 4.49181 4.24791 5.32756 4.24798 6.22456L4.24716 16.1739C4.2471 16.9441 3.9471 17.6682 3.40248 18.2128L0.943539 20.6717C0.577414 21.0378 0.577414 21.6314 0.943539 21.9976L10.6713 31.7254C10.8471 31.9012 11.0855 32 11.3342 32C11.5828 32 11.8212 31.9012 11.997 31.7254L12.6726 31.0498C12.9964 30.726 13.3466 30.4346 13.7197 30.1757V31.0625C13.7197 31.5802 14.1394 32 14.6572 32H24.0322C24.5499 32 24.9697 31.5802 24.9697 31.0625V30.4114C24.9697 29.3534 25.3192 28.3047 25.954 27.4583C26.8307 26.2896 27.3134 24.8413 27.3134 23.3802V21.2729L29.5621 19.0243C30.1722 18.4141 30.5081 17.6029 30.5078 16.7401C30.5075 15.8772 30.1712 15.0662 29.5607 14.4564C29.2185 14.1147 28.8178 13.8666 28.3908 13.7105ZM29.061 10.3887L24.2381 15.2115C24.209 15.2184 24.1795 15.2246 24.1508 15.2325C23.9835 14.2812 23.2765 13.5135 22.3583 13.2579L27.1448 8.47144C27.6732 7.94356 28.5327 7.94369 29.061 8.47194C29.5895 9.00031 29.5895 9.86025 29.061 10.3887ZM11.3469 29.7241L11.3342 29.7367L2.93235 21.3347L4.72835 19.5387C5.62704 18.64 6.12204 17.4451 6.12223 16.1741L6.12304 6.22469C6.12304 5.84406 6.27454 5.48944 6.54966 5.22619C6.82454 4.96313 7.18616 4.82794 7.56835 4.84444C8.29516 4.8765 8.88641 5.56356 8.88641 6.37563L8.8836 11.4984C8.88341 11.8777 9.11173 12.2198 9.4621 12.3649C9.81254 12.5103 10.2159 12.43 10.484 12.1618L20.3739 2.272C20.8784 1.74619 21.7861 1.74625 22.2906 2.272C22.8164 2.7765 22.8164 3.68425 22.2906 4.18875L16.6376 9.84175C16.2715 10.2078 16.2715 10.8014 16.6376 11.1676C17.0037 11.5336 17.5973 11.5336 17.9634 11.1676L25.2603 3.87063C25.7887 3.34225 26.6485 3.34225 27.177 3.87063C27.7055 4.39906 27.7055 5.259 27.177 5.78744L20.2148 12.7497C19.774 12.3611 19.1959 12.125 18.5635 12.125C17.6455 12.125 16.8415 12.6223 16.4067 13.3617C16.1088 13.2361 15.7816 13.1667 15.4385 13.1667C15.4385 13.1667 15.4385 13.1667 15.4384 13.1667C14.7707 13.1667 14.1429 13.4267 13.6707 13.8989C13.1985 14.3711 12.9385 14.9989 12.9385 15.6666V20.1341C11.9554 19.3904 10.5539 19.407 9.66204 20.2235C9.14954 20.6927 8.85885 21.333 8.8436 22.0264C8.82854 22.7099 9.09717 23.3791 9.58041 23.8623L13.2317 27.5144C13.3899 27.6726 13.5122 27.8571 13.5949 28.0579C12.7672 28.4995 12.0131 29.0579 11.3469 29.7241ZM25.4385 23.3802C25.4385 24.4382 25.0889 25.4869 24.4541 26.3333C23.6349 27.4256 23.1596 28.7622 23.1009 30.125H15.5947V28.6928C15.5947 27.7468 15.2264 26.8576 14.5577 26.1887L10.9063 22.5365C10.781 22.4113 10.7142 22.2448 10.7182 22.0676C10.722 21.8906 10.7966 21.7269 10.9282 21.6064C11.1734 21.3819 11.6132 21.4248 11.8886 21.7003L13.213 23.0247C13.4811 23.2929 13.8843 23.3731 14.2347 23.228C14.585 23.0829 14.8135 22.7411 14.8135 22.3619V15.6666C14.8003 14.8558 16.0767 14.8562 16.0635 15.6666C16.0635 16.1844 16.4832 16.6041 17.001 16.6041C17.5187 16.6041 17.9385 16.1843 17.9385 15.6666C17.9719 15.14 17.721 13.9968 18.5635 14C19.4058 13.996 19.1551 15.1418 19.1885 15.6666C19.1885 16.1844 19.6082 16.6041 20.126 16.6041C20.6437 16.6041 21.0635 16.1844 21.0635 15.6666C21.0509 14.8573 22.3255 14.8548 22.3135 15.6667V17.6441C22.3135 18.1618 22.7332 18.5816 23.251 18.5816C23.7687 18.5816 24.1885 18.1618 24.1885 17.6441C24.1885 17.2991 24.4691 17.0182 24.814 17.0181C25.1496 17.0109 25.4454 17.3065 25.4385 17.6421V23.3802ZM28.2364 17.6985L27.3135 18.6214V17.6421C27.3135 16.9743 27.0534 16.3466 26.581 15.8745C26.5228 15.8163 26.4622 15.7614 26.3994 15.7098C26.9316 15.2574 27.733 15.2811 28.2357 15.7832C28.4917 16.0389 28.6327 16.3789 28.6328 16.7407C28.633 17.1025 28.4922 17.4426 28.2364 17.6985Z" fill="#FF209E"/>
        </g>
        <defs>
          <clipPath id="clip0_168_2208">
            <rect width="32" height="32" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    `,
    leafs: `
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M28.2816 7.4578L27.7324 6.03033L26.7693 7.21812C26.7392 7.25615 23.6932 10.9646 19.6859 11.5368C18.9253 11.6456 18.2151 11.7871 17.5288 11.9454C17.7171 8.82954 16.4453 5.85699 13.7434 3.08961L12.6759 2L12.2602 3.46903C12.2505 3.49999 11.3289 6.67243 8.98786 8.10078C6.42302 9.67063 4.78948 11.4059 4.00234 13.4011C3.20719 15.287 3.18685 17.4101 3.94574 19.3109C4.47684 20.6148 5.50598 21.6531 6.80509 22.1959C6.93228 22.2444 7.06185 22.2863 7.19335 22.3215C7.12547 23.2035 7.20319 24.0906 7.42331 24.9473C6.9466 24.9889 6.49112 25.0101 6.06483 25.0101C4.89484 25.0328 3.72845 24.8732 2.6076 24.537L2 26.1997C3.3157 26.6123 4.68982 26.808 6.06836 26.779C6.75335 26.7764 7.43762 26.7337 8.11758 26.6507C8.40834 27.1609 8.7652 27.6305 9.17889 28.0473C10.6113 29.3778 12.5173 30.0786 14.4704 29.993C17.4586 29.9247 20.3443 28.8906 22.6956 27.0452L22.9547 26.8418C25.3869 24.9367 32.7781 19.149 28.2816 7.4578ZM7.49052 20.5623L7.47637 20.557C6.60245 20.1941 5.91337 19.4919 5.56689 18.6113C4.99273 17.1411 5.02004 15.504 5.64295 14.0539C6.28505 12.4256 7.67714 10.9725 9.90678 9.61049C11.4623 8.56941 12.6811 7.098 13.4144 5.37586C15.1447 7.30313 15.9709 9.87698 15.6856 12.4513C13.7151 13.052 11.9146 14.1103 10.4312 15.5397C9.02528 16.9253 8.01073 18.6581 7.49052 20.5623ZM21.8678 25.4453L21.6024 25.6549C18.0055 28.5036 12.6821 29.0475 10.4312 26.7967C10.2824 26.6474 10.1435 26.4884 10.0156 26.3209C13.6355 25.4966 18.0479 23.3651 22.5797 18.4698L21.2814 17.2679C16.8504 22.0553 12.5901 24.0116 9.18774 24.697C8.94513 23.8708 8.87376 23.0038 8.97813 22.149C9.24771 20.1084 10.2003 18.2193 11.6809 16.7894C13.5037 14.9657 16.2048 13.8204 19.9362 13.2879C22.6586 12.7611 25.1568 11.4198 27.1 9.44157C30.1035 18.996 24.1655 23.6463 21.8678 25.4453Z" fill="#FF209E"/>
        <path d="M22.4238 15.9731L23.7761 17.1131C24.1535 16.6644 24.5314 16.1953 24.91 15.706L23.509 14.6261C23.1473 15.0957 22.7847 15.5432 22.4238 15.9731Z" fill="#FF209E"/>
      </svg>
    `,
    scinece: `
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M25.0379 26.1083H22.4865C24.6073 24.4661 25.9754 21.8963 25.9754 19.0125C25.9754 14.0659 21.9511 10.0416 17.0046 10.0416H15.9337V4.95412C15.9337 4.43637 15.514 4.01662 14.9962 4.01662H14.9296V0.9375C14.9296 0.41975 14.5098 0 13.9921 0H9.97539C9.45764 0 9.03789 0.41975 9.03789 0.9375V4.01669H8.9712C8.45345 4.01669 8.0337 4.43644 8.0337 4.95419V14.9959C8.0337 15.5136 8.45345 15.9334 8.9712 15.9334H9.03789V19.0125C9.03789 19.5303 9.45764 19.95 9.97539 19.95H13.9921C14.5098 19.95 14.9296 19.5303 14.9296 19.0125V15.9333H14.9962H17.0046C18.7025 15.9333 20.0838 17.3146 20.0838 19.0125C20.0838 20.7104 18.7025 22.0917 17.0046 22.0917H6.96289C6.44514 22.0917 6.02539 22.5114 6.02539 23.0292C6.02539 23.5469 6.44514 23.9667 6.96289 23.9667H14.0587V26.1084H6.96289C6.44514 26.1084 6.02539 26.5281 6.02539 27.0459V31.0625C6.02539 31.5802 6.44514 32 6.96289 32H25.0379C25.5556 32 25.9754 31.5802 25.9754 31.0625V27.0458C25.9754 26.5281 25.5556 26.1083 25.0379 26.1083ZM10.9129 1.875H13.0546V4.01669H10.9129V1.875ZM13.0546 18.075H10.9129V15.9333H13.0546V18.075ZM14.0587 14.0583H9.9087V5.89169H14.0587V14.0583ZM15.9337 23.9667H17.0046C19.7363 23.9667 21.9588 21.7443 21.9588 19.0125C21.9588 16.2808 19.7363 14.0583 17.0046 14.0583H15.9337V11.9166H17.0046C20.9173 11.9166 24.1004 15.0998 24.1004 19.0125C24.1004 22.9252 20.9172 26.1083 17.0046 26.1083H15.9337V23.9667ZM24.1004 30.125H7.90039V27.9833H24.1004V30.125Z" fill="#FF209E"/>
      </svg>
    `,
    returnMoney: `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
        <path d="M12 22.7869C6.17513 22.7869 1.45312 18.0619 1.45312 12.2332C1.45312 6.40466 6.17513 1.67966 12 1.67966C17.8249 1.67966 22.5469 6.40466 22.5469 12.2332C22.5469 16.5869 19.9124 20.3248 16.1515 21.9378" stroke="#1F4FC9" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.8897 21.347L12.0004 22.7869L10.749 24.0391" stroke="#1F4FC9" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.85352 14.1115C9.85352 15.1487 10.8145 15.9896 11.9999 15.9896C13.1853 15.9896 14.1463 15.1487 14.1463 14.1115C14.1463 13.0742 13.1853 12.2333 11.9999 12.2333C10.8145 12.2333 9.85352 11.3925 9.85352 10.3552C9.85352 9.31791 10.8145 8.47701 11.9999 8.47701C13.1853 8.47701 14.1463 9.31791 14.1463 10.3552" stroke="#1F4FC9" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 6.79684V8.47693" stroke="#1F4FC9" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 15.9896V17.6697" stroke="#1F4FC9" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `
  }

  return svgObj[name]
}
