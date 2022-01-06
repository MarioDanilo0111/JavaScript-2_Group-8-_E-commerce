// Save .JSON-file locally
/* let object;
let httpRequest = new XMLHttpRequest();
httpRequest.open("GET", "./productDB.json", true);
httpRequest.send();
httpRequest.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    object = JSON.parse(this.response);
  }
}); */

/* let jsondata;
fetch("./productDB.json")
  .then(function (u) {
    return u.json();
  })
  .then(function (json) {
    jsondata = json;
  });
 */

/* fetch only works if .json is looks like this, it's complaining about ":" that comes after products [
  {
    "id": 1,
    "name": "Nike Tshirt",
    "price": 200,
    "category": "Activewear",
    "gender": "unisex",
    "brand": "Nike"
  },
  {
    "id": 2,
    "name": "Adidas Sweatpants",
    "price": 149,
    "category": "Sportswear",
    "gender": "Male",
    "brand": "Adidas"
  },
  {
    "id": 3,
    "name": "Nike Tshirt",
    "price": 200,
    "category": "Activewear",
    "gender": "unisex",
    "brand": "Nike"
  },
  {
    "id": 4,
    "name": "Adidas Sweatpants",
    "price": 149,
    "category": "Sportswear",
    "gender": "Male",
    "brand": "Adidas"
  },
  {
    "id": 5,
    "name": "Nike Tshirt",
    "price": 200,
    "category": "Activewear",
    "gender": "unisex",
    "brand": "Nike"
  },
  {
    "id": 6,
    "name": "Adidas Sweatpants",
    "price": 149,
    "category": "Sportswear",
    "gender": "Male",
    "brand": "Adidas"
  },
  {
    "id": 7,
    "name": "Nike Tshirt",
    "price": 200,
    "category": "Activewear",
    "gender": "unisex",
    "brand": "Nike"
  },
  {
    "id": 8,
    "name": "Adidas Sweatpants",
    "price": 149,
    "category": "Sportswear",
    "gender": "Male",
    "brand": "Adidas"
  },
  {
    "id": 9,
    "name": "Adidas Sweatpants",
    "price": 139,
    "category": "Sportswear",
    "gender": "Male",
    "brand": "Rebook"
  }
]
*/
