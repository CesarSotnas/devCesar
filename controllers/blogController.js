const blogController = {
  get: (req, res) => {
    return res.render("blog", { title: "Blog" });
  },
};

module.exports = blogController;
