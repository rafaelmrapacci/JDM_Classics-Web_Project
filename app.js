// var local = 8080
var heroku = process.env.PORT || 3000;

var express = require("express");
var cors = require("cors");
var path = require("path");
const host = '0.0.0.0';

var app = express();

var router = require("./src/routes/mainRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/mainRoutes", router);

app.listen(heroku, host, function () {
    console.log(`Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar: http://localhost:${heroku}`);
});