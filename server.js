const express = require('express');
const app = express();
const port = 8080;
const csv = require('csv-parser');
const fs = require('fs');
let data = [];

fs.createReadStream('data.csv')
  .pipe(csv())
  .on('data', (row) => {
    data.push(row);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });

app.get('/api/records', (req, res) => {
  res.json(data);
});

app.get('/api/records/:name', (req, res) => {
  let name = req.params.name;
  let result = data.filter(record => record.name.includes(name));
  res.json(result);
});

app.get('/api/records/date/:date', (req, res) => {
  let date = req.params.date;
  let result = data.filter(record => record.date === date);
  res.json(result);
});

app.get('/api/records/band/:band', (req, res) => {
  let band = req.params.band;
  let result = data.filter(record => record.band.includes(band));
  res.json(result);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});