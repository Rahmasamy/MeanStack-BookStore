const asyncHandler = require("express-async-handler");
const slugify = require("slugify");
const ApiError = require("../Utils/apiError");
const multer = require("multer");
const path = require("path");
const UserModel = require("../Models/userModel");
const bcrypt = require("bcrypt");
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

// @desc GET list of authers
// @route GET /api/bookstore/auther
// @access public
exports.getUsers = asyncHandler(async (req, res) => {
  const page = req.query.page * 1 || 1;
  const limit = req.query.limit * 1 || 5;
  const skip = (page - 1) * limit;

  const user = await UserModel.find({}).skip(skip).limit(limit);

  res.status(200).json({ results: user.length, page, data: user });
});

// @desc GET Specific authers by Id
// @route GET /api/bookstore/auther/:id
// @access public
exports.getUser = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const user = await UserModel.findById(id);

  if (!user) {
    // res.status(404).json({ msg: `No auther found for this id ${id}` });
    return next(new ApiError(`No user found for this id ${id}`), 404);
  }
  res.status(200).json({ data: user });
});

// @desc POST create a new auther
// @route POST /api/bookstore/auther
// @access private
exports.createUser = asyncHandler(async (req, res) => {
  // if (!req.files || req.files.length === 0) {
  //   return res.status(400).json({
  //     status: "fail",
  //     message: "No images uploaded",
  //   });
  // }

  const { name, email, password, role, isAdmin } = req.body;

  // const imagePaths = req.files.map((file) => file.path);

  const user = await UserModel.create({
    name,
    email,
    password,
    role,
    isAdmin,
    slug: slugify(name),
  });

  res.status(201).json({ data: user });
});
// @desc Update Specific authers by Id
// @route PUT /api/bookstore/auther/:id
// @access Private
exports.updateUser = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { name, email, role, isAdmin } = req.body;

  const user = await UserModel.findByIdAndUpdate(
    id,
    { name, slug: slugify(name), email: email, role, isAdmin },
    { new: true }
  );

  if (!user) {
    // res.status(404).json({ msg: `No auther found for this id ${id}` });
    return next(new ApiError(`No auther found for this id ${id}`), 404);
  } else {
    res.status(200).json({ data: user });
  }
});

exports.changeUserPassword = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { password } = req.body;

  const user = await UserModel.findByIdAndUpdate(
    id,
    { password: await bcrypt.hash(password, 12) },
    { new: true }
  );

  if (!user) {
    // res.status(404).json({ msg: `No auther found for this id ${id}` });
    return next(new ApiError(`No auther found for this id ${id}`), 404);
  } else {
    res.status(200).json({ data: user });
  }
});

// @desc DELETE Specific authers by Id
// @route DELETE /api/bookstore/auther/:id
// @access Private
exports.deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const user = await UserModel.findByIdAndDelete({ _id: id }, { new: true });

  if (!user) {
    // res.status(404).json({ msg: `No auther found for this id ${id}` });

    return next(new ApiError(`No user found for this id ${id}`), 404);
  } else {
    res.status(200).json({ msg: `user is deleted for this id ${id}` });
  }
});
