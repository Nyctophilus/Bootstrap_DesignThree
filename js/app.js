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
