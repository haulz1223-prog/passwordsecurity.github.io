// Function to check password strength
function checkPasswordStrength() {
    const password = document.getElementById('password').value;
    const strengthBar = document.getElementById('strength-bar');
    const feedback = document.getElementById('feedback');

    let strength = 0;

    // Check length
    if (password.length >= 8) strength += 1;
    if (password.length >= 12) strength += 1;

    // Check for lowercase, uppercase, and numbers
    if (/[a-z]/.test(password)) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/\d/.test(password)) strength += 1;

    // Check for special characters
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength += 1;

    // Strength feedback and bar color
    let strengthColor = '#e74c3c'; // Red (Weak)
    let feedbackText = 'Weak Password';

    if (strength === 5) {
        strengthColor = '#2ecc71'; // Green (Strong)
        feedbackText = 'Strong Password';
    } else if (strength === 4) {
        strengthColor = '#f39c12'; // Yellow (Medium)
        feedbackText = 'Medium Password';
    } else if (strength > 0) {
        strengthColor = '#f39c12'; // Yellow (Medium)
        feedbackText = 'Medium Password';
    }

    strengthBar.innerHTML = `<span style="width: ${strength * 20}%"></span>`;
    strengthBar.querySelector('span').style.backgroundColor = strengthColor;
    feedback.textContent = feedbackText;
}

// Function to check if password is common using a list of common passwords
async function checkCommonPassword() {
    const password = document.getElementById('password').value;
    const result = document.getElementById('common-password-result');

    // List of common passwords (can expand this or use an external API)
    const commonPasswords = [
        '123456', 'password', '123456789', '12345', 'qwerty', '1234', 'password1', '123123', 'admin', 'letmein'
    ];

    if (commonPasswords.includes(password)) {
        result.textContent = 'This is a common password. Please choose a different one.';
        result.style.color = 'red';
    } else {
        result.textContent = 'This is not a common password.';
        result.style.color = 'green';
    }
}

