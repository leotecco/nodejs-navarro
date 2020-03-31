const express = require('express')
var router = express.Router(); //Interceptacao das rotas

var Venda = require("../app/models/venda");

router.post("/", function(req,res){
        var venda = new Venda();
        venda.nf = req.body.nf;
        venda.valor = req.body.valor;
        venda.produtos = req.body.produtos;

       venda.save(function(error){
            if(error)
                res.send("Erro ao salvar venda" + error);

            res.status(201).json({message:'Venda realizada com sucesso'});
        });
    });

    router.get("/", function(req, res){
        Venda.find().populate('produtos').exec(function(err, vend){
            if(err)
                res.send(err);
            
            res.status(200).json({
                message: 'Cadastros retornados',
                vendas: vend
            });
        });
    });

module.exports = router;