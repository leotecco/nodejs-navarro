const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const logger = require("./src/app/logger");

const PORT = process.env.port || 3000;

const indexRoutes = require("./src/app/routes/index-routes");
const userRoutes = require("./src/app/routes/user-routes");
const productRoutes = require("./src/app/routes/product-routes");
const authRoutes = require("./src/app/routes/auth-routes");
// const clientRoute = require("./src/app/routes/client-routes");
// const vendaRoute = require("./src/app/routes/venda-routes");

mongoose.connect(
  "mongodb+srv://leotecco:leotecco@cluster0-8hzev.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

logger.init();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api", indexRoutes);
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);
// app.use("/api/client", clientRoute);
// app.use("/api/venda", vendaRoute);

app.listen(PORT, () => {
  console.log("server on");
});
