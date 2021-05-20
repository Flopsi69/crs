(function () {
  try {
    (function (h, o, t, j, a, r) {
      h.hj =
        h.hj ||
        function () {
          (h.hj.q = h.hj.q || []).push(arguments);
        };
      h._hjSettings = { hjid: 410340, hjsv: 6 };
      a = o.getElementsByTagName('head')[0];
      r = o.createElement('script');
      r.async = 1;
      r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
      a.appendChild(r);
    })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
    window.hj =
      window.hj ||
      function () {
        (hj.q = hj.q || []).push(arguments);
      };
    hj('trigger', 'artboard');
  } catch (e) {}

  function gaEvent(action, label = '', value = '') {
    window.dataLayer = window.dataLayer || [];
    try {
      let eventObj = {
        event: '‘paymentForm',
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

  gaEvent('loaded');

  /* STYLES insert start */

  const REPO_DIR = 'https://flopsi69.github.io/crs/crello/sidebarTip';

  let stylesList = `
    .konvajs-content canvas {
      margin-left: -130px!important;
      transition: 0.35s;
    }
    .konvajs-content__sidebarTip-collapse canvas {
      margin-left: 0!important;
    }
    .sidebar-tip {
      position: absolute;
      top: 15px;
      right: 15px;
      width: 260px;
      padding: 20px;
      font-family: ProximaRegular;
      background: #FFFFFF;
      box-shadow: 0px 0px 20px rgba(37, 87, 203, 0.15);
      border-radius: 7px;
      transition: 0.35s;
      overflow: hidden;
    }

    .sidebar-tip__title {
      font-family: ProximaBold;
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

    .sidebar-tip__head-collapse {
      transition: 0.35s;
      transform: rotate(180deg);
      line-height: 1;
    }

    .sidebar-tip__head-collapse:hover {
      opacity: 0.7;
    }

    .sidebar-tip__head-collapse-active {
      transform: rotate(0);
    }

    .sidebar-tip__head-label {
      font-family: ProximaSemiBold;
      padding: 7px 20px;
      background: #2557CB;
      border-radius: 8px;
      font-size: 14px;
      line-height: 1;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      color: #FFFFFF;
      transition: 0.35s;
    }

    .sidebar-tip__body {
      margin-top: 12px;
      padding-bottom: 15px;
    }

    .sidebar-tip__item + .sidebar-tip__item {
      margin-top: 16px;
    }

    .sidebar-tip__item {
      position: relative;
      font-size: 11px;
      line-height: 1.35;
      color: #000000;
      padding-left: 34px;
      transition: 0.35s;
    }

    .sidebar-tip__item:last-child {
      display: flex;
      align-items: center;
    }

    .sidebar-tip__item_checked {
      color: #12B889;
    }

    .sidebar-tip__item:before {
      content: '';
      position: absolute;
      left: 0;
      width: 24px;
      height: 24px;
      background: url('${REPO_DIR}/icon-list-mark.svg') center no-repeat;
      background-size: contain;
    }

    .sidebar-tip__item_checked:before {
      background: url('${REPO_DIR}/icon-list-mark-checked.svg') center no-repeat;
      background-size: contain;
    }

    .sidebar-tip__item-text {
      margin: 0;
    }

    .sidebar-tip__item-details {
      position: relative;
      font-family: ProximaSemiBold;
      color: #2053C9;
      margin-right: 15px;
      border-bottom: 1px solid #2053C9;
      transition: 0.35s;
      padding-top: 4px;
    }

    .sidebar-tip__item-details:after {
      content: '';
      position: absolute;
      width: 9px;
      height: 9px;
      right: -15px;
      top: 50%;
      transform: translateY(-45%);
      background: url('${REPO_DIR}/icon-details.svg') center no-repeat;
      background-size: contain;
      transition: 0.35s;
    }

    .sidebar-tip__item-details:hover {
      border-color: transparent;
    }

    .sidebar-tip__item-details:hover:after {
      right: -13px;
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
      max-width: 832px;
      width: 100%;
      box-shadow: 0 5px 15px rgba(0,0,0,.5);
      background-color: #f5f7fa;
      border-radius: 8px;
      padding: 30px;
      background: linear-gradient(110.26deg, #A84EB6 3.81%, #CD5493 49.11%, #F95D6A 91.21%);
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
      font-weight: bold;
      font-family: ProximaBold;
      margin-right: 30px;
      font-size: 18px;
      line-height: 21px;
      color: #fff;
    }
    
    .modal__close-icon img {
      width: 16px;
      height: 16px;
    }
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
        <button class="sidebar-tip__head-collapse sidebar-tip__head-collapse-active">
          <img src='${REPO_DIR}/icon-collapse.svg'>
        </button>
      </div>

      <div class="sidebar-tip__body">
        <div class="sidebar-tip__title">Design like a pro</div>
        <ul class="sidebar-tip__list">
          <li class="sidebar-tip__item">
            <p class="sidebar-tip__item-text">Select a template or add an image, video for the background. You can aslo upload your own.</p>
            <button class='sidebar-tip__item-details modal-trigger' data-index='1'>See how</button>
          </li>
          <li class="sidebar-tip__item">
            <p class="sidebar-tip__item-text">Remove background if needed. (PRO)</p>
            <button class='sidebar-tip__item-details modal-trigger' data-index='2'>See how</button>
          </li>
          <li class="sidebar-tip__item">
            <p class="sidebar-tip__item-text">Add text. Customize font design, size and color.</p>
            <button class='sidebar-tip__item-details modal-trigger' data-index='3'>See how</button>
          </li>
          <li class="sidebar-tip__item">
            <p class="sidebar-tip__item-text">Add animation. It helps to get users’ attention.</p>
            <button class='sidebar-tip__item-details modal-trigger' data-index='4'>See how</button>
          </li>
          <li class="sidebar-tip__item">
            <p class="sidebar-tip__item-text">Add music.</p>
            <button class='sidebar-tip__item-details modal-trigger' data-index='5'>See how</button>
          </li>
          <li class="sidebar-tip__item">
            <p class="sidebar-tip__item-text">Pack up your logo, brand colours and fonts in Brand kit to make all your designs look consistent (PRO).</p>
            <button class='sidebar-tip__item-details modal-trigger' data-index='6'>See how</button>
          </li>
          <li class="sidebar-tip__item">
            <p class="sidebar-tip__item-text">Download your amazing design!</p>
          </li>
        </ul>
      </div>
    </div>
    `;

    document
      .querySelector('.konvajs-content')
      .insertAdjacentHTML('beforeend', sidebarTipEl);

    document
      .querySelector('.sidebar-tip__head-collapse')
      .addEventListener('click', function (e) {
        e.preventDefault();
        if (this.classList.contains('sidebar-tip__head-collapse-active')) {
          localStorage.setItem('sidebarTipCollapse', 'yes');
          this.classList.remove('sidebar-tip__head-collapse-active');
          document.querySelector('.sidebar-tip__body').style.display = 'none';
          document.querySelector('.sidebar-tip').style = 'width: 140px;';
          document
            .querySelector('.konvajs-content')
            .classList.add('konvajs-content__sidebarTip-collapse');
        } else {
          localStorage.setItem('sidebarTipCollapse', 'no');
          this.classList.add('sidebar-tip__head-collapse-active');
          document.querySelector('.sidebar-tip').style = 'width: 140px;';
          document.querySelector('.sidebar-tip__body').style.display = 'block';
          document.querySelector('.sidebar-tip').removeAttribute('style');
          document
            .querySelector('.konvajs-content')
            .classList.remove('konvajs-content__sidebarTip-collapse');
        }
      });

    document
      .querySelectorAll('.konvajs-content canvas')
      .forEach(function (canvas) {
        canvas.addEventListener('click', function (e) {
          console.log('firee');
          if (document.querySelector('.sidebar-tip__head-collapse-active')) {
            document.querySelector('.sidebar-tip__head-collapse').click();
          }
        });
      });

    if (localStorage.getItem('sidebarTipCollapse') == 'yes') {
      document
        .querySelector('.sidebar-tip__head-collapse')
        .classList.remove('sidebar-tip__head-collapse-active');
      document.querySelector('.sidebar-tip__body').style.display = 'none';
      document.querySelector('.sidebar-tip').style = 'width: 140px;';
      document
        .querySelector('.konvajs-content')
        .classList.add('konvajs-content__sidebarTip-collapse');
    }

    let checkedArr = JSON.parse(localStorage.getItem('sidebarTipChecked'));
    if (checkedArr) {
      for (let checkedNumItem of checkedArr) {
        if (checkedNumItem) {
          document
            .querySelector(
              '.sidebar-tip__item:nth-child(' + checkedNumItem + ')'
            )
            .classList.add('sidebar-tip__item_checked');
        }
      }
    } else {
      checkedArr = [];
    }

    document
      .querySelectorAll('.sidebar-tip__item-details')
      .forEach(function (item) {
        item.addEventListener('click', function (e) {
          e.preventDefault();
          item.parentElement.classList.add('sidebar-tip__item_checked');

          if (!checkedArr.includes(item.dataset.index)) {
            checkedArr.push(item.dataset.index);
            localStorage.setItem(
              'sidebarTipChecked',
              JSON.stringify(checkedArr)
            );
          }
        });
      });

    document
      .querySelector('#downloadButtonTour')
      .addEventListener('click', function () {
        document
          .querySelector('.sidebar-tip__item:last-child')
          .classList.add('sidebar-tip__item_checked');
      });
  }

  initModal();
  function initModal() {
    let modal = `
      <div class="modal">
        <div class="modal__body">
          <!-- Close modal -->
          <button class="modal__close">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L17 17" stroke="#ffffff"/>
              <path d="M1 17L17 1" stroke="#ffffff"/>
            </svg>        
          </button>

          <div class='modal__title'>Learn how to easily get started with Crello</div>

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
        closeModal();
      });

    modalEl.addEventListener('click', function (e) {
      if (e.target.classList.contains('modal_active')) {
        closeModal();
      }
    });

    document.querySelectorAll('.modal-trigger').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        chooseVideo(btn.dataset.index, btn.previousElementSibling.innerText);
        setTimeout(() => {
          modalEl.classList.add('modal_active');
          gaEvent('pop-up loaded', 'video pop-up');
        }, 500);
      });
    });

    function chooseVideo(index, title) {
      let videoSrc;
      gaEvent('seehow click', 'seehow ' + index);

      switch (parseInt(index)) {
        case 1:
          videoSrc =
            'https://www.youtube.com/embed/mcdGHpLZbh8?feature=oembed&enablejsapi=1&origin=https%3A%2F%2Fcrello.com';
          break;
        case 2:
          videoSrc =
            'https://www.youtube.com/embed/Ibqb5IIJbqE?feature=oembed&enablejsapi=1&origin=https%3A%2F%2Fcrello.com';
          break;
        case 3:
          videoSrc =
            'https://www.youtube.com/embed/UoaSJIYspp8?feature=oembed&enablejsapi=1&origin=https%3A%2F%2Fcrello.com';
          break;
        case 4:
          videoSrc =
            'https://www.youtube.com/embed/jezPVBppz7E?feature=oembed&enablejsapi=1&origin=https%3A%2F%2Fcrello.com';
          break;
        case 5:
          videoSrc =
            'https://www.youtube.com/embed/MblfcAe39Zk?feature=oembed&enablejsapi=1&origin=https%3A%2F%2Fcrello.com';
          break;
        case 6:
          videoSrc =
            'https://www.youtube.com/embed/Kg7sLteN9eo?feature=oembed&enablejsapi=1&origin=https%3A%2F%2Fcrello.com';
          break;
      }

      document.querySelector('.modal__title').innerText = title;
      document.querySelector('.modal__video iframe').src = videoSrc;
    }

    function closeModal() {
      gaEvent('pop-up closed', 'video pop-up');
      modalEl.classList.remove('modal_active');
      document.querySelector('.modal__video iframe').src =
        document.querySelector('.modal__video iframe').src;
    }
  }
})();
