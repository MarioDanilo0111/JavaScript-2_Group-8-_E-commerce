const proDatabase = [
  {
    id: 1,
    name: "Nike Tshirt",
    price: 200,
    category: "Activewear",
    gender: "unisex",
    brand: "Nike",
    img: "./img/shoe.jpg",
  },
  {
    id: 2,
    name: "Adidas Sweatpants",
    price: 149,
    category: "Sportswear",
    gender: "Male",
    brand: "Adidas",
    img: "./img/shoe.jpg",
  },
  {
    id: 3,
    name: "Nike Shoe",
    price: 200,
    category: "Activewear",
    gender: "unisex",
    brand: "Nike",
    img: "./img/shoe.jpg",
  },
  {
    id: 4,
    name: "Adidas Sweatpants",
    price: 149,
    category: "Sportswear",
    gender: "Male",
    brand: "Adidas",
    img: "./img/shoe.jpg",
  },
  {
    id: 5,
    name: "Nike Tshirt",
    price: 200,
    category: "Activewear",
    gender: "unisex",
    brand: "Nike",
    img: "./img/shoe.jpg",
  },
  {
    id: 6,
    name: "Adidas Sweatpants",
    price: 149,
    category: "Sportswear",
    gender: "Male",
    brand: "Adidas",
    img: "./img/shoe.jpg",
  },
  {
    id: 7,
    name: "Nike Tshirt",
    price: 200,
    category: "Activewear",
    gender: "unisex",
    brand: "Nike",
    img: "./img/shoe.jpg",
  },
  {
    id: 8,
    name: "Adidas Sweatpants",
    price: 149,
    category: "Sportswear",
    gender: "Male",
    brand: "Adidas",
    img: "./img/shoe.jpg",
  },
  {
    id: 9,
    name: "Adidas Sweatpants",
    price: 139,
    category: "Sportswear",
    gender: "Male",
    brand: "Rebook",
    img: "./img/shoe.jpg",
  },
];
const cartNum = document.querySelector(".cart-length");
const productContainer = document.querySelector(".grid-container");
const searchBar = document.querySelector("[data-search]");
const productItems = document.querySelectorAll(".grid-item");
const buyButtons = document.querySelectorAll("[data-buy]");
//Variables
const shoppingCart = [];
let searchQuery;

function renderItems() {
  proDatabase
    .filter((item) => item.name.match(searchQuery))
    .forEach((obj) => {
      productContainer.innerHTML += `
      <div class="grid-item" data-id=${obj.id}>
      <img src="${obj.img}" alt="${obj.name} ${obj.gender}" srcset="">
      <p class=${obj.id}>${obj.name}</p>
      <p>${obj.price}</p>
      <a href="#">Details</a><button data-buy data-id=${obj.id}>Buy</button>
      </div>`;
    });
}

// Create Product HTML-templae when on product page
if (window.location.pathname.includes("/product-page.html")) {
  console.log("You are on Product Page, loading products.");
  renderItems();
} else {
  console.log("Your are not on Product Page");
}

//Search Function?
document.querySelector("[data-start-search]").addEventListener("click", (e) => {
  e.preventDefault();
  searchQuery = searchBar.value;
  productContainer.innerHTML = "";
  renderItems();
});

//For each div with product information, add a event
buyButtons.forEach((item) => {
  item.addEventListener("click", () => {
    const found = proDatabase.find(
      (el) => el.id == item.getAttribute("data-id")
    );
    console.log(found);
    shoppingCart.push(found);
    cartNum.innerHTML = `${shoppingCart.length}`;
  });
});

productItems.forEach((item) => {
  item.addEventListener("click", () => {
    const found = proDatabase.find(
      (el) => el.id == item.getAttribute("data-id")
    );
    console.log(found);
  });
});
