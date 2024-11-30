const {
  getBooks,
  getBookByISBN,
  getBooksByAuthor,
  getBooksByTitle,
  registerUser,
  loginUser,
} = require('./bookstore');

// Example: Get all books
getBooks()
  .then((books) => console.log('Books:', books))
  .catch((error) => console.error('Error:', error));

// Example: Search for a book by ISBN
getBookByISBN('1234567890')
  .then((book) => console.log('Book:', book))
  .catch((error) => console.error('Error:', error));
