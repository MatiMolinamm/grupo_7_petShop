window.addEventListener("load", function (e) {
  let form = document.querySelector(".productEditForm");
  let image = document.querySelector("#image");
  let dangerImage = document.querySelector("#dangerImage");
  let nombre = document.querySelector("#name");
  let dangerNombre = document.querySelector("#dangerName");
  let description = document.querySelector("#description");
  let dangerDescription = document.querySelector("#dangerDescription");
  let price = document.querySelector("#price");
  let dangerPrice = document.querySelector("#dangerPrice");
  let stock = document.querySelector("#stock");
  let dangerStock = document.querySelector("#dangerStock");
  let amount = document.querySelector("#amount");
  let dangerAmount = document.querySelector("#dangerAmount");
  let oferta = document.querySelector("#oferta");
  let dangerOferta = document.querySelector("#dangerOferta");

  let peso = document.querySelector("#peso");
  let dangerPeso = document.querySelector("#dangerPeso");
  console.log(oferta.value);

  image.addEventListener("mouseover", function (e) {
    image.style.border = "1px solid green";
  });
  image.addEventListener("mouseout", function (e) {
    image.style.border = "1px dashed green";
  });

  nombre.addEventListener("mouseover", function (e) {
    nombre.style.border = "1px solid green";
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

  peso.addEventListener("mouseover", function (e) {
    peso.style.border = "0.2px solid green";
  });
  peso.addEventListener("mouseout", function (e) {
    peso.style.border = "";
  });

  description.addEventListener("mouseover", function (e) {
    description.style.border = "1px solid green";
  });
  description.addEventListener("mouseout", function (e) {
    description.style.border = "1px dashed green";
  });

  price.addEventListener("mouseover", function (e) {
    price.style.border = "1px solid green";
  });
  price.addEventListener("mouseout", function (e) {
    price.style.border = "1px dashed green";
  });

  peso.addEventListener("mouseover", function (e) {
    peso.style.border = "1px solid green";
  });
  peso.addEventListener("mouseout", function (e) {
    peso.style.border = "1px dashed green";
  });

  stock.addEventListener("mouseover", function (e) {
    stock.style.border = "1px solid green";
  });
  stock.addEventListener("mouseout", function (e) {
    stock.style.border = "1px dashed green";
  });

  categoria.addEventListener("mouseover", function (e) {
    categoria.style.border = "1px solid green";
  });
  categoria.addEventListener("mouseout", function (e) {
    categoria.style.border = "1px dashed green";
  });

  amount.addEventListener("mouseover", function (e) {
    amount.style.border = "1px solid green";
  });
  amount.addEventListener("mouseout", function (e) {
    amount.style.border = "1px dashed green";
  });

  oferta.addEventListener("mouseover", function (e) {
    oferta.style.border = "1px solid green";
  });
  oferta.addEventListener("mouseout", function (e) {
    oferta.style.border = "1px dashed green";
  });

  form.addEventListener("submit", function (e) {
    let errores = [];

    if (!image.value) {
      errores.push("Debes completar el campo image");
      dangerImage.innerHTML = "<p>" + "Debes completar el campo image" + "</p>";
      image.style.border = "1px solid red";
    } else dangerImage.style.display = "none";

    if (!nombre.value) {
      errores.push("Debes completar el campo nombre");
      dangerNombre.innerHTML =
        "<p>" + "Debes completar el campo nombre" + "</p>";
    } else dangerNombre.style.display = "";

    // if (image.value === "") {
    //   errores.push("Debes completar el campo imagen");
    //   dangerImage.innerHTML = "<p>" + "Debes completar el campo" + "</p>";
    // } else dangerImage.style.display = "";

    if (price.value === "") {
      errores.push("Debes completar el campo precio");
      dangerPrice.innerHTML = "<p>" + "Debes completar el campo" + "</p>";
    } else dangerPrice.style.display = "";

    if (!stock.value) {
      errores.push("Debes completar el campo email");
      dangerStock.innerHTML = "<p>" + "Debes completar el campo" + "</p>";
    } else dangerStock.style.display = "none";

    // if (categoria.value === "") {
    //   errores.push("Debes completar el campo categoría");
    //   dangerCategoria.innerHTML = "<p>" + "Debes completar el campo" + "</p>";
    // } else dangerCategoria.style.display = "none";

    if (!amount.value) {
      errores.push("Debes completar el campo ");
      dangerAmount.innerHTML = "<p>" + "Debes completar el campo" + "</p>";
    } else dangerAmount.style.display = "";

    if (oferta.value === "") {
      errores.push("Debes completar el campo oferta");
      dangerOferta.innerHTML = "<p>" + "Debes completar el campo" + "</p>";
    } else dangerOferta.style.display = "none";

    if (!peso.value) {
      errores.push("Debes completar el campo peso");
      dangerPeso.innerHTML = "<p>" + "Debes completar el campo" + "</p>";
    } else dangerPeso.style.display = "";

    if (description.value == 0) {
      errores.push("descripcion");
      dangerDescription.innerHTML =
        "<p>" + "Debes completar el campo descripcion" + "</p>";
    } else dangerDescription.style.display = "";

    if (errores.length > 0) {
      console.log(errores);
      e.preventDefault();
    }
  });
});
