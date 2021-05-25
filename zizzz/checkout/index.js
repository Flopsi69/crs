function gaEvent(action, label = '') {
  window.dataLayer = window.dataLayer || [];

  try {
    let eventObj = {
      event: 'ga_event',
      eventCategory: 'Exp — PDP: add phone number',
      eventAction: action
    };

    if (label) {
      eventObj['eventLabel'] = label;
    }

    dataLayer.push(eventObj);
  } catch (e) {}
}

(function (h, o, t, j, a, r) {
  h.hj =
    h.hj ||
    function () {
      (h.hj.q = h.hj.q || []).push(arguments);
    };
  h._hjSettings = { hjid: 2174050, hjsv: 6 };
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

// gaEvent('loaded');

/* STYLES insert start */
let stylesList = `
.checkout-index-index .am-checkout:not(.-modern) {
  background: #fff;
}
.checkout-index-index .opc-wrapper.am-opc-wrapper {
  border: 1px solid #E3E3E3;
  max-width: 900px;
  margin: auto;
}
.checkout-index-index .opc-block-summary .minicart-items-wrapper {
  padding: 0;
}
.column.main .opc-block-summary .product-item {
  padding: 25px 0;
}
.checkout-index-index .opc-block-summary {
  margin: 0;
  padding: 0;
  background: #fff;
}
.lav-summary {
  border-left: 1px solid #E3E3E3;
  background: #fff;
  width: 315px;
  padding: 30px;
}
.lav-summary .step-title, .opc-block-summary .items-in-cart>.title {
  display: none
}
.checkout-index-index .opc-block-summary .minicart-items .product-image-container {
  width: 100%!important;
  height: 100%!important;
  float: none;
  margin-left: 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.opc-block-summary .product-item .product-item-inner {
  display: block;
  margin-bottom: 0;
}
.items-in-cart {
  margin-bottom: 0!important;
}
.table>tbody>tr>th, .table>tbody>tr>td {
  padding: 0;
  font-weight: bold;
  font-size: 18px;
  line-height: 18px;
  text-align: right;
  color: #515151;
}
.checkout-index-index .opc-block-summary .minicart-items .product-item-details {
  margin-top: 15px;
}
.minicart-items .product-item-name {
  font-weight: bold;
  font-size: 13px;
  line-height: 19px;
  color: #616666;
  margin-bottom: 0;
}
.checkout-index-index .opc-block-summary .minicart-items .product-item-details {
  padding-left: 0;
  margin-bottom: 0;
}
.opc-block-summary .product-item .product-item-name-block {
  padding-right: 0;
  display: flex;
  align-items: flex-start;
}
.minicart-items .product-item-details .details-qty .label span, .minicart-items .details-qty .label:after {
  display: none;
}
.minicart-items .product-item-details .price-including-tax {
  margin:
}
.opc-block-summary .product-item .price {
  font-weight: bold;
  font-size: 18px;
  line-height: 1;
  white-space: nowrap;
  color: #515151;
}
.minicart-items .product-item-details .details-qty {
  margin-top: 0;
  margin-left: 20px;
  font-size: 13px;
  line-height: 1;
  color: #333333;
  border: 1px solid #616666;
  padding: 10px;
}
.product-image-wrapper {
  max-height: 100%;
}
.product-image-wrapper img {
  object-fit: contain;
  width: 80px;
  height: 80px;
}
.lav-title {
  font-family: 'Varela Round';
  font-size: 18px;
  line-height: 18px;
  text-transform: uppercase;
  color: #616666;
}
.lav-link {
  font-size: 12px;
  line-height: 17px;
  color: #0088CC;
  transition: 0.3s;
}
.lav-summary__head {
  display: flex;
  align-items: flex end;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 2px solid #E3E3E3;
}
.lav-summary__footer {
  padding-top: 30px;
  border-top: 1px solid #E3E3E3;;
}
.lav-summary__line {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 13px;
  line-height: 19px;
  color: #515151;
  font-weight: bold;
}
.lav-summary__line + .lav-summary__line {
  margin-top: 15px;
}
.lav-summary__line-total {
  font-size: 18px;
  line-height: 1;
  white-space: nowrap;
}
.lav-summary__value {
  text-align: right;
  margin-left: 10px;
}
.lav-summary {}
.lav-summary {}

// font-family: 'Varela Round';
`;

// connect to DOM
let styles = document.createElement('style');
styles.id = 'go-phone-styles';
styles.innerHTML = stylesList;
document.body.appendChild(styles);

/* STYLES insert end */

// CODE START ***
// var intervalInit = setInterval(() => {
//   if (typeof advertId !== 'undefined') {
//     console.log('success..');
//     clearInterval(intervalInit);
//     init();
//   } else {
//     console.log('try one more..');
//   }
// }, 500);
initExp();
function initExp() {
  // let shippingAdressEl = document.querySelector('.')

  let initBlock = `
    <div class="opc-wrapper layout-2-columns am-opc-wrapper am-submit-summary" data-bind="css: $data.additionalClasses">
      <div class='lav-wrap'>
        <div class='lav-steps'></div>
        <div class='lav-summary'>
          <div class='lav-summary__head'>
            <div class='lav-title lav-summary__title'>Your order</div>
            <a class='lav-summary__back lav-link' href=''>Back to shopping</a>
          </div>

          <div class='lav-summary__footer'>
              <div class='lav-summary__line'>
                <div class='lav-summary__key'>Tax</div>
                <div class='lav-summary__value lav-summary__value-tax'></div>
              </div>
              <div class='lav-summary__line lav-summary__line-total'>
                <div class='lav-summary__key'>Grand total</div>
                <div class='lav-summary__value lav-summary__value-total'></div>
              </div>
            </div>
        </div>
        
      </div>
    </div>
  `;

  document
    .querySelector('.opc-wrapper')
    .insertAdjacentHTML('beforebegin', initBlock);

  initSummary();
}

function initSummary() {
  let orderSummaryEl = document.querySelector(
    '.checkout-index-index .opc-block-summary'
  );

  document
    .querySelector('.lav-summary__footer')
    .insertAdjacentElement('beforebegin', orderSummaryEl);

  document.querySelectorAll('.product-item').forEach(function (el) {
    if (el.querySelector('.price')) {
      el.querySelector('.product-image-container').insertAdjacentElement(
        'beforeend',
        el.querySelector('.price')
      );
    }
  });

  if (document.querySelector('.totals-tax .price')) {
    document.querySelector('.lav-summary__value-tax').innerText =
      document.querySelector('.totals-tax .price').innerText;
  }

  if (document.querySelector('.grand.totals .price')) {
    document.querySelector('.lav-summary__value-total').innerText =
      document.querySelector('.grand.totals .price').innerText;
  }
}
