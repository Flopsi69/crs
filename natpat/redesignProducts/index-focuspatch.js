(function () {
  console.debug('*** Experiment started ***')

  // Config for Experiment
  const config = {
    // dir: 'http://127.0.0.1:5500/natpat/redesignProducts/',
    dir: 'https://flopsi69.github.io/crs/natpat/redesignProducts/',
    clarity: ['set', 'exp_fp_sub_and_save', 'variant_1'],
    debug: false
  }

  // Styles for Experiment
  const styles = /* css */ `
    #purchase .lp-fp--star-rating {
      margin-bottom: 15px;
    }
    #getNow .js-heading {
      margin-bottom: 20px;
    }
    .lav-subtitle {
      font-family: Roboto;
      color: #000;
      font-size: 17px;
      line-height: 1.4;
      text-align: left;
    }
    #purchase .magicpatch-packs {
      margin-top: 36px;
    }
    #getNow .days {
      margin: 0;
    }
    .reviews-slide {
      padding-top: 20px;
    }
    #purchase .view-prices .button-proceed {
      border-radius: 38px;
      height: 64px;
      font-size: 22px;
      margin-top: 0;
      box-shadow: 0 4px 15px 0 rgba(72, 67, 69, 0.51);
    }
    @media(hover:hover) {
      #purchase .view-prices .button-proceed:hover {
        color: #fff;
      }
    }
    #purchase .view-prices .button-proceed:not(.lav-active) {
      pointer-events: none;
      background: rgba(0, 80, 212, 0.50);
    }
    .view-prices h3 {
      margin-bottom: 18px;
      margin-top: 0;
      white-space: nowrap;
    }

    .lav-plans {
      display: grid;
      gap: 12px;
      margin-top: 36px;
    }
    .lav-plan {
      position: relative;
      border-radius: 12px;
      border: 1px solid #E2E2E2;
      background: #FFF;
      box-shadow: 0 2px 4px 0 rgba(12, 11, 11, 0.10), 0 12px 32px 0 rgba(0, 0, 0, 0.05);
      transition: background .3s;
    }
    .lav-plan.active {
      border: 2px solid #F05A27;
      background: #FBEFDD;
    }
    .lav-plan:not(.active):hover {
      cursor: pointer;
    }
    .lav-plan[data-packs='3'] {
      order: -4;
    }
    .lav-plan[data-packs='1'] {
      order: -3;
    }
    .lav-plan[data-packs='2'] {
      order: -2;
    }
    .lav-plan[data-packs='4'] {
      order: -1;
    }
    .lav-plan__header {
      display: flex;
      align-items: center;
      gap: 20px;
      padding: 12px 16px;
      transition: .3s;
    }
    .lav-plan.active .lav-plan__header {
      padding-top: 19px;
      padding-bottom: 19px;
    }
    .lav-plan__title {
      color: #202020;
      font-family: "DINEngschrift LT";
      font-size: 28px;
      font-style: normal;
      font-weight: 400;
      line-height: 28px;
      width: 73px;
      text-align: left;
    }
    .lav-plan__count {
      padding-top: 5px;
      color: #5D5D5D;
      font-family: "DINEngschrift LT";
      font-size: 20px;
      font-weight: 400;
      line-height: 20px;
    }
    .lav-plan__price {
      margin-left: auto;
      text-align: right;
      font-family: Roboto;
    }
    .lav-plan__price-head {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .lav-plan__price-new {
      color: #000;
      font-size: 18px;
      font-weight: 500;
      line-height: 28px;
    }
    .lav-plan__price-old {
      color: #5D5D5D;
      font-size: 16px;
      font-weight: 500;
      line-height: 28px;
      text-decoration: line-through;
    }
    .lav-plan__price-per-patch {
      color: #202020;
      font-size: 12px;
      font-weight: 500;
      line-height: 22px;
    }
    .lav-plan__price-per-patch span {
      color: #000;
    }
    .lav-plan__bages {
      font-family: "DIN Condensed";
      position: absolute;
      top: -1px;
      left: 12px;
      display: flex;
      gap: 4px;
      color: #FFF;
      text-align: center;
      font-size: 14px;
      font-weight: 400;
      line-height: 12px;
      letter-spacing: 1px;
      text-transform: uppercase;
      transform: translateY(-100%);
      transition: .2s;
    }
    .lav-plan.active .lav-plan__bages {
      top: -2px;
    }
    .lav-plan__bage {
      border-radius: 4px 4px 0 0;
      padding: 6px 10px 2px;
    }
    .lav-plan__bage--best {
      background: #000;
    }
    .lav-plan__bage--save {
      background: #F05A27;
      background:
      linear-gradient(135deg,
        rgba(255,255,255,0.16) 25%,
        rgba(255,255,255,0.06) 25%,
        rgba(255,255,255,0.06) 50%,
        rgba(255,255,255,0.16) 50%,
        rgba(255,255,255,0.16) 75%,
        rgba(255,255,255,0.06) 75%
      ),
      #F05A27;
      background-size: 30px 30px;
    }
    .lav-plan__body {
      display: none;
      padding: 8px 12px 12px;
      text-align: left;
    }
    .lav-plan__inner {
      border-radius: 8px;
      border: 1px solid #E2E2E2;
      background: #FFF;
      padding: 22px 16px 16px;
    }
    .lav-plan__inner--single {
      border-radius: 4px;
      border-left: 6px solid #C1390A;
      background: #F05A27;
      padding: 12px 12px 12px 6px!important;
    }
    .lav-plan__note {
      color: #FFF;
      text-align: center;
      font-family: Roboto;
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
    }

    .lav-subscribe {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
    }
    .lav-subscribe__toggler {
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
    }
    .lav-subscribe__switch {
      position: relative;
      display: block!important;
      width: 52px;
      height: 28px;
      border: 2px solid #F05A27;
      border-radius: 100px;
      transition: 0.2s;
    }
    .lav-subscribe__switch::before {
      content: '';
      position: absolute;
      top: 2px;
      left: 2px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #F05A27;
      transition: 0.2s;
    }
    .lav-subscribe__switch.active {
      background: #F05A27;
    }
    .lav-subscribe__switch.active:before {
      background: #FFF;
      transform: translateX(25px);
    }
    .lav-subscribe__label {
      color: #000;
      font-family: Roboto;
      font-size: 16px;
      font-weight: 600;
      line-height: 28px;
    }
    .lav-subscribe__bage {
      white-space: nowrap;
      border-radius: 4px;
      background: #F05A27;
      box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.12);
      color: #FFF;
      text-align: center;
      font-family: "DINEngschrift LT";
      font-size: 20px;
      line-height: 12px;
      letter-spacing: 1px;
      text-transform: uppercase;
      padding: 12px 20px;
    }

    .lav-delivery {
      display: none;
      margin-top: 14px;
    }
    .lav-delivery__label {
      color: #0C0B0B;
      font-family: Roboto;
      font-size: 12px;
      font-weight: 400;
      line-height: 21px;
      text-transform: capitalize;
    }
    .lav-delivery .rtx-plan-preview {
      margin-top: 5px;
      display: block!important;
      cursor: pointer;
    }

    .lav-benefits {
      display: grid;
      gap: 12px;
      padding-top: 12px;
      margin-top: 12px;
      border-top: 1px solid rgba(0, 0, 0, 0.12);
    }
    .lav-benefits__item {
      color: #0C0B0B;
      font-family: Roboto;
      font-size: 15px;
      font-weight: 500;
      letter-spacing: -0.25px;
      padding-left: 25px;
      background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none"><g clip-path="url(%23clip0_116_5057)"><path d="M8.5 17C13.1944 17 17 13.1944 17 8.5C17 3.80558 13.1944 0 8.5 0C3.80558 0 0 3.80558 0 8.5C0 13.1944 3.80558 17 8.5 17Z" fill="black"/><path d="M2.73926 8.68993L7.24638 13.1971L14.2575 6.18597L12.7551 4.68359L7.24638 10.1923L4.24163 7.18755L2.73926 8.68993Z" fill="white"/></g><defs><clipPath id="clip0_116_5057"><rect width="17" height="17" fill="white"/></clipPath></defs></svg>') left 2px no-repeat;
      background-size: 17px;
      margin-left: 5px;
    }
    .lav-benefits__item--mark {
      color: #F05A27;
    }
    .lav-benefits__item--mob {
      display: none;
    }

    #purchase .magicpatch-packs, #purchase .stay-container {
      display: none!important;
    }
    .view-prices .rtx-before-price {
      color: #5D5D5D;
      font-size: 20px;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: 0.2px;
    }
    .view-prices .rtx-before-price + .rtx-before-price {
      margin-right: 12px;
    }
    .rtx-plan-selected-text {
      font-weight: 500;
    }
    .rtx-plan-preview::before {
      background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><script xmlns=""/><path d="M7.15984 9.49366L7.4874 9.16382C7.59049 9.06081 7.72765 9.00407 7.87423 9.00407C8.02074 9.00407 8.15806 9.06081 8.26115 9.16382L11.9978 12.9006L15.7387 9.15968C15.8416 9.05667 15.9789 9 16.1254 9C16.2719 9 16.4093 9.05667 16.5124 9.15968L16.84 9.48748C17.0533 9.70066 17.0533 10.0479 16.84 10.2611L12.386 14.7311C12.2831 14.834 12.1459 14.9066 11.9981 14.9066L11.9964 14.9066C11.8498 14.9066 11.7126 14.834 11.6097 14.7311L7.15984 10.2732C7.05675 10.1703 7.00016 10.029 7 9.88245C7 9.73586 7.05675 9.59651 7.15984 9.49366Z" fill="%236E828C"/></svg>');
      filter: none;
    }
    @media(hover:hover) {
      .rtx-plan-options li:hover {
        cursor: pointer;
      }
      .rtx-plan-options li:hover span {
        color: #fff;
      }
    }
    .rtx-plan-selected-text b, .rtx-plan-selected-text span {
      display: none;
    }
    .view-prices h3 {
      display: flex;
      align-items: center;
      color: #000;
      font-size: 28px!important;
      line-height: 28.8px;
      letter-spacing: 0.28px;
    }
    #purchase div.view-prices {
      margin-top: 24px;
    }
    .hide-price-pack {
      display: flex;
      align-items: center;
      gap: 3px;
      color: #F3541D;
      font-size: 24px;
      margin-left: 15px;
    }
    .hide-price-pack svg {
      width: 24px;
      height: 22px;
    }
    @media(max-width: 992px) {
      .lav-plan__header {
        gap: 8px;
      }
      .lav-plan__count {
        font-size: 16px;
      }
      .lav-plan__title {
        font-size: 24px;
        width: 64px;
      }
    }
    @media(max-width: 768px) {
      #getNow .free-shipping-checkout {
        margin-bottom: 12px;
      }
      .lav-plans {
        margin-top: 12px;
        letter-spacing: 0;
      }
      .lav-plan[data-packs='1'] {
        order: -1;
      }
      .lav-plan[data-packs='2'] {
        order: -2;
      }
      .lav-plan[data-packs='3'] {
        order: -3;
        margin-top: 20px;
      }
      .lav-plan[data-packs='4'] {
        order: -4;
      }
      .lav-plan__body {
        padding: 12px 10px;
      }
      .lav-plan.active .lav-plan__header {
        padding: 13px 14px 11px;
      }
      #purchase .view-prices .button-proceed {
        height: 62px;
      }
      .lav-benefits {
        margin-top: 0;
      }
      .reviews-slide {
        padding-top: 0!important;
        margin-top: 24px!important;
      }
      #getNow .days {
        width: 100%;
      }
      .lav-subscribe__label {
        font-size: 15px;
        line-height: 1.2;
      }
      .lav-subscribe__bage {
        padding: 8px 12px;
        font-size: 18px;
      }
      .lav-subscribe {
        flex-wrap: nowrap;
        gap: 12px;
        padding-bottom: 23px;
      }
      .lav-plan__inner {
        padding: 19px 12px 8px;
      }
      .lav-benefits__item {
        font-size: 14px;
        margin-left: 0;
        letter-spacing: -0.35px;
      }
      .lav-benefits__item--desk {
        display: none;
      }
      .lav-benefits__item--mob {
        display: inline;
      }
      .lav-delivery {
        margin-top: 0;
        padding-bottom: 12px;
      }
      .rtx-plan-preview {
        padding-right: 12px;
        padding-left: 12px;
      }
      #getNow .js-heading + .lp-fp--mobile {
        display: none;
      }
    }
    @media(max-width: 390px) {
      .hide-price-pack {
        margin-left: 10px;
        font-size: 23px;
      }
      .hide-price-pack svg {
        width: 22px;
      }
    }
  `

  const stylesEl = document.createElement('style')
  stylesEl.classList.add('exp-styles')
  stylesEl.innerHTML = styles

  // *** Logic *** //
  initExp()

  async function initExp() {
    await waitFor(() => document.head && document.body && _$('#getNow .product__title'), false, { ms: 20 })

    document.body.appendChild(stylesEl)

    console.debug('** InitExp **')
    updateUi();
    createNewPlans();
  }

  async function checkChangePrice() {
    await waitFor('.rtx-subscription__btn-container', false, { ms: 20 })

     let observer = new MutationObserver((mutations, observer) => {
       for (let mutation of mutations) {
         if (mutation.target.classList.contains('is-selected')) {
           updatePrices()
         }
      }
    })

    observer.observe(_$('.rtx-subscription__btn-container'), { childList: true, subtree: true, attributes: true })
  }

  async function createNewPlans() {
    await waitFor(() => _$(`.save-price-1`).dataset.price && Shopify.money_format, false, { ms: 20 })
    // Hide prices by default
    const packagesEl = _$('#getNow .magicpatch-packs');

    const markup = /* html */ `<div class='lav-plans'></div>`
    packagesEl.insertAdjacentHTML('beforebegin', markup);


    _$$('.list-packs', packagesEl).forEach(el => {
      const planHTML = getPlanMarkup(el)

      _$(".lav-plans").insertAdjacentElement('beforeend', planHTML);
      updatePrices();
    });

    checkChangePrice();

    function getPlanMarkup(el) {
      const isBages = el.classList.contains('list-packs-3');

      const [title, patches] = _$('.pcs', el).innerText.trim().toLowerCase().split(' | ');
      const countPacks = parseInt(title);

      const planEl = document.createElement('div');
      planEl.classList.add('lav-plan');
      planEl.dataset.packs = countPacks;
      
      planEl.innerHTML = /* html */ `
        <div class='lav-plan__header'>
          <div class='lav-plan__title'>${title}</div>
          <div class='lav-plan__count'>${patches}</div>
          <div class='lav-plan__price'>
            <div class='lav-plan__price-head'>
              <div class='lav-plan__price-new'></div>
              <div class='lav-plan__price-old'></div>
            </div>
            <div class='lav-plan__price-per-patch'>
              <span></span>&nbsp;/&nbsp;&nbsp;patch
            </div>
          </div>
        </div>

        <div class='lav-plan__body'>
          <div class='lav-plan__inner'>
            <div class='lav-subscribe'>
              <div class='lav-subscribe__toggler'>
                <div class='lav-subscribe__switch active'></div>
                <div class='lav-subscribe__label'>Subscribe & Save</div>
              </div>

              <div class='lav-subscribe__bage'>
                Extra -15%
              </div>
            </div>

            <div class='lav-delivery'>
              <div class='lav-delivery__label'>
                Delivers every
              </div>
            </div>

            <div class='lav-benefits'>
              <div class='lav-benefits__item'>
                <span class='lav-benefits__item--mark'>Save Extra 15%</span>
                <span class="lav-benefits__item--desk">on This Order and All Future Deliveries</span>
                <span class="lav-benefits__item--mob lav-benefits__item--mark">Off</span>
                <span class="lav-benefits__item--mob">on This and Future Orders</span>
              </div>
              <div class='lav-benefits__item'>
                Pause, Skip, or Cancel Anytime
              </div>
              <div class='lav-benefits__item'>
                5-Day Renewal Reminder
              </div>
            </div>
          </div>
        </div>
      `;

      // if (el.classList.contains('active-slide')) {
        // planEl.classList.add('active');
        // if (planEl.dataset.packs !== '1') {
        //   const selectDeliveryEl = _$('.rtx-plan-preview.dropdown-toggle');
        //   _$('.lav-delivery', planEl).insertAdjacentElement('beforeend', selectDeliveryEl);
        //   _$('.lav-plan__body', planEl).style.display = 'block';
        // }
      // }
      if (countPacks === 1) {
        planEl.querySelector('.lav-delivery').remove();
        planEl.querySelector('.lav-plan__inner').classList.add('lav-plan__inner--single');
        planEl.querySelector('.lav-plan__inner').innerHTML = /* html */ `
          <div class='lav-plan__note'>
            Select 2, 3 or 4 packs to subscribe with an extra of 15% off —&nbsp;save&nbsp;time and money
          </div>
        `;
      }

      if (isBages) {
        planEl.insertAdjacentHTML('afterbegin', /* html */ `
          <div class='lav-plan__bages'>
            <div class='lav-plan__bage lav-plan__bage--best'>bestseller</div>
            <div class='lav-plan__bage lav-plan__bage--save'>Save 50%</div>
          </div>
        `);
      }

      _$('.lav-subscribe__toggler', planEl)?.addEventListener('click', function() {
        const switchEl = _$('.lav-subscribe__switch', planEl);
        const isActive = switchEl.classList.contains('active');


        if (isActive) {
          _$('.rtx-subscription-label[for="purchaseTypeOneTime"]').click();
          _$$('.lav-subscribe__switch').forEach(switchEl => switchEl.classList.remove('active'));
          _$$('.lav-delivery').forEach(element => {
            $(element).slideUp();
          });
        } else {
          _$('.rtx-subscription-label[for="purchaseTypeSubscription"]').click();
          _$$('.lav-subscribe__switch').forEach(switchEl => switchEl.classList.add('active'));
          _$$('.lav-delivery').forEach(element => {
            $(element).slideDown();
          });
        }

        pushDataLayer('exp_fp_sub_toggle', isActive ? 'Disable' : 'Enable', 'click', `${planEl.dataset.packs} Pack(-s)`);
      });


      planEl.addEventListener('click', function (e) {
        if (e.target.closest('.rtx-plan-preview.dropdown-toggle[aria-expanded="false"]')) {
          pushDataLayer('exp_fp_deliver_every_dropdown', 'Open drop-down', 'click', `${planEl.dataset.packs} Pack(-s)`);
          return
        }

        if (e.target.closest('.rtx-plan-preview.dropdown-toggle') && e.target.closest('li')) {
          const selectedOption = e.target.closest('li').cloneNode(true);
          selectedOption.querySelector('b')?.remove();
          selectedOption.querySelector('span')?.remove();
          pushDataLayer('exp_fp_deliver_every_option', selectedOption.innerText.trim(), 'click', `${planEl.dataset.packs} Pack(-s)`);
          return
        }
        
        if (planEl.classList.contains('active')) return;
        
        pushDataLayer('exp_fp_sub_pack_click', `${planEl.dataset.packs} Pack(-s)`, 'click', 'Purchase section');

        if (!_$('#purchase .view-prices .button-proceed.lav-active')) {
          _$('.view-prices h3').removeAttribute('style');
          _$('#purchase .view-prices .button-proceed').classList.add('lav-active');
          _$('#purchase .view-prices .button-proceed').innerText = 'Proceed to Checkout';
          if (planEl.dataset.packs !== '1') {
            _$$('.lav-delivery').forEach(element => {
              $(element).slideDown();
            });
          }

          _$('#purchase .view-prices .button-proceed.lav-active').addEventListener('click', () => {
            pushDataLayer('exp_fp_proceed_to_checkout', 'Proceed to checkout', 'click', 'Purchase section');
          });
        }

        if (countPacks !== 1) {
          const selectDeliveryEl = _$('.rtx-plan-preview.dropdown-toggle');
          _$('.lav-delivery', planEl).insertAdjacentElement('beforeend', selectDeliveryEl);
        } else {
          // _$$('.lav-subscribe__switch').forEach(switchEl => switchEl.classList.add('active'));
          // _$$('.lav-delivery').forEach(element => {
          //   $(element).slideDown();
          // });
        }

        const currentActive = _$('.lav-plan.active');
        const currentActivePacks = currentActive?.dataset.packs;
        if (currentActive) {
          currentActive.classList.remove('active');
          $('.lav-plan__body', currentActive).slideUp();
        }

        planEl.classList.add('active');
        $('.lav-plan__body', planEl).slideDown();

        el.click();

        // Toggle to one purchase if before was choosen one time purchase
        if (currentActivePacks === '1' && countPacks !== 1) {
          if (!_$('.lav-subscribe__switch').classList.contains('active')) {
            _$('.rtx-subscription-label[for="purchaseTypeOneTime"]').click();
          } else {
            _$$('.lav-delivery').forEach(element => {
              $(element).slideDown();
            });
          }
        }

        updatePrices();
      }, true);

      return planEl;
    }
  }

  function updateUi() {
    const infoEl = _$('#getNow');

    _$('.product__title', infoEl).insertAdjacentElement('beforebegin', _$('.lp-fp--star-rating', infoEl))
  
    _$('.product__title', infoEl).insertAdjacentHTML('afterend', /* html */ `
    <div class="lav-subtitle">
      Choose Your Quantity & Plan
    </div>
  `)

    _$('#purchase .view-prices .button-proceed').innerText = 'Choose Quantity To Proceed';

    waitFor(() => _$('.view-prices h3'), () => {
      _$('.view-prices h3').style.setProperty('display', 'none', 'important');
    })
  }

  function updatePrices() {
    const isOnePackChoosed = _$('.lav-plan.active')?.dataset.packs === '1';

    _$$('.lav-plan').forEach(planEl => {
      const countPacks = planEl.dataset.packs;
      const oldPrice = formatPrice(_$(`.reg-price-${countPacks}`).dataset.price);
      const newPriceType = _$('.rtx-subscription-label.is-selected[for="purchaseTypeOneTime"]') ? 'price' : 'subscriptionPrice';
      const newPrice = formatPrice(_$(`.save-price-${countPacks}`).dataset[newPriceType]);
      let price = _$(`.save-price-${countPacks}`).dataset[newPriceType];
      if (price.includes(',') && price.includes('.')) {
        price = price.replace(',', '');
      }
      const pricePerPatch = (parseFloat(price) / (countPacks * 24)).toFixed(2);

      _$('.lav-plan__price-old', planEl).innerText = oldPrice;
      if (!isOnePackChoosed) {
        _$('.lav-plan__price-new', planEl).innerText = newPrice;
        _$('.lav-plan__price-per-patch span', planEl).innerText = formatPrice(pricePerPatch);
      }
    });

    const choosedPlanPacks = _$('.lav-plan.active')?.dataset.packs
    if (choosedPlanPacks) {
      const choseedPlanOriginalPrice = _$(`.reg-price-${choosedPlanPacks}`).dataset.price;
      _$('.view-prices .rtx-before-price + .rtx-before-price').innerText = choseedPlanOriginalPrice;
    }
  }

  function formatPrice(price) {
     return Shopify.money_format.replace(/\{\{[^}]+\}\}/g, price)
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

    observer.observe(el, { childList: true, subtree: true, attributes: true })

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
      blackCheck: /* svg */ `
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
          <g clip-path="url(#clip0_116_5057)">
            <path d="M8.5 17C13.1944 17 17 13.1944 17 8.5C17 3.80558 13.1944 0 8.5 0C3.80558 0 0 3.80558 0 8.5C0 13.1944 3.80558 17 8.5 17Z" fill="black"/>
            <path d="M2.73926 8.68993L7.24638 13.1971L14.2575 6.18597L12.7551 4.68359L7.24638 10.1923L4.24163 7.18755L2.73926 8.68993Z" fill="white"/>
          </g>
          <defs>
            <clipPath id="clip0_116_5057">
              <rect width="17" height="17" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      `
    }

    return svgObj[name]
  }

})()