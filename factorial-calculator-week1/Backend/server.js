const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// The Iterative Factorial
function factorialIterative(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// The Recursive Factorial
function factorialRecursive(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorialRecursive(n - 1);
}

// This is the API Route for Factorial Calculation
app.get("/factorial", (req, res) => {
    const { number, method } = req.query;
    const num = parseInt(number);

    if (isNaN(num) || num < 0) {
        return res.status(400).json({ error: "Please enter a valid positive integer." });
    }

    let result =
        method === "iterative" ? factorialIterative(num) : factorialRecursive(num);

    res.json({ number: num, method, factorial: result });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));