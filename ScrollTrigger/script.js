gsap.from("#page1 #circle", {
  rotate: 720,
  delay: 1,
  duration: 1.3,
  scrollTrigger: "",
  scrollTrigger: {
    markers: true,
    trigger: "#page1 #circle",
    scroller: "body",
    scrub: true,
  },
});
gsap.from("#page2 #circle", {
  rotate: 720,
  duration: 1.3,
  scrollTrigger: {
    markers: true,
    trigger: "#page2 #circle",
    scroller: "body",
    scrub: true,
  },
});
gsap.from("#page3 #circle", {
  rotate: 720,
  duration: 1.3,
  scrollTrigger: {
    markers: true,
    trigger: "#page3 #circle",
    scroller: "body",
    scrub: true,
  },
});
