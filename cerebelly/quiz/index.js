// function gaEvent(action, label) {
//   try {
//     dataLayer.push({
//       "event": "event-to-ga",
//       "eventCategory":  "Exp - pl_benefits",
//       "eventAction": action,
//       "eventLabel": label
//     });
//   } catch (e) {}
// };

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
let stylesList = `.quiz2-intro-form-wrap .quiz-name-wrap.mt-4,
.quiz2-intro-form-wrap .quiz-name-wrap.mt-4 + div {
  display: none;
}

.step-one__text {
  font-size: 22px;
  line-height: 26px;
}

.step-one__child {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  margin-bottom: 30px;
}

.step-one__child-genders {
  margin: 0 50px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  line-height: 0;
}

.step-one__child-gender {
  margin-left: 22px;
  border: 3px solid #fff;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  border-radius: 15px;
  overflow: hidden;
  background-color: #fff;
}

.step-one__child-gender + .step-one__child-gender {
  margin-left: 22px;
}

.step-one__child-gender.active {
  border-color: #3957a5;
}

.step-one__child-twins {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.step-one__child-checkbox {
  position: relative;
  width: 24px;
  height: 24px;
  background: #ffffff;
  border-radius: 5px;
  margin-right: 12px;
}

.active .step-one__child-checkbox {
  background-color: #3957a5;
}

.active .step-one__child-checkbox:before {
  content: '';
  width: 5px;
  height: 10px;
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
  border-bottom: 1px solid #fff;
  border-right: 1px solid #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
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

.step-one__birth .step-one__text {
  margin-right: 20px;
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
/*# sourceMappingURL=index.css.map */`;

// connect to DOM
let styles = document.createElement('style');
styles.innerHTML = stylesList;
document.body.appendChild(styles);
/* STYLES insert end */


/*HTML insert start */
const stepOneHtml = `
<div class="step-one">
    <div class="step-one__title">Tell us a little about your child</div>
    <div class="step-one__child">
      <div class="step-one__text">My little one is</div>
      <div class="step-one__child-genders">
        <div class="step-one__child-gender step-one__gender-toggler" data-gender='boy'>
          <img src="https://i.ibb.co/5Kh41dj/step-one-boy.png" alt="step-one-boy">
        </div>
        <div class="step-one__child-gender step-one__gender-toggler" data-gender='girl'>
          <img src="https://i.ibb.co/TM7qYXZ/step-one-girl.png" alt="step-one-girl">
        </div>
      </div>
      <div class="step-one__text step-one__child-twins step-one__gender-toggler" data-gender='twins'>
        <div class="step-one__child-checkbox"></div>
        I have twins!
      </div>
    </div>
    <div class="step-one__birth">
      <div class="step-one__text">and her Birthday is on</div>
    </div>
  </div>
`;


function stepOne() {
  document.querySelector(".quiz2-intro-form-wrap").insertAdjacentHTML("afterbegin", stepOneHtml);
  document.querySelector('.step-one__birth').insertAdjacentElement("beforeend", document.querySelector(".e-input"));
  genderChoice();
}


function genderChoice() {
  document.querySelectorAll('.step-one__gender-toggler').forEach(function (el) {
    el.addEventListener("click", function () {
      document.querySelector(".step-one__gender-toggler.active")?.classList.remove('active');
      this.classList.add("active");
    })
  })
}
stepOne();




/* HTML insert end */