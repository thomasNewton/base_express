// wiki.js - Wiki route module

const express = require("express");
const router = express.Router();

// Home page route
router.get("/", function (req, res) {
    res.send("my routes  / page");
});

// About page route
router.get("/about", function (req, res) {
    res.send(" my routs /about page");
});

router.get("/index", function (req, res) {
    res.send(req.url+" ... will just echo the request... index in this case");
});


module.exports = router;
