let express = require('express');
let app = express();
let port = 3000;

let book = {
  title: 'The God of Small Things',
  author: 'Arundhati Roy',
  publicationYear: 1997,
  genre: 'Novel',
  isAvailable: true,
  stock: 5,
};

// Endpoint 1: Return the book object
app.get('/book', (req, res) => {
  res.json(book);
});

// Function to get the full title and author of the book
function getFullTitleAndAuthor(book) {
  return book.title + ' by ' + book.author;
}

// Endpoint 2: Access the full title and author of the book
function getFullTitleAndAuthor(book) {
  return `${book.title} by ${book.author}`;
}

app.get('/book/fulltitle-author', (req, res) => {
  const fullTitleAndAuthor = getFullTitleAndAuthor(book);
  res.json({ fullTitleAndAuthor });
});

// Endpoint 3: Access the genre and availability status of the book
function getGenreAndAvailability(book) {
  return { genre: book.genre, isAvailable: book.isAvailable };
}

app.get('/book/genre-availability', (req, res) => {
  const genreAndAvailability = getGenreAndAvailability(book);
  res.json(genreAndAvailability);
});

// Endpoint 4: Calculate and return the age of the book
function calculateBookAge(book) {
  const currentYear = new Date().getFullYear();
  return currentYear - book.publicationYear;
}

app.get('/book/age', (req, res) => {
  const bookAge = calculateBookAge(book);
  res.json({ age: bookAge });
});

// Endpoint 5: Provide a summary of the book including title, author, genre, and publication year
function getBookSummary(book) {
  return {
    title: book.title,
    author: book.author,
    genre: book.genre,
    publicationYear: book.publicationYear,
  };
}

app.get('/book/summary', (req, res) => {
  const bookSummary = getBookSummary(book);
  res.json(bookSummary);
});

// Endpoint 6: Check the stock status of the book and determine if an order is required
function checkStockAndOrder(book) {
  if (book.stock > 0) {
    return { status: 'In Stock', stock: book.stock };
  } else {
    return { status: 'Out of Stock', message: 'Order Required' };
  }
}

app.get('/book/stock-status', (req, res) => {
  const stockStatus = checkStockAndOrder(book);
  res.json(stockStatus);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
