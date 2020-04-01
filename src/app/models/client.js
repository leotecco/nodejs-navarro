var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var clientSchema = new Schema({
    nome: String,
    cpf: String,
    idade: Number
});

module.exports = mongoose.model('Cliente', clientSchema);