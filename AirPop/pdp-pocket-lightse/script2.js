(function (h, o, t, j, a, r) {
  h.hj =
    h.hj ||
    function () {
      (h.hj.q = h.hj.q || []).push(arguments);
    };
  h._hjSettings = { hjid: 2078786, hjsv: 6 };
  a = o.getElementsByTagName("head")[0];
  r = o.createElement("script");
  r.async = 1;
  r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
  a.appendChild(r);
})(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");
window.hj =
  window.hj ||
  function () {
    (hj.q = hj.q || []).push(arguments);
  };
hj("trigger", "pdp_improvements");

window.dataLayer = window.dataLayer || [];
dataLayer.push({
  event: "event-to-ga",
  eventCategory: "Exp — PDP improvements",
  eventAction: "loaded",
});

var locationLang = location.pathname.split('/')[1];

var colorsEl = document.querySelector(".product-info-main .variant-colors");
document.querySelector(".product-info-main").prepend(colorsEl);

document.querySelectorAll('.product-info-main .pd-row.row').forEach(function (element) {
  element.remove();
})

var pdpRowCustorm = `<div class="pd-row row" data-gtm-vis-has-fired-31849418_134="1">
<div class="pd-col col-xs-3 col-md-2" data-index-target="1" data-gtm-vis-has-fired-31849418_134="1">
   <p><img style="display: block; margin-left: auto; margin-right: auto;" src="/media/wysiwyg/AIRPOP/AW20/Icons/WASHABLE.png" alt="" width="60"></p>
   <p style="text-align: center;"><a href="http://support.airpophealth.com/support/solutions/articles/43000603182-icon-explanation"><strong><span style="font-size: 8pt;">How to Wash</span></strong></a></p>
</div>
<div class="pd-col col-xs-3 col-md-2" data-index-target="2" data-gtm-vis-has-fired-31849418_134="1">
   <p><img style="display: block; margin-left: auto; margin-right: auto;" src="/media/wysiwyg/AIRPOP/AW20/Icons/40_HOURS.png" alt="" width="60"></p>
   <p style="text-align: center;"><a href="http://support.airpophealth.com/support/solutions/articles/43000603182-icon-explanation"><strong><span style="font-size: 8pt;">40 Hours Use</span></strong></a></p>
   <p>&nbsp;</p>
</div>
<div class="pd-col col-xs-3 col-md-2" data-index-target="3" data-gtm-vis-has-fired-31849418_134="1">
   <p style="height: 60px; display: flex; align-items: center; justify-content: center;"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://i.ibb.co/3BqCKnd/glass-fogging.png" alt="" width="60"></p>
   <p style="text-align: center;">
      <a href="http://support.airpophealth.com/support/solutions/articles/43000602465-sizing-guide"><strong><span style="font-size: 8pt;">Anti-fogging with eyewear</span></strong></a>
   </p>
</div>
<div class="pd-col col-xs-3 col-md-2" data-index-target="7" data-gtm-vis-has-fired-31849418_134="1">
   <p style="height: 60px; display: flex; align-items: center; justify-content: center;"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://i.ibb.co/vdRJmNp/preassure-air.png" alt="" width="60"></p>
   <p style="text-align: center;">
      <a href="http://support.airpophealth.com/support/solutions/articles/43000602465-sizing-guide"><strong><span style="font-size: 8pt;">Less pressure on ear lobes</span></strong></a>
   </p>
</div>
</div>

<div class="pd-row row" data-gtm-vis-has-fired-31849418_134="1">
<div class="pd-col col-xs-4 col-md-2" data-index-target="4" data-gtm-vis-has-fired-31849418_134="1">
   <p><img style="display: block; margin-left: auto; margin-right: auto;" src="/media/wysiwyg/AIRPOP/AW20/Icons/99_BFE.png" alt="" width="60"></p>
   <p style="text-align: center;"><a href="http://support.airpophealth.com/support/solutions/articles/43000603182-icon-explanation"><strong><span style="font-size: 8pt;">Bacterial Filtration</span></strong></a></p>
</div>

<div class="pd-col col-xs-4 col-md-2" data-index-target="5" data-gtm-vis-has-fired-31849418_134="1">
   <p><img style="display: block; margin-left: auto; margin-right: auto;" src="/media/wysiwyg/AIRPOP/AW20/Icons/WATER_RESISTANT.png" alt="" width="60"></p>
   <p style="text-align: center;"><a href="http://support.airpophealth.com/support/solutions/articles/43000603182-icon-explanation"><strong><span style="font-size: 8pt;">Water-resistant</span></strong></a></p>
</div>

<div class="pd-col col-xs-4 col-md-2" data-index-target="6" data-gtm-vis-has-fired-31849418_134="1">
   <p><img style="display: block; margin-left: auto; margin-right: auto;" src="/media/wysiwyg/AIRPOP/AW20/Icons/SKIN_FRIENDLY.png" alt="" width="60"></p>
   <p style="text-align: center;"><a href="http://support.airpophealth.com/support/solutions/articles/43000603182-icon-explanation"><strong><span style="font-size: 8pt;">Skin-friendly</span></strong></a></p>
</div>
</div>`;

document.querySelector('.product-info-main').insertAdjacentHTML('beforeend', pdpRowCustorm);


var variantColorCaption;
switch (locationLang) {
  case 'it':
    variantColorCaption = "Scegli il colore:";
    break;
  case 'nl':
    variantColorCaption = "Selecteer kleur:";
    break;
  case 'de':
    variantColorCaption = "Wähle Farbe:";
    break;
  
  default:
    variantColorCaption = "Select color:";
    break;
}
document.querySelector('.product-info-main .variant-colors .current-title').innerHTML = variantColorCaption;

var productDescrText = document.createElement("p");
productDescrText.classList.add("product-info__descr");
var productDescrTextValue;
switch (locationLang) {
  case 'it':
    productDescrTextValue = "La migliore protezione quotidiana per tutti";
    break;
  case 'nl':
    productDescrTextValue = "Het beste mondmasker voor dagelijks gebruik voor iedereen";
    break;
  case 'de':
    productDescrTextValue = "Der beste alltagsschutz für jedermann";
    break;
  
  default:
    productDescrTextValue = "The best everyday protection for everyone";
    break;
}

productDescrText.innerText = productDescrTextValue;
document.querySelector(".page-title-wrapper").append(productDescrText);

var quantityPacketNum = false;
for (var item of document.querySelector(".page-title").textContent.split(" ")) {
  if (item && parseInt(item)) {
    quantityPacketNum = parseInt(item);
    break;
  }
}

setTimeout(() => {
  // Modals
  const testModal = document.querySelector(".test-modal");
  const testModalBody = testModal.querySelector(".test-modal__body");
  const testModalClose = testModal.querySelector(".test-modal__close");
  let testModalName;

  document
    .querySelectorAll(".product-info-main .pd-row .pd-col")
    .forEach(function (item) {
      item.addEventListener("click", function (e) {
        e.preventDefault();

        testModalName = this.textContent.trim();
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
          event: "event-to-ga",
          eventCategory: "Exp — PDP improvements",
          eventAction: "activated",
          eventLabel: "Popup:" + testModalName,
        });

        const indexTarget = this.dataset.indexTarget;
        if (indexTarget == 3) {
          window.dataLayer = window.dataLayer || [];
          dataLayer.push({
            event: "event-to-ga",
            eventCategory: "Exp — PDP improvements",
            eventAction: "click on button",
            eventLabel: "Anti-fogging with eyewear — link to support",
          });
        } else if (indexTarget == 7) {
          window.dataLayer = window.dataLayer || [];
          dataLayer.push({
            event: "event-to-ga",
            eventCategory: "Exp — PDP improvements",
            eventAction: "click on button",
            eventLabel: "Less pressure on ear lobes — link to support",
          });
        }
        if (testModal.querySelector(".test-modal__inner.active")) {
          testModal
            .querySelector(".test-modal__inner.active")
            .classList.remove("active");
        }
        testModal
          .querySelector(
            '.test-modal__inner[data-info-index="' + indexTarget + '"]'
          )
          .classList.add("active");
        testModal.classList.add("test-modal_active");
        testModalBody.style.display = "block";
      });
    });

  testModalClose.addEventListener("click", function (e) {
    e.preventDefault();
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
      event: "event-to-ga",
      eventCategory: "Exp — PDP improvements",
      eventAction: "closed — X",
      eventLabel: "Popup: " + testModalName,
    });
    closeModalTest();
  });

  testModal.addEventListener("click", function (e) {
    if (e.target.classList.contains("test-modal_active")) {
      window.dataLayer = window.dataLayer || [];
      dataLayer.push({
        event: "event-to-ga",
        eventCategory: "Exp — PDP improvements",
        eventAction: "closed — out of area",
        eventLabel: "Popup: " + testModalName,
      });
      closeModalTest();
    }
  });

  document.querySelector(".tocart").addEventListener("click", addToCardEventGa);
  document
    .querySelector(".fixed-addto")
    .addEventListener("click", addToCardEventGa);

  function addToCardEventGa() {
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
      event: "event-to-ga",
      eventCategory: "Exp — PDP improvements",
      eventAction: "click on button",
      eventLabel: "Add to cart — Light SE",
    });
  }

  function closeModalTest() {
    testModal.classList.remove("test-modal_active");
    testModalBody.style.display = "none";
  }

  if (quantityPacketNum) {
    var priceCaptionTextValue;
    var countName;
    switch (locationLang) {
      case 'it':
        countName = quantityPacketNum == 1 ? "maschera" : "maschere";
        priceCaptionTextValue = countName  + " in una confezione";
        break;
      case 'nl':
        countName = quantityPacketNum == 1 ? "masker" : "maskers";
        priceCaptionTextValue = countName + " in een verpakking";
        break;
      case 'de':
        countName = quantityPacketNum == 1 ? "maske" : "masken";
        priceCaptionTextValue = countName + " in einer Packung";
        break;
      
      default:
        countName = quantityPacketNum == 1 ? "mask" : "masks";
        priceCaptionTextValue = countName + " in a pack";
        break;
    }
    
    var priceCaptionText = document.createElement("span");
    priceCaptionText.classList.add("price__caption-text");
    priceCaptionText.innerHTML =
      "(<span>" + quantityPacketNum + "</span> " + priceCaptionTextValue +")";
    document
      .querySelector(".price-box.price-final_price")
      .append(priceCaptionText);

    var sliderLastSlideTimer = setInterval(() => {
      if (document.querySelector(".fotorama__nav__shaft")) {
        clearInterval(sliderLastSlideTimer);

        const lastItemInSlider = document.querySelector(".fotorama__nav__shaft")
          .lastChild;

        const packNumMasks = document.createElement("div");
        packNumMasks.classList.add("pack-num__masks");
        packNumMasks.innerHTML = "<span>" + quantityPacketNum + "</span> pcs";

        var packNumMasksTimer = setInterval(() => {
          console.log("fire");
          if (lastItemInSlider.classList.contains("fotorama__active")) {
            clearTimeout(packNumMasksTimer);
            setTimeout(() => {
              console.log("firesucess");
              document
                .querySelector(".fotorama__stage__frame.fotorama__active")
                .append(packNumMasks);
            }, 2000);
          }
        }, 500);
      }
    }, 800);
  }
}, 1500);
