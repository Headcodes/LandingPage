
var firstName = document.getElementById("fname");
var lastName = document.getElementById("lname");
var email = document.getElementById("email");
var phoneNo= document.getElementById("phoneNo");
var Frontend= document.getElementById("Frontend");
var Backend= document.getElementById("Backend");





    
 $("#submit-form").submit((e) => {
    e.preventDefault();
           
    var errorMessage = "";
    let errMsg = "";
    let errMsg1 = "";
    let errMsg2 = "";
    let ischecked = false;
    // Check if the name field is empty
    if (firstName.value === "" || firstName.value === null) {
        errorMessage += "First Name is required. ";
    }
    else if(!validateName(firstName.value)){
        errorMessage += "Not a Valid FirstName. ";
        console.log(validateName(firstName.value));
    }
     if (lastName.value === "" || lastName.value === null) {
        errorMessage += "Last Name is required. ";
    }
   
    else if(!validateName(lastName.value)){
        errorMessage += "Not a Valid LastName. ";
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
        errMsg1 += "";
    }

    if(Frontend.checked || Backend.checked){
        ischecked=true;
    }
    if(!ischecked){
        errMsg2 += "Select atleast one course.";
    }

 

    // Display error message or submit the form
    if (errorMessage !== "" || errMsg !== "" ||errMsg1 !== "" || errMsg2!== "") {
        document.getElementById("error-message").textContent = errorMessage;
        document.getElementById("errorMsg").textContent = errMsg;
        document.getElementById("errorMsg1").textContent = errMsg1;
        document.getElementById("errorMsg2").textContent = errMsg2;
        return false; // Prevent form submission
    } 
    else{
       
    console.log("submitted");
              $.ajax({
                  url: "https://script.google.com/macros/s/AKfycbzv51-I32-8bWnwsvUiQ_r4iiZ_YKuJQN-Ij7pXNuM5lqT4NEoSfg-LrxnnNjd9LaDbyA/exec",
                  data: $("#submit-form").serialize(),
                  method: "post",
                  success: function (response) {
                      // Hide the form
                    
                      setTimeout(function () {
                        window.location.href = "thankyou.html";// Change the URL to your desired page
                      }, 2000); // 2000 milliseconds (2 seconds)
                  },
                  error: function (err) {
                      alert("Something went wrong.");
                  }
              });
         
             
            }
           
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
function validateName(name) {
    const regex = /^[a-zA-Z\s'-]+$/;
    return regex.test(name);
  }
  
  