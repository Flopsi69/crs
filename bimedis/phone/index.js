//   function gaEvent(action) {
//     try {
//       dataLayer.push({
//         "event": "event-to-ga",
//         "eventCategory":  "Exp - Protection package",
//         "eventAction": action,
//       });
//     } catch (e) {}
//   };

//   (function(h,o,t,j,a,r){
//     h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
//     h._hjSettings={hjid:1885763,hjsv:6};
//     a=o.getElementsByTagName('head')[0];
//     r=o.createElement('script');r.async=1;
//     r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
//     a.appendChild(r);
//   })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
//     window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
//   hj('trigger', 'protection_package');

/* STYLES insert start */

let stylesList = ``;

// connect to DOM
let styles = document.createElement('style');
styles.id = 'go-phone-styles';
styles.innerHTML = stylesList;
document.body.appendChild(styles);
/* STYLES insert end */

// gaEvent("loaded");

/*HTML insert start */
var goProtection = ``;
/*HTML insert end */

// let observer = new MutationObserver(mutations => {

//   for(let mutation of mutations) {
//     // проверим новые узлы, есть ли что-то, что надо подсветить?

//     for(let node of mutation.addedNodes) {
//       // отслеживаем только узлы-элементы, другие (текстовые) пропускаем
//       if (!(node instanceof HTMLElement)) continue;
//       if (node.classList.contains("cart__checkout") && !document.querySelector("#CartContainer [data-variant-id='32994782675029']")) {
//         document.querySelector(".drawer__cart .drawer__inner").insertAdjacentHTML("beforeend", goProtection);
//         $(".go-protection__details-head").on("click", function () {
//           $(this).toggleClass("activated");
//           $(this).siblings().slideToggle();
//           gaEvent("click on Arrow Show more");
//         });

//         $('.go-protection__details-terms a').on("click", function (e) {
//           gaEvent("click on Terms and conditions");
//         })

//         $(".go-protection__event-add").on("click", function (e) {
//           e.preventDefault();
//           gaEvent("click on Add to cart");
//           var acsCart = [];
//           var variant = {};
//           variant.id = 32994782675029;
//           variant.qty = 1;
//           acsCart.push(variant);
//           if (acsCart.length > 0) {
//             MGUtil.data = acsCart;
//             MGUtil.total = MGUtil.data.length;
//             MGUtil.action = 'add';
//             MGUtil.recursive();
//           }
//         })

//         $(".go-protection__event-decline").on("click", function (e) {
//           e.preventDefault();
//           gaEvent("click on No thanks");
//           $(".go-protection").slideToggle(300, function () {
//             $(".go-protection").remove();
//           })
//         })

//         $(".go-protection").delay(1500).slideToggle();
//       }
//     }
//   }

// });

// let demoElem = document.getElementById('CartContainer');

// observer.observe(demoElem, {childList: true, subtree: true});
