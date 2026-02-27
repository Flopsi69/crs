console.debug('*** Experiment started ***')

// Config for Experiment
const config = {
  // dir: 'http://127.0.0.1:5500/houseofworktops/reels',
  dir: 'https://flopsi69.github.io/crs/houseofworktops/reels',
  clarity: ['set', 'pdp_exp_reels', 'variant_1'],
  debug: false,
  videoLength: 7
}

// const orig = console.log
// console.log = function (...args) {
//   orig.apply(console, ['Debug:', ...args])
// }

// Styles for Experiment
const styles = /* css */ `
  .lav-reels {
    color: #212529;
    padding: 65px 0 110px;
    background: url(${config.dir}/img/reels-bg.svg) repeat rgba(219, 137, 48, 0.1);
    background-size: cover;
  }
  .lav-reels__title {
    text-align: center;
    font-size: 28px;
    line-height: 1.5;
  }
  .lav-reels__caption {
    margin-top: 10px;
    text-align: center;
    font-size: 20px;
    line-height: 1.5;
  }
  .lav-reels__slider {
    overflow: hidden;
    margin-top: 53px;
  }
  .lav-reels__slider .splide__track {
    overflow: visible;
  }
  .lav-reels__slider .splide__list {
    overflow: visible !important;
  }
  .lav-reels__slide {
    position: relative;
  }
  .lav-reels__slide-picture {
    display: block;
    cursor: pointer;
    border-radius: 4px;
    overflow: hidden;
  }
  .lav-reels__slide-picture img {
    width: 100%;
    height: auto;
    display: block;
  }
  .lav-reels__slide video {
    width: 100%;
    height: auto;
    display: none;
    border-radius: 4px;
  }
  .lav-reels__slide video::-webkit-media-controls-overflow-button {
    display: none;
  }
  .lav-reels__slide video::-webkit-media-controls-panel {
    overflow: hidden;
  }
  .lav-reels__slide.is-playing .lav-reels__slide-picture,
  .lav-reels__slide.is-playing .lav-reels__play {
    display: none;
  }
  .lav-reels__slide.is-playing video {
    display: block;
    // height: 100%;
  }
  .lav-reels__play {
    border-radius: 1111px;
    background: #FFF;
    backdrop-filter: blur(2px);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 0.3s ease;
    padding-left: 3px;
    cursor: pointer;
  }
  .lav-reels__author {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    margin-top: 12px;
    color: #212529;
    text-align: center;
    font-size: 16px;
    line-height: 1.5;
  }
  .lav-reels__from {
    letter-spacing: 0.8px;
  }
  .lav-reels__author span {
    font-style: italic;
  }
  @media(hover:hover) {
    .lav-reels__slide:hover .lav-reels__play {
      opacity: 0.8;
      transform: translate(-50%, -50%) scale(1.1);
    }
  }
  .lav-reels__slide:not(.is-playing) .lav-reels__fullscreen {
    opacity: 0;
    pointer-events: none;
  }
  .lav-reels__fullscreen {
    position: absolute;
    padding: 3px;
    top: 8px;
    right: 8px;
    width: 32px;
    height: 32px;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.3s ease;
    z-index: 2;
  }
  @media(hover:hover) {
    .lav-reels__fullscreen:hover {
      background: rgba(255, 255, 255, 1);
    }
  }
  
  /* Custom Pagination Container */
  .lav-reels__nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-top: 93px;
  }
  .lav-reels__nav-arrow {
    width: 12px;
    height: 12px;
    background: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
    transition: opacity 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .lav-reels__nav-arrow svg {
    fill: #000;
  }
  @media(hover:hover) {
    .lav-reels__nav-arrow:hover:not(:disabled) {
      opacity: 0.7;
    }
  }
  .lav-reels__nav-arrow:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
  .lav-reels__dots {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .lav-reels__dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: transparent;
    border: 1px solid #000;
    cursor: pointer;
    transition: all 0.3s ease;
    padding: 0;
  }
  .lav-reels__dot.is-active {
    background: #000;
    border-color: #000;
  }
  @media(hover:hover) {
    .lav-reels__dot:hover:not(.is-active) {
      opacity: 0.7;
    }
  }

  @media(max-width: 767px) {
    .lav-reels__author {
      color: #FFF;
      font-size: 13px;
      font-weight: 300;
      line-height: 20px;
      margin-top: 8px;
    }
    .lav-reels__from {
      letter-spacing: 0.65px;
    }
    .lav-reels {
      padding: 32px 0;
      background: url(${config.dir}/img/reels-bg-mob.svg) repeat #093B32;
      background-size: cover;
      color: #fff;
      margin: 0 -15px 48px;
    }
    .lav-reels__title {
      color: #ECBB8A;
      font-size: 20px;
    }
    .lav-reels__caption {
      font-size: 14px;
      line-height: 24px;
      margin-top: 12px;
    }
    .lav-reels__slider {
      margin: 24px -15px 0;
    }
    .lav-reels__nav {
      margin-top: 72px;
      gap: 10px;
    }
    .lav-reels__nav-arrow {
      width: 10px;
      height: 10px;
    }
    .lav-reels__nav-arrow svg path {
      fill: #fff; 
    }
    .lav-reels__dots {
      gap: 10px;
    }
    .lav-reels__dot {
      width: 10px;
      height: 10px;
      border-color: #fff;
    }
    .lav-reels__dot.is-active {
      background: #fff;
      border-color: #fff;
    }
  }
`

const stylesEl = document.createElement('style')
stylesEl.classList.add('exp-styles')
stylesEl.innerHTML = styles

// *** Logic *** //
initExp()

async function initExp() {
  await waitFor(() => document.head && document.body, false, { ms: 20 })

  document.head.appendChild(stylesEl)

  console.debug('** InitExp **')

  createModalVideo();
  connectSplide();
  addReelsSection();
}

function createModalVideo() {
  initModal()

  const markup = /* html */ `
    <div class="lavm-reels__btn lavm-reels__btn-prev">
      ${getSvg('modal-prev')}
    </div>
    <div class="lavm-reels__video">
      <div class="lavm-reels__preloader">
        <div class="lavm-reels__spinner"></div>
      </div>
      <video autoplay controls preload="metadata" controlsList="nodownload noremoteplayback noplaybackrate nofullscreen" disablePictureInPicture disableFullscreen>
        <source src="" type="video/mp4">
      </video>
    </div>
    <div class="lavm-reels__btn lavm-reels__btn-next">
      ${getSvg('modal-next')}
    </div>
  `

  new Modal('lavm-reels', markup)

  _$('.lavm-reels').addEventListener('click', function(e) {
    if (e.target === this) Modal.close()
  })

  const video = _$('.lavm-reels__video video')
  const preloader = _$('.lavm-reels__preloader')

  // Show preloader when video starts loading
  video.addEventListener('loadstart', () => {
    preloader.classList.add('active')
  })

  video.addEventListener('waiting', () => {
    preloader.classList.add('active')
  })

  // Hide preloader when video is ready to play
  video.addEventListener('canplay', () => {
    preloader.classList.remove('active')
  })

  video.addEventListener('loadeddata', () => {
    preloader.classList.remove('active')
  })

  _$('.lavm-reels__btn-prev').addEventListener('click', () => {
    const prevIndex = parseInt(_$('.lavm-reels__video video').dataset.index) - 1
    pushDataLayer('exp_pdp_reels_overlay', 'Overlay close', 'click', 'reels modal');
    if (prevIndex < 1) {
      openVideoModal(config.videoLength)
      return
    }

    openVideoModal(prevIndex)
  })

  _$('.lavm-reels__btn-next').addEventListener('click', () => {
    const nextIndex = parseInt(_$('.lavm-reels__video video').dataset.index) + 1
    pushDataLayer('exp_pdp_reels_arrow', 'Arrow Right', 'click', 'reels modal');
    if (nextIndex > config.videoLength) {
      openVideoModal(1)
      return
    }

    openVideoModal(nextIndex)
  })
}

function openVideoModal(index, currentTime = 0){
  console.log('openIndex', index)
  _$$('.lav-reels__slide.is-playing').forEach(slide => {
    const video = _$('video', slide);
    if (video && !video.paused) {
      video.pause();
    }
  })
  const video = _$('.lavm-reels__video video')
  const preloader = _$('.lavm-reels__preloader')
  
  if (video && video.dataset.index !== index) {
    preloader.classList.add('active')
    video.src = `${config.dir}/media/media${index}-video.mp4`
  }
  
  video.dataset.index = index
  video.currentTime = currentTime
  
  if (!_$('.lav-modal').classList.contains('active')) {
    Modal.open('.lavm-reels')
  }

  video?.play()
}

async function addReelsSection() {
  const markup = /* html */ `
    <div class="lav-reels">
      <div class="lav-reels__container container">
        <div class="lav-reels__title">Trusted by 10,000+ Homeowners, Joiners  & Furniture Makers</div>
        <div class="lav-reels__caption">Discover why the UK’s finest craftsmen and families choose House of Worktops</div>

        <div class="splide lav-reels__slider" role="group" aria-label="Splide Basic HTML Example">
          <div class="splide__track">
            <ul class="splide__list lav-reels__list"></ul>
          </div>
          
          <div class="lav-reels__nav">
            <button class="lav-reels__nav-arrow lav-reels__nav-prev" aria-label="Previous slide">
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
                <path d="M8.91602 2.08837C9.13802 1.8576 9.24902 1.57875 9.24902 1.25183C9.24902 0.924906 9.13802 0.64606 8.91602 0.415291C8.70117 0.184522 8.43799 0.0691366 8.12646 0.0691366C7.81494 0.0691366 7.54818 0.184522 7.32617 0.415291L2.04102 5.97683L7.32617 11.5384C7.54818 11.7691 7.81494 11.8845 8.12646 11.8845C8.43799 11.8845 8.70117 11.7691 8.91602 11.5384C9.13802 11.3076 9.24902 11.0288 9.24902 10.7018C9.24902 10.3749 9.13802 10.0961 8.91602 9.86529L5.2207 5.97683L8.91602 2.08837Z" fill="black"/>
              </svg>
            </button>
            <div class="lav-reels__dots"></div>
            <button class="lav-reels__nav-arrow lav-reels__nav-next" aria-label="Next slide">
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
                <path d="M2.08398 2.08837C1.86198 1.8576 1.75098 1.57875 1.75098 1.25183C1.75098 0.924906 1.86198 0.64606 2.08398 0.415291C2.29883 0.184522 2.56201 0.0691366 2.87354 0.0691366C3.18506 0.0691366 3.45182 0.184522 3.67383 0.415291L8.95898 5.97683L3.67383 11.5384C3.45182 11.7691 3.18506 11.8845 2.87354 11.8845C2.56201 11.8845 2.29883 11.7691 2.08398 11.5384C1.86198 11.3076 1.75098 11.0288 1.75098 10.7018C1.75098 10.3749 1.86198 10.0961 2.08398 9.86529L5.7793 5.97683L2.08398 2.08837Z" fill="black"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  `

  if (window.innerWidth < 768) {
    _$('.d-md-none #delivery-info-line').insertAdjacentHTML('beforebegin', markup)
  } else {
    _$('.content-section.bg-pattern-dark').insertAdjacentHTML('beforebegin', markup)
  }

  window.addEventListener('resize', () => {
    const existedReelsEl = _$('.lav-reels')

    if (window.innerWidth < 768) {
      if (existedReelsEl && !_$('[itemscope] .lav-reels')) {
        _$('.d-md-none #delivery-info-line').insertAdjacentElement('beforebegin', existedReelsEl)
      } 


      if (!existedReelsEl && _$('.d-md-none #delivery-info-line')) {
        _$('.d-md-none #delivery-info-line').insertAdjacentHTML('beforebegin', markup)
      }
    } else {
      if (existedReelsEl && _$('[itemscope] .lav-reels')) {
        _$('.content-section.bg-pattern-dark').insertAdjacentElement('beforebegin', existedReelsEl)
      }

      if (!existedReelsEl && _$('.content-section.bg-pattern-dark')) {
        _$('.content-section.bg-pattern-dark').insertAdjacentHTML('beforebegin', markup)
      }
    }
  })

  visibilityEvent(_$('.lav-reels'), () => {
    pushDataLayer('exp_pdp_reels_visibility', 'Reels', 'view', 'reels section');
  })

  const authorNames = [
    {
      name: 'Lewis B.',
      city: 'London'
    },
    {
      name: 'Charlotte C.',
      city: 'Cheltenham'
    },
    {
      name: 'Nick B.',
      city: 'Telford'
    },
    {
      name: 'Figen U.',
      city: 'London'
    },
    {
      name: 'Andrew K.',
      city: 'London'
    },
     {
      name: 'Tristram A.',
      city: 'Norwich'
    },
    {
      name: 'Michael B.',
      city: 'Glasgow'
    }
  ]

  for (let i = 0; i < config.videoLength; i++) {
    const slideEl = getSlideEl(i + 1)
    _$('.lav-reels__list').appendChild(slideEl)
  }
  
  initSplide()

  function getSlideEl(index) {
    const slideEl = document.createElement('li')
    slideEl.classList.add('splide__slide', 'lav-reels__slide')
    slideEl.dataset.index = index
    const author = authorNames[index - 1]
    slideEl.innerHTML = /* html */ `
      <picture class="lav-reels__slide-picture">
        <source srcset="${config.dir}/media/media${index}-avif.avif" type="image/avif">
        <img src="${config.dir}/media/media${index}-avif.gif">
      </picture>

      <video preload="metadata" controlsList="nodownload noremoteplayback noplaybackrate nofullscreen" disablePictureInPicture>
        <source src="${config.dir}/media/media${index}-video.mp4" type="video/mp4">
      </video>

      <div class="lav-reels__fullscreen">
        ${getSvg('fullscreen')}
      </div>

      <div class="lav-reels__play">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
          <path d="M12.6682 9.44303L3.00976 15.0922C1.67645 15.872 0 14.9104 0 13.3658V2.003C0 0.453956 1.68509 -0.507054 3.01831 0.281644L12.6767 5.9953C13.9894 6.77185 13.9847 8.67299 12.6682 9.44303Z" fill="black"/>
        </svg>
      </div>

      <div class="lav-reels__author">
        ${author.name}
        <div class="lav-reels__from">
          <span>from</span> ${author.city}
        </div>
      </div>
    `
      
    return slideEl
  }
        // <source srcset="${config.dir}/media/media${index}-avif.webp" type="image/webp">

  async function initSplide() {
    await waitFor(() => typeof Splide === 'function')

    const splide = new Splide('.splide', {
      type: 'loop',
      pagination: false,
      arrows: false,
      perPage: 4,
      perMove: 1,
      gap: '12px',
      padding: { left: '60px', right: '60px' }, // Show partial slides on sides
      focus: 0, // Focus on first visible slide (not center)
      trimSpace: false,
      autoplay: false,
      pauseOnHover: true,
      pauseOnFocus: true,
      breakpoints: {
        1024: {
          perPage: 3,
          padding: { left: '40px', right: '40px' },
        },
        768: {
          perPage: 2,
          gap: '7px',
          padding: { left: '30px', right: '30px' },
        },
        480: {
          perPage: 2,
          gap: '3px',
        }
      }
    }).mount();

    // Handle video clicks using event delegation (works for clones too)
    _$('.lav-reels__list').addEventListener('click', (e) => {
      const fullscreenBtn = e.target.closest('.lav-reels__fullscreen');
      if (fullscreenBtn) {
         pushDataLayer('exp_pdp_reels_fullscreen', 'Fullscreen', 'click', 'reels section');
        const slideElIndex = fullscreenBtn.closest('.lav-reels__slide').dataset.index
        const video = fullscreenBtn.closest('.lav-reels__slide').querySelector('video');
        const videoCurrentTime = video ? video.currentTime : 0;
        if (window.innerWidth > 767) {
          openVideoModal(slideElIndex, videoCurrentTime)
        } else {
          // On mobile, use default fullscreen mode
          if (video) {
            // Handle different fullscreen APIs for cross-browser compatibility
            if (video.requestFullscreen) {
              video.requestFullscreen();
            } else if (video.webkitEnterFullscreen) {
              // iOS Safari (iPhone/iPad)
              video.webkitEnterFullscreen();
            } else if (video.webkitRequestFullscreen) {
              // Older Safari
              video.webkitRequestFullscreen();
            } else if (video.mozRequestFullScreen) {
              // Firefox
              video.mozRequestFullScreen();
            } else if (video.msRequestFullscreen) {
              // IE11
              video.msRequestFullscreen();
            }
          }
        }
        return;
      }

      const videoEl = e.target.closest('video')
      if (videoEl) {
        if (videoEl.paused) {
          videoEl.play();
          pushDataLayer('exp_pdp_reels_play', `Play Video - ${e.target.closest('.lav-reels__slide').dataset.index}`, 'click', 'reels section');
        } else {
          videoEl.pause();
          pushDataLayer('exp_pdp_reels_pause', `Pause Video - ${e.target.closest('.lav-reels__slide').dataset.index}`, 'click', 'reels section');
        }
        return;
      }

      
      const picture = e.target.closest('.lav-reels__slide-picture');
      const playBtn = e.target.closest('.lav-reels__play');
      if (picture || playBtn) {
        const slideEl = e.target.closest('.lav-reels__slide');
        const video = _$('video', slideEl);

        pushDataLayer('exp_pdp_reels_play', `Play Video - ${slideEl.dataset.index}`, 'click', 'reels section');
        
        if (video) {
          // Pause all other playing videos first
          _$$('.lav-reels__slide.is-playing').forEach(slide => {
            if (slide !== slideEl) {
              const otherVideo = _$('video', slide);
              if (otherVideo && (!otherVideo.paused || otherVideo.currentTime > 0)) {
                otherVideo.pause();
                otherVideo.currentTime = 0;
                otherVideo.removeAttribute('controls');
                slide.classList.remove('is-playing');
              }
            }
          });
          
          slideEl.classList.add('is-playing');
          video.setAttribute('controls', 'controls');
          video.play();
        }
      }
    });
    
    // Handle video ended event using event delegation
    _$('.lav-reels__list').addEventListener('ended', (e) => {
      if (e.target.tagName === 'VIDEO') {
        const slideEl = e.target.closest('.lav-reels__slide');
        if (slideEl) {
          slideEl.classList.remove('is-playing');
          e.target.removeAttribute('controls');
          e.target.currentTime = 0;
        }
      }
    }, true);
    
    // Handle video pause event - return to AVIF preview
    // _$('.lav-reels__list').addEventListener('pause', (e) => {
    //   if (e.target.tagName === 'VIDEO') {
    //     const slideEl = e.target.closest('.lav-reels__slide');
    //     if (slideEl && !e.target.ended) {
    //       e.target.pause();
    //       slideEl.classList.remove('is-playing');
    //       e.target.removeAttribute('controls');
    //     }
    //   }
    // });

    // Create custom pagination dots
    const dotsContainer = _$('.lav-reels__dots');
    
    for (let i = 0; i < config.videoLength; i++) {
      const dot = document.createElement('button');
      dot.className = 'lav-reels__dot';
      dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
      if (i === 0) dot.classList.add('is-active');
      
      dot.addEventListener('click', () => {
        splide.go(i);
      });
      
      dotsContainer.appendChild(dot);
    }

    splide.on('dragging', () => {
      checkVideoInViewport()
      return;
      _$$('.lav-reels__slide.is-playing:not(.is-visible)').forEach(slide => {
        console.log('checking videos on dragging')
        const playingVideo = _$('video', slide);
        if (!playingVideo) return;

        const videoIndex = slide.dataset.index;
        const findVisibleSlide = _$$('.lav-reels__slide.is-visible', document, true).find(visibleSlide => visibleSlide.dataset.index === videoIndex);
        const currentTime = playingVideo.currentTime;

        if (!findVisibleSlide) return;
        
        findVisibleSlide.classList.add('is-playing');
        slide.classList.remove('is-playing');
        const videoInVisibleSlide = _$('video', findVisibleSlide);
        videoInVisibleSlide.setAttribute('controls', 'controls');
        videoInVisibleSlide.currentTime = currentTime;
        if (!playingVideo.paused) {
          videoInVisibleSlide.play();
          playingVideo.pause();
        }
        playingVideo.removeAttribute('controls');
        playingVideo.currentTime = 0;
      });
    });

    // Update active dot on slide change
    splide.on('move', (newIndex) => {
      console.log('move to', newIndex)
      // Get the real index (not clone index)
      const realIndex = newIndex % config.videoLength;
      _$$('.lav-reels__dot').forEach((dot, i) => {
        dot.classList.toggle('is-active', i === realIndex);
      });
    });

    splide.on('moved', (newIndex) => {
      checkVideoInViewport();
    });

    // Connect custom arrows
    _$('.lav-reels__nav-prev').addEventListener('click', () => {
      splide.go('<');
    });
    
    _$('.lav-reels__nav-next').addEventListener('click', () => {
      splide.go('>');
    });
    
    // Stop videos when slider scrolls out of viewport
    const sliderObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          // Slider is out of viewport, pause all playing videos
          _$$('.lav-reels__slide.is-playing').forEach(slide => {
            const video = _$('video', slide);
            if (video && !video.paused) {
              video.pause();
              video.currentTime = 0;
              video.removeAttribute('controls');
              slide.classList.remove('is-playing');
            }
          });
        }
      });
    }, {
      threshold: 0,
      rootMargin: '0px'
    });
    
    sliderObserver.observe(_$('.lav-reels__slider'));
  }

  function checkVideoInViewport() {
    _$$('.lav-reels__slide.is-playing:not(.is-visible)').forEach(slide => {
      const video = _$('video', slide);
      if (!video) return;
      
      const videoIndex = slide.dataset.index;
      const currentTime = video.currentTime;
      const isPaused = video.paused;
      
      // Option 1: Transfer to visible clone (recommended)
      const visibleClone = _$$(`.lav-reels__slide[data-index="${videoIndex}"].is-visible`)[0];
      
      if (visibleClone) {
        const cloneVideo = _$('video', visibleClone);
        
        // Transfer playing state to visible clone
        visibleClone.classList.add('is-playing');
        cloneVideo.setAttribute('controls', 'controls');
        cloneVideo.currentTime = currentTime;
        
        if (!isPaused) {
          cloneVideo.play();
        }
      }
      
      // Clean up hidden slide
      slide.classList.remove('is-playing');
      video.pause();
      video.removeAttribute('controls');
      video.currentTime = 0;
    });
  }
}

// *** Utils *** //
function initModal() {
  class Modal {
    static list = []
    constructor(name, html) {
      if (!_$('.lav-modal')) {
        this.constructor.init()
      }

      if (this.constructor.list.find((item) => item.name === name)) {
        console.warn('Modal with this name already exists')
        return
      }

      this.el = document.createElement('div')
      this.el.classList.add('lav-modal__inner', name)
      this.name = name
      this.el.innerHTML = html

      _$('.lav-modal').insertAdjacentElement('beforeend', this.el)

      this.constructor.list.push(this)
    }

    static init() {
      document.body.insertAdjacentHTML(
        'beforeend',
        "<div class='lav-modal'></div>"
      )

      document.addEventListener('click', (e) => {
        if (
          e.target.classList.contains('lav-modal') ||
          e.target.closest('.lav-modal__close')
        )
          this.close()

        if (e.target.dataset.modal) {
          this.open(e.target.dataset.modal)
        } else if (e.target.closest('[data-modal]')) {
          this.open(e.target.closest('[data-modal]').dataset.modal)
        }
      })

      this.addStyles()
    }

    static open(modalName, cb) {
      document.body.classList.add('lav-modal-open')

      if (_$('.lav-modal__inner.active')) {
        _$('.lav-modal__inner.active').classList.remove('active')
      }

      _$(modalName).classList.add('active')

      if (typeof cb === 'function') cb()

      setTimeout(() => {
        _$('.lav-modal').classList.add('active')
      }, 100)
    }

    static close(cb) {
      document.body.classList.remove('lav-modal-open')

      _$('.lav-modal')?.classList.remove('active')

      const video = _$('.lavm-reels__video video')
      if (video && !video.paused) {
        setTimeout(() => {
          video.pause()
          video.currentTime = 0
        }, 250);
      }

      if (typeof cb === 'function') cb()

      setTimeout(() => {
        _$('.lav-modal__inner.active')?.classList.remove('active')
      }, 400)
    }

    static addStyles() {
      const styles = /* css */ `
      .lav-modal {
        position: fixed;
        z-index: 999999999999;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%);
        backdrop-filter: blur(1px);
        -webkit-backdrop-filter: blur(1px);
        transition: 0.35s;
        opacity: 0;
        pointer-events: none;
        padding: 15px;
        overflow-y: auto;
        max-height: 100%;
        display: flex;
      }
      .lav-modal.active {
        opacity: 1;
        pointer-events: auto;
      }
      .lav-modal__inner {
        position: relative;
        max-width: 550px;
        width: 100%;
        display: none;
        margin: auto;
      }
      .lav-modal__inner.active {
        display: flex;
      }
      .lav-modal__close {
        cursor: pointer;
        transition: 0.35s;
        line-height: 0;
      }
      [data-modal] {
        cursor: pointer;
      }
      @media(hover:hover) {
        .lav-modal__close:hover {
          opacity: 0.5;
        }
      }
      .lav-modal-open {
        // overflow: hidden;
      }

      .lavm-reels {
        justify-content: space-between;
        align-items: center;
        gap: 64px;
      }
      .lavm-reels__btn {
        cursor: pointer;
        transition: 0.3s ease;
      }
      @media(hover:hover) {
        .lavm-reels__btn:hover {
          opacity: 0.7;
        }
      }
      .lavm-reels__video {
        display: flex;
        line-height: 0;
      }
      .lavm-reels__video video {
        width: 100%;
        height: auto;
        border-radius: 4px;
        max-height: 90vh;
      }
      .lavm-reels__preloader {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 10;
        display: none;
      }
      .lavm-reels__preloader.active {
        display: block;
      }
      .lavm-reels__spinner {
        width: 60px;
        height: 60px;
        border: 4px solid rgba(255, 255, 255, 0.3);
        border-top-color: #fff;
        border-radius: 50%;
        animation: lavmSpinnerRotate 0.8s linear infinite;
      }
      @keyframes lavmSpinnerRotate {
        to { transform: rotate(360deg); }
      }
    `

      const stylesEl = document.createElement('style')
      stylesEl.classList.add('exp-modal')
      stylesEl.innerHTML = styles
      document.head.appendChild(stylesEl)
    }
  }

  window.Modal = Modal
}
// *** HELPERS *** //

// Waiting for loading by condition
async function waitFor(condition, cb = false, customConfig = {}) {
  const config = {
    ms: 500, // repeat each 0.5 second if condition is false
    limit: 10, // limit in second seconds

    ...customConfig
  }

  if (typeof condition === 'function') {
    if (condition()) {
      if (typeof cb === 'function') cb()
      return
    }

    return new Promise((resolve) => {
      let limit = config.limit * 1000
      const interval = setInterval(function () {
        if (condition() || limit <= 0) {
          clearInterval(interval)
          if (limit > 0 && typeof cb === 'function') cb()
          resolve()
        }
        limit -= config.ms
      }, config.ms)
    })
  }

  if (condition.startsWith('.') || condition.startsWith('#')) {
    if (_$(condition)) {
      if (typeof cb === 'function') cb(_$(condition))
      return
    }

    return new Promise((resolve) => {
      const observer = new MutationObserver((mutations, observer) => {
        if (_$(condition)) {
          if (typeof cb === 'function') cb(_$(condition))
          observer.disconnect()
          resolve()
        }
      })

      observer.observe(document, { childList: true, subtree: true })
    })
  }
}

// Mutation Observer
function initMutation(observeEl = document.body, cbAdded, cbRemoved) {
  const el = typeof observeEl === 'string' ? _$(observeEl) : observeEl

  if (!el) return

  let observer = new MutationObserver((mutations, observer) => {
    for (let mutation of mutations) {
      if (typeof cbAdded === 'function') {
        for (let node of mutation.addedNodes) {
          if (!(node instanceof HTMLElement)) continue
          cbAdded(node, observer)
        }
      }

      if (typeof cbRemoved === 'function') {
        for (let node of mutation.removedNodes) {
          if (!(node instanceof HTMLElement)) continue
          cbRemoved(node, observer)
        }
      }
    }
  })

  observer.observe(el, { childList: true, subtree: true })

  return observer
}

// Intersection Observer
function initIntersection(observeEl, cb, customConfig) {
  const el = typeof observeEl === 'string' ? _$(observeEl) : observeEl

  if (!el || typeof cb !== 'function') return

  const config = {
    root: null,
    threshold: 0.3, // 0 - 1 | A threshold of 1.0 means that when 100% of the target is visible within the element specified by the root option, the callback is invoked.
    ...customConfig
  }

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      cb(entry, observer)
    })
  }, config)

  observer.observe(el)

  return observer
}

function focusTimeEvent(el, cb, viewElementProcent = 0.1) {
  let entryTime = 0
  initIntersection(
    el,
    ({ isIntersecting, time }) => {
      if (isIntersecting) {
        entryTime = time
      } else if (entryTime) {
        const diffTime = +((time - entryTime) / 1000).toFixed(1)
        cb(diffTime + 's')
        entryTime = 0
      }
    },
    { threshold: viewElementProcent }
  )
}

function visibilityEvent(el, cb, customConfig = {}) {
  const config = {
    threshold: 0.3,
    ...customConfig,
    timer: null
  }
  initIntersection(
    el,
    ({ isIntersecting, target }, observer) => {
      // console.log(target, isIntersecting);
      if (isIntersecting) {
        config.timer = setTimeout(() => {
          if (isElementInViewport(target)) {
            cb()
            observer.disconnect()
          }
        }, 3000)
      } else {
        clearTimeout(config.timer)
      }
    },
    config
  )
}

// Artificial delay
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

// Check if element in viewport
function isElementInViewport(selector) {
  const el = typeof selector === 'string' ? _$(selector) : selector

  if (!el) return false

  const rect = el.getBoundingClientRect()
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight

  return (
    rect.top + rect.height * 0.3 < windowHeight &&
    rect.bottom > rect.height * 0.3
  )
  // return (
  //   rect.top >= 0 &&
  //   rect.left >= 0 &&
  //   rect.bottom <=
  //     (window.innerHeight || document.documentElement.clientHeight) &&
  //   rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  // );
}

// Shordcode for selectors
function _$(selector, context = document) {
  return context.querySelector(selector)
}
function _$$(selector, context = document, toSimpleArray = false) {
  const arr = context.querySelectorAll(selector)

  return toSimpleArray ? Array.from(arr) : arr
}

// GA 4 events
function pushDataLayer(name = '', desc = '', type = '', loc = '') {
  window.dataLayer = window.dataLayer || []

  try {
    const event = {
      event: 'event-to-ga4',
      event_name: name,
      event_desc: desc,
      event_type: type,
      event_loc: loc
    }

    console.debug('** GA4 Event **', event)

    if (!config.debug) {
      dataLayer.push(event)
    }
  } catch (e) {
    console.log('** GA4 Error **', e)
  }
}

// Slider
function connectSplide() {
  const sliderStyles = document.createElement('link')
  sliderStyles.rel = 'stylesheet'
  sliderStyles.href =
    'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide-core.min.css'
  document.head.appendChild(sliderStyles)

  let sliderScript = document.createElement('script')
  sliderScript.src =
    'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js'
  document.head.appendChild(sliderScript)
}

// *** Exp BG process *** //

//Clarity
if (
  !config.debug &&
  Array.isArray(config.clarity) &&
  config.clarity.length === 3
) {
  waitFor(
    () => typeof clarity == 'function',
    () => {
      clarity(...config.clarity)
    }
  )
}

// Svg objects
function getSvg(name) {
  const svgObj = {
    'modal-prev': /* html */ `
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="49" viewBox="0 0 28 49" fill="none">
        <path d="M25.8284 1.41418L2.82837 24.4142L25.8284 47.4142" stroke="white" stroke-width="4"/>
      </svg>
    `,
    'modal-next': /* html */ `
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="49" viewBox="0 0 28 49" fill="none">
        <path d="M1.41431 1.41418L24.4143 24.4142L1.41431 47.4142" stroke="white" stroke-width="4"/>
      </svg>
    `,
    'fullscreen': /* html */ `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><script xmlns=""/>
      <path d="M9.00002 3.99997H4.00004L4 8.99999M20 8.99999V4L15 3.99997M15 20H20L20 15M4 15L4 20L9.00002 20" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `
  }

  return svgObj[name]
}
