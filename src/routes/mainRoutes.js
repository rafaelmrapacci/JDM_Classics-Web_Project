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

router.get("/getLeaders1/:idUser", function (req, res) {
    controller.getLeaders1(req, res)
});

router.get("/getLeaders2/:idUser", function (req, res) {
    controller.getLeaders2(req, res)
});

router.get("/getLeaders3/:idUser", function (req, res) {
    controller.getLeaders3(req, res)
});

router.get("/getLeaders4/:idUser", function (req, res) {
    controller.getLeaders4(req, res)
});

module.exports = router;