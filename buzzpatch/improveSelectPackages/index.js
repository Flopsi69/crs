;(function () {
  console.debug('*** Experiment started ***')

  // Config for Experiment
  const config = {
    // dir: 'http://127.0.0.1:5500/buzzpatch/improveSelectPackages',
    dir: 'https://flopsi69.github.io/crs/buzzpatch/improveSelectPackages',
    clarity: ['set', 'exp_buzzpatch_6', 'variant_1'],
    debug: false
  }

  // const orig = console.log
  // console.log = function (...args) {
  //   orig.apply(console, ['Debug:', ...args])
  // }

  // Styles for Experiment
  const styles = /* css */ `
  .lav-din {
      font-family: "DINEngschrift LT";
  }
  .lav-free {
    border-top: 1px solid #FFEBF2;
    background: #F9DEE8;
    padding: 9px;
    color: #FF3C81;
    font-size: 18.438px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 108.475% */
    letter-spacing: 0.6px;
    text-transform: uppercase;
    text-align: center;
  }
  #getNow {
    padding: 20px 27px 0!important;
  }
  .package h2 + p {
    font-size: 18px !important;
    margin-top: 8px;
  }
  .lav-kids {
    border-radius: 6px;
    border: 1px solid #D9D9D9;
    background: #FFF;
    padding: 18px 12px 12px;
    margin-top: 20px;
    margin-bottom: 16px;
  }
  .lav-kids__title {
    color: #0C0B0B;
    font-family: "DINEngschrift LT";
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.6px;
    text-transform: uppercase;
    text-align: left;
    padding-bottom: 20px;
    border-bottom: 1px solid #D9D9D9;
    margin-bottom: 33px;
  }
  #getNow .form-group {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-bottom: 0;
  }
  #getNow .lav-kids .js-packs {
    margin: 0;
    max-width: 100%;
  }
  #getNow .lav-kids .js-packs:first-child input[type=radio]+label {
    border-top-left-radius: 0;
  }
  .lav-kids__title span {
    font-size: 18px;
  }
  .bestseller {
    border-bottom-left-radius: 0!important;
    border-bottom-right-radius: 0!important;
  }
  .lav-kids .js-packs input[type=radio]+label {
    padding: 14px 16px 10px!important;
  }
  .lav-kids .js-packs input[type=radio]+label span {
    margin-top: 1px;
  }
  .form .adult-pack--container {
    border-radius: 6px;
    border: 1px solid #D9D9D9;
    background: #FFF;
    max-width: 100%;
  }
  .new-bundle-pack {
    max-width: 100%;
  }
  .adult-pack--container .adult-pack--dropdown-toggle {
    padding: 20px 12px 16px!important;
    color: #0C0B0B;
    font-family: "DINEngschrift LT";
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 83.333% */
    letter-spacing: 0.6px;
    text-transform: uppercase;
  }
  #getNow .adult-pack--container img {
    margin-left: auto!important;
  }
  .adult-pack--dropdown-toggle > .d-flex {
    display: none!important;
  }
  .adult-pack--dropdown-toggle span span {
    font-size: 18px;
  }
  .form .adult-pack--container .adult-pack-content {
    margin-top: 16px;
    padding-bottom: 18px;
  }
  .form .adult-pack-content .adult-pack-btns {
    margin-bottom: 0;
    margin-top: 15px;
    gap: 12px;
  }
  .form .adult-pack-details {
    padding: 14px 16px 10px !important;
  }
  .form .adult-pack-content ul.adult-pack-btns li {
    margin-bottom: 0;
  }
  .form .new-bundle-pack {
    border-radius: 6px;
    border: 1px solid #D9D9D9;
    background: #FFF;
    margin-top: 16px;
    padding: 18px 12px 10px;
  }
  .form .new-bundle-pack .js-packs input[type=radio]+label .pack-title {
    color: #FF3C81;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 18.2px; /* 130% */
    display: inline-block;
    margin-bottom: 4px;
  }
  .form .new-bundle-pack .js-packs input[type=radio]+label {
    border-radius: 0px 4px 4px 4px;
    border: 2px solid #FF3C81;
  }
  .form .new-bundle-pack .bundle-off {
    color: #FFF;
    text-align: center;
    font-family: "DIN Condensed";
    font-size: 13.5px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0.6px;
    margin-top: 0;
    right: initial;
    left: 0;
    border-radius: 3px 3px 0px 0px;
    background: #000;
    transform: translateY(-100%);
    padding: 10px 14px 6px;
  }
  .form .new-bundle-pack .js-packs {
    margin-top: 8px;
  }
  .form .new-bundle-pack h3 {
    color: #100505;
    text-align: center;
    font-family: "DIN Condensed";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px; /* 100% */
    letter-spacing: 0.6px;
    margin: 0;
  }
  .lav-bundle {
    text-align: left;
    color: #0C0B0B;
    font-family: "DINEngschrift LT";
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 83.333% */
    letter-spacing: 0.6px;
    text-transform: uppercase;
    border-bottom: 1px solid #D9D9D9;
    padding-bottom: 20px;
    margin-bottom: 22px;
  }
  .lav-bundle span {
    font-size: 18px;
  }
  .lav-bundle__caption {
    color: #181717;
    display: inline-block;
    font-family: "DIN Condensed"!important;
    font-size: 16px!important;
    font-style: normal;
    font-weight: 400!important;
    line-height: 18px;
    letter-spacing: 0.6px;
    text-transform: uppercase!important;
  }
  .lav-bundle__caption span {
    font-size: 12px!important;
    color: #181717;
    font-family: "DIN Condensed"!important;
    font-style: normal;
    font-weight: 400!important;
    line-height: 18px;
    letter-spacing: 0.6px;
    text-transform: uppercase!important;
  }
  .new-bundle-pack .js-packs input[type=radio]:checked+label .lav-bundle__caption, .new-bundle-pack .js-packs input[type=radio]:checked+label .lav-bundle__caption span {
    color: #fff;
  }
  #getNow .new-bundle-pack .js-packs img {
    margin-right: 5px!important;
  }
  .prices .js-regular span {
    color: #FF3C81;
  }

  .percent-off {
    border-radius: 3px;
    background: #FF3C81;
    padding: 8px 14px 4px;
    color: #FFF;
    text-align: center;
    font-family: "DIN Condensed";
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0.6px;
    margin-right: 10px;
    order: -1;
  }
  .lav-summary {
    text-align: left;
    margin-top: 24px;
  }
  .lav-summary__title {
    color: #0C0B0B;
    font-family: "DINEngschrift LT";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.6px;
    text-transform: uppercase;
  }
  .lav-summary__list {
    margin-top: 12px;
    display: grid;
    gap: 6px;
    padding-bottom: 8px;
    border-bottom: 1px solid #D9D9D9;
    margin-bottom: 18px;
  }
  .lav-summary__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }
  .lav-summary__name {
    color: #0C0B0B;
    font-family: "DINEngschrift LT";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.6px;
    text-transform: uppercase;
    gap: 6px;
    display: flex;
    align-items: center;
  }
  .lav-summary__price {
    color: #181717;
    text-align: right;
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0.6px;
  }
  .lav-summary__coupon * {
    color: #3560D5;
  }
  #getNow .prices .js-total {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0;
    line-height: 1;
  }
  #getNow .prices .js-regular {
    margin-top: 20px;
  }
  .lav-proceed {
    position: fixed;
    z-index: 2;
    left: 0;
    bottom: 0;
    right: 0;
    background: #FFF;
    padding: 12px 25px;
    transition: transform 0.3s ease-in-out;
    transform: translateY(150%);
  }
  .lav-proceed--active .lav-proceed {
    transform: translateY(0);
  }
  .lav-proceed--active #provesrc-widget-area {
    display: none!important;
  }
  .lav-proceed__btn {
    border-radius: 38px;
    border: 2px solid #FF3C81;
    padding: 10px 15px;
    width: 100%;
    text-align: center;
    color: #000;
    text-align: center;
    font-family: "DIN Alternate";
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 184.615% */
    letter-spacing: 0.3px;
    text-transform: uppercase;
  }
  #getNow img.lp-bp--for-kids-sticker, #getNow img.lp-bp--for-kids-sticker + p {
    display: none!important;
  }
  #getNow img {
    max-width: 100%!important;
    margin-bottom: 0!important;
  }
  #getNow > h2+p+p+img {
    display: none;
  }
  .lav-carousel__item {
    line-height: 0;
  }
  .lav-carousel  {}
  .lav-carousel__arrow {
    position: absolute;
    z-index: 2;
    top: 50%;
    transform: translateY(-50%);
  }
  .lav-carousel__arrow--prev {
    left: -19px;
  }
  .lav-carousel__arrow--next {
    right: -19px;
  }
  .fancybox__container {
    z-index: 999999999!important;
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

    updateSelectPackages()
  }

  function updateSelectPackages() {
    const parent = _$('#purchase')

    parent.insertAdjacentHTML(
      'afterbegin',
      /* html */ `
        <div class='lav-free lav-din'>FREE shipping Worldwide</div>
      `
    )

    _$('.form-group').insertAdjacentHTML(
      'beforebegin',
      `<div class="lav-kids">
        <div class='lav-kids__title'>Kids <span>Patches</span></div>
      </div>`
    )
    _$('.lav-kids').insertAdjacentElement('beforeend', _$('.form-group'))

    _$('.adult-pack--dropdown-toggle').insertAdjacentHTML(
      'afterbegin',
      `<span>Adults <span>Patches</span></span>`
    )

    _$('.new-bundle-pack').insertAdjacentHTML(
      'afterbegin',
      `
       <div class='lav-bundle'>KIDS + ADULTS <span>Patches</span></div>
      `
    )

    const bundleEl = _$(
      '.form .new-bundle-pack .js-packs input[type=radio]+label .pack-label'
    )
    const tooltipEl = _$('.pack-price-each')

    bundleEl.innerHTML = bundleEl.innerHTML.replace(
      '3 Packs + 40 Mosquito',
      '<span class="lav-bundle__caption">Kids Patches 3 packs <span>x60</span></span>'
    )
    bundleEl.innerHTML = bundleEl.innerHTML.replace(
      'Patches For Adults',
      '<span class="lav-bundle__caption">Adults Patches 1 pack <span>x40</span></span>'
    )

    bundleEl.querySelector('.pack-price-each').remove()
    bundleEl.insertAdjacentElement('beforeend', tooltipEl)

    _$('.prices .js-regular').innerHTML = _$(
      '.prices .js-regular'
    ).innerHTML.replace(', It’s Free!', '<span> — It’s Free!</span>')

    _$('#getNow>.days[src*="//www.natpat.com/cdn/shop"]').src =
      config.dir + '/img/trustpilot.png'

    _$('#purchase').insertAdjacentHTML(
      'afterbegin',
      /* html */ `
      <div class='lav-proceed'>
        <div class='lav-proceed__btn'>
          PROCEED TO order SUMMARY
        </div>
      </div>
      `
    )

    visibilityEvent('.lav-proceed', () => {
      pushDataLayer(
        'exp_buzz_v6_click_01',
        'Proceed to order summary',
        'view',
        'Select package'
      )
    })

    _$('.lav-proceed__btn').addEventListener('click', (e) => {
      pushDataLayer(
        'exp_buzz_v6_view_02',
        'Proceed to order summary',
        'click',
        'Select package'
      )
      _$('.lav-summary').scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      })
    })

    window.addEventListener('scroll', function () {
      const offsetTopKids =
        _$('.lav-kids').getBoundingClientRect().top - window.outerHeight + 80
      const offsetBtn =
        _$('.package .js-heading .js-btn.btn-primary').getBoundingClientRect()
          .top - window.outerHeight

      if (offsetTopKids < 0 && offsetBtn > 0) {
        document.body.classList.add('lav-proceed--active')
      } else {
        document.body.classList.remove('lav-proceed--active')
      }
    })

    waitFor(() => typeof jQuery !== 'undefined', addCarousel)
    function addCarousel() {
      const images = [
        'https://www.natpat.com/cdn/shop/files/BP_Free_Delivery.png?v=6708414757152350596',
        'https://www.natpat.com/cdn/shop/files/BP_Free_Delivery.png?v=6708414757152350596',
        'https://www.natpat.com/cdn/shop/files/BP_Free_Delivery.png?v=6708414757152350596',
        'https://www.natpat.com/cdn/shop/files/BP_Free_Delivery.png?v=6708414757152350596',
        'https://www.natpat.com/cdn/shop/files/BP_Free_Delivery.png?v=6708414757152350596'
      ]

      const carouselEl = document.createElement('div')
      carouselEl.classList.add('lav-carousel')
      images.forEach((img) => {
        const itemEl = document.createElement('div')
        itemEl.classList.add('lav-carousel__item')

        const linkEl = document.createElement('a')
        linkEl.classList.add('lav-carousel__link')
        linkEl.href = img
        linkEl.setAttribute('data-fancybox', 'gallery')

        const imgEl = document.createElement('img')
        imgEl.src = img

        linkEl.appendChild(imgEl)
        itemEl.appendChild(linkEl)
        carouselEl.appendChild(itemEl)
      })

      _$('.package .form').insertAdjacentElement('beforebegin', carouselEl)

      $('.lav-carousel').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: `
        <div class='lav-carousel__arrow lav-carousel__arrow--prev'>
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="21" viewBox="0 0 13 21" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2082 1.77426C11.3013 1.86715 11.3752 1.9775 11.4256 2.09899C11.476 2.22048 11.502 2.35072 11.502 2.48226C11.502 2.61379 11.476 2.74403 11.4256 2.86552C11.3752 2.98701 11.3013 3.09737 11.2082 3.19026L3.91417 10.4823L11.2082 17.7743C11.3959 17.962 11.5014 18.2167 11.5014 18.4823C11.5014 18.7478 11.3959 19.0025 11.2082 19.1903C11.0204 19.378 10.7657 19.4835 10.5002 19.4835C10.2346 19.4835 9.97994 19.378 9.79217 19.1903L1.79217 11.1903C1.69904 11.0974 1.62515 10.987 1.57474 10.8655C1.52433 10.744 1.49838 10.6138 1.49838 10.4823C1.49838 10.3507 1.52433 10.2205 1.57474 10.099C1.62515 9.9775 1.69904 9.86715 1.79217 9.77426L9.79217 1.77426C9.88506 1.68113 9.99541 1.60725 10.1169 1.55683C10.2384 1.50642 10.3686 1.48047 10.5002 1.48047C10.6317 1.48047 10.7619 1.50642 10.8834 1.55683C11.0049 1.60725 11.1153 1.68113 11.2082 1.77426Z" fill="#121212" fill-opacity="0.75"/>
          </svg>
        </div>
        `,
        nextArrow: `
        <div class='lav-carousel__arrow lav-carousel__arrow--next'>
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="21" viewBox="0 0 13 21" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.79183 1.77426C1.69871 1.86715 1.62482 1.9775 1.57441 2.09899C1.524 2.22048 1.49805 2.35072 1.49805 2.48226C1.49805 2.61379 1.524 2.74403 1.57441 2.86552C1.62482 2.98701 1.69871 3.09737 1.79183 3.19026L9.08583 10.4823L1.79183 17.7743C1.60406 17.962 1.49857 18.2167 1.49857 18.4823C1.49857 18.7478 1.60406 19.0025 1.79183 19.1903C1.97961 19.378 2.23428 19.4835 2.49983 19.4835C2.76539 19.4835 3.02006 19.378 3.20783 19.1903L11.2078 11.1903C11.301 11.0974 11.3748 10.987 11.4253 10.8655C11.4757 10.744 11.5016 10.6138 11.5016 10.4823C11.5016 10.3507 11.4757 10.2205 11.4253 10.099C11.3748 9.9775 11.301 9.86715 11.2078 9.77426L3.20783 1.77426C3.11494 1.68113 3.00459 1.60725 2.8831 1.55683C2.76161 1.50642 2.63137 1.48047 2.49983 1.48047C2.3683 1.48047 2.23806 1.50642 2.11657 1.55683C1.99508 1.60725 1.88473 1.68113 1.79183 1.77426Z" fill="#121212" fill-opacity="0.75"/>
          </svg>
        </div>
        `
      })

      $('.lav-carousel').on('swipe', (event, slick, direction) => {
        pushDataLayer('exp_buzz_v6_swipe', 'Image', 'other', 'Select package')
      })

      $('.your-element').on('swipe', function (event, slick, direction) {
        console.log(direction)
        // left
      })

      const fancyboxScript = document.createElement('script')
      fancyboxScript.src =
        'https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.umd.js'
      fancyboxScript.onload = function () {
        setTimeout(() => {
          // Initialize Fancybox after it loads
          Fancybox.bind('[data-fancybox="gallery"]', {
            Thumbs: {
              type: 'classic'
            }
            // Toolbar: {
            //   display: [{ id: 'counter', position: 'center' }, 'close']
            // }
          })
        }, 100) // 100ms delay usually works well
      }
      document.body.appendChild(fancyboxScript)

      const fancyboxCss = document.createElement('link')
      fancyboxCss.rel = 'stylesheet'
      fancyboxCss.href =
        'https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.css'
      document.head.appendChild(fancyboxCss)
    }

    addSummary()

    function addSummary() {
      const markup = /* html */ `
        <div class='lav-summary'>
          <div class='lav-summary__title'>Order summary</div>
          <div class='lav-summary__list'>
            <div class='lav-summary__item lav-summary__kids'>
              <div class='lav-summary__name'>-</div>
              <div class='lav-summary__price'>-</div>
            </div>
            <div class='lav-summary__item lav-summary__adults'>
              <div class='lav-summary__name'></div>
              <div class='lav-summary__price'>-</div>
            </div>
            <div class='lav-summary__item lav-summary__bundle'>
              <div class='lav-summary__name'>Whole family protection kit: <br/> - Kids Patches x 3 packs<br/> - Adults Patches x 1 pack</div>
              <div class='lav-summary__price'>-</div>
            </div>
            <div class='lav-summary__item lav-summary__coupon'>
              <div class='lav-summary__name'>
                ${getSvg('coupon')}
                <span></span>
              </div>
              <div class='lav-summary__price' style="font-weight: 500;">-10% OFF</div>
            </div>
          </div>
        </div>
      `

      _$('#getNow .prices').insertAdjacentHTML('beforebegin', markup)

      visibilityEvent('.lav-summary', () => {
        pushDataLayer(
          'exp_buzz_v6_view_01',
          'Order summary',
          'view',
          'Select package'
        )
      })
    }

    function getCookie(name) {
      const value = `; ${document.cookie}`
      const parts = value.split(`; ${name}=`)
      if (parts.length === 2) return parts.pop().split(';').shift()
    }

    getCoupon()
    const intervalGetCoupon = setInterval(getCoupon, 2500)

    function getCoupon() {
      let localCode = localStorage.getItem('mcforms-221632806-shopifyCoupons')
      if (localCode) {
        localCode = JSON.parse(localCode)
      }
      if (localCode?.length) {
        localCode = localCode[0].code
      }

      const coupon = getCookie('discount_code') || localCode

      if (coupon) {
        _$('.lav-summary__coupon').style.display = 'flex'
        _$('.lav-summary__coupon span').innerText = coupon

        // if (Shopify.currency.active === 'USD') {
        const currentTotal = parseFloat(
          _$('#getNow .prices .js-total .pr').innerText.replaceAll(',', '')
        )
        const newPrice = (currentTotal - currentTotal * 0.1).toFixed(2)

        if (
          !_$('#getNow .prices .js-total .pr').dataset.newPrice ||
          _$('#getNow .prices .js-total .pr').innerText !=
            _$('#getNow .prices .js-total .pr').dataset.newPrice
        ) {
          _$('#getNow .prices .js-total .pr').dataset.newPrice = newPrice
          _$('#getNow .prices .js-total .pr').innerText = newPrice
        }
        // }
        // clearInterval(intervalGetCoupon)
      } else {
        _$('.lav-summary__coupon').style.display = 'none'
      }
    }

    summaryHandler()
    _$('.package .form').addEventListener('click', (e) => {
      summaryHandler()
      setTimeout(getCoupon, 100)
    })
    function summaryHandler() {
      const kids = _$('.lav-summary__kids')
      const adults = _$('.lav-summary__adults')
      const bundle = _$('.lav-summary__bundle')

      const activeKids = _$('.lav-kids input[type=radio]:checked')
      const activeAdults = _$('.adult-pack-content li.active')
      const activeBundle = _$('.new-bundle-pack input[type=radio]:checked')

      const kidsSelectEl = activeKids
        ?.closest('.js-packs')
        .querySelector('.radio-inline')
      const adultsSelectEl = activeAdults
      const bundleSelectEl = activeBundle?.closest('.js-packs')

      if (activeKids) {
        const name = kidsSelectEl.firstChild.textContent.trim()
        const price = kidsSelectEl.querySelector('span').innerText
        kids.querySelector('.lav-summary__name').innerText =
          'Kids patches x ' + name
        kids.querySelector('.lav-summary__price').innerText = price
        kids.style.display = 'flex'
      } else {
        kids.style.display = 'none'
      }

      if (activeAdults) {
        const name =
          adultsSelectEl.querySelector('.adult-pack-number').innerText
        const price =
          adultsSelectEl.querySelector('.adult-pack-price').innerText
        adults.querySelector('.lav-summary__name').innerText =
          'Adults patches x ' + name
        adults.querySelector('.lav-summary__price').innerText = price
        adults.style.display = 'flex'
      } else {
        adults.style.display = 'none'
      }

      if (activeBundle) {
        const price = bundleSelectEl
          .querySelector('.pack-price-each')
          .firstChild.textContent.trim()
        bundle.querySelector('.lav-summary__price').innerText = price
        bundle.style.display = 'flex'
      } else {
        bundle.style.display = 'none'
      }
    }
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
      coupon: `
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
          <g clip-path="url(#clip0_247_628)">
            <mask id="mask0_247_628" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="14" height="15">
              <path d="M0 0.9646H14V14.9646H0V0.9646Z" fill="white"/>
            </mask>
            <g mask="url(#mask0_247_628)">
              <path d="M10.5 2.4646H7.92996C7.59384 2.46472 7.2612 2.53262 6.95192 2.66423C6.64265 2.79585 6.36309 2.98847 6.12996 3.2306L1.51996 8.0166C1.24747 8.29965 1.09691 8.67831 1.10065 9.07119C1.10439 9.46406 1.26213 9.83979 1.53996 10.1176L5.01996 13.5976C5.25152 13.8288 5.56449 13.96 5.89169 13.9629C6.21888 13.9659 6.53421 13.8405 6.76996 13.6136L11.886 8.6876C12.0798 8.501 12.234 8.27719 12.3394 8.02959C12.4447 7.78199 12.499 7.51568 12.499 7.2466V4.4646C12.499 3.93417 12.2882 3.42546 11.9132 3.05039C11.5381 2.67531 11.0294 2.4646 10.499 2.4646" stroke="#3560D5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9.49952 6.02761C9.81046 6.02761 10.0625 5.77555 10.0625 5.46461C10.0625 5.15367 9.81046 4.90161 9.49952 4.90161C9.18859 4.90161 8.93652 5.15367 8.93652 5.46461C8.93652 5.77555 9.18859 6.02761 9.49952 6.02761Z" stroke="#3560D5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9.49023 5.45459H9.51023V5.47459H9.49023V5.45459Z" stroke="#3560D5" stroke-width="1.5" stroke-linejoin="round"/>
            </g>
          </g>
          <defs>
            <clipPath id="clip0_247_628">
              <rect width="14" height="14" fill="white" transform="translate(0 0.9646)"/>
            </clipPath>
          </defs>
        </svg>
      `
    }

    return svgObj[name]
  }
})()
