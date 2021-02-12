function gaEvent(action, label, value) {
  try {
    dataLayer.push({
      event: "event-to-ga",
      eventCategory: 'Experiment — Subscription',
      eventAction: action,
      eventLabel: label,
      eventValue: value
    });
  } catch (e) {}
};

try{
  (function(h,o,t,j,a,r){
      h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
      h._hjSettings={hjid:410340,hjsv:6};
      a=o.getElementsByTagName('head')[0];
      r=o.createElement('script');r.async=1;
      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
      a.appendChild(r);
  })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
window.hj = window.hj || function(){(hj.q = hj.q || []).push(arguments)};
      hj('trigger', 'Experiment__Subscription');
}
catch (e) { }

gaEvent('loaded', '', '');

/* styles start */
let stylesList = `
  ._2OxfV{
    background-color: #fff;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,.08), 0 0 1px 0 rgba(0,0,0,.16);
    max-width: 950px;
    width: 100%;
    margin: auto;
    border-radius: 0 0 8px 8px;
    z-index: 1;
  }
  .subscribe_upgrade .subscribe__plans-box ._2OxfV{
    max-width: 950px;
    min-height: 475px;
  }
  ._2P5S3 {
    max-width: 950px;
  }
  .mixed-plans-constructor__info-box {
    width: 100%;
    padding-right: 0;
  }
  .plans__head {
    position: relative;
    z-index: 10;
    margin-bottom: -1px;
    display: flex;
    max-width: 950px;
    width: 100%;
  }
  .plans__head-item {
    flex: 1;
    font-weight: 400;
    padding: 18px;
    font-size: 22px;
    line-height: 25px;
    text-align: center;
    color: #3C3C3C;
    background-color: #E1EFFD;
    cursor: pointer;
    transition: .5s;
  }
  .plans__head-item:first-child {
    border-radius: 8px 0 0 0;
  }
  .plans__head-item:last-child {
    border-radius: 0px 8px 0 0;
  }
  .plans__head-item.active {
    background-color: #fff;
    font-weight: 700;
    pointer-events: none;
  }
  .plans__head-item:hover {
    background-color: #b5cae0;
  }
  h2._3rAYB,._3yrOV:before  {
    display: none;
  }
  ._1fz6A{
    box-shadow: none;
  }
  ._1dShl {
    font-size: 15px;
    padding: 5px 12px;
    border-radius: 20px;
    margin-left: 8px;
    top: -3px;
    display: inline-block;
    height: auto;
  }
  ._2Idsb ._f7MVl {
    font-size: 20px;
  }
  ._1ck5C {
    font-size: 22px;
    max-width: 385px;
    height: 65px;
    border-radius: 50px;
    margin-top: 55px;
  }
  // Todo
  .plans__currency-box {
    right: 0;
    bottom: -50px;
    margin: 0;
  }
  .currency-select_watery {
    margin-top: 0;
  }
  .plan-constructor__subproducts-box {
    margin-bottom: 20px;
  }
  .plan-constructor .plan-constructor__footer {
    padding-top: 55px;
  }
  ._1fz6A {
    margin: 0;
  }
  .plan-constructor_ahead .plan-constructor__buy, .plan-constructor__buy {
    height: 62px;
    border-radius: 50px;
    max-width: 385px;
    width: 100%;
  }
  .subscribe_upgrade .subscribe__group-content {
    margin-bottom: 20px;
  }
  ._pwXQx {
    margin: 0 7px;
    transform: scale(1.2);
  }
  .go-plan-wrap {
    display: flex;
    width: 100%;
    max-width: 700px;
  }
  ._2OxfV>form {
    position: absolute;
    opacity: 0;
    pointer-events: none;
    margin: auto!important;
    padding-bottom: 60px;
  }
  ._gfk8o {
    margin-bottom: 60px;
  }
  ._2OxfV>form.active {
    position: static;
    opacity: 1;
    pointer-events: auto;
  }
  .plans__container_image .plan-constructor:not(.mixed-plans-constructor) {
    max-width: 730px;
  }
  .plan-constructor__title {
    display: none;
  }
  .plan-constructor_ahead, .plan-constructor {
    padding-top: 15px;
  }
  .plan-constructor .plan-constructor__offers-cell {
    padding: 0;
    max-width: 330px;
    margin-left: auto;
  }
  .mixed-plans-constructor__info-box {
    padding-left: 0;
  }
  .plan-constructor__advantage-item+.plan-constructor__advantage-item {
    margin-top: 13px;
  }
  .plan-constructor__advantage-item img {
    display: none;
  }
  .plan-constructor__advantage-item.exluded {
    text-decoration: line-through;
  }
  .plan-constructor__advantage-item.exluded i {
    display: none
  }
  .plan-constructor__advantage-item.exluded img {
    position: absolute;
    left: 0;
    top: 3px;
    display: block;
  }
  .plans__box>form:last-child .plan-constructor__frame-row+.plan-constructor__frame-row   {
    height: 300px;
  }
  .offer-row__full-price {
    color: #525252;
    font-weight: bold;
  }
  .offer-row__amount .offer-row__popular {
    top: -3px;
  }
  .offer-row__full-price .price-capt {
    background: #FFD6D6;
    border-radius: 10px;
    padding: 3px 6px;
    font-weight: bold;
    font-size: 10px;
    line-height: 11px;
    color: #E74C3C;
    position: relative;
    top: -2px;
  }
  ._15kW6 {
      color: #fff;
      border: none;
      background-color: #4792de;
  }
  ._15kW6:hover {
    background-color: #2482E2!important;
  }
  #root>.wrapper {
    opacity: 1;
  }
`;

// connect to DOM
let styles = document.createElement('style');
styles.innerHTML = stylesList;
document.body.appendChild(styles);
/* styles end */

const plansHeader = `
  <div class="plans__head">
    <div class="plans__head-item active" data-tab-name="subscribe">Subscription</div>
    <div class="plans__head-item" data-tab-name="demand">On demand</div>
  </div>
`;

const advantages = `
  <div class="mixed-plans-constructor__info-box _info-box">
    <ul class="plan-constructor__advantages" style='line-height: 1.5'>
        <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>Download files any time within a year</li>
        <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>Full access to our library</li>
        <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>Download photos and vectors (JPG, EPS and AI)</li>
        <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>All file sizes</li>
        <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>Print or digital use </li>
        <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>Use for marketing and advertising</li>
        <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>Printing rights - <strong class='advantage-toggle-text'>up to</strong> 500,000 copies</li>
        <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>Life-long rights to use images</li>

        <li class="plan-constructor__advantage-item exluded exluded-trigger"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        <img src="https://i.ibb.co/ww1t6Zd/Vector.png">
        Use for items for resale
        </li>
        <li class="plan-constructor__advantage-item exluded exluded-trigger"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>
        <img src="https://i.ibb.co/ww1t6Zd/Vector.png">
        Use in merchandise and promotional items for sale or distribution
        </li>
    </ul>
  </div>
`;

let activeIndex = '1';

// setTimeout(() => {
  document.querySelector("._2OxfV").insertAdjacentHTML("beforebegin", plansHeader);

  document.querySelectorAll(".plans__head-item").forEach(el => {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      activeIndex = activeIndex == '1' ? '2' : '1';
      if (el.dataset.tabName == 'demand') {
        gaEvent('click on button', 'Payment method — On demand tab', '');
      } else if(el.dataset.tabName == 'subscribe'){
        gaEvent('click on button', 'Payment method — Subscription tab', '');
      }
      initTempStyles(activeIndex);
      document.querySelector('.plans__head-item.active').classList.remove('active');
      this.classList.add('active');
    })
  })

  document.querySelectorAll("._278to li").forEach(function(el, i) {
    el.addEventListener("click", function () {
      if (activeIndex == 2) {
        // addAdvantages();
        if (document.querySelector("._2P5S3").name == 16) {
          document.querySelectorAll('.exluded-trigger').forEach(function (el) {
            el.classList.remove('exluded');
            document.querySelector('.advantage-toggle-text').innerText = 'more than';
          }) 
        } else {
          document.querySelectorAll('.exluded-trigger').forEach(function (el) {
            el.classList.add('exluded');
            document.querySelector('.advantage-toggle-text').innerText = 'up to';
          }) 
        }
      }
    })
  })
  // document.querySelector('body').style.opacity = 1;
  // document.querySelector('body').classList.remove('exp-preloader');
  // document.querySelector('.subscribe__plans-box').style.opacity = 1;

// }, 800);

function initTempStyles() {
  if (document.querySelector("#tempStyles")) {
    document.querySelector("#tempStyles").remove();
  }

  stylesListTemp = `
    ._2OxfV>form:nth-child(${activeIndex}){
      position: static;
      opacity: 1;
      pointer-events: auto;
    }
  `;

  let stylesTemp = document.createElement('style');
  stylesTemp.innerHTML = stylesListTemp;
  stylesTemp.id = 'tempStyles';
  document.body.appendChild(stylesTemp);
}

initTempStyles(activeIndex);


setTimeout(function () {
  // Wrap for advantages (on demand)
  document.querySelector("._2P5S3 ._2My_0").insertAdjacentHTML("beforebegin", "<div class='go-plan-wrap'></div>");
  document.querySelector('.go-plan-wrap').insertAdjacentElement("afterbegin", document.querySelector("._2P5S3 ._2My_0"));
  document.querySelector('.go-plan-wrap').insertAdjacentHTML("afterbegin", advantages);
  activateYearly();
}, 1000);

function addAdvantages() {
  if (!document.querySelector('.plans__box>form:last-child .plan-constructor__advantages')) {
    document.querySelector('.go-plan-wrap').insertAdjacentHTML("afterbegin", advantages);
  }
}

// setTimeout(() => {;
  // let subscribeWrapEl = document.querySelector('.subscribe__plans-box');
  // observer.observe(subscribeWrapEl, {childList: true, subtree: true, characterDataOldValue: true});
// }, 1000);

// let observer = new MutationObserver(cbMutations);


function cbMutations(mutations) {
  for (let mutation of mutations) {
    for(let node of mutation.addedNodes) {
      if (!(node instanceof HTMLElement)) continue;
      // if (node.matches('.plan-constructor.plan-constructor_note-box') && activeIndex == 1) {
      //   activateYearly();
      // }
      document.querySelectorAll("._278to li").forEach(function(el, i) {
        el.addEventListener("click", function () {
          if (activeIndex == 2) {
            // addAdvantages();
            if (document.querySelector("._2P5S3").name == 16) {
              document.querySelectorAll('.exluded-trigger').forEach(function (el) {
                el.classList.remove('exluded');
                document.querySelector('.advantage-toggle-text').innerText = 'more than';
              }) 
            }
          }
        })
      })

      

      // или, может быть, пример кода есть в его поддереве?
      // for(let elem of node.querySelectorAll('pre[class*="language-"]')) {
        // Prism.highlightElement(elem);
      // }
    }
  }

}

function activateYearly() {
  if (document.querySelector('.plan-constructor_note-box')) {
    document.querySelectorAll(".plans__box>form:first-child .offer-row").forEach(function (el, i) {
      let priceEl = el.querySelector('.offer-row__full-price');
      console.log(priceEl);

      let currency = el.querySelector('.offer-row__full-price .d-curr').innerText;
      let price = el.querySelector('.offer-row__full-price').innerText.match(/[\s\d]+/)[0].replaceAll(' ', '');
      
      let pricePerMonth = parseFloat(((price / 12).toFixed(2)).replaceAll(',' , '.'));
      let priceUpdated;
      if (parseInt(priceEl.innerText)) {
        priceUpdated = `${pricePerMonth}&nbsp;${currency} per month `;
      } else {
        priceUpdated = `${currency}&nbsp;${pricePerMonth} per month `;
      }

      let discount;
      switch (i) {
        case 0:
          discount = '14';
          break;
        case 3:
          discount = '16';
          break;
      
        default:
          discount = '15';
          break;
      }
    
      // if (!el.classList.contains('offer-row_active')) {
        // priceUpdated += `<span class='price-capt'>Save ${discount}%</span>`;
      // }

      if (el.querySelector('.offer-row__popular')) {
        el.querySelector('.offer-row__amount').insertAdjacentElement('beforeend', el.querySelector('.offer-row__popular'));
      }

      priceEl.innerHTML = priceUpdated;
    })
  }
}

