/* import { useEffect, useState } from "react";
import { getBooks } from "../services/BookService";

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await getBooks();
      setBooks(response.data);
    };
    fetchBooks();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">My Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book._id} className="p-2 border-b">
            {book.title} by {book.author} - <strong>{book.status}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;*/

import React, { useEffect, useState } from "react";
import BookService from "../services/BookService";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ title: "", author: "" });

  // Fetch books from API
  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = () => {
    BookService.getBooks()
      .then((response) => setBooks(response.data))
      .catch((error) => console.error("Error fetching books:", error));
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  // Add a new book
  const addBook = (e) => {
    e.preventDefault();
    if (!newBook.title || !newBook.author) {
      alert("Title and author are required!");
      return;
    }
    BookService.addBook(newBook)
      .then(() => {
        fetchBooks();
        setNewBook({ title: "", author: "" }); // Reset form
      })
      .catch((error) => console.error("Error adding book:", error));
  };

  // Delete a book
  const deleteBook = (id) => {
    BookService.deleteBook(id)
      .then(() => fetchBooks())
      .catch((error) => console.error("Error deleting book:", error));
  };

  return (
    <div>
      <h2>📖 My Books</h2>

      {/* Book Form */}
      <form onSubmit={addBook}>
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          value={newBook.title}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={newBook.author}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Add Book</button>
      </form>

      {/* Book List */}
      {books.length === 0 ? (
        <p>No books found.</p>
      ) : (
        <ul>
          {books.map((book) => (
            <li key={book._id}>
              <strong>{book.title}</strong> by {book.author}
              <button onClick={() => deleteBook(book._id)}> Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;