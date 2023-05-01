console.log('initExp');

/********* Settings **********/
const settings = {
  dir: 'https://flopsi69.github.io/crs/sleepypatch/gallery',
  clarity: false,
  observe: false,
};

//Clarity
if (settings.clarity) {
  const clarityInterval = setInterval(function () {
    if (typeof clarity == 'function') {
      clearInterval(clarityInterval);
      clarity('set', '', 'variant_1');
    }
  }, 1000);
}

// Alalytic 3
function gaEvent(action, label) {
  if (!label) {
    label = '';
  }
  try {
    var objData = {
      event: 'gaEv',
      eventCategory: 'Experiment — also like',
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

// Alalytic 4
function gaEvent(name = '', desc = '', type = '', loc = '') {
  try {
    var objData = {
      event: 'event-to-ga4',
      event_name: name,
      event_desc: desc,
      event_type: type,
      event_loc: loc,
    };
    console.dir('eventFire', objData.eventAction);
    dataLayer.push(objData);
  } catch (e) {
    console.log('Event Error:', e);
  }
}

// Observe
if (settings.observe) {
  let observer = new MutationObserver((mutations) => {
    for (let mutation of mutations) {
      for (let node of mutation.addedNodes) {
        if (!(node instanceof HTMLElement)) continue;

        // Code Here
      }
    }
  });

  let demoElem = document.body;

  observer.observe(demoElem, { childList: true, subtree: true });
}

// Styles
const styles = `
  .hand-banner img {
    display: none;
  }
  .rev.trust-rating {
    padding: 0;
    background: none;
    border: 0;
    color: #fff;
  }

  .lav-gallery img {
    max-width: 100%;
  }
  .lav-gallery__thumbs {
    display: flex;
    margin-top: 12px;
  }
  .lav-gallery__thumb {
    position: relative;
    overflow: hidden;
    border-radius: 4px;
    line-height: 0;
    cursor: pointer;
  }
`;

const stylesEl = document.createElement('style');
stylesEl.innerHTML = styles;
document.body.appendChild(stylesEl);
/*** STYLES / end ***/

/********* Custom Code **********/
init();
function init() {
  console.log('init');
  document
    .querySelector('.navbar')
    .insertAdjacentElement(
      'afterend',
      document.querySelector('.shipping-noti.js-mobile')
    );

  document.querySelector('.rev.trust-rating').innerHTML =
    document.querySelector('.rev.trust-rating .stars').innerHTML;

  connectSplide();

  addGallery();
  let initSplideInterval = setInterval(() => {
    if (typeof Splide == 'function') {
      clearInterval(initSplideInterval);
      initSlider();
    }
  }, 200);
}

function addGallery() {
  // <img src="${settings.dir}/img/slide7.jpeg" alt="">

  let el = `
    <div class='lav-gallery'>
      <div class="splide lav-gallery__slider">
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
          </ul>
        </div>
      </div>
    
      <div class="lav-gallery__thumbs">
        <div class="lav-gallery__thumb">
          <img src="${settings.dir}/img/slide1.png" alt="">
        </div>
        <div class="lav-gallery__thumb">
          <img src="${settings.dir}/img/slide2.png" alt="">
        </div>
        <div class="lav-gallery__thumb">
          <img src="${settings.dir}/img/slide3.png" alt="">
        </div>
        <div class="lav-gallery__thumb">
          <img src="${settings.dir}/img/slide4.png" alt="">
        </div>
        <div class="lav-gallery__thumb">
          <img src="${settings.dir}/img/slide5.png" alt="">
        </div>
        <div class="lav-gallery__thumb">
          <img src="${settings.dir}/img/slide6.png" alt="">
        </div>
      </div>
    </div>
  `;

  document.querySelector('.hand-banner').insertAdjacentHTML('beforebegin', el);
}

function initSlider() {
  let gallery = new Splide('.lav-gallery__slider', {
    pagination: false,
    arrows: false,
  });

  var thumbnails = document.querySelectorAll('.lav-gallery__thumb');
  var current;

  for (var i = 0; i < thumbnails.length; i++) {
    initThumbnail(thumbnails[i], i);
  }

  function initThumbnail(thumbnail, index) {
    thumbnail.addEventListener('click', function () {
      gallery.go(index);
    });
  }

  gallery.on('mounted move', function () {
    var thumbnail = thumbnails[gallery.index];

    if (thumbnail) {
      if (current) {
        current.classList.remove('is-active');
      }

      thumbnail.classList.add('is-active');
      current = thumbnail;
    }
  });

  gallery.mount();
}

function connectSplide() {
  const sliderStyles = document.createElement('link');
  sliderStyles.rel = 'stylesheet';
  sliderStyles.href =
    'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.1/dist/css/splide-core.min.css';
  document.body.appendChild(sliderStyles);

  let sliderScript = document.createElement('script');
  sliderScript.src =
    'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.1/dist/js/splide.min.js';
  document.body.append(sliderScript);
}
