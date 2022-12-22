console.log('initExp');

/********* Settings **********/
const settings = {
  dir: 'https://flopsi69.github.io/crs/carid/priceGuarantee',
  observe: true,
};

// Alalytic
function gaEvent(action, label) {
  let type = 'Desktop';
  if (window.innerWidth < 768) {
    type = 'Mobile';
  }

  if (!label) {
    label = '';
  }
  try {
    var objData = {
      event: 'event-to-ga',
      eventCategory: 'Exp: PDP Price match information. ' + type,
      eventAction: action,
      eventLabel: label,
      eventValue: '',
    };
    console.log('EventFire:', objData);
    dataLayer.push(objData);
  } catch (e) {
    console.log('Event Error:', e);
  }
}

let guaranteeEl = `
  <div class='lav-price'>
    <img class='lav-price__star' src='${settings.dir}/img/star.svg' />
    <span class='lav-price__caption'>Price match guarantee</span>
    <div class='lav-price__info'>
      <img src='${settings.dir}/img/info.svg' />
      <div class='lav-tip'>
        <div class='lav-tip__title'>
          <img src='${settings.dir}/img/star.svg' />
          We Price Match!
        </div>

        <div class='lav-tip__descr'>
          <p>We'll match prices listed from any competitor's website or other reputable source.</p>
          <p>If you find your product listed for <a target="_blank" href='/help-center/price-match.html'>less within one year of purchase</a>, we'll refund the difference.</p>
        </div>
      </div>
    </div>
  </div>
`;

// Observe
if (settings.observe) {
  let observer = new MutationObserver((mutations) => {
    for (let mutation of mutations) {
      for (let node of mutation.addedNodes) {
        if (!(node instanceof HTMLElement)) continue;

        console.log(node);
        if (
          !node.classList.contains('po_submodel') &&
          ((node.classList.contains('gbox_portal') &&
            node.querySelector('#child_products_tbl')) ||
            node.id == 'child_products_tbl')
        ) {
          if (node.querySelector('.lav-price__wrap')) return false;
          document
            .querySelector('#main-opts>.clear')
            .insertAdjacentHTML(
              'afterend',
              '<div class="lav-price__wrap"></div>'
            );
          document
            .querySelector('.lav-price__wrap')
            .insertAdjacentHTML('afterbegin', guaranteeEl);

          document
            .querySelector('#main-opts .lav-price')
            .addEventListener('mouseenter', function () {
              addEventHover(
                this,
                'Hover on Price match guarantee on PDP',
                'Product Options'
              );
            });
        }

        if (node.classList.contains('prod_add_to_cart')) {
          document
            .querySelector('.add-to-cart-buttons')
            .insertAdjacentHTML('afterbegin', guaranteeEl);

          document
            .querySelector('.add-to-cart-buttons .lav-price')
            .addEventListener('mouseenter', function () {
              addEventHover(
                this,
                'Hover on Price match guarantee on PDP',
                'Added to cart'
              );
            });
          // document
          //   .querySelector('.lav-price__wrap')
          //   .insertAdjacentHTML('afterbegin', guaranteeEl);
        }
      }
    }
  });

  let demoElem = document.body;

  observer.observe(demoElem, { childList: true, subtree: true });
}

// Styles
const styles = `
  .lav-price {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: default;
    padding-bottom: 10px;
  }
  .lav-price__caption {
    font-weight: 600;
    font-size: 13px;
    line-height: 1;
    text-transform: capitalize;
    color: #068922;
    margin-left: 6px;
    margin-right: 4px;
  }
  .lav-price__caption_black {
    color: #111;
  }
  .prod-info .lav-price {
    // margin-bottom: 10px;
  }
  .lav-tip {
    display: none;
    position: absolute;
    width: 320px;
    left: 50%;
    transform: translate(-50%, 100%);
    bottom: -10px;
    z-index: 10;
    box-sizing: border-box;
    padding: 20px;
    background: #FFFFFF;
    border-radius: 8px;
    box-shadow: 0px 2px 6px 2px rgb(0 0 0 / 15%);
    filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2));
  }
  .lav-price:hover .lav-tip {
    display: block;
  }
  .lav-tip:before {
    content: '';
    position: absolute;
    top: -4px;
    left: 0;
    right: 0;
    margin: auto;
    background: #FFFFFF;
    border-radius: 2px;
    transform: rotate(-45deg);
    width: 20px;
    height: 20px;
  }
  .lav-tip__title {
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 14px;
    text-transform: capitalize;
    color: #111;
  }
  .lav-tip__title img {
    width: 17px;
    flex-shrink: 0;
    margin-right: 6px;
  }
  .lav-tip__descr {
    margin-top: 15px;
  }
  .lav-tip__descr p {
    margin: 0;
    font-weight: 400;
    font-size: 13px;
    line-height: 20px;
    color: #464646;
    letter-spacing: 0;
  }
  .lav-tip__descr p + p {
    margin-top: 12px;
  }
  .lav-tip__descr a {
    color: #3761BF;
    font-weight: 500;
  }
  .lav-price__info {
    position: relative;
    line-height: 0;
  }
  #prod-slct-opts-btn-holder + .lav-price {
    display: flex;
  }
  .lav-price__wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    border-bottom: 1px solid #D8D8D8;
    margin: 0 -24px;
    padding: 0 24px;
  }
  .lav-price__wrap .lav-price {
    padding-bottom: 14px;
    padding-top: 14px;
  }
  #prod-slct-opts-btn-holder:after {
    content: '';
    display: table;
    clear: both;
  }
  .add-to-cart-buttons {
    overflow: visible;
    padding-top: 15px;
  }
  .add-to-cart-buttons .lav-price {
    width: 100%;
    border-bottom: 1px solid #f0f0f0;
    padding-bottom: 15px;
    margin-bottom: 15px;
  }
  .cart-order .lav-price {
    width: 100%;
    padding: 14px 24px;
    margin: 0 -24px;
    border-top: 1px solid #D8D8D8;
  }
  .affirm-sidebar-price::before {
    border-color: #D8D8D8;
  }
  .affirm-sidebar-price {
    margin-top: 0;
  }
  #prod-slct-opts-btn-holder + .lav-price .lav-price__caption, #main-opts .lav-price__caption, .add-to-cart-buttons .lav-price__caption {
    color: #111;
  }
  @media(max-width: 1450px) {
    .cart-order .lav-tip {
      transform: translate(-75%, 100%);
    }
    .cart-order .lav-tip:before{
      left: 50%;
    }
  }
  @media only screen and (min-width: 1024px) {
    .prod_add_to_cart_lst {
      padding-bottom: 100px;
    }
  }
  @media(max-width: 1199px) {
    #prod-slct-opts-btn-holder + .lav-price .lav-tip, .lav-price__wrap .lav-tip, .add-to-cart-buttons .lav-tip, .cart-order .lav-tip {
      transform: translate(-75%, 100%);
    }
    #prod-slct-opts-btn-holder + .lav-price .lav-tip:before, .lav-price__wrap .lav-tip:before, .add-to-cart-buttons .lav-tip:before, .cart-order .lav-tip:before{
      left: 50%;
    }
  }
  @media(max-width: 740px) {
    .lav-price__wrap {
      margin: 0 -2.02%;
      padding: 0 2.02%;
    }
    .cart-order .lav-price {
      padding: 13px 16px;
      margin: 0 -16px;
    }
    .affirm-sidebar-price::before {
      left: -16px;
      right: -16px;
    }
  }
`;

const stylesEl = document.createElement('style');
stylesEl.innerHTML = styles;
document.body.appendChild(stylesEl);
/*** STYLES / end ***/

/********* Custom Code **********/
init();
function init() {
  console.log('init');
  gaEvent('loaded');

  console.log(document.querySelector('.prod-price-h')),
    document.querySelector('#prod-slct-opts-btn-holder');
  if (document.querySelector('.prod-price-h')) {
    document
      .querySelector('.prod-price-h')
      .insertAdjacentHTML('beforebegin', guaranteeEl);

    document
      .querySelector('.prod-info .lav-price')
      .addEventListener('mouseenter', function () {
        addEventHover(this, 'Hover on Price match guarantee on PDP', 'H1');
      });
  }

  if (document.querySelector('#prod-slct-opts-btn-holder')) {
    document
      .querySelector('#prod-slct-opts-btn-holder')
      .insertAdjacentHTML('afterend', guaranteeEl);

    document
      .querySelector('#prod-slct-opts-btn-holder+.lav-price')
      .addEventListener('mouseenter', function () {
        addEventHover(
          this,
          'Hover on Price match guarantee on PDP',
          'Add to cart'
        );
      });
  }

  if (document.querySelector('.affirm-sidebar-price')) {
    document
      .querySelector('.affirm-sidebar-price')
      .insertAdjacentHTML('beforebegin', guaranteeEl);

    document
      .querySelector('.cart-order .lav-price')
      .addEventListener('mouseenter', function () {
        addEventHover(this, 'Hover on Price match guarantee on Checkout');
      });
  }
}

function addEventHover(item, a, l = '') {
  let timer = 1;
  setInterval(() => {
    timer += 1;
  }, 1000);

  if (l) {
    gaEvent(a, l);
  } else {
    gaEvent(a);
  }

  let func = function () {
    if (l) {
      gaEvent(
        a.replace('Hover on', 'Duration visibility'),
        l + ' - ' + timer + 's'
      );
    } else {
      gaEvent(a.replace('Hover on', 'Duration visibility'), timer + 's');
    }
    item.removeEventListener('mouseleave', func);
  };

  item.addEventListener('mouseleave', func);
}
