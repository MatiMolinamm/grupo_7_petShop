const path = require("path");
const fs = require("fs");
const bcryptjs = require("bcryptjs");
const validation = require("../middlewares/validationMiddleware");
const db = require("../database/models");

const usersController = {
  login: (req, res) =>
    res.render("users/login", { titulo_pagina: "Petit and Fun -Login" }),
  processLogin: (req, res) => {
    let notError = validation.loginValidation(req, res);
    db.User.findAll({ where: { email: req.body.email } }).then((resultado) => {
      if (resultado.length == 0) {
        res.render("users/login", {
          errors: {
            email: {
              msg: "El email no se encuentra en la base de datos",
            },
          },
          titulo_pagina: "Petit and Fun -Login",
        });
      }
    });

    db.User.findAll({ where: { email: req.body.email } }).then((resultado) => {
      if (
        resultado.length > 0
          ? resultado[0].dataValues.email
          : null == req.body.email
      ) {
        if (notError) {
          let isOkThePassword = bcryptjs.compareSync(
            req.body.password,
            resultado[0].dataValues.password
          );
          if (isOkThePassword) {
            delete resultado[0].dataValues.password;
            req.session.userLogged = resultado[0].dataValues;
            if (req.body.remember_user) {
              res.cookie("userEmail", req.body.email, {
                maxAge: 1000 * 60 * 60,
              });
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
      }
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
      db.User.findAll({ where: { email: req.body.email } }).then(
        (resultado) => {
          if (
            resultado.length > 0
              ? resultado[0].dataValues.email
              : null == req.body.email
          ) {
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
            db.User.create({
              name: req.body.name,
              phone: req.body.telefono,
              email: req.body.email,
              avatar: req.file ? req.file.filename : null,
              password: bcryptjs.hashSync(req.body.password, 10),
              category_id: req.body.categoria,
            });
            res.redirect("/users/login");
          }
        }
      );
    }
  },

  logout: (req, res) => {
    res.clearCookie("userEmail");
    req.session.destroy();
    return res.redirect("/");
  },
};

module.exports = usersController;
