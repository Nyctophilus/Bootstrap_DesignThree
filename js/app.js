const taps = document.querySelectorAll(
    ".featured-work .list-unstyled.row li"
  ),
  imgs = document.querySelectorAll(
    ".featured-work .gallery .row .col-md"
  );

taps.forEach((tap) => {
  tap.onclick = () => {
    taps.forEach((t) => {
      t.classList.remove("active");
    });
    tap.classList.add("active");

    imgs.forEach((img) => {
      if (!img.classList.contains(tap.dataset.class))
        img.style.display = `none`;
      else img.style.display = "inherit";
    });
  };
});

// Statistics numbers
const statsNums = document.querySelectorAll(".stats span"),
  statsDiv = document.querySelector(".stats");
let started = false;

window.onscroll = () => {
  if (window.scrollY >= statsDiv.offsetTop - 500) {
    statsNums.forEach((n) => {
      if (!started) {
        let goal = n.dataset.num;
        const counter = setInterval(() => {
          n.textContent++;

          if (n.textContent === goal)
            clearInterval(counter);
        }, 1 / goal);
      }
    });

    started = true;
  }
};
