const express = require("express");
const { validationResult } = require("express-validator");
const {
  getAuthers,
  createAuther,
  getAuther,
  updateAuther,
  deleteAuther,
  uploadMultipleImages,
} = require("../Controllers/autherController");
const {
  getAuthervalidator,
  createAuthervalidator,
  updataAuthervalidator,
  deleteAuthervalidator,
} = require("../Utils/validators/autherValidators");
const multer = require("multer");
const path = require("path");

const router = express.Router();

router.route("/auther").get(getAuthers).post(
  // createAuthervalidator,
  uploadMultipleImages,
  createAuther
);

router
  .route("/auther/:id")
  .get(getAuthervalidator, getAuther)
  .put(updataAuthervalidator, updateAuther)
  .delete(deleteAuthervalidator, deleteAuther);

module.exports = router;
