var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var vendaSchema = new Schema({
    nf: String,
    valor: Number,
    produtos: String
});

module.exports = mongoose.model('Venda', vendaSchema);