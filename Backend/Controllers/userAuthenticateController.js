const BookModel = require("../Models/bookModle");
const asyncHandler = require("express-async-handler");



/////////////////////////////////////////////
// Get All Books 

exports.getAllBooks = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 5;
  const skip = (page - 1) * limit;

  // Fetch books with pagination
  const books = await BookModel.find({}).skip(skip).limit(limit);

  // Fetch total count of books
  const totalBooks = await BookModel.countDocuments();

  return res.status(200).json({
    count: books.length,
    total: totalBooks,
    data: books,
  });
});

/////////////////////////////////////////////
// Get Books want to read

exports.BooksWantToRead = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 5;
  const skip = (page - 1) * limit;

  // Fetch books with pagination
  const books = await BookModel.find({}).skip(skip).limit(limit);

  // Fetch total count of books
  const totalBooks = await BookModel.countDocuments();

  return res.status(200).json({
    count: books.length,
    total: totalBooks,
    data: books,
  });
});


  /////////////////////////////////////////////
  // Get Books currently read
  
  exports.BooksCurrentlyRead = asyncHandler(async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const skip = (page - 1) * limit;
  
    // Fetch books with pagination
    const books = await BookModel.find({}).skip(skip).limit(limit);
  
    // Fetch total count of books
    const totalBooks = await BookModel.countDocuments();
  
    return res.status(200).json({
      count: books.length,
      total: totalBooks,
      data: books,
    });
  });