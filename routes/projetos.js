const express = require("express");
const projetosController = require("../controllers/projetosController");
const router = express.Router();

router.get("/", projetosController.get);

module.exports = router;
