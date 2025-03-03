const axios = require("axios");

exports.fetchTrendingTopics = async (req, res) => {
    try {
        const response = await axios.get(`https://trends.google.com/trends/api/dailytrends?hl=en-US&geo=US`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch Google Trends" });
    }
};

exports.fetchNewsTopics = async (req, res) => {
    try {
        const { keyword } = req.query;
        const response = await axios.get(`https://newsapi.org/v2/everything?q=${keyword}&apiKey=${process.env.NEWS_API_KEY}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch news topics" });
    }
};