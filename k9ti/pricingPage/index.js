// pricing page
// let startFunk = setInterval(() => {
//   if (document.querySelector('.new-price-list')) {
//     clearInterval(startFunk);

let styles = /*html */ `
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
    .notify__info-list img {
      margin-right: 12px;
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

    /* ToolTips  todo */
    .tippy-tooltip {
      background: #ffffff;
      border-radius: 8px;
      padding: 16px;
      box-shadow: 0px 2px 6px 2px rgba(0, 0, 0, 0.15);
      filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2));
      max-width: 348px !important;
      font-size: 14px;
      line-height: 150%;
      color: #808080;
    }
    .tippy-content {
      text-align: left;
      padding: 0 !important;
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
    p[data-tolltip] {
      position: relative;
    }
    img[data-title] {
      position: absolute;
      width: 100%;
      height: 100%;
      max-width: 11px;
      max-height: 11px;
      margin-left: 2px;
      cursor: pointer;
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
    .plans__table {
      width: 100%;
      border-collapse: separate;
      border-spacing: 8px 0;
    }

    .plans__table th {
      border: unset;
    }

    .plan__header {
      border: 1px solid #dfe8f0;
      border-radius: 20px;
      padding: 20px;
      transition: all 2s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    .plan__header-title {
      font-weight: 600;
      font-size: 18px;
      line-height: 25px;
      letter-spacing: -0.01em;
      text-transform: uppercase;
      color: #794e15;
      padding-bottom: 16px;
      border-bottom: 1px solid #dfe8f0;
      margin: 0;
    }

    .plan__head-price {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 16px 0 12px;
    }

    .plan__head-price_old {
      font-weight: 400;
      line-height: 88%;
      text-decoration-line: line-through;
      color: #808080;
      margin-right: 4px;
    }
    .plan__head-price_new {
      font-weight: 400;
      font-size: 24px;
      line-height: 100%;
    }
    .plan__header p {
      font-weight: 400;
      font-size: 14px;
      line-height: 150%;
      text-align: center !important;
    }
    .plan__header p span:nth-child(2) {
      color: #808080;
    }
    .btn_plan,
    .enroll_link_wrap a {
      height: 48px;
      display: flex;
      background: #ffffff;
      border: 1px solid #1d3871;
      border-radius: 10px;
      justify-content: center;
      align-items: center;
      width: 100%;
      outline: none;
      font-size: 14px;
      line-height: 19px;
      text-align: center;
      letter-spacing: -0.01em;
      text-transform: uppercase;
      font-weight: 600;
      color: #1d3871;
      margin-top: 16px;
      cursor: pointer;
      padding: 1px;
    }

    @media (max-width: 1000px) {
      .enroll_link_wrap a {
        font-size: 11px;
      }
      table tr td p {
        font-size: 13px;
      }
    }
    .best_value {
      position: relative;
      border-radius: 0 0 20px 20px;
    }
    .best_value::before {
      position: absolute;
      content: "Best value";
      font-weight: 600;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: -0.01em;
      text-transform: uppercase;
      color: #ffffff;
      background: #1d3871;
      width: 100.8%;
      left: -1px;
      top: -33px;
      height: 32px;
      border: 1px solid #1d3871;
      border-radius: 20px 20px 0 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    table svg {
      display: block;
      stroke: #808080;
      max-width: 24px;
      max-height: 24px;
      width: 100%;
      height: 100%;
      margin: 0 auto;
    }
    .minus_var {
      fill: #808080;
    }
    table tr td:not(:nth-child(1)) {
      font-weight: 600;
      font-size: 12px;
      line-height: 16px;
      text-align: center;
      letter-spacing: -0.01em;
      text-transform: uppercase;
      color: #808080;
      transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    table tr td:first-child {
      width: 27%;
    }
    tbody tr:not(:nth-child(1)) {
      position: relative;
    }

    tbody tr:not(:nth-child(1))::after {
      position: absolute;
      content: "";
      left: 0;
      bottom: 0;
      width: 100%;
      border-bottom: 1px solid #dfe8f0;
    }

    tbody tr:nth-child(5)::after {
      content: unset;
    }

    tbody td svg + span {
      display: block;
      margin: 8px auto 0;
    }

    table tbody td {
      padding: 20px 0;
    }

    table tbody tr:first-child td {
      padding: 10px 0;
    }

    .enroll_link_wrap {
      opacity: 0;
    }

    .enroll_link_wrap p {
      font-weight: 400;
      color: #1d3871;
      font-size: 16px;
      line-height: 150%;
      margin-top: 12px !important;
      text-transform: initial;
      text-align: center !important;
    }

    .active_plan {
      border: 1px solid #1d3871;
      transition: all 2s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    .plan__header.active_plan .btn_plan,
    .enroll_link_wrap a {
      background: #1d3871;
      color: #ffffff;
      transition: all 2s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    .enroll_link_wrap a {
      text-decoration: unset;
      margin-top: 20px;
    }

    .enroll_link_wrap a span {
      margin: 0 5px;
    }

    .enroll_link_wrap.active {
      opacity: 1;
    }

    table tbody tr:not(:nth-child(1)) td:nth-child(3) {
      background: #f9fcff;
      color: #1d3871;
      transition: all 2s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    table tbody tr:not(:nth-child(1)) td:nth-child(3) svg.minus_var {
      fill: #1d3871;
    }

    table tbody tr:not(:nth-child(1)) td:nth-child(3) svg:not(.minus_var) {
      stroke: #1d3871;
    }

    table tbody tr:nth-child(2) td {
      border-radius: 16px 16px 0 0;
      transition: all 2s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    table tbody tr:nth-child(5) td {
      border-radius: 0 0 16px 16px;
      transition: all 2s cubic-bezier(0.075, 0.82, 0.165, 1);
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
      color: #808080 !important;
      margin: 0 !important;
    }

    .contacts_wrapp .new_contacts_us p > a {
      color: #0037b4;
    }
    table tr td:first-child p span.mob_var {
      display: none;
    }
    .enroll_mob_wrap {
      display: none;
    }

    /* sticky_wrapp */
    main {
      position: relative;
    }
    .sticky_wrapp {
      position: fixed;
      display: none;
      top: 0;
      z-index: 999;
      background: #ffffff;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2), 0px 2px 6px 2px rgba(0, 0, 0, 0.15);
      width: 100%;
      margin: 0;
    }
    .sticky_wrapp ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0;
    }
    .sticky_wrapp ul li {
      flex: 1;
      padding: 16px;
      text-align: center;
      font-weight: 600;
      font-size: 18px;
      line-height: 25px;
      letter-spacing: -0.01em;
      text-transform: uppercase;
      color: #794e15;
    }
    .sticky_wrapp ul li.active_plan {
      background: #1d3871;
      color: #ffffff;
    }

    @media (max-width: 767px) {
      /*  header*/
      header {
        margin: 5px auto 20px;
      }

      /* inform_wrapp */
      .inform_wrapp > div {
        margin: 20px 0 0;
        gap: 20px;
        flex-direction: column;
      }
      .notify div {
        width: 100%;
      }
      .inform_wrapp h1 {
        font-size: 36px !important;
      }
      .inform_wrapp h2 {
        font-size: 24px !important;
      }
      .notify div:nth-child(2) {
        padding: 12px;
      }
      .notify div:nth-child(2) > span {
        display: none;
      }
      .notify div:nth-child(2) p {
        margin-left: 4px;
      }
      .notify div:nth-child(2) p > span {
        display: inline;
        margin: 0;
      }
      .inform_wrapp {
        margin-bottom: 58px;
      }

      /* reviews_wrapp */
      .reviews_wrapp {
        margin: 105px 0 23px;
        padding-bottom: 40px;
      }
      .reviews_wrapp {
        flex-direction: column;
        gap: 40px;
      }
      .reviews_wrapp li h3.mob_title {
        display: inline;
      }
      .reviews_wrapp li > div:nth-child(2) h3 {
        display: none;
      }
      .reviews_wrapp li h3 {
        font-size: 18px !important;
        line-height: 25px;
      }
      .reviews_wrapp li {
        flex-direction: column;
        gap: 16px;
      }
      .reviews_wrapp li > div:nth-child(1) {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 12px;
      }
      .reviews_wrapp li > div:nth-child(2) img {
        margin: 0 0 8px;
        max-width: 18px;
        max-height: 12px;
      }

      /* contacts_wrapp */
      .contacts_wrapp .new_contacts_us li,
      .contacts_wrapp .new_contacts_us li:last-child {
        padding: 0 !important;
      }
      .contacts_wrapp .new_contacts_us li:not(:last-child) {
        margin-right: 25px;
      }

      /* pricing__table */
      .pricing__table {
        border-spacing: 0;
      }
      .pricing__table tr {
        position: relative;
      }
      table tr td:first-child {
        position: absolute;
        width: 100%;
        top: -8px;
        padding: 6px 0 0;
      }
      .plan__header {
        padding: 12px;
        border-radius: 8px 0px 0px 8px;
      }
      .plan__header-title {
        padding-bottom: 4px;
        font-size: 18px !important;
      }
      .plan__head-price {
        margin: 12px 0 8px;
      }
      .plan__head-price_new {
        font-size: 20px;
        line-height: 24px;
      }
      .plan__head-price_old {
        font-size: 14px;
        line-height: 21px;
      }
      .btn_plan {
        margin-top: 12px;
        height: 32px;
        font-size: 12px;
        line-height: 16px;
        border-radius: 5px;
      }
      .best_value::before {
        font-size: 10px;
        line-height: 14px;
        height: 18px;
        border-radius: 4px 4px 0px 0px;
        top: -19px;
        width: 102%;
      }
      .best_value {
        border-radius: unset !important;
      }

      .plan__header:nth-child(4).active_plan,
      .plan__header:nth-child(4) {
        border-radius: 0 8px 8px 0px;
      }
      .enroll_link_wrap a {
        font-size: 14px;
        line-height: 19px;
      }
      .plan__header p {
        font-size: 12px;
      }
      tfoot {
        display: none;
      }

      tbody tr:not(:nth-child(1)) {
        height: 124px;
      }
      table tbody td {
        padding: 20px 0 0;
      }
      tbody tr:not(:nth-child(1))::after {
        bottom: 15px;
      }
      table tr td:first-child p {
        font-size: 16px;
        line-height: 23px;
        max-width: 330px;
      }
      table tr td:first-child p span.desk_var {
        display: none;
      }
      table tr td:first-child p span.mob_var {
        display: inline;
      }
      tbody tr:nth-child(2)::after {
        bottom: 24px;
      }
      tbody tr:nth-child(3) {
        height: 146px;
      }
      tbody tr:nth-child(4) {
        height: 148px;
      }
      table tr:nth-child(4) td:nth-child(2) {
        padding: 49px 0px 0;
      }
      table tr:nth-child(4) td:nth-child(3),
      table tr:nth-child(4) td:nth-child(4) {
        padding: 24px 0px 0;
      }
      table tbody tr:first-child td {
        padding: 15px 0;
      }
      thead tr:nth-child(1) {
        position: relative;
      }
      thead tr th:first-child {
        position: absolute;
      }
      table tbody tr td:nth-child(3) {
        background: #f9fcff;
        color: #1d3871;
        transition: all 2s cubic-bezier(0.075, 0.82, 0.165, 1);
      }
      table tbody tr:nth-child(5) td {
        border-radius: 0;
      }
      tfoot tr {
        display: flex;
      }
      .enroll_mob_wrap {
        display: block;
      }
      .enroll_mob_wrap .enroll_link_wrap {
        display: none;
        opacity: unset;
      }

      .enroll_mob_wrap .enroll_link_wrap.active {
        display: block;
      }
      .enroll_mob_wrap .enroll_link_wrap a {
        margin: 0;
      }
    }

    @media (max-width: 320px) {
      table tr td:first-child p {
        max-width: 309px;
        font-size: 13px;
      }
      .plan__header p {
        font-size: 9px;
      }
      tbody td svg + span,
      .btn_plan {
        font-size: 9px;
      }
      .plan__head-price_new {
        font-size: 14px;
      }
      .plan__head-price_old {
        font-size: 11px;
      }
      .plan__header-title {
        font-size: 16px !important;
      }
      .inform_wrapp h1 {
        font-size: 34px !important;
      }
      .inform_wrapp h2 {
        font-size: 21px !important;
      }
      .tippy-tooltip {
        font-size: 10px;
      }
      .sticky_wrapp ul li {
        font-size: 15px;
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
                  <p class="underline bold" data-tolltip="1">Total Transformation Masterclass</p>
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
                NOTE:
              </div>
              
              <div class='notify__note-descr'>
                You can claim the special offer today and delay activation until later. Simply contact us after purchase to postpone the start of your dog's training course
              </div>
            </div>
          </div>
        </div>

        <div class="">
          <table class='plans__table'>
            <thead>
              <tr>
                <th>&nbsp;</th>
                <th class="plan__header" data-count="basic">
                  <h3 class='plan__header-title'>Basic</h3>
                  <div class='plan__header-price'>
                    <span>$497</span>
                    <span>$297</span>
                  </div>
                  <p data-tolltip="2"><span>or $99/month</span> <span>for 3 months</span></p>
                  <button class="btn_plan">Select</button>
                </th>
                <th class="plan__header best_value active_plan" data-count="premium">
                  <h3>Premium</h3>
                  <div>
                    <span>$587</span>
                    <span class="bold">$387</span>
                  </div>
                  <p data-tolltip="3"><span>or $129/month</span> <span>for 3 months</span></p>
                  <button class="btn_plan">Selected</button>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <p data-tolltip="5">
                    Lifetime Access to
                    <span class="bold underline desk_var"
                      >Total <br />
                      Transformation Masterclass + 3 bonus classes</span
                    >
                    <span class="bold underline mob_var">Total Transformation Masterclass + 3 bonus classes</span>
                  </p>
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
                  <p data-tolltip="6">
                    <span class="bold underline desk_var">Live Weekly Q&A Group Calls <br /></span>
                    <span class="bold underline mob_var">Live Weekly Q&A Group Calls </span> with personal coaching
                  </p>
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
                  <p>Ability to <span class="bold">email us questions</span> which will be answered in a separate downloadable weekly call</p>
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
                  <p class="bold">Recordings of Weekly Q&A Calls</p>
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

            <tfoot>
              <tr>
                <th>&nbsp;</th>
                <td class="enroll_link_wrap">
                  <a href="#">Enroll — <span>Basic</span> Version</a>
                  <p><span class="bold">Discount</span> expires on <span>Jul 26, 2022</span></p>
                </td>
                <td class="enroll_link_wrap active">
                  <a href="#">Enroll — <span>Premium</span> Version</a>
                  <p><span class="bold">Discount</span> expires on <span>Jul 26, 2022</span></p>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        <ul class="reviews_wrapp">
          <li class='review'>
            <div class='review__head'>
              <img src="https://conversionratestore.github.io/projects/knineti/img/reviews_dog1.jpg" alt="dog" />
              <h3 class="review__title review__title_hide">Jack Plymouth from New York, US</h3>
            </div>
            <div class='review__body'>
              <h3 class='review__title'>Jack Plymouth from New York, US</h3>
              <img src="https://conversionratestore.github.io/projects/knineti/img/new_quotes.svg" alt="quotes" />
              <div class='review__descr'>
                <p>It’s been a few weeks since I purchased the masterclass. Very happy with it so far. My yorkie used to pull on his leash everytime I used to take him out for a walk. That has now stopped completely, and he maintains constant eye contact with me during our walks. He has also become a lot more calm inside the house instead of being excitable all the time, as he used to be.</p>
              </div>
            </div>
          </li>
          <li class='review'>
            <div class='review__head'>
              <img src="https://conversionratestore.github.io/projects/knineti/img/reviews_dog2.jpg" alt="dog" />

              <h3 class="review__title review__title_hide">Lorraine Bernard from Ontario, CA</h3>
            </div>
            <div class='review__body'>
              <h3 class='review__title'>Lorraine Bernard from Ontario, CA</h3>
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

      <div class="sticky_wrapp">
        <div class="custom-container">
          <ul>
            <li data-count="basic">Basic</li>
            <li data-count="premium" class="active_plan">Premium</li>
            <li data-count="deluxe">Deluxe</li>
          </ul>
        </div>
      </div>
    </main>
  `;

// Insert Styles
document.head.insertAdjacentHTML('beforeend', styles);

// Insert HTML
document
  .querySelector('.site-container')
  .insertAdjacentHTML('afterbegin', renederHtml);

// ADD libs for tip
let scriptPopper = document.createElement('script');
scriptPopper.src = 'https://unpkg.com/popper.js@1';
scriptPopper.async = false;
document.body.appendChild(scriptPopper);

let scriptTippy = document.createElement('script');
scriptTippy.src = 'https://unpkg.com/tippy.js@5';
scriptTippy.async = false;
document.body.appendChild(scriptTippy);

// Tooltip
let arrTooltipTable = {
  1: [
    `The Total Transformation Masterclass uses videos of real dogs to demonstrate how you can instil service-dog levels of calmness, obedience, and impulse control into your canine companion`,
  ],
  2: [
    `You may spread the payment over 3 months by choosing instalments at Checkout`,
  ],
  3: [
    `You may spread the payment over 3 months by choosing instalments at Checkout`,
  ],
  4: [
    `You may spread the payment over 3 months by choosing instalments at Checkout`,
  ],
  5: [
    `The Total Transformation Masterclass uses videos of real dogs to demonstrate how you can instil service dog levels of calmness, obedience, and impulse control into your canine companion. <br/> <span> Plus:</span> Housebreaking, Separation Anxiety, and Biting/Nipping Prevention <span>BONUS classes</span>`,
  ],
  6: [`Calls held every Saturday at 3PM EST`],
};

// setTooltipBarTable
function setTooltipBarTable(event, tooltip) {
  return `<img data-id="${event}" data-title="${tooltip}" src="https://conversionratestore.github.io/projects/knineti/img/new_alert_circle.svg" alt="tooltip icon">`;
}

if (document.querySelector('.choose_plan')) {
  document.querySelectorAll('p[data-tolltip]').forEach((el) => {
    let atr = el.getAttribute('data-tolltip');
    let product;

    if (atr === '1') {
      product = '1';
    } else if (atr === '2') {
      product = 2;
    } else if (atr === '3') {
      product = 3;
    } else if (atr === '4') {
      product = 4;
    } else if (atr === '5') {
      product = 5;
    } else if (atr === '6') {
      product = 6;
    }

    let arrTooltipTableVar = arrTooltipTable[product];

    for (let key in arrTooltipTableVar) {
      el.insertAdjacentHTML(
        'beforeend',
        setTooltipBarTable(product, arrTooltipTableVar[key])
      );
    }
  });
}

let tippyRun = setInterval(() => {
  if (
    typeof tippy === 'function' &&
    document.querySelector('p[data-tolltip]')
  ) {
    clearInterval(tippyRun);

    document.querySelectorAll('img[data-title]').forEach((el) => {
      tippy(el, {
        content: el.getAttribute('data-title'),
        // trigger: "click",
        appendTo: function () {
          return document.querySelector('.choose_plan');
        },
      });
    });
  }
}, 500);

// plan pricing Switch
const planSwitch = (slideMenu) => (e) => {
  slideMenu.forEach((links) => {
    if (links === e.currentTarget) {
      e.currentTarget.closest('th').classList.add('active_plan');

      let s = e.currentTarget.closest('th').getAttribute('data-count');
      if (window.innerWidth > 768) {
        if (s === 'premium') {
          document
            .querySelectorAll(
              'table tbody tr:not(:nth-child(1)) td:nth-child(2)'
            )
            .forEach((el) => {
              el.style.background = '#FFFFFF';
              el.style.color = '#808080';
              el.querySelector('svg').style.stroke = '#808080';
              if (el.querySelector('svg').classList.contains('minus_var')) {
                el.querySelector('svg').style.fill = '#808080';
              }
            });
          document
            .querySelectorAll(
              'table tbody tr:not(:nth-child(1)) td:nth-child(3)'
            )
            .forEach((el) => {
              el.style.background = '#f9fcff';
              el.style.color = '#1D3871';
              el.querySelector('svg').style.stroke = '#1D3871';
            });
          document
            .querySelectorAll(
              'table tbody tr:not(:nth-child(1)) td:nth-child(4)'
            )
            .forEach((el) => {
              el.style.background = '#FFFFFF';
              el.style.color = '#808080';
              el.querySelector('svg').style.stroke = '#808080';
            });
          document
            .querySelectorAll('.enroll_link_wrap:nth-child(3)')
            .forEach((el) => {
              el.style.opacity = '1';
            });
          document
            .querySelectorAll('.enroll_link_wrap:nth-child(2)')
            .forEach((el) => {
              el.style.opacity = '0';
            });
          document
            .querySelectorAll('.enroll_link_wrap:nth-child(4)')
            .forEach((el) => {
              el.style.opacity = '0';
            });
        }

        if (s === 'basic') {
          document
            .querySelectorAll(
              'table tbody tr:not(:nth-child(1))  td:nth-child(2)'
            )
            .forEach((el) => {
              el.style.background = '#f9fcff';
              el.style.color = '#1D3871';
              el.querySelector('svg').style.stroke = '#1D3871';
              if (el.querySelector('svg').classList.contains('minus_var')) {
                el.querySelector('svg').style.fill = '#1D3871';
              }
            });
          document
            .querySelectorAll(
              'table tbody tr:not(:nth-child(1)) td:nth-child(3)'
            )
            .forEach((el) => {
              el.style.background = '#FFFFFF';
              el.style.color = '#808080';
              el.querySelector('svg').style.stroke = '#808080';
            });
          document
            .querySelectorAll(
              'table tbody tr:not(:nth-child(1)) td:nth-child(4)'
            )
            .forEach((el) => {
              el.style.background = '#FFFFFF';
              el.style.color = '#808080';
              el.querySelector('svg').style.stroke = '#808080';
            });
          document
            .querySelectorAll('.enroll_link_wrap:nth-child(2)')
            .forEach((el) => {
              el.style.opacity = '1';
            });
          document
            .querySelectorAll('.enroll_link_wrap:nth-child(3)')
            .forEach((el) => {
              el.style.opacity = '0';
            });
          document
            .querySelectorAll('.enroll_link_wrap:nth-child(4)')
            .forEach((el) => {
              el.style.opacity = '0';
            });
        }
        if (s === 'deluxe') {
          document
            .querySelectorAll(
              'table tbody tr:not(:nth-child(1)) td:nth-child(4)'
            )
            .forEach((el) => {
              el.style.background = '#f9fcff';
              el.style.color = '#1D3871';
              el.querySelector('svg').style.stroke = '#1D3871';
            });
          document
            .querySelectorAll(
              'table tbody tr:not(:nth-child(1)) td:nth-child(2)'
            )
            .forEach((el) => {
              el.style.background = '#FFFFFF';
              el.style.color = '#808080';
              el.querySelector('svg').style.stroke = '#808080';
              if (el.querySelector('svg').classList.contains('minus_var')) {
                el.querySelector('svg').style.fill = '#808080';
              }
            });
          document
            .querySelectorAll(
              'table tbody tr:not(:nth-child(1)) td:nth-child(3)'
            )
            .forEach((el) => {
              el.style.background = '#FFFFFF';
              el.style.color = '#808080';
              el.querySelector('svg').style.stroke = '#808080';
            });
          document
            .querySelectorAll('.enroll_link_wrap:nth-child(4)')
            .forEach((el) => {
              el.style.opacity = '1';
            });
          document
            .querySelectorAll('.enroll_link_wrap:nth-child(3)')
            .forEach((el) => {
              el.style.opacity = '0';
            });
          document
            .querySelectorAll('.enroll_link_wrap:nth-child(2)')
            .forEach((el) => {
              el.style.opacity = '0';
            });
        }
      }

      if (window.innerWidth <= 768) {
        if (s === 'premium') {
          document
            .querySelectorAll('table tbody tr td:nth-child(2)')
            .forEach((el) => {
              el.style.background = '#FFFFFF';
              el.style.color = '#808080';
              if (el.querySelector('svg')) {
                el.querySelector('svg').style.stroke = '#808080';
                if (el.querySelector('svg').classList.contains('minus_var')) {
                  el.querySelector('svg').style.fill = '#808080';
                }
              }
            });
          document
            .querySelectorAll('table tbody tr td:nth-child(3)')
            .forEach((el) => {
              el.style.background = '#f9fcff';
              el.style.color = '#1D3871';
              if (el.querySelector('svg')) {
                el.querySelector('svg').style.stroke = '#1D3871';
              }
            });
          document
            .querySelectorAll('table tbody tr td:nth-child(4)')
            .forEach((el) => {
              el.style.background = '#FFFFFF';
              el.style.color = '#808080';
              if (el.querySelector('svg')) {
                el.querySelector('svg').style.stroke = '#808080';
              }
            });
          document
            .querySelectorAll('.enroll_mob_wrap .enroll_link_wrap')
            .forEach((el) => {
              if (el.querySelector('span').textContent === 'Premium') {
                el.style.display = 'block';
              } else {
                el.style.display = 'none';
              }
            });
        }

        if (s === 'basic') {
          document
            .querySelectorAll('table tbody tr td:nth-child(2)')
            .forEach((el) => {
              el.style.background = '#f9fcff';
              el.style.color = '#1D3871';
              if (el.querySelector('svg')) {
                el.querySelector('svg').style.stroke = '#1D3871';
                if (el.querySelector('svg').classList.contains('minus_var')) {
                  el.querySelector('svg').style.fill = '#1D3871';
                }
              }
            });
          document
            .querySelectorAll('table tbody tr td:nth-child(3)')
            .forEach((el) => {
              el.style.background = '#FFFFFF';
              el.style.color = '#808080';
              if (el.querySelector('svg')) {
                el.querySelector('svg').style.stroke = '#808080';
              }
            });
          document
            .querySelectorAll('table tbody tr td:nth-child(4)')
            .forEach((el) => {
              el.style.background = '#FFFFFF';
              el.style.color = '#808080';
              if (el.querySelector('svg')) {
                el.querySelector('svg').style.stroke = '#808080';
              }
            });
          document
            .querySelectorAll('.enroll_mob_wrap .enroll_link_wrap')
            .forEach((el) => {
              if (el.querySelector('span').textContent === 'Basic') {
                el.style.display = 'block';
              } else {
                el.style.display = 'none';
              }
            });
        }
        if (s === 'deluxe') {
          document
            .querySelectorAll('table tbody tr td:nth-child(4)')
            .forEach((el) => {
              el.style.background = '#f9fcff';
              el.style.color = '#1D3871';
              if (el.querySelector('svg')) {
                el.querySelector('svg').style.stroke = '#1D3871';
              }
            });
          document
            .querySelectorAll('table tbody tr td:nth-child(2)')
            .forEach((el) => {
              el.style.background = '#FFFFFF';
              el.style.color = '#808080';
              if (el.querySelector('svg')) {
                el.querySelector('svg').style.stroke = '#808080';
                if (el.querySelector('svg').classList.contains('minus_var')) {
                  el.querySelector('svg').style.fill = '#808080';
                }
              }
            });
          document
            .querySelectorAll('table tbody tr td:nth-child(3)')
            .forEach((el) => {
              el.style.background = '#FFFFFF';
              el.style.color = '#808080';
              if (el.querySelector('svg')) {
                el.querySelector('svg').style.stroke = '#808080';
              }
            });
          document
            .querySelectorAll('.enroll_mob_wrap .enroll_link_wrap')
            .forEach((el) => {
              if (el.querySelector('span').textContent === 'Deluxe') {
                el.style.display = 'block';
              } else {
                el.style.display = 'none';
              }
            });
        }
      }
    } else {
      links.closest('th').classList.remove('active_plan');
    }
  });
};

const slideMenu = document.querySelectorAll('.btn_plan');

slideMenu.forEach((links) => {
  links.addEventListener('click', planSwitch(slideMenu));
});

// click on btn sticky
if (window.innerWidth <= 768) {
  const planStickySwitch = (slideMenu) => (e) => {
    slideMenu.forEach((links) => {
      e.preventDefault();

      if (links === e.currentTarget) {
        e.currentTarget.classList.add('active_plan');
      } else {
        links.classList.remove('active_plan');
      }

      let attr = e.target.getAttribute('data-count');
      if (attr === 'basic') {
        document.querySelectorAll('.plan__header .btn_plan')[0].click();
      }
      if (attr === 'premium') {
        document.querySelectorAll('.plan__header .btn_plan')[1].click();
      }
      if (attr === 'deluxe') {
        document.querySelectorAll('.plan__header .btn_plan')[2].click();
      }
    });
  };

  const stickyMenu = document.querySelectorAll('.sticky_wrapp ul li');

  stickyMenu.forEach((links) => {
    links.addEventListener('click', planStickySwitch(stickyMenu));
  });

  // sticky btn
  const element = document.querySelector('tbody');

  function visible(target) {
    if (target.getBoundingClientRect().top < 0) {
      document.querySelector('.sticky_wrapp').style.display = 'block';
    } else {
      document.querySelector('.sticky_wrapp').style.display = 'none';
    }
  }

  window.addEventListener('scroll', function () {
    visible(element);
  });

  visible(element);
}
//   }
// }, 10);
