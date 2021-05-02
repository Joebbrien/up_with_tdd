const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      unique: true,
      required: true,
    },
    status: {
      type: String,
      default:"Closed",
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("users", userSchema);
