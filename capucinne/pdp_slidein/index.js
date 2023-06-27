console.log('initExp');

(function () {
  /********* exp **********/
  const exp = {
    dir: 'https://flopsi69.github.io/crs/capucinne/pdp_slidein',
    observer: false,
    clarity: {
      enable: true,
      params: ['set', 'improve_upgrade_popup_v2', 'variant_1'],
    },
    debug: true,
  };

  // Observer
  if (exp.observer) {
    initObserver((el) => {
      console.log(el);
    });
  }

  /*** STYLES / Start ***/
  const styles = `
    .product-block--sales-point {
      dispaly: none;
    }
    [data-product-price] {
      display: flex;
    }
    .lav-discount {
      display: flex;
      align-items: center;
      color: #C1856F;
      font-size: 16px;
      line-height: 1;
      margin-left: 10px;
    }
    .lav-discount__caption {
      font-weight: 600;
      border-bottom: 1px solid #C1856F;
      margin: 0 2px 0 4px;
    }

    .lav-point__wrap {
      padding: 16px;
      margin-top: 20px;
      background-color: #F6F5F5;
      color: #1C1D1D;
      font-size: 14px;
      font-family: Poppins;
      line-height: 25px;
    }
    .lav-point {
      display: flex;
      align-items: center;
    }
    .lav-point span {
      font-weight: 600;
    }
    .lav-point:last-child {
      text-transform: uppercase;
      font-weight: 600;
      cursor: pointer;
      transtiion: all .3s ease;
    }
    .lav-point:last-child:hover {
      oapcity: 0.8;
    }
    .lav-point__icon {
      margin-right: 8px;
    }
    .lav-point + .lav-point {
      margin-top: 12px;
    }

    .lav-earn {
      margin-top: 16px;
      padding: 12px;
      background-color: #F6ECEA;
    }
    .lav-earn__img {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 0;
      line-height; 0;
    }
    .lav-earn__img img {
      max-width: 52px;
    }
    .lav-earn__caption {
      color: #1C1D1D;
      font-size: 12px;
      line-height: 18px;
    }
    .lav-earn__caption span {
      font-weight: 600;
    }
    .lav-earn {}
  `;

  const stylesEl = document.createElement('style');
  stylesEl.innerHTML = styles;
  waitFor(
    () => document.head,
    () => {
      document.head.appendChild(stylesEl);
    },
    100
  );
  /*** STYLES / End ***/

  /********* Custom Code **********/
  init();
  function init() {
    console.log('init');

    $el('[href="#reviews"]')
      .closest('.product-block')
      .classList.add('lav-reviews');

    $el('[data-product-blocks]').insertAdjacentElement(
      'afterbegin',
      $el('[href="#reviews"]').closest('.product-block')
    );

    const getDiscount = `
      <div class='lav-discount'>
        <div class='lav-discount__icon'>
          <img src='${dir}/img/discount-icon.svg' />
        </div>
        <div class='lav-discount__caption'>Get Your 10% Off</div>
        <div class='lav-discount__arrow'>
          <img src='${dir}/img/discount-icon.arrow' />
        </div>
      </div>
    `;

    $el('[data-product-price]').insertAdjacentHTML('beforeend', getDiscount);

    const points = `
      <div class='lav-point__wrap'>
        <div class='lav-point'>
          <img class='lav-point__icon' src='${dir}/img/point1.svg' />
          <div class='lav-points__caption'><span>14 days Free</span> Returns & Exchange </div>
        </div>

        <div class='lav-point'>
          <img class='lav-point__icon' src='${dir}/img/point2.svg' />
          <div class='lav-points__caption'><span>Free</span> worldwide insured <span>shipping</span></div>
        </div>

        <div class='lav-point'>
          <img class='lav-point__icon' src='${dir}/img/point3.svg' />
          <div class='lav-points__caption'>See it live - schedule a meeting</div>
        </div>
      </div>
    `;

    $el('.product-block--sales-point').insertAdjacentHTML(
      'beforebegin',
      points
    );

    $el('.lav-point:last-child').addEventListener('click', () => {
      $el('.product-block--sales-point span[onclick]').click();
    });

    const earn = `
      <div class='lav-earn'>
        <div class='lav-earn__img'>
          <img src='${dir}/img/earn.png' />
        </div>
        <div class='lav-earn__caption'><span>A free pair</span> of Moon Shaped Capucinne earrings is included in your order of <span>$1500 or more</span>, they can be find in your cart</div>
      </div>
    `;

    $el('.one-whole')
      .closest('.product-block')
      .insertAdjacentHTML('afterend', earn);
  }

  // *** Utils *** //

  // Waiting for loading by condition
  function waitFor(condition, cb, ms = 1000) {
    if (condition()) {
      if (typeof cb == 'function') cb();
      return;
    }

    let interval = setInterval(function () {
      if (condition()) {
        clearInterval(interval);
        if (typeof cb == 'function') cb();
      }
    }, ms);
  }

  // Alalytic 3
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
      if (!exp.debug) {
        dataLayer.push(objData);
      }
    } catch (e) {
      console.log('Event Error:', e);
    }
  }

  // Alalytic 4
  function gaEvent(name = '', desc = '', type = '', loc = '') {
    try {
      var objData = {
        event: 'event-to-ga4',
        event_name: name,
        event_desc: desc,
        event_type: type,
        event_loc: loc,
      };
      console.log('eventFire', objData);
      if (!settings.debug) {
        dataLayer.push(objData);
      }
    } catch (e) {
      console.log('Event Error:', e);
    }
  }
  // Mutation Observer
  function initObserver(cb) {
    let observer = new MutationObserver((mutations) => {
      for (let mutation of mutations) {
        for (let node of mutation.addedNodes) {
          if (!(node instanceof HTMLElement)) continue;

          cb(node);
        }
      }
    });

    waitFor(
      () => document.body,
      () => {
        observer.observe(document.body, { childList: true, subtree: true });
      },
      100
    );
  }

  //Clarity
  if (!exp.debug && exp.clarity.enable) {
    waitFor(
      () => typeof clarity == 'function',
      () => {
        clarity(...exp.clarity.params);
      }
    );
  }

  function $el(selector, context = document) {
    return context.querySelector(selector);
  }

  function $$el(selector, context = document) {
    return context.querySelectorAll(selector);
  }
})();
