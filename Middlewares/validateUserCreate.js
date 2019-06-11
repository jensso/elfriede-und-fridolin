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
    .escape(),

    check('Password')
    .exists().withMessage('The password field is mandatory')
    .trim()
    .isLength({min:8, max: 35}).withMessage('Password between 8 and 35')
    .escape(),
];

module.exports = userCreateValidator;
