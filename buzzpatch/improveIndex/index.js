function gaEvent(action, label = '') {
  window.dataLayer = window.dataLayer || [];

  try {
    let eventObj = {
      event: 'ga_event',
      eventCategory: 'Exp — PDP: add phone number',
      eventAction: action,
    };

    if (label) {
      eventObj['eventLabel'] = label;
    }

    dataLayer.push(eventObj);
  } catch (e) {}
}

// let observer = new MutationObserver(mutations => {
//   for (let mutation of mutations) {
//     for (let node of mutation.addedNodes) {
//       if (!(node instanceof HTMLElement)) continue;

//       console.log(node);
//     }
//   }
// });

// observer.observe(document.querySelector('body'), {
//   childList: true,
//   subtree: true
// });

const REPO_DIR = 'https://flopsi69.github.io/crs/biggerpockets/newPost';

/* STYLES insert start */
let stylesList = `
  header .navbar.fixed-top {
    padding-top: 5px!important;
  }
  .trust-rating {
    margin-bottom: 10px;
  }
  .hand-banner img {
    margin-bottom: -67%;
  }
  .js-packs input[type=radio]+label {
    border-radius: 6px;
  }
  .js-packs:first-child input[type=radio]+label {
    border-radius: 0px 6px 6px 6px;
  }
  .form fieldset .form-group {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 13px;
    margin: 0 6px;
    margin-bottom: 30px;
  }
  .js-packs {
    margin: 0;
    max-width: 100%;
  }
  .js-packs input[type=radio]+label {
    font-size: 20px;
    padding: 24px 10px 18px;
  }
  .js-packs input[type=radio]+label span {
    font-size: 14px;
    padding-top: 4px;
    display: inline-block;
  }
  label[for]:hover {
    opacity: 1;
  }
  .bestseller {
    top: -22px;
  }
  .prices .price-save {
    color: #FF3C7F;
  }
  .prices .js-strike {
    text-decoration: none;
  }
  .js-packs {
    position: relative;
  }
  .js-packs:after {
    content: '';
    position: absolute;
    font-family: "DIN Condensed",roboto,sans-serif;
    width: 42px;
    padding: 5px 4px 2px;
    top: 5px;
    right: 5px;
    background: #EFAE16;
    border-radius: 3px;
    text-align: center;
    font-size: 12px;
    line-height: 1;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #0C0B0B;
  }
  .js-packs:nth-child(1):after {
    content: '-40%';
  }
  .js-packs:nth-child(2):after {
    content: '-47.5%';
  }
  .js-packs:nth-child(3):after {
    content: '-32.5%';
  }
  .js-packs:nth-child(4):after {
    content: '-25%';
  }
`;

// connect to DOM

/* STYLES insert end */
// document.addEventListener('DOMContentLoaded', function (event) {
//   if (
//     document.querySelector('.section-partial') &&
//     document.querySelector('.section-partial').innerText.toLowerCase() ==
//       'pricing'
//   ) {
//     console.log('-----no-Pro-----');
//     if (
//       (location.href.includes('/topics/new') &&
//         sessionStorage.getItem('closeExpBanner1') != 'yes') ||
//       (location.pathname == '/forums' &&
//         sessionStorage.getItem('closeExpBanner2') != 'yes') ||
//       (location.href.includes('/forums/') &&
//         location.href.includes('/topics/') &&
//         sessionStorage.getItem('closeExpBanner3') != 'yes')
//     ) {
//       initExp();
//     }
//   } else {
//     console.log('-----Pro-----');
//   }
// });

let styles = document.createElement('style');
styles.id = 'lav-styles';
styles.innerHTML = stylesList;
document.body.appendChild(styles);

initExp();
function initExp() {
  console.log('initExp');
  $('.prices .js-total').html(
    $('.prices .js-total')
      .html()
      .replace(/\s\(.*/, '')
  );
  let saveText =
    '<span class="price-save">' +
    $('.prices .js-regular')
      .html()
      .match(/\s\(.*/)[0] +
    '</span>';
  $('.prices .js-regular').html(
    $('.prices .js-regular')
      .html()
      .replace(/\s\(.*/, saveText)
  );

  if ($('.prices .js-total .pr').text().split('.')[1] == '0') {
    $('.prices .js-total .pr').append('0');
  }
}
