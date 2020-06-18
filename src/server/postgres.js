const Pool = require('pg').Pool;
const sourceDataConnection = {
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '1234',
  port: 5432,
}
const pool = new Pool(sourceDataConnection);
const getClients = (request, response) => {
  pool.query('SELECT * FROM client ', (err, result) => {
    if (err) {
      throw err;
    }
    response.status(200).json(result.rows);
  });
}
const getClientById = (request, response) => {
  pool.query(`SELECT * FROM client WHERE client_id=${request.params.id};`, (err, result) => {
    if (err) {
      throw err;
    }
    response.status(200).json(result.rows);
  });
}
const createClient = (request, response) => {
  const { name, email, token } = request.body;
  pool.query('INSERT INTO client (name, email, token) VALUES ($1, $2, $3)', [name, email, token], (err, result) => {
    if (err) {
      throw err;
    }
    response.status(201).send(`Client added with ID: ${result.id}`);
  });
}
const updateClient = (request, response) => {
  const id = parseInt(request.params.id)
  const { name, email, token } = request.body;
  pool.query('UPDATE client SET name=$1, email=$2, token=$3 WHERE client_id=$4;',
    [name, email, token, id],
    (err, result) => {
    if (err) {
      throw err;
    }
    response.status(200).send(`User modified successfully with ID: ${id}`);
  });
}
const deleteClient = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query(`DELETE FROM client WHERE client_id=${id}`, (err, result) => {
    if (err) throw err;
    response.status(200).send(`Client deleted successfully with ID: ${id}`);
  })
}
module.exports = {
  getClients,
  getClientById,
  createClient,
  updateClient,
  deleteClient
}