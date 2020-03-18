const faker = require('faker');
const db = require('./index.js');

let listings = 20;
let listingId = 5;

for (let i = 0; i < listings; i++) {
  db.insertListing((err, data) => {
    if (err) { console.log(err, null); }
    else { console.log(null, data); }
  });
}

let j = 1;

for (let i = 0; i < 30; i++) {
  if (j === 7) {
    j = 1;
  }
  db.insertPhotos(i, j, (err, data) => {
    if (err) { console.log(err, null); }
    else { console.log(null, data); }
  });
  j++;
}