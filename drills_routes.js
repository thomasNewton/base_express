// drils_routes.js - power drill routes

const express = require("express");
const router = express.Router();

// Home page route
router.get("/", function (req, res) {
    res.send("Welcome to the Section on Drills");
});

// About page route
router.get("/about", function (req, res) {
    res.send("All About The Drills");
});

module.exports = router;
