import React, { useState, useEffect } from "react";
import axios from "axios";
import BookSearch from "./BookSearch";
import "../App.css";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ title: "", author: "", goal: "" });

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const res = await axios.get("http://localhost:5000/books");
      setBooks(res.data);
    } catch (err) {
      console.error("Error fetching books:", err);
    }
  };

  const addBook = async (title, author, goal) => {
    const bookToAdd = { 
      title: title || newBook.title, 
      author: author || newBook.author, 
      goal: goal || newBook.goal 
    };

    if (!bookToAdd.title || !bookToAdd.author) return alert("Please enter book title and author.");

    try {
      const res = await axios.post("http://localhost:5000/books", bookToAdd);
      setBooks([...books, res.data]);
      setNewBook({ title: "", author: "", goal: "" });
    } catch (err) {
      console.error("Error adding book:", err);
    }
  };

  const updateProgress = async (id, newProgress) => {
    try {
      const res = await axios.put(`http://localhost:5000/books/${id}/progress`, { progress: newProgress });
      setBooks(books.map((book) => (book._id === id ? res.data : book)));
    } catch (err) {
      console.error("Error updating progress:", err);
    }
  };

  const deleteBook = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/books/${id}`);
      setBooks(books.filter((book) => book._id !== id && book.id !== id));
    } catch (err) {
      console.error("Error deleting book:", err);
    }
  };

  return (
    <div className="container">
      <h1> 📚 Welcome to Your Personal Library!</h1>
      <h2> 📚 Track Your Reading Progress 📚</h2>
      <p>Search, add and track your reading journey with ease.</p>

      {/* Search Component */}
      <BookSearch onAddBook={addBook} />

      {/* Manual Add Section */}
      <div className="input-container">
        <input
          type="text"
          placeholder="Book Title"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Author"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
        />
        <input
          type="number"
          placeholder="Reading Goal (Pages/Day)"
          value={newBook.goal}
          onChange={(e) => setNewBook({ ...newBook, goal: e.target.value })}
        />
        <button className="btn add-btn" onClick={() => addBook(newBook.title, newBook.author, newBook.goal)}>➕ Add Book</button>
      </div>

      {/* Book List with Reading Goal*/ }
      <ul className="book-list">
        {books.map((book) => (
          <li key={book._id} className="book-item">
            <span>
              <strong>{book.title}</strong> by {book.author}
            </span>
            <div className="progress-container">
              <span>📖 Pages Read: {book.progress}</span>
              <span>🎯 Goal: {book.goal} pages/day</span> {/* Display the goal*/ }
              <input
                type="number"
                min="0"
                placeholder="Update progress"
                onChange={(e) => updateProgress(book._id, e.target.value)}
              />
            </div>
            <button className="btn delete-btn" onClick={() => deleteBook(book._id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;