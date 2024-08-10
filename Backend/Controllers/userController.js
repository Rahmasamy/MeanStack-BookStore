const asyncHandler = require("express-async-handler");
const slugify = require("slugify");
const ApiError = require("../Utils/apiError");
const UserModel = require("../Models/userModel");
const bcrypt = require("bcrypt");
const saltRounds = 10;

exports.createUser = asyncHandler(async (req, res, next) => {
  try {
    const { name, email, password, image } = req.body;

    // Check if the email already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return next(new ApiError("Email already in use", 400));
    }

    // Hash the user's password
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = await UserModel.create({
      name,
      email,
      password: hashedPassword,
      image,
      slug: slugify(name),
    });

    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
});
