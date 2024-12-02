let mongoose = require("mongoose");

mongoose.connect('mongodb+srv://paulamtlaboral:Platanobalun2345@m6codenotch.wi427.mongodb.net/Dia2')

.then((db)=> {
    console.log("database connected on " + db.connection.host)
}) 
.catch((error) => {
    console.log(error)
})
