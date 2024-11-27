let mongoose = require("mongoose");
let user = require("./user");
let profile = require("./profile");
let creedentials = require("./creedentials");

mongoose.connect('mongodb+srv://paulamtlaboral:Platanobalun2345@m6codenotch.wi427.mongodb.net/appUser', 
                  {useNewUrlParser: false, useUnifiedTopology: false } )
.then ( () => console.log ("Conexion correcta"))
.catch ( error => console.log(error)) 

let userDocument = new user({
    login: "maria123",
    password: "mmm2001"
});

userDocument.save()
.then(resp => {
    console.log("Documento guardado correctamente")
    console.log(resp)
})
.catch(error => {
    console.log("Error: " + error)
})



mongoose.connect('mongodb+srv://paulamtlaboral:Platanobalun2345@m6codenotch.wi427.mongodb.net/appUser', 
    {useNewUrlParser: false, useUnifiedTopology: false } )
.then ( () => console.log ("Conexion correcta"))
.catch ( error => console.log(error)) 

let profileDocument = new profile({
name: "maria",
surename: "suarez lopez",
dateOfBirth: "24-02-1988",
comments: "quiero aprender pra trabajar",
role: "estudiante"
});

profileDocument.save()
.then(resp => {
console.log("Documento guardado correctamente")
console.log(resp)
})
.catch(error => {
console.log("Error: " + error)
})



mongoose.connect('mongodb+srv://paulamtlaboral:Platanobalun2345@m6codenotch.wi427.mongodb.net/appUser', 
    {useNewUrlParser: false, useUnifiedTopology: false } )
.then ( () => console.log ("Conexion correcta"))
.catch ( error => console.log(error)) 

let creedentialDocument = new creedentials({
address: "Plaza Mondariz,5",
phone: 66667899000,
email: "mmmsl@gmail.com",


});

creedentialDocument.save()
.then(resp => {
console.log("Documento guardado correctamente")
console.log(resp)
})
.catch(error => {
console.log("Error: " + error)
})

// userDocument.save(checkRespuesta)

// function checkRespuesta(err, res) 
// {
//     if (err) 
//         console.log("Error: " + err)
//     else 
//     {
//         console.log("Documento guardado correctamente")
//         console.log(res)
//         //mongoose.disconnect();
//     }
// }
//user.collection.find({}, function(err, data) { console.log(err, data, data.length); });