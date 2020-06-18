const sequelize = require('../db');
const Client = require('../models/index').Client;

const addClient = client => Client.create(client);
const getClientByName = name => Client.findOne({where: {name}});
const getNumberOfClients = () => Client.count();
const getMaxClientRecordId = () => Client.max('client_id');
module.exports = {
  addClient,
  getClientByName,
  getNumberOfClients,
  getMaxClientRecordId,

}