// Slideshow functionality
var indexValue = 1;
var autoSlideInterval;

showImg(indexValue);

function btm_slide(e) {
    showImg(indexValue = e);
}

function side_slide(e) {
    showImg(indexValue += e);
}

function showImg(e) {
    var i;
    const img = document.querySelectorAll('.content .images img');
    const slider = document.querySelectorAll('.btm-slides span');
    if (e > img.length) { indexValue = 1 }
    if (e < 1) { indexValue = img.length }
    for (i = 0; i < img.length; i++) {
        img[i].style.display = "none";
    }
    for (i = 0; i < slider.length; i++) {
        slider[i].style.background = "transparent";
    }
    img[indexValue - 1].style.display = "block";
    slider[indexValue - 1].style.background = "#AA60C8";
}

// Automatic slideshow
function autoSlide() {
    autoSlideInterval = setInterval(function() {
        indexValue++;
        showImg(indexValue);
    }, 5000); // 5 seconds
}

autoSlide();

// Header and Scroll Behavior
let lastScrollTop = 0;
const header = document.querySelector('.main-header');
const logo = document.querySelector('.logo img');
const title = document.querySelector('.title h1');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop && scrollTop > 50) {
        header.style.padding = '0.5rem 0';
        logo.style.height = '35px';
        title.style.fontSize = '1.8rem';
    } else {
        header.style.padding = '1rem 0';
        logo.style.height = '50px';
        title.style.fontSize = '2.5rem';
    }
    if (scrollTop > lastScrollTop) {
        header.style.top = '-100px';
    } else {
        header.style.top = '0';
    }
    lastScrollTop = scrollTop;

    // Section animations
    const sections = document.querySelectorAll('.info-section, .featured-section, .sponsors-section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            section.style.animationPlayState = 'running';
        }
    });
});

// Scroll to Top
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', function() {
    scrollToTopBtn.style.display = window.pageYOffset > 300 ? 'block' : 'none';
});

scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Popup
document.addEventListener('DOMContentLoaded', () => {
    const contactUsLink = document.getElementById('contactUsLink');
    const popupOverlay = document.getElementById('popupOverlay');

    contactUsLink.addEventListener('click', (event) => {
        event.preventDefault();
        popupOverlay.style.display = 'flex';
    });

    popupOverlay.addEventListener('click', (event) => {
        if (event.target === popupOverlay) {
            popupOverlay.style.display = 'none';
        }
    });
});

function closePopup() {
    document.getElementById("popupOverlay").style.display = "none";
}

function navigateToScreen() {
    window.location.href = 'omardonky.html';
}
