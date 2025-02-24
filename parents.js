document.addEventListener("DOMContentLoaded", () => {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    const logoutBtn = document.getElementById("logoutBtn");

    // Show scroll-to-top button on scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    // Scroll to top when button is clicked
    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Logout functionality
    logoutBtn.addEventListener("click", () => {
        alert("You have been logged out.");
        window.location.href = "index.html";
    });
});
