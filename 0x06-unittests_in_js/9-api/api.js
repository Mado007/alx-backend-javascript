const express = require("express");
const app = express();

app.get("/", (_, res) => {
  res.send("Welcome to the payment system");
});

app.get("/cart/:id([0-9]+)", (req, res) => {
  const id = parseInt(req.params.id);
  res.send(`Payment methods for cart ${id}`);
});

app.listen(7865, () => {
  console.log("API available on localhost port 7865");
});
