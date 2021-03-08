var express = require("express");
var router = express.Router();
var projetosController = require("../controllers/projetosController");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/projetos", function (req, res, next) {
  res.render("projetos", { title: "Projetos" });
});

router.get("/blog", function (req, res, next) {
  res.render("blog", { title: "Blog" });
});

router.get("/calc", function (req, res, next) {
  res.render("calc", { title: "Calc" });
});

router.get("/captura", function (req, res, next) {
  res.render("captura", { title: "Captura" });
});

module.exports = router;
