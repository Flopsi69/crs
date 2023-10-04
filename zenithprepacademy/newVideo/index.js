console.log('initExp');

/********* exp **********/
const exp = {
  dir: 'https://flopsi69.github.io/crs/zenithprepacademy/newVideo',
  observer: {
    mutation: false,
    intersection: true,
  },
  clarity: {
    enable: true,
    params: ['set', 'new_video', 'variant_1'],
  },
  debug: false,
};

(function () {
  if (location.href.includes('/booking-page')) {
    let startFuncBooking = setInterval(() => {
      if (document.querySelector('.calendly-iframe')) {
        clearInterval(startFuncBooking);
        document.querySelectorAll('.calendly-iframe').forEach((el) => {
          if (
            el.src !==
            'https://calendly.com/d/2m6-c5q-fq4/zoom-meeting-w-admissions-counselor-45min?hide_event_type_details=1&hide_gdpr_banner=1&month=2023-05'
          ) {
            el.src =
              'https://calendly.com/d/2m6-c5q-fq4/zoom-meeting-w-admissions-counselor-45min?hide_event_type_details=1&hide_gdpr_banner=1&month=2023-05';
          }
        });

        if (document.querySelector('#col-right-144 h1 b')) {
          document.querySelector('#col-right-144 h1 b').textContent =
            'Zoom Meeting w/ Admissions Counselor (45min)';
        }

        if (document.querySelector('#headline-44670 h1 b')) {
          document.querySelector('#headline-44670 h1 b').textContent =
            'Zoom Meeting w/ Admissions Counselor (45min)';
        }

        // if (
        //   document.querySelector('#col-right-144 h1 b').textContent !==
        //   'Meeting w/ Admissions Counselor (Zoom)'
        // ) {
        //   document.querySelector('#col-right-144 h1 b').textContent =
        //     'Meeting w/ Admissions Counselor (Zoom)';
        // }

        // Zoom Meeting w/ Admissions Counselor (45min)
      }
    }, 100);
    return false;
  }
  /*** STYLES / Start ***/
  const styles = `
    .timeline {
      display: none;
    }
    .timeline2 {
      display: flex;
      flex-flow: column;
      width: 335px;
      background: #f7f7f7;
      border: 1px solid #D2DFED;
      border-radius: 16px;
      margin-left: 20px;
      overflow: auto;
    }
    .timeline2__list {
      overflow-y: auto;
    }
    .timeline2__title {
      padding: 16px;
      color: #474747;
      font-size: 20px;
      font-weight: 700;
      line-height: 24px;
      border-bottom: 1px solid #D2DFED;
    }
    .timeline2__caption {
      margin-top: 6px;
      color: var(--Text-2, #505050);
      font-size: 12px;
      font-weight: 400;
      line-height: 20px;
    }
    .timeline2__caption span {
      color: var(--Black, #2D2D2D);
      font-weight: 700;
    }
    .timeline2__item + .timeline2__item  {
      border-top: 1px solid #D2DFED;
    }
    .timeline2__item {
      padding: 12px 16px;
      transition: 0.35s;
    }
    @media(hover:hover) {
      .timeline2__item:not(.active):hover {
        opacity: 0.6;
        cursor: pointer;
      }
    }
    .timeline2__item.active {
      background: #FFF;
    }
    .timeline2__item-title {
      color: #2D2D2D;
      font-size: 14px;
      font-weight: 700;
      line-height: 22px;
    }
    .timeline2__control {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 10px;
    }
    .timeline2__time {
      color: #2E4AAC;
      font-size: 12px;
      font-weight: 700;
      line-height: normal;
      border-bottom: 1px solid #2E4AAC;
      transition: 0.35s;
    }
    .timeline2__item.active .timeline2__time {
      // color: #FFF;
      // background: var(--New-buttom, #51AF97);
      // border-color: var(--New-buttom, #51AF97);
    }
    .timeline2__view {
      display: flex;
      // color: var(--Main-Orange, #FF9700);
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 21px;
      // padding-right: 13px;
      // background: url(${exp.dir}/img/arrow-right.svg) no-repeat right center;
      // transition: 0.35s;
    }
    .timeline2__item:not(.active) .timeline2__view {
      cursor: pointer;
    }
    .timeline2__item:not(.active) .timeline2__view:hover {
      opacity: 0.7;
    }
    .timeline2__item.active .timeline2__view {
      padding-right: 0;
      padding-left: 23px;
      background: url(${exp.dir}/img/camera.svg) no-repeat left center;
      color: var(--New-buttom, #51AF97);
    }
    .elVideo {
      border-radius: 16px;
      background: #fff;
    }
    #wistia_chrome_23 #wistia_grid_29_wrapper div.w-css-reset {
      border-radius: 18px;
    }
    .timeline2__all {
      display: none;
    }
    @media(min-width: 768px) {

    }
    @media(max-width: 768px) {
      .timeline2 {
        margin: auto;
        overflow: hidden;
      }
      .timeline2-wrap {
        background: #fff;
        margin-top: 15px!important;
      }
      .timeline2__all {
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--New-buttom, #51AF97);
        text-align: center;
        font-size: 16px;
        font-weight: 700;
        line-height: 22.86px;
        letter-spacing: 0.8px;
        text-transform: uppercase;
        margin-top: 20px;
      }
      .timeline2__all svg {
        margin-left: 10px;
      }
      .timeline2__list {
        overflow: hidden;
        height: 460px;
      }
      .timeline2__list.expanded {
        height: auto;
      }
      #row-104 [data-de-type="headline"] {
        margin-top: 0!important;
      }
    }
    @media(max-width: 450px) {
      .timeline2 {
        width: 100%;
      }
    }
  `;

  waitFor(
    () => document.body,
    () => {
      const stylesEl = document.createElement('style');
      stylesEl.innerHTML = styles;
      const scriptWistia1 = document.createElement('script');
      scriptWistia1.src =
        'https://fast.wistia.com/embed/medias/8ht3lui7f9.jsonp';
      scriptWistia1.async = false;
      const scriptWistia2 = document.createElement('script');
      scriptWistia2.src = 'https://fast.wistia.com/assets/external/E-v1.js';
      scriptWistia2.async = false;

      document.body.appendChild(stylesEl);
      document.head.appendChild(scriptWistia1);
      document.head.appendChild(scriptWistia2);
    },
    100
  );
  /*** STYLES / End ***/

  /********* Custom Code **********/
  const options = [
    {
      from: 0,
      to: 43,
      activeElement: 0,
    },
    {
      from: 43,
      to: 2 * 60 + 39,
      activeElement: 1,
    },
    {
      from: 2 * 60 + 39,
      to: 3 * 60 + 15,
      activeElement: 2,
    },
    {
      from: 3 * 60 + 15,
      to: 9 * 60 + 29,
      activeElement: 3,
    },
    {
      from: 9 * 60 + 29,
      to: 15 * 60 + 11,
      activeElement: 4,
    },
    {
      from: 15 * 60 + 11,
      to: 23 * 60 + 48,
      activeElement: 5,
    },
    {
      from: 23 * 60 + 48,
      to: 25 * 60 + 17,
      activeElement: 6,
    },
    {
      from: 25 * 60 + 17,
      to: 29 * 60 + 37,
      activeElement: 7,
    },
    {
      from: 29 * 60 + 37,
      to: 35 * 60 + 6,
      activeElement: 8,
    },
  ];

  init();
  function init() {
    console.log('init');

    const video = `
      <div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;">
        <div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;">
          <div class="wistia_embed wistia_async_8ht3lui7f9 seo=true videoFoam=true" style="height:100%;position:relative;width:100%">
            <div class="wistia_swatch" style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;"><img src="https://fast.wistia.com/embed/medias/8ht3lui7f9/swatch" style="filter:blur(5px);height:100%;object-fit:contain;width:100%;" alt="" aria-hidden="true" onload="this.parentNode.style.opacity=1;" /></div>
          </div>
        </div>
      </div>
    `;

    if (window.innerWidth > 768) {
      waitFor(
        () =>
          $('.elVideoWrapper .fluid-width-video-wrapper') &&
          $('.start-session-wrapper'),
        () => {
          $('.elVideoWrapper .elVideo').insertAdjacentHTML('afterbegin', video);
          $('.elVideoWrapper .fluid-width-video-wrapper').remove();
        }
      );
    } else {
      waitFor(
        () => $('.mobile-video-wrap .elCustomJS_code'),
        () => {
          $('.mobile-video-wrap .elCustomJS_code').remove();
          $('.mobile-video-wrap').insertAdjacentHTML('afterbegin', video);
        }
      );
    }

    waitFor(
      () => $('.timeline'),
      () => {
        initTimeline();
      }
    );

    waitFor(
      () => $('.wistia_responsive_padding'),
      () => {
        initVideo();
        $('.wistia_responsive_padding').scrollIntoView({
          block: 'start',
          behavior: 'smooth',
        });
      }
    );
  }

  function initVideo() {
    window._wq = window._wq || [];
    _wq.push({
      id: '8ht3lui7f9',
      onReady: function (video) {
        window.player = video;

        handlePlay(video);

        for (let range of options) {
          video.bind(
            'betweentimes',
            range.from,
            range.to,
            function (isBetween) {
              // && video.state() === 'playing'
              if (isBetween) {
                handleTimeline(range.activeElement);
              }
            }
          );
        }

        const videoDuration = video.duration();

        for (let i = 1; i <= 10; i++) {
          const range = videoDuration * i * 0.1;

          video.bind('crosstime', range, function () {
            const perc = i * 10 + '%';
            const isNear = video.time() - range < 30;

            if (video.state() === 'playing' && isNear) {
              pushDataLayer(
                'exp_new_video_v_fs_av',
                perc,
                'Video',
                'First screen'
              );
            }
          });
        }

        video.bind('play', function () {
          console.log('start video');
          pushDataLayer(
            'exp_new_video_v_fs_av',
            'video_Play',
            'Video',
            'First screen'
          );
          options.forEach((item) => {
            if (item.from <= video.time() && item.to >= video.time()) {
              handleTimeline(item.activeElement);
            }
          });
        });

        video.bind('pause', function () {
          console.log('pause video');
          pushDataLayer(
            'exp_new_video_v_fs_av',
            'video_Pause',
            'Video',
            'First screen'
          );
        });

        video.bind('end', function () {
          console.log('end video');
          pushDataLayer(
            'exp_new_video_v_fs_av',
            'video_Watch to End',
            'Video',
            'First screen'
          );
          handleTimeline(options[options.length - 1].activeElement);
          document
            .querySelector('.timeline__item.active')
            ?.classList.remove('active');
          document
            .querySelector('.timeline__item:last-child')
            .classList.add('done');
        });
      },
    });

    function handlePlay(video) {
      if (window.innerWidth <= 768) return false;

      // waitFor(
      // () => document.querySelector('.start-session'),
      // () => {
      // document.querySelector('.iframeBlocker')?.remove();
      // document
      //   .querySelector('.start-session')
      //   .addEventListener('click', function (e) {
      //     this.classList.add('active');
      //     if (video.state() !== 'playing') {
      //       video.play();
      //     }
      //   });
      // }
      // );
    }

    document.querySelector('#row-164')?.remove();
    document.querySelector('#row-104 [data-de-type="headline"]')?.remove();

    if (window.innerWidth > 768) {
      waitFor(
        () => document.querySelector('.iframeBlocker'),
        () => {
          document.querySelector('.iframeBlocker')?.remove();
        }
      );
    }
  }

  function initTimeline() {
    let timelineEl = `
      <div class='timeline2'>
        <div class='timeline2__title'>What you will discover in this free webinar:</div>

        <div class='timeline2__list'>
          <div class='timeline2__item'>
            <div class='timeline2__item-title'>
              Data, Facts, and Official University Statements: “Top universities ≠ top students”
            </div>

            <div class='timeline2__control'>
              <div class='timeline2__time'>00:43</div>
              <div class='timeline2__view'>&nbsp;</div>
            </div>
          </div>

          <div class='timeline2__item'>
            <div class='timeline2__item-title'>
              The Most Desired Admissions Profile Found in 16+ Years of Data
            </div>

            <div class='timeline2__control'>
              <div class='timeline2__time'>02:39</div>
              <div class='timeline2__view'>&nbsp;</div>
            </div>
          </div>

          <div class='timeline2__item'>
            <div class='timeline2__item-title'>
              3 Hidden Factors Universities Actually Want in 6-12th Graders and Why (but Never Say)
            </div>

            <div class='timeline2__control'>
              <div class='timeline2__time'>03:15</div>
              <div class='timeline2__view'>&nbsp;</div>
            </div>
          </div>

          <div class='timeline2__item'>
            <div class='timeline2__item-title'>
              The Most Common Way Parents Hurt Their Child’s Chances of Getting into a Top University Without Knowing It (and Why)
            </div>

            <div class='timeline2__control'>
              <div class='timeline2__time'>09:29</div>
              <div class='timeline2__view'>&nbsp;</div>
            </div>
          </div>

          <div class='timeline2__item'>
            <div class='timeline2__item-title'>
              The Stanford Secret Formula for Essays (and Why 6-11th Grade is More Important than 12th)
            </div>

            <div class='timeline2__control'>
              <div class='timeline2__time'>15:11</div>
              <div class='timeline2__view'>&nbsp;</div>
            </div>
          </div>

          <div class='timeline2__item'>
            <div class='timeline2__item-title'>
              Which Extracurriculars Are a Waste of Time/Money (and 3 Ways to Know Which Ones Actually Help)
            </div>

            <div class='timeline2__control'>
              <div class='timeline2__time'>23:48</div>
              <div class='timeline2__view'>&nbsp;</div>
            </div>
          </div>

          <div class='timeline2__item'>
            <div class='timeline2__item-title'>
              The #1 Most Effective Advantage Any Every Day, Normal Parent Can GiveTtheir 6-12th Grader for College Admissions
            </div>

            <div class='timeline2__control'>
              <div class='timeline2__time'>25:17</div>
              <div class='timeline2__view'>&nbsp;</div>
            </div>
          </div>

          <div class='timeline2__item'>
            <div class='timeline2__item-title'>
              How to Receive a Free College Audit & Planning Consultation
            </div>

            <div class='timeline2__caption'>
              <span>*Please note:</span> Due to the popularity of these free consultations, there is often a 1-3 week wait time before speaking to one of our Admissions Counselors. Therefore, all consultations are on a first come, first serve basis.
            </div>

            <div class='timeline2__control'>
              <div class='timeline2__time'>29:37</div>
              <div class='timeline2__view'>&nbsp;</div>
            </div>
          </div>
        </div>
      </div>

      <div class='timeline2__all'>
        View all 
        <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-3.34865e-08 1.26608C-2.42841e-08 1.05556 0.0737018 0.868421 0.221106 0.72807C0.515913 0.423976 1.03183 0.423976 1.32663 0.72807L5.50307 4.68129L9.65494 0.72807C9.94975 0.423977 10.4657 0.423977 10.7605 0.72807C11.0798 1.00877 11.0798 1.5 10.7605 1.7807L6.04355 6.27193C5.74874 6.57602 5.23283 6.57602 4.93802 6.27193L0.221106 1.7807C0.0737018 1.64035 -4.16664e-08 1.45322 -3.34865e-08 1.26608Z" fill="#51AF97"/>
        </svg>
      </div>
    `;

    $('.timeline').insertAdjacentHTML('beforebegin', timelineEl);

    let time = 0;
    initIntersection((entry) => {
      if (entry.isIntersecting) {
        time = entry.time;
      } else {
        pushDataLayer(
          'exp_new_video_t_wywdtfw_ft',
          parseInt(entry.time - time),
          'Timelog',
          'What you will discover in this free webinar:'
        );
        time = 0;
      }
    }, $('.timeline2'));

    $('.timeline2')?.closest('.row')?.classList.add('timeline2-wrap');
    $('.timeline2__all').addEventListener('click', function () {
      pushDataLayer(
        'exp_new_video_b_wywdtfw_va',
        'View all',
        'Button',
        'What you will discover in this free webinar:'
      );
      this.remove();
      $('.timeline2__list').classList.add('expanded');
    });

    $$('.timeline2__item').forEach((el, i) => {
      el.addEventListener('click', function () {
        pushDataLayer(
          'exp_new_video_v_wywdtfw_sn',
          `${el.querySelector('.timeline2__time').textContent.trim()}`,
          'View',
          'What you will discover in thisfree webinar:'
        );

        if (el.classList.contains('active')) return false;

        document.querySelector('.start-session-wrapper')?.remove();

        if (window.player.state() !== 'playing') {
          window.player.play();
        }

        window.player.time(options[i + 1].from);

        // handleTimeline(i + 1);
      });
    });
  }

  function handleTimeline(childNum) {
    console.log('fire', childNum);

    const targetEl = document.querySelector(
      `.timeline2__item:nth-child(${childNum})`
    );
    const prevEl = document.querySelector('.timeline2__item.active');

    if (prevEl) {
      prevEl.classList.remove('active');
      prevEl.querySelector('.timeline2__view').innerHTML = '&nbsp';
    }

    if (targetEl) {
      targetEl.classList.add('active');
      targetEl.querySelector('.timeline2__view').innerText = 'Current time';
    }

    // clearOtherTimelines();
  }

  function clearOtherTimelines() {
    if (!document.querySelector('.timeline__item.active')) return false;

    $('.timeline__item.active').classList.remove('done');
    let nextEl = $('.timeline__item.active').nextElementSibling;
    let prevEl = $('.timeline__item.active').previousElementSibling;

    while (nextEl) {
      nextEl.classList.remove('done', 'active');
      nextEl = nextEl.nextElementSibling;
    }

    while (prevEl) {
      prevEl.classList.remove('active');
      prevEl.classList.add('done');
      prevEl = prevEl.previousElementSibling;
    }
  }
  // *** Utils *** //
  // Alalytic 4
  function pushDataLayer(name = '', desc = '', type = '', loc = '') {
    try {
      var objData = {
        event: 'event-to-ga4',
        event_name: name,
        event_desc: desc,
        event_type: type,
        event_loc: loc,
      };
      console.log('eventFire', objData);
      if (!exp.debug) {
        dataLayer.push(objData);
      }
    } catch (e) {
      console.log('Event Error:', e);
    }
  }
  // Mutation Observer
  function initMutation(cb) {
    let observer = new MutationObserver((mutations) => {
      for (let mutation of mutations) {
        for (let node of mutation.addedNodes) {
          if (!(node instanceof HTMLElement)) continue;

          cb(node);
        }
      }
    });

    waitFor(
      () => document.body,
      () => {
        observer.observe(document.body, { childList: true, subtree: true });
      },
      100
    );
  }

  // Intersection Observer
  function initIntersection(cb, observeEl) {
    const observerOptions = {
      root: null,
      threshold: 0,
      // rootMargin: '-40%',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        cb(entry);
      });
    }, observerOptions);

    if (observeEl) {
      observer.observe(observeEl);
    } else {
      for (let el of Array.from(document.querySelectorAll('.lav-observe'))) {
        observer.observe(el);
      }
    }
  }

  async function isElementInViewport(el, event, timeout = 5) {
    if (el.classList.contains('in-view')) return false;

    setTimeout(() => {
      const rect = el.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      if (
        rect.top + rect.height * 0.3 < windowHeight &&
        rect.bottom > rect.height * 0.3
      ) {
        return true;
      }

      return false;
    }, timeout * 1000);
  }

  function $(selector, context = document) {
    return context.querySelector(selector);
  }

  function $$(selector, context = document) {
    return context.querySelectorAll(selector);
  }
})();

//Clarity
if (!exp.debug && exp.clarity.enable) {
  waitFor(
    () => typeof clarity == 'function',
    () => {
      clarity(...exp.clarity.params);
    }
  );
}

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Waiting for loading by condition
function waitFor(condition, cb, ms = 1000) {
  if (condition()) {
    if (typeof cb == 'function') cb();
    return;
  }

  let interval = setInterval(function () {
    if (condition()) {
      clearInterval(interval);
      if (typeof cb == 'function') cb();
    }
  }, ms);
}
