const mongoose = require("mongoose");

const SubjectsSchema = new mongoose.Schema({
    title: String,
    teachers: [TeachersSchema],
})

module.exports = mongoose.model("Subject", SubjectsSchema, "subjects")