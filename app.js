//serverless deploy --stage dev --aws-profile campus --verbose
const express = require("express");
const routes = require("./src/routes");
const { handleCors } = require("./src/middlewares");

const app = express();
app.use(express.json());

app.use(handleCors);

app.use(routes);

module.exports = app;