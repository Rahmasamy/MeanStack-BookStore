const slugify = require("slugify");
const saltRounds = 10;

const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const ApiError = require('../Utils/apiError');
const UserModel = require('../Models/userModel');

const createToken = (payload) => 
  jwt.sign({ userId: payload }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIR_TIME,
  });

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

    // Create the user
    const user = await UserModel.create({
      name,
      email,
      password: hashedPassword,
      image,
      slug: slugify(name),
    });

    // Generate token 
    const token = createToken(user._id);
    res.status(201).json({ data: user, token });

  } catch (error) {
    next(error);
  }
});




exports.loginUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  // Check if user exists
  const user = await UserModel.findOne({ email });

  // Compare passwords
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return next(new ApiError('Incorrect email or password', 401));
  }

  // Generate JWT token
  const token = createToken(user._id);

  res.status(200).json({
    status: 'success',
    data: { user },
    token,
  });
});