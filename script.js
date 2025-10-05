document.addEventListener('DOMContentLoaded', function() {

    const form = document.getElementById('registration-form');
    const feedBack = document.getElementById('form-feedback');
    form.addEventListener('submit', event => {
        event.preventDefault();

        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        let isValid = true;
        const messages = [];

        if (username.length < 3) {
            isValid = false
            messages.push("Username must be at least 3 characters")
        }
        if (!email.includes("@") || !email.includes('.') ) {
            isValid = false;
            messages.push("Email must contain @ and .")
        }
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters')
        }
        // feedBack.style.display = "block"

        if (isValid) {
            feedBack.textContent = "Registration successful!";
            feedBack.style.color = "#28a745";

        }else {
            feedBack.innerHTML = messages.join("<br>");
            feedBack.style.color = "#dc3545";

        }
    });
});
