const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  id: { type: String, default: null},
  first_name: { type: String, default: null },
  last_name: { type: String, default: null },
  image: { type: String, default: null },
  icon: { type: String, default: 'mdi-account' },
});

module.exports = mongoose.model("profile", profileSchema);