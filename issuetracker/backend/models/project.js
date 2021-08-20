const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const porductSchema = new Schema({
  project_name: {
    type: String,
    required: true,
  },
  start_date: {
    type: Date,
    requried: true,
  },
  target_end_date: {
    type: Date,
    required: true,
  },
  actual_end_date: {
    type: Date,
  },
  created_on: {
    type: Date,
    requried: true,
  },
  created_by: {
    type: String,
    required: true,
  },
  modified_on: {
    type: Date,
    required: true,
  },
  modified_by: {
    type: String,
    required: true,
  },
});
