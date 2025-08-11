const dropdownMenu = document.getElementById("dropdown-menu");
const dropdownContent = document.getElementById("dropdown-content");
const dropdownClose = document.getElementById("dropdown-close");

dropdownMenu.addEventListener("click", () => {
  dropdownContent.classList.toggle("show");
});

dropdownClose.addEventListener("click", () => {
  dropdownContent.classList.add("dropdown-content");
})