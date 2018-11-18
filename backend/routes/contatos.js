let express = require('express');
let router = express.Router();
const ContatoDB = require('../model/ContatoDB');
const exec = require('../utils');

router.get('/', exec(async (req, res, next) => {
    let contatos = await ContatoDB.getContatos();
    res.status(200).json(contatos);
}));

router.get('/:id', exec(async (req, res, next) => {
    let id = req.params.id;
    let contato = await ContatoDB.getContatoById(id);
    res.status(200).json(contato);
}));

router.delete('/:id', exec(async (req, res, next) => {
    let id = req.params.id;
    let rowCount = await ContatoDB.deleteById(id);
    res.status(200).json({ msg: "Contato removido com sucesso" });
}));

router.post('/', exec(async (req, res, next) => {
    let contato = req.body;
    contato = await ContatoDB.save(contato);
    res.status(200).json(contato);
}));

router.put('/', exec(async (req, res, next) => {
    let contato = await ContatoDB.update(req.body);
    res.status(200).json({ msg: "Contato atualizado com sucesso" });
}));

module.exports = router;