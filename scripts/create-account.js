document.addEventListener("DOMContentLoaded", () => {
  const form1 = document.querySelector("#form1");
  const personalFirstName = document.querySelector("#personalfirstname");
  const personalLastName = document.querySelector("#personallastname");
  const personalEmail = document.querySelector("#personalemail");
  const personalPassword = document.querySelector("#personalpassword");



  // Regular Expressions For Name And Email
  const isValidName = /^[A-Za-z]+$/
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  
  form1.addEventListener("submit", (e) => {
    e.preventDefault();
    showResult();
    validateOnSubmit();
    // showModalMessage();
  });

  personalFirstName.addEventListener("input", showResult);
  personalLastName.addEventListener("input", showResult);
  personalEmail.addEventListener("input", showResult);
  personalPassword.addEventListener("input", showResult);


  function showResult() {

  // Get The Value of the Inputs
    const personalFirstNameValue = personalFirstName.value.trim();
    const personalLastNameValue = personalLastName.value.trim();
    const personalEmailValue = personalEmail.value.trim();
    const personalPasswordValue = personalPassword.value.trim();
    
    if (personalFirstNameValue === '') {
      clearState(personalFirstName);
    } else if (!isValidName.test(personalFirstNameValue)) {
       setErrorFor(personalFirstName, "First name Must Not Contain Numbers or Space");
     } else {
       setSuccessFor(personalFirstName);
    }
    
    if (personalLastNameValue === '') {
      clearState(personalLastName);
    } else if (!isValidName.test(personalLastNameValue)) {
       setErrorFor(personalLastName, "Last name Must Not Contain Numbers or Space");
     } else {
       setSuccessFor(personalLastName);
    }
    
    if (personalEmailValue === '') {
      clearState(personalEmail);
    } else if (!isValidEmail.test(personalEmailValue)) {
       setErrorFor(personalEmail, "Enter a Valid Email Address");
     } else {
       setSuccessFor(personalEmail);
    }
    
    if (personalPasswordValue === '') {
      clearState(personalPassword);
    } else {
       setSuccessFor(personalPassword);
     }
  }

  function validateOnSubmit() {
    // Get The Value of the Inputs
    const personalFirstNameValue = personalFirstName.value.trim();
    const personalLastNameValue = personalLastName.value.trim();
    const personalEmailValue = personalEmail.value.trim();
    const personalPasswordValue = personalPassword.value.trim();

    if (personalFirstNameValue === '') {
      setErrorFor(personalFirstName, "This Field Cannot Be Empty!");
    } else if (!isValidName.test(personalFirstNameValue)) {
       setErrorFor(personalFirstName, "First name Must Not Contain Numbers or Space");
     } else {
       setSuccessFor(personalFirstName);
    }
    
    if (personalLastNameValue === '') {
      setErrorFor(personalLastName, "This Field Cannot Be Empty!");
    } else if (!isValidName.test(personalLastNameValue)) {
       setErrorFor(personalLastName, "Last name Must Not Contain Numbers or Space");
     } else {
       setSuccessFor(personalLastName);
    }
    
    if (personalEmailValue === '') {
      setErrorFor(personalEmail, "This Field Cannot Be Empty!");
    } else if (!isValidEmail.test(personalEmailValue)) {
       setErrorFor(personalEmail, "Enter a Valid Email Address");
     } else {
       setSuccessFor(personalEmail);
    }
    
    if (personalPasswordValue === '') {
      setErrorFor(personalPassword, "This Field Cannot Be Empty!");
    } else {
       setSuccessFor(personalPassword);
     }
  }
  
  function clearState(input) {
    formControl = input.parentElement;
    errorMessage = formControl.querySelector(".error-message");
    errorMessage.textContent = '';
    formControl.classList.remove("error");
    formControl.classList.remove("success");
  }
  
  function setErrorFor(input, message) {
     const formControl = input.parentElement;
     const errorMessage = formControl.querySelector(".error-message");
     errorMessage.textContent = message;
 
    formControl.classList.add("error");
    formControl.classList.remove("success");
  }
  
  function setSuccessFor(input) {
    const formControl = input.parentElement;
    const errorMessage = formControl.querySelector(".error-message");
    errorMessage.textContent = '';
    formControl.classList.add("success");
    formControl.classList.remove("error");
  }

  
  const personalButton = document.querySelector("#personal-button");
  const businessButton = document.querySelector("#business-button");
  const formContainers1 = document.querySelector("#form-containers1");
  const formContainers2 = document.querySelector("#form-containers2");

  personalButton.addEventListener("click", (e) => {
    e.preventDefault();
    personalButton.classList.add("active");
    businessButton.classList.remove("active");
    formContainers1.style.display = "block";
    formContainers2.style.display = "none";
  });

  businessButton.addEventListener("click", (e) => {
    e.preventDefault();
    businessButton.classList.add("active");
    personalButton.classList.remove("active");
    formContainers1.style.display = "none";
    formContainers2.style.display = "block";
  });

});