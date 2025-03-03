const express = require("express");
const router = express.Router();
const { fetchTrendingTopics, fetchNewsTopics } = require("../controllers/topicController");

// Route to fetch trending topics
router.get("/trending", fetchTrendingTopics);

// Route to fetch news topics based on keywords
router.get("/news", fetchNewsTopics);

module.exports = router;