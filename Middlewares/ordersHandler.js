const ordersModel = require('../models/ordersModel');
const paypal = require('paypal-rest-sdk');
const { transporter, adminOrdersInfo, userOrderConfirmation } = require('../utilities/emailOptions');
const lodash = require('lodash');
const lodashObject = require('lodash/fp/object');


paypal.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': 'Ab4z0WpX0rMuHRUCsH5OgP4hedQkhCcizp8jfQwW3JXq2OlYwhtCkMqwRKUy8GC9JEwCoY5GDWlxylnZ',
  'client_secret': 'EKVgj2OKCh3jX7wAU-Mi2ASWSye54kBEiuvtg4rPgIOcbq6K5_Ab_PbEdXC_vZnEhaTzkaR7nFW6agt7'
});



const submitOrder = (req, res, next) => {
  const ordersItems = req.body;
  console.log(ordersItems);
  const orderObject = {name: '', sku: 'Items', price: '', currency: 'EUR', quantity: 1} ;
  for (let i = 0 ; i < ordersItems.length ; i++) {
      _.pickby(orderObject, ordersItems[i].produktname)
  }
  console.log(itemName);
  const totalPrise =
  const createPayment = {
          intent: "sale",
          payer: {
              payment_method: "paypal"
          },
          redirect_urls: {
              return_url: "http://localhost:4000/orders/success",
              cancel_url: "http://localhost:4000/orders/cancel"
          },
          transactions: [{
              item_list: {
                  items: [{
                      name: 'Cutting Patterns',
                      sku: "item",
                      price: 100,
                      currency: "EUR",
                      quantity: 1
                  }]
              },
              amount: {
                  currency: "EUR",
                  total: '100.00'
              },
              description: "description"
          }]
      };
      // const createPaymentJson = JSON.stringify(createPayment);
      // paypal.payment.create(createPaymentJson, (error, payment) => {
      //   if (error) {
      //     console.log(error);
      //     return res.status(403).json(error);
      //   }
      //   console.log(payment);
      //   for (let i = 0 ; i < payment.links.length ; i++) {
      //     if (payment.links[i].rel === 'approval_url') {
      //       return res.redirect(payment.links[i].href);
      //     }
      //   }
      //
      // });

}

const successOrder = (req, res, next) => {
  const payerId = req.query.PayerID;
  const paymentId = req.query.paymentId;

  const executePayment = {
    payer_id: payerId,
    transactions: [{
      amount: {
        currency: 'EUR',
        total: '100.00'
      }
    }]
  }
  const executePaymentJson = JSON.stringify(executePayment);
  paypal.payment.execute(paymentId, executePaymentJson, async (error, payment) => {
    try {
      console.log('Get Payment Response');
      console.log(JSON.stringify(payment));
      const userMailOptions = userOrderConfirmation(payment.payer_info.email, orderDetails);
      await transporter.sendMail(userMailOptions);
      const antje = 'elfriede.und.fridolin@gmail.com';
      const adminMailOptions = adminOrdersInfo(antje, orderDetails);
      await transporter.sendMail(adminMailOptions);
      res.status(202).json({message: 'Successfully Paid!'});

    } catch (error) {
      console.log(error.response);
      return res.status(403).json(error);
    }
  })
}

const cancelOrder = (req, res, next) => {
  return res.status(300).json({message: 'Payment Canceled!'});
}




module.exports = { submitOrder, successOrder, cancelOrder };
