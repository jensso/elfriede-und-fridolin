const userModel = require('../models/usersModel');
const { check, validationResult } = require('express-validator/check');

const getAllUsers = async (req, res, next) => {
  try {
    const allUsers = await userModel.find();
    res.status(200).send(allUsers);
  } catch (error) {
    next(error);
  }
}

const createUsers = async (req, res, next) => {
  
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    try {
      await userModel.create(req.body)
      res.status(200).json({'message': 'User has been created'});
    } catch(error){
      next(error);
    }
  } else {
    next(createError(403, errors.array()[0].msg))
  }
}


module.exports = { getAllUsers, createUsers };
