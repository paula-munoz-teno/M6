const mongoose = require("mongoose");

// const ProfileSchema = new mongoose.Schema({
//     name: String,
//     surename: String,
//     dateOfBirth: String,
//     comments: String,
//     role:String
// })

// module.exports = mongoose.model("Profile", ProfileSchema, "profile")


// const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
    name: String,
    surename: String,
    dateOfBirth: String,
    comments:{
        type: String,
        required: true,
        maxlength: 300},
    role:{
            type: String,
            enum: ["docente", "estudiante", "jefe"]
          }
})

module.exports = mongoose.model("Profile", ProfileSchema, "profile")