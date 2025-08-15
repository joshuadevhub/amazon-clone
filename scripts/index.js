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

const sections = [
  {
    sectionTitle: "Level Up Your PC Here",
    products: [
      { img: "images/headphone-original.webp", desc: "Clothing" },
      { img: "images/laptop-smal-original.webp", desc: "Tracker" },
      { img: "images/headphone-original.webp", desc: "Equiptment" },
      { img: "images/laptop-smal-original.webp", desc: "Deals" },
    ],
    linkText: "Shop More",
  },
  {
    sectionTitle: "Unveil Your Radiance",
    products: [
      { img: "images/headphone-original.webp", desc: "Desktop" },
      { img: "images/laptop-smal-original.webp", desc: "Laptop" },
      { img: "images/headphone-original.webp", desc: "Hard Drives" },
      { img: "images/laptop-smal-original.webp", desc: "PC Accessories" },
    ],
    linkText: "See More",
  },
  {
    sectionTitle: "Gear Up To Get Fit",
    products: [
      { img: "images/headphone-original.webp", desc: "Desktop" },
      { img: "images/laptop-smal-original.webp", desc: "Laptop" },
      { img: "images/headphone-original.webp", desc: "Hard Drives" },
      { img: "images/laptop-smal-original.webp", desc: "PC Accessories" },
    ],
    linkText: "Shop More",
  }
];

createCards(sections);

function createCards(data) {
  const container = document.getElementsByClassName("main-container"); // parent container for all card sets

  data.forEach(section => {
    // Create one .card-container per section
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container");

    // Title
    const title = document.createElement("h4");
    title.textContent = section.sectionTitle;
    cardContainer.appendChild(title);

    // Products wrapper
    const cardContents = document.createElement("div");
    cardContents.classList.add("card-contents");

    section.products.forEach(product => {
      const cardContent = document.createElement("div");
      cardContent.classList.add("card-content");

      const image = document.createElement("img");
      image.src = product.img;
      image.alt = `${product.desc} Image`;

      const desc = document.createElement("p");
      desc.textContent = product.desc;

      cardContent.appendChild(image);
      cardContent.appendChild(desc);
      cardContents.appendChild(cardContent);
    });

    cardContainer.appendChild(cardContents);

    // Link
    const linkP = document.createElement("p");
    const link = document.createElement("a");
    link.href = "#";
    link.textContent = section.linkText;
    linkP.appendChild(link);

    cardContainer.appendChild(linkP);

    // Append this whole section to the main container
    for (let i = 0; i < container.length; i++) {
      container[i].appendChild(cardContainer.cloneNode(true));
    }
  });
}



const secondSection = [
  {
    sectionTitle: "Top Picks For Nigeria",
    products: [
      {
        productImage: "images/laptop-smal-original.webp",
        productDesc1: "DEWALT 20V MAX Cordless Drill and Impact Driver PO...",
        productDesc2: "$179<sup>00</sup> <sub>List $259.00"
      },

      {
        productImage: "images/laptop-smal-original.webp",
        productDesc1: "DEWALT 20V MAX Cordless Drill and Impact Driver PO...",
        productDesc2: "$179<sup>00</sup> <sub>List $259.00"
      },
      {
        productImage: "images/laptop-smal-original.webp",
        productDesc1: "DEWALT 20V MAX Cordless Drill and Impact Driver PO...",
        productDesc2: "$179<sup>00</sup> <sub>List $259.00"
      }
    ],
  },
]

createSectionCard(secondSection);

function createSectionCard(secondData) {
  const secondContainer = document.getElementsByClassName("second-main-container");

  secondData.forEach(section => {
    const topPickContainer = document.createElement("div");
    topPickContainer.classList.add("top-pick-container");

    const title = document.createElement("h4");
    title.textContent = section.sectionTitle;
    topPickContainer.appendChild(title);

    const topPicksContainer = document.createElement("div");
    topPicksContainer.classList.add("top-picks");

    section.products.forEach(card => {
      const topPickContent = document.createElement("div");
      topPickContent.classList.add("top-pick-content");

      const topPickContentImage = document.createElement("img");
      topPickContentImage.src = card.productImage;
      topPickContentImage.alt = `${card.productDesc1} Image`;
      topPickContentImage.loading = "lazy";

      topPickContent.appendChild(topPickContentImage);

      const strayDiv = document.createElement("div");
      const productDesc = document.createElement("p");
      productDesc.innerHTML = card.productDesc1;

      const productDescs = document.createElement("p");
      productDescs.innerHTML = card.productDesc2;

      strayDiv.appendChild(productDesc);
      strayDiv.appendChild(productDescs);

      topPickContent.appendChild(strayDiv);
      topPicksContainer.appendChild(topPickContent)
    });
    topPickContainer.appendChild(topPicksContainer);

    for (let i = 0; i < secondContainer.length; i++) {
      secondContainer[i].appendChild(topPickContainer.cloneNode(true));
    }
    // secondContainer.appendChild(topPickContainer);
  });
}