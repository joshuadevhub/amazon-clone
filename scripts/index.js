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
    dropdownContainer.innerText = `See All`;
  }
});

const hamBugger = document.getElementById("menu-icon");
const sideBar = document.getElementById("side-bar");
const closeIcon = document.getElementById("close-icon");

hamBugger.addEventListener("click", () => {
  sideBar.style.display = "block";
});

closeIcon.addEventListener("click", () => {
  sideBar.style.display = "none";
})