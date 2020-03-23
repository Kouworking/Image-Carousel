const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../client/dist'));

app.get('/', (req, res) => {
});

app.get('/api/listings', (req, res) => {
  db.getAllListings((err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(400);
    } else {
      console.log(req.body);
      res.send(data);
    }
  })
});

app.get('/api/photos', (req, res) => {
  db.getAllPhotos((err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(400);
    } else {
      res.send(data);
    }
  })
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});