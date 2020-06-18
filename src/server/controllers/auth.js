const config = require('../config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const authService = require('../services/auth');
const clientService = require('../services/client');

const login = (request, response) => {
  return authService.authenticate(request.body)
    .then(token => {
      response.send({
        success: true,
        data: { token }
      });
    }).catch(err => {
      response.send({
        success: false,
        message: err.message
      })
    })
}

const register = (request, response) => {
  let name = request.body.name;
  return clientService.getClientByName(name || '')
    .then(exists => {
      if (exists) {
        return response.send({
          success: false,
          message: 'Registration failed. Client with this name already registered. '
        });
      }

      return clientService.getMaxClientRecordId()
        .then(maxId => {
          let client = {
            client_id: maxId + 1,
            name: request.body.name,
            email: request.body.email,
            token: 'abc'
          }
          console.log(client)
          return client;
        }).then(client => {
          return clientService.addClient(client)
            .then(() => response.send({success: true}));
        })
    })
}

module.exports = {
  login,
  register,

}