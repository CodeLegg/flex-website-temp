


const mobileMenuBtn = document.querySelector(".hamburger");
const mobileMenuDropdown = document.querySelector(".bottom-mobile-menu");
const navOverlay = document.querySelector(".overlay");

mobileMenuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  mobileMenuDropdown.classList.toggle("active");
  navOverlay.classList.toggle("active");
  mobileMenuBtn.classList.toggle("cross");

  // Toggle a class on the body to handle overflow
  document.body.classList.toggle("no-scroll", mobileMenuDropdown.classList.contains("active"));
}







const body = document.body;
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    body.classList.add("scroll-up");
  }
  if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-up");
    body.classList.add("scroll-down");
  }
  if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-down");
    body.classList.add("scroll-up");
  }
  lastScroll = currentScroll;
})



const navbarLinks = document.querySelectorAll("[data-navbar-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    mobileMenuDropdown.classList.toggle("active");
    mobileMenuBtn.classList.toggle("cross");
  });
}
