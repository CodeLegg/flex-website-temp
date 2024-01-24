const menuBtn = document.querySelector(".hamburger");
const navLinks = document.querySelector(".bottom-mobile-menu");
// const navOverlay = document.querySelector(".overlay");

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  navLinks.classList.toggle("active");
//   navOverlay.classList.toggle("active");
  menuBtn.classList.toggle("cross");
}

const navbarLinks = document.querySelectorAll("[data-navbar-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navLinks.classList.toggle("active");
    menuBtn.classList.toggle("cross");
  });
}
