let mongoose = require("mongoose");
let photo = require("./photos");


mongoose.connect('mongodb+srv://paulamtlaboral:Platanobalun2345@m6codenotch.wi427.mongodb.net/Dia2', 
                  {useNewUrlParser: false, useUnifiedTopology: false } )
.then ( () => console.log ("Conexion correcta"))
.catch ( error => console.log(error)) 

let photoDocument = new photo({
    username: "maria123",
    purl: "https://unsplash.com/es/images/nature/rose",
    ptitle: "rosas",
    pdescrip: "rosas del jardín botánico, mayo 2024",
});

photoDocument.save()
.then(resp => {
    console.log("Documento guardado correctamente")
    console.log(resp)
})
.catch(error => {
    console.log("Error: " + error)
})


