const express = require('express');
const app = express();
const port = 3000;

// Sample data for heights
let heights = [160, 175, 180, 165, 170];

// Function to sort heights in ascending order
function sortHeightsAscending(height1, height2) {
  return height1 - height2;
}

// Endpoint 1: Sort heights in ascending order
app.get('/heights/sort-ascending', (req, res) => {
  let heightsCopy = heights.slice();
  heightsCopy.sort(sortHeightsAscending);
  res.json(heightsCopy);
});

// Function to sort heights in descending order
function sortHeightsDescending(height1, height2) {
  return height2 - height1;
}

// Endpoint 2: Sort heights in descending order
app.get('/heights/sort-descending', (req, res) => {
  let heightsCopy = heights.slice();
  heightsCopy.sort(sortHeightsDescending);
  res.json(heightsCopy);
});

// Sample data for employees
let employees = [
  { name: 'Rahul', employeeId: 101, salary: 50000 },
  { name: 'Sita', employeeId: 102, salary: 60000 },
  { name: 'Amit', employeeId: 103, salary: 45000 },
];

// Function to sort employees by salary in descending order
function sortEmployeesBySalaryDescending(employee1, employee2) {
  return employee2.salary - employee1.salary;
}

// Endpoint 3: Sort employees by salary in descending order
app.get('/employees/sort-by-salary-descending', (req, res) => {
  let employeesCopy = employees.slice();
  employeesCopy.sort(sortEmployeesBySalaryDescending);
  res.json(employeesCopy);
});

// Sample data for books
let books = [
  { title: 'The God of Small Things', author: 'Arundhati Roy', pages: 340 },
  { title: 'The White Tiger', author: 'Aravind Adiga', pages: 321 },
  { title: 'The Palace of Illusions', author: 'Chitra Banerjee', pages: 360 },
];

// Function to sort books by pages in ascending order
function sortBooksByPagesAscending(book1, book2) {
  return book1.pages - book2.pages;
}

// Endpoint 4: Sort books by pages in ascending order
app.get('/books/sort-by-pages-ascending', (req, res) => {
  let booksCopy = books.slice();
  booksCopy.sort(sortBooksByPagesAscending);
  res.json(booksCopy);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
