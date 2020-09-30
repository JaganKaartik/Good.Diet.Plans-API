const express = require("express");
const serverless = require("serverless-http");
const diet = require("./diet");

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Welcome to Good Diet Plans API!",
  });
});

router.get("/diet/all", (req, res) => {
  res.send(diet);
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
