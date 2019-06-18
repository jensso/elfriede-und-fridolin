const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();


const authenticated = async (req, res, next) => {
  try {    
    const tokenCookie = req.cookies.authToken.split(' ')[1];
    const tokenDecoded = await jwt.decode(tokenCookie);
    req.token = tokenDecoded;
    next();
  }catch (error) {
    next(error);
  }
}

module.exports = authenticated;
