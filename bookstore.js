const axios = require('axios');

// Base URL for the API (Replace with your actual API URL)
const apiBaseURL = 'https://api.example.com/books'; // This is an example; change it to your actual API endpoint.


// Task 1: Get the list of all books
const getBooks = async () => {
  try {
    const response = await axios.get(`${apiBaseURL}/list`);
    return response.data;
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
};

// Task 2: Get books based on ISBN
const getBookByISBN = async (isbn) => {
  try {
    const response = await axios.get(`${apiBaseURL}/isbn/${isbn}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching book with ISBN ${isbn}:`, error);
    throw error;
  }
};

// Task 3: Get all books by a specific author
const getBooksByAuthor = async (author) => {
  try {
    const response = await axios.get(`${apiBaseURL}/author/${author}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching books by author ${author}:`, error);
    throw error;
  }
};

// Task 4: Get books based on Title
const getBooksByTitle = async (title) => {
  try {
    const response = await axios.get(`${apiBaseURL}/title/${title}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching books with title "${title}":`, error);
    throw error;
  }
};

// Task 5: Get book reviews
const getBookReviews = async (isbn) => {
  try {
    const response = await axios.get(`${apiBaseURL}/reviews/${isbn}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching reviews for ISBN ${isbn}:`, error);
    throw error;
  }
};

// Task 6: Register a new user
const registerUser = async (userDetails) => {
  try {
    const response = await axios.post(`${apiBaseURL}/users/register`, userDetails);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

// Task 7: Login as a registered user
const loginUser = async (loginDetails) => {
  try {
    const response = await axios.post(`${apiBaseURL}/users/login`, loginDetails);
    return response.data;
  } catch (error) {
    console.error('Error logging in user:', error);
    throw error;
  }
};

// Task 8: Add or Modify a book review
const addOrModifyReview = async (isbn, reviewDetails, userId) => {
  try {
    const response = await axios.post(`${apiBaseURL}/reviews/${isbn}`, {
      review: reviewDetails,
      userId: userId,
    });
    return response.data;
  } catch (error) {
    console.error(`Error adding or modifying review for ISBN ${isbn}:`, error);
    throw error;
  }
};

// Task 9: Delete a book review
const deleteReview = async (isbn, reviewId, userId) => {
  try {
    const response = await axios.delete(`${apiBaseURL}/reviews/${isbn}/${reviewId}`, {
      data: { userId: userId },
    });
    return response.data;
  } catch (error) {
    console.error(`Error deleting review for ISBN ${isbn}:`, error);
    throw error;
  }
};

// Task 10: Get all books using async callback function
const getAllBooksAsyncCallback = (callback) => {
  axios
    .get(`${apiBaseURL}/list`)
    .then((response) => callback(null, response.data))
    .catch((error) => callback(error, null));
};

// Task 11: Search by ISBN using Promises
const searchByISBNUsingPromises = (isbn) => {
  return axios
    .get(`${apiBaseURL}/isbn/${isbn}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(`Error fetching book with ISBN ${isbn}:`, error);
      throw error;
    });
};

// Task 12: Search by Author
const searchByAuthor = (author) => {
  return axios
    .get(`${apiBaseURL}/author/${author}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(`Error fetching books by author ${author}:`, error);
      throw error;
    });
};

// Task 13: Search by Title
const searchByTitle = (title) => {
  return axios
    .get(`${apiBaseURL}/title/${title}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(`Error fetching books with title "${title}":`, error);
      throw error;
    });
};

module.exports = {
  getBooks,
  getBookByISBN,
  getBooksByAuthor,
  getBooksByTitle,
  getBookReviews,
  registerUser,
  loginUser,
  addOrModifyReview,
  deleteReview,
  getAllBooksAsyncCallback,
  searchByISBNUsingPromises,
  searchByAuthor,
  searchByTitle,
};
