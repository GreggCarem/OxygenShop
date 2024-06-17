//runns as soon as everything has loaded
document.addEventListener("DOMContentLoaded", function () {
  const scrollerInner = document.querySelector(".scroller__inner");
  // liten when we scroll
  window.addEventListener("scroll", function () {
    let h = this.document.documentElement;
    //st - scroll top
    let st = h.scrollTop || this.document.body.scrollTop;
    //sh - sroll hight max height
    let sh = h.scrollHeight || this.document.body.scrollHeight;
    // calculate percentage
    let percent = (st / (sh - h.clientHeight)) * 100;
    //round percentage
    let roundedPercent = Math.round(percent);
    console.log(percent);
    //controles width with the percent amount
    scrollerInner.style.width = percent + "%";
  });
});
