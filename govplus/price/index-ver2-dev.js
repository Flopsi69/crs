!function(){"use strict";
const startLog = ({ name, dev }) => {
  console.log(
    `%c EXP: ${name} (DEV: ${dev})`,
    `background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;`
  );
};
startLog({ name: "Pricing plan enhancements (alt 14)", dev: "OS" });

const clarityInterval = (name) => {
  let int = setInterval(function () {
    if (typeof window.clarity == 'function') {
      clearInterval(int);
      window.clarity('set', name, 'variant_1');
    }
  }, 1000);
};
clarityInterval("exp_pricing_plan");

const n={standard:{label:"STANDARD",description:"Regular <br> Gov Timeline",benefits:["Ideal for non-urgent applications"]},priority:{label:"Priority Gov+ Courier",description:"4 weeks",benefits:["Guaranteed timeline","Priority processing","Best for upcoming travel"]},express:{label:"Express Gov+ Courier",description:"2 weeks",benefits:["Guaranteed timeline","Fastest processing","Urgent cases prioritized","Escalation support"]},instant:{label:"Instant Gov+ Courier",description:"3 biz days",benefits:["Our fastest available service","Absolute priority processing","Escalated for immediate handling","Front-of-the-line submission","Dedicated courier delivery"]}};class t{constructor(){this.paymentsSelector=".PaymentCombinedInformation",this.paymentsStyleId="crs-payments-style",this.titleClass="crs-payment-title",this.isProcessing=!1,this.disclaimerObserver=null}init(){this.addStyles(),this.changes()}async changes(){if(!this.isProcessing){this.isProcessing=!0;try{const e=await(t=this.paymentsSelector,new Promise(n=>{const e=document.querySelector(t);e&&n(e);const i=new MutationObserver(()=>{const e=document.querySelector(t);e&&(n(e),i.disconnect())});i.observe(document.documentElement,{childList:!0,subtree:!0})})),i=document.querySelector(".PaymentPageWrapper"),a=e.querySelectorAll(".payment-method-information__item"),o=e.querySelector(".PaymentCombinedInformation .payment-footer p"),r=e.querySelector(".traveling-soon > div");i&&(this.titleClass,i.setAttribute(`data-${this.titleClass}`,"Get your passport within:")),r&&(r.textContent="Need your passport sooner?"),a.forEach(t=>{var e,i,a;const o=t.querySelector("label.ant-radio-wrapper"),r=t.querySelector(".sale-block__processing > div:first-child p"),m=t.querySelector(".sale-block__processing > div:last-child"),s=null==(e=null==r?void 0:r.textContent)?void 0:e.toLowerCase().match(/(standard|priority|express|instant)/),p=s?s[1]:"standard";n[p].hidden?t.style.display="none":(null==o||o.setAttribute("data-crs-label",n[p].label),r&&(r.style.display="none",r.textContent=(null==(a=null==(i=r.textContent)?void 0:i.trim())?void 0:a.replace(/-$/,"").trim())||""),m&&(m.innerHTML=n[p].description))}),o&&(this.replaceBreakWithPeriod(o),this.disclaimerObserver=new MutationObserver(()=>{this.replaceBreakWithPeriod(o)}),this.disclaimerObserver.observe(o,{childList:!0,subtree:!0,characterData:!0}))}finally{this.isProcessing=!1}var t}}replaceBreakWithPeriod(n){const t=n.innerHTML,e=t.replace(/\s*<br\s*\/?>\s*/gi,". ");t!==e&&(n.innerHTML=e)}cleanUp(){const n=document.querySelector(`.${this.titleClass}`);n&&n.remove(),this.disclaimerObserver&&(this.disclaimerObserver.disconnect(),this.disclaimerObserver=null);const t=document.getElementById(this.paymentsStyleId);t&&t.remove()}addStyles(){if(!document.getElementById(this.paymentsStyleId)){const n=document.createElement("style");n.id=this.paymentsStyleId,n.textContent='div:has(> .PaymentPageWrapper) {\n  margin-top: 36px !important;\n}\n\n/* .GHeaderCombinedPayment .GProgressBar {\n  display: none;\n} */\n\n@media (max-width: 772px) {\n  div:has(> .PaymentPageWrapper) {\n    margin-top: 24px !important;\n  }\n\n}\n\n.PaymentPageWrapper div.PaymentCombinedInformation {\n  margin-bottom: 0 !important;\n}\n\n.PaymentPageWrapper::before {\n  content: attr(data-crs-payment-title);\n  display: block;\n  font-size: 36px;\n  margin-bottom: -7px !important;\n  font-family: InterSemiBold, sans-serif;\n  color: rgb(25, 25, 25);\n  line-height: 130%;\n  font-weight: 600;\n  letter-spacing: -1px;\n  text-align: center;\n}\n\n\n@media (max-width: 772px) {\n  .PaymentPageWrapper::before {\n    margin-bottom: -8px !important;\n    font-size: 24px !important;\n    line-height: 35px !important;\n  }\n}\n\n@media (min-width: 773px) {\n  .PaymentCombinedInformation .charge-payment-form .payment-method-information {\n    flex-direction: row !important;\n    align-items: stretch !important;\n    gap: 12px !important;\n  }\n}\n\n@media (max-width: 772px) {\n  .PaymentCombinedInformation .charge-payment-form div.payment-method-information {\n    flex-direction: row !important;\n    flex-wrap: wrap !important;\n    align-items: stretch !important;\n\n    gap: 12px !important;\n  }\n}\n\n.PaymentCombinedInformation .charge-payment-form .payment-method-information .payment-method-information__item {\n  --border-size: 1px;\n  position: relative;\n  z-index: 2;\n}\n\n@media (max-width: 772px) {\n\n  .PaymentCombinedInformation .charge-payment-form .payment-method-information :is(.payment-method-information__item,\n    .payment-method-information__item) {\n    flex: 1 1 calc(50% - 6px) !important;\n    width: calc(50% - 6px) !important;\n    min-height: 176px !important;\n  }\n}\n\n@media (min-width: 773px) {\n\n  .PaymentCombinedInformation .charge-payment-form .payment-method-information :is(.payment-method-information__item,\n    .payment-method-information__item label) {\n    border-radius: 16px 16px 16px 16px !important;\n  }\n}\n\n\n@media (max-width: 772px) {\n\n  .PaymentCombinedInformation .charge-payment-form .payment-method-information .payment-method-information__item label {\n    height: 100%;\n    grid-template-rows: auto 1fr !important;\n    align-content: start;\n\n  }\n}\n\n\n.PaymentCombinedInformation .charge-payment-form .payment-method-information .payment-method-information__item .ant-radio-wrapper {\n  padding: 0 !important;\n  width: 100% !important;\n}\n\n@media (min-width: 773px) {\n  .PaymentCombinedInformation .charge-payment-form .payment-method-information .payment-method-information__item .ant-radio-wrapper :is(span:has(> .content), .content) {\n    height: 100% !important;\n  }\n\n  .PaymentCombinedInformation .charge-payment-form .payment-method-information .payment-method-information__item .ant-radio-wrapper .content {\n    justify-content: flex-start !important;\n    margin: 0 !important;\n    min-height: 123px !important;\n    padding-block: 60px 24px !important;\n    padding-inline: 12px !important;\n  }\n}\n\n\n@media (max-width: 1200px) {\n  .PaymentCombinedInformation .charge-payment-form .payment-method-information .payment-method-information__item .ant-radio-wrapper .content {\n    padding-block: 60px 24px !important;\n    padding-inline: 12px !important;\n  }\n}\n\n\n@media (max-width: 772px) {\n  .PaymentCombinedInformation .charge-payment-form .payment-method-information .payment-method-information__item .ant-radio-wrapper {\n\n    overflow: visible !important;\n  }\n\n  .PaymentCombinedInformation .charge-payment-form .payment-method-information .payment-method-information__item .ant-radio-wrapper span:has(.content) {\n    height: 100% !important;\n  }\n\n  .PaymentCombinedInformation .charge-payment-form .payment-method-information .payment-method-information__item .ant-radio-wrapper .content {\n    height: 100%;\n    margin: 0 !important;\n    padding-block: 67px 24px !important;\n    padding-inline: 16px !important;\n  }\n}\n\n@media (max-width: 772px) and (min-width: 599px) {\n  .PaymentCombinedInformation .charge-payment-form .payment-method-information .payment-method-information__item .ant-radio-wrapper .content {\n    margin-left: 0 !important;\n    padding: 16px 40px 16px 16px;\n  }\n}\n\n.PaymentCombinedInformation .charge-payment-form .payment-method-information .payment-method-information__item .ant-radio-wrapper .ant-radio {\n\n  top: 25px !important;\n  left: 50% !important;\n  transform: translateX(-50%) !important;\n}\n\n@media (max-width: 772px) {\n  .PaymentCombinedInformation .charge-payment-form .payment-method-information .payment-method-information__item .ant-radio-wrapper .ant-radio {\n    top: 25px !important;\n    left: 50% !important;\n    transform: translateX(-50%) !important;\n  }\n}\n\n.PaymentCombinedInformation .charge-payment-form .payment-method-information .payment-method-information__item .ant-radio-wrapper-checked .ant-radio {\n  background: #0338AB !important;\n}\n\n.PaymentCombinedInformation .charge-payment-form .payment-method-information .payment-method-information__item .ant-radio-wrapper {\n  border: 2px solid #d3e4fd !important;\n  background: #f0f6ff !important;\n  transition: background-color 0.3s ease !important;\n}\n\n@media (min-width: 773px) {\n  .PaymentCombinedInformation .charge-payment-form .payment-method-information .payment-method-information__item .ant-radio-wrapper {\n    height: 100% !important;\n    background: #f5f9ff !important;\n  }\n}\n\n.PaymentCombinedInformation .charge-payment-form .payment-method-information .payment-method-information__item .ant-radio-wrapper-checked {\n  border: 2px solid #0338ab !important;\n\n  background: #e2eeff !important;\n  box-shadow: 0 8px 24px 4px rgba(0, 0, 0, 0.12) !important;\n}\n\n\n.PaymentCombinedInformation .charge-payment-form .traveling-soon {\n  display: none;\n}\n\n@media (max-width: 772px) {\n  /* .PaymentCombinedInformation .charge-payment-form .traveling-soon {\n    display: block;\n  } */\n\n  .PaymentCombinedInformation .charge-payment-form .traveling-soon>div {\n    font-size: 18px !important;\n    font-weight: 600 !important;\n    line-height: 28px !important;\n  }\n}\n\n.PaymentCombinedInformation .payment-method-information__item .content__wrapper {\n  display: grid;\n  grid-template-columns: 1fr;\n \n  grid-template-areas:\n    "description"\n    "price";\n  gap: 24px 0;\n  height: 100% !important;\n}\n\n@media (max-width: 772px) {\n  .PaymentCombinedInformation .payment-method-information__item .content__wrapper {\n    grid-template-columns: 1fr;\n    grid-template-areas:\n      "description"\n      "price";\n    gap: 16px 0;\n  }\n}\n\n.PaymentCombinedInformation .payment-method-information__item .content__wrapper :is(.sale-block, .sale-block__processing, .price-block) {\n  display: contents;\n}\n\n.PaymentCombinedInformation .payment-method-information__item .content__wrapper .sale-block .sale-block__processing>div:first-child {\n  grid-area: title;\n  display: none;\n}\n\n.PaymentCombinedInformation .payment-method-information__item .content__wrapper .sale-block .sale-block__processing>div:last-child {\n  grid-area: description;\n  color: #191919 !important;\n  font-size: 17px !important;\n  font-weight: 600 !important;\n  line-height: 25px !important;\n  letter-spacing: -0.1px;\n  text-decoration: none !important;\n  font-family: InterSemiBold, sans-serif !important;\n  text-align: center;\n}\n\n/* @media (min-width: 993px) and (max-width: 1050px) {\n  .PaymentCombinedInformation .payment-method-information__item .content__wrapper .sale-block .sale-block__processing>div:last-child {\n    font-size: 15px !important;\n  }\n} */\n\n@media (max-width: 772px) {\n  .PaymentCombinedInformation .payment-method-information__item .content__wrapper .sale-block .sale-block__processing>div:last-child {\n    font-size: 18px !important;\n    line-height: 28px !important;\n\n  }\n\n  .PaymentCombinedInformation .payment-method-information__item .content__wrapper .sale-block .sale-block__processing>div:last-child br {\n    display: none;\n  }\n}\n\n.PaymentCombinedInformation .payment-method-information__item .content__wrapper .sale-block .sale-block__processing>div:last-child span {\n  /* color: #0338AB !important; */\n  font-weight: inherit !important;\n  font-size: inherit !important;\n  font-family: InterSemiBold, sans-serif !important;\n}\n\n.PaymentCombinedInformation .payment-method-information__item .content__wrapper .price-block .prices {\n  grid-area: price;\n  align-self: end;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row !important;\n  gap: 0.5ch;\n}\n\n\n\n.PaymentCombinedInformation .payment-method-information__item .content__wrapper .price-block .prices>div:first-child {\n  align-items: center;\n  line-height: 24px !important;\n}\n\n@media (max-width: 772px) {\n  .PaymentCombinedInformation .payment-method-information__item .content__wrapper .price-block .prices>div:first-child {\n    font-size: 18px !important;\n    line-height: 24px !important;\n  }\n}\n\n.PaymentCombinedInformation .payment-method-information__item .content__wrapper .price-block .prices>div:last-child {\n  font-size: 20px !important;\n  line-height: 26px !important;\n  color: #191919 !important;\n}\n\n@media (max-width: 772px) {\n  .PaymentCombinedInformation .payment-method-information__item .content__wrapper .price-block .prices>div:last-child {\n    font-size: 18px !important;\n    line-height: 22px !important;\n  }\n}\n\n.PaymentCombinedInformation .payment-footer {\n  margin-top: 12px !important;\n}\n\n@media (max-width: 772px) {\n  .PaymentCombinedInformation .payment-footer {\n    margin-top: 16px !important;\n  }\n}\n\n.PaymentCombinedInformation .payment-footer p {\n  text-align: center !important;\n}\n\n@media (max-width: 772px) {\n  .PaymentCombinedInformation .payment-footer p {\n    text-align: center !important;\n  }\n}\n\n.PaymentCombinedInformation .payment-footer p br {\n  display: none;\n}',document.head.appendChild(n)}}}window.crsPassportAppFlowTestInstance=!0,window.crsPassportAppFlowTestInstanceV13||(window.crsPassportAppFlowTestInstanceV13=!0,new class{constructor(){this.payments=null,this.isInitialized=!1,this.targetFormIds=["passport-new","passport-renewal","passport-lost","passport-damaged","passport-stolen"],this.abortController=null,this.executeInitialLoadTimeout=null,this.onPageChangeHandler=null,this.windowLoadHandler=null,this.originalPushState=null,this.originalReplaceState=null,this.mutationObserver=null,this.urlPollingInterval=null,this.lastObservedUrl=window.location.href,this.handlePageChangeTimeout=null,this.lastProcessedUrl=null,this.payments=new t,this.init()}init(){location.href.includes("page=form")&&this.cleanUpComponents(),this.spaPageChangeHandler(),this.handleInitialPageLoad()}handleInitialPageLoad(){this.isInitialized||this.executeInitialLoad()}executeInitialLoad(){this.isInitialized||(this.isInitialized=!0,this.executeInitialLoadTimeout&&clearTimeout(this.executeInitialLoadTimeout),this.executeInitialLoadTimeout=setTimeout(()=>{this.lastProcessedUrl||this.handlePageChange(),this.executeInitialLoadTimeout=null},100))}initComponents(){var n;null==(n=this.payments)||n.init()}cleanUpComponents(){var n;null==(n=this.payments)||n.cleanUp()}async handlePageChange(){const n=new URLSearchParams(window.location.search).get("formId"),t=new URLSearchParams(window.location.search).get("page");if(!n||!this.targetFormIds.includes(n)||t&&"payment"!==t&&"form"!==t)return sessionStorage.removeItem("crs-first-time-user-checked"),sessionStorage.removeItem("crs-formId"),void this.cleanUpComponents();location.href.includes("page=form")&&null===sessionStorage.getItem("crs-formId")&&sessionStorage.setItem("crs-formId",n),this.handlePageChangeInternal()}queueHandlePageChange(){this.handlePageChangeTimeout&&clearTimeout(this.handlePageChangeTimeout),this.handlePageChangeTimeout=setTimeout(()=>{this.handlePageChange(),this.handlePageChangeTimeout=null},50)}detectUrlChangeAndHandle(){const n=window.location.href;n!==this.lastObservedUrl&&(this.lastObservedUrl=n,this.queueHandlePageChange())}handlePageChangeInternal(){const n=window.location.href;this.lastProcessedUrl=n,this.isFormPage()?(this.cleanUpComponents(),this.initComponents()):this.cleanUpComponents()}spaPageChangeHandler(){this.onPageChangeHandler&&(window.removeEventListener("popstate",this.onPageChangeHandler),window.removeEventListener("pushstate",this.onPageChangeHandler),window.removeEventListener("replacestate",this.onPageChangeHandler),window.removeEventListener("hashchange",this.onPageChangeHandler)),this.mutationObserver&&(this.mutationObserver.disconnect(),this.mutationObserver=null),this.urlPollingInterval&&(clearInterval(this.urlPollingInterval),this.urlPollingInterval=null),this.patchHistoryAPI(),this.onPageChangeHandler=()=>{this.lastObservedUrl=window.location.href,this.queueHandlePageChange()},window.addEventListener("popstate",this.onPageChangeHandler),window.addEventListener("pushstate",this.onPageChangeHandler),window.addEventListener("replacestate",this.onPageChangeHandler),window.addEventListener("hashchange",this.onPageChangeHandler),this.mutationObserver=new MutationObserver(()=>{this.detectUrlChangeAndHandle()}),this.mutationObserver.observe(document.documentElement,{childList:!0,subtree:!0}),this.urlPollingInterval=setInterval(()=>{this.detectUrlChangeAndHandle()},100)}patchHistoryAPI(){this.originalPushState||(this.originalPushState=history.pushState.bind(history)),this.originalReplaceState||(this.originalReplaceState=history.replaceState.bind(history));const n=this.originalPushState,t=this.originalReplaceState;let e=!1,i=!1;history.pushState=(...t)=>{if(n(...t),!e){e=!0;try{window.dispatchEvent(new Event("pushstate"))}finally{e=!1}}},history.replaceState=(...n)=>{if(t(...n),!i){i=!0;try{window.dispatchEvent(new Event("replacestate"))}finally{i=!1}}}}isFormPage(){return window.location.href.includes("dashboard")&&window.location.href.includes("/forms/")&&window.location.href.includes("formId")}cleanUp(){this.abortController&&(this.abortController.abort(),this.abortController=null),this.executeInitialLoadTimeout&&(clearTimeout(this.executeInitialLoadTimeout),this.executeInitialLoadTimeout=null),this.handlePageChangeTimeout&&(clearTimeout(this.handlePageChangeTimeout),this.handlePageChangeTimeout=null),this.urlPollingInterval&&(clearInterval(this.urlPollingInterval),this.urlPollingInterval=null),this.mutationObserver&&(this.mutationObserver.disconnect(),this.mutationObserver=null),this.onPageChangeHandler&&(window.removeEventListener("popstate",this.onPageChangeHandler),window.removeEventListener("pushstate",this.onPageChangeHandler),window.removeEventListener("replacestate",this.onPageChangeHandler),window.removeEventListener("hashchange",this.onPageChangeHandler),this.onPageChangeHandler=null),this.windowLoadHandler&&(window.removeEventListener("load",this.windowLoadHandler),this.windowLoadHandler=null),this.originalPushState&&(history.pushState=this.originalPushState,this.originalPushState=null),this.originalReplaceState&&(history.replaceState=this.originalReplaceState,this.originalReplaceState=null),this.cleanUpComponents()}})}();


(function () {
  if (_$('.lav-pricing')) {
    console.log('** Exp check failed: lav-pricing exist **', _$('.lav-pricing'))
    return
  }

  if (!isInitApp()) {
    console.log('** Exp check failed: not init **')
    return
  }

  console.log('*** Experiment started ***')

  // Styles for Experiment
  const styles = /* css */ `
    .PaymentCombinedInformation .charge-payment-form .payment-method-information .payment-method-information__item .ant-radio-wrapper .ant-radio {
      position: relative;
      left: 0 !important;
      top: 0 !important;
      transform: none!important;
    }
    .PaymentCombinedInformation .charge-payment-form .payment-method-information .payment-method-information__item .ant-radio-wrapper :is(span:has(> .content), .content) {
      flex-grow: 1!important;
    }
    .PaymentCombinedInformation .payment-method-information__item .content__wrapper .price-block .prices {
      justify-content: flex-end;
    }
    .PaymentCombinedInformation .charge-payment-form .payment-method-information.lav-pricing {
      gap: 16px!important;
      max-width: 440px;
      margin: auto;
      flex-flow: column !important;
    }
    .PaymentCombinedInformation .charge-payment-form .payment-method-information .payment-method-information__item .ant-radio-wrapper .content {
      padding: 0!important;
      min-height: auto!important;
    }
    .PaymentCombinedInformation .payment-method-information__item .content__wrapper .price-block .prices>div:last-child {
      font-size: 18px!important;
      line-height: 22px!important;
    }
    .PaymentCombinedInformation .payment-method-information__item .content__wrapper .sale-block .sale-block__processing>div:last-child {
      font-weight: 500!important;
      letter-spacing: -0.1px!important;
      font-size: 18px!important;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .lav-hero-title {
      max-width: 550px;
    }
    .PaymentCombinedInformation .charge-payment-form .payment-method-information .payment-method-information__item .ant-radio-wrapper {
      border-color: #D3E4FD!important;
      background: #F0F6FF!important;
      padding: 22px 16px!important;
      display: flex!important;
      gap: 12px!important;
    }
    .PaymentCombinedInformation .charge-payment-form .payment-method-information .payment-method-information__item .ant-radio-wrapper-checked .ant-radio {
      background: #216DE3!important;
    }
    .charge-payment-form .payment-method-information.lav-pricing .payment-method-information__item .ant-radio-wrapper-checked {
      border-color: #216DE3!important;
    }
    .PaymentCombinedInformation .payment-method-information__item .content__wrapper {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .PaymentCombinedInformation .payment-method-information__item .content__wrapper .price-block .prices>div:first-child {
      display: none!important;
    }
    .PaymentCombinedInformation .payment-footer {
      margin-top: 24px!important;
      max-width: 440px;
      margin-left: auto;
      margin-right: auto;
    }
    .PaymentCombinedInformation .payment-method-information__item .content__wrapper :is(.sale-block, .sale-block__processing, .price-block) {
      display: block;
    }
    .PaymentPageWrapper::before {
      color: #191919;
      font-family: "Inter Tight";
      font-size: 32px;
      line-height: 48px;
      letter-spacing: -0.1px;
    }
    @media(max-width: 772px) {
      .PaymentCombinedInformation .charge-payment-form .payment-method-information :is(.payment-method-information__item, .payment-method-information__item) {
        min-height: auto!important;
        width: 100%!important;
      }
      .PaymentCombinedInformation .payment-footer p {
        text-align: left!important;
      }
      .PaymentPageWrapper::before {
        font-size: 24px!important;
        line-height: 28px!important;
      }
    }
  `

  const stylesEl = document.createElement('style')
  stylesEl.classList.add('exp-styles')
  stylesEl.innerHTML = styles

  // *** Logic *** //
  waitFor('#itemPriceChargeId', initExp)

  function isInitApp() {
    // const targetFormIds = [
    //   "passport-new",
    //   "passport-renewal",
    //   "passport-lost",
    //   "passport-damaged",
    //   "passport-stolen",
    // ]
    // const isApp = location.href.includes('dashboard.govplus');
    const isValidPage = location.href.includes('page=payment');
    return isValidPage;
  }
    
  async function initExp() {
    if (_$('.lav-pricing')) {
      console.log('** Exp check failed: lav-pricing exist **', _$('.lav-pricing'))
      return;
    }


    console.log('** InitExp **')
    hanlePricingBlock();
    _$('.lav-pricing')?.appendChild(stylesEl)
  }

  function hanlePricingBlock() {
    _$('#itemPriceChargeId').classList.add('lav-pricing');

    _$('.GHeader .GImageTitle h1 p').classList.add('lav-hero-title');

    updateTextContent()
    setTimeout(updateTextContent, 400);
  }

  function updateTextContent() {
    _$('.GHeader .GImageTitle h1 p').innerText = 'Submit your passport renewal application';

    _$$('.charge-payment-form .payment-method-information.lav-pricing .payment-method-information__item').forEach((el, index) => {
      let text = "Regular Gov Timeline";
      if (index === 1) {
        text = "4 weeks";
      } else if (index === 2) {
        text = "2 weeks";
      } else if (index === 3) {
        text = "3 business days";
      }
      el.querySelector('.sale-block__processing .ant-typography:nth-child(2)').innerText = text;
    });
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

  // Shordcode for selectors
  function _$(selector, context = document) {
    return context.querySelector(selector)
  }
  function _$$(selector, context = document, toSimpleArray = false) {
    const arr = context.querySelectorAll(selector)

    return toSimpleArray ? Array.from(arr) : arr
  }

  // *** Exp BG process *** //

  // Svg objects
  function getSvg(name) {
    const svgObj = {
      arrowRight: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <g clip-path="url(#clip0_2675_1512)">
            <mask id="mask0_2675_1512" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28">
              <path d="M27.5714 0.571411H0.142822V28H27.5714V0.571411Z" fill="white"/>
            </mask>
            <g mask="url(#mask0_2675_1512)">
              <path d="M4.90491 12.0042H18.2382" stroke="white" stroke-width="1.90477" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M11.5717 5.33746L18.2383 12.0041L11.5717 18.6708" stroke="white" stroke-width="1.90477" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
          </g>
          <defs>
            <clipPath id="clip0_2675_1512">
              <rect width="24" height="24" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      `
    }

    return svgObj[name]
  }
})()