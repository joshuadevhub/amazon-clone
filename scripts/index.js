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

// JavaScript For The Open and Close Menu
const hamBugger = document.getElementById("menu-icon");
const sideBar = document.getElementById("side-bar");
const closeIcon = document.getElementById("close-icon");

hamBugger.addEventListener("click", () => {
  sideBar.style.display = "block";
});

closeIcon.addEventListener("click", () => {
  sideBar.style.display = "none";
})

// JavaScript For The First Card Container

const products = [
  {
    productTitle: "Score The Best PCs and Accessories",
    productImg: "images/headphone-original.webp",
    productDesc: "Laptop",
    linkDesc: "See More",
  },

  {
    productTitle: "Score The Best PCs and Accessories",
    productImg: "images/laptop-smal-original.webp",
    productDesc: "Laptop",
    linkDesc: "See More",
  },

  {
    productTitle: "Score The Best PCs and Accessories",
    productImg: "images/headphone-original.webp",
    productDesc: "Laptop",
    linkDesc: "See More",
  },

  {
    productTitle: "Score The Best PCs and Accessories",
    productImg: "images/laptop-smal-original.webp",
    productDesc: "Laptop",
    linkDesc: "See More",
  },
]
createCard(products);
function createCard(e) {
  const cardContainer = document.querySelector(".card-container");
  cardContainer.innerHTML = '';

  const title = document.createElement("h4");

  const cardContents = document.createElement("div");
  cardContents.classList.add("card-contents");

  const link = document.createElement("p");

  e.forEach(product => {

    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");

    const image = document.createElement("img");
    const desc = document.createElement("p");

    image.setAttribute("src", product.productImg);
    image.setAttribute("loading", "lazy");
    image.setAttribute("alt", `${product.productDesc} Image`);

    title.textContent = product.productTitle;
    desc.textContent = product.productDesc;
    link.textContent = product.linkDesc;

    cardContainer.appendChild(title);

    cardContent.appendChild(image);
    cardContent.appendChild(desc);

    cardContents.appendChild(cardContent);
    cardContainer.appendChild(cardContents);
    cardContainer.appendChild(link);
  });
}
