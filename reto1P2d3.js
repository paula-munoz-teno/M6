let mongoose = require("mongoose");
let notas = require("./notas");
const fs = require('fs');

mongoose.connect('mongodb+srv://paulamtlaboral:Platanobalun2345@m6codenotch.wi427.mongodb.net/ESCUELA')
.then ( () => console.log ("Conexion correcta"))
.catch ( error => console.log(error)) 


