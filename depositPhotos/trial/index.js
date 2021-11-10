(function () {
  console.log('Optimize activated!');
  // Vars
  const REPO_DIR = 'https://flopsi69.github.io/crs/depositPhotos/trial';

  /***  HotJar ***/

  /***  END_HotJar ***/

  /***  GaEvents ***/
  function gaEvent(action, label, value) {
    if (!action) {
      action = '';
    }
    if (!label) {
      labael = '';
    }
    if (!value) {
      value = '';
    }
    window.dataLayer = window.dataLayer || [];
    try {
      let eventObj = {
        event: 'event-to-ga',
        eventCategory: 'Experiment - Recently Viewed Block',
        eventAction: action,
        eventLabel: label,
        eventValue: value,
      };
      dataLayer.push(eventObj);
      // console.log('FireEvent', eventObj);
    } catch (e) {
      // console.log(e);
    }
  }
  /***  END_GaEvents ***/

  /***  Translates ***/

  // let recentlyText = 'Recently viewed';
  // let lang = document.querySelector('html').lang;

  // if (lang == 'ru') {
  //   recentlyText = 'Недавно просмотренные';
  // } else if (lang == 'es-es') {
  //   recentlyText = 'Visto recientemente';
  // } else if (lang == 'pt-br') {
  //   recentlyText = 'Visualizado recentemente';
  // } else if (lang == 'it') {
  //   recentlyText = 'Visualizzato recentemente';
  // } else if (lang == 'pl') {
  //   recentlyText = 'Ostatnio oglądane';
  // } else if (lang == 'nl') {
  //   recentlyText = 'Recent bekeken';
  // } else if (lang == 'de') {
  //   recentlyText = 'Zuletzt angesehen';
  // } else if (lang == 'fr') {
  //   recentlyText = 'Vu récemment';
  // } else if (lang == 'tr') {
  //   recentlyText = 'Son Görüntülenen';
  // }

  /***  END_Translates ***/

  /***  InitStyles ***/
  let stylesList = `
  .billing-trial__cell_benefits {
    display: none;
  }
  .lav-head {
    margin-bottom: 40px;
  }
  .lav-head__title {
    font-weight: bold;
    font-size: 32px;
    line-height: 37px;
    color: #3C3C3C;
  }
  .lav-timeline {
    display: flex;
  }
  .lav-timeline__title {
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    margin-bottom: 3px;
  }
  .lav-timeline__title_blue {
    color: #4792DE;
  }
  .lav-timeline__title_green {
    color: #21C35D;
  }
  .lav-timeline__date {
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    color: #696969;
  }
  .lav-timeline__image {
    margin: 24px 0 35px;
  }
  `;

  let stylesEl = document.createElement('style');
  stylesEl.id = 'lav-styles-trial';
  stylesEl.innerHTML = stylesList;
  document.body.appendChild(stylesEl);
  /***  END_InitStyles ***/

  /***  Observer ***/
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
  /***  END_Observer ***/

  // Start Script
  initExp();
  function initExp() {
    console.log('initExp');
    buildInfoBlock();
  }

  function buildInfoBlock() {
    var infoBlock = `
    <div class="lav-info">
  <div class="lav-head">
    <div class="lav-head__title">Let’s Start your 7 Days Trial!</div>
  </div>

  <div class="lav-timeline">
    <!-- Left col -->
    <div class="lav-timeline__block">
      <div class="lav-timeline__title">Start Free trial</div>
      <div class="lav-timeline__date">04.05.2021</div>
      <div class="lav-timeline__image"></div>
      <div class="lav-timeline__subtitle">What will you get now:</div>
      <ul class="lav-timeline__list">
        <div class="lav-timeline__item">Search and save images you like</div>
        <div class="lav-timeline__item">Download any 10 images or vectors for free</div>
        <div class="lav-timeline__item">No billing today</div>
        <div class="lav-timeline__item">Free to cancel any time before trial ends</div>
      </ul>
    </div>
    <!-- Right col -->
    <div class="lav-timeline__block">
      <div class="lav-timeline__title"></div>
      <div class="lav-timeline__date"></div>
      <div class="lav-timeline__image"></div>
      <div class="lav-timeline__subtitle">And much more after paid subscription</div>
      <ul class="lav-timeline__list">
        <div class="lav-timeline__item">Flexible Plan activation for $99 per year</div>
        <div class="lav-timeline__item">Download any images or vectors according to your plan
          (10 images or vectors each month) </div>
        <div class="lav-timeline__item">Unused download transfer to the next month</div>
        <div class="lav-timeline__item">Additional images are $1 each</div>
      </ul>
    </div>

  </div>

  <div class="lav-footer">
    <div class="lav-footer__caption">Amount due today</div>

    <div class="lav-footer__info">
      <div class="lav-footer__price">$0.00</div>
      <a href="#" class="lav-footer__cancel">How do I cancel?</a>
    </div>
  </div>
</div>
    `;

    document
      .querySelector('.billing-trial__wrap')
      .insertAdjacentHTML('afterbegin', infoBlock);
  }
})();
