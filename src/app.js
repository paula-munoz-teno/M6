const express = require("express")
const cors = require('cors')
const PhotosRouters = require("./routers/photos.routers")
const errorHandling = require("./error/photosHandling")

const app = express();
 
app.set("port", process.env.PORT || 4001)

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(PhotosRouters);
app.use(function(req, res, next)
    {
        res.status(404).json({message: "Endpoint doesnt found"})
    })

app.use(errorHandling);

module.exports = app;
