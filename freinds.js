document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Friends page loaded');

    let lastScrollTop = 0;
    const header = document.querySelector('.main-header');
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            // Scroll down
            header.classList.add('hidden');
        } else {
            // Scroll up
            header.classList.remove('hidden');
        }
        lastScrollTop = scrollTop;

        // Check if elements are in view
        const elements = document.querySelectorAll('.friend-card, .challenge-card, .progress-card');
        elements.forEach(element => {
            if (isInView(element) && !element.classList.contains('visible')) {
                element.classList.add('visible');
            }
        });

        // Show or hide the scroll to top button
        if (scrollTop > 300) {
            scrollToTopBtn.style.display = 'flex';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    function isInView(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
});