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
      margin: 0 -15px;
  }
}
.slick-current .go-option-inner{
  background: #fff;
  border: 1px solid #373737;
}
.slick-arrow.hs-loading-btn {
  position: absolute;
}
.product-form .swatch .swatch-element {
  display: flex;
  margin: 4px;
}
.product-form {
  margin: 0;
}
.go-slider {
  padding: 0 10px;
}
.go-slider .slick-arrow {
  background: none;
  height: 30px;
  width: 20px;
}
.go-slider .slick-prev {
  left: -13px!important;
}
.go-slider .slick-next{
  right: -13px!important;
}
.go-slider .slick-prev:before, .go-slider .slick-next:before {
  font-size: 34px;
}
.product-form .swatch .swatch-element:hover .tooltip-label {
  display: none;
}
.go-options-slider {
  margin-top: 4px;
}

`;

// connect to DOM
let styles = document.createElement('style');
styles.innerHTML = stylesList;
document.body.appendChild(styles);
/* STYLES insert end */


/*HTML insert start */
const swatchEl = document.querySelector(".swatch");
swatchEl.insertAdjacentHTML("beforeend", "<div class='swatch__list go-slider'></div>");
document.querySelectorAll(".swatch-element").forEach(function (el) {
  document.querySelector(".swatch__list").insertAdjacentElement("beforeend", el);
})

$(".swatch__list").slick({
  slidesToShow: 5,
})

$(".slick-arrow").on("click", function (e) {
  e.preventDefault();
  e.stopPropagation();
})

document.querySelectorAll(".mw-options-container .mw-option-select").forEach(function (el) {
  let labelText = el.querySelector("label").innerText.toLocaleLowerCase();
  let selectEl = el.querySelector("select");
  selectEl.style.display = "none";
  selectEl.insertAdjacentHTML("beforebegin", "<div class='go-options-slider go-slider'></div>");
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
  })

   // size, storage, mattress, headboard, reinforce, headboard height
})


let deliveryEl = searchText($(".page-width h2"), "delivery");
if (deliveryEl) {
  let deliveryBlockEl = extractHtmltoBlock(deliveryEl);
}

let returnEl = searchText($(".page-width h2"), "return");
if (returnEl) {
  let reutrnBlockEl = extractHtmltoBlock(returnEl);
}

let dimensions = searchText($(".page-width h4"), "dimensions");
if (returnEl) {
  let reutrnBlockEl = extractHtmltoBlock(returnEl);
}



function searchText(list, searchWord) {
  let findedEl;
  list.each(function (i, el) {
    if ($(el).text().trim().split(" ")[0].toLocaleLowerCase() != searchWord) return;
    findedEl = el;
    return false;
  })
  
  return findedEl ? findedEl : false;
}

function extractHtmltoBlock(element) {
  let blockEl = document.createElement("div");
  blockEl.classList.add("go-accordion");
  blockEl.insertAdjacentHTML("beforeend", `<h2 class='go-accordion__head'>${element.innerText}</h2>`);
  blockEl.insertAdjacentHTML("beforeend", `<div class='go-accordion__body'></div>`);
  let currentEl = element;
  while (currentEl) {
    currentEl = currentEl.nextElementSibling;

    if (!currentEl) break;

    let currentElTag = currentEl.tagName.toLocaleLowerCase();

    if (currentElTag == "div" || currentElTag == "ul" || currentElTag == "span" || currentElTag == "p") {
      blockEl.querySelector(".go-accordion__body").insertAdjacentElement("beforeend", currentEl.cloneNode(true));
    } else {
      break;
    }
  }
  console.log(blockEl);
  return blockEl;
}


/* HTML insert end */