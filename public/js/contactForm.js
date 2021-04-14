const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
    // Prevents page from being refreshed
    e.preventDefault();
    console.log('Submitted!!!')
})