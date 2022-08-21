window.addEventListener("load", function (e) {
  let form = document.querySelector(".formloginandregister");
  let nombre = document.querySelector("#nombre");
  let telefono = document.querySelector("#telefono");
  let email = document.querySelector("#email");
  let categoria = document.querySelector("#categoria");
  let avatar = document.querySelector("#avatar");
  let password = document.querySelector("#password");
  let passwordConfirm = document.querySelector("#passwordConfirm");
  let textDangerName = document.querySelector("#dangerName");
  let textDangerTelefono = document.querySelector("#dangerTelefono");
  let textDangerEmail = document.querySelector("#dangerEmail");
  let textDangerAvatar = document.querySelector("#dangerAvatar");
  let textDangerPassword = document.querySelector("#dangerPassword");
  let textDangerPasswordConfirm = document.querySelector("#dangerPasswordConfirm");

  nombre.addEventListener("mouseover", function (e) {
    nombre.style.border = "1px solid green";
  });
  nombre.addEventListener("mouseout", function (e) {
    nombre.style.border = "1px dashed green";
  });
  telefono.addEventListener("mouseover", function (e) {
    telefono.style.border = "1px solid green";
  });
  telefono.addEventListener("mouseout", function (e) {
    telefono.style.border = "1px dashed green";
  });
  email.addEventListener("mouseover", function (e) {
    email.style.border = "1px solid green";
  });
  email.addEventListener("mouseout", function (e) {
    email.style.border = "1px dashed green";
  });
  categoria.addEventListener("mouseover", function (e) {
    categoria.style.border = "1px solid green";
  });
  categoria.addEventListener("mouseout", function (e) {
    categoria.style.border = "1px dashed green";
  });
  avatar.addEventListener("mouseover", function (e) {
    avatar.style.border = "1px solid green";
  });
  avatar.addEventListener("mouseout", function (e) {
    avatar.style.border = "1px dashed green";
  });
  password.addEventListener("mouseover", function (e) {
    password.style.border = "1px solid green";
  });
  password.addEventListener("mouseout", function (e) {
    password.style.border = "1px dashed green";
  });
  passwordConfirm.addEventListener("mouseover", function (e) {
    passwordConfirm.style.border = "1px solid green";
  });
  passwordConfirm.addEventListener("mouseout", function (e) {
    passwordConfirm.style.border = "1px dashed green";
  });

  form.addEventListener("submit", function (e) {

    let errores = [];

    if (nombre.value === "") {
      errores.push("Debes completar el campo nombre");
      textDangerName.innerHTML =
        "<p>" + "Debes completar el campo" + "</p>";
      nombre.style.border = "1px solid red";
    } else textDangerName.style.display = "none";

    if (telefono.value === "") {
      errores.push("Debes completar el campo telefono");
      textDangerTelefono.innerHTML =
        "<p>" + "Debes completar el campo" + "</p>";
        telefono.style.border = "1px solid red";
    } else textDangerTelefono.style.display = "none";

    if (telefono.value.length < 5) {
      errores.push("Debes contener mas de 5 caracteres");
      textDangerTelefono.innerHTML +=
        "<p>" + "Debe contener más de 5 caracteres" + "</p>";
        telefono.style.border = "1px solid red";
    } else textDangerTelefono.style.display = "none";

    if (avatar.value === "") {
      errores.push("Debes completar el campo avatar");
      textDangerAvatar.innerHTML = "<p>" + "Debes completar el campo" + "</p>";
      avatar.style.border = "1px solid red";
    } else textDangerAvatar.style.display = "none";

    if (email.value === "") {
      errores.push("Debes completar el campo email");
      textDangerEmail.innerHTML = "<p>" + "Debes completar el campo" + "</p>";
      email.style.border = "1px solid red";
    } else textDangerEmail.style.display = "none";

    // if (!categoria.value) {
    //   errores.push("Debes completar el campo categoria");
    //   textDangerCategoria.innerHTML =
    //     "<p>" + "Debes completar el campo" + "</p>";
    //     categoria.style.border = "1px solid red";
    // } else textDangerCategoria.style.display = "none";

    if (password.value === "") {
      errores.push("Debes completar el campo password");
      textDangerPassword.innerHTML =
        "<p>" + "Debes completar el campo" + "</p>";
        password.style.border = "1px solid red";
    } else textDangerPassword.style.display = "none";

    if (passwordConfirm.value === "") {
      errores.push("Debes confirmar el password");
      textDangerPasswordConfirm.innerHTML =
        "<p>" + "Debes completar el campo" + "</p>";
        passwordConfirm.style.border = "1px solid red";
    } else textDangerPasswordConfirm.style.display = "none";

    if (errores.length > 0) {
      console.log(errores);
      e.preventDefault();
    }
  });
});
