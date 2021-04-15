// Bootstrap validation styles
(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('contact-form');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

function validateFormData(formData) {
  const hasNullOrWhitespace = checkNullOrWhitespace(formData);
  if(!hasNullOrWhitespace) {
    const isValidEmail = validateEmail(formData['email']);
    return (isValidEmail ? true : false);
  }
  return false;
}

// Email validations
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function checkNullOrWhitespace(formData) {
  for (const key in formData) {
    var data = formData[key];
    if(data === null || data.match(/^ *$/) !== null) {
        hasValidData = false;
        break;
    }
  }
}