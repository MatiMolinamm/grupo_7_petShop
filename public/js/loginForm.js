window.addEventListener("load", function (e) {
  let form = document.querySelector(".formloginandregister");

  let email = document.querySelector("#email");
  let password = document.querySelector("#password");

  let textDangerEmail = document.querySelector("#dangerEmail");
  console.log(textDangerEmail);
  let textDangerPassword = document.querySelector("#dangerPassword");
  console.log(textDangerPassword);

  email.addEventListener("mouseover", function (e) {
    email.style.border = "solid green";
  });
  email.addEventListener("mouseout", function (e) {
    email.style.border = "";
  });

  password.addEventListener("mouseover", function (e) {
    password.style.border = "solid green";
  });
  password.addEventListener("mouseout", function (e) {
    password.style.border = "";
  });

  form.addEventListener("submit", function (e) {
    let errores = [];

    if (email.value === "") {
      errores.push("Debes completar el campo email");
      textDangerEmail.innerHTML = "<p>" + "Debes completar el campo" + "</p>";
    } else textDangerEmail.style.display = "none";

    if (password.value === "" || password.value.length < 6) {
      errores.push("Debes completar el campo password");
      textDangerPassword.innerHTML =
        "<p>" +
        "Debes completar el campo y contener mas de 6 caracteres" +
        "</p>";
    } else textDangerPassword.style.display = "none";
    console.log(password.value.length);

    if (errores.length > 0) {
      console.log(errores);
      e.preventDefault();
    }
  });
});
