console.debug('*** Experiment started ***');
await waitFor(() => document.head && document.body, false, { ms: 50 });

document.head.insertAdjacentHTML(
  'beforeend',
  `
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Kaisei+Tokumin:wght@400;500;700&display=swap" rel="stylesheet">
`
);

// Config for Experiment
const config = {
  dir: 'https://flopsi69.github.io/crs/zenithprepacademy/landing',
  clarity: ['set', '', 'variant_1'],
  debug: true,
};

// Modal class
class Modal {
  static list = [];
  constructor(name, innerHTML) {
    if (!_$('.lav-modal')) {
      this.constructor.init();
    }
    this.el = document.createElement('div');
    this.el.classList.add('lav-modal__inner', name);
    this.name = name;
    this.el.innerHTML = innerHTML;

    _$('.lav-modal').insertAdjacentElement('beforeend', this.el);

    this.constructor.list.push(this);
  }

  static init() {
    document.body.insertAdjacentHTML(
      'beforeend',
      `<div class='lav-modal'>
        <div class='lav-modal__close'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M1 1L19 19" stroke="white"/>
            <path d="M19 1L1 19" stroke="white"/>
          </svg>
        </div>
      </div>`
    );

    document.addEventListener('click', (e) => {
      if (
        e.target.classList.contains('lav-modal') ||
        e.target.closest('.lav-modal__close')
      ) {
        if (_$('.lav-modal__inner.active iframe')) {
          // _$('.lav-modal__inner.active iframe').src = _$(
          //   '.lav-modal__inner.active iframe'
          // ).src;
        }

        this.close();
      }

      if (e.target.closest('[data-modal]')) {
        const id = e.target.closest('[data-modal]')?.dataset?.id;
        if (id) {
          console.log(id);
          _$('.lav-solo').innerHTML = `
            <div class="influex-wistia-player">
              <div class="wistia_embed wistia_async_${id} popover=false">&nbsp;</div>
            </div>
          `;
        }

        this.open(e.target.closest('[data-modal]').dataset.modal);

        _wq.push({
          id,
          onReady: function (video) {
            // container.addClass('playing');
            video.play();
          },
        });
      }
    });

    this.addStyles();
  }

  static open(modalName, cb) {
    document.body.classList.add('lav-modal-open');

    if (_$('.lav-modal__inner.active')) {
      _$('.lav-modal__inner.active').classList.remove('active');
    }

    _$(modalName).classList.add('active');

    if (typeof cb === 'function') cb();

    setTimeout(() => {
      _$('.lav-modal').classList.add('active');
    }, 100);
  }

  static close(cb) {
    document.body.classList.remove('lav-modal-open');

    _$('.lav-modal')?.classList.remove('active');

    if (typeof cb === 'function') cb();

    setTimeout(() => {
      _$('.lav-modal__inner.active')?.classList.remove('active');
      document.body.classList.remove('lav-form-open');
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
        line-height: 0;
        // width: 100%;
        display: none;
        margin: auto;
      }
      .lav-modal__inner iframe {
        max-width: 100%;
        border: 0;
      }
      .lav-modal__inner.active {
        display: block;
      }
      .lav-modal__close {
        position: absolute;
        right: 35px;
        top: 35px;
        cursor: pointer;
        transition: 0.35s;
        line-height: 0;
      }
      [data-modal] {
        cursor: pointer;
        transition: 0.35s;
      }
      @media(hover:hover) {
        .lav-modal__close:hover {
          opacity: 0.5;
        }
        [data-modal]:hover {
          opacity: 0.7;
        }
      }
      .lav-modal-open {
        overflow: hidden;
      }
      .lav-solo .wistia_embed {
        width: 920px;
        height: 520px;
        
      }
      @media(max-width: 992px) {
        .lav-solo .wistia_embed {
          width: 90vw;
          height: 50vw;
        }
        .lav-modal__inner iframe {
          max-height: 55vw;
        }
      }

      .lav-multi {
        max-width: 1000px;
      }
      .lav-multi img {
        max-width: 100%;
      }
      .lav-multi .splide__slide {
        background: red;
        border: 1px solid blue;
      }
      
      .lav-form {
        background: #fff;
        max-width: 600px;
        width: 100%;
        text-align: center;
        padding: 56px 100px 62px;
        line-height: 1;
      }
      .lav-form__title {
        color: var(--Dark-blue-1, #21293E);
        font-family: 'Kaisei Tokumin', serif;
        font-size: 32px;
        font-weight: 500;
        line-height: 40px;
      }
      .lav-form__descr {
        margin-top: 16px;
        color: var(--Blue-200, #434C60);
        font-family: 'Kaisei Tokumin', serif;
        font-size: 20px;
        font-weight: 500;
        line-height: 28px;
        margin-bottom: 32px;
      }

      .lav-form__btn {
        margin-top: 24px;
        height: 64px;
        padding-top: 8px;
        padding-bottom: 8px;
      }
      .lav-form__note {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        margin-top: 24px;
        color: var(--Blue-100, #515E7A);
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        text-align: left;
      }
      .lav-form__note img {
        margin-right: 8px;
        margin-top: 2px;
      }
      .lav-form__group {
        text-align: left;
      }
      .lav-form__group + .lav-form__group {
        margin-top: 20px;
      }
      .lav-form__label {
        color: var(--Blue-200, #434C60);
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
      }
      .lav-form__input {
        padding: 12px 16px;
        margin-top: 8px;
        border-radius: 2px;
        border: 1px solid var(--Light-blue-2, #DFE3EE);
        width: 100%;
        height: 48px;
      }
      .lav-form .lav-modal__close {
        display: none;
      }
      @media(max-width: 768px) {
        .lav-form__title {
          font-size: 28px;
          line-height: 36px;
        }
        .lav-form__descr {
          margin-top: 12px;
          font-size: 16px;
          line-height: 24px;
          margin-bottom: 24px;
        }
        .lav-form {
          padding: 34px 24px;
          border-radius: 4px 4px 0px 0px;
          max-width: 100%;
          margin-bottom: 0;
        }
        .lav-form__btn {
          height: 56px;
          max-width: 100%;
        }
        .lav-form-open .lav-modal {
          padding: 0;
          padding-top: 20px;
          align-items: flex-end;
        }
        .lav-form-open .lav-modal>.lav-modal__close {
          display: none;
        }
        .lav-form .lav-modal__close {
          display: block;
          top: 15px;
          right: 15px;
        }
      }
    `;

    const stylesEl = document.createElement('style');
    stylesEl.classList.add('exp-modal');
    stylesEl.innerHTML = styles;
    document.head.appendChild(stylesEl);
  }
}

// Styles for Experiment
const styles = `
  .containerWrapper {
    display: none;
  }
  .exp-layout {
    font-family: 'Inter', sans-serif;
  }
  .exp-layout img {
    max-width: 100%;
  }
  .splide-nav {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .splide__arrow {
    cursor: pointer;
    transition: 0.3s;
  }
  @media(hover: hover) {
    .splide__arrow:hover {
      transform: scale(1.2);
      opacity: 0.8;
    }
  }
  .splide-nav__num {
    width: 80px;
    text-align: center;
    margin: 0 80px;
    font-family: 'Kaisei Tokumin', serif;
    font-size: 24px;
    line-height: 32px; 
  }
  @media(max-width: 768px) {
    .splide-nav__num {
      font-size: 20px;
      line-height: 28px;
      margin: 0 48px;
    }
  }

  .splide__pagination {
    padding: 0;
    margin-top: 65px!important;
  }
  .splide__pagination li {
    line-height: 0;
    flex: 1;
  }
  .splide__pagination__page {
    border: 0;
    background: #DFE3EE;
    display: flex;
    width: 100%;
    border-radius: 0;
    height: 1px;
    transition: 0.3s;
  }
  .splide__pagination__page.is-active {
    background: #FFC93E;
    height: 3px;
  }


  .btn-cta {
    border-radius: 2px;
    background: linear-gradient(135deg, #FFDA81 24.24%, #FFB574 73.2%);
    padding: 24px 60px;
    color: #21223F;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 1;
    letter-spacing: 2px;
    text-transform: uppercase;
    transition: 0.3s;
    border: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    max-width: 400px;
    width: 100%;
    height: 72px;
  }
  @media(hover:hover) {
    .btn-cta:hover {
      transform: scale(1.04);
      opacity: 0.9;
    }
  }

  .btn-cta_black {
    background: linear-gradient(123deg, #031640 23.3%, #12162F 42.4%, #171935 61.8%, #020B22 82.43%);
    color: #fff;
  }

  .btn-cta img {
    margin-left: 16px;
  }

  .jumb {
    background: #070d23 url('${config.dir}/img/jumb-bg.jpeg') top center / 100% auto no-repeat;
    color: #fff;
    text-align: center;
    padding: 80px 0 100px;
  }
  .lav-container {
    max-width: 1312px;
    padding: 0 16px;
    margin: auto;
  }
  .jumb__logo {
    line-height: 0;
  }
  .jumb__title {
    max-width: 1010px;
    margin: 60px auto 0;
    font-family: 'Kaisei Tokumin', serif;
    font-size: 56px;
    line-height: 64px;
  }
  .jumb__caption {
    margin-top: 32px;
    color: #F9FAFB;
    font-size: 20px;
    line-height: 1.5;
  }
  .jumb__btn {
    margin-top: 32px;
  }
  .jumb__arrow {
    line-height: 0;
    margin: 30px 0;
  }
  .jumb__watched {
    color: #F9FAFB;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  .jumb__watched span {
    font-size: 18px;
    font-weight: 600;
  }
  .jumb-about {
    display: inline-flex;
    align-items: center;
    margin-top: 40px;
    border: 1px dashed #FFD88A;
    background: linear-gradient(140deg, rgba(3, 22, 64, 0.20) 16.4%, rgba(18, 22, 47, 0.20) 38.68%, rgba(23, 25, 53, 0.20) 61.31%, rgba(2, 11, 34, 0.20) 85.38%);
    padding: 16px 44px 16px 16px;
  }
  .jumb-about__preview {
    line-height: 0;
    margin-right: 36px;
    flex-shrink: 0;
  }
  .jumb-about__preview img {
    width: 280px;
  }
  .jumb-about__info {
    text-align: left;
  }
  .jumb-about__caption {
    color: #FFF;
    font-size: 18px;
    line-height: 26px; 
  }
  .jumb-about__title {
    margin-top: 16px;
    font-family: 'Kaisei Tokumin', serif;
    border-bottom: 1px solid #FFD88A;
    font-size: 32px;
    line-height: 40px;
    text-decoration-line: underline;
    background: linear-gradient(114deg, #FFD88A 26.97%, #FFBA7E 74.53%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .jumb-featured {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 80px;
  }
  .jumb-featured__title {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-right: 80px;
    white-space: nowrap;
  }
  .jumb-featured__logos {
    display: flex;
    align-items: center;
    gap: 72px;
    opacity: 0.7;
  }
  .jumb-owner {
    margin: 60px auto 0;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1024px;
    width: 100%;
  }
  .jumb-owner__image {
    line-height: 0;
    margin-right: 64px;
    flex-shrink: 0;
  }
  .jumb-owner__image img {
    width: 400px;
  }
  .jumb-owner__info {
    text-align: left;
  }
  .jumb-owner__title {
    font-family: 'Kaisei Tokumin', serif;
    font-size: 48px;
    line-height: 56px; 
  }
  .jumb-owner__caption {
    margin-top: 8px;
    color: #F9FAFB;
    font-size: 16px;
    font-style: italic;
    line-height: 1.5;
  }
  .jumb-owner__description {
    position: relative;
    margin-top: 32px;
    padding-left: 32px;
    color: #FFF;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: -0.32px;
  }
  .jumb-owner__description p {
    margin: 0;
  }
  .jumb-owner__description p + p {
    margin-top: 20px;
  }
  .jumb-owner__description::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 1px;
    height: 100%;
    background: linear-gradient(134deg, #87F5FC 20.05%, #35C6BB 82.92%, #72F7FF 106.27%);
  }
  .jumb-owner__description span {
    font-weight: 600;
  }
  @media(max-width: 1280px) {
    .jumb-featured__title {
      margin-right: 40px;
    }
    .jumb-featured__logos {
      gap: 20px;
    }
  }
  @media(max-width: 992px) {
    .jumb {
      padding-top: 40px;
      padding-bottom: 85px;
    }
    .jumb__title {
      margin-top: 32px;
      font-size: 24px;
      line-height: 32px;
    }
    .jumb__caption {
      font-size: 16px;
      line-height: 24px;
      margin-top: 16px;
    }
    .jumb__btn {
      margin-top: 24px;
    }
    .btn-cta {
      max-width: 300px;
      height: 56px;
      padding: 16px;
      font-size: 14px;
    }
    .btn-cta img {
      margin-left: 12px;
    }
    .jumb__arrow {
      display: none;
    }
    .jumb__watched {
      margin-top: 24px;
      font-size: 13px;
      line-height: 18px
    }
    .jumb-about {
      margin-top: 32px;
      padding: 32px 16px 24px;
    }
    .jumb-about__caption {
      font-size: 16px;
      line-height: 24px;
    }
    .jumb-featured {
      display: block;
      margin-top: 40px;
    }
    .jumb-featured__title {
      margin-right: 0;
      margin-bottom: 24px;
    }
    .jumb-featured__logos {
      justify-content: center;
      flex-wrap: wrap;
      gap: 16px 48px;
    }
    .jumb-owner {
      margin-top: 40px;
    }
    .jumb-owner__image {
      flex-shrink: 1;
      min-width: 300px;
      margin-right: 30px;
    }
    .jumb-about__title {
      font-size: 24px;
      line-height: 32px;
      margin-top: 0;
      text-align: center;
      display: inline;
    }
    .jumb-about__info {
      text-align: center;
    }
    .jumb-about {
      flex-flow: column-reverse;
      align-items: center;
      max-width: 312px;
      width: 100%;
    }
    .jumb-about__preview {
      margin-top: 32px;
      margin-right: 0;
    }
    .jumb-about__caption {
      text-align: center;
    }
  }
  @media(max-width: 768px) {
    .jumb-owner {
      display: block;
    }
    .jumb-about__preview {
      margin-top: 25px;
    }
    .jumb-owner__image {
      margin-right: 0;
      min-width: auto;
    }
    .jumb-owner__info {
      margin-top: 24px;
      text-align: center;
    }
    .jumb-owner__description {
      padding-left: 0;
      letter-spacing: -0.28px;
      font-size: 14px;
      line-height: 24px;
      margin-top: 20px;
    }
    .jumb__caption br {
      display: none;
    }
    .jumb-owner__description:before {
      display: none;
    }
    .jumb-owner__title {
      font-size: 28px;
      line-height: 36px;
    }
    .jumb-owner__image img {
      width: 240px;
    }
    .jumb-featured__title {
      font-size: 14px;
      line-height: 20px;
    }
    .jumb__logo img {
      max-width: 150px;
    }
    .jumb {
      background: #070d23 url('${config.dir}/img/jumb-bg-mob.jpeg') top center / 100% auto no-repeat;

      // background-size: 175% auto;
    }
  }

  .learn {
    padding: 120px 0;
  }
  .learn__title {
    color: #21293E;
    text-align: center;
    font-family: 'Kaisei Tokumin', serif;
    font-size: 48px;
    font-weight: 400;
    line-height: 56px;
  }
  .learn__title span {
    font-weight: 500;
    text-decoration: underline 1px solid #5CDDDB;
    text-underline-offset: 10%;
  }
  .learn__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 72px;
    margin-top: 50px;
  }
  .learn__image {
    line-height: 0;
    text-align: center;
  }
  .learn__caption {
    margin-top: 20px;
    color: #434C60;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
  }
  .learn__caption span {
    font-weight: 600;
  }
  .learn__divider {
    position: relative;
    margin: 48px 0;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .learn__divider:before {
    content: '';
    position: absolute;
    top: 28px;
    left: 0;
    right: 0;
    height: 1px;
    width: 100%;
    background: #DFE3EE;
  }
  .learn__divider img {
    position: relative;
  }
  .learn__divider img + img {
    right: 15px;
  }
  .learn__cta {
    margin-top: 48px;
    text-align: center;
  }
  @media(max-width: 992px) {
    .learn__list {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px 15px;
    }
    .learn__title {
      font-size: 28px;
      line-height: 36px;
    }
    .learn {
      padding: 40px 0;
    }
  }
  @media(max-width: 768px) {
    .learn__list {
      margin-top: 24px;
    }
    .learn__title br {
      display: none;
    }
    .learn__caption {
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.28px;
    }
    .learn__divider {
      margin: 24px 0;
    }
    .learn__divider img:first-child {
      width: 48px;
    }
    .learn__divider img:last-child {
      width: 80px;
    }
    .learn__divider:before {
      top: 24px;
    }
    .learn__cta {
      margin-top: 32px;
    }
    .learn__btn {
      max-width: 100%;
    }
  }


  .examples {
    padding: 90px 0;
    background: linear-gradient(140deg, #02102F 16.4%, #12162F 28.44%, #12162F 36.41%, #11132B 53.66%, #020B22 73.88%, #11132B 85.38%);
    color: #fff;
  }
  .examples__title {
    color: #FFF;
    text-align: center;
    font-family: 'Kaisei Tokumin', serif;
    font-size: 40px;
    line-height: 48px;
  }
  .examples__title span {
    font-weight: 500;
    background: linear-gradient(128deg, #FFDA81 61.24%, #FFB574 98.6%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .examples__table {
    margin: 72px auto 0;
    max-width: 1260px;
  }
  .examples__item + .examples__item {
    border-left: 1px solid rgba(255, 255, 255, 0.20);
  }
  .examples__row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    background: #21293E;
    border: 1px solid rgba(255, 255, 255, 0.20);
  }
  .examples__row + .examples__row {
    border-top: none;
  }
  .examples__row + .examples__row .examples__item-head {
    display: none;
  }
  .examples__item-head {
    padding: 12px;
    text-align: center;
    color: #FFF;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 2px;
    text-transform: uppercase;
    border-bottom: 1px solid rgba(255, 255, 255, 0.20);
  }
  .examples__item-body {
    padding: 40px 30px;
  }
  .examples__subtitle {
    font-size: 18px;
    font-weight: 600;
    line-height: 1.35;
  }
  .examples__subtitle + .examples__descr {
    margin-top: 16px;
  }
  .examples__descr:not(.examples__descr_plain) {
    display: flex;
    align-items: flex-start;
    color: #F9FAFB;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }
  .examples__descr + .examples__descr {
    margin-top: 8px;
  }
  .examples__descr img {
    flex-shrink: 0;
    margin-right: 16px;
  }
  .examples__descr span {
    font-weight: 600;
  }
  @media(max-width: 1280px) {
    .examples__item-head {
      font-size: 12px;
    }
  }
  @media(max-width: 992px) {
    .examples {
      padding: 40px 0;
    }
    .examples__title {
      font-size: 24px;
      line-height: 32px; 
    }
    .examples__title br {
      display: none;
    }
    .examples__table {
      margin-top: 32px;
    }
    .examples__row {
      display: block;
    }
    .examples__row + .examples__row {
      margin-top: 24px;
    }
    .examples__item-head {
      font-size: 13px;
      line-height: 18px;
    }
    .examples__row + .examples__row .examples__item-head {
      display: block;
    }
    .examples__item + .examples__item {
      border-left: none;
    }
    .examples__item-head {
      border-top: 1px solid rgba(255, 255, 255, 0.20);
    }
    .examples__row {
      border-top: 0;
    }
  }
  @media(max-width: 768px) {
    .examples__item-head {
      padding: 9px 10px;
    }
    .examples__item-body {
      padding: 16px;
    }
    .examples__descr img {
      margin-right: 12px;
    }
    .examples__subtitle + .examples__descr {
      margin-top: 10px;
    }
    .examples__row:first-child .examples__descr:not(.examples__descr_plain) {
      display: block;
    }
    .examples__row:first-child .examples__descr img {
      display: block;
      margin-right: 0;
      margin-bottom: 8px;
    }
  }


  .parents {
    padding: 120px 0;
  }
  .parents__plate {
    position: relative;
    background: linear-gradient(114deg, #FFD88A 26.97%, #FFBA7E 74.53%);
    padding: 112px 80px 72px 96px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    max-width: 1150px;
    margin: auto;
  }
  .parents__plate:before {
    content: '';
    position: absolute;
    left: 20px;
    top: 20px;
    right: 20px;
    bottom: 20px;
    border: 1px dashed #031640;
    pointer-events: none;
  }
  .parents__info {
    max-width: 560px;
    padding-bottom: 40px;
  }
  .parents__image {
    line-height: 0;
    margin-left: 64px;
  }
  .parents__title {
    background: linear-gradient(140deg, #02102F 16.4%, #12162F 28.44%, #12162F 36.41%, #11132B 53.66%, #020B22 73.88%, #11132B 85.38%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: 'Kaisei Tokumin', serif;
    font-size: 40px;
    line-height: 48px;
  }
  .parents__title span {
    font-weight: 700;
  }
  .parents__caption {
    margin-top: 24px;
    color: #515E7A;
    font-size: 16px;
    line-height: 24px;
  }
  .parents__btn {
    max-width: 350px;
    margin-top: 40px;
  }
  .parents__age {
    margin-top: 24px;
    color: #122340;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  .parents__age span {
    font-weight: 600;
  }
  @media(max-width: 1280px) {
    .parents__info {
      max-width: 50%;
    }
    .parents__plate {
      padding: 50px;
    }
  }
  @media(max-width: 992px) {
    .parents__plate {
      flex-flow: column-reverse;
      text-align: center;
      align-items: center;
    }
    .parents__info {
      max-width: 100%;
      margin-top: 24px;
    }
    .parents__image {
      margin-left: 0;
    }
    .parents {
      padding: 40px 0;
    }
    .parents__info {
      padding-bottom: 0;
    }
  }
  @media(max-width: 768px) {
    .parents__plate:before {
      left: 8px;
      right: 8px;
      top: 8px;
      bottom: 8px;
    }
    .parents__title {
      font-size: 22px;
      line-height: 30px;
    }
    .parents__plate {
      padding: 32px 30px 40px;
    }
    .parents__image {
      max-width: 200px;
    }
    .parents__caption {
      margin-top: 12px;
      font-size: 14px;
      line-height: 20px;
    }
    .parents__caption br {
      display: none;
    }
    .parents__btn {
      margin-top: 20px;
    }
    .parents__age {
      margin-top: 16px;
      font-size: 14px;
      line-height: 20px;
    }
  }

  
  .who {
    padding: 90px 0;
    background: #0A132A url('${config.dir}/img/who-bg.jpeg') top center / cover no-repeat;
    text-align: center;
  }
  .who__logo {
    line-height: 0;
  }
  .who__title {
    margin-top: 40px;
    color: #21293E;
    font-family: 'Kaisei Tokumin', serif;
    font-size: 48px;
    font-weight: 400;
    line-height: 56px;
    letter-spacing: 1px;
  }
  .who__caption {
    margin-top: 24px;
    color: #515E7A;
    font-size: 14px;
    line-height: 20px;
  }
  .who__list {
    margin-top: 72px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }
  .who__item {
    border-radius: 4px;
    background: linear-gradient(140deg, #02102F 16.4%, #12162F 28.44%, #12162F 36.41%, #11132B 53.66%, #020B22 73.88%, #11132B 85.38%);
    color: #fff;
    padding: 32px 40px 48px;
  }
  .who__item-title {
    font-family: 'Kaisei Tokumin', serif;
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;
    margin-bottom: 24px;
    padding-bottom: 24px;
    border-bottom: 1px solid rgba(223, 227, 238, 0.20);
  }
  .who__item-descr {
    font-size: 16px;
    line-height: 24px;
  }
  .who__item-descr span {
    font-weight: 600
  }
  .who__btn {
    margin-top: 48px;
  }
  @media(max-width: 1280px) {}
  @media(max-width: 992px) {
    .who {
      padding: 40px 0;
    }
    .who__title {
      font-size: 24px;
      line-height: 32px;
      margin-top: 16px;
    }
    .who__list {
      margin-top: 32px;
    }
    .who__list {
      grid-template-columns: 1fr;
      gap: 16px;
    }
  }
  @media(max-width: 768px) {
    .who {
      background: #0A132A url('${config.dir}/img/who-bg-mob.jpeg') top center / cover no-repeat;
    }
    .who__logo img {
      max-width: 165px;
    }
    .who__caption {
      margin-top: 12px;
    }
    .who__item {
      padding: 24px;
    }
    .who__item-title {
      font-size: 18px;
      line-height: 26px;
      margin-bottom: 16px;
      padding-bottom: 16px;
    }
    .who__item-title br {
      display: none;
    }
    .who__item-descr {
      font-size: 14px;
      line-height: 20px;
    }
    .who__btn {
      display: none;
    }
  }


  .trusted {
    margin: 120px 0;
  }
  .trusted__inner {
    position: relative;
    background: linear-gradient(140deg, #031640 16.4%, #12162F 38.68%, #171935 61.31%, #020B22 85.38%);
    padding: 90px 20px;
    color: #fff;
  }
  .trusted__inner:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    background: url('${config.dir}/img/trusted-quote.svg') -32px center / auto no-repeat;
  }
  .trusted__title {
    color: #FFF;
    text-align: center;
    font-family: 'Kaisei Tokumin', serif;
    font-size: 48px;
    line-height: 56px;
  }
  .trusted__logos {
    display: flex;
    align-items: center;
    gap: 64px;
    justify-content: center;
    margin-top: 72px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.20);
    padding-bottom: 48px;
  }
  .trusted__logo {
    position: relative;
    line-height: 0;
  }
  .trusted__logo.active:before {
    content: '';
    position: absolute;
    bottom: -55px;
    left: -15px;
    right: -15px;
    background: linear-gradient(117deg, #FFDE8D 2.56%, #FFB97C 66.49%);
    height: 1px;
  }
  .trusted__logo:not(.active) {
    opacity: 0.6;
  }
  .trusted__quote {
    margin: 48px auto 0;
    max-width: 660px;
  }
  .trusted__descr {
    font-family: 'Kaisei Tokumin', serif;
    font-size: 18px;
    line-height: 32px;
  }
  .trusted__author {
    margin-top: 24px;
    font-family: 'Kaisei Tokumin', serif;
    font-size: 24px;
    line-height: 32px;
  }
  @media(max-width: 1280px) {}
  @media(max-width: 992px) {
    .trusted {
      margin: 40px 0;
    }
    .trusted__inner {
      padding: 40px 20px;
      overflow: hidden;
    }
    .trusted__title {
      font-size: 24px;
      line-height: 32px;
    }
    .trusted__title br {
      display: none;
    }
    .trusted__logos {
      margin-top: 32px;
      gap: 30px;
      padding-bottom: 24px;
    }
    .trusted__inner:before {
      display: none;
    }
    .trusted__descr {
      font-size: 16px;
      line-height: 28px;
    }
    .trusted__quote {
      margin-top: 24px;
    }
    .trusted__logo.active:before {
      bottom: -31px;
    }
  }
  @media(max-width: 768px) {
    .trusted__author {
      margin-top: 20px;
      font-size: 20px;
      line-height: 28px;
    }
    .trusted__quote {
      text-align: center;
    }
  }


  .reviews {
    overflow: hidden;
    margin: 120px 0;
  }
  .reviews__title {
    color: #21293E;
    font-family: 'Kaisei Tokumin', serif;
    font-size: 40px;
    line-height: 48px; 
    max-width: 80%;
  }
  .reviews__title span {
    text-decoration: underline 1px solid #5CDDDB;
    text-underline-offset: 10%;
  }
  .reviews__slider {
    margin-top: 50px;
  }
  .reviews__cta {
    margin-top: 50px;
    text-align: center;
  }
  .reviews__nav-num {
    margin: 0 24px;
  }
  .reviews .splide__track {
    overflow: visible;
  }

  .review {
    max-width: 410px;
    width: 100%;
  }
  .review__preview {
    position: relative;
    line-height: 0;
    cursor: pointer;
    transition: 0.3s;
  }
  .review__preview img {
    height: 230px;
    object-fit: cover;
    object-position: center;
    transition: 0.3s;
  }
  .review__preview:before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 66px;
    height: 66px;
    transform: translate(-50%, -50%);
    background: url('${config.dir}/img/play.svg') center no-repeat;
    transition: 0.3s;
  }
  @media(hover:hover) {
    .review__preview:hover:before {
      transform: translate(-50%, -50%) scale(1.1);
    }
  }
  .review__preview img {
    max-width: 100%;
  }
  .review__body {
    padding: 40px 32px;
    border: 1px solid #DFE3EE;
    background: #FFF;
    border-radius: 0 0 4px 4px;
  }
  .review__name {
    color: #21293E;
    font-family: 'Kaisei Tokumin', serif;
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
  }
  .review__descr {
    margin-top: 20px;
    color: #515E7A;
    font-size: 14px;
    line-height: 24px;
  }
  .review__descr div + div {
    margin-top: 20px;
  }
  .review__details {
    color: #21293E;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    margin-top: 20px;
  }
  .review__details span {
    text-decoration-line: underline;
    cursor: pointer;
    transition: 0.35s;
  }
  @media(hover:hover) {
    .review__details span:hover {
      opacity: 0.7;
    }
  }
  .reviews__nav {
    position: absolute;
    top: -55px;
    right: 0;
    transform: translateY(-100%);
  }
  @media(max-width: 1280px) {}
  @media(max-width: 992px) {
    .reviews {
      margin: 40px 0;
    }
    .reviews__title {
      max-width: 100%;
    }
    .reviews__title {
      text-align: center;
      font-size: 24px;
      line-height: 32px;
    }
    .reviews__slider {
      margin-top: 32px;
    }
    .reviews__nav {
      position: static;
      transform: none;
      margin-top: 24px;
    }
    .reviews__cta {
      margin-top: 30px;
    }
  }
  @media(max-width: 768px) {
    .review__body {
      padding: 24px 20px;
    }
    .review__descr {
      line-height: 20px;
      margin-top: 16px;
    }
    .review__details {
      margin-top: 16px;
    }
    .review__name {
      font-size: 20px;
      line-height: 28px;
    }
  }


  .webinars {
    color: #fff;
    background: linear-gradient(140deg, #031640 16.4%, #12162F 38.68%, #171935 61.31%, #020B22 85.38%);
    padding: 90px 0;
  }
  .webinars__title {
    text-align: center;
    font-family: 'Kaisei Tokumin', serif;
    font-size: 48px;
    line-height: 56px;
  }
  .webinars__slider {
    margin-top: 72px;
  }
  .webinars__nav {
    margin-top: 56px;
  }
  .webinars .splide__slide.is-active {
    position: relative; 
    z-index: 1;
  }
  .webinars .splide__slide img {
    transition: transform 0.3s;
    min-height: 100%;
    object-fit: cover;
    min-width: 100%;
  }
  .webinars .splide__slide.is-active img {
    transform: scale(1.25);
  }
  .webinars .splide__track {
    padding-top: 40px;
    padding-bottom: 40px;
  }
  @media(max-width: 1280px) {}
  @media(max-width: 992px) {
    .webinars {
      padding: 40px 0;
    }
    .webinars__title {
      font-size: 28px;
      line-height: 36px;
    }
    .webinars__nav {
      margin-top: 24px;
    }
    .webinars__slider {
      margin-top: 32px;
    }
  }
  @media(max-width: 768px) {
    .webinars__slider {
      margin-left: -16px;
      margin-right: -16px;
    }
  }



  .metrics {
    margin: 120px 0;
    text-align: center;
  }
  .metrics__logo {
    line-height: 0;
  }
  .metrics__title {
    margin-top: 40px;
    color: #21293E;
    font-family: 'Kaisei Tokumin', serif;
    font-size: 48px;
    line-height: 56px;
    letter-spacing: 1px;
  }
  .metrics__list {
    margin-top: 72px;
    display: flex;
    justify-content: center;
    gap: 48px;
  }
  .metrics__item {
    max-width: 216px;
    width: 100%;
  }
  .metrics__item-value {
    font-family: 'Kaisei Tokumin', serif;
    font-size: 56px;
    color: #031640;
    line-height: 64px;
  }
  .metrics__item:nth-child(4) .metrics__item-value  {
    font-size: 40px;
  }
  .metrics__item-caption {
    color: #515E7A;
    font-size: 16px;
    line-height: 24px;
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid #DFE3EE;
  }
  .metrics__btn {
    margin-top: 48px;
  }
  @media(max-width: 1280px) {}
  @media(max-width: 992px) {
    .metrics {
      margin: 40px 0 60px;
    }
    .metrics__logo img {
      max-width: 165px;
    }
    .metrics__title {
      margin-top: 16px;
      font-size: 24px;
      line-height: 32px;
    }
    .metrics__list {
      margin-top: 32px;
      display: grid;
      gap: 20px 15px;
      grid-template-columns: 1fr 1fr;
    }
    .metrics__item {
      max-width: 100%;
    }
    .metrics__btn {
      margin-top: 32px;
    }
  }
  @media(max-width: 768px) {
    .metrics__btn {
      max-width: 100%;
    }
    .metrics__item-value {
      font-size: 32px;
      line-height: 40px; 
    }
    .metrics__item-caption {
      margin-top: 12px;
      padding-top: 12px;
      font-size: 14px;
      line-height: 20px;
      text-align: left;
    }
    .metrics__item:nth-child(4) .metrics__item-value {
      font-size: 22px;
    }
  }


  
  .award {
    color: #fff;
    text-align: center;
    padding: 90px 0 100px;
    background: linear-gradient(140deg, #02102F 16.4%, #12162F 28.44%, #12162F 36.41%, #11132B 53.66%, #020B22 73.88%, #11132B 85.38%);
  }
  .award img {
    max-width: 100%;
  }
  .award__main {
    line-height: 0;
    margin-top: 72px;
  }
  .award__title {
    font-family: 'Kaisei Tokumin', serif;
    font-size: 48px;
    line-height: 56px;
  }
  .award__caption {
    margin-top: 24px;
    text-align: center;
    font-size: 18px;
    line-height: 32px;
  }
  .award__divider {
    background: linear-gradient(135deg, #FFDA81 24.24%, #FFB574 73.2%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-top: 80px;
  }
  .award__arrow {
    line-height: 0;
    margin-top: 24px;
  }
  .award__device {
    line-height: 0;
    margin-top: 40px;
  }
  .award__device img {
    max-height: 485px;
  }
  .award-mob {
    display: none;
  }
  @media(max-width: 1280px) {}
  @media(max-width: 992px) {
    
  }
  @media(max-width: 768px) {
    .award-desk {
      display: none;
    }
    .award-mob {
      display: block;
    }
    .award {
      padding: 40px 0 0;
    }
    .award__title {
      font-size: 28px;
      line-height: 36px;
    }
    .award__main {
      margin-top: 32px;
    }
    .award__divider {
      margin-top: 32px;
    }
    .award__arrow {
      margin-top: 16px;
    }
    .award__arrow img {
      max-width: 80px;
    }
    .award__device {
      margin-top: 26px;
    }
    .award__caption {
      margin-top: 16px;
      font-size: 16px;
      line-height: 24px;
    }
  }



  .biggest {
    padding: 120px 0;
  }
  .biggest__plate {
    position: relative;
    background: linear-gradient(114deg, #FFD88A 26.97%, #FFBA7E 74.53%);
    padding: 112px 80px 72px 96px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    max-width: 1150px;
    margin: auto;
  }
  .biggest__plate:before {
    content: '';
    position: absolute;
    left: 20px;
    top: 20px;
    right: 20px;
    bottom: 20px;
    border: 1px dashed #031640;
    pointer-events: none;
  }
  .biggest__info {
    max-width: 560px;
    padding-bottom: 40px;
  }
  .biggest__image {
    line-height: 0;
    margin-left: 64px;
  }
  .biggest__title {
    background: linear-gradient(140deg, #02102F 16.4%, #12162F 28.44%, #12162F 36.41%, #11132B 53.66%, #020B22 73.88%, #11132B 85.38%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: 'Kaisei Tokumin', serif;
    font-size: 40px;
    line-height: 48px;
  }
  .biggest__title span {
    font-weight: 700;
  }
  .biggest__caption {
    margin-top: 24px;
    color: #AE246E;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
  }
  .biggest__caption span {
    text-transform: uppercase;
  }
  .biggest__caption img {
    margin-left: 8px;
    margin-top: -2px;
  }
  .biggest__btn {
    max-width: 350px;
    margin-top: 40px;
  }
  .biggest__age {
    margin-top: 24px;
    color: #122340;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  .biggest__age span {
    font-weight: 600;
  }
  @media(max-width: 1280px) {
    .biggest__info {
      max-width: 50%;
    }
    .biggest__plate {
      padding: 50px;
    }
  }
  @media(max-width: 992px) {
    .biggest__plate {
      flex-flow: column-reverse;
      text-align: center;
      align-items: center;
    }
    .biggest__info {
      max-width: 100%;
      margin-top: 24px;
    }
    .biggest__image {
      margin-left: 0;
    }
    .biggest {
      padding: 40px 0;
    }
    .biggest__info {
      padding-bottom: 0;
    }
  }
  @media(max-width: 768px) {
    .biggest__plate:before {
      left: 8px;
      right: 8px;
      top: 8px;
      bottom: 8px;
    }
    .biggest__title {
      font-size: 22px;
      line-height: 30px;
    }
    .biggest__plate {
      padding: 32px 30px 40px;
    }
    .biggest__image {
      max-width: 176px;
    }
    .biggest__caption {
      margin-top: 12px;
      font-size: 14px;
      line-height: 20px;
    }
    .biggest__caption br {
      display: none;
    }
    .biggest__btn {
      margin-top: 20px;
    }
    .biggest__age {
      margin-top: 16px;
      font-size: 14px;
      line-height: 20px;
    }
  }


  .hear {
    padding: 90px 0;
    background: url('${config.dir}/img/hear-bg.jpeg') -32px top / cover no-repeat;
  }
  .hear__title {
    color: #fff;
    font-family: 'Kaisei Tokumin', serif;
    font-size: 48px;
    font-weight: 500;
    line-height: 56px;
    text-align: center;
  }
  .hear__list {
    margin: 72px auto 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    max-width: 1150px;
    width: 100%;
  }
  .hear__item {
    padding: 48px 48px 56px;
    border-radius: 4px;
    background: #FFF;
  }
  .hear__item-img {
    line-height: 0;
    text-align: center;
  }
  .hear__item-descr {
    margin-top: 24px;
    padding-top: 24px;
    color: #515E7A;
    font-size: 16px;
    line-height: 28px;
    border-top: 1px solid #DFE3EE;
  }
  @media(max-width: 1280px) {}
  @media(max-width: 992px) {
    .hear__list {
      grid-template-columns: 1fr;
      margin-top: 32px;
      gap: 20px;
    }
    .hear__title {
      line-height: 32px;
      font-size: 28px;
    }
    .hear {
      padding: 40px 0;
    }
  }
  @media(max-width: 768px) {
    .hear {
      background: url('${config.dir}/img/hear-bg-mob.jpeg') center top / cover no-repeat;
    }
    .hear__item {
      padding: 24px 20px;
    }
    .hear__item-descr {
      padding-top: 16px;
      margin-top: 16px;
      font-size: 14px; 
      line-height: 20px;
    }
  }


  .cycles {
    padding: 120px 0;
    text-align: center;
  }
  .cycles__title {
    color: #21293E;
    font-family: 'Kaisei Tokumin', serif;
    font-size: 48px;
    font-weight: 400;
    line-height: 56px;
    letter-spacing: 1px;
  }
  .cycles__list {
    margin-top: 72px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }
  .cycles__item {
    border: 1px dashed #DFE3EE;
    background: #F9FAFB;
    padding: 0 32px 40px;
  }
  .cycles__accepted {
    background: #DFE3EE;
    padding: 6px 16px;
    color: #21293E;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  .cycles__accepted span {
    font-weight: 600;
  }
  .cycles__logo {
    margin-top: 48px;
    line-height: 0;
  }
  .cycles__info {
    margin: 24px auto 0;
    padding-top: 24px;
    border-top: 1px solid #DFE3EE;
    max-width: 317px;
  }
  .cycles__students {
    color: #515E7A;
    font-size: 16px;
    line-height: 24px;
  }
  .cycles__descr {
    margin-top: 16px;
    color: #515E7A;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
  }
  .cycles__btn {
    margin-top: 48px;
  }
  @media(max-width: 1280px) {}
  @media(max-width: 992px) {
    .cycles {
      padding: 40px 0;
    }
    .cycles__title {
      font-size: 28px;
      line-height: 32px
    }
    .cycles__list {
      margin-top: 32px;
      grid-template-columns: 1fr;
      gap: 16px;
    }
    .cycles__item {
      padding: 0 20px 24px;
    }
    .cycles__info {
      max-width: 100%;
    }
  }
  @media(max-width: 768px) {
    .cycles__accepted {
      font-size: 13px;
      line-height: 18px;
    }
    .cycles__logo {
      margin-top: 32px;
    }
    .cycles__info {
      margin-top: 20px;
      padding-top: 20px;
    }
    .cycles__students, .cycles__descr {
      font-size: 14px;
      line-height: 20px;
    }
    .cycles__btn {
      margin-top: 32px;
    }
  }


  .secret {
    background: linear-gradient(140deg, #02102F 16.4%, #12162F 28.44%, #12162F 36.41%, #11132B 53.66%, #020B22 73.88%, #11132B 85.38%);
    padding: 90px 0;
    color: #fff;
  }
  .secret__problem {
    position: relative;
    text-align: center;
    padding: 30px 80px;
    max-width: 710px;
    margin: 0 auto;
    border: 1px dashed rgba(255, 255, 255, 0.10);
    background: #21293E;
  }
  .secret__problem img {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(0%, -50%);
  }
  .secret__problem-title {
    font-family: 'Kaisei Tokumin', serif;
    font-size: 48px;
    line-height: 56px; 
    background: linear-gradient(135deg, #FFDA81 24.24%, #FFB574 73.2%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .secret__problem-caption {
    margin-top: 16px;
    font-size: 18px;
    line-height: 32px;
  }
  .secret__title {
    margin-top: 90px;
    text-align: center;
    font-family: 'Kaisei Tokumin', serif;
    font-size: 48px;
    line-height: 56px;
    background: linear-gradient(135deg, #FFDA81 24.24%, #FFB574 73.2%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .secret__caption {
    margin: 24px auto 0;
    text-align: center;
    font-size: 18px;
    line-height: 32px;
    max-width: 620px
  }
  .secret__caption span {
    font-weight: 600;
  }
  .secret__plate {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 24px auto 0;
    border-radius: 4px;
    border: 1px dashed rgba(255, 255, 255, 0.10);
    background: #0B132D;
    padding: 55px 80px;
    max-width: 1200px;
    width: 100%;
  }
  .secret__plate-descr {
    color: #F9FAFB;
    font-size: 16px;
    line-height: 24px;
    max-width: 480px;
    width: 100%;
    margin-left: 50px;
  }
  .secret__plate-descr span {
    font-weight: 600;
  }
  .secret__plate-descr div + div {
    margin-top: 15px;
  }
  .secret_mark {
    border-bottom: 1px solid #87F5FC;
  }
  .secret__footer {
    text-align: center;
  }
  .secret__watch, .secret__parents {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  .secret__watch {
    margin-top: 50px;
  }
  .secret__watch span, .secret__parents span {
    font-weight: 600;
  }
  .secret__btn {
    margin-top: 40px;
  }
  .secret__parents {
    color: #F9FAFB;
    margin-top: 24px;
  }
  @media(max-width: 1280px) {}
  @media(max-width: 992px) {}
  @media(max-width: 768px) {
    .secret {
      padding: 48px 0 40px;
    }
    .secret__problem {
      padding: 30px 20px;
    }
    .secret__problem-title {
      font-size: 28px;
      line-height: 36px;
    }
    .secret__problem-caption {
      font-size: 16px;
      line-height: 24px;
    }
    .secret__problem img {
      max-width: 80px;
    }
    .secret__title {
      margin-top: 40px;
      font-size: 28px;
      line-height: 36px
    }
    .secret__caption {
      margin-top: 16px;
      font-size: 16px;
      line-height: 24px;
    }
    .secret__plate {
      margin-top: 24px;
      display: block;
      padding: 32px 20px;
    }
    .secret__plate-img img {
      max-width: 260px;
    }
    .secret__plate-img {
      text-align: center;
    }
    .secret__plate-descr {
      margin-left: 0;
      padding-top: 32px;
      font-size: 14px;
      line-height: 20px;
    }
    .secret__watch {
      font-size: 14px;
      line-height: 20px;
    }
    .secret__btn {
      margin-top: 32px;
    }
    .secret__parents {
      margin-top: 20px;
    }
  }


  .rev {
    overflow: hidden;
    margin: 120px 0;
  }
  .rev__title {
    color: #21293E;
    font-family: 'Kaisei Tokumin', serif;
    font-size: 40px;
    line-height: 48px; 
    max-width: 80%;
  }
  .rev__title span {
    text-decoration: underline 1px solid #5CDDDB;
    text-underline-offset: 10%;
  }
  .rev__slider {
    margin-top: 75px;
  }
  .rev__nav-num {
    margin: 0 24px;
  }
  .rev .splide__track {
    overflow: visible;
  }
  .rev__nav {
    position: absolute;
    top: -80px;
    right: 0;
    transform: translateY(-100%);
  }
  .rev-item {
    padding: 40px 32px;
    border-radius: 4px;
    border: 1px solid #DFE3EE;
  }
  .rev-item__name {
    color: #21293E;
    font-family: 'Kaisei Tokumin', serif;
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
  }
  .rev-item__details {
    color: #21293E;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    margin-top: 20px;
  }
  .rev-item__details span {
    text-decoration-line: underline;
    cursor: pointer;
    transition: 0.35s;
  }
  .rev-item__descr {
    margin-top: 20px;
    color: #515E7A;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
  }
  .rev-item__descr:not(.active) {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  @media(hover:hover) {
    .rev-item__details span:hover {
      opacity: 0.7;
    }
  }
  @media(max-width: 1280px) {}
  @media(max-width: 992px) {
    .rev {
      margin: 40px 0;
    }
    .rev__title {
      text-align: center;
      font-size: 24px;
      line-height: 32px;
    }
    .rev__slider {
      margin-top: 32px;
    }
    .rev__title {
      max-width: 100%;
    }
    .rev__nav {
      position: static;
      transform: none;
      margin-top: 24px;
    }
    .splide__pagination {
      margin-top: 30px!important;
    }
  }
  @media(max-width: 768px) {
    .rev-item {
      padding: 24px 20px;
    }
    .rev-item__name {
      font-size: 20px;
      line-height: 28px;
    }
    .rev-item__descr {
      margin-top: 16px;
      font-size: 14px;
      line-height: 20px;
    }
    .rev-item__details {
      margin-top: 16px;
    }
    .rev-item__descr:not(.active) {
      -webkit-line-clamp: 5;
    }
  }


  .proven {
    padding: 90px 0 140px;
    background: linear-gradient(140deg, #02102F 16.4%, #12162F 28.44%, #12162F 36.41%, #11132B 53.66%, #020B22 73.88%, #11132B 85.38%);
    color: #fff;
  }
  .proven__title {
    text-align: center;
    font-family: 'Kaisei Tokumin', serif;
    font-size: 48px;
    font-weight: 500;
    line-height: 56px;
  }
  .proven__caption {
    margin-top: 24px;
    text-align: center;
    font-size: 18px;
    line-height: 32px;
  }
  .proven__list {
    margin-top: 72px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
  }
  .proven__item {
    border-radius: 4px;
    border: 1px dashed rgba(255, 255, 255, 0.10);
    background: #0B132D;
    padding: 40px;
  }
  .proven__value {
    text-align: center;
    font-family: 'Kaisei Tokumin', serif;
    font-size: 56px;
    line-height: 64px;
    background: linear-gradient(135deg, #FFDA81 24.24%, #FFB574 73.2%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .proven__descr {
    color: #F9FAFB;
    font-size: 16px;
    line-height: 24px;
    padding-top: 16px;
    margin-top: 16px;
    border-top: 1px solid rgba(255, 255, 255, 0.20);
  }
  @media(max-width: 1280px) {
    .proven__item {
      padding: 24px 20px;
    }
  }
  @media(max-width: 992px) {
    .proven__list {
      margin-top: 32px;
      grid-template-columns: 1fr 1fr;
      gap: 9px;
    }
  }
  @media(max-width: 768px) {
    .proven {
      padding: 40px 0 15px;
    }
    .proven__title {
      font-size: 28px;
      line-height: 36px;
    }
    .proven__title br {
      display: none;
    }
    .proven__caption {
      margin-top: 16px;
      font-size: 16px;
      line-height: 24px;
    }
    .proven__value {
      font-size: 32px;
      line-height: 40px;
    }
    .proven__descr {
      font-size: 14px;
      line-height: 20px;
    }
  }


  .attend {
    text-align: center;
    padding: 120px 0;
  }
  .attend__title {
    color: #21293E;
    font-family: 'Kaisei Tokumin', serif;
    font-size: 48px;
    line-height: 56px;
    letter-spacing: 1px;
  }
  .attend__universities {
    line-height: 0;
    margin-top: 72px;
    text-align: center;
  }
  .attend__btn {
    margin-top: 64px;
  }
  .attend__caption {
    margin-top: 40px;
    color: #515E7A;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  .attend__caption span {
    font-weight: 600;
  }
  .attend-mob {
    display: none;
  }
  @media(max-width: 1280px) {}
  @media(max-width: 992px) {
    .attend {
      padding: 40px 0;
    }
    .attend__title br {
      display: none;
    }
    .attend__title {
      line-height: 32px;
      font-size: 24px;
    }
  }
  @media(max-width: 768px) {
    .attend-mob {
      display: block;
    }
    .attend-desk {
      display: none;
    }
    .attend__universities {
      margin-top: 32px;
    }
    .attend__btn {
      margin-top: 48px;
    }
    .attend__caption {
      margin-top: 20px;
      font-size: 14px;
      line-height: 20px;
    }
  }


  .footer {
    background: linear-gradient(140deg, #031640 16.4%, #12162F 38.68%, #171935 61.31%, #020B22 85.38%);
    text-align: center;
    padding: 8px 0;
    color: #F9FAFB;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
  }
  .footer a {
    color: inherit;
    text-decoration: underline;
  }
  @media(max-width: 768px) {
    .footer {
      padding: 12px;
      line-height: 20px;
    }
  }
`;

const stylesEl = document.createElement('style');
stylesEl.classList.add('exp-styles');
stylesEl.innerHTML = styles;
document.head.appendChild(stylesEl);

// *** Logic *** //
initExp();

function initExp() {
  console.debug('** InitExp **');
  addLayout();
  connectSplide();
  initModals();
  waitFor(() => typeof Splide !== 'undefined', initSliders);

  document.addEventListener('click', (e) => {
    if (e.target.closest('.btn-cta')) {
      document.body.classList.add('lav-form-open');
      Modal.open('.lav-form');
      // alert('Open');
      // _$('[href="#open-popup"]').click();
    }
  });
}

function addLayout() {
  const html = `
    <div class='exp-layout'>
      <div class='jumb'>
        <div class='lav-container'>
          <div class='jumb__logo'>
            <img src='${config.dir}/img/logo.svg' />
          </div>

          <div class='jumb__title'>
            Discover the 3 factors <br/>
            that prevent 6ᵗʰ - 12ᵗʰ graders from getting into the colleges they deserve
          </div>

          <div class='jumb__caption'>
            And tips on how you can help your 12-18 year old <br/>
            get accepted into a top university.
          </div>

          <button class='jumb__btn btn-cta'>
            watch FREE video
            <img src='${config.dir}/img/arrow-right-solid.svg' />
          </button>
          
          <div class='jumb__arrow'>
            <img src='${config.dir}/img/arrow-dashed.svg' />
          </div>

          <div class='jumb__watched'>Over <span>100,000+</span> parents just like you have watched this webinar</div>

          <div class='jumb-about'>
            <div class='jumb-about__preview' data-modal='.lav-solo' data-id='6rp9ponayt'>
              <img src='${config.dir}/img/jumb-preview.png' />
            </div>
            <div class='jumb-about__info'>
              <div class='jumb-about__caption'>Hear What They Think</div>
              <div class='jumb-about__title' data-modal='.lav-solo' data-id='6rp9ponayt'>About Zenith Prep Academy</div>
            </div>
          </div>

          <div class='jumb-featured'>
            <div class='jumb-featured__title'>Featured on:</div>
            <div class='jumb-featured__logos'>
              <img src='${config.dir}/img/featured1.svg' />
              <img src='${config.dir}/img/featured2.svg' />
              <img src='${config.dir}/img/featured3.svg' />
              <img src='${config.dir}/img/featured4.svg' />
              <img src='${config.dir}/img/featured5.svg' />
              <img src='${config.dir}/img/featured6.svg' />
            </div>
          </div>

          <div class='jumb-owner'>
            <div class='jumb-owner__image'>
              <img src='${config.dir}/img/kevin.png' />
            </div>
            <div class='jumb-owner__info'>
              <div class='jumb-owner__title'>Kevin Hong</div>
              <div class='jumb-owner__caption'>Program Director & Host</div>
              <div class='jumb-owner__description'>
                <p>
                  <span>In charge of managing the College Consulting program</span>&nbsp;– Provided guidance & advice to 1,000s of families on how their students can gain admissions into <span>top STEM, Business, and Healthcare summer programs,</span> internships, and research opportunities
                </p>
                <p>
                  Experience working with families from <span>all around the US,</span> helping them gain admission into the Ivy Leagues and other top universities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class='learn'>
        <div class='lav-container'>
          <div class='learn__section'>
            <div class='learn__title'>
            What you will <span>learn after</span><br/> watching the video
            </div>
            <div class='learn__list'>
              <div class='learn__item'>
                <div class='learn__image'>
                  <img src='${config.dir}/img/learn1.svg' />
                </div>
                <div class='learn__caption'>What universities actually <span>want in</span> an applicant (but never say)</div>
              </div>
              <div class='learn__item'>
                <div class='learn__image'>
                  <img src='${config.dir}/img/learn2.svg' />
                </div>
                <div class='learn__caption'>At <span>what age</span> you should start the preparation to secure a spot in a <span>good college</span></div>
              </div>
              <div class='learn__item'>
                <div class='learn__image'>
                  <img src='${config.dir}/img/learn3.svg' />
                </div>
                <div class='learn__caption'><span>Proven methods</span> and strategies for gaining admission to top-tier universities, even if your child does not have <span>the best grades or SAT</span> scores  </div>
              </div>
              <div class='learn__item'>
                <div class='learn__image'>
                  <img src='${config.dir}/img/learn4.svg' />
                </div>
                <div class='learn__caption'><span>How you, as a parent,</span> can assist your child in securing admission to the university they deserve</div>
              </div>
            </div>
          </div>

          <div class='learn__divider'>
            <img src='${config.dir}/img/round-plus.svg' />
            <img src='${config.dir}/img/arrow-dashed-yellow.svg' />
          </div>

          <div class='learn__section'>
            <div class='learn__title'>
              High-Value <span>Tips</span> And <span>Secrets</span> </br> You’ll Discover Inside The Webinar
            </div>
            <div class='learn__list'>
              <div class='learn__item'>
                <div class='learn__image'>
                  <img src='${config.dir}/img/learn5.svg' />
                </div>
                <div class='learn__caption'><span>Why ~90% of students who get 4.0</span> and above GPAs and perfect SAT scores are NOT accepted​ into Harvard, Stanford, or the top 10 universities (and what to do)</div>
              </div>
              <div class='learn__item'>
                <div class='learn__image'>
                  <img src='${config.dir}/img/learn6.svg' />
                </div>
                <div class='learn__caption'>How to identify your child’s <span>true interest</span> and passion, turn it into a unique advantage, and use it to get into a better university</div>
              </div>
              <div class='learn__item'>
                <div class='learn__image'>
                  <img src='${config.dir}/img/learn7.svg' />
                </div>
                <div class='learn__caption'>The truth about certain extracurricular activities that actually <span>hurt students’</span> chances​ of getting into better schools</div>
              </div>
              <div class='learn__item'>
                <div class='learn__image'>
                  <img src='${config.dir}/img/learn8.svg' />
                </div>
                <div class='learn__caption'>What <span>“value-added”</span> college planning is, and how early you should start if you want your child to enter a top university (most parents get this wrong)</div>
              </div>
            </div>
          </div>

          <div class='learn__cta'>
            <button class='learn__btn btn-cta'>
              watch FREE video
              <img src='${config.dir}/img/arrow-right-solid.svg' />
            </button>
          </div>
        </div>
      </div>


      <div class='examples'>
        <div class='lav-container'>
          <div class='examples__title'>
            Some examples of what universities actually<br/> want, in addition to good <span>GPAs and SAT scores:</span>
          </div>

          <div class='examples__table'>
            <div class='examples__row'>
              <div class='examples__item'>
                <div class='examples__item-head'>What universities ask</div>
                <div class='examples__item-body'>
                  <div class='examples__subtitle'>Essay</div>
                  <div class='examples__descr examples__descr_plain'>
                    <span>Example:</span> Think about an academic subject that inspires you. Describe how you have furthered this interest inside and/or outside of the classroom.
                  </div>
                </div>
              </div>
              <div class='examples__item'>
                <div class='examples__item-head'>What applicants usually say</div>
                <div class='examples__item-body'>
                  <div class='examples__descr'>
                    <img src='${config.dir}/img/circle-cross.svg' />

                    Since I was a child I loved science. Last summer, I volunteered at the local Red Cross and (redacted) hospital. Even as a child I constantly sought it out, first on television with Bill Nye and MythBusters, then later in person in every museum exhibit I could find. This reinforced my passion to be in science and confirmed what I already knew about my passion....
                  </div>
                </div>
              </div>
              <div class='examples__item'>
                <div class='examples__item-head'>What universities want to hear</div>
                <div class='examples__item-body'>
                  <div class='examples__descr'>
                    <img src='${config.dir}/img/circle-check.svg' />

                    After a summer-long program of creating colorful designs of new molecules in Avogadro, detailed illustrations of proteins on the Protein Data Bank, and artistic organization of figures within my research paper, I presented my findings and placed First in the Biochemistry, Microbiology, and Molecular Biology (BMMB) category at my County Science Fair and eventually qualified for an international research and innovation competition.
                  </div>
                </div>
              </div>
            </div>

            <div class='examples__row'>
              <div class='examples__item'>
                <div class='examples__item-head'>What universities ask</div>
                <div class='examples__item-body'>
                  <div class='examples__subtitle'>Extracurricular / internships</div>
                </div>
              </div>
              <div class='examples__item'>
                <div class='examples__item-head'>What applicants usually say</div>
                <div class='examples__item-body'>
                  <div class='examples__descr'>
                    <img src='${config.dir}/img/circle-cross.svg' />
                    Playing sports or musical instruments
                  </div>
                  <div class='examples__descr'>
                    <img src='${config.dir}/img/circle-cross.svg' />
                    Math Olympiad, DECA, robotics club, etc.
                  </div>
                  <div class='examples__descr'>
                    <img src='${config.dir}/img/circle-cross.svg' />
                    Volunteering at the Red Cross or local nonprofits
                  </div>
                </div>
              </div>
              <div class='examples__item'>
                <div class='examples__item-head'>What universities want to hear</div>
                <div class='examples__item-body'>
                  <div class='examples__descr'>
                    <img src='${config.dir}/img/circle-check.svg' />
                    Developed an Augmented Reality app for a Machine Learning company
                  </div>
                  <div class='examples__descr'>
                    <img src='${config.dir}/img/circle-check.svg' />
                    Acceptances into summer programs & internships at universities, hospitals, clinics, and more
                  </div>
                  <div class='examples__descr'>
                    <img src='${config.dir}/img/circle-check.svg' />
                    Started drone filming business for real estate
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class='parents'>
        <div class='lav-container'>
          <div class='parents__plate'>
            <div class='parents__info'>
              <div class='parents__title'>
                <span>Parents are also responsible</span> for whether their child can get into a good university.
              </div>

              <div class='parents__caption'>
                Ensure that you don't overlook important steps to secure<br/>your child's future.
              </div>

              <button class='parents__btn btn-cta btn-cta_black'>
                watch FREE video
                <img src='${config.dir}/img/arrow-right-solid_white.svg' />
              </button>
              <div class='parents__age'>For parents of <span>12-18 year&#8209;olds</span></div>
            </div>

            <div class='parents__image'>
              <img src='${config.dir}/img/parents.svg' />
            </div>
          </div>
        </div>
      </div>


      <div class='who'>
        <div class='lav-container'>
          <div class='who__logo'>
            <img src='${config.dir}/img/logo-contrast.svg' />
          </div>
          <div class='who__title'>Who is ZENITH PREP ACADEMY</div>
          <div class='who__caption'>Ensure that you don't overlook important steps to foster a prosperous and secure future for your child</div>

          <div class='who__list'>
            <div class='who__item'>
              <div class='who__item-title'>Personalized college<br/>guidance</div>
              <div class='who__item-descr'><span>Create a customized</span> college preparation guide and roadmap that will help your child stand out to universities.</div>
            </div>
            <div class='who__item'>
              <div class='who__item-title'>Assist in identifying your<br/>child's true interests<br/>and passions</div>
              <div class='who__item-descr'>Leverage them as unique advantages to gain admission to a better university. <span>Guide your child and support them</span> in following the plan.</div>
            </div>
            <div class='who__item'>
              <div class='who__item-title'>16 years of experience</div>
              <div class='who__item-descr'>Through our college counseling program, our students have received a <span>4x higher acceptance rate</span> for Ivy Leagues/Top 15 universities and <span>more than 6x</span> for Top 25 universities. Additionally, more than <span>90% of our students</span> were accepted into a Top 50 university and <span>over 98%</span> for a Top 100.</div>
            </div>
          </div>

          <button class='who__btn btn-cta'>
            watch FREE video
            <img src='${config.dir}/img/arrow-right-solid.svg' />
          </button>
        </div>
      </div>


      <div class='trusted'>
        <div class='lav-container'>
          <div class='trusted__inner'>
            <div class='trusted__title'>
              Trusted by industry experts<br/>and 50 000+ parents
            </div>
            <div class='trusted__logos'>
              <div class='trusted__logo'>
                <img src='${config.dir}/img/featured1.svg' />
              </div>
              <div class='trusted__logo'>
                <img src='${config.dir}/img/featured2.svg' />
              </div>
              <div class='trusted__logo active'>
                <img src='${config.dir}/img/featured3.svg' />
              </div>
              <div class='trusted__logo'>
                <img src='${config.dir}/img/featured4.svg' />
              </div>
              <div class='trusted__logo'>
                <img src='${config.dir}/img/featured5.svg' />
              </div>
              <div class='trusted__logo'>
                <img src='${config.dir}/img/featured6.svg' />
              </div>
            </div>
            <div class='trusted__quote'>
              <div class='trusted__descr'>
                “Since 2007, Zenith has been working with families and students to create fully tailored and customized online consulting and learning programs, designed specifically for the college application process, that help students identify their personalized paths of choice.”
              </div>
              <div class='trusted__author'>Rod Berger, CEO OF MC</div>
            </div>
          </div>
        </div>
      </div>

      
      <div class='reviews'>
        <div class='lav-container'>
          <div class='reviews__title'>Hear what parents just like YOU <span>think&nbsp;about&nbsp;us</span></div>

          <div class="splide reviews__slider">
            <div class="splide__track">
              <div class="splide__list"></div>
            </div>

            <div class='splide-nav reviews__nav splide__arrows'>
              <img class='splide__arrow splide__arrow--prev reviews__nav-prev' src='${config.dir}/img/nav-arrow-left-default.svg' />

              <div class='splide-nav__num reviews__nav-num'><span>1</span>/ 22</div>

              <img class='splide__arrow splide__arrow--next reviews__nav-next' src='${config.dir}/img/nav-arrow-right-default.svg' />
            </div>
          </div>

          <div class='reviews__cta'>
            <button class='reviews__btn btn-cta'>
              watch FREE video
              <img src='${config.dir}/img/arrow-right-solid.svg' />
            </button>
          </div>
        </div>
      </div>


      <div class='webinars'>
        <div class='lav-container'>
          <div class='webinars__title'>Our webinars</div>
          
          <div class="splide webinars__slider">
            <div class="splide__track">
              <ul class="splide__list">
                <li class="splide__slide">
                  <img src='${config.dir}/img/webinar/1.jpeg' />
                </li>
                <li class="splide__slide">
                  <img src='${config.dir}/img/webinar/2.jpeg' />
                </li>
                <li class="splide__slide">
                  <img src='${config.dir}/img/webinar/3.jpeg' />
                </li>
                <li class="splide__slide">
                  <img src='${config.dir}/img/webinar/4.jpeg' />
                </li>
                <li class="splide__slide">
                  <img src='${config.dir}/img/webinar/5.jpeg' />
                </li>
                <li class="splide__slide">
                  <img src='${config.dir}/img/webinar/6.jpeg' />
                </li>
                <li class="splide__slide">
                  <img src='${config.dir}/img/webinar/7.jpeg' />
                </li>
                <li class="splide__slide">
                  <img src='${config.dir}/img/webinar/8.jpeg' />
                </li>
                <li class="splide__slide">
                  <img src='${config.dir}/img/webinar/9.jpeg' />
                </li>
                <li class="splide__slide">
                  <img src='${config.dir}/img/webinar/10.jpeg' />
                </li>
                <li class="splide__slide">
                  <img src='${config.dir}/img/webinar/11.jpeg' />
                </li>
                <li class="splide__slide">
                  <img src='${config.dir}/img/webinar/12.jpeg' />
                </li>
                <li class="splide__slide">
                  <img src='${config.dir}/img/webinar/13.jpeg' />
                </li>
                <li class="splide__slide">
                  <img src='${config.dir}/img/webinar/14.jpeg' />
                </li>
                <li class="splide__slide">
                  <img src='${config.dir}/img/webinar/15.jpeg' />
                </li>
                <li class="splide__slide">
                  <img src='${config.dir}/img/webinar/16.jpeg' />
                </li>
                <li class="splide__slide">
                  <img src='${config.dir}/img/webinar/17.jpeg' />
                </li>
              </ul>
            </div>

            <div class='splide-nav webinars__nav splide__arrows'>
              <img class='splide__arrow splide__arrow--prev webinars__nav-prev' src='${config.dir}/img/nav-arrow-left.svg' />

              <div class='splide-nav__num webinars__nav-num'><span>1</span>/ 17</div>

              <img class='splide__arrow splide__arrow--next webinars__nav-next' src='${config.dir}/img/nav-arrow-right.svg' />
            </div>
          </div>
        </div>
      </div>


      <div class="metrics">
        <div class="lav-container">
          <div class="metrics__logo">
            <img src="${config.dir}/img/logo-contrast.svg">
          </div>
          <div class="metrics__title">Who is ZENITH PREP ACADEMY</div>

          <div class="metrics__list">
            <div class="metrics__item">
              <div class="metrics__item-value">650ᵗʰ</div>
              <div class="metrics__item-caption">fastest-growing private company in the US</div>
            </div>
            <div class="metrics__item">
              <div class="metrics__item-value">9ᵗʰ</div>
              <div class="metrics__item-caption">fastest-growing education company in the US</div>
            </div>
            <div class="metrics__item">
              <div class="metrics__item-value">16+</div>
              <div class="metrics__item-caption">years in the business</div>
            </div>
            <div class="metrics__item">
              <div class="metrics__item-value">Thousands</div>
              <div class="metrics__item-caption">of students have worked with us</div>
            </div>
            <div class="metrics__item">
              <div class="metrics__item-value">40+</div>
              <div class="metrics__item-caption">states we have students in</div>
            </div>
          </div>

          <button class="metrics__btn btn-cta">
            watch FREE video
            <img src="${config.dir}/img/arrow-right-solid.svg">
          </button>
        </div>
      </div>


      <div class='award'>
        <div class='lav-container'>
          <div class='award__title'>Awards won</div>
          <div class='award__caption'>Thousands of happy families have put us on the Inc. 5000 list of fastest growing companies in America 2 years IN A ROW</div>
          <div class='award__main'>
            <img class='award-desk' src="${config.dir}/img/awards.png">
            <img class='award-mob' src="${config.dir}/img/awards-mob.png">
          </div>
          <div class='award__divider award__title'>&</div>
          <div class='award__title'>In The News</div>
          <div class='award__arrow'>
            <img src='${config.dir}/img/arrow-dashed.svg' />
          </div>
          <div class='award__device'>
            <img class='award-desk' src='${config.dir}/img/award-device.png' />
            <img class='award-mob' src='${config.dir}/img/award-device-mob.png' />
          </div>
        </div>
      </div>


      <div class='biggest'>
        <div class='lav-container'>
          <div class='biggest__plate'>
            <div class='biggest__info'>
              <div class='biggest__title'>
                <span>One of the biggest<br/> problems</span> with getting</br> into college is that:
              </div>

              <div class='biggest__caption'>
                <span>Having Good GPA / SAT Scores</span> <img src='${config.dir}/img/not-equal.svg' /><br/> Getting Accepted into a Good University
              </div>

              <button class='biggest__btn btn-cta btn-cta_black'>
                watch FREE video
                <img src='${config.dir}/img/arrow-right-solid_white.svg' />
              </button>
              <div class='biggest__age'>For parents of  <span>12-18 year&#8209;olds</span></div>
            </div>

            <div class='biggest__image'>
              <img src='${config.dir}/img/biggest.svg' />
            </div>
          </div>
        </div>
      </div>


      <div class='hear'>
        <div class='lav-container'>
          <div class='hear__title'>Hear from universities<br/>themselves:</div>
          <div class='hear__list'>
            <div class='hear__item'>
              <div class='hear__item-img'>
                <img src='${config.dir}/img/yale.svg' />
              </div>
              <div class='hear__item-descr'>
                “Academic criteria are important to Yale’s selective admissions process, but we look at far more than test scores and grades... every applicant brings something unique to the admissions committee table. <br/><br/> 
                Perhaps one application stands out because of sparkling recommendations, while another presents outstanding extracurricular talent; maybe your personality shines through a powerful written voice.”
              </div>
            </div>

            <div class='hear__item'>
              <div class='hear__item-img'>
                <img src='${config.dir}/img/stanford.svg' />
              </div>
              <div class='hear__item-descr'>
                "Even perfect test scores don't guarantee admission. Far from it: 69% of Stanford's applicants over the past five years who scored a perfect score on the SAT were rejected... we're also looking for evidence that this young person has a passion, that he or she will bring something to our community that is unique."
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class='cycles'>
        <div class='lav-container'>
          <div class='cycles__title'>The reality of recent admissions cycles:</div>

          <div class='cycles__list'>
            <div class='cycles__item'>
              <div class='cycles__accepted'>accepted <span>14,429 students</span></div>
              <div class='cycles__logo'>
                <img src='${config.dir}/img/berkeley.svg' />
              </div>
              <div class='cycles__info'>
                <div class='cycles__students'>40,706 students had a 4.0 GPA or above</div>
                <div class='cycles__descr'>For every 1 spot available at Berkeley, there are ~3 students that apply with a 4.0+ GPA</div>
              </div>
            </div>
            <div class='cycles__item'>
              <div class='cycles__accepted'>accepted <span>2,114 students</span></div>
              <div class='cycles__logo'>
                <img src='${config.dir}/img/stanford.svg' />
              </div>
              <div class='cycles__info'>
                <div class='cycles__students'>25,518 students had a 4.0 GPA or above</div>
                <div class='cycles__descr'>For every 1 spot available at Stanford, there are 12 students that apply with a 4.0+ GPA</div>
              </div>
            </div>
            <div class='cycles__item'>
              <div class='cycles__accepted'>accepted <span>41,684 students</span></div>
              <div class='cycles__logo'>
                <img src='${config.dir}/img/ucdavis.svg' />
              </div>
              <div class='cycles__info'>
                <div class='cycles__students'>41,684 students applied with a 3.7-4.0+ GPA and only 25,580 of those students were admitted</div>
                <div class='cycles__descr'>That means 16,104 students were still rejected with a competitive GPA for UC Davis</div>
              </div>
            </div>
          </div>

          <button class='cycles__btn btn-cta'>
            watch FREE video
            <img src='${config.dir}/img/arrow-right-solid.svg' />
          </button>
        </div>
      </div>


      <div class='secret'>
        <div class='lav-container'>
          <div class='secret__problem'>
            <img src='${config.dir}/img/arrow-dashed-red.svg' />
            <div class='secret__problem-title'>The problem is</div>
            <div class='secret__problem-caption'>That there are FEWER SPACES available THAN STUDENTS who meet the qualification criteria</div>
          </div>

          <div class='secret__title'>3 secret factors</div>
          <div class='secret__caption'>There are 3 factors that universities won't tell you, but are <span>CRITICAL</span> for them in deciding which students to admit.</div>
          
          <div class='secret__plate'>
            <div class='secret__plate-img'>
              <img src='${config.dir}/img/secret-character.svg' />
            </div>
            <div class='secret__plate-descr'>
              <div>In fact, top universities <span>COMMONLY reject students with perfect GPA and SAT</span> scores if they don't have these 3 factors.</div>
              <div>No, we're not talking about gender, race, or income. <span>These 3 factors are 100%</span> within your control if you want to make sure your child has the best chances of getting into a top university.</div>
              <div>And yes, you can even do these when your child is in the 6ᵗʰ-12ᵗʰ grade, but the <span>earlier they start, the more powerful it will be.</span></div>
              <div><span class='secret_mark'>All will be explained in the webinar.</span></div>
            </div>
          </div>

          <div class='secret__footer'>
            <div class='secret__watch'>Watch the webinar and and learn <span>the 3 factors NOW</span></div>
            <button class='secret__btn btn-cta'>
              watch FREE video
              <img src='${config.dir}/img/arrow-right-solid.svg' />
            </button>
            <div class='secret__parents'>For parents of <span>12-18 year&#8209;olds</span></div>
          </div>
        </div>
      </div>


      <div class='rev'>
        <div class='lav-container'>
          <div class='rev__title'>Hear what parents just like YOU <span>think&nbsp;about&nbsp;us</span></div>

          <div class="splide rev__slider">
            <div class="splide__track">
              <div class="splide__list">
              </div>
            </div>

            <div class='splide-nav rev__nav splide__arrows'>
              <img class='splide__arrow splide__arrow--prev rev__nav-prev' src='${config.dir}/img/nav-arrow-left-default.svg' />

              <div class='splide-nav__num rev__nav-num'><span>1</span>/ 24</div>

              <img class='splide__arrow splide__arrow--next rev__nav-next' src='${config.dir}/img/nav-arrow-right-default.svg' />
            </div>
          </div>
        </div>
      </div>


      <div class='proven'>
        <div class='lav-container'>
          <div class='proven__title'>Our proven track record</div>
          <div class='proven__caption'>In a recent admissions cycle, Zenith Prep Academy had:</div>
          <div class='proven__list'>
            <div class='proven__item'>
              <div class='proven__value'>5x</div>
              <div class='proven__descr'>Higher acceptance rate into an Ivy League / Top 15 university (Stanford, Harvard, Yale, MIT, Johns Hopkins, Duke, and more)</div>
            </div>

            <div class='proven__item'>
              <div class='proven__value'>8x</div>
              <div class='proven__descr'>Higher acceptance rate into a Top 25 university (compared to the nationwide average)</div>
            </div>

            <div class='proven__item'>
              <div class='proven__value'>90%+</div>
              <div class='proven__descr'>Were accepted into a Top 50 university</div>
            </div>

            <div class='proven__item'>
              <div class='proven__value'>98%+</div>
              <div class='proven__descr'>Were accepted into a Top 100 university</div>
            </div>
          </div>
        </div>
      </div>

      <div class='attend'>
        <div class='lav-container'>
          <div class='attend__title'>Zenith students now attend the following </br>universities:</div>

          <div class='attend__universities'>
            <img class='attend-desk' src='${config.dir}/img/universities.svg' />
            <img class='attend-mob' src='${config.dir}/img/universities-mob.svg' />
          </div>

          <button class='attend__btn btn-cta'>
            watch FREE video
            <img src='${config.dir}/img/arrow-right-solid.svg' />
          </button>
        
          <div class='attend__caption'><span>OVER 100,000 PARENTS</span> JUST LIKE YOU HAVE WATCHED THIS WEBINAR</div>
        </div>
      </div>
   
      <div class='footer'>
        <div class='lav-container'>Copyright &copy; 2023 All Rights Reserved by Zenith Prep Academy | <a href='https://www.zenithprepacademy.com/privacy-policy'>Privacy Policy</a></div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('afterbegin', html);

  const reviews = [
    {
      name: 'Alex',
      brief:
        "Alex has been so happy with his relationship with Zenith that he’s looking forward to signing up his younger kids when they’re old enough<span class='lav-dots'>...</span>",
      descr:
        'Alex’s daughter was in the 7<sup>th</sup> grade when she began her college prep guidance with Zenith Prep Academy. Although Alex attended a Top 30 university in the US himself, he realized how challenging the admissions process had become, and was unsure of what classes, activities, and competitions would help his daughter best explore her passions and find her area of interest. He was looking for a highly customized strategy for his daughter to build the right extracurricular profile so she’d be able to stand out from the tens of thousands of other students with similar academics. Alex has been so happy with his relationship with Zenith that he’s looking forward to signing up his younger kids when they’re old enough.',
      image:
        'https://embed-ssl.wistia.com/deliveries/755af17af521e6dd765bfbaf451c7b0e6087a332.webp?image_crop_resized=960x540',
      videoId: 'yfs2xu8e7p',
    },
    {
      name: 'Lana',
      brief:
        "Lana’s son joined our program in the 7<sup>th</sup> grade<span class='lav-dots'>...</span>",
      descr:
        'Lana had quickly realized her son’s school wasn’t challenging or engaging enough for him. He was a very bright, driven, and articulate student who had specific fields that he was interested in. He and Lana wanted to know how he could further his interests in these fields through more advanced classes and different competitions, projects, activities,<br>and more.',
      image:
        'https://embed-ssl.wistia.com/deliveries/fdc05f72cabd5c3fc0d8741c8acfb8de59b2a86e.webp?image_crop_resized=960x540',
      videoId: 'jzb6c2i01s',
    },
    {
      name: 'Leo',
      brief:
        "Leo’s daughters were both accepted and joined our college consulting program in their 8<sup>th</sup> grade<span class='lav-dots'>...</span>",
      descr:
        'Having twin daughters with very different personalities, interests, and strengths was hard enough as it is. Guiding them through high school – with all the different options for honors/AP classes, clubs, competitions, programs/internships, and activities – with no experience ahead of the college admissions process seemed impossible to handle without help. Leo’s daughters were both accepted and joined our college consulting program in their 8<sup>th</sup> grade, as their family desired a partner in guiding and supporting the girls through junior high and high school.',
      image:
        'https://embed-ssl.wistia.com/deliveries/f47993e2b373e150c20235809afe732d4a140a42.webp?image_crop_resized=960x540',
      videoId: 'dw6r5fywa3',
    },
    {
      name: 'Manisha',
      brief:
        "Manisha’s daughter gained acceptance into her dream university<span class='lav-dots'>...</span>",
      descr:
        'Manisha’s daughter was an 11<sup>th</sup> grader when they started working with our college counseling team. A first–generation parent, she turned to Zenith to guide her daughter toward how to best use the one year they had left before college applications, highlighting her daughter’s strengths and interests to ultimately help her shine on college applications. With Zenith’s help, Manisha’s daughter gained acceptance into her dream university.',
      image:
        'https://embed-ssl.wistia.com/deliveries/f4bf00a2a8681f7be0a5c90284b1bd02e5f31e3f.webp?image_crop_resized=960x540',
      videoId: '8zda6sjzsu',
    },
    {
      name: 'Phani',
      brief:
        "Family sought guidance on how to help his son identify his interests and further develop his passion to stand out to top colleges<span class='lav-dots'>...</span>",
      descr:
        'Phani’s son was in the 8<sup>th</sup> grade when they joined our college consulting program. His son was bright and doing well academically, though he had no exposure to any fields/majors. Outside of sports, he also hadn’t participated in any academic or extracurricular activities. Given that Phani didn’t have any experience with how college admissions in the US worked, his family sought guidance on how to help his son identify his interests and further develop his passion to stand out to top colleges.',
      image:
        'https://embed-ssl.wistia.com/deliveries/e8ac4d991d0335b2c959fcdf1a02997c27e3733a.webp?image_crop_resized=960x540',
      videoId: 'y5evtkig7i',
    },
    {
      name: 'Manoj',
      brief:
        "Manoj enrolled his youngest son into our program towards the end of his 9th grade to give him the right opportunities, exposure, and guidance that his older son unfortunately missed out on<span class='lav-dots'>...</span>",
      descr:
        'Having gone through the college application process once with his older son and knowing how challenging and overwhelming it was, Manoj wanted to find a college consulting program for his younger son to stand out. They understood having a strong academic profile with lots of honors/AP classes, a high–weighted GPA (ex. 4.5+), and high standardized scores was not going to help his son get into the colleges he was looking to attend. Manoj enrolled him into our program early on in high school, towards the end of his 9<sup>th</sup> grade, to give him the right opportunities, exposure, and guidance that his older son unfortunately missed out on.',
      image:
        'https://embed-ssl.wistia.com/deliveries/d3d585cd19829b07b8ab7df052f5a3927b93e851.webp?image_crop_resized=960x540',
      videoId: 'is0wgu8ul0',
    },
    {
      name: 'Robert',
      brief:
        "Robert’s son joined our program during his 10<sup>th</sup> grade<span class='lav-dots'>...</span>",
      descr:
        'Although Robert attended high school and college in the US, given that his son went to a hyper–competitive high school (ranked top 100 in the United States), he wanted a highly customized strategy and plan for their son to further his academic interests and build the right extracurricular profile to stand out from his peers in their high school and in the college applications.',
      image:
        'https://embed-ssl.wistia.com/deliveries/d78614b348bdf6f49e68a4791f246fad478b5df1.webp?image_crop_resized=960x540',
      videoId: 'azf6fx3gi5',
    },
    {
      name: 'Steve',
      brief:
        "Steve’s family wanted to make sure his son could reach his full potential by the time he applied for college as a senior<span class='lav-dots'>...</span>",
      descr:
        'Steve’s son joined our college counseling program as a 10<sup>th</sup> grader. Though Steve had attended high school and college in the US, he realized how much had changed in the college admissions process during his son’s 9<sup>th</sup> grade at an academically competitive high school. While his son was hard–working, Steve wanted someone who could motivate their son, help him identify his unique strengths, and most importantly, find an area of interest to pursue outside of school. Given various opportunities in terms of classes, activities, and competitions, Steve’s family wanted to make sure his son could reach his full potential by the time he applied for college as a senior.',
      image:
        'https://embed-ssl.wistia.com/deliveries/899b7bff289762f15b09ee987307fc7ecd4bcdda.webp?image_crop_resized=960x540',
      videoId: '1c0on4q7xf',
    },
    {
      name: 'Vincy',
      brief:
        "She wanted to make sure her daughter could build a comprehensive profile highlighting her strengths and unique talents on the college application<span class='lav-dots'>...</span>",
      descr:
        'Vincy came from a strong business background, having done her education at USC, a top 20 business school. Her daughter was a bright and motivated middle school student, but they wanted to expose her to different fields of interest so she could find a passion best fitting her college/career goals. Given how much has changed with the college application process (requirements, trends, and competitiveness), she wanted to make sure her daughter could build a comprehensive profile highlighting her strengths and unique talents on the college application.',
      image:
        'https://embed-ssl.wistia.com/deliveries/9afb218537f7dadda459ed145e063b3e.webp?image_crop_resized=960x540',
      videoId: 'bfuxrp4svl',
    },
    {
      name: 'Govin &amp; Ramya',
      brief:
        "Ramya and Govin were so pleased with the successful working relationship with their older son that they signed up their younger son as well<span class='lav-dots'>...</span>",
      descr:
        'Ramya and Govin’s son joined our college consulting program in the 10<sup>th</sup> grade. Although he was doing fine academically, they knew he would need a strong extracurricular profile to stand out to universities. With two years left prior to applying to college, they wanted someone to motivate their son, identify the best extracurriculars/activities that would help him gain an edge over his peers, and highlight his strengths so he’d gain admission into the universities that he deserved. Ramya and Govin were so pleased with the successful working relationship with their older son that they signed up their younger son as well.',
      image:
        'https://embed-ssl.wistia.com/deliveries/37ca6debf9f882afc7e4a90177e64f3817469135.webp?image_crop_resized=960x540',
      videoId: 'b4ri1l4kvi',
    },
    {
      name: 'Sa &amp; David',
      brief:
        "Guidance on helping their daughter get into her dream university<span class='lav-dots'>...</span>",
      descr:
        'Sa and David’s daughter was a very strong student academically, involved with various activities including sports, volunteering, leadership positions in clubs and youth councils, dancing, and more. Given that their daughter was in 10<sup>th</sup> grade, Sa and David enrolled her into our college consulting program to help provide resources, recommendations, strategies, and guidance on helping their daughter get into her dream university.',
      image:
        'https://embed-ssl.wistia.com/deliveries/e5493d614320ea3e1854ac52640f6bae4e5f65ea.webp?image_crop_resized=960x540',
      videoId: '6rp9ponayt',
    },
    {
      name: 'Yun',
      brief:
        "Yun, having an 8<sup>th</sup> grader who excelled academically but lacked a sense of direction and focus, quickly enrolled him into our college consulting program once he was accepted<span class='lav-dots'>...</span>",
      descr:
        'Aside from wanting guidance on navigating high school in terms of what classes to take, when to take standardized tests, and all the other traditional things that college counselors do, Yun wanted specific guidance on figuring out her son’s interests and the strategy/roadmap on what her son could do in terms of programs, internships, competitions, and other extracurricular activities to help him stand out to universities when he applied in the 12<sup>th</sup> grade.',
      image:
        'https://embed-ssl.wistia.com/deliveries/08795c38806adec21362a5c94537f78698c0acef.webp?image_crop_resized=960x540',
      videoId: 'irxug13a6p',
    },
    {
      name: 'Archana &amp; Sunil',
      brief:
        "They enrolled their son into our college consulting program towards the end of 7<sup>th</sup> grade<span class='lav-dots'>...</span>",
      descr:
        'Archana’s son, aside from being a bright student, was excelling in various extracurricular activities ranging from music to coding to debate. Feeling at a loss what would be most helpful for college, and unsure of how to continuously engage and help their son reach his fullest potential, they enrolled their son into our college consulting program towards the end of 7<sup>th</sup> grade.',
      image:
        'https://embed-ssl.wistia.com/deliveries/2150990d6a1fd2bd4cfe30d53362ee20e8859ff8.webp?image_crop_resized=960x540',
      videoId: 'kve7ayqy0t',
    },
    {
      name: 'Kunal &amp; Deepal',
      brief:
        "They wanted guidance and highly specific, customized recommendations to turn their son’s passion into activities, achievements, and accomplishments that would help him stand out to universities<span class='lav-dots'>...</span>",
      descr:
        'Kunal and Deepal’s son was in the 8<sup>th</sup> grade when they started their college prep guidance with Zenith Prep Academy. They wanted to help their bright and extremely motivated son find his passion, so he could focus his hard work in one field and set himself apart as a singular applicant for universities. Given that they were both first–generation parents, they were overwhelmed with all of the different classes, clubs, and competitions their son could try. As a result, they wanted guidance and highly specific, customized recommendations to turn their son’s passion into activities, achievements, and accomplishments that would help him stand out to universities.',
      image:
        'https://embed-ssl.wistia.com/deliveries/4f9dde9ba0c2f74d9045bf7a24a435bee3ef1673.webp?image_crop_resized=960x540',
      videoId: 'f0zzc5yspi',
    },
    {
      name: 'Nidhi',
      brief:
        "She enrolled her 8<sup>th</sup> grader son into our college consulting program so that we can recommend different classes, programs…<span class='lav-dots'>...</span>",
      descr:
        'Being a first–generation parent, Nidhi wanted to help her son identify and develop his passion to get into the universities he wanted to go to. Although her son had not done much from an extracurricular standpoint, he was a bright and motivated 8<sup>th</sup> grader who always worked really hard and put his 100% effort into everything that he did. Seeing her son doing well academically, she enrolled him into our college consulting program so that we can recommend different classes, programs, internships, competitions, and other extracurricular activities that will help him stand out to universities.',
      image:
        'https://embed-ssl.wistia.com/deliveries/29677dd0ee524347985d7996538f727fba549172.webp?image_crop_resized=960x540',
      videoId: '2nkrh3pkgx',
    },
    {
      name: 'Sanjay &amp; Vaishali',
      brief:
        "Sanjay and Vaishali enrolled their son into our college consulting program in 8<sup>th</sup> grade to get a head start in planning for high school and college<span class='lav-dots'>...</span>",
      descr:
        'Being first–generation parents in the US, Sanjay and Vaishali were unsure how to guide their oldest son to navigate through high school and the eventual college admissions process. Given the different classes a student can take inside and outside of school, the wide variety of clubs offered in high school, and the various extracurricular activities that they heard through various parents, Sanjay and Vaishali enrolled their son into our college consulting program in 8<sup>th</sup> grade to get a head start in planning for high school and college.',
      image:
        'https://embed-ssl.wistia.com/deliveries/f06a5993936d2fa7fbddefb5736d89958f2626fa.webp?image_crop_resized=960x540',
      videoId: '6zgibmlxcm',
    },
    {
      name: 'Rajesh',
      brief:
        "Rajesh’s son joined our college consulting program in 8<sup>th</sup> grade<span class='lav-dots'>...</span>",
      descr:
        'Given that his son was doing well academically, Rajesh wanted guidance on resources, programs, and classes that could provide his son with exposure to different fields and majors – in turn helping him identify his interests and turn his passions into activities, helping him attract the attention of his choice universities.',
      image:
        'https://embed-ssl.wistia.com/deliveries/fdbdf42359212d73bdb4fc0e76248a2c9f5fb8e1.webp?image_crop_resized=960x540',
      videoId: '27pw1w7nl9',
    },
    {
      name: 'Mughda &amp; Vijay',
      brief:
        "They sought Zenith’s guidance in order to help their daughter identify her area of interest, highlight her academic strengths, and use her passion to stand out to universities<span class='lav-dots'>...</span>",
      descr:
        'Mugdha &amp; Vijay’s daughter was in the 9<sup>th</sup> grade when they joined our college counseling program. Their daughter was doing well in her classes academically, but they wanted a way to identify her interests and develop her strengths. Given that they had only done their post–grad education in the United States, they were unsure of how the college admissions process worked, but knew that it was very competitive. They sought Zenith’s guidance in order to help their daughter identify her area of interest, highlight her academic strengths, and use her passion to stand out to universities.',
      image:
        'https://embed-ssl.wistia.com/deliveries/6ef5b42ef1ccf2d9d3123a55d942644574e94bfa.webp?image_crop_resized=960x540',
      videoId: '87p1tuqicb',
    },
    {
      name: 'Seema',
      brief:
        "She wanted to find a college consulting program that specialized in her son’s varied interests and had the expertise to equip him with a strong profile for his top universities of interest<span class='lav-dots'>...</span>",
      descr:
        'Seema’s son, a 7<sup>th</sup> grader at the time of joining our program, was a very bright and mature student who excelled academically and in his extracurricular activities. However, having moved to California from the East Coast, Seema was unaware of all the different programs, classes, and competitions that her son could do (locally, regionally, nationally). She wanted to find a college consulting program that specialized in her son’s varied interests and had the expertise to equip him with a strong profile for his top universities of interest.',
      image:
        'https://embed-ssl.wistia.com/deliveries/93ba96cd1c127e34ca428258411bfcd05c14e840.webp?image_crop_resized=960x540',
      videoId: '3cii42ifdm',
    },
    {
      name: 'Priya',
      brief:
        "Priya’s daughter was accepted and joined our program when she was in 8<sup>th</sup> grade<span class='lav-dots'>...</span>",
      descr:
        'Given that Priya did not grow up here and was unfamiliar with how college admissions worked in the US, her family was seeking our guidance on how to help their daughter build a comprehensive profile that would highlight her academic strengths while combining that with her extracurricular interests to stand out to universities.',
      image:
        'https://embed-ssl.wistia.com/deliveries/32f446d5bfd84847d17f46cc7e09e518fecbde8f.webp?image_crop_resized=960x540',
      videoId: 't86lwtkn2f',
    },
    {
      name: 'Charu &amp; Vivek',
      brief:
        "Their daughter began her college prep guidance under Zenith Prep Academy midway through her 10<sup>th</sup> grade<span class='lav-dots'>...</span>",
      descr:
        'Although their daughter was strong academically and had numerous extracurricular activities involving leadership, sports, and volunteering, Charu and Vivek wanted more specialized guidance on how to identify their daughter’s interests and what she could do in the 18 months prior to college applications to help her stand out to admission officers comparing tens of thousands of other students applying for the same colleges with similar academic profiles (grades, honors/AP classes, SAT/ACT scores, etc.).',
      image:
        'https://embed-ssl.wistia.com/deliveries/2084d286cb610f1aece59492a5c473fe69256fdd.webp?image_crop_resized=960x540',
      videoId: '0nlkksp255',
    },
    {
      name: "Connie's Family",
      brief:
        "Connie’s son was in the 8th grade when they joined our College Consulting Program<span class='lav-dots'>...</span>",
      descr:
        'Although strong academically, they wanted to make sure he had the right guidance and mentorship, was effectively utilizing his time, and could turn his interest into a genuine passion. And with Zenith’s help, he was able to gain acceptance into his dream university',
      image:
        'https://www.zenithprepacademy.com/wp-content/uploads/2023/02/hfp-section-02-vid-img-12-1024x576.jpg',
      videoId: '8wy4wajbxy',
    },
  ];
  // name: "Connie's Family",
  // brief:
  //   'Connie’s son was in the 8th grade when they joined our College Consulting Program',
  // descr:
  //   'Although strong academically, they wanted to make sure he had the right guidance and mentorship, was effectively utilizing his time, and could turn his interest into a genuine passion. And with Zenith’s help, he was able to gain acceptance into his dream university',
  // image:
  //   'https://www.zenithprepacademy.com/wp-content/uploads/2023/02/hfp-section-02-vid-img-12-1024x576.jpg',

  for (let review of reviews) {
    const el = document.createElement('div');
    el.classList.add('review', 'splide__slide');
    el.innerHTML = `
      <div class='review__preview' data-modal='.lav-solo' data-id='${review.videoId}'>
        <img src='${review.image}' />
      </div>
      <div class='review__body'>
        <div class='review__name'>${review.name}</div>
        <div class='review__descr'>
          <div>${review.brief}</div>
          <div style='display: none'>${review.descr}</div>
        </div>
        <div class='review__details'><span>Read more</span> ></div>
      </div>
    `;

    _$('.review__details span', el).addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();

      if (this.textContent.includes('more')) {
        _$('.review__descr div:last-child', el).style.display = 'block';
        _$('.review__descr div:first-child .lav-dots', el).innerText = '.';
        this.textContent = 'Read less';
      } else {
        _$('.review__descr div:last-child', el).style.display = 'none';
        _$('.review__descr div:first-child .lav-dots', el).innerText = '...';
        this.textContent = 'Read more';
      }
    });

    _$('.review__preview', el).addEventListener('click', function () {
      // Modal.open('.lav-multi');
      // _$('.lav-multi').innerHTML = `
      //   <div class="influex-wistia-player">
      //     <div class="wistia_embed wistia_async_${review.videoId}  popover=false" style="height:300px;width:400px">&nbsp;</div>
      //   </div>
      // `;
      // el.insertAdjacentHTML(
      //   'afterbegin',
      //   `
      //   <div class="influex-wistia-player">
      //     <div class="wistia_embed wistia_async_${review.videoId}  popover=false" style="height:300px;width:400px">&nbsp;</div>
      //   </div>
      // `
      // );
      // _wq.push({
      //   id: review.videoId,
      //   onReady: function (video) {
      //     // container.addClass('playing');
      //     video.play();
      //   },
      // });
    });

    _$('.reviews__slider .splide__list').insertAdjacentElement('beforeend', el);
  }

  const revs = [
    {
      name: 'Vivek S.',
      descr:
        "My 11th grader took 2 classes during summer andwe were really impressed with the professionalismand the deep knowledge of the Zenith staff. Theclasses were very informative & easy-to-follow, andit piqued my daughter's interest in those subjectsespecially the mini-MBA class. The collegecounseling program was excellent; the Zenithcoordinator guided my daughter through everystage of the complex application process and helpedher stand out. I would highly recommend the ZenithPrep Academy.",
    },
    {
      name: 'S G.',
      descr:
        "Samuel has been exceptional in supporting my daughter through her college application process. While many college counseling offer services focussed primarily on essay writing, Samuel really helped my daughter build a solid profile through advising on academic extra curricular activities (internships, research, competitions, volunteering). This is a multi-year process and eventually helps build a narrative which then can be referenced in essays and other artifacts in the application. The 2021-22 application cycle was extremely challenging with most reach colleges reporting single digit acceptance rates. Through Samuel's help, my daughter was able to get acceptance to several reach programs. We as a family couldn't be happier with the all the support that we received from Samuel. Thank you",
    },
    {
      name: 'Priya R.',
      descr:
        "I am tremendously happy and pleased with the Zenith Prep college counseling team. So much so that I have enrolled my second kid also into their program. They have a very robust plan for the child and develop the child's overall ability in tackling things in their own. They are not just focused on college admission but on improving their organization skills along with making them responsible for their actions and always staying on top of their to do list. I cannot thank the college counseling team enough for everything they have done for my child.",
    },
    {
      name: 'A K.',
      descr:
        'Will and his team were very helpful throughout the couple of years that we were with them. Not having attended undergraduate college in the US, both of us were quite apprehensive and clueless about the overall process. Our son latched on to his academic area of interest half-way through the high school. Will and his team tirelessly worked with our son by showing him avenues to get deeper knowledge in his area of interest and explore the field in various ways. They provided excellent guidance for him to pursue it further. Thanks to their guidance and close partnership with our son, as well as invaluable help throughout the application process, he got acceptances from highly ranked universities such as UC Berkeley, pre-admit to Ross School of Business at Umich, and many more.  We are proud to be Cal Parents and are thankful to Will and his team for everything they have done for our son.',
    },
    {
      name: 'Pardeep K.',
      descr:
        'My son took two courses at Zenith  - Web Development and Software Development. These courses are not just about learning computer language, but more about applying those skills in developing real life applications. At the of the course enterprise quality applications were built. This whole process has helped in improving problem solving skill.  Instructors at Zenith are very knowledgeable and true professionals, understand how to pace the program still keep students motivated. Highly recommended!!!',
    },
    {
      name: 'Sim A.',
      descr:
        'My children love Zenith. My daughter is a Sophomore now. She joined back when she was in 8th grade. She enjoys the different programs that Zenith offers. As parents, we like that Zenith helps her explore career choices such as business, technology, and medical fields. We like the service so much, that our 7th grader son is now also enrolled in the program. We highly recommend Zenith.',
    },
    {
      name: 'S L.',
      descr:
        'My child began working with Zenith Prep Academy in freshmen year of high school, and they have been a great help in providing resources for academic interests, internships/summer programs, and especially the college application process. Throughout high school, the Zenith Prep team provided my child with countless resources for pursuing academic-related programs/internships which helped develop their interests and experiences. Particularly throughout the college application process, they have been able to answer our numerous questions, as well as provide consistent feedback on essays, extracurricular activities lists, etc. Overall, the team at Zenith Prep Academy has helped guide my family throughout both high school and especially through the college application process, which we are grateful for.',
    },
    {
      name: 'Anita D.',
      descr:
        "Zenith Prep Academy is a very professional yet student interest led counseling centre. I was very impressed with their approach which combines best practices with helping a student excel in their area of interest. The counselors are very well informed and are prompt to respond to any questions we have. The whole effort of the team is encouraging the student to work hard and develop successful practices which will lay a foundation for future success.My son took their Web Development Class online and is very happy with his experience. He was very motivated to work hard in the class. The IA's in the class were very good to work with. I especially loved the detailed feedback after the class, which focuses not only on the technical part but also on the work ethics and tips for a building successful work habits. He is now looking forward to the Software Development class.",
    },
    {
      name: 'Jason T.',
      descr:
        "Our son is a 7th grader and he was still trying to figure out what direction he wanted to go towards (business, technology, video editing).  We attended a few seminars with Zenith to understand their approach to helping students prepare for college and to how they help students find their interest.  Our son really enjoyed making videos and editing so we decided on the entry level web development class.  This class was in addition to his normal workload with school.  He was new to development so we didn't know how he would receive it.  With the help of his tutor which is provided through the class, his enjoyment in the class shown through each passing day, so much he would focus on doing the homework from the web development class over his middle school work.  In the end my son created an easy to navigate and beautiful UX look of a website.  He was always been able to work independently before and taking this course has only increased his own personal confidence in his ability to learn and grow.  He's leaning more towards software development now with a future focus on building software for making videos.  If you are looking for classes to build interest for your children in technology, I would recommend they give Zenith a try.",
    },
    {
      name: 'Fei L.',
      descr:
        'My son enjoyed the one-on-one Software Development class. The curriculum was carefully designed to teach him the fundamentals, get him the logic thinking behind the coding, analyze the mistakes he made and provided good coding practice along the course. He also got the personal attention and feedback in the private on-line class. At the end of the class, he was proud of himself that he not only learned a new computer language but also built a website that he had never thought he could.',
    },
    {
      name: 'Gul R.',
      descr:
        'We are very happy with Zenith Prep Academy. My kids loved the Zenith programming class.  They proactively worked on their homework in advance of the next class, and could not wait for the next class. Unlike prior programming classes they took, which were superficial and overly theoretical, the Zenith class actually taught them how to build something tangible, bolstering their conference and excitement about CS. The TAs are excellent and helpful too. I work in software, and can see how the curriculum has been crafted  and iterated upon several times to have maximum learning impact. Thank you Zenith!',
    },
    {
      name: 'Klara F.',
      descr:
        "My son, 14 years old, took the Mini MBA 1 program last spring at this Academy and a Web Development (Front End) class this summer. Best investment of our time and resources we have been able to gift him so far! I wish we knew about this place before, when our daughter was his age. College choices and possibilities would probably be much wider for her...These are some of the challenges we have been facing before discovering this program and the transformation we observed:Our son has been a talented and creative fun child, who's enthusiasm about exploring possibilities has been steadily going down the more time he has been spending in a public school, doing homework and studying for good grades... It got to the point that when he was interested (or when we were on top of his responsibilities), he would get straight A's- usually just towards the end of the school year, and when not interested or monitored constantly, he would get C's and even D's... Always getting distracted, forgetful and bored...After only one class at Zenith, he got inspired not only about researching new possibilities, solving real problems but also, he got excited about life in general. He even started working out in the gym ( his own initiative!) and moving up in Kung Fu .  A's were not a chore anymore but a natural byproduct of his newly found enthusiasm and confidence. His work was done still in school and we have been able to have very lively and mature conversations at home, including conversations about his business :-)At the age of 14, my son has an understanding of business that many business owners like myself can be jealous of. He also became very good in negotiation and quite impressive at understating human psychology ( may it be a warning to you if you don't want your kids become confident and powerful)He talks about Mr. Frank Song as the \"coolest guy and a mentor\" :-) This aspect is what I value the most about our experience with this place. We appreciate Mr. Song's generosity immensely. There aren't many people who will take time to listen to a teen as an equal, and  help bring the best out of them in all situations... This is priceless to me. All of the people Mr. Song brings to inspire and teach at the Academy are high quality, educated, successful young people who are still able to connect with the teens but have a wealth of real life academic and business experiences, to help the teens dream and grow big.I am very excited where my teen is heading. Thank you Zenith Academy! Klara F., Lafayette",
    },
    {
      name: 'Vivian L.',
      descr:
        "My son just took a software development course from Zenith during 2021 summer as he is coming to 9th grade.  He told me that he really likes the course; in fact, after the course he becomes more motivated in coding that he is exploring more in other online coding classes.  The teacher is very knowledgeable and my son learned a lot from each of the class sessions and looked forward to the next class session during the course.  I was hesitated at first with the online/virtual course, but it turns out surprisingly very good and convenient especially during the pandemic.  In fact, during the course, we needed to take an unexpected trip to Houston for 3 weeks and having 3 people in a hotel room with remote working and learning were a bit challenge, but we did it with a breeze.  Thanks to the flexibility on virtual class and excellent teacher!  On top of that, Zenith was also accommodating on early class sessions since my son's school started earlier than others' so that my son can finish the course before his school started.  Thanks so much to Zenith team!!",
    },
    {
      name: 'Mangesh D.',
      descr:
        "As someone who has personally taken courses at Zenith Prep Academy, I can definitively say that it's been one of the best experiences of my life. I have never seen a course so well-designed and well-executed like the ones offered at Zenith. Whether it's the instructors or the material itself, there is something about these courses that makes the student want to keep learning. I took the web development and mini-MBA courses at Zenith and I was expecting to just learn the basics; however, our instructor taught us much more than I had expected. Not only did we master the basics, we dove into the deeper nuances of programming as well. The best part about attending Zenith is that your instructors truly care. The class size is relatively small, so if there is something that is confusing to understand, help is readily available. Not only do your instructors care, but they are also super passionate. Believe me, you're not in a room with someone just reading a script or speaking in monotone. The instructors love what they teach and they are just as excited as you when they come to class. If you're looking for a course that teaches you more than just the cookie-cutter basics found in a textbook, then Zenith Prep Academy is the place for you.",
    },
    {
      name: 'Danny L.',
      descr:
        "Interacted heavily with Kevin Hong, William Chung, and Samuel Fung over the course of the last 3 months.  Amazing caliber of hard-working professionals!  The team works tirelessly, into late nights and weekends, accommodating their client parents' schedules and students' needs.  Very impressed with how the team's divided and succeeded in their roles, their quick assessment of my child's strengths and areas of opportunities, laying out different learning options, with a recommended \"actionable\" target plan.  In a mere 2 months, also very happy with my child's project achievements, having attended Zenith's Web Development intensive bootcamp.  Nonetheless, their excellent teaching instructor, interactive teacher/student sessions, and most of all, \"results-oriented\" project deliverables (with tremendously-useful feedback) helped reinforce and solidify an effective working approach to my child's pre-college development needs. Also looking forward to the next Zenith Software bootcamp, to continually build on this momentum and positive trajectory!  Thank you Zenith!",
    },
    {
      name: 'Shefali S.',
      descr:
        "My son took the Web Development class and it was an awesome experience for him. The virtual class was better than in person class as there was TA alignment throughout the session who watched over my son's progress every class. My son had to miss a few classes and he was provided with a full recording of the class to make up!Overall Frank is a wonderful instructor. My son has developed a keen interest in coding and would be taking up more coding classes with Zenith Prep Academy. They are very student focussed and show they care for the student's learning and progress. Kevin was always there to help and promptly addressed all my questions!I would say that they go beyond their call of duty to help their students and coach them on a one to one basis, even though it's a group class. The TA's are wonderful.I am glad I invested in their program!",
    },
    {
      name: 'Joyce H.',
      descr:
        "My 10th grade son really enjoyed and loved his mini-mba class! Even on his birthday, he was working through the homework and case study so that he could be better prepared for the in-class discussion. To see him actively want to prepare and do well speaks very highly about the class. The class was very well designed where they not only taught important and useful business/finance concepts in a way that any student would be able to understand, but also really challenged the students through their case studies, analysis, and projects as well. I would definitely recommend this class to any parent that has students who has even the slightest interest in business or just wants them to learn helpful and useful skills that they can use. Also, Will and the Zenith team were great in providing guidance and answering any question we had with the college admissions' process. Would highly recommend them to everyone!",
    },
    {
      name: 'Kristy H.',
      descr:
        "After receiving a recommendation from a friend, I decided to enroll in the web development class. Looking back on it now, I realize it was a great investment for my future. Each class is engaging, and challenges me to think critically about the information taught in class. Frank is an awesome instructor who makes sure you understand the purpose of each component before moving on to a bigger project. As a graphic designer I can now code my own websites for my portfolio, and am now learning about web design in my free time. The curriculum is explained thoroughly, but if you need help, it's readily available due to the small class size. Frank deeply cares about each student, their progress, and that all their questions are answered. Whether you were a beginner or at the intermediate level, all of us were experts when the course ended. I decided to register for the software development class which starts next Monday and I'm looking forward to it!Update:                   This is a continuation of my review from taking their web development class and transitioning to software development. I highly recommend for any student to take web dev first because it will help you learn php faster. The curriculum is just as well-designed and organized as web dev. I'm glad I challenged myself to take this course, because I have definitely learned so much thanks to Frank.                 The classes are small in size, and with the help of the instructor and teacher assistant each student receives the individual attention they need. In each session, the material is taught thoroughly, with plenty of practice to ensure that students understand what's going on. After learning the basics, we apply our skills on a project we would be tasked to work on if we were a software developer in the real world. By doing so, we learn best practices, the kind of roadblocks we would run into, and critically think about problems. Overall, I'm happy I decided to enroll in software development, and would recommend this to any of my friends.",
    },
    {
      name: 'S U.',
      descr:
        'Zenith Prep Academy has brought future professional work experience to the life of kids . I highly recommend them to everyone . Their intensive research of current trends in the market and keeping both parents and kids abreast of it , is one of the major strengths. Most of the time we are lost in too many things -Kids with their homework and age old way of teaching method and parents in earning and managing their profession . Kids are left with googling or screen time or something , Zenith rightly places and bridges these gaps by their conversations , talks in schools and colleges , providing tools to keep up fit. Good Job!',
    },
    {
      name: 'Phani S.',
      descr:
        'My son took the mini MBA class with Zenith Prep Academy. He learned to research and create financial models on case studies. The class is highly recommended for kids interested in learning business basics and performing business cost analysis. The class size being small helped the instructor focus individually on each student.',
    },
    {
      name: 'Inna P.',
      descr:
        "My son took Classes here during the summer. He loved it and was excited. Didn't complain was always excited about going. He felt instructors made it worth it because of the way they interacted with the students.",
    },
    {
      name: 'Sandeep D.',
      descr:
        'We had a very good experience with this company. The results were as we expected. Last year our daughter was accepted into 4 ivy league schools and is attending Princeton as Freshman. We worked with Will and Frank for their special college planning service. They worked hard and are very strategic. They think through everything and we always felt comfortable with them. They are also very nice people and my daughter bonded with them well which is why we decided to work with them. Over the 4 or 5 years we worked with them we always felt in control of the process even though my wife and I are not born here or are experts on the american college system. Many of my friends still work with them, and some have finished and have had similar results. My youngest daughter is now in her second year with them and is focusing on engineering and business. I am very glad this company exist because it has been a very positive influence on my children and they look up to the people at this company.',
    },
    {
      name: 'Rebecca',
      descr:
        "My daughter has been with Zenith since 8th grade and is now a rising sophomore. Zenith has constantly encouraged the best from their students and are consistent in providing helpful resources to build up their resumes and skills outside of a classroom. My daughter participated in Zenith's Web Development online course in April this year, and although she was hesitant at first, she is now confident in her abilities to code from scratch and looks forward in doing so.",
    },
    {
      name: 'Jason',
      descr:
        "He was always been able to work independently before and taking this course has only increased his own personal confidence in his ability to learn and grow. He's leaning more towards software development now with a future focus on building software for making videos. If you are looking for classes to build interest for your children in technology, I would recommend they give Zenith a try.",
    },
  ];

  for (let rev of revs) {
    const el = document.createElement('div');
    el.classList.add('rev-item', 'splide__slide');
    el.innerHTML = `
      <div class="rev-item__name">${rev.name}</div>
      <div class="rev-item__descr">${rev.descr}</div>
      <div class='rev-item__details'><span>Read more</span> ></div>
    `;

    _$('.rev-item span', el).addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      if (this.textContent.includes('more')) {
        _$('.rev-item__descr', el).classList.add('active');
        this.textContent = 'Read less';
      } else {
        _$('.rev-item__descr', el).classList.remove('active');
        this.textContent = 'Read more';
      }
    });

    _$('.rev__slider .splide__list').insertAdjacentElement('beforeend', el);
  }
}

function initSliders() {
  const webinar = new Splide('.webinars__slider', {
    autoplay: true,
    type: 'loop',
    perPage: 3,
    gap: 35,
    focus: 'center',
    pagination: false,
    updateOnMove: true,
    isNavigation: true,
    lazyLoad: 'nearby',
    breakpoints: {
      768: {
        perPage: 1.5,
        gap: 5,
      },
    },
  });

  webinar.on('move', function (newIndex) {
    _$('.webinars__nav-num span').innerHTML = parseInt(newIndex + 1);
  });

  webinar.mount();

  const reviews = new Splide('.reviews__slider', {
    autoplay: true,
    rewind: true,
    perPage: 3,
    gap: 24,
    // pagination: false,
    updateOnMove: true,
    isNavigation: true,
    breakpoints: {
      992: {
        perPage: 2,
      },
      768: {
        isNavigation: true,
        perPage: 1.15,
        gap: 8,
        pagination: false,
      },
    },
  });

  reviews.on('move', function (newIndex) {
    _$('.reviews__nav-num span').innerHTML = parseInt(newIndex + 1);
  });

  // _$('.reviews__nav-prev').addEventListener('click', () => {
  //   _$('.reviews__slider .splide__arrow--prev').click();
  // });
  // _$('.reviews__nav-next').addEventListener('click', () => {
  //   _$('.reviews__slider .splide__arrow--next').click();
  // });

  reviews.mount();

  const rev = new Splide('.rev__slider', {
    type: 'loop',
    autoplay: true,
    rewind: true,
    perPage: 3,
    gap: 24,
    // pagination: false,
    updateOnMove: true,
    isNavigation: true,
    breakpoints: {
      992: {
        perPage: 2,
      },
      768: {
        type: 'slide',
        perPage: 1.15,
        gap: 8,
        pagination: false,
      },
    },
  });

  rev.on('move', function (newIndex) {
    _$('.rev__nav-num span').innerHTML = parseInt(newIndex + 1);
  });

  rev.mount();

  // const main = new Splide('.splide0', {
  //   type: 'fade',
  //   rewind: true,
  //   pagination: false,
  //   arrows: false,
  // });

  // const thumbnails = new Splide('.splide1', {
  //   fixedWidth: 100,
  //   fixedHeight: 60,
  //   gap: 10,
  //   rewind: true,
  //   pagination: false,
  //   isNavigation: true,
  //   breakpoints: {
  //     600: {
  //       fixedWidth: 60,
  //       fixedHeight: 44,
  //     },
  //   },
  // });

  // main.sync(thumbnails);
  // main.mount();
  // thumbnails.mount();
}

function initModals() {
  new Modal(
    'lav-solo',
    `
      <div class="influex-wistia-player">
        <div class="wistia_embed wistia_async_6rp9ponayt popover=false">&nbsp;</div>
      </div>
    `
  );

  new Modal(
    'lav-form',
    `
      <div class='lav-modal__close'>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20" fill="none">
          <path d="M1 1L19 19" stroke="#122340"/>
          <path d="M19 1L1 19" stroke="#122340"/>
        </svg>
      </div>

      <div class='lav-form__title'>Watch free video</div>
      <div class='lav-form__descr'>
        Discover the 3 factors <br/>that prevent 6ᵗʰ - 12ᵗʰ graders from <br/>getting into the colleges they deserve
      </div>

      <div class='lav-form__group'>
        <div class='lav-form__label'>Name</div>
        <input type='text' class='lav-form__input lav-form__name' placeholder='Lisa' />
      </div>
      <div class='lav-form__group'>
        <div class='lav-form__label'>Email</div>
        <input type='email' class='lav-form__input lav-form__email' placeholder='example@gmail.com' />
      </div>

      <button class="lav-form__btn btn-cta">
        watch Now
        <img src="https://flopsi69.github.io/crs/zenithprepacademy/landing/img/arrow-right-solid.svg">
      </button>

      <div class='lav-form__note'>
        <img src='${config.dir}/img/note.svg' />
        No spam. No payment or prior commitment is required.
      </div>
    `
  );

  _$('.lav-form__name').addEventListener('input', function () {
    _$('input[type="name"][name="name"]').value = this.value;
  });

  _$('.lav-form__email').addEventListener('input', function () {
    _$('input[type="email"][name="email"]').value = this.value;
  });

  _$('.lav-form__btn').addEventListener('click', function () {
    const blackList = [
      'bizbuyblah',
      'lubde',
      'bitvoo',
      'ezgiant',
      'dni8',
      'triots',
      'dealerspecialties',
      'bracc',
      'temporary-mail',
      'fsouda',
      'ggusd',
      'jollyfree',
      'cmeinbox',
      'crtsec',
      'paxven',
      'nightorb',
      'fandua',
      'chotunai',
      'iucake',
      'mirtox',
      'eurokool',
      'laserlip',
      'fanneat',
      'jobsfeel',
      'mustbeit',
      'ngopy',
      'mailinator',
      'runte.org',
      'aosod',
      'ritchie',
      'otanhome',
      'satterfield',
      'wwgoc',
      'pubpng',
      'jourrapide',
      'wiroute',
      'wifame',
      'wireps',
      'vootin',
      'qq',
      'buckeye-express',
      'teleworm',
      'dayrep',
      'v2ssr',
      'test',
      'youke1',
      'gpipes',
      'rolenot',
      'luxeic',
      'valanides',
      'razuz',
      'rhyta',
      'galcake',
      'asoflex',
      'oniecan',
      'huvacliq',
      'bugfoo',
      'cyclesat',
      'mitigado',
      'fenwazi',
      'dogemn',
      'raotus',
      'moneyzon',
      'fitzola',
      'snowlash',
      'lieboe',
      'hajjars',
      'dewareff',
      'meidecn',
      'fectode',
      'jobbrett',
      'in2reach',
      'soombo',
      'syinxun',
      'larland',
      'hamiltonrealtyin',
      'saeoil',
      'pixiil',
      'webonoid',
      'jwsuns',
      'andorem',
      'dekaps',
      'appxapi',
      'glumark',
      'asuflex',
      'aicogz',
      'internetkeno',
      'lehmanhs',
      'prolug',
      'netzero',
      'kaudat',
      'subdito',
      'temporary-mail',
      'cutefier',
      'cosxo',
      'pyadu',
      'onlcool',
      'rungel',
      'cutefier',
      'farebus',
      'pgobo',
      'mevori',
      'vaband',
      'favilu',
      'duscore',
      'ratedane',
      'rockdian',
      'peogi',
      'carpetra',
    ];
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    const nameValue = _$('.lav-form__name').value.trim();
    const emailValue = _$('.lav-form__email').value.trim();

    if (!nameValue) {
      alert('Please enter your name');
    } else if (!emailValue) {
      alert('Please enter your email');
    } else if (!pattern.test(emailValue)) {
      alert('Please enter a valid email');
    } else if (blackList.includes(emailValue.split('@')[1].split('.')[0])) {
      alert('Please enter a valid email');
    } else {
      _$('[href="#submit-form"]').click();
    }
  });
  // document.body.classList.add('lav-form-open');
  // Modal.open('.lav-form');

  // new Modal(
  //   'lav-multi',
  //   `
  //     <div class="splide splide0">
  //       <div class="splide__track">
  //         <div class="splide__list">
  //           <div class="splide__slide">
  //             <img src='${config.dir}/img/jumb-preview.png' />
  //           </div>
  //           <div class="splide__slide">
  //             <img src='${config.dir}/img/jumb-preview.png' />
  //           </div>
  //           <div class="splide__slide">
  //             <img src='${config.dir}/img/jumb-preview.png' />
  //           </div>
  //         </div>
  //       </div>
  //     </div>

  //     <div class="splide splide1">
  //       <div class="splide__track">
  //         <div class="splide__list">
  //           <div class="splide__slide">
  //             <img src='${config.dir}/img/jumb-preview.png' />
  //           </div>
  //           <div class="splide__slide">
  //             <img src='${config.dir}/img/jumb-preview.png' />
  //           </div>
  //           <div class="splide__slide">
  //             <img src='${config.dir}/img/jumb-preview.png' />
  //           </div>
  //         </div>
  //       </div>
  //     </div>

  //     <div class="influex-wistia-player">
  //       <div class="wistia_embed wistia_async_6rp9ponayt popover=false">&nbsp;</div>
  //     </div>
  //   `
  // );

  // Modal.open('.lav-multi');

  // <iframe src="https://drive.google.com/file/d/1O4EpOclzq63vcKGpmJSS7nihM8cZB8ZJ/preview" height='520' width='920' allow="autoplay"></iframe>
}

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
    if (_$(condition)) {
      if (typeof cb === 'function') cb(_$(condition));
      return;
    }

    return new Promise((resolve) => {
      const observer = new MutationObserver((mutations, observer) => {
        if (_$(condition)) {
          if (typeof cb === 'function') cb(_$(condition));
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
  const el = typeof observeEl === 'string' ? _$(observeEl) : observeEl;

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
  const el = typeof observeEl === 'string' ? _$(observeEl) : observeEl;

  if (!el || typeof cb !== 'function') return;

  const config = {
    root: null,
    threshold: 0.3, // 0 - 1
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

function focusTimeEvent(el, cb) {
  let entryTime = 0;
  initIntersection(
    el,
    ({ isIntersecting, time }) => {
      if (isIntersecting) {
        entryTime = time;
      } else if (entryTime) {
        cb(time - entryTime);
        entryTime = 0;
      }
    },
    { threshold: 0.1 }
  );
}

// Artificial delay
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Check if element in viewport
function isElementInViewport(selector) {
  const el = typeof selector === 'string' ? _$(selector) : selector;

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
function _$(selector, context = document) {
  return context.querySelector(selector);
}
function _$$(selector, context = document, toSimpleArray = false) {
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
