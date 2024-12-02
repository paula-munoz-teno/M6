const mongoose = require("mongoose");
const fs = require('fs');

mongoose.connect('mongodb+srv://paulamtlaboral:Platanobalun2345@m6codenotch.wi427.mongodb.net/Dia3')
.then ( () => console.log ("Conexion correcta"))
.catch ( error => console.log(error)) 

const TeachersSchema = new mongoose.Schema({
    teacher_first_name: String,
    teacher_last_name: String,

    //como especifico que es un array de string, ¿es necesario?
})


const MarksSchema = new mongoose.Schema({
    date: Date,
    mark: Number,
    student_first_name: String,
    student_last_name: String,
    group_name: String,
    subject_name: String,
    teachers: [TeachersSchema]

})

module.exports = mongoose.model("Mark", MarksSchema, "marks")

let notasmodel = module.exports = mongoose.model("Mark", MarksSchema, "marks");


//R1

// A) Calcular la nota media de los alumnos de una asignatura concreta.
//Asignatura: Historia

// notasmodel
// .aggregate([{$match: {subject_name:"Historia"}},
//     {$group: {"_id":null, "Nota Media en Historia": {"$avg": "$mark"}}}
// ])
// .then((result) =>
// {
// console.log(result);
// })
// .catch((error) =>
// {
// console.log(error);
// })




//B)  Calcular el número total de alumnos que hay en el bootcamp incluyendo repetidos.

// notasmodel
// .aggregate([{$count: "Numero de alumnos"}])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })




//C) Listar el nombre y los apellidos de todos los alumnos incluyendo repetidos.
// notasmodel
// .aggregate([{$project: {"Nombre": "$student_first_name", 
//                          "Apellidos": "$student_last_name",
//                          _id: 0}
//             }])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })



//D) Listar el nombre y los apellidos de todos los profesores incluyendo repetidos.
// notasmodel
// .aggregate([{$project: {"Nombre": "$teachers.teacher_first_name", 
//                          "Apellidos": "$teachers.teacher_last_name",
//                          _id: 0}
//             }])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })



//E) Mostrar el númerototal de alumnos por grupo ordenados por grupo en orden inverso al alfabeto.
// group 
// orden 
// // num 

// notasmodel
// .aggregate([{$group: {"_id": {"Nº alumnos por grupo" : "$group_name"}, 
//                       "Cantidad": {"$sum": 1}}},
//             {$sort: {"Cantidad": -1}}])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })



//F) Obtén el top 5 de los nombres de las asignaturas cuya nota media sea mayor que 5.
// notasmodel

// notasmodel
// .aggregate([{$group: {"_id": {"Asignatura" : "$subject_name"},
//                       "Nota media": {"$avg": "$mark"}}},
//             {$match: {"Nota media": {"$gt": 5}}},
//             {$sort: {"Nota media": -1}},
//             {$limit: 5}])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })



//G) Calcular el numero de profesores que hay por cada asignatura incluyendo repetidos.

// notasmodel
// .aggregate([
//     {$unwind: "$teachers" },
//     {$group: {"_id": {"Nº profes por asignaturas" : "$subject_name"}, 
//                      "Cantidad": {"$sum": 1}
//                     }},


//    ])
//     .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })


//R2
// • Obtén el nombre, apellido y la nota de los alumnos que tengan una nota mayor de 8 o la nota
// tenga fecha del año pasado o anterior.

// notasmodel
// .aggregate([{$match:{"$or":[{mark:{"$gt":8}},
//                              {"$and":[{date: {"$lt": new Date ("2022-12-31")}},
//                              {date:{"gt": new Date ("2024-1-1")}}
//                              ]}]
//                        }
            
//             },
        
//                 {$project: {"Nombre": "$student_first_name", 
//                          "Apellidos": "$student_last_name",
//                          "Nota": "$mark",
//                          _id: 0}
            
//             }
// ])        
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })


// • Obtén la media de las notas que se han dado en el último año por asignatura.
//último año 


// notasmodel
// .aggregate([{$match: 
//     {"$and":[
//         {date:{"$gt": new Date ("2024,1,1")}},
//         {date:{"$lt": new Date ("2025,1,1")}}
//  ]}},
             
//             {$group: {"_id": {"Asignatura" : "$subject_name"},
//                                                    "Nota media": {"$avg": "$mark"}}},    
            
// ])        

// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })





// • Obtén la media aritmética de las notas que se han dado en el último año por nombre de alumno.

// notasmodel
// .aggregate([
//     {$match: 
//                 {"$and":[
//                     {date:{"$gt": new Date ("2024,1,1")}},
//                     {date:{"$lt": new Date ("2025,1,1")}}
//              ]}},
             
//             {$group: {"_id": {"Alumno" : "$student_first_name"},
//                                                    "Nota media": {"$avg": "$mark"}}},    
            
// ])        

// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })




// • Obtén los nombres de los alumnos y la cantidad total de asignaturas 
//por alumno cuyo profesor sea uno que elijáis.


notasmodel
.aggregate([{$unwind: "$teachers" },
            {$match: {"$and": [{"teachers.teacher_first_name": "Ramón"},
                      {"teachers.teacher_last_name": "Muñoz Sierra"}]}},
            {$group: {"_id":    {"Nombre": "$student_first_name", 
                                "Apellidos": "$student_last_name",
                                "Asignaturas" : "$subject_name"},
                                "Total asignaturas": {"$sum": 1}}}, 
            
])        

.then((result) =>
{
    console.log(result);
})
.catch((error) =>
{
    console.log(error);
})


