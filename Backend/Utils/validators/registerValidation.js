const slugify = require("slugify");
const bcrypt = require("bcrypt");
const { check, body } = require('express-validator');
const User = require('../../Models/userModel');
const validatorMiddleware = require('../../MiddleWare/validationMiddelware');

exports.createUser = [
    body('name')
        .notEmpty()
        .withMessage('User name is required')
        .isLength({ min: 3 })
        .withMessage('Too short username'),

    body('email')
        .notEmpty()
        .withMessage('Email is required')
        .isEmail()
        .withMessage('Invalid email address'),

    body('password')
        .notEmpty()
        .withMessage('Password is required')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long'),

    body('image')
        .notEmpty()
        .withMessage('Image is required'),

    // Add this to catch any validation errors
    validatorMiddleware,
];