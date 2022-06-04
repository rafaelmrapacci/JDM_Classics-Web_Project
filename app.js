var express = require("express");
var cors = require("cors");
var path = require("path");
// var PORTA = 8080;

var app = express();

var router = require("./src/routes/mainRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/mainRoutes", router);

app.listen(5000, function () {
    console.log(`Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar: http://localhost:${5000}`);
});