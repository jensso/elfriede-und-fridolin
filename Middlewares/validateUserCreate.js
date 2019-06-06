const { check } = require('express-validator/check');
const usersModel = require('../models/usersModel');

const userCreateValidator = [

  check('Email').custom(async emailProvided => {
    const existedEmail = await usersModel.findOne({Email: emailProvided});
    if (existedEmail) {
      throw new Error(`User with this Email: "${emailProvided}" already exists`);
    }
  })
    .exists().withMessage('Please provide an email for this field')
    .trim()
    .isEmail().withMessage('The email must be in this format: example@example.com')
    .escape()
];

module.exports = userCreateValidator;
