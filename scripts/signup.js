document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#form");
  const phoneOrEmail = document.querySelector("#phoneNumberOrEmail");
  const password = document.querySelector("#password");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    showResult();
    validateOnSubmit();
  });

  function validateOnSubmit() {
    const value = phoneOrEmail.value.trim();
    const passwordValue = password.value.trim();
    if (value === "") {
      setErrorFor(phoneOrEmail, "This field is required!");
    } else if (!isValidEmail(value) && !isValidPhone(value)) {
      setErrorFor(phoneOrEmail, "Enter a valid email address or Phone Number!");
    } else {
      setSuccessFor(phoneOrEmail);
    }

    if (passwordValue === "") {
      setErrorFor(password, "This field is required!");
    } else {
      setSuccessFor(password);
    }
  }
  phoneOrEmail.addEventListener("input", showResult);

  // Simple email validation
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // Simple phone validation
  function isValidPhone(phone) {
    return /^0\d{10}$/.test(phone);
  }

  function showResult() {
    const phoneOrEmailValue = phoneOrEmail.value.trim();
    const passwordValue = password.value.trim();

    if (phoneOrEmailValue === '') {
      clearState(phoneOrEmail)
    } else if (!isValidEmail(phoneOrEmailValue) && !isValidPhone(phoneOrEmailValue)) {
      setErrorFor(phoneOrEmail, "Enter a Valid Email Address or Phone Number!")
    } else {
      setSuccessFor(phoneOrEmail);
    }

    if (passwordValue === "") {
      clearState(password);
    } else if (passwordValue.length > 8) {
      setErrorFor(password, "Password Must Not Be Greater Than 8 Characters!");
    } else if (passwordValue.length < 5) {
      setErrorFor(password, "Password Must Not Be lesser Than 4 Characters!");
    } else {
      setSuccessFor(password);
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

      const iconError = document.querySelector(".icon-error");
      iconError.style.display = "block";

      const successError = document.querySelector(".icon-success");
      successError.style.display = "none";
    } else {
      formControl.classList.remove("error");
      // formControl.classList.remove("icon-error");
    }
  }

  function setSuccessFor(input) {
    const formControl = input.parentElement;
    const errorMessage = formControl.querySelector(".error-message");
    errorMessage.textContent = "";

    formControl.classList.remove("error");
    formControl.classList.add("success");

    const iconError = document.querySelector(".icon-error");
    iconError.style.display = "none";
    
    const successError = document.querySelector(".icon-success");
    successError.style.display = "block";
  }
});