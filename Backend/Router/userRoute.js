const { createUser, loginUser } = require("../Controllers/userController");
const express = require("express");
const router = express.Router();
const { loginValidator } = require('../Utils/validators/loginValidator');
const { registerValidator } = require('../Utils/validators/registerValidator');

// Register route
router.route("/registr").post(registerValidator, createUser);

// Login route
router.route("/login").post(loginValidator, loginUser);

module.exports = router;
