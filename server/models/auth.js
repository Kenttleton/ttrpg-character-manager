const mongoose = require("mongoose");

const authSchema = new mongoose.Schema({
  id: { type: String, default: null},
  token: { type: String, default: null },
  valid: { type: Boolean, default: null },
  expiration: { type: Date },
});

module.exports = mongoose.model("auth", authSchema);