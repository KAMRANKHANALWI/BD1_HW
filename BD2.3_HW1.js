const express = require('express');
const app = express();
const port = 3000;

// Sample data for employees
let employees = [
  { name: 'Rahul Gupta', department: 'HR', salary: 50000 },
  { name: 'Sneha Sharma', department: 'Finance', salary: 60000 },
  { name: 'Priya Singh', department: 'Marketing', salary: 55000 },
  { name: 'Amit Kumar', department: 'IT', salary: 65000 },
];

// Function to filter employees by department
function filterByDepartment(employee, department) {
  return employee.department === department;
}

// Endpoint 1: Filter employees by department
app.get('/employees/department/:department', (req, res) => {
  let department = req.params.department;
  let result = employees.filter((employee) =>
    filterByDepartment(employee, department)
  );
  res.json(result);
});

// Sample data for bikes
let bikes = [
  { make: 'Hero', model: 'Splendor', mileage: 80 },
  { make: 'Bajaj', model: 'Pulsar', mileage: 60 },
  { make: 'TVS', model: 'Apache', mileage: 70 },
];

// Function to filter bikes by mileage
function filterByMileage(bike, minMileage) {
  return bike.mileage > minMileage;
}

// Endpoint 2: Filter bikes by minimum mileage
app.get('/bikes/mileage/:minMileage', (req, res) => {
  let minMileage = parseInt(req.params.minMileage);
  let result = bikes.filter((bike) => filterByMileage(bike, minMileage));
  res.json(result);
});

// Function to filter bikes by make
function filterByMake(bike, make) {
  return bike.make.toLowerCase() === make.toLowerCase();
}

// Endpoint 3: Filter bikes by make
app.get('/bikes/make/:make', (req, res) => {
  let make = req.params.make;
  let result = bikes.filter((bike) => filterByMake(bike, make));
  res.json(result);
});

// Sample data for songs
let songs = [
  { title: 'Tum Hi Ho', genre: 'Romantic', rating: 4 },
  { title: 'Senorita', genre: 'Pop', rating: 5 },
  { title: 'Dil Chahta Hai', genre: 'Bollywood', rating: 3 },
];

// Function to filter songs by rating
function filterByRating(song, minRating) {
  return song.rating > minRating;
}

// Endpoint 4: Filter songs by minimum rating
app.get('/songs/rating/:minRating', (req, res) => {
  let minRating = parseInt(req.params.minRating);
  let result = songs.filter((song) => filterByRating(song, minRating));
  res.json(result);
});

// Function to filter songs by genre
function filterByGenre(song, genre) {
  return song.genre.toLowerCase() === genre.toLowerCase();
}

// Endpoint 5: Filter songs by genre
app.get('/songs/genre/:genre', (req, res) => {
  let genre = req.params.genre;
  let result = songs.filter((song) => filterByGenre(song, genre));
  res.json(result);
});

// Sample data for tasks
let tasks = [
  { taskId: 1, taskName: 'Prepare Presentation', status: 'pending' },
  { taskId: 2, taskName: 'Attend Meeting', status: 'in-progress' },
  { taskId: 3, taskName: 'Submit Report', status: 'completed' },
];

// Function to filter tasks by status
function filterByStatus(task, status) {
  return task.status === status;
}

// Endpoint 6: Filter tasks by status
app.get('/tasks/status/:status', (req, res) => {
  let status = req.params.status;
  let result = tasks.filter((task) => filterByStatus(task, status));
  res.json(result);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
