const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var mongoose = require('mongoose');


//PERSISTENCIA

mongoose.connect('mongodb://localhost/dbCrud', {useNewUrlParser:true});

//Configurar app para usar body-parse
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

//Definindo porta
var PORT = process.env.port || 3000;

//ROTAS
var productRoute = require("./routes/product-routes");
var clientRoute = require("./routes/client-route");
var vendaRoute = require("./routes/venda-route");
var indexRoute = require('./routes/index-routes')

//Vincular a aplicacao(app) com o motor de rotas
app.use('/api', indexRoute);
app.use('/api/products', productRoute);
app.use('/api/client', clientRoute);
app.use('/api/venda', vendaRoute);


 app.listen(PORT, () => {
     console.log("server on");
 });