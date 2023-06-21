console.log('initExp');

/********* Settings **********/
const settings = {
  dir: 'https://flopsi69.github.io/crs/sleepypatch/gallery',
  clarity: true,
};

let isTrustedScroll = false;

// Alalytic 3
function gaEvent(action, label) {
  if (!label) {
    label = '';
  }
  try {
    var objData = {
      event: 'event-to-ga',
      eventCategory: 'Exp: Adding more product photos on the page',
      eventAction: action,
      eventLabel: label,
      eventValue: '',
    };
    console.log('EventFire:', objData);
    dataLayer.push(objData);
  } catch (e) {
    console.log('Event Error:', e);
  }
}

// Styles
const styles = `
  .lav-overflow {
    overflow: hidden;
  }
  .lav-hide {
    display: none;
  }
  header .js-mobile.wave-bg {
    display: none!important;
  }
  .js-iphone .transparent {
    margin-top: 0;
  }
  .js-iphone header {
    padding-bottom: 34px;
  }
  .hand-banner img {
    display: none;
  }
  .shipping-noti {
    padding: 6px;
  }
  .js-iphone .transparent {
    padding-top: 50px;
  }
  .js-iphone .js-heading h1 {
    margin-top: 16px;
    margin-bottom: 8px;
  }
  .rev.trust-rating img {
    margin-top: 0;
  }
  .sleepypatch-template .js-logo img {
    width: 50px;
    height: 50px;
  }
  .rev.trust-rating {
    padding: 0;
    background: none;
    border: 0;
    color: #fff;
    display: flex;
    align-items: center;
    margin-bottom: 0;
    margin-top: 10px;
  }
  .rev.trust-rating .rate {
    margin-right: 12px;
  }
  .rev.trust-rating .text {
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    margin-top: -1px;
  }
  .rev.trust-rating .text span {
    display: flex;
    align-items: center;
    font-weight: 400;
    color: #fff;
    margin-top: 1px;
  }
  .rev.trust-rating .text span svg {
    margin-left: 5px;
    margin-bottom: -2px;
  }
  .lav-gallery {
    padding: 0 20px;
    // opacity: 0;
    transition: 0.2s;
  }
  .lav-gallery.ready {
    // opacity: 1;
  }
  .lav-gallery img {
    max-width: 100%;
  }
  .splide__pagination {
    padding: 0;
    margin-top: 12px;
  }
  .splide__pagination li {
    display: flex;
    transition: 0.3s;
  }
  .splide__pagination li + li {
    margin-left: 6px;
  }
  .splide__pagination__page {
    height: 10px;
    width: 10px;
    border: 0;
    padding: 0;
    border-radius: 50%;
    background: #EAEFFD;
    transition: 0.3s;
  }
  .lav-pag-next button {
    width: 7px;
    height: 7px;
  }
  .lav-pag-prev button {
    width: 7px;
    height: 7px;
  }
  .lav-pag-prev-l button {
    width: 4px;
    height: 4px;
  }
  .splide__pagination-prev li:not(.lav-pag-prev-l ~ li):not(.lav-pag-prev-l) {
    opacity: 0;
  }
  .lav-pag-next + li button {
    width: 4px;
    height: 4px;
  }
  .lav-pag-next + li ~ li {
    opacity: 0;
  }
  .splide__pagination__page.is-active {
    background-color: #3292DA;
  }
  .splide__arrow {
    // position: absolute;
    // z-index: 1;
    // top: 50%;
    // transform: translateY(-50%);
    // padding: 0;
    // outline: none;
    // border: 0;
    // width: 34px;
    // height: 34px;
    // border-radius: 50%;
    // background: rgba(234, 239, 253, 0.8) url('${settings.dir}/img/arrow.svg') center no-repeat;
  }
  .splide__arrow svg {
    // display: none;
  }
  .splide__arrow--prev {
    // left: 12px;
    // transform: rotate(180deg) translateY(50%);
  }
  .splide__arrow--next {
    // right: 12px;
  }
  
  .hand-banner {
    padding: 0 20px;
  }
  header .hand-banner .js-btn.btn-primary {
    padding: 10px 20px 4px;
    margin-bottom: 0;
    margin-top: 8px;
  }

  .lav-video {
    padding: 0;
    margin: 16px 0 32px;
  }
  .lav-video__title {
    font-size: 36px;
    line-height: 42px;
    text-align: center;
    text-transform: uppercase;
    color: #0C0B0B;
    font-family: DINEngschrift LT,Roboto,sans-serif;
  }

  .lav-modal {
    position: fixed;
    z-index: 99999999999;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(8, 29, 50, 0.4);
    transition: 0.35s;
    opacity: 1;
    padding: 12px;
  }
  .lav-modal__close {
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 999999;
    background: black;
    border-radius: 50%;
    cursor: pointer;
    line-height: 0;
    padding: 3px;
    transition: 0.3s;
  }
  .lav-modal__close img {
    width: 30px;
  }
  .lav-open-modal {
    cursor: pointer;
  }
  .lav-modal:not(.active) {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }
  .lav-modal__inner {
    max-height: 95vh;
    overflow: auto;
    line-height: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 100%;
    max-width: 85%;
    transition: 0.4s;
    opacity: 0;
    visibility: hidden;
    border-raidus: 10px;
    pointer-events: none;
    transform: translate(-50%, -100%);
  }
  .lav-modal__video {
    display: none;
    border-radius: 10px;
    max-width: 100%;
    width: 100%;
  }
  .lav-modal__video.active {
    display: block;
  }
  .lav-modal__inner.active {
    transform: translate(-50%, -50%);
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }
  .lav-video video {
    margin-top: 30px;
    border-radius: 10px;
  }
`;

const stylesEl = document.createElement('style');
stylesEl.innerHTML = styles;
/*** STYLES / end ***/
let initBodyInterval = setInterval(() => {
  if (document.head) {
    document.head.appendChild(stylesEl);
    clearInterval(initBodyInterval);
    connectSplide();
  }
}, 20);

/********* Custom Code **********/
let initInterval = setInterval(() => {
  if (document.querySelector('.navbar')) {
    clearInterval(initInterval);
    init();
  }
}, 100);

function init() {
  gaEvent('loaded');
  console.log('init');
  addGallery();

  document
    .querySelector('.navbar')
    .insertAdjacentElement(
      'afterend',
      document.querySelector('.shipping-noti.js-mobile')
    );

  document
    .querySelector('.hand-banner')
    .insertAdjacentElement(
      'afterend',
      document.querySelector('.rev.trust-rating')
    );
  document.querySelector('.rev.trust-rating').innerHTML =
    document.querySelector('.rev.trust-rating .stars').innerHTML;

  document.querySelector('.rev.trust-rating .text').classList.add('lav-hide');

  document.querySelector('.rev.trust-rating').insertAdjacentHTML(
    'beforeend',
    `<div class='text'><strong>TrustScore ${
      document.querySelector('.jdgm-rev-widg').dataset.averageRating
    }</strong><br/>
    <span>based on ${document
      .querySelector('.rev.trust-rating .text')
      .innerText.trim()
      .split(' ')[1]
      .replace('(', '')
      .replace(
        ')',
        ''
      )} reviews <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L4 4L1 7" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    </span></div>`
  );

  document
    .querySelector('.trust-rating')
    .addEventListener('click', function () {
      gaEvent('Click on element', 'Trusted score');

      isTrustedScroll = true;
      document.querySelector('#reviews').scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        isTrustedScroll = false;
      }, 1500);
    });

  document.querySelector('.trust-rating').classList.add('lav-watch');

  let initSplideInterval = setInterval(() => {
    if (typeof Splide == 'function') {
      clearInterval(initSplideInterval);
      initSlider();
    }
  }, 50);

  addVideo();
  addModal();
  observerView();

  document.querySelector('.hand-banner a').addEventListener('click', () => {
    gaEvent(
      'Click on element',
      `Get it now button. Show ${parseInt(
        document.querySelector('.splide__slide.is-active').ariaLabel
      )}`
    );
  });
}

function addModal() {
  const el = `
    <div class='lav-modal'>
      <div class='lav-modal__close'>
        <img src='${settings.dir}/img/modal-close.svg'>
      </div>
      <div class='lav-modal__inner'>
        <video data-video='1' playsinline class='lav-modal__video active' width="100%" controls >
          <source src="${settings.dir}/img/video1.mp4" type="video/mp4">
          Your browser doesn't support HTML5 video tag.
        </video>

        <video data-video='2' playsinline class='lav-modal__video' width="100%" controls >
        <source src="${settings.dir}/img/video2.mp4" type="video/mp4">
        Your browser doesn't support HTML5 video tag.
      </video>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', el);

  document.querySelector('.lav-modal').addEventListener('click', function (e) {
    if (e.target.classList.contains('lav-modal')) {
      closeModal();
    }
  });

  for (let item of document.querySelectorAll('.lav-modal__close')) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      closeModal();
    });
  }

  for (let item of document.querySelectorAll('.lav-open-modal')) {
    item.addEventListener('click', function (e) {
      e.preventDefault();

      if (item.dataset.target === '1') {
        gaEvent('Click on element', `Open gallery video 1`);
      } else if (item.dataset.target === '2') {
        gaEvent('Click on element', `Open gallery video 2`);
      }
      openModal(item.dataset.target);
    });
  }

  function openModal(num) {
    document.body.classList.add('lav-overflow');
    const el = document.querySelector('.lav-modal__inner');

    if (document.querySelector('.lav-modal__video.active')) {
      document
        .querySelector('.lav-modal__video.active')
        .classList.remove('active');
    }

    document
      .querySelector(`.lav-modal__video[data-video='${num}']`)
      .classList.add('active');

    document.querySelector('.lav-modal').classList.add('active');

    setTimeout(() => {
      el.classList.add('active');
      document.querySelector(`.lav-modal__video.active`).play();
    }, 400);
  }

  function closeModal() {
    document.body.classList.remove('lav-overflow');
    document.querySelector(`.lav-modal__video.active`).currentTime = 0;
    document.querySelector(`.lav-modal__video.active`).pause();
    // if (document.querySelector('.lav-modal__inner.active video')) {
    //   document.querySelector('.lav-modal__inner.active video').src = document
    //     .querySelector('.lav-modal__inner.active video')
    //     .src.replace('autoplay=1', 'autoplay=0');
    // }

    document
      .querySelector('.lav-modal__inner.active')
      .classList.remove('active');

    setTimeout(() => {
      document.querySelector('.lav-modal.active').classList.remove('active');
    }, 400);
  }
}

function addVideo() {
  const el = `
    <section class='lav-video lav-watch'>
      <div class='container'>
        <div class='lav-video__title'>Kids keeping you awake?</div>

        <video width="100%" playsinline controls poster='${settings.dir}/img/poster.png'>
          <source src="${settings.dir}/img/wake-ups.mp4" type="video/mp4">
          Your browser doesn't support HTML5 video tag.
        </video>
      </div>
    </section>
  `;

  document
    .querySelector('.sleeping-problems')
    .insertAdjacentHTML('afterend', el);

  const videoEl = document.querySelector('.lav-video video');

  setTimeout(() => {
    videoEl.addEventListener('play', () => {
      let time = parseInt((videoEl.currentTime * 100) / videoEl.duration);
      gaEvent('Click on element', `Video. Play - ${time ? time : 0}%`);
    });
    videoEl.addEventListener('pause', () => {
      let time = parseInt((videoEl.currentTime * 100) / videoEl.duration);
      gaEvent('Click on element', `Video. Pause - ${time ? time : 0}%`);
    });
  }, 1000);
}

function addGallery() {
  let el = `
    <div class="splide lav-gallery">
      <div class="splide__track">
        <ul class="splide__list">
          <li class="splide__slide">
            <img src="${settings.dir}/img/slide1.png" alt="">
          </li>
          <li class="splide__slide">
            <img src="${settings.dir}/img/slide2.png" alt="">
          </li>
          <li class="splide__slide">
            <img src="${settings.dir}/img/slide3.png" alt="">
          </li>
          <li class="splide__slide">
            <img src="${settings.dir}/img/slide4.png" alt="">
          </li>
          <li class="splide__slide">
            <img src="${settings.dir}/img/slide5.png" alt="">
          </li>
          <li class="splide__slide">
            <img src="${settings.dir}/img/slide6.png" alt="">
          </li>
          <li class="splide__slide">
            <img src="${settings.dir}/img/slide7.png" alt="">
          </li>
          <li class="splide__slide lav-open-modal" data-target='1'>
            <img src="${settings.dir}/img/slide8.png" alt="">
          </li>
          <li class="splide__slide lav-open-modal" data-target='2'>
            <img src="${settings.dir}/img/slide9.png" alt="">
          </li>
        </ul>
      </div>
    </div>
  `;

  document.querySelector('.hand-banner').insertAdjacentHTML('beforebegin', el);
}

function initSlider() {
  const slider = new Splide('.lav-gallery', {
    rewind: true,
    pagination: true,
    arrows: false,
    autoplay: true,
    interval: 5000,
    gap: 15,
  });

  slider.on('ready', function () {
    console.log('ready');
    document.querySelector('.lav-gallery').classList.add('ready');
    // This will be executed.
  });

  slider.on('autoplay:playing', function (rate) {
    if (rate === 1) {
      const num = parseInt(
        document.querySelector('.splide__slide.is-next')?.ariaLabel || 1
      );
      if (isElementInViewport(document.querySelector('.lav-gallery'))) {
        gaEvent('Click on element', `Auto swipe image. ${num}`);
      }
    }
  });

  slider.on('dragged', function () {
    setTimeout(() => {
      const num = parseInt(
        document.querySelector('.splide__slide.is-active')?.ariaLabel || 1
      );

      gaEvent('Click on element', `Manual swipe image. ${num}`);
    }, 500);
  });

  slider.on('pagination:mounted', function (data) {
    data.items[3].li.classList.add('lav-pag-next');

    let num = 1;
    for (let item of data.items) {
      let i = num;
      item.li.addEventListener('click', function () {
        gaEvent(
          `Click on element', 'Click pagination. ${parseInt(
            document.querySelector('.splide__slide.is-active').ariaLabel
          )} - ${i}`
        );
      });
      num++;
    }
  });

  slider.on('move', function (newIndex, prevIndex, destIndex) {
    if (document.querySelector('.lav-pag-prev')) {
      document.querySelector('.lav-pag-prev').classList.remove('lav-pag-prev');
    }

    if (document.querySelector('.lav-pag-prev-l')) {
      document
        .querySelector('.lav-pag-prev-l')
        .classList.remove('lav-pag-prev-l');
    }

    if (newIndex > 2) {
      document
        .querySelector(
          '.splide__pagination li:nth-child(' + (newIndex - 2) + ')'
        )
        .classList.add('lav-pag-prev');
    }
    if (newIndex > 3) {
      document
        .querySelector('.splide__pagination')
        .classList.add('splide__pagination-prev');

      document
        .querySelector(
          '.splide__pagination li:nth-child(' + (newIndex - 3) + ')'
        )
        .classList.add('lav-pag-prev-l');
    } else {
      document
        .querySelector('.splide__pagination')
        .classList.remove('splide__pagination-prev');
    }

    if (newIndex > 1) {
      if (document.querySelector('.lav-pag-next')) {
        document
          .querySelector('.lav-pag-next')
          .classList.remove('lav-pag-next');
      }
      if (
        document.querySelector(
          '.splide__pagination li:nth-child(' + (newIndex + 2) + ')'
        )
      ) {
        document
          .querySelector(
            '.splide__pagination li:nth-child(' + (newIndex + 2) + ')'
          )
          .classList.add('lav-pag-next');
      }
    } else if (prevIndex === 8 && newIndex >= 0 && newIndex <= 3) {
      document
        .querySelector('.splide__pagination li:nth-child(4)')
        .classList.add('lav-pag-next');
    }
  });

  slider.mount();
}

function connectSplide() {
  const sliderStyles = document.createElement('link');
  sliderStyles.rel = 'stylesheet';
  sliderStyles.href =
    'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.1/dist/css/splide-core.min.css';
  document.head.appendChild(sliderStyles);

  let sliderScript = document.createElement('script');
  sliderScript.src =
    'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.1/dist/js/splide.min.js';
  document.head.appendChild(sliderScript);
}

function observerView() {
  const observerOptions = {
    root: null,
    threshold: 0,
    rootMargin: '-20%',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log('intersaction', entry.target);
        if (entry.target.classList.contains('trust-rating')) {
          gaEvent('Element visibility', 'Trusted score');
          observer.unobserve(entry.target);
        }
        if (entry.target.classList.contains('lav-video') && !isTrustedScroll) {
          gaEvent('Element visibility', 'Video');
          observer.unobserve(entry.target);
        }
      }
    });
  }, observerOptions);

  for (let el of Array.from(document.querySelectorAll('.lav-watch'))) {
    console.log('observe', el);
    observer.observe(el);
  }
}

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;

  if (
    rect.top + rect.height * 0.3 < windowHeight &&
    rect.bottom > rect.height * 0.3
  ) {
    return true;
  }

  return false;
}

//Clarity
if (settings.clarity) {
  const clarityInterval = setInterval(function () {
    if (typeof clarity == 'function') {
      clearInterval(clarityInterval);
      clarity(
        'set',
        'Exp; Adding more product photos on the page',
        'variant_1'
      );
    }
  }, 1000);
}
