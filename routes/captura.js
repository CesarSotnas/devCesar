const express = require("express");
const router = express.Router();
const capturaController = require("../controllers/capturaController");

router.get("/", capturaController.get);

module.exports = router;
