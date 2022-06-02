CREATE TABLE JDM_usuario(
idUsuario INT PRIMARY KEY IDENTITY(1000, 1),
nome VARCHAR(45),
sobrenome VARCHAR(70),
senha VARBINARY(150),
urlFotoPerfil VARCHAR(250));

CREATE TABLE JDM_quiz (
idQuiz INT IDENTITY(1, 1),
fkUsuario INT,
FOREIGN KEY (fkUsuario) REFERENCES JDM_usuario(idUsuario),
PRIMARY KEY (idQUiz, fkUsuario),
pontuacao INT,
dtHora DATETIME DEFAULT CURRENT_TIMESTAMP);

CREATE TABLE JDM_carroUser (
idCarroUser INT IDENTITY (1, 1),
fkUsuario INT,
FOREIGN KEY (fkUsuario) REFERENCES JDM_usuario(idUsuario),
PRIMARY KEY (idCarroUser, fkUsuario),
modelo VARCHAR(70),
urlImagemCarro VARCHAR(250));