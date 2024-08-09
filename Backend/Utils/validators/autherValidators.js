const { check } = require("express-validator");
const validationMiddelware = require("../../MiddleWare/validationMiddelware");

exports.getAuthervalidator = [
  check("id").isMongoId().withMessage("Invalid Auther id fromat"),
  validationMiddelware,
];

// exports.createAuthervalidator = [
//   check("id").isMongoId().withMessage("Invalid Auther id fromat"),
//   validationMiddelware,
// ];
