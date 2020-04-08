const Product = require("./../models/product");

exports.post = (data) => {
  const product = new Product(data);

  return product.save();
};

exports.get = () => {
  return Product.find();
};

exports.getById = (id) => {
  return Product.findById(id);
};

exports.put = (id, data) => {
  return Product.findByIdAndUpdate(
    id,
    {
      $set: data,
    },
    { new: true }
  );
};

exports.delete = (id) => {
  return Product.findByIdAndDelete(id);
};
