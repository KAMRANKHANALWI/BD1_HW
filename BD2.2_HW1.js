const express = require('express');
const app = express();
const PORT = 3000;

const temperatures = [22, 26, 19, 30, 23, 28, 17, 31];
const prices = [80, 120, 95, 150, 60, 110];
const ratings = [4.2, 3.8, 2.5, 4.7, 3.0, 4.9, 3.6];
const indianNames = [
  'Akshay',
  'Priyanka',
  'Arjun',
  'Anushka',
  'Rajesh',
  'Kavita',
];
const productPrices = [10, 25, 50, 75, 100, 150, 200];

// Question 1: Filter temperatures above 25 degrees Celsius
function filterHighTemperatures(temp) {
  return temp > 25;
}

app.get('/high-temperatures', (req, res) => {
  const filteredTemps = temperatures.filter(filterHighTemperatures);
  res.json(filteredTemps);
});

// Question 2: Filter prices less than or equal to 100 rupees
function filterLowPrices(price) {
  return price <= 100;
}

app.get('/low-prices', (req, res) => {
  const filteredPrices = prices.filter(filterLowPrices);
  res.json(filteredPrices);
});

// Question 3: Filter product ratings greater than 3.5
function filterHighRatings(rating) {
  return rating > 3.5;
}

app.get('/high-ratings', (req, res) => {
  const filteredRatings = ratings.filter(filterHighRatings);
  res.json(filteredRatings);
});

// Question 4: Filter Indian names longer than 6 characters
function filterLongIndianNames(name) {
  return name.length > 6;
}

app.get('/long-indian-names', (req, res) => {
  const filteredNames = indianNames.filter(filterLongIndianNames);
  res.json(filteredNames);
});

// Question 5: Filter products cheaper than a certain price
function filterCheaperProducts(price, filterParam) {
  return price < filterParam;
}

app.get('/cheaper-products', (req, res) => {
  const filterParam = parseInt(req.query.filterParam, 10);
  if (isNaN(filterParam)) {
    return res.status(400).json({ error: 'Invalid filterParam value' });
  }
  const filteredProducts = productPrices.filter((price) =>
    filterCheaperProducts(price, filterParam)
  );
  res.json(filteredProducts);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
