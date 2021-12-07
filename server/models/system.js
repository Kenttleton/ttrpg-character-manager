const mongoose = require("mongoose");

const systemSchema = new mongoose.Schema({
  id: { type: String, default: null},
  name: { type: String, default: null },
  character: { type: String, default: null },
  configuration: { type: String, default: null },
});

module.exports = mongoose.model("system", systemSchema);