const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();


const usersAuth = async (req, res, next) => {
  try {
    if (!req.cookies.authToken) {
      return res.status(401).json({message: 'Unauthorized Access!'});
    }
    const tokenCookie = req.cookies.authToken.split(' ')[1];
    const tokenDecoded = await jwt.decode(tokenCookie);
    req.token = tokenDecoded;
    next();
  }catch (error) {
    next(error);
  }
}

const adminAuth = async (req, res, next) => {
  try {
    if (!req.cookies.authToken) {
      return res.status(401).json({message: 'Unauthorized Access!'});
    }
    const tokenCookie = req.cookies.authToken.split(' ')[1];
    const tokenDecoded = await jwt.decode(tokenCookie);
    if (!tokenDecoded.isAdmin) {
      return res.status(401).json({message: 'Unauthorized Access! Only Admin has access.'})
    }
    req.token = tokenDecoded;
    next();
  }catch (error) {
    next(error);
  }
}



module.exports = { usersAuth, adminAuth};
