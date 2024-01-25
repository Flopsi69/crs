// Google auth
// Загальна
// Cтворення YOUR_GOOGLE_CLIENT_ID (при створенні не забудьте вказати домен клієнта у відповідному полі "Authorized JavaScript origins")
// JavaScript API (+ тут описано спосіб кастомізації) https://developers.google.com/identity/gsi/web/reference/js-reference?hl=ru

const scriptTag = document.createElement('script');
scriptTag.src = 'https://accounts.google.com/gsi/client';
scriptTag.async = true;
scriptTag.defer = true;
document.head.appendChild(scriptTag);

$('#loginForm').insertAdjacentHTML(
  'afterend',
  `
    <div
      id="g_id_onload"
      data-client_id="236296659274-dcdui2jlv2dj7caaf6l21t23ffr4mtak.apps.googleusercontent.com"
      data-callback="handleCredentialResponse"
    >
    </div>
    <div 
      class="g_id_signin" 
      data-type="standard"
      data-size='large'
      data-width='300'
    ></div>
  `
);

window.handleCredentialResponse = function ({ credential }) {
  const { email } = parseJwt(credential);
  console.log('someTest', email);
};

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

const waitForBtn = setInterval(() => {
  if (document.getElementById('buttonDiv')) {
    clearInterval(waitForBtn);

    google.accounts.id.initialize({
      client_id: 'YOUR_GOOGLE_CLIENT_ID',
      callback: handleCredentialResponse,
    });
    google.accounts.id.renderButton(
      document.getElementById('buttonDiv'),
      {
        theme: 'filled_black',
        size: 'large',
        locale: 'en',
        text: 'continue_with',
      } // customization attributes
    );
    // google.accounts.id.prompt() // also display the One Tap dialog
  }
}, 100);

const input = document.querySelector('CLIENT_INPUT');
const lastValue = input.value;
input.value = 'new value';
const inputEvent = new Event('input', { bubbles: true });

// Hack for React 15
inputEvent.simulated = true;

// Hack for React 16
const tracker = input._valueTracker;
if (tracker) {
  tracker.setValue(lastValue);
}

input.dispatchEvent(inputEvent);
