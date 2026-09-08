(function () {
  console.debug('*** Experiment started ***')

  // Config for Experiment
  const config = {
    // dir: 'http://127.0.0.1:5500/houseofworktops/sizeSelector',
    dir: 'https://flopsi69.github.io/crs/houseofworktops/custom-v2',
    clarity: ['set', 'exp_custom_size_flow', 'variant_1'],
    debug: true,
    isDisableLayer: false,
    cutAnswered: false,
    oilingAnswered: false,
    cutFooterActive: false,
    atcConfig: {
      price: '',
      oldPrice: '', 
      products: ''
    }
  }

  const CUT_FIRST_PRICE = 17.95
  const CUT_EXTRA_PRICE = 12.50

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
    .lav-cutting-cost {
      display: inline-block;
      color: #208964;
      font-size: 12px;
      font-weight: 600;
    }
    .lavm-header__close-desk {
      line-height: 0.5;
      font-size: 44px;
    }
    .lavm-header__close-mob {
      border: 1px solid white;
      width: 30px;
      height: 30px;
      border-radius: 4px;
    }
    #select-size-model[data-type="accessory"] .lav-tab-cut {
      display: none!important;
    }
    #select-size-model[data-type="accessory"] .lav-tab-cut.active+.lavm-tab .lavm-tab-divider {
      fill: #fff;
    }
    #select-size-model[data-type="accessory"] .lavm-tab.active+.lav-tab-cut + .lavm-tab .lavm-tab-divider {
      fill: #d3e9df;
    }
    .lavm-tab-label {
      white-space: nowrap;
    }
    .lavm-btn-continue {
      max-width: 240px
    }
    #select-size-model .select-size-row[data-type="accessory"] .check {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%) scale(1.2);
    }
    .lav-accessory__image {
      margin-left: 40px;
    }
    .lav-question {
      position: relative;
      display: none;
      padding: 60px 15px 40px;
    }
    .lav-question__inner {
      max-width: 535px;
      width: 100%;
      margin: 0 auto;
    }
    .lav-question__inner:not(.active) {
      display: none;
    }
    #select-size-model.lav-showing-question .lav-question {
      display: block;
    }
    #select-size-model.lav-showing-question .lavm-summary__oiling {
      display: none;
    }
    #select-size-model.lav-showing-question .lavm-header, #select-size-model.lav-showing-question #product-options-modal, #select-size-model.lav-showing-question #mobileFilters {
      display: none!important;
    }
    #select-size-model.lav-showing-question .lavm-btn-continue:not(.loading) {
      display: none!important;
    }
    #select-size-model.lav-showing-question .lavm-s3 {
      display: none!important;
    }
    #select-size-model.lav-showing-question .lavm-tab.active[data-step='1'] {
      color: #1f8964;
      gap: 8px;
      cursor: pointer;
      background: transparent;
    }
    #select-size-model.lav-showing-question .lavm-tab.active[data-step='1']+.lavm-tab .lavm-tab-divider {
      fill: #fff;
    }
    .lav-question__back {
      position: absolute;
      left: 40px;
      top: 13px;
      display: flex;
      align-items: center;
      gap: 12px;
      cursor: pointer;
      font-size: 16px;
      font-weight: 500;
      line-height: 32px;
      color: #212529;
      transition: .2s;
    }
    @media(hover:hover) {
      .lav-question__back:hover {
        opacity: .75;
      }
    }
    .lav-question__media {
      position: relative;
      margin: 0 auto 32px;
      max-width: 347px;
    }
    .lav-question__media img:first-child {
      display: block;
      width: 100%;
      border-radius: 12px;
      object-fit: cover;
    }
    .lav-question__icon {
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translate(-50%, 50%);
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .lav-question__icon img {
      width: 26px;
      height: 26px;
    }

    .lav-question__question {
      text-align: center;
      font-size: 20px;
      font-weight: 600;
      color: #212529;
      line-height: 32px;
    }
    .lav-question__options {
      display: flex;
      gap: 12px;
      margin: 12px auto 0;
      max-width: 456px;
    }
    .lav-question__option {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      min-height: 64px;
      padding: 8px 20px;
      border: 1px solid #C2C7CB;
      border-radius: 4px;
      font-size: 18px;
      font-weight: 600;
      color: #212529;
      cursor: pointer;
      transition: border-color .15s, box-shadow .15s;
    }
    @media(hover:hover) {
      .lav-question__option:hover {
        border-color: #1f8964;
      }
    }
    .lav-question__option.selected {
      border-color: #1f8964;
      box-shadow: 0 0 0 5px #f1f8f5;
    }

    .lav-cut__title-wrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .lav-cut__title {
      color: #212529;
      font-size: 20px;
      font-weight: 600;
      line-height: 32px;
    }
    .lav-cut__caption {
      color: #212529;
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
      margin-top: 1px;
    }
    .lav-cut__skip {
      color: #1F8964;
      font-size: 16px;
      font-weight: 500;
      line-height: 26px;
      text-decoration: underline;
      cursor: pointer;
    }
    @media(hover:hover) {
      .lav-cut__skip:hover {
        opacity: .75;
      }
    }
    .lav-cut__list {
      margin-top: 16px;
      display: grid;
      gap: 16px;
    }
    .lav-cut__footer {
      margin-top: 16px;
      display: grid;
      gap: 4px;
    }
    .lav-cut__footer-caption {
      color: #1F8964;
      font-size: 14px;
      font-weight: 500;
      line-height: 22px;
    }
    .lavc-continue {
      position: relative;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      border: 1px solid #1f8964;
      background: #1f8964;
      height: 70px;
      color: #fff;
      font-size: 24px;
      font-weight: 500;
      line-height: 36px;
      max-width: 240px;
      width: 100%;
      cursor: pointer;
      transition: .3s;
      margin: 0;
    }
    @media (hover: hover) {
      .lavc-continue:hover {
        color: #fff;
        background-color: #186a4d;
        border-color: #165f46;
      }
    }
    .lavc-continue:not(.active) {
      display: none!important;
    }
    .lavc-item {
      border-radius: 8px;
      border: 1px solid #C2C7CB;
      background: #F5F5F7;
      padding: 16px;
    }
    .lavc-item__head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      margin-bottom: 12px;
      min-height: 44px;
    }
    .lavc-item__name {
      display: flex;
      align-items: center;
      gap: 8px;
      min-width: 0;
    }
    .lavc-item__dot {
      flex-shrink: 0;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #1F8964;
    }
    .lavc-item__dim {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #212529;
      font-size: 18px;
      font-weight: 400;
      letter-spacing: 0.9px;
      line-height: 24px;
    }
    .lavc-item__price {
      flex-shrink: 0;
      color: #212529;
      font-size: 16px;
      font-weight: 500;
      line-height: 28px;
    }
    .lavc-item__inputs {
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .lavc-item__field {
      display: flex;
      flex: 1 0 0;
      align-items: center;
      min-width: 0;
      height: 48px;
      padding: 0 16px;
      border: 1px solid #ADB5BD;
      border-radius: 6px;
      background: #fff;
      transition: border-color .15s;
    }
    .lavc-item__field:focus-within {
      border-color: #1f8964;
    }
    .lavc-item__field--error {
      border-color: #dc3545;
    }
    .lavc-item__field--error:focus-within {
      border-color: #dc3545;
    }
    .lavc-item__field-input {
      flex: 1 0 0;
      min-width: 0;
      width: 100%;
      border: 0;
      padding: 0;
      background: transparent;
      color: #212529;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
    }
    .lavc-item__field-input:focus {
      outline: none;
    }
    .lavc-item__field-input::-webkit-outer-spin-button,
    .lavc-item__field-input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    .lavc-item__field-unit {
      flex-shrink: 0;
      margin-left: 8px;
      color: #808487;
      font-size: 14px;
      line-height: 22px;
      text-align: center;
      pointer-events: none;
    }
    .lavc-item__x {
      flex-shrink: 0;
      color: #808487;
      font-size: 14px;
      line-height: 22px;
    }
    .lavc-item__caption {
      margin-top: 12px;
      color: #212529;
      font-size: 14px;
      line-height: 22px;
    }
    .lavc-item__caption--empty {
      color: #495057;
    }
    .lavc-item__caption--error {
      color: #dc3545;
    }
    .lavc-item__extra {
      color: #1F8964;
      font-weight: 600;
    }

    .lavm-s3__inner {
      max-width: 725px;
      width: 100%;
      margin: auto;
    }
    .lavo-heading {
      text-align: left;
    }
    .lavo-heading__title-wrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .lavo-heading__title {
      color: #212529;
      font-size: 20px;
      font-weight: 600;
      line-height: 32px;
    }
    .lavo-heading__caption {
      color: #212529;
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
      margin-top: 1px;
    }
    .lavo-heading__skip {
      color: #1F8964;
      font-size: 16px;
      font-weight: 500;
      line-height: 26px;
      text-decoration: underline;
      cursor: pointer;
    }
    @media(hover:hover) {
      .lavo-heading__skip:hover {
        opacity: .75;
      }
    }

    #select-size-model:not([data-type="accessory"]) .lavm-oiling-card[data-option="untreated"] {
      display: none!important;
    }
    #select-size-model .lavm-oiling-price {
      white-space: nowrap;
    }
    #select-size-model .lavm-oiling-price__wrap {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    #select-size-model .lavm-oiling-card {
      border-radius: 6px;
      border: 1px solid #C2C7CB;
      background: #FFF;
      padding: 20px 19px;
    }
    #select-size-model .lavm-oiling-desc {
      padding-top: 16px;
      line-height: 24px;
      border-top: 1px solid rgba(0, 0, 0, 0.08);
    }
    #select-size-model .lavm-oiling-badge {
      font-weight: 600;
    }
    #select-size-model .lavm-oiling-card.selected {
      border: 1px solid #1F8964;
      background: #F0FEF8;
      box-shadow: 0 0 0 5px #F1F8F5;
    }
    #select-size-model:not([data-type="accessory"]) .lavm-oiling-caption {
      display: block!important;
      margin-top: 0;
      line-height: 16px;
    }
    #select-size-model[data-step="2"] .lavm-back {
      display: none!important;
    }
    #select-size-model[data-step="2"] .lavm-product {
      display: flex;
    }
    #select-size-model[data-step="2"] .lavm-s3 {
      padding-top: 60px;
      padding-bottom: 40px;
    }
    @media(max-width: 992px) {
      .lavm-header__close-mob {
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 0;
        padding-bottom: 4px;
      }
      .added-modal-accessories .modal-content {
        margin-top: 40px;
      }
    }
    @media(max-width: 767px) {
      .lavc-item {
        padding: 12px;
      }
      .lavc-item__caption {
        margin-top: 8px;
        font-size: 12px;
        line-height: 18px;
      }
      .lavc-item__field {
        padding: 0 12px;
        height: 44px;
      }
      .lavc-item__field-input {
        font-size: 14px;
      }
      .lavc-item__price {
        font-size: 14px;
        line-height: 24px;
      }
      .lavc-item__head {
        position: relative;
        min-height: auto;
        padding-bottom: 12px;
        margin-bottom: 12px;
      }
      .lavc-item__head:before {
        content: '';
        left: -12px;
        right: -12px;
        height: 1px;
        background: #E3E4E5;
        position: absolute;
        bottom: 0;
      }
      .lavc-item__name {
        gap: 6px;
      }
      .lavc-item__dim {
        font-size: 14px;
        line-height: 24.08px;
        letter-spacing: 0.7px;
      }
      .lavm-tab {
        padding-left: 10px;
        gap: 5px!important;
      }
      .lavm-tabs {
        height: 62px;
      }
      .lav-question__back {
        left: 14px;
        top: 14px;
      }
      .lav-question__media img:first-child {
        border-radius: 8px;
      }
      .lav-question__question {
        font-size: 18px;
        line-height: 26px;
      }
      .lav-question__options {
        margin-top: 16px;
      }
      .lav-question__option {
        min-height: 56px;
        font-size: 16px;
        padding: 0;
      }
      .lav-question {
        padding-left: 14px;
        padding-right: 14px;
      }
      #select-size-model[data-step="2"] .lavm-product {
        display: none;
      }
      .lavm-tab-num svg {
        width: 20px;
        height: 20px;
      }
      .lavo-heading__title {
        font-size: 18px;
        line-height: 26px;
      }
      .lavo-heading__skip {
        font-size: 12px;
      }
      .lavo-heading__caption {
        margin-top: 4px;
        font-size: 12px;
        line-height: 18px;
      }
      .lavm-s3-options {
        gap: 16px;
      }
      .lavm-btn-continue {
        flex-shrink: 0;
      }
      .lavc-continue {
        max-width: 142px;
        height: 56px;
        font-size: 16px;
      }
      .lav-cut__title {
        font-size: 18px;
        line-height: 26px;
      }
      .lav-cut__skip {
        font-size: 12px;
      }
      .lav-cut__caption {
        margin-top: 4px;
        font-size: 12px;
        line-height: 18px;
      }
      .lav-cut__footer-caption {
        font-size: 12px;
        line-height: 1.5;
      }
      .lav-accessory__image {
        margin-left: 0;
      }
      #select-size-model .select-size-row[data-type=accessory]>.product-option-name>.flex-column {
        flex-direction: row!important;
      }
      .lav-accessory__image {
        width: 60px;
        height: 60px;
      }
      #select-size-model .select-size-row[data-type=accessory]>.product-option-name {
        max-width: 70%;
      }
      #select-size-model .select-size-row .check+.h6 {
        letter-spacing: 0;
      }
      .lav-accessory__image {
        margin-right: 8px;
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
    addQuestionStep();
    handleOiling();

    return
  }

  function addQuestionStep() {
    waitFor(() => _$('#select-size-model .lavm-tabs .lavm-tab[data-step="1"]'), setup)

    function setup() {
      if (_$('#select-size-model .lav-tab-cut')) return

      insertTab()
      insertPanel()
      observeStep()
      addHandlers();
    }

    function insertTab() {
      const tab1 = _$('#select-size-model .lavm-tab[data-step="1"]')

      if (!tab1) return

      tab1.insertAdjacentHTML('afterend', /* html */ `
        <div class="lavm-tab lav-tab-cut" data-step='2.5'>
          <svg class="lavm-tab-divider" width="22" height="79" viewBox="0 0 22 79" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.440186 0L21.4402 39.0002L0.440186 78" stroke="#D3E9DF"/>
          </svg>
          <div class="lavm-tab-num">2.</div>
          <div class="lavm-tab-label">Choose cutting plan</div>
        </div>
      `)

      _$('.lav-tab-cut').addEventListener('click', () => {
        if (!_$('.lav-tab-cut').classList.contains('done')) return
        // pushDataLayer('exp_pdp_ss_step', 'Choose cutting plan', 'click', 'Standard Size Flow')
        if (config.cutAnswered) {
          lavMoveToStep('question', 'cut')
        } else {
          lavMoveToStep('question', 'cutting')
        }
      })

      const tab2 = _$('#select-size-model .lavm-tab[data-step="2"]')

      if (!tab2) return
      _$('.lavm-tab-num', tab2).innerText = '3.'
    }

    function insertPanel() {
      const target = _$('#select-size-model .lavm-s3') || _$('#select-size-model #product-options-modal')
      if (!target) return

      target.insertAdjacentHTML('afterend', /* html */ `
        <div class="lav-question modal-body">
          <div class="lav-question__back">
            ${ getSvg('backArrow') }
            Step back
          </div>

          <div class="lav-question__inner lav-question--cutting">
            <div class="lav-question__media">
              <img src="${config.dir}/img/cutting-question.png" alt="Worktop cutting">
              <span class="lav-question__icon">
                ${getSvg('cutting-icon')}
              </span>
            </div>
            <div class="lav-question__question">Want your worktops cut to size, ready to install?</div>
            <div class="lav-question__options">
              <div class="lav-question__option" data-answer="yes">Yes, cut for me</div>
              <div class="lav-question__option" data-answer="no">No, I'll cut myself</div>
            </div>
          </div>

          <div class="lav-question__inner lav-question--oiling">
            <div class="lav-question__media">
              <img src="${config.dir}/img/oiling-question.png" alt="Worktop oiling">
              <span class="lav-question__icon">
                ${getSvg('oiling-icon')}
              </span>
            </div>
            <div class="lav-question__question">Want your worktops professionally oiled before delivery?</div>
            <div class="lav-question__options">
              <div class="lav-question__option" data-answer="yes">Yes</div>
              <div class="lav-question__option" data-answer="no">Add without oiling</div>
            </div>
          </div>

          <div class="lav-question__inner lav-cut">
            <div class="lav-cut__header">
              <div class="lav-cut__title-wrap">
                <div class="lav-cut__title">
                  Enter your cut sizes
                </div>
                <div class="lav-cut__skip">
                  Skip — I’ll cut myself
                </div>
              </div>
              <div class="lav-cut__caption">
                You get the exact sizes you enter — offcuts included
              </div>
            </div>

            <div class="lav-cut__list"></div>

            <div class="lav-cut__footer">
              <div class="lav-cut__footer-caption">
                * £17.95 First cut · £12.50 For any additional cuts
              </div>
              <div class="lav-cut__footer-caption">
                * The blade takes 4mm per cut, from the offcut, not your piece.
              </div>
            </div>
          </div>
        </div>
      `)

      _$('.lavm-btn-continue').insertAdjacentHTML('afterend', /* html */ `
        <div class="lavc-continue">Continue</div>
      `)

      _$('.lav-cut__skip').addEventListener('click', () => {
        config.oilingAnswered = false
        config.cutAnswered = false
        _$('.lavc-continue')?.classList.remove('active')
        _$$('.lavc-item__field-input').forEach(input => input.value = '')
        _$$('.lavc-item', document, true).forEach(item => item.dataset.cuts = 0)
        applyCuttingSurchargeToFooter()
        if (_$('.lavm-tab[data-step="2"]')) {
          _$('.lavm-btn-continue')?.click()
          lavMoveToStep('question', 'oiling')
        } else {
          handleAddToCart()
        }
      })

      _$('.lavc-continue').addEventListener('click', () => {
        if (_$('.lav-cut__list .lavc-item__field--error')) {
          alert('Please fix the highlighted cut sizes before continuing')
          return
        }

        if (_$('.lavm-tab[data-step="2"]')) {
          _$('.lavm-btn-continue')?.click()
          lavMoveToStep('question', 'oiling')
        } else {
          _$('.lavc-continue')?.classList.remove('active')
          handleAddToCart()
        }
      });

      _$('.lav-question .lav-question__back').addEventListener('click', () => {
        if (_$('.lav-question--oiling').classList.contains('active')) {
          if (config.cutAnswered) {
            lavMoveToStep('question', 'cut')
          } else {
            lavMoveToStep('question', 'cutting')
          }
        } else if (_$('.lav-question--cutting').classList.contains('active')) {
          lavMoveToStep('first')
        } else if (_$('.lav-cut').classList.contains('active')) {
          lavMoveToStep('question', 'cutting')
        }
      })

      _$('.lav-question--cutting [data-answer="yes"]').addEventListener('click', () => {
        config.cutAnswered = true
        lavMoveToStep('question', 'cut')
        prepareCuttingStep()
      });
      _$('.lav-question--cutting [data-answer="no"]').addEventListener('click', () => {
        config.cutAnswered = false
        if (_$('.lavm-tab[data-step="2"]')) {
          _$('.lavm-btn-continue')?.click()
          lavMoveToStep('question', 'oiling')
        } else {
          handleAddToCart()
        }
      });
      _$('.lav-question--oiling [data-answer="yes"]').addEventListener('click', () => {
        config.oilingAnswered = true
        _$('.lavm-oiling-card:not([data-option="untreated"])')?.click()
        _$('#select-size-model')?.classList.remove('lav-showing-question');
      });
      _$('.lav-question--oiling [data-answer="no"]').addEventListener('click', () => {
        config.oilingAnswered = false
        _$('.lavm-oiling-card[data-option="untreated"]')?.click()
        // _$('#select-size-model')?.classList.remove('lav-showing-question');
        handleAddToCart()
      });
    }

    function observeStep() {
      const modal = _$('#select-size-model')
      if (!modal) return

      const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          if (mutation.attributeName === 'class' && modal.classList.contains('lav-showing-question')) {
            const isShown = modal.classList.contains('show')
            if (!isShown) {
              lavMoveToStep('first')
            }
          }
          if (mutation.attributeName === 'class' && modal.classList.contains('show')) {
            if (modal.dataset.type === 'accessory') {
              _$('.lav-cutting-cost')?.remove();
              if (_$('.lavm-tab[data-step="2"]')) {
                _$('.lavm-tab[data-step="2"] .lavm-tab-num').innerHTML = '2.'
              }
              if (_$('.lavm-tab[data-step="1"].active') && _$('.lavm-tab[data-step="2"]')) {
                _$('.lavm-tab[data-step="1"].active .lavm-tab-num').innerHTML = '1.'
              } else {
                _$('.lavm-tab[data-step="1"] .lavm-tab-num').innerHTML = ''
              }
            } else if (_$('.lavm-tab[data-step="2"]')) {
              _$('.lavm-tab[data-step="2"] .lavm-tab-num').innerHTML = '3.'
              if (_$('.lavm-tab[data-step="1"].active') && !_$('.lav-tab-cut.active')) {
                _$('.lavm-tab[data-step="1"].active .lavm-tab-num').innerHTML = '1.'
              }
            } else if (_$('.lavm-tab[data-step="1"].active') && modal.dataset.type !== 'accessory' && !_$('.lav-tab-cut.active')) {
              _$('.lavm-tab[data-step="1"].active .lavm-tab-num').innerHTML = '1.'
              _$('.lavm-btn-continue .lavm-btn-continue-label').textContent = 'Continue'
              _$('.lavc-continue').textContent = 'Add to Cart'
            }
          }
        }
      })

      observer.observe(modal, { attributes: true, attributeFilter: ['class'] })
    }

    function addHandlers() {
      document.addEventListener('click', (e) => {
        if (!_$('#select-size-model[data-type="accessory"]')) {
          if (e.target.closest('.lavm-btn-continue') && _$('.lavm-tab.active[data-step="1"]') && !_$('.lav-showing-question')) {
            e.preventDefault()
            e.stopPropagation()
            e.stopImmediatePropagation()
            lavMoveToStep('question', 'cutting')
          }
          if (e.target.closest('.lavm-tab[data-step="1"]')) {
            lavMoveToStep('first')
          }
          if (e.target.closest('.lavm-btn-continue') && _$('.lavm-tab.active[data-step="2"]') && !_$('.lav-showing-question') && config.cutAnswered && _$('#select-size-model').getAttribute('data-type') !== 'accessory') {
            e.preventDefault()
            e.stopPropagation()
            e.stopImmediatePropagation()
            _$(".lav-cutting-cost")?.remove();
            addToCartWrapper(addToCustomCart);
            setTimeout(() => {
              $('#select-size-model').modal('hide');
              $('#added-modal-with-accessories-2').modal('show');
            }, 1700);
          }
        }
      }, true); // capture phase to intercept before other listeners

      // native oiling selection recalculates .lavm-summary itself — reapply our cutting surcharge on top afterwards
      document.addEventListener('click', (e) => {
        if (e.target.closest('.lavm-oiling-card')) {
          setTimeout(() => applyCuttingSurchargeToFooter(), 0)
        }
      })
    }
  }

  function prepareCuttingStep() {
    const list = _$('.lav-cut__list')
    if (!list) return

    list.innerHTML = ''

    const MIN_DIMENSION = 20

    function parseWorktopDimensions(name) {
      const match = /^([\d.]+)\s*M\s*x\s*([\d.]+)\s*x\s*([\d.]+)\s*mm$/i.exec((name || '').trim())
      if (!match) return null

      return {
        length: parseFloat(match[1]) * 1000,
        width: parseFloat(match[2]),
        thickness: parseFloat(match[3])
      }
    }

    function validateItem(item) {
      const [lengthInput, widthInput] = _$$('.lavc-item__field-input', item, true)
      const maxLength = parseFloat(item.dataset.maxLength)
      const maxWidth = parseFloat(item.dataset.maxWidth)
      let error = ''

      ;[
        { input: lengthInput, max: maxLength, label: 'Length' },
        { input: widthInput, max: maxWidth, label: 'Width' }
      ].forEach(({ input, max, label }) => {
        if (!input) return

        const raw = input.value.trim()
        const value = parseInt(raw, 10)
        const isInvalid = raw !== '' && (!value || value < MIN_DIMENSION || (!isNaN(max) && value > max))

        input.closest('.lavc-item__field')?.classList.toggle('lavc-item__field--error', isInvalid)

        if (isInvalid && !error) {
          if (!isNaN(max) && value > max) {
            error = `${label} can't exceed ${max}mm`
          } else if (value < MIN_DIMENSION) {
            error = `${label} must be at least ${MIN_DIMENSION}mm`
          } else {
            error = `Enter a valid ${label.toLowerCase()}`
          }
        }
      })

      return error
    }

    function updateItemCuts(item) {
      const [lengthInput, widthInput] = _$$('.lavc-item__field-input', item, true)
      const maxLength = parseFloat(item.dataset.maxLength)
      const maxWidth = parseFloat(item.dataset.maxWidth)

      const isCut = (input, max) => {
        const raw = input?.value.trim()
        if (!raw) return false
        return isNaN(max) || parseInt(raw, 10) !== max
      }

      const cuts = [
        [lengthInput, maxLength],
        [widthInput, maxWidth]
      ].filter(([input, max]) => isCut(input, max)).length

      item.dataset.cuts = cuts
    }

    function updateItemCaption(item) {
      const caption = _$('.lavc-item__caption', item)
      const error = validateItem(item)
      const filled = parseInt(item.dataset.cuts, 10) || 0

      caption.classList.remove('lavc-item__caption--empty', 'lavc-item__caption--error')

      if (error) {
        caption.classList.add('lavc-item__caption--error')
        caption.innerHTML = error
        return
      }

      if (!filled) {
        caption.classList.add('lavc-item__caption--empty')
        caption.innerHTML = 'Leave empty to ship this worktop uncut'
        return
      }

      const price = CUT_FIRST_PRICE + (filled - 1) * CUT_EXTRA_PRICE
      caption.innerHTML = `${filled} cut${filled > 1 ? 's' : ''} · <span class="lavc-item__extra">+${formatPrice(price, true)}</span>`
    }

    _$$('.select-size-row.selected[data-type="worktop"]').forEach((row) => {
      const qtyInput = _$('.quantity-field', row)
      const qty = parseInt(qtyInput?.value, 10) || 0

      if (!qty) return

      const name = qtyInput?.dataset.name || row.dataset.name || ''
      const price = qtyInput?.dataset.price || ''
      const productId = qtyInput?.dataset.id || ''
      const optionId = qtyInput?.dataset.optid || ''
      const dims = parseWorktopDimensions(name)

      for (let unit = 0; unit < qty; unit++) {
        list.insertAdjacentHTML('beforeend', /* html */ `
          <div class="lav-cut__item lavc-item" data-product-id="${productId}" data-option-id="${optionId}" data-unit="${unit}" data-max-length="${dims?.length ?? ''}" data-max-width="${dims?.width ?? ''}" data-thickness="${dims?.thickness ?? ''}" data-cuts="0">
            <div class="lavc-item__head">
              <div class="lavc-item__name">
                <span class="lavc-item__dot"></span>
                <span class="lavc-item__dim">${name}</span>
              </div>
              <div class="lavc-item__price">${price}</div>
            </div>
            <div class="lavc-item__inputs">
              <div class="lavc-item__field">
                <input class="lavc-item__field-input" type="text" inputmode="numeric" placeholder="Length" pattern="[0-9]*" min="${MIN_DIMENSION}" value="">
                <span class="lavc-item__field-unit">mm</span>
              </div>
              <div class="lavc-item__x">x</div>
              <div class="lavc-item__field">
                <input class="lavc-item__field-input" type="text" inputmode="numeric" placeholder="Width" pattern="[0-9]*" min="${MIN_DIMENSION}" value="">
                <span class="lavc-item__field-unit">mm</span>
              </div>
            </div>
            <div class="lavc-item__caption lavc-item__caption--empty">
              Leave empty to ship this worktop uncut
            </div>
          </div>
        `)
      }
    })

    _$$('.lavc-item', list).forEach((item) => {
      _$$('.lavc-item__field-input', item).forEach((input) => {
        input.addEventListener('input', () => {
          input.value = input.value.replace(/\D/g, '')
          updateItemCuts(item)
          updateItemCaption(item)
          applyCuttingSurchargeToFooter()
        })
      })
    })

    applyCuttingSurchargeToFooter()
  }

  function getCuttingSurcharge() {
    return _$$('.lavc-item', document, true).reduce((total, item) => {
      const cuts = parseInt(item.dataset.cuts, 10) || 0
      return cuts ? total + CUT_FIRST_PRICE + (cuts - 1) * CUT_EXTRA_PRICE : total
    }, 0)
  }

  function applyCuttingSurchargeToFooter() {
    const priceEl = _$('.lavm-summary__price')
    const oldPriceEl = _$('.lavm-summary__price-old')
    const countEl = _$('.lavm-summary__count')
    // .textContent (not .innerText) — these native totals are hidden via CSS
    const cartTotalEl = _$('#select-size-model .modal-footer .cart-total')
    const cartOldTotalEl = _$('.added-modal-accessories .subtotal-bottom .row-subtotal .o-total-text-display')

    if (!priceEl || !countEl || !cartTotalEl) return

    const surcharge = config.cutFooterActive && config.cutAnswered ? getCuttingSurcharge() : 0
    const baseCaption = countEl.textContent.replace(/\s*\+\s*£[\d.,]+\s*cutting$/i, '').trim()
    const basePrice = formatPrice(cartTotalEl.textContent) || 0

    priceEl.textContent = formatPrice(basePrice + surcharge, true)
    countEl.textContent = surcharge > 0 ? `${baseCaption} + ${formatPrice(surcharge, true)} cutting` : baseCaption
    if (surcharge > 0) {
      _$('#added-modal-with-accessories-2 .subtotal-bottom').dataset.cutting = surcharge
    }

    if (oldPriceEl && cartOldTotalEl && cartOldTotalEl.style.display !== 'none') {
      const baseOldPrice = formatPrice(cartOldTotalEl.textContent) || 0
      if (baseOldPrice) {
        oldPriceEl.textContent = formatPrice(baseOldPrice + surcharge, true)
      }
    }

    const oilingEl = _$('.lavm-summary__oiling')
    const oilingSelected = _$('.lavm-oiling-card.selected')

    if (oilingEl && oilingSelected && ['oiling', 'smoothguard'].includes(oilingSelected.dataset.option)) {
      const oilingPrice = _$('.lavm-oiling-price', oilingSelected)?.textContent.trim()
      const oilingTitle = _$('.lavm-oiling-title', oilingSelected)?.textContent.trim() || ''

      if (oilingPrice) {
        oilingEl.textContent = `+ ${oilingPrice} ${oilingTitle}`.trim()
      }
    }
  }

  function lavMoveToStep(step, type) {
    _$('.lavc-continue')?.classList.remove('active')
    if (step === 'first') {
      config.cutFooterActive = false
      _$('#select-size-model')?.classList.remove('lav-showing-question');
      _$('.lav-tab-cut')?.classList.remove('active')
      _$('.lavm-tab[data-step="1"] .lavm-tab-num').innerHTML = '1.'
      _$('.lav-tab-cut .lavm-tab-num').innerHTML = '2.';
      if (_$('.lavm-tab[data-step="2"]')) {
        setTimeout(() => {
          _$('.lavm-tab[data-step="2"] .lavm-tab-num').innerHTML = '3.'
        }, 0)
      }
    }
    if (step === 'question') {
      config.cutFooterActive = true
      _$$('.lav-question__inner').forEach(el => el.classList.remove('active'))
      _$('#select-size-model')?.classList.add('lav-showing-question');
      _$('.lav-tab-cut .lavm-tab-num').innerHTML = '2.';
      if (_$('.lavm-tab[data-step="2"]')) {
        setTimeout(() => {
          _$('.lavm-tab[data-step="2"] .lavm-tab-num').innerHTML = '3.'
        }, 0)
      }
      if (type === 'cutting') {
        config.cutFooterActive = false
        if (_$('.lavm-tab.active[data-step="2"]')) {
          _$('.lavm-back')?.click()
        }
        _$('.lav-question--cutting')?.classList.add('active')
        _$('.lav-tab-cut')?.classList.add('active')
        _$('.lav-tab-cut')?.classList.remove('done')
        // _$('.lavm-tab[data-step="1"]')?.classList.remove('active')
        _$('.lavm-tab[data-step="1"] .lavm-tab-num').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#1F8964" stroke="#1F8964" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.83325 12L10.8333 15L16.8333 9" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/></svg>';
      }

      if (type === 'cut') {
        if (_$('.lavm-tab.active[data-step="2"]')) {
          _$('.lavm-back')?.click()
        }
        _$('.lav-cut')?.classList.add('active')
        _$('.lav-tab-cut')?.classList.add('active')
        _$('.lav-tab-cut')?.classList.remove('done')
        _$('.lavc-continue')?.classList.add('active')

        _$('.lavm-tab[data-step="1"] .lavm-tab-num').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#1F8964" stroke="#1F8964" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.83325 12L10.8333 15L16.8333 9" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/></svg>';
      }

      if (type === 'oiling') {
        _$('.lavm-oiling-card[data-option="untreated"]')?.click()
        _$('.lav-question--oiling')?.classList.add('active')
        _$('.lav-tab-cut')?.classList.remove('active')
        _$('.lav-tab-cut')?.classList.add('done')
        _$('.lav-tab-cut .lavm-tab-num').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#1F8964" stroke="#1F8964" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.83325 12L10.8333 15L16.8333 9" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/></svg>';
      }
    }
    
    const activeTabs = _$$('.lavm-tabs .lavm-tab.active')
    activeTabs[activeTabs.length - 1]?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })

    // deferred: let any native footer recalculation triggered above (e.g. via .lavm-back click) settle first
    setTimeout(() => applyCuttingSurchargeToFooter(), 0)
  }

  function handleOiling() {
    const parent = _$('.lavm-s3');
    if (!parent) return;

    parent.insertAdjacentHTML('afterbegin', '<div class="lavm-s3__inner"></div>');

    _$('.lavm-s3__inner', parent).append(_$('.lavm-s3-heading[data-mode="worktop"]', parent), _$('.lavm-s3-options[data-mode="worktop"]', parent), _$('.lavm-s3-heading[data-mode="accessory"]', parent), _$('.lavm-s3-options[data-mode="accessory"]', parent));

    _$('.lavm-s3__inner', parent).insertAdjacentHTML('beforebegin', /* html */ `
      <div class="lav-question__back">
        ${ getSvg('backArrow') }
        Step back
      </div>
    `);


    _$('.lav-question__back', parent).addEventListener('click', () => {
      if (_$('#select-size-model[data-type="accessory"]')) {
        _$('.lavm-back')?.click()
      } else {
        lavMoveToStep('question', 'oiling')
      }
    })

    const headingEl = _$('.lavm-s3-heading', parent);
    headingEl.innerHTML = /* html */ `
      <div class="lavo-heading">
        <div class="lavo-heading__title-wrap">
          <div class="lavo-heading__title">
            Choose your oiling
          </div>
          <div class="lavo-heading__skip">
            Skip — add without oiling
          </div>
        </div>
        <div class="lavo-heading__caption">
          Sealed and ready to use — save hours of messy DIY.
        </div>
      </div>
    `;

    _$$('.lavm-oiling-card').forEach(el => {
      const type = el.dataset.option;

      if (type === 'oiling') {
        _$('.lavm-oiling-desc', el).innerText = '6-step sanding and oiling — ready to use straight away. Fails the water test? Full oiling fee refunded.'
      }

      if (type === 'smoothguard') {
        _$('.lavm-oiling-desc', el).innerText = '12-step process alternating detailed sanding and five oil layers. 18-month maintenance warranty.'
      }

      if (_$('.lavm-oiling-caption', el)) {
        _$('.lavm-oiling-price', el).insertAdjacentHTML('beforebegin', /* html */ `
          <div class="lavm-oiling-price__wrap"></div>
        `)

        _$('.lavm-oiling-price__wrap', el).insertAdjacentElement('beforeend', _$('.lavm-oiling-price', el))
        _$('.lavm-oiling-price__wrap', el).insertAdjacentElement('beforeend', _$('.lavm-oiling-caption', el))
      }
    });

    _$('.lavo-heading__skip').addEventListener('click', () => {
      _$('.lavm-oiling-card[data-option="untreated"]')?.click()
      handleAddToCart()
    });
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
        _$('.product-option-name .checkbox-check', option).insertAdjacentHTML('afterbegin', /* html */ `
          <img src="${imageSrc}" alt="${title}" class="lav-accessory__image">
        `)
      }
    });
  }

  // function _$$(selector, context = document, toSimpleArray = false) {
  //   const arr = context.querySelectorAll(selector)

  //   return toSimpleArray ? Array.from(arr) : arr
  // }

  function _getWortopsGroups() {
    const worktops = _$$('.lav-cut__item.lavc-item', document, true)
    const groups = []

    worktops.forEach((item, itemIndex) => {
      const optionId = item.dataset.optionId
      let group = groups.find((g) => g.dataset.optionId === optionId)

      if (!group) {
        group = {
          dataset: {
            productId: item.dataset.productId,
            optionId,
            maxLength: item.dataset.maxLength || null,
            maxWidth: item.dataset.maxWidth || null,
          },
          qty: 0,
          lineItems: []
        }
        groups.push(group)
      }

      const [lengthInput, widthInput] = _$$('.lavc-item__field-input', item, true)

      group.qty++
      group.lineItems.push({
        unit: item.dataset.unit,
        length: lengthInput?.value.trim() || item.dataset.maxLength || null,
        width: widthInput?.value.trim() || item.dataset.maxWidth || null,
        cutCount: item.dataset.cuts || '0',
        json: {
          type: 'cut_to_size',
          data: {
            size: { 
              length: lengthInput?.value.trim() || item.dataset.maxLength || null,
              width: widthInput?.value.trim() || item.dataset.maxWidth || null,
              thickness: item.dataset.thickness || null
            },
            offcut: 'dont-send',
            cost: '0',
            comment: ''
          },
          list_order: itemIndex + 1
        }
      })
    })

    return groups
  }

  function handleAddToCart() {
    _$(".lav-cutting-cost")?.remove();
 
    if (!config.cutAnswered || _$('#select-size-model').getAttribute('data-type') === 'accessory') {
      _$('.lavm-btn-continue')?.click()
      return;
    }

    setTimeout(() => {
      addToCartWrapper(addToCustomCart);
    }, 10);
    setTimeout(() => {
      $('#select-size-model').modal('hide');
      $('#added-modal-with-accessories-2').modal('show');
    }, 1700);
  }

  async function addToCustomCart() {
    const productId = _$('#product [name="product_id"]')?.value;

    const params = new URLSearchParams();
    params.append('type', 'precut');
    params.append('product_id', productId);
    params.append('quantity', '1');

    let lineItemIndex = 0
    const worktops = _getWortopsGroups();
    console.log('worktops', worktops)

    const is3Oiling = _$('.lavm-oiling-card.selected[data-option="oiling"]');
    const is5Oiling = _$('.lavm-oiling-card.selected[data-option="smoothguard"]');

    console.log('oilings', { is3Oiling, is5Oiling })

    worktops.forEach((groupEl, groupElIndex) => {
      const productId = groupEl.dataset.productId;
      const optId = groupEl.dataset.optionId;
      const qty = groupEl.qty;

      params.append(`option[${productId}]`, optId);
      params.append(`opqty[${productId}][${optId}]`, String(qty));

      if (is3Oiling) {
        params.append(`oiling_3_[${optId}]`, 'yes');
      } else if (is5Oiling) {
        params.append(`oiling_5_[${optId}]`, 'yes');
      }

      groupEl.lineItems.forEach((lineItem) => {
        params.append(`line_items[${lineItemIndex}][option_id]`, productId)
        params.append(`line_items[${lineItemIndex}][option_value_id]`, optId)
        params.append(`line_items[${lineItemIndex}][qty]`, '1')
        params.append(`line_items[${lineItemIndex}][cut_counts]`, lineItem.cutCount)
        params.append(`line_items[${lineItemIndex}][cut_to_size]`, JSON.stringify(lineItem.json))

        lineItemIndex++;
      })
    });

    console.log('params', params.toString())

    try {
      var requestUrl = 'https://houseofworktops.co.uk/index.php?route=checkout/cart/add';

      var res = await fetch(requestUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
        body: params.toString()
      });

      var text = await res.text();
      var json = null;
      try { json = JSON.parse(text); } catch (_) {}

      if (!res.ok || (json && json.error)) {
        var errText = (json && (json.error || json.message)) || 'Cart API error';
        throw new Error('Status: ' + res.status + '. ' + errText);
      }

      setTimeout(function () {
        if (!location.href.includes('houseofworktops.co')) return
        // _this.toggleClass("active-progress").addClass("finished");
        $('#cart > button').html('<img src = "catalog/view/theme/houseofworktops/image/svg-icons/cart.svg" title = "" alt = "" class= "img-responsive mb-1" width = "20" loading = "lazy"/><div class="d-xl-inline" ><span class="px-1">Cart</span><span id="cart-total" class="badge badge-danger rounded-circle"> ' + json['total'] + '</span></div></span>');
        $('#cart > ul').load('index.php?route=common/cart/info ul li');
        $('#nav-cart-mobile ul').load('index.php?route=common/cart_menu/info ul li');
        lavMoveToStep('first');
      }, 1000);
    } catch (err) {
      const errorMessage = err?.message || err.toString() || String(err);
      // pushDataLayer('exp_pdp_cs_api_error', 'addToCart', 'error', this.worktops.map(w => w.length + 'x' + w.width + 'x' + w.thickness + 'x' + w.qty).join('|'), errorMessage);
      console.error(err)
      alert('Failed to add to cart: ' + errorMessage);
    }
  }

  function addToCartWrapper(cb) {
    waitFor('#added-modal-with-accessories-2.show', () => {
      const cutting = _$('#added-modal-with-accessories-2 .subtotal-bottom')?.dataset.cutting || 0;
      if (cutting && cutting > 0) {
        delete _$('#added-modal-with-accessories-2 .subtotal-bottom').dataset.cutting;
        _$('.lav-atc .subtotal-bottom .row-subtotal .align-items-sm-baseline').insertAdjacentHTML('afterend', `<div class="lav-cutting-cost">+ ${formatPrice(cutting, true)} cutting </div>`);
      }
    })
    const modal = document.getElementById('select-size-model');
    const continueBtn = modal.querySelector('.lavm-btn-continue');

    if (!modal.querySelector('.select-size-row.selected')) {
      alert('Please select at least one worktop size to continue');
      return;
    }

    continueBtn.classList.add('btncart-animation-fill');

    const originalText = continueBtn.textContent.trim();
    continueBtn.classList.add('loading');
    setContinueLabel(continueBtn, 'Adding...');
    modal.querySelectorAll('.select-size-row, .lavm-oiling-card').forEach(function (r) { r.style.pointerEvents = 'none'; });

    cb();
    
    const isAccessoryAdd = modal.getAttribute('data-type') === 'accessory';
    const confirmModal = document.getElementById('added-modal-with-accessories-2');
    if (confirmModal) {
      const col1 = confirmModal.querySelector('.subtotal-bottom .footer-buttons .col-6:nth-child(1) h6');
      const col2 = confirmModal.querySelector('.subtotal-bottom .footer-buttons .col-6:nth-child(2) h6');
      confirmModal.classList.toggle('lav-atc-accessory', isAccessoryAdd);
      if (col1) col1.textContent = isAccessoryAdd ? 'View Cart' : 'Choose Accessories';
      if (col2) col2.textContent = isAccessoryAdd ? 'Checkout' : 'View Cart';
    }

    let pendingRestoreTimeout = setTimeout(function () {
      pendingRestoreTimeout = null;
      continueBtn.classList.remove('loading', 'btncart-animation-fill');
      setContinueLabel(continueBtn, originalText);
      modal.querySelectorAll('.select-size-row, .lavm-oiling-card').forEach(function (r) { r.style.pointerEvents = ''; });
    }, 8500);
  }

  function setContinueLabel(btn, text) {
    if (!btn) return;
    var label = btn.querySelector('.lavm-btn-continue-label');
    if (label) {
      label.textContent = text;
    } else {
      btn.textContent = text;
    }
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
      if (_$('#select-size-model .lav-tab-cut .lavm-tab-num')) {
        _$('#select-size-model .lav-tab-cut .lavm-tab-num').innerHTML = '2.'
      }
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
      _$$('.added-modal-accessories .variants-container>div').forEach(el => { 
        // _$('.confirm-popup-details > .mb-0', el).insertAdjacentElement('beforeend', _$('.quantity-display', el).closest('.col'));

        // _$('.confirm-popup-details > .mb-0 > .col-5', el).classList.add('lav-product-price');
        // _$('.confirm-oiling-addon', el).insertAdjacentElement('beforebegin', _$('.lav-product-price', el))
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
      'backArrow': /* html */ `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="11" viewBox="0 0 16 11" fill="none">
          <path d="M14.7 5.85479C15.0866 5.85479 15.4 5.54138 15.4 5.15479C15.4 4.76819 15.0866 4.45479 14.7 4.45479V5.15479V5.85479ZM0.204976 4.65981C-0.0683905 4.93318 -0.0683905 5.37639 0.204976 5.64976L4.65975 10.1045C4.93312 10.3779 5.37633 10.3779 5.6497 10.1045C5.92307 9.83117 5.92307 9.38795 5.6497 9.11458L1.6899 5.15479L5.6497 1.19499C5.92307 0.92162 5.92307 0.478405 5.6497 0.205038C5.37633 -0.0683293 4.93312 -0.0683293 4.65975 0.205038L0.204976 4.65981ZM14.7 5.15479V4.45479H0.699951V5.15479V5.85479H14.7V5.15479Z" fill="black"/>
        </svg>
      `,
      'cutting-icon': /* html */ `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <g clip-path="url(#clip0_3372_8720)">
            <path d="M10.0002 21.9995C9.46981 21.9995 8.9611 21.7888 8.58603 21.4137C8.21096 21.0387 8.00024 20.5299 8.00024 19.9995" stroke="#1F8964" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14.0002 1.99951C14.5307 1.99951 15.0394 2.21023 15.4145 2.5853C15.7895 2.96037 16.0002 3.46908 16.0002 3.99951" stroke="#1F8964" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.0002 22.0005H14.0002" stroke="#1F8964" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2.00024 9.99951V7.99951" stroke="#1F8964" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2.00024 3.99951C2.00024 3.46908 2.21096 2.96037 2.58603 2.5853C2.9611 2.21023 3.46981 1.99951 4.00024 1.99951" stroke="#1F8964" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M20.0002 7.99951C20.5307 7.99951 21.0394 8.21023 21.4145 8.5853C21.7895 8.96037 22.0002 9.46908 22.0002 9.99951" stroke="#1F8964" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21.9998 13.9995V15.9995" stroke="#1F8964" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M22.0002 19.9995C22.0002 20.5299 21.7895 21.0387 21.4145 21.4137C21.0394 21.7888 20.5307 21.9995 20.0002 21.9995" stroke="#1F8964" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4.00024 15.9995C3.46981 15.9995 2.9611 15.7888 2.58603 15.4137C2.21096 15.0387 2.00024 14.5299 2.00024 13.9995" stroke="#1F8964" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8.00024 9.99951C8.00024 9.46908 8.21096 8.96037 8.58603 8.5853C8.9611 8.21023 9.46981 7.99951 10.0002 7.99951H15.0002C15.2655 7.99951 15.5198 8.10487 15.7074 8.29241C15.8949 8.47994 16.0002 8.7343 16.0002 8.99951V13.9995C16.0002 14.5299 15.7895 15.0387 15.4145 15.4137C15.0394 15.7888 14.5307 15.9995 14.0002 15.9995H9.00024C8.73503 15.9995 8.48067 15.8942 8.29314 15.7066C8.1056 15.5191 8.00024 15.2647 8.00024 14.9995V9.99951Z" stroke="#1F8964" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8.00024 1.99951H10.0002" stroke="#1F8964" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          <defs>
            <clipPath id="clip0_3372_8720">
              <rect width="24" height="24" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      `,
      'oiling-icon': /* html */ `
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
          <g clip-path="url(#clip0_3372_8781)">
            <path d="M21.7022 14.0047C21.5347 13.5477 21.3245 13.1075 21.0746 12.6899L15.3696 4.21986C14.8796 3.4907 13.8681 3.28303 13.1109 3.7567C12.9208 3.87596 12.7579 4.03374 12.6326 4.21986L6.92407 12.6899C4.94657 16.0009 5.71657 20.2044 8.75224 22.6602C10.407 23.9912 12.5066 24.642 14.6241 24.4802" stroke="#1F8964" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18.6667 22.1667H25.6667" stroke="#1F8964" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M22.1667 18.6667V25.6667" stroke="#1F8964" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          <defs>
            <clipPath id="clip0_3372_8781">
              <rect width="28" height="28" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      `
    }

    return svgObj[name]
  }
})()