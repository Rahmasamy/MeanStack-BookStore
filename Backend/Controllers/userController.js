const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const ApiError = require("../Utils/apiError");
const UserModel = require("../Models/userModel");
const bcrypt = require("bcrypt");

exports.signup = asyncHandler(async (req, res, next) => {
  console.log(req.body + 11111111);
  const { name, email, password } = req.body;
  console.log(req.body);
  if (!email) {
    return next(new ApiError("Invalid email Or password wallahy", 401));
  }
  const user = await UserModel.create({
    name,
    email,
    password,
  });

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIR_TIME,
  });

  return res.status(200).json({ data: user, token });
});

exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  console.log(req.body);
  const user = await UserModel.findOne({
    email,
  });

  const hashPassword = await bcrypt.compare(password, user.password);

  console.log(hashPassword);
  
  if (!user || !hashPassword) {
    return next(new ApiError("Invalid email Or password wallahy", 401));
  }

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIR_TIME,
  });

  res.status(200).json({ data: user, token });
});
