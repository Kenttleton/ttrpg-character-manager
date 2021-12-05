const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: { type: String, unique: true},
  profile: { type: Object },
  name: { type: String, unique: true },
  email: { type: String, unique: true },
  password: { type: String },
  token: { type: String },
});

module.exports = mongoose.model("user", userSchema);