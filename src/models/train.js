const mongoose = require("mongoose");

const trainSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  }
});

module.exports = mongoose.model("Train", trainSchema);
