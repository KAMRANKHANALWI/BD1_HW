const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('BD1.3 - HW2');
});

// Question 1: Calculate BMI Category
app.get('/check-bmi', (req, res) => {
  let weight = parseFloat(req.query.weight);
  let height = parseFloat(req.query.height);
  let bmi = weight / (height * height);
  let result;

  if (bmi < 18.5) {
    result = 'underweight';
  } else if (bmi < 24.9) {
    result = 'normal weight';
  } else if (bmi < 29.9) {
    result = 'overweight';
  } else {
    result = 'obese';
  }

  res.send(`BMI category is ${result}`);
});

// Question 2: Calculate Academic Performance
app.get('/check-performance', (req, res) => {
  let grade = parseFloat(req.query.grade);
  let result;

  if (grade >= 90) {
    result = 'excellent';
  } else if (grade >= 75) {
    result = 'good';
  } else if (grade >= 50) {
    result = 'average';
  } else {
    result = 'poor';
  }

  res.send(`Academic performance is ${result}`);
});

// Question 3: Calculate Age Group
app.get('/check-age-group', (req, res) => {
  let age = parseInt(req.query.age);
  let result;

  if (age <= 12) {
    result = 'child';
  } else if (age <= 17) {
    result = 'teenager';
  } else if (age <= 64) {
    result = 'adult';
  } else {
    result = 'senior';
  }

  res.send(`Age group is ${result}`);
});

// Question 4: Calculate Loan Eligibility
app.get('/check-loan-eligibility', (req, res) => {
  let creditScore = parseInt(req.query.creditScore);
  let result;

  if (creditScore >= 750) {
    result = 'high';
  } else if (creditScore >= 650) {
    result = 'medium';
  } else {
    result = 'low';
  }

  res.send(`Loan eligibility is ${result}`);
});

// Question 5: Calculate Tax Bracket
app.get('/check-tax-bracket', (req, res) => {
  let income = parseFloat(req.query.income);
  let result;

  if (income <= 500000) {
    result = '10% tax bracket';
  } else if (income <= 1000000) {
    result = '15% tax bracket';
  } else if (income <= 1500000) {
    result = '20% tax bracket';
  } else {
    result = '30% tax bracket';
  }

  res.send(`You fall under the ${result}`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
