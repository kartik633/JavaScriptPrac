const express = require("express");
const square = require("./square");
const app = express();
const port = 3000;
const wiki = require("./wiki.js");

app.use(wiki);

app.get("/", function (req, res) {
  //   res.send("Hello World = kartik");
  var ans = square.area(3);
  res.send(`ans is ${ans}`);
});

app.listen(port, function () {
  console.log(`server is running at ${port}`);
});
