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
  let textDangerPasswordConfirm = document.querySelector(
    "#dangerPasswordConfirm"
  );

  nombre.addEventListener("mouseover", function (e) {
    nombre.style.border = "solid green";
  });
  nombre.addEventListener("mouseout", function (e) {
    nombre.style.border = "";
  });
  telefono.addEventListener("mouseover", function (e) {
    telefono.style.border = "solid green";
  });
  telefono.addEventListener("mouseout", function (e) {
    telefono.style.border = "";
  });
  email.addEventListener("mouseover", function (e) {
    email.style.border = "solid green";
  });
  email.addEventListener("mouseout", function (e) {
    email.style.border = "";
  });
  categoria.addEventListener("mouseover", function (e) {
    categoria.style.border = "solid green";
  });
  categoria.addEventListener("mouseout", function (e) {
    categoria.style.border = "";
  });
  avatar.addEventListener("mouseover", function (e) {
    avatar.style.border = "solid green";
  });
  avatar.addEventListener("mouseout", function (e) {
    avatar.style.border = "";
  });
  password.addEventListener("mouseover", function (e) {
    password.style.border = "solid green";
  });
  password.addEventListener("mouseout", function (e) {
    password.style.border = "";
  });
  passwordConfirm.addEventListener("mouseover", function (e) {
    passwordConfirm.style.border = "solid green";
  });
  passwordConfirm.addEventListener("mouseout", function (e) {
    passwordConfirm.style.border = "";
  });

  form.addEventListener("submit", function (e) {
    let errores = [];
    if (nombre.value === "") {
      errores.push("Debes completar el campo nombre");
      textDangerName.innerHTML =
        "<p>" + "Debes completar el campo nombre" + "</p>";
    } else textDangerName.style.display = "none";

    if (telefono.value === "") {
      errores.push("Debes completar el campo telefono");
      textDangerTelefono.innerHTML =
        "<p>" + "Debes completar el campo" + "</p>";
    }
    if (telefono.value.length < 5) {
      errores.push("Debes contener mas de 5 caracteres");
      textDangerTelefono.innerHTML +=
        "<p>" + "Debe contener mas de 5 caracteres" + "</p>";
    } else textDangerTelefono.style.display = "none";
    if (avatar.value === "") {
      errores.push("Debes completar el campo avatar");
      textDangerAvatar.innerHTML = "<p>" + "Debes completar el campo" + "</p>";
    } else textDangerAvatar.style.display = "none";
    if (email.value === "") {
      errores.push("Debes completar el campo email");
      textDangerEmail.innerHTML = "<p>" + "Debes completar el campo" + "</p>";
    } else textDangerEmail.style.display = "none";
    // if (categoria.value === "") {
    //   errores.push("Debes completar el campo categoria");
    //   textDangerCategoria.innerHTML =
    //     "<p>" + "Debes completar el campo" + "</p>";
    // } else textDangerCategoria.style.display = "none";
    if (password.value === "") {
      errores.push("Debes completar el campo password");
      textDangerPassword.innerHTML =
        "<p>" + "Debes completar el campo" + "</p>";
    } else textDangerPassword.style.display = "none";
    if (passwordConfirm.value === "") {
      errores.push("Debes confirmar el password");
      textDangerPasswordConfirm.innerHTML =
        "<p>" + "Debes completar el campo" + "</p>";
    } else textDangerPasswordConfirm.style.display = "none";
    if (errores.length > 0) {
      console.log(errores);
      e.preventDefault();
    }
  });
});
