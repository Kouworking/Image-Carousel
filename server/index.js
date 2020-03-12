const express = require('express');
const bodyParser = require('body-parser');
// const db = require('../database-mysql');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../client/dist'));

app.get('/', (req, res) => {
});

app.post('/', (req, res) => {
});

app.get('/', (req, res) => {
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});