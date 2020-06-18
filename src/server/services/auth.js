const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Client = require('../models').Client;
const config = require('../config');

const authenticate = params => {
  return Client.findOne({
    where: {
      name: params.name,
      email: params.email
    },
    raw: true
  }).then((client) => {
    if (!client)
      throw new Error('Authentication failed. Client not found.');
    console.log(client);
    console.log(params.email, client.email);

    // if (!bcrypt.compareSync(params.email || '', client.email))
    if (params.email !== client.email)
      throw new Error('Authentication failed. Wrong email.');

    const payload = {
      name: client.name,
      email: client.email,
      token: client.token
    };
    let token = jwt.sign(payload, config.jwtSecret, {
      expiresIn: config.tokenExpireTime
    });
    console.log(token);
    return token;
  });
}

module.exports = {
  authenticate,

}