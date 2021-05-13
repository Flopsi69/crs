function gaEvent(action, label = '', value = '') {
  window.dataLayer = window.dataLayer || [];
  try {
    let eventObj = {
      event: 'event-to-ga',
      eventCategory: 'Experiment — Tips',
      eventAction: action,
      eventLabel: label,
      eventValue: value
    };
    dataLayer.push(eventObj);
  } catch (e) {
    console.log(e);
  }
}

// gaEvent('loaded');

// try {
//   (function (h, o, t, j, a, r) {
//     h.hj =
//       h.hj ||
//       function () {
//         (h.hj.q = h.hj.q || []).push(arguments);
//       };
//     h._hjSettings = { hjid: 410340, hjsv: 6 };
//     a = o.getElementsByTagName('head')[0];
//     r = o.createElement('script');
//     r.async = 1;
//     r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
//     a.appendChild(r);
//   })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
//   window.hj =
//     window.hj ||
//     function () {
//       (hj.q = hj.q || []).push(arguments);
//     };
//   hj('trigger', 'tips_tutorial');
// } catch (e) {}

/* STYLES insert start */

const REPO_DIR = 'https://flopsi69.github.io/crs/crello/sidebarTip';

let stylesList = `
  .sidebar-tip {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 320px;
    padding: 20px 20px 35px;
    font-family: ProximaRegular;
    background: #FFFFFF;
    box-shadow: 0px 0px 20px rgba(37, 87, 203, 0.15);
    border-radius: 7px;
  }

  .sidebar-tip__title {
    font-family: ProximaSemiBold;
    font-weight: bold;
    font-size: 16px;
    line-height: 1.25;
    letter-spacing: 0.01em;
    color: #000000;
    margin-bottom: 10px;
  }

  .sidebar-tip__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .sidebar-tip__head-label {
    font-family: ProximaSemiBold;
    padding: 7px 20px;
    background: #2557CB;
    border-radius: 8px;
    font-family: Proxima Nova;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: #FFFFFF;
  }

  .sidebar-tip__head-collapse {}

  .sidebar-tip__item {
    font-size: 11px;
    line-height: 1.35;
    color: #000000;
  }

  .sidebar-tip__item:before {
    content: '';
    position: absolute;
    left: 0;
    
  }

  .sidebar-tip__item-text {
    margin: 0;
  }

  .sidebar-tip__item-details {
    font-family: ProximaSemiBold;
    color: #2053C9;
    margin-right: 18px;;

  }

  .sidebar-tip__item-details:after {
    content: '';
    position: absolute;
    width: 9px;
    height: 9px;
    right: -18px;
    top: 50%;
    transform: translateY(-50%);
    background: url('${REPO_DIR}/icon-details.svg') center no-repeat;
    background-size: contain;

  }

  .sidebar-tip__item-text {}

  .sidebar-tip__item-text {}

  .sidebar-tip__item-text {}


  .sidebar-tip {}

  .sidebar-tip {}
`;

// document.body.insertAdjacentHTML(
//   'beforeend',
//   `<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
// <script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>`
// );

let stylesEl = document.createElement('style');
stylesEl.id = 'go-sidebarTip-styles';
stylesEl.innerHTML = stylesList;
document.body.appendChild(stylesEl);

/* STYLES insert end */
if (document.querySelector('.konvajs-content')) {
  triggerInit();
} else {
  setTimeout(triggerInit, 1500);
}
function triggerInit() {
  let sidebarTipEl = `
  <div class="sidebar-tip">
    <div class="sidebar-tip__head">
      <div class="sidebar-tip__head-label">Tip</div>
      <div class="sidebar-tip__head-collapse">
        <img src='${REPO_DIR}/icon-collapse.svg'>
      </div>
    </div>

    <div class="sidebar-tip__body">
      <div class="sidebar-tip__title">Design like a pro</div>
      <ul class="sidebar-tip__list">
        <li class="sidebar-tip__item">
          <p class="sidebar-tip__item-text">Select a template or add an image, video for the background. You can aslo upload your own.</p>
          <button class='sidebar-tip__item-details' href="">See how</button>
        </li>
        <li class="sidebar-tip__item">
          <p class="sidebar-tip__item-text">Remove background if needed. (PRO)</p>
          <button class='sidebar-tip__item-details' href="">See how</button>
        </li>
        <li class="sidebar-tip__item">
          <p class="sidebar-tip__item-text">Add text. Customize font design, size and color.</p>
          <button class='sidebar-tip__item-details' href="">See how</button>
        </li>
        <li class="sidebar-tip__item">
          <p class="sidebar-tip__item-text">Add animation. It helps to get users’ attention.</p>
          <button class='sidebar-tip__item-details' href="">See how</button>
        </li>
        <li class="sidebar-tip__item">
          <p class="sidebar-tip__item-text">Add music.</p>
          <button class='sidebar-tip__item-details' href="">See how</button>
        </li>
        <li class="sidebar-tip__item">
          <p class="sidebar-tip__item-text">Pack up your logo, brand colours and fonts in Brand kit to make all your designs look consistent (PRO).</p>
          <button class='sidebar-tip__item-details' href="">See how</button>
        </li>
        <li class="sidebar-tip__item">
          <p class="sidebar-tip__item-text">Download your amazing design!</p>
          <button class='sidebar-tip__item-details' href="">See how</button>
        </li>
      </ul>
    </div>
  </div>
  `;

  document
    .querySelector('.konvajs-content')
    .insertAdjacentHTML('beforeend', sidebarTipEl);
}

// initModal();
function initModal() {
  let modal = `
    < class="modal">
      <div class="modal__body">
        <!-- Close modal -->
        <button class="modal__close">
          <img src='${REPO_DIR}/icon-close.svg'>
        </button>

        <div class='modal__title'>Learn how to easily get started with Crello</div>

        <div class='modal__video'>
          <iframe title="Learn to use Crello in 5 easy steps" width="775" height="435" src="https://www.youtube.com/embed/mcdGHpLZbh8?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <div class='modal__list'>
          <div class='modal__item' data-video='https://www.youtube.com/embed/ErMBRxbWnXk?feature=oembed&enablejsapi=1&origin=https%3A%2F%2Fcrello.com'>
            <div class='modal__item-video'>
              <img width="359" height="202" src="https://landing-cdn.crello.com/tutorials/wp-content/uploads/2021/04/14163515/Resume-359x202.jpg" class="attachment-tutorials size-tutorials wp-post-image" alt="" srcset="https://landing-cdn.crello.com/tutorials/wp-content/uploads/2021/04/14163515/Resume-359x202.jpg 359w, https://landing-cdn.crello.com/tutorials/wp-content/uploads/2021/04/14163515/Resume-300x169.jpg 300w, https://landing-cdn.crello.com/tutorials/wp-content/uploads/2021/04/14163515/Resume-768x432.jpg 768w, https://landing-cdn.crello.com/tutorials/wp-content/uploads/2021/04/14163515/Resume-1024x576.jpg 1024w, https://landing-cdn.crello.com/tutorials/wp-content/uploads/2021/04/14163515/Resume-546x307.jpg 546w" sizes="(max-width: 359px) 100vw, 359px">
            </div>
            <div class='modal__item-title'>Learn how to create a professional and impressive resume</div>
          </div>
          
          <div class='modal__item' data-video='https://www.youtube.com/embed/O31iu_5Btew?feature=oembed&enablejsapi=1&origin=https%3A%2F%2Fcrello.com'>
            <div class='modal__item-video'>
              <img width="359" height="202" src="https://landing-cdn.crello.com/tutorials/wp-content/uploads/2021/04/09114339/Collage-359x202.jpg" class="attachment-tutorials size-tutorials wp-post-image" alt="" srcset="https://landing-cdn.crello.com/tutorials/wp-content/uploads/2021/04/09114339/Collage-359x202.jpg 359w, https://landing-cdn.crello.com/tutorials/wp-content/uploads/2021/04/09114339/Collage-300x169.jpg 300w, https://landing-cdn.crello.com/tutorials/wp-content/uploads/2021/04/09114339/Collage-768x432.jpg 768w, https://landing-cdn.crello.com/tutorials/wp-content/uploads/2021/04/09114339/Collage-1024x576.jpg 1024w, https://landing-cdn.crello.com/tutorials/wp-content/uploads/2021/04/09114339/Collage-546x307.jpg 546w" sizes="(max-width: 359px) 100vw, 359px">
            </div>
            <div class='modal__item-title'>Learn how to create a visually stunning collage</div>
          </div>

          <div class='modal__item' data-video='https://www.youtube.com/embed/uCsR1aN0pbU?feature=oembed&enablejsapi=1&origin=https%3A%2F%2Fcrello.com'>
            <div class='modal__item-video'>
              <img width="359" height="202" src="https://landing-cdn.crello.com/tutorials/wp-content/uploads/2020/11/02152209/YouTube-Thumbnail2-359x202.jpg" class="attachment-tutorials size-tutorials wp-post-image" alt="" srcset="https://landing-cdn.crello.com/tutorials/wp-content/uploads/2020/11/02152209/YouTube-Thumbnail2-359x202.jpg 359w, https://landing-cdn.crello.com/tutorials/wp-content/uploads/2020/11/02152209/YouTube-Thumbnail2-300x169.jpg 300w, https://landing-cdn.crello.com/tutorials/wp-content/uploads/2020/11/02152209/YouTube-Thumbnail2-768x432.jpg 768w, https://landing-cdn.crello.com/tutorials/wp-content/uploads/2020/11/02152209/YouTube-Thumbnail2-1024x576.jpg 1024w, https://landing-cdn.crello.com/tutorials/wp-content/uploads/2020/11/02152209/YouTube-Thumbnail2-546x307.jpg 546w" sizes="(max-width: 359px) 100vw, 359px">
            </div>
            <div class='modal__item-title'>Learn how to create eye-catching YouTube thumbnails</div>
          </div>

          <div class='modal__item' data-video='https://www.youtube.com/embed/PEywruw-btQ?feature=oembed&enablejsapi=1&origin=https%3A%2F%2Fcrello.com'>
            <div class='modal__item-video'>
              <img width="359" height="202" src="https://landing-cdn.crello.com/tutorials/wp-content/uploads/2021/03/31144347/Invoice-359x202.jpg" class="attachment-tutorials size-tutorials wp-post-image" alt="" srcset="https://landing-cdn.crello.com/tutorials/wp-content/uploads/2021/03/31144347/Invoice-359x202.jpg 359w, https://landing-cdn.crello.com/tutorials/wp-content/uploads/2021/03/31144347/Invoice-300x169.jpg 300w, https://landing-cdn.crello.com/tutorials/wp-content/uploads/2021/03/31144347/Invoice-768x432.jpg 768w, https://landing-cdn.crello.com/tutorials/wp-content/uploads/2021/03/31144347/Invoice-1024x576.jpg 1024w, https://landing-cdn.crello.com/tutorials/wp-content/uploads/2021/03/31144347/Invoice-546x307.jpg 546w" sizes="(max-width: 359px) 100vw, 359px">
            </div>
            <div class='modal__item-title'>Learn how to create a great-looking invoice</div>
          </div>

          <div class='modal__item' data-video='https://www.youtube.com/embed/Kg7sLteN9eo?feature=oembed'>
            <div class='modal__item-video'>
              <img width="359" height="202" src="https://landing-cdn.crello.com/tutorials/wp-content/uploads/2020/11/17171915/Brand-kit-359x202.jpg" class="attachment-tutorials size-tutorials wp-post-image" alt="" srcset="https://landing-cdn.crello.com/tutorials/wp-content/uploads/2020/11/17171915/Brand-kit-359x202.jpg 359w, https://landing-cdn.crello.com/tutorials/wp-content/uploads/2020/11/17171915/Brand-kit-300x169.jpg 300w, https://landing-cdn.crello.com/tutorials/wp-content/uploads/2020/11/17171915/Brand-kit-768x432.jpg 768w, https://landing-cdn.crello.com/tutorials/wp-content/uploads/2020/11/17171915/Brand-kit-1024x576.jpg 1024w, https://landing-cdn.crello.com/tutorials/wp-content/uploads/2020/11/17171915/Brand-kit-546x307.jpg 546w" sizes="(max-width: 359px) 100vw, 359px">
            </div>
            <div class='modal__item-title'>Learn how to work with Brand Kit functionality</div>
          </div>
        </div>

      </div>
    </>
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

  document.querySelectorAll('.modal-trigger').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      gaEvent('video image click', 'onboarding');
      gaEvent('pop-up loaded', 'onboarding');
      modalEl.classList.add('modal_active');
    });
  });

  for (let item of document.querySelectorAll('.modal__item')) {
    item.addEventListener('click', function () {
      gaEvent('pop-up mini block', 'video-pop-up');
      document.querySelector('.modal__title').innerText =
        item.querySelector('.modal__item-title').innerText;

      document.querySelector('.modal__video iframe').src = item.dataset.video;
    });
  }

  function modalClose() {
    gaEvent('pop-up closed', 'onboarding');
    modalEl.classList.remove('modal_active');
    document.querySelector('.modal__video iframe').src = document.querySelector(
      '.modal__video iframe'
    ).src;
  }
}
