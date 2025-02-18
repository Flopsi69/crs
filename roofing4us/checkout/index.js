console.debug('*** Experiment started ***')

// Config for Experiment
const config = {
  // dir: 'http://127.0.0.1:5500/roofing4us/checkout',
  dir: 'https://flopsi69.github.io/crs/roofing4us/checkout',
  clarity: ['set', 'new_cart', 'variant_1'],
  debug: false
}

// const orig = console.log
// console.log = function (...args) {
//   orig.apply(console, ['Debug:', ...args])
// }

// Styles for Experiment
const styles = /* css */ `
.page-width {
  max-width: 1350px;
  margin: auto;
  width: 100%;
  padding: 0 15px;
}
.main-content {
  padding-top: 0;
}
#header-usp-banner, .nav-desktop, .site-header, .cart-header {
  display: none;
}
.site-footer {
  margin-top: 0;
  border-top: 1px solid #ccc;
}
div.cart {
  margin-top: 34px;
  display: flex;
  align-items: flex-start;
  gap: 32px;
}
.cart__footer {
  margin-top: 0;
}
.lav-header {
  padding: 15px 0;
}
.lav-container {
  max-width: 1350px;
  margin: auto;
  width: 100%;
  padding: 0 15px;
}
.lav-header__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}
.lav-header__logo {
  line-height: 0;
  flex-shrink: 0;
}
.lav-header__logo img {
  max-width: 225px;
  width: 100%;
}
.lav-header__contacts {
  display: flex;
}
.lav-header__mob {
  display: none;
}
.lav-header__item {
  position: relative;
  color: #101010;
  font-size: 15px;
  font-weight: 400;
  line-height: 22px;
}
.lav-header__item:not(:first-child) {
  font-weight: 700;
}
.lav-header__item + .lav-header__item {
  margin-left: 10px;
  padding-left: 11px;
}
.lav-header__item + .lav-header__item:before {
  content: '|';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  color: #101010;
  font-size: 15px;
  font-weight: 400;
  line-height: 22px;
}

.lav-head {
  margin-top: 30px;
}
.lav-head__title {
  color: #101010;
  font-size: 28px;
  font-weight: 600;
  line-height: 52px;
}
.lav-head__benefits {
  background: #E1F0FA;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-top: 20px;
  padding: 12px 32px;
}
.lav-head__benefit {
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
  color: #000;
}

.lav-timer {
  display: flex;
  align-items: center;
  background: #289E04;
  color: #fff;
  padding: 6px 16px;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  gap: 16px;
}
.lav-timer--product {
  display: inline-flex;
  font-size: 12px;
  gap: 8px;
  margin-bottom: 12px;
}
.lav-timer--product svg {
  width: 20px;
  height: 20px;
}
.lav-timer__icon {
  line-height: 0;
  flex-shrink: 0;
}
.lav-cart__main {
  flex-grow: 1;
}
.lav-cart__main>table {
  border: 1px solid #CCC;
  background: #FFF;
  margin-top: 32px;
  margin-bottom: 0;
}
.cart tbody {
  margin-top: 0;
}
.cart tr.cart__row td:first-child {
  padding: 32px 32px 0!important;
}
.cart__product-title {
  color: #101010;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 12px;
  display: block;
}
.cart__product-title:hover {
  border: none!important;
  text-decoration: underline;
}
.list-view-item__title .brand_name {
  color: #A0A0A0;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin-top: 0;
}
.product-details {
  padding-top: 0;
  margin-top: 2px;
}
.product-details__item {
  color: #A0A0A0;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 0;
}
.product-details__item + .product-details__item {
  margin-top: 2px;
}
.cart__image-wrapper {
  padding-right: 0;
  margin-right: 32px;
  flex-basis: 108px;
}
.template-cart .dg-shipping-date {
  margin-bottom: 0;
  margin-top: 0;
}
.template-cart .dg-shipping-date P.EstDeliveryTime[style="display:block;"]:last-child {
  margin-top: 12px;
}
.cart tr.cart__row td.cart__price {
  position: relative;
  padding: 24px 32px 32px!important;
}
.cart .cart__row .cart__remove {
  bottom: initial;
  left: initial;
  top: 32px;
  right: 32px;
  margin-top: 0;
  width: 17px;
  height: 21px;
  background-size: contain;
}
.cart .cart__row .cart__remove a {
  width: 18px;
  height: 23px;
  border: none;
}
.cart tr.cart__row td.cart__price .cart__qty {
  border: 1px solid #D9DADC;
  background: #FFF;
  width: auto;
  margin-top: 0;
}
.cart__qty-input {
  border: none;
  border-left: 1px solid #D9DADC;
  border-right: 1px solid #D9DADC;
  width: 48px;
  color: #536D80;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  padding: 0;
}
.cart-qtyplus, .cart-qtyminus {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  font-size: 0;
}
.cart-qtyplus {
  background: url('${config.dir}/img/plus.svg') no-repeat center;
}
.cart-qtyminus {
  background: url('${config.dir}/img/minus.svg') no-repeat center;
}
.cart tr.cart__row td.cart__price>div:last-child {
  width: auto;
  position: absolute;
  right: 32px;
  bottom: 32px;
}
.cart tr.cart__row td.cart__price div[data-cart-item-price] {
  order: 0;
  padding-bottom: 0;
  width: auto;
  padding-left: 140px;
}
.cart__price .ex_price {
  float: none;
}
.cart tr.cart__row td.cart__price div[data-cart-item-price] dl [data-cart-item-regular-price-group] {
  display: flex;
  gap: 14px;
  flex-flow: row-reverse;
  white-space: nowrap;
  align-items: center;
}
.cart tr.cart__row td.cart__price div[data-cart-item-price] dl {
  padding-bottom: 0;
}
.cart__row span[data-cart-item-regular-price] {
  color: #101010;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
}
.cart__row .cart__price [data-cart-item-regular-price-group] dd span {
  color: #536D80;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
}
.list-view-item__title {
  padding-right: 30px;
}

.cart__footer .grid h2 {
  color: #101010;
  font-size: 20px;
  font-weight: 600;
  line-height: 32px;
  margin: 0;
  text-transform: capitalize;
  letter-spacing: 0;
  text-align: left;
}
.cart-page-clerk {
  overflow: hidden;
}
.lav-summary {
  border: 1px solid #CCC;
  background: #FFF;
  padding: 32px;
  width: 480px;
  border-radius: 0;
  flex-shrink: 0;
  margin-bottom: 0;
}
@media(max-width: 1100px) {
  .lav-summary {
    width: 400px;
  }
}
.clerk-design-component-YGRWFWyS {
  margin-top: 125px!important;
  margin-bottom: 0!important;
}
.clerk_heading_center.clerk>div>h2 {
  color: #101010;
  text-align: center;
  font-size: 28px;
  font-weight: 600;
  line-height: 52px;
  letter-spacing: 0;
  text-transform: capitalize;
  margin-top: 0;
  margin-bottom: 30px;
}
.cart__footer .grid .cart-price-summary {
  margin: 24px 0 0;
}
.cart-price-summary .cart-subtotal {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}
.cart-subtotal__title {
  color: #101010;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
}
.cart-subtotal__price {
  float: none;
  padding: 0;
  color: #101010;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
}
.clerk-slider {
  overflow: visible;
}
.lav-trust {
  line-height: 0;
  margin-top: 60px;
  padding: 60px 0;
  background: #F8F8F8;
}
.delivery_charges {
  display: none;
}
.template-cart .delivery_charges {
  display: none!important;
}
.cart-note__label {
  margin: 0;
  color: #003068;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0;
  padding-left: 20px;
  text-decoration: underline;
}
.cart-note__input {
  border: 1px solid #003068;
  background: #FFF;
  min-height: 108px;
  margin-top: 16px;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px; 
  padding: 16px;
}
.cart__buttons-container {
  margin-top: 16px;
}
.grid__item {
  float: none;
}
.cart-note + div {
  margin: 0!important;
}
.cart-note {
  padding-top: 24px;
  border-top: 1px solid #CCC;
}
klarna-placement {
  display: block;
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid #CCC;
}
klarna-placement::part(osm-container) {
  border: none;
  background: none;
  color: #101010;
  font-family: Poppins;
  font-size: 13px;
  font-style: normal;
  line-height: 20px;
  padding-top: 0;
}
klarna-placement::part(osm-cta) {
  color: #003068;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
}
klarna-placement::part(osm-logo) {
  background-color: #FFB3C7;
  padding: 6px 5px;
  font-size: 13px;
  border-radius: 4px;
  margin-right: 2px;
}
.cart__shipping {
  display: none;
}
.cart-note:not(.active) .cart-note__input {
  display: none;
}
.cart-note__input + br {
  display: none;
}
.cart-note__input::placeholder {
  color: #707070;
}
.cart-note__label {
  background: url('${config.dir}/img/note-plus.svg') left no-repeat;
}
form.cart {
  margin: 0;
}
.cart_checkout_btn {
  width: 100%;
  color: #FFF;
  text-align: center;
}
.cart__submit {
  min-height: 52px;
  font-size: 15px;
  font-weight: 600;
  line-height: 21px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  border-radius: 4px;
}
.cart_checkout_btn svg {
  right: 10px;
}
.cart_checkout_btn .cart__submit.loading.btn {
  padding-right: 18px;
}
.additional-checkout-buttons {
  margin-top: 0;
}
.lav-shipping {
  display: flex;
  align-items: center;
  padding-bottom: 14px;
  margin-top: 6px;
}
.lav-shipping__caption {
  color: #101010;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  padding-right: 16px;
  margin-right: 16px;
  border-right: 1px solid #CCC;
}
.lav-shipping__calc {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #003068;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  cursor: pointer;
  transition: .3s;
}
.lav-shipping__calc:hover {
  opacity: .7;
}
.lav-shipping__calc span {
  text-decoration: underline;
}
.lav-shipping__price {
  margin-left: auto;
  color: #101010;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  padding-left: 15px;
}
.lav-total {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 12px 0;
  border-top: 1px solid #ccc;
  color: #101010;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
}
.lav-estimate {
  border: 1px solid #CCC;
  background: #FFF;
  margin-top: 32px;
  padding: 32px;
}
.lav-estimate__title {
  color: #1B1B1B;
  font-size: 20px;
  font-weight: 600;
  line-height: 32px;
}
.lav-estimate__inner {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 20px;
  flex-wrap: wrap;
}
.lav-estimate__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border: 2px solid #E0162B;
  background: #E0162B;
  height: 60px;
  transition: .3s;
  cursor: pointer;
  color: #FFF;
  text-align: center;
  font-size: 15px;
  font-weight: 600;
  line-height: 21px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  max-width: 340px;
  margin-top: 20px;
  width: 100%;
}
.lav-estimate__select {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  opacity: 0;
}
.lav-estimate__btn svg {
  display: none;
}
.lav-estimate__btn.lav-estimate__btn--loading svg {
  display: block;
}
.lav-estimate__btn:hover {
  background-color: #b21122;
}
.lav-estimate__details {
  padding-top: 20px;
  margin-top: 20px;
  border-top: 1px solid #ccc;
}
.lav-estimate__cost {
  color: #101010;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
}
.lav-estimate__cost-item {
  display: flex;
  align-items: center;
  gap: 15px;
}
.lav-estimate__cost-item + .lav-estimate__cost-item {
  border-top: 1px solid #ccc;
  padding-top: 10px;
  margin-top: 10px;
}
.lav-estimate__cost span {
  color: #003068;
}
.lav-estimate__cost-radio {
  width: 32px;
  height: 32px;
  outline: 1px solid #D9DADC;
  border-radius: 50%;
  transition: .3s;
  border: 3px solid #fff;
}
.lav-estimate__cost-price {
  margin-left: auto;
}
.lav-estimate__cost-item.active .lav-estimate__cost-radio {
  outline-color: #003068;
  background-color: #003068;
}
.lav-estimate__descr {
  display: flex;
  gap: 12px;
  color: #A0A0A0;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px; 
  margin-top: 20px;
}
.lav-estimate__descr svg {
  flex-shrink: 0;
}
.lav-estimate__find {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  border: 2px solid #E0162B;
  background: #FFF;
  color: #E0162B;
  text-align: center;
  font-size: 15px;
  font-weight: 600;
  line-height: 21px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  height: 60px;
  cursor: pointer;
  transition: .3s;
}
.lav-estimate__find:hover {
  background-color: #E0162B;
  color: #FFF;
}
.lav-estimate__group {
  position: relative;
  flex-grow: 1;
}
.lav-estimate__label {
  position: absolute;
  color: #707070;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  pointer-events: none;
  top: 10px;
  left: 16px;
}
.lav-estimate__input {
  width: 255px;
  max-width: 100%;
  height: 60px;
  border: 1px solid #003068;
  background: #FFF;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  padding: 25px 16px 5px 16px;
}
.lav-estimate__country, .lav-estimate__state {
  pointer-events: none;
}
.lav-estimate__input:focus {
  border-color: #003068;
  outline: none;
}
.lav-estimate__zip {
  width: 192px;
}
.lav-estimate__input::placeholder {
  color: #707070;
}
.lav-estimate:not(.active) .lav-estimate__inner, .lav-estimate:not(.active) .lav-estimate__btn, .lav-estimate:not(.active) .lav-estimate__details {
  display: none;
}

.lav-trust__title {
  color: #101010;
  font-size: 20px;
  line-height: 32px;
  font-weight: 600;
  margin-bottom: 24px;
  text-align: center;
}
@media(max-width: 992px) {
  div.cart {
    display: block;
  }
  .lav-estimate__input {
    width: 210px;
  }
  .lav-summary {
    width: 100%;
    margin-top: 32px;
  }
  .lav-head__benefits {
    grid-template-columns: 1fr;
    gap: 12px;
    padding: 16px 20px;
    margin-left: -20px;
    margin-right: -20px;
  }
  .page-width, .lav-container {
    padding-left: 20px;
    padding-right: 20px;
  }
}
@media(max-width: 768px) {
  .lav-header__logo img {
    max-width: 196px;
  }
  .lav-head__title {
    font-size: 24px;
    line-height: 32px;
  }
  .lav-head {
    margin-top: 20px;
  }
  .lav-header {
    border-bottom: 1px solid #EBEBEB;
    background: #FFF;
    padding: 12px 0;
  }
  .lav-header__contacts {
    display: none;
  }
  .lav-header__mob {
    display: block;
    line-height: 0;
  }
  div.cart {
    margin-top: 20px;
  }
  .lav-head__benefit {
    font-size: 12px;
    gap: 10px;
  }
  .lav-head__benefit svg {
    width: 20px;
    height: 20px;
  }
  .lav-timer:not(.lav-timer--product) {
    margin: 0 -20px;
    padding: 8px 20px;
    gap: 12px;
    font-size: 12px;
  }
  .lav-timer:not(.lav-timer--product) .lav-timer__icon svg {
    width: 24px;
    height: 24px;
  }
  .lav-timer--product {
    display: flex;
    justify-content: center;
  }
  .lav-cart__main>table {
    margin: 0;
  }
  .cart__image-wrapper {
    flex-basis: 64px;
    margin-right: 14px;
  }
  .lav-cart__main>table {
    border: none;
  }
  .cart tr.cart__row td:first-child {
    padding: 20px 0 0!important;
  }
  .cart__product-title {
    font-size: 14px;
    line-height: 22px;
  }
  .product-details {
    margin-top: 2px;
  }
  .list-view-item__title {
    padding-right: 0;
  }
  .cart .cart__row .cart__remove {
    right: initial;
    top: initial;
    left: 20px;
    bottom: 34px;
    z-index: 10;
  }
  .cart tr.cart__row td:first-child {
    position: static;
  }
  .cart__row {
    position: relative;
  }
  .cart tr.cart__row td.cart__price>div:last-child {
    position: static;
    margin-left: 0;
  }
  .cart tr.cart__row td.cart__price {
    padding: 12px 0 20px 78px!important;
    flex-wrap: nowrap;
    align-items: center;
    flex-flow: row-reverse;
    justify-content: space-between;
  }
  .cart tr.cart__row td.cart__price div[data-cart-item-price] {
    padding-left: 15px;
  }
  .cart tr.cart__row td.cart__price div[data-cart-item-price] dl [data-cart-item-regular-price-group] {
    flex-flow: column;
    gap: 0;
    text-align: left;
    align-items: flex-start;
  }
  .cart__row span.ex_price[data-cart-item-regular-price] {
    margin-top: 2px;
  }
  .lav-trust {
    padding: 30px 0;
    margin-top: 45px;
  }
  .lav-trust__title {
    display: block;
    line-height: 24px;
    font-size: 16px;  
    text-align: left;
  }
  .clerk_heading_center.clerk>div>h2 {
    color: #101010;
    text-align: center;
    font-size: 21px;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 20px;
  }
  .clerk-design-component-YGRWFWyS {
    margin-top: 60px!important;
  }
  .lav-summary {
    width: 100%;
    border-left: none;
    border-right: none;
    padding: 20px;
    margin-top: 32px;
  }
  .lav-shipping {
    margin-top: 8px;
  }
  .cart-note__label {
    text-align: left!important;
  }
  .additional-checkout-buttons {
    border-top: 0;
    padding-top: 0;
  }
  klarna-placement::part(osm-container) {
    padding: 0;
  }
  .cart__buttons-container {
    max-width: 100%;
  }
  .site-footer__content {
    padding: 0;
  }
  .cart__row {
    border-bottom: none;
  }
  .cart__row + .cart__row {
    border-top: 1px solid var(--color-border);
  }
  .lav-cart__main {
    border-bottom: 1px solid #ccc;
    margin: 0 -20px;
    padding: 0 20px;
  }
  .lav-estimate {
    margin-top: 60px;
    padding: 0;
    border: none;
    width: 100%;
  }
  .lav-estimate__cost {
    // font-size: 14px;
  }
  .lav-estimate__btn {
    max-width: 100%;
  }
  .lav-estimate__inner {
    flex-flow: column;
  }
  .lav-estimate__input {
    width: 100%;
  }
  .lav-estimate__group {
    width: 100%;
  }
}
@media(max-width: 430px) {
  .lav-summary {
    margin-left: -20px;
    margin-right: -20px;
    width: initial;
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

  document.head.appendChild(stylesEl)

  console.debug('** InitExp **')

  updateHeader()
  addHead()
  handleCart()
  handleSummary()
  addShippingEstimate()
  waitFor(() => {
    return _$('.clerk_heading_center.clerk>div>h2')
  }, updateFrequent)
  addTrust()
}

function updateHeader() {
  const markup = /* html */ `
    <div class='lav-header'>
      <div class='lav-container lav-header__container'>
        <a href='/' class='lav-header__logo'>
          <img src="${config.dir}/img/logo.png" alt="Roofing4US">
        </a>
        <a href="tel:281-657-1443" class='lav-header__mob'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7.67047 12.3611C9.46433 14.1418 11.5407 15.8428 12.3559 15.0215C13.523 13.8458 14.2414 12.8229 16.8314 14.8884C19.4214 16.9549 17.4434 18.3456 16.3129 19.4849C15.0085 20.7993 10.1225 19.577 5.27951 14.7707C0.436794 9.9635 -0.822771 5.08709 0.48268 3.7721C1.61345 2.63279 2.98937 0.644923 5.07393 3.21982C7.1595 5.79342 6.14209 6.51969 4.97493 7.69573C4.16015 8.51677 5.87632 10.58 7.67047 12.3611ZM10.2716 3.86585C10.2716 3.86585 9.73049 3.7813 9.35159 4.16049C8.96156 4.55053 8.94454 5.22244 9.35555 5.6331C9.59843 5.87598 9.94094 5.92775 9.94094 5.92775C10.6086 6.05297 11.6148 6.265 12.6856 7.33548C13.7561 8.40591 13.9681 9.41213 14.0934 10.0801C14.0934 10.0801 14.1451 10.4226 14.388 10.6655C14.7987 11.0762 15.4706 11.0595 15.8606 10.6695C16.2395 10.2906 16.1553 9.74949 16.1553 9.74949C15.9432 8.39714 15.2877 6.98449 14.1622 5.85897C13.0363 4.73345 11.6236 4.07822 10.2716 3.86585ZM15.3476 4.67344C17.3103 6.6361 18.147 8.86357 17.8747 10.6685C17.8747 10.6685 17.7796 11.2401 18.1529 11.6134C18.5731 12.0336 19.2391 12.0094 19.6324 11.6164C19.8851 11.3637 19.9402 10.9524 19.9402 10.9524C20.1654 9.39256 19.8822 6.25459 16.8242 3.19692C13.7662 0.139207 10.6286 -0.143968 9.06871 0.0808852C9.06871 0.0808852 8.6577 0.135641 8.40465 0.388643C8.01134 0.781956 7.98743 1.44798 8.40759 1.86814C8.78095 2.2415 9.35251 2.1464 9.35251 2.1464C11.1576 1.87402 13.385 2.71083 15.3476 4.67344Z" fill="black"/>
          </svg>
        </a>
        <div class='lav-header__contacts'>
          <a href="/pages/frequently-asked-questions" class='lav-header__item'>FAQ</a>
          <a href="mailto:sales@4us-group.com" class='lav-header__item'>✉ sales@4us-group.com</a>
          <a href="tel:281-657-1443" class='lav-header__item'>✆ 281-657-1443</a>
        </div>
      </div>
    </div>
  `

  _$('.site-header').insertAdjacentHTML('afterend', markup)
}

function addHead() {
  const markup = /* html */ `
    <div class='lav-head'>
      <div class='lav-head__title'>Your Cart</div>
      <div class='lav-head__benefits'>
        <div class='lav-head__benefit'>
          ${getSvg('benefit1')} Expert advice and support
        </div>
        <div class='lav-head__benefit'>
          ${getSvg('benefit2')} Fast nationwide delivery
        </div>
        <div class='lav-head__benefit'>
          ${getSvg('benefit3')} Customer-Friendly Returns & Cancellations
        </div>
      </div>
    </div>
  `

  _$('[data-section-id="cart-template"]').insertAdjacentHTML(
    'afterbegin',
    markup
  )
}

function handleCart() {
  _$('.cart .col-md-8').classList.add('lav-cart__main')
  _$('.cart .col-md-8').classList.remove('col-md-8')
  _$('.lav-cart__main').insertAdjacentHTML('afterbegin', getTimerMarkup())
  _$$('[data-cart-item-regular-price]').forEach((el) => {
    el.textContent = el.textContent.replace(' each', '/Each')
  })

  setMostExpensiveProduct()
}

function getTimerMarkup(
  text = 'Act fast –  the last items are waiting in your cart!',
  additionalClass
) {
  const markup = /* html */ `
      <div class='lav-timer ${additionalClass}'>
        <div class='lav-timer__icon'>${getSvg('timer')}</div>
        <div class='lav-timer__text'>${text}</div>
      </div>
    `

  return markup
}

function setMostExpensiveProduct() {
  _$('.lav-timer--product')?.remove()

  let mostExpensiveProductPrice = 0

  const localStorageValue = localStorage.getItem('mostExpensiveProduct')

  let targetProduct = localStorageValue
    ? _$(`.cart__row[data-cart-item-key="${localStorageValue}"]`)
    : null

  if (localStorageValue && !targetProduct) return

  if (targetProduct) {
    setLabel(targetProduct)
    return
  }

  _$$('dl [data-cart-item-regular-price-group] .ex_price').forEach((el) => {
    const productPrice = parseFloat(el.innerText.replace(/[^0-9.]/g, ''))

    if (productPrice > mostExpensiveProductPrice) {
      mostExpensiveProductPrice = productPrice
      targetProduct = el.closest('.cart__row')
    }
  })

  if (!targetProduct) return

  setLabel(targetProduct)
  localStorage.setItem(
    'mostExpensiveProduct',
    targetProduct.getAttribute('data-cart-item-key')
  )

  function setLabel(el) {
    el.querySelector('.cart__product-title')?.insertAdjacentHTML(
      'afterend',
      getTimerMarkup('Hurry up, only 4 items left!', 'lav-timer--product')
    )
  }
}

function handleSummary() {
  _$('.cart .col-md-4').classList.add('lav-summary')
  _$('.cart .col-md-4').classList.remove('col-md-4')
  _$('.cart-note__input').setAttribute(
    'placeholder',
    '| Add a note to your order'
  )

  _$('.cart-note__label').addEventListener('click', function (e) {
    e.preventDefault()
    pushDataLayer(
      'exp_imp_cart__button_01',
      'Finf out the shipping cost',
      'click',
      'Estimate Shipping'
    )
    _$('.cart-note').classList.toggle('active')
  })

  _$('.cart__submit').type = 'button'
  _$('.cart__submit').value = 'Secure Checkout'

  _$('.cart-subtotal').insertAdjacentHTML(
    'afterend',
    `
    <div class='lav-shipping'>
      <div class='lav-shipping__caption'>Shipping</div>
      <div class='lav-shipping__calc'>
        ${getSvg('calc')} <span>Calculate</span>
      </div>
      <div class='lav-shipping__price'>-</div>
    </div>
    <div class='lav-total'>
      <div class='lav-total__caption'>Total</div>
      <div class='lav-total__value'>-</div>
    </div>
  `
  )

  _$('.lav-shipping__calc').addEventListener('click', function () {
    pushDataLayer(
      'exp_imp_cart__link_02',
      'Add a note to your order',
      'click',
      'Order summary'
    )
    _$('.lav-estimate__find').style.display = 'none'
    _$('.lav-estimate').classList.add('active')
    _$('.lav-estimate').scrollIntoView({ behavior: 'smooth', block: 'center' })
  })

  setPrices()

  const observer = new MutationObserver((mutations, observer) => {
    setPrices()
    setMostExpensiveProduct()
    if (_$('.lav-estimate__cost-item.active')) {
      calculateShipping()
    }
  })

  observer.observe(_$('.cart-subtotal'), {
    childList: true,
    subtree: true,
    attributes: true,
    characterData: true,
    attributeOldValue: true
  })
}

function setPrices() {
  if (_$('.lav-estimate__cost-item.active')) {
    const shippingPrice = parseFloat(
      _$('.lav-estimate__cost-item.active').dataset.price
    )

    const currency = _$('.cart-subtotal__price').innerText.includes('CA$')
      ? 'CAD'
      : 'USD'

    const subtotalPrice = parseFloat(
      _$('.cart-subtotal__price').innerText.replace(/[^0-9.]/g, '')
    )

    _$('.lav-shipping__price').innerText =
      _$('.lav-estimate__cost-item.active .lav-estimate__cost-price')
        .innerText +
      ' ' +
      currency

    _$('.lav-total__value').innerHTML = `${currency === 'USD' ? '$' : 'CA$'}${(
      subtotalPrice + shippingPrice
    ).toFixed(2)} ${currency}`
  } else {
    _$('.lav-shipping__price').innerText = '-'
    _$('.lav-total__value').innerHTML = _$('.cart-subtotal__price').innerHTML
  }
}

async function calculateShipping() {
  const country = _$('.lav-estimate__country + select').value
  const province = _$('.lav-estimate__state + select').value
  const zip = _$('.lav-estimate__zip').value

  $('.lav-estimate__details').slideUp()

  _$('.lav-estimate__btn').classList.add('lav-estimate__btn--loading')

  _$('.lav-estimate__cost').innerHTML = ''
  _$('.lav-shipping__price').innerText = '...'
  _$('.lav-total__value').innerText = '...'

  try {
    const res = await fetch('/cart/shipping_rates.json', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        shipping_address: {
          zip: zip, // Example ZIP code (Los Angeles) '90001'
          country, // Country code
          province // State code for California
        }
      })
    })

    const data = await res.json()

    if (!data.shipping_rates?.length) {
      const [objKey, objValue] = Object.entries(data)[0]
      if (objValue) {
        alert(`Error! ${objValue}`)
      }
      return
    }

    pushDataLayer(
      'exp_imp_cart__submit_01',
      'Select and estimate',
      'submit',
      'Estimate Shipping'
    )

    const shippingRates = data.shipping_rates.map((rate) => ({
      price: rate.price,
      name: rate.name,
      currency: rate.currency
    }))

    shippingRates.forEach((rate, index) => {
      const currency = rate.currency === 'USD' ? '$' : 'CA$'

      const rateItem = document.createElement('div')
      rateItem.classList.add('lav-estimate__cost-item')
      rateItem.dataset.price = rate.price

      if (index === 0) rateItem.classList.add('active')

      rateItem.innerHTML = `
        <div class='lav-estimate__cost-radio'></div>
        <div class='lav-estimate__cost-item__name'>${rate.name}</div>
        <div class='lav-estimate__cost-price'>${currency + rate.price}</div>
      `

      rateItem.addEventListener('click', function () {
        if (rateItem.classList.contains('active')) return

        _$$('.lav-estimate__cost-item.active').classList.remove('active')
        rateItem.classList.add('active')

        setPrices()
      })

      _$('.lav-estimate__cost').appendChild(rateItem)
    })

    $('.lav-estimate__details').slideDown()

    console.log('shipping rates', shippingRates)
  } catch (error) {
    console.error('Error shipping:', error)
  } finally {
    _$('.lav-estimate__btn').classList.remove('lav-estimate__btn--loading')
    setPrices()
  }
}

function addShippingEstimate() {
  const states = {
    CA: {
      Alberta: 'Alberta',
      'British Columbia': 'British Columbia',
      Manitoba: 'Manitoba',
      'New Brunswick': 'New Brunswick',
      'Newfoundland and Labrador,Newfoundland': 'Newfoundland and Labrador',
      'Northwest Territories': 'Northwest Territories',
      'Nova Scotia': 'Nova Scotia',
      Nunavut: 'Nunavut',
      Ontario: 'Ontario',
      'Prince Edward Island': 'Prince Edward Island',
      'Quebec,Québec': 'Quebec',
      Saskatchewan: 'Saskatchewan',
      Yukon: 'Yukon'
    },
    US: {
      AL: 'Alabama',
      AK: 'Alaska',
      AS: 'American Samoa',
      AZ: 'Arizona',
      AR: 'Arkansas',
      CA: 'California',
      CO: 'Colorado',
      CT: 'Connecticut',
      DE: 'Delaware',
      FM: 'Micronesia',
      FL: 'Florida',
      GA: 'Georgia',
      GU: 'Guam',
      HI: 'Hawaii',
      ID: 'Idaho',
      IL: 'Illinois',
      IN: 'Indiana',
      IA: 'Iowa',
      KS: 'Kansas',
      KY: 'Kentucky',
      LA: 'Louisiana',
      ME: 'Maine',
      MH: 'Marshall Islands',
      MD: 'Maryland',
      MA: 'Massachusetts',
      MI: 'Michigan',
      MN: 'Minnesota',
      MS: 'Mississippi',
      MO: 'Missouri',
      MT: 'Montana',
      NE: 'Nebraska',
      NV: 'Nevada',
      NH: 'New Hampshire',
      NJ: 'New Jersey',
      NM: 'New Mexico',
      NY: 'New York',
      NC: 'North Carolina',
      ND: 'North Dakota',
      MP: 'Northern Mariana Islands',
      OH: 'Ohio',
      OK: 'Oklahoma',
      OR: 'Oregon',
      PW: 'Palau',
      PA: 'Pennsylvania',
      PR: 'Puerto Rico',
      RI: 'Rhode Island',
      SC: 'South Carolina',
      SD: 'South Dakota',
      TN: 'Tennessee',
      TX: 'Texas',
      UT: 'Utah',
      VT: 'Vermont',
      VA: 'Virginia',
      WA: 'Washington',
      DC: 'Washington DC',
      WV: 'West Virginia',
      WI: 'Wisconsin',
      WY: 'Wyoming',
      VI: 'U.S. Virgin Islands',
      AA: 'Armed Forces Americas',
      AE: 'Armed Forces Europe',
      AP: 'Armed Forces Pacific'
    }
  }

  const markup = /* html */ `
    <div class='lav-estimate'>
      <div class='lav-estimate__title'>Estimate Shipping</div>
      <div class='lav-estimate__find'>
        Find out the shipping cost
      </div>
      <div class='lav-estimate__inner'>
        <div class='lav-estimate__group'>
          <div class='lav-estimate__label'>Country</div>
          <input value='United States' class='lav-estimate__country lav-estimate__input' />
          <select class='lav-estimate__select'>
            <option selected="selected" value="US">United States</option>
            <option value="CA">Canada</option>
          </select>
        </div>
        <div class='lav-estimate__group'>
          <div class='lav-estimate__label'>State/province</div>
          <input class='lav-estimate__state lav-estimate__input' />
          <select class='lav-estimate__select'>
        
          </select>
        </div>
        <div class='lav-estimate__group'>
          <div class='lav-estimate__label'>Zip code</div>
          <input class='lav-estimate__zip lav-estimate__input' />
        </div>
      </div>
      <div class='lav-estimate__btn'>
        Select and estimate

        <svg aria-hidden="true" focusable="false" role="presentation" viewBox="0 0 20 20" class="icon icon-spinner"><path d="M7.229 1.173a9.25 9.25 0 1 0 11.655 11.412 1.25 1.25 0 1 0-2.4-.698 6.75 6.75 0 1 1-8.506-8.329 1.25 1.25 0 1 0-.75-2.385z" fill="#919EAB"></path></svg>
      </div>
      <div class='lav-estimate__details' style='display: none;'>
        <div class='lav-estimate__cost'></div>
        <div class='lav-estimate__descr'>
          ${getSvg('truck')}
          This estimate is usually accurate, but in rare cases, the final shipping cost may vary. If there’s any difference, we’ll contact you before processing your order
        </div>
      </div>
    </div>
  `

  if (window.innerWidth < 768) {
    _$('.cart__footer').insertAdjacentHTML('afterend', markup)
  } else {
    _$('.lav-cart__main>table').insertAdjacentHTML('afterend', markup)
  }

  _$('.lav-estimate__btn').addEventListener('click', function () {
    if (this.classList.contains('lav-estimate__btn--loading')) return

    pushDataLayer(
      'exp_imp_cart__button_02',
      'Select and estimate',
      'click',
      'Estimate Shipping'
    )
    calculateShipping()
  })

  _$('.lav-estimate__country + select').addEventListener('change', function () {
    // setPrices()
    fillStateSelect()

    _$('.lav-estimate__state').value = ''
    this.previousElementSibling.value =
      this.value === 'US' ? 'United States' : 'Canada'
  })

  _$('.lav-estimate__state + select').addEventListener('change', function () {
    // setPrices()
    const country = _$('.lav-estimate__country + select').value
    const statesList = country === 'US' ? states.US : states.CA

    this.previousElementSibling.value = statesList[this.value]
  })

  _$('.lav-estimate__find').addEventListener('click', function () {
    pushDataLayer(
      'exp_imp_cart__button_02',
      'Select and estimate',
      'click',
      'Estimate Shipping'
    )
    this.style.display = 'none'
    _$('.lav-estimate').classList.add('active')
  })

  fillStateSelect()

  function fillStateSelect() {
    const country = _$('.lav-estimate__country + select').value
    const statesList = country === 'US' ? states.US : states.CA
    const select = _$('.lav-estimate__state + select')

    select.innerHTML = '<option></option>'

    for (const key in statesList) {
      const option = document.createElement('option')
      option.value = key
      option.textContent = statesList[key]
      select.appendChild(option)
    }
  }
}

function updateFrequent() {
  _$('.clerk_heading_center.clerk>div>h2').innerText = 'Frequently Bought With'
}

function addTrust() {
  const markup = /* html */ `
    <div class='lav-trust'>
      <div class='lav-container'>
        <div class='lav-trust__title'>
          Join over 85,000+ satisfied customers who trust roofing4us for quality and service
        </div>

        <iframe name="full-page-widget_frame" id="full-page-widget_frame" src="https://widget.reviews.co.uk/vertical/widget?elementId=full-page-widget&amp;version=1&amp;&amp;store=insulation4us&amp;primaryClr=%23e0162b&amp;layout=fullWidth&amp;height=500&amp;numReviews=21" frameborder="0" width="100%" title="Reviews Vertical Widget" style="min-width: 170px;" height="604"></iframe>
      </div>
    </div>
  `

  _$('.site-footer').insertAdjacentHTML('beforebegin', markup)
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
    once: true,
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
      if (typeof cb === 'function') cb($(condition))
      return
    }

    return new Promise((resolve) => {
      const observer = new MutationObserver((mutations, observer) => {
        console.log(mutations)
        if (_$(condition)) {
          console.log('firee')
          if (typeof cb === 'function') cb(_$(condition))
          if (config.once) observer.disconnect()
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

  console.log('startMutation', el)

  let observer = new MutationObserver((mutations, observer) => {
    for (let mutation of mutations) {
      console.log('mutation', mutation)
      if (typeof cbAdded === 'function') {
        for (let node of mutation.addedNodes) {
          console.log('node', node)
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

  observer.observe(el, {
    childList: true,
    subtree: true,
    attributes: true,
    characterData: true,
    attributeOldValue: true
  })

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
    truck: `
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M33.3176 23.2135C33.4217 23.0561 33.44 22.857 33.3662 22.6832L31.4336 18.1326C31.3455 17.9248 31.1416 17.79 30.9159 17.79H26.4515C26.1409 17.79 25.889 18.0418 25.889 18.3525V22.9031C25.889 23.2137 26.1409 23.4656 26.4515 23.4656H32.8485C33.0372 23.4655 33.2134 23.3709 33.3176 23.2135ZM27.014 22.3405V18.915H30.5437L31.9985 22.3406H27.014V22.3405ZM13.7865 30.9508C13.7865 31.39 13.4311 31.7454 12.9919 31.7454C12.5528 31.7454 12.1973 31.39 12.1973 30.9508C12.1973 30.5117 12.5528 30.1562 12.9919 30.1562C13.4311 30.1562 13.7865 30.5117 13.7865 30.9508ZM30.5616 30.9508C30.5616 31.39 30.2062 31.7454 29.767 31.7454C29.3279 31.7454 28.9724 31.39 28.9724 30.9508C28.9724 30.5117 29.3278 30.1562 29.767 30.1562C30.2062 30.1562 30.5616 30.5117 30.5616 30.9508ZM2.7083 19.6031C2.39766 19.6031 2.1458 19.3512 2.1458 19.0406C2.1458 18.73 2.39766 18.4781 2.7083 18.4781H8.85108C9.16172 18.4781 9.41358 18.73 9.41358 19.0406C9.41358 19.3512 9.16172 19.6031 8.85108 19.6031H2.7083ZM35.294 22.6368L32.9811 17.1908C32.6685 16.4547 31.9487 15.9974 31.1027 15.9974H25.2214V13.9839C25.2214 13.0308 24.446 12.2554 23.493 12.2554H23.0705C23.2171 11.6431 23.2952 11.0046 23.2952 10.348C23.2952 5.83106 19.6204 2.15625 15.1035 2.15625C10.5865 2.15625 6.91165 5.83113 6.91165 10.3481C6.91165 11.0047 6.98977 11.6432 7.13637 12.2554H3.72902C3.41838 12.2554 3.16652 12.5073 3.16652 12.8179C3.16652 13.1286 3.41838 13.3804 3.72902 13.3804H7.4937C7.78064 14.0979 8.16623 14.7656 8.63367 15.3668H1.125C0.814359 15.3668 0.5625 15.6186 0.5625 15.9293C0.5625 16.2399 0.814359 16.4918 1.125 16.4918H9.69138C11.1357 17.7656 13.0308 18.5398 15.1035 18.5398C18.5497 18.5398 21.5054 16.4006 22.7132 13.3804H23.493C23.8257 13.3804 24.0964 13.6512 24.0964 13.984V16.56V30.3883H15.8312C15.5686 29.0606 14.3955 28.0561 12.9919 28.0561C11.5882 28.0561 10.4151 29.0606 10.1525 30.3883H7.12209C6.7893 30.3883 6.5186 30.1175 6.5186 29.7847V22.1519C6.5186 21.8412 6.26674 21.5894 5.9561 21.5894H1.125C0.814359 21.5894 0.5625 21.8412 0.5625 22.1519C0.5625 22.4625 0.814359 22.7144 1.125 22.7144H5.3936V29.7848C5.3936 30.7379 6.16901 31.5133 7.12209 31.5133H10.1525C10.4151 32.8411 11.5882 33.8455 12.9919 33.8455C14.3955 33.8455 15.5686 32.8411 15.8312 31.5133H26.9276C27.1903 32.8411 28.3634 33.8455 29.767 33.8455C31.1707 33.8455 32.3437 32.841 32.6064 31.5133H34.0005C34.7929 31.5133 35.4375 30.8686 35.4375 30.0763V23.3385C35.4375 23.0905 35.3919 22.8676 35.294 22.6368ZM15.1035 17.4148C11.2068 17.4148 8.03672 14.2447 8.03672 10.3481C8.03672 6.45143 11.2068 3.28132 15.1035 3.28132C19.0001 3.28132 22.1702 6.45143 22.1702 10.3481C22.1702 14.2447 19.0001 17.4148 15.1035 17.4148ZM12.9919 32.7205C12.0161 32.7205 11.2223 31.9266 11.2223 30.9508C11.2223 29.975 12.0162 29.1811 12.9919 29.1811C13.9676 29.1811 14.7615 29.975 14.7615 30.9508C14.7615 31.9266 13.9677 32.7205 12.9919 32.7205ZM29.7671 32.7205C28.7913 32.7205 27.9975 31.9266 27.9975 30.9508C27.9975 29.975 28.7914 29.1811 29.7671 29.1811C30.7428 29.1811 31.5367 29.975 31.5367 30.9508C31.5367 31.9266 30.7428 32.7205 29.7671 32.7205ZM34.0005 30.3883H32.6064C32.3437 29.0606 31.1707 28.0562 29.767 28.0562C28.3634 28.0562 27.1903 29.0606 26.9276 30.3883H25.2214V17.1225H31.1027C31.4895 17.1225 31.8125 17.3172 31.9456 17.6306L34.2584 23.0763C34.2973 23.168 34.3125 23.2415 34.3125 23.3384V25.8134H33.3953C32.8629 25.8134 32.4297 26.2466 32.4297 26.779V28.4722C32.4297 29.0047 32.8629 29.4379 33.3953 29.4379H34.3125V30.0761C34.3125 30.2483 34.1725 30.3883 34.0005 30.3883ZM34.3125 26.9384V28.3129H33.5547V26.9384H34.3125ZM17.4208 11.5709C17.4797 12.0558 17.3488 12.4996 17.0421 12.854C16.7286 13.2165 16.2335 13.4708 15.6659 13.5718V13.8368C15.6659 14.1475 15.414 14.3993 15.1034 14.3993C14.7928 14.3993 14.5409 14.1475 14.5409 13.8368V13.5626C13.6654 13.3821 12.9941 12.7902 12.7889 11.9672C12.7138 11.6658 12.8972 11.3606 13.1986 11.2854C13.4999 11.2102 13.8053 11.3937 13.8805 11.6951C14.0323 12.3044 14.6657 12.5063 15.1619 12.4948C15.5916 12.4845 16.0052 12.3332 16.1911 12.1182C16.2885 12.0056 16.3244 11.8748 16.3039 11.7066C16.2686 11.4159 16.0905 11.0596 15.0173 10.8834C13.3735 10.6134 12.9895 9.75295 12.9567 9.07866C12.9117 8.15243 13.5475 7.37688 14.5408 7.14323V6.85945C14.5408 6.54881 14.7927 6.29695 15.1033 6.29695C15.414 6.29695 15.6658 6.54881 15.6658 6.85945V7.13817C16.3107 7.28217 16.9243 7.6916 17.2451 8.45562C17.3653 8.74207 17.2306 9.07177 16.9442 9.192C16.6577 9.31238 16.328 9.17752 16.2078 8.89113C15.9502 8.27773 15.3202 8.12002 14.8098 8.23568C14.6829 8.26444 14.0519 8.43762 14.0804 9.02409C14.0879 9.17998 14.108 9.59398 15.1995 9.77327C16.5557 9.99574 17.3031 10.6006 17.4208 11.5709ZM15.1035 4.2723C11.7533 4.2723 9.0277 6.9979 9.0277 10.3481C9.0277 13.6983 11.7533 16.4239 15.1035 16.4239C18.4536 16.4239 21.1792 13.6983 21.1792 10.3481C21.1792 6.99783 18.4536 4.2723 15.1035 4.2723ZM15.1035 15.2989C12.3736 15.2989 10.1527 13.078 10.1527 10.3481C10.1527 7.6182 12.3736 5.3973 15.1035 5.3973C17.8333 5.3973 20.0542 7.6182 20.0542 10.3481C20.0542 13.078 17.8333 15.2989 15.1035 15.2989Z" fill="#A0A0A0"/>
      </svg>
    `,
    calc: `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M15.3706 1H4.6294C3.73095 1 3 1.7097 3 2.58203V17.418C3 18.2903 3.73095 19 4.6294 19H15.3706C16.2691 19 17 18.2903 17 17.418V2.58203C17 1.7097 16.269 1 15.3706 1ZM5.21211 4.10605C5.21211 3.87402 5.40764 3.68418 5.64662 3.68418H14.4987C14.7377 3.68418 14.9332 3.87402 14.9332 4.10605V5.71442C14.9333 5.94645 14.7377 6.13629 14.4988 6.13629H5.64662C5.40764 6.13629 5.21211 5.94645 5.21211 5.71442V4.10605ZM10.5079 9.87326H9.49215C9.19216 9.87326 8.94902 9.63715 8.94902 9.34592V8.62933C8.94902 8.33809 9.1922 8.10198 9.49215 8.10198H10.5079C10.8079 8.10198 11.0511 8.33809 11.0511 8.62933V9.34592C11.0511 9.63715 10.8079 9.87326 10.5079 9.87326ZM11.0511 12.0262V12.7428C11.0511 13.034 10.8079 13.2701 10.5079 13.2701H9.49215C9.1922 13.2701 8.94902 13.034 8.94902 12.7428V12.0262C8.94902 11.7349 9.19216 11.4989 9.49215 11.4989H10.5079C10.8079 11.4989 11.0511 11.735 11.0511 12.0262ZM7.16873 16.1397C7.16873 16.4309 6.92555 16.667 6.6256 16.667H5.60983C5.30988 16.667 5.0667 16.4309 5.0667 16.1397V15.4231C5.0667 15.1318 5.30988 14.8957 5.60983 14.8957H6.6256C6.92555 14.8957 7.16873 15.1318 7.16873 15.4231V16.1397ZM7.16873 12.7428C7.16873 13.034 6.92555 13.2701 6.6256 13.2701H5.60983C5.30988 13.2701 5.0667 13.034 5.0667 12.7428V12.0262C5.0667 11.735 5.30988 11.4989 5.60983 11.4989H6.6256C6.92555 11.4989 7.16873 11.735 7.16873 12.0262V12.7428ZM7.16873 9.34592C7.16873 9.63715 6.92555 9.87326 6.6256 9.87326H5.60983C5.30988 9.87326 5.0667 9.63715 5.0667 9.34592V8.62933C5.0667 8.33809 5.30988 8.10198 5.60983 8.10198H6.6256C6.92555 8.10198 7.16873 8.33809 7.16873 8.62933V9.34592ZM14.9333 16.1397C14.9333 16.4309 14.6901 16.667 14.3901 16.667H9.49212C9.19216 16.667 8.94898 16.4309 8.94898 16.1397V15.4231C8.94898 15.1318 9.19213 14.8957 9.49212 14.8957H14.3901C14.6901 14.8957 14.9333 15.1318 14.9333 15.4231V16.1397ZM14.9333 12.7428C14.9333 13.034 14.6901 13.2701 14.3901 13.2701H13.3744C13.0744 13.2701 12.8312 13.034 12.8312 12.7428V12.0262C12.8312 11.735 13.0744 11.4989 13.3744 11.4989H14.3901C14.6901 11.4989 14.9333 11.735 14.9333 12.0262V12.7428ZM14.9333 9.34592C14.9333 9.63715 14.6901 9.87326 14.3901 9.87326H13.3744C13.0744 9.87326 12.8312 9.63715 12.8312 9.34592V8.62933C12.8312 8.33809 13.0744 8.10198 13.3744 8.10198H14.3901C14.6901 8.10198 14.9333 8.33809 14.9333 8.62933V9.34592Z" fill="#003068"/>
      </svg>
    `,
    timer: `
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M3.66407 17.9993C3.6616 20.3966 4.3578 22.7426 5.66752 24.7504C6.97725 26.7582 8.84372 28.3408 11.0387 29.3046C13.2336 30.2685 15.6618 30.5717 18.0264 30.1774C20.391 29.783 22.5894 28.708 24.3527 27.084C26.116 25.46 27.3678 23.3573 27.955 21.0331C28.5422 18.7089 28.4393 16.264 27.659 13.9973C26.8786 11.7306 25.4546 9.74053 23.5611 8.27036C21.6676 6.8002 19.3867 5.91372 16.9974 5.71935V3.66602H18.6641C18.9293 3.66602 19.1836 3.56066 19.3712 3.37312C19.5587 3.18559 19.6641 2.93123 19.6641 2.66602C19.6641 2.4008 19.5587 2.14645 19.3712 1.95891C19.1836 1.77137 18.9293 1.66602 18.6641 1.66602H13.3307C13.0655 1.66602 12.8112 1.77137 12.6236 1.95891C12.4361 2.14645 12.3307 2.4008 12.3307 2.66602C12.3307 2.93123 12.4361 3.18559 12.6236 3.37312C12.8112 3.56066 13.0655 3.66602 13.3307 3.66602H14.9974V5.71935C11.9119 5.97035 9.03361 7.37252 6.93407 9.64744C4.83452 11.9224 3.66726 14.9036 3.66407 17.9993ZM22.2241 21.7727C22.1434 21.941 22.0166 22.0829 21.8585 22.182C21.7004 22.2811 21.5174 22.3334 21.3307 22.3327C21.1779 22.3308 21.0275 22.2943 20.8907 22.226L15.5574 19.5593C15.3926 19.4755 15.2543 19.3477 15.1578 19.19C15.0613 19.0323 15.0104 18.8509 15.0107 18.666V10.666C15.0107 10.4008 15.1161 10.1464 15.3036 9.95891C15.4912 9.77137 15.7455 9.66602 16.0107 9.66602C16.276 9.66602 16.5303 9.77137 16.7178 9.95891C16.9054 10.1464 17.0107 10.4008 17.0107 10.666V18.0527L21.7841 20.4393C21.9024 20.496 22.008 20.5759 22.0946 20.6743C22.1812 20.7728 22.247 20.8877 22.2881 21.0123C22.3292 21.1368 22.3447 21.2683 22.3337 21.399C22.3227 21.5297 22.2854 21.6568 22.2241 21.7727Z" fill="white"/>
        <path d="M26.0378 5.9602C25.9459 5.86586 25.836 5.79088 25.7146 5.73968C25.5933 5.68849 25.4629 5.66211 25.3312 5.66211C25.1994 5.66211 25.069 5.68849 24.9477 5.73968C24.8263 5.79088 24.7164 5.86586 24.6245 5.9602C24.4372 6.1477 24.332 6.40187 24.332 6.66687C24.332 6.93187 24.4372 7.18604 24.6245 7.37354L27.2912 10.0402C27.4787 10.2275 27.7328 10.3327 27.9978 10.3327C28.2628 10.3327 28.517 10.2275 28.7045 10.0402C28.8918 9.8527 28.9969 9.59854 28.9969 9.33354C28.9969 9.06854 28.8918 8.81437 28.7045 8.62687L26.0378 5.9602Z" fill="white"/>
      </svg>
    `,
    benefit1: `
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M31.4853 17.1649C31.5347 18.3464 31.1135 19.4992 30.3141 20.3704C29.5146 21.2417 28.4022 21.7603 27.2209 21.8124C27.1518 21.8156 27.0828 21.8172 27.014 21.8172C26.7001 21.817 26.3872 21.7831 26.0806 21.7159C25.1708 23.1206 23.9779 24.3199 22.5781 25.2372C21.1783 26.1544 19.6025 26.7694 17.9514 27.0428C17.7561 27.6165 17.3665 28.104 16.8499 28.4209C16.3334 28.7378 15.7223 28.8643 15.1224 28.7785C14.5225 28.6927 13.9714 28.3999 13.5644 27.9509C13.1574 27.5019 12.9201 26.9247 12.8934 26.3193C12.8668 25.7138 13.0526 25.1181 13.4186 24.6351C13.7846 24.1521 14.3079 23.8121 14.898 23.674C15.4881 23.5359 16.1079 23.6082 16.6503 23.8786C17.1926 24.149 17.6235 24.6004 17.8684 25.1547C20.1929 24.7248 22.2928 23.4929 23.8022 21.6736C25.3116 19.8543 26.1347 17.5631 26.1281 15.1992C26.1281 9.61448 21.5846 5.07105 16 5.07105C10.4153 5.07105 5.87183 9.61448 5.87183 15.1992C5.87152 16.926 6.31286 18.6243 7.15389 20.1325C7.18239 20.1823 7.20379 20.2358 7.21745 20.2915C7.29869 20.5173 7.29 20.7657 7.1932 20.9853C7.09639 21.2048 6.91888 21.3788 6.69739 21.4711C6.15505 21.6994 5.57255 21.8169 4.98414 21.8168C4.91489 21.8168 4.84549 21.8152 4.77595 21.812C3.59513 21.7592 2.48343 21.2403 1.68461 20.3691C0.885785 19.4979 0.465044 18.3454 0.514639 17.1645C0.534577 16.6935 0.523452 16.2734 0.512577 15.867C0.502452 15.4845 0.49189 15.0889 0.509265 14.676C0.561119 13.523 1.05714 12.4347 1.89342 11.6391C2.72971 10.8435 3.8414 10.4024 4.99564 10.4081C6.84914 6.16736 11.0837 3.19604 16 3.19604C20.9162 3.19604 25.1508 6.16736 27.0043 10.4082C28.1587 10.4016 29.2707 10.8423 30.1072 11.6379C30.9436 12.4335 31.4394 13.5221 31.4906 14.6754C31.508 15.0888 31.4975 15.4844 31.4873 15.8669C31.4765 16.2733 31.4653 16.6937 31.4853 17.1649ZM23.8628 15.1992C23.8623 16.4038 23.5852 17.5922 23.0528 18.6727C22.5204 19.7533 21.7469 20.6971 20.7921 21.4314C19.8372 22.1658 18.7264 22.671 17.5454 22.9081C16.3644 23.1453 15.1447 23.108 13.9803 22.7992L10.7978 24.6371C10.6372 24.7298 10.4527 24.7729 10.2677 24.7608C10.0826 24.7486 9.90534 24.6819 9.75822 24.569C9.61111 24.4562 9.50077 24.3022 9.44117 24.1266C9.38157 23.951 9.37538 23.7617 9.42339 23.5825L10.2368 20.5483C8.88977 19.0923 8.14029 17.1826 8.13745 15.1992C8.13745 10.8624 11.6644 7.33455 16 7.33455C20.3355 7.33455 23.8628 10.8624 23.8628 15.1992ZM13.814 15.1992C13.814 14.9505 13.7152 14.7121 13.5394 14.5363C13.3636 14.3604 13.1252 14.2617 12.8765 14.2617H12.875C12.6896 14.262 12.5085 14.3173 12.3546 14.4205C12.2006 14.5237 12.0808 14.6703 12.0101 14.8416C11.9394 15.013 11.9211 15.2014 11.9574 15.3831C11.9938 15.5649 12.0832 15.7318 12.2144 15.8627C12.3456 15.9936 12.5126 16.0828 12.6944 16.1188C12.8763 16.1548 13.0647 16.1361 13.2359 16.0651C13.4071 15.9941 13.5534 15.874 13.6563 15.7198C13.7593 15.5657 13.8142 15.3845 13.8142 15.1992H13.814ZM16.9376 15.1992C16.9376 15.1685 16.9359 15.1378 16.9326 15.1073C16.9297 15.0767 16.9251 15.0462 16.919 15.016C16.9134 14.986 16.9058 14.9564 16.8964 14.9273C16.8877 14.8979 16.8771 14.8692 16.8658 14.8404C16.8546 14.8117 16.8408 14.7848 16.8265 14.7579C16.8122 14.7309 16.7965 14.7046 16.7796 14.6792C16.7625 14.6535 16.7441 14.6286 16.7245 14.6048C16.7053 14.5809 16.6846 14.5582 16.6627 14.5367C16.6415 14.5148 16.6183 14.4942 16.5946 14.4742C16.5708 14.4554 16.5458 14.4367 16.5201 14.4198C16.4947 14.4028 16.4685 14.3872 16.4415 14.3729C16.4145 14.3585 16.3865 14.3454 16.3583 14.3335C16.3301 14.3218 16.3013 14.3115 16.2721 14.3029C16.2136 14.2841 16.1532 14.272 16.0921 14.2667C16.0003 14.2578 15.9076 14.2622 15.8171 14.2798C15.7869 14.286 15.7571 14.2937 15.7278 14.3029C15.6985 14.3115 15.6697 14.3217 15.6415 14.3335C15.6134 14.3454 15.5853 14.3585 15.5584 14.3729C15.5315 14.3873 15.5053 14.4029 15.4796 14.4198C15.4539 14.4367 15.429 14.4554 15.4059 14.4742C15.3815 14.4942 15.359 14.5148 15.3371 14.5367C15.3152 14.5582 15.2945 14.5809 15.2752 14.6048C15.2558 14.6286 15.2377 14.6535 15.2209 14.6792C15.2037 14.7046 15.1879 14.7309 15.1734 14.7579C15.159 14.7847 15.146 14.8122 15.1346 14.8404C15.1227 14.8688 15.1123 14.8978 15.1033 14.9273C15.0946 14.956 15.0871 14.986 15.0809 15.016C15.0747 15.0462 15.0701 15.0767 15.0671 15.1073C15.064 15.1379 15.0627 15.1685 15.0627 15.1992C15.0627 15.2298 15.064 15.261 15.0671 15.2917C15.0702 15.3221 15.0748 15.3523 15.0809 15.3823C15.0871 15.4123 15.0946 15.4423 15.1033 15.4717C15.1123 15.5009 15.1227 15.5297 15.1346 15.5579C15.146 15.5863 15.159 15.6141 15.1734 15.641C15.1877 15.6679 15.204 15.6942 15.2209 15.7198C15.2377 15.7453 15.2559 15.7699 15.2752 15.7935C15.2947 15.8175 15.3154 15.8404 15.3371 15.8623C15.359 15.8835 15.3815 15.9048 15.4059 15.9242C15.4294 15.9437 15.454 15.9618 15.4796 15.9785C15.5053 15.9954 15.5315 16.0117 15.5584 16.026C15.6127 16.0543 15.6693 16.0778 15.7278 16.096C15.7571 16.1048 15.7871 16.1123 15.8171 16.1185C15.8773 16.1309 15.9387 16.1369 16.0002 16.1367C16.2485 16.136 16.4866 16.0374 16.6627 15.8623C16.7059 15.8184 16.745 15.7707 16.7796 15.7198C16.7965 15.6942 16.8121 15.6679 16.8265 15.641C16.8408 15.6142 16.854 15.586 16.8658 15.5579C16.8777 15.5298 16.8877 15.5004 16.8964 15.4717C16.9057 15.4424 16.9133 15.4125 16.919 15.3823C16.9251 15.3523 16.9296 15.3221 16.9326 15.2917C16.9358 15.2609 16.9374 15.23 16.9375 15.199L16.9376 15.1992ZM20.0626 15.1992C20.0626 14.9505 19.9639 14.7121 19.7881 14.5363C19.6122 14.3604 19.3738 14.2617 19.1251 14.2617H19.1233C18.938 14.262 18.7569 14.3173 18.603 14.4205C18.449 14.5238 18.3292 14.6703 18.2585 14.8417C18.1878 15.013 18.1695 15.2014 18.2059 15.3832C18.2423 15.5649 18.3317 15.7318 18.4629 15.8627C18.5941 15.9937 18.7611 16.0828 18.9429 16.1188C19.1247 16.1548 19.3131 16.1361 19.4843 16.0651C19.6555 15.9941 19.8018 15.874 19.9048 15.7198C20.0077 15.5657 20.0626 15.3845 20.0626 15.1992Z" fill="#003068"/>
      </svg>
    `,
    benefit2: `
      <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
        <g clip-path="url(#clip0_245_6297)">
          <path d="M32.2417 15.5425L29.7144 9.82478C29.6259 9.62201 29.4805 9.44926 29.2958 9.32747C29.1111 9.20569 28.895 9.1401 28.6738 9.13865H22.5558L22.9218 5.83379C22.9398 5.67336 22.9236 5.51093 22.8743 5.3572C22.825 5.20346 22.7438 5.0619 22.6359 4.94182C22.5289 4.82336 22.3984 4.72859 22.2527 4.66359C22.1069 4.5986 21.9492 4.56483 21.7896 4.56445H6.04295C5.73966 4.56445 5.4488 4.68493 5.23434 4.89939C5.01988 5.11385 4.8994 5.40472 4.8994 5.708C4.8994 6.01129 5.01988 6.30216 5.23434 6.51662C5.4488 6.73107 5.73966 6.85155 6.04295 6.85155H11.7607C12.064 6.85155 12.3549 6.97203 12.5693 7.18649C12.7838 7.40095 12.9043 7.69182 12.9043 7.9951C12.9043 8.29839 12.7838 8.58926 12.5693 8.80372C12.3549 9.01817 12.064 9.13865 11.7607 9.13865H3.75585C3.45256 9.13865 3.1617 9.25914 2.94724 9.47359C2.73278 9.68805 2.6123 9.97892 2.6123 10.2822C2.6123 10.5855 2.73278 10.8764 2.94724 11.0908C3.1617 11.3053 3.45256 11.4258 3.75585 11.4258H15.1914C15.4946 11.4258 15.7855 11.5462 16 11.7607C16.2144 11.9752 16.3349 12.266 16.3349 12.5693C16.3349 12.8726 16.2144 13.1635 16 13.3779C15.7855 13.5924 15.4946 13.7129 15.1914 13.7129H7.1865C6.88321 13.7129 6.59235 13.8333 6.37789 14.0478C6.16343 14.2623 6.04295 14.5531 6.04295 14.8564C6.04295 15.1597 6.16343 15.4506 6.37789 15.665C6.59235 15.8795 6.88321 16 7.1865 16H11.7607C12.064 16 12.3549 16.1204 12.5693 16.3349C12.7838 16.5494 12.9043 16.8402 12.9043 17.1435C12.9043 17.4468 12.7838 17.7377 12.5693 17.9521C12.3549 18.1666 12.064 18.2871 11.7607 18.2871H2.6123C2.30901 18.2871 2.01815 18.4075 1.80369 18.622C1.58923 18.8365 1.46875 19.1273 1.46875 19.4306C1.46875 19.7339 1.58923 20.0248 1.80369 20.2392C2.01815 20.4537 2.30901 20.5742 2.6123 20.5742H4.8994C5.20269 20.5742 5.49356 20.6946 5.70801 20.9091C5.92247 21.1236 6.04295 21.4144 6.04295 21.7177C6.04295 22.021 5.92247 22.3119 5.70801 22.5263C5.49356 22.7408 5.20269 22.8613 4.8994 22.8613H3.75585C3.45256 22.8613 3.1617 22.9817 2.94724 23.1962C2.73278 23.4107 2.6123 23.7015 2.6123 24.0048C2.6123 24.3081 2.73278 24.599 2.94724 24.8134C3.1617 25.0279 3.45256 25.1484 3.75585 25.1484H7.01497C7.13845 25.6306 7.37347 26.0772 7.7011 26.452C7.97873 26.7624 8.31893 27.0105 8.69933 27.18C9.07973 27.3495 9.4917 27.4366 9.90815 27.4355C10.6129 27.4153 11.2959 27.1875 11.8717 26.7806C12.4474 26.3738 12.8902 25.8059 13.1444 25.1484H21.8811C22.0046 25.6306 22.2396 26.0772 22.5673 26.452C22.8449 26.7624 23.1851 27.0105 23.5655 27.18C23.9459 27.3495 24.3579 27.4366 24.7743 27.4355C25.479 27.4153 26.1621 27.1875 26.7378 26.7806C27.3136 26.3738 27.7563 25.8059 28.0105 25.1484H30.2976C30.5804 25.1501 30.8537 25.047 31.0648 24.8591C31.276 24.6711 31.4101 24.4116 31.4412 24.1306L32.3217 16.1257C32.3531 15.9277 32.3252 15.7248 32.2417 15.5425ZM9.90815 25.1484C9.81332 25.1525 9.7188 25.135 9.63166 25.0974C9.54452 25.0598 9.46703 25.0029 9.40499 24.9311C9.31522 24.82 9.24955 24.6915 9.21214 24.5537C9.17473 24.4159 9.16642 24.2718 9.18771 24.1306C9.21692 23.8095 9.35554 23.5082 9.58037 23.2771C9.8052 23.0461 10.1026 22.8993 10.4227 22.8613C10.5176 22.8572 10.6121 22.8746 10.6992 22.9122C10.7864 22.9498 10.8639 23.0067 10.9259 23.0785C11.0157 23.1896 11.0814 23.3181 11.1188 23.4559C11.1562 23.5937 11.1645 23.7378 11.1432 23.879C11.114 24.2001 10.9754 24.5014 10.7505 24.7325C10.5257 24.9635 10.2283 25.1104 9.90815 25.1484ZM24.7743 25.1484C24.6795 25.1525 24.5849 25.135 24.4978 25.0974C24.4107 25.0598 24.3332 25.0029 24.2711 24.9311C24.1814 24.82 24.1157 24.6915 24.0783 24.5537C24.0409 24.4159 24.0326 24.2718 24.0539 24.1306C24.0831 23.8095 24.2217 23.5082 24.4465 23.2771C24.6714 23.0461 24.9687 22.8993 25.2889 22.8613C25.3837 22.8572 25.4783 22.8746 25.5654 22.9122C25.6525 22.9498 25.73 23.0067 25.7921 23.0785C25.8818 23.1896 25.9475 23.3181 25.9849 23.4559C26.0223 23.5937 26.0306 23.7378 26.0093 23.879C25.9801 24.2001 25.8415 24.5014 25.6167 24.7325C25.3918 24.9635 25.0945 25.1104 24.7743 25.1484ZM29.9203 17.1435H24.8658C24.7062 17.1431 24.5485 17.1094 24.4027 17.0444C24.257 16.9794 24.1265 16.8846 24.0196 16.7661C23.9116 16.6461 23.8304 16.5045 23.7811 16.3508C23.7318 16.197 23.7157 16.0346 23.7337 15.8742L24.111 12.4435C24.1447 12.1646 24.28 11.9078 24.4909 11.7222C24.7018 11.5366 24.9736 11.4352 25.2546 11.4372H27.9191L30.0575 16.1829L29.9203 17.1435Z" fill="#003068"/>
          <path d="M2.61132 16C2.91461 16 3.20547 15.8795 3.41993 15.6651C3.63439 15.4506 3.75487 15.1597 3.75487 14.8564C3.75487 14.5532 3.63439 14.2623 3.41993 14.0478C3.20547 13.8334 2.91461 13.7129 2.61132 13.7129H1.46777C1.16448 13.7129 0.873614 13.8334 0.659157 14.0478C0.4447 14.2623 0.324219 14.5532 0.324219 14.8564C0.324219 15.1597 0.4447 15.4506 0.659157 15.6651C0.873614 15.8795 1.16448 16 1.46777 16H2.61132Z" fill="#003068"/>
        </g>
        <defs>
          <clipPath id="clip0_245_6297">
            <rect width="32" height="32" fill="white" transform="translate(0.332031)"/>
          </clipPath>
        </defs>
      </svg>
    `,
    benefit3: `
      <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0696 25.3448H6.46107C5.71997 25.3448 5.00959 25.0506 4.48635 24.5265C3.96218 24.0032 3.66797 23.2928 3.66797 22.5517C3.66797 18.6563 3.66797 9.68855 3.66797 5.7931C3.66797 5.052 3.96218 4.34162 4.48635 3.81838C5.00959 3.2942 5.71997 3 6.46107 3H11.1162V8.21565C11.1162 8.81616 11.4058 9.38038 11.8946 9.73045C12.3834 10.0796 13.0109 10.1718 13.5798 9.9781L14.7817 9.5675L16.1261 10.0051C16.6931 10.1904 17.3141 10.0917 17.7964 9.74162C18.2787 9.39155 18.5645 8.83106 18.5645 8.23519V3H23.2197C23.9608 3 24.6712 3.2942 25.1944 3.81838C25.7186 4.34162 26.0128 5.052 26.0128 5.7931V13.0459C24.8639 12.572 23.607 12.3103 22.2887 12.3103C16.8933 12.3103 12.5128 16.6909 12.5128 22.0862C12.5128 23.2286 12.7092 24.3253 13.0696 25.3448ZM12.9783 3H16.7025V8.23519L15.0629 7.7008C14.872 7.63842 14.6653 7.64026 14.4745 7.70543L12.9783 8.21565V3Z" fill="#003068"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.2888 14.1719C17.9213 14.1719 14.375 17.7182 14.375 22.0857C14.375 26.4532 17.9213 29.9995 22.2888 29.9995C26.6563 29.9995 30.2026 26.4532 30.2026 22.0857C30.2026 17.7182 26.6563 14.1719 22.2888 14.1719ZM20.8122 21.6202H23.2198C24.3799 21.6202 25.0214 22.2756 25.0186 23.013C25.0167 23.7532 24.3706 24.4133 23.2198 24.4133H21.3578C20.8438 24.4133 20.4267 24.8304 20.4267 25.3443C20.4267 25.8582 20.8438 26.2753 21.3578 26.2753H23.2198C25.6936 26.2753 26.8751 24.6097 26.8807 23.0204C26.8872 21.4293 25.7187 19.7581 23.2198 19.7581H20.8122L21.085 19.4853C21.4481 19.1222 21.4481 18.5319 21.085 18.1688C20.7219 17.8057 20.1316 17.8057 19.7685 18.1688L17.9064 20.0309C17.5424 20.394 17.5424 20.9843 17.9064 21.3474L19.7685 23.2094C20.1316 23.5725 20.7219 23.5725 21.085 23.2094C21.4481 22.8463 21.4481 22.256 21.085 21.8929L20.8122 21.6202Z" fill="#003068"/>
      </svg>
    `
  }

  return svgObj[name]
}
