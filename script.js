document.addEventListener('DOMContentLoaded', function() {
    console.log("The HTML content is fully loaded and parsed.");

    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const header = document.querySelector('.main-header');
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

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
            // Scroll down
            header.style.top = '-100px'; // Adjust this value based on your header height
        } else {
            // Scroll up
            header.style.top = '0';
        }
        lastScrollTop = scrollTop;

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

    searchButton.addEventListener('click', () => {
        const query = searchInput.value.toLowerCase();
        if (!query) {
            alert('Please enter a search term!');
            return;
        }
        const elements = document.querySelectorAll('body *');
        let found = false;
        elements.forEach(el => {
            if (el.innerText.toLowerCase().includes(query) && el.offsetParent !== null) {
                el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                el.classList.add('highlight');
                setTimeout(() => {
                    el.classList.remove('highlight');
                }, 1200);
                found = true;
                return;
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
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 6000); // Change image every 6 seconds
}

function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
}

function selectGrade(grade) {
    document.querySelector('.grade-cards').classList.add('hidden');
    document.getElementById('subjectSelection').classList.remove('hidden');
    console.log(`Selected Grade: ${grade}`);
}

function selectSubject(subject) {
    document.getElementById('subjectSelection').classList.add('hidden');
    document.getElementById('chapterSelection').classList.remove('hidden');
    console.log(`Selected Subject: ${subject}`);
}

function selectChapter(chapter) {
    document.getElementById('chapterSelection').classList.add('hidden');
    document.getElementById('gameSelection').classList.remove('hidden');
    console.log(`Selected Chapter: ${chapter}`);
}

// Friends section functionality
const friendsSection = document.getElementById('friendsSection');
const friendsList = document.getElementById('friendsList');
const messagesList = document.getElementById('messagesList');
const competitionProgress = document.getElementById('competitionProgress');

function showFriendsSection() {
    friendsSection.classList.remove('hidden');
}

function addFriend(name, grade, imageUrl) {
    const friendCard = document.createElement('div');
    friendCard.classList.add('friend-card');

    const friendImage = document.createElement('img');
    friendImage.src = imageUrl;
    friendImage.alt = `${name}'s picture`;
    friendImage.classList.add('friend-image');

    const friendName = document.createElement('h3');
    friendName.textContent = name;

    const friendGrade = document.createElement('p');
    friendGrade.textContent = `Grade: ${grade}`;

    friendCard.appendChild(friendImage);
    friendCard.appendChild(friendName);
    friendCard.appendChild(friendGrade);

    friendsList.appendChild(friendCard);
}

function addMessage(message) {
    const messageItem = document.createElement('li');
    messageItem.textContent = message;
    messagesList.appendChild(messageItem);
}

function updateCompetitionProgress(progress) {
    competitionProgress.textContent = `Competition Progress: ${progress}%`;
}

// Example usage
document.getElementById('addFriendButton').addEventListener('click', () => {
    const friendName = prompt('Enter friend\'s name:');
    const friendGrade = prompt('Enter friend\'s grade:');
    const friendImageUrl = prompt('Enter friend\'s image URL:');
    if (friendName && friendGrade && friendImageUrl) {
        addFriend(friendName, friendGrade, friendImageUrl);
    }
});

document.getElementById('sendMessageButton').addEventListener('click', () => {
    const message = prompt('Enter your message:');
    if (message) {
        addMessage(message);
    }
});

document.getElementById('updateProgressButton').addEventListener('click', () => {
    const progress = prompt('Enter competition progress (0-100):');
    if (progress !== null) {
        updateCompetitionProgress(progress);
    }
});

// Toggle sidebar functionality
document.querySelector('.menu-toggle').addEventListener('click', () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
    sidebar.style.background = '#73C7C7'; // Ensure the background color remains the same when toggled
});