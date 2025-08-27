document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#form");
  const phoneOrEmail = document.querySelector("#phoneNumberOrEmail");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    showResult();
  });

  function showResult() {
    const phoneOrEmailValue = phoneOrEmail.value.trim();

    if (phoneOrEmailValue === '') {
      setErrorFor(phoneOrEmail, "This Field Is Required!");
    } else{
      setSuccessFor(phoneOrEmail);
    }
  }

  function setErrorFor(input, value) {
    const formControl = input.parentElement;
    const errorMessage = formControl.querySelector("#error-message");
    errorMessage.textContent = value;
    formControl.className = "form-content error";
  }

  function setErrorFor(input) {
    const formControl = input.parentElement;
    // const errorMessage = formControl.querySelector("#error-message");
    // errorMessage.textContent = value;
    formControl.className = "form-content success";
  }
})