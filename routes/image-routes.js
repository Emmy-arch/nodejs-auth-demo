const express = require('express')
const authMiddleware = require('../middleware/auth-middleware')
const adminMiddleware = require('../middleware/admin-middleware')
const uploadMiddleware = require('../middleware/upload-middleware')
const {uploadImageController, fetchImagesController, deleteImageController} = require('../controllers/image-controller')

const router = express.Router()

// upload the image
router.post('/upload', authMiddleware, adminMiddleware, uploadMiddleware.single('image'), uploadImageController)


// to get all the images
router.get('/get', authMiddleware, fetchImagesController)

// delete image route
// 67bdb50ab94f6665a38190e2
router.delete('/delete/:id', authMiddleware, adminMiddleware, deleteImageController)


module.exports = router