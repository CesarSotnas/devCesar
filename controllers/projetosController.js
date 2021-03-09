const projetosController = {
  get: (req, res) => {
    return res.render("projetos", { title: "Projetos" });
  },
};

module.exports = projetosController;
