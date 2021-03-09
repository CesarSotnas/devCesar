var express = require("express");
const blogController = require("../controllers/blogController");
var router = express.Router();

router.get("/", blogController.get);

module.exports = router;
