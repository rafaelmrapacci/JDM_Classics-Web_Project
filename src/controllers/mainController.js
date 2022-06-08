var mainModel = require("../models/mainModel");

function entrar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        
        mainModel.entrar(email, senha)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); 

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function verificar(req, res) {
    var nome = req.body.nomeServer;
    var sobrenome = req.body.sobrenomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (sobrenome == undefined) {
        res.status(400).send("Seu sobrenome está undefined!");
    } else {
        
        mainModel.verificar(email, senha)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); 

                    if (resultado.length > 0) {
                        res.json({message: 'teste'}).status(200);
                    } else {
                        mainModel.cadastrar(nome, sobrenome, email, senha)
                        .then(
                            function (resultado) {
                                console.log(resultado);
                                res.json({ok: 'ok'});
                            }
                        ).catch(
                            function (erro) {
                                console.log(erro);
                                console.log(
                                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                                    erro.sqlMessage
                                );
                                res.status(500).json(erro.sqlMessage);
                            }
                        );
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar a verificação! Erro: ", erro);
                    res.status(500).json(erro);
                }
            );
    }
}

function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var sobrenome = req.body.sobrenomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (sobrenome == undefined) {
        res.status(400).send("Seu sobrenome está undefined!");
    } else {
        
        mainModel.cadastrar(nome, sobrenome, email, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function enviarResultado(req, res) {
    var pontuacao = req.body.pontuacaoServer
    var idUser = req.body.idUsuarioServer

    if (pontuacao == undefined) {
        res.status(400).send("Sua pontuacao está undefined!");
    } else if (idUser == undefined) {
        res.status(400).send("Seu ID está undefined!");
    } else {
        
        mainModel.enviarResultado(pontuacao, idUser)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function getLeaders1(req, res) {
    var idUser = req.params.idUser

    if (idUser == undefined) {
        res.status(400).send("idUsuario undefined")
    } else {
        mainModel.getLeaders1(idUser)
            .then(
                function(resultado) {
                    res.json(resultado)
                }
            ).catch(
                function(erro) {
                    console.log(erro);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function getLeaders2(req, res) {
    var idUser = req.params.idUser

    if (idUser == undefined) {
        res.status(400).send("idUsuario undefined")
    } else {
        mainModel.getLeaders2(idUser)
            .then(
                function(resultado) {
                    res.json(resultado)
                }
            ).catch(
                function(erro) {
                    console.log(erro);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function getLeaders3(req, res) {
    var idUser = req.params.idUser

    if (idUser == undefined) {
        res.status(400).send("idUsuario undefined")
    } else {
        mainModel.getLeaders3(idUser)
            .then(
                function(resultado) {
                    res.json(resultado)
                }
            ).catch(
                function(erro) {
                    console.log(erro);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function getLeaders4(req, res) {
    var idUser = req.params.idUser

    if (idUser == undefined) {
        res.status(400).send("idUsuario undefined")
    } else {
        mainModel.getLeaders4(idUser)
            .then(
                function(resultado) {
                    res.json(resultado)
                }
            ).catch(
                function(erro) {
                    console.log(erro);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    entrar,
    cadastrar,
    verificar,
    enviarResultado,
    getLeaders1,
    getLeaders2,
    getLeaders3,
    getLeaders4,
}