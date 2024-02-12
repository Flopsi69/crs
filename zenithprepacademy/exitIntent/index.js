console.debug('*** Experiment started ***');

// Config for Experiment
const config = {
  // dir: 'http://127.0.0.1:5500/zenithprepacademy/exitIntent',
  dir: 'https://flopsi69.github.io/crs/zenithprepacademy/exitIntent',
  clarity: ['set', 'exp_exi_int_poplp', 'variant_1'],
  debug: false,
};

const orig = console.log;
console.log = function (...args) {
  orig.apply(console, ['Debug:', ...args]);
};

// Styles for Experiment
const styles = /* css */ `
`;

const stylesEl = document.createElement('style');
stylesEl.classList.add('exp-styles');
stylesEl.innerHTML = styles;

// *** Logic *** //
class Modal {
  static list = [];
  constructor(name, html) {
    if (!$('.lav-modal')) {
      this.constructor.init();
    }

    if (this.constructor.list.find((item) => item.name === name)) {
      console.warn('Modal with this name already exists');
      return;
    }

    this.el = document.createElement('div');
    this.el.classList.add('lav-modal__inner', name);
    this.name = name;
    this.el.innerHTML = html;

    $('.lav-modal').insertAdjacentElement('beforeend', this.el);

    this.constructor.list.push(this);
  }

  static init() {
    document.body.insertAdjacentHTML(
      'beforeend',
      "<div class='lav-modal'></div>"
    );

    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('lav-modal')) {
        if ($('.lav-problems.active')) {
          pushDataLayer(
            'exp_exi_int_poplp_beh_popbigprob_clos',
            'Close',
            'Сlick behind the pop-up area',
            'Pop - up. Did you know that  one of the biggest problems  with getting into college is that:'
          );
        } else if ($('.lav-away.active')) {
          pushDataLayer(
            'exp_exi_int_poplp_beh_popstepawa_clos',
            'Close',
            'Сlick behind the pop-up area',
            'Pop - up. Youʼre just a step away from giving your child access to a dream university'
          );
        } else if ($('.lav-contact.active')) {
          pushDataLayer(
            'exp_exi_int_poplp_beh_popcontac_clos',
            'Close',
            'Сlick behind the pop-up area',
            'Pop - up. How can we contact you? '
          );
        }

        this.close();
      }

      if (e.target.closest('.lav-modal__close')) {
        if (e.target.closest('.lav-problems')) {
          pushDataLayer(
            'exp_exi_int_poplp_but_popbigprob_clos',
            'Close',
            'Button',
            'Pop - up. Did you know that  one of the biggest problems  with getting into college is that:'
          );
        } else if (e.target.closest('.lav-away')) {
          pushDataLayer(
            'exp_exi_int_poplp_but_popstepawa_clos',
            'Close',
            'Button',
            'Pop - up. Youʼre just a step away from giving your child access to a dream university'
          );
        } else if (e.target.closest('.lav-contact')) {
          pushDataLayer(
            'exp_exi_int_poplp_but_popcontac_clos',
            'Close',
            'Button',
            'Pop - up. How can we contact you?'
          );
        }

        this.close();
      }

      if (e.target.dataset.modal) {
        this.open(e.target.dataset.modal);
      } else if (e.target.closest('[data-modal]')) {
        this.open(e.target.closest('[data-modal]').dataset.modal);
      }
    });

    this.addStyles();
  }

  static open(modalName, cb) {
    this.list.forEach((modal) => {
      document.body.classList.remove(modal.name + '_shown');
    });
    sessionStorage.setItem('isPopupShown', 'true');

    document.body.classList.add('lav-modal-open');
    document.body.classList.add(modalName.replace('.', '') + '_shown');
    document.querySelector('html').classList.add('lav-modal-open');

    if ($('.lav-modal__inner.active')) {
      $('.lav-modal__inner.active').classList.remove('active');
    }

    $(modalName).classList.add('active');

    if (typeof cb === 'function') cb();

    setTimeout(() => {
      $('.lav-modal').classList.add('active');
    }, 100);
  }

  static close(cb) {
    this.list.forEach((modal) => {
      document.body.classList.remove(modal.name + '_shown');
    });

    document.body.classList.remove('lav-modal-open');
    document.querySelector('html').classList.remove('lav-modal-open');

    $('.lav-modal')?.classList.remove('active');

    if (typeof cb === 'function') cb();

    setTimeout(() => {
      $('.lav-modal__inner.active')?.classList.remove('active');
    }, 400);
  }

  static addStyles() {
    const styles = /* css */ `
      .fw-600 {
        font-weight: 600;
      }
      .lav-modal {
        position: fixed;
        z-index: 99999999999;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: linear-gradient(140deg, rgba(2, 16, 47, 0.80) 16.4%, rgba(18, 22, 47, 0.80) 28.44%, rgba(18, 22, 47, 0.80) 36.41%, rgba(17, 19, 43, 0.80) 53.66%, rgba(2, 11, 34, 0.80) 73.88%, rgba(17, 19, 43, 0.80) 85.38%);
        transition: 0.35s;
        opacity: 0;
        pointer-events: none;
        padding: 15px;
        overflow-y: auto;
        max-height: 100%;
        display: flex;
      }
      .lav-modal.active {
        opacity: 1;
        pointer-events: auto;
      }
      .lav-modal__inner {
        position: relative;
        background: #fff;
        max-width: 578px;
        padding: 48px 64px;
        width: 100%;
        display: none;
        margin: auto;
      }
      .lav-modal__inner.active {
        display: block;
      }
      .lav-modal__close {
        position: absolute;
        top: 16px;
        right: 16px;
        cursor: pointer;
        transition: 0.35s;
        line-height: 0;
      }
      .lav-modal__back {
        position: absolute;
        top: 12px;
        left: 20px;
        cursor: pointer;
        transition: 0.35s;
        line-height: 0;
      }
      [data-modal] {
        cursor: pointer;
      }
      @media(hover:hover) {
        .lav-modal__close:hover, .lav-modal__back:hover {
          opacity: 0.5;
        }
      }
      .lav-modal-open {
        overflow: hidden;
      }

      [class*="lav-"] {
        box-sizing: border-box;
      }
    
      .lav-modal__title {
        color: var(--Dark-blue-1, #21293E);
        text-align: center;
        font-family: "Bebas Neue Pro Regular";
        font-size: 32px;
        line-height: 36px;
      }
      .lav-modal__marked {
        background: #0E2141;
        margin: 24px 16px 0;
        padding: 7px 72px;
        color: #fff;
        font-family: "Avenir", sans-serif;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
      }
      .lav-away__marked {
        padding: 8px 24px;
        text-align: left;
      }
      .lav-modal__marked img {
        vertical-align: text-top;
        margin-left: 2px;
      }
      
      .lav-learn {
        border-radius: 2px;
        border: 1px solid #9D6B29;
        background: #FFF;
        box-shadow: 0px 15px 30px 0px rgba(0, 0, 0, 0.12);
        margin: 16px 16px 0;
        padding: 16px;
      }
      .lav-learn__title {
        color: #0E2242;
        font-family: "EB Garamond";
        font-size: 18px;
        font-weight: 500;
        line-height: 20px;
      }
      .lav-learn__list {
        margin-top: 12px;
      }
      .lav-learn__item {
        position: relative;
        padding-left: 20px;
        color: #0E2242;
        font-family: "Avenir", sans-serif;
        font-size: 13px;
        line-height: 18px;
      }
      .lav-learn__item:before {
        position: absolute;
        content: '';
        width: 4px;
        height: 4px;
        border-radius: 50%;
        left: 5px;
        top: 8px;
        background-color: #0E2242;
      }
      .lav-learn__item + .lav-learn__item {
        margin-top: 4px;
      }

      .lav-university {
        margin: 16px 16px 0;
        border: 1px solid #9D6B29;
        background: #fff;
        box-shadow: 0px 15px 30px 0px rgba(0, 0, 0, 0.12);
        padding: 16px;
      }
      .lav-university__item {
        display: flex;
        gap: 16px;
      }
      .lav-university__item + .lav-university__item {
        margin-top: 12px;
      }
      .lav-university__image {
        width: 88px;
        flex-shrink: 0;
      }
      .lav-university__caption {
        font-family: "Avenir", sans-serif;
        color: #0E2242;
        font-size: 13px;
        line-height: 18px;
      }
      .lav-modal__caption {
        color: #0E2242;
        font-family: "EB Garamond";
        font-size: 20px;
        line-height: 24px;
        margin-top: 24px;
        text-align: center;
      }
      .lav-contact__caption {
        margin-top: 16px;
        line-height: 26px;
      }
      .lav-modal__note {
        color: #0E2242;
        font-family: "Avenir", sans-serif;
        font-size: 14px;
        font-style: normal;
        line-height: 20px;
        margin-top: 16px;
        text-align: center;
      }

      .lav-btn {
        outline: none;
        margin-top: 24px;
        border-radius: 2px;
        border: none;
        background: linear-gradient(269deg, #9D6B29 0%, #BD8432 4.43%, #EBB858 43.36%, #BD8432 86.26%, #835721 100%), linear-gradient(140deg, #02102F 16.4%, #12162F 28.44%, #12162F 36.41%, #11132B 53.66%, #020B22 73.88%, #11132B 85.38%);
        width: 100%;
        color: #0E2242;
        font-family: "Avenir";
        font-size: 16px;
        font-weight: 800;
        line-height: 24px;
        text-transform: uppercase;
        height: 56px;
        cursor: pointer;
        transition: 0.2s;
      }
      @media(hover:hover) {
        .lav-btn:hover {
          color: #fff;
          opacity: 0.9;
        }
      }
      .lav-link__wrap {
        text-align: center;
        margin-top: 24px;
      }
      .lav-link {
        color: #0E2242;
        font-family: "Avenir", sans-serif;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        letter-spacing: 1px;
        text-decoration-line: underline;
        text-transform: uppercase;
        cursor: pointer;
        transition: 0.2s;
      }
      @media(hover:hover) {
        .lav-link:hover {
          text-decoration: none;
          opacity: 0.7;
        }
      }

      .lav-form {
        margin-top: 24px;
      }
      .lav-form__label {
        color: #21293E;
        font-family: "Avenir", sans-serif;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
      }
      .lav-form__group + .lav-form__group {
        margin-top: 16px;
      }
      .lav-form__label + .lav-form__input {
        margin-top: 8px;
      }
      .lav-form__input {
        display: block;
        height: 48px;
        padding: 10px 16px;
        width: 100%;
        border-radius: 2px;
        border: 1px solid var(--Light-blue-2, #DFE3EE);
        font-family: "EB Garamond";
        font-size: 18px;
        font-weight: 400;
        line-height: 24px;
        transition: 0.2s;
        outline: none;
      }
      .lav-form__input::placeholder {
        color: #7B8190;
      }
      .lav-form__textarea {
        height: auto;
        min-height: 70px;
        color: #0E2242;
        resize: vertical;
      }
      .lav-form__input:focus {
        border-color: #0E2242;
      }

      @media(max-width: 620px) {
        .lav-modal__inner {
          max-width: 100%;
          border-radius: 4px 4px 0px 0px;
          margin: auto 0 0;
        }
        .lav-modal {
          padding: 22px 0 0;
        }
        .lav-modal__close {
          top: 12px;
          right: 12px;
        }
        .lav-modal__inner {
          padding: 24px;
        }
        .lav-modal__title {
          text-align: left;
          padding-right: 30px;
          font-size: 28px;
          line-height: 1.1;
        }
        .lav-modal__marked {
          margin: 16px 0 0;
          padding: 8px 20px;
        }
        .lav-away__marked {
          font-size: 13px;
          line-height: 18px;
        }
        .lav-university {
          margin: 12px 0 0;
        }
        .lav-university__image {
          width: 78px;
        }
        .lav-university__item {
          align-items: flex-start;
        }
        .lav-modal__caption {
          margin-top: 16px;
          font-size: 18px;
          text-align: left;
        }
        .lav-contact__caption {
          line-height: 24px;
          text-align: center;
          max-width: 288px;
          margin-left: auto;
          margin-right: auto;
        }
        .lav-contact__title {
          text-align: center;
          padding-right: 0;
        }
        .lav-modal__back {
          top: 8px;
          left: 16px;
        }
        .lav-contact {
          padding-top: 48px;
          padding-bottom: 32px;
        }
        .lav-form {
          margin-top: 20px;
        }
        .lav-modal__note {
          text-align: left;
        }
        .lav-btn {
          margin-top: 20px;
          height: 48px;
        }
        .lav-link__wrap {
          margin-top: 20px;
        }
        .lav-link {
          font-size: 13px;
          line-height: 18px;
          letter-spacing: 1px;
        }
        .lav-learn {
          margin: 12px 0 0;
        }
        .lav-learn__item {
          padding-left: 15px;
        }
        .lav-learn__item:before {
          left: 3px;
        }
      }
      .lav-body_submitting #lav-form__orign-wrap {
        display: block!important;
        pointer-events: none;
        visibility:hidden;
        position: absolute;
        height: 0px!important;
        overflow: hidden;
        left: -9999%;
      }
      .lav-body_submitting .lav-btn {
        pointer-events: none;
        filter: grayscale(1);
        opacity: 0.7;
      }
    `;

    const stylesEl = document.createElement('style');
    stylesEl.classList.add('exp-modal');
    stylesEl.innerHTML = styles;
    document.head.appendChild(stylesEl);
  }
}

initExp();

async function initExp() {
  await waitFor(() => document.head && document.body, false, { ms: 100 });

  document.head.appendChild(stylesEl);

  console.debug('** InitExp **');

  addModals();
  addHandlers();

  if (isPopupShown()) return;

  handleProblemsPopup();
  handleAwayPopup();
}

function addModals() {
  const problemsModal = /* html */ `
    <div class="lav-modal__close">
      <img src="${config.dir}/img/cross.svg" />
    </div>

    <div class="lav-modal__title">
      Did you know that one of the biggest problems with getting into college is that:
    </div>

    <div class="lav-modal__marked fw-600">
      HAVING GOOD GPA / SAT SCORES
      <img src="${config.dir}/img/not-equal-to.svg">
      Getting Accepted into a Good University
    </div>

    <div class="lav-university">
      <div class="lav-university__item">
        <img class="lav-university__image" src="${config.dir}/img/berkeley.svg">
        <div class="lav-university__caption">
          For every 1 spot available at Berkeley, there are&nbsp;<span class="fw-600">~3&nbsp;students</span> that apply with a <span class="fw-600">4.0+ GPA</span>
        </div>
      </div>

      <div class="lav-university__item">
        <img class="lav-university__image" src="${config.dir}/img/stanford.svg">
        <div class="lav-university__caption">
          For every 1 spot available at Stanford, there are&nbsp;<span class="fw-600">12&nbsp;students</span> that apply with a <span class="fw-600">4.0+ GPA</span>
        </div>
      </div>
    </div>

    <div class="lav-modal__caption">
      Improve your child's university chances with 
      <br/>
      <span class="fw-600">Zenith Prep Academy's</span> tailored college prep roadmap for&nbsp;<span class="fw-600">6th-12th graders.</span>
      <br/>
      <span class="fw-600">The earlier they start, the more powerful it will be.</span>
    </div>

    <div class="lav-modal__note">To learn more, book a <span class='fw-600'>FREE 45 min</span> consultation</div>

    <button class="lav-btn lav-btn__book">BOOK A CONSULTATION NOW</button>

    <div class='lav-link__wrap'>
      <div class="lav-link" data-from=".lav-problems">I don't have time now. Remind me later</div>
    </div>
  `;

  const awayModal = /* html */ `
    <div class="lav-modal__close">
      <img src="${config.dir}/img/cross.svg" />
    </div>

    <div class="lav-modal__title">
      Youʼre just a step away from giving your child access to a dream university
    </div>

    <div class="lav-modal__marked lav-away__marked">
      <span class='fw-600'>Busy parents often miss important steps</span> that can help their child get into a good university.
    </div>

    <div class="lav-learn">
      <div class="lav-learn__title">For only during the <span class='fw-600'>next 45 minutes, you will learn:</span></div>

      <div class="lav-learn__list">
        <div class="lav-learn__item">
          At <span class="fw-600">what age</span> you should start preparation to secure a spot in <span class="fw-600">a&nbsp;good college</span>
        </div>

        <div class="lav-learn__item">
          What universities actually <span class="fw-600">want in</span> an applicant (but never say)
        </div>

        <div class="lav-learn__item">
          <span class="fw-600">How you, as a parent,</span> can assist your child in securing admission to the university they deserve
        </div>
      </div>
    </div>

    <div class="lav-modal__caption">
      To find out how you <span class="fw-600">can help your child get into a good university,</span> click the button below and book <br/> a complimentary consultation call.
    </div>

    <button class="lav-btn lav-btn__book">BOOK A CONSULTATION NOW</button>

    <div class='lav-link__wrap'>
      <div class="lav-link" data-from=".lav-away">I don't have time now. Remind me later</div>
    </div>
  `;

  const formModal = /* html */ `
    <div class="lav-modal__close">
      <img src="${config.dir}/img/cross.svg" />
    </div>

    <div class="lav-modal__back">
      <img src="${config.dir}/img/arrow-left.svg" />
    </div>

    <div class="lav-modal__title lav-contact__title">
      How can we contact you?
    </div>

    <div class="lav-modal__caption lav-contact__caption">
      We will call you back within 3 hours to <br/>choose a time that fits your schedule. 
    </div>

    <div class='lav-form'>
      <div class='lav-form__group'>
        <label class='lav-form__label' for="lav-name">Name</label>
        <input class='lav-form__input' type="text" id="lav-name" name="name" placeholder="Name" required>
      </div>

      <div class='lav-form__group'>
        <label class='lav-form__label' for="lav-phone">Phone number</label>
        <input class='lav-form__input' type="tel" id="lav-phone" name="phone" placeholder="(xxx) xxx-xxxx" required>
      </div>

      <div class='lav-form__group'>
        <label class='lav-form__label' for="lav-message">Preferred time to call you back (optional)</label>
        <textarea class='lav-form__input lav-form__textarea' id="lav-message" name="message" placeholder="Message here"></textarea>
      </div>
    </div>

    <button class="lav-btn lav-submit">request a call back</button>
  `;

  new Modal('lav-problems', problemsModal);
  new Modal('lav-away', awayModal);
  new Modal('lav-contact', formModal);

  $('#lav-phone').addEventListener('input', function (e) {
    const x = e.target.value
      .replace(/\D/g, '')
      .match(/(\d{0,3})(\d{0,3})(\d{0,4})/);

    e.target.value = !x[2]
      ? x[1]
      : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
  });

  addVisibilityEvents();
  handleForm();
}

function handleForm() {
  $('#lav-name').addEventListener('focus', function () {
    this.removeAttribute('style');
    pushDataLayer(
      'exp_exi_int_poplp_inp_popcontac_name',
      'Name',
      'Input',
      'Pop - up. How can we contact you?'
    );
  });

  $('#lav-phone').addEventListener('focus', function () {
    this.removeAttribute('style');
    pushDataLayer(
      'exp_exi_int_poplp_inp_popcontac_phone',
      'Phone number',
      'Input',
      'Pop - up. How can we contact you?'
    );
  });

  $('#lav-message').addEventListener('focus', function () {
    pushDataLayer(
      'exp_exi_int_poplp_inp_popcontac_messa',
      'Message here',
      'Input',
      'Pop - up. How can we contact you?'
    );
  });

  $('.lav-submit').addEventListener('click', function () {
    pushDataLayer(
      'exp_exi_int_poplp_but_popcontac_requ',
      'Request a call back',
      'Button',
      'Pop - up. How can we contact you?'
    );

    const name = $('#lav-name').value;
    const phone = $('#lav-phone').value;
    const message = $('#lav-message').value;

    if (!name) {
      $('#lav-name').style.borderColor = 'red';
      alert('Please enter your name');
      return;
    }

    if (!phone) {
      $('#lav-phone').style.borderColor = 'red';
      alert('Please enter your phone number');
      return;
    }

    if (phone.length < 14) {
      $('#lav-phone').style.borderColor = 'red';
      alert('Please enter a valid phone number');
      return;
    }

    $('body').classList.add('lav-body_submitting');
    this.innerText = 'Submitting...';

    initMutation('#lav_form__orig', (el, ob) => {
      console.log(el);
      if (el.classList.contains('elementor-message-success')) {
        ob.disconnect();
        $('body').classList.remove('lav-body_submitting');
        this.innerText = 'Request a call back';
        alert(el.innerText);
        Modal.close();
      }

      if (
        el.classList.contains('elementor-message-danger') &&
        el.parentElement.id === 'lav_form__orig'
      ) {
        ob.disconnect();
        $('body').classList.remove('lav-body_submitting');
        this.innerText = 'Request a call back';
        // alert('Something went wrong. Please try again later');
        alert(el.innerText);
      }
    });

    $('#form-field-lav_name__orig').value = name;
    $('#form-field-lav_phone__orig').value = phone.trim().replaceAll(' ', '');
    $('#form-field-lav_message_orig').value = message || '-';

    $('#lav_submit__orig').click();
  });
}

function addVisibilityEvents() {
  visibilityEvent('.lav-problems', () => {
    pushDataLayer(
      'exp_exi_int_poplp_vis_popbigprob_page',
      'Page view',
      'Visibility ',
      'Pop - up. Did you know that  one of the biggest problems with getting into college is that:'
    );
  });

  visibilityEvent('.lav-away', () => {
    pushDataLayer(
      'exp_exi_int_poplp_vis_popstepawa_page',
      'Page view',
      'Visibility ',
      'Pop - up. Youʼre just a step away from giving your child access to a dream university'
    );
  });

  visibilityEvent('.lav-contact', () => {
    pushDataLayer(
      'exp_exi_int_poplp_vis_popcontac_page',
      'Page view',
      'Visibility ',
      'Pop - up. How can we contact you?'
    );
  });
}

function handleProblemsPopup() {
  const isMob = window.innerWidth <= 768;

  if (!isMob) {
    checkOutside();
  } else {
    let timer = 0;
    const timerInterval = setInterval(() => {
      timer += 500;
    }, 500);

    checkAction();
    checkFastScroll();
  }

  function checkOutside() {
    document.addEventListener('mouseout', (e) => {
      if (!e.toElement && !e.relatedTarget && !isPopupShown()) {
        Modal.open('.lav-problems');
      }
    });

    document.addEventListener('visibilitychange', function () {
      if (!document.hidden && !isPopupShown()) {
        Modal.open('.lav-problems');
      }
    });
  }

  function checkFastScroll() {
    document.addEventListener('scroll', () => {
      const scrollSpeed = checkScrollSpeed();

      if (!isPopupShown() && (+scrollSpeed < -150 || +scrollSpeed > 150)) {
        Modal.open('.lav-problems');
      }
    });

    const checkScrollSpeed = (function (settings) {
      settings = settings || {};

      let lastPos;
      let newPos;
      let timer;
      let delta,
        delay = settings.delay || 50;

      clear();

      return function () {
        newPos = window.scrollY;
        if (lastPos != null) {
          delta = newPos - lastPos;
        }
        lastPos = newPos;
        clearTimeout(timer);
        timer = setTimeout(clear, delay);
        return delta;
      };

      function clear() {
        lastPos = null;
        delta = 0;
      }
    })();

    // let lastPosition = 0,
    //   newPosition = 0,
    //   currentSpeed = 0;

    // let scrollSpeed = () => {
    //   lastPosition = window.scrollY;
    //   setTimeout(() => {
    //     newPosition = window.scrollY;
    //   }, 70);
    //   currentSpeed = newPosition - lastPosition;

    //   if (currentSpeed > 70) {
    //     openPopup();
    //     document.removeEventListener('scroll', scrollSpeed);
    //   }
    // };

    // document.addEventListener('scroll', scrollSpeed);
  }

  function checkAction() {
    let timerClick = 0;
    let timerScroll = 0;
    const timer = setInterval(() => {
      timerClick += 500;
      timerScroll += 500;

      if (isPopupShown()) {
        clearInterval(timer);
      }

      if (timerClick >= 20000 || timerScroll >= 5000) {
        console.log('fireAction', timerClick, timerScroll);
        Modal.open('.lav-problems');
        clearInterval(timer);
      }
    }, 500);

    document.addEventListener('click', (e) => {
      if (e.target.closest('a') || e.target.closest('button')) {
        timerClick = 0;
        timerScroll = 0;
      }
    });

    window.onscroll = function () {
      timerScroll = 0;
    };
  }
}

function handleAwayPopup() {
  initMutation(document.body, false, (el, ob) => {
    if (el.classList.contains('calendly-overlay') && !isPopupShown()) {
      ob.disconnect();
      Modal.open('.lav-away');
    }
  });
}

function addHandlers() {
  for (const bookBtn of $$('.lav-btn__book')) {
    bookBtn.addEventListener('click', () => {
      if (bookBtn.closest('.lav-problems')) {
        pushDataLayer(
          'exp_exi_int_poplp_but_popbigprob_book',
          'BOOK A CONSULTATION NOW',
          'Button',
          'Pop - up. Did you know that  one of the biggest problems  with getting into college is that:'
        );
      } else if (bookBtn.closest('.lav-away')) {
        pushDataLayer(
          'exp_exi_int_poplp_but_popstepawa_book',
          'BOOK A CONSULTATION NOW',
          'Button',
          'Pop - up. Youʼre just a step away from giving your child access to a dream university'
        );
      }
      Modal.close();
      $('.elementor-button-link[href*="elementor"]').click();
    });
  }

  for (const linkBtn of $$('.lav-link')) {
    linkBtn.addEventListener('click', function () {
      $('.lav-modal__back').dataset.target = this.dataset.from;

      if (linkBtn.closest('.lav-problems')) {
        pushDataLayer(
          'exp_exi_int_poplp_lin_popbigprob_remi',
          "I don't have time now. Remind me later",
          'Link',
          'Pop - up. Did you know that  one of the biggest problems  with getting into college is that:'
        );
      } else if (linkBtn.closest('.lav-away')) {
        pushDataLayer(
          'exp_exi_int_poplp_lin_popstepawa_remi',
          "I don't have time now. Remind me later",
          'Link',
          'Pop - up. Youʼre just a step away from giving your child access to a dream university'
        );
      }

      Modal.open('.lav-contact');
    });
  }

  $('.lav-modal__back').addEventListener('click', function () {
    pushDataLayer(
      'exp_exi_int_poplp_but_popcontac_back',
      'Back',
      'Button',
      'Pop - up. How can we contact you?'
    );
    Modal.open(this.dataset.target);
  });
}

function isPopupShown() {
  if ($('.calendly-overlay')) return true;

  // TODO
  if (sessionStorage.getItem('isPopupShown')) {
    return true;
  }

  return false;
}
// *** Utils *** //

// *** HELPERS *** //

// Waiting for loading by condition
async function waitFor(condition, cb = false, customConfig = {}) {
  const config = {
    ms: 500, // repeat each 0.5 second if condition is false
    limit: 10, // limit in second seconds

    ...customConfig,
  };

  if (typeof condition === 'function') {
    if (condition()) {
      if (typeof cb === 'function') cb();
      return;
    }

    return new Promise((resolve) => {
      let limit = config.limit * 1000;
      const interval = setInterval(function () {
        if (condition() || limit <= 0) {
          clearInterval(interval);
          if (limit > 0 && typeof cb === 'function') cb();
          resolve();
        }
        limit -= config.ms;
      }, config.ms);
    });
  }

  if (condition.startsWith('.') || condition.startsWith('#')) {
    if ($(condition)) {
      if (typeof cb === 'function') cb($(condition));
      return;
    }

    return new Promise((resolve) => {
      const observer = new MutationObserver((mutations, observer) => {
        if ($(condition)) {
          if (typeof cb === 'function') cb($(condition));
          observer.disconnect();
          resolve();
        }
      });

      observer.observe(document, { childList: true, subtree: true });
    });
  }
}

// Mutation Observer
function initMutation(observeEl = document.body, cbAdded, cbRemoved) {
  const el = typeof observeEl === 'string' ? $(observeEl) : observeEl;

  if (!el) return;

  let observer = new MutationObserver((mutations, observer) => {
    for (let mutation of mutations) {
      if (typeof cbAdded === 'function') {
        for (let node of mutation.addedNodes) {
          if (!(node instanceof HTMLElement)) continue;
          cbAdded(node, observer);
        }
      }

      if (typeof cbRemoved === 'function') {
        for (let node of mutation.removedNodes) {
          if (!(node instanceof HTMLElement)) continue;
          cbRemoved(node, observer);
        }
      }
    }
  });

  observer.observe(el, { childList: true, subtree: true });

  return observer;
}

// Intersection Observer
function initIntersection(observeEl, cb, customConfig) {
  const el = typeof observeEl === 'string' ? $(observeEl) : observeEl;

  if (!el || typeof cb !== 'function') return;

  const config = {
    root: null,
    threshold: 0.3, // 0 - 1 | A threshold of 1.0 means that when 100% of the target is visible within the element specified by the root option, the callback is invoked.
    ...customConfig,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      cb(entry);
    });
  }, config);

  observer.observe(el);

  return observer;
}

function focusTimeEvent(el, cb, viewElementProcent = 0.1) {
  let entryTime = 0;
  initIntersection(
    el,
    ({ isIntersecting, time }) => {
      if (isIntersecting) {
        entryTime = time;
      } else if (entryTime) {
        const diffTime = +((time - entryTime) / 1000).toFixed(1);
        cb(diffTime + 's');
        entryTime = 0;
      }
    },
    { threshold: viewElementProcent }
  );
}

// Artificial delay
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Check if element in viewport
function isElementInViewport(selector) {
  const el = typeof selector === 'string' ? $(selector) : selector;

  if (!el) return false;

  const rect = el.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;

  return (
    rect.top + rect.height * 0.3 < windowHeight &&
    rect.bottom > rect.height * 0.3
  );
  // return (
  //   rect.top >= 0 &&
  //   rect.left >= 0 &&
  //   rect.bottom <=
  //     (window.innerHeight || document.documentElement.clientHeight) &&
  //   rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  // );
}

function visibilityEvent(el, cb, customConfig = {}) {
  const config = {
    threshold: 0.3,
    ...customConfig,
  };
  initIntersection(
    el,
    ({ isIntersecting, target }) => {
      // console.log(target, isIntersecting);
      if (isIntersecting) {
        setTimeout(() => {
          if (isElementInViewport(target)) {
            cb();
          }
        }, 3000);
      }
    },
    config
  );
}

// Shordcode for selectors
function $(selector, context = document) {
  return context.querySelector(selector);
}
function $$(selector, context = document, toSimpleArray = false) {
  const arr = context.querySelectorAll(selector);

  return toSimpleArray ? Array.from(arr) : arr;
}

// GA 4 events
function pushDataLayer(name = '', desc = '', type = '', loc = '') {
  try {
    const event = {
      event: 'event-to-ga4',
      event_name: name,
      event_desc: desc,
      event_type: type,
      event_loc: loc,
    };

    console.debug('** GA4 Event **', event);

    if (!config.debug) {
      dataLayer.push(event);
    }
  } catch (e) {
    console.log('** GA4 Error **', e);
  }
}

// Slider
function connectSplide() {
  const sliderStyles = document.createElement('link');
  sliderStyles.rel = 'stylesheet';
  sliderStyles.href =
    'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide-core.min.css';
  document.head.appendChild(sliderStyles);

  let sliderScript = document.createElement('script');
  sliderScript.src =
    'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js';
  document.head.appendChild(sliderScript);
}

// *** Exp BG process *** //

//Clarity
if (
  !config.debug &&
  Array.isArray(config.clarity) &&
  config.clarity.length === 3
) {
  waitFor(
    () => typeof clarity == 'function',
    () => {
      clarity(...config.clarity);
    }
  );
}

// Svg objects
function getSvg(name) {
  const svgObj = {};

  return svgObj[name];
}
