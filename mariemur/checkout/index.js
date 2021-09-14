(function () {
  function gaEvent(action, label, value) {
    if (!action) {
      action = '';
    }
    window.dataLayer = window.dataLayer || [];
    try {
      let eventObj = {
        event: 'event-to-ga',
        eventCategory: 'Exp - Pricing page buy annual plan',
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
  `;

  let stylesEl = document.createElement('style');
  stylesEl.id = 'lav-styles';
  stylesEl.innerHTML = stylesList;
  document.body.appendChild(stylesEl);

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
  initExp();
  function initExp() {
    addGuarantee();
    addComments();
    addPayments();
  }

  function addGuarantee() {
    let guaranteeEl = `
      <div class='lav-guarantee'>
        <div class="lav-guarantee__title">14 days money-back guarantee</div>
        <div class="lav-guarantee__caption">Hustle free returns if size doesn’t match</div>
      </div>
    
      <div class='lav-guarantee'>
        <div class="lav-guarantee__title">14 days money-back guarantee</div>
        <div class="lav-guarantee__caption">Free returns if size doesn’t match</div>
      </div>
    `;

    document
      .querySelector('.order-summary__sections')
      .insertAdjacentHTML('beforeend', guaranteeEl);
  }

  function addComments() {
    let commentsEl = `
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
    `;

    document
      .querySelector('.order-summary__sections')
      .insertAdjacentHTML('beforeend', commentsEl);
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
