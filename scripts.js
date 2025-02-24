// Slideshow functionality
var indexValue = 1;
var autoSlideInterval;
var isPlaying = true;

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
        slider[i].style.background = "rgba(255,255,255,0.1)";
    }
    img[indexValue - 1].style.display = "block";
    slider[indexValue - 1].style.background = "rgba(255,255,255,0.8)";
}

// Automatic slideshow
function autoSlide() {
    autoSlideInterval = setInterval(function() {
        indexValue++;
        showImg(indexValue);
    }, 6000); // Change image every 6 seconds
}

// Start the automatic slideshow
autoSlide();



// Header visibility on scroll
let lastScrollTop = 0;
const header = document.querySelector('.main-header');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Scroll down
        header.style.top = '-100px'; // Adjust this value based on your header height
    } else {
        // Scroll up
        header.style.top = '0';
    }
    lastScrollTop = scrollTop;
});

// Scroll to Top button functionality
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Popup functionality
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