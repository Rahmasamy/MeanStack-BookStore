const express = require("express");
const {
  getAuthers,
  createAuther,
  getAuther,
  updateAuther,
  deleteAuther,
} = require("../Controllers/autherController");

const router = express.Router();

router.route("/auther").get(getAuthers).post(createAuther);
router
  .route("/auther/:id")
  .get(getAuther)
  .put(updateAuther)
  .delete(deleteAuther);

module.exports = router;
