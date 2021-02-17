// function gaEvent(action, label) {
//   try {
//     dataLayer.push({
//       "event": "event-to-ga",
//       "eventCategory":  "Exp - pl_benefits",
//       "eventAction": action,
//       "eventLabel": label
//     });
//   } catch (e) {}
// };

// setTimeout(() => {
//   hj('trigger', 'pl_benefits');
// }, 2000);
// gaEvent("loaded", "");

// window.dataLayer = window.dataLayer || [];


/* STYLES insert start */
let stylesList = `
  .go-protection {
    border: 1px solid #EBC569;
    padding: 0 25px 22px;
    margin-bottom: 35px;
  }
  .go-protection__head {
    text-align: center;
    line-height: 1.4;
    font-size: 12px;
    padding: 15px 0;
    font-family: DM Sans;
  }
  .go-protection__title-caption {
    font-size: 12px;
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
    margin-bottom: 20px;
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
    margin-top: 12px;
  }
  .go-protection__details-terms {
    text-align: center;
    font-size: 10px;
    margin-top: 20px;
    color: rgba(0, 0, 0, 0.5);
  }
`;


// connect to DOM
let styles = document.createElement('style');
styles.innerHTML = stylesList;
document.body.appendChild(styles);
/* STYLES insert end */


/*HTML insert start */
const goProtection = `
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
      <div class="go-protection__details-head"></div>
      <div class="go-protection__details-body">
        <div class="go-protection__details-caption">Wear your watch with confidence:</div>

        <div class="go-protection__list">
          <div class="go-protection__item"><strong>2 Year Coverage for accidental demage.</strong> We will replace your watch for free, no questions asked.</div>
          <div class="go-protection__item"><strong>Free shipping on all repairs</strong> with no added or hidden fees</div>
          <div class="go-protection__item"><strong>Priority support</strong></div>
          <div class="go-protection__item"><strong></strong>Fully transferable with gifts</div>
        </div>
        
        <div class="go-protection__details-terms">
          See <a href="https://shop.filippoloreti.com/pages/terms-conditions">Terms and conditions</a> for details, exclusions
        </div>
      </div>
    </div>

  </div>
`;

document.querySelector(".drawer__cart .drawer__inner").insertAdjacentHTML("beforeend", goProtection);



/* HTML insert end */