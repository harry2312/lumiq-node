const app = require("./app");
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
