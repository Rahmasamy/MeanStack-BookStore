const { query, param, validationResult } = require("express-validator");
const validationMiddelware = require("../MiddleWare/validationMiddelware");
const express = require("express");
const {
  getAuthers,
  createAuther,
  getAuther,
  updateAuther,
  deleteAuther,
} = require("../Controllers/autherController");
const { getAuthervalidator } = require("../Utils/validators/autherValidators");

const router = express.Router();

router.route("/auther").get(getAuthers).post(createAuther);
router
  .route("/auther/:id")
  .get(getAuthervalidator, getAuther)
  .put(updateAuther)
  .delete(deleteAuther);

module.exports = router;
