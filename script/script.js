// Function to check password strength
function checkPasswordStrength() {
    const password = document.getElementById('password').value;
    const strengthBar = document.getElementById('strength-bar');
    const feedback = document.getElementById('feedback');
    let strength = 0;

    // Check password strength
    if (password.length >= 8) strength += 1;  // Length
    if (password.length >= 12) strength += 1; // Length
    if (/[a-z]/.test(password)) strength += 1; // Lowercase letter
    if (/[A-Z]/.test(password)) strength += 1; // Uppercase letter
    if (/\d/.test(password)) strength += 1;   // Number
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength += 1; // Special char

    // Adjust strength bar
    let strengthColor = '#e74c3c'; // Red
    let feedbackText = 'Very Weak';

    if (strength === 6) {
        strengthColor = '#2ecc71'; // Green (strong)
        feedbackText = 'Strong';
    } else if (strength === 5) {
        strengthColor = '#f39c12'; // Yellow (medium)
        feedbackText = 'Medium';
    } else if (strength >= 3) {
        strengthColor = '#f39c12'; // Yellow
        feedbackText = 'Medium';
    } else if (strength > 0) {
        strengthColor = '#e74c3c'; // Red
        feedbackText = 'Weak';
    }

    // Update the strength bar and feedback
    strengthBar.innerHTML = `<span style="width: ${strength * 16.66}%"></span>`;
    strengthBar.querySelector('span').style.backgroundColor = strengthColor;
    feedback.textContent = feedbackText;
}

// Function to check if password is common
function checkCommonPassword() {
    const password = document.getElementById('password').value;
    const result = document.getElementById('common-password-result');

    // List of common passwords (can be expanded)
    const commonPasswords = [
        '123456', 'password', '123456789', '12345', 'qwerty', '1234', 'password1', '123123', 'letmein', 'welcome'
    ];

    if (commonPasswords.includes(password)) {
        result.textContent = 'This is a common password. Please choose a different one.';
        result.style.color = 'red';
    } else {
        result.textContent = 'This is not a common password.';
        result.style.color = 'green';
    }
}
