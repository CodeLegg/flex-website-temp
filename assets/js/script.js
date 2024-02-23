
// MOBILE DROPDOWN MENU & TOGGLE BUTTON

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






// HEADER SCROLL
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


//  MOBILE DROP DOWN MENU
const navbarLinks = document.querySelectorAll("[data-navbar-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    mobileMenuDropdown.classList.toggle("active");
    mobileMenuBtn.classList.toggle("cross");
    
    navOverlay.classList.remove("active");
    

  });
}


document.addEventListener('DOMContentLoaded', function () {
  // Wait for the DOM to be fully loaded before attaching the event listener.

  // Get the phone link element by its class name.
  let phoneLink = document.querySelector('.phone-icon');

  // Check if the phone link element exists.
  if (phoneLink) {
      // Attach a click event listener to the phone link.
      phoneLink.addEventListener('click', function (event) {
          // Prevent the default behavior of the anchor tag (preventing the navigation).
          event.preventDefault();
          
          // Call the function with the desired phone number.
          callPhoneNumber('+01904 900159');
      });
  }
});

function callPhoneNumber(phoneNumber) {
  // Open the phone dialer with the specified phone number.
  window.location.href = 'tel:' + phoneNumber;
}



// CAROUSEL SLIDER

let nextDom = document.getElementById("next");
let prevDom = document.getElementById("prev");
let carouselDom = document.querySelector(".carousel");
let listItemDom = document.querySelector(".carousel .list");
let thumbnailDom = document.querySelector(".carousel .thumbnail");

nextDom.onclick = function () {
  showSlider('next');
  resetAutoRun();
}

prevDom.onclick = function () {
  showSlider('prev');
  stopAutoRun();
}

let timeRunning = 3000;
let timeAutoNext = 7000;

let runTimeOut;
let runAutoRun = setInterval(() => {
  nextDom.click();
}, timeAutoNext);

function resetAutoRun() {
  clearInterval(runAutoRun);
  runAutoRun = setInterval(() => {
    nextDom.click();
  }, timeAutoNext);
}

function stopAutoRun() {
  clearInterval(runAutoRun);
}

function showSlider(type) {
  let itemSlider = document.querySelectorAll(".carousel .list .item");
  let itemThumbNail = document.querySelectorAll(".carousel .thumbnail .item");

  if (type === 'next') {
    listItemDom.appendChild(itemSlider[0]);
    thumbnailDom.appendChild(itemThumbNail[0]);
    carouselDom.classList.add("next");
  } else {
    let positionLastItem = itemSlider.length - 1;
    listItemDom.prepend(itemSlider[positionLastItem]);
    thumbnailDom.prepend(itemThumbNail[positionLastItem]);
    carouselDom.classList.add("prev");
  }

  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carouselDom.classList.remove("next");
    carouselDom.classList.remove("prev");
  }, timeRunning);
}


// Add this line inside your showSlider function where the animation occurs
carouselDom.classList.add("animating");

// And remove it after the animation completes
runTimeOut = setTimeout(() => {
  carouselDom.classList.remove("next");
  carouselDom.classList.remove("prev");
  carouselDom.classList.remove("animating"); // Remove the animating class
}, timeRunning);
