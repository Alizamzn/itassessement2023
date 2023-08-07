function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return false;
    }

    // Additional validation logic for email address format (optional).
    const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    // Form validation successful, proceed with submission (optional).
    // Replace the alert below with a server-side request to handle form submission.
    alert('Form submitted successfully!');
    return true;
}
