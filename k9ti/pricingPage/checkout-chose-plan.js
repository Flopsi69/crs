/********* Image directory **********/
const githubDir = 'https://flopsi69.github.io/crs/k9ti/pricingPage';

// Styles
const styles = `
  /* Fix exists styles START */

  .payment_inform_box p.subtitle_text {
    text-transform: uppercase;
  }
  .reviews_box li p {
    color: #525252!important;
  }
  .reviews_box li p:not(:first-child) {
    font-style: normal;
    line-height: 1.5;
  }
  .payment_inform_box .payment_order > div table thead tr th:first-child {
    text-align: left;
    font-size: 16px!important;
    line-height: 22px;
    font-weight: 600;
  }
  /* Fix exists styles END */

  .choose__table {
    display: flex;
    padding: 0!important;
    border: 0!important;
    margin-top: 40px;
  }
  .plan {
    padding: 12px 16px;
    text-align: center;
    flex-grow: 1;
    width: 33%;
    display: flex;
    flex-flow: column;
    cursor: pointer;
    transition: 0.35s;
    border: 1px solid #DFE8F0;
  }
  .plan.active {
    // position: relative;
    z-index: 1;
    background: #F9FCFF;
    border-color: #1D3871;
  }
  .plan:first-child {
    border-radius: 10px 0px 0px 10px;
  }
  .plan:last-child {
    border-radius: 0px 10px 10px 0px;
  }
  .plan:nth-child(2) {
    position: relative;
  }
  .plan:nth-child(2):before {
    content: 'Best value';
    background: #1D3871;
    border-radius: 5px 5px 0px 0px;
    position: absolute;
    top: 0;
    transform: translateY(-100%);
    left: -1px;
    right: -1px;
    padding: 2px 8px;
    font-weight: 600;
    font-size: 10px;
    line-height: 14px;
    letter-spacing: -0.01em;
    text-transform: uppercase;
    color: #fff;
  }
  .plan__title {
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
    letter-spacing: -0.01em;
    text-transform: uppercase;
    color: #794E15;
  }
  .plan__info {
    display: flex;
    flex-grow: 1;
    flex-flow: column;
    justify-content: space-between;
    border-top: 1px solid #DFE8F0;
    border-bottom: 1px solid #DFE8F0;
    margin-top: 4px;
    margin-bottom: 8px;
    padding-top: 12px;
  }
  .plan__descr {
    font-size: 14px;
    line-height: 23px;
    color: #1D3871;
  }
  .plan__descr span {
    font-weight: bold;
  }
  .plan__descr {
  }
  .plan__view {
    font-size: 14px;
    line-height: 23px;
    text-align: center;
    text-decoration-line: underline;
    color: #1D3871;
    padding: 12px 16px;
    margin: 0 -16px;
  }
  .plan__price-inner {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
  }
  .plan__price-old {
    font-size: 14px;
    line-height: 21px;
    text-decoration-line: line-through;
    color: #525252;
    margin-right: 5px;
  }
  .plan__price-new {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #1D3871;
  }
  .plan__price-caption {
    margin-top: 8px;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5;
    color: #1D3871;
  }
  .plan__price {
    position: relative;
    padding-bottom: 32px;
  }
  .plan__price:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    bottom: 0;
    border: 2px solid #525252;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    transition: 0.35s;
  }
  .plan.active .plan__price:before {
    border-color: #1D3871;
  }
  .plan__price:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    bottom: 5px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #1D3871;
    opacity: 0;
    transition: 0.35s;
  }
  .plan.active .plan__price:after {
    opacity: 1;
  }

  .tip {
    position: relative;
  }
  .tip__body {
    display: none;
    position: absolute;
    z-index: 99;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 8px;
    box-shadow: 0px 2px 6px 2px rgba(0, 0, 0, 0.15);
    filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2));
    width: 335px;
    padding: 16px;
    text-align: left;
  }
  .tip__body.active {
    display: block;
  }
  .tip__body:before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translate(-50%, -85%);
    top: 0;
    width: 25px;
    height: 11px;
    background: url('${githubDir}/img/tip-arrow.svg') center no-repeat;
    background-size: contain;
  }
  .tip__item {
    position: relative;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #1D3871;
    padding-left: 32px;
  }
  .tip__item:before {
    content: '';
    position: absolute;
    left: 0;
    top: 4px;
    width: 24px;
    height: 24px;
    background: url('${githubDir}/img/paw.svg') center no-repeat;
    background-size: contain;
  }
  .tip__item + .tip__item {
    margin-top: 12px;
  }
  .tip__item span {
    font-weight: bold;
  }
  .table__inner {
    background: #F9FCFF;
    margin: 0 -25px;
    padding: 16px 25px;
  }
  .payment_inform_box .payment_order > div table .table__inner thead tr th:first-child {
    font-weight: 700;
    font-size: 12px!important;
    line-height: 16px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
  }
  .payment_inform_box li > div table tbody tr td.exlusive {
    padding: 0;
  }
  .payment_inform_box li > div table .table__inner tbody tr:last-child td {
    padding-bottom: 0;
  }
  .payment_inform_box li > div table thead tr th:not(:first-child) {
    width: 80px;
  }
  @media(max-width: 1300px) and (min-width: 768px){
    .choose__plan:last-child  .tip__body {
      left: initial;
      right: 0;
      transform: none;
    }

    .choose__plan:last-child .tip__body:before {
      left: 74%;
    }
  }
  @media(max-width: 768px) {
    .plan {
      padding: 12px 8px;
    }
    .plan__view {
      margin: 0 -8px;
      padding: 12px 8px;
    }
    .plan__price-caption {
      margin-left: -2px;
      margin-right: -2px;
    }
    .plan__view.tip {
      position: static;
    }
    .plan__view .tip__body {
      top: initial;
      transform: translateX(-50%) translateY(10px);
      width: 92.5%;
    }
    .plan:nth-child(2) {
      position: static;
    }
    .choose__table .plan:first-child .tip__body:before {
      left: 16%;
    }
    .choose__table .plan:last-child .tip__body:before {
      left: 85%;
    }
    .table__inner {
      margin: 0 -16px;
      padding: 16px 16px;
    }
    .payment_inform_box li > div table thead tr th:not(:first-child) {
      width: 60px;
    }
    
    /* Fix exists styles START */
    .payment_order {
      order: -1;
    }
    .payment_inform_box p.subtitle_text {
      margin-bottom: 20px!important;
    }
    .payment_inform_box>li {
      margin-bottom: 30px!important;
    }
    .payment_inform_box li:nth-child(2) {
      margin-top: 30px;
    }
    .payment_inform_box {
      margin-bottom: 20px!important;
    }
    body .container .first_block .text_mobile {
      margin-bottom: 0;
    }
    .payment_inform_box li > div table thead tr th:nth-child(2) {
      padding-left: 12px;
      padding-right: 10px;
      white-space: nowrap;
    }
    .payment_inform_box li > div table thead tr th {
      white-space: nowrap;
      padding-bottom: 12px;
    }
    .payment_inform_box li > div table tbody tr td:nth-child(2) {
      padding-right: 10px;
      padding-left: 12px;
    }
    .payment_inform_box li > div table tbody tr td {
      padding: 8px 0;
    }
    .customer_information_wrapper .row:last-child input + p {
      margin-bottom: 0;
    }
    /* Fix exists styles END */
  }
`;

// Add styles to page
const stylesEl = document.createElement('style');
stylesEl.innerHTML = styles;
document.body.appendChild(stylesEl);

// Init
initPaymentPlans();

function initPaymentPlans() {
  // HTML element
  let el = `
    <li class='choose'>
      <p class="subtitle_text choose__title">Choose your plan</p>
      <div class='choose__table'>
        <div class='plan choose__plan'>
          <div class='plan__title'>Basic</div>
          <div class='plan__info'>
            <div class='plan__descr'>Lifetime access to <span>Masterclass</span></div>
            <div class='plan__view tip'>
              view full info
              <div class='tip__body'>
                <div class='tip__item'>Lifetime access to <span>Total Transformation Masterclass + 3 bonus classes</span></div>
                <div class='tip__item'>10-week access to an updated library of <span>past weekly Q&A call recordings</span></div>
              </div>
            </div>
          </div>
          <div class='plan__price'>
            <div class='plan__price-inner'>
              <div class='plan__price-old'>$497</div>
              <div class='plan__price-new'>$297</div>
            </div>
            <div class='plan__price-caption'>or $99/month for&nbsp;3&nbsp;months</div>
          </div>
        </div>

        <div class='plan choose__plan active'>
          <div class='plan__title'>Premium</div>
          <div class='plan__info'>
            <div class='plan__descr'>Lifetime access to <span>Masterclass</span><br/>+<br/><span>10 weeks</span> of personalized <span>coaching & support</span></div>
            
            <div class='plan__view tip'>
              view full info
              <div class='tip__body'>
                <div class='tip__item'>Lifetime access to <span>Total Transformation Masterclass + 3 bonus classes</span></div>
                <div class='tip__item'>10 weeks of personalized guidance & coaching via our <span>weekly live Q&A group calls</span> every Saturday at 3PM Eastern Time</div>
                <div class='tip__item'>10-week access to our email <span>support -</span> questions you email in are answered on a separate call, which will be made available for download</div>
                <div class='tip__item'>10-week access to an updated library of <span>past weekly Q&A call recordings</span></div>
              </div>
            </div>
          </div>
          <div class='plan__price'>
            <div class='plan__price-inner'>
              <div class='plan__price-old'>$587</div>
              <div class='plan__price-new'>$387</div>
            </div>
            <div class='plan__price-caption'>or $129/month for&nbsp;3&nbsp;months</div>
          </div>
        </div>

        <div class='plan choose__plan'>
          <div class='plan__title'>Delux</div>
          <div class='plan__info'>
          <div class='plan__descr'>Lifetime access to <span>Masterclass</span><br/>+<br/><span>1 year</span> of personalized <span>coaching & support</span></div>
            <div class='plan__view tip'>
              view full info
              <div class='tip__body'>
                <div class='tip__item'>Lifetime access to <span>Total Transformation Masterclass + 3 bonus classes</span></div>
                <div class='tip__item'>A full year of personalized guidance & coaching via our <span>weekly live Q&A group calls</span> every Saturday at 3PM Eastern Time</div>
                <div class='tip__item'>1-year access to our email <span>support -</span> questions you email in are answered on a separate call, which will be made available for download</div>
                <div class='tip__item'>1-year access to an updated library of <span>past weekly Q&A call recordings</span></div>
              </div>
            </div>
          </div>
          <div class='plan__price'>
            <div class='plan__price-inner'>
              <div class='plan__price-old'>$887</div>
              <div class='plan__price-new'>$687</div>
            </div>
            <div class='plan__price-caption'>or $229/month for&nbsp;3&nbsp;months</div>
          </div>
        </div>
      </div>
    </li>
  `;

  // Insert HTML element to  DOM
  document
    .querySelector('#payment_inform_wrapp_id')
    .insertAdjacentHTML('afterend', el);

  // Toggle active plan handler
  for (let item of document.querySelectorAll('.plan')) {
    item.addEventListener('click', function (e) {
      e.preventDefault();

      if (
        e.target.classList.contains('plan__view') ||
        item.classList.contains('active')
      )
        return false;

      if (document.querySelector('.plan.active')) {
        document.querySelector('.plan.active').classList.remove('active');
      }

      item.classList.add('active');
    });
  }

  // Tips handler
  initTips();

  // Add plan name to th (summary table)
  addSummaryTitle();
}

function initTips() {
  // Click outside - remove tip
  document.addEventListener('click', function (e) {
    if (
      document.querySelector('.tip__body.active') &&
      !e.target.closest('.tip') &&
      !e.target.classList.contains('tip')
    ) {
      document.querySelector('.tip__body.active').classList.remove('active');
    }
  });

  // Toggle tip visibility
  for (let item of document.querySelectorAll('.tip')) {
    item.addEventListener('click', function (e) {
      console.log('click');
      e.preventDefault();
      if (document.querySelector('.tip__body.active')) {
        document.querySelector('.tip__body.active').classList.remove('active');
      }
      item.querySelector('.tip__body').classList.add('active');
    });
  }
}

function addSummaryTitle() {
  let summaryTitle = document
    .querySelector('.payment_order .subtitle_text')
    .innerText.toLowerCase();

  let planName;

  if (summaryTitle.includes('basic')) {
    planName = 'basic';
    document.querySelector('.payment_order table th').innerText = 'BASIC PLAN';
  } else if (summaryTitle.includes('premium')) {
    planName = 'premium';
    document.querySelector('.payment_order table th').innerText =
      'PREMIUM PLAN';
  } else if (summaryTitle.includes('deluxe')) {
    planName = 'deluxe';
    document.querySelector('.payment_order table th').innerText = 'DELUXE PLAN';
  }

  document.querySelector('.payment_order .subtitle_text').innerText =
    'ORDER SUMMARY';

  // Change data for summary table
  changeSummaryTable(planName);
}

function changeSummaryTable(plan) {
  if (plan == 'basic') {
    document.querySelector('.payment_order table tbody').innerHTML = `
      <tr>
        <td>Total Transformation Masterclass</td>
        <td>$2.00</td>
        <td>$1.00</td>
      </tr>
      <tr>
        <td>BONUS CLASS ‘How to housetrain your dog’</td>
        <td>$2.00</td>
        <td>$1.00</td>
      </tr>
      <tr>
        <td>BONUS CLASS ‘Cure your dog’s separation anxiety’</td>
        <td>$2.00</td>
        <td>$1.00</td>
      </tr>
      <tr>
        <td>BONUS CLASS ‘How to get kids to interact with your dog’</td>
        <td>$2.00</td>
        <td>$1.00</td>
      </tr>
      <tr>
        <td>Recordings of weekly Q&A calls</td>
        <td>$2.00</td>
        <td>$1.00</td>
      </tr>
    `;
  } else if (plan == 'premium') {
    document.querySelector('.payment_order table tbody').innerHTML = `
      <tr>
        <td>Total Transformation Masterclass</td>
        <td>$2.00</td>
        <td>$1.00</td>
      </tr>
      <tr>
        <td>BONUS CLASS ‘How to housetrain your dog’</td>
        <td>$2.00</td>
        <td>$1.00</td>
      </tr>
      <tr>
        <td>BONUS CLASS ‘Cure your dog’s separation anxiety’</td>
        <td>$2.00</td>
        <td>$1.00</td>
      </tr>
      <tr>
        <td>BONUS CLASS ‘How to get kids to interact with your dog’</td>
        <td>$2.00</td>
        <td>$1.00</td>
      </tr>
      <tr class='exlusive'>
        <td colspan='3'>
          <div class='table__inner'>
            <table>
              <thead>
                <tr>
                  <th>Exclusive to Premium Plan</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Live weekly Q&A group calls with personal coaching (10-week access)</td>
                  <td>$2.00</td>
                  <td>$1.00</td>
                </tr>
                <tr>
                  <td>Email your questions - answered in separate downloadable weekly call (10-week access)</td>
                  <td>$2.00</td>
                  <td>$1.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </td>
      </tr>
      <tr>
        <td>Recordings of weekly Q&A calls</td>
        <td>$2.00</td>
        <td>$1.00</td>
      </tr>
    `;
  } else if (plan == 'deluxe') {
    document.querySelector('.payment_order table tbody').innerHTML = `
      <tr>
        <td>Total Transformation Masterclass</td>
        <td>$2.00</td>
        <td>$1.00</td>
      </tr>
      <tr>
        <td>BONUS CLASS ‘How to housetrain your dog’</td>
        <td>$2.00</td>
        <td>$1.00</td>
      </tr>
      <tr>
        <td>BONUS CLASS ‘Cure your dog’s separation anxiety’</td>
        <td>$2.00</td>
        <td>$1.00</td>
      </tr>
      <tr>
        <td>BONUS CLASS ‘How to get kids to interact with your dog’</td>
        <td>$2.00</td>
        <td>$1.00</td>
      </tr>
      <tr class='exlusive'>
        <td colspan='3'>
          <div class='table__inner'>
            <table>
              <thead>
                <tr>
                  <th>Exclusive to Premium Plan</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Live weekly Q&A group calls with personal coaching (1-year access)</td>
                  <td>$2.00</td>
                  <td>$1.00</td>
                </tr>
                <tr>
                  <td>Email your questions - answered in separate downloadable weekly call (1-year access)</td>
                  <td>$2.00</td>
                  <td>$1.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </td>
      </tr>
      <tr>
        <td>Recordings of weekly Q&A calls</td>
        <td>$2.00</td>
        <td>$1.00</td>
      </tr>
    `;
  }
}
