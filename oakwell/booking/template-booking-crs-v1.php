<?php
  /**
   * Template name: Booking CRS
   */

  get_header();

  $acuityscheduling_obj = new App\Classes\AcuityschedulingHandler();
  $appointment_types = $acuityscheduling_obj->get_appointments();
  $categories = $acuityscheduling_obj->get_categories();
  $addons = $acuityscheduling_obj->get_addons();

  $title = get_field('title_booking');
  $desc = get_field('desc_booking');

  $faqs_l = get_field('faq_left');
  $faqs_r = get_field('faq_right');
?>

<style>
  /* Refactoring existing elements */
  .b-booking-def-head {
    padding: 17px 0;
  }
  .b-booking-def-head .box .secure span {
    font-size: 12px;
    line-height: 1.1;
  }
  .b-booking-def-head .box .secure svg {
    height: 2.5rem;
  }
  .b-booking-def-head .box .secure span {
    margin-top: 0.25rem;
  }
  @media(min-width: 992px) {
    .b-booking-def-cont {
      padding-bottom: 300px;
    }
    .b-booking-def-head {
      padding: 26px 0 16px;
    }
    .b-booking-def-head .box h1 {
      font-size: 36px;
    }
    .b-booking-def-head .box .booking-logo svg {
      height: 68px;
    }
  }
  
  /* Remove default header and footer */
  header,
  footer {
    display: none;
  }

  /* Utils class */
  .ff-lato {
    font-family: 'Lato',Helvetica,sans-serif;
  }
  .ff-dm-sans {
    font-family: "DM Sans",sans-serif;
  }
  .booking-title {
    color: #0C5947;
    font-family: 'Lato',Helvetica,sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 1.12px;
    text-transform: uppercase;
  }
  .booking-list {
    display: grid;
    gap: 6px;
  }
  .booking-list__item {
    position: relative;
    padding-left: 20px;
    color: #5F6959;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
  }
  .booking-list__item:before {
    content: '';
    position: absolute;
    left: 8px;
    top: 8px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #024F3D;
  }
  .booking-btn {
    width: 100%;
    height: 52px;
  }
  @media(min-width: 992px) {
    .booking-list {
      gap: 8px;
    }
    .booking-list__item {
      font-size: 16px;
      line-height: 140%;
    }
    .booking-list__item:before {
      top: 9px;
    }
  }

  .book-form {
    display: grid;
    gap: 16px;
  }
  .book-form__row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  .book-form__group {
    position: relative;
  }
  .book-form__group label {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    color: #5F6959;
    font-size: 16px;
    line-height: 140%;
    transition: 0.3s;
    pointer-events: none;
  }
  .book-form__group label span {
    color: #E12F2F;
  }
  .book-form__group input {
    border: none;
    outline: none;
    border-bottom: 1px solid #0C5947;
    height: 42px;
    width: 100%;
    padding: 17px 5px 6px 0;
    font-weight: 500;
    font-size: 14px;
  }
  .book-focus label {
    font-size: 12px;
    top: 7px;
  }


  /* Utils */
  .tooltip {
    position: relative;
  }
  .tooltip-trigger {
    text-decoration: underline;
    cursor: help;
  }
  .tooltip-body {
    position: absolute;
    right: 0;
    bottom: 100%;
    transform: translateY(-12px);
    display: block;
    border-radius: 16px;
    background: #FFF;
    padding: 8px;
    width: 265px;
    color: #5F6959;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px; 
    background-color: #F0F0F0;
    border: 1px solid #B9D1B1;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.16);
    transition: 0.3s;
    opacity: 0;
    pointer-events: none;
  }
  .tooltip-trigger:hover + .tooltip-body {
    opacity: 1;
    pointer-events: auto;
  }
  .tooltip-body i {
    position: absolute;
    top: 100%;
    right: 30px;
    /* margin-left: -12px; */
    width: 24px;
    height: 12px;
    overflow: hidden;
  }
  .tooltip-body i::after {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    left: 50%;
    transform: translate(-50%,-50%) rotate(45deg);
    background-color:  #F0F0F0;
    border: 1px solid #B9D1B1;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.16);
  }

  .note {
    padding: 24px;
    border-radius: 32px;
    background: var(--Light-Green, #DDF2D0);
  }
  .note-title {
    display: flex;
    gap: 12px;
    align-items: center;
  }
  .note-descr {
    margin-top: 8px;
    color: #000;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
  }
  .note-descr a {
    white-space: nowrap;
  }
  .note-descr_marked {
    font-weight: 500;
  }

  /* Progress */
  .progress {
    position: relative;
    display: flex;
    gap: 15px;
    text-align: center;
    justify-content: space-between;
  }
  .progress-line {
    position: absolute;
    left: 47px;
    right: 47px;
    top: 15px;
    height: 1px;
    background: rgba(185, 209, 177, 0.50);
  }
  .progress-line span {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    background: #0C5947;
    border-radius: 2px;
    transition: 0.3s;
  }
  .progress-step {
    position: relative;
    z-index: 1;
    max-width: 94px;
    width: 100%;
  }
  .progress-step__num-wrapper {
    padding: 0 4px;
    background-color: #FBF6F1;
    display: inline-flex;
    height: 30px;
    align-items: center;
  }
  .progress-step__num {
    border: 1px solid transparent;
    transition: 0.3s;
    border-radius: 50%;
  }
  .active .progress-step__num {
    background-color: #DDF2D0;
    border-color: #0C5947;
    padding: 2px;
  }
  .progress-step__num span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    color: #0C5947;
    font-size: 14px;
    line-height: 1;
    background-color: #FBF6F1;
    transition: 0.3s;
    border: 1px solid #0C5947;
  }
  .active .progress-step__num span {
    background-color: #0C5947;
    color: #DDF2D0;
  }
  .pass .progress-step__num span {
    font-size: 0;
    background: #0C5947 url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOSIgdmlld0JveD0iMCAwIDEyIDkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wLjk5NjA5NCA1LjA5NTExTDQuNDI0NjcgOC4yOTUxTDExLjAwMzkgMS4yOTQ4NiIgc3Ryb2tlPSIjRERGMkQwIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc+Cg==') center no-repeat;
  }
  .progress-step__caption {
    color: #0C5947;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    margin-top: 4px;
  }
  @media (min-width: 992px) {
    .progress-line {
      height: 2px;
      top: 18px;
    }
    .progress-step__caption {
      font-size: 16px;
      line-height: 140%;
    }
    .progress-step__num-wrapper {
      padding: 0 8px;
      height: 38px;
    }
    .progress-step__num span {
      width: 32px;
      height: 32px;
      font-size: 18px;
    }
  }

  /* Logs */
  .logs {
    display: grid;
    gap: 12px;
    margin-top: 16px;
  }
  .logs:not(.active) {
    display: none;
  }
  .logs-step {
    position: relative;
    padding: 14px 24px 14px 46px;
    border-radius: 32px;
    border: 1px solid rgba(185, 209, 177, 0.50);
    background: #fff;
  }
  .logs-step__icon {
    position: absolute;
  }
  .logs-step__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
  }
  .logs-step__title {
    position: relative;
  }
  .logs-step__title-icon {
    position: absolute;
    top: 50%;
    left: -8px;
    transform: translate(-100%, -50%);
  }
  .logs-step__title-value {
    color: #024F3D;
    font-size: 12px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0.84px;
    text-transform: uppercase;
  }
  .logs-step__action {
    color: #0C5947;
    font-size: 12px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0.84px;
    border-bottom: 1px solid #0C5947;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.2s;
  }
  @media(hover: hover) {
    .logs-step__action:hover {
      opacity: .85;
      border-color: transparent
    }
  }
  .logs-step__value {
    color: #5F6959;
    font-size: 14px;
    font-weight: 500;
    line-height: 22px; 
    margin-top: 6px;
  }
  @media(min-width: 992px) {
    .logs {
      margin-top: 24px;
    }
    .logs-step {
      padding-top: 18px;
      padding-bottom: 18px;
    }
    .logs-step__title-value, .logs-step__action {
      font-size: 14px;
      line-height: 140%;
      letter-spacing: 0.98px;
    }
    .logs-step__title-icon {
      width: 18px;
      height: 18px;
    }
    .logs-step__value {
      font-size: 16px;
    }
  }

  /**
   * Steps -- Start --
  */

  /* TODO remove */
  .modalsWrap {
    display: none;
  }

  .steps {
    display: grid;
    gap: 24px;
    margin-top: 24px;
  }
  .step:not(.active) {
    display: none;
  }
  .steps-container {
    max-width: 1120px;
  }
  @media(min-width: 992px) {
    .steps-container {
      max-width: 1120px;
    }
  }

  /* Sticky */
  .steps-sticky {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 20;
    padding: 8px;
    border-radius: 32px 32px 0px 0px;
    background: #FFF;
    box-shadow: 0px -4px 4px 0px rgba(0, 0, 0, 0.08);
    transform: translateY(100%);
    transition: 0.4s;
  }
  .steps-sticky.active {
    transform: translateY(0%);
  }
  @media(min-width: 992px) {
    .steps-sticky {
      display: none;
    }
  }

  /* Services */
  .services-list {
    display: grid;
    gap: 16px;
    margin-top: 16px;
  }
  .service {
    position: relative;
    overflow: hidden;
    border-radius: 32px;
    border: 1px solid #B9D1B1;
    background: #fff;
  }
  .service-head {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    color: #0C5947;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    border-bottom: 1px solid rgba(185, 209, 177, 0.50);
    background: #DDF2D0;
    padding: 4px 16px;
  }
  .service-head__icons {
    display: flex;
  }
  .service-body {
    padding: 14px 16px;
  }
  .service-title {
    color: #000;
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
  }
  .service-options {
    margin-top: 8px;
  }
  .service-footer {
    padding: 14px 16px 16px;
    text-align: center;
    border-top: 1px solid #DDF2D0;
  }
  .service-price {
    color: #000;
    font-size: 13px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.91px;
    text-transform: uppercase;
  }
  .service-price span {
    color: #0C5947;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 1.12px;
  }
  .service-btn {
    margin-top: 12px;
  }
  @media(min-width: 992px) {
    .service {
      display: flex;
      flex-flow: column;
    }
    .services-list {
      grid-template-columns: repeat(3, 1fr);
    }
    .service-head {
      font-size: 16px;
      padding-top: 6px;
      padding-bottom: 6px;
    }
    .service-title {
      font-size: 22px;
      line-height: 140%;
    }
    .service-options {
      margin-top: 12px;
    }
    .service-body {
      flex-grow: 1;
      padding: 16px;
    }
    .service-footer {
      margin-top: auto;
      padding: 16px;
    }
  }

  /* Packages */
  .packages {}
  .packages-list {
    display: grid;
    gap: 16px;
    margin-top: 16px;
  }
  .package {
    position: relative;
    border-radius: 32px;
    border: 1px solid #B9D1B1;
    background: #fff;
  }
  .package-body {
    padding: 16px 16px 14px;
    display: grid;
    gap: 14px;
  }
  .package-image {
    line-height: 0;
    border-radius: 24px;
    overflow: hidden;
    height: 200px;
    background: #DDF2D0;
  }
  .package-image img {
    min-width: 100%;
    min-height: 100%;
    object-fit: contain;
  }
  .package-title {
    color: #000;
    font-size: 22px;
    font-weight: 500;
    line-height: 28px;
  }
  .package-price {
    line-height: 24px;
    text-transform: uppercase;
    font-weight: 700;
  }
  .package-btn {
    margin-top: 12px;
  }
  .package-price__value {
    color: #0C5947;
    font-size: 18px;
    letter-spacing: 1.26px;
  }
  .package-price__caption {
    color: rgba(12, 89, 71, 0.60);
    font-size: 14px;
    letter-spacing: 0.98px;
  }
  .package-footer {
    padding: 14px 12px 16px;
    border-top: 1px solid rgba(185, 209, 177, 0.50);
  }
  @media(min-width: 992px) {
    .package {
      display: flex;
      flex-flow: column;
    }
    .packages-list {
      grid-template-columns: repeat(3, 1fr);
    }
    .package-title {
      line-height: 140%;
    }
    .package-footer {
      padding: 12px 12px 16px;
      margin-top: auto;
    }
    .package-price {
      padding: 0 4px;
    }
  }

  /* Addons */
  .addons-note {
    margin-top: 16px;
  }
  .addons-btn {
    margin-top: 24px;
  }
  .addons-list {
    display: grid;
    gap: 16px;
    margin-top: 16px;
  }
  .addon {
    padding: 16px;
    display: flex;
    gap: 12px;
    border-radius: 32px;
    border: 1px solid #B9D1B1;
    background: #fff;
    cursor: pointer;
    transition: 0.3s;
  }
  .addon.active {
    background:  #DDF2D0;
  }
  @media(hover: hover) {
    .addon:not(.active):hover {
      background-color: rgba(221, 242, 208, 0.25);
    }
    .addon:hover {
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);
    }
  }
  .addon-image {
    flex-shrink: 0;
    line-height: 0;
    border-radius: 24px;
    overflow: hidden;
    height: 90px;
    width: 90px;
    background: #DDF2D0;
  }
  .addon-image img {
    min-width: 100%;
    min-height: 100%;
    object-fit: contain;
  }
  .addon-head {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;
  }
  .addon-title {
    color: #000;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  }
  .addon-checkbox {
    line-height: 0;
  }
  .addon-checkbox_active {
    display: none;
  }
  .addon.active .addon-checkbox_active {
    display: block;
  }
  .addon.active .addon-checkbox_inactive {
    display: none;
  }
  .addon-descr {
    margin-top: 8px;
    color: #5F6959;
    font-size: 16px;
    line-height: 140%;
  }
  .addon-price {
    margin-top: 12px;
    font-weight: 700;
    line-height: 120%;
    text-transform: uppercase;
  }
  .addon-price__value {
    color: #0C5947;
    font-size: 14px;
    letter-spacing: 0.98px;
  }
  .addon-price__caption {
    color: rgba(12, 89, 71, 0.60);
    font-size: 12px;
    letter-spacing: 0.84px;
  }
  @media(min-width: 992px) {
    .addons-list {
      grid-template-columns: repeat(2, 1fr);
      gap: 24px;
      margin-top: 24px;
    }
    .addon-title {
      font-size: 22px;
      line-height: 140%;
    }
    .addon-price__value {
      font-size: 16px;
    }
    .addons-note {
      margin-top: 24px;
    }
    .addons-btn {
      max-width: 310px;
    }
  }

  /* Date picker */
  .plate {
    border-radius: 32px;
    border: 1px solid #B9D1B1;
    background: #fff;
    box-shadow: 0px 3px 0px 0px #0C5947 inset;
  }
  
  .picker {}
  .picker-plate {
    padding: 12px;
  }
  .picker-calendar .air-datepicker.-inline- {

  }
  .picker-calendar .air-datepicker-nav {
    height: 64px;
    min-height: auto;
    padding: 12px 0 16px 16px;
    border-color: rgba(185, 209, 177, 0.50);
  }
  .picker-calendar .air-datepicker-nav--title {
    color: #000;
    font-size: 22px;
    font-weight: 400;
    line-height: 28px;
  }
  .picker-calendar .air-datepicker--content {
    padding: 12px 0 0;
  }
  .picker-calendar .air-datepicker-cell {
    transition: 0.3s;
  }
  .picker-calendar .air-datepicker-cell.-current- {
    background-color: #FBF6F1;
    color: #0C5947;
  }
  .picker-calendar .air-datepicker-cell.-selected- {
    color: #DDF2D0;
    background-color: #0C5947;
  }
  .picker-calendar .air-datepicker-body--cells.-days-, .picker-calendar .air-datepicker-body--day-names {
    grid-template-columns: repeat(7, auto);
  }
  .picker-calendar .air-datepicker-cell.-disabled- {
    color: rgba(0,0,0,.4)!important;
  }
  @media(min-width: 640px) {
    .picker-calendar .air-datepicker {
      background: #fff;
      padding: 0;
      border-radius: 0;
    }
  }
  @media(max-width: 992px) {
    .picker-calendar .air-datepicker-cell.-focus-:not(.-selected-) {
      background: #fff;
      color: inherit;
    }
  }
  .picker-calendar__caption {
    margin-top: 12px;
    color: #024F3D;
    font-size: 12px;
    font-weight: 700;
    line-height: 16px; 
    letter-spacing: 0.84px;
    text-transform: uppercase;
  }
  .picker-times {
    display: flex;
    justify-content: space-between;
    flex-flow: column;
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid rgba(185, 209, 177, 0.50);
  }
  .picker-plate:not(.active) .picker-times, .picker-plate:not(.active) .picker-calendar__caption {
    display: none;
  }
  .picker-plate.active + .picker-btn_placeholder {
    display: none;
  }
  .picker-times__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    margin-top: 16px;
    text-align: center;
  }
  .picker-times__item {
    color: #000;
    font-size: 16px;
    font-weight: 500;
    line-height: 120%; 
    padding: 10px;
    cursor: pointer;
    border-radius: 50px;
    transition: 0.3s;
  }
  @media(hover: hover) {
    .picker-times__item:not(.active):hover {
      background-color: #DDF2D0;
    }
  }
  .picker-times__item.active {
    background: #0C5947;
    color: #DDF2D0;
  }
  .picker-times__btn {
    margin-top: 16px;
  }
  .picker-times__caption {
    color: #5F6959;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px; 
    margin-top: 4px;
  }
  .picker-btn {
    margin-top: 24px;
  }
  .picker-btn_disable {
    background: #74A187!important;
    pointer-events: none;
  }
  .picker-note {
    margin-top: 32px;
  }
  .picker-note_inner {
    display: none;
  }
  .picker-row {
    margin-top: 16px;
  }
  .picker-plate:not(.active) .temp-toggler {
    display: none;
  }
  @media(min-width: 992px) {
    .picker-row {
      display: grid;
      align-items: flex-start;
      grid-template-columns: 2fr 1fr;
      gap: 24px;
    }
    .picker-btn {
      display: none;
    }
    .picker-note {
      margin-top: 0;
    }
    .picker-times__caption {
      margin-top: 4px;
    }
    .picker-times__list {
      margin-top: 8px;
      gap: 4px 8px;
    }
    .picker-plate {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    .picker-plate:not(.active) .picker-times {
      display: block;
    }
    .picker-plate:not(.active) .picker-times__choose {
      display: none;
    }
    .picker-times {
      margin-top: 76px;
      border-left: 1px solid rgba(185, 209, 177, 0.50);
      padding-left: 12px;
      margin-left: 12px;
      padding-top: 0;
      border-top: 0;
    }
    .picker-calendar .air-datepicker-nav {
      margin-right: -100%;
    }
    .air-datepicker-body--cells.-days- {
      grid-auto-rows: 36px;
    }
    .picker-calendar__caption {
      text-align: center;
      font-size: 14px;
      line-height: 140%;
      letter-spacing: 0.98px;
    }
    .picker-calendar .air-datepicker-cell {
      font-size: 16px;
    }
    .picker-calendar .air-datepicker-body--day-names {
      margin-bottom: 26px;
    }
    .picker-calendar .air-datepicker-body--cells.-days-, .picker-calendar .air-datepicker-body--day-names {
      grid-template-columns: repeat(7, 36px);
      gap: 8px;
      justify-content: space-between;
    }
    .picker-plate:not(.active) ~ .picker-note {
      display: none;
    }
    .picker-note_inner {
      display: block;
    }
    .picker-plate.active .picker-note_inner {
      display: none;
    }
    .picker-times__btn {
      display: flex!important;
    }
  }

  /* Summary */
  .summary {}
  .summary-plate {
    margin-top: 16px;
  }
  .summary-head {
    padding: 24px 24px 16px;
  }
  .summary-head__title {
    color: #000;
    font-size: 26px;
    font-weight: 400;
    line-height: 36px;
  }
  .summary-meta {
    display: grid;
    gap: 12px;
    color: #000;  
    font-size: 16px;
    font-weight: 700;
    line-height: 120%;
    letter-spacing: 1.12px;
    text-transform: uppercase;
    margin-top: 16px;
  }
  .summary-meta__value {
    color: #024F3D;
  }
  .summary-body {
    padding: 16px 24px;
    border-top: 1px dashed #B9D1B1;
    border-bottom: 1px dashed #B9D1B1;
  }
  .summary-brief {
    display: grid;
    gap: 12px;
    color: #000;
    font-size: 16px;
    line-height: 120%; 
  }
  .summary-brief__item {
    display: flex;
    gap: 12px;
  }
  .summary-includes {
    margin-top: 16px;
  }
  .summary-includes__list {
    margin-top: 8px;
    color: #5F6959;
    font-size: 16px;
    font-weight: 400;
    line-height: 160%;
  }
  .summary-includes__list span {
    color: #024F3D;
    padding-right: 5px;
  }
  .summary-form {
    padding: 16px 24px;
  }
  .summary-form__inner {
    margin-top: 12px;
  }
  .summary-btn {
    margin-top: 24px;
  }
  .summary-checkbox {
    position: relative;
    display: flex;
    gap: 12px;
    color: #5F6959;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    margin-top: 16px;
    cursor: pointer;
    user-select: none;
  }
  .summary-checkbox__icon {
    position: relative;
    display: flex;
    flex-shrink: 0;
    width: 24px;
    height: 24px;
  }
  .summary-checkbox__icon svg {
    pointer-events: none;
    transition: 0.2s;
  }
  .summary-checkbox:not(.active) svg {
    opacity: 0;
  }
  .summary-checkbox__icon:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    border-radius: 7px;
    transition: 0.3s;
    border: 1px solid #000;
    transition: 0.2s;
  }
  .summary-checkbox.active .summary-checkbox__icon:before {
    opacity: 0;
  }
  @media(min-width: 992px) {
    .summary-plate {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: min-content 1fr;
      padding-top: 3px;
    }
    .summary-head {
      grid-area: 1 / 1 / 2 / 2;
    }
    .summary-body {
      grid-area: 2 / 1 / 3 / 2;
      border-bottom: 0;
    }
    .summary-form {
      grid-area: 1 / 2 / 3 / 3;
      border-left: 1px dashed #B9D1B1;
      padding-top: 24px;
    }
    .summary-plate {
    }
  }


  /* Payment */
  .payment {
    margin-bottom: 64px;
  }
  .payment-row {
    margin-top: 16px;
  }
  .payment-caption {
    color: #5F6959;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    margin-top: 8px;
  }
  .payment-head {
    padding: 24px 16px 16px;
  }
  .payment-head__title {
    color: #000;
    font-size: 26px;
    line-height: 36px;
  }
  .payment-price {
    margin-top: 24px;
  }
  .payment-price__title {
    color: #000;
    font-size: 16px;
    font-weight: 700;
    line-height: 120%;
    letter-spacing: 1.12px;
    text-transform: uppercase;
  }
  .payment-price__title span {
    color: #024F3D;
  }
  .payment-form {
    padding: 16px 24px;
    border-top: 1px dashed #B9D1B1;
  }
  .payment-btn {
    margin-top: 24px;
  }
  .payment-cancellation {
    text-align: center;
    margin-top: 16px;
  }
  .payment-cancellation__caption {
    margin-top: 8px;
    color: #000;
    font-size: 16px;
    line-height: 20px; 
  }
  @media(min-width: 992px) {
    .payment-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }
    .policy.payment-policy {
      margin-top: 0;
    }
  }


  /**
   * Steps -- End --
  */

  /* Tickers */
  .tickers {
    margin-top: 32px;
    overflow: visible;
    gap: 8px;
  }
  .tickers_hide {
    display: none!important;
  }
  .tickers .marquee {
    gap: 8px;
  }
  .tickers:not(.marquee-block) .marquee {
    display: grid;
    gap: 8px;
  }
  .tickers-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 6px;
    border-radius: 18px;
    border: 1px solid #ECE2D8;
  }
  .tickers-item__image {
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
  .tickers-item__image img {
    /* max-width: 80%; */
    /* max-height: 80%; */
  }
  .tickers-item__title {
    color: #9B9C9F;
    font-size: 8px;
    font-weight: 700;
    line-height: 12px;
    letter-spacing: 0.56px;
    text-transform: uppercase;
  }
  .tickers-item__caption {
    margin-top: 2px;
    color: #024F3D;
    font-size: 10px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0.7px;
    text-transform: uppercase;
  }
  @media(min-width: 992px) {
    .tickers .marquee {
      grid-template-columns: repeat(3, 1fr);
    }
    .tickers-item__image {
      width: 52px;
      height: 52px;
    }
    .tickers-item {
      padding: 12px;
      border-radius: 32px;
    }
    .tickers-item__title {
      color: #9B9C9F;
      font-size: 12px;
      letter-spacing: 0.84px;
    }
    .tickers-item__caption {
      margin-top: 6px;
      font-size: 14px;
      letter-spacing: 0.98px;
    }
  }

  /* Policy */
  .policy {
    margin-top: 32px;
  }
  .policy_hide {
    display: none!important;
  }
  .policy__info {
    margin-top: 16px;
    display: grid;
    gap: 10px;
    color: #000;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
  }
  .policy__item {
    position: relative;
    padding-left: 24px;
  }
  .policy__item:before {
    content: '';
    position: absolute;
    left: 10px;
    background-color: #000;
    top: 10px;
    border-radius: 50%;
    width: 4px;
    height: 4px;
  }
  @media(min-width: 992px) {
    .policy {
      margin-bottom: 64px;
    }
  }

  /* Reviews */
  .reviews {
    background-color: #0C5947;
    margin: 30px -1rem 40px;
  }
  .reviews-decor {
    width: 100%;
    height: auto;
  }
  .reviews-decor__before {
    margin-top: -5px;
  }
  .reviews-decor__after {
    margin-bottom: -5px;
  }
  .reviews .reviews-slider {
    padding-left: 0;
  }
  .reviews .b-goog-review {
    padding: 20px 0 0;
  }
  .reviews .b-goog-review h2 {
    color: #DDF2D0;
    font-family: 'Lato',Helvetica,sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 1.12px;
    text-transform: uppercase;
    margin-bottom: 16px;
  }
  .reviews .b-goog-review .ratings {
    margin-bottom: 20px;
  }
  .reviews + .faq-block {
    margin-top: 0;
  }
  @media(min-width: 992px) {
    .reviews {
      display: none;
    }
  }
</style>


<div class="b-booking-def-head">
  <div class="container">
    <div class="box">
      <a data-router-disabled href="/" class="booking-logo">
        <svg width="165" height="94" viewbox="0 0 165 94" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M43.4411 42.5859H46.8092C48.7811 42.5859 49.7325 43.2834 49.7325 44.7075C49.7325 45.478 49.3097 46.0331 48.5661 46.3362C49.5028 46.6612 50.0569 47.2892 50.0569 48.2642C50.0569 49.8563 49.0472 50.5903 46.7836 50.5903H43.4375V42.5859H43.4411ZM46.4957 45.8395C47.3486 45.8395 47.7715 45.5145 47.7715 44.9011C47.8079 44.262 47.4835 43.9626 46.7144 43.9626H45.3439V45.8432H46.4993L46.4957 45.8395ZM46.6415 49.2136C47.5564 49.2136 48.0266 48.8996 48.0266 48.1547C48.0631 47.4207 47.5928 47.0701 46.667 47.0701H45.3439V49.2136H46.6415Z" fill="#DDF2D0"></path>
          <path d="M54.6562 42.5847H60.6487V44.0673H56.559V45.7543H59.1579V47.2478H56.559V49.0809H60.758V50.5854H54.6599V42.5811L54.6562 42.5847Z" fill="#DDF2D0"></path>
          <path d="M65.2891 42.5847H71.2815V44.0673H67.1918V45.7543H69.7907V47.2478H67.1918V49.0809H71.3909V50.5854H65.2927V42.5811L65.2891 42.5847Z" fill="#DDF2D0"></path>
          <path d="M75.9453 42.5859H79.1566C81.5988 42.5859 82.4153 43.5025 82.4153 44.7806C82.4153 45.9235 81.6826 46.6831 80.4907 46.9387C81.7555 47.2381 82.3059 48.1802 82.5246 49.9622C82.5501 50.1083 82.5866 50.4917 82.5975 50.5903H80.6C80.6 50.5903 80.5891 50.3128 80.5745 50.2178C80.4068 48.6622 79.9148 47.6982 78.5661 47.6873H77.8444V50.5903H75.9453V42.5859ZM78.8577 46.4676C80.035 46.4676 80.5308 45.7811 80.5308 45.069C80.5308 44.3205 80.0861 43.9224 78.9561 43.9224H77.848V46.5151L78.8577 46.4676Z" fill="#DDF2D0"></path>
          <path d="M92.7927 47.9857H94.5606C94.7428 48.9132 95.2458 49.3222 96.3539 49.3222C97.1704 49.3222 97.6406 48.9607 97.6406 48.3472C97.6406 47.7338 96.8095 47.5986 95.7744 47.3832C94.4767 47.0947 92.9822 46.6346 92.9822 45.0206C92.9822 43.4906 94.3054 42.417 96.1461 42.417C98.1655 42.417 99.3356 43.4394 99.5032 45.1521H97.7573C97.626 44.2611 97.1449 43.8375 96.1316 43.8375C95.3734 43.8375 94.9178 44.199 94.9178 44.7905C94.9178 45.4515 95.8436 45.572 96.8897 45.7911C98.1764 46.0577 99.5725 46.4776 99.5725 48.1172C99.5725 49.7568 98.3696 50.7317 96.3976 50.7317C94.1851 50.7317 93.0041 49.5997 92.7891 47.9821L92.7927 47.9857Z" fill="#DDF2D0"></path>
          <path d="M104.133 42.5847H107.082C109.367 42.5847 110.413 43.4282 110.413 45.1883C110.413 46.9484 109.283 47.8869 106.961 47.8869H106.072V50.5854H104.136V42.5811L104.133 42.5847ZM106.925 46.5869C108.117 46.5613 108.536 46.0939 108.536 45.1883C108.536 44.2827 108.08 43.9212 106.936 43.9212H106.068V46.5832H106.921L106.925 46.5869Z" fill="#DDF2D0"></path>
          <path d="M116.568 42.5859H118.722L121.551 50.5903H119.517L118.832 48.5892H116.065L115.369 50.5903H113.648L116.572 42.5859H116.568ZM118.42 47.2381L117.494 44.4775L116.506 47.2381H118.42Z" fill="#DDF2D0"></path>
          <path d="M73.1745 30.6178C72.9339 30.4279 72.8428 30.0774 72.8428 29.8254C72.8428 29.4274 73.0032 29.2484 73.5354 29.0586C73.8744 28.9709 74.381 28.7883 74.5596 28.3319C74.7127 27.9375 74.5888 27.4372 74.1769 26.7982L73.2037 25.396L70.6667 21.7918C70.4006 21.412 69.9669 21.1893 69.5039 21.1893C69.1941 21.1893 68.8989 21.2879 68.651 21.4741C68.1043 21.8831 67.8418 22.8143 67.8637 24.2421V26.2614C67.8637 27.565 67.9913 28.5984 69.5914 29.0659C70.1163 29.2521 70.2803 29.4347 70.2803 29.829C70.2803 30.0335 70.2074 30.4097 69.9377 30.6214H59.2796C59.0573 30.4279 58.9297 30.0774 58.9297 29.829C58.9297 29.4493 59.1119 29.263 59.6769 29.0622C61.2042 28.6167 61.5213 27.6052 61.5213 26.2249L61.4666 5.99123C61.4666 4.63283 60.7194 4.05587 60.1216 3.59576C59.6806 3.25616 59.3306 2.98594 59.2942 2.48202C59.276 2.20084 59.5129 1.93062 59.8227 1.87585L65.8917 0.765754C66.0667 0.740192 66.2416 0.725586 66.402 0.725586C67.4044 0.725586 67.8928 1.25872 67.8928 2.35786V17.8115C67.8928 18.279 68.4396 18.5382 68.8005 18.2424L72.5512 15.1568C73.6702 14.3169 74.0056 13.7473 74.0311 13.1009C74.0748 12.0493 73.0433 11.9069 72.4965 11.7608C71.9789 11.5746 71.8149 11.3956 71.8149 11.0013C71.8149 10.7968 71.8878 10.4207 72.1575 10.2089L81.3503 10.2344C81.5909 10.4243 81.682 10.7749 81.682 11.0268C81.682 11.4577 81.4961 11.7535 81.0259 11.7827C79.8923 11.8594 79.3492 12.2976 78.7368 12.7796L73.7759 16.8767L81.3175 27.0429C81.908 27.8207 82.8739 28.5473 83.7196 28.8577L84.0877 29.0586C84.5069 29.3105 84.7111 29.5187 84.7584 29.7487C84.7657 29.9459 84.7657 29.9788 84.7548 30.0189C84.7329 30.1394 84.7111 30.2088 84.6819 30.2818C84.6637 30.3293 84.6381 30.3768 84.6053 30.4133C84.5397 30.4973 84.4523 30.5667 84.332 30.6214H73.1854L73.1745 30.6178Z" fill="#DDF2D0"></path>
          <path d="M56.0118 27.8174C55.979 27.8174 55.8952 27.8357 55.8296 27.8576L55.6655 27.8978C55.5088 27.9306 55.3594 27.9562 55.2172 27.9562C54.6048 27.9562 54.1565 27.591 53.9159 26.952C53.8503 26.5613 53.8321 26.1377 53.8321 25.7141V18.3159C53.8321 13.7331 52.7641 11.4143 50.6245 10.3189C50.5151 10.2677 50.4021 10.2203 50.2855 10.1691C50.1943 10.129 50.1032 10.0852 50.0048 10.045C49.797 9.97195 49.5747 9.90257 49.3487 9.83684C49.3305 9.83684 49.3232 9.82954 49.3159 9.82954C48.5614 9.6287 47.723 9.53011 46.7972 9.48994H46.7789C46.4728 9.47168 46.1483 9.47168 45.8094 9.47168H45.8021C45.4777 9.47168 45.1569 9.47898 44.8325 9.48994C43.5567 9.54106 42.3211 9.69078 41.1838 9.93178C41.1255 9.93909 41.0745 9.95004 41.0198 9.96465C40.8448 10.0048 40.6699 10.0486 40.4985 10.0888C40.3564 10.129 40.2069 10.1618 40.0684 10.2057C39.9955 10.2239 39.9263 10.2458 39.8607 10.2641C37.1415 11.0711 35.1257 12.5062 35.1257 14.6497V14.7811C35.1257 16.3258 36.1719 17.728 38.3407 17.728C43.5968 17.728 39.6091 11.4253 44.4097 11.4253C46.3561 11.4253 47.0377 12.7874 47.0377 16.0519V16.5997C47.0377 17.6805 46.4655 18.053 44.7414 18.2867C36.9811 19.3347 34.6446 21.4015 33.9484 24.3995C33.8318 24.8231 33.7734 25.2796 33.7734 25.7689C33.7734 30.2713 38.2568 30.6182 39.6347 30.6182C39.6602 30.6182 39.6748 30.6109 39.7003 30.6109C39.7331 30.6109 39.7586 30.6182 39.7914 30.6182C43.3635 30.6182 45.2626 28.8143 46.5311 27.6458C46.8045 27.3975 47.1289 27.1967 47.22 27.6203C47.4678 28.8582 48.5286 30.6182 51.7471 30.6182H51.9039L52.5016 30.6C54.2185 30.527 55.2136 30.0194 55.9243 28.8399C56.0337 28.6646 56.1576 28.3433 56.1576 28.1242C56.1576 28.0329 56.1394 27.8174 56.0155 27.8174H56.0118ZM47.0341 21.9201C47.0341 22.0954 47.0341 22.2852 47.0086 22.508C47.0086 22.5664 47.0013 22.6175 46.9903 22.6723C46.8409 24.2352 46.3124 24.8888 45.813 25.3197C45.7802 25.3526 45.7401 25.3855 45.6964 25.4293C45.6891 25.4293 45.6781 25.4366 45.6781 25.4475C45.3391 25.8054 44.7742 26.2947 43.9686 26.5029C43.9613 26.5029 43.9504 26.5102 43.9358 26.5102C43.6223 26.6088 43.2797 26.6672 42.9079 26.6672C42.1789 26.6672 41.6066 26.4262 41.2239 26.0099C41.2166 26.0026 41.2166 25.9916 41.2057 25.9916C40.9068 25.6922 40.7428 25.3015 40.6735 24.8122C40.6553 24.7282 40.648 24.6551 40.648 24.5638C40.6407 24.531 40.6407 24.4908 40.6407 24.447V24.3155C40.6407 24.2425 40.6407 24.1658 40.648 24.0818C40.699 23.1507 41.0526 22.1136 42.0805 21.3833C42.1461 21.3322 42.2226 21.2847 42.3028 21.2336C42.3611 21.1934 42.4268 21.1496 42.4924 21.1167C42.773 20.9524 43.0974 20.8027 43.4692 20.6858C43.8994 20.5361 44.406 20.4375 44.9783 20.3791C46.0317 20.2695 46.6113 20.3718 46.8518 20.9195C46.8701 20.9451 46.8774 20.9597 46.8846 20.9853C46.9758 21.1751 47.0159 21.4161 47.0159 21.7156V21.9164L47.0341 21.9201Z" fill="#DDF2D0"></path>
          <path d="M160.879 30.6178C160.635 30.6178 160.394 30.6068 160.198 30.5812C157.646 30.2563 156.184 28.5071 156.184 25.7757L156.166 5.72463C156.166 5.18784 156.042 4.71313 155.802 4.31145C155.539 3.88056 155.171 3.59573 154.843 3.34377L154.595 3.14658C154.234 2.8508 154.019 2.60249 154.001 2.20811C153.983 1.92329 154.216 1.65307 154.519 1.60559L160.591 0.499152C160.77 0.473591 160.948 0.458984 161.112 0.458984C161.375 0.458984 161.597 0.495501 161.776 0.568533C161.965 0.637914 162.108 0.729205 162.235 0.867967C162.286 0.930044 162.344 1.01038 162.392 1.09437C162.457 1.21852 162.505 1.36094 162.556 1.53987C162.574 1.68228 162.6 1.89042 162.6 2.09126V4.72774H162.614V25.8816C162.614 26.4001 162.68 26.8274 162.811 27.1889C163.099 27.722 163.515 27.9776 164.036 27.9776C164.174 27.9776 164.324 27.9594 164.477 27.9229L164.663 27.8717C164.717 27.8571 164.794 27.8352 164.819 27.8352C165.049 27.817 164.994 28.0251 164.969 28.1493C164.914 28.4231 164.798 28.781 164.641 29.0074C164.098 29.7998 163.58 30.1869 162.651 30.4242C162.465 30.479 162.301 30.5155 162.122 30.5411C161.991 30.5666 161.433 30.6214 160.879 30.6214V30.6178Z" fill="#DDF2D0"></path>
          <path d="M17.0664 1.12804C9.42636 0.474399 0.900618 4.93303 0.0659044 14.7705C-0.779745 24.7248 6.65978 29.9175 13.9353 30.5382C21.5498 31.1882 30.0536 26.6785 30.8993 16.7497C31.6976 7.33215 23.6092 1.68309 17.0664 1.12804ZM15.5209 3.15469C20.6677 3.22772 24.7355 8.74533 24.6298 15.7528C24.6225 16.1253 24.608 16.4904 24.5788 16.8556C24.1669 16.2348 23.4525 15.8295 22.5266 15.6834C21.4842 15.5081 20.1792 15.6761 18.7868 16.2166C16.2244 17.2098 14.3581 18.7654 10.6146 19.514C9.882 19.66 9.21131 19.6053 8.63539 19.4044C7.46533 19.0101 6.62697 18.0314 6.28799 17.0053C6.20415 16.746 5.98545 15.9098 6.01096 14.6829C6.27341 8.06248 10.5636 3.09261 15.5209 3.15469Z" fill="#DDF2D0"></path>
          <path d="M149.879 30.6178C149.635 30.6178 149.394 30.6068 149.198 30.5812C146.646 30.2563 145.184 28.5071 145.184 25.7757L145.166 5.72463C145.166 5.18784 145.042 4.71313 144.802 4.31145C144.539 3.88056 144.171 3.59573 143.843 3.34377L143.595 3.14658C143.234 2.8508 143.019 2.60249 143.001 2.20811C142.983 1.92329 143.216 1.65307 143.519 1.60559L149.588 0.499152C149.766 0.473591 149.945 0.458984 150.109 0.458984C150.371 0.458984 150.594 0.495501 150.772 0.568533C150.962 0.637914 151.104 0.729205 151.232 0.867967C151.283 0.930044 151.341 1.01038 151.388 1.09437C151.454 1.21852 151.501 1.36094 151.552 1.53987C151.57 1.68228 151.596 1.89042 151.596 2.09126V4.72774H151.611V25.8816C151.611 26.4001 151.676 26.8274 151.807 27.1889C152.095 27.722 152.511 27.9776 153.032 27.9776C153.171 27.9776 153.32 27.9594 153.473 27.9229L153.659 27.8717C153.714 27.8571 153.79 27.8352 153.816 27.8352C154.045 27.817 153.991 28.0251 153.965 28.1493C153.911 28.4231 153.794 28.781 153.637 29.0074C153.094 29.7998 152.577 30.1869 151.647 30.4242C151.461 30.479 151.297 30.5155 151.118 30.5411C150.987 30.5666 150.43 30.6214 149.876 30.6214L149.879 30.6178Z" fill="#DDF2D0"></path>
          <path d="M110.423 30.6181C109.089 30.6181 108.211 30.2566 108.01 29.6212L104.128 17.6658C104.004 17.3883 103.829 17.2459 103.629 17.2459C103.549 17.2459 103.279 17.2787 103.173 17.6804L99.2111 29.6176C99.0142 30.2456 98.1103 30.6181 96.7944 30.6181H96.3643C95.114 30.6181 94.1882 30.231 93.944 29.6066L88.1666 13.5285C87.7693 12.3928 87.2663 11.8926 86.1035 11.4799C85.575 11.2864 85.4219 11.1075 85.4219 10.6729C85.4219 10.4684 85.5094 10.1179 85.7536 9.92435H95.9743C96.244 10.1288 96.3898 10.4867 96.3898 10.6729C96.3898 11.071 96.2039 11.2681 95.6207 11.4799C94.3158 11.9108 94.509 13.0611 94.8479 14.3063L97.6947 24.257C97.7713 24.5126 97.9535 24.6696 98.1722 24.6696C98.3909 24.6696 98.5732 24.5126 98.6461 24.2606L102.699 10.7131C102.893 9.94626 104.117 9.67969 105.2 9.67969H105.546C106.92 9.67969 107.897 10.0741 108.09 10.7131L111.754 24.2533C111.83 24.5089 112.027 24.6696 112.253 24.6696C112.479 24.6696 112.676 24.5089 112.752 24.2606L115.858 14.1091C116.142 13.1414 116.16 12.5462 115.916 12.1153C115.741 11.8049 115.442 11.6004 114.98 11.4726C114.469 11.2864 114.316 11.1038 114.316 10.6729C114.316 10.4684 114.404 10.1179 114.648 9.92435H121.675C121.916 10.1179 122.007 10.4721 122.007 10.6729C122.007 11.1075 121.854 11.2864 121.326 11.4799C120.185 11.8707 119.383 12.3782 118.92 13.6928L113.27 29.6139C113.029 30.231 112.104 30.6181 110.853 30.6181H110.423Z" fill="#DDF2D0"></path>
          <path d="M129.15 11.0205C128.629 11.2542 128.122 11.5427 127.634 11.8494C127.524 11.9225 127.419 11.9918 127.32 12.0576C127.842 11.6522 128.458 11.309 129.154 11.0205H129.15Z" fill="#DDF2D0"></path>
          <path d="M141.662 25.8758C141.578 25.7845 141.403 25.7443 141.199 25.7443C141.01 25.7443 140.849 25.7516 140.536 25.8758C139.209 26.4235 137.386 27.1867 134.758 27.1867C132.983 27.1867 131.543 26.6317 130.381 25.4412C130.107 25.0834 129.918 24.7693 129.808 24.4699C129.743 24.3275 129.684 24.196 129.619 23.9477C129.535 23.7469 129.509 23.4986 129.495 23.2174C129.52 22.7536 129.626 22.436 129.892 22.2059L129.899 22.1876C130.173 21.9722 130.621 21.8371 131.317 21.7129C132.801 21.4464 134.102 21.1652 135.247 20.8475C136.945 20.3582 138.29 19.8104 139.249 19.1458C139.249 19.1458 139.26 19.1349 139.282 19.113C140.383 18.3498 141.046 17.4369 141.297 16.3049C141.381 15.9981 141.407 15.3993 141.389 15.0012C141.381 14.2965 141.239 13.6647 140.984 13.117C140.933 12.9855 140.875 12.8358 140.776 12.6934C140.725 12.6021 140.66 12.4926 140.576 12.394C140.576 12.3684 140.543 12.3538 140.536 12.3283C140.437 12.1968 140.328 12.069 140.197 11.9302C140.113 11.8462 140.014 11.7732 139.923 11.6892C139.541 11.3569 139.078 11.0757 138.571 10.8238C138.396 10.7398 138.214 10.6595 138.024 10.5901C137.999 10.5828 137.959 10.5645 137.915 10.5499C136.96 10.1994 135.841 9.9693 134.674 9.92548C134.525 9.90723 134.361 9.90723 134.212 9.90723C133.242 9.90723 132.207 10.0387 131.212 10.3126C130.953 10.371 130.705 10.4367 130.464 10.5207C130.191 10.5864 129.932 10.685 129.684 10.7946C129.509 10.8603 129.327 10.926 129.152 11.01C128.631 11.2437 128.124 11.5322 127.636 11.8389C127.527 11.912 127.421 11.9813 127.322 12.0471C127.213 12.1128 127.107 12.1968 127.016 12.2808C126.998 12.2808 126.983 12.299 126.983 12.299C125.5 13.3872 124.257 14.8479 123.444 16.5349C123.419 16.6007 123.378 16.6664 123.346 16.7358C123.021 17.4917 122.773 18.306 122.624 19.2116V19.2189C122.54 19.7593 122.5 20.3326 122.5 20.9315C122.5 21.1214 122.5 21.3149 122.533 21.5194C122.533 21.6107 122.533 21.6947 122.54 21.8006C122.558 22.0233 122.58 22.2242 122.613 22.4323C123.375 28.3297 128.547 30.528 132.859 30.6119C136.665 30.528 139.566 29.3996 141.272 27.3218C141.545 26.9713 141.804 26.6061 141.804 26.2081C141.804 26.0584 141.764 25.9488 141.662 25.8685V25.8758ZM129.094 18.054C129.043 17.4405 128.97 15.9361 130.063 14.3841C130.129 14.2746 130.213 14.176 130.297 14.0701C130.388 13.9605 130.512 13.8035 130.687 13.6392C130.771 13.5552 130.862 13.4639 130.967 13.3726H130.975C131.234 13.1499 131.554 12.9308 131.937 12.7664C131.944 12.7591 131.955 12.7591 131.963 12.7591C132.203 12.6496 132.458 12.5766 132.743 12.5364C132.932 12.5035 133.133 12.4853 133.34 12.4853C135.207 12.4853 136.052 13.2923 136.1 14.8588C136.14 16.2136 135.56 18.1818 132.983 18.9961C132.502 19.1604 131.948 19.27 131.317 19.3467C129.808 19.4964 129.178 19.2627 129.094 18.0577V18.054Z" fill="#DDF2D0"></path>
          <path d="M44.6688 60.6602L45.4962 62.5663C46.1268 64.016 45.7951 64.739 45.0406 65.0677C44.3626 65.3634 43.7247 65.1224 43.2691 64.4798C43.4185 65.3087 43.003 65.8783 42.0042 66.4662C41.924 66.5174 41.7053 66.6379 41.6507 66.6707L41.1367 65.484C41.1367 65.484 41.2971 65.4036 41.3518 65.3744C42.2266 64.8741 42.6713 64.33 42.3323 63.5303L42.1464 63.1031L40.4296 63.8517L39.9375 62.7233L44.6724 60.6602H44.6688ZM43.1233 63.3916C43.4258 64.0927 43.9616 64.2059 44.3808 64.0233C44.8219 63.8298 44.9421 63.4646 44.6505 62.7927L44.3662 62.1354L42.8317 62.8037L43.1196 63.3916H43.1233Z" fill="#DDF2D0"></path>
          <path d="M47.5022 66.6885L49.547 69.9822L48.7342 70.4862L47.3381 68.2368L46.4123 68.8137L47.2981 70.2415L46.4779 70.7527L45.5922 69.325L44.5898 69.9494L46.0223 72.2572L45.1985 72.7721L43.1172 69.4199L47.5022 66.6885Z" fill="#DDF2D0"></path>
          <path d="M50.9538 71.9033L51.7557 72.8673L48.5226 75.5623L49.9296 77.2566L49.1933 77.8701L46.9844 75.2117L50.9538 71.9033Z" fill="#DDF2D0"></path>
          <path d="M55.9302 77.3262L56.969 78.2537L54.8987 83.3294L53.9181 82.4531L54.4467 81.1932L53.1126 80.0028L51.917 80.6674L51.0859 79.9261L55.9302 77.3262ZM54.8257 80.368L55.562 78.6371L53.9036 79.5427L54.8257 80.368Z" fill="#DDF2D0"></path>
          <path d="M60.0343 83.7715L60.0197 80.7188L61.1715 81.4454L61.1642 83.3917L62.9503 82.5665L63.9782 83.2128L61.2699 84.3813L61.2809 87.6276L60.1217 86.8973L60.129 84.7757L58.1716 85.6704L57.1328 85.0167L60.0306 83.7788L60.0343 83.7715Z" fill="#DDF2D0"></path>
          <path d="M68.9705 85.5203L70.9352 86.141C72.4624 86.623 73.2206 87.7149 72.6811 89.4202C72.1563 91.0853 70.8623 91.5418 69.3131 91.0488L67.4141 90.45L68.9705 85.5166V85.5203ZM69.5683 90.1615C70.5087 90.4609 71.0956 90.1213 71.4382 89.0441L71.4491 89.0076C71.799 87.8938 71.5293 87.3022 70.5962 87.0065L69.8854 86.7801L68.8867 89.946L69.5683 90.1615Z" fill="#DDF2D0"></path>
          <path d="M75.7706 87.3643L77.0063 87.5724L76.1497 92.6737L74.9141 92.4656L75.7706 87.3643Z" fill="#DDF2D0"></path>
          <path d="M79.5479 87.9121L83.2476 88.0582L83.2075 89.0295L80.7617 88.9346L80.7106 90.1944L82.4603 90.2638L82.4202 91.2387L80.6705 91.1694L80.594 93.1303L79.3438 93.0828L79.5479 87.9158V87.9121Z" fill="#DDF2D0"></path>
          <path d="M85.375 87.9749L89.0565 87.5732L89.1622 88.5409L86.7273 88.8075L86.8658 90.0637L88.6045 89.8738L88.7102 90.8414L86.9715 91.0313L87.1829 92.9813L85.9363 93.1164L85.375 87.9749Z" fill="#DDF2D0"></path>
          <path d="M91.1641 87.179L94.9039 86.1748L95.1517 87.0987L92.6002 87.7852L92.8809 88.8368L94.5029 88.4023L94.7544 89.3335L93.1324 89.768L93.4386 90.911L96.0594 90.2062L96.3109 91.1483L92.5054 92.1708L91.1677 87.1754L91.1641 87.179Z" fill="#DDF2D0"></path>
          <path d="M97.125 85.3847L99.0168 84.5265C100.453 83.8729 101.178 84.1942 101.521 84.9465C101.827 85.6184 101.597 86.2647 100.963 86.7321C101.787 86.5715 102.363 86.9768 102.964 87.97C103.015 88.0504 103.139 88.2658 103.172 88.3206L101.998 88.8537C101.998 88.8537 101.918 88.6931 101.885 88.6419C101.371 87.7728 100.825 87.3346 100.03 87.6889L99.6036 87.8824L100.376 89.5914L99.2573 90.0989L97.125 85.3883V85.3847ZM99.8734 86.8891C100.566 86.5751 100.675 86.0383 100.486 85.6184C100.285 85.1802 99.9207 85.0633 99.2537 85.3664L98.6012 85.6622L99.2902 87.1886L99.8734 86.8891Z" fill="#DDF2D0"></path>
          <path d="M103.062 82.457L106.288 80.3135L106.817 81.1132L104.615 82.5738L105.217 83.4831L106.616 82.5556L107.149 83.3589L105.749 84.2864L106.401 85.2724L108.661 83.7716L109.197 84.5822L105.913 86.7622L103.062 82.4533V82.457Z" fill="#DDF2D0"></path>
          <path d="M108.148 78.8822L109.173 77.9401L112.902 78.8969L110.718 76.516L111.502 75.793L114.994 79.6016L114.119 80.4086L110.022 79.3496L112.428 81.9715L111.644 82.6945L108.152 78.8859L108.148 78.8822Z" fill="#DDF2D0"></path>
          <path d="M114.625 73.6828L113.703 74.8367L112.938 74.2232L115.562 70.9404L116.327 71.5539L115.409 72.7042L118.675 75.3224L117.891 76.301L114.625 73.6828Z" fill="#DDF2D0"></path>
          <path d="M116.766 69.1544L117.411 68.0771L121.019 70.2462L122.153 68.3547L122.973 68.8476L121.194 71.8128L116.766 69.1507V69.1544Z" fill="#DDF2D0"></path>
          <path d="M122.47 64.721L119.109 65.1957L119.682 63.9103L121.883 63.6693L120.593 61.8654L121.096 60.7334L123.006 63.5926L125.065 64.5128L124.555 65.6558L122.47 64.721Z" fill="#DDF2D0"></path>
          <path d="M95.13 62.2458C93.0195 62.5818 91.6271 62.7753 90.1108 62.8812C88.3101 63.009 86.0939 63.093 84.1329 63.1368C83.0795 63.2026 82.0224 63.093 81.0237 62.9214C80.5134 62.841 78.5378 62.37 78.1368 62.3043C76.6022 62.0523 74.7287 62.129 73.1941 62.0998C69.8006 62.0304 69.5199 61.7748 68.1239 61.5885C67.3074 61.479 66.5529 61.3804 65.9733 61.7602C65.2771 62.2203 65.1313 63.2939 65.8421 64.2287C66.4435 65.0211 66.3816 65.4264 66.305 65.8573C66.2321 66.259 66.3159 66.5255 66.4362 66.7118C66.6877 67.0988 67.7083 67.5918 69.8188 67.4896C71.1165 67.4275 72.8879 67.0477 75.2572 65.7258C76.5038 65.032 78.2462 64.1228 80.5608 64.3419C81.862 64.4624 83.2071 64.4259 84.0053 64.298C84.676 64.1922 85.0113 64.0789 86.1121 63.9219C86.298 63.8964 87.5556 63.7065 87.5957 63.9804C87.6321 64.2177 86.5751 64.5683 86.4038 64.6194C83.947 65.3643 83.5315 64.9882 81.6761 65.0028C79.7516 65.0101 77.8488 65.3278 76.533 66.2809C76.533 66.2809 74.561 67.4786 73.2743 67.5699C70.967 67.7379 69.8735 68.6435 69.7386 69.7718C69.6439 70.5496 70.3145 70.9988 71.3789 71.1704C72.3886 71.3311 71.481 72.5544 74.5027 73.219C78.1951 74.0333 79.2959 73.2518 79.9411 72.6128C80.7066 71.8533 80.404 70.4876 80.6628 69.6258C80.9763 68.5924 81.5959 67.4494 83.382 66.657C84.1693 66.259 85.4451 66.1202 86.9323 65.5579C88.7475 64.875 90.6976 63.7174 91.6672 63.5458C92.101 63.4691 92.5675 63.429 92.2796 63.7649C92.0827 63.995 91.5906 64.4478 91.3027 64.645C89.5494 65.8317 88.671 66.0873 86.8958 66.5548C85.1098 66.8834 83.5898 67.7671 83.2034 68.753C82.7551 69.8923 82.5728 69.7536 82.1391 70.3488C81.8074 70.8052 81.7891 71.1485 81.8329 71.6889C81.873 72.1746 82.2739 72.9305 83.0467 73.2957C83.382 73.4855 83.9944 73.4381 84.3771 73.303C85.4378 72.9341 85.7877 73.1971 86.247 73.0802C88.4596 72.5252 87.7269 71.0718 88.8496 69.2825C89.2469 68.6471 90.4643 67.9825 91.1678 67.2595C91.1751 67.2522 91.1824 67.2486 91.186 67.2413C91.9624 66.5803 92.3051 65.7003 92.4873 65.1014C93.1762 62.9287 94.74 63.166 96.7958 62.8228C98.0788 62.5672 98.6693 62.3736 99.2452 62.213L99.6243 61.3037C97.6596 61.793 95.1737 62.2458 95.1336 62.2495L95.13 62.2458Z" fill="#DDF2D0"></path>
        </svg>
      </a>
      <div class="title">
        <h1>Book Now</h1>
      </div>
      <div class="secure">
        <svg width="82" height="82" viewbox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M79.3673 24.2469L1.17904 23.2288C0.528347 23.2204 0.00959948 22.6826 0.0245551 22.032C0.248049 12.31 8.09991 4.49468 17.8228 4.31652L63.4902 3.47968C73.6561 3.29339 81.9974 11.4832 81.9974 21.6508C81.9974 23.0979 80.8143 24.2658 79.3673 24.2469ZM66.2456 49.0724L66.9258 41.9582C67.1918 39.1757 65.4528 36.7103 62.9549 35.8973C62.3449 35.6987 61.6895 35.5987 61.0071 35.6167L53.826 35.8064C50.6317 35.8907 48.1091 38.546 48.1885 41.7404L48.3536 48.3867L66.2456 49.0724ZM60.8542 29.8266C60.8542 29.8266 60.8541 29.8266 60.8541 29.8266L53.673 30.0162C47.2844 30.1849 42.2392 35.4954 42.398 41.8843L42.5927 49.7211C40.5774 51.0647 39.1785 53.2819 38.9629 55.8708L38.3926 62.7193C38.3926 62.7193 38.3926 62.7193 38.3927 62.7193L37.8879 68.7797C37.5052 73.3753 40.9834 77.3837 45.5871 77.6524L66.3829 78.8662C70.9846 79.1348 74.9046 75.5613 75.0619 70.9544L75.5174 57.6048C75.6171 54.6834 74.1767 52.0654 71.9246 50.5342L72.6918 42.5095C73.1243 37.9858 70.907 33.8811 67.3786 31.63C65.5063 30.4355 63.2648 29.7629 60.8542 29.8266ZM58.4507 54.3361C60.8371 54.9713 62.5292 57.2144 62.3797 59.7759C62.3223 60.7595 62.0006 61.665 61.4877 62.4272C61.4877 62.4272 61.4878 62.4272 61.4878 62.4272C60.984 63.1758 60.2957 63.7863 59.4921 64.1971C59.2779 65.8234 59.1156 67.4591 59.02 69.0964L59.0197 69.1022C59.0076 69.3096 58.9763 69.5102 58.9286 69.7039C58.2503 72.7053 54.4182 72.8457 53.6291 69.5565L53.6319 69.5566C53.5288 69.1103 53.5204 68.5912 53.5125 68.1028L53.5125 68.1001C53.5112 68.0222 53.5099 67.9452 53.5083 67.8693C53.5055 67.7315 53.5014 67.5976 53.4937 67.4702C53.4563 66.1088 53.4545 64.7455 53.4943 63.3832C52.3578 62.3416 51.682 60.8161 51.7789 59.1571C51.9497 56.2297 54.4613 53.9952 57.3887 54.166C57.7547 54.1874 58.1098 54.2453 58.4507 54.3361ZM34.1027 62.7698L34.7068 55.5164C34.9594 52.4836 36.2822 49.7863 38.2722 47.776L38.1285 41.9903C37.9566 35.0728 42.2422 29.0788 48.3694 26.7622C35.9641 26.6431 23.312 26.4806 11.6943 26.3314H11.6942L11.6934 26.3314L11.693 26.3314H11.6928L11.6744 26.3311L11.6705 26.3311C8.39939 26.2891 5.21039 26.2481 2.13209 26.2095L1.64887 26.203C0.627303 26.1219 -0.296974 27.0267 -0.261301 28.0515L-0.291171 30.024C-0.325665 32.2951 -0.343787 33.4883 -0.356741 34.6816C-0.371081 36.0025 -0.379088 37.3234 -0.395958 40.1065L-0.404206 41.4636C-0.409059 42.0864 -0.410684 43.2347 -0.412302 44.3777C-0.413928 45.526 -0.415545 46.669 -0.420421 47.2687C-0.540415 50.6869 0.5071 54.2122 2.59889 56.9494C5.49496 60.8411 10.3693 63.1047 15.1982 62.9134L17.1311 62.9069C21.4422 62.9011 27.5155 62.845 34.1027 62.7698ZM76.3847 48.7567C78.1146 50.5881 79.2957 52.9434 79.6677 55.5487C80.5793 54.0898 81.2304 52.4696 81.5484 50.768C81.8677 49.2194 81.8265 47.1555 81.7891 45.2803C81.773 44.4695 81.7575 43.6939 81.7722 43.0105C81.7427 38.802 81.6887 37.7074 81.6412 36.743V36.7429C81.5894 35.6927 81.5452 34.7969 81.5486 30.2017L81.5421 28.2656C81.5421 28.2304 81.5428 28.195 81.5434 28.1594C81.5457 28.0338 81.5479 27.9061 81.5227 27.7824C81.4967 27.6462 81.4384 27.5229 81.3605 27.4094C81.3605 27.404 81.3565 27.3996 81.3524 27.3951C81.3491 27.3915 81.3457 27.3878 81.3443 27.3835C81.3151 27.3446 81.2827 27.3056 81.2503 27.27C81.2405 27.2602 81.23 27.2505 81.2195 27.2408L81.2191 27.2404C81.2087 27.2308 81.1983 27.2212 81.1886 27.2116L81.1852 27.2085C81.1831 27.2066 81.181 27.2051 81.1789 27.2035L81.1788 27.2034C81.1756 27.201 81.1724 27.1986 81.1692 27.1954C81.1627 27.1889 81.1562 27.1856 81.1497 27.1824C81.1472 27.1807 81.1449 27.179 81.1428 27.1774C81.1402 27.1753 81.1378 27.1733 81.1356 27.1712C81.1325 27.1685 81.1298 27.1657 81.127 27.1629C81.1254 27.1613 81.123 27.1597 81.1205 27.1581C81.1181 27.1565 81.1157 27.1548 81.1141 27.1532C81.0881 27.1305 81.0589 27.1111 81.0297 27.0948C81.0297 27.0929 81.0262 27.0909 81.0227 27.089C81.0204 27.0877 81.0181 27.0864 81.0168 27.0851C81.0035 27.0794 80.9914 27.0727 80.9784 27.0654L80.9664 27.0588C80.9608 27.0557 80.9549 27.0526 80.9487 27.0494C80.9426 27.0433 80.9352 27.0398 80.9282 27.0364C80.924 27.0344 80.9199 27.0324 80.9162 27.03C80.9066 27.0268 80.8979 27.0236 80.8891 27.0204L80.8887 27.0202C80.8797 27.017 80.8708 27.0138 80.8611 27.0105L80.8319 27.0008C80.7995 26.9878 80.7703 26.9781 80.7379 26.9716L80.7087 26.9619C80.7042 26.9604 80.6997 26.9596 80.6956 26.9588C80.6907 26.9579 80.6862 26.9571 80.6827 26.9554C80.6146 26.9424 80.5498 26.9359 80.4784 26.9359H77.7283C74.4495 26.9332 71.0581 26.9227 67.5868 26.9058C73.5992 29.5758 77.6163 35.875 76.9431 42.916L76.3847 48.7567Z" fill="#DDF2D0"></path>
        </svg>
        <span> Secure <br> booking </span>
      </div>
    </div>
  </div>
</div>

<div class="b-booking-def-cont">
  <div class="container steps-container">
    <!-- Progress for steps -->
    <div class="progress ff-lato">
      <div class="progress-line">
        <span style='width: 0%;'></span>
      </div>

      <div class="progress-step active" data-progress-step='1'>
        <div class="progress-step__num-wrapper">
          <div class="progress-step__num">
            <span>1</span>
          </div>
        </div>
        <div class="progress-step__caption">
          Choose Appointment
        </div>
      </div>

      <div class="progress-step" data-progress-step='2'>
        <div class="progress-step__num-wrapper">
          <div class="progress-step__num">
            <span>2</span>
          </div>
        </div>
        <div class="progress-step__caption">
          Your Info
        </div>
      </div>

      <div class="progress-step" data-progress-step='3'>
        <div class="progress-step__num-wrapper">
          <div class="progress-step__num">
            <span>3</span>
          </div>
        </div>
        <div class="progress-step__caption">
          Confirmation
        </div>
      </div>
    </div>
    
    <!-- Logs for completed steps -->
    <div class="logs ff-lato">
      <div class="logs-step">
        <div class="logs-step__head">
          <div class="logs-step__title">
            <svg class='logs-step__title-icon' width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="0.795044" width="14" height="14" rx="7" fill="#0C5947"/>
              <path d="M4 7.97502L6.05554 9.89352L10 5.69666" stroke="#DDF2D0" stroke-linecap="round"/>
            </svg>

            <span class='logs-step__title-value'>Services</span>
          </div>

          <div class="logs-step__action ff-dm-sans">Change</div>
        </div>

        <div class="logs-step__value">Date Night Package</div>
      </div>
      
      <div class="logs-step">
        <div class="logs-step__head">
          <div class="logs-step__title">
            <svg class='logs-step__title-icon' width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="0.795044" width="14" height="14" rx="7" fill="#0C5947"/>
              <path d="M4 7.97502L6.05554 9.89352L10 5.69666" stroke="#DDF2D0" stroke-linecap="round"/>
            </svg>

            <span class='logs-step__title-value'>Services</span>
          </div>

          <div class="logs-step__action ff-dm-sans">Change</div>
        </div>

        <div class="logs-step__value">Date Night Package</div>
      </div>
    </div>

    <!-- Steps -->
    <div class="steps ff-lato">
      <!-- Services -->
      <div class="step services" data-title='services'>
        <!-- Title -->
        <div class="services-title booking-title">Choose a Services</div>

        <!-- List -->
        <div class="services-list">
          <!-- Item -->
          <div class="service services__item">
            <div class="service-head">
              <div class="service-head__icons">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <g clip-path="url(#clip0_504_2359)">
                  <path d="M6.41448 6.57542C7.2086 6.57542 7.89625 6.2906 8.45811 5.72865C9.01997 5.16679 9.30479 4.47933 9.30479 3.68511C9.30479 2.89117 9.01997 2.20361 8.45802 1.64157C7.89607 1.0798 7.20851 0.794983 6.41448 0.794983C5.62026 0.794983 4.93279 1.0798 4.37094 1.64166C3.80908 2.20352 3.52417 2.89107 3.52417 3.68511C3.52417 4.47933 3.80908 5.16688 4.37103 5.72874C4.93298 6.29051 5.62054 6.57542 6.41448 6.57542Z" fill="#0C5947" fill-opacity="0.7"/>
                  <path d="M11.4717 10.0224C11.4555 9.78853 11.4228 9.53347 11.3745 9.26412C11.3258 8.99276 11.2631 8.73623 11.188 8.50176C11.1105 8.25942 11.005 8.02011 10.8746 7.79077C10.7393 7.55273 10.5804 7.34546 10.402 7.17489C10.2155 6.99646 9.98721 6.853 9.72317 6.74835C9.46005 6.64426 9.16846 6.59152 8.85654 6.59152C8.73404 6.59152 8.61557 6.64178 8.38678 6.79074C8.24598 6.88257 8.08127 6.98877 7.89744 7.10623C7.74024 7.20639 7.52729 7.30023 7.26426 7.38519C7.00764 7.46823 6.74708 7.51034 6.48991 7.51034C6.23274 7.51034 5.97227 7.46823 5.71538 7.38519C5.45262 7.30032 5.23967 7.20648 5.08266 7.10632C4.90056 6.98996 4.73577 6.88376 4.59285 6.79065C4.36434 6.64169 4.24578 6.59143 4.12328 6.59143C3.81127 6.59143 3.51977 6.64426 3.25674 6.74844C2.99288 6.8529 2.76446 6.99637 2.57779 7.17499C2.39953 7.34564 2.24051 7.55282 2.10537 7.79077C1.9751 8.02011 1.86963 8.25933 1.79199 8.50185C1.71701 8.73632 1.6543 8.99276 1.60559 9.26412C1.55734 9.5331 1.52457 9.78826 1.50836 10.0226C1.49243 10.2522 1.48438 10.4906 1.48438 10.7312C1.48438 11.3576 1.6835 11.8648 2.07617 12.2387C2.46399 12.6078 2.97714 12.795 3.60116 12.795H9.37921C10.0032 12.795 10.5162 12.6079 10.9041 12.2387C11.2969 11.865 11.496 11.3578 11.496 10.7312C11.4959 10.4894 11.4878 10.2509 11.4717 10.0224Z" fill="#0C5947"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_504_2359">
                      <rect width="12" height="12" fill="white" transform="translate(0.5 0.794983)"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <span class="service-head__value">Ideal for couples</span>
            </div>

            <div class="service-body">
              <div class="service-title">Date Night Package</div>
              <div class="service-options booking-list">
                <div class="service-options__item booking-list__item">90-minute private session</div>
                <div class="service-options__item booking-list__item">1 Private Beer Therapy™ Room</div>
                <div class="service-options__item booking-list__item">Includes beer or sparkling wine</div>
              </div>
            </div>

            <div class="service-footer">
              <div class="service-price">Starts from <span>$249</span> for 2 adults</div>
              <button class="service-btn link-btn dark booking-btn">Select</button>
            </div>
          </div>

          <!-- Item -->
          <div class="service services__item">
            <div class="service-head">
              <div class="service-head__icons">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <g clip-path="url(#clip0_504_2359)">
                  <path d="M6.41448 6.57542C7.2086 6.57542 7.89625 6.2906 8.45811 5.72865C9.01997 5.16679 9.30479 4.47933 9.30479 3.68511C9.30479 2.89117 9.01997 2.20361 8.45802 1.64157C7.89607 1.0798 7.20851 0.794983 6.41448 0.794983C5.62026 0.794983 4.93279 1.0798 4.37094 1.64166C3.80908 2.20352 3.52417 2.89107 3.52417 3.68511C3.52417 4.47933 3.80908 5.16688 4.37103 5.72874C4.93298 6.29051 5.62054 6.57542 6.41448 6.57542Z" fill="#0C5947" fill-opacity="0.7"/>
                  <path d="M11.4717 10.0224C11.4555 9.78853 11.4228 9.53347 11.3745 9.26412C11.3258 8.99276 11.2631 8.73623 11.188 8.50176C11.1105 8.25942 11.005 8.02011 10.8746 7.79077C10.7393 7.55273 10.5804 7.34546 10.402 7.17489C10.2155 6.99646 9.98721 6.853 9.72317 6.74835C9.46005 6.64426 9.16846 6.59152 8.85654 6.59152C8.73404 6.59152 8.61557 6.64178 8.38678 6.79074C8.24598 6.88257 8.08127 6.98877 7.89744 7.10623C7.74024 7.20639 7.52729 7.30023 7.26426 7.38519C7.00764 7.46823 6.74708 7.51034 6.48991 7.51034C6.23274 7.51034 5.97227 7.46823 5.71538 7.38519C5.45262 7.30032 5.23967 7.20648 5.08266 7.10632C4.90056 6.98996 4.73577 6.88376 4.59285 6.79065C4.36434 6.64169 4.24578 6.59143 4.12328 6.59143C3.81127 6.59143 3.51977 6.64426 3.25674 6.74844C2.99288 6.8529 2.76446 6.99637 2.57779 7.17499C2.39953 7.34564 2.24051 7.55282 2.10537 7.79077C1.9751 8.02011 1.86963 8.25933 1.79199 8.50185C1.71701 8.73632 1.6543 8.99276 1.60559 9.26412C1.55734 9.5331 1.52457 9.78826 1.50836 10.0226C1.49243 10.2522 1.48438 10.4906 1.48438 10.7312C1.48438 11.3576 1.6835 11.8648 2.07617 12.2387C2.46399 12.6078 2.97714 12.795 3.60116 12.795H9.37921C10.0032 12.795 10.5162 12.6079 10.9041 12.2387C11.2969 11.865 11.496 11.3578 11.496 10.7312C11.4959 10.4894 11.4878 10.2509 11.4717 10.0224Z" fill="#0C5947"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_504_2359">
                      <rect width="12" height="12" fill="white" transform="translate(0.5 0.794983)"/>
                    </clipPath>
                  </defs>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <g clip-path="url(#clip0_504_2359)">
                  <path d="M6.41448 6.57542C7.2086 6.57542 7.89625 6.2906 8.45811 5.72865C9.01997 5.16679 9.30479 4.47933 9.30479 3.68511C9.30479 2.89117 9.01997 2.20361 8.45802 1.64157C7.89607 1.0798 7.20851 0.794983 6.41448 0.794983C5.62026 0.794983 4.93279 1.0798 4.37094 1.64166C3.80908 2.20352 3.52417 2.89107 3.52417 3.68511C3.52417 4.47933 3.80908 5.16688 4.37103 5.72874C4.93298 6.29051 5.62054 6.57542 6.41448 6.57542Z" fill="#0C5947" fill-opacity="0.7"/>
                  <path d="M11.4717 10.0224C11.4555 9.78853 11.4228 9.53347 11.3745 9.26412C11.3258 8.99276 11.2631 8.73623 11.188 8.50176C11.1105 8.25942 11.005 8.02011 10.8746 7.79077C10.7393 7.55273 10.5804 7.34546 10.402 7.17489C10.2155 6.99646 9.98721 6.853 9.72317 6.74835C9.46005 6.64426 9.16846 6.59152 8.85654 6.59152C8.73404 6.59152 8.61557 6.64178 8.38678 6.79074C8.24598 6.88257 8.08127 6.98877 7.89744 7.10623C7.74024 7.20639 7.52729 7.30023 7.26426 7.38519C7.00764 7.46823 6.74708 7.51034 6.48991 7.51034C6.23274 7.51034 5.97227 7.46823 5.71538 7.38519C5.45262 7.30032 5.23967 7.20648 5.08266 7.10632C4.90056 6.98996 4.73577 6.88376 4.59285 6.79065C4.36434 6.64169 4.24578 6.59143 4.12328 6.59143C3.81127 6.59143 3.51977 6.64426 3.25674 6.74844C2.99288 6.8529 2.76446 6.99637 2.57779 7.17499C2.39953 7.34564 2.24051 7.55282 2.10537 7.79077C1.9751 8.02011 1.86963 8.25933 1.79199 8.50185C1.71701 8.73632 1.6543 8.99276 1.60559 9.26412C1.55734 9.5331 1.52457 9.78826 1.50836 10.0226C1.49243 10.2522 1.48438 10.4906 1.48438 10.7312C1.48438 11.3576 1.6835 11.8648 2.07617 12.2387C2.46399 12.6078 2.97714 12.795 3.60116 12.795H9.37921C10.0032 12.795 10.5162 12.6079 10.9041 12.2387C11.2969 11.865 11.496 11.3578 11.496 10.7312C11.4959 10.4894 11.4878 10.2509 11.4717 10.0224Z" fill="#0C5947"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_504_2359">
                      <rect width="12" height="12" fill="white" transform="translate(0.5 0.794983)"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <span class="service-head__value">Ideal for couples</span>
            </div>

            <div class="service-body">
              <div class="service-title">Date Night Package</div>
              <div class="service-options booking-list">
                <div class="service-options__item booking-list__item">90-minute private session</div>
                <div class="service-options__item booking-list__item">1 Private Beer Therapy™ Room</div>
              </div>
            </div>

            <div class="service-footer">
              <div class="service-price">Starts from <span>$249</span> for 2 adults</div>
              <button class="service-btn link-btn dark booking-btn">Select</button>
            </div>
          </div>

          <!-- Item -->
          <div class="service services__item">
            <div class="service-head">
              <div class="service-head__icons">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <g clip-path="url(#clip0_504_2359)">
                  <path d="M6.41448 6.57542C7.2086 6.57542 7.89625 6.2906 8.45811 5.72865C9.01997 5.16679 9.30479 4.47933 9.30479 3.68511C9.30479 2.89117 9.01997 2.20361 8.45802 1.64157C7.89607 1.0798 7.20851 0.794983 6.41448 0.794983C5.62026 0.794983 4.93279 1.0798 4.37094 1.64166C3.80908 2.20352 3.52417 2.89107 3.52417 3.68511C3.52417 4.47933 3.80908 5.16688 4.37103 5.72874C4.93298 6.29051 5.62054 6.57542 6.41448 6.57542Z" fill="#0C5947" fill-opacity="0.7"/>
                  <path d="M11.4717 10.0224C11.4555 9.78853 11.4228 9.53347 11.3745 9.26412C11.3258 8.99276 11.2631 8.73623 11.188 8.50176C11.1105 8.25942 11.005 8.02011 10.8746 7.79077C10.7393 7.55273 10.5804 7.34546 10.402 7.17489C10.2155 6.99646 9.98721 6.853 9.72317 6.74835C9.46005 6.64426 9.16846 6.59152 8.85654 6.59152C8.73404 6.59152 8.61557 6.64178 8.38678 6.79074C8.24598 6.88257 8.08127 6.98877 7.89744 7.10623C7.74024 7.20639 7.52729 7.30023 7.26426 7.38519C7.00764 7.46823 6.74708 7.51034 6.48991 7.51034C6.23274 7.51034 5.97227 7.46823 5.71538 7.38519C5.45262 7.30032 5.23967 7.20648 5.08266 7.10632C4.90056 6.98996 4.73577 6.88376 4.59285 6.79065C4.36434 6.64169 4.24578 6.59143 4.12328 6.59143C3.81127 6.59143 3.51977 6.64426 3.25674 6.74844C2.99288 6.8529 2.76446 6.99637 2.57779 7.17499C2.39953 7.34564 2.24051 7.55282 2.10537 7.79077C1.9751 8.02011 1.86963 8.25933 1.79199 8.50185C1.71701 8.73632 1.6543 8.99276 1.60559 9.26412C1.55734 9.5331 1.52457 9.78826 1.50836 10.0226C1.49243 10.2522 1.48438 10.4906 1.48438 10.7312C1.48438 11.3576 1.6835 11.8648 2.07617 12.2387C2.46399 12.6078 2.97714 12.795 3.60116 12.795H9.37921C10.0032 12.795 10.5162 12.6079 10.9041 12.2387C11.2969 11.865 11.496 11.3578 11.496 10.7312C11.4959 10.4894 11.4878 10.2509 11.4717 10.0224Z" fill="#0C5947"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_504_2359">
                      <rect width="12" height="12" fill="white" transform="translate(0.5 0.794983)"/>
                    </clipPath>
                  </defs>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <g clip-path="url(#clip0_504_2359)">
                  <path d="M6.41448 6.57542C7.2086 6.57542 7.89625 6.2906 8.45811 5.72865C9.01997 5.16679 9.30479 4.47933 9.30479 3.68511C9.30479 2.89117 9.01997 2.20361 8.45802 1.64157C7.89607 1.0798 7.20851 0.794983 6.41448 0.794983C5.62026 0.794983 4.93279 1.0798 4.37094 1.64166C3.80908 2.20352 3.52417 2.89107 3.52417 3.68511C3.52417 4.47933 3.80908 5.16688 4.37103 5.72874C4.93298 6.29051 5.62054 6.57542 6.41448 6.57542Z" fill="#0C5947" fill-opacity="0.7"/>
                  <path d="M11.4717 10.0224C11.4555 9.78853 11.4228 9.53347 11.3745 9.26412C11.3258 8.99276 11.2631 8.73623 11.188 8.50176C11.1105 8.25942 11.005 8.02011 10.8746 7.79077C10.7393 7.55273 10.5804 7.34546 10.402 7.17489C10.2155 6.99646 9.98721 6.853 9.72317 6.74835C9.46005 6.64426 9.16846 6.59152 8.85654 6.59152C8.73404 6.59152 8.61557 6.64178 8.38678 6.79074C8.24598 6.88257 8.08127 6.98877 7.89744 7.10623C7.74024 7.20639 7.52729 7.30023 7.26426 7.38519C7.00764 7.46823 6.74708 7.51034 6.48991 7.51034C6.23274 7.51034 5.97227 7.46823 5.71538 7.38519C5.45262 7.30032 5.23967 7.20648 5.08266 7.10632C4.90056 6.98996 4.73577 6.88376 4.59285 6.79065C4.36434 6.64169 4.24578 6.59143 4.12328 6.59143C3.81127 6.59143 3.51977 6.64426 3.25674 6.74844C2.99288 6.8529 2.76446 6.99637 2.57779 7.17499C2.39953 7.34564 2.24051 7.55282 2.10537 7.79077C1.9751 8.02011 1.86963 8.25933 1.79199 8.50185C1.71701 8.73632 1.6543 8.99276 1.60559 9.26412C1.55734 9.5331 1.52457 9.78826 1.50836 10.0226C1.49243 10.2522 1.48438 10.4906 1.48438 10.7312C1.48438 11.3576 1.6835 11.8648 2.07617 12.2387C2.46399 12.6078 2.97714 12.795 3.60116 12.795H9.37921C10.0032 12.795 10.5162 12.6079 10.9041 12.2387C11.2969 11.865 11.496 11.3578 11.496 10.7312C11.4959 10.4894 11.4878 10.2509 11.4717 10.0224Z" fill="#0C5947"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_504_2359">
                      <rect width="12" height="12" fill="white" transform="translate(0.5 0.794983)"/>
                    </clipPath>
                  </defs>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <g clip-path="url(#clip0_504_2359)">
                  <path d="M6.41448 6.57542C7.2086 6.57542 7.89625 6.2906 8.45811 5.72865C9.01997 5.16679 9.30479 4.47933 9.30479 3.68511C9.30479 2.89117 9.01997 2.20361 8.45802 1.64157C7.89607 1.0798 7.20851 0.794983 6.41448 0.794983C5.62026 0.794983 4.93279 1.0798 4.37094 1.64166C3.80908 2.20352 3.52417 2.89107 3.52417 3.68511C3.52417 4.47933 3.80908 5.16688 4.37103 5.72874C4.93298 6.29051 5.62054 6.57542 6.41448 6.57542Z" fill="#0C5947" fill-opacity="0.7"/>
                  <path d="M11.4717 10.0224C11.4555 9.78853 11.4228 9.53347 11.3745 9.26412C11.3258 8.99276 11.2631 8.73623 11.188 8.50176C11.1105 8.25942 11.005 8.02011 10.8746 7.79077C10.7393 7.55273 10.5804 7.34546 10.402 7.17489C10.2155 6.99646 9.98721 6.853 9.72317 6.74835C9.46005 6.64426 9.16846 6.59152 8.85654 6.59152C8.73404 6.59152 8.61557 6.64178 8.38678 6.79074C8.24598 6.88257 8.08127 6.98877 7.89744 7.10623C7.74024 7.20639 7.52729 7.30023 7.26426 7.38519C7.00764 7.46823 6.74708 7.51034 6.48991 7.51034C6.23274 7.51034 5.97227 7.46823 5.71538 7.38519C5.45262 7.30032 5.23967 7.20648 5.08266 7.10632C4.90056 6.98996 4.73577 6.88376 4.59285 6.79065C4.36434 6.64169 4.24578 6.59143 4.12328 6.59143C3.81127 6.59143 3.51977 6.64426 3.25674 6.74844C2.99288 6.8529 2.76446 6.99637 2.57779 7.17499C2.39953 7.34564 2.24051 7.55282 2.10537 7.79077C1.9751 8.02011 1.86963 8.25933 1.79199 8.50185C1.71701 8.73632 1.6543 8.99276 1.60559 9.26412C1.55734 9.5331 1.52457 9.78826 1.50836 10.0226C1.49243 10.2522 1.48438 10.4906 1.48438 10.7312C1.48438 11.3576 1.6835 11.8648 2.07617 12.2387C2.46399 12.6078 2.97714 12.795 3.60116 12.795H9.37921C10.0032 12.795 10.5162 12.6079 10.9041 12.2387C11.2969 11.865 11.496 11.3578 11.496 10.7312C11.4959 10.4894 11.4878 10.2509 11.4717 10.0224Z" fill="#0C5947"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_504_2359">
                      <rect width="12" height="12" fill="white" transform="translate(0.5 0.794983)"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <span class="service-head__value">Ideal for couples</span>
            </div>

            <div class="service-body">
              <div class="service-title">Date Night Package</div>
              <div class="service-options booking-list">
                <div class="service-options__item booking-list__item">90-minute private session</div>
                <div class="service-options__item booking-list__item">1 Private Beer Therapy™ Room</div>
                <div class="service-options__item booking-list__item">Includes beer or sparkling wine</div>
              </div>
            </div>

            <div class="service-footer">
              <div class="service-price">Starts from <span>$249</span> for 2 adults</div>
              <button class="service-btn link-btn dark booking-btn">Select</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Packages -->
      <div class="step packages" data-title='package'>
        <!-- Title -->
        <div class="packages-title booking-title">Choose a packages</div>

        <!-- List -->
        <div class="packages-list">
          <!-- Item -->
          <div class="package">
            <div class="package-body">
              <div class="package-image">
                <img src="https://oakwell.com/wp-content/uploads/2023/07/lr-img-3.webp" alt="">
              </div>

              <div class="package-title">Date Night Package w/ Sparkling Wine</div>

              <div class="package-list booking-list">
                <div class="package-list__item booking-list__item">Exclusive 90-minute access to your own private Beer Therapy™ Room</div>
                <div class="package-list__item booking-list__item">Includes a personal beer bath, infrared sauna, and rain shower</div>
                <div class="package-list__item booking-list__item">Complete with romantic candles, rose petals, and gourmet chocolates, & sparkling wine</div>
              </div>
            </div>

            <div class="package-footer">
              <div class="package-price">
                <span class="package-price__value">$249.00</span>
                <span class="package-price__caption">for 2 adults</span>
              </div>

              <button class="package-btn link-btn dark booking-btn">Book</button>
            </div>
          </div>

          <!-- Item -->
          <div class="package">
            <div class="package-body">
              <div class="package-image">
                <img src="https://oakwell.com/wp-content/uploads/2023/07/lr-img-3.webp" alt="">
              </div>

              <div class="package-title">Date Night Package w/ Sparkling Wine</div>

              <div class="package-list booking-list">
                <div class="package-list__item booking-list__item">Exclusive 90-minute access to your own private Beer Therapy™ Room</div>
                <div class="package-list__item booking-list__item">Includes a personal beer bath, infrared sauna, and rain shower</div>
                <!-- TODO tooltip logic -->
                <div class="package-list__item booking-list__item">
                  Complete with romantic candles, rose petals, and gourmet chocolates & 
                  <span class='tooltip'>
                    <span class='tooltip-trigger'>$30&nbsp;beverage&nbsp;credit</span>
                    <span class='tooltip-body'>The $30 beverage credit can be used on any beverage offered in our taproom. The Beer Therapy™ Room comes with 1 beverage credit. Additional beverages will be charged accordingly <i></i></span>
                  </span>
                </div>
              </div>
            </div>

            <div class="package-footer">
              <div class="package-price">
                <span class="package-price__value">$249.00</span>
                <span class="package-price__caption">for 2 adults</span>
              </div>

              <button class="package-btn link-btn dark booking-btn">Book</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Addons -->
      <div class="step addons" data-title='additional services'>
        <!-- Title -->
        <div class="addons-title booking-title">Add to your appointment</div>

        <!-- List -->
        <div class="addons-list">
          <!-- Item -->
          <div class="addon">
            <div class="addon-image">
              <img src="https://oakwell.com/wp-content/uploads/2023/07/lr-img-3.webp" alt="">
            </div>
            
            <div class="addon-info">
              <div class="addon-head">
                <div class="addon-title">French Sparkling Wine</div>

                <div class="addon-checkbox">
                  <svg class='addon-checkbox_inactive' xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path d="M15 23.545H9C3.57 23.545 1.25 21.225 1.25 15.795V9.79498C1.25 4.36498 3.57 2.04498 9 2.04498H15C20.43 2.04498 22.75 4.36498 22.75 9.79498V15.795C22.75 21.225 20.43 23.545 15 23.545ZM9 3.54498C4.39 3.54498 2.75 5.18498 2.75 9.79498V15.795C2.75 20.405 4.39 22.045 9 22.045H15C19.61 22.045 21.25 20.405 21.25 15.795V9.79498C21.25 5.18498 19.61 3.54498 15 3.54498H9Z" fill="black"/>
                  </svg>
                  <svg class='addon-checkbox_active' xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path d="M18 3.33014H6C3.79086 3.33014 2 5.121 2 7.33014V18.3301C2 20.5393 3.79086 22.3301 6 22.3301H18C20.2091 22.3301 22 20.5393 22 18.3301V7.33014C22 5.121 20.2091 3.33014 18 3.33014Z" fill="#0C5947"/>
                    <path d="M15 23.545H9C3.57 23.545 1.25 21.225 1.25 15.795V9.79498C1.25 4.36498 3.57 2.04498 9 2.04498H15C20.43 2.04498 22.75 4.36498 22.75 9.79498V15.795C22.75 21.225 20.43 23.545 15 23.545ZM9 3.54498C4.39 3.54498 2.75 5.18498 2.75 9.79498V15.795C2.75 20.405 4.39 22.045 9 22.045H15C19.61 22.045 21.25 20.405 21.25 15.795V9.79498C21.25 5.18498 19.61 3.54498 15 3.54498H9Z" fill="#0C5947"/>
                    <path d="M10.5814 16.3751C10.3814 16.3751 10.1914 16.2951 10.0514 16.1551L7.22141 13.3251C6.93141 13.0351 6.93141 12.5551 7.22141 12.2651C7.51141 11.9751 7.99141 11.9751 8.28141 12.2651L10.5814 14.5651L15.7214 9.42508C16.0114 9.13508 16.4914 9.13508 16.7814 9.42508C17.0714 9.71508 17.0714 10.1951 16.7814 10.4851L11.1114 16.1551C10.9714 16.2951 10.7814 16.3751 10.5814 16.3751Z" fill="#DDF2D0"/>
                  </svg>
                </div>
              </div>

              <div class="addon-descr">
                Elevate your celebration with a bottle of Crémant d'Alsace
              </div>

              <div class="addon-price">
                <span class="addon-price__value">+ $45.00</span>
                <span class="addon-price__caption">per item</span>
              </div>
            </div>
          </div>

          <div class="addon">
            <div class="addon-image">
              <img src="https://oakwell.com/wp-content/uploads/2023/07/lr-img-3.webp" alt="">
            </div>
            
            <div class="addon-info">
              <div class="addon-head">
                <div class="addon-title">French Sparkling Wine</div>

                <div class="addon-checkbox">
                  <svg class='addon-checkbox_inactive' xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path d="M15 23.545H9C3.57 23.545 1.25 21.225 1.25 15.795V9.79498C1.25 4.36498 3.57 2.04498 9 2.04498H15C20.43 2.04498 22.75 4.36498 22.75 9.79498V15.795C22.75 21.225 20.43 23.545 15 23.545ZM9 3.54498C4.39 3.54498 2.75 5.18498 2.75 9.79498V15.795C2.75 20.405 4.39 22.045 9 22.045H15C19.61 22.045 21.25 20.405 21.25 15.795V9.79498C21.25 5.18498 19.61 3.54498 15 3.54498H9Z" fill="black"/>
                  </svg>
                  <svg class='addon-checkbox_active' xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path d="M18 3.33014H6C3.79086 3.33014 2 5.121 2 7.33014V18.3301C2 20.5393 3.79086 22.3301 6 22.3301H18C20.2091 22.3301 22 20.5393 22 18.3301V7.33014C22 5.121 20.2091 3.33014 18 3.33014Z" fill="#0C5947"/>
                    <path d="M15 23.545H9C3.57 23.545 1.25 21.225 1.25 15.795V9.79498C1.25 4.36498 3.57 2.04498 9 2.04498H15C20.43 2.04498 22.75 4.36498 22.75 9.79498V15.795C22.75 21.225 20.43 23.545 15 23.545ZM9 3.54498C4.39 3.54498 2.75 5.18498 2.75 9.79498V15.795C2.75 20.405 4.39 22.045 9 22.045H15C19.61 22.045 21.25 20.405 21.25 15.795V9.79498C21.25 5.18498 19.61 3.54498 15 3.54498H9Z" fill="#0C5947"/>
                    <path d="M10.5814 16.3751C10.3814 16.3751 10.1914 16.2951 10.0514 16.1551L7.22141 13.3251C6.93141 13.0351 6.93141 12.5551 7.22141 12.2651C7.51141 11.9751 7.99141 11.9751 8.28141 12.2651L10.5814 14.5651L15.7214 9.42508C16.0114 9.13508 16.4914 9.13508 16.7814 9.42508C17.0714 9.71508 17.0714 10.1951 16.7814 10.4851L11.1114 16.1551C10.9714 16.2951 10.7814 16.3751 10.5814 16.3751Z" fill="#DDF2D0"/>
                  </svg>
                </div>
              </div>

              <div class="addon-descr">
                Elevate your celebration with a bottle of Crémant d'Alsace
              </div>

              <div class="addon-price">
                <span class="addon-price__value">+ $45.00</span>
                <span class="addon-price__caption">per item</span>
              </div>
            </div>
          </div>

          <div class="addon">
            <div class="addon-image">
              <img src="https://oakwell.com/wp-content/uploads/2023/07/lr-img-3.webp" alt="">
            </div>
            
            <div class="addon-info">
              <div class="addon-head">
                <div class="addon-title">French Sparkling Wine</div>

                <div class="addon-checkbox">
                  <svg class='addon-checkbox_inactive' xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path d="M15 23.545H9C3.57 23.545 1.25 21.225 1.25 15.795V9.79498C1.25 4.36498 3.57 2.04498 9 2.04498H15C20.43 2.04498 22.75 4.36498 22.75 9.79498V15.795C22.75 21.225 20.43 23.545 15 23.545ZM9 3.54498C4.39 3.54498 2.75 5.18498 2.75 9.79498V15.795C2.75 20.405 4.39 22.045 9 22.045H15C19.61 22.045 21.25 20.405 21.25 15.795V9.79498C21.25 5.18498 19.61 3.54498 15 3.54498H9Z" fill="black"/>
                  </svg>
                  <svg class='addon-checkbox_active' xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path d="M18 3.33014H6C3.79086 3.33014 2 5.121 2 7.33014V18.3301C2 20.5393 3.79086 22.3301 6 22.3301H18C20.2091 22.3301 22 20.5393 22 18.3301V7.33014C22 5.121 20.2091 3.33014 18 3.33014Z" fill="#0C5947"/>
                    <path d="M15 23.545H9C3.57 23.545 1.25 21.225 1.25 15.795V9.79498C1.25 4.36498 3.57 2.04498 9 2.04498H15C20.43 2.04498 22.75 4.36498 22.75 9.79498V15.795C22.75 21.225 20.43 23.545 15 23.545ZM9 3.54498C4.39 3.54498 2.75 5.18498 2.75 9.79498V15.795C2.75 20.405 4.39 22.045 9 22.045H15C19.61 22.045 21.25 20.405 21.25 15.795V9.79498C21.25 5.18498 19.61 3.54498 15 3.54498H9Z" fill="#0C5947"/>
                    <path d="M10.5814 16.3751C10.3814 16.3751 10.1914 16.2951 10.0514 16.1551L7.22141 13.3251C6.93141 13.0351 6.93141 12.5551 7.22141 12.2651C7.51141 11.9751 7.99141 11.9751 8.28141 12.2651L10.5814 14.5651L15.7214 9.42508C16.0114 9.13508 16.4914 9.13508 16.7814 9.42508C17.0714 9.71508 17.0714 10.1951 16.7814 10.4851L11.1114 16.1551C10.9714 16.2951 10.7814 16.3751 10.5814 16.3751Z" fill="#DDF2D0"/>
                  </svg>
                </div>
              </div>

              <div class="addon-descr">
                Elevate your celebration with a bottle of Crémant d'Alsace
              </div>

              <div class="addon-price">
                <span class="addon-price__value">+ $45.00</span>
                <span class="addon-price__caption">per item</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Note -->
        <div class="note addons-note">
          <div class="note-title booking-title">Additional Beverages</div>
          <div class="note-descr ff-dm-sans">Beverages available for purchase during your session in our taproom</div>
        </div>

        <!-- Continue button -->
        <button class="addons-btn link-btn dark booking-btn">Continue</button>
      </div>

      <!-- Dates -->
      <div class="step picker" data-title='date and time of visit'>
        <!-- Title -->
        <div class="picker-title booking-title">Pick a date and time</div>

        <!-- Row -->
        <div class="picker-row">
          <!-- Plate -->
          <div class="plate picker-plate">
            <div class="picker-calendar">
              <div class="picker-calendar-js"></div>
              <div class="picker-calendar__caption">Choose date</div>
            </div>

            <!-- Choose time -->
            <div class="picker-times">
              <!-- Time selector -->
              <div class="picker-times__choose">
                <div class="picker-times__title booking-title">Select time</div>
                <div class="picker-times__caption">Time Zone: Mountain time (GMT-06:00)</div>

                <!-- List -->
                <div class="picker-times__list">
                  <div class="picker-times__item">8:30 AM</div>
                  <div class="picker-times__item">8:30 AM</div>
                  <div class="picker-times__item">9:30 AM</div>
                  <div class="picker-times__item">11:30 AM</div>
                  <div class="picker-times__item">8:30 AM</div>
                  <div class="picker-times__item">8:30 AM</div>
                  <div class="picker-times__item">8:30 AM</div>
                  <div class="picker-times__item">8:30 AM</div>
                </div>
              </div>

              <!-- Unavailable time | Note -->
              <div class="note picker-unavailable" style='display: none;'>
                <div class="note-title booking-title">
                  Sorry, no available time slots on this day 
                </div>

                <div class="note-descr ff-dm-sans">
                  <span class='note-descr_marked'>Have a date in mind that isn’t currently available?</span> Call or text your name and desired dates to <a class='note-descr_marked' href='tel:7208101484'>(720) 810-1484</a> to be added to our waitlist
                </div>
              </div>

              <!-- Note -->
              <div class="note picker-note_inner">
                <div class="note-title booking-title">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path d="M12 23.545C6.07 23.545 1.25 18.725 1.25 12.795C1.25 6.86498 6.07 2.04498 12 2.04498C17.93 2.04498 22.75 6.86498 22.75 12.795C22.75 18.725 17.93 23.545 12 23.545ZM12 3.54498C6.9 3.54498 2.75 7.69498 2.75 12.795C2.75 17.895 6.9 22.045 12 22.045C17.1 22.045 21.25 17.895 21.25 12.795C21.25 7.69498 17.1 3.54498 12 3.54498Z" fill="#0C5947"/>
                    <path d="M15.7106 16.7247C15.5806 16.7247 15.4506 16.6947 15.3306 16.6147L12.2306 14.7647C11.4606 14.3047 10.8906 13.2947 10.8906 12.4047V8.30475C10.8906 7.89475 11.2306 7.55475 11.6406 7.55475C12.0506 7.55475 12.3906 7.89475 12.3906 8.30475V12.4047C12.3906 12.7647 12.6906 13.2947 13.0006 13.4747L16.1006 15.3247C16.4606 15.5347 16.5706 15.9947 16.3606 16.3547C16.2106 16.5947 15.9606 16.7247 15.7106 16.7247Z" fill="#0C5947"/>
                  </svg>
                  Waitlist
                </div>

                <div class="note-descr ff-dm-sans"><span class='note-descr_marked'>Have a date in mind that isn’t currently available?</span> Call or text your name and desired dates to <a class='note-descr_marked' href='tel:7208101484'>(720) 810-1484</a> to be added to our waitlist</div>
              </div>

              <!-- Button to continue -->
              <button class="picker-times__btn picker-btn_disable link-btn dark booking-btn">Continue</button>
              <!-- TODO remove toggler -->
              <button class='temp-toggler link-btn dark booking-btn' style='margin-top: 7px'>On/Off available time</button>
            </div>
          </div>

          <!-- Continue button -->
          <button class="picker-btn picker-btn_disable picker-btn_placeholder link-btn dark booking-btn">Continue</button>

          <!-- Note -->
          <div class="note picker-note">
            <div class="note-title booking-title">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M12 23.545C6.07 23.545 1.25 18.725 1.25 12.795C1.25 6.86498 6.07 2.04498 12 2.04498C17.93 2.04498 22.75 6.86498 22.75 12.795C22.75 18.725 17.93 23.545 12 23.545ZM12 3.54498C6.9 3.54498 2.75 7.69498 2.75 12.795C2.75 17.895 6.9 22.045 12 22.045C17.1 22.045 21.25 17.895 21.25 12.795C21.25 7.69498 17.1 3.54498 12 3.54498Z" fill="#0C5947"/>
                <path d="M15.7106 16.7247C15.5806 16.7247 15.4506 16.6947 15.3306 16.6147L12.2306 14.7647C11.4606 14.3047 10.8906 13.2947 10.8906 12.4047V8.30475C10.8906 7.89475 11.2306 7.55475 11.6406 7.55475C12.0506 7.55475 12.3906 7.89475 12.3906 8.30475V12.4047C12.3906 12.7647 12.6906 13.2947 13.0006 13.4747L16.1006 15.3247C16.4606 15.5347 16.5706 15.9947 16.3606 16.3547C16.2106 16.5947 15.9606 16.7247 15.7106 16.7247Z" fill="#0C5947"/>
              </svg>
              Waitlist
            </div>

            <div class="note-descr ff-dm-sans"><span class='note-descr_marked'>Have a date in mind that isn’t currently available?</span> Call or text your name and desired dates to <a class='note-descr_marked' href='tel:7208101484'>(720) 810-1484</a> to be added to our waitlist</div>
          </div>
        </div>
      </div>

      <!-- Summary -->
      <div class="step summary" data-title='contact information'>
        <!-- Title -->
        <div class="summary-title booking-title">Booking summary</div>

        <!-- Plate -->
        <div class="plate summary-plate">
          <div class="summary-head">
            <div class="summary-head__title">Date Night Package w/ Sparkling Wine</div>

            <div class="summary-meta">
              <div class="summary-meta__line">
                <span class="summary-meta__caption">DUE ON June 18, 2024:</span>
                <span class="summary-meta__value">$269</span>
              </div>
              <div class="summary-meta__line">
                <span class="summary-meta__caption">Pay now:</span>
                <span class="summary-meta__value">$0</span>
              </div>
            </div>
          </div>

          <div class="summary-body">
            <!-- Brief summary -->
            <div class="summary-brief">
              <div class="summary-brief__item">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                  <path d="M6.66699 5.58665C6.32533 5.58665 6.04199 5.30332 6.04199 4.96165V2.46165C6.04199 2.11999 6.32533 1.83665 6.66699 1.83665C7.00866 1.83665 7.29199 2.11999 7.29199 2.46165V4.96165C7.29199 5.30332 7.00866 5.58665 6.66699 5.58665Z" fill="#0C5947"/>
                  <path d="M13.333 5.58665C12.9913 5.58665 12.708 5.30332 12.708 4.96165V2.46165C12.708 2.11999 12.9913 1.83665 13.333 1.83665C13.6747 1.83665 13.958 2.11999 13.958 2.46165V4.96165C13.958 5.30332 13.6747 5.58665 13.333 5.58665Z" fill="#0C5947"/>
                  <path d="M7.08333 12.8783C6.975 12.8783 6.86667 12.8533 6.76667 12.8117C6.65833 12.77 6.575 12.7116 6.49167 12.6366C6.34167 12.4783 6.25 12.27 6.25 12.045C6.25 11.9367 6.275 11.8283 6.31667 11.7283C6.35833 11.6283 6.41667 11.5367 6.49167 11.4533C6.575 11.3783 6.65833 11.32 6.76667 11.2783C7.06667 11.1533 7.44167 11.22 7.675 11.4533C7.825 11.6117 7.91667 11.8283 7.91667 12.045C7.91667 12.095 7.90833 12.1533 7.9 12.2117C7.89167 12.2617 7.875 12.3117 7.85 12.3617C7.83333 12.4117 7.80833 12.4617 7.775 12.5117C7.75 12.5533 7.70833 12.595 7.675 12.6366C7.51667 12.7866 7.3 12.8783 7.08333 12.8783Z" fill="#0C5947"/>
                  <path d="M10.0003 12.8783C9.89199 12.8783 9.78366 12.8533 9.68366 12.8117C9.57532 12.77 9.49199 12.7116 9.40866 12.6366C9.25866 12.4783 9.16699 12.27 9.16699 12.045C9.16699 11.9367 9.19199 11.8283 9.23366 11.7283C9.27533 11.6283 9.33366 11.5367 9.40866 11.4533C9.49199 11.3783 9.57532 11.32 9.68366 11.2783C9.98366 11.145 10.3587 11.22 10.592 11.4533C10.742 11.6117 10.8337 11.8283 10.8337 12.045C10.8337 12.095 10.8253 12.1533 10.817 12.2117C10.8087 12.2617 10.792 12.3117 10.767 12.3617C10.7503 12.4117 10.7253 12.4616 10.692 12.5116C10.667 12.5533 10.6253 12.595 10.592 12.6366C10.4337 12.7866 10.217 12.8783 10.0003 12.8783Z" fill="#0C5947"/>
                  <path d="M12.9163 12.8783C12.808 12.8783 12.6997 12.8533 12.5997 12.8117C12.4913 12.77 12.408 12.7116 12.3247 12.6366C12.2913 12.595 12.258 12.5533 12.2247 12.5116C12.1913 12.4616 12.1663 12.4117 12.1497 12.3617C12.1247 12.3117 12.108 12.2617 12.0997 12.2117C12.0913 12.1533 12.083 12.095 12.083 12.045C12.083 11.8283 12.1747 11.6117 12.3247 11.4533C12.408 11.3783 12.4913 11.32 12.5997 11.2783C12.908 11.145 13.2747 11.22 13.508 11.4533C13.658 11.6117 13.7497 11.8283 13.7497 12.045C13.7497 12.095 13.7413 12.1533 13.733 12.2117C13.7247 12.2617 13.708 12.3117 13.683 12.3617C13.6663 12.4117 13.6413 12.4616 13.608 12.5116C13.583 12.5533 13.5413 12.595 13.508 12.6366C13.3497 12.7866 13.133 12.8783 12.9163 12.8783Z" fill="#0C5947"/>
                  <path d="M7.08333 15.795C6.975 15.795 6.86667 15.77 6.76667 15.7283C6.66667 15.6867 6.575 15.6283 6.49167 15.5533C6.34167 15.395 6.25 15.1783 6.25 14.9617C6.25 14.8533 6.275 14.745 6.31667 14.645C6.35833 14.5367 6.41667 14.445 6.49167 14.37C6.8 14.0617 7.36667 14.0617 7.675 14.37C7.825 14.5283 7.91667 14.745 7.91667 14.9617C7.91667 15.1783 7.825 15.395 7.675 15.5533C7.51667 15.7033 7.3 15.795 7.08333 15.795Z" fill="#0C5947"/>
                  <path d="M10.0003 15.795C9.78366 15.795 9.56699 15.7033 9.40866 15.5533C9.25866 15.395 9.16699 15.1783 9.16699 14.9617C9.16699 14.8533 9.19199 14.745 9.23366 14.645C9.27533 14.5367 9.33366 14.445 9.40866 14.37C9.71699 14.0617 10.2837 14.0617 10.592 14.37C10.667 14.445 10.7253 14.5367 10.767 14.645C10.8087 14.745 10.8337 14.8533 10.8337 14.9617C10.8337 15.1783 10.742 15.395 10.592 15.5533C10.4337 15.7033 10.217 15.795 10.0003 15.795Z" fill="#0C5947"/>
                  <path d="M12.9163 15.795C12.6997 15.795 12.483 15.7033 12.3247 15.5533C12.2497 15.4783 12.1913 15.3867 12.1497 15.2784C12.108 15.1784 12.083 15.07 12.083 14.9617C12.083 14.8534 12.108 14.745 12.1497 14.645C12.1913 14.5367 12.2497 14.445 12.3247 14.37C12.5163 14.1784 12.808 14.0867 13.0747 14.145C13.133 14.1533 13.183 14.17 13.233 14.195C13.283 14.2117 13.333 14.2367 13.383 14.27C13.4247 14.295 13.4663 14.3367 13.508 14.37C13.658 14.5284 13.7497 14.745 13.7497 14.9617C13.7497 15.1784 13.658 15.395 13.508 15.5533C13.3497 15.7033 13.133 15.795 12.9163 15.795Z" fill="#0C5947"/>
                  <path d="M17.0837 8.99495H2.91699C2.57533 8.99495 2.29199 8.71162 2.29199 8.36995C2.29199 8.02828 2.57533 7.74495 2.91699 7.74495H17.0837C17.4253 7.74495 17.7087 8.02828 17.7087 8.36995C17.7087 8.71162 17.4253 8.99495 17.0837 8.99495Z" fill="#0C5947"/>
                  <path d="M13.3333 19.7533H6.66667C3.625 19.7533 1.875 18.0033 1.875 14.9617V7.87832C1.875 4.83665 3.625 3.08665 6.66667 3.08665H13.3333C16.375 3.08665 18.125 4.83665 18.125 7.87832V14.9617C18.125 18.0033 16.375 19.7533 13.3333 19.7533ZM6.66667 4.33665C4.28333 4.33665 3.125 5.49499 3.125 7.87832V14.9617C3.125 17.345 4.28333 18.5033 6.66667 18.5033H13.3333C15.7167 18.5033 16.875 17.345 16.875 14.9617V7.87832C16.875 5.49499 15.7167 4.33665 13.3333 4.33665H6.66667Z" fill="#0C5947"/>
                </svg>
                June 18, 2024, at 10:30 AM
              </div>

              <div class="summary-brief__item">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                  <path d="M7.63216 10.4783C7.60716 10.4783 7.5905 10.4783 7.5655 10.4783C7.52383 10.47 7.46549 10.47 7.41549 10.4783C4.99883 10.4033 3.17383 8.50332 3.17383 6.16165C3.17383 3.77832 5.11549 1.83665 7.49883 1.83665C9.88216 1.83665 11.8238 3.77832 11.8238 6.16165C11.8155 8.50332 9.98216 10.4033 7.65716 10.4783C7.64883 10.4783 7.64049 10.4783 7.63216 10.4783ZM7.49883 3.08665C5.80716 3.08665 4.42383 4.46999 4.42383 6.16165C4.42383 7.82832 5.72383 9.16999 7.38216 9.22832C7.43216 9.21999 7.5405 9.21999 7.64883 9.22832C9.28216 9.15332 10.5655 7.81165 10.5738 6.16165C10.5738 4.46999 9.1905 3.08665 7.49883 3.08665Z" fill="#0C5947"/>
                  <path d="M13.782 10.5866C13.757 10.5866 13.732 10.5866 13.707 10.5783C13.3653 10.6116 13.0153 10.37 12.982 10.0283C12.9487 9.68664 13.157 9.37831 13.4987 9.33664C13.5987 9.32831 13.707 9.32831 13.7987 9.32831C15.0153 9.26164 15.9653 8.26164 15.9653 7.03664C15.9653 5.76998 14.9403 4.74498 13.6737 4.74498C13.332 4.75331 13.0487 4.46998 13.0487 4.12831C13.0487 3.78664 13.332 3.50331 13.6737 3.50331C15.6237 3.50331 17.2153 5.09498 17.2153 7.04498C17.2153 8.96164 15.7153 10.5116 13.807 10.5866C13.7987 10.5866 13.7903 10.5866 13.782 10.5866Z" fill="#0C5947"/>
                  <path d="M7.64329 19.5866C6.00996 19.5866 4.36829 19.17 3.12663 18.3366C1.96829 17.57 1.33496 16.52 1.33496 15.3783C1.33496 14.2366 1.96829 13.1783 3.12663 12.4033C5.62663 10.745 9.67663 10.745 12.16 12.4033C13.31 13.17 13.9516 14.22 13.9516 15.3616C13.9516 16.5033 13.3183 17.5616 12.16 18.3366C10.91 19.17 9.27663 19.5866 7.64329 19.5866ZM3.81829 13.4533C3.01829 13.9866 2.58496 14.67 2.58496 15.3866C2.58496 16.095 3.02663 16.7783 3.81829 17.3033C5.89329 18.695 9.39329 18.695 11.4683 17.3033C12.2683 16.77 12.7016 16.0866 12.7016 15.37C12.7016 14.6616 12.26 13.9783 11.4683 13.4533C9.39329 12.07 5.89329 12.07 3.81829 13.4533Z" fill="#0C5947"/>
                  <path d="M15.2815 18.0867C14.9899 18.0867 14.7315 17.8867 14.6732 17.5867C14.6065 17.245 14.8232 16.92 15.1565 16.845C15.6815 16.7367 16.1649 16.5283 16.5399 16.2367C17.0149 15.8783 17.2732 15.4283 17.2732 14.9533C17.2732 14.4783 17.0149 14.0283 16.5482 13.6783C16.1815 13.395 15.7232 13.195 15.1815 13.07C14.8482 12.995 14.6315 12.6617 14.7065 12.32C14.7815 11.9867 15.1148 11.77 15.4565 11.845C16.1732 12.0033 16.7982 12.2867 17.3065 12.6783C18.0815 13.2617 18.5232 14.0867 18.5232 14.9533C18.5232 15.82 18.0732 16.645 17.2982 17.2367C16.7815 17.6367 16.1315 17.9283 15.4149 18.07C15.3649 18.0867 15.3232 18.0867 15.2815 18.0867Z" fill="#0C5947"/>
                </svg>
                For Two People, 90-Minute Session
              </div>

              <div class="summary-brief__item">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                  <path d="M3.7503 6.84123V17.67C3.7503 18.7037 4.59155 19.545 5.6253 19.545H13.1253C14.1591 19.545 15.0003 18.7037 15.0003 17.67V16.42H16.2503C17.2841 16.42 18.1253 15.5787 18.1253 14.545V9.54498C18.1253 8.51123 17.2841 7.66998 16.2503 7.66998H15.0003V6.84123C15.0009 6.84061 15.0022 6.83998 15.0028 6.83936C16.4209 5.27373 15.2559 2.84873 13.1253 2.84873C12.7734 2.84873 12.4328 2.91873 12.1191 3.05248C11.5853 2.06123 10.5491 1.41998 9.3753 1.41998C8.20155 1.41998 7.1653 2.06123 6.63155 3.05186C6.3178 2.91873 5.97655 2.84873 5.6253 2.84873C3.49655 2.84873 2.32843 5.27248 3.7478 6.83998C3.74843 6.84061 3.74968 6.84061 3.7503 6.84123ZM15.0003 8.91998H16.2503C16.5947 8.91998 16.8753 9.20061 16.8753 9.54498V14.545C16.8753 14.8894 16.5947 15.17 16.2503 15.17H15.0003V8.91998ZM13.7503 17.67C13.7503 18.0144 13.4697 18.295 13.1253 18.295H5.6253C5.28093 18.295 5.0003 18.0144 5.0003 17.67V7.04498H8.7503V8.85311C8.7503 9.87498 9.53968 10.795 10.6222 10.795C11.6666 10.795 12.5003 9.95123 12.5003 8.91998V7.04498H13.7503V17.67ZM5.6253 4.09873C5.96093 4.09873 6.27655 4.22186 6.51405 4.44498C6.67718 4.59811 6.90968 4.65186 7.12468 4.58748C7.33905 4.52248 7.50218 4.34686 7.55155 4.12873C7.74718 3.26936 8.49718 2.66998 9.3753 2.66998C10.2534 2.66998 11.0034 3.26936 11.1991 4.12811C11.2491 4.34686 11.4116 4.52186 11.6259 4.58686C11.8397 4.65123 12.0728 4.59748 12.2366 4.44436C12.4741 4.22123 12.7897 4.09811 13.1253 4.09811C14.0678 4.09811 14.6709 5.03623 14.2278 5.79436H12.5003C11.8109 5.79436 11.2503 6.35498 11.2503 7.04436V8.91936C11.2503 9.72561 10.0003 9.79373 10.0003 8.85248V7.04498C10.0003 6.35561 9.43968 5.79498 8.7503 5.79498H4.5228C4.0803 5.03748 4.68218 4.09873 5.6253 4.09873Z" fill="#0C5947"/>
                </svg>
                Private Beer Therapy Room
              </div>
            </div>

            <!-- Includes -->
            <div class="summary-includes">
              <div class="booking-title summary-includes__title">Includes:</div>
              <div class="summary-includes__list">
                1 pc. Charcuterie Box <span>•</span>Gourmet Chocolates <span>•</span>'Happy Anniversary' Banner <span>•</span>Candles and Rose Petals
              </div>
            </div>
          </div>

          <!-- Form -->
          <div class="summary-form">
            <!-- Title -->
            <div class="booking-title">Enter Contact Information</div>

            <!-- Form -->
            <div class="summary-form__inner book-form">
              <div class="summary-form__row book-form__row">
                <div class="summary-form__group book-form__group">
                  <label for="summary-firstname">First Name<span>*</span></label>
                  <input type="text" id="summary-firstname" name="summary-firstname" required>
                </div>
                <div class="summary-form__group book-form__group">
                  <label for="summary-lastname">Last Name<span>*</span></label>
                  <input type="text" id="summary-lastname" name="summary-lastname" required>
                </div>
              </div>

              <div class="summary-form__group book-form__group">
                <label for="summary-phone">Phone<span>*</span></label>
                <input type="tel" id="summary-phone" name="summary-phone" required>
              </div>

              <div class="summary-form__group book-form__group">
                <label for="summary-email">Email<span>*</span></label>
                <input type="email" id="summary-email" name="summary-email" required>
              </div>
              
              <div class="summary-form__group book-form__group">
                <label for="summary-zip">Zip Code<span>*</span></label>
                <input type="text" id="summary-zip" name="summary-zip" required>
              </div>
            </div>

            <!-- Button to continue -->
            <button class="summary-btn link-btn dark booking-btn">Reserve Without Paying</button>

            <!-- Required checkbox -->
            <div class="summary-checkbox">
              <div class="summary-checkbox__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                  <path d="M18 3.33014H6C3.79086 3.33014 2 5.121 2 7.33014V18.3301C2 20.5393 3.79086 22.3301 6 22.3301H18C20.2091 22.3301 22 20.5393 22 18.3301V7.33014C22 5.121 20.2091 3.33014 18 3.33014Z" fill="#0C5947"/>
                  <path d="M15 23.545H9C3.57 23.545 1.25 21.225 1.25 15.795V9.79498C1.25 4.36498 3.57 2.04498 9 2.04498H15C20.43 2.04498 22.75 4.36498 22.75 9.79498V15.795C22.75 21.225 20.43 23.545 15 23.545ZM9 3.54498C4.39 3.54498 2.75 5.18498 2.75 9.79498V15.795C2.75 20.405 4.39 22.045 9 22.045H15C19.61 22.045 21.25 20.405 21.25 15.795V9.79498C21.25 5.18498 19.61 3.54498 15 3.54498H9Z" fill="#0C5947"/>
                  <path d="M10.5814 16.3751C10.3814 16.3751 10.1914 16.2951 10.0514 16.1551L7.22141 13.3251C6.93141 13.0351 6.93141 12.5551 7.22141 12.2651C7.51141 11.9751 7.99141 11.9751 8.28141 12.2651L10.5814 14.5651L15.7214 9.42508C16.0114 9.13508 16.4914 9.13508 16.7814 9.42508C17.0714 9.71508 17.0714 10.1951 16.7814 10.4851L11.1114 16.1551C10.9714 16.2951 10.7814 16.3751 10.5814 16.3751Z" fill="#DDF2D0"/>
                </svg>
              </div>
              Check below to indicate that you have read and agree with Oakwell Beer Spa's cancellation policy, no-show policy, terms & conditions, electronic communications, and privacy policy. *
            </div>
          </div>
        </div>
      </div>

      <!-- Payment -->
      <div class="step payment" data-title='Services'>
        <!-- Title -->
        <div class="payment-title booking-title">Confirmation</div>

        <div class="payment-row">
          <!-- Plate -->
          <div class="plate payment-plate">
            <!-- Head -->
            <div class="payment-head">
              <div class="payment-head__info">
                <div class="payment-head__title">Secure Payment</div>
                <div class="payment-head__caption payment-caption">Please secure your booking by entering a valid card</div>
              </div>

              <!-- Price -->
              <div class="payment-price">
                <div class="payment-price__title">Pay now: <span>$0</span></div>
                <div class="payment-price__caption payment-caption">Don’t worry, you will not be changed at this time</div>
              </div>
            </div>


            <!-- Form wrapper -->
            <div class="payment-form">
              <!-- Form -->
              <div class="payment-form__inner book-form">
                <div class="payment-form__group book-form__group">
                  <label for="payment-card">Card Number<span>*</span></label>
                  <input type="text" id="payment-card" name="payment-card" required>
                </div>

                <div class="payment-form__row book-form__row">
                  <div class="payment-form__group book-form__group">
                    <label for="payment-date">MM/YY<span>*</span></label>
                    <input type="text" id="payment-date" name="payment-date" required>
                  </div>
                  
                  <div class="payment-form__group book-form__group">
                    <label for="payment-cvv">CVV<span>*</span></label>
                    <input type="text" id="payment-cvv" name="payment-cvv" required>
                  </div>
                </div>
              </div>

              <!-- Continue button -->
              <button class="payment-btn link-btn dark booking-btn">Confirm Reservation</button>

              <div class="payment-cancellation">
                <div class="payment-cancellation__title booking-title">Free cancellation</div>
                <div class="payment-cancellation__caption">Up to 24H before the appointment; 48H before Garage Party</div>
              </div>
            </div>
          </div>

          <!-- Policy -->
          <div class="policy payment-policy">
            <div class="policy__title booking-title">Cancellation Policy</div>

            <div class="policy__info">
              <div class='policy__item'>24 hour notice allows for free cancellation, except for Garage Parties where 48 hours is required</div>

              <div class='policy__item'>Late cancellations are subject to full charge + 20% gratuity</div>

              <div class='policy__item'>Fees charged to credit card on file; no gift card payments for fees, no refunds</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Sticky button-->
      <div class="steps-sticky">
        <button class="steps-sticky__btn link-btn dark booking-btn">Book Now</button>
      </div>
    </div>

    <!-- Tickers -->
    <div class="tickers tickers_mob ff-lato marquee-block marquee-js marquee-js-booking">
      <div class="marquee">
        <div class='tickers-item'>
          <div class='tickers-item__image'>
            <img src='https://oakwellstg.wpengine.com/wp-content/uploads/2024/04/logo-time.png' alt='Time ticker'>
          </div>
          <div class='tickers-item__info'>
            <div class='tickers-item__title'>Time’s</div>
            <div class='tickers-item__caption'>world’s greatest places</div>
          </div>
        </div>

        <div class='tickers-item'>
          <div class='tickers-item__image'>
            <img src='https://oakwellstg.wpengine.com/wp-content/uploads/2024/04/logo-entr.png' alt='Enterpreneur ticker'>
          </div>
          <div class='tickers-item__info'>
            <div class='tickers-item__title'>Enterpreneur</div>
            <div class='tickers-item__caption'>best mom & pop shop in usa</div>
          </div>
        </div>

        <div class='tickers-item'>
          <div class='tickers-item__image'>
            <img src='https://oakwellstg.wpengine.com/wp-content/uploads/2024/04/logo-5280.png' alt='5280 ticker'>
          </div>
          <div class='tickers-item__info'>
            <div class='tickers-item__title'>5280’s</div>
            <div class='tickers-item__caption'>best spa</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Init Tickers Marquee Logic -->
    <script>
      handleMarquee();

      function handleMarquee() {
        if (window.innerWidth < 992) {
          const waitForMarquee = setInterval(() => {
            if (typeof SiteAnimation !== 'undefined') {
              clearInterval(waitForMarquee)
              initBookingMarquee()
            }
          }, 200);
        } else {
          document.querySelector('.tickers').classList.remove('marquee-block', 'marquee-js', 'marquee-js-booking');
        }
      }

      function initBookingMarquee() {
        marqueeBooking = new class extends SiteAnimation {
          constructor() {
              super(), this.time = 40, this.timeSlow = 40, this.timeline = null
          }
          initMarquee() {
              var e = this.parent.querySelector(".marquee"),
                  t = this.parent.offsetWidth,
                  a = this.parent,
                  s = 4,
                  r = 0;
              for (this.timeline = gsap.timeline({
                      repeat: -1
                  }), a.style.width = (s + 4) * this.sum(e) + "px"; r < s;) this.parent.insertBefore(e.cloneNode(!0), e.prevSibling), r++;
              for (r = 0; r < this.parent.querySelectorAll(".marquee").length; r++) this.timeline.to(this.parent.querySelectorAll(".marquee")[r], this.time, {
                  x: -this.parent.querySelectorAll(".marquee")[r].offsetWidth,
                  ease: Linear.easeNone
              }, "-=this.time");
              window.initLazy()
          }
          sum(e) {
              for (var t = 0, a = 0; a < e.querySelectorAll(".tickers-item").length; a++) t += e.querySelectorAll(".tickers-item")[a].offsetWidth;
              return t
          }
          marqueeSlow() {
              this.timeline.duration(this.timeSlow)
          }
          marqueeNormal() {
              this.timeline.duration(this.time)
          }
          destroySticky() {
              this.parent.removeEventListener("mouseenter", () => {
                  this.marqueeSlow()
              }), this.parent.removeEventListener("mouseleave", () => {
                  this.marqueeNormal()
              })
          }
          init(e) {
              super.init("marqueeBooking"), this.parent = e, this.parent && (this.initMarquee(), this.parent.addEventListener("mouseenter", () => {
                  this.marqueeSlow()
              }), this.parent.addEventListener("mouseleave", () => {
                  this.marqueeNormal()
              }))
          }
          resize() {
              this.parent
          }
          destroy() {
              var e = !!(0 < arguments.length && arguments[0] !== void 0) && arguments[0];
              this.parent && this.destroySticky(), super.destroy(e)
          }
        }

        const targetEl = document.querySelector('.marquee-js-booking')
        requestAnimationFrame(() => marqueeBooking.init(targetEl))
      }
    </script>

    <!-- Policy -->
    <div class="policy steps-policy">
      <div class="policy__title booking-title">Cancellation Policy</div>

      <div class="policy__info">
        <div class='policy__item'>24 hour notice allows for free cancellation, except for Garage Parties where 48 hours is required</div>

        <div class='policy__item'>Late cancellations are subject to full charge + 20% gratuity</div>

        <div class='policy__item'>Fees charged to credit card on file; no gift card payments for fees, no refunds</div>
      </div>
    </div>

    <!-- Reviews added as widget -->
    <div class="reviews">
      <svg class='reviews-decor reviews-decor__before' xmlns="http://www.w3.org/2000/svg" width="375" height="78" viewBox="0 0 375 78" fill="none">
        <path d="M0 77.6276V0.769623L375 0.769623V43.9405C336.458 16.137 335.243 51.5866 292.882 57.6986C225.53 67.4164 126 -7.70496 0 77.6276Z" fill="#FBF6F1"/>
      </svg>

      <?php the_content(); ?>

      <svg class='reviews-decor reviews-decor__after' xmlns="http://www.w3.org/2000/svg" width="375" height="60" viewBox="0 0 375 60" fill="none">
        <path d="M399.469 0.795048V59.795H0.00927734V34.9473C62.2622 53.8345 142.621 59.024 200.351 46.3788C267.572 31.6485 281.11 9.7405 399.469 0.795048Z" fill="#FBF6F1"/>
      </svg>
    </div>
 
    <!-- FAQ -->
    <div class="faq-block" data-aos="fade-up">
      <div class="accordion-faq js-accordion" data-active-class="open" data-open-first="false" data-hide-siblings="false" data-breakpoint="640" data-scroll-to-opened="false">
        <div class="col"> 
          <?php if ( $faqs_l ) : ?> 
            <?php foreach ( $faqs_l as $key_l => $faq_l ) : ?>
              <div class="accordion-faq__item js-accordion-item <?php echo ( ($key_l == 0) ? 'active' : '' ); ?>">
                <div class="accordion-faq__title js-accordion-title">
                  <div class="a-text"> 
                    <?php echo esc_html($faq_l['question_faq_left']); ?>
                  </div>
                  <div class="a-icon"></div>
                </div>

                <div class="accordion-faq__dropdown js-accordion-dropdown" <?php echo ( ($key_l == 0) ? 'style="display: block;"' : '' ); ?>>
                  <div class="text-section"> 
                    <?php echo $faq_l['answer_faq_left']; ?>
                  </div>
                </div>
              </div> 
            <?php endforeach; ?>
          <?php endif; ?>
        </div>

        <div class="col"> 
          <?php if ( $faqs_r ) : ?>
            <?php foreach ( $faqs_r as $key_r => $faq_r ) : ?>
              <div class="accordion-faq__item js-accordion-item">
                <div class="accordion-faq__title js-accordion-title">
                  <div class="a-text"> 
                    <?php echo esc_html($faq_r['question_faq_right']); ?>
                  </div>
                  <div class="a-icon"></div>
                </div>

                <div class="accordion-faq__dropdown js-accordion-dropdown">
                  <div class="text-section"> 
                    <?php echo $faq_r['answer_faq_right']; ?>
                  </div>
                </div>
              </div> 
            <?php endforeach; ?>
          <?php endif; ?>
        </div>
      </div>
    </div>
  </div>
</div> 

<!-- Bookings Handler -->
<script>
  class Booking {
    static logs = [];
    static currentStep = 0;
    static steps = document.querySelectorAll('.step');

    static stickyEl = document.querySelector('.steps-sticky');
    static stickyBtn = document.querySelector('.steps-sticky__btn');
    static progressEl = document.querySelector('.progress-line span');

    static init() {
      for (const [index, stepEl] of Array.from(this.steps).entries()) {
        stepEl.dataset.step = index
      }

      this.initStep1();
      this.initStep2();
      this.initStep3();
      this.initStep4();
      this.initStep5();

      // this.buildLogsMarkup()
      this.moveToStep(true)

      document.addEventListener('focusin', (e) => {
        const parent = e.target.closest('.book-form__group');

        if (parent) {
          parent.classList.add('book-focus');
        }
      })

      document.addEventListener('focusout', (e) => {
        const parent = e.target.closest('.book-form__group');

        if (parent && parent.querySelector('input').value.trim() === '') {
          parent.classList.remove('book-focus');
        }

        for (const groupEl of document.querySelectorAll('.book-form__group')) {
          if (groupEl.querySelector('input')?.value.trim() === '') {
            groupEl.classList.remove('book-focus');
          } else {
            groupEl.classList.add('book-focus');
          }
        }
      })

      // show sticky el if scroll after active step
      window.addEventListener('scroll', () => {
        const offset = this.steps[this.currentStep].offsetTop + this.steps[this.currentStep].offsetHeight;
        
        if (window.scrollY > offset) {
          this.stickyEl.classList.add('active')
        } else {
          this.stickyEl.classList.remove('active')
        }
      })

      this.stickyBtn.addEventListener('click', () => {
        if (this.currentStep === 3 && document.querySelector('.picker-times__btn').classList.contains('picker-btn_disable')){
          $('html, body').animate({
            scrollTop: $('.picker-calendar-js').offset().top - 50
          }, 500);

          return;
        }

        if ([4,5].includes(this.currentStep)) {
          // TODO: scroll only if error 
          let offset = this.currentStep === 4 ? $('.summary-form').offset().top - 75 : $('.payment-plate').offset().top - 15;

          $('html, body').animate({
            scrollTop: offset
          }, 500);

          return;
        }

        this.stickyEl.style.display = 'none'

        this.nextStep()

        setTimeout(() => {
          this.stickyEl.removeAttribute('style')
        }, 1000);
      })
    }

    static initStep1() {
      for ( const btn of document.querySelectorAll('.service-btn')) {
        btn.addEventListener('click', () => {
          this.nextStep()
        })
      }
    }

    static initStep2() {
      for ( const btn of document.querySelectorAll('.package-btn')) {
        btn.addEventListener('click', () => {
          this.nextStep()
        })
      }
    }

    static initStep3() {
      for ( const btn of document.querySelectorAll('.addon')) {
        btn.addEventListener('click', () => {
          btn.classList.toggle('active')
        })
      }

      document.querySelector('.addons-btn').addEventListener('click', () => {
        this.nextStep()
      })
    }

    static initStep4() {
      document.querySelector('.temp-toggler').addEventListener('click', () => {
        if (document.querySelector('.picker-unavailable').style.display === 'none') {
          document.querySelector('.picker-times__choose').style.display = 'none';
          document.querySelector('.picker-unavailable').style.display = 'block';
          document.querySelector('.picker-note').style.display = 'none';
          document.querySelector('.picker-times__btn').style.display = 'none';
          document.querySelector('.steps-sticky__btn').classList.add('picker-btn_disable');
        } else {
          document.querySelector('.picker-times__choose').style.display = 'block';
          document.querySelector('.picker-unavailable').style.display = 'none';
          document.querySelector('.picker-note').style.display = 'block';
          document.querySelector('.picker-times__btn').removeAttribute('style');
          document.querySelector('.steps-sticky__btn').classList.remove('picker-btn_disable');
        }
      })

      for ( const timeEl of document.querySelectorAll('.picker-times__item')) {
        timeEl.addEventListener('click', function() {
          if (document.querySelector('.picker-times__item.active') && !timeEl.classList.contains('active')) {
            document.querySelector('.picker-times__item.active').classList.remove('active')
          }
          
          timeEl.classList.toggle('active')

          if (document.querySelector('.picker-times__item.active')) {
            document.querySelector('.picker-times__btn').classList.remove('picker-btn_disable')
          } else {
            document.querySelector('.picker-times__btn').classList.add('picker-btn_disable')
          }
        })
      }

      document.querySelector('.picker-times__btn').addEventListener('click', () => {
        this.nextStep()
      })
    }

    static initStep5() {
      document.querySelector('.summary-checkbox').addEventListener('click', function() {
        this.classList.toggle('active')
      })
      
      document.querySelector('.summary-btn').addEventListener('click', () => {
        this.nextStep()
      })
    }

    static nextStep() {
      this.recordLog()
      this.currentStep++
      this.moveToStep();
      this.buildLogsMarkup()
    }

    static recordLog() {
      const log = {
        step: this.currentStep,
        title: this.steps[this.currentStep].querySelector('.booking-title').textContent,
        value: 'Some text value'
      }
       
      const findLog = this.logs.findIndex(log => log.step === this.currentStep);

      if (findLog !== -1) {
        this.logs[findLog] = log
        this.logs.splice(findLog + 1)
      } else {
        this.logs.push(log)
      }

    }

    static moveToStep(isInit) {
      this.steps.forEach(step => step.classList.remove('active'))
      this.steps[this.currentStep].classList.add('active')

      this.buildLogsMarkup()

      for (const tickerEl of document.querySelectorAll('.tickers')) {
        console.log(this.currentStep, 'ticker')
        if ([0, 1].includes(this.currentStep)) {
          tickerEl.classList.remove('tickers_hide');
        } else {
          tickerEl.classList.add('tickers_hide')
        }
      }

      if (this.currentStep === this.steps.length - 1) {
        document.querySelector('.steps-policy').classList.add('policy_hide')
      } else {
        document.querySelector('.steps-policy').classList.remove('policy_hide')
      }

      // scroll to active step
      if (!isInit) {
        $('html, body').animate({
          scrollTop: $('.progress').offset().top - 50
        }, 0);
      }

      this.updateSticky()
      this.updateProgress()
    }

    static buildLogsMarkup() {
      const logsEl = document.querySelector('.logs')
      logsEl.innerHTML = ''

      if (!this.logs.length) {
        logsEl.classList.remove('active')
        return;
      }

      logsEl.classList.add('active')

      const idx = 0;

      for (const log of this.logs) {
        if (log.step >= this.currentStep) {
          break;
        }

        const logEl = document.createElement('div')
        logEl.classList.add('log')

        logEl.innerHTML = /* html */ `
          <div class="logs-step">
            <div class="logs-step__head">
              <div class="logs-step__title">
                <svg class='logs-step__title-icon' width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect y="0.795044" width="14" height="14" rx="7" fill="#0C5947"/>
                  <path d="M4 7.97502L6.05554 9.89352L10 5.69666" stroke="#DDF2D0" stroke-linecap="round"/>
                </svg>

                <span class='logs-step__title-value'>${log.title ?? '-'}</span>
              </div>

              <div class="logs-step__action ff-dm-sans">Change</div>
            </div>

            <div class="logs-step__value">${log.value ?? '-'}</div>
          </div>
        `;

        logEl.querySelector('.logs-step__action').addEventListener('click', () => {
          this.logs.splice(log.step)
          this.currentStep = log.step
          this.moveToStep();
        })

        logsEl.appendChild(logEl)
      }
    }

    static updateProgress() {
      for (const progressStep of document.querySelectorAll('.progress-step')) {
        progressStep.classList.remove('active', 'pass');
      }

      let width = 0;

      const stepOne = document.querySelector('[data-progress-step="1"]');
      const stepTwo = document.querySelector('[data-progress-step="2"]');
      const stepThree = document.querySelector('[data-progress-step="3"]');

      if (this.currentStep < 3) {
        stepOne.classList.add('active');
      } else if (this.currentStep < 5) {
        stepOne.classList.add('pass');
        stepTwo.classList.add('active');
      } else if (this.currentStep === 5) {
        stepOne.classList.add('pass');
        stepTwo.classList.add('pass');
        stepThree.classList.add('active');
      }

      if ([1,2].includes(this.currentStep)) {
        width = 16.65 * this.currentStep;
      } else if (this.currentStep === 3) {
        width = 50;
      } else if (this.currentStep === 4) {
        width = 83.3;
      } else if (this.currentStep === 5) {
        width = 100;
      }

      this.progressEl.style.width = `${width}%`;
    }

    static updateSticky() {
      let text = 'Book Now';

      if ([2,3].includes(this.currentStep)) {
        text = 'Continue';
      } else if (this.currentStep === 4) {
        text = 'Reserve Without Paying';
      } else if (this.currentStep === 5) {
        text = 'Confirm Reservation';
      }

      this.stickyBtn.textContent = text;
    }
  }

  Booking.init();
</script>

<!-- Calendar handler -->
<script>
  const waitForCalendar = setInterval(() => {
    if (typeof AirDatepicker !== 'undefined') {
      clearInterval(waitForCalendar)
      const calendar = initCalendar();
    }
  }, 200);

  function initCalendar() {
    const captionEl = document.querySelector('.picker-calendar__caption');
    const plateEl = document.querySelector('.picker-plate');

    const options = {
      // inline: true,
      toggleSelected: true,
      dateFormat: 'EEEE, MMMM d',
      altField: document.querySelector('.picker-calendar__caption'),
      altFieldDateFormat: 'EEEE,MMMM,d',
      minDate: new Date(),
      showOtherMonths: false,
      prevHtml: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.6084 28.3337C22.4241 28.3337 22.2398 28.2664 22.0944 28.1222L15.771 21.8544C14.743 20.8355 14.743 19.1628 15.771 18.1438L22.0944 11.8761C22.3756 11.5973 22.8411 11.5973 23.1224 11.8761C23.4036 12.1549 23.4036 12.6163 23.1224 12.8951L16.799 19.1628C16.3335 19.6242 16.3335 20.374 16.799 20.8355L23.1224 27.1032C23.4036 27.382 23.4036 27.8434 23.1224 28.1222C22.9769 28.2568 22.7926 28.3337 22.6084 28.3337Z" fill="#3C6C60"/></svg>',
      nextHtml: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.3925 28.3337C17.2083 28.3337 17.0242 28.2664 16.8788 28.1222C16.5977 27.8434 16.5977 27.382 16.8788 27.1032L23.1985 20.8355C23.6637 20.374 23.6637 19.6242 23.1985 19.1628L16.8788 12.8951C16.5977 12.6163 16.5977 12.1549 16.8788 11.8761C17.1599 11.5973 17.6251 11.5973 17.9062 11.8761L24.2259 18.1438C24.7202 18.6341 25.0013 19.2974 25.0013 19.9991C25.0013 20.7009 24.7299 21.3642 24.2259 21.8544L17.9062 28.1222C17.7608 28.2568 17.5767 28.3337 17.3925 28.3337Z" fill="#0C5947"/></svg>',
      onChangeViewDate({
        month,
        year,
        decade
      }) {
        // let current_month = String(month + 1).padStart(2, '0');
        // let current_date = year + '-' + current_month;
        // $('#month').val(current_date);
        // $('.times-js').empty();
        // get_month();
      },
      onSelect: onSelectHandler,
    };

    function onSelectHandler({date, formattedDate}) {
      console.log('Selected date:', date, formattedDate)

      if (document.querySelector('.picker-times__item.active')) {
        document.querySelector('.picker-times__item.active').click();
      }

      if (!date) { 
        captionEl.innerText = 'Choose date'
        plateEl.classList.remove('active');

        return false;
      }

      plateEl.classList.add('active');

      // const daysOfWeek = [
      //   'Sunday',
      //   'Monday',
      //   'Tuesday',
      //   'Wednesday',
      //   'Thursday',
      //   'Friday',
      //   'Saturday',
      // ];
      // const months = [
      //   'January',
      //   'February',
      //   'March',
      //   'April',
      //   'May',
      //   'June',
      //   'July',
      //   'August',
      //   'September',
      //   'October',
      //   'November',
      //   'December',
      // ];

      // const dayOfWeek = daysOfWeek[date.getDay()];
      // const month = months[date.getMonth()];
      // const dayOfMonth = date.getDate();

      // captionEl.innerText = `${dayOfWeek}, ${month} ${dayOfMonth}`;
      captionEl.innerText = formattedDate;
      
      //   $('#date_txt').val(`${month} ${dayOfMonth}, ${date.getFullYear()}`);

      //   const current_month = String(date.getMonth() + 1).padStart(2, '0');
      //   const current_date = date.getFullYear() + '-' + current_month + '-' + date.getDate();
      //   $('#date').val(current_date);
      //   get_time();
    }

    const calendar = new AirDatepicker('.picker-calendar-js', options);

    return calendar
  }

  function get_month() {
    var data = {
      action: 'get_month',
      ajax_nonce: ut_params.ajax_nonce,
      month: $('#month').val(),
      appointmentTypeID: $('#appointmentTypeID').val(),
      addonIDs: $('#addonIDs').val(),
      timezone: $('#timezone').val(),
      calendarID: $('#calendarID').val(),
    };

    $.ajax({
      type: 'POST',
      url: ut_params.ajax_url,
      data: data,
      beforeSend: function() {
        $('.ut-month-preloader').show();
      },
      success: function(response) {
        // update calendar days
        if (response.success) {
          var days = response.data.days;
          booking_calendar.update({
            toggleSelected: true,
            dateFormat: 'EEEE,MMMM,d',
            altField: '.format-date',
            altFieldDateFormat: 'EEEE,MMMM,d',
            showOtherMonths: false,
            prevHtml: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.6084 28.3337C22.4241 28.3337 22.2398 28.2664 22.0944 28.1222L15.771 21.8544C14.743 20.8355 14.743 19.1628 15.771 18.1438L22.0944 11.8761C22.3756 11.5973 22.8411 11.5973 23.1224 11.8761C23.4036 12.1549 23.4036 12.6163 23.1224 12.8951L16.799 19.1628C16.3335 19.6242 16.3335 20.374 16.799 20.8355L23.1224 27.1032C23.4036 27.382 23.4036 27.8434 23.1224 28.1222C22.9769 28.2568 22.7926 28.3337 22.6084 28.3337Z" fill="#3C6C60"/></svg>',
            nextHtml: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.3925 28.3337C17.2083 28.3337 17.0242 28.2664 16.8788 28.1222C16.5977 27.8434 16.5977 27.382 16.8788 27.1032L23.1985 20.8355C23.6637 20.374 23.6637 19.6242 23.1985 19.1628L16.8788 12.8951C16.5977 12.6163 16.5977 12.1549 16.8788 11.8761C17.1599 11.5973 17.6251 11.5973 17.9062 11.8761L24.2259 18.1438C24.7202 18.6341 25.0013 19.2974 25.0013 19.9991C25.0013 20.7009 24.7299 21.3642 24.2259 21.8544L17.9062 28.1222C17.7608 28.2568 17.5767 28.3337 17.3925 28.3337Z" fill="#0C5947"/></svg>',
            onChangeViewDate({
              month,
              year,
              decade
            }) {
              let current_month = String(month + 1).padStart(2, '0');
              let current_date = year + '-' + current_month;
              $('#month').val(current_date);
              $('.times-js').empty();
              get_month();
            },
            onSelect({
              date
            }) {
              if (date) {
                const daysOfWeek = [
                  'Sunday',
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                ];
                const months = [
                  'January',
                  'February',
                  'March',
                  'April',
                  'May',
                  'June',
                  'July',
                  'August',
                  'September',
                  'October',
                  'November',
                  'December',
                ];

                const dayOfWeek = daysOfWeek[date.getDay()];
                const month = months[date.getMonth()];
                const dayOfMonth = date.getDate();

                const formatted = `${dayOfWeek}, ${month} ${dayOfMonth}`;
                $('.format-date-def').html(formatted);
                $('#date_txt').val(`${month} ${dayOfMonth}, ${date.getFullYear()}`);

                const current_month = String(date.getMonth() + 1).padStart(2, '0');
                const current_date = date.getFullYear() + '-' + current_month + '-' + date.getDate();
                $('#date').val(current_date);
                get_time();
              }
            },
            onRenderCell({
              date,
              cellType
            }) {

              if (cellType === 'day' && $.inArray(date.getDate(), days) == -1) {
                return {
                  disabled: true,
                  classes: 'disabled-class',
                  attrs: {
                    title: 'Cell is disabled',
                  },
                };
              }
            }
          });
        }
        $('.ut-month-preloader').hide();
      }
    });
  }

  function get_time() {

    var data = {
      action: 'get_time',
      ajax_nonce: ut_params.ajax_nonce,
      date: $('#date').val(),
      appointmentTypeID: $('#appointmentTypeID').val(),
      addonIDs: $('#addonIDs').val(),
      timezone: $('#timezone').val(),
      calendarID: $('#calendarID').val(),
    };

    $.ajax({
      type: 'POST',
      url: ut_params.ajax_url,
      data: data,
      beforeSend: function() {
        $('.show_step_4').prop('disabled', true);
        $('.ut-times-preloader').show();
      },
      success: function(response) {

        if (response.success) {
          $('.times-js').html(response.data.times);
        }
        $('.ut-times-preloader').hide();
      }
    });
  }
</script>

<div class="b-booking-def-footer">
  <svg width="1440" height="707" viewbox="0 0 1440 707" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M-210 -170V792H1440V138.944C1270.42 260.462 1265.07 105.526 1078.68 78.8129C782.331 36.3404 363.681 387.921 -210 -170Z" fill="#0C5947"></path>
  </svg>

  <div class="container">
    <div class="title">
      <?php echo get_field('email_title'); ?>
      <a href="mailto:<?php echo get_field('email', 'options'); ?>">
        <?php echo get_field('email', 'options'); ?>
      </a>
      <br>
      <?php echo get_field('phone_title'); ?>
      <a href="tel:+<?php echo clear_phone(get_field('phone', 'options')); ?>">
        <?php echo get_field('phone', 'options'); ?>
      </a>
    </div>
    <div class="box">
      <div class="left">
        <div class="col">
          <div class="box-title"> <?php echo get_field('location_title'); ?> </div>
          <p> <?php echo get_field('address', 'options'); ?> </p>
        </div>
        <div class="col">
          <div class="box-title"> <?php echo get_field('hours_of_operations_title'); ?> </div>
          <p> <?php echo get_field('open_days', 'options'); ?> </p>
          <p> <?php echo get_field('open_hours', 'options'); ?> </p> 
        </div>
      </div>
      <div class="right">
        <div class="box-title"> <?php echo get_field('subscribe_newsletter_title'); ?> </div>
        <div class="booking-subscribe-form"> <?php 
            $form1 = get_field('form');
            $form1 = str_replace('wpcf7-form-control-wrap', 'wpcf7-form-control-wrap1 label with_hover_text', $form1);
            $form1 = str_replace('wpcf7-form init', 'wpcf7-form init contact-form form-thanks', $form1);
            $form1 = str_replace('aria-required="true"', 'aria-required="true" required', $form1);
            $form1 = str_replace('<span class="wpcf7-form-control-wrap1', '<span style="margin-bottom: 15px;" class="wpcf7-form-control-wrap1', $form1);
            $form1 = str_replace('<input class="wpcf7-form-control wpcf7-submit has-spinner" type="submit" value="Submit" />', '<button style="min-width: 17.125rem;margin-top: 0.75rem;" type="submit" class="form-btn link-btn light"><span>Subscribe</span></button>', $form1);                   
            echo $form1; ?>
          <!-- <form id="subscribe_form" class="contact-form" novalidate><label class="label with_hover_text"><span class="hover_text">
          <?php //echo get_field('first_name'); ?><i>*</i></span><input type="text" name="name" placeholder="
          <?php //echo $form['name_placeholder']; ?>" required></label><label class="label with_hover_text"><span class="hover_text">
          <?php //echo get_field('email'); ?><i>*</i></span><input type="email" name="email" placeholder="
          <?php //echo $form['email_placeholder']; ?>" required></label><input type="hidden" name="page_id" value="
          <?php //echo get_the_ID(); ?>"><button type="submit" class="form-btn link-btn light"><span>Submit</span></button></form> -->
        </div>
      </div>
    </div>
    <div class="bot">
      <div class="box-title"> <?php echo get_field('accepted_payments'); ?> </div>
      <div class="line">
        <div class="copyright">© <?php echo get_field('copyright', 'options'); ?> <?php echo date('Y'); ?> </div>
        <div class="soc"> <?php if (get_field('faceboook_link', 'options')) { ?> <a href="
										<?php echo get_field('faceboook_link', 'options'); ?>" target="_blank">
            <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z" fill="#DDF2D0"></path>
            </svg>
          </a> <?php } ?> <?php if (get_field('instagram_link', 'options')) { ?> <a href="
										<?php echo get_field('instagram_link', 'options'); ?>" target="_blank">
            <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.16094C15.2063 2.16094 15.5859 2.175 16.8469 2.23125C18.0188 2.28281 18.6516 2.47969 19.0734 2.64375C19.6313 2.85938 20.0344 3.12188 20.4516 3.53906C20.8734 3.96094 21.1313 4.35938 21.3469 4.91719C21.5109 5.33906 21.7078 5.97656 21.7594 7.14375C21.8156 8.40937 21.8297 8.78906 21.8297 11.9906C21.8297 15.1969 21.8156 15.5766 21.7594 16.8375C21.7078 18.0094 21.5109 18.6422 21.3469 19.0641C21.1313 19.6219 20.8687 20.025 20.4516 20.4422C20.0297 20.8641 19.6313 21.1219 19.0734 21.3375C18.6516 21.5016 18.0141 21.6984 16.8469 21.75C15.5813 21.8062 15.2016 21.8203 12 21.8203C8.79375 21.8203 8.41406 21.8062 7.15313 21.75C5.98125 21.6984 5.34844 21.5016 4.92656 21.3375C4.36875 21.1219 3.96563 20.8594 3.54844 20.4422C3.12656 20.0203 2.86875 19.6219 2.65313 19.0641C2.48906 18.6422 2.29219 18.0047 2.24063 16.8375C2.18438 15.5719 2.17031 15.1922 2.17031 11.9906C2.17031 8.78438 2.18438 8.40469 2.24063 7.14375C2.29219 5.97187 2.48906 5.33906 2.65313 4.91719C2.86875 4.35938 3.13125 3.95625 3.54844 3.53906C3.97031 3.11719 4.36875 2.85938 4.92656 2.64375C5.34844 2.47969 5.98594 2.28281 7.15313 2.23125C8.41406 2.175 8.79375 2.16094 12 2.16094ZM12 0C8.74219 0 8.33438 0.0140625 7.05469 0.0703125C5.77969 0.126563 4.90313 0.332812 4.14375 0.628125C3.35156 0.9375 2.68125 1.34531 2.01563 2.01562C1.34531 2.68125 0.9375 3.35156 0.628125 4.13906C0.332812 4.90313 0.126563 5.775 0.0703125 7.05C0.0140625 8.33437 0 8.74219 0 12C0 15.2578 0.0140625 15.6656 0.0703125 16.9453C0.126563 18.2203 0.332812 19.0969 0.628125 19.8563C0.9375 20.6484 1.34531 21.3188 2.01563 21.9844C2.68125 22.65 3.35156 23.0625 4.13906 23.3672C4.90313 23.6625 5.775 23.8687 7.05 23.925C8.32969 23.9812 8.7375 23.9953 11.9953 23.9953C15.2531 23.9953 15.6609 23.9812 16.9406 23.925C18.2156 23.8687 19.0922 23.6625 19.8516 23.3672C20.6391 23.0625 21.3094 22.65 21.975 21.9844C22.6406 21.3188 23.0531 20.6484 23.3578 19.8609C23.6531 19.0969 23.8594 18.225 23.9156 16.95C23.9719 15.6703 23.9859 15.2625 23.9859 12.0047C23.9859 8.74688 23.9719 8.33906 23.9156 7.05938C23.8594 5.78438 23.6531 4.90781 23.3578 4.14844C23.0625 3.35156 22.6547 2.68125 21.9844 2.01562C21.3188 1.35 20.6484 0.9375 19.8609 0.632812C19.0969 0.3375 18.225 0.13125 16.95 0.075C15.6656 0.0140625 15.2578 0 12 0Z" fill="#DDF2D0"></path>
              <path d="M12 5.83594C8.59688 5.83594 5.83594 8.59688 5.83594 12C5.83594 15.4031 8.59688 18.1641 12 18.1641C15.4031 18.1641 18.1641 15.4031 18.1641 12C18.1641 8.59688 15.4031 5.83594 12 5.83594ZM12 15.9984C9.79219 15.9984 8.00156 14.2078 8.00156 12C8.00156 9.79219 9.79219 8.00156 12 8.00156C14.2078 8.00156 15.9984 9.79219 15.9984 12C15.9984 14.2078 14.2078 15.9984 12 15.9984Z" fill="#DDF2D0"></path>
              <path d="M19.8469 5.59141C19.8469 6.38828 19.2 7.03047 18.4078 7.03047C17.6109 7.03047 16.9688 6.3836 16.9688 5.59141C16.9688 4.79453 17.6156 4.15234 18.4078 4.15234C19.2 4.15234 19.8469 4.79922 19.8469 5.59141Z" fill="#DDF2D0"></path>
            </svg>
          </a> <?php } ?> <?php if (get_field('tiktok_link', 'options')) { ?> <a href="
										<?php echo get_field('tiktok_link', 'options'); ?>" target="_blank">
            <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.0725 0H13.0278V16.3478C13.0278 18.2957 11.4722 19.8957 9.53626 19.8957C7.60034 19.8957 6.04469 18.2957 6.04469 16.3478C6.04469 14.4348 7.56577 12.8695 9.43257 12.8V8.69567C5.31872 8.7652 2 12.1391 2 16.3478C2 20.5913 5.38786 24 9.57085 24C13.7538 24 17.1416 20.5565 17.1416 16.3478V7.9652C18.6627 9.07827 20.5295 9.73913 22.5 9.77393V5.66957C19.4579 5.56522 17.0725 3.06087 17.0725 0Z" fill="#DDF2D0"></path>
            </svg>
          </a> <?php } ?> </div>
        <div class="payments-img">
          <svg width="70" height="41" viewbox="0 0 70 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="70" height="41" rx="6" fill="white"></rect>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M70.001 21.7541H66.3599C65.261 21.7541 64.4628 22.0165 63.8975 22.4244V21.7541H58.5117C57.6504 21.7541 56.6395 21.967 56.1613 22.4244V21.7541H46.5437V22.4244C45.7783 21.8739 44.4868 21.7541 43.8907 21.7541H37.5468V22.4244C36.9413 21.8398 35.5946 21.7541 34.7738 21.7541H27.674L26.0493 23.5071L24.5276 21.7541H13.9219V33.2077H24.328L26.0021 31.427L27.5791 33.2077L33.9935 33.2134V30.5191H34.6241C35.4752 30.5322 36.479 30.498 37.3646 30.1163V33.2074H42.6553V30.2223H42.9105C43.2362 30.2223 43.2682 30.2356 43.2682 30.5601V33.2072H59.3404C60.3608 33.2072 61.4274 32.9468 62.0181 32.4743V33.2072H67.1161C68.177 33.2072 69.213 33.0589 70.0013 32.6792C70.0013 -29.9866 70.001 47.992 70.001 21.7541Z" fill="white"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.36186 19.0804L4.11984 17.2576H5.81679L6.57278 19.0804H13.187V17.6868L13.7774 19.0863H17.211L17.8014 17.666V19.0804H34.2391L34.2314 16.0883H34.5494C34.7721 16.096 34.8372 16.1165 34.8372 16.4831V19.0804H43.3388V18.3838C44.0245 18.7502 45.0911 19.0804 46.4946 19.0804H50.0712L50.8366 17.2576H52.5336L53.2821 19.0804H60.1744V17.3489L61.2182 19.0804H66.7412V7.63477H61.2753V8.98651L60.5098 7.63477H54.9011V8.98651L54.1982 7.63477H46.6222C45.354 7.63477 44.2393 7.81125 43.3388 8.30309V7.63477H38.1107V8.30309C37.5376 7.79615 36.7568 7.63477 35.8886 7.63477H16.7882L15.5066 10.591L14.1905 7.63477H8.17439V8.98651L7.51349 7.63477H2.38268L0 13.0766V19.0804H3.36186Z" fill="white"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M34.7081 28.8302C36.4278 28.8302 38.1342 28.3594 38.1342 26.0792C38.1342 23.8059 36.3799 23.375 34.8185 23.375H28.5318L26.0292 26.0656L23.6085 23.375H15.6953V31.5835H23.4886L26.0063 28.8661L28.429 31.5835H32.2531V28.8302H34.7081ZM32.2531 27.1632H34.7957C35.5517 27.1632 36.0219 26.7892 36.0219 26.0793C36.0219 25.3614 35.5289 25.0728 34.8185 25.0728H32.2531V27.1632ZM22.4925 29.8729H17.6552V28.2397H21.9746V26.5649H17.6552V25.0726H22.5879L24.7399 27.4647L22.4925 29.8729ZM30.2935 30.837L27.2728 27.4934L30.2935 24.256V30.837Z" fill="black"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M46.5485 28.458C46.3806 28.2188 46.0226 27.93 45.5847 27.7688C46.1026 27.5639 46.979 26.8953 46.9792 25.5852C46.9792 24.6488 46.5887 24.1364 45.9677 23.7624C45.322 23.4188 44.5965 23.375 43.6005 23.375H39.0581V31.5835H41.0351V28.5854H43.1377C43.8554 28.5854 44.2936 28.6557 44.5811 28.9498C44.9103 29.2934 44.9046 29.9202 44.9001 30.4021C44.8996 30.4555 44.8992 30.5072 44.8992 30.5565V31.5835H46.8744V29.9562C46.8665 29.2327 46.8263 28.8587 46.5485 28.458ZM44.3964 26.7473C44.1333 26.903 43.8078 26.9164 43.4249 26.9164H41.0348V25.0728H43.4575C43.8078 25.0728 44.1583 25.0803 44.3964 25.2211C44.6514 25.354 44.8038 25.6082 44.8038 25.9595C44.8038 26.3107 44.6514 26.5936 44.3964 26.7473Z" fill="black"></path>
            <path d="M62.1499 27.2542C62.533 27.6495 62.7383 28.1485 62.7383 28.9934C62.7383 30.7592 61.6318 31.5835 59.6476 31.5835H55.8155V29.8233H59.6322C60.0054 29.8233 60.27 29.7741 60.4359 29.6201C60.5712 29.4931 60.6682 29.3087 60.6682 29.0847C60.6682 28.8456 60.5632 28.6557 60.4282 28.5419C60.2777 28.4166 60.0702 28.3597 59.7275 28.3597C59.6071 28.3556 59.4846 28.3523 59.3609 28.3489C57.5957 28.3011 55.5834 28.2465 55.5834 25.8191C55.5834 24.6285 56.3336 23.3752 58.3963 23.3752H62.3406V25.1223H58.7315C58.3737 25.1223 58.1411 25.1357 57.9432 25.2706C57.7277 25.4035 57.6478 25.6008 57.6478 25.8612C57.6478 26.1708 57.8307 26.3815 58.0783 26.4725C58.2858 26.5446 58.5088 26.5656 58.8439 26.5656L59.9031 26.5941C60.9711 26.6201 61.7043 26.8042 62.1499 27.2542Z" fill="black"></path>
            <path d="M69.9981 25.1218H66.4123C66.0543 25.1218 65.8164 25.1351 65.6161 25.27C65.4085 25.403 65.3286 25.6002 65.3286 25.8606C65.3286 26.1703 65.5038 26.3809 65.7588 26.472C65.9664 26.5441 66.1893 26.5651 66.5171 26.5651L67.5834 26.5936C68.6594 26.62 69.3777 26.8045 69.8156 27.2542C69.8829 27.3071 69.9275 27.3654 69.9728 27.4246L69.985 27.4406L69.9929 27.4507L69.9981 27.4574V30.5335C69.5202 31.2303 68.5889 31.5835 67.3282 31.5835H63.5286V29.8233H67.3128C67.6882 29.8233 67.9508 29.7741 68.109 29.6201C68.246 29.4931 68.3416 29.3087 68.3416 29.0847C68.3416 28.8456 68.246 28.6557 68.1013 28.5419C67.9585 28.4166 67.7507 28.3597 67.4081 28.3597C67.2873 28.3556 67.1645 28.3523 67.0405 28.3489C65.269 28.3011 63.256 28.2467 63.256 25.8191C63.256 24.6285 64.0142 23.3753 66.0788 23.3753H69.9978L69.9981 25.1218Z" fill="black"></path>
            <path d="M48.0701 23.375H54.6367V25.0725H50.0295V26.5649H54.5242V28.2396H50.0295V29.8728L54.6367 29.8802V31.5835H48.0701V23.375Z" fill="black"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.31022 13.9154L4.96358 10.6438L3.62465 13.9154H6.31022ZM35.9764 12.6127C35.706 12.7763 35.3862 12.7818 35.0031 12.7818H32.613V10.959H35.0357C35.3785 10.959 35.7363 10.9743 35.9687 11.107C36.2239 11.2266 36.3818 11.481 36.3818 11.8325C36.3818 12.1912 36.2316 12.4798 35.9764 12.6127ZM53.0273 13.9154L51.6657 10.6438L50.3117 13.9154H53.0273ZM21.2433 17.4565H19.2264L19.2189 11.0292L16.366 17.4565H14.6385L11.7782 11.0235V17.4565H7.77651L7.02052 15.626H2.92401L2.16032 17.4565H0.0234375L3.54668 9.25H6.46985L9.81607 17.0199V9.25H13.0272L15.6021 14.8171L17.9674 9.25H21.2431V17.4565H21.2433ZM29.2822 17.4565H22.7097V9.25H29.2822V10.9589H24.6772V12.4381H29.1717V14.1203H24.6772V15.7592H29.2822V17.4565ZM38.5492 11.4602C38.5492 12.7686 37.6733 13.4446 37.1628 13.6476C37.5933 13.8109 37.961 14.0995 38.1361 14.3386C38.4139 14.7468 38.4618 15.1114 38.4618 15.8443V17.4565H36.4774L36.4699 16.4216C36.4699 15.9278 36.5173 15.2176 36.1593 14.8228C35.8718 14.5342 35.4336 14.4716 34.7253 14.4716H32.6132V17.4565H30.6459V9.25H35.1712C36.1767 9.25 36.9176 9.27649 37.5536 9.64307C38.176 10.0097 38.5492 10.5448 38.5492 11.4602ZM41.6978 17.4565H39.6903V9.25H41.6978V17.4565ZM64.9878 17.4565H62.1997L58.4704 11.297V17.4565H54.4635L53.6978 15.626H49.6108L48.8679 17.4565H46.5657C45.6094 17.4565 44.3985 17.2456 43.7128 16.5488C43.0214 15.852 42.6616 14.9082 42.6616 13.4159C42.6616 12.1988 42.8766 11.0862 43.7222 10.2069C44.3583 9.55198 45.3544 9.25 46.7102 9.25H48.6149V11.0084H46.7502C46.0322 11.0084 45.6267 11.1149 45.2362 11.4946C44.9008 11.8401 44.6706 12.4933 44.6706 13.3535C44.6706 14.2327 44.8459 14.8666 45.2116 15.2807C45.5145 15.6055 46.0649 15.704 46.5828 15.704H47.4664L50.2394 9.25025H53.1874L56.5185 17.0124V9.25025H59.5141L62.9726 14.9656V9.25025H64.9878V17.4565Z" fill="black"></path>
          </svg>
          <svg width="70" height="41" viewbox="0 0 70 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="70" height="41" rx="6" fill="white"></rect>
            <path d="M30.4688 41L70.0004 29.5L69.9825 36.0137C69.9749 38.7698 67.7385 41 64.9825 41H30.4688Z" fill="black"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M61.4726 16.2217C63.6458 16.2217 64.841 17.1888 64.841 19.0155C64.9496 20.4124 63.9717 21.5944 62.6679 21.8093L65.6016 25.7851H63.3198L60.8207 21.9168H60.6034V25.7851H58.7563V16.2217H61.4726ZM60.6034 20.6273H61.1467C62.3419 20.6273 62.8852 20.09 62.8852 19.1229C62.8852 18.2633 62.3419 17.726 61.1467 17.726H60.6034V20.6273ZM52.3456 25.7851H57.561V24.1733H54.1927V21.5944H57.4524V19.9826H54.1927V17.8335H57.561V16.2217H52.3456V25.7851ZM46.9128 22.6689L44.4137 16.2217H42.4579L46.4782 26H47.4561L51.4763 16.2217H49.5205L46.9128 22.6689ZM24.8557 21.0571C24.8557 23.7435 27.0288 26 29.7452 26C30.6145 26 31.375 25.7851 32.1356 25.4627V23.3137C31.5924 23.9584 30.8318 24.3882 29.9625 24.3882C28.224 24.3882 26.8115 23.0987 26.8115 21.3795V21.1646C26.7029 19.4453 28.1154 17.941 29.8539 17.8335C30.7231 17.8335 31.5924 18.2633 32.1356 18.908V16.759C31.4837 16.3291 30.6145 16.2217 29.8539 16.2217C27.0288 16.0068 24.8557 18.2633 24.8557 21.0571ZM21.4874 19.8751C20.4008 19.4453 20.0749 19.2304 20.0749 18.6931C20.1835 18.0484 20.7268 17.5111 21.3787 17.6186C21.922 17.6186 22.4653 17.941 22.8999 18.3708L23.8778 17.0813C23.1172 16.4366 22.1393 16.0068 21.1614 16.0068C19.6402 15.8993 18.3364 17.0813 18.2277 18.5857V18.6931C18.2277 19.9826 18.771 20.7348 20.5095 21.272C20.9441 21.3795 21.3787 21.5944 21.8133 21.8093C22.1393 22.0242 22.3566 22.3466 22.3566 22.7764C22.3566 23.5286 21.7047 24.1733 21.0528 24.1733H20.9441C20.0749 24.1733 19.3143 23.636 18.9883 22.8838L17.7931 24.0658C18.445 25.2478 19.7489 25.8925 21.0528 25.8925C22.7912 26 24.2038 24.7106 24.3124 22.9913V22.6689C24.2038 21.3795 23.6605 20.7348 21.4874 19.8751ZM15.1854 25.7851H17.0325V16.2217H15.1854V25.7851ZM6.60156 16.2217H9.31795H9.86123C12.469 16.3292 14.5334 18.4782 14.4248 21.0571C14.4248 22.454 13.7728 23.7435 12.6863 24.7106C11.7084 25.4627 10.5132 25.8926 9.31795 25.7851H6.60156V16.2217ZM8.99198 24.1733C9.86122 24.2807 10.8391 23.9584 11.4911 23.4211C12.143 22.7764 12.469 21.9168 12.469 20.9497C12.469 20.09 12.143 19.2304 11.4911 18.5857C10.8391 18.0484 9.86122 17.7261 8.99198 17.8335H8.4487V24.1733H8.99198Z" fill="black"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M37.6778 16C34.9615 16 32.6797 18.1491 32.6797 20.9429C32.6797 23.6292 34.8528 25.8858 37.6778 25.9932C40.5029 26.1007 42.676 23.8441 42.7847 21.0503C42.676 18.2565 40.5029 16 37.6778 16V16Z" fill="black"></path>
          </svg>
          <svg width="70" height="41" viewbox="0 0 70 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="70" height="41" rx="6" fill="white"></rect>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M35.5 31.3139C33.1169 33.3704 30.0255 34.6119 26.6475 34.6119C19.1102 34.6119 13 28.4308 13 20.806C13 13.1811 19.1102 7 26.6475 7C30.0255 7 33.1169 8.2415 35.5 10.2981C37.8831 8.2415 40.9745 7 44.3525 7C51.8898 7 58 13.1811 58 20.806C58 28.4308 51.8898 34.6119 44.3525 34.6119C40.9745 34.6119 37.8831 33.3704 35.5 31.3139Z" fill="black"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M35.5 31.3139C38.4344 28.7816 40.2951 25.0136 40.2951 20.806C40.2951 16.5983 38.4344 12.8303 35.5 10.2981C37.8831 8.2415 40.9745 7 44.3525 7C51.8898 7 58 13.1811 58 20.806C58 28.4308 51.8898 34.6119 44.3525 34.6119C40.9745 34.6119 37.8831 33.3704 35.5 31.3139Z" fill="#96999C"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M35.4981 10.2979C38.4325 12.8301 40.2932 16.5981 40.2932 20.8057C40.2932 25.0133 38.4325 28.7813 35.4981 31.3136C32.5638 28.7813 30.7031 25.0133 30.7031 20.8057C30.7031 16.5981 32.5638 12.8301 35.4981 10.2979Z" fill="#464748"></path>
          </svg>
          <svg width="70" height="41" viewbox="0 0 70 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="70" height="41" rx="6" fill="white"></rect>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.2505 28.5165H18.0099L14.8299 16.3847C14.679 15.8267 14.3585 15.3333 13.8871 15.1008C12.7106 14.5165 11.4142 14.0514 10 13.8169V13.3498H16.8313C17.7742 13.3498 18.4813 14.0514 18.5991 14.8663L20.2491 23.6173L24.4877 13.3498H28.6104L22.2505 28.5165ZM30.9675 28.5165H26.9626L30.2604 13.3498H34.2653L30.9675 28.5165ZM39.4467 17.5514C39.5646 16.7346 40.2717 16.2675 41.0967 16.2675C42.3931 16.1502 43.8052 16.3848 44.9838 16.9671L45.6909 13.7016C44.5123 13.2345 43.216 13 42.0395 13C38.1524 13 35.3239 15.1008 35.3239 18.0165C35.3239 20.2346 37.3274 21.3992 38.7417 22.1008C40.2717 22.8004 40.861 23.2675 40.7431 23.9671C40.7431 25.0165 39.5646 25.4836 38.3881 25.4836C36.9739 25.4836 35.5596 25.1338 34.2653 24.5494L33.5582 27.8169C34.9724 28.3992 36.5025 28.6338 37.9167 28.6338C42.2752 28.749 44.9838 26.6502 44.9838 23.5C44.9838 19.5329 39.4467 19.3004 39.4467 17.5514ZM59 28.5165L55.82 13.3498H52.4044C51.6972 13.3498 50.9901 13.8169 50.7544 14.5165L44.8659 28.5165H48.9887L49.8116 26.3004H54.8772L55.3486 28.5165H59ZM52.9936 17.4342L54.1701 23.1502H50.8723L52.9936 17.4342Z" fill="black"></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- TODO: remove el -->
<div class="wrapper bookingPage" id="wrapper" data-title="Booking step 1" data-lang="en" data-router-view="booking" style='display: none'>
  <div class="b-booking-title">
    <div class="container">
      <h1 class="h2">Book Now and Relax Differently inyour private Beer Therapy™ Room</h1>
    </div>
  </div>
  <div class="b-booking">
    <div class="container">
      <div class="box">
        <div class="steps-line">
          <div class="line">
            <div class="progress" style="width: 0%;"></div>
            <div class="item item-1 active">
              <svg width="28" height="10" viewbox="0 0 28 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.326 0.897872C22.6006 1.16337 21.4623 1.31632 20.2226 1.40001C18.7505 1.50102 16.9387 1.56739 15.3354 1.60202C14.4742 1.65397 13.61 1.56739 12.7935 1.43176C12.3763 1.36827 10.7611 0.995992 10.4333 0.944047C9.17877 0.744923 7.64706 0.805526 6.39249 0.78244C3.61813 0.727608 3.38867 0.525596 2.24733 0.378417C1.57982 0.291841 0.962961 0.213923 0.489144 0.514053C-0.0800333 0.877671 -0.199233 1.72612 0.381864 2.4649C0.873561 3.09113 0.822903 3.41145 0.760323 3.75199C0.700723 4.06943 0.769263 4.2801 0.867603 4.42727C1.07322 4.73318 1.90762 5.12277 3.63303 5.04196C4.6939 4.9929 6.14217 4.69277 8.07916 3.64809C9.09832 3.09978 10.5227 2.3812 12.415 2.55436C13.4789 2.64959 14.5785 2.62073 15.2311 2.51973C15.7794 2.43604 16.0536 2.34657 16.9536 2.22248C17.1055 2.20228 18.1336 2.05222 18.1664 2.26865C18.1962 2.45624 17.332 2.73328 17.192 2.77368C15.1834 3.36239 14.8437 3.06515 13.3269 3.0767C11.7535 3.08247 10.1979 3.33354 9.12216 4.08675C9.12216 4.08675 7.50998 5.03331 6.45805 5.10545C4.57172 5.2382 3.67773 5.95389 3.56747 6.84562C3.48999 7.46031 4.0383 7.81527 4.90846 7.95091C5.73392 8.07789 4.9919 9.04465 7.4623 9.56987C10.481 10.2134 11.381 9.59585 11.9084 9.09082C12.5342 8.49056 12.2869 7.41125 12.4985 6.73019C12.7548 5.91349 13.2614 5.01022 14.7215 4.38399C15.3652 4.06943 16.4082 3.95977 17.6241 3.51535C19.1081 2.97569 20.7024 2.06087 21.4951 1.92524C21.8497 1.86463 22.2311 1.83289 21.9957 2.09839C21.8348 2.2802 21.4325 2.63805 21.1971 2.79388C19.7637 3.73179 19.0455 3.93379 17.5942 4.30318C16.1341 4.56291 14.8914 5.26129 14.5755 6.04047C14.209 6.94086 14.06 6.8312 13.7054 7.30159C13.4342 7.66232 13.4193 7.93359 13.4551 8.3607C13.4878 8.74452 13.8156 9.34189 14.4474 9.63048C14.7215 9.78054 15.2222 9.74302 15.5351 9.63625C16.4023 9.34478 16.6883 9.55256 17.0638 9.46021C18.8727 9.02156 18.2737 7.87299 19.1915 6.45892C19.5163 5.95678 20.5117 5.43155 21.0868 4.86015C21.0928 4.85438 21.0987 4.8515 21.1017 4.84573C21.7364 4.32339 22.0165 3.6279 22.1655 3.15461C22.7288 1.43753 24.0072 1.62511 25.6879 1.35384C26.7368 1.15183 27.2196 0.998878 27.6904 0.8719L28.0004 0.15332C26.3941 0.540025 24.3618 0.897875 24.329 0.900761L24.326 0.897872Z" fill="#0C5947"></path>
              </svg>
              <span>Choose Appointment</span>
            </div>
            <div class="item item-2">
              <svg width="28" height="10" viewbox="0 0 28 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.326 0.897872C22.6006 1.16337 21.4623 1.31632 20.2226 1.40001C18.7505 1.50102 16.9387 1.56739 15.3354 1.60202C14.4742 1.65397 13.61 1.56739 12.7935 1.43176C12.3763 1.36827 10.7611 0.995992 10.4333 0.944047C9.17877 0.744923 7.64706 0.805526 6.39249 0.78244C3.61813 0.727608 3.38867 0.525596 2.24733 0.378417C1.57982 0.291841 0.962961 0.213923 0.489144 0.514053C-0.0800333 0.877671 -0.199233 1.72612 0.381864 2.4649C0.873561 3.09113 0.822903 3.41145 0.760323 3.75199C0.700723 4.06943 0.769263 4.2801 0.867603 4.42727C1.07322 4.73318 1.90762 5.12277 3.63303 5.04196C4.6939 4.9929 6.14217 4.69277 8.07916 3.64809C9.09832 3.09978 10.5227 2.3812 12.415 2.55436C13.4789 2.64959 14.5785 2.62073 15.2311 2.51973C15.7794 2.43604 16.0536 2.34657 16.9536 2.22248C17.1055 2.20228 18.1336 2.05222 18.1664 2.26865C18.1962 2.45624 17.332 2.73328 17.192 2.77368C15.1834 3.36239 14.8437 3.06515 13.3269 3.0767C11.7535 3.08247 10.1979 3.33354 9.12216 4.08675C9.12216 4.08675 7.50998 5.03331 6.45805 5.10545C4.57172 5.2382 3.67773 5.95389 3.56747 6.84562C3.48999 7.46031 4.0383 7.81527 4.90846 7.95091C5.73392 8.07789 4.9919 9.04465 7.4623 9.56987C10.481 10.2134 11.381 9.59585 11.9084 9.09082C12.5342 8.49056 12.2869 7.41125 12.4985 6.73019C12.7548 5.91349 13.2614 5.01022 14.7215 4.38399C15.3652 4.06943 16.4082 3.95977 17.6241 3.51535C19.1081 2.97569 20.7024 2.06087 21.4951 1.92524C21.8497 1.86463 22.2311 1.83289 21.9957 2.09839C21.8348 2.2802 21.4325 2.63805 21.1971 2.79388C19.7637 3.73179 19.0455 3.93379 17.5942 4.30318C16.1341 4.56291 14.8914 5.26129 14.5755 6.04047C14.209 6.94086 14.06 6.8312 13.7054 7.30159C13.4342 7.66232 13.4193 7.93359 13.4551 8.3607C13.4878 8.74452 13.8156 9.34189 14.4474 9.63048C14.7215 9.78054 15.2222 9.74302 15.5351 9.63625C16.4023 9.34478 16.6883 9.55256 17.0638 9.46021C18.8727 9.02156 18.2737 7.87299 19.1915 6.45892C19.5163 5.95678 20.5117 5.43155 21.0868 4.86015C21.0928 4.85438 21.0987 4.8515 21.1017 4.84573C21.7364 4.32339 22.0165 3.6279 22.1655 3.15461C22.7288 1.43753 24.0072 1.62511 25.6879 1.35384C26.7368 1.15183 27.2196 0.998878 27.6904 0.8719L28.0004 0.15332C26.3941 0.540025 24.3618 0.897875 24.329 0.900761L24.326 0.897872Z" fill="#0C5947"></path>
              </svg>
              <span>Your Info</span>
            </div>
            <div class="item item-3">
              <svg width="28" height="10" viewbox="0 0 28 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.326 0.897872C22.6006 1.16337 21.4623 1.31632 20.2226 1.40001C18.7505 1.50102 16.9387 1.56739 15.3354 1.60202C14.4742 1.65397 13.61 1.56739 12.7935 1.43176C12.3763 1.36827 10.7611 0.995992 10.4333 0.944047C9.17877 0.744923 7.64706 0.805526 6.39249 0.78244C3.61813 0.727608 3.38867 0.525596 2.24733 0.378417C1.57982 0.291841 0.962961 0.213923 0.489144 0.514053C-0.0800333 0.877671 -0.199233 1.72612 0.381864 2.4649C0.873561 3.09113 0.822903 3.41145 0.760323 3.75199C0.700723 4.06943 0.769263 4.2801 0.867603 4.42727C1.07322 4.73318 1.90762 5.12277 3.63303 5.04196C4.6939 4.9929 6.14217 4.69277 8.07916 3.64809C9.09832 3.09978 10.5227 2.3812 12.415 2.55436C13.4789 2.64959 14.5785 2.62073 15.2311 2.51973C15.7794 2.43604 16.0536 2.34657 16.9536 2.22248C17.1055 2.20228 18.1336 2.05222 18.1664 2.26865C18.1962 2.45624 17.332 2.73328 17.192 2.77368C15.1834 3.36239 14.8437 3.06515 13.3269 3.0767C11.7535 3.08247 10.1979 3.33354 9.12216 4.08675C9.12216 4.08675 7.50998 5.03331 6.45805 5.10545C4.57172 5.2382 3.67773 5.95389 3.56747 6.84562C3.48999 7.46031 4.0383 7.81527 4.90846 7.95091C5.73392 8.07789 4.9919 9.04465 7.4623 9.56987C10.481 10.2134 11.381 9.59585 11.9084 9.09082C12.5342 8.49056 12.2869 7.41125 12.4985 6.73019C12.7548 5.91349 13.2614 5.01022 14.7215 4.38399C15.3652 4.06943 16.4082 3.95977 17.6241 3.51535C19.1081 2.97569 20.7024 2.06087 21.4951 1.92524C21.8497 1.86463 22.2311 1.83289 21.9957 2.09839C21.8348 2.2802 21.4325 2.63805 21.1971 2.79388C19.7637 3.73179 19.0455 3.93379 17.5942 4.30318C16.1341 4.56291 14.8914 5.26129 14.5755 6.04047C14.209 6.94086 14.06 6.8312 13.7054 7.30159C13.4342 7.66232 13.4193 7.93359 13.4551 8.3607C13.4878 8.74452 13.8156 9.34189 14.4474 9.63048C14.7215 9.78054 15.2222 9.74302 15.5351 9.63625C16.4023 9.34478 16.6883 9.55256 17.0638 9.46021C18.8727 9.02156 18.2737 7.87299 19.1915 6.45892C19.5163 5.95678 20.5117 5.43155 21.0868 4.86015C21.0928 4.85438 21.0987 4.8515 21.1017 4.84573C21.7364 4.32339 22.0165 3.6279 22.1655 3.15461C22.7288 1.43753 24.0072 1.62511 25.6879 1.35384C26.7368 1.15183 27.2196 0.998878 27.6904 0.8719L28.0004 0.15332C26.3941 0.540025 24.3618 0.897875 24.329 0.900761L24.326 0.897872Z" fill="#0C5947"></path>
              </svg>
              <span>Confirmation</span>
            </div>
          </div>
        </div>
        <input id="appointment_id" type="hidden">
        <input id="reschedule_appointment" type="hidden" value="no">
        <input id="category" type="hidden">
        <input id="month" type="hidden" value="
												<?php echo date('Y-m'); ?>">
        <input id="date" type="hidden" value="
													<?php echo date('Y-m-d'); ?>">
        <input id="appointmentTypeID" type="hidden">
        <input id="addonIDs" type="hidden">
        <input id="timezone" type="hidden" value="
																<?php echo esc_attr(wp_timezone_string()); ?>">
        <input id="calendarID" type="hidden" value="any">
        <input id="startDate" type="hidden">
        <input id="time" type="hidden">
        <input id="appointment_txt" type="hidden">
        <input id="date_txt" type="hidden">
        <input id="time_txt" type="hidden">
        
        <?php get_template_part('template-parts/booking-form/step', '1', ['categories' => $categories]); ?>
        <?php get_template_part('template-parts/booking-form/step', '2', ['appointment_types' => $appointment_types]); ?>
        <?php get_template_part('template-parts/booking-form/step', '3', ['addons' => $addons]); ?>
        <?php get_template_part('template-parts/booking-form/step', '4'); ?>
        <?php get_template_part('template-parts/booking-form/step', '5'); ?>
        <?php get_template_part('template-parts/booking-form/step', '6'); ?>

        <div class="text-block"> 
          <?php if ( $title ) : ?>
            <div class="subtitle"> <?php echo esc_html($title); ?></div> 
          <?php endif; ?>

          <?php if ( $desc ) : ?>
            <p> 
              <?php echo nl2br($desc); ?>
            </p> 
          <?php endif; ?>
        </div>

        <div class="faq-block" data-aos="fade-up">
          <div class="accordion-faq js-accordion" data-active-class="open" data-open-first="false" data-hide-siblings="false" data-breakpoint="640" data-scroll-to-opened="false">
            <div class="col"> <?php if ( $faqs_l ) : ?> <?php foreach ( $faqs_l as $key_l => $faq_l ) : ?> <div class="accordion-faq__item js-accordion-item 
																										<?php echo ( ($key_l == 0) ? 'active' : '' ); ?>">
                <div class="accordion-faq__title js-accordion-title">
                  <div class="a-text"> <?php echo esc_html($faq_l['question_faq_left']); ?> </div>
                  <div class="a-icon"></div>
                </div>
                <div class="accordion-faq__dropdown js-accordion-dropdown" <?php echo ( ($key_l == 0) ? 'style="display: block;"' : '' ); ?>>
                  <div class="text-section"> <?php echo $faq_l['answer_faq_left']; ?> </div>
                </div>
              </div> <?php endforeach; ?> <?php endif; ?> </div>
            <div class="col"> <?php if ( $faqs_r ) : ?> <?php foreach ( $faqs_r as $key_r => $faq_r ) : ?> <div class="accordion-faq__item js-accordion-item">
                <div class="accordion-faq__title js-accordion-title">
                  <div class="a-text"> <?php echo esc_html($faq_r['question_faq_right']); ?> </div>
                  <div class="a-icon"></div>
                </div>
                <div class="accordion-faq__dropdown js-accordion-dropdown">
                  <div class="text-section"> <?php echo $faq_r['answer_faq_right']; ?> </div>
                </div>
              </div> <?php endforeach; ?> <?php endif; ?> </div>
          </div>
        </div>
        
        <div class="powered-by">
          <svg width="168" height="36" viewbox="0 0 168 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_945_168233" style="mask-type:luminance" maskunits="userSpaceOnUse" x="0" y="0" width="168" height="36">
              <path d="M167.5 0H0.5V36H167.5V0Z" fill="white"></path>
            </mask>
            <g mask="url(#mask0_945_168233)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M3.852 25.6297H7.351L6.775 23.9127C6.46029 22.9973 6.15527 22.0786 5.86 21.1567H5.402C5.166 21.8347 4.959 22.4667 4.457 23.9127L3.852 25.6297ZM0.5 29.7997L4.265 19.5157H7.055L10.777 29.7997V30.3267H8.947L7.883 27.2397H3.292L2.229 30.3267H0.501999V29.7997H0.5ZM22.187 27.4817C21.537 29.1827 20.017 30.5387 17.522 30.5387C14.362 30.5387 12.311 28.1587 12.311 24.9367C12.311 21.7137 14.363 19.3047 17.551 19.3047C19.87 19.3047 21.479 20.4947 22.129 22.3167L20.253 22.6927C19.751 21.5927 18.806 20.9157 17.522 20.9157C15.426 20.9157 14.23 22.6777 14.23 24.9357C14.23 27.2107 15.485 28.9267 17.596 28.9267C18.969 28.9267 19.855 28.1437 20.342 27.1647L22.187 27.4817ZM31.192 26.1107V19.5157H33.052V26.1557C33.052 29.2887 31.443 30.5687 28.786 30.5687C26.128 30.5687 24.519 29.2887 24.519 26.1567V19.5157H26.379V26.1107C26.379 28.0687 27.279 29.0177 28.786 29.0177C30.292 29.0177 31.192 28.0687 31.192 26.1107ZM36.255 30.3277H38.115V19.5157H36.255V30.3277ZM43.592 21.1867H40.536V19.5157H48.464V21.1867H45.439V30.3277H43.593V21.1877L43.592 21.1867ZM53.409 26.3067L49.999 20.1327V19.5157H51.741L52.907 21.7137C53.542 22.9037 53.778 23.4607 54.398 24.5897C54.988 23.4907 55.506 22.5417 55.904 21.7437L57.056 19.5157H58.709V20.1327L55.269 26.3067V30.3277H53.409V26.3067ZM66.031 27.2557C66.238 28.3257 67.079 28.9877 68.364 28.9877C69.633 28.9877 70.371 28.3247 70.371 27.3457C70.371 26.3667 69.619 26.1107 68.393 25.7657L67.596 25.5387C65.706 24.9967 64.555 24.1237 64.555 22.4067C64.555 20.5997 66.002 19.3047 68.319 19.3047C70.49 19.3047 71.818 20.4487 72.04 22.2107L70.268 22.3607C70.047 21.4577 69.412 20.9307 68.26 20.9307C67.183 20.9307 66.533 21.5027 66.533 22.3007C66.533 23.2047 67.271 23.4907 68.482 23.8827L69.235 24.1227C71.139 24.7257 72.306 25.3277 72.306 27.2107C72.306 29.2287 70.652 30.5687 68.305 30.5687C66.12 30.5687 64.569 29.5287 64.23 27.4207L66.031 27.2557ZM84.219 27.4817C83.57 29.1827 82.049 30.5387 79.554 30.5387C76.394 30.5387 74.342 28.1587 74.342 24.9367C74.342 21.7137 76.394 19.3047 79.582 19.3047C81.902 19.3047 83.511 20.4947 84.16 22.3167L82.285 22.6927C81.784 21.5927 80.837 20.9157 79.554 20.9157C77.457 20.9157 76.261 22.6777 76.261 24.9357C76.261 27.2107 77.516 28.9267 79.627 28.9267C81.001 28.9267 81.887 28.1437 82.374 27.1647L84.219 27.4817ZM88.499 25.5837V30.3277H86.654V19.5157H88.499V23.9277H93.238V19.5157H95.083V30.3277H93.238V25.5837H88.499ZM98.39 19.5157H105.254V21.1717H100.206V23.9877H104.902V25.6287H100.206V28.6707H105.358V30.3277H98.39V19.5157ZM110.023 28.7007H111.632C113.802 28.7007 115.205 27.6017 115.205 24.8907C115.205 22.2857 114.067 21.1267 111.026 21.1267H110.023V28.7007ZM108.178 19.5157H111.632C113.212 19.5157 114.497 19.8757 115.397 20.5697C116.549 21.4577 117.139 22.9037 117.139 24.8157C117.139 26.4727 116.697 27.8727 115.766 28.8517C114.88 29.7857 113.522 30.3277 111.602 30.3277H108.178V19.5157ZM126.44 26.1107V19.5157H128.299V26.1557C128.299 29.2887 126.689 30.5687 124.032 30.5687C121.376 30.5687 119.766 29.2887 119.766 26.1567V19.5157H121.625V26.1107C121.625 28.0687 122.527 29.0177 124.032 29.0177C125.538 29.0177 126.44 28.0687 126.44 26.1107ZM131.502 19.5157H133.361V28.6707H138.176V30.3277H131.502V19.5157ZM140.639 30.3277H142.5V19.5157H140.639V30.3277ZM145.807 19.5157H148.139L151.609 25.6747C151.992 26.3667 152.479 27.3007 152.82 27.9487H152.848C152.83 26.9698 152.82 25.9908 152.82 25.0117V19.5157H154.62V30.3277H152.347L148.937 24.3797C148.361 23.3697 147.873 22.4067 147.593 21.9247H147.563C147.563 22.4217 147.607 23.5357 147.607 24.3797V30.3277H145.807V19.5157ZM167.317 24.6197L167.848 25.2977C167.773 28.7167 165.545 30.5377 162.711 30.5377C159.492 30.5377 157.32 28.2647 157.32 24.9367C157.32 21.6987 159.388 19.3047 162.68 19.3047C165.101 19.3047 166.741 20.5847 167.42 22.3317L165.529 22.6917C165.057 21.6087 164.039 20.9157 162.695 20.9157C160.495 20.9157 159.226 22.5867 159.226 24.9057C159.226 27.2707 160.509 28.9267 162.711 28.9267C164.659 28.9267 165.736 27.7667 165.942 26.1867H161.825V24.6197H167.317Z" fill="#4F4F4F"></path>
              <path d="M53.5 7.99956V0.101562H55.964C57.68 0.101562 58.703 0.838562 58.703 2.37856C58.703 3.97356 57.592 4.67756 55.953 4.67756H54.424V7.99956H53.5ZM54.424 0.904562V3.88556H55.942C56.987 3.88556 57.779 3.50056 57.779 2.38956C57.779 1.28956 56.987 0.904562 55.909 0.904562H54.424ZM62.322 2.02656C64.104 2.02656 65.237 3.31356 65.237 5.11756C65.237 6.88856 64.126 8.17556 62.311 8.17556C60.496 8.17556 59.418 6.88856 59.418 5.11756C59.418 3.31356 60.551 2.02656 62.322 2.02656ZM62.311 2.78556C61.024 2.78556 60.331 3.76456 60.331 5.10656C60.331 6.45956 61.024 7.41656 62.311 7.41656C63.598 7.41656 64.291 6.45956 64.291 5.10656C64.291 3.76456 63.587 2.78556 62.311 2.78556ZM67.767 7.99956L65.963 2.21356H66.909L67.602 4.57856C67.822 5.34856 68.042 6.16256 68.273 7.03156H68.295C68.526 6.20656 68.713 5.49156 68.988 4.55656L69.659 2.21356H70.583L71.276 4.65556C71.496 5.41556 71.727 6.20656 71.936 7.04256H71.969C72.189 6.27256 72.409 5.44756 72.651 4.62256L73.344 2.21356H74.235L72.431 7.99956H71.441L70.748 5.62356C70.517 4.84356 70.275 3.89656 70.121 3.32456H70.088C69.912 3.91856 69.725 4.73256 69.439 5.66756L68.768 7.99956H67.767ZM80.571 5.27156H75.852C75.885 6.44856 76.578 7.40556 77.843 7.40556C78.8 7.40556 79.383 6.85556 79.636 6.36056L80.483 6.54756C80.043 7.52656 79.086 8.17556 77.821 8.17556C76.039 8.17556 74.961 6.89956 74.961 5.09556C74.961 3.37956 76.083 2.02656 77.821 2.02656C79.592 2.02656 80.571 3.35756 80.571 5.20556V5.27156ZM75.874 4.57856H79.658C79.57 3.53356 78.877 2.75256 77.81 2.75256C76.622 2.75256 75.962 3.64356 75.874 4.57856ZM81.946 2.21356H82.793V2.62056C82.793 2.80756 82.793 3.05056 82.782 3.21456H82.804C83.013 2.53256 83.596 2.14756 84.421 2.14756C84.52 2.14756 84.696 2.15856 84.773 2.15856L84.905 3.00556C84.729 2.99556 84.52 2.99556 84.377 2.99556C83.112 2.99456 82.837 3.84156 82.837 5.15056V7.99956H81.957V2.92956C81.957 2.63156 81.957 2.42256 81.946 2.21356ZM90.988 5.27156H86.269C86.302 6.44856 86.995 7.40556 88.26 7.40556C89.217 7.40556 89.8 6.85556 90.053 6.36056L90.9 6.54756C90.46 7.52656 89.503 8.17556 88.238 8.17556C86.456 8.17556 85.378 6.89956 85.378 5.09556C85.378 3.37956 86.5 2.02656 88.238 2.02656C90.009 2.02656 90.988 3.35756 90.988 5.20556V5.27156ZM86.291 4.57856H90.075C89.987 3.53356 89.294 2.75256 88.227 2.75256C87.039 2.75256 86.379 3.64356 86.291 4.57856ZM96.785 7.99956V7.64756C96.785 7.46056 96.796 7.25156 96.796 6.98756H96.774C96.4 7.65856 95.663 8.13156 94.673 8.13156C93.067 8.13156 91.967 6.93256 91.967 5.11756C91.967 3.34656 93.023 2.05956 94.684 2.05956C95.685 2.05956 96.422 2.56556 96.752 3.21456C96.752 3.03856 96.741 2.67556 96.741 2.48856V0.101562H97.621V7.54956C97.621 7.68156 97.621 7.87956 97.632 8.00056L96.785 7.99956ZM94.805 2.81856C93.584 2.81856 92.891 3.80856 92.891 5.11856C92.891 6.43756 93.617 7.39456 94.805 7.39456C96.037 7.39456 96.796 6.43756 96.796 5.10656C96.796 3.78656 96.015 2.81856 94.805 2.81856ZM102.098 7.99956C102.109 7.71356 102.109 7.48256 102.109 7.25156V0.101562H103V2.25756C103 2.52156 102.978 2.95056 102.978 3.21456H102.989C103.33 2.57656 104.067 2.05956 105.057 2.05956C106.707 2.05956 107.763 3.34656 107.763 5.11756C107.763 6.94356 106.674 8.13156 105.057 8.13156C104.078 8.13156 103.341 7.66956 102.967 6.98756H102.945C102.956 7.17456 102.956 7.39456 102.956 7.59256V7.99956H102.098ZM104.914 2.81856C103.715 2.81856 102.934 3.77556 102.934 5.10656C102.934 6.44856 103.682 7.39456 104.925 7.39456C106.113 7.39456 106.839 6.43756 106.839 5.11756C106.839 3.79756 106.146 2.81856 104.914 2.81856ZM112.757 2.21356H113.714L111.305 8.57156C110.92 9.59456 110.59 10.0016 109.556 10.0016C109.358 10.0016 109.325 10.0016 109.083 9.99056L108.94 9.24256C109.171 9.25356 109.336 9.25356 109.523 9.25356C110.106 9.25356 110.326 8.91356 110.634 7.99956L108.401 2.21356H109.391L110.326 4.82056C110.59 5.55756 110.843 6.28356 111.074 6.99856H111.107C111.349 6.27256 111.591 5.54656 111.844 4.82056L112.757 2.21356Z" fill="#4F4F4F"></path>
            </g>
          </svg>
        </div>
      </div>
    </div>
  </div>
</div> 

<?php
get_footer();