const express = require("express");
<<<<<<< HEAD
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

router.route("/").get(getAuthers).post(
  // createAuthervalidator,
  uploadMultipleImages,
  createAuther
);

router
  .route("/:id")
  .get(getAuthervalidator, getAuther)
  .put(updataAuthervalidator, updateAuther)
  .delete(deleteAuthervalidator, deleteAuther);
=======
const { getAuthers, createAuther } = require("../Controllers/autherController");

const router = express.Router();

router.route("/").get(getAuthers).post(createAuther);
>>>>>>> fa9e1c4 (create data base Schema , finsh part of create auther)

module.exports = router;
