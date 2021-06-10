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

const REPO_DIR = 'https://flopsi69.github.io/crs/biggerpockets/signUp';

/* STYLES insert start */
let stylesList = `
  .why-create-content .content-body {
    display: none;
  }
  .why-create-content .heading {
    font-weight: 600;
    font-size: 24px;
    color: black;
    line-height: 33px;
    text-align: center;
    margin-bottom: 0;
  }
  .why-create-content .content-end {
    text-align: center;
    font-weight: 600;
    font-size: 24px;
    line-height: 33px;
    color: #000000;
    margin-top: 30px;
  }
  .lav-caption {
    max-width: 250px;
    margin: 20px auto 30px;
    text-align: center;
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    color: #000000;
  }
  .lav-list {
    font-size: 14px;
    line-height: 19px;
    color: #000000;
  }
  .lav-list__item + .lav-list__item {
    margin-top: 15px;
  }
  .lav-list__item {
    positon: relative;
  }
  .lav-list__item:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 22px;
    height: 22px;
    background: url(${REPO_DIR}/img/icon-check.svg) center no-repeat;
    background-size: contain;
  }

  
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

function initExp() {
  console.log('initExp');
  addSideText();
}

function addSideText() {
  let sideEl = `
    <div class='lav-caption'>Become a part of biggest and growing real estate investors community!</div>
    <ul class='lav-list'>
      <li class='lav-list__item'>Avoid mistakes by tapping into the collective knowledge of more than 2 million members. </li>
      <li class='lav-list__item'>Determine a property’s cash flow potential in minutes with interactive calculators and tools.</li>
      <li class='lav-list__item'>Access our Marketplace to find investor-friendly agents, financing options, and more.</li>
      <li class='lav-list__item'>Plus, get a free copy of the Ultimate Beginner’s Guide to Real Estate Investing.</li>
    <ul>
  `;

  document
    .querySelector('.why-create-content .heading')
    .insertAdjacentHTML('afterend', sideEl);
}
