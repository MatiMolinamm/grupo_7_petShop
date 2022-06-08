// Required modules
const express = require("express");
const path = require("path");
const app = express();
const methodOverride = require("method-override"); //para poder utilizar PUT Y DELETE
const session = require("express-session");
const cookies = require("cookie-parser");

// Required routers
const routerMain = require("./routes/main");
const routerProducts = require("./routes/products");
const routerUsers = require("./routes/users");
const publicPath = path.resolve(__dirname, "../public");

// Config
app.set("view engine", "ejs"); // para definir ejs como el motor de vistas
app.use(express.static(publicPath)); //para hacer publico los archivos
app.use(express.json()); //para que funcione el metodo post en formularios
app.use(methodOverride("_method")); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE
app.use(express.urlencoded({ extended: false })); // para que tome los datos de post
app.use(
  session({ secret: "session user", resave: false, saveUninitialized: false })
);
app.use(cookies());

// Routes
app.use("/", routerMain);
app.use("/users", routerUsers);
app.use("/products", routerProducts);

app.listen(3000, () => console.log("servidor funcionando en puerto 3000"));
