const dropdownMenu = document.getElementById("dropdown-menu");
const dropdownContent = document.getElementById("dropdown-content");
const dropdownClose = document.getElementById("dropdown-close");
const dropdownButton = document.getElementById("dropdown-btn");
const dropdownContainer = document.querySelector("#dropdown-text");

dropdownMenu.addEventListener("click", () => {
  dropdownContent.classList.toggle("show");

  if (dropdownContent.classList.contains("show")) {
    dropdownButton.style.transform = "rotate(180deg)";
    dropdownContainer.innerText = `See Less`;
  } else {
    dropdownButton.style.transform = "rotate(0deg)";
    dropdownContainer.innerText = `See More`;
  }
});