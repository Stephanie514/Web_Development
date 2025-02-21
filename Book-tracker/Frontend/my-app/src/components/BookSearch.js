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