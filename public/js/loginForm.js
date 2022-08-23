window.addEventListener("load", function (e) {

  let form = document.querySelector(".loginForm");

  let email = document.querySelector("#email");

  let password = document.querySelector("#password");

  let textDangerEmail = document.querySelector("#dangerEmail");
  // console.log(textDangerEmail);

  let textDangerPassword = document.querySelector("#dangerPassword");
  // console.log(textDangerPassword);

  email.addEventListener("mouseover", function (e) {
    email.style.border = "1px solid green";
  });
  email.addEventListener("mouseout", function (e) {
    email.style.border = "1px dashed green";
  });

  password.addEventListener("mouseover", function (e) {
    password.style.border = "1px solid green";
  });
  password.addEventListener("mouseout", function (e) {
    password.style.border = "1px dashed green";
  });

  form.addEventListener("submit", function (e) {
    let errores = [];

    if (email.value === "") {
      errores.push("Debes completar el campo email");
      textDangerEmail.innerHTML = "<p>" + "Debes completar el campo" + "</p>";
      email.style.border = "1px solid red";
    } else textDangerEmail.style.display = "none";

    if (!password.value) {
      errores.push("Debes completar el campo password");
      textDangerPassword.innerHTML = "<p>" + "Debes completar el campo y contener más de 6 caracteres" + "</p>";
      password.style.border = "1px solid red";
    } else textDangerPassword.style.display = "none";
    // console.log(password.value.length);

    if (errores.length > 0) {
      console.log(errores);
      e.preventDefault();
    }
  });
});
