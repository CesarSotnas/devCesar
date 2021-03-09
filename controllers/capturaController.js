const capturaController = {
  get: (req, res) => {
    return res.render("captura", { title: "Captura" });
  },
};

module.exports = capturaController;
