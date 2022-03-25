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
    src: url("${settings.dir}/Gilroy/Gilroy-black.woff") format("woff"),
      url("${settings.dir}/Gilroy/Gilroy-black.ttf") format("truetype");
    font-weight: 900;
    font-style: normal;
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
    max-width: 1110px;
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
  }
  .lav-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    padding: 17px 0;
    background: #fff;
    border-bottom: 1px solid  rgb(90 115 134 / 20%)
  }
  .lav-header__inner {
    padding-left: 50px;
    padding-right: 50px;
    display: flex;
    align-items; center;
    justify-content: space-between;
  }
  .lav-header__logo {
    line-height: 0;
  }
  .lav-header__logo img {
    max-width: 145px;
  }
  .lav-intro {
    text-align: center;
    color: #183B56;
    background: url('${settings.dir}/img/intro-lines.png') center no-repeat;
    background-size: 100% auto;
    padding: 50px 0 100px;
  }
  .lav-intro__congrate {
    font-weight: 600;
    font-size: 40px;
    line-height: 48px;
    color: #183B56;
  }
  .lav-intro__mark {
    font-weight: 900;
    font-size: 70px;
    line-height: 87px;
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
    padding-left: 49px;
  }
  .lav-tick:before {
    content: '';
    position: absolute;
    top: -3px;
    left: 0;
    width: 29px;
    height: 29px;
    background: url('${settings.dir}/img/icon-tick.svg') center no-repeat;
    background-size: contain;
  }
  .lav-intro__btn {
  }
  .lav-intro {
  }

  .lav-dis {
    background: #fff;
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
    margin-top: 80px;
    display: flex;
    justify-content: space-between;
    margin: 80px -15px 0;
  }
  .lav-dis__col {
    padding: 0 15px;
    text-align: left;
    max-width: 355px;
  }
  .lav-dis__col:first-child {
    max-width: 320px;
  }
  .lav-dis__col:last-child {
    max-width: 275px;
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
`;

const newPage = `
  <div class='lav-header'>
    <div class='lav-header__inner'>
      <div class='lav-header__logo'>
        <img src='https://s3.amazonaws.com/samcart-foundation-prod/marketplace-4554/assets/imEWEXr7ri3qUcGA.png'>
      </div>
      <div class='lav-header__info'>
        <div class='lav-header__descr'>
          <span class='mark'>40% Off</span> a 1 Year Subscription to the new<br/><span class='lav-mark'>SamCart Launch Plan&nbsp;-</span> <span class='lav-price_old'>$588.00</span> <span class='mark'>$349.00</span>
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
        <img class='lav-gifts__img' src="https://samcart-foundation-prod.s3.amazonaws.com/marketplace-4554/assets/92a2f05f-0a0a-4c86-a2e3-3262659bfdca" alt="Your Image">

        <div class='lav-master'>
          <div class='lav-master__title'>The 1 Page Masterclass™</div>
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
          <div class='lav-master__caption'>Normally $4,995.00 - Yours FREE!</div>
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
            <div class='lav-grid__title'>The 1 Page Workshop™</div>
            <div class='lav-grid__descr'>I break down each of the 7 steps of my blueprint so you know exactly how to apply each one to YOUR product. Plus, you get to watch as I run through examples of actual customers who are using the Blueprint with mind-blowing results.</div>
            <div class='lav-grid__note'>A $199.00 Value- Yours FREE!</div>
          </div>
          <div class='lav-grid__image'>
            <img src='${settings.dir}/img/grid1.png'>
          </div>
        </div>
        
        <div class='lav-grid__row'>
          <div class='lav-grid__info'>
            <div class='lav-grid__title'>Traffic Tactics™</div>
            <div class='lav-grid__descr'>Discover how to get unlimited traffic from Facebook, YouTube, Instagram, Podcasting, SEO, Content Marketing, Facebook Ads, YouTube Ads, Google Ads, and the list goes on and on.</div>
            <div class='lav-grid__note'>Normally $1,997.00 - Yours FREE!</div>
          </div>
          <div class='lav-grid__image'>
            <img src='${settings.dir}/img/grid2.png'>
          </div>
        </div>

        <div class='lav-grid__row'>
          <div class='lav-grid__info'>
            <div class='lav-grid__title'>1 Page Launch™</div>
            <div class='lav-grid__descr'>Discover how to pull off a 5 or 6-figure product launch with nothing but your one page!</div>
            <div class='lav-grid__note'>Normally $1,997.00 - Yours FREE!</div>
          </div>
          <div class='lav-grid__image'>
            <img src='${settings.dir}/img/grid3.png'>
          </div>
        </div>

        <div class='lav-grid__row'>
          <div class='lav-grid__info'>
            <div class='lav-grid__title'>The $237k Swipe File™</div>
            <div class='lav-grid__descr'>Get all of our best performing pages, video scripts, templates, emails, ads, and sales messages...so you have an endless supply of ideas for selling your own product or service!</div>
            <div class='lav-grid__note'>A $2,997.00 Value- Yours FREE!</div>
          </div>
          <div class='lav-grid__image'>
            <img src='${settings.dir}/img/grid4.png'>
          </div>
        </div>

        <div class='lav-grid__row'>
          <div class='lav-grid__info'>
            <div class='lav-grid__title'>The 1 Page Workshop™</div>
            <div class='lav-grid__descr'>Get all of our best performing pages, video scripts, templates, emails, ads, and sales messages...so you have an endless supply of ideas for selling your own product or service!</div>
            <div class='lav-grid__note'>A $497.00 Value- Yours FREE!</div>
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
            <div class='lav-grid__note'>Not Normally Sold - Yours FREE!</div>
          </div>
          <div class='lav-grid__image'>
            <img src='${settings.dir}/img/grid6.png'>
          </div>
        </div>

        <div class='lav-grid__row'>
          <div class='lav-grid__info'>
            <div class='lav-grid__title'>The Private Facebook Group™</div>
            <div class='lav-grid__descr'>Join over 25,000+ other entreprenuers in our exclusive group so you can network and build relationships with the top sellers on the internet. Get questions answered, brainstorm ideas, and get results faster than ever with this community by your side.</div>
            <div class='lav-grid__note'>A $1,997.00 Value- Yours FREE!</div>
          </div>
          <div class='lav-grid__image'>
            <img src='${settings.dir}/img/grid7.png'>
          </div>
        </div>

        <div class='lav-grid__row'>
          <div class='lav-grid__info'>
            <div class='lav-grid__title'>1 Page Wednesday™ Calls</div>
            <div class='lav-grid__descr'>Watch me take a page that’s underperforming and tweak it so that it starts turning visitors into paying customers on autopilot.</div>
            <div class='lav-grid__note'>A $497.00 Value - Yours FREE!</div>
          </div>
          <div class='lav-grid__image'>
            <img src='${settings.dir}/img/grid8.png'>
          </div>
        </div>

        <div class='lav-grid__row'>
          <div class='lav-grid__info'>
            <div class='lav-grid__title'>Expert Bonus Trainings™ <span>(New!)</span></div>
            <div class='lav-grid__descr'>Discover the secrets used by our top sellers at SamCart, that they don't share anywhere else. Learn from Nicole Walters, Mike Dillard, James Wedmore, Kim Jimenez, Tori Torres, Rocky Ullah, and many more!</div>
            <div class='lav-grid__note'>Normally Not Sold - Yours FREE!</div>
          </div>
          <div class='lav-grid__image'>
            <img src='${settings.dir}/img/grid9.png'>
          </div>
        </div>

        <div class='lav-grid__row'>
          <div class='lav-grid__info'>
            <div class='lav-grid__title'>NEW BONUS - My Personal Page Template™</div>
            <div class='lav-grid__descr'>Listen, if you and I were to both launch an identical product to an identical audience, I would beat you by several times over...Why?</div>
            <div class='lav-grid__descr'>Because whenever I launch a new product or offer I NEVER start from scratch... I use this 1-Page template that has been tweaked, tested, and designed to convert at 40 to 50 times what the average website does as my starting point.</div>
            <div class='lav-grid__descr'>I simply update the text and images to fit my new product and I'm done.</div>
            <div class='lav-grid__descr'>I literally cannot go wrong, and now you can't either.</div>
            <div class='lav-grid__descr'>This proven template is yours as my gift when you take advantage of this offer today.</div>
            <div class='lav-grid__note'>Not Normally Sold - Yours FREE!</div>
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
    <div class='lav-section'>
      <div class='lav-container'>
      
      </div>
    </div>
    <div class='lav-section'>
      <div class='lav-container'>
      
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
  document.querySelector('header').insertAdjacentHTML('afterend', newPage);
  console.log('init');
}
