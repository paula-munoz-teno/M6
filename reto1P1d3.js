let mongoose = require("mongoose");
let notas = require("./notas");
const fs = require('fs');


mongoose.connect('mongodb+srv://paulamtlaboral:Platanobalun2345@m6codenotch.wi427.mongodb.net/Dia3')
.then ( () => console.log ("Conexion correcta"))
.catch ( error => console.log(error)) 

// let notasDocument = new notas({
//     date: "2024-11-01",
//     mark: 10,
//     student_first_name: "Laura",
//     student_last_name: "Sánchez Leiva",
//     group_name: "A",
//     subject_name: "Matemáticas",
//     teachers: [{teacher_first_name:"Marta", teacher_last_name:"Peinado"}]
// });

// notasDocument.save()
// .then(resp => {
//     console.log("Documento guardado correctamente")
//     console.log(resp)
// })
// .catch(error => {
//     console.log("Error: " + error)
// })


//I. Calcular la nota media de los alumnos de una asignatura concreta 

.aggregate([{$match: {subject_name: "Historia"}}])
.then((result) =>
{
    console.log(result);
})
.catch((error) =>
{
    console.log(error);
})









