const submitButton = document.getElementById("claim");
submitButton.onclick = () => {
    const firstName = document.getElementById("fname");
    const lastName = document.getElementById("lname");
    const userEmail = document.getElementById("email");
    const userPassWord = document.getElementById("password");

    const fnameError = document.getElementById("fnameError");
    const lnameError = document.getElementById("lnameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");


    if (firstName.value == "" || lastName.value == "" || userEmail.value == "" || userPassWord.value == "" ) {
        fnameError.style.borderColor = "red";
        fnameError.innerText = "First name cannot be empty";
       
        lnameError.style.borderColor = "red";
        lnameError.innerText = "Last name cannot be empty";
        
        emailError.style.borderColor = "red";
        emailError.innerText = "Email cannot be empty";
        
        passwordError.style.borderColor = "red";
        passwordError.innerText = "Password cannot be empty";
        
        return false;
    }

    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (regexEmail.test(userEmail)) {
        userEmail.style.borderColor = "red";
        emailError.innerText = "Looks like this is not an email";

        return false;
    }

    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (regexPassword.test(userPassWord)) {
        passwordError.innerText = "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character";
        return false;
    }

}