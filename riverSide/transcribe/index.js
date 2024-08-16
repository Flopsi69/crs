;(function () {
  console.debug('*** Experiment started ***')

  // Config for Experiment
  const config = {
    // dir: 'http://127.0.0.1:5500/riverSide/transcribe',
    dir: 'https://flopsi69.github.io/crs/riverSide/transcribe',
    clarity: ['set', 'transcriptions', 'variant_1'],
    debug: false
  }

  // const orig = console.log
  // console.log = function (...args) {
  //   orig.apply(console, ['Debug:', ...args])
  // }

  // Styles for Experiment
  const styles = /* css */ `
    @media(max-width: 991px) {
      .lav-sticky, .lav-options {
        display: none!important;
      }
    }
    @media(min-width: 992px) {
      .transcription-bottom-badge {
        display: none;
      }
      .lav-sticky {
        position: fixed;
        z-index: 20;
        max-width: 445px;
        width: 100%;
        bottom: 40px;
        right: 40px;
        border-radius: 12px;
        background: #FFF;
        color: #1D1D1D;
        font-size: 16px;
        font-weight: 700;
        line-height: 26px;
        transition: .5s;
        border: 1px solid #fff;
      }
      .lav-sticky.active {
        // top: 60px;
      }
      .lav-collapse {
        display: flex;
        align-items: center;
        gap: 20px;
        transition: .5s;
        padding: 30px 40px;
        cursor: pointer;
        transition: .3s;
      }
      .active .lav-collapse {
        transform: scale(0);
        padding: 0;
        height: 0;
        transition: none;
      }
      .lav-collapse__image {
        flex-shrink: 0;
        line-height: 0;
      }
      .lav-sticky__toggler {
        position: absolute;
        top: 0;
        right: 40px;
        box-sizing: content-box;
        height: 34px;
        width: 34px;
        transform: translateY(-60%);
        z-index: 1;
        cursor: pointer;
        border-radius: 40px;
        border: 8px solid #1D1D1D;
        background: #8F79F7;
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 1;
        transition: .3s;
      }
      .lav-sticky__toggler svg {
        transition: .5s;
      }
      .active .lav-sticky__toggler svg {
        transform: rotate(180deg);
      }
      @media(hover:hover) {
        .lav-sticky__toggler:hover {
          transform: translateY(-60%) scale(1.1);
        }
      }

      .lav-sticky__plate {
        overflow: hidden;
        height: 100%;
      }

      .lav-expand {
        transform: scale(0);
        height: 0;
        transition: 0.3s;
      }
      .active .lav-expand {
        transform: scale(1);
        height: auto;
      }
      .lav-expand__banner {
        border-radius: 12px 12px 0px 0px;
        background: #212121;
        padding-top: 30px;
        line-height: 0;
      }
      .lav-expand__logo {
        padding: 0 40px;
      }
      .lav-expand__audio {
        margin-top: 20px;
      }
      .lav-expand__info {
        padding: 25px 40px 30px;
      }
      .lav-expand__title {
        color: #1D1D1D;
        font-size: 16px;
        font-weight: 700;
        line-height: 26px;
      }
      .lav-expand__list {
        display: grid;
        gap: 24px;
        margin-top: 24px;
        color: #1D1D1D;
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
      }
      .lav-expand__item {
        position: relative;
        padding-left: 16px;
      }
      .lav-expand__item:before {
        content: '';
        position: absolute;
        left: 0;
        top: 9px;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: #9671FF;
      }
      .lav-expand__button {
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        border-radius: 4px;
        background: #9671FF;
        color: #FFF;
        font-size: 16px;
        font-weight: 600;
        line-height: 17px;
        margin-top: 36px;
        cursor: pointer;
        transition: .3s;
      }
      .lav-expand__button:hover {
        background: #d5c7ff;
      }
      .lav-expand__caption {
        color: #1D1D1D;
        text-align: center;
        font-size: 12px;
        font-weight: 400;
        line-height: 22px;
        margin-top: 10px;
      }
      @media (min-width: 1200px) {
        .transcription-section {
          align-items: flex-start;
        }
        .bubble-wrapper.top-left {
          left: 3.5vw;
        }
        .bubble-wrapper.top-right {
          right: initial;
          left: 50vw;
        }
        .bubble-wrapper.bottom-left {
          left: 2vw;
        }
        .bubble-wrapper.bottom-right {
          right: initial;
          left: 38vw;
        }
      }

      #transcription-section {
        background: url('${config.dir}/img/bg-audio.png') no-repeat right top;
      }
      @media(max-height: 650px) {
        #transcription-section {
          background-position: right bottom;
        }
      }
      .transcription-h2 {
        font-size: 86px;
        line-height: 1;
      }
      @media(min-height: 1150px) {
        .transcription-h2 {
          font-size: 108px;
        }
      }
      @media(max-height: 750px) {
        .transcription-h2 {
          font-size: 54px;
        }
      }
      .bubbles-wrapper {
        opacity: 0.5;
      }
      #drop-zone {
        // display: none;
      }

      .transcription-section.step2-active {
        align-items: flex-start;
      }
      .step2-active .step2-content {
        align-items: flex-start;
      }
      .ts-form {
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 725px;
        grid-row-gap: 24px;
        grid-column-gap: 13px;
        margin-top: 28px;
      }
      .step2-active:not(.step3-active) .basic-input-wrapper.file-progress {
        padding-top: 11px;
        border-radius: 4px;
        background: #282828;
      }
      .step2-active:not(.step3-active) .basic-input-wrapper.basic-input-wrapper.search-lang {
        padding-top: 13px;
        padding-bottom: 13px;
        border-radius: 4px;
        background: #282828;
      }
      .step2-active:not(.step3-active) .file-progress-inner {
        padding-bottom: 11px;
      }
      .ts-form>div:not([class]) {
        display: none;
      }
      .verification-content {
        grid-column: span 2;
      }
      #start-transcribing {
        grid-column: span 2;
        padding: 11px 24px;
        border-radius: 4px;
        transition: .3s;
      }
      #start-transcribing:disabled { 
        background: #9671FF;
        color: #fff;
        opacity: .3;
      }
      .lav-options {
        grid-column: span 2;
      }
      .step3-active .lav-options {
        display: none;
      }
      .lav-options__caption {
        color: #8E9095;
        font-size: 14px;
        font-weight: 300;
        line-height: 22px;
      }
      .lav-options__list {
        margin-top: 16px;
        display: flex;
        flex-wrap: wrap;
        gap: 13px;
      }
      .lav-option {
        position: relative;
        color: #8E9095;
        font-size: 14px;
        font-weight: 300;
        line-height: 22px;
        padding: 14px 22px 14px 42px;
        border-radius: 4px;
        background: #282828;
        flex: 1;
        cursor: pointer;
        transition: .3s;
      }
      @media(hover:hover) {
        .lav-option:not(.active):hover {
          opacity: .7;
        }
      }
      .lav-option:before {
        content: '';
        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
        width: 16px;
        height: 16px;
        border-radius: 50%;
        border: 1px solid #888;
        transition: border .3s;
      }
      .lav-option.active:before {
        background: #9671FF;
        background-size: 10px;
        border-color: #9671FF;
      }
      .custom-checkbox-label .checkmark:after {
        background: url('${config.dir}/img/check.svg') no-repeat center;
      }
      .verification-content .basic-input-wrapper {
        background: none;
        padding: 0;
      }
      .verification-content .custom-checkbox-label {
        font-size: 14px;
        font-style: normal;
        font-weight: 300;
        line-height: 22px;
        padding-left: 30px;
        cursor: pointer;
        transition: .2s;
      }
      @media(hover:hover) {
        .verification-content .custom-checkbox-label:hover {
          opacity: .7;
        }
      }
      .verification-content .checkmark {
        width: 18px;
        height: 18px;
        top: 2px;
        background: none;
        border: 1px solid #888;
        border-radius: 2px;
      }
      .custom-checkbox-label input:checked ~ .checkmark {
        background-color: #875EFF;
        border-color: #875EFF;
      }
      .custom-checkbox-label .checkmark:after {
        left: 1px;
        top: 1px;
      }
      .verification-content .spinner-wrapper:after {
        width: 24px;
        height: 24px;
        left: -4px;
        top: -4px;
        content: '';
        background: url('${config.dir}/img/spinner.svg') center no-repeat;
        background-size: 13px;
      }

      .transcription-content.step3-content {
        top: 95px;
        left: 115px;
        width: 725px;
        z-index: 5;
      }
      .step5-active .transcription-content.step3-content {
        z-index: 5;
      }
      .transcription-content.step3-content .tr-ready-content {
        width: 100%;
      }
      .step5-active .transcription-content.step4-content {
        left: 115px;
        right: initial;
        max-width: 725px;
        width: 100%;
        top: 330px;
      }
      .transcription-content.step3-content .tr-ready-content > div:first-child {
        color: #FFF;
        font-size: 14px;
        font-weight: 300;
        line-height: 22px; 
      }
      .transcription-content.step3-content .ts-ready-h3 {
        color: #FAFAFA;
        font-size: 86px;
        font-weight: 800;
        line-height: 94px; 
        margin-bottom: 18px;
      }
      .transcription-content.step3-content .ts-dropdown {
        margin-top: 24px;
        display: inline-block;
        width: auto;
      }
      .transcription-content.step3-content .ts-dropdown-toggle {
        margin: 0;
        min-height: 48px;
        border-radius: 4px;
        background: #DFFF84;
        color: #000;
        font-size: 14px;
        font-weight: 700;
        line-height: 17px;
      }
      .transcription-content.step3-content .ts-dropdown-list.w--open {
        margin-top: 2px;
        border: 2px solid #dfff84;
        width: 230px;
      }
      .transcription-content.step3-content .ts-dropdown-list.w--open .ts-dropdown-link {
        font-size: 14px;
        padding: 7px 5px;
        line-height: 1.4;
      }
      .transcription-content.step3-content .ts-dropdown-icon {
        display: none;
      }
      .transcription-content.step3-content .transcribe-other-btn {
        display: inline-flex;
        padding: 10px 17px;
        color: #FFF;
        font-size: 14px;
        font-weight: 600;
        line-height: 17px;
        min-height: 48px;
        background: none;
        gap: 10px;
        margin-left: 16px;
        transition: .3s;
        cursor: pointer;
      }
      .transcription-content.step3-content .transcribe-other-btn img {
        width: 20px;
        height: 20px;
      }
      @media(hover:hover) {
        .transcription-content.step3-content .transcribe-other-btn:hover {
          background: #2d2d2d;
        }
      }
      .step5-active .copy-text-btn {
        color: #FFF;
        font-size: 14px;
        font-weight: 600;
        line-height: 17px; 
        padding: 12px 32px;
        border-radius: 4px;
        min-height: 50px;
      }
      #fully-transcribed-content-wrapper {
        margin-top: 24px;
        height: 77vh!important;
      }
      #fully-transcribed-content .tr-copy-text {
        color: #DBDBDB;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        border-radius: 10px 10px 10px 4px;
        padding: 16px 26px;
      }
      .transcription-content.step4-content, .transcribed-content-wrapper {
        max-width: 725px;
      }
      .transcription-info-wrapper {
        display: none;
      }
      .tr-popup-image-wrapper {
        height: 310px;
        overflow: hidden;
      }
      .tr-popup-logo {
        opacity: .7;
      }
      .tr-popup-heading {
        color: #FAFAFA;
        font-size: 24px;
        font-weight: 800;
        line-height: 32px;
        letter-spacing: 0.2px;
      }
      .tr-popup-features {
        margin-top: 32px;
        margin-bottom: 32px;
      }
      .tr-popup-content {
        padding: 40px 40px 30px;
      }
      .tr-button-wrapper .tr-button {
        max-width: 365px;
        width: 100%;
        text-align: center;
        padding-top: 11px;
        padding-bottom: 11px;
      }
      .lav-popup-caption {
        margin-top: 12px;
        color: #8E9095;
        text-align: center;
        font-size: 12px;
        font-weight: 300;
        line-height: 22px;
      }
      .tr-popup-content-wrapper {
        max-height: 100vh;
        overflow-y: auto;
      }
      .step5-active .lav-progress {
        display: none;
      }
      .lav-progress__title {
        color: #FAFAFA;
        font-size: 86px;
        font-weight: 800;
        line-height: 94px;
      }
      .lav-progress__caption {
        color: #FFF;
        font-size: 14px;
        font-weight: 300;
        line-height: 22px; 
        margin-top: 18px;
        max-width: 600px;
      }
      .lav-progress__label {
        color: #8E9095;
        font-size: 14px;
        font-weight: 300;
        line-height: 22px;
        margin-top: 40px;
        margin-bottom: 16px;
      }
      @media(max-height: 720px) {
        .lav-progress__label, .lav-preview {
          margin-top: 30px;
        }
      }
      .tr-ready-heading {
        background: none;
      }
      .transcription-content.step4-content {
        right: initial;
        left: 115px;
      }
      .lav-preview {
        margin-top: 70px;
      }
      .step5-active .lav-preview, .step5-active .lav-progress__label {
        display: none;
      }
      .lav-preview__caption {
        color: #8E9095;
        font-size: 14px;
        font-weight: 300;
        line-height: 22px
      }
      .lav-preview__progress {
        margin-top: 12px;
      }
      .step4-active:not(.step5-active) .tcw-overlay.tcw-active {
        top: 300px;
      }
      .step4-active:not(.step5-active) .tr-ready-heading .file-progress-linfo {
        border-radius: 4px;
        background: #282828;
        padding: 11px 12px;
        padding-right: 30px;
        min-width: 360px;
      }
      .transcribed-content-wrapper {
        height: 75vh !important;
        margin-top: 40px;
      }
      .transcription-heading-link {
        font-size: 14px;
      }
      .transcription-heading-link .t-heading-small {
        font-size: 12px;
      }
      .custom-file-upload-icon {
        width: 32px;
        height: 32px;
        min-width: 32px;
      }
      .custom-file-upload {
        font-size: 16px;
      }
      .upload-main-wrapper {
        margin-top: 5px;
      }
      .lav-expand__audio img {
        transition: .3s;
      }
      @media (max-height: 590px) {
        .upload-main-wrapper {
          width: auto;
          height: auto;
        }
      }
      .transcription-h3.step2-title {
        font-size: 86px;
      }
      @media(max-height: 770px) {
        .lav-sticky {
          bottom: 20px;
        }
        .lav-expand__list {
          gap: 15px;
        }
        .lav-expand__button {
          margin-top: 20px;
        }
        .lav-expand__info {
          padding-top: 20px;
          padding-bottom: 20px;
        }
        .lav-expand__list {
          margin-top: 16px;
        }
        .lav-expand__audio {
          text-align: center;
          overflow: hidden;
        }
        .lav-expand__audio img {
          margin-bottom: -20px;
        }
      }
      @media(max-height: 660px) {
        .lav-expand__audio img {
          height: 140px;
          margin-bottom: -40px;
        }
        .lav-expand__banner {
          padding: 20px;
        }
        .lav-expand__list {
          gap: 12px;
        }
      }
      @media(max-height: 610px) {
        .lav-expand__audio {
          display: none;
        }
      }
    }
  `

  const stylesEl = document.createElement('style')
  stylesEl.classList.add('exp-styles')
  stylesEl.innerHTML = styles

  // *** Logic *** //
  initExp()

  async function initExp() {
    await waitFor(() => document.head && document.body, false, { ms: 30 })

    if (!location.href.includes('/transcription')) return
    document.body.appendChild(stylesEl)

    console.debug('** InitExp **')

    waitFor('.transcription-section', () => {
      addSticky()
      setOptions()
      handleProgress()
      handleFinishStep()
      handlePopup()
      addEvents()
    })
  }

  function addEvents() {
    waitFor('.tr-popup-content-wrapper', () => {
      visibilityEvent('.tr-popup-content-wrapper', () => {
        pushDataLayer(
          'exp_blogcontentsctas_visibility_02',
          'Try Riverside for free',
          'Visibility',
          'Pop up'
        )
      })
    })
    document.addEventListener('click', (e) => {
      // console.log('click', e.target)
      // if (e.target.id === 'w-dropdown-toggle-3') {
      //   pushDataLayer(
      //     'exp_blogcontentsctas_button_03',
      //     'Try Riverside for Free',
      //     'Button',
      //     'Sticky block'
      //   )
      // }

      if (e.target.closest('.tr-popup-close')) {
        pushDataLayer(
          'exp_blogcontentsctas_button_05',
          'Close',
          'Button',
          'Pop up'
        )
      }

      if (e.target.closest('.tr-button')) {
        pushDataLayer(
          'exp_blogcontentsctas_button_06',
          'Try Riverside for free',
          'Button',
          'Pop up'
        )
      }
    })
  }

  function handleProgress() {
    const markup = /*html*/ `
      <div class='lav-progress'>
        <div class='lav-progress__title'>Please Wait...</div>
        <div class='lav-progress__caption'>We're working on it! Transcription times can vary based on file size, content length, and how busy our servers are. Thanks for your patience!</div>
      </div>
    `

    $('#ready-wrapper').insertAdjacentHTML('beforebegin', markup)

    $('.tr-ready-heading').insertAdjacentHTML(
      'beforebegin',
      /* html */ `<div class="lav-progress__label">What would you like to transcribe:</div>`
    )

    // $('#transcribed-content-wrapper').insertAdjacentHTML(
    //   'beforebegin',
    //   /* html */ `
    //   <div class='lav-preview'>
    //     <div class='lav-preview__caption'>Riverside is transcribing...</div>
    //     <div class='lav-preview__progress'>
    //       <img src='${config.dir}/img/progress.png' alt='Transcription progress' />
    //     </div>
    //   </div>
    // `
    // )

    $('#start-transcribing').addEventListener('click', () => {
      pushDataLayer(
        'exp_blogcontentsctas_button_04',
        $('.lav-option.active')?.textContent.trim() || 'Empty',
        'Button',
        'CTA start transcribing'
      )
      fillDynamicCopy()
    })
  }

  function fillDynamicCopy() {
    if (!$('.lav-sticky').classList.contains('active')) {
      $('.lav-sticky').classList.add('active')
      pushDataLayer(
        'exp_blogcontentsctas_visibility_01',
        'Explore more features',
        'Visibility',
        'Sticky block'
      )
    }

    const configText = {
      podcasts: {
        title:
          'Transcribe, record, edit your Podcast seamlessly with Riverside',
        list: [
          'Starts transcribing as soon as you’re done recording or uploading, so no need to wait long',
          'Record in up to 4K video and 48kHz audio',
          'Add speaker labels in seconds with our AI-powered Speaker Detective.',
          'Transcribe, clip, and edit your Podcast in seconds'
        ]
      },
      interview: {
        title:
          'Transcribe, record, edit your Interview seamlessly with Riverside',
        list: [
          'Starts transcribing as soon as you’re done recording or uploading, so no need to wait long',
          'Record in up to 4K video and 48kHz audio',
          'Add speaker labels in seconds with our AI-powered Speaker Detective.',
          'Transcribe, clip, and edit your Interview in seconds'
        ]
      },
      webinar: {
        title:
          'Transcribe, record, edit your Webinar seamlessly with Riverside',
        list: [
          'Starts transcribing as soon as you’re done recording or uploading, so no need to wait long',
          'Record in up to 4K video and 48kHz audio',
          'Add speaker labels in seconds with our AI-powered Speaker Detective.',
          'Transcribe, clip, and edit your Webinar in seconds'
        ]
      },
      keynote: {
        title:
          'Transcribe, record, edit your Keynote seamlessly with Riverside',
        list: [
          'Starts transcribing as soon as you’re done recording or uploading, so no need to wait long',
          'Record in up to 4K video and 48kHz audio',
          'Add speaker labels in seconds with our AI-powered Speaker Detective.',
          'Transcribe, clip, and edit your Keynote in seconds'
        ]
      },
      other: {
        title:
          'Transcribe, record and edit your Audio or Video seamlessly with Riverside',
        list: [
          'Starts transcribing as soon as you’re done recording or uploading, so no need to wait long',
          'Record in up to 4K video and 48kHz audio',
          'Add speaker labels in seconds with our AI-powered Speaker Detective.',
          'Transcribe, clip, and edit your audio or video in seconds'
        ]
      }
    }

    const optionValue =
      $('.lav-option.active')?.textContent.trim().toLowerCase() || 'other'

    console.log('option', optionValue)

    $('.lav-expand__title').textContent = configText[optionValue].title

    $$('.lav-expand__item').forEach((el, i) => {
      el.textContent = configText[optionValue].list[i]
    })

    $('.tr-popup-heading').textContent = configText[optionValue].title

    $$('.tr-popup-feature div').forEach((el, i) => {
      if (i === 0 || i === 1) {
        el.textContent = configText[optionValue].list[i]
      }

      if (i === 2) {
        el.textContent = configText[optionValue].list[3]
      }
    })
  }

  function handlePopup() {
    $('.tr-popup-heading').textContent =
      'Transcribe, record, edit your Podcast seamlessly with Riverside'

    $$('.tr-popup-feature div').forEach((el, i) => {
      if (i === 0) {
        el.textContent =
          'Starts transcribing as soon as you’re done recording or uploading, so no need to wait long'
      }

      if (i === 1) {
        el.textContent =
          'Add speaker labels in seconds with our AI-powered Speaker Detective.'
      }

      if (i === 2) {
        el.textContent = 'Transcribe, clip, and edit your Podcast in seconds'
      }
    })

    $('.tr-button-wrapper a').textContent = 'Try Riverside for Free'

    $('.tr-button-wrapper').insertAdjacentHTML(
      'afterend',
      '<div class="lav-popup-caption">*No credit card required</div>'
    )
  }

  function setOptions() {
    const markup = /*html*/ `
      <div class='lav-options'>
        <div class='lav-options__caption'>What would you like to transcribe:</div>
        <div class='lav-options__list'>
          <div class='lav-option'>Podcasts</div>
          <div class='lav-option'>Interview</div>
          <div class='lav-option'>Webinar</div>
          <div class='lav-option'>Keynote</div>
          <div class='lav-option'>Other</div>
        </div>
      </div>
    `

    $('.verification-content').insertAdjacentHTML('beforebegin', markup)

    $(
      '.verification-content .custom-checkbox-label'
    ).childNodes[0].textContent = $(
      '.verification-content .custom-checkbox-label'
    ).childNodes[0].textContent.replace('human', 'human*')

    $$('.lav-option').forEach((el, i) => {
      el.addEventListener('click', () => {
        if (el.classList.contains('active')) {
          el.classList.remove('active')
          return
        }

        $$('.lav-option').forEach((el) => el.classList.remove('active'))
        el.classList.add('active')
      })
    })
  }

  function addSticky() {
    const markup = /*html*/ `
      <div class='lav-sticky'>
        <div class='lav-sticky__toggler'>
          ${getSvg('chevronUp')}
        </div>
        <div class='lav-sticky__plate'>
          <div class='lav-collapse'>
            <div class='lav-collapse__image'>
              ${getSvg('logo')}
            </div>
            <div class='lav-collapse__text'>Explore more features for transcribing, recording, and editing with Riverside</div>
          </div>

          <div class='lav-expand'>
            <div class='lav-expand__banner'>
              <div class='lav-expand__logo'>
                <img src='${config.dir}/img/logo.svg' alt='Riverside logo' />
              </div>
      
              <div class='lav-expand__audio'>
                <img src='${
                  config.dir
                }/img/audio-placeholder.png' alt='Riverside placeholder audio' />
              </div>
            </div>

            <div class='lav-expand__info'>
              <div class='lav-expand__title'>Transcribe, record and edit your Audio or Video seamlessly with Riverside</div>

              <div class='lav-expand__list'>
                <div class='lav-expand__item'>Starts transcribing as soon as you’re done recording or uploading, so no need to wait long</div>
                <div class='lav-expand__item'>Record in up to 4K video and 48kHz audio</div>
                <div class='lav-expand__item'>Add speaker labels in seconds with our AI-powered Speaker Detective.</div>
                <div class='lav-expand__item'>Transcribe, clip, and edit your video in seconds</div>
              </div>

              <div class='lav-expand__button'>
                Try Riverside for Free ${getSvg('link')}
              </div>

              <div class='lav-expand__caption'>*A new tab will open without interrupting transcription</div>
            </div>
          </div>
        </div>
      </div>
    `

    $('.transcription-bottom-badge').insertAdjacentHTML('afterend', markup)

    $('.lav-collapse').addEventListener('click', function (e) {
      $('.lav-sticky').classList.add('active')
      pushDataLayer(
        'exp_blogcontentsctas_button_01',
        'Explore more features Open',
        'Button',
        'Sticky block'
      )
      pushDataLayer(
        'exp_blogcontentsctas_visibility_01',
        'Explore more features',
        'Visibility',
        'Sticky block'
      )
    })

    $('.lav-sticky__toggler').addEventListener('click', () => {
      // const expandHeight = $('.lav-expand').scrollHeight
      if ($('.lav-sticky').classList.contains('active')) {
        pushDataLayer(
          'exp_blogcontentsctas_button_02',
          'Explore more features Close',
          'Button',
          'Sticky block'
        )
      } else {
        pushDataLayer(
          'exp_blogcontentsctas_button_01',
          'Explore more features Open',
          'Button',
          'Sticky block'
        )
        pushDataLayer(
          'exp_blogcontentsctas_visibility_01',
          'Explore more features',
          'Visibility',
          'Sticky block'
        )
      }

      $('.lav-sticky').classList.toggle('active')
    })

    // TODO: ask
    $('.lav-expand__button').addEventListener('click', (e) => {
      e.preventDefault()
      pushDataLayer(
        'exp_blogcontentsctas_button_03',
        'Try Riverside for Free',
        'Button',
        'Sticky block'
      )
      window.open('https://riverside.fm/register', '_blank')
    })
  }

  function handleFinishStep() {
    $(
      '.transcription-content.step3-content .transcribe-other-btn'
    ).insertAdjacentHTML(
      'beforeend',
      `<img src='${config.dir}/img/refresh.png'>`
    )
  }

  // *** Utils *** //
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

      $('.lav-modal')?.classList.remove('active')

      if (typeof cb === 'function') cb()

      setTimeout(() => {
        $('.lav-modal__inner.active')?.classList.remove('active')
      }, 400)
    }

    static addStyles() {
      const styles = `
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
      threshold: 0.3,
      ...customConfig,
      timer: null
    }
    initIntersection(
      el,
      ({ isIntersecting, target }, observer) => {
        // console.log(target, isIntersecting);
        if (isIntersecting) {
          if (isElementInViewport(target)) {
            cb()
            observer.disconnect()
          }
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
      refresh: `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <g clip-path="url(#clip0_2122_44005)">
            <mask id="mask0_2122_44005" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
              <path d="M0 1.90735e-06H20V20H0V1.90735e-06Z" fill="white"/>
            </mask>
            <g mask="url(#mask0_2122_44005)">
              <path d="M20 2.1875H14.5312V7.65625" stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
              <path d="M14.5313 2.1875C17.3307 3.80914 19.2188 6.53195 19.2188 10C19.2188 15.1777 15.1777 19.2188 10 19.2188C6.06833 19.2188 2.79203 16.8886 1.44287 13.5" stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
              <path d="M0.78125 10C0.78125 5.87773 3.34275 2.47595 7 1.26038" stroke="white" stroke-width="1.4" stroke-miterlimit="10" stroke-dasharray="106.67 53.33"/>
            </g>
          </g>
          <defs>
            <clipPath id="clip0_2122_44005">
              <rect width="20" height="20" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      `,
      link: `
      <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
        <path d="M10.25 9.00001L16.4 2.85001" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16.9999 5.85V2.25H13.3999" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8.75 2.25H7.25C3.5 2.25 2 3.75 2 7.5V12C2 15.75 3.5 17.25 7.25 17.25H11.75C15.5 17.25 17 15.75 17 12V10.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      `,
      chevronUp: `
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
        <path d="M14 6.97856C14 7.25926 13.9062 7.50877 13.7186 7.69591C13.3434 8.10136 12.6868 8.10136 12.3116 7.69591L6.99609 2.42495L1.71189 7.69591C1.33668 8.10136 0.680067 8.10136 0.304858 7.69591C-0.101619 7.32164 -0.101619 6.66667 0.304858 6.2924L6.30821 0.304093C6.68342 -0.101364 7.34003 -0.101364 7.71524 0.304093L13.7186 6.2924C13.9062 6.47953 14 6.72904 14 6.97856Z" fill="white"/>
        </svg>
      `,
      logo: `<svg xmlns="http://www.w3.org/2000/svg" width="33" height="34" viewBox="0 0 33 34" fill="none">
      <path d="M29.062 0.5H3.93795C1.75896 0.5 0 2.25896 0 4.43795V29.562C0 31.7411 1.75896 33.5 3.93795 33.5H29.062C31.2411 33.5 33 31.7411 33 29.562V4.43795C33 2.25896 31.2411 0.5 29.062 0.5ZM24.9403 17.2887C24.6778 18.0501 24.2315 19.179 23.5752 20.2423C22.8794 21.3842 22.105 22.1718 21.2912 22.5656C20.8711 22.7757 20.438 22.8806 20.0047 22.8806C19.8341 22.8806 19.6635 22.8675 19.5059 22.8282C18.9021 22.71 18.3246 22.4081 17.7995 21.8962C16.8806 21.0036 16.0931 19.494 15.3711 17.2625C14.6491 15.0179 13.9928 14.0728 13.5728 13.6659C13.3628 13.469 13.2315 13.4165 13.1659 13.4033C13.1265 13.4033 13.0609 13.4033 12.9296 13.4558C12.562 13.6265 12.1026 14.1253 11.6563 14.8341C11.2231 15.5167 10.8031 16.383 10.4749 17.302C10.2387 17.9582 9.51671 18.2995 8.84725 18.0633C8.51909 17.945 8.25656 17.722 8.11217 17.4069C7.96778 17.1051 7.95465 16.7638 8.05966 16.4486C8.33532 15.6873 8.80787 14.5584 9.47733 13.4952C10.1993 12.3532 10.9869 11.5788 11.8138 11.185C12.4045 10.9093 13.0084 10.8174 13.6122 10.9224C14.2291 11.0274 14.8067 11.3425 15.3318 11.8413C16.2638 12.7339 17.0644 14.2566 17.7864 16.4881C18.5083 18.7326 19.1516 19.6909 19.5716 20.0847C19.7816 20.2948 19.9129 20.3341 19.9522 20.3341C19.9785 20.3341 20.031 20.3473 20.1491 20.2816C20.5036 20.1109 20.9499 19.6122 21.37 18.9165C21.7899 18.2339 22.1837 17.3545 22.4989 16.4486C22.722 15.7923 23.4439 15.438 24.1134 15.661C24.4415 15.7661 24.7041 16.0024 24.8615 16.3043C25.0059 16.6062 25.0322 16.9475 24.9272 17.2625L24.9403 17.2887Z" fill="#1D1D1D"/>
    </svg>`
    }

    return svgObj[name]
  }
})()
