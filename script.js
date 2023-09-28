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
  x: -500,
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

ScrollTrigger.create({
  animation: tl,
  trigger: '.wrapper',
  start: "top top",
  end: "+=600",
  scrub: 1,
  pin: true,
  ease: "ease"
});

gsap.utils.toArray('.col').forEach(image => {
  gsap.fromTo(image, {
    opacity: .3,
    x: 0
  }, {
    opacity: 1,
    x: -50,
    scrollTrigger: {
      trigger: image,
      start: "10%",
      stagger: {
        amount: .4
      }
    }
  });
});

const timeline = gsap.timeline();

timeline.from('.title span', {
  y: 150,
  skewY: 7,
  duration: 3
}).from('.txt-bottom', {
  letterSpacing: -10,
  opacity: 0,
  duration: 3,
});

// Preloader Script
$(document).ready(function () {
  var $scramble = $(".scramble");
  $scramble.scramble(3000, 20, "alphabet", true);

  // Loader Animation
  const loaderTimeline = gsap.timeline();
  loaderTimeline
    .to(".loading", {
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

// Hide the desired content initially
const hideContent = gsap.timeline();
hideContent.to(".text-content", {
  autoAlpha: 0,
  duration: 0
});

// Create a ScrollTrigger to reveal the content after 1/6th scroll
ScrollTrigger.create({
  trigger: '.video-section',
  start: "top top",
  end: "top 1/6",
  onEnter: function () {
    gsap.to(".text-content", {
      autoAlpha: 1,
      duration: 1
    });
  }
});
