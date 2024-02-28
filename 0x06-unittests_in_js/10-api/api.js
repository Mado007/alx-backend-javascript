const express = require("express");
const app = express();

app.get("/", (_, res) => {
  res.send("Welcome to the payment system");
});

app.get("/cart/:id(\\d+)", (req, res) => {
  const id = parseInt(req.params.id);
  res.send(`Payment methods for cart ${id}`);
});

app.get("/available_payments", (req, res) => {
  res.set("Content-Type", "application/json");
  res.send({
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  });
});

app.use(express.json());

app.post("/login", (req, res) => {
  const username = req.body.userName;
  if (!username) {
    res.status(404).send();
  } else {
    res.send(`Welcome ${username}`);
  }
});

app.listen(7865, () => {
  console.log("API available on localhost port 7865");
});
