console.debug('*** Experiment started ***')

// Config for Experiment
const config = {
  // dir: 'http://127.0.0.1:5500/setApp/blogHero',
  dir: 'https://flopsi69.github.io/crs/setApp/blogHero',
  clarity: ['set', 'successful-registration"', 'variant_1'],
  debug: false
}

// const orig = console.log
// console.log = function (...args) {
//   orig.apply(console, ['Debug:', ...args])
// }

// Styles for Experiment
const stylesBlogHero = /* css */ `
.article header + .article__header-image {
  display: none;
}

.site-navigation__bar {
  background: #fff;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.21);
}

.layout__main > header {
  position: relative;
  padding-block: 88px;
  background: #424e81;
}

.layout__main > header::after {
  content: '';
  position: absolute;

  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="210" height="132" fill="none"><path fill="%23FFD0B5" d="M261.435 130.747c-37.247 59.987-112.474 76.157-172.77 37.498C28.37 129.587 8.917 95.342 22.847 85.533c-5.56-9.977 3.644-17.056 3.644-17.056-3.932-3.356-8.399-6.186-13.116-8.242-8.69-4.04-5.004-15.747 10.842-13.162 18.691 3.122 37.233 20.39 41.904 20.687 4.67.296 2.296-13.12 9.812-13.482 7.516-.363 6.356 19.616 32.661 38.061 25.241 17.699 106.039 61.077 113.065 34.916 7.027-26.16 39.776 3.492 39.776 3.492Z"/><mask id="a" width="237" height="136" x="9" y="47" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="%23EED2BB" d="M245.946 119.69c-38.367 59.54-97.792 82.082-157.962 45.317C27.813 128.243 8.71 95.028 22.88 85.143c-5.457-9.68 3.913-16.797 3.913-16.797-3.912-3.216-8.37-5.906-13.091-7.833-8.694-3.796-4.815-15.348 11.106-13.115 18.78 2.705 37.206 19.288 41.905 19.49 4.7.201 2.5-12.91 10.075-13.41 7.575-.499 6.12 19.117 32.349 36.706 25.167 16.877 89.351 52.629 96.801 26.839 7.45-25.79 40.008 2.667 40.008 2.667Z"/></mask><g fill="%23161616" fill-rule="evenodd" clip-rule="evenodd" mask="url(%23a)"><path d="M22.841 70.036c.19.644.847.972 1.47.732 9.176-3.537 19.163-.076 23.952 4.76 2.43 2.453 3.188 4.888 2.52 6.722-.675 1.854-3.096 3.927-8.94 5.012-.646.12-1.11.766-1.037 1.443.073.676.656 1.128 1.303 1.008 6.01-1.116 9.678-3.434 10.866-6.697 1.196-3.282-.408-6.689-3.03-9.338-5.314-5.366-16.186-9.147-26.318-5.242-.623.24-.975.956-.786 1.6Z"/><path d="M17.62 88.23c.236.621.918.89 1.523.602 6.157-2.94 12.684-2.741 17.72-.94 2.517.9 4.617 2.185 6.094 3.627 1.486 1.451 2.25 2.97 2.328 4.339.063 1.955-1.031 3.691-3.063 4.538-2.07.863-5.217.812-9-1.3-.558-.313-1.28-.071-1.61.538-.33.61-.146 1.356.412 1.668 4.18 2.334 8.041 2.601 10.942 1.392 2.935-1.223 4.777-3.942 4.667-7.093v-.025c-.12-2.201-1.3-4.24-3.023-5.923-1.738-1.698-4.12-3.13-6.87-4.114-5.5-1.966-12.652-2.202-19.453 1.045a1.332 1.332 0 0 0-.667 1.646Z"/></g><path fill="%23C8C8F0" d="m143.763 59.015-.625 1.714c-1.11 3.056-2.845 5.814-5.066 7.976l-.902.895c.208.223.416.372.555.596 3.192 3.503 5.135 8.125 5.482 12.97l.556 6.187.555-6.187c.416-4.845 2.359-9.467 5.482-12.97l.555-.596-.902-.895c-2.221-2.236-3.956-4.994-5.066-7.976l-.624-1.714ZM169.581 13.107l-.481 1.46c-.854 2.604-2.188 4.89-3.897 6.795l-.694.762c.161.19.321.318.428.508 2.455 2.984 3.95 6.921 4.217 11.049l.427 5.27.427-5.27c.32-4.128 1.762-8.064 4.217-11.049l.427-.508-.694-.762c-1.708-1.905-3.043-4.254-3.897-6.794l-.48-1.46Z"/></svg>');
  background-repeat: no-repeat;
  background-position: bottom right;
  z-index: 0;
}

.layout__main > header .page-header-wrapper {
  position: relative;
  z-index: 1;
}

@media (max-width: 992px) {
  .eney-promo-banner +  .layout__main > header .page-header-wrapper {
    padding-top: 150px;
  }
}


@media (max-width: 768px) {
  .eney-promo-banner + .layout__main > header .page-header-wrapper {
    padding-top: 225px;
  }
}
@media (max-width: 992px) {
  .layout__main > header {
    padding-block: 0;
  }

  .layout__main > header::after {
    display: none;
  }
}

.layout__main > header .post-header {
  margin: 0;
  padding: 0;
}

.layout__main > header .post-header__search {
  display: none;
}

.layout__main
  > header
  .breadcrumbs
  :is(.breadcrumbs__link, .breadcrumbs__item) {
  color: #fff;
}

.layout__main > header .breadcrumbs {
  margin: 0;
}

@media (max-width: 992px) {
  .layout__main > header .breadcrumbs {
    margin-top: 12px;
  }
}

.crs-hero-inner {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

@media (max-width: 992px) {
  .crs-hero-inner {
    flex-direction: column;
    gap: 32px;
  }
}
.crs-hero-text {
  max-width: 541px;
}

@media (max-width: 992px) {
  .crs-hero-text {
    max-width: 100%;
  }
}
.crs-hero-text h1 {
  margin-top: 18px;
  color: #fff;
  font-size: 46px;
  font-weight: 700;
  line-height: 60px;
  letter-spacing: 1.3px;
}

@media (max-width: 992px) {
  .crs-hero-text h1 {
    font-size: 38px;
    line-height: 52px;
    letter-spacing: 1px;
  }
}

.crs-hero-description {
  margin-top: 24px;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}
@media (max-width: 992px) {
  .crs-hero-description {
    margin-top: 16px;
  }
}

.crs-hero-solution {
  max-width: 561px;
}

@media (max-width: 992px) {
  .crs-hero-solution {
    position: relative;
    max-width: 100%;
  }
}

.crs-hero-solution-note {
  display: flex;
  align-items: center;
  gap: 8px;
  max-width: 172px;
  padding: 8px 24px;
  border-radius: 24px 24px 0px 0px;
  background: #c8c8f0;
  text-align: center;
  color: #26262b;
  font-size: 14px;
  font-weight: 450;
  line-height: 18px;
}

@media (max-width: 992px) {
  .crs-hero-solution-note {
    justify-content: center;
    max-width: 100%;
  }
}

.crs-hero-solution-note::before {
  content: '';
  width: 16px;
  height: 16px;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path fill="%2326262B" fill-rule="evenodd" d="M14.009 3.39a1.5 1.5 0 0 1 .1 2.119l-6.363 7a1.5 1.5 0 0 1-2.152.069l-3.137-3a1.5 1.5 0 1 1 2.086-2.156l2.024 1.924 5.323-5.855a1.5 1.5 0 0 1 2.119-.101Z" clip-rule="evenodd"/></svg>');
  background-repeat: no-repeat;
  background-position: center;
}

.crs-solution-inner {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  border-radius: 0px 24px 24px 24px;
  background: #fff;
  padding: 24px;
}

@media (max-width: 992px) {
  .crs-solution-inner {
    padding: 24px 18px 16px;
    border-radius: 0;
  }
  .crs-solution-inner:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="132" height="119" fill="none"><path fill="%23FFD0B5" d="M187.88 93.791c-26.868 43.272-81.133 54.936-124.627 27.05S5.727 68.252 15.775 61.177c-4.01-7.197 2.629-12.304 2.629-12.304-2.837-2.42-6.059-4.462-9.462-5.945-6.268-2.914-3.609-11.36 7.822-9.495 13.482 2.252 26.858 14.709 30.226 14.923 3.37.214 1.657-9.464 7.079-9.726 5.422-.261 4.584 14.15 23.56 27.456 18.207 12.767 76.49 44.058 81.559 25.187 5.068-18.871 28.692 2.519 28.692 2.519Z"/><mask id="a" width="172" height="99" x="5" y="33" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="%23EED2BB" d="M176.702 85.814c-27.676 42.95-70.542 59.21-113.946 32.69-43.404-26.52-57.183-50.48-46.963-57.61-3.936-6.982 2.823-12.116 2.823-12.116a36.984 36.984 0 0 0-9.443-5.65c-6.271-2.74-3.473-11.072 8.012-9.461C30.73 35.618 44.023 47.58 47.413 47.726c3.39.145 1.803-9.313 7.267-9.673 5.464-.36 4.415 13.79 23.335 26.478 18.154 12.173 64.454 37.963 69.827 19.36 5.374-18.604 28.86 1.923 28.86 1.923Z"/></mask><g fill="%23161616" fill-rule="evenodd" clip-rule="evenodd" mask="url(%23a)"><path d="M15.766 49.997c.137.465.611.701 1.06.528 6.62-2.551 13.823-.055 17.279 3.434 1.752 1.77 2.3 3.526 1.817 4.849-.486 1.337-2.233 2.832-6.449 3.615-.466.087-.8.552-.748 1.04.053.489.474.815.94.728 4.335-.805 6.982-2.477 7.839-4.83.862-2.368-.295-4.826-2.186-6.736-3.834-3.871-11.676-6.6-18.985-3.782a.966.966 0 0 0-.567 1.154Z"/><path d="M12 63.121a.79.79 0 0 0 1.098.434 16.78 16.78 0 0 1 12.783-.678c1.814.65 3.33 1.577 4.395 2.617 1.072 1.046 1.623 2.142 1.68 3.13.045 1.41-.745 2.662-2.21 3.273-1.494.622-3.763.586-6.492-.938-.403-.225-.923-.051-1.161.388-.239.44-.106.979.297 1.204 3.015 1.683 5.8 1.876 7.892 1.004 2.118-.883 3.446-2.844 3.367-5.117v-.018c-.086-1.588-.937-3.058-2.18-4.273-1.254-1.224-2.972-2.257-4.957-2.967a18.4 18.4 0 0 0-14.032.754.961.961 0 0 0-.48 1.187Z"/></g><path fill="%23C8C8F0" d="m102.996 42.049-.45 1.237c-.801 2.204-2.053 4.194-3.655 5.753l-.65.645c.15.162.3.27.4.43 2.303 2.528 3.704 5.861 3.955 9.356l.4 4.463.401-4.463c.3-3.495 1.702-6.828 3.954-9.356.151-.16.301-.322.401-.43l-.651-.645c-1.602-1.613-2.853-3.603-3.654-5.753l-.451-1.237ZM121.621 8.934l-.347 1.053a13.683 13.683 0 0 1-2.811 4.901l-.5.55c.115.137.231.229.308.366 1.771 2.153 2.849 4.993 3.042 7.97l.308 3.802.308-3.802c.231-2.977 1.271-5.817 3.042-7.97l.308-.366-.5-.55c-1.233-1.374-2.195-3.069-2.811-4.901l-.347-1.053Z"/></svg>');
    background-repeat: no-repeat;
    background-position: bottom right;
    z-index: 1;
  }
}

.crs-solution-content {
  position: relative;
  z-index: 2;
}
.crs-solution-title {
  color: #26262b;
  font-size: 20px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 1px;
}

@media (max-width: 992px) {
  .crs-solution-title {
    letter-spacing: 1.15px;
  }
}

.crs-solution-description {
  margin-top: 4px;
  color: #26262b;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}

@media (max-width: 992px) {
  .crs-solution-description {
    margin-top: 12px;
  }
}

.crs-solution-actions {
  margin-top: 24px;
  display: flex;
  gap: 24px;
}

@media (max-width: 992px) {
  .crs-solution-actions {
    flex-direction: column;
    gap: 12px;
    align-items: center;
    max-width: 259px;
  }

  .crs-solution-actions > * {
    width: 100%;
  }
}

.crs-solution-security {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: #26262b;
  font-size: 14px;
  font-weight: 450;
  line-height: 20.02px;
}

.crs-solution-security::before {
  content: '';
  width: 14px;
  height: 16px;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" fill="none"><g clip-path="url(%23a)"><path fill="%2326262B" fill-rule="evenodd" d="M7.564.166a2 2 0 0 0-1.128 0L0 2.053v6.389a7 7 0 0 0 4.362 6.483l1.884.766a2.002 2.002 0 0 0 1.508 0l1.883-.766A7 7 0 0 0 14 8.444v-6.39L7.564.167ZM7 2.085 2 3.552v4.89a5 5 0 0 0 3.116 4.632L7 13.84V2.085Z" clip-rule="evenodd"/></g><defs><clipPath id="a"><path fill="%23fff" d="M0 0h14v16H0z"/></clipPath></defs></svg>');
}

.crs-search {
  --active-width: 766px;
  position: relative;
  margin-left: auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

@media (max-width: 1280px) {
  .crs-search {
    width: 100%;
    margin-inline: 30px;
  }
}

.crs-search[data-status='active'] {
  width: var(--active-width);
  max-width: 80vw;
}
.crs-search form {
  max-width: 0;
  overflow: hidden;
  transition: max-width 0.2s cubic-bezier(0.4, 0, 0.2, 1), padding 0.2s;
  display: none;
  padding: 0;
}

.crs-search .search__input {
  margin: 0 !important;
}
.crs-search-form-animate {
  width: 100%;
  max-width: 100% !important;
  padding: 0 12px;
  display: block !important;
}

.search-close-button {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  width: 32px;
  height: 32px;
  padding: 6px;
  background: none;
  border: none;
  color: #424e81;
  font-size: 16px;
  cursor: pointer;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="none"><path fill="%2326262B" d="M13.85 5.016c.648-.649 1.646-.697 2.228-.108.583.59.53 1.592-.117 2.24l-3.349 3.35 3.365 3.37c.646.647.69 1.64.095 2.218-.594.577-1.6.52-2.247-.127l-3.333-3.337-3.357 3.362c-.648.649-1.645.697-2.228.108-.582-.59-.53-1.592.117-2.24L8.372 10.5 5.005 7.129c-.647-.648-.69-1.641-.096-2.219.594-.577 1.6-.52 2.247.127l3.336 3.34 3.359-3.361Z"/></svg>');
  background-repeat: no-repeat;
  background-position: center;
}

.search-button {
  width: 32px;
  height: 32px;
  background-color: transparent;
  background-image: url('https://cdn.setapp.com/master-731a4d2d754f61748ef2fc458fef61a7e6cf2144-415/build/main/d0c5d73ccb63c5effda5.svg');
  background-position: center;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
}

@media (max-width: 576px) {
  .site-navigation__content.search-active .site-navigation__logo {
    display: none !important;
  }
  .site-navigation__logo {
    display: block !important;
  }
}

`

const stylesSuccessful = /* css */ `
.successful-registration-desktop-ccr__steps, .successful-registration-desktop-ccr__cta-container {
  display: none;
}
.successful-registration-desktop-ccr__title {
  margin-bottom: 0;
  margin-top: 0;
  color: #26262B;
  text-align: center;
  font-size: 46px;
  font-style: normal;
  font-weight: 600;
  line-height: 60px;
}
.lav-caption {
  color: #26262B;
  text-align: center;
  font-size: 21px;
  font-style: normal;
  font-weight: 400;
  line-height: 35px;
  letter-spacing: 1.3px;
  margin: 12px auto 0;
}
.lav-steps {
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
  gap: 24px;
}
@media(min-width: 1240px) {
  .lav-steps {
    width: 1200px;
    padding: 0 20px;
  }
}
.lav-divider {
  margin-top: 52px;
}
@media(max-width: 1100px) {
  .lav-divider {
    display: none;
  }
}
.lav-step {
  text-align: center;
  max-width: 300px;
  width: 100%;
}
[data-step='1'] .lav-step__descr {
  max-width: 260px;
  margin-left: auto;
  margin-right: auto;
}
[data-step='2'] .lav-step__descr {
  margin-left: -5px;
  margin-right: -5px;
}
.lav-step:nth-child(3) {
}
.lav-step__icon {
  height: 140px;
  line-height: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.lav-step__icon-default {
  max-width: 88px;
  max-height: 88px;
}
.lav-step__icon-downloading {
  max-width: 225px;
  max-height: 111px;
}
.lav-step__title {
  color: #26262B;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  margin-top: 8px;
  display: flex;
  justify-content: center;
}
@media(min-width: 1240px) {
  .lav-step__title {
    white-space: nowrap;
  }
}
.lav-step__descr {
  color: #26262B;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin-top: 8px;
}
.lav-step__download {
  color: #D97D39;
  transition: 0.3s;
  cursor: pointer;
}
.lav-step__descr span:hover {
  opacity: 0.8;
  text-decoration: underline;
}
.lav-control {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  margin-top: 55px;
  margin-bottom: 70px;
}
.lav-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .3s;
  min-width: 210px;
  height: 44px;
  cursor: pointer;
}
.lav-btn__black {
  border-radius: 6px;
  background: #26262B;
  color: #FFF;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
}
.lav-btn__black:hover {
  background-color: #3a3844;
}
.lav-btn__trans {
  color: #000;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  border-radius: 6px;
  border: 1px solid #000;
  background: #FFF;
}
.lav-btn__trans:hover {
  opacity: 0.5;
}
`

// *** Logic *** //
initExp()

const lavBlogLinks = [
  '/how-to/download-youtube-videos',
  '/how-to/recover-deleted-photos-from-iphone',
  '/how-to/how-to-recover-deleted-text-messages-on-iphone',
  '/how-to/how-to-recover-an-unsaved-word-document-on-mac',
  '/how-to/convert-youtube-to-mp3',
  '/how-to/download-facebook-video',
  '/how-to/how-to-recover-sd-card-on-mac',
  '/how-to/unblur-an-image',
  '/how-to/tiktok-banned-reasons-and-solutions',
  '/how-to/open-rar-files-on-mac'
]

const lavArticleData = [
  {
    link: '/how-to/recover-deleted-photos-from-iphone',
    title: 'How to recover deleted photos from an iPhone',
    description:
      'Find out how to recover deleted photos iPhone no longer has in its camera roll using backups, cloud sync, and data recovery apps. Never lose any photos ever again!',
    headerBlock: {
      title: 'Recover lost iPhone photos and files',
      description:
        'All you need is a Mac with Disk Drill installed. Connect and scan your iPhone to restore lost content. Available on Setapp.',
      imgSrc:
        'https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/82/40394/icon-1742891157-67e26895a932e.png'
    },
    popupData: {
      initial: {
        title: 'Have you figured out how to recover deleted iPhone photos?'
      },
      yesStep: {
        title: /* HTML */ `<span class="highlight">Fantastic!</span> Keep your
          photos safe from now on`,
        description:
          'Setapp helps you prevent future photo-loss stress with one simple subscription:',
        subnote: 'Enjoy now for FREE, and protect your memories forever'
      },
      noStep: {
        title: /* HTML */ `<span class="highlight">Don’t worry</span> <br />
          you still have options!`,
        description: /* HTML */ `Instantly recover your permanently deleted
          photos with <b>Disk Drill</b> on Setapp. Plus, you’ll get full access
          to other essential apps`,
        subnote: 'Enjoy now for FREE, and protect your memories forever'
      },
      applist: [
        {
          imgSrc:
            'https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80,dpr=1/https://store.setapp.com/app/399/42166/icon-67e3aab93a5fb.jpg',
          title: 'CleanMy®Phone',
          description: 'to clear duplicates and free up storage'
        },
        {
          imgSrc:
            'https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80,dpr=1/https://store.setapp.com/app/217/40765/icon-1730479186-67250452d2169.png',
          title: 'ChronoSync Express',
          description: 'for automatic backups'
        },
        {
          imgSrc:
            'https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/289/42253/icon-1743678842-67ee6d7aeeda6.png',
          title: 'CloudMounter',
          description: 'for hassle-free cloud storage'
        },
        {
          imgSrc:
            'https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/82/40394/icon-1742891157-67e26895a932e.png',
          title: 'Disk Drill',
          description: 'ready for emergencies'
        }
      ]
    }
  },
  {
    link: '/how-to/download-youtube-videos',
    title: 'How to save YouTube videos on Mac',
    description:
      'How to download a YouTube video on a Mac using dedicated apps and built-in programs to get the ability to edit and share video files.',
    headerBlock: {
      title: 'Download YouTube videos in high quality',
      description:
        'Get Downie on Setapp to save, share or edit any YouTube video. Need audio, subtitles, or thumbnails separately? Downie has you covered.',
      imgSrc:
        'https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/222/42263/icon-1743756630-67ef9d568e1e3.png'
    },
    popupData: {
      initial: {
        title: 'Have you successfully downloaded your YouTube video?'
      },
      yesStep: {
        title: /* HTML */ `<span class="highlight">Awesome!</span> Want an
          easier way next time? `,
        description:
          'Setapp makes downloading and managing videos effortless with these powerful tools:',
        subnote: 'Enjoy now for FREE, and protect your memories forever'
      },
      noStep: {
        title: /* HTML */ `<span class="highlight">No worries,</span> <br />
          we’ve got you covered! `,
        description:
          'Effortlessly download any YouTube video using Setapp’s powerful apps:',
        subnote: 'Enjoy now for FREE, and protect your memories forever'
      },
      applist: [
        {
          imgSrc:
            'https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/371/42285/icon-1744023104-67f3ae4007aa4.png',
          title: 'Pulltube',
          description: 'quick and easy video downloads'
        },
        {
          imgSrc:
            'https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/222/42263/icon-1743756630-67ef9d568e1e3.png',
          title: 'Downie',
          description: 'grab videos from any platform'
        },
        {
          imgSrc:
            'https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/321/42059/icon-1741882724-67d3056489850.png',
          title: 'CleanShot X',
          description: 'quickly capture and edit your screen'
        }
      ]
    }
  },
  {
    link: '/how-to/how-to-recover-deleted-text-messages-on-iphone',
    title: 'How to retrieve deleted text messages on your iPhone',
    description:
      'How to recover deleted text messages iPhone using Apple functions, phone provider, and dedicated pro apps.',
    headerBlock: {
      title: 'The fastest way to recover lost data on iPhone',
      description:
        'Install Disk Drill on your Mac from Setapp and recover any lost files on iPhone in a few clicks.',
      imgSrc:
        'https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/82/40394/icon-1742891157-67e26895a932e.png'
    },
    popupData: {
      initial: { title: 'Have you recovered your deleted iPhone messages?' },
      yesStep: {
        title: /* HTML */ `<span class="highlight">Great!</span> Now keep your
          messages safe`,
        description:
          'Setapp helps secure your data with these easy-to-use tools:',
        subnote: 'Get your messages back immediately—start for FREE now!'
      },
      noStep: {
        title: /* HTML */ `<span class="highlight">Don’t panic</span>, we have a
          solution!`,
        description:
          'Instantly retrieve your deleted messages using Setapp’s powerful apps:',
        subnote: 'Get your messages back immediately—start for FREE now!'
      },
      applist: [
        {
          imgSrc:
            'https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/82/40394/icon-1742891157-67e26895a932e.png',
          title: 'Disk Drill',
          description: 'recover deleted messages easily'
        },
        {
          imgSrc:
            'https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/328/41359/icon-1734924881-6768da51c8c1a.png',
          title: 'AnyTrans',
          description: 'effortlessly manage and transfer your data'
        }
      ]
    }
  },
  {
    link: '/how-to/how-to-recover-an-unsaved-word-document-on-mac',
    title: 'How to recover unsaved Word document on a Mac',
    description:
      'When you need to recover Word document Mac computers don’t respond well to the retrieval process. Microsoft Word is a third party app, and Apple doesn’t automatically save its documents to icloud as it does with apps like Pages.',
    headerBlock: {
      title: 'Recover Word documents on Mac from any device',
      description:
        'Have your important Word documents been lost or intentionally destroyed? Get DiskDrill on Setapp to recover deleted files.',
      imgSrc:
        'https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/82/40394/icon-1742891157-67e26895a932e.png'
    },
    popupData: {
      initial: { title: 'Have you recovered your unsaved Word document?' },
      yesStep: {
        title: /* HTML */ `<span class="highlight">Excellent!</span> Now
          safeguard your documents`,
        description: 'Setapp offers powerful solutions to protect your files:',
        subnote: 'Restore your documents now—start FREE today!'
      },
      noStep: {
        title: /* HTML */ `<span class="highlight">Don’t stress,</span> help is
          here!`,
        description:
          'Quickly recover your unsaved documents with these powerful Setapp apps:',
        subnote: 'Restore your documents now—start FREE today!'
      },
      applist: [
        {
          imgSrc:
            'https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/82/40394/icon-1742891157-67e26895a932e.png',
          title: 'Disk Drill',
          description: 'to recover deleted files easily'
        },
        {
          imgSrc:
            'https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/217/40765/icon-1730479186-67250452d2169.png',
          title: 'ChronoSync Express',
          description: 'automated backups to protect future documents'
        },
        {
          imgSrc:
            'https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/210/9272/icon-1699433154-654b4ac208ada.png',
          title: 'Backup Pro',
          description: 'effortlessly backup and restore data'
        }
      ]
    }
  },
  {
    link: '/how-to/convert-youtube-to-mp3',
    title: 'Best ways to convert YouTube to MP3',
    description:
      'Find out the best ways to convert YouTube to MP3 format, download whole playlists in a click, and transfer media to other devices instantly.',
    headerBlock: {
      title: 'Easily convert a YouTube video to MP3',
      description:
        'Install Pulltube or Downie to grab your video in the desired quality, adjust the length, and instantly convert it to the preferred format. Get both apps on Setapp.',
      imgSrc:
        'https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/371/42285/icon-1744023104-67f3ae4007aa4.png'
    },
    popupData: {
      initial: {
        title: 'Have you successfully converted your YouTube video to MP3?'
      },
      yesStep: {
        title: /* HTML */ `<span class="highlight">Awesome!</span> Simplify your
          media tasks even more.`,
        description:
          'Setapp helps you handle media effortlessly with these useful apps:',
        subnote: 'Convert videos instantly—start for FREE now!'
      },
      noStep: {
        title: /* HTML */ `<span class="highlight">Don’t worry,</span> we've got
          your back!`,
        description:
          'Easily convert YouTube videos to MP3 with these powerful Setapp tools:',
        subnote: 'Convert videos instantly—start for FREE now!'
      },
      applist: [
        {
          imgSrc:
            'https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/371/42285/icon-1744023104-67f3ae4007aa4.png',
          title: 'Pulltube',
          description: 'easily download and convert YouTube videos'
        },
        {
          imgSrc:
            'https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/222/42263/icon-1743756630-67ef9d568e1e3.png',
          title: 'Downie',
          description: 'high-quality audio extraction from the video'
        },
        {
          imgSrc:
            'https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/219/42264/icon-1743758208-67efa380b6636.png',
          title: 'Permute',
          description: 'effortlessly convert to MP3 and other formats'
        }
      ]
    }
  },
  {
    link: '/how-to/download-facebook-video',
    title: 'How to download Facebook videos to Mac',
    description:
      'Learn how to save from Facebook. Keep your favorite videos close at hand for easy access and enjoyment.',
    headerBlock: {
      title: 'Effortlessly download videos from leading sites ',
      description:
        'Explore Pulltube and Downie, the Mac media downloaders available on Setapp, and easily save all the content you desire.',
      imgSrc:
        'https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/371/42285/icon-1744023104-67f3ae4007aa4.png'
    },
    popupData: {
      initial: {
        title: 'Have you successfully downloaded your Facebook video?'
      },
      yesStep: {
        title: /* HTML */ `<span class="highlight">Great!</span> Make video
          downloading even easier next time.`,
        description:
          'Setapp simplifies video management with these handy tools:',
        subnote: 'Enhance your video experience—start your FREE trial today!'
      },
      noStep: {
        title: /* HTML */ `<span class="highlight">No worries,</span> we can
          help!`,
        description:
          'Quickly download any Facebook video using these reliable Setapp apps:',
        subnote: 'Enjoy now for FREE, and protect your memories forever'
      },
      applist: [
        {
          imgSrc:
            'https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/371/42285/icon-1744023104-67f3ae4007aa4.png',
          title: 'Pulltube',
          description: 'simple Facebook video downloads'
        },
        {
          imgSrc:
            'https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/222/42263/icon-1743756630-67ef9d568e1e3.png',
          title: 'Downie',
          description: 'easily grab videos from various websites'
        },
        {
          imgSrc:
            'https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/219/42264/icon-1743758208-67efa380b6636.png',
          title: 'Permute',
          description: 'instantly convert videos for convenient use'
        }
      ]
    }
  },
  {
    link: '/how-to/how-to-recover-sd-card-on-mac',
    title: 'How to recover deleted files from an SD card on a Mac: 5 easy ways',
    description:
      'No matter what caused the data loss, learn how to recover an SD card on Mac with our guide. Quickly recover photos, documents, and more.',
    headerBlock: {
      title: 'Recover Word documents on Mac from any device',
      description:
        'Disk Drill can recover them regardless of the cause of the loss – accidental deletion, data corruption, disk damage, etc. Available on Setapp.',
      imgSrc:
        'https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/82/40394/icon-1742891157-67e26895a932e.png'
    },
    popupData: {
      initial: { title: 'Have you successfully recovered your SD card data?' },
      yesStep: {
        title: /* HTML */ `<span class="highlight">Awesome!</span> Secure your
          data from now on`,
        description:
          'Protect your important files easily with Setapp’s powerful apps:',
        subnote: 'Keep your files safe permanently—start for FREE today!'
      },
      noStep: {
        title: /* HTML */ `<span class="highlight">Don’t worry,</span> we've got
          the solution!`,
        description:
          'Quickly recover lost SD card data using Setapp’s trusted tools:',
        subnote: 'Recover your files now—try Setapp for FREE!'
      },
      applist: [
        {
          title: 'Disk Drill',
          description: 'powerful SD card data recovery',
          imgSrc:
            'https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/82/40394/icon-1742891157-67e26895a932e.png'
        },
        {
          title: 'Backup Pro',
          description: 'simple backup solutions to safeguard your data',
          imgSrc:
            'https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/210/9272/icon-1699433154-654b4ac208ada.png'
        }
      ]
    }
  },
  {
    link: '/how-to/unblur-an-image',
    title: 'How to unblur an image quickly and easily',
    description:
      'Find out how to sharpen blurry pictures in a variety of ways, from using traditional photo-editing tools to web apps to AI-powered software.',
    headerBlock: {
      title: 'Perfect your photo-editing workflow',
      description:
        'Use the best image-manipulation software from the Setapp collection. Try all the apps for free.',
      imgSrc:
        'https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/566/0/icon-1741357275-67cb00db1ded3.png'
    },
    popupData: {
      initial: { title: 'Did you manage to unblur your image?' },
      yesStep: {
        title: /* HTML */ `<span class="highlight">Fantastic!</span> Enhance
          images easily from now on`,
        description:
          'Setapp makes image editing effortless with these powerful apps:',
        subnote: 'Start enhancing your images today—FREE trial included!'
      },
      noStep: {
        title: /* HTML */ `<span class="highlight">No worries,</span> we have
          the perfect solution!`,
        description:
          'Effortlessly fix blurry images using Setapp’s reliable apps:',
        subnote: 'Start enhancing your images today—FREE trial included!'
      },
      applist: [
        {
          title: 'Luminar ',
          description: 'quickly sharpen and enhance your images',
          imgSrc:
            'https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/566/0/icon-1741357275-67cb00db1ded3.png'
        },
        {
          title: 'TouchRetouch',
          description: 'easily remove unwanted objects from photos',
          imgSrc:
            'https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/298/8541/icon-1691068510-64cba85e8b087.png'
        },
        {
          title: 'CameraBag Pro',
          description: 'powerful filters and photo editing tools',
          imgSrc:
            'https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/299/42088/icon-1742267911-67d8e607487c0.png'
        }
      ]
    }
  },
  {
    link: '/how-to/tiktok-banned-reasons-and-solutions',
    title: 'TikTok banned: Reasons and solutions',
    description:
      'Find out ways to unblock TikTok or work around its regional content restrictions, keeping your web browsing secure and anonymous.',
    headerBlock: {
      title: 'Safely access content anywhere in the world',
      description:
        'Learn to connect to the web using secure VPN protocols and find other ways to optimize your productivity with 240+ apps on Setapp',
      imgSrc:
        'https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/433/42254/icon-1743694727-67eeab8756821.png'
    },
    popupData: {
      initial: { title: 'Did you resolve your TikTok ban issue?' },
      yesStep: {
        title: /* HTML */ `<span class="highlight">Great!</span> Stay
          trouble-free on TikTok.`,
        description:
          'Setapp helps keep your online presence smooth and secure with these powerful apps:',
        subnote: 'Ensure uninterrupted social media access—start FREE today!'
      },
      noStep: {
        title: /* HTML */ `<span class="highlight">Don't worry,</span> we can
          help you fix this!`,
        description:
          'Quickly resolve TikTok bans and avoid future issues with these Setapp apps:',
        subnote: 'Get back on TikTok now—try Setapp FREE today!'
      },
      applist: [
        {
          title: 'ClearVPN',
          description: 'safely browse and unblock restricted content',
          imgSrc:
            'https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/433/42254/icon-1743694727-67eeab8756821.png'
        },
        {
          title: 'AdLock',
          description: 'block unwanted ads and trackers',
          imgSrc:
            'https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/517/41861/icon-1740384397-67bc288ddd017.png'
        },
        {
          title: 'Secrets 4',
          description: 'securely manage passwords and logins',
          imgSrc:
            'https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/587/41798/icon-1739292259-67ab7e63760de.png'
        }
      ]
    }
  },
  {
    link: '/how-to/open-rar-files-on-mac',
    title: 'How to open RAR files on Mac',
    description:
      'Learn how to effortlessly open RAR files on Mac and how to extract .rar files using Terminal with step-by-step instructions.',
    headerBlock: {
      title: 'Easy drag-and-drop compression for RAR, ZIP, and more on Mac',
      description:
        'Macs don’t have native support for compressed folders. With Setapp’s Archiver, customize your (de)compression or preview your file without unpacking',
      imgSrc:
        'https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/194/10197/icon-1711963165-660a7c1d7fdbc.png'
    },
    popupData: {
      initial: { title: 'Were you able to open your RAR file on Mac?' },
      yesStep: {
        title: /* HTML */ `<span class="highlight">Awesome!</span> Now make file
          management even easier.`,
        description:
          'Setapp gives you all the tools you need to handle archives and files like a pro:',
        subnote: 'Make file handling a breeze—start your FREE trial now!'
      },
      noStep: {
        title: /* HTML */ `<span class="highlight">Don’t worry,</span> we’ve got
          the tool for you!`,
        description:
          'Instantly open RAR files on your Mac with help from Setapp apps:',
        subnote: 'Open any file easily—try Setapp FREE today!'
      },
      applist: [
        {
          title: 'Archiver',
          description: 'open, create, and manage RAR and other archives',
          imgSrc:
            'https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/194/10197/icon-1711963165-660a7c1d7fdbc.png'
        },
        {
          title: 'CleanMyMac X',
          description: 'keep your Mac organized and fast',
          imgSrc:
            'https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/399/42535/icon-681c5b30e19c0.jpg'
        }
      ]
    }
  }
]

async function initExp() {
  await waitFor(() => document.head && document.body, false, { ms: 20 })

  console.debug('** InitExp **')

  const currentPath = window.location.pathname

  if (
    location.href.includes('https://my.setapp.com/successful-registration') &&
    !location.href.includes('https://my.setapp.com/successful-registration-')
  ) {
    handleSuccessfulRegistration()
    return
  }

  if (!lavBlogLinks.includes(currentPath)) {
    console.log('Current page is not in blogLinks')
    return
  }

  const stylesEl = document.createElement('style')
  stylesEl.classList.add('exp-styles')
  stylesEl.innerHTML = stylesBlogHero
  document.head.appendChild(stylesEl)

  addBanner()
  changeTitlePosition()
  renderNewSearch()
  eventListeners()

  window.addEventListener('resize', moveSearchElement)
}

async function handleSuccessfulRegistration() {
  const successConfig = [
    {
      url: '/how-to/download-youtube-videos',
      caption:
        'Just a couple of steps to get Downie and start <br/> downloading your videos',
      secondColumn: {
        title: 'Get Downie through Setapp',
        description:
          'Downie is part of Setapp. Once you open the Setapp app, just one click — and Downie will be installed on your Mac.',
        icon: '/img/downie-logo.png'
      },
      thirdColumn: {
        title: 'Start Downloading Videos',
        description:
          'Enjoy Downie right away! <br/> Plus, you now have access to 260+ top-tier Mac apps for anything you need',
        icon: '/img/downie-video.png'
      }
    },
    {
      url: '/how-to/open-rar-files-on-mac',
      caption: 'Just a couple of steps to get Archiver and open your RAR file',
      secondColumn: {
        title: 'Get Archiver through Setapp',
        description:
          'Archiver is part of Setapp. Once you open the Setapp app, just one click — and Archiver will be installed on your Mac.',
        icon: '/img/rar-logo.png'
      },
      thirdColumn: {
        title: 'Open your RAR file on Mac',
        description:
          'Enjoy Archiver right away! <br/> Plus, you now have access to 260+ top-tier Mac apps for anything you need',
        icon: '/img/rar-third.png'
      }
    },
    {
      url: '/how-to/convert-youtube-to-mp3',
      caption:
        'Just a couple of steps to get Pulltube and streamline <br/> your video-to-audio workflow',
      secondColumn: {
        title: 'Get Pulltube through Setapp',
        description:
          'Pulltube is part of Setapp. Once you open the Setapp app, just one click — and Pulltube will be installed on your Mac.',
        icon: '/img/convert-logo.png'
      },
      thirdColumn: {
        title: 'Simplify your video-to-audio workflow',
        description:
          'Enjoy Pulltube right away! <br/> Plus, you now have access to 260+ top-tier Mac apps for anything you need',
        icon: '/img/convert-third.png'
      }
    }
  ]

  // /how-to/download-youtube-videos
  // /how-to/open-rar-files-on-mac
  // /how-to/convert-youtube-to-mp3
  const refferer = document.referrer || '/how-to/convert-youtube-to-mp3'

  const pageConfig = successConfig.find((config) =>
    refferer.includes(config.url)
  )

  if (!pageConfig) {
    console.error('No matching blog link found for the referrer')
    return
  }

  addModal()

  await waitFor('.successful-registration-desktop-ccr__title', false, {
    ms: 20
  })

  console.log('config link', pageConfig)

  const stylesEl = document.createElement('style')
  stylesEl.classList.add('exp-styles')
  stylesEl.innerHTML = stylesSuccessful
  document.head.appendChild(stylesEl)

  changeHeader(pageConfig)
  addSteps(pageConfig)

  function changeHeader(pageConfig) {
    if (!_$('.successful-registration-desktop-ccr__title')) return

    _$(
      '.successful-registration-desktop-ccr__title'
    ).innerHTML = `You're almost there!`
    _$('.successful-registration-desktop-ccr__title').insertAdjacentHTML(
      'afterend',
      /*html*/ `
      <div class='lav-caption'>${pageConfig.caption}</div>
    `
    )
  }

  function addSteps(pageConfig) {
    if (!_$('.successful-registration-desktop-ccr__steps')) return

    const markup = /* HTML */ `
      <div class="lav-steps">
        <div class="lav-step" data-step="1">
          <div class="lav-step__icon">
            <img class='lav-step__icon-default' src="${
              config.dir
            }/img/setapp-logo.png" />
          </div>
          <div class="lav-step__title">Download & Open Setapp</div>
          <div class="lav-step__descr">
            The InstallSetapp.zip should download automatically. <br/>
            If it didn’t — <span class='lav-step__download'>download manually</span>
          </div>
        </div>

        <div class='lav-divider'>
          ${getSvg('arrow1')}
        </div>
        
        <div class="lav-step" data-step="2">
          <div class="lav-step__icon">
            <img class='lav-step__icon-default' src="${config.dir}${
      pageConfig.secondColumn.icon
    }" />
          </div>
          <div class="lav-step__title">${pageConfig.secondColumn.title}</div>
          <div class="lav-step__descr">
            ${pageConfig.secondColumn.description}
          </div>
        </div>

        <div class='lav-divider'>
          ${getSvg('arrow2')}
        </div>

        <div class="lav-step" data-step="3">
          <div class="lav-step__icon">
            <img class='lav-step__icon-downloading' src="${config.dir}${
      pageConfig.thirdColumn.icon
    }" />
          </div>
          <div class="lav-step__title">${pageConfig.thirdColumn.title}</div>
          <div class="lav-step__descr">
            ${pageConfig.thirdColumn.description}
          </div>
        </div>
      </div>

      <div class='lav-control'>
        <div class='lav-btn__black lav-btn'>Download Setapp</div>
        <div class='lav-btn__trans lav-btn'>How Setapp works</div>
      </div>
    `

    _$('.successful-registration-desktop-ccr__steps').insertAdjacentHTML(
      'beforebegin',
      markup
    )

    _$('.lav-btn__black').addEventListener('click', () => {
      pushDataLayer(
        'Successful registration',
        'Click - Download Setapp',
        'First screen'
      )
      _$('.text_color-secondary .link-outer').click()
    })

    _$('.lav-btn__trans').addEventListener('click', () => {
      pushDataLayer(
        'Successful registration',
        'Click - How Setapp works',
        'First screen'
      )
      openModalVideo()
    })

    _$('.lav-step__download').addEventListener('click', () => {
      pushDataLayer(
        'Successful registration',
        'Click - Download manually link',
        'First screen'
      )
      _$('.text_color-secondary .link-outer').click()
    })
  }
}

function addModal() {
  initModal()

  const modalHtml = /* HTML */ `
    <div class='lav-modal__close'>
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="m32 16c0-8.83655385-7.1634462-16-16-16-8.83655385 0-16 7.16344615-16 16 0 8.8365538 7.16344615 16 16 16 8.8365538 0 16-7.1634462 16-16zm-10.2066462-5.7933538c.4806154.4806153.4806154 1.2599384 0 1.7405538l-4.0528 4.0528 4.0528 4.0528c.4806154.4806154.4806154 1.2599385 0 1.7405538-.4806153.4806154-1.2599384.4806154-1.7405538 0l-4.0528-4.0528-4.0528 4.0528c-.4806154.4806154-1.2599385.4806154-1.7405538 0-.48061543-.4806153-.48061543-1.2599384 0-1.7405538l4.0528-4.0528-4.0528-4.0528c-.48061543-.4806154-.48061543-1.2599385 0-1.7405538.4806153-.48061543 1.2599384-.48061543 1.7405538 0l4.0528 4.0528 4.0528-4.0528c.4806154-.48061543 1.2599385-.48061543 1.7405538 0z"></path></svg>
    </div>

    <div class='lavm-video__inner'>
     
    </div>
    `

  new Modal('lavm-video', modalHtml)
}

function openModalVideo() {
  Modal.open('.lavm-video')

  _$('.lavm-video__inner').innerHTML = /* HTML */ `
   <iframe width="100%" height="100%" src="https://www.youtube.com/embed/RZDDDyNssrc?autoplay=1&amp;amp;rel=0&amp;amp;showinfo=0&amp;amp;vq=hd720&amp;amp;enablejsapi=1&amp;" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
   `
}

function addBanner() {
  const currentLocation = window.location.pathname

  const currentArticleData = lavArticleData.find((article) =>
    currentLocation.includes(article.link)
  )

  if (!currentArticleData) {
    console.error('No article found for the current path')
    return
  }

  const {
    description,
    headerBlock: {
      description: headerBlockDescription,
      title: headerBlockTitle,
      imgSrc
    }
  } = currentArticleData

  const html = /* HTML */ `<div class="crs-hero">
      <div class="crs-hero-inner">
        <div class="crs-hero-text">
          <div class="crs-title-wrap" id="crs-title-wrap"></div>
          <div class="crs-hero-description">${description}</div>
        </div>
        <div class="crs-hero-solution">
          <div class="crs-hero-solution-note">Fastest solution</div>
          <div class="crs-solution-inner">
            <div class="crs-solution-content">
              <div class="crs-solution-title">${headerBlockTitle}</div>
              <div class="crs-solution-description">
                ${headerBlockDescription}
              </div>
              <div class="crs-solution-actions">
                <button
                  class="btn btn_md btn_primary accept-button"
                  id="crs-download"
                >
                  Download now
                </button>
                <div class="crs-solution-security">Security-tested</div>
              </div>
            </div>
            <div class="crs-solution-image">
              <img
                src="${imgSrc}"
                alt=""
                width="112"
                height="112"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>`

  document
    .querySelector('header > .page-header-wrapper')
    ?.insertAdjacentHTML('beforeend', html)
}

function changeTitlePosition() {
  const title = document.querySelector('h1')
  const titleWrap = document.querySelector('#crs-title-wrap')
  if (!title || !titleWrap) return
  titleWrap.appendChild(title)
}

function renderNewSearch() {
  document.querySelectorAll('.crs-search').forEach((el) => el.remove())

  const html = /* HTML */ `<div class="crs-search search js-search-block ">
    <button class="search-button"></button>
    <form
      action="https://setapp.com/blog"
      method="GET"
      class=""
      style="display: none"
    >
      <label for="blog-post-header-search" class="sr-only"
        >Search articles</label
      >
      <input
        class="search__input js-search-input"
        type="search"
        minlength="3"
        name="q"
        placeholder="Search"
        id=""
      />
    </form>
    <button
      type="button"
      class="search__close-btn js-close-btn search__close-btn_hidden"
      aria-label="Close search field"
    >
      <img
        src="https://cdn.setapp.com/master-731a4d2d754f61748ef2fc458fef61a7e6cf2144-415/static/main/images/pages/blog/close-icon.svg"
        alt="Close icon"
        width="20"
        height="20"
      />
    </button>
  </div>`

  const desktopSearchContainer = document.querySelector(
    '.site-navigation__menu-list .site-navigation__item-divider'
  )
  const mobileSearchContainer = document.querySelector(
    '.site-navigation__signup-button'
  )

  let searchElement = null
  const isMobileHeader = window.innerWidth < 1280

  if (!isMobileHeader && desktopSearchContainer) {
    desktopSearchContainer.insertAdjacentHTML('beforebegin', html)
    searchElement = desktopSearchContainer.previousElementSibling
  }
  if (isMobileHeader && mobileSearchContainer) {
    mobileSearchContainer.insertAdjacentHTML('beforebegin', html)
    searchElement = mobileSearchContainer.previousElementSibling
  }
}

function eventListeners() {
  const menuList = document.querySelector('.site-navigation__menu-list')
  const searchContainer = document.querySelector('.crs-search')
  const searchButton = searchContainer?.querySelector('.search-button')
  const searchForm = searchContainer?.querySelector('form')
  const closeButton = searchContainer?.querySelector('.search__close-btn')
  const searchInput = searchContainer?.querySelector('.js-search-input')
  const navContent = document.querySelector('.site-navigation__content')
  if (
    menuList &&
    searchContainer &&
    searchButton &&
    searchForm &&
    closeButton &&
    searchInput
  ) {
    // Animation CSS injection removed (now in hero/style.css)

    const showSearchForm = () => {
      // Hide all previous <li> elements
      let found = false
      for (const el of Array.from(menuList.children)) {
        if (el === searchContainer) {
          found = true
          break
        }
        if (el.tagName === 'LI') el.style.display = 'none'
      }
      // Show form with animation
      searchContainer.dataset['status'] = 'active'
      searchForm.style.display = 'block'
      // Force reflow for animation
      void searchForm.offsetWidth
      searchForm.classList.add('crs-search-form-animate')
      // Replace search button with close button
      searchButton.style.display = 'none'
      if (closeButton) {
        closeButton.style.display = ''
      }
      // Focus input
      const input = searchForm.querySelector('input')
      if (input) setTimeout(() => input.focus(), 200)
      // Add .search-active to navContent for mobile logo hiding
      if (window.innerWidth < 576 && navContent) {
        navContent.classList.add('search-active')
      }
      pushDataLayer('Blog Article', 'Click - Search', 'Header')
    }

    const hideSearchForm = () => {
      // Hide form with animation
      searchContainer.dataset['status'] = 'inactive'
      searchForm.classList.remove('crs-search-form-animate')
      setTimeout(() => {
        searchForm.style.display = 'none'
      }, 200)
      // Restore buttons
      searchButton.style.display = ''
      if (closeButton) {
        closeButton.style.display = 'none'
      }
      searchInput.value = ''
      // Restore menu
      for (const el of Array.from(menuList.children)) {
        if (el === searchContainer) break
        if (el.tagName === 'LI') el.style.display = ''
      }
      // Remove .search-active from navContent
      if (navContent) {
        navContent.classList.remove('search-active')
      }
    }
    // Show search form
    searchButton.addEventListener('click', showSearchForm)

    // Close button logic
    closeButton?.addEventListener('click', hideSearchForm)

    searchInput.addEventListener('focus', () => {
      closeButton?.classList.remove('search__close-btn_hidden')
    })

    searchInput.addEventListener('blur', hideSearchForm)
  }

  // Download button logic
  const downloadButton = document.querySelector('#crs-download')
  downloadButton?.addEventListener('click', async () => {
    let isClicked = false

    const controlDownloadButtons = document.querySelectorAll(
      'a[href*="signup"].promo-new-banner__cta-btn, a[href*="signup"].promo-banner__cta-btn'
    )

    controlDownloadButtons.forEach((button) => {
      if (button) {
        isClicked = true
        button.click()
      }
    })
    pushDataLayer('Blog Article', 'Click - Download now', 'First screen')
  })
}

function moveSearchElement() {
  const search = document.querySelector('.crs-search')

  if (!search) return

  search.parentElement?.removeChild(search)

  const desktopSearchContainer = document.querySelector(
    '.site-navigation__menu-list .site-navigation__item-divider'
  )
  const mobileSearchContainer = document.querySelector(
    '.site-navigation__signup-button'
  )

  const isMobileHeader = window.innerWidth < 1280

  if (!isMobileHeader && desktopSearchContainer) {
    desktopSearchContainer.insertAdjacentElement('beforebegin', search)
  }
  if (isMobileHeader && mobileSearchContainer) {
    mobileSearchContainer.insertAdjacentElement('beforebegin', search)
  }
}

// *** Utils *** //
function initModal() {
  class Modal {
    static list = []
    constructor(name, html) {
      if (!_$('.lav-modal')) {
        this.constructor.init()
      }

      if (this.constructor.list.find((item) => item.name === name)) {
        console.warn('Modal with this name already exists')
        return
      }

      this.el = document.createElement('div')
      this.el.classList.add('lav-modal__inner', name)
      this.name = name
      this.el.innerHTML = html

      _$('.lav-modal').insertAdjacentElement('beforeend', this.el)

      this.constructor.list.push(this)
    }

    static init() {
      document.body.insertAdjacentHTML(
        'beforeend',
        "<div class='lav-modal'></div>"
      )

      document.addEventListener('click', (e) => {
        if (
          e.target.classList.contains('lav-modal') ||
          e.target.closest('.lav-modal__close')
        )
          this.close()

        if (e.target.dataset.modal) {
          this.open(e.target.dataset.modal)
        } else if (e.target.closest('[data-modal]')) {
          this.open(e.target.closest('[data-modal]').dataset.modal)
        }
      })

      this.addStyles()
    }

    static open(modalName, cb) {
      document.body.classList.add('lav-modal-open')

      if (_$('.lav-modal__inner.active')) {
        _$('.lav-modal__inner.active').classList.remove('active')
      }

      _$(modalName).classList.add('active')

      if (typeof cb === 'function') cb()

      setTimeout(() => {
        _$('.lav-modal').classList.add('active')
      }, 100)
    }

    static close(cb) {
      if (_$('.lavm-video__inner iframe')) {
        _$('.lavm-video__inner iframe').remove()
      }
      document.body.classList.remove('lav-modal-open')

      _$('.lav-modal')?.classList.remove('active')

      if (typeof cb === 'function') cb()

      setTimeout(() => {
        _$('.lav-modal__inner.active')?.classList.remove('active')
      }, 400)
    }

    static addStyles() {
      const styles = /* css */ `
      .lav-modal {
        position: fixed;
        z-index: 999;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(248, 248, 244, .95);
        backdrop-filter: blur(3px);
        -webkit-backdrop-filter: blur(3px);
        transition: 0.35s;
        opacity: 0;
        pointer-events: none;
        padding: 20px;
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
        max-width: 100%;
        width: 100%;
        display: none;
        border: solid 1px #e5e5e5;
        border-radius: 20px;
        padding: 70px 85px;
        min-height: 550px;
      }
      .lav-modal__inner.active {
        display: block;
      }
      .lav-modal__close {
        position: absolute;
        right: 16px;
        top: 16px;
        cursor: pointer;
        transition: 0.35s;
        line-height: 0;
        font-size: 0;
        width: 40px;
        height: 40px;
        fill: #9d9ca2;
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
      .lavm-video__inner {
        overflow: hidden;
        line-height: 0;
        position: relative;
        padding: 20px;
        border-radius: 20px;
        height: 100%;
        background-color: #000;
      }
      .lavm-video__inner iframe {
        border-radius: 20px;
      }
    `

      const stylesEl = document.createElement('style')
      stylesEl.classList.add('exp-modal')
      stylesEl.innerHTML = styles
      document.head.appendChild(stylesEl)
    }
  }

  window.Modal = Modal
}
// *** HELPERS *** //

// Waiting for loading by condition
async function waitFor(condition, cb = false, customConfig = {}) {
  const config = {
    ms: 500, // repeat each 0.5 second if condition is false
    limit: 10, // limit in second seconds

    ...customConfig
  }

  if (typeof condition === 'function') {
    if (condition()) {
      if (typeof cb === 'function') cb()
      return
    }

    return new Promise((resolve) => {
      let limit = config.limit * 1000
      const interval = setInterval(function () {
        if (condition() || limit <= 0) {
          clearInterval(interval)
          if (limit > 0 && typeof cb === 'function') cb()
          resolve()
        }
        limit -= config.ms
      }, config.ms)
    })
  }

  if (condition.startsWith('.') || condition.startsWith('#')) {
    if (_$(condition)) {
      if (typeof cb === 'function') cb(_$(condition))
      return
    }

    return new Promise((resolve) => {
      const observer = new MutationObserver((mutations, observer) => {
        if (_$(condition)) {
          if (typeof cb === 'function') cb(_$(condition))
          observer.disconnect()
          resolve()
        }
      })

      observer.observe(document, { childList: true, subtree: true })
    })
  }
}

// Mutation Observer
function initMutation(observeEl = document.body, cbAdded, cbRemoved) {
  const el = typeof observeEl === 'string' ? _$(observeEl) : observeEl

  if (!el) return

  let observer = new MutationObserver((mutations, observer) => {
    for (let mutation of mutations) {
      if (typeof cbAdded === 'function') {
        for (let node of mutation.addedNodes) {
          if (!(node instanceof HTMLElement)) continue
          cbAdded(node, observer)
        }
      }

      if (typeof cbRemoved === 'function') {
        for (let node of mutation.removedNodes) {
          if (!(node instanceof HTMLElement)) continue
          cbRemoved(node, observer)
        }
      }
    }
  })

  observer.observe(el, { childList: true, subtree: true })

  return observer
}

// Intersection Observer
function initIntersection(observeEl, cb, customConfig) {
  const el = typeof observeEl === 'string' ? _$(observeEl) : observeEl

  if (!el || typeof cb !== 'function') return

  const config = {
    root: null,
    threshold: 0.3, // 0 - 1 | A threshold of 1.0 means that when 100% of the target is visible within the element specified by the root option, the callback is invoked.
    ...customConfig
  }

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      cb(entry, observer)
    })
  }, config)

  observer.observe(el)

  return observer
}

function focusTimeEvent(el, cb, viewElementProcent = 0.1) {
  let entryTime = 0
  initIntersection(
    el,
    ({ isIntersecting, time }) => {
      if (isIntersecting) {
        entryTime = time
      } else if (entryTime) {
        const diffTime = +((time - entryTime) / 1000).toFixed(1)
        cb(diffTime + 's')
        entryTime = 0
      }
    },
    { threshold: viewElementProcent }
  )
}

function visibilityEvent(el, cb, customConfig = {}) {
  const config = {
    threshold: 0.3,
    ...customConfig,
    timer: null
  }
  initIntersection(
    el,
    ({ isIntersecting, target }, observer) => {
      // console.log(target, isIntersecting);
      if (isIntersecting) {
        config.timer = setTimeout(() => {
          if (isElementInViewport(target)) {
            cb()
            observer.disconnect()
          }
        }, 3000)
      } else {
        clearTimeout(config.timer)
      }
    },
    config
  )
}

// Artificial delay
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

// Check if element in viewport
function isElementInViewport(selector) {
  const el = typeof selector === 'string' ? _$(selector) : selector

  if (!el) return false

  const rect = el.getBoundingClientRect()
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight

  return (
    rect.top + rect.height * 0.3 < windowHeight &&
    rect.bottom > rect.height * 0.3
  )
  // return (
  //   rect.top >= 0 &&
  //   rect.left >= 0 &&
  //   rect.bottom <=
  //     (window.innerHeight || document.documentElement.clientHeight) &&
  //   rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  // );
}

// Shordcode for selectors
function _$(selector, context = document) {
  return context.querySelector(selector)
}
function _$$(selector, context = document, toSimpleArray = false) {
  const arr = context.querySelectorAll(selector)

  return toSimpleArray ? Array.from(arr) : arr
}

// GA 4 events
function pushDataLayer(eventCategory = '', eventAction = '', eventLabel = '') {
  window.dataLayer = window.dataLayer || []

  try {
    const event = {
      event: 'crs-setapp',
      eventCategory: eventCategory,
      eventAction: eventAction,
      eventLabel: eventLabel,
      eventLabel2: '', //cd8
      eventValue: '',
      eventNonInteraction: true,
      intercomLoaded: true
    }

    console.debug('** GA4 Event **', event)

    if (!config.debug) {
      dataLayer.push(event)
    }
  } catch (e) {
    console.log('** GA4 Error **', e)
  }
}

// Slider
function connectSplide() {
  const sliderStyles = document.createElement('link')
  sliderStyles.rel = 'stylesheet'
  sliderStyles.href =
    'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide-core.min.css'
  document.head.appendChild(sliderStyles)

  let sliderScript = document.createElement('script')
  sliderScript.src =
    'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js'
  document.head.appendChild(sliderScript)
}

// *** Exp BG process *** //

//Clarity
// if (
//   !config.debug &&
//   Array.isArray(config.clarity) &&
//   config.clarity.length === 3
// ) {
//   waitFor(
//     () => typeof clarity == 'function',
//     () => {
//       clarity(...config.clarity)
//     }
//   )
// }

// Svg objects
function getSvg(name) {
  const svgObj = {
    arrow1: `<svg xmlns="http://www.w3.org/2000/svg" width="82" height="32" viewBox="0 0 82 32" fill="none">
  <path d="M78.154 22.0488C64.7921 12.4721 34.3284 -2.87546 1.63052 13.9424" stroke="black" stroke-width="2.65833" stroke-linecap="round"/>
  <path d="M77.1154 16.0702L79.5788 22.9494L72.337 23.5956" stroke="black" stroke-width="2.65833" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    arrow2: `<svg xmlns="http://www.w3.org/2000/svg" width="82" height="32" viewBox="0 0 82 32" fill="none">
  <path d="M78.049 9.95122C64.6871 19.5279 34.2235 34.8755 1.52553 18.0576" stroke="black" stroke-width="2.65833" stroke-linecap="round"/>
  <path d="M77.0105 15.9298L79.4739 9.05063L72.2321 8.40437" stroke="black" stroke-width="2.65833" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
  }

  return svgObj[name]
}
