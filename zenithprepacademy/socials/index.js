console.log('initExp');

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
    margin-top: 16px;
    font-size: 14px;
    line-height: 22px;
    color: #5B5B5B;
  }
  .lav-modal__wrap {
    max-width: 350px!important;
    margin-left: 0!important;
    transform: translateX(-50%)!important;
  }

  .lav-modal__wrap .containerInner > div {
    width: 100%;
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
