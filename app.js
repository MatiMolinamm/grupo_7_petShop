// Required modules
const express = require("express");
const path = require("path");
const app = express();
// Required routers
const routerMain = require("./routes/main");
const routerProductos = require("./routes/product");
const publicPath = path.resolve(__dirname, "./public");
// Config
app.set("view engine", "ejs");
app.use(express.static(publicPath));
app.use(express.json());

// Routes
app.use("/", routerMain);
app.use("/productos", routerProductos);

app.listen(3000, () => console.log("servidor funcionando en puerto 3000"));
