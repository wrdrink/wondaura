function login() {
    // Implement login functionality here
    // For demonstration, we'll assume the login is always successful
    alert('Login successful');
    window.location.href = 'index.html'; // Navigate to index.html after login
}

function showRoleSelection() {
    document.getElementById('login-box').style.display = 'none';
    document.getElementById('card-selection').style.display = 'flex';
}

function selectRole(role) {
    document.getElementById('card-selection').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
    const signupContent = document.getElementById('signup-content');
    signupContent.innerHTML = ''; // Clear previous form content

    if (role === 'id') {
        signupContent.innerHTML = `
            <label for="new-username">Username:</label>
            <input type="text" id="new-username" name="new-username" required>
            <label for="new-password">Password:</label>
            <input type="password" id="new-password" name="new-password" required>
            <button type="submit">Sign Up</button>
        `;
    } else if (role === 'parent') {
        signupContent.innerHTML = `
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            <label for="number">Phone Number:</label>
            <input type="tel" id="number" name="number" required>
            <label for="country">Country:</label>
            <input type="text" id="country" name="country" required>
            <label for="visa">Visa Number:</label>
            <input type="text" id="visa" name="visa" required>
            <label for="svc">SVC Code:</label>
            <input type="text" id="svc" name="svc" required>
            <button type="submit">Sign Up</button>
        `;
    }
}

function returnToLogin() {
    document.getElementById('card-selection').style.display = 'none';
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-box').style.display = 'block';
}

function returnToRoleSelection() {
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('card-selection').style.display = 'flex';
}