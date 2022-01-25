const proDatabase = [
  {
    id: 1,
    name: 'Nike Tshirt',
    price: 200,
    category: 'Activewear',
    gender: 'unisex',
    brand: 'Nike',
    img: './img/shoe.jpg',
    description: 'Nike T-shirt that is nice to use when training',
  },
  {
    id: 2,
    name: 'Adidas Sweatpants',
    price: 149,
    category: 'Sportswear',
    gender: 'Male',
    brand: 'Adidas',
    img: './img/shoe.jpg',
    description: 'Nice sweatpands to use when training',
  },
  {
    id: 3,
    name: 'Nike Shoe',
    price: 200,
    category: 'Activewear',
    gender: 'unisex',
    brand: 'Nike',
    img: './img/shoe.jpg',
    description: 'Nice shoes to use for training',
  },
  {
    id: 4,
    name: 'Adidas Sweatpants',
    price: 149,
    category: 'Sportswear',
    gender: 'Male',
    brand: 'Adidas',
    img: './img/shoe.jpg',
    description: 'Nice sweatpands to use when training',
  },
  {
    id: 5,
    name: 'Nike Tshirt',
    price: 200,
    category: 'Activewear',
    gender: 'unisex',
    brand: 'Nike',
    img: './img/shoe.jpg',
    description: 'Nike T-shirt that is nice to use when training',
  },
  {
    id: 6,
    name: 'Adidas Sweatpants',
    price: 149,
    category: 'Sportswear',
    gender: 'Male',
    brand: 'Adidas',
    img: './img/shoe.jpg',
    description: 'Nice sweatpands to use when training',
  },
  {
    id: 7,
    name: 'Nike Tshirt',
    price: 200,
    category: 'Activewear',
    gender: 'unisex',
    brand: 'Nike',
    img: './img/shoe.jpg',
    description: 'Nike T-shirt that is nice to use when training',
  },
  {
    id: 8,
    name: 'Adidas Sweatpants',
    price: 149,
    category: 'Sportswear',
    gender: 'Male',
    brand: 'Adidas',
    img: './img/shoe.jpg',
    description: 'Nice sweatpands to use when training',
  },
  {
    id: 9,
    name: 'Adidas Sweatpants',
    price: 139,
    category: 'Sportswear',
    gender: 'Male',
    brand: 'Rebook',
    img: './img/shoe.jpg',
    description: 'Nice sweatpands to use when training',
  },
];
const cartNum = document.querySelector('.cart-length');
const productContainer = document.querySelector('.grid-container');
const searchBar = document.querySelector('[data-search]');
const shoppingCart = [];
let searchQuery;

//Search Function?
document.querySelector('[data-start-search]').addEventListener('click', (e) => {
  e.preventDefault();
  searchQuery = searchBar.value;
  productContainer.innerHTML = '';
  renderItems();
});

function renderItems() {
  proDatabase
    .filter((item) => item.name.match(searchQuery))
    .forEach((obj) => {
      productContainer.innerHTML += `
      <div class="grid-item" data-id=${obj.id}>
      <img src="${obj.img}" alt="${obj.name} ${obj.gender}" srcset="">
      <p class=${obj.id}>${obj.name}</p>
      <p>${obj.price}</p>
      <button class='details' data-details>Details</button><button data-buy data-id=${obj.id}>Buy</button>
      <div class='details-content' data-id=${obj.id}><span>${obj.description}</span><p data-close-details>Click to close</p></div>
      </div>
      `;
    });
}

// Create Product HTML-template when on product page
if (window.location.pathname.includes('/product-page.html')) {
  console.log('You are on Product Page, loading products.');
  renderItems();
} else {
  console.log('Your are not on Product Page');
}
/* Moving these breaks the code. */
const productItems = document.querySelectorAll('.grid-item');
const buyButtons = document.querySelectorAll('[data-buy]');

//For each div with product information, add a event
buyButtons.forEach((item) => {
  item.addEventListener('click', () => {
    const found = proDatabase.find(
      (el) => el.id == item.getAttribute('data-id')
    );
    console.log(found);
    shoppingCart.push(found);
    cartNum.innerHTML = `${shoppingCart.length}`;
  });
});

const openDetails = document.querySelectorAll('[data-details]');
const closeDetails = document.querySelectorAll('[data-close-details');
/* toggleDetails.forEach((item) => {
  item.addEventListener('click', () => {
    console.log(item);
    //if statement to toggle class .active on product that has the same ID as the btn?
  });
});
 */

//Only works once
for (const oDetail of openDetails) {
  oDetail.addEventListener('click', function (e) {
    console.log(e);
    e.path[1].classList.toggle('active');
    for (const cDetail of closeDetails) {
      cDetail.addEventListener('click', (e) => {
        console.log(e);
        e.path[2].classList.toggle('active');
      });
    }
  });
}
