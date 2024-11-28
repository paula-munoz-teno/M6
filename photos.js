const mongoose = require("mongoose");

const PhotosSchema = new mongoose.Schema({
    username: String,
    purl: String,
    ptitle: String,
    pdescrip: String,
})

module.exports = mongoose.model("Photo", PhotosSchema, "photos")