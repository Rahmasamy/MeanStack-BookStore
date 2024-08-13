const BookModle = require("../Models/bookModle");

// C R U D Operations

exports.getAllBooks = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const skip = (page - 1) * limit;

    // Fetch books with pagination
    const books = await BookModle.find({}).skip(skip).limit(limit);

    // Fetch total count of books
    const totalBooks = await BookModle.countDocuments({});

    return res.status(200).json({
      count: books.length,
      total: totalBooks,
      data: books,
    });
  } catch (error) {
    res.status(500).send({ "error message": error.message });
  }
};

// get book by id
exports.getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await BookModle.findById(id);
    return res.status(200).json({
      count: book.length,
      data: book,
    });
  } catch (error) {
    res.status(500).send({ "error message: ": error.message });
  }
};

// add new book
exports.createBook = async (req, res) => {
  try {
    if (
      !req.body.Author ||
      !req.body.Category ||
      !req.body.img ||
      !req.body.title
    ) {
      return res.status(400).send({ message: "All fields must be required " });
    }
    const newBook = {
      title: req.body.title,
      img: req.body.img,
      Author: req.body.Author,
      Category: req.body.Category,
    };
    await BookModle.create(newBook)
      .then((book) => {
        res.status(201).json({ data: book });
      })
      .catch((err) => res.status(400).send(err));
  } catch (err) {
    console.log("error");
    res.status(500).send({ "error message: ": err.message });
  }
};

// update book
exports.updateBook = async (req, res) => {
  try {
    if (
      !req.body.Author ||
      !req.body.Category ||
      !req.body.img ||
      !req.body.title
    ) {
      return res.status(400).send({ message: "All fields must be required " });
    }
    const { id } = req.params;
    const result = await BookModle.findByIdAndUpdate(id, req.body);
    if (!result) {
      return res.status(400).send({ message: "Not found book with that id " });
    }
    return res.status(200).send({ message: "Book Update Succesfully" });
  } catch (error) {
    console.log("error");
    res.status(500).send({ "error message: ": error.message });
  }
};
exports.DeleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await BookModle.findByIdAndDelete(id);
    if (!result) {
      return res.status(400).send({ message: "Book Not Found" });
    }

    return res.status(200).send({ message: "Book is deleted Succesfully" });
  } catch (error) {
    res.status(500).send({ "error message: ": error.message });
  }
};
