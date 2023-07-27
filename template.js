console.log('initExp');

(function () {
  /********* exp **********/
  const exp = {
    dir: 'https://flopsi69.github.io/crs/capucinne/pdp_slidein',
    observer: {
      mutation: false,
      intersection: false,
    },
    clarity: {
      enable: true,
      params: ['set', 'improve_upgrade_popup_v2', 'variant_1'],
    },
    debug: true,
  };

  // Observers
  if (exp.observer.mutation) {
    initMutation((el) => {
      console.log(el);
    });
  }

  if (exp.observer.intersection) {
    initIntersection((el) => {
      console.log(el);
      if (isElementInViewport(el)) {
        // pushDataLayer(...event);
        el.classList.add('in-view');
      }
    });
  }

  /*** STYLES / Start ***/
  const styles = `
  
`;

  const stylesEl = document.createElement('style');
  stylesEl.innerHTML = styles;
  waitFor(
    () => document.head,
    () => {
      document.head.appendChild(stylesEl);
    },
    100
  );
  /*** STYLES / End ***/

  /********* Custom Code **********/
  init();
  function init() {
    console.log('init');
  }

  // *** Utils *** //

  // Waiting for loading by condition
  function waitFor(condition, cb, ms = 1000) {
    if (condition()) {
      if (typeof cb == 'function') cb();
      return;
    }

    let interval = setInterval(function () {
      if (condition()) {
        clearInterval(interval);
        if (typeof cb == 'function') cb();
      }
    }, ms);
  }

  // Alalytic 4
  function pushDataLayer(name = '', desc = '', type = '', loc = '') {
    try {
      var objData = {
        event: 'event-to-ga4',
        event_name: name,
        event_desc: desc,
        event_type: type,
        event_loc: loc,
      };
      console.log('eventFire', objData);
      if (!exp.debug) {
        dataLayer.push(objData);
      }
    } catch (e) {
      console.log('Event Error:', e);
    }
  }
  // Mutation Observer
  function initMutation(cb) {
    let observer = new MutationObserver((mutations) => {
      for (let mutation of mutations) {
        for (let node of mutation.addedNodes) {
          if (!(node instanceof HTMLElement)) continue;

          cb(node);
        }
      }
    });

    waitFor(
      () => document.body,
      () => {
        observer.observe(document.body, { childList: true, subtree: true });
      },
      100
    );
  }

  // Intersection Observer
  function initIntersection(cb, observeEl) {
    const observerOptions = {
      root: null,
      threshold: 0,
      // rootMargin: '-40%',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          cb(entry.target);
        }
      });
    }, observerOptions);

    if (observeEl) {
      observer.observe(observeEl);
    } else {
      for (let el of Array.from(document.querySelectorAll('.lav-observe'))) {
        observer.observe(el);
      }
    }
  }

  async function isElementInViewport(el, event, timeout = 5) {
    if (el.classList.contains('in-view')) return false;

    setTimeout(() => {
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
    }, timeout * 1000);
  }

  //Clarity
  if (!exp.debug && exp.clarity.enable) {
    waitFor(
      () => typeof clarity == 'function',
      () => {
        clarity(...exp.clarity.params);
      }
    );
  }

  function $(selector, context = document) {
    return context.querySelector(selector);
  }

  function $$(selector, context = document) {
    return context.querySelectorAll(selector);
  }
})();

function initModals() {
  const modalEl = `
      <div class='lav-modal' style='display: none;'>
        <div class='lav-modal__inner lav-modal__test'>
        asdf
        </div>
      </div>
    `;

  document.body.insertAdjacentHTML('beforeend', modalEl);

  document.querySelector('.lav-modal').addEventListener('click', function (e) {
    if (e.target.classList.contains('lav-modal')) {
      closeModal();
    }
  });

  for (let el of document.querySelectorAll('.lav-modal__close')) {
    el.addEventListener('click', function () {
      closeModal();
    });
  }
}

function openModal(type) {
  document.body.classList.add('lav-modal-open');
  document.querySelector('html').classList.add('lav-modal-open');
  document.querySelector('.lav-modal__' + type).classList.add('active');
  document.querySelector('.lav-modal').style.display = 'flex';
  setTimeout(() => {
    document.querySelector('.lav-modal').classList.add('active');
  }, 100);
}

function closeModal() {
  document.body.classList.remove('lav-modal-open');
  document.querySelector('html').classList.remove('lav-modal-open');
  document.querySelector('.lav-modal').classList.remove('active');
  setTimeout(() => {
    document.querySelector('.lav-modal').style.display = 'none';
    document
      .querySelector('.lav-modal__inner.active')
      .classList.remove('active');
  }, 400);
}
`
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
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.35s;
}
.lav-modal:not(.active ){
  opacity: 0;
  pointer-events: none;
}
.lav-modal.active {
  opacity: 1;
}
.lav-modal__inner:not(.active) {
  display: none;
}
.lav-modal__inner {
  background: #fff;
  position: relative;
  max-width: 380px;
  width: 100%;
  max-height: 90%;
  overflow-y: auto;
  border-radius: 8px;
}
.lav-modal__close {
  cursor: pointer;
  transition: 0.35s;
}
@media(hover:hover) {
  .lav-modal__close:hover {
    opacity: 0.5;
    transform: scale(1.1);
  }
}
.lav-modal-open {
  position: relative;
  overflow: hidden;
}`;
