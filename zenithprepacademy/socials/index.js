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

  .lav-btn:hover {
    background-color: #e7e7e7;
  }

  .lav-btn img {
    margin-right: 16px;
  }
`;

const stylesEl = document.createElement('style');
stylesEl.innerHTML = styles;
document.body.appendChild(stylesEl);

const gapiScript = document.createElement('script');
gapiScript.src = 'https://apis.google.com/js/api.js?onload=initGoogle';
document.body.appendChild(gapiScript);

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

  let el = `
      <div class='lav-divider'>or</div>
      <div class='lav-buttons'>
        <button class='lav-btn lav-google'>
          <img src='${settings.dir}/img/google-icon.svg' />
          JOIN with Google
        </button>
        <button class='lav-btn lav-facebook'>
          <img src='${settings.dir}/img/facebook-icon.svg' />
          JOIN with facebook
        </button>
      </div>
    `;

  document.querySelector('#button-33723').insertAdjacentHTML('afterend', el);

  initFB();
  // initGoogle();
}

function initFB() {
  window.fbAsyncInit = function () {
    console.log('initFb Script!');

    FB.init({
      appId: '3433080760304295',
      cookie: true,
      xfbml: true,
      version: 'v3.2',
    });

    for (let fbBtn of document.querySelectorAll('.lav-facebook')) {
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
    FB.getLoginStatus(function (response) {
      if (response.status === 'connected') {
        getFbUserData();
      } else {
        FB.login(
          function (response) {
            if (response.authResponse) {
              getFbUserData();
            } else {
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
  // 574712994644-fetsc3j9e0qk9rg8fol6622j32j0merr.apps.googleusercontent.com

  // 1. Load the JavaScript client library.
  gapi.load('client', start);

  // gapi.load('auth2', async function () {
  //   await gapi.auth2.init();
  //   const auth2 = await gapi.auth2.getAuthInstance();
  //   console.log(auth2);

  //   if (await auth2.isSignedIn.get()) {
  //     console.log(22222);
  //     var profile = auth2.currentUser.get().getBasicProfile();
  //     console.log('ID: ' + profile.getId());
  //     console.log('Full Name: ' + profile.getName());
  //     console.log('Given Name: ' + profile.getGivenName());
  //     console.log('Family Name: ' + profile.getFamilyName());
  //     console.log('Image URL: ' + profile.getImageUrl());
  //     console.log('Email: ' + profile.getEmail());
  //   }
  //   console.log(33);
  //   /* Ready. Make a call to gapi.auth2.init or some other API */
  // });

  console.log(15);
}

function start() {
  console.log('start');

  gapi.client
    .init({
      // apiKey: 'testzenith',
      // Your API key will be automatically added to the Discovery Document URLs.
      discoveryDocs: ['https://people.googleapis.com/$discovery/rest'],
      // clientId and scope are optional if auth is not required.
      clientId:
        '574712994644-fetsc3j9e0qk9rg8fol6622j32j0merr.apps.googleusercontent.com',
      scope: 'profile',
    })
    .then(function () {
      // 3. Initialize and make the API request.
      return gapi.client.people.people.get({
        resourceName: 'people/me',
        'requestMask.includeField': 'person.names',
      });
    })
    .then(
      function (response) {
        console.log(response.result);
      },
      function (reason) {
        console.log(reason);
        // console.log('Error: ' + reason.result.error.message);
      }
    );
}
