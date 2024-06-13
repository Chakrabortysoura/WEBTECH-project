// JavaScript functionality for interactive elements

// Example function to be executed on dropdown item click
function navigateTo(page) {
    window.location.href = page;
}

// Example function for booking
function bookPackage() {
    alert("Booking functionality to be implemented.");
}
document.addEventListener('DOMContentLoaded', () => {
    const loginLink = document.getElementById('loginLink');
    const loggedInUser = document.getElementById('loggedInUser');
    const usernameSpan = document.getElementById('username');

    // Check if user is already logged in
    const username = localStorage.getItem('username');
    if (username) {
        loginLink.style.display = 'none';
        loggedInUser.style.display = 'inline';
        usernameSpan.textContent = username;
    }

    // Signup logic
    if (window.location.pathname.endsWith('login.html')) {
        const signupForm = document.getElementById('signupForm');
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('signupName').value;
            const address = document.getElementById('signupAddress').value;
            const phone = document.getElementById('signupPhone').value;
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }

            const userId = email; // Using email as user ID for simplicity
            alert(`Signup successful! Your UserID: ${userId}`);

            // Store user credentials and other details in localStorage (for demo purposes only)
            localStorage.setItem('userId', userId);
            localStorage.setItem('password', password);
            localStorage.setItem('name', name);
            localStorage.setItem('address', address);
            localStorage.setItem('phone', phone);
            localStorage.setItem('email', email);
            window.location.href = 'login.html';
        });

        const loginForm = document.getElementById('loginForm');
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const userId = document.getElementById('loginUserId').value;
            const password = document.getElementById('loginPassword').value;
            const storedUserId = localStorage.getItem('userId');
            const storedPassword = localStorage.getItem('password');

            if (userId === storedUserId && password === storedPassword) {
                localStorage.setItem('username', userId);
                alert('Login successful!');
                window.location.href = 'index.html';
            } else {
                alert('Invalid credentials, please try again.');
            }
        });
    }
});


