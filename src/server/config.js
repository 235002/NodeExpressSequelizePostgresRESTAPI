
const config = {
  sourceDataConnection: {
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '1234',
    port: 5432,
  },
  sequelizeConnectionData: 'postgres://postgres:1234@localhost:5432/postgres',
  port: 3030,
  saltRounds: 2,
  jwtSecret: 'thatsmysecret',
  tokenExpireTime: '24h',

}

module.exports = config