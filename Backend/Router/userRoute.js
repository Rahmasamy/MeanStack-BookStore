const express = require("express");
const multer = require("multer");
const path = require("path");
const {
  signupValidator,
  loginValidator,
} = require("../Utils/validators/userValidation");

const { signup, login } = require("../Controllers/userController");

const router = express.Router();

router.route("/signup").post(signupValidator, signup);
router.route("/login").post(loginValidator, login);
// router
//   .route("/changePassword/:id")
//   .put(updateChangePassword, changeUserPassword);
// router
//   .route("/user/:id")
//   .get(getUserValidator, getUser)
//   .put(updateUserValidator, updateUser)
//   .delete(deleteUserValidator, deleteUser);

module.exports = router;
