const express = require('express');
const bodyParser = require('body-parser');
const queries = require('./postgres');
const port = 3030;
const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({info: 'Node.js, Express and Postgres REST API'})
})

app.listen(port, () => {
  console.log(`App running on port ${port}`);
})
app.get('/clients', queries.getClients);
app.get('/clients/:id', queries.getClientById);
app.post('/clients', queries.createClient);
app.put('/clients/:id', queries.updateClient);
app.delete('/clients/:id', queries.deleteClient);
