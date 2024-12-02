const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('BD1.2 - HW1');
});

// Endpoint to calculate total marks
app.get('/total-marks', (req, res) => {
  let marks1 = parseInt(req.query.marks1);
  let marks2 = parseInt(req.query.marks2);
  let totalMarks = marks1 + marks2;
  res.send(totalMarks.toString());
});

// Endpoint to calculate total weight of a shipment
app.get('/total-weight', (req, res) => {
  let weight1 = parseFloat(req.query.weight1);
  let weight2 = parseFloat(req.query.weight2);
  let weight3 = parseFloat(req.query.weight3);
  let totalWeight = weight1 + weight2 + weight3;
  res.send(totalWeight.toString());
});

// Endpoint to calculate monthly salary from annual salary
app.get('/monthly-salary', (req, res) => {
  let annualSalary = parseFloat(req.query.annualSalary);
  let monthlySalary = annualSalary / 12;
  res.send(monthlySalary.toString());
});

// Endpoint to calculate total pages read
app.get('/total-pages', (req, res) => {
  let pagesPerDay = parseInt(req.query.pagesPerDay);
  let days = parseInt(req.query.days);
  let totalPages = pagesPerDay * days;
  res.send(totalPages.toString());
});

// Endpoint to calculate currency conversion
app.get('/currency-conversion', (req, res) => {
  let amount = parseFloat(req.query.amount);
  let exchangeRate = parseFloat(req.query.exchangeRate);
  let convertedAmount = amount * exchangeRate;
  res.send(convertedAmount.toString());
});

// Endpoint to calculate average sales
app.get('/average-sales', (req, res) => {
  let sales1 = parseFloat(req.query.sales1);
  let sales2 = parseFloat(req.query.sales2);
  let sales3 = parseFloat(req.query.sales3);
  let avgSales = (sales1 + sales2 + sales3) / 3;
  res.send(avgSales.toFixed(2));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
