const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Book = require("./models/Book");
require("dotenv").config(); // Load environment variables from .env

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected Successfully"))
.catch((err) => console.error("MongoDB Connection Error:", err));

// Routes

// Fetch books from Google Books API
app.get("/search", async (req, res) => {
  try {
    const { query } = req.query;
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${process.env.GOOGLE_BOOKS_API_KEY}`
    );
    res.json(response.data.items);
  } catch (error) {
    res.status(500).json({ message: "Error fetching books", error });
  }
});

// Add a book to the database
app.post("/books", async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ message: "Error adding book", error });
  }
});

app.get("/books", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/books", async (req, res) => {
  try {
    const { title, author, status, progress, goal } = req.body;
    const newBook = new Book({ title, author, status, progress, goal });
    await newBook.save();
    res.json(newBook);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put("/books/:id/progress", async (req, res) => {
  try {
    const { progress } = req.body;
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      { progress },
      { new: true }
    );
    res.json(updatedBook);
  } catch (error) {
    res.status(500).json({ error: "Failed to update progress" });
  }
});

app.delete("/books/:id", async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.json({ message: "Book deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));