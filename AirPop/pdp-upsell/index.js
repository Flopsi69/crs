function gaEvent(category, action) {
  try {
    dataLayer.push({
      event: "event-to-ga",
      eventCategory: category,
      eventAction: action,
    });
  } catch (e) {}
};

(function(h,o,t,j,a,r){
  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
  h._hjSettings={hjid:1651990,hjsv:6};
  a=o.getElementsByTagName('head')[0];
  r=o.createElement('script');r.async=1;
  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
  a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
  window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
hj('trigger', 'alt_options_on_pdp');
  

gaEvent('Exp - Alt options on PDP', 'loaded');

let locationLang = location.pathname.split('/')[1];
let maskVar, masksVar, mostPopularTrans, saveProcentTrans;
switch (locationLang) {
  case 'it':
    maskVar = "maschera";
    masksVar = "maschere";
    mostPopularTrans = "Più popolare";
    saveProcentTrans = "Risparmia il";
  break;
case 'nl':
    maskVar = "masker";
    masksVar = "maskers";
    mostPopularTrans = "Meest populair";
    saveProcentTrans = "Bespaar";
  break;
  case 'de':
    maskVar = "maske";
    masksVar = "masken";
    mostPopularTrans = "Am beliebtesten";
    saveProcentTrans = "Sparen Sie";
default:
    maskVar = "mask";
    masksVar = "masks";
    mostPopularTrans = "Most popular";
    saveProcentTrans = "Save";
  break;
}

/* styles start */
let stylesList = `
  .packs-list {
    display: flex;
    margin: 0 -4px;
    overflow-x: auto;
    padding: 10px 15px 0;
    margin-right: 5px;
  }

  .packs-list__item {
    position: relative;
    margin: 0 4px;
    padding: 13px 10px;
    background: rgba(229, 229, 229, 0.1);
    border: 1px solid #58585A;
    border-radius: 10px;
    width: 130px;
    box-sizing: border-box;
    flex-shrink: 0;
    flex-grow: 1;
    text-align: center;
    color: #000000!important;
  }

  .packs-list__item.active {
    background: rgba(38, 202, 211, 0.1);
    border: 1px solid #26CAD3;
    pointer-events: none;
  }

  .packs-list__popular {
    background: #26CAD3;
    border-radius: 11px;
    position: absolute;
    text-transform: uppercase;
    left: 9px;
    right: 9px;
    top: 0;
    transform: translateY(-50%);
    margin: auto;
    padding: 1px 4px;
    font-size: 9px;
    line-height: 12px;
    color: #fff;
  }

  .packs-list__save {
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    color: #26CAD3;
    height: 16px;
    margin-bottom: 9px;
  }

  .packs-list__one {
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: .5px;
  }

  .packs-list__count {
    font-size: 13px;
    line-height: 18px;
    margin-bottom: 3px;
  }

  .packs-list__price {
    font-weight: 600;
    font-size: 13px;
    line-height: 18px;
    letter-spacing: .5px;
  }

  .color-fixed__item {
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 13px 8px;
    color: #000!important;
  }

  .color-fixed__item.active {
    background: rgba(51, 51, 51, 0.05);
    pointer-events: none;
  }

  .color-fixed__title {
    font-weight: 600;
    font-size: 13px;
    line-height: 18px;
    text-align: left;
  }

  .color-fixed__price {
    font-size: 13px;
    line-height: 18px;
    margin-left: 5px;
  }

  .color-fixed__popular {
    background: #26CAD3;
    border-radius: 11px;
    position: absolute;
    text-transform: uppercase;
    left: 7px;
    top: -1px;
    margin: auto;
    padding: 1px 4px;
    font-size: 9px;
    line-height: 12px;
    color: #fff;
  }

  .product-fixed-panel .mobile-variants .colors {
    left: -12px;
    right: -12px;
    width: auto;
  }

  .mobile-variants>span {
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    margin: auto;
  }

  .product-fixed-panel .mobile-variants .caret {
    margin-left: 0;
  }

`;

// connect to DOM
let styles = document.createElement('style');
styles.innerHTML = stylesList;
document.head.appendChild(styles);
/* styles end */

$ = jQuery;
if ($('.block.upsell').length) {
  $('.block.upsell .block-content.content').css('display', 'none');
  $('.mobile-variants .colors').html("");
  $('.mobile-variants .color.current').remove();

  let packsListEl = $('<div class="packs-list">');

  let upsellDataList = dataLayer.find(function (el) {
    if (el.event && el.event == 'productImpression') return true;
  }).ecommerce.impressions;
  
  let activeProductObj = {
    name: $('.page-title').text().trim(),
    price: getActivePrice(),
    position: false
  }

  function getActivePrice(){
    if (isNaN($('.price-final_price .price').first().text().trim()[0])) {
      return parseFloat($('.price-final_price .price').first().text().trim().substr(1).trim().replace(',', '.'));
    } else {
      return parseFloat($('.price-final_price .price').first().text().trim().replace(',', '.'));
    }
  }

  let numActiveMasks = activeProductObj.name.match(/\d+/)[0];

  let productUpsellArr = [];
  let activeProductEl = createUpsellEl(activeProductObj);
  productUpsellArr.push($(activeProductEl).addClass('active'));

  let productFixedArr = [];
  let activeFixedEl = createFixedEl(activeProductObj);
  productFixedArr.push($(activeFixedEl).addClass('active'));

  for (let upsellItem of upsellDataList) {
    if (parseInt(numActiveMasks) < parseInt(upsellItem.name.match(/\d+/)[0]) && parseInt(upsellItem.name.match(/\d+/)[0]) == 20 ) {
      let upsellItemEl = createUpsellEl(upsellItem);
      productUpsellArr.push($(upsellItemEl));

      let fixedItemEl = createFixedEl(upsellItem);
      productFixedArr.push($(fixedItemEl));
    }
  }

  productUpsellArr.sort(function (a, b) {
    return parseInt(a.find('.packs-list__count').text()) - parseInt(b.find('.packs-list__count').text());
  })

  productFixedArr.sort(function (a, b) {
    return parseInt(a.find('.color-fixed__title').text()) - parseInt(b.find('.color-fixed__title').text());
  })

  for (let upsellItemEl of productUpsellArr) {
    packsListEl.append(upsellItemEl);
  }

  for (let fixedItemEl of productFixedArr) {
    $('.mobile-variants .colors').append(fixedItemEl);
  }

  $('.block.upsell').append(packsListEl);

  $(".packs-list__item").on('click', function () {
    let numMask = $(this).data("masks");
    numMask = numMask + (numMask == 1 ? " pack" : " packs");
    try {
      dataLayer.push({
        event: "event-to-ga",
        eventCategory: 'Exp - Alt options on PDP',
        eventAction: 'click on Block ' + numMask
      });
    } catch (e) {}
  })

  $(".color-fixed__item").on('click', function () {
    gaEvent('Exp - Alt options on PDP', 'click on Element menu');
  })

  $(".mobile-variants").on('click', function () {
    gaEvent('Exp - Alt options on PDP', 'click on Button selector');
  })
}

function createUpsellEl({ name, price, position }) {
  let numUpsellMasks = name.match(/\d+/)[0];
  let numUpsellSave = name.match(/\d+%/);
  if (numUpsellSave) {
    numUpsellSave = saveProcentTrans + " " + numUpsellSave[0];
  } else {
    numUpsellSave = '';
  }
  let upsellPosition;
  if (position) {
    upsellPosition = $('#upsell-select option')[position].dataset.href;
  } else {
    upsellPosition = "#";
  }
  let upsellPopular = numUpsellMasks == 8 ? 'block' : 'none';
  let pricePerOne = Math.round(price) / numUpsellMasks;
  
  return `
    <a href='${upsellPosition}' class='packs-list__item' data-masks='${numUpsellMasks}'>
      <div class='packs-list__popular' style='display:${upsellPopular}'>${mostPopularTrans}</div>
      <div class='packs-list__one'>€${pricePerOne.toFixed(2)}/${maskVar}</div>
      <div class='packs-list__save'>${numUpsellSave}</div>
      <div class='packs-list__count'>${numUpsellMasks} ${masksVar}</div>
      <div class='packs-list__price'>€${price}</div>
    </a>
  `;
}

function createFixedEl({ name, price, position }) {
  let numUpsellMasks = name.match(/\d+/)[0];
  let numUpsellSave = name.match(/\d+%/);
  if (numUpsellSave) {
    numUpsellSave = "("+numUpsellSave[0] +")";
  } else {
    numUpsellSave = '';
  }
  let upsellPosition;
  if (position) {
    upsellPosition = $('#upsell-select option')[position].dataset.href;
  } else {
    upsellPosition = "#";
    $(".mobile-variants>span").text(numUpsellMasks + " " + masksVar);
  }
  let upsellPopular = numUpsellMasks == 8 ? 'inline-block' : 'none';
  return `
    <a href='${upsellPosition}' class='color-fixed__item'>
      <div class='color-fixed__popular' style='display:${upsellPopular}'>${mostPopularTrans}</div>
        <div class='color-fixed__title'>${numUpsellMasks} ${masksVar} ${numUpsellSave}</div>
      <div class='color-fixed__price'>€${price}</div>
    </a>
  `;
}

