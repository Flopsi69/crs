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

// let observer = new MutationObserver(mutations => {
//   for (let mutation of mutations) {
//     for (let node of mutation.addedNodes) {
//       if (!(node instanceof HTMLElement)) continue;

//       console.log(node);
//     }
//   }
// });

// observer.observe(document.querySelector('body'), {
//   childList: true,
//   subtree: true
// });

const REPO_DIR = 'https://flopsi69.github.io/crs/biggerpockets/newPost';

/* STYLES insert start */
let stylesList = `
  .lav-up {
    position: relative;
    display: flex;
    align-items: flex-start;
    max-width: 565px;
    background: #FFFFFF;
    box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.09);
    padding: 30px;
    margin-bottom: 40px;
    margin-top: 15px;
  }
  .lav-up__close {
    position: absolute;
    top: 23px;
    right: 23px;
    width: 18px;
    height: 18px;
    transition: 0.2s;
    cursor: pointer;
    padding: 2px;
    box-sizing: border-box;
  }
  .lav-up__close:hover {
    fill: #4197ED;
    opacity: 0.8;
  }
  .lav-up__photo {
    position: relative;
    margin-right: 35px;
    width: 100px;
    line-height: 0;
    flex-shrink: 0;
    margin-top: 10px;
  }
  .lav-up__photo-icon {
    position: absolute;
    right: -7px;
    top: -7px;
  }
  .lav-up__photo .avatar {
    max-width: 100%;
    max-height: 100%;
    // border: 3px solid #4197ED;
    border-radius: 100%;
    box-sizing: border-box;
  }
  .lav-up__title {
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 20px;
    line-height: 27px;
    color: #34414D;
  }
  .lav-up__descr {
    font-size: 14px;
    line-height: 21px;
    color: #34414D;
    margin-bottom: 20px;
  }
  .lav-up__descr ul {
    list-style: disc;
    margin: 5px 0;
    padding-left: 25px;
  }
  .lav-up__link {
    max-width: 205px;
    width: 100%;
    text-align: center;
  }
  @media (max-width: 768px) {
    .forums-container {
      padding-top: 10px;
    }
    .lav-up {
      padding: 30px 20px;
      margin-left: 12px;
      margin-right: 12px;
    }
    .lav-up__photo {
      margin-right: 20px;
      width: 65px;
    }
    .lav-up__photo-icon {
      width: 30px;
    }
    .lav-up__title {
      margin-bottom: 15px;
    }
    .lav-up__close {
      top: 10px;
      right: 10px;
    }
  }
`;

// connect to DOM

/* STYLES insert end */
document.addEventListener('DOMContentLoaded', function (event) {
  if (!document.querySelector('.nav-section-pro-only')) {
    if (
      (location.href.includes('/topics/new') &&
        sessionStorage.getItem('closeExpBanner1') != 'yes') ||
      (location.pathname == '/forums' &&
        sessionStorage.getItem('closeExpBanner2') != 'yes') ||
      (location.href.includes('/forums/') &&
        location.href.includes('/topics/') &&
        sessionStorage.getItem('closeExpBanner3') != 'yes')
    ) {
      initExp();
    }
  }
});

// initExp();
function initExp() {
  console.log('initExp');
  let styles = document.createElement('style');
  styles.id = 'go-phone-styles';
  styles.innerHTML = stylesList;
  document.body.appendChild(styles);

  let blockEl = `
    <div class="lav-up">
      <svg class="lav-up__close" fill='#99A0A6' xmlns="http://www.w3.org/2000/svg" width="357" height="357" viewBox="0 0 357 357"><path d="M357 35.7L321.3 0 178.5 142.8 35.7 0 0 35.7l142.8 142.8L0 321.3 35.7 357l142.8-142.8L321.3 357l35.7-35.7-142.8-142.8z"/></svg>

      <div class="lav-up__photo">
        <img class='avatar' src='${REPO_DIR}/photo.png'/>
        <img class='lav-up__photo-icon' src='${REPO_DIR}/icon-photo.svg'/>
      </div>
      <div class="lav-up__info">
        <div class="lav-up__title">Upgrade to BiggerPockets Pro</div>

        <div class="lav-up__descr">
        Pro members get:
         <ul>
          <li>54% more colleague requests than free members</li>
          <li>Exclusive access to member-only forums</li>
          <li>Unlimited use of property analysis calculators</li>
          <li>And much more!</li>
         </ul>
        </div>

        <a class="button lav-up__link" href="https://www.biggerpockets.com/membership-types">Upgrade to PRO</a>
      </div>
    </div>
  `;

  if (location.pathname == '/forums') {
    document
      .querySelector('.forums-container')
      .insertAdjacentHTML('afterbegin', blockEl);
  } else {
    document
      .querySelector('.forums-content')
      .insertAdjacentHTML('afterbegin', blockEl);
  }

  // document
  //   .querySelector('.lav-up__photo')
  //   .insertAdjacentElement(
  //     'afterbegin',
  //     document
  //       .querySelector('.site-navigation .nav-user .avatar')
  //       .cloneNode(true)
  //   );

  document
    .querySelector('.lav-up__close')
    .addEventListener('click', function () {
      if (
        location.href.includes('/topics/new') &&
        sessionStorage.getItem('closeExpBanner1') != 'yes'
      ) {
        sessionStorage.setItem('closeExpBanner1', 'yes');
      } else if (
        location.pathname == '/forums' &&
        sessionStorage.getItem('closeExpBanner2') != 'yes'
      ) {
        sessionStorage.setItem('closeExpBanner2', 'yes');
      } else if (
        location.href.includes('/forums/') &&
        location.href.includes('/topics/') &&
        sessionStorage.getItem('closeExpBanner3') != 'yes'
      ) {
        sessionStorage.setItem('closeExpBanner3', 'yes');
      }
      document.querySelector('.lav-up').remove();
    });

  if (document.querySelector('#topic_title')) {
    console.log('click topic');
    document.querySelector('#topic_title').click();
  }
}
