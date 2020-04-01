const express = require('express')
var router = express.Router(); //Interceptacao das rotas

var Cliente = require("../app/models/client");

router.post("/", function(req,res){
        var cliente = new Cliente();
        cliente.nome = req.body.nome;
        cliente.cpf = req.body.cpf;
        cliente.idade = req.body.idade;

       cliente.save(function(error){
            if(error)
                res.send("Erro ao salvar cliente" + error);

            res.status(201).json({message:'Cliente cadastrado com sucesso'});
        });
    });

    router.get("/", function(req, res){
        Cliente.find(function(err, clien){
            if(err)
                res.send(err);
            
            res.status(200).json({
                message: 'Cadastros retornados',
                clientes: clien
            });
        });
    });

module.exports = router;