const mysql = require('mysql');
const mysqlConfig = require('./config.js');
const faker = require('faker');
const connection = mysql.createConnection(mysqlConfig);

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

const getAllListings = callback => {
  const queryStr = 'SELECT * FROM listings';
  connection.query(queryStr, (err, data) => {
    if (err) { callback(err, null); }
    else { callback(null, data); }
  });
}


module.exports = {
  connection, insertListing, getAllListings
};
