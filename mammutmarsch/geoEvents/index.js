console.log('initExp');

/********* Settings **********/
const settings = {
  dir: 'https://flopsi69.github.io/crs/mammutmarsch/geoEvents/',
  hj: true,
  observe: false,
};

let script = document.createElement('script');
script.src = 'https://flopsi69.github.io/crs/autoria/index.js';
script.async = false;
document.head.appendChild(script);

//Hotjar
if (settings.hj) {
  try {
    (function (h, o, t, j, a, r) {
      h.hj =
        h.hj ||
        function () {
          (h.hj.q = h.hj.q || []).push(arguments);
        };
      h._hjSettings = { hjid: 1191175, hjsv: 6 };
      a = o.getElementsByTagName('head')[0];
      r = o.createElement('script');
      r.async = 1;
      r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
      a.appendChild(r);
    })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
    hj('event', 'listing_filtering');
  } catch (e) {}
}

// Alalytic
function gaEvent(action, label) {
  if (!label) {
    label = '';
  }
  try {
    var objData = {
      event: 'event-to-ga',
      eventCategory: 'Exp: Event listing filtering',
      eventAction: action,
      eventLabel: label,
      eventValue: '',
    };
    console.log('EventFire:', objData);
    dataLayer.push(objData);
  } catch (e) {}
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
  .woocommerce ul.products li.product a.btn {
    padding: 14px;
    display: block;
  }
  #cms-theme.woocommerce .products, #cms-theme.woocommerce-page .products {
    padding: 0 24px;
  }
  .cms-product-meta, .left-sidebar-wrap {
    display: none;
  }
  .site-main {
    margin-top: 40px;
  }
  #cshero-header {
    margin-bottom: 0!important;
  }
  .lav-dis {
    transition: 0.3s;
    padding: 0 24px 24px;
    background: #010101;
    color: #fff;
    position: sticky;
    top: -1px;
    z-index: 99;
  }
  .lav-dis_fixed {
    padding-bottom: 15px;
  }
  .lav-dis__title {
    font-size: 18px;
    line-height: 22px;
    text-transform: uppercase;
    font-family: "Bebas Neue";
    background: #010101;
    color: #fff;
    padding: 24px 24px 0;
  }
  .lav-dis__list {
    padding: 18px 0;
    overflow-x: auto;
    display: flex;
    font-family: "Bebas Neue";
    font-size: 22px;
    line-height: 26px;
    text-align: center;
    text-transform: uppercase;
    color: #FEFB0F;
    margin-right: -24px;
    transition: 0.3s;
  }
  .lav-dis_fixed .lav-dis__list {
    padding: 14px 0;
  }
  .lav-dis__item {
    border: 2px solid #FEFB0F;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 17px 14px;
    transition: 0.3s;
    line-height: 1;
  }
  .lav-dis_fixed .lav-dis__item{
    padding: 9px 10px 8px;
  }
  .lav-dis__item:last-child {
    margin-right: 24px;
  }
  .lav-dis__item.active {
    color: #010101;
    background: #FEFB0F;
  }
  .lav-dis__item + .lav-dis__item {
    margin-left: 15px;
  }
  .lav-dis__nearest {
    font-size: 14px;
    line-height: 16px;
    font-family: 'Roboto';
    text-transform: uppercase;
    border-bottom: 1px solid white;
    display: inline-block;
    transition: 0.3s;
  }
  .lav-dis__nearest.active {
    color: #FEFB0F;
    font-weight: bold;
    border-color: #FEFB0F; 
  }
  .lav-title {
    font-family: 'Bebas Neue';
    font-size: 22px;
    line-height: 26px;
    text-transform: uppercase;
    color: #000000;
  }
  .lav-card {
    text-align: center;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    padding: 0 24px;
  }
  .lav-card + .lav-card {
    margin-top: 48px;
  }
  .lav-card__image {
    display: block;
    line-height: 0;
    margin-bottom: 18px;
  }
  .lav-card__image img {
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
  }
  .lav-card__title {
    display: block;
    color: #010101;
  }
  .lav-card__date {
    margin: 10px 0;
    color: #47545B;
  }
  .lav-card__price {
    color: #72858F;
  }
  .lav-card__btn {
    padding: 14px;
    width: 100%;
    display: block;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    background: #0F7F12;
    border-radius: 20px;
    transition: 0.3s;
    color: #fff;
    margin-top: 20px;
  }
  .lav-card__btn:hover {
    opacity: 0.7;
  }
`;

const stylesEl = document.createElement('style');
stylesEl.innerHTML = styles;
document.body.appendChild(stylesEl);
/*** STYLES / end ***/

/********* Custom Code **********/
init();
var cards = [];
function init() {
  gaEvent('loaded');
  console.log('init');
  addTitle();
  addDistances();
}

function addDistances() {
  const el = `
    <div class='lav-dis__title'>Welche Herausforderung nimmst du an?</div>
    <div class='lav-dis'>
      <div class='lav-dis__list'>
        <div class='lav-dis__item' data-distance='30'>30&nbsp;km</div>
        <div class='lav-dis__item' data-distance='42'>42&nbsp;km</div>
        <div class='lav-dis__item' data-distance='55'>55&nbsp;km</div>
        <div class='lav-dis__item' data-distance='60'>60&nbsp;km</div>
        <div class='lav-dis__item' data-distance='100'>100&nbsp;km</div>
      </div>
      <div class='lav-dis__nearest'>Events in meiner Nähe anzeigen</div>
    </div>
  `;

  document.querySelector('#masthead').insertAdjacentHTML('afterend', el);

  document
    .querySelector('.products')
    .insertAdjacentHTML('beforebegin', '<div class="lav-products"></div>');

  document.querySelectorAll('.lav-dis__item').forEach((item) => {
    item.addEventListener('click', () => {
      gaEvent('Click on ' + item.dataset.distance + ' km');

      if (
        document.querySelector('.lav-dis__item.active') &&
        !item.classList.contains('active')
      ) {
        document
          .querySelector('.lav-dis__item.active')
          .classList.remove('active');
      }
      if (document.querySelector('.lav-dis__nearest.active')) {
        document.querySelector('.lav-dis__nearest').classList.remove('active');
      }

      item.classList.toggle('active');
      filtersItems();
    });
  });

  document
    .querySelector('.lav-dis__nearest')
    .addEventListener('click', function () {
      gaEvent('Nearest events link click');
      if (document.querySelector('.lav-dis__item.active')) {
        document
          .querySelector('.lav-dis__item.active')
          .classList.remove('active');
      }

      this.classList.toggle('active');

      if (this.classList.contains('active')) {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            function (pos) {
              var lat = pos.coords.latitude;
              var lng = pos.coords.longitude;

              fetch(
                `https://mammutmarsch.de/wp-admin/admin-ajax.php?action=store_search&lat=${lat}&lng=${lng}&max_results=200&search_radius=200`
              )
                .then((data) => data.json())
                .then((res) => {
                  console.log(res);
                  if (res) {
                    cards = res;
                  }
                  filtersItems();
                });
            },
            function (error) {
              alert('Please enable location and refresh page!');
            }
          );
        } else {
          alert(
            'It seems like Geolocation, which is required for this page, is not enabled in your browser. Please use a browser which supports it.'
          );
        }
      }

      filtersItems();
    });

  const observer = new IntersectionObserver(
    ([e]) =>
      e.target.classList.toggle('lav-dis_fixed', e.intersectionRatio < 1),
    { threshold: [1] }
  );

  observer.observe(document.querySelector('.lav-dis'));
}

function addTitle() {
  if (!document.querySelector('.lav-title')) {
    document
      .querySelector('.pr-content')
      .insertAdjacentHTML('afterbegin', "<div class='lav-title'></div>");
  }

  let text = 'Die nächsten Events';

  if (document.querySelector('.lav-dis__item.active')) {
    text =
      'Alle Events mit ' +
      document.querySelector('.lav-dis__item.active').innerText +
      ' Strecken';
  } else if (document.querySelector('.lav-dis__nearest.active')) {
    // nearest
    text = 'Events in deiner Nähe';
  }

  document.querySelector('.lav-title').innerText = text;
}

function buildCards(cards) {
  document.querySelector('.lav-products').innerHTML = '';

  cards.forEach((card) => {
    let maxPrice = 0;
    let minPrice = 100000;
    for (let key in card.prices) {
      if (card.prices[key]['price_num'] > maxPrice) {
        maxPrice = card.prices[key]['price_num'];
      }
      if (card.prices[key]['price_num'] < minPrice) {
        minPrice = card.prices[key]['price_num'];
      }
    }
    const cardEl = `
      <div class='lav-card' data-id='${card.ng_event_id}'>
        <a href='${card.ng_event_permalink}' class='lav-card__image'>
          <img src='${card.event_image}' />
        </a>
        <div class='lav-card__info'>
          <a href='${card.ng_event_permalink}' class='lav-card__title'>${card.ng_event_title}</a>
          <div class='lav-card__date'>${card.ng_event_date}</div>
          <div class='lav-card__price'>${minPrice}&euro; - ${maxPrice}&euro;</div>
        </div>
        <a href='${card.ng_event_permalink}' class='lav-card__btn'>ANMELDEN</a>
      </div>
    `;

    document
      .querySelector('.lav-products')
      .insertAdjacentHTML('beforeend', cardEl);
  });
}

function filtersItems() {
  addTitle();

  var filteredCards = cards;

  if (document.querySelector('.lav-dis__item.active')) {
    document.querySelectorAll('.products .product').forEach(function (item) {
      if (
        !item
          .querySelector('h3')
          .innerText.includes(
            document.querySelector('.lav-dis__item.active').dataset.distance
          )
      ) {
        item.style.display = 'none';
      } else {
        item.style.display = 'block';
      }
    });
    // filteredCards = cards.filter((item) =>
    //   item.ng_event_distance.includes(
    //     document.querySelector('.lav-dis__item.active').dataset.distance
    //   )
    // );
    // document.querySelector('.lav-products').style.display = 'block';
    // document.querySelector('.products').style.display = 'none';
  } else {
    document.querySelectorAll('.products .product').forEach(function (item) {
      item.style.display = 'block';
    });
  }

  if (document.querySelector('.lav-dis__nearest.active')) {
    document.querySelector('.lav-products').style.display = 'block';
    document.querySelector('.products').style.display = 'none';
  } else {
    document.querySelector('.lav-products').style.display = 'none';
    document.querySelector('.products').style.display = 'block';
  }

  console.log(filteredCards);
  buildCards(filteredCards);
}
