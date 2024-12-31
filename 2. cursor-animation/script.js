/* We need to move the cursor where the mouse points */

const main = document.getElementById("main");
const cursor = document.getElementById("cursor");

main.addEventListener("mousemove", (e) => {
  gsap.to("#cursor", {
    x: e.x,
    y: e.y,
    ease: "back.out",
  });
});

/* Now trying the cursor changes to View More once it enters an image div */

const image = document.getElementById("image");

image.addEventListener("mouseenter", (e) => {
  cursor.innerHTML = "View More";
  gsap.to("#cursor", {
    scale: 2,
    backgroundColor: "lightgray",
    color: "black",
  });
});

image.addEventListener("mouseleave", (e) => {
  cursor.innerHTML = "";
  gsap.to("#cursor", {
    scale: 1,
    backgroundColor: "tomato",
    color: "black",
  });
});
