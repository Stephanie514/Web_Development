import React, { useState } from "react";
import axios from "axios";
import "./styles.css"; // Ensure this is imported for styling

const categories = ["Technology", "Health", "Finance", "Education", "Lifestyle"];

function App() {
  const [keyword, setKeyword] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTopics = async () => {
    if (!keyword.trim()) return;

    setLoading(true);
    try {
      const res = await axios.get(
        `http://localhost:5000/api/topics/news?keyword=${keyword}`
      );
      setTopics(res.data.articles || []);
    } catch (error) {
      console.error("Error fetching topics:", error);
      setTopics([]);
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <h1 className="title">Blog Topic Suggester</h1>

      {/* Category Selection */}
      <div className="categories">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-btn ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter keyword (e.g., Technology, Health, AI)..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button onClick={fetchTopics}>Search</button>
      </div>

      {/* Topic Suggestions */}
      <ul className="topics-list">
        {loading ? (
          <p className="loading-text">Fetching topics...</p>
        ) : topics.length > 0 ? (
          topics.map((article, index) => (
            <li key={index} className="topic-item">
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="topic-link"
              >
                {index + 1}. {article.title}
              </a>
            </li>
          ))
        ) : (
          <p className="no-topics">No topics found. Try a different keyword.</p>
        )}
      </ul>
    </div>
  );
}

export default App;