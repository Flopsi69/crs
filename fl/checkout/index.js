if (!document.querySelector("#go-checkout-styles")) {
  function gaEvent(action) {
    try {
      dataLayer.push({
        "event": "event-to-ga",
        "eventCategory":  "Exp - Protection package",
        "eventAction": action,
      });
    } catch (e) {}
  };
  
  (function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:1885763,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
  })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
  hj('trigger', 'protection_package');
  

/* STYLES insert start */
  
  let stylesList = `
  .go-protection {
    border: 1px solid #EBC569;
    padding: 0 25px 10px;
    margin-bottom: 35px;
    display: none;
  }
  .go-protection__head {
    text-align: center;
    line-height: 1.4;
    font-size: 12px;
    padding: 15px 0;
    font-family: DM Sans;
  }
  .go-protection__title-caption {
    font-size: 14px;
  }
  .go-protection__title {
    font-weight: 600;
    margin: 4px 0;
    letter-spacing: 0.025em;
    text-transform: uppercase;
  }
  .go-protection__events {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
  }
  .go-protection__event-add {
    border: 1px solid #000000;
    background: transparent;
    text-align: center;
    font-weight: 400;
    font-size: 12px;
    line-height: 1;
    letter-spacing: 0.025em;
    text-transform: uppercase;
    color: #000;
    padding: 8px 10px
  }
  .go-protection__event-add:hover {
    padding: 8px 10px
  }
  .go-protection__details-caption {
    text-align: center;
    font-size: 14px;
    font-family: DM Sans;
  }
  .go-protection__event-decline {
    color: rgba(0, 0, 0, 0.5);
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    line-height: 1.2;
  }
  .go-protection__list {
    max-width: 240px;
    font-size: 11px;
    margin: auto;
    line-height: 1.6;
  }
  .go-protection__item {
    position: relative;
    margin-top: 12px;
    padding-left: 25px;
  }
  .go-protection__item:before {
    content: '';
    position: absolute;
    left: 0;
    top: 2px;
    background: url(https://flopsi69.github.io/crs/fl/checkout/check.svg) center no-repeat;
    width: 15px;
    height: 15px;
  }
  .go-protection__details-terms {
    text-align: center;
    font-size: 9px;
    margin-top: 20px;
    color: rgba(0, 0, 0, 0.5);
    line-height: 1.1;
  }
  .go-protection__details-terms a {
    color: rgba(0, 0, 0, 0.5);
    text-decoration: underline;
  }
  .go-protection__details-head {
    text-align: center;
  }
  .go-protection__details-head img {
    transition: .35s;
  }
  .go-protection__details-head.activated img {
    transform: rotate(180deg);
  }
  .go-protection__details-body {
    display: none;
    padding-bottom: 15px;
  }
  `;

  // connect to DOM
  let styles = document.createElement('style');
  styles.id = "go-checkout-styles";
  styles.innerHTML = stylesList;
  document.body.appendChild(styles);
  /* STYLES insert end */
}

gaEvent("loaded");

/*HTML insert start */
var goProtection = `
  <div class="go-protection">
    <div class="go-protection__head">
      <div class="go-protection__title-caption">Recommended:</div>
      <div class="go-protection__title">Add Protection package </div>
      <div class="go-protection__title-caption">Safety protection for only €29</div>
    </div>

    <div class="go-protection__events">
      <div class="go-protection__event-add btn">Add to Cart</div>
      <div class="go-protection__event-decline">No, thanks</div>
    </div>

    <div class="go-protection__details">
      <div class="go-protection__details-body">
        <div class="go-protection__details-caption">Wear your watch with confidence:</div>

        <div class="go-protection__list">
          <div class="go-protection__item"><strong>2 Year Coverage for accidental demage.</strong> We will replace your watch for free, no questions asked.</div>
          <div class="go-protection__item"><strong>Free shipping on all repairs</strong> with no added or hidden fees</div>
          <div class="go-protection__item"><strong>Priority support</strong></div>
          <div class="go-protection__item"><strong></strong>Fully transferable with gifts</div>
        </div>
        
        <div class="go-protection__details-terms">See <a href="https://shop.filippoloreti.com/pages/terms-conditions">Terms and conditions</a> for details, exclusions</div>


      </div>

      <div class="go-protection__details-head">
        <img src='https://flopsi69.github.io/crs/fl/checkout/dropdown.svg'>
      </div>
    </div>

  </div>
  `;
/*HTML insert end */
  

let observer = new MutationObserver(mutations => {

  for(let mutation of mutations) {
    // проверим новые узлы, есть ли что-то, что надо подсветить?

    for(let node of mutation.addedNodes) {
      // отслеживаем только узлы-элементы, другие (текстовые) пропускаем
      if (!(node instanceof HTMLElement)) continue;
      if (node.classList.contains("cart__checkout") && !document.querySelector("#CartContainer [data-variant-id='32994782675029']")) {
        document.querySelector(".drawer__cart .drawer__inner").insertAdjacentHTML("beforeend", goProtection);
        $(".go-protection__details-head").on("click", function () {
          $(this).toggleClass("activated");
          $(this).siblings().slideToggle();
        });
    
        $('.go-protection__details-terms a').on("click", function (e) {
          gaEvent("click on No thanks");
        })
    
        $(".go-protection__event-add").on("click", function (e) {
          e.preventDefault();
          gaEvent("click on Add to cart");
          var acsCart = [];
          var variant = {};
          variant.id = 32994782675029;
          variant.qty = 1;
          acsCart.push(variant);
          if (acsCart.length > 0) {
            MGUtil.data = acsCart;
            MGUtil.total = MGUtil.data.length;
            MGUtil.action = 'add';
            MGUtil.recursive();
          }
        })
    
        $(".go-protection__event-decline").on("click", function (e) {
          e.preventDefault();
          gaEvent("click on No thanks");
          $(".go-protection").slideToggle(300, function () {
            $(".go-protection").remove();
          })
        })

        $(".go-protection").delay(1500).slideToggle();
      }
    }
  }

});

let demoElem = document.getElementById('CartContainer');

observer.observe(demoElem, {childList: true, subtree: true});