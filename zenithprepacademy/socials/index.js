console.log('initExp');

isFireFB = false;

/********* Settings **********/
const settings = {
  dir: 'https://flopsi69.github.io/crs/zenithprepacademy/socials',
  clarity: false,
  observe: false,
};

//Hotjar
if (settings.clarity) {
  const clarityInterval = setInterval(function () {
    if (typeof clarity == 'function') {
      clearInterval(clarityInterval);
      clarity('set', '9_steps_timeline', 'variant_1');
    }
  }, 1000);
}

// Alalytic

// Observe
if (settings.observe) {
  let observer = new MutationObserver((mutations) => {
    for (let mutation of mutations) {
      for (let node of mutation.addedNodes) {
        if (!(node instanceof HTMLElement)) continue;

        // Code Here
      }
    }
  });

  let demoElem = document.body;

  observer.observe(demoElem, { childList: true, subtree: true });
}

// Styles
const styles = `
  #modalPopup {
    background: none!important;
    padding: 0!important;
  }
  body.soc-overlay:before {
    content: '';
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 999;
  }

  .lav-m-title {
    font-weight: 700;
    font-size: 25px;
    line-height: 31px;
    color: #2D2D2D;
  }
  .lav-m-caption {
    font-family:'Open Sans';
    margin-top: 16px;
    font-size: 14px;
    line-height: 22px;
    color: #5B5B5B;
    margin-bottom: 27px;
  }
  .lav-m-caption + .col-inner {
    padding: 0!important;
  }
  .lav-modal {
    padding: 0!important;
  }
  .lav-modal input {
    font-family:'Open Sans';
    // border: 1px solid #D9D9D9!important;
    border-radius: 8px!important;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #999999;
    padding-left: 38px!important;
  }
  .lav-modal .elBTN {
    margin-top: 19px!important;
  }
  .lav-modal .elBTN .elButtonMain {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #FFFFFF;
  }
  .lav-modal .elBTN .elButton {
    font-size: inherit!important;
    background: #F29B38!important;
    border: 2px solid #C27C2D!important;
    box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.3)!important;
    border-radius: 35px!important;
    padding: 0 15px!important;
    height: 50px;
    line-height: 50px;
    width: 100%;
  }
  .lav-m-note {
    font-family:'Open Sans';
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #5B5B5B;
    margin-top: 18px;
  }
  .lav-modal__wrap {
    max-width: 350px!important;
    margin-left: 0!important;
    transform: translateX(-50%)!important;
  }
  .lav-modal__wrap .containerInner {
    padding: 0!important;
  }
  .lav-modal__wrap .containerInner > div {
    width: 100%!important;
    padding: 20px!important;
    padding-bottom: 30px!important;
    background: #FFFFFF!important;
    box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.25)!important;
    border-radius: 0!important;
  }
  .lav-modal .elInputWrapper {
    position: relative;
    margin-top: 19px!important;
  }

  .lav-modal .elInputWrapper svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%) translateX(-50%);
    left: 23px;
  }

  .closeLPModal {
    top: 20px;
    right: 20px;
  }

  .lav-divider {
    position: relative;
    text-align: center;
    max-width: 722px;
    margin: 16px auto;
    font-weight: 600;
    font-size: 20px;
    line-height: 21px;
    color: #fff;
  }
  .lav-divider:before, .lav-divider:after {
    content: '';
    position: absolute;
    top: 49%;
    height: 1px;
    width: 46.5%;
    background: rgba(255,255,255, 0.3);
  }

  .lav-divider:before {
    left: 0;
  }

  .lav-divider:after {
    right: 0;
  }

  .lav-buttons {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 22px;
    max-width: 722px;
    width: 100%;
    margin: 16px auto 70px;
  }

  .lav-disable {
    filter: grayscale(100%);
    pointer-events: none;
    opacity: .8;
  }

  .lav-buttons_footer {
    margin-bottom: 40px;
  }

  .lav-btn {
    background: #FFFFFF;
    border: 1px solid #D9D9D9;
    border-radius: 32px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #2D2D2D;
    flex-grow: 1;
    transition: 0.35s;
  }

  .lav-btn__wrap {
    position: relative;
    display: flex;
  }

  .lav-google__wrap:hover .lav-btn {
    background-color: #e7e7e7;
  }

  .lav-google {
    pointer-events: none;
  }

  .lav-google__btn {
    position: absolute;
    left: 0;
    opacity: 0;
  }

  .lav-google__btn + .lav-google__btn {
    bottom: 0;
  }

  .lav-btn:hover {
    background-color: #e7e7e7;
  }

  .lav-btn img {
    margin-right: 16px;
  }

  .lav-companies {
    width: 550px;
  }

  .lav-head h2 {
  }

  .lav-title {
    margin-left: -15px;
    margin-right: -15px;
  }

  .lav-title h1 {
    line-height: 58px;
    font-weight: 700;
    margin-top: 20px;
  }

  .lav-watch {
    font-weight: 700;
    font-size: 30px;
    line-height: 1;
    text-align: center;
    color: #51AF97;
    margin-top: -12px;
  }

  .lav-hide {
    display: none;
  }

  .lav-caption b {
    font-family:'Open Sans';
    font-weight: 400;
    font-size: 30px;
    line-height: 1;
    text-align: center;
    color: #fff!important;
  }

  .lav-jumb-form {
    max-width: 400px;
    width: 100%;
    height: 70px;
    font-size: inherit!important;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .lav-jumb-form .elButtonMain {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    text-transform: uppercase;
    color: #FFFFFF;
  }

  .lav-footer-container {
    padding-bottom: 70px!important;
  }

  .lav-jumb-form__wrap {
    margin-top: 30px!important;
  }
  .lav-parents .elHeadline, #headline-77250>div {
    font-family:'Open Sans';
  }

  @media (max-width: 700px) {
    .lav-watch {
      font-size: 20px;
      line-height: 24px;
    }
    .lav-title {
      margin-left: 0;
      margin-right: 0;
    }
    .lav-title {
      margin-top: 0!important;
    }
    .lav-title h1 {
      font-size: 30px;
      line-height: 38px;
      margin-top: 16px;
    }
    .lav-caption b {
      font-size: 20px;
      line-height: 28px;
      display: block;
      max-width: 80%;
      margin-left: auto;
      margin-right: auto;
    }
    .lav-jumb-form {
      padding-left: 15px!important;
      padding-right: 15px!important;
    }
    .lav-jumb-form__wrap {
      margin-top: 20px!important;
    }
    .lav-jumb-1 .lav-divider {
      display: none;
    }
    .lav-buttons {
      margin-top: 40px;
      margin-bottom: 24px;
      grid-template-columns: 1fr;
      gap: 16px;
    }
    .lav-parents .elHeadline {
      font-size: 20px!important;
      line-height: 28px;
      margin-bottom: -20px;
    }
    .lav-jumb-1 {
      padding-top: 0!important;
    }
    .lav-footer-container {
      padding-bottom: 30px!important;
      margin-bottom: -10px;
    }
    .lav-buttons_footer {
      margin-top: 24px;
    }
    .lav-divider:before, .lav-divider:after {
      width: 42%;
    }
  }
`;

const stylesEl = document.createElement('style');
stylesEl.innerHTML = styles;
document.body.appendChild(stylesEl);

// document.head.insertAdjacentHTML(
//   'afterbegin',
//   '<meta name="google-signin-client_id" content="574712994644-emepme9vsf6fc6pb1ni9ln79d9tgn0bn.apps.googleusercontent.com"></meta>'
// );

// const gapiScript = document.createElement('script');
// gapiScript.src = 'https://apis.google.com/js/platform.js';
// gapiScript.setAttribute('defer', 'defer');
// gapiScript.setAttribute('async', 'async');
// document.body.appendChild(gapiScript);
// https://apis.google.com/js/platform.js?onload=initGoogle
// document.body.insertAdjacentHTML(
//   'beforeend',
//   '<script src="https://apis.google.com/js/api.js"></script>'
// );
/*** STYLES / end ***/

/********* Custom Code **********/
init();
function init() {
  console.log('init');

  const el = `
    <div class='lav-divider'>or</div>
    <div class='lav-buttons'>
      <div class='lav-google__wrap lav-btn__wrap'>
        <div class='lav-google__btn'></div>
        <div class='lav-google__btn'></div>
        <button class='lav-btn lav-google lav-disable'>
          <img src='${settings.dir}/img/google-icon.svg' />
          <span>JOIN with Google</span>
        </button>
      </div>
      <div class='lav-facebook__wrap lav-btn__wrap'>
        <button class='lav-btn lav-facebook lav-disable'>
          <img src='${settings.dir}/img/facebook-icon.svg' />
          <span>JOIN with facebook</span>
        </button>
      </div>
    </div>
  `;

  const btns = document.querySelectorAll(
    '.containerWrapper > .container.fullContainer [href="#open-popup"]'
  );
  const footerContainer = btns[btns.length - 1].closest('.container');
  footerContainer.classList.add('lav-footer-container');

  btns[btns.length - 1].insertAdjacentHTML('afterend', el);
  footerContainer
    .querySelector('.lav-buttons')
    .classList.add('lav-buttons_footer');

  footerContainer.querySelector('.elHeadlineWrapper');

  let jumbIdx = 0;
  for (let jumbEl of Array.from(
    document.querySelectorAll('.containerWrapper > .container.fullContainer')
  ).splice(0, 2)) {
    jumbEl
      .querySelector('[href="#open-popup"]')
      .insertAdjacentHTML('afterend', el);

    initJumb(jumbEl, jumbIdx);
    jumbIdx++;
  }

  initModalChange();
  initFacebook();
  initGoogle();
}

function initModalChange() {
  const modalParentEl = document.querySelector('#modalPopup .innerContent');

  modalParentEl.classList.add('lav-modal');
  modalParentEl.closest('.containerModal').classList.add('lav-modal__wrap');
  modalParentEl.children[0].children[0].remove();
  modalParentEl.children[0].children[0].remove();

  document.querySelector(
    '.closeLPModal img'
  ).src = `${settings.dir}/img/close-icon.svg`;
  document.querySelector(
    '.closeLPModal img'
  ).dataset.src = `${settings.dir}/img/close-icon.svg`;

  modalParentEl.querySelector('.elButtonMain').innerText = 'WATCH WEBINAR NOW';
  modalParentEl.querySelector('.elBTN').nextElementSibling.remove();
  modalParentEl.querySelector('.elBTN').nextElementSibling.remove();

  modalParentEl
    .querySelector('.elBTN')
    .insertAdjacentHTML(
      'afterend',
      "<div class='lav-m-note'>we will not spam, rent, or sell your information. <br/><br/> *this is a free webinar, no payment or prior commitment is required*</div>"
    );

  modalParentEl.querySelector('input[type="name"]').placeholder = 'Name';
  modalParentEl.querySelector('input[type="email"]').placeholder = 'Email';

  modalParentEl.querySelector('input[type="name"]').insertAdjacentHTML(
    'beforebegin',
    `<svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 7C7.875 7 9.42857 5.44141 9.42857 3.5C9.42857 1.58594 7.875 0 6 0C4.09821 0 2.57143 1.58594 2.57143 3.5C2.57143 5.44141 4.09821 7 6 7ZM8.38393 7.875H7.92857C7.33929 8.17578 6.69643 8.3125 6 8.3125C5.30357 8.3125 4.63393 8.17578 4.04464 7.875H3.58929C1.60714 7.875 0 9.54297 0 11.5664V12.6875C0 13.4258 0.5625 14 1.28571 14H10.7143C11.4107 14 12 13.4258 12 12.6875V11.5664C12 9.54297 10.3661 7.875 8.38393 7.875Z" fill="#999999"/></svg>`
  );

  modalParentEl.querySelector('input[type="email"]').insertAdjacentHTML(
    'beforebegin',
    `<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.6875 3.96875C14.9688 4.53125 14.0625 5.21875 10.875 7.53125C10.25 8 9.09375 9.03125 8 9.03125C6.875 9.03125 5.75 8 5.09375 7.53125C1.90625 5.21875 1 4.53125 0.28125 3.96875C0.15625 3.875 0 3.96875 0 4.125V10.5C0 11.3438 0.65625 12 1.5 12H14.5C15.3125 12 16 11.3438 16 10.5V4.125C16 3.96875 15.8125 3.875 15.6875 3.96875ZM8 8C8.71875 8.03125 9.75 7.09375 10.2812 6.71875C14.4375 3.71875 14.75 3.4375 15.6875 2.6875C15.875 2.5625 16 2.34375 16 2.09375V1.5C16 0.6875 15.3125 0 14.5 0H1.5C0.65625 0 0 0.6875 0 1.5V2.09375C0 2.34375 0.09375 2.5625 0.28125 2.6875C1.21875 3.4375 1.53125 3.71875 5.6875 6.71875C6.21875 7.09375 7.25 8.03125 8 8Z" fill="#999999"/></svg>
  `
  );

  const newBlock = `
    <div class='lav-m-title'>Free Webinar<br/>registration</div>
    <div class='lav-m-caption'><strong>In only 1 hour time, discover the 3 factors</strong> that prevent 6th - 12th graders from getting into the colleges.</div>
  `;

  modalParentEl.insertAdjacentHTML('afterbegin', newBlock);
}

function initJumb(parentEl, idx) {
  parentEl.classList.add('lav-jumb-' + idx);
  const jumbTexts = parentEl.querySelectorAll('.elHeadlineWrapper');

  parentEl.querySelector('.elIMG').classList.add('lav-companies');
  if (idx) {
    parentEl.querySelector('.lav-companies').removeAttribute('data-src');
    parentEl.querySelector('.lav-companies').src = document.querySelector(
      '.lav-jumb-0 .lav-companies'
    ).src;
  }

  jumbTexts[0].classList.add('lav-head');
  jumbTexts[1].closest('.row').classList.add('lav-hide');
  jumbTexts[2].classList.add('lav-title');
  jumbTexts[2].querySelector('h1').innerText =
    'To discover the 3 factors that prevent 6th - 12th grades from getting into the colleges they deserve';
  jumbTexts[2].insertAdjacentHTML(
    'afterbegin',
    '<div class="lav-watch">Watch a FREE webinar now </div>'
  );
  jumbTexts[3].classList.add('lav-caption');
  jumbTexts[4].classList.add('lav-parents');

  parentEl.querySelector('.elBTN').classList.add('lav-jumb-form__wrap');

  parentEl.querySelector('[href="#open-popup"]').classList.add('lav-jumb-form');
}

function initFacebook() {
  window.fbAsyncInit = function () {
    console.log('initFb Script!');
    isFireFB = true;
    // 3433080760304295 my
    FB.init({
      appId: '737253604364130',
      cookie: true,
      xfbml: true,
      version: 'v3.2',
    });

    FB.AppEvents.logPageView();

    for (let fbBtn of document.querySelectorAll('.lav-facebook')) {
      fbBtn.classList.remove('lav-disable');
      fbBtn.addEventListener('click', function () {
        loginFB();
      });
    }
  };

  setTimeout(() => {
    if (!isFireFB) {
      fbAsyncInit();
    }
  }, 5000);

  // Logout from facebook
  // function fbLogout() {
  //   FB.logout(function () {
  //     console.log('<p>You have successfully logout from Facebook.</p>');
  //   });
  // }

  function loginFB() {
    openSocialOverlay();
    FB.getLoginStatus(function (response) {
      if (response.status === 'connected') {
        getFbUserData();
      } else {
        FB.login(
          function (response) {
            if (response.authResponse) {
              getFbUserData();
            } else {
              closeSocialOverlay();
              console.log('User cancelled login or did not fully authorize.');
            }
          },
          { scope: 'email' }
        );
      }
    });
  }

  function getFbUserData() {
    FB.api('/me', { fields: 'email,name' }, function (response) {
      sendForm(response.name, response.email);

      console.log(response);
      console.log('Good to see you, ' + response.name + '.');
    });
  }

  (function (d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
      return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk.js';
    fjs.parentNode.insertBefore(js, fjs);
  })(document, 'script', 'facebook-jssdk');
}

function initGoogle() {
  const gapiScript = document.createElement('script');
  gapiScript.src = 'https://accounts.google.com/gsi/client';
  document.body.appendChild(gapiScript);
  const options = {
    shape: 'pill',
    size: 'large',
    theme: 'outline',
    width: 350,
    click_listener() {
      console.log(33333);
    },
  };

  // 33131972604-goqu07rd6de8136r912urn5nig7kt3cu.apps.googleusercontent.com
  // 574712994644-emepme9vsf6fc6pb1ni9ln79d9tgn0bn.apps.googleusercontent.com   my
  window.onGoogleLibraryLoad = () => {
    google.accounts.id.initialize({
      client_id:
        '33131972604-goqu07rd6de8136r912urn5nig7kt3cu.apps.googleusercontent.com',
      callback: handleCredentialResponse,
    });

    for (let btn of document.querySelectorAll('.lav-google')) {
      btn.classList.remove('lav-disable');
    }

    for (let btn of document.querySelectorAll('.lav-google__wrap')) {
      btn.addEventListener('click', openSocialOverlay);
    }

    for (let btn of document.querySelectorAll('.lav-google__btn')) {
      google.accounts.id.renderButton(btn, options);
    }

    // google.accounts.id.prompt();
  };

  // return false;
}

function handleCredentialResponse(response) {
  console.log(response);
  const responsePayload = parseJwt(response.credential);
  sendForm(responsePayload.name, responsePayload.email);

  // console.log('ID: ' + responsePayload.sub);
  // console.log('Full Name: ' + responsePayload.name);
  // console.log('Given Name: ' + responsePayload.given_name);
  // console.log('Family Name: ' + responsePayload.family_name);
  // console.log('Image URL: ' + responsePayload.picture);
  // console.log('Email: ' + responsePayload.email);
}

function parseJwt(token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join('')
  );

  return JSON.parse(jsonPayload);
}

function sendForm(name, email) {
  for (let btnGroup of document.querySelectorAll('.lav-buttons')) {
    btnGroup.classList.add('lav-disable');
  }
  console.log('Name', name);
  console.log('Email', email);

  document.querySelector('.containerModal input[name="name"]').value = name;
  document.querySelector('.containerModal input[name="email"]').value = email;

  document.querySelector('.containerModal [href="#submit-form"]').click();
}

function openSocialOverlay() {
  document.body.classList.add('soc-overlay');
}

function closeSocialOverlay() {
  document.body.classList.remove('soc-overlay');
}
