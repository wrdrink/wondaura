document.addEventListener('DOMContentLoaded', (event) => {
    console.log('About Us page loaded');

    let lastScrollTop = 0;
    const header = document.querySelector('.main-header');

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            // Scroll down
            header.style.top = '-100px'; // Adjust this value based on your header height
        } else {
            // Scroll up
            header.style.top = '0';
        }
        lastScrollTop = scrollTop;

        // Check if elements are in view
        const elements = document.querySelectorAll('.about-item, .game-mode-item, .subject-item');
        elements.forEach(element => {
            if (isInView(element) && !element.classList.contains('visible')) {
                element.classList.add('visible');
            }
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