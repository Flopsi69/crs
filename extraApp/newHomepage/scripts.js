const settings = {
  dir: 'https://flopsi69.github.io/crs/extraApp/newHomepage',
  clarity: true,
  observe: false,
};

const device = window.innerWidth < 768 ? 'mobile' : 'desktop';

if (settings.clarity) {
  const clarityInterval = setInterval(function () {
    if (typeof clarity == 'function') {
      clearInterval(clarityInterval);
      clarity('set', 'new_hp_design_' + device, 'variant_1');
    }
  }, 1000);
}

function gaEvent(action, label) {
  if (!label) {
    label = '';
  }
  try {
    var objData = {
      event: 'event-to-ga',
      eventCategory: 'Exp — New HP design ' + device,
      eventAction: action,
      eventLabel: label,
      eventValue: '',
    };
    console.log('EventFire:', objData);
    dataLayer.push(objData);
  } catch (e) {
    console.log('Event Error:', e);
  }
}

init();

function init() {
  gaEvent('loaded');

  initFeedbacks();
  iniWhy();
  initFaq();
  initHeader();
  initConnect();
  initWorks();
  initObserver();

  for (let toggleEl of document.querySelectorAll('.lav-plans__toggle')) {
    toggleEl.addEventListener('click', function () {
      if (this.classList.contains('active')) return false;

      const plan = this.dataset.value;

      document
        .querySelector('.lav-plans__toggle.active')
        .classList.remove('active');
      this.classList.add('active');

      gaEvent('Click on toggle plan', plan);

      if (plan === 'monthly') {
        document.querySelector('.lav-plans__row-monthly').style.display =
          'flex';
        document.querySelector('.lav-plans__row-yearly').style.display = 'none';
        document.querySelector('.lav-plans__btn-monthly').style.display =
          'block';
        document.querySelector('.lav-plans__btn-yearly').style.display = 'none';
      } else {
        document.querySelector('.lav-plans__row-monthly').style.display =
          'none';
        document.querySelector('.lav-plans__row-yearly').style.display = 'flex';
        document.querySelector('.lav-plans__btn-monthly').style.display =
          'none';
        document.querySelector('.lav-plans__btn-yearly').style.display =
          'block';
      }
    });
  }
}

function initObserver() {
  const observerOptions = {
    root: null,
    threshold: 0,
    rootMargin: '0px 0px -45% 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // console.log(entry);
      if (entry.isIntersecting) {
        console.log(entry.target);
        if (entry.target.classList.contains('lav-feedbacks')) {
          setTimeout(() => {
            gaEvent('Extra members review Visibility');
          }, 2000);
        }

        if (entry.target.classList.contains('lav-why')) {
          gaEvent('Why Extra Visibility');
        }

        if (entry.target.classList.contains('lav-works')) {
          if (window.innerWidth > 768) {
            setTimeout(() => {
              gaEvent('How the Extra debit card works Visibility');
            }, 2000);
          } else {
            setTimeout(() => {
              gaEvent(
                'How the Extra debit card works Visibility',
                document
                  .querySelector(
                    '.lav-works__slide.is-active .lav-works__info-num'
                  )
                  .innerText.replace('.', '')
              );
            }, 2000);
          }
        }

        if (entry.target.classList.contains('lav-compare')) {
          setTimeout(() => {
            gaEvent('Comparison table Visibility');
          }, 2000);
        }

        if (entry.target.classList.contains('lav-better')) {
          setTimeout(() => {
            gaEvent('Better credit takes you places Visibility');
          }, 2000);
        }

        if (entry.target.classList.contains('lav-plans')) {
          setTimeout(() => {
            gaEvent('Our plans Visibility');
          }, 2000);
        }

        if (entry.target.classList.contains('lav-connect')) {
          setTimeout(() => {
            gaEvent('Does Extra connect with my bank Visibility');
          }, 2000);
        }

        if (entry.target.classList.contains('section--faq')) {
          setTimeout(() => {
            gaEvent('FAQ Visibility');
          }, 2000);
        }

        if (entry.target.classList.contains('lav-join')) {
          setTimeout(() => {
            gaEvent('Let`s get started Visibility');
          }, 2000);
        }

        // entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  for (let section of Array.from(document.querySelectorAll('.lav-observe'))) {
    observer.observe(section);
  }
}

function initWorks() {
  let initSplideInterval = setInterval(() => {
    if (typeof Splide == 'function') {
      clearInterval(initSplideInterval);

      let steps = new Splide('.lav-works__slider', {
        arrows: false,
        perPage: 4,
        gap: '14px',
        // autoWidth: true,
        breakpoints: {
          992: {
            perPage: 2,
            type: 'loop',
          },
          572: {
            perPage: 1,
            pagination: true,
            gap: 15,
          },
        },
      }).mount();

      let tables = new Splide('.lav-compare__slider', {
        arrows: false,
        type: 'loop',
        perPage: 1,
        gap: '14px',
        breakpoints: {},
      }).mount();

      let feedbacks = new Splide('.lav-feedbacks__slider', {
        arrows: false,
        pagination: false,
        perPage: 3,
        gap: '65px',
        breakpoints: {
          1400: {
            gap: '15px',
          },
          992: {
            type: 'loop',
            perPage: 1,
            autoWidth: true,
            focus: 'center',
          },
          768: {
            gap: '20px',
          },
        },
      }).mount();

      if (window.innerWidth < 768) {
        feedbacks.on('moved', function () {
          gaEvent('Swipe on review slide');
        });

        steps.on('moved', function () {
          let num = document
            .querySelector('.lav-works__slide.is-active .lav-works__info-num')
            .innerText.replace('.', '');

          setTimeout(() => {
            if (
              num ==
              document
                .querySelector(
                  '.lav-works__slide.is-active .lav-works__info-num'
                )
                .innerText.replace('.', '')
            ) {
              gaEvent('How the Extra debit card works Visibility', num);
            }
          }, 2000);
        });
      }

      // splide.on('moved', function () {
      //   gaEvent('swipe slider', 'How Luminette transforms your days');
      // });
    }
  }, 500);
}

function initHeader() {
  for (let select of document.querySelectorAll('.lav-select')) {
    select
      .querySelector('.lav-select__value')
      .addEventListener('click', function () {
        console.log(1);
        $(this).toggleClass('active');
        $(select.querySelector('.lav-select__list'))
          .toggleClass('active')
          .slideToggle();
      });
  }

  setTimeout(() => {
    $('.lav-compare-debit').slideUp();
  }, 500);

  for (let selectItem of document.querySelectorAll('.lav-select__item')) {
    selectItem.addEventListener('click', function () {
      let value = $(this).text();

      gaEvent('Click on dropdown in comparison table', value);

      if (value == 'Secured Card') {
        $('.lav-compare-debit').slideUp();
        $('.lav-compare-secured').slideDown();
      } else {
        $('.lav-compare-debit').slideDown();
        $('.lav-compare-secured').slideUp();
      }
      $(this).closest('.lav-select').find('.lav-select__value').text(value);
      $(this)
        .closest('.lav-select')
        .find('.lav-select__value')
        .toggleClass('active');
      $(this).parent().toggleClass('active').slideToggle();
    });
  }

  document.querySelector('[href="#FAQ"]').innerText = document
    .querySelector('[href="#FAQ"]')
    .innerText.replace('s', '');

  document
    .querySelector('.footer-link[href="https://intercom.help/extracard/en"]')
    .insertAdjacentHTML(
      'beforebegin',
      '<a href="#FAQ" class="footer-link">FAQ</a>'
    );

  document
    .querySelector('.cta-button--nav')
    .insertAdjacentHTML(
      'beforebegin',
      '<a href="#lav-feedbacks" class="nav-link">Members</a>'
    );

  document
    .querySelector('.cta-nav-mobile')
    .insertAdjacentHTML(
      'beforebegin',
      `<img class='lav-burger lav-mob' src='${settings.dir}/img/burger.svg' />`
    );

  document
    .querySelector('.nav-menu')
    .insertAdjacentHTML(
      'afterbegin',
      `<img class='lav-burger__close lav-mob' src='${settings.dir}/img/close.svg' />`
    );

  document.querySelector('.lav-burger').addEventListener('click', function () {
    gaEvent('Click on hamburger menu');
    document.querySelector('.nav-menu').classList.add('active');
    document.querySelector('.container--nav').classList.add('active');
  });

  for (let item of document.querySelectorAll(
    '.nav-menu .nav-link, .footer-link'
  )) {
    item.addEventListener('click', function (e) {
      let href = $(this).attr('href');
      if (href[0] == '#') {
        e.preventDefault();
        e.stopImmediatePropagation();
        e.stopPropagation();
        $('html,body').animate(
          {
            scrollTop:
              $(href).offset().top +
              20 -
              ($('.nav').innerHeight() + $('.lav-hat').innerHeight()),
          },
          1000
        );
        document.querySelector('.nav-menu').classList.remove('active');
        document.querySelector('.container--nav').classList.remove('active');
      }
    });
  }

  document.addEventListener('click', function (e) {
    if (
      e.target.classList.contains('active') &&
      e.target.classList.contains('container--nav')
    ) {
      document.querySelector('.nav-menu').classList.remove('active');
      document.querySelector('.container--nav').classList.remove('active');
    }
  });

  document
    .querySelector('.lav-burger__close')
    .addEventListener('click', function () {
      document.querySelector('.nav-menu').classList.remove('active');
      document.querySelector('.container--nav').classList.remove('active');
    });

  for (let item of document.querySelectorAll('.lav-apply')) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      if (item.classList.contains('lav-jumb__btn')) {
        gaEvent('Click on start building credit button');
      }
      if (item.classList.contains('lav-compare__btn')) {
        gaEvent('Click on Join now button');
      }
      if (item.classList.contains('lav-works__btn')) {
        if (window.innerWidth > 768) {
          gaEvent('Click on Get started button');
        } else {
          gaEvent(
            'Click on Get started button',
            document
              .querySelector('.lav-works__slide.is-active .lav-works__info-num')
              .innerText.replace('.', '')
          );
        }
      }
      if (
        item.classList.contains('lav-plans__btn') &&
        item.closest('.lav-plans__btn-monthly')
      ) {
        document.querySelector('a[data-w-tab="Monthly"]').click();
        gaEvent('Click on Start Building Credit button');
      }
      if (
        item.classList.contains('lav-plans__btn') &&
        item.closest('.lav-plans__btn-yearly')
      ) {
        document.querySelector('a[data-w-tab="Annually"]').click();
        gaEvent('Click on Start Building Credit button');
      }
      if (item.classList.contains('lav-join__btn')) {
        gaEvent('Click on APPLY NOW button');
      }

      document.querySelector('.cta-button--nav').click();
    });
  }

  document
    .querySelector('.footer-legal-notice')
    .insertAdjacentHTML(
      'beforeend',
      '<br/><br/>³Based on a survey performed by Extra, using data from Experian, studying changes in credit scores for Extra members between March 2021 to April 2022. We compared credit score changes in active Extra members who had a credit score of 650 or lower when they began using Extra, who had no delinquent payments with Extra, and who had no other trade lines at or above 100 percent balance ratio in the past 3 months and compared these members to a control group. Over the 12 month period of the survey, these members increased their credit score by 47.8 points on average; the maximum credit score increase was 203 points. Impact on your credit may vary, as credit scores are independently determined by credit bureaus based on a number of factors, including your history with other financial services organizations.'
    );

  $('.faq-content').attr('style', '');

  $('.faq-header').on('click', function (e) {
    e.stopPropagation();
    e.stopImmediatePropagation();
    e.preventDefault();
    gaEvent('Click on FAQ accordion', $(this).text().trim());
    if (
      document.querySelector('.faq-header.active') &&
      !this.classList.contains('active')
    ) {
      $('.faq-header.active').removeClass('active').next().slideUp();
    }
    $(this).toggleClass('active');
    $(this).next().slideToggle();
  });
}

function initConnect() {
  document
    .querySelector('.lav-connect__input')
    .addEventListener('click', function () {
      gaEvent('Click on Does Extra connect with my bank input');
    });

  document
    .querySelector('.lav-connect__search')
    .addEventListener('click', function () {
      gaEvent('Click on Does Extra connect with my bank button');
      let value = document.querySelector('.lav-connect__input').value;
      console.log(value);
      if (!value) return false;
      $.ajax({
        type: 'POST',
        url: 'https://extra.app/api/bank-lookup',
        data: JSON.stringify({ query: value }),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (data) {
          if (data.bank == null) {
            $('.lav-connect').addClass('lav-fail');
            gaEvent('Does Extra connect with my bank Error');
          } else {
            gaEvent('Does Extra connect with my bank Submit');
            $('.lav-connect').addClass('lav-success');
            if (data.bank.logo) {
              $('.lav-connect__couple img:first-child')[0].src =
                'data:image/png;base64, ' + data.bank.logo;
              $('.lav-connect__couple img:first-child').show();
            } else {
              $('.lav-connect__couple img:first-child').hide();
            }
            $('.lav-connect').addClass('lav-success');
          }
          console.log(data);
        },
        failure: function (errMsg) {
          console.log(errMsg);
        },
      });
      // $.post('https://extra.app/api/bank-lookup', );
    });

  $('.lav-connect__refresh').on('click', function () {
    $('.lav-connect').removeClass('lav-fail');
    $('.lav-connect').removeClass('lav-success');
  });
}

function initFeedbacks() {
  // document
  //   .querySelector('.lav-ratings')
  //   .insertAdjacentElement(
  //     'afterend',
  //     document.querySelector('.section--intro')
  //   );
  // document.querySelector('.section--intro .section-heading').innerText =
  //   'As told by Extra members';
}

function iniWhy() {
  for (let item of document.querySelectorAll('.lav-why__item-head')) {
    item.addEventListener('click', function () {
      gaEvent('Click on Why Extra accordion', item.innerText);
      if (
        document.querySelector('.lav-why__item-head.active') &&
        !item.classList.contains('active')
      ) {
        $('.lav-why__item-head.active').removeClass('active').next().slideUp();
      }
      item.classList.toggle('active');
      $(item).next().slideToggle();
    });
  }
}

function initRatings() {
  document.querySelector('.lav-ratings__stars-caption').innerText =
    document.querySelector('.hero-notice-stars + div').innerText;
}

function initFaq() {
  document.querySelector('#FAQ').classList.add('lav-observe');
  document
    .querySelector('.lav-join')
    .insertAdjacentElement('beforebegin', document.querySelector('#FAQ'));

  document.querySelector('#FAQ .section-heading').innerHTML =
    'Frequently asked&nbsp;questions';
}

const MarqueeJs = (queryselector, speed, loop) => {
  const Selector = queryselector;
  let SceenWidth = window.innerWidth;
  let SelectorWidth = Selector.offsetWidth;
  let Sw = SceenWidth,
    step = 1;

  Selector.style.left = SceenWidth + 'px';

  console.log(SceenWidth);

  window.onresize = () => {
    SceenWidth = window.innerWidth;
    SelectorWidth = Selector.offsetWidth;
    (Sw = SceenWidth), (step = 1);
    Selector.style.left = SceenWidth + 'px';
  };

  const sIntv = setInterval(() => {
    Sw = Sw - speed;
    Selector.style.left = `${Sw}px`;

    if (Sw <= -SelectorWidth) {
      Sw = SceenWidth;
      Selector.style.left = SceenWidth + 'px';
      loop == 0 ? null : step >= loop ? clearInterval(sIntv) : (step = 1);
      step++;
    }
  }, 0);
};

for (let itemMarkquee of document.querySelectorAll('.lav-marquee')) {
  MarqueeJs(itemMarkquee, 0.45, 0);
}
