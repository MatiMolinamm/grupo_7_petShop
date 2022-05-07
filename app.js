const express = require("express");
const path = require("path");
const app = express();
const routerMain = require("./routes/main");
const routerProductos = require("./routes/product");

app.set("view engine", "ejs");

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.listen(3000, () => console.log("servidor funcionando en puerto 3000"));

app.use("/", routerMain);
app.use("/index", routerMain);
app.use("/register", routerMain);
app.use("/login", routerMain);
app.use("/productos", routerProductos);

