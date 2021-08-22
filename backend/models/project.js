const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const projectSchema = new Schema({
  project_name: {
    type: String,
    required: true,
  },
  start_date: {
    type: Date,
    required: true,
    default: Date.now() * 29,
  },
  target_end_date: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  actual_end_date: {
    type: Date,
    default:Date.now(),
  },
  created_on: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  created_by: {
    type: String,
    required: true,
  },
  modified_on: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  modified_by: {
    type: String,
    required: true,
  },
});

const Project = mongoose.model("project", projectSchema);

module.exports = Project;
