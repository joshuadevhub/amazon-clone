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
    } else if (passwordValue.length < 4) {
      setErrorFor(password, "Password Must Not Be lesser Than 4 Characters!");
    } else if (passwordValue.length > 8) {
      setErrorFor(password, "Password Must Not Be Greater Than 8 Characters!");
    } else {
      setSuccessFor(password);
    }
  }

  // Simple email validation
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // Simple phone validation
  function isValidPhone(phone) {
    return /^0\d{10}$/.test(phone);
  }

  phoneOrEmail.addEventListener("input", showResult);
  password.addEventListener("input", showResult);

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
    } else if (passwordValue.length < 4) {
      setErrorFor(password, "Password Must Not Be lesser Than 4 Characters!");
    } else if (passwordValue.length > 8) {
      setErrorFor(password, "Password Must Not Be Greater Than 8 Characters!");
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

      const iconError = formControl.querySelector(".icon-error");
      iconError.style.display = "block";

      const successError = formControl.querySelector(".icon-success");
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

    const iconError = formControl.querySelector(".icon-error");
    iconError.style.display = "none";
    
    const successError = formControl.querySelector(".icon-success");
    successError.style.display = "block";
  }
});

const showPassword = document.querySelector(".eye");
const HidePassword = document.querySelector(".eye-off");

password.addEventListener("input", () => {
  if (password.value.length > 0) {
    showPassword.style.display = "block";
  } else {
    HidePassword.style.display = "none";
    showPassword.style.display = "none";
    password.type = "password";
  }
});

showPassword.addEventListener("click", () => {
  password.type = "text";
  HidePassword.style.display = "block";
  showPassword.style.display = "none";
});

HidePassword.addEventListener("click", () => {
  password.type = "password";
  HidePassword.style.display = "none";
  showPassword.style.display = "block";
});