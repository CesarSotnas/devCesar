const calcController = {
  index: (req, res) => {
    return res.send(calc);
  },
};

module.exports = calcController;
