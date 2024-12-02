const {Router} = require ("express")
const router = Router();
const photosCtrl = require("../controller/photos.controller")

router.get("/photos", photosCtrl.getPhotos);
        
router.post("/photos", photosCtrl.postPhotos);
        
router.put("/photos", photosCtrl.putPhotos);
        
router.delete("/photos", photosCtrl.deletePhotos);

router.delete("/photos2", photosCtrl.deletePhotos2);
module.exports = router;


