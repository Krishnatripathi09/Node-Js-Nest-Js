const http = require("http");

const server = http.createServer(function (req, res) {
  //reply with hello world

  if (req.url === "/getSecretData") {
    res.end("Chala Ja Bhosiya: No Secret Data :)");
  }
  res.end("Hello World!");
});

server.listen(7777);
