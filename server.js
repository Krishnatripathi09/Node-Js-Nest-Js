const http = require("http");

const server = http.createServer(function (req, res) {
  //reply with hello world

  res.end("Hello World!");
});

server.listen(7777);
