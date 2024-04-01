CREATE DATABASE techforum;
USE techforum;

CREATE TABLE usuarios(
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255),
    email VARCHAR(255),
    senha VARCHAR(255)
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

CREATE TABLE categorias(
	id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(255),
    informacoes TEXT
);
