console.debug('*** Experiment started ***');
await waitFor(() => document.head && document.body, false, { ms: 100 });

// Config for Experiment
const config = {
  dir: 'https://flopsi69.github.io/crs/diyBlinds/customization',
  clarity: ['set', '', 'variant_1'],
  debug: true,
};

let script = document.createElement('script');
script.src = 'https://flopsi69.github.io/crs/diyBlinds/customization/index.js';
script.async = false;
document.head.appendChild(script);

// const orig = console.log;
// console.log = function (...args) {
//   orig.apply(console, ['Debug:', ...args]);
// };

// Styles for Experiment
const styles = `
  .configurator__step-heading h3 {
    color: #444C5F;
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    display: flex;
    align-items: flex-start;
    gap: 10px;
    margin-bottom: 16px;
  }
  .o-sidebar--scrollable .o-sidebar__panel-content {
    padding-top: 30px;
    bottom: 140px;
  }
  .cart-totals dl {
    gap: 4px;
  }
  .cart-totals__total.is-stacked dd, .cart-totals__total.is-stacked dt {
    width: auto;
  }
  .o-sidebar__panel-wrap {
    padding: 0 20px;
  }
  .o-sidebar--scrollable .o-sidebar__panel-footer {
    padding: 16px 0 12px;
  }
  .accepted-payments {
    display: flex;
    justify-content: center;
  }
  .features-list__attributes button {
    color: var(--Text, #444C5F);
    font-size: 12px;
    font-weight: 700;
    line-height: 18px;
    text-transform: none;
  }
  .features-list__attributes button svg {
    width: 24px;
    height: 24px;
    top: -3px;
    fill: #444C5F;
  }
  .features-list>li {
    padding: 10px 0;
  }
  .cart-title__text {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
  }
  .lav-features-handled {
    position: relative;
    padding-right: 130px!important;
  }
  .lav-features-handled > div {
    position: absolute;
    right: 10px;
    top: 0;
    border-left: 1px solid var(--Border, #DDDEE9);
    padding-left: 20px;
  }
  .cart-totals__total small {
    color: #444C5F;
    font-size: 14px;
    line-height: 20px;
  }
  .cart-totals__total {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  .o-sidebar--scrollable .o-sidebar__panel-footer:before {
    left: -20px;
    height: 1px;
    background-image: linear-gradient(90deg, #DDDEE9, #DDDEE9 75%, transparent 75%, transparent 100%);
    background-size: 22px 1px;
  }
  .cart-totals__footer {
    display: none;
  }
  .o-sidebar--scrollable .o-sidebar__panel-footer {
    min-height: auto;
  }
  .cart-title__text h4 {
    margin-bottom: 0;
  }
  .lav-shipping-return {
    color: #444C5F;
    font-size: 12px;
    font-weight: 700;
    line-height: 18px;
    text-decoration-line: underline;
    margin-top: 20px;
    cursor: pointer;
    transition: 0.3s;
  }
  @media(hover:hover) {
    .lav-shipping-return:hover {
      opacity: .7;
      text-decoration: none;
    }
  }
  .cart-summary {
    padding-top: 12px;
  }
  .configurator__step-heading h3 .round-number {
    margin-right: 0;
    flex-shrink: 0;
    margin-top: 3px;
    transition: 0.3s;
  }
  .lav-step.active .configurator__step-heading h3 .round-number {
    background: #E83B68;
  }
  .lav-step.current .configurator__step-heading h3 .round-number {
    background: #444c5f;
  }
  .lav-header {
    color: #444C5F;
  }
  .lav-header__title {
    font-size: 30px;
    font-weight: 700;
    line-height: 38px;
  }
  .lav-header__caption {
    margin-top: 10px;
    font-size: 16px;
    line-height: 22px;
  }

  .lav-choose {
    display: flex;
    align-items: center;
    gap: 14px;
    background: var(--Main-White, #FFF);
    box-shadow: 2px 2px 0px 0px rgba(46, 53, 71, 0.20);
    padding: 16px 24px;
    margin-top: 20px;
  }
  .lav-choose__info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    flex-grow: 1;
  }
  .lav-choose__icon {
    line-height: 0;
    flex-shrink: 0;
  }
  .lav-choose__caption {
    color: #444C5F;
    font-size: 16px;
    font-weight: 700;
    line-height: 22px; 
  }
  .lav-choose__btn {
    outline: none!important;
    background: transparent;
    border-radius: 40px;
    border: 1.5px solid #EE8FA9;
    padding: 13px 50px;
    color: #E83B68;
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    line-height: 1;
    transition: 0.3s;
    cursor: pointer;
  }
  @media(hover:hover) {
    .lav-choose__btn:hover {
      background-color: #E83B68;
      color: #fff;
    }
  }

  .configurator {
    margin-top: 30px;
  }

  .how-choose {
    margin-top: 4px;
    background: var(--Main-White, #FFF);
    box-shadow: 2px 2px 0px 0px rgba(46, 53, 71, 0.20);
    cursor: pointer;
    transition: 0.3s;
    padding: 12px 24px;
    margin-bottom: 24px;
  }
  @media(hover:hover) {
    .how-choose:not(.active):hover {
      background-color: #f6f6f6;
    }
  }
  .how-choose__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
  }
  .how-choose__title {
    color: #E83B68;
    font-size: 16px;
    font-weight: 700;
    line-height: 22px;
  }
  .how-choose__head svg {
    transition: 0.3s;
  }
  .how-choose.active .how-choose__head svg {
    transform: rotate(180deg);
  }
  .how-choose__body {
    display: none;
    color: #444C5F;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    padding-top: 12px;
  }
  .how-choose.active .how-choose__body {
    display: block;
  }

  .filter-nav {
    display: none;
  }
  .step2__title {
    color: #444C5F;
    font-size: 20px;
    font-weight: 700;
    line-height: 28px;
    margin-bottom: 16px;
  }
  .colour-chooser ul {
    justify-content: space-between;
  }
  .colour-chooser li {
    flex: 1;
  }
  .colour-chooser li button {
    width: 100%;
  }
  .colour-chooser li button span {
    margin: auto;
  }
  .configurator__step .col-12 > h4 {
    color: #444C5F;
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    margin-bottom: 16px;
  }

  .lav-step-2 .card-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin: 0;
  }
  .lav-step-2 .card-grid li {
    padding: 0;
    max-width: 100%;
  }
  .lav-step-2 .customiser-card {
    display: flex;
    align-items: center;
    padding: 9px 6px;
  }
  .lav-step-2 .customiser-card .sample {
    height: 100px;
    width: 100px;
    margin: 0;
    flex-shrink: 0;
  }
  .lav-step-2 .customiser-card__title, .lav-step-2 .customiser-card__subtitle {
    display: none;
  }
  .lav-card__info {
    margin-left: 16px;
    flex-grow: 1;
  }
  .lav-card__line {
    display: flex;
    justify-content: space-between;
    gap: 15px;
  }
  .lav-card__line + .lav-card__line {
    margin-top: 10px;
  }
  .lav-card__caption {
    color: #444C5F;
    font-size: 14px;
    line-height: 20px;
    text-align: left;
  }
  .lav-card__title {
    color: #444C5F;
    font-size: 16px;
    font-weight: 700;
    line-height: 22px;
  }
  .lav-card__price {
    color: #E83B68;
    font-size: 14px;
    line-height: 20px; 
  }

  .lav-card__progress {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .lav-card__progress-line {
    position: relative;
    width: 82px;
    height: 3px;
    border-radius: 10px;
    background-color: #F0F1F5;
  }
  .lav-card__progress-line:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    border-radius: 10px;
    background-color: #444C5F;
    width: 0%;
  }
  .lav-card__progress-line[data-stars='0']:before {
    width: 0%;
  }
  .lav-card__progress-line[data-stars='1']:before {
    width: 20%;
  }
  .lav-card__progress-line[data-stars='2']:before {
    width: 40%;
  }
  .lav-card__progress-line[data-stars='3']:before {
    width: 60%;
  }
  .lav-card__progress-line[data-stars='4']:before {
    width: 80%;
  }
  .lav-card__progress-line[data-stars='5']:before {
    width: 100%;
  }
  .lav-step-2 .card-grid:not(.active) li:nth-child(1n + 9) {
    display: none;
  }

  .lav-toggler {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    margin-top: 24px;
    color: #444C5F;
    font-size: 16px;
    font-weight: 700;
    line-height: 22px;
    text-decoration-line: underline;
    padding: 5px;
    transition: 0.3s;
    cursor: pointer;
  }
  @media(hover:hover) {
    .lav-toggler:hover {
      opacity: .7;
    }
  }

  .lav-step:not(.active) {
    display: none!important;
  }

  .lav-step-3 .lav-step-3__descr {
    color: #444C5F;
    font-size: 16px;
    line-height: 22px;
  }
  .lav-step-3 .lav-step-3__descr span {
    display: block;
  }
  .lav-step-3 .step-desc {
    display: none;
  }
  .lav-step-3 .configurator__step-item {
    margin-top: 20px;
  }
  .lav-step-3 .measure-panel__howto {
    display: none;
  }
  .mob-toggler-details {
    display: none;
    color: var(--www-diyblinds-com-au-blinds-roller-blinds-order-39028570556640625-x-844-default-river-bed, #444C5F);
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    padding: 4px 12px;
    border: 1px solid var(--Border, #DDDEE9);
    border-radius: 30px;
  }
  .mob-close-details__wrap {
    display: none;
  }
  @media(max-width: 1280px) {
    .mob-toggler-details {
      display: inline-block;
    }
    .lav-details__overflow {
      overflow: hidden;
    }
    .lav-details_active .mob-open-details {
      opacity: 0;
    }
    .js-fixed-sidebar:not(.lav-details_active) .mob-close-details {
      display: none;
    }
    .cart-totals {
      padding: 0;
    }
    .mob-close-details__wrap {
      display: block;
      text-align: right;
    }
    .mob-open-details {
      margin-left: auto;
    }
    .flickity-page-dots .dot.is-selected {
      background: #444C5F;
    }
    .lav-step-3 .lav-step-3__descr span + span {
      margin-top: 16px;
    }
    .cart-totals .handheld-action.is-bottom.is-floating {
      padding: 12px 20px;
    }
    .cart-totals .is-large.button--block-mobile {
      padding: 14px;
      line-height: 22px;
      font-size: 16px;
    }
    .o-sidebar__panel {
      padding-top: 0;
    }
    .js-fixed-sidebar-wrap {
      background: #fff;
      top: 10px;
      bottom: 0;
      left: 0;
      right: 0;
      overflow: auto;
      z-index: 99;
      border-radius: 16px 16px 0 0;
    }
    .js-fixed-sidebar-wrap .o-sidebar__panel-content {
      display: none;
      padding-top: 15px;
    }
    .lav-details_active .o-sidebar__panel-content {
      display: block;
    }
    .lav-details_active .js-fixed-sidebar-wrap {
      position: fixed;
      padding-bottom: 170px;
      padding-top: 15px;
    }
    .handheld-action.is-bottom:not(.is-floating) {
      padding: 12px 20px;
      z-index: 1;
      position: fixed;
      right: 0;
      left: 0;
      background: #fff;
    }
    .o-sidebar--scrollable .o-sidebar__panel-footer {
      padding: 0;
    }
    .handheld-action.is-bottom:before {
      content: "";
      display: block;
      position: absolute;
      bottom: 100%;
      left: 0;
      right: 0;
      height: 1px;
      background-image: linear-gradient(90deg, #DDDEE9, #DDDEE9 75%, transparent 75%, transparent 100%);
      background-size: 22px 1px;
    }
  }
  @media(max-width: 992px) {
    .lav-step-2 .card-grid {
      gap: 12px;
      grid-template-columns: 1fr;
    }
    .cart-summary {
      padding-left: 0;
      padding-right: 0;
    }
  }
  @media(max-width: 768px) {
    .lav-header__title {
      font-size: 20px;
      line-height: 28px
    }
    .lav-choose {
      padding: 12px;
    }
    .lav-choose__info {
      flex-flow: column;
      gap: 2px;
      align-items: flex-start;
    }
    .lav-choose__btn {
      padding: 0;
      border: none;
      line-height: 20px;
      text-decoration: underline;
    }
    .lav-choose__icon svg {
      width: 40px;
      height: 40px;
    }
    .configurator__step-heading h3 {
      font-size: 20px;
      line-height: 28px;
    }
    .configurator__step-heading h3 .round-number {
      height: 24px;
      line-height: 20px;
      width: 24px;
    }
    .customiser-card--product {
      padding: 25px 14px 18px;
    }
    .how-choose {
      padding: 12px 14px;
      margin-bottom: 30px;
      margin-top: 0;
    }
    .how-choose__title {
      font-size: 14px;
      line-height: 20px;
    }
    .step2__title {
      margin-bottom: 6px;
    }
    .configurator__step .col-12 > h4 {
      margin-top: 12px;
    }
    .lav-step-2 .customiser-card {
      padding: 7px 4px;
    }
    .lav-step-2 .customiser-card .sample {
      height: 77px;
      width: 77px;
    }
    .lav-card__title {
      font-size: 14px;
      line-height: 20px;
      text-align: left;
    }
    .lav-card__caption {
      font-size: 12px;
      line-height: 18px;
      white-space: nowrap;
    }
    .lav-card__line {
      gap: 10px;
    }
    .lav-card__line + .lav-card__line {
      margin-top: 8px;
    }
    .lav-card__progress-line {
      max-width: 82px;
      width: 100%;
    }
    .lav-card__progress {
      flex-grow: 1;
      justify-content: flex-end;
    }
    .lav-toggler {
      margin-top: 16px;
    }
    .cart-totals__total {
      display: block;
      padding-top: 0;
      padding-bottom: 12px;
    }
    .cart-totals__total dd, .cart-totals__total dt {
      font-size: 20px;
    }
    .cart-totals__total.is-stacked dt {
      font-size: 16px;
    }
    .cart-totals dl {
      align-items: center;
      margin-bottom: 6px;
    }
    .cart-totals__total small {
      display: block;
    }
    .cart-totals__total.is-stacked dd {
      margin: 0;
    }
  }
`;

const svgObj = getSvgObj();

addStyles(styles, 'exp-styles');

// *** Logic *** //
const observer = initMutation(document.body, (node, observer) => {
  if (node.classList.contains('o-sidebar--scrollable')) {
    initExp();
    observer.disconnect();
  }
});

if ($('.o-sidebar--scrollable')) {
  initExp();
  observer.disconnect();
}

function initExp() {
  console.debug('** InitExp **');
  // TODO make current step with black dot

  const target = location.href.includes('diy-designer-curtains/order')
    ? 'curtain'
    : location.href.includes('roller-blinds/order')
    ? 'blinds'
    : false;

  if (!target) return false;

  addHeader(target);
  initSteps(target);
  handleSidebar();
}

function addHeader(target) {
  let headerEl = `
    <div class='lav-header'>
      <div class='lav-header__title'>Choose your perfect ${
        target === 'blinds' ? 'Roller Blind' : 'Curtain'
      }!</div>
      <div class='lav-header__caption'>Create your unique ${
        target === 'blinds' ? 'Blinds' : 'Curtains'
      } with the help of our customization widget</div>
    </div>
  `;

  if (location.pathname.includes('roller-blinds/order') && false) {
    headerEl += `
      <div class='lav-choose lav-header__choose'>
        <div class='lav-choose__icon'>${svgObj.question}</div>
        <div class='lav-choose__info'>
          <div class='lav-choose__caption'>Not sure what to choose? </div>
          <button class='lav-choose__btn lav-choose__popular'>Check out our most popular options</button>
        </div>
      </div>
    `;
  }

  $('.o-sidebar__workflow').insertAdjacentHTML('afterbegin', headerEl);

  visibilityEvent($('.lav-header__choose'), () => {
    pushDataLayer(
      'exp_pdp_clarity_vis_rollblin_link',
      'Separate link',
      'Visibility',
      'PDP. Choose your perfect Roller Blind!'
    );
  });

  $('.lav-choose__popular')?.addEventListener('click', function () {
    pushDataLayer(
      'exp_pdp_clarity_lin_rollblin_chec',
      'Check out our most popular options',
      'Link',
      'PDP. Choose your perfect Roller Blind! Not sure what to choose? '
    );
    // location.href = '';
  });
}

function initSteps(target) {
  const activeStep = '1';
  const stepsEl = Array.from($$('.configurator__step'));

  for (const step in stepsEl) {
    const idx = +step + 1;
    stepsEl[step].classList.add('lav-step', 'lav-step-' + idx);

    if (idx == 1 || idx == 2) {
      stepsEl[step].classList.add('active');
      $('.lav-step.current')?.classList.remove('current');
      stepsEl[step].classList.add('current');
    }
  }

  initMutation($('.o-sidebar--scrollable'), (node) => {
    if (
      node.classList.contains('configurator__step') &&
      node.querySelector('.filter-nav')
    ) {
      node.classList.add('lav-step', 'lav-step-2', 'active');
      $('.lav-step-3').classList.remove('active');
      $('.lav-step-4').classList.remove('active');
      // console.log('fire1');

      if (
        !$('.lav-step-2 .filter-nav__item:last-of-type').classList.contains(
          'filter-nav__item--is-active'
        )
      ) {
        $('.filter-nav__item:last-of-type').click();
      }
    }

    if (node.classList.contains('colour-chooser')) {
      // console.log('fire2');
      waitFor(
        () => $$('.lav-step-2 .card-grid .customiser-card--fabric').length,
        async () => {
          $('.lav-step-2 .colour-chooser__wrap .is-selected')
            .closest('li')
            .classList.add('active');
          // console.log('fire3');
          await delay(100);
          updateCards();
        },
        { ms: 25 }
      );
    }

    if (
      node.closest('.features-list') &&
      node.querySelector('[style="flex-direction: column;"]')
    ) {
      node.classList.add('lav-features-handled');
    }

    if (node.closest('.lav-step-3') && node.tagName === 'FIELDSET') {
      $('.lav-step-4').classList.remove('active');
      $$('.input input', node)?.forEach((item) => {
        item.addEventListener('input', function () {
          if ($('.lav-step-3 .input.has-error')) {
            $('.lav-step-4').classList.remove('active');
            $('.lav-step.current')?.classList.remove('current');
            $('.lav-step-3').classList.add('current');
          } else {
            $('.lav-step-4').classList.add('active');
            $('.lav-step.current')?.classList.remove('current');
            $('.lav-step-4').classList.add('current');
          }
        });
      });
      $(
        '.button--icon-light-and-text + .button--icon-light-and-text',
        node
      )?.addEventListener('click', function () {
        if ($('.lav-step-3 .input.has-error')) {
          $('.lav-step-4').classList.remove('active');
          $('.lav-step.current')?.classList.remove('current');
          $('.lav-step-3').classList.add('current');
        } else {
          $('.lav-step-4').classList.add('active');
          $('.lav-step.current')?.classList.remove('current');
          $('.lav-step-4').classList.add('current');
        }
      });
    }
  });

  handleStepThree();

  if (
    !$('.lav-step-2 .filter-nav__item:last-of-type').classList.contains(
      'filter-nav__item--is-active'
    )
  ) {
    $('.lav-step-2 .filter-nav__item:last-of-type').click();
  }

  // Step 2
  async function updateCards() {
    console.log('UpdateCards');
    $('.lav-step-3').classList.remove('active');
    $('.lav-step-4').classList.remove('active');

    if (!$('.step2__title')) {
      $('.lav-step-2 .filter-nav').insertAdjacentHTML(
        'beforebegin',
        '<div class="step2__title">Select your colour</div>'
      );
    }

    if (!$('.lav-step-2 .how-choose') && false) {
      $('.lav-step-2  .configurator__step-heading').insertAdjacentHTML(
        'afterend',
        `
      <div class='how-choose'>
        <div class='how-choose__head'>
          <div class='how-choose__title'>How to choose colour and fabric?</div>
          ${svgObj.chevronDown}
        </div>
        <div class='how-choose__body'>
          Lorem ipsum dolor sit amet consectetur. Faucibus vel vitae facilisis eget amet urna. Aliquet elementum ac egestas senectus. A cursus purus lorem donec ullamcorper feugiat sed. Laoreet sed faucibus est feugiat aliquam sed adipiscing consequat. Orci consectetur varius non odio nulla amet sociis ullamcorper. Cursus integer ac elementum turpis.
          <br/><br/>
          Volutpat turpis a dui elementum. Odio amet in odio sit lectus. Elementum mauris molestie vitae morbi enim placerat consectetur ullamcorper sed. Pellentesque viverra tellus eget viverra. Mauris magna congue cursus vestibulum vitae massa eu ac a. 
        </div>
      </div>
    `
      );

      visibilityEvent($('.lav-step-2 .how-choose'), () => {
        pushDataLayer(
          'exp_pdp_clarity_vis_blockout_drop',
          'Dropdown',
          'Visibility',
          "PDP. Choose 'Blockout' colour & fabric"
        );
      });

      $('.lav-step-2 .how-choose').addEventListener('click', function () {
        pushDataLayer(
          'exp_pdp_clarity_drop_blockout_colou',
          'How to choose colour and fabric?',
          'Dropdown',
          "PDP. Choose 'Blockout' colour & fabric"
        );
        this.classList.toggle('active');
      });
    }

    if ($('.colour-chooser__wrap:not(.lav-colour-handled)')) {
      visibilityEvent($('.colour-chooser'), () => {
        pushDataLayer(
          'exp_pdp_clarity_vis_youcol_icon',
          'Icone colour',
          'Visibility',
          "PDP. Choose 'Blockout' colour & fabric. Select your colour"
        );
      });

      $('.colour-chooser__wrap').classList.add('lav-colour-handled');

      $('.colour-chooser__wrap').addEventListener('click', function (e) {
        if (!e.target.closest('li') || e.target.closest('li.active')) return;

        pushDataLayer(
          'exp_pdp_clarity_icon_youcol_sele',
          `${$('.sr-only', e.target.closest('li')).textContent} - Select`,
          'Icone',
          "PDP. Choose 'Blockout' colour & fabric. Select your colour"
        );
        $('.colour-chooser__wrap li.active')?.classList.remove('active');
        e.target.closest('li').classList.add('active');
        updateCards();
      });

      visibilityEvent($('.lav-step-2 .card-grid'), () => {
        pushDataLayer(
          'exp_pdp_clarity_vis_youfabr_icon',
          'Icone fabrics',
          'Visibility',
          "PDP. Choose 'Blockout' colour & fabric. Stark white "
        );
      });
    }

    $$('.lav-step-2 .customiser-card').forEach((card) => {
      card.addEventListener('click', function () {
        pushDataLayer(
          'exp_pdp_clarity_icon_youfabr_sele',
          `${$('.lav-card__title', card).textContent} - Select`,
          'Icone',
          "PDP. Choose 'Blockout' colour & fabric. Stark white fabrics"
        );
        $('.lav-step-3').classList.add('active');
        $('.lav-step.current')?.classList.remove('current');
        $('.lav-step-3').classList.add('current');
        if ($('.lav-step-3 .input.has-error')) {
          $('.lav-step-4').classList.remove('active');
          $('.lav-step.current')?.classList.remove('current');
          $('.lav-step-3').classList.add('current');
        } else {
          $('.lav-step-4').classList.add('active');
          $('.lav-step.current')?.classList.remove('current');
          $('.lav-step-4').classList.add('current');
        }
      });

      const title = card.querySelector('.customiser-card__title').innerText;
      const price = card.querySelector('.customiser-card__subtitle').innerText;
      let caption = '100% Polyester';
      let stars = 4;

      card.insertAdjacentHTML(
        'beforeend',
        `
        <div class="lav-card__info">
          <div class="lav-card__line">
            <div class="lav-card__title">${title}</div>
            <div class="lav-card__price">${price}</div>
          </div>

          <div class="lav-card__line">
            <div class="lav-card__caption">${caption}</div>
          </div>

          <div class="lav-card__line">
            <div class="lav-card__caption">Energy efficiency:</div>
            <div class="lav-card__progress">
              <div class="lav-card__progress-line" data-stars='${stars}'></div>
              <div class="lav-card__caption">${stars}/5</div>
            </div>
          </div>
        </div>
      `
      );

      $('.lav-card__info', card);
    });

    if (
      $$('.lav-step-2 .customiser-card').length > 8 &&
      !$('.lav-toggler') &&
      !$('.lav-step-2 .card-grid.active')
    ) {
      $('.lav-step-2 .card-grid').insertAdjacentHTML(
        'afterend',
        `
        <div class="lav-toggler">Show more fabrics ${svgObj.chevronDown}</div>
      `
      );

      $('.lav-step-2 .lav-toggler').addEventListener('click', function () {
        this.remove();
        $('.lav-step-2 .card-grid').classList.add('active');
      });
    }

    $('.lav-step.current')?.classList.remove('current');
    $('.lav-step-2').classList.add('current');
  }

  // Step 3
  function handleStepThree() {
    const parent = stepsEl[2];

    let markup = `
      <div class='lav-step-3__descr'>
        <span>Min/max width and drop will vary based on selected fabric range in the previous step.</span>
        <span>*Motorised options available for Blinds  wider than 595mm.</span>
      </div>
    `;

    if ($('.measure-panel__howto', parent)) {
      markup += `
        <div class='lav-choose lav-step-3__choose'>
          <div class='lav-choose__icon'>${svgObj.question}</div>
          <div class='lav-choose__info'>
            <div class='lav-choose__caption'>How to measure?</div>
            <button class='lav-choose__btn'>Check guide</button>
          </div>
        </div>
      `;
    }

    $('.step-desc', parent).insertAdjacentHTML('beforebegin', markup);

    visibilityEvent($('.lav-step-3__descr'), () => {
      pushDataLayer(
        'exp_pdp_clarity_vis_measur_icon',
        'Text',
        'Visibility',
        'PDP. Measurements'
      );
    });

    $('.lav-choose__btn', parent)?.addEventListener('click', function () {
      pushDataLayer(
        'exp_pdp_clarity_lin_measur_guid',
        'Check guide',
        'Link',
        'PDP. Measurements. How to measure?'
      );
      $('.measure-panel__howto a', parent).click();
    });

    $$('.lav-step-3 .input input')?.forEach((item) => {
      item.addEventListener('input', function () {
        if ($('.lav-step-3 .input.has-error')) {
          $('.lav-step-4').classList.remove('active');
          $('.lav-step.current')?.classList.remove('current');
          $('.lav-step-3').classList.add('current');
        } else {
          $('.lav-step-4').classList.add('active');
          $('.lav-step.current')?.classList.remove('current');
          $('.lav-step-4').classList.add('current');
        }
      });
    });

    $('#measure-width-blind-0')?.addEventListener('input', function () {});
  }
}

function handleSidebar() {
  $$('.o-sidebar__panel .offset-md-1').forEach((item) => {
    item.classList.remove('offset-md-1', 'col-md-10');
    item.classList.add('col-md-12');
  });

  $('.project').insertAdjacentElement('afterend', $('.accepted-payments'));

  $('.accepted-payments').insertAdjacentHTML(
    'afterend',
    `<div class='lav-shipping-return'>Shipping calculator and return details</div>`
  );

  $('.lav-shipping-return').addEventListener('click', function () {
    pushDataLayer(
      'exp_pdp_clarity_lin_stickdet_shipp',
      'Shipping calculator and return details',
      'Link',
      'PDP Sticky Details'
    );
    location.href = '/shipping-returns';
  });

  $$('.features-list [style="flex-direction: column;"]').forEach((item) => {
    item.closest('li').classList.add('lav-features-handled');
  });
  // $('.features-list__attributes').previousElementSibling
  $('.cart-title__text').insertAdjacentHTML(
    'beforeend',
    `<img src='${config.dir}/img/benefits.svg' alt=''>`
  );

  waitFor(
    () => $('.features-list__attributes>button'),
    () => {
      $('.features-list__attributes>button').click();

      $('.features-list__attributes>button').addEventListener('click', () => {
        pushDataLayer(
          'exp_pdp_clarity_drop_stickdet_show',
          'Show selected options',
          'Dropdown',
          'PDP Sticky Details'
        );
      });
    }
  );

  $('.cart-totals__total dl').insertAdjacentHTML(
    'beforeend',
    `<div class="mob-toggler-details mob-open-details">Show details</div>`
  );

  $('.js-fixed-sidebar-wrap').insertAdjacentHTML(
    'afterbegin',
    `
      <div class="mob-close-details__wrap">
        <div class="mob-toggler-details mob-close-details">Hide details</div>
      </div>
    `
  );

  $('.mob-open-details').addEventListener('click', function () {
    pushDataLayer(
      'exp_pdp_clarity_but_rollblin_detai',
      'Show details',
      'Button',
      'PDP. Select Roller Blind type'
    );
    $('.js-fixed-sidebar').classList.add('lav-details_active');
    document.body.classList.add('lav-details__overflow');
  });

  $('.mob-close-details').addEventListener('click', function () {
    pushDataLayer(
      'exp_pdp_clarity_but_stickdet_hide',
      'Hide details',
      'Button',
      'PDP Sticky Details'
    );
    $('.js-fixed-sidebar').classList.remove('lav-details_active');
    document.body.classList.remove('lav-details__overflow');
  });

  waitFor(
    () => $('.handheld-action button'),
    () => {
      $('.handheld-action button').addEventListener('click', () => {
        pushDataLayer(
          'exp_pdp_clarity_sticbut_rollblin_add',
          'Add to cart',
          'Sticky button ',
          'PDP. Choose your perfect Roller Blind!'
        );
      });
    }
  );

  visibilityEvent($('.o-sidebar__panel-content'), () => {
    pushDataLayer(
      'exp_pdp_clarity_vis_stickdet_page',
      'Page view',
      'Visibility ',
      'PDP Sticky Details'
    );
  });
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

function visibilityEvent(el, cb, viewElementProcent = 0.1) {
  let entryTime = 0;
  let interval;

  initIntersection(
    el,
    ({ isIntersecting, time }) => {
      if (isIntersecting) {
        interval = setInterval(() => {
          entryTime += 500;
          if (entryTime >= 3000) {
            clearInterval(interval);
            entryTime = 0;
            cb();
          }
        }, 500);
      } else {
        clearInterval(interval);
        entryTime = 0;
      }
    },
    { threshold: viewElementProcent }
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
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function addStyles(css, customClass) {
  const stylesEl = document.createElement('style');
  if (customClass) {
    stylesEl.classList.add(customClass);
  }
  stylesEl.innerHTML = css;
  document.head.appendChild(stylesEl);
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
      event_name: name,
      event_desc: desc,
      event_type: type,
      event_loc: loc,
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

function getSvgObj() {
  return {
    question: `
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.0003 29.3334C23.3337 29.3334 29.3337 23.3334 29.3337 16.0001C29.3337 8.66675 23.3337 2.66675 16.0003 2.66675C8.66699 2.66675 2.66699 8.66675 2.66699 16.0001C2.66699 23.3334 8.66699 29.3334 16.0003 29.3334Z" stroke="#E83B68" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M15.9997 17.3334V17.0224C15.9997 16.015 16.6744 15.4816 17.3491 15.052C18.0078 14.6372 18.6663 14.1038 18.6663 13.1261C18.6663 11.7631 17.4776 10.6667 15.9997 10.6667C14.5217 10.6667 13.333 11.7631 13.333 13.1261" stroke="#E83B68" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M15.9883 20.6667H16.0123" stroke="#E83B68" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    `,
    chevronDown: `
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="9" viewBox="0 0 14 9" fill="none"><path d="M1 1L7 7L13 1" stroke="#444C5F" stroke-width="2" stroke-linecap="round"/></svg>
    `,
  };
}

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
