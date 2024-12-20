// Select elements
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

// Menu toggle event listener
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  // Add a smooth transition for better appearance
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");

  // Disable clicks on links temporarily during animation
  if (isOpen) {
    navLinks.style.pointerEvents = "none";
    setTimeout(() => {
      navLinks.style.pointerEvents = "auto";
    }, 300); // Matches the CSS transition duration
  }
});

// Close menu when clicking on a navigation link
navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// ScrollReveal options
const scrollRevealOption = {
  distance: "60px",
  origin: "bottom",
  duration: 1200,
  easing: "ease-out",
  reset: true, // Repeat animations on scroll
};

// Apply ScrollReveal animations with refinements
ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
  duration: 1500,
});

ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 400,
  distance: "70px",
});

ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 800,
  distance: "70px",
});

ScrollReveal().reveal(".header__content form", {
  ...scrollRevealOption,
  delay: 1200,
  distance: "80px",
});

ScrollReveal().reveal(".header__content .bar", {
  ...scrollRevealOption,
  delay: 1600,
  distance: "80px",
});

ScrollReveal().reveal(".header__image__card", {
  duration: 1200,
  interval: 300,
  delay: 2000,
  scale: 0.8, // Add a subtle zoom-in effect
});
