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
  .log-in-signup-wrapper .why-create-content .content-body {
    display: none;
  }
  .log-in-signup-wrapper .why-create-content .content-end {
    font-size: 24px;
    line-height: 1.5;
    color: #34414D;
    font-weight: 400;
    margin-top: 30px;
    margin-bottom: 20px;
  }

  .log-in-signup-wrapper .why-create-container {
    padding: 20px;
    box-shadow: 0px 0px 3px 1px rgb(0 0 0 / 9%);
    box-sizing: border-box;
    width: 100%;
  }

  .log-in-signup-wrapper .why-create-container {
    margin-left: 0;
  }

  .log-in-signup-wrapper .why-create-container:before {
    display: none!important;
  }

  .log-in-signup-wrapper .why-create-content {
    margin-top: 0;
  }
  
  .log-in-signup-wrapper .why-create-content .heading {
    margin-bottom: 0;
    padding-bottom: 7px;
  }
  .lav-caption {
    margin: 10px auto 25px;
    font-weight: 300;
    font-size: 12px;
    line-height: 16px;
    color: #5D6771;
    letter-spacing: 0.3px;
  }
  .lav-list {
    font-size: 12px;
    line-height: 1.5;
    color: #5D6771
  }
  .lav-list__item + .lav-list__item {
    margin-top: 18px;
  }
  .lav-list__item {
    position: relative;
    padding-left: 40px;
  }
  .lav-list__item:before {
    content: '';
    position: absolute;
    left: 0;
    top: 1px;
    width: 22px;
    height: 22px;
    background: url(${REPO_DIR}/img/icon-check.svg) center no-repeat;
    background-size: contain;
  }
  .log-in-signup-wrapper {
    padding: 0;
  }
  .log-in-signup-wrapper .modal {
    padding: 0;
    max-width: 100%;
    min-height: 100vh;
  }
  .log-in-signup-wrapper .sign-up-container {
    background: #FFFFFF;
    padding: 30px 20px 20px;
    box-shadow: 0px 0px 3px 1px rgb(0 0 0 / 9%)!important;
  }
  .log-in-signup-wrapper .log-in-signup-wrapper .log-in-sign-up-container .log-in-sign-up-inner {
    max-width: 880px;
  }
  .log-in-signup-wrapper .sign-up-container {
    width: 100%;
    margin-bottom: 30px;
  }
  .log-in-signup-wrapper .onboarding-header-logo {
    padding-top: 0;
    margin-bottom: 20px;
  }
  .log-in-signup-wrapper .onboarding-header-logo a {
    display: inline-block;
  }
  .log-in-signup-wrapper .onboarding-logo-link>object {
    height: 25px;
    width: auto;
  }
  .log-in-signup-wrapper .log-in-signup-wrapper .sign-up-container .primary-prompt {
    margin-top: 0;
    text-align: left;
    display: flex;
    justify-content: space-between;
  }

  .log-in-signup-wrapper.modal-container .modal header .close {
    width: 24px;
    height: 24px;
    right: 50px;
    top: 50px;
    font-size: 22px;
  }
  .log-in-signup-wrapper .sign-up-secondary-prompt {
    text-align: left;
    color: #5D6771;
    font-weight: 300;
    font-size: 12px;
    line-height: 16px;
    margin-bottom: 25px;
  }
  .log-in-signup-wrapper .sign-up-container  .oauth-sign-up-container-bottom .google-log-in-button {
    margin-bottom: 20px;
  }
  .sign-up-container .sign-up-section-seperator .sign-up-notice {
    text-transform: lowercase;
    padding: 0 15px;
    display: inline-block;
  }

  .sign-up-container label {
    font-size: 14px;
    line-height: 21px;
    color: #5D6771;
    font-weight: 400;
    margin-bottom: 5px;
  }
  .sign-up-container p {
    margin-bottom: 15px;
  }
  .sign-up-container p.button-container {
    margin-bottom: 10px;
  }
  .sign-up-container .subtext {
    font-weight: 300;
    font-size: 12px;
    line-height: 16px;
    color: #99A0A6;
  }
  .sign-up-container .sign-up-section-seperator {
    margin-bottom: 15px;
  }
  .log-in-signup-wrapper .signup-form #social_user_full_name + .subtext {
    display: none;
  }
  .lav-label-subtext {
    font-weight: 300;
    font-size: 12px;
    line-height: 16px;
    color: #99A0A6;
    padding-left: 10px;
  }

  .log-in-signup-wrapper .log-in-sign-up-container.sign-up-active .log-in-container, .log-in-signup-wrapper .log-in-sign-up-container.sign-up-active .sign-up-container {
    box-sizing: border-box;
  }
  .why-create-container {
    display: block
  }
  .log-in-signup-wrapper .sign-up-container {
    float: none;
  }
  .lav-list__item strong {
    font-weight: 700;
  }
`;

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

let isInitExp = false;

let observer = new MutationObserver(mutations => {
  for (let mutation of mutations) {
    for (let node of mutation.addedNodes) {
      if (!(node instanceof HTMLElement)) continue;
      console.log(node);
      // if (node.classList.contains('log-in-signup-wrapper') && !isInitExp) {
      //   console.log('init');
      //   initExp();
      // }
    }
  }
});

let demoElem = document.querySelector('body');

observer.observe(demoElem, { childList: true, subtree: true });

// document.addEventListener('DOMContentLoaded', function (event) {
console.log('check');
initExp();
// });

function initExp() {
  console.log('initExp');
  if (!document.querySelector('#go-phone-styles')) {
    let styles = document.createElement('style');
    styles.id = 'go-phone-styles';
    styles.innerHTML = stylesList;
    document.body.appendChild(styles);
  }

  addSideText();
  moveForm();
}

function addSideText() {
  let sideEl = `
    <div class='lav-caption'>Become a part of biggest and growing real estate investors community!</div>
    <ul class='lav-list'>
      <li class='lav-list__item'>Avoid mistakes by tapping into the collective knowledge of more than <br> <strong>2&nbsp;000&nbsp;000</strong> members. </li>
      <li class='lav-list__item'>Determine a property’s cash flow potential in minutes with interactive calculators and tools.</li>
      <li class='lav-list__item'>Access our Marketplace to find investor-friendly agents, financing options, and more.</li>
      <li class='lav-list__item'>Plus, <strong>get a free copy</strong> of the Ultimate Beginner’s Guide to Real Estate Investing.</li>
    </ul>
  `;

  if (
    document.querySelector(
      '.page-content .log-in-sign-up-inner .why-create-content .heading'
    )
  ) {
    document.querySelector(
      '.page-content .log-in-sign-up-inner .why-create-content .heading'
    ).innerText = 'Join the biggest real estate investing community.';
  } else {
    setTimeout(() => {
      document.querySelector(
        '.page-content .log-in-sign-up-inner .why-create-content .heading'
      ).innerText = 'Join the biggest real estate investing community.';
    }, 800);
  }

  document
    .querySelector('.log-in-signup-wrapper .why-create-content .heading')
    .insertAdjacentHTML('afterend', sideEl);
}

function moveForm() {
  document
    .querySelector(
      '.log-in-signup-wrapper .signup-form + .oauth-sign-up-container-bottom '
    )
    .insertAdjacentElement(
      'beforeend',
      document.querySelector(
        '.log-in-signup-wrapper .signup-form + .oauth-sign-up-container-bottom .sign-up-section-seperator'
      )
    );

  document
    .querySelector('.log-in-signup-wrapper .sign-up-secondary-prompt')
    .insertAdjacentElement(
      'afterend',
      document.querySelector(
        '.log-in-signup-wrapper .signup-form + .oauth-sign-up-container-bottom'
      )
    );

  document
    .querySelector(".log-in-signup-wrapper [for='social_user_full_name']")
    .insertAdjacentHTML(
      'beforeend',
      "<span class='lav-label-subtext'>Use your real name</span>"
    );

  document
    .querySelector(".log-in-signup-wrapper [for='social_user_password']")
    .insertAdjacentHTML(
      'beforeend',
      "<span class='lav-label-subtext'>Use at least 8 characters.</span>"
    );

  document.querySelector(
    '.log-in-signup-wrapper .signup-form #social_user_password + .subtext'
  ).innerHTML = document
    .querySelector(
      '.log-in-signup-wrapper .signup-form #social_user_password + .subtext'
    )
    .innerHTML.replace('Use at least 8 characters. ', '');
}
