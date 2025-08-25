document.addEventListener("DOMContentLoaded", () => {
  // JavaScript For The Footer
  const firstFooterContent = [
    "Amazon.com",
    "Your Order",
    "Your List",
    "Gift Card",
    "Registy & Gift Lists",
    "Find a Gift",
    "Your Account",
    "Browsing History",
    "Sell Product On Amazon",
    "Your Returns",
    "Recalls & Products Safety Alert",
    "Customer Services",
  ];

  const secondFooterContent = [
    "Recalls & Products Safety Alert",
    "Customer Service",
  ];

  createFooterCard(firstFooterContent, "first-footer-content");
  createFooterCard(secondFooterContent, "second-footer-content")

  function createFooterCard(items, classname) {
    const footer = document.querySelector("footer");

    const section = document.createElement("div");
    section.classList.add(classname);

    const nav = document.createElement("nav");
    const ul = document.createElement("ul");

    items.forEach(item => {
      const li = document.createElement("li");
      const anchorTag = document.createElement("a");

      anchorTag.href = "#";
      anchorTag.textContent = item;

      li.appendChild(anchorTag);
      ul.appendChild(li);
    });
    nav.appendChild(ul);
    section.appendChild(nav);
    footer.appendChild(section);
  }

  // JavaScript For The Open and Close Menu
  const hamBugger = document.getElementById("menu-icon");
  const sideBar = document.getElementById("side-bar");
  const closeIcon = document.getElementById("close-icon");

  hamBugger.addEventListener("click", () => {
    sideBar.style.display = "block";
  });

  closeIcon.addEventListener("click", () => {
    sideBar.style.display = "none";
  });

  // JavaScript For The Dropdown Menu
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

});