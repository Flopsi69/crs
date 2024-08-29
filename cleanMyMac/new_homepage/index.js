;(function () {
  console.debug('*** Experiment started ***')

  // Config for Experiment
  const config = {
    // dir: 'http://127.0.0.1:5500/cleanMyMac/new_homepage',
    dir: 'https://flopsi69.github.io/crs/cleanMyMac/new_homepage',
    debug: false
  }

  class Modal {
    static list = []
    constructor(name, html) {
      if (!$('.lav-modal')) {
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

      $('.lav-modal').insertAdjacentElement('beforeend', this.el)

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

      if ($('.lav-modal__inner.active')) {
        $('.lav-modal__inner.active').classList.remove('active')
      }

      $(modalName).classList.add('active')

      if (typeof cb === 'function') cb()

      setTimeout(() => {
        $('.lav-modal').classList.add('active')
      }, 100)
    }

    static close(cb) {
      document.body.classList.remove('lav-modal-open')

      if (!$('.lav-video__inner video').paused) {
        $('.lav-video__inner video').pause()
      }

      $('.lav-modal')?.classList.remove('active')

      if (typeof cb === 'function') cb()

      setTimeout(() => {
        $('.lav-modal__inner.active')?.classList.remove('active')
      }, 400)
    }

    static addStyles() {
      const styles = /*css */ `
      .lav-modal {
        position: fixed;
        z-index: 999;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(43, 42, 78, 0.65);
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
        border-radius: 18px;
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
      .lav-video {
        max-width: 1280px;
        padding: 37px 100px 30px;
      }
      .lav-video video {
        cursor: pointer;
      }
      .lav-btn {
        border: none;
        outline: none;
        min-height: 48px;
        min-width: 180px;
        padding: 2px 5px;
        transition: .3s;
      }
      .lav-btn__green {
        border-radius: 10px;
        background: #06C668;
        color: #FFF;
        font-size: 16px;
        font-weight: 600;
        line-height: 48px;
      }
      .lav-btn__trans {
        border-radius: 10px;
        border: 2px solid rgba(51, 51, 51, 0.08);
        background: #FFF;
        color: #000;
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
      }
      @media(hover: hover) {
        .lav-btn__green:hover {
          background-color: #2ecf80;
          transition: .3s;
        }
        .lav-btn__trans:hover {
          border-color: #333;
        }
      }
      .lav-video__control {
        display: flex;
        gap: 20px;
        margin-top: 30px;
      }
      .lav-video__close {
        position: absolute;
        top: 20px;
        left: 20px;
        line-height: 0;
      }
      .lav-video__inner {
        border-radius: 8px;
        line-height: 0;
        overflow: hidden;
      }
      .lav-video__inner video {
        width: 100%;
      }

      .lav-benefit {
        max-width: 880px;
        padding: 40px 68px 32px;
      }
      .lav-benefit:before {
        content: '';
        position: absolute;
        border-radius: 30px;
        background: linear-gradient(180deg, #FE7AAD 0%, #CF6D98 100%);
        height: 80%;
        top: 50%;
        transform: translateY(-50%);
        right: -20px;
        z-index: -1;
        width: 210px;
      }
      .lav-benefit__close {
        position: absolute;
        z-index: 1;
        top: 20px;
        right: 20px;
        cursor: pointer;
        transform: rotate(45deg);
        width: 56px;
      }
      .lav-benefit__close:hover {
        transform: rotate(225deg);
      }
      .lav-benefit__logo {
        line-height: 0;
      }
      .lav-benefit__logo-num {
        color: #359FF5;
        font-size: 76px;
        font-weight: 700;
        line-height: 90px
      }
      .lav-benefit__logo img {
        height: 114px;
      }
      .lav-benefit__info {
        position: relative;
        max-height: 75vh;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
        overflow-scrolling: touch;
        margin: 0 -68px;
        padding: 0 68px;
        padding-bottom: 5px;
        background:
          linear-gradient(
            rgba(255, 255, 255, 0), 
            #ffffff 66%
          ) center bottom,
          radial-gradient(
            farthest-side at 50% 100%,
            rgba(29, 29, 29, 0.25),
            rgba(0, 0, 0, 0)
          ) center bottom;
        background-color: #fff;
        background-repeat: no-repeat;
        background-size: 100% 35px, 125% 15px;
        background-attachment: local, scroll;
      }
      .lav-benefit__info:before {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 16px;
        background: linear-gradient(to bottom, rgba(248, 249, 252, 0), #f8f9fc);
      }
      .lav-benefit__info:not(.active) {
        display: none;
      }
      .lav-benefit__image {
        max-width: 100%;
        margin-top: 32px;
      }
      .lav-benefit__image + * {
        margin-top: 32px;
      }
      .lav-benefit__title {
        color: #1D1D1D;
        font-size: 48px;
        font-weight: 700;
        line-height: 58px;
        margin-top: 16px;
      }
      .lav-benefit__subtitle {
        color: #1D1D1D;
        font-size: 24px;
        font-weight: 700;
        line-height: 32px;
      }
      .lav-benefit__descr {
        margin-top: 24px;
        color: #1D1D1D;
        font-size: 18px;
        font-weight: 300;
        line-height: 28px;
      }
      .lav-benefit__grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 24px;
        margin-top: 32px;
      }
      .lav-benefit__block-head {
        display: flex;
        align-items: center;
        gap: 12px;
      }
      .lav-benefit__block-icon {
        line-height: 0;
      }
      .lav-benefit__block-icon img {
        height: 40px;
      }
      .lav-benefit__block-title {
        color: #1D1D1D;
        font-size: 20px;
        font-weight: 700;
        line-height: 30px;
      }
      .lav-benefit__block-descr {
        margin-top: 12px;
        font-size: 14px;
        font-weight: 300;
        line-height: 24px;
      }
      .lav-benefit__block {}
      .lav-benefit__block {}
      .lav-benefit__block {}
      .lav-benefit {}
      .lav-benefit {}
      .lav-benefit {}
      .lav-benefit {}
      .lav-benefit {}
      .lav-benefit__control {
        display: flex;
        gap: 24px;
        padding-top: 24px;
      }
      .lav-benefit {}
    `

      const stylesEl = document.createElement('style')
      stylesEl.classList.add('exp-modal')
      stylesEl.innerHTML = styles
      document.head.appendChild(stylesEl)
    }
  }

  // Styles for Experiment
  const styles = /*css*/ `
  .topper p {
    font-size: 22px;
    line-height: 34px;
    margin-bottom: 36px;
  }
  .topper .cta-wrapper a.buy_now {
    margin-right: 20px;
  }
  .topper .cta-wrapper a {
    min-width: 200px;
  }

  .lav-guarantee {
    display: flex;
    gap: 3px;
    align-items: center;
    justify-content: center;
    margin-top: 16px;
  }
  .lav-guarantee__caption {
    color: #000;
  }
  .lav-guarantee__icon {
    line-height: 0;
  }

  .lav-awards {
    margin-top: 120px;
  }
  .lav-awards__list {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 24px;
  }
  .lav-award {
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    padding: 36px 20px;
    color: #fff;
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }
  .lav-award__logo {
    text-align: center;
    line-height: 0;
  }
  .lav-award__logo img {
    max-width: 100%;
  }
  .lav-award__caption {
    margin-top: 16px;
  }
  .lav-award:nth-child(1) {
    background: linear-gradient(180deg, #B06F91 0%, #645A80 100%);
  }
  .lav-award:nth-child(2) {
    background: linear-gradient(180deg, #CC6EA8 0%, #605784 100%);
  }
  .lav-award:nth-child(3) {
    background: linear-gradient(180deg, #CB6866 0%, #6F5871 100%);;
  }
  .lav-award:nth-child(4) {
    background: linear-gradient(180deg, #5F8FB5 0%, #48658C 100%);
  }
  .lav-award:nth-child(5) {
    background: linear-gradient(180deg, #3DAB99 0%, #3B6780 100%);
  }

  .lav-genius {
    text-align: center;
    margin-top: 120px;
    color: #000;
  }
  .lav-genius__container {
    max-width: 805px;
  }
  .lav-genius__title {
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
  }
  .lav-genius__descr {
    margin-top: 14px;
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
  }
  .lav-genius__control {
    margin-top: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .lav-genius__button {
    display: inline-flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    min-height: 48px;
    padding: 5px 23px;
    border-radius: 10px;
    border: 2px solid rgba(51, 51, 51, 0.08);
    background: #fff;
    color: #000;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    transition: .3s;
  }
  @media(hover:hover) {
    .lav-genius__button:hover {
      border: 2px solid #333;
    }
  }
  .video {
    margin-top: 120px;
    margin-bottom: 120px;
  }
  .video-wrapper {
    height: 600px;
  }
  .video-wrapper video {
    position: relative;
    top: -50px;
  }
  .video .awards-wrapper {
    display: none;
  }
  .paw-icon {
    top: 120px;
  }

  section.feature .feature-item:not(:last-child) {
    display: none;
  }
  .lav-speed {
    background: #FFF0F9;
    padding-top: 100px;
    padding-bottom: 20px;
  }
  .lav-clean {
    background: #F7F2FF;
    padding-top: 100px;
    padding-bottom: 20px;
    margin-top: 100px;
  }
  .lav-malware {
    background: #FFF7F0;
    padding: 100px 0;
    margin-top: 100px;
    margin-bottom: 100px;
  }
  .lav-section {
    color: #1D1D1D;
    overflow: hidden;
  }
  .lav-section__inner {
    display: flex;
    gap: 120px;
  }
  .lav-section .splide__arrow {
    position: absolute;
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);
    background: white url(${config.dir}/img/slider-arrow.svg) center no-repeat;;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 65px;
    height: 65px;
    transition: .1s;
    opacity: 0;
    box-shadow: 0 3px 20px 3px rgba(183, 113,182, 0.4);
    transition: .3s;
  }
  @media(hover:hover) {
    .lav-section .splide__arrow:hover {
      box-shadow: 0 0px 10px 3px rgba(183, 113,182, 0.7);
    }
  }
  .lav-section .splide__arrow svg {
    display: none;
  }
  .lav-section .splide__arrow:not([disabled])  {
    opacity: 1;
  }
  .lav-section .splide__arrow--prev  {
    left: -8vw;
    transform: rotate(180deg) translateY(50%);
  }
  .lav-section .splide__arrow--next  {
    right: -8vw;

  }

  .lav-clean .lav-section__inner {
    flex-direction: row-reverse;
    gap: 100px;
  }
  .lav-section__image img {
    width: 866px;
    margin-top: -20px;
  }
  .lav-malware .lav-section__image img {
    margin-top: -44px;
  }
  .lav-section__info {
    max-width: 500px;
    flex-shrink: 0;
  }
  .lav-section__title {
    font-size: 36px;
    font-weight: 700;
    line-height: 48px;
  }
  .lav-section__descr {
    margin-top: 20px;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }
  .lav-section__accent {
    margin-top: 24px;
    display: flex;
    gap: 14px;
    align-items: center;
    color: #000;
    font-weight: 700;
    line-height: 24px;
  }
  .lav-section__button {
    margin-top: 20px;
    border-radius: 10px;
    border: 2px solid #E57DA8;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.00) 100%), #F3659F;
    min-height: 48px;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    min-width: 300px;
    padding: 5px 23px;
    transition: .3s;
  }
  .lav-clean .lav-section__button {
    border-color: #BB85B7;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.00) 100%), #B96FB4;
  }
  .lav-malware .lav-section__button {
    border-color: #E58C78;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.00) 100%), #F1795E;
  }
  @media(hover:hover) {
    .lav-speed .lav-section__button:hover {
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.00) 100%), #F3659F;
    }
    .lav-clean .lav-section__button:hover {
      background: #B96FB4;
    }
    .lav-malware .lav-section__button:hover {
      background: #F1795E;
    }
  }
  .lav-section__caption {
    margin-top: 10px;
    color: #8F8F8F;
    font-size: 14px;
    font-weight: 300;
    line-height: 24px;
  }
  .lav-section__feedback {
    margin-top: 24px;
  }
  .lav-section__feedback-head {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  .lav-section__feedback-author {
    color: #000;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
  }
  .lav-section__feedback-logo {
    max-width: 114px;
  }
  .lav-clean .lav-section__feedback-logo {
    max-width: 126px;
  }
  .lav-section__feedback-stars {
    line-height: 0;
  }
  .lav-section__feedback-text {
    font-size: 14px;
    font-weight: 300;
    line-height: 24px;
    margin-top: 7px;
  }

  .lav-splide {
    margin-top: 70px;
  }
  .lav-splide:before {
    content: '';
    position: absolute;
    height: 130px;
    bottom: -20px;
    left: -100vw;
    right: -100vw;
    background: #fff;
  }
  .lav-splide .splide__track {
    overflow: visible;
  }
  .lav-slide {
    padding: 31px 29px 37px 25px;
    border-radius: 20px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    background: #fff;
    transition: .3s;
    cursor: pointer;
  }
  .lav-slide:hover {
    transform: scale(1.07);
    border: 1px solid #E36C98;
  }
  .lav-slide:not(.is-visible):not(.is-active) {
    opacity: 0.4;
  }
  .lav-slide.is-active + .splide__slide, .lav-slide.is-active + .splide__slide + .splide__slide {
    opacity: 1;
  }
  .lav-slide__icon {
    line-height: 0;
    height: 64px;
    display: flex;
    align-items: center;
  }
  .lav-slide__icon-text {
    color: #A965F3;
    font-size: 60px;
    font-weight: 600;
    line-height: 1;
  }
  .lav-slide__icon img {
    height: 64px;
  }
  .lav-slide__footer {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    align-items: center;
    margin-top: 36px;
    min-height: 56px;
  }
  .lav-slide__caption {
    color: #000;
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
  }
  .lav-slide__open {
    line-height: 0;
  }
  .lav-slide__open img {
    width: 42px;
  }

  @media(min-width: 1600px) {
    .lav-awards__container, .lav-section__container {
      max-width: 1360px;
    }
    .lav-award {
      min-height: 284px;
      padding-left: 30px;
      padding-right: 30px;
      padding-top: 56px;
    }
    .video {
      max-width: 1360px;
    }
    .video-wrapper {
      width: 1360px;
      left: 0;
      height: 738px;
    }
    .video .awards {
      max-width: 100%;
    }
    .lav-section__image img {
      width: 792px;
    }
  }
`

  const stylesEl = document.createElement('style')
  stylesEl.classList.add('exp-styles')
  stylesEl.innerHTML = styles

  // *** Logic *** //
  initExp()

  async function initExp() {
    await waitFor(() => document.head && document.body, false, { ms: 25 })

    if (location.pathname !== '/') return

    pushDataLayer('exp_homepage_loaded')

    console.debug('** InitExp **')

    document.head.appendChild(stylesEl)

    connectSplide()
    addGuaranteeCaption()
    addAwards()
    addGenius()
    addNewSections()
    initVideoModal()
    initModalBenefit()
    addEvents()
  }

  function addEvents() {
    document.addEventListener('click', (e) => {
      if (e.target.closest('.lav-btn__green')) {
        window.open($('.cta-wrapper .buy_now').href, '_blank')

        if (e.target.closest('.lav-benefit')) {
          const title = $(
            '.lav-benefit.active .lav-benefit__title'
          )?.textContent.trim()
          pushDataLayer(
            'exp_homepage_popup_card_buy',
            'Buy Now',
            'Button',
            'Popup with additional info after card: ' + title
          )
        }

        if (e.target.closest('.lav-video')) {
          pushDataLayer(
            'exp_homepage_popup_hiw_buy',
            'Buy Now',
            'Button',
            'Popup How it works'
          )
        }
      }

      if (e.target.closest('.lav-btn__trans')) {
        window.open($('.cta-wrapper .download').href, '_blank')

        if (e.target.closest('.lav-benefit')) {
          const title = $(
            '.lav-benefit.active .lav-benefit__title'
          )?.textContent.trim()
          pushDataLayer(
            'exp_homepage_popup_card_try',
            'Try 7 Days Free',
            'Button',
            'Popup with additional info after card: ' + title
          )
        }

        if (e.target.closest('.lav-video')) {
          pushDataLayer(
            'exp_homepage_popup_hiw_try',
            'Try 7 Days Free',
            'Button',
            'Popup How it works'
          )
        }
      }

      if (e.target.closest('.lav-video') && e.target.closest('video')) {
        pushDataLayer(
          'exp_homepage_popup_hiw_play',
          'Play',
          'Video',
          'Popup How it works'
        )
      }
    })

    visibilityEvent('.lav-awards__list', () => {
      pushDataLayer(
        'exp_homepage_trust_view',
        'View on screen',
        'Element',
        'Enhanced trust'
      )
    })

    visibilityEvent('.lav-genius', () => {
      pushDataLayer(
        'exp_homepage_meet_view',
        'View on screen',
        'Element',
        'Meet your personal Mac genius'
      )
    })

    visibilityEvent('.lav-speed .lav-section__info', () => {
      pushDataLayer(
        'exp_homepage_get_more_view',
        'View on screen',
        'Element',
        'Get more done on a faster Mac'
      )
    })

    visibilityEvent('.lav-speed .lav-splide', () => {
      pushDataLayer(
        'exp_homepage_get_car_view',
        'View on screen',
        'Element',
        'Get more done on a faster Mac. Carousel'
      )
    })

    visibilityEvent('.lav-clean .lav-section__info', () => {
      pushDataLayer(
        'exp_homepage_clean_view',
        'View on screen',
        'Element',
        'Clean up your Mac with one click'
      )
    })

    visibilityEvent('.lav-clean .lav-splide', () => {
      pushDataLayer(
        'exp_homepage_clean_car_view',
        'View on screen',
        'Element',
        'Clean up your Mac with one click. Carousel'
      )
    })

    visibilityEvent('.lav-malware .lav-section__info', () => {
      pushDataLayer(
        'exp_homepage_remove_view',
        'View on screen',
        'Element',
        'Remove malvare from Mac'
      )
    })
  }

  function initModalBenefit() {
    const markup = /*html*/ `
    <img class='lav-benefit__close lav-modal__close' src='${config.dir}/img/plus.png'>

    <!-- 4x -->
    <div class='lav-benefit__info lav-benefit__4x'>
      <div class='lav-benefit__logo lav-benefit__logo-num' style="color: #F3659F;">4x</div>

      <div class='lav-benefit__title'>
        Faster boot: Your Mac starts&nbsp;waking up earlier
      </div>

      <div class='lav-benefit__descr'>
        Want your Mac to boot up faster? That’s easy — get rid of unwanted, broken or hidden login Items. CleanMyMac X shows you every startup program running in the background so you can switch them on and off at your liking. Lessen the load on your processor and prepare to see a noticeable speed boost.
      </div>

      <img class='lav-benefit__image' src='${config.dir}/benefit/4x.png'>
    </div>

    <!-- 2.5x -->
    <div class='lav-benefit__info lav-benefit__ram'>
      <div class='lav-benefit__logo lav-benefit__logo-num' style="color: #A965F3;">2.5x</div>

      <div class='lav-benefit__title'>
        Free Up RAM: Let your apps breathe freely
      </div>

      <div class='lav-benefit__descr'>
        Want your Mac to boot up faster? That’s easy — get rid of unwanted, broken or hidden login Items. CleanMyMac X shows you every startup program running in the background so you can switch them on and off at your liking. Lessen the load on your processor and prepare to see a noticeable speed boost.
      </div>

      <img class='lav-benefit__image' src='${config.dir}/benefit/2-5.png'/>
    </div>

    <!-- boost -->
    <div class='lav-benefit__info lav-benefit__boost'>
      <div class='lav-benefit__logo'>
        <img src='${config.dir}/img/slide-boost.png'>
      </div>

      <div class='lav-benefit__title'>
        How does the Maintenance module help me?
      </div>

      <div class='lav-benefit__descr'>
        CleanMyMac X’s Maintenance module gives you direct access to all the Mac maintenance scripts. It keeps your Mac optimized and helps bring it up to speed at a moment’s notice.
      </div>

      <div class='lav-benefit__grid'>
        <div class='lav-benefit__block'>
          <div class='lav-benefit__block-head'>
            <div class='lav-benefit__block-icon'>
              <img src='${config.dir}/img/icon-note.png'>
            </div>
            <div class='lav-benefit__block-title'>Run Maintenance Scripts</div>
          </div>
          <div class='lav-benefit__block-descr'>
            When you run maintenance scripts with CleanMyMac X, you help improve the performance of your Mac by removing and rotating old log files, rebuilding and reorganizing select databases on your Mac, and running other general maintenance 
          </div>
        </div>

        <div class='lav-benefit__block'>
          <div class='lav-benefit__block-head'>
            <div class='lav-benefit__block-icon'>
              <img src='${config.dir}/img/icon-repair.png'>
            </div>
            <div class='lav-benefit__block-title'>Repair Disk Permissions</div>
          </div>
          <div class='lav-benefit__block-descr'>
            Verify and instantly repair broken permissions on your Mac’s operating system to help its performance. By repairing disk permissions, you ensure that your Mac’s system is functioning properly.
          </div>
        </div>

        <div class='lav-benefit__block'>
          <div class='lav-benefit__block-head'>
            <div class='lav-benefit__block-icon'>
              <img src='${config.dir}/img/icon-disk.png'>
            </div>
            <div class='lav-benefit__block-title'>Verify Startup Disk</div>
          </div>
          <div class='lav-benefit__block-descr'>
            Verifying your startup disk is somewhat similar to Repair Disk Permissions. However, instead of your operating system, it checks your Mac’s file system for errors and repairs them to improve your system’s reading/writing performance and keep your Mac healthy.
          </div>
        </div>

        <div class='lav-benefit__block'>
          <div class='lav-benefit__block-head'>
            <div class='lav-benefit__block-icon'>
              <img src='${config.dir}/img/icon-speedup.png'>
            </div>
            <div class='lav-benefit__block-title'>Mail Speedup</div>
          </div>
          <div class='lav-benefit__block-descr'>
            When Mail gets to be overrun with messages, it can take forever to search for the stuff you need. You can sort all these messages out and fix the lag time by running Mail Speedup to reindex (read: re-organize) the Mail database.
          </div>
        </div>

        <div class='lav-benefit__block'>
          <div class='lav-benefit__block-head'>
            <div class='lav-benefit__block-icon'>
              <img src='${config.dir}/img/icon-rebuild.png'>
            </div>
            <div class='lav-benefit__block-title'>Rebuild Launch Services Database</div>
          </div>
          <div class='lav-benefit__block-descr'>
            When you right-click a file in Finder and select “Open With…,” a list of applications is shown. However, if you’re installing and uninstalling applications, this list can become a bit muddled with apps you don’t even have anymore.
          </div>
        </div>

        <div class='lav-benefit__block'>
          <div class='lav-benefit__block-head'>
            <div class='lav-benefit__block-icon'>
              <img src='${config.dir}/img/icon-spotlight.png'>
            </div>
            <div class='lav-benefit__block-title'>Reindex Spotlight</div>
          </div>
          <div class='lav-benefit__block-descr'>
            Spotlight keeps track of all the names and locations of files on your Mac, including every word within the body of each of your documents and their metadata. Crazy, right? Reindexing Spotlight helps improve its searching performance and accuracy.
          </div>
        </div>

        <div class='lav-benefit__block'>
          <div class='lav-benefit__block-head'>
            <div class='lav-benefit__block-icon'>
              <img src='${config.dir}/img/icon-dns.png'>
            </div>
            <div class='lav-benefit__block-title'>Flush DNS Cache</div>
          </div>
          <div class='lav-benefit__block-descr'>
            When your Mac accesses a website for the first time, it basically asks, “Hey, what’s the IP address for [website]?” The DNS (or Domain Name System) maps website names to IP addresses. For example, blog.macpaw.com to 174.142.192.113.
          </div>
        </div>
      </div>
    </div>

    <!-- agents -->
    <div class='lav-benefit__info lav-benefit__agents'>
      <div class='lav-benefit__logo'>
        <img src='${config.dir}/img/slide-rocket.png' style='width: 86px; height: 86px;'>
      </div>

      <div class='lav-benefit__title'>
        Trim down hidden launch agents
      </div>

      <div class='lav-benefit__descr'>
        Some small supporting applications can sneak into the background without you knowing it. CleanMyMac X makes a list of all the launch agents you can disable — they will no longer compete for your Mac’s memory. This will result in your Mac getting snappier. Now you’re controlling the situation on your Mac.
      </div>

      <img class='lav-benefit__image' src='${config.dir}/benefit/agents.png'/>
    </div>

    <!-- switch -->
    <div class='lav-benefit__info lav-benefit__switch'>
      <div class='lav-benefit__logo'>
        <img src='${config.dir}/img/slide-switch.png' style='height: 94px; width: 94px;'>
      </div>

      <div class='lav-benefit__title'>
        Switch off memory-eating apps
      </div>

      <div class='lav-benefit__descr'>
        What is it that slows your Mac down? CleanMyMac X gives you a clear answer. You can shut down programs that are heavy consumers and quit your hung apps to free up memory. Now all those memory-hoggers are visible in plain sight — bring them under control to see less beach balls on your Mac’s screen.
      </div>

      <img class='lav-benefit__image' src='${config.dir}/benefit/switch.png'/>
    </div>

    <!-- 5x -->
    <div class='lav-benefit__info lav-benefit__5x'>
      <div class='lav-benefit__logo lav-benefit__logo-num'>5x</div>

      <div class='lav-benefit__title'>
        Clean Your Entire Mac with CleanMyMac X
      </div>

      <div class='lav-benefit__descr'>
        When it comes to cleaning your Mac, Smart Scan in CleanMyMac X knows best. After all, it’s called “Smart Scan.” Just load it up, click Scan, and let CleanMyMac X do its thing.
      </div>

      <img class='lav-benefit__image' src='${config.dir}/benefit/5x.png'/>
    </div>

    <!-- system -->
    <div class='lav-benefit__info lav-benefit__system'>
      <div class='lav-benefit__logo'>
        <img src='${config.dir}/img/slide-mouse.png'>
      </div>

      <div class='lav-benefit__title'>
        How does the System Junk module help me?
      </div>

      <div class='lav-benefit__descr'>
        Well, when’s the last time you used one of your apps in Swahili? No? What about Tetum? Probably a no there, too. See, these are the kind of things that are on your system that you probably will never use (we’ll call them “junk”). There are tons of files like this on your Mac’s system, and CleanMyMac X helps you clean them all up.
      </div>

      <div class='lav-benefit__grid'>
        <div class='lav-benefit__block'>
          <div class='lav-benefit__block-head'>
            <div class='lav-benefit__block-icon'>
              <img src='${config.dir}/img/icon-flag.png'>
            </div>
            <div class='lav-benefit__block-title'>Language Files</div>
          </div>
          <div class='lav-benefit__block-descr'>
            Language packs give your system and apps the ability to operate in multiple languages. Do you need 10+ languages for every single app installed on your Mac? Probably not.
          </div>
        </div>

        <div class='lav-benefit__block'>
          <div class='lav-benefit__block-head'>
            <div class='lav-benefit__block-icon'>
              <img src='${config.dir}/img/icon-caches.png'>
            </div>
            <div class='lav-benefit__block-title'>Caches</div>
          </div>
          <div class='lav-benefit__block-descr'>
            A cache is a place where data is stored temporarily in order to help things load and run more quickly. Files in the cache eventually become outdated and begin to pile up on your Mac, resulting in decreased performance.
          </div>
        </div>

        <div class='lav-benefit__block'>
          <div class='lav-benefit__block-head'>
            <div class='lav-benefit__block-icon'>
              <img src='${config.dir}/img/icon-logs.png'>
            </div>
            <div class='lav-benefit__block-title'>Log Files</div>
          </div>
          <div class='lav-benefit__block-descr'>
            A log file records the activity of an application, service, or process. However, sometimes these logs begin to pile up unnecessary information. If you’re a user who rarely sends crash reports, you can clean your user logs to increase app performance and save some space on your Mac.
          </div>
        </div>

        <div class='lav-benefit__block'>
          <div class='lav-benefit__block-head'>
            <div class='lav-benefit__block-icon'>
              <img src='${config.dir}/img/icon-universal.png'>
            </div>
            <div class='lav-benefit__block-title'>Universal Binaries</div>
          </div>
          <div class='lav-benefit__block-descr'>
            A universal binary is a set of files that come with an application package. These files allow the app to run on two different types of Mac architectures, Intel and PowerPC. Your Mac only uses one of these two architectures, so the app files for the other architecture aren’t necessary.
          </div>
        </div>

        <div class='lav-benefit__block'>
          <div class='lav-benefit__block-head'>
            <div class='lav-benefit__block-icon'>
              <img src='${config.dir}/img/icon-development.png'>
            </div>
            <div class='lav-benefit__block-title'>Development Junk</div>
          </div>
          <div class='lav-benefit__block-descr'>
            Development junk is the group of support files that are created while installing an application on your Mac. When you install an app on your Mac, the app can create these support files to help aid it during the installation process. These files should be, and typically are, removed after the installation is over. However, sometimes they just plain aren't.
          </div>
        </div>

        <div class='lav-benefit__block'>
          <div class='lav-benefit__block-head'>
            <div class='lav-benefit__block-icon'>
              <img src='${config.dir}/img/icon-broken-login.png'>
            </div>
            <div class='lav-benefit__block-title'>Broken Login Items</div>
          </div>
          <div class='lav-benefit__block-descr'>
            A login item is an app or service that should launch during startup. However, sometimes when you remove an app or service, it leaves a broken link as a leftover login item. These broken login items are useless and can take up valuable resources on your Mac.
          </div>
        </div>

        <div class='lav-benefit__block'>
          <div class='lav-benefit__block-head'>
            <div class='lav-benefit__block-icon'>
              <img src='${config.dir}/img/icon-broken.png'>
            </div>
            <div class='lav-benefit__block-title'>Broken Preferences</div>
          </div>
          <div class='lav-benefit__block-descr'>
            Preference files can be found within application contents. They keep parameters that define how an app should operate. However, over time such files can be corrupted, and several things may be reasons for that: for instance, an app crash, a sudden blackout, or a hard drive corruption. Deleting preference files can make your apps operate correctly again.
          </div>
        </div>

        <div class='lav-benefit__block'>
          <div class='lav-benefit__block-head'>
            <div class='lav-benefit__block-icon'>
              <img src='${config.dir}/img/icon-ios.png'>
            </div>
            <div class='lav-benefit__block-title'>iOS Photo Cache</div>
          </div>
          <div class='lav-benefit__block-descr'>
            This is a group of cache files found in your Photos Library (or Aperture Library). They’re located in a folder called iPod Photo Cache. When you sync photos to your iPhone, iPad, or iPod, iTunes creates this folder, where it then stores your cache files.
          </div>
        </div>

        <div class='lav-benefit__block'>
          <div class='lav-benefit__block-head'>
            <div class='lav-benefit__block-icon'>
              <img src='${config.dir}/img/icon-xcode.png'>
            </div>
            <div class='lav-benefit__block-title'>XCode Junk</div>
          </div>
          <div class='lav-benefit__block-descr'>
            If you develop your own applications, you know how much space Xcode and its supporting files gobble up. Cleaning up Derived Data, Module Cache, and other Xcode junk not only frees up storage space, but can also resolve build issues and warnings.
          </div>
        </div>
      </div>
    </div>

    <!-- old -->
    <div class='lav-benefit__info lav-benefit__old'>
      <div class='lav-benefit__logo'>
        <img src='${config.dir}/img/slide-clean.png'>
      </div>

      <div class='lav-benefit__title'>
        How does the Large & Old Files module help me?
      </div>

      <div class='lav-benefit__descr'>
        Everyone has (at one time or another) thrown files into random folders. It’s easy for these files to take up gigabytes of space without even realizing it! CleanMyMac X’s Large & Old Files scans your entire Mac and brings all these files to the surface. Plus, it classifies them into handy collections so you can easily find what deserves deleting. See what’s what, based on a file’s size, date last opened, and type.
      </div>

      <img class='lav-benefit__image' src='${config.dir}/benefit/old.png'/>
    </div>

    <!-- photo -->
    <div class='lav-benefit__info lav-benefit__photo'>
      <div class='lav-benefit__logo'>
        <img src='${config.dir}/img/slide-junk.png'>
      </div>

      <div class='lav-benefit__title'>
        How does the Photo Junk module help me?
      </div>

      <div class='lav-benefit__descr'>
        Photo Junk cleans up all the useless files left over by Photos. It’s 100% safe to use because it doesn’t remove any actual photos. The module scans your Photos library to locate useless cache files and heavy RAWs that take up space.
      </div>

      <div class='lav-benefit__grid'>
        <div class='lav-benefit__block'>
          <div class='lav-benefit__block-head'>
            <div class='lav-benefit__block-icon'>
              <img src='${config.dir}/img/icon-time.png'>
            </div>
            <div class='lav-benefit__block-title'>Is there really that much cache in Photos?</div>
          </div>
          <div class='lav-benefit__block-descr'>
            Photos creates cache files almost every time you work with it. Here’s an example. If you have iCloud Photo Library enabled, all your pics are stored in the cloud. But when you view these pics on your Mac, Photos creates locally cached copies of them. So, even if you keep all photos in iCloud, their local copies are still wasting space on your Mac.
            <br/><br/>
            More cache files pile up when Photos detects faces on your pics — that is, every time you add photos of people. If you import new pics often, you’ve probably got a lot to clean up.
          </div>
        </div>

        <div class='lav-benefit__block'>
          <div class='lav-benefit__block-head'>
            <div class='lav-benefit__block-icon'>
              <img src='${config.dir}/img/icon-raw.png'>
            </div>
            <div class='lav-benefit__block-title'>RAW files take up gigabytes.</div>
          </div>
          <div class='lav-benefit__block-descr'>
            When you import RAW files into Photos, the app creates JPEG copies of them. These JPEGs are what you see in Photos — and heavy RAWs just sit on your Mac, forgotten. If you no longer need the RAW originals, CleanMyMac will remove them to save you gigabytes of space.* But don’t worry: it will always ask you first.
            <br/><br/>
            <em>This feature is not yet available on macOS High Sierra.</em>
          </div>
        </div>

        <div class='lav-benefit__block'>
          <div class='lav-benefit__block-head'>
            <div class='lav-benefit__block-icon'>
              <img src='${config.dir}/img/icon-iphoto.png'>
            </div>
            <div class='lav-benefit__block-title'>What if I’m still using iPhoto?</div>
          </div>
          <div class='lav-benefit__block-descr'>
            Just like the Photos app, iPhoto has tons of junk hidden in its library. It’s a whole different kind of junk, and CleanMyMac cleans it up, too. Photo Junk searches your iPhoto library to locate useless and hidden copies of your pics, kept by iPhoto after you rotate, crop, or otherwise edit them.
          </div>
        </div>
      </div>
    </div>

    <!-- uninstaller -->
    <div class='lav-benefit__info lav-benefit__uninstaller'>
      <div class='lav-benefit__logo'>
        <img src='${config.dir}/img/slide-reset.png'>
      </div>

      <div class='lav-benefit__title'>
        How does the Uninstaller module help me?
      </div>

      <div class='lav-benefit__descr'>
        Well, if you’re an appy guy or gal, you’ve probably deleted your fair share of applications. How do you delete an application? You drag it to the Trash, of course. And like most, you’ve probably thought that dragging an app to the Trash was the correct way to remove it...
      </div>

      <img class='lav-benefit__image' src='${config.dir}/benefit/uninstaller.png'/>

      <div class='lav-benefit__subtitle' style='color: #000'>
        But there’s more to it than that
      </div>

      <div class='lav-benefit__descr'>
        When you delete an app by dragging it to the Trash, you leave behind tons of associated files on your Mac, like caches, preferences, saved states, and more. CleanMyMac X removes all of these leftover files. Plus, it can also identify broken and outdated apps to help keep your Mac up to date.
      </div>
    </div>

    <div class='lav-benefit__control'>
      <button class='lav-btn lav-btn__green'>Buy Now</button>
      <button class='lav-btn lav-btn__trans'>Try 7 Days Free</button>
    </div>
  `

    new Modal('lav-benefit', markup)
  }

  function initVideoModal() {
    const markup = /*html*/ `
    <div class='lav-video__close lav-modal__close'>
      ${getSvg('close')}
    </div>

    <div class='lav-video__inner'>
      <video playsinline="" preload="auto" controls poster="${
        config.dir
      }/video-placeholder.png">
          <source src="${config.dir}/video.mp4" type="video/mp4">
      </video>
      <!-- <video>
          <source src="https://drive.google.com/file/d/1VPP4t-mTJBLdJ6Yhn9V-wcv9vgIu9MPd/preview" type='video/mp4'>
      </video>
      <iframe src="https://drive.google.com/file/d/1VPP4t-mTJBLdJ6Yhn9V-wcv9vgIu9MPd/preview"  allow="autoplay"></iframe>
      width="640" height="480"-->
    </div>

    <div class='lav-video__control'>
      <button class='lav-btn lav-btn__green'>Buy Now</button>
      <button class='lav-btn lav-btn__trans'>Try 7 Days Free</button>
    </div>
  `

    new Modal('lav-video', markup)

    // Modal.open('.lav-video')
  }

  async function addNewSections() {
    const markup = /*html*/ `
    <section class="lav-section lav-speed">
      <div class='container lav-section__container'>
        <div class='lav-section__inner'>
          <div class='lav-section__info'>
            <div class='lav-section__title'>
              Get more done on a&nbsp;faster&nbsp;Mac
            </div>

            <div class='lav-section__descr'>
              Every time your Mac stalls, you get a full deck of speedup tools to rely upon: freeing up RAM, running maintenance scripts, managing Login Items, Launch Agents, and Hung Applications. These will lessen your system load and tune the Mac for maximum performance. When your machine is productive, you too are productive.
            </div>

            <div class='lav-section__accent'>
              ${getSvg('rocket')}
              Keeps your Mac as fast as new
            </div>

            <button class='lav-section__button'>Speed up your Mac now</button>
            <div class='lav-section__caption'>start your 7 days free trial</div>

            <div class='lav-section__feedback'>
              <div class='lav-section__feedback-head'>
                <div class='lav-section__feedback-author'>Romain Dillet</div>
                <img class='lav-section__feedback-logo' src="${
                  config.dir
                }/img/techCrunch.png" >
                <div class='lav-section__feedback-stars'>
                  ${getSvg('stars')}
                </div>
              </div>

              <div class='lav-section__feedback-text'>
                <strong>“</strong>&nbsp;CleanMyMac X helps you remove unneeded files and get an overview of what is slowing down your computer.&nbsp;<strong>”</strong>
              </div>
            </div>
          </div>

          <div class='lav-section__image'>
            <img src='${config.dir}/img/speed-screen.png'>
          </div>
        </div>

        <div class='splide lav-splide lav-speed__splide' role="group">
          <div class="splide__track">
            <ul class="splide__list">
              <li class="splide__slide lav-slide" data-target='4x'>
                <div class='lav-slide__icon lav-slide__icon-text' style='color: #F3659F;'>4x</div>
                <div class='lav-slide__footer'>
                    <div class='lav-slide__caption'>
                      Faster boot: <br/>Mac wakes up earlier
                    </div>
                    <div class='lav-slide__open'>
                      <img src='${config.dir}/img/plus.png' />
                    </div>
                </div>
              </li>

              <li class="splide__slide lav-slide" data-target='ram'>
                <div class='lav-slide__icon lav-slide__icon-text'>2.5x</div>
                <div class='lav-slide__footer'>
                    <div class='lav-slide__caption'>
                      More responsive apps: Thanks to the RAM you’ve freed up
                    </div>
                    <div class='lav-slide__open'>
                      <img src='${config.dir}/img/plus.png' />
                    </div>
                </div>
              </li>

              <li class="splide__slide lav-slide" data-target='boost'>
                <div class='lav-slide__icon'>
                  <img src='${config.dir}/img/slide-boost.png'>
                </div>
                <div class='lav-slide__footer'>
                    <div class='lav-slide__caption'>
                      Boost Mac with<br/>maintenance scripts
                    </div>
                    <div class='lav-slide__open'>
                      <img src='${config.dir}/img/plus.png' />
                    </div>
                </div>
              </li>

              <li class="splide__slide lav-slide" data-target='agents'>
                <div class='lav-slide__icon'>
                  <img src='${config.dir}/img/slide-rocket.png'>
                </div>
                <div class='lav-slide__footer'>
                    <div class='lav-slide__caption'>
                      Remove hidden launch<br/>agents
                    </div>
                    <div class='lav-slide__open'>
                      <img src='${config.dir}/img/plus.png' />
                    </div>
                </div>
              </li>

              <li class="splide__slide lav-slide" data-target='switch'>
                <div class='lav-slide__icon'>
                  <img src='${config.dir}/img/slide-switch.png'>
                </div>
                <div class='lav-slide__footer'>
                    <div class='lav-slide__caption'>
                      Switch off memory-eating<br/>apps
                    </div>
                    <div class='lav-slide__open'>
                      <img src='${config.dir}/img/plus.png' />
                    </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="lav-section lav-clean">
      <div class='container lav-section__container'>
        <div class='lav-section__inner'>
          <div class='lav-section__info'>
            <div class='lav-section__title'>
            Clean up your Mac with one&nbsp;click
            </div>

            <div class='lav-section__descr'>
              CleanMyMac X detects gigabytes of junk in all corners of your Mac. It goes after unnecessary files that mess up the drive causing glitches and spinning wheels. The app will clean up macOS system folders, iTunes, Photos, Mail, browsers, and even large old files. As a result, your Mac gets way more responsive. And it boots faster too.
            </div>

            <div class='lav-section__accent'>
              ${getSvg('server')}
              Get 5x more space
            </div>

            <button class='lav-section__button'>Clean up your Mac now</button>
            <div class='lav-section__caption'>start your 7 days free trial</div>

            <div class='lav-section__feedback'>
              <div class='lav-section__feedback-head'>
                <div class='lav-section__feedback-author'>John Voorhees</div>
                <img class='lav-section__feedback-logo' src="${
                  config.dir
                }/img/macStories.svg" >
                <div class='lav-section__feedback-stars'>
                  ${getSvg('stars')}
                </div>
              </div>

              <div class='lav-section__feedback-text'>
                <strong>“</strong>&nbsp;If you’ve found yourself struggling with a nearly full Mac, check out CleanMyMac X. The app has been an excellent way to recover space with minimal effort for many years.&nbsp;<strong>”</strong>
              </div>
            </div>
          </div>

          <div class='lav-section__image'>
            <img src='${config.dir}/img/clean-screen.png'>
          </div>
        </div>

        <div class='splide lav-splide lav-speed__splide' role="group">
          <div class="splide__track">
            <ul class="splide__list">
              <li class="splide__slide lav-slide" data-target='5x'>
                <div class='lav-slide__icon lav-slide__icon-text' style='color:#359FF5'>5x</div>
                <div class='lav-slide__footer'>
                    <div class='lav-slide__caption'>
                      Gigabytes of free<br/>space
                    </div>
                    <div class='lav-slide__open'>
                      <img src='${config.dir}/img/plus.png' />
                    </div>
                </div>
              </li>

              <li class="splide__slide lav-slide" data-target='system'>
                <div class='lav-slide__icon'>
                  <img src='${config.dir}/img/slide-mouse.png'>
                </div>
                <div class='lav-slide__footer'>
                    <div class='lav-slide__caption'>
                      Clean system<br/>Junk
                    </div>
                    <div class='lav-slide__open'>
                      <img src='${config.dir}/img/plus.png' />
                    </div>
                </div>
              </li>

              <li class="splide__slide lav-slide" data-target='old'>
                <div class='lav-slide__icon'>
                  <img src='${config.dir}/img/slide-clean.png'>
                </div>
                <div class='lav-slide__footer'>
                    <div class='lav-slide__caption'>
                      Clean Large<br/>&&nbsp;Old Files
                    </div>
                    <div class='lav-slide__open'>
                      <img src='${config.dir}/img/plus.png' />
                    </div>
                </div>
              </li>

              <li class="splide__slide lav-slide" data-target='photo'>
                <div class='lav-slide__icon'>
                  <img src='${config.dir}/img/slide-junk.png'>
                </div>
                <div class='lav-slide__footer'>
                    <div class='lav-slide__caption'>
                      Clean Photo Junk 
                    </div>
                    <div class='lav-slide__open'>
                      <img src='${config.dir}/img/plus.png' />
                    </div>
                </div>
              </li>

              <li class="splide__slide lav-slide" data-target='uninstaller'>
                <div class='lav-slide__icon'>
                  <img src='${config.dir}/img/slide-reset.png'>
                </div>
                <div class='lav-slide__footer'>
                    <div class='lav-slide__caption'>
                      Remove and reset apps
                    </div>
                    <div class='lav-slide__open'>
                      <img src='${config.dir}/img/plus.png' />
                    </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="lav-section lav-malware">
      <div class='container lav-section__container'>
        <div class='lav-section__inner'>
          <div class='lav-section__info'>
            <div class='lav-section__title'>
              Remove malware from Mac
            </div>

            <div class='lav-section__descr'>
              Are there viruses on Mac? Not on yours, if you try Mac cleaning with CleanMyMac X. Its anti-malware technology Moonlock Engine, crafted by MacPaw team, fights off malware, adware, ransomware, and all other “wares” specific to macOS. When an issue is found, the app deletes it right away. We update our malware database regularly, so CleanMyMac X’s Protection module always has your back.
            </div>

            <div class='lav-section__accent'>
              ${getSvg('shield')}
              Your effective malware protection
            </div>

            <button class='lav-section__button'>Protect your Mac now</button>
            <div class='lav-section__caption'>start your 7 days free trial</div>
          </div>

          <div class='lav-section__image'>
            <img src='${config.dir}/img/malware-screen.png'>
          </div>
        </div>
      </div>
    </section>
  `

    $('.video').insertAdjacentHTML('afterend', markup)

    $$('.lav-section__button').forEach((el) => {
      el.addEventListener('click', () => {
        if (el.closest('.lav-speed')) {
          pushDataLayer(
            'exp_homepage_get_more_cta',
            'Speed up your Mac now',
            'Button',
            'Get more done on a faster Mac'
          )
        }

        if (el.closest('.lav-clean')) {
          pushDataLayer(
            'exp_homepage_clean_cta',
            'Clean up your Mac now',
            'Button',
            'Clean up your Mac with one click'
          )
        }

        if (el.closest('.lav-malware')) {
          pushDataLayer(
            'exp_homepage_remove_cta',
            'Protect your Mac now',
            'Button',
            'Remove malvare from Mac'
          )
        }

        window.open($('.cta-wrapper .download').href, '_blank')
      })
    })

    await waitFor(() => typeof Splide === 'function', false, { ms: 25 })

    const splideOptions = {
      perPage: 3,
      // perMove: 1,
      pagination: false,
      gap: 30
    }

    $$('.lav-splide').forEach((el) => {
      const splide = new Splide(el, splideOptions).mount()

      splide.on('click', function (slide) {
        $$('.lav-benefit__info.active').forEach((el) => {
          el.classList.remove('active')
        })

        $('.lav-benefit__' + slide.slide.dataset.target)?.classList.add(
          'active'
        )

        const title = $('.lav-benefit__' + slide.slide.dataset.target)
          ?.querySelector('.lav-benefit__title')
          ?.textContent.trim()

        pushDataLayer(
          'exp_homepage_popup_card_view',
          'View on screen',
          'Element',
          'Popup with additional info after card: ' + title
        )

        if (el.closest('.lav-speed')) {
          pushDataLayer(
            'exp_homepage_get_car_card',
            slide.slide
              .querySelector('.lav-slide__caption')
              ?.textContent?.trim() || '-',
            'Card',
            'Get more done on a faster Mac. Carousel'
          )
        }

        if (el.closest('.lav-clean')) {
          pushDataLayer(
            'exp_homepage_clean_car_card',
            slide.slide
              .querySelector('.lav-slide__caption')
              ?.textContent?.trim() || '-',
            'Card',
            'Clean up your Mac with one click. Carousel'
          )
        }

        splide.go(slide.index)
        Modal.open('.lav-benefit')
      })
    })
  }

  function addGenius() {
    const markup = /*html*/ `
    <section class="lav-genius">
      <div class='container lav-genius__container'>
        <div class="lav-genius__title">Meet your personal Mac genius</div>
        <div class="lav-genius__descr">CleanMyMac X replaces dozens of optimization tools for Mac. It can be anything you tell it to be: a macOS cleaner, a performance monitor, a malware remover, and well, a life saver.</div>
        <div class="lav-genius__control">
          <button class="lav-genius__button" data-modal='.lav-video'>See How It Works ${getSvg(
            'play'
          )}</button>
        </div>
      </div>
    </section>
  `

    $('.video').insertAdjacentHTML('beforebegin', markup)

    $('.lav-genius__button').addEventListener('click', () => {
      pushDataLayer(
        'exp_homepage_meet_cta',
        'See How It Works',
        'Button',
        'Meet your personal Mac genius'
      )

      pushDataLayer(
        'exp_homepage_popup_hiw_view',
        'View on screen',
        'Element',
        'Popup How it works'
      )
    })
  }

  function addAwards() {
    const markup = /*html*/ `
    <section class="lav-awards">
      <div class='container lav-awards__container'>
        <div class="lav-awards__list">
          <div class="lav-award">
            <div class="lav-award__logo">
              <img src="${config.dir}/img/logo-apple.png">
            </div>
            <div class="lav-award__caption">
              Apple Notarized: Safe, Secure, and Stable
            </div>
          </div>

          <div class="lav-award">
            <div class="lav-award__logo">
              <img src="${config.dir}/img/logo-anniversary.png">
            </div>
            <div class="lav-award__caption">
              16 years of expertise in developing Mac software
            </div>
          </div>

          <div class="lav-award">
            <div class="lav-award__logo">
              <img src="${config.dir}/img/logo-trustpilot.png">
            </div>
            <div class="lav-award__caption">
              Outstanding reputation with a 4.4 TrustScore
            </div>
          </div>

          <div class="lav-award">
            <div class="lav-award__logo">
              <img src="${config.dir}/img/logo-million.png">
            </div>
            <div class="lav-award__caption">
              29 millions downloads on the planet
            </div>
          </div>
          
          <div class="lav-award">
            <div class="lav-award__logo">
              <img src="${config.dir}/img/logo-design.png">
            </div>
            <div class="lav-award__caption">
              iF Design Award Winner
            </div>
          </div>
        </div>
      </div>
    </section>
  `

    $('.video').insertAdjacentHTML('beforebegin', markup)
  }

  function addGuaranteeCaption() {
    $('.topper .cta-wrapper').insertAdjacentHTML(
      'afterend',
      /*html*/ `
    <div class="lav-guarantee">
      <div class="lav-guarantee__icon">
        ${getSvg('guarantee30')}
      </div>
      <div class="lav-guarantee__caption">- day money back guarantee</div>
    </div>
  `
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
      if ($(condition)) {
        if (typeof cb === 'function') cb($(condition))
        return
      }

      return new Promise((resolve) => {
        const observer = new MutationObserver((mutations, observer) => {
          if ($(condition)) {
            if (typeof cb === 'function') cb($(condition))
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
    const el = typeof observeEl === 'string' ? $(observeEl) : observeEl

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
    const el = typeof observeEl === 'string' ? $(observeEl) : observeEl

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
      threshold: 0.5,
      ...customConfig,
      timer: null
    }
    initIntersection(
      el,
      ({ isIntersecting, target }, observer) => {
        // console.log(target, isIntersecting);
        if (isIntersecting) {
          // if (isElementInViewport(target)) {
          cb()
          observer.disconnect()
          // }
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
    const el = typeof selector === 'string' ? $(selector) : selector

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
  function $(selector, context = document) {
    return context.querySelector(selector)
  }
  function $$(selector, context = document, toSimpleArray = false) {
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
  if (!config.debug) {
    waitFor(
      () => typeof hj == 'function',
      () => {
        hj('event', 'exp_homepage')
      }
    )
  }

  // Svg objects
  function getSvg(name) {
    const svgObj = {
      close: `
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M17 7.00024L7.0003 16.9999" stroke="#666666" stroke-width="1.6"/>
        <path d="M17 16.9998L7.0003 7.00006" stroke="#666666" stroke-width="1.6"/>
      </svg>
    `,
      shield: `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <g clip-path="url(#clip0_169_2151)">
        <path d="M5.69434 7.78679C5.78921 8.92177 6.00709 10.4765 6.50007 12.1089C7.54707 15.5756 9.39666 18.0406 12.0003 19.4414C14.604 18.0406 16.4536 15.5756 17.5006 12.1089C17.9935 10.4766 18.2114 8.92187 18.3063 7.78679L12.0003 4.63379L5.69434 7.78679Z" fill="#F1795E"/>
        <path d="M22.5869 5.60893C22.5738 5.35609 22.4256 5.12982 22.1992 5.01662L12.3144 0.0742148C12.1165 -0.0247383 11.8835 -0.0247383 11.6856 0.0742148L1.80079 5.01662C1.57433 5.12982 1.42621 5.35609 1.41308 5.60893C1.40558 5.75284 1.24302 9.17931 2.41026 13.1574C3.10091 15.5112 4.11679 17.567 5.42966 19.2678C7.08412 21.411 9.21055 22.9877 11.7499 23.954C11.8305 23.9846 11.9152 24 12 24C12.0848 24 12.1695 23.9846 12.2501 23.954C14.7894 22.9877 16.9159 21.411 18.5703 19.2678C19.8832 17.567 20.8991 15.5112 21.5897 13.1574C22.757 9.17931 22.5944 5.75284 22.5869 5.60893ZM12.3116 20.8627C12.2134 20.9113 12.1067 20.9356 12 20.9356C11.8933 20.9356 11.7865 20.9113 11.6884 20.8627C8.55749 19.3147 6.35887 16.5062 5.15362 12.5154C4.5508 10.5193 4.33316 8.63842 4.25676 7.41207C4.23918 7.13045 4.39171 6.86565 4.64408 6.73946L11.6856 3.21873C11.8836 3.11982 12.1165 3.11978 12.3145 3.21873L19.356 6.73946C19.6084 6.8656 19.7609 7.1305 19.7434 7.41212C19.6669 8.63856 19.4493 10.5195 18.8465 12.5154C17.6411 16.5062 15.4425 19.3147 12.3116 20.8627Z" fill="#F1795E"/>
      </g>
      <defs>
        <clipPath id="clip0_169_2151">
          <rect width="24" height="24" fill="white"/>
        </clipPath>
      </defs>
    </svg>
    `,
      server: `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M20 20V18C20 16.895 19.105 16 18 16H6C4.895 16 4 16.895 4 18V20C4 21.105 4.895 22 6 22H18C19.105 22 20 21.105 20 20ZM8 18H7C6.448 18 6 18.448 6 19C6 19.552 6.448 20 7 20H8C8.552 20 9 19.552 9 19C9 18.448 8.552 18 8 18ZM20 13V11C20 9.895 19.105 9 18 9H6C4.895 9 4 9.895 4 11V13C4 14.105 4.895 15 6 15H18C19.105 15 20 14.105 20 13ZM8 11H7C6.448 11 6 11.448 6 12C6 12.552 6.448 13 7 13H8C8.552 13 9 12.552 9 12C9 11.448 8.552 11 8 11ZM20 6V4C20 2.895 19.105 2 18 2H6C4.895 2 4 2.895 4 4V6C4 7.105 4.895 8 6 8H18C19.105 8 20 7.105 20 6ZM8 4H7C6.448 4 6 4.448 6 5C6 5.552 6.448 6 7 6H8C8.552 6 9 5.552 9 5C9 4.448 8.552 4 8 4Z" fill="#B96FB4"/>
    </svg>
    `,
      stars: `
    <svg xmlns="http://www.w3.org/2000/svg" width="103" height="16" viewBox="0 0 103 16" fill="none">
      <path d="M9.10129 6.53561L7.32203 0.677979L5.54278 6.53561H0L4.52502 9.76462L2.80434 15.322L7.32203 11.888L11.8471 15.322L10.1264 9.76462L14.6441 6.53561H9.10129Z" fill="#FFC803"/>
      <path d="M29.7458 6.53561L27.9666 0.677979L26.1873 6.53561H20.6445L25.1695 9.76462L23.4489 15.322L27.9666 11.888L32.4916 15.322L30.7709 9.76462L35.2886 6.53561H29.7458Z" fill="#FFC803"/>
      <path d="M51.527 6.53561L49.5254 0.677979L47.5237 6.53561H41.2881L46.3787 9.76462L44.443 15.322L49.5254 11.888L54.616 15.322L52.6803 9.76462L57.7627 6.53561H51.527Z" fill="#FFC803"/>
      <path d="M74.0016 6.53561L72 0.677979L69.9983 6.53561H63.7627L68.8533 9.76462L66.9176 15.322L72 11.888L77.0906 15.322L75.1549 9.76462L80.2373 6.53561H74.0016Z" fill="#FFC803"/>
      <path d="M96.4763 6.53561L94.4746 0.677979L92.4729 6.53561H86.2373L91.3279 9.76462L89.3922 15.322L94.4746 11.888L99.5652 15.322L97.6295 9.76462L102.712 6.53561H96.4763Z" fill="#FFC803"/>
    </svg>
    `,
      rocket: `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <g clip-path="url(#clip0_169_2023)">
          <path d="M23.5078 0.00294914C18.8228 -0.0810509 13.4798 2.36795 10.0978 6.16695C6.86576 6.22795 3.71877 7.55295 1.40177 9.86995C1.26677 10.0029 1.21877 10.2019 1.27777 10.3819C1.33777 10.5629 1.49377 10.6939 1.68177 10.7209L5.53577 11.2729L5.05977 11.8059C4.88277 12.0039 4.89177 12.3049 5.07977 12.4929L11.5068 18.9199C11.6038 19.0169 11.7318 19.0659 11.8608 19.0659C11.9798 19.0659 12.0988 19.0239 12.1938 18.9389L12.7268 18.4629L13.2788 22.3169C13.3058 22.5049 13.4538 22.6429 13.6328 22.7029C13.6788 22.7179 13.7268 22.7249 13.7758 22.7249C13.9178 22.7249 14.0628 22.6629 14.1628 22.5639C16.4478 20.2789 17.7728 17.1319 17.8338 13.8999C21.6368 10.5109 24.1058 5.16995 23.9968 0.490949C23.9898 0.224949 23.7748 0.00994914 23.5078 0.00294914ZM18.8998 8.63495C18.4128 9.12195 17.7728 9.36595 17.1318 9.36595C16.4908 9.36595 15.8508 9.12195 15.3638 8.63495C14.3898 7.65995 14.3898 6.07395 15.3638 5.09895C16.3388 4.12395 17.9248 4.12395 18.8998 5.09895C19.8748 6.07395 19.8748 7.66095 18.8998 8.63495Z" fill="#F3659F"/>
          <path d="M2.72406 16.905C1.65406 17.975 0.185057 22.809 0.0210574 23.356C-0.0319426 23.532 0.0170574 23.723 0.146057 23.853C0.242057 23.949 0.369057 24 0.500057 24C0.548057 24 0.596057 23.993 0.644057 23.979C1.19106 23.815 6.02506 22.346 7.09506 21.276C8.30006 20.071 8.30006 18.11 7.09506 16.905C5.88906 15.7 3.92906 15.701 2.72406 16.905Z" fill="#F3659F"/>
        </g>
        <defs>
          <clipPath id="clip0_169_2023">
            <rect width="24" height="24" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    `,
      play: `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M8 14.5L14 10L8 5.5V14.5ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" fill="black"/>
      </svg>
    `,
      guarantee30: `
      <svg xmlns="http://www.w3.org/2000/svg" width="34" height="30" viewBox="0 0 34 30" fill="none">
        <path d="M12.9689 19.3413C12.2871 19.3413 11.6191 19.2446 10.9649 19.0511C10.32 18.8484 9.77638 18.572 9.33413 18.2219L10.1081 16.826C10.4582 17.1117 10.882 17.342 11.3795 17.517C11.8771 17.6921 12.3976 17.7796 12.9412 17.7796C13.5862 17.7796 14.0883 17.6506 14.4476 17.3927C14.807 17.1255 14.9866 16.7661 14.9866 16.3147C14.9866 15.8724 14.8208 15.5223 14.4891 15.2643C14.1574 15.0064 13.623 14.8774 12.886 14.8774H12.0015V13.6474L14.7655 10.3581L15.0005 11.0353H9.80402V9.52891H16.3963V10.7313L13.6322 14.0205L12.6925 13.4677H13.2315C14.42 13.4677 15.3091 13.7349 15.8988 14.2693C16.4977 14.7944 16.7971 15.4716 16.7971 16.3009C16.7971 16.8445 16.6589 17.3466 16.3825 17.8073C16.1061 18.268 15.6823 18.6411 15.111 18.9267C14.549 19.2031 13.8349 19.3413 12.9689 19.3413ZM22.0078 19.3413C21.2431 19.3413 20.5521 19.1478 19.9347 18.7609C19.3266 18.3739 18.8475 17.8119 18.4974 17.0748C18.1473 16.3285 17.9723 15.4256 17.9723 14.366C17.9723 13.3065 18.1473 12.4081 18.4974 11.6711C18.8475 10.9248 19.3266 10.3581 19.9347 9.97116C20.5521 9.58419 21.2431 9.3907 22.0078 9.3907C22.7817 9.3907 23.4727 9.58419 24.0808 9.97116C24.6889 10.3581 25.168 10.9248 25.5181 11.6711C25.8775 12.4081 26.0571 13.3065 26.0571 14.366C26.0571 15.4256 25.8775 16.3285 25.5181 17.0748C25.168 17.8119 24.6889 18.3739 24.0808 18.7609C23.4727 19.1478 22.7817 19.3413 22.0078 19.3413ZM22.0078 17.7796C22.4593 17.7796 22.8508 17.6599 23.1825 17.4203C23.5142 17.1715 23.7722 16.7938 23.9565 16.287C24.1499 15.7803 24.2467 15.14 24.2467 14.366C24.2467 13.5829 24.1499 12.9425 23.9565 12.445C23.7722 11.9382 23.5142 11.5651 23.1825 11.3255C22.8508 11.0768 22.4593 10.9524 22.0078 10.9524C21.5748 10.9524 21.1878 11.0768 20.8469 11.3255C20.5152 11.5651 20.2526 11.9382 20.0591 12.445C19.8749 12.9425 19.7827 13.5829 19.7827 14.366C19.7827 15.14 19.8749 15.7803 20.0591 16.287C20.2526 16.7938 20.5152 17.1715 20.8469 17.4203C21.1878 17.6599 21.5748 17.7796 22.0078 17.7796Z" fill="#EE5898"/>
        <path d="M27.47 4.9549C24.8805 2.40882 21.3824 0.98684 17.7414 1.00014C15.9092 0.991891 14.0937 1.3482 12.4019 2.04811C10.7101 2.74801 9.17604 3.77739 7.89003 5.07568C7.8224 5.14392 7.76905 5.22482 7.73306 5.31369C7.69706 5.40257 7.67915 5.49767 7.68034 5.59348C7.68154 5.68929 7.70182 5.78392 7.74002 5.87188C7.77822 5.95984 7.83357 6.03939 7.90288 6.10594C8.0452 6.23951 8.23412 6.31284 8.42977 6.31045C8.62541 6.30806 8.81247 6.23015 8.95145 6.09315C10.0994 4.93554 11.4683 4.01779 12.9777 3.3938C14.4872 2.76981 16.1068 2.45218 17.7414 2.45955C24.5128 2.45386 30.0185 7.85666 30.0185 14.5C30.0185 21.1434 24.5128 26.5462 17.7414 26.5462C10.97 26.5462 5.46432 21.1434 5.46432 14.5V14.348L6.68717 15.5473C6.82713 15.6839 7.01538 15.7605 7.21146 15.7605C7.40753 15.7605 7.59579 15.6839 7.73574 15.5473C7.80451 15.4803 7.85913 15.4002 7.89642 15.3119C7.93372 15.2236 7.95292 15.1287 7.95292 15.0329C7.95292 14.9371 7.93372 14.8423 7.89642 14.7539C7.85913 14.6656 7.80451 14.5856 7.73574 14.5185L5.25432 12.0772C5.11436 11.9405 4.92611 11.864 4.73003 11.864C4.53395 11.864 4.3457 11.9405 4.20575 12.0772L1.71718 14.5185C1.64842 14.5856 1.59379 14.6656 1.5565 14.7539C1.51921 14.8423 1.5 14.9371 1.5 15.0329C1.5 15.1287 1.51921 15.2236 1.5565 15.3119C1.59379 15.4002 1.64842 15.4803 1.71718 15.5473C2.00718 15.8315 2.47718 15.8315 2.76718 15.5473L3.98861 14.348V14.5C3.9862 16.2781 4.34166 18.0388 5.03404 19.6781C5.72641 21.3174 6.74169 22.8023 8.02003 24.0452C10.6096 26.5912 14.1076 28.0132 17.7486 27.9999C21.42 27.9999 24.8771 26.5945 27.4757 24.0452C28.753 22.8019 29.7671 21.3168 30.4583 19.6774C31.1494 18.0381 31.5036 16.2777 31.5 14.5C31.5026 12.722 31.1473 10.9615 30.4552 9.32213C29.7631 7.68282 28.7481 6.1979 27.47 4.9549Z" fill="#EE5898"/>
      </svg>
    `
    }

    return svgObj[name]
  }
})()
