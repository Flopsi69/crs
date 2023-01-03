console.log('JS GO Started!');

/********* Settings **********/
const settings = {
  dir: 'https://flopsi69.github.io/crs/myluminette/newhome2',
  clarity: false,
  observe: false,
};

// Clarity
if (settings.clarity) {
  const clarityInterval = setInterval(function () {
    if (typeof clarity == 'function') {
      clearInterval(clarityInterval);
      clarity('set', 'new_home_page_layout', 'variant_1');
    }
  }, 1000);
}

// Alalytics
function gaEvent(action, label) {
  return false;
  if (!label) {
    label = '';
  }
  try {
    var objData = {
      event: 'event-to-ga',
      eventCategory: 'Exp — New home page layout',
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
  .lav-section {
    padding: 50px 0;
  }

  .pin-spacer, [id^=trustbadge-container] {
    display: none!important;
  }
  .home-page > *:not(.lav-wrap) {
    display: none;
  }
  .lav-wrap {
    color: #517193;
  }
  .lav-plate {
    background: #F4F6FA;
    box-shadow: 0px 22px 33px rgba(59, 83, 108, 0.22);
    border-radius: 8px;
    padding: 40px 125px;
  }

  .lav-title {
    font-weight: 700;
    font-size: 48px;
    line-height: 48px;
  }
  .lav-descr {
    font-size: 18px;
    line-height: 24px;
  }
  .lav-btn {
    max-width: 356px;
    width: 100%;
  }

  .lav-jumb {
    padding: 150px 0;
    display: flex;
    align-items: center;
    min-height: 100vh;
    background: url('${settings.dir}/img/jumb-bg.jpeg') top right no-repeat;
    background-size: cover;
  }
  .lav-jumb__info {
    max-width: 644px;
  }
  .lav-jumb__title {
    font-weight: 800;
    font-size: 54px;
    line-height: 58px;
  }
  .lav-jumb__descr {
    margin: 24px 0 42px;
  }
  .lav-jumb__actions {
    display: flex;
    align-items: center;
  }
  .lav-jumb__learn {
    margin-left: 42px;
    letter-spacing: 1px;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
  }

  .lav-boost {
    padding: 0;
    transform: translateY(-50%);
  }
  .lav-boost__inner {
    display: flex;
    align-items: center;
  }
  .lav-boost__image {
    flex-shrink: 0;
    margin-right: 75px;
    line-height: 0;
  }
  .lav-boost__info {

  }
  .lav-boost__title {
    font-weight: 700;
    font-size: 32px;
    line-height: 36px;
    margin-bottom: 24px;
  }
  .lav-boost__stars {}
  .lav-boost__caption {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    margin-top: 8px;
  }

  .lav-problems {
    padding: 0 0 60px;
  }
  .lav-problems__title {
    text-align: center;
  }
  .lav-problems__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    margin-top: 90px;
  }
  .lav-problems {}
  .lav-problems {}
  .lav-problem {

  }
  .lav-problem {
    display: flex;
    flex-flow: column;
    background-color: #F4F6FA;
    background-position: top center;
    background-size: cover;
    background-repeat: no-repeat;
    filter: drop-shadow(0px 44px 66px rgba(59, 83, 108, 0.22));
    padding-top: 152px;
    border-radius: 8px;
  }
  .lav-problem:nth-child(2) {
    margin: -28px 0;
  }
  .lav-problem:nth-child(5) {
    margin-top: 28px;
    margin-bottom: -28px;
  }
  .lav-problem__info {
    width: 100%;
    margin-top: auto;
    padding: 32px;
  }
  .lav-problem__title {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.01em;
  }
  .lav-problem__list {
    margin-top: 20px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }
  .lav-problem__item {
    position: relative;
    padding-left: 20px;
  }
  .lav-problem__item:before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 7px;
    width: 4px;
    height: 4px;
    background-color: #517193;
    border-radius; 50%;
  }
  .lav-problem__item + .lav-problem__item {
    margin-top: 3px;
  }

  .lav-drinks {
    position: relative;
  }
  .lav-drinks:before {
    content: '';
    position: absolute;
    bottom: -7vw;;
    left: 0;
    right: 0;
    height: 737px;
    background: url('${settings.dir}/img/drinks-bg.png') left bottom no-repeat;
    background-size: cover;
  }
  .lav-drinks__inner {
    display: flex;
    align-items: center;
    padding: 40px 85px;
  }
  .lav-drinks__image {
    flex-shrink: 0;
    line-height: 0;
    margin-right: 100px;
    margin-left: 32px;
  }
  .lav-drinks__info {
    font-size: 24px;
    line-height: 32px;
    letter-spacing: 0.01em;
    font-weight: 700;
    max-width: 595px;
  }
  .lav-drinks__container {
    position: relative;
  }

  .lav-wears {
    padding-top: 90px;
    padding-bottom: 120px;
    background: linear-gradient(180deg, #406184 13.02%, rgba(64, 97, 132, 0.86) 41.15%, rgba(18, 141, 255, 0) 100%);
  }
  .lav-wears__title {
    text-align: center;
    color: #fff;
  }
  .lav-wears__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    margin-top: 72px;
    margin-bottom: 50px;
  }
  .lav-wear {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    background: radial-gradient(104.98% 70.86% at 50.15% 8.85%, rgba(243, 245, 249, 0) 21.87%, rgba(243, 245, 249, 0.179775) 34.38%, rgba(243, 245, 249, 0.811752) 47.4%, #F3F5F9 58.33%);
    padding-top: 187px;
  }
  .lav-wear__info {
    padding: 32px;
  }
  .lav-wear__icon {
    line-height: 0;
  }
  .lav-wear__title {
    margin-top: 24px;
    font-weight: 700;
    font-size: 28px;
    line-height: 32px;
  }
  .lav-wear__list {
    margin-top: 16px;
  }
  .lav-wears {}
  .lav-wears {}
  .lav-wears {}


`;

const newPage = `
<main class='lav-wrap'>
  <section class='lav-jumb lav-section'>
    <div class='container-fluid container--size--md lav-jumb__container'>
      <div class='lav-jumb__info'>
        <div class='lav-jumb__title'>Optimize your sleep, energy & mental wellness</div>

        <div class='lav-jumb__descr lav-descr'>
          Luminette® glasses are scientifically proven to beat the winter blues, restoring your mood and energy levels in just 30 minutes a day
        </div>

        <div class='lav-jumb__actions'>
          <button class='lav-jumb__btn btn-primary btn-lg flipped lav-btn lav-btn-buy'>
            <span class="btn-text">
              Get Luminette3 Now
            </span>
            <span class="btn-bg-wrapper"></span>
          </button>

          <div class='lav-jumb__learn'>Learn More</div>
        </div>
      </div>
    </div>
  </section>

  <section class='lav-boost lav-section'>
    <div class='container-fluid container--size--md lav-boost__container'>
      <div class='lav-boost__inner lav-plate'>
        <div class='lav-boost__image'>
          <img class='lav-boost__stars' src='${settings.dir}/img/boost-person.svg' />
        </div>

        <div class='lav-boost__info'>
          <div class='lav-boost__title'>150,000+ people boost their energy with Luminette</div>
          <img class='lav-boost__stars' src='${settings.dir}/img/stars.svg' />
          <div class='lav-boost__caption'>1049 Amazon & Trustedshops reviews</div>
        </div>
      </div>
    </div>
  </section>

  <section class='lav-problems lav-section'>
    <div class='container-fluid container--size--lg lav-problems__container'>
      <div class='lav-problems__title lav-title'>Light therapy can help you <br /> if you have these problems</div>

      <div class='lav-problems__grid'>
        <div class='lav-problem' style='background-image: url("${settings.dir}/img/problem1.jpg")'>
          <div class='lav-problem__info'>
            <div class='lav-problem__title'>Sleeping problems</div>
            <div class='lav-problem__list'>
              <div class='lav-problem__item'>Night awakenings</div>
              <div class='lav-problem__item'>Shallow sleep</div>
              <div class='lav-problem__item'>Circadian rhythm imbalances</div>
            </div>
          </div>
        </div>

        <div class='lav-problem' style='background-image: url("${settings.dir}/img/problem2.jpeg")'>
          <div class='lav-problem__info'>
            <div class='lav-problem__title'>Seasonal depression</div>
            <div class='lav-problem__list'>
              <div class='lav-problem__item'>Feeling listless, sad or down</div>
              <div class='lav-problem__item'>Sleeping problems</div>
              <div class='lav-problem__item'>Appetite and weight changes</div>
              <div class='lav-problem__item'>Low energy and irritability</div>
              <div class='lav-problem__item'>Difficulty concentrating</div>
              <div class='lav-problem__item'>Low mood</div>
            </div>
          </div>
        </div>

        <div class='lav-problem' style='background-image: url("${settings.dir}/img/problem3.jpeg")'>
          <div class='lav-problem__info'>
            <div class='lav-problem__title'>Low energy</div>
            <div class='lav-problem__list'>
              <div class='lav-problem__item'>Tired & groggy mornings</div>
              <div class='lav-problem__item'>Slugging throughout the day</div>
              <div class='lav-problem__item'>Low motivation & irritability</div>
            </div>
          </div>
        </div>

        <div class='lav-problem' style='background-image: url("${settings.dir}/img/problem4.jpeg")'>
          <div class='lav-problem__info'>
            <div class='lav-problem__title'>Jet lag</div>
            <div class='lav-problem__list'>
              <div class='lav-problem__item'>Daytime tiredness</div>
              <div class='lav-problem__item'>Headaches & nausea</div>
              <div class='lav-problem__item'>Circadian rhythm imbalances</div>
              <div class='lav-problem__item'>Difficulty adjusting to new timezones</div>
            </div>
          </div>
        </div>

        <div class='lav-problem' style='background-image: url("${settings.dir}/img/problem5.jpeg")'>
          <div class='lav-problem__info'>
            <div class='lav-problem__title'>Stress</div>
            <div class='lav-problem__list'>
              <div class='lav-problem__item'>Concentration & focus issues</div>
              <div class='lav-problem__item'>Appetite & weight issues</div>
              <div class='lav-problem__item'>Inability to relax at night</div>
            </div>
          </div>
        </div>

        <div class='lav-problem' style='background-image: url("${settings.dir}/img/problem6.jpeg")'>
          <div class='lav-problem__info'>
            <div class='lav-problem__title'>Shift work</div>
            <div class='lav-problem__list'>
              <div class='lav-problem__item'>Brain fog</div>
              <div class='lav-problem__item'>Shortened or shallow sleep</div>
              <div class='lav-problem__item'>Circadian rhythm imbalances</div>
              <div class='lav-problem__item'>Looking and feeling tired</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class='lav-drinks lav-section'>
    <div class='container-fluid container--size--sm lav-drinks__container'>
      <div class='lav-drinks__inner lav-plate'>
        <div class='lav-drinks__image'>
          <img src='${settings.dir}/img/cup.svg' />
        </div>
        <div class='lav-drinks__info'>
          You can also use light therapy as a natural substitute for caffeine & energy drinks during the day to support healthy energy levels. 
        </div>
      </div>
    </div>
  </section>

  <section class='lav-wears lav-section'>
    <div class='container-fluid container--size--lg lav-wears__container'>
      <div class='lav-wears__title lav-title'>Wear for 30 mins a day to...</div>

      <div class='lav-wears__grid'>
        <div class='lav-wear' style='background-image: url("${settings.dir}/img/benefit1-bg.jpeg")'>
          <div class='lav-wear__info'>
            <div class='lav-wear__icon'>
              <img src='${settings.dir}/img/benefit1.svg' />
            </div>
            <div class='lav-wear__title'>Beat your winter blues</div>
            <div class='lav-wear__list'>
              <div class='lav-wear__item'>Cope with winter blues and seasonal changes</div>
              <div class='lav-wear__item'>Manage a healthier lifestyle with circadian rhythms</div>
              <div class='lav-wear__item'>Boost overall health and increase longevity</div>
            </div>
          </div>
        </div>

        <div class='lav-wear' style='background-image: url("${settings.dir}/img/benefit2-bg.jpeg")'>
          <div class='lav-wear__info'>
            <div class='lav-wear__icon'>
              <img src='${settings.dir}/img/benefit3.svg' />
            </div>
            <div class='lav-wear__title'>Boost energy</div>
             <div class='lav-wear__list'>
              <div class='lav-wear__item'>Reduce fatigue and irritability</div>
              <div class='lav-wear__item'>Feel more energized</div>
              <div class='lav-wear__item'>Elevate mental and physical performance</div>
            </div>
          </div>
        </div>

        <div class='lav-wear' style='background-image: url("${settings.dir}/img/benefit3-bg.jpeg")'>
          <div class='lav-wear__info'>
            <div class='lav-wear__icon'>
              <img src='${settings.dir}/img/benefit2.svg' />
            </div>
            <div class='lav-wear__title'>Sleep better</div>
             <div class='lav-wear__list'>
              <div class='lav-wear__item'>Improve sleep quality</div>
              <div class='lav-wear__item'>Wake up refreshed</div>
              <div class='lav-wear__item'>Fall asleep easier</div>
            </div>
          </div>
        </div>
      </div>

      <button class='lav-wears__btn btn-primary btn-lg flipped lav-btn-buy'>
        <span class="btn-text">
          Get Luminette3 Now
        </span>
        <span class="btn-bg-wrapper"></span>
      </button>
    </div>
  </section>

  <section class='lav-lucimed lav-section'>
    <div class='container-fluid container--size--lg lav-lucimed__container'>
      <div class='lav-lucimed__inner'>
        <div class='lav-lucimed__info'>
          <div class='lav-lucimed__title'></div>
          <div class='lav-lucimed__descr'>
            Belgian health tech company Lucimed has pioneered a way for you to bring wearable light therapy into your home. <br />Years of research by optical engineers, sleep disorder specialists, professors & inventors have created the Luminette3 - a device that helps you optimize your sleep health & mental wellbeing through the power of light therapy. 
          </div>
          <div class='lav-lucimed__link'>
            Learn more about Luminette scientific research >
          </div>
        </div>

        <div class='lav-lucimed__image'></div>
      </div>
    </div>
  </section>

  <section class='lav-morning lav-section'>
    <div class='container-fluid container--size--lg lav-morning__container'>
      <div class='lav-morning__plate'>
        <div class='lav-morning__info'>
          <div class='lav-morning__title lav-title'>The perfect addition
          to your morning routine:</div>
          
          <div class='lav-morning__descr lav-descr'>Wear Luminette while brushing your teeth, eating breakfast or working on your computer - the perfect addition to any morning routine</div>

          <div class='lav-morning__list'>
            <div class='lav-morning__item'>
              <div class='lav-morning__image'>
                <img src='${settings.dir}/img/morning1.svg' />
              </div>
              <div class='lav-morning__caption'>
                Therapy sessions last <br /><span>20-45 mins</span>
              </div>
            </div>
            <div class='lav-morning__item'>
              <div class='lav-morning__image'>
                <img src='${settings.dir}/img/morning2.svg' />
              </div>
              <div class='lav-morning__caption'>Use <span>1x per day</span></div>
            </div>
            <div class='lav-morning__item'>
              <div class='lav-morning__image'>
                <img src='${settings.dir}/img/morning3.svg' />
              </div>
              <div class='lav-morning__caption'>
                Feel the benefits within <br /><span>4 to 6 days</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class='lav-results lav-section'>
    <div class='container-fluid container--size--lg lav-results__container'>
      <div class='lav-results__title'>Get results in just 7 days</div>

      <div class='lav-results__row'>
        <div class="lav-results__item">
          <div class="lav-results__item-title">Order Luminette3</div>
          <div class="lav-results__item-caption">Today</div>
        </div>

        <div class="lav-results__item">
          <div class="lav-results__item-title">Wear Luminette3</div>
          <div class="lav-results__item-caption">20 minutes x 7 days</div>
        </div>

        <div class="lav-results__item">
          <div class="lav-results__item-title">Feel energized and fix your sleep</div>
          <div class="lav-results__item-caption">After 4-7 days</div>
        </div>
      </div>
    </div>
  </section>

  <section class='lav-benefits lav-section'>
    <div class='container-fluid container--size--lg lav-benefits__container'>
      <div class='lav-benefits__inner'>
        <div class='lav-benefits__title lav-title'>What are the benefits?</div>

        <div class='lav-benefits__list'>
          <div class='lav-benefit'>
            <div class='lav-benefit__icon'>
              <img src='${settings.dir}/img/benefit2-1.svg' />
            </div>
            <div class='lav-benefit__title'>Lightweight and comfortable</div>
            <div class='lav-benefit__caption lav-descr'>Weighing only 51g and built with a comfy ergonomic nose fit</div>
          </div>
          <div class='lav-benefit'>
            <div class='lav-benefit__icon'>
              <img src='${settings.dir}/img/benefit2-2.svg' />
            </div>
            <div class='lav-benefit__title'>Doesn't hinder your vision</div>
            <div class='lav-benefit__caption lav-descr'>The special patented light system lets you experience light therapy without any disruption to your vision</div>
          </div>
          <div class='lav-benefit'>
            <div class='lav-benefit__icon'>
              <img src='${settings.dir}/img/benefit2-3.svg' />
            </div>
            <div class='lav-benefit__title'>Compatible with glasses</div>
            <div class='lav-benefit__caption lav-descr'>Wear Luminette on top of your glasses</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class='lav-cases lav-section'>
    <div class='container-fluid container--size--lg lav-cases__container'>
      <div class='lav-cases__title lav-title'>Wear Luminette while...</div>

      <div class='lav-cases__list'>
        <div class='lav-case'>
          <div class='lav-case__image'>
            <img src='${settings.dir}/img/benefit2-1.svg' />
          </div>
          <div class='lav-case__caption lav-descr'>Preparing breakfast</div>
        </div>

        <div class='lav-case'>
          <div class='lav-case__image'>
            <img src='${settings.dir}/img/benefit2-2.svg' />
          </div>
          <div class='lav-case__caption lav-descr'>Brushing your teeth</div>
        </div>

        <div class='lav-case'>
          <div class='lav-case__image'>
            <img src='${settings.dir}/img/benefit2-3.svg' />
          </div>
          <div class='lav-case__caption lav-descr'>Working on your computer</div>
        </div>

        <div class='lav-case'>
          <div class='lav-case__image'>
            <img src='${settings.dir}/img/benefit2-3.svg' />
          </div>
          <div class='lav-case__caption lav-descr'>Performing light exercise</div>
        </div>
      </div>
    </div>
  </section>

  <section class='lav-recharge lav-observe'>
    <div class='container-fluid container--size--lg lav-jumb__container'>
      <div class='lav-recharge__inner'>
        <div class='lav-recharge__preview lav-open-modal' data-target='.lav-review-modal' data-src='https://www.youtube.com/embed/rnpVhWWRUDI?autoplay=0&start=0&showinfo=0&rel=0'>
          <img src='${settings.dir}/img/play.svg' />
          <img src='${settings.dir}/img/play-hover.svg' />
        </div>
        <div class='lav-recharge__info'>
          <div class='lav-recharge__title lav-title'>Retrouver votre énergie avec la Luminette</div>
          <div class='lav-recharge__caption lav-text'>Une technologie brevetée permet aux Luminette® de rééquilibrer votre horloge biologique circadienne, rétablissant ainsi vos cycles de sommeil, votre humeur et vos niveaux d'énergie.</div>
        </div>
      </div>
    </div>
  </section>

  <section class='lav-works lav-section'>
    <div class='container-fluid container--size--lg lav-works__container'>
      <div class='lav-works__title lav-title'>How Luminette works</div>

      <div class='lav-works__row'>
        <div class='lav-works__info'>
          <div class='lav-works__item'>
            <div class='lav-works__item-title'>A patented, innovative light therapy system, for optimal comfort.</div>
            <div class='lav-works__item-descr active'>Luminette® uses a patented...</div>
            <div class='lav-works__item-descr'>Luminette® uses a patented innovative optical technology: placed above eyesight, its beam of light is angled top-down, just as happens naturally under blue skies and allows users to keep their vision free.</div>
            <div class='lav-works__item-trigger lav-works__item-trigger-first'>Show more</div>
          </div>

          <div class='lav-works__item'>
            <div class='lav-works__item-title'>White light enhanced with <span>blue light</span> for greater effectiveness.</div>
            <div class='lav-works__item-descr active'>Luminette® emits a safe...</div>
            <div class='lav-works__item-descr'>Luminette® emits a safe blue-enriched white light peaked at 468 nm. This wavelength is proven to be the most effective at triggering the body's positive response to sunlight. Luminette LED’s have been specifically selected to avoid light close to UV.</div>
            <div class='lav-works__item-trigger lav-works__item-trigger-second'>Show more</div>
          </div>

          <div class='lav-works__study'>
            <div class='lav-works__study-caption'>An <span>independent study</span> has shown that Luminette gives the same results as a 10,000 lux light box</div>
            <button class='lav-btn lav-works__study-btn'>
              <span>Read the study</span> <img src='${settings.dir}/img/adobe.svg' />
            </button>
          </div>
        </div>
        
        <div class='lav-works__image'>
          <img src='${settings.dir}/img/how-works.png' />
          <img src='${settings.dir}/img/how-works-mob.png' />
        </div>
      </div>
    </div>
  </section>

  <section class='lav-study__wrap'>
    <div class='container-fluid container--size--lg'>
      <div class='lav-study'>
        <div class='lav-study__icon'>
          <svg class="icon icon-xxl">
            <use xlink:href="#lamp"></use>
          </svg>
        </div>
        <div class='lav-study__info'>
          Une étude indépendante a montré que la Luminette donne les mêmes résultats qu'une lampe de 10 000 lux.
        </div>
        <div class='lav-study__btn'>
          Lire l'étude
          <img src='/images/icons/adobe-reader.svg' />
        </div>
      </div>
    </div>
  </section>

  <section class='technical__wrap'>
    <div class='container-fluid container--size--lg'>
      <div class="technical lav-observe">
        <div class="row technical-block">
          <div class="col-lg-6 pl-0">
            <h2>Détails techniques</h2>
          </div>
          <div class="col-lg-6 fs-18">
            <div class="row pb-2 bb-2">
              <div class="col-sm-7 col-6 pl-0">Dimensions du produit</div>
              <div class="col-sm-5 col-6 fw-semi pr-0 pl-1">17 x 16 x 3 cm</div>
            </div>
            <div class="row py-2 bb-2">
              <div class="col-sm-7 col-6 pl-0">Type de source lumineuse</div>
              <div class="col-sm-5 col-6 fw-semi pr-0 pl-1">LED</div>
            </div>
            <div class="row py-2 bb-2">
              <div class="col-sm-7 col-6 pl-0">Nombre de sources lumineuses</div>
              <div class="col-sm-5 col-6 fw-semi pr-0 pl-1">3</div>
            </div>
            <div class="row py-2 bb-2">
              <div class="col-sm-7 col-6 pl-0">Poids de l'article</div>
              <div class="col-sm-5 col-6 fw-semi pr-0 pl-1">51g</div>
            </div>
          </div>
        </div>
        <div class="safety-block lav-observe">
          <div class="row">
            <div class="col-lg-6 pl-0">
              <h2 class="pb-4">Sécurité</h2>
              <div class="d-flex mt-5">
                <img class="mr-5 mb-3" src="https://conversionratestore.github.io/projects/luminette/img/safety-1.svg" alt="safety icon" />
                <img class="mr-5 ml-2 mb-3" src="https://conversionratestore.github.io/projects/luminette/img/safety-2.svg" alt="safety icon" />
                <img class="ml-2 mb-3" src="https://conversionratestore.github.io/projects/luminette/img/safety-3.svg" alt="safety icon" />
              </div>
            </div>
            <div class="col-lg-6 fs-18 px-0">
              <p class="fw-bold mb-3">Depuis 2007, Luminette® porte la classification européenne CE.</p>
              <p class="mb-3">Luminette® est classée comme un dispositif sans danger pour les yeux, conformément à la norme internationale CEI 62471. En outre, la lumière émise par la Luminette® est exempte d'UV, de rayons infrarouges et ne contient pas de courte longueur d'onde inférieure à 450 nm.</p>
              <p>Aux États-Unis, aucune lampe de luminothérapie n'a reçu l'approbation de la FDA. Par conséquent, l'efficacité et la sécurité de cet appareil électronique - et de tous les autres appareils de luminothérapie sur le marché américain - ne sont pas réglementées par la FDA.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class='compare-section lav-observe'>
    <div class='container-fluid container--size--lg'>
      <div class="row fs-16 text-center compare mx-auto">
        <div class="col-6 py-5">
          <img class="my-1" src="https://conversionratestore.github.io/projects/luminette/img/glasses.svg" alt="glasses icon"/>
          <p class="fs-22 fw-bold py-1">Luminette3</p>
        </div>
        <div class="col-6 py-5">
          <img class="my-1" src="https://conversionratestore.github.io/projects/luminette/img/box.svg" alt="box icon"/>
          <p class="fs-22 fw-bold py-1">Light Box</p>
        </div>
        <div class="col-12 py-2 fs-18 fw-bold b-1">Portable</div>
        <div class="col-6 py-5 fw-medium"><p class="py-1">Wear while <span class="text-ellipsis"> on-the-go</span></p></div>
        <div class="col-6 py-5 fw-medium"><p class="py-1">Requires you to stop and sit still for <span class="text-ellipsis">30 mins</span></p></div>
        <div class="col-12 py-2 fs-18 fw-bold b-1">Light colour spectrum</div>
        <div class="col-6 py-5 fw-medium"><p class="py-1">Blue-enriched <span class="text-ellipsis">white light</span></p></div>
        <div class="col-6 py-5 fw-medium"><p class="py-1">Full spectrum <span class="text-ellipsis">white light</span></p></div>
        <div class="col-12 py-2 fs-18 fw-bold b-1">Therapy effectiveness</div>
        <div class="col-6 py-5 fw-medium"><p class="py-1">Provides effective therapy using <br>
            a less intense light source</p></div>
        <div class="col-6 py-5 fw-medium"><p class="py-1">Requires at least 10,000 lux to provide effective light therapy</p></div>
        <div class="col-12 py-2 fs-18 fw-bold b-1">Size</div>
        <div class="col-6 py-5 fw-medium"><p class="pt-1 pb-5">Small/ ultralight <br>
            only 51g (1.83 ounces)</p></div>
        <div class="col-6 py-5 fw-medium"><p class="pt-1 pb-5">	Large/ bulky</p></div>
      </div>
    </div>
  </section>

  <section class='lav-faq'>
    <div class='container-fluid container--size--lg'>
      <div class='lav-faq__plate'>
        <div class='lav-faq__info'>
          <div class='lav-faq__title'></div>
          <div class='lav-faq__list'></div>
        </div>
        <div class='lav-faq__image'></div>
      </div>

      <button class='lav-faq__btn btn-primary btn-lg flipped lav-btn-buy'>
        <span class="btn-text">
          Get Luminette3 Now
        </span>
        <span class="btn-bg-wrapper"></span>
      </button>
    </div>
  </section>



  <section class='lav-reviews lav-observe'>
    <div class='container-fluid container--size--lg lav-reviews__container'>
      <div class='lav-reviews__title lav-title'>Customer reviews</div>

      <div class='lav-reviews__list splide' style='display: none;'>
        <div class="splide__track">
          <div class="splide__list">
            <div class='lav-review splide__slide'>
              <div class='lav-review__image'>
                <img src='${settings.dir}/img/review1.png' />
              </div>
              <div class='lav-review__name'>Aurélie</div>
              <a href='https://www.amazon.fr/gp/customer-reviews/RWZSN5SZJF573/ref=cm_cr_getr_d_rvw_ttl?ie=UTF8&amp;ASIN=B07VMRRB9Y' target='_blank' class='lav-review__link'>
                View review on <span>Amazon</span>
                <img src='${settings.dir}/img/rate.svg' />
              </a>
              <div class='lav-review__text active'>
                “For years, I have suffered from seasonal depression. I have been advised by health professionals (general practitioner, psychiatrist, psychologist and pharmacist) have advised me to use light therapy to improve my state in the fall and winter. I hesit...”
              </div>

              <div class='lav-review__text'>
                “For years, I have suffered from seasonal depression. I have been advised by health professionals (general practitioner, psychiatrist, psychologist and pharmacist) have advised me to use light therapy to improve my state in the fall and winter. I hesitated for a long time and then I discovered the Luminette. I use it in the morning, either while going about my business (breakfast, brushing my teeth brushing...) or when I'm reading. After the session, I have much more energy and motivation to face the day. It is very practical because it can be worn at the same time as my glasses or computer glasses. They are made of a rather rigid plastic, but they seem to be strong. They charge quite quickly. A charging indicator lets you know when it is finished. Once charged, they can be used about 10 times. There are 3 modes. The more powerful the light, the shorter the exposure time. What is very practical is that you don't have to watch the time because they turn off by themselves once the the session is over. The only small ""downside"" is that the most powerful mode can be glaring when the surrounding light is weak. I would recommend this product without hesitation, since it gives me a real moral boost during short days.”
              </div>
              
              <div class='lav-review__trigger'>Show more</div>
            </div>
            
            <div class='lav-review splide__slide'>
              <div class='lav-review__image'>
                <img src='${settings.dir}/img/review2.png' />
              </div>
              <div class='lav-review__name'>Arnaud T.</div>
              <a href='https://www.google.com/maps/contrib/111655687148446401076/reviews/@50.5779487,5.2610511,16z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=fr-BE' target='_blank' class='lav-review__link'>
                View review on <span>Google</span>
                <img src='${settings.dir}/img/rate.svg' />
              </a>
              <div class='lav-review__text active'>
                "Every year I notice the lack of light and it affects my mood. This year I found the solution to remedy this with the Luminette. The advantage is that you are not stuck in front of a screen while you use it, so and you can get ready in the morning or eat breakfast with the glasses on. It is very practical :)"
              </div>
            </div>

            <div class='lav-review splide__slide'>
              <div class='lav-review__image'>
                <img src='${settings.dir}/img/review3.png' />
              </div>
              <div class='lav-review__name'>Laura S.</div>
              <a href='https://www.amazon.com/gp/customer-reviews/R37M192JK2SORZ/ref=cm_cr_getr_d_rvw_ttl?ie=UTF8&ASIN=B07VMRRB9Y' target='_blank' class='lav-review__link'>
                View review on <span>Amazon</span>
                <img src='${settings.dir}/img/rate.svg' />
              </a>
              <div class='lav-review__text active'>
                “I use Luminettes since the beginning of October 2020 to deal with my Seasonal Affective Disorder (SAD). So far, I have no symptoms of SAD, despite the time changing (winter time) and the sun disappearing at 4:30 PM. It is a first. I am amazed.my energy level has increased...”
              </div>
              <div class='lav-review__text'>
                “I use Luminettes since the beginning of October 2020 to deal with my Seasonal Affective Disorder (SAD). So far, I have no symptoms of SAD, despite the time changing (winter time) and the sun disappearing at 4:30 PM. It is a first. I am amazed.my energy level has increased and I feel free and joyous most of the time. I also sleep much better. I must add that I stopped caffeine, which helps as well. Luminettes are far, far better than the lamps. I wear them every morning without being obliged to stare at the lamp. My mood has really improved. They are very convenient and easy to use. I put them onto the top of my glasses. They recharge easily and they can be used without plugging them every day. Everyone who sees me wearing them (when I attend online meetings, when I go to the dentist, etc) are asking me if it works. People think it is pretty and they are very interested because they always have someone in their family with SAD, or they are afflicted by that disorder themselves. So really, no complaints, only good things to say about my Luminettes which are as precious now as my cell phone. Merci!" caffeine, which helps as well. Luminettes are far, far better than the lamps. I wear them every morning without being obliged to stare at the lamp. My mood has really improved. They are very convenient and easy to use. I put them onto the top of my glasses. They recharge easily and they can be used without plugging them every day. Everyone who sees me wearing them (when I attend online meetings, when I go to the dentist, etc) are asking me if it works. People think it is pretty and they are very interested because they always have someone in their family with SAD, or they are afflicted by that disorder themselves. So really, no complaints, only good things to say about my Luminettes which are as precious now as my cell phone. Merci!”
              </div>
              <div class='lav-review__trigger'>Show more</div>
            </div>
          </div>
        </div>
      </div>

      <div class="slider-wrapper position-relative">
        <div class="slider">
          <div class="slide">
            <div class="card">
              <div class="card-header text-center">
                <picture class="avatar d-block">
                  <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/16@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/16.png 1x"/>
                  <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/16.png" alt="Customer avatar">
                </picture>
                <div class="h4 name fw-bolder">Arnaud T.</div>
                <a href="https://www.google.com/maps/contrib/111655687148446401076/reviews/@50.5779487,5.2610511,16z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                  <span>
                    Read the review on <b>Google</b>
                  </span>
                  <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                </a>
              </div>
              <div class="card-body-wrapper">
                <div class="card-body">
                  <p class="review">"Every year I notice the lack of light and it affects my mood.
                    This year I found the solution to remedy this with the Luminette. The advantage is that
                    you are not stuck in front of a screen while you use it, so and you can get ready in the morning or eat
                    breakfast
                    with the glasses on. It is very practical :)"
                  </p>
                  <button class="fw-bolder expand">Show more</button>
                  <div class="date">4 March 2021</div>
                </div>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="card">
              <div class="card-header text-center">
                <picture class="avatar d-block">
                  <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/4@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/4.png 1x"/>
                  <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/4.png" alt="Customer avatar">
                </picture>
                <div class="h4 name fw-bolder">Laura S.</div>
                <a href="https://www.amazon.com/gp/customer-reviews/R37M192JK2SORZ/ref=cm_cr_getr_d_rvw_ttl?ie=UTF8&ASIN=B07VMRRB9Y" target="_blank" class="link">
                  <span>
                    Read the review on <b>Amazon</b>
                  </span>
                  <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                </a>
              </div>
              <div class="card-body-wrapper">
                <div class="card-body">
                  <p class="review">I use Luminettes since the beginning of October 2020 to deal with my Seasonal Affective
                    Disorder
                    (SAD). So far, I have no symptoms of SAD, despite the time changing (winter time) and the sun
                    disappearing at 4:30 PM. It is a first. I am amazed.my energy level has increased and I feel
                    free and joyous most of the time. I also sleep much better. I must add that I stopped
                    caffeine,
                    which helps as well.
                    Luminettes are far, far better than the lamps. I wear them every morning without being obliged
                    to stare at the lamp. My mood has really improved.
                    They are very convenient and easy to use. I put them onto the top of my glasses. They recharge
                    easily and they can be used without plugging them every day.
                    Everyone who sees me wearing them (when I attend online meetings, when I go to the dentist,
                    etc)
                    are asking me if it works. People think it is pretty and they are very interested because they
                    always have someone in their family with SAD, or they are afflicted by that disorder
                    themselves.
                    So really, no complaints, only good things to say about my Luminettes which are as precious
                    now
                    as my cell phone.
                    Merci!"
                    caffeine,
                    which helps as well.
                    Luminettes are far, far better than the lamps. I wear them every morning without being obliged
                    to stare at the lamp. My mood has really improved.
                    They are very convenient and easy to use. I put them onto the top of my glasses. They recharge
                    easily and they can be used without plugging them every day.
                    Everyone who sees me wearing them (when I attend online meetings, when I go to the dentist,
                    etc)
                    are asking me if it works. People think it is pretty and they are very interested because they
                    always have someone in their family with SAD, or they are afflicted by that disorder
                    themselves.
                    So really, no complaints, only good things to say about my Luminettes which are as precious
                    now
                    as my cell phone.
                    Merci!
                  </p>
                  <button class="fw-bolder expand">Show more</button>
                  <div class="date">21 December 2020</div>
                </div>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="card">
              <div class="card-header text-center">
                <picture class="avatar d-block">
                  <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/1@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/1.png 1x"/>
                  <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/1.png" alt="Customer avatar">
                </picture>
                <div class="h4 name fw-bolder">Rémy Z.</div>
                <a href="https://www.google.com/maps/contrib/112247709787810698381/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@50.5779487,5.2632398,17z/data=!4m6!1m5!8m4!1e2!2s112247709787810698381!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                  <span>
                    Read the review on <b>Google </b>
                  </span>
                  <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                </a>
              </div>
              <div class="card-body-wrapper">
                <div class="card-body">
                  <p class="review">Excellent light therapy glasses.  I use them every morning when I wake up. I
                    have been
                    suffering
                    from
                    seasonal depression for several years, but thanks to Luminettes I have been feeling
                    the
                    effects
                    of my
                    mood disorders much less in autumn and winter. I use them from mid-fall until the end of March. I used to
                    have
                    a
                    light therapy 
                    lamp, but it was quite restrictive to stay in front of it all the time.
                    With
                    my
                    Luminettes I can go about my business without any problem.
                    I am very satisfied!
                  </p>
                  <button class="fw-bolder expand">Show more</button>
                  <div class="date">21 December 2020</div>
                </div>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="card">
              <div class="card-header text-center">
                <picture class="avatar d-block">
                  <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/2@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/2.png 1x"/>
                  <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/2.png" alt="Customer avatar">
                </picture>
                <div class="h4 name fw-bolder">Dominique M.</div>
                <a href="https://www.amazon.fr/gp/customer-reviews/R2TECJ5KRJG2TC/ref=cm_cr_getr_d_rvw_ttl?ie=UTF8&ASIN=B07VMRRB9Y" target="_blank" class="link">
                  <span>
                    Read the review on <b>Amazon</b>
                  </span>
                  <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                </a>
              </div>
              <div class="card-body-wrapper">
                <div class="card-body">
                  <p class="review">Every year, the coming of autumn for me means depression, tiredness, long sleeps and
                    and exhaustion in the afternoon! I spoke about it to the doctor who advised me to try
                    the Luminette. I decided to buy it and use it every morning. So , I
                    eat
                    my breakfast with the Luminette on, without any discomfort, for 20 minutes. It allows me to
                    move around and see what I'm doing, unlike the old devices that
                    stayed
                    on the table, and which, according to the studies carried out, were useless because the luminosity of the
                    the leds did not come from higher than head level and thus did not reach the
                    eye's sensors...
                    Now, I feel fit and healthy during the day, and if during winter I feel tired after lunch, I do a
                    I do a session again. This way, my body stops producing melatonin and my energy
                    comes back, I feel better about myself and I'm in a better mood!
                  </p>
                  <button class="fw-bolder expand">Show more</button>
                  <div class="date">21 December 2020</div>
                </div>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="card">
              <div class="card-header text-center">
                <picture class="avatar d-block">
                  <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/3@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/3.png 1x"/>
                  <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/3.png" alt="Customer avatar">
                </picture>
                <div class="h4 name fw-bolder">Maïté T.</div>
                <a href="https://www.amazon.fr/gp/customer-reviews/R1GSLSI9OTO56U/ref=cm_cr_arp_d_rvw_ttl?ie=UTF8&ASIN=B07VMRRB9Y" target="_blank" class="link">
                  <span>
                    Review on <b>Amazon</b>
                  </span>
                  <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                </a>
              </div>
              <div class="card-body-wrapper">
                <div class="card-body">
                  <p class="review">"I have fibromyalgia, major sleep problems, and an obvious lack of energy when the
                    sun
                    goes away. My neurologist recommended your glasses. I am delighted, I have
                    more energy, but unfortunately this does not affect my pain. But since I'm in better shape, I think it's really great!
                    Autumn and winter no longer scare me thanks to these glasses.
                    I am ready to face them! I really recommend it and I can't stop talking about it to everyone
                    around me."
                  </p>
                  <button class="fw-bolder expand">Show more</button>
                  <div class="date">21 December 2020</div>
                </div>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="card">
              <div class="card-header text-center">
                <picture class="avatar d-block">
                  <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/5@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/5.png 1x"/>
                  <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/5.png" alt="Customer avatar">
                </picture>
                <div class="h4 name fw-bolder">Muriel V.</div>
                <a href="https://www.google.com/maps/contrib/107266988971890423777/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@50.5779487,5.2632398,17z/data=!4m6!1m5!8m4!1e2!2s107266988971890423777!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                  <span>
                    Review on <b>Google maps</b>
                  </span>
                  <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                </a>
              </div>
              <div class="card-body-wrapper">
                <div class="card-body">
                  <p class="review">"I was prescribed it by my neurologist for my sleep disorders and epilepsy, and now I
                    can't
                    do without it anymore. The fact that they are glasses is very practical because you can do
                    things (like brushing your teeth, eating lunch, reading or even starting work).
                    start working). They are delivered with a very practical cover for storage
                    and/or for travelling.
                    I just don't recommend using them in a dark room.
                    "
                  </p>
                  <button class="fw-bolder expand">Show more</button>
                  <div class="date">21 December 2020</div>
                </div>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="card">
              <div class="card-header text-center">
                <picture class="avatar d-block">
                  <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/6@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/6.png 1x"/>
                  <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/6.png" alt="Customer avatar">
                </picture>
                <div class="h4 name fw-bolder">Rita R.</div>
                <a href="https://www.google.com/maps/contrib/100137502211655470427/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@50.6323126,5.3985949,11z/data=!4m6!1m5!8m4!1e1!2s100137502211655470427!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                  <span>
                    Review on <b>Google maps</b>
                  </span>
                  <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                </a>
              </div>
              <div class="card-body-wrapper is-visible">
                <div class="card-body">
                  <p class="review">"After 5 days of using my luminette, I already feel better...
                    Try it and you'll never stop using it.
                    I've been wearing it for 3 years in autumn for 20 minutes a day ... while having breakfast"
                  </p>
                  <div class="date">21 December 2020</div>
                </div>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="card">
              <div class="card-header text-center">
                <picture class="avatar d-block">
                  <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/7@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/7.png 1x"/>
                  <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/7.png" alt="Customer avatar">
                </picture>
                <div class="h4 name fw-bolder">Audrey B.</div>
                <a href="https://www.google.com/maps/contrib/105110317360703574808/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@50.5779487,5.2632398,17z/data=!4m6!1m5!8m4!1e2!2s105110317360703574808!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                  <span>
                    Review on <b>Google maps</b>
                  </span>
                  <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                </a>
              </div>
              <div class="card-body-wrapper is-visible">
                <div class="card-body">
                  <p class="review">"I am very happy with the luminette! (I have the luminette 3). I have better sleep cycles
                    and they help me to wake up in the morning (as well as a coffee). Plus they are
                    easy to wear. Every morning I tell myself that I did the right thing by buying them! I
                    recommend them!
                    "
                  </p>
                  <div class="date">21 December 2020</div>
                </div>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="card">
              <div class="card-header text-center">
                <picture class="avatar d-block">
                  <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/8@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/8.png 1x"/>
                  <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/8.png" alt="Customer avatar">
                </picture>
                <div class="h4 name fw-bolder">Christopher T.</div>
                <a href="https://www.google.com/maps/contrib/105475160819624793335/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@50.5779487,5.2632398,17z/data=!4m6!1m5!8m4!1e2!2s105475160819624793335!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                  <span>
                    Review on <b>Google maps</b>
                  </span>
                  <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                </a>
              </div>
              <div class="card-body-wrapper is-visible">
                <div class="card-body">
                  <p class="review">"I am delighted with model 2.
                    The Luminette is easy to use and allows me to be active in the morning and makes it easier
                    to fall asleep. My neurologist gave me good advice!
                    I will probably switch to model 3 in the future...
                    "
                  </p>
                  <div class="date">21 December 2020</div>
                </div>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="card">
              <div class="card-header text-center">
                <picture class="avatar d-block">
                  <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/9@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/9.png 1x"/>
                  <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/9.png" alt="Customer avatar">
                </picture>
                <div class="h4 name fw-bolder">Gregory E.</div>
                <a href="https://www.google.com/maps/contrib/117879807108998873428/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@50.3197246,6.3556338,7.58z/data=!4m4!1m3!8m2!1e1!2s117879807108998873428?hl=fr-BE" target="_blank" class="link">
                  <span>
                    Review on <b>Google maps</b>
                  </span>
                  <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                </a>
              </div>
              <div class="card-body-wrapper is-visible">
                <div class="card-body">
                  <p class="review">"I have had my luminettes 3 since March 2020 and I can't do without them anymore, they are perfect
                    for
                    jet lag or sleep disorders.
                    "
                  </p>
                  <div class="date">21 December 2020</div>
                </div>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="card">
              <div class="card-header text-center">
                <picture class="avatar d-block">
                  <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/10@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/10.png 1x"/>
                  <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/10.png" alt="Customer avatar">
                </picture>
                <div class="h4 name fw-bolder">Florence M.</div>
                <a href="https://www.google.com/maps/contrib/114308199652100072679/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@50.5779487,5.2632398,17z/data=!4m6!1m5!8m4!1e2!2s114308199652100072679!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                  <span>
                    Review on <b>Google maps</b>
                  </span>
                  <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                </a>
              </div>
              <div class="card-body-wrapper is-visible">
                <div class="card-body">
                  <p class="review">I have had them for a year now. They were recommended to me by my therapist, and I feel a real improvement in my mood and fatigue.
                  </p>
                  <div class="date">21 December 2020</div>
                </div>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="card">
              <div class="card-header text-center">
                <picture class="avatar d-block">
                  <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/11@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/11.png 1x"/>
                  <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/11.png" alt="Customer avatar">
                </picture>
                <div class="h4 name fw-bolder">Guillaume M.</div>
                <a href="https://www.google.com/maps/contrib/101195112554299989422/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@4.6513087,89.2730014,3z/data=!4m6!1m5!8m4!1e2!2s101195112554299989422!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                  <span>
                    Review on <b>Google maps</b>
                  </span>
                  <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                </a>
              </div>
              <div class="card-body-wrapper">
                <div class="card-body">
                  <p class="review">"I have been suffering from seasonal depression for years, so I decided to try light therapy
                    to compensate for the lack of winter sunshine, and I chose the ""glasses"" model
                    for the convenience of being able to do my morning routine and not having to stay glued
                    to
                    a light panel.
                    The results were quick, the usual sluggishness and general tiredness have almost disappeared and
                    and another benefit that I had not foreseen was that my tendency to have trouble falling asleep
                    in the evening vanished too, probably due to a readjustment of the
                    circadian rhythm...
                    All in all, it's an investment, but I don't regret it at all, and my
                    wife has also started using it too!
                    "
                  </p>
                  <button class="fw-bolder expand">Show more</button>
                  <div class="date">21 December 2020</div>
                </div>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="card">
              <div class="card-header text-center">
                <div class="avatar"></div>
                <div class="h4 name fw-bolder">Andi Philip</div>
                <a href="#" target="_blank" class="link">
                  <span>
                    Review on <b>Facebook</b>
                  </span>
                  <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                </a>
              </div>
              <div class="card-body-wrapper">
                <div class="card-body">
                  <p class="review">"I had a small Phillips light box previously, and it was a hassle to sit at the right angle,
                    distance, and time. With these, I don’t have to worry about any of those things. I just put
                    them
                    on, push the button, and wear them until they turn off. Easy to use whether I’m wearing my
                    glasses or contacts. Also, these don’t give me headaches like the Phillips light box did!
                    We have almost 4 people in my household wearing these every day — I will be buying a second
                    pair
                    soon! (Two of us have sleep past disorder and everyone seems to get a mood boost!)"
                  </p>
                  <button class="fw-bolder expand">Show more</button>
                  <div class="date">21 December 2020</div>
                </div>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="card">
              <div class="card-header text-center">
                <picture class="avatar d-block">
                  <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/13@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/13.png 1x"/>
                  <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/13.png" alt="Customer avatar">
                </picture>
                <div class="h4 name fw-bolder">Patricia</div>
                <a href="#" target="_blank" class="link">
                  <span>
                    Review on <b>Facebook</b>
                  </span>
                  <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                </a>
              </div>
              <div class="card-body-wrapper is-visible">
                <div class="card-body">
                  <p class="review">"Used medically for depression. These glasses have brought me a significant
                    improvement. Not awkward to wear, the light improves my mood, brings me
                    comfort,
                    and they are very useful.
                    "
                  </p>
                  <div class="date">21 December 2020</div>
                </div>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="card">
              <div class="card-header text-center">
                <picture class="avatar d-block">
                  <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/14@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/14.png 1x"/>
                  <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/14.png" alt="Customer avatar">
                </picture>
                <div class="h4 name fw-bolder">Hélène</div>
                <a href="https://www.google.com/maps/contrib/116715457571293643665/reviews/@49.9994005,2.560789,8z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                  <span>
                    Review on <b>Google maps</b>
                  </span>
                  <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                </a>
              </div>
              <div class="card-body-wrapper">
                <div class="card-body">
                  <p class="review">"You should do this as soon as you get up, the Luminette is quickly forgotten and you can go about your
                    your business. From the very first time you use it, you'll quickly feel
                    more awake and the mid-morning or afternoon slumps disappear quickly.
                    Really impressed.
                    "
                  </p>
                  <button class="fw-bolder expand">Show more</button>
                  <div class="date">21 December 2020</div>
                </div>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="card">
              <div class="card-header text-center">
                <div class="avatar"></div>
                <div class="h4 name fw-bolder">Anthony</div>
                <a href="https://www.google.com/maps/contrib/103414070215570066252/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@50.5779487,5.2632398,17z/data=!4m6!1m5!8m4!1e2!2s103414070215570066252!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                  <span>
                    Review on <b>Google maps</b>
                  </span>
                  <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                </a>
              </div>
              <div class="card-body-wrapper is-visible">
                <div class="card-body">
                  <p class="review">"I have been a user for more than ten years... the luminette has always helped me to get ""balanced"" during my night or early morning shifts
                    at work ... you feel better very quickly.
                    Reliable product and easy to use.
                    "
                  </p>
                  <div class="date">21 December 2020</div>
                </div>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="card">
              <div class="card-header text-center">
                <picture class="avatar d-block">
                  <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/15@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/15.png 1x"/>
                  <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/15.png" alt="Customer avatar">
                </picture>
                <div class="h4 name fw-bolder">Muriel T.</div>
                <a href="https://www.google.com/maps/contrib/105183132711717313101/place/ChIJ91jIr0sHwUcR8GAsRTiKCXQ/@50.5779487,5.2610511,17z/data=!4m6!1m5!8m4!1e2!2s105183132711717313101!3m1!1e1?hl=fr-BE" target="_blank" class="link">
                  <span>
                    Read the review on <b>Google </b>
                  </span>
                  <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                </a>
              </div>
              <div class="card-body-wrapper">
                <div class="card-body">
                  <p class="review">"I bought the Luminette to help me fight the winter blues. I use it every morning
                    when
                    I get up. What I like about the Luminette is that I can choose the length of the session (20, 30 or 60 minutes)
                    depending on my availability, and that I can go about my business during the session
                    (no need to stay in front of a lamp placed on the table). After
                    a few
                    days of use, I already noticed the result: no more depression on grey and rainy days.
                    Over time, I have felt less tired and have more energy. I really
                    recommend
                    the Luminette.
                    "
                  </p>
                  <button class="fw-bolder expand">Show more</button>
                  <div class="date">21 December 2020</div>
                </div>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="card">
              <div class="card-header text-center">
                <picture class="avatar d-block">
                  <source srcset="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/12@2x.png 2x, https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/12.png 1x"/>
                  <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/avatars/12.png" alt="Customer avatar">
                </picture>
                <div class="h4 name fw-bolder">Aurélie</div>
                <a href="https://www.amazon.fr/gp/customer-reviews/RWZSN5SZJF573/ref=cm_cr_getr_d_rvw_ttl?ie=UTF8&ASIN=B07VMRRB9Y" target="_blank" class="link">
                  <span>
                    Review on <b>Amazon</b>
                  </span>
                  <img src="https://d3sq5glv6xow4l.cloudfront.net/images/pages/customer-reviews/star.png" alt="Customer reviews 5 stars">
                </a>
              </div>
              <div class="card-body-wrapper">
                <div class="card-body">
                  <p class="review">"For years, I have suffered from seasonal depression. I have been advised by health professionals
                    (general practitioner, psychiatrist, psychologist and pharmacist) have advised me to
                    use
                    light therapy to improve my state in the fall and winter.
                    I hesitated for a long time and then I discovered the Luminette.
                    I use it in the morning, either while going about my business (breakfast, brushing my
                    teeth brushing...) or when I'm reading. After the session, I have much more energy and
                    motivation to face the day.
                    It is very practical because it can be worn at the same time as my glasses or
                    computer glasses.
                    They are made of a rather rigid plastic, but they seem to be strong.
                    They charge quite quickly. A charging indicator lets you know when it is finished.
                    Once charged, they can be used about 10 times.
                    There are 3 modes. The more powerful the light, the shorter the exposure time.
                    What is very practical is that you don't have to watch the time because they turn off by themselves once the
                    the session is over. The only small ""downside"" is that the most powerful mode
                    can be glaring when the surrounding light is weak.
                    I would recommend this product without hesitation, since it gives me a real moral boost
                    during short days.
                    "
                  </p>
                  <button class="fw-bolder expand">Show more</button>
                  <div class="date">21 December 2020</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class='lav-show-reviews lav-observe'>Show more</div>
      </div>

      <div class='lav-reviews__total'>
        <div class='lav-reviews__total-col'>
          <div class='lav-reviews__total-image'>
            <img src='${settings.dir}/img/reviews-trusted.svg' />
          </div>
          <div class='lav-reviews__total-info'>
            <div class='lav-reviews__total-score'>4.4</div>
            <div class='lav-reviews__total-stars'>
              <img src='${settings.dir}/img/reviews-stars.svg' />
            </div>
            <div class='lav-reviews__total-caption'>Trusted shops</div>
          </div>
        </div>
        <div class='lav-reviews__total-col'>
          <div class='lav-reviews__total-image'>
            <img src='${settings.dir}/img/reviews-amazon.svg' />
          </div>
          <div class='lav-reviews__total-info'>
            <div class='lav-reviews__total-score'>4.4</div>
            <div class='lav-reviews__total-stars'>
              <img src='${settings.dir}/img/reviews-stars.svg' />
            </div>
            <div class='lav-reviews__total-caption'>Amazon</div>
          </div>
        </div>
      </div>

      <div class='lav-reviews__preview-list lav-observe'>
        <div class='lav-reviews__preview' style='background-image: url(${settings.dir}/img/en-preview-review1.png);'>
          <div class="lav-reviews__play lav-open-modal" data-target='.lav-review-modal' data-src='https://www.youtube.com/embed/ye4x3DkSbvA?autoplay=0&start=0&showinfo=0&rel=0'>
            <img class='lav-reviews__play-btn' src='${settings.dir}/img/play.svg' />
            <img class='lav-reviews__play-btn' src='${settings.dir}/img/play-hover.svg' />
          </div>
        </div>

        <div class='lav-reviews__preview' style='background-image: url(${settings.dir}/img/en-preview-review2.png);'>
          <div class="lav-reviews__play lav-open-modal" data-target='.lav-review-modal' data-src='https://www.youtube.com/embed/hZpBFn_YKMY?autoplay=0&start=0&showinfo=0&rel=0'>
            <img class='lav-reviews__play-btn' src='${settings.dir}/img/play.svg' />
            <img class='lav-reviews__play-btn' src='${settings.dir}/img/play-hover.svg' />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class='lav-trial lav-section'>
    <div class='container-fluid container--size--lg lav-trial__container'>
      <div class='lav-trial__row lav-observe'>
        <img class='lav-trial__image' src='${settings.dir}/img/trial.png' />
  
        <div class='lav-trial__info'>
          <div class='lav-trial__title lav-title'>Essai de 30 jours</div>
          <div class='lav-trial__descr lav-text'>Testez les lunettes de luminothérapie Luminette pendant 30 jours, et si vous n'êtes pas satisfait, renvoyez-la nous et nous vous rembourserons !</div>
  
          <div class='lav-trial__buttons'>
            <div class='lav-trial__btn lav-trial__btn-refresh lav-tooltip-wrap'>
              <img src='${settings.dir}/img/icon-refresh.svg' />
              <span>
                Essai de 30 jours&nbsp;<span class="tooltip d-inline-block d-sm-none">
                  <img class='lav-info-invert' src="https://conversionratestore.github.io/projects/luminette/img/info.svg" alt="info"/>
                  <div class="tooltip-dropdown text-left fs-16">
                    <div class="tooltip-item">
                      <p class="mb-2">
                        Vous avez un mois pour tester votre Luminette. Nous recommandons d'utiliser la Luminette pendant au moins 10 jours consécutifs.
                      </p>
                      <p>
                        Toutefois, si vous n'êtes pas satisfait, vous pouvez choisir d'être remboursé dans les 30 jours suivant l'achat. Vous trouverez plus de détails sur notre page <a href="/delivery#returns-block" class="fw-semi bb-1 c-blue">Remboursements</a>.
                      </p>
                    </div>
                  </div>
                </span>
              </span>
              <div class="tooltip d-sm-flex d-none ml-2">
                <img class='lav-info-invert' src="https://conversionratestore.github.io/projects/luminette/img/info.svg" alt="info"/>
                <div class="tooltip-dropdown text-left fs-16">
                  <div class="tooltip-item">
                    <p class="mb-2">
                      Vous avez un mois pour tester votre Luminette. Nous recommandons d'utiliser la Luminette pendant au moins 10 jours consécutifs.
                    </p>
                    <p>
                      Toutefois, si vous n'êtes pas satisfait, vous pouvez choisir d'être remboursé dans les 30 jours suivant l'achat. Vous trouverez plus de détails sur notre page <a href="/delivery#returns-block" class="fw-semi bb-1 c-blue">Remboursements</a>.
                    </p>
                  </div> 
                </div>
              </div>
            </div>
  
            <div class='lav-trial__btn lav-trial__btn-box lav-tooltip-wrap'>
              <img src='${settings.dir}/img/icon-box-2.svg' />
              <span>
                Livraison gratuite&nbsp;<span class="tooltip d-inline-block d-sm-none">
                  <img class='lav-info-invert' src="https://conversionratestore.github.io/projects/luminette/img/info.svg" alt="info"/>
                  <div class="tooltip-dropdown text-left fs-16">
                    <div class="tooltip-item">
                      <div class="tooltip_free text-center mb-2">
                        <div class="d-flex align-items-center justify-content-center mb-2 pb-1">
                          <img height='24' src="${settings.dir}/img/flags-fr.png" alt="">
                        </div>
                        <p> Livraison gratuite en Europe: <div class="fw-bold d-block">2 à 5 jours ouvrables</div></p>
                      </div>
                      <div class="d-flex align-items-center justify-content-center mb-2 py-1">
                        <img class="mr-2" src="${settings.dir}/img/delivery-methods.png" />
                      </div>
                      <p class="">Orders are shipped from our logistics center located in Boise, Idaho. We use the services of FedEx Ground or USPS. Before they deliver your package, the carrier sends you an email warning you of the day of its passage.</p>
                    </div> 
                  </div>
                </span>
              </span>
              <div class="tooltip d-sm-flex d-none ml-2">
                <img class='lav-info-invert' src="https://conversionratestore.github.io/projects/luminette/img/info.svg" alt="info"/>
                <div class="tooltip-dropdown text-left fs-16">
                  <div class="tooltip-item">
                    <div class="tooltip_free text-center mb-2">
                      <div class="d-flex align-items-center justify-content-center mb-2 pb-1">
                        <img height='24' src="${settings.dir}/img/flags-fr.png" alt="">
                      </div>
                      <p> Livraison gratuite en Europe: <div class="fw-bold d-block">2 à 5 jours ouvrables</div></p>
                    </div>
                    <div class="d-flex align-items-center justify-content-center mb-2 py-1">
                      <img class="mr-2" src="${settings.dir}/img/delivery-methods.png" />
                    </div>
                    <p class="">Orders are shipped from our logistics center located in Boise, Idaho. We use the services of FedEx Ground or USPS. Before they deliver your package, the carrier sends you an email warning you of the day of its passage.</p>
                  </div> 
                </div>
              </div>
            </div>
          </div>
  
          <div class='lav-trial__actions'>
            <button class='lav-trial__btn btn-primary btn-lg flipped lav-btn-buy'>
              <span class="btn-text">
                Essayez-les pour 229 €
              </span>
              <span class="btn-bg-wrapper"></span>
            </button>
  
            <div class='lav-trial__inside lav-tooltip-wrap'>
              Que contient la boîte?
              <div class="tooltip d-flex ml-1">
                <img class='lav-info-invert' src="https://conversionratestore.github.io/projects/luminette/img/info.svg" alt="info"/>
                <div class="tooltip-dropdown text-left fs-16">
                  <div class="tooltip-item">
                    <img class='tooltip-include' src="${settings.dir}/img/tooltip-include.png" />
                    <div class='lav-list lav-tooltip-list'>
                      <div class='lav-list__item'>Votre Luminette</div>
                      <div class='lav-list__item'>Un étui de protection</div>
                      <div class='lav-list__item'>Un chargeur mural micro-USB</div>
                      <div class='lav-list__item'>Un tissu nettoyant en microfibres</div>
                      <div class='lav-list__item'>Votre certificat de garantie de 2 ans</div>
                      <div class='lav-list__item'>Le manuel d'utilisation</div>
                    </div>
                  </div> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class='lav-drive lav-section'>
    <div class='lav-drive__caption'>Discover our new product</div>
    <div class='lav-drive__title'>Drive</div>
    <img class='lav-drive__device' src='${settings.dir}/img/drive-device.png' />
    <div class='lav-drive__bg container'>
      <div class='lav-drive__bg-title'>Benefit from light therapy while driving</div>

      <div div class='lav-drive__actions'>
        <button class='lav-drive__btn btn-primary btn-lg flipped lav-btn-buy-drive'>
          <span class="btn-text">
            Buy $149
          </span>
          <span class="btn-bg-wrapper"></span>
        </button>

        <div class='lav-drive__learn'>Learn more</div>
      </div>
    </div>
  </section>
</main>
`;
/*** STYLES / end ***/

/********* Custom Code **********/
gaEvent('loaded');
preInit();

function preInit() {
  if (!document.body) {
    setTimeout(() => {
      preInit();
    }, 200);
    return false;
  }

  const stylesEl = document.createElement('style');
  stylesEl.innerHTML = styles;
  document.body.appendChild(stylesEl);

  // ** Splide Carousel ** //
  // const sliderStyles = document.createElement('link');
  // sliderStyles.rel = 'stylesheet';
  // sliderStyles.href =
  //   'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.1/dist/css/splide-core.min.css';
  // document.body.appendChild(sliderStyles);

  // let sliderScript = document.createElement('script');
  // sliderScript.src =
  //   'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.1/dist/js/splide.min.js';
  // document.body.append(sliderScript);

  init();

  // TODO
  // observerView();
}

function observerView() {
  const observerOptions = {
    root: null,
    threshold: 0,
    rootMargin: '-40%',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        if (entry.target.classList.contains('lav-jumb')) {
          gaEvent('section in view', 'first section');
        }
        if (entry.target.classList.contains('lav-transforms')) {
          gaEvent('section in view', 'How Luminette transforms your days?');
        }
        if (entry.target.classList.contains('lav-wear')) {
          gaEvent('section in view', "Luminette's light therapy benefits");
        }
        if (entry.target.classList.contains('lav-morning')) {
          gaEvent('section in view', 'Perfect for your morning routine');
        }
        if (entry.target.classList.contains('lav-benefits2')) {
          gaEvent('section in view', 'What are the benefits?');
        }
        if (entry.target.classList.contains('lav-works')) {
          gaEvent('section in view', 'How Luminette works');
        }
        if (entry.target.classList.contains('lav-users')) {
          gaEvent('section in view', 'Luminette users');
        }
        if (entry.target.classList.contains('lav-reviews')) {
          gaEvent('section in view', 'Customer reviews');
        }
        if (entry.target.classList.contains('lav-trial')) {
          gaEvent('section in view', '30 Day Light Therapy Trial');
        }
        if (entry.target.classList.contains('lav-drive')) {
          gaEvent('section in view', 'Drive');
        }

        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  for (let section of Array.from(document.querySelectorAll('.lav-section'))) {
    observer.observe(section);
  }
}

function addScrollEvents() {
  let isScrolled20,
    isScrolled40,
    isScrolled60,
    isScrolled80,
    isScrolled100 = false;

  window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;
    let docHeight = document.body.offsetHeight;
    let winHeight = window.innerHeight;
    let scrollPercent = scrollTop / (docHeight - winHeight);
    let scrollPercentRounded = Math.round(scrollPercent * 100);
    if (scrollPercentRounded >= 20 && !isScrolled20) {
      gaEvent('scroll depth', scrollPercentRounded + '%');
      isScrolled20 = true;
    }
    if (scrollPercentRounded >= 40 && !isScrolled40) {
      gaEvent('scroll depth', scrollPercentRounded + '%');
      isScrolled40 = true;
    }
    if (scrollPercentRounded >= 60 && !isScrolled60) {
      gaEvent('scroll depth', scrollPercentRounded + '%');
      isScrolled60 = true;
    }
    if (scrollPercentRounded >= 80 && !isScrolled80) {
      gaEvent('scroll depth', scrollPercentRounded + '%');
      isScrolled80 = true;
    }
    if (scrollPercentRounded >= 99 && !isScrolled100) {
      gaEvent('scroll depth', '100%');
      isScrolled100 = true;
    }
  });
}

function init() {
  if (!document.querySelector('.home-page')) {
    setTimeout(() => {
      init();
    }, 500);
    return false;
  }

  console.log('init');

  // TODO
  // setTimeout(addScrollEvents, 1500);

  document
    .querySelector('.home-page')
    .insertAdjacentHTML('afterbegin', newPage);

  return false;
  // let lang = detectLang();
  // if (lang != 'eng') {
  //   initTranslateMain(lang);
  // }
  // initDelivery(lang);

  // MoveTrial
  // if (window.innerWidth < 768) {
  //   document
  //     .querySelector('.lav-trial__descr')
  //     .insertAdjacentElement(
  //       'afterend',
  //       document.querySelector('.lav-trial__image')
  //     );
  // }

  // let initSplideInterval = setInterval(() => {
  //   if (typeof Splide == 'function') {
  //     clearInterval(initSplideInterval);
  //     let splide = new Splide('.lav-transforms__slider', {
  //       type: 'fade',
  //       rewind: true,
  //       arrows: false,
  //     }).mount();

  //     let splideReview = new Splide('.lav-reviews__list', {
  //       arrows: false,
  //       perPage: 3,
  //       pagination: false,
  //       autoWidth: true,
  //       breakpoints: {
  //         768: {
  //           perPage: 1,
  //           pagination: true,
  //           autoWidth: false,
  //           gap: 15,
  //         },
  //       },
  //     }).mount();

  //     splide.on('moved', function () {
  //       gaEvent('swipe slider', 'How Luminette transforms your days');
  //     });

  //     if (window.innerWidth < 992) {
  //       splideReview.on('moved', function () {
  //         gaEvent('Swipe', 'Customer reviews');
  //       });
  //     }
  //   }
  // }, 500);

  // for (let btn of document.querySelectorAll('.lav-btn-buy')) {
  //   btn.addEventListener('click', function (e) {
  //     e.preventDefault();
  //     document.querySelector('.glasses-item .btn-primary').click();
  //     if (this.classList.contains('lav-test__btn')) {
  //       gaEvent('Try it', 'Popup: You have 30 days to test Luminette');
  //     }
  //     if (this.classList.contains('lav-trials__btn')) {
  //       gaEvent('Try it', '30 day Light Therapy Trial');
  //     }
  //     if (this.classList.contains('lav-jumb__btn')) {
  //       gaEvent('Buy', 'First screen');
  //     }
  //   });
  // }

  // for (let btn of document.querySelectorAll('.lav-btn-buy-drive')) {
  //   btn.addEventListener('click', function (e) {
  //     e.preventDefault();
  //     gaEvent('Try it', 'Benefit from light therapy while driving');
  //     document.querySelector('.drive-item .btn-primary').click();
  //   });
  // }

  for (let item of document.querySelectorAll('.lav-works__item-trigger')) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      if (this.innerText == 'Show more' || this.innerText == 'Afficher plus') {
        if (this.classList.contains('lav-works__item-trigger-first')) {
          gaEvent(
            'Show more',
            'A patented, innovative light therapy system, for optimal comfort'
          );
        } else {
          gaEvent(
            'Show more',
            'White light enhanced with blue light for greater effectiveness'
          );
        }

        if (detectLang() == 'fr') {
          this.innerText = 'Montrer moins';
        } else {
          this.innerText = 'Show less';
        }
        this.closest('.lav-works__item')
          .querySelector('.lav-works__item-descr')
          .classList.remove('active');
        this.closest('.lav-works__item')
          .querySelector('.lav-works__item-descr + .lav-works__item-descr')
          .classList.add('active');
      } else {
        if (this.classList.contains('lav-works__item-trigger-first')) {
          gaEvent(
            'Show less',
            'A patented, innovative light therapy system, for optimal comfort'
          );
        } else {
          gaEvent(
            'Show less',
            'White light enhanced with blue light for greater effectiveness'
          );
        }
        if (detectLang() == 'fr') {
          this.innerText = 'Afficher plus';
        } else {
          this.innerText = 'Show more';
        }
        this.closest('.lav-works__item')
          .querySelector('.lav-works__item-descr')
          .classList.add('active');
        this.closest('.lav-works__item')
          .querySelector('.lav-works__item-descr + .lav-works__item-descr')
          .classList.remove('active');
      }
    });
  }

  for (let item of document.querySelectorAll('.lav-review__trigger')) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      this.closest('.lav-review').classList.add('lav-review_expand');
      this.closest('.lav-review')
        .querySelector('.lav-review__text')
        .classList.remove('active');
      this.closest('.lav-review')
        .querySelector('.lav-review__text + .lav-review__text')
        .classList.add('active');

      item.remove();

      return false;
      if (this.innerText == 'Show more' || this.innerText == 'Afficher plus') {
        if (detectLang() == 'fr') {
          this.innerText = 'Montrer moins';
        } else {
          this.innerText = 'Show less';
        }
        this.closest('.lav-review').classList.add('lav-review_expand');
        this.closest('.lav-review')
          .querySelector('.lav-review__text')
          .classList.remove('active');
        this.closest('.lav-review')
          .querySelector('.lav-review__text + .lav-review__text')
          .classList.add('active');
      } else {
        if (detectLang() == 'fr') {
          this.innerText = 'Afficher plus';
        } else {
          this.innerText = 'Show more';
        }

        this.closest('.lav-review').classList.remove('lav-review_expand');
        this.closest('.lav-review')
          .querySelector('.lav-review__text')
          .classList.add('active');
        this.closest('.lav-review')
          .querySelector('.lav-review__text + .lav-review__text')
          .classList.remove('active');
      }
    });

    if (window.innerWidth > 992) {
      item.click();
    }
  }

  document
    .querySelector('.lav-reviews__btn')
    .addEventListener('click', function (e) {
      e.preventDefault();
      gaEvent('See reviews', 'Under customer reviews');
      location.href += '/customer-reviews?product=luminette';
    });

  document
    .querySelector('.lav-trial__learn')
    .addEventListener('click', function (e) {
      e.preventDefault();
      gaEvent('Learn more', '30 day Light Therapy Trial');
      location.href += '/luminette';
    });

  document
    .querySelector('.lav-drive__learn')
    .addEventListener('click', function (e) {
      e.preventDefault();
      location.href += '/drive';
      gaEvent('Learn more', 'Benefit from light therapy while driving');
    });

  document
    .querySelector('.lav-works__study-btn')
    .addEventListener('click', function (e) {
      e.preventDefault();
      gaEvent('Read the study', 'An independent study');
      let el = document.createElement('a');
      el.target = '_blank';
      el.href =
        'https://d3sq5glv6xow4l.cloudfront.net/docs/Light_therapy_with_boxes_or_glasses_to_counteract_.pdf';
      el.click();
    });

  initModals();
}

function initModals() {
  document.querySelector('.lav-modal').addEventListener('click', function (e) {
    if (e.target.classList.contains('lav-modal')) {
      closeModal();
    }
  });

  for (let item of document.querySelectorAll('.lav-modal__close')) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      closeModal();
    });
  }

  if (document.querySelector('.lav-jumb__btn-refresh')) {
    document
      .querySelector('.lav-jumb__btn-refresh')
      .addEventListener('click', function (e) {
        e.preventDefault();
        gaEvent('30-day trial', '30 day Light Therapy Trial');
        openModal(document.querySelector('.lav-test'));
      });
  } else {
    document
      .querySelector('.lav-trial__btn-refresh')
      .addEventListener('click', function (e) {
        e.preventDefault();
        gaEvent('30-day trial', '30 day Light Therapy Trial');
        openModal(document.querySelector('.lav-test'));
      });
  }

  if (document.querySelector('.lav-trial__btn-box')) {
    document
      .querySelector('.lav-trial__btn-box')
      .addEventListener('click', function (e) {
        e.preventDefault();
        gaEvent('Free delivery', '30 day Light Therapy Trial');
        openModal(document.querySelector('.lav-delivery'));
      });
  } else {
    document
      .querySelector('.lav-jumb__btn-box')
      .addEventListener('click', function (e) {
        e.preventDefault();
        gaEvent('Free delivery', '30 day Light Therapy Trial');
        openModal(document.querySelector('.lav-delivery'));
      });
  }

  document
    .querySelector('.lav-test__item-info a')
    .addEventListener('click', function () {
      gaEvent('Refunds page', 'Popup: You have 30 days to test Luminette');
    });

  if (document.querySelector('.lav-trial__inside')) {
    document
      .querySelector('.lav-trial__inside')
      .addEventListener('click', function (e) {
        e.preventDefault();
        gaEvent('What`s in the box', '30 day Light Therapy Trial');
        openModal(document.querySelector('.lav-included'));
      });
  } else {
    document
      .querySelector('.lav-jumb__inside')
      .addEventListener('click', function (e) {
        e.preventDefault();
        gaEvent('What`s in the box', '30 day Light Therapy Trial');
        openModal(document.querySelector('.lav-included'));
      });
  }
}

function openModal(selector) {
  document.querySelector('.lav-modal').classList.add('active');
  setTimeout(() => {
    selector.classList.add('active');
  }, 400);

  if (selector.querySelector('iframe')) {
    selector.querySelector('iframe').src = selector
      .querySelector('iframe')
      .src.replace('autoplay=0', 'autoplay=1');
  }
}

function closeModal() {
  if (document.querySelector('.lav-modal__inner.active iframe')) {
    document.querySelector('.lav-modal__inner.active iframe').src = document
      .querySelector('.lav-modal__inner.active iframe')
      .src.replace('autoplay=1', 'autoplay=0');
  }
  document.querySelector('.lav-modal__inner.active').classList.remove('active');
  setTimeout(() => {
    document.querySelector('.lav-modal.active').classList.remove('active');
  }, 400);
}

function detectLang() {
  let lang = 'eng';
  // en-us / en-ca / en-gb
  // fr / fr-be / fr-ca
  if (location.href.includes('com/fr')) {
    lang = 'fr';
  }

  return lang;
}

function initTranslateMain(lang) {
  console.log('init translate', lang);
  if (lang == 'fr') {
    document.querySelector('.lav-jumb__title').innerText =
      'Dites au revoir au blues hivernal. Régulez votre sommeil.';

    document.querySelector('.lav-plate__title').innerText =
      "C'est quoi la Luminette ?";

    document.querySelector('.lav-plate__descr').innerText =
      "La Luminette® est une paire de lunettes de luminothérapie qui vous aide à réguler vos cycles de sommeil et retrouver votre niveau d'énergie en hiver.";

    for (let item of document.querySelectorAll('.lav-transform__title')) {
      item.innerText = 'Comment Luminette transforme vos journées';
    }

    for (let item of document.querySelectorAll('.lav-transform__title-mob')) {
      item.innerText = 'Comment Luminette transforme vos journées';
    }

    document.querySelector(
      '.lav-transform_first .lav-transform__descr'
    ).innerText =
      "La lumière émise par la Luminette reproduit les effets bénéfiques du soleil. En stoppant la sécrétion de mélatonine et en agissant directement sur le cerveau, la lumière permet de réguler les cycles de sommeil et d'optimiser son niveau d'énergie en hiver. ";
    document.querySelector(
      '.lav-transform_second .lav-transform__descr'
    ).innerText =
      'Lorsque nous ne recevons pas assez de lumière le matin, le cerveau continue à produire de la mélatonine après le réveil, ce qui augmente notre fatigue et perturbe notre sommeil.';

    document.querySelector('.lav-benefits__title').innerText =
      'Les avantages de la Luminette';

    document.querySelector(
      '.lav-benefits__list .lav-benefit:first-child .lav-benefit__title'
    ).innerText = 'Finissez-en avec le blues hivernal';

    document.querySelector(
      '.lav-benefits__list .lav-benefit:nth-child(2) .lav-benefit__title'
    ).innerText = 'Régulez vos cycles de sommeil';

    document.querySelector(
      '.lav-benefits__list .lav-benefit:last-child .lav-benefit__title'
    ).innerText = "Retrouvez votre niveau d'énergie";

    document.querySelector('.lav-morning__title').innerText =
      'Parfait pour votre routine matinale';
    document.querySelector('.lav-morning__descr').innerText =
      'Portez la Luminette tout en vous brossant les dents, en prenant votre petit-déjeuner ou en travaillant sur votre ordinateur - le complément parfait à votre routine matinale.';
    document.querySelector(
      '.lav-morning__item:first-child .lav-morning__caption'
    ).innerHTML = 'Une session dure entre <br/><span>20 à 60 minutes</span>';
    document.querySelector(
      '.lav-morning__item:nth-child(2) .lav-morning__caption'
    ).innerHTML = 'A utiliser <span>une fois par jour</span>';
    document.querySelector(
      '.lav-morning__item:last-child .lav-morning__caption'
    ).innerHTML =
      'Ressentez les bienfaits dans les<br/><span>4 à 6 jours</span>';

    document.querySelector('.lav-benefits2__title').innerText =
      'Quels sont les avantages ?';
    document.querySelector(
      '.lav-benefit2:first-child .lav-benefit2__title'
    ).innerText = 'Léger et confortable';
    document.querySelector(
      '.lav-benefit2:first-child .lav-benefit2__caption'
    ).innerText =
      "La Luminette ne pèse que 51 g et est dotée d'un support pour le nez nasal ergonomique et ajustable.";
    document.querySelector(
      '.lav-benefit2:nth-child(2) .lav-benefit2__title'
    ).innerText = 'Ne gêne pas votre vue';
    document.querySelector(
      '.lav-benefit2:nth-child(2) .lav-benefit2__caption'
    ).innerText =
      "Le système d'éclairage breveté vous permet de bénéficier de la luminothérapie sans perturber votre vision.";
    document.querySelector(
      '.lav-benefit2:last-child .lav-benefit2__title'
    ).innerText = 'Compatible avec des lunettes de vue';
    document.querySelector(
      '.lav-benefit2:last-child .lav-benefit2__caption'
    ).innerText = 'Portez la Luminette par-dessus vos lunettes';

    document.querySelector('.lav-works__title').innerText =
      'Comment fonctionne la Luminette';
    document.querySelector(
      '.lav-works__item .lav-works__item-title'
    ).innerText = 'Un système innovant breveté pour un confort optimal.';
    document.querySelector(
      '.lav-works__item .lav-works__item-descr'
    ).innerText = 'Luminette® utilise une...';
    document.querySelector(
      '.lav-works__item .lav-works__item-descr + .lav-works__item-descr'
    ).innerText =
      'Luminette® utilise une technologie optique innovante brevetée : placé au-dessus de la vue, son faisceau de lumière est orienté du haut vers le bas, comme cela se produit naturellement sous un ciel bleu et permet aux utilisateurs de garder leur vision libre.';

    document.querySelector(
      '.lav-works__item + .lav-works__item .lav-works__item-title'
    ).innerHTML =
      'Une lumière enrichie en <span>bleu pour</span> plus d’efficacité.';
    document.querySelector(
      '.lav-works__item + .lav-works__item .lav-works__item-descr'
    ).innerText = 'La Luminette émet une...';
    document.querySelector(
      '.lav-works__item + .lav-works__item .lav-works__item-descr + .lav-works__item-descr'
    ).innerText =
      "La Luminette émet une lumière blanche enrichie en bleu, à 468 nm. Il est en effet prouvé que c'est cette longueur d'onde qui active le plus efficacement la réponse énergisante du corps à la lumière.";
    for (let item of document.querySelectorAll('.lav-works__item-trigger')) {
      item.innerText = 'Afficher plus';
    }
    document.querySelector('.lav-works__study-caption').innerHTML =
      "Une <span>étude indépendante</span> a montré que la Luminette donne les mêmes résultats qu'une lampe de 10 000 lux.";
    document.querySelector('.lav-works__study-btn span').innerText =
      "Lire l'étude";

    document.querySelector('.lav-users__title').innerHTML =
      'Plus de <span>150 000</span> utilisateurs de la Luminette';
    document.querySelector('.lav-users__title-mob').innerHTML =
      '<span>150k+</span> utilisateurs de la Luminette';
    document.querySelector('.lav-reviews__title').innerText =
      'Avis des utilisateurs';
    document.querySelector(
      '.lav-review:nth-child(2) .lav-review__text'
    ).innerText =
      "Chaque année, je ressens un manque de lumière et cela affecte mon moral. Cette année, j'ai trouvé la solution pour y remédier avec la Luminette. L'avantage c'est qu'on n'est pas coincé devant une lampe et qu'on peut se préparer le matin ou prendre son petit déjeuner avec ses lunettes. C'est très pratique :)";

    document.querySelector(
      '.lav-review:nth-child(1) .lav-review__text'
    ).innerText =
      "Depuis des années, je souffre de dépression saisonnière. Des professionnels de la santé (médecin généraliste, psychiatre, psychologue et pharmacienne) m'ont conseillé d'avoir recours à la luminothérapie pour améliorer mon état en automne et en hiver. J'ai hésité long...";

    document.querySelector(
      '.lav-review:nth-child(1) .lav-review__text + .lav-review__text'
    ).innerText =
      "Depuis des années, je souffre de dépression saisonnière. Des professionnels de la santé (médecin généraliste, psychiatre, psychologue et pharmacienne) m'ont conseillé d'avoir recours à la luminothérapie pour améliorer mon état en automne et en hiver. J'ai hésité longuement et puis j'ai découvert les Luminette. Je les utilise le matin, soit en vaquant à mes occupations (petit déjeuner, brossage de dents...) soit pendant que je lis. Après la séance, j'ai beaucoup plus d'énergie et de motivation pour faire face à la journée. Elles sont très pratiques car elles peuvent se porter en même temps que des lunettes de vue ou d'ordinateur. Elles sont constituées de plastique, assez rigide, mais paraissent solides. Le chargement est assez rapide. Un indicateur de chargement permet de savoir quand ce dernier est terminé. Une fois chargées, elles peuvent être utilisées environ 10 fois. Il y a 3 modes possibles. Plus la lumière est puissante, plus le temps d'exposition est réduit. Ce qui est très pratique c'est qu'il ne faut pas surveiller le temps car elles s'éteignent toutes seules une fois la séance terminée. Le seul mini « bémol » est que le mode le plus puissant peut être éblouissant quand la luminosité environnante est faible. C'est donc un accessoire que je recommanderais sans hésitation, car il me donne un vrai coup de pouce moralement pendant les courtes journées.";

    document.querySelector(
      '.lav-review:nth-child(3) .lav-review__text'
    ).innerText =
      "J'utilise les Luminettes depuis début octobre 2020 pour faire face à ma dépression saisonnière (SAD). Jusqu'à présent, je n'ai aucun symptôme de dépression saisonnière, malgré le changement d'heure (heure d'hiver) et la disparition du soleil à 16h30. C'est une premi...";

    document.querySelector(
      '.lav-review:nth-child(3) .lav-review__text + .lav-review__text'
    ).innerText =
      "J'utilise les Luminettes depuis début octobre 2020 pour faire face à ma dépression saisonnière (SAD). Jusqu'à présent, je n'ai aucun symptôme de dépression saisonnière, malgré le changement d'heure (heure d'hiver) et la disparition du soleil à 16h30. C'est une première. Je suis étonné. Mon niveau d'énergie a augmenté et je me sens libre et joyeux la plupart du temps. Je dors aussi beaucoup mieux. Je dois ajouter que j'ai arrêté la caféine, ce qui aide aussi. Les Luminettes sont bien, bien meilleure que les lampes. Je les porte tous les matins sans être obligé de fixer la lampe. Mon humeur s'est vraiment améliorée. Elles sont très pratiques et faciles à utiliser. Je les mets sur le dessus de mes lunettes. Elles se rechargent facilement et on peut les utiliser sans les brancher tous les jours. Tous ceux qui me voient les porter (quand je participe à des réunions en ligne, quand je vais chez le dentiste, etc.) me demandent si ça marche. Les gens trouvent que c'est joli et ils sont très intéressés parce qu'il y a toujours quelqu'un dans leur famille qui souffre de dépression saisonnière, ou bien ils sont eux-mêmes atteints de ce trouble. Donc, vraiment, je ne me plains pas, je n'ai que des bonnes choses à dire sur mes Luminettes qui sont aussi précieuses maintenant que mon téléphone portable.";

    for (let item of document.querySelectorAll('.lav-review__trigger')) {
      item.innerText = 'Afficher plus';
    }

    for (let item of document.querySelectorAll('.lav-review__link')) {
      item.innerHTML = item.innerHTML.replace(
        'View review on',
        "Lire l'avis sur"
      );
    }
    for (let item of document.querySelectorAll('.lav-works__item-trigger')) {
      item.innerText = 'Afficher plus';
    }
    document.querySelector(
      '.lav-reviews__total-col:first-child .lav-reviews__total-caption span'
    ).innerText = 'Voir les avis sur';
    document.querySelector(
      '.lav-reviews__total-col:last-child .lav-reviews__total-caption span'
    ).innerText = 'Voir les avis sur';
    document.querySelector('.lav-reviews__btn .btn-text').innerText =
      'Voir les avis';

    document.querySelector('.lav-trial__title').innerText = 'Essai de 30 jours';
    document.querySelector('.lav-trial__descr').innerText =
      "Testez les lunettes de luminothérapie Luminette pendant 30 jours, et si vous n'êtes pas satisfait, renvoyez-la nous et nous vous rembourserons !";
    document.querySelector('.lav-trial__inside').innerText =
      'Que contient la boîte ?';
    document.querySelector('.lav-trial__btn-refresh span').innerText =
      'Essai de 30 jours';
    document.querySelector('.lav-trial__btn-box span').innerText =
      'Livraison gratuite';

    document.querySelector('.lav-trial__learn').innerText = 'En savoir plus';

    document.querySelector('.lav-included__title').innerText =
      'Ce que vous trouverez dans la boite';
    document.querySelector('.lav-included__item:nth-child(1)').innerText =
      'Votre Luminette';
    document.querySelector('.lav-included__item:nth-child(2)').innerText =
      'Un étui de protection';
    document.querySelector('.lav-included__item:nth-child(3)').innerText =
      'Un chargeur mural micro-USB';
    document.querySelector('.lav-included__item:nth-child(4)').innerText =
      'Un tissu nettoyant en microfibres';
    document.querySelector('.lav-included__item:nth-child(5)').innerText =
      'Votre certificat de garantie de 2 ans';
    document.querySelector('.lav-included__item:nth-child(6)').innerText =
      "Le manuel d'utilisation";

    document.querySelector('.lav-test__title').innerText =
      'Vous avez 30 jours pour tester la Luminette';
    document.querySelector(
      '.lav-test__item:nth-child(1) .lav-test__item-info'
    ).innerHTML = "<span>Commandez</span> votre Luminette aujourd'hui.";
    document.querySelector(
      '.lav-test__item:nth-child(2) .lav-test__item-info'
    ).innerHTML =
      'Vous recevez votre Luminette <span>quelques jours plus tard</span>';
    document.querySelector(
      '.lav-test__item:nth-child(3) .lav-test__item-info'
    ).innerHTML =
      "<span>Vous avez un mois pour tester votre Luminette.</span> Nous recommandons d'utiliser la Luminette pendant au moins 10 jours consécutifs.";
    document.querySelector(
      '.lav-test__item:nth-child(4) .lav-test__item-info'
    ).innerHTML =
      "Après un mois, vous pouvez choisir d'être remboursé si vous n'êtes pas satisfait, peu importe la raison. Plus d'info sur la page <a href='/delivery#returns-block'>livraison et retour</a>";

    document.querySelector('.lav-drive__caption').innerText =
      'Découvrez notre nouveau produit';
    document.querySelector('.lav-drive__bg-title').innerText =
      'Bénéficiez de la luminothérapie tout en conduisant';

    document.querySelector('.lav-drive__learn').innerText = 'En savoir plus';
  }
}

function initDelivery(lang) {
  console.log('initDelivery');
  if (
    location.href.includes('com/en-us') ||
    location.href.includes('com/en-ca')
  ) {
    if (location.href.includes('com/en-ca')) {
      document.querySelector('.lav-test__btn .btn-text').innerText =
        'Try it $249';
      if (location.href.includes('/luminette')) {
        document.querySelector('.lav-jumb__actions .btn-text').innerText =
          'Buy $249';
      } else {
        document.querySelector('.lav-jumb__btn .btn-text').innerText =
          'Buy $249';
        document.querySelector('.lav-trial__actions .btn-text').innerText =
          'Try it $249';
        document.querySelector('.lav-drive__btn .btn-text').innerText =
          'Buy $189';
      }
    }
    return false;
  }

  if (location.href.includes('com/uk') && !location.href.includes('com/uk-')) {
    document.querySelector('.lav-delivery__plate > img').src =
      settings.dir + '/img/flags-gb.png';
    document.querySelector('.lav-delivery__plate-caption').innerHTML =
      'Free for United Kingdom:<br/><span>1 to 3 working days</span>';
    document.querySelector('.lav-delivery__methods-title + img').src =
      settings.dir + '/img/delivery-methods2.png';
    document.querySelector('.lav-delivery__descr').innerText =
      "For any orders from the UK, the parcels are shipped from Amazon's warehouses located in the UK with Amazon's selected carrier. Before delivering your order, the carrier will send you a SMS or Email, informing you of the day it will be delivered. You have the option of delaying delivery for up to 3 days. If you do not reply, the delivery date will be that proposed by the transporter.";
    return false;
  }

  if (location.href.includes('com/fr')) {
    document.querySelector('.lav-delivery__title').innerText =
      'Livraison gratuite';
    document.querySelector('.lav-delivery__methods-title').innerText =
      'Mode de livraison';

    if (document.querySelector('.lav-reviews')) {
      document.querySelector('.lav-reviews__placeholder').src =
        settings.dir + '/img/reviews-video-fr.jpg';

      document.querySelector('.lav-review-modal iframe').src =
        'https://www.youtube.com/embed/JcnfVN5iswE?autoplay=0&start=0&showinfo=0&rel=0';
    }
  }

  if (location.href.includes('com/fr') && !location.href.includes('com/fr-')) {
    document.querySelector('.lav-test__btn .btn-text').innerText =
      'Essayez-les pour 229 €';
    if (location.href.includes('/luminette')) {
      document.querySelector('.lav-jumb__actions .btn-text').innerText =
        'Achat 229 €';
    } else {
      document.querySelector('.lav-jumb__btn .btn-text').innerText =
        'Achat 229 €';
      document.querySelector('.lav-trial__actions .btn-text').innerText =
        'Essayez-les pour 229 €';
      document.querySelector('.lav-drive__btn .btn-text').innerText =
        'Achat 179 €';
    }

    document.querySelector('.lav-delivery__plate > img').src =
      settings.dir + '/img/flags-fr.png';
    document.querySelector('.lav-delivery__plate-caption').innerHTML =
      'Livraison gratuite en France:<br/><span>2 à 5 jours ouvrables</span>';
    document.querySelector('.lav-delivery__methods-title + img').src =
      settings.dir + '/img/delivery-methods2.png';
    document.querySelector('.lav-delivery__descr').innerText =
      'Nous travaillons le plus souvent avec Colissimo. Avant de vous livrer votre colis, le transporteur vous enverra un email avec un lien vous permettant de suivre le colis.';
    return false;
  }

  if (location.href.includes('com/fr-be')) {
    document.querySelector('.lav-test__btn .btn-text').innerText =
      'Essayez-les pour 229€';
    if (location.href.includes('/luminette')) {
      document.querySelector('.lav-jumb__actions .btn-text').innerText =
        'Achat 229€';
    } else {
      document.querySelector('.lav-jumb__btn .btn-text').innerText =
        'Achat 229€';
      document.querySelector('.lav-trial__actions .btn-text').innerText =
        'Essayez-les pour 229€';
      document.querySelector('.lav-drive__btn .btn-text').innerText =
        'Achat 179€';
    }
    document.querySelector('.lav-delivery__plate > img').src =
      settings.dir + '/img/flags-be.png';
    document.querySelector('.lav-delivery__plate-caption').innerHTML =
      'Livraison gratuite en Belgique:<br/><span>1 à 3 jours ouvrables</span>';
    document.querySelector('.lav-delivery__methods-title + img').src =
      settings.dir + '/img/delivery-methods2.png';
    document.querySelector('.lav-delivery__descr').innerText =
      'Nous travaillons le plus souvent avec Bpost. Avant de vous livrer votre colis, le transporteur vous enverra un email avec un lien vous permettant de suivre le colis.';
    return false;
  }

  if (location.href.includes('com/fr-ca')) {
    document.querySelector('.lav-test__btn .btn-text').innerText =
      'Essayez-les pour $249';
    if (location.href.includes('/luminette')) {
      document.querySelector('.lav-jumb__actions .btn-text').innerText =
        'Achat $249';
    } else {
      document.querySelector('.lav-jumb__btn .btn-text').innerText =
        'Achat $249';
      document.querySelector('.lav-trial__actions .btn-text').innerText =
        'Essayez-les pour $249';
      document.querySelector('.lav-drive__btn .btn-text').innerText =
        'Achat $189';
    }
    document.querySelector('.lav-delivery__plate > img').src =
      settings.dir + '/img/flags.png';
    document.querySelector('.lav-delivery__plate-caption').innerHTML =
      'Pour les États-Unis et le Canada:<br/><span>3 à 5 jours ouvrables</span>';
    document.querySelector('.lav-delivery__methods-title + img').src =
      settings.dir + '/img/delivery-methods.png';
    document.querySelector('.lav-delivery__descr').innerText =
      "Nous travaillons le plus souvent avec la logistique Fulfilled-by-Amazon (FBA) qui dispose d'entrepôts au Canada. Nous utilisons généralement le transporteur Purolator pour envoyer les colis. Avant de livrer votre colis, le transporteur vous envoie un email vous avertissant du jour de son passage.";
    return false;
  }
}
