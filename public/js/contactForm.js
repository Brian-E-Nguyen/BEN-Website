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
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/contact-page');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function() {
        console.log(xhr.responseText);
        if(xhr.responseText == 'success') {
            alert('Email sent');
            firstName = '';
            lastName = '';
            email = '';
            message = '';
        }
        else {
            alert('Something went wrong')
        }
    }
    xhr.send(JSON.stringify(formData));
});
            