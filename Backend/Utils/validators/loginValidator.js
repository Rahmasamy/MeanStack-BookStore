
const { check } = require('express-validator');
const validatorMiddleware = require('../middlewares/validatorMiddleware');

exports.loginValidator = [
  check('email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Invalid email address'),

    check('password')
    .notEmpty()
    .withMessage('Password is required'),

  // Apply the validation middleware to handle errors
  validatorMiddleware,
];