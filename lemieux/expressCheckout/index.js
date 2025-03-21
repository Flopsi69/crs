;(function () {
  console.debug('*** Experiment started ***')

  // Config for Experiment
  const config = {
    dir: 'http://127.0.0.1:5500/lemieux/expressCheckout',
    // dir: 'https://flopsi69.github.io/crs/lemieux/expressCheckout',
    hj: true,
    debug: true
  }

  // const orig = console.log
  // console.log = function (...args) {
  //   orig.apply(console, ['Debug:', ...args])
  // }

  // Styles for Experiment
  const styles = /* css */ `
    .page-header--checkout {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px 35px 16px 30px;
    }
    .lav-logo {
      width: 110px;
    }
    .page-header--checkout .pos-absolute {
      position: static;
    }
    .page-header--checkout .pos-absolute .m-l-5 {
      flex-flow: row-reverse;
      margin: 0;
      gap: 16px;
    }
    .page-header--checkout .p1.m-l {
      margin-left: 0;
    }
    .page-header__logo {
      display: none;
    }

    #checkout-step-account .social-login > p {
      display: none;
    }
    #checkout-step-account social-login {
      background: #F6F5F5;
      margin-left: -1.5rem;
      margin-right: -1.5rem;
      margin-top: 24px;
      margin-bottom: -0.5rem;
      display: block;
    }
    #checkout-step-account .social-login {
      padding: 32px 24px 0;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
    }
    #checkout-step-account .social-login > .button {
      margin-top: 0;
      min-width: 0;
    }
    #checkout-step-account .social-login > .button i ~ span {
      display: none;
    }
    #checkout-step-account .social-login > .button i {
      margin-right: -5px !important;
    }
    #checkout-step-account .social-login result {
      grid-column: 1 / -1;
    }
    #checkout-step-account .social-login result.hidden {
      display: none;
    }
    checkout-account social-login > div {
      grid-template-rows: auto;
    }
    checkout-account social-login {
      width: auto!important;
      padding-bottom: 0!important;
    }

    .lav-payment:not(.active) {
      display: none;
    }
    .lav-payment__title {
      color: #212121;
      text-align: center;
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: 1px;
    }
    .lav-payment__methods {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
      margin-top: 16px;
    }
    .lav-payment__paypal {
      position: relative;
      overflow: hidden;
      border-radius: 4px;
    }
    .lav-payment__paypal #paypal-express-button {
      position: relative;
      z-index: 1;
    }
    .lav-payment__paypal:before {
      content: '';
      position: absolute;
      z-index: 3;
      left: 0;
      right: 0;
      pointer-events: none;
      top: 0;
      bottom: 0;
      background: #FFBD5D url('${config.dir}/img/paypal.png') no-repeat center;
      background-size: 91px 24px;
      transition: .3s;
    }
    .lav-payment__paypal:hover:before {
      filter: brightness(0.95);
    }
    .lav-payment__methods [id*="zoid-paypal-buttons"] {
      height: 100%;
    }
    .lav-payment__methods .lav-payment__paypal iframe {
      transform: scale(2);
    }
    .lav-payment__methods .lav-payment__stripe iframe {
      height: 48px!important;
    }
    .lav-payment__methods [class*='m-t'] {
      margin-top: 0;
    }
    .lav-payment__divider {
      position: relative;
      margin-top: 25px;
      color: #212121;
      font-size: 15px;
      text-align: center;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: 1px;
      margin-bottom: 12px;
    }
    .lav-payment__divider span {
      position: relative;
      padding: 2px 6px;
      background: #fff;
    }
    .lav-payment__divider:before {
      content: '';
      position: absolute;
      left: -25px;
      right: -25px;
      top: 50%;
      transform: translateY(-50%);
      height: 1px;
      background: #D9D9D9;
    }
    [zippyname='basketTab'] + div {
      margin-top: 18px!important;
    }
    @media(max-width: 768px) {
      #checkout-step-account .social-login {
        padding-top: 30px;
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

    const originalPushState = history.pushState

    history.pushState = function (...args) {
      originalPushState.apply(this, args)
      handlePageChange('pushState')
    }

    if (location.href.includes('/checkout')) {
      initFunctions()
    }
  }

  function initFunctions() {
    waitFor('.page-header--checkout', handleHeader)
    handleSocials()
    // handleSummary()
    // handleCopy()
    // window.addEventListener('click', (event) => {
    //   if (event.target.closest('button') || event.target.closest('checkout-step action')) {
    //     handleCopy();
    //     setTimeout(handleCopy, 2000);
    //   }
    // })
    waitFor('.hiddeExpressPayments .m-t', handlePayment)
  }

  function handlePayment() {
    const lavPaymentEl = document.createElement('div')
    lavPaymentEl.classList.add('lav-payment')
    lavPaymentEl.innerHTML = `
      <div class='lav-payment__title'>Express checkout</div>
      <div class='lav-payment__methods'>
      </div>
      <div class='lav-payment__divider'>
        <span>Or continue with</span>
      </div>
    `

    _$('.lav-payment__methods', lavPaymentEl).insertAdjacentElement(
      'beforeend',
      _$('.hiddeExpressPayments .m-t')
    )

    lavPaymentEl.classList.add('active')

    _$('checkout-account').insertAdjacentElement('beforebegin', lavPaymentEl)
  }

  function handleCopy() {
    // _$(
    //   '[zippyname="basketTab"] button[type="button"] span:first-child'
    // ).textContent = 'Hide bag summary'
    // _$(
    //   '[zippyname="basketTab"] button[type="button"] span + span'
    // ).textContent = 'Show bag summary'
    // _$('checkout-account ng-form h1 span')?.textContent = 'Contact'
    // _$('checkout-account ng-form h3 > span')?.textContent = 'Contact'
    // _$('checkout-step h4 span')?.textContent = 'Shipping'
  }

  function handleSummary() {
    // if (_$('checkout-form h4 + div > span price')) {
    //   _$('checkout-form h4').insertAdjacentElement('beforeend', _$('checkout-form h4 + div > span price'));
    // }
  }

  function handlePageChange() {
    console.log('Page changed:', window.location.href)
    if (location.href.includes('/checkout')) {
      initFunctions()
    }
  }

  function handleHeader() {
    const el = _$('.page-header--checkout')

    if (!el || _$('.lav-logo')) return

    el.insertAdjacentHTML(
      'afterbegin',
      `<img class='lav-logo' src='https://www.lemieux.com/static/cms/media/logo.svg' alt='Lemieux logo' />`
    )
  }

  // history.replaceState = function (...args) {
  //   originalReplaceState.apply(this, args)
  //   onPageChange('replaceState')
  // }

  // window.addEventListener('popstate', onPageChange('popstate'))

  function handleSocials() {
    const el = _$('.social-login')
    if (!el) return
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

  // *** Exp BG process *** //

  //Clarity
  if (!config.debug && config.hj) {
    waitFor(
      () => typeof hj == 'function',
      () => {
        hj('event', 'exp_express_checkout')
      }
    )
  }

  // Svg objects
  function getSvg(name) {
    const svgObj = {}

    return svgObj[name]
  }
})()
;(function () {
  'use strict'
  const u = (c, n, t, r = '') => {
      ;(window.dataLayer = window.dataLayer || []),
        window.dataLayer.push({
          event: 'event-to-ga4',
          event_name: c,
          event_desc: n,
          event_type: t,
          event_loc: r
        }),
        console.log(`Event: ${c} | ${n} | ${t} | ${r}`)
    },
    j = ({ name: c, dev: n }) => {
      console.log(
        `%c EXP: ${c} (DEV: ${n})`,
        'background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;'
      )
    },
    e = (c) => document.querySelector(c)
  function o(c) {
    return new Promise((n) => {
      if (document.querySelector(c)) return n(document.querySelector(c))
      const t = new MutationObserver(() => {
        document.querySelector(c) &&
          (n(document.querySelector(c)), t.disconnect())
      })
      t.observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        characterData: !0
      })
    })
  }
  const P = `[zippyname='basketTab'] coupon-form,
[zippyname='basketTab'] giftcards-form {
  background: #fff;
  padding: 0 !important;
  margin: 0 !important;
}

[zippyname='basketTab'] coupon-form {
  margin-bottom: 12px;
}
[zippyname='basketTab'] giftcards-form + coupon-form {
  margin-bottom: 0 !important;
  margin-top: 12px !important;
}
[zippyname='basketTab'] coupon-form {
  margin-bottom: 12px !important;
  padding-bottom: 0 !important;
}
[zippyname='basketTab'] coupon-form .ng-star-inserted:nth-child(1) {
  margin: 0 !important;
}
@media (max-width: 1100px) {
  [zippyname='basketTab'] coupon-form {
    margin-bottom: 8px !important;
  }
}
[zippyname='basketTab'] #mmWrapper {
  padding: 0 !important;
  margin-bottom: 1rem;
  visibility: initial !important;
}

[zippyname='basketTab'] #mmWrapper a {
  text-decoration: underline;
}
[zippyname='basketTab'] + div {
  margin-top: 8px !important;
}
@media (max-width: 1100px) {
  [zippyname='basketTab'] + div {
    margin-top: 15px !important;
  }
}
checkout-form checkout-minibasket {
  width: 100%;
}

checkout-form checkout-minibasket > div {
  padding-left: 24px !important;
  padding-right: 24px !important;
}
checkout-form [zippyname='basketTab'] > div > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

checkout-form h4 {
  display: flex;
  align-items: center;
  gap: 12px;
}
checkout-form h4 > span {
  display: none;
}
checkout-form h4 + div {
  margin: 0 !important;
}
checkout-form h4 + div > span {
  display: none;
}
checkout-form h4 + div > button {
  margin-right: 0 !important;
  white-space: nowrap;
}

checkout-form h4 + div > button > span {
  text-decoration: underline;
}
checkout-form h4 + div > span {
  display: none;
}
checkout-form coupon-form form > .m-t-2-s[zippyname='gift'],
checkout-form coupon-form form > [zippyname='tab'],
checkout-form giftcards-form form > .m-t-2-s[zippyname='gift'],
checkout-form giftcards-form form > [zippyname='tab'] {
  /* border: 1px solid #cecdcd; */
  background: #fafafa;
  margin: 0 !important;
}
checkout-form coupon-form form [zippyclass='is-open'],
checkout-form giftcards-form form [zippyclass='is-open'] {
  position: relative;
  padding: 8px !important;
}
@media (max-width: 1100px) {
  checkout-form coupon-form form [zippyclass='is-open'],
  checkout-form giftcards-form form [zippyclass='is-open'] {
    padding: 8px !important;
  }
}
checkout-form coupon-form form [zippyclass='is-open']::before,
checkout-form giftcards-form form [zippyclass='is-open']::before {
  display: none;
  content: '';
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  background: url('https://conversionratestore.github.io/projects/lemieux/img/gift_card_icon.svg') no-repeat;
  background-size: contain;
}
checkout-form coupon-form form [zippyclass='is-open'] > span,
checkout-form giftcards-form form [zippyclass='is-open'] > span {
  color: #212121;
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 1px;
}
checkout-form :is(coupon-form, giftcards-form) form [zippyclass='is-open'] + div > div > div {
  position: relative;
  display: flex;
  gap: 16px;
  padding: 8px !important;
}

checkout-form
  :is(coupon-form, giftcards-form)
  form
  [zippyclass='is-open']
  + div
  > div
  > div:has(result p:not(:empty)):not(:has(validation:not(:empty))) {
  padding-bottom: 30px !important;
}
@media (max-width: 1100px) {
  checkout-form
    :is(coupon-form, giftcards-form)
    form
    [zippyclass='is-open']
    + div
    > div
    > div:has(result p:not(:empty)):not(:has(validation:not(:empty))) {
    padding-bottom: 8px !important;
  }
}

checkout-form
  :is(coupon-form, giftcards-form)
  form
  [zippyclass='is-open']
  + div
  > div
  > div:has(validation:not(:empty))
  result {
  display: none !important;
}

@media (max-width: 1100px) {
  checkout-form coupon-form form [zippyclass='is-open'] + div > div > div,
  checkout-form giftcards-form form [zippyclass='is-open'] + div > div > div {
    flex-direction: column;
  }
}
checkout-form :is(coupon-form, giftcards-form) form [zippyclass='is-open'] + div > div > div input-wrap {
  flex: 1;
  max-width: 232px;
}

@media (max-width: 1100px) {
  checkout-form :is(coupon-form, giftcards-form) form [zippyclass='is-open'] + div > div > div input-wrap {
    max-width: 100%;
  }
}

checkout-form :is(giftcards-form, coupon-form) form input-wrap + div > div {
  display: flex !important;
  gap: 16px;
}
checkout-form :is(giftcards-form, coupon-form) form div :has(> :is(button, .button, .button-1)) {
  padding: 0 !important;
  width: fit-content;
}

checkout-form coupon-form form :is(button, .button, .button-1) {
  width: 110px !important;
}

checkout-form giftcards-form form div :has(> .button) {
  width: 82px !important;
}

checkout-form giftcards-form form div :has(> .button-1) {
  width: 137px !important;
}

@media (max-width: 1100px) {
  checkout-form :is(giftcards-form, coupon-form) form div :has(> :is(button, .button, .button-1)) {
    padding: 0 !important;
    width: 50% !important;
  }

  checkout-form :is(coupon-form, giftcards-form) form :is(button, .button, .button-1) {
    width: 100% !important;
  }
}
checkout-form coupon-form form [zippyclass='is-open'] + div > div > div input-wrap input,
checkout-form giftcards-form form [zippyclass='is-open'] + div > div > div input-wrap input {
  padding-left: 16px;
  padding-right: 16px;
}
checkout-form coupon-form form [zippyclass='is-open'] + div > div > div input-wrap label,
checkout-form giftcards-form form [zippyclass='is-open'] + div > div > div input-wrap label {
  color: #212121;
  font-size: 18px !important;
  font-weight: 400;
  line-height: 48px;
  letter-spacing: 1px;
  left: 16px;
}
checkout-form coupon-form form [zippyclass='is-open'] + div > div > div input-wrap + div,
checkout-form giftcards-form form [zippyclass='is-open'] + div > div > div input-wrap + div {
  position: static !important;
  margin-top: 0 !important;
}
checkout-form coupon-form form [zippyclass='is-open'] + div > div > div input-wrap + div .button-1,
checkout-form giftcards-form form [zippyclass='is-open'] + div > div > div input-wrap + div .button-1 {
  padding: 0 !important;
}
checkout-form coupon-form form [zippyclass='is-open'] + div > div > div input-wrap + div > div,
checkout-form giftcards-form form [zippyclass='is-open'] + div > div > div input-wrap + div > div {
  position: relative;
}
checkout-form coupon-form form [zippyclass='is-open'] + div > div > div input-wrap + div > div:has(result),
checkout-form giftcards-form form [zippyclass='is-open'] + div > div > div input-wrap + div > result,
checkout-form coupon-form form [zippyclass='is-open'] + div > div > div input-wrap + div > div:has(p.ng-star-inserted){
  margin-top: 0 !important;
  position: absolute !important;
  top: 62px;
  left: 8px;
  z-index: 7;
}

checkout-form coupon-form form [zippyclass='is-open'] + div > div > div input-wrap + div > div:has(p.ng-star-inserted) {
  display: none !important;
}
@media (max-width: 1100px) {
  checkout-form coupon-form form [zippyclass='is-open'] + div > div > div input-wrap + div > div:has(result),
  checkout-form giftcards-form form [zippyclass='is-open'] + div > div > div input-wrap + div > result {
    position: static !important;
  }
}
checkout-form :is(giftcards-form, coupon-form) form [zippyclass='is-open'] + div > div > div input-wrap + div result p {
  font-size: 0.9375rem !important;
  font-style: italic;
  letter-spacing: 0.0625rem !important;
  line-height: 1.3125rem !important;
  font-weight: 400 !important;
}
checkout-form coupon-form form [zippyclass='is-open'] + div > div > div input-wrap + div .button > span,
checkout-form coupon-form form [zippyclass='is-open'] + div > div > div input-wrap + div .button-1 > span,
checkout-form giftcards-form form [zippyclass='is-open'] + div > div > div input-wrap + div .button > span,
checkout-form giftcards-form form [zippyclass='is-open'] + div > div > div input-wrap + div .button-1 > span {
  line-height: 28px;
  letter-spacing: 1px;
}
checkout-form coupon-form form [zippyclass='is-open']::before {
  display: none;
  background: url('https://conversionratestore.github.io/projects/lemieux/img/promo_code_icon.svg') no-repeat;
  background-size: contain;
}

checkout-step[name='account'] h4 span {
  padding: 0 !important;
  display: block !important;
}

/* checkout-step[name='payment'] :is(coupon-form, giftcards-form) {
  display: none !important;
} */

checkout-account social-login > div p {
  grid-column: 1 / -1;
  grid-row: 1;
  font-weight: 500;
  font-size: 15px;
}

/* C TEST */

checkout-account social-login {
  width: 100%;
}
checkout-account social-login > div {
  display: grid !important;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto 1fr;
  column-gap: 24px;
}

checkout-account social-login > div p {
  grid-column: 1 / -1;
  grid-row: 1;
  font-weight: 500;
  font-size: 15px;
}

checkout-account social-login > *:not(p) {
  grid-row: 2;
  grid-column: span 1;
}

checkout-account social-login .button {
  width: 100% !important;
}
checkout-account social-login .button__body span {
  display: none !important;
}

checkout-account social-login .button__body i {
  margin: 0 !important;
}
`
  ;(function (c, n, t, r, s, a) {
    ;(c.hj =
      c.hj ||
      function () {
        ;(c.hj.q = c.hj.q || []).push(arguments)
      }),
      (c._hjSettings = { hjid: 2667925, hjsv: 6 }),
      (s = n.getElementsByTagName('head')[0]),
      (a = n.createElement('script')),
      (a.async = !0),
      (a.src = t + c._hjSettings.hjid + r + c._hjSettings.hjsv),
      s && s.appendChild(a)
  })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv='),
    window.hj('event', 'exp_cart_page_step2')
  class M {
    constructor() {
      ;(this.device = window.innerWidth > 1100 ? 'desktop' : 'mobile'),
        (this.observerNew = null),
        (this.lastPath = window.location.pathname),
        this.initFunc(),
        this.observePageChange()
    }
    initFunc() {
      j({
        name: 'Adding promo code and gift card options to the checkout (Second iteration C.)',
        dev: 'OS'
      }),
        e('.crs_style') ||
          document.head.insertAdjacentHTML(
            'beforeend',
            `<style class="crs_style">${P}</style>`
          ),
        this.initAllFunc()
    }
    initAllFunc() {
      this.checkPage() === 'checkout' &&
        (setTimeout(() => {
          e('[zippyname="basketTab"] #mmWrapper > div') ||
            o('#mmWrapper > div').then((n) => {
              o('[zippyname="basketTab"]').then((t) => {
                o('mention-me-wrapper').then((r) => {
                  this.toggleElementBetweenContainers(
                    '#mmWrapper',
                    'mention-me-wrapper',
                    'checkout-minibasket ul',
                    'beforeend'
                  )
                })
              })
            })
        }, 1e3),
        setTimeout(() => {
          e('[zippyname="basketTab"] giftcards-form') ||
            o('giftcards-form').then((n) => {
              o('[zippyname="basketTab"]').then((t) => {
                this.toggleElementBetweenContainers(
                  'giftcards-form',
                  'mention-me-wrapper',
                  'checkout-minibasket',
                  'afterend'
                )
              })
            })
        }, 1e3),
        e('[zippyname="basketTab"] coupon-form') ||
          o('coupon-form').then((n) => {
            o('[zippyname="basketTab"]').then((t) => {
              o('mention-me-wrapper').then((r) => {
                this.toggleElementBetweenContainers(
                  'coupon-form',
                  'mention-me-wrapper',
                  'basket-view-totals'
                )
              })
            })
          }),
        this.changeCopy(),
        this.changeCopyContact(),
        this.changePricePosition(),
        this.observer())
    }
    async changePricePosition() {
      const n = await o('checkout-form h4 + div > span price'),
        t = await o('checkout-form h4')
      n && t.insertAdjacentElement('beforeend', n)
    }
    async observer() {
      window.addEventListener('click', (n) => {
        const t = n.target
        t.closest('button') &&
          (this.changeCopyContact(),
          setTimeout(() => {
            this.changeCopyContact()
          }, 2e3)),
          t.closest('checkout-step action') &&
            (this.changeCopyContact(),
            setTimeout(() => {
              this.changeCopyContact()
            }, 2e3))
      })
    }
    changeCopyContact() {
      o('checkout-account ng-form h1 span').then((s) => {
        const a = s
        a.textContent = 'Contact'
      })
      const n = document.querySelector('checkout-account ng-form h1 span')
      n && (n.innerHTML = 'Contact'),
        o('checkout-account ng-form h3 > span').then((s) => {
          const a = s
          a.innerHTML = 'Contact'
        })
      const t = document.querySelector('checkout-account ng-form h3 > span')
      t && (t.innerHTML = 'Contact'),
        o('checkout-step h4 span').then((s) => {
          const a = s
          a.innerHTML = 'Contact'
        })
      const r = document.querySelector('checkout-step h4 span')
      r && (r.innerHTML = 'Contact')
    }
    changeCopy() {
      o('[zippyclass="!ng-hide"]').then((n) => {
        const t = n.querySelector('span')
        t.innerHTML = 'Hide bag summary'
      }),
        o('[zippyclass="ng-hide"]').then((n) => {
          const t = n
          t.innerHTML = 'Show bag summary'
        })
    }
    async toggleElementBetweenContainers(n, t, r, s = 'beforebegin') {
      var F
      const a = e(n),
        f = await o(t),
        d = await o(r),
        h = await o('[zippyname="basketTab"] basket-view-totals'),
        g =
          (F = e('#checkout-step-payment .bg-col-w.p-a-6')) == null
            ? void 0
            : F.nextElementSibling
      if (!a || !f || !d) return
      function W() {
        o('[zippyname="basketTab"] #mmWrapper').then((i) => {
          e('[zippyname="basketTab"] #mmWrapper').addEventListener('click', k)
        })
      }
      function R() {
        o("[zippyname=basketTab] coupon-form [zippyclass='is-open']").then(
          (i) => {
            e(
              "[zippyname=basketTab] coupon-form [zippyclass='is-open']"
            ).addEventListener('click', y)
          }
        ),
          o('[zippyname=basketTab] coupon-form input').then((i) => {
            e('[zippyname=basketTab] coupon-form input').addEventListener(
              'change',
              w
            )
          }),
          o('[zippyname=basketTab] coupon-form action.button').then((i) => {
            e(
              '[zippyname=basketTab] coupon-form action.button'
            ).addEventListener('click', z)
          }),
          o('[zippyname=basketTab] coupon-form button').then((i) => {
            e('[zippyname=basketTab] coupon-form button').addEventListener(
              'click',
              x
            )
          }),
          o('[zippyname=basketTab] coupon-form action.button-inline').then(
            () => {
              e(
                '[zippyname=basketTab] coupon-form action.button-inline'
              ).addEventListener('click', v)
            }
          )
      }
      function A() {
        o('[zippyname="basketTab"] giftcards-form').then((i) => {
          e(
            `[zippyname="basketTab"] giftcards-form [zippyclass='is-open']`
          ).addEventListener('click', _),
            o('[zippyname=basketTab] giftcards-form input').then((m) => {
              e('[zippyname=basketTab] giftcards-form input').addEventListener(
                'change',
                C
              )
            }),
            o('[zippyname=basketTab] giftcards-form action.button').then(
              (m) => {
                e(
                  '[zippyname=basketTab] giftcards-form action.button'
                ).addEventListener('click', T)
              }
            ),
            o('[zippyname=basketTab] giftcards-form action.button-1').then(
              (m) => {
                e(
                  '[zippyname=basketTab] giftcards-form action.button-1'
                ).addEventListener('click', E)
              }
            ),
            o('[zippyname=basketTab] giftcards-form action.button-inline').then(
              () => {
                e(
                  '[zippyname=basketTab] giftcards-form action.button-inline'
                ).addEventListener('click', B)
              }
            )
        })
      }
      function k(i) {
        u(
          'exp_cart_page_cart_link_referred',
          'Been referred by a friend?',
          'click',
          'Bag summary'
        )
      }
      function y(i) {
        i.currentTarget.classList.contains('is-open')
          ? u(
              'exp_cart_page_cart_promocode_open',
              'Have you got a promo code',
              'click',
              'Bag summary'
            )
          : u(
              'exp_cart_page_cart_promocode_close',
              'Have you got a promo code',
              'click',
              'Bag summary'
            )
      }
      function w(i) {
        u(
          'exp_cart_page_cart_promocode_input',
          'Enter offer code',
          'input',
          'Bag summary'
        )
      }
      function z(i) {
        u(
          'exp_cart_page_cart_promocode_apply',
          'Apply',
          'click',
          'Bag summary'
        ),
          o('[zippyname=basketTab] coupon-form action.button-inline').then(
            () => {
              e(
                '[zippyname=basketTab] coupon-form action.button-inline'
              ).addEventListener('click', v)
            }
          )
      }
      function x(i) {
        u(
          'exp_cart_page_cart_promocode_close',
          'Cancel',
          'click',
          'Bag summary'
        )
      }
      function v(i) {
        u(
          'exp_cart_page_cart_remove_offer',
          'Remove Offer code',
          'click',
          'Step 1. Email'
        )
      }
      function _(i) {
        i.currentTarget.classList.contains('is-open')
          ? u(
              'exp_cart_page_cart_giftcode_open',
              'Have you got a gift card',
              'click',
              'Bag summary'
            )
          : u(
              'exp_cart_page_cart_giftcode_close',
              'Have you got a gift card',
              'click',
              'Bag summary'
            )
      }
      function C(i) {
        u(
          'exp_cart_page_cart_giftcode_input',
          'Enter a gift card',
          'input',
          'Bag summary'
        )
      }
      function T(i) {
        u('exp_cart_page_cart_giftcode_apply', 'Apply', 'click', 'Bag summary'),
          o('[zippyname=basketTab] giftcards-form action.button-inline').then(
            () => {
              e(
                '[zippyname=basketTab] giftcards-form action.button-inline'
              ).addEventListener('click', B)
            }
          )
      }
      function E(i) {
        u(
          'exp_cart_page_cart_giftcode_check',
          'Check balance',
          'click',
          'Bag summary'
        )
      }
      function B(i) {
        u(
          'exp_cart_page_cart_remove_gift',
          'Remove gift',
          'click',
          'Step 1. Email'
        )
      }
      function I() {
        e('#mmWrapper').removeEventListener('click', k)
      }
      function $() {
        o("coupon-form [zippyclass='is-open']").then((p) => {
          e("coupon-form [zippyclass='is-open']").removeEventListener(
            'click',
            y
          )
        }),
          o('coupon-form input').then((p) => {
            const m = e('coupon-form input')
            m == null || m.removeEventListener('change', w)
          }),
          o('coupon-form action.button').then((p) => {
            e('coupon-form action.button').removeEventListener('click', z)
          }),
          o('coupon-form button').then((p) => {
            e('coupon-form button').removeEventListener('click', x)
          }),
          e(
            '[zippyname=basketTab] coupon-form action.button-inline'
          ).addEventListener('click', v)
      }
      function G() {
        e("giftcards-form [zippyclass='is-open']").removeEventListener(
          'click',
          _
        ),
          e('giftcards-form input').removeEventListener('change', C),
          e('giftcards-form action.button').removeEventListener('click', T),
          e('giftcards-form action.button-1').removeEventListener('click', E),
          e(
            '[zippyname=basketTab] giftcards-form action.button-inline'
          ).addEventListener('click', v)
      }
      function L(i) {
        if (i.contains(a)) return
        i.insertAdjacentElement(s, a),
          i === d
            ? (n === '#mmWrapper' && W(),
              n === 'coupon-form' && R(),
              n === 'giftcards-form' && A())
            : (n === '#mmWrapper' && I(),
              n === 'coupon-form' && $(),
              n === 'giftcards-form' && G())
        const p = document.querySelector(
            '#checkout-step-payment mention-me-wrapper'
          ),
          m = document.querySelector('#checkout-step-payment coupon-form')
        p && m && p.after(m)
        const l = document.querySelector('[zippyname="basketTab"] button')
        l && l.addEventListener('click', () => {})
        const b = document.querySelector('[zippyname="basketTab"] coupon-form'),
          H = document.querySelector('[zippyname="basketTab"] giftcards-form')
        b && H && b.after(H)
      }
      const S = new IntersectionObserver(
        (i) => {
          i.forEach((p) => {
            p.isIntersecting && (p.target === g ? L(f) : p.target === h && L(d))
          })
        },
        {
          threshold: 0.5
        }
      )
      S.observe(g), S.observe(h)
    }
    observePageChange() {
      this.observerNew = new MutationObserver((t) => {
        t.forEach((r) => {
          window.location.pathname !== this.lastPath &&
            (this.device === 'mobile'
              ? setTimeout(() => {
                  this.initAllFunc()
                }, 2800)
              : this.initAllFunc(),
            (this.lastPath = window.location.pathname))
        })
      })
      const n = { childList: !0, subtree: !0 }
      this.observerNew.observe(document.body, n)
    }
    checkPage() {
      const n = window.location.href
      switch (!0) {
        case e('product-view-layout') !== null:
          return 'product'
        case e('category-view-layout') !== null:
          return 'listing'
        case n.includes('/basket'):
          return 'basket'
        case n.includes('/checkout'):
          return 'checkout'
        default:
          return 'other'
      }
    }
  }
  new M()
  class q {
    constructor() {
      var n, t
      ;(this.observer = null),
        (this.countryCode =
          (t =
            (n = window == null ? void 0 : window.autoInitData) == null
              ? void 0
              : n.website) == null
            ? void 0
            : t.websiteCode),
        (this.basketButtonHandler = () => {
          const r = () => {
            this.country !== 'other' &&
              this.device === 'desktop' &&
              !location.href.includes('basket') &&
              !location.href.includes('checkout') &&
              this.waitForElementCustom(
                'minibasket a[href*="/basket"]',
                (s) => {
                  var d
                  const f =
                    /* HTML */
                    `<a class="w-12 p-r-0 p-l-0 button" href="${
                      this.country === 'us' ? '/us/checkout' : '/checkout'
                    }"
            ><span class="p1 col-w">Checkout securely</span></a
          >`
                  ;(s.outerHTML = f),
                    (d = e('minibasket a[href*="/checkout"]')) == null ||
                      d.addEventListener('click', (h) => {
                        const g = document.querySelector(
                          'minibasket [aria-label="Close"]'
                        )
                        localStorage.setItem('lastPdpHref', location.href),
                          g && g.click()
                      })
                }
              )
          }
          r(), this.pageChangeHandler(r)
        }),
        (this.country =
          this.countryCode === 'base'
            ? 'uk'
            : this.countryCode === 'us'
            ? 'us'
            : 'other'),
        (this.device = window.innerWidth > 1100 ? 'desktop' : 'mobile'),
        this.init()
    }
    init() {
      this.basketButtonHandler(), this.updateDevice(), this.checkBasketPage()
    }
    updateDevice() {
      window.addEventListener('resize', () => {
        const n = this.device
        ;(this.device = window.innerWidth > 1024 ? 'desktop' : 'mobile'),
          n !== this.device && this.init()
      })
    }
    checkBasketPage() {
      function n() {
        const r = setInterval(function () {
          document.querySelectorAll('button').forEach((a) => {
            var f
            if (
              a &&
              (f = a.textContent) != null &&
              f.includes('Continue shopping')
            ) {
              const d = localStorage.getItem('lastPdpHref'),
                h =
                  /* HTML */
                  ` <a class="w-12 button-1 m-b m-t-2" href="${d}"
              ><span class="button__body">Continue shopping</span></a
            >`
              d && (a.outerHTML = h), clearInterval(r)
            }
          })
        }, 100)
      }
      function t() {
        location.href.includes('basket') && n()
      }
      this.pageChangeHandler(t), t()
    }
    pageChangeHandler(n) {
      ;(function (t) {
        const r = t.pushState,
          s = t.replaceState
        ;(t.pushState = function (a) {
          r.apply(t, arguments), n()
        }),
          (t.replaceState = function (a) {
            s.apply(t, arguments), n()
          }),
          window.addEventListener('popstate', function (a) {
            n()
          })
      })(window.history)
    }
    waitForElementCustom(n, t) {
      this.observer && this.observer.disconnect(),
        (this.observer = new MutationObserver((r, s) => {
          const a = document.querySelector(n)
          a && t(a)
        })),
        this.observer.observe(document.body, {
          childList: !0,
          subtree: !0,
          attributes: !0,
          attributeFilter: ['href']
        })
    }
  }
  new q()
})()
