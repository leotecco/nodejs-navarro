const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");

//PERSISTENCIA
mongoose.connect(
  "mongodb+srv://leotecco:leotecco@cluster0-8hzev.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

//Configurar app para usar body-parse
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Definindo porta
const PORT = process.env.port || 3000;

//ROTAS
const productRoute = require("./routes/product-routes");
const clientRoute = require("./routes/client-route");
const vendaRoute = require("./routes/venda-route");
const indexRoute = require("./routes/index-routes");

//Vincular a aplicacao(app) com o motor de rotas
app.use("/api", indexRoute);
app.use("/api/products", productRoute);
app.use("/api/client", clientRoute);
app.use("/api/venda", vendaRoute);

app.listen(PORT, () => {
  console.log("server on");
});
