
var firstName = document.getElementById("fname");
var lastName = document.getElementById("lname");
var email = document.getElementById("email");
var phoneNo= document.getElementById("phoneNo");
var checkbox= document.getElementById("mernStack");

let register = document.getElementsByTagName("button");

register[0].addEventListener("click",(e)=>{
    e.preventDefault();

    var errorMessage = "";
    let errMsg = "";
    let errMsg1 = "";
    let errMsg2 = "";
    let ischecked = false;
    // Check if the name field is empty
    if (firstName.value === "" || firstName.value === null) {
        errorMessage += "First Name is required. ";
    }else if (lastName.value === "" || lastName.value === null) {
        errorMessage += "Last Name is required. ";
    }

    // Check if the email field is empty and is a valid email format
    if (email.value === "" || email.value === null) {
        errMsg += "Email is required. ";
    } else if (!isValidEmail(email.value)) {
        errMsg += "Invalid email format. ";
    }
    // Check if the phonefield is empty and is a valid phone format
    if (phoneNo.value === "" || phoneNo.value === null) {
        errMsg1 += "Phone is required. ";
    } else if (!validatePhoneNumber(phoneNo.value)) {
        errMsg1 += "Invalid Phone number. ";
    }
    else{
        errMsg1 += " ";
    }

    if(checkbox.checked){
        ischecked=true;
    }
    if(!ischecked){
        errMsg2 += "Please select this option";
    }else{
        errMsg2 += " ";
    }

 

    // Display error message or submit the form
    if (errorMessage !== "" || errMsg !== "" ||errMsg1 !== "" || errMsg2!== "") {
        document.getElementById("error-message").textContent = errorMessage;
        document.getElementById("errorMsg").textContent = errMsg;
        document.getElementById("errorMsg1").textContent = errMsg1;
        document.getElementById("errorMsg2").textContent = errMsg2;
        return false; // Prevent form submission
    }
   

    return true; 

})



function isValidEmail(email) {
    // Use a regular expression to validate email format
    var emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return emailRegex.test(email);
}


function validatePhoneNumber(phoneNumber) {
    // Remove all non-numeric characters
    const numericPhoneNumber = phoneNumber.replace(/\D/g, '');

    // Regular expression for a common international phone number format
    const phoneNumberPattern = /^[0-9]{6,15}$/;

    if (phoneNumberPattern.test(numericPhoneNumber)) {
        return true; // Valid phone number
    } else {
        return false; // Invalid phone number
    }
}