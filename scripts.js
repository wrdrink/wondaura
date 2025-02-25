<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wondoura - Home</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="icon" href="Wondaura Logo (Smaller Text).svg" type="image/x-icon">
</head>
<body>
    <header class="main-header">
        <div class="container">
            <div class="header-content">
                <div class="logo">
                    <a href="index.html"><img src="Wondaura Logo (Smaller Text).svg" alt="Wondoura Logo"></a>
                </div>
                <div class="title">
                    <h1>Wondoura</h1>
                </div>
                <nav class="main-nav">
                    <ul class="nav-links">
                        <li><a href="#" id="contactUsLink">Contact Us</a></li>  
                        <li><a href="login.html">Signup</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>

    <div class="content">
        <div class="images">
            <img src="https://via.placeholder.com/800x600" alt="Slide 1">
            <img src="Screenshot 2025-02-25 052824.png" alt="Slide 2">
            <img src="Screenshot 2025-02-25 053106.png" alt="Slide 3">
            <img src="Screenshot 2025-02-25 052824.png" alt="Slide 4">
            <img src="Screenshot 2025-02-25 053106.png" alt="Slide 5">
        </div>
        <div class="btm-slides">
            <span onclick="btm_slide(1)"></span>
            <span onclick="btm_slide(2)"></span>
            <span onclick="btm_slide(3)"></span>
            <span onclick="btm_slide(4)"></span>
            <span onclick="btm_slide(5)"></span>
        </div>
        <div class="sliders left" onclick="side_slide(-1)">
            <span class="fas fa-angle-left"></span>
        </div>
        <div class="sliders right" onclick="side_slide(1)">
            <span class="fas fa-angle-right"></span>
        </div>
        <button id="navigateButton" class="play-button" onclick="navigateToScreen()">Discover Now</button>
    </div>  

    <section id="info" class="info-section">
        <div class="container">
            <h2>Why Wondoura?</h2>
            <div class="info-row">
                <div class="info-item">
                    <img src="uno.jpg" alt="Info 1">
                    <p>Engage your child with interactive gaming that boosts creativity.</p>
                </div>
                <div class="info-item">
                    <p>Learn through play with our innovative educational tools.</p>
                    <img src="due.jpg" alt="Info 2">
                </div>
                <div class="info-item">
                    <img src="tre.jpg" alt="Info 3">
                    <p>Explore a world where imagination meets education.</p>
                </div>
                <div class="info-item">
                    <p>Join a community of learners and creators.</p>
                    <img src="quattro.jpg" alt="Info 4">
                </div>
            </div>
        </div>
    </section>

    <section id="featured" class="featured-section">
        <div class="container">
            <h2>Explore Wondoura</h2>
            <div class="featured-row">
                <div class="featured-item">
                    <img src="oneee.jpg" alt="Feature 1">
                    <div class="overlay">
                        <div class="text"><i class="fas fa-gamepad"></i> Wondaura World</div>
                        <a href="aboutus.html" class="btn">Dive In</a>
                    </div>
                </div>
                <div class="featured-item">
                    <img src="twooo.jpg" alt="Feature 2">
                    <div class="overlay">
                        <div class="text"><i class="fas fa-bullhorn"></i> Announcement</div>
                        <a href="announcement.html" class="btn">See News</a>
                    </div>
                </div>
                <div class="featured-item">
                    <img src="threeee.jpg" alt="Feature 3">
                    <div class="overlay">
                        <div class="text"><i class="fas fa-users"></i> Wondaura Team</div>
                        <a href="#feature3" class="btn">Meet Us</a>
                    </div>
                </div>
                <div class="featured-item">
                    <img src="fourrr.jpg" alt="Feature 4">
                    <div class="overlay">
                        <div class="text"><i class="fas fa-shopping-cart"></i> Wondaura Shop</div>
                        <a href="pricing.html" class="btn">Purchase</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="sponsors" class="sponsors-section">
        <div class="container">
            <h2>Our Sponsors</h2>
            <div class="sponsor-circles">
                <div class="sponsor-circle">
                    <img src="Untitled.jpg" alt="Creativa Benha">
                </div>
                <div class="sponsor-circle">
                    <img src="sponsor2.png" alt="Sponsor 2">
                </div>
                <div class="sponsor-circle">
                    <img src="sponsor3.png" alt="Sponsor 3">
                </div>
                <div class="sponsor-circle">
                    <img src="sponsor4.png" alt="Sponsor 4">
                </div>
            </div>
        </div>
    </section>

    <footer class="main-footer">
        <div class="container">
            <div class="footer-content">
                <div class="company-info">
                    <h3>Gaming Learning Platform</h3>
                    <p>Empower your child’s creativity and imagination through interactive learning.</p>
                </div>
                <div class="quick-links">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                </div>
                <div class="legal">
                    <h4>Legal</h4>
                    <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Cookie Policy</a></li>
                    </ul>
                </div>
                <div class="social-media">
                    <h4>Follow Us</h4>
                    <div class="social-links">
                        <a href="https://www.instagram.com/wondaura2025/" target="_blank"><i class="fab fa-instagram"></i></a>
                        <a href="https://www.facebook.com/profile.php?id=61571490778667" target="_blank"><i class="fab fa-facebook"></i></a>
                        <a href="https://twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a>
                        <a href="https://www.youtube.com/" target="_blank"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
            </div>
            <div class="copyright">
                <p>© 2025 Wondaura. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <button id="scrollToTopBtn" class="scroll-to-top"><i class="fas fa-arrow-up"></i></button>
    <div class="popup-overlay" id="popupOverlay">
        <div class="popup">
            <h2>Contact Us</h2>
            <p>Email: wondauraink@gmail.com</p>
            <p>Phone: +20 10 000 000 00</p>
            <div class="social-links">
                <a href="https://www.instagram.com/wondaura2025/" target="_blank"><i class="fab fa-instagram"></i></a>
                <a href="https://www.facebook.com/profile.php?id=61571490778667" target="_blank"><i class="fab fa-facebook"></i></a>
                <a href="https://twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a>
                <a href="https://www.youtube.com/" target="_blank"><i class="fab fa-youtube"></i></a>
            </div>
            <button class="close-btn" onclick="closePopup()">Close</button>
        </div>
    </div>
    <script src="scripts.js"></script>
</body>
</html>
