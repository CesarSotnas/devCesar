const getPostController = {
  get: (req, res) => {
    return res.render("getPost", { title: "Get/Post" });
  },

  post: (req, res) => {
    let { nome, email } = req.body;
    return res.redirect("getPost", { title: "Cadastro Feito" });
  },
};

module.exports = getPostController;
