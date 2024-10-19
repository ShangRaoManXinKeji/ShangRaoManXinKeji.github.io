function toggleLanguage() {
    const elements = document.querySelectorAll('.en, .zh');
    elements.forEach(el => {
        if (el.classList.contains('en')) {
            el.style.display = el.style.display === 'none' ? 'inline-block' : 'none';
        } else {
            el.style.display = el.style.display === 'none' ? 'inline-block' : 'none';
        }
    });
}

// Initialize to English
document.addEventListener('DOMContentLoaded', () => {
    const zhElements = document.querySelectorAll('.zh');
    zhElements.forEach(el => el.style.display = 'none');
});

function setLanguage(lang) {
    const elements = document.querySelectorAll('.en, .zh');
    elements.forEach(el => {
        if (el.classList.contains(lang)) {
            el.style.display = 'inline-block';
        } else {
            el.style.display = 'none';
        }
    });

    // Update active button
    document.getElementById('en-btn').classList.toggle('active', lang === 'en');
    document.getElementById('zh-btn').classList.toggle('active', lang === 'zh');
}

// Initialize to English
document.addEventListener('DOMContentLoaded', () => {
  setLanguage('en');
});


// Background Slideshow
const backgroundImages = document.querySelectorAll('.background-slideshow img');
let currentImageIndex = 0;

function changeBackgroundImage() {
    backgroundImages[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
    backgroundImages[currentImageIndex].classList.add('active');
}

setInterval(changeBackgroundImage, 3000);

function toggleNav() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.classList.toggle('active');
  navLinks.classList.toggle('nav-active');
}
