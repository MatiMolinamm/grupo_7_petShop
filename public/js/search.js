window.addEventListener("load", function (e) {

  let divResultado = document.querySelectorAll(".productos");

  let resultadoCero = document.querySelector(".resultadoCero");
  
  let homeSearch = document.querySelector("#homesearch");

  homeSearch.addEventListener("keypress", function (e) {
    //alert("se presiono la tecla" + " " + e.key);
    resultadoCero.focus();
  });

  if (divResultado.length < 1) {
    resultadoCero.innerHTML =
      "<h2>" + "No se encuentra el producto en la base de datos" + "</h2>";
  }

});
