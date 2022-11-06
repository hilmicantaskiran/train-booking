const mongoose = require("mongoose");

const wagonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  numberOfFullSeats: {
    type: Number,
    required: true,
  },
  connectedTrain: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Train",
  },
});

module.exports = mongoose.model("Wagon", wagonSchema);
