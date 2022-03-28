const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
  res.send("Hello World = kartik");
});

app.listen(port, function () {
  console.log(`server is running at ${port}`);
});
