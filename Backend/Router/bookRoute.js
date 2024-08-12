const express = require("express");

const {
  getAllBooks,
  createBook,
  getBookById,
  updateBook,
  DeleteBook,
} = require("../Controllers/BookController");
const { isAdmin, protect } = require("../Controllers/userController");

const router = express.Router();

router.route("/book").get(getAllBooks).post(isAdmin, protect,createBook);

router
  .route("/book/:id")
  .get(getBookById)
  .put(isAdmin, protect, updateBook)
  .delete(isAdmin, protect, DeleteBook);

module.exports = router;
