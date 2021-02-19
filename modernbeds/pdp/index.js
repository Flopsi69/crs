try {
  (function(h,o,t,j,a,r){
          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
          h._hjSettings={hjid:2196497,hjsv:6};
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);
  })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
  window.hj = window.hj || function(){(hj.q = hj.q || []).push(arguments)};
          hj('trigger', 'pdp_product_options');
  }
  catch(e) {}

function gaEvent(category, action, label = "") {
  try {
    dataLayer.push({
      "event": "event-to-ga",
      "eventCategory":  category,
      "eventAction": action,
      "eventLabel": label
    });
  } catch (e) {}
};

gaEvent("Exp - PDP product options", "loaded");


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
  display: flex;
  flex-flow:column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 5px;
  font-size: 9px;
  line-height: 13px;
  background: #ece5e5;
  border-radius: 4px;
  border: 1px solid transparent;
  width: 90px;
  height: 90px;
  opacity: .4;
}
.go-option-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}
.go-option-text__reinforce {
  font-size: 24px;
  line-height: 1;
  margin-bottom: 8px;
}
.go-option-slide {
  margin: 0 7px;
}
.go-option-price {
  height: 15px;
  padding-top: 2px;
}
@media only screen and (max-width: 767px) {
  .product-template__container .product-row {
      margin: 0 -15px;
  }
}
.slick-current .go-option-inner{
  background: #fff;
  border: 1px solid #373737;
  opacity: 1;
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
.go-option-icon img {
  margin: 0 auto 5px;
  height: 35px;
}
.go-accordion {
  position: relative;
  background: #FAFAFA;
}
.go-accordion__body {
  display: none;
  padding: 15px;
}
.go-accordion__body h2 {
  font-size: 1.2em;
}
.go-accordion__body {
  font-size: 14px;
}
.go-accordion__block + .go-accordion__block {
  margin-top: 20px;
}
.go-accordion + .go-accordion {
  margin-top: 10px;
}
.go-accordion__head {
  position: relative;
  background: #FAFAFA;
  border-radius: 4px;
  font-size: 15px;
  line-height: 22px;
  padding: 15px 10px;
  color: #373737;
  font-weight: 500;
}
.go-accordion__head:after {
  content: "";
  position: absolute;
  right: 15px;
  width: 15px;
  top: 14px;
  height: 15px;
  transform: rotate(-45deg);
  transition: .35s;
  border: 2px solid transparent;
  border-left-color: rgba(55, 55, 55, 0.8);
  border-bottom-color: rgba(55, 55, 55, 0.8);
}
.activeTab .go-accordion__head:after {
  border-color: transparent;
  border-right-color: rgba(200, 200, 200, 0.8);
  border-top-color: rgba(200, 200, 200, 0.8);
  top: 22px;
}
.go-tabs {
  margin-bottom: 30px;
}
.go-modal__wrap {
  position: fixed;
  dipslay: none;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: rgba(0,0,0,.7);
  z-index: 9999999999;
  margin: auto;
  display: none;
}

.go-modal__wrap.go-modal__wrap-active {
  display: flex;
}

.go-modal {
  position: relative;
  display: none;
  background-color: #fff;
  max-width: 90%;
  max-height: 90%;
  padding: 25px 15px 15px;
  box-shadow: 0px 4px 24px rgb(55 55 55 / 10%);
  border-radius: 4px;
  overflow-y: auto;
  margin: auto;
}
.go-modal-close {
  width: 30px;
  height: 30px;
  position: fixed;
  right: 10px;
  top: 15px;
  border: 1px solid #4c4c4c;
  border-radius: 50%;
}
.go-modal.go-modal-active {
  display: block;
}
.go-modal p, .go-modal ul {
  font-size: 13px;
}
.go-modal ul + p {
  margin-top: 15px;
}

.go-modal img {
    margin-top: 15px;
    height: auto;
}
.go-modal h4 {
  font-size: font-size: 20px;;
}
.go-modal-trigger {
  font-size: 14px;
  margin-bottom: 15px;
  font-weight: 500;
  text-decoration: underline;
  line-height: 1;
}
.go-modal-trigger + .go-modal-trigger {
  margin-top: 10px
}
`;

const REPO_DIR = "https://flopsi69.github.io/crs/modernbeds/pdp/";

// connect to DOM
let styles = document.createElement('style');
styles.innerHTML = stylesList;
document.body.appendChild(styles);
/* STYLES insert end */


/*HTML insert start */
setTimeout(() => {
  init();
}, 1000);


function init() {
  let observer = new MutationObserver(mutations => {
    for(let mutation of mutations) {
      // console.log(mutation);
      // проверим новые узлы, есть ли что-то, что надо подсветить?
      // if (mutation.target.id !== "deliverymessage" && !mutation.target.classList.contains("clearpay-instalments")) {
        // console.log(mutation);
        for(let node of mutation.addedNodes) { 
          // отслеживаем только узлы-элементы, другие (текстовые) пропускаем
          if (!(node instanceof HTMLElement)) continue;

          if (node.classList.contains("mw-options-container")) {
            console.log('yess');
            setTimeout(() => {
              initOptionsSliders();
            }, 1000);
          } 
          // проверить, не является ли вставленный элемент примером кода
          // if (node.matches('pre[class*="language-"]')) {
            // Prism.highlightElement(node);
          // }
    
          // или, может быть, пример кода есть в его поддереве?
          // for(let elem of node.querySelectorAll('pre[class*="language-"]')) {
            // Prism.highlightElement(elem);
          // }
        }
      // }
    }
  
  });
  initOptionsSliders();
  
  
  let demoElem = document.querySelector('.product-form');
  
  observer.observe(demoElem, {childList: true, subtree: true});


  initColorSlider();

  $(".go-option-slide").on("click", function () {
    let slideLabelName = $(this).closest(".go-options-slider").siblings("label").text();
    gaEvent("PDP", "click on select input — " + slideLabelName, "Details about product'");
  })

  document.querySelector(".std").insertAdjacentHTML("beforebegin", "<div class='go-tabs'></div>");
  let tabs = document.querySelector(".go-tabs");


  let deliveryEl = searchText($(".page-width h2"), "delivery");
  let deliveryBlockEl = extractHtmltoBlock(deliveryEl, true);
  deliveryBlockEl.classList.add("go-accordion__block");

  let returnEl = searchText($(".page-width h2"), "return");
  let returnBlockEl = extractHtmltoBlock(returnEl, true);
  returnBlockEl.classList.add("go-accordion__block");

  // return and delivery
  let returnAndDeliveryTab = createTab("Delivery & Returns", [deliveryBlockEl, returnBlockEl]);
  returnAndDeliveryTab.classList.add("go-return-delivery");
  tabs.insertAdjacentElement("beforeend", returnAndDeliveryTab);

  // mattress
  let mattressInfo = document.querySelector("#product_tabs_pan_new_15");
  let mattressTab = createTab("Mattress Information", [mattressInfo]);
  mattressTab.classList.add("go-tab-mattress");
  document.body.insertAdjacentHTML("beforeend", "<div class='go-modal__wrap'></div>");
  mattressTab.querySelectorAll("h4").forEach((el, i) => {
    if (el.innerText.trim() && el.innerText.toLocaleLowerCase() !== 'features:') {
      let link = document.createElement("div");
      link.classList.add("go-modal-trigger");
      link.dataset.modalTarget = i;
      link.innerText = el.innerText;
      link.addEventListener("click", function(){
        if (document.querySelector(".go-modal.go-modal-active")) {
          document.querySelector(".go-modal.go-modal-active").classList.remove("go-modal-active");
        }
        $(".go-modal-" + this.dataset.modalTarget).addClass("go-modal-active");
        $(".go-modal__wrap").addClass("go-modal__wrap-active");
      })
      mattressTab.querySelector(".go-accordion__body").insertAdjacentElement("beforeend", link);
      let mattressSubblock = extractHtmltoBlock(el, true);
      mattressSubblock.classList.add("go-modal");
      mattressSubblock.classList.add("go-modal-"+i);
      mattressSubblock.insertAdjacentHTML("afterbegin", `<img class='go-modal-close' src='${REPO_DIR}close.png'/>`)
      mattressSubblock.querySelector('.go-modal-close').addEventListener("click", function (e) {
        e.preventDefault();
        gaEvent("Exp - PDP product options", "click X to close the popup - Mattress Information");
        $(".go-modal__wrap.go-modal__wrap-active").removeClass("go-modal__wrap-active");
        $(".go-modal.go-modal-active").removeClass("go-modal-active");
      })
      document.querySelector(".go-modal__wrap").insertAdjacentElement("beforeend", mattressSubblock);
    }
  });
  mattressTab.querySelector('#product_tabs_pan_new_15')?.remove();
  tabs.insertAdjacentElement("beforeend", mattressTab);


  $(".go-modal-trigger").on("click", function () {
    gaEvent("Exp - PDP product options", "click on link - "+ $(this).text(), "Expand Mattress Information");
  })

  // other
  let otherInfo = document.querySelector("#product_tabs_pan_new_14");
  document.querySelector("div.std").insertAdjacentElement("beforeend", otherInfo);

  // dimensions
  let dimensionsInfo = document.querySelector("#feat-t4-table");
  let dimensionsTab = createTab("Dimensions", [dimensionsInfo]);
  let dimensionsText = searchText($(".page-width h4"), "dimensions");
  dimensionsTab.querySelector(".go-accordion__body").insertAdjacentElement("afterbegin", dimensionsText);
  dimensionsTab.classList.add("go-tab-dimensions");
  tabs.insertAdjacentElement("beforeend", dimensionsTab);

}

function initOptionsSliders() {
  document.querySelectorAll(".mw-options-container .mw-option-select").forEach(function (el) {
    let labelText = el.querySelector("label").innerText.toLocaleLowerCase();
    let selectEl = el.querySelector("select");
    $(selectEl).val(selectEl.options[1].value);
    $(selectEl).trigger("change");
    // selectEl.options.selectedIndex = 1;
    selectEl.style.display = "none";
    selectEl.insertAdjacentHTML("beforebegin", "<div class='go-options-slider go-slider'></img>");
    Array.from(selectEl.options).forEach(function (option, i) {
      if (i == 0) return;
      let optionTextRaw = option.innerText.match(/(.*)\s\((.*)\)/);
      let optionText = optionTextRaw ? optionTextRaw[1] : option.innerText;
      let optionPrice = optionTextRaw ? optionTextRaw[2] : "";
      let optionVal = option.value;
      let optionImage;
      let additionalClass = "";
      switch (labelText.toLocaleLowerCase()) {
        case "size":
          optionImage = setSize(optionVal);
          break;
        case "storage":
          optionImage = setStorage(optionVal);
          break;
        case "mattress":
          optionImage = setMattress(optionVal);
          break;
        case "headboard buttons":
          optionImage = setButton(optionVal);
          break;
        case "reinforce base":
          optionImage = setSize(optionVal);
          additionalClass = "go-option-text__reinforce";
          break;
        case "headboard height":
          optionImage = setHb(optionVal);
          break;
      
        default:
          console.log("???", labelText);
          break;
      }
      let slide;
      if (optionImage) {
        let optionImageUrl = REPO_DIR + optionImage;
        slide = `
        <div class='go-option-slide' data-slide-key='${i}'>
          <div class='go-option-inner'>
            <div class='go-option-icon'><img src='${optionImageUrl}' /></div>
            <div div class='go-option-text'>${optionText}</div>
            <div class='go-option-price'>${optionPrice}</div>
          </div>
        </div>
      `;
      } else {
        slide = `
        <div class='go-option-slide' data-slide-key='${i}'>
          <div class='go-option-inner'>
            <div div class='go-option-text ${additionalClass}'>${optionText}</div>
            <div class='go-option-price'>${optionPrice}</div>
          </div>
        </div>
      `;
      }
      el.querySelector(".go-options-slider").insertAdjacentHTML("beforeend", slide);
    })
  
    el.querySelectorAll(".go-option-slide").forEach((slide, i) => {
      slide.addEventListener("click", function () {
        let slideKey = this.dataset.slideKey;
        $(selectEl).val(selectEl.options[slideKey].value);
        $(selectEl).trigger("change");
        // selectEl.options.selectedIndex = slideKey;
      })
    }) 
      
  
    if (selectEl.options.length - 1 < 3) {
      $(el.querySelector(".go-options-slider")).slick({
        slidesToShow: 2,
        centerMode: true,
        // variableWidth: true,
        focusOnSelect: true
      })
    } else {
      $(el.querySelector(".go-options-slider")).slick({
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        focusOnSelect: true
      })
    }
  
    $(el.querySelector(".go-options-slider")).on('afterChange', function(event, slick, currentSlide){
      // selectEl.options.selectedIndex = currentSlide+1;
      $(selectEl).val(selectEl.options[currentSlide + 1].value);
      $(selectEl).trigger("change");
    })
  
    $(".slick-arrow").on("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
    })

  })
}

function initColorSlider() {
  const swatchEl = document.querySelector(".swatch");
  swatchEl.insertAdjacentHTML("beforeend", "<div class='swatch__list go-slider'></div>");
  document.querySelectorAll(".swatch-element").forEach(function (el) {
    document.querySelector(".swatch__list").insertAdjacentElement("beforeend", el);
  })

  initSlider();

  function initSlider() {
    try {
      $(".swatch__list").slick({
        slidesToShow: 5,
        infinite: false,
      })
      $(".slick-arrow").on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
      })
    } catch (error) {
      setTimeout(initSlider, 1000);
    }
  }
}

function setSize(size) {
  let image;
  switch (size.trim()) {
    case "2FT - Small Single":
      image = "size-1.svg"
      break;
    
    case "3FT - Single":
      image = "size-2.svg"
      break;
    
    case "4FT - Small Double":
      image = "size-3.svg"
      break;
  
    case "4FT6 - Double":
      image = "size-4.svg"
      break;
  
    case "5FT - King":
      image = "size-5.svg"
      break;

    case "6FT - Super King":
      image = "size-6.svg"
      break;
  
    default:
      console.log("no size");
      break;
  }
  return image;
}

function setStorage(size) {
  let image;
  switch (size.trim()) {
    case "2 Drawers Same Side":
      image = "storage-2.svg"
      break;

    default:
      image = "storage-1.svg"
      break;
  }
  return image;
}

function setMattress(size) {
  let image;
  switch (size.trim()) {
    case "No mattress":
      image = "mattress-1.svg"
      break;
    
    case "Deluxe Mattress":
      image = "mattress-2.svg"
      break;
    
    case "Memory Foam mattress":
      image = "mattress-3.svg"
      break;
  
    case "Bronze Ortho Mattress":
      image = "mattress-4.svg"
      break;
  
    case "Pocket Sprung Mattress":
      image = "mattress-5.svg"
      break;

    case "Memory Pocket Mattress":
      image = "mattress-6.svg"
      break;

    case "Pillowtop Mattress":
      image = "mattress-7.svg"
      break;

    default:
      console.log("no mattress");
      break;
  }
  return image;
}

function setButton(size) {
  let image;
  switch (size.trim()) {
    case "Diamonte Buttons":
      image = "button-2.svg"
      break;
    
    case "Matching Fabric Buttons":
      image = "button-1.svg"
      break;
    
    default:
      console.log("no button");
      break;
  }
  return image;
}

function setHb(size) {
  let image;
  switch (size.trim()) {
    case "24 inch Headboard - FREE":
      image = "hb-1.svg"
      break;
    
    case "32 inch Floor Standing Headboard":
      image = "hb-2.svg"
      break;
    
    case "54 inch Floor Standing Headboard":
      image = "hb-3.svg"
      break;
  
    default:
      console.log("no hb");
      break;
  }
  return image;
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

function createTab(tabTitle, innerBlocks) {
  let tabEl = document.createElement("div");
  tabEl.classList.add("go-accordion");

  let tabTitleEl = document.createElement("div");
  tabTitleEl.classList.add("go-accordion__head");
  $(tabTitleEl).on("click", function (e) {
    e.preventDefault();
    if ($(this).parent().hasClass("go-return-delivery")) {
      gaEvent("Exp - PDP product options", "click to Expand Delivery & Returns");
    } else if ($(this).parent().hasClass("go-tab-dimensions")) {
      gaEvent("Exp - PDP product options", "click to Expand Dimensions");
    } else if ($(this).parent().hasClass("go-tab-mattress")) {
      gaEvent("Exp - PDP product options", "click to Expand Mattress Information");
    }
    $(this).parent().toggleClass("activeTab");
    $(this).siblings(".go-accordion__body").slideToggle("slow");
    
  })
  tabTitleEl.innerText = tabTitle;
  tabEl.insertAdjacentElement("beforeend", tabTitleEl);

  let tabBodyEl = document.createElement('div')
  tabBodyEl.classList.add("go-accordion__body");
  for (let block of innerBlocks) {
    tabBodyEl.insertAdjacentElement("beforeend", block);
  }
  tabEl.insertAdjacentElement("beforeend", tabBodyEl);
  return tabEl;
}

function extractHtmltoBlock(element, elementInclude = false) {
  let block = document.createElement("div");
  let currentEl = element;
  if (elementInclude) {
    block.insertAdjacentElement("beforeend", element.cloneNode(true));
  }
  while (currentEl) {
    prevEl = currentEl;
    currentEl = currentEl.nextElementSibling;
    prevEl.remove();

    if (!currentEl) break;

    let currentElTag = currentEl.tagName.toLocaleLowerCase();

    if (currentElTag == "div" || currentElTag == "ul" || currentElTag == "span" || currentElTag == "p" || currentElTag == "hr" || currentElTag == "img" || currentEl.innerText.toLocaleLowerCase() == "features:") {
      block.insertAdjacentElement("beforeend", currentEl.cloneNode(true));
    } else {
      break;
    }
  }
  return block;
}

function createMattressPopups(tab) {
  // $("")
  // extractHtmltoBlock(returnEl, true).
}


/* HTML insert end */