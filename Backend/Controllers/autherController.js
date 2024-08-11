const AutherModle = require("../Models/autherModle");
const asyncHandler = require("express-async-handler");
const slugify = require("slugify");
const ApiError = require("../Utils/apiError");
const multer = require("multer");
const path = require("path");

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, path.join(__dirname, "..", "images"));
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });
// const upload = multer({ storage });

// exports.uploadMultipleImages = upload.array("imagePaths", 5);


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '..', 'images'));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage });

module.exports.uploadMultipleImages = upload.array('imagePaths', 5),

// @desc GET list of authers
// @route GET /api/bookstore/auther
// @access public
exports.getAuthers = asyncHandler(async (req, res) => {
  const page = req.query.page * 1 || 1;
  const limit = req.query.limit * 1 || 5;
  const skip = (page - 1) * limit;

  const auther = await AutherModle.find({}).skip(skip).limit(limit);

  res.status(200).json({ results: auther.length, page, data: auther });
});

// @desc GET Specific authers by Id
// @route GET /api/bookstore/auther/:id
// @access public
exports.getAuther = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const auther = await AutherModle.findById(id);

  if (!auther) {
    // res.status(404).json({ msg: `No auther found for this id ${id}` });
    return next(new ApiError(`No auther found for this id ${id}`), 404);
  }
  res.status(200).json({ data: auther });
});

// @desc POST create a new auther
// @route POST /api/bookstore/auther
// @access private
exports.createAuther = asyncHandler(async (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({
      status: "fail",
      message: "No images uploaded",
    });
  }

  const { firstName, lastName, DateOfBirth } = req.body;
  const fullName = `${firstName} ${lastName}`;

  const imagePaths = req.files.map((file) => file.path);

  const auther = await AutherModle.create({
    firstName,
    lastName,
    fullName: fullName,
    imagePaths,
    DateOfBirth,
    slug: slugify(fullName),
  });

  res.status(201).json({ data: auther });
});
// @desc Update Specific authers by Id
// @route PUT /api/bookstore/auther/:id
// @access Private
exports.updateAuther = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { firstName } = req.body;

  const auther = await AutherModle.findByIdAndUpdate(
    { _id: id },
    { firstName, slug: slugify(firstName) },
    { new: true }
  );

  if (!auther) {
    // res.status(404).json({ msg: `No auther found for this id ${id}` });
    return next(new ApiError(`No auther found for this id ${id}`), 404);
  } else {
    res.status(200).json({ data: auther });
  }
});

// @desc DELETE Specific authers by Id
// @route DELETE /api/bookstore/auther/:id
// @access Private
exports.deleteAuther = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { firstName } = req.body;

  const auther = await AutherModle.findByIdAndDelete(
    { _id: id },
    { new: true }
  );

  if (!auther) {
    // res.status(404).json({ msg: `No auther found for this id ${id}` });

    return next(new ApiError(`No auther found for this id ${id}`), 404);
  } else {
    res.status(200).json({ msg: `auther is deleted for this id ${id}` });
  }
});
