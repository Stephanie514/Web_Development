require("dotenv").config();
const express = require("express");
const cors = require("cors");
const topicRoutes = require("./routes/topics");

const app = express();
app.use(cors());
app.use(express.json());

// Use topic routes
app.use("/api/topics", topicRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));