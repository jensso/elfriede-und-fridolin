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
    await userModel.find({Email: req.body.Email})
    .exec()
    .then(userFound => {
      if (userFound.length < 1) {
        return res.status(401).json({message: 'Authentication email Failed!'});
      }
      bcrypt.compare(req.body.Password, userFound[0].Password, async (err, result) => {
        try {
          if (err) {
            return res.status(401).json({message: 'Authentication Failed!'});
          }
          if (result) {
            const initialToken = await jwt.sign({Email: userFound[0].Email}, process.env.SECRET,);
            const token = 'Bearer ' + initialToken;
            res.cookie('authToken', token, {httpOnly: true});
            res.status(200).json({message: 'Authentication Success!'});
          }
          res.status(401).json({message: 'Authentication password Failed!'})
        } catch (error) {
          next(error);
        }
      })
    })

  } catch (error) {
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
