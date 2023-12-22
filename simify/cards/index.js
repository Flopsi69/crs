initCards();

function initCards() {
  addCardStyles();
  const cards = document.querySelectorAll('.ProductList .Grid__Cell');

  for (let card of cards) {
    handleCard(card);
  }

  $(document).on('click', function (e) {
    if (!e.target.closest('.lav-dropdown')) {
      $('.lav-dropdown__body').slideUp();
      $('.lav-dropdown').removeClass('active');
    }
  });

  function handleCard(el) {
    const text = el.querySelector('.quality-list')?.innerText;

    if (
      text &&
      !['calls', 'texts'].some((word) => text.toLowerCase().includes(word))
    ) {
      el.querySelector('.quality-list').insertAdjacentHTML(
        'beforeend',
        `
        <li class='lav-exclude'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
            <g opacity="0.4">
            <path d="M8 8.49951L16.0009 16.5004" stroke="#333F48" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.99915 16.5004L16 8.49951" stroke="#333F48" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
          </svg>
          Phone calls and texts
        </li>
      `
      );
    }

    const countriesLength = el.querySelectorAll('.country_list li').length;
    if (!countriesLength) return false;

    const flagsUrl = `https://conversionratestore.github.io/projects/simify/img/flags`;
    const dropdownEl = document.createElement('div');
    dropdownEl.classList.add('lav-dropdown');

    dropdownEl.innerHTML = `
      <div class='lav-dropdown__header'>
        ${countriesLength} Countr${countriesLength > 1 ? 'ies' : 'y'}
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
          <path d="M9 1.5L5.00095 5.5L1 1.5" stroke="#333F48" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class='lav-dropdown__body'></div>
    `;

    for (let country of el.querySelectorAll('.country_list li')) {
      const foundEl = Object.entries(getCountries()).find(
        ([key, obj]) =>
          obj.name.toLowerCase().trim() ===
          country.textContent.toLowerCase().trim()
      );

      let flag;
      if (foundEl) {
        [, { flag }] = foundEl;
      }

      if (!flag) continue;

      dropdownEl.querySelector('.lav-dropdown__body').insertAdjacentHTML(
        'beforeend',
        `
        <div class='lav-dropdown__item'>
          ${
            flag ? `<img src='${flagsUrl}/${flag}.svg' />` : ''
          } ${country.textContent.trim()}
        </div>
      `
      );
    }

    dropdownEl.addEventListener('click', function () {
      pushDataLayer(
        'exp_onbo_plan_com_drop_allwhere_coun',
        'Countries',
        'Dropdown',
        'All locations. Where are you going?'
      );
      if ($('.lav-dropdown.active').not(this).length) {
        $('.lav-dropdown.active').removeClass('active');
        $('.lav-dropdown__body').slideUp();
      }

      $(dropdownEl).toggleClass('active');
      $('.lav-dropdown__body', this).slideToggle();
    });

    el.querySelector('.ProductItem__Title').insertAdjacentElement(
      'afterend',
      dropdownEl
    );
  }
}

function addCardStyles() {
  const styles = `
		.collection-template .ProductList {
      display: grid;
      gap: 28px;
      grid-template-columns: 1fr 1fr 1fr;
      max-width: 800px;
      width: 100%;
      margin-left: auto;
      margin-right: auto;
    }
    .collection-template .ProductList .Grid__Cell {
      display: block;
      width: 100%;
      padding: 0;
      margin: 0;
    }
    .ProductList .ProductItem {
      display: flex;
      height: 100%;
      text-align: left;
    }
    .template-collection .collection-template .ProductItem .ProductItem__Title.Heading {
      color: #333F48;
      font-size: 14px;
      font-weight: 700;
      line-height: 21px;
      margin-bottom: 0;
    }
    .template-collection .collection-template .stamped-product-reviews-badge {
      display: none!important;
    }
    .ProductList .ProductItem .ProductItem__Info {
      margin-top: 0;
      padding: 16px 10px 12px;
      align-items: flex-start;
    }
    .template-collection .view-btn-wrap {
      padding: 0;
    }
    .template-collection .view-btn-wrap a.Button {
      padding: 9px 10px;
      font-weight: 500;
    }
    .template-collection .collection-template .ProductItem__PriceList {
      margin-bottom: 16px;
      flex-grow: 0;
      margin-top: auto;
    }

    .template-collection .collection-template .ProductItem__PriceList .Price {
      color: #333F48;
      font-size: 14px;
      font-weight: 700;
      line-height: 20px;
    }
    .template-collection .product-quality {
      margin-top: 16px;
      margin-bottom: 16px;
      padding-bottom: 0;
    }
    .template-collection .product-quality .quality-list {
      flex-flow: column;
    }
    .template-collection .product-quality .quality-list li {
      color: #333F48;
      text-overflow: ellipsis;
      font-family: Roboto;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px; 
    }
    .template-collection .product-quality .quality-list li:not(:last-child) {
      margin-right: 0;
    }
    .template-collection .product-quality .quality-list li:before {
      filter: invert(66%) sepia(53%) saturate(2880%) hue-rotate(2deg) brightness(107%) contrast(102%);
    }
    .collection-template .CollectionMain {
      padding-bottom: 40px;
    }
    .template-collection .product-quality .quality-list li.lav-exclude {
      align-items: flex-start;
      margin-top: 1px;
      margin-left: -6px;
    }
    .template-collection .product-quality .quality-list li.lav-exclude svg {
      margin-top: -2px;
    }
    .template-collection .product-quality .quality-list li.lav-exclude:before {
      display: none;
    }

    .lav-dropdown {
      position: relative;
      margin-top: 8px;
      width: 100%;
      cursor: pointer;
    }
    .lav-dropdown__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #333F48;
      font-size: 12px;
      font-weight: 600;
      line-height: 18px;
      height: 30px;
      padding: 2px 8px;
      border-radius: 6px;
      border: 1px solid #CCC;
      transition: 0.2s;
      cursor: pointer;
    }
    .lav-dropdown__item {
      display: flex;
      align-items: flex-start;
      gap: 4px;
      line-height: 1.2;
    }
    .lav-dropdown__item img {
      max-width: 16px;
    }
    .lav-dropdown__item + .lav-dropdown__item {
      margin-top: 6px;
    }
    @media(hover:hover) {
      .lav-dropdown:not(.active) .lav-dropdown__header:hover {
        background-color: #faf9f9;
        border-color: #feaa02;
      }
    }
    .lav-dropdown__header svg {
      transition: 0.2s;
    }
    .lav-dropdown.active .lav-dropdown__header {
      border-bottom-color: transparent;
      border-radius: 6px 6px 0 0;
    }
    .lav-dropdown.active .lav-dropdown__header svg {
      transform: rotate(180deg);
    }
    .lav-dropdown__body {
      position: absolute;
      display: none;
      top: 100%;
      left: 0;
      right: 0;
      max-height: 150px;
      overflow-y: auto;
      color: #333F48;
      font-family: Roboto;
      font-size: 14px;
      font-weight: 400;
      line-height: 21px;
      background-color: #fff;
      border: 1px solid #CCC;
      border-top: 0;
      z-index: 1;
      border-radius: 0 0 6px 6px;
      padding: 0 6px 6px;
    }
    
    @media(max-width: 767px) {
      .collection-template .ProductList {
        grid-template-columns: 1fr 1fr;
        gap: 16px 9px;
      }
      .lav-dropdown__body {
        max-height: 120px;
      }
    }
    @media(max-width: 480px) {
      .collection-template .ProductList {
        gap: 15px 9px;
      }
      .template-collection .collection-template .ProductItem__PriceList {
        margin-bottom: 8px;
        padding-top: 8px;
        border-top: 1px solid #D9D9D9;
        width: 100%;
        justify-content: center;
      }
      .template-collection .product-quality {
        margin-top: 12px;
        margin-bottom: 8px;
      }
      .ProductList .ProductItem .ProductItem__Info {
        padding-top: 12px;
      }
    }
	`;

  const stylesEl = document.createElement('style');
  stylesEl.classList.add('exp-cards');
  stylesEl.innerHTML = styles;
  document.head.appendChild(stylesEl);
}

function getCountries() {
  return {
    argentina: {
      name: 'Argentina',
      flag: 'argentina',
      url: 'argentina',
    },
    australia: {
      name: 'Australia',
      flag: 'australia',
      url: 'australia',
    },
    austria: {
      name: 'Austria',
      flag: 'austria',
      url: 'esim-austria',
    },
    bahamas: {
      name: 'Bahamas',
      flag: 'bahamas',
      url: 'bahamas',
    },
    bali: {
      name: 'Indonesia (Bali)',
      flag: 'bali',
      url: 'bali',
    },
    belgium: {
      name: 'Belgium',
      flag: 'belgium',
      url: 'belgium',
    },
    brazil: {
      name: 'Brazil',
      flag: 'brazil',
      url: 'brazil',
    },
    bulgaria: {
      name: 'Bulgaria',
      flag: 'bulgaria',
      url: 'bulgaria',
    },
    cambodia: {
      name: 'Cambodia',
      flag: 'cambodia',
      url: 'cambodia',
    },
    canada: {
      name: 'Canada',
      flag: 'canada',
      url: 'canada',
    },
    chile: {
      name: 'Chile',
      flag: 'chile',
      url: 'chile',
    },
    china: {
      name: 'China',
      flag: 'china',
      url: 'china',
    },
    colombia: {
      name: 'Colombia',
      flag: 'colombia',
      url: 'colombia',
    },
    'costa-rica': {
      name: 'Costa Rica',
      flag: 'costa-rica',
      url: 'costa-rica',
    },
    croatia: {
      name: 'Croatia',
      flag: 'croatia',
      url: 'croatia',
    },
    cyprus: {
      name: 'Cyprus',
      flag: 'cyprus',
      url: 'cyprus',
    },
    'czech-republic': {
      name: 'Czech Republic',
      flag: 'czech-republic',
      url: 'czech-republic',
    },
    denmark: {
      name: 'Denmark',
      flag: 'denmark',
      url: 'denmark',
    },
    'dominican-republic': {
      name: 'Dominican Republic',
      flag: 'dominican-republic',
      url: 'dominican-republic',
    },
    egypt: {
      name: 'Egypt',
      flag: 'egypt',
      url: 'egypt',
    },
    'el-salvador': {
      name: 'El Salvador',
      flag: 'el-salvador',
      url: 'el-salvador',
    },
    england: {
      name: 'England',
      flag: 'england',
      url: 'england',
    },
    figi: {
      name: 'Fiji',
      flag: 'figi',
      url: 'figi',
    },
    finland: {
      name: 'Finland',
      flag: 'finland',
      url: 'finland',
    },
    france: {
      name: 'France',
      flag: 'france',
      url: 'france',
    },
    germany: {
      name: 'Germany',
      flag: 'germany',
      url: 'germany',
    },
    greece: {
      name: 'Greece',
      flag: 'greece',
      url: 'greece',
    },
    guatemala: {
      name: 'Guatemala',
      flag: 'guatemala',
      url: 'guatemala',
    },
    hawaii: {
      name: 'Hawaii',
      flag: 'hawaii',
      url: 'hawaii',
    },
    'hong-kong': {
      name: 'Hong Kong',
      flag: 'hong-kong',
      url: 'hong-kong',
    },
    hungary: {
      name: 'Hungary',
      flag: 'hungary',
      url: 'hungary',
    },
    iceland: {
      name: 'Iceland',
      flag: 'iceland',
      url: 'iceland',
    },
    india: {
      name: 'India',
      flag: 'india',
      url: 'india',
    },
    indonesia: {
      name: 'Indonesia',
      flag: 'indonesia',
      url: 'indonesia',
    },
    ireland: {
      name: 'Ireland',
      flag: 'ireland',
      url: 'ireland',
    },
    israel: {
      name: 'Israel',
      flag: 'israel',
      url: 'israel',
    },
    italy: {
      name: 'Italy',
      flag: 'italy',
      url: 'italy',
    },
    japan: {
      name: 'Japan',
      flag: 'japan',
      url: 'japan',
    },
    kuwait: {
      name: 'Kuwait',
      flag: 'kuwait',
      url: 'esim-kuwait',
    },
    laos: {
      name: 'Laos',
      flag: 'laos',
      url: 'laos',
    },
    latvia: {
      name: 'Latvia',
      flag: 'latvia',
      url: 'latvia',
    },
    macau: {
      name: 'Macau',
      flag: 'macau',
      url: 'macau',
    },
    macedonia: {
      name: 'Macedonia',
      flag: 'macedonia',
      url: 'macedonia',
    },
    malaysia: {
      name: 'Malaysia',
      flag: 'malaysia',
      url: 'malaysia',
    },
    malta: {
      name: 'Malta',
      flag: 'malta',
      url: 'malta',
    },
    mexico: {
      name: 'Mexico',
      flag: 'mexico',
      url: 'mexico-sim-card',
    },
    myanmar: {
      name: 'Myanmar',
      flag: 'myanmar',
      url: 'myanmar',
    },
    nepal: {
      name: 'Nepal',
      flag: 'nepal',
      url: 'nepal',
    },
    netherlands: {
      name: 'Netherlands',
      flag: 'netherlands',
      url: 'netherlands',
    },
    'new-zealand': {
      name: 'New Zealand',
      flag: 'new-zealand',
      url: 'new-zealand',
    },
    nicaragua: {
      name: 'Nicaragua',
      flag: 'nicaragua',
      url: 'nicaragua',
    },
    norway: {
      name: 'Norway',
      flag: 'norway',
      url: 'norway',
    },
    oman: {
      name: 'Oman',
      flag: 'oman',
      url: 'oman',
    },
    pakistan: {
      name: 'Pakistan',
      flag: 'pakistan',
      url: 'esim-pakistan',
    },
    palestine: {
      name: 'Palestine',
      flag: 'palestine',
      url: 'palestine',
    },
    panama: {
      name: 'Panama',
      flag: 'panama',
      url: 'panama',
    },
    peru: {
      name: 'Peru',
      flag: 'peru',
      url: 'peru',
    },
    philippines: {
      name: 'Philippines',
      flag: 'philippines',
      url: 'philippines',
    },
    poland: {
      name: 'Poland',
      flag: 'poland',
      url: 'poland',
    },
    portugal: {
      name: 'Portugal',
      flag: 'portugal',
      url: 'portugal',
    },
    qatar: {
      name: 'Qatar',
      flag: 'qatar',
      url: 'qatar',
    },
    romania: {
      name: 'Romania',
      flag: 'romania',
      url: 'romania',
    },
    russia: {
      name: 'Russia',
      flag: 'russia',
      url: 'russia',
    },
    scotland: {
      name: 'Scotland',
      flag: 'scotland',
      url: 'scotland',
    },
    singapore: {
      name: 'Singapore',
      flag: 'singapore',
      url: 'singapore',
    },
    slovakia: {
      name: 'Slovakia',
      flag: 'slovakia',
      url: 'slovakia',
    },
    slovenia: {
      name: 'Slovenia',
      flag: 'slovenia',
      url: 'slovenia',
    },
    'south-korea': {
      name: 'South Korea',
      flag: 'south-korea',
      url: 'south-korea',
    },
    spain: {
      name: 'Spain',
      flag: 'spain',
      url: 'spain',
    },
    'sri-lanka': {
      name: 'Sri Lanka',
      flag: 'sri-lanka',
      url: 'sri-lanka',
    },
    sweden: {
      name: 'Sweden',
      flag: 'sweden',
      url: 'sweden',
    },
    switzerland: {
      name: 'Switzerland',
      flag: 'switzerland',
      url: 'switzerland',
    },
    taiwan: {
      name: 'Taiwan',
      flag: 'taiwan',
      url: 'esim-taiwan',
    },
    thailand: {
      name: 'Thailand',
      flag: 'thailand',
      url: 'thailand',
    },
    turkey: {
      name: 'Turkey',
      flag: 'turkey',
      url: 'turkey',
    },
    'uae-dubai': {
      name: 'UAE (Dubai)',
      flag: 'uae-dubai',
      url: 'uae-dubai',
    },
    'united-kingdom': {
      name: 'United Kingdom',
      flag: 'united-kingdom',
      url: 'united-kingdom',
    },
    uruguay: {
      name: 'Uruguay',
      flag: 'uruguay',
      url: 'uruguay',
    },
    usa: {
      name: 'USA',
      flag: 'usa',
      url: 'usa',
    },
    vietnam: {
      name: 'Vietnam',
      flag: 'vietnam',
      url: 'vietnam',
    },
  };
}
watch([foo, bar], ([newfoo, newbar], [prevfoo, prevbar]) => {});
