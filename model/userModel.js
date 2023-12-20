const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {

    username: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true,
    },
    hobbies: {
      type: Array,
      required: true,
    },
  },

);

module.exports = mongoose.model("User", userSchema);