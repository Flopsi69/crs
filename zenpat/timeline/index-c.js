console.debug('*** Experiment started ***')

// Config for Experiment
const config = {
  // dir: 'http://127.0.0.1:5500/zenpat/timeline',
  dir: 'https://flopsi69.github.io/crs/zenpat/timeline',
  clarity: ['set', 'exp_zen_journey2', 'variant_1'],
  debug: true
}

// const orig = console.log
// console.log = function (...args) {
//   orig.apply(console, ['Debug:', ...args])
// }

// Styles for Experiment
const styles = /* css */ `
#ScienceBased, #ScienceBased + .science-based {
  display: none;
}
.header-shipping + .wave-bg {
  filter: brightness(100000%);
}
.ff-bb {
  font-family: Bebas,Bebas Fallback,Roboto,sans-serif;
}
.lav-timeline {
  position: relative;
  z-index: 1;
  margin-top: -100px;
  padding: 0 20px 25px;
  letter-spacing: 0;
}
.lav-timeline__inner {
  position: relative;
  margin-top: 24px;
}
.lav-timeline__inner .slick-list {
  margin: 0 -20px;
  padding: 0 20px;
  overflow: visible;
}
.lav-timeline__inner:before {
  content: '';
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  height: 2px;
  background: url('${config.dir}/img/horizontal-dash.svg') center center repeat-x;
}
.lav-timeline__caption {
  color: #000;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0.6px;
  text-align: center;
}
.lav-timeline__title {
  color: #212529;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  margin-top: 6px;
  text-align: center;
}
.lav-timeline__inner .lav-timeline__item {
  width: 202px;
  width: 57vw;
  position: relative;
  text-align: center;
  padding: 12px;
  border-radius: 16px;
  background: #FFF;
  box-shadow: 0px 2px 4px 0px rgba(12, 11, 11, 0.10);
  gap: 0;
  margin: 0 16px;
}
.lav-timeline__image {
  margin: auto;
  width: 146px;
  flex-shrink: 0;
  line-height: 0;
  border-radius: 24px;
}
.lav-timeline__image img {
  max-width: 100%!important;
  border-radius: 24px;
  box-shadow: 0px 2px 4px 0px rgba(12, 11, 11, 0.10), 0px 24px 60px 0px rgba(12, 11, 11, 0.05), 0px 12px 24px 0px rgba(12, 11, 11, 0.05);
}
.lav-timeline__info {
  margin-top: 24px;
}
.lav-timeline__step {
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0.6px;
}
.lav-timeline__name {
  margin-top: 4px;
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.6px;
}
.lav-timeline__descr {
  margin-top: 8px;
  color: #515151;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
}
.lav-timeline__list {
  display: flex;
  flex-flow: column;
  align-items: center;
  color: #515151;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  margin-top: 4px;
}
.lav-timeline__list-item {
  position: relative;
  padding-left: 12px;
}
.lav-timeline__list-item:before {
  content: '';
  width: 3px;
  height: 3px;
  background: #515151;
  border-radius: 50%;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}
.lav-timeline__link {
  margin-top: 6px;
}
.lav-link {
  display: inline-flex;
  align-items: center;
  gap: 7px;
}
.lav-link span {
  color: #2A7B72;
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  text-decoration-line: underline;
}
.lav-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 500px;
  background: #2A7B72;
  box-shadow: 0px 4px 15px 0px rgba(72, 67, 69, 0.51);
  color: #FFF;
  text-align: center;
  font-family: DINEngschrift LT, Roboto, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
  letter-spacing: 0.27px;
  text-transform: uppercase;
  height: 65px;
}
.lav-timeline__btn {
  margin-top: 56px;
}
.lav-timeline__note {
  margin-top: 25px;
  color: #676767;
  font-family: Barlow;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0;
  text-align: center;
}
.trust-rating {
  text-align: center;
}
.trust-rating .stars {
  margin-top: 8px;
  justify-content: center;
  gap: 12px;
  align-items: center;
}
.trust-rating .rate img {
  margin-top: 0;
  width: 103px;
}
`

const stylesEl = document.createElement('style')
stylesEl.classList.add('exp-styles')
stylesEl.innerHTML = styles

// *** Logic *** //
initExp()

async function initExp() {
  await waitFor(() => document.head && document.body, false, { ms: 20 })

  document.body.appendChild(stylesEl)

  console.debug('** InitExp **')
  waitFor('#ScienceBased', handleTimeline)
  waitFor('.trust-rating', handleTrust)
  addModals()
}

function handleTrust() {
  _$('.trust-rating .rate img').src = `${config.dir}/img/trustpilot-stars.svg`

  _$('.trust-rating .stars .text').innerText =
    _$('.trust-rating .stars .text').innerText.trim().split(' ')[0] + ' 3763'
}

function handleTimeline() {
  const markup = /* html */ `
    <div class='lav-timeline'>
      <div class='lav-timeline__caption ff-bb'>Discover the journey:</div>
      <div class='lav-timeline__title'>How our premium natural ingredients create lasting calm</div>

      <div class='slider lav-timeline__inner'>
        <div class='lav-timeline__item'>
          <div class='lav-timeline__image'>
            <img src='${config.dir}/img/step1.png' />
          </div>
          <div class='lav-timeline__info'>
            <div class='lav-timeline__step ff-bb'>Step 1</div>
            <div class='lav-timeline__name'>Plant harvest</div>
            <div class='lav-timeline__descr'>Our ingredients are sustainably harvested from nature’s finest plants.</div>
          </div>
        </div>

        <div class='lav-timeline__item'>
          <div class='lav-timeline__image'>
            <img src='${config.dir}/img/step2.png' />
          </div>
          <div class='lav-timeline__info'>
            <div class='lav-timeline__step ff-bb'>Step 2</div>
            <div class='lav-timeline__name'>Essential oil extraction</div>
            <div class='lav-timeline__descr'>Pure essential oils extracted through eco-friendly methods:</div>
            <div class='lav-timeline__list'>
              <div class='lav-timeline__list-item'>Lavender</div>
              <div class='lav-timeline__list-item'>Mandarin</div>
              <div class='lav-timeline__list-item'>Peppermint</div>
              <div class='lav-timeline__list-item'>Chamomile</div>
            </div>
          </div>
        </div>

        <div class='lav-timeline__item'>
          <div class='lav-timeline__image'>
            <img src='${config.dir}/img/step3.png' />
          </div>
          <div class='lav-timeline__info'>
            <div class='lav-timeline__step ff-bb'>Step 3</div>
            <div class='lav-timeline__name'>Blending of ingredients</div>
            <div class='lav-timeline__descr'>ZenPatches blend the highest quality oils to calm the nervous system, relax the mind, and promote overall tranquility</div>
            <div class='lav-timeline__link lav-link' data-trigger-modal='modal1'>
              <span>Learn more</span>
              ${getSvg('link-arrow')}
            </div>
          </div>
        </div>

        <div class='lav-timeline__item'>
          <div class='lav-timeline__image'>
            <img src='${config.dir}/img/step4.png' />
          </div>
          <div class='lav-timeline__info'>
            <div class='lav-timeline__step ff-bb'>Step 4</div>
            <div class='lav-timeline__name'>Patch infusion</div>
            <div class='lav-timeline__descr'>Each ZenPatch is infused with a special blend of essential oils, releasing a calming aroma every 5 minutes, thanks to our unique nanomaterial for long-lasting effect</div>
            <div class='lav-timeline__link lav-link' data-trigger-modal='modal2'>
              <span>Learn more</span>
              ${getSvg('link-arrow')}
            </div>
          </div>
        </div>

        <div class='lav-timeline__item'>
          <div class='lav-timeline__image'>
            <img src='${config.dir}/img/step5.png' />
          </div>
          <div class='lav-timeline__info'>
            <div class='lav-timeline__step ff-bb'>Step 5</div>
            <div class='lav-timeline__name'>Ready for use</div>
            <div class='lav-timeline__descr'>Apply ZenPatch to your clothing and enjoy its calming effects as the oils trigger receptors that help regulate emotions and behavior.</div>
            <div class='lav-timeline__link lav-link' data-trigger-modal='modal3'>
              <span>Learn more</span>
              ${getSvg('link-arrow')}
            </div>
          </div>
        </div>
      </div>

      <div class='lav-timeline__btn lav-btn'>get it now!</div>

      <div class='lav-timeline__note'><strong>30 Day Money Back Guarantee:</strong>  If our stickers don't work for you, get a full refund—no returns needed</div>
    </div>
  `

  _$('#ScienceBased').insertAdjacentHTML('beforebegin', markup)

  visibilityEvent('.lav-timeline__inner', () => {
    pushDataLayer(
      'exp_zenpatch_journey_view_02',
      _$('.slick-current .lav-timeline__name').innerText,
      'view',
      'Slider'
    )
  })

  _$('.lav-timeline__btn').addEventListener('click', () => {
    _$('#ScienceBased #open').click()
    pushDataLayer(
      'exp_zenpatch_journey_button_06',
      'Get it now',
      'click',
      'journey'
    )
  })

  _$$('[data-trigger-modal]').forEach((el) => {
    el.addEventListener('click', () => {
      const targetModal = el.dataset.triggerModal
      pushDataLayer(
        'exp_zenpatch_journey_link_02',
        el.innerText.trim(),
        'click',
        el
          .closest('.lav-timeline__info')
          .querySelector('.lav-timeline__name')
          .innerText.trim()
      )

      openModal(targetModal, el.innerText.trim())
    })
  })

  $('.lav-timeline__inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true,
    dots: false,
    focusOnSelect: true
    // adaptiveHeight: true
    // asNavFor: '.lav-modal__nav'
  })
}

const modalConfig = {
  modal1: {
    title: 'The art of blending: creating the perfect calm',
    descr: `

        At the heart of ZenPatch lies a meticulously crafted blend of premium essential oils, each selected for its unique calming properties. Our formulation process ensures that every drop works in harmony to support relaxation, emotional balance, and overall tranquility.
        <br/><br/>
        <strong>We combine:</strong><br/>
          🌿 Lavender – Soothes the nervous system and promotes deep relaxation.<br/>
          🍊 Mandarin – Gently uplifts mood and eases stress.<br/>
          🌱 Peppermint – Refreshes the mind and helps improve focus.<br/>
          🌼 Chamomile – Reduces tension and supports emotional balance.
        <br/><br/>
        Our expert aromatherapists carefully measure and mix these oils to create a synergistic effect—one that calms without drowsiness and refreshes without overstimulation. This precise blending process ensures that each ZenPatch delivers a steady, consistent aroma, helping both kids and adults stay centered and relaxed throughout the day.

    `,
    images: ['modal1-1.jpg', 'modal1-2.jpg', 'modal1-3.jpg'],
    feature: {
      name: 'V.S.',
      location: 'US',
      descr: `Bought NapPat Zen for my 2 year old granddaughter, because todderling can get out of control at times 😵‍💫… I put the Zen sticker on the back of her shirt by her neck to keep her from removing it… This was the first time using the Zen sticker and I was pleased with the results… No extreme toddler tantrums the whole day🤗… I can’t wait to put a sticker on her tomorrow .. I definitely recommend the NatPat Zen stickers and I’m also going to try the NatPat bedtime patch soon… From a very pleased grandma 😊`
    }
  },
  modal2: {
    title: 'Precision infusion for Long-Lasting calm',
    descr: `
      To ensure a consistent and effective release of essential oils, each ZenPatch is crafted using our innovative <strong>AromaWeave® Technology</strong>. This patented system integrates a premium cotton-rayon fiber matrix, designed to retain and <strong>gradually release essential oil molecules over time</strong>. Unlike traditional diffusers or sprays that dissipate quickly, AromaWeave® provides a controlled, slow-release diffusion that lasts <strong>up to 8 hours</strong>.<br/><br/>
      By embedding essential oils within a precisely engineered microstructur e, ZenPatch <strong>delivers a microdose of natural aromas every 5 minutes</strong>, continuously stimulating olfactory receptors to promote relaxation and emotional balance. The result? A seamless, hassle-free aromatherapy experience that enhances tranquility throughout the day or night—without the need for reapplication or refills.<br/><br/>
      Experience the power of wearable aromatherapy, powered by science and designed for your well-being. 
    `,
    images: ['modal2-1.jpg', 'modal2-2.jpg', 'modal2-3.jpg'],
    feature: {
      name: 'V.L.',
      location: 'US',
      descr: `The first time I purchased these I bought 2 packs of the calm ones for my non verbal autistic grandson who is 9 years old. He had reached a place of having trouble with regulating his emotions due to being non verbal 50% cause and 50% autistic. There were times the meltdowns became physical with him hitting and pulling hair. We didn't want to put him on medication because of negative side effects. I ran across an ad for Natpat stickers and ordered some. It has been amazing the difference it has made. No more physical meltdowns. He is calm within 30 to 45 minutes after applying sticker. More focused and engaging in play activities. Laughs a lot now and seems more happier and content throughout the day`
    }
  },
  modal3: {
    title: 'Effortless calm, anytime, anywhere',
    descr: `
      When you apply ZenPatch to your clothing, it begins working instantly, using the power of aromatherapy to support emotional balance and relaxation. Each patch releases a gentle, calming aroma every five minutes creating a steady and soothing experience throughout your day.<br/><br/>
      The essential oils in ZenPatch interact with receptors in your nose, sending signals to the limbic system—the part of the brain responsible for emotions and behavior. This natural process helps regulate mood, reduce feelings of stress, and promote a sense of tranquility without the need for synthetic chemicals.<br/><br/>
      Thanks to our <strong>AromaWeave™ technology,</strong> the patch ensures a controlled and <strong>consistent diffusion of essential oils</strong>, preventing overwhelming bursts of scent while maintaining their effectiveness. Whether you're at work, school, or winding down for the night, ZenPatch provides natural, effortless support for a calmer mind and body.
    `,
    images: ['modal3-1.jpg', 'modal3-2.jpg', 'modal3-3.jpg'],
    feature: {
      name: 'A.C.',
      location: 'Dallas, United States',
      descr: `This is the third day I’ve put one on my little boy’s shirt… once i notice him getting super hyper or all over the place doing everything under the sun… or even when he gets super cranky and fussy, I sneak and put one on his shirt. No lie, about 15-20 minutes later he’s a happy, calm, playful little dude. I also sent him to daycare wearing one and explained what it was to his teachers. At pick up time they expressed that he was a lot more gentle and calm with his friends and he had a great day. I wish I had known about these patches SOONER!!`
    }
  }
}

function addModals() {
  initModal()

  const markup = /* html */ `
    <div class='lav-modal__close'>
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M16.9998 1.00024L1 17" stroke="#161718" stroke-width="2" stroke-linecap="round"/>
        <path d="M16.9998 16.9998L1 1" stroke="#161718" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </div>

    <div class='lav-modal__title ff-u'></div>

    <div class='lav-modal__slider'>
      <div class="slider lav-modal__single"> </div>
      <div class="slider lav-modal__nav"></div>
    </div>
    
    <div class='lav-modal__descr'></div>
    <div class='lav-modal__feature lav-feature'></div>
    
    <button class="lav-btn lav-btn_purple lav-modal__btn">
      Get it now!
    </button>

    <img src="${config.dir}/img/trustpilot.png" class="lav-modal__trust">
  `

  new Modal('lav-details', markup)

  _$('.lav-modal__btn').addEventListener('click', () => {
    _$('#ScienceBased #open').click()
    pushDataLayer(
      'exp_zenpatch_journey_button_05',
      'Get it now',
      'click',
      'Pop up journey'
    )
  })
}

function openModal(modalId = 'modal1') {
  const info = modalConfig[modalId]

  pushDataLayer(
    'exp_zenpatch_journey_view_03',
    info.title,
    'view',
    'Pop up journey'
  )

  _$('.lav-modal__title').textContent = info.title
  _$('.lav-modal__descr').innerHTML = info.descr
  _$('.lav-modal__feature').innerHTML = ''

  addFeature(info.feature)

  initModalSlider()

  Modal.open('.lav-details')

  function initModalSlider() {
    if (_$('.lav-modal__single.slick-initialized')) {
      $('.lav-modal__single').slick('unslick')
      $('.lav-modal__nav').slick('unslick')
    }
    _$('.lav-modal__nav').innerHTML = ''
    _$('.lav-modal__single').innerHTML = ''

    info.images.forEach((img) => {
      const slide = document.createElement('div')
      slide.classList.add('lav-modal__single-slide')
      if (img.includes('.mp4')) {
        slide.innerHTML = `
          <video autoplay loop muted playsinline style="position: absolute; width: 100%; height: 100%; object-fit: cover;">
            <source src="${config.dir}/img/${img}" type="video/mp4">
          </video>
        `
      } else {
        slide.style.backgroundImage = `url(${config.dir}/img/${img})`
      }
      _$('.lav-modal__single').appendChild(slide)

      const navSlide = document.createElement('div')
      navSlide.classList.add('lav-modal__nav-slide')
      navSlide.style.backgroundImage = `url(${config.dir}/img/${img.replace(
        '.mp4',
        '.jpg'
      )})`
      _$('.lav-modal__nav').appendChild(navSlide)
    })

    $('.lav-modal__single').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true
      // asNavFor: '.lav-modal__nav'
    })

    $('.lav-modal__nav').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      asNavFor: '.lav-modal__single',
      focusOnSelect: true,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        }
      ]
    })
  }

  function addFeature(feature) {
    const markup = /* html */ `
        <div class="lav-feature__head">
          <div class="lav-feature__user">
            <div class="lav-feature__user-avatar">
              <img src="${config.dir}/img/avatar.svg">
            </div>
            <div class="lav-feature__user-name">
              ${feature.name}
            </div>
          </div>
          <div class="lav-feature__location">
            <div class="lav-feature__location-icon">
              ${getSvg('location')}
            </div>
            <div class="lav-feature__location-text">
              ${feature.location}
            </div>
          </div>
        </div>

        <div class="lav-feature__content">
          ${feature.descr}
        </div>
    `

    _$('.lav-modal__feature').insertAdjacentHTML('beforeend', markup)
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
        if (e.target.classList.contains('lav-modal')) {
          this.close()
        } else if (e.target.closest('.lav-modal__close')) {
          this.close()
          pushDataLayer(
            'exp_zenpatch_journey_button_04',
            'Close',
            'click',
            'Pop up journey'
          )
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
        z-index: 9999;
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
        letter-spacing: 0;
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
        margin: auto;
      }
      .lav-modal__inner.active {
        display: block;
      }
      .lav-modal__close {
        cursor: pointer;
        transition: 0.35s;
        line-height: 0;
        display: inline-block;
        padding: 10px;
        margin: -10px;
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
      .lav-details {
        padding: 30px 16px 40px;
      }
      .lav-modal__title {
        color: #000;
        font-family: 'Arial';
        font-size: 24px;
        font-weight: 700;
        line-height: 34px;
        margin-bottom: 20px;
        margin-top: 20px;
      }

      .lav-modal__descr {
        color: #515151;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
      }

      .lav-feature {
        margin-top: 26px;
      }
      .lav-feature__head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid rgba(0, 0, 0, 0.10);
        margin-bottom: 8px;
        padding-bottom: 8px;
      }
      .lav-feature__user {
        display: flex;
        align-items: center;
        gap: 13px;
      }
      .lav-feature__user-name {
        color: var(--Black, #000);
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
      }
      .lav-feature__location {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .lav-feature__location-text {
        color: #B2B2B2;
        font-size: 14px;
        font-weight: 500;
        line-height: 22px;
      }
      .lav-feature__content {
        color: #515151;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
      }

      .lav-modal__btn {
        width: 100%;
        margin: 30px 0;
        border: none;
      }
      .lav-modal__trust {
        margin: auto;
        display: block;
        max-width: 100%;
      }

      .lav-modal__slider {
        margin-bottom: 20px;
      }
      .lav-modal__single {
        margin-top: 20px;
      }
      .lav-modal__single .lav-modal__single-slide {
        border-radius: 24px;
        line-height: 0;
        padding-top: 33.334%;
        background-size: contain;
        background-repeat: no-repeat;
        overflow: hidden;
        margin: 0;
        box-shadow: none;
      }
      .lav-modal__nav {
        margin: 12px -6px 0;
      }
      .lav-modal__nav .lav-modal__nav-slide {
        border-radius: 8px!important;
        background-color: #D9D9D9;
        height: 56px;
        width: 56px;
        margin: 0 6px;
        background-size: cover;
        overflow: hidden;
        box-shadow: none;
        display: block!important;
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
    threshold: 0.6,
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
        }, 1000)
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
    location: `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <g clip-path="url(#clip0_181_200)">
          <path d="M8 6.10352e-05C4.69158 6.10352e-05 2 2.5995 2 5.79463C2 9.75988 7.36941 15.5811 7.59802 15.827C7.81275 16.058 8.18764 16.0575 8.40198 15.827C8.63059 15.5811 14 9.75988 14 5.79463C13.9999 2.5995 11.3084 6.10352e-05 8 6.10352e-05ZM8 8.71004C6.33545 8.71004 4.98128 7.40219 4.98128 5.79463C4.98128 4.18707 6.33549 2.87925 8 2.87925C9.66452 2.87925 11.0187 4.1871 11.0187 5.79466C11.0187 7.40223 9.66452 8.71004 8 8.71004Z" fill="#B2B2B2"/>
        </g>
        <defs>
          <clipPath id="clip0_181_200">
            <rect width="16" height="16" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    `,
    avatar: `
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
        <g clip-path="url(#clip0_181_194)">
          <path d="M8.87173 8.67071C10.0629 8.67071 11.0944 8.24348 11.9372 7.40056C12.78 6.55777 13.2072 5.52657 13.2072 4.33525C13.2072 3.14434 12.78 2.113 11.9371 1.26994C11.0941 0.42729 10.0628 6.10352e-05 8.87173 6.10352e-05C7.6804 6.10352e-05 6.6492 0.42729 5.80641 1.27008C4.96362 2.11286 4.53625 3.1442 4.53625 4.33525C4.53625 5.52657 4.96362 6.55791 5.80655 7.4007C6.64948 8.24335 7.68082 8.67071 8.87173 8.67071Z" fill="white"/>
          <path d="M16.4577 13.8412C16.4333 13.4904 16.3842 13.1078 16.3118 12.7038C16.2388 12.2968 16.1447 11.912 16.0321 11.5603C15.9158 11.1968 15.7576 10.8378 15.562 10.4938C15.359 10.1367 15.1206 9.8258 14.8531 9.56996C14.5734 9.3023 14.2309 9.08711 13.8348 8.93014C13.4401 8.774 13.0027 8.6949 12.5349 8.6949C12.3511 8.6949 12.1734 8.77029 11.8302 8.99373C11.619 9.13147 11.3719 9.29077 11.0962 9.46696C10.8604 9.6172 10.541 9.75796 10.1464 9.8854C9.76149 10.01 9.37065 10.0731 8.98489 10.0731C8.59914 10.0731 8.20844 10.01 7.82309 9.8854C7.42896 9.7581 7.10953 9.61734 6.87401 9.4671C6.60086 9.29255 6.35367 9.13325 6.1393 8.99359C5.79652 8.77016 5.61868 8.69476 5.43494 8.69476C4.96692 8.69476 4.52966 8.774 4.13512 8.93028C3.73933 9.08697 3.3967 9.30217 3.11668 9.5701C2.8493 9.82608 2.61076 10.1369 2.40807 10.4938C2.21265 10.8378 2.05444 11.1966 1.93799 11.5604C1.82552 11.9121 1.73145 12.2968 1.65839 12.7038C1.58601 13.1073 1.53685 13.49 1.51254 13.8416C1.48865 14.186 1.47656 14.5434 1.47656 14.9045C1.47656 15.8441 1.77525 16.6048 2.36426 17.1657C2.94598 17.7193 3.71571 18.0001 4.65175 18.0001H13.3189C14.2549 18.0001 15.0244 17.7194 15.6062 17.1657C16.1954 16.6052 16.494 15.8444 16.494 14.9043C16.4939 14.5417 16.4817 14.1839 16.4577 13.8412Z" fill="white"/>
        </g>
        <defs>
          <clipPath id="clip0_181_194">
            <rect width="18" height="18" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    `,
    'link-arrow': `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
        <rect y="0.45166" width="20" height="20" rx="10" fill="#2A7B72"/>
        <path d="M13.8584 10.078L10.6581 6.60521C10.5668 6.50607 10.445 6.45166 10.3152 6.45166C10.1852 6.45166 10.0636 6.50615 9.97221 6.60521L9.68165 6.92058C9.59037 7.01956 9.54009 7.15176 9.54009 7.29272C9.54009 7.4336 9.59037 7.57026 9.68165 7.66923L11.5486 9.69965H6.47874C6.21131 9.69965 6 9.92684 6 10.2171V10.663C6 10.9533 6.21131 11.2034 6.47874 11.2034H11.5698L9.68173 13.2451C9.59045 13.3442 9.54016 13.4728 9.54016 13.6138C9.54016 13.7546 9.59045 13.8851 9.68173 13.9841L9.97228 14.2985C10.0636 14.3976 10.1853 14.4517 10.3153 14.4517C10.4451 14.4517 10.5669 14.3969 10.6582 14.2978L13.8584 10.825C13.95 10.7256 14.0004 10.5929 14 10.4517C14.0003 10.3102 13.95 10.1773 13.8584 10.078Z" fill="white"/>
      </svg>
    `
  }

  return svgObj[name]
}
