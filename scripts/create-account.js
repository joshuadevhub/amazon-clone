document.addEventListener("DOMContentLoaded", () => {
  // const form1 = document.querySelector("#form1");
  // const personalFirstName = document.querySelector("#personalfirstname");
  // const personalLastName = document.querySelector("#personallastname");
  // const personalEmail = document.querySelector("#personalemail");
  // const personalPassword = document.querySelector("#personalpassword");

  // form1.addEventListener("submit", (e) => {
  //   e.preventDefault();

  //   validateOnSubmit();
  // });

  // // personalFirstName.addEventListener("input", showResult);
  // // personalLastName.addEventListener("input", showResult);
  // // personalEmail.addEventListener("input", showResult);
  // // personalPassword.addEventListener("input", showResult);

  // const isValidName = /^[A-Za-z]+$/
  // const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  // function validateOnSubmit() {
  //   // Get The Values
  //   const personalFirstNameValue = personalFirstName.value.trim();
  //   const personalLastNameValue = personalLastName.value.trim();
  //   const personalEmailValue = personalEmail.value.trim();
  //   const personalPasswordValue = personalPassword.value.trim();

  //   if (personalFirstNameValue === '') {
  //     setErrorFor(personalFirstName, "This Field Cannot Be Empty!");
  //   } else if (!isValidName.test(personalFirstNameValue)) {
  //     setErrorFor(personalFirstName, "First name Must Not Contain Numbers or Space");
  //   } else {
  //     setSuccessFor(personalFirstName);
  //   }

  //   if (personalLastNameValue === '') {
  //     setErrorFor(personalLastName, "This Field Cannot Be Empty!");
  //   } else if (!isValidName.test(personalLastNameValue)) {
  //     setErrorFor(personalLastName, "Last name Must Not Contain Numbers or Space");
  //   } else {
  //     setSuccessFor(personalLastName);
  //   }

  //   if (personalEmailValue === '') {
  //     setErrorFor(personalEmail, "This Field Cannot Be Empty!");
  //   } else if (!isValidEmail.test(personalEmailValue)) {
  //     setErrorFor(personalEmail, "Enter a Valid Email Address");
  //   } else {
  //     setSuccessFor(personalEmail);
  //   }

  //   if (personalPasswordValue === '') {
  //     setErrorFor(personalPassword, "This Field Cannot Be Empty!");
  //   } else {
  //     setSuccessFor(personalPassword);
  //   }
  // }

  // // function clearState(input) {
  // //   formControl = input.parentElement;
  // //   errorMessage = formControl.querySelector(".error-message");
  // //   errorMessage.textContent = '';

  // //   formControl.classList.remove("error");
  // //   formControl.classList.remove("success");
  // // }

  // function setErrorFor(input, message) {
  //   const formControl = input.parentElement;
  //   const errorMessage = formControl.querySelector(".error-message");
  //   errorMessage.textContent = message;

    

  //   formControl.classList.add("error");
  //   formControl.classList.remove("success");
  // }

  // function setSuccessFor(input) {
  //   const formControl = input.parentElement;
  //   const errorMessage = formControl.querySelector(".error-message");
  //   errorMessage.textContent = '';

  //   formControl.classList.add("success");
  //   formControl.classList.remove("error");
  // }

  // Just Validate Code with SweetAlert2
  const validation = new JustValidate('#form1');

  validation
    .addField('#personalfirstname', [
      { rule: 'required', errorMessage: 'First name is required' },
    ])
    .addField('#personallastname', [
      { rule: 'required', errorMessage: 'Last name is required' },
    ])
    .addField('#personalemail', [
      { rule: 'required', errorMessage: 'Email is required' },
      { rule: 'email', errorMessage: 'Please enter a valid email address' },
    ])
    .addField('#personalpassword', [
      { rule: 'required', errorMessage: 'Password is required' },
      { rule: 'minLength', value: 6, errorMessage: 'Password must be at least 6 characters' },
    ])
    .onSuccess(() => {
      Swal.fire({
        title: '🎉 Account Created!',
        text: 'Your Amazon personal account has been created successfully.',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    });


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