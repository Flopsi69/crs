/*** Analytics insert start ***/

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
  hj('trigger', 'also_like');
} catch (e) {}

function gaEvent(action, label) {
  if (!label) {
    label = '';
  }
  try {
    var objData = {
      event: 'event-to-ga',
      eventCategory: 'Experiment — also like',
      eventAction: action,
      eventLabel: label,
      eventValue: ''
    };
    console.log('EventFire:', objData);
    dataLayer.push(objData);
  } catch (e) {}
}

console.log('start');
gaEvent('loaded');

/*** Analytics insert -end- ***/

// const REPO_DIR = 'https://flopsi69.github.io/crs/depositPhotos/mayAlsoLike';

let observer = new MutationObserver(mutations => {
  for (let mutation of mutations) {
    // проверим новые узлы, есть ли что-то, что надо подсветить?

    for (let node of mutation.addedNodes) {
      // отслеживаем только узлы-элементы, другие (текстовые) пропускаем
      if (
        !(node instanceof HTMLElement) ||
        node.classList.contains('countdown')
      )
        continue;

      if (
        node.classList.contains('wrapper') ||
        node.classList.contains('search-box__result')
      ) {
        initAlso();
      }
      // проверить, не является ли вставленный элемент примером кода
    }
  }
});

let demoElem = document.body;

observer.observe(demoElem, { childList: true, subtree: true });

/*** STYLES insert start ***/

let stylesListAlso = `
  .lav-may {
    padding: 18px 25px;
    background-color: #F0F0F0;
    margin-bottom: 17px;
    width: 100%;
    min-width: 0;
    margin-right: 10px;
  }
  .lav-may__list {
    display: flex;
    justify-content: space-between;
    margin-top: 14px;
    margin-bottom: 22px;
  }
  .lav-may__list .lav-may__item {
    width: 110px;
    flex: 1;
    border: 2px solid #fff;
    margin-bottom: 0!important;
  }
  .lav-may__list .lav-may__item img {
    position: static;
  }
  .lav-may__list .lav-may__item .file-container__actions {
    display: none;
  }
  // .lav-may__list .lav-may__item .file-container__link::before, .file-container__link::after {
  //   display: none;
  // }
  .lav-may__title {
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: black;
  }
  .lav-may__link-wrap {
    text-align: center;
  }
  .lav-may__link {
    display: inline-block;
    font-weight: bold;
    font-size: 10px;
    line-height: 12px;
    color: #4792de;
    padding: 6px 45px;
    border: 1px solid #4792de;
    border-radius: 15px;
    transition: background-color 0.15s, color 0.15s, border-color 0.15s;
    text-decoration: none;
  }
  .lav-may__link:hover {
    color: #ffffff;
    background-color: #4792de;
    text-decoration: none;
  }
`;

// connect to DOM
let stylesAlso = document.createElement('style');
stylesAlso.innerHTML = stylesListAlso;
document.body.appendChild(stylesAlso);

/*** STYLES insert -end- ***/

function initAlso() {
  console.log('init');

  if (document.querySelectorAll('.file-container__link').length) {
    document
      .querySelectorAll('.file-container__link')
      .forEach(function (photoEl) {
        // console.log(photoEl);
        photoEl.addEventListener('click', function () {
          console.log('Click element');
          gaEvent('image click');

          if (!this.classList.contains('lav-may_dirty')) {
            if (document.querySelector('.lav-may_dirty')) {
              document
                .querySelector('.lav-may_dirty')
                .classList.remove('lav-may_dirty');
            }
            this.classList.add('lav-may_dirty');
            console.log('pop-up init');
            getPopupInfo();
          } else {
            console.log('dirty');
          }
        });
      });
  } else {
    setTimeout(() => {
      initAlso();
    }, 500);
  }
}

function getPopupInfo() {
  var relatedItems = [];
  var showMoreLink;

  var intervalWaitSimiliar = setInterval(() => {
    if (
      document.querySelectorAll(
        '.file-view__related[data-tab="similar"] .file-container'
      ).length
    ) {
      clearInterval(intervalWaitSimiliar);
      document
        .querySelectorAll(
          '.file-view__related[data-tab="similar"] .file-container'
        )
        .forEach(function (relatedEl) {
          console.log('realted', relatedEl);
          if (relatedEl.querySelector('a').classList.contains('_see-more')) {
            showMoreLink = relatedEl.querySelector('a').href;
          } else {
            relatedItems.push(relatedEl.cloneNode(true));
          }
        });

      createAlsoBlock(relatedItems, showMoreLink);
    }
  }, 300);
}

function createAlsoBlock(items, link) {
  console.log('Create block');

  if (document.querySelectorAll('.lav-may').length) {
    document.querySelectorAll('.lav-may').forEach(function (mayBlock) {
      mayBlock.remove();
    });
  }

  var blockEl = document.createElement('div');
  blockEl.classList.add('lav-may');

  var blockInnerHTML = `
      <div class='lav-may__title'>You may also like</div>
      <div class='lav-may__list'></div>
    `;

  blockEl.insertAdjacentHTML('afterbegin', blockInnerHTML);

  if (link) {
    blockEl.insertAdjacentHTML(
      'beforeend',
      `<div class="lav-may__link-wrap"><a href='${link}' class="lav-may__link">See more</div>`
    );
  }

  items.forEach(function (item, index) {
    item.classList.add('lav-may__item');
    console.log(item);
    if (index < 9) {
      item.dataset.itemIndex = index + 1;
      blockEl
        .querySelector('.lav-may__list')
        .insertAdjacentElement('afterbegin', item);
    } else {
      return false;
    }
  });

  // var tempLocalEl = document.createElement('div').insertAdjacentElement('afterbegin', blockEl);
  // localStorage.setItem('mayAlsoBlock', tempLocalEl.innerHTML);

  gaEvent('block loaded', 'YMAL block loaded');

  insertAfterRow([8, 16], blockEl);
}

function insertAfterRow(rows, blockEl) {
  var rowNumber = 0;
  var containerWidth = document.querySelector(
    '.search-box__content'
  ).offsetWidth;
  var rowWidth = 0;
  var rowEnded = true;
  document
    .querySelectorAll('.search-box__content .flex-files>.file-container')
    .forEach(item => {
      rowWidth += item.offsetWidth + 10;
      console.log(rowWidth, containerWidth);
      if (
        (rowWidth >= containerWidth - 10 && rowWidth <= containerWidth + 10) ||
        rowWidth == containerWidth
      ) {
        rowEnded = true;
        rowNumber++;
        console.log('RowNumber:', rowNumber);
        rowWidth = 0;
        rows.forEach(row => {
          if (row == rowNumber) {
            console.log('Added block after', rowNumber);
            item.insertAdjacentElement('afterend', blockEl.cloneNode(true));
          }
          return false;
        });
      } else {
        rowEnded = false;
      }
    });

  document.querySelectorAll('.lav-may__item').forEach(element => {
    element.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector('.lav-may_dirty').click();
      let tempStylesPhoto = document.createElement('style');
      tempStylesPhoto.innerHTML = `
        .view-file-box_fixed-size {
          opacity: 0;
        }
        html {
          overflow: hidden!important;
        }
      `;

      document.body.appendChild(tempStylesPhoto);
      var drityInterval = setInterval(() => {
        if (
          document.querySelectorAll(
            '.file-view__related[data-tab="similar"] .file-container'
          ).length
        ) {
          clearInterval(drityInterval);
          document
            .querySelector(
              '.file-view__related[data-tab="similar"] .file-container:nth-child(' +
                element.dataset.itemIndex +
                ') a'
            )
            .click();

          tempStylesPhoto.remove();
        }
      }, 300);
    });
  });

  document.querySelectorAll('.lav-may__link').forEach(function (link) {
    link.addEventListener('click', function () {
      console.log('click show more');
      gaEvent('click on button', 'show more button');
    });
  });

  // &&(rowNumber > 19 || rowNumber < 14)
  if (
    (rowNumber > 17 && document.querySelectorAll('.lav-may').length < 3) ||
    (rowNumber < 15 && document.querySelectorAll('.lav-may').length < 2)
  ) {
    console.log('One more time before last');
    if (rowEnded) {
      insertAfterRow([rowNumber - 1], blockEl);
    } else {
      insertAfterRow([rowNumber], blockEl);
    }
  }
}
