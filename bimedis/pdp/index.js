/* STYLES insert start */

let fonts =
  '<link rel="preconnect" href="https://fonts.gstatic.com"><link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">';
document.querySelector('head').insertAdjacentHTML('beforeend', fonts);

let stylesList = `
  .new-scss.scss-small-content .content > .container {
    max-width: 1360px!important;
  }
  .b-advert-left-column {
    width: 100%;
  }
  .lav-body__wrap {
    display: flex;
  }
  .lav-body {
    float: none!important;
    flex-grow: 1;
    margin-left: 22px;
  }
  .b-advert-left-column.b-advert-gallery-block {
    float: none!important;
  }
  .b-advert-header.m-h2 {
    font-family: 'Raleway', sans-serif;
    font-size: 24px;
    font-weight: 600;
  }
  .lav-body__info {
    width: 610px;
  }
  .lav-body__info .b-advert-block {
    padding: 20px!important;
    margin-bottom: 0;
  }
  .b-advert-table .e-advert-row {
    border: none;
  }
  .b-advert-table .e-advert-title, .b-advert-table .e-advert-value {
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    line-height: 16.5px;
    color: #333;
    font-weight: 400;
  }
  .b-advert-table .e-advert-value a {
    font-weight: 500;
    text-decoration-line: underline;
    color: #333;
  }
  .b-advert-table .e-advert-row .c {
    min-height: auto;
    height: auto;
  }
  .b-advert-table .e-advert-row {
    min-height: auto;
  }
  .b-advert-table .e-advert-row td {
    padding: 10px 0;
  }
  .b-advert-table .e-advert-row.m-last-row td {
    padding-bottom: 0;
  }
  .b-main-advert-information {
    margin-bottom: 0;
  }
  .b-advert-table {
    margin: 20px 0 0;
  }
  .lav-body__info .b-advert-block + .b-advert-block {
    margin-top: 20px;
  }
  .b-options-table .e-col:first-child {
    padding-left: 0!important;
  }
  .b-options-table .e-col {
    height: auto;
    padding: 10px 0!important;
  }
  .b-options-table .e-row {
    height: auto;
    line-height: 16.5px;
    font-size: 14px;
  }
  .b-options-table .e-row:nth-child(2n + 1) {
    background: inherit;
  }
  .b-advert-header.m-h2 {
    margin-bottom: 20px;
  }
  .e-description-text {
    font-family: 'Raleway', sans-serif;
    font-size: 14px;
    line-height: 22px;
  }
  .b-advert-show-description {
    padding: 10px;
  }
  .b-comment-container {
    margin-top: 30px;
    padding: 20px!important;
  }
  .lav-body__meta {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    margin-top: 22px;
    line-height: 1;
  }
  .lav-body__title {
    font-family: 'Raleway', sans-serif;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    letter-spacing: 0.015em;
    color: #353C5F;
  }
  .lav-body__line + .lav-body__line {
    margin-top: 10px;
  }
  .lav-body__meta-right {
    display: flex;
    align-items: center;
    font-size: 12px;
  }
  .sjs-add-to-favourites.m-round {
    position: static;
    margin-left: 5px;
    background-size: contain!important;
    height: 24px;
    max-width: 24px;
  }
  .scss-favourite-icon {
    width: 24px;
    height: 24px;
    background-size: contain;
  }
  .lav-body__price {
    font-family: 'Raleway', sans-serif;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    letter-spacing: 0.015em;
    color: #353C5F;
    margin-top: 20px;
  }
  .lav-how {
    background: #FFFFFF;
    border: 1px solid #DADADA;
    box-sizing: border-box;
    border-radius: 2px;
    padding: 20px 30px;
    margin-top: 30px;
  }
  .lav-how__title {
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    color: #333333;
  }
  .lav-how__steps {
    margin: 22px -10px;
    display: flex;
  }
  .lav-how__step {
    display: flex;
    align-items: center;
    padding: 0 10px;
    font-family: 'Roboto', sans-serif;
  }
  .lav-how__step-caption {
    font-size: 12px;
    line-height: 14px;
    color: #333333;
    margin-left: 5px;
  }
  .lav-how__step-num {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    font-weight: 500;
    font-size: 18px;
    line-height: 1;
    color: #FFFFFF;
    background: #485280;
    border-radius: 50px;
    width: 30px;
    height: 30px;
  }
  .lav-how__caption {
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.4;
    color: #333333;
  }
  .lav-how__options {
    margin-top: 15px;
  }
  .lav-how__option {
    display: flex;
    align-items: center;
  }
  .lav-how__option + .lav-how__option {
    margin-top: 15px;
  }
  .lav-how__option-value {
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    line-height: 21px;
    color: #485280;
    border-bottom: 1px dashed #485280;
  }
  .lav-seller {
    padding-top: 20px;
    margin-top: 15px;
    border-top: 1px solid rgba(0, 0, 0, 0.05);
  }
  .lav-seller__head {
    display: flex;
    align-items: center;
  }
  .lav-seller__head-caption {
    font-family: 'Raleway', sans-serif;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    color: rgba(53, 60, 95, 0.8);    
  }
  .lav-seller__head-label {
    margin-left: 9px;
  }
  .lav-seller__company {
    margin-top: 15px;
    display: inline-block;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }
  .lav-buttons__wrap {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }
  .lav-buttons {
    display: flex;
    flex-grow: 1;
  }
  .lav-botton__contact {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #FFFFFF;
    padding: 19px;
    height: auto;
    max-width: 340px;
    width: 100%;
    border-radius: 4px!important;
  }
  .lav-botton__tradein {
    margin-left: 20px!important;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #333333;
    border: 3px solid #DADADA;
    box-sizing: border-box;
    border-radius: 4px!important;
    padding: 19px;
    height: auto;
    max-width: 160px;
    width: 100%;
  }
  .lav-buttons__report {
    display: flex;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
    text-decoration-line: underline;
    color: #4D4D4D;
  }
`;

const REPO_DIR = 'https://flopsi69.github.io/crs/bimedis/pdp';

// connect to DOM
let styles = document.createElement('style');
styles.id = 'go-phone-styles';
styles.innerHTML = stylesList;
document.body.appendChild(styles);
/* STYLES insert end */
initExp();
function initExp() {
  initRightSide();
  let infoSide = document.createElement('div');
}

function initRightSide() {
  let title = document.querySelector('.b-advert-header.m-h1').innerText;
  let sellerCompanyEl = document.querySelector('.e-company-name a');
  let bodyEl = `
    <div class='lav-body__wrap'>
      <div class='lav-body__info'></div>
      <div class='lav-body'>
        <div class='lav-body__title'>${title}</div>
        <div class='lav-body__meta'>
          <div class='lav-body__meta-left'>
            <div class='lav-body__line'>Condition: <strong>Used</strong></div>
            <div class='lav-body__line'>Year: <strong>2015</strong></div>
          </div>
          <div class='lav-body__meta-right'>Add to Favourites</div>
        </div>
        <div class='lav-body__price'>$10</div>

        <div class='lav-seller'>
          <div class='lav-seller__head'>
            <div class='lav-seller__head-caption'>Seller:</div>
            <div class='lav-seller__head-label'></div>
          </div>
          <a href='${sellerCompanyEl.href}' class='lav-seller__company'>${sellerCompanyEl.innerText}</a>
        </div>

        <div class='lav-buttons__wrap'>
          <div class='lav-buttons'>
            <button class="b-button m-button-blue lav-botton__contact">Contact seller</button>
            <button class="b-button lav-botton__tradein">Trade in</button>
          </div>

          <div class='lav-buttons__report'>
            <img src="${REPO_DIR}/report.svg">
            Report the add
          </div>
        </div>

        <div class='lav-how'>
          <div class='lav-how__title'>How to buy this product?</div>
          <div class='lav-how__steps'>
            <div class='lav-how__step'>
              <div class='lav-how__step-num'>1</div>
              <div class='lav-how__step-caption'>Contact seller</div>
            </div>
            <div class='lav-how__step'>
              <div class='lav-how__step-num'>2</div>
              <div class='lav-how__step-caption'>Agree on the price with seller</div>
            </div>
            <div class='lav-how__step'>
              <div class='lav-how__step-num'>3</div>
              <div class='lav-how__step-caption'>Choose Delivery option</div>
            </div>
            <div class='lav-how__step'>
              <div class='lav-how__step-num'>4</div>
              <div class='lav-how__step-caption'>Manage Customs clearance</div>
            </div>
          </div>
          <div class='lav-how__caption'>Delegate accompanying services to Bimedis or manage everything by your own</div>
          <div class='lav-how__options'>
            <div class='lav-how__option'>
              <div class='lav-how__option-value'>Delivery options</div>
            </div>
            <div class='lav-how__option'>
              <div class='lav-how__option-value'>Customs clearance</div>
            </div>
            <div class='lav-how__option'>
              <div class='lav-how__option-value'>Additional services </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  document
    .querySelector('.b-adverts-switcher')
    .insertAdjacentHTML('afterend', bodyEl);

  for (let item of document.querySelectorAll('.b-advert-left-column')) {
    document
      .querySelector('.lav-body__info')
      .insertAdjacentElement('beforeend', item);
  }

  document
    .querySelector('.lav-body__wrap')
    .insertAdjacentElement(
      'afterend',
      document.querySelector('.b-comment-container')
    );

  document
    .querySelector('.lav-body__meta-right')
    .insertAdjacentElement(
      'beforeend',
      document.querySelector('.sjs-add-to-favourites')
    );
}
