const express = require('express');
const app = express();
const port = 3000;

// 1. Generate GitHub profile URL
app.get('/github-profile', (req, res) => {
  const username = req.query.username;
  const generateProfileUrl = (username) => `https://github.com/${username}`;
  res.send(generateProfileUrl(username));
});

// 2. Generate a certificate for the student
app.get('/certificate', (req, res) => {
  const { firstName, lastName, courseName } = req.query;
  const generateCertificate = (firstName, lastName, courseName) =>
    `This certification is awarded to ${firstName} ${lastName} for completing the course ${courseName}`;
  res.send(generateCertificate(firstName, lastName, courseName));
});

// 3. Calculate grade percentage
app.get('/grade', (req, res) => {
  const maths = parseInt(req.query.maths);
  const science = parseInt(req.query.science);
  const english = parseInt(req.query.english);
  const calculateGrade = (maths, science, english) =>
    Math.round(((maths + science + english) / 300) * 100);
  res.send(
    `Your grade in percentage is ${calculateGrade(maths, science, english)}%`
  );
});

// 4. Split bill among friends
app.get('/split-bill', (req, res) => {
  const billAmount = parseFloat(req.query.billAmount);
  const numberOfFriends = parseInt(req.query.numberOfFriends);
  const splitBill = (billAmount, numberOfFriends) =>
    `Result: Each friend owes Rs. ${(billAmount / numberOfFriends).toFixed(
      2
    )} against the bill`;
  res.send(splitBill(billAmount, numberOfFriends));
});

// 5. Calculate monthly salary
app.get('/monthly-salary', (req, res) => {
  const hourlyWage = parseFloat(req.query.hourlyWage);
  const totalHours = parseInt(req.query.totalHours);
  const calculateSalary = (hourlyWage, totalHours) =>
    `Result: Your monthly salary is ₹${hourlyWage * totalHours}`;
  res.send(calculateSalary(hourlyWage, totalHours));
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
