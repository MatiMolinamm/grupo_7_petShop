window.addEventListener("load", function (e) {
  let form = document.querySelector(".formloginandregister");
  let nombre = document.querySelector("#nombre");
  let telefono = document.querySelector("#telefono");
  let email = document.querySelector("#email");
  let categoria = document.querySelector("#categoria");
  let avatar = document.querySelector("#avatar");
  let password = document.querySelector("#password");
  let passwordConfirm = document.querySelector("#passwordConfirm");

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
    //alert("envio cancelado");
    // e.preventDefault();
  });
});
