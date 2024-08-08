const express = require("express");

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