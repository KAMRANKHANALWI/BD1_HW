const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

// Array for various examples
let numbers = [1, 2, 3, 4, 5];
let strings = ['hello', 'world', 'javascript', 'node'];

// Function to multiply numbers by a multiplier
function multiplyNumbers(numArray, multiplier) {
  let result = [];
  for (let i = 0; i < numArray.length; i++) {
    result.push(numArray[i] * multiplier);
  }
  return result;
}

// Endpoint 1: Multiply numbers in array
app.get('/numbers/multiply', (req, res) => {
  let multiplier = req.query.multiplier;
  let result = multiplyNumbers(numbers, multiplier);
  res.json({ result });
});

// Function to concatenate a suffix to each string in an array
function concatStrings(strArray, suffix) {
  let result = [];
  for (let i = 0; i < strArray.length; i++) {
    result.push(strArray[i] + suffix);
  }
  return result;
}

// Endpoint 2: Concatenate suffix to each string
app.get('/strings/concat', (req, res) => {
  let suffix = req.query.suffix;
  let result = concatStrings(strings, suffix);
  res.json({ result });
});

// Function to remove odd numbers from an array
function removeOddNumbers(numArray) {
  let result = [];
  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] % 2 === 0) {
      result.push(numArray[i]);
    }
  }
  return result;
}

// Endpoint 3: Remove odd numbers from array
app.get('/numbers/remove-odds', (req, res) => {
  let result = removeOddNumbers(numbers);
  res.json({ result });
});

// Function to join strings in an array with a space
function joinStrings(strArray) {
  let result = '';
  for (let i = 0; i < strArray.length; i++) {
    result += (i > 0 ? ' ' : '') + strArray[i];
  }
  return result;
}

// Endpoint 4: Join strings with space
app.get('/strings/join', (req, res) => {
  let result = joinStrings(strings);
  res.json({ result });
});

// Function to double each number in an array
function doubleNumbers(numArray) {
  let result = [];
  for (let i = 0; i < numArray.length; i++) {
    result.push(numArray[i] * 2);
  }
  return result;
}

// Endpoint 5: Double each number in array
app.get('/numbers/double', (req, res) => {
  let result = doubleNumbers(numbers);
  res.json({ result });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
