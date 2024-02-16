const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  imgUrl: {
    type: String,
    required: [false, "The image url is required"],
  },
  username: {
    type: String,
    required: [true, "Your username is required"],
  },
  challengeName: {
    type: String,
    required: [true, "Challenge Name is required"],
  },
  givenHeading: {
    type: String,
    required: [true, "The given heading is required"],
  }
});


module.exports = mongoose.model("Post", userSchema);