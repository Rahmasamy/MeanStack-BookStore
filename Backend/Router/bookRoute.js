const express = require("express");

const {
  getAllBooks,
  createBook,
  getBookById,
  updateBook,
  DeleteBook,
} = require("../Controllers/BookController");
const { isAdmin } = require("../Controllers/userController");

const router = express.Router();

router.route("/book").get(getAllBooks).post(isAdmin, createBook);

router
  .route("/book/:id")
  .get(getBookById)
  .put(isAdmin, updateBook)
  .delete(isAdmin, DeleteBook);

module.exports = router;
