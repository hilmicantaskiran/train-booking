const mongoose = require("mongoose");

const responseSchema = new mongoose.Schema({
  "cabBeBooked": {
    type: Boolean,
    required: true
  },
  "placementDetail": {
    type: Array,
    required: true
  }
});

module.exports = mongoose.model("Response", responseSchema);