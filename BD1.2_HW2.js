const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('BD1.2 - HW2');
});

// Question 1: BMI Calculator
app.get('/bmi', (req, res) => {
  let weight = parseFloat(req.query.weight);
  let height = parseFloat(req.query.height);
  let bmi = weight / (height * height);
  res.send('Your BMI is: ' + bmi.toFixed(2));
});

// Question 2: Grocery Checkout Price
app.get('/checkout', (req, res) => {
  let product = req.query.product;
  let units = parseInt(req.query.units);
  let price = parseFloat(req.query.price);
  let total_price = units * price;
  res.send(`Your total for ${units} ${product} is ${total_price}`);
});

// Question 3: Calculate Grade Percentage
app.get('/grade', (req, res) => {
  let math = parseFloat(req.query.maths);
  let science = parseFloat(req.query.science);
  let english = parseFloat(req.query.english);
  let gradeInPercentage = ((math + science + english) / 300) * 100;
  res.send(`Your grade in percentage is ${Math.round(gradeInPercentage)}%`);
});

// Question 4: Return Bill Amount After Applying Discount
app.get('/discounted-price', (req, res) => {
  let cartTotal = parseFloat(req.query.cartTotal);
  let discount = parseFloat(req.query.discount);
  let discountedPrice = cartTotal - cartTotal * (discount / 100);
  res.send(`Result: Your bill amount is ${discountedPrice.toFixed(2)}`);
});

// Question 5: Split Bill Among Friends
app.get('/split-bill', (req, res) => {
  let billAmount = parseFloat(req.query.billAmount);
  let numberOfFriends = parseInt(req.query.numberOfFriends);
  let splitAmount = billAmount / numberOfFriends;
  res.send(
    `Result: Each friend owes Rs. ${splitAmount.toFixed(2)} against the bill`
  );
});

// Question 6: Convert Celsius to Fahrenheit
app.get('/celsius-to-fahrenheit', (req, res) => {
  let celsius = parseFloat(req.query.temperature);
  let fahrenheit = (celsius * 9) / 5 + 32;
  res.send(`Result: ${fahrenheit.toFixed(2)} Fahrenheit`);
});

// Question 7: Calculate Monthly Salary
app.get('/monthly-salary', (req, res) => {
  let hourlyWage = parseFloat(req.query.hourlyWage);
  let totalHours = parseInt(req.query.totalHours);
  let monthlySalary = hourlyWage * totalHours;
  res.send(`Result: Your monthly salary is ₹${monthlySalary}`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
