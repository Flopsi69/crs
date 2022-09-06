console.log('initExp');

/********* Settings **********/
const settings = {
  dir: 'https://flopsi69.github.io/crs/compramais/steps',
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
  .container--hero .page__title {
    display: none;
  }

  .lav-intro {
    display: grid;
    grid-template-columns: 1fr 1fr
    gap: 40px;
  }
  .lav-container {
    max-width: 1128px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  .lav-info {
    align-self: center;
    // width: 580px;
  }
  .lav-info__title {
    font-weight: 700;
    font-size: 48px;
    line-height: 56px;
    color: #229F55;
  }
  .lav-info__caption {
    font-weight: 500;
    font-size: 27px;
    line-height: 32px;
    color: #1F1F1F;
    margin-top: 8px;
  }
  .lav-info__review {
    display: inline-flex;
    align-items: center;
    margin-top: 28px;
    cursor: pointer;
  }
  .review__star {
    margin: 0 9px;
  }
  .review__count {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #0071EB;
  }
  .review__star span {
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    color: #1F1F1F;
  }
  .lav-info__list {
    margin-top: 45px;
  }
  .lav-info__item {
    position: relative;
    padding-left: 40px;
    min-height: 28px;
  }
  .lav-info__item + .lav-info__item {
    margin-top: 20px;
  }
  .lav-info__item:before {
    content: '';
    position: absolute;
    width: 28px;
    height: 28px;
    left: 0;
    top: 0;
    background: url(${settings.dir}/img/green-arrow.svg) center no-repeat;
    background-size: contain;
  }

  .lav-step {
    padding: 56px;
    background: #FFFFFF;
    box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3);
    border-radius: 24px;
    border: none;
  }

  .lav-step label {
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    color: #1F1F1F;
    margin-top: 0;
    padding-right: 0;
  }

  .lav-step .hls-simulator__amount-range {
    margin-bottom: -5px;
  }

  .lav-step .hls-simulator__field-box {
    background: #F9F9F9;
    border: 1px solid #E6E7E7;
    border-radius: 8px;
    margin-top: 8px;
  }

  .lav-step .hls-simulator__field-box input {
    box-shadow: none;
    font-weight: 700;
    font-size: 16px;
    line-height: 26px;
    color: #1F1F1F;
    padding: 13px 0 13px 5px;
  }

  .lav-step .hls-simulator__field-box--sm {
    margin-right: 10px;
    margin-left: 0;
  }

  .lav-step .hls-simulator__field-box span {
    border-left: 0;
    font-weight: 400;
    font-size: 26px;
    line-height: 26px;
    color: #9F9F9F;
  }

  .lav-step .hls-simulator__field-box--md span {
    font-size: 20px;
    padding-right: 15px;
    margin-top: -2px;
  }

  .lav-step .hls-simulator__form-group:not(:last-child) {
    margin-bottom: 28px;
  }

  .lav-step a.hls-simulator__button {
    margin-top: 40px;
  }

  .simulator-container {

  }
`;

const stylesEl = document.createElement('style');
stylesEl.innerHTML = styles;
document.body.appendChild(stylesEl);
/*** STYLES / end ***/

let introInfoEl = `
    <div class='lav-info'>
      <div class='lav-info__title'>Mortgage loans</div>
      <div class='lav-info__caption'>Compare and apply for the best home loan</div>
      <a href='https://www.reviews.co.uk/company-reviews/store/www-comparamais-pt?utm_source=www-comparamais-pt&utm_medium=widget&utm_campaign=text-banner' class='lav-info__review'>
        <img class='review__site" src='${settings.dir}/img/review.svg'>

        <div class='review__star'>
          <img class='review__star" src='${settings.dir}/img/star.svg'>

          <span>4.6</span>
        </div>

        <div class='review__count'></div>
      </a>
      <div class='lav-info__list'>
        <div class='lav-info__item'>Receive exclusive and personalized proposals from all banks</div>
        <div class='lav-info__item'>Compare all charges and approval criteria for your credit</div>
        <div class='lav-info__item'>Save thousands of euros with the lowest installments</div>
      </div>
    </div>
`;

/********* Custom Code **********/
init();
function init() {
  console.log('init');
  document
    .querySelector('.page__title')
    .insertAdjacentHTML('beforebegin', introInfoEl);

  document
    .querySelector('.hls-simulator__form-group.hls--inline')
    .insertAdjacentElement(
      'afterbegin',
      document.querySelector(
        '.hls-simulator__field-box + .hls-simulator__field-box--sm'
      )
    );

  document.querySelector('.simulator-container').classList.add('lav-step');

  document.querySelector('.review__count').innerHTML =
    '(' +
    document.querySelector('.reviews-score strong:last-child').innerText +
    ' Reviews)';
}
