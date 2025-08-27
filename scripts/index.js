document.addEventListener("DOMContentLoaded", () => {
  // JavaScript For The First Card Container

  const sections = [
    {
      sectionTitle: "Level Up Your PC Here",
      products: [
        { img: "images/commercialPc.webp", desc: "Comm Pc" },
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
  ];

  createCards(sections);

  function createCards(data) {
    const container = document.getElementById("main-container"); // parent container for all card sets

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
      container.appendChild(cardContainer);
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
          productImage: "images/headphone-original.webp",
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
    const secondContainer = document.getElementById("second-main-containers");

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
      secondContainer.appendChild(topPickContainer);
    });
  }




  const fullContainerArr = [
    {
      sectionTitle: "Travel Essentials For Your Next Trip",
      image: "images/tracker.jpg",
    }
  ];

  createFullContainerCard(fullContainerArr);

  function createFullContainerCard(full) {
    const fullContainer = document.getElementById("full-container");
    fullContainer.innerHTML = '';

    full.forEach(val => {
      const title = document.createElement("h4");
      title.textContent = val.sectionTitle;
      fullContainer.appendChild(title);

      const img = document.createElement("img");
      img.setAttribute("src", val.image);
      img.setAttribute("alt", `${val.image} Image`);
      img.setAttribute("loading", "lazy");
      fullContainer.appendChild(img);
    });
  }



  const secondSection2 = [
    {
      sectionTitle: "Popular Products In Beauty Internationally",
      products: [
        {
          productImage: "images/laptop-smal-original.webp",
          productDesc1: "DEWALT 20V MAX Cordless Drill and Impact Driver PO...",
          productDesc2: "$179<sup>00</sup> <sub>List $259.00"
        },

        {
          productImage: "images/headphone-original.webp",
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

  createSectionCards(secondSection2);

  function createSectionCards(secondDatas) {
    const secondContainer = document.getElementById("second-main-container");

    secondDatas.forEach(section => {
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
      secondContainer.appendChild(topPickContainer);
    })
  }



  const mainSections = [
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

  createMainCards(mainSections);

  function createMainCards(data) {
    const container = document.getElementById("main-containers"); // parent container for all card sets

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
      container.appendChild(cardContainer);
    });
  }


  const fullContainerArrs = [
    {
      sectionTitle: "Must Have Deals For Everyone",
      image: "images/tracker.jpg",
    }
  ];

  createFullContainerCards(fullContainerArrs);

  function createFullContainerCards(fulls) {
    const fullContainers = document.getElementById("full-containers");
    fullContainers.innerHTML = '';

    fulls.forEach(val => {
      const title = document.createElement("h4");
      title.textContent = val.sectionTitle;
      fullContainers.appendChild(title);

      const img = document.createElement("img");
      img.setAttribute("src", val.image);
      img.setAttribute("alt", `${val.image} Image`);
      img.setAttribute("loading", "lazy");
      fullContainers.appendChild(img);
    });
  }
});