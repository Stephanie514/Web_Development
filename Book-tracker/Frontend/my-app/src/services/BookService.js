import axios from "axios";

const API_URL = "http://localhost:5000/books"; // Make sure this matches your backend

const BookService = {
  getBooks: () => axios.get(API_URL),
  addBook: (book) => axios.post(API_URL, book),
  deleteBook: (id) => axios.delete(`${API_URL}/${id}`),
};

export default BookService;