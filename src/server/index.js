const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const queries = require('./postgres');
const config = require('./config');
const router = require('./router');
const port = 3030;
const app = express();

//https://stackoverflow.com/questions/23509918/sequelize-how-to-find-a-max-element
//https://stackoverflow.com/questions/47878505/how-do-i-convert-a-sql-query-for-sequelize
// https://stackoverflow.com/questions/22643263/how-to-get-a-distinct-count-with-sequelize
//https://stackoverflow.com/questions/49424040/why-does-sequelize-add-extra-columns-to-select-query
//https://stackoverflow.com/questions/29233896/sequelize-table-without-column-id
//https://stackoverflow.com/questions/34247468/node-error-cannot-find-module-routes
// https://dev.to/vitaliikulyk/how-to-initialize-multilayer-nodejs-restful-api-with-jwt-auth-and-postgresql-in-3-steps--c8c
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(express.static('client'));
router.set(app);
app.get('/', (request, response) => {
  response.json({info: 'Node.js, Express and Postgres REST API'})
})

app.listen(port, () => {
  console.log(`App running on port ${port}`);
})
// app.get('/clients', queries.getClients);
// app.get('/clients/:id', queries.getClientById);
// app.post('/clients', queries.createClient);
// app.put('/clients/:id', queries.updateClient);
// app.delete('/clients/:id', queries.deleteClient);
