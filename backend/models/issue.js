const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const issueSchema = new Schema({
    assignTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        // required: true,
    },
    description: {
        type: String,
        trim: true,
        required: "Enter a description.",
    },
    userThatSubmitted: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        // required: true,
    },
    issue_created_on: {
        type: Date,
        required: true,
        default: Date.now(),
    },
    priority: {
        type: String,
        required: true,
    },
    related_project: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    progress: {
        type: String,
        // required: true,
    },

    created_on: {
        type: Date,
        required: true,
        default: Date.now(),
    },
    created_by: {
        type: String,
        // required: true,
    },
    modified_on: {
        type: Date,
        // required: true,
        default: Date.now(),
    },
    modified_by: {
        type: String,
        // required: true,
    },
});

const Issue = mongoose.model("issue", issueSchema);

module.exports = Issue;