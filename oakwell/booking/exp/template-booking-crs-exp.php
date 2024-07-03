<?php
  /**
   * Template name: Booking CRS
   */

  get_header();
  // $curlHandle = curl_init('https://test.ukr-agro-select.com.ua/List.php');
  // curl_setopt($curlHandle, CURLOPT_POSTFIELDS, $postParameter);
  // curl_setopt($curlHandle, CURLOPT_RETURNTRANSFER, true);
  // $curlResponse = curl_exec($curlHandle);
  // curl_close($curlHandle);
  $faqs_l = get_field('faq_left');
  $faqs_r = get_field('faq_right');

  $types = makeHttpRequest('https://acuityscheduling.com/api/v1/appointment-types?includeDeleted=false');

  foreach ($types as &$type) {
    addMetadataForTypes($type);
  }

  unset($type);


  $addons = makeHttpRequest('https://acuityscheduling.com/api/v1/appointment-addons');

  foreach ($addons as &$addon) {
    addMetadataForAddons($addon);
  }

  unset($addon);

  function addMetadataForTypes(&$type) {
    $id = $type['id'];

    if ($id == '45350327') {
      // father
      $type['caption'] = 'Ideal for Dad';
      $type['adults'] = 2;
      $type['icons'] = 1;
      $type['brief'] = ['90-minute session', 'Private spa suite', 'Beverage credit & 15-minute zero-gravity massages'];
      $type['descr'] = ['90-minute access to your own private spa suite', 'Includes a personal beer bath, infrared sauna, and rain shower', '$15 cosmetic mini-bar credit and 15-minute zero-gravity massages included', 'Complete with gourmet chocolates, beverage credit & charcuterie board', 'Enjoy a complimentary drink at check-in and access to a mimosa bar'];
    } elseif ($id == '22530026') {
      // date night 30
      $type['caption'] = 'Ideal for couples';
      $type['adults'] = 2;
      $type['icons'] = 2;
      $type['brief'] = ['90-minute session', 'Romantic private spa suite', 'Beverage credit or sparkling wine'];
      $type['descr'] = ['90-minute access to your own private spa suite', 'Includes a personal beer bath, infrared sauna, and rain shower', 'Complete with romantic candles, rose petals, gourmet chocolates & <span class="tooltip"><span class="tooltip-trigger">$30&nbsp;beverage&nbsp;credit</span><span class="tooltip-body">The $30 beverage credit can be used towards any beverage from our self-pour tap wall, including beer, wine, cider, kombucha. Additional beverages will be charged by the ounce. <i></i></span></span>'];
      
    } elseif ($id == '22530047') {
      // date night w/
      $type['caption'] = 'Ideal for couples';
      $type['adults'] = 2;
      $type['icons'] = 2;
      $type['brief'] = ['90-minute session', 'Romantic private spa suite', 'Beverage credit or sparkling wine'];
      $type['descr'] = ['90-minute access to your own private spa suite', 'Includes a personal beer bath, infrared sauna, and rain shower', 'Complete with romantic candles, rose petals, gourmet chocolates & bottle of sparkling wine'];
    } elseif ($id == '27351564') {
      //  garage
      $type['caption'] = 'Ideal for groups';
      $type['adults'] = 4;
      $type['icons'] = 3;
      $type['brief'] = ['90-minute session', '2 private spa suites joined together'];
      $type['descr'] = ['90-minute access to your own 2 private spa suites joined together', 'Includes two personal beer baths, two infrared saunas and two rain showers', 'Beverages sold separately'];
    } elseif ($id == '22529967') {
      // standart
      $type['caption'] = 'Ideal solo or for friends';
      $type['adults'] = 2;
      $type['icons'] = 1;
      $type['brief'] = ['90-minute session', 'Private spa suite'];
      $type['descr'] = ['90-minute access to your own private spa suite', 'Includes a personal beer bath, infrared sauna, and rain shower', 'Beverages sold separately'];
    }
  }

  function addMetadataForAddons(&$addon) {
    $id = $addon['id'];

    $pattern = '/^(.*?)(?:\((?:\$([\d.]+)|free)(?:\s(per person))?\))?$/';
    preg_match($pattern, $addon['name'], $matches);

    $addon['renderTitle'] = trim($matches[1]);
    $addon['renderPrice'] = isset($matches[2]) ? '+ $' . $matches[2] : 'free';
    $addon['renderPriceCaption'] = isset($matches[3]) ? 'per person' : '';

    if ($addon['renderPrice'] !== 'free' && !$addon['renderPriceCaption']) {
      $addon['renderPriceCaption'] = 'per item';
    }

    $addon['image'] = 'https://flopsi69.github.io/crs/oakwell/booking/img/addon-' . $id . '.png';

    if ($id == '1581536') {
      // 15min
      $addon['caption'] = 'Experience a 15-minute, head-to-toe full body massage';
    } elseif ($id == '1581538') {
      // 30min
      $addon['caption'] = 'Experience a 30-minute, head-to-toe full body and stretching massage';
    } elseif ($id == '1786732') {
      $addon['renderTitleAlias'] = 'French Sparkling Wine';
      $addon['caption'] = 'Elevate your celebration with a bottle of Crémant d\'Alsace tubside';
    } elseif ($id == '1784570') {
      $addon['caption'] = 'Elevate Your Celebration with Our Exclusive Anniversary Set-Up. It includes a happy anniversary banner, a gourmet box of chocolate, and a keepsake card from a local artist!';
    } elseif ($id == '1785893') {
      $addon['caption'] = 'Transform Your Celebration with Our Exclusive Birthday Set-Up. It includes a happy birthday banner, a gourmet box of chocolate, and a keepsake card from a local artist!';
    } elseif ($id == '1755839') {
      $addon['renderTitleAlias'] = 'Charcuterie Board';
      $addon['caption'] = 'Pair your beverage with cured meats and fine cheeses';
    } elseif ($id == '1785616') {
      $addon['renderTitleAlias'] = 'Happy Anniversary Banner';
      $addon['caption'] = 'Celebrate this special occasion with a happy anniversary banner';
    } elseif ($id == '1785614') {
      $addon['renderTitleAlias'] = 'Happy Birthday Banner';
      $addon['caption'] = 'Celebrate this special occasion with a happy birthday banner';
    }
  }

  function makeHttpRequest($url) {
    $headers = array(
      'accept: application/json',
      'authorization: Basic MzE2NzIxNDU6YTBjYTVkZjA2YjE2ZmQ1NGIzZDc2NGJkMDQ0Y2QyMzc='
    );

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

    $response = curl_exec($ch);
    curl_close($ch);

    $decodeRes = json_decode($response, true);
    $filterRes = array_filter($decodeRes, function($resItem) {
      // return true;
      // || $resItem['category'] === 'Test'
      return $resItem['active'] === true && $resItem['private'] === false;
    });

    return $filterRes;
  }

  // $categories = array_unique(array_column($types, 'category'));
?>

<!-- <?php echo '<pre>'; print_r($addons); echo '</pre>'; ?> -->

<script type="text/javascript" src="https://web.squarecdn.com/v1/square.js"></script>
<script>
  let observer = new MutationObserver((mutations, observer) => {
    for (let mutation of mutations) {
      if (mutation.type == 'attributes' && mutation.attributeName == 'content' && mutation.target.getAttribute('name') == 'viewport' && mutation.target.getAttribute('content') !== "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"){
        document.querySelector('[name="viewport"]').setAttribute('content', "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no");
      }
    }
  })

  observer.observe(document.head, { subtree: true, attributes: true})
</script>

<style>
  /* Refactoring existing elements */
  .modalsWrap .fathers {
    display: none!important;
  }
  .b-booking-def-cont {
    padding-top: 24px;
    border-top-left-radius: 32px;
    border-top-right-radius: 32px;
  }
  body {
    padding-bottom: 36px;
  }
  body.booking-result-page {
    padding-bottom: 0;
  }
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
  @media(max-width: 992px) {
    .b-booking-def-footer .title a[href="mailto:hello@oakwell.com"] {
      text-decoration: none;
      /* border-bottom: 1px solid; */
      display: block;
      text-decoration: underline;
      text-underline-offset: 3px;
    }
    .b-booking-def-footer .title  br {
      display: none;
    }
    .b-booking-def-footer .title {
      line-height: 1.3;
    }
  }
  @media(min-width: 992px) {
    body {
      padding-bottom: 0;
    }
    .b-booking-def-cont {
      padding-bottom: 270px;
      border-top-left-radius: 90px;
      border-top-right-radius: 90px;
      padding-top: 40px;
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
  .booking-btn_disable, .booking-btn[disabled] {
    background: #74A187!important;
    pointer-events: none;
  }
  @media(min-width: 992px) {
    .step > .booking-title {
      display: flex;
      gap: 24px;
      align-items: center;
    }
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
  .book-form__group.book-form_error label {
    color: red;
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
  .book-form__group.book-form_error input {
    border-color: red;
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
    text-underline-offset: 3px;
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

  /* Back */
  .back {
    display: inline-flex;
    align-content: center;
    gap: 10px;
    cursor: pointer;
    transition: 0.3s;
    color: #0C5947;
    font-size: 13px;
    font-weight: 500;
    line-height: 120%;
    letter-spacing: 0.91px;
    text-transform: uppercase;
    padding: 12px 16px;
    border-radius: 24px;
    background: #DDF2D0;
  }
  .back-step {
    display: none;
  }
  .back-mob {
    margin-top: 16px;
  }
  .back-mob:not(.active) {
    display: none;
  }
  .back-mob.active + .steps {
    margin-top: 12px;
  }
  @media(hover:hover) {
    .back:hover {
      opacity: 0.6;
    }
  }

  /* New Progress */
  .progress {
    display: none;
    background: #fff;
    height: 70px;
    border-radius: 10000px;
    border: 1px solid #DBE7D7;
    background: #FFF;
    color: #5F6959;
    font-size: 16px;
    font-weight: 400;
    line-height: 140%; 
    margin-bottom: 32px;
  }
  .progress-step {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    padding: 0 12px;
    flex-flow: column;
    gap: 3px;
    min-width: 0;
  }
  .progress-tooltip {
    position: absolute;
    left: 50%;
    top: 100%;
    z-index: 2;
    transform: translate(-50%, 12px);;
    border-radius: 16px;
    background: #FFF;
    display: flex;
    justify-content: center;
    padding: 6px 8px;
    width: 265px;
    color: #5F6959;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.4; 
    background-color: #F0F0F0;
    border: 1px solid #B9D1B1;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.16);
    transition: 0.3s;
    opacity: 0;
    pointer-events: none;
  }
  .progress-tooltip i {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -100%);
    /* margin-left: -12px; */
    width: 24px;
    height: 12px;
    overflow: hidden;
  }
  .progress-tooltip i::after {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    left: 50%;
    top: 12px;
    transform: translate(-50%,-50%) rotate(45deg);
    background-color:  #F0F0F0;
    border: 1px solid #B9D1B1;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.16);
  }
  .progress-step.pass:hover .progress-tooltip {
    opacity: 1;
    pointer-events: auto;
  }

  .progress-step:first-child {
    padding-left: 24px;
    border-radius: 100px 0 0 100px;
  }
  .progress-step:last-child {
    padding-right: 24px;
    border-radius: 0 100px 100px 0;
  }
  .progress-step.active {
    background: #0C5947;
    padding-left: 28px;
  }
  .progress-step__divider + .progress-step.active {
    margin-left: -16px;
  }
  .progress-step.pass {
    align-items: flex-start;
    cursor: help;
  }
  .progress-step + .progress-step {
    border-left: 1px solid #DBE7D7;
  }
  .progress-step__title {
    position: relative;
    padding-left: 27px;
    transition: .3s;
    white-space: nowrap;
  }
  .progress-step__title:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 17px;
    height: 17px;
    border-radius: 50%;
    box-sizing: border-box;
    border: 1px solid #5F6959;
  }
  .progress-step.active .progress-step__title {
    color: #DDF2D0;
    font-weight: 500;
  }
  .progress-step.pass .progress-step__title {
    color: #0C5947;
  }
  .progress-step.active .progress-step__title:before {
    border-color:#DDF2D0;
  }
  .progress-step.pass .progress-step__title:before {
    background: #0d5947 url('https://flopsi69.github.io/crs/oakwell/booking/img/check.svg') center no-repeat;
    background-size: cover;
    border-color: transparent;
  }
  .progress-step__caption {
    transition: .3s;
    color: #5F6959;
    font-size: 12px;
    font-weight: 500;
    line-height: 1.2; 
    padding-left: 27px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  } 
  .progress-step__divider {
    position: relative;
    z-index: 1;
    height: 100%;
    width: 17px;
    background: url('https://flopsi69.github.io/crs/oakwell/booking/img/divider-trans.svg') center no-repeat;
    background-size: cover;
  }
  .progress-step.active + .progress-step__divider {
    background-image: url('https://flopsi69.github.io/crs/oakwell/booking/img/divider-next.svg');
    margin-left: -1px;
  }
  .progress-step__divider.pass_current {
    background-image: url('https://flopsi69.github.io/crs/oakwell/booking/img/divider-prev.svg');
  }
  .progress-step:not(.pass) .progress-step__caption {
    display: none;
  }
  
  @media (min-width: 992px) {
    .progress {
      display: flex;
    }
    .back-step {
      display: inline-flex;
      margin-top: -2px;
    }
    .back-mob {
      display: none;
    }
  }

  /* Logs */
  .logs {
    display: grid;
    gap: 12px;
  }
  .logs:not(.active) {
    display: none;
  }
  .logs-step {
    position: relative;
    padding: 14px 24px 14px 46px;
    border-radius: 60px;
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
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
  }
  .logs-step__action {
    color: #0C5947;
    font-size: 10px;
    font-weight: 700;
    line-height: 14px;
    letter-spacing: 0.7px;
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
    line-height: 20px; 
    margin-top: 4px;
  }
  .logs_disabled .logs-step__action {
    display: none!important;
  }
  @media(min-width: 992px) {
    .logs {
      display: none;
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
  .steps {
    display: grid;
    gap: 24px;
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
    box-shadow: 0px -8px 24px 0px rgba(12, 89, 71, 0.18);
    transform: translateY(100%);
    transition: 0.4s;
  }
  .steps-sticky.active {
    transform: translateY(0%);
  }
  @media(min-width: 992px) {
    .steps-sticky_hide {
      display: none!important
    }
    .steps-sticky {
      max-width: 1036px;
      left: 0;
      right: 0;
      margin: auto;
      width: 100%;
      display: flex;
      justify-content: center;
    }
    .steps-sticky .booking-btn {
      min-width: 236px;
      width: auto;
      padding-left: 85px;
      padding-right: 85px;
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
    font-size: 12px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.8px;
    text-transform: uppercase;
  }
  .service-price span {
    color: #0C5947;
    font-size: 15px;
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
      /* font-size: 22px; */
      font-size: 20px;
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
    .service-price {
      letter-spacing: 0.6px;
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
    transition: .3s;
  }
  .picker-plate_loader {
    pointer-events: none;
    filter: grayscale(1);
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
  .air-datepicker-cell.-day-.-other-month- {
    opacity: 0.5;
  }
  .air-datepicker-cell.-day-.-other-month-:hover {
    opacity: 1;
  }
  @media(max-width: 500px) {
    .air-datepicker-body--cells.-days- {
      /* grid-auto-rows: 2.425rem; */
      grid-auto-rows: 10vw;
    }
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
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-flow: column;
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid rgba(185, 209, 177, 0.50);
  }
  /* HTML: <div class="loader"></div> */
  .picker-times__loader {
    position: absolute;
    display: none;
    left: 50%;
    top: 30%;
    width: 50px;
    aspect-ratio: 1;
    margin-left: -25px;
    border-radius: 50%;
    border: 8px solid #0000;
    border-right-color: #0C5947;
    animation: l24 1.5s infinite linear;
    pointer-events: none;
  }
  .picker-plate_loader .picker-times__loader {
    display: block;
  }
  .picker-times__loader:before,
  .picker-times__loader:after {
    content: "";
    position: absolute;
    inset: -8px;
    border-radius: 50%;
    border: inherit;
    animation: inherit;
    animation-duration: 2s;
  }
  .picker-times__loader:after {
    animation-duration: 4s;
  }
  @keyframes l24 {
    100% {
      transform: rotate(1turn);
    }
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
  .picker-note {
    margin-top: 32px;
  }
  .picker-note_inner {
    display: none;
  }
  .picker-row {
    margin-top: 16px;
  }
  .picker-plate:not(.times-empty) .picker-unavailable {
    display: none;
  }
  .picker-plate.times-empty ~ .picker-note {
    display: none;
  }
  .picker-calendar .air-datepicker-cell {
    font-size: 16px;
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
    .picker-plate:not(.active) .picker-times__choose, .picker-plate.times-empty .picker-times__choose {
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
      padding-right: 97%;
    }
    .air-datepicker-nav--action {
      border-radius: 100px;
      height: 2.5rem;
      margin-top: -4px;
    }
    .air-datepicker-cell.-month- {
      border-radius: 100px;
      margin-bottom: 5px;
    }
    .air-datepicker-nav .air-datepicker-nav--action:last-child {
      margin-left: 10px;
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
      display: flex;
    }
  }

  /* Summary */
  .summary {}
  .summary-location {
    margin-top: 15px;
    font-weight: bold;
  }
  .summary-plate {
    margin-top: 16px;
  }
  .summary-head {
    padding: 24px 24px 12px;
    color: #000;
    font-size: 22px;
    font-weight: 400;
    line-height: 140%;
  }
  .summary-table {
    padding: 16px 24px 12px;
    border-top: 1px solid #DBE7D7;
    color: #000;
    font-size: 14px;
    font-weight: 400;
    line-height: 140%;
  }
  .summary-block__caption {
    color: #5F6959;
    font-size: 14px;
    font-weight: 400;
    line-height: 140%;
    margin-bottom: 5px;
  }
  .summary-block_disable {
    display: none;
  }
  .summary-block + .summary-block {
    margin-top: 16px;
  }
  .summary-row {
    display: flex;
    gap: 15px;
    justify-content: space-between;
    align-items: flex-end;
  }
  .summary-row + .summary-row {
    margin-top: 6px;
  }
  .summary-row_name {
    font-size: 16px;
    line-height: 1.4;
  }
  .summary-row_addon:last-child {
    border-bottom: 0;
    padding-bottom: 0;
  }
  .summary-row_final {
    font-size: 20px;
    line-height: 1.3;
  }
  .summary-row_final sup {
    /* top: -9px; */
    font-size: 11px;
    vertical-align: super;
    /* position: relative; */
  }
  .summary-row__value {
    text-align: right;
    white-space: nowrap;
  }
  .summary-table__divider {
    margin: 16px -24px;
    border-top: 1px dashed #DBE7D7;
  }
  .summary-brief {
    display: grid;
    background: #fff;
    gap: 8px;
    color: #000;
    font-size: 15px;
    line-height: 140%; 
    border-top: 1px solid rgba(185, 209, 177, 0.50);
    padding: 12px 24px;
  }
  .summary-brief__item {
    display: flex;
    gap: 8px;
  }
  .summary-form {
    padding: 24px;
  }
  .summary-divider {
    height: 33px;
    background: url('https://flopsi69.github.io/crs/oakwell/booking/img/summary-divider_desk.svg') center no-repeat;
    background-size: contain;
    background-repeat: repeat-x;
  }
  .summary-note {
    color: #5F6959;
    font-size: 14px;
    font-weight: 400;
    line-height: 140%;
    padding: 12px 24px 24px;
    border-bottom: 1px solid rgba(185, 209, 177, 0.50);
  }
  .summary-form__title {
    color: #000;
    font-size: 22px;
    font-weight: 400;
    line-height: 140%;
  }
  .summary-form__caption {
    color: #5F6959;
    font-size: 14px;
    font-weight: 400;
    line-height: 140%;
    margin-top: 12px;
  }
  .summary-form__inner {
    margin: 12px -24px 0;
    border-top: 1px solid rgba(185, 209, 177, 0.50);
    padding: 13px 24px 0;
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
  .summary-checkbox__icon.book-form_error:before {
    border-color: red;
  }
  .summary-checkbox.active .summary-checkbox__icon:before {
    opacity: 0;
  }
  .summary-error {
    color: red;
    margin-top: 10px;
    font-weight: bold;
    font-size: 14px;
    line-height: 1.4;
  } 
  .summary.summary_result .summary-form {
    display: none;
  }
  .summary.summary_result .summary-title {
    text-align: center;
    justify-content: center;
  }
  .summary.summary_result .summary-plate {
    margin-top: 30px;
    justify-content: center;
    background: none;
    border: none;
  }
  .summary.summary_result .summary-info {
    border: none;
    box-shadow: none;
  }
  .summary.summary_result .summary-table {
    border-left: 1px solid #B9D1B1;
    border-right: 1px solid #B9D1B1;
    background: #fff;
  }
  .summary.summary_result .summary-divider {
    margin-top: -7px;
    background-repeat: no-repeat;
  }
  .summary.summary_result .summary-head {
    background: #fff;
    border-radius: 32px 32px 0 0;
    border-left: 1px solid #B9D1B1;
    border-right: 1px solid #B9D1B1;
    box-shadow: 0px 2px 0px 0px #0C5947 inset;
  }
  .summary.summary_result .summary-brief {
    border-left: 1px solid #B9D1B1;
    border-right: 1px solid #B9D1B1;
  }
  @media(min-width: 992px) {
    .summary-plate {
      display: flex;
      gap: 24px;
      box-shadow: none;
      background: none;
      border-radius: 0;
      border: none;
      align-items: flex-start;
    }
    .summary-divider {
      margin-top: -7px;
      background-repeat: no-repeat;
    }
    .summary-brief {
      border-left: 1px solid #B9D1B1;
      border-right: 1px solid #B9D1B1;
    }
    .summary-head {
      padding-left: 36px;
      padding-right: 36px;
      background: #fff;
      border-left: 1px solid #B9D1B1;
      border-right: 1px solid #B9D1B1;
      box-shadow: 0px 2px 0px 0px #0C5947 inset;
      border-radius: 4px 32px 0 0;
    }
    .summary-form__inner {
      padding-left: 36px;
      padding-right: 36px;
      margin-left: -36px;
      margin-right: -36px;
    }
    .summary-form__caption {
      margin-top: 8px;
    }
    .summary-table__divider {
      margin-left: -36px;
      margin-right: -36px;
    }
    .summary-table {
      padding: 16px 36px;
      background: #fff;
      border-left: 1px solid #B9D1B1;
      border-right: 1px solid #B9D1B1;
    }
    .summary-note {
      padding: 0;
      border: none;
      margin-top: 16px;
    }
    .summary-form {
      order: -1;
      max-width: 460px;
      flex-grow: 1;
      border-radius: 32px 4px 4px 32px;
      border: 1px solid #B9D1B1;
      border-top: none;
      background: #fff;
      box-shadow: 0px 2px 0px 0px #0C5947 inset;
      padding: 24px 36px 16px;
    }
    .summary-info {
      border-radius: 4px 32px 4px 4px;
      overflow: hidden;
      max-width: 460px;
      flex-grow: 1;
      flex-shrink: 0;
      border-bottom: 0;
      box-shadow: 0px 2px 0px 0px #0C5947 inset;
    }
    .summary-row_final {
      font-size: 22px;
      /* line-height: 24px; */
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
  .payment-form__inner {
    position: relative;
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
    position: relative;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 6px;
    border-radius: 18px;
    border: 1px solid #ECE2D8;
  }
  .tickers-item:before {
    content: '';
    position: absolute;
    right: 10px;
    top: -8px;
    width: 18px;
    height: 14px;
    background: url('https://flopsi69.github.io/crs/oakwell/booking/img/quote.svg') center no-repeat;
    background-size: contain;
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
    .tickers-item:before {
      right: 19px;
      top: -12px;
      width: 28px;
      height: 22px;
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
    margin: 10px 0 40px;
  }
  .b-booking-def-cont .faq-block {
    margin-top: 35px;
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
  .reviews-decor_desk {
    display: none;
  }

  @media(min-width: 992px) {
    .reviews-decor_mob {
      display: none;
    }
    .reviews-decor_desk {
      display: block;
    }
    .reviews {
      margin: 0 0 64px;
      /* display: none; */
    }
    .reviews .b-goog-review {
      padding: 0 0 50px;
    }
    .b-goog-review .container {
      padding-left: 56px;
      padding-right: 56px;
    }
  }

  .sq-card-wrapper .sq-card-message {
    margin-bottom: 0;
  }
  .sq-card-message-no-error, .sq-card-message:not(.sq-card-message-no-error):not(.sq-card-message-error) {
    display: none;
  }
	

	#fast-checkout .fail,
	#fast-checkout .success {
		background: #FAFAFA;
		color: black;
	}

	#fast-checkout .fail h2,
	#fast-checkout .success h2 {
		color: rgba(0, 0, 0, 0.55);
	}

	#fast-checkout .fail button,
	#fast-checkout .success button {
		background: #006AFF;
		border-radius: 6px;
		border: none;
		color: white;
	}

	#fast-checkout p.warning {
		text-align: center;
		color: rgba(0, 0, 0, 0.4);
	}
</style>


<input type="hidden" id="bookingCategory" value="">
<input type="hidden" id="bookingName" value="">
<input type="hidden" id="bookingTypeId" value="">
<input type="hidden" id="bookingAddons" value="">
<input type="hidden" id="bookingDay" value="">
<input type="hidden" id="bookingPrice" value="">
<input type="hidden" id="bookingTime" value="">

<input type="hidden" id="orderPrice" value="">
<input type="hidden" id="orderId" value="">
<input type="hidden" id="orderLastName" value="">
<input type="hidden" id="orderFirstName" value="">
<input type="hidden" id="orderEmail" value="">
<input type="hidden" id="orderPhone" value="">
		

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
    <!-- New Progress for steps -->
    <div class="progress ff-lato">
      <div class="progress-step" data-progress-step='0'>
        <div class="progress-step__title">Service</div>
        <div class="progress-step__caption">Date Night Package</div>
        <div class="progress-tooltip"><span></span> <i></i></div>
      </div>

      <div class="progress-step__divider"></div>


      <div class="progress-step" data-progress-step='1'>
        <div class="progress-step__title">Package</div>
        <div class="progress-step__caption"></div>
        <div class="progress-tooltip"><span></span> <i></i></div>
      </div>

      <div class="progress-step__divider"></div>

      <div class="progress-step" data-progress-step='2'>
        <div class="progress-step__title">Additional Services</div>
        <div class="progress-step__caption"></div>
        <div class="progress-tooltip"><span></span> <i></i></div>
      </div>

      <div class="progress-step__divider"></div>

      <div class="progress-step" data-progress-step='3'>
        <div class="progress-step__title">Date and Time</div>
        <div class="progress-step__caption"></div>
        <div class="progress-tooltip"><span></span> <i></i></div>
      </div>

      <div class="progress-step__divider"></div>

      <div class="progress-step" data-progress-step='4'>
        <div class="progress-step__title">Contact information</div>
        <div class="progress-step__caption"></div>
        <div class="progress-tooltip"><span></span> <i></i></div>
      </div>
    </div>
    
    <!-- Logs for completed steps -->
    <div class="logs ff-lato"></div>

    <!-- Back -->
    <div class="back-mob back ff-dm-sans">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <g clip-path="url(#clip0_2012_1639)">
          <path d="M0.183312 8.44241C0.1835 8.4426 0.183656 8.44282 0.183875 8.443L3.44962 11.693C3.69428 11.9365 4.09 11.9356 4.33353 11.6909C4.57703 11.4462 4.57609 11.0505 4.33144 10.807L2.13881 8.625L15.375 8.625C15.7202 8.625 16 8.34519 16 8C16 7.65481 15.7202 7.375 15.375 7.375L2.13884 7.375L4.33141 5.193C4.57606 4.9495 4.577 4.55378 4.3335 4.30913C4.08997 4.06441 3.69422 4.06357 3.44959 4.307L0.183843 7.557C0.183655 7.55719 0.183499 7.55741 0.183281 7.5576C-0.0615009 7.80191 -0.0607189 8.19891 0.183312 8.44241Z" fill="#0C5947"/>
        </g>
        <defs>
          <clipPath id="clip0_2012_1639">
            <rect width="16" height="16" fill="white" transform="translate(16 16) rotate(180)"/>
          </clipPath>
        </defs>
      </svg>
      previous step
    </div>

    <!-- Steps -->
    <div class="steps ff-lato">
      <!-- Services -->
      <div class="step services" data-title="Service">
        <!-- Title -->
        <div class="services-title booking-title"><span>Choose a Service</span></div>

        <!-- List -->
        <div class="services-list">
          <?php 
            $uniqCategories = [];

            foreach($types as $type): 
              if (in_array($type['category'], $uniqCategories)) continue;

              $id = $type['id'];
              $uniqCategories[] = $type['category'];
              $category = $type['category'];
              $price = $type['price'];
              $caption = $type['caption'];
              $brief = $type['brief'];
              $adults = $type['adults'];
              $icons = $type['icons'];
          ?>
          <!-- Item -->
          <div class="service services__item" data-id="<?php echo $id; ?>">
            <div class="service-head">
              <div class="service-head__icons">
                <?php 
                  for ($i=0; $i < $icons; $i++) { 
                    echo '
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
                    ';
                  } 
                ?>
               
              </div>

              <span class="service-head__value"><?php echo $caption; ?></span>
            </div>

            <div class="service-body">
              <div class="service-title"><?php echo $category; ?></div>

              <?php if (is_array($brief) && !empty($brief)): ?>
              <div class="service-options booking-list">
                <?php foreach($brief as $item): ?>
                <div class="service-options__item booking-list__item"><?php echo $item; ?></div>
                <?php endforeach; ?>
              </div>
              <?php endif; ?>
            </div>

            <div class="service-footer">
              <div class="service-price">Starts from <span>$<?php echo $price; ?></span> for up to  <?php echo $adults; ?> adults</div>
              <button class="service-btn link-btn dark booking-btn" data-value="<?php echo $category; ?>">Select</button>
            </div>
          </div>
          <?php endforeach; ?>
        </div>
      </div>

      <!-- Packages -->
      <div class="step packages" data-title="Package">
        <!-- Title -->
        <div class="packages-title booking-title">
          <span>Choose a package</span>
          <div class="back-step back ff-dm-sans">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <g clip-path="url(#clip0_2012_1639)">
                <path d="M0.183312 8.44241C0.1835 8.4426 0.183656 8.44282 0.183875 8.443L3.44962 11.693C3.69428 11.9365 4.09 11.9356 4.33353 11.6909C4.57703 11.4462 4.57609 11.0505 4.33144 10.807L2.13881 8.625L15.375 8.625C15.7202 8.625 16 8.34519 16 8C16 7.65481 15.7202 7.375 15.375 7.375L2.13884 7.375L4.33141 5.193C4.57606 4.9495 4.577 4.55378 4.3335 4.30913C4.08997 4.06441 3.69422 4.06357 3.44959 4.307L0.183843 7.557C0.183655 7.55719 0.183499 7.55741 0.183281 7.5576C-0.0615009 7.80191 -0.0607189 8.19891 0.183312 8.44241Z" fill="#0C5947"/>
              </g>
              <defs>
                <clipPath id="clip0_2012_1639">
                  <rect width="16" height="16" fill="white" transform="translate(16 16) rotate(180)"/>
                </clipPath>
              </defs>
            </svg>
            previous step
          </div>
        </div>

        <!-- List -->
        <div class="packages-list">
          <?php foreach($types as $type): 
            $id = $type['id'];
            $name = $type['name'];
            $category = $type['category'];
            $image = $type['image'];
            $price = $type['price'];
            $addonsList = $type['addonIDs'];

            $caption = $type['caption'];
            $brief = $type['brief'];
            $adults = $type['adults'];
            $icons = $type['icons'];
            $descr = $type['descr'];

            // $description = $type['description'];
            // $duration = $type['duration'];
            // $private = $type['private'];
            // $type = $type['type'];
            // $price = explode(".",$type['price'])[0];
          ?>
          <!-- Item -->
          <div class="package" data-category="<?php echo $category ?>" data-id="<?php echo $id ?>" data-addons="<?php echo json_encode($addonsList) ?>">
            <div class="package-body">
              <div class="package-image">
                <img src="<?php echo $image ?>" alt="">
              </div>

              <div class="package-title"><?php echo $name ?></div>

              <?php if (is_array($descr) && !empty($descr)): ?>
              <div class="package-list booking-list">
                <?php foreach($descr as $item): ?>
                <div class="package-list__item booking-list__item"><?php echo $item; ?></div>
                <?php endforeach; ?>
              </div>
              <?php endif; ?>
              <!-- <div class="package-list booking-list">
                <div class="package-list__item booking-list__item">Exclusive 90-minute access to your own private Beer Therapy™ Room</div>
                <div class="package-list__item booking-list__item">Includes a personal beer bath, infrared sauna, and rain shower</div>
                <div class="package-list__item booking-list__item">Complete with romantic candles, rose petals, and gourmet chocolates, & sparkling wine</div>
              </div> -->
            </div>

            <div class="package-footer">
              <div class="package-price">
                <span class="package-price__value">$<?php echo $price; ?></span>
                <span class="package-price__caption">for <span><?php echo $adults; ?></span> adults</span>
              </div>

              <button class="package-btn link-btn dark booking-btn" data-price="<?php echo $price ?>" data-value="<?php echo $name ?>" data-id="<?php echo $id ?>">Book</button>
            </div>
          </div> 
          <?php endforeach; ?>
        </div>
      </div> 

      <!-- Addons -->
      <div class="step addons" data-title="Additional services">
        <!-- Title -->
        <div class="addons-title booking-title">
          <span>Add to your appointment</span>
          <div class="back-step back ff-dm-sans">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <g clip-path="url(#clip0_2012_1639)">
                <path d="M0.183312 8.44241C0.1835 8.4426 0.183656 8.44282 0.183875 8.443L3.44962 11.693C3.69428 11.9365 4.09 11.9356 4.33353 11.6909C4.57703 11.4462 4.57609 11.0505 4.33144 10.807L2.13881 8.625L15.375 8.625C15.7202 8.625 16 8.34519 16 8C16 7.65481 15.7202 7.375 15.375 7.375L2.13884 7.375L4.33141 5.193C4.57606 4.9495 4.577 4.55378 4.3335 4.30913C4.08997 4.06441 3.69422 4.06357 3.44959 4.307L0.183843 7.557C0.183655 7.55719 0.183499 7.55741 0.183281 7.5576C-0.0615009 7.80191 -0.0607189 8.19891 0.183312 8.44241Z" fill="#0C5947"/>
              </g>
              <defs>
                <clipPath id="clip0_2012_1639">
                  <rect width="16" height="16" fill="white" transform="translate(16 16) rotate(180)"/>
                </clipPath>
              </defs>
            </svg>
            previous step
          </div>
        </div>

        <!-- List -->
        <div class="addons-list">
          <?php foreach($addons as $addon): 
            $id = $addon['id'];
            $name = $addon['name'];
            $caption = $addon['caption'];
            $title = $addon['renderTitleAlias'] ?? $addon['renderTitle'];
            $price = $addon['renderPrice'];
            $priceCaption = $addon['renderPriceCaption'];
            $image = $addon['image'];
          ?>
          <!-- Item -->
          <div class="addon" data-id='<?php echo $id; ?>'>
            <div class="addon-image">
              <img src="<?php echo $image; ?>" alt="">
            </div>
            
            <div class="addon-info">
              <div class="addon-head">
                <div class="addon-title"><?php echo $title; ?></div>

                <div class="addon-checkbox">
                  <svg class="addon-checkbox_inactive" xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path d="M15 23.545H9C3.57 23.545 1.25 21.225 1.25 15.795V9.79498C1.25 4.36498 3.57 2.04498 9 2.04498H15C20.43 2.04498 22.75 4.36498 22.75 9.79498V15.795C22.75 21.225 20.43 23.545 15 23.545ZM9 3.54498C4.39 3.54498 2.75 5.18498 2.75 9.79498V15.795C2.75 20.405 4.39 22.045 9 22.045H15C19.61 22.045 21.25 20.405 21.25 15.795V9.79498C21.25 5.18498 19.61 3.54498 15 3.54498H9Z" fill="black"/>
                  </svg>
                  <svg class="addon-checkbox_active" xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path d="M18 3.33014H6C3.79086 3.33014 2 5.121 2 7.33014V18.3301C2 20.5393 3.79086 22.3301 6 22.3301H18C20.2091 22.3301 22 20.5393 22 18.3301V7.33014C22 5.121 20.2091 3.33014 18 3.33014Z" fill="#0C5947"/>
                    <path d="M15 23.545H9C3.57 23.545 1.25 21.225 1.25 15.795V9.79498C1.25 4.36498 3.57 2.04498 9 2.04498H15C20.43 2.04498 22.75 4.36498 22.75 9.79498V15.795C22.75 21.225 20.43 23.545 15 23.545ZM9 3.54498C4.39 3.54498 2.75 5.18498 2.75 9.79498V15.795C2.75 20.405 4.39 22.045 9 22.045H15C19.61 22.045 21.25 20.405 21.25 15.795V9.79498C21.25 5.18498 19.61 3.54498 15 3.54498H9Z" fill="#0C5947"/>
                    <path d="M10.5814 16.3751C10.3814 16.3751 10.1914 16.2951 10.0514 16.1551L7.22141 13.3251C6.93141 13.0351 6.93141 12.5551 7.22141 12.2651C7.51141 11.9751 7.99141 11.9751 8.28141 12.2651L10.5814 14.5651L15.7214 9.42508C16.0114 9.13508 16.4914 9.13508 16.7814 9.42508C17.0714 9.71508 17.0714 10.1951 16.7814 10.4851L11.1114 16.1551C10.9714 16.2951 10.7814 16.3751 10.5814 16.3751Z" fill="#DDF2D0"/>
                  </svg>
                </div>
              </div>

              <div class="addon-descr">
                <?php echo $caption; ?>
              </div>

              <div class="addon-price">
                <span class="addon-price__value"><?php echo $price; ?></span>
                <span class="addon-price__caption"><?php echo $priceCaption; ?></span>
              </div>
            </div>
          </div>
          <?php endforeach; ?>
        </div>

        <!-- Note -->
        <div class="note addons-note">
          <div class="note-title booking-title">Alcohol & Non-Alcoholic Beverages</div>
          <div class="note-descr ff-dm-sans">Beverages are available for purchase in our taproom and will be charged by the ounce</div>
        </div>

        <!-- Continue button -->
        <button class="addons-btn link-btn dark booking-btn">Continue</button>
      </div>

      <!-- ?php print_R($curlResponse); ? -->
	  
      <!-- Dates -->
      <div class="step picker" data-title='Date and time of visit'>
        <!-- Title -->
        <div class="picker-title booking-title">
          <span>Pick a date and time</span>
          <div class="back-step back ff-dm-sans">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <g clip-path="url(#clip0_2012_1639)">
                <path d="M0.183312 8.44241C0.1835 8.4426 0.183656 8.44282 0.183875 8.443L3.44962 11.693C3.69428 11.9365 4.09 11.9356 4.33353 11.6909C4.57703 11.4462 4.57609 11.0505 4.33144 10.807L2.13881 8.625L15.375 8.625C15.7202 8.625 16 8.34519 16 8C16 7.65481 15.7202 7.375 15.375 7.375L2.13884 7.375L4.33141 5.193C4.57606 4.9495 4.577 4.55378 4.3335 4.30913C4.08997 4.06441 3.69422 4.06357 3.44959 4.307L0.183843 7.557C0.183655 7.55719 0.183499 7.55741 0.183281 7.5576C-0.0615009 7.80191 -0.0607189 8.19891 0.183312 8.44241Z" fill="#0C5947"/>
              </g>
              <defs>
                <clipPath id="clip0_2012_1639">
                  <rect width="16" height="16" fill="white" transform="translate(16 16) rotate(180)"/>
                </clipPath>
              </defs>
            </svg>
            previous step
          </div>
        </div>

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
              <!-- Loader -->
              <div class="picker-times__loader"></div>

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
              <div class="note picker-unavailable">
                <div class="note-title booking-title">
                  Sorry, we are fully committed on this day
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
              <button class="picker-times__btn booking-btn_disable link-btn dark booking-btn">Continue</button>
            </div>
          </div>

          <!-- Continue button -->
          <button class="picker-btn booking-btn_disable picker-btn_placeholder link-btn dark booking-btn">Continue</button>

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
      <div class="step summary" data-title='Contact information'>
        <!-- Title -->
        <div class="summary-title booking-title">
          <span>Booking summary</span>
          <div class="back-step back ff-dm-sans">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <g clip-path="url(#clip0_2012_1639)">
                <path d="M0.183312 8.44241C0.1835 8.4426 0.183656 8.44282 0.183875 8.443L3.44962 11.693C3.69428 11.9365 4.09 11.9356 4.33353 11.6909C4.57703 11.4462 4.57609 11.0505 4.33144 10.807L2.13881 8.625L15.375 8.625C15.7202 8.625 16 8.34519 16 8C16 7.65481 15.7202 7.375 15.375 7.375L2.13884 7.375L4.33141 5.193C4.57606 4.9495 4.577 4.55378 4.3335 4.30913C4.08997 4.06441 3.69422 4.06357 3.44959 4.307L0.183843 7.557C0.183655 7.55719 0.183499 7.55741 0.183281 7.5576C-0.0615009 7.80191 -0.0607189 8.19891 0.183312 8.44241Z" fill="#0C5947"/>
              </g>
              <defs>
                <clipPath id="clip0_2012_1639">
                  <rect width="16" height="16" fill="white" transform="translate(16 16) rotate(180)"/>
                </clipPath>
              </defs>
            </svg>
            previous step
          </div>
        </div>

        <!-- Plate -->
        <div class="plate summary-plate">
          <!-- Info -->
          <div class="summary-info">
            <!-- Title -->
            <div class="summary-head">
              Order Summary
            </div>

            <!-- Brief summary -->
            <div class="summary-brief">
              <div class="summary-brief__item">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M13.9584 2.96675V1.66675C13.9584 1.32508 13.6751 1.04175 13.3334 1.04175C12.9918 1.04175 12.7084 1.32508 12.7084 1.66675V2.91675H7.29178V1.66675C7.29178 1.32508 7.00844 1.04175 6.66678 1.04175C6.32511 1.04175 6.04178 1.32508 6.04178 1.66675V2.96675C3.79178 3.17508 2.70011 4.51675 2.53344 6.50841C2.51678 6.75008 2.71678 6.95008 2.95011 6.95008H17.0501C17.2918 6.95008 17.4918 6.74175 17.4668 6.50841C17.3001 4.51675 16.2084 3.17508 13.9584 2.96675Z" fill="#0C5947" fill-opacity="0.7"/>
                  <path d="M16.6667 8.2002H3.33333C2.875 8.2002 2.5 8.5752 2.5 9.03353V14.1669C2.5 16.6669 3.75 18.3335 6.66667 18.3335H13.3333C16.25 18.3335 17.5 16.6669 17.5 14.1669V9.03353C17.5 8.5752 17.125 8.2002 16.6667 8.2002ZM7.675 15.1752C7.63333 15.2085 7.59167 15.2502 7.55 15.2752C7.5 15.3085 7.45 15.3335 7.4 15.3502C7.35 15.3752 7.3 15.3919 7.25 15.4002C7.19167 15.4085 7.14167 15.4169 7.08333 15.4169C6.975 15.4169 6.86667 15.3919 6.76667 15.3502C6.65833 15.3085 6.575 15.2502 6.49167 15.1752C6.34167 15.0169 6.25 14.8002 6.25 14.5835C6.25 14.3669 6.34167 14.1502 6.49167 13.9919C6.575 13.9169 6.65833 13.8585 6.76667 13.8169C6.91667 13.7502 7.08333 13.7335 7.25 13.7669C7.3 13.7752 7.35 13.7919 7.4 13.8169C7.45 13.8335 7.5 13.8585 7.55 13.8919C7.59167 13.9252 7.63333 13.9585 7.675 13.9919C7.825 14.1502 7.91667 14.3669 7.91667 14.5835C7.91667 14.8002 7.825 15.0169 7.675 15.1752ZM7.675 12.2585C7.51667 12.4085 7.3 12.5002 7.08333 12.5002C6.86667 12.5002 6.65 12.4085 6.49167 12.2585C6.34167 12.1002 6.25 11.8835 6.25 11.6669C6.25 11.4502 6.34167 11.2335 6.49167 11.0752C6.725 10.8419 7.09167 10.7669 7.4 10.9002C7.50833 10.9419 7.6 11.0002 7.675 11.0752C7.825 11.2335 7.91667 11.4502 7.91667 11.6669C7.91667 11.8835 7.825 12.1002 7.675 12.2585ZM10.5917 15.1752C10.4333 15.3252 10.2167 15.4169 10 15.4169C9.78333 15.4169 9.56667 15.3252 9.40833 15.1752C9.25833 15.0169 9.16667 14.8002 9.16667 14.5835C9.16667 14.3669 9.25833 14.1502 9.40833 13.9919C9.71667 13.6835 10.2833 13.6835 10.5917 13.9919C10.7417 14.1502 10.8333 14.3669 10.8333 14.5835C10.8333 14.8002 10.7417 15.0169 10.5917 15.1752ZM10.5917 12.2585C10.55 12.2919 10.5083 12.3252 10.4667 12.3585C10.4167 12.3919 10.3667 12.4169 10.3167 12.4335C10.2667 12.4585 10.2167 12.4752 10.1667 12.4835C10.1083 12.4919 10.0583 12.5002 10 12.5002C9.78333 12.5002 9.56667 12.4085 9.40833 12.2585C9.25833 12.1002 9.16667 11.8835 9.16667 11.6669C9.16667 11.4502 9.25833 11.2335 9.40833 11.0752C9.48333 11.0002 9.575 10.9419 9.68333 10.9002C9.99167 10.7669 10.3583 10.8419 10.5917 11.0752C10.7417 11.2335 10.8333 11.4502 10.8333 11.6669C10.8333 11.8835 10.7417 12.1002 10.5917 12.2585ZM13.5083 15.1752C13.35 15.3252 13.1333 15.4169 12.9167 15.4169C12.7 15.4169 12.4833 15.3252 12.325 15.1752C12.175 15.0169 12.0833 14.8002 12.0833 14.5835C12.0833 14.3669 12.175 14.1502 12.325 13.9919C12.6333 13.6835 13.2 13.6835 13.5083 13.9919C13.6583 14.1502 13.75 14.3669 13.75 14.5835C13.75 14.8002 13.6583 15.0169 13.5083 15.1752ZM13.5083 12.2585C13.4667 12.2919 13.425 12.3252 13.3833 12.3585C13.3333 12.3919 13.2833 12.4169 13.2333 12.4335C13.1833 12.4585 13.1333 12.4752 13.0833 12.4835C13.025 12.4919 12.9667 12.5002 12.9167 12.5002C12.7 12.5002 12.4833 12.4085 12.325 12.2585C12.175 12.1002 12.0833 11.8835 12.0833 11.6669C12.0833 11.4502 12.175 11.2335 12.325 11.0752C12.4083 11.0002 12.4917 10.9419 12.6 10.9002C12.75 10.8335 12.9167 10.8169 13.0833 10.8502C13.1333 10.8585 13.1833 10.8752 13.2333 10.9002C13.2833 10.9169 13.3333 10.9419 13.3833 10.9752C13.425 11.0085 13.4667 11.0419 13.5083 11.0752C13.6583 11.2335 13.75 11.4502 13.75 11.6669C13.75 11.8835 13.6583 12.1002 13.5083 12.2585Z" fill="#0C5947"/>
                </svg>
                <span class='set-time'>June 18, 2024, at 10:30 AM</span>
              </div>

              <div class="summary-brief__item">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.50008 1.66663C5.31675 1.66663 3.54175 3.44163 3.54175 5.62496C3.54175 7.76663 5.21675 9.49996 7.40008 9.57496C7.46675 9.56663 7.53341 9.56663 7.58342 9.57496C7.60008 9.57496 7.60841 9.57496 7.62508 9.57496C7.63341 9.57496 7.63341 9.57496 7.64175 9.57496C9.77508 9.49996 11.4501 7.76663 11.4584 5.62496C11.4584 3.44163 9.68341 1.66663 7.50008 1.66663Z" fill="#0C5947" fill-opacity="0.7"/>
                  <path d="M11.7333 11.7917C9.4083 10.2417 5.61663 10.2417 3.27497 11.7917C2.21663 12.5 1.6333 13.4583 1.6333 14.4833C1.6333 15.5083 2.21663 16.4583 3.26663 17.1583C4.4333 17.9417 5.96663 18.3333 7.49997 18.3333C9.0333 18.3333 10.5666 17.9417 11.7333 17.1583C12.7833 16.45 13.3666 15.5 13.3666 14.4667C13.3583 13.4417 12.7833 12.4917 11.7333 11.7917Z" fill="#0C5947" fill-opacity="0.7"/>
                  <path d="M16.6583 6.11671C16.7916 7.73338 15.6416 9.15004 14.05 9.34171C14.0416 9.34171 14.0416 9.34171 14.0333 9.34171H14.0083C13.9583 9.34171 13.9083 9.34171 13.8666 9.35838C13.0583 9.40004 12.3166 9.14171 11.7583 8.66671C12.6166 7.90004 13.1083 6.75004 13.0083 5.50004C12.95 4.82504 12.7166 4.20838 12.3666 3.68338C12.6833 3.52504 13.05 3.42504 13.425 3.39171C15.0583 3.25004 16.5166 4.46671 16.6583 6.11671Z" fill="#0C5947"/>
                  <path d="M18.3251 13.825C18.2584 14.6334 17.7418 15.3334 16.8751 15.8084C16.0418 16.2667 14.9918 16.4834 13.9501 16.4584C14.5501 15.9167 14.9001 15.2417 14.9668 14.525C15.0501 13.4917 14.5584 12.5 13.5751 11.7084C13.0168 11.2667 12.3668 10.9167 11.6584 10.6584C13.5001 10.125 15.8168 10.4834 17.2418 11.6334C18.0084 12.25 18.4001 13.025 18.3251 13.825Z" fill="#0C5947"/>
                </svg>
                <span>For up to <span class='set-adults'></span> people, 90-Minute Session</span>
              </div>
            </div>

            <!-- Set-category -->

            <!-- Price table -->
            <div class="summary-table">
              <div class="summary-block">
                <div class="summary-block__caption">Service:</div>
                <div class="summary-row summary-row_name">
                  <div class="summary-row__caption set-name">-</div>
                  <div class="summary-row__value set-price">-</div>
                </div>
              </div>

              <div class="summary-block">
                <div class="summary-block__caption">Additional services:</div>

                <div class="summary-addons"></div>
              </div>

              <div class="summary-table__divider"></div>

              <div class="summary-row summary-row_final">
                <div class="summary-row__caption">Pay Now<sup>1</sup>:</div>
                <div class="summary-row__value">$0</div>
              </div>

              <div class="summary-row summary-row_final">
                <div class="summary-row__caption">Due on <span class='set-date'>June 18, 2024</span><sup>2</sup>:</div>
                <div class="summary-row__value set-total">$0</div>
              </div>
            </div>

            <!-- Divider -->
            <div class="summary-divider"></div>

            <!-- Note -->
            <div class="summary-note">
              1. Reserve now, pay after your experience <br>
              2. The total due is for reference only and does not include sales tax, beverages, cosmetic minibar products, add-ons, or gratuity.
            </div>
          </div>

          <!-- Form -->
          <div class="summary-form">
            <!-- Title -->
            <div class="summary-form__title">Enter Contact Information</div>

            <!-- Caption -->
            <div class="summary-form__caption">
              We use your info to confirm appointments, send reminders, and select the best time based on your location. Your data is confidential
            </div>

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
                <input type="text" id="summary-phone" name="summary-phone" required>
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
            <button class="summary-btn link-btn dark booking-btn">Reserve Now, Pay Later</button>

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
      <div class="step payment" data-title='Confirmation'>
        <!-- Title -->
        <div class="payment-title booking-title">
          <span>Confirmation</span>
          <div class="back-step back ff-dm-sans">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <g clip-path="url(#clip0_2012_1639)">
                <path d="M0.183312 8.44241C0.1835 8.4426 0.183656 8.44282 0.183875 8.443L3.44962 11.693C3.69428 11.9365 4.09 11.9356 4.33353 11.6909C4.57703 11.4462 4.57609 11.0505 4.33144 10.807L2.13881 8.625L15.375 8.625C15.7202 8.625 16 8.34519 16 8C16 7.65481 15.7202 7.375 15.375 7.375L2.13884 7.375L4.33141 5.193C4.57606 4.9495 4.577 4.55378 4.3335 4.30913C4.08997 4.06441 3.69422 4.06357 3.44959 4.307L0.183843 7.557C0.183655 7.55719 0.183499 7.55741 0.183281 7.5576C-0.0615009 7.80191 -0.0607189 8.19891 0.183312 8.44241Z" fill="#0C5947"/>
              </g>
              <defs>
                <clipPath id="clip0_2012_1639">
                  <rect width="16" height="16" fill="white" transform="translate(16 16) rotate(180)"/>
                </clipPath>
              </defs>
            </svg>
            previous step
          </div>
        </div>

        <div class="payment-row">
          <!-- Plate -->
          <div class="plate payment-plate">
            <!-- Head -->
            <div class="payment-head">
              <div class="payment-head__info">
                <div class="payment-head__title">Confirm Reservation</div>
                <div class="payment-head__caption payment-caption">Secure your reservation by entering a valid credit or debit card</div>
              </div>

              <!-- Price -->
              <div class="payment-price">
                <div class="payment-price__title">Pay now: <span>$0</span></div>
                <div class="payment-price__caption payment-caption">Don't worry, you will not be charged at this time</div>
              </div>
            </div>

            <!-- Form wrapper -->
            <div class="payment-form">
              <!-- Form -->
              <div class="payment-form__inner" id='payment-slot'></div>

              <!-- Payment status -->
              <div id="paymnet-status"></div>

              <!-- Continue button -->
              <button class="payment-btn link-btn dark booking-btn">Confirm Reservation</button>

              <!-- Cancellation -->
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
              <div class='policy__item'>24 hours' notice allows for free cancellation, except for Garage Parties where 48 hours' notice is required</div>

              <div class='policy__item'>Late cancellations and no-shows are subject to full charge + 20% gratuity</div>

              <div class='policy__item'>Cancellation fees will be charged to the credit card on file; No refunds or gift card payments are permitted for cancellation fees</div>
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
            <img src='https://flopsi69.github.io/crs/oakwell/booking/img/logo-time.png' alt='Time ticker'>
          </div>
          <div class='tickers-item__info'>
            <div class='tickers-item__title'>Time’s</div>
            <div class='tickers-item__caption'>world’s greatest places</div>
          </div>
        </div>

        <div class='tickers-item'>
          <div class='tickers-item__image'>
            <img src='https://flopsi69.github.io/crs/oakwell/booking/img/logo-entr.png' alt='Enterpreneur ticker'>
          </div>
          <div class='tickers-item__info'>
            <div class='tickers-item__title'>Enterpreneur</div>
            <div class='tickers-item__caption'>best mom & pop shop in usa</div>
          </div>
        </div>

        <div class='tickers-item'>
          <div class='tickers-item__image'>
            <img src='https://flopsi69.github.io/crs/oakwell/booking/img/logo-5280.png' alt='5280 ticker'>
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
        <div class='policy__item'>24 hours' notice allows for free cancellation, except for Garage Parties where 48 hours' notice is required</div>

        <div class='policy__item'>Late cancellations and no-shows are subject to full charge + 20% gratuity</div>

        <div class='policy__item'>Cancellation fees will be charged to the credit card on file; No refunds or gift card payments are permitted for cancellation fees</div>
      </div>
    </div>
  </div>

  <!-- Reviews added as widget -->
  <div class="reviews">
    <svg class='reviews-decor reviews-decor__before reviews-decor_mob' xmlns="http://www.w3.org/2000/svg" width="375" height="78" viewBox="0 0 375 78" fill="none">
      <path d="M0 77.6276V0.769623L375 0.769623V43.9405C336.458 16.137 335.243 51.5866 292.882 57.6986C225.53 67.4164 126 -7.70496 0 77.6276Z" fill="#FBF6F1"/>
    </svg>

    <svg class='reviews-decor reviews-decor__before reviews-decor_desk' xmlns="http://www.w3.org/2000/svg" width="1440" height="215" viewBox="0 0 1440 215" fill="none">
      <path d="M1724 214.585V-0.328674H0V67C151.5 -28 176 67 373 95C682.64 120.779 1124.59 -124.053 1724 214.585Z" fill="#FBF6F1"/>
    </svg>

    <?php the_content(); ?>

    <svg class='reviews-decor reviews-decor__after reviews-decor_mob' xmlns="http://www.w3.org/2000/svg" width="375" height="60" viewBox="0 0 375 60" fill="none">
      <path d="M399.469 0.795048V59.795H0.00927734V34.9473C62.2622 53.8345 142.621 59.024 200.351 46.3788C267.572 31.6485 281.11 9.7405 399.469 0.795048Z" fill="#FBF6F1"/>
    </svg>

    <svg class='reviews-decor reviews-decor__after reviews-decor_desk' xmlns="http://www.w3.org/2000/svg" width="1440" height="173" viewBox="0 0 1440 173" fill="none">
      <path d="M1453 0L1471 173.179L665 194.5L0.0356445 173.179V70.5C239.087 126.522 443.319 189.007 665 151.5C923.128 107.808 998.502 26.5331 1453 0Z" fill="#FBF6F1"/>
    </svg>
  </div>

  <div class="container steps-container">
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
    static isDelay = false;

    static init() {
      for (const [index, stepEl] of Array.from(this.steps).entries()) {
        stepEl.dataset.step = index
      }

      this.initStep1();
      this.initStep2();
      this.initStep3();
      this.initStep4();
      this.initStep5();
      this.initStep6();

      this.moveToStep(true)

      document.addEventListener('focusin', (e) => {
        document.querySelector('.summary-error')?.remove();

        const parent = e.target.closest('.book-form__group');

        if (parent) {
          parent.classList.remove('book-form_error');
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
        if (typeof $ === 'undefined') {
          return;
        }

        const step = this.steps[this.currentStep];
        const offset = $('.steps-policy')[0] && $(window).innerWidth() > 992 ? $('.steps-policy').offset().top : $(step).offset().top + $(step).height();
        const additionalCondition = $(window).innerWidth() <= 992 && (this.currentStep === 2 || this.currentStep === 4)
        
        if (!this.isDelay && ($(window).scrollTop() > offset || additionalCondition)) {
          this.stickyEl.classList.add('active')
        } else {
          this.stickyEl.classList.remove('active')
        }
      })

      this.stickyBtn.addEventListener('click', () => {
        if (this.stickyBtn.classList.contains('steps-sticky__btn_clicked')) return;

        this.stickyBtn.classList.add('steps-sticky__btn_clicked');

        if ([0,1].includes(this.currentStep)) {
          const offset = $(this.steps[this.currentStep]).offset().top - 25;
          scrollToStep(offset);
        } else if (this.currentStep === 2) {
          document.querySelector('.addons-btn').click();
        } else if (this.currentStep === 3) {
          if (document.querySelector('.picker-times__btn.booking-btn_disable')) {
            const offset = $('.picker-calendar-js').offset().top - 100;
            scrollToStep(offset);
          } else {
            document.querySelector('.picker-times__btn').click();
          }
        } else if (this.currentStep === 4) {
          const offset = $('.summary-form').offset().top - 75;
          document.querySelector('.summary-btn').click();
          setTimeout(() => {
            if (document.querySelector('.summary-error')) {
              scrollToStep(offset);
            }
          }, 200);
        } else if (this.currentStep === 5) {
          let offset = $('.payment-plate').offset().top - 15;
          document.querySelector('.payment-btn').click();
          setTimeout(() => {
            if (document.querySelector('.sq-card-message-error')) {
              scrollToStep(offset);
            }
          }, 200);
        }

        // this.stickyEl.style.pointerEvents = 'none'

        // this.nextStep()

        setTimeout(() => {
          this.stickyBtn.classList.remove('steps-sticky__btn_clicked');
        }, 1000);

        function scrollToStep(offset) {
          $('html, body').animate({
            scrollTop: offset
          }, 500);
        }
      })

      for (const backEl of document.querySelectorAll('.back')) {
        backEl.addEventListener('click', () => {
          if (this.currentStep === 0) {
            // window.history.back();
            // location.href = '/';
            return;
          }

          if (this.currentStep === 3 && this.logs.length == 2) {
            this.currentStep--
          }
          this.currentStep--
          this.moveToStep();
          this.buildLogsMarkup()
        })
      }
    }

    static initStep1() {
      for ( const btn of document.querySelectorAll('.service-btn')) {
        btn.addEventListener('click', (e) => {
          const serviceValue = btn.dataset.value;
          const allPackages = document.querySelectorAll(`.package`);  
          const selectedPackages = document.querySelectorAll(`.package[data-category="${serviceValue}"]`);

          for (const packageEl of allPackages) {
            packageEl.style.display = 'none'
          }

          for (const packageEl of selectedPackages) {
            packageEl.removeAttribute('style');
          }

          document.querySelector('#bookingCategory').value = serviceValue;
			
          this.nextStep(serviceValue)
        })
      }
    }

    static initStep2() {
      for ( const btn of document.querySelectorAll('.package-btn')) {
        btn.addEventListener('click', (e) => {
          const addons = JSON.parse(btn.closest('[data-addons]').dataset.addons);
          const isAddons = showAddons(addons);
          const packageValue = btn.dataset.value;
          const id = btn.dataset.id;
          const price = btn.dataset.price;

          document.querySelector('#bookingTypeId').value = id;
          document.querySelector('#bookingName').value = packageValue;
		      document.querySelector('#bookingPrice').value = price;

          if (typeof bookingCalendar !== 'undefined' && bookingCalendar?.selectedDates.length) {
            bookingCalendar.selectedDates.pop();
          }

          if (!isAddons) {
            document.querySelector('#bookingAddons').value = '';
          }

          this.nextStep(packageValue, !isAddons)
        })
      }

      function showAddons(addons) {
        let isAddonExist = false;

        for (const addonEl of document.querySelectorAll('.addon')) {
          addonEl.style.display = 'none'
          addonEl.classList.remove('active')
        }

        for (const addonEl of document.querySelectorAll('.addon')) {
          if (addons.includes(parseInt(addonEl.dataset.id))) {
            addonEl.removeAttribute('style')
            isAddonExist = true;
          }
        }

        return isAddonExist;
      }
    }

    static initStep3() {
      for ( const btn of document.querySelectorAll('.addon')) {
        btn.addEventListener('click', () => {
          btn.classList.toggle('active')
        })
      }

      document.querySelector('.addons-btn').addEventListener('click', () => {
        const addons = [];
        let caption = '';

        for(const addonEl of document.querySelectorAll('.addon.active')) {
          const priceValue = addonEl.querySelector('.addon-price__value').textContent.trim().replace('+ ', '');
          const captionValue = addonEl.querySelector('.addon-price__caption').textContent.trim().replace('per', ' /');

          const id = addonEl.dataset.id;
          const title = addonEl.querySelector('.addon-title').textContent;
          let price = priceValue;

          if (priceValue === 'free') {
            price = '$0';
          }

          if (captionValue.includes('person')) {
            price = `${price} / person`;
          }

          if (captionValue.includes('item')) {
            price = `${price} / item`;
          }

          const priceClear = parseInt(price.replace('$', ''));

          const addonData = { id, title, price, priceClear };
          addons.push(addonData);

          caption += `${title}, `
        }

        document.querySelector('#bookingAddons').value = addons.length ? JSON.stringify(addons) : '';
        caption = caption?.slice(0, -2)

        if (!caption) {
          caption = 'No addons'
        }

        this.nextStep(caption)
      })
    }

    static initStep4() {
      document.querySelector('.picker-times__btn').addEventListener('click', () => {
        const caption = this.formatDate(document.querySelector('#bookingDay').value) + ', ' + document.querySelector('#bookingTime').value.toLowerCase().replace(' ', '');

        this.fillSummary();
        this.nextStep(caption)
      })
    }

    static initStep5() {
      document.querySelector('.summary-checkbox').addEventListener('click', function() {
        if (document.querySelector('.summary-checkbox__icon.book-form_error')) {
          document.querySelector('.summary-error').remove();
          document.querySelector('.summary-checkbox__icon.book-form_error').classList.remove('book-form_error');
        }
        this.classList.toggle('active');
      })

      const submitBtn = document.querySelector('.summary-btn');
      
      submitBtn.addEventListener('click', async () => {
        document.querySelector('.summary-error')?.remove();
        submitBtn.disabled = true;
        const res = validateForm();

        if (!res.successfully) {
          document.querySelector('.summary-checkbox').insertAdjacentHTML('beforebegin', `<div class="summary-error">${res.error}</div>`);
          submitBtn.disabled = false;
          return;
        }

        this.nextStep(res.data);

        submitBtn.disabled = false;
      })

      function validateForm() {
        const typeId = document.querySelector('#bookingTypeId').value;
        const datetime = document.querySelector('#bookingDay').value + " " + document.querySelector('#bookingTime').value;
        const firstname = document.querySelector('#summary-firstname').value;
        const lastname = document.querySelector('#summary-lastname').value;
        const phone = document.querySelector('#summary-phone').value;
        const email = document.querySelector('#summary-email').value;
        const zip = document.querySelector('#summary-zip').value;
        const addons = document.querySelector('#bookingAddons').value;

        let error = false;
        let target = null;

        if (!firstname) {
          error = 'Please enter your first name';
          target = document.querySelector('#summary-firstname');
        } else if (!lastname) {
          error = 'Please enter your last name';
          target = document.querySelector('#summary-lastname');
        } else if (!phone) {
          error = 'Please enter your phone number';
          target = document.querySelector('#summary-phone');
        } else if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.includes('.con')) {
          error = 'Please enter a valid email';
          target = document.querySelector('#summary-email');
        } else if (!zip) {
          error = 'Please enter your zip code';
          target = document.querySelector('#summary-zip');
        } else if (!document.querySelector('.summary-checkbox').classList.contains('active')) {
          error = 'Please agree with the terms';
          target = document.querySelector('.summary-checkbox__icon');
        }

        if (error) {
          target.closest('.book-form__group')?.classList.add('book-form_error');

          if (target.classList.contains('summary-checkbox__icon')) {
            target.classList.add('book-form_error');
          }

          return {
            successfully: false,
            error,
          };
        }

        const caption = firstname + ' ' + lastname + ', ' + email + ', ' + phone + ', ' + zip;

        return {
          successfully: true,
          data: caption
        }
      }
    }

    static async initStep6() {
      if (!Square) {
        throw new Error('Square.js failed to load properly');
      }

      //const appId = 'sandbox-sq0idb-DxP7uT9cEXw1sI5F4NJBlw';
      // const locationId = 'LVGHS619NNCQ6';

      const appId = 'sq0idp-2mfhZwRa-AnS-VTwre0k8A';
      const locationId = '3HY3D6YRW8XFX';
      const darkModeCardStyle = {
        '.input-container': {
          borderColor: '#2D2D2D',
          borderRadius: '6px',
          // backgroundColor: 'red', 
        },
      
        '.input-container.is-focus': {
          borderColor: '#006AFF',
        
        },
      
        '.input-container.is-error': {
          borderColor: '#ff1600',
        },
        '.message-text': {
          color: '#999999',
        },
        '.message-icon': {
          color: '#999999',
        },
        '.message-text.is-error': {
          color: '#ff1600',
        },
        '.message-icon.is-error': {
          color: '#ff1600',
        },
        input: {
          backgroundColor: 'white',
          color: 'black',
          fontFamily: 'helvetica neue, sans-serif',
        },
        'input::placeholder': {
          color: 'black',
        },
        'input.is-error': {
          color: '#ff1600',
        },
        '@media screen and (max-width: 600px)': {
          'input': {
              'fontSize': '12px',
          }
        }     
      };

      const squarePayments = await Square.payments(appId, locationId);
      const squareCardForm = await squarePayments.card({ style: darkModeCardStyle });
      await squareCardForm.attach('#payment-slot');

      const squareCardButton = document.querySelector('.payment-btn');
      squareCardButton.addEventListener('click', submitForm);


      async function submitForm(e) {
        e.preventDefault();

        squareCardButton.disabled = true;

        const data = {
          locationId,
          sourceId: null,
          idempotencyKey: window.crypto.randomUUID(),

          appointmentTypeID: document.querySelector('#bookingTypeId').value,
          datetime: document.querySelector('#bookingDay').value + " " + document.querySelector('#bookingTime').value,
          firstname: document.querySelector('#summary-firstname').value,
          lastname: document.querySelector('#summary-lastname').value,
          phone: document.querySelector('#summary-phone').value,
          email: document.querySelector('#summary-email').value,
          zip: document.querySelector('#summary-zip').value,
          addons: document.querySelector('#bookingAddons').value,
        }

        try {
          const token = await tokenize();
          data.sourceId = token;

          const res = await fetch("https://test.ukr-agro-select.com.ua/order.php", { method: 'POST', body: JSON.stringify(data) });
          const result = await res.json();
          
          console.log('** Order response **', result);

          if (result.isSuccess) {
            showResultPage(result.data);
            return;
          }

          if (result.error) {
            throw new Error(result.error);
          }
        } catch (error) {
          console.log('error', error);
          if (error.message) {
            alert(error.message);
          } else {
            alert(error);
          }
        } finally {
          squareCardButton.disabled = false;
        }

        function showResultPage(data) {
          // document.querySelector('.logs')?.classList.add('logs_disabled');
          for (const backEl of document.querySelectorAll('.back')) {
            backEl.remove();
          }

          const logs = document.querySelector('.logs');
          const paymentStep = document.querySelector('.payment');
          const summaryStep = document.querySelector('.summary');

          document.body.classList.add('booking-result-page')
          document.querySelector('.steps-sticky').style.display = 'none';
          logs?.remove();
          paymentStep?.classList.remove('active')

          summaryStep.querySelector('.summary-note').innerHTML = `
            *The total due is for reference only and does not include sales tax, beverages, cosmetic minibar products, add-ons, or gratuity.
          `;

          summaryStep?.classList.add('active', 'summary_result');
          document.querySelector('.summary-row_final')?.remove();
          document.querySelector('.summary-row_final sup').outerHTML = '*';

          if ( data?.order?.location) {
            document.querySelector('.summary-table').insertAdjacentHTML('beforeend', `<div class="summary-location">Location: ${data.order.location}</div>`);
          }
        }

        async function tokenize() {
          const tokenResult = await squareCardForm.tokenize();
          console.log('** Token Result **', tokenResult);

          if (tokenResult.status === 'OK') {
            return tokenResult.token;
          }
        

          if (tokenResult.errors) {
            throw new Error(tokenResult.errors[0]?.message);
          }
        }
      }
    }

    static nextStep(logValue, isAddonsEmpty) {
      this.recordLog(logValue)
      if (isAddonsEmpty) {
        this.currentStep++
      }
      this.currentStep++
      this.moveToStep();
      this.buildLogsMarkup()
    }

    static formatDate(inputDate) {
      const [year, month, day] = inputDate.split('-').map(Number);
      const monthNames = ["January", "February", "March", "April", "May", "June",
                          "July", "August", "September", "October", "November", "December"];
      const monthName = monthNames[month - 1];

      return `${monthName} ${day}, ${year}`;
    }

    static fillSummary() {
      const category = document.querySelector('#bookingCategory').value;
      const name = document.querySelector('#bookingName').value;
      const typeId = document.querySelector('#bookingTypeId').value;
      const date = this.formatDate(document.querySelector('#bookingDay').value);
      const time = document.querySelector('#bookingTime').value;
      const addons = document.querySelector('#bookingAddons').value || '[]';
      const price = document.querySelector('#bookingPrice').value;
      let total = parseFloat(price);

      console.log('addons', addons)


      // document.querySelector('.set-category').textContent = category;
      document.querySelector('.set-time').textContent = `${date}, at ${time}`;
      document.querySelector('.set-date').textContent = date;
      document.querySelector('.set-name').textContent = name;
      document.querySelector('.set-price').textContent = '$' + price;
      document.querySelector('.set-adults').textContent = document.querySelector(`.package[data-id="${typeId}"] .package-price__caption span`).textContent;
      document.querySelector('.set-total').textContent = '';
      
      document.querySelector('.summary-addons').innerHTML = '';

      if (JSON.parse(addons).length) {
        document.querySelector('.summary-addons').closest('.summary-block').classList.remove('summary-block_disable');
      } else {
        document.querySelector('.summary-addons').closest('.summary-block').classList.add('summary-block_disable');
      }

      for (const addonItem of JSON.parse(addons)) {
        const addonEl = document.createElement('div');
        addonEl.classList.add('summary-row', 'summary-row_addon');
        total += parseFloat(addonItem.priceClear);
        addonEl.dataset.price = addonItem.priceClear;
        addonEl.innerHTML = /* html */ `
          <div class="summary-row__caption">+ ${addonItem.title} ${addonItem.price.replace(`$${addonItem.priceClear}`, '')}</div>
          <div class="summary-row__value">$${addonItem.priceClear}</div>
        `;

        document.querySelector('.summary-addons').appendChild(addonEl);
      }

      document.querySelector('.set-total').textContent = '$' + total;
    }

    static recordLog(logValue) {
      const title =  this.steps[this.currentStep].dataset.title || this.steps[this.currentStep].querySelector('.booking-title span').textContent;

      const log = {
        step: this.currentStep,
        title,
        value: logValue 
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

      if (this.currentStep === 0) {
        document.querySelector('.back-mob').classList.remove('active')
      } else {
        document.querySelector('.back-mob').classList.add('active')
      }

      for (const tickerEl of document.querySelectorAll('.tickers')) {
        if ([0, 1].includes(this.currentStep)) {
          tickerEl.classList.remove('tickers_hide');
        } else {
          tickerEl.classList.add('tickers_hide')
        }
      }

      if (this.currentStep === 3 && (typeof bookingCalendar === 'undefined' || !bookingCalendar.selectedDates.length)) {
        console.log('reset date')
        const waitForCalendar = setInterval(() => {
          if (typeof bookingCalendar !== 'undefined' ) {
            clearInterval(waitForCalendar)

            document.querySelector('.picker-plate').classList.remove('active', 'times-empty', 'picker-plate_loader');
            document.querySelector('.picker-times__btn').classList.add('booking-btn_disable');

            document.querySelector('.air-datepicker-cell.-current-').click();
          }
        }, 200);
      }

      if (this.currentStep === this.steps.length - 1) {
        document.querySelector('.steps-policy').classList.add('policy_hide')
        document.querySelector('.steps-sticky').classList.add('steps-sticky_hide');
      } else {
        document.querySelector('.steps-policy').classList.remove('policy_hide')
        document.querySelector('.steps-sticky').classList.remove('steps-sticky_hide');
      }

      // scroll to active step
      if (!isInit) {
        if (this.currentStep !== 2 && this.currentStep !== 4) {
          this.isDelay = true;
        }
        $('html, body').animate({
          scrollTop: $(this.steps[this.currentStep]).offset().top - ($(window).innerWidth() < 992 ? 60 : 10)
        }, 500);

        setTimeout(() => {
          this.isDelay = false;
        }, 550);
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
          if (logEl.closest('.logs_disabled')) return;

          this.logs.splice(log.step)
          this.currentStep = log.step
          this.moveToStep();
        })

        logsEl.appendChild(logEl)
      }
    }

    static updateProgress() {
      for (let i = 0; i < this.currentStep; i++) {
        const step = document.querySelector(`.progress-step[data-progress-step="${i}"]`);

        step.querySelector('.progress-step__caption').textContent = this.logs[i]?.value || '-';
        step.querySelector('.progress-tooltip span').textContent = this.logs[i]?.value || 'Not available';
      }
      
      // console.log('logs', this.logs)
      // for (const log of this.logs) {
      //   console.log('log', log)
      //   const step = document.querySelector(`.progress-step[data-progress-step="${log.step}"]`);

      //   step.querySelector('.progress-step__caption').textContent = log.value;
      //   step.querySelector('.progress-tooltip span').textContent = log.value;
      // }

      if (this.currentStep === document.querySelectorAll('.progress-step').length) {
        document.querySelector('.progress-step__divider.pass_current')?.classList.remove('pass_current');
        document.querySelector('.progress-step.active')?.classList.add('pass');
        document.querySelector('.progress-step.active')?.classList.remove('active')

        return;
      }

      for (const progressStep of document.querySelectorAll('.progress-step, .progress-step__divider')) {
        progressStep.classList.remove('active', 'pass', 'pass_current');
      }

      const currentStep = document.querySelector(`[data-progress-step="${this.currentStep}"]`);
      currentStep.classList.add('active');

      let prevEl = currentStep.previousElementSibling;

      while (prevEl) {
        if (prevEl.classList.contains('progress-step__divider') && !document.querySelector('.pass_current')) {
          prevEl.classList.add('pass_current');
        }
        prevEl.classList.add('pass');
        prevEl = prevEl.previousElementSibling;
      }
    }

    static updateSticky() {
      let text = 'Book Now';

      if ([2,3].includes(this.currentStep)) {
        text = 'Continue';
      } else if (this.currentStep === 4) {
        text = 'Reserve Now, Pay Later';
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
      initCalendar()
    }
  }, 200);

  // TODO
  async function initCalendar(container,container1,container2,container3,container4,container5,container6,container7) {
    const res = await fetch("https://test.ukr-agro-select.com.ua/dates.php");
    const data = await res.json();
    console.log('data', data)

    const captionEl = document.querySelector('.picker-calendar__caption');
    const plateEl = document.querySelector('.picker-plate');

    const options = {
      toggleSelected: false,
      startDate: new Date(),
      dateFormat: 'EEEE, MMMM d',
      altField: document.querySelector('.picker-calendar__caption'),
      altFieldDateFormat: 'EEEE,MMMM,d',
      minDate: new Date(),
      prevHtml: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.6084 28.3337C22.4241 28.3337 22.2398 28.2664 22.0944 28.1222L15.771 21.8544C14.743 20.8355 14.743 19.1628 15.771 18.1438L22.0944 11.8761C22.3756 11.5973 22.8411 11.5973 23.1224 11.8761C23.4036 12.1549 23.4036 12.6163 23.1224 12.8951L16.799 19.1628C16.3335 19.6242 16.3335 20.374 16.799 20.8355L23.1224 27.1032C23.4036 27.382 23.4036 27.8434 23.1224 28.1222C22.9769 28.2568 22.7926 28.3337 22.6084 28.3337Z" fill="#3C6C60"/></svg>',
      nextHtml: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.3925 28.3337C17.2083 28.3337 17.0242 28.2664 16.8788 28.1222C16.5977 27.8434 16.5977 27.382 16.8788 27.1032L23.1985 20.8355C23.6637 20.374 23.6637 19.6242 23.1985 19.1628L16.8788 12.8951C16.5977 12.6163 16.5977 12.1549 16.8788 11.8761C17.1599 11.5973 17.6251 11.5973 17.9062 11.8761L24.2259 18.1438C24.7202 18.6341 25.0013 19.2974 25.0013 19.9991C25.0013 20.7009 24.7299 21.3642 24.2259 21.8544L17.9062 28.1222C17.7608 28.2568 17.5767 28.3337 17.3925 28.3337Z" fill="#0C5947"/></svg>',
      onSelect: onSelectHandler,
    };

    function onSelectHandler({date, formattedDate}) {
      console.log('click');
      document.querySelector('.picker-times__btn').classList.add('booking-btn_disable');

      if (!date) { 
        captionEl.innerText = 'Choose date'
        plateEl.classList.remove('active', 'times-empty');
        document.querySelector('#bookingDay').value = '';
        document.querySelector('#bookingTime').value = '';
        document.querySelector('.picker-times__list').innerHTML = '';  

        return false;
      }

      console.log('Selected date:', date, formattedDate);

      plateEl.classList.add('active');
      captionEl.innerText = formattedDate;

      const formData = new FormData();
      formData.append('day', date);
      formData.append('appid', document.querySelector('#bookingTypeId').value);

      getAvailableTime(formData);
    }

    async function getAvailableTime(data) {
      document.querySelector('.picker-plate').classList.add('picker-plate_loader');

      document.querySelector('.picker-times__list').innerHTML = '';
      
      const res = await fetch("https://test.ukr-agro-select.com.ua/time.php", { method: 'POST', body: data });
      const { times, day } = await res.json();

      document.querySelector('#bookingDay').value = day;

      if (times.length) {
        document.querySelector('.picker-plate').classList.remove('times-empty');
      } else {
        document.querySelector('.picker-plate').classList.add('times-empty');
      }

      for (const time of times) {
        const timeEl = document.createElement('div');
        timeEl.classList.add('picker-times__item');
        timeEl.textContent = time;

        timeEl.addEventListener('click', function() {
          document.querySelector('.picker-times__btn').classList.add('booking-btn_disable')

          if (document.querySelector('.picker-times__item.active') && !this.classList.contains('active')) {
            document.querySelector('.picker-times__item.active').classList.remove('active')
          }

          this.classList.toggle('active');

          document.querySelector('#bookingTime').value = this.classList.contains('active') ? time : '';

          if (document.querySelector('.picker-times__item.active')) {
            document.querySelector('.picker-times__btn').classList.remove('booking-btn_disable'); 
          } 
        })

        document.querySelector('.picker-times__list').appendChild(timeEl);
      }

      setTimeout(() => {
        document.querySelector('.picker-plate').classList.remove('picker-plate_loader');
      }, 500);
    }

    const calendar = new AirDatepicker('.picker-calendar-js', options);

    window.bookingCalendar = calendar
    
    return calendar
  }

  function handleReviews() {
      const slides = document.querySelectorAll('.reviews-slider .swiper-slide');

      for (const el of slides) {
      }
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
          <!-- <div class="box-title"> <?php echo get_field('hours_of_operations_title'); ?> </div> -->
          <div class="box-title">Hours Of Operation</div>
          <p><?php echo get_field('open_days', 'options'); ?></p>
          <!-- <p> <?php echo get_field('open_hours', 'options'); ?> </p>  -->
          <p>8:00&nbsp;am - 10:30&nbsp;pm</p>
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
      <div class="box-title"> 
        <!-- <?php echo get_field('accepted_payments'); ?>  -->
        Accepted Payments
      </div>
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

<?php
get_footer();