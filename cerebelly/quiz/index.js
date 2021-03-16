function gaEvent(action) {
  try {
    dataLayer.push({
      event: 'event-to-ga',
      eventCategory: 'Exp: Survey Improvement',
      eventAction: action
    });
  } catch (e) {
    console.log(e);
  }
}

(function (h, o, t, j, a, r) {
  h.hj =
    h.hj ||
    function () {
      (h.hj.q = h.hj.q || []).push(arguments);
    };
  h._hjSettings = { hjid: 2171597, hjsv: 6 };
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
hj('trigger', 'survey_improvement');
gaEvent('loaded');

// setTimeout(() => {
//   hj('trigger', 'pl_benefits');
// }, 2000);
// gaEvent("loaded", "");

// window.dataLayer = window.dataLayer || [];
// dataLayer.push({
// 'event': 'event-to-ga',
// 'eventCategory': 'Exp - pl_benefits',
// 'eventAction': 'loaded'
// });

/* STYLES insert start */
let stylesList = `
.quiz2-intro-form-wrap h4,
.e-page-content-wrap .quiz2-intro-wrap .quiz-disclaimer,
.e-page-content-wrap .quiz2-intro-wrap .quiz-name-wrap {
  display: none;
}

.e-page-content-wrap .quiz2-intro-wrap .quiz-name-wrap.b-date-input {
  display: block;
  margin-top: 0 !important;
}

.css-8r2qqr button.button.blue {
  font-weight: 600;
  font-size: 18px;
  line-height: 18px;
  padding: 18px 47px;
}

@media (max-width: 600px) {
  .css-8r2qqr button.button.blue {
    display: block;
    padding: 15px;
    max-width: 260px;
    min-width: auto;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
}

.step-one__next-wrap {
  margin-top: 40px;
}

@media (max-width: 600px) {
  .step-one__next-wrap {
    margin-top: 30px;
  }
}

.step-one__next-wrap .e-back-btn {
  position: absolute;
  left: 22px;
  -webkit-transform: translateY(13px);
          transform: translateY(13px);
}

@media (max-width: 600px) {
  .e-page-content-wrap .quiz2-intro-wrap.quiz-content-top .quiz2-intro-form {
    padding: 0 20px !important;
  }
}

.e-page-content-wrap .quiz2-intro-wrap .quiz2-intro-form-wrap h3 {
  font-size: 26px;
}

@media (max-width: 600px) {
  .e-page-content-wrap .quiz2-intro-wrap .quiz2-intro-form-wrap h3 {
    font-size: 22px;
  }
}

@media (max-width: 600px) {
  .e-page-content-wrap .quiz2-intro-wrap {
    display: block;
  }
}

.e-page-content-wrap .quiz2-intro-wrap .quiz2-intro-form-wrap .e-text-field {
  background: #ffffff;
  border: 1px solid #cfcfcf;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 5px;
  text-align: left;
  height: 45px;
  padding: 10px 20px;
  max-width: 100%;
}

.e-page-content-wrap .quiz2-intro-wrap .quiz-name-wrap {
  margin-top: 25px !important;
}

.e-page-content-wrap .quiz2-intro-wrap .quiz2-intro-form-wrap .input-wrapper {
  border: none;
  max-width: 300px;
  padding: 0;
  margin: 0;
  margin-top: 15px;
  margin-left: 0 !important;
}

@media (max-width: 600px) {
  .e-page-content-wrap .quiz2-intro-wrap .quiz2-intro-form-wrap .input-wrapper {
    max-width: 260px;
    margin-left: auto !important;
    margin-right: auto !important;
  }
}

.e-page-content-wrap .quiz2-intro-wrap .quiz2-intro-form .quiz2-intro-form-wrap {
  max-width: 700px;
  padding: 30px 0 45px;
  width: 100%;
}

.e-page-content-wrap .quiz2-intro-wrap .quiz2-intro-form {
  -ms-flex-wrap: nowrap;
      flex-wrap: nowrap;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-flow: row;
          flex-flow: row;
  -webkit-box-align: normal;
      -ms-flex-align: normal;
          align-items: normal;
  padding: 0;
}

@media (max-width: 1200px) {
  .e-page-content-wrap .quiz2-intro-wrap .quiz2-intro-form {
    display: block;
  }
}

.step-one__disclaimer {
  display: none;
  margin-top: 43px;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
}

@media (max-width: 600px) {
  .step-one__disclaimer {
    text-align: center;
    font-size: 14px;
    line-height: 14px;
    max-width: 260px;
    margin: 33px auto;
  }
}

.step-one__finish-wrap {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: none;
  margin-top: 20px;
  flex-wrap: wrap;
}

@media (max-width: 600px) {
  .step-one__finish-wrap {
    margin-top: 0;
    justify-content: center;
  }
}

.e-page-content-wrap .quiz2-intro-wrap .quiz-name-wrap + .error-message {
  display: none;
}

.step-one__back {
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 0.01em;
  color: #3856a7;
  margin-right: 35px;
  cursor: pointer;
  position: absolute;
  left: 20px;
  padding-left: 15px;
  line-height: 1;
}

@media (max-width: 992px) {
  .step-one__back {
    position: relative;
    left: 0;
  }
}

@media (max-width: 600px) {
  .step-one__back {
    margin-right: 0;
    margin-bottom: 20px;
  }
}

.step-one__back:before {
  content: '';
  position: absolute;
  left: 0;
  top: 6px;
  width: 8px;
  height: 8px;
  border-left: 3px solid #3856a7;
  border-bottom: 3px solid #3856a7;
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
}

.step-one__back:hover {
  opacity: 0.7;
}

.step-one__side {
  padding: 70px 30px;
  max-width: 370px;
  margin-right: auto;
}

@media (max-width: 600px) {
  .step-one__side {
    display: block !important;
    max-width: 100%;
    width: 100%;
    text-align: center;
    padding: 20px;
  }
}

.step-one__side-title {
  font-weight: bold;
  font-size: 28px;
  line-height: 37px;
  color: #15226a;
  margin-top: 25px;
}

@media (max-width: 600px) {
  .step-one__side-title {
    margin-top: 0;
    font-size: 24px;
    line-height: 28px;
  }
}

.step-one__side-caption {
  line-height: 24px;
  color: #3856a7;
  font-size: 18px;
  font-weight: 600;
  margin-top: 35px;
  max-width: 270px;
}

@media (max-width: 600px) {
  .step-one__side-caption {
    display: none;
  }
}

.step-one__progress_desk {
  margin-bottom: 70px;
}

@media (max-width: 600px) {
  .step-one__progress_desk {
    display: none;
  }
}

.step-one__progress_mob {
  display: none;
  text-align: center;
  margin-bottom: 30px;
}

@media (max-width: 600px) {
  .step-one__progress_mob {
    display: block;
  }
}

.step-one__title {
  margin-bottom: 50px;
  font-size: 26px;
  line-height: 1;
  font-weight: 700;
}

@media (max-width: 600px) {
  .step-one__title {
    text-align: center;
    margin-bottom: 20px;
    font-size: 22px;
  }
}

.step-one__text {
  font-size: 18px;
  line-height: 1;
}

.step-one__gender-toggler {
  cursor: pointer;
}

.step-one__gender-toggler:hover {
  opacity: 0.8;
}

@media (max-width: 600px) {
  .step-one__gender-toggler:hover {
    opacity: 1;
  }
}

.step-one__child {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 65px;
}

@media (max-width: 600px) {
  .step-one__child {
    display: block;
    text-align: center;
    margin-bottom: 30px;
  }
}

.step-one__child-genders {
  margin: 0 15px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  line-height: 0;
}

@media (max-width: 600px) {
  .step-one__child-genders {
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    margin: 15px 0;
  }
}

.step-one__child-gender {
  border: 3px solid #fff;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  border-radius: 6px;
  overflow: hidden;
  background-color: #fff;
  width: 60px;
  height: 60px;
  border: 2px solid rgba(56, 86, 167, 0.2);
}

.step-one__child-gender.active {
  border-color: #3856a7;
}

.step-one__child-gender + .step-one__child-gender {
  margin-left: 20px;
}

.step-one__child-twins {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

@media (max-width: 600px) {
  .step-one__child-twins {
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
  }
}

.step-one__child-checkbox {
  position: relative;
  width: 24px;
  height: 24px;
  background: #ffffff;
  border-radius: 6px;
  margin-right: 9px;
  -webkit-transition: 0.35s;
  transition: 0.35s;
  border: 2px solid rgba(56, 86, 167, 0.2);
}

.step-one__child-checkbox:before {
  content: '';
  width: 5px;
  height: 10px;
  opacity: 0;
  border-bottom: 2px solid #fff;
  border-right: 2px solid #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -60%) rotate(45deg);
  transform: translate(-50%, -60%) rotate(45deg);
  -webkit-transition: 0.35s;
  transition: 0.35s;
}

.active .step-one__child-checkbox {
  background-color: #3957a5;
}

.active .step-one__child-checkbox:before {
  opacity: 1;
}

.step-one__birth {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  white-space: nowrap;
}

@media (max-width: 600px) {
  .step-one__birth {
    display: block;
    text-align: center;
  }
}

.step-one__birth .step-one__text {
  margin-right: 20px;
}

@media (max-width: 600px) {
  .step-one__birth .step-one__text {
    margin-right: 0;
    margin-bottom: 10px !important;
  }
}

.step-one__birth input[type='date'] {
  max-width: 243px;
  min-width: auto;
  width: 100%;
  padding: 4px 12px 6px 18px;
  text-align: left;
  font-weight: 700;
  width: 100%;
  line-height: 135%;
  color: #15206b;
  height: 44px;
  font-size: 24px;
  margin-top: 0;
}

@media (max-width: 600px) {
  .step-one__birth input[type='date'] {
    max-width: 260px;
    margin: auto;
  }
}

.go-cards-list {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 1fr 1fr;
      grid-template-columns: 1fr 1fr;
  gap: 14px 20px;
  max-width: 700px;
  margin-top: 25px;
}

@media (max-width: 768px) {
  .go-cards-list {
    margin-top: 20px;
    -ms-grid-columns: 1fr;
        grid-template-columns: 1fr;
    gap: 10px;
  }
}

.go-cards-sidebar {
  width: 425px;
  background: #a7d4cd;
  padding: 60px 30px;
  font-weight: bold;
  font-size: 44px;
  line-height: 50px;
  color: #15226a;
  -ms-flex-negative: 0;
      flex-shrink: 0;
}

@media (max-width: 1200px) {
  .go-cards-sidebar {
    width: 100%;
    text-align: center;
  }
}

@media (max-width: 768px) {
  .go-cards-sidebar {
    font-size: 28px;
    line-height: 1;
    padding: 50px 15px;
  }
}

.e-page-content-wrap .quiz-milestone-cards {
  max-width: 700px;
}

@media (max-width: 768px) {
  .e-page-content-wrap .quiz-milestone-cards {
    padding: 10px 20px 0;
  }
}

.e-page-content-wrap .button-wrapper {
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: flex-start;
  margin-top: 0 !important;
  margin-bottom: 40px;
}

@media (max-width: 599px) {
  .e-page-content-wrap .button-wrapper {
    padding-top: 10px;
    padding-bottom: 10px;
  }
}

@media (max-width: 599px) {
  .e-page-content-wrap #prev-button {
    margin-top: 5px;
    margin-bottom: 0 !important;
  }
}

.quiz2-intro-form button.button.blue {
  margin-top: 0 !important;
}

@media (max-width: 599px) {
  .quiz2-intro-form button.button.blue {
    margin: 0 auto !important;
  }
}

.e-page-content-wrap .quiz-milestone-cards .cards-wrapper {
  opacity: 0;
  pointer-events: none;
}

.quiz-milestone-cards button.button.blue {
  margin: 0 !important;
}

@media (max-width: 599px) {
  .quiz-milestone-cards button.button.blue {
    padding: 10px;
    margin-bottom: 10px;
  }
}

.e-page-content-wrap .quiz-milestone-cards .card label {
  background: #ffffff;
  border: 2px solid rgba(56, 86, 167, 0.2);
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  border-radius: 20px;
  padding: 6px 32px 7px;
  display: inline-block;
}

@media (max-width: 768px) {
  .e-page-content-wrap .quiz-milestone-cards .card label {
    display: block;
    max-width: 400px;
    margin: auto;
  }
}

@media (max-width: 599px) {
  .e-page-content-wrap .quiz-milestone-cards .card label {
    min-height: auto;
    max-width: 300px;
    width: 100%;
  }
}

.e-page-content-wrap .quiz-milestone-cards .card label:hover {
  -webkit-box-shadow: rgba(21, 32, 107, 0.15) 0px 2px 8px;
          box-shadow: rgba(21, 32, 107, 0.15) 0px 2px 8px;
}

.e-page-content-wrap .quiz-milestone-cards .card:hover {
  -webkit-box-shadow: none;
          box-shadow: none;
}

.e-page-content-wrap .quiz-milestone-cards .card img {
  display: none;
}

.e-page-content-wrap .quiz-milestone-cards .card {
  height: auto !important;
  border-radius: 20px; 
  background: none;
  border: 0;
}

.e-page-content-wrap .quiz-milestone-cards .card input[type='checkbox']:checked + label {
  border-color: #3856a7;
  position: relative;
}

.e-page-content-wrap .quiz-milestone-cards .card input[type='checkbox']:checked + label:before {
  content: '';
  position: absolute;
  left: 10px;
  top: 12px;
  width: 14px;
  background: url("https://flopsi69.github.io/crs/cerebelly/quiz/check.svg") center no-repeat;
  background-size: contain;
  height: 14px;
}

@media (max-width: 768px) {
  .e-page-content-wrap .quiz-milestone-cards .card input[type='checkbox']:checked + label:before {
    top: 8px;
  }
}

.e-page-content-wrap .quiz-milestone-cards .card input[type='checkbox']:checked + label p {
  color: #15206b;
}

.card input[type='checkbox']:checked + label img.success {
  display: none !important;
}

.go-cards-title {
  font-weight: bold;
  font-size: 28px;
  line-height: 28px;
  color: #15206b;
}

@media (max-width: 768px) {
  .go-cards-title {
    font-size: 22px;
    line-height: 28px;
    max-width: 360px;
    margin: auto;
  }
}

.e-page-content-wrap #step-progress-bar .step:not(:first-of-type) .bullet::after {
  background: #d5d9e8;
  border-radius: 20px;
  width: 140px;
  left: -140px;
  top: -1px;
  height: 6px;
}

@media (max-width: 768px) {
  .e-page-content-wrap #step-progress-bar .step:not(:first-of-type) .bullet::after {
    top: 0;
    width: 52px;
    left: -46px;
  }
}

@media (max-width: 768px) {
  .e-page-content-wrap .quiz-milestone-cards .card label p {
    font-size: 15px;
    line-height: 1.2;
    text-align: center;
  }
}

.e-page-content-wrap #step-progress-bar {
  -webkit-box-pack: end;
      -ms-flex-pack: end;
          justify-content: flex-end;
}

@media (max-width: 599px) {
  .e-page-content-wrap #step-progress-bar {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding-left: 65px;
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .e-page-content-wrap #step-progress-bar {
    width: 315px;
  }
}

.e-page-content-wrap #mobile-step-progress-bar {
  display: none !important;
}

.e-page-content-wrap
#step-progress-bar
.step:not(:first-of-type)
.bullet.current::after {
  background-color: #3856a7;
  width: 122px;
  left: -122px;
  top: 6px;
  height: 6px;
}

@media (max-width: 768px) {
  .e-page-content-wrap
#step-progress-bar
.step:not(:first-of-type)
.bullet.current::after {
    width: 44px;
    left: -44px;
    top: 2px;
    height: 6px;
  }
}

.carousel .slider-wrapper {
  height: 20px;
}

.quiz-milestone-cards .e-back-btn {
  position: absolute;
  left: -90px;
}

@media (max-width: 1320px) {
  .quiz-milestone-cards .e-back-btn {
    left: 0;
    position: static;
    margin-right: 20px;
  }
}

@media (max-width: 599px) {
  .quiz-milestone-cards .e-back-btn {
    margin-right: 0;
    position: fixed;
    left: 21px;
  }
}

.e-page-content-wrap #step-progress-bar .bullet.current {
  width: 22px;
  height: 22px;
  background: white;
  border: 2px solid #3856a7;
}

@media (max-width: 768px) {
  .e-page-content-wrap #step-progress-bar .bullet.current {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: 2px solid #3856a7;
  }
}

.e-page-content-wrap #step-progress-bar .step {
  position: relative;
  width: 20%;
}

@media (max-width: 768px) {
  .e-page-content-wrap #step-progress-bar .step {
    width: 54px;
    height: 14px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
  }
}

.e-page-content-wrap #step-progress-bar .bullet {
  width: 16px;
  height: 16px;
  background: #d5d9e8;
}

@media (max-width: 768px) {
  .e-page-content-wrap #step-progress-bar .bullet {
    background: transparent;
    width: 14px;
    height: 14px;
    width: 14px;
    height: 6px;
    background: #d5d9e8;
    border: none;
  }
}

.e-page-content-wrap .quiz-milestone-cards .cards-carousel .carousel button {
  display: none;
}

.header {
  margin-bottom: 70px;
  padding-top: 1px;
}

@media (max-width: 768px) {
  .header {
    margin-bottom: 30px;
  }
}

.header > img,
.header > h2 {
  display: none;
}

.go-progress-caption {
  position: absolute;
  top: -15px;
  right: 2%;
  width: 80%;
}

.go-progress-caption-brief {
  width: 60%;
}

@media (max-width: 768px) {
  .go-progress-caption {
    display: none;
  }
}

.e-page-content-wrap #step-progress-bar .step:first-of-type .bullet::after {
  content: '';
  position: absolute;
  background: #3856a7;
  border-radius: 20px;
  width: 110px;
  left: -110px;
  top: 6px;
  height: 6px;
}

@media (max-width: 768px) {
  .e-page-content-wrap #step-progress-bar .step:first-of-type .bullet::after {
    width: 73px;
    left: -73px;
    top: 2px;
  }
}

.go-step-caption {
  position: absolute;
  left: 0;
  bottom: -20px;
  font-size: 13px;
  line-height: 16px;
  color: #b9c4e0;
}

@media (max-width: 768px) {
  .go-step-caption {
    bottom: 21px;
    left: 8px;
    -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
    font-size: 9px;
    line-height: 1;
  }
}

.go-step-caption-first {
  color: #3856a7;
  left: -107px;
}

@media (max-width: 768px) {
  .go-step-caption-first {
    left: -50px;
  }
}

.bullet.current + .go-step-caption {
  color: #3856a7;
}
/*# sourceMappingURL=index.css.map */
`;

let styles = document.createElement('style');
styles.id = 'go-styles';
styles.innerHTML = stylesList;
/* STYLES insert end */

/*HTML insert START */
const stepOneHtml = `
  <div class="step-one">
    <div class="step-one__progress_desk">
      <img src="https://flopsi69.github.io/crs/cerebelly/quiz/progress-desk.png" alt="">
    </div>
    <div class="step-one__progress_mob">
      <img src="https://flopsi69.github.io/crs/cerebelly/quiz/progress-mob.png" alt="">
    </div>
    <div class="step-one__title">Tell us a little about your child</div>
    <div class="step-one__child">
      <div class="step-one__text">My little one is a</div>
      <div class="step-one__child-genders">
        <div class="step-one__child-gender step-one__gender-toggler" data-gender='1'>
          <img src="https://flopsi69.github.io/crs/cerebelly/quiz/step-one-boy.png" alt="step-one-boy">
        </div>
        <div class="step-one__child-gender step-one__gender-toggler" data-gender='2'>
          <img src="https://flopsi69.github.io/crs/cerebelly/quiz/step-one-girl.png" alt="step-one-girl">
        </div>
      </div>
      <div class="step-one__text step-one__child-twins step-one__gender-toggler" data-gender='0'>
        <div class="step-one__child-checkbox"></div>
        I prefer not to say
      </div>
    </div>
    <div class="step-one__birth">
      <div class="step-one__text">and <span class="step-one__birth-who">her</span> birthday is on</div>
    </div>

    <div class="step-one__next-wrap">
      <button class="button blue mt-3 mt-md-4 step-one__next"><span>continue</span></button>
    </div>
  </div>
`;

const stepOneSideHtml = `
  <div class="step-one__side">
    <div class="step-one__side-title">Get a personalized meal plan with key nutrients supporting brain development</div>
    <div class="step-one__side-caption">Take our quiz to receive our science-backed recommendation based on your child's age and milestones</div>
  </div>
`;

const finishBtnHtml = `
  <div class="step-one__disclaimer">This information will help to personalize your Cerebelly experience</div>
  <div class="step-one__finish-wrap">
    <div class="step-one__back">Back</div>
    <button type="submit" class="button blue step-one__finish" style="display: block;"><span>continue</span></button>
  </div>
`;
/*HTML insert END */

// Конфигурация observer (за какими изменениями наблюдать)
const config = {
  childList: true,
  subtree: true
};

// Функция обратного вызова при срабатывании мутации
const callback = function (mutationsList, observer) {
  for (let mutation of mutationsList) {
    let mutEl = mutation.addedNodes[0];
    if (mutEl instanceof HTMLElement) {
      if (
        mutation.addedNodes.length &&
        mutEl.querySelector('.quiz-milestone-cards')
      ) {
        console.log('step two', mutation.addedNodes);
        stepTwo();
      } else if (
        mutation.addedNodes.length &&
        mutEl.querySelector('.b-date-input .e-input')
      ) {
        console.log('stepOne', mutation.addedNodes);
        stepOne();
      } else if (
        mutation.addedNodes.length &&
        (mutEl.querySelector('.quiz-brain-section') ||
          document.querySelector(
            '.e-page-content-wrap .quiz-intro-wrap .quiz-intro-form'
          ) ||
          mutEl.querySelector("input[name='email']"))
      ) {
        console.log('asdfasdfsadf');
        console.log('gg', mutation.addedNodes);
        toggleGoStyles(true);
      }
    }
  }
};

// Создаем экземпляр наблюдателя с указанной функцией обратного вызова
const observer = new MutationObserver(callback);

// Начинаем наблюдение за настроенными изменениями целевого элемента
observer.observe(document.querySelector('#root'), config);

// Позже можно остановить наблюдение
// observer.disconnect();

let stepTwoInited = false;
let stepOneInited = false;

function init() {
  document.addEventListener('click', function (e) {
    if (e.target.name == 'email') {
      gaEvent('email input focus');
    }
    if (
      e.target.innerText == 'finish' &&
      document.querySelector("input[name='email']")
    ) {
      gaEvent('finish btn');
    }
  });
  if (
    document.querySelector(
      '.quiz2-intro-wrap.quiz-content-top form.quiz2-intro-form-wrap'
    )
  ) {
    stepOneInited = true;

    stepOne();
  }

  if (document.querySelector('.quiz-milestone-cards')) {
    stepTwoInited = true;
    stepTwo();
  }
}
init();

// Functions
function toggleGoStyles(remove) {
  console.log('toggleGoStyles');

  if (document.querySelector('#go-styles')) {
    if (remove) {
      document.querySelector('#go-styles').remove();
    }
    return true;
  } else if (!remove) {
    document.body.appendChild(styles);
    return false;
  }
}

function stepOne() {
  toggleGoStyles();
  if (document.querySelector("input[name='childName']")) {
    document
      .querySelector("input[name='childName']")
      .addEventListener('focus', function () {
        gaEvent('click on Child name input');
      });
    document
      .querySelector("input[name='firstName']")
      .addEventListener('focus', function () {
        gaEvent('click on parent name input');
      });
  }
  if (
    !document.querySelector('.step-one__next-wrap') &&
    document.querySelector("input[name='childName']")
  ) {
    document
      .querySelector('.quiz2-intro-form-wrap')
      .insertAdjacentHTML('afterbegin', stepOneHtml);
    // document
    //   .querySelector('.step-one__birth')
    //   .insertAdjacentElement(
    //     'beforeend',
    //     document.querySelector('.b-date-input')
    //   );
    // document
    //   .querySelector('.quiz2-intro-wrap')
    //   .insertAdjacentHTML('afterbegin', stepOneSideHtml);
    // document.querySelector('.quiz-name-wrap.mt-4 h3').innerHTML =
    //   'What’s your name?';
    // document.querySelector('.quiz-name-wrap.mt-4+div h3').innerHTML =
    //   'Who is this box is for?';
    // document.querySelector('.quiz-name-wrap.mt-4 input');
    // document.querySelector('.quiz-name-wrap.mt-4+div h3').placeholder =
    //   'Parent’s name';
    // document.querySelector('.quiz-name-wrap.mt-4+div input').placeholder =
    //   "Baby's Name";
    // document
    //   .querySelector(".quiz2-intro-form-wrap .button[type='submit")
    //   .insertAdjacentHTML('afterend', finishBtnHtml);
    // if (window.outerWidth > 599) {
    //   document
    //     .querySelector('.step-one__next-wrap')
    //     .insertAdjacentElement(
    //       'afterbegin',
    //       document.querySelector('.e-back-btn')
    //     );
    // }
    // document
    //   .querySelector(".quiz2-intro-form-wrap .button[type='submit']")
    //   .remove();
    // document.querySelector(
    //   '.e-page-content-wrap .quiz2-intro-wrap'
    // ).style.background = '#A7D4CD';
    // setGender();
    // let selectGenderEl = document.querySelector('#select1');
    // let currentGender = selectGenderEl.options.selectedIndex;
    // // setGenderName(currentGender);
    // document
    //   .querySelector(
    //     ".step-one__gender-toggler[data-gender='" + currentGender + "']"
    //   )
    //   .click();
    // if (currentGender == 0) {
    // document.querySelectorAll('.step-one__gender-toggler').forEach(function (el) {
    // el.classList.add('active');
    // el.click();
    // });
    // } else {
    // document.querySelector(".step-one__gender-toggler[data-gender='" + currentGender + "']").classList.add('active');
    // }

    document
      .querySelector('.step-one__next')
      .addEventListener('click', function (e) {
        if (
          document.querySelector(
            '.e-page-content-wrap .quiz2-intro-wrap .quiz-name-wrap.b-date-input .error-message'
          )
        ) {
          document
            .querySelector(
              '.e-page-content-wrap .quiz2-intro-wrap .quiz-name-wrap.b-date-input .error-message'
            )
            .remove();
        }
        if (
          document.querySelector('.quiz2-intro-form-wrap .b-date-input input')
            .value
        ) {
          gaEvent('continue gender');
          e.preventDefault();
          e.stopPropagation();
          this.style.display = 'none';
          document.querySelector('.step-one__child').style.display = 'none';
          document.querySelector('.step-one__title').style.display = 'none';
          document.querySelector('.step-one__birth').style.display = 'none';
          document.querySelector('.step-one__side').style.display = 'none';
          document.querySelector('.quiz-name-wrap.mt-4').style.display =
            'block';
          document.querySelector('.quiz-name-wrap.mt-4+div').style.display =
            'block';
          document.querySelector('.step-one__disclaimer').style.display =
            'block';
          document.querySelector('.step-one__finish-wrap').style.display =
            'flex';
          document.querySelector('.step-one__next-wrap').style.display = 'none';
          document.querySelector(
            '.e-page-content-wrap .quiz2-intro-wrap'
          ).style = '';
        } else {
          document
            .querySelector(
              '.e-page-content-wrap .quiz2-intro-wrap .quiz-name-wrap.b-date-input'
            )
            .insertAdjacentHTML(
              'beforeend',
              "<div class='error-message'>This field is required</div>"
            );
        }
      });

    document
      .querySelector('.step-one__back')
      .addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        document.querySelector('.step-one__next').style.display = 'block';
        document.querySelector('.step-one__title').style.display = 'block';
        document.querySelector('.step-one__side').style.display = 'block';
        document.querySelector('.quiz-name-wrap.mt-4').style.display = 'none';
        document.querySelector('.quiz-name-wrap.mt-4+div').style.display =
          'none';
        document.querySelector('.step-one__disclaimer').style.display = 'none';
        document.querySelector('.step-one__finish-wrap').style.display = 'none';
        document.querySelector('.step-one__next-wrap').style.display = 'flex';
        document.querySelector(
          '.e-page-content-wrap .quiz2-intro-wrap'
        ).style.background = '#A7D4CD';
        if (window.innerWidth > 768) {
          document.querySelector('.step-one__child').style.display = 'flex';
          document.querySelector('.step-one__birth').style.display = 'flex';
        } else {
          document.querySelector('.step-one__child').style.display = 'block';
          document.querySelector('.step-one__birth').style.display = 'block';
        }
      });
  }
}

function stepTwo() {
  toggleGoStyles();
  let milestonesNames = ['Cognitive', 'Language', 'Motor', 'Social', 'Visual'];
  if (!document.querySelector('.go-step-caption-first')) {
    document
      .querySelectorAll('#step-progress-bar .step')
      .forEach(function (el, index) {
        el.insertAdjacentHTML(
          'beforeend',
          "<span class='go-step-caption'>" + milestonesNames[index] + '</span>'
        );
        if (index == 0) {
          el.insertAdjacentHTML(
            'afterbegin',
            "<span class='go-step-caption go-step-caption-first'>Your child</span>"
          );
        }
      });
    document
      .querySelector('.header')
      .insertAdjacentHTML(
        'afterend',
        `<div class='go-cards-title'>Which ${milestonesNames[0].toLowerCase()} milestones is common for your child?</div>`
      );

    document
      .querySelector('#step-progress-bar')
      .insertAdjacentHTML(
        'afterbegin',
        "<img class='go-progress-caption' src='https://flopsi69.github.io/crs/cerebelly/quiz/milestones.png'>"
      );

    if (document.querySelectorAll('#step-progress-bar .step').length == 4) {
      document
        .querySelector('.go-progress-caption')
        .classList.add('go-progress-caption-brief');
    }

    document
      .querySelector('.e-page-content-wrap .quiz2-intro-wrap .quiz2-intro-form')
      .insertAdjacentHTML(
        'afterbegin',
        "<div class='go-cards-sidebar'>Cognitive milestones</div>"
      );

    document.addEventListener('click', function (e) {
      if (
        e.target.innerText.toLocaleLowerCase() == 'previous category' ||
        e.target.innerText.toLocaleLowerCase() == 'next category' ||
        e.target.innerText == 'FINISH'
      ) {
        console.log('first');
        buildCards();
        window.scrollTo(0, 0);
        let step = document.querySelectorAll(
          '#step-progress-bar .step .bullet.current'
        ).length;
        console.log(step);
        console.log(milestonesNames[step - 1]);
        document.querySelector(
          '.go-cards-title'
        ).innerHTML = `Which ${milestonesNames[
          step - 1
        ].toLowerCase()} milestones is common for your child?`;
        document.querySelector('.go-cards-sidebar').innerText = `${
          milestonesNames[step - 1]
        } milestones`;
        console.log('last');
      }
      if (e.target.innerText == 'finish') {
        toggleGoStyles(true);
      }
    });
    toggleBackButton();
    window.addEventListener('resize', toggleBackButton);
  }

  buildCards();
}

function setGender() {
  document.querySelectorAll('.step-one__gender-toggler').forEach(function (el) {
    el.addEventListener('click', function () {
      gaEvent('gender selector');
      let gender = this.dataset.gender;
      setGenderName(gender);
      document.querySelector('#select1').options.selectedIndex = gender;
      document
        .querySelectorAll('.step-one__gender-toggler')
        .forEach(function (el) {
          el.classList.remove('active');
        });
      this.classList.add('active');
      // if (gender == 0) {
      //     document.querySelectorAll('.step-one__gender-toggler').forEach(function (el) {
      //     el.classList.add('active');
      //   });
      // } else {
      // }
    });
  });
}

function setGenderName(gender) {
  console.log(gender);
  let genderName;
  switch (gender) {
    case '1':
      genderName = 'his';
      break;
    case '2':
      genderName = 'her';
      break;
    default:
      genderName = 'their';
      break;
  }
  document.querySelector('.step-one__birth-who').innerText = genderName;
}

function toggleBackButton() {
  if (window.outerWidth < 600) {
    document
      .querySelector('.e-page-content-wrap .quiz2-intro-wrap .quiz2-intro-form')
      .insertAdjacentElement(
        'afterbegin',
        document.querySelector('.e-back-btn')
      );
  } else {
    document
      .querySelector('.e-page-content-wrap .button-wrapper')
      .insertAdjacentElement(
        'afterbegin',
        document.querySelector(
          '.e-page-content-wrap .quiz2-intro-wrap .quiz2-intro-form > .e-back-btn'
        )
      );
  }
}

function buildCards() {
  if (document.querySelector('.go-cards-list')) {
    document.querySelector('.go-cards-list').innerHTML = '';
  } else {
    document
      .querySelector('.go-cards-title')
      .insertAdjacentHTML('afterend', "<div class='go-cards-list'></div>");
  }
  document.querySelector('#next-button').addEventListener('click', function () {
    gaEvent(
      document.querySelectorAll('.bullet.current')[
        document.querySelectorAll('.bullet.current').length - 1
      ].nextElementSibling.innerText + ' next category button'
    );
  });

  document.querySelectorAll('.cards-carousel .card').forEach(function (el, i) {
    let cardClone = el.cloneNode('true');
    cardClone.dataset.refto = i;
    cardClone.querySelector('input').id = '';
    console.log(cardClone, el);
    cardClone.addEventListener('click', function (e) {
      e.preventDefault();
      console.log('item click', this);

      gaEvent(
        document.querySelectorAll('.bullet.current')[
          document.querySelectorAll('.bullet.current').length - 1
        ].nextElementSibling.innerText + ' item'
      );

      console.log(
        'to',
        document.querySelector('.cards-carousel .go-card-' + this.dataset.refto)
      );
      document
        .querySelector('.cards-carousel .go-card-' + this.dataset.refto)
        .click();
      if (this.querySelector('input').checked) {
        this.querySelector('input').checked = false;
      } else {
        this.querySelector('input').checked = true;
      }
    });
    document
      .querySelector('.go-cards-list')
      .insertAdjacentElement('beforeend', cardClone);

    el.classList.add('go-card-' + i);
  });
}

/* HTML insert end */
