var database = require("../database/config")

function verificar(email) {
    console.log("ACESSEI A MAIN MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email)
    var instrucao = `
        SELECT * FROM JDM_usuario WHERE email = '${email}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(email, senha) {
    console.log("ACESSEI A MAIN MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM JDM_usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(nome, sobrenome, email, senha) {
    console.log("ACESSEI A MAIN MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, sobrenome, email, senha);
    
    var instrucao = `
        INSERT INTO JDM_usuario (nome, sobrenome, email, senha) VALUES ('${nome}', '${sobrenome}', '${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function enviarResultado(pontuacao, idUser) {
    console.log("ACESSEI A MAIN MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", pontuacao, idUser);
    
    var instrucao = `
        INSERT INTO JDM_quiz (fkUsuario, pontuacao) VALUES (${idUser}, ${pontuacao});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function getLeaders1(idUser) {
    console.log("Acessou a main model, recebeu idUser:" + idUser);

    var instrucao = `
        select top 10 nome, sobrenome, round(avg(pontuacao),1) as MédiaAcertos from [dbo].[JDM_quiz] join [dbo].[JDM_usuario] on idUsuario = fkUsuario group by nome, sobrenome order by MédiaAcertos desc; 
    `

    return database.executar(instrucao);
}

function getLeaders2(idUser) {
    console.log("Acessou a main model, recebeu idUser:" + idUser);

    var instrucao = `
        select top 10 nome, sobrenome, count(pontuacao) as qtdRespondidos from [dbo].[JDM_quiz] join [dbo].[JDM_usuario] on idUsuario = fkUsuario group by nome, sobrenome order by qtdRespondidos desc; 
    `

    return database.executar(instrucao);
}

function getLeaders3(idUser) {
    console.log("Acessou a main model, recebeu idUser:" + idUser);

    var instrucao = `
        select count(pontuacao) as qtdRespondidoSeu, avg(pontuacao) as mediaQuizSeu from [dbo].[JDM_quiz] where fkUsuario = ${idUser} group by fkUsuario;
    `

    return database.executar(instrucao);
}

function getLeaders4(idUser) {
    console.log("Acessou a main model, recebeu idUser:" + idUser);

    var instrucao = `
        select count(pontuacao) as qtdRespondidoTotal from [dbo].[JDM_quiz];
    `

    return database.executar(instrucao);
}

module.exports = {
    entrar,
    cadastrar,
    verificar,
    enviarResultado,
    getLeaders1,
    getLeaders2,
    getLeaders3,
    getLeaders4
};