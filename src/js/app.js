$(function () {
  // $(window).on('beforeunload', function () {
  //   $(window).scrollTop(0);
  // });
  // $('body').addClass('loaded');

  var header = $('.header');

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 600) {
      header.removeClass('clearHeader').addClass('darkHeader');
    } else {
      header.removeClass('darkHeader').addClass('clearHeader');
    }
  });

  $('.bt-menu-trigger').click(function (e) {
    e.preventDefault();
    $('.bt-menu-trigger').toggleClass('bt-menu-open');
    //$('.bt-menu').toggleClass('bt-menu-open');
    // $('body').toggleClass('overflow-hidden');
  });

  $('.main-menu-trigger').click(function (e) {
    e.preventDefault();
    $('.main-menu-trigger').toggleClass('main-menu-open');
  });

  $('.menu-dropdown').click(function (e) {
    e.preventDefault();
    $(this).next().slideToggle();
  });

  // $('.nav-menu').hover(
  //   function () {
  //     // over
  //     $('.bt-menu').addClass('bt-menu-nav-open');
  //   },
  //   function () {
  //     // out
  //     $('.bt-menu').removeClass('bt-menu-nav-open');
  //   }
  // );
  // Scroll Magic
  var controller = new ScrollMagic.Controller();

  $('.fade-out-50').each(function () {
    var tween = TweenMax.to('.fade-out-50', 0.2, {
      autoAlpha: 0,
      y: '+=50',
      ease: Sine.easeIn,
    });

    var scene = new ScrollMagic.Scene({
      triggerElement: '#trigger-1',
      triggerHook: 1,
      duration: 1000,
    })
      .setTween(tween)
      //.addIndicators({ name: '1 (duration: 1000)' })
      .addTo(controller);
  });

  $('.fade-out-100').each(function () {
    var tween = TweenMax.to('.fade-out-100', 0.75, {
      autoAlpha: 0,
      y: '+=100',
      ease: Sine.easeIn,
    });

    var scene = new ScrollMagic.Scene({
      triggerElement: '#trigger-1',
      triggerHook: 1,
      duration: 1000,
    })
      .setTween(tween)
      .addTo(controller);
  });

  $('.fade-out-200').each(function () {
    var tween = TweenMax.to('.fade-out-200', 0.75, {
      autoAlpha: 0,
      y: '+=200',
      ease: Sine.easeIn,
    });

    var scene = new ScrollMagic.Scene({
      triggerElement: '#trigger-1',
      triggerHook: 1,
      duration: 1000,
    })
      .setTween(tween)
      .addTo(controller);
  });

  $('.fade-out-300').each(function () {
    var tween = TweenMax.to('.fade-out-300', 0.75, {
      autoAlpha: 0,
      y: '+=300',
      ease: Sine.easeIn,
    });

    var scene = new ScrollMagic.Scene({
      triggerElement: '#trigger-1',
      triggerHook: 1,
      duration: 1000,
    })
      .setTween(tween)
      .addTo(controller);
  });

  $('.fade-out-400').each(function () {
    var tween = TweenMax.to('.fade-out-400', 0.75, {
      autoAlpha: 0,
      y: '+=400',
      ease: Sine.easeIn,
    });

    var scene = new ScrollMagic.Scene({
      triggerElement: '#trigger-1',
      triggerHook: 1,
      duration: 1000,
    })
      .setTween(tween)
      .addTo(controller);
  });

  $('.fade-out-500').each(function () {
    var tween = TweenMax.to('.fade-out-500', 0.75, {
      autoAlpha: 0,
      y: '+=500',
      ease: Sine.easeIn,
    });

    var scene = new ScrollMagic.Scene({
      triggerElement: '#trigger-1',
      triggerHook: 1,
      duration: 1000,
    })
      .setTween(tween)
      .addTo(controller);
  });

  $('.fade-in-50').each(function () {
    var tween = TweenMax.to('.fade-in-50', 0.75, {
      //autoAlpha: 0,
      y: '-=50',
      ease: Sine.easeIn,
    });

    var scene = new ScrollMagic.Scene({
      triggerElement: '#trigger-1',
      triggerHook: 1,
      duration: 1000,
    })
      .setTween(tween)
      .addTo(controller);
  });

  $('#feature-01-text').each(function () {
    var tween = TweenMax.to('#feature-01-text', 0.75, {
      //autoAlpha: 0,
      y: '-=100',
      //ease: Sine.easeIn,
      ease: Power0.easeNone,
    });
    var feature_01_text = new ScrollMagic.Scene({
      triggerElement: '#trigger-2',
      triggerHook: 0.8, // show, when scrolled 10% into view
      duration: '90%', // hide 10% before exiting view (80% + 10% from bottom)
      offset: 50, // move trigger to center of element
    })
      .setClassToggle('#feature-01-text', 'reveal')
      .setTween(tween)
      //.addIndicators()
      .addTo(controller);
  });

  $('#feature-01-img').each(function () {
    var tween = TweenMax.to('#feature-01-img', 0.75, {
      //autoAlpha: 0,
      x: '-=100',
      //ease: Sine.easeIn,
      ease: Power0.easeNone,
    });
    var feature_01_text = new ScrollMagic.Scene({
      triggerElement: '#trigger-2',
      triggerHook: 0.8, // show, when scrolled 10% into view
      duration: '90%', // hide 10% before exiting view (80% + 10% from bottom)
      offset: 50, // move trigger to center of element
    })
      .setClassToggle('#feature-01-img', 'reveal')
      .setTween(tween)
      //.addIndicators()
      .addTo(controller);
  });

  $('#feature-02-text').each(function () {
    var tween = TweenMax.to('#feature-02-text', 0.75, {
      //autoAlpha: 0,
      y: '-=100',
      //ease: Sine.easeIn,
      ease: Power0.easeNone,
    });
    var feature_01_text = new ScrollMagic.Scene({
      triggerElement: '#trigger-3',
      triggerHook: 0.8, // show, when scrolled 10% into view
      duration: '90%', // hide 10% before exiting view (80% + 10% from bottom)
      offset: 50, // move trigger to center of element
    })
      .setClassToggle('#feature-02-text', 'reveal')
      .setTween(tween)
      //.addIndicators()
      .addTo(controller);
  });

  $('#feature-02-img').each(function () {
    var tween = TweenMax.to('#feature-02-img', 0.75, {
      //autoAlpha: 0,
      x: '+=150',
      //ease: Sine.easeIn,
      ease: Power0.easeNone,
    });
    var feature_01_text = new ScrollMagic.Scene({
      triggerElement: '#trigger-3',
      triggerHook: 0.8, // show, when scrolled 10% into view
      duration: '90%', // hide 10% before exiting view (80% + 10% from bottom)
      offset: 50, // move trigger to center of element
    })
      .setClassToggle('#feature-02-img', 'reveal')
      .setTween(tween)
      //.addIndicators()
      .addTo(controller);
  });

  $('#feature-03-text').each(function () {
    var tween = TweenMax.to('#feature-03-text', 0.75, {
      //autoAlpha: 0,
      y: '-=100',
      //ease: Sine.easeIn,
      ease: Power0.easeNone,
    });
    var feature_03_text = new ScrollMagic.Scene({
      triggerElement: '#trigger-4',
      triggerHook: 0.8, // show, when scrolled 10% into view
      duration: '90%', // hide 10% before exiting view (80% + 10% from bottom)
      offset: 50, // move trigger to center of element
    })
      .setClassToggle('#feature-03-text', 'reveal')
      .setTween(tween)
      //.addIndicators()
      .addTo(controller);
  });

  $('#feature-03-img').each(function () {
    var tween = TweenMax.to('#feature-03-img', 0.75, {
      //autoAlpha: 0,
      x: '-=100',
      //ease: Sine.easeIn,
      ease: Power0.easeNone,
    });
    var feature_03_text = new ScrollMagic.Scene({
      triggerElement: '#trigger-4',
      triggerHook: 0.8, // show, when scrolled 10% into view
      duration: '90%', // hide 10% before exiting view (80% + 10% from bottom)
      offset: 50, // move trigger to center of element
    })
      .setClassToggle('#feature-03-img', 'reveal')
      .setTween(tween)
      //.addIndicators()
      .addTo(controller);
  });

  $('#tagline').each(function () {
    // var tween = TweenMax.to('#tagline', 0.75, {
    //   //autoAlpha: 0,
    //   x: '-=100',
    //   //ease: Sine.easeIn,
    //   ease: Power0.easeNone,
    // });
    var tagline = new ScrollMagic.Scene({
      triggerElement: '#trigger-5',
      triggerHook: 0.8, // show, when scrolled 10% into view
      duration: '90%', // hide 10% before exiting view (80% + 10% from bottom)
      offset: 50, // move trigger to center of element
    })
      .setClassToggle('#tagline', 'reveal')
      //.setTween(tween)
      //.addIndicators()
      .addTo(controller);
  });

  $('.fade-in-100').each(function () {
    var tween = TweenMax.to('.fade-in-100', 0.75, {
      //autoAlpha: 0,
      y: '-=100',
      ease: Sine.easeIn,
    });

    var scene = new ScrollMagic.Scene({
      triggerElement: '#trigger-1',
      triggerHook: 1,
      duration: 1000,
    })
      .setTween(tween)
      .addTo(controller);
  });
});

// const ps = new PerfectScrollbar('#app', {
//   wheelSpeed: 2,
//   wheelPropagation: true,
//   minScrollbarLength: 20,
// });
//const ps = new PerfectScrollbar('#app');
