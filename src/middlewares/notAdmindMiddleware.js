module.exports = (req, res, next) => {
  if (res.locals.userLogged.category_id !== 1) {
    res.redirect("/users/login");
  }
  next();
};
