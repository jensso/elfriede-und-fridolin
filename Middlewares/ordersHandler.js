const ordersModel = require('../models/ordersModel');
const paypal = require('paypal-rest-sdk');
const { transporter, adminOrdersInfo, userOrderConfirmation } = require('../utilities/emailOptions');

paypal.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': 'Ab4z0WpX0rMuHRUCsH5OgP4hedQkhCcizp8jfQwW3JXq2OlYwhtCkMqwRKUy8GC9JEwCoY5GDWlxylnZ',
  'client_secret': 'EKVgj2OKCh3jX7wAU-Mi2ASWSye54kBEiuvtg4rPgIOcbq6K5_Ab_PbEdXC_vZnEhaTzkaR7nFW6agt7'
});

const submitOrder = async (req, res, next) => {

  try {
    let totalPrice = 0;
    for (let item of req.body) {
      totalPrice += item.preis;
    }
    // const orderData = {userInfo: req.token.Email, orderItems: req.body, totalPries: totalPrice};
    // console.log(orderData);
    // await ordersModel.create(orderData);

    // Find the customer from the userInfo of the order! That means you go to database.
    //  You go to database and find info about the user, address and etc
    res.status(200).json({msg: 'Order has been received succesfully!'});
    console.log('reach to this point');

  // const ordersItems = req.body;
  // const orderObject = {name: '', sku: 'Items', price: '', currency: 'EUR', quantity: 1} ;
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

      const items = ordersItems.map(orderItem => {
        return {
          name: orderItem.produktname,
          price: orderItem.preis,
          sku: "item",
          currency: "EUR",
          quantity: 1
        }
      })

      console.log(items);
      //
      createPayment.transactions[0].item_list.items = items;
      // let totalPrice = 0;
      for (let item of items) {
        totalPrice += item.price;
        console.log(totalPrice);
      }
      createPayment.transactions[0].amount.total = totalPrice;

      const createPaymentJson = JSON.stringify(createPayment);
      paypal.payment.create(createPaymentJson, (error, payment) => {
        if (error) {
          console.log(error);
          return res.status(403).json(error);
        }

        console.log(payment.links);

        for ( let i = 0 ; i < payment.links.length ; i++ ) {
          if (payment.links[i].rel === 'approval_url') {
            return res.redirect(payment.links[i].href);
          }
        }

      });

    } catch(error) {
      next(error);
    }
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
