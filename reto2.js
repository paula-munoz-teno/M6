let mongoose = require("mongoose");
let students = require("./students");

mongoose.connect('mongodb+srv://paulamtlaboral:Platanobalun2345@m6codenotch.wi427.mongodb.net/ESCUELA')
.then ( () => console.log ("Conexion correcta"))
.catch ( error => console.log(error)) 

let studentsDocument = new students({
    firstName: "Marcos",
    lastName: "Méndez Rojas",
    marks: [{date:"2024/02/25", mark:9, subjects: 
                [{title:"Matemáticas", 
                    teachers:[{firstName:"Eva", lastName:"Gomez Jurado", 
                        groups:["A","B"]}]}]},
            {date:"2024/02/25", mark:10, subjects: 
                [{title:"Lengua",
                     teachers:[{firstName:"Marta", lastName:"Rodríguez Mendoza", 
                        groups:["A","B"]}]}]}],
});




// console.log("las notas de Marcos son:",resp.marks[0].mark, "y", resp.marks[1].mark)
//     console.log("las asignaturas de Marcos son:",resp.marks[0].subjects[0].title, "y",resp.marks[1].subjects[0].title )
//     console.log("los profesores de Marcos son:",
//         resp.marks[0].subjects[0].teachers[0].firstName,
//         resp.marks[0].subjects[0].teachers[0].lastName, "y",
//         resp.marks[1].subjects[0].teachers[0].firstName,
//         resp.marks[1].subjects[0].teachers[0].lastName
//     )

// array.forEach(function(element, index, array) {
//     // Código a ejecutar para cada elemento
// });


studentsDocument.save()
.then(function(resp) {
    console.log("Documento guardado correctamente");
    console.log(resp);

    // notas
    console.log("Las notas de Marcos son:");
    resp.marks.forEach(function(mark) {
        console.log(mark.mark);
    });

    // Mostrar  las asignaturas
    console.log("Las asignaturas de Marcos son:");
    resp.marks.forEach(function(mark) {
        mark.subjects.forEach(function(subject) {
            console.log(subject.title);
        });
    });

    // Mostrar los profesores
    console.log("Los profesores de Marcos son:");
    resp.marks.forEach(function(mark) {
        mark.subjects.forEach(function(subject) {
            subject.teachers.forEach(function(teacher) {
                console.log(teacher.firstName + " " + teacher.lastName);
            });
        });
    });
})
.catch(function(error) {
    console.log("Error: " + error);
});




// studentsDocument.save()
// .then(resp => {
//     console.log("Documento guardado correctamente")
//     console.log(resp)
//     console.log("las notas de Marcos son:",resp.marks[0].mark, "y", resp.marks[1].mark)
//     console.log("las asignaturas de Marcos son:",resp.marks[0].subjects[0].title, "y",resp.marks[1].subjects[0].title )
//     console.log("los profesores de Marcos son:",
//         resp.marks[0].subjects[0].teachers[0].firstName,
//         resp.marks[0].subjects[0].teachers[0].lastName, "y",
//         resp.marks[1].subjects[0].teachers[0].firstName,
//         resp.marks[1].subjects[0].teachers[0].lastName
//     )
    
// })
// .catch(error => {
//     console.log("Error: " + error)
// })




