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

const userOrderConfirmation = (emailToSend, ordersInfo) => {
  return {
    from: 'elfriede.und.fridolin@gmail.com',
    to: emailToSend,
    subject: 'Your Purchase Details and Confrimation on Elfriede-und-Fridolin',
    html: `<p>Thank you for your Purchase, we confirmed your order and we will send it to you as soon as possible.</p>`+
          `<p>Here is your Order Details: </p> <br/>`+
          `<h3>Product 1</h3>`+
          `<p>-------------</p>`+
          `<p>Produktnummer: ${ordersInfo[1].Produktnummer}</p> `+
          `<p>Produktname: ${ordersInfo[1].Produktname}</p> `+
          `<p>ProduktTyp: ${ordersInfo[1].ProduktTyp}</p> `+
          `<p>Preis: ${ordersInfo[1].Preis}</p><br/> `+
          `<h3>Product 2</h3>`+
          `<p>-------------</p>`+
          `<p>Produktnummer: ${ordersInfo[2].Produktnummer}</p> `+
          `<p>Produktname: ${ordersInfo[2].Produktname}</p> `+
          `<p>ProduktTyp: ${ordersInfo[2].ProduktTyp}</p> `+
          `<p>Preis: ${ordersInfo[2].Preis}</p><br/> `+
          `<h3>Product 3</h3>`+
          `<p>-------------</p>`+
          `<p>Produktnummer: ${ordersInfo[3].Produktnummer}</p> `+
          `<p>Produktname: ${ordersInfo[3].Produktname}</p> `+
          `<p>ProduktTyp: ${ordersInfo[3].ProduktTyp}</p> `+
          `<p>Preis: ${ordersInfo[3].Preis}</p><br/> `+
          `<p>-------------</p>`+
          `<p>Total Preis: ${ordersInfo[0].totalPries} euro</p> `+
          `<p>Sincerely</p>`+
          `<p>Elfriede und Fridolin Team</p>`
  }
}

const adminOrdersInfo = (emailToSend, orderDetails) => {
  return {
    from: 'elfriede.und.fridolin@gmail.com',
    to: emailToSend,
    subject: 'New Orders on Elfriede-und-Fridolin',
    html: `<p>You have received new orders:</p>` +
          `<h3>customer Information:</h3>`  +
          `<p>Email: ${orderDetails[1].EmailAdress}</p> `+
          `<p>Vorname: ${orderDetails[1].Vorname}</p> `+
          `<p>Nachname: ${orderDetails[1].Nachname}</p> `+
          `<p>Strasse: ${orderDetails[1].Strasse}</p> `+
          `<p>HausNr: ${orderDetails[1].HausNr}</p> `+
          `<p>Postleitzahl: ${orderDetails[1].Postleitzahl}</p> `+
          `<p>Ort: ${orderDetails[1].Ort}</p> `+
          `<p>-------------</p>`+
          `<h3>Orders Information:</h3>`  +
          `<h3>Product 1</h3>`+
          `<p>-------------</p>`+
          `<p>Produktnummer: ${orderDetails[2].Produktnummer}</p> `+
          `<p>Produktname: ${orderDetails[2].Produktname}</p> `+
          `<p>ProduktTyp: ${orderDetails[2].ProduktTyp}</p> `+
          `<p>Preis: ${orderDetails[2].Preis}</p><br/> `+
          `<h3>Product 2</h3>`+
          `<p>-------------</p>`+
          `<p>Produktnummer: ${orderDetails[3].Produktnummer}</p> `+
          `<p>Produktname: ${orderDetails[3].Produktname}</p> `+
          `<p>ProduktTyp: ${orderDetails[3].ProduktTyp}</p> `+
          `<p>Preis: ${orderDetails[3].Preis}</p><br/> `+
          `<h3>Product 3</h3>`+
          `<p>-------------</p>`+
          `<p>Produktnummer: ${orderDetails[4].Produktnummer}</p> `+
          `<p>Produktname: ${orderDetails[4].Produktname}</p> `+
          `<p>ProduktTyp: ${orderDetails[4].ProduktTyp}</p> `+
          `<p>Preis: ${orderDetails[4].Preis}</p><br/> `+
          `<p>-------------</p>`+
          `<p>Total Preis: ${orderDetails[0].totalPries} euro</p> `
  }
}

module.exports = {transporter, createOptions, resetPassCreateOptions, userOrderConfirmation, adminOrdersInfo};
