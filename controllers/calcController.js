const calcController = {
  get: (req, res) => {
    return res.render("calc", { title: "Calculadora" });
  },
};

module.exports = calcController;
