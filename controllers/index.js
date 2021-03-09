const indexController = {
  get: (req, res) => {
    return res.render("index", { title: "Contato" });
  },
};

module.exports = indexController;
