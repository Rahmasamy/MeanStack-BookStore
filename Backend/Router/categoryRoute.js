const express = require("express");
const router = express.Router(); // Create the router instance
const categoryModel = require("../Models/categoryModle"); // Correct the typo

const {
  getCategories,
  createCategory,
  deleteCategory,
  updateCategory,
  getCategoryById,
} = require("../Controllers/categoryController");

router.route("/").get(getCategories).post(createCategory);

router
  .route("/:id")
  .get(getCategoryById)
  .put(updateCategory)
  .delete(deleteCategory);

// Export the router
module.exports = router;



