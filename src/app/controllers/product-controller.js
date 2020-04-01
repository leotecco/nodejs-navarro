const Product = require("./../models/product");

exports.post = function(req, res) {
  const product = new Product();
  product.nome = req.body.nome;
  product.preco = req.body.preco;
  product.descricao = req.body.descricao;

  product.save(function(error) {
    if (error) res.send("Erro ao salvar produto" + error);

    res.status(201).json({ message: "Produto inserido com sucesso" });
  });
};

exports.getAll = function(req, res) {
  Product.find(function(err, products) {
    if (err) res.send(err);

    res.status(200).json({
      message: "Produtos retornados",
      products
    });
  });
};

exports.get = function(req, res) {
  const id = req.params.productId;

  Product.findById(id, function(err, product) {
    if (err) {
      res.send(err);
    } else if (product === null) {
      res.status(400).json({
        message: "Produto não encontrado"
      });
    } else {
      res.status(200).json({
        message: "Produtos retornados",
        product
      });
    }
  });
};

exports.put = function(req, res) {
  const id = req.params.productId;

  Product.findById(id, function(err, product) {
    if (err) {
      res.send(err);
    } else if (product === null) {
      res.status(400).json({
        message: "Produto não encontrado"
      });
    } else {
      product.nome = req.body.nome;
      product.preco = req.body.preco;
      product.descricao = req.body.descricao;

      product.save(function(error) {
        if (error) res.send("Erro ao tentar atualizar um produto" + error);

        res
          .status(201)
          .json({ message: "Produto atualizado com sucesso", product });
      });
    }
  });
};

exports.delete = function(req, res) {
  const id = req.params.productId;

  Product.findByIdAndRemove(id, function(err) {
    if (err)
      return res
        .status(500)
        .send("Erro ao tentar atualizar um produto" + error);

    res.status(201).json({ message: "Produto removido com sucesso" });
  });
};
