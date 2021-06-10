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
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: #000000;
    letter-spacing: 0.3px;
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
    position: relative;
    padding-left: 20px;
  }
  .lav-list__item:before {
    content: '';
    position: absolute;
    left: -15px;
    top: 1px;
    width: 22px;
    height: 22px;
    background: url(${REPO_DIR}/img/icon-check.svg) center no-repeat;
    background-size: contain;
  }
  .onboarding-header-logo {
    text-align: center;
    padding-top: 0;
  }
  .log-in-container, .sign-up-container {
    padding: 20px;
    width: 320px;
  }
  .log-in-signup-wrapper .sign-up-container .primary-prompt {
    margin-top: 10px;
    font-weight: 600;
    font-size: 24px;
    line-height: 33px;
    color: #000000;
  }
  .sign-up-secondary-prompt {
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 0.2px;
    color: #000000;
    margin-bottom: 20px!important;
  }
  .signup-form .oauth-sign-up-container-bottom .google-log-in-button {
    margin-bottom: 15px;
  }
  .log-in-container label, .sign-up-container label {
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    color: #000000;
  }
  .sign-up-section-seperator .sign-up-notice {
    font-size: 10px;
    padding: 0 15px;
    font-weight: 600;
  }
  .signup-form .sign-up-section-seperator {
    margin-bottom: 15px;
  }
  .log-in-container .heading, .log-in-container p, .sign-up-container .heading, .sign-up-container p {
    margin-bottom: 12px;
  }
  .log-in-container .subtext, .sign-up-container .subtext {
    font-size: 10px;
    line-height: 14px;
    color: #C7C7C7;
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
initExp();
function initExp() {
  console.log('initExp');
  addSideText();
  moveForm();
}

function addSideText() {
  let sideEl = `
    <div class='lav-caption'>Become a part of biggest and growing real estate investors community!</div>
    <ul class='lav-list'>
      <li class='lav-list__item'>Avoid mistakes by tapping into the collective knowledge of more than <strong>2 million</strong> members. </li>
      <li class='lav-list__item'>Determine a property’s cash flow potential in minutes with interactive calculators and tools.</li>
      <li class='lav-list__item'>Access our Marketplace to find investor-friendly agents, financing options, and more.</li>
      <li class='lav-list__item'>Plus, <strong>get a free copy</strong> of the Ultimate Beginner’s Guide to Real Estate Investing.</li>
    <ul>
  `;

  document
    .querySelector('.why-create-content .heading')
    .insertAdjacentHTML('afterend', sideEl);
}

function moveForm() {
  document
    .querySelector('.signup-form + .oauth-sign-up-container-bottom ')
    .insertAdjacentElement(
      'beforeend',
      document.querySelector(
        '.signup-form + .oauth-sign-up-container-bottom .sign-up-section-seperator'
      )
    );

  document
    .querySelector('.sign-up-secondary-prompt')
    .insertAdjacentElement(
      'afterend',
      document.querySelector('.signup-form + .oauth-sign-up-container-bottom')
    );
}
