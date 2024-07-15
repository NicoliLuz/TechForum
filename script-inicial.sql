## Banco de Dados (mySQL)


CREATE DATABASE techforum; 
USE techforum; 


CREATE TABLE usuarios(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL
);

CREATE TABLE amigos(
   id_usuario INT,
   id_amigo INT,
   status VARCHAR(255),
   CONSTRAINT PK_amigos PRIMARY KEY (id_usuario, id_amigo),
   FOREIGN KEY(id_usuario) REFERENCES usuarios(id),
   FOREIGN KEY(id_amigo) REFERENCES usuarios(id)
);

CREATE TABLE postagens(
    id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(255),
    informacoes TEXT,
    datapost TIMESTAMP
);

CREATE TABLE mensagens(
    id INT PRIMARY KEY AUTO_INCREMENT,
    informacoes TEXT,
    datamensagem TIMESTAMP,
    autor_id INT,
    FOREIGN KEY(autor_id) REFERENCES usuarios(id)
);

CREATE TABLE conversas(
    id INT PRIMARY KEY AUTO_INCREMENT,
    informacoes TEXT,
    dataconversa TIMESTAMP,
    autor_id INT,
    amigo_id INT,
    FOREIGN KEY(autor_id) REFERENCES usuarios(id),
    FOREIGN KEY(amigo_id) REFERENCES usuarios(id)
);

CREATE TABLE categorias(
    id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(255),
    informacoes TEXT
);
