const express = require("express");
const routes = require("./src/routes");
const { handleCors } = require("./src/middlewares");

const app = express();
app.use(express.json());

app.use(handleCors);

app.use(routes);

process.on("unhandledRejection", function (err) {
  console.error("UnhandledRejection error" + err);
});
process.on("uncaughtException", function (error) {
  console.error("uncaughtException" + error);
  console.error("Error Stack", error.stack);
});

app.listen(process.env.PORT || 3000, (err) => {
  err && console.error(err);
  console.log(`Worker added with id ${process.pid}`);
});
