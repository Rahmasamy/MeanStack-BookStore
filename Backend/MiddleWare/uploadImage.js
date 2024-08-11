const multer = require("multer");
const path = require("path");

// Set up storage for images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join("http://localhost:8080/", "../images"));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // Add a timestamp to avoid name conflicts
  },
});

// Set up multer for image upload
const upload = multer({ storage });

// Export the middleware for single or multiple image uploads
exports.uploadSingleImage = upload.single("imagePaths"); // For single image
exports.uploadMultipleImages = upload.array("imagePaths", 5); // For multiple images (max 5)
