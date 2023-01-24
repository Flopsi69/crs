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
  .lav-buttons {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 22px;
    max-width: 722px;
    width: 100%;
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
  }

  .lav-btn img {
    margin-right: 16px;
  }
`;

const stylesEl = document.createElement('style');
stylesEl.innerHTML = styles;
document.body.appendChild(stylesEl);
/*** STYLES / end ***/

/********* Custom Code **********/
init();
function init() {
  console.log('init');

  let el = `
    <div class='lav-buttons'>
      <button class='lav-btn'>
        <img src='${settings}/img/google-icon.svg' />
        JOIN with Google
      </button>
      <button class='lav-btn'>
        <img src='${settings}/img/facebook-icon.svg' />
        JOIN with facebook
      </button>
    </div>
    // <button onclick='fbLogout'>Logout</button>
    // <fb:login-button
    //   scope="public_profile,email"
    //   onlogin="checkLoginState();">
    // </fb:login-button>
  `;

  document.querySelector('#button-33723').insertAdjacentHTML('afterend', el);

  initFB();
}

function initFB() {
  let el = `
  <button class='logout-test'>Logout</button>
  <button class='logout-test2'>Login</button>
  <fb:login-button 
    scope="email"
    onlogin="checkLoginState();">
  </fb:login-button>
`;

  document.body.insertAdjacentHTML('afterbegin', el);

  document.querySelector('.logout-test').addEventListener('click', fbLogout);
  document.querySelector('.logout-test2').addEventListener('click', fbLogin);

  window.fbAsyncInit = function () {
    FB.init({
      appId: '3433080760304295',
      cookie: true,
      xfbml: true,
      version: 'v3.2',
    });

    // Check whether the user already logged in
    // FB.getLoginStatus(function (response) {
    //   console.log(response);
    //   if (response.status === 'connected') getFbUserData();
    // });

    console.log(333);
    // fbLogin();
  };

  function fbLogin() {
    FB.login(
      function (response) {
        if (response.authResponse) {
          getFbUserData();
        } else {
          console.log('User cancelled login or did not fully authorize.');
        }
      },
      { scope: 'email' }
      // public_profile
    );
  }

  // Logout from facebook
  function fbLogout() {
    FB.logout(function () {
      console.log('<p>You have successfully logout from Facebook.</p>');
    });
  }

  function getFbUserData() {
    FB.api('/me', { fields: 'email,name' }, function (response) {
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
