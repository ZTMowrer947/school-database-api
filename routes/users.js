// Imports
const express = require("express");

// Express router setup
const router = express.Router();

// Routes
router.route("/")
    // GET /api/users: Get currently authenticated user
    .get((req, res) => {
        // TODO: Add authentication

        // TODO: Get authenticated user

        // Respond with "Not Implemented" status and message
        res.status(501).json({ message: "Not Implemented Yet"});
    })
    // POST /api/users: Create user
    .post((req, res) => {
        // TODO: Create user

        // Respond with "Not Implemented" status and message
        res.status(501).json({ message: "Not Implemented Yet"});
    });

// Export
module.exports = router;
