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

// grid product-single

/* STYLES insert start */
let stylesList = `
.mw-product-options {
  min-width: 0;
}
.product-form .swatch .swatchInput+.swatchLbl.color.medium {
  width: 100%;
  height: 55px;
}
.go-option-inner {
  text-align: center;
  font-size: 9px;
  line-height: 13px;
  background: #FAFAFA;
  border-radius: 4px;
  padding: 18px 15px;
}
.go-option-slide {
  padding: 0 10px;
  width: calc(100vw/3);
}
@media only screen and (max-width: 767px) {
  .product-template__container .product-row {
      margin: 0;
  }
}
.slick-current .go-option-inner{
  background: #fff;
  border: 1px solid #373737;
}
.slick-arrow.hs-loading-btn {
  position: absolute;
}
`;

// connect to DOM
let styles = document.createElement('style');
styles.innerHTML = stylesList;
document.body.appendChild(styles);
/* STYLES insert end */


/*HTML insert start */
// const swatch = `
//   <div class="swatch__list"></div>
// `;

const swatchEl = document.querySelector(".swatch");
swatchEl.insertAdjacentHTML("afterbegin", "<div class='swatch__list'></div>");
document.querySelectorAll(".swatch-element").forEach(function (el) {
  document.querySelector(".swatch__list").insertAdjacentElement("beforeend", el);
})

$(".swatch__list").slick({
  slidesToShow: 5,
})

document.querySelectorAll(".mw-options-container .mw-option-select").forEach(function (el) {
  let labelText = el.querySelector("label").innerText.toLocaleLowerCase();
  let selectEl = el.querySelector("select");
  selectEl.style.display = "none";
  selectEl.insertAdjacentHTML("beforebegin", "<div class='go-options-slider'></div>");
  Array.from(selectEl.options).forEach(function (option, i) {
    if (i == 0) return;
    let optionTextRaw = option.innerText.match(/(.*)\s\((.*)\)/);
      let optionText = optionTextRaw ? optionTextRaw[1] : option.innerText;
      let optionPrice = optionTextRaw ? optionTextRaw[2] : "";
    let slide = `
      <div class='go-option-slide'>
        <div class='go-option-inner'>
          <div class='go-option-icon'>Img</div>
          <div div class='go-option-text'>${optionText}</div>
          <div class='go-option-price'>${optionPrice}</div>
        </div>
      </div>
    `;
    el.querySelector(".go-options-slider").insertAdjacentHTML("beforeend", slide);
  })

  $(el.querySelector(".go-options-slider")).slick({
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
  })

  $(".slick-arrow").on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    console.log("clicked")
  })

  // size, storage, mattress, headboard, reinforce, headboard height
})


/* HTML insert end */