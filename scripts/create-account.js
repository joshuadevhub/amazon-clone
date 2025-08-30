document.addEventListener("DOMContentLoaded", () => {
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