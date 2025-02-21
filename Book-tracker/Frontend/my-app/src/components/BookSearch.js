/*import React f"react";{ useState } from "react";
import axios from "axios";

const BookSearch = ({ onAddBook }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const searchBooks = async () => {
    if (!query) return;
    try {
      const API_KEY = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}`
      );
      setResults(response.data.items || []);
    } catch (error) {
      console.error("Error searching books:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for books..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={searchBooks}>Search</button>

      <ul>
        {results.map((book) => {
          const title = book.volumeInfo.title;
          const author = book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "Unknown Author";
          return (
            <li key={book.id}>
              <strong>{title}</strong> by {author}
              <button onClick={() => onAddBook(title, author)}>Add</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BookSearch;

import React, { useState } from "react";
import axios from "axios";

const BookSearch = ({ onAddBook }) => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const searchBooks = async () => {
    if (!query.trim()) return; // Prevent empty searches

    try {
      const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
      setSearchResults(res.data.items || []);
    } catch (err) {
      console.error("Error searching books:", err);
    }
  };

  const handleAddBook = (book) => {
    const title = book.volumeInfo.title || "Unknown Title";
    const author = book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "Unknown Author";

    onAddBook(title, author, book.id); // Send book details to parent (BookList.js)
    setSearchResults([]); // 🔹 Clears search results after adding
    setQuery(""); // 🔹 Clears input field
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search for a book..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="btn search-btn" onClick={searchBooks}>🔍 Search</button>

      <ul className="search-results">
        {searchResults.map((book) => (
          <li key={book.id} className="search-item">
            <span><strong>{book.volumeInfo.title}</strong> by {book.volumeInfo.authors?.join(", ") || "Unknown Author"}</span>
            <button className="btn add-btn" onClick={() => handleAddBook(book)}>➕ Add Book</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookSearch;*/

import React, { useState } from "react";
import axios from "axios";

const BookSearch = ({ onAddBook }) => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [readingGoal, setReadingGoal] = useState(""); // New state for goal

  const searchBooks = async () => {
    if (!query.trim()) return;
    try {
      const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
      setSearchResults(res.data.items || []);
    } catch (err) {
      console.error("Error searching books:", err);
    }
  };

  const handleAddBook = (book) => {
    const title = book.volumeInfo.title || "Unknown Title";
    const author = book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "Unknown Author";

    onAddBook(title, author, readingGoal); // Pass goal to BookList.js
    setSearchResults([]); // Clear results
    setQuery(""); // Clear search input
    setReadingGoal(""); // Clear goal input
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search for a book..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="btn search-btn" onClick={searchBooks}>🔍 Search</button>

      {/* Goal Input Field */}
      <input
        type="number"
        placeholder="Set Reading Goal (Pages/Day)"
        value={readingGoal}
        onChange={(e) => setReadingGoal(e.target.value)}
      />

      <ul className="search-results">
        {searchResults.map((book) => (
          <li key={book.id} className="search-item">
            <span><strong>{book.volumeInfo.title}</strong> by {book.volumeInfo.authors?.join(", ") || "Unknown Author"}</span>
            <button className="btn add-btn" onClick={() => handleAddBook(book)}>➕ Add Book</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookSearch;