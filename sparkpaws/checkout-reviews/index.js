console.log('initExp');

/********* Settings **********/
const settings = {
  dir: 'https://flopsi69.github.io/crs/sparkpaws/checkout-reviews',
  clarity: false,
  observe: false,
};

//Clarity
if (settings.clarity) {
  const clarityInterval = setInterval(function () {
    if (typeof clarity == 'function') {
      clearInterval(clarityInterval);
      clarity('set', '', 'variant_1');
    }
  }, 1000);
}

// Alalytic 3
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
  } catch (e) {
    console.log('Event Error:', e);
  }
}

// Alalytic 4
function gaEvent(name = '', desc = '', type = '', loc = '') {
  try {
    var objData = {
      event: 'event-to-ga4',
      event_name: name,
      event_desc: desc,
      event_type: type,
      event_loc: loc,
    };
    console.dir('eventFire', objData.eventAction);
    dataLayer.push(objData);
  } catch (e) {
    console.log('Event Error:', e);
  }
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
  header + aside + div > div > div:first-child div {
    justify-content: flex-start;
  }

  .lav-benefits {
    color: #5C5555;
    margin: 24px 0;
  }
  .lav-benefit {
    padding: 12px 0;
    display: flex;
    align-items: center;
  }
  .lav-benefit__icon {
    flex-shrink: 0;
    line-height: 0;
  }
  .lav-benefit + .lav-benefit {
    border-top: 1px solid #E7E7E7;
  }
  .lav-benefit__info {
    margin-left: 12px;
  }
  .lav-benefit__title {
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
  }
  .lav-benefit__caption {
    margin-top: 4px;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
  }
  .lav-benefit:first-child {
    padding-top: 0;
  }
  .lav-benefit:last-child {
    padding-bottom: 0;
  }

  .lav-shelters {
    margin-top: 40px;
  }
  .lav-shelters__title {
    font-weight: 400;
    font-size: 22px;
    line-height: 30px;
    color: #5C5555;
  }
  .lav-shelters__list {
    border: 1px solid #E7E7E7;
    margin-top: 18px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
  .lav-shelter {
    display: flex;
    min-height: 108px;
    justify-content: center;
    align-items: center;
    line-height: 0;
  }
  .lav-shelter img {
    max-width: 72px;
    max-height: 72px;
  }
  .lav-shelter + .lav-shelter {
    border-left: 1px solid #E7E7E7;
  }

  .lav-reviews {
    margin-top: 40px;
    color: #5C5555;
  }
  .lav-reviews__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .lav-reviews__title {
    font-weight: 400;
    font-size: 22px;
    line-height: 30px;
  }
  .lav-reviews__stars {
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 14px;
    line-height: 1;
    color: #1C1B1B;
  }
  .lav-reviews__stars img {
    margin-right: 8px;
  }
  .lav-reviews__list {
    margin-top: 18px;
  }
  .lav-review {
    display: flex;
    background: #FFFFFF;
    overflow: hidden;
    box-shadow: 0px 6px 14px -4px rgba(0, 0, 0, 0.14);
    border-radius: 7px;
    min-height: 190px;
  }
  .lav-review + .lav-review {
    margin-top: 24px;
  }
  .lav-review__img {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    min-width: 200px;
    flex-shrink: 0;
    border-radius: 8px;
  }
  .lav-review__info {
    padding: 18px;
  }
  .lav-review__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .lav-review__name {
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    color: #1C1B1B;
  }
  .lav-review__name img {
    margin-left: 8px;
  }
  .lav-review__descr {
    margin-top: 12px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }
  .lav-review__hide {
    display: none;
  }
  .lav-review__toggle {
    display: inline-block;
    color: #344D79;
    font-weight: 500;
    font-size: 14px;
    line-height: 1;
    border-bottom: 1px solid #344D79;
    transition: 0.35s;
    cursor: pointer;
  }
  .lav-review__toggle:hover {
    opacity: 0.7;
  }

  @media(max-width: 999px) {
    .lav-benefits {
      margin-top: 0;
      padding: 0 24px;
    }
    .lav-benefit__title {
      color: #1C1B1B;
    }
    .lav-benefit {
      align-items: flex-start;
    }

    .lav-shelters {
      margin-top: 0;
    }
    .lav-shelters__title {
      text-align: center;
    }
    .lav-shelters__list {
      margin-top: 16px;
      grid-template-columns: repeat(2, 1fr);
      border: none;
    }
    .lav-shelter:nth-child(3) {
      border-left: none;
      border-top: 1px solid #E7E7E7;
    }
    .lav-shelter:nth-child(4) {
      border-top: 1px solid #E7E7E7;
    }
    .lav-shelter img {
      max-width: 119px;
      max-height: 119px;;
    }
    .lav-shelter {
      padding: 10px;
      min-height: 163px;
    }

    .lav-reviews {
      margin-top: 0;
      margin-bottom: 20px;
    }
    .lav-reviews__list {
      margin-top: 16px;
    }
    .lav-review {
      display: block;
      min-height: auto;
    }
    .lav-review__img {
      min-height: 238px;
    }
    .lav-review + .lav-review {
      margin-top: 22px;
    }
    .lav-review__descr br {
      display: none;
    }
  }
`;

const stylesEl = document.createElement('style');
stylesEl.innerHTML = styles;
document.body.appendChild(stylesEl);
/*** STYLES / end ***/

/********* Custom Code **********/
init();
function init() {
  console.log('init');
  initBenefits();
  initReviews();
}

function initBenefits() {
  let el = `
    <div class='lav-benefits'>
      <div class='lav-benefit'>
        <div class='lav-benefit__icon'>
          <img src="${settings.dir}/img/benefit1.svg" />
        </div>
        <div class='lav-benefit__info'>
          <div class='lav-benefit__title'>30 Day Return & Exchange</div>
          <div class='lav-benefit__caption'>You may return or exchange purchased items within 30 days, hassle free</div>
        </div>
      </div>

      <div class='lav-benefit'>
        <div class='lav-benefit__icon'>
          <img src="${settings.dir}/img/benefit2.svg" />
        </div>
        <div class='lav-benefit__info'>
          <div class='lav-benefit__title'>Full Coverage Shipping Worldwide</div>
          <div class='lav-benefit__caption'>We will replace your package for FREE if it gets lost during shipping</div>
        </div>
      </div>

      <div class='lav-benefit'>
        <div class='lav-benefit__icon'>
          <img src="${settings.dir}/img/benefit3.svg" />
        </div>
        <div class='lav-benefit__info'>
          <div class='lav-benefit__title'>Premium Quality & Safety Tested</div>
          <div class='lav-benefit__caption'>All of our products are premium quality and tested under strict standards</div>
        </div>
      </div>
    </div>
  `;

  if (window.innerWidth > 1000) {
    document
      .querySelector('header + aside + div > div > div')
      .insertAdjacentHTML('afterend', el);
  } else {
    document
      .querySelector('header[role="banner"]')
      .insertAdjacentHTML('afterend', el);
  }
}

function initReviews() {
  let isMob = '-mob';
  if (window.innerWidth > 1000) {
    isMob = '';
  }
  let el = `
    <div class='lav-shelters'>
      <div class='lav-shelters__title'>Every purchase feeds sheltered&nbsp;dogs</div>

      <div class='lav-shelters__list'>
        <div class='lav-shelter'>
            <img src="${settings.dir}/img/shelter1.png" />
        </div>
        <div class='lav-shelter'>
            <img src="${settings.dir}/img/shelter2.png" />
        </div>
        <div class='lav-shelter'>
            <img src="${settings.dir}/img/shelter3.png" />
        </div>
        <div class='lav-shelter'>
            <img src="${settings.dir}/img/shelter4.png" />
        </div>
      </div>
    </div>

    <div class='lav-reviews'>
      <div class='lav-reviews__head'>
        <div class='lav-reviews__title'>Reviews</div>
        <div class='lav-reviews__stars'>
          <img src="${settings.dir}/img/stars.svg" />
          33,002 Reviews
        </div>
      </div>

      <div class='lav-reviews__list'>
        <div class='lav-review'>
          <div class='lav-review__img' style='background-image: url(${settings.dir}/img/review1${isMob}.png)'></div>

          <div class='lav-review__info'>
            <div class='lav-review__head'>
              <div class='lav-review__name'>
                Dani D. 
                <img class='lav-review__stars' src="${settings.dir}/img/check.svg" />
              </div>

              <img class='lav-review__stars' src="${settings.dir}/img/stars.svg" />
            </div>

            <div class='lav-review__descr'>
              I LOVE the fun, retro colors of the matching leash, collar, and doo doo bag. An unexpected bonus is that they included FREE doo doo bags, which was an appreciated surprise. The material is top notch high quality and heavy duty (not flimsy<span class='lav-review__dots'>... <br/></span> <span class='lav-review__hide'> whatsoever), which is essential with bigger breads. My 65 lb bulldog usually yanks my kiddos around on a leash, but the Spark Paws leash/collar gave them more control. Additionally, while out on a walk, 2 unfamiliar dogs approached us, but I was able to use the handle on the collar to hold my dog back. This is our first time using neoprene material and I'll never use anything else- it's comfortable not only for your dog, but also for you! My skin often gets irritated from our other dog leash, but I had no problems with the Spark Paws set. Even the doo doo bag is a soft cozy material! Highly recommend!</span><span class='lav-review__toggle'>Read more</span>
            </div>
          </div>
        </div>

        <div class='lav-review'>
          <div class='lav-review__img' style='background-image: url(${settings.dir}/img/review2${isMob}.png)'></div>

          <div class='lav-review__info'>
            <div class='lav-review__head'>
              <div class='lav-review__name'>
                Kara M.
                <img class='lav-review__stars' src="${settings.dir}/img/check.svg" />
              </div>

              <img class='lav-review__stars' src="${settings.dir}/img/stars.svg" />
            </div>

            <div class='lav-review__descr'>
              The hoodies are SO SOFT!! I am a 5'4", 125lb woman, and the small fit perfectly. My fiance, a 5'7", 135lb man, felt like the small was a little shorter than he prefers, but he still likes it and didn't size up. We get so many compliments! Would definitely shop here again.
            </div>
          </div>
        </div>

        <div class='lav-review'>
          <div class='lav-review__img' style='background-image: url(${settings.dir}/img/review3${isMob}.png)'></div>

          <div class='lav-review__info'>
            <div class='lav-review__head'>
              <div class='lav-review__name'>
                Robin
                <img class='lav-review__stars' src="${settings.dir}/img/check.svg" />
              </div>

              <img class='lav-review__stars' src="${settings.dir}/img/stars.svg" />
            </div>

            <div class='lav-review__descr'>
              The most durable collar we’ve ever used! The handle for emergencies is perfect for my service dog! Plus, he looks super handsome in the gradient colors!
            </div>
          </div>
        </div>

        <div class='lav-review'>
          <div class='lav-review__img' style='background-image: url(${settings.dir}/img/review4${isMob}.png)'></div>

          <div class='lav-review__info'>
            <div class='lav-review__head'>
              <div class='lav-review__name'>
                Mark R.
                <img class='lav-review__stars' src="${settings.dir}/img/check.svg" />
              </div>

              <img class='lav-review__stars' src="${settings.dir}/img/stars.svg" />
            </div>

            <div class='lav-review__descr'>
              Was a bit sceptical when this site popped up, but read the reviews (&nbsp;some Bad & some Good&nbsp;) but looked at the items and the site, still decided to give it a try & Absolutely Fantastic!!! The items are of great quality and the materials used are great<span class='lav-review__dots'>...</span> <span class='lav-review__hide'>quality and the materials used are great. People have moaned about the delivery,but they are definitely worth the wait, from ordering to confirmation to delivery was 8 days, not a problem as the items are good, I am sure people have had problems,but even Amazon has issues from time to time.Great site.</span> <span class='lav-review__toggle'>Read more</span>
            </div>
          </div>
        </div>

        <div class='lav-review'>
          <div class='lav-review__img' style='background-image: url(${settings.dir}/img/review5${isMob}.png)'></div>

          <div class='lav-review__info'>
            <div class='lav-review__head'>
              <div class='lav-review__name'>
                Maryellen S.
                <img class='lav-review__stars' src="${settings.dir}/img/check.svg" />
              </div>

              <img class='lav-review__stars' src="${settings.dir}/img/stars.svg" />
            </div>

            <div class='lav-review__descr'>
              Logan is a 95 lb American Pitbull Terrier wearing a size 4XL. It fits him great and the sweatshirt is well made. Most toys are destroyed in 5 minutes so the design and saying is very funny. It certainly applies to him. It was shipped quickly and is reasonably priced. This is the 2nd sweatshirt from Spark Paws.
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  if (window.innerWidth > 1000) {
    document
      .querySelector('footer[role="contentinfo"]')
      .insertAdjacentHTML('beforebegin', el);
  } else {
    document.querySelector('#checkout-main').insertAdjacentHTML('afterend', el);

    // for (let el of document.querySelectorAll('.lav-review__img')) {
    //   el.style.backgroundImage = el.style.backgroundImage.replace(
    //     '.png',
    //     '-mob.png'
    //   );
    // }
  }

  for (let toggleEl of document.querySelectorAll('.lav-review__toggle')) {
    toggleEl.addEventListener('click', function (e) {
      e.preventDefault();
      let parentEl = this.closest('.lav-review');

      if (window.innerWidth > 1000) {
        parentEl.querySelector('.lav-review__img').style.backgroundImage =
          parentEl
            .querySelector('.lav-review__img')
            .style.backgroundImage.replace('.png', '-zoom.png');
      }

      parentEl
        .querySelector('.lav-review__hide')
        .classList.remove('lav-review__hide');

      parentEl.querySelector('.lav-review__dots').remove();
      this.remove();
    });
  }
}
