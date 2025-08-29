document.addEventListener("DOMContentLoaded", () => {
  // JavaScript For The First Card Container

  const sections = [
    {
      sectionTitle: "Level Up Your PC Here",
      products: [
        { img: "images/commercialPc.webp", desc: "Comm Pc" },
        { img: "images/gpu.webp", desc: "Computer GPU" },
        { img: "images/laptop.webp", desc: "Laptop" },
        { img: "images/mouse.webp", desc: "Mouse" },
      ],
      linkText: "Shop More",
    },
    {
      sectionTitle: "Unveil Your Radiance",
      products: [
        { img: "images/menClothing.webp", desc: "Men Clothing" },
        { img: "images/diamond.webp", desc: "Diamond" },
        { img: "images/model.webp", desc: "Model" },
        { img: "images/bag.webp", desc: "Bag" },
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
          productImage: "images/kitchenCabinet.webp",
          productDesc1: "Compact, affordable, and widely used in....",
          productDesc2: "$179<sup>00</sup> <sub>List $259.00"
        },

        {
          productImage: "images/standingFan.webp",
          productDesc1: "A must-have due to power supply issues; many Nigerians....",
          productDesc2: "$179<sup>00</sup> <sub>List $259.00"
        },
        {
          productImage: "images/mobilePhone.webp",
          productDesc1: "Affordable Android phones with good battery life and....",
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
      image: "images/luaggages.webp",
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
          productImage: "images/perfumes.webp",
          productDesc1: "Internationally loved fragrances that define personal style....",
          productDesc2: "$19<sup>00</sup> <sub>List $259.00"
        },

        {
          productImage: "images/skincareProducts.webp",
          productDesc1: "Glow-boosting skincare serums loved worldwide for hydration and anti-aging....",
          productDesc2: "$17<sup>00</sup> <sub>List $259.00"
        },
        {
          productImage: "images/haircareProducts.webp",
          productDesc1: "Essential haircare solutions for shine, strength, and everyday styling...",
          productDesc2: "$15<sup>00</sup> <sub>List $259.00"
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
        { img: "images/yogaMats.webp", desc: "Yoga Mats" },
        { img: "images/fitnessTracker.webp", desc: "Fitness Tracker" },
        { img: "images/dumbells.webp", desc: "Dumbells" },
        { img: "images/sneakers.webp", desc: "Sneakers" },
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
      image: "images/mustdeals.webp",
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