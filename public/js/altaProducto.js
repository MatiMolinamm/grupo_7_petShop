window.addEventListener("load", function (e) {
  
  let form = document.querySelector(".form");

  let image = document.querySelector("#image");
  let dangerImage = document.querySelector("#dangerImage");

  let nombre = document.querySelector("#name");
  let dangerNombre = document.querySelector("#dangerName");

  let description = document.querySelector("#description");
  let dangerDescription = document.querySelector("#dangerDescription");

  let price = document.querySelector("#price");
  let dangerPrice = document.querySelector("#dangerPrice");

  let peso = document.querySelector("#peso");
  let dangerPeso = document.querySelector("#dangerPeso");

  let stock = document.querySelector("#stock");
  let dangerStock = document.querySelector("#dangerStock");

  let categoria = document.querySelector("#categoria");
  let dangerCategoria = document.querySelector("#dangerCategoria");

  let oferta = document.querySelector("#oferta");
  let dangerOferta = document.querySelector("#dangerOferta");

  let amount = document.querySelector("#amount");
  let dangerAmount = document.querySelector("#dangerAmount");


  image.addEventListener("mouseover", function (e) {
    image.style.border = "1px solid green";
  });
  image.addEventListener("mouseout", function (e) {
    image.style.border = "1px dashed orange";
  });
  nombre.addEventListener("mouseover", function (e) {
    nombre.style.border = "1px solid green";
  });
  nombre.addEventListener("mouseout", function (e) {
    nombre.style.border = "1px dashed orange";
  });
  description.addEventListener("mouseover", function (e) {
    description.style.border = "1px solid green";
  });
  description.addEventListener("mouseout", function (e) {
    description.style.border = "1px dashed orange";
  });
  price.addEventListener("mouseover", function (e) {
    price.style.border = "1px solid green";
  });
  price.addEventListener("mouseout", function (e) {
    price.style.border = "1px dashed orange";
  });
  peso.addEventListener("mouseover", function (e) {
    peso.style.border = "1px solid green";
  });
  peso.addEventListener("mouseout", function (e) {
    peso.style.border = "1px dashed orange";
  });
  stock.addEventListener("mouseover", function (e) {
    stock.style.border = "1px solid green";
  });
  stock.addEventListener("mouseout", function (e) {
    stock.style.border = "1px dashed orange";
  });
  categoria.addEventListener("mouseover", function (e) {
    categoria.style.border = "1px solid green";
  });
  categoria.addEventListener("mouseout", function (e) {
    categoria.style.border = "1px dashed orange";
  });  
  oferta.addEventListener("mouseover", function (e) {
    oferta.style.border = "1px solid green";
  });
  oferta.addEventListener("mouseout", function (e) {
    oferta.style.border = "1px dashed orange";
  });
  amount.addEventListener("mouseover", function (e) {
    amount.style.border = "1px solid green";
  });
  amount.addEventListener("mouseout", function (e) {
    amount.style.border = "1px dashed orange";
  });




  form.addEventListener("submit", function (e) {

    let errores = [];

    if (!image.value) {
      errores.push("Debes completar el campo imagen");
      dangerImage.innerHTML = "<p>" + "Debes subir una imagen" + "</p>";
      image.style.border = "1px solid red";
    } else dangerImage.style.display = "none";

    if (!nombre.value) {
      errores.push("Debes completar el campo nombre");
      dangerNombre.innerHTML = "<p>" + "Debes completar el campo nombre" + "</p>";
      nombre.style.border = "1px solid red";
    } else dangerNombre.style.display = "none";

    if (!description.value) {
      errores.push("Debes completar el campo descripción");
      dangerDescription.innerHTML = "<p>" + "Debes completar la descripción" + "</p>";
      description.style.border = "1px solid red";
    } else dangerDescription.style.display = "none";

    if (!price.value) {
      errores.push("Debes completar precio");
      dangerPrice.innerHTML = "<p>" + "Debes completar el campo precio" + "</p>";
      price.style.border = "1px solid red";
    } else dangerPrice.style.display = "none";

    if (!peso.value) {
      errores.push("Debes completar el campo peso");
      dangerPeso.innerHTML = "<p>" + "Debes elegir el tamaño del producto" + "</p>";
      peso.style.border = "1px solid red";
    } else dangerPeso.style.display = "none";

    if (!stock.value) {
      errores.push("Debes completar el campo stock");
      dangerStock.innerHTML = "<p>" + "Debes indicar el stock" + "</p>";
      stock.style.border = "1px solid red";
    } else dangerStock.style.display = "none";

    if (!categoria.value) {
      errores.push("Debes completar el campo categoría");
      dangerCategoria.innerHTML = "<p>" + "Debes elegir una categoría" + "</p>";
      categoria.style.border = "1px solid red";
    } else dangerCategoria.style.display = "none";

    if (!oferta.value) {
      errores.push("Debes completar el campo oferta");
      dangerOferta.innerHTML = "<p>" + "Debes elegir una opción" + "</p>";
      oferta.style.border = "1px solid red";
    } else dangerOferta.style.display = "none";

    if (!amount.value) {
      errores.push("Debes completar el campo cantidad");
      dangerAmount.innerHTML = "<p>" + "Debes completar el campo cantidad" + "</p>";
      amount.style.border = "1px solid red";
    } else dangerAmount.style.display = "none";    
    
    if (errores.length > 0) {
      console.log(errores);
      e.preventDefault();
    }

  });
});
