;(function () {
  console.debug('*** Experiment started ***')

  // Config for Experiment
  const config = {
    // dir: 'http://127.0.0.1:5500/oakwell/denver',
    dir: 'https://flopsi69.github.io/crs/oakwell/denver',
    clarity: ['set', 'denver_hp', 'variant_1'],
    debug: false
  }

  // const orig = console.log
  // console.log = function (...args) {
  //   orig.apply(console, ['Debug:', ...args])
  // }

  // Styles for Experiment
  const styles = /* css */ `
    .b-main.pricingMain, .pricing-tabs {
      display: none;
    }
    .b-goog-review.price-review {
      border-radius: 0;
      padding-top: 60px;
    }
    header .box .logo svg:last-child {
      display: none;
    }
    header.fixed {
      background-color: #0d5947;
    }
    .lav-wrap {
      background: #0C5947;
    }
    .lav-hero {
      padding-top: 100px;
      padding-left: 16px;
      padding-right: 16px;
      padding-bottom: 56px;
    }
    .lav-hero__video {
      position: relative;
      display: flex;
      justify-content: center;
      overflow: hidden;
      border-radius: 0px 0px 46px 46px;
      line-height: 0;
      margin: 0 -16px;
    }
    .lav-hero__video video {
      border-radius: 0px 0px 46px 46px;
      height: 300px;
    }
    .lav-hero__title {
      color: #DDF2D0;
      text-align: center;
      font-family: quincycf,sans-serif;
      font-size: 34px;
      font-style: normal;
      font-weight: 400;
      line-height: 38px;
      margin-top: 24px;
    }
    .lav-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50px;
      background: #FFF;
      height: 54px;
      color: #0C5947;
      text-align: center;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 17.6px;
      max-width: 264px;
    }
    .lav-hero__btn {
      margin: 32px auto 0;
      text-transform: capitalize;
    }

    .lav-rate {
      border-radius: 46px;
      border: 1px solid rgba(255, 255, 255, 0.24);
      background: rgba(255, 255, 255, 0.05);
      text-align: center;
      margin-top: 32px;
    }
    .lav-rate__head {
      padding: 24px 14px 14px;
    }
    .lav-rate__score {
      line-height: 0;
      margin-bottom: 14px;
    }
    .lav-rate__score img {
      max-width: 154px;
      margin: auto;
    }
    .lav-rate__title {
      color: #FFF;
      text-align: center;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: 5.76px;
      text-transform: uppercase;
    }
    .lav-rate__caption {
      color: #DDF2D0;
      text-align: center;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
    }
    .lav-rate__body {
      border-top: 1px solid rgba(255, 255, 255, 0.24);
      border-bottom: 1px solid rgba(255, 255, 255, 0.24);
      display: flex;
    }
    .lav-rate__source {
      flex: 1;
      padding: 24px;
    }
    .lav-rate__source + .lav-rate__source {
      border-left: 1px solid rgba(255, 255, 255, 0.24);
    }
    .lav-rate__source-logo {
      line-height: 0;
    }
    .lav-rate__source-logo img {
      width: 26px;
      margin: auto;
    }
    .lav-rate__source-score {
      color: #FFA818;
      text-align: center;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 20px;
      margin-top: 12px;
    }
    .lav-rate__source-caption {
      color: #DDF2D0;
      text-align: center;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      margin-top: 2px;
    }
    .lav-rate__footer {
      padding: 14px 12px 24px;
    }
    .lav-rate__footer-caption {
      margin-top: 4px;
    }
    .lav-rate__list {
      margin-top: 14px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 8px;
    }
    .lav-rate__item {
      display: flex;
      align-items: center;
      gap: 6px;
      background: #0C5947;
      border-radius: 1000px;
      color: #FFF;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 140%;
      padding: 6px 8px 6px 6px;
    }
    .lav-rate__item img {
      width: 16px;
      flex-shrink: 0;
    }

    .lav-hero__info {
      display: grid;
      gap: 32px;
      margin-top: 32px;
    }
    .lav-hero__subtitle {
      color: #FFF;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: 5.76px;
      text-transform: uppercase;
    }
    .lav-hero__info-text {
      color: #FFF;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
    }
    .lav-hero__info-text span {
      color: #DDF2D0;
      font-weight: 800;
    }

    .lav-tickers {
      overflow: visible;
      gap: 8px;
    }
    
    .lav-tickers_hide {
      display: none!important;
    }
    
    .lav-tickers .marquee {
      gap: 8px;
    }
    
    .lav-tickers:not(.marquee-block) .marquee {
      display: grid;
      gap: 8px;
    }
    
    .lav-tickers-item {
      position: relative;
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 6px;
      padding-right: 12px;
      border-radius: 32px;
      border: 1px solid rgba(255, 255, 255, 0.06);
      background: rgba(255, 255, 255, 0.06);
    }
    
    .lav-tickers-item:before {
      content: '';
      position: absolute;
      right: 12px;
      top: -7px;
      width: 18px;
      height: 14px;
      background: url('${config.dir}/img/quote.svg') center no-repeat;
      background-size: contain;
    }
    
    .lav-tickers-item__image {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 0;
    }
    
    .lav-tickers-item__title {
      color: #A6BFB9;
      font-size: 9px;
      font-style: normal;
      font-weight: 700;
      line-height: 12px;
      letter-spacing: 0.63px;
      text-transform: uppercase;
    }
    
    .lav-tickers-item__caption {
      color: #DDF2D0;
      font-size: 10px;
      font-style: normal;
      font-weight: 700;
      line-height: 16px;
      letter-spacing: 0.7px;
      text-transform: uppercase;
      margin-top: 2px;
    }

    .lav-packages {
      border-radius: 32px;
      background: #FFF;
      padding: 32px 16px 16px;
    }
    .lav-packages__title {
      color: #000;
      font-family: quincycf,sans-serif;
      font-size: 40px;
      font-style: normal;
      font-weight: 400;
      line-height: 40.8px;
    }
    .lav-nav {
      display: flex;
      gap: 8px;
      margin: 18px -16px;
      padding: 0 16px;
      overflow: auto;
    }
    .lav-nav__item {
      display: flex;
      align-items: center;
      border-radius: 1111px;
      border: 1px solid rgba(185, 209, 177, 0.50);
      padding: 8px 12px;
      color: #0C5947;
      text-align: center;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px;
      white-space: nowrap;
      transition: .3s;
    }
    .lav-nav__item.active {
      background: #0C5947;
      color: #fff;
    }
    .lav-nav__item svg path {
      transition: .3s;
    }
    .lav-nav__item.active svg path {
      fill: #fff;
    }
    .lav-nav__item:first-child {
      padding-left: 16px;
      padding-right: 16px;
    }
    .lav-nav__item span {
      white-space: nowrap;
      margin-left: 6px;
    }

    .lav-packages__list {
      display: grid;
      gap: 12px;
    }
    .lav-package {
      border-radius: 24px;
      overflow: hidden;
      background: #1A4B65;
      color: #fff;
    }
    .lav-package__slider {
      background: lightgray;
    }
    .lav-package__slider img {
      height: 200px;
      min-width: 100%;
      object-fit: cover;
    }
    .lav-package__prev, .lav-package__next {
      position: absolute;
      z-index: 1;
      top: 50%;
      transform: translateY(-50%);
      line-height: 0;
    }
    .lav-package__prev {
      left: 4px;
    }
    .lav-package__next {
      right: 4px;
    }
    .lav-package__pagination {
      position: absolute;
      z-index: 1;
      left: 50%;
      transform: translateX(-50%);
      bottom: 9px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 12px;
    }
    .lav-package__pagination span {
      display: block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #fff;
      border: 1px solid #fff;
      transition: .3s;
    }
    .lav-package__pagination span.swiper-pagination-bullet-active {
      background-color: #0C5947;
    }
    .lav-package__info {
      padding: 16px 24px 14px;
    }
    .lav-package__ideal {
      display: flex;
      align-items: center;
      color: #FFF;
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
    }
    .lav-package__ideal span {
      margin-left: 8px;
    }
    .lav-package__title {
      color: #FFF;
      font-family: quincycf,sans-serif;
      font-size: 30px;
      font-style: normal;
      font-weight: 400;
      line-height: 36px;
      margin-top: 8px;
    }
    .lav-package__descr {
      margin-top: 12px;
      color: rgba(255, 255, 255, 0.90);
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
      display: -webkit-box;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .lav-package__footer {
      padding: 24px;
      border-top: 1px solid rgba(0, 0, 0, 0.10);
      border-top: 1px solid rgba(255, 255, 255, 0.05);
      background: linear-gradient(90deg, rgba(221, 242, 208, 0.00) 0%, rgba(221, 242, 208, 0.06) 56.5%);
      text-align: center;
    }
    .lav-package__price {
      font-family: quincycf,sans-serif;
      font-size: 26px;
      font-style: normal;
      font-weight: 400;
      line-height: 32px;
      letter-spacing: 1.04px;
      text-transform: uppercase;
    }
    .lav-package__caption {
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 140%;
      margin-top: 2px;
    }
    .lav-package__btn {
      margin-top: 16px;
      max-width: 100%;
    }

    .lav-events  {
      margin-top: 32px;
    }
    .lav-events .lav-nav__item {
      padding: 8px 16px;
    }
    .lav-events .lav-package__caption {
      margin-top: 16px;
    }
    .lav-events .lav-package__footer {
      padding-top: 0;
    }
    .lav-package__soon {
      padding: 3px 8px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      border-radius: 0px 0px 4px 4px;
      background: rgba(255, 255, 255, 0.16);      
      color: #72F328;
      font-family: Lato,Helvetica,sans-serif;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 22px;
      letter-spacing: 0.56px;
    }

    .lav-private {
      border-radius: 32px;
      background: #FFF;
      padding: 32px 16px 16px;
      margin-top: 32px;
    }
    .lav-private__title {
      color: #000;
      font-family: quincycf,sans-serif;
      font-size: 40px;
      font-weight: 400;
      line-height: 40.8px;
    }
    .lav-private__descr {
      color: #000;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 22.4px;
      margin-top: 18px;
    }
    .lav-private__form {
      margin-top: 18px;
    }
    .lav-private__form-title {
      color: #000;
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 140%;
      border-bottom: 1px solid rgba(185, 209, 177, 0.50);
      margin-bottom: 12px;
      padding-bottom: 12px;
    }
    #private_party__form textarea {
      height: 44px!important;
    }
    .lav-sticky {
      position: fixed;
      left: 50px;
      right: 50px;
      bottom: -80px;
      transition: .3s;
    }
    .lav-sticky.active {
      opacity: 1;
      bottom: 31px;
    }
    .lav-sticky__btn {
      max-width: 100%;
    }

`

  const stylesEl = document.createElement('style')
  stylesEl.classList.add('exp-styles')
  stylesEl.innerHTML = styles

  // *** Logic *** //
  // preInit()
  initExp()

  // function preInit() {
  //   const pushState = history.pushState
  //   history.pushState = function () {
  //     pushState.apply(history, arguments)
  //     window.dispatchEvent(new Event('pushstate'))
  //   }

  //   window.addEventListener('pushstate', () => {
  //     initExp()
  //   })
  // }

  async function initExp() {
    await waitFor(() => document.head && document.body, false, { ms: 20 })

    if (!_$('.exp-styles')) {
      document.head.appendChild(stylesEl)
    }

    await waitFor(
      () => !document.body.style.opacity || document.body.style.opacity === '1',
      false,
      { ms: 20 }
    )

    console.debug('** InitExp **')

    checkSpecialEvents()

    if (location.href.includes('/spa-packages-denver') && !_$('.lav-hero')) {
      waitFor('.js-first-section', () => {
        _$('.js-first-section').insertAdjacentHTML(
          'beforebegin',
          /* html */ `<div class='lav-wrap'></div>`
        )

        addMainInfo()
        addPackages()
        addSpecialEvents()
        addPrivateParty()
        addSticky()

        waitFor('.modal-notification .close', () => {
          _$('.modal-notification .close').click()
        })
      })
    } else if (
      location.href.includes('/book-now') &&
      location.search.includes('preset')
    ) {
      waitFor('.service-item-new', () => {
        _$$('.custom-modal-package .modal-close').forEach((el) => {
          el.addEventListener('click', function () {
            pushDataLayer(
              'exp_denver_click_07',
              `${
                el
                  .closest('.custom-modal-package')
                  .querySelector('.cont .title').innerText
              } - close`,
              'Button',
              'PDP'
            )
          })
        })

        _$$('.fix-mod-nav .select__package').forEach((el) => {
          el.addEventListener('click', function () {
            pushDataLayer(
              'exp_denver_click_08',
              `${
                el
                  .closest('.custom-modal-package')
                  .querySelector('.cont .title').innerText
              } - select package`,
              'Button',
              'PDP'
            )
          })
        })

        const params = new URLSearchParams(location.search)
        const preset = params.get('preset')

        waitFor(
          () => _$('.steps').style.opacity === '1',
          () => {
            _$(
              `.services-list-new .service-item-new.${preset} .modal-trigger`
            ).click()
          }
        )
      })
    }
  }

  function checkSpecialEvents() {
    const params = new URLSearchParams(location.search)
    const isScroll = params.get('exp')

    if (isScroll !== 'scroll') return

    if (location.href.includes('https://oakwell.com/mothers-day')) {
      waitFor('.locations__on_select_pac', () => {
        setTimeout(() => {
          _$('.locations__on_select_pac').scrollIntoView({ behavior: 'smooth' })
        }, 500)
      })
    } else if (location.href.includes('https://oakwell.com/fathers-day')) {
      waitFor('.frame-box', () => {
        setTimeout(() => {
          _$('.frame-box').scrollIntoView({ behavior: 'smooth' })
        }, 500)
      })
    } else if (location.href.includes('https://oakwell.com/new-years-eve/')) {
      waitFor('.lav-old-booking', () => {
        setTimeout(() => {
          _$('.lav-old-booking').scrollIntoView({ behavior: 'smooth' })
        }, 500)
      })
    } else if (location.href.includes('https://oakwell.com/valentines-day/')) {
      waitFor('.frame-box', () => {
        setTimeout(() => {
          _$('.frame-box').scrollIntoView({ behavior: 'smooth' })
        }, 500)
      })
    }
  }

  function addSticky() {
    const markup = /* html */ `
      <div class="lav-sticky">
        <div class="lav-btn lav-sticky__btn">See Spa Packages</div>
      </div>
    `

    _$('.pricingPage').insertAdjacentHTML('beforeend', markup)

    // const observer = new IntersectionObserver(
    //   (entries, observer) => {
    //     entries.forEach((entry) => {
    //       if (entry.isIntersecting) {
    //         _$('.lav-sticky').classList.remove('active')
    //       } else {
    //         _$('.lav-sticky').classList.add('active')
    //       }
    //     })
    //   },
    //   {
    //     root: null,
    //     threshold: 0.3
    //   }
    // )

    const elHero = _$('.lav-hero')
    const elBtn = _$('.lav-hero__btn')

    window.onscroll = function () {
      const rectHero = elHero.getBoundingClientRect()
      const rectBtn = elBtn.getBoundingClientRect()

      if (rectHero.bottom <= window.innerHeight || rectBtn.bottom > 10) {
        _$('.lav-sticky').classList.remove('active')
      } else {
        _$('.lav-sticky').classList.add('active')
      }
    }

    // observer.observe(_$('.lav-hero__btn'))
    // observer.observe(_$('.lav-packages__title'))

    _$('.lav-sticky__btn').addEventListener('click', function (e) {
      e.preventDefault()
      pushDataLayer(
        'exp_denver_click_02',
        'See Spa Packages',
        'Button',
        'Sticky button'
      )
      _$('.lav-packages').scrollIntoView({ behavior: 'smooth' })
    })
  }

  function addMainInfo() {
    const markup = /* html */ `
      <div class="lav-hero">
        <div class="lav-hero__video">
          <video src="https://oakwell.com/wp-content/uploads/2023/12/Beer-Spa-Hero-Video-1080p-Web_6mb.mp4" poster="https://oakwell.com/wp-content/uploads/2023/06/b-main-img@2x-scaled.jpg" autoplay playsinline="" muted loop></video>
        </div>

        <div class="lav-hero__title">
          Unique & <br/>
          Rejuvenating Day </br>
          Spa Packages in Denver at Oakwell Beer Spa
        </div>

        <div class="lav-btn lav-hero__btn">See Spa Packages</div>

        <div class="lav-rate">
          <div class="lav-rate__head">
            <div class="lav-rate__score">
              <img src="${config.dir}/img/rate-new.svg" />
            </div>
            <div class="lav-rate__title">GUESTS CHOICE</div>
            <div class="lav-rate__caption">
              Based on 3,000+ guest reviews<br/> across platforms
            </div>
          </div>
          <div class="lav-rate__body">
            <div class="lav-rate__source">
              <div class="lav-rate__source-logo">
                <img src="${config.dir}/img/logo-google.svg" />
              </div>
              <div class="lav-rate__source-score">Excellent</div>
              <div class="lav-rate__source-caption">
                on Google <br/> 2500+ reviews
              </div>
            </div>
            <div class="lav-rate__source">
              <div class="lav-rate__source-logo">
                <img src="${config.dir}/img/logo-trip.svg" />
              </div>
              <div class="lav-rate__source-score">Excellent</div>
              <div class="lav-rate__source-caption">
                on Tripadvisor <br/> 240+ reviews
              </div>
            </div>
          </div>
          <div class="lav-rate__footer">
            <div class="lav-rate__title">Guest top Mentions</div>
            <div class="lav-rate__caption lav-rate__footer-caption">Guest top Mentions</div>
            <div class="lav-rate__list">
              <div class="lav-rate__item">
                <img src="${config.dir}/img/check-green.png" />
                Relaxation at its finest
              </div>
              <div class="lav-rate__item">
                <img src="${config.dir}/img/check-green.png" />
                Outstanding service
              </div>
              <div class="lav-rate__item">
                <img src="${config.dir}/img/check-green.png" />
                Exceptional Experience
              </div>
              <div class="lav-rate__item">
                <img src="${config.dir}/img/check-green.png" />
                Perfect for couples
              </div>
              <div class="lav-rate__item">
                <img src="${config.dir}/img/check-green.png" />
                Outstanding Staff
              </div>
              <div class="lav-rate__item">
                <img src="${config.dir}/img/check-green.png" />
                Infrared sauna
              </div>
              <div class="lav-rate__item">
                <img src="${config.dir}/img/check-green.png" />
                Craft Beverages Selection
              </div>
              <div class="lav-rate__item">
                <img src="${config.dir}/img/check-green.png" />
                Zero Gravity Massage
              </div>
              <div class="lav-rate__item">
                <img src="${config.dir}/img/check-green.png" />
                Large Hydrotherapy Tub
              </div>
            </div>
          </div>
        </div>

        <div class="lav-hero__info">
          <div class="lav-hero__subtitle">
            The Best Spa Packages in Denver
          </div>

          <div class='lav-hero__info-text'>Relax differently at Oakwell Beer Spa, whereyou can indulge in beer-inspired spa services.</div>
          
          <div class='lav-hero__info-text'><strong>We combine two incredible things,</strong> beer and
          relaxation, to give you an unforgettable spa
          experience packed with wellness benefits.</div>

          <div class='lav-hero__info-text'>Unlike a traditional spa experience, we believe the best spa services include a tasty beer or craft beverage with unique treatments.</div>

          <div class='lav-hero__info-text'>At Oakwell Beer Spa, you can enjoy Denver spa packages that include a beneficial beer bath, a NASA-inspired full-body massage, and an infrared sauna.</div>

          <div class="lav-tickers lav-tickers_mob ff-lato marquee-block marquee-js marquee-js-booking">
            <div class="marquee">
              <div class='lav-tickers-item'>
                <div class='lav-tickers-item__image'>
                  <img src='${config.dir}/img/logo-time.png' alt='Time ticker'>
                </div>
                <div class='lav-tickers-item__info'>
                  <div class='lav-tickers-item__title'>Time’s</div>
                  <div class='lav-tickers-item__caption'>world’s greatest places</div>
                </div>
              </div>
              <div class='lav-tickers-item'>
                <div class='lav-tickers-item__image'>
                  <img src='${config.dir}/img/logo-entr.png' alt='Enterpreneur ticker'>
                </div>
                <div class='lav-tickers-item__info'>
                  <div class='lav-tickers-item__title'>Enterpreneur</div>
                  <div class='lav-tickers-item__caption'>best mom & pop shop in usa</div>
                </div>
              </div>
              <div class='lav-tickers-item'>
                <div class='lav-tickers-item__image'>
                  <img src='${config.dir}/img/logo-5280.png' alt='5280 ticker'>
                </div>
                <div class='lav-tickers-item__info'>
                  <div class='lav-tickers-item__title'>5280’s</div>
                  <div class='lav-tickers-item__caption'>best spa</div>
                </div>
              </div>
            </div>
          </div>

          <div class="lav-hero__info-text">
            Oakwell Beer Spa is a unique, <span>award-winning day spa in Denver</span>. We feature locally sourced craft beers alongside beer-infused spa treatments. No standard spa services here! And if you aren’t really into beer, that’s okay. We have various delicious beverages for you to enjoy.
          </div>
        </div>
      </div>
    `

    _$('.lav-wrap').insertAdjacentHTML('beforeend', markup)

    _$('.lav-hero__btn').addEventListener('click', function (e) {
      e.preventDefault()
      pushDataLayer(
        'exp_denver_click_01',
        'See Spa Packages',
        'Button',
        'First screen'
      )
      _$('.lav-packages').scrollIntoView({ behavior: 'smooth' })
    })

    waitFor(
      () => typeof SiteAnimation !== 'undefined',
      () => {
        initMarquee()
      }
    )

    function initMarquee() {
      marqueeBooking = new (class extends SiteAnimation {
        constructor() {
          super(),
            (this.time = 40),
            (this.timeSlow = 40),
            (this.timeline = null)
        }
        initMarquee() {
          var e = this.parent.querySelector('.marquee'),
            t = this.parent.offsetWidth,
            a = this.parent,
            s = 4,
            r = 0
          for (
            this.timeline = gsap.timeline({
              repeat: -1
            }),
              a.style.width = (s + 4) * this.sum(e) + 'px';
            r < s;

          )
            this.parent.insertBefore(e.cloneNode(!0), e.prevSibling), r++
          for (r = 0; r < this.parent.querySelectorAll('.marquee').length; r++)
            this.timeline.to(
              this.parent.querySelectorAll('.marquee')[r],
              this.time,
              {
                x: -this.parent.querySelectorAll('.marquee')[r].offsetWidth,
                ease: Linear.easeNone
              },
              '-=this.time'
            )
          window.initLazy()
        }
        sum(e) {
          for (
            var t = 0, a = 0;
            a < e.querySelectorAll('.tickers-item').length;
            a++
          )
            t += e.querySelectorAll('.tickers-item')[a].offsetWidth
          return t
        }
        marqueeSlow() {
          this.timeline.duration(this.timeSlow)
        }
        marqueeNormal() {
          this.timeline.duration(this.time)
        }
        destroySticky() {
          this.parent.removeEventListener('mouseenter', () => {
            this.marqueeSlow()
          }),
            this.parent.removeEventListener('mouseleave', () => {
              this.marqueeNormal()
            })
        }
        init(e) {
          super.init('marqueeBooking'),
            (this.parent = e),
            this.parent &&
              (this.initMarquee(),
              this.parent.addEventListener('mouseenter', () => {
                this.marqueeSlow()
              }),
              this.parent.addEventListener('mouseleave', () => {
                this.marqueeNormal()
              }))
        }
        resize() {
          this.parent
        }
        destroy() {
          var e =
            !!(0 < arguments.length && arguments[0] !== void 0) && arguments[0]
          this.parent && this.destroySticky(), super.destroy(e)
        }
      })()

      const targetEl = _$('.lav-tickers')
      requestAnimationFrame(() => marqueeBooking.init(targetEl))
    }
  }

  function addPackages() {
    const packages = [
      {
        preset: 'green',
        color: '#104C38',
        idealNum: 2,
        ideal: 'Ideal for couples',
        title: "Couple's Retreat",
        descr:
          'This spa package allows you to enjoy your private spa suite Beer Therapy Room with a touch of romance – candles, and rose petals. You can add a ‘Happy Birthday’ or ‘Happy Anniversary’ banner to enhance your experience. The Couple’s Retreat package comes with a selection of artisan chocolate bonbons from a local chocolatier. What better way to spend quality time together than detoxing in an infrared sauna, resting on a relaxation deck, and soaking in a warm bubbly herbal beer bath?',
        price: '$259.00',
        caption: 'For up to 2 adults',
        slider: [
          'https://oakwell.com/wp-content/uploads/2024/09/040-From-the-Hip-Photo-scaled.webp',
          'https://oakwell.com/wp-content/uploads/2024/09/111-From-the-Hip-Photo-1-scaled.webp',
          'https://oakwell.com/wp-content/uploads/2024/09/146-From-the-Hip-Photo-scaled.webp',
          'https://oakwell.com/wp-content/uploads/2024/09/198-From-the-Hip-Photo-scaled.webp',
          'https://oakwell.com/wp-content/uploads/2024/09/207-From-the-Hip-Photo-1-scaled.webp',
          'https://oakwell.com/wp-content/uploads/2024/09/TBS_Tubs_15-3-scaled.webp',
          'https://oakwell.com/wp-content/uploads/2024/08/image-6.webp',
          'https://oakwell.com/wp-content/uploads/2024/08/image-4.webp'
        ]
      },
      {
        preset: 'red',
        color: '#B72828',
        idealNum: 2,
        ideal: 'Ideal for couples',
        title: 'Oakwell Escape',
        descr:
          'With the Oakwell Escape package, you and your date can enjoy a 90-minute spa session in a private spa suite known as the Beer Therapy Room. This tranquil space will be romantically decorated with candles and rose petals. While enjoying your couples spa day, you can also indulge in a gourmet charcuterie board paired with artisan chocolate bonbons.',
        price: '$359.00',
        caption: 'For up to 2 adults',
        slider: [
          'https://oakwell.com/wp-content/uploads/2024/09/IMG_3831-scaled.webp',
          'https://oakwell.com/wp-content/uploads/2024/09/IMG_3836-scaled.webp',
          'https://oakwell.com/wp-content/uploads/2024/09/TBS_Valentines_12-scaled.webp',
          'https://oakwell.com/wp-content/uploads/2024/09/TBS_Valentines_5-scaled.webp',
          'https://oakwell.com/wp-content/uploads/2024/09/118-From-the-Hip-Photo-scaled.webp',
          'https://oakwell.com/wp-content/uploads/2024/09/105-From-the-Hip-Photo-scaled.webp',
          'https://oakwell.com/wp-content/uploads/2024/09/171-From-the-Hip-Photo-scaled.webp',
          'https://oakwell.com/wp-content/uploads/2024/09/017-From-the-Hip-Photo-scaled.webp',
          'https://oakwell.com/wp-content/uploads/2024/09/236-From-the-Hip-Photo-scaled.webp',
          'https://oakwell.com/wp-content/uploads/2024/09/233-From-the-Hip-Photo-scaled.webp',
          'https://oakwell.com/wp-content/uploads/2024/09/155-From-the-Hip-Photo-scaled.webp',
          'https://oakwell.com/wp-content/uploads/2024/09/TBS_Valentines_9-scaled.webp'
        ]
      },
      {
        preset: 'blue',
        color: '#1A4B65',
        idealNum: 1,
        ideal: 'Ideal solo or for friends',
        title: 'Beer Therapy Ritual',
        descr:
          'When you book your Denver spa day at Oakwell, you get access to a private Beer Therapy Room that includes everything you need for rest, relaxation, and other wellness benefits. Our private spa room accommodates up to two people.',
        price: '$199.00',
        caption: 'For up to 2 adults',
        slider: [
          'https://oakwell.com/wp-content/uploads/2023/10/Oakwell-Beer-Spa-Standard-Beer-Therapy-Room-Web-scaled.webp',
          'https://oakwell.com/wp-content/uploads/2023/10/Oakwell-Garage-Party-Double-Room-scaled.webp',
          'https://oakwell.com/wp-content/uploads/2023/10/Oakwell-Beer-Spa-Infrared-Sauna-Web-scaled.webp',
          'https://oakwell.com/wp-content/uploads/2023/10/Cold-Shower-Oakwell-Beer-Spa-Web-scaled.webp',
          'https://oakwell.com/wp-content/uploads/2023/10/TBS_Tubs_18-Web-scaled.webp',
          'https://oakwell.com/wp-content/uploads/2023/09/02-3.webp',
          'https://oakwell.com/wp-content/uploads/2023/10/190-From-the-Hip-Photo-web-scaled.webp',
          'https://oakwell.com/wp-content/uploads/2023/10/TBS_Sauna_Inside-Web-scaled.webp'
        ]
      },
      {
        preset: 'swamp',
        color: '#3B5923',
        idealNum: 4,
        ideal: 'Ideal for Groups',
        title: 'Garage Party',
        descr:
          'Each private spa suite Beer Therapy Room features an infrared sauna, a rain shower, and a relaxation deck to kick back and unwind. But that’s not it! The highlight of your Beer the cedar hydrotherapy tub filled with water infused with a blend of barley, hops, and other beneficial herbs. Soaking in this relaxing and fizzy beer bath off including reduced muscle tension, smoother skin, and decreased muscle and joint pain.',
        price: '$450.00',
        caption: 'For up to 4 adults',
        slider: [
          'https://oakwell.com/wp-content/uploads/2023/10/Garage-Party-Web-3-scaled.webp',
          'https://oakwell.com/wp-content/uploads/2023/10/Garage-Party-Web-2-scaled.webp',
          'https://oakwell.com/wp-content/uploads/2023/10/Garage-Party-Web-scaled.webp',
          'https://oakwell.com/wp-content/uploads/2023/10/Oakwell-Garage-Party-Double-Room-scaled.webp',
          'https://oakwell.com/wp-content/uploads/2023/10/Oakwell-Garage-Party-Robes-scaled.webp',
          'https://oakwell.com/wp-content/uploads/2023/10/Oakwell-Garage-Party-Cheering-scaled.webp',
          'https://oakwell.com/wp-content/uploads/2023/10/Oakwell-Garage-Party-scaled.webp'
        ]
      }
    ]

    const markup = /* html */ `
      <div class="lav-packages">
        <div class="lav-packages__title">Spa Packages</div>

        <div class="lav-nav">
          <div class="lav-nav__item active" data-target='all'>All (4)</div>
          <div class="lav-nav__item" data-target='2'>
            ${getSvg('personGreen').repeat(2)} <span>Couples (2)</span>
          </div>
          <div class="lav-nav__item" data-target='1'>
            ${getSvg('personGreen')}
            <span>Solo (1)</span>
          </div>
          <div class="lav-nav__item" data-target='4'>
            ${getSvg('personGreen').repeat(4)} 
            <span>Groups (1)</span>
          </div>
        </div>

        <div class='lav-packages__list'></div>
      </div>
    `

    _$('.lav-wrap').insertAdjacentHTML('beforeend', markup)

    packages.forEach((item) => {
      _$('.lav-packages__list').insertAdjacentHTML('beforeend', fillList(item))
    })

    _$$('.lav-packages:not(.lav-events) .lav-nav__item').forEach((item) => {
      item.addEventListener('click', function () {
        pushDataLayer(
          'exp_denver_click_03',
          item.innerText,
          'Filter',
          'Packages'
        )
        _$(
          '.lav-packages:not(.lav-events) .lav-nav__item.active'
        )?.classList.remove('active')
        this.classList.add('active')

        const target = this.dataset.target

        _$$('.lav-packages:not(.lav-events) .lav-package').forEach((item) => {
          if (target === 'all') {
            item.style.display = 'block'
          } else {
            item.style.display = item.dataset.type === target ? 'block' : 'none'
          }
        })
      })
    })

    _$$('.lav-package__btn').forEach((item) => {
      item.addEventListener('click', function (e) {
        e.preventDefault
        pushDataLayer(
          'exp_denver_click_04',
          `${
            item.closest('.lav-package').querySelector('.lav-package__title')
              .innerText
          } - see details`,
          'Button',
          'Packages'
        )

        location.href = `https://oakwell.com/book-now/?skip-location=Downtown%20Denver&preset=${item.dataset.preset}`
      })
    })

    waitFor(
      () => typeof Swiper !== 'undefined',
      () => {
        _$$('.lav-package .swiper').forEach((el) => {
          new Swiper(el, {
            slidesPerView: 1,
            spaceBetween: 0,
            pagination: {
              el: el.querySelector('.lav-package__pagination'),
              clickable: true
            },
            navigation: {
              nextEl: el.querySelector('.lav-package__next'),
              prevEl: el.querySelector('.lav-package__prev')
            }
          })
        })
      }
    )

    function fillList(item) {
      const markup = /* html */ `
        <div class='lav-package' data-type='${
          item.idealNum
        }' style='background-color: ${item.color}'>
          <div class='lav-package__slider'>
            <div class='swiper'>
              <div class="swiper-wrapper">
                ${item.slider
                  .map((item) => {
                    return `
                    <div class="swiper-slide">
                      <img src='${item}' />
                    </div>
                    
                    `
                  })
                  .join('')}
              </div>

              <!-- If we need pagination -->
              <div class="lav-package__pagination"></div>

              <!-- If we need navigation buttons -->
              <div class="lav-package__prev">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                  <path d="M15.0884 20.88C15.2784 20.88 15.4684 20.81 15.6184 20.66C15.9084 20.37 15.9084 19.89 15.6184 19.6L9.09844 13.08C8.61844 12.6 8.61844 11.82 9.09844 11.34L15.6184 4.81998C15.9084 4.52998 15.9084 4.04998 15.6184 3.75998C15.3284 3.46998 14.8484 3.46998 14.5584 3.75998L8.03844 10.28C7.52844 10.79 7.23844 11.48 7.23844 12.21C7.23844 12.94 7.51844 13.63 8.03844 14.14L14.5584 20.66C14.7084 20.8 14.8984 20.88 15.0884 20.88Z" fill="#FBF6F1"/>
                </svg>
              </div>
              <div class="lav-package__next">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                  <path d="M8.91156 20.88C8.72156 20.88 8.53156 20.81 8.38156 20.66C8.09156 20.37 8.09156 19.89 8.38156 19.6L14.9016 13.08C15.3816 12.6 15.3816 11.82 14.9016 11.34L8.38156 4.81998C8.09156 4.52998 8.09156 4.04998 8.38156 3.75998C8.67156 3.46998 9.15156 3.46998 9.44156 3.75998L15.9616 10.28C16.4716 10.79 16.7616 11.48 16.7616 12.21C16.7616 12.94 16.4816 13.63 15.9616 14.14L9.44156 20.66C9.29156 20.8 9.10156 20.88 8.91156 20.88Z" fill="#FBF6F1"/>
                </svg>
              </div>
            </div>
          </div>

          <div class='lav-package__info'>
            <div class='lav-package__ideal'>
              ${getSvg('person').repeat(item.idealNum)} <span>${
        item.ideal
      }</span>
            </div>
            <div class='lav-package__title'>${item.title}</div>
            <div class='lav-package__descr'>${item.descr}</div>
          </div>
          <div class='lav-package__footer'>
            <div class='lav-package__price'>${item.price}</div>
            <div class='lav-package__caption'>${item.caption}</div>
            <div class='lav-btn lav-package__btn' data-preset='${
              item.preset
            }'>See details</div>
          </div>
        </div>
      `

      return markup
    }
  }

  function addSpecialEvents() {
    const packages = [
      {
        key: 'mother',
        color: '#F37F64',
        textColor: '#F37F64',
        soonColor: '#A82301',
        title: "Mother's Day 2025",
        url: 'https://oakwell.com/mothers-day',
        descr:
          "Moms deserve to be celebrated in a special way. Oakwell Beer Spa offers a wellness experience unlike any other. We offer a unique experience to celebrate Mother's Day in Denver. Enjoy a one-of-a-kind experience and spend time together in a romantic and peaceful setting. Come indulge in relaxing spa treatments, refreshing beverages, and delicious snacks.",
        caption: 'For up to 4 adults',
        slider: [
          'https://oakwell.com/wp-content/uploads/2024/04/mothers-day-denver-featured.webp',
          'https://oakwell.com/wp-content/uploads/2024/05/155-From-the-Hip-Photo-2-scaled.webp',
          'https://oakwell.com/wp-content/uploads/2024/05/071-From-the-Hip-Photo-scaled.webp',
          'https://oakwell.com/wp-content/uploads/2024/03/Mothers-Day-2024-scaled.webp',
          'https://oakwell.com/wp-content/uploads/2024/03/image-13.webp',
          'https://oakwell.com/wp-content/uploads/2024/02/far-infrared-sauna-featured.webp',
          'https://oakwell.com/wp-content/uploads/2024/01/Sparkles.webp'
        ]
      },
      {
        key: 'father',
        color: '#81A3ED',
        textColor: '#3774FA',
        soonColor: '#114DC9',
        title: "Father's Day 2025",
        url: 'https://oakwell.com/fathers-day',
        descr:
          "Moms deserve to be celebrated in a special way. Oakwell Beer Spa offers a wellness experience unlike any other. We offer a unique experience to celebrate Mother's Day in Denver. Enjoy a one-of-a-kind experience and spend time together in a romantic and peaceful setting. Come indulge in relaxing spa treatments, refreshing beverages, and delicious snacks.",
        caption: 'For up to 4 adults',
        slider: [
          'https://oakwell.com/wp-content/uploads/2024/05/image-21.webp',
          'https://oakwell.com/wp-content/uploads/2024/05/096-From-the-Hip-Photo-scaled.webp',
          'https://oakwell.com/wp-content/uploads/2024/05/155-From-the-Hip-Photo-2-scaled.webp',
          'https://oakwell.com/wp-content/uploads/2021/11/Sauna.webp',
          'https://oakwell.com/wp-content/uploads/2023/10/Zero-Gravity-Massage-Oakwell-scaled.webp',
          'https://oakwell.com/wp-content/uploads/2023/10/233-From-the-Hip-Photo-scaled.webp',
          'https://oakwell.com/wp-content/uploads/2023/10/Cosy-Taproom-Web-scaled.webp',
          'https://oakwell.com/wp-content/uploads/2023/10/TBS_Tubs_15-Web-scaled.webp',
          'https://oakwell.com/wp-content/uploads/2024/05/100-From-the-Hip-Photo-1-scaled.webp',
          'https://oakwell.com/wp-content/uploads/2024/05/071-From-the-Hip-Photo-scaled.webp'
        ]
      },
      {
        key: 'year',
        color: '#DBB250',
        textColor: '#BB8040',
        soonColor: '#886209',
        title: "New Year's Eve 2026",
        url: 'https://oakwell.com/new-years-eve/',
        descr:
          'Experience a relaxing and fun New Years in Denver. We’re bringing in the new year with luxury spa treatments, a fun photo booth, refreshing drinks, and delicious snacks.',
        caption: 'For up to 4 adults',
        slider: [
          'https://oakwell.com/wp-content/uploads/2023/10/NYE4012.webp',
          'https://oakwell.com/wp-content/uploads/2023/10/NYE4123.webp',
          'https://oakwell.com/wp-content/uploads/2023/10/NYE3314.webp',
          'https://oakwell.com/wp-content/uploads/2023/10/NYE3315.webp',
          'https://oakwell.com/wp-content/uploads/2023/10/NYE3327.webp',
          'https://oakwell.com/wp-content/uploads/2023/10/NYE3971.webp',
          'https://oakwell.com/wp-content/uploads/2023/10/NYE4206.webp',
          'https://oakwell.com/wp-content/uploads/2023/10/NYE3945.webp'
        ]
      },
      {
        key: 'valentine',
        color: '#D92C1F',
        textColor: '#D93023',
        soonColor: '#620800',
        title: "Valentine's Day 2026",
        url: 'https://oakwell.com/valentines-day/',
        descr:
          "Relax and celebrate Valentine's and Galentine's Day differently in a romantic setting. This Valentine’s and Galentine's Day, give your love a celebration they’ll never forget with our Valentine’s Day Package—the best Valentine’s and Galentine's Day experience in town. Step into a world of romance, fun and relaxation, where every detail is designed to delight and bring you closer. Your journey begins in a private spa suite, beautifully adorned with flickering candles and scattered rose petals, creating an intimate ambiance like no other. Together, you’ll detox in the soothing warmth of an infrared sauna and luxuriate in a cedar hydrotherapy tub infused with therapeutic herbs for the ultimate rejuvenation.",
        caption: 'For up to 2 adults',
        slider: [
          'https://oakwell.com/wp-content/uploads/2023/10/Oakwell-Date-Night-Web-scaled.webp',
          'https://oakwell.com/wp-content/uploads/2023/10/Oakwell-Date-Night-2-Web-scaled.webp',
          'https://oakwell.com/wp-content/uploads/2023/10/Oakwell-Date-Night-3-Web-scaled.webp',
          'https://oakwell.com/wp-content/uploads/2023/10/Oakwell-Date-Night-4-Web-scaled.webp',
          'https://oakwell.com/wp-content/uploads/2023/10/Oakwell-Beer-Spa-Valentines-Day-Web-1-scaled.webp',
          'https://oakwell.com/wp-content/uploads/2023/10/Oakwell-Beer-Spa-Valentines-Day-Web-scaled.webp',
          'https://oakwell.com/wp-content/uploads/2023/10/NYE3315.webp'
        ]
      }
    ]

    const markup = /* html */ `
      <div class="lav-packages lav-events">
        <div class="lav-packages__title">Special Events</div>

        <div class="lav-nav">
          <div class="lav-nav__item active" data-target='mother'>Mother's Day 2025</div>
          <div class="lav-nav__item" data-target='father'>Father's Day 2025</div>
          <div class="lav-nav__item" data-target='year'>New Year's Eve 2026</div>
          <div class="lav-nav__item" data-target='valentine'>Valentine's Day 2026</div>
        </div>

        <div class='lav-packages__list'></div>
      </div>
    `

    _$('.lav-wrap').insertAdjacentHTML('beforeend', markup)

    packages.forEach((item) => {
      _$('.lav-events .lav-packages__list').insertAdjacentHTML(
        'beforeend',
        fillList(item)
      )
    })

    _$$('.lav-events .lav-package').forEach((item, index) => {
      if (index !== 0) {
        item.style.display = 'none'
      }
    })

    _$$('.lav-events .lav-nav__item').forEach((item) => {
      item.addEventListener('click', function () {
        pushDataLayer(
          'exp_denver_click_05',
          item.innerText,
          'Filter',
          'Special Events'
        )
        _$('.lav-events .lav-nav__item.active')?.classList.remove('active')
        this.classList.add('active')

        const target = this.dataset.target

        _$$('.lav-events .lav-package').forEach((item) => {
          if (target === 'all') {
            item.style.display = 'block'
          } else {
            item.style.display = item.dataset.type === target ? 'block' : 'none'
          }
        })
      })
    })

    _$$('.lav-events .lav-package__btn').forEach((item, index) => {
      item.addEventListener('click', function () {
        pushDataLayer(
          'exp_denver_click_06',
          `${
            item.closest('.lav-package').querySelector('.lav-package__title')
              .innerText
          } - book now`,
          'Button',
          'Special Events'
        )

        if (item.dataset.url.length) {
          location.href = item.dataset.url + `?exp=scroll`
        } else {
          const targetEl = _$(
            '.tabsContent__item[aria-labelledly="spa-events"]'
          )

          _$(
            `#pr${index} .buttons-group__item .link-btn.border`,
            targetEl
          ).setAttribute('data-router-disabled', 'true')

          _$(
            `#pr${index} .buttons-group__item .link-btn.border`,
            targetEl
          ).click()
        }
      })
    })

    waitFor(
      () => typeof Swiper !== 'undefined',
      () => {
        _$$('.lav-events .lav-package .swiper').forEach((el) => {
          new Swiper(el, {
            slidesPerView: 1,
            spaceBetween: 0,
            pagination: {
              el: el.querySelector('.lav-package__pagination'),
              clickable: true
            },
            navigation: {
              nextEl: el.querySelector('.lav-package__next'),
              prevEl: el.querySelector('.lav-package__prev')
            }
          })
        })
      }
    )

    function fillList(item) {
      const markup = /* html */ `
        <div class='lav-package' data-type='${
          item.key
        }' style='background-color: ${item.color}'>
          <div class='lav-package__slider'>
            <div class='swiper'>
              <div class="swiper-wrapper">
                ${item.slider
                  .map((item) => {
                    return `
                    <div class="swiper-slide">
                      <img src='${item}' />
                    </div>
                    
                    `
                  })
                  .join('')}
              </div>

              <!-- If we need pagination -->
              <div class="lav-package__pagination"></div>

              <!-- If we need navigation buttons -->
              <div class="lav-package__prev">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                  <path d="M15.0884 20.88C15.2784 20.88 15.4684 20.81 15.6184 20.66C15.9084 20.37 15.9084 19.89 15.6184 19.6L9.09844 13.08C8.61844 12.6 8.61844 11.82 9.09844 11.34L15.6184 4.81998C15.9084 4.52998 15.9084 4.04998 15.6184 3.75998C15.3284 3.46998 14.8484 3.46998 14.5584 3.75998L8.03844 10.28C7.52844 10.79 7.23844 11.48 7.23844 12.21C7.23844 12.94 7.51844 13.63 8.03844 14.14L14.5584 20.66C14.7084 20.8 14.8984 20.88 15.0884 20.88Z" fill="#FBF6F1"/>
                </svg>
              </div>
              <div class="lav-package__next">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                  <path d="M8.91156 20.88C8.72156 20.88 8.53156 20.81 8.38156 20.66C8.09156 20.37 8.09156 19.89 8.38156 19.6L14.9016 13.08C15.3816 12.6 15.3816 11.82 14.9016 11.34L8.38156 4.81998C8.09156 4.52998 8.09156 4.04998 8.38156 3.75998C8.67156 3.46998 9.15156 3.46998 9.44156 3.75998L15.9616 10.28C16.4716 10.79 16.7616 11.48 16.7616 12.21C16.7616 12.94 16.4816 13.63 15.9616 14.14L9.44156 20.66C9.29156 20.8 9.10156 20.88 8.91156 20.88Z" fill="#FBF6F1"/>
                </svg>
              </div>
            </div>
          </div>

          <div class='lav-package__info'>
            <div class='lav-package__title'>${item.title}</div>
            <div class='lav-package__descr'>${item.descr}</div>
          </div>
          <div class='lav-package__footer'>
            <div class='lav-package__soon' style='color: ${item.soonColor}'>
              ${getSvg('soon', item.soonColor)} 
              Filling up fast
            </div>
            <div class='lav-package__caption'>${item.caption}</div>
            <div 
              class='lav-btn lav-package__btn'
              data-url='${item.url || ''}'
              style='color: ${item.textColor}'
            >Book Now</div>
          </div>
        </div>
      `

      return markup
    }
  }

  function addPrivateParty() {
    const markup = /* html */ `
      <div class='lav-private'>
        <div class='lav-private__title'>
          Private party
        </div>
        <div class='lav-private__descr'>
          Are you thinking about organizing your spa party at Oakwell Beer Spa? Contact our in-house event planner by emailing us <a href="mailto:hello@oakwell.com">here</a> or fill up the contact form below, so wecan plan the perfect party for you.
        </div>
        <div class='lav-private__form'>
          <div class='lav-private__form-title'>Enter Contact Information</div>
        </div>
      </div>
    `

    _$('.lav-wrap').insertAdjacentHTML('beforeend', markup)

    _$('.lav-private__form').insertAdjacentElement(
      'beforeend',
      _$('#private_party__form')
    )

    visibilityEvent('.lav-private__form', () => {
      pushDataLayer(
        'exp_denver_visibility_01',
        'Contact Us',
        'Visibility',
        'Contact form'
      )
    })

    _$('.lav-private__form button[type="submit"]').addEventListener(
      'click',
      function () {
        pushDataLayer(
          'exp_denver_submit_01',
          'Contact Us',
          'Submit',
          'Contact form'
        )
      }
    )
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
          }, 1000)
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
  function getSvg(name, color) {
    const svgObj = {
      soon: `
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
          <g clip-path="url(#clip0_2147_9020)">
            <path d="M10.5005 11.9433L11.152 12.8192C11.4675 12.5845 11.7655 12.3212 12.0376 12.0365L11.2485 11.2822C11.0187 11.5227 10.767 11.7451 10.5005 11.9433Z" fill="${color}"/>
            <path d="M8.729 12.843L9.05122 13.886C9.42712 13.7698 9.7959 13.6205 10.1472 13.4419L9.65276 12.4688C9.35657 12.6192 9.04578 12.7451 8.729 12.843Z" fill="${color}"/>
            <path d="M11.875 10.5049L12.7796 11.1159C13.0003 10.7891 13.1943 10.4417 13.3563 10.0832L12.3614 9.63379C12.2249 9.9361 12.0612 10.2292 11.875 10.5049Z" fill="${color}"/>
            <path d="M6.46767 6.66432H3.41113V7.75594H7.55929V2.29785H6.46767V6.66432Z" fill="${color}"/>
            <path d="M12.9084 1.47898V3.50054C12.3951 2.68129 11.7154 1.97514 10.9042 1.42479C9.74594 0.638984 8.3912 0.223633 6.98636 0.223633C5.12023 0.223633 3.36582 0.950348 2.04624 2.26988C0.726715 3.58946 0 5.34386 0 7.20999C0 9.07612 0.726715 10.8305 2.04624 12.1501C3.36582 13.4696 5.12023 14.1963 6.98636 14.1963C7.29017 14.1963 7.59598 14.1766 7.89529 14.1377L7.75458 13.0552C7.50176 13.088 7.24333 13.1047 6.98638 13.1047C3.736 13.1047 1.09164 10.4604 1.09164 7.20999C1.09164 3.95961 3.736 1.31525 6.98638 1.31525C9.09614 1.31525 11.0107 2.42803 12.0615 4.20803H10.1793V5.29964H14V1.47898H12.9084Z" fill="${color}"/>
            <path d="M12.8602 7.70117C12.8553 7.75939 12.8495 7.81733 12.843 7.87508L12.8436 7.87511C12.8125 8.15133 12.7622 8.42589 12.6929 8.69337L13.7496 8.96716C13.8482 8.58678 13.9149 8.19454 13.9479 7.80139L13.9471 7.80133C13.95 7.76797 13.9529 7.73464 13.9552 7.70117H12.8602Z" fill="${color}"/>
          </g>
          <defs>
            <clipPath id="clip0_2147_9020">
              <rect width="14" height="14" fill="white" transform="translate(0 0.209961)"/>
            </clipPath>
          </defs>
        </svg>
      `,
      personGreen: `
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
          <g clip-path="url(#clip0_2147_8724)">
            <path d="M5.91423 5.99039C6.70836 5.99039 7.39601 5.70557 7.95787 5.14363C8.51972 4.58177 8.80454 3.8943 8.80454 3.10009C8.80454 2.30614 8.51972 1.61859 7.95778 1.05655C7.39583 0.49478 6.70827 0.209961 5.91423 0.209961C5.12002 0.209961 4.43255 0.49478 3.87069 1.05664C3.30884 1.61849 3.02393 2.30605 3.02393 3.10009C3.02393 3.8943 3.30884 4.58186 3.87079 5.14372C4.43273 5.70548 5.12029 5.99039 5.91423 5.99039Z" fill="#0C5947" fill-opacity="0.7"/>
            <path d="M10.9717 9.43727C10.9555 9.20345 10.9228 8.94838 10.8745 8.67904C10.8258 8.40767 10.7631 8.15114 10.688 7.91668C10.6105 7.67434 10.505 7.43502 10.3746 7.20568C10.2393 6.96765 10.0804 6.76037 9.90203 6.58981C9.71554 6.41138 9.48721 6.26791 9.22317 6.16327C8.96005 6.05917 8.66846 6.00644 8.35654 6.00644C8.23404 6.00644 8.11557 6.0567 7.88678 6.20566C7.74598 6.29748 7.58127 6.40368 7.39744 6.52115C7.24024 6.6213 7.02729 6.71515 6.76426 6.80011C6.50764 6.88314 6.24708 6.92526 5.98991 6.92526C5.73274 6.92526 5.47227 6.88314 5.21538 6.80011C4.95262 6.71524 4.73967 6.6214 4.58266 6.52124C4.40056 6.40488 4.23577 6.29867 4.09285 6.20557C3.86434 6.05661 3.74578 6.00635 3.62328 6.00635C3.31127 6.00635 3.01977 6.05917 2.75674 6.16336C2.49288 6.26782 2.26446 6.41128 2.07779 6.5899C1.89953 6.76056 1.74051 6.96774 1.60537 7.20568C1.4751 7.43502 1.36963 7.67425 1.29199 7.91677C1.21701 8.15124 1.1543 8.40767 1.10559 8.67904C1.05734 8.94802 1.02457 9.20317 1.00836 9.43755C0.992432 9.66716 0.984375 9.90547 0.984375 10.1462C0.984375 10.7726 1.1835 11.2797 1.57617 11.6537C1.96399 12.0227 2.47714 12.2099 3.10116 12.2099H8.87921C9.50323 12.2099 10.0162 12.0228 10.4041 11.6537C10.7969 11.2799 10.996 10.7727 10.996 10.1461C10.9959 9.90428 10.9878 9.66579 10.9717 9.43727Z" fill="#0C5947"/>
          </g>
          <defs>
            <clipPath id="clip0_2147_8724">
              <rect width="12" height="12" fill="white" transform="translate(0 0.209961)"/>
            </clipPath>
          </defs>
        </svg>
      `,
      person: `
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
          <g clip-path="url(#clip0_2147_8784)">
            <path d="M5.91423 5.99039C6.70836 5.99039 7.39601 5.70557 7.95787 5.14363C8.51972 4.58177 8.80454 3.8943 8.80454 3.10009C8.80454 2.30614 8.51972 1.61859 7.95778 1.05655C7.39583 0.49478 6.70827 0.209961 5.91423 0.209961C5.12002 0.209961 4.43255 0.49478 3.87069 1.05664C3.30884 1.61849 3.02393 2.30605 3.02393 3.10009C3.02393 3.8943 3.30884 4.58186 3.87079 5.14372C4.43273 5.70548 5.12029 5.99039 5.91423 5.99039Z" fill="white" fill-opacity="0.7"/>
            <path d="M10.9717 9.43727C10.9555 9.20345 10.9228 8.94838 10.8745 8.67904C10.8258 8.40767 10.7631 8.15114 10.688 7.91668C10.6105 7.67434 10.505 7.43502 10.3746 7.20568C10.2393 6.96765 10.0804 6.76037 9.90203 6.58981C9.71554 6.41138 9.48721 6.26791 9.22317 6.16327C8.96005 6.05917 8.66846 6.00644 8.35654 6.00644C8.23404 6.00644 8.11557 6.0567 7.88678 6.20566C7.74598 6.29748 7.58127 6.40368 7.39744 6.52115C7.24024 6.6213 7.02729 6.71515 6.76426 6.80011C6.50764 6.88314 6.24708 6.92526 5.98991 6.92526C5.73274 6.92526 5.47227 6.88314 5.21538 6.80011C4.95262 6.71524 4.73967 6.6214 4.58266 6.52124C4.40056 6.40488 4.23577 6.29867 4.09285 6.20557C3.86434 6.05661 3.74578 6.00635 3.62328 6.00635C3.31127 6.00635 3.01977 6.05917 2.75674 6.16336C2.49288 6.26782 2.26446 6.41128 2.07779 6.5899C1.89953 6.76056 1.74051 6.96774 1.60537 7.20568C1.4751 7.43502 1.36963 7.67425 1.29199 7.91677C1.21701 8.15124 1.1543 8.40767 1.10559 8.67904C1.05734 8.94802 1.02457 9.20317 1.00836 9.43755C0.992432 9.66716 0.984375 9.90547 0.984375 10.1462C0.984375 10.7726 1.1835 11.2797 1.57617 11.6537C1.96399 12.0227 2.47714 12.2099 3.10116 12.2099H8.87921C9.50323 12.2099 10.0162 12.0228 10.4041 11.6537C10.7969 11.2799 10.996 10.7727 10.996 10.1461C10.9959 9.90428 10.9878 9.66579 10.9717 9.43727Z" fill="white"/>
          </g>
          <defs>
            <clipPath id="clip0_2147_8784">
              <rect width="12" height="12" fill="white" transform="translate(0 0.209961)"/>
            </clipPath>
          </defs>
        </svg>
      `
    }

    return svgObj[name]
  }
})()
