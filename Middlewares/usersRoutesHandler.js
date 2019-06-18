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
    const userFound = await userModel.findOne({Email: req.body.Email})

      if (!userFound) {
        return res.status(401).json({message: 'Authentication email Failed!'});
      }
      const matchedPassword = await bcrypt.compare(req.body.Password, userFound.Password);
        if (!matchedPassword) {
            return res.status(401).json({message: 'Authentication Failed!'});
          }
            const initialToken = await jwt.sign({Email: userFound.Email, isAdmin: userFound.isAdmin}, process.env.SECRET);
            const token = 'Bearer ' + initialToken;
            res.cookie('authToken', token, {httpOnly: true});
            res.status(200).json({message: 'Authentication Success!', Email: userFound.Email, isAdmin: userFound.isAdmin});

        }


   catch (error) {
    next(error);
  }
}

const deleteUserById = async (req, res, next) => {
  try {
    const userToDelete = await userModel.findOneAndDelete({ _id: req.params.userId});
    userToDelete ? res.status(200).json({message: 'Your account has been deactivated and you logged out!'}) :  res.status(404).json({message: 'User is Not Found!'});  

  } catch (error) {
    next(error);
  }
}

const userLoggedOut = async (req, res, next) => {
  try {
    res.clearCookie('authToken');
    res.status(200).json({message: 'User is logged out'});
  }catch (error) {
    next(error);
  }
}

module.exports = { getAllUsers, createUsers, userLogin, userLoggedOut, deleteUserById };
