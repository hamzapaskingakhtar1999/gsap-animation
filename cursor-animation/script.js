/* We need to move the cursor where the mouse points */

const main = document.getElementById("main");
const cursor = document.getElementById("cursor");

main.addEventListener("mousemove", (e) => {
  gsap.to("#cursor", {
    x: e.x,
    y: e.y,
  });
});
