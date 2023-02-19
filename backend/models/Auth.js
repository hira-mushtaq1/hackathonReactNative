const mongoose = require("mongoose");

const AuthSchema = mongoose.Schema({
  email: String,
  password: String,
});

const AuthModel = mongoose.model("Users", AuthSchema);

module.exports = AuthModel;
