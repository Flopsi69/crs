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
  
  .global-signup .why-create-content .content-body, .page-content .log-in-sign-up-inner .why-create-content .content-body {
    display: none;
  }
  .global-signup .why-create-content .content-end, .page-content .log-in-sign-up-inner .why-create-content .content-end {
    font-size: 28px;
    line-height: 38px;
    color: #34414D;
    font-weight: 400;
    margin-top: 40px;
  }

  .global-signup .signup-form .user-tos .subtext, .page-content .log-in-sign-up-inner .signup-form .user-tos .subtext{
    padding-top: 0;
  }

  .global-signup .why-create-container, .page-content .log-in-sign-up-inner .why-create-container{
    padding: 35px 40px;
    box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.09);
  }

  .global-signup .why-create-container, .page-content .log-in-sign-up-inner .why-create-container{
    margin-left: 20px;
  }

  .global-signup .why-create-container:before, .page-content .log-in-sign-up-inner .why-create-container:before {
    display: none!important;
  }

  .global-signup .why-create-content, .page-content .log-in-sign-up-inner .why-create-content{
    margin-top: 0;
  }
  
  .global-signup .why-create-content .heading, .page-content .log-in-sign-up-inner .why-create-content .heading {
    margin-bottom: 12px;
    padding-bottom: 7px;
    font-size: 1.5rem;
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
    font-size: 16px;
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
  .global-signup, .page-content .log-in-sign-up-inner {
    padding: 0;
  }
  .global-signup .modal {
    padding: 0;
    max-width: 100%;
    min-height: 100vh;
  }
  .global-signup .sign-up-container, .page-content .log-in-sign-up-inner .sign-up-container{
    background: #FFFFFF;
    padding: 40px;
    box-shadow: 0px 0px 3px 1px rgb(0 0 0 / 9%)!important;
  }
  .log-in-signup-wrapper .log-in-sign-up-container .log-in-sign-up-inner {
    max-width: 880px;
  }
  .global-signup .sign-up-container, .page-content .log-in-sign-up-inner .sign-up-container {
    width: 430px
  }
  .global-signup .onboarding-header-logo, .page-content .log-in-sign-up-inner .onboarding-header-logo {
    padding-top: 0;
  }
  .global-signup .onboarding-header-logo a, .page-content .log-in-sign-up-inner .onboarding-header-logo a{
    display: inline-block;
  }
  .global-signup .onboarding-logo-link>object, .page-content .log-in-sign-up-inner .onboarding-logo-link>object{
    height: 17px;
    width: auto;
  }
  .global-signup .log-in-signup-wrapper .sign-up-container .primary-prompt, .page-content .log-in-sign-up-inner .sign-up-container .primary-prompt {
    margin-top: 0;
    text-align: left;
    display: flex;
    justify-content: space-between;
  }

  .global-signup.modal-container .modal header .close {
    width: 24px;
    height: 24px;
    right: 50px;
    top: 50px;
    font-size: 22px;
  }
  .global-signup .sign-up-secondary-prompt, .page-content .log-in-sign-up-inner .sign-up-secondary-prompt {
    text-align: left;
    color: #5D6771;
    font-weight: 300;
    font-size: 12px;
    line-height: 16px;
    margin-bottom: 25px;
  }
  .global-signup .sign-up-container  .oauth-sign-up-container-bottom .google-log-in-button, .sign-up-container  .oauth-sign-up-container-bottom .google-log-in-button {
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
  .global-signup .signup-form #social_user_full_name + .subtext, .page-content .log-in-sign-up-inner .signup-form #social_user_full_name + .subtext {
    display: none;
  }
  .lav-label-subtext {
    font-weight: 300;
    font-size: 12px;
    line-height: 16px;
    color: #99A0A6;
    padding-left: 10px;
  }
  .lav-list__item strong {
    font-weight: 700;
  }
`;

// connect to DOM

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

let observer = new MutationObserver(mutations => {
  for (let mutation of mutations) {
    for (let node of mutation.addedNodes) {
      if (!(node instanceof HTMLElement)) continue;
      console.log(node);
      if (node.classList.contains('log-in-signup-wrapper')) {
        console.log('init');
        initExp();
      }
    }
  }
});

let demoElem = document.querySelector('body');

observer.observe(demoElem, { childList: true, subtree: true });
console.log('3');

// document.addEventListener('DOMContentLoaded', function (event) {
console.log('check');

if (document.querySelector('.page-content .log-in-sign-up-inner ')) {
  initExpPage();
}
// });

function initStyles() {
  let styles = document.createElement('style');
  styles.id = 'go-phone-styles';
  styles.innerHTML = stylesList;
  document.body.appendChild(styles);
}

function initExpPage() {
  console.log('initExpPage');
  if (!document.querySelector('#go-phone-styles')) {
    initStyles();
  }
  addSideTextPage();
  moveFormPage();
}

function addSideTextPage() {
  let sideEl = `
    <div class='lav-caption'>Become a part of biggest and growing real estate investors community!</div>
    <ul class='lav-list'>
      <li class='lav-list__item'>Avoid mistakes by tapping into the collective knowledge of more than <br> <strong>2&nbsp;000&nbsp;000</strong> members. </li>
      <li class='lav-list__item'>Determine a property’s cash flow potential in minutes with interactive calculators and tools.</li>
      <li class='lav-list__item'>Access our Marketplace to find investor-friendly agents, financing options, and more.</li>
      <li class='lav-list__item'>Plus, <strong>get a free copy</strong> of the Ultimate Beginner’s Guide to Real Estate Investing.</li>
    <ul>
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
    .querySelector(
      '.page-content .log-in-sign-up-inner .why-create-content .heading'
    )
    .insertAdjacentHTML('afterend', sideEl);
}

function moveFormPage() {
  if (
    document.querySelector(
      '.page-content .log-in-sign-up-inner .onboarding-header-logo'
    )
  ) {
    document
      .querySelector(
        '.page-content .log-in-sign-up-inner .onboarding-header-logo'
      )
      .remove();
  }

  document
    .querySelector(
      '.page-content .log-in-sign-up-inner .signup-form + .oauth-sign-up-container-bottom '
    )
    .insertAdjacentElement(
      'beforeend',
      document.querySelector(
        '.page-content .log-in-sign-up-inner .signup-form + .oauth-sign-up-container-bottom .sign-up-section-seperator'
      )
    );

  document
    .querySelector(
      '.page-content .log-in-sign-up-inner  .sign-up-secondary-prompt'
    )
    .insertAdjacentElement(
      'afterend',
      document.querySelector(
        '.page-content .log-in-sign-up-inner  .signup-form + .oauth-sign-up-container-bottom'
      )
    );

  document
    .querySelector(
      ".page-content .log-in-sign-up-inner [for='social_user_full_name']"
    )
    .insertAdjacentHTML(
      'beforeend',
      "<span class='lav-label-subtext'>Use your real name</span>"
    );

  document
    .querySelector(
      ".page-content .log-in-sign-up-inner [for='social_user_password']"
    )
    .insertAdjacentHTML(
      'beforeend',
      "<span class='lav-label-subtext'>Use at least 8 characters.</span>"
    );

  document.querySelector(
    '.page-content .log-in-sign-up-inner .signup-form #social_user_password + .subtext'
  ).innerHTML = document
    .querySelector(
      '.page-content .log-in-sign-up-inner .signup-form #social_user_password + .subtext'
    )
    .innerHTML.replace('Use at least 8 characters. ', '');
}

function initExp() {
  if (!document.querySelector('#go-phone-styles')) {
    initStyles();
  }
  console.log('initExp');
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
    <ul>
  `;

  document.querySelector(
    '.global-signup .why-create-content .heading'
  ).innerText = 'Join the biggest real estate investing community.';

  document
    .querySelector('.global-signup .why-create-content .heading')
    .insertAdjacentHTML('afterend', sideEl);
}

function moveForm() {
  if (document.querySelector('.global-signup .onboarding-header-logo')) {
    document.querySelector('.global-signup .onboarding-header-logo').remove();
  }

  document
    .querySelector(
      '.global-signup .signup-form + .oauth-sign-up-container-bottom '
    )
    .insertAdjacentElement(
      'beforeend',
      document.querySelector(
        '.global-signup .signup-form + .oauth-sign-up-container-bottom .sign-up-section-seperator'
      )
    );

  document
    .querySelector('.global-signup .sign-up-secondary-prompt')
    .insertAdjacentElement(
      'afterend',
      document.querySelector(
        '.global-signup .signup-form + .oauth-sign-up-container-bottom'
      )
    );

  document
    .querySelector(".global-signup [for='social_user_full_name']")
    .insertAdjacentHTML(
      'beforeend',
      "<span class='lav-label-subtext'>Use your real name</span>"
    );

  document
    .querySelector(".global-signup [for='social_user_password']")
    .insertAdjacentHTML(
      'beforeend',
      "<span class='lav-label-subtext'>Use at least 8 characters.</span>"
    );

  document.querySelector(
    '.global-signup .signup-form #social_user_password + .subtext'
  ).innerHTML = document
    .querySelector(
      '.global-signup .signup-form #social_user_password + .subtext'
    )
    .innerHTML.replace('Use at least 8 characters. ', '');
}
