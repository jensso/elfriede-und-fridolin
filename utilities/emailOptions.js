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

module.exports = {transporter, createOptions};
