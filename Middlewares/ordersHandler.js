const ordersModel = require('../models/ordersModel');
const paypal = require('paypal-rest-sdk');

paypal.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': 'Ab4z0WpX0rMuHRUCsH5OgP4hedQkhCcizp8jfQwW3JXq2OlYwhtCkMqwRKUy8GC9JEwCoY5GDWlxylnZ',
  'client_secret': 'EKVgj2OKCh3jX7wAU-Mi2ASWSye54kBEiuvtg4rPgIOcbq6K5_Ab_PbEdXC_vZnEhaTzkaR7nFW6agt7'
});



const submitOrder = (req, res, next) => {

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
              description: "Beautiful Skirt for 100 Euro!"
          }]
      };
      const createPaymentJson = JSON.stringify(createPayment);
      paypal.payment.create(createPaymentJson, (error, payment) => {
        if (error) {
          console.log(error);
          return res.status(403).json(error);
        }
        console.log(payment);
        for (let i = 0 ; i < payment.links.length ; i++) {
          if (payment.links[i].rel === 'approval_url') {
            return res.redirect(payment.links[i].href);
          }
        }
        // console.log(payment);
        // return res.send('OK');

      });
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
  paypal.payment.execute(paymentId, executePaymentJson, (error, payment) => {
    if(error) {
      console.log(error.response);
      return res.status(403).json(error);
    }
    console.log('Get Payment Response');
    console.log(JSON.stringify(payment));
    res.status(200).json({message: 'Successfully Paid!'});
  })
}

const cancelOrder = (req, res, next) => {
  return res.status(300).json({message: 'Payment Canceled!'});
}




module.exports = { submitOrder, successOrder, cancelOrder };
