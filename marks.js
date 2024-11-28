const mongoose = require("mongoose");

const MarksSchema = new mongoose.Schema({
    date: date,
    mark: Number,
    subjects:[SubjectsSchema],
})

module.exports = mongoose.model("Mark", MarksSchema, "marks")