const nodemailer = require('nodemailer');
const dotenv = require('dotenv').config();


const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'khoshkaran.milad@gmail.com',
    pass: process.env.EMAIL_PASS
  }
})

const createOptions = (emailToSend, randomStamp) => {

  return {
    from: 'khoshkaran.milad@gmail.com',
    to: emailToSend,
    subject: 'Confirm email account',
    html: `<a href="http://localhost:4000/email/confirm/${randomStamp}">Confirm your account</a>`
  }

}


const ResetPassTransporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'khoshkaran.milad@gmail.com',
    pass: process.env.EMAIL_PASS
  }
})

const resetPassCreateOptions = (emailToSend, token) => {

  return {
    from: 'khoshkaran.milad@gmail.com',
    to: emailToSend,
    subject: 'NO-REPLY - Reset-Password',
    html: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
          'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
          `<a href="http://localhost:4000/users/resetPassword/${token}">Reset your password</a>` + '\n\n' +
          'If you did not request this, please ignore this email and your password will remain unchanged.'
  }

}

module.exports = {transporter, createOptions, resetPassCreateOptions};
