const mysql = require('mysql');
//const mysqlConfig = require('./config.js');
const faker = require('faker');
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "Nicole"
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

const insertListing = (callback) => {
  const fakeAddress = faker.address.streetAddress();
  const queryStr = `INSERT INTO listings (listing_name) VALUES ('${fakeAddress}')`;
  connection.query(queryStr, (err, data) => {
    if (err) { callback(err, null); }
    else { callback(null, data); }
  });
};

const insertPhotos = (i, j, callback) => {
  const queryStr = `INSERT INTO photos (photo_url, listing_id) VALUES ('https://carousel-imgs.s3-us-west-1.amazonaws.com/${i}', '${j}')`
  connection.query(queryStr, (err, data) => {
    if (err) { callback(err, null); }
    else { callback(null, data); }
  });
};

const getAllListings = callback => {
  const queryStr = 'SELECT * FROM listings';
  connection.query(queryStr, (err, data) => {
    if (err) { callback(err, null); }
    else { callback(null, data); }
  });
}

const getAllPhotos = callback => {
  const queryStr = 'SELECT * FROM photos WHERE listing_id = "3"';
  connection.query(queryStr, (err, data) => {
    if (err) { callback(err, null); }
    else { callback(null, data); }
  });
};


module.exports = {
  connection, insertListing, getAllListings, insertPhotos, getAllPhotos
};
