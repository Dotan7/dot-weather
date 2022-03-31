const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const path = require("path");
const bodyParser = require("body-parser");

app.use(bodyParser());

if (process.env.PROD) {
  app.use(express.static(path.join(__dirname, "./client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
}

const PORT = process.env.PORT || 2002;
server.listen(PORT, () => {
  console.log("server is running on port: ", PORT);
});
