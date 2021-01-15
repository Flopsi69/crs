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
  .plans__container {
    background-color: #fff;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,.08), 0 0 1px 0 rgba(0,0,0,.16);
    max-width: 950px;
    width: 100%;
    margin: auto;
    border-radius: 8px;
    z-index: 1;
  }
  .subscribe_upgrade .subscribe__plans-box .plans__container {
    max-width: 950px;
    min-height: 635px;
  }
  .plans__head {
    display: flex;
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
  .mixed-plans-constructor__label {
    display: none;
  }
  .plan-constructor {
    box-shadow: none;
  }
  .plan-constructor__subproducts-box .label-save {
    font-size: 15px;
    padding: 5px 12px;
    border-radius: 20px;
    margin-left: 0;
    top: -3px;
  }
  .tabs-switcher__label {
    font-size: 20px;
  }
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
  .plan-constructor_ahead .plan-constructor__buy, .plan-constructor__buy {
    height: 62px;
    border-radius: 50px;
    max-width: 385px;
    width: 100%;
  }
  .subscribe_upgrade .subscribe__group-content {
    margin-bottom: 20px;
  }
  .tabs-switcher__switcher {
    margin: 0 7px;
    transform: scale(1.2);
  }
  .plans__box>form {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }
  .plans__box>form.active {
    position: static;
    opacity: 1;
    pointer-events: auto;
  }
  .plan-constructor:not(.plan-constructor_ahead):not(.plan-constructor_focused-btn) .plan-constructor__buy {
    color: #fff;
    border: none;
    background-color: #4792de;
  }
  .plan-constructor:not(.plan-constructor_ahead):not(.plan-constructor_focused-btn) .plan-constructor__buy:hover {
    background-color: #3792ee;
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
`;

// .offer-row__full-price .price-capt {
//   font-size: 11px;
//   line-height: 13px;
//   color: #696969;
//   font-weight: 400;
//   margin-top: 2px;
// }
// .offer-row__full-price .price-capt-old {
//   text-decoration: line-through;
// }
// .offer-row__full-price .price-capt-new {
//   font-weight: bold;
// }
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
        <li class="plan-constructor__advantage-item"><i class="plan-constructor__advantage-icon icon icon-ok icon-ok-blue"></i>Printing rights - <strong>more than</strong> 500,000 copies</li>
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

setTimeout(() => {
  document.querySelector(".plans__container ").insertAdjacentHTML("afterbegin", plansHeader);

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
  document.querySelector('.subscribe__plans-box').style.opacity = 1;

}, 800);

function initTempStyles() {
  if (document.querySelector("#tempStyles")) {
    document.querySelector("#tempStyles").remove();
  }

  stylesListTemp = `
    .plans__box>form:nth-child(${activeIndex}){
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


setTimeout(addAdvantages, 1000);

function addAdvantages() {
  if (!document.querySelector('.plans__box>form:last-child .plan-constructor__advantages')) {
    document.querySelector('.plans__box>form:last-child .plan-constructor__offers-cell').insertAdjacentHTML("beforebegin", advantages);
  }
}

// console.log('observer');
let observer = new MutationObserver(cbMutations);
console.log(observer);

function cbMutations(mutations) {
  console.log(33);
  console.log(mutations);
  for (let mutation of mutations) {
    for(let node of mutation.addedNodes) {
      if (!(node instanceof HTMLElement)) continue;
      if (node.matches('.plan-constructor.plan-constructor_note-box') && activeIndex == 1) {

        document.querySelectorAll(".plans__box>form:first-child .offer-row").forEach(function (el) {
          let priceEl = el.querySelector('.offer-row__full-price');
          let currency = el.querySelector('.offer-row__full-price .d-curr').innerText;
          let price = el.querySelector('.offer-row__full-price').innerText.match(/[\s\d]+/)[0].replace(' ', '');
          console.log(price);
          let pricePerMonth = parseFloat(((price / 12).toFixed(2)).replace(',' , '.'));
          let priceUpdated;
          if (parseInt(priceEl.innerText)) {
            priceUpdated = `${pricePerMonth}&nbsp;${currency} per month `;
          } else {
            priceUpdated = `${currency}&nbsp;${pricePerMonth} per month `;
          }

          // <span class='price-capt'>(&nbsp;billed <span class='price-capt-old'>${currency}120</span> <span class='price-capt-new'> ${currency}${price}</span>&nbsp;)</span>

          if (el.querySelector('.offer-row__popular')) {
            el.querySelector('.offer-row__amount').insertAdjacentElement('beforeend', el.querySelector('.offer-row__popular'));
          }

          priceEl.innerHTML = priceUpdated;
        })
      console.log(node);
      }

      
      if (node.matches('.plan-constructor') && activeIndex == 2) {
        addAdvantages();
        console.log(node);
        if (node.name == 16) {
          document.querySelectorAll('.exluded-trigger').forEach(function (el) {
            el.classList.remove('exluded');
          }) 
        }
      }

      // или, может быть, пример кода есть в его поддереве?
      // for(let elem of node.querySelectorAll('pre[class*="language-"]')) {
        // Prism.highlightElement(elem);
      // }
    }
  }

}

let subscribeWrapEl = document.querySelector('.subscribe__plans-box');

observer.observe(subscribeWrapEl, {childList: true, subtree: true, characterDataOldValue: true});

