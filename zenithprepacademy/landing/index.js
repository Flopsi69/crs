console.debug('*** Experiment started ***');
await waitFor(() => document.head && document.body, false, { ms: 50 });

// Config for Experiment
const config = {
  dir: 'https://flopsi69.github.io/crs/<dir>/<project>',
  clarity: ['set', '', 'variant_1'],
  debug: true,
};

// Styles for Experiment
const styles = `
  .jumb {
    background: #0A132A url('${config.dir}/img/jumb-bg.jpg') top center / cover no-repeat;
  }
  .jumb {}
  .jumb {}
  .jumb {}
  .jumb {}
  .jumb {}
  .jumb {}
  .jumb {}
  .jumb {}
  .jumb {}
  .jumb {}
  .jumb {}
  .jumb {}
  .jumb {}
  .jumb {}
  .jumb {}
  .jumb {}
  .jumb {}
  .jumb {}
  .jumb {}
  .jumb {}
  .jumb {}
  .jumb {}
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
          <img src='${config.dir}/img/feature1.svg' alt='' />
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
          <img src='${config.dir}/img/feature1.svg' alt='' />
        </button>
        
        <div class='jumb__arrow'>
          <img src='${config.dir}/img/feature1.svg' alt='' />
        </div>

        <div class='jumb__watched'>Over <span>100,000+</span> parents just like you have watched this webinar</div>

        <div class='jumb-about'>
          <div class='jumb-about__preview'>
            <img src='${config.dir}/img/feature1.svg' alt='' />
          </div>
          <div class='jumb-about__info'>
            <div class='jumb-about__caption'></div>
            <div class='jumb-about__title'>About Zenith Prep Academy</div>
          </div>
        </div>

        <div class='jumb-featured'>
          <div class='jumb-featured__title'>Featured on:</div>
          <div class='jumb-featured__logos'>
            <img src='${config.dir}/img/feature1.svg' alt='' />
            <img src='${config.dir}/img/feature2.svg' alt='' />
            <img src='${config.dir}/img/feature3.svg' alt='' />
            <img src='${config.dir}/img/feature4.svg' alt='' />
            <img src='${config.dir}/img/feature5.svg' alt='' />
            <img src='${config.dir}/img/feature6.svg' alt='' />
          </div>
        </div>

        <div class='jumb-owner'>
          <div class='jumb-owner__image'></div>
          <div class='jumb-owner__info'>
            <div class='jumb-owner__title'>Kevin Hong</div>
            <div class='jumb-owner__caption'>PROGRAM DIRECTOR & Host</div>
            <div class='jumb-owner__description'>
              <p>
                In charge of managing the College Consulting program – Provided guidance & advice to 1,000s of families on how their students can gain admissions into top STEM, Business, and Healthcare summer programs, internships, and research opportunities
              </p>
              <p>
                Experience working with families from all around the US, helping them gain admission into the Ivy Leagues and other top universities
              </p>
            </div>
          </div>
        </div>
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
