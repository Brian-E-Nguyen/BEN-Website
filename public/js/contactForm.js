const contactForm = document.querySelector('.contact-form');

const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('emailInput');
const message = document.getElementById('message');

contactForm.addEventListener('submit', (e) => {
    // Prevents page from being refreshed
    e.preventDefault();
    var formData = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        message: message.value
    }
    console.log(formData)
});
            