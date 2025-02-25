document.addEventListener('DOMContentLoaded', function() {
    console.log("The HTML content is fully loaded and parsed.");
    console.log("Starting slideshow...");

    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const header = document.querySelector('.main-header');
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const friendsSection = document.getElementById('friends');

    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            header.style.top = '-80px';
        } else {
            header.style.top = '0';
        }
        lastScrollTop = scrollTop;

        scrollToTopBtn.style.display = scrollTop > 300 ? 'flex' : 'none';
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    searchButton.addEventListener('click', () => {
        const query = searchInput.value.trim().toLowerCase();
        if (!query) {
            alert('Please enter a search term!');
            return;
        }
        document.querySelectorAll('.highlight').forEach(el => el.classList.remove('highlight'));
        const elements = document.querySelectorAll('body *:not(script):not(style)');
        let found = false;
        elements.forEach(el => {
            if (el.textContent.toLowerCase().includes(query) && el.offsetParent !== null) {
                el.classList.add('highlight');
                el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                setTimeout(() => el.classList.remove('highlight'), 1200);
                found = true;
            }
        });
        if (!found) {
            alert('No matching content found!');
        }
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchButton.click();
        }
    });
});

let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    console.log("Slides found:", slides.length); // Debug
    if (slides.length === 0) {
        console.error("No slides detected!");
        return;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 6000);
}

function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
}

// Rest of your JS (selectGrade, selectSubject, etc.) remains unchanged
