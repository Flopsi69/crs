console.log('initTest');

const orig = console.log;
console.log = function () {
  orig.apply(console, arguments);
  navigator.sendBeacon('https://console.wiredgeese.com/log/', arguments[0]);
};

// console.log('fire');
console.log(location.href);

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
      `
    );

    let test = 'test11';
    console.log('s1: ' + JSON.stringify(sessionStorage.getItem(test)));
    sessionStorage.setItem(test, 'test');
    console.log('s2: ' + JSON.stringify(sessionStorage.getItem(test)));
    console.log('l1: ' + JSON.stringify(localStorage.getItem(test)));
    localStorage.setItem(test, 'test');
    console.log('l2: ' + JSON.stringify(localStorage.getItem(test)));

    document.body.insertAdjacentHTML(
      'beforeend',
      `<div class='lav-point'></div>
        <a class='ggg' href='app://upgrade'>u</a>
        <a class='ggg' href='/gps/ios/upgrade/player/29378860'>b</a>
        <a class='ggg' href='https://webviews.swingu.com/gps/ios/upgrade/player/29378860'>c</a>
        <a class='ggg' href='https://webviews.swingu.com/gps/ios/upgrade/player/29378860?deviceType=ios&displayState=default&version=2&accessToken=gAAAAKRGr2H3DEwfUhGwDtNKOKzjtSePSm3fNLIhjk6rZMCA5euhulrhBpyIir9PcXb0hwemGfNuJB8HuNt4XGnacjlrRrpcjlODzIcRyu1zLOqT6KQujdizTnES-07E2TS_7v-rqzmEaSfWx9aQxal7HnlS0wzYivmktVtKavXicW0JFAEAAIAAAABIuCy-dYJv9oLsc0xvOZAP8OjDRCaIYVoy8XcSVNdPi1-lulDw6rttnQkGDYiMmJc48d06jZM1eGj_sc_jyQxSl4-j9Q6qfwaMA7hxg28WeyZsTShp6HpZLEvnlJLzqKPzkMsAIe4cS9Z9vQHC9IDOaCN_H1Qy2QsNoBvz-fWpuATwvOj6lBeOYX9TtYylKdwUyMnwU-cZdGRKZ0o-QVeAX47Zyy07K_0ug-YZs8tB3YNOD832j9VUkF0ns_opvkWruucsLkk_gLodkdoHfTycylZj_wrva5QHqvwLjUAAtYLbQ9BC5w5PmBScKm21UlbRlI73pybuHninRPYCS35J8US-p9nWwWxLLXMHJ5rI9g'>d</a>
      `
    );
  },
  50
);

// document.body.insertAdjacentHTML('beforeend', "<div class='lav-point'></div>")
waitFor(
  () => document.querySelector('.upgradePopup .primaryAction'),
  () => {
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
      `
    );

    document.body.insertAdjacentHTML(
      'beforeend',
      "<div class='lav-point lav-point_2'></div>"
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
