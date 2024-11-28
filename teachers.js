const mongoose = require("mongoose");

const TeachersSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    groups: [{type:String}],
    //como especifico que es un array de string, ¿es necesario?
})

module.exports = mongoose.model("Teacher", TeachersSchema, "teachers")