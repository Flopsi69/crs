// function gaEvent(action, label = '') {
//   window.dataLayer = window.dataLayer || [];

//   try {
//     let eventObj = {
//       event: 'ga_event',
//       eventCategory: 'Exp — PDP: add phone number',
//       eventAction: action
//     };

//     if (label) {
//       eventObj['eventLabel'] = label;
//     }

//     dataLayer.push(eventObj);
//   } catch (e) {}
// }

// (function (h, o, t, j, a, r) {
//   h.hj =
//     h.hj ||
//     function () {
//       (h.hj.q = h.hj.q || []).push(arguments);
//     };
//   h._hjSettings = { hjid: 2174050, hjsv: 6 };
//   a = o.getElementsByTagName('head')[0];
//   r = o.createElement('script');
//   r.async = 1;
//   r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
//   a.appendChild(r);
// })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
// window.hj =
//   window.hj ||
//   function () {
//     (hj.q = hj.q || []).push(arguments);
//   };
// if (window.innerWidth < 992) {
//   hj('trigger', 'pdp__add_phone_number_mob');
// } else {
//   hj('trigger', 'pdp__add_phone_number_des');
// }

/* STYLES insert start */
// height40;x

const REPO_DIR = 'https://flopsi69.github.io/crs/crello/tips';

let stylesList = `
  .lav-trigger {
    background: #2053C9;
    border-radius: 8px;
    padding: 15px;
    width: 200px;
  }
  .lav-trigger__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 14px;
  }
  .lav-trigger__label {
    background: #F5EEE7;
    border-radius: 5px;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    color: #2053C9;
    padding: 2px 8px;
    margin-right: 9px;
    font-family: ProximaBold;
  }
  .lav-trigger__placehoder {
    
  }
  .lav-trigger
  .lav-trigger
  .lav-trigger
  .lav-tip {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #2053C9;
    border-radius: 8px;
    padding: 8px 15px;
    padding-right: 3px;
    color: #fff;
    margin-bottom: 12px;
    margin-right: 8px;
    transition: .4s;
    cursor: pointer;
  }
  .lav-tip:hover {
    background-color: rgb(15, 60, 180);
  }
  .lav-tip__info {
    flex-grow: 1;
  }
  .lav-tip__label {
    background: #F5EEE7;
    border-radius: 5px;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    color: #2053C9;
    padding: 2px 8px;
    margin-right: 9px;
    font-family: ProximaBold;
  }
  .lav-tip__title {
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #FFFFFF;
    font-family: ProximaSemiBold;
    white-space: nowrap;
    margin-bottom: 1px;
  }
  .lav-tip__play {
    line-height: 0;
  }
  .lav-tip__caption {
    font-size: 10px;
    line-height: 12px;
    color: #FFFFFF;
  }

  .modal {
    position: fixed;
    display: flex;
    padding: 15px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1050;
    outline: 0;
    overflow: hidden;
    overflow-x: hidden;
    overflow-y: auto;
    background: rgba(0,0,0, .6);
    transition: 0.35s;
    pointer-events: none;
    opacity: 0;
  }
  
  .modal_active {
    opacity: 1;
    pointer-events: auto;
  }
  
  .modal__body {
    position: relative;
    margin: auto;
    max-width: 850px;
    width: 100%;
    box-shadow: 0 5px 15px rgba(0,0,0,.5);
    background-color: #f5f7fa;
    border-radius: 8px;
    padding: 18px 35px;
  }

  .modal__body iframe {
    width: 100%;
  }
  
  .modal__close {
    position: absolute;
    top: 20px;
    right: 20px;
    border: 0;
    outline: none;
    line-height: 0;
    cursor: pointer;
    transition: 0.35s;
  }

  .modal__title {
    margin-bottom: 15px;
    font-ewight: bold;
    font-family: ProximaBold;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
  }
  
  .modal__close-icon img {
    width: 16px;
    height: 16px;
  }
`;

let stylesEl = document.createElement('style');
stylesEl.id = 'go-phone-styles';
stylesEl.innerHTML = stylesList;
document.body.appendChild(stylesEl);

/* STYLES insert end */
function bannerInit() {
  let bannerEl = `
      <div class='lav-tip modal-trigger'>
        <div class='lav-tip__label'>Tip</div>
        <div class='lav-tip__info'>
          <div class='lav-tip__title'>How to remove backgrounds from images</div>
          <div class='lav-tip__caption'>1:22 min view</div>
        </div>
        <div class='lav-tip__play'>
          <img src='${REPO_DIR}/icon-play.svg'>
        </div>
      </div>
  `;

  document
    .querySelector('#sidebar .typography-display-s')
    .insertAdjacentHTML('afterend', bannerEl);
}
bannerInit();

function triggerInit() {
  let triggerIncrement = 0;
  let triggerEl = `
    <div class='lav-trigger'>
      <div class='lav-trigger__head'>
        <div class='lav-trigger__label'>Tip</div>
        <div class='lav-trigger__close'>
          <a width="9" height="9" viewBox="0 0 9 9" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L17 17" stroke="white"/>
            <path d="M1 17L17 1" stroke="white"/>
          </a>
        </div>
      </div>

      <div class='lav-trigger__placeholder'>
        <img src='${REPO_DIR}/trigger-placeholder.png'>
      </div>

      <div class='lav-trigger__caption'>Learn how to animate your text</div>
    </div>
  `;
  document
    .querySelectorAll("#sidebar button[data-categ='sidebar']")
    .forEach(function (btn) {
      btn.addEventListener('click', function () {
        btn++;
        console.log('clicked btn:', btn);
        if (btn > 3) {
          activateBanner();
        }
      });
    });

  function activateBanner() {}
}
initModal();
function initModal() {
  let modal = `
    <div class="modal">
      <div class="modal__body">
        <!-- Close modal -->
        <button class="modal__close">
          <img src='${REPO_DIR}/icon-close.svg'>
        </button>

        <div class='modal__title'>Learn how to remove backgrounds from images</div>

        <div class='modal__video'>
          <iframe title="Learn to use Crello in 5 easy steps" width="775" height="435" src="https://www.youtube.com/embed/mcdGHpLZbh8?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

      </div>
    </div>
  `;
  document.querySelector('body').insertAdjacentHTML('beforeend', modal);

  let modalEl = document.querySelector('.modal');

  document
    .querySelector('.modal__close')
    .addEventListener('click', function (e) {
      e.preventDefault();
      modalClose();
    });

  modalEl.addEventListener('click', function (e) {
    if (e.target.classList.contains('modal_active')) {
      modalClose();
    }
  });

  function modalClose() {
    modalEl.classList.remove('modal_active');
  }

  document.querySelectorAll('.modal-trigger').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      modalEl.classList.add('modal_active');
    });
  });
}
