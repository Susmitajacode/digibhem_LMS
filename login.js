// Predefined correct username and password
const correctUsername = 'admin';
const correctPassword = '12345';

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent form submission

    // Get username and password input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the input matches the correct username and password
    if (username === correctUsername && password === correctPassword) {
        // Redirect to the next page if login is successful
        window.location.href = 'About.html';
    } else {
        // Show error message
        const errorMessage = document.getElementById('error-message');
        errorMessage.textContent = 'Invalid username or password!';
        errorMessage.style.display = 'block';
    }
});
