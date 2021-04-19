/*** Analytics insert start ***/

// try {
//   (function (h, o, t, j, a, r) {
//     h.hj =
//       h.hj ||
//       function () {
//         (h.hj.q = h.hj.q || []).push(arguments);
//       };
//     h._hjSettings = { hjid: 2196497, hjsv: 6 };
//     a = o.getElementsByTagName('head')[0];
//     r = o.createElement('script');
//     r.async = 1;
//     r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
//     a.appendChild(r);
//   })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
//   window.hj =
//     window.hj ||
//     function () {
//       (hj.q = hj.q || []).push(arguments);
//     };
//   hj('trigger', 'Cart_Clearpay');
// } catch (e) {}

// function gaEvent(action) {
//   try {
//     dataLayer.push({
//       event: 'event-to-ga',
//       eventCategory: 'Exp - Cart Clearpay',
//       eventAction: action
//     });
//   } catch (e) {}
// }
// gaEvent('loaded');

/*** Analytics insert -end- ***/

// const REPO_DIR = 'https://flopsi69.github.io/crs/depositPhotos/mayAlsoLike';

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
    color: #5499F5;
    padding: 6px 45px;
    border: 2px solid #5499F5;
    border-radius: 15px;
  }
`;

// connect to DOM
let stylesAlso = document.createElement('style');
stylesAlso.innerHTML = stylesListAlso;
document.body.appendChild(stylesAlso);

/*** STYLES insert -end- ***/

/*** HTML insert start ***/
// let licensesEl = ``;
/*** HTML insert -end- ***/

// setTimeout(() => {
//   document.querySelector('#root>.wrapper').style.opacity = 1;
// }, 3500);
setTimeout(() => {
  initAlso();
}, 500);

function initAlso() {
  console.log('init');
  if (document.querySelectorAll('.file-container__link').length) {
    console.log(document.querySelectorAll('.file-container__link'));
    document.addEventListener('click', function (e) {
      console.log(e.target);
      if (
        e.target.classList.contains('file-container__link') ||
        e.target.closest('.file-container__link').length
      ) {
        console.log('1');

        let element;
        if (e.target.classList.contains('file-container__link')) {
          console.log('21');

          element = e.target;
        } else if (e.target.closest('.file-container__link').length) {
          console.log('22');

          element = e.target.closest('.file-container__link');
        }

        if (!e.target.classList.contains('lav-may_dirty')) {
          console.log('3');

          if (document.querySelector('.lav-may_dirty')) {
            document
              .querySelector('.lav-may_dirty')
              .classList.remove('lav-may_dirty');
          }
          e.target.classList.add('lav-may_dirty');
          console.log('pop-up init');
          getPopupInfo();
        } else {
          console.log('dirty');
        }
      }
    });
    // document
    //   .querySelectorAll('.file-container__link')
    //   .forEach(function (photoEl) {
    //     console.log(photoEl);
    //     photoEl.addEventListener('click', function () {
    //       console.log('Click element');

    //       if (!this.classList.contains('lav-may_dirty')) {
    //         if (document.querySelector('.lav-may_dirty')) {
    //           document
    //             .querySelector('.lav-may_dirty')
    //             .classList.remove('lav-may_dirty');
    //         }
    //         this.classList.add('lav-may_dirty');
    //         console.log('pop-up init');
    //         getPopupInfo();
    //       } else {
    //         console.log('dirty');
    //       }
    //     });
    //   });
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

  console.log(blockEl);

  insertAfterRow([8, 16], blockEl);
}

function insertAfterRow(rows, blockEl) {
  var rowNumber = 0;
  var containerWidth = document.querySelector('.search-box__content')
    .offsetWidth;
  var rowWidth = 0;
  document
    .querySelectorAll('.search-box__content .flex-files>.file-container')
    .forEach(item => {
      rowWidth += item.offsetWidth + 10;
      console.log(rowWidth, containerWidth);
      if (containerWidth == rowWidth) {
        rowNumber++;
        console.log('RowNumber:', rowNumber);
        rowWidth = 0;
        rows.forEach(row => {
          if (row == rowNumber) {
            item.insertAdjacentElement('afterend', blockEl.cloneNode(true));
          }
          return false;
        });
      }
    });

  document.querySelectorAll('.lav-may__item').forEach(element => {
    element.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector('.lav-may_dirty').click();
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
        }
      }, 300);
    });
  });
}
