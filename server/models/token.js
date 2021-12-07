const mongoose = require("mongoose");

const tokenSchema = new mongoose.Schema({
  id: { type: String, default: null},
  user_id: { type: String, default: null},
  token: { type: String, default: null },
  valid: { type: Boolean, default: null },
  expiration: { type: Date },
});

module.exports = mongoose.model("token", tokenSchema);