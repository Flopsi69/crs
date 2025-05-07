;(function () {
  console.debug('*** Experiment started ***')

  // Config for Experiment
  const config = {
    // dir: 'http://127.0.0.1:5501/oakwell/homepage',
    dir: 'https://flopsi69.github.io/crs/oakwell/homepage',
    clarity: ['set', 'new_hp_v3', 'variant_1'],
    debug: false
  }

  // Styles for Experiment
  const styles = /* css */ `
  .header-runline {
    display: none;
  }

  .lav-quincy {
    font-family: quincycf, sans-serif;
  }
  .lav-container {

  }

  .lavh-hero {
    text-align: center;
    padding-top: 190px;
    padding-bottom: 80px;
    position: relative;
    z-index: 13;
    background: #0C5947;
  }
  .lavh-hero .main-anim-wave {
    pointer-events: none;
  }
  .lavh-hero > .main-anim-wave svg path {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }

  .lav-video {
    position: relative;
    margin-top: 120px;
  }
  .lav-video .img-video {
    border-radius: 5.625rem;
    padding-top: 56.397%;
    position: relative;
    z-index: 2;
    overflow: hidden;
  }
  .lav-video .img-video:before {
    content: '';
    border-radius: inherit;
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.30) 20.82%, rgba(0, 0, 0, 0.00) 58.62%);
  }
  .lav-video .img-video video {
    display: block;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    -o-object-position: center center;
    object-position: center center;
    border-radius: 5.625rem;
    position: absolute;
    left: 0;
    top: 0;
  }

  .b-main.on-main {
    display: none;
  }
  .b-main-left-right.second {
    display: none;
  }
 

  .lav-products {
    position: relative;
  }
  .lav-products__caption {
    margin-top: 24px;
    color: #DDF2D0;
    font-size: 16px;
    font-weight: 500;
    line-height: 120%;
    letter-spacing: 5.76px;
    text-transform: uppercase;
  }
  .lav-products--one {
    padding: 120px 0 15rem;
    background: #0C5947;
  }
  .lav-products--three {
    padding: 120px 0 15rem;
    background: #0C5947;
  }
  .lav-product {
    display: flex;
    flex-flow: column;
  }
  .lav-product__image img {
    border-radius: 40px;
  }
  .lav-products__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    margin-top: 64px;
  }
  .lav-products__image {
    line-height: 0;
    border-radius: 32px;
    overflow: hidden;
  }
  .lav-product__info {
    margin-top: 32px;
    display: flex;
    flex-flow: column;
    flex: 1;
  }
  .lav-product__title {
    overflow: hidden;
    color: #DDF2D0;
    text-overflow: ellipsis;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
  }
  .lav-product__descr {
    color: #DDF2D0;
    font-size: 16px;
    font-weight: 400;
    line-height: 140%;
    margin: 18px 0;
  }
  .lav-product__link {
    max-width: 13rem;
    margin-top: auto;
    width: 100%;
  }
  .lav-products__wave {
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    bottom: -150px;
    height: auto;
    pointer-events: none;
  }
  .lav-products__wave-mob {
    display: none;
  }
  @media(max-width: 1200px) {
    .lav-products__wave {
      bottom: -9rem;
    }
  }
  .lav-products--two {
    background: #DDF2D0;
    border-radius: 90px 90px 0 0;
    padding: 5.6rem 0 15rem;
  }
  .lav-products--two .lav-products__title {
    color: #0C5947;
  }
  .lav-products--two .lav-products__caption {
    color: #0C5947;
  }
  .lav-products--two .lav-product__title {
    color: #0C5947;
    margin-bottom: 18px;
  }
  .lav-products--two .lav-products__wave {
    transform: scaleX(-1);
  }
  .lav-products--two .lav-products__leaf {
    position: absolute;
    top: 0;
    right: 58px;
    transform: translateY(-50%);
  }

  .lav-benefits {
    padding: 5rem 0 13.5rem;
  }
  .lav-benefits__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }
  .lav-benefit {
    display: flex;
    align-items: center;
    gap: 38px;
  }
  .lav-benefit__image {
    line-height: 0;
    overflow: hidden;
    width: 300px;
    height: 300px;
    border-radius: 32px;
    flex-shrink: 0;
  }
  @media(max-width: 1200px) {
    .lav-benefit__image {
      width: 200px;
      height: 200px;
    }
  }
  .lav-benefit__image img {
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
  }
  .lav-benefit__info {
    color: #DDF2D0;
  }
  .lav-benefit__title {
    font-size: 26px;
    font-weight: 400;
    line-height: 1;
  }
  .lav-benefit__descr {
    margin-top: 18px;
    margin-bottom: 26px;
    font-size: 16px;
    font-weight: 400;
    line-height: 140%;
  }
  .lav-benefit__link {
    max-width: 207px;
    width: 100%;
  }

  .craftpartners-slider .swiper-slide .item {
    border: 1px solid var(--Light-Green, #DDF2D0);
    background: rgba(185, 209, 177, 0.10);
    backdrop-filter: blur(7px);
  }

  .b-main-craftpartners + .b-marquee {
    background: #0d5947;
    position: relative;
  }

  .b-main-craftpartners + .b-marquee > svg {
    display: block;
    width: 100%;
    height: auto;
    position: absolute;
    left: 0;
    top: 22rem;
    pointer-events: none;
  }

  .b-main-craftpartners > .container {
    z-index: 3;
  }

  .b-main-craftpartners + .b-marquee .mob {
    display: none;
  }

  .b-main-craftpartners + .b-marquee .wave {
    position: absolute;
    left: 0;
    top: -12rem;
    width: 110%;
    pointer-events: none;
  }
  .b-main-craftpartners + .b-marquee:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -170px;
    height: 200px;
    background: #0d5947;
  }
  
  .b-main-craftpartners {
    position: relative;
    background: #0C5947;
    padding-top: 2.5rem;
    padding-bottom: 0.5rem;
  }
  .b-main-craftpartners>svg {
    display: block;
    width: 100%;
    height: auto;
    position: absolute;
    left: 0;
    bottom: 100%;
    margin-bottom: -1px;
  }
  .b-main-craftpartners>svg.mob {
    display: none;
  }

  .b-main-left-right.first > .desk, .b-main-left-right.first > .mob {
    display: none;
  }

  .b-main-left-right.first {
    position: relative;
    padding-bottom: 2.5rem;
    background: #3C6C60 url('${config.dir}/img/wave-middle.svg') no-repeat 0 85%;
    background-size: 100% auto;
    padding-top: 2rem;
  }
  .b-main-left-right.first .box .left .img.aos-animate>svg, .b-main-most-services .box.aos-animate>svg {
    opacity: 1!important;
  }
  .b-main-left-right.first .subtitle {
    color: #DDF2D0;
    font-size: 16px;
    font-weight: 500;
    line-height: 120%;
    letter-spacing: 5.76px;
    text-transform: uppercase;
  }

  .b-main-left-right.first p {
    position: relative;
    padding-left: 36px;
    color: #DDF2D0;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    margin-bottom: 0;
  }
  .b-main-left-right.first p br {
    display: none;
  }
  .b-main-left-right.first p + p {
    margin-top: 1rem;
  }
  .b-main-left-right.first p:before {
    content: '';
    position: absolute;
    left: 0;
    top: 3px;
    background-image: url('${config.dir}/img/leaf-dot.svg');
    background-size: contain;
    background-repeat: no-repeat;
    width: 20px;
    height: 20px;
  }

  .b-main-left-right .box .right {
    padding-right: 1.5rem;
  }
  .b-main-left-right .box h2 {
    margin-right: 0;
  }
  .lav-better__buttons {
    display: flex;
    gap: 32px;
    margin-top: 42px;
  }
  @media(max-width: 1280px) {
    .lav-better__buttons {
      gap: 1rem;
      flex-flow: column;
    }
  }
  .b-main-left-right .box .link-btn {
    margin: 0;
    min-width: 167px;
    white-space: nowrap;
    flex-grow: 1;
  }

  .b-goog-review {
    margin-top: 2rem;
    background: #0C5947;
    border-radius: 90px 90px 0 0;
    padding-bottom: 13.425rem;
  }

  .b-goog-review h2 {
    margin-bottom: 2rem;
  }

  .b-vert-scroll-cards {
    border-radius: 90px 90px 0 0;
    margin-top: -5rem;
    background: #3C6C60;
    padding-bottom: 8.725rem;
  }

  .b-vert-scroll-cards .cards .card .title h3 {
    font-size: 32px;
    color: #0C5947;
    font-weight: 400;
    line-height: 1;
  }
  .b-vert-scroll-cards .cards .card p {
    color: #0C5947;
    font-size: 16px;
    font-weight: 400;
    line-height: 140%;
  }

  .lav-memorable__head {
    margin-bottom: 64px;
  }
  .lav-memorable__caption {
    margin-top: 24px;
    color: #DDF2D0;
    font-size: 16px;
    font-weight: 500;
    line-height: 120%;
    letter-spacing: 5.76px;
    text-transform: uppercase;
  }
  .b-vert-scroll-cards .scrl-fix h2, .b-vert-scroll-cards .scrl-fix p {
    display: none!important;
  }
  .lav-memorable__image {
    position: relative;
    padding-top: 75%;
    border-radius: 32px;
    overflow: hidden;
  }
  .lav-memorable__image img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .b-vert-scroll-cards .box .right {
    padding-left: 1rem;
    padding-right: 3rem;
  }
  .b-main-wave.top, .b-main-wave.top + .b-marquee {
    display: none;
  }
  .b-main-left-right.third {
    display: none;
  }
  .b-form {
    position: relative;
  }
  .b-form .box {
    background: #fff;
  }
  .b-form .box .right .subtitle {
    color: #0C5947;
  }
  .b-main-press > svg {
    display: none;
  }
  .b-main-press {
    padding-top: 4rem;
  }
  .lav-memorable__btn {
    max-width: 27.375rem;
    width: 100%;
  }
  .lav-memorable__btn-wrap {
    text-align: center;
    margin-top: 64px;
  }


  .b-main-press .box .scene .item img[src*='Forbes-Travel'], .b-main-press .box .scene .item img[src*='Entrepreneur_magazine'] {
    filter: invert(99%) sepia(99%) saturate(2%) hue-rotate(250deg) brightness(109%) contrast(101%);
  }

  .b-main-press h2 {
    font-size: 4rem;
  }
 
  .b-other-articles h2 br {
    display: none;
  }
  .b-other-articles .blog-cards .card .text h4 {
    color: #0C5947;
  }
  .b-other-articles .blog-cards .card .text p {
    color: #0C5947;
  }

  .lav-gift {
    position: relative;
    padding-bottom: 80px;
  }
  .mob.lav-wave {
    display: none;
  }
  .desk.lav-wave {
    display: block;
    width: 100%;
    height: auto;
    position: absolute;
    left: 0;
    top: -23.4375rem;
  }
  .b-main-wave.bot {
    padding-bottom: 4.5rem;
  }
  .lav-wave-top {
    display: block;
    width: 100%;
    height: auto;
    position: absolute;
    bottom: 0;
    left: 0;
    margin-top: -1px;
    transform: translateY(68%);
  }
  @media(max-width: 1100px) {
    .lav-wave-top {
      transform: translateY(58%);
    }
  }
  .b-start-doing {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  .lav-gift .b-main-giftcards h2 {
    color: #0C5947;
  }
  .b-main-giftcards+.b-marquee {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
  .lav-gift .b-main-giftcards .subtitle {
    text-transform: none;
    color: #0C5947;
    font-size: 20px;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: normal;
  }
  .lav-gift .b-main-wave h2 {
    color: #0C5947;
  }
  .lav-gift .b-main-wave h2 + p {
    text-transform: none;
    color: #0C5947;
    font-size: 20px;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: normal;
  }


  .lav-faq {
    padding-top: 90px;
  }
  .lav-faq__head {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: space-between;
  }
  .lav-faq__title {
    color: #0C5947;
    font-size: 64px;
    font-weight: 400;
    line-height: 102%;
  }
  .lav-faq__title span {
    display: none;
  }
  .lav-faq__btn {
    max-width: 305px;
    height: 56px;
    font-size: 16px;
    width: 100%;
  }
  .lav-faq__list {
    margin-top: 64px;
  }
  .lav-faq .container {
    padding-left: 90px;
    padding-right: 90px;
  }
  .lav-faq .accordion-faq__title {
    border-top: 1px solid #0C5947;
  }
  .lav-faq .accordion-faq__title .a-text {
    color: #0C5947;
    font-size: 16px;
    font-weight: 500;
    line-height: 120%;
    letter-spacing: 1.12px;
    text-transform: uppercase;
  }
  .lav-faq .accordion-faq__title .a-icon {
    width: 42px;
    height: 42px;
    filter: invert(24%) sepia(10%) saturate(5818%) hue-rotate(126deg) brightness(98%) contrast(91%);
  }
  .lav-faq .text-section {
    font-size: 16px;
  }
  .lav-faq .text-section p + p {
    margin-top: 12px;
  }
  .b-start-doing>svg {
    display: none;
  }
  .b-start-doing>.container {
    display: none;
  }
  .b-start-doing {
    background: #fff;
    padding-top: 0;
    padding-bottom: 15rem;
  }
  .b-form .box .soc {
    display: none;
  }
  .lav-marq-wave {
    display: none;
  }
  footer[data-wpr-lazyrender] {
    content-visibility: initial;
  }
  footer {
    z-index: 10;
  }
  .b-main-most-services .box .right .item span {
    font-family: quincycf, sans-serif;
  }
  .b-main-most-services .box .right {
    padding-left: 0;
    width: 55%;
  }
  .blog-cards .card .text .tag {
    padding-top: 2px;
  }
  @media(max-width: 1025px) {
    .lav-wave-top {
      bottom: 2rem;
      transform: translateY(99%);
    }
    .b-main-most-services .box .right {
      width: 100%;
    }
    .lav-product__link {
      max-width: 207px;
    }
    .lav-products__wave {
      display: none;
    }
    .b-main-craftpartners>svg {
      display: none;
    }
    .h2, h2 {
      font-size: 3rem;
    }
    .lavh-hero {
      padding-top: 8rem;
      padding-bottom: 2.5rem;
    }
    .lav-video {
      margin-top: 0;
    }
    .lav-video {
      z-index: 0;
    }
    .lav-video .img-video {
      margin-left: -1rem;
      margin-right: -1rem;
      border-radius: 0;
      padding-top: 80.5%;
    }
    .lav-video .img-video video {
      border-radius: 0;
    }
    .lav-products--one {
      padding-top: 2rem;
      padding-bottom: 2rem;
    }
    .lav-products--three {
      padding-top: 2rem;
      padding-bottom: 2rem;
    }
    .lav-products__caption {
      margin-top: 1rem;
      font-size: 1rem;
    }
    .lav-products__list {
      margin-top: 2rem;
      gap: 1rem;
      margin-left: -1rem;
      margin-right: -1rem;
      padding-left: 1rem;
      padding-right: 1rem;
      padding-bottom: 1rem;
      overflow-x: auto;
    }
    .lav-product {
      width: 255px;
    }
    .lav-product__info {
      margin-top: 1rem;
    }
    .lav-product__title {
      color: #fff;
      font-weight: 500;
    }
    .b-main-left-right .box h2 {
      margin-bottom: 1rem;
    }
    .b-main-left-right .box .right {
      padding-right: 0;
    }
    .b-main-left-right .box .right {
      display: flex;
      flex-flow: column;
    }
    .b-main-left-right.first .box .right .left {
      order: 1;
      margin-bottom: 0!important;
      margin-top: 2rem;
    }
    .lav-better__buttons {
      order: 2;
      margin-top: 2rem;
    }
    .b-main-left-right.first .subtitle {
      margin-bottom: 2rem;
    }
    .b-main-left-right.first {
      padding-bottom: 0;
    }
    .b-main-most-services .box {
      padding-bottom: 32px 32px 38px;
    }
    .b-main-most-services {
      padding: 4rem 0;
    }
    .b-goog-review {
      margin-top: 0;
      border-radius: 2rem 2rem 0px 0px;
    }
    .b-goog-review {
      padding: 4rem 0 8.5rem;
    }
    .b-goog-review h2 {
      margin-bottom: 1rem;
    }
    .b-vert-scroll-cards {
      border-radius: 2rem;
      padding-bottom: 4rem;
      margin-top: -4rem;
    }
    .lav-memorable__caption {
      margin-top: 2rem;
    }
    .lav-memorable__head {
      margin-bottom: 2rem;
    }
    .b-vert-scroll-cards .cards .card {
      padding: 20px;
    }
    .b-vert-scroll-cards .cards .card .title {
      padding: 0;
      margin-bottom: 1rem;
    }
    .b-vert-scroll-cards .cards .card .title h3 {
      font-size: 26px;
      padding-right: 2rem;
    }
    .lav-memorable__btn-wrap {
      margin-top: 2rem;
    }
    .lav-memorable__btn {
      font-size: 15px;
      padding: 0;
    }
    .lav-products--two .lav-products__leaf {
      display: none;
    }
    .lav-products--two {
      border-radius: 2rem 2rem;
      padding: 4rem 0 3rem;
    }
    .lav-benefits {
      padding: 4rem 0;
    }
    .lav-benefit {
      align-items: flex-start;
      gap: 1.5rem;
    }
    .lav-benefit__image {
      width: 6.9375rem;
      height: 6.9375rem;
      border-radius: 1rem;
    }
    .lav-benefits__list {
      gap: 42px;
      grid-template-columns: repeat(1, 1fr);
    }
    .lav-benefit__descr {
      margin-top: 1rem;
      margin-bottom: 20px;
      font-size: 14px;
    }
    .lav-benefit__link {
      max-width: 145px;
      height: 43px;
    }
    .b-main-craftpartners {
      padding-top: 4rem;
    }
    .b-form .box .anim-box {
      pointer-events: none;
    }
    .b-main-craftpartners + .b-marquee {
      padding-bottom: 2rem;
      padding-top: 2.5rem;
    }
    .b-form {
      padding-bottom: 0;
    }
    .b-form .box {
      padding: 4rem 20px;
    }
    .b-form .box .soc {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      margin-top: 30px;
    }
    .b-main-press h2 {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
    .b-other-articles.b-main-articles {
      padding: 0 0 4rem;
    }
    .b-other-articles.b-main-articles h2 {
      margin-bottom: 2rem;
      font-size: 50px;
      padding-right: 20px;
    }
    .desk.lav-wave {
      display: none;
    }
    .blog-cards .card .text {
      padding-bottom: 1.5rem;
    }
    .b-main-giftcards {
      padding: 4rem 0 1rem;
    }
    .b-main-giftcards .box h2 br {
        display: none;
    }
    .b-main-wave.bot {
      padding-top: 1rem;
      padding-bottom: 4rem;
    }
    .lav-gift {
      padding-bottom: 2rem;
    }
    .b-start-doing>svg.mob {
      display: none;
    }
    .lav-faq {
      padding-top: 4rem;
    }
    .lav-faq .container {
      padding-left: 1rem;
      padding-right: 1rem;
    }
    .lav-faq__btn {
      display: none;
    }
    .lav-faq__title {
      font-size: 3rem;
    }
    .lav-faq__title span {
      display: inline;
    }
    .lav-faq__list {
      margin-top: 1.5rem;
    }
    .b-start-doing {
      border-radius: 2rem;
    }
  }
  @media(max-width: 768px) {
    .lav-product__video {
      display: none;
      line-height: 0;
    }
    body .uwy.userway_p2 .userway_buttons_wrapper {
      display: none;
    }
    .lav-products--three .lav-product:nth-child(2) {
      order: -2;
    }
    .lav-products--three .lav-product:nth-child(4) {
      order: -1;
    }
    .lav-products--three .lav-product__video {
      position: relative;
      display: block;
      height: 340px;
      overflow: hidden;
      border-radius: 32px;
    }
    .lav-products--three .lav-product__video video {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      bottom: 0;
      height: 100%;
    }
    .lav-modal--video .lavm-short__control, .lav-modal--video .lavm-short__pagination, .lav-modal--video .lavm-short__title-old, .lav-modal--video .lavm-short__caption-old {
      display: none;
    }
    .lav-products--three .lav-product__image {
      display: none;
    }
    .lav-product__video-img {
      position: absolute;
      z-index: 2;
      right: 23px;
      bottom: 25px;
      width: 22px;
    }
    .lavh-tickers {
      overflow: visible;
      margin-top: 28px;
      text-align: left;
    }
    .lavh-tickers_hide {
      display: none!important;
    }
    .lavh-tickers .marquee {
      gap: 14px;
    }
    .lavh-tickers:not(.marquee-block) .marquee {
      display: grid;
      gap: 14px;
    }
    .lavh-tickers-item {
      position: relative;
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 6px;
      padding-right: 12px;
      border-radius: 32px;
    }
    .lavh-tickers-item:before {
      content: '';
      position: absolute;
      right: 12px;
      top: -7px;
      width: 18px;
      height: 14px;
      background: url('${config.dir}/img/quote.svg') center no-repeat;
      background-size: contain;
    }
    .lavh-tickers-item__image {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 0;
    }
    .lavh-tickers-item__title {
      color: #A6BFB9;
      font-size: 9px;
      font-style: normal;
      font-weight: 700;
      line-height: 12px;
      letter-spacing: 0.63px;
      text-transform: uppercase;
    }
    .lavh-tickers-item__caption {
      color: #DDF2D0;
      font-size: 10px;
      font-style: normal;
      font-weight: 700;
      line-height: 16px;
      letter-spacing: 0.7px;
      text-transform: uppercase;
      margin-top: 2px;
    }
    
    .lav-shorts {
      display: flex;
      gap: 10px;
      margin: 16px -1rem 12px;
      overflow-x: auto;
      padding: 0 1rem;
    }
    .lav-short {
      width: 73px;
      flex-shrink: 0;
    }
    .lav-short__image {
      line-height: 0;
      text-align: center;
    }
    .lav-short__image img {
      max-width: 64px;
      margin: auto;
    }
    .lav-short__title {
      color: #DDF2D0;
      font-size: 12px;
      font-weight: 400;
      line-height: 140%; 
      margin-top: 5px;
    }
    .lavh-hero {
      padding: 0 1rem;
    }
    .lavh-hero__title {
      color: #DDF2D0;
      text-align: center;
      font-size: 40px;
      font-weight: 400;
      line-height: 42px;
      max-width: 325px;
      margin: auto;
    }
    .lavh-hero__caption {
      color: #DDF2D0;
      text-align: center;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 140%;
      margin-top: 12px;
    }
    .lavh-hero__btn-wrap {
      display: flex;
      height: 116px;
      margin: 32px 0 44px;
    }
    .lavh-hero__btn {
      color: #0C5947;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 17.6px;
      margin: auto;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
    }
    .lavh-hero__btn.lavh-hero__btn--fixed {
      position: fixed;
      z-index: 999;
      bottom: 3.5rem;
      right: 1.5rem;
    }
    .lavh-hero__btn span {
      position: relative;
      z-index: 9;
    }
    .lavh-hero__btn:before {
      content: '';
      position: absolute;
      margin-bottom: 0px;
      z-index: 5;
      transition: width 0.5s, height 0.5s, padding 0.5s, bottom 0.5s;
      background: 0px 0px;
      width: 7.25rem;
      height: 7.25rem;
      cursor: pointer;
      text-align: center;
      background: rgb(221, 242, 208);
      border-radius: 50%;
      animation: 10s linear 0s infinite alternate both running deform;
      transition: .3s;
      border: 1px solid #0d5947;
    }
    .lavh-hero__btn.lavh-hero__btn--fixed:before {
      width: 6.5rem;
      height: 6.5rem;
    }
    .lavh-hero__rates {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 32px;
    }
    .lavr-rate__logo {
      line-height: 0;
    }
    .lavr-rate__logo img {
      height: 26px;
    }
    .lavr-rate__mark {
      margin-top: 12px;
      margin-bottom: 2px;
      color: #FAB687;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 20px;
    }
    .lavr-rate__reviews {
      color: #DDF2D0;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
    }
    .lav-loc__wrap {}
    .lav-loc__title {
      color: #FFF;
      font-size: 16px;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: 5.76px;
      text-transform: uppercase;
      margin-top: 48px;
      margin-bottom: 24px;
    }
    .lav-loc__list {
      display: flex;
      gap: 12px;
      overflow-x: auto;
      text-align: left;
      margin: 0 -16px;
      padding: 0 16px;
    }
    .lav-loc {
      border-radius: 32px;
      background: #186150;
      width: 320px;
      flex-shrink: 0;
      overflow: hidden;
    }
    .lav-loc__image {
      background-size: 100%;
      height: 197px;
    }
    .lav-loc {}
    .lav-loc {}
    .lav-loc__info {
      padding: 16px;
    }
    .lav-loc__subtitle {
      color: #FFF;
      font-family: quincycf, sans-serif;
      font-size: 30px;
      font-weight: 400;
      line-height: 36px;
    }
    .lav-loc__sublist {
      margin-top: 12px;
      color: #D3EFC2;
      font-size: 14px;
      font-weight: 400;
      line-height: 22px;
    }
    .lav-loc__subitem {
      display: flex;
      align-items: center;
      gap: 8px;
      color: #D3EFC2;
    }
    .lav-loc__subitem:nth-child(1) img {
      height: 16px;
      width: auto;
    }
    .lav-loc__subitem:nth-child(2) img {
      height: 14px;
      width: auto;
    }
    .lav-loc__subitem:nth-child(3) img {
      height: 9px;
      width: auto;
    }
    .lav-loc__subitem + .lav-loc__subitem {
      margin-top: 8px;
    }
    .lav-loc {}
    .lav-loc {}
    .lav-loc__footer {
      display: flex;
      justify-content: space-between;
      gap: 16px;
      border-top: 1px solid rgba(255, 255, 255, 0.05);
      background: var(--grad-1, linear-gradient(90deg, rgba(221, 242, 208, 0.00) 0%, rgba(221, 242, 208, 0.06) 56.5%));
      padding: 24px;
    }
    .lav-loc__available {
      color: #FFF;
      font-size: 14px;
      font-weight: 700;
      line-height: 26px;
      letter-spacing: 0.56px;
      text-transform: uppercase;
    }
    .lav-loc__btn {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 48px;
      padding: 10px 15px;
      border-radius: 50px;
      background: #FFF;
      color: #0C5947;
      font-size: 16px;
      font-weight: 500;
      line-height: 110%;
      white-space: nowrap;
    }

    .lav-benefits__list .lav-benefit:nth-child(3) {
      order: -1;
    }
    .b-main-left-right .box .link-btn {
      max-width: 100%;
    }
    .reviews-slider {
      padding: 0;
    }
    .lav-memorable__btn {
      font-size: 1rem;
    }
    .lav-benefits__list .lav-benefit:nth-child(1) {
      order: -2;
    }
    .b-main-press h2 {
      margin-bottom: 1.25rem;
    }
    .b-main-craftpartners + .b-marquee {
      padding-bottom: 2.5rem;
    }
    .b-vert-scroll-cards .box .right {
      display: none;
    }
    .lav-benefit__image {
      width: 6.937rem;
      height: 9.375rem;
    }
    .lav-faq .accordion-faq__title .a-icon {
      width: 26px;
      height: 26px;
      margin-top: -2px;
    }
    .mob.lav-wave {
      display: block;
      position: absolute;
      z-index: 1;
      transform: scaleX(-1) translateY(-99%);
      top: 0;
      width: 100%;
      height: auto;
    }
    .b-main-giftcards {
      padding-top: 1rem;
    }
    .b-other-articles.b-main-articles {
      padding-bottom: 8rem;
    }
    .lav-gift .b-main-wave h2 + p {
      font-size: 1rem;
    }
    .lav-gift .b-main-giftcards .subtitle {
      font-size: 1rem;
    }

    .lavh-hero {
      padding-top: 0;
      padding-bottom: 2rem;
    }
    .lav-products__wave {
      display: none;
    }
    .lav-products--one {
      position: relative;
      z-index: 1;
    }
    .lav-products--three {
      position: relative;
      z-index: 1;
    }
    .b-main-craftpartners + .b-marquee .wave {
      display: none;
    }
    .b-main-craftpartners + .b-marquee > svg {
      display: none;
    }
    .lav-marq-wave {
      display: block!important;
      top: 100%!important;
      z-index: 1;
    }
    .b-form {
      padding-top: 4.2rem;
    }
    .b-main-craftpartners + .b-marquee:before {
      display: none;
    }
    .lav-products--two .lav-products__wave-mob {
      display: none;
    }
    .lav-products__wave-mob {
      display: block;
      bottom: 0;
      transform: translateY(100%);
    }
    .b-main-left-right.first {
      padding-top: 5rem;
    }
    .main-anim-wave {
      top: -15rem;
      right: -10rem;
    }
    .lav-gift + .pin-spacer {
      margin-bottom: 2rem!important;
    }
    .b-insta  {
      padding-top: 4rem!important;
    }
  }
  @media(max-width: 480px) {
    .b-start-doing {
      padding-bottom: 8rem;
    }
  }
  
`

  const stylesEl = document.createElement('style')
  stylesEl.classList.add('exp-styles')
  stylesEl.innerHTML = styles

  // *** Logic *** //
  waitFor(
    () => {
      return (
        _$('.mainPage') &&
        _$('.b-main-left-right.first') &&
        _$('.b-main-press') &&
        _$('.b-goog-review') &&
        _$('.b-main-craftpartners') &&
        _$('.b-main-left-right.third') &&
        _$('.b-start-doing')
      )
    },
    initExp,
    { ms: 20 }
  )

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
        ) {
          const name = _$('.lavm-short__title').textContent.trim()

          if (!_$('.lav-modal--video')) {
            pushDataLayer(
              'exp_hp3_click_04',
              'Close - ' + name,
              'click',
              'Video stories'
            )
          } else {
            pushDataLayer(
              'exp_hp3_click_09',
              'Close - ' + name,
              'click',
              'Featured Spa Services'
            )
          }

          this.close()
        }

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
      _$('.lav-short--active')?.classList.remove('lav-short--active')
      document.body.classList.remove('lav-modal-open')

      _$('.lav-modal')?.classList.remove('active')

      if (typeof cb === 'function') cb()

      setTimeout(() => {
        _$('.lav-modal__inner.active')?.classList.remove('active')
      }, 400)
    }

    static addStyles() {
      const styles = /*css*/ `
      .lav-modal {
        position: fixed;
        z-index: 999;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(0,0,0,.1);
        backdrop-filter: blur(3px);
        -webkit-backdrop-filter: blur(3px);
        transition: 0.35s;
        opacity: 0;
        pointer-events: none;
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
        width: 100%;
        display: none;
        margin: auto;
        height: 100%;
      }
      .lav-modal__inner.active {
        display: block;
      }
      .lav-modal__close {
        position: absolute;
        top: 34px;
        right: 16px;
        cursor: pointer;
        transition: 0.35s;
        line-height: 0;
        z-index: 4;
      }
      .lav-modal__close svg {
        width: 26px;
        height: 26px;
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

      .lavm-short {
        position: relative;
        background: black;
        overflow: hidden;
      }
      .lavm-short__video-el {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        height: 100%;
      }
      .lavm-short__info {
        display: flex;
        flex-flow: column;
        z-index: 1;
        padding: 34px 16px;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.60) 15%, rgba(0, 0, 0, 0.00) 38.01%);
      }
      .lavm-short__title {
        color: #DDF2D0;
        font-size: 32px;
        line-height: 36px;
        padding-right: 40px;
      }
      .lavm-short__caption {
        color: #DDF2D0;
        font-size: 16px;
        font-weight: 400;
        line-height: 140%;
        margin-top: 8px;
      }
      .lavm-short__button {
        border-radius: 50px;
        background: #DDF2D0;
        width: 234px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 48px;
        color: #0C5947;
        font-size: 16px;
        font-weight: 500;
        line-height: 110%;
        margin-top: auto;
        align-self: center;
      }
      .lavm-short__pagination {
        position: absolute;
        z-index: 2;
        top: 16px;
        left: 16px;
        right: 16px;
        display: flex;
        align-items: center;
        gap: 6px;
      }
      .lavm-short__pagination span {
        height: 2px;
        border-radius: 111px;
        background: rgba(255, 255, 255, 0.44);
        transition: .3s;
        flex: 1;
      }
      .lavm-short__pagination span.active {
        background: #FFF;
      }
      .lav-modal[data-target="modal0"] .lavm-short__info, .lav-modal[data-target="modal0"] .lavm-short__video-el {
        display: none;
      }
      .lav-modal[data-target="modal0"] .lavm-short__mother {
        display: flex;
      }
      .lavm-short__mother {
        display: none;
        flex-flow: column;
        z-index: 1;
        text-align: center;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
      }
      .lavm-short__mother-image {
        line-height: 0;
      }
      .lavm-short__mother-image img {
      }
      .lavm-short__mother-info {
        background: #FFEAC8 url('${config.dir}/img/modal-mother-leaf.png') bottom no-repeat;
        padding: 56px 15px 40px;
        flex-grow: 1;
      }
      .lavm-short__mother-caption {
        color: #000;
        font-size: 15px;
        font-weight: 500;
        line-height: 15.6px;
        letter-spacing: 0.91px;
        text-transform: uppercase;
      }
      .lavm-short__mother-title {
        margin: 12px 0;
        color: #F37F64;
        font-size: 44px;
        font-weight: 400;
        line-height: 44px;
      }
      .lavm-short__mother-button {
        width: 165px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50px;
        background: #0C5947;
        color: #DDF2D0;
        font-size: 16px;
        font-weight: 500;
        line-height: 110%;
        height: 48px;
        margin: 25px auto 0;
      }
      .lavm-short__control-arrow {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 4;
        line-height: 0;
      }
      .lavm-short__control-left {
        left: 16px;
      }
      .lavm-short__control-right {
        right: 16px;
      }
    `

      const stylesEl = document.createElement('style')
      stylesEl.classList.add('exp-modal')
      stylesEl.innerHTML = styles
      document.head.appendChild(stylesEl)
    }
  }

  async function initExp() {
    await waitFor(() => document.head && document.body, false, { ms: 20 })

    // waitFor('.modal-notification .close', () => {
    //   if (window.innerWidth > 1024) {
    //     _$('.modal-notification .close').click()
    //   }
    // })

    if (location.pathname === '/') {
      if (_$('.exp-modal')) {
        location.reload()
        return
      }

      document.head.appendChild(stylesEl)

      console.debug('** InitExp **')
      await waitFor(() => _$('.wrapper.mainPage'), false, { ms: 30 })
      console.log('Add elements')

      addHero()
      waitFor('.b-main-left-right.first', handleBetter)
      waitFor('.b-goog-review', handleReviews)
      waitFor('.b-main-press', handleConnected)
      waitFor('.b-main-giftcards + .b-marquee + .b-main-wave', handleGift)
      waitFor('.b-main-giftcards + .b-marquee + .b-main-wave', () => {
        handleGiftPosition()
        window.addEventListener('resize', handleGiftPosition)
      })
      waitFor('.b-start-doing', addFaq)

      console.log('Add elements2')
      handleBooking()
      addModal()

      setTimeout(() => {
        window.dispatchEvent(new Event('resize'))
      }, 500)
    } else if (location.pathname === '/waitlist-crs/') {
      // let hash = location.hash?.replace('#service-', '')
      // if (!hash) return
      // _$(`.service[data-id="${hash}"]`)?.querySelector('.service-btn').click()
    }
  }

  function addModal() {
    const html = /*html*/ `
      <div class="lav-modal__close">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </div>

      <div class="lavm-short__pagination">
        <span class='active'></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <video class="lavm-short__video-el" autoplay muted loop playsinline></video>

      <div class="lavm-short__control">
        <div class="lavm-short__control-left lavm-short__control-arrow">
          <img src="${config.dir}/img/modal-left.svg" alt="Arrow left">
        </div>
        <div class="lavm-short__control-right lavm-short__control-arrow">
          <img src="${config.dir}/img/modal-right.svg" alt="Arrow right">
        </div>
      </div>

      <div class="lavm-short__info">
        <div class="lavm-short__title lav-quincy">Most memorable spa experience</div>
        <div class="lavm-short__caption">Your perfect Spa Day with a fun twist for you, her, him and everyone in between</div>
        <div class="lavm-short__button">Choose Spa Package</div>
      </div>

      <div class='lavm-short__mother'>
        <div class='lavm-short__mother-image'>
          <img src="${config.dir}/img/modal-mother.png" alt="Mother's Day">
        </div>
        <div class='lavm-short__mother-info'>
          <div class='lavm-short__mother-caption'>Come Celebrate</div>
          <div class='lavm-short__mother-title lav-quincy'>Mother’s Day</div>
          <div class='lavm-short__mother-caption'>at Oakwell Beer Spa</div>
          <div class='lavm-short__mother-button'>Book Now</div>
        </div>
      </div>
    `

    new Modal('lavm-short', html)

    _$('.lavm-short__control-right').addEventListener('click', () => {
      const current = _$('.lav-modal').dataset.target
      const next = +current.replace('modal', '') + 1

      if (next > 5) return

      openModal(`modal${next}`)
    })

    _$('.lavm-short__control-left').addEventListener('click', () => {
      const current = _$('.lav-modal').dataset.target
      const prev = +current.replace('modal', '') - 1

      if (prev < 0) return

      openModal(`modal${prev}`)
    })

    _$('.lavm-short__mother-button').addEventListener('click', () => {
      location.href = '/waitlist-crs/'
      pushDataLayer(
        'exp_hp3_click_03',
        'Book now - Mothers Day',
        'click',
        'Video stories'
      )
    })

    _$$('.lavm-short__button').forEach((el) => {
      el.addEventListener('click', (e) => {
        if (_$('.lav-modal--video')) {
          location.href = _$('.lav-modal--video').dataset.url
        } else {
          location.href = '/waitlist-crs/'
          const name = _$('.lavm-short__title').textContent.trim()
          pushDataLayer(
            'exp_hp3_click_03',
            'Choose Spa Package - ' + name,
            'click',
            'Video stories'
          )
        }
      })
    })
  }

  const modalsShortsConfig = {
    modal0: {},
    modal1: {
      title: 'Most memorable spa experience',
      caption:
        'Your perfect Spa Day with a fun twist for you, her, him and everyone in between',
      video: `https://oakwell.com/wp-content/uploads/2023/12/Beer-Spa-Hero-Video-1080p-Web_6mb.mp4`
    },
    modal2: {
      title: 'Beer Bath Hydrotherapy',
      caption:
        'Soak in a bubbly beer bath steeped with hops, barley, and seasonal medicinal herbs. Enjoy an herbal beer bath blend that benefits hair, skin, and mind.',
      video: `short-2.mp4`
    },
    modal3: {
      title: 'Infrared Sauna',
      caption:
        'Relax and detox while infrared rays deeply penetrate your core to eliminate harmful toxins. Think steam room but without being uncomfortably hot.',
      video: `short-3.mp4`
    },
    modal4: {
      title: 'Craft Beer Taproom',
      caption:
        'Hang out in Oakwell’s self-pour taproom before and after your spa experience. Enjoy the rotating selection of craft beer, wine, cider, and non-alcoholic beverages.',
      video: `short-4.mp4`
    },
    modal5: {
      title: 'Zero Gravity Massage',
      caption:
        'Take a trip to space in a futuristic, zero-gravity massage chair while treating yourself to a deep-tissue, full-body massage.',
      video: `short-5.mp4`
    }
  }

  function openModal(target, pageUrl) {
    const targetConfig = modalsShortsConfig[target]
    const index = +target.replace('modal', '')

    _$$('.lavm-short__pagination span').forEach((el, i) => {
      el.classList.remove('active')
      if (index >= i) {
        el.classList.add('active')
      }
    })

    if (target !== 'modal0') {
      _$('.lavm-short__caption').textContent = targetConfig.caption
      _$('.lavm-short__title').textContent = targetConfig.title
      _$('.lavm-short__video-el').src = targetConfig.video.includes('short-')
        ? `${config.dir}/video/${targetConfig.video}`
        : targetConfig.video
    }

    if (pageUrl) {
      _$('.lav-modal').classList.add('lav-modal--video')
      _$('.lav-modal').dataset.url = pageUrl
      _$('.lavm-short__button').textContent = 'Learn More'
    } else {
      _$('.lav-modal').classList.remove('lav-modal--video')
      _$('.lav-modal').removeAttribute('data-url')
      _$('.lavm-short__button').textContent = 'Choose Spa Package'
    }

    _$('.lav-modal').dataset.target = target

    Modal.open('.lavm-short')
  }

  function handleGiftPosition() {
    if (window.innerWidth < 640) {
      if (
        _$('.b-main-giftcards .left') &&
        !_$('.b-main-giftcards .left .right')
      ) {
        console.log('change position gift')
        _$('.b-main-giftcards .left .btns').insertAdjacentElement(
          'beforebegin',
          _$('.b-main-giftcards .right')
        )
      }

      if (
        _$('.b-main-wave.bot .left') &&
        !_$('.b-main-wave.bot .right .left')
      ) {
        console.log('change position gift 2')
        _$('.b-main-wave.bot .right .link-btn').insertAdjacentElement(
          'beforebegin',
          _$('.b-main-wave.bot .left')
        )
      }
    } else {
      if (_$('.b-main-giftcards .left .right')) {
        console.log('change position gift reverse')
        _$('.b-main-giftcards .left').insertAdjacentElement(
          'afterend',
          _$('.b-main-giftcards .left .right')
        )
      }

      if (_$('.b-main-wave.bot .right .left')) {
        console.log('change position gift 2 reverse')
        _$('.b-main-wave.bot .right').insertAdjacentElement(
          'beforebegin',
          _$('.b-main-wave.bot .right .left')
        )
      }
    }

    _$('.b-main-wave.bot .box h2').textContent = 'Beer Therapy™ at Home'
  }

  function handleBooking() {
    const benefits = Array.from(_$$('.b-main-left-right.third .container')).map(
      (el, idx) => {
        let videoModal, video

        if (idx === 0) {
          videoModal = 'modal2'
          video = `short-2.mp4`
        } else if (idx === 1) {
          videoModal = 'modal3'
          video = `short-3.mp4`
        } else if (idx === 2) {
          videoModal = 'modal5'
          video = `short-5.mp4`
        } else if (idx === 3) {
          videoModal = 'modal4'
          video = `short-4.mp4`
        }

        return {
          title: el.querySelector('h2').textContent,
          descr: el.querySelector('h2 + p').textContent,
          link: el.querySelector('h2 + p + a').href,
          image: el.querySelector('.img img').dataset.src,
          videoModal,
          video,
          id: false
        }
      }
    )

    const products = [
      {
        title: 'Oakwell Escape Package',
        fullTitle:
          'Experience bliss like never before with the ultimate date experience, including a beer bath, sauna, tasty treats, and massages.',
        descr:
          'Romantic private spa suite decorated with candles and rose petals, plus a gourmet charcuterie board, chocolate bonbons, and 30-minute zero gravity massages. ',
        link: '/waitlist-crs/',
        id: '68951432',
        image: `${config.dir}/img/booking-1.png`,
        image2: `${config.dir}/img/booking-1.jpg`
      },
      {
        title: "Couple's Retreat Package",
        fullTitle:
          'Soak your stress away with your special someone by kicking back in a private spa suite while nibbling on artisan chocolates.',
        descr:
          'Private spa suite equipped with an infrared sauna, rain shower, and hydrotherapy tub, plus a selection of artisan chocolate bonbons for you and a special someone.',
        link: '/waitlist-crs/',
        id: '68951079',
        image: `${config.dir}/img/booking-2.png`,
        image2: `${config.dir}/img/booking-2.jpg`
      },
      {
        title: 'Beer Therapy Ritual Package',
        fullTitle:
          'Dive into a relaxing ritual of a bubbly beer bath and dry sauna in your private spa suite with a craft beverage in hand.',
        descr:
          'Private spa suite, including an infrared sauna, rain shower, and hydrotherapy tub - perfect for a solo spa day or enjoyed with a friend. ',
        link: '/waitlist-crs/',
        id: '68950903',
        image: `${config.dir}/img/booking-3.png`,
        image2: `${config.dir}/img/booking-3.jpg`
      },
      {
        title: 'Garage Party',
        fullTitle:
          'Make memories during the ultimate group spa experience by sharing a private spa suite while saying ‘cheers’ with a craft beverage.',
        descr:
          'The ultimate group outing featuring two private spa suites joined together with access to two infrared saunas, two rain showers, and two hydrotherapy tubs. ',
        link: '/waitlist-crs/',
        id: '27351564',
        image: `${config.dir}/img/booking-4.png`,
        image2: `${config.dir}/img/booking-4.jpg`
      }
    ]

    const productsOne = getProducts('one')
    const productsThree = getProducts('three', true)
    const productsTwo = getProducts('two')
    const benefitsEl = getBenefits()

    _$('.b-main').insertAdjacentElement('beforebegin', productsOne)
    _$('.b-main').insertAdjacentElement('beforebegin', productsThree)
    _$('.b-main-craftpartners').insertAdjacentElement(
      'beforebegin',
      productsTwo
    )
    _$('.b-main-craftpartners').insertAdjacentElement('beforebegin', benefitsEl)

    visibilityEvent('.lav-products--three', () => {
      pushDataLayer(
        'exp_hp3_viewt_01',
        'Featured Spa Services',
        'view',
        'Featured Spa Services'
      )
    })

    _$$('.lav-product__video').forEach((video) => {
      video.addEventListener('click', (e) => {
        const target = video.dataset.target
        const name = video
          .closest('.lav-product')
          .querySelector('.lav-product__title')
          .textContent.trim()
        pushDataLayer(
          'exp_hp3_click_07',
          'Video - ' + name,
          'click',
          'Featured Spa Services'
        )
        openModal(
          target,
          video.closest('.lav-product').querySelector('.lav-product__link').href
        )
      })
    })

    _$$('.lav-products--three .lav-product__link').forEach((link) => {
      link.addEventListener('click', (e) => {
        const name = link
          .closest('.lav-product')
          .querySelector('.lav-product__title')
          .textContent.trim()
        pushDataLayer(
          'exp_hp3_click_08',
          'Larn more - ' + name,
          'click',
          'Featured Spa Services'
        )
      })
    })

    _$$('.b-main-craftpartners img[data-src*="craft-1.png"]').forEach((img) => {
      img.insertAdjacentHTML(
        'beforebegin',
        `<img src="${config.dir}/img/craft-1.png" />`
      )
      img.remove()
    })

    _$$(
      '.b-main-craftpartners img[data-src*="jagged-mountain-oakwell-logo.png"]'
    ).forEach((img) => {
      img.insertAdjacentHTML(
        'beforebegin',
        `<img src="${config.dir}/img/jagged-mountain-oakwell-logo.png" />`
      )
      img.remove()
    })

    _$$('.b-main-craftpartners img[data-src*="Mor-Kombucha.png"]').forEach(
      (img) => {
        img.insertAdjacentHTML(
          'beforebegin',
          `<img src="${config.dir}/img/Mor-Kombucha.png" />`
        )
        img.remove()
      }
    )

    _$$('.b-main-craftpartners img[data-src*="Snow-Capped-Cider.png"]').forEach(
      (img) => {
        img.insertAdjacentHTML(
          'beforebegin',
          `<img src="${config.dir}/img/Snow-Capped-Cider.svg" />`
        )
        img.remove()
      }
    )

    //oakwell.com/wp-content/uploads/2024/03/jagged-mountain-oakwell-logo.png

    productsTwo.insertAdjacentHTML('afterbegin', getSvg('leafProduct'))

    _$('.b-main-craftpartners').insertAdjacentElement(
      'afterbegin',
      _$('.b-main-left-right.first>.desk')
    )
    _$('.b-main-craftpartners').insertAdjacentElement(
      'afterbegin',
      _$('.b-main-left-right.first>.mob')
    )

    _$('.b-main-craftpartners h2').textContent =
      'Featured Local Craft Brewery Partners'

    _$('.b-main-craftpartners + .b-marquee').insertAdjacentElement(
      'afterbegin',
      _$('.b-main-left-right.second.after-first .wave')
    )

    _$('.b-main-craftpartners + .b-marquee').insertAdjacentElement(
      'afterbegin',
      _$('.b-main-left-right.second.after-first .mob')
    )

    _$('.b-main-craftpartners + .b-marquee').insertAdjacentElement(
      'afterbegin',
      _$('.b-main-left-right.second.after-first .desk')
    )

    _$('.b-main-craftpartners + .b-marquee').insertAdjacentHTML(
      'afterbegin',
      /* html */ `
    <svg class='lav-marq-wave' xmlns="http://www.w3.org/2000/svg" width="375" height="58" viewBox="0 0 375 58" fill="none">
      <path d="M0 58V0H375V24.4267C316.559 5.8595 241.12 0.757969 186.926 13.1888C123.82 27.6695 111.111 49.2061 0 58Z" fill="#0C5947"/>
    </svg>
    `
    )

    function getProducts(num, isBenefit) {
      const productsEl = document.createElement('div')
      productsEl.classList.add('lav-products', 'lav-products--' + num)
      productsEl.innerHTML = /* html */ `
      <div class='container'>
        <h2 class='lav-products__title'>${
          num === 'one'
            ? 'Featured Spa Packages at Oakwell Beer Spa'
            : num === 'two'
            ? 'Looking for a one-of-a-kind way to unwind?'
            : 'Featured Spa Services'
        }</h2>
        <div class='lav-products__caption'>${
          num === 'one' || num === 'three'
            ? 'RELAX DIFFERENTLY AT THE BEST DENVER SPA WITH A CRAFT BEER IN HAND'
            : 'Treat Yourself to the Ultimate Relaxation'
        }</div>
        <div class='lav-products__list'></div>
      </div>
      <svg class='lav-products__wave'  xmlns="http://www.w3.org/2000/svg" width="1440" height="588" viewBox="0 0 1440 588" fill="none">
        <path d="M1943 0V588H-0.00292969V365.052C199.694 508.638 205.991 325.564 425.478 294C774.452 243.814 1267.44 659.245 1943 0Z" fill="#3C6C60"/>
      </svg>
      <svg class='lav-products__wave lav-products__wave-mob' xmlns="http://www.w3.org/2000/svg" width="375" height="58" viewBox="0 0 375 58" fill="none">
        <path d="M375 58V0H0V24.4267C58.4411 5.8595 133.88 0.757969 188.074 13.1888C251.18 27.6695 263.889 49.2061 375 58Z" fill="#0C5947"/>
      </svg>
    `

      const target = isBenefit ? benefits : products

      target.forEach((product, index) => {
        const productEl = document.createElement('div')
        productEl.classList.add('lav-product')
        productEl.dataset.aos = 'fade-up'
        productEl.innerHTML = /* html */ `
        <div class='lav-product__video' data-target='${product.videoModal}'>
          <img class='lav-product__video-img' src='${
            config.dir
          }/img/zoom-in.svg' />
          <video class="lav-product__video-el" autoplay muted loop playsinline src='${
            config.dir
          }/video/${product.video}'></video>
        </div>
        <div class='lav-product__image'>
          <img src='${
            num === 'one' || num === 'three'
              ? product.image
              : num === 'two'
              ? product.image2
              : `${config.dir}/img/short-product-${index}.png`
          }' />
        </div>
        <div class='lav-product__info'>
          <div class='lav-product__title lav-quincy'>${product.title}</div>
          <div class='lav-product__descr'>${product.descr}</div>
          <a data-id='${product.id}' data-router-disabled href='${
          product.link
        }' class='lav-product__link lav-btn link-btn ${
          num === 'one' || num === 'three' ? 'light' : 'dark'
        }'>${isBenefit ? 'Learn more' : 'Book Now'}</a>
        </div>
      `

        productEl
          .querySelector('.lav-product__link')
          .addEventListener('click', (e) => {
            const id = product.id

            if (productEl.closest('.lav-products--one')) {
              e.preventDefault()

              // pushDataLayer(
              //   'exp_hp_button_03',
              //   product.title,
              //   'click',
              //   'All Beer Spa Services'
              // )

              location.href = '/waitlist-crs/#service-' + id
            } else if (productEl.closest('.lav-products--two')) {
              e.preventDefault()

              // pushDataLayer(
              //   'exp_hp_button_08',
              //   product.title,
              //   'click',
              //   'Seeking a Unique Way to Relax'
              // )

              location.href = '/waitlist-crs/#service-' + id
            }
          })

        if (num === 'two') {
          productEl.querySelector('.lav-product__title').textContent =
            product.fullTitle
          productEl.querySelector('.lav-product__descr').remove()
        }

        productsEl
          .querySelector('.lav-products__list')
          .insertAdjacentElement('beforeend', productEl)
      })

      return productsEl
    }

    function getBenefits() {
      const benefitsEl = document.createElement('div')
      benefitsEl.classList.add('lav-benefits')
      benefitsEl.innerHTML = /* html */ `
      <div class='container'>
        <div class='lav-benefits__list'></div>
      </div>
    `

      benefits.forEach((benefit) => {
        const benefitEl = document.createElement('div')
        benefitEl.classList.add('lav-benefit')
        benefitEl.dataset.aos = 'fade-up'
        benefitEl.innerHTML = /* html */ `
        <div class='lav-benefit__image'>
          <img src='${benefit.image}' />
        </div>
        <div class='lav-benefit__info'>
          <div class='lav-benefit__title lav-quincy'>${benefit.title}</div>
          <div class='lav-benefit__descr'>${benefit.descr}</div>
          <a href='${benefit.link}' class='lav-benefit__link lav-btn link-btn light'>Learn more</a>
        </div>
      `

        benefitEl
          .querySelector('.lav-benefit__link')
          .addEventListener('click', () => {
            // pushDataLayer(
            //   'exp_hp_button_09',
            //   benefit.title,
            //   'click',
            //   'block with main and additional services'
            // )
          })

        benefitsEl
          .querySelector('.lav-benefits__list')
          .insertAdjacentElement('beforeend', benefitEl)
      })

      return benefitsEl
    }
  }

  function addHero() {
    const markup = /* html */ `
      <div class='lavh-hero'>
        <div class='lav-video'></div>
        <div class='lav-shorts'>
          <div class='lav-short' data-target='modal0'>
            <div class='lav-short__image'>
              <img src='${config.dir}/img/short-1.png' />
            </div>
            <div class='lav-short__title'>
              Mother’s Day Exclusive
            </div>
          </div>

          <div class='lav-short' data-target='modal1'>
            <div class='lav-short__image'>
              <img src='${config.dir}/img/short-2.png' />
            </div>
            <div class='lav-short__title'>
              About us
            </div>
          </div>

          <div class='lav-short' data-target='modal2'>
            <div class='lav-short__image'>
              <img src='${config.dir}/img/short-3.png' />
            </div>
            <div class='lav-short__title'>
              Beer Bath Therapy
            </div>
          </div>

          <div class='lav-short' data-target='modal3'>
            <div class='lav-short__image'>
              <img src='${config.dir}/img/short-4.png' />
            </div>
            <div class='lav-short__title'>
              Infrared Sauna
            </div>
          </div>

          <div class='lav-short' data-target='modal4'>
            <div class='lav-short__image'>
              <img src='${config.dir}/img/short-5.png' />
            </div>
            <div class='lav-short__title'>
              Craft Beer Taproom
            </div>
          </div>

          <div class='lav-short' data-target='modal5'>
            <div class='lav-short__image'>
              <img src='${config.dir}/img/short-6.png' />
            </div>
            <div class='lav-short__title'>
              Zero Gravity Massage
            </div>
          </div>
        </div>
        <div class='lavh-hero__title lav-quincy'>
          Relax Differently at the Best Denver Spa with a Craft Beer in Hand
        </div>
        <div class='lavh-hero__caption'>A beer-inspired, award-winning spa offering a top-notch wellness experience</div>

        <div class='lavh-hero__btn-wrap'>
          <div class='lavh-hero__btn'>
            <span>Book Now</span>
          </div>
        </div>

        <div class='lavh-hero__rates'>
          <div class='lavr-rate'>
            <div class='lavr-rate__logo'>
              <img src='${config.dir}/img/hero-review-1.svg' />
            </div>
            <div class='lavr-rate__mark'>Excellent</div>
            <div class='lavr-rate__reviews'>
              on Google <br/>
              2600+ reviews
            </div>
          </div>

          <div class='lavr-rate'>
            <div class='lavr-rate__logo'>
              <img src='${config.dir}/img/hero-review-2.svg' />
            </div>
            <div class='lavr-rate__mark'>Excellent</div>
            <div class='lavr-rate__reviews'>
              on Tripadvisor <br/>
              240+ reviews
            </div>
          </div>

          <div class='lavr-rate'>
            <div class='lavr-rate__logo'>
              <img src='${config.dir}/img/hero-review-3.svg' />
            </div>
            <div class='lavr-rate__mark'>Excellent</div>
            <div class='lavr-rate__reviews'>
              on Yelp <br/>
              460+ reviews
            </div>
          </div>
        </div>

        <div class="lav-loc__wrap">
          <div class='lav-loc__title'>Our locations</div>
          <div class='lav-loc__list'>
            <div class='lav-loc'>
              <div class='lav-loc__image' style='background-image: url(${config.dir}/img/location-bg-1.png)'></div>
              <div class='lav-loc__info'>
                <div class='lav-loc__subtitle'>Denver</div>
                <div class='lav-loc__sublist'>
                  <div class='lav-loc__subitem'>
                    <img src='${config.dir}/img/loc-icon-1.svg' />
                    3004 N Downing St, Denver, CO, 80205
                  </div>

                  <a href='tel:+17208101484' class='lav-loc__subitem'>
                    <img src='${config.dir}/img/loc-icon-2.svg' />
                    (720)-810-1484
                  </a>

                  <div class='lav-loc__subitem'>
                    <img src='${config.dir}/img/loc-icon-3.svg' />
                    Monday – Sunday: 08:00 am – 10:30&nbsp;pm 
                  </div>
                </div>
              </div>
              <div class='lav-loc__footer'>
                <div class='lav-loc__available'>
                  5 Packages avaiable
                </div>
                <div class='lav-loc__btn'>
                  Choose Location
                </div>
              </div>
            </div>

            <div class='lav-loc'>
              <div class='lav-loc__image' style='background-image: url(${config.dir}/img/location-bg-2.png)'></div>
              <div class='lav-loc__info'>
                <div class='lav-loc__subtitle'>Highlands Ranch</div>
                <div class='lav-loc__sublist'>
                  <div class='lav-loc__subitem'>
                    <img src='${config.dir}/img/loc-icon-1.svg' />
                    6660 Timberline Rd, Littleton, CO 80130
                  </div>

                  <a href='tel:+17208101484' class='lav-loc__subitem'>
                    <img src='${config.dir}/img/loc-icon-2.svg' />
                    (720)-810-1484
                  </a>

                  <div class='lav-loc__subitem'>
                    <img src='${config.dir}/img/loc-icon-3.svg' />
                    Monday – Sunday: 08:00 am – 10:30&nbsp;pm 
                  </div>
                </div>
              </div>
              <div class='lav-loc__footer'>
                <div class='lav-loc__available'>
                  5 Packages avaiable
                </div>
                <div class='lav-loc__btn'>
                  Choose Location
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="lavh-tickers lavh-tickers_mob ff-lato marquee-block marquee-js marquee-js-booking">
          <div class="marquee">
            <div class='lavh-tickers-item'>
              <div class='lavh-tickers-item__image'>
                <img src='${config.dir}/img/award-1.svg'>
              </div>
              <div class='lavh-tickers-item__info'>
                <div class='lavh-tickers-item__title'>Time’s</div>
                <div class='lavh-tickers-item__caption'>world’s greatest places</div>
              </div>
            </div>
            <div class='lavh-tickers-item'>
              <div class='lavh-tickers-item__image'>
                <img src='${config.dir}/img/award-2.svg'>
              </div>
              <div class='lavh-tickers-item__info'>
                <div class='lavh-tickers-item__title'>Enterpreneur</div>
                <div class='lavh-tickers-item__caption'>best mom & pop shop in usa</div>
              </div>
            </div>
            <div class='lavh-tickers-item'>
              <div class='lavh-tickers-item__image'>
                <img src='${config.dir}/img/award-3.svg'>
              </div>
              <div class='lavh-tickers-item__info'>
                <div class='lavh-tickers-item__title'>5280’s</div>
                <div class='lavh-tickers-item__caption'>best spa</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `

    _$('.wrapper.mainPage').insertAdjacentHTML('afterbegin', markup)

    _$$('.lav-short').forEach((el) => {
      el.addEventListener('click', (e) => {
        el.classList.add('lav-short--active')
        const target = e.currentTarget.dataset.target
        const name = el.querySelector('.lav-short__title').textContent.trim()
        pushDataLayer(
          'exp_hp3_click_02',
          'Stories - ' + name,
          'click',
          'First screen'
        )
        openModal(target)
      })
    })

    _$('.lavh-hero').insertAdjacentElement(
      'afterbegin',
      _$('.b-main .main-anim-wave')
    )

    waitFor('.b-main .img-video-box', () => {
      _$('.lav-video').insertAdjacentElement(
        'beforeend',
        _$('.b-main .img-video-box')
      )
    })

    _$('.lavh-hero__btn').addEventListener('click', () => {
      pushDataLayer('exp_hp3_click_05', 'Book now', 'click', 'First screen')
      location.href = '/waitlist-crs/'
    })

    _$$('.lav-loc__btn').forEach((el) => {
      el.addEventListener('click', (e) => {
        const name = el
          .closest('.lav-loc')
          .querySelector('.lav-loc__subtitle')
          .textContent.trim()
        pushDataLayer(
          'exp_hp3_click_06',
          'Chose Location - ' + name,
          'click',
          'Our location'
        )
        location.href = '/waitlist-crs/'
      })
    })

    waitFor(
      () => typeof $ !== 'undefined',
      () => {
        $(window).scroll(function () {
          if (
            $('.lavh-hero__btn-wrap').offset().top +
              $('.lavh-hero__btn-wrap').height() <
            $(window).scrollTop()
          ) {
            $('.lavh-hero__btn').addClass('lavh-hero__btn--fixed')
          } else {
            $('.lavh-hero__btn').removeClass('lavh-hero__btn--fixed')
          }
        })
      }
    )

    waitFor(
      () => typeof SiteAnimation !== 'undefined',
      () => {
        initMarquee()
      }
    )

    function initMarquee() {
      customMarquee = new (class extends SiteAnimation {
        constructor() {
          super(),
            (this.time = 40),
            (this.timeSlow = 40),
            (this.timeline = null)
        }
        initMarquee() {
          var e = this.parent.querySelector('.marquee'),
            t = this.parent.offsetWidth,
            a = this.parent,
            s = 4,
            r = 0
          for (
            this.timeline = gsap.timeline({
              repeat: -1
            }),
              a.style.width = (s + 4) * this.sum(e) + 'px';
            r < s;

          )
            this.parent.insertBefore(e.cloneNode(!0), e.prevSibling), r++
          for (r = 0; r < this.parent.querySelectorAll('.marquee').length; r++)
            this.timeline.to(
              this.parent.querySelectorAll('.marquee')[r],
              this.time,
              {
                x: -this.parent.querySelectorAll('.marquee')[r].offsetWidth,
                ease: Linear.easeNone
              },
              '-=this.time'
            )
          window.initLazy()
        }
        sum(e) {
          for (
            var t = 0, a = 0;
            a < e.querySelectorAll('.tickers-item').length;
            a++
          )
            t += e.querySelectorAll('.tickers-item')[a].offsetWidth
          return t
        }
        marqueeSlow() {
          this.timeline.duration(this.timeSlow)
        }
        marqueeNormal() {
          this.timeline.duration(this.time)
        }
        destroySticky() {
          this.parent.removeEventListener('mouseenter', () => {
            this.marqueeSlow()
          }),
            this.parent.removeEventListener('mouseleave', () => {
              this.marqueeNormal()
            })
        }
        init(e) {
          super.init('customMarquee'),
            (this.parent = e),
            this.parent &&
              (this.initMarquee(),
              this.parent.addEventListener('mouseenter', () => {
                this.marqueeSlow()
              }),
              this.parent.addEventListener('mouseleave', () => {
                this.marqueeNormal()
              }))
        }
        resize() {
          this.parent
        }
        destroy() {
          var e =
            !!(0 < arguments.length && arguments[0] !== void 0) && arguments[0]
          this.parent && this.destroySticky(), super.destroy(e)
        }
      })()

      const targetEl = _$('.lavh-tickers')
      requestAnimationFrame(() => customMarquee.init(targetEl))
    }

    // scrollHandler(_$('.lav-shorts'))
    // function scrollHandler(pack) {
    //   const thresholds = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
    //   let triggeredDepths = new Set()

    //   pack.addEventListener('scroll', () => {
    //     const scrollWidth = pack.scrollWidth - pack.clientWidth
    //     const scrolledPercentage = (pack.scrollLeft / scrollWidth) * 100

    //     thresholds.forEach((depth) => {
    //       if (scrolledPercentage >= depth && !triggeredDepths.has(depth)) {
    //         triggeredDepths.add(depth)
    //         pushDataLayer(
    //           'exp_hp3_click_02',
    //           'Stories - ' + depth,
    //           'click',
    //           'First screen'
    //         )
    //       }
    //     })
    //   })
    // }
  }

  function handleBetter() {
    _$(
      '.b-main-left-right.first .subtitle'
    ).textContent = `WHY Oakwell Beer Spa MAKE FOR ONE OF COLORADO'S MOST MEMORABLE SPA EXPERIENCES?`

    const buttonsWrap = document.createElement('div')
    buttonsWrap.classList.add('lav-better__buttons')

    buttonsWrap.insertAdjacentElement(
      'beforeend',
      _$('.b-main-left-right.first .link-btn')
    )

    buttonsWrap.insertAdjacentHTML(
      'beforeend',
      /* html */ `<a data-router-disabled href="/the-experience/" data-aos="fade-up" data-aos-delay="100" class="lav-better__discover lav-btn link-btn light">Discover Oakwell Beer Spa Experience</a>`
    )

    _$('.b-main-left-right.first .right').insertAdjacentElement(
      'beforeend',
      buttonsWrap
    )

    _$('.lav-better__discover').addEventListener('click', () => {
      // pushDataLayer(
      //   'exp_hp_button_05',
      //   'Discover More About Beer Spa Experience',
      //   'click',
      //   'Better Than Your Traditional Denver Spa'
      // )
    })

    _$('.b-main-left-right.first p + p').innerHTML = _$(
      '.b-main-left-right.first p + p'
    ).innerHTML.replace(
      `Pop in for a drink or spend the entire afternoon here, and you'll quickly see why we're considered one of the best Denver day spas.`,
      ''
    )

    _$('.b-main-left-right.first p + p').insertAdjacentHTML(
      'afterend',
      /* html */ `
    <p data-aos="fade-up" data-aos-delay="100">Pop in for a drink or spend the entire afternoon here, and you'll quickly see why we're considered one of the best Denver day spas.</p>`
    )
  }

  function handleReviews() {
    _$('.b-main-left-right.first').insertAdjacentElement(
      'afterend',
      _$('.b-goog-review')
    )
    _$('.b-main-left-right.first').insertAdjacentElement(
      'afterend',
      _$('.b-main-most-services')
    )

    _$('.b-goog-review h2').textContent = 'Our Guest Reviews'

    _$('.b-vert-scroll-cards .container').insertAdjacentHTML(
      'afterbegin',
      /* html */ `
    <div class='lav-memorable__head'>
      <h2 class='lav-memorable__title' data-aos="fade-up" data-aos-delay="0">A Memorable Denver Spa Experience</h2>
      <div class='lav-memorable__caption' data-aos="fade-up" data-aos-delay="100">
        Your perfect Spa Day with a fun twist for you, her, him and everyone in between
      </div>
    </div>
  `
    )

    _$('.b-vert-scroll-cards .scrl-fix').insertAdjacentHTML(
      'beforeend',
      /* html */ `
      <div class='lav-memorable__image'>
        <img src='https://oakwell.com/wp-content/uploads/2023/10/TBS_Tubs_15-Web-scaled.webp' />
      </div>
      `
    )

    _$('.b-vert-scroll-cards  .container').insertAdjacentHTML(
      'beforeend',
      /* html */ `
    <div class='lav-memorable__btn-wrap'>
      <a href="/the-experience/"  data-aos="fade-up" data-aos-delay="100" class="lav-memorable__btn lav-btn link-btn light">Discover More About Beer Spa Experience</a>
    </div>
    `
    )

    _$('.lav-memorable__btn').addEventListener('click', () => {
      // pushDataLayer(
      //   'exp_hp_button_07',
      //   'Discover More About Beer Spa Experience',
      //   'click',
      //   'A Memorable Denver Spa Experience'
      // )
    })

    // https://oakwell.com/wp-content/uploads/2023/10/TBS_Tubs_15-Web-scaled.webp
  }

  async function handleConnected() {
    await waitFor('.b-form', false, { ms: 20 })

    _$('.b-main-press').insertAdjacentElement('beforebegin', _$('.b-form'))

    _$('.b-form .box .right .subtitle').textContent =
      'Become a part of our community and be the first to learn all there is to know about Oakwell'

    _$('.b-form .box').insertAdjacentHTML(
      'beforeend',
      /* html */ `
    <div class="soc">
      <a href="https://www.facebook.com/OakwellBeerSpa/" target="_blank" data-uw-rm-brl="PR" data-uw-original-href="https://www.facebook.com/OakwellBeerSpa/" aria-label="facebook - open in a new tab" data-uw-rm-empty-ctrl="" data-uw-rm-ext-link="" uw-rm-external-link-id="https://www.facebook.com/oakwellbeerspa/$facebook">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z" fill="#0C5947"></path>
          </svg>
      </a>
      <a href="https://www.instagram.com/Oakwellbeerspa/" target="_blank" data-uw-rm-brl="PR" data-uw-original-href="https://www.instagram.com/Oakwellbeerspa/" aria-label="instagram - open in a new tab" data-uw-rm-empty-ctrl="" data-uw-rm-ext-link="" uw-rm-external-link-id="https://www.instagram.com/oakwellbeerspa/$instagram">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.16094C15.2063 2.16094 15.5859 2.175 16.8469 2.23125C18.0188 2.28281 18.6516 2.47969 19.0734 2.64375C19.6313 2.85938 20.0344 3.12188 20.4516 3.53906C20.8734 3.96094 21.1313 4.35938 21.3469 4.91719C21.5109 5.33906 21.7078 5.97656 21.7594 7.14375C21.8156 8.40937 21.8297 8.78906 21.8297 11.9906C21.8297 15.1969 21.8156 15.5766 21.7594 16.8375C21.7078 18.0094 21.5109 18.6422 21.3469 19.0641C21.1313 19.6219 20.8687 20.025 20.4516 20.4422C20.0297 20.8641 19.6313 21.1219 19.0734 21.3375C18.6516 21.5016 18.0141 21.6984 16.8469 21.75C15.5813 21.8062 15.2016 21.8203 12 21.8203C8.79375 21.8203 8.41406 21.8062 7.15313 21.75C5.98125 21.6984 5.34844 21.5016 4.92656 21.3375C4.36875 21.1219 3.96563 20.8594 3.54844 20.4422C3.12656 20.0203 2.86875 19.6219 2.65313 19.0641C2.48906 18.6422 2.29219 18.0047 2.24063 16.8375C2.18438 15.5719 2.17031 15.1922 2.17031 11.9906C2.17031 8.78438 2.18438 8.40469 2.24063 7.14375C2.29219 5.97187 2.48906 5.33906 2.65313 4.91719C2.86875 4.35938 3.13125 3.95625 3.54844 3.53906C3.97031 3.11719 4.36875 2.85938 4.92656 2.64375C5.34844 2.47969 5.98594 2.28281 7.15313 2.23125C8.41406 2.175 8.79375 2.16094 12 2.16094ZM12 0C8.74219 0 8.33438 0.0140625 7.05469 0.0703125C5.77969 0.126563 4.90313 0.332812 4.14375 0.628125C3.35156 0.9375 2.68125 1.34531 2.01563 2.01562C1.34531 2.68125 0.9375 3.35156 0.628125 4.13906C0.332812 4.90313 0.126563 5.775 0.0703125 7.05C0.0140625 8.33437 0 8.74219 0 12C0 15.2578 0.0140625 15.6656 0.0703125 16.9453C0.126563 18.2203 0.332812 19.0969 0.628125 19.8563C0.9375 20.6484 1.34531 21.3188 2.01563 21.9844C2.68125 22.65 3.35156 23.0625 4.13906 23.3672C4.90313 23.6625 5.775 23.8687 7.05 23.925C8.32969 23.9812 8.7375 23.9953 11.9953 23.9953C15.2531 23.9953 15.6609 23.9812 16.9406 23.925C18.2156 23.8687 19.0922 23.6625 19.8516 23.3672C20.6391 23.0625 21.3094 22.65 21.975 21.9844C22.6406 21.3188 23.0531 20.6484 23.3578 19.8609C23.6531 19.0969 23.8594 18.225 23.9156 16.95C23.9719 15.6703 23.9859 15.2625 23.9859 12.0047C23.9859 8.74688 23.9719 8.33906 23.9156 7.05938C23.8594 5.78438 23.6531 4.90781 23.3578 4.14844C23.0625 3.35156 22.6547 2.68125 21.9844 2.01562C21.3188 1.35 20.6484 0.9375 19.8609 0.632812C19.0969 0.3375 18.225 0.13125 16.95 0.075C15.6656 0.0140625 15.2578 0 12 0Z" fill="#0C5947"></path>
              <path d="M12 5.83594C8.59688 5.83594 5.83594 8.59688 5.83594 12C5.83594 15.4031 8.59688 18.1641 12 18.1641C15.4031 18.1641 18.1641 15.4031 18.1641 12C18.1641 8.59688 15.4031 5.83594 12 5.83594ZM12 15.9984C9.79219 15.9984 8.00156 14.2078 8.00156 12C8.00156 9.79219 9.79219 8.00156 12 8.00156C14.2078 8.00156 15.9984 9.79219 15.9984 12C15.9984 14.2078 14.2078 15.9984 12 15.9984Z" fill="#0C5947"></path>
              <path d="M19.8469 5.59141C19.8469 6.38828 19.2 7.03047 18.4078 7.03047C17.6109 7.03047 16.9688 6.3836 16.9688 5.59141C16.9688 4.79453 17.6156 4.15234 18.4078 4.15234C19.2 4.15234 19.8469 4.79922 19.8469 5.59141Z" fill="#0C5947"></path>
          </svg>
      </a>
      <a href="https://www.tiktok.com/@OakwellBeerSpa" target="_blank" data-uw-rm-brl="PR" data-uw-original-href="https://www.tiktok.com/@OakwellBeerSpa" aria-label="tiktok.com - open in a new tab" data-uw-rm-empty-ctrl="" data-uw-rm-ext-link="" uw-rm-external-link-id="https://www.tiktok.com/@oakwellbeerspa$tiktok.com">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.0725 0H13.0278V16.3478C13.0278 18.2957 11.4722 19.8957 9.53626 19.8957C7.60034 19.8957 6.04469 18.2957 6.04469 16.3478C6.04469 14.4348 7.56577 12.8695 9.43257 12.8V8.69567C5.31872 8.7652 2 12.1391 2 16.3478C2 20.5913 5.38786 24 9.57085 24C13.7538 24 17.1416 20.5565 17.1416 16.3478V7.9652C18.6627 9.07827 20.5295 9.73913 22.5 9.77393V5.66957C19.4579 5.56522 17.0725 3.06087 17.0725 0Z" fill="#0C5947"></path>
          </svg>
      </a>
    </div>
  `
    )
  }

  function handleGift() {
    const giftEl = document.createElement('div')
    giftEl.classList.add('lav-gift')

    giftEl.insertAdjacentElement(
      'afterbegin',
      _$('.b-main-giftcards + .b-marquee + .b-main-wave')
    )
    giftEl.insertAdjacentElement(
      'afterbegin',
      _$('.b-main-giftcards + .b-marquee')
    )
    giftEl.insertAdjacentElement('afterbegin', _$('.b-main-giftcards'))

    waitFor('.pin-spacer .b-insta', () => {
      _$('.b-insta')
        .closest('.pin-spacer')
        .insertAdjacentElement('beforebegin', giftEl)

      giftEl.insertAdjacentHTML('beforeend', getSvg('waveTop'))
      giftEl.insertAdjacentHTML('afterbegin', getSvg('waveBottom'))
    })

    waitFor('.b-main-giftcards .btns .link-btn span', () => {
      _$('.lav-gift .b-main-giftcards .btns .link-btn span').textContent =
        'Buy Gift Card'
    })
  }

  function addFaq() {
    const markup = /* html */ `
    <div class='lav-faq'>
      <div class='container'>

      <div class="lav-faq__head">
        <div class="lav-faq__title lav-quincy"><span>General</span> FAQs</div>
        <a href='/faqs/' class='lav-faq__btn lav-btn border link-btn dark'>
          Oakwell Beer Spa Full FAQs
        </a>
      </div>

        <div class="lav-faq__list accordion-faq js-accordion" data-active-class="open" data-open-first="false" data-hide-siblings="false" data-breakpoint="640" data-scroll-to-opened="false">
          <div class="accordion-faq__item js-accordion-item">
            <div class="accordion-faq__title js-accordion-title">
              <div class="a-text">How do I make an appointment?</div>
              <div class="a-icon"></div>
            </div>
            <div class="accordion-faq__dropdown js-accordion-dropdown">
              <div class="text-section"><p>Making an appointment at Oakwell Beer Spa is easy. You can book online 24/7 using our secure booking platform. </p>
                <p>If you prefer to email, you can email us at <a data-router-disabled href="mailto:hello@oakwell.com">hello@oakwell.com</a> to book an appointment or ask us a question. </p>
                <p>Please note that we require a credit card to book, so you’ll need to have your card information handy.</p>
              </div>
            </div>
          </div>
          
          <div class="accordion-faq__item js-accordion-item">
            <div class="accordion-faq__title js-accordion-title">
              <div class="a-text">How early should I check in for my appointment?</div>
              <div class="a-icon"></div>
            </div>
            <div class="accordion-faq__dropdown js-accordion-dropdown">
              <div class="text-section"><p>We ask that you check in 30 minutes before your Beer Therapy™ Room appointment so you can fill out the intake forms, get set up on the beer wall, pour yourself a beverage and ease yourself into this unique experience.</p>
              </div>
            </div>
          </div>
          
          <div class="accordion-faq__item js-accordion-item">
            <div class="accordion-faq__title js-accordion-title">
              <div class="a-text">Do I need to fill out any paperwork?</div>
              <div class="a-icon"></div>
            </div>
            <div class="accordion-faq__dropdown js-accordion-dropdown">
              <div class="text-section"><p>Not until you arrive. We will have a tablet at the reception desk for you to fill out our check-in form.</p>
              </div>
            </div>
          </div>
          
          <div class="accordion-faq__item js-accordion-item">
            <div class="accordion-faq__title js-accordion-title">
              <div class="a-text">What is your cancellation policy?</div>
              <div class="a-icon"></div>
            </div>
            <div class="accordion-faq__dropdown js-accordion-dropdown">
              <div class="text-section"><p>We prepare your Beer Therapy™ Room specifically for you, so we respectfully request at least 24 hours’ notice if you cannot join us for your scheduled reservation or 48 hours' notice for Garage Parties.</p>
                <p>Appointments canceled or rescheduled with less than the required hours' notice will be charged the total amount of your reserved services to the credit card on file, plus a 20% gratuity to compensate our staff for missed wages.</p>
                <p>Gift cards cannot be used for cancellation charges, and we do not provide refunds for cancellation charges.</p>
              </div>
            </div>
          </div>
          
          <div class="accordion-faq__item js-accordion-item">
            <div class="accordion-faq__title js-accordion-title">
              <div class="a-text">What if I arrive late for my appointment?</div>
              <div class="a-icon"></div>
            </div>
            <div class="accordion-faq__dropdown js-accordion-dropdown">
              <div class="text-section"><p>If you arrive late for your scheduled appointment, your time in the room may be reduced to ensure we can accommodate those booked after you. </p>
                <p>Shortened appointments due to late arrivals will still be charged at the total value.</p>
                <p>If you fail to show up for your appointment ('No Show'), or if we do not hear from you within 10 minutes after your scheduled appointment time, your appointment will be canceled, and the total amount of your reserved services will be charged to the credit card on file. </p>
                <p>A 20% gratuity will also be charged to the credit card on file to compensate our staff for missed wages.</p>
                <p>Gift cards cannot be used for no-show charges, and we do not provide refunds for no-show charges. </p>
              </div>
            </div>
          </div>
          
          <div class="accordion-faq__item js-accordion-item">
            <div class="accordion-faq__title js-accordion-title">
              <div class="a-text">Do you have a membership program?</div>
              <div class="a-icon"></div>
            </div>
            <div class="accordion-faq__dropdown js-accordion-dropdown">
              <div class="text-section"><p>Our membership program is coming soon! But first, before we create our membership levels, we want to hear from our guests about their ideal membership package and pricing. </p>
                <p>Interested in becoming a member? Please write to us at <a data-router-disabled href="mailto:hello@oakwell.com">hello@oakwell.com</a> to tell us what you would like included.</p>
              </div>
            </div>
          </div>
          
          <div class="accordion-faq__item js-accordion-item">
            <div class="accordion-faq__title js-accordion-title">
              <div class="a-text">What forms of payment do you accept?</div>
              <div class="a-icon"></div>
            </div>
            <div class="accordion-faq__dropdown js-accordion-dropdown">
              <div class="text-section"><p>We accept payment via debit card and all major credit cards, including Visa, Mastercard, American Express, and Discover. For health and safety purposes, we don’t accept cash payments.</p>
              </div>
            </div>
          </div>
          
          <div class="accordion-faq__item js-accordion-item">
            <div class="accordion-faq__title js-accordion-title">
              <div class="a-text">I like to support local – are you a local, small business?</div>
              <div class="a-icon"></div>
            </div>
            <div class="accordion-faq__dropdown js-accordion-dropdown">
              <div class="text-section"><p>Yes! Oakwell Beer Spa is a local, woman-owned, small business.</p>
              </div>
            </div>
          </div>
          
          <div class="accordion-faq__item js-accordion-item">
            <div class="accordion-faq__title js-accordion-title">
              <div class="a-text">Are gift cards refundable?</div>
              <div class="a-icon"></div>
            </div>
            <div class="accordion-faq__dropdown js-accordion-dropdown">
              <div class="text-section"><p>Our gift cards are non-refundable. However, the value never expires.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  `

    _$('.b-start-doing').insertAdjacentHTML('afterbegin', markup)

    _$$('.lav-faq .accordion-faq__item').forEach((item) => {
      item.addEventListener('click', function () {
        // pushDataLayer(
        //   'exp_hp_button_10',
        //   item.querySelector('.a-text').textContent,
        //   'click',
        //   'FAQ'
        // )
      })
    })
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
  function pushDataLayer(name = '', desc = '', type = '', loc = '') {
    window.dataLayer = window.dataLayer || []

    try {
      const event = {
        event: 'event-to-ga4',
        event_name: name,
        event_desc: desc,
        event_type: type,
        event_loc: loc
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
  if (
    !config.debug &&
    Array.isArray(config.clarity) &&
    config.clarity.length === 3
  ) {
    waitFor(
      () => typeof clarity == 'function',
      () => {
        clarity(...config.clarity)
      }
    )
  }

  // Svg objects
  function getSvg(name) {
    const svgObj = {
      waveTop: `
    <svg class='lav-wave-top' xmlns="http://www.w3.org/2000/svg" width="1440" height="328" viewBox="0 0 1440 328" fill="none">
      <path d="M1534 328V0H0V138.137C239.063 33.1365 547.657 4.28644 769.349 74.585C1027.49 156.476 1079.48 278.269 1534 328Z" fill="#DDF2D0"/>
    </svg>
    `,
      waveBottom: `
    <svg class="desk lav-wave" width="1440" height="526" viewBox="0 0 1440 526" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1724 0V526H0V326.56C177.189 455.006 182.776 291.236 377.524 263C687.164 218.106 1124.59 589.733 1724 0Z" fill="#DDF2D0"></path>
    </svg>
    <svg class="mob lav-wave" width="375" height="114" viewBox="0 0 375 114" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M375 0V114H0V70.7753C38.5417 98.6135 39.7569 63.1196 82.118 57C149.47 47.2701 244.618 127.813 375 0Z" fill="#DDF2D0"></path>
    </svg>
    `,
      leaf: `
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="49" viewBox="0 0 48 49" fill="none">
      <path d="M19.3053 38.4786C18.6445 29.2542 13.9026 23.8187 9.69502 20.7276C5.49051 17.5197 2.07039 17.0224 3.38285 13.876C5.11838 9.71296 7.11796 8.39 8.91372 6.61553C10.782 4.96104 12.9237 3.09817 18.0454 1.33317C20.4201 0.608547 20.1638 2.95292 19.5941 5.60673C17.8477 16.8661 21.728 16.5961 20.3182 33.5341C20.6054 25.6911 21.2987 24.1803 20.749 16.3293C20.59 14.0465 20.2395 10.2813 20.519 6.95496C20.7614 3.64282 21.7728 0.633799 23.953 0.535919C26.1332 0.438039 29.6151 0.240706 30.8287 4.549C32.2833 10.0745 32.0841 12.8972 31.7629 16.3151C31.1298 23.1004 21.0748 29.8557 21.955 36.48C23.0852 31.4928 26.6829 28.2975 29.6383 24.2876C32.5427 20.2493 34.8063 15.3947 32.0903 6.42925C31.5159 4.38956 30.9368 1.92046 32.6106 1.89204C34.7291 1.85573 36.9742 3.89699 38.3654 5.03682C40.7108 7.00547 42.0387 8.52734 44.097 11.7037C46.2448 14.9337 48.2814 19.3873 47.9679 22.6647C47.6051 25.7558 41.1184 26.8262 34.6102 29.1516C28.1189 31.556 21.6075 35.2154 21.5628 45.3429C21.4886 41.6613 24.6185 34.9692 30.6234 32.0328C36.7533 28.828 47.9402 25.3027 47.6576 28.5864C47.7302 29.431 47.0554 33.722 43.4145 34.7323C40.5842 35.468 35.9798 36.7073 31.8617 38.4218C27.736 40.1742 24.0966 42.4017 23.0466 45.9617C25.1759 42.5454 30.855 39.9389 40.246 37.012C47.094 34.6376 45.7491 35.858 44.1664 38.7517C43.1983 40.3668 40.9332 42.5912 40.0299 43.2826C35.0549 46.9547 30.0027 48.7197 24.2433 48.4782C18.4931 48.3124 12.6102 45.7281 7.32178 41.625C6.59761 41.044 6.15137 40.5625 5.74219 40.021C4.82347 38.8859 3.29638 36.0695 2.66177 34.3598C1.55312 31.7754 5.88424 33.1884 10.3358 36.0727C14.8553 38.9175 19.4937 43.2353 20.5607 45.5291C19.7222 42.8832 18.8004 41.5713 16.7236 39.3248C13.6602 36.0253 9.44333 33.9367 5.90123 32.6706C2.79919 31.3808 0.97255 29.2605 0.38117 27.0456C-0.261164 24.8291 -0.0851403 23.0815 0.859832 20.786C1.48209 19.2736 3.2516 19.0526 5.00104 19.5325C6.74121 19.9762 8.55858 21.1649 9.34297 21.7775C15.9516 26.4662 16.9784 31.0429 19.3038 38.4755L19.3053 38.4786Z" fill="#0C5947"/>
    </svg>
    `,
      leafProduct: `
      <svg class='lav-products__leaf' xmlns="http://www.w3.org/2000/svg" width="148" height="148" viewBox="0 0 148 148" fill="none">
        <path d="M114.498 130.617C107.681 134.361 99.8321 135.192 91.6067 133.754C83.4816 132.449 74.9795 128.88 69.1349 126.954C53.8626 121.25 34.4634 115.603 23.5996 119.95C28.2419 113.6 40.6181 112.499 56.3007 117.297C72.2981 121.957 87.4559 130.038 95.0371 129.763C106.612 131.462 115.982 125.848 124.05 120.044C131.999 114.056 138.65 107.868 141.97 104.19C142.963 103.16 142.662 102.71 141.536 103.497C135.639 107.735 124.317 114.882 117.7 116.134C101.292 119.371 92.5562 112.528 68.758 104.133C55.8236 99.5682 43.4092 104.062 36.2382 105.837C39.8022 101.547 44.2918 98.7283 49.8263 97.0626C60.8332 93.8643 72.8564 99.7865 83.973 105.168C95.2566 110.573 105.629 115.437 117.194 110.786C130.839 105.747 141.279 93.7409 144.919 89.3087C145.673 88.3644 145.172 87.9373 144.146 88.6064C139.647 91.6007 130.491 96.8443 123.449 97.9215C111.855 99.9099 103.067 94.7849 93.2098 91.3112C81.3155 87.0452 66.7637 84.7199 55.3417 88.0891C70.4326 77.6066 83.0617 84.9002 97.4704 90.049C111.831 95.6865 125.863 96.0234 140.181 82.9119C143.769 79.6803 146.407 75.9885 147.801 73.668C148.345 72.7663 147.7 72.3203 146.775 72.9372C143.717 74.9112 137.595 78.5794 129.375 78.8547C120.333 78.8452 114.374 76.2305 102.909 74.9634C93.3148 73.7202 83.4959 73.3643 77.408 74.4984C87.6133 66.6828 97.6469 71.0912 108.124 73.3643C118.54 75.8935 129.389 76.2826 139.809 66.3743C142.037 64.2152 143.822 61.8283 144.943 60.0772C145.453 59.28 144.843 58.5634 144.003 58.9146C142.242 59.6264 139.222 60.7321 133.874 61.2066C129.131 61.814 119.751 59.7877 112.437 59.7972C105.152 60.0582 98.1861 60.7036 94.6268 61.4154C102.06 54.9807 108.907 56.5799 116.302 57.1683C123.573 57.9181 131.393 57.6523 137.905 51.2224C138.65 50.4583 139.213 49.2008 139.542 48.1758C139.761 47.4925 139.036 46.7759 138.34 46.9515C137.094 47.2695 135.143 47.6111 132.609 47.4166C128.616 47.1793 123.115 44.6548 118.54 44.6738C114.689 44.7354 110.314 45.5564 107.709 47.3027C115.782 38.1157 121.426 43.8196 128.936 41.6035C133.182 40.308 136.064 37.5225 136.002 36.265C135.944 35.202 132.886 35.8426 129.155 35.3966C124.155 34.7939 123.826 32.6964 116.645 36.0419C121.459 32.1697 125.935 28.9903 127.027 25.3269C128.754 19.5423 127.042 18.7213 121.86 22.119C119.193 23.8701 116.975 28.53 114.622 33.8875C115.62 26.5417 115.71 24.3351 112.862 20.7096C110.357 17.5255 109.851 13.4018 108.487 13.658C107.614 13.8241 106.535 15.8029 106.941 21.9055C107.671 32.8341 114.622 33.8923 105.734 44.185C107.251 41.2571 108.172 36.488 107.69 33.693C106.965 29.4648 105.634 26.1858 102.575 20.2161C100.906 16.9608 100.462 12.1537 99.9037 10.2414C99.584 9.1689 99.0401 8.20558 98.3626 8.83672C97.6851 9.46785 95.6478 12.7137 95.0515 16.7662C93.6392 26.3614 96.8311 28.6059 98.4055 36.9957C99.8273 45.3191 98.1479 52.4419 91.9693 57.994C93.5295 54.7482 95.2137 50.2686 95.7814 45.8791C96.4971 40.3602 97.1269 35.2305 90.9579 20.0832C88.3767 13.7482 88.5676 7.84495 88.1095 5.49125C87.8853 4.36185 87.2984 3.83986 86.6782 4.47573C85.2803 5.91833 83.744 9.95663 83.0903 12.5476C79.6647 26.1146 80.6571 31.4816 83.5007 42.4861C85.9148 51.8345 86.1057 61.8425 74.135 69.9239C77.6895 65.3114 81.1151 56.7744 81.3394 47.0986C81.6018 35.5531 78.3526 28.3307 75.9814 18.7783C73.8344 10.1417 73.9251 4.35235 74.0587 1.18245C74.1064 0.233374 73.3573 -0.350307 72.8564 0.233374C71.5586 1.73291 69.5548 4.20999 68.0709 7.24228C62.0785 18.299 63.8199 32.1887 65.5566 46.7807C67.0881 61.1117 65.9383 73.9954 52.0735 83.7519C59.0536 74.3608 63.8676 62.0276 63.171 50.0598C62.6033 40.2179 59.1538 30.3855 58.8628 20.2541C58.6576 14.0424 59.9028 7.1284 60.5279 3.81614C60.671 3.04739 59.9744 2.73419 59.4067 3.30838C56.649 6.27423 50.0601 12.8656 46.6822 23.6897C43.7527 32.8103 45.2795 42.9654 46.3673 54.0364C47.3931 64.9934 47.9894 76.8568 41.7059 86.8269C38.6286 91.9139 35.2268 96.123 30.9233 99.7817C32.7553 91.9851 39.7116 84.0983 41.3862 67.8976C43.7527 44.9869 39.6162 36.1084 40.7946 23.2247C41.3147 17.9716 44.2966 10.4264 45.6755 7.0857C45.9474 6.42135 45.2317 6.4166 44.5924 7.08095C42.412 9.1879 38.4807 13.6533 34.1771 19.789C29.9929 25.977 23.695 33.7309 22.8124 43.7864C21.6912 56.5656 24.3964 64.0111 24.4966 79.6092C24.3391 94.837 23.5519 109.59 18.4325 114.583C20.5986 101.594 22.5309 92.1749 19.4583 68.1538C17.9697 56.5134 17.526 39.9379 23.299 29.3937C26.2046 23.3148 30.2935 17.5872 32.7029 14.2227C33.2802 13.416 32.5979 13.4824 31.7725 14.3271C30.3698 15.7507 28.7524 17.3879 27.5406 18.6549C19.9688 26.76 13.232 34.8034 8.84742 42.4577C4.33874 50.0977 2.18698 57.3486 0.913097 63.5224C-1.65852 78.29 1.07532 91.0455 10.7272 107.569C18.9001 121.065 12.7549 120.059 14.5584 121.696C14.5441 121.696 14.5346 121.696 14.525 121.701C14.6443 121.829 14.7779 121.966 14.9067 122.104C15.088 122.303 15.3122 122.541 15.5794 122.816C15.8418 123.091 16.0756 123.328 16.2855 123.532C16.4287 123.675 16.567 123.817 16.7006 123.95C16.7102 123.95 16.7197 123.945 16.734 123.94C19.4106 126.949 17.4831 119.518 31.6532 129.246C50.4084 142.495 66.3438 149.214 82.4176 147.819C89.3834 147.259 97.0553 145.461 104.689 141.626C112.385 137.783 120.109 131.732 129.198 122.944C130.677 121.511 132.676 119.522 134.542 117.662C135.649 116.561 135.401 116.177 134.213 117.136C129.208 121.169 121.798 127.063 114.498 130.627V130.617Z" fill="#B9D1B1"/>
      </svg>
    `
    }

    return svgObj[name]
  }
})()
