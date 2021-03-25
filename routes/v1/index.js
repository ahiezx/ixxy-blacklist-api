var express = require('express');
var router = express.Router();

router.use("/search", require("./search"));
router.use("/markets", require("./markets"));
router.use("/users", require("./users"));

module.exports = router;
