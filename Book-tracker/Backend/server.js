/*require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());*/
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Book = require("./models/Book");
require("dotenv").config(); // Load environment variables from .env

const app = express();
app.use(express.json());
app.use(cors());

// Connect MongoDB
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// MongoDB Connection

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected Successfully"))
.catch((err) => console.error("❌ MongoDB Connection Error:", err));


/*mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));*/

// API Routes
// app.use("/api/books", require("./routes/BookRoutes"));

// GET all books
app.get("/books", async (req, res) => {
    try {
      const books = await Book.find();
      res.json(books);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch books" });
    }
  });
  
  // POST - Add a new book
  /*app.post("/books", async (req, res) => {
    try {
      const { title, author, status, progress, goal } = req.body;
      const newBook = new Book({ title, author, status, progress, goal });
      await newBook.save();
      res.status(201).json(newBook);
    } catch (error) {
      res.status(500).json({ error: "Failed to add book" });
    }
  });*/

  app.post("/books", async (req, res) => {
    try {
      const { title, author } = req.body;
      if (!title || !author) {
        return res.status(400).json({ message: "Title and Author are required" });
      }
  
      const book = new Book({ title, author });
      await book.save();
      res.status(201).json(book);
    } catch (error) {
      console.error("Error adding book:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });
  
  
  // DELETE a book by ID
  app.delete("/books/:id", async (req, res) => {
    try {
      const book = await Book.findByIdAndDelete(req.params.id);
      if (!book) return res.status(404).json({ error: "Book not found" });
      res.json({ message: "Book deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete book" });
    }
  });  

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));