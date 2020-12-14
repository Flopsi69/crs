let script = document.createElement('script');
script.src = 'https://flopsi69.github.io/crs/AirPop/index.js';
script.async = false;
document.head.appendChild(script);


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
`;

let styles = document.createElement('style');
styles.innerHTML = stylesList;
document.head.appendChild(styles);

let block = `
  <div class="header-scroll" style='display: none;'>
    <a href='#image5fd740d79afcd' class="header-scroll__item">AirPop’s hybrid approach</a>
    <a href='#row5fc6832571d3a' class="header-scroll__item">Two - way filtration</a>
    <a href='#row5fc6832571eff' class="header-scroll__item">Accreditation & Test results</a>
  </div>
`;

document.querySelector(".page-header").insertAdjacentHTML("beforebegin", block);
initEventsHtml();


function initEventsHtml() {
  document.querySelectorAll(".header-scroll__item").forEach(function (el) {
    console.log(el);
    el.addEventListener('click', function (e) {
      e.preventDefault();
      console.log(el, 'click');
      let target = this.getAttribute("href");
      console.log('target', target);
      console.log('offset', jQuery(target).offset().top - jQuery(".header-scroll").outerHeight());
      console.log(jQuery(target).offset().top);
      console.log(jQuery(".header-scroll").outerHeight());

      
      jQuery('html, body').animate({
        scrollTop: jQuery(target).offset().top - jQuery(".header-scroll").outerHeight()
      }, 1500);
    })
  })
}


jQuery(window).scroll(function () {
  if (jQuery(this).scrollTop() > (jQuery(".tocart").offset().top + jQuery(".tocart").outerHeight())) {
    if (jQuery(".page-header").css('display') == 'block') {
      jQuery(".header-scroll").slideDown();
      jQuery('.page-header').slideUp();
    }
  } else {
    if (jQuery(".page-header").css('display') == 'none') {
      jQuery(".header-scroll").slideUp();
      jQuery('.page-header').slideDown();
    }
  }
})