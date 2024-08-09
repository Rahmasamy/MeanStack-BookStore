const { createUser } = require("../Controllers/userController");
const express = require("express");
const router = express.Router();

router.route("/registr").post(createUser);
