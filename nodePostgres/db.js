const {Client} = require('pg');
const client = new Client({
    user: "node_postgres",
    password: "node_postgres",
    host: "localhost",
    port: 5432,
    database: "node_postgres"
});
client.connect();
module.exports = client;