const mongoose = require("mongoose");


const TeachersSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    groups: [{type:String}],
    //como especifico que es un array de string, ¿es necesario?
})


const SubjectsSchema = new mongoose.Schema({
    title: String,
    teachers: [TeachersSchema],
})



const MarksSchema = new mongoose.Schema({
    date: Date,
    mark: Number,
    subjects:[SubjectsSchema],
})



const StudentsSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    marks: [MarksSchema],
})

module.exports = mongoose.model("Students", StudentsSchema, "estudiantes")