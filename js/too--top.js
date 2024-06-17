const btnScrollToTop = document.querySelector("#btnScrollToTop");
btnScrollToTop.addEventListener("click", function () {
  //window.scrollTo(0, 0);
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

const showButton = document.querySelector("#btnScrollToTop");
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 100) {
    showButton.classList.add("active");
  } else {
    showButton.classList.remove("active");
  }
});
