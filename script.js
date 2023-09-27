// Include GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Landing Page Animations
ScrollTrigger.defaults({
  toggleActions: "play none none reverse"
});

gsap.to('.img-container', {
  scale: 52,
  ease: "ease",
  scrollTrigger: {
    trigger: '.video-section',
    scrub: 1,
    start: "top top",
    end: "bottom",
    pin: true
  }
});

gsap.to('.right', {
  autoAlpha: 0,
  x: 500,
  duration: 1.5,
  scrollTrigger: {
    start: 1
  }
});

gsap.to('.left', {
  autoAlpha: 0,
  x: 300,
  duration: 1.5,
  scrollTrigger: {
    start: 1
  }
});

gsap.to('.txt-bottom', {
  autoAlpha: 0,
  letterSpacing: -10,
  duration: 2,
  scrollTrigger: {
    start: 2
  }
});

const tl = gsap.timeline();
tl.from('.left-side div', {
    y: 100,
    opacity: 0,
    stagger: {
        amount: 0.2
    }
})
.from('.right-side', {
    opacity: 0,
    duration: 2
}, 0.5);

ScrollTrigger.create({
  animation: tl,
  trigger: '.wrapper',
  start: "top top",
  end: "+=600",
  scrub: 1,
  pin: true,
  ease: "ease"
});

const timeline = gsap.timeline();
timeline.from('.title span', {
    y: 150,
    skewY: 7,
    duration: 3
})
.from('.txt-bottom', {
    letterSpacing: -10,
    opacity: 0,
    duration: 3
});

// Preloader Script
$(document).ready(function () {
  var $scramble = $(".scramble");
  $scramble.scramble(3000, 20, "alphabet", true);

  // Loader Animation
  const loaderTimeline = gsap.timeline();
  loaderTimeline.to(".loading", {
    opacity: 0,
    delay: 2.5,
  })
  .to(".loader", {
    opacity: 0,
    duration: 1,
    ease: "expo.easeinout",
  })
  .to(".loader", {
    y: "-100%",
    duration: 1,
  });
});
