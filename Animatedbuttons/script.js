const t = gsap.timeline();
t.from("h1", {
  x: -100,
  duration: 1.3,
  delay: 0.8,
  opacity: 0,
});
t.from("button",{
    y:100,
    opacity:0,
    delay:1,
    duration:1.3,
})
