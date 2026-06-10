
(function () {
  // https://dashboard.govplus.app/forms/?formId=passport-new&indexCurrentStep=0&page=processing
  if (_$('.lav-household')) {
    console.log('** Exp check failed: lav-household exist **', _$('.lav-household'))
    return
  }

  if (!isInitApp()) {
    console.log('** Exp check failed: not init **')
    return
  }

  console.log('*** Experiment started ***')

  // Styles for Experiment
  const styles = /* css */ `
    #invalid_address .AddressVerificationFormSelect__Footer .AddressVerificationFormSelect__Footer__Actions, #invalid_address_scrollById .AddressVerificationFormSelect__Footer .AddressVerificationFormSelect__Footer__Actions {
      padding: 0 16px;
    }
    #invalid_address .GSkipStep__CtaCancelText, #invalid_address_scrollById .GSkipStep__CtaCancelText {
      order: -2;
    }
    #invalid_address .AddressVerificationFormFields, #invalid_address_scrollById .AddressVerificationFormFields {
      order: -1;
    }
    #invalid_address .AddressVerificationFormSelect__Footer__Actions .GCombinedText, #invalid_address_scrollById .AddressVerificationFormSelect__Footer__Actions .GCombinedText {
      display: none;
    }
    .lav-household {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 24px;
    }
    .lav-household__title {
      color: #2B2B2B;
      font-family: "Inter Tight";
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 25.2px;
      letter-spacing: 0.5px;
    }
    .lav-household__options {
      display: flex;
      gap: 12px;
    }
    .lav-household__option {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 44px;
      width: 67px;
      border-radius: 12px;
      border: 1px solid #CACACA;
      background: #FFF;
      color: #191919;
      text-align: center;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 22.4px;
      cursor: pointer;
      transition: .2s;
    }
    @media(hover: hover) {
      .lav-household__option:not(.active):hover {
        border-color: #3585ff;
      }
    }
    .lav-household__option.active {
      border-color: rgba(0, 0, 0, 0.00);
      background: #216DE3;
      box-shadow: 0 2px 0 1px #1B5ABD inset;
      color: #fff;
    }

    .lav-inner {
      border-radius: 20px;
      padding: 16px;
      margin-bottom: -32px;
      align-self: normal;
    }
    .lav-inner.active {
      background: #F0F6FF;
      margin-bottom: -16px;
    }
    .lav-note {
      display: flex;
      align-items: center;
      gap: 10px;
      color: #3E3E3E;
      font-size: 14px;
      font-weight: 400;
      line-height: 18.2px;
      margin: 20px 0;
    }
    .lav-inner:not(.active) .lav-note {
      display: none;
    }
    .lav-inner:not(.active) .js-upgrade-family {
      display: none!important;
    }
    .lav-note__mark {
      font-weight: 600;
      color: #191919;
    }
    .lav-note svg {
      flex-shrink: 0;
    }
    .lav-skip-primary {
      background: #216DE3!important;
    }
    .lav-skip-primary .ant-typography {
      color: #fff!important;
    }
    @media(hover:hover) {
      .lav-skip-primary:hover {
        background: rgb(10, 72, 168)!important;
      }
    }

    @media(max-width: 768px) {
      #invalid_address .AddressVerificationFormSelect__Footer .AddressVerificationFormSelect__Footer__Actions, #invalid_address_scrollById .AddressVerificationFormSelect__Footer .AddressVerificationFormSelect__Footer__Actions {
        padding: 0;
      }
      #invalid_address .AddressVerificationFormSelect__Footer__Actions .GButton--secondary, #invalid_address_scrollById .AddressVerificationFormSelect__Footer__Actions .GButton--secondary {
        padding-left: 12px!important;
        padding-right: 12px!important;
        min-height: 64px !important;
      }
      #invalid_address .GSkipStep__CtaCancelText, #invalid_address_scrollById .GSkipStep__CtaCancelText {
        flex-flow: row;
        gap: 5px;
        margin-bottom: 2px;
      }
      .lav-inner {
        border-radius: 0;
        margin-left: -16px;
        margin-right: -16px;
        margin-bottom: -24px;
      }
      .lav-inner.active {
        margin-bottom: -12px;
      }
      .lav-household {
        display: block;
      }
      .lav-household__options {
        margin-top: 16px;
        gap: 8px;
      }
      .lav-household__option {
        width: auto;
        flex: 1;
      }
      .lav-note {
        margin: 16px 0;
        gap: 12px;
      }
    }
  `

  const stylesEl = document.createElement('style')
  stylesEl.classList.add('exp-styles')
  stylesEl.innerHTML = styles

  // *** Logic *** //
  waitFor('#invalid_address', () => {
    initExp()
  })

  waitFor('#invalid_address_scrollById', () => {
    initExp()
  })

  function isInitApp() {
    // const targetFormIds = [
    //   "passport-new",
    //   "passport-renewal",
    //   "passport-lost",
    //   "passport-damaged",
    //   "passport-stolen",
    // ]
    // const isApp = location.href.includes('dashboard.govplus');
    const isValidPage = location.href.includes('page=processing');
    // const formId = new URLSearchParams(window.location.search).get('formId');

    // console.log('Check init conditions:', { isApp, isValidPage, formId, isValidFormId: targetFormIds.includes(formId) });
    // targetFormIds.includes(formId)
    return isValidPage;
    // return true;
  }
    
  async function initExp() {
    if (_$('.lav-household')) {
      console.log('** Exp check failed: lav-household exist **', _$('.lav-household'))
      return;
    }

    console.log('** InitExp **')
    waitFor('.AddressVerificationFormSelect__Footer__Actions', () => {
      handleFirstStep();
      // changeCopy();
      // handlePricingBlock();
      _$('.lav-household')?.appendChild(stylesEl);

      document.addEventListener('click', function (e) {
        const target = e.target;

        if ((target.closest('#invalid_address') || target.closest('#invalid_address_scrollById')) && target.closest('.ant-btn[type="submit"]') && target.closest('.AddressVerificationFormFields')) {
          waitFor('.AddressVerificationFormSelect__Footer__Actions', () => {
            handleFirstStep();
            _$('.lav-household')?.appendChild(stylesEl);
          });
        }
      });
    })
  }

  function handleFirstStep() {
    const parentEl = _$('#invalid_address') || _$('#invalid_address_scrollById');
    if (!parentEl) return
    if (_$('.lav-household')) return

    const addFamilyBtn = _$('.AddressVerificationFormSelect__Footer__Actions .js-upgrade-family', parentEl);

    if (!addFamilyBtn) return

    const markup = /* html */ `
      <div class='lav-inner'>
        <div class='lav-household'>
          <div class='lav-household__title'>What is the size of your household?</div>
          <div class='lav-household__options'>
            <div class='lav-household__option active' data-value="1">1</div>
            <div class='lav-household__option' data-value="2">2</div>
            <div class='lav-household__option' data-value="3">3</div>
            <div class='lav-household__option' data-value="4">4</div>
            <div class='lav-household__option' data-value="5+">5+</div>
          </div>
        </div>

        <div class='lav-note'>
          ${getSvg('persons')}
          <span class='lav-note__text'>
            <span class='lav-note__mark'>Track, manage & file</span> essential documents for your family. Avoid missing deadlines & costly mistakes.
            </span>
        </div>
      </div>
    `;

    _$('.AddressVerificationFormSelect__Footer__Actions', parentEl).insertAdjacentHTML('beforebegin', markup);

    _$('.ant-typography', addFamilyBtn).innerHTML = 'Confirm address & add my&nbsp;family&nbsp;to&nbsp;GOV+';

    _$('.lav-note', parentEl).insertAdjacentElement('afterend', addFamilyBtn)

    _$$('.lav-household__option', parentEl).forEach(option => {
      option.addEventListener('click', function () {
        _$$('.lav-household__option', parentEl).forEach(opt => opt.classList.remove('active'))
        this.classList.add('active')

        const selectedValue = this.getAttribute('data-value')
        if (selectedValue === '1') {
          _$(".lav-inner").classList.remove('active')
        } else {
          _$(".lav-inner").classList.add('active')
        }

        updateSecondaryButton();
      })
    })

    updateSecondaryButton();

    function updateSecondaryButton() {
      const selectedOption = _$('.lav-household__option.active', parentEl);

      if (!selectedOption) return;

      const selectedValue = selectedOption.getAttribute('data-value');

      const skipFamilyBtn = _$('.AddressVerificationFormSelect__Footer__Actions .GButton--secondary', parentEl);

      if (selectedValue === '1') {
        skipFamilyBtn.classList.add('lav-skip-primary', 'GButton--primary')
        _$('.ant-typography', skipFamilyBtn).innerHTML = 'Confirm my address';
      } else {
        skipFamilyBtn.classList.remove('lav-skip-primary', 'GButton--primary')
        _$('.ant-typography', skipFamilyBtn).innerHTML = 'Just confirm address & file for myself';
      }
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

  // Shordcode for selectors
  function _$(selector, context = document) {
    return context.querySelector(selector)
  }
  function _$$(selector, context = document, toSimpleArray = false) {
    const arr = context.querySelectorAll(selector)

    return toSimpleArray ? Array.from(arr) : arr
  }

  // *** Exp BG process *** //

  // Svg objects
  function getSvg(name) {
    const svgObj = {
      persons: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <g clip-path="url(#clip0_3611_31567)">
            <path d="M15.4546 19.0908V17.2726C15.4546 16.3082 15.0715 15.3832 14.3895 14.7013C13.7076 14.0194 12.7827 13.6362 11.8183 13.6362H4.54554C3.58111 13.6362 2.6562 14.0194 1.97425 14.7013C1.2923 15.3832 0.90918 16.3082 0.90918 17.2726V19.0908" stroke="#216DE3" stroke-width="1.81819" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8.18129 9.99978C10.1896 9.99978 11.8177 8.37172 11.8177 6.36341C11.8177 4.3551 10.1896 2.72705 8.18129 2.72705C6.17298 2.72705 4.54492 4.3551 4.54492 6.36341C4.54492 8.37172 6.17298 9.99978 8.18129 9.99978Z" stroke="#216DE3" stroke-width="1.81819" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M20.9089 19.0908V17.2726C20.9084 16.4668 20.6401 15.6842 20.1465 15.0474C19.6529 14.4106 18.9617 13.9558 18.1816 13.7544" stroke="#216DE3" stroke-width="1.81819" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14.5459 2.8457C15.3281 3.04597 16.0214 3.50088 16.5165 4.13871C17.0116 4.77654 17.2803 5.561 17.2803 6.36843C17.2803 7.17586 17.0116 7.96032 16.5165 8.59814C16.0214 9.23598 15.3281 9.69088 14.5459 9.89115" stroke="#216DE3" stroke-width="1.81819" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          <defs>
            <clipPath id="clip0_3611_31567">
              <rect width="24" height="24" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      `,
      arrowRight: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <g clip-path="url(#clip0_2675_1512)">
            <mask id="mask0_2675_1512" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28">
              <path d="M27.5714 0.571411H0.142822V28H27.5714V0.571411Z" fill="white"/>
            </mask>
            <g mask="url(#mask0_2675_1512)">
              <path d="M4.90491 12.0042H18.2382" stroke="white" stroke-width="1.90477" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M11.5717 5.33746L18.2383 12.0041L11.5717 18.6708" stroke="white" stroke-width="1.90477" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
          </g>
          <defs>
            <clipPath id="clip0_2675_1512">
              <rect width="24" height="24" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      `
    }

    return svgObj[name]
  }
})()