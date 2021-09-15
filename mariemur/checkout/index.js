(function () {
  function gaEvent(action, label, value) {
    if (!action) {
      action = '';
    }
    window.dataLayer = window.dataLayer || [];
    try {
      let eventObj = {
        event: 'event-to-ga',
        eventCategory: 'Exp - Pricing page buy annual plan',
        eventAction: action,
      };
      dataLayer.push(eventObj);
      console.log('FireEvent', eventObj);
    } catch (e) {
      console.log(e);
    }
  }

  /* STYLES insert start */
  const REPO_DIR = 'https://flopsi69.github.io/crs/mariemur/checkout';

  let stylesList = `
  #slider {
    position: relative;
    overflow: hidden;
    margin: 20px auto 0 auto;
    border-radius: 4px;
  }
  
  #slider ul {
    position: relative;
    margin: 0;
    padding: 0;
    height: 200px;
    list-style: none;
  }
  
  #slider ul li {
    position: relative;
    display: block;
    float: left;
    margin: 0;
    padding: 0;
    width: 500px;
    height: 300px;
    background: #ccc;
    text-align: center;
    line-height: 300px;
  }
  
  a.control_prev, a.control_next {
    position: absolute;
    top: 40%;
    z-index: 999;
    display: block;
    padding: 4% 3%;
    width: auto;
    height: auto;
    background: #2a2a2a;
    color: #fff;
    text-decoration: none;
    font-weight: 600;
    font-size: 18px;
    opacity: 0.8;
    cursor: pointer;
  }
  
  a.control_prev:hover, a.control_next:hover {
    opacity: 1;
    -webkit-transition: all 0.2s ease;
  }
  
  a.control_prev {
    border-radius: 0 2px 2px 0;
  }
  
  a.control_next {
    right: 0;
    border-radius: 2px 0 0 2px;
  }
  
  .slider_option {
    position: relative;
    margin: 10px auto;
    width: 160px;
    font-size: 18px;
  }



    .order-summary__sections  {
      min-height: 100%;
      height: auto;
    }
    .lav-guarantee {
      background: #A60B00;
      border-radius: 4px;
      color: #fff;
      text-align: center;
      padding: 14px;
    }
    .lav-guarantee__title {
      text-transform: uppercase;
      letter-spacing: 2px;
      font-size: 16px;
      line-height: 1.15;
    }
    .lav-guarantee__caption {
      margin-top: 6px;
      font-weight: 300;
      font-size: 12px;
      line-height: 14px;
      color: #F5F5F5;
    }
    .lav-comments__wrap {
      overflow: hidden;
    }
    .lav-comments {
      margin-top: 16px;
      display: flex;
      transition: 0.4s;
      transform: translateX(0%);
    }
    .lav-comment {
      border-radius: 4px;
      box-sizing: border-box;
      flex-shrink: 0;
      width: 100%;
      border: 1px solid #D6D6D6;
      padding: 14px;
      background: #fff;
    }
    .lav-comment__head {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .lav-comment__name {
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      color: #000000;
    }
    .lav-comment__date {
      letter-spacing: 0.5px;
      color: #5E5E5E;
      font-weight: 300;
      font-size: 12px;
      line-height: 16px;
    }
    .lav-comment__country {
      display: flex;
      align-items: center;
      font-weight: 300;
      font-size: 12px;
      line-height: 1;
      letter-spacing: 0.5px;
      color: #000000;
      margin-top: 13px;
    }
    .lav-comment__country img {
      margin-right: 4px;
      width: 20px;
      height: auto;
    }
    .lav-comment__rate {
      margin-top: 15px;
      display: flex;
      align-items: center;
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
      color: #000000;
    }
    .lav-comment__rate img {
      margin-right: 10px;
    }
    .lav-comment__descr {
      margin-top: 8px;
      font-weight: 300;
      font-size: 12px;
      line-height: 16px;
      color: #5E5E5E;
    }
    .lav-payments {
      margin-top: 20px;
      text-align: center;
    }
    .lav-payments img {
      max-width: 75%;
    }

  `;

  let stylesEl = document.createElement('style');
  stylesEl.id = 'lav-styles';
  stylesEl.innerHTML = stylesList;
  document.body.appendChild(stylesEl);

  // let observer = new MutationObserver(mutations => {
  //   for (let mutation of mutations) {
  //     for (let node of mutation.addedNodes) {
  //       if (!(node instanceof HTMLElement)) continue;
  //       if (node.classList.contains('cart-page')) {
  //         initExp();
  //         observer.disconnect();
  //       }
  //     }
  //   }
  // });

  // observer.observe(document.querySelector('body'), {
  //   childList: true,
  //   subtree: true
  // });

  /* STYLES insert end */
  initExp();
  function initExp() {
    addGuarantee();
    addComments();
    addPayments();
  }

  //   <div id="slider">
  //   <a href="#" class="control_next">></a>
  //   <a href="#" class="control_prev"><</a>
  //   <ul>
  //     <li>SLIDE 1</li>
  //     <li style="background: #aaa;">SLIDE 2</li>
  //     <li>SLIDE 3</li>
  //     <li style="background: #aaa;">SLIDE 4</li>
  //   </ul>
  // </div>

  function addGuarantee() {
    let guaranteeEl = `
      <div class='lav-guarantee'>
        <div class="lav-guarantee__title">14 days money-back guarantee</div>
        <div class="lav-guarantee__caption">Hustle free returns if size doesn’t match</div>
      </div>
    
      <div class='lav-guarantee' style='display: none;'>
        <div class="lav-guarantee__title">14 days money-back guarantee</div>
        <div class="lav-guarantee__caption">Free returns if size doesn’t match</div>
      </div>
    `;

    document
      .querySelector('.order-summary__sections')
      .insertAdjacentHTML('beforeend', guaranteeEl);
  }

  function addComments() {
    let commentsEl = `
      <div class='lav-comments__wrap'>
        <div class='lav-comments'>
          <div class="lav-comment">
            <div class="lav-comment__head">
              <div class="lav-comment__name">Jessica N.</div>
              <div class="lav-comment__date">04/16/2021</div>
            </div>
            <div class="lav-comment__country">
              <img src="${REPO_DIR}/img/flag-us.png" alt="">
              United States
            </div>
            <div class="lav-comment__rate">
              <img src="${REPO_DIR}/img/stars.svg" alt="">
              Super Sexy and Comfy
            </div>
            <div class="lav-comment__descr">I bought a pair of these to go with a bra in the same fabric, but my partner had such a positive reaction to them that I bought 3 more pairs. They're comfortable to wear and well made. Excited to have these as my go-to sexy panty.</div>
          </div>
          
          <div class="lav-comment">
            <div class="lav-comment__head">
              <div class="lav-comment__name">Catherine B.</div>
              <div class="lav-comment__date">11/11/2020</div>
            </div>
            <div class="lav-comment__country">
              <img src="${REPO_DIR}/img/flag-us.png" alt="">
              United States
            </div>
            <div class="lav-comment__rate">
              <img src="${REPO_DIR}/img/stars.svg" alt="">
              Amazing
            </div>
            <div class="lav-comment__descr">This is the sexiest bra I've ever owned. </div>
          </div>
          
          <div class="lav-comment">
            <div class="lav-comment__head">
              <div class="lav-comment__name">Lynn V.</div>
              <div class="lav-comment__date">02/11/2021</div>
            </div>
            <div class="lav-comment__country">
              <img src="${REPO_DIR}/img/flag-ca.png" alt="">
              Canada
            </div>
            <div class="lav-comment__rate">
              <img src="${REPO_DIR}/img/stars.svg" alt="">
              Sooo sexy..
            </div>
            <div class="lav-comment__descr">The product was exactly what my boyfriend wanted! LOL.. mesh is a hard product to find. I bought both the bra and panty, which fit amazingly! I bought two more pieces after this and have the same amazing feel.</div>
          </div>
        </div>
      </div>
    `;

    document
      .querySelector('.order-summary__sections')
      .insertAdjacentHTML('beforeend', commentsEl);

    let initialSlider = 0;
    let slidesLength = document.querySelectorAll('.lav-comment').length;

    setInterval(() => {
      if (initialSlider + 1 == slidesLength) {
        initialSlider = 0;
      } else {
        initialSlider++;
      }

      console.log(initialSlider, 'translateX(' + initialSlider * 100 + '%);');
      document.querySelector('.lav-comments').style.transform =
        'translateX(-' + initialSlider * 100 + '%)';
    }, 10000);
  }

  function addPayments() {
    let paymentsEL = `
      <div class="lav-payments">
        <img src="${REPO_DIR}/img/payments.png" alt="">
      </div>
    `;

    document
      .querySelector('.order-summary__sections')
      .insertAdjacentHTML('beforeend', paymentsEL);
  }

  function initSlider() {}
  let $ = window.Checkout.$;

  $('#checkbox').change(function () {
    setInterval(function () {
      slideRight();
    }, 3000);
  });

  var slideCount = $('#slider ul li').length;
  var slideWidth = $('#slider ul li').width();
  var slideHeight = $('#slider ul li').height();
  var sliderUlWidth = slideCount * slideWidth;

  $('#slider').css({ width: slideWidth, height: slideHeight });

  $('#slider ul').css({
    width: sliderUlWidth,
    marginLeft: -slideWidth,
  });

  $('#slider ul li:last-child').prependTo('#slider ul');

  function slideLeft() {
    $('#slider ul').animate(
      {
        left: +slideWidth,
      },
      200,
      function () {
        $('#slider ul li:last-child').prependTo('#slider ul');
        $('#slider ul').css('left', '');
      }
    );
  }

  function slideRight() {
    $('#slider ul').animate(
      {
        left: -slideWidth,
      },
      200,
      function () {
        $('#slider ul li:first-child').appendTo('#slider ul');
        $('#slider ul').css('left', '');
      }
    );
  }

  $('a.control_prev').on('click', function (e) {
    e.preventDefault();
    console.log('left');
    slideLeft();
  });

  $('a.control_next').on('click', function (e) {
    e.preventDefault();
    console.log('right');
    slideRight();
  });
})();
