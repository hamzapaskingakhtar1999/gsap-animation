function breakTheText() {
  let h1 = document.querySelector("h1");
  let h1Text = h1.textContent;

  let splittedText = h1Text.split("");

  let clutter = "";

  let halfValue = Math.floor(splittedText.length / 2);

  splittedText.forEach(function (item, idx) {
    if (item == " ") {
      clutter += `<span class="space">${item}</span>`;
    }

    if (idx < halfValue) {
      clutter += `<span class="a">${item}</span>`;
    } else {
      clutter += `<span class="b">${item}</span>`;
    }
  });

  h1.innerHTML = clutter;
}

breakTheText();

/* Animation */

gsap.from("h1 .a", {
  y: 50,
  duration: 0.5,
  delay: 0.5,
  stagger: 0.15,
  opacity: 0,
});

gsap.from("h1 .b", {
  y: 50,
  duration: 0.5,
  delay: 0.5,
  stagger: -0.15,
  opacity: 0,
});
