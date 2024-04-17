// // validation
// function validateForm() {
//     // Reset previous error messages
//     document.getElementById('nameError').textContent = '';
//     document.getElementById('emailError').textContent = '';
//     document.getElementById('messageError').textContent = '';

//     // Get form values
//     // The trim() function in JavaScript is used to remove whitespace (spaces, tabs, and newlines) from both the beginning and the end of a string. It is often used to clean up user input or to remove unnecessary whitespace
//     var name = document.getElementById('name').value.trim();
//     var email = document.getElementById('email').value.trim();
//     var message = document.getElementById('message').value.trim();

//     // Validate name

//     // Validate name
// if (name === '') {
//     document.getElementById('nameError').textContent = 'Name is required';
//     return false;
// }

// // Regular expression to check if the name contains only letters
// var namePattern = /^[a-zA-Z ]+$/;

// if (!namePattern.test(name)) {
//     document.getElementById('nameError').textContent = 'Name must contain only letters';
//     return false;
// }

// // Count the number of words
// var wordCount = name.trim().split(/\s+/).length;

// if (wordCount < 2) {
//     document.getElementById('nameError').textContent = 'Name must have at least two words';
//     return false;
// }

//     // Validate email
//     var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//         document.getElementById('emailError').textContent = 'Invalid email address';
//         return false;
//     }

//     // Validate message
//     if (message === '') {
//         document.getElementById('messageError').textContent = 'Message is required';
//         return false;
//     }

//     // Form is valid, save data to local storage
//     saveDataLocally(name, email, message);

//     // Redirect to confirmation.html
//     window.location.href = 'confirmation.html';

//     return false; // Prevent the form from submitting traditionally
// }

// function saveDataLocally(name, email, message) {
//     // Create an object to represent the form data
//     var formData = {
//         name: name,
//         email: email,
//         message: message,
//     };

//     // Convert the object to a JSON string and save to local storage
//     localStorage.setItem('formData', JSON.stringify(formData));

// }
// ///////////////////////////////////// returning data from local storage to confirmation page ////////////////////////////////////////

// // Retrieve data from local storage
// var storedData = localStorage.getItem('formData');
// // Display the stored data
// if (storedData) {
//     var parsedData = JSON.parse(storedData);
//     document.getElementById('storedName').textContent = parsedData.name;
//     document.getElementById('storedEmail').textContent = parsedData.email;
//     document.getElementById('storedMessage').textContent = parsedData.message;
                                                     
// } else {
//     document.getElementById('formData').textContent="No data stored.";
// }


// validation
function validateForm() {
    // Reset previous error messages
    var nameError = document.getElementById('nameError');
    var emailError = document.getElementById('emailError');
    var messageError = document.getElementById('messageError');
    if (nameError) nameError.textContent = '';
    if (emailError) emailError.textContent = '';
    if (messageError) messageError.textContent = '';

    // Get form values
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var messageInput = document.getElementById('message');
    
    var name = nameInput.value.trim();
    var email = emailInput.value.trim();
    var message = messageInput.value.trim();

    // Validate name
    if (name === '') {
        if (nameError) nameError.textContent = 'Name is required';
        return false;
    }

    // Regular expression to check if the name contains only letters
    var namePattern = /^[a-zA-Z ]+$/;
    if (!namePattern.test(name)) {
        if (nameError) nameError.textContent = 'Name must contain only letters';
        return false;
    }

    // Count the number of words
    var wordCount = name.trim().split(/\s+/).length;
    if (wordCount < 2) {
        if (nameError) nameError.textContent = 'Name must have at least two words';
        return false;
    }

    // Validate email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        if (emailError) emailError.textContent = 'Invalid email address';
        return false;
    }

    // Validate message
    if (message === '') {
        if (messageError) messageError.textContent = 'Message is required';
        return false;
    }

    // Form is valid, save data to local storage
    saveDataLocally(name, email, message);

    // Redirect to confirmation.html
    window.location.href = 'confirmation.html';

    return false; // Prevent the form from submitting traditionally
}

function saveDataLocally(name, email, message) {
    // Create an object to represent the form data
    var formData = {
        name: name,
        email: email,
        message: message,
    };

    // Convert the object to a JSON string and save to local storage
    localStorage.setItem('formData', JSON.stringify(formData));
}

///////////////////////////////////// returning data from local storage to confirmation page ////////////////////////////////////////

document.addEventListener('DOMContentLoaded', function() {
    // Retrieve data from local storage
    var storedData = localStorage.getItem('formData');
    // Display the stored data
    if (storedData) {
        var parsedData = JSON.parse(storedData);
        var storedNameElement = document.getElementById('storedName');
        var storedEmailElement = document.getElementById('storedEmail');
        var storedMessageElement = document.getElementById('storedMessage');
        if (storedNameElement) storedNameElement.textContent = parsedData.name;
        if (storedEmailElement) storedEmailElement.textContent = parsedData.email;
        if (storedMessageElement) storedMessageElement.textContent = parsedData.message;
    } else {
        var formDataElement = document.getElementById('formData');
        if (formDataElement) formDataElement.textContent = "No data stored.";
    }
});



