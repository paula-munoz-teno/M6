

const mongoose = require("mongoose");



// const UserSchema = new mongoose.Schema({
//     login: String,
//     password: String,
// })

// module.exports = mongoose.model("User", UserSchema, "user")





const UserSchema = new mongoose.Schema({
    login:{
        type:String,
        select: false},
    password: {
        type: String,
        validate: [
        function(password)
        {
          return password.length >= 6;
        },
       'El password deberia de ser mas largo'],
        select: false
      },
})

module.exports = mongoose.model("User", UserSchema, "user")



UserSchema.pre('save', function(next) 
{
  console.log("Middleware de entrada");
  if (this.password.length >= 6)
  {      
    console.log("Has introducido una password adecuada")
    next();
  }
  else
    console.log("debes incrementar los dígitos del password")
});

module.exports = mongoose.model("UserValidation", UserSchema, "user");