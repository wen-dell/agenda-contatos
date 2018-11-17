CREATE DATABASE agenda;

USE agenda;

CREATE TABLE contato (
    id BIGINT AUTO_INCREMENT,
    nome VARCHAR(255),
    email VARCHAR(255),
    telefone VARCHAR(30),
    data_registro DATE,
    PRIMARY KEY(id)
);

-- Inserindo alguns contatos para poder testar
INSERT INTO contato (nome, email, telefone, data_registro)
    VALUES('Maria da Silva', 'maria.silva@gmail.com', '(84) 9999-8989', CURRENT_DATE());

INSERT INTO contato (nome, email, telefone, data_registro)
    VALUES('João Silveira', 'joao.silveira@gmail.com', '(84) 8989-7979', CURRENT_DATE());