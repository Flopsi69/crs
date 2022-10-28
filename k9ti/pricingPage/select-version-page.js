let stylesHtml = /*html */ `
  <style>
    /* Hide old blocks */
    header.site-header,
    div.site-inner {
      display: none;
    }

    /* Default classes */
    .custom-container ul {
      list-style: none;
    }
    .custom-container {
      font-family: "Open Sans", sans-serif;
      background: #ffffff;
      font-weight: 400;
      font-size: 16px;
      line-height: 23px;
      color: #1d3871 !important;
      width: 100%;
      max-width: 1030px;
      padding: 0 15px;
      margin: 0 auto;
      text-align: left;
    }
    .custom-container .underline {
      text-decoration-line: underline;
    }
    .custom-container .bold {
      font-weight: 700 !important;
    }

    .custom-container p {
      margin: 0;
      color: #1d3871!important;
    }

    /*  Header */
    header {
      margin: 6px auto 20px;
    }
    .logo_wrapp {
      max-width: 204px;
      max-height: 50px;
      margin: 0 auto;
      display: block;
    }
    .logo_wrapp img {
      width: 100%;
      height: 100%;
    }

    /* inform_wrapp */
    .inform_wrapp {
      margin-bottom: 75px;
    }
    .inform_wrapp h1 {
      font-weight: 600;
      font-size: 36px;
      line-height: 40px;
      color: #794E15;
      margin: 0!important;
      text-align: left;
    }
    .notify {
      margin: 20px 0 0;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }
    .notify__info {
      width: 50%;
      flex-shrink: 0;
    }
    .notify__info-title {
      font-size: 24px;
      line-height: 1.2;
      color: #794e15;
      font-weight: 400;
      margin: 0 0 20px;
      text-align: left;
    }
    .notify__info-title span {
      text-transform: uppercase;
      font-weight: 600;
    }
    .notify__info-list {
      margin: 0;
    }
    .notify__info-list li {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
    }
    .notify__info-list li>img {
      margin-right: 12px;
    } 
    .notify__info-list p>img {
      margin-left: 4px;
    }
    .notify__info ul li + li {
      margin-top: 8px;
    }
    .notify__note {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      background: #e8f1f9;
      border-radius: 10px;
      padding: 16px;
      max-width: 510px;
      width: 100%;
      margin-left: 20px;
    }
    .notify__note-title {
      display: flex;
      align-items: center;
      flex-shrink: 0;
      font-weight: 600;
      line-height: 1.5;
      color: #794e15;
      margin-right: 8px;
    }
    .notify__note-title img {
      margin-right: 4px;
    }
    .notify__note-descr {
      font-size: 14px;
      line-height: 1.5;
      color: #794E15;
    }
    .notify__note-descr span {
      display: none;
      text-transform: uppercase;
      font-weight: 700;
    }

    /* ToolTips  todo */
    .lav-tip {
      width:16px;
      filter: invert(56%) sepia(96%) saturate(3080%) hue-rotate(160deg) brightness(12%) contrast(101%);
      display: inline-block;
      margin-bottom: 2px;
      // position: absolute;
      // width: 100%;
      // height: 100%;
      // max-width: 11px;
      // max-height: 11px;
      // margin-left: 2px;
      // cursor: pointer;
    }
    .tippy-tooltip {
      background: #ffffff;
      border-radius: 8px;
      box-shadow: 0px 2px 6px 2px rgba(0, 0, 0, 0.15);
      filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2));
      font-size: 14px;
      line-height: 150%;
      color: #525252;
    }
    .tippy-content {
      padding: 16px;
    }
    .tippy-tooltip span {
      font-weight: 700;
    }
    .tippy-tooltip[data-placement^="bottom"] > .tippy-arrow,
    .tippy-tooltip[data-placement^="top"] > .tippy-arrow {
      border-bottom-color: #ffffff;
      color: white;
      border-top-color: white;
    }

    /* Reviews Section */
    .reviews_wrapp {
      margin: 80px 0 23px;
      padding-bottom: 90px;
      border-bottom: 1px solid #f0eeee;
      display: flex;
      gap: 40px;
    }
    .review {
      display: flex;
      width: 50%;
      gap: 20px;
      align-items: flex-start;
      justify-content: space-between;
    }
    .review__title {
      font-size: 16px;
      line-height: 22px;
      color: #734f22;
      margin: 0;
      text-align: left;
      font-weight: 700;
    }
    .review__title_hide {
      display: none;
    }
    .review__descr p {
      font-size: 16px;
      line-height: 1.5;
      color: #525252!important;
      margin: 0;
    }
    .review__descr p + p {
      margin-top: 12px;
    }
    .review__head img {
      max-width: 72px;
      max-height: 72px;
    }
    .review__body img {
      max-width: 25px;
      max-height: 16px;
      margin: 20px 0 12px;
    }

    /* Table Plans */
    .plans-sub {
      display: none;
    }
    .plans__table {
      width: 100%;
      border-collapse: separate;
      border-spacing: 8px 0;
      position: relative
    }

    .plans__table thead {
      position: relative;
      z-index: 1;
    }

    .plans__table-wrap {
      margin: 0 -8px;
    }

    .plans__table th:not(.plan__header) {
      border: unset;
    }

    .plans__table th:not(:first-child) {
      width: 255px;
    }

    .plans__table td {
      padding: 20px 0;
    }

    .plans__table td:not(:nth-child(1)) {
      font-weight: 600;
      font-size: 12px;
      line-height: 16px;
      text-align: center;
      letter-spacing: -0.01em;
      text-transform: uppercase;
      transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    .plans__table tbody tr  {
      position: relative;
    }

    .plans__table tbody tr:not(:last-child)::after {
      position: absolute;
      content: "";
      left: 0;
      right: 8px;
      bottom: 0;
      border-bottom: 1px solid #dfe8f0;
    }

    .plans__table td:nth-child(2) {
      color: #525252;
    }

    .plans__table td:nth-child(3) {
      color: #1d3871;
      background: #f9fcff;
    }

    .plans__table svg {
      display: block;
      stroke: #525252;
      max-width: 24px;
      max-height: 24px;
      width: 100%;
      height: 100%;
      margin: 0 auto;
    }
    
    .plans__table td:nth-child(3) svg {
      stroke: #1d3871;
    }

    .plans__table tr:nth-child(4) td {
      border-radius: 0 0 20px 20px;
    }

    .plans__table svg + span {
      display: block;
      margin: 8px auto 0;
    }

    .plans__table tbody tr:first-child td:last-child {
      position: relative;
    }

    .plans__table tbody tr:first-child td:last-child::after {
      content: '';
      position: absolute;
      left: 0;
      top: -15px;
      right: 0;
      height: 20px;
      background: #fafcff;
      width: 100%;
    }

    .minus_var {
      fill: #525252;
    }

    .plan__hat {
      position: absolute;
      top: 0;
      left: -1px;
      right: -1px;
      transform: translateY(-100%);
      padding: 11px 4px;
      border: 1px solid #1D3871;
      border-radius: 20px 20px 0px 0px;
      font-weight: 700;
      font-size: 14px;
      line-height: 19px;
      text-align: center;
    }

    .plan__hat-paw {
      position: absolute;
      width: 48px;
      left: 0;
      top: 0;
      transform: translate(-50%, -50%);
    }

    .plan__header {
      border: 1px solid #dfe8f0;
      border-radius: 20px;
      padding: 20px;
      transition: all 2s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    .plan__header-title {
      font-weight: 600;
      font-size: 18px!important;
      line-height: 25px;
      letter-spacing: -0.01em;
      text-transform: uppercase;
      color: #794e15;
      padding-bottom: 16px;
      border-bottom: 1px solid #dfe8f0;
      margin: 0;
    }

    .plan__header-price {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 16px 0 12px;
      font-weight: 400;
      line-height: 1;
      white-space: nowrap;
    }

    .plan__header-price_old {
      text-decoration-line: line-through;
      color: #525252;
      margin-right: 4px;
    }
    .plan__header-price_new {
      font-size: 24px;
    }

    .plan__header-caption {
      font-weight: 400;
      font-size: 14px;
      line-height: 150%;
      text-align: center;
      color: #1D3871;
      margin-bottom: 16px;
    }

    .plan__header_premium {
      position: relative;
      border-color: #1D3871;
      border-radius: 0 0 20px 20px;
      background-color: #f9fcff;
    }

    .lav-btn {
      height: 48px;
      display: flex;
      border: none;
      border-radius: 10px;
      justify-content: center;
      align-items: center;
      width: 100%;
      outline: none;
      font-size: 14px;
      line-height: 19px;
      text-align: center;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      font-weight: 600;
      cursor: pointer;
      padding: 1px;
      background: #1d3871;
      color: #ffffff;
      transition: all 2s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    .plan__header-discount {
      margin-top: 16px;
      font-weight: 400;
      font-size: 13px;
      line-height: 150%;
      text-align: center;
    }

    .plan__name {
      font-size: 16px;
      line-height: 23px;
      color: #1D3871;
      text-align: left;
    }

    /* contacts_us */
    .contacts_wrapp .new_contacts_us {
      display: flex;
      padding: 0 !important;
    }

    .contacts_wrapp .new_contacts_us li {
      flex: 1;
      padding-left: 92px !important;
    }

    .contacts_wrapp .new_contacts_us li:last-child {
      padding-left: 126px !important;
    }

    .contacts_wrapp .new_contacts_us li p:first-child {
      font-weight: 400;
      font-size: 15px;
      line-height: 20px;
      color: #794e15 !important;
      margin-bottom: 16px;
    }

    .contacts_wrapp .new_contacts_us p:last-child {
      font-weight: 400;
      font-size: 12px;
      line-height: 167%;
      color: #525252 !important;
      margin: 0 !important;
    }

    .contacts_wrapp .new_contacts_us p > a {
      color: #0037b4;
    }

    /* sticky_wrapp */
    main {
      position: relative;
    }
    .sticky-info {
      position: fixed;
      display: none;
      top: 0;
      z-index: 9999;
      background: #ffffff;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2), 0px 2px 6px 2px rgba(0, 0, 0, 0.15);
      width: 100%;
      margin: 0;
    }
    .sticky-info__item {
      flex: 1;
      padding: 16px;
      text-align: center;
      font-weight: 600;
      font-size: 18px;
      line-height: 24px;
      letter-spacing: -0.01em;
      text-transform: uppercase;
      color: #794e15;
    }
    .sticky-info__item + .sticky-info__item {
      background: #1D3871;
      color: #fff;
    } 

    @media (max-width: 767px) {
      /* header */
      header {
        margin: 5px auto 20px;
      }

      .plans__table tr:nth-child(4) td {
        border-radius: 0;
      }

      .plans__table tbody tr:last-child::after {
        position: absolute;
        content: "";
        left: 0;
        right: 8px;
        bottom: 0;
        border-bottom: 1px solid #dfe8f0;
      }  

      /* inform_wrapp */
      .notify {
        display: block;
        margin-top: 10px;
      }
      .notify__info {
        width: 100%
      }
      .inform_wrapp h1 {
        font-weight: 700;
      }
      .notify__info-title {
        font-weight: 400;
        font-size: 18px!important;
        line-height: 1.2;
        margin-bottom: 16px;
      }
      .notify__info ul li + li {
        margin-top: 16px;
      }
      .notify__note {
        margin-left: 0;
        max-width: 100%;
        margin-top: 20px;
        padding: 12px;
      }
      .notify__note-title span {
        display: none;
      }
      .notify__note-descr span {
        display: inline;
      }
      .notify__note-title {
        margin-right: 0;
      }
      
      /* reviews_wrapp */
      .reviews_wrapp {
        display: block;
        padding-bottom: 40px;
        margin-top: 60px;
      }
      .review {
        display: block;
        width: 100%;
      }
      .review + .review {
        margin-top: 40px;
      }
      .review__head {
        display: flex;
        align-items: center;
      }
      .review__title_hide {
        display: block;
        font-size: 18px;
        line-height: 24px;
      }
      .review__title:not(.review__title_hide) {
        display: none;
      }
      .review__head img {
        width: 60px;
        height: 60px;
        margin-right: 12px;
        flex-shrink: 0;
      }
      .review__body img {
        max-width: 18px;
        margin: 16px 0 8px;
      }

      /* Table Plans */
      .plan__hat {
        padding: 6px 15px;
      }
      .plans__table-wrap {
        margin: 0;
      }
      .plans__table th:not(.plan__header) {
        // display: none;
        width: 0px;
        max-width: 0px;
      }
      .plans__table th:not(:first-child) {
        width: 50%;
      }
      .plans__table {
        border-spacing: 0;
        position: relative;
      }
      .plans__table th:nth-child(2) {
        border-radius: 10px 0px 0px 10px;
      }
      .plans__table th:nth-child(3) {
        border-radius: 0px 0px 10px 0px;
      }
      .plans__table td:first-child {
        position: absolute;
        // top: 0;
        left: 0;
        right: 0;
        z-index: 1;
      }
      .plan__header {
        padding: 12px;
      }
      .plan__header-title {
        padding-bottom: 8px;
      }
      .plan__header-price_new {
        font-weight: bold;
        font-size: 20px;
        line-height: 24px;
      }
      .plan__header-price_old {
        font-size: 14px!important;
        line-height: 21px;
      }
      .plan__header-price {
        margin: 8px 0;
      }
      .plan__header-caption {
        margin-bottom: 12px;
      }
      .lav-btn {
        font-size: 12px;
        line-height: 16px;
      }
      .plan__header-discount {
        display: none;
      }
      .plan__hat-paw {
        width: 40px;
        transform: translate(-50%, -20%);
      }
      .plans__table tbody td:not(:first-child) {
        padding-top: 90px;
      }
      .plans__table tbody td:not(:first-child) {
        padding-top: 90px;
      }
      .plans-sub {
        display: block;
        text-align: center;
      }
      .plans-sub__inner {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1px;
      }
      .plans-sub__item {
        padding: 20px 12px 12px;
      }
      .plans-sub__item + .plans-sub__item {
        background: #f9fcff;
        border-radius: 0px 0px 10px 10px;
        
      } 
      .plans-sub__price {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 12px;
        font-weight: 400;
        line-height: 1;
        white-space: nowrap;
      }
      .plans-sub__price_old {
        text-decoration-line: line-through;
        color: #525252;
        margin-right: 4px;
        font-size: 14px!important;
        line-height: 21px;
      }
      .plans-sub__price_new {
        font-weight: bold;
        font-size: 20px;
        line-height: 24px;
      }
      .plans-sub__discount {
        padding-top: 20px;
        padding-bottom: 15px;
        text-align: center;
        font-size: 16px;
        line-height: 1.5;
      }
      .plans__table tbody tr::after {
        right: 0;
      }

      .plans__table tbody tr:last-child td:not(:first-child) {
        padding-top: 70px;
      }
      
      /* contacts_wrapp */
      .contacts_wrapp .new_contacts_us li,
      .contacts_wrapp .new_contacts_us li:last-child {
        padding: 0 !important;
      }
      .contacts_wrapp .new_contacts_us li:not(:last-child) {
        margin-right: 25px;
      }
    }
  </style>
`;

let renederHtml = /*html */ `
    <header>
      <a href="#" class="logo_wrapp">
        <img src="https://conversionratestore.github.io/projects/knineti/img/new_test_logo.jpg" alt="lofo k9ti" />
      </a>
    </header>

    <main>
      <section class="choose_plan custom-container">
        <div class="inform_wrapp">
          <h1>Choose your plan</h1>

          <div class="notify">
            <div class="notify__info">
              <h2 class='notify__info-title'>All 3 plans include <span>lifetime</span> access to:</h2>
              <ul class='notify__info-list'>
                <li>
                  <img src="https://conversionratestore.github.io/projects/knineti/img/new_paw_print.svg" alt="paw print" />
                  <p class="underline bold">Total Transformation Masterclass<img data-place='notify' class='lav-tip' src="https://flopsi69.github.io/crs/k9ti/pricingPage/img/tip-info.svg" alt="tooltip icon">
                  </p>
                </li>

                <li>
                  <img src="https://conversionratestore.github.io/projects/knineti/img/new_paw_print.svg" alt="paw print" />
                  <p>Housebreaking, separation anxiety, and biting/nipping prevention <span class="bold">BONUS classes</span></p>
                </li>
              </ul>
            </div>

            <div class="notify__note">
              <div class='notify__note-title'>
                <img src="https://conversionratestore.github.io/projects/knineti/img/new_error_outline.svg" alt="error outline" />
                <span>NOTE:</span>
              </div>
              
              <div class='notify__note-descr'>
                <span>NOTE:</span>
                You can claim the special offer today and delay activation until later. Simply contact us after purchase to postpone the start of your dog's training course
              </div>
            </div>
          </div>
        </div>

        <div class="plans__table-wrap">
          <table class='plans__table'>
            <thead>
              <tr>
                <th>&nbsp;</th>

                <th class="plan__header">
                  <h3 class='plan__header-title'>Basic</h3>
                  <div class='plan__header-price'>
                    <span class='plan__header-price_old'>$497</span>
                    <span class='plan__header-price_new'>$297</span>
                  </div>
                  <div class='plan__header-caption'>or $99/month for&nbsp;3&nbsp;months <img data-place='plan-price' class='lav-tip' src="https://flopsi69.github.io/crs/k9ti/pricingPage/img/tip-info.svg" alt="tooltip icon"></div>
                  <button class="plan__header-btn lav-btn">Enroll basic</button>
                  <div class='plan__header-discount'><span class='bold'>Discount</span> expires on Oct 26, 2022</div>
                </th>

                <th class="plan__header plan__header_premium">
                  <div class='plan__hat'>
                    <img class='plan__hat-paw' src="https://conversionratestore.github.io/projects/knineti/img/new_paw_print.svg" alt="paw print" />
                    Personal coaching included <img data-place='plan-paw' class='lav-tip' src="https://flopsi69.github.io/crs/k9ti/pricingPage/img/tip-info.svg" alt="tooltip icon">
                  </div>
                  <h3 class='plan__header-title'>Premium</h3>
                  <div class='plan__header-price'>
                    <span class='plan__header-price_old'>$587</span>
                    <strong class='plan__header-price_new'>$387</strong>
                  </div>
                  <div class='plan__header-caption'> or $129/month for&nbsp;3&nbsp;months <img data-place='plan-price' class='lav-tip' src="https://flopsi69.github.io/crs/k9ti/pricingPage/img/tip-info.svg" alt="tooltip icon"></div>
                  <button class="plan__header-btn lav-btn">Enroll premium</button>
                  <div class='plan__header-discount'><span class='bold'>Discount</span> expires on Oct 26, 2022</div>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <div class='plan__name'>
                    Lifetime Access to <span class="bold underline desk_var">Total Transformation Masterclass +&nbsp;3&nbsp;bonus classes</span> <img data-place='lifetime' class='lav-tip' src="https://flopsi69.github.io/crs/k9ti/pricingPage/img/tip-info.svg" alt="tooltip icon">
                  </div>
                </td>
                <td>
                  <svg width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5 12.5L10.5 18.5L20.5 6.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </td>
                <td>
                  <svg width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5 12.5L10.5 18.5L20.5 6.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </td>
              </tr>

              <tr>
                <td>
                  <div class='plan__name'>
                    <span class="bold underline">Live weekly Q&A group calls</span> with personal coaching <img data-place='weekly' class='lav-tip' src="https://flopsi69.github.io/crs/k9ti/pricingPage/img/tip-info.svg" alt="tooltip icon">
                  </div>
                </td>
                <td>
                  <svg class="minus_var" width="20" height="2" viewBox="0 0 21 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" width="20" height="2" rx="1" />
                  </svg>
                </td>
                <td>
                  <svg width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5 12.5L10.5 18.5L20.5 6.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <span>10-Week Access</span>
                </td>
              </tr>

              <tr>
                <td>
                  <div class='plan__name'>
                    Access to our email <span class="bold underline">support</span> - questions answered by coaches & experts on the next live call <img data-place='support' class='lav-tip' src="https://flopsi69.github.io/crs/k9ti/pricingPage/img/tip-info.svg" alt="tooltip icon">
                  </div>
                </td>
                <td>
                  <svg class="minus_var" width="20" height="2" viewBox="0 0 21 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" width="20" height="2" rx="1" />
                  </svg>
                </td>
                <td>
                  <svg width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5 12.5L10.5 18.5L20.5 6.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <span>10-Week Access</span>
                </td>
              </tr>

              <tr>
                <td>
                  <div class='plan__name bold'>
                    Recordings of weekly Q&A calls
                  </div>
                </td>
                <td>
                  <svg width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5 12.5L10.5 18.5L20.5 6.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <span>10-Week Access</span>
                </td>
                <td>
                  <svg width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5 12.5L10.5 18.5L20.5 6.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <span>10-Week Access</span>
                </td>
              </tr>
            </tbody>
          </table>

          <div class='plans-sub'>
            <div class='plans-sub__inner'>
              <div class='plans-sub__item'>
                <div class='plans-sub__price'>
                  <span class='plans-sub__price_old'>$497</span>
                  <strong class='plans-sub__price_new'>$297</strong>
                </div>

                <button class="plans-sub__btn lav-btn">Enroll basic</button>
              </div>

              <div class='plans-sub__item'>
                <div class='plans-sub__price'>
                  <span class='plans-sub__price_old'>$587</span>
                  <strong class='plans-sub__price_new'>$387</strong>
                </div>

                <button class="plans-sub__btn lav-btn">Enroll premium</button>
              </div>
            </div>
        
       
            <div class='plans-sub__discount'><span class='bold'>Discount</span> expires on Oct 26, 2022</div>
          </div>
        </div>

        <ul class="reviews_wrapp">
          <li class='review'>
            <div class='review__head'>
              <img src="https://conversionratestore.github.io/projects/knineti/img/reviews_dog1.jpg" alt="dog" />
              <div class="review__title review__title_hide">Jack Plymouth from New York, US</div>
            </div>
            <div class='review__body'>
              <div class='review__title'>Jack Plymouth from New York, US</div>
              <img src="https://conversionratestore.github.io/projects/knineti/img/new_quotes.svg" alt="quotes" />
              <div class='review__descr'>
                <p>It’s been a few weeks since I purchased the masterclass. Very happy with it so far. My yorkie used to pull on his leash everytime I used to take him out for a walk. That has now stopped completely, and he maintains constant eye contact with me during our walks. He has also become a lot more calm inside the house instead of being excitable all the time, as he used to be.</p>
              </div>
            </div>
          </li>
          <li class='review'>
            <div class='review__head'>
              <img src="https://conversionratestore.github.io/projects/knineti/img/reviews_dog2.jpg" alt="dog" />

              <div class="review__title review__title_hide">Lorraine Bernard from Ontario, CA</div>
            </div>
            <div class='review__body'>
              <div class='review__title'>Lorraine Bernard from Ontario, CA</div>
              <img src="https://conversionratestore.github.io/projects/knineti/img/new_quotes.svg" alt="quotes" />
              <div class='review__descr'>
              <p>
                I am only on my third lesson with this organization and one of their key lesson commands saved my puppy’s life this week. She managed to pull her leash out of my
                hand — a mistake of mine that will never happen again — and she took off toward a main road. Because I had been following the lessons, I shouted the command and
                she stopped, turned around and came barrelling back to me. Thank you K9 Training! You are worth every penny!
              </p>
              </div>
            </div>
          </li>
        </ul>

        <div class="contacts_wrapp">
          <ul class="new_contacts_us">
            <li>
              <p>U.S. Office</p>
              <p>
                K9 Training Institute <br />
                A division of Digitools Limited <br />
                4283 Express Lane <br />
                Sarasota, Florida 34238 <br />
                Ph: <a class="not-for-eu-visitor" href="tel:4157581461">(415) 758-1461</a>
              </p>
            </li>
            <li>
              <p>European Office</p>
              <p>
                K9 Training Institute A division of Digitools Limited <br />
                Execo Business Centre <br />
                77 Strovolos Av., Strovolos Center <br />
                4th Floor, Office 12-D5 <br />
                Strovolos 2018, Nicosia, Cyprus
              </p>
            </li>
          </ul>
        </div>
      </section>

      <div class="sticky-info">
        <div class='sticky-info__item'>Basic</div>
        <div class='sticky-info__item'>Premium</div>
      </div>
    </main>
  `;

// Insert Styles

// Init page scripts
initPage();

function initPage() {
  // Insert HTML
  document.head.insertAdjacentHTML('beforeend', stylesHtml);

  document
    .querySelector('.site-container')
    .insertAdjacentHTML('afterbegin', renederHtml);

  // ADD libs for tip
  let scriptPopper = document.createElement('script');
  // scriptPopper.src = 'https://unpkg.com/popper.js@1';
  scriptPopper.src =
    'https://unpkg.com/popper.js@1.16.1/dist/umd/popper.min.js';
  scriptPopper.async = false;
  document.body.appendChild(scriptPopper);

  let scriptTippy = document.createElement('script');
  // scriptTippy.src = 'https://unpkg.com/tippy.js@5';
  scriptTippy.src =
    'https://unpkg.com/tippy.js@5.2.1/dist/tippy-bundle.iife.min.js';
  scriptTippy.async = false;
  document.body.appendChild(scriptTippy);

  // Mobile sticky top panel for table
  initStickyPanel();

  // Tips
  let waitTipScript = setInterval(() => {
    if (typeof tippy === 'function') {
      clearInterval(waitTipScript);

      initTips();
    }
  }, 500);
}

function initStickyPanel() {
  window.addEventListener('scroll', function () {
    if (
      document.querySelector('.plans__table tbody').getBoundingClientRect()
        .top < 0 &&
      window.innerWidth <= 768 &&
      document.querySelector('.plans__table-wrap').offsetHeight +
        document.querySelector('.plans__table tbody').getBoundingClientRect()
          .top -
        260 >
        0
    ) {
      document.querySelector('.sticky-info').style.display = 'flex';
    } else {
      document.querySelector('.sticky-info').style.display = 'none';
    }
  });
}

function initTips() {
  let text = {
    notify:
      'Total Transformation Masterclass uses videos of real dogs to demonstrate how you can instill service-dog levels of calmness, obedience, and impulse control into your canine companion',
    'plan-paw':
      "<span>10-week</span> access to our <span>live weekly Q&A group calls</span> (held every Saturday 3PM Eastern Time). <br /> <br />  These calls make it easier for you to succeed with the program, especially if you’re a first-time dog owner, own a dog with special needs, or own a dog that displays high levels of disruptive behavior. <br /> <br /> With each call, you’ll receive <span>personal coaching</span> from our training experts, advice regarding your dog’s specific problems, and also learn from other customers' struggles and experiences.",
    'plan-price':
      'You may spread the payment over 3 months by choosing installments at Checkout',
    lifetime:
      'Total Transformation Masterclass uses videos of real dogs to demonstrate how you can instill service dog levels of calmness, obedience, and impulse control into your canine companion. <br/><br/><span>Plus:</span> housebreaking, separation anxiety, and biting/nipping prevention <span class="bold">BONUS classes</span>',
    weekly: 'Calls held every Saturday at 3PM Eastern Time',
    support:
      'Questions you email in are answered on a separate call, which will be made available for download',
  };

  document.querySelectorAll('.lav-tip').forEach((el) => {
    console.log(text[el.getAttribute('data-place')]);
    tippy(el, {
      content: text[el.getAttribute('data-place')],
      allowHTML: true,
      triggerTarget: el.parentElement,
      maxWidth: 335,
      placement: 'bottom',
      appendTo: function () {
        return document.querySelector('.choose_plan');
      },
    });
  });

  return false;
}
