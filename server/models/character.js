const mongoose = require("mongoose");

const characterSchema = new mongoose.Schema({
  id: { type: String, default: null},
  name: { type: String, default: null },
  image: { type: String, default: null },
  icon: { type: String, default: 'mdi-account' },
});

module.exports = mongoose.model("character", characterSchema);