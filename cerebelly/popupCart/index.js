console.dir('initExp');

// TODO
// Discount procent 15/25
// hide and show sticky
// checkout move ot tob bottom panel

/********* Settings **********/
const settings = {
  dir: 'https://flopsi69.github.io/crs/cerebelly/popupCart',
  clarity: true,
  observe: true,
};

//Clarity
if (settings.clarity) {
  const clarityInterval = setInterval(function () {
    if (typeof clarity == 'function') {
      clearInterval(clarityInterval);
      clarity('set', 'sticky_button', 'variant_1');
    }
  }, 1000);
}

// Alalytic
function gaEvent(action, label) {
  if (!label) {
    label = '';
  }
  try {
    var objData = {
      event: 'event-to-ga',
      eventCategory: 'Exp: Sticky button',
      eventAction: action,
      eventLabel: label,
      eventValue: '',
    };
    console.dir(objData.eventAction);
    dataLayer.push(objData);
  } catch (e) {}
}

// Observe
let observer, observeTarget;
let isProgress = 0;
if (settings.observe) {
  observer = new MutationObserver((mutations) => {
    for (let mutation of mutations) {
      for (let node of mutation.addedNodes) {
        if (!(node instanceof HTMLElement)) continue;

        // Code Here
        if (
          node.closest('.modal') &&
          node.querySelector('.cart-product .title') &&
          !node.closest('.undefined')
        ) {
          console.dir('ShowProduct modal');
          setTimeout(() => {
            fillCartData(document.querySelector('.modal'));
            if (!document.querySelector('.lav-temp-init') && !isProgress) {
              gaEvent('Cart pop up shown');
              isProgress++;
              setTimeout(() => {
                isProgress = 0;
              }, 2000);
            }
          }, 700);
        }

        if (
          node.classList.contains('undefined') &&
          node.querySelector('.cart-product')
        ) {
          node.querySelector('.default-close').click();
          setTimeout(() => {
            document.querySelector('.mobile-cart-box').click();
          }, 100);
        }

        console.dir(node);
      }

      for (let node of mutation.removedNodes) {
        if (!(node instanceof HTMLElement)) continue;

        if (
          node.classList.contains('modal') &&
          !document.querySelector('.modal') &&
          window.innerWidth < 900 &&
          document.querySelector('.lav-sticky_hide')
        ) {
          document
            .querySelector('.lav-sticky_hide')
            .classList.remove('lav-sticky_hide');
        }
      }
    }
  });

  let intrevalObserver = setInterval(() => {
    if (document.querySelector('.e-page-content > div:last-child')) {
      clearInterval(intrevalObserver);
      observeTarget = document.querySelector(
        '.e-page-content > div:last-child'
      );

      setTimeout(init, 1500);

      observer.observe(observeTarget, { childList: true, subtree: true });
    }
  }, 500);
}

// Styles
const styles = `
  .promo_bar-hide {
    display: none!important;
  }
  // .e-main-container.with-promo .e-page-content-wrap .boxmenuContainer {
  //   top: 46px!important;
  // }
  .body-static .element-filter {
    position: static!important;
  }
  .modal .custom .checkout {
    font-weight: 700!important;
    letter-spacing: 0.05em!important;
    font-size: 14px!important;
    margin-bottom: 10px!important;
  }
  .lav-free-shipping {
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    background: #EBEEF7;
    font-size: 14px;
    line-height: 24px;
    color: #3956A7;
    width: 100%;
  }
  .lav-free-shipping span {
    font-weight: 700;
  }
  .lav-free-shipping svg {
    margin-right: 7px;
    width: 18px;
  }
  .cart-product-actions {
    padding-left: 18px!important;
    padding-right: 18px!important;
    margin: 0!important;
  }
  .lav-promo-hided .modal .main {
    margin-top: 51px!important;
  }
  .cart-product-actions {
    padding-bottom: 20px!important;
  }
  .mobile-cart-box[data-count]:after {
    content: attr(data-count)!important;
    font-weight: 600;
    font-size: 12px;
    color: #FFFFFF;
    width: 18px!important;
    height: 18px!important;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%!important;
    padding-bottom: 1.8px;
  }
  .modal.undefined.css-n8qisr {
    opacity: 0!important;
  }
  @media(max-width: 900px) {
    .lav-sticky {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background: #FFFFFF;
      box-shadow: rgb(0 0 0) 0px 6px 7px;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      z-index: 99;
      transition: 0.35s;
    }
    .lav-sticky__price {
      font-weight: 700;
      font-size: 18px;
      line-height: 1;
      color: #3956A7;
    }
    .lav-sticky__btn {
      margin-left: 7px;
      color: rgb(255, 255, 255);
      background-color: rgb(252, 77, 56);
      border-color: rgb(252, 77, 56);
      border-radius: 25px;
      padding: 10px 20px;
      border: 2px solid;
      border-collapse: collapse;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 13px;
      line-height: 16px;
      text-align: center;
      letter-spacing: 0.05em;
      cursor: pointer;
      transition: all 0.2s ease 0s;
      text-decoration: none;
    }
    .lav-sticky__btn:hover {
      color: rgb(252, 77, 56);
      background-color: rgb(255, 178, 196);
      border-color: rgb(255, 178, 196);
    }
    .lav-sticky_hide {
      opacity: 0;
      pointer-events: none;
    }
  }
  .lav-temp-init .e-page-content>div:last-child {
    opacity: 0!important;
    pointer-events: none!important;
  }
  .cart-wrapper .cart-product-actions button.checkout {
    display: none!important;
  }
  .lav-checkout {
    margin-bottom: 10px;
  }
  .e-page-content-wrap {
    padding-bottom: 50px;
  }
  .cart-product-wrapper_free {

  }
  @media(min-width: 900px) {
    .modal .main {
      margin-right: 0;
    }
    .lav-sticky {
      display: flex;
      align-items: center;
      margin-left: 13px;
    }
    .lav-sticky__price {
      margin-right: 18px;
      margin-left: 13px;
      font-size: 18px;
      line-height: 1;
      color: #3956A7;
      font-weight: 700;
    }
  }
`;

const stylesEl = document.createElement('style');
stylesEl.innerHTML = styles;
document.body.appendChild(stylesEl);
/*** STYLES / end ***/

/********* Custom Code **********/
function init() {
  console.dir('init');
  gaEvent('loaded');
  // initFill();
  setTimeout(initFill, 2000);
  if (window.innerWidth < 900) {
    setInterval(() => {
      handleTopBanner();
    }, 1500);
  }
  if (document.querySelector('.e-my-account')) {
    document
      .querySelector('.e-my-account')
      .addEventListener('click', function () {
        gaEvent('Account icon clicked');
      });
  }

  document.addEventListener('click', function (e) {
    if (
      e.target.classList.contains('remove') ||
      e.target.closest('.remove') ||
      e.target.classList.contains('add') ||
      e.target.closest('.add') ||
      e.target.closest('.cart-product-reset')
    ) {
      if (
        document.querySelector('.modal') &&
        document.querySelector('.modal .cart-product')
      ) {
        fillCartData(document.querySelector('.modal'));
      }

      setTimeout(function () {
        if (
          document.querySelector('.modal') &&
          document.querySelector('.modal .cart-product')
        ) {
          fillCartData(document.querySelector('.modal'));
        }
      }, 700);

      setTimeout(function () {
        if (
          document.querySelector('.modal') &&
          document.querySelector('.modal .cart-product')
        ) {
          fillCartData(document.querySelector('.modal'));
        }
      }, 1500);
    }

    if (!document.querySelector('.lav-temp-init')) {
      if (
        e.target.classList.contains('continue') &&
        e.target.closest('.modal .custom')
      ) {
        gaEvent('Continue shopping in cart link click');
      }

      if (
        (e.target.classList.contains('default-close') ||
          e.target.closest('.default-close-container')) &&
        !e.target.closest('.undefined')
      ) {
        gaEvent('Cart closed by X');
      }
    }
  });
}

function handleTopBanner() {
  if (
    !document.querySelector('#promo_bar') ||
    document.querySelector('.promo_bar-handled')
  ) {
    return false;
  }

  for (let item of document.querySelectorAll('#promo_bar')) {
    item.classList.add('promo_bar-handled');
  }

  let lastScrollTop = 0;

  window.onscroll = function () {
    var st = window.pageYOffset || document.documentElement.scrollTop;

    if (st > lastScrollTop) {
      for (let item of document.querySelectorAll('#promo_bar')) {
        item.classList.add('promo_bar-hide');
      }
      document.querySelector('body').classList.add('lav-promo-hided');
      document
        .querySelector('.e-main-container')
        .classList.remove('with-promo');

      document.body.classList.add('body-static');
    } else {
      for (let item of document.querySelectorAll('#promo_bar')) {
        item.classList.remove('promo_bar-hide');
      }
      document.querySelector('body').classList.remove('lav-promo-hided');
      document.querySelector('.e-main-container').classList.add('with-promo');
      document.body.classList.remove('body-static');
    }

    lastScrollTop = st <= 0 ? 0 : st;
  };
}

function initFill() {
  document.body.classList.add('lav-temp-init');
  document.querySelector('.mobile-cart-box').click();

  setTimeout(() => {
    document.querySelector('.default-close').click();
    setTimeout(() => {
      document.body.classList.remove('lav-temp-init');
    }, 500);
  }, 2500);
}

function fillCartData(parent) {
  if (!parent || !parent.querySelector('.custom .cart-product')) return false;

  console.dir('fillCartData');
  console.dir(parent);

  if (window.innerWidth < 900 && document.querySelector('.lav-sticky')) {
    document.querySelector('.lav-sticky').classList.add('lav-sticky_hide');
  }

  let procentDiscount = 25;
  if (document.querySelector('.e-my-account span')) {
    procentDiscount = 15;
  }

  if (!parent.querySelector('.lav-checkout')) {
    parent
      .querySelector('.checkout')
      .insertAdjacentHTML(
        'beforebegin',
        `<button tabindex="0" class="button primary red lav-checkout">CHECKOUT NOW - GET ${procentDiscount}% OFF</button>`
      );

    parent
      .querySelector('.lav-checkout')
      .addEventListener('click', function () {
        gaEvent('Checkout Now CTA cick in cart');
        parent.querySelector('.checkout').click();
      });
  }

  const totalCartPrice = +Array.from(
    parent.querySelectorAll('.custom .product-price')
  )
    .reduce((prev, curr) => {
      return prev + +parseFloat(curr.innerText.replace('$', '')).toFixed(2);
    }, 0)
    .toFixed(2);

  const totalCartCount = Array.from(
    document.querySelectorAll('.modal .custom .cart-product')
  ).reduce((prev, curr) => {
    return (
      prev +
      (curr.querySelector('input')
        ? parseInt(curr.querySelector('input').value)
        : 1)
    );
  }, 0);

  if (totalCartPrice > 45) {
    parent
      .querySelector('.cart-product-wrapper')
      .classList.add('cart-product-wrapper_free');
    if (!document.querySelector('.lav-free-shipping')) {
      parent.querySelector('.lav-checkout').insertAdjacentHTML(
        'beforebegin',
        `
      <div class='lav-free-shipping'>
        <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.28569 6.42845H8.99981V7.71414H1.28569V6.42845ZM0 3.21423H6.42844V4.49992H0V3.21423Z" fill="#3956A7"/>
          <path d="M17.9481 6.818L16.0196 2.31809C15.9701 2.20243 15.8877 2.10386 15.7827 2.0346C15.6776 1.96535 15.5546 1.92846 15.4288 1.92853H13.5003V0.642844C13.5003 0.472351 13.4325 0.308841 13.312 0.188285C13.1914 0.0677281 13.0279 0 12.8574 0H2.57191V1.28569H12.2146V9.35723C11.9216 9.52733 11.6653 9.75373 11.4603 10.0234C11.2553 10.293 11.1057 10.6006 11.0202 10.9283H6.98053C6.82407 10.3224 6.45197 9.79425 5.93398 9.44299C5.41599 9.09173 4.78767 8.94145 4.1668 9.02031C3.54594 9.09917 2.97514 9.40176 2.56142 9.87136C2.14769 10.341 1.91943 10.9453 1.91943 11.5712C1.91943 12.197 2.14769 12.8014 2.56142 13.271C2.97514 13.7406 3.54594 14.0432 4.1668 14.1221C4.78767 14.2009 5.41599 14.0506 5.93398 13.6994C6.45197 13.3481 6.82407 12.82 6.98053 12.214H11.0202C11.16 12.7657 11.4798 13.2551 11.929 13.6046C12.3782 13.9541 12.9311 14.1439 13.5003 14.1439C14.0694 14.1439 14.6223 13.9541 15.0715 13.6046C15.5207 13.2551 15.8405 12.7657 15.9803 12.214H17.3573C17.5278 12.214 17.6913 12.1463 17.8119 12.0257C17.9324 11.9052 18.0002 11.7417 18.0002 11.5712V7.07128C18.0002 6.98419 17.9825 6.89801 17.9481 6.818V6.818ZM4.50044 12.8569C4.24616 12.8569 3.99758 12.7815 3.78615 12.6402C3.57472 12.4989 3.40993 12.2981 3.31262 12.0632C3.21531 11.8283 3.18985 11.5698 3.23946 11.3204C3.28907 11.071 3.41152 10.8419 3.59132 10.6621C3.77113 10.4823 4.00022 10.3598 4.24962 10.3102C4.49901 10.2606 4.75752 10.2861 4.99245 10.3834C5.22738 10.4807 5.42818 10.6455 5.56945 10.8569C5.71072 11.0683 5.78613 11.3169 5.78613 11.5712C5.78579 11.9121 5.65022 12.2389 5.40918 12.4799C5.16814 12.721 4.84132 12.8565 4.50044 12.8569V12.8569ZM13.5003 3.21422H15.0045L16.3828 6.42844H13.5003V3.21422ZM13.5003 12.8569C13.246 12.8569 12.9974 12.7815 12.786 12.6402C12.5745 12.4989 12.4097 12.2981 12.3124 12.0632C12.2151 11.8283 12.1897 11.5698 12.2393 11.3204C12.2889 11.071 12.4113 10.8419 12.5911 10.6621C12.7709 10.4823 13 10.3598 13.2494 10.3102C13.4988 10.2606 13.7573 10.2861 13.9923 10.3834C14.2272 10.4807 14.428 10.6455 14.5693 10.8569C14.7105 11.0683 14.7859 11.3169 14.7859 11.5712C14.7856 11.9121 14.65 12.2389 14.409 12.4799C14.168 12.721 13.8411 12.8565 13.5003 12.8569ZM16.7145 10.9283H15.9803C15.8387 10.3777 15.5184 9.88962 15.0696 9.54061C14.6208 9.1916 14.0688 9.00139 13.5003 8.99981V7.71413H16.7145V10.9283Z" fill="#3956A7"/>
        </svg>
      
        Your order qualifies for&nbsp;<span>FREE</span>&nbsp;Shipping
      </div>
    `
      );
    }
  } else if (document.querySelector('.lav-free-shipping')) {
    parent
      .querySelector('.cart-product-wrapper')
      .classList.remove('cart-product-wrapper_free');
    document.querySelector('.lav-free-shipping').remove();
  }

  if (totalCartPrice > 0) {
    if (
      !document.querySelector('.lav-sticky') &&
      location.pathname == '/shop'
    ) {
      if (
        window.innerWidth > 900 &&
        document.querySelector('.mobile-cart-box')
      ) {
        document.querySelector('.mobile-cart-box').insertAdjacentHTML(
          'afterend',
          `
          <div class='lav-sticky'>
            <div class='lav-sticky__price'>$${totalCartPrice}</div>
            <button class='lav-sticky__btn button primary red'>CHECKOUT NOW - GET ${procentDiscount}% OFF</button>
          </div>
          `
        );
      } else {
        document.body.insertAdjacentHTML(
          'beforeend',
          `
          <div class='lav-sticky lav-sticky_hide'>
            <div class='lav-sticky__price'>$${totalCartPrice}</div>
            <button class='lav-sticky__btn button primary red'>CHECKOUT NOW - GET ${procentDiscount}% OFF</button>
          </div>
          `
        );
      }

      document
        .querySelector('.lav-sticky__btn')
        .addEventListener('click', function (e) {
          e.preventDefault();
          gaEvent('Checkout Now sticky click');
          location.href = '/cart';
        });
    }

    if (document.querySelector('.lav-sticky__price')) {
      document.querySelector('.lav-sticky__price').innerHTML =
        '$' + totalCartPrice;
    }
  } else if (document.querySelector('.lav-sticky')) {
    document.querySelector('.lav-sticky').remove();
  }

  if (totalCartCount > 0) {
    document.querySelector('.mobile-cart-box').dataset.count = totalCartCount;
  } else {
    document.querySelector('.mobile-cart-box').removeAttribute('data-count');
  }
}
