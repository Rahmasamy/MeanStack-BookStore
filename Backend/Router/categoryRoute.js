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
const { isAdmin } = require("../Controllers/userController");

router.route("/").get(getCategories).post(isAdmin, createCategory);

router
  .route("/:id")
  .get(getCategoryById)
  .put(isAdmin, updateCategory)
  .delete(isAdmin, deleteCategory);

// Export the router
module.exports = router;
