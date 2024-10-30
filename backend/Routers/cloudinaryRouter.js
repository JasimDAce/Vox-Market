const express = require("express");
const router = express.Router();
const cloudinary = require('cloudinary').v2;
require("dotenv").config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, // Your Cloudinary cloud name
    api_key: process.env.CLOUDINARY_API_KEY,       // Your Cloudinary API key
    api_secret: process.env.CLOUDINARY_API_SECRET  // Your Cloudinary API secret
  });


router.post('/deleteImage',async (req,res)=>{
    try {
        const { imageUrl } = req.body;

        const urlSegments = imageUrl.split('/');
        const lastSegment = urlSegments[urlSegments.length - 1];
        const [publicId] = lastSegment.split('.'); // Removes file extension

        if (!publicId) {
            return res.status(400).json({ error: "Wrong Image format" });
        }

        // Delete the image by its public_id
        const result = await cloudinary.uploader.destroy(publicId);
        console.log(result);
        if (result.result === 'ok') {
            return res.status(200).json({ message: "Image deleted successfully." });
        } else {
            return res.status(400).json({ error: "Failed to delete image." });
        }
    } catch (error) {
        console.error("Error deleting image:", error);
        return res.status(500).json({ error: "An error occurred while deleting the image." });
    }

});

module.exports = router;
  