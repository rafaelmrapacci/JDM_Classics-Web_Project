var express = require("express");
var router = express.Router();

var controller = require("../controllers/mainController");

router.post("/cadastrar", function (req, res) {
    controller.cadastrar(req, res);
})

router.post("/entrar", function (req, res) {
    controller.entrar(req, res);
});

router.post("/verificar", function (req, res) {
    controller.verificar(req, res)
});

router.post("/enviarResultado", function (req, res) {
    controller.enviarResultado(req, res)
});

module.exports = router;