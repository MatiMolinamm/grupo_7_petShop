const mainController = {
  index: (req, res, next) => res.render("index"),
  login: (req, res, next) => res.render("users/login"),
  register: (req, res, next) => res.render("users/register"),
  carrito: (req, res, next) => res.render("users/carrito"),
};

module.exports = mainController;
