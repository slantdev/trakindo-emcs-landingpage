(() => {
  // src/js/app.js
  $(function() {
    var controller = new ScrollMagic.Controller();
    $(".fade-out-50").each(function() {
      var tween = TweenMax.to(".fade-out-50", 0.2, {
        autoAlpha: 0,
        y: "+=50",
        ease: Sine.easeIn
      });
      var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-1",
        triggerHook: 1,
        duration: 1e3
      }).setTween(tween).addTo(controller);
    });
    $(".fade-out-100").each(function() {
      var tween = TweenMax.to(".fade-out-100", 0.75, {
        autoAlpha: 0,
        y: "+=100",
        ease: Sine.easeIn
      });
      var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-1",
        triggerHook: 1,
        duration: 1e3
      }).setTween(tween).addTo(controller);
    });
    $(".fade-out-200").each(function() {
      var tween = TweenMax.to(".fade-out-200", 0.75, {
        autoAlpha: 0,
        y: "+=200",
        ease: Sine.easeIn
      });
      var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-1",
        triggerHook: 1,
        duration: 1e3
      }).setTween(tween).addTo(controller);
    });
    $(".fade-out-300").each(function() {
      var tween = TweenMax.to(".fade-out-300", 0.75, {
        autoAlpha: 0,
        y: "+=300",
        ease: Sine.easeIn
      });
      var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-1",
        triggerHook: 1,
        duration: 1e3
      }).setTween(tween).addTo(controller);
    });
    $(".fade-out-400").each(function() {
      var tween = TweenMax.to(".fade-out-400", 0.75, {
        autoAlpha: 0,
        y: "+=400",
        ease: Sine.easeIn
      });
      var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-1",
        triggerHook: 1,
        duration: 1e3
      }).setTween(tween).addTo(controller);
    });
    $(".fade-out-500").each(function() {
      var tween = TweenMax.to(".fade-out-500", 0.75, {
        autoAlpha: 0,
        y: "+=500",
        ease: Sine.easeIn
      });
      var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-1",
        triggerHook: 1,
        duration: 1e3
      }).setTween(tween).addTo(controller);
    });
    $(".fade-in-50").each(function() {
      var tween = TweenMax.to(".fade-in-50", 0.75, {
        y: "-=50",
        ease: Sine.easeIn
      });
      var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-1",
        triggerHook: 1,
        duration: 1e3
      }).setTween(tween).addTo(controller);
    });
    $("#feature-01-text").each(function() {
      var tween = TweenMax.to("#feature-01-text", 0.75, {
        y: "-=100",
        ease: Power0.easeNone
      });
      var feature_01_text = new ScrollMagic.Scene({
        triggerElement: "#trigger-2",
        triggerHook: 0.8,
        duration: "90%",
        offset: 50
      }).setClassToggle("#feature-01-text", "reveal").setTween(tween).addTo(controller);
    });
    $("#feature-01-img").each(function() {
      var tween = TweenMax.to("#feature-01-img", 0.75, {
        x: "-=100",
        ease: Power0.easeNone
      });
      var feature_01_text = new ScrollMagic.Scene({
        triggerElement: "#trigger-2",
        triggerHook: 0.8,
        duration: "90%",
        offset: 50
      }).setClassToggle("#feature-01-img", "reveal").setTween(tween).addTo(controller);
    });
    $("#feature-02-text").each(function() {
      var tween = TweenMax.to("#feature-02-text", 0.75, {
        y: "-=100",
        ease: Power0.easeNone
      });
      var feature_01_text = new ScrollMagic.Scene({
        triggerElement: "#trigger-3",
        triggerHook: 0.8,
        duration: "90%",
        offset: 50
      }).setClassToggle("#feature-02-text", "reveal").setTween(tween).addTo(controller);
    });
    $("#feature-02-img").each(function() {
      var tween = TweenMax.to("#feature-02-img", 0.75, {
        x: "+=150",
        ease: Power0.easeNone
      });
      var feature_01_text = new ScrollMagic.Scene({
        triggerElement: "#trigger-3",
        triggerHook: 0.8,
        duration: "90%",
        offset: 50
      }).setClassToggle("#feature-02-img", "reveal").setTween(tween).addTo(controller);
    });
    $("#feature-03-text").each(function() {
      var tween = TweenMax.to("#feature-03-text", 0.75, {
        y: "-=100",
        ease: Power0.easeNone
      });
      var feature_03_text = new ScrollMagic.Scene({
        triggerElement: "#trigger-4",
        triggerHook: 0.8,
        duration: "90%",
        offset: 50
      }).setClassToggle("#feature-03-text", "reveal").setTween(tween).addTo(controller);
    });
    $("#feature-03-img").each(function() {
      var tween = TweenMax.to("#feature-03-img", 0.75, {
        x: "-=100",
        ease: Power0.easeNone
      });
      var feature_03_text = new ScrollMagic.Scene({
        triggerElement: "#trigger-4",
        triggerHook: 0.8,
        duration: "90%",
        offset: 50
      }).setClassToggle("#feature-03-img", "reveal").setTween(tween).addTo(controller);
    });
    $("#tagline").each(function() {
      var tagline = new ScrollMagic.Scene({
        triggerElement: "#trigger-5",
        triggerHook: 0.8,
        duration: "90%",
        offset: 50
      }).setClassToggle("#tagline", "reveal").addTo(controller);
    });
    $(".fade-in-100").each(function() {
      var tween = TweenMax.to(".fade-in-100", 0.75, {
        y: "-=100",
        ease: Sine.easeIn
      });
      var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-1",
        triggerHook: 1,
        duration: 1e3
      }).setTween(tween).addTo(controller);
    });
  });
})();
