const orig = console.log;
console.log = function () {
  orig.apply(console, arguments);
  navigator.sendBeacon('https://console.wiredgeese.com/log/', arguments[0]);
};

// console.log('fire');
console.log(location.href);
console.log(document.body.innerHTML);

waitFor(
  () => document.body,
  () => {
    document.body.insertAdjacentHTML(
      'beforeend',
      `
        <style>
        .ggg {
          padding; 0 10px;
        }
        .lav-point {
          width: 3px;
          height: 3px;
          border-radius: 50px;
          background: green;
          position: fixed;
          top: 20px;
          right: 3px;
          z-index: 9999999999999999999999999;
        }
        .lav-point_2 {
          right: 9px;
          background-color: yellow;
        }
        .lav-point_3 {
          right: 15px;
          background-color: red;
        }
        </style>
        <div class='lav-point'></div>
      `
    );

    console.log(
      's1: ' + JSON.stringify(sessionStorage.getItem('isRedirectedExp'))
    );

    if (sessionStorage.getItem('isRedirectedExp') !== 'yes') {
      console.log('fire');
      sessionStorage.setItem('isRedirectedExp', 'yes');
      waitFor(
        () => {
          document.querySelector(
            '[data-crstarget="hypothesis-2-upgrade-target"]'
          );
        },
        () => {
          document
            .querySelector('[data-crstarget="hypothesis-2-upgrade-target"]')
            .click();
        }
      );
    }

    console.log(
      's2: ' + JSON.stringify(sessionStorage.getItem('isRedirectedExp'))
    );
  },
  50
);

waitFor(
  () => document.querySelector('.upgradePopup .primaryAction'),
  () => {
    console.log('popup');
    document.body.insertAdjacentHTML(
      'beforeend',
      `
        <style>
        .lav-point {
          width: 3px;
          height: 3px;
          border-radius: 50px;
          background: green;
          position: fixed;
          top: 20px;
          right: 3px;
          z-index: 9999999999999999999999999;
        }
        .lav-point_2 {
          right: 9px;
          background-color: yellow;
        }
        .lav-point_3 {
          right: 15px;
          background-color: red;
        }
        </style>
        <div class='lav-point lav-point_2'></div>
      `
    );

    // document
    //   .querySelector('.upgradePopup .primaryAction')
    //   .dispatchEvent(new Event('click'));

    // setInterval(function () {
    //   document
    //     .querySelector('.upgradePopup .primaryAction')
    //     .dispatchEvent(new Event('click'));
    // }, 200);
  },
  50
);

function waitFor(condition, cb, ms = 1000) {
  if (condition()) {
    if (typeof cb == 'function') cb();
    return;
  }

  let interval = setInterval(function () {
    if (condition()) {
      clearInterval(interval);
      if (typeof cb == 'function') cb();
    }
  }, ms);
}
