(function() {
  console.debug('*** Experiment started ***')

  // Config for Experiment
  const config = {
    // dir: 'http://127.0.0.1:5500/<dir>/<project>',
    dir: 'https://flopsi69.github.io/crs/<dir>/<project>',
    clarity: ['set', 'exp_filters', 'variant_1'],
    isClarityStarted: false,
    debug: false
  }

  // Styles for Experiment
  const styles = /* css */ `
    .lav-head {
      display: flex;
      margin-top: 20px;
    }
    .lav-head__info {
      flex-shrink: 0;
      margin-right: 20px;
      width: 24%;
    }
    .lav-head__info h1 + p {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .lav-head__filter {
      min-width: 0;
      flex-grow: 1;
    }
    .lav-head__filter .min-w-\\[125px\\], .lav-head__filter .min-w-\\[125px\\] + .sm\\:block {
      display: none;
    }
    .lav-head__filter .sm\\:min-w-\\[300px\\] {
      flex-grow: 1;
    }
    .lav-head__filter .mt-3.flex-wrap {
      margin-top: 8px;
    }
    .lav-head__filter.lav-with-search .mt-3.scroll-sm {
      margin-left: -385px;
      margin-top: 20px;
      order: 1;
    }
    .lav-head--tall .lav-head__filter.lav-with-search .mt-3.scroll-sm {
      margin-top: 50px;
    }
    @media(max-width: 1550px) {
      .lav-head__filter.lav-with-search .mt-3.scroll-sm {
        margin-left: -23.5vw;
      }
    }
    .lav-head__filter .scrollbar-hide button {
      background: none;
      color: hsl(var(--primary-light-foreground));
      transition: opacity .2s;
    }
    @media(hover:hover) {
      .lav-head__filter .scrollbar-hide button:hover
      {
        opacity: .8;
      }
    }
    .lav-head__filter .mt-6 {
      margin-top: 0;
      display: grid;
    }
    .lav-head__filter .waypoint + .flex {
      // margin-right: -115px;
    }
    .lav-head__filter .mt-6 .gap-2.justify-start {
      gap: 0;
    }
    .lav-head__filter .fa-arrow-up-arrow-down {
      display: none;

    }
    .lav-head__toggler {
      margin-left: 16px;
      flex-shrink: 0;
    }
    .lav-head__sort {
      margin-left: 24px;
    }
    .lav-list__wrap {
      display: flex;
      align-items: flex-start;
      gap: 16px;
      margin-top: 32px;
    }
    .lav-listing {
      margin-top: 0;
      flex-grow: 1;
    }
    .lav-listing + .py-8 {
      flex-grow: 1;
    }
    .lav-listing:empty {
      display: none;
    }
    @media (min-width: 1280px) {
      .lav-listing>.w-full.xl\\:w-\\[calc\\(25\\%-0\\.94rem\\)\\]{
        width: calc(33.2% - .75rem);
      }
      .lav-listing>.\\32xl\\:w-\\[calc\\(25\\%-0\\.94rem\\)\\] {
        width: calc(33.2% - .75rem);
      }
    }
    .lav-listing .xl\\:w-\\[calc\\(50\\%-0\\.75rem\\)\\] {
      width: 100%;
    }
    .lav-filter {
      flex-shrink: 0;
      width: 24%;
    }
    .lav-filter__list {
      border-radius: 12px;
      background: hsl(var(--card));
      overflow: hidden;
      border-top: 1px solid hsl(var(--border));
      border-bottom: 1px solid hsl(var(--border));
    }
    .lav-filter__item + .lav-filter__item {
      border-top: 1px solid hsl(var(--border));
    }
    .lav-filter__item-head {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 10px 16px;
      border-bottom: 1px solid hsl(var(--border));
      background: hsl(var(--muted) / .5);
      cursor: pointer;
      transition: .3s;
    }
    @media(hover:hover) {
      .lav-filter__item-head:hover {
        opacity: 0.8;
      }
    }
    .lav-filter__item-icon {
      flex-shrink: 0;
    }
    .lav-filter__item-title {
      flex-grow: 1;
      font-family: "Red Hat Display";
      font-size: 16px;
      font-weight: 600;
    }
    .lav-filter__item-dropdown {
      flex-shrink: 0;
      transition: .3s;
    }
    .lav-filter__item.active .lav-filter__item-dropdown {
      transform: rotate(180deg);
    }
    .lav-filter__item-body {
      padding: 14px;
      display: none;
    }
    .lav-filter__item.active .lav-filter__item-body {
      display: block;
    }
    .lav-filter__item[data-type='toggler'] .lav-filter__item-body {
      padding-top: 24px;
      padding-bottom: 24px;
    }
    .lav-filter__item[data-type='range'] .lav-filter__item-body {
      padding-top: 30px;
      padding-bottom: 20px;
    }
    .lav-filter__item[data-type='range'] .lav-filter__item-body .mt-3 {
      margin-top: 18px;
    }
    .lav-filter__item[data-type='range'] .lav-filter__item-body > .gap-x-3 {
      display: none;
    }
    .lav-filter__dropdown-item {

    }
    .lav-filter__option {
      position: relative;
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 8px 10px 12px;
      transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
      transition-timing-function: cubic-bezier(.4, 0, .2, 1);
      transition-duration: .15s;
      font-size: 1rem;
      line-height: 1.5rem;
      cursor: pointer;
      border-radius: 6px;
      user-select: none;
    }
    .lav-filter__option.active {
      background-color: hsl(var(--accent) / .50);
    }
    .lav-filter__option + .lav-filter__option {
      margin-top: 1px;
    }
    .lav-filter__option-check * {
      opacity: 0;
      transition: .3s;
    }
    .lav-filter__option.active .lav-filter__option-check * {
      opacity: 1;
    }
    [data-type="price"] .lav-filter--range [data-slider-impl] + .flex {
      display: none;
    }
    [data-type="price"] .lav-filter--range [data-slider-impl] {
      margin-bottom: 23px;
    }
    @media(hover: hover) {
      .lav-filter__option:not(.active):hover {
        background-color: hsl(var(--accent) / .25);
      }
    }
    .lav-filter-processing .lav-filter__item-body {
      pointer-events: none!important;
    }
    .lav-filter-processing .lav-filter [role="menuitemcheckbox"]{
      filter: grayscale(100%);
    }
    .lav-filter-processing [data-reka-popper-content-wrapper]{
      pointer-events: none!important;
      opacity: 0!important;
      visibility: hidden!important;
    }
    .lav-filter-processing [data-vaul-overlay], .lav-filter-processing  [data-vaul-drawer][data-dismissable-layer]{
      pointer-events: none!important;
      opacity: 0!important;
      visibility: hidden!important;
    }
    .lav-preselect {
      display: flex;
      gap: 12px;
      margin: 0 -14px 14px;
      padding: 0 14px 14px;
      border-bottom: 1px solid hsl(var(--border));
    }
    .lav-preselect__option {
      flex-shrink: 0;
      white-space: nowrap;
      border-radius: 9999px;
      background: hsl(var(--accent));
      box-shadow: 0 0 0 0 #FFF inset, 0 0 0 0 rgba(156, 163, 175, 0.20) inset;
      text-align: center;
      font-family: Manrope;
      font-size: 12px;
      font-weight: 500;
      line-height: 16px;
      padding: 12px 8px;
      cursor: pointer;
      transition: .25s;
      border: 1px solid transparent;
    }
    .lav-preselect__option.active {
      border: 1px solid rgba(96, 165, 250, 0.30);
      background: hsl(var(--primary));
      border-color: hsl(var(--primary-ring));
      color: #fff;
    }
    @media(hover:hover) {
      .lav-preselect__option:not(.active):hover {
        --tw-brightness: brightness(1.25);
        filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
      }
      .lav-preselect__option.active:hover {
        background: hsl(var(--primary-hover));
      }
    }
  `

  const stylesEl = document.createElement('style');
  stylesEl.classList.add('exp-filter-v1-styles');
  stylesEl.innerHTML = styles;

  // *** Navigate Logic *** //
  (function () {
    // let currentUrl = location.href
    const urlsTarget = [
      '/fortnite/accounts',
      '/fortnite/items',
      '/fortnite/v-bucks',
      '/steal-a-brainrot/accounts',
      '/steal-a-brainrot/items',
      // '/valorant/accounts',
      '/valorant/top-up',
      '/grand-theft-auto-v/accounts',
      '/grand-theft-auto-v/items',
      '/call-of-duty/accounts',
      '/call-of-duty/items',
      '/call-of-duty/cod-points',
      '/league-of-legends/accounts',
      '/league-of-legends/items',
      '/league-of-legends/top-up',
      '/clash-of-clans/accounts',
      '/clash-of-clans/items',
      '/clash-of-clans/top-up',
      '/brawl-stars/accounts',
      '/brawl-stars/items',
      '/brawl-stars/gems',
      '/pubg-mobile/accounts',
      '/pubg-mobile/items',
      '/pubg-mobile/top-up',
      '/raid-shadow-legends/accounts',
      '/raid-shadow-legends/items',
      '/roblox/accounts',
      '/roblox/items',
    ]

    function urlChangeHandler() {
      if (!urlsTarget.some(url => location.pathname.startsWith(url))) return;
      initExp()
    }

    document.addEventListener('inertia:navigate', () => {
      urlChangeHandler();
    })

    urlChangeHandler()
  })()

  async function initExp() {
    startClarity();

    if (_$('.lav-filter__list') || _$('.lav-head')) return;

    await waitFor(() => document.head && document.body, false, { ms: 20 })

    if (!_$('.exp-filter-v1-styles')) {
      document.head.appendChild(stylesEl)
    }

    await waitFor(() => _$('[class*="2xl:max-w-[1550px]"] > div'), false, { ms: 20 })

    console.debug('** InitExp **')

    updateListingHeader()
    addVerticalFilters();
    handleClickChoosenFilter()
  }

  function handleClickChoosenFilter() {
    const filterContainer = _$('.lav-head__filter');
    if (!filterContainer) return;
    
    filterContainer.addEventListener('click', (e) => {
      const target = e.target;
      const chipEl = target.closest('.group.relative.flex-shrink-0')
      const scrollContainer = target.closest('.mt-3.scroll-sm');
      
      if (!scrollContainer && !chipEl) return

      const filterName = chipEl?.querySelector('.truncate .pr-1')?.textContent?.replace(': ', '')

      if (!filterName) return;
      
      const filterCaption = target.closest('.ring-1.cursor-pointer.font-medium.py-1');
      if (filterCaption) {
        e.preventDefault();
        e.stopPropagation();

        _$('[type="button"].transition-colors.whitespace-nowrap', chipEl)?.click()

        // uncheckChoosenFilter(filterName);

        // console.log('Clicked choosen filter', target);
        return;
      }

      const isCloseFilterEl = target.closest('[type="button"].transition-colors.whitespace-nowrap');
      if (isCloseFilterEl && isCloseFilterEl.querySelector('.fa-times')) {
        uncheckChoosenFilter(filterName);

        // console.log('Clicked close filter', target);
        return;
      }
    }, true);

    function uncheckChoosenFilter(filterName) {
      const findedFilter = [..._$$('.lav-filter__item')].find(item => {
        return item.querySelector('.lav-filter__item-title')?.textContent.trim() === filterName.trim()
      })

      if (!findedFilter) return

      const filterType = findedFilter.dataset.type

      // console.log('Finded filter for uncheck', findedFilter)

      if (filterType === 'options') {
        _$$('.lav-filter__option.active', findedFilter).forEach(el => {
          el.classList.remove('active')
        });
        _$$('[data-reka-collection-item][data-state="checked"]', findedFilter).forEach(el => {
          el.dataset.state = 'unchecked';
          el.querySelector('.border-border.absolute').innerHTML = '';
          el.classList.remove('bg-accent/50')
          el.classList.add('hover:bg-accent/25')
        });
      } else if (filterType === 'toggler') {
        const buttonEl = findedFilter.querySelector('button[role="switch"][value]')
        buttonEl.setAttribute('aria-checked', 'false')
        buttonEl.dataset.state = 'unchecked';
        _$('span', buttonEl).dataset.state = 'unchecked';
      } else if (filterType === 'price') {
        const minValue = _$('.lav-filter__item[data-type="price"] [aria-label="Minimum"]')?.ariaValueMin;
        const maxValue = _$('.lav-filter__item[data-type="price"] [aria-label="Maximum"]')?.ariaValueMax;
        const minInput = _$$('.lav-filter__item[data-type="price"] input[type="number"][aria-describedby="price-currency"]')[0];
        const maxInput = _$$('.lav-filter__item[data-type="price"] input[type="number"][aria-describedby="price-currency"]')[1];

        minInput.value = minValue;
        maxInput.value = maxValue;

        minInput.dispatchEvent(new Event('change', { bubbles: true }));
        _$('.lav-preselect__option.active')?.classList.remove('active')
      } else if (filterType === 'range') {
        const minValue = _$('.lav-filter--range', findedFilter).dataset.minValue;
        const maxValue = _$('.lav-filter--range', findedFilter).dataset.maxValue;
        const minInput = _$$('input[type="number"]', findedFilter)[0];
        const maxInput = _$$('input[type="number"]', findedFilter)[1];

        minInput.value = minValue;
        maxInput.value = maxValue;

        minInput.dispatchEvent(new Event('change', { bubbles: true }));
      }
    }
  }

  async function updateListingHeader() {
    const pageContent = _$('[class*="2xl:max-w-[1550px]"] > div')
    const pageHeader = _$('[class*="2xl:max-w-[1550px]"] > div > div > div')
    const pageToggler = _$('[role="radiogroup"][id*="headlessui-radiogroup"]')
    const pageTogglerParent = _$('[role="radiogroup"][id*="headlessui-radiogroup"]')?.parentElement
    const pageFilter = _$('.col-span-1 .mt-6')
    const pageSort = _$('.gap-x-1\\.5 #open-more-filters')
    const isSearch = !!_$('.col-span-1 .mt-6 [type="search"]')

    pageContent.classList.add('lav-page-content')
    pageHeader.classList.add('lav-page-header')

    const markup = /* html */ `
      <div class="lav-head">
        <div class="lav-head__info"></div>
        <div class="lav-head__filter"></div>
        <div class="lav-head__sort"></div>
        <div class="lav-head__toggler"></div>
      </div>
    `;

    pageContent.insertAdjacentHTML('afterbegin', markup)

    _$(".lav-head__info", pageContent).appendChild(pageHeader)
    if (pageToggler) {
      _$(".lav-head__toggler", pageContent).appendChild(pageToggler)
      pageTogglerParent.remove();
    } else {
      _$(".lav-head__toggler", pageContent).remove()
    }
    if (pageSort) {
      _$(".lav-head__sort", pageContent).appendChild(pageSort)
    } else {
      _$(".lav-head__sort", pageContent).remove()
    }
    if (pageFilter) {
      _$(".lav-head__filter", pageContent).appendChild(pageFilter)
    } else {
      _$(".lav-head__filter", pageContent).remove()
    }

    if (isSearch) {
      _$('.lav-head__filter')?.classList.add('lav-with-search')
    }

    if (pageHeader?.clientHeight > 74) {
      _$('.lav-head')?.classList.add('lav-head--tall')
    }
  }

  async function addVerticalFilters() {
    await waitFor(() => _$('.col-span-1 > div > .min-w-0 > div') && _$('.mt-6 .gap-2.justify-start>[type="button"]'), false, { ms: 20 })
    const listWrapEl = _$('.col-span-1 > div > .min-w-0 > div');
    listWrapEl.classList.add('lav-list__wrap');
    _$(".flex.flex-wrap", listWrapEl).classList.add('lav-listing');

    const filterEl = document.createElement('div');
    filterEl.classList.add('lav-filter');
    filterEl.innerHTML = /* html */ `
      <div class="lav-filter__list"></div>
    `;

    _$('.lav-list__wrap').insertAdjacentElement('afterbegin', filterEl)

    const mobileFilterBtn = _$('.mt-6 .gap-2.justify-start>[type="button"]')

    if (!mobileFilterBtn) return;

    document.body.classList.add('lav-filter-processing')
    mobileFilterBtn.click();
    await waitFor(() => _$('[data-dismissable-layer][data-state="open"] .pb-24>.mb-4'), false, { ms: 20 })

    handleFilterModal();

    _$('[data-dismissable-layer] .border-border.bg-card [type="button"]')?.click();
    await delay(300)
    document.body.classList.remove('lav-filter-processing')

    function handleFilterModal() {
      const filterModalEl = _$('[data-dismissable-layer][data-state="open"] .overflow-y-auto');
      const filterModalListEl = _$$('.pb-24>.mb-4', filterModalEl, true)

      filterModalListEl.forEach((filterEl, index) => {
        const filterItemEl = getFilterItem(filterEl, index)
        if (!filterItemEl) return;

        _$('.lav-filter__item-head', filterItemEl).addEventListener('click', () => {
          const title = _$('.lav-filter__item-title', filterItemEl).innerText.trim();
          pushDataLayer('exp_f_filter_click', title, 'click', 'Static');
          filterItemEl.classList.toggle('active')
        });
        
        // Insert price filter at the beginning, others at the end
        if (filterItemEl.dataset.type === 'price') {
          _$('.lav-filter__list')?.prepend(filterItemEl)
        } else {
          _$('.lav-filter__list')?.appendChild(filterItemEl)
        }
      })

      _$('.lav-filter__item')?.classList.add('active');

      if (_$('.lav-filter__item[data-type="price"]')) {
        new MutationObserver((mutations, observer) => {
          for (let mutation of mutations) {
            if (mutation.type === 'characterData') {
              updateCurrencyForExp()
            }
          }
          console.log('Mutation observer price filter', mutations)
        }).observe(_$('nav [type="button"].h-11'), { childList: true, subtree: true, characterData: true })
      }

      updateCurrencyForExp()
    }

    function getFilterItem(el, index) {
      let isPrice = false
      const title = _$('.text-muted-foreground', el)?.textContent?.trim()
      const iconEl = _$('.text-muted-foreground .text-base', el)?.cloneNode(true)
      if (iconEl) {
        iconEl.classList.add('text-muted-foreground')
        iconEl.classList.remove('mr-1.5')
        isPrice = iconEl.classList.contains('fa-dollar-sign')
      }
      const isRange = !!_$('[data-slider-impl][data-orientation="horizontal"]', el)
      const isOptions = !!_$('[type="button"].text-sm', el)
      const isToggler = !!_$('button[role="switch"][value]', el)

      const itemEl = document.createElement('div');
      itemEl.classList.add('lav-filter__item');
      itemEl.dataset.index = index;
      if (isPrice) itemEl.dataset.type = 'price';
      else if (isRange) itemEl.dataset.type = 'range';
      else if (isOptions) itemEl.dataset.type = 'options';
      else if (isToggler) itemEl.dataset.type = 'toggler';
      itemEl.innerHTML = /* html */ `
        <div class="lav-filter__item-head">
          ${iconEl ? `<div class="lav-filter__item-icon">${iconEl.outerHTML}</div>` : ''}
          <div class="lav-filter__item-title">${title}</div>
          <div class="lav-filter__item-dropdown">${getSvg('dropdownIcon')}</div>
        </div>

        <div class="lav-filter__item-body"></div>
      `

      const bodyEl = _$('.lav-filter__item-body', itemEl);

      if (isPrice) {
        // const myRangeEl = _$('.mt-2>.py-2', el).cloneNode(true)
        bodyEl.innerHTML = _$('.mt-2>.py-2', el).innerHTML;
        const inputsEl = getInputsForRange(itemEl, el, isPrice)
        bodyEl.insertAdjacentHTML('afterbegin', inputsEl);
        
        handleRangeFilter(bodyEl, isPrice, isPrice)
      } else if (isRange) {
        // const myRangeEl = _$('.mt-2>.py-2', el).cloneNode(true)
        bodyEl.innerHTML = _$('.mt-2>.py-2', el).innerHTML;
        const inputsEl = getInputsForRange(itemEl, el, isPrice)
        bodyEl.insertAdjacentHTML('afterbegin', inputsEl);
        
        handleRangeFilter(bodyEl, isPrice, isPrice)
      }
      else if (isOptions) {
        _$$('[type="button"].text-sm', el).forEach((btn, index) => {
          const optionEl = getOptionElement(btn, index)

          optionEl.addEventListener('click', () => {
            document.body.classList.add('lav-filter-processing')
            btn.click();
            optionEl.classList.toggle('active')
            document.body.classList.remove('lav-filter-processing')
          });

          _$('.lav-filter__item-body', itemEl).appendChild(optionEl)
        });
      } else if (isToggler) {
        bodyEl.innerHTML = _$('.mt-2>div', el).innerHTML;
        let isProcessing = false;
        _$('.flex', bodyEl).addEventListener('click', async () => {
          if (isProcessing) return;
          isProcessing = true
          const index = parseInt(bodyEl.closest('.lav-filter__item').dataset.index) + 2;
          const buttonEl = bodyEl.querySelector('button[role="switch"][value]')
          const mobileFilterBtn = _$('.lav-head__filter .mt-6 .gap-2.justify-start>[type="button"]')

          if (!mobileFilterBtn) return;

          document.body.classList.add('lav-filter-processing')

          const isChecked = buttonEl.getAttribute('aria-checked') === 'true';

          if (isChecked) {
            buttonEl.setAttribute('aria-checked', 'false')
            buttonEl.dataset.state = 'unchecked';
            _$('span', buttonEl).dataset.state = 'unchecked';
          } else {
            buttonEl.setAttribute('aria-checked', 'true')
            buttonEl.dataset.state = 'checked';
            _$('span', buttonEl).dataset.state = 'checked';
          }

          mobileFilterBtn.click();
          await waitFor(() => _$('[data-dismissable-layer][data-state="open"] .pb-24>.mb-4'), false, { ms: 20 })

          _$(`[data-dismissable-layer][data-state="open"] .overflow-y-auto .mb-4:nth-child(${index}) button[role="switch"][value]`).click()

          _$('[data-dismissable-layer] .border-border.bg-card [type="button"]')?.click();
          await delay(300)
          document.body.classList.remove('lav-filter-processing')
          isProcessing = false
        });
      } else {
        // bodyEl
        // return false
        // const bodyEl = _$('.lav-filter__item-body', itemEl);
        bodyEl.innerHTML = 'Raw data' + el.innerHTML;
      }

      return itemEl
    }

    function handleRangeFilter(el, isPrice = false) {
      el.classList.add('lav-filter--range')
      const sliderFullEl = _$('[data-orientation="horizontal"].grow.overflow-hidden', el)
      const axisFromCaptionEl = _$$('.rounded-full.text-foreground', el)[0]
      const axisToCaptionEl = _$$('.rounded-full.text-foreground', el)[1]
      const sliderEl = _$('[data-orientation="horizontal"].absolute', el)
      const minThumbEl = _$('[aria-label="Minimum"]', el)
      const maxThumbEl = _$('[aria-label="Maximum"]', el)
      const inputFromEl = _$$('input[type="number"][inputmode="numeric"]', el)[0]
      const inputToEl = _$$('input[type="number"][inputmode="numeric"]', el)[1]
      const minValue = parseInt(minThumbEl.ariaValueMin);
      const maxValue = parseInt(maxThumbEl.ariaValueMax);
      el.dataset.minValue = minValue;
      el.dataset.maxValue = maxValue;

      // Flag for logarithmic slider behavior
      const logBreakpoint = 100; // Breakpoint value for logarithmic scale
      const isLog = isPrice && maxValue * 2 > logBreakpoint; // If maxValue * 2 <= logBreakpoint, use linear scale

      updateSliderPosition();
      if (isPrice) {
        addPreselctOptions();
      }

      inputFromEl.addEventListener('change', () => {
        if (!inputFromEl.value) {
          inputFromEl.value = minValue;
        }

        if (parseInt(inputFromEl.value) > parseInt(inputToEl.value)) {
          // inputFromEl.value = inputToEl.value;
          inputFromEl.value = minValue;
        } else if (parseInt(inputFromEl.value) > maxValue) {
          inputFromEl.value = maxValue;
        } else if (parseInt(inputFromEl.value) < minValue) {
          inputFromEl.value = minValue;
        } 

        updateSliderPosition()
        triggerChangeOriginalFilter()
      });

      inputFromEl.addEventListener('input', () => {
        updateSliderPosition()
        _$(".lav-preselect__option.active")?.classList.remove('active')
      });

      if (isPrice) {
        inputFromEl.addEventListener('click', () => {
          pushDataLayer('exp_f_price_selector', 'Input', 'click', 'Price filter');
        });

        inputToEl.addEventListener('click', () => {
          pushDataLayer('exp_f_price_selector', 'Input', 'click', 'Price filter');
        });
      }

      inputToEl.addEventListener('change', () => {
        if (!inputToEl.value) {
          inputToEl.value = maxValue;
        }
        if (parseInt(inputToEl.value) < parseInt(inputFromEl.value)) {
          // inputToEl.value = inputFromEl.value;
          inputToEl.value = maxValue;
        } else if (parseInt(inputToEl.value) > maxValue) {
          inputToEl.value = maxValue;
        } else if (parseInt(inputToEl.value) < minValue) {
          inputToEl.value = minValue;
        } 

        updateSliderPosition()
        triggerChangeOriginalFilter()
      });

      inputToEl.addEventListener('input', () => {
        updateSliderPosition()
        _$(".lav-preselect__option.active")?.classList.remove('active')
      });


      // Add ability to slide/change values by dragging thumbs
      let activeThumb = null;
      let isDragging = false;

      minThumbEl.addEventListener('mousedown', (e) => {
        e.preventDefault();
        activeThumb = 'min';
        isDragging = true;
        if (isPrice) {
          pushDataLayer('exp_f_price_selector', 'Slider', 'click', 'Price filter');
        }
      });

      maxThumbEl.addEventListener('mousedown', (e) => {
        e.preventDefault();
        _$(".lav-preselect__option.active")?.classList.remove('active')
        activeThumb = 'max';
        isDragging = true;
        if (isPrice) {
          pushDataLayer('exp_f_price_selector', 'Slider', 'click', 'Price filter');
        }
      });

      document.addEventListener('mousemove', (e) => {
        if (!activeThumb || !isDragging) return;

        // Get slider dimensions and position
        const sliderRect = sliderFullEl.getBoundingClientRect();
        const sliderWidth = sliderRect.width;
        const mouseX = e.clientX - sliderRect.left;
        
        // Calculate percentage and value
        let percent = (mouseX / sliderWidth) * 100;
        percent = Math.max(0, Math.min(100, percent)); // Clamp between 0-100
        
        const newValue = percentToValue(percent);

        // Update the appropriate input based on which thumb is being dragged
        if (activeThumb === 'min') {
          const maxCurrentValue = parseInt(inputToEl.value);
          const clampedValue = Math.min(newValue, maxCurrentValue);
          inputFromEl.value = Math.max(minValue, clampedValue);
        } else if (activeThumb === 'max') {
          const minCurrentValue = parseInt(inputFromEl.value);
          const clampedValue = Math.max(newValue, minCurrentValue);
          inputToEl.value = Math.min(maxValue, clampedValue);
        }

        updateSliderPosition();
      });

      document.addEventListener('mouseup', () => {
        if (isDragging && activeThumb) {
          // Trigger change event to ensure any validation/submission logic runs
          if (activeThumb === 'min') {
            inputFromEl.dispatchEvent(new Event('change', { bubbles: true }));
          } else if (activeThumb === 'max') {
            inputToEl.dispatchEvent(new Event('change', { bubbles: true }));
          }
          isDragging = false;
          activeThumb = null;
        }
      });

      async function triggerChangeOriginalFilter() {
        const index = parseInt(el.closest('.lav-filter__item').dataset.index) + 2;
        const mobileFilterBtn = _$('.lav-head__filter .mt-6 .gap-2.justify-start>[type="button"]')

        if (!mobileFilterBtn) return;

        document.body.classList.add('lav-filter-processing')
        mobileFilterBtn.click();

        // findTrigger.click()
        await waitFor(() => _$('[data-dismissable-layer][data-state="open"] .pb-24>.mb-4'), false, { ms: 20 })

        const originalParent = _$(`[data-dismissable-layer][data-state="open"] .overflow-y-auto .mb-4:nth-child(${index})`);

        const originalFromEl = _$$('input[type="number"]', originalParent)[0] || _$('input[data-filter-endpoint="from"]', originalParent)
        const originalToEl = _$$('input[type="number"]', originalParent)[1] || _$('input[data-filter-endpoint="to"]', originalParent)

        originalFromEl.value = inputFromEl.value;
        originalToEl.value = inputToEl.value;

        originalFromEl.dispatchEvent(new Event('input', { bubbles: true }))
        originalToEl.dispatchEvent(new Event('input', { bubbles: true }))

        // findTrigger.click()
        _$('[data-dismissable-layer] .border-border.bg-card [type="button"]')?.click();
        await delay(300)

        document.body.classList.remove('lav-filter-processing')
      }

      function updateSliderPosition() {
        const fromValue = parseInt(inputFromEl.value) || minValue;
        const toValue = parseInt(inputToEl.value) || maxValue;
        const fromPercent = valueToPercent(fromValue);
        const toPercent = valueToPercent(toValue);
        
        // Update slider visual position
        sliderEl.style.left = fromPercent + '%';
        sliderEl.style.width = (toPercent - fromPercent) + '%';

        // Update thumb positions: calc shifts thumb right near 0% and left near 100%
        const thumbRadius = 10; // half of thumb width in px
        const minOffset = thumbRadius * (1 - fromPercent / 50);
        const maxOffset = thumbRadius * (1 - toPercent / 50);
        minThumbEl.style.left = `calc(${fromPercent}% + ${minOffset}px)`;
        maxThumbEl.style.left = `calc(${toPercent}% + ${maxOffset}px)`;

        // Update captions
        const currency = axisFromCaptionEl.textContent.includes('€') ? '€' : axisFromCaptionEl.textContent.includes('$') ? '$' : '';
        axisFromCaptionEl.textContent = `${currency}${fromValue}`;
        axisToCaptionEl.textContent = `${currency}${toValue}`;
      }

      function addPreselctOptions() {
        const range = [
          { value: 10, label: `Under €10` },
          { value: 20, label: `Under €20` },
          { value: 30, label: `Under €30` },
          { value: 50, label: `Under €50` },
          { value: 100, label: `Under €100` },
        ]

        const preselectEl = document.createElement('div');
        preselectEl.classList.add('lav-preselect', 'overflow-x-auto', 'scroll-smooth', 'scrollbar-hide');
        range.forEach(item => {
          if (item.value >= maxValue - 20) return;

          const optionEl = document.createElement('div');
          optionEl.classList.add('lav-preselect__option');
          optionEl.dataset.value = item.value;
          optionEl.textContent = item.label;
          preselectEl.appendChild(optionEl);

          optionEl.addEventListener('click', () => {
            pushDataLayer('exp_f_price_selector', 'Button', 'click', 'Price filter');
            if (optionEl.classList.contains('active')) {
              optionEl.classList.remove('active')
              return
            }
            const value = parseInt(optionEl.dataset.value);
            inputFromEl.value = minValue;
            inputToEl.value = value;
            updateSliderPosition();

            _$$('.lav-preselect__option').forEach(el => el.classList.remove('active'))
            optionEl.classList.add('active')
            triggerChangeOriginalFilter();
          });
        })

        if (_$$('.lav-preselect__option', preselectEl)?.length) {
          el.insertAdjacentElement('afterbegin', preselectEl)
        }
      }

      // Helper function: convert value to percentage
      function valueToPercent(value) {
        if (!isLog) {
          // Linear conversion
          return ((value - minValue) / (maxValue - minValue)) * 100;
        } else {
          // Logarithmic conversion: 50% of slider = minValue to logBreakpoint, 50% = logBreakpoint to maxValue
          if (value <= logBreakpoint) {
            return (value - minValue) / (logBreakpoint - minValue) * 50;
          } else {
            return 50 + (value - logBreakpoint) / (maxValue - logBreakpoint) * 50;
          }
        }
      }

      // Helper function: convert percentage to value
      function percentToValue(percent) {
        if (!isLog) {
          // Linear conversion
          return Math.round(minValue + (percent / 100) * (maxValue - minValue));
        } else {
          // Logarithmic conversion
          if (percent <= 50) {
            return Math.round(minValue + (percent / 50) * (logBreakpoint - minValue));
          } else {
            return Math.round(logBreakpoint + ((percent - 50) / 50) * (maxValue - logBreakpoint));
          }
        }
      }
    }

    function getInputsForRange(el, originalEl, isPrice = false) {
      const minValue = parseInt(_$('[aria-label="Minimum"]', originalEl).ariaValueMin);
      const maxValue = parseInt(_$('[aria-label="Maximum"]', originalEl).ariaValueMax);
      const currentMinValue = parseInt(_$('[aria-label="Minimum"]', originalEl).getAttribute('aria-valuenow'));
      const currentMaxValue = parseInt(_$('[aria-label="Maximum"]', originalEl).getAttribute('aria-valuenow'));
      const inputsForRange = /* html */ `
        <div class="flex gap-x-3 justify-between items-end" style="margin-bottom: 34px;">
          <div class="w-full">
            <div class="flex justify-between mb-1">
              <label class="flex items-center gap-2 text-sm font-medium leading-6 text-foreground/90">From</label>
            </div>
            <div class="relative rounded-md shadow-sm">
              ${isPrice ? /* html */ `<div class="absolute top-0 bottom-0.5 left-0 flex items-center pl-3 pointer-events-none">
                <span class="mt-0.5 font-semibold text-muted-foreground sm:text-sm">$</span>
              </div>` : ''}
              <input inputmode="numeric" pattern="[0-9]+(\\.[0-9][0-9]?)?" type="number" min="0" step="0.01" class="${isPrice ? `block w-full border-0 rounded-md shadow-sm sm:text-sm disabled:opacity-50 disabled:pointer-events-none bg-field ring-1 ring-field-ring hover:ring-field-ring-hover focus:ring-field-ring-hover text-field-foreground placeholder:text-muted-foreground py-1.5 pl-7 hide-arrows py-1.5 pr-3` : `block w-full rounded-md border-0 ring-1 shadow-sm sm:text-sm disabled:opacity-50 disabled:pointer-events-none bg-field ring-field-ring hover:ring-field-ring-hover focus:ring-field-ring-hover text-field-foreground placeholder:text-muted-foreground hide-arrows py-1.5`}" placeholder="0" aria-describedby="price-currency" oninput="if(this.value < 0) this.value = 0;" value="${currentMinValue}">
            </div>
          </div>
          <span class="pb-2"> - </span>
          <div class="w-full">
            <div class="flex justify-between mb-1">
              <label class="flex items-center gap-2 text-sm font-medium leading-6 text-foreground/90">To</label>
            </div>
            <div class="relative rounded-md shadow-sm">
              ${isPrice ? /* html */ `<div class="absolute top-0 bottom-0.5 left-0 flex items-center pl-3 pointer-events-none">
                <span class="mt-0.5 font-semibold text-muted-foreground sm:text-sm">$</span>
              </div>` : ''}
              <input inputmode="numeric" pattern="[0-9]+(\\.[0-9][0-9]?)?" type="number" min="0" step="0.01" class="${isPrice ? `block w-full border-0 rounded-md shadow-sm sm:text-sm disabled:opacity-50 disabled:pointer-events-none bg-field ring-1 ring-field-ring hover:ring-field-ring-hover focus:ring-field-ring-hover text-field-foreground placeholder:text-muted-foreground py-1.5 pl-7 hide-arrows py-1.5 pr-3` : `block w-full rounded-md border-0 ring-1 shadow-sm sm:text-sm disabled:opacity-50 disabled:pointer-events-none bg-field ring-field-ring hover:ring-field-ring-hover focus:ring-field-ring-hover text-field-foreground placeholder:text-muted-foreground hide-arrows py-1.5`}" placeholder="1,000" aria-describedby="price-currency" oninput="if(this.value < 0) this.value = 0;" value="${currentMaxValue}">
            </div>
          </div>
        </div>
      `

      return inputsForRange;
    }

    function getOptionElement(btnEl, index) {
      const optionEl = document.createElement('div');
      optionEl.classList.add('lav-filter__option');
      optionEl.innerHTML = btnEl.innerHTML;
      optionEl.dataset.index = index;
      const image = _$('img.size-5', optionEl)
      if (image) {
        image.classList.remove('size-5')
        image.classList.add('size-8')
      }
      if (btnEl.classList.contains('bg-primary-light')) {
        optionEl.classList.add('active')
      }

      _$('.fa-check', optionEl)?.remove()

      optionEl.insertAdjacentHTML('beforeend', /* html */ `
        <span class="absolute right-2 flex-shrink-0 w-5 h-5 rounded border text-primary focus:ring-offset-0 bg-field border-border lav-filter__option-check">
          <span data-state="checked" class="flex justify-center items-center w-full h-full text-sm rounded bg-primary text-foreground">
            <i class="fa-solid fa-check"></i>
          </span>
        </span>
      `)

      return optionEl
    }
  }

  function updateCurrencyForExp() {
    const isEuro = _$('nav [type="button"].h-11').textContent.includes(' EUR ')
    const priceFilterEl = _$('.lav-filter__item[data-type="price"]')
    if (!priceFilterEl) return
    _$$('.mt-0\\.5.text-muted-foreground', priceFilterEl).forEach(el => {
      el.textContent = isEuro ? '€' : '$'
    })
    _$$('.text-sm.text-foreground\\/90', priceFilterEl).forEach(el => {
      if (isEuro) {
        el.textContent = el.textContent.replace('$', '€')
      } else {
        el.textContent = el.textContent.replace('€', '$')
      }
    })
     _$$('.lav-filter--range .rounded-full.text-foreground', priceFilterEl).forEach(el => {
      if (isEuro) {
        el.textContent = el.textContent.replace('$', '€')
      } else {
        el.textContent = el.textContent.replace('€', '$')
      }
    })
    _$$('.lav-preselect__option', priceFilterEl).forEach(el => {
      if (isEuro) {
        el.textContent = el.textContent.replace('$', '€')
      } else {
        el.textContent = el.textContent.replace('€', '$')
      }
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

  // *** Exp BG process *** //
  //Clarity
  function startClarity() {
    if (config.isClarityStarted) return

    config.isClarityStarted = true

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
  }

  // Svg objects
  function getSvg(name) {
    const svgObj = {
      dropdownIcon: `
        <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.57812 7.10937L0.246093 1.80469C-2.89929e-07 1.53125 -3.07858e-07 1.12109 0.246093 0.875L0.875 0.246094C1.12109 -8.11051e-08 1.53125 -9.90336e-08 1.80469 0.246094L6.01562 4.45703L10.2539 0.246093C10.5273 -4.92265e-07 10.9375 -5.10194e-07 11.1836 0.246093L11.8125 0.874999C12.0586 1.12109 12.0586 1.53125 11.8125 1.80469L6.48047 7.10937C6.23437 7.35547 5.82422 7.35547 5.57812 7.10937Z" fill="#FAFAFA"/>
        </svg>
      `
    }

    return svgObj[name]
  }

})()