// Function to validate the form
function validateForm() {
    // Initialize variables for storing input values
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    
    // Error message holder
    let errorMessages = "";

    // Regular expression for validating email format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // Validate name: Ensure it's not empty
    if (name === "") {
      errorMessages += "Name is required.<br>";
    }

    // Validate email: Ensure it's not empty and matches the email pattern
    if (email === "") {
      errorMessages += "Email is required.<br>";
    } else if (!emailPattern.test(email)) {
      errorMessages += "Invalid email format.<br>";
    }

    // Validate password: Ensure it's at least 6 characters long
    if (password === "") {
      errorMessages += "Password is required.<br>";
    } else if (password.length < 6) {
      errorMessages += "Password must be at least 6 characters long.<br>";
    }

    // Display error messages, if any
    document.getElementById("errorMessages").innerHTML = errorMessages;

    // If there are any error messages, prevent form submission
    if (errorMessages !== "") {
      return false;
    }

    // If no errors, allow form submission
    return true;
  }