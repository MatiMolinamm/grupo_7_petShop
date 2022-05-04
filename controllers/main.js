const mainController = {
  index: (req, res, next) => res.render("index"),
  login: (req, res, next) => res.render("users/login"),
  register: (req, res, next) => res.render("users/register"),
};

module.exports = mainController;
