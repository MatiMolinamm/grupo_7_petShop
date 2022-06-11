const path = require("path");
const fs = require("fs");

module.exports = (req, res, next) => {
  res.locals.isLogged = false;
  const usersDataBaseFilePath = path.join(__dirname, "../data/users.json");
  const usersDataBase = JSON.parse(fs.readFileSync(usersDataBaseFilePath));

  let emailInCookie = req.cookies.userEmail;
  let userFromCookie = usersDataBase.find((i) => emailInCookie === i.email);

  if (userFromCookie) {
    req.session.userLogged = userFromCookie;
  }

  if (req.session.userLogged) {
    res.locals.isLogged = true;
    res.locals.userLogged = req.session.userLogged;
  }

  next();
};
