$(function () {
  $(window).on('beforeunload', function () {
    $(window).scrollTop(0);
  });

  $('body').addClass('loaded');

  $('#scroll-to-section-2').click(function () {
    $('html, body').animate(
      {
        scrollTop: $('#section-2').offset().top - 80,
      },
      700
    );
  });

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
});
