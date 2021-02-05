function gaEvent(action, label) {
  try {
    dataLayer.push({
      "event": "event-to-ga",
      "eventCategory":  "Exp - pl_benefits",
      "eventAction": action,
      "eventLabel": label
    });
  } catch (e) {}
};

setTimeout(() => {
  hj('trigger', 'pl_benefits');
}, 2000);
gaEvent("loaded", "");

window.dataLayer = window.dataLayer || [];
dataLayer.push({
'event': 'event-to-ga',
'eventCategory': 'Exp - pl_benefits',
'eventAction': 'loaded'
});

/* STYLES insert start */
let stylesList = `
  .go-benefit {
    text-align: center;
    background: #FFFFFF;
    border: 1px solid #B38D0A;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 10px 10px 25px;
    margin: 25px 0;
    width: 100%;
  }
  .go-benefit_first {
    margin-top: 0;
  }
  .go-benefit__title {
    font-size: 18px;
    line-height: 22px;
    color: #000000;
  }
  .go-benefit__title-last {
    font-weight: 400;
  }
  .go-benefit__list {
    display: flex;
    justify-content: space-between;
    margin: 0 -10px;
    margin-top: 12px;
  }
  .go-benefit__item {
    padding: 0 10px;
    flex: 1;
  }
  .go-benefit__caption {
    font-size: 11px;
    line-height: 14px;
    color: #000;
  }
  .go-benefit__caption-last {
    margin-top: 13px;
    text-align: center;
    font-size: 14px;
    line-height: 17px;
  }
  .go-benefit__image {
    position: relative;
    box-shadow: 0px 3px 4px rgba(0,0,0,0.3);
    border: 1px solid black;
    width: 40px;
    height: 40px;
    display: block;
    margin: 0 auto 15px;
    display: block;
    background: #FFFFFF;
    border-radius: 50%;
  }
  .go-benefit__image img {
    position: absolute;
    top: 50%;
    left: 50%;
    max-width: 21px;
    max-height: 27px;
    transform: translate(-50%, -50%);
  }
`;

$(document).on("click", ".grid-product", function() {
  gaEvent("click", "Item clicked on PL");
})

// connect to DOM
let styles = document.createElement('style');
styles.innerHTML = stylesList;
document.body.appendChild(styles);
/* STYLES insert end */


/*HTML insert start */
const benefitOne = `
  <div class="go-benefit go-benefit_first">
    <div class="go-benefit__title">100% Safe to buy</div>
    <div class="go-benefit__list">
      <div class="go-benefit__item">
        <div class="go-benefit__image">
          <img src="https://svgshare.com/i/THM.svg">
        </div>
        <div class="go-benefit__caption">Free shipping</div>
      </div>

      <div class="go-benefit__item">
        <div class="go-benefit__image">
          <img src="https://svgshare.com/i/TJX.svg">
        </div>
        <div class="go-benefit__caption">Easy 90-days returns</div>
      </div>

      <div class="go-benefit__item">
        <div class="go-benefit__image">
          <img src="https://svgshare.com/i/TJe.svg">
        </div>
        <div class="go-benefit__caption">10-year warranty</div>
      </div>
    </div>
  </div>
`;

const benefitTwo = `
  <div class="go-benefit">
    <div class="go-benefit__title">Features you will like</div>
    <div class="go-benefit__list">
      <div class="go-benefit__item">
        <div class="go-benefit__image">
          <img src="https://svgshare.com/i/TJ9.svg">
        </div>
        <div class="go-benefit__caption">Water resistantce
        to 100 meters</div>
      </div>

      <div class="go-benefit__item">
        <div class="go-benefit__image">
          <img src="https://svgshare.com/i/THi.svg">
        </div>
        <div class="go-benefit__caption">Saphire coated mineral glass</div>
      </div>

      <div class="go-benefit__item">
        <div class="go-benefit__image">
          <img src="https://svgshare.com/i/TJf.svg">
        </div>
        <div class="go-benefit__caption">Luminiscent details</div>
      </div>
    </div>
  </div>
`;

const benefitThree = `
  <div class="go-benefit">
    <div class="go-benefit__title">No “luxury” markups on highest-quality materials</div>
    <div class="go-benefit__caption go-benefit__caption-last">While major brands in watch industry markup their products by 8x-16x of the actual cost, We at Filippo Loreti wanted to make luxury watches accessible to anyone</div>
  </div>
`;

setTimeout(() => {
  // document.querySelector('.product-list').insertAdjacentHTML("afterbegin", benefitOne);
  $('.product-list .grid-product').each(function (i, el) {
    if (i == 3) {
      el.insertAdjacentHTML("afterend", benefitOne);
    }
    if (i == 7) {
      el.insertAdjacentHTML("afterend", benefitTwo);
      return false;
    }
    if (i == 11) {
      el.insertAdjacentHTML("afterend", benefitThree);
      return false;
    }
  })
}, 2500);


/* HTML insert end */