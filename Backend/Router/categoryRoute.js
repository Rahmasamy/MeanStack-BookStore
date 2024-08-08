const express = require("express");
const router = express.Router();
const {
  getCategories,
  createCategory,
  deleteCategory,
  updateCategory,
} = require("../controllers/categoryController");

router.route("/categories").get(getCategories).post(createCategory);

router.put("/categories/:id", updateCategory).delete(deleteCategory);

// router.post("/categories", categoryController.createCategory);
// router.get("/categories/:id", categoryController.getCategoryById);
// router.put("/categories/:id", categoryController.updateCategory);
// router.delete("/categories/:id", categoryController.deleteCategory);

module.exports = router;
