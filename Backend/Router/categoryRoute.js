const express = require("express");
const router = express.Router();
const {
  getCategories,
  createCategory,
  deleteCategory,
  updateCategory,
  getCategoryById,
} = require("../Controllers/categoryController");

router.route("/categories").get(getCategories).post(createCategory);

router
  .route("/categories/:id")
  .get(getCategoryById)
  .put(updateCategory)
  .delete(deleteCategory);

// router.post("/categories", createCategory);
// router.get("/categories/:id", getCategoryById);
// router.put("/categories/:id", updateCategory);
// router.delete("/categories/:id", deleteCategory);

module.exports = router;
