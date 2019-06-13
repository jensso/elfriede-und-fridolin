const userModel = require('../models/usersModel');
const { check, validationResult } = require('express-validator/check');
const createError = require('http-errors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();
const saltRounds = parseInt(process.env.SALT_ROUNDS);

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
      const hashedPassword = await bcrypt.hash(req.body.Password, saltRounds);
      req.body.Password = hashedPassword;
      await userModel.create(req.body)
      res.status(200).json({'message': 'User has been created'});
    } catch(error){
      next(error);
    }
  } else {
    next(createError(403, errors.array()[0].msg))
  }
}

const userLogin = async (req, res, next) => {
  try {
    const findUser = await userModel.findOne({Email: req.body.Email});
    if(!findUser){
      return res.status(404).json({'message': 'user not found!'})
    }
    const passwordMatched = await bcrypt.compare(req.body.Password, findUser.Password);
    if (!passwordMatched) {
      return res.status(404).json({'message': 'Invalid Password'});
    }

    const initialToken = await jwt.sign({Email: findUser.Email}, process.env.SECRET);
    const token = 'Bearer' + initialToken;
    res.cookie('authToken', token, {httpOnly: true});
    res.status(200).json({'message': 'You are logged in!'});
  } catch(error) {
    next(error);
  }
}

const userLoggedOut = async (req, res, next) => {
  try {

    res.clearCookie('authToken');
    res.status(200).json({'message': 'User is logged out'});
  }catch (error) {
    next(error);
  }
}

module.exports = { getAllUsers, createUsers, userLogin, userLoggedOut };
