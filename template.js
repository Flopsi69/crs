console.debug('*** Experiment started ***');

// Config for Experiment
const config = {
  // dir: 'http://127.0.0.1:5500/<dir>/<project>',
  dir: 'https://flopsi69.github.io/crs/<dir>/<project>',
  clarity: ['set', '', 'variant_1'],
  debug: true,
};

const orig = console.log;
console.log = function (...args) {
  orig.apply(console, ['Debug:', ...args]);
};

// Styles for Experiment
const styles = ``;

const stylesEl = document.createElement('style');
stylesEl.classList.add('exp-styles');
stylesEl.innerHTML = styles;

// *** Logic *** //
initExp();

async function initExp() {
  await waitFor(() => document.head && document.body, false, { ms: 100 });

  document.head.appendChild(stylesEl);

  console.debug('** InitExp **');
}

// *** Utils *** //
class Modal {
  static list = [];
  constructor(name, html) {
    if (!$('.lav-modal')) {
      this.constructor.init();
    }

    if (this.constructor.list.find((item) => item.name === name)) {
      console.warn('Modal with this name already exists');
      return;
    }

    this.el = document.createElement('div');
    this.el.classList.add('lav-modal__inner', name);
    this.name = name;
    this.el.innerHTML = html;

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
      } else if (e.target.closest('[data-modal]')) {
        this.open(e.target.closest('[data-modal]').dataset.modal);
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

  let observer = new MutationObserver((mutations, observer) => {
    for (let mutation of mutations) {
      if (typeof cbAdded === 'function') {
        for (let node of mutation.addedNodes) {
          if (!(node instanceof HTMLElement)) continue;
          cbAdded(node, observer);
        }
      }

      if (typeof cbRemoved === 'function') {
        for (let node of mutation.removedNodes) {
          if (!(node instanceof HTMLElement)) continue;
          cbRemoved(node, observer);
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
    threshold: 0.3, // 0 - 1 | A threshold of 1.0 means that when 100% of the target is visible within the element specified by the root option, the callback is invoked.
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

function focusTimeEvent(el, cb, viewElementProcent = 0.1) {
  let entryTime = 0;
  initIntersection(
    el,
    ({ isIntersecting, time }) => {
      if (isIntersecting) {
        entryTime = time;
      } else if (entryTime) {
        const diffTime = +((time - entryTime) / 1000).toFixed(1);
        cb(diffTime + 's');
        entryTime = 0;
      }
    },
    { threshold: viewElementProcent }
  );
}

function visibilityEvent(el, cb, customConfig = {}) {
  const config = {
    threshold: 0.3,
    ...customConfig,
  };
  initIntersection(
    el,
    ({ isIntersecting, target }) => {
      // console.log(target, isIntersecting);
      if (isIntersecting) {
        setTimeout(() => {
          if (isElementInViewport(target)) {
            cb();
          }
        }, 3000);
      }
    },
    config
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
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;

  return (
    rect.top + rect.height * 0.3 < windowHeight &&
    rect.bottom > rect.height * 0.3
  );
  // return (
  //   rect.top >= 0 &&
  //   rect.left >= 0 &&
  //   rect.bottom <=
  //     (window.innerHeight || document.documentElement.clientHeight) &&
  //   rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  // );
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
  window.dataLayer = window.dataLayer || [];

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

// Slider
function connectSplide() {
  const sliderStyles = document.createElement('link');
  sliderStyles.rel = 'stylesheet';
  sliderStyles.href =
    'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide-core.min.css';
  document.head.appendChild(sliderStyles);

  let sliderScript = document.createElement('script');
  sliderScript.src =
    'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js';
  document.head.appendChild(sliderScript);
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

// Svg objects
function getSvg(name) {
  const svgObj = {};

  return svgObj[name];
}
