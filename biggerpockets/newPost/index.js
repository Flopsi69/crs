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

let observer = new MutationObserver(mutations => {
  for (let mutation of mutations) {
    for (let node of mutation.addedNodes) {
      if (!(node instanceof HTMLElement)) continue;

      console.log(node);
    }
  }
});

observer.observe(document.querySelector('body'), {
  childList: true,
  subtree: true
});

const REPO_DIR = 'https://flopsi69.github.io/crs/biggerpockets/newPost';

/* STYLES insert start */
let stylesList = `
  .lav-up {
    position: relative;
    display: flex;
    max-width: 565px;
    background: #FFFFFF;
    box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.09);
    padding: 30px;
    margin-bottom: 45px;
  }
  .lav-up__close {
    position: absolute;
    top: 25px;
    right: 25px;
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
    margin-right: 30px;
    width: 100px;
    line-height: 0;
    flex-shrink: 0;
  }
  .lav-up__photo img {
    max-width: 100%;
    max-height: 100%;
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
  .lav-up__link {
    max-width: 205px;
    width: 100%;
    text-align: center;
  }
`;

// connect to DOM

/* STYLES insert end */
// if (
//   sessionStorage.getItem('closeExpBanner') != 'yes' &&
//   !document.querySelector('.nav-section-pro-only')
// ) {
initExp();
// }
function initExp() {
  console.log('initExp');
  let styles = document.createElement('style');
  styles.id = 'go-phone-styles';
  styles.innerHTML = stylesList;
  document.body.appendChild(styles);

  let blockEl = `
    <div class="lav-up">
      <svg class="lav-up__close" fill='#99A0A6' xmlns="http://www.w3.org/2000/svg" width="357" height="357" viewBox="0 0 357 357"><path d="M357 35.7L321.3 0 178.5 142.8 35.7 0 0 35.7l142.8 142.8L0 321.3 35.7 357l142.8-142.8L321.3 357l35.7-35.7-142.8-142.8z"/></svg>

      <div class="lav-up__photo"></div>
      <div class="lav-up__info">
        <div class="lav-up__title">Upgrade to PRO</div>

        <div class="lav-up__descr">Get a <strong>10X</strong> more attention, comments, and replies with <br> a PRO badge & many other features.</div>

        <a class="button lav-up__link" href="https://www.biggerpockets.com/membership-types">Upgrade to PRO</a>
      </div>
    </div>
  `;

  document
    .querySelector('.forums-content')
    .insertAdjacentHTML('afterbegin', blockEl);

  document
    .querySelector('.lav-up__photo')
    .insertAdjacentElement(
      'afterbegin',
      document
        .querySelector('.site-navigation .nav-user .avatar')
        .cloneNode(true)
    );

  document
    .querySelector('.lav-up__close')
    .addEventListener('click', function () {
      sessionStorage.setItem('closeExpBanner', 'yes');
      document.querySelector('.lav-up').remove();
    });
}
