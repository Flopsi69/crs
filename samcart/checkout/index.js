console.log('initExp');

/********* Settings **********/
const settings = {
  dir: 'https://flopsi69.github.io/crs/samcart/checkout',
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
  header {
    display: none;
  }
  body {
    padding-top: 80px;
    background: #F7FAFD;
  }
  .lav-container {
    padding: 0 15px;
    max-width: 1110px;
    margin: auto;
  }
  .lav-btn {
    border: none;
    cursor: pointer;
    background: none;
    outline: none;
    padding: 10px 20px;
  }
  .lav-btn_trans {
    border: 2px solid #183B56;
    border-radius: 8px;
  
    font-family: 'Gilroy';
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.01em;
    color: #183B56;
  }
  .lav-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    padding: 17px 0;
    background: #fff;
    
  }
  .lav-header__inner {
    padding-left: 50px;
    padding-right: 50px;
    display: flex;
    align-items; center;
    justify-content: space-between;
  }
  .lav-header__logo {
    line-height: 0;
  }
  .lav-header__logo img {
    max-width: 145px;
  }
  .lav-intro {
    text-align: center;
    color: #183B56;
    background: url('${settings.dir}/img/intro-lines.png) center no-repeat;
    background-size: cover;
    padding: 60px 0 100px;
  }
  .lav-intro__congrate {
    font-family: 'Gilroy';
    font-weight: 600;
    font-size: 40px;
    line-height: 48px;
    color: #183B56;
  }
  .lav-intro__mark {
    font-family: 'Gilroy';
    font-weight: 900;
    font-size: 70px;
    line-height: 87px;
  }
  .lav-intro__caption {
    margin-top: 8px;
    font-family: 'Gilroy';
    font-size: 20px;
    line-height: 30px;
    color: #5A7386;
  }
  .lav-intro__image {
  }
  .lav-intro__btn {
  }
  .lav-intro {
  }
`;

const newPage = `
  <div class='lav-header'>
    <div class='lav-header__inner'>
      <div class='lav-header__logo'>
        <img src='https://s3.amazonaws.com/samcart-foundation-prod/marketplace-4554/assets/imEWEXr7ri3qUcGA.png'>
      </div>
      <div class='lav-header__info'>
        <div class='lav-header__descr'>
          <span class='mark'>40% Off</span> a 1 Year Subscription to the new<br/><span class='lav-mark'>SamCart Launch Plan&nbsp;-</span> <span class='lav-price_old'>$588.00</span> <span class='mark'>$349.00</span>
        </div>
        <div class='lav-header__paypal'></div>
        <div class='lav-header__card'></div>
      </div>
      <button class='lav-btn lav-btn_trans lav-header__cta'>Start earning now</button>
    </div>
  </div>

  <div class='lav-wrap'>
    <div class='lav-section lav-intro'>
      <div class='lav-container'>
        <div class='lav-intro__congrate'>Congratulations!</div>
        <div class='lav-intro__mark'>You Made It!</div>
        <div class='lav-intro__caption'>You're about to get exclusive access to a proven system for launching your own 6-figure online business with just 1 simple page!</div>

        <div class='lav-intro__image'>
          <img src='${settings.dir}/img/intro.png'>
        </div>

        <div class='lav-intro__btn-wrap'>
          <button class='lav-btn lav-btn_blue lav-intro__btn'>Start earning now</button>
        </div>
      </div>
    </div>

    <div class='lav-section'></div>
    <div class='lav-section'></div>
    <div class='lav-section'></div>
    <div class='lav-section'></div>
    <div class='lav-section'></div>
  </div>
`;

const stylesEl = document.createElement('style');
stylesEl.innerHTML = styles;
document.body.appendChild(stylesEl);
/*** STYLES / end ***/

/********* Custom Code **********/
init();
function init() {
  document.querySelector('header').insertAdjacentHTML('afterend', newPage);
  console.log('init');
}
