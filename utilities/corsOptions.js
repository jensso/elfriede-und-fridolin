const whitelist = ['https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_express-checkout&token=EC-3PV35749HU926544N'];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

module.exports = corsOptions;
