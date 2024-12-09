function toggleLanguage() {
  const elements = document.querySelectorAll(".en, .zh");
  elements.forEach(el => {
    if (el.classList.contains("en")) {
      el.style.display = el.style.display === "none" ? "inline-block" : "none";
    } else {
      el.style.display = el.style.display === "none" ? "inline-block" : "none";
    }
  });
}

// Initialize to English
document.addEventListener("DOMContentLoaded", () => {
  const zhElements = document.querySelectorAll(".zh");
  zhElements.forEach(el => (el.style.display = "none"));
});

function setLanguage(lang) {
  const elements = document.querySelectorAll(".en, .zh");
  elements.forEach(el => {
    if (el.classList.contains(lang)) {
      el.style.display = "inline-block";
    } else {
      el.style.display = "none";
    }
  });

  // Update active button
  document.getElementById("en-btn").classList.toggle("active", lang === "en");
  document.getElementById("zh-btn").classList.toggle("active", lang === "zh");
}

// Initialize to English
document.addEventListener("DOMContentLoaded", () => {
  setLanguage("en");
});

// Background Slideshow
const backgroundImages = document.querySelectorAll(".background-slideshow img");
let currentImageIndex = 0;

function changeBackgroundImage() {
  backgroundImages[currentImageIndex].classList.remove("active");
  currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
  backgroundImages[currentImageIndex].classList.add("active");
}

setInterval(changeBackgroundImage, 3000);

function toggleNav() {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.classList.toggle("active");
  navLinks.classList.toggle("nav-active");
}

document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      // Close the mobile menu if it's open
      document.querySelector(".nav-links").classList.remove("nav-active");
      document.querySelector(".hamburger").classList.remove("active");

      // Don't prevent default for actual navigation links
      if (this.getAttribute("href").startsWith("#")) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        document.querySelector(targetId).scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });
});

// Language switching functionality
function setLanguage(lang) {
  // Toggle language buttons
  document.getElementById("en-btn").classList.toggle("active", lang === "en");
  document.getElementById("zh-btn").classList.toggle("active", lang === "zh");

  // Select all elements with language classes
  const enElements = document.querySelectorAll(".en");
  const zhElements = document.querySelectorAll(".zh");

  // Toggle visibility based on selected language
  enElements.forEach(el => {
    el.style.display = lang === "en" ? "inline-block" : "none";
  });

  zhElements.forEach(el => {
    el.style.display = lang === "zh" ? "inline-block" : "none";
  });

  // Optional: Store language preference in localStorage
  localStorage.setItem("language", lang);
}

// Navigation toggle for mobile
function toggleNav() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
}

// Background slideshow functionality
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".background-slideshow img");
  let currentSlide = 0;

  function nextSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }

  // Change slide every 5 seconds
  setInterval(nextSlide, 5000);

  // Restore language preference if stored
  const savedLanguage = localStorage.getItem("language") || "en";
  setLanguage(savedLanguage);
});
