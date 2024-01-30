(async function () {
  if (!location.href.includes('survey/')) return false;

  console.debug('*** Experiment started ***');

  await waitFor(() => document.head && document.body, false, { ms: 50 });

  // Config for Experiment
  const config = {
    dir: 'https://flopsi69.github.io/crs/treblehealth/survey',
    // dir: 'http://127.0.0.1:5500/treblehealth/survey',
    clarity: ['set', 'exp_new_surv_flow', 'variant_1'],
    debug: false,
  };

  // const orig = console.log;
  // console.log = function (...args) {
  //   orig.apply(console, ['Debug:', ...args]);
  // };

  // Styles for Experiment
  const styles = /*css */ `
  html, body {
    height: 100%;
  }
  body {
    display: flex;
    flex-flow: column;
  }
  #content {
    flex-grow: 1;
  }
  [data-id="9b64f4b"] {
    background-color: #EEEBFB!important;
  }
  .lav-quiz__wrap {
    max-width: 600px;
    margin: auto;
  }
  .lav-header {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
    width: 100%;
    overflow: hidden;
  }
  .lav-quiz__wrap_loader, .lav-quiz__wrap_forms {
    max-width: 100%;
  }
  .lav-quiz__wrap_loader .lav-loader {
    max-width: 1230px;
    padding: 0 15px;
    margin-left: auto;
    margin-right: auto;
  }
  .lav-quiz__wrap_forms .lav-result {
    max-width: 630px;
    padding: 0 15px;
    margin: 40px auto;
  }
  .lav-quiz__wrap_loader .lav-header, .lav-quiz__wrap_forms .lav-header {
    justify-content: center;
    gap: 170px;
    border-bottom: 1px solid #EEEBFB;
  }
  .lav-header__logo {
    line-height: 0;
  }
  .lav-header:not(.active) {
    display: none;
  }
  .lav-header__back {
    line-height: 0;
    cursor: pointer;
    transition: 0.15s;
  }
  .lav-quiz__wrap_loader .lav-header__back {
    transition: 0s;
  }
  @media(hover:hover) {
    .lav-header__back:hover {
      opacity: .6;
    }
  }
  .lav-header__steps {
    color: var(--purple-400, #636A85);
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px;
    transition: 0.15s;
  }
  .lav-quiz__wrap_loader .lav-header__steps {
    transition: 0s;
  }
  .lav-header__steps span {
    color: var(--blue, #4622DA);
    font-weight: 700;
  }
  
  .lav-progress {
    position: relative;
    border-radius: 2px;
    background: #D2D6DC;
    display: flex;
    max-width: 500px;
    width: 100%;
    height: 6px;
    align-items: center;
    flex-shrink: 0;
    margin: 16px auto 0;
  }
  .lav-progress:not(.active) {
    display: none;
  }
  .lav-progress span {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    left: 0;
    border-radius: 2px;
    background: #4521D9;
    display: block;
    transition: 0.3s;
  }

  .lav-quiz {
    font-family: var(--e-global-typography-text-font-family), Sans-serif;
    color: #0A0A0A;
    font-size: 16px;
    margin-top: 40px;
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
  }
  .lav-title {
    color: #2E168D;
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
  }
  .lav-descr {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    margin-top: 16px;
  }
  .page .lav-btn {
    outline: none;
    transition: 0.3s;
    border-radius: 5px;
    background: var(--blue, #4622DA);
    height: 48px;
    color: #fff;
    text-align: center;
    font-weight: 700;
    line-height: 24px;
    width: 100%;
    font-size: 16px;
  }
  .page .lav-btn_disabled {
    filter: grayscale(1);
    opacity: 0.9;
    pointer-events: none;
  }
  .lav-intro {
    max-width: 500px;
    width: 100%;
  }
  .lav-intro:not(.active) {
    display: none;
  }
  .lav-intro__title {
    margin-top: 24px;
  }
  .lav-intro__list {
    margin-top: 16px;
    color: var(--violet-1, #2E168D);
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }
  .lav-intro__item {
    position: relative;
    padding-left: 32px;
    font-weight: 700;
  }
  .lav-intro__item:before {
    content: '';
    position: absolute;
    width: 24px;
    height: 24px;
    left: 0;
    top: 2px;
    background: url(${config.dir}/img/check-list.svg) center no-repeat;
    background-size: 20px 20px;
  }
  .lav-intro__item + .lav-intro__item {
    margin-top: 11px;
  }
  .lav-intro__img {
    text-align: center;
    line-height: 0;
  }
  .fw-500 {
    font-weight: 500;
  }
  .text-center {
    text-align: center;
  }
  .lav-step {
    border-radius: 10px;
    border: 1px solid var(--purple-100, #EEEBFB);
    background: #FFF;
    padding: 40px 60px;
    width: 100%;
  }
  .lav-step:not(.active) {
    display: none;
  }

  .lav-variants {
    margin-top: 24px;
    display: flex;
    flex-flow: column;
    gap: 4px;
  }
  .lav-variant {
    display: flex;
    align-items: center;
    min-height: 58px;
    width: 100%;
    border-radius: 8px;
    border: 1px solid #DCD4FF;
    background: #FFF;
    box-shadow: 0px 6px 20px -6px rgba(0, 0, 0, 0.08);
    color: #555;
    line-height: 24px;
    transition: 0.3s;
    padding: 7px 20px;
    cursor: pointer
  }
  @media(hover:hover) {
    .lav-variant:hover {
      background-color: var(--purple, #F7F6FD);
    }
  }
  .lav-variant.active .lav-variant__checkbox {
    background-image: url(${config.dir}/img/check.svg);
    border-color: transparent
  }
  .lav-variant.active {
    background: var(--blue, #4622DA);
    color: #fff;
    font-weight: 500;
  }
  .lav-variants_checkbox .lav-variant.active {
    background-color: var(--purple-100, #EEEBFB);
    color: #555;
  }
  .lav-variant .fw-500 {
    margin-left: 5px;
  }
  .lav-variant__checkbox {
    position: relative;
    margin-right: 12px;
    display: inline-block;
    width: 20px;
    height: 20px;
    background: #fff;
    border: 1px solid #B5A6F2;
    border-radius: 4px;
    transition: 0.3s;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-color: #fff;
  }
  .lav-variants_rate .lav-variant {
    justify-content: space-between;
    gap: 15px;
  }
  .lav-variants_rate .lav-variant rect {
    transition: 0.3s;
  }
  .lav-variants_rate .lav-variant.active rect[fill="#B5A6F2"] {
    fill: #fff;
  }
  .lav-variants_rate .lav-variant.active rect[fill="#4622DA"] {
    fill: #B5A6F2;
  }
  .lav-variant_divider {
    height: 1px;
    width: 100%;
    background: #EEEBFB;
    margin: 8px 0;
  }
  .lav-link span {
    color: var(--blue, #4622DA);
    font-weight: 500;
    line-height: 24px;
    border-bottom: 1px solid #4622DA;
    cursor: pointer;
    transition: 0.2s;
  }
  @media(hover: hover) {
    .lav-link span:hover {
      opacity: 0.7;
      border-color: transparent;
    }
  }
  .lav-link {
    margin-top: 20px;
  }
  .lav-variants_emoji .lav-variant {
    gap: 12px;
  }
  .lav-variants_emoji .lav-variant span {
    font-size: 24px;
  }

  .lav-say__plate {
    margin: 20px 0;
  }
  .lav-say__descr {
    color: var(--purple-400, #636A85);
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }
  .lav-plate {
    border-radius: 8px;
    background: #EEEBFB;
    padding: 24px;
    color: #2E168D;
  }
  .lav-plate__value {
    font-size: 32px;
    font-weight: 700;
    line-height: 36px; 
    margin-top: 24px;
  }
  .lav-plate__descr {
    font-size: 18px;
    font-weight: 600;
    line-height: 26px; 
    margin-top: 12px;
  }
  .lav-area {
    display: none;
    resize: none;
    border-radius: 5px;
    border: 1px solid #DCD4FF;
    min-height: 100px;
    background: #FFF;
    outline: none;
    transition: 0.3s;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px; 
  }
  .lav-area:focus {
    border-color: #B5A6F2;
  }

  .lav-easy__plate {
    margin-top: 24px;
  }
  .lav-find__descr {
    margin-top: 0;
  }
  .lav-find__descr span {
    font-weight: 600;
  }
  .lav-find__video {
    position: relative;
    line-height: 0;
    margin-top: 16px;
    cursor: pointer;
    display: block;
    text-decoration: none;
  }
  .lav-find__video-btn {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-width: 48px;
    transition: 0.2s;
  }
  @media(hover:hover) {
    .lav-find__video:hover .lav-find__video-btn {
      transform: translate(-50%, -50%) scale(1.1);
    }
  }
  .lav-quote__sub {
    color: #2E168D;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.3;
    margin-top: 16px;
  }
  .lav-quote__status {
    font-weight: 500;
    font-size: 14px;
    margin-top: 5px;
  }
  .lav-quote__descr {
    color: #555;
    margin-top: 0;
  }

  .lav-loader {
    margin: 48px 0;
  }
  .lav-loader:not(.active) {
    display: none;
  }
  .lav-preloader {
    color: #2E168D;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px; 
  }
  .lav-preloader__img {
    line-height: 0;
  }
  .lav-preloader__img img {
    animation: spin 2.5s linear infinite;
  }
  .lav-preloader__value {
    font-size: 32px;
    font-weight: 700;
    line-height: 36px;
    margin-top: 32px;
  }
  .lav-preloader__caption {
    margin-top: 8px;
  }
  @keyframes spin { 
    from { 
        transform: rotate(0deg); 
    } to { 
        transform: rotate(360deg); 
    }
  }
  .lav-trustpilot{
    max-width: 1200px;
    margin-top: 110px;
  }
  .lav-trustpilot__desk {
  }
  .lav-trustpilot__mob {
    display: none;
  }

  .lav-result:not(.active) {
    display: none;
  }
  .lav-label {
    color: #555;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
  }
  .lav-input {
    width: 100%;
    border-radius: 5px;
    border: 1px solid #B5A6F2;
    background: #FFF;
    min-height: 44px;
    padding: 5px 17px;
    transition: 0.2s;
  }
  .lav-input:focus {
    border-color: #EEEBFB;
  }
  .lav-label + .lav-input {
    margin-top: 12px;
  }
  .lav-login__group + .lav-login__group {
    margin-top: 16px;
  }
  .lav-login__form-wrap {
    margin-top: 32px;
  }
  .lav-login__privacy {
    color: var(--purple-400, #636A85);
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 16px;
    font-size: 13px;
    font-weight: 400;
    line-height: 18px; 
  }
  .lav-login__privacy svg {
    flex-shrink: 0;
  }
  .lav-login__divider {
    position: relative;
    margin: 16px 0;
    text-align: center;
  }
  .lav-login__divider:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    right: 0;
    height: 1px;
    background-color: #B5A6F2;
  }
  .lav-login__divider span {
    position: relative;
    color: var(--black, #0A0A0A);
    background: #fff;
    padding: 0 24px;
    font-size: 16px;
    display: inline-block;
    font-weight: 700;
    line-height: 24px;
  }
  .lav-google-auth {
    overflow: hidden;
    position: relative;
    border-radius: 5px;
    border: 1px solid var(--purple-200, #B5A6F2);
    background: #FFF;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--black, #0A0A0A);
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    gap: 8px;
    cursor: pointer;
    transition: 0.3s;
  }
  #google-auth-btn {
    position: absolute;
    transform: scale(1.3);
    opacity: 0.0001;
  }
  @media(hover: hover) {
    .lav-google-auth:hover {
      background-color: #4622da;
      color: #fff;
      // background-color: #B5A6F2;
    }
  }
  .lav-mobile__form {
    margin-top: 24px;
  }
  .lav-mobile__caption {
    color: #AFB3B9;
    margin-top: 16px;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
  }
  .lav-mobile__caption a {
    text-decoration: underline; 
    color: inherit;
    transition: 0.2s;
  }
  .lav-mobile__caption a:hover {
    color: var(--blue, #4622DA);
  }
  .lav-quiz__control {
    margin-top: 12px;
    min-height: 48px;
  }

  .lav-login__btn {
    margin-top: 16px;
  }
  .lav-mobile__btn {
    margin-top: 24px;
  }
  .lav-intro .lav-quiz__control {
    // position: sticky;
    // background: rgba(255, 255, 255, 0.80);
    // bottom: 0;
    // padding: 12px 0;
    // margin-bottom: -12px;
  }
  .lav-quiz__control {
    position: sticky;
    background: rgba(255, 255, 255, 0.80);
    bottom: 0;
    padding: 12px 0;
    margin-bottom: -12px;
  }
  .lav-quiz__wrap_submitting .lav-link, .lav-quiz__wrap_submitting .lav-btn {
    pointer-events: none;
    filter: grayscale(1);
    opacity: 0.9;
  }

  [data-elementor-type="wp-page"] {
    display: none!important;
  }

  .lav-body_submitting #crs-form {
    display: block!important;
    pointer-events: none;
    visibility:hidden;
    position: absolute;
  }

  .lav-body_submitting [data-elementor-type="wp-page"] {
    display: block!important;
    pointer-events: none;
    visibility: hidden;
    position: absolute;
    height: 0px!important;
    overflow: hidden;
    left: -9999%;
  }

  @media(min-width: 768px) {
    .lav-quiz__control_fixed .lav-quiz__next {
      // position: fixed;
      // bottom: 0;
      // left: 0;
      // right: 0;
    }
    .lav-quiz__control {
      // position: sticky;
      // background: rgba(255, 255, 255, 0.80);
      // bottom: 0;
      // padding: 12px 0;
      // margin-bottom: -12px;
    }
  }
  @media(max-width: 767px) {
    .lav-intro .lav-quiz__control {
      // margin-top: 16px;
    }
    .lav-quiz__wrap {
      height: 100%;
      display: flex;
      flex-flow: column;
    }
    .lav-quiz {
      height: 100%;
    }
    .lav-step, .lav-intro {
      flex-flow: column;
      display: flex;
      height: 100%;
      flex-grow: 1;
    }
    .lav-intro__list + .lav-intro__descr {
      margin-top: 0;
    }
    .lav-title + .lav-intro__descr {
      max-width: 320px;
    }
    .lav-quiz {
      align-items: flex-start;
    }
    .lav-variants {
      flex-grow: 1;
    }
    .lav-link__pass {
      margin-top: auto;
      padding: 12px 0;
    }
    .lav-quiz__control {
      margin-top: auto;
      padding-top: 20px;
    }

    .lav-quiz {
      padding: 0 24px;
      margin-top: 28px;
      margin-bottom: 12px;
    }
    .lav-login__form-wrap {
      margin-top: 20px;
      padding: 24px 16px;
      border-radius: 8px;
      border: 1px solid var(--purple-100, #EEEBFB);
      background: #FFF;
    }
    .lav-header {
      padding: 16px 24px;
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.12);
    }
    .lav-intro__img img {
      max-width: 162px;
    }
    .lav-intro__title {
      margin-top: 20px;
    }
    .lav-intro__list {
      margin: 20px 0;
    }
    [data-id="9b64f4b"] {
      padding: 15px!important;
    }
    .lav-header__logo img {
      max-width: 148px;
    }
    .lav-header__steps {
      font-size: 16px;
      line-height: 24px;
    }
    .lav-progress {
      border-radius: 0;
      max-width: 100%;
      height: 4px;
      margin: 0;
    }
    .lav-progress span {
      border-radius: 0;
    }
    .lav-step {
      border-radius: 0;
      padding: 0;
      border: none;
    }
    .lav-variants {
      margin-top: 20px;
      margin-bottom: 14px;
    }
    .lav-variant {
      min-height: 56px;
    }
    .lav-say__plate {
      padding: 24px 16px;
      margin-bottom: 16px;
    }
    .lav-easy__plate {
      margin-top: 20px;
    }
    .lav-find {
      padding: 20px 16px;
    }
    .lav-quote {
      padding: 16px;
    }
    .lav-find__video {
      margin-top: 12px;
    }
    .lav-loader {
      margin-top: 32px;
      margin-bottom: 40px;
    }
    .lav-preloader__value {
      font-size: 24px;
      line-height: 32px;
    }
    .lav-trustpilot {
      margin-top: 50px;
    }
    .lav-trustpilot__desk {
      display: none;
    }
    .lav-trustpilot__mob {
      display: block;
    }
    .lav-quiz__wrap_loader .lav-loader {
      padding: 0 24px;
    }
    .lav-quiz__wrap_forms .lav-result {
      margin: 32px 0 12px;
      height: 100%;
    }
    .lav-login {
      margin-bottom: 32px;
    }
    .lav-login__privacy {
      margin-top: 20px;
    }
    .lav-quiz__wrap_loader .lav-header, .lav-quiz__wrap_forms .lav-header {
      justify-content: space-between;
      gap: 15px;
    }
    .lav-mobile__caption {
      margin-bottom: 20px;
    }
    .lav-mobile__link {
      order: 1;
      margin-top: auto;
    }
    .lav-mobile__btn {
      order: 2;
    }
  }
`;

  const stylesEl = document.createElement('style');
  stylesEl.classList.add('exp-styles');
  stylesEl.innerHTML = styles;
  document.head.appendChild(stylesEl);

  // *** Logic *** //
  initExp();

  function initExp() {
    console.debug('** InitExp **');

    const quizMarkup = /*html*/ `
    <div class="lav-quiz__wrap">
      <div class="lav-header">
        <div class="lav-header__back">
          ${getSvg('chevronLeft')}
        </div>

        <a class='lav-header__logo' href="https://treblehealth.com">
          <img width="211" height="40" src="https://treblehealth.com/wp-content/uploads/2021/09/site-logo.svg">
        </a>

        <div class="lav-header__steps">
          <span>1</span>/8
        </div>
      </div>

      <div class='lav-progress'><span style='width: 20%;'></span></div>

      <div class="lav-quiz">
        <div class="lav-intro" data-step='0'>
          <div class="lav-intro__img">
            <img src="${config.dir}/img/intro.svg" alt="">
          </div>
          <div class="lav-title lav-intro__title">
            Find Your Tinnitus Solution
          </div>
          <div class="lav-descr lav-intro__descr">
            Treble Health’s <strong>Tinnitus Quiz</strong> is&nbsp;your&nbsp;chance&nbsp;to:
          </div>

          <div class='lav-intro__list'>
            <div class='lav-intro__item'>Identify the Root Сause</div>
            <div class='lav-intro__item'>Explore Custom Solutions</div>
            <div class='lav-intro__item'>Receive Expert Guidance</div>
          </div>

          <div class="lav-descr lav-intro__descr">
          Ready for relief? Let's get started.
          </div>
          
          <div class="lav-quiz__control">
            <button class="lav-quiz__next lav-btn" data-target='1'>Next</button>
          </div>
        </div>

        <div class="lav-step" data-step='1' data-required>
          <div class="lav-title">
            What is your primary reason&nbsp;for&nbsp;seeking a tinnitus&nbsp;relief&nbsp;solution?
          </div>

          <div class="lav-descr fw-500">
            Choose all that apply.
          </div>

          <div class="lav-variants lav-variants_checkbox">
            <div class="lav-variant" data-point='1'>
              <span class="lav-variant__checkbox"></span>
              Reduce Tinnitus Volume
            </div>
            <div class="lav-variant" data-point='1'>
              <span class="lav-variant__checkbox"></span>
              Improve Sleep Quality
            </div>
            <div class="lav-variant" data-point='1'>
              <span class="lav-variant__checkbox"></span>
              Lessen Anxiety and Stress
            </div>
            <div class="lav-variant" data-point='1'>
              <span class="lav-variant__checkbox"></span>
              Help with Concentration
            </div>
            <div class="lav-variant" data-point='1'>
              <span class="lav-variant__checkbox"></span>
              Enhance Hearing Ability
            </div>
            <div class="lav-variant" data-point='1'>
              <span class="lav-variant__checkbox"></span>
              Other
            </div>
            <textarea class='lav-area' placeholder='Your text here'></textarea>
          </div>

          <div class="lav-quiz__control">
            <button class="lav-quiz__next lav-btn_disabled lav-btn" data-target='2'>Continue</button>
          </div>
        </div>

        <div class="lav-step" data-step='2' data-single data-target='3'>
          <div class="lav-title">
            How often do you experience tinnitus?
          </div>

          <div class="lav-variants">
            <div class="lav-variant" data-point='1'>
              Rarely (Monthly)
            </div>
            <div class="lav-variant" data-point='2'>
              Occasionally (Weekly)
            </div>
            <div class="lav-variant" data-point='3'>
              Frequently (Daily)
            </div>
            <div class="lav-variant" data-point='3'>
              Constantly (Always present)
            </div>
          </div>
        </div>

        <div class="lav-step" data-step='3' data-single data-target='4'>
          <div class="lav-title">
            How would you rate the severity of your tinnitus?
          </div>

          <div class="lav-variants lav-variants_rate">
            <div class="lav-variant" data-point='0'>
              Barely noticeable
              <svg width="46" height="38" viewBox="0 0 46 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="30" width="6" height="8" rx="1" fill="#4622DA"/>
                <rect x="10" y="24" width="6" height="14" rx="1" fill="#B5A6F2"/>
                <rect x="20" y="16" width="6" height="22" rx="1" fill="#B5A6F2"/>
                <rect x="30" y="8" width="6" height="30" rx="1" fill="#B5A6F2"/>
                <rect x="40" width="6" height="38" rx="1" fill="#B5A6F2"/>
              </svg>
            </div>
            <div class="lav-variant" data-point='3'>
              Mild
              <svg width="46" height="38" viewBox="0 0 46 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="30" width="6" height="8" rx="1" fill="#4622DA"/>
                <rect x="10" y="24" width="6" height="14" rx="1" fill="#4622DA"/>
                <rect x="20" y="16" width="6" height="22" rx="1" fill="#B5A6F2"/>
                <rect x="30" y="8" width="6" height="30" rx="1" fill="#B5A6F2"/>
                <rect x="40" width="6" height="38" rx="1" fill="#B5A6F2"/>
              </svg>
            </div>
            <div class="lav-variant" data-point='6'>
              Moderate
              <svg width="46" height="38" viewBox="0 0 46 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="30" width="6" height="8" rx="1" fill="#4622DA"/>
                <rect x="10" y="24" width="6" height="14" rx="1" fill="#4622DA"/>
                <rect x="20" y="16" width="6" height="22" rx="1" fill="#4622DA"/>
                <rect x="30" y="8" width="6" height="30" rx="1" fill="#B5A6F2"/>
                <rect x="40" width="6" height="38" rx="1" fill="#B5A6F2"/>
              </svg>
            </div>
            <div class="lav-variant" data-point='9'>
              Serious
              <svg width="46" height="38" viewBox="0 0 46 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="30" width="6" height="8" rx="1" fill="#4622DA"/>
                <rect x="10" y="24" width="6" height="14" rx="1" fill="#4622DA"/>
                <rect x="20" y="16" width="6" height="22" rx="1" fill="#4622DA"/>
                <rect x="30" y="8" width="6" height="30" rx="1" fill="#4622DA"/>
                <rect x="40" width="6" height="38" rx="1" fill="#B5A6F2"/>
              </svg>
            </div>
            <div class="lav-variant" data-point='12'>
              Severe
              <svg width="46" height="38" viewBox="0 0 46 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="30" width="6" height="8" rx="1" fill="#4622DA"/>
                <rect x="10" y="24" width="6" height="14" rx="1" fill="#4622DA"/>
                <rect x="20" y="16" width="6" height="22" rx="1" fill="#4622DA"/>
                <rect x="30" y="8" width="6" height="30" rx="1" fill="#4622DA"/>
                <rect x="40" width="6" height="38" rx="1" fill="#4622DA"/>
              </svg>
            </div>
            <div class="lav-link lav-link__pass text-center">
              <span>Not Sure</span>
            </div>
          </div>
        </div>

        <div class="lav-step" data-step='4' data-single data-target='i1'>
          <div class="lav-title">
            What does your tinnitus sound like?
          </div>

          <div class="lav-variants lav-variants_emoji">
            <div class="lav-variant" data-point='1'>
              <img src="${config.dir}/img/ringing.svg" /> Ringing
            </div>
            <div class="lav-variant" data-point='1'>
              <img src="${config.dir}/img/buzzing.svg" /> Buzzing
            </div>
            <div class="lav-variant" data-point='1'>
              <img src="${config.dir}/img/humming.svg" /> Humming
            </div>
            <div class="lav-variant" data-point='1'>
              <img src="${config.dir}/img/hissing.svg" /> Hissing
            </div>
            <div class="lav-variant" data-point='1'>Other</div>
          </div>
        </div>

        <div class="lav-step lav-say" data-step='i1'>
          <div class="lav-title lav-say__title">
            Many people say, “Tinnitus&nbsp;is&nbsp;treatable”.
          </div>

          <div class="lav-plate lav-say__plate text-center">
            <div class="lav-plate__icon ">
              ${getSvg('ear')}
            </div>
            <div class="lav-plate__value">82%</div>
            <div class="lav-plate__descr">
              of  TrebleHealth patients showed clinically significant improvements in their tinnitus within six months*
            </div>
          </div>

          <div class="lav-say__descr">
            <strong>*This data comes from our 2023 Treble Health study,</strong> which involved 247 participants using the Tinnitus Functional Index.
          </div>


          <div class="lav-quiz__control">
            <button class="lav-quiz__next lav-btn" data-target='info1Custom'>Continue</button>
          </div>
        </div>

        <div class="lav-step" data-step='5-1' data-single>
          <div class="lav-title">
            How does tinnitus affect your sleep?
          </div>

          <div class="lav-variants lav-variants_emoji">
            <div class="lav-variant" data-point='0'>
              <img src="${config.dir}/img/smile0.svg" /> Does not affect
            </div>
            <div class="lav-variant" data-point='1'>
              <img src="${config.dir}/img/smile2.svg" /> Slightly
            </div>
            <div class="lav-variant" data-point='2'>
              <img src="${config.dir}/img/smile3.svg" /> Moderately
            </div>
            <div class="lav-variant" data-point='3'>
              <img src="${config.dir}/img/smile4.svg" /> Very much
            </div>
            <div class="lav-variant" data-point='4'>
              <img src="${config.dir}/img/smile6.svg" /> I cannot sleep
            </div>
          </div>
        </div>

        <div class="lav-step" data-step='5-2' data-single>
          <div class="lav-title">
            How much does tinnitus interfere with your ability to concentrate?
          </div>

          <div class="lav-variants lav-variants_emoji">
            <div class="lav-variant" data-point='0'>
              <img src="${config.dir}/img/smile1.svg" /> Does not affect
            </div>
            <div class="lav-variant" data-point='1'>
              <img src="${config.dir}/img/smile2.svg" /> Slightly
            </div>
            <div class="lav-variant" data-point='2'>
              <img src="${config.dir}/img/smile3.svg" /> Moderately
            </div>
            <div class="lav-variant" data-point='3'>
              <img src="${config.dir}/img/smile4.svg" /> Very much
            </div>
            <div class="lav-variant" data-point='4'>
              <img src="${config.dir}/img/smile5.svg" /> Extremely
            </div>
          </div>
        </div>

        <div class="lav-step" data-step='5-3' data-single>
          <div class="lav-title">
            Does tinnitus affect your day-to-day hearing ability?
          </div>

          <div class="lav-variants lav-variants_rate">
            <div class="lav-variant" data-point='0'>
              No difficulty hearing
              <svg width="46" height="38" viewBox="0 0 46 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="30" width="6" height="8" rx="1" fill="#4622DA"/>
                <rect x="10" y="24" width="6" height="14" rx="1" fill="#B5A6F2"/>
                <rect x="20" y="16" width="6" height="22" rx="1" fill="#B5A6F2"/>
                <rect x="30" y="8" width="6" height="30" rx="1" fill="#B5A6F2"/>
                <rect x="40" width="6" height="38" rx="1" fill="#B5A6F2"/>
              </svg>
            </div>
            <div class="lav-variant" data-point='1'>
              Rarely
              <svg width="46" height="38" viewBox="0 0 46 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="30" width="6" height="8" rx="1" fill="#4622DA"/>
                <rect x="10" y="24" width="6" height="14" rx="1" fill="#4622DA"/>
                <rect x="20" y="16" width="6" height="22" rx="1" fill="#B5A6F2"/>
                <rect x="30" y="8" width="6" height="30" rx="1" fill="#B5A6F2"/>
                <rect x="40" width="6" height="38" rx="1" fill="#B5A6F2"/>
              </svg>
            </div>
            <div class="lav-variant" data-point='2'>
              Occasionally
              <svg width="46" height="38" viewBox="0 0 46 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="30" width="6" height="8" rx="1" fill="#4622DA"/>
                <rect x="10" y="24" width="6" height="14" rx="1" fill="#4622DA"/>
                <rect x="20" y="16" width="6" height="22" rx="1" fill="#4622DA"/>
                <rect x="30" y="8" width="6" height="30" rx="1" fill="#B5A6F2"/>
                <rect x="40" width="6" height="38" rx="1" fill="#B5A6F2"/>
              </svg>
            </div>
            <div class="lav-variant" data-point='3'>
              In noisy environments
              <svg width="46" height="38" viewBox="0 0 46 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="30" width="6" height="8" rx="1" fill="#4622DA"/>
                <rect x="10" y="24" width="6" height="14" rx="1" fill="#4622DA"/>
                <rect x="20" y="16" width="6" height="22" rx="1" fill="#4622DA"/>
                <rect x="30" y="8" width="6" height="30" rx="1" fill="#4622DA"/>
                <rect x="40" width="6" height="38" rx="1" fill="#B5A6F2"/>
              </svg>
            </div>
            <div class="lav-variant" data-point='4'>
              All the time
              <svg width="46" height="38" viewBox="0 0 46 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="30" width="6" height="8" rx="1" fill="#4622DA"/>
                <rect x="10" y="24" width="6" height="14" rx="1" fill="#4622DA"/>
                <rect x="20" y="16" width="6" height="22" rx="1" fill="#4622DA"/>
                <rect x="30" y="8" width="6" height="30" rx="1" fill="#4622DA"/>
                <rect x="40" width="6" height="38" rx="1" fill="#4622DA"/>
              </svg>
            </div>
            <div class="lav-link lav-link__pass text-center">
              <span>Not Sure</span>
            </div>
          </div>
        </div>

        <div class="lav-step" data-step='5-4' data-required>
          <div class="lav-title">
            How does tinnitus cause anxiety or stress in your life?
          </div>

          <div class="lav-descr fw-500">Choose all that apply.</div>

          <div class="lav-variants lav-variants_checkbox">
            <div class="lav-variant" data-point='2'>
              <span class="lav-variant__checkbox"></span>
              Feels like I can’t escape it
            </div>
            <div class="lav-variant" data-point='2'>
              <span class="lav-variant__checkbox"></span>
              Makes me feel distressed
            </div>
            <div class="lav-variant" data-point='1'>
              <span class="lav-variant__checkbox"></span>
              Constantly thinking about it
            </div>
            <div class="lav-variant" data-point='1'>
              <span class="lav-variant__checkbox"></span>
              Makes me feel annoyed
            </div>
          </div>

          <div class="lav-quiz__control">
            <button class="lav-quiz__next lav-btn lav-btn_disabled">Continue</button>
          </div>
        </div>

        <div class="lav-step lav-easy" data-step='i2'>
          <div class="lav-title lav-easy__title">
            Finding relief from tinnitus can be hard. Treble Health makes it easy.
          </div>

          <div class="lav-plate lav-easy__plate lav-find text-center">
            <div class="lav-find__descr lav-descr">
              Randy <span>lowered his tinnitus and got his life back</span> working with Treble Health over a <span>three-month</span> time period.
            </div>

            <a href='https://www.youtube.com/watch?v=PaJhaIUSSfQ' target='_blank' class="lav-find__video">
              <img class="lav-find__video-img" src="${
                config.dir
              }/img/video-preview.png" alt="">
              <img class="lav-find__video-btn" src="${
                config.dir
              }/img/video-preview-btn.png" alt="">
            </a>
          </div>

          <div class="lav-plate lav-quote lav-easy__plate">
            <div class='lav-quote__descr lav-descr'>
              “Treble Health has helped me enormously in a fairly short amount of time when other doctors couldn’t. My audiologist (Dr May) has 18 years of experience in dealing with tinnitus and has suffered with and habituated to tinnitus herself.”
            </div>
            <div class='lav-quote__sub'>
              <div class='lav-quote__name'>Randy S.</div>
              <div class='lav-quote__status'>(verified patient)</div>
            </div>
          </div>

          <div class="lav-quiz__control">
            <button class="lav-quiz__next lav-btn" data-target='6'>Continue</button>
          </div>
        </div>

        <div class="lav-step" data-step='6' data-single data-target='7'>
          <div class="lav-title">
            How has tinnitus affected your overall quality of life?
          </div>

          <div class="lav-variants lav-variants_emoji">
            <div class="lav-variant" data-point='0'>
              <img src="${config.dir}/img/smile1.svg" /> Does not affect
            </div>
            <div class="lav-variant" data-point='1'>
              <img src="${config.dir}/img/smile2.svg" /> Slightly negatively
            </div>
            <div class="lav-variant" data-point='2'>
              <img src="${config.dir}/img/smile3.svg" /> Moderately negatively
            </div>
            <div class="lav-variant" data-point='3'>
              <img src="${config.dir}/img/smile4.svg" /> Very negatively
            </div>
            <div class="lav-variant" data-point='4'>
              <img src="${config.dir}/img/smile5.svg" /> Extremely negatively
            </div>
          </div>
        </div>

        <div class="lav-step" data-step='7' data-single data-target='8'>
          <div class="lav-title">
            How ready are you to treat your tinnitus&nbsp;today?
          </div>

          <div class="lav-variants lav-variants_rate">
            <div class="lav-variant" data-point='0'>
              Just doing research
              <svg width="46" height="38" viewBox="0 0 46 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="30" width="6" height="8" rx="1" fill="#4622DA"/>
                <rect x="10" y="24" width="6" height="14" rx="1" fill="#B5A6F2"/>
                <rect x="20" y="16" width="6" height="22" rx="1" fill="#B5A6F2"/>
                <rect x="30" y="8" width="6" height="30" rx="1" fill="#B5A6F2"/>
                <rect x="40" width="6" height="38" rx="1" fill="#B5A6F2"/>
              </svg>
            </div>
            <div class="lav-variant" data-point='1'>
              Somewhat interested
              <svg width="46" height="38" viewBox="0 0 46 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="30" width="6" height="8" rx="1" fill="#4622DA"/>
                <rect x="10" y="24" width="6" height="14" rx="1" fill="#4622DA"/>
                <rect x="20" y="16" width="6" height="22" rx="1" fill="#B5A6F2"/>
                <rect x="30" y="8" width="6" height="30" rx="1" fill="#B5A6F2"/>
                <rect x="40" width="6" height="38" rx="1" fill="#B5A6F2"/>
              </svg>
            </div>
            <div class="lav-variant" data-point='1'>
              Considering options
              <svg width="46" height="38" viewBox="0 0 46 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="30" width="6" height="8" rx="1" fill="#4622DA"/>
                <rect x="10" y="24" width="6" height="14" rx="1" fill="#4622DA"/>
                <rect x="20" y="16" width="6" height="22" rx="1" fill="#4622DA"/>
                <rect x="30" y="8" width="6" height="30" rx="1" fill="#B5A6F2"/>
                <rect x="40" width="6" height="38" rx="1" fill="#B5A6F2"/>
              </svg>
            </div>
            <div class="lav-variant" data-point='1'>
              Quite ready but need more information
              <svg width="46" height="38" viewBox="0 0 46 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="30" width="6" height="8" rx="1" fill="#4622DA"/>
                <rect x="10" y="24" width="6" height="14" rx="1" fill="#4622DA"/>
                <rect x="20" y="16" width="6" height="22" rx="1" fill="#4622DA"/>
                <rect x="30" y="8" width="6" height="30" rx="1" fill="#4622DA"/>
                <rect x="40" width="6" height="38" rx="1" fill="#B5A6F2"/>
              </svg>
            </div>
            <div class="lav-variant" data-point='2'>
              Need to start now
              <svg width="46" height="38" viewBox="0 0 46 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="30" width="6" height="8" rx="1" fill="#4622DA"/>
                <rect x="10" y="24" width="6" height="14" rx="1" fill="#4622DA"/>
                <rect x="20" y="16" width="6" height="22" rx="1" fill="#4622DA"/>
                <rect x="30" y="8" width="6" height="30" rx="1" fill="#4622DA"/>
                <rect x="40" width="6" height="38" rx="1" fill="#4622DA"/>
              </svg>
            </div>
          </div>
        </div>

        <div class="lav-step" data-step='8'>
          <div class="lav-title">
            How does tinnitus cause anxiety or stress in your life?
          </div>

          <div class="lav-descr fw-500">Choose all that apply.</div>

          <div class="lav-variants lav-variants_checkbox">
            <div class="lav-variant" data-point='0'>
              <span class="lav-variant__checkbox"></span>
              Supplements
            </div>
            <div class="lav-variant" data-point='0'>
              <span class="lav-variant__checkbox"></span>
              Prescription medication
            </div>
            <div class="lav-variant" data-point='0'>
              <span class="lav-variant__checkbox"></span>
              Hearing aids
            </div>
            <div class="lav-variant" data-point='0'>
              <span class="lav-variant__checkbox"></span>
              Tinnitus maskers
            </div>
            <div class="lav-variant" data-point='0'>
              <span class="lav-variant__checkbox"></span>
              Cognitive Behavioural Therapy (CBT)
            </div>
            <div class="lav-variant" data-point='0'>
              <span class="lav-variant__checkbox"></span>
              Meditation
            </div>
            <div class="lav-variant" data-point='0'>
              <span class="lav-variant__checkbox"></span>
              Tinnitus Retraining Therapy (TRT)
            </div>
            <div class="lav-variant" data-point='0'>
              <span class="lav-variant__checkbox"></span>
              Other
            </div>
            <textarea class='lav-area' placeholder='Your text here'></textarea>
          </div>

          <div class="lav-quiz__control">
            <button class="lav-quiz__next lav-btn_disabled lav-btn" data-target='finish'>Continue</button>
          </div>
        </div>
      </div>


      <div class='lav-loader'>
        <div class='lav-preloader text-center'>
          <div class='lav-preloader__img'>
            <img src='${config.dir}/img/preloader.svg' alt=''>
          </div>
          <div class='lav-preloader__value'>0%</div>
          <div class='lav-preloader__caption'>Analyzing Responses...</div>
        </div>

        <div class="trustpilot-widget lav-trustpilot lav-trustpilot__desk" data-locale="en-US" data-template-id="53aa8912dec7e10d38f59f36" data-businessunit-id="6397ccb1f1b97c8d18a77a5d" data-style-height="140px" data-style-width="100%" data-theme="light" data-stars="1,2,3,4,5" data-review-languages="en" data-font-family="Open Sans">
            <a href="https://www.trustpilot.com/review/treblehealth.com" target="_blank" rel="noopener">Trustpilot</a>
        </div>
        <div class="trustpilot-widget lav-trustpilot lav-trustpilot__mob" data-locale="en-US" data-template-id="539ad0ffdec7e10e686debd7" data-businessunit-id="6397ccb1f1b97c8d18a77a5d" data-style-height="320px" data-style-width="100%" data-theme="light" data-stars="1,2,3,4,5" data-review-languages="en" data-font-family="Open Sans">
            <a href="https://www.trustpilot.com/review/treblehealth.com" target="_blank" rel="noopener">Trustpilot</a>
        </div>
      </div>

      <div class='lav-result'>
        <div class='lav-step lav-login'>
          <div class='lav-title'>Your results are ready!</div>
          <div class='lav-descr fw-500'>Unlock your Tinnitus Quiz results by providing the information&nbsp;below.</div>

          <div class='lav-login__form-wrap'>
            <div class='lav-login__form'>
              <div class='lav-login__group'>
                <label for='lav-name' class='lav-label lav-login__label'>Name</label>
                <input id='lav-name' class='lav-input lav-login__input' placeholder='Your name' />
              </div>

              <div class='lav-login__group'>
                <label for='lav-email' class='lav-label lav-login__label'>Email</label>
                <input id='lav-email' class='lav-input lav-login__input' placeholder='name@gmail.com' />
              </div>
            </div>

            <button class="lav-login__btn lav-btn lav-btn_disabled">Continue</button>

            <div class='lav-login__divider'>
                <span>or</span>
            </div>

            <div class="lav-google-auth">
              <div id='google-auth-btn'></div>
              ${getSvg('google')}
              Sign in with Google
            </div>
          </div>

          <div class='lav-login__privacy'>
            ${getSvg('privacy')}
            Your privacy is important to us, we’ll never share or sell your data.
          </div>
        </div>

        <div class='lav-step lav-mobile'>
          <div class='lav-title'>Almost Done!</div>
          <div class='lav-descr fw-500'>Would you like to receive our comprehensive Treble Health Tinnitus Guide, and an offer to speak with a Tinnitus Specialist, totally free? <br/><br/>
          If so, please provide your mobile phone number below.</div>

          <div class='lav-mobile__form'>
            <div class='lav-mobile__group'>
              <label for='lav-phone' class='lav-label lav-mobile__label'>Mobile phone number</label>
              <input id='lav-phone' class='lav-input lav-mobile__input' placeholder='Mobile phone number' data-old-pl="+421 (000) 000-0000" />
            </div>
          </div>

          <button class="lav-mobile__btn lav-btn">See My Results</button>

          <div class="lav-link lav-mobile__link text-center">
            <span>No, I don’t want the free offers</span>
          </div>

          <div class='lav-mobile__caption'>
            By clicking 'See My Results' you allow Treble Health to reach you via calls or texts at your number for promotional purposes as per our <a target='_blank' href='/privacy-policy'>Privacy Policy</a> and <a target='_blank' href='/terms-of-service'>Terms and Conditions</a>. Automated technology may be used. Consent isn't required for purchase/service use.
            <br></br>
            Opt-out? <strong>Call <a href='tel:8008653124'>(800) 865-3142</a></strong> or see <a target='_blank' href='/terms-of-service'>Terms and Conditions</a> for more options.
          </div>
        </div>
      </div>
    </div>

    
  `;

    $('#content').insertAdjacentHTML('afterbegin', quizMarkup);

    initQuiz();
    handleForms();
  }

  function initQuiz() {
    history.pushState(
      '',
      document.title,
      window.location.pathname + window.location.search
    );
    $('.lav-intro').classList.add('active');

    for (const nextBtn of $$('.lav-quiz__next')) {
      nextBtn.addEventListener('click', () => {
        if (nextBtn.classList.contains('lav-btn_disabled')) return false;

        fireNextEvent();

        const targetStep = nextBtn.dataset.target;

        if (targetStep === 'info1Custom') {
          let flow = [];

          // Clear answers
          for (const step of ['5-1', '5-2', '5-3', '5-4']) {
            const stepEl = $('.lav-step[data-step="' + step + '"]');
            stepEl?.querySelectorAll('.lav-variant.active').forEach((item) => {
              item.classList.remove('active');
            });

            stepEl.removeAttribute('data-target');
            $('.lav-quiz__next', stepEl)?.removeAttribute('data-target');
          }

          // Check new flow
          const answers = window.quizResult['step-1'].raw;

          if (
            answers.includes('Reduce Tinnitus Volume') ||
            answers.includes('Other')
          ) {
            flow = ['5-1', '5-2', '5-3', '5-4', 'i2'];
          } else {
            if (answers.includes('Improve Sleep Quality')) {
              flow.push('5-1');
            }
            if (answers.includes('Help with Concentration')) {
              flow.push('5-2');
            }
            if (answers.includes('Enhance Hearing Ability')) {
              flow.push('5-3');
            }
            if (answers.includes('Lessen Anxiety and Stress')) {
              flow.push('5-4');
            }
            flow.push('i2');
          }

          flow.forEach((step, i) => {
            if (step === 'i2') return false;

            const target = $('.lav-step[data-step="' + step + '"]');

            if ($('.lav-quiz__next', target)) {
              $('.lav-quiz__next', target).dataset.target = flow[i + 1];
            } else {
              target.dataset.target = flow[i + 1];
            }
          });

          moveToStep(flow[0]);
          return false;
        }

        if (targetStep === 'i2') {
          // const trustpilot = document.createElement('script');
          // trustpilot.src =
          //   '//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js';
          // trustpilot.async = true;
          // document.body.appendChild(trustpilot);
        }

        if (targetStep === 'finish') {
          const trustpilot = document.createElement('script');
          trustpilot.src =
            '//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js';
          trustpilot.async = true;
          document.body.appendChild(trustpilot);
          saveQuizResult();
          initGoogleAuth();
          initLoader();
          setTimeout(() => {
            window.scrollTo(0, 0);
          }, 50);
          return false;
        }

        moveToStep(targetStep);
      });
    }

    // for (const controlEl of $$('.lav-quiz__control')) {
    //   initIntersection(
    //     controlEl,
    //     ({ isIntersecting }) => {
    //       if (!controlEl.closest('[data-step].active')) return false;

    //       console.log('isIntersecting', isIntersecting);

    //       if (isIntersecting) {
    //         controlEl.classList.remove('lav-quiz__control_fixed');
    //       } else {
    //         controlEl.classList.add('lav-quiz__control_fixed');
    //       }
    //     },
    //     { threshold: 0.3 }
    //   );
    // }

    for (const variantEl of $$('.lav-variant')) {
      variantEl.addEventListener('click', () => {
        const isSingleEl = variantEl.closest('[data-single]');

        fireVariantEvent(variantEl.innerText.trim());

        if (isSingleEl) {
          isSingleEl.querySelectorAll('.lav-variant').forEach((el) => {
            el.classList.remove('active');
          });

          variantEl.classList.add('active');

          $(
            '.lav-link.active',
            variantEl.closest('.lav-step')
          )?.classList.remove('active');

          moveToStep(isSingleEl.dataset.target);
        } else {
          const isRequired = variantEl.closest('[data-required]');
          const parentStep = variantEl.closest('.lav-step');

          variantEl.classList.toggle('active');

          if (isRequired && !$('.lav-variant.active', parentStep)) {
            $('.lav-quiz__next', parentStep).classList.add('lav-btn_disabled');
          } else {
            $('.lav-quiz__next', parentStep).classList.remove(
              'lav-btn_disabled'
            );
          }
        }
      });
    }

    for (const passEl of $$('.lav-link__pass span')) {
      passEl.addEventListener('click', function () {
        const isSingleEl = passEl.closest('[data-single]');
        if (!isSingleEl) return false;

        firePassEvent();

        isSingleEl.querySelectorAll('.lav-variant').forEach((el) => {
          el.classList.remove('active');
        });

        passEl.closest('.lav-link')?.classList.add('active');

        moveToStep(isSingleEl.dataset.target);
      });
    }

    $('.lav-header__back').addEventListener('click', function () {
      fireBackEvent();
      goBack();
    });

    addVisibilitiesEvents();
  }

  // Event next
  function fireNextEvent() {
    const step =
      $('.lav-step.active')?.dataset.step ||
      $('.lav-intro.active')?.dataset.step;

    if (step === '0') {
      pushDataLayer(
        'exp_new_surv_flow_but_start_nex',
        'Next',
        'Button',
        "Let's get you started on your journey towards tinnitus relief."
      );
    } else if (step === '1') {
      pushDataLayer(
        'exp_new_surv_flow_but_primary_cont',
        'Continue',
        'Button',
        'What is your primary reason for seeking a tinnitus relief solution?'
      );
    } else if (step === 'i1') {
      pushDataLayer(
        'exp_new_surv_flow_but_peopsay_cont',
        'Continue',
        'Button',
        'Many people say, “There’s nothing you can do for tinnitus”.'
      );
    } else if (step === '5-4') {
      pushDataLayer(
        'exp_new_surv_flow_but_react_cont',
        'Continue',
        'Button',
        'How do you usually react to tinnitus?'
      );
    } else if (step === 'i2') {
      pushDataLayer(
        'exp_new_surv_flow_but_relief_cont',
        'Continue',
        'Button',
        'Finding relief from tinnitus can be hard. Treble Health makes it easy.'
      );
    } else if (step === '8') {
      pushDataLayer(
        'exp_new_surv_flow_but_techniq_cont',
        'Continue',
        'Button',
        'Have you tried any techniques or treatments to manage your tinnitus?'
      );
    }
  }

  // Event pass
  function firePassEvent() {
    const step = $('.lav-step.active').dataset.step;

    if (step === '3') {
      pushDataLayer(
        'exp_new_surv_flow_lin_severity_sure',
        'Not Sure',
        'Link',
        'How would you rate the severity of your tinnitus? '
      );
    }
  }

  // Event variant
  function fireVariantEvent(title) {
    const step = $('.lav-step.active').dataset.step;

    if (step === '1') {
      pushDataLayer(
        'exp_new_surv_flow_chec_primary_reas',
        title,
        'Checkbox ',
        'What is your primary reason for seeking a tinnitus relief solution?'
      );
    } else if (step === '2') {
      pushDataLayer(
        'exp_new_surv_flow_selec_often_title',
        title,
        'Select',
        'How often do you experience tinnitus?'
      );
    } else if (step === '3') {
      pushDataLayer(
        'exp_new_surv_flow_selec_severity_title',
        title,
        'Select',
        'How would you rate the severity of your tinnitus? '
      );
    } else if (step === '4') {
      pushDataLayer(
        'exp_new_surv_flow_selec_type_title',
        title,
        'Select',
        'What type of sound do you usually hear? '
      );
    } else if (step === '5-1') {
      pushDataLayer(
        'exp_new_surv_flow_selec_affect_title',
        title,
        'Select',
        'How does tinnitus affect your sleep?'
      );
    } else if (step === '5-2') {
      pushDataLayer(
        'exp_new_surv_flow_selec_concent_title',
        title,
        'Select',
        'How much does tinnitus interfere with your ability to concentrate?'
      );
    } else if (step === '5-3') {
      pushDataLayer(
        'exp_new_surv_flow_selec_loss_title',
        title,
        'Select',
        'Do you have any level of hearing loss associated with your tinnitus?'
      );
    } else if (step === '5-4') {
      pushDataLayer(
        'exp_new_surv_flow_selec_react_title',
        title,
        'Select',
        'How do you usually react to tinnitus?'
      );
    } else if (step === '6') {
      pushDataLayer(
        'exp_new_surv_flow_selec_quality_title',
        title,
        'Select',
        'How has tinnitus affected your overall quality of life?'
      );
    } else if (step === '7') {
      pushDataLayer(
        'exp_new_surv_flow_selec_treat_title',
        title,
        'Select',
        'Are you currently seeking treatment for your tinnitus?'
      );
    } else if (step === '8') {
      pushDataLayer(
        'exp_new_surv_flow_chec_techniq_reas',
        title,
        'Checkbox ',
        'Have you tried any techniques or treatments to manage your tinnitus?'
      );
    }
  }

  // Event back
  function fireBackEvent() {
    if ($('.lav-mobile.active')) {
      pushDataLayer(
        'exp_new_surv_flow_but_almost_back',
        'Back',
        'Button',
        'Almost Done!'
      );
      return false;
    }

    const step = $('.lav-step.active').dataset.step;

    if (step === '1') {
      pushDataLayer(
        'exp_new_surv_flow_but_primary_back',
        'Back',
        'Button',
        'What is your primary reason for seeking a tinnitus relief solution?'
      );
    } else if (step === '2') {
      pushDataLayer(
        'exp_new_surv_flow_but_often_back',
        'Back',
        'Button',
        'How often do you experience tinnitus?'
      );
    } else if (step === '3') {
      pushDataLayer(
        'exp_new_surv_flow_but_severity_back',
        'Back',
        'Button',
        'How would you rate the severity of your tinnitus? '
      );
    } else if (step === '4') {
      pushDataLayer(
        'exp_new_surv_flow_but_type_back',
        'Back',
        'Button',
        'What type of sound do you usually hear? '
      );
    } else if (step === 'i1') {
      pushDataLayer(
        'exp_new_surv_flow_but_peopsay_back',
        'Back',
        'Button',
        'Many people say, “There’s nothing you can do for tinnitus”.'
      );
    } else if (step === '5-1') {
      pushDataLayer(
        'exp_new_surv_flow_but_affect_back',
        'Back',
        'Button',
        'How does tinnitus affect your sleep?'
      );
    } else if (step === '5-2') {
      pushDataLayer(
        'exp_new_surv_flow_but_concent_back',
        'Back',
        'Button',
        'How much does tinnitus interfere with your ability to concentrate?'
      );
    } else if (step === '5-3') {
      pushDataLayer(
        'exp_new_surv_flow_but_loss_back',
        'Back',
        'Button',
        'Do you have any level of hearing loss associated with your tinnitus?'
      );
    } else if (step === '5-4') {
      pushDataLayer(
        'exp_new_surv_flow_but_react_back',
        'Back',
        'Button',
        'How do you usually react to tinnitus?'
      );
    } else if (step === 'i2') {
      pushDataLayer(
        'exp_new_surv_flow_but_relief_back',
        'Back',
        'Button',
        'Finding relief from tinnitus can be hard. Treble Health makes it easy.'
      );
    } else if (step === '6') {
      pushDataLayer(
        'exp_new_surv_flow_but_quality_back',
        'Back',
        'Button',
        'How has tinnitus affected your overall quality of life?'
      );
    } else if (step === '7') {
      pushDataLayer(
        'exp_new_surv_flow_but_treat_back',
        'Back',
        'Button',
        'Are you currently seeking treatment for your tinnitus?'
      );
    } else if (step === '8') {
      pushDataLayer(
        'exp_new_surv_flow_but_techniq_back',
        'Back',
        'Button',
        'Have you tried any techniques or treatments to manage your tinnitus?'
      );
    }
  }

  // Event visibility
  function addVisibilitiesEvents() {
    visibilityEvent($('[data-step="0"]'), () => {
      pushDataLayer(
        'exp_new_surv_flow_vis_start_page',
        'Page view ',
        'Visibility ',
        "Let's get you started on your journey towards tinnitus relief. "
      );
    });

    visibilityEvent($('[data-step="1"]'), () => {
      pushDataLayer(
        'exp_new_surv_flow_vis_primary_page',
        'Page view ',
        'Visibility ',
        'What is your primary reason for seeking a tinnitus relief solution?'
      );
    });

    visibilityEvent($('[data-step="2"]'), () => {
      pushDataLayer(
        'exp_new_surv_flow_vis_often_page',
        'Page view ',
        'Visibility ',
        'How often do you experience tinnitus?'
      );
    });

    visibilityEvent($('[data-step="3"]'), () => {
      pushDataLayer(
        'exp_new_surv_flow_vis_severity_page',
        'Page view ',
        'Visibility ',
        'How would you rate the severity of your tinnitus? '
      );
    });

    visibilityEvent($('[data-step="4"]'), () => {
      pushDataLayer(
        'exp_new_surv_flow_vis_type_page',
        'Page view ',
        'Visibility ',
        'What type of sound do you usually hear? '
      );
    });

    visibilityEvent($('[data-step="i1"]'), () => {
      pushDataLayer(
        'exp_new_surv_flow_vis_peopsay_page',
        'Page view ',
        'Visibility ',
        'Many people say, “There’s nothing you can do for tinnitus”.'
      );
    });

    visibilityEvent($('[data-step="5-1"]'), () => {
      pushDataLayer(
        'exp_new_surv_flow_vis_affect_page',
        'Page view ',
        'Visibility ',
        'How does tinnitus affect your sleep?'
      );
    });

    visibilityEvent($('[data-step="5-2"]'), () => {
      pushDataLayer(
        'exp_new_surv_flow_vis_concent_page',
        'Page view ',
        'Visibility ',
        'How much does tinnitus interfere with your ability to concentrate?'
      );
    });

    visibilityEvent($('[data-step="5-3"]'), () => {
      pushDataLayer(
        'exp_new_surv_flow_vis_loss_page',
        'Page view ',
        'Visibility ',
        'Do you have any level of hearing loss associated with your tinnitus?'
      );
    });

    visibilityEvent($('[data-step="5-4"]'), () => {
      pushDataLayer(
        'exp_new_surv_flow_vis_react_page',
        'Page view ',
        'Visibility ',
        'How do you usually react to tinnitus?'
      );
    });

    visibilityEvent($('[data-step="i2"]'), () => {
      pushDataLayer(
        'exp_new_surv_flow_vis_relief_page',
        'Page view ',
        'Visibility ',
        'Finding relief from tinnitus can be hard. Treble Health makes it easy.'
      );
    });

    visibilityEvent($('[data-step="6"]'), () => {
      pushDataLayer(
        'exp_new_surv_flow_vis_quality_page',
        'Page view ',
        'Visibility ',
        'How has tinnitus affected your overall quality of life?'
      );
    });

    visibilityEvent($('[data-step="7"]'), () => {
      pushDataLayer(
        'exp_new_surv_flow_vis_treat_page',
        'Page view ',
        'Visibility ',
        'Are you currently seeking treatment for your tinnitus?'
      );
    });

    visibilityEvent($('[data-step="8"]'), () => {
      pushDataLayer(
        'exp_new_surv_flow_vis_techniq_page',
        'Page view ',
        'Visibility ',
        'Have you tried any techniques or treatments to manage your tinnitus?'
      );
    });

    visibilityEvent($('.lav-loader'), () => {
      pushDataLayer(
        'exp_new_surv_flow_vis_analyz_page',
        'Page view ',
        'Visibility ',
        'Analyzing Responses'
      );
    });

    visibilityEvent($('.lav-login'), () => {
      pushDataLayer(
        'exp_new_surv_flow_vis_results_page',
        'Page view ',
        'Visibility ',
        'Your results of assessment are ready!'
      );
    });

    visibilityEvent($('.lav-mobile'), () => {
      pushDataLayer(
        'exp_new_surv_flow_vis_almost_page',
        'Page view ',
        'Visibility ',
        'Almost Done!'
      );
    });
  }

  function goBack() {
    const currentStep = $('.lav-step.active');
    let prevStep = currentStep.previousElementSibling;

    while (
      prevStep &&
      !prevStep.dataset.target &&
      !$('.lav-quiz__next', prevStep)?.dataset.target &&
      !prevStep.classList.contains('lav-login')
    ) {
      prevStep = prevStep.previousElementSibling;
    }

    currentStep.classList.remove('active');
    prevStep.classList.add('active');

    if (currentStep.classList.contains('lav-mobile')) {
      $('.lav-header__back').style.opacity = 0;
    }

    handleHeader(prevStep.dataset.step);
  }

  function moveToStep(step) {
    console.log('moveToStep', step);
    saveQuizResult();

    let currentStep = $('.lav-step.active');
    if (step === '1') {
      currentStep = $('.lav-intro.active');
    }
    const nextStep = $(`.lav-step[data-step='${step}']`);

    if (!nextStep) {
      console.warn('Step not found');
      return;
    }

    handleHeader(step);

    currentStep.classList.remove('active');
    nextStep.classList.add('active');

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);
  }

  function handleHeader(step) {
    if (step === '0') {
      $('.elementor-location-header').style.display = 'block';
      $('.lav-header').classList.remove('active');
      $('.lav-progress').classList.remove('active');
    }
    if (step === '1') {
      $('.elementor-location-header').style.display = 'none';
      $('.lav-header').classList.add('active');
      $('.lav-progress').classList.add('active');
    }

    const parsedNum = parseInt(step);
    if (parsedNum) {
      $('.lav-header__steps span').innerText = parsedNum;
      $('.lav-header__steps').style.opacity = '1';
      $('.lav-progress span').style.width =
        'calc(100% / 8 * ' + parsedNum + ')';
    } else {
      $('.lav-header__steps').style.opacity = '0';
    }
  }

  function saveQuizResult() {
    const results = {};
    let points = 0;

    $$('.lav-step[data-step]').forEach((stepEl) => {
      if ($('.lav-variant.active', stepEl) || $('.lav-link.active', stepEl)) {
        const question = $('.lav-title', stepEl).innerText.trim();
        const answers = [];
        let point = 0;

        $$('.lav-variant.active', stepEl).forEach((variantEl) => {
          answers.push(variantEl.innerText.trim());
          if (variantEl.dataset.point)
            points += parseInt(variantEl.dataset.point);
          point += parseInt(variantEl.dataset.point);
        });

        if ($('.lav-link.active', stepEl)) {
          answers.push($('.lav-link.active', stepEl).innerText.trim());
        }

        results['step-' + stepEl.dataset.step] = {
          question,
          answers: answers.join(', '),
          raw: answers,
          point,
        };

        results.points = points;
      }
    });

    console.log('result', results);
    window.quizResult = results;
  }

  function initLoader() {
    $('.lav-quiz').style.display = 'none';
    $('.lav-quiz__wrap').classList.add('lav-quiz__wrap_loader');
    $('.lav-step.active')?.classList.remove('active');
    $('.lav-header__back').style.opacity = 0;
    $('.lav-header__steps').style.opacity = 0;
    $('.lav-progress').classList.remove('active');
    $('.lav-loader').classList.add('active');

    jQuery('#lav-phone')
      .mask('(999) 999-9999')
      .bind('keypress', function (e) {
        if (e.which == 13) {
          jQuery(this).blur();
        }
      });

    let progress = 0;
    const timer = setInterval(handleTimer, 50);

    function handleTimer() {
      if (progress >= 100) {
        clearInterval(timer);
        initForms();
        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 50);
        return false;
      }

      progress++;

      let text = 'Analyzing Responses...';
      if (progress >= 47) text = 'Calculating Tinnitus Quiz Result...';
      if (progress >= 75) text = 'Preparing Results...';

      // $('.lav-preloader__value').style.width = progress + '%';
      $('.lav-preloader__value').innerText = progress * 1 + '%';
      $('.lav-preloader__caption').innerText = text;
    }
  }

  function initForms() {
    $('.lav-quiz__wrap').classList.remove('lav-quiz__wrap_loader');
    $('.lav-quiz__wrap').classList.add('lav-quiz__wrap_forms');
    $('.lav-loader').classList.remove('active');
    $('.lav-result').classList.add('active');
    $('.lav-login').classList.add('active');
    $('.lav-header__back').style.opacity = 0;

    location.hash = '#final';

    window.onhashchange = function (event) {
      console.log('event', event, location.hash);
      if (
        event.type === 'hashchange' &&
        location.hash === '' &&
        $('.lav-login.active')
      ) {
        location.reload();
      } else if (
        event.type === 'hashchange' &&
        location.hash === '' &&
        $('.lav-mobile.active')
      ) {
        $('.lav-header__back').click();
        location.hash = '#final';
      }
    };
  }

  function handleForms() {
    $('#lav-email').addEventListener('click', () => {
      pushDataLayer(
        'exp_new_surv_flow_inp_results_email',
        'Email',
        'Input',
        'Your results of assessment are ready!'
      );
    });

    $('#lav-email').addEventListener('input', () => {
      if (!$('#lav-name').value || !$('#lav-email').value) {
        $('.lav-login__btn').classList.add('lav-btn_disabled');
      } else {
        $('.lav-login__btn').classList.remove('lav-btn_disabled');
      }
    });

    $('#lav-name').addEventListener('click', () => {
      pushDataLayer(
        'exp_new_surv_flow_inp_results_name',
        'Name',
        'Input',
        'Your results of assessment are ready!'
      );
    });

    $('#lav-name').addEventListener('input', () => {
      if (!$('#lav-name').value || !$('#lav-email').value) {
        $('.lav-login__btn').classList.add('lav-btn_disabled');
      } else {
        $('.lav-login__btn').classList.remove('lav-btn_disabled');
      }
    });

    $('#lav-phone').addEventListener('click', () => {
      pushDataLayer(
        'exp_new_surv_flow_inp_almost_mobil',
        'Mobile ',
        'Input',
        'Almost Done!'
      );
    });

    $('.lav-login__btn').addEventListener('click', () => {
      if ($('.lav-login__btn').classList.contains('lav-btn_disabled'))
        return false;

      pushDataLayer(
        'exp_new_surv_flow_but_results_cont',
        'Continue',
        'Button',
        'Your results of assessment are ready!'
      );

      const email = $('#lav-email').value;

      var regValidateEmail =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (!regValidateEmail.test(String(email).toLowerCase())) {
        alert('Please enter a valid email address');
        $('#lav-email').focus();
        return false;
      }

      $('.lav-login').classList.remove('active');
      $('.lav-mobile').classList.add('active');

      $('.lav-header__back').style.opacity = 1;

      // submitResults();
    });

    $('.lav-mobile__link').addEventListener('click', () => {
      $('#lav-phone').value = '';
      pushDataLayer(
        'exp_new_surv_flow_lin_almost_trail',
        'No, I don’t want the trial',
        'Link',
        'Almost Done!'
      );

      submitResults();
    });

    $('.lav-mobile__btn').addEventListener('click', () => {
      pushDataLayer(
        'exp_new_surv_flow_but_almost_cont',
        'Continue',
        'Button',
        'Almost Done!'
      );

      submitResults();
    });
  }

  function initGoogleAuth() {
    const scriptTag = document.createElement('script');
    scriptTag.src = 'https://accounts.google.com/gsi/client';
    scriptTag.async = true;
    scriptTag.defer = true;
    document.head.appendChild(scriptTag);

    window.handleCredentialResponse = function ({ credential }) {
      const { email, name } = parseJwt(credential);
      $('#lav-name').value = name;
      $('#lav-email').value = email;
      $('.lav-login__btn').classList.remove('lav-btn_disabled');

      $('.lav-login').classList.remove('active');
      $('.lav-mobile').classList.add('active');

      // submitResults();

      $('.lav-header__back').style.opacity = 1;
      console.log('UserData', email, name);

      function parseJwt(token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(
          window
            .atob(base64)
            .split('')
            .map(function (c) {
              return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join('')
        );

        return JSON.parse(jsonPayload);
      }
    };

    waitFor(
      () => typeof google !== 'undefined',
      () => {
        google.accounts.id.initialize({
          client_id:
            '546596681500-hrs3c33jv854fnq07e2am38n5adjrbg0.apps.googleusercontent.com',
          callback: handleCredentialResponse,
          ux_mode: 'popup',
        });

        google.accounts.id.renderButton(
          $('#google-auth-btn'),
          {
            theme: 'filled_black',
            size: 'large',
            locale: 'en',
            text: 'continue_with',
            width: '480',
            click_listener: () => {
              pushDataLayer(
                'exp_new_surv_flow_but_results_googl',
                'Sign up with Google',
                'Button',
                'Your results of assessment are ready!'
              );
            },
          } // customization attributes
        );
      }
    );
    // google.accounts.id.renderButton(
    //   document.getElementById('buttonDiv'),
    //   {
    //     theme: 'filled_black',
    //     size: 'large',
    //     locale: 'en',
    //     text: 'continue_with',
    //   } // customization attributes
    // );
  }

  function submitResults() {
    $('.lav-quiz__wrap').classList.add('lav-quiz__wrap_submitting');
    $('body').classList.add('lav-body_submitting');
    $('.lav-mobile__btn').innerText = 'Saving...';

    const email = $('#lav-email').value;
    const name = $('#lav-name').value;
    const phone = $('#lav-phone').value;
    const points = quizResult.points;
    let answers = '';

    const parentForm = $('#crs-form form');

    for (const key in quizResult) {
      if (key.includes('step')) {
        answers +=
          quizResult[key].question +
          '\n' +
          '-' +
          quizResult[key].answers +
          '\n\n';
      }
    }

    $('#input_19_135').value = name;
    $('#input_19_122').value = email;
    $('#input_19_132').value = phone;
    $('#input_19_139').value = points;
    $('#crs-form textarea').value = answers;

    $('#gform_submit_button_19').click();

    setTimeout(() => {
      $('.lav-quiz__wrap_submitting')?.classList.remove(
        'lav-quiz__wrap_submitting'
      );
      $('.lav-body_submitting')?.classList.remove('lav-body_submitting');
    }, 3000);
  }

  // *** Utils *** //
  class Modal {
    static list = [];
    constructor(name, html) {
      if (!$('.lav-modal')) {
        this.constructor.init();
      }

      if (this.constructor.list.find((item) => item.name === name)) {
        console.warn('Modal with this name already exists');
        return;
      }

      this.el = document.createElement('div');
      this.el.classList.add('lav-modal__inner', name);
      this.name = name;
      this.el.innerHTML = html;

      $('.lav-modal').insertAdjacentElement('beforeend', this.el);

      this.constructor.list.push(this);
    }

    static init() {
      document.body.insertAdjacentHTML(
        'beforeend',
        "<div class='lav-modal'></div>"
      );

      document.addEventListener('click', (e) => {
        if (
          e.target.classList.contains('lav-modal') ||
          e.target.closest('.lav-modal__close')
        )
          this.close();

        if (e.target.dataset.modal) {
          this.open(e.target.dataset.modal);
        } else if (e.target.closest('[data-modal]')) {
          this.open(e.target.closest('[data-modal]').dataset.modal);
        }
      });

      this.addStyles();
    }

    static open(modalName, cb) {
      document.body.classList.add('lav-modal-open');

      if ($('.lav-modal__inner.active')) {
        $('.lav-modal__inner.active').classList.remove('active');
      }

      $(modalName).classList.add('active');

      if (typeof cb === 'function') cb();

      setTimeout(() => {
        $('.lav-modal').classList.add('active');
      }, 100);
    }

    static close(cb) {
      document.body.classList.remove('lav-modal-open');

      $('.lav-modal')?.classList.remove('active');

      if (typeof cb === 'function') cb();

      setTimeout(() => {
        $('.lav-modal__inner.active')?.classList.remove('active');
      }, 400);
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
    `;

      const stylesEl = document.createElement('style');
      stylesEl.classList.add('exp-modal');
      stylesEl.innerHTML = styles;
      document.head.appendChild(stylesEl);
    }
  }

  // *** HELPERS *** //

  // Waiting for loading by condition
  async function waitFor(condition, cb = false, customConfig = {}) {
    const config = {
      ms: 500, // repeat each 0.5 second if condition is false
      limit: 10, // limit in second seconds

      ...customConfig,
    };

    if (typeof condition === 'function') {
      if (condition()) {
        if (typeof cb === 'function') cb();
        return;
      }

      return new Promise((resolve) => {
        let limit = config.limit * 1000;
        const interval = setInterval(function () {
          if (condition() || limit <= 0) {
            clearInterval(interval);
            if (limit > 0 && typeof cb === 'function') cb();
            resolve();
          }
          limit -= config.ms;
        }, config.ms);
      });
    }

    if (condition.startsWith('.') || condition.startsWith('#')) {
      if ($(condition)) {
        if (typeof cb === 'function') cb($(condition));
        return;
      }

      return new Promise((resolve) => {
        const observer = new MutationObserver((mutations, observer) => {
          if ($(condition)) {
            if (typeof cb === 'function') cb($(condition));
            observer.disconnect();
            resolve();
          }
        });

        observer.observe(document, { childList: true, subtree: true });
      });
    }
  }

  // Mutation Observer
  function initMutation(observeEl = document.body, cbAdded, cbRemoved) {
    const el = typeof observeEl === 'string' ? $(observeEl) : observeEl;

    if (!el) return;

    let observer = new MutationObserver((mutations, observer) => {
      for (let mutation of mutations) {
        if (typeof cbAdded === 'function') {
          for (let node of mutation.addedNodes) {
            if (!(node instanceof HTMLElement)) continue;
            cbAdded(node, observer);
          }
        }

        if (typeof cbRemoved === 'function') {
          for (let node of mutation.addedNodes) {
            if (!(node instanceof HTMLElement)) continue;
            cbRemoved(node, observer);
          }
        }
      }
    });

    observer.observe(el, { childList: true, subtree: true });

    return observer;
  }

  // Intersection Observer
  function initIntersection(observeEl, cb, customConfig) {
    const el = typeof observeEl === 'string' ? $(observeEl) : observeEl;

    if (!el || typeof cb !== 'function') return;

    const config = {
      root: null,
      threshold: 0.3, // 0 - 1 | A threshold of 1.0 means that when 100% of the target is visible within the element specified by the root option, the callback is invoked.
      ...customConfig,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        cb(entry);
      });
    }, config);

    observer.observe(el);

    return observer;
  }

  function focusTimeEvent(el, cb, viewElementProcent = 0.1) {
    let entryTime = 0;
    initIntersection(
      el,
      ({ isIntersecting, time }) => {
        if (isIntersecting) {
          entryTime = time;
        } else if (entryTime) {
          const diffTime = +((time - entryTime) / 1000).toFixed(1);
          cb(diffTime + 's');
          entryTime = 0;
        }
      },
      { threshold: viewElementProcent }
    );
  }

  function visibilityEvent(el, cb, customConfig = {}) {
    const config = {
      threshold: 0.3,
      ...customConfig,
    };
    initIntersection(
      el,
      ({ isIntersecting, target }) => {
        // console.log(target, isIntersecting);
        if (isIntersecting) {
          setTimeout(() => {
            if (isElementInViewport(target)) {
              cb();
            }
          }, 3000);
        }
      },
      config
    );
  }

  // Artificial delay
  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // Check if element in viewport
  function isElementInViewport(selector) {
    const el = typeof selector === 'string' ? $(selector) : selector;

    if (!el) return false;

    const rect = el.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    return (
      rect.top + rect.height * 0.3 < windowHeight &&
      rect.bottom > rect.height * 0.3
    );
  }

  // Shordcode for selectors
  function $(selector, context = document) {
    return context.querySelector(selector);
  }
  function $$(selector, context = document, toSimpleArray = false) {
    const arr = context.querySelectorAll(selector);

    return toSimpleArray ? Array.from(arr) : arr;
  }

  // GA 4 events
  function pushDataLayer(name = '', desc = '', type = '', loc = '') {
    try {
      const event = {
        event: 'event-to-ga4',
        event_name: name.trim(),
        event_desc: desc.trim(),
        event_type: type.trim(),
        event_loc: loc.trim(),
      };

      console.debug('** GA4 Event **', event);

      if (!config.debug) {
        dataLayer.push(event);
      }
    } catch (e) {
      console.log('** GA4 Error **', e);
    }
  }

  // Slider
  function connectSplide() {
    const sliderStyles = document.createElement('link');
    sliderStyles.rel = 'stylesheet';
    sliderStyles.href =
      'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide-core.min.css';
    document.head.appendChild(sliderStyles);

    let sliderScript = document.createElement('script');
    sliderScript.src =
      'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js';
    document.head.appendChild(sliderScript);
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
        clarity(...config.clarity);
      }
    );
  }

  // *** SVG *** //

  function getSvg(name) {
    const svgObj = {
      chevronLeft: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M7.34543 8.97189L14.3842 2.41538C14.6715 2.14933 15.0602 2 15.4653 2C15.8704 2 16.2591 2.14933 16.5464 2.41538C16.6901 2.54817 16.8042 2.70616 16.8821 2.88022C16.9599 3.05429 17 3.24099 17 3.42957C17 3.61814 16.9599 3.80484 16.8821 3.97891C16.8042 4.15298 16.6901 4.31096 16.5464 4.44375L9.49232 10.986C9.34859 11.1188 9.23451 11.2767 9.15665 11.4508C9.0788 11.6249 9.03872 11.8116 9.03872 12.0002C9.03872 12.1887 9.0788 12.3754 9.15665 12.5495C9.23451 12.7236 9.34859 12.8816 9.49232 13.0144L16.5464 19.5566C16.8352 19.8237 16.9982 20.1867 16.9996 20.5657C17.0011 20.9448 16.8408 21.3088 16.5541 21.5778C16.2673 21.8468 15.8776 21.9987 15.4707 22C15.0638 22.0013 14.6729 21.852 14.3842 21.5849L7.34543 15.0284C6.4839 14.2249 6 13.1358 6 12.0002C6 10.8646 6.4839 9.77538 7.34543 8.97189Z" fill="#4622DA"/>
    </svg>`,
      ear: `
      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="48" viewBox="0 0 35 48" fill="none">
        <path d="M11.1782 48C8.25308 48 5.33485 46.8175 3.23954 44.5009C0.196843 41.1332 -0.314883 36.0989 1.96714 31.9636C2.27833 31.4035 2.98368 31.2029 3.54381 31.5072C4.10394 31.8184 4.30448 32.5237 4.00021 33.0839C2.19534 36.3478 2.5826 40.3034 4.96143 42.9381C8.00413 46.2989 13.2528 46.61 16.6689 43.6296C17.7477 42.6891 18.5637 41.4928 19.0408 40.1581C20.7281 35.435 23.4735 31.4104 26.9795 28.5198C30.4025 25.6984 32.3665 21.5424 32.3665 17.1097C32.3665 12.9813 30.7068 9.15027 27.6987 6.32195C24.6906 3.50054 20.742 2.08983 16.6136 2.35261C9.20046 2.82284 3.14273 9.01197 2.81771 16.4389C2.79005 17.082 2.23683 17.5661 1.60755 17.5454C0.964432 17.5177 0.473453 16.9783 0.501113 16.3352C0.881451 7.73957 7.89349 0.582312 16.4753 0.0360093C21.2606 -0.26826 25.8177 1.36373 29.2961 4.62772C32.733 7.85021 34.6969 12.4004 34.6969 17.1028C34.6969 22.227 32.4287 27.04 28.4663 30.3039C25.2784 32.9317 22.782 36.6037 21.233 40.9326C20.6244 42.6407 19.5733 44.1759 18.2041 45.3791C16.1848 47.1356 13.6815 48 11.1782 48Z" fill="#2E168D"/>
        <path d="M9.86576 25.1729C9.54075 25.1729 9.21573 25.0346 8.98753 24.7718C7.21723 22.718 6.24219 20.0833 6.24219 17.3725C6.24219 11.1142 11.3318 6.0177 17.597 6.0177C23.8622 6.0177 28.9518 11.1142 28.9518 17.3725C28.9518 18.0156 28.4331 18.5343 27.79 18.5343C27.1469 18.5343 26.6283 18.0156 26.6283 17.3725C26.6283 12.3935 22.5759 8.34122 17.597 8.34122C12.618 8.34122 8.5657 12.3935 8.5657 17.3725C8.5657 19.537 9.34021 21.6254 10.7509 23.2573C11.1658 23.7414 11.1174 24.4744 10.6264 24.8963C10.4052 25.0761 10.1355 25.1729 9.86576 25.1729Z" fill="#2E168D"/>
        <path d="M13.4588 31.5072C15.9451 31.5072 17.9607 29.4916 17.9607 27.0053C17.9607 24.5191 15.9451 22.5035 13.4588 22.5035C10.9726 22.5035 8.95703 24.5191 8.95703 27.0053C8.95703 29.4916 10.9726 31.5072 13.4588 31.5072Z" fill="#B5A6F2"/>
        <path d="M13.4604 32.6689C10.3348 32.6689 7.79688 30.1241 7.79688 27.0054C7.79688 23.8866 10.3348 21.3418 13.4604 21.3418C16.5861 21.3418 19.124 23.8866 19.124 27.0054C19.124 30.1241 16.5792 32.6689 13.4604 32.6689ZM13.4604 23.6584C11.6141 23.6584 10.1135 25.159 10.1135 27.0054C10.1135 28.8517 11.6141 30.3523 13.4604 30.3523C15.3068 30.3523 16.8074 28.8517 16.8074 27.0054C16.8074 25.159 15.2999 23.6584 13.4604 23.6584Z" fill="#2E168D"/>
      </svg>
    `,
      privacy: `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
      <path d="M9.62498 22C9.5266 22 9.42829 21.9788 9.33699 21.9369L7.27786 20.9866C2.85676 18.9459 0 14.4812 0 9.61196V2.75003C0 2.40057 0.262143 2.10653 0.609605 2.06686C1.96748 1.91176 3.3321 1.68448 4.66475 1.39112C6.2627 1.03933 7.85419 0.584477 9.3957 0.0392906C9.54407 -0.0130969 9.7059 -0.0130969 9.85427 0.0392906C11.3958 0.584477 12.9873 1.03933 14.5852 1.39112C15.9179 1.68454 17.2824 1.91176 18.6403 2.06686C18.9878 2.10646 19.2499 2.40057 19.2499 2.75003V9.61196C19.2499 14.4812 16.3931 18.9459 11.9721 20.9866L9.91298 21.9369C9.82168 21.9788 9.7233 22 9.62498 22ZM1.375 3.35895V9.61196C1.375 13.9468 3.91819 17.9213 7.85385 19.7378L9.62498 20.5552L11.3961 19.7378C15.3318 17.9213 17.875 13.9468 17.875 9.61196V3.35895C16.6722 3.20316 15.4691 2.9934 14.2898 2.73387C12.716 2.38744 11.1477 1.94435 9.62498 1.41594C8.10231 1.94435 6.53392 2.38744 4.96017 2.73387C3.7809 2.99334 2.57778 3.20316 1.375 3.35895Z" fill="#9397A7"/>
      <path d="M12.375 15.8125H6.875C6.11669 15.8125 5.5 15.1958 5.5 14.4375V9.625C5.5 8.86669 6.11669 8.25 6.875 8.25H12.375C13.1333 8.25 13.75 8.86669 13.75 9.625V14.4375C13.75 15.1958 13.1333 15.8125 12.375 15.8125ZM6.875 9.625V14.4375H12.376L12.375 9.625H6.875Z" fill="#9397A7"/>
      <path d="M11.6875 9.62499H7.5625C7.18286 9.62499 6.875 9.31713 6.875 8.93749V7.5625C6.875 6.04615 8.10865 4.8125 9.625 4.8125C11.1413 4.8125 12.375 6.04615 12.375 7.5625V8.93749C12.375 9.31713 12.0671 9.62499 11.6875 9.62499ZM8.25 8.24999H11V7.5625C11 6.80418 10.3833 6.1875 9.625 6.1875C8.86668 6.1875 8.25 6.80418 8.25 7.5625V8.24999Z" fill="#9397A7"/>
      </svg>
    `,
      google: `
    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
      <path d="M19.7436 8.26211L11.5858 8.26172C11.2256 8.26172 10.9336 8.55367 10.9336 8.91391V11.52C10.9336 11.8801 11.2256 12.1721 11.5858 12.1721H16.1798C15.6767 13.4777 14.7378 14.571 13.5399 15.2657L15.4988 18.6566C18.6411 16.8393 20.4988 13.6507 20.4988 10.0812C20.4988 9.57301 20.4613 9.20969 20.3864 8.80059C20.3295 8.48977 20.0596 8.26211 19.7436 8.26211Z" fill="#167EE6"/>
      <path d="M10.4996 16.0871C8.25137 16.0871 6.28871 14.8587 5.23461 13.041L1.84375 14.9955C3.56934 17.9862 6.80192 20.0001 10.4996 20.0001C12.3135 20.0001 14.0251 19.5117 15.4996 18.6606V18.6559L13.5407 15.2649C12.6447 15.7846 11.6078 16.0871 10.4996 16.0871Z" fill="#12B347"/>
      <path d="M15.5 18.6613V18.6566L13.5411 15.2656C12.6451 15.7853 11.6083 16.0878 10.5 16.0878V20.0008C12.3139 20.0008 14.0256 19.5124 15.5 18.6613Z" fill="#0F993E"/>
      <path d="M4.41305 9.99926C4.41305 8.89109 4.71547 7.85434 5.23504 6.95836L1.84418 5.00391C0.988359 6.47371 0.5 8.18066 0.5 9.99926C0.5 11.8179 0.988359 13.5248 1.84418 14.9946L5.23504 13.0402C4.71547 12.1442 4.41305 11.1074 4.41305 9.99926Z" fill="#FFD500"/>
      <path d="M10.4996 3.91305C11.9656 3.91305 13.3123 4.43399 14.3641 5.30051C14.6236 5.51426 15.0007 5.49883 15.2384 5.26113L17.0849 3.41465C17.3546 3.14496 17.3354 2.70352 17.0473 2.45359C15.285 0.924727 12.992 0 10.4996 0C6.80192 0 3.56934 2.01395 1.84375 5.00465L5.23461 6.9591C6.28871 5.14141 8.25137 3.91305 10.4996 3.91305Z" fill="#FF4B26"/>
      <path d="M14.3645 5.30051C14.624 5.51426 15.0012 5.49883 15.2389 5.26113L17.0854 3.41465C17.355 3.14496 17.3358 2.70352 17.0477 2.45359C15.2854 0.924688 12.9925 0 10.5 0V3.91305C11.966 3.91305 13.3127 4.43399 14.3645 5.30051Z" fill="#D93F21"/>
    </svg>
    `,
    };

    return svgObj[name];
  }
})();
