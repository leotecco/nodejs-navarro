var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var vendaSchema = new Schema({
  nf: String,
  valor: Number,
  produtos: [{ type: Schema.Types.ObjectId, ref: "Product" }]
});

module.exports = mongoose.model("Venda", vendaSchema);
