document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#form");
  const phoneOrEmail = document.querySelector("#phoneNumberOrEmail");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    showResult();
  });
})