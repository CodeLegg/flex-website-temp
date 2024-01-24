


const mobileMenuBtn = document.querySelector(".hamburger");
const mobileMenuDropdown = document.querySelector(".bottom-mobile-menu");
// const navOverlay = document.querySelector(".overlay");

mobileMenuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  mobileMenuDropdown.classList.toggle("active");
//   navOverlay.classList.toggle("active");
  mobileMenuBtn.classList.toggle("cross");
}




const navbarLinks = document.querySelectorAll("[data-navbar-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    mobileMenuDropdown.classList.toggle("active");
    mobileMenuBtn.classList.toggle("cross");
  });
}
