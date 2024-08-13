var http = require("http");

http.createServer(function(req, res) { //criação do servidor
    res.end("oi"); // msg na tela
}).listen(3000);

console.log("https://localhost:3000")