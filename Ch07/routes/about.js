const express = require("express");
const router = express.Router();

// q1
router.get("/about", (req, res) => {
    res.status(200).send("This is the About page");
});

module.exports = router;