document.addEventListener("DOMContentLoaded", function () {
  const scrollerInner = document.querySelector(".scroller__inner");

  window.addEventListener("scroll", function () {
    let h = this.document.documentElement;

    let st = h.scrollTop || this.document.body.scrollTop;

    let sh = h.scrollHeight || this.document.body.scrollHeight;

    let percent = (st / (sh - h.clientHeight)) * 100;

    scrollerInner.style.width = percent + "%";
  });
});
