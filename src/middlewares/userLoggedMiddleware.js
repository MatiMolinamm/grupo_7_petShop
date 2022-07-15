const db = require("../database/models");

module.exports = (req, res, next) => {
  res.locals.isLogged = false;

  let emailInCookie = req.cookies.userEmail;

  if (emailInCookie) {
    db.User.findAll({ where: { email: emailInCookie } })
      .then((r) => {
        console.log(r[0].dataValues.email);
        let userFromCookie = r[0].dataValues;

        return userFromCookie;
      })
      .then((userFromCookie) => {
        req.session.userLogged = userFromCookie;
        return req.session.userLogged;
      });
  }

  if (req.session.userLogged) {
    res.locals.isLogged = true;
    res.locals.userLogged = req.session.userLogged;
  }

  next();
};
