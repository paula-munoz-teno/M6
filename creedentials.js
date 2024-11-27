
const mongoose = require("mongoose");

// const CreedentialsSchema = new mongoose.Schema({
//     address: String,
//     phone: String,
//     email: String
// })

// module.exports = mongoose.model("Creedential", CreedentialsSchema, "creedentials")

// const mongoose = require("mongoose");

const CreedentialsSchema = new mongoose.Schema({
    address: String,
    phone: {
        type:String,
        validate: [
            function(phone)
            {
              return phone.length == 9;
            },
           'El teléfono debe tener 9 dígitos'],
    },
    email: String
})

module.exports = mongoose.model("Creedential", CreedentialsSchema, "creedentials")
