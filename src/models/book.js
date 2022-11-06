const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  train: {
    type: Array,
    required: true,
  },
  numberOfPeopleToBook: {
    type: Number,
    required: true,
  },
  peopleCanPlaceInDifferentWagons: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("Book", bookSchema);
