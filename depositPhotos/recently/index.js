(function () {
  function gaEvent(action, label, value) {
    if (!action) {
      action = '';
    }
    window.dataLayer = window.dataLayer || [];
    // try {
    //   let eventObj = {
    //     event: 'event-to-ga',
    //     eventCategory: 'Exp - Pricing page buy annual plan_app',
    //     eventAction: action,
    //   };
    //   dataLayer.push(eventObj);
    //   console.log('FireEvent', eventObj);
    // } catch (e) {
    //   console.log(e);
    // }
  }

  /* STYLES insert start */
  const REPO_DIR = 'https://flopsi69.github.io/crs/depositPhotos/recently';

  let stylesList = `
  .lav-slider__wrap {
    position: fixed;
    box-sizing: border-box;
    z-index: 1000;
    bottom: 70px;
    left: 240px;
    right: 0;
    margin: auto;
    max-width: 1000px;
    padding: 20px 30px;
    background: #FFFFFF;
    border-radius: 10px;
  }
  .lav-slider__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
  }
  .lav-slider__title {
    font-weight: bold;
    font-size: 16px;
    line-height: 18px;
    color: #3C3C3C;
  }
  .lav-slider {
    display: flex;
  }
  .lav-slider__slide img {
    max-height: 96px;
  }
  .lav-recently {
    position: fixed;
    box-shadow: 0 0 6px 0 rgb(0 0 0 / 30%);
    bottom: 10px;
    right: 18.7%;
    z-index: 99999;
    width: 170px;
    height: 33px;
    padding: 12px 16px;
    background: #FFFFFF;
    border-radius: 3px 3px 0 0;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    justify-content: center;
  }
  .lav-recently:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -5px;
    height: 5px;
    background-color: #fff;
  }
  .lav-recently__caption {
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: #3C3C3C;
  }
  .lav-recently__icon {
    line-height: 0;
  }
  .lav-recently img {
    margin-right: 7px;
  }
  `;

  let stylesEl = document.createElement('style');
  stylesEl.id = 'lav-styles';
  stylesEl.innerHTML = stylesList;
  document.body.appendChild(stylesEl);

  let observer = new MutationObserver((mutations) => {
    for (let mutation of mutations) {
      for (let node of mutation.addedNodes) {
        if (!(node instanceof HTMLElement)) continue;
        // console.log(node);
      }
    }
  });

  // observer.observe(document.querySelector('body'), {
  //   childList: true,
  //   subtree: true,
  // });

  initExp();
  function initExp() {
    initRecentlyTrigger();
    initRecentlySlider();
  }

  function initRecentlyTrigger() {
    let recentlyEl = `
      <div class='lav-recently'>
        <div class='lav-recently__icon'>
          <img src='${REPO_DIR}//img/eye.svg'>
        </div>
        <div class='lav-recently__caption'>Recently viewed</div>
      </div>
    `;

    document.querySelector('main').insertAdjacentHTML('afterend', recentlyEl);
  }

  function initRecentlySlider() {
    let recentlyEl = `
      <div class='lav-slider__wrap'>
        <div class='lav-slider__head'>
          <div class='lav-slider__title'>Recently viewed</div>

          <img src='${REPO_DIR}/img/close.svg'>
        </div>
        <div class='lav-slider'>
          <div class='lav-slider__slide'>
            <img src='https://st2.depositphotos.com/2313517/7759/i/600/depositphotos_77599638-stock-photo-german-shepherd-dog-sticking-head.jpg'>
          </div>

          <div class='lav-slider__slide'>
            <img src='https://st2.depositphotos.com/2313517/7759/i/600/depositphotos_77599638-stock-photo-german-shepherd-dog-sticking-head.jpg'>
          </div>

          <div class='lav-slider__slide'>
            <img src='https://st2.depositphotos.com/2313517/7759/i/600/depositphotos_77599638-stock-photo-german-shepherd-dog-sticking-head.jpg'>
          </div>
       
          <div class='lav-slider__slide'>
            <img src='https://st2.depositphotos.com/2313517/7759/i/600/depositphotos_77599638-stock-photo-german-shepherd-dog-sticking-head.jpg'>
          </div>
     
          <div class='lav-slider__slide'>
            <img src='https://st2.depositphotos.com/2313517/7759/i/600/depositphotos_77599638-stock-photo-german-shepherd-dog-sticking-head.jpg'>
          </div>
    
          <div class='lav-slider__slide'>
            <img src='https://st2.depositphotos.com/2313517/7759/i/600/depositphotos_77599638-stock-photo-german-shepherd-dog-sticking-head.jpg'>
          </div>
        </div>
      </div>
    `;

    document.querySelector('main').insertAdjacentHTML('afterend', recentlyEl);
  }

  let recentlyStorage;
  function initSessionStorage() {
    if (sessionStorage.getItem('recently')) {
      recentlyStorage = JSON.parse(sessionStorage.getItem('recently'));
    } else {
      recentlyStorage = [];
    }
  }

  function setSessionItem(data) {
    recentlyStorage.push(data);
    sessionStorage.setItem('recently', JSON.stringify(recentlyStorage));
  }
})();
