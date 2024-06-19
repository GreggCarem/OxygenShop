let nav = document.getElementById("nav");
let navIcon = document.getElementById("heads");

let topBtn = document.getElementById("floatBtn");
let menuIcon = document.getElementById("navMenu");

function changeNav() {
  if (nav.style.display === "block") {
    nav.style.display = "none";
    navIcon.src = "resources/Menu.png";
  } else {
    nav.style.display = "block";
    navIcon.src = "resources/cross.png";
  }
}

navIcon.addEventListener("click", function () {
  changeNav();
});
