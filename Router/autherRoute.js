const express = require("express");
const { getAuthers, createAuther } = require("../Controllers/autherController");

const router = express.Router();

router.route("/author").get(getAuthers).post(createAuther);

module.exports = router;
