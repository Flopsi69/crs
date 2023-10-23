console.debug('*** Experiment started ***');
await waitFor(() => document.head && document.body, false, { ms: 50 });

// Config for Experiment
const config = {
  dir: 'https://flopsi69.github.io/crs/zenithprepacademy/landing',
  clarity: ['set', '', 'variant_1'],
  debug: true,
};

// Styles for Experiment
const styles = `
  .btn-cta {
    border-radius: 2px;
    background: linear-gradient(135deg, #FFDA81 24.24%, #FFB574 73.2%);
    padding: 24px 60px;
    color: #21223F;
    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    line-height: 1;
    letter-spacing: 2px;
    text-transform: uppercase;
    transition: 0.3s;
    border: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    max-width: 400px;
    width: 100%;
    height: 72px;
  }

  .btn-cta img {
    margin-left: 16px;
  }

  .jumb {
    background: #0A132A url('${config.dir}/img/jumb-bg.jpeg') top center / cover no-repeat;
    color: #fff;
    text-align: center;
    padding: 80px 0 100px;
  }
  .lav-container {
    max-width: 1312px;
    padding: 0 16px;
    margin: auto;
  }
  .jumb__logo {
    line-height: 0;
  }
  .jumb__title {
    max-width: 1010px;
    margin: 60px auto 0;
    font-family: Kaisei Tokumin;
    font-size: 56px;
    line-height: 64px;
  }
  .jumb__caption {
    margin-top: 32px;
    color: #F9FAFB;
    font-family: Inter;
    font-size: 20px;
    line-height: 1.5;
  }
  .jumb__btn {
    margin-top: 32px;
  }
  .jumb__arrow {
    line-height: 0;
    margin: 30px 0;
  }
  .jumb__watched {
    color: #F9FAFB;
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  .jumb__watched span {
    font-size: 18px;
    font-weight: 600;
  }
  .jumb-about {
    display: inline-flex;
    align-items: center;
    margin-top: 40px;
    border: 1px dashed #FFD88A;
    background: linear-gradient(140deg, rgba(3, 22, 64, 0.20) 16.4%, rgba(18, 22, 47, 0.20) 38.68%, rgba(23, 25, 53, 0.20) 61.31%, rgba(2, 11, 34, 0.20) 85.38%);
    padding: 16px 44px 16px 16px;
  }
  .jumb-about__preview {
    line-height: 0;
    margin-right: 36px;
    flex-shrink: 0;
  }
  .jumb-about__preview img {
    width: 280px;
  }
  .jumb-about__info {
    text-align: left;
  }
  .jumb-about__caption {
    color: #FFF;
    font-family: Inter;
    font-size: 18px;
    line-height: 26px; 
  }
  .jumb-about__title {
    margin-top: 16px;
    font-family: Kaisei Tokumin;
    border-bottom: 1px solid #FFD88A;
    font-size: 32px;
    line-height: 40px;
    text-decoration-line: underline;
    background: linear-gradient(114deg, #FFD88A 26.97%, #FFBA7E 74.53%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .jumb-featured {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 80px;
  }
  .jumb-featured__title {
    font-family: Inter;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-right: 80px;
  }
  .jumb-featured__logos {
    display: flex;
    align-items: center;
    gap: 72px;
    opacity: 0.7;
  }
  .jumb-owner {
    margin: 60px auto 0;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1024px;
    width: 100%;
  }
  .jumb-owner__image {
    line-height: 0;
    margin-right: 64px;
    flex-shrink: 0;
  }
  .jumb-owner__image img {
    width: 400px;
  }
  .jumb-owner__info {
    text-align: left;
  }
  .jumb-owner__title {
    font-family: Kaisei Tokumin;
    font-size: 48px;
    line-height: 56px; 
  }
  .jumb-owner__caption {
    margin-top: 8px;
    color: #F9FAFB;
    font-family: Inter;
    font-size: 16px;
    font-style: italic;
    line-height: 1.5;
  }
  .jumb-owner__description {
    position: relative;
    margin-top: 32px;
    padding-left: 32px;
    color: #FFF;
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: -0.32px;
  }
  .jumb-owner__description p {
    margin: 0;
  }
  .jumb-owner__description p + p {
    margin-top: 20px;
  }
  .jumb-owner__description::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 1px;
    height: 100%;
    background: linear-gradient(134deg, #87F5FC 20.05%, #35C6BB 82.92%, #72F7FF 106.27%);
  }
  .jumb-owner__description span {
    font-weight: 600;
  }
  .jumb-owner {}
  .jumb-owner {}
  .jumb {}
  .jumb {}
  .jumb {}
  .jumb {}
  .jumb {}
  .jumb {}
  .jumb {}
`;

const stylesEl = document.createElement('style');
stylesEl.classList.add('exp-styles');
stylesEl.innerHTML = styles;
document.head.appendChild(stylesEl);

// *** Logic *** //
initExp();

function initExp() {
  console.debug('** InitExp **');
  addLayout();
}

function addLayout() {
  const html = `
    <div class='jumb'>
      <div class='lav-container'>
        <div class='jumb__logo'>
          <img src='${config.dir}/img/logo.svg' />
        </div>

        <div class='jumb__title'>
          Discover the 3 factors <br/>
          that prevent 6ᵗʰ - 12ᵗʰ graders from getting into the colleges they deserve
        </div>

        <div class='jumb__caption'>
          And tips on how you can help your 12-18 year old <br/>
          get accepted into a top university.
        </div>

        <button class='jumb__btn btn-cta'>
          watch FREE video
          <img src='${config.dir}/img/arrow-right-solid.svg' />
        </button>
        
        <div class='jumb__arrow'>
          <img src='${config.dir}/img/arrow-dashed.svg' />
        </div>

        <div class='jumb__watched'>Over <span>100,000+</span> parents just like you have watched this webinar</div>

        <div class='jumb-about'>
          <div class='jumb-about__preview'>
            <img src='${config.dir}/img/jumb-preview.png' />
          </div>
          <div class='jumb-about__info'>
            <div class='jumb-about__caption'>Hear What They Think</div>
            <div class='jumb-about__title'>About Zenith Prep Academy</div>
          </div>
        </div>

        <div class='jumb-featured'>
          <div class='jumb-featured__title'>Featured on:</div>
          <div class='jumb-featured__logos'>
            <img src='${config.dir}/img/featured1.svg' />
            <img src='${config.dir}/img/featured2.svg' />
            <img src='${config.dir}/img/featured3.svg' />
            <img src='${config.dir}/img/featured4.svg' />
            <img src='${config.dir}/img/featured5.svg' />
            <img src='${config.dir}/img/featured6.svg' />
          </div>
        </div>

        <div class='jumb-owner'>
          <div class='jumb-owner__image'>
            <img src='${config.dir}/img/kevin.png' />
          </div>
          <div class='jumb-owner__info'>
            <div class='jumb-owner__title'>Kevin Hong</div>
            <div class='jumb-owner__caption'>Program Director & Host</div>
            <div class='jumb-owner__description'>
              <p>
                <span>In charge of managing the College Consulting program</span> – Provided guidance & advice to 1,000s of families on how their students can gain admissions into <span>top STEM, Business, and Healthcare summer programs,</span> internships, and research opportunities
              </p>
              <p>
                Experience working with families from <span>all around the US,</span> helping them gain admission into the Ivy Leagues and other top universities
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class='learn'>
      <div class='lav-container'>
        <div class='learn__section'>
          <div class='learn__title'>
           What you will <span>learn after</span><br/> watching the video
          </div>
          <div class='learn__list'>
            <div class='learn__item'>
              <div class='learn__image'>
                <img src='${config.dir}/img/learn1.svg' />
              </div>
              <div class='learn__caption'>What universities actually want in an applicant (but never say)</div>
            </div>
            <div class='learn__item'>
              <div class='learn__image'>
                <img src='${config.dir}/img/learn2.svg' />
              </div>
              <div class='learn__caption'>At what age you should start the preparation to secure a spot in a good college</div>
            </div>
            <div class='learn__item'>
              <div class='learn__image'>
                <img src='${config.dir}/img/learn3.svg' />
              </div>
              <div class='learn__caption'>Proven methods and strategies for gaining admission to top-tier universities, even if your child does not have the best grades or SAT scores  </div>
            </div>
            <div class='learn__item'>
              <div class='learn__image'>
                <img src='${config.dir}/img/learn4.svg' />
              </div>
              <div class='learn__caption'>How you, as a parent, can assist your child in securing admission to the university they deserve</div>
            </div>
          </div>
        </div>

        <div class='learn__divider'></div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('afterbegin', html);
}

// *** Utils *** //
class Modal {
  static list = [];
  constructor(name, innerHTML) {
    if (!$('.lav-modal')) {
      this.constructor.init();
    }
    this.el = document.createElement('div');
    this.el.classList.add('lav-modal__inner', name);
    this.name = name;
    this.el.innerHTML = innerHTML;

    $('.lav-modal').insertAdjacentElement('beforeend', this.el);

    this.constructor.list.push(this);
  }

  static init() {
    document.body.insertAdjacentHTML(
      'beforeend',
      "<div class='lav-modal'></div>"
    );

    document.addEventListener('click', (e) => {
      if (
        e.target.classList.contains('lav-modal') ||
        e.target.closest('.lav-modal__close')
      )
        this.close();

      if (e.target.dataset.modal) {
        this.open(e.target.dataset.modal);
      }
    });

    this.addStyles();
  }

  static open(modalName, cb) {
    document.body.classList.add('lav-modal-open');

    if ($('.lav-modal__inner.active')) {
      $('.lav-modal__inner.active').classList.remove('active');
    }

    $(modalName).classList.add('active');

    if (typeof cb === 'function') cb();

    setTimeout(() => {
      $('.lav-modal').classList.add('active');
    }, 100);
  }

  static close(cb) {
    document.body.classList.remove('lav-modal-open');

    $('.lav-modal')?.classList.remove('active');

    if (typeof cb === 'function') cb();

    setTimeout(() => {
      $('.lav-modal__inner.active')?.classList.remove('active');
    }, 400);
  }

  static addStyles() {
    const styles = `
      .lav-modal {
        position: fixed;
        z-index: 999;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(0,0,0,.1);
        backdrop-filter: blur(3px);
        -webkit-backdrop-filter: blur(3px);
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
        background: #fff;
        max-width: 380px;
        width: 100%;
        display: none;
        margin: auto;
      }
      .lav-modal__inner.active {
        display: block;
      }
      .lav-modal__close {
        cursor: pointer;
        transition: 0.35s;
      }
      @media(hover:hover) {
        .lav-modal__close:hover {
          opacity: 0.5;
        }
      }
      .lav-modal-open {
        overflow: hidden;
      }
    `;

    const stylesEl = document.createElement('style');
    stylesEl.classList.add('exp-modal');
    stylesEl.innerHTML = styles;
    document.head.appendChild(stylesEl);
  }
}

// *** HELPERS *** //

// Waiting for loading by condition
async function waitFor(condition, cb = false, customConfig = {}) {
  const config = {
    ms: 500, // repeat each 0.5 second if condition is false
    limit: 10, // limit in second seconds

    ...customConfig,
  };

  if (typeof condition === 'function') {
    if (condition()) {
      if (typeof cb === 'function') cb();
      return;
    }

    return new Promise((resolve) => {
      let limit = config.limit * 1000;
      const interval = setInterval(function () {
        if (condition() || limit <= 0) {
          clearInterval(interval);
          if (limit > 0 && typeof cb === 'function') cb();
          resolve();
        }
        limit -= config.ms;
      }, config.ms);
    });
  }

  if (condition.startsWith('.') || condition.startsWith('#')) {
    if ($(condition)) {
      if (typeof cb === 'function') cb($(condition));
      return;
    }

    return new Promise((resolve) => {
      const observer = new MutationObserver((mutations, observer) => {
        if ($(condition)) {
          if (typeof cb === 'function') cb($(condition));
          observer.disconnect();
          resolve();
        }
      });

      observer.observe(document, { childList: true, subtree: true });
    });
  }
}

// Mutation Observer
function initMutation(observeEl = document.body, cbAdded, cbRemoved) {
  const el = typeof observeEl === 'string' ? $(observeEl) : observeEl;

  if (!el) return;

  let observer = new MutationObserver((mutations) => {
    for (let mutation of mutations) {
      if (typeof cbAdded === 'function') {
        for (let node of mutation.addedNodes) {
          if (!(node instanceof HTMLElement)) continue;
          cbAdded(node);
        }
      }

      if (typeof cbRemoved === 'function') {
        for (let node of mutation.addedNodes) {
          if (!(node instanceof HTMLElement)) continue;
          cbRemoved(node);
        }
      }
    }
  });

  observer.observe(el, { childList: true, subtree: true });

  return observer;
}

// Intersection Observer
function initIntersection(observeEl, cb, customConfig) {
  const el = typeof observeEl === 'string' ? $(observeEl) : observeEl;

  if (!el || typeof cb !== 'function') return;

  const config = {
    root: null,
    threshold: 0.3, // 0 - 1
    ...customConfig,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      cb(entry);
    });
  }, config);

  observer.observe(el);

  return observer;
}

function focusTimeEvent(el, cb) {
  let entryTime = 0;
  initIntersection(
    el,
    ({ isIntersecting, time }) => {
      if (isIntersecting) {
        entryTime = time;
      } else if (entryTime) {
        cb(time - entryTime);
        entryTime = 0;
      }
    },
    { threshold: 0.1 }
  );
}

// Artificial delay
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Check if element in viewport
function isElementInViewport(selector) {
  const el = typeof selector === 'string' ? $(selector) : selector;

  if (!el) return false;

  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Shordcode for selectors
function $(selector, context = document) {
  return context.querySelector(selector);
}
function $$(selector, context = document, toSimpleArray = false) {
  const arr = context.querySelectorAll(selector);

  return toSimpleArray ? Array.from(arr) : arr;
}

// GA 4 events
function pushDataLayer(name = '', desc = '', type = '', loc = '') {
  try {
    const event = {
      event: 'event-to-ga4',
      event_name: name,
      event_desc: desc,
      event_type: type,
      event_loc: loc,
    };

    console.debug('** GA4 Event **', event);

    if (!config.debug) {
      dataLayer.push(event);
    }
  } catch (e) {
    console.log('** GA4 Error **', e);
  }
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
      clarity(...config.clarity);
    }
  );
}
