const express = require("express");
const {Terminal} = require("xterm");
const app = express();
const port = 3000;

  var global = global || window;
  var Buffer = Buffer || [];
  var process = process || {
    env: { DEBUG: undefined },
    version: []
  };


app.get("/", (req, res) => {
  res.send("index.html")
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});