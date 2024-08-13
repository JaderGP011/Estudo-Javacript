// Express
const express = require("express");
const app = express();
const PORT = 3001;

//rota = Diferentes caminhos que o app pode tomar

//localhost:3001
app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html"); 
    //__dirname pega o diretório absoluto da aplicação. (Isso é bom para evitar erros)
})
//localhost:3001/sobre
app.get("/sobre", function(req, res){
    res.sendFile(__dirname + "/html/sobre.html");
})

//localhost:3001/blog
app.get("/blog", function(req, res) {
    res.send("top 3 formas de comer pamonha");
})

app.get('/ola/:cargo/:nome/:cor', function(req, res) { // /ola/:nome/:cargo (nome e cargo são parametros que podem ser passados pela url)
    res.send("<h2>seu carro é "+req.params.cor + "</h2>"); //OBS: res.send só pode ser usado UMA ÚNICA VEZ DENTRO DE UMA ROTA!
})
app.listen(PORT, function() {
    console.log(`Servidor funcionando na porta http://localhost:${PORT}`); // app.listen deve der a ultima linha do codigo
});

//Express é um framework orientado à rotas.