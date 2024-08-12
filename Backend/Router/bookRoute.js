const express = require("express");

<<<<<<< HEAD
const {
  getAllBooks,
  createBook,
  getBookById,
  updateBook,
  DeleteBook,
} = require("../Controllers/BookController");

const router = express.Router();

router.route("/book").get(getAllBooks).post(createBook);

router.route("/book/:id").get(getBookById).put(updateBook).delete(DeleteBook);

module.exports = router;
=======
const {getAllBooks,createBook,getBookById,updateBook,DeleteBook}  =require("../Controllers/BookController");

const router = express.Router();

router.route("/book")
.get(getAllBooks)
.post(createBook);

router.route("/book/:id")
.get(getBookById)
.put(updateBook)
.delete(DeleteBook)

module.exports = router;
>>>>>>> e743df0 (solving conflict)
