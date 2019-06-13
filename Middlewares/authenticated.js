const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();


const authenticated = async (req, res, next) => {
  try {
    const tokenCookie = req.cookies.authToken.split(' ')[1];
    await jwt.verify(tokenCookie, process.env.SECRET);

    req.token = tokenCookie;

    next();
  }catch (error) {
    next(error);
  }
}

module.exports = authenticated;
