const Sequelize = require('sequelize');
const sequelize = require('../db');

const Client = sequelize.define('client', {
  client_id: {
    type: Sequelize.DataTypes.INTEGER,
    primaryKey: true
  },
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  token: Sequelize.STRING,
}, {
  tableName: 'client',
  timestamps: false,
  underscored: true
});

Client.removeAttribute('id');

module.exports = {
  Client,

}
