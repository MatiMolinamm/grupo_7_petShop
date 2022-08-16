window.addEventListener("load", function (e) {
  let form = document.querySelector(".form");
  let image = document.querySelector("#image");
  let dangerImage = document.querySelector("#dangerImage");
  let nombre = document.querySelector("#name");
  let dangerNombre = document.querySelector("#dangerName");
  let price = document.querySelector("#price");
  let dangerPrice = document.querySelector("#dangerPrice");
  let stock = document.querySelector("#stock");
  let dangerStock = document.querySelector("#dangerStock");
  let categoria = document.querySelector("#categoria");
  let dangerCategoria = document.querySelector("#dangerCategoria");
  let amount = document.querySelector("#amount");
  let dangerAmount = document.querySelector("#dangerAmount");
  let oferta = document.querySelector("#oferta");
  let dangerOferta = document.querySelector("#dangerOferta");
  let description = document.querySelector("#description");
  console.log(description);
  console.log(description.length);
  let dangerDescription = document.querySelector("#dangerDescription");
  let peso = document.querySelector("#peso");

  let dangerPeso = document.querySelector("#dangerPeso");

  nombre.addEventListener("mouseover", function (e) {
    nombre.style.border = "0.2px solid green";
  });
  nombre.addEventListener("mouseout", function (e) {
    nombre.style.border = "";
  });
  image.addEventListener("mouseover", function (e) {
    image.style.border = "0.2px solid green";
  });
  image.addEventListener("mouseout", function (e) {
    image.style.border = "";
  });
  price.addEventListener("mouseover", function (e) {
    price.style.border = "0.2px solid green";
  });
  price.addEventListener("mouseout", function (e) {
    price.style.border = "";
  });
  stock.addEventListener("mouseover", function (e) {
    stock.style.border = "0.2px solid green";
  });
  stock.addEventListener("mouseout", function (e) {
    stock.style.border = "";
  });
  categoria.addEventListener("mouseover", function (e) {
    categoria.style.border = "0.2px solid green";
  });
  categoria.addEventListener("mouseout", function (e) {
    categoria.style.border = "";
  });
  peso.addEventListener("mouseover", function (e) {
    peso.style.border = "0.2px solid green";
  });
  peso.addEventListener("mouseout", function (e) {
    peso.style.border = "";
  });
  description.addEventListener("mouseover", function (e) {
    description.style.border = "0.2px solid green";
  });
  description.addEventListener("mouseout", function (e) {
    description.style.border = "";
  });
  oferta.addEventListener("mouseover", function (e) {
    oferta.style.border = "0.2px solid green";
  });
  oferta.addEventListener("mouseout", function (e) {
    oferta.style.border = "";
  });
  amount.addEventListener("mouseover", function (e) {
    amount.style.border = "0.2px solid green";
  });
  amount.addEventListener("mouseout", function (e) {
    amount.style.border = "";
  });

  form.addEventListener("submit", function (e) {
    let errores = [];
    if (nombre.value === "") {
      errores.push("Debes completar el campo nombre");
      dangerNombre.innerHTML =
        "<p>" + "Debes completar el campo nombre" + "</p>";
    } else dangerNombre.style.display = "none";

    if (image.value === "") {
      errores.push("Debes completar el campo imagen");
      dangerImage.innerHTML = "<p>" + "Debes completar el campo" + "</p>";
    } else dangerImage.style.display = "none";
    if (price.value === "") {
      errores.push("Debes completar precio");
      dangerPrice.innerHTML = "<p>" + "Debes completar el campo" + "</p>";
    } else dangerPrice.style.display = "none";
    if (stock.value === "") {
      errores.push("Debes completar el campo email");
      dangerStock.innerHTML = "<p>" + "Debes completar el campo" + "</p>";
    } else dangerStock.style.display = "none";
    if (categoria.value === "") {
      errores.push("Debes completar el campo categoria");
      dangerCategoria.innerHTML = "<p>" + "Debes completar el campo" + "</p>";
    } else dangerCategoria.style.display = "none";
    if (amount.value === "") {
      errores.push("Debes completar el campo password");
      dangerAmount.innerHTML = "<p>" + "Debes completar el campo" + "</p>";
    } else dangerAmount.style.display = "none";
    if (oferta.value === "") {
      errores.push("oferta");
      dangerOferta.innerHTML = "<p>" + "Debes completar el campo" + "</p>";
    } else dangerOferta.style.display = "none";
    if (!peso.value) {
      errores.push("oferta");
      dangerPeso.innerHTML =
        "<p>" + "Debes completar el campo packagin" + "</p>";
    } else dangerPeso.style.display = "none";
    if (description.length == 0) {
      errores.push("descripcion");
      dangerDescription.innerHTML =
        "<p>" + "Debes completar el campo descripcion" + "</p>";
    } else dangerDescription.style.display = "none";
    if (errores.length > 0) {
      console.log(errores);
      e.preventDefault();
    }
  });
});
