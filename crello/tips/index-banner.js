function gaEvent(action, label = '', value = '') {
  window.dataLayer = window.dataLayer || [];
  try {
    let eventObj = {
      'event': 'event-to-ga',
      'eventCategory': 'Experiment — Tips',
      'eventAction': action,
      'eventLabel': label,
      'eventValue': value
    };
    dataLayer.push(eventObj);
  } catch (e) {
    console.log(e);
  }
}

gaEvent('loaded');


try{
  (function(h,o,t,j,a,r){
      h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
      h._hjSettings={hjid:410340,hjsv:6};
      a=o.getElementsByTagName('head')[0];
      r=o.createElement('script');r.async=1;
      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
      a.appendChild(r);
  })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
window.hj = window.hj || function(){(hj.q = hj.q || []).push(arguments)};
      hj('trigger', 'tips_tutorial');
}
catch (e) { }



/* STYLES insert start */

const REPO_DIR = 'https://flopsi69.github.io/crs/crello/tips';

let stylesList = `
  .lav-tooltip {
    color: #FFFFFF;
    position: relative;
    width: 366px;
    padding: 24px;
    background: linear-gradient(259.7deg,#ff5e64,#9e4cc0);
    border-radius: 12px;
    position: fixed;
    z-index: 999!important;
    left: 72px;
    bottom: 50px;
  }
  .lav-tooltip__head {
    display: flex;
    align-items: flex-start;
  }
  .lav-tooltip__close {
    cursor: pointer;
    transition: 0.35s;
  }
  .lav-tooltip__close svg {
    width: 15px;
    height: 15px;
    padding: 2px;
  }
  .lav-tooltip__close:hover {
    opacity: 0.6;
  }
  .lav-tooltip__title {
    font-size: 18px;
    line-height: 23px;
    letter-spacing: 0.025em;
    flex-grow: 1;
    font-family: ProximaBold;
    padding-right: 40px;
  }
  .lav-tooltip__time {
    font-size: 12px;
    line-height: 14px;
    background: rgba(245, 238, 231, 0.2);
    border-radius: 5px;
    margin: 14px 0;
    display: inline-block;
    padding: 5px 5px 2px;
  }
  .lav-tooltip__placeholder {
    cursor: pointer;
    transition: 0.35s;
    opacity: 1;
    line-height: 0;
  }
  .lav-tooltip__placeholder:hover {
    opacity: 0.8;
  }
  .lav-tooltip__placeholder img {
    width: 100%;
  }
  .lav-tooltip__arrow {
    position: absolute;
    fill: #a24dbd;
    bottom: 31px;
    left: -17px;
    transform: rotate(-90deg);
  }
  .lav-trigger {
    background: #2053C9;
    border-radius: 8px;
    padding: 15px;
    width: 200px;
    position: fixed;
    right: 15px;
    bottom: 65px;
    transition: 0.3s;
    opacity: 0;
    pointer-events: none;
  }
  .lav-trigger_open {
    opacity: 1;
    pointer-events: auto;
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
  .lav-trigger__placeholder {
    margin-bottom: 14px;
    transition: 0.35s;
    cursor: pointer;
    line-height: 0;
  }
  .lav-trigger__placeholder:hover {
    opacity: .8;
  }
  .lav-trigger__placeholder img {
    width: 100%;
  }
  .lav-trigger__caption {
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #FFFFFF;
    font-family: ProximaSemiBold;
  }
  .lav-trigger__close {
    cursor: pointer;
    transition: 0.35s;
  }
  .lav-trigger__close svg {
    width: 15px;
    height: 15px;
    padding: 2px;
  }
  .lav-trigger__close:hover {
    opacity: 0.6;
  }
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

  .modal__video {
    position: relative;
    line-height: 0;
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

  .modal__list {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
  }

  .modal__item {
    cursor: pointer;
    transition: 0.35s;
    width: 18%;
  }

  .modal__item:hover {
    transition: 0.35s;
  }

  .modal__item-title {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    font-family: ProximaSemiBold;
    color: #000000;
    margin-top: 6px;
    transition: 0.35s;
  }

  .modal__item:hover .modal__item-title {
    color: rgb(33, 83, 204);
  }

  .modal__item-video img {
    width: 100%;
    height: auto;
  }
`;

let eventName;

document.body.insertAdjacentHTML(
  'beforeend',
  `<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
<script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>`
);

let stylesEl = document.createElement('style');
stylesEl.id = 'go-phone-styles';
stylesEl.innerHTML = stylesList;
document.body.appendChild(stylesEl);

/* STYLES insert end */
initModal();
bannerInit();
document.querySelectorAll('.modal-trigger').forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    gaEvent('banner click', eventName + ' banner');
    gaEvent('pop-up loaded', eventName+ ' banner');
    document.querySelector('.modal').classList.add('modal_active');
  });
});

function bannerInit() {
  let bannerEl = `
      <div class='lav-tip modal-trigger'>
        <div class='lav-tip__label'>Tip</div>
        <div class='lav-tip__info'>
          <div class='lav-tip__title'>Learn how to create a visually stunning collage</div>
          <div class='lav-tip__caption'>1:35 min view</div>
        </div>
        <div class='lav-tip__play'>
          <img src='${REPO_DIR}/icon-play.svg'>
        </div>
      </div>
  `;


  document
    .querySelector('#sidebar .typography-display-s')
    .insertAdjacentHTML('afterend', bannerEl);
  
  getCase(document.querySelector('#sidebar button[class*="active"]').dataset.value);

  document
  .querySelectorAll("#sidebar button[data-categ='sidebar']")
  .forEach(function (btn) {
    btn.addEventListener('click', function () {
      console.log('clicked btn:', btn.dataset.value);
      getCase(btn.dataset.value);
    });
  });
}

function getCase(tab) {
  tab = tab.toLowerCase();
  var time, caption;
  if (tab == 'designs') {
    time = '1:35 min view';
    caption = 'Learn how to create a visually stunning collage';
    iframe = 'https://www.youtube.com/embed/O31iu_5Btew?feature=oembed&enablejsapi=1&origin=https%3A%2F%2Fcrello.com';
    eventName = 'templates';
  } else if (tab == 'photos') {
    time = '1:21 min view';
    caption = 'Learn how to remove backgrounds from images';
    iframe = 'https://www.youtube.com/embed/Ibqb5IIJbqE?feature=oembed&enablejsapi=1&origin=https%3A%2F%2Fcrello.com';
    eventName = 'photos';
  } else if (tab == 'media') {
    time = '0:39 min view';
    caption = 'Learn how to upload your videos to Crello';
    iframe = 'https://www.youtube.com/embed/OBT4ujOmvDE?feature=oembed&enablejsapi=1&origin=https%3A%2F%2Fcrello.com';
    eventName = 'videos';
  } else if (tab == 'music') {
    time = '1:12 min view';
    caption = 'Learn how to add music to your designs';
    iframe = 'https://www.youtube.com/embed/MblfcAe39Zk?feature=oembed&enablejsapi=1&origin=https%3A%2F%2Fcrello.com';
    eventName = 'music';
  } else if (tab == 'animation') {
    time = '1:18 min view';
    caption = 'Learn how to use animated effects in Crello';
    iframe = 'https://www.youtube.com/embed/jezPVBppz7E?feature=oembed&enablejsapi=1&origin=https%3A%2F%2Fcrello.com';
    eventName = 'animations';
  } else if (tab == 'graphics') {
    time = '1:24 min view';
    caption = 'Learn how to work with objects in Crello';
    iframe = 'https://www.youtube.com/embed/usOhg9CM12I?feature=oembed&enablejsapi=1&origin=https%3A%2F%2Fcrello.com';
    eventName = 'objects';
  } else if (tab == 'background') {
    time = '1:03 min view';
    caption = 'Learn how to create a custom Zoom background';
    iframe = 'https://www.youtube.com/embed/t2dUV9uRS0w?feature=oembed&enablejsapi=1&origin=https%3A%2F%2Fcrello.com';
    eventName = 'backgrounds';
  } else if (tab == 'text') {
    time = '1:31 min view';
    caption = 'Learn how to add & edit texts with Crello';
    iframe = 'https://www.youtube.com/embed/UoaSJIYspp8?feature=oembed&enablejsapi=1&origin=https%3A%2F%2Fcrello.com';
    eventName = 'text';
  } else if (tab == 'brandkit') {
    time = '1:52 min view';
    caption = 'Learn how to work with Brand Kit functionality';
    iframe = 'https://www.youtube.com/embed/Kg7sLteN9eo?feature=oembed&enablejsapi=1&origin=https%3A%2F%2Fcrello.com';
    eventName = 'brand kit';
  } else {
    time = false;
  }

  if (time) {
    document.querySelector('.lav-tip').style.display = 'flex';
    document.querySelector('.lav-tip__title').innerText = caption;
    document.querySelector('.lav-tip__caption').innerText = time;
    document.querySelector('.modal__title').innerText = caption;
    document.querySelector('.modal__video iframe').src = iframe;
  } else {
    document.querySelector('.lav-tip').style.display = 'none';
  }
}

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
          <iframe title="Learn to use Crello in 5 easy steps" width="775" height="435" src="https://www.youtube.com/embed/O31iu_5Btew?feature=oembed&enablejsapi=1&origin=https%3A%2F%2Fcrello.com" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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

  for (let item of document.querySelectorAll('.modal__item')) {
    item.addEventListener('click', function () {
      gaEvent('pop-up mini block', 'video-pop-up');
      document.querySelector('.modal__title').innerText = item.querySelector(
        '.modal__item-title'
      ).innerText;

      document.querySelector('.modal__video iframe').src = item.dataset.video;
    });
  }
}


function modalClose() {
  gaEvent('pop-up closed', eventName + ' banner');
  modalEl.classList.remove('modal_active');
  document.querySelector('.modal__video iframe').src = document.querySelector('.modal__video iframe').src;
}