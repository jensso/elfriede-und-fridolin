const userModel = require('../models/usersModel');
const { check, validationResult } = require('express-validator/check');
const createError = require('http-errors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();
const saltRounds = parseInt(process.env.SALT_ROUNDS);
const {createOptions, transporter, resetPassCreateOptions} = require('../utilities/emailOptions');


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
      req.body.isConfirmed = false;
      const createTimestamp = Date.now();
      const createMathRandom = Math.round(Math.random() * 10000);
      req.body.temporaryToken = createTimestamp.toString() + createMathRandom.toString();

      const hashedPassword = await bcrypt.hash(req.body.Password, saltRounds);
      req.body.Password = hashedPassword;
      await userModel.create(req.body);

      const mailOptions = createOptions(req.body.Email, req.body.temporaryToken);
      await transporter.sendMail(mailOptions);

      res.status(200).json({'message': 'User has been created. Check your inbox for confirmation'});
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
    console.log(userFound);
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

const sendTokenToResetPass = async (req, res, next) => {
  try {
    const userFound = await userModel.findOne({Email: req.body.email, isConfirmed: true});
    if (!userFound) {
      return res.status(404).json({message: 'User with this email address does not exist or your email in not confirmed!'});
      // return res.redirect('users/forgot');
    }
    const createTimestamp = Date.now();
    const createMathRandom = Math.round(Math.random() * 100000);
    userFound.resetPasswordToken = createTimestamp.toString() + createMathRandom.toString();
    userFound.resetPasswordExpires = Date.now() + 3600000 ;

    await userModel.findOneAndUpdate({Email: req.body.email}, {$set: {resetPasswordToken: userFound.resetPasswordToken, resetPasswordExpires: userFound.resetPasswordExpires}});

    const token = userFound.resetPasswordToken;

    const mailOptions = resetPassCreateOptions(req.body.email, token);
    await transporter.sendMail(mailOptions);
    res.status(202).json({message: 'email sent'});
  } catch(error) {
    next(error);
  }
}

const resetPass = async (req, res, next) => {
  try {
    const userWithValidToken = await userModel.findOne({
      resetPasswordToken: req.params.token,
      resetPasswordExpires: {$gt: Date.now()}
    });
    if (!userWithValidToken) {
      return res.status(401).json({message: 'Password reset Token in invalid or expired!'});
      // res.redirect('back');
    }
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    req.body.password = hashedPassword;
    await userModel.update({resetPasswordToken: req.params.token}, {$set: {Password: req.body.password}, $unset: {resetPasswordToken: undefined, resetPasswordExpires: undefined}});
    res.status(200).json({message: 'Your Password has been successfully reset!'});
  } catch(error) {
    next(error);
  }
}

const adminLogin = async (req, res, next) => {
  try {
    const findAdmin = await userModel.findOne({Email: req.body.email, isAdmin: true});
    if (!findAdmin) {
      return res.status(401).json({message: 'Authentication Failed!'});
    }
    const matchedPassword = await bcrypt.compare(req.body.password, findAdmin.Password);
    if (!matchedPassword) {
      return res.status(401).json({message: 'Authentication Failed!'});
        }
          const initialToken = await jwt.sign({Email: findAdmin.Email, isAdmin: findAdmin.isAdmin}, process.env.SECRET);
          const token = 'Bearer ' + initialToken;
          res.cookie('authToken', token, {httpOnly: true});
          res.status(200).json({message: 'Authentication Success!', Email: findAdmin.Email, isAdmin: findAdmin.isAdmin});
  } catch(error) {
    next(error);
  }
}



module.exports = { getAllUsers, createUsers, userLogin, userLoggedOut, deleteUserById, sendTokenToResetPass, resetPass, adminLogin };
