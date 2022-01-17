const proDatabase = [
  {
    id: 1,
    name: 'Nike Tshirt',
    price: 200,
    category: 'Activewear',
    gender: 'unisex',
    brand: 'Nike',
    img: './img/shoe.jpg',
  },
  {
    id: 2,
    name: 'Adidas Sweatpants',
    price: 149,
    category: 'Sportswear',
    gender: 'Male',
    brand: 'Adidas',
    img: './img/shoe.jpg',
  },
  {
    id: 3,
    name: 'Nike Shoe',
    price: 200,
    category: 'Activewear',
    gender: 'unisex',
    brand: 'Nike',
    img: './img/shoe.jpg',
  },
  {
    id: 4,
    name: 'Adidas Sweatpants',
    price: 149,
    category: 'Sportswear',
    gender: 'Male',
    brand: 'Adidas',
    img: './img/shoe.jpg',
  },
  {
    id: 5,
    name: 'Nike Tshirt',
    price: 200,
    category: 'Activewear',
    gender: 'unisex',
    brand: 'Nike',
    img: './img/shoe.jpg',
  },
  {
    id: 6,
    name: 'Adidas Sweatpants',
    price: 149,
    category: 'Sportswear',
    gender: 'Male',
    brand: 'Adidas',
    img: './img/shoe.jpg',
  },
  {
    id: 7,
    name: 'Nike Tshirt',
    price: 200,
    category: 'Activewear',
    gender: 'unisex',
    brand: 'Nike',
    img: './img/shoe.jpg',
  },
  {
    id: 8,
    name: 'Adidas Sweatpants',
    price: 149,
    category: 'Sportswear',
    gender: 'Male',
    brand: 'Adidas',
    img: './img/shoe.jpg',
  },
  {
    id: 9,
    name: 'Adidas Sweatpants',
    price: 139,
    category: 'Sportswear',
    gender: 'Male',
    brand: 'Rebook',
    img: './img/shoe.jpg',
  },
];
const cartNum = document.querySelector('.cart-length');
const productContainer = document.querySelector('.grid-container');
const searchBar = document.querySelector('[data-search]');
//Variables
const shoppingCart = [];
let searchQuery;

//Search Function?
// document.querySelector('[data-start-search]').addEventListener('click', (e) => {
//   e.preventDefault();
//   searchQuery = searchBar.value;
//   productContainer.innerHTML = '';
//   renderItems();
// });

function renderItems() {
  proDatabase
    .filter((item) => item.name.match(searchQuery))
    .forEach((obj) => {
      productContainer.innerHTML += `
      <div class="grid-item" data-id=${obj.id}>
      <img src="${obj.img}" alt="${obj.name} ${obj.gender}" srcset="">
      <p class=${obj.id}>${obj.name}</p>
      <p>${obj.price}</p>
      <div class='details'>Click me for details!</div><button data-buy data-id=${obj.id}>Buy</button>
      </div>`;
    });
}

// Create Product HTML-template when on product page
if (window.location.pathname.includes('/product-page.html')) {
  console.log('You are on Product Page, loading products.');
  renderItems();
} else {
  console.log('Your are not on Product Page');
}

//Selected Grid Items to implement for later usage
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

//Open modal function
const modalContainer = document.querySelector('.modal-container');
productItems.forEach((item) => {
  item.addEventListener('click', () => {
    const found = proDatabase.find(
      (el) => el.id == item.getAttribute('data-id')
    );
    console.log(found);
    modalContainer.classList.toggle('active');
  });
});

//Close modal button function
const modalCloseBTN = document.querySelector('.close-modal');
modalCloseBTN.addEventListener('click', (e) => {
  modalContainer.classList.toggle('active');
});

/* Close modal button function if pressing outside the modal */
document.getElementById('parent').addEventListener('click', (e) => {
  if (e.target !== e.currentTarget) console.log('child clicked');
  else {
    modalContainer.classList.toggle('active');
  }
});
