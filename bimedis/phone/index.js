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
if (window.innerWidth < 992) {
  hj('trigger', 'pdp__add_phone_number_mob');
} else {
  hj('trigger', 'pdp__add_phone_number_des');
}

gaEvent('loaded');

/* STYLES insert start */
let stylesList = `
.go-phone-number {
  background: #FFFFFF;
  text-align: center;
  border: 2px solid #485280;
  padding: 7px 11px;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  color: rgba(38, 39, 44, 0.8);
  letter-spacing: 0.3px;
  display: flex;
  transition: 0.35s;
  flex-flow:column;
  align-items: center;
}
.go-phone-number a {
  display: inline-block;
  padding: 3px 10px;
}
.go-phone-number.active a {
  color: #485280;
}
.go-phone-number.active a:hover {
  opacity: .8;
}
// .go-phone-number:hover {
//   background-color: #485280;
//   color: #fff;
// }
// .go-phone-number:hover span{
//   color: #fff;
// }
.go-b-advert-block {
  height: auto!important;
  padding-bottom: 60px!important;
}
.go-phone-number + .go-phone-number {
  margin-top: 10px;
}
.go-phone-number span {
  font-weight: normal;
  font-size: 12px;
  text-transform: uppercase;
  line-height: 14px;
  color: rgba(38, 39, 44, 0.8);
  transition: 0.35s;
}
@media(max-width: 992px) {
  .b-advert-block.m-advert-block-right-border.m-advert-block.go-b-advert-block {
    display: flex;
    flex-flow: column;
    padding-bottom: 10px!important;
    padding-top: 10px!important;
  }
  .go-buttons-wrap {
    margin-bottom: 10px;
  }
  .go-buttons-wrap button {
    margin-top: 10px;
  }
}
`;

// connect to DOM
setTimeout(() => {
  let styles = document.createElement('style');
  styles.id = 'go-phone-styles';
  styles.innerHTML = stylesList;
  document.body.appendChild(styles);
}, 300);

/* STYLES insert end */

// CODE START ***
var intervalInit = setInterval(() => {
  if (typeof advertId !== 'undefined') {
    console.log('success..');
    clearInterval(intervalInit);
    init();
  } else {
    console.log('try one more..');
  }
}, 500);

async function init() {
  // Variables
  const REQUST_URI =
    'https://bimedis.com/a-item/AjaxRequest/getAdvertPhones?advert_id=' +
    advertId;
  const contactEl = document.querySelector('.sjs-send-message-open');
  contactEl.closest('.b-advert-block').classList.add('go-b-advert-block');
  contactEl.closest('.m-no-padding').classList.add('go-buttons-wrap');
  if (window.innerWidth < 992) {
    document
      .querySelector('.go-b-advert-block')
      .insertAdjacentElement(
        'afterbegin',
        document.querySelector('.go-buttons-wrap')
      );
  }

  if (advertId && contactEl) {
    let response = await fetch(REQUST_URI);
    let phoneNumbers = await response.json();
    if (phoneNumbers.length) {
      insertsPhones(phoneNumbers, contactEl);
    }
  }
}

function insertsPhones(phones, insertBeforeEl) {
  // phones.forEach(phone => {
  let phoneEl = document.createElement('div');
  phoneEl.classList.add('go-phone-number');
  insertBeforeEl.insertAdjacentElement('beforebegin', phoneEl);

  if (localStorage.getItem('clickNR') && checkAuth()) {
    localStorage.removeItem('clickNR');
    fireBackendEvent();
    phones.forEach(phone => {
      let phoneLinkEl = document.createElement('a');
      phoneLinkEl.href = 'tel:' + phone;
      phoneLinkEl.innerHTML = phone;
      phoneEl.insertAdjacentElement('afterbegin', phoneLinkEl);
    });
  } else {
    phoneEl.insertAdjacentHTML(
      'afterbegin',
      "<a href='#' sytle=pointer-events: none;'>" +
        phones[0].substr(0, 6) +
        ' <span>— show phone</span></a>'
    );
  }
  phoneEl.addEventListener('click', function (e) {
    console.log(e.target);
    if (checkAuth()) {
      if (phoneEl.querySelector('a').getAttribute('href') == '#') {
        e.preventDefault();
        fireBackendEvent();
        phoneEl.classList.add('active');
        phoneEl.innerHTML = '';
        phones.forEach(phone => {
          phoneEl.insertAdjacentHTML(
            'afterbegin',
            "<a href='tel:" + phone + "'>" + phone + '</a>'
          );
        });
        gaEvent('click on button Show more', 'registered');
      } else if (e.target.tagName == 'A') {
        gaEvent('click on button with entire phone number');
      }
    } else {
      e.preventDefault();
      localStorage.setItem('clickNR', 'yes');
      gaEvent('click on button Show more', 'non-registered');
      document.querySelector('.b-blackout').style.display = 'block';
      document.querySelector('.scss-login-form').style.display = 'block';

      document
        .querySelector('.b-blackout')
        .addEventListener('click', function () {
          document.querySelector('.b-blackout').style.display = 'none';
          document.querySelector('.scss-login-form').style.display = 'none';
        });
    }
  });
  // });
}

function checkAuth() {
  return document.querySelector('.scss-login-form') ? false : true;
}
// CODE END ***

function fireBackendEvent() {
  let ownerLinkArr = document
    .querySelector('.b-user-logo-image')
    .dataset.href.split('-');
  fetch('https://bimedis.com/a-item/AjaxRequest/increasePhoneClick', {
    method: 'POST',
    body: JSON.stringify({ user_id: ownerLinkArr[ownerLinkArr.length - 1] })
  })
    .then(response => {
      return response.json();
    })
    .then(result => {
      console.log(result);
    });
}
