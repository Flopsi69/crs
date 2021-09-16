console.log('testik1');

(function () {
  console.log('testik2');

  function gaEvent(action) {
    if (!action) {
      action = '';
    }
    window.dataLayer = window.dataLayer || [];
    try {
      let eventObj = {
        event: 'event-to-ga',
        eventCategory: 'Exp: Checkout improvements',
        eventAction: action,
      };
      dataLayer.push(eventObj);
      console.log('FireEvent', eventObj);
    } catch (e) {
      console.log(e);
    }
  }

  /* STYLES insert start */
  const REPO_DIR = 'https://flopsi69.github.io/crs/mariemur/checkout';

  let stylesList = `
    .order-summary__sections  {
      min-height: 100%;
      height: auto;
    }
    .lav-guarantee {
      background: #A60B00;
      border-radius: 4px;
      color: #fff;
      text-align: center;
      padding: 14px;
    }
    .lav-guarantee__title {
      text-transform: uppercase;
      letter-spacing: 2px;
      font-size: 16px;
      line-height: 1.15;
    }
    .lav-guarantee__caption {
      margin-top: 6px;
      font-weight: 300;
      font-size: 12px;
      line-height: 14px;
      color: #F5F5F5;
    }
    .lav-comments__wrap {
      position: relative;
      margin-top: 16px;
    }
    .lav-comments__inner {
      overflow: hidden;
    }
    .lav-comments__next {
      position: absolute;
      transition: 0.3s;
      cursor: pointer;
      z-index: 10;
      right: 0;
      top: 50%;
      border: 1px solid #F5F5F5;
      width: 32px;
      height: 32px;
      background: #fff;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transform: translate(50%, -50%);
    }
    .lav-comments__next:hover {
      border-color: #d6d6d6;
      transform: scale(1.1) translate(50%, -50%);
    }
    .lav-comments {
      display: flex;
      transition: 0.4s;
      transform: translateX(0%);
    }
    .lav-comment {
      border-radius: 4px;
      box-sizing: border-box;
      flex-shrink: 0;
      width: 100%;
      border: 1px solid #D6D6D6;
      padding: 14px;
      background: #fff;
    }
    .lav-comment__head {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .lav-comment__name {
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      color: #000000;
    }
    .lav-comment__date {
      letter-spacing: 0.5px;
      color: #5E5E5E;
      font-weight: 300;
      font-size: 12px;
      line-height: 16px;
    }
    .lav-comment__country {
      display: flex;
      align-items: center;
      font-weight: 300;
      font-size: 12px;
      line-height: 1;
      letter-spacing: 0.5px;
      color: #000000;
      margin-top: 13px;
    }
    .lav-comment__country img {
      margin-right: 4px;
      width: 20px;
      height: auto;
    }
    .lav-comment__rate {
      margin-top: 15px;
      display: flex;
      align-items: center;
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
      color: #000000;
    }
    .lav-comment__rate img {
      margin-right: 10px;
    }
    .lav-comment__descr {
      margin-top: 8px;
      font-weight: 300;
      font-size: 12px;
      line-height: 16px;
      color: #5E5E5E;
    }
    .lav-payments {
      margin-top: 20px;
      text-align: center;
    }
    .lav-payments img {
      max-width: 75%;
    }

  `;

  let stylesEl = document.createElement('style');
  stylesEl.id = 'lav-styles';
  stylesEl.innerHTML = stylesList;
  document.addEventListener('DOMContentLoaded', function () {
    document.body.appendChild(stylesEl);
    initExp();
  });

  // let observer = new MutationObserver(mutations => {
  //   for (let mutation of mutations) {
  //     for (let node of mutation.addedNodes) {
  //       if (!(node instanceof HTMLElement)) continue;
  //       if (node.classList.contains('cart-page')) {
  //         initExp();
  //         observer.disconnect();
  //       }
  //     }
  //   }
  // });

  // observer.observe(document.querySelector('body'), {
  //   childList: true,
  //   subtree: true
  // });

  /* STYLES insert end */
  function initExp() {
    console.log('testik3');
    gaEvent('loaded');
    addGuarantee();
    addComments();
    addPayments();
    document
      .querySelector('#continue_button')
      .addEventListener('click', function (e) {
        e.preventDefault();
        gaEvent('Click Continue to shipping');
      });

    (function (h, o, t, j, a, r) {
      h.hj =
        h.hj ||
        function () {
          (h.hj.q = h.hj.q || []).push(arguments);
        };
      h._hjSettings = { hjid: 2442662, hjsv: 6 };
      a = o.getElementsByTagName('head')[0];
      r = o.createElement('script');
      r.async = 1;
      r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
      a.appendChild(r);
    })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
    hj('trigger', 'chekout_improvements');
  }

  function addGuarantee() {
    let guaranteeEl = `
      <div class='lav-guarantee'>
        <div class="lav-guarantee__title">14 days money-back guarantee</div>
        <div class="lav-guarantee__caption"></div>
      </div>
    
      <div class='lav-guarantee' style='display: none;'>
        <div class="lav-guarantee__title">14 days money-back guarantee</div>
        <div class="lav-guarantee__caption"></div>
      </div>
    `;

    document
      .querySelector('.order-summary__sections')
      .insertAdjacentHTML('beforeend', guaranteeEl);

    fetch('https://ipinfo.io/json?token=ad3627629fa51d')
      .then((response) => response.json())
      .then((data) => {
        if (data.country == 'US') {
          document.querySelector('.lav-guarantee__caption').innerText =
            'Free returns if size doesn’t match';
        } else {
          document.querySelector('.lav-guarantee__caption').innerText =
            'Hustle free returns if size doesn’t match';
        }
      });
  }

  function addComments() {
    console.log('testik4');

    let commentsEl = `
      <div class='lav-comments__wrap'>
        <div class='lav-comments__next'>
          <img src="${REPO_DIR}/img/arrow-right.svg">
        </div>
        <div class='lav-comments__inner'>
          <div class='lav-comments'>
            <div class="lav-comment">
              <div class="lav-comment__head">
                <div class="lav-comment__name">Jessica N.</div>
                <div class="lav-comment__date">04/16/2021</div>
              </div>
              <div class="lav-comment__country">
                <img src="${REPO_DIR}/img/flag-us.png" alt="">
                United States
              </div>
              <div class="lav-comment__rate">
                <img src="${REPO_DIR}/img/stars.svg" alt="">
                Super Sexy and Comfy
              </div>
              <div class="lav-comment__descr">I bought a pair of these to go with a bra in the same fabric, but my partner had such a positive reaction to them that I bought 3 more pairs. They're comfortable to wear and well made. Excited to have these as my go-to sexy panty.</div>
            </div>
            
            <div class="lav-comment">
              <div class="lav-comment__head">
                <div class="lav-comment__name">Catherine B.</div>
                <div class="lav-comment__date">11/11/2020</div>
              </div>
              <div class="lav-comment__country">
                <img src="${REPO_DIR}/img/flag-us.png" alt="">
                United States
              </div>
              <div class="lav-comment__rate">
                <img src="${REPO_DIR}/img/stars.svg" alt="">
                Amazing
              </div>
              <div class="lav-comment__descr">This is the sexiest bra I've ever owned. </div>
            </div>
            
            <div class="lav-comment">
              <div class="lav-comment__head">
                <div class="lav-comment__name">Lynn V.</div>
                <div class="lav-comment__date">02/11/2021</div>
              </div>
              <div class="lav-comment__country">
                <img src="${REPO_DIR}/img/flag-ca.png" alt="">
                Canada
              </div>
              <div class="lav-comment__rate">
                <img src="${REPO_DIR}/img/stars.svg" alt="">
                Sooo sexy..
              </div>
              <div class="lav-comment__descr">The product was exactly what my boyfriend wanted! LOL.. mesh is a hard product to find. I bought both the bra and panty, which fit amazingly! I bought two more pieces after this and have the same amazing feel.</div>
            </div>
          </div>
        </div>
      </div>
    `;

    document
      .querySelector('.order-summary__sections')
      .insertAdjacentHTML('beforeend', commentsEl);

    let initialSlider = 0;
    let slidesLength = document.querySelectorAll('.lav-comment').length;

    function nextSlide() {
      if (initialSlider + 1 == slidesLength) {
        initialSlider = 0;
      } else {
        initialSlider++;
      }

      document.querySelector('.lav-comments').style.transform =
        'translateX(-' + initialSlider * 100 + '%)';
    }

    let sliderInterval = setInterval(nextSlide, 8000);

    document
      .querySelector('.lav-comments__next')
      .addEventListener('click', function (e) {
        e.preventDefault();
        nextSlide();
        clearInterval(sliderInterval);
        sliderInterval = setInterval(nextSlide, 8000);
      });
  }

  function addPayments() {
    let paymentsEL = `
      <div class="lav-payments">
        <img src="${REPO_DIR}/img/payments.png" alt="">
      </div>
    `;

    document
      .querySelector('.order-summary__sections')
      .insertAdjacentHTML('beforeend', paymentsEL);
  }
})();
