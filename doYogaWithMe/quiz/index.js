(async function () {
  console.log('*** Experiment started ***');
  await waitFor(() => document.head && document.body, false, { ms: 20 });

  // Config for Experiment
  const config = {
    dir: 'https://flopsi69.github.io/crs/doYogaWithMe/quiz',
    clarity: ['set', 'exp_person_cont', 'variant_1'],
    debug: false,
  };

  // const orig = console.log;
  // console.log = function (...args) {
  //   orig.apply(console, ['Debug:', ...args]);
  // };
  let popupTime, popupTimer;
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
        if (
          e.target.classList.contains('lav-modal') ||
          e.target.closest('.lav-modal__close')
        )
          this.close();

        if (e.target.dataset.modal) {
          this.open(e.target.dataset.modal);
        } else if (e.target.closest('[data-modal]')) {
          this.open(e.target.closest('[data-modal]').dataset.modal);
        }
      });

      this.addStyles();
    }

    static open(modalName, cb) {
      popupTime = 0;
      popupTimer = setInterval(() => {
        popupTime += 0.5;
      }, 500);
      document.body.classList.add('lav-modal-open');

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
      clearInterval(popupTimer);
      pushDataLayer(
        'exp_person_cont_vis_popupedit_focu',
        popupTime + 's',
        'Visibility',
        'Popup Edit Your Interests'
      );
      document.body.classList.remove('lav-modal-open');

      $('.lav-modal')?.classList.remove('active');

      if (typeof cb === 'function') cb();

      setTimeout(() => {
        $('.lav-modal__inner.active')?.classList.remove('active');
      }, 400);
    }

    static addStyles() {
      const styles = `
        .lav-modal {
          position: fixed;
          z-index: 999;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          background: rgba(0,0,0,.1);
          // backdrop-filter: blur(3px);
          // -webkit-backdrop-filter: blur(3px);
          transition: 0.35s;
          opacity: 0;
          pointer-events: none;
          padding: 0;
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
          max-width: 380px;
          width: 100%;
          display: none;
          margin: auto;
        }
        .lav-modal__inner.active {
          display: block;
        }
        .lav-modal__close {
          position: absolute;
          z-index: 1;
          right: 60px;
          top: 33px;
          cursor: pointer;
          transition: 0.35s;
          line-height: 0;
        }
        [data-modal] {
          cursor: pointer;
        }
        @media(hover:hover) {
          .lav-modal__close:hover {
            opacity: 0.5;
          }
        }
        .lav-modal-open {
          overflow: hidden;
        }

        .personlaize {
          max-width: 100%;
          min-height: 100%;
        }
        .personlaize.active {
          display: flex;
        }
        .personlaize__image {
          position: relative;
          line-height: 0;
          width: 43%;
          padding: 0;
          background: var(--Blue-Main, #027DB8);
        }
        .personlaize__image:before {
          content: '';
          position: absolute;
          background: url(${config.dir}/img/quiz-step-final.jpeg) center  no-repeat;
          background-size: cover;
          left: -70px;
          right: 0;
          top: 90px;
          bottom: 90px;
          border-radius: 12px;
          max-height: 606px;
        }
        .personlaize__body {
          margin: auto 0;
          padding: 60px 140px 60px 80px;
          box-sizing: border-box;
          width: 57%;
        }
        .personlaize__image img {
          border-radius: 12px;
        }
        .personlaize__title {
          color: var(--H1-Black, #272727);
          font-size: 42px;
          font-weight: 700;
          line-height: 54px;
        }
        .personlaize__title span {
          color: var(--Green-main, #017922);
        }

        .personlaize__list {
          margin-top: 30px;
        }
        .personlaize__item + .personlaize__item {
          margin-top: 24px;
        }
        .personlaize__item {}
        .personlaize__subtitle {
          color: var(--H1-Black, #272727);
          font-size: 18px;
          font-weight: 700;
          line-height: 26px;
        }
        .personlaize__dropdown {
          margin-top: 12px;
        }
        .personlaize__caption {
          color: var(--Body-color, #555);
          font-size: 14px;
          font-weight: 600;
          line-height: 22px;
          margin-top: 3px;
        }

        .personlaize__control {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-top: 30px;
        } 

        .personlaize__save {
          max-width: 315px;
          width: 100%;
          border-radius: 30px;
          color: #fff;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 5px 15px;
          font-size: 18px;
          font-weight: 700;
          text-transform: capitalize;
          background: var(--Blue-Main, #027DB8);
          transition: 0.35s;
          cursor: pointer;
          box-sizing: border-box;
        }
        .personlaize__save_saved {
          pointer-events: none;
          background-color: #7f8b95;
        }
        .personlaize__cancel {
          color: var(--Body-100, #A5A5A5);
          font-size: 18px;
          font-weight: 700;
          line-height: 1;
          text-decoration: underline;
          text-transform: capitalize;
          transition: 0.35s;
          cursor: pointer;
          padding: 10px 28px;
        }
        @media(hover:hover) {
          .personlaize__cancel:hover {
            opacity: .7;
          }
          .personlaize__save:hover {
            transform: scale(1.05);
            background-color: #035a83;
          }
        }

        .drop {
          position: relative;
        }
        .drop__values {
          position: relative;
          border-radius: 8px;
          border: 2px solid var(--Gray, #E0E0E0);
          background: var(--white, #FFF);
          padding: 12px 52px 12px 12px;
          cursor: pointer;
          transition: 0.3s;
        }
        .drop__values:hover {
          background-color: var(--light-blue, #F2FBFF);
          border-color: #027db8;
        }
        .drop__values:before {
          content: '';
          position: absolute;
          background: url(${config.dir}/img/icon-dropdown.svg) center  no-repeat;
          background-size: contain;
          width: 16px;
          height: 12px;
          right: 18px;
          top: 24px;
          transition: 0.3s;
        }
        .drop.active .drop__values:before {
          transform: rotate(180deg);
        }
        .drop__values {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .drop__value {
          padding: 5px 12px;
          color: var(--Body-color, #555);
          font-size: 14px;
          font-weight: 700;
          line-height: 22px;
          border-radius: 30px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--Gray-1, #F6F6F6);
          min-height: 34px;
          box-sizing: border-box;
        }
        .drop__value img {
          max-width: 24px;
          max-height: 24px;
        }
        .drop__list {
          display: none;
          position: relative;
          z-index: 9;
          top: 100%;
          left: 0;
          right: 0;
          box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
          border: 2px solid var(--Gray, #E0E0E0);
          border-radius: 8px;
          background: #fff;
          overflow: hidden;
        }
        .drop.active .drop__list {
          display: block;
        }
        .drop__item {
          position: relative;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 44px 10px 13px;
          cursor: pointer;
          transition: 0.3s;
        }
        @media(hover:hover) {
          .drop__item:hover {
            background: var(--light-blue, #F2FBFF);
          }
        }
        .drop__item.active {
          background: var(--light-blue, #F2FBFF);
        }
        .drop__item + .drop__item {
          border-top: 2px solid var(--Gray, #E0E0E0);
        }
        .drop__item:before {
          content: '';
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: 12px;
          width: 20px;
          height: 20px;
          border-radius: 100px;
          border: 2px solid var(--Gray, #E0E0E0);
          background: #FFF;
          transition: 0.3s;
          pointer-events: none;
          box-sizing: border-box;
        }
        .drop__item:after {
          content: '';
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: 16px;
          transition: 0.3s;
          pointer-events: none;
          opacity: 0;
          border-radius: 100px;
          width: 12px;
          height: 12px;
          background: var(--Blue-Main, #027DB8);
        }
        .drop__item.active:before {
          border-color: #027DB8;
        }
        .drop__item.active:after {
          opacity: 1;
        }
        .drop__list_checkbox .drop__item:before {
          border-radius: 4px;
        }
        .drop__list_checkbox .drop__item:after {
          border-radius: 2px;
        }
        .drop__list-2 .drop__item-title, .drop__list-2 .drop__item-caption {
          display: inline-block;
        }
        .drop__list-2 [data-id="7"] .drop__item-title {
          font-weight: 500;
        }
        .drop__list-3 .drop__item-title {
          font-weight: 500;
        }
        .drop__item-icon img {
          max-width: 40px;
          max-height: 40px;
        }
        .drop__item-title {
          color: var(--Body-color, #555);
          font-size: 16px;
          font-weight: 700;
          line-height: 24px; 
        }
        .drop__item-caption {
          color: var(--Body-color, #555);
          font-size: 12px;
          font-weight: 500;
          line-height: 24px;
        }
        @media(max-width: 1200px) {
          .personlaize__image {
            width: 30%;
          }
          .personlaize__body {
            width: 70%;
          }
        }
        @media(max-width: 992px) {
          .personlaize__body {
            padding: 40px 110px 40px 40px;
          }
        }
        @media(max-width: 768px) {
          .personlaize__image {
            display: none;
          }
          .personlaize__body {
            width: 100%;
            padding: 20px 20px 150px;
          }
          .personlaize__title {
            font-size: 24px;
            line-height: 30px;
          }
          .lav-modal__close {
            right: 20px;
            top: 25px;
          }
          .lav-modal__close path {
            stroke: #272727;
          }
          .personlaize__list {
            margin-top: 20px;
          }
          .personlaize__subtitle {
            display: inline;
            font-size: 16px;
            line-height: 24px;
          }
          .personlaize__caption {
            display: inline;
            font-weight: 400;
          }
          .drop__values {
            padding: 10px 50px 10px 10px;
          }
          .drop__values:before {
            right: 12px;
            top: 22px;
          }
          .personlaize__item + .personlaize__item {
            margin-top: 20px;
          }
          .drop__item-title {
            font-size: 14px;
            line-height: 20px;
          }
          .drop__item-caption {
            line-height: 20px;
          }
          .drop__item {
            padding: 8px 44px 8px 8px;
          }
          .personlaize__control {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            margin: 0;
            flex-flow: column;
            padding: 12px 20px;
            gap: 6px;
            background: #fff;
            border-top: 1px solid var(--Gray, #E0E0E0);
          }
          .personlaize__save {
            max-width: 100%;
          }
          .personlaize__cancel {
            padding: 7px 20px;
          }
          .drop__list-1 .drop__item-caption {
            display: none;
          }
        }
      `;

      const stylesEl = document.createElement('style');
      stylesEl.classList.add('exp-modal');
      stylesEl.innerHTML = styles;
      document.head.appendChild(stylesEl);
    }
  }

  const quiz = [
    {
      title: 'Let’s Find Your<br/>Perfect Yoga Journey',
      caption:
        'Please take a moment to answer the following questions so we can curate the perfect yoga content for you.',
    },
    {
      step: 1,
      title: 'Which best describes your current yoga experience level?',
      caption: '(Choose one option)',
      type: 'radio',
      resultCaption: 'Experience Level:',
      variants: [
        {
          id: 1,
          title: 'Beginner',
          caption: '(New to yoga or have limited experience)',
          image: 'step-1-1.svg',
        },
        {
          id: 2,
          title: 'Intermediate',
          caption: '(Have some experience and comfortable with basic poses)',
          image: 'step-1-2.svg',
        },
        {
          id: 3,
          title: 'Advanced',
          caption: '(Experienced yogi looking for challenging practices)',
          image: 'step-1-3.svg',
        },
      ],
    },
    {
      step: 2,
      title: 'What type of yoga classes are you most interested in?',
      type: 'checkbox',
      resultCaption: 'Yoga Type:',
      variants: [
        {
          id: 1,
          title: 'Vinyasa Flow',
          caption: '(Dynamic and fluid sequences)',
          image: 'step-2-1.svg',
          tag: ['Vinyasa/Power Yoga', 'Pilates', 'Jivamukti'],
        },
        {
          id: 2,
          title: 'Hatha',
          caption: '(Gentle and foundational poses)',
          image: 'step-2-2.svg',
          tag: [
            'Hatha Yoga',
            'Prenatal/Postnatal Yoga',
            'Pranayama Yoga',
            'Slow Flow',
            'PNF',
            'Gentle Yoga',
            'Yoga at Work',
          ],
        },
        {
          id: 3,
          title: 'Power Yoga ',
          caption: '(Energetic and strength-focused)',
          image: 'step-2-3.svg',
          tag: [
            'Vinyasa/Power Yoga',
            'Ashtanga Yoga',
            'Yoga for Athletes',
            'Yoga for Runners',
          ],
        },
        {
          id: 4,
          title: 'Restorative/Yin ',
          caption: '(Relaxing and deep stretching)',
          image: 'step-2-4.svg',
          tag: [
            'Restorative Yoga',
            'Yin and Yin/Yang Yoga',
            'Prenatal/Postnatal Yoga',
            'Mom and Baby Yoga',
            'Chair Yoga',
            'Yoga for Seniors',
            'Yoga Therapy',
            'Yoga for Back Care',
            'Yoga at Work',
          ],
        },
        {
          id: 5,
          title: 'Kundalini Yoga',
          caption: '(Spiritual energy-focused yoga)',
          image: 'step-2-5.svg',
          tag: ['Kundalini Yoga', 'Pranayama Yoga'],
        },
        {
          id: 6,
          title: 'Yoga for Meditation and Mindfulness',
          image: 'step-2-6.svg',
          tag: [
            'Guided Meditation',
            'Kundalini Yoga',
            'Pranayama Yoga',
            'Values-based Education',
          ],
        },
        {
          id: 7,
          title:
            'I don’t have preferences and want to practice different styles',
        },
      ],
    },
    {
      step: 3,
      title: "Are there any specific areas you'd like to focus&nbsp;on?",
      type: 'checkbox',
      resultCaption: 'Areas of Focus:',
      variants: [
        {
          id: 1,
          title: 'Core strength and stability',
          image: 'step-3-1.svg',
          tag: [
            'Core Strength',
            'Balance',
            'Legs and Feet',
            'Spine',
            'Strength',
            'Whole Body',
            'Inversions',
          ],
        },
        {
          id: 2,
          title: 'Back strength and pain relief',
          image: 'step-3-2.svg',
          tag: ['Backbends', 'Lower Back', 'Neck/Shoulders', 'Spine'],
        },
        {
          id: 3,
          title: 'Upper body strength and toning',
          image: 'step-3-3.svg',
          tag: ['Core Strength', 'Arms/Hands'],
        },
        {
          id: 4,
          title: 'Flexibility and joint mobility',
          image: 'step-3-4.svg',
          tag: ['Flexibility', 'Hips', 'Legs and Feet', 'Twists', 'Whole Body'],
        },
        {
          id: 5,
          title: 'Relaxation and and sleep improvement',
          image: 'step-3-5.svg',
          tag: ['Sleep/Relaxation', 'Stress/Anxiety'],
        },
        {
          id: 6,
          title: 'Mindfulness and meditation techniques',
          image: 'step-3-6.svg',
          tag: ['Guided Meditation', 'Meditation'],
        },
        {
          id: 7,
          title: 'Women’s health, Prenatal and Postnatal practices',
          image: 'step-3-7.svg',
          tag: [
            'Prenatal/Postnatal Yoga',
            'Gentle Yoga',
            'Mom and Baby Yoga',
            'Yoga for Kids',
          ],
        },
        {
          id: 8,
          title: 'Techniques to increase energy',
          image: 'step-3-8.svg',
          tag: ['Morning', 'Travel', 'Vigorous/Energy'],
        },
      ],
    },
    {
      step: 4,
      title:
        'How much time can you allocate for&nbsp;your&nbsp;yoga&nbsp;practice?',
      type: 'checkbox',
      resultCaption: 'Preferred Duration:',
      variants: [
        {
          id: 1,
          title: 'Up to 20 minutes ',
          caption: '(Quick sessions to fit into a busy schedule)',
          image: 'step-4-1.svg',
          tag: [0, 20],
        },
        {
          id: 2,
          title: '20-45 minutes',
          caption: '(Moderate sessions for a comprehensive practice)',
          image: 'step-4-2.svg',
          tag: [20, 45],
        },
        {
          id: 3,
          title: '45 minutes or more ',
          caption: '(Extended sessions for a deep dive into yoga)',
          image: 'step-4-3.svg',
          tag: [45, 1000],
        },
      ],
    },
  ];

  // *** Logic *** //
  window.api = initDbService();
  initExp();

  async function initExp() {
    console.log('** InitExp **');
    const path = window.location.pathname;

    if (isAuth()) {
      if (!getQuizResult(true) && !localStorage.getItem('userChecked')) {
        localStorage.setItem('userChecked', 'yes');
        const user = await api.findUserByUserId(getUserId());
        if (user) {
          saveQuizResult(user.quiz, true);
        }
      }

      if (
        localStorage.getItem('isQuizCompleted') === 'true' &&
        getQuizResult(true)
      ) {
        localStorage.removeItem('isQuizCompleted');
        saveQuizResult(getQuizResult());
      }
    }

    addNavigationMenu();

    if (path === '/') {
      if (isAuth() && getQuizResult(true)) {
        initHomepageAuth();
      } else if (!isAuth()) {
        initHomepageNoAuth();
      }
    }

    if (path === '/based-on-interests') {
      waitFor(() => $('.view-filters'), initBasedOnInterests, { ms: 100 });
    }

    if (
      ['/yoga-classes', '/yoga-meditation'].includes(path) &&
      (!getQuizResult(true) || !isAuth())
    ) {
      waitFor(
        () => $('.view-content .views-row:nth-child(6)'),
        addListingCustomizeCta,
        { ms: 100 }
      );
    }

    if (path.includes('/content/') && !getQuizResult(true)) {
      waitFor(
        () =>
          $(
            '.sfc-nodePlayable__primaryContentContainer + .sfc-nodePlayable__borderSection'
          ),
        addPdpCustomizeCta,
        { ms: 100 }
      );
    }

    if (path.includes('/personalization')) {
      initQuiz();
    }

    if (path.includes('/yoga-classes')) {
      waitFor(
        () => $('.view-filters h2'),
        () => {
          $('.view-filters h2').innerText = 'All classes';
        }
      );
    }

    if (path.includes('/yoga-classes') && isAuth() && getQuizResult(true)) {
      waitFor(() => $('#main-content'), addBriefInterests, { ms: 100 });
    }

    addModal();
  }

  async function getMetadata() {
    const quizResult = getQuizResult();
    const res = await fetch(`${config.dir}/metadata.json`);
    const videos = await res.json();

    resultVideos = [];

    if (!quizResult) return [];

    if (quizResult.step1?.length) {
      const lvl = quiz[1].variants.find(
        (item) => item.id === +quizResult.step1[0]
      ).title;

      const filtered = videos.filter((video) => {
        if (video.added) return false;

        if (video.field_difficulty?.includes(lvl)) {
          video.added = true;
          return true;
        }

        return false;
      });

      resultVideos = [...resultVideos, ...filtered];
    }

    if (quizResult.step2?.length) {
      const target = quizResult.step2.includes('7')
        ? ['1', '2', '3', '4', '5', '6']
        : quizResult.step2;

      for (const variant of target) {
        let tags = quiz[2].variants.find((item) => item.id === +variant).tag;

        if (!tags) continue;

        const filtered = videos.filter((video) => {
          if (video.added) return false;

          if (video.tags.some((tag) => tags.includes(tag))) {
            video.added = true;
            return true;
          }

          return false;
        });

        resultVideos = [...resultVideos, ...filtered];
      }
    }

    if (quizResult.step3?.length) {
      for (const variant of quizResult.step3) {
        const tags = quiz[3].variants.find((item) => item.id === +variant).tag;

        if (!tags) continue;

        const filtered = videos.filter((video) => {
          if (video.added) return false;

          if (video.tags.some((tag) => tags.includes(tag))) {
            video.added = true;
            return true;
          }

          return false;
        });

        resultVideos = [...resultVideos, ...filtered];
      }
    }

    if (quizResult.step4?.length) {
      const target = resultVideos.length ? resultVideos : videos;
      let newResult = [];
      console.log('result', target);

      for (const variant of quizResult.step4) {
        const tag = quiz[4].variants.find((item) => item.id === +variant).tag;
        const filtered = target.filter((video) => {
          const duration = +video['field_media_duration'];
          if (duration > tag[0] * 60 && duration <= tag[1] * 60) {
            video.added = true;
            return true;
          }

          return false;
        });

        newResult = [...newResult, ...filtered];
      }

      resultVideos = newResult;
    }

    return resultVideos;
  }

  function getUserId() {
    const userId = JSON.parse(
      document.querySelector('[data-drupal-selector="drupal-settings-json"]')
        .innerHTML
    ).uid;

    console.log('userId', userId);

    return userId;
  }

  function initDbService() {
    const url = 'https://doyogawithme-quiz-default-rtdb.firebaseio.com';

    return {
      async getUsers() {
        const res = await fetch(`${url}/users.json`);
        const users = await res.json();

        console.log('users', users);
        return users;
      },
      async getUser(id) {
        const res = await fetch(`${url}/users/${id}.json`);
        const data = await res.json();

        console.log(data);
        return data;
      },
      async saveUser(data) {
        localStorage.removeItem('isQuizCompleted');
        const res = await fetch(`${url}/users.json`, {
          method: 'POST',
          body: JSON.stringify(data),
        });

        localStorage.setItem('quizUserId', JSON.stringify(res.name));

        return res;
      },
      async updateUser(data) {
        const res = await fetch(
          `${url}/users/${localStorage.getItem('quizUserId')}.json`,
          {
            method: 'PATCH',
            body: JSON.stringify(data),
          }
        );

        return res;
      },
      async findUserByUserId(userId) {
        const users = await this.getUsers();

        for (let id in users) {
          console.log(users[id].userId);
          if (users[id].userId === userId) {
            localStorage.setItem('quizUserId', id);
            console.log('userFinded', users[id]);
            return users[id];
          }
        }

        return false;
      },
    };
  }

  function addNavigationMenu() {
    const link = !getQuizResult(true)
      ? '/personalization'
      : '/based-on-interests';
    waitFor(
      () =>
        $(
          '#block-samsara-main-menu [data-drupal-link-system-path="yoga-classes"]'
        ) ||
        $(
          '#block-lotus-main-menu [data-drupal-link-system-path="yoga-classes"]'
        ),
      () => {
        let target = $(
          '#block-samsara-main-menu [data-drupal-link-system-path="yoga-classes"]'
        );

        if (!target) {
          target = $(
            '#block-lotus-main-menu [data-drupal-link-system-path="yoga-classes"]'
          );
        }

        target.closest('.c-dropdownMenu__item').insertAdjacentHTML(
          'beforebegin',
          `
              <li class="c-dropdownMenu__item c-dropdownMenu__item--level1">
                  <a href="${link}" class="c-dropdownMenu__link is-active lav-nav-for-you">For you</a>
              </li>
            `
        );

        $('.c-dropdownMenu__link.lav-nav-for-you').addEventListener(
          'click',
          (e) => {
            pushDataLayer(
              'exp_person_cont_but_menu_foryou',
              'For You',
              'Button',
              'Menu'
            );
          }
        );
      }
    );

    waitFor(
      () => $('[data-level="1"] [data-drupal-link-system-path="yoga-classes"]'),
      () => {
        $('[data-level="1"] [data-drupal-link-system-path="yoga-classes"]')
          .closest('.nav-item')
          .insertAdjacentHTML(
            'beforebegin',
            `
          <li class="nav-item">
            <div class="nav-item-wrapper">
              <a href="${link}" class="nav-link nav-link--retreats nav-item-link lav-nav-for-you" style="border-bottom: 1px solid rgb(255, 255, 255); color: rgb(0, 0, 0);">
                For You
              </a>
            </div>
          </li>
        `
          );

        $('.nav-link.lav-nav-for-you').addEventListener('click', (e) => {
          pushDataLayer(
            'exp_person_cont_but_menu_foryou',
            'For You',
            'Button',
            'Menu'
          );
        });
      }
    );
  }

  async function initBasedOnInterests() {
    if (!getQuizResult(true)) {
      location.href = '/personalization';
      return false;
    }

    const css = `
      .view-filters {
        display: none;
      }
      .view-content-container {
        display: none;
      }
      .pager {
        display: none;
      }
      .interest {
        background: #fff;
        padding: 40px 0 30px;
      }
      .interest * {
        box-sizing: border-box;
      }
      .interest__head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 30px;
      }
      .interest__btn {
        display: inline-flex;
        gap: 10px;
        padding: 12px 24px;
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
        border-radius: 30px;
        border: 1px solid var(--Gray, #E0E0E0);
        cursor: pointer;
        transition: 0.3s;
        text-decoration: none;
      }
      .interest__change {
        background: var(--Gray-1, #F6F6F6);
        color: var(--Body-color, #555);
      }
      @media(hover:hover) {
        .interest__btn:hover {
          text-decoration: none;
          transform: scale(1.02);
          box-shadow: 0 0 10px 1px rgba(2, 125, 184, 0.5);
        }
      }
      .interest__container {
        max-width:  var(--page-container-width);
        margin: auto;
        max-width: 100%;
        width: var(--page-container-width);
        padding: 0 1em;
      }
      .interest__title {
        color: #000;
        font-size: 36px;
        font-weight: 700;
        line-height: 1;
      }

      .interest__list {
        margin-top: 16px;
        display: none;
        flex-flow: column;
        gap: 20px;
      }
      .interest__caption {
        padding-left: 28px;
        background: url(${config.dir}/img/icon-lotus.svg) left center  no-repeat;
        background-size: 20px;
        color: var(--H1-Black, #272727);
        font-size: 14px;
        font-weight: 600;
        line-height: 24px;
        min-height: 34px;
        flex-shrink: 0;
        display: flex;
        align-items: center;
      }
      .interest__item {
        display: flex;
        align-items: flex-start;
      }
      .interest__values {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-left: 8px;
      }
      .interest__value {
        padding: 5px 12px;
        color: var(--Body-color, #555);
        font-size: 14px;
        font-weight: 700;
        line-height: 22px;
        border-radius: 30px;
        display: inline-flex;
        align-items: center;
        min-height: 34px;
        gap: 6px;
        background: var(--Gray-1, #F6F6F6)
      }
      .interest__value img {
        max-width: 24px;
        max-height: 24px;
      }
      @media(max-width: 1200px) {
        .view .video-list {
          grid-template-columns: repeat(2, 1fr);
        }
      }
      @media(max-width: 992px) {
        .interest {
          padding: 24px 0;
        }
        .view .video-list {
          grid-template-columns: 1fr;
        }
        .interest__title {
          font-size: 24px;
          line-height: 32px;
        }
        .interest__head {
          flex-flow: column;
          gap: 16px;
          align-items: flex-start;
        }
        .interest__change {
          max-width: 242px;
          font-size: 14px;
          justify-content: center;
          padding: 8px 24px;
        }
        .interest__item {
          display: block;
        }
        .interest__values {
          margin-left: 0;
        }
        .interest__list {
          flex-wrap: wrap;
          gap: 20px 37px;
          flex-direction: initial;
        }
        #block-samsara-maintenancemessage {
          margin-top: 0;
          margin-bottom: 0;
        }
      }
    `;

    addStyles(css);

    const el = `
      <div class='interest'>
        <div class='interest__container'>
          <div class='interest__head'>
            <div class='interest__title'>Based On Your Interests</div>
            <div class='interest__change interest__btn' data-modal='.personlaize'>
              <img src='${config.dir}/img/icon-edit.svg' alt=''>
              Change preferences
            </div>
          </div>

          <div class='interest__list'></div>
        </div>
      </div>
    `;

    $('#main-content').insertAdjacentHTML('beforebegin', el);

    fillInterests();

    $('.view-header').insertAdjacentHTML(
      'afterend',
      `<div class='video-list'></div>`
    );

    $('.interest__change').addEventListener('click', function () {
      pushDataLayer(
        'exp_person_cont_but_persbasinter_chang',
        'Change preferences',
        'Button',
        'Yoga-classes. User who passed personalization quiz. Based On Your Interests'
      );
    });

    focusTimeEvent(
      $('.video-list'),
      (time) => {
        pushDataLayer(
          'exp_person_cont_vis_persbasinter_focu',
          time,
          'Visibility',
          'Yoga-classes. User who passed personalization quiz. Based On Your Interests'
        );
      },
      0.05
    );

    waitFor(
      () => $('.personlaize__save'),
      () => {
        $('.personlaize__save').addEventListener('click', () => {
          fillInterests();
          buildCards();
        });
      }
    );

    buildCards();

    async function buildCards() {
      if (!getQuizResult(true)) {
        location.reload();
        return false;
      }
      $('.video-list').innerHTML = '';
      const videos = await getMetadata();
      $('.view-header').childNodes[0].textContent = `${videos.length} Classes`;

      const sort = location.search;
      if (sort.includes('sort_by=created_1')) {
        videos.sort((a, b) => new Date(a.created) - new Date(b.created));
      } else if (sort.includes('sort_by=value')) {
        videos.sort((a, b) => b.rating - a.rating);
      } else if (sort.includes('sort_by=title')) {
        videos.sort((a, b) => a.title.trim().localeCompare(b.title.trim()));
      } else {
        videos.sort((a, b) => new Date(b.created) - new Date(a.created));
      }

      for (const video of videos) {
        $('.video-list').insertAdjacentHTML(
          'beforeend',
          getVideoCard(video, true)
        );
      }

      $$('.video-card').forEach((item) => {
        initIntersection(
          item,
          (entry, observer) => {
            if (entry.isIntersecting) {
              $('.video__preview-img', item).src = $(
                '.video__preview-img',
                item
              ).dataset.src;

              observer.disconnect();
            }
          },
          { threshold: 0, rootMargin: '100px' }
        );
      });

      $$('.video__title').forEach((item) => {
        item.addEventListener('click', (e) => {
          pushDataLayer(
            'exp_person_cont_vid_persbasinter_cours',
            `${item.innerText} - Click`,
            'Video',
            'Yoga-classes. User who passed personalization quiz. Based On Your Interests'
          );
        });
      });
    }

    function fillInterests() {
      const result = getQuizResult();
      const list = $('.interest__list');

      list.innerHTML = '';

      for (const step in result) {
        if (result[step].length) {
          const stepObj = quiz.find(
            (item) => item.step === +step.replace('step', '')
          );

          const itemEl = document.createElement('div');
          itemEl.classList.add('interest__item');

          itemEl.innerHTML = `
            <div class='interest__caption'>${stepObj.resultCaption}</div>
            <div class='interest__values'></div>
          `;

          for (const variant of result[step]) {
            const variantObj = stepObj.variants.find(
              (item) => item.id === +variant
            );

            itemEl.querySelector('.interest__values').insertAdjacentHTML(
              'beforeend',
              `
                <div class='interest__value'>
                  ${
                    variantObj.image
                      ? `<img src='${config.dir}/img/${variantObj.image}' alt=''>`
                      : ''
                  }
                  ${variantObj.title}
                </div>
              `
            );
          }

          list.insertAdjacentElement('beforeend', itemEl);
        }
      }
    }
  }

  function initHomepageNoAuth() {
    const css = `
      .control {
        display: flex;
        gap: 24px;
        margin-top: 48px;
      }
      .control * {
        box-sizing: border-box;
      }
      .control__btn {
        border-radius: 30px;
        height: 58px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 40px;
        text-align: center;
        cursor: pointer;
        transition: 0.3s;
      }
      .control__create {
        background: #017922;
        color: var(--white, #FFF);
        font-size: 18px;
        font-weight: 700;
        line-height: 26px;
      }
      .control__personalize {
        border: 2px solid var(--white, #FFF);
        background: rgba(0, 0, 0, 0.30);
        font-size: 16px;
        font-weight: 600;
        line-height: 26px;
        text-transform: capitalize;
      }
      @media(hover:hover) {
        .control__create:hover {
          background-color: #055a1c;
        }
        .control__personalize:hover {
          background: #fff;
          color: #003A67;
        }    
      }
      .control + .sfc-hero__button {
        display: none;
      }
      @media(max-width: 992px) {
        .control {
          margin-top: 20px;
        }
      }
      @media(max-width: 768px) {
        .control {
          flex-flow: column;
          gap: 12px;
          margin-top: 16px;
        }
        .control__create {
          font-size: 16px;
          line-height: 24px;
        }
        .control__btn {
          height: 48px;
        }
        .control__personalize {
          font-size: 14px;
          line-height: 24px;
        }
        .sfc-hero__body {
          font-size: 16px;
          line-height: 26px;
        }
        .sfc-hero__header  [data-sfc-id="heading"] {
          font-size: 28px;
          line-height: 36px;
        }
        .sfc-hero__header  [data-sfc-id="heading"] span {
          line-height: 1.15;
        }
        .control__btn {
          padding-left: 20px;
          padding-right: 20px;
        }
        .sfc-hero__wrapper {
          padding-left: 1em;
          padding-right: 1em;
        }
      }
    `;

    $('#splide02-slide01 .sfc-hero__body--limit').insertAdjacentHTML(
      'afterend',
      `
      <div class='control'>
        <div class='control__btn control__create'>Create a Free Account</div>
        <div class='control__btn control__personalize'>Personalize Your yoga journey</div>
      </div>
    `
    );

    $('#splide01-slide01 .sfc-hero__body--limit').insertAdjacentHTML(
      'afterend',
      `
      <div class='control'>
        <div class='control__btn control__create'>Create a Free Account</div>
        <div class='control__btn control__personalize'>Personalize Your yoga journey</div>
      </div>
    `
    );

    addStyles(css);

    for (const el of $$('.control__create')) {
      el.addEventListener('click', () => {
        pushDataLayer(
          'exp_person_cont_but_space_free',
          'Create a Free Account',
          'Button',
          'First screen. Your Space. Your Practice. Your Community'
        );
        location.href = '/become-a-subscriber';
      });
    }

    for (const el of $$('.control__personalize')) {
      el.addEventListener('click', () => {
        pushDataLayer(
          'exp_person_cont_but_space_person',
          'Personalize Your yoga journey',
          'Button',
          'First screen. Your Space. Your Practice. Your Community'
        );
        location.href = '/personalization';
      });
    }
  }

  function initHomepageAuth() {
    const css = `
      .interest {
        margin: 40px 0;
      }
      .interest__head {
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 30px;
      }
      .interest__btn {
        display: inline-flex;
        gap: 10px;
        padding: 12px 24px;
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
        border-radius: 30px;
        border: 1px solid var(--Gray, #E0E0E0);
        cursor: pointer;
        transition: 0.3s;
        text-decoration: none;
      }
      .interest__change {
        background: var(--Gray-1, #F6F6F6);
        color: var(--Body-color, #555);
      }
      .interest__explore {
        font-size: 18px;
        line-height: 26px;
        color: var(--Blue-Main, #027DB8);
      }
      @media(hover:hover) {
        .interest__btn:hover {
          text-decoration: none;
          transform: scale(1.02);
          box-shadow: 0 0 10px 1px rgba(2, 125, 184, 0.5);
        }
      }
      .interest__footer {
        text-align: center;
        padding: 30px 0;
      }
      .interest__title {
        color: #000;
        font-size: 36px;
        font-weight: 700;
        line-height: 1;
      }
      .interest__body {
        position: relative;
        margin-top: 25px;
        padding: 30px 0;
      }
      .interest__body:before {
        content: '';
        position: absolute;
        left: -100%;
        right: -100%;
        top: 0;
        bottom: 0;
        background: #F5F5F5;
      }
      .ineterest__body-head {
        margin-bottom: 20px;
      }
      .p-frontPage {
        overflow: hidden;
      }
      @media(max-width: 992px) {
        .interest {
          margin-bottom: 30px;
        }
        .interest .video-list {
          grid-template-columns: 1fr;
        }
        .interest__title {
          font-size: 24px;
        }
        .interest__change {
          font-size: 14px;
          line-height: 22px;
          padding: 10px 20px;
          max-width: 242px;
          justify-content: center;
          width: 100%;
          box-sizing: border-box;
        }
        .interest__head {
          flex-wrap: wrap;
          gap: 16px 30px;
        }
        .interest__body {
          padding: 1.5rem 0;
        }
        .ineterest__body-head {
          margin-bottom: 20px;
        }
        .interest__footer {
          padding: 24px 0;
        }
      }
    `;

    addStyles(css);

    const el = `
      <div class='interest'>
        <div class='interest__head'>
          <div class='interest__title'>Based On Your Interests</div>
          <div class='interest__change interest__btn' data-modal='.personlaize'>
            <img src='${config.dir}/img/icon-edit.svg' alt=''>
            Change preferences
          </div>
        </div>

        <div class='interest__body'>
          <div class="ineterest__body-head">542 Classes</div>
          <div class='video-list interest__list'></div>
        </div>

        <div class='interest__footer'>
          <a href='/based-on-interests' class='interest__explore interest__btn'>
            Explore all suggested classes
            <img src='${config.dir}/img/icon-arrow-right-b.svg' alt=''>
          </a>
        </div>
      </div>
    `;

    $('#id_first').insertAdjacentHTML('beforebegin', el);

    focusTimeEvent(
      $('.interest'),
      (time) => {
        pushDataLayer(
          'exp_person_cont_vis_backbasinter_focu',
          time,
          'Visibility',
          'Back to the core. Based On Your Interests'
        );
      },
      0.05
    );

    $('.interest__explore').addEventListener('click', () => {
      pushDataLayer(
        'exp_person_cont_but_backbasinter_class',
        'Explore all suggested classes',
        'Button',
        'Back to the core. Based On Your Interests'
      );
    });

    $('.interest__change').addEventListener('click', () => {
      pushDataLayer(
        'exp_person_cont_but_backbasinter_chang',
        'Change preferences',
        'Button',
        'Back to the core. Based On Your Interests'
      );
    });

    waitFor(
      () => $('.personlaize__save'),
      () => {
        $('.personlaize__save').addEventListener('click', () => {
          buildCards();
        });
      }
    );

    buildCards();

    async function buildCards() {
      if (!getQuizResult(true)) {
        location.reload();
        return false;
      }

      $('.video-list').innerHTML = '';
      const videos = await getMetadata();

      $('.ineterest__body-head').textContent = `${videos.length} Classes`;

      for (const video of getRandomUniqueItems(videos, 3)) {
        $('.video-list').insertAdjacentHTML('beforeend', getVideoCard(video));
      }

      $$('.video__title').forEach((item) => {
        item.addEventListener('click', (e) => {
          pushDataLayer(
            'exp_person_cont_vid_backbasinter_cours',
            `${item.innerText} - Click`,
            'Video',
            'Back to the core. Based On Your Interests'
          );
        });
      });
    }
  }

  function addListingCustomizeCta() {
    const css = `
      .lav-cta {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 12px;
        background: #003A67 url(${config.dir}/img/bg-cta-custom.png) no-repeat center;
        background-size: cover;
        color: #fff;
        text-align: center;
        padding: 20px;
        height: 228px;
        box-sizing: border-box;
      }
      .lav-cta__icon {
        line-height: 0;
      }
      .lav-cta__title {
        margin-top: 16px;
        color: var(--white, #FFF);
        font-size: 20px;
        font-weight: 500;
        line-height: 28px; 
      }
      .lav-cta__btn {
        border-radius: 30px;
        background: var(--white, #FFF);
        backdrop-filter: blur(2px);
        padding: 10px 24px;
        margin-top: 20px;
        color: var(--Blue-dark, #003A67);
        font-size: 14px;
        font-weight: 700;
        line-height: 22px;
        text-transform: capitalize;
        max-width: 220px;
        width: 100%;
        cursor: pointer;
        transition: 0.35s;
      }
      @media(hover:hover) {
        .lav-cta__btn:hover {
          opacity: 0.7;
          transform: scale(1.05);
        }
      }
      @media(max-width: 768px) {
        .lav-cta__title {
          font-size: 18px;
        }
      }
    `;

    addStyles(css);

    const num = window.innerWidth < 768 ? 3 : 6;

    $(`.view-content .views-row:nth-child(${num})`).insertAdjacentHTML(
      'beforebegin',
      `
      <div class="lav-cta">
        <div class="lav-cta__icon">
          <img src="${config.dir}/img/icon-cta-custom.svg" alt="">
        </div>
        <div class="lav-cta__title">Customize Your Yoga Experience</div>
        <div class="lav-cta__btn">Take personalization quiz</div>
      </div>
    `
    );

    $('.lav-cta__btn').addEventListener('click', function () {
      if (location.href.includes('/yoga-meditation')) {
        pushDataLayer(
          'exp_person_cont_but_meditcustom_pers',
          'Take personalization quiz',
          'Button',
          'Yoga-meditation. Customize Your Yoga Experience'
        );
      } else if (location.href.includes('/yoga-classes')) {
        pushDataLayer(
          'exp_person_cont_but_classcustom_pers',
          'Take personalization quiz',
          'Button',
          'Yoga-classes. Customize Your Yoga Experience'
        );
      }
      location.href = '/personalization';
    });

    focusTimeEvent(
      $('.lav-cta'),
      (time) => {
        if (location.href.includes('/yoga-meditation')) {
          pushDataLayer(
            'exp_person_cont_vis_meditcustom_focu',
            time,
            'Visibility',
            'Yoga-meditation. Customize Your Yoga Experience'
          );
        } else if (location.href.includes('/yoga-classes')) {
          pushDataLayer(
            'exp_person_cont_vis_classcustom_focu',
            time,
            'Visibility',
            'Yoga-classes. Customize Your Yoga Experience'
          );
        }
      },
      0.4
    );
  }

  function addPdpCustomizeCta() {
    const css = `
      .lav-cta__wrap {
        padding-bottom: 24px;
        border-bottom: 1px solid #d6d6d6;
      }
      .lav-cta {
        display: flex;
        align-items: center;
        gap: 24px;
        border-radius: 12px;
        background: #003A67 url(${config.dir}/img/bg-cta-custom-h.png) no-repeat center;
        background-size: cover;
        color: #fff;
        padding: 20px 30px;
        box-sizing: border-box;
        line-height: 24px;
      }
      .lav-cta__icon {
        line-height: 0;
        flex-shrink: 0;
      }
      .lav-cta__title {
        margin-top: 16px;
        color: var(--white, #FFF);
        font-size: 20px;
        font-weight: 500;
        line-height: 28px; 
      }
      .lav-cta__caption {
        color: var(--white, #FFF);
        font-size: 16px;
        font-weight: 500;
      }
      .lav-cta__link {
        display: inline-flex;
        align-items: center;
        margin-top: 5px;
        gap: 12px;
        cursor: pointer;
        transition: 0.35s;
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        text-transform: capitalize;
      }
      @media(hover:hover) {
        .lav-cta__link:hover {
          opacity: 0.7;
        }
      }
      @media(max-width: 768px) {
        .lav-cta {
          align-items: flex-start;
          gap: 15px;
          padding: 12px;
          background-position: left;
        }
        .lav-cta__caption {
          line-height: 24px;
          font-weight: 400;
        }
        .lav-cta__link {
          margin-top: 8px;
        }
        .lav-cta__icon {
          margin-top: 7px;
        }
        .lav-cta__wrap {
          margin: -1.4rem -16px 0;
          padding: 16px 1em;
          background: #fff;
          border-top: 1px solid #d6d6d6;
        }
      }
    `;

    addStyles(css);

    $(
      '.sfc-nodePlayable__primaryContentContainer + .sfc-nodePlayable__borderSection'
    ).insertAdjacentHTML(
      'afterend',
      `
      <div class="lav-cta__wrap">
        <div class="lav-cta">
          <div class="lav-cta__icon">
            <img src="${config.dir}/img/icon-cta-custom.svg" alt="">
          </div>
          <div class="lav-cta__info">
            <div class="lav-cta__caption">Create personalized list of сlasses by answering a few questions about your preferences</div>
            <div class="lav-cta__link">
              Take personalization quiz
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                <path d="M16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289L10.3431 0.928932C9.95262 0.538408 9.31946 0.538408 8.92893 0.928932C8.53841 1.31946 8.53841 1.95262 8.92893 2.34315L14.5858 8L8.92893 13.6569C8.53841 14.0474 8.53841 14.6805 8.92893 15.0711C9.31946 15.4616 9.95262 15.4616 10.3431 15.0711L16.7071 8.70711ZM0 9H16V7H0V9Z" fill="white"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    `
    );

    focusTimeEvent(
      $('.lav-cta'),
      (time) => {
        pushDataLayer(
          'exp_person_cont_but_answquest_pers',
          time,
          'Visibility',
          'Create personalized list of сlasses by answering a few questions about your preferences. Take personalization quiz'
        );
      },
      0.2
    );

    $('.lav-cta__link').addEventListener('click', function () {
      pushDataLayer(
        'exp_person_cont_lin_answquest_take',
        'Take personalization quiz',
        'Link',
        'Create personalized list of сlasses by answering a few questions about your preferences. Take personalization quiz'
      );
      location.href = '/personalization';
    });
  }

  function addBriefInterests() {
    const css = `
      .interest__head {
        background: #fff;
        padding: 30px 0;
      }
      .interest__head-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px 30px;
      }
      .interest__btn {
        display: inline-flex;
        gap: 10px;
        padding: 12px 24px;
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
        border-radius: 30px;
        border: 1px solid var(--Gray, #E0E0E0);
        cursor: pointer;
        transition: 0.3s;
        text-decoration: none;
      }
      .interest__change {
        background: var(--Gray-1, #F6F6F6);
        color: var(--Body-color, #555);
      }
      .interest__explore {
        font-size: 18px;
        line-height: 26px;
        color: var(--Blue-Main, #027DB8);
      }
      @media(hover:hover) {
        .interest__btn:hover {
          text-decoration: none;
          transform: scale(1.02);
          box-shadow: 0 0 10px 1px rgba(2, 125, 184, 0.5);
        }
      }
      .interest__footer {
        text-align: center;
        background: #fff;
        padding: 30px 0;
      }
      .interest__container {
        max-width:  var(--page-container-width);
        margin: auto;
        max-width: 100%;
        width: var(--page-container-width);
        padding: 0 1em;
        box-sizing: border-box;
      }
      .interest__title {
        color: #000;
        font-size: 36px;
        font-weight: 700;
        line-height: 1;
      }
      .interest__body {
        padding: 2.5rem 0;
      }
      .ineterest__body-head {
        margin-bottom: 20px;
      }
      @media(max-width: 992px) {
        .interest .video-list {
          grid-template-columns: 1fr;
        }
        .interest__title {
          font-size: 24px;
        }
        .interest__change {
          font-size: 14px;
          line-height: 22px;
          padding: 10px 20px;
          max-width: 242px;
          justify-content: center;
          width: 100%;
          box-sizing: border-box;
        }
        .interest__head-container {
          flex-wrap: wrap;
        }
        .interest__head {
          padding: 24px 0;
        }
        .interest__body {
          padding: 1.5rem 0;
        }
        .ineterest__body-head {
          margin-bottom: 20px;
        }
        .interest__footer {
          padding: 24px 0;
        }
        #block-samsara-maintenancemessage {
          margin: 0 auto;
          width: 100%;
        }
        .o-page__mainContent {
          margin-top: 0;
        }
      }
    `;

    addStyles(css);

    const el = `
      <div class='interest'>
        <div class='interest__head'>
          <div class='interest__container interest__head-container'>
            <div class='interest__title'>Based On Your Interests</div>
            <div class='interest__change interest__btn' data-modal='.personlaize'>
              <img src='${config.dir}/img/icon-edit.svg' alt=''>
              Change preferences
            </div>
          </div>
        </div>

        <div class='interest__body'>
          <div class='interest__container'>
            <div class='ineterest__body-head'></div>
            <div class='video-list'></div>
          </div>
        </div>

        <div class='interest__footer'>
          <div class='interest__container'>
            <a href='/based-on-interests' class='interest__explore interest__btn'>
              Explore all suggested classes
              <img src='${config.dir}/img/icon-arrow-right-b.svg' alt=''>
            </a>
          </div>
        </div>
      </div>
    `;

    $('#main-content').insertAdjacentHTML('beforebegin', el);

    focusTimeEvent(
      $('.interest__body'),
      (time) => {
        pushDataLayer(
          'exp_person_cont_vis_authbasinter_focu',
          time,
          'Visibility',
          'Yoga-classes. Authorised user. Based On Your Interests'
        );
      },
      0.05
    );

    $('.interest__explore').addEventListener('click', () => {
      pushDataLayer(
        'exp_person_cont_but_authbasinter_class',
        'Explore all suggested classes',
        'Button',
        'Yoga-classes. Authorised user. Based On Your Interests'
      );
    });

    $('.interest__change').addEventListener('click', () => {
      pushDataLayer(
        'exp_person_cont_but_authbasinter_chang',
        'Change preferences',
        'Button',
        'Yoga-classes. Authorised user. Based On Your Interests'
      );
    });

    waitFor(
      () => $('.personlaize__save'),
      () => {
        $('.personlaize__save').addEventListener('click', () => {
          buildCards();
        });
      }
    );

    buildCards();

    async function buildCards() {
      if (!getQuizResult(true)) {
        location.reload();
        return false;
      }

      $('.video-list').innerHTML = '';
      const videos = await getMetadata();

      $('.ineterest__body-head').textContent = `${videos.length} Classes`;

      for (const video of getRandomUniqueItems(videos, 3)) {
        $('.video-list').insertAdjacentHTML('beforeend', getVideoCard(video));
      }

      $$('.video__title').forEach((item) => {
        item.addEventListener('click', (e) => {
          pushDataLayer(
            'exp_person_cont_vid_authbasinter_cours',
            `${item.innerText} - Click`,
            'Video',
            'Yoga-classes. Authorised user. Based On Your Interests'
          );
        });
      });
    }
  }

  function initQuiz() {
    // let currentStep = quiz.length;
    let currentStep = 0;

    const css = `
      html, body {
        height: 100%;
      }
      *, *:before, *:after {
        box-sizing: border-box;
      }
      [data-off-canvas-main-canvas], .hc-offcanvas-nav, .skip-link {
        display: none!important;
      }

      .quiz {
        font-family: "Manrope", sans-serif;
        min-height: 100%;
        display: flex;
      }
      .quiz__image {
        position: relative;
        line-height: 0;
        width: 43%;
        overflow: hidden;
      }
      .quiz_intro .quiz__image {
        width: 50%;
      }
      .quiz__image img {
        min-width: 100%;
        min-height: 101%;
        object-fit: cover;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }


      .quiz__body {
        display: flex;
        flex-flow: column;
        padding: 40px 100px 90px;
        width: 57%;
        gap: 40px;
      }

      .quiz_intro .quiz__body {
        width: 50%;
      }

      .progress__header {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
      }

      .progress__back {
        display: flex;
        align-items: center;
        gap: 4px;
        transition: 0.3s;
        cursor: pointer;
        color: var(--Blue-Main, #027DB8);
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
      }
      .quiz_intro .progress__back {
        opacity: 0;
        pointer-events: none;
      }
      @media(hover:hover) {
        .progress__back:hover {
          opacity: 0.7;
        }
      }

      .progress__logo {
        margin: 0 20px;
      }

      .progress__count {
        color: var(--Body-color, #555);
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
        transition: 0.2s;
      }
      .quiz_intro .progress__count {
        opacity: 0;
        pointer-events: none;
      }

      .progress__line {
        display: grid;
        margin-top: 24px;
        grid-template-columns: repeat(4, 1fr);
        gap: 8px;
      }
      .quiz_intro .progress__line {
        display: none;
      }
      .progress__line-item {
        border-radius: 30px;
        background-color: var(--Gray, #E0E0E0);
        height: 6px;
        transition: 0.35s;
        border: 1px solid #E0E0E0;
        box-sizing: border-box;
      }
      .progress__line-item.active {
        background-color: #027DB8;
      }

      .quiz_intro .quiz__info {
        margin: auto;
      }
      .quiz__title {
        color: var(--H1-Black, #272727);
        font-size: 30px;
        font-weight: 700;
        line-height: 38px;
      }
      .quiz_intro .quiz__title {
        font-size: 42px;
        line-height: 54px;
      }
      .quiz__caption {
        color: var(--H1-Black, #272727);
        font-size: 18px;
        line-height: 1;
        margin-top: 15px;
      }
      .quiz_intro .quiz__caption {
        line-height: 26px;
        margin-top: 24px;
      }
      .quiz__list {
        margin-top: 30px;
        display: grid;
        grid-template-columns: 1fr;
        gap: 16px;
      }
      .quiz__list-2, .quiz__list-3 {
        grid-template-columns: 1fr 1fr;
      }
      .quiz__item {
        position: relative;
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 10px 44px 10px 12px;
        border-radius: 8px;
        border: 2px solid var(--Gray, #E0E0E0);
        background: var(--white, #FFF);
        cursor: pointer;
        transition: 0.3s;
      }
      .quiz__list-2 .quiz__item:last-child .quiz__item-title {
        font-weight: 500;
      }
      .quiz__list-2 .quiz__item:last-child {
        grid-column-start: 1;
        grid-column-end: 3;
      }
      @media(hover:hover) {
        .quiz__item:not(.active):hover {
          box-shadow: 0 0 10px 1px rgba(2, 125, 184, 0.3);
        }
      }
      .quiz__item:before {
        content: '';
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 12px;
        width: 20px;
        height: 20px;
        border-radius: 100px;
        border: 2px solid var(--Gray, #E0E0E0);
        background: #FFF;
        transition: 0.3s;
        pointer-events: none;
      }
      .quiz__item:after {
        content: '';
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 16px;
        transition: 0.3s;
        pointer-events: none;
        opacity: 0;
        border-radius: 100px;
        width: 12px;
        height: 12px;
        background: var(--Blue-Main, #027DB8);
      }
      .quiz__list-checkbox .quiz__item:before {
        border-radius: 4px;
      }
      .quiz__list-checkbox .quiz__item:after {
        border-radius: 2px;
      }
      .quiz__item.active {
        border-color: #027DB8;
      }
      .quiz__item.active:before {
        border-color: #027DB8;
      }
      .quiz__item.active:after {
        opacity: 1;
      }
      .quiz__item-icon {
        line-height: 0;
      }
      .quiz__item-title {
        color: var(--Body-color, #555);
        font-size: 16px;
        font-weight: 700;
        line-height: 24px; 
      }
      .quiz__list-3 .quiz__item-title {
        font-weight: 500;
      }
      .quiz__item-caption {
        color: var(--Body-color, #555);
        font-size: 12px;
        font-weight: 500;
        line-height: 1.4;
        margin-top: 5px;
      }

      .quiz__control {
        display: flex;
        gap: 30px;
        align-items: center;
        justify-content: space-between;
        margin-top: auto;
      }

      .quiz_intro-control {
        display: flex;
        align-items: center;
        flex-flow: column;
        gap: 26px;
        margin-top: 40px;
      }
      .quiz_intro .quiz__control {
        display: none;
      }
      .quiz__control-skip {
        color: var(--Body-100, #A5A5A5);
        font-size: 18px;
        font-weight: 700;
        line-height: 1;
        text-decoration: underline;
        text-transform: capitalize;
        transition: 0.35s;
        cursor: pointer;
        white-space: nowrap;
      }
      .quiz__control-next {
        max-width: 330px;
        width: 100%;
        border-radius: 30px;
        color: #fff;
        height: 52px;
        display: flex;
        align-items: center;
        padding: 5px 15px;
        justify-content: center;
        font-size: 18px;
        font-weight: 700;
        text-transform: capitalize;
        background: var(--Body-100, #A5A5A5);
        transition: 0.35s;
      }
      .quiz_intro .quiz__control-next {
        max-width: 100%;
      }
      .quiz__control-next:not(.active) {
        pointer-events: none;
      }
      .quiz__control-next.active {
        background: var(--Blue-Main, #027DB8);
        cursor: pointer;
      }
      @media(hover:hover) {
        .quiz__control-skip:hover {
          opacity: .7;
        }
        .quiz__control-next.active:hover {
          transform: scale(1.05);
          background-color: #035a83;
        }
      }

      .result {
        display: flex;
        min-height: 100%;
      }
      .result__image {
        position: relative;
        line-height: 0;
        width: 43%;
        padding: 0;
        background: var(--Blue-Main, #027DB8);
      }
      .result__image:before {
        content: '';
        position: absolute;
        background: url(${config.dir}/img/quiz-step-final.jpeg) center  no-repeat;
        background-size: cover;
        left: -70px;
        right: 0;
        top: 90px;
        bottom: 90px;
        border-radius: 12px 0 0 12px;
      }

      .result__body {
        margin: auto 0;
        padding: 60px 130px 60px 60px;
        width: 57%;
      }
      .result__image img {
        border-radius: 12px;
      }
      .result__title {
        margin: 20px 0;
        color: var(--H1-Black, #272727);
        font-size: 30px;
        font-weight: 700;
        line-height: 38px;
      }
      .result__caption {
        display: flex;
        gap: 8px;
        align-items: center;
        color: var(--Body-color, #555);
        font-size: 14px;
        font-weight: 400;
        line-height: 1.3; 
      }
      .result__list {
        margin: 30px 0 20px;
        display: flex;
        flex-wrap: wrap;
        gap: 20px 37px;
        max-width: 335px;
      }
      .result__item-caption {
        padding-left: 28px;
        background: url(${config.dir}/img/icon-lotus.svg) left center  no-repeat;
        background-size: contain;
        color: var(--H1-Black, #272727);
        font-size: 14px;
        font-weight: 600;
        line-height: 24px;
      }
      .result__item-values {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px;
        margin-top: 10px;
        min-height: 34px;
      }
      .result__item-value {
        padding: 5px 12px;
        color: var(--Body-color, #555);
        font-size: 14px;
        font-weight: 700;
        line-height: 22px;
        border-radius: 30px;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        background: var(--Gray-1, #F6F6F6)
      }
      .result__item-value img {
        max-width: 24px;
        max-height: 24px;
      }

      .result__btn {
        max-width: 480px;
        margin-top: 24px;
      }

      .quiz__image-mob {
        display: none;
      }
      @media(max-width: 1200px) {
        .quiz__body {
          padding: 40px 40px 60px;
        }
        .quiz_intro .quiz__body {
          width: 65%;
        }
        .quiz_intro .quiz__image {
          width: 35%;
        }
        .result__image {
          width: 30%;
        }
        .result__body {
          width: 70%;
        }
      }
      @media(max-width: 992px) {
        .quiz__list-2, .quiz__list-3 {
          grid-template-columns: 1fr;
          gap: 8px;
        }
        .quiz__list {
          gap: 8px;
        }
        .quiz__list-2 .quiz__item:last-child {
          grid-column-start: 1;
          grid-column-end: 2;
        }
        .quiz__title {
          font-size: 22px;
          line-height: 30px;
        }
        .quiz__body {
          gap: 20px;
        }
        .quiz_intro .quiz__title {
          font-size: 28px;
          line-height: 36px;
        }
        .quiz_intro .quiz__caption {
          font-size: 16px;
          line-height: 24px;
          margin-top: 16px;
        }
        .quiz_intro-control {
          margin-top: 24px;
        }
        .result__body {
          padding: 40px 100px 40px 40px;
        }
      }
      @media(max-width: 768px) {
        .quiz__title br {
          display: none;
        }
        .quiz {
          display: block;
        }
        .quiz__body {
          width: 100%;
          padding: 20px;
        }
        .progress__back {
          font-size: 14px;
        }
        .progress__logo {
          max-width: 150px;
        }
        .progress__count {
          font-size: 14px;
        }
        .progress__line {
          margin-top: 20px;
          gap: 4px;
        }
        .quiz__caption {
          margin-top: 12px;
          font-size: 16px;
        }
        .quiz__list {
          margin-top: 16px;
        }
        .quiz__item-title {
          font-size: 14px;
          line-height: 20px;
        }
        .quiz__item-caption {
          line-height: 1.5;
          margin-top: 0;
          font-weight: 400;
        }
        .quiz__list-1 .quiz__item-caption {
          display: none;
        }
        .quiz__control {
          position: fixed;
          left: 0;
          right: 0;
          bottom: 0;
          border-top: 1px solid var(--Gray, #E0E0E0);
          background: #FFF;
          flex-flow: column-reverse;
          gap: 12px;
          padding: 16px 20px 8px;
        }
        .quiz_intro .quiz__body {
          width: 100%;
        }
        .quiz__control-next {
          max-width: 100%;
          height: 50px;
        }
        .quiz__control-skip {
          padding: 5px 0;
          font-size: 14px;
        }
        .quiz__body {
          padding-bottom: 130px;
        }
        .quiz_intro .quiz__body {
          padding-bottom: 40px;
        }
        .quiz_intro-control {
          gap: 12px;
        }
        .quiz_intro .progress {
          display: none;
        }
        .quiz__image {
          display: none;
        }
        .quiz_intro .quiz__image {
          display: block;
          width: 100%;
          height: 250px;
        }
        .quiz__image-desk {
          display: none;
        }
        .quiz__image-mob {
          display: block;
        }
        .result__body {
          padding: 22px 20px 115px;
          width: 100%;
        }
        .result__logo {
          display: block;
          margin: auto;
          max-width: 150px;
        }
        .result__title {
          font-size: 16px;
          line-height: 24px;
        }
        .result__title strong {
          font-size: 22px;
          display: block;
          font-weight: 700;
          line-height: 30px;
          margin-bottom: 8px;
        }
        .result__title br {
          display: none;
        }
        .result__list {
          background: #D9ECF4;
          padding: 20px;
          margin: 20px -20px;
          max-width: initial;
          gap: 20px 30px;
        }
        .result__image {
          display: none;
        }
        .result__btn-wrap {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          width: initial;
          background: #fff;
          padding: 16px 20px;
          border-top: 1px solid var(--Gray, #E0E0E0);
        }
        .result__btn {
          margin-top: 0;
          font-size: 14px;
        }
      }
    `;

    addStyles(css);

    const html = `
      <div class='quiz'>
        <div class='quiz__image'>
          <img class='quiz__image-desk' src='${config.dir}/img/quiz-step-0.jpeg' alt=''>
          <img class='quiz__image-mob' src='${config.dir}/img/quiz-step-0-mob.jpeg' alt=''>
          <img style='display: none' src='${config.dir}/img/quiz-step-1.jpeg' alt=''>
          <img style='display: none' src='${config.dir}/img/quiz-step-2.jpeg' alt=''>
          <img style='display: none' src='${config.dir}/img/quiz-step-3.jpeg' alt=''>
          <img style='display: none' src='${config.dir}/img/quiz-step-4.jpeg' alt=''>
        </div>

        <div class='quiz__body'>
          <div class='quiz__progress progress'>
            <div class='progress__header'>
              <div class='progress__back'>
                <img src='${config.dir}/img/icon-back-blue.svg' alt=''>
                Back
              </div>

              <img class='progress__logo' width="200px" src="/themes/custom/samsara/logo.png">

              <div class='progress__count'>-</div>
            </div>

            <div class='progress__line'>
              <div class='progress__line-item'></div>
              <div class='progress__line-item'></div>
              <div class='progress__line-item'></div>
              <div class='progress__line-item'></div>
            </div>

          </div>

          <div class='quiz__info'>
          </div>

          <div class='quiz__control'>
            <div class='quiz__control-skip'>Skip this question</div>
            <div class='quiz__control-next'>Next</div>
          </div>
        </div>
      </div>
    `;

    $('body').insertAdjacentHTML('afterbegin', html);

    $('.quiz__control-next').addEventListener('click', (e) => {
      console.log('clickNext');
      e.preventDefault();
      let title = '';
      if (currentStep === 1) {
        pushDataLayer(
          'exp_person_cont_but_curryoga_next',
          `Next - ${
            $('.quiz__item.active .quiz__item-title').innerText
          } - Choose one option`,
          'Button',
          'Step 1. Which best describes your current yoga experience level?'
        );
      } else if (currentStep === 2) {
        $$('.quiz__item.active').forEach((item) => {
          title += $('.quiz__item-title', item).innerText + ', ';
        });

        pushDataLayer(
          'exp_person_cont_but_typeyoga_next',
          'Next - ' + title.slice(0, -2),
          'Button',
          'Step 2. What type of yoga classes are you most interested in?'
        );
      } else if (currentStep === 3) {
        $$('.quiz__item.active').forEach((item) => {
          title += $('.quiz__item-title', item).innerText + ', ';
        });

        pushDataLayer(
          'exp_person_cont_but_specificarea_next',
          'Next - ' + title.slice(0, -2),
          'Button',
          "Step 3. Are there any specific areas you'd like to focus on?"
        );
      } else if (currentStep === 4) {
        $$('.quiz__item.active').forEach((item) => {
          title += $('.quiz__item-title', item).innerText + ', ';
        });

        pushDataLayer(
          'exp_person_cont_but_muchtime_next',
          'Next - ' + title.slice(0, -2),
          'Button',
          'Step 4. How much time can you allocate for your yoga practice?'
        );
      }
      currentStep++;
      initStep(currentStep);
    });

    $('.quiz__control-skip').addEventListener('click', (e) => {
      e.preventDefault();
      console.log('clickSkip');
      if (currentStep === 1) {
        pushDataLayer(
          'exp_person_cont_lin_curryoga_skip',
          'Skip this question',
          'Link',
          'Step 1. Which best describes your current yoga experience level?'
        );
      } else if (currentStep === 2) {
        pushDataLayer(
          'exp_person_cont_lin_typeyoga_skip',
          'Skip this question',
          'Link',
          'Step 2. What type of yoga classes are you most interested in?'
        );
      } else if (currentStep === 3) {
        pushDataLayer(
          'exp_person_cont_lin_specificarea_skip',
          'Skip this question',
          'Link',
          "Step 3. Are there any specific areas you'd like to focus on?"
        );
      } else if (currentStep === 4) {
        pushDataLayer(
          'exp_person_cont_lin_muchtime_skip',
          'Skip this question',
          'Link',
          'Step 4. How much time can you allocate for your yoga practice?'
        );
      }
      $$('.quiz__item.active').forEach((el) => el.classList.remove('active'));
      currentStep++;
      initStep(currentStep);
    });

    $('.progress__back').addEventListener('click', (e) => {
      e.preventDefault();
      console.log('clickBack');
      if (currentStep <= 0) return false;
      currentStep--;
      initStep(currentStep, true);
    });

    initStep(currentStep);

    function initStep(step, isBack) {
      const result = getQuizResult();
      const key = 'step' + (step - 1);

      if (step > 1 && !isBack) {
        result[key] = [];
        $$('.quiz__item.active').forEach((el) => {
          result[key].push(el.dataset.id);
        });

        saveQuizResult(result);
      }

      if (step >= quiz.length) {
        initResult();
        if (!isAuth()) {
          localStorage.setItem('isQuizCompleted', 'true');
        }
        return false;
      }

      console.log('initStep', step);
      resetStep();

      const obj = quiz[step];

      if (!obj) return false;

      if (obj.title) {
        $('.quiz__info').insertAdjacentHTML(
          'beforeend',
          `<div class='quiz__title'>${obj.title}</div>`
        );
      }

      if (obj.caption) {
        $('.quiz__info').insertAdjacentHTML(
          'beforeend',
          `<div class='quiz__caption'>${obj.caption}</div>`
        );
      }

      if (obj.variants?.length) {
        $('.quiz__info').insertAdjacentHTML(
          'beforeend',
          `<div class='quiz__list quiz__list-${step} quiz__list-${obj.type}'></div>`
        );

        for (const [idx, item] of obj.variants.entries()) {
          const el = `
            <div class='quiz__item ${
              result['step' + step]?.includes(String(item.id)) ? 'active' : ''
            }' data-id='${item.id}'>
              ${
                item.image
                  ? `<div class='quiz__item-icon'>
                <img src='${config.dir}/img/${item.image}' alt=''>
              </div>`
                  : ''
              }

              <div class='quiz__item-info'>
                ${
                  item.title
                    ? `<div class='quiz__item-title'>${item.title}</div>`
                    : ''
                }
                ${
                  item.caption
                    ? `<div class='quiz__item-caption'>${item.caption}</div>`
                    : ''
                }
              </div>
            </div>
          `;

          $('.quiz__list').insertAdjacentHTML('beforeend', el);
        }

        $$('.quiz__item').forEach((el) => {
          el.addEventListener('click', (e) => {
            e.preventDefault();

            if (obj.type === 'radio') {
              if (el.classList.contains('active')) {
                el.classList.toggle('active');
              } else {
                $('.quiz__item.active')?.classList.remove('active');
                el.classList.add('active');
              }
            } else {
              if ($('.quiz__list-2')) {
                if (el.dataset.id === '7') {
                  $$(".quiz__item.active:not([data-id='7'])").forEach((el) =>
                    el.classList.remove('active')
                  );
                } else {
                  $(".quiz__item.active[data-id='7']")?.classList.remove(
                    'active'
                  );
                }
              }

              el.classList.toggle('active');
            }

            if ($('.quiz__item.active')) {
              $('.quiz__control-next').classList.add('active');
            } else {
              $('.quiz__control-next').classList.remove('active');
            }
          });
        });

        if (result['step' + step]?.length && $('.quiz__control-next')) {
          $('.quiz__control-next').classList.add('active');
        }
      }

      if (step === 0) {
        $('.quiz').classList.add('quiz_intro');

        $('.quiz__info').insertAdjacentHTML(
          'beforeend',
          `
            <div class='quiz_intro-control'>
              <div class='quiz__control-next active'>Personalize my experience</div>
              <div class='quiz__control-skip'>Skip personalization</div>
            </div>
          `
        );

        $('.quiz__control-next').addEventListener('click', function (e) {
          e.preventDefault();
          console.log('clickNext Intro');
          pushDataLayer(
            'exp_person_cont_but_perfyoga_exper',
            'Personalize my experience',
            'Button',
            'Let’s Find Your. Perfect Yoga Journey'
          );
          currentStep++;
          initStep(currentStep);
        });

        $('.quiz__control-skip').addEventListener('click', function (e) {
          e.preventDefault();
          pushDataLayer(
            'exp_person_cont_lin_perfyoga_skip',
            'Skip personalization',
            'Link',
            'Let’s Find Your. Perfect Yoga Journey'
          );
          if (isAuth()) {
            location.href = '/yoga-classes';
          } else {
            location.href = '/yogi/register';
          }
          return false;
        });

        focusTimeEvent(
          $('.quiz__caption'),
          (time) => {
            pushDataLayer(
              'exp_person_cont_vis_perfyoga_focu',
              time,
              'Visibility',
              'Let’s Find Your. Perfect Yoga Journey'
            );
          },
          0.2
        );
      } else {
        $('.quiz').classList.remove('quiz_intro');
      }

      if (step === 1) {
        focusTimeEvent(
          $('.quiz__title'),
          (time) => {
            pushDataLayer(
              'exp_person_cont_vis_curryoga_focu',
              time,
              'Visibility',
              'Step 1. Which best describes your current yoga experience level?'
            );
          },
          0.2
        );
      } else if (step === 2) {
        focusTimeEvent(
          $('.quiz__title'),
          (time) => {
            pushDataLayer(
              'exp_person_cont_vis_typeyoga_focu',
              time,
              'Visibility',
              'Step 2. What type of yoga classes are you most interested in?'
            );
          },
          0.2
        );
      } else if (step === 3) {
        focusTimeEvent(
          $('.quiz__title'),
          (time) => {
            pushDataLayer(
              'exp_person_cont_vis_specificarea_focu',
              time,
              'Visibility',
              "Step 3. Are there any specific areas you'd like to focus on?"
            );
          },
          0.2
        );
      } else if (step === 4) {
        focusTimeEvent(
          $('.quiz__title'),
          (time) => {
            pushDataLayer(
              'exp_person_cont_vis_muchtime_focu',
              time,
              'Visibility',
              'Step 4. How much time can you allocate for your yoga practice?'
            );
          },
          0.2
        );
      }

      function resetStep() {
        $('.progress__count').innerHTML = `${step}/${quiz.length - 1}`;
        $('.quiz__control-next').classList.remove('active');
        $('.quiz__info').innerHTML = '';
        $$('.progress__line-item').forEach((el) =>
          el.classList.remove('active')
        );

        $('.quiz__image img').src = `${config.dir}/img/quiz-step-${step}.jpeg`;

        if ($(`.progress__line-item:nth-child(${step})`)) {
          $(`.progress__line-item:nth-child(${step})`).classList.add('active');
          let prevEl = $(
            `.progress__line-item:nth-child(${step})`
          ).previousElementSibling;
          while (prevEl) {
            prevEl.classList.add('active');
            prevEl = prevEl.previousElementSibling;
          }
        }
      }
    }

    function initResult() {
      $('.quiz').classList.add('result');
      $('.quiz').classList.add('quiz');

      const markup = `
        <div class='result__body'>
          <img class='result__logo' width="200px" src="/themes/custom/samsara/logo.png">

          <div class='result__title'>
            <strong>Congratulations!</strong> We've Personalized Your Yoga&nbsp;Journey!
          </div>

          <div class='result__list'></div>

          <div class='result__caption'>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M9.65 4.4625L7.525 2.3625L8.225 1.6625C8.41667 1.47083 8.65217 1.375 8.9315 1.375C9.21083 1.375 9.44617 1.47083 9.6375 1.6625L10.3375 2.3625C10.5292 2.55417 10.6292 2.7855 10.6375 3.0565C10.6458 3.3275 10.5542 3.55867 10.3625 3.75L9.65 4.4625ZM8.925 5.2L3.625 10.5H1.5V8.375L6.8 3.075L8.925 5.2Z" fill="#555555"/>
            </svg>
            You can change your preferences anytime.
          </div>

          <div class='result__btn-wrap'>
            <div class='quiz__control-next active result__btn'>Continue to Personalized Practice</div>
          </div>
        </div>

        <div class='result__image'></div>
      `;

      $('.quiz').innerHTML = markup;

      let time = 0;
      setInterval(() => {
        time += 0.5;
      }, 500);

      $('.result__btn').addEventListener('click', (e) => {
        e.preventDefault();
        pushDataLayer(
          'exp_person_cont_vis_congratulation_focu',
          time + 's',
          'Visibility',
          "Step finally. Congratulations! We've Personalized Your Yoga Journey"
        );

        pushDataLayer(
          'exp_person_cont_but_congrat_contin',
          'Continue to Personalized Practice',
          'Button',
          "Step finally. Congratulations! We've Personalized Your Yoga Journey"
        );

        if (isAuth()) {
          location.href = '/yoga-classes';
        } else {
          location.href = '/yogi/register?destination=/yoga-classes';
        }
      });

      // focusTimeEvent(
      //   $('.result__title'),
      //   (time) => {
      //     pushDataLayer(
      //       'exp_person_cont_vis_congratulation_focu',
      //       time,
      //       'Visibility',
      //       "Step finally. Congratulations! We've Personalized Your Yoga Journey"
      //     );
      //   },
      //   0.2
      // );

      fillResult();

      function fillResult() {
        const result = getQuizResult();

        $('.result__list').innerHTML = '';

        for (const step in result) {
          if (result[step].length) {
            const stepObj = quiz.find(
              (item) => item.step === +step.replace('step', '')
            );

            const itemEl = document.createElement('div');
            itemEl.classList.add('result__item');

            itemEl.innerHTML = `
              <div class='result__item-caption'>${stepObj.resultCaption}</div>
              <div class='result__item-values'></div>
            `;

            for (const variant of result[step]) {
              const variantObj = stepObj.variants.find(
                (item) => item.id === +variant
              );

              itemEl.querySelector('.result__item-values').insertAdjacentHTML(
                'beforeend',
                `
                  <div class='result__item-value'>
                    ${
                      variantObj.image
                        ? `<img src='${config.dir}/img/${variantObj.image}' alt=''>`
                        : ''
                    }
                    ${variantObj.title}
                  </div>
                `
              );
            }

            $('.result__list').insertAdjacentElement('beforeend', itemEl);
          }
        }
      }
    }
  }

  function addModal() {
    const modalEl = `
      <div class='lav-modal__close'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M20 20L4 4M20 4L4 20" stroke="white" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>
      <div class='personlaize__body'>
        <div class='personlaize__title'>Edit Your <span>Interests</span></div>  

        <div class='personlaize__list'></div>

        <div class='personlaize__control'>
          <div class='personlaize__save'>Save your interests</div>
          <div class='personlaize__cancel'>Cancel</div>
        </div>
      </div>

      <div class='personlaize__image'></div>
    `;

    new Modal('personlaize', modalEl);

    $('.personlaize__save').addEventListener('click', function (e) {
      e.preventDefault();
      pushDataLayer(
        'exp_person_cont_but_popupedit_save',
        'Save your interests',
        'Button',
        'Popup. Edit Your Interests'
      );
      const result = getQuizResult();
      $$('.personlaize__item[data-step-id]').forEach((el) => {
        result[`step${el.dataset.stepId}`] = [];
        $$('.drop__item.active', el).forEach((item) => {
          result[`step${el.dataset.stepId}`].push(item.dataset.id);
        });
      });

      saveQuizResult(result);

      this.innerText = 'Saved!';
      this.classList.add('personlaize__save_saved');
      setTimeout(() => {
        this.innerText = 'Save your interests';
        this.classList.remove('personlaize__save_saved');
      }, 2500);
    });

    $('.personlaize__cancel').addEventListener('click', (e) => {
      e.preventDefault();
      fillList();
      Modal.close('.personlaize');
    });

    $('.personlaize').addEventListener('click', (e) => {
      if ($('.drop.active') && !e.target.closest('.drop')) {
        $('.drop.active').classList.remove('active');
      }
    });

    fillList();

    function fillList() {
      $('.personlaize__list').innerHTML = '';
      const result = getQuizResult();
      console.log('result', result);

      for (const step of quiz.slice(1)) {
        const stepItem = document.createElement('div');
        stepItem.classList.add('personlaize__item');
        stepItem.dataset.stepId = step.step;

        stepItem.innerHTML = `
          <div class='personlaize__subtitle'>${step.title}</div>

          ${
            step.caption
              ? `<div class='personlaize__caption'>${step.caption}</div>`
              : ''
          }

          <div class='personlaize__dropdown drop'>
            <div class='drop__values'></div>
            <div class='drop__list drop__list_${step.type} drop__list-${
          step.step
        }'></div>
          </div>
        `;

        for (const variant of step.variants) {
          const el = `
            <div class='drop__item ${
              result[`step${step.step}`]?.includes(String(variant.id))
                ? 'active'
                : ''
            }' data-id='${variant.id}'>
              ${
                variant.image
                  ? `<div class='drop__item-icon'>
                <img src='${config.dir}/img/${variant.image}' alt=''>
              </div>`
                  : ''
              }

              <div class='quiz__item-info'>
                ${
                  variant.title
                    ? `<div class='drop__item-title'>${variant.title}</div>`
                    : ''
                }
                ${
                  variant.caption
                    ? `<div class='drop__item-caption'>${variant.caption}</div>`
                    : ''
                }
              </div>
            </div>
          `;

          stepItem
            .querySelector('.drop__list')
            .insertAdjacentHTML('beforeend', el);
        }

        $('.personlaize__list').insertAdjacentElement('beforeend', stepItem);

        $$('.drop__item', stepItem).forEach((el) => {
          el.addEventListener('click', (e) => {
            e.preventDefault();

            if (step.type === 'radio') {
              if (el.classList.contains('active')) {
                el.classList.remove('active');
              } else {
                $('.drop__item.active', stepItem)?.classList.remove('active');
                el.classList.add('active');
              }
            } else {
              if (el.closest('.drop__list-2')) {
                if (el.dataset.id === '7') {
                  $$(
                    ".drop__list-2 .drop__item.active:not([data-id='7'])"
                  ).forEach((el) => el.classList.remove('active'));
                } else {
                  $(
                    ".drop__list-2 .drop__item.active[data-id='7']"
                  )?.classList.remove('active');
                }
              }

              el.classList.toggle('active');
            }

            fillValues();
          });
        });

        $('.drop__values', stepItem).addEventListener('click', function (e) {
          e.preventDefault();
          if (
            $('.drop.active') &&
            this.closest('.drop') !== $('.drop.active')
          ) {
            $('.drop.active').classList.remove('active');
          }

          this.closest('.drop').classList.toggle('active');
        });
      }

      fillValues();
    }

    function fillValues() {
      $$('.drop').forEach((dropdown) => {
        $('.drop__values', dropdown).innerHTML = '';

        if (!$('.drop__item.active', dropdown)) {
          const el = `
            <div class='drop__value'>
              No options selected
            </div>
          `;

          $('.drop__values', dropdown).insertAdjacentHTML('beforeend', el);
          return false;
        }

        $$('.drop__item.active', dropdown).forEach((item) => {
          const el = `
            <div class='drop__value'>
              ${$('img', item) ? $('img', item).outerHTML : ''}
              ${$('.drop__item-title', item).innerText}
            </div>
          `;

          $('.drop__values', dropdown).insertAdjacentHTML('beforeend', el);
        });
      });
    }

    // Modal.open('.personlaize');
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

  function addStyles(css, customClass) {
    const stylesEl = document.createElement('style');
    if (customClass) {
      stylesEl.classList.add(customClass);
    } else {
      stylesEl.classList.add('exp-styles');
    }
    stylesEl.innerHTML = css;
    document.head.appendChild(stylesEl);
  }

  async function saveQuizResult(result, isOnlyStorage) {
    console.log('**RESULT**', JSON.stringify(result));
    localStorage.setItem('quizResult', JSON.stringify(result));
    if (isAuth() && !isOnlyStorage) {
      const userId = getUserId();
      const cookieId = getCookie1('_ga')?.replace(/GA\d.\d./, '');

      const data = {
        userId,
        quiz: result,
        _ga: [cookieId],
      };

      const user = await api.findUserByUserId(userId);

      if (user) {
        if (!user['_ga'].includes(cookieId)) {
          data['_ga'] = [...user['_ga'], cookieId];
        }
        await api.updateUser(data);
      } else {
        await api.saveUser(data);
      }
    }
  }

  function isAuth() {
    return !!$('.user-logged-in');
  }

  function getQuizResult(getFlag = false) {
    const result = localStorage.getItem('quizResult');
    const parsedResult = JSON.parse(result);

    if (getFlag) {
      return result &&
        Object.entries(parsedResult).some(([step, answers]) => answers.length)
        ? true
        : false;
    }

    return result ? parsedResult : {};
  }

  function getVideoCard(video, isLazyLoad) {
    if (!$('.video-list-styles')) {
      const css = `
        .video-list {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .video-card {
          position: relative; 
        }
        .video__preview {
          position: relative;
        }
        .video__preview-img {
          transition: 0.35s;
          min-width: 100%;
          min-height: 100%;
          display: block;
          object-fit: cover;
          transition: 0.35s;
        }
        .video-card:hover .video__preview-img {
          filter: brightness(65%);
        }
        .video__preview-info {
          display: flex;
          justify-content: space-between;
          position: absolute;
          bottom: 0;
          width: 100%;
          padding: 1rem 0.5rem 0.15rem;
          background: rgb(2,0,36);
          background: linear-gradient(0deg,#272727 0%,rgba(255,255,255,0) 100%);
          color: white;
          font-size: 0.9em;
          box-sizing: border-box;
          line-height: 1.7;
          gap: 20px;
        }
        .video__preview-lvl {
          display: flex;
          align-items: center;
          gap: 0.3em;
        }
        .video__preview-time {
          margin-left: auto;
        }
        .video__info {
          position: static;
          margin-top: 15px;
        }
        .video__title {
          position: static;
          line-height: 1.1;
          color: #272727;
          font-size: 18px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 7px;
        }
        .video__title:before {
          content: "";
          display: block;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 1;
        }
        .video__title iconify-icon {
          font-size: 16px;
        }
        .video__sub {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1em;
          margin-top: 5px;
          line-height: 1.7;
        }
        .video__sub-author {
          font-size: 15px;
        }
        .video__sub-stars {
          line-height: 0;
          font-size: 14px;
          display: flex;
          gap: 2px;
          color: #FAA900;
        }
      `;

      addStyles(css, 'video-list-styles');
    }

    const time = formatTime(video['field_media_duration']);
    const lvlCaption = video.field_difficulty;
    const lvl = !lvlCaption
      ? false
      : lvlCaption.includes('Beginner')
      ? 1
      : lvlCaption.includes('Intermediate')
      ? 2
      : 3;

    const el = `
      <div class='video-card'>
        <div class='video__preview'>
          <img class='video__preview-img' ${
            isLazyLoad ? 'data-' : ''
          }src='${video.thumbnail__target_id.replace(
      'https://www.doyogawithme.com',
      ''
    )}' />
          <div class='video__preview-info'>
            ${
              lvl
                ? `
              <div class='video__preview-lvl'>
                <iconify-icon icon="mdi:signal-cellular-${lvl}"></iconify-icon>
                ${lvlCaption}
              </div>
            `
                : ''
            }
            
            <div class='video__preview-time'>${time}</div>
          </div>
        </div>

        <div class='video__info'>
          <a href='${video.view_node}' class='video__title'>
            <iconify-icon icon="${
              video.field_subscribers_only
                ? 'heroicons:lock-closed'
                : 'line-md:account-add'
            }"></iconify-icon>
            ${video.title}
          </a>

          <div class='video__sub'>
            <div class='video__sub-author'>${video.field_instructor}</div>

            <div class='video__sub-stars'>
              ${getStars(video.rating)}
            </div>
          </div>
        </div>
      </div>
    `;

    return el;

    function formatTime(seconds) {
      // Ensure seconds is a non-negative number
      seconds = Math.max(0, seconds);

      // Calculate hours, minutes, and remaining seconds
      var hours = Math.floor(seconds / 3600);
      var minutes = Math.floor((seconds % 3600) / 60);
      var remainingSeconds = Math.floor(seconds % 60);

      // Format the time string
      var formattedTime = '';

      if (hours > 0) {
        formattedTime += hours + ':';
      }

      formattedTime +=
        (minutes < 10 ? '0' : '') +
        minutes +
        ':' +
        (remainingSeconds < 10 ? '0' : '') +
        remainingSeconds;

      return formattedTime;
    }

    function getStars(rating) {
      const ratingRounded = Math.ceil(rating * 2) / 2;
      let el = `
        ${'<iconify-icon icon="fa:star"></iconify-icon>'.repeat(ratingRounded)}
        ${
          ratingRounded % 1
            ? '<iconify-icon icon="fa:star-half-empty"></iconify-icon>'
            : ''
        }
        ${'<iconify-icon icon="fa:star-o"></iconify-icon>'.repeat(
          5 - ratingRounded
        )}
      `;

      return el;
    }
  }

  function getRandomUniqueItems(array, count) {
    const shuffledArray = array.slice().sort(() => Math.random() - 0.5);
    return shuffledArray.slice(0, count);
  }

  // Mutation Observer
  function initMutation(observeEl = document.body, cbAdded, cbRemoved) {
    const el = typeof observeEl === 'string' ? $(observeEl) : observeEl;

    if (!el) return;

    let observer = new MutationObserver((mutations) => {
      for (let mutation of mutations) {
        if (typeof cbAdded === 'function') {
          for (let node of mutation.addedNodes) {
            if (!(node instanceof HTMLElement)) continue;
            cbAdded(node);
          }
        }

        if (typeof cbRemoved === 'function') {
          for (let node of mutation.addedNodes) {
            if (!(node instanceof HTMLElement)) continue;
            cbRemoved(node);
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

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        // if (typeof cb !== 'function') return;
        cb(entry, observer);
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
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
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

      console.log('** GA4 Event **', event);

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
})();
