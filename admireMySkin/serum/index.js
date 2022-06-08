console.log('initExp');

/********* Settings **********/
const settings = {
  dir: 'https://flopsi69.github.io/crs/admireSkin/serum',
  hj: false,
  observe: false,
};

//Hotjar
if (settings.hj) {
  try {
    (function (h, o, t, j, a, r) {
      h.hj =
        h.hj ||
        function () {
          (h.hj.q = h.hj.q || []).push(arguments);
        };
      h._hjSettings = { hjid: 410340, hjsv: 6 };
      a = o.getElementsByTagName('head')[0];
      r = o.createElement('script');
      r.async = 1;
      r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
      a.appendChild(r);
    })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
    window.hj =
      window.hj ||
      function () {
        (hj.q = hj.q || []).push(arguments);
      };
    hj('trigger', 'also_like');
  } catch (e) {}
}

// Alalytic
function gaEvent(action, label) {
  if (!label) {
    label = '';
  }
  try {
    var objData = {
      event: 'gaEv',
      eventCategory: 'Experiment — also like',
      eventAction: action,
      eventLabel: label,
      eventValue: '',
    };
    console.log('EventFire:', objData);
    dataLayer.push(objData);
  } catch (e) {}
}

// Observe
if (settings.observe) {
  let observer = new MutationObserver((mutations) => {
    for (let mutation of mutations) {
      for (let node of mutation.addedNodes) {
        if (!(node instanceof HTMLElement)) continue;

        // Code Here
      }
    }
  });

  let demoElem = document.body;

  observer.observe(demoElem, { childList: true, subtree: true });
}

// Styles
const styles = `
  #m-1638224949976, #r-1638224949963, #r-1638224949929, #r-1638224949904, #r-1638224949904, #r-1638224949887, #r-1638224949895, #r-1638224949879, #r-1638224949697, #r-1638224949683, #r-1638224949905 {
    display: none!important;
  }
  #r-1638224949960 { 
    margin-bottom: 20px!important;
  }
`;

const newPage = `
  <div class='lav-wrap'>
    <div class='lav-head'>Limited time offer  65% off + free glow oil</div>

    <div class='lav-jumb'>
      <div class='lav-jumb__title'>Suffer from dark spots or uneven skin tone?</div>
      <div class='lav-jumb__caption'>Get visible results in <span>2-4 weeks</span>  with
      Admire My Skin ™ Serum </div>
      
      <div class='lav-jumb__slider'></div>
    </div>

    <div class='lav-brief'>
      <div class='lav-brief__inner'>
        <div class='lav-brief__image'>
          <img src=''>
        </div>
        <div class='lav-brief__info'>
          <div class='lav-brief__title'>Ultra Potent Brightening Serum For Dark Spots & Uneven Skin Tone</div>
          <div class='lav-brief__list'>
            <div class='lav-brief__item'>+ Marula Glow Oil FREE</div>
            <div class='lav-brief__item'>+ Same Day Shipping Free</div>
          </div>
        </div>
      </div>

      <div class='lav-brief__price'>
      From <span class='lav-brief__price-old'>$39.95</span> <span class='lav-brief__price-new'>$14.95</span>
      </div>

      <button class='lav-brief__buy'>Shop Now</button>
    </div>

    <div class='lav-feedbacks'></div>

    <div class='lav-help'>
      <div class='lav-help__title'><span>Admire My Skin ™ Serum</span> can help with </div>
      <div class='lav-help__grid'>
        <div class='lav-help__item'>
          <img src='${settings.dir}/img/help1.png'>
          <div class='lav-help__item-caption'>Dark Spots</div>
        </div>
        <div class='lav-help__item'>
          <img src='${settings.dir}/img/help2.png'>
          <div class='lav-help__item-caption'>Blemishes</div>
        </div>
        <div class='lav-help__item'>
          <img src='${settings.dir}/img/help3.png'>
          <div class='lav-help__item-caption'>Dull & Aging Skin</div>
        </div>
        <div class='lav-help__item'>
          <img src='${settings.dir}/img/help4.png'>
          <div class='lav-help__item-caption'>Uneven Skin</div>
        </div>
      </div>

      <ul class='lav-help__list'>
        <li class='lav-help__list-item'>Helps brighten and fade dark spots, hyperpigmentation & melasma.</li>
        <li class='lav-help__list-item'>Improves radiance and helps correct sun damage.</div>
        <li class='lav-help__list-item'>Reveals clearer, brighter skin.</li>
      </ul>
    </div>

    <div class='lav-block lav-sutable'>
      <div class='lav-title'>Sutable for</div>
      <div class='lav-sutable__list'>
        <div class='lav-sutable__item'>Dry Skin</div>
        <div class='lav-sutable__item'>Aging Skin</div>
        <div class='lav-sutable__item'>Acne Prone Skin</div>
        <div class='lav-sutable__item'>Combination Skin</div>
      </div>
    </div>

    <div class='lav-block lav-ingredients'>
      <div class='lav-title'>Ingredients</div>
      <div class='lav-ingredients__image'>
        <img src='${settings.dir}/img/ingredients.png'
      </div>
      <div class='lav-ingredients__subtitle'>
        Full ingredients list 
      </div>
      <div class='lav-ingredients__descr'>
        Propylene Glycol, Alcohol Denat., Azelaic Acid, Aqua (Water), Hamamelis Virginiana (Witch Hazel) Water, Lactic Acid (L), Kojic Acid, Synovea® HR, Salicylic Acid, L Ascorbic Acid (Vitamin C), Hydroxypropyl Methylcellulose, Sodium Hydroxide
      </div>
    </div>

    <div class='lav-block lav-how'>
      <div class='lav-title'>How to Use</div>
      <ul class='lav-how__list'>
        <li class='lav-how__item'>Apply 1-2 pumps of serum to a clear skin to cover treatment area and improve skin tone.</li>
        <li class='lav-how__item'>  Use serum once daily, on a daily basis.</li>
        <li class='lav-how__item'>Always wear sunscreen during the day on areas where serum has been applied.</li>
        <li class='lav-how__item'>To boost results, we highly recommend using our Clinically Effective Retinoid Cream.</li>
      </ul>
      <div class='lav-how__caption'>Because of the potency of this Brightening Serum, spot test first. <br>Some users of this product may experience a minor skin irritation. If irritation becomes severe, discontinue use and seek medical advice. </div>
    </div>

    <div class='lav-block lav-other'>
      <div class='lav-title'>See how other people just like you finally got having clear glowing skin</div>
     <div class='lav-other__nav'>
      <div class='lav-other__nav-item active'>Dark Spots</div>
      <div class='lav-other__nav-item'>Dull & Aging Skin</div>
      <div class='lav-other__nav-item'>Blemishes</div>
      <div class='lav-other__nav-item'>Uneven Skin Tone</div>
     </div>
    </div>

    <div class=''></div>
    <div class=''></div>

  </div>
`;

const stylesEl = document.createElement('style');
stylesEl.innerHTML = styles;
document.body.appendChild(stylesEl);
/*** STYLES / end ***/

/********* Custom Code **********/
init();
function init() {
  document
    .querySelector('.gryffeditor')
    .insertAdjacentHTML('beforebegin', newPage);
  console.log('init');
}
