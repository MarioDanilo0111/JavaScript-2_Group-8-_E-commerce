// Save .JSON-file locally
let object;
let httpRequest = new XMLHttpRequest();
httpRequest.open("GET", "./productDB.json", true);
httpRequest.send();
httpRequest.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    object = JSON.parse(this.response);
  }
});
