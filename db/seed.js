const faker = require('faker');
const db = require('./index.js');

let listings = 20;
let photos = 5;

for (let i = 0; i < listings; i++) {
  db.insertListing((err, data) => {
    if (err) { console.log(err, null); }
    else { console.log(null, data); }
  });
}