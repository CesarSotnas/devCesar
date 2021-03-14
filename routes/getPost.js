const express = require("express");
const router = express.Router();
const getPostController = require("../controllers/getPostController");

router.get("/", getPostController.get);
router.post("/", getPostController.post);

module.exports = router;
