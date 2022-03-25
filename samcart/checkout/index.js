console.log('initExp');

/********* Settings **********/
const settings = {
  dir: 'https://flopsi69.github.io/crs/samcart/checkout',
  hj: false,
  observe: false,
};

//Hotjar
if (settings.hj) {
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
}

// Alalytic
function gaEvent(action, label) {
  if (!label) {
    label = '';
  }
  try {
    var objData = {
      event: 'gaEv',
      eventCategory: 'Experiment — also like',
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
  @font-face {
    font-family: "Gilroy";
    src: url("${settings.dir}/Gilroy/Gilroy-Regular.woff") format("woff"),
      url("${settings.dir}/Gilroy/Gilroy-Regular.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Gilroy";
    src: url("${settings.dir}/Gilroy/Gilroy-Bold.woff") format("woff"),
      url("${settings.dir}/Gilroy/Gilroy-Bold.ttf") format("truetype");
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: "Gilroy";
    src: url("${settings.dir}/Gilroy/Gilroy-Black.woff") format("woff"),
      url("${settings.dir}/Gilroy/Gilroy-Black.ttf") format("truetype");
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: "Gilroy";
    src: url("${settings.dir}/Gilroy/Gilroy-SemiBold.woff") format("woff"),
      url("${settings.dir}/Gilroy/Gilroy-SemiBold.ttf") format("truetype");
    font-weight: 600;
    font-style: normal;
  }

  .row.section {
    display: none;
  }
  .lav-white-label {
    background: #FFFFFF;
    border-radius: 10px;
    padding: 15px 30px;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: #183B56;
  }
  header {
    display: none;
  }
  body {
    padding-top: 80px;
    background: #F7FAFD;
    font-family: "Gilroy";
  }
  .lav-container {
    padding: 0 15px;
    max-width: 1140px;
    margin: auto;
  }
  .lav-btn {
    border: none;
    cursor: pointer;
    background: none;
    outline: none;
    padding: 10px 20px;
  }
  .lav-btn_trans {
    border: 2px solid #183B56;
    border-radius: 8px;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.01em;
    color: #183B56;
    transition: 0.3s;
  }
  .lav-btn_trans:hover {
    color: #fff;
    background: #183B56;
  }
  .lav-btn_blue {
    background: #183B56;
    border-radius: 10px;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: -0.01em;
    color: #FFFFFF;
    padding: 18px 40px;
    transition: 0.3s;
  }
  .lav-btn_blue:hover {
    background-color: #07528c;
  }
  .lav-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    padding: 17px 0;
    background: #fff;
    border-bottom: 1px solid  rgb(90 115 134 / 20%);
    color: #183B56;
  }
  .lav-header__inner {
    padding-left: 50px;
    padding-right: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .lav-header__logo {
    line-height: 0;
  }
  .lav-header__logo img {
    max-width: 145px;
  }
  .lav-header__descr {
    font-size: 12px;
    line-height: 22px;
    letter-spacing: 0.05em;
  }
  .lav-price_old {
    text-decoration: line-through;
  }
  .lav-mark {
    font-weight: 900;
  }
  .lav-intro {
    text-align: center;
    color: #183B56;
    background: url('${settings.dir}/img/intro-lines.png') center no-repeat;
    background-size: 100% auto;
    padding: 40px 0 100px;
  }
  .lav-intro__congrate {
    font-weight: 600;
    font-size: 40px;
    line-height: 48px;
    color: #183B56;
  }
  .lav-intro__mark {
    position: relative;
    display: inline-block;
    font-weight: 900;
    font-size: 70px;
    line-height: 87px;
  }
  .lav-intro__mark:before {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(140%, -50%);
    background: url('${settings.dir}/img/icon-confiti.png') center no-repeat;
    background-size: contain;
    width: 65px;
    height: 65px;
  }
  .lav-intro__caption {
    margin-top: 8px;
    font-size: 20px;
    line-height: 30px;
    color: #5A7386;
  }
  .lav-intro__image {
    line-height: 0;
  }
  .lav-tick {
    position: relative;
    padding-left: 45px;
  }
  .lav-tick:before {
    content: '';
    position: absolute;
    top: -1px;
    left: 0;
    width: 29px;
    height: 29px;
    background: url('${settings.dir}/img/icon-tick.svg') center no-repeat;
    background-size: contain;
  }
  .lav-intro__btn {
  }
  .lav-intro {
    // content: '';
    // position: absolute;
    // top: -1px;
    // left: 0;
    // width: 29px;
    // height: 29px;
    // background: center no-repeat;
    // background-size: contain;
  }

  .lav-dis {
    background: #fff url('${settings.dir}/img/dis-dots.svg') left 30px no-repeat;
    padding-top: 56px;
    padding-bottom: 50px;
    text-align: center;
    color: #183B56;
  }
  .lav-dis__caption {
    margin-bottom: 15px;
    font-weight: 400;
    font-size: 30px;
    line-height: 1.2;
  }
  .lav-dis__title {
    font-size: 40px;
    line-height: 1.22;
  }
  .lav-dis__title span {
    font-weight: 700;
  }
  .lav-dis__list {
    display: flex;
    justify-content: space-between;
    margin: 75px -15px 0;
  }
  .lav-dis__col {
    padding: 0 15px;
    text-align: left;
    max-width: 370px;
  }
  .lav-dis__col:first-child {
    max-width: 340px;
  }
  .lav-dis__col:last-child {
    max-width: 300px;
  }
  .lav-dis__item {
    position: relative;
    font-weight: 400;
    font-size: 18px;
    line-height: 29px;
    color: #5F7384;
  }
  .lav-dis__item + .lav-dis__item {
    margin-top: 29px;
  }
  .lav-gifts {
    padding: 120px 0 110px;
    color: #183B56;
  }
  .lav-gifts__title {
    text-align: center;
    font-size: 80px;
    line-height: 94px;
    text-align: center;
  }
  .lav-gifts__title span {
    font-weight: 900;
  }
  .lav-gifts__caption {
    text-align: center;
    margin-top: 20px;
    font-size: 24px;
    line-height: 38px;
    color: #5A7386;
  }
  .lav-gifts__img {
    background: #FFFFFF;
    box-shadow: 0px 0.857534px 2.5726px rgba(24, 59, 86, 0.04), 0px 10.2904px 42.8767px rgba(63, 87, 180, 0.09);
    border-radius: 40px;
    padding: 65px;
    margin: 40px 0 50px;
    text-align: center;
  }
  .lav-gifts__img img {
    max-width: 733px;
  }
  .lav-master {
    text-align: center;
  }
  .lav-master__title {
    font-weight: 900;
    font-size: 50px;
    line-height: 62px;
    text-align: center;
  }
  .lav-master__title span {
    font-weight: 400;
  }
  .lav-master__list {
    margin-top: 40px;
    display: flex;
    margin-left: -15px;
    margin-right: -15px;
    font-size: 18px;
    line-height: 27px;
    color: #5F7384;
    text-align: left;
  }
  .lav-master__col {
    padding-left: 15px;
    padding-right: 15px;
  }
  .lav-master__item + .lav-master__item {
    margin-top: 30px;
  }
  .lav-master__label {
    margin: 30px auto 40px;
    display: inline-block;
  }
  .lav-gifts__btn-wrap {
    text-align: center;
  }
  .lav-grid {
    color: #183B56; 
    padding-bottom: 110px;
  }
  .lav-grid__row {
    display: flex;
    justify-content: space-between;
    margin-left: -15px;
    margin-right: -15px;
  }
  .lav-grid__row:nth-child(even) {
    flex-flow: row-reverse;
  }
  .lav-grid__row + .lav-grid__row {
    margin-top: 100px;
  }
  .lav-grid__info {
    max-width: 575px;
    padding: 0 15px;
  }
  .lav-grid__image {
    line-height: 0;
    padding: 0 15px;
  }
  .lav-grid__title {
    font-weight: 900;
    font-size: 36px;
    line-height: 45px;
    margin-bottom: 22px;
  }
  .lav-grid__title span {
    font-weight: 400;
  }
  .lav-grid__btn {
    margin-top: 20px;
  }
  .lav-grid__descr {
    font-weight: 400;
    font-size: 18px;
    line-height: 34px;
    color: #5A7386;
  }
  .lav-grid__descr + .lav-grid__descr {
    margin-top: 12px;
  }
  .lav-grid__note {
    display: inline-block;
    margin-top: 20px;
  }
  .lav-grid__note span {
    text-decoration: line-through;
    font-weight: 400;
  }
  .lav-grid__btn-wrap {
    margin-top: 40px;
    text-align: center;
  }
  .lav-grid__btn-wrap .lav-grid__btn {
    margin-top: 0;
  }
  .lav-total {
    color: #183B56;
    padding: 75px 0;
    background: #fff;
    text-align: center;
  }
  .lav-total__title {
    font-weight: 900;
    font-size: 80px;
    line-height: 100px;
    text-align: center;
  }
  .lav-total__image {
    margin-bottom: 20px;
    line-height: 0;
  }
  .lav-total__subtitle {
    font-weight: 600;
    font-size: 50px;
    line-height: 60px;
    margin-bottom: 22px;
  }
  .lav-total__caption {
    font-weight: 400;
    font-size: 24px;
    line-height: 38px;
    color: #5A7386;
  }
  .lav-total__chat {
    line-height: 0;
    margin-top: 50px;
    margin-bottom: 15px;
  }
  .lav-faq {
    color: #183B56;
    padding: 100px 0;
  }
  .lav-faq__title {
    font-weight: 900;
    font-size: 80px;
    line-height: 100px;
    text-align: center;
  }
  .lav-faq__btn-wrap {
    text-align: center;
    margin-top: 40px;
  }
  .lav-faq__list {
    margin-top: 50px;
    max-width: 730px;
    margin-left: auto;
    margin-right: auto;
  }
  .lav-faq__item {
    background: #FFFFFF;
    box-shadow: 0px 0.93065px 2.79195px rgba(24, 59, 86, 0.04), 0px 11.1678px 46.5325px rgba(63, 87, 180, 0.09);
    border-radius: 10px;
    padding: 25px 30px;
    cursor: pointer;
  }
  .lav-faq__item + .lav-faq__item {
    margin-top: 20px;
  }
  .lav-faq__head {
    position: relative;
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    padding-right: 25px;
  }
  .lav-faq__body {
    display: none;
    padding-top: 15px;
    font-size: 16px;
    line-height: 28px;
    color: #5A7386;
  }
  .lav-faq__item_active .lav-faq__body {
    display: block;
  }
  .lav-faq__head:before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: -5px;
    width: 18px;
    height: 18px;
    background: url('${settings.dir}/img/faq-icon.svg') center no-repeat;
    background-size: contain;
    transition: 0.3s;
  }
  .lav-faq__item_active .lav-faq__head:before {
    transform: translateY(-50%) rotate(45deg);
  }
  .lav-footer {
    background: #232323;
  }
  .lav-footer {}
  .lav-footer {}
  .lav-footer {}
  .lav-footer {}
  .lav-footer {}
`;

const newPage = `
  <div class='lav-header'>
    <div class='lav-header__inner'>
      <div class='lav-header__logo'>
        <img src='${settings.dir}/img/logo.png'>
      </div>
      <div class='lav-header__info'>
        <div class='lav-header__descr'>
          <span class='lav-mark'>40% Off</span> a 1 Year Subscription to the new<br/><span class='lav-mark'>SamCart Launch Plan&nbsp;-</span> <span class='lav-price_old'>$588.00</span> <span class='lav-mark'>$349.00</span>
        </div>
        <div class='lav-header__paypal'></div>
        <div class='lav-header__card'></div>
      </div>
      <button class='lav-btn lav-btn_trans lav-header__cta'>Start earning now</button>
    </div>
  </div>

  <div class='lav-wrap'>
    <div class='lav-section lav-intro'>
      <div class='lav-container'>
        <div class='lav-intro__congrate'>Congratulations!</div>
        <div class='lav-intro__mark'>You Made It!</div>
        <div class='lav-intro__caption'>You're about to get exclusive access to a proven system for launching your own 6-figure <br> online business with just 1 simple page!</div>

        <div class='lav-intro__image'>
          <img src='${settings.dir}/img/intro.png'>
        </div>

        <div class='lav-intro__btn-wrap'>
          <button class='lav-btn lav-btn_blue lav-intro__btn'>Start earning now</button>
        </div>
      </div>
    </div>

    <div class='lav-section lav-dis'>
      <div class='lav-container'>
        <div class='lav-dis__caption'>Get everything included below at one low price. </div>
        <div class='lav-dis__title'>Normally $588 <span>(Today Just $349)</span></div>
        <div class='lav-dis__list'>
          <div class='lav-dis__col'>
            <div class='lav-dis__item lav-tick'>Create unlimited pages</div>
            <div class='lav-dis__item lav-tick'>Sell unlimited products/services</div>
            <div class='lav-dis__item lav-tick'>Sell 1-time purchases, recuring subscriptions, payment plans & trials</div>
          </div>
          <div class='lav-dis__col'>
            <div class='lav-dis__item lav-tick'>Get all our pre-designed templates</div>
            <div class='lav-dis__item lav-tick'>Get tones of built-in integrations</div>
            <div class='lav-dis__item lav-tick'>Automatically deliver digital files</div>
            <div class='lav-dis__item lav-tick'>Pay no extra processing fees</div>
          </div>
          <div class='lav-dis__col'>
            <div class='lav-dis__item lav-tick'>Built-in tax support</div>
            <div class='lav-dis__item lav-tick'>See your sales in real-time</div>
            <div class='lav-dis__item lav-tick'>Amazing customer support</div>
          </div>
        </div>
      </div>
    </div>

    <div class='lav-section lav-gifts'>
      <div class='lav-container'>
        <div class='lav-gifts__title'>Plus, <span>Get $15,656 in FREE</span> gifts!</div>
        <div class='lav-gifts__caption'>When you try SamCart today, we will add these gifts to your order...</div>
        <div class='lav-gifts__img'>
          <img src="https://samcart-foundation-prod.s3.amazonaws.com/marketplace-4554/assets/92a2f05f-0a0a-4c86-a2e3-3262659bfdca" alt="Your Image">
        </div>

        <div class='lav-master'>
          <div class='lav-master__title'>The 1 Page Masterclass<span>™</span></div>
          <div class='lav-master__list'>
            <div class='lav-master__col'>
              <div class='lav-master__item lav-tick'>My simple product creation secrets that help me quickly create amazing products that people line up to buy</div>
              <div class='lav-master__item lav-tick'>The 7 parts of the 1 Page Blueprint so your page is ready to convert at the highest levels</div>
              <div class='lav-master__item lav-tick'>All of my traffic-generation secrets that I use to get over 20,000 visitors to my pages every single day</div>
            </div>
            <div class='lav-master__col'>
              <div class='lav-master__item lav-tick'>Over 30 videos, showing you how to build a profitable online business from complete scratch and get it to the 6 and 7 figure level in record time...</div>
              <div class='lav-master__item lav-tick'>Cheat sheets, scripts & templates that will speed up the process of creating products, building your page, making ads and landing sales.</div>
            </div>
          </div>
          <div class='lav-master__label lav-white-label'>Normally $4,995.00 - Yours FREE!</div>
        </div>
        
        <div class='lav-gifts__btn-wrap'>
          <button class='lav-btn lav-btn_blue lav-gifts__btn'>Start earning now</button>
        </div>
      </div>
    </div>

    <div class='lav-section lav-grid'>
      <div class='lav-container'>
        <div class='lav-grid__row'>
          <div class='lav-grid__info'>
            <div class='lav-grid__title'>The 1 Page Workshop<span>™</span></div>
            <div class='lav-grid__descr'>I break down each of the 7 steps of my blueprint so you know exactly how to apply each one to YOUR product. Plus, you get to watch as I run through examples of actual customers who are using the Blueprint with mind-blowing results.</div>
            <div class='lav-grid__note lav-white-label'>A <span>$199.00</span> Value- Yours FREE!</div>
          </div>
          <div class='lav-grid__image'>
            <img src='${settings.dir}/img/grid1.png'>
          </div>
        </div>
        
        <div class='lav-grid__row'>
          <div class='lav-grid__info'>
            <div class='lav-grid__title'>Traffic Tactics<span>™</span></div>
            <div class='lav-grid__descr'>Discover how to get unlimited traffic from Facebook, YouTube, Instagram, Podcasting, SEO, Content Marketing, Facebook Ads, YouTube Ads, Google Ads, and the list goes on and on.</div>
            <div class='lav-grid__note lav-white-label'>Normally <span>$1,997.00</span> - Yours FREE!</div>
            <button class='lav-btn lav-btn_blue lav-grid__btn'>Start earning now</button>
          </div>
          <div class='lav-grid__image'>
            <img src='${settings.dir}/img/grid2.png'>
          </div>
        </div>

        <div class='lav-grid__row'>
          <div class='lav-grid__info'>
            <div class='lav-grid__title'>1 Page Launch<span>™</span></div>
            <div class='lav-grid__descr'>Discover how to pull off a 5 or 6-figure product launch with nothing but your one page!</div>
            <div class='lav-grid__note lav-white-label'>Normally <span>$1,997.00</span> - Yours FREE!</div>
          </div>
          <div class='lav-grid__image'>
            <img src='${settings.dir}/img/grid3.png'>
          </div>
        </div>

        <div class='lav-grid__row'>
          <div class='lav-grid__info'>
            <div class='lav-grid__title'>The $237k Swipe File<span>™</span></div>
            <div class='lav-grid__descr'>Get all of our best performing pages, video scripts, templates, emails, ads, and sales messages...so you have an endless supply of ideas for selling your own product or service!</div>
            <div class='lav-grid__note lav-white-label'>A <span>$2,997.00</span> Value- Yours FREE!</div>
          </div>
          <div class='lav-grid__image'>
            <img src='${settings.dir}/img/grid4.png'>
          </div>
        </div>

        <div class='lav-grid__row'>
          <div class='lav-grid__info'>
            <div class='lav-grid__title'>Product Creation Masterclass<span>™</span></div>
            <div class='lav-grid__descr'>Discover how to quickly create your first product in less than 72 hours. Get our simple frameworks for deciding on your niche, your product, the name, the price and everything else so you don't have to worry about doing any of it yourself!</div>
            <div class='lav-grid__note lav-white-label'>A <span>$497.00</span> Value- Yours FREE!</div>
            <button class='lav-btn lav-btn_blue lav-grid__btn'>Start earning now</button>
          </div>
          <div class='lav-grid__image'>
            <img src='${settings.dir}/img/grid5.png'>
          </div>
        </div>

        <div class='lav-grid__row'>
          <div class='lav-grid__info'>
            <div class='lav-grid__title'>My "Product Vault" <span>(New!)</span></div>
            <div class='lav-grid__descr'>Over the last 10 years, I’ve created dozens of reports in a bunch of different niches...and used them to make millions of dollars.</div>
            <div class='lav-grid__descr'>And my guess is, you would learn a ton by seeing all of those actual reports that I sold...plus the pages that I created to sell them. So I’ve decided to release them all from the vault, and give you full access to all of them.</div>
            <div class='lav-grid__note lav-white-label'>Not Normally Sold - Yours FREE!</div>
          </div>
          <div class='lav-grid__image'>
            <img src='${settings.dir}/img/grid6.png'>
          </div>
        </div>

        <div class='lav-grid__row'>
          <div class='lav-grid__info'>
            <div class='lav-grid__title'>The Private Facebook Group<span>™</span></div>
            <div class='lav-grid__descr'>Join over 25,000+ other entreprenuers in our exclusive group so you can network and build relationships with the top sellers on the internet. Get questions answered, brainstorm ideas, and get results faster than ever with this community by your side.</div>
            <div class='lav-grid__note lav-white-label'>A <span>$1,997.00</span> Value- Yours FREE!</div>
          </div>
          <div class='lav-grid__image'>
            <img src='${settings.dir}/img/grid7.png'>
          </div>
        </div>

        <div class='lav-grid__row'>
          <div class='lav-grid__info'>
            <div class='lav-grid__title'>1 Page Wednesday<span>™</span> Calls</div>
            <div class='lav-grid__descr'>Watch me take a page that’s underperforming and tweak it so that it starts turning visitors into paying customers on autopilot.</div>
            <div class='lav-grid__note lav-white-label'>A <span>$497.00</span> Value - Yours FREE!</div>
            <button class='lav-btn lav-btn_blue lav-grid__btn'>Start earning now</button>
          </div>
          <div class='lav-grid__image'>
            <img src='${settings.dir}/img/grid8.png'>
          </div>
        </div>

        <div class='lav-grid__row'>
          <div class='lav-grid__info'>
            <div class='lav-grid__title'>Expert Bonus Trainings<span>™</span> <span>(New!)</span></div>
            <div class='lav-grid__descr'>Discover the secrets used by our top sellers at SamCart, that they don't share anywhere else. Learn from Nicole Walters, Mike Dillard, James Wedmore, Kim Jimenez, Tori Torres, Rocky Ullah, and many more!</div>
            <div class='lav-grid__note lav-white-label'>Normally Not Sold - Yours FREE!</div>
          </div>
          <div class='lav-grid__image'>
            <img src='${settings.dir}/img/grid9.png'>
          </div>
        </div>

        <div class='lav-grid__row'>
          <div class='lav-grid__info'>
            <div class='lav-grid__title'>NEW BONUS - My Personal Page Template<span>™</span></div>
            <div class='lav-grid__descr'>Listen, if you and I were to both launch an identical product to an identical audience, I would beat you by several times over...Why?</div>
            <div class='lav-grid__descr'>Because whenever I launch a new product or offer I NEVER start from scratch... I use this 1-Page template that has been tweaked, tested, and designed to convert at 40 to 50 times what the average website does as my starting point.</div>
            <div class='lav-grid__descr'>I simply update the text and images to fit my new product and I'm done.</div>
            <div class='lav-grid__descr'>I literally cannot go wrong, and now you can't either.</div>
            <div class='lav-grid__descr'>This proven template is yours as my gift when you take advantage of this offer today.</div>
            <div class='lav-grid__note lav-white-label'>Not Normally Sold - Yours FREE!</div>
          </div>
          <div class='lav-grid__image'>
            <img src='${settings.dir}/img/grid10.png'>
          </div>
        </div>

        <div class='lav-grid__btn-wrap'>
          <button class='lav-btn lav-btn_blue lav-grid__btn'>Start earning now</button>
        </div>
      </div>
    </div>

    <div class='lav-section lav-total'>
      <div class='lav-container'>
        <div class='lav-total__title'>A total value of over $15,656!</div>
        <div class='lav-total__image'>
          <img src='${settings.dir}/img/total-image.png'>
        </div>
        <div class='lav-total__subtitle'>"How do I know this is for real?"</div>
        <div class='lav-total__caption'>
          I totally understand the skepticism. There are a lot of fakes out there, but there are 24,812 real people inside this community whose lives have been changed by this program. Here are just a few...
        </div>
        <div class='lav-total__chat'>
          <img src='${settings.dir}/img/total-chat.png'>
        </div>

        <div class='lav-total__btn-wrap'>
          <button class='lav-btn lav-btn_blue lav-total__btn'>Start earning now</button>
        </div>
      </div>
    </div>

    <div class='lav-video'>
      <div class='lav-container'>
      </div>
    </div>

    <div class='lav-section lav-faq'>
      <div class='lav-container'>
        <div class='lav-faq__title'>You might be thinking...</div>
        <div class='lav-faq__list'>
          <div class='lav-faq__item'>
            <div class='lav-faq__head'>Am I locked into a subscription?</div>
            <div class='lav-faq__body'>Absolutely not! You're never locked into any subscription or long-term contract with SamCart.</div>
          </div>
          <div class='lav-faq__item'>
            <div class='lav-faq__head'>What if I don't have a product?</div>
            <div class='lav-faq__body'>That's totally fine! We'll walk you through how to create your first product in a matter of days with just $100.</div>
          </div>
          <div class='lav-faq__item'>
            <div class='lav-faq__head'>What types of products does this work for?</div>
            <div class='lav-faq__body'>SamCart's pages support and work for any type of product you want to sell. You can sell digital products like ebooks and online courses, physical products like t-shirts or skateboards, and even services like custom web design or coaching. You can charge 1-time payments...recurring subscriptions...fixed payment plans...free trials...paid trials...and anything in between.</div>
          </div>
          <div class='lav-faq__item'>
            <div class='lav-faq__head'>How long does this 40% discount last?</div>
            <div class='lav-faq__body'>This discount is only valid for today. After that, you'll have to pay $588 per year for SamCart...and you won't get any of these bonuses. So act now!</div>
          </div>
          <div class='lav-faq__item'>
            <div class='lav-faq__head'>Do I need any other tools?</div>
            <div class='lav-faq__body'>The good news about this approach is that you only need a couple things. And I’m giving you all of those things, so no...you don’t need anything else. There are always other tools that help as you grow...and I’ll show you my favorite tools for getting critical tasks done...but there is not going to be some other big investment needed to make this work...so don’t worry!</div>
          </div>
          <div class='lav-faq__item'>
            <div class='lav-faq__head'>Is there a payment plan?</div>
            <div class='lav-faq__body'>No there is not a payment plan right now since it wouldn’t be fair to the other people paying for SamCart...plus the price is already so low, at just $349. But if you want to break it up into payments, just use a credit card or use PayPal Credit on this page.</div>
          </div>
          <div class='lav-faq__item'>
            <div class='lav-faq__head'>What happens my SamCart yearly subscription renews?</div>
            <div class='lav-faq__body'>After your first year, if you want to keep using SamCart, you can continue using it and you will be grandfathered into this 40% discounted rate for as long as you’re a customer. You can always change to monthly billing, or upgrade to another plan if you want...it’s totally up to you...since we never force you into long term contracts or commitments.</div>
          </div>
          <div class='lav-faq__item'>
            <div class='lav-faq__head'>Will this work with my current website?</div>
            <div class='lav-faq__body'>If you already have a website or blog, this is the perfect addition to that site. You can create your page with SamCart and link to it from your blog sidebar, or the navigation at the top of bottom of your site, or even from each individual blog post...so that people can easily find your product and buy it. You can even make your page show up on the same URL so people don’t get confused.</div>
          </div>
          <div class='lav-faq__item'>
            <div class='lav-faq__head'>Can I sell things other than digital products?</div>
            <div class='lav-faq__body'>Totally. We have tens of thousands of business selling skateboards, custom web design, coaching programs, live events, tshirts, and the list goes on and on. SamCart supports absolutely any type of product, and the 1 Page Masterclass works no matter what you’re selling...I just highly recommend that you start with digital products if you’re not sure where to start...because that’s the easiest way to start making real money online...but in the end, it’s up to you.</div>
          </div>
        </div>
        <div class='lav-faq__btn-wrap'>
          <button class='lav-btn lav-btn_blue lav-faq__btn'>Start earning now</button>
        </div>
      </div>
    </div>
  </div>
  <div class='lav-footer'>
    <div class='lav-container'>
      <div class='lav-faq__title'>You might be thinking...</div>
      <div class='lav-faq__btn-wrap'>
        <button class='lav-btn lav-btn_blue lav-faq__btn'>Start earning now</button>
      </div>
    </div>
  </div>
`;

const stylesEl = document.createElement('style');
stylesEl.innerHTML = styles;
document.body.appendChild(stylesEl);
/*** STYLES / end ***/

/********* Custom Code **********/
init();
function init() {
  console.log('init');
  document.querySelector('header').insertAdjacentHTML('afterend', newPage);
  for (let item of document.querySelectorAll('.lav-faq__item')) {
    item.addEventListener('click', function () {
      item.classList.toggle('lav-faq__item_active');
    });
  }

  for (let item of document.querySelectorAll('.lav-btn_blue')) {
    item.addEventListener('click', function () {
      location.href =
        'https://checkout.samcart.com/products/courses-special-offer-subscribe/';
    });
  }
}
