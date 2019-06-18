


const smtpTransporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'elfriede.und.fridolin@gmail.com',
    pass: process.env.EMAILPASS
  }
});

const mailOption = {
  to: userFound.Email,
  from: 'elfriede.und.fridolin@gmail.com',
  subject: 'RESET PASSWORD',
  text: 'click on the following link to reset your password:' 'http://'+req.header.host+'/reset'+token+'\n\n'
}

smtpTransporter.sendMail(mailOption, err => {
  res.status(200).json(message: 'An e-mail has been sent to ' + userFound.Email + ' with further instructions to reset your password.');
})
