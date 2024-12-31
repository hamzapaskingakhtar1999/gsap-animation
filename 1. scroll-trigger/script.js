gsap.to("#page2 h1", {
  duration: 1,
  delay: 0,
  transform: "translateX(-170%)",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    markers: true,
    start: "top 0%",
    end: "top -100%",
    scrub: 2,
    pin: true,
  },
});
