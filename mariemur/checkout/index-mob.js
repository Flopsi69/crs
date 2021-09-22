(function () {
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
    .main__content {
      padding-bottom: 0;
    }
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
      margin-bottom: 22px;
    }
    .lav-guarantee__title {
      text-transform: uppercase;
      letter-spacing: 2px;
      font-size: 14px;
      line-height: 1.15;
    }
    .lav-guarantee__caption {
      margin-top: 8px;
      font-weight: 300;
      font-size: 12px;
      line-height: 14px;
      color: #F5F5F5;
    }
    .lav-comments__wrap {
      position: relative;
      background: #F5F5F5;
      padding: 60px 14px 40px;
      margin: 0 -14px;
    }
    .lav-comments {
      transition: 0.4s;
    }
    .lav-comment {
      box-sizing: border-box;
      padding-top: 28px;
      padding-bottom: 20px;
      border-top: 1px solid #D6D6D6;
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
      margin-top: 12px;
      font-weight: 300;
      font-size: 14px;
      line-height: 20px;
      color: #5E5E5E;
    }
    .lav-payments {
      margin-top: 55px;
      margin-bottom: 55px;
      text-align: center;
    }
    .lav-payments img {
      max-width: 92%;
    }

  `;

  let stylesEl = document.createElement('style');
  stylesEl.id = 'lav-styles';
  stylesEl.innerHTML = stylesList;
  let initInterval = setInterval(() => {
    console.log('try');
    if (document.querySelector('body')) {
      console.log('Fire!');
      clearInterval(initInterval);
      document.querySelector('body').appendChild(stylesEl);
      initExp();
    }
  }, 500);

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
  // initExp();
  function initExp() {
    gaEvent('loaded');
    addGuarantee();
    addPayments();
    addComments();
    document
      .querySelector('#continue_button')
      .addEventListener('click', function (e) {
        gaEvent('Click Continue to shipping');
      });
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

    document.querySelector('nav').insertAdjacentHTML('afterend', guaranteeEl);

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
    let commentsEl = `
      <div class='lav-comments__wrap'>
        <div class='lav-comments__head'>
          <div class='lav-comments__title'>Reviews</div>
          <div class='lav-comments__info'>
            <div class='lav-comments__info-rate'>
              <span>4.8</span>
              <img src="${REPO_DIR}/img/stars.svg" alt="">
            </div>
            <div class='lav-comments__info-caption'>Based on 24 Reviews</div>
          </div>
        </div>

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
    `;

    document
      .querySelector('.main__content')
      .insertAdjacentHTML('beforeend', commentsEl);
  }

  function addPayments() {
    let paymentsEL = `
      <div class="lav-payments">
        <img src="${REPO_DIR}/img/payments.png" alt="">
      </div>
    `;

    document
      .querySelector('.main__content')
      .insertAdjacentHTML('beforeend', paymentsEL);
  }
})();
