const PhotosModel = require("../model/photos")

   








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

function getPhotos(request, response) {
    const username = request.body.username; // Obtener el username del cuerpo de la solicitud
    console.log(username);

    PhotosModel.find({ username: username })
    .then((items) => {
        if (items.length === 0) {
            console.log("No se encontraron fotos para el usuario:", username);
            response.send({ message: "No se encontraron fotos para el usuario" });
        } else {
            console.log("Fotos encontradas para el usuario:", username);
            console.log(items);
            response.send(items); // Enviar las fotos encontradas como respuesta
        }
    })
    .catch((error) => {
        console.error("Error al obtener las fotos", error);
        response.status(500).send({ error: "Error al obtener las fotos" });
    });
}







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




function postPhotos(request, response) {
    const { username, purl, ptitle, pdescrip } = request.body; // Obtener los datos del cuerpo de la solicitud

    let dato1 = {
        username: username,
        purl: purl,
        ptitle: ptitle,
        pdescrip: pdescrip,
    };

    PhotosModel.insertMany([dato1])
        .then((result) => {
            console.log("Items guardados correctamente");
            console.log(result);
            response.send({ message: "Items guardados correctamente", result });
        })
        .catch((error) => {
            console.error("Error al escribir los items", error);
            response.status(500).send({ error: "Error al escribir los items" });
        });
}



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

function putPhotos(request, response) {
    const ptitle = request.body.ptitle; // Obtener el título de la foto del cuerpo de la solicitud
    const pdescrip = request.body.pdescrip; // Obtener la nueva descripción del cuerpo de la solicitud
    console.log(ptitle);
    console.log(pdescrip);

    PhotosModel.updateOne({ ptitle: ptitle }, { pdescrip: pdescrip })
    .then((result) => {
        if (result.modifiedCount > 0) { // Verificar si se actualizó algún documento
            console.log("Descripción actualizada");
            console.log(result);
            response.send({ message: "Descripción actualizada", result });
        } else {
            console.log("Descripción NO actualizada");
            response.send({ message: "Descripción NO actualizada" });
        }
    })
    .catch((error) => {
        console.error("Error al actualizar la descripción", error);
        response.status(500).send({ error: "Error al actualizar la descripción" });
    });
}

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







// • DEL /photos. Dado un usuario y un titulo de foto eliminar su foto.
// • DEL /photos. Dado un usuario eliminar todas sus fotos.

//Por tanto: si ptitle existe borro una si no borro todas 


function deletePhotos(request, response) {
    const username = request.body.username;
    const ptitle = request.body.ptitle;
    console.log(`Usuario: ${username}`);
    console.log(`Título de la foto: ${ptitle}`);

    if (ptitle) {
        PhotosModel.deleteOne({ username: username, ptitle: ptitle })
            .then((result) => {
                if (result.deletedCount > 0) {
                    console.log("Foto borrada");
                    console.log(result);
                    response.send({ message: "Foto borrada", result });
                } else {
                    console.log("No se encontró ninguna foto para borrar");
                    response.send({ message: "No se encontró foto para borrar" });
                }
            })
            .catch((error) => {
                console.error("Error al eliminar la foto", error);
                response.status(500).send({ error: "Error al eliminar la foto" });
            });
    } else {
        PhotosModel.deleteMany({ username: username })
            .then((items) => {
                if (items.deletedCount > 0) {
                    console.log("Todas las fotos borradas");
                    console.log(items);
                    response.send({ message: "Todas las fotos borradas", deletedCount: items.deletedCount });
                } else {
                    console.log("No se borró ninguna foto");
                    response.send({ message: "No se borró ninguna foto" });
                }
            })
            .catch((error) => {
                console.error("Error al borrar las fotos", error);
                response.status(500).send({ error: "Error al borrar las fotos" });
            });
    }
}


module.exports = {getPhotos, postPhotos, putPhotos, deletePhotos};



// versiones previas

function deletePhotos(request, response) {
    const username = request.body.username; // Obtener el username del cuerpo de la solicitud
    const ptitle = request.body.ptitle; // Obtener el título de la foto del cuerpo de la solicitud
    console.log(username);
    console.log(ptitle);

    PhotosModel.deleteOne({ username: username, ptitle: ptitle })
    .then((result) => {
        if (result.deletedCount > 0) { // Verificar si se eliminó algún documento
            console.log("Imagen borrada");
            console.log(result);
            response.send({ message: "Imagen borrada", result });
        } else {
            console.log("Imagen no borrada");
            response.send({ message: "Imagen no borrada" });
        }
    })
    .catch((error) => {
        console.error("Error al eliminar la imagen", error);
        response.status(500).send({ error: "Error al eliminar la imagen" });
    });
}


// // • Eliminar todas las Fotos:
// // Dado un usuario eliminar todas sus fotos.


// // function deletephotos(username) {
// //     console.log(username);

// //     return photo.deleteMany({ username:username}) 
// //     .then(function(items) { 
// //         if (username == username) {
// //             console.log("imagen borrada");
// //             console.log(items);
// //         } else {
// //             console.log("No se borra la imagen");
// //         }
// //     })
// //     .catch(function(error) {
// //         console.error("Error al obtener los items", error);
// //     });
// // }
// // deletephotos("maria123");


function deletePhotos2(request, response) {
    const username = request.body.username; // Obtener el username del cuerpo de la solicitud
    console.log(username);

    PhotosModel.deleteMany({ username: username })
    .then((items) => {
        if (items.deletedCount > 0) { // Verificar si se eliminaron fotos
            console.log("Fotos borradas");
            console.log(items);
            response.send({ message: "Fotos borradas", deletedCount: items.deletedCount });
        } else {
            console.log("No se borró ninguna imagen");
            response.send({ message: "No se borró ninguna foto" });
        }
    })
    .catch((error) => {
        console.error("Error al borrar las fotos", error);
        response.status(500).send({ error: "Error al borrar las fotos" });
    });
}

// function deletePhotos(request, response) {
//     const username = request.body.username;
//     const ptitle = request.body.ptitle;
//     const deleteAll = request.body.deleteAll;

//     PhotosModel.deleteOne({ username: username, ptitle: ptitle })
//     .then((result) => {
//         if (result.deletedCount > 0) {
//             response.send({ message: "Foto borrada", result });
//         } else {
//             if (deleteAll) {
//                 PhotosModel.deleteMany({ username: username })
//                 .then((items) => {
//                     if (items.deletedCount > 0) {
//                         response.send({ message: "Fotos borradas", deletedCount: items.deletedCount });
//                     } else {
//                         response.send({ message: "No se borró ninguna foto" });
//                     }
//                 })
//                 .catch((error) => {
//                     console.error("Error al eliminar las fotos", error);
//                     response.status(500).send({ error: "Error al borrar las fotos" });
//                 });
//             } else {
//                 response.send({ message: "Foto no borrada" });
//             }
//         }
//     })
//     .catch((error) => {
//         console.error("Error al eliminar la foto", error);
//         response.status(500).send({ error: "Error al eliminar la foto" });
//     });
// }
