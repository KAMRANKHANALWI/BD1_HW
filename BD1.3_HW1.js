const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('BD1.3 - HW1');
});

// Endpoint to check if a number is a whole number
app.get('/check-whole-number', (req, res) => {
  let number = parseFloat(req.query.number);
  let result = Number.isInteger(number) && number >= 0 ? 'whole' : 'not whole';
  res.send(`Number is ${result} number`);
});

// Endpoint to check if two numbers are equal
app.get('/check-equal', (req, res) => {
  let num1 = parseFloat(req.query.num1);
  let num2 = parseFloat(req.query.num2);
  let result = num1 === num2 ? 'equal' : 'not equal';
  res.send(`Numbers are ${result}`);
});

// Endpoint to check if a user is active
app.get('/check-active', (req, res) => {
  let isActive = req.query.isActive === 'true';
  let result = isActive ? 'User is Active' : 'User is not Active';
  res.send(result);
});

// Endpoint to check discount eligibility based on cost
app.get('/check-discount', (req, res) => {
  let cost = parseFloat(req.query.cost);
  let result =
    cost > 1000
      ? 'User is eligible for a discount'
      : 'User is not eligible for a discount';
  res.send(result);
});

// Endpoint to check work experience status
app.get('/check-experience', (req, res) => {
  let workExperience = parseFloat(req.query.workExperience);
  let result =
    workExperience > 0
      ? 'experienced'
      : workExperience < 0
      ? 'non-working'
      : 'fresher';
  res.send(`Person is ${result}`);
});

// Endpoint to check grade based on result
app.get('/check-result', (req, res) => {
  let result = parseFloat(req.query.result);
  let grade = result > 80 ? 'A' : result >= 50 ? 'B' : 'Fail';
  res.send(`The grade is ${grade}`);
});

// Endpoint to check attendance level
app.get('/check-attendance', (req, res) => {
  let attendance = parseInt(req.query.attendance);
  let result = attendance < 50 ? 'low' : attendance <= 90 ? 'moderate' : 'high';
  res.send(`Attendance is ${result}`);
});

// Endpoint to check restaurant rating
app.get('/check-rating', (req, res) => {
  let stars = parseInt(req.query.stars);
  let result = stars < 3 ? 'low' : stars <= 4 ? 'medium' : 'high';
  res.send(`Restaurant rating is ${result}`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
