// Sample data to simulate database (In real use cases, this would be backend)
const users = [];

// Registration Logic
document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    // Validate if user already exists
    const userExists = users.some(user => user.email === email);
    if (userExists) {
        alert('User already exists!');
        return;
    }

    // Create and save new user
    const newUser = { username, email, password, role };
    users.push(newUser);
    alert('Registration successful! Please login.');

    // Redirect to login page
    window.location.href = '';
});

// Login Logic
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Authenticate user
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        alert(`Welcome back, ${user.username}!`);
        localStorage.setItem('currentUser', JSON.stringify(user));

        // Redirect to dashboard based on role
        if (user.role === 'student') {
            window.location.href = 'student_dashboard.html';
        } else if (user.role === 'instructor') {
            window.location.href = 'instructor_dashboard.html';
        } else if (user.role === 'admin') {
            window.location.href = 'admin_dashboard.html';
        }
    } else {
        alert('Invalid credentials, please try again.');
    }
});
