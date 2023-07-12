const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".from-above");
const border1 = document.querySelectorAll(".left-to-right");
const border2 = document.querySelectorAll(".right-to-left");
const border3 = document.querySelectorAll(".border-center");
const border4 = document.querySelectorAll(".border-back-center");

const appearOptions = {
  threshold: 0,
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});

border1.forEach((border) => {
  appearOnScroll.observe(border);
});

border2.forEach((border) => {
  appearOnScroll.observe(border);
});

border3.forEach((border) => {
  appearOnScroll.observe(border);
});

border4.forEach((border) => {
  appearOnScroll.observe(border);
});
