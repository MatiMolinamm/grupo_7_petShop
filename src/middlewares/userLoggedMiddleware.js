const db = require("../database/models");

module.exports = (req, res, next) => {
  res.locals.isLogged = false;

  let emailInCookie = req.cookies.userEmail;
  let userLogged = req.session.userLogged;
  if (emailInCookie) {
    db.User.findAll({ where: { email: emailInCookie } })
      .then((r) => {
        let userFromCookie = r[0].dataValues;

        return userFromCookie;
      })
      .then((userFromCookie) => {
        if (userLogged) {
          userLogged = userFromCookie;
          return userLogged;
        }
      });
  }
  if (req.session.userLogged) {
    res.locals.isLogged = true;
    res.locals.userLogged = req.session.userLogged;
  }

  next();
};
