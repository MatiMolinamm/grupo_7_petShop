window.addEventListener("load", function (e) {
<<<<<<< HEAD
  let divResultado = document.querySelectorAll(".productsCard");
=======

  let divResultado = document.querySelectorAll(".productsCard");

>>>>>>> dbb35d8fb5d838ce703b4a9e29bab1e7e732e586
  let resultadoCero = document.querySelector(".resultadoCero");

  let homeSearch = document.querySelector("#homesearch");
  console.log(divResultado);
  homeSearch.addEventListener("keypress", function (e) {
    //alert("se presiono la tecla" + " " + e.key);
    resultadoCero.focus();
  });

  if (divResultado.length < 1) {
    resultadoCero.innerHTML =
      "<h2>" + "No se encuentra el producto en la base de datos" + "</h2>";
  }
});
