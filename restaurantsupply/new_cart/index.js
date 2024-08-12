console.debug('*** Experiment started ***')

// Config for Experiment
const config = {
  // dir: 'http://127.0.0.1:5500/restaurantsupply/new_cart',
  dir: 'https://flopsi69.github.io/crs/restaurantsupply/new_cart',
  clarity: ['set', 'exp_checkout_cart', 'variant_1'],
  debug: false
}

// Styles for Experiment
const styles = /* css */ `
header.page-header .header {
  margin: 0!important;
  padding: 20px 24px!important;
}
header.page-header .header-underline {
  display: none!important;
}
header.page-header ul.button-container {
  display: none!important;
}
header.page-header .block.block-search {
  display: none!important;
}
header.page-header .authorisation-cart-container {
  display: none!important;
}
.lav-email {
  margin-left: auto;
}
.lav-email__caption {
  color: #536D80;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  margin-bottom: 2px;
}
.lav-email__value {
  color: #006BB4;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-decoration-line: underline;
}
.lav-header {
  background: #FFF;
  box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.08), 0px 1px 8px 0px rgba(0, 0, 0, 0.08);
}
.checkout-cart-index .page-header {
  margin-bottom: 42px;
}
.lav-footer {
  position: relative;
  padding: 22px 32px;
  border-top: 1px solid #D9DADC;
}
.lav-footer img {
  position: absolute;
  right: 32px;
  top: 50%;
  transform: translateY(-50%);
}
.lav-footer__copy {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #595959;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
}

.page-main#maincontent {
  align-items: center;
}

.lav-benefits {
  display: flex;
  gap: 47px;
  padding: 16px 32px;
  border-radius: 8px;
  background: #E6F1F9;
  color: #536D80;
}
@media(min-width: 1024px) {
  .lav-benefits {
    grid-column: 1 / 3;
  }
}
.lav-benefit {
  display: flex;
  align-items: center;
  gap: 16px;
  max-width: 400px;
  width: 100%;
}
.lav-benefit:nth-child(2) {
  max-width: 440px;
}
.lav-benefit__logo {
  flex-shrink: 0;
  line-height: 0;
}
.lav-benefit__title {
  color: #536D80;
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
}
@media(min-width: 1024px) {
  .lav-benefit>.lav-tip {
    display: none;
  }
}
.lav-benefit>.lav-tip {
  margin-left: auto;
  bottom: 0;
}
.lav-benefit>.lav-tip .lav-tip__popup {
  right: -15px;
  left: initial;
  transform: none;
  width: 170px;
}
.lav-benefit>.lav-tip .lav-tip__popup:before {
  transform: none;
  left: initial;
  right: 18px;
}
.lav-benefit__caption {
  color: #536D80;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
}
.lav-benefit {}

@media(min-width: 1024px) {
  .cart-container .cart-left-col {
    grid-row: 3 / 5;
  }
  .cart-container .cart-right-col {
    grid-row: 3 / 10;
  }
}

.cart-container {
  gap: 32px;
}
.shipping-wrapper {
  padding: 32px 32px 22px;
}
#block-shipping {
  padding: 0;
}
.shipping-wrapper .content {
  display: block;
}
div.block.shipping #shipping-zip-form .input-text {
  min-height: 40px;
}
.lav-truck {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #536D80;
  font-size: 13px;
  font-weight: 400;
  line-height: 22px;
  padding-top: 17px;
  border-top: 1px solid #EBECED;
  margin-top: 20px;
}
.lav-truck img {
  flex-shrink: 0;
}
.totals-wrapper caption {
  padding: 0;
  margin-bottom: 24px;
  border: 0;
}
.lav-guarantee {
  margin-top: 12px;
  color: #536D80;
  font-size: 13px;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 20px;
}
@media(max-width: 450px) {
  .lav-guarantee .lav-tip__popup {
    width: 185px
  }
}
.cart-info {
  display: none;
}
.lav-quote {
  padding: 16px 32px;
  border-radius: 8px;
  background: #FFF;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.08);
}
.lav-quote__title {
  color: #536E80;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
}
.lav-quote__value {
  margin-top: 6px;
  color: #536E80;
  font-size: 14;
  font-weight: 400;
  line-height: 20px;
}
.lav-quote__value span {
  color: #006BB4;
  text-decoration-line: underline;
  white-space: nowrap;
  transition: .3s;
  cursor: pointer;
}
@media(hover:hover) {
  .lav-quote__value span:hover {
    opacity: .7;
  }
}
.shipping-wrapper #shipping-zip-form {
  padding: 0;
  margin: 0;
  border: none;
}
div.block.shipping #shipping-zip-form .field[name="shippingAddress.shipping_address"] {
  margin-bottom: 0;
}
.shipping-wrapper #shipping-zip-form .post-code-and-street {
  margin-top: 25px;
}
#co-shipping-method-form {
  margin-top: 25px;
}
.shipping-address-form .visible-form .street-wrapper .error-message-address {
  margin-top: 5px;
}
.lav-key {
  color: #536D80;
  font-size: 13px;
  font-weight: 400;
  line-height: 22px;
}
.lav-key__caption {
  display: inline-flex;
  gap: 6px;
  align-items: center;
}
.lav-key_desk .lav-key__caption img {
  cursor: pointer;
  transition: .3s;
}
.lav-key_desk .lav-key__caption img:hover {
  opacity: .7;
}
.lav-key__pay {
  white-space: nowrap;
}
.lav-key img {
  max-height: 30px;
}
.totals-wrapper .checkout-methods-items ul[data-methods-list] .bolt-checkout-button>div[class]:after {
  content: 'Secure Checkout';
  font-size: 16px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}
.totals-wrapper .checkout-methods-items ul[data-methods-list] .bolt-checkout-button>div[class] {
  height: 48px!important;
}
div.block.shipping .fieldset.rate .shipping-title {
  height: auto;
}
.lav-free-ship {
  background: #E6F1F9;
  padding: 6px 1px 6px 10px;
}
.lav-free-ship th:first-child {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.lav-free-ship th:first-child svg {
  width: 20px;
  height: 20px;
}
.lav-free-ship__hide {
  display: none!important;
}
.lav-choose-ship {
  color: #536D80;
  font-weight: 400;
  line-height: 20px;
}
.lav-choose-ship span {
  cursor: pointer;
  transition: .3s;
  color: #09548B;
  text-decoration-line: underline;
}
@media(hover:hover) {
  .lav-choose-ship span:hover {
    text-decoration: none;
    opacity: .7;
  }
}
.lav-email__mob {
  display: none;
}
.lav-email__mob a {
  color: #006BB4;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  text-decoration-line: underline;
  text-transform: uppercase;
}
.totals-wrapper .cart-discount .giftcard .title strong, .totals-wrapper .cart-discount .discount .title strong {
  color: #09548B;
}
.lav-sticky {
  position: fixed;
  z-index: 99;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
  background: #FFF;
  box-shadow: 0px -2px 8px 0px rgba(0, 0, 0, 0.08);
  transition: .3s;
}
.lav-sticky_hide {
  transform: translateY(100%);
}
.lav-sticky__button {
  border-radius: 4px;
  background: linear-gradient(180deg, #189CC5 0%, #0C6595 100%);
  color: #FFF;
  font-size: 14px;
  font-weight: 700;
  line-height: 14px;
  text-transform: uppercase;
  min-height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
  cursor: pointer;
}
.lav-tabs {
  display: grid;
  background: #F5F5F5;
  grid-template-columns: 1fr 0.8fr 1fr;
  margin: 18px 0;
  border-radius: 3px;
  overflow: hidden;
}
.lav-tab {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  color: #536D80;
  font-size: 12px;
  box-sizing: border-box;
  font-weight: 400;
  line-height: 24px;
  min-height: 42px;
  padding: 5px;
  white-space: nowrap;
  cursor: pointer;
  transition: .3s;
}
@media(hover: hover) {
  .lav-tab:not(.active):hover {
    opacity: .7;
  }
}
.lav-tab:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  opacity: 0;
  background-color: #1385B1;
  border-radius: 2px;
}
.lav-tab.active:after {
  opacity: 1;
}
#creditkey-modal-init {
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  margin-top: 0;
  min-height: 46px;
  padding: 2px;
}
#creditkey-modal-init img {
  height: 34px;
}
.totals-wrapper .checkout-methods-items ul[data-methods-list] .spark-checkout-button {
  margin-top: 25px;
}
.totals-wrapper .checkout-methods-items ul[data-methods-list] .spark-checkout-button .qscustomcart {
  padding-top: 25px;
}
.lav-divider {
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  color: #536D80;
  text-align: center;
  font-size: 13px;
  font-weight: 400;
  line-height: 22px;
  padding: 0 10px;
  background: #fff;
  width: 36px;
  top: -11px;
}
.cart-summary .qscustomcart:before {
  display: none;
}
.totals-wrapper .checkout-methods-items .select-wrapper {
  opacity: 0.2;
  display: none;
}
.totals-wrapper .checkout-methods-items .pay-with-wrapper .payments {
  display: none;
}
.totals-wrapper .checkout-methods-items ul[data-methods-list] .bolt-checkout-button>div[class] {
  margin-top: 0!important;
}
.lav-payments-icon {
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 16px;
}
.rp-micro-app-dummy-icon-container, [style='border: none; position: fixed; bottom: 0px; right: 0px; width: 120px; height: 120px; max-width: 450px; max-height: 1080px; z-index: 2147483647; user-select: none; opacity: 1; visibility: visible;'] {
  bottom: 55px !important;
}
@media(max-width: 1023px) {
  .rp-micro-app-dummy-icon-container, [style='border: none; position: fixed; bottom: 0px; right: 0px; width: 120px; height: 120px; max-width: 450px; max-height: 1080px; z-index: 2147483647; user-select: none; opacity: 1; visibility: visible;'] {
    bottom: 70px !important;
  }
}
@media(min-width: 1024px) {
  .lav-sticky {
    display: none;
  }
  .lav-key_mob {
    display: none;
  }
  .lav-collapse {
    margin-bottom: 16px;
  }
  .lav-collapse__head {
    display: none;
  }
}
@media(max-width: 1023px) {
  .page-header .nav-toggle {
    display: none;
  }
  header.page-header .header {
    padding: 17px 16px 15px !important;
  }
  .page-header .header.content {
    align-items: center;
  }
  .logo-menu-container {
    margin-bottom: 0!important;
    order: -1!important;
  }
  .lav-email {
    display: none;
  }
  .lav-email__mob {
    display: block;
  }
  .checkout-cart-index .page-header {
    margin-bottom: 18px;
  }
  .cart-title .cart-title-text {
    font-size: 20px;
    line-height: 28px;
  }
  body.checkout-cart-index .cart-container .cart-title {
    align-items: center;
  }
  .cart-container {
    gap: 16px;
  }
  .lav-benefits {
    order: -2;
    flex-flow: column;
    gap: 16px;
    padding: 14px;
  }
  .lav-benefit__caption {
    display: none;
  }
  body.checkout-cart-index .cart-container .cart-left-col .cart.main.actions {
    margin: 0!important;
  }
  .cart-container {
    grid-gap: 16px;
  }
  .cart-container .cart-right-col {
    margin-top: -16px;
  }
  .lav-footer {
    padding: 22px 15px;
    margin-bottom: 80px;
  }
  .lav-footer__copy {
    text-align: left;
    justify-content: flex-start;
    padding-right: 40px;
  }
  .columns .column.main {
    padding-bottom: 30px;
  }
  .product-slider {
    margin-bottom: 0;
  }
  .product-slider + .product-slider {
    margin-top: 24px;
  }
  .lav-footer img {
    // top: 24px;
    // right: 15px;
    transform: none;
    position: static;
    margin-top: 7px;
    margin-bottom: -4px;
  }
  .shipping-wrapper {
    padding: 16px;
  }
  .lav-benefit__title {
    font-size: 12px;
    line-height: 20px;
  }
  .lav-benefit {
    max-width: 100%!important;
    gap: 8px;
  }
  .lav-tabs {
    grid-template-columns: 1fr 1fr;
  }
  [data-value="other"] {
    display: none;
  }
  [data-opt="creditkey.cart.form"], [data-opt="spark.checkout.button"] {
    display: block!important;
  }
  .lav-key_desk {
    display: none;
  }
  .lav-collapse {
    border-radius: 4px;
    border: 1px solid #EBECED;
    margin-top: 16px;
    margin-bottom: 16px;
  }
  .lav-collapse__head {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 13px;
    color: #536D80;
    font-size: 12px;
    font-weight: 400;
    line-height: 24px;
  }
  .lav-collapse__head svg {
    transition: .3s;
  }
  .lav-collapse__open .lav-collapse__head svg {
    transform: rotate(180deg);
  }
  .lav-collapse__open .lav-collapse__body {
    display: block;
  }
  .lav-collapse__body {
    display: none;
    padding: 5px 13px 13px;
  }
  .lav-arrow-collapse {
    margin-left: auto;
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
  console.debug('** InitExp **')

  document.head.appendChild(stylesEl)

  if (location.href.includes('/checkout/cart/')) {
    initCheckout()
  }
}

function initCheckout() {
  addTipStyles()
  handleHeaderAndFooter()
  handleDetails()
  handleShipping()
  handleQuote()
  waitFor(
    () =>
      $('.totals-wrapper .checkout-methods-items .pay-with-wrapper .title') &&
      $$('.checkout.methods.items .active').length,
    handlePayment
  )
  addBenefits()
  addSticky()
  addEvents()
}

function handlePayment() {
  $(
    '.totals-wrapper .checkout-methods-items .pay-with-wrapper .title'
  ).insertAdjacentHTML(
    'afterend',
    /* html */ `
      <div class='lav-key lav-key_desk'>
        <span class='lav-key__caption'>
          Buy in instalments with
          <img src='${config.dir}/img/creditKey.png'>
        </span>
        <span class='lav-key__pay'>Pay 8% now and the rest later</span>
      </div>
      <div class='lav-tabs'>
        <div class='lav-tab active' data-value='credit'>${getSvg(
          'cards'
        )} Credit Card</div>
        <div class='lav-tab' data-value='paypal'>${getSvg('paypal')}</div>
        <div class='lav-tab' data-value='other'>${getSvg(
          'installments'
        )} Buy in instalments </div>
      </div>
    `
  )

  $('[data-opt="bolt.checkout.button"]')?.insertAdjacentHTML(
    'beforeend',
    /* html */ `
    <div class='lav-payments-icon'>
      <img src="https://static.restaurantsupply.com/static/version1723013465/frontend/RestaurantSupply/default/en_US/Magento_Checkout/images/Visa.svg" alt="Visa" data-trigger="bolt.checkout.button">
      <img src="https://static.restaurantsupply.com/static/version1723013465/frontend/RestaurantSupply/default/en_US/Magento_Checkout/images/Mastercard.svg" alt="Mastercard" data-trigger="bolt.checkout.button">
      <img src="https://static.restaurantsupply.com/static/version1723013465/frontend/RestaurantSupply/default/en_US/Magento_Checkout/images/Amex.svg" alt="Amex" data-trigger="bolt.checkout.button">
      <img src="https://static.restaurantsupply.com/static/version1723013465/frontend/RestaurantSupply/default/en_US/Magento_Checkout/images/Discover.svg" alt="Discover" data-trigger="bolt.checkout.button">
    </div>
  `
  )

  $('[data-opt="creditkey.cart.form"]').insertAdjacentHTML(
    'beforebegin',
    /* html */ `
    <div class='lav-key lav-key_mob'>
      <span class='lav-key__caption'>
        Buy in instalments with
        <img src='${config.dir}/img/creditKey.png'>
      </span>
      <span class='lav-key__pay'>Pay 8% now and the rest later</span>
    </div>

    <div class='lav-collapse'>
      <div class='lav-collapse__head'>
        <img src='${config.dir}/img/installments.svg'>
        Buy in instalments 
        ${getSvg('arrowCollapse')}
      </div>
      <div class='lav-collapse__body'></div>
    </div>
  `
  )

  $('.lav-collapse__body').insertAdjacentElement(
    'beforeend',
    $('[data-opt="creditkey.cart.form"]')
  )

  $('.lav-collapse__body').insertAdjacentElement(
    'beforeend',
    $('[data-opt="spark.checkout.button"]')
  )

  $('.lav-collapse__head').addEventListener('click', () => {
    $('.lav-collapse').classList.toggle('lav-collapse__open')
  })

  let isCreditImg = false

  $$('.lav-tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      const value = tab.dataset.value

      if (isCreditImg) {
        pushDataLayer(
          'exp_checkout_cart_text_image_05',
          'CreditKey',
          'Image',
          'Price detail'
        )
      } else {
        pushDataLayer(
          'exp_checkout_cart_button_04',
          tab.textContent.trim() || value,
          'Tab',
          'Price detail'
        )
      }

      isCreditImg = false

      if (tab.classList.contains('active')) return

      $$('.lav-tab').forEach((t) => t.classList.remove('active'))
      tab.classList.add('active')

      $$('.checkout.methods.items .active').forEach((p) =>
        p.classList.remove('active')
      )

      if (value === 'credit') {
        $('[data-opt="bolt.checkout.button"]')?.classList.add('active')
      } else if (value === 'paypal') {
        $('[data-opt="checkout.cart.shortcut.buttons"]')?.classList.add(
          'active'
        )
      } else if (value === 'other') {
        $('[data-opt="creditkey.cart.form"]')?.classList.add('active')
        $('[data-opt="spark.checkout.button"]')?.classList.add('active')
      }
    })
  })

  $('.lav-key_desk .lav-key__caption img').addEventListener('click', () => {
    isCreditImg = true
    $('[data-value="other"]').click()
  })

  waitFor(
    () => $('[data-tid="bolt-checkout-button"]'),
    () => {
      $('[data-tid="bolt-checkout-button"]').addEventListener('click', () => {
        pushDataLayer(
          'exp_checkout_cart_button_01',
          'Secure checkout',
          'Button',
          'Price detail'
        )
      })
    }
  )

  waitFor('#creditkey-modal-init', () => {
    $('#creditkey-modal-init').addEventListener('click', () => {
      pushDataLayer(
        'exp_checkout_cart_button_01',
        'Credit Key',
        'Button',
        'Price detail'
      )
    })

    console.log('fireee', $('#creditkey-modal-init'))
    $(
      '#creditkey-modal-init'
    ).innerHTML = `Buy with <img src="${config.dir}/img/creditKey-white.png" alt="Credit Key">`
  })

  waitFor(
    () => $('[data-tid="apple-pay-button"]'),
    () => {
      $('[data-tid="apple-pay-button"]').addEventListener('click', () => {
        pushDataLayer(
          'exp_checkout_cart_button_01',
          'Apple pay',
          'Button',
          'Price detail'
        )
      })
    }
  )

  waitFor('.qscustomcart', () => {
    $('.qscustomcart').insertAdjacentHTML(
      'beforebegin',
      /* html */ `<span class='lav-divider'>Or</span>`
    )
  })
}

function addEvents() {
  $$('.lav-tip').forEach((tip) => {
    tip.addEventListener('mouseenter', () => {
      if (tip.dataset.id === 'tip1') {
        pushDataLayer(
          'exp_checkout_cart_tooltip_1',
          'Pay Zero Interest for the First 90 Days',
          'Visibility',
          'Top banner'
        )
      } else if (tip.dataset.id === 'tip2') {
        pushDataLayer(
          'exp_checkout_cart_tooltip_2',
          'Price guarantee',
          'Visibility',
          'Price detail'
        )
      } else if (tip.dataset.id === 'tip3') {
        pushDataLayer(
          'exp_checkout_cart_tooltip_1',
          'Found a lower price? We’ll refund the difference',
          'Visibility',
          'Top banner'
        )
      } else if (tip.dataset.id === 'tip4') {
        pushDataLayer(
          'exp_checkout_cart_tooltip_1',
          'Pay Zero Interest for the First 90 Days',
          'Visibility',
          'Top banner'
        )
      } else if (tip.dataset.id === 'tip5') {
        pushDataLayer(
          'exp_checkout_cart_tooltip_1',
          'Full Refund for Unopened and Undamaged Items',
          'Visibility',
          'Top banner'
        )
      }
    })
  })

  visibilityEvent('.street-wrapper', () => {
    pushDataLayer(
      'exp_checkout_cart_section_01',
      'Step 1',
      'Visibility',
      'Estimate Shipping and Tax'
    )
  })

  visibilityEvent('#co-shipping-method-form .fieldset', () => {
    pushDataLayer(
      'exp_checkout_cart_section_02',
      'Step 2',
      'Visibility',
      'Estimate Shipping and Tax'
    )
  })

  document.addEventListener('click', (e) => {
    if (e.target.closest('.pac-target-input')) {
      pushDataLayer(
        'exp_checkout_cart_input_01',
        'Address',
        'Input',
        'Estimate Shipping and Tax'
      )
    }

    if (e.target.closest('.lsb_container2')) {
      pushDataLayer(
        'exp_checkout_cart_button_01',
        'quickSpark',
        'Button',
        'Price detail'
      )
    }

    if (e.target.closest('.add-manually-button')) {
      pushDataLayer(
        'exp_checkout_cart_link_02',
        'add manually',
        'Link',
        'Estimate Shipping and Tax'
      )
    }

    if (e.target.closest('.label') && e.target.closest('.field.choice.item')) {
      pushDataLayer(
        'exp_checkout_cart_option_01',
        e.target.textContent.replace(/\$\d+\.\d{2}/g, '').trim(),
        'Options',
        'Estimate Shipping and Tax'
      )
    }

    if (e.target.closest('.change') && e.target.closest('#shipping-zip-form')) {
      pushDataLayer(
        'exp_checkout_cart_link_03',
        'Edit',
        'Link',
        'Estimate Shipping and Tax'
      )
    }
  })
}

function addSticky() {
  const markup = /* html */ `
    <div class='lav-sticky'>
      <div class='lav-sticky__price'></div>
      <div class='lav-sticky__button'>proceed to checkout</div>
    </div>
  `
  document.body.insertAdjacentHTML('beforeend', markup)

  $('.lav-sticky__button').addEventListener('click', () => {
    $('.totals-wrapper').scrollIntoView({ behavior: 'smooth', block: 'center' })
  })

  window.onscroll = function () {
    if (isElementInViewport('.totals-wrapper')) {
      $('.lav-sticky').classList.add('lav-sticky_hide')
    } else {
      $('.lav-sticky').classList.remove('lav-sticky_hide')
    }
  }
}

function addTipStyles() {
  const styles = /* css */ `
    .lav-tip {
      position: relative;
      display: inline-flex;
      cursor: pointer;
      bottom: -4px;
      padding: 0 2px 10px;
      margin-bottom: -10px;
    }
    .lav-tip svg {
      transition: 0.2s;
    }
    .lav-tip__popup {
      position: absolute;
      z-index: -9999;
      opacity: 0;
      pointer-events: none;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      padding: 12px;
      width: 320px;
      color: #fff;
      font-size: 12px;
      font-weight: 400;
      line-height: 18px;
      border-radius: 8px;
      border: 1px #EBECED;
      background: #536D80;
    }
    .lav-tip__popup:before {
      content: '';
      position: absolute;
      top: -15px;
      left: 50%;
      transform: translateX(-50%);
      border-width: 8px;
      border-style: solid;
      border-color: transparent transparent #536D80  transparent
    }
    .lav-tip:hover svg {
      opacity: 0.8;
    }
    .lav-tip:hover .lav-tip__popup {
      opacity: 1;
      z-index: 1;
      transition: opacity 0.2s;
      pointer-events: auto;
    }
  `

  const stylesTipEl = document.createElement('style')
  stylesTipEl.classList.add('exp-styles')
  stylesTipEl.innerHTML = styles
  document.head.appendChild(stylesTipEl)
}

function handleQuote() {
  if (!$('.cart-info-item.cart-pdf')) return

  $('.cart-info').insertAdjacentHTML(
    'beforebegin',
    /* html */ `
    <div class='lav-quote'>
      <div class='lav-quote__title'>Generate a Quote</div>
      <div class='lav-quote__value'>Click here to <span>Create a Quote</span></div>
    </div>
  `
  )

  $('.lav-quote__value span').addEventListener('click', () => {
    $('.cart-info-item.cart-pdf a').click()
  })
}

function handleDetails() {
  const guaranteeEl = /* html */ `
    <div class='lav-guarantee'>
      30-Day Lowest Price Guarantee
      <div class='lav-tip' data-id='tip2'>
        ${getSvg('tip')}
        <div class='lav-tip__popup'>
          We guarantee the best price at the time of purchase or within 30 days after. If you find a lower price, we'll refund the difference.
        </div>
      </div>
    </div>
  `

  $('#cart-totals').insertAdjacentHTML('afterend', guaranteeEl)

  $('.checkout.methods').insertAdjacentElement(
    'afterend',
    $('.totals-wrapper .cart-discount')
  )
}

function handleShipping() {
  // const shippingEl = $('.cart-container > .cart-summary')
  const shippingEl = $('.shipping-wrapper')

  $('.cart-right-col').insertAdjacentElement('beforeend', shippingEl)

  shippingEl.insertAdjacentHTML(
    'beforeend',
    /* html */ `
    <div class='lav-truck'>
      ${getSvg('truck')}
      Typically shipped within 2-3 business days
    </div>
  `
  )

  waitFor('.grand.totals', getShippingCaption)

  initMutation(
    '#cart-totals',
    (added) => {
      // console.log('added', added)
    },
    (removed) => {
      if (removed.classList.contains('loading-mask')) {
        waitFor('.grand.totals', getShippingCaption)
      }
    }
  )

  function getShippingCaption() {
    const isAllFree = Array.from($$('.cart .item-info')).every((item) => {
      console.log(item.querySelector('.cart-shipping span').textContent)
      return item
        .querySelector('.cart-shipping span')
        ?.textContent.includes('Free')
    })

    const shippingRow = $('.totals.shipping.excl')
    shippingRow?.classList.remove('lav-free-ship__hide')

    $('.lav-free-ship')?.remove()
    $('.lav-choose-ship')?.remove()

    if (!isAllFree && !shippingRow) {
      $('.grand.totals').insertAdjacentHTML(
        'beforebegin',
        /*html*/ `
        <tr class="lav-choose-ship">
          <th>Shipping <span>(Calculate)</span></th>
          <td>-</td>
        </tr>
      `
      )

      $('.lav-choose-ship span').addEventListener('click', (e) => {
        e.preventDefault()
        pushDataLayer(
          'exp_checkout_cart_link_01',
          'Calculate',
          'Link',
          'Price detail'
        )
        $('.shipping-wrapper').scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        })
      })
    }

    if (
      (isAllFree && !shippingRow) ||
      shippingRow?.querySelector('[data-th="Shipping"]')?.textContent ===
        '$0.00'
    ) {
      shippingRow?.classList.add('lav-free-ship__hide')
      $('.grand.totals').insertAdjacentHTML(
        'beforebegin',
        /*html*/ `
        <tr class="lav-free-ship">
          <th>${getSvg('truck')} Shipping (FREE Common Carrier)</th>
          <td>$0.00</td>
        </tr>
      `
      )
    }
  }
}

function addBenefits() {
  const benefitsEl = /* html */ `
    <div class='lav-benefits'>
      <div class='lav-benefit'>
        <div class='lav-benefit__logo'>
          ${getSvg('benefit1')}
        </div>

        <div class='lav-benefit__info'>
          <div class='lav-benefit__title'>
            30-Day Lowest Price Guarantee
          </div>
          <div class='lav-benefit__caption'>Found a lower price? We’ll refund the difference</div>
        </div>

        <div class='lav-tip' data-id='tip3'>
          ${getSvg('tip')}
          <div class='lav-tip__popup'>
            Found a lower price? We’ll refund the difference
          </div>
        </div>
      </div>

      <div class='lav-benefit'>
        <div class='lav-benefit__logo'>
          ${getSvg('benefit2')}
        </div>

        <div class='lav-benefit__info'>
          <div class='lav-benefit__title'>
            Finance Your Purchase with Buy Now, Pay Later Options
          </div>
          <div class='lav-benefit__caption'>
            Pay Zero Interest for the First 90 Days 
            <div class='lav-tip' data-id='tip1'>
              ${getSvg('tip')}
              <div class='lav-tip__popup'>
                Select your financing option from the dropdown below to learn how you can pay in instalments.
              </div>
            </div>
          </div>
        </div>

        <div class='lav-tip' data-id='tip4'>
          ${getSvg('tip')}
          <div class='lav-tip__popup'>
            Pay Zero Interest for the First 90 Days. <br/>
            Select your financing option from the dropdown below to learn how you can pay in instalments.
          </div>
        </div>
      </div>

      <div class='lav-benefit'>
        <div class='lav-benefit__logo'>
          ${getSvg('benefit3')}
        </div>

        <div class='lav-benefit__info'>
          <div class='lav-benefit__title'>
            90-Day Return Policy
          </div>
          <div class='lav-benefit__caption'>Full Refund for Unopened and Undamaged Items</div>
        </div>

        <div class='lav-tip' data-id='tip5'>
          ${getSvg('tip')}
          <div class='lav-tip__popup'>
            Full Refund for Unopened and Undamaged Items
          </div>
        </div>
      </div>
    </div>
  `

  $('body.checkout-cart-index .cart-container .cart-title').insertAdjacentHTML(
    'afterend',
    benefitsEl
  )
}

function handleHeaderAndFooter() {
  const headerEl = $('header.page-header')
  const footerEl = $('footer.page-footer')
  const footerFlag = $('footer.page-footer .footer-flag img')?.outerHTML
  // headerEl.style.display = 'none'
  footerEl.style.display = 'none'

  $('.header-underline', headerEl)

  const emailBlock = /* html */ `
    <div class='lav-email__mob'>
      <a href='mailto:support@restaurantsupply.com'>Email us</a>
    </div>
    <div class="lav-email">
      <div class='lav-email__caption'>Email us</div>
      <a href='mailto:support@restaurantsupply.com' class='lav-email__value'>support@restaurantsupply.com</a>
    </div>
  `

  $('header.page-header .authorisation-cart-container').insertAdjacentHTML(
    'beforebegin',
    emailBlock
  )

  const newFooter = /* html */ `
    <footer class="lav-footer">
      <div class='lav-footer__copy'>&copy; 2006 - 2024 RestaurantSupply All Rights Reserved.</div>
      ${footerFlag}
    </footer>
  `

  footerEl.insertAdjacentHTML('beforebegin', newFooter)
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
  const el = typeof selector === 'string' ? $(selector) : selector

  if (!el) return false

  const rect = el.getBoundingClientRect()
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight

  return (
    rect.top + rect.height * 0.1 < windowHeight &&
    rect.bottom > rect.height * 0.1
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

//Hotjar
if (!config.debug) {
  waitFor(
    () => typeof hj == 'function',
    () => {
      hj('event', 'exp_checkout_cart')
    }
  )
}

// Svg objects
function getSvg(name) {
  const svgObj = {
    arrowCollapse: `
    <svg class='lav-arrow-collapse' xmlns="http://www.w3.org/2000/svg" width="8" height="6" viewBox="0 0 8 6" fill="none">
      <mask id="path-1-inside-1_4305_791" fill="white">
        <path d="M0 0.144043H8L4 5.85404L0 0.144043Z"/>
      </mask>
      <path d="M0 0.144043V-4.85596H-9.60741L-4.09515 3.0128L0 0.144043ZM8 0.144043L12.0951 3.0128L17.6074 -4.85596H8V0.144043ZM4 5.85404L-0.0951486 8.7228L4 14.5686L8.09515 8.7228L4 5.85404ZM0 5.14404H8V-4.85596H0V5.14404ZM3.90485 -2.72471L-0.0951486 2.98529L8.09515 8.7228L12.0951 3.0128L3.90485 -2.72471ZM8.09515 2.98529L4.09515 -2.72471L-4.09515 3.0128L-0.0951486 8.7228L8.09515 2.98529Z" fill="#536D80" mask="url(#path-1-inside-1_4305_791)"/>
    </svg>
    `,
    paypal: `<svg xmlns="http://www.w3.org/2000/svg" width="54" height="16" viewBox="0 0 54 16" fill="none">
  <g clip-path="url(#clip0_4295_474)">
    <path d="M41.7421 4.62311H38.8278C38.6564 4.62311 38.4849 4.79853 38.3992 4.97395L37.1992 12.6925C37.1992 12.8679 37.2849 12.9557 37.4564 12.9557H38.9992C39.1706 12.9557 39.2564 12.8679 39.2564 12.6925L39.5992 10.4998C39.5992 10.3243 39.7706 10.1489 40.0278 10.1489H40.9706C42.9421 10.1489 44.0564 9.18408 44.3135 7.25444C44.4849 6.46504 44.3135 5.76335 43.9706 5.3248C43.4564 4.88624 42.6849 4.62311 41.7421 4.62311ZM42.0849 7.51758C41.9135 8.57011 41.1421 8.57011 40.3706 8.57011H39.8564L40.1992 6.55275C40.1992 6.46504 40.2849 6.37733 40.4564 6.37733H40.6278C41.1421 6.37733 41.6564 6.37733 41.9135 6.72817C42.0849 6.81589 42.0849 7.07902 42.0849 7.51758Z" fill="#139AD6"/>
    <path d="M20.7421 4.62314H17.8278C17.6564 4.62314 17.4849 4.79856 17.3992 4.97398L16.1992 12.6926C16.1992 12.868 16.2849 12.9557 16.4564 12.9557H17.8278C17.9992 12.9557 18.1706 12.7803 18.2564 12.6048L18.5992 10.4998C18.5992 10.3244 18.7706 10.1489 19.0278 10.1489H19.9706C21.9421 10.1489 23.0564 9.18412 23.3135 7.25447C23.4849 6.46507 23.3135 5.76338 22.9706 5.32483C22.4564 4.88627 21.7706 4.62314 20.7421 4.62314ZM21.0849 7.51761C20.9135 8.57014 20.1421 8.57014 19.3706 8.57014H18.9421L19.2849 6.55278C19.2849 6.46507 19.3706 6.37736 19.5421 6.37736H19.7135C20.2278 6.37736 20.7421 6.37736 20.9992 6.7282C21.0849 6.81592 21.1706 7.07905 21.0849 7.51761Z" fill="#263B80"/>
    <path d="M29.5697 7.42992H28.1983C28.1126 7.42992 27.9411 7.51763 27.9411 7.60535L27.8554 8.0439L27.7697 7.86848C27.4269 7.42992 26.8269 7.2545 26.1411 7.2545C24.5983 7.2545 23.2269 8.48246 22.9697 10.149C22.7983 11.0261 23.0554 11.8155 23.484 12.3417C23.9126 12.868 24.5126 13.0434 25.284 13.0434C26.5697 13.0434 27.2554 12.254 27.2554 12.254L27.1697 12.6926C27.1697 12.868 27.2554 12.9557 27.4269 12.9557H28.7126C28.884 12.9557 29.0554 12.7803 29.1411 12.6049L29.9126 7.69306C29.8269 7.60535 29.6554 7.42992 29.5697 7.42992ZM27.5983 10.2367C27.4269 11.0261 26.8269 11.6401 25.9697 11.6401C25.5411 11.6401 25.1983 11.4646 25.0269 11.2892C24.8554 11.0261 24.7697 10.6752 24.7697 10.2367C24.8554 9.44728 25.5411 8.8333 26.3126 8.8333C26.7411 8.8333 26.9983 9.00872 27.2554 9.18415C27.5126 9.44728 27.5983 9.88583 27.5983 10.2367Z" fill="#263B80"/>
    <path d="M50.4857 7.42982H49.1143C49.0286 7.42982 48.8572 7.51753 48.8572 7.60524L48.7714 8.04379L48.6857 7.86837C48.3429 7.42982 47.7429 7.25439 47.0572 7.25439C45.5143 7.25439 44.1429 8.48235 43.8857 10.1489C43.7143 11.026 43.9714 11.8154 44.4 12.3416C44.8286 12.8679 45.4286 13.0433 46.2 13.0433C47.4857 13.0433 48.1714 12.2539 48.1714 12.2539L48.0857 12.6925C48.0857 12.8679 48.1714 12.9556 48.3429 12.9556H49.6286C49.8 12.9556 49.9714 12.7802 50.0572 12.6048L50.8286 7.69295C50.7429 7.60524 50.6572 7.42982 50.4857 7.42982ZM48.5143 10.2366C48.3429 11.026 47.7429 11.64 46.8857 11.64C46.4572 11.64 46.1143 11.4645 45.9429 11.2891C45.7714 11.026 45.6857 10.6751 45.6857 10.2366C45.7714 9.44717 46.4572 8.8332 47.2286 8.8332C47.6572 8.8332 47.9143 9.00862 48.1714 9.18404C48.5143 9.44717 48.6 9.88573 48.5143 10.2366Z" fill="#139AD6"/>
    <path d="M37.0277 7.42992H35.5706C35.3992 7.42992 35.3134 7.51763 35.2277 7.60534L33.342 10.5875L32.4849 7.78076C32.3992 7.60534 32.3134 7.51763 32.0563 7.51763H30.6849C30.5134 7.51763 30.4277 7.69305 30.4277 7.86847L31.9706 12.5172L30.5134 14.6222C30.4277 14.7976 30.5134 15.0608 30.6849 15.0608H32.0563C32.2277 15.0608 32.3134 14.9731 32.3992 14.8854L37.1134 7.95618C37.3706 7.69305 37.1992 7.42992 37.0277 7.42992Z" fill="#263B80"/>
    <path d="M52.1141 4.88624L50.9141 12.7802C50.9141 12.9557 50.9998 13.0434 51.1712 13.0434H52.3712C52.5426 13.0434 52.7141 12.8679 52.7998 12.6925L53.9998 4.97395C53.9998 4.79853 53.9141 4.71082 53.7426 4.71082H52.3712C52.2855 4.62311 52.1998 4.71082 52.1141 4.88624Z" fill="#139AD6"/>
    <path d="M9.85714 1.99174C9.25714 1.29005 8.14286 0.939209 6.6 0.939209H2.31429C2.05714 0.939209 1.8 1.20234 1.71429 1.46547L0 12.9556C0 13.2188 0.171429 13.3942 0.342857 13.3942H3L3.68571 9.09634V9.27176C3.77143 9.00863 4.02857 8.7455 4.28572 8.7455H5.57143C8.05714 8.7455 9.94286 7.69296 10.5429 4.7985C10.5429 4.71079 10.5429 4.62307 10.5429 4.53536C10.4571 4.53536 10.4571 4.53536 10.5429 4.53536C10.6286 3.39512 10.4571 2.69343 9.85714 1.99174Z" fill="#263B80"/>
    <path d="M10.4565 4.53539C10.4565 4.6231 10.4565 4.71081 10.4565 4.79852C9.85647 7.7807 7.97076 8.74552 5.48504 8.74552H4.19933C3.94219 8.74552 3.68504 9.00865 3.59933 9.27179L2.74219 14.6222C2.74219 14.7976 2.8279 14.973 3.08504 14.973H5.31362C5.57076 14.973 5.8279 14.7976 5.8279 14.5345V14.4467L6.25647 11.7277V11.5523C6.25647 11.2891 6.51362 11.1137 6.77076 11.1137H7.11362C9.25647 11.1137 10.9708 10.2366 11.3993 7.60527C11.5708 6.55274 11.485 5.58792 10.9708 4.97394C10.885 4.79852 10.7136 4.6231 10.4565 4.53539Z" fill="#139AD6"/>
    <path d="M9.85698 4.27224C9.77126 4.27224 9.68555 4.18453 9.59983 4.18453C9.51412 4.18453 9.4284 4.18453 9.34269 4.09682C8.99983 4.00911 8.65698 4.00911 8.2284 4.00911H4.88555C4.79983 4.00911 4.71412 4.00911 4.6284 4.09682C4.45698 4.18453 4.37126 4.35995 4.37126 4.53537L3.68555 9.09635V9.27178C3.77126 9.00864 4.0284 8.74551 4.28555 8.74551H5.57126C8.05698 8.74551 9.94269 7.69298 10.5427 4.79851C10.5427 4.7108 10.5427 4.62309 10.6284 4.53537C10.457 4.44766 10.3713 4.35995 10.1998 4.35995C9.94269 4.27224 9.94269 4.27224 9.85698 4.27224Z" fill="#232C65"/>
  </g>
  <defs>
    <clipPath id="clip0_4295_474">
      <rect width="54" height="14.2418" fill="white" transform="translate(0 0.87912)"/>
    </clipPath>
  </defs>
</svg>`,
    cards: `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="none">
  <g clip-path="url(#clip0_4295_462)">
    <path d="M19.2086 14.2073L5.45361 16.6326C4.60377 16.7825 3.79338 16.215 3.64353 15.3653L2.12947 6.77863C1.97962 5.92879 2.54708 5.1184 3.39689 4.96855L17.1518 2.54316C18.0017 2.39331 18.8121 2.96078 18.962 3.81059L20.4761 12.3972C20.626 13.247 20.0585 14.0574 19.2086 14.2073Z" fill="#3555A2"/>
    <path d="M17.151 2.54316L10.2734 3.75586L12.3301 15.42L19.2076 14.2074C20.0575 14.0575 20.6249 13.2471 20.475 12.3972L18.961 3.81063C18.8111 2.96078 18.0007 2.39331 17.151 2.54316Z" fill="#1B3555"/>
    <path d="M15.7344 19.4807H2.0625C1.19957 19.4807 0.5 18.7812 0.5 17.9182V9.41368C0.5 8.55076 1.19957 7.8512 2.0625 7.8512H15.7344C16.5972 7.8512 17.2969 8.55076 17.2969 9.41368V17.9182C17.2969 18.7812 16.5972 19.4807 15.7344 19.4807Z" fill="#53D8E3"/>
    <path d="M15.7344 7.8512H8.89844V19.4807H15.7344C16.5972 19.4807 17.2969 18.7812 17.2969 17.9182V9.41368C17.2969 8.55076 16.5972 7.8512 15.7344 7.8512Z" fill="#18A8C9"/>
    <path d="M0.5 10.5093H17.2969V13.1675H0.5V10.5093Z" fill="#ECF6FD"/>
    <path d="M5.15039 16.9014H2.49219C2.16859 16.9014 1.90625 17.1637 1.90625 17.4874C1.90625 17.811 2.16859 18.0732 2.49219 18.0732H5.15039C5.47398 18.0732 5.73632 17.811 5.73632 17.4874C5.73632 17.1637 5.47398 16.9014 5.15039 16.9014Z" fill="#EAF6FF"/>
    <path d="M8.89844 10.5093H17.2969V13.1675H8.89844V10.5093Z" fill="#D6E8FE"/>
  </g>
  <defs>
    <clipPath id="clip0_4295_462">
      <rect width="20" height="21.25" fill="white" transform="translate(0.5 0.375)"/>
    </clipPath>
  </defs>
</svg>`,
    installments: `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
  <g clip-path="url(#clip0_4295_488)">
    <path d="M18.213 1.67946H2.78496C2.35168 1.67946 2 2.03114 2 2.46442V18.6607C2 19.094 2.35168 19.4456 2.78496 19.4456H18.213C18.6463 19.4456 18.998 19.094 18.998 18.6607V2.46442C18.998 2.03114 18.6464 1.67946 18.213 1.67946Z" fill="url(#paint0_linear_4295_488)"/>
    <path d="M18.2146 19.4456H2.78691C2.3534 19.4456 2.00195 19.0942 2.00195 18.6607V10.157H18.9996V18.6607C18.9996 19.0942 18.6482 19.4456 18.2146 19.4456Z" fill="url(#paint1_linear_4295_488)"/>
    <path d="M18.2146 19.4456H2.78691C2.3534 19.4456 2.00195 19.0942 2.00195 18.6607V17.0123H18.9996V18.6607C18.9996 19.0942 18.6482 19.4456 18.2146 19.4456Z" fill="url(#paint2_linear_4295_488)"/>
    <path d="M19.7146 17.5356H1.28528C0.78106 17.5356 0.407623 17.067 0.520123 16.5755L2.00114 10.1047H18.9988L20.4798 16.5755C20.5923 17.067 20.2188 17.5356 19.7146 17.5356Z" fill="url(#paint3_linear_4295_488)"/>
    <path d="M19.7146 17.5356H1.28528C0.78106 17.5356 0.407623 17.067 0.520123 16.5755L2.00114 10.1047H18.9988L20.4798 16.5755C20.5923 17.067 20.2188 17.5356 19.7146 17.5356Z" fill="url(#paint4_linear_4295_488)"/>
    <path d="M19.7154 17.5356C20.2197 17.5356 20.5931 17.067 20.4806 16.5755L18.9996 10.1047H2.00195L9.43285 17.5356H19.7154Z" fill="url(#paint5_linear_4295_488)"/>
    <path d="M18.9996 17.5356H2.00195V17.5618L3.88582 19.4456H18.2146C18.6482 19.4456 18.9996 19.0942 18.9996 18.6607V17.5356Z" fill="url(#paint6_linear_4295_488)"/>
    <path d="M9.99707 15.3098V14.0022C9.47233 13.9937 8.98779 13.9472 8.54346 13.8625C8.10335 13.7737 7.72249 13.6594 7.40088 13.5198V12.1677C7.72673 12.3201 8.12874 12.4576 8.60693 12.5803C9.08512 12.703 9.5485 12.7729 9.99707 12.7898V10.4094C9.38346 10.2021 8.88411 9.98625 8.49902 9.76196C8.11816 9.53768 7.83887 9.27743 7.66113 8.9812C7.4834 8.68075 7.39453 8.32104 7.39453 7.9021C7.39453 7.47046 7.50244 7.10018 7.71826 6.79126C7.93831 6.47811 8.243 6.23055 8.63232 6.04858C9.02588 5.86662 9.48079 5.75871 9.99707 5.72485V4.69019H10.8223V5.70581C11.292 5.71851 11.7257 5.7714 12.1235 5.8645C12.5256 5.95337 12.9085 6.07821 13.2725 6.23901L12.8091 7.41968C12.4917 7.29272 12.1616 7.18905 11.8188 7.10864C11.4761 7.02824 11.1439 6.97323 10.8223 6.9436V9.26685C11.3385 9.43612 11.7977 9.61808 12.1997 9.81274C12.606 10.0074 12.9233 10.2528 13.1519 10.5491C13.3846 10.8411 13.501 11.224 13.501 11.698C13.501 12.3201 13.2725 12.8342 12.8154 13.2405C12.3584 13.6425 11.694 13.8837 10.8223 13.9641V15.3098H9.99707ZM10.8223 12.739C11.2285 12.6882 11.5311 12.5824 11.73 12.4216C11.9289 12.2566 12.0283 12.0429 12.0283 11.7805C12.0283 11.6028 11.986 11.4526 11.9014 11.3298C11.821 11.2071 11.6919 11.0971 11.5142 10.9998C11.3407 10.9024 11.11 10.8072 10.8223 10.7141V12.739ZM9.99707 8.95581V6.96899C9.75163 6.99438 9.54427 7.04517 9.375 7.12134C9.20573 7.19751 9.07878 7.29696 8.99414 7.41968C8.90951 7.5424 8.86719 7.6884 8.86719 7.85767C8.86719 8.04386 8.90527 8.20256 8.98145 8.33374C9.05762 8.46493 9.17822 8.57918 9.34326 8.67651C9.51253 8.77384 9.73047 8.86694 9.99707 8.95581Z" fill="white"/>
    <path d="M20.479 16.5753L18.998 10.1047V2.46442C18.998 2.03114 18.6463 1.67946 18.213 1.67946H17.8418C18.2751 1.67946 18.6268 2.03114 18.6268 2.46442V10.1047L20.1077 16.5753C20.2202 17.0672 19.8466 17.5356 19.3427 17.5356H19.7139C20.2179 17.5356 20.5915 17.0672 20.479 16.5753Z" fill="url(#paint7_linear_4295_488)"/>
    <path d="M7.1743 3.07774C7.03141 2.94379 6.94141 2.75434 6.94141 2.5429V1.67946H8.40664L9.60328 2.8761C9.98469 3.25751 10.199 3.77485 10.199 4.31426C10.199 4.70942 9.89496 5.04926 9.5002 5.06711C9.2752 5.07727 9.07262 4.98544 8.93156 4.83504L7.1743 3.07774Z" fill="url(#paint8_linear_4295_488)"/>
    <path d="M7.67402 3.27555C7.26941 3.27555 6.94141 2.94755 6.94141 2.54294V1.287C6.94141 0.88239 7.26941 0.554382 7.67402 0.554382C8.07863 0.554382 8.40664 0.88239 8.40664 1.287V2.5429C8.40664 2.94755 8.07863 3.27555 7.67402 3.27555Z" fill="url(#paint9_linear_4295_488)"/>
    <path d="M7.67383 0.554382V3.27555C8.07844 3.27555 8.40644 2.94755 8.40644 2.54294V1.287C8.40644 0.88239 8.07844 0.554382 7.67383 0.554382Z" fill="url(#paint10_linear_4295_488)"/>
    <path d="M12.4985 3.07774C12.3556 2.94379 12.2656 2.75434 12.2656 2.5429V1.67946H13.7309L14.9275 2.8761C15.3089 3.25751 15.5232 3.77485 15.5232 4.31426C15.5232 4.70942 15.2192 5.04926 14.8244 5.06711C14.5994 5.07727 14.3968 4.98544 14.2558 4.83504L12.4985 3.07774Z" fill="url(#paint11_linear_4295_488)"/>
    <path d="M12.9982 3.27555C12.5936 3.27555 12.2656 2.94755 12.2656 2.54294V1.287C12.2656 0.88239 12.5936 0.554382 12.9982 0.554382C13.4029 0.554382 13.7309 0.88239 13.7309 1.287V2.5429C13.7309 2.94755 13.4028 3.27555 12.9982 3.27555Z" fill="url(#paint12_linear_4295_488)"/>
    <path d="M12.998 0.554382V3.27555C13.4027 3.27555 13.7307 2.94755 13.7307 2.54294V1.287C13.7307 0.88239 13.4026 0.554382 12.998 0.554382Z" fill="url(#paint13_linear_4295_488)"/>
  </g>
  <defs>
    <linearGradient id="paint0_linear_4295_488" x1="7.5415" y1="3.98938" x2="12.0704" y2="14.0534" gradientUnits="userSpaceOnUse">
      <stop stop-color="#00A6F9"/>
      <stop offset="1" stop-color="#0071E2"/>
    </linearGradient>
    <linearGradient id="paint1_linear_4295_488" x1="4.69223" y1="8.2833" x2="16.363" y2="20.8987" gradientUnits="userSpaceOnUse">
      <stop stop-color="#C2CECE"/>
      <stop offset="1" stop-color="#97AAAA"/>
    </linearGradient>
    <linearGradient id="paint2_linear_4295_488" x1="10.5011" y1="19.2241" x2="10.5011" y2="17.4832" gradientUnits="userSpaceOnUse">
      <stop stop-color="#C2CECE" stop-opacity="0"/>
      <stop offset="0.179" stop-color="#AFBCBC" stop-opacity="0.179"/>
      <stop offset="1" stop-color="#5B6A6A"/>
    </linearGradient>
    <linearGradient id="paint3_linear_4295_488" x1="3.19958" y1="10.7311" x2="21.9252" y2="19.1651" gradientUnits="userSpaceOnUse">
      <stop stop-color="#00A6F9"/>
      <stop offset="1" stop-color="#0071E2"/>
    </linearGradient>
    <linearGradient id="paint4_linear_4295_488" x1="10.5003" y1="16.8203" x2="10.5003" y2="17.867" gradientUnits="userSpaceOnUse">
      <stop offset="0.0001" stop-color="#008BF2" stop-opacity="0"/>
      <stop offset="1" stop-color="#0046E2"/>
    </linearGradient>
    <linearGradient id="paint5_linear_4295_488" x1="14.0512" y1="13.6544" x2="2.18784" y2="1.7911" gradientUnits="userSpaceOnUse">
      <stop offset="0.0001" stop-color="#008BF2" stop-opacity="0"/>
      <stop offset="1" stop-color="#0046E2"/>
    </linearGradient>
    <linearGradient id="paint6_linear_4295_488" x1="9.25311" y1="16.0036" x2="7.3093" y2="13.5973" gradientUnits="userSpaceOnUse">
      <stop stop-color="#C2CECE" stop-opacity="0"/>
      <stop offset="0.179" stop-color="#AFBCBC" stop-opacity="0.179"/>
      <stop offset="1" stop-color="#5B6A6A"/>
    </linearGradient>
    <linearGradient id="paint7_linear_4295_488" x1="19.0165" y1="9.55829" x2="15.0122" y2="10.605" gradientUnits="userSpaceOnUse">
      <stop offset="0.0001" stop-color="#008BF2" stop-opacity="0"/>
      <stop offset="1" stop-color="#0046E2"/>
    </linearGradient>
    <linearGradient id="paint8_linear_4295_488" x1="9.17021" y1="3.75775" x2="7.61891" y2="2.20649" gradientUnits="userSpaceOnUse">
      <stop offset="0.0001" stop-color="#008BF2" stop-opacity="0"/>
      <stop offset="1" stop-color="#0046E2"/>
    </linearGradient>
    <linearGradient id="paint9_linear_4295_488" x1="7.67423" y1="0.591341" x2="7.67423" y2="8.99002" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFC200"/>
      <stop offset="0.268" stop-color="#FFBB00"/>
      <stop offset="0.659" stop-color="#FFA801"/>
      <stop offset="1" stop-color="#FF9102"/>
    </linearGradient>
    <linearGradient id="paint10_linear_4295_488" x1="7.79158" y1="1.91434" x2="8.45243" y2="1.91434" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFC200" stop-opacity="0"/>
      <stop offset="0.203" stop-color="#FFBB00" stop-opacity="0.203"/>
      <stop offset="0.499" stop-color="#FFA700" stop-opacity="0.499"/>
      <stop offset="0.852" stop-color="#FF8800" stop-opacity="0.852"/>
      <stop offset="1" stop-color="#FF7800"/>
    </linearGradient>
    <linearGradient id="paint11_linear_4295_488" x1="14.4946" y1="3.75774" x2="12.9433" y2="2.20649" gradientUnits="userSpaceOnUse">
      <stop offset="0.0001" stop-color="#008BF2" stop-opacity="0"/>
      <stop offset="1" stop-color="#0046E2"/>
    </linearGradient>
    <linearGradient id="paint12_linear_4295_488" x1="12.9986" y1="0.591341" x2="12.9986" y2="8.99002" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFC200"/>
      <stop offset="0.268" stop-color="#FFBB00"/>
      <stop offset="0.659" stop-color="#FFA801"/>
      <stop offset="1" stop-color="#FF9102"/>
    </linearGradient>
    <linearGradient id="paint13_linear_4295_488" x1="13.1164" y1="1.91434" x2="13.7768" y2="1.91434" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFC200" stop-opacity="0"/>
      <stop offset="0.203" stop-color="#FFBB00" stop-opacity="0.203"/>
      <stop offset="0.499" stop-color="#FFA700" stop-opacity="0.499"/>
      <stop offset="0.852" stop-color="#FF8800" stop-opacity="0.852"/>
      <stop offset="1" stop-color="#FF7800"/>
    </linearGradient>
    <clipPath id="clip0_4295_488">
      <rect width="20" height="20" fill="white" transform="translate(0.5)"/>
    </clipPath>
  </defs>
</svg>`,
    tip: `<svg class='lav-tip-icon' xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
  <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M9.5 16.5C13.6421 16.5 17 13.1421 17 9C17 4.85786 13.6421 1.5 9.5 1.5C5.35786 1.5 2 4.85786 2 9C2 13.1421 5.35786 16.5 9.5 16.5ZM9.14443 6.22064C8.62333 6.39386 8.33765 6.79166 8.33765 7.09836C8.33765 7.409 8.08573 7.66088 7.77515 7.66088C7.4646 7.66088 7.21265 7.409 7.21265 7.09836C7.21265 6.14933 7.97839 5.42267 8.78953 5.15305C9.64798 4.86777 10.7195 5.02415 11.4493 5.97803C11.8126 6.45282 11.8628 7.00535 11.7559 7.4957C11.6515 7.97655 11.3937 8.42468 11.0901 8.77793C11.0128 8.8677 10.9348 8.96055 10.8568 9.05543C10.6888 9.25913 10.5206 9.47205 10.3642 9.6846C10.3225 9.7416 10.2885 9.80573 10.2636 9.87555C10.2302 9.9678 10.2127 10.0698 10.2127 10.1776V10.4734C10.2127 10.784 9.96073 11.0359 9.65015 11.0359C9.33958 11.0359 9.08765 10.784 9.08765 10.4734V10.1776C9.08765 9.77453 9.20413 9.3639 9.45755 9.01875C9.55528 8.8854 9.65675 8.7528 9.75928 8.62298C9.91895 8.42123 10.0812 8.226 10.2368 8.04465C10.4485 7.7985 10.6005 7.51478 10.6565 7.25657C10.7107 7.008 10.6726 6.81455 10.5558 6.66166C10.1607 6.1453 9.61865 6.06299 9.14443 6.22064ZM10.4002 12.3484C10.4002 12.7625 10.0643 13.0984 9.65015 13.0984C9.23593 13.0984 8.90015 12.7625 8.90015 12.3484C8.90015 11.9342 9.23593 11.5984 9.65015 11.5984C10.0643 11.5984 10.4002 11.9342 10.4002 12.3484Z" fill="#536D80"/>
</svg>`,
    truck: `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g clip-path="url(#clip0_4171_830)">
    <path d="M23.9303 11.6569L22.0349 7.36859C21.9685 7.21651 21.8594 7.08694 21.7209 6.9956C21.5824 6.90427 21.4203 6.85507 21.2544 6.85399H16.6659L16.9403 4.37535C16.9538 4.25502 16.9417 4.1332 16.9048 4.0179C16.8678 3.90259 16.8069 3.79642 16.7259 3.70637C16.6457 3.61752 16.5478 3.54644 16.4385 3.4977C16.3292 3.44895 16.2109 3.42362 16.0913 3.42334H4.28124C4.05377 3.42334 3.83562 3.5137 3.67478 3.67454C3.51393 3.83539 3.42357 4.05354 3.42357 4.281C3.42357 4.50847 3.51393 4.72662 3.67478 4.88746C3.83562 5.0483 4.05377 5.13867 4.28124 5.13867H8.56955C8.79702 5.13867 9.01517 5.22903 9.17601 5.38987C9.33685 5.55071 9.42721 5.76886 9.42721 5.99633C9.42721 6.22379 9.33685 6.44194 9.17601 6.60279C9.01517 6.76363 8.79702 6.85399 8.56955 6.85399H2.56591C2.33844 6.85399 2.1203 6.94435 1.95945 7.10519C1.79861 7.26604 1.70825 7.48419 1.70825 7.71165C1.70825 7.93912 1.79861 8.15727 1.95945 8.31811C2.1203 8.47896 2.33844 8.56932 2.56591 8.56932H11.1425C11.37 8.56932 11.5882 8.65968 11.749 8.82052C11.9098 8.98136 12.0002 9.19951 12.0002 9.42698C12.0002 9.65445 11.9098 9.87259 11.749 10.0334C11.5882 10.1943 11.37 10.2846 11.1425 10.2846H5.1389C4.91143 10.2846 4.69328 10.375 4.53244 10.5358C4.3716 10.6967 4.28124 10.9148 4.28124 11.1423C4.28124 11.3698 4.3716 11.5879 4.53244 11.7488C4.69328 11.9096 4.91143 12 5.1389 12H8.56955C8.79702 12 9.01517 12.0903 9.17601 12.2512C9.33685 12.412 9.42721 12.6302 9.42721 12.8576C9.42721 13.0851 9.33685 13.3032 9.17601 13.4641C9.01517 13.6249 8.79702 13.7153 8.56955 13.7153H1.70825C1.48078 13.7153 1.26263 13.8057 1.10179 13.9665C0.940947 14.1273 0.850586 14.3455 0.850586 14.573C0.850586 14.8004 0.940947 15.0186 1.10179 15.1794C1.26263 15.3403 1.48078 15.4306 1.70825 15.4306H3.42357C3.65104 15.4306 3.86919 15.521 4.03003 15.6818C4.19088 15.8427 4.28124 16.0608 4.28124 16.2883C4.28124 16.5157 4.19088 16.7339 4.03003 16.8947C3.86919 17.0556 3.65104 17.1459 3.42357 17.1459H2.56591C2.33844 17.1459 2.1203 17.2363 1.95945 17.3971C1.79861 17.558 1.70825 17.7761 1.70825 18.0036C1.70825 18.2311 1.79861 18.4492 1.95945 18.6101C2.1203 18.7709 2.33844 18.8613 2.56591 18.8613H5.01025C5.10286 19.223 5.27912 19.5579 5.52485 19.839C5.73307 20.0718 5.98822 20.2579 6.27352 20.385C6.55882 20.5121 6.8678 20.5774 7.18014 20.5766C7.70867 20.5615 8.22097 20.3906 8.65278 20.0855C9.08458 19.7803 9.41665 19.3544 9.60732 18.8613H16.1599C16.2525 19.223 16.4287 19.5579 16.6745 19.839C16.8827 20.0718 17.1378 20.2579 17.4231 20.385C17.7084 20.5121 18.0174 20.5774 18.3297 20.5766C18.8583 20.5615 19.3706 20.3906 19.8024 20.0855C20.2342 19.7803 20.5663 19.3544 20.7569 18.8613H22.4723C22.6843 18.8626 22.8893 18.7853 23.0477 18.6443C23.206 18.5033 23.3066 18.3087 23.3299 18.0979L23.9903 12.0943C24.0138 11.9458 23.9929 11.7936 23.9303 11.6569ZM7.18014 18.8613C7.10901 18.8643 7.03812 18.8513 6.97277 18.8231C6.90741 18.7948 6.84929 18.7522 6.80276 18.6983C6.73544 18.615 6.68618 18.5186 6.65813 18.4153C6.63007 18.3119 6.62383 18.2039 6.63981 18.0979C6.66171 17.8571 6.76568 17.6312 6.9343 17.4579C7.10293 17.2846 7.32597 17.1744 7.56608 17.1459C7.6372 17.1429 7.7081 17.1559 7.77345 17.1842C7.83881 17.2124 7.89693 17.255 7.94346 17.3089C8.01078 17.3922 8.06004 17.4886 8.08809 17.5919C8.11615 17.6953 8.12238 17.8034 8.10641 17.9093C8.08451 18.1501 7.98054 18.376 7.81192 18.5494C7.64329 18.7227 7.42025 18.8328 7.18014 18.8613ZM18.3297 18.8613C18.2586 18.8643 18.1877 18.8513 18.1224 18.8231C18.057 18.7948 17.9989 18.7522 17.9524 18.6983C17.8851 18.615 17.8358 18.5186 17.8077 18.4153C17.7797 18.3119 17.7734 18.2039 17.7894 18.0979C17.8113 17.8571 17.9153 17.6312 18.0839 17.4579C18.2525 17.2846 18.4756 17.1744 18.7157 17.1459C18.7868 17.1429 18.8577 17.1559 18.9231 17.1842C18.9884 17.2124 19.0465 17.255 19.0931 17.3089C19.1604 17.3922 19.2097 17.4886 19.2377 17.5919C19.2658 17.6953 19.272 17.8034 19.256 17.9093C19.2341 18.1501 19.1302 18.376 18.9615 18.5494C18.7929 18.7227 18.5699 18.8328 18.3297 18.8613ZM22.1892 12.8576H18.3984C18.2787 12.8573 18.1604 12.832 18.0511 12.7833C17.9418 12.7345 17.8439 12.6634 17.7637 12.5746C17.6828 12.4845 17.6218 12.3784 17.5848 12.2631C17.5479 12.1478 17.5358 12.0259 17.5493 11.9056L17.8323 9.33264C17.8576 9.12344 17.959 8.93088 18.1172 8.79167C18.2754 8.65247 18.4793 8.57637 18.69 8.57789H20.6883L22.2922 12.1372L22.1892 12.8576Z" fill="#127FAC"/>
    <path d="M1.70849 12C1.93596 12 2.15411 11.9096 2.31495 11.7488C2.47579 11.5879 2.56615 11.3698 2.56615 11.1423C2.56615 10.9149 2.47579 10.6967 2.31495 10.5359C2.15411 10.375 1.93596 10.2847 1.70849 10.2847H0.850827C0.62336 10.2847 0.405211 10.375 0.244368 10.5359C0.0835247 10.6967 -0.00683594 10.9149 -0.00683594 11.1423C-0.00683594 11.3698 0.0835247 11.5879 0.244368 11.7488C0.405211 11.9096 0.62336 12 0.850827 12H1.70849Z" fill="#127FAC"/>
  </g>
  <defs>
    <clipPath id="clip0_4171_830">
      <rect width="24" height="24" fill="white"/>
    </clipPath>
  </defs>
</svg>
    `,
    benefit1: `
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M29.5203 15.1185C27.4347 13.7742 26.596 11.328 27.412 9.03612C27.6161 8.5513 27.48 8.22071 27.3214 8.0224C27.2307 7.89017 26.936 7.53757 26.3466 7.58165C23.9664 7.71387 21.7449 6.17125 21.0419 3.81326C20.9059 3.32844 20.5432 3.15214 20.3392 3.086C20.1805 3.01989 19.7272 2.93174 19.3191 3.2623L19.2964 3.28434C17.3242 4.78289 14.536 4.76082 12.6543 3.24026C12.3143 2.95378 11.9516 2.97581 11.7249 3.04193C11.3622 3.15211 11.0902 3.41656 10.9995 3.76919C10.4327 6.08315 8.16587 7.71387 5.64967 7.5817C5.15095 7.55966 4.83359 7.91226 4.72022 8.04448C4.60688 8.19875 4.42553 8.55132 4.58421 8.94805L4.60688 9.0362C5.42295 11.3281 4.60688 13.7742 2.52135 15.1185C2.06798 15.405 2 15.8017 2 16C2 16.1984 2.06801 16.595 2.49871 16.8595C4.58424 18.2038 5.423 20.6499 4.60693 22.9418C4.40291 23.4266 4.53892 23.7572 4.69761 23.9555C4.78828 24.0878 5.08297 24.4183 5.67233 24.3963C8.05258 24.2641 10.2741 25.8067 10.9771 28.1647C11.1131 28.6495 11.4758 28.8258 11.6798 28.8919C11.8385 28.958 12.2918 29.0462 12.6999 28.7156C13.6746 27.9664 14.8534 27.5917 16.0095 27.5917C17.1657 27.5917 18.3217 27.9664 19.2738 28.6936L19.3418 28.7597C19.6819 29.0462 20.0445 29.0242 20.2713 28.9581C20.634 28.8479 20.906 28.5834 20.9967 28.2308C21.5634 25.9168 23.8303 24.2861 26.3465 24.4183C26.8452 24.4183 27.1626 24.0877 27.2759 23.9555C27.3893 23.8013 27.5706 23.4487 27.412 23.052L27.3893 22.9638C26.5732 20.6719 27.3893 18.2258 29.4748 16.8815C29.9282 16.595 29.9962 16.1983 29.9962 16C30.0188 15.7796 29.951 15.3829 29.5203 15.1185ZM19.8859 19.0191C19.7272 20.2753 18.9338 21.2229 17.6417 21.7518C17.415 21.8399 17.1884 21.906 16.9617 21.9721C16.939 21.9721 16.9163 21.9942 16.8937 21.9942V23.3825H14.8535V22.1264C14.5361 22.0823 14.2188 22.0602 13.924 21.9941C13.38 21.8839 12.8359 21.6856 12.3372 21.4212L12.4052 21.2008L13.04 19.4598C13.108 19.5039 13.176 19.526 13.244 19.57C14.0827 20.0108 14.8761 20.1871 15.6469 20.165C15.9642 20.165 16.2589 20.0989 16.5309 19.9887C17.0523 19.7904 17.3697 19.3937 17.4604 18.9089C17.5284 18.402 17.3017 17.8731 16.8483 17.5205C16.4176 17.19 15.9189 16.9696 15.3522 16.7492C14.4681 16.3966 13.8107 16.044 13.2667 15.6033C12.5413 15.0303 12.1332 14.1488 12.1332 13.2232C12.1559 12.2536 12.6319 11.306 13.4254 10.689C13.9014 10.3364 14.4455 10.0719 15.0575 9.93968V8.61743H17.0297V9.80746C17.0977 9.80746 17.143 9.82949 17.1884 9.82949C17.4831 9.87357 17.7777 9.91764 18.0724 9.98376C18.3898 10.0499 18.6618 10.1821 18.9338 10.3143L19.0698 10.3584L18.3444 12.3418C17.9364 12.0993 17.5284 11.9671 17.075 11.901C16.5763 11.8129 15.9869 11.7467 15.4201 11.923C14.9214 12.0993 14.6494 12.4079 14.5814 12.8486C14.4907 13.3555 14.6494 13.7301 15.0348 13.9725C15.4428 14.237 15.8962 14.4573 16.4402 14.6777C17.1429 14.9862 17.8003 15.2507 18.4124 15.6694C19.4098 16.3746 19.9312 17.3222 19.9312 18.4461C19.9312 18.6445 19.9313 18.8208 19.8859 19.0191Z" fill="#127FAC"/></svg>
    `,
    benefit2: `<svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
  <path d="M22.8333 4.7465V2.6665C22.8333 2.11984 22.38 1.6665 21.8333 1.6665C21.2866 1.6665 20.8333 2.11984 20.8333 2.6665V4.6665H12.1666V2.6665C12.1666 2.11984 11.7133 1.6665 11.1666 1.6665C10.62 1.6665 10.1666 2.11984 10.1666 2.6665V4.7465C6.56665 5.07984 4.81998 7.2265 4.55331 10.4132C4.52665 10.7998 4.84665 11.1198 5.21998 11.1198H27.78C28.1666 11.1198 28.4866 10.7865 28.4466 10.4132C28.18 7.2265 26.4333 5.07984 22.8333 4.7465Z" fill="#127FAC"/>
  <path d="M25.8333 20C22.8867 20 20.5 22.3867 20.5 25.3333C20.5 26.3333 20.78 27.28 21.2733 28.08C22.1933 29.6267 23.8867 30.6667 25.8333 30.6667C27.78 30.6667 29.4733 29.6267 30.3933 28.08C30.8867 27.28 31.1667 26.3333 31.1667 25.3333C31.1667 22.3867 28.78 20 25.8333 20ZM28.5933 24.76L25.7533 27.3867C25.5667 27.56 25.3133 27.6533 25.0733 27.6533C24.82 27.6533 24.5667 27.56 24.3667 27.36L23.0467 26.04C22.66 25.6533 22.66 25.0133 23.0467 24.6267C23.4333 24.24 24.0733 24.24 24.46 24.6267L25.1 25.2667L27.2333 23.2933C27.6333 22.92 28.2733 22.9467 28.6467 23.3467C29.02 23.7467 28.9933 24.3733 28.5933 24.76Z" fill="#127FAC"/>
  <path d="M27.1667 13.1201H5.83333C5.1 13.1201 4.5 13.7201 4.5 14.4535V22.6668C4.5 26.6668 6.5 29.3335 11.1667 29.3335H17.74C18.66 29.3335 19.3 28.4401 19.0067 27.5735C18.74 26.8001 18.5133 25.9468 18.5133 25.3335C18.5133 21.2935 21.8067 18.0001 25.8467 18.0001C26.2333 18.0001 26.62 18.0268 26.9933 18.0935C27.7933 18.2134 28.5133 17.5868 28.5133 16.7868V14.4668C28.5 13.7201 27.9 13.1201 27.1667 13.1201ZM12.78 24.2801C12.5267 24.5201 12.18 24.6668 11.8333 24.6668C11.4867 24.6668 11.14 24.5201 10.8867 24.2801C10.6467 24.0268 10.5 23.6801 10.5 23.3335C10.5 22.9868 10.6467 22.6401 10.8867 22.3868C11.02 22.2668 11.1533 22.1735 11.3267 22.1068C11.82 21.8935 12.4067 22.0135 12.78 22.3868C13.02 22.6401 13.1667 22.9868 13.1667 23.3335C13.1667 23.6801 13.02 24.0268 12.78 24.2801ZM12.78 19.6135C12.7133 19.6668 12.6467 19.7201 12.58 19.7735C12.5 19.8268 12.42 19.8668 12.34 19.8935C12.26 19.9335 12.18 19.9601 12.1 19.9734C12.0067 19.9868 11.9133 20.0001 11.8333 20.0001C11.4867 20.0001 11.14 19.8535 10.8867 19.6135C10.6467 19.3601 10.5 19.0135 10.5 18.6668C10.5 18.3201 10.6467 17.9735 10.8867 17.7201C11.1933 17.4135 11.66 17.2668 12.1 17.3601C12.18 17.3735 12.26 17.4001 12.34 17.4401C12.42 17.4668 12.5 17.5068 12.58 17.5601C12.6467 17.6135 12.7133 17.6668 12.78 17.7201C13.02 17.9735 13.1667 18.3201 13.1667 18.6668C13.1667 19.0135 13.02 19.3601 12.78 19.6135ZM17.4467 19.6135C17.1933 19.8535 16.8467 20.0001 16.5 20.0001C16.1533 20.0001 15.8067 19.8535 15.5533 19.6135C15.3133 19.3601 15.1667 19.0135 15.1667 18.6668C15.1667 18.3201 15.3133 17.9735 15.5533 17.7201C16.06 17.2268 16.9533 17.2268 17.4467 17.7201C17.6867 17.9735 17.8333 18.3201 17.8333 18.6668C17.8333 19.0135 17.6867 19.3601 17.4467 19.6135Z" fill="#127FAC"/>
</svg>`,
    benefit3: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4016 25.3448H5.7931C5.052 25.3448 4.34162 25.0506 3.81838 24.5265C3.29421 24.0032 3 23.2928 3 22.5517C3 18.6563 3 9.68855 3 5.7931C3 5.052 3.29421 4.34162 3.81838 3.81838C4.34162 3.2942 5.052 3 5.7931 3H10.4483V8.21565C10.4483 8.81616 10.7378 9.38038 11.2266 9.73045C11.7154 10.0796 12.3429 10.1718 12.9118 9.9781L14.1138 9.5675L15.4582 10.0051C16.0252 10.1904 16.6462 10.0917 17.1284 9.74162C17.6107 9.39155 17.8966 8.83106 17.8966 8.23519V3H22.5517C23.2928 3 24.0032 3.2942 24.5264 3.81838C25.0506 4.34162 25.3448 5.052 25.3448 5.7931V13.0459C24.1959 12.572 22.939 12.3103 21.6207 12.3103C16.2253 12.3103 11.8448 16.6909 11.8448 22.0862C11.8448 23.2286 12.0413 24.3253 12.4016 25.3448ZM12.3103 3H16.0345V8.23519L14.3949 7.7008C14.2041 7.63842 13.9974 7.64026 13.8065 7.70543L12.3103 8.21565V3Z" fill="#127FAC"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M21.6198 14.1724C17.2524 14.1724 13.7061 17.7187 13.7061 22.0862C13.7061 26.4536 17.2524 29.9999 21.6198 29.9999C25.9873 29.9999 29.5336 26.4536 29.5336 22.0862C29.5336 17.7187 25.9873 14.1724 21.6198 14.1724ZM20.1432 21.6206H22.5509C23.711 21.6206 24.3524 22.2761 24.3496 23.0135C24.3478 23.7536 23.7016 24.4137 22.5509 24.4137H20.6888C20.1749 24.4137 19.7578 24.8308 19.7578 25.3448C19.7578 25.8587 20.1749 26.2758 20.6888 26.2758H22.5509C25.0246 26.2758 26.2061 24.6102 26.2117 23.0209C26.2182 21.4298 25.0498 19.7586 22.5509 19.7586H20.1432L20.416 19.4858C20.7791 19.1227 20.7791 18.5324 20.416 18.1693C20.0529 17.8062 19.4626 17.8062 19.0995 18.1693L17.2375 20.0314C16.8734 20.3945 16.8734 20.9847 17.2375 21.3478L19.0995 23.2099C19.4626 23.573 20.0529 23.573 20.416 23.2099C20.7791 22.8468 20.7791 22.2565 20.416 21.8934L20.1432 21.6206Z" fill="#127FAC"/>
</svg>`
  }

  return svgObj[name]
}
