window.addEventListener("load", (e) => {
  let allConteiner = document.querySelector(".productosDestacados");
  let buy = [];
  console.log(allConteiner);
  loadEvent();
  function loadEvent() {
    allConteiner.addEventListener("click", addProduct);
  }

  function addProduct(e) {
    e.preventDefault();
    if (e.target.classList.contains("productsCardButton")) {
      const selectProduct = e.target.parentElement;
      console.log(selectProduct);
      readContent(selectProduct);
    }
  }

  function readContent(product) {
    const infoProduct = {
      //   image: product.querySelector(".divImg img").src,
      //   precio: product.querySelector("p").textContent,
      //   nombre: product.querySelector(".cardTitle").textContent,
      //   cantidad: 1,
    };
    buy = [...buy, infoProduct];
    console.log(infoProduct);
  }
});
