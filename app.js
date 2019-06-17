var http = require("http");
var fs = require("fs");

var myReadStream = fs.createReadStream(__dirname + "/readMe.txt", "utf8");

myReadStream.on("data", chunk => {
  console.log("New chunk received");
  console.log(chunk);
});

// var server = http.createServer((req, res) => {
//   console.log("Request was made: " + req.url);
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Hey Ninjas");
// });

// server.listen(3000, "127.0.0.1");

// console.log("Now listening to port 3000...");
