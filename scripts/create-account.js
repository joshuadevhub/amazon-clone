document.addEventListener("DOMContentLoaded", () => {
  const form1 = document.querySelector("#form1");
  const personalFirstName = document.querySelector("#personalfirstname");
  const personalLastName = document.querySelector("#personallastname");
  const personalEmail = document.querySelector("#personalemail");
  const personalPassword = document.querySelector("#personalpassword");

  form1.addEventListener("click", (e) => {
    e.preventDefault();

    showResult();
  });

  personalFirstName.addEventListener("input", showResult);
  personalLastName.addEventListener("input", showResult);
  personalEmail.addEventListener("input", showResult);
  personalPassword.addEventListener("input", showResult);


  function showResult() {
    // Get The Values
    const personalFirstNameValue = personalFirstName.value.trim();
    const personalLastNameValue = personalLastName.value.trim();
    const personalEmailValue = personalEmail.value.trim();
    const personalPasswordValue = personalPassword.value.trim();

    if (personalFirstNameValue === '') {
      setErrorFor(personalFirstName, "This Field Cannot Be Empty!");
    } else {
      setSuccessFor(personalFirstName);
    }

    if (personalLastNameValue === '') {
      setErrorFor(personalLastName, "This Field Cannot Be Empty!");
    } else {
      setSuccessFor(personalLastName);
    }

    if (personalEmailValue === '') {
      setErrorFor(personalEmail, "This Field Cannot Be Empty!");
    } else {
      setSuccessFor(personalEmail);
    }

    if (personalPasswordValue === '') {
      setErrorFor(personalPassword, "This Field Cannot Be Empty!");
    } else {
      setSuccessFor(personalPassword);
    }
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