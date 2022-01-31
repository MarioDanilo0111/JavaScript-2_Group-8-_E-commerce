/* const testDB = fetch('./productDB.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    return data;
  });
 */

/* Todo: Add function to delete specific product in cart */
const proDatabase = [
  {
    id: 1,
    name: 'Nike Air Max 90',
    price: 1599,
    category: 'Shoe',
    gender: 'Unisex',
    brand: 'Nike',
    img: './img/airMax90.jpg',
    description:
      'Inget är lika stilsäkert, inget är lika beprövat. Var trogen Nikes rötter med den här uppdaterade klassikern med en stiliserad Swoosh-logga i 3D. Det är en legend som är lätt att älska, med genomskinliga Air-fönster, våfflade yttersulor och diskreta färgklickar.',
  },
  {
    id: 2,
    name: 'Nike Air Max 90 G',
    price: 1599,
    category: 'Shoe',
    gender: 'Unisex',
    brand: 'Nike',
    img: './img/airMax90g.jpg',
    description:
      'Den ursprungliga Nike Air Max 90 var känd för sina stilrena linjer och sin tidlösa stil. Nike Air Max 90 G är trogen OG-ikonen med ett par uppdateringar som passar golf, till exempel integrerat grepp och ett tunt topplager som skyddar mot väta.',
  },
  {
    id: 3,
    name: 'Nike Air Zoom Pegasus 38 Ekiden',
    price: 1449,
    category: 'Shoe',
    gender: 'Male',
    brand: 'Nike',
    img: './img/zoomPegasus38.jpg',
    description:
      'Nike Air Zoom Pegasus 38 Ekiden är en arbetshäst som hjälper dig igenom varje kilometer under loppet och fortsätter att ge dig extra svikt i steget, med samma responsiva skummaterial som sin föregångare. Ovandelen i mesh gör skon både bekväm och slitstark och passformen påminner om den klassiska Pegasus-skon.',
  },
  {
    id: 4,
    name: 'Chicago Bulls Courtside',
    price: 1599,
    category: 'Tracksuit',
    gender: 'Women',
    brand: 'Nike',
    img: './img/chicagoBullsTrack.jpg',
    description:
      'Koppla av medan du representerar ditt lag i tracksuiten Chicago Bulls Courtside. Den är tillverkad i sportigt stickat material med lagfärger och en blandning av tryck och broderi. En speciell NBA-logga firar ligans 75-årsjubileum.',
  },
  {
    id: 5,
    name: 'Miami Heat Courtside',
    price: 1339,
    category: 'Tracksuit',
    gender: 'Men',
    brand: 'Nike',
    img: './img/miamiHeatSuit.jpg',
    description:
      'Tracksuiten Miami Heat Courtside uppdaterar den klassiska silhuetten med stretchig ribbstickning på muddar, fåll och krage.Lätt och ledig passform med foder helt i mesh och premiumbroderier, inklusive en speciell NBA-logga för 75-årsjubileet.',
  },
  {
    id: 6,
    name: 'Atlético Madrid Strike',
    price: 1349,
    category: 'Tracksuit',
    gender: 'Male',
    brand: 'Nike',
    img: './img/atleticoMadridSuit.jpg',
    description:
      'Fotbollstracksuit Atlético Madrid Strike har skräddarsydda designdetaljer för blivande fotbollsstjärnor. Avslappnad, ledig passform kombinerat med svettavvisande material som håller dig sval och fokuserad hjäper dig att finjustera dina färdigheter.',
  },
  {
    id: 7,
    name: 'Los Angeles Lakers Courtside',
    price: 2249,
    category: 'Jacket',
    gender: 'unisex',
    brand: 'Nike',
    img: './img/laLakersJacket.jpg',
    description:
      'Gör dig redo för den nya säsongen med jackan Los Angeles Lakers Courtside. Det lätta lagret har ett bekvämt vadderat innerfoder som håller dig varm. Stark färgblocksdesign, broderade loggor och påsydda bokstäver visar tydligt vilket lag du håller på.',
  },
  {
    id: 8,
    name: 'Brooklyn Nets Courtside',
    price: 2249,
    category: 'Jacket',
    gender: 'Male',
    brand: 'Nike',
    img: './img/brooklynNetsJacket.jpg',
    description:
      'Ladda för den nya säsongen i jackan Brooklyn Nets Courtside. Det lätta lagret har ett bekvämt vadderat innerfoder som håller dig varm. Stark färgblocksdesign, broderade loggor och påsydda bokstäver gör det klart vilket lag du hejar på.',
  },
  {
    id: 9,
    name: 'Paris Saint-Germain',
    price: 1349,
    category: 'Jacket',
    gender: 'Unisex',
    brand: 'Nike',
    img: './img/saintJacket.jpg',
    description:
      'Visa alla vilket lag du håller på med jackan Paris Saint-Germain.Mjukt, svettavvisande material håller dig varm och torr både på avbytarbänken och i stan.',
  },
];
const tPrice = document.querySelector('[totalPrice]');
const shopCartList = document.querySelector('[data-shoppingCart]');
const shoppingCartContainer = document.querySelector(
  '.shoppingCart-list-container'
);
const btn = document.querySelector('[data-clear-local]');
const cartNum = document.querySelector('.cart-length');
const productContainer = document.querySelector('.grid-container');
const searchBar = document.querySelector('[data-search]');

/* Shopping cart is set to empty array. If localStorage is not "empty, set the shoppingCart to localStorage" */
let shoppingCart = [];
if (JSON.parse(localStorage.getItem('cart')) !== null) {
  shoppingCart = JSON.parse(localStorage.getItem('cart'));
}
let searchQuery;

/* Search function - Had to add event listeners to the filtered items for them to work. */
document.querySelector('[data-start-search]').addEventListener('keyup', (e) => {
  e.preventDefault();
  searchQuery = searchBar.value;
  productContainer.innerHTML = '';
  renderItems();
  const openDetails = document.querySelectorAll('[data-details]');
  const closeDetails = document.querySelectorAll('[data-close-details');
  const buyButtons = document.querySelectorAll('[data-buy]');

  /* Added event listener to details button to open */
  for (const oDetail of openDetails) {
    oDetail.addEventListener('click', function (e) {
      const detailsContent = document.querySelector(
        `[details-content='${oDetail.getAttribute('data-id')}']`
      );
      console.log(detailsContent.classList);
      detailsContent.classList.toggle('active');
    });
  }
  /* Added event listener to details button to close */
  for (const cDetail of closeDetails) {
    cDetail.addEventListener('click', (e) => {
      console.log(e.target);
      const detailsContent = document.querySelector(
        `[details-content='${cDetail.getAttribute('data-id')}']`
      );
      console.log(detailsContent.classList);
      detailsContent.classList.toggle('active');
    });
  }
  /* Buy function - Adds event for each buy-btn. Checks btn-id and gets the object from the database(found). */
  buyButtons.forEach((item) => {
    item.addEventListener('click', () => {
      const found = proDatabase.find(
        (el) => el.id == item.getAttribute('data-id')
      );
      console.log(found);
      shoppingCart.push(found);
      window.localStorage.setItem('cart', JSON.stringify(shoppingCart));
      cartNum.innerHTML = shoppingCart.length;
    });
  });
});

// Render items function
function renderItems() {
  proDatabase
    .filter(
      (item) =>
        item.name.toLowerCase().match(searchQuery) ||
        item.category.toLowerCase().match(searchQuery) ||
        item.price.toString().match(searchQuery)
    )
    .forEach((obj) => {
      productContainer.innerHTML += `
      <div class="grid-item" data-id=${obj.id}>
      <img src="${obj.img}" alt="${obj.name} ${obj.gender}" srcset="">
      <div class='grid-item-content'> 
      <p class=${obj.id}>${obj.name}</p>
      <p>${obj.price}:-</p>
    
      <div class="grid-item-buttons"> <button class='details' data-details data-id='${obj.id}'>Details</button><button data-buy data-id='${obj.id}'>Buy</button> </div> </div>
      
      <div class='details-content' details-content='${obj.id}'><span>${obj.description}</span><p data-close-details data-id='${obj.id}'>Click to close</p></div>
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

// Adds event for each buy-btn. Checks btn-id and gets the object from the database(found).
buyButtons.forEach((item) => {
  item.addEventListener('click', () => {
    const found = proDatabase.find(
      (el) => el.id == item.getAttribute('data-id')
    );
    console.log(found);
    shoppingCart.push(found);
    window.localStorage.setItem('cart', JSON.stringify(shoppingCart));
    cartNum.innerHTML = shoppingCart.length;
    addItemsShoppingCartDisplay(found);
  });
});
cartNum.innerHTML = shoppingCart.length;

/* Clear LocalStorage and sets shoppingCart to empty array. Removes innerHTML that shows items in cart */
btn.addEventListener('click', clearLocal);
function clearLocal() {
  window.localStorage.clear();
  console.log('Local storage has been cleared');
  console.log(localStorage);
  shoppingCart = [];
  cartNum.innerHTML = shoppingCart.length;
  shoppingCartContainer.innerHTML = '';
}

// Open and close details
const openDetails = document.querySelectorAll('[data-details]');
const closeDetails = document.querySelectorAll('[data-close-details');

// iterates over HTML NoteList, oDetail is the element
for (const oDetail of openDetails) {
  oDetail.addEventListener('click', function (e) {
    //Targets specific div by checking the data-id of the button you pressed to be the same as 'details-content' and toggles it to be active.
    const detailsContent = document.querySelector(
      `[details-content='${oDetail.getAttribute('data-id')}']`
    );
    console.log(detailsContent.classList);
    detailsContent.classList.toggle('active');
  });
}
// iterates over HTML NoteList, cDetail is the element
for (const cDetail of closeDetails) {
  cDetail.addEventListener('click', (e) => {
    console.log(e.target);
    //Targets specific paragraph by checking the data-id of the button you pressed to be the same as 'details-content' and toggles it to be active.
    const detailsContent = document.querySelector(
      `[details-content='${cDetail.getAttribute('data-id')}']`
    );
    console.log(detailsContent.classList);
    detailsContent.classList.toggle('active');
  });
}

/* ShoppingCartListShow and populate */
shopCartList.addEventListener('click', () => {
  shoppingCartContainer.classList.toggle('active');
  addItemsShoppingCartDisplay();
});

/* Function to display items bought  */
function addItemsShoppingCartDisplay() {
  shoppingCartContainer.innerHTML = '';
  shoppingCart.map((item, index) => {
    shoppingCartContainer.innerHTML += `
    <div cart-item=${item.id} index=${index}><div>${item.name}</div>
    <button prod-id=${item.id} removeBtn=${index}>Remove item</button>
    <div style='border-bottom: 1px solid black'>${item.price}</div> 
    </div>
    `;
    const cartBtn = document.querySelectorAll('[removeBtn]');
    for (const removeItem of cartBtn) {
      removeItem.addEventListener('click', (event) => {
        shoppingCart.splice(event.target.getAttribute('removeBtn'), 1);
        console.dir(event.target);
        console.log(event.target.getAttribute('removeBtn'));
        window.localStorage.setItem('cart', JSON.stringify(shoppingCart));
        cartNum.innerHTML = shoppingCart.length;
        addItemsShoppingCartDisplay();
      });
    }
  });
}

/* function addItemsShoppingCartDisplay() {
  shoppingCartContainer.innerHTML = '';
  shoppingCart.map((item, index) => {
    shoppingCartContainer.innerHTML += `
    <div cart-item=${item.id} index=${index}><div>${item.name}</div>
    <button prod-id=${item.id} removeBtn>Remove item</button>
    <div style='border-bottom: 1px solid black'>${item.price}</div> 
    </div>
    `;
    const cartBtn = document.querySelectorAll('[removeBtn]');
    for (const removeItem of cartBtn) {
      removeItem.addEventListener('click', (event) => {
        // console.dir(event.target.getAttribute('prod-id'));
        // console.dir(event.target['parentNode']);
        console.dir(event.target['parentNode']['attributes']['index']['value']);
        let val = event.target['parentNode']['attributes']['index']['value'];
        //removes parent node.
        event.target['parentNode'].remove();
        shoppingCart.splice(val, 1);
        window.localStorage.setItem('cart', JSON.stringify(shoppingCart));
        cartNum.innerHTML = shoppingCart.length;
        addItemsShoppingCartDisplay();
      });
    }
  });
} */
