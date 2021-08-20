const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "please enter the users first nmae and lastname.",
  },
  username: {
    type: String,
    trim: true,
    required: "Enter a name for the person assigned to this project.",
  },
  email: {
    type: String,
    required: "Enter a email.",
  },
  role: {
    type: String,
    required: true,
  },
  assigned_project: {
    tpye: Number,
  },
  created_on: {
    type: Date,
    required: true,
  },
  created_by: {
    type: String,
    required: true,
  },
  modified_on: {
    type: Date,
  },
  modified_by: {
    type: String,
  },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
