// portfolio.js

// You can add JavaScript code here if needed

// Example: Submitting the contact form
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(this);

        // Example: Sending form data to a backend server using fetch API
        fetch('https://example.com/submit', {
                method: 'POST',
                body: formData
            })
            .then(response => {
                if (response.ok) {
                    alert('Message sent successfully!');
                    form.reset();
                } else {
                    alert('Failed to send message. Please try again later.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred. Please try again later.');
            });
    });
});