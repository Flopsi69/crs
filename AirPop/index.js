
(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:2078786,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
    hj('trigger', 'innovation_content_on_pdp');

window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp: Innovation page content on PDP',
    'eventAction': 'loaded'
});

var locationLang = location.pathname.split('/')[1];


let stylesList = `
  .header-scroll {
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #EAFBFC;
    padding: 9px 0;
    text-align: center;
  }
  .header-scroll__item {
    color: #35B4BB;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.05em;
    padding: 8px 14px;
  }
  .header-scroll__item:hover {
    color: #35B4BB;
  }
  .header-scroll__item + .header-scroll__item {
    border-left: 1px solid #35B4BB;
  }
  .innovations-block #image5fdc91d5b4807 {
    display: none!important;
  }
`;

let styles = document.createElement('style');
styles.innerHTML = stylesList;
document.head.appendChild(styles);

let scrollHybrid, scrollFiltration, scrollResults;
switch (locationLang) {
  case 'it':
    scrollHybrid = "L'approccio ibrido di AirPop";
    scrollFiltration = "Filtrazione a due vie";
    scrollResults = "Accreditamento e risultati dei test";
    break;
  case 'nl':
    scrollHybrid = "De hybride benadering van AirPop";
    scrollFiltration = "Tweerichtingsfiltratie";
    scrollResults = "Accreditatie en testresultaten";
    break;
  case 'de':
    scrollHybrid = "Der hybride Ansatz von AirPop";
    scrollFiltration = "Zweiwegefiltration";
    scrollResults = "Akkreditierung & Testergebnisse";
    break;
  
  default:
    scrollHybrid = "AirPop’s hybrid approach";
    scrollFiltration = "Two - way filtration";
    scrollResults = "Accreditation & Test results";
    break;
}

let block = `
  <div class="header-scroll" style='display: none;'>
    <a href='#image5fd740d79afcd' class="header-scroll__item header-scroll__hybrid">${scrollHybrid}</a>
    <a href='#row5fc6832571d3a' class="header-scroll__item header-scroll__filtration">${scrollFiltration}</a>
    <a href='#row5fc6832571eff' class="header-scroll__item header-scroll__results">${scrollResults}</a>
  </div>
`;

document.querySelector(".page-header").insertAdjacentHTML("beforebegin", block);
initEventsHtml();

var innovationBlock = document.createElement("div");
innovationBlock.classList.add("innovations-block");

jQuery(".innovations-block").find(".pd-row.row").last().css("display", "none");

jQuery(innovationBlock).load(location.origin + "/" + locationLang + "/innovation .column.main");

jQuery('.product-background').after(innovationBlock);

function initEventsHtml() {
  document.querySelectorAll(".header-scroll__item").forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      if (jQuery(this).hasClass("header-scroll__hybrid")) {
        console.log('1');
        dataLayer.push({
          'event': 'event-to-ga',
          'eventCategory': 'Exp: Innovation page content on PDP',
          'eventAction': 'click on Airpop hybrid approach'
      });
      } else if (jQuery(this).hasClass("header-scroll__filtration")) {
        console.log('2');
        dataLayer.push({
          'event': 'event-to-ga',
          'eventCategory': 'Exp: Innovation page content on PDP',
          'eventAction': 'click on Two-way filtration'
        });
      } else if (jQuery(this).hasClass("header-scroll__results")) { 
        console.log('3');
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp: Innovation page content on PDP',
            'eventAction': 'click on Accreditation & Test results'
        });
      }
      let target = this.getAttribute("href");
      jQuery('html, body').animate({
        scrollTop: jQuery(target).offset().top - jQuery(".header-scroll").outerHeight()
      }, 1500);
    })
  })
}

var lastScrollTop = 0;
jQuery(window).scroll(function () {
  if (jQuery(this).scrollTop() > (jQuery(".product-info-delivery").offset().top - jQuery(window).height())) {
    var st = jQuery(this).scrollTop();
    if (st > lastScrollTop) {
      // downscroll code
      if (jQuery(".page-header").css('display') == 'block') {
        jQuery(".header-scroll").slideDown();
        jQuery('.page-header').slideUp();
      }
    } else {
      // upscroll code
      if (jQuery(".page-header").css('display') == 'none') {
        jQuery(".header-scroll").slideUp();
        jQuery('.page-header').slideDown();
      }
    }
    lastScrollTop = st;
  }
})