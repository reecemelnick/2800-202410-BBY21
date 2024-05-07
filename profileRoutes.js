const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    var color = req.query.color;
    res.render("profile", { color: color });
});

module.exports = router;
