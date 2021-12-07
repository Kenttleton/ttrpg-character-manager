const mongoose = require("mongoose");

const characterSchema = new mongoose.Schema({
  id: { type: String, default: null},
  user_id: { type: String, default: null},
  order: { type: Number, default: null},
  name: { type: String, default: null },
  image: { type: String, default: null },
  icon: { type: String, default: 'mdi-account' },
  system: { type: String, default: null },
  system_character_id: { type: String, default: null },
});

module.exports = mongoose.model("character", characterSchema);