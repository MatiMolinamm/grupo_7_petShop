const path = require("path");
const fs = require("fs");
const bcryptjs = require("bcryptjs");
const validation = require("../middlewares/validationMiddleware");

const usersController = {
  login: (req, res) =>
    res.render("users/login", { titulo_pagina: "Petit and Fun -Login" }),
  processLogin: (req, res) => {
    let notError = validation.loginValidation(req, res);
    const usersDataBaseFilePath = path.join(__dirname, "../data/users.json");
    const usersDataBase = JSON.parse(fs.readFileSync(usersDataBaseFilePath));
    let userToLogin = usersDataBase.find((i) => req.body.email === i.email);

    if (notError && userToLogin) {
      let isOkThePassword = bcryptjs.compareSync(
        req.body.password,
        userToLogin.password
      );
      if (isOkThePassword) {
        delete userToLogin.password;
        req.session.userLogged = userToLogin;
        if (req.body.remember_user) {
          res.cookie("userEmail", req.body.email, { maxAge: 1000 * 60 * 60 });
        }

        return res.redirect("/users/profile");
      }
    }
    return res.render("users/login", {
      errors: {
        email: {
          msg: "Las credenciales son inválidas",
        },
      },
      titulo_pagina: "Petit and Fun -Login",
    });
  },
  profile: (req, res) => {
    res.render("users/profile", {
      titulo_pagina: "Petit and Fun - Profile",
      user: req.session.userLogged,
    });
  },
  register: (req, res) =>
    res.render("users/register", { titulo_pagina: "Petit and Fun - Registro" }),

  storeUsers: (req, res) => {
    let notError = validation.registerValidation(req, res);

    if (notError) {
      const usersDataBaseFilePath = path.join(__dirname, "../data/users.json");
      const usersDataBase = JSON.parse(fs.readFileSync(usersDataBaseFilePath));
      let dataBaseFiltrada = usersDataBase.filter(
        (i) => req.body.email !== i.email
      );

      if (dataBaseFiltrada.length < usersDataBase.length) {
        return res.render("users/register", {
          errors: {
            email: {
              msg: "Este email ya está registrado",
            },
          },
          titulo_pagina: "Petit and Fun - Registro",
          oldData: req.body,
        });
      } else {
        let lastUser = usersDataBase.pop();
        let lastId = lastUser ? lastUser.id : 0;
        usersDataBase.push(lastUser);

        let userNew = {
          id: lastId + 1,
          name: req.body.name,
          telefono: req.body.telefono,
          email: req.body.email,
          categoria: req.body.categoria,
          avatar: req.file ? req.file.filename : null,
          password: bcryptjs.hashSync(req.body.password, 10),
          //passwordConfirm: "" ,
        };

        usersDataBase.push(userNew);
        const usersDataBaseActualizadaJSON = JSON.stringify(usersDataBase);
        fs.writeFileSync(usersDataBaseFilePath, usersDataBaseActualizadaJSON);
        res.redirect("/users/login");
      }
    }
  },
  logout: (req, res) => {
    res.clearCookie("userEmail");
    req.session.destroy();
    return res.redirect("/");
  },
};

module.exports = usersController;
