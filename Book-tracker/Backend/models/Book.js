const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  status: { type: String, enum: ["Not Started", "In Progress", "Completed"], default: "Not Started" },
  progress: { type: Number, default: 0 },
  goal: { type: Number }, // Optional reading goal such as pages per day
});

module.exports = mongoose.model("Book", bookSchema);