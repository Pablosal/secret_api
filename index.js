const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const mongoose = require("mongoose");
const { MONGO_URI } = require("./src/config");
const {
  AuthRoutes,
  UserRoutes,
  DocumentationRoutes,
} = require("./src/routes/index.routes");
const { AuthMiddleware } = require("./src/middlewares");

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const conected = mongoose.connection;
conected.once("open", () => {
  console.log("conectado en la bd");
});
conected.on("error", (err) => {
  console.log(err);
});

//middlewares
app
  .use(cors())
  .use(helmet())
  .use(express.urlencoded({ extended: true }))
  .use(express.json())
  .use(compression());

//routes
app.use("/v1/api/", DocumentationRoutes);
app.use("/v1/api/", AuthRoutes);
//swagger ui

//lanzamiento de api
app.listen(3000, () => console.log("app running in localhost:3000"));
