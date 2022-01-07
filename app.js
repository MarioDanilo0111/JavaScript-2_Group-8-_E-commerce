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
    name: "Nike Tshirt",
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

// Create Product HTML-templae when on product page
if (window.location.pathname.includes("/product-page.html")) {
  console.log("You are on Product Page, loading products.");
  proDatabase.forEach((obj) => {
    /*    console.log(`${obj}`); */
    productContainer.innerHTML += `
      <div class="grid-item grid-item-${obj.id}">
      <img src="${obj.img}" alt="${obj.name} ${obj.gender}" srcset="">
      <p class=${obj.id}>${obj.name}</p>
      <a href="#">Details</a>
      </div>`;
  });
} else {
  console.log("Your are not on Product Page");
}

// Shopping Cart Display Number Func
/* addEventListener("click", () => {
  cartNum.innerHTML = `${proDatabase.length}`;
}); */
