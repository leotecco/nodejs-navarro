const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  password: Number
});

module.exports = mongoose.model("User", userSchema);
