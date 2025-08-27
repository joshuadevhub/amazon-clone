document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#form");
  const phoneOrEmail = document.querySelector("#phoneNumberOrEmail");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    showResult();
    validateOnSubmit();
  });

  function validateOnSubmit() {
    const value = phoneOrEmail.value.trim();
    if (value === "") {
      setErrorFor(phoneOrEmail, "This field is required!");
    } else if (!isValidEmail(value)) {
      setErrorFor(phoneOrEmail, "Enter a valid email address!");
    } else {
      setSuccessFor(phoneOrEmail);
    }
  }
  phoneOrEmail.addEventListener("input", showResult);

  // Simple email validation
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function isValidPhone(phone) {
    return /^0\d{10}$/.test(phone); 
  }
  function showResult() {
    const phoneOrEmailValue = phoneOrEmail.value.trim();

    if (phoneOrEmailValue === '') {
      clearState(phoneOrEmail)
    } else if (!isValidEmail(phoneOrEmailValue) && !isValidPhone(phoneOrEmailValue)) {
      setErrorFor(phoneOrEmail, "Enter a Valid Email Address or Phone Number!")
    } else{
      setSuccessFor(phoneOrEmail);
    }
  }

  function clearState(input) {
    const formControl = input.parentElement;
    const errorMessage = formControl.querySelector(".error-message");
    errorMessage.textContent = "";

    formControl.classList.remove("error");
    formControl.classList.remove("success");
  }
  function setErrorFor(input, value) {
    const formControl = input.parentElement;
    const errorMessage = formControl.querySelector(".error-message");
    errorMessage.textContent = value;

    formControl.classList.remove("success");
    if (value) {
      formControl.classList.add("error");
    } else {
      formControl.classList.remove("error");
    }
  }

  function setSuccessFor(input) {
    const formControl = input.parentElement;
    const errorMessage = formControl.querySelector(".error-message");
    errorMessage.textContent = "";

    formControl.classList.remove("error");
    formControl.classList.add("success");
  }
})