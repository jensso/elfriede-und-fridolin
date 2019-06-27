const userModel = require('../models/usersModel');

const confirmEmail = async (req, res, next) => {
  try {
    const user = await userModel.findOneAndUpdate({temporaryToken: req.params.stamp}, {$set: {isConfirmed: true}, $unset: {temporaryToken: ''}});
    user ? res.redirect('http://localhost:3000/login') : res.status(404).json({message: 'User was not found'})
  } catch(error) {
    next(error);
  }
}


module.exports = confirmEmail;
