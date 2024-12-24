console.debug('*** Experiment started ***')

// Config for Experiment
const config = {
  // dir: 'http://127.0.0.1:5500/oakwell/booking-listing',
  dir: 'https://flopsi69.github.io/crs/oakwell/booking-listing',
  clarity: ['set', 'new_hp', 'variant_1'],
  debug: false
}

// const orig = console.log
// console.log = function (...args) {
//   orig.apply(console, ['Debug:', ...args])
// }

// Styles for Experiment
const styles = /* css */ `
  .ff-lato {
    // font-family: 'Lato',Helvetica,sans-serif;
  }
  .back + .tickers {
    margin: 0 0 32px;
  }
  .b-booking-def-cont {
    overflow: hidden;
  }
  .lavp {
    position: relative;
    background-size: 100% auto;
    background-position: top center;
    color: #fff;
    padding: 92px 24px 0;
    border-radius: 24px;
    overflow: hidden;
    transition: 0.5s;
    transition-timing-function: cubic-bezier(0.1, -0.3, 0.5, 0.7);
  }
  .lavp.active {
    position: relative;
    transform: scale(1.6);
    opacity: 0.3;
    transform-origin: center;
    z-index: 1;
    transition: 0.9s;
  }
  .lavp[data-id="27351564"] {
    order: 1;
  }
  .lavp:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(180deg, rgba(179, 130, 75, 0.00) 18.55%, #B3824B 41.83%, #B16D1F 100%);
    pointer-events: none;
  }
  .lavp[data-id="28107448"] {
    background-color: #B16E22;
  }
  .lavp[data-id="68950903"] {
    background-color: #1A4B65;
  }
  .lavp[data-id="68950903"]:before {
    background: linear-gradient(180deg, rgba(26, 75, 101, 0.00) 21.91%, rgba(26, 75, 101, 0.90) 43.07%, #1A4B65 61.49%);
  }
  .lavp[data-id="68951079"] {
    background-color: #054330;
  }
  .lavp[data-id="68951079"]:before {
    background: linear-gradient(180deg, rgba(5, 67, 48, 0.00) 21.91%, rgba(5, 67, 48, 0.90) 45.41%, #054330 64.4%);
  }
  .lavp[data-id="27351564"] {
    background-color: #3B5923;
  }
  .lavp[data-id="27351564"]:before {
    background: linear-gradient(180deg, rgba(68, 89, 50, 0.00) 21.91%, rgba(68, 89, 50, 0.90) 45.41%, #3B5923 68.41%);
  }
  .lavp[data-id="68951432"] {
    background-color: #B72828;
  }
  .lavp[data-id="68951432"]:before {
    background: linear-gradient(180deg, rgba(183, 40, 40, 0.00) 26.41%, rgba(183, 40, 40, 0.90) 44.41%, #B72828 69.4%);
  }
  .lavp__label {
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 0px 0px 20px 0px;
    background: #C61717;
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 1px 20px 3px;
    text-align: center;
    font-size: 13px;
    font-weight: 500;
    line-height: 20px;
  }
  .lavp__title {
    position: relative;
    z-index: 1;
    display: flex;
    gap: 10px;
    font-size: 20px;
    font-weight: 700;
    line-height: 26px;
    align-items: center;
  }
  .lavp__title svg {
    position: relative;
    z-index: 1;
    flex-shrink: 0;
    width: 32px;
    height: 32px;
  }
  .lavp__descr {
    position: relative;
    z-index: 1;
    margin-top: 7px;
    font-size: 13px;
    font-weight: 400;
    line-height: 140%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  .lavp__footer {
    position: relative;
    z-index: 1;
    display: flex;
    gap: 15px;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(90deg, rgba(221, 242, 208, 0.00) 0%, rgba(221, 242, 208, 0.06) 56.5%);
    padding: 14px 24px 16px;
    margin: 14px -24px 0;
  }
  .lavp__price {
    font-size: 20px;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: 0.8px;
    text-transform: uppercase;
  }
  .lavp__price-per {
    margin-top: 2px;
    font-size: 12px;
    font-weight: 500;
    line-height: 140%;
  }
  .lavp__ideal {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    gap: 8px;
    color: #FFF;
    font-size: 13px;
    font-weight: 500;
    line-height: 20px;
    margin-top: 14px;
  }
  .lavp__ideal-persons {
    display: flex;
    align-items: center;
  }
  .lavp__details {
    color: #B27633;
    font-size: 16px;
    font-weight: 500;
    line-height: 110%;
    height: 40px;
    border: none;
    outline: none;
    width: 140px;
    border-radius: 50px;
  }
  .services__item {
    display: none!important;
  }
  .back-mob {
    margin-bottom: 12px;
  }
  .logs_skip .log:nth-child(2) {
    display: none;
  }
  .addons .addon[data-id="1581536"], .addons .addon[data-id="1581538"], .addons .addon[data-id="5423077"] {
    // order: 2;
  }
`

const stylesEl = document.createElement('style')
stylesEl.classList.add('exp-styles')
stylesEl.innerHTML = styles

// *** Logic *** //
initExp()

async function initExp() {
  await waitFor(() => document.head && document.body, false, { ms: 20 })

  document.head.appendChild(stylesEl)

  console.debug('** InitExp **')

  const packages = [
    {
      order: 1,
      nav: '2025 New Year',
      hero: 'party-hero.jpg',
      id: 28107448,
      label: 'Almost fully reserved',
      key: 'party',
      check: '#B26E22',
      color: '#C61717',
      title: 'Beer Therapy & Bubble<br/> - New Year 2025',
      altDescr:
        'Bringing in the new year with luxury spa treatments, a fun photo booth, refreshing drinks...',
      descr:
        'We’re bringing in the new year with luxury spa treatments, a fun photo booth, refreshing drinks, and delicious snacks',
      price: '$499',
      pricePer: 'For up to 2 adults',
      idealAmount: 2,
      ideal: 'Ideal for Couples and Friends',
      list: [
        'VIP experience for two',
        '90-minute private spa suite access',
        'Romantic suite decor with candles and rose petals',
        'Complimentary check-in drink',
        'Bottle of French sparkling wine',
        'Mimosa & beermosa bar',
        'Gourmet charcuterie board',
        'Artisan chocolate bonbons',
        '$15 Cosmetic minibar credit',
        '2 x 15-minute Zero Gravity Massage experiences',
        'Festive photo booth with Polaroid photos to take home'
      ],
      details: {
        title: 'Package Details:',
        descr:
          'Experience a relaxing and fun New Years in Denver. We’re bringing in the new year with luxury spa treatments, a fun photo booth, refreshing drinks, and delicious snacks.'
      },
      slider: [
        'https://oakwell.com/wp-content/uploads/2023/10/NYE4012.webp',
        'https://oakwell.com/wp-content/uploads/2023/10/NYE4123.webp',
        'https://oakwell.com/wp-content/uploads/2023/10/NYE3314.webp',
        'https://oakwell.com/wp-content/uploads/2023/10/NYE3315.webp',
        'https://oakwell.com/wp-content/uploads/2023/10/NYE3327.webp',
        'https://oakwell.com/wp-content/uploads/2023/10/NYE3971.webp',
        'https://oakwell.com/wp-content/uploads/2023/10/NYE4206.webp',
        'https://oakwell.com/wp-content/uploads/2023/10/NYE3945.webp'
      ],
      timing: {
        title: 'Timing | 90 minutes',
        descr:
          'Reservation includes a 90-minute session in a romantic Beer Therapy Room, bottle of French sparkling wine, bountiful charcuterie board paired with gourmet chocolates, $15 cosmetic mini-bar credit, and 15-minute zero gravity massages. Enjoy a complimentary drink at check-in, plus a mimosa bar and festive photo booth. Price per couple. 20% gratuity added at checkout. Cancellations made less than 7 days in advance will incur a 50% fee. Cancellations less than 24 hours in advance will incur a 100% fee.'
      }
    },
    {
      order: 2,
      nav: 'Beer Therapy Ritual',
      hero: 'ritual-hero.jpg',
      id: 68950903,
      label: false,
      key: 'ritual',
      color: '#C61717',
      check: '#1B4B65',
      title: 'Beer Therapy Ritual',
      altDescr:
        'Private spa suite with infrared sauna, rain shower, and hydrotherapy tub for solo or shared relaxation...',
      descr:
        'When you book your Denver spa day at Oakwell, you get access to a private Beer Therapy Room that includes everything you need for rest, relaxation, and other wellness benefits. Our private spa room accommodates up to two people.',
      price: '$199',
      pricePer: 'For up to 2 adults',
      idealAmount: 1,
      ideal: 'Ideal solo or for friends',
      list: [
        '90-minute beer therapy room access',
        'Private spa suite for up to two guests',
        'Beer bath, rain shower, and infrared sauna'
      ],
      details: {
        title: 'Package Details:',
        descr:
          'Each private spa suite Beer Therapy Room features an infrared sauna, a rain shower, and a relaxation deck to kick back and unwind. But that’s not it! The highlight of your Beer Therapy Room is the cedar hydrotherapy tub filled with water infused with a unique herbal blend of barley, hops, and other beneficial herbs. Soaking in this relaxing and fizzy beer bath offers many benefits, including reduced muscle tension, smoother skin, and decreased muscle and joint pain.'
      },
      slider: [
        'https://oakwell.com/wp-content/uploads/2023/10/Oakwell-Beer-Spa-Standard-Beer-Therapy-Room-Web-scaled.webp',
        'https://oakwell.com/wp-content/uploads/2023/10/Oakwell-Garage-Party-Double-Room-scaled.webp',
        'https://oakwell.com/wp-content/uploads/2023/10/Oakwell-Beer-Spa-Infrared-Sauna-Web-scaled.webp',
        'https://oakwell.com/wp-content/uploads/2023/10/Cold-Shower-Oakwell-Beer-Spa-Web-scaled.webp',
        'https://oakwell.com/wp-content/uploads/2023/10/TBS_Tubs_18-Web-scaled.webp',
        'https://oakwell.com/wp-content/uploads/2023/09/02-3.webp',
        'https://oakwell.com/wp-content/uploads/2023/10/190-From-the-Hip-Photo-web-scaled.webp',
        'https://oakwell.com/wp-content/uploads/2023/10/TBS_Sauna_Inside-Web-scaled.webp'
      ],
      timing: {
        title: 'Timing | 90 minutes',
        descr:
          'The private spa suite Beer Therapy Room is all yours for 90 minutes. This allows ample time to enjoy each spa treatment in your room. Detox in the sauna for 20 minutes, take a cold shower to keep your blood circulating, then relax in your beer bath for 40 minutes. While relaxing in your private spa suite, check out our Beer Therapy Minibar and beer-infused shower products to enhance your experience. Your beer bath will start to drain 70 minutes after your appointment start time leaving you 20 minutes to shower, gather your belongings, and exit the room.'
      }
    },
    {
      order: 3,
      nav: `Couple's Retreat`,
      hero: 'retreat-hero.jpg',
      id: 68951079,
      label: false,
      key: 'retreat',
      check: '#0C5947',
      color: '#C61717',
      title: `Couple's Retreat`,
      altDescr:
        'Private spa suite with infrared sauna, rain shower, hydrotherapy tub, and artisan chocolates for two...',
      descr: `Are you looking for a special spa treatment with your significant other? The Couple's Retreat package makes Oakwell Beer Spa the best spa in Denver for couples.`,
      price: '$259',
      pricePer: 'For up to 2 adults',
      idealAmount: 2,
      ideal: 'Ideal for Couples',
      list: [
        '90-minute beer therapy room access',
        'Romantic private spa suite for up to two guests',
        'Tastefully decorated with rose petals and candles',
        'Beer bath, rain shower, and infrared sauna',
        'Artisan chocolate bonbons'
      ],
      details: {
        title: 'Package Details:',
        descr: `This spa package allows you to enjoy your private spa suite Beer Therapy Room with a touch of romance – candles, and rose petals. You can add a ‘Happy Birthday’ or ‘Happy Anniversary’ banner to enhance your experience. The Couple's Retreat package comes with a selection of artisan chocolate bonbons from a local chocolatier. What better way to spend quality time together than detoxing in an infrared sauna, resting on a relaxation deck, and soaking in a warm bubbly herbal beer bath?`
      },
      slider: [
        'https://oakwell.com/wp-content/uploads/2024/09/040-From-the-Hip-Photo-scaled.webp',
        'https://oakwell.com/wp-content/uploads/2024/09/111-From-the-Hip-Photo-1-scaled.webp',
        'https://oakwell.com/wp-content/uploads/2024/09/146-From-the-Hip-Photo-scaled.webp',
        'https://oakwell.com/wp-content/uploads/2024/09/198-From-the-Hip-Photo-scaled.webp',
        'https://oakwell.com/wp-content/uploads/2024/09/207-From-the-Hip-Photo-1-scaled.webp',
        'https://oakwell.com/wp-content/uploads/2024/09/TBS_Tubs_15-3-scaled.webp',
        'https://oakwell.com/wp-content/uploads/2024/08/image-6.webp',
        'https://oakwell.com/wp-content/uploads/2024/08/image-4.webp'
      ],
      timing: {
        title: 'Timing | 90 minutes',
        descr: `The Couple's Retreat package takes place in the Beer Therapy Room, which you can enjoy for 90 minutes. Detox in the sauna for 20 minutes, take a cold shower to keep your blood circulating, then relax in your beer bath for 40 minutes. While relaxing in your private spa suite, check out our Beer Therapy Minibar and beer-infused shower products to enhance your experience. Beer bath will start to drain 70-minutes after your appointment start time leaving you 20 minutes to shower, gather your belongings, and exit the room.`
      }
    },
    {
      order: 4,
      nav: 'Oakwell Escape',
      hero: 'escape-hero.jpg',
      id: 68951432,
      label: 'Couples favorite',
      key: 'escape',
      color: '#134D3A',
      check: '#B72929',
      title: 'Oakwell Escape',
      altDescr:
        'Romantic private spa suite with candles, rose petals, charcuterie, chocolates, and zero-gravity massages...',
      descr: `
        The Oakwell Escape package makes Oakwell Beer Spa the best date night in Denver for couples. Relax and connect with your significant other while enjoying an intimate and rejuvenating spa day like never before.<br/><br/>
        During your spa date, you’ll spend quality time together while treating yourselves to delicious drinks and snacks, an infrared sauna, a herbal beer bath, and a zero gravity massage experience.
        `,
      price: '$349',
      pricePer: 'For up to 2 adults',
      idealAmount: 2,
      ideal: 'Ideal for Couples',
      list: [
        '90-minute private spa suite access',
        'Romantic suite decor with candles & rose petals',
        'Artisan chocolate bonbons',
        'Gourmet charcuterie board',
        'Complimentary check-in drink',
        '2 x 30-minute Zero Gravity Massage experiences'
      ],
      details: {
        title: 'Package Details:',
        descr: `
          With the Oakwell Escape package, you and your date can enjoy a 90-minute spa session in a private spa suite known as the Beer Therapy Room. This tranquil space will be romantically decorated with candles and rose petals. While enjoying your couples spa day, you can also indulge in a gourmet charcuterie board paired with artisan chocolate bonbons.<br/>
          In your Beer Therapy Room, you can treat yourselves to the ultimate relaxation while detoxing in the sauna and then soaking in a cedar hydrotherapy tub filled with warm, bubbly water infused with a therapeutic blend of barley, hops, and other beneficial herbs.<br/>
          The Oakwell Escape package also includes a 30-minute Zero Gravity Massage experience.
          `
      },
      slider: [
        'https://oakwell.com/wp-content/uploads/2024/09/IMG_3831-scaled.webp',
        'https://oakwell.com/wp-content/uploads/2024/09/IMG_3836-scaled.webp',
        'https://oakwell.com/wp-content/uploads/2024/09/TBS_Valentines_12-scaled.webp',
        'https://oakwell.com/wp-content/uploads/2024/09/TBS_Valentines_5-scaled.webp',
        'https://oakwell.com/wp-content/uploads/2024/09/118-From-the-Hip-Photo-scaled.webp',
        'https://oakwell.com/wp-content/uploads/2024/09/105-From-the-Hip-Photo-scaled.webp',
        'https://oakwell.com/wp-content/uploads/2024/09/171-From-the-Hip-Photo-scaled.webp',
        'https://oakwell.com/wp-content/uploads/2024/09/017-From-the-Hip-Photo-scaled.webp',
        'https://oakwell.com/wp-content/uploads/2024/09/236-From-the-Hip-Photo-scaled.webp',
        'https://oakwell.com/wp-content/uploads/2024/09/233-From-the-Hip-Photo-scaled.webp',
        'https://oakwell.com/wp-content/uploads/2024/09/155-From-the-Hip-Photo-scaled.webp',
        'https://oakwell.com/wp-content/uploads/2024/09/TBS_Valentines_9-scaled.webp'
      ],
      timing: {
        title: 'Timing | 90 minutes',
        descr: `
            The total Oakwell Escape spa day will last about 90 minutes, giving you ample time to enjoy the best couples spa day in Denver.<br/>
            Detox in the sauna for 20 minutes, take a cold shower to keep your blood circulating, then relax in your beer bath for 40 minutes.<br/>
            While relaxing in your private spa suite, check out our Beer Therapy Minibar and beer-infused shower products to enhance your experience.<br/>
            Your beer bath will start to drain 70 minutes after your appointment start time leaving you 20 minutes to shower, gather your belongings, and exit the room.<br/>
            After your Beer Therapy™ Room session, head to the Relaxation Lounge to enjoy a 30-minute Zero Gravity Massage experience together.
          `
      }
    },
    {
      order: 5,
      nav: 'Garage Party',
      hero: 'garage-hero.jpg',
      id: 27351564,
      label: false,
      key: 'garage',
      color: '#C61717',
      check: '#3C5A23',
      title: 'Garage Party',
      altDescr:
        'Group outing with two spa suites, infrared saunas, rain showers, and hydrotherapy tubs...',
      descr:
        'If you’re planning a day at the spa with friends, The Garage Party package is perfect. This is easily one of the most fun but relaxing ways to hang out with a small group.',
      price: '$450',
      pricePer: 'For up to 4 adults',
      idealAmount: 4,
      ideal: 'Ideal for groups',
      list: [
        '90-minute access to two private spa suites',
        'Private Beer Therapy™ Rooms with open garage doors',
        'Locally crafted beer, wine, and cider on tap',
        'Zero Gravity Massage add-on',
        'Customizable party setup'
      ],
      details: {
        title: 'Package Details:',
        descr:
          'The Garage Party package offers a spa day for up to four people. We’ll merge two Beer Therapy Rooms via a garage door to create a larger space with two beer baths, two saunas, and two showers. Up to four people can detox in the sauna, take a cold rain shower to keep your blood flowing, then enjoy the benefits of a bubbly beer bath. Keep in mind that Oakwell Beer Spa isn’t a loud party spot but rather a calm space to unwind. Your beer bath will start to drain 70 minutes after your appointment start time leaving you 20 minutes to shower, gather your belongings, and exit the room.<br/> Beverages are sold separately.'
      },
      slider: [
        'https://oakwell.com/wp-content/uploads/2023/10/Garage-Party-Web-3-scaled.webp',
        'https://oakwell.com/wp-content/uploads/2023/10/Garage-Party-Web-2-scaled.webp',
        'https://oakwell.com/wp-content/uploads/2023/10/Garage-Party-Web-scaled.webp',
        'https://oakwell.com/wp-content/uploads/2023/10/Oakwell-Garage-Party-Double-Room-scaled.webp',
        'https://oakwell.com/wp-content/uploads/2023/10/Oakwell-Garage-Party-Robes-scaled.webp',
        'https://oakwell.com/wp-content/uploads/2023/10/Oakwell-Garage-Party-Cheering-scaled.webp',
        'https://oakwell.com/wp-content/uploads/2023/10/Oakwell-Garage-Party-scaled.webp'
      ],
      timing: {
        title: 'Timing | 90 minutes',
        descr:
          'The Garage Party package lasts 90 minutes and can be booked at 8:30am, 9:00am or 9:00pm daily.'
      }
    }
  ]

  waitFor(
    () => _$('.services-title') && _$('.tickers'),
    () => {
      changeLayout(packages)
      addModalMarkup(packages)
      addNavigation(packages)
    }
  )
  // Modal.open('.lav-package')
}

function changeLayout(packages) {
  _$('.services-title span').textContent = 'СHOOSE your Experience'

  _$('.steps').insertAdjacentElement('beforebegin', _$('.tickers'))

  _$$('.services__item').forEach((item) => {
    const package = packages.find((p) => p.id == item.dataset.id)

    item.insertAdjacentHTML('beforebegin', getPackageMarkup(package))

    _$$('.lavp__details').forEach((el) => {
      el.addEventListener('click', () => {
        if (el.closest('.lavp').classList.contains('active')) return

        pushDataLayer(
          'exp_hp2_button_01',
          `See details - ${el
            .closest('.lavp')
            .querySelector('.lavp__title')
            .innerText.trim()}`,
          'click',
          'Choose your experience'
        )

        if (
          !_$(
            '.lavd-nav__item[data-id="' + package.id + '"]'
          ).classList.contains('active')
        ) {
          _$('.lavd-nav__item.active').classList.remove('active')
          _$('.lavd-pack.active').classList.remove('active')
          _$('.lavd-nav__item[data-id="' + package.id + '"]').classList.add(
            'active'
          )
          _$('.lavd-pack[data-id="' + package.id + '"]').classList.add('active')
          setTimeout(() => {
            _$('.lavd-nav__item.active').scrollIntoView({
              behavior: 'smooth',
              inline: 'center'
            })
          }, 500)
        }

        fillPopAddons()

        el.closest('.lavp').classList.add('active')
        // setTimeout(() => {
        //   el.closest('.lavp').classList.remove('active')
        // }, 1200)
        Modal.open('.lav-package')
      })
    })
  })

  function getPackageMarkup(package) {
    const packageMarkup = /* html */ `
      <div
        class='lavp' 
        data-id="${package.id}" 
        data-key="${package.key}" 
        ${
          package.hero
            ? `style="background-image: url(${config.dir}/img/${package.hero}); background-color: ${package.check}"`
            : ''
        }
      >
        ${
          package.label
            ? `
            <div class='lavp__label ff-lato' style="background-color: ${
              package.color || '#C61717'
            }">
              ${getSvg('label-' + package.key)}
              ${package.label}
            </div>
            `
            : ''
        }
  
        <div class='lavp__title'>
          ${getSvg(package.key)}
          ${package.title}
        </div>

        <div class='lavp__descr'>${package.altDescr || package.descr}</div>

        <div class='lavp__ideal ff-lato'>
          <div class='lavp__ideal-persons'>
            ${Array(package.idealAmount)
              .fill('')
              .map(() => getSvg('person-icon'))
              .join('')}
          </div>
          ${package.ideal}
        </div>

        <div class='lavp__footer'>
          <div class='lavp__footer-price'>
            <div class='lavp__price'>${package.price}</div>
            <div class='lavp__price-per'>${package.pricePer}</div>
          </div>

          <button style='color: ${
            package.check
          }' class='lavp__details ff-dm-sans'>See details</button>
        </div>
      </div>
    `

    return packageMarkup
  }
}

function fillPopAddons() {
  console.log('fillPopAddons')
  _$('.lav-pop__list').innerHTML = ''

  const addonsConfig = {
    27351564: ['1581536', '1581538'],
    68951079: ['1581536', '1581538'],
    68950903: ['1581536', '1581538'],
    28107448: ['5423077']
  }

  const addons = addonsConfig[_$('.lavd-nav__item.active').dataset.id]

  if (addons) {
    for (const addon of addons) {
      const addonEl = _$('.addon[data-id="' + addon + '"]').cloneNode(true)
      addonEl.removeAttribute('style')
      addonEl.classList.remove('active')
      _$('.lav-pop__list').insertAdjacentElement('beforeend', addonEl)
    }
  }

  _$$('.lav-pop__list .addon').forEach((el) => {
    el.addEventListener('click', () => {
      pushDataLayer(
        'exp_hp2_button_05',
        el.querySelector('.addon-title').innerText.trim(),
        'click',
        'Experience pop up'
      )
      el.classList.toggle('activated')
    })
  })
}

function changeSlide(target, isReverse) {
  setTimeout(() => {
    _$('.lav-modal__inner').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }, 100)

  if (_$('.lavd-pack.active.exiting')) {
    clearTimeout(timerExitingAnim)
    _$('.lavd-pack.active.exiting').classList.remove(
      'active',
      'exiting',
      'exiting-reverse'
    )
  }

  _$('.lavd-pack.active').classList.add(
    'exiting',
    isReverse ? 'exiting-reverse' : 'exiting'
  )
  target.classList.add('active')

  timerExitingAnim = setTimeout(() => {
    _$('.lavd-pack.active.exiting')?.classList.remove(
      'active',
      'exiting',
      'exiting-reverse'
    )
  }, 610)
}

var timerExitingAnim = null
let isDisableEventNav = false

function addNavigation(packages) {
  const navMarkup = /* html */ `
    <div class='lavd-nav'></div>
  `

  _$('.lav-package').insertAdjacentHTML('afterbegin', navMarkup)

  packages.forEach((package, index) => {
    const el = document.createElement('div')
    el.classList.add('lavd-nav__item')

    if (index === 0) {
      el.classList.add('active')
    }

    el.dataset.id = package.id
    el.innerHTML = /* html */ `
      <div class='lavd-nav__title'>${package.nav}</div>
    `

    el.addEventListener('click', () => {
      if (el.classList.contains('active')) return

      if (!isDisableEventNav) {
        pushDataLayer('exp_hp2_button_04', package.nav, 'click', 'Header')
      }

      const activeIndex = Array.from(_$$('.lavd-nav__item')).indexOf(
        _$('.lavd-nav__item.active')
      )

      const currentIndex = Array.from(_$$('.lavd-nav__item')).indexOf(el)

      console.log('activeIndex', activeIndex, currentIndex)

      changeSlide(
        _$('.lavd-pack[data-id="' + package.id + '"]'),
        activeIndex < currentIndex
      )
      el.scrollIntoView({ behavior: 'smooth', inline: 'center' })

      _$('.lavd-nav__item.active').classList.remove('active')
      el.classList.add('active')

      fillPopAddons()
    })

    _$('.lavd-nav').insertAdjacentElement('beforeend', el)
  })
}

function addModalMarkup(packages) {
  new Modal('lav-package')

  packages.forEach((package, index) => {
    _$('.lav-package').insertAdjacentHTML(
      'beforeend',
      getPackageMarkup(package, index)
    )

    const pack = _$('.lavd-pack[data-id="' + package.id + '"]')

    swipeHandler(pack)
  })

  scrollHandler(_$('.lav-modal'))
  function scrollHandler(pack) {
    const thresholds = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
    let triggeredDepths = new Set()

    pack.addEventListener('scroll', () => {
      const scrollHeight = pack.scrollHeight - pack.clientHeight - 50
      const scrolledPercentage = (pack.scrollTop / scrollHeight) * 100

      // const packId = _$('.lavd-nav__item.active').dataset.id

      thresholds.forEach((depth) => {
        if (scrolledPercentage >= depth && !triggeredDepths.has(depth)) {
          triggeredDepths.add(depth)
          pushDataLayer(
            'exp_hp2_scroll_01',
            `Scroll - ${depth}`,
            'other',
            'Event details'
          )
        }
      })
    })
  }

  function swipeHandler(pack) {
    let startX = 0
    let endX = 0

    pack.addEventListener(
      'touchstart',
      (event) => {
        startX = event.touches[0].clientX // Record the starting touch position
      },
      { passive: true }
    )

    pack.addEventListener(
      'touchmove',
      (event) => {
        endX = event.touches[0].clientX // Continuously update the current touch position
      },
      { passive: false }
    )

    pack.addEventListener('touchend', (e) => {
      console.log('e', e)
      if (
        e.target.closest('.swiper__wrap') ||
        e.target.closest('.b-goog-review') ||
        e.target.closest('.lav-modal__close')
      )
        return
      const deltaX = endX - startX
      const activeNav = _$('.lavd-nav__item.active')

      isDisableEventNav = true
      if (deltaX > 80) {
        if (activeNav.previousElementSibling) {
          activeNav.previousElementSibling.click()
        }
        console.log('Swiped right', pack)
        pushDataLayer('exp_hp2_element_01', 'Swipe', 'click', 'Event details')
      } else if (deltaX < -80) {
        if (activeNav.nextElementSibling) {
          activeNav.nextElementSibling.click()
        }
        console.log('Swiped left', pack)
        pushDataLayer('exp_hp2_element_01', 'Swipe', 'click', 'Event details')
      }
      isDisableEventNav = false

      // Reset start and end positions
      startX = 0
      endX = 0
    })
  }

  _$('.back-mob').addEventListener('click', (e) => {
    console.log(
      _$('.step.active'),
      _$('.step.packages.active'),
      _$('.lavd-nav__item.active').dataset.id
    )
    setTimeout(() => {
      if (
        _$('.step.packages.active') &&
        _$('.lavd-nav__item.active').dataset.id !== '28107448'
      ) {
        console.log('fire')
        _$('.back-mob').click()
      }
    }, 10)
  })

  _$$('.package-btn').forEach((el) => {
    el.addEventListener('click', () => {
      setTimeout(() => {
        _$$('.lav-pop__list .addon').forEach((el) => {
          const target = _$(`.addons .addon[data-id="${el.dataset.id}"]`)

          if (el.classList.contains('activated')) {
            target.classList.add('active')
          } else {
            target.classList.remove('active')
          }
        })
      }, 20)
    })
  })

  waitFor(
    () => typeof Swiper !== 'undefined',
    () => {
      console.log('fire')
      _$$('.lav-package .swiper').forEach((el) => {
        new Swiper(el, {
          slidesPerView: 'auto',
          spaceBetween: 16,
          navigation: {
            nextEl: el.querySelector('.swiper-button-next'),
            prevEl: el.querySelector('.swiper-button-prev')
          }
        })
      })
    }
  )

  _$('.lav-sticky__btn').addEventListener('click', () => {
    pushDataLayer(
      'exp_hp2_button_02',
      'Select package',
      'click',
      'Stiky button'
    )
    toggleModalPopup(true)
    // selectModalPackage()
    return
  })

  function getPackageMarkup(package, idx) {
    const packageMarkup = /* html */ `
      <div class='lavd-pack ${idx === 0 ? 'active' : ''}' data-id="${
      package.id
    }" data-key="${package.key}">
        <div class="lav-modal__close">${getSvg('close')}</div>
        <div class='lavd-hero' ${
          package.hero
            ? `style="background-image: url(${config.dir}/img/${package.hero}")`
            : ''
        }>
          ${
            package.label
              ? `<div class='lavd-hero__label ff-lato' style="background-color: ${
                  package.color || '#C61717'
                }">
            ${getSvg('label-' + package.key)}
            ${package.label}
          </div>`
              : ''
          }
          <div class='lavd-hero__icon'>
            ${getSvg(package.key)}
          </div>
          <div class='lavd-hero__title'>${package.title}</div>
          <div class='lavd-hero__descr'>${package.descr}</div>
          <div class='lavd-hero__footer'>
            <div class='lavd-hero__footer-price'>
              <div class='lavd-hero__price'>${package.price}</div>
              <div class='lavd-hero__price-per'>${package.pricePer}</div>
            </div>
              <div class='lavd-hero__ideal ff-lato'>
                <div class='lavd-hero__ideal-persons'>
                ${Array(package.idealAmount)
                  .fill('')
                  .map(() => getSvg('person-icon'))
                  .join('')}
                  </div>
                ${package.ideal}
              </div>
          </div>
        </div>

        <div class='lavd-list'>
          ${package.list
            .map((item) => {
              return `
              <div class='lavd-item'>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <g clip-path="url(#clip0_2266_3893)">
                  <path d="M9 0C7.21997 0 5.47991 0.527841 3.99987 1.51677C2.51983 2.50571 1.36628 3.91131 0.685088 5.55585C0.00389957 7.20038 -0.17433 9.00998 0.172937 10.7558C0.520204 12.5016 1.37737 14.1053 2.63604 15.364C3.89472 16.6226 5.49836 17.4798 7.24419 17.8271C8.99002 18.1743 10.7996 17.9961 12.4442 17.3149C14.0887 16.6337 15.4943 15.4802 16.4832 14.0001C17.4722 12.5201 18 10.78 18 9C18 6.61305 17.0518 4.32387 15.364 2.63604C13.6761 0.948212 11.387 0 9 0ZM14.115 6.82875L8.4675 13.2338C8.37637 13.3364 8.26585 13.4201 8.14229 13.4799C8.01873 13.5398 7.88457 13.5746 7.7475 13.5825H7.68C7.4242 13.5841 7.17694 13.4905 6.98625 13.32L3.96375 10.6388C3.75589 10.4543 3.62983 10.1948 3.6133 9.91731C3.59678 9.63988 3.69114 9.36724 3.87563 9.15938C4.06012 8.95151 4.31963 8.82545 4.59706 8.80892C4.8745 8.7924 5.14714 8.88676 5.355 9.07125L7.605 11.055L12.5588 5.43C12.7427 5.22164 13.002 5.0949 13.2794 5.07767C13.5569 5.06044 13.8298 5.15413 14.0381 5.33813C14.2465 5.52212 14.3732 5.78135 14.3905 6.05879C14.4077 6.33622 14.314 6.60914 14.13 6.8175L14.115 6.82875Z" fill="${package.check}"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_2266_3893">
                  <rect width="18" height="18" fill="white"/>
                  </clipPath>
                  </defs>
                </svg>
                ${item}
              </div>`
            })
            .join('')}
        </div>

        <div class='lavd-divider'></div>

        <div class='lavd-details'>
          <div class='lavd-details__section'>
            <div class='lavd-details__title'>${package.details.title}</div>
            <div class='lavd-details__descr'>
            ${package.details.descr}
            </div>
          </div>

          <div class='lavd-details__section swiper__wrap'>
            <div class='swiper'>
              <div class="swiper-wrapper">
                ${package.slider
                  .map((item) => {
                    return `
                    <div class="swiper-slide">
                      <img src='${item}' />
                    </div>
                    
                    `
                  })
                  .join('')}
              </div>
              <div class="swiper-control__wrap">
                <div class="swiper-control swiper-button-prev">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M13.7162 18.6291C13.8834 18.6291 14.0506 18.5675 14.1826 18.4355C14.4378 18.1803 14.4378 17.7579 14.1826 17.5027L8.44502 11.7651C8.02262 11.3427 8.02262 10.6563 8.44502 10.2339L14.1826 4.49627C14.4378 4.24107 14.4378 3.81867 14.1826 3.56347C13.9274 3.30827 13.505 3.30827 13.2498 3.56347L7.51222 9.30107C7.06342 9.74987 6.80822 10.3571 6.80822 10.9995C6.80822 11.6419 7.05462 12.2491 7.51222 12.6979L13.2498 18.4355C13.3818 18.5587 13.549 18.6291 13.7162 18.6291Z" fill="#FBF6F1"/>
                  </svg>
                </div>
                <div class="swiper-control swiper-button-next">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M8.28378 18.6291C8.11658 18.6291 7.94938 18.5675 7.81738 18.4355C7.56218 18.1803 7.56218 17.7579 7.81738 17.5027L13.555 11.7651C13.9774 11.3427 13.9774 10.6563 13.555 10.2339L7.81738 4.49627C7.56218 4.24107 7.56218 3.81867 7.81738 3.56347C8.07258 3.30827 8.49498 3.30827 8.75018 3.56347L14.4878 9.30107C14.9366 9.74987 15.1918 10.3571 15.1918 10.9995C15.1918 11.6419 14.9454 12.2491 14.4878 12.6979L8.75018 18.4355C8.61818 18.5587 8.45098 18.6291 8.28378 18.6291Z" fill="#FBF6F1"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          <div class='lavd-details__section'>
            <div class='lavd-details__title'>${package.timing.title}</div>
            <div class='lavd-details__descr'>
              ${package.timing.descr}
            </div>
          </div>
        </div>
      </div>
    `

    return packageMarkup
  }
}

function selectModalPackage() {
  const id = _$('.lavd-nav__item.active').dataset.id

  _$(`.services__item[data-id="${id}"] .service-btn`)?.click()

  setTimeout(() => {
    if (
      _$$(".packages.active .package:not([style='display: none;'])").length ===
      1
    ) {
      _$(
        ".packages.active .package:not([style='display: none;']) .package-btn"
      ).click()
      _$('.logs').classList.add('logs_skip')
    } else {
      _$('.logs').classList.remove('logs_skip')
    }
  }, 10)

  _$('.steps').insertAdjacentElement('afterend', _$('.tickers'))

  Modal.close('.lav-package')
}

function toggleModalPopup(isActive) {
  if (!_$$('.lav-pop__list .addon').length) {
    selectModalPackage()
    return
  }
  if (isActive) {
    _$('.lav-pop').classList.add('active')
    pushDataLayer(
      'exp_hp2_element_02',
      'Experience pop up',
      'view',
      'Experience pop up'
    )
  } else {
    _$('.lav-pop').classList.remove('active')
  }
}

function handleStepOne() {}

// *** Utils *** //
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
    if (html) {
      this.el.innerHTML = html
    }

    _$('.lav-modal').insertAdjacentElement('beforeend', this.el)
    this.el.insertAdjacentHTML(
      'afterend',
      `
        <div class='lav-sticky'>
          <button class="lav-sticky__btn link-btn dark ff-dm-sans">Select Package</button>
        </div>
      `
    )

    this.constructor.list.push(this)
  }

  static init() {
    document.body.insertAdjacentHTML(
      'beforeend',
      `
        <div class='lav-modal'></div>
        <div class='lav-pop'>
          <div class='lav-pop__inner'>
            <div class='lav-pop__title'>Experience the Best Full-Body Massage</div>
            <div class='lav-pop__list'></div>
            <div class='lav-pop__btn-wrap'>
              <button class="lav-pop__btn link-btn dark ff-dm-sans">Continue</button>
            </div>
          </div>
        </div>
      `
    )

    _$('.lav-pop').addEventListener('click', (e) => {
      if (e.target.classList.contains('lav-pop')) {
        toggleModalPopup(false)
      }
    })

    _$('.lav-pop__btn-wrap .lav-pop__btn').addEventListener('click', () => {
      pushDataLayer(
        'exp_hp2_button_06',
        'Continue',
        'click',
        'Experience pop up'
      )
      selectModalPackage()
      toggleModalPopup(false)
    })

    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('lav-modal')) this.close()

      if (e.target.closest('.lav-modal__close')) {
        pushDataLayer('exp_hp2_button_03', 'Close', 'click', 'Event details')
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
    document.documentElement.classList.add('lav-modal-open')

    if (_$('.lav-modal__inner.active')) {
      _$('.lav-modal__inner.active').classList.remove('active')
    }

    _$(modalName).classList.add('active')

    _$('.lav-package').insertAdjacentElement('beforeend', _$('.reviews'))
    _$$('.lav-package .reviews .aos-init').forEach((el) => {
      el.classList.add('aos-animate')
    })

    if (typeof cb === 'function') cb()

    setTimeout(() => {
      _$('.lav-modal').classList.add('active')
    }, 100)
  }

  static close(cb) {
    document.body.classList.remove('lav-modal-open')
    document.documentElement.classList.remove('lav-modal-open')

    _$('.lav-modal')?.classList.remove('active')

    _$('.b-booking-def-cont > .steps-container').insertAdjacentElement(
      'afterend',
      _$('.reviews')
    )

    if (typeof cb === 'function') cb()

    setTimeout(() => {
      _$('.lav-modal__inner.active')?.classList.remove('active')
    }, 400)

    _$('.lavp.active')?.classList.remove('active')
  }

  static addStyles() {
    const styles = /* css */ `
      .lav-modal {
        position: fixed;
        z-index: 99999;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: #fff;
        backdrop-filter: blur(3px);
        -webkit-backdrop-filter: blur(3px);
        transition: 0.35s;
        opacity: 0;
        pointer-events: none;
        overflow-y: auto;
        max-height: 100%;
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
        margin: 0 auto;
      }
      .lav-modal__inner.active {
        display: block;
      }
      .lav-modal__close {
        cursor: pointer;
        transition: 0.35s;
        line-height: 0;
        position: absolute;
        top: 6px;
        right: 6px;
        padding: 10px;
        z-index: 10;
      }
      .lav-modal__close svg {
        backdrop-filter: blur(27px);
        border-radius: 50%;
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
      .lav-modal-open .userway_buttons_wrapper {
        display: none!important;
      }
      
      [class*="lavd"] {
        font-family: 'Lato',Helvetica,sans-serif;
      }

      .lavd-hero {
        position: relative;
        background: url(${config.dir}/img/party-hero.jpg) no-repeat top center;
        background-size: cover;
        color: #fff;
        padding: 175px 16px 0;
        position: relative;
        background-size: 100% auto;
        background-position: top center;
      }
      .lavd-hero__label {
        position: absolute;
        left: 0;
        top: 0;
        border-radius: 0px 0px 20px 0px;
        background: #C61717;
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 1px 20px 3px;
        text-align: center;
        font-size: 13px;
        font-weight: 500;
        line-height: 20px;
      }
      .lavd-hero__icon {
        position: relative;
        z-index: 1;
      }
      .lavd-hero__title {
        position: relative;
        z-index: 1;
        margin-top: 12px;
        font-size: 26px;
        font-weight: 600;
        line-height: 120%; 
      }
      .lavd-hero__descr {
        position: relative;
        z-index: 1;
        margin-top: 5px;
        font-size: 14px;
        font-weight: 500;
        line-height: 22px;
      }
      .lavd-hero__footer {
        position: relative;
        z-index: 1;
        display: flex;
        gap: 15px;
        justify-content: space-between;
        align-items: center;
        background: linear-gradient(90deg, rgba(221, 242, 208, 0.00) 0%, rgba(221, 242, 208, 0.06) 56.5%);
        padding: 15px;
        margin: 20px -15px 0;
      }
      .lavd-hero__price {
        font-size: 22px;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0.88px;
        text-transform: uppercase;
      }
      .lavd-hero__price-per {
        margin-top: 8px;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 22px; 
      }
      .lavd-hero__ideal {
        display: flex;
        align-items: center;
        gap: 8px;
        color: #FFF;
        font-size: 13px;
        font-weight: 500;
        line-height: 20px;
      }
      .lavd-hero__ideal-persons {
        display: flex;
        align-items: center;
      }
      .lavd-list {
        display: grid;
        padding: 24px 16px;
        gap: 10px;
        color: #000;
        font-size: 14px;
        font-weight: 500;
        line-height: 22px;
      }
      .lavd-item {
        position: relative;
        padding-left: 28px;
        // white-space: nowrap;
        // overflow: hidden;
        // text-overflow: ellipsis;
      }
      .lavd-item svg {
        position: absolute;
        left: 0;
        top: 2px;
        margin-right: 10px;
        flex-shrink: 0;
      }
      .lavd-details {
        display: grid;
        gap: 24px;
        color: #000;
        padding: 24px 16px 0;
      }
      .lav-package .swiper {
        padding: 0 16px;
        margin: 0 -16px;
      }
      .swiper__wrap {
        padding: 0 16px;
        margin: 0 -16px;
        min-width: 0;
      }
      .lav-package .swiper-slide {
        width: 311px;
      }
      .lav-package .swiper-slide img {
        width: 311px;
        height: 311px;
        border-radius: 24px;
        object-fit: cover;
      }
      .swiper-control__wrap {
        display: flex;
        margin-top: 20px;
      }
      .swiper-control.swiper-button-prev {
        margin-right: 20px;
      }
      .swiper-control {
        width: 44px;
        height: 44px;
        background-color: #0C5947;
        border-radius: 50%;
      }
      .lavd-details__title {
        color: #0C5947;
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 1.12px;
        text-transform: uppercase;
      }
      .lavd-details__descr {
        font-size: 14px;
        font-weight: 500;
        line-height: 22px;
        margin-top: 6px;
      }
      .lav-package .reviews {
        overflow: hidden;
        margin-bottom: 0;
      }
      .lav-package .b-goog-review + svg {
        display: none;
      }
      .lav-package .reviews>svg path {
        fill: #fff;
      }
      .lav-package .b-goog-review {
        padding-bottom: 45px!important;
      }
      .lavd-divider {
        line-height: 0;
        background: url('${config.dir}/img/divider.svg') repeat center;
        height: 2px;
        width: calc(100% - 32px);
        margin: auto;
      }
      .lavd-nav {
        position: sticky;
        top: 0;
        z-index: 9999;
        background: #fff;
        box-shadow: 0px 6px 24px 0px rgba(0, 0, 0, 0.10);
        transition: .35s;
        padding: 0 16px;
        display: flex;
        gap: 15px;
        color: #0C5947;
        font-family: "DM Sans";
        font-size: 14px;
        font-weight: 500;
        line-height: 22px;
        overflow: auto;
      }
      .lavd-nav__item {
        flex-shrink: 0;
        padding: 10px 0;
      }
      .lavd-nav__title {
        white-space: nowrap;
        padding: 8px 12px;
        border-radius: 8px;
        transition: .3s;
      }
      .lavd-nav__item.active .lavd-nav__title {
        background: #DDF2D0;
      }
      .lavd-pack {
        position: relative;
        background: #fff;
      }
      .lavd-pack:not(.active) {
        display: none;
      }
      .lavd-pack.exiting {
        position: absolute;
        top: 58px;
        z-index: 999;
        transform: translateX(100%);
        transform-origin: top;
        opacity: 1;
        transition: .5s;
        transition-timing-function: ease-in;
        transition-delay: .1s;
      }
      .lavd-pack.exiting-reverse {
        transform: translateX(-100%);
      }
      .lavd-pack .lavd-hero:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        background: linear-gradient(180deg, rgba(179, 130, 75, 0.00) 18.55%, #B3824B 41.83%, #B16D1F 100%);
        pointer-events: none;
      }
      .lavd-pack[data-id="28107448"] .lavd-hero {
        background-color: #B16E22;
      }
      .lavd-pack[data-id="68950903"] .lavd-hero {
        background-color: #1A4B65;
      }
      .lavd-pack[data-id="68950903"] .lavd-hero:before {
        background: linear-gradient(180deg, rgba(26, 75, 101, 0.00) 21.91%, rgba(26, 75, 101, 0.90) 43.07%, #1A4B65 61.49%);
      }
      .lavd-pack[data-id="68951079"] .lavd-hero {
        background-color: #054330;
      }
      .lavd-pack[data-id="68951079"] .lavd-hero:before {
        background: linear-gradient(180deg, rgba(5, 67, 48, 0.00) 21.91%, rgba(5, 67, 48, 0.90) 45.41%, #054330 64.4%);
      }
      .lavd-pack[data-id="27351564"] .lavd-hero {
        background-color: #3B5923;
      }
      .lavd-pack[data-id="27351564"] .lavd-hero:before {
        background: linear-gradient(180deg, rgba(68, 89, 50, 0.00) 21.91%, rgba(68, 89, 50, 0.90) 45.41%, #3B5923 68.41%);
      }
      .lavd-pack[data-id="68951432"] .lavd-hero {
        background-color: #B72828;
        background-size: 125%;
      }
      .lavd-pack[data-id="68951432"] .lavd-hero:before {
        background: linear-gradient(180deg, rgba(183, 40, 40, 0.00) 26.41%, rgba(183, 40, 40, 0.90) 44.41%, #B72828 69.4%);
      }
      .lav-sticky {
        position: sticky;
        z-index: 9999;
        bottom: 0;
        left: 0;
        right: 0;
        background: #FFF;
        box-shadow: 0px -6px 24px 0px rgba(0, 0, 0, 0.10);
        padding: 12px 16px;
      }
      .lav-sticky__btn {
        width: 100%;
        color: #fff;
        font-size: 16px;
        font-weight: 500;
        line-height: 110%;
        height: 56px;
      }
      .lav-pop {
        position: fixed;
        background: linear-gradient(0deg, rgba(12, 89, 71, 0.30) 0%, rgba(12, 89, 71, 0.30) 100%), rgba(68, 68, 68, 0.70);
        top: 0;
        bottom: 0;
        display: flex;
        align-items: end;
        left: 0;
        right: 0;
        z-index: 999999;
        transition: opacity .3s;
        left: -999%;
        opacity: 0;
        pointer-events: none;
      }
      .lav-pop__inner {
        padding: 24px 16px 0;
        transform: translateY(100%);
        border-radius: 32px 32px 0px 0px;
        background: var(--White-White, #FFF);
        box-shadow: 0px -6px 24px 0px rgba(0, 0, 0, 0.10);
        color: #000;
        transition: .5s;
        max-height: 90%;
        overflow: auto;
      }
      .lav-pop.active {
        left: 0;
        opacity: 1;
        pointer-events: auto;
      }
      .lav-pop.active .lav-pop__inner {
        transform: translateY(0);
      }
      .lav-pop__title {
        color: #024F3D;
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 1.12px;
        text-transform: uppercase;
      }
      .lav-pop__list {
        margin-top: 24px;
        display: grid;
        gap: 16px;
      }
      .lav-pop__list .addon.activated {
        background: #DDF2D0;
      }
      .lav-pop__list .addon.activated .addon-checkbox_inactive {
        display: none;
      }
      .lav-pop__list .addon.activated .addon-checkbox_active {
        display: block;
      }
      .lav-pop .addon {
        padding: 20px 16px 16px;
      }
      .lav-pop__btn-wrap {
        position: sticky;
        bottom: 0;
        background: #FFF;
        box-shadow: 0px -6px 24px 0px rgba(0, 0, 0, 0.10);
        padding: 12px 16px;
        margin: 18px -16px 0;
      }
      .lav-pop__btn {
        width: 100%;
        color: #fff;
        font-size: 16px;
        font-weight: 500;
        line-height: 110%;
        height: 56px;
      }
    `

    const stylesEl = document.createElement('style')
    stylesEl.classList.add('exp-modal')
    stylesEl.innerHTML = styles
    document.head.appendChild(stylesEl)
  }
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
    close: `
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <g filter="url(#filter0_b_2207_9001)">
          <rect width="32" height="32" rx="16" fill="white" fill-opacity="0.2"/>
          <path d="M22.6663 9.3335L9.33301 22.6668" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M9.33301 9.3335L22.6663 22.6668" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
          <filter id="filter0_b_2207_9001" x="-54" y="-54" width="140" height="140" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="27"/>
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2207_9001"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2207_9001" result="shape"/>
          </filter>
        </defs>
      </svg>
    `,
    'person-icon': `
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M5.91423 5.78043C6.70836 5.78043 7.39601 5.49561 7.95787 4.93367C8.51972 4.37181 8.80454 3.68434 8.80454 2.89013C8.80454 2.09618 8.51972 1.40862 7.95778 0.846585C7.39583 0.284819 6.70827 0 5.91423 0C5.12002 0 4.43255 0.284819 3.87069 0.846676C3.30884 1.40853 3.02393 2.09609 3.02393 2.89013C3.02393 3.68434 3.30884 4.3719 3.87079 4.93376C4.43273 5.49552 5.12029 5.78043 5.91423 5.78043Z" fill="white" fill-opacity="0.7"/>
        <path d="M10.9717 9.22731C10.9555 8.99349 10.9228 8.73842 10.8745 8.46907C10.8258 8.19771 10.7631 7.94118 10.688 7.70672C10.6105 7.46438 10.505 7.22506 10.3746 6.99572C10.2393 6.75769 10.0804 6.55041 9.90203 6.37985C9.71554 6.20141 9.48721 6.05795 9.22317 5.95331C8.96005 5.84921 8.66846 5.79648 8.35654 5.79648C8.23404 5.79648 8.11557 5.84674 7.88678 5.9957C7.74598 6.08752 7.58127 6.19372 7.39744 6.31119C7.24024 6.41134 7.02729 6.50519 6.76426 6.59015C6.50764 6.67318 6.24708 6.7153 5.98991 6.7153C5.73274 6.7153 5.47227 6.67318 5.21538 6.59015C4.95262 6.50528 4.73967 6.41144 4.58266 6.31128C4.40056 6.19491 4.23577 6.08871 4.09285 5.9956C3.86434 5.84665 3.74578 5.79639 3.62328 5.79639C3.31127 5.79639 3.01977 5.84921 2.75674 5.9534C2.49288 6.05786 2.26446 6.20132 2.07779 6.37994C1.89953 6.5506 1.74051 6.75778 1.60537 6.99572C1.4751 7.22506 1.36963 7.46429 1.29199 7.70681C1.21701 7.94128 1.1543 8.19771 1.10559 8.46907C1.05734 8.73806 1.02457 8.99321 1.00836 9.22759C0.992432 9.4572 0.984375 9.69551 0.984375 9.9362C0.984375 10.5626 1.1835 11.0697 1.57617 11.4437C1.96399 11.8128 2.47714 12 3.10116 12H8.87921C9.50323 12 10.0162 11.8128 10.4041 11.4437C10.7969 11.07 10.996 10.5628 10.996 9.93611C10.9959 9.69432 10.9878 9.45583 10.9717 9.22731Z" fill="white"/>
      </svg>
    `,
    'label-escape': `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <g clip-path="url(#clip0_2277_19841)">
          <path d="M8 0C3.58187 0 0 3.58187 0 8C0 12.4181 3.58187 16 8 16C12.4181 16 16 12.4181 16 8C16 3.58187 12.4181 0 8 0ZM12.9909 7.03125C12.9306 7.82812 12.56 8.57 11.9791 9.11906L8.20406 12.6441C8.14868 12.6958 8.07575 12.7245 8 12.7245C7.92425 12.7245 7.85132 12.6958 7.79594 12.6441L4.02094 9.11906C3.44 8.56938 3.06938 7.8275 3.00906 7.03125C2.8675 5.16344 4.42344 4.16625 5.52938 4.03937C6.91219 3.88062 8 5.26344 8 5.26344C8 5.26344 9.08781 3.88062 10.4706 4.03937C11.5766 4.16562 13.1325 5.16281 12.9909 7.03125Z" fill="white"/>
        </g>
        <defs>
          <clipPath id="clip0_2277_19841">
            <rect width="16" height="16" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    `,
    'label-party': `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <g clip-path="url(#clip0_2277_19849)">
          <path d="M13.9658 9.36778C13.7825 6.98156 12.6715 5.48622 11.6914 4.16665C10.7838 2.94503 10 1.89009 10 0.333904C10 0.208904 9.93 0.0946543 9.819 0.037373C9.70766 -0.020252 9.57387 -0.0108145 9.47266 0.062748C8.00066 1.11606 6.77247 2.89134 6.34344 4.58522C6.04559 5.7645 6.00619 7.09025 6.00066 7.96584C4.64128 7.6755 4.33334 5.64212 4.33009 5.61997C4.31478 5.5145 4.25034 5.42272 4.15659 5.37259C4.06188 5.32312 3.95053 5.31953 3.8545 5.36706C3.78322 5.40156 2.10481 6.25437 2.00716 9.65941C2.00031 9.77269 2 9.88631 2 9.99991C2 13.3079 4.69172 15.9995 8 15.9995C8.00456 15.9998 8.00944 16.0005 8.01334 15.9995C8.01466 15.9995 8.01594 15.9995 8.01756 15.9995C11.3177 15.99 14 13.3021 14 9.99991C14 9.83356 13.9658 9.36778 13.9658 9.36778ZM8 15.3329C6.89713 15.3329 6 14.3772 6 13.2025C6 13.1625 5.99969 13.1221 6.00259 13.0726C6.01594 12.5772 6.11003 12.239 6.21322 12.0141C6.40659 12.4294 6.75228 12.8112 7.31381 12.8112C7.49806 12.8112 7.64716 12.6622 7.64716 12.4779C7.64716 12.0034 7.65694 11.4559 7.77509 10.9617C7.88025 10.5236 8.13153 10.0575 8.44991 9.68384C8.5915 10.1688 8.86756 10.5614 9.13709 10.9445C9.52284 11.4926 9.92159 12.0593 9.99159 13.0258C9.99581 13.083 10.0001 13.1407 10.0001 13.2025C10 14.3772 9.10287 15.3329 8 15.3329Z" fill="white"/>
        </g>
        <defs>
          <clipPath id="clip0_2277_19849">
            <rect width="16" height="16" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    `,
    party: `
      <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
        <path d="M21.075 32.9514C19.6351 33.4816 17.8068 34.1536 15.4942 35.0107C11.5449 34.4594 7.39477 33.1745 5.60059 30.2253C6.25421 28.4653 6.82384 26.9231 7.32784 25.562C10.7088 29.468 16.6164 31.9486 21.075 32.9514Z" fill="white"/>
        <path d="M22.2218 19.7782C18.3788 15.9366 13.4306 13.0989 11.4133 15.1202C10.9828 15.5507 11.1128 15.2934 8.12158 23.4112C11.311 28.0142 19.3697 31.2285 24.9833 31.5107C26.662 30.8794 26.6226 30.8479 26.8811 30.588C29.3552 28.1139 24.6945 22.2497 22.2218 19.7782ZM25.4873 29.1941C25.2996 29.3844 24.4268 29.3936 22.8767 28.6284C21.1915 27.795 19.2686 26.3421 17.4626 24.5361C13.2784 20.3518 12.3006 17.0154 12.8046 16.5114C12.8833 16.4327 13.0303 16.3907 13.239 16.3907C14.3691 16.3907 17.2973 17.6389 20.8305 21.1708C22.6365 22.9768 24.0908 24.8996 24.9242 26.5849C25.6894 28.1323 25.6763 29.0064 25.4873 29.1941Z" fill="white"/>
        <path d="M11.89 36.3484C9.61676 37.1936 6.99569 38.1727 3.952 39.3133C3.16057 39.6047 2.39407 38.8355 2.68675 38.048C3.45325 35.9953 4.14494 34.1394 4.77494 32.4463C6.50482 34.4334 9.10619 35.6383 11.89 36.3484Z" fill="white"/>
        <path d="M25.8156 5.11219C25.2027 5.21982 24.6108 5.31694 24.2091 5.51907C24.8129 6.44569 26.0742 7.62563 25.3038 9.16651C24.6147 10.5446 23.1828 10.4633 21.9398 10.5066C22.7024 11.5487 23.5844 12.6053 22.9045 13.9663C22.1997 15.3773 20.3517 15.6699 19.261 15.8471C18.9079 15.9049 18.5798 15.6686 18.5142 15.3182L18.2753 14.0293C18.2084 13.671 18.4499 13.3258 18.8082 13.2628C19.429 13.1539 20.0104 13.0594 20.4147 12.8559C19.8083 11.9359 18.5523 10.7441 19.3188 9.20982C20.0065 7.83563 21.4371 7.91307 22.6827 7.86976C21.9188 6.82763 21.0381 5.77107 21.718 4.41001C22.4228 3.00038 24.2721 2.70638 25.3602 2.52919C25.7133 2.47144 26.0414 2.70769 26.1057 3.05813L26.3446 4.34701C26.4141 4.70532 26.1753 5.04919 25.8156 5.11219Z" fill="white"/>
        <path d="M37.6544 15.6515L38.9432 15.8904C39.295 15.956 39.5299 16.2841 39.4722 16.6359C39.295 17.7239 39.001 19.5732 37.5914 20.278C36.2303 20.9579 35.1737 20.0772 34.1316 19.3134C34.0883 20.5589 34.1657 21.9909 32.7915 22.6773C31.2572 23.4438 30.0655 22.1877 29.1454 21.5814C28.942 21.9856 28.8475 22.567 28.7385 23.1879C28.6755 23.5475 28.3304 23.7877 27.972 23.7207L26.6832 23.4819C26.3314 23.4162 26.0965 23.0881 26.1542 22.735C26.3314 21.6457 26.6254 19.7977 28.035 19.0915C29.3948 18.4117 30.4527 19.2937 31.4948 20.0562C31.5381 18.8133 31.4567 17.38 32.8349 16.6923C34.3757 15.9219 35.5557 17.1832 36.4823 17.7869C36.6844 17.3853 36.7815 16.7934 36.8892 16.1804C36.9509 15.8247 37.2947 15.5859 37.6544 15.6515Z" fill="white"/>
        <path d="M33.7313 27.5625H31.2375C31.0196 27.5625 30.8438 27.3866 30.8438 27.1688V25.9875C30.8438 25.7696 31.0196 25.5938 31.2375 25.5938H33.7313C33.9491 25.5938 34.125 25.7696 34.125 25.9875V27.1688C34.125 27.3866 33.9491 27.5625 33.7313 27.5625Z" fill="white"/>
        <path d="M36.4716 4.29582L34.7076 6.05982C34.554 6.21338 34.3047 6.21338 34.1511 6.05982L33.3163 5.22376C33.1628 5.0702 33.1628 4.82082 33.3163 4.66726L35.0803 2.90326C35.2339 2.7497 35.4833 2.7497 35.6368 2.90326L36.4716 3.73801C36.6252 3.89157 36.6252 4.14095 36.4716 4.29582Z" fill="white"/>
        <path d="M16.0125 8.53125H14.8313C14.6134 8.53125 14.4375 8.35537 14.4375 8.1375V5.64375C14.4375 5.42588 14.6134 5.25 14.8313 5.25H16.0125C16.2304 5.25 16.4062 5.42588 16.4062 5.64375V8.1375C16.4062 8.35537 16.2304 8.53125 16.0125 8.53125Z" fill="white"/>
        <path d="M25.4403 17.3971L24.4559 16.7409C24.2709 16.6175 24.217 16.3681 24.3444 16.1857C27.0232 12.3742 32.1879 8.40127 37.6518 8.20964C37.8762 8.20308 38.0626 8.38945 38.0626 8.61258V9.79514C38.0626 10.0051 37.8972 10.1692 37.6872 10.1784C33.1158 10.3595 28.4328 13.8022 25.9692 17.2974C25.8472 17.472 25.6162 17.5153 25.4403 17.3971Z" fill="white"/>
      </svg>
    `,
    escape: `
      <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
        <g clip-path="url(#clip0_2218_14599)">
          <path d="M21.8115 27.4121C23.6665 25.1981 24.5682 23.1693 24.5682 21.2101C24.5682 17.6362 21.6606 14.7285 18.0867 14.7285C16.2201 14.7285 14.4426 15.536 13.2099 16.9437L12.2841 18.001L11.3584 16.9437C10.1257 15.536 8.34812 14.7285 6.48155 14.7285C2.90764 14.7285 0 17.6362 0 21.2101C0 23.1694 0.901783 25.1981 2.75678 27.4121C4.7916 29.8408 7.99489 32.459 12.2841 35.2004C16.5734 32.4591 19.7766 29.8409 21.8115 27.4121Z" fill="white"/>
          <path d="M31.5725 5.34375C28.4433 5.34375 25.6381 6.72403 23.7268 8.90667C21.8155 6.72403 19.0103 5.34375 15.8811 5.34375C11.3475 5.34375 7.49059 8.23728 6.0542 12.278C8.28048 12.1726 10.5872 12.9606 12.2842 14.4084C13.8929 13.0359 15.9473 12.2675 18.0867 12.2675C23.0176 12.2675 27.0293 16.2791 27.0293 21.2101C27.0293 23.7359 25.9085 26.3542 23.6979 28.9927C22.462 30.4678 20.894 31.96 18.9646 33.4933C20.4159 34.5215 22.0001 35.5754 23.7268 36.6565C37.1154 28.2736 42 21.5188 42 15.7712C42 10.0124 37.3315 5.34375 31.5725 5.34375Z" fill="white"/>
        </g>
        <defs>
          <clipPath id="clip0_2218_14599">
            <rect width="42" height="42" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    `,
    retreat: `
      <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
        <g clip-path="url(#clip0_2207_8451)">
          <path d="M38.482 10.4648C38.482 6.724 35.3561 3.69141 31.5 3.69141C27.6439 3.69141 24.5181 6.724 24.5181 10.4648C24.5181 14.2055 27.6439 17.2381 31.5 17.2381C35.3561 17.2381 38.482 14.2055 38.482 10.4648Z" fill="white"/>
          <path d="M31.5 18.4194C30.7556 18.4194 30.0295 18.4976 29.3291 18.6447C29.528 18.8193 29.72 19.0052 29.903 19.2035C31.2251 20.6378 31.9534 22.53 31.9534 24.532C31.9534 26.9552 30.7726 28.7275 29.744 30.0006C29.6777 30.0829 22.8095 36.7512 22.8095 36.7512C22.3051 37.2402 21.653 37.4856 21 37.4882C20.9968 37.4882 20.9933 37.4885 20.9901 37.4885C20.3319 37.4885 19.6734 37.2411 19.1662 36.747C19.1662 36.747 12.0628 29.8231 12.0096 29.7606C10.7432 28.3375 10.0466 26.4848 10.0466 24.532C10.0466 22.53 10.7749 20.6378 12.097 19.2035C12.28 19.0052 12.472 18.8193 12.6709 18.6447C11.9705 18.4976 11.2444 18.4194 10.5 18.4194C4.7011 18.4194 0 23.1205 0 28.9194V37.4613C0 37.914 0.367218 38.2816 0.820312 38.2816H41.1797C41.6328 38.2816 42 37.914 42 37.4613V28.9194C42 23.1205 37.2989 18.4194 31.5 18.4194Z" fill="white"/>
          <path d="M17.482 10.4648C17.482 6.724 14.3561 3.69141 10.5 3.69141C6.64391 3.69141 3.51807 6.724 3.51807 10.4648C3.51807 14.2055 6.64391 17.2381 10.5 17.2381C14.3561 17.2381 17.482 14.2055 17.482 10.4648Z" fill="white"/>
          <path d="M12.6606 24.5323C12.6606 25.9121 13.1746 27.1602 14.0039 28.0689L14.0033 28.0696L20.4187 34.3184C20.7369 34.6279 21.2435 34.6286 21.5623 34.3197L27.7105 28.358C28.5975 27.2602 29.3393 26.0643 29.3393 24.5323C29.3393 22.3578 28.1841 19.5024 24.7019 19.5024C23.425 19.5024 22.2686 20.0629 21.4297 20.9688C21.2752 21.1357 21.1317 21.3148 21 21.5039C20.8654 21.3107 20.718 21.1283 20.5597 20.9582C19.7221 20.0584 18.5698 19.5024 17.2977 19.5024C14.2542 19.5024 12.6606 22.3578 12.6606 24.5323Z" fill="white"/>
        </g>
        <defs>
          <clipPath id="clip0_2207_8451">
            <rect width="42" height="42" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    `,
    ritual: `
      <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
        <g clip-path="url(#clip0_2207_8686)">
          <path d="M21.7835 8.27618L21 7.62891L20.2165 8.27618C16.8132 11.0867 14.8477 16.2531 14.8477 20.6501C14.8477 25.0705 16.8046 29.2217 20.2165 32.0396L21 32.6869L21.7835 32.0396C25.1954 29.2217 27.1523 25.0705 27.1523 20.6501C27.1523 16.2537 25.1874 11.087 21.7835 8.27618Z" fill="white"/>
          <path d="M15.2808 30.207C13.38 27.4038 12.3866 24.1645 12.3866 20.6503C12.3866 16.8637 13.3774 13.8145 14.6409 11.466C12.1572 9.61487 9.98144 9.16626 9.40081 8.93555C9.29539 9.27136 5.173 14.985 8.09568 22.3903C9.42196 25.751 11.9159 28.5542 15.2808 30.207Z" fill="white"/>
          <path d="M26.7183 30.2038C30.0831 28.5516 32.5777 25.751 33.904 22.3903C36.8296 14.978 32.7081 9.28354 32.5989 8.93555C32.0298 9.16145 29.8361 9.61647 27.354 11.4702C28.6188 13.8196 29.6131 16.8695 29.6131 20.6503C29.6131 24.203 28.5941 27.4352 26.7183 30.2038Z" fill="white"/>
          <path d="M5.80627 23.2942C5.54544 22.6322 5.32626 21.9596 5.15067 21.2812C2.26579 21.7315 0.557236 22.8181 0 23.0513C0.180405 23.3855 1.31378 30.0278 8.48927 33.1428C11.4959 34.4469 14.9348 34.735 18.1888 33.8122C12.3842 32.5144 7.89391 28.5843 5.80627 23.2942Z" fill="white"/>
          <path d="M36.8492 21.2812C36.6736 21.9603 36.4545 22.6322 36.1936 23.2942C34.1076 28.5795 29.6295 32.5054 23.8037 33.8115C27.0151 34.7228 30.4617 34.4662 33.5106 33.1428C40.6611 30.0387 41.8269 23.3711 41.9999 23.0513C41.4391 22.8168 39.7351 21.7318 36.8492 21.2812Z" fill="white"/>
        </g>
        <defs>
          <clipPath id="clip0_2207_8686">
            <rect width="42" height="42" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    `,
    garage: `
      <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
        <g clip-path="url(#clip0_2207_8917)">
          <path d="M39.457 15.9961C39.457 12.1671 37.5035 8.78597 34.5408 6.79647L34.5433 6.79278C31.8711 5.00105 28.5963 4.52962 25.8204 5.2218C26.6738 6.994 27.1523 8.97924 27.1523 11.0742C27.1523 16.081 24.4302 22.2218 20.4673 25.5872C22.327 28.3677 24.5856 30.1055 26.9507 30.6084L24.9322 33.8379H27.0389C26.4974 35.2151 26.8346 36.5431 27.8727 37.5812C28.1272 37.8358 28.3875 38.0208 28.6172 38.1842C29.1989 38.5977 30.6035 40.127 30.6035 42.0001H33.0644C33.0644 39.0975 31.1166 36.9417 30.0432 36.1785C29.8705 36.0558 29.7215 35.9498 29.6128 35.8411C29.2568 35.4851 29.2308 35.233 29.2478 35.0533C29.2852 34.6598 29.5822 34.2189 29.9289 33.838H31.8334L29.815 30.6085C33.8452 29.7518 36.8545 25.5105 38.3189 21.6472L38.3171 21.6464C39.0452 19.7225 39.457 17.742 39.457 15.9961Z" fill="white"/>
          <path d="M24.6914 11.0742C24.6914 4.96789 19.7235 0 13.6172 0C7.51086 0 2.54297 4.96789 2.54297 11.0742C2.54297 16.6117 6.64035 24.5077 12.1849 25.6869L10.1667 28.916H11.4013C10.5477 30.1727 10.1523 31.3185 10.2278 32.33C10.3022 33.3263 10.817 34.162 11.7162 34.7466C12.4591 35.2294 12.2629 36.201 11.5424 38.1965C11.2173 39.0967 10.9102 39.9469 10.9102 40.721H13.3712C13.3712 39.9098 14.5289 37.8201 14.6412 35.9938C14.7526 34.1808 13.8414 33.1927 13.0573 32.6831C12.7478 32.4819 12.694 32.3067 12.682 32.1474C12.6201 31.3298 13.5865 29.9583 14.549 28.9159H17.0677L15.0495 25.6868C20.6034 24.5057 24.6914 16.5973 24.6914 11.0742Z" fill="white"/>
        </g>
        <defs>
          <clipPath id="clip0_2207_8917">
            <rect width="42" height="42" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    `,
    person: `
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M5.91423 5.78043C6.70836 5.78043 7.39601 5.49561 7.95787 4.93367C8.51972 4.37181 8.80454 3.68434 8.80454 2.89013C8.80454 2.09618 8.51972 1.40862 7.95778 0.846585C7.39583 0.284819 6.70827 0 5.91423 0C5.12002 0 4.43255 0.284819 3.87069 0.846676C3.30884 1.40853 3.02393 2.09609 3.02393 2.89013C3.02393 3.68434 3.30884 4.3719 3.87079 4.93376C4.43273 5.49552 5.12029 5.78043 5.91423 5.78043Z" fill="white" fill-opacity="0.7"/>
        <path d="M10.9717 9.22731C10.9555 8.99349 10.9228 8.73842 10.8745 8.46907C10.8258 8.19771 10.7631 7.94118 10.688 7.70672C10.6105 7.46438 10.505 7.22506 10.3746 6.99572C10.2393 6.75769 10.0804 6.55041 9.90203 6.37985C9.71554 6.20141 9.48721 6.05795 9.22317 5.95331C8.96005 5.84921 8.66846 5.79648 8.35654 5.79648C8.23404 5.79648 8.11557 5.84674 7.88678 5.9957C7.74598 6.08752 7.58127 6.19372 7.39744 6.31119C7.24024 6.41134 7.02729 6.50519 6.76426 6.59015C6.50764 6.67318 6.24708 6.7153 5.98991 6.7153C5.73274 6.7153 5.47227 6.67318 5.21538 6.59015C4.95262 6.50528 4.73967 6.41144 4.58266 6.31128C4.40056 6.19491 4.23577 6.08871 4.09285 5.9956C3.86434 5.84665 3.74578 5.79639 3.62328 5.79639C3.31127 5.79639 3.01977 5.84921 2.75674 5.9534C2.49288 6.05786 2.26446 6.20132 2.07779 6.37994C1.89953 6.5506 1.74051 6.75778 1.60537 6.99572C1.4751 7.22506 1.36963 7.46429 1.29199 7.70681C1.21701 7.94128 1.1543 8.19771 1.10559 8.46907C1.05734 8.73806 1.02457 8.99321 1.00836 9.22759C0.992432 9.4572 0.984375 9.69551 0.984375 9.9362C0.984375 10.5626 1.1835 11.0697 1.57617 11.4437C1.96399 11.8128 2.47714 12 3.10116 12H8.87921C9.50323 12 10.0162 11.8128 10.4041 11.4437C10.7969 11.07 10.996 10.5628 10.996 9.93611C10.9959 9.69432 10.9878 9.45583 10.9717 9.22731Z" fill="white"/>
      </svg>
    `
  }

  return svgObj[name]
}
