const bcryptjs = require("bcryptjs");
const validation = require("../middlewares/validationMiddleware");
const db = require("../database/models");

const usersController = {
  login: (req, res) =>
    res.render("users/login", { titulo_pagina: "Petit and Fun - Login" }),
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
          titulo_pagina: "Petit and Fun - Login",
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
              msg: "Contraseña incorrecta, ingrese nuevamente su usuario y contraseña",
            },
          },
          titulo_pagina: "Petit and Fun - Login",
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
  editUser: (req, res) => {
    let toUpdate = req.session.userLogged;
    let notError = validation.editUserValidation(req, res);

    if (notError && req.body.password !== req.body.passwordConfirm) {
      return res.render("users/profile", {
        errors: {
          password: {
            msg: "Las contraseñas no coinciden",
          },
        },
        titulo_pagina: "Petit and Fun - Registro",
        oldData: req.body,
        user: req.session.userLogged,
      });
    } else {
      db.User.update(
        {
          name: req.body.name ? req.body.name : toUpdate.name,
          phone: req.body.telefono ? req.body.telefono : toUpdate.phone,
          //email: req.body.email ? req.body.email : toUpdate.email,
          avatar: req.file ? req.file.filename : toUpdate.avatar,
          password: req.body.password
            ? bcryptjs.hashSync(req.body.password, 10)
            : toUpdate.password,
          category_id: req.body.categoria
            ? req.body.categoria
            : toUpdate.category_id,
        },
        { where: { id: toUpdate.id } }
      ).then((r) => {
        req.session.destroy();
        return res.redirect("/");
      });
    }
    //  VALIDACION DE EMAIL EN EDITAR USUARIO.
    // if (notError) {
    // db.User.findAll({ where: { email: req.body.email } }).then(
    //   (resultado) => {
    //     if (
    //       resultado.length > 0
    //         ? resultado[0].dataValues.email
    //         : null == req.body.email
    //     ) {
    //       return res.render("users/profile", {
    //         errors: {
    //           email: {
    //             msg: "Este email ya está registrado",
    //           },
    //         },
    //         titulo_pagina: "Petit and Fun - Registro",
    //         oldData: req.body,
    //         user: req.session.userLogged,
    //       });
    //     } else
  },

  register: (req, res) =>
    res.render("users/register", { titulo_pagina: "Petit and Fun - Registro" }),

  storeUsers: (req, res) => {
    let error = validation.registerValidation(req, res);
    console.log(req.body);

    if (error) {
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
              oldFile: req.file,
            });
          } else if (req.body.password !== req.body.passwordConfirm) {
            return res.render("users/register", {
              errors: {
                password: {
                  msg: "Las contraseñas no coinciden",
                },
              },
              titulo_pagina: "Petit and Fun - Registro",
              oldData: req.body,
              oldFile: req.file,
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

  destroy: (req, res) => {
    res.clearCookie("userEmail");

    db.User.destroy({
      where: { id: req.session.userLogged.id },
    }).then((r) => {
      req.session.destroy();
      res.redirect("/");
    });
  },
};
module.exports = usersController;
