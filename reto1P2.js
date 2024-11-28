let mongoose = require("mongoose");
// let User = require("./userMDB");
let photo = require("./photos");

mongoose.connect('mongodb+srv://paulamtlaboral:Platanobalun2345@m6codenotch.wi427.mongodb.net/Dia2') 
.then ( () => console.log ("Conexion correcta"))
.catch ( error => console.log(error)) 


// • Subida de fotos:
// Dado un usuario, url de foto, titulo y descripción se debe guardar en la colección ‘photos’.
//INSERT, CREAR 

// function subidadefotos(username, purl, ptitle, pdescrip) {
//     let dato1 = {
//         username: username,
//         purl: purl,
//         ptitle: ptitle,
//         pdescrip: pdescrip,

//     };


//     return photo.insertMany([dato1])
//         .then(function(response) {
//             console.log("Items guardados correctamente");
//             console.log(response)
//             mongoose.disconnect();
//         })
//         .catch(function(error) {
//             console.error("Error al escribir los items", error);
//         })
// }

// subidadefotos("maria222","https://unsplash.com/es/images/nature/rose",
//     "rosas","rosas del jardín botánico mayo 2024",);




// • Obtener fotos:
// Dado un usuario obtener todas sus fotos.
//FIND, CONSULTA

// Función para obtener fotos de un usuario


// function obtenerfotos(username) {
//     console.log(username);

//     return photo.find({ username: username }) 
//     .then(function(items) {  // 
//         if (items.length === 0) {
//             console.log("No se encontraron fotos para el usuario:", username);
//         } else {
//             console.log("Fotos encontradas para el usuario:", username);
//             console.log(items);  // 
//         }
//     })
//     .catch(function(error) {
//         console.error("Error al obtener los s", error);
//     });
    
// }
// obtenerfotos("maria222");



// • Modificar fotos:
// Dado el titulo de una foto y una descripción modificar su descripción.
// Los parámetros son el título y la descripción 

// function modifpohotos(ptitle, pdescrip) {
//     console.log(ptitle);
//     console.log(pdescrip);

//     return photo.updateOne({ ptitle:ptitle }, {pdescrip:pdescrip}) 
//     .then(function(items) {  // 'items' es el resultado de la consulta
//         if (ptitle == ptitle) {
//             console.log("Descripción actualizada");
//             console.log(items);
//         } else {
//             console.log("Descripción NO actualizada ");
//         }
//     })
//     .catch(function(error) {
//         console.error("Error al obtener los items", error);
//     });
    
// }
// modifpohotos("rosas", "rosas de mi huerta");



// • Eliminar Foto:
// Dado un usuario y un titulo de foto eliminar su foto.

// function deletephotos(username, ptitle) {
//     console.log(username);
//     console.log(ptitle);

//     return photo.deleteOne({ username:username, ptitle:ptitle }) 
//     .then(function(items) { 
//         if ( (username == username) && (ptitle == ptitle)) {
//             console.log("imagen borrada");
//             console.log(items);
//         } else {
//             console.log("Imagen no borrada ");
//         }
//     })
//     .catch(function(error) {
//         console.error("Error al obtener los items", error);
//     });
    
// }
// deletephotos("maria222", "rosas");




// • Eliminar todas las Fotos:
// Dado un usuario eliminar todas sus fotos.
// function deletephotos(username) {
//     console.log(username);

//     return photo.deleteMany({ username:username}) 
//     .then(function(items) { 
//         if (username == username) {
//             console.log("imagen borrada");
//             console.log(items);
//         } else {
//             console.log("No se borra la imagen");
//         }
//     })
//     .catch(function(error) {
//         console.error("Error al obtener los items", error);
//     });
    
// }
// deletephotos("maria123");









