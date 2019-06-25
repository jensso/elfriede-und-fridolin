const nodemailer = require('nodemailer');
const dotenv = require('dotenv').config();


const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'elfriede.und.fridolin@gmail.com',
    pass: process.env.EMAIL_PASS
  }
})

const createOptions = (emailToSend, randomStamp) => {

  return {
    from: 'elfriede.und.fridolin@gmail.com',
    to: emailToSend,
    subject: 'Confirm email account',
    html: `<a href="http://localhost:4000/email/confirm/${randomStamp}">Confirm your account</a>`
  }

}


const ResetPassTransporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'elfriede.und.fridolin@gmail.com',
    pass: process.env.EMAIL_PASS
  }
})

const resetPassCreateOptions = (emailToSend, token) => {

  return {
    from: 'elfriede.und.fridolin@gmail.com',
    to: emailToSend,
    subject: 'NO-REPLY - Reset-Password',
    html: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
          'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
          `<a href="http://localhost:4000/users/resetPassword/${token}">Reset your password</a>` + '\n\n' +
          'If you did not request this, please ignore this email and your password will remain unchanged.'
  }

}

const userOrderConfirmation = (emailToSend, orderDetails) => {
  return {
    from: 'elfriede.und.fridolin@gmail.com',
    to: emailToSend,
    subject: 'Your Purchase Details and Confrimation on Elfriede-und-Fridolin',
    html: 'Dear User, \n\n' +
          'Thank you for your Purchase, we confirmed your payment and your order will send to you as soon as possible. \n\n' +
          'Here is your Order Details: \n\n' +
          `${orderDetails} \n\n` +
          'Sincerely \n\n' +
          'Elfriede und Fridolin Team'
  }
}

const adminOrdersInfo = (emailToSend, orderDetails) => {
  return {
    from: 'elfriede.und.fridolin@gmail.com',
    to: emailToSend,
    subject: 'New Orders on Elfriede-und-Fridolin',
    html: 'You have received new orders: \n\n' +
          'Orders Details: \n\n' +
          'User: user \n\n' +
          `${orderDetails}`
  }
}

module.exports = {transporter, createOptions, resetPassCreateOptions, userOrderConfirmation, adminOrdersInfo};
