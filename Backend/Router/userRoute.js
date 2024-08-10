const express = require("express");
const { createUser } = require("../Controllers/userController");
const router = express.Router();

router.route("/registr").post(createUser);
// router.post("/login", loginUser);
