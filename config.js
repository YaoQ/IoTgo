var _db = {
  uri: 'mongodb://localhost/iotgo',   // MongoDB database address
  options: {
    user: 'iotgo',                    // MongoDB database username
    pass: 'iotgo'                     // MongoDB database password
  }
}

// Used in docker?
if (process.env['MONGODB_PORT']) {
  _db.uri = process.env['MONGODB_PORT'].replace('tcp', 'mongodb');
  _db.options = {};
}

module.exports = {
  host: 'iotgo.iteadstudio.com',        // Hostname of IoTgo platform
  db: _db,
  jwt: {
    secret: 'jwt_secret'                // Shared secret to encrypt JSON Web Token
  },
  admin:{
    'iotgo@iteadstudio.com': 'password' // Administrator account of IoTgo platform
  },
  page: {
    limit: 50,                          // Default query page limit
    sort: -1                            // Default query sort order
  },
  recaptcha: {
      secret: '',                       // Google reCAPTCHA serect
      url: 'https://www.google.com/recaptcha/api/siteverify'
    },
  pendingRequestTimeout: 3000
};
