// Higher-order function that takes a function as an argument
function greetUser(name, callback) {
    return callback(name);
}

// Callback function to be passed to greetUser
function sayHello(name) {
    return `Hello, ${name}!`;
}

// Using the higher-order function
console.log(greetUser('Alice', sayHello)); // Output: Hello, Alice!


// Creating a Promise that resolves after 2 seconds
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise resolved successfully!');
    }, 2000);
});

// Handling the Promise result
promise.then((result) => {
    console.log(result); // Output after 2 seconds: Promise resolved successfully!
}).catch((error) => {
    console.error(error); // Error handling
});


// Function using async/await to handle a Promise
async function fetchData() {
    try {
        const response = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Data fetched successfully!');
            }, 2000);
        });
        console.log(response); // Output after 2 seconds: Data fetched successfully!
    } catch (error) {
        console.error('Error:', error);
    }
}

// Calling the async function
fetchData();



// Validation for individual form elements

// Function to validate the username field
document.getElementById('uform').addEventListener('submit', function(event) {
    const usernameInput = document.getElementById('username').value;
 
    // Regular expression to validate the username: at least 3 characters, only letters and digits
    const usernamePattern = /^[A-Za-z0-9]{3,}$/;

    // Check if the username matches the pattern
    if (!usernamePattern.test(usernameInput)) {
        // Display feedback if the username is invalid
        if (usernameInput.length < 3) {
            alert('Username must be at least 3 characters long.');
        } else {
            alert('Username can only contain letters and digits.');
        }
         event.preventDefault(); // Prevent form submission if the username is invalid
    } else {
        // Display success feedback if the username is valid
       alert('Username is valid!')
     }
});


document.getElementById('eForm').addEventListener('submit', function(event) {
    const emailInput = document.getElementById('emailInput').value;
    const emailFeedback = document.getElementById('vm');

    // Regular expression to validate the email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Check if the email matches the pattern
    if (!emailPattern.test(emailInput)) {
        // Display feedback if the email is invalid
        emailFeedback.textContent = 'Please enter a valid email address.';
        emailFeedback.style.color = 'red';
        event.preventDefault(); // Prevent form submission if the email is invalid
    } else {
        // Display success feedback if the email is valid
        emailFeedback.textContent = 'Email is valid!';
        emailFeedback.style.color = 'green';
    }
});

document.getElementById('Password').addEventListener('click', function (event) {
    const passwordInput = document.getElementById('passwordInput').value;
    const passwordFeedback = document.getElementById('pm');
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!passwordPattern.test(passwordInput)) {
        passwordFeedback.textContent = 'Password must be at least 8 characters long and include 1 uppercase letter and 1 number.';
        passwordFeedback.style.color = 'red';
        event.preventDefault(); // Prevent form submission
    } else {
        passwordFeedback.textContent = 'Password is valid!';
        passwordFeedback.style.color = 'green';
    }
});

 // Attach event listener to the form
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('validationForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission for validation

        let isValid = true; // Flag to track if all fields are valid
        const formFeedback = document.getElementById('formFeedback');
        formFeedback.textContent = ''; // Clear previous feedback

        // Validate Age (must be between 1 and 120)
        const ageInput = parseInt(document.getElementById('ageInput').value, 10);
        if (isNaN(ageInput) || ageInput < 1 || ageInput > 120) {
            formFeedback.textContent += 'Age must be between 1 and 120. ';
            isValid = false;
        }

        // Validate Checkbox (must be checked)
        const agreeCheckbox = document.getElementById('agreeCheckbox').checked;
        if (!agreeCheckbox) {
            formFeedback.textContent += 'You must agree to the terms. ';
            isValid = false;
        }

        // Validate Gender (must be selected)
        const genderInputs = document.getElementsByName('gender');
        let genderSelected = false;
        for (let i = 0; i < genderInputs.length; i++) {
            if (genderInputs[i].checked) {
                genderSelected = true;
                break;
            }
        }
        if (!genderSelected) {
            formFeedback.textContent += 'You must select your gender. ';
            isValid = false;
        }

        // Validate Country (must be selected)
        const countrySelect = document.getElementById('countrySelect').value;
        if (!countrySelect) {
            formFeedback.textContent += 'You must select a country. ';
            isValid = false;
        }

        // Provide feedback and submit if valid
        if (isValid) {
            formFeedback.textContent = 'Form submitted successfully!';
            formFeedback.style.color = 'green';
            // Optionally, you can submit the form programmatically:
            // this.submit();
        } else {
            formFeedback.style.color = 'red';
        }
    });
});
