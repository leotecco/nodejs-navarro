const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const dotenvSafe = require("dotenv-safe");
const logger = require("./src/app/logger");

dotenvSafe.config();

const PORT = process.env.port || 3000;

const authorizeMiddleware = require("./src/app/middlewares/authorize-middleware");

const indexRoutes = require("./src/app/routes/index-routes");
const authRoutes = require("./src/app/routes/auth-routes");
const userRoutes = require("./src/app/routes/user-routes");
const productRoutes = require("./src/app/routes/product-routes");

mongoose.connect(
  "mongodb+srv://leotecco:leotecco@cluster0-8hzev.mongodb.net/test?retryWrites=true&w=majority",
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

logger.init();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api", indexRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", authorizeMiddleware, userRoutes);
app.use("/api/products", authorizeMiddleware, productRoutes);

app.listen(PORT, () => {
  console.log("server on");
});
